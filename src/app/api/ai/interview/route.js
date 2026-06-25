import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildPatientInterviewPrompt } from '../../../../lib/ai/prompts'

export async function POST(request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { 
      question,
      chatHistory = [],
      weekId,
      diseaseStates,
      patientId,
      visitDay,
      patientMasterProfile,
      dailyCaseFacts,
      aiQaGuide,
      hiddenInfoMap 
    } = body

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 })
    }

    const systemPrompt = buildPatientInterviewPrompt({
      weekId,
      diseaseStates,
      patientId,
      visitDay,
      patientMasterProfile,
      dailyCaseFacts,
      aiQaGuide,
      hiddenInfoMap
    })

    const messages = [
      { role: 'system', content: systemPrompt },
      ...chatHistory.map(msg => ({ role: msg.role === 'patient' ? 'assistant' : 'user', content: msg.text })),
      { role: 'user', content: question }
    ]

    // Use the 8B instant model for conversational interviews to drastically reduce latency
    const result = await callJsonLlm(messages, 'llama-3.1-8b-instant')

    return NextResponse.json(result)
  } catch (error) {
    console.error('Interview AI error:', error)
    return NextResponse.json({ error: error.message || 'Failed to process interview question' }, { status: 500 })
  }
}
