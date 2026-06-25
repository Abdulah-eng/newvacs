import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildSoapGradingPrompt } from '../../../../lib/ai/prompts'

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
      gradingCriteria,
      sourceHierarchy,
      patientName,
      visitDay
    } = body

    const systemPrompt = buildSoapGradingPrompt({
      studentSoap,
      goldSoap,
      transcript,
      hiddenInfoLog,
      gradingCriteria,
      sourceHierarchy,
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

    return NextResponse.json(result)
  } catch (error) {
    console.error('SOAP grading AI error:', error)
    return NextResponse.json({ error: error.message || 'Failed to grade SOAP note' }, { status: 500 })
  }
}
