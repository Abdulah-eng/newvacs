import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildCumulativeSummaryPrompt } from '../../../../lib/ai/prompts'

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
      weeklySummaries
    } = body

    const systemPrompt = buildCumulativeSummaryPrompt({
      studentName,
      weeklySummaries
    })

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'Generate the cumulative 5-week performance summary.' }
    ]

    const result = await callJsonLlm(messages)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Cumulative summary AI error:', error)
    return NextResponse.json({ error: error.message || 'Failed to generate cumulative summary' }, { status: 500 })
  }
}
