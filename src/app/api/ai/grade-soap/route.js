import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildSoapGradingPrompt } from '../../../../lib/ai/prompts'
import granularRubrics from '../../../../data/granular_rubrics.json'

const NAME_TO_LETTER = {
  'Maria Gonzalez': 'A',
  'James Wilson': 'B',
  'Linda Martinez': 'C',
  'Michael Turner': 'A',
  'Angela Rodriguez': 'B',
  'David Chen': 'C',
  'Sarah Thompson': 'A',
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

    // Use a more capable model for grading if possible, but 4o-mini is fine for now
    const result = await callJsonLlm(messages)

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


export const maxDuration = 60;
