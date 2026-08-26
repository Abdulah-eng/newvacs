import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildSoapGradingPrompt } from '../../../../lib/ai/prompts'
import granularRubrics from '../../../../data/granular_rubrics.json'

// Maximum rubric items to send in a single LLM call.
// Maria C Wednesday has 352 items (~24k tokens) which exceeds output limits.
// Chunking keeps each call well within safe output size.
const RUBRIC_CHUNK_SIZE = 80


const NAME_TO_LETTER = {
  'Maria Gonzalez': 'A',
  'James Wilson': 'B',
  'Linda Martinez': 'C',
  'Michael Turner': 'A',
  'Angela Rodriguez': 'B',
  'David Chen': 'C',
  'Sarah Thompson': 'A',
  'Robert "Bob" Jenkins': 'B',
  'Robert Jenkins': 'C',
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
        // Large rubric: grade in chunks to avoid LLM output truncation
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
 * and grade each chunk separately, then merge the deductions.
 */
async function gradeInChunks(originalMessages, fullRubric, studentSoap, hiddenInfoLog, patientName, visitDay) {
  const chunks = []
  for (let i = 0; i < fullRubric.length; i += RUBRIC_CHUNK_SIZE) {
    chunks.push(fullRubric.slice(i, i + RUBRIC_CHUNK_SIZE))
  }

  const allDeductions = []
  const allStrengths = []
  const allGuidance = []
  const allUnsafeFlags = []

  for (let idx = 0; idx < chunks.length; idx++) {
    const chunk = chunks[idx]
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

    const chunkResult = await callJsonLlm(chunkMessages)

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
