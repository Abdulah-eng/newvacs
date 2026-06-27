import { NextResponse } from 'next/server'
import { CAPSTONE_TOPIC_MASH } from '../../../../data/week6_capstone'

export async function POST(req) {
  try {
    const body = await req.json()
    const { topicId, chatHistory, evaluationScore } = body

    if (!topicId || !chatHistory) {
      return NextResponse.json({ error: 'Missing topicId or chatHistory' }, { status: 400 })
    }

    // Simulate LLM processing time
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Mock logic: 
    // Just cycle through the question bank based on chat history length.
    // If we've asked all questions, we wrap up.
    
    // The chat history format is [{role: 'assistant', content: '...'}, {role: 'user', content: '...'}, ...]
    // A pair of (assistant + user) represents one turn.
    const userMessageCount = chatHistory.filter(m => m.role === 'user').length
    
    const questions = CAPSTONE_TOPIC_MASH.discussionQuestions
    
    let reply = ''
    
    if (userMessageCount === 1) {
      reply = `Good point. Let's start with this: ${questions[0].question}`
    } else if (userMessageCount === 2) {
      reply = `I see. That makes sense regarding the renal dosing. My next question for you: ${questions[1].question}`
    } else if (userMessageCount === 3) {
      reply = `Thank you for that thorough explanation. You've clearly researched the long-term safety profile well. I don't have any further questions. You may click 'Finish Simulation' to conclude your Week 6 Capstone!`
    } else {
      reply = `Your Capstone Q&A is complete. Please click 'Finish Simulation' in the top right to complete the module.`
    }

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Error in discussion:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
