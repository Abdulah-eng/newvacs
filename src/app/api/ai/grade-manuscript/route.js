import { NextResponse } from 'next/server'
import { CAPSTONE_TOPIC_MASH } from '../../../../data/week6_capstone'

// In a real app, this would call an LLM (e.g. OpenAI/Gemini) using the manuscript, rubric, and model answer.
// For the MVP, since the user hasn't provided the actual grading files yet, we will mock the LLM evaluation.

export async function POST(req) {
  try {
    const body = await req.json()
    const { manuscript, topicId } = body

    if (!manuscript || !topicId) {
      return NextResponse.json({ error: 'Missing manuscript or topicId' }, { status: 400 })
    }

    // Simulate LLM processing time
    await new Promise(resolve => setTimeout(resolve, 3000))

    // Determine the score based on manuscript length as a simple mock heuristic for now
    // A very short text scores lower.
    const isThin = manuscript.length < 500
    const score = isThin ? 65 : 95

    const mockEvaluation = {
      totalScore: score,
      sectionScores: [
        { sectionId: '1', earned: isThin ? 5 : 10, possible: 10 },
        { sectionId: '2', earned: isThin ? 5 : 10, possible: 10 },
        { sectionId: '3', earned: isThin ? 15 : 23, possible: 25 },
        { sectionId: '4', earned: isThin ? 10 : 15, possible: 15 },
        { sectionId: '5', earned: isThin ? 10 : 15, possible: 15 },
        { sectionId: '6', earned: isThin ? 5 : 10, possible: 10 },
        { sectionId: '7', earned: isThin ? 5 : 10, possible: 10 },
        { sectionId: '8', earned: isThin ? 2 : 5, possible: 5 },
      ],
      feedback: {
        doneWell: isThin 
          ? "You submitted a manuscript and attempted to structure it according to the guidelines."
          : "Excellent synthesis of the MAESTRO-NASH trial data. Your mechanism of action description was highly accurate and clinically relevant. Strong formulary recommendation.",
        improvements: isThin
          ? "The manuscript was extremely brief and lacked the depth required for a Grand Rounds presentation. You must include detailed trial data, absolute risk reductions, and specific dosing guidelines."
          : "You could improve your discussion on the MAESTRO-NAFLD-1 safety trial by explicitly detailing the incidence rates of GI side effects compared to placebo.",
        criticalOmissions: isThin
          ? "You missed almost all the required trial endpoints and guideline recommendations. This would not be sufficient to guide clinical practice."
          : "No major critical omissions. Make sure to emphasize the requirement for liver biopsy vs non-invasive testing per AASLD guidance.",
        clinicalPearls: "Resmetirom is the first FDA-approved treatment for MASH with liver fibrosis. Remember that its liver-directed action via THR-beta selectivity is what allows it to avoid the systemic side effects seen with older thyroid hormone analogs."
      }
    }

    return NextResponse.json(mockEvaluation)
  } catch (error) {
    console.error('Error grading manuscript:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
