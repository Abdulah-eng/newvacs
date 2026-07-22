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
    system: systemMsg + '\n\nIMPORTANT: You must respond ONLY with a valid JSON object. Do not include markdown code blocks, conversational text, or explanations before or after the JSON.',
    messages: [
      ...userMessages,
      { role: 'assistant', content: '{' }
    ],
  })

  let text = response.content.find(b => b.type === 'text')?.text || ''
  text = '{' + text // re-attach the prefilled brace
  
  // Clean markdown code blocks just in case
  text = text.replace(/```json\n?/gi, '').replace(/```\n?/g, '').trim()
  
  try {
    // Attempt direct parse first
    return JSON.parse(text)
  } catch (e) {
    // If it fails, try to extract JSON from conversational padding (common with Thinking models)
    try {
      const startIndex = text.indexOf('{')
      const endIndex = text.lastIndexOf('}')
      if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
        const jsonStr = text.substring(startIndex, endIndex + 1)
        return JSON.parse(jsonStr)
      }
    } catch (e2) {
      // Fall through to the error throw
    }
    
    console.error('Anthropic JSON parse error. Raw text:', text)
    const err = new Error('Failed to parse AI response as JSON. See server logs for raw text.')
    err.rawText = text
    throw err
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
    system: systemMsg,
    messages: userMessages,
  })

  return response.content.find(b => b.type === 'text')?.text || ''
}

