import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildJournalGradingPrompt } from '../../../../lib/ai/prompts'
import { getWeek } from '../../../../data/weeks'
import { JOURNAL_KEYS } from '../../../../data/server/journalKeys'

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
      summaryResponses,
      weekId,
      weekTitle
    } = body

    const week = getWeek(weekId)
    const journalId = week?.journal?.id || 'journal-club'
    
    // Construct expected answers from server keys
    const serverKey = JOURNAL_KEYS[journalId]?.questions || {}
    const articleInterpretation = studentResponses.map((r, i) => {
      const qKey = `q${i + 1}`
      return { questionId: r.questionId, expectedAnswer: serverKey[qKey] || 'N/A' }
    })
    
    // Construct model summary from trial data
    const trial = week?.journal?.trial || {}
    const modelSummary = {
      'Background / rationale': trial.name + ' - ' + week?.journal?.description,
      'Methods / design': trial.facts ? trial.facts.map(f => `${f.label}: ${f.value}`).join(', ') : '',
      'Results': (trial.primaryEndpoint ? 'Primary: ' + trial.primaryEndpoint.join(', ') : '') + ' | ' + (trial.primaryResult ? 'Results: ' + trial.primaryResult.map(f => `${f.label}: ${f.value}`).join(', ') : ''),
      'Critical appraisal': trial.safety ? 'Safety: ' + trial.safety.join(', ') : '',
      'Clinical application / bottom line': 'See application questions for context'
    }

    const patientCases = week?.patients?.map(p => `${p.name} - ${p.id}`).join(', ') || 'N/A'

    const systemPrompt = buildJournalGradingPrompt({
      summaryResponses: summaryResponses || {},
      studentResponses,
      articleInterpretation,
      modelSummary,
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
