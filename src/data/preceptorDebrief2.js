// Week 2 (Hyperlipidemia + CKD) preceptor debrief content.
// Shared persona + engine live in preceptorCore.js; this supplies the week-specific
// guided beats, closing, and knowledge base.
import { PRECEPTOR, ackFor, makeReplyTo } from './preceptorCore.js'
export { PRECEPTOR, ackFor }

// ctx = { quizBest, soapAvg, gradedCount, journalDone }
export function buildDebrief2(ctx) {
  const recap = []
  if (ctx.quizBest >= 90) recap.push(`You cleared Monday with a best score of ${ctx.quizBest}% — the CKD staging and statin-intensity rules are clearly in place.`)
  else if (ctx.quizBest > 0) recap.push(`Your best quiz score was ${ctx.quizBest}%. Ninety percent is the gate, so the CKD/HLD fundamentals are the first thing we'd firm up.`)
  else recap.push(`You haven't logged a passing quiz yet — that's the gate to the clinic days, so it's where we'd start this week.`)

  if (ctx.soapAvg != null) {
    const tone = ctx.soapAvg >= 85 ? 'strong and well-supported' : ctx.soapAvg >= 65 ? 'solid, with room to tighten the assessment and plan' : 'a good start, but the assessment-to-plan link needs work'
    recap.push(`Across the ${ctx.gradedCount} case${ctx.gradedCount === 1 ? '' : 's'} you graded, your SOAP notes averaged about ${ctx.soapAvg}% — ${tone}.`)
  } else {
    recap.push(`You haven't graded a SOAP note yet, so I don't have documentation scores to react to — but the reasoning habits matter more than the number.`)
  }
  recap.push(ctx.journalDone ? `And you finished the CONFIDENCE journal club — good, that's the combination-therapy evidence.` : `We'll come back to the CONFIDENCE journal club, too.`)

  return [
    {
      id: 'open',
      lines: [
        "Good to see you again. This week was hyperlipidemia and chronic kidney disease — Michael, Angela, and David across three visits, plus the CONFIDENCE journal club. Let's debrief one-on-one before you log off.",
        "Same as last week: your reflection first, then I'll add mine.",
      ],
      prompt: "How did the week feel? Where were you most confident, and where did the cardiorenal reasoning get hard?",
      suggestions: ['Staging made sense', 'Statin choices were hard', 'Finerenone was new', 'Interviewing was tough'],
    },
    {
      id: 'recap',
      lines: recap,
      prompt: "Looking at those numbers, what stands out — and does it match how it felt?",
      suggestions: ['Numbers match the feel', 'Better than it felt', 'Worse than it felt'],
    },
    {
      id: 'staging',
      lines: [
        "Start with Michael. His eGFR was 79 and his creatinine looked fine — and he has CKD. The albuminuria (UACR ~118) is the damage, and it's the part people miss. Staging is two axes: G for filtration, A for albuminuria. 'Normal eGFR' does not mean 'healthy kidneys.'",
        "And the hidden piece was the ibuprofen several times a week — quietly nephrotoxic, and nowhere in his chart.",
      ],
      prompt: "How will you make sure you don't anchor on creatinine and miss early, albuminuric CKD like Michael's?",
      suggestions: ['Always check UACR', 'Stage on both axes', 'Ask about OTC NSAIDs'],
    },
    {
      id: 'statins',
      lines: [
        "On lipids, two different problems. Michael was on a statin but under-dosed and missing two or three doses a week — so the LDL wasn't really being treated. Angela had rosuvastatin prescribed six months ago and never started it — cost and a quiet fear of statins. The fix for each is completely different.",
      ],
      prompt: "How do you decide between intensifying a statin and first finding out whether it's even being taken?",
      suggestions: ['Verify adherence first', 'Then titrate to intensity', 'Address cost and fear'],
    },
    {
      id: 'unstarted',
      lines: [
        "That's the theme I most want you to take from this week: the unstarted and the declined. Angela's never-started rosuvastatin, David's declined finerenone — both invisible in the chart, both about a 'why' the patient never said out loud. Cost, embarrassment, pill burden, a worry about potassium.",
      ],
      prompt: "When a guideline-indicated drug isn't working, how will you find out whether it was ever truly started — and why not?",
      suggestions: ['Ask non-judgmentally', 'Check fill history', 'Name cost and fear directly'],
    },
    {
      id: 'finerenone',
      lines: [
        "David is the high-risk case — T2DM, CKD G3b, severe albuminuria (UACR ~520), already on an SGLT2 inhibitor. Adding finerenone is exactly right, and it's where CONFIDENCE lives: finerenone plus empagliflozin lowered albuminuria more than either alone. Expect the early eGFR dip and a small potassium bump — you monitor, you don't reflexively stop.",
      ],
      prompt: "When David's potassium ticked up to 5.1 and his eGFR dipped, how do you decide between holding the course and pulling back?",
      suggestions: ['Monitor K and eGFR', 'Expect the early dip', 'Pull back only if unsafe'],
    },
    {
      id: 'forward',
      lines: [
        "You've now run two full weeks — hypertension and diabetes, then lipids and kidneys. The throughline is the same: stage the risk, find what the chart hides, and treat organs, not just numbers.",
      ],
      prompt: "Last one: what's a single habit from these two weeks you want to make automatic?",
      suggestions: ['Always uncover the hidden why', 'Stage before I treat', 'Monitor, don\u2019t flinch'],
    },
  ]
}

