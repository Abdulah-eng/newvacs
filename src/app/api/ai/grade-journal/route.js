import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildJournalGradingPrompt } from '../../../../lib/ai/prompts'

export async function POST(request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const {
      studentResponses,
      articleInterpretation,
      rubric,
      patientCases,
      weekTitle
    } = body

    const systemPrompt = buildJournalGradingPrompt({
      studentResponses,
      articleInterpretation,
      rubric,
      patientCases,
      weekTitle
    })

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'Grade the provided journal club responses.' }
    ]

    const result = await callJsonLlm(messages)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Journal grading AI error:', error)
    return NextResponse.json({ error: error.message || 'Failed to grade journal club responses' }, { status: 500 })
  }
}
