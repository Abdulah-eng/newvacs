import { NextResponse } from 'next/server'

export async function GET() {
  const key = process.env.ANTHROPIC_API_KEY
  const model = process.env.ANTHROPIC_MODEL

  const config = {
    ANTHROPIC_MODEL: model || '(not set — will use hardcoded fallback: claude-sonnet-5)',
    ANTHROPIC_KEY_PREFIX: key ? key.substring(0, 25) + '...' : '(NOT SET!)',
    ANTHROPIC_KEY_LENGTH: key ? key.length : 0,
    NODE_ENV: process.env.NODE_ENV,
  }

  // Try a real API call to Anthropic
  let apiTest = { status: 'not_attempted' }
  if (key) {
    try {
      const Anthropic = (await import('@anthropic-ai/sdk')).default
      const anthropic = new Anthropic({ apiKey: key })
      const res = await anthropic.messages.create({
        model: model || 'claude-sonnet-5',
        max_tokens: 32,
        messages: [{ role: 'user', content: 'Reply with only the word: WORKING' }]
      })
      apiTest = { status: 'success', reply: res.content[0].text, model_used: model || 'claude-sonnet-5' }
    } catch (e) {
      apiTest = {
        status: 'error',
        message: e.message,
        http_status: e.status,
        error_type: e.error?.type,
        model_attempted: model || 'claude-sonnet-5'
      }
    }
  } else {
    apiTest = { status: 'skipped', reason: 'ANTHROPIC_API_KEY not found in environment' }
  }

  return NextResponse.json({ config, apiTest })
}


export const maxDuration = 60;
