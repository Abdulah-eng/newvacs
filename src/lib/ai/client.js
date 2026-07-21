import Anthropic from '@anthropic-ai/sdk'

function getAnthropicClient() {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY is not configured.')
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
}

/**
 * Calls the AI with JSON mode instructions.
 * Used by: SOAP grader, Journal Club grader, Weekly Summary, Cumulative Summary
 */
export async function callJsonLlm(messages, modelOverride = null) {
  const anthropic = getAnthropicClient()
  
  // Extract system message as Anthropic expects it as a top-level parameter
  const systemMsg = messages.find(m => m.role === 'system')?.content || ''
  const userMessages = messages.filter(m => m.role !== 'system')

  const response = await anthropic.messages.create({
    model: modelOverride || process.env.ANTHROPIC_MODEL || 'claude-sonnet-5',
    max_tokens: 8192,
    temperature: 0.2,
    system: systemMsg + '\n\nIMPORTANT: You must respond ONLY with a valid JSON object. Do not include markdown code blocks, conversational text, or explanations before or after the JSON.',
    messages: userMessages,
  })

  let text = response.content[0].text
  
  // Clean markdown code blocks just in case Claude wraps it in ```json
  text = text.replace(/```json\n?/gi, '').replace(/```\n?/g, '').trim()
  
  try {
    return JSON.parse(text)
  } catch (e) {
    console.error('Anthropic JSON parse error. Raw text:', text)
    throw new Error('Failed to parse AI response as JSON')
  }
}

/**
 * Standard chat completion without JSON requirement.
 * Used by: Patient Interview conversational replies
 */
export async function callLlm(messages, modelOverride = null) {
  const anthropic = getAnthropicClient()
  
  const systemMsg = messages.find(m => m.role === 'system')?.content || ''
  const userMessages = messages.filter(m => m.role !== 'system')

  const response = await anthropic.messages.create({
    model: modelOverride || process.env.ANTHROPIC_MODEL || 'claude-sonnet-5',
    max_tokens: 4096,
    temperature: 0.7,
    system: systemMsg,
    messages: userMessages,
  })

  return response.content[0].text
}

