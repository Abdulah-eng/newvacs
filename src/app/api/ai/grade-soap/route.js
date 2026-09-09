import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildSoapGradingPrompt } from '../../../../lib/ai/prompts'
import granularRubrics from '../../../../data/granular_rubrics.json'

// Maximum rubric items to send in a single LLM call.
// At 70 items per chunk the JSON output stays well within the model's safe
// output limit while keeping the total number of parallel chunks low.
const RUBRIC_CHUNK_SIZE = 70


const NAME_TO_LETTER = {
  'Maria Gonzalez': 'A',
  'James Wilson': 'B',
  'Linda Martinez': 'C',
  'Michael Turner': 'A',
  'Angela Rodriguez': 'B',
  'David Chen': 'C',
  'Sarah Thompson': 'A',
  // Robert Jenkins is Patient B in Week 3.
  // Both name variants must map to 'B' — the quoted nickname variant
  // and the plain full name sent by the frontend (c.PATIENT.name).
  'Robert "Bob" Jenkins': 'B',
  'Robert Jenkins': 'B',
  'Maria Thompson': 'C',
  'Michael Thompson': 'A',
  'Angela Brooks': 'B',
  'Sarah Mitchell': 'A',
  'Jessica Ramirez': 'B',
  'David Carter': 'C',
}

export async function POST(request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const {
      studentSoap,
      goldSoap,
      transcript,
      hiddenInfoLog,
      weekId,
      patientName,
      visitDay
    } = body

    const letter = NAME_TO_LETTER[patientName]
    const key = `Week${weekId}_Patient_${letter}_${visitDay}`
    const granularRubric = granularRubrics[key]

    if (!granularRubric) {
      throw new Error(`Granular rubric not found for key: ${key}`)
    }

    const systemPrompt = buildSoapGradingPrompt({
      studentSoap,
      hiddenInfoLog,
      granularRubric,
      patientName,
      visitDay
    })

    // For grading, we can just send the system prompt with the JSON structure requested
    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'Grade the provided SOAP note based on the rubric and source set.' }
    ]

    let result;
    try {
      if (granularRubric.length > RUBRIC_CHUNK_SIZE) {
        // Large rubric: grade in parallel chunks to avoid LLM output truncation
        // and to prevent sequential timeouts on very large rubrics (e.g. 352 items).
        result = await gradeInChunks(messages, granularRubric, studentSoap, hiddenInfoLog, patientName, visitDay)
      } else {
        result = await callJsonLlm(messages)
      }
    } catch (e) {
      console.error('Grading LLM JSON Error:', e)
      return NextResponse.json({ error: 'The AI grader failed to return a valid response (Unexpected end of JSON input). Please submit again.' }, { status: 500 })
    }

    let maxTotal = 0
    granularRubric.forEach(item => { maxTotal += item.points })
    let totalScore = maxTotal

    const missedItems = []
    if (result.itemized_deductions && Array.isArray(result.itemized_deductions)) {
      result.itemized_deductions.forEach(deduction => {
        const lost = deduction.max_points - deduction.awarded_points
        if (lost > 0) {
          totalScore -= lost
          // Map to the frontend's expected missed_items format
          missedItems.push({
            item: `[${deduction.id}] -${lost.toFixed(1)} pts`,
            clinical_importance: deduction.reason
          })
        }
      })
    }
    
    totalScore = Math.max(0, totalScore)

    const formattedResult = {
      total_score: parseFloat(totalScore.toFixed(1)),
      strengths: result.strengths || '',
      improvement_guidance: result.improvement_guidance || '',
      missed_items: missedItems,
      itemized_deductions: result.itemized_deductions || [],
      unsafe_flags: result.unsafe_flags || []
    }

    return NextResponse.json(formattedResult)
  } catch (error) {
    console.error('SOAP grading AI error:', error)
    return NextResponse.json({ error: error.message || 'Failed to grade SOAP note' }, { status: 500 })
  }
}


export const maxDuration = 300;

/**
 * For rubrics with more than RUBRIC_CHUNK_SIZE items, split into chunks
 * and grade ALL chunks in parallel (Promise.all), then merge the results.
 *
 * Why parallel?  Sequential grading of the largest rubrics (e.g. 352-item
 * Week3_Patient_C_Wednesday → 6 chunks) was taking ~9 minutes because each
 * LLM call waited for the previous one to finish.  Running all chunks at once
 * reduces wall-clock time to a single LLM round-trip (~60–90 s).
 */
async function gradeInChunks(originalMessages, fullRubric, studentSoap, hiddenInfoLog, patientName, visitDay) {
  const chunks = []
  for (let i = 0; i < fullRubric.length; i += RUBRIC_CHUNK_SIZE) {
    chunks.push(fullRubric.slice(i, i + RUBRIC_CHUNK_SIZE))
  }

  // Fire all chunk LLM calls simultaneously
  const chunkResults = await Promise.all(
    chunks.map((chunk, idx) => {
      const chunkPrompt = buildSoapGradingPrompt({
        studentSoap,
        hiddenInfoLog,
        granularRubric: chunk,
        patientName,
        visitDay,
        chunkInfo: `(Rubric chunk ${idx + 1} of ${chunks.length} — evaluate ONLY the ${chunk.length} items provided)`
      })

      const chunkMessages = [
        { role: 'system', content: chunkPrompt },
        { role: 'user', content: `Grade the SOAP note against rubric chunk ${idx + 1} of ${chunks.length}.` }
      ]

      return callJsonLlm(chunkMessages)
    })
  )

  // Merge results from all chunks
  const allDeductions = []
  const allStrengths = []
  const allGuidance = []
  const allUnsafeFlags = []

  for (const chunkResult of chunkResults) {
    if (chunkResult.itemized_deductions && Array.isArray(chunkResult.itemized_deductions)) {
      allDeductions.push(...chunkResult.itemized_deductions)
    }
    if (chunkResult.strengths) allStrengths.push(chunkResult.strengths)
    if (chunkResult.improvement_guidance) allGuidance.push(chunkResult.improvement_guidance)
    if (chunkResult.unsafe_flags && Array.isArray(chunkResult.unsafe_flags)) {
      allUnsafeFlags.push(...chunkResult.unsafe_flags)
    }
  }

  return {
    itemized_deductions: allDeductions,
    strengths: allStrengths.filter(Boolean).join(' '),
    improvement_guidance: allGuidance.filter(Boolean).join(' '),
    unsafe_flags: allUnsafeFlags
  }
}

