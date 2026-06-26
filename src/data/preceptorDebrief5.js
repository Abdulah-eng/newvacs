// Week 5 (Depression + Anxiety + Tobacco) preceptor debrief content.
import { PRECEPTOR, ackFor, makeReplyTo } from './preceptorCore.js'
export { PRECEPTOR, ackFor }

export function buildDebrief5(ctx) {
  const recap = []
  if (ctx.quizBest >= 90) recap.push(`You cleared Monday with a best score of ${ctx.quizBest}% — the behavioral health foundational rules are clearly in place.`)
  else if (ctx.quizBest > 0) recap.push(`Your best quiz score was ${ctx.quizBest}%. Ninety percent is the gate, so depression/anxiety fundamentals are the first thing we'd firm up.`)
  else recap.push(`You haven't logged a passing quiz yet — that's the gate to the clinic days, so it's where we'd start this week.`)

  if (ctx.soapAvg != null) {
    const tone = ctx.soapAvg >= 85 ? 'strong and well-supported' : ctx.soapAvg >= 65 ? 'solid, with room to tighten the assessment and plan' : 'a good start, but the assessment-to-plan link needs work'
    recap.push(`Across the ${ctx.gradedCount} case${ctx.gradedCount === 1 ? '' : 's'} you graded, your SOAP notes averaged about ${ctx.soapAvg}% — ${tone}.`)
  } else {
    recap.push(`You haven't graded a SOAP note yet, so I don't have documentation scores to react to — but the reasoning habits matter more than the number.`)
  }
  recap.push(ctx.journalDone ? `And you finished the ESCAPE-TRD journal club — good, that's the treatment-resistant depression evidence.` : `We'll come back to the ESCAPE-TRD journal club, too.`)

  return [
    {
      id: 'open',
      lines: [
        "Good to see you again. This week was behavioral health — Sarah, Jessica, and David across three visits, plus the ESCAPE-TRD journal club.",
        "Same as always: your reflection first, then I'll add mine.",
      ],
      prompt: "How did the week feel? Where were you most confident, and where did the psychiatric reasoning get hard?",
      suggestions: ['PHQ-9 tracking made sense', 'TRD evaluation was hard', 'ESCAPE-TRD was new', 'Interviewing was tough'],
    },
    {
      id: 'recap',
      lines: recap,
      prompt: "Looking at those numbers, what stands out — and does it match how it felt?",
      suggestions: ['Numbers match the feel', 'Better than it felt', 'Worse than it felt'],
    },
    {
      id: 'initial',
      lines: [
        "Start with Sarah. Newly diagnosed MDD and GAD, plus tobacco use. The goal here was selecting an initial agent that covers both anxiety and depression, and navigating her tobacco cessation readiness.",
        "Using one SSRI/SNRI to treat both is cleaner than polypharmacy.",
      ],
      prompt: "How will you ensure you address comorbid anxiety when treating depression?",
      suggestions: ['Always screen for both', 'Select dual-action meds', 'Use GAD-7 and PHQ-9'],
    },
    {
      id: 'nonadherence',
      lines: [
        "Jessica was the adherence case. She seemed to be failing therapy, but the reality was she wasn't taking it consistently due to cost and life chaos.",
        "You can't diagnose 'treatment-resistant depression' if the patient hasn't actually taken the treatment.",
      ],
      prompt: "How do you distinguish true treatment failure from nonadherence in behavioral health?",
      suggestions: ['Ask non-judgmentally', 'Check fill histories', 'Explore daily routines'],
    },
    {
      id: 'trd',
      lines: [
        "David is the complex TRD case. He's failed multiple adequate trials, has severe symptoms, and is losing hope. This is where advanced pharmacology comes in.",
        "He's the ESCAPE-TRD candidate — where esketamine outperformed standard quetiapine augmentation.",
      ],
      prompt: "When David continued to suffer despite standard augmentation, how did ESCAPE-TRD help you decide on the next step?",
      suggestions: ['Refer for esketamine', 'Recognize true TRD', 'Assess suicide risk'],
    },
    {
      id: 'forward',
      lines: [
        "You've run five full weeks now. The behavioral health throughline: quantify symptoms with scales (PHQ-9, GAD-7), confirm adherence before escalating, and know when to refer for advanced therapies.",
      ],
      prompt: "Last one: what's a single habit from this week you want to make automatic?",
      suggestions: ['Use rating scales objectively', 'Verify adherence first', 'Address tobacco at every visit'],
    },
  ]
}

export const CLOSING5 = [
  "Strong finish. You initiated dual-purpose therapy, distinguished nonadherence from true failure, and navigated treatment-resistant depression. That's real behavioral health management.",
  "I've got a few minutes — ask me anything. Any of the three patients, the ESCAPE-TRD trial, or a guideline point. Head back whenever you're ready.",
]

const KB5 = [
  { keywords: ['sarah', 'initial', 'mdd', 'gad', 'tobacco', 'ssri'],
    response: "Sarah needed initial therapy for both MDD and GAD. SSRIs/SNRIs are first-line for both. She was also a smoker; while bupropion is great for smoking and depression, it can sometimes exacerbate anxiety, so balancing those three conditions is the clinical art." },
  { keywords: ['jessica', 'nonadherence', 'failure', 'cost', 'chaos'],
    response: "Jessica looked like treatment failure on paper, but it was actually poor adherence due to social determinants (cost, childcare, chaos). Always rule out nonadherence before escalating therapy or labeling someone as 'treatment-resistant'." },
  { keywords: ['david', 'trd', 'treatment resistant', 'esketamine', 'quetiapine', 'suicide'],
    response: "David has true Treatment-Resistant Depression (TRD), having failed multiple adequate trials. This requires careful suicide risk assessment and escalation. ESCAPE-TRD showed that esketamine is superior to quetiapine augmentation for patients in his exact situation." },
  { keywords: ['escape-trd', 'esketamine', 'augmentation'],
    response: "ESCAPE-TRD demonstrated that for true TRD, esketamine nasal spray (plus an oral antidepressant) resulted in higher remission rates and better relapse prevention than adding quetiapine. It validates referring severe, refractory patients for specialized interventions." },
  { keywords: ['phq-9', 'gad-7', 'remission', 'response'],
    response: "The goal of treatment is remission (PHQ-9 <5, GAD-7 <5), not just a partial response. Using these scales objectively at every visit helps you know exactly when to push the dose, switch, or augment." }
]

export const replyTo5 = makeReplyTo(KB5)
