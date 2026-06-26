// Week 4 (HF + AFib + Anticoagulation) preceptor debrief content.
import { PRECEPTOR, ackFor, makeReplyTo } from './preceptorCore.js'
export { PRECEPTOR, ackFor }

export function buildDebrief4(ctx) {
  const recap = []
  if (ctx.quizBest >= 90) recap.push(`You cleared Monday with a best score of ${ctx.quizBest}% — the HF, AFib, and VTE foundational rules are clearly in place.`)
  else if (ctx.quizBest > 0) recap.push(`Your best quiz score was ${ctx.quizBest}%. Ninety percent is the gate, so HF/AFib fundamentals are the first thing we'd firm up.`)
  else recap.push(`You haven't logged a passing quiz yet — that's the gate to the clinic days, so it's where we'd start this week.`)

  if (ctx.soapAvg != null) {
    const tone = ctx.soapAvg >= 85 ? 'strong and well-supported' : ctx.soapAvg >= 65 ? 'solid, with room to tighten the assessment and plan' : 'a good start, but the assessment-to-plan link needs work'
    recap.push(`Across the ${ctx.gradedCount} case${ctx.gradedCount === 1 ? '' : 's'} you graded, your SOAP notes averaged about ${ctx.soapAvg}% — ${tone}.`)
  } else {
    recap.push(`You haven't graded a SOAP note yet, so I don't have documentation scores to react to — but the reasoning habits matter more than the number.`)
  }
  recap.push(ctx.journalDone ? `And you finished the AZALEA-TIMI 71 journal club — good, that's the bleeding risk vs. stroke prevention evidence.` : `We'll come back to the AZALEA journal club, too.`)

  return [
    {
      id: 'open',
      lines: [
        "Good to see you again. This week was heart failure, AFib, and anticoagulation — Michael, Angela, and Robert across three visits, plus the AZALEA journal club.",
        "Same as always: your reflection first, then I'll add mine.",
      ],
      prompt: "How did the week feel? Where were you most confident, and where did the cardiovascular reasoning get hard?",
      suggestions: ['HF pillars made sense', 'Anticoagulation choices were hard', 'AZALEA was new', 'Interviewing was tough'],
    },
    {
      id: 'recap',
      lines: recap,
      prompt: "Looking at those numbers, what stands out — and does it match how it felt?",
      suggestions: ['Numbers match the feel', 'Better than it felt', 'Worse than it felt'],
    },
    {
      id: 'hf',
      lines: [
        "Start with Michael. He’s newly diagnosed with HFrEF. The goal here is getting him on all four pillars of GDMT (ARNI, beta blocker, MRA, SGLT2i) as safely and rapidly as tolerated.",
        "Delaying GDMT leaves mortality risk on the table.",
      ],
      prompt: "How will you ensure patients don't get stuck on sub-target doses of HF medications?",
      suggestions: ['Titrate at every visit', 'Monitor BP and HR', 'Educate on survival benefit'],
    },
    {
      id: 'afib',
      lines: [
        "On AFib, Angela needed anticoagulation but was overwhelmed by cost, pill burden, and fear of bleeding. The CHA2DS2-VASc score told you she needed it, but she was hesitant.",
        "We can't just prescribe apixaban; we have to counsel on the 'why' (stroke prevention) and address the cost.",
      ],
      prompt: "How do you navigate a patient's fear of bleeding when their stroke risk is high?",
      suggestions: ['Use shared decision-making', 'Discuss stroke severity', 'Address cost directly'],
    },
    {
      id: 'complex',
      lines: [
        "Robert is the complex case: HFrEF, AFib, CKD, and T2DM. He’s analytical and questions everything. You had to balance kidney function against DOAC dosing, and polypharmacy against guideline recommendations.",
        "He's the AZALEA candidate — a patient where balancing bleeding and thrombosis requires precision.",
      ],
      prompt: "When Robert questioned his anticoagulation due to bleeding concerns, how did AZALEA help frame the future of AFib management?",
      suggestions: ['Factor XI inhibitors', 'Lower bleeding risk', 'Acknowledge his concerns'],
    },
    {
      id: 'forward',
      lines: [
        "You've run four full weeks now. The cardiovascular throughline: maximize survival therapies, mitigate stroke risk, and adjust for renal function.",
      ],
      prompt: "Last one: what's a single habit from this week you want to make automatic?",
      suggestions: ['Start all 4 HF pillars', 'Calculate CHA2DS2-VASc', 'Check renal function for DOACs'],
    },
  ]
}

export const CLOSING4 = [
  "Strong finish. You initiated the four pillars of HFrEF, navigated anticoagulation hesitancy, and managed a complex multi-morbidity patient. That's real cardiovascular management.",
  "I've got a few minutes — ask me anything. Any of the three patients, the AZALEA trial, or a guideline point. Head back whenever you're ready.",
]

const KB4 = [
  { keywords: ['michael', 'hfref', 'gdmt', 'four pillars', 'arni', 'beta blocker'],
    response: "Michael is the straightforward HFrEF initiation case. The urgency in HFrEF is to initiate and titrate the four pillars of GDMT (ARNI, beta blocker, MRA, SGLT2i) to target doses. Each class offers independent, additive mortality and morbidity benefits." },
  { keywords: ['angela', 'afib', 'anticoagulation', 'bleeding', 'fear', 'cost', 'apixaban'],
    response: "Angela had a clear indication for anticoagulation based on her CHA2DS2-VASc score, but cost and fear of bleeding were major barriers. In ambulatory care, the 'best' drug is the one the patient can afford and is willing to take. Shared decision-making is critical here." },
  { keywords: ['robert', 'complex', 'polypharmacy', 'ckd', 'doac dosing', 'apixaban dose'],
    response: "Robert represents the reality of older adults with multi-morbidity. He has HFrEF, AFib, and CKD. The key pharmacist intervention here is precise DOAC dosing (checking apixaban criteria: age, weight, SCr) and careful monitoring of renal function and potassium while on GDMT." },
  { keywords: ['azalea', 'factor xi', 'bleeding risk', 'abelacimab'],
    response: "AZALEA-TIMI 71 studied Factor XI inhibition (abelacimab), which showed a massive reduction in bleeding compared to a standard DOAC (rivaroxaban). It suggests a future where we might be able to decouple thrombosis prevention from bleeding risk, which is a game-changer for hesitant patients." },
  { keywords: ['cha2ds2vasc', 'has-bled', 'stroke risk'],
    response: "CHA2DS2-VASc predicts stroke risk; HAS-BLED predicts bleeding risk. A high HAS-BLED score is a flag to correct reversible bleeding risk factors (like BP or NSAID use), not an absolute contraindication to anticoagulation when stroke risk is high." }
]

export const replyTo4 = makeReplyTo(KB4)
