import Anthropic from '@anthropic-ai/sdk'

function getAnthropicClient() {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY is not configured.')
  return new Anthropic({ 
    apiKey: process.env.ANTHROPIC_API_KEY,
    timeout: 300000 // 5 minutes
  })
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

  const baseModel = modelOverride || process.env.ANTHROPIC_MODEL || 'claude-sonnet-5'
  
  // List of fallback models to try if the first one fails
  const modelsToTry = [baseModel]
  if (baseModel === 'llama-3.1-8b-instant') {
    modelsToTry.push('llama-3.3-70b-versatile')
    modelsToTry.push('mixtral-8x7b-32768')
  }

  let lastError = null
  for (const model of modelsToTry) {
    try {
      const response = await anthropic.messages.create({
        model: model,
        max_tokens: 32768,
        system: systemMsg + '\n\nIMPORTANT: You must respond ONLY with a valid JSON object. Do not include markdown code blocks, conversational text, or explanations before or after the JSON.',
        messages: userMessages,
      })

      let text = response.content.find(b => b.type === 'text')?.text || ''
      
      // Strip out <think> tags if they exist (used by deepseek/reasoning models)
      text = text.replace(/<think>[\s\S]*?<\/think>/g, '').trim()

      // Clean markdown code blocks just in case
      text = text.replace(/```json\n?/gi, '').replace(/```\n?/g, '').trim()
      
      try {
        // Attempt direct parse first
        const cleaned = cleanJsonNestedQuotes(text)
        return JSON.parse(cleaned)
      } catch (e) {
        // If it fails, try to extract JSON from conversational padding (common with Thinking models)
        const firstCurly = text.indexOf('{')
        const lastCurly = text.lastIndexOf('}')
        const firstSquare = text.indexOf('[')
        const lastSquare = text.lastIndexOf(']')
        
        let startIndex = -1
        let endIndex = -1
        
        if (firstCurly !== -1 && (firstSquare === -1 || firstCurly < firstSquare)) {
            startIndex = firstCurly
            endIndex = lastCurly
        } else if (firstSquare !== -1) {
            startIndex = firstSquare
            endIndex = lastSquare
        }

        if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
          const jsonStr = text.substring(startIndex, endIndex + 1)
          try {
            const cleaned = cleanJsonNestedQuotes(jsonStr)
            return JSON.parse(cleaned)
          } catch (innerErr) {
            // ignore and throw original error
          }
        }
        throw e
      }
    } catch (err) {
      console.warn(`Failed callJsonLlm with model ${model}:`, err.message)
      lastError = err
      const isRateOrLimitError = 
        err.message.includes('rate_limit') || 
        err.message.includes('Limit 6000') || 
        err.message.includes('Request too large') || 
        err.message.includes('413') ||
        err.message.includes('429') ||
        err.status === 413 || 
        err.status === 429

      if (isRateOrLimitError && modelsToTry.indexOf(model) < modelsToTry.length - 1) {
        console.log(`Retrying with fallback model...`)
        continue // Try next model
      }
      throw err // For other errors (like invalid API key), fail immediately
    }
  }
  throw lastError
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

function cleanJsonNestedQuotes(str) {
  return str.split('\n').map(line => {
    const match = line.match(/^(\s*"[^"]+"\s*:\s*")(.*)("\s*,?\s*)$/)
    if (match) {
      const [_, prefix, content, suffix] = match
      if (content.includes('"') && !content.includes('":')) {
        const cleanedContent = content.replace(/"/g, "'")
        return prefix + cleanedContent + suffix
      }
    }
    return line
  }).join('\n')
}

