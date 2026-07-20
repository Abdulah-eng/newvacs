import { GoogleGenerativeAI } from '@google/generative-ai'
import Groq from 'groq-sdk'

/**
 * Determines which provider and model to use based on env config.
 * AI_PROVIDER = 'gemini' | 'groq'  (defaults to 'gemini')
 */
function getProvider(isGrading = false) {
  if (isGrading && process.env.GRADING_AI_PROVIDER) {
    return process.env.GRADING_AI_PROVIDER
  }
  return process.env.AI_PROVIDER || 'gemini'
}

function getGeminiClient() {
  if (!process.env.GEMINI_API_KEY) throw new Error('GEMINI_API_KEY is not configured.')
  return new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
}

function getGroqClient() {
  if (!process.env.GROQ_API_KEY) throw new Error('GROQ_API_KEY is not configured.')
  return new Groq({ apiKey: process.env.GROQ_API_KEY })
}

/**
 * Calls the AI with JSON mode.
 * Used by: SOAP grader, Journal Club grader, Weekly Summary, Cumulative Summary
 */
export async function callJsonLlm(messages, modelOverride = null) {
  const provider = getProvider(true) // Pass true to use GRADING_AI_PROVIDER if set

  if (provider === 'gemini') {
    const genAI = getGeminiClient()
    const model = genAI.getGenerativeModel({
      model: modelOverride || process.env.GEMINI_MODEL || 'gemini-1.5-flash',
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.2,
      },
    })

    // Convert OpenAI-style message array to Gemini format
    const systemMsg = messages.find(m => m.role === 'system')?.content || ''
    
    let promptText = systemMsg + '\n\n'
    for (const msg of messages) {
      if (msg.role === 'system') continue
      promptText += `${msg.role === 'assistant' ? 'AI' : 'User'}: ${msg.content}\n\n`
    }
    promptText += 'AI: '

    const result = await model.generateContent(promptText)
    let text = result.response.text()
    
    // Clean markdown code blocks if the model wrapped the JSON
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
    
    try {
      return JSON.parse(text)
    } catch (e) {
      console.error('Gemini JSON parse error. Raw text:', text)
      throw new Error('Failed to parse AI response as JSON')
    }

  } else if (provider === 'groq') {
    const groq = getGroqClient()
    const response = await groq.chat.completions.create({
      model: modelOverride || process.env.GRADING_GROQ_MODEL || 'llama-3.1-8b-instant',
      messages,
      response_format: { type: 'json_object' },
      temperature: 0.2,
    })
    let text = response.choices[0].message.content
    try {
      return JSON.parse(text)
    } catch (e) {
      console.error('Groq JSON parse error. Raw text:', text)
      throw new Error('Failed to parse Groq AI response as JSON')
    }

  } else {
    throw new Error(`Unknown AI_PROVIDER: "${provider}". Use 'gemini' or 'groq'.`)
  }
}

/**
 * Standard chat completion without JSON requirement.
 * Used by: Patient Interview conversational replies
 */
export async function callLlm(messages, modelOverride = null) {
  const provider = getProvider()

  if (provider === 'gemini') {
    const genAI = getGeminiClient()
    const model = genAI.getGenerativeModel({
      model: modelOverride || process.env.GEMINI_MODEL || 'gemini-1.5-flash',
      generationConfig: { temperature: 0.7 },
    })

    const systemMsg = messages.find(m => m.role === 'system')?.content || ''
    
    let promptText = systemMsg + '\n\n'
    for (const msg of messages) {
      if (msg.role === 'system') continue
      promptText += `${msg.role === 'assistant' ? 'AI' : 'User'}: ${msg.content}\n\n`
    }
    promptText += 'AI: '

    const result = await model.generateContent(promptText)
    return result.response.text()

  } else if (provider === 'groq') {
    const groq = getGroqClient()
    const response = await groq.chat.completions.create({
      model: modelOverride || process.env.GROQ_MODEL || 'llama-3.1-70b-versatile',
      messages,
      temperature: 0.7,
    })
    return response.choices[0].message.content

  } else {
    throw new Error(`Unknown AI_PROVIDER: "${provider}". Use 'gemini' or 'groq'.`)
  }
}