export const CLOSING2 = [
  "Strong finish. You staged kidneys on both axes, you treated lipids to intensity instead of to a 'normal-looking' number, and you went looking for the drug nobody started. That's real ambulatory care.",
  "I've got a few minutes — ask me anything. Any of the three patients, the finerenone-and-potassium question, CONFIDENCE, a guideline point. Head back whenever you're ready.",
]

const KB = [
  { keywords: ['michael', 'turner', 'nsaid', 'ibuprofen', 'naproxen', 'otc', 'normal egfr', 'misconception'],
    response: "Michael is the early-CKD trap. eGFR 79, creatinine fine — and he still has CKD, because persistent albuminuria is kidney damage. The hidden driver was ibuprofen a few times a week, which is quietly nephrotoxic. Correct the 'normal eGFR means healthy kidneys' belief, stop the NSAID, and treat the albuminuria." },
  { keywords: ['angela', 'rodriguez', 'never started', 'unstarted', 'cost', 'afford', 'embarrass', 'fear', 'rosuvastatin'],
    response: "Angela had rosuvastatin prescribed six months ago and never filled it — cost, plus a quiet fear of statins she didn't volunteer. Her LDL wasn't failing therapy; therapy never started. You can't titrate your way out of that. Name the cost and the fear directly, make it affordable, and start." },
  { keywords: ['david', 'chen', 'finerenone', 'declined', 'pill burden', 'analytical', 'evidence'],
    response: "David is the high-risk one — T2DM, CKD G3b, severe albuminuria, already on an SGLT2 inhibitor — and he'd previously declined finerenone over pill burden, potassium worry, and cost he never explained. He's analytical, so show him the evidence: finerenone lowers albuminuria and protects the kidney, and the potassium is monitorable, not a dealbreaker." },
  { keywords: ['ckd', 'staging', 'stage', 'g3', 'g3a', 'g3b', 'two axes', 'kdigo'],
    response: "Stage CKD on both axes every time: G (eGFR — G1 \u226590, G2 60\u201389, G3a 45\u201359, G3b 30\u201344, G4 15\u201329, G5 <15) and A (albuminuria — A1 <30, A2 30\u2013300, A3 >300 mg/g). Risk climbs with both. Michael is G2A2, Angela G3aA2, David G3bA3 — that staging is what ranks their risk." },
  { keywords: ['albuminuria', 'uacr', 'protein', 'urine'],
    response: "Albuminuria is the most actionable signal in CKD — it's both a damage marker and a treatment target. A falling UACR (David went 520 \u2192 390 \u2192 290) is the therapy working. Always check it; don't let a normal eGFR talk you out of it." },
  { keywords: ['statin', 'ldl', 'lipid', 'cholesterol', 'intensity', 'atorvastatin'],
    response: "Treat statins to intensity, not to a comfortable-looking LDL. High-intensity (atorvastatin 40\u201380, rosuvastatin 20\u201340) for high-risk patients; CKD raises cardiovascular risk on its own. And before you intensify, confirm it's actually being taken at the current dose — Michael's problem was missed doses, not the molecule." },
  { keywords: ['ezetimibe', 'add on', 'not at goal', 'second agent'],
    response: "If a maximally tolerated statin doesn't get a high-risk patient to goal, ezetimibe is the logical next step — that's the question Angela raised once she was finally taking her statin. Cheap, well tolerated, additive LDL lowering. Escalate beyond that (PCSK9, etc.) only if they're still short." },
  { keywords: ['potassium', 'hyperkalemia', 'k ', 'monitor', '5.1', 'egfr dip', 'dip'],
    response: "With finerenone (and RAAS therapy generally) you expect a small early eGFR dip and a modest potassium rise — that's hemodynamic, not failure. Monitor potassium and renal function, dose-adjust or hold for genuinely unsafe values, but don't reflexively stop for a K of 5.1. David's settled with monitoring." },
  { keywords: ['finerenone', 'mra', 'nonsteroidal'],
    response: "Finerenone is a nonsteroidal MRA that reduces CKD progression and cardiovascular events in T2DM with albuminuria, on top of an ACEi/ARB and an SGLT2 inhibitor. The trade-off is potassium, which is monitorable. For David — G3bA3 despite good background therapy — it's the right add." },
  { keywords: ['confidence', 'trial', 'combination', 'combo', 'empagliflozin and finerenone'],
    response: "CONFIDENCE is the combination story: finerenone plus empagliflozin lowered albuminuria more than either drug alone, and the hyperkalemia was manageable with monitoring. It's why David — already on an SGLT2 inhibitor with persistent severe albuminuria — is the patient the trial speaks to most directly." },
  { keywords: ['sglt2', 'flozin', 'empagliflozin', 'dapagliflozin'],
    response: "SGLT2 inhibitors are foundational cardiorenal therapy — kidney protection, heart-failure and CV benefit, and they pair with finerenone (that's CONFIDENCE). Expect the same early eGFR dip; it's protective. David was already on one, which is exactly why finerenone was the next layer." },
  { keywords: ['never', 'declined', 'adherence', 'why', 'hidden', 'unstarted'],
    response: "The skill of the week: when an indicated drug isn't working, ask whether it was ever truly started, and why not. Angela never started hers; David declined his. Both reasons were unspoken — cost, fear, pill burden, potassium worry. Ask non-judgmentally and the chart's mystery usually resolves." },
  { keywords: ['interview', 'ask', 'question', 'history', 'technique'],
    response: "Open, specific, non-judgmental. 'What do you take for aches and pains?' surfaces Michael's ibuprofen. 'A lot of people don't end up starting this one \u2014 did you?' surfaces Angela's unstarted statin. The chart is a hypothesis; the patient is the truth." },
  { keywords: ['soap', 'document', 'note', 'assessment', 'plan'],
    response: "Make the assessment and plan talk to each other: stage the CKD, state the LDL versus goal, then a plan that follows — intensify or start the statin, add kidney-protective therapy, monitor K and UACR. If a grader can't trace the plan back to the assessment, tighten it." },
  { keywords: ['nervous', 'hard', 'struggle', 'confiden', 'worried', 'new', 'finerenone was new'],
    response: "Finerenone and the potassium dance are new for most students — feeling unsure there is appropriate, not a red flag. You reasoned it correctly: expect the dip, monitor, don't flinch. That instinct will carry you." },
  { keywords: ['thank', 'thanks', 'bye', 'goodbye', 'appreciate', 'done'],
    response: "Anytime — that's the job. Two solid weeks behind you now. Go rest; you've earned it." },
]

export const replyTo2 = makeReplyTo(KB)
