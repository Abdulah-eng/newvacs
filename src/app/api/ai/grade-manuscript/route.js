import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { CAPSTONE_TOPIC_MASH } from '../../../../data/week6_capstone'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildCapstoneGradingPrompt } from '../../../../lib/ai/prompts'
import { CAPSTONE_MODEL_ANSWER, CAPSTONE_GRANULAR_RUBRIC } from '../../../../data/server/capstoneKeys'

export async function POST(req) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { manuscript, topicId } = body

    if (!manuscript || !topicId) {
      return NextResponse.json({ error: 'Missing manuscript or topicId' }, { status: 400 })
    }

    const systemPrompt = buildCapstoneGradingPrompt({
      manuscript,
      modelAnswer: CAPSTONE_MODEL_ANSWER,
      granularRubric: CAPSTONE_GRANULAR_RUBRIC,
      rubricSections: CAPSTONE_TOPIC_MASH.assignmentGuide.requiredSections
    })

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'Grade the provided Capstone manuscript against the model answer.' }
    ]

    const result = await callJsonLlm(messages)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error grading manuscript:', error)
    // Forward the actual error message to the client for easier debugging
    return NextResponse.json(
      { error: error.message || 'Internal Server Error', details: error.error || error },
      { status: error.status === 413 ? 413 : 500 }
    )
  }
}



export const maxDuration = 60;
