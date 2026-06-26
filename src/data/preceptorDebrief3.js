// Week 3 (Asthma + COPD) preceptor debrief content.
import { PRECEPTOR, ackFor, makeReplyTo } from './preceptorCore.js'
export { PRECEPTOR, ackFor }

// ctx = { quizBest, soapAvg, gradedCount, journalDone }
export function buildDebrief3(ctx) {
  const recap = []
  if (ctx.quizBest >= 90) recap.push(`You cleared Monday with a best score of ${ctx.quizBest}% — the asthma and COPD foundational rules are clearly in place.`)
  else if (ctx.quizBest > 0) recap.push(`Your best quiz score was ${ctx.quizBest}%. Ninety percent is the gate, so asthma/COPD fundamentals are the first thing we'd firm up.`)
  else recap.push(`You haven't logged a passing quiz yet — that's the gate to the clinic days, so it's where we'd start this week.`)

  if (ctx.soapAvg != null) {
    const tone = ctx.soapAvg >= 85 ? 'strong and well-supported' : ctx.soapAvg >= 65 ? 'solid, with room to tighten the assessment and plan' : 'a good start, but the assessment-to-plan link needs work'
    recap.push(`Across the ${ctx.gradedCount} case${ctx.gradedCount === 1 ? '' : 's'} you graded, your SOAP notes averaged about ${ctx.soapAvg}% — ${tone}.`)
  } else {
    recap.push(`You haven't graded a SOAP note yet, so I don't have documentation scores to react to — but the reasoning habits matter more than the number.`)
  }
  recap.push(ctx.journalDone ? `And you finished the MATINEE journal club — good, that's the eosinophilic phenotype evidence.` : `We'll come back to the MATINEE journal club, too.`)

  return [
    {
      id: 'open',
      lines: [
        "Good to see you again. This week was asthma and COPD — Sarah, Bob, and Maria across three visits, plus the MATINEE journal club.",
        "Same as always: your reflection first, then I'll add mine.",
      ],
      prompt: "How did the week feel? Where were you most confident, and where did the respiratory reasoning get hard?",
      suggestions: ['Asthma control made sense', 'COPD therapy choices were hard', 'MATINEE was new', 'Interviewing was tough'],
    },
    {
      id: 'recap',
      lines: recap,
      prompt: "Looking at those numbers, what stands out — and does it match how it felt?",
      suggestions: ['Numbers match the feel', 'Better than it felt', 'Worse than it felt'],
    },
    {
      id: 'asthma',
      lines: [
        "Start with Sarah. She has moderate persistent asthma but wasn't taking her ICS controller — just over-relying on her albuterol rescue inhaler.",
        "Rescue overuse is a bright red flag. It tells you there is underlying, unmanaged airway inflammation.",
      ],
      prompt: "How will you make sure you don't just 'refill the rescue' when a patient is overusing it?",
      suggestions: ['Assess control criteria', 'Ask about daily ICS use', 'Check refill history'],
    },
    {
      id: 'copd',
      lines: [
        "On COPD, Bob was prescribed maintenance therapy but wasn't taking it correctly due to cost and confusion between his maintenance and rescue inhalers.",
        "You can prescribe the perfect LABA/LAMA, but if the patient can't afford it or doesn't know how to inhale it, it's useless.",
      ],
      prompt: "How do you decide between escalating to triple therapy and first fixing adherence and inhaler technique?",
      suggestions: ['Verify technique first', 'Address cost barriers', 'Assess true exacerbations'],
    },
    {
      id: 'aco',
      lines: [
        "Maria is the complex case: Asthma-COPD Overlap (ACO). She has fixed airflow obstruction but also eosinophilic inflammation and reversibility.",
        "She’s also the MATINEE candidate: recurrent exacerbations despite optimized triple therapy, with high eosinophils.",
      ],
      prompt: "When Maria continued to exacerbate despite triple therapy, how did MATINEE help you decide on the next step?",
      suggestions: ['Target IL-5/eosinophils', 'Add a biologic', 'Check adherence again'],
    },
    {
      id: 'forward',
      lines: [
        "You've run three full weeks now. The respiratory throughline: optimize adherence and technique first, treat underlying inflammation, and match therapy to phenotype (like eosinophils).",
      ],
      prompt: "Last one: what's a single habit from this week you want to make automatic?",
      suggestions: ['Check rescue use frequency', 'Confirm inhaler technique', 'Look at eosinophils'],
    },
  ]
}

export const CLOSING3 = [
  "Strong finish. You recognized rescue overuse, fixed inhaler confusion, and applied biologic evidence to an overlap patient. That's real respiratory management.",
  "I've got a few minutes — ask me anything. Any of the three patients, the MATINEE trial, or a guideline point. Head back whenever you're ready.",
]

const KB3 = [
  { keywords: ['sarah', 'asthma', 'rescue', 'albuterol', 'ics', 'control'],
    response: "Sarah represents uncontrolled asthma disguised as 'doing fine'. She was overusing her rescue inhaler and skipping her daily ICS. Over-reliance on SABA without ICS increases the risk of severe exacerbations. The fix is education on the difference between controller (anti-inflammatory) and reliever, and optimizing adherence." },
  { keywords: ['bob', 'copd', 'inhaler', 'technique', 'cost', 'laba', 'lama'],
    response: "Bob had a classic adherence barrier — he couldn't afford his brand-name combination inhaler, so he was stretching it and relying on albuterol. You can't escalate therapy until you establish an affordable baseline regimen and ensure he has the dexterity and breath capacity to actuate the device correctly." },
  { keywords: ['maria', 'aco', 'overlap', 'eosinophil', 'biologic', 'matinee', 'exacerbation'],
    response: "Maria has Asthma-COPD Overlap (ACO) and an eosinophilic phenotype. Because she continued to have recurrent exacerbations despite optimized triple therapy (LABA/LAMA/ICS) and had elevated eosinophils, she became a candidate for biologic therapy (anti-IL-5), exactly as studied in the MATINEE trial." },
  { keywords: ['smart', 'formoterol', 'symbicort', 'maintenance and reliever'],
    response: "SMART (Single Maintenance And Reliever Therapy) is a paradigm shift in asthma. By using an ICS-formoterol inhaler as both the daily maintenance and the as-needed reliever, the patient gets a dose of anti-inflammatory corticosteroid every time they experience symptoms, significantly reducing exacerbation risk." },
  { keywords: ['triple therapy', 'trelegy', 'breztri', 'copd escalation'],
    response: "In COPD, triple therapy (LABA + LAMA + ICS) is indicated for patients who continue to have exacerbations despite LABA/LAMA therapy, particularly if blood eosinophils are elevated (≥300). ICS shouldn't be used in all COPD patients due to pneumonia risk, but they are essential for the exacerbating, eosinophilic phenotype." }
]

export const replyTo3 = makeReplyTo(KB3)
