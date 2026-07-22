import { NextResponse } from 'next/server'
import { callJsonLlm } from '../../../../lib/ai/client'
import { buildPatientInterviewPrompt } from '../../../../lib/ai/prompts'

// GET /api/debug-ai/interview-test  — tests the exact interview pipeline end-to-end
export async function GET() {
  try {
    const systemPrompt = buildPatientInterviewPrompt({
      weekId: 1,
      diseaseStates: ['hypertension'],
      patientId: 'test-patient',
      visitDay: 1,
      patientMasterProfile: { name: 'Test Patient', age: 60 },
      dailyCaseFacts: { vitals: { bp: '140/90' }, meds: ['lisinopril'] },
      aiQaGuide: [{ question: 'Are you taking your meds?', answer: 'Yes, every morning.' }],
      hiddenInfoMap: []
    })

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'Have you been taking your blood pressure medication?' }
    ]

    const result = await callJsonLlm(messages)
    return NextResponse.json({ status: 'success', result })

  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: error.message,
      http_status: error.status,
      error_detail: error.error,
      error_body: error.error?.message,
      model_used: process.env.ANTHROPIC_MODEL || 'claude-sonnet-5'
    }, { status: 200 }) // Return 200 so we can read the body
  }
}


export const maxDuration = 60;
