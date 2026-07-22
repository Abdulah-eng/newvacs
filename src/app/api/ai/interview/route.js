import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildPatientInterviewPrompt } from '../../../../lib/ai/prompts'

/**
 * Converts our chat array (with 'patient' and 'student' roles) to Anthropic's
 * strict format: alternating user/assistant messages, merging any consecutive
 * same-role messages into a single message to avoid API errors.
 */
function sanitizeForAnthropic(chatHistory, newQuestion) {
  const raw = [
    ...chatHistory.map(msg => ({
      role: msg.role === 'patient' ? 'assistant' : 'user',
      content: msg.role === 'patient'
        ? JSON.stringify({ response: msg.text || '', hidden_info_triggered: null, hidden_info_topic: null })
        : (msg.text || '')
    })),
    { role: 'user', content: newQuestion }
  ].filter(m => m.content.trim() !== '')

  // Merge consecutive same-role messages and ensure strict alternation
  const merged = []
  for (const msg of raw) {
    if (merged.length > 0 && merged[merged.length - 1].role === msg.role) {
      merged[merged.length - 1].content += '\n' + msg.content
    } else {
      merged.push({ role: msg.role, content: msg.content })
    }
  }

  // Anthropic requires the first message to be from 'user'
  while (merged.length > 0 && merged[0].role === 'assistant') {
    merged.shift()
  }

  return merged
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

    // Build strictly alternating messages for Anthropic
    const userMessages = sanitizeForAnthropic(chatHistory, question)

    const messages = [
      { role: 'system', content: systemPrompt },
      ...userMessages
    ]

    const result = await callJsonLlm(messages)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Interview AI error:', JSON.stringify({
      message: error.message,
      status: error.status,
      error: error.error,
      anthropicModel: process.env.ANTHROPIC_MODEL
    }))
    return NextResponse.json(
      { error: error.message || 'Failed to process interview question', details: error.error, rawText: error.rawText },
      { status: 500 }
    )
  }
}

