import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildWeeklySummaryPrompt } from '../../../../lib/ai/prompts'

export async function POST(request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const {
      studentName,
      weekNumber,
      weekTitle,
      diseaseStates,
      quizFirstScore,
      quizFinalScore,
      quizAttempts,
      soapScores,
      journalScore,
      hiddenInfoStats
    } = body

    const systemPrompt = buildWeeklySummaryPrompt({
      studentName,
      weekNumber,
      weekTitle,
      diseaseStates,
      quizFirstScore,
      quizFinalScore,
      quizAttempts,
      soapScores,
      journalScore,
      hiddenInfoStats
    })

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'Generate the weekly performance summary.' }
    ]

    const result = await callJsonLlm(messages)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Weekly summary AI error:', error)
    return NextResponse.json({ error: error.message || 'Failed to generate weekly summary' }, { status: 500 })
  }
}
