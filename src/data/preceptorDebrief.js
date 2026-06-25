// Week 1 (HTN + T2DM) preceptor debrief content.
// Shared persona + conversation engine live in preceptorCore.js; this file supplies
// the week-specific guided beats, closing, and knowledge base.
import { PRECEPTOR, ackFor, makeReplyTo } from './preceptorCore.js'
export { PRECEPTOR, ackFor }

// Built with runtime context so the recap reacts to the student's actual week.
// ctx = { quizBest, soapAvg, gradedCount, journalDone }
export function buildDebrief(ctx) {
  const recap = []
  if (ctx.quizBest >= 90) recap.push(`You cleared Monday with a best score of ${ctx.quizBest}% — that tells me the guideline foundation is there.`)
  else if (ctx.quizBest > 0) recap.push(`Your best quiz score was ${ctx.quizBest}%. In a real week, 90% is the gate to Tuesday, so that's the first thing we'd shore up.`)
  else recap.push(`You haven't logged a passing quiz yet — in a real week that's the gate that unlocks the clinic days, so it's where we'd start.`)

  if (ctx.soapAvg != null) {
    const tone = ctx.soapAvg >= 85 ? 'strong and well-supported' : ctx.soapAvg >= 65 ? 'solid, with room to tighten the assessment and plan' : 'a good start, but the assessment-to-plan link needs work'
    recap.push(`Across the ${ctx.gradedCount} case${ctx.gradedCount === 1 ? '' : 's'} you graded, your SOAP notes averaged about ${ctx.soapAvg}% — ${tone}.`)
  } else {
    recap.push(`You haven't graded a SOAP note yet, so I don't have documentation scores to react to — but the habits matter more than the number anyway.`)
  }
  recap.push(ctx.journalDone ? `And you finished the FLOW journal club — good, that's the evidence-to-bedside piece.` : `We'll come back to the journal club, too.`)

  return [
    {
      id: 'open',
      lines: [
        "Nice work getting through the whole week — Monday's guideline gate, three patients across three visits, and the FLOW journal club. Before you log off, let's debrief one-on-one.",
        "I run these the way real precepting works: your reflection first, then I'll add mine.",
      ],
      prompt: "So — how did the week feel overall? Where were you most confident, and where did it get hard?",
      suggestions: ['HTN felt solid', 'Cardiorenal was hard', 'Interviewing was tough', 'Documentation was hard'],
    },
    {
      id: 'recap',
      lines: recap,
      prompt: "Looking at those numbers, what stands out to you — and does it match how it felt?",
      suggestions: ['Numbers match the feel', 'Better than it felt', 'Worse than it felt'],
    },
    {
      id: 'interview',
      lines: [
        "Here's the skill I care about most: uncovering what isn't in the chart. Maria's ibuprofen and her home-BP technique, James's cost barrier and the empagliflozin he never started — none of that is in the labs. You only get it by asking.",
      ],
      prompt: "What did you learn about asking the questions that aren't obvious — the OTC meds, the cost, the 'do you actually take this'?",
      suggestions: ['Ask open-ended', 'Normalize cost questions', 'Verify actual use'],
    },
    {
      id: 'cardiorenal',
      lines: [
        "On the diabetes side, the big idea was cardiorenal protection. Linda — CKD 3a, severe albuminuria, prior MI — is exactly the FLOW phenotype. SGLT2 inhibitors and GLP-1 receptor agonists are organ-protective therapy, not just glucose drugs.",
      ],
      prompt: "Next time you meet a patient like Linda, how will you decide between — or combine — an SGLT2 inhibitor and a GLP-1 RA?",
      suggestions: ['Use both, sequenced', 'Choose by comorbidity', 'Let albuminuria drive it'],
    },
    {
      id: 'pitfalls',
      lines: [
        "Two traps I want you watching for. One: A1c tunnel vision — treating the number instead of the heart and kidneys. Two: calling something 'noncompliance' when it's really access, like James never starting a drug he couldn't afford.",
      ],
      prompt: "How will you catch a never-started medication or a hidden cost barrier earlier next time?",
      suggestions: ['Check fill history', 'Ask about cost directly', 'Reconcile every visit'],
    },
    {
      id: 'communication',
      lines: [
        "Linda also asked the question patients always ask: 'what should I focus on first?' Prioritizing without overwhelming someone is its own clinical skill.",
      ],
      prompt: "When a patient asks you that, how do you want to answer?",
      suggestions: ['One step at a time', 'Lead with the biggest risk', 'Anchor to their goals'],
    },
    {
      id: 'forward',
      lines: [
        "You're ready for more. Next week we move to hyperlipidemia and chronic kidney disease — cardiorenal protection from the kidney's side, with statin intensity and albuminuria front and center.",
      ],
      prompt: "Last one: what's a single habit from this week you want to carry forward?",
      suggestions: ['Interview deeper', 'Think cardiorenal first', 'Document tighter'],
    },
  ]
}

export const CLOSING = [
  "That's a strong week of work — and I mean that. You interviewed like someone who knows the chart never tells the whole story, and you treated risk, not just numbers.",
  "I've got a few more minutes — ask me anything. Any patient, any decision, any guideline point. When you're done, just head back.",
]

const KB = [
  { keywords: ['maria', 'nsaid', 'ibuprofen', 'naproxen', 'otc', 'home bp', 'technique', 'nonadherence'],
    response: "Maria is the 'the chart looks simple' trap. Her BP wasn't failing pharmacologically — it was the ibuprofen, the missed doses, and bad cuff technique. Before you ever intensify, rule out adherence, OTC contributors, and measurement error. That single habit will save you from overtreating people." },
  { keywords: ['james', 'cost', 'afford', 'expensive', 'copay', 'empagliflozin', 'never started', 'access', 'insurance'],
    response: "James is why I never trust an A1c in isolation. His chart said empagliflozin was active; his fill history said otherwise. A drug can't fail if it was never started. When you see a worrying number, ask 'are you actually taking this, and can you afford it?' — then solve the access problem before adding anything." },
  { keywords: ['linda', 'ckd', 'kidney', 'albuminuria', 'uacr', 'prioritize', 'overwhelm', 'sequence', 'mi', 'stemi'],
    response: "Linda is about prioritization. CKD 3a, severe albuminuria, prior MI — every system is shouting. Lead with the therapy that protects the most organs at once (SGLT2i, then a cardiorenal GLP-1 RA), get her statin to an LDL under 55, and introduce it stepwise so she isn't buried. Prioritizing without overwhelming is the skill." },
  { keywords: ['flow', 'glp', 'glp-1', 'semaglutide', 'trial', 'evidence'],
    response: "FLOW is the reframe: a GLP-1 RA reduced kidney failure and cardiovascular death in T2DM patients with CKD and albuminuria — a 24% relative risk reduction. So it's cardiorenal therapy, not a glucose drug. The skill is matching that evidence to the right patient — Linda — and not overstating it for someone like Maria with mild albuminuria." },
  { keywords: ['sglt2', 'flozin', 'dapagliflozin', 'jardiance', 'farxiga'],
    response: "SGLT2 inhibitors buy you kidney protection, heart-failure benefit, and CV benefit. Expect a small early eGFR dip — that's protective, not a reason to stop. They're appropriate well into CKD; don't let an eGFR of 48 scare you off." },
  { keywords: ['vs', 'versus', 'combine', 'both', 'difference', 'choose between'],
    response: "SGLT2i vs GLP-1 RA isn't usually either/or in a high-risk patient — their benefits are complementary and you can layer them. Let the phenotype lead: heavy CKD/HF tilts toward an SGLT2i first; obesity, ASCVD, and a need for bigger A1c movement tilt toward a GLP-1 RA. Then add the second when tolerated." },
  { keywords: ['bp', 'blood pressure', 'goal', '130', 'hypertension'],
    response: "Goal is under 130/80 for most adults, and lower thresholds to treat in diabetes. But before you push the dose, confirm the reading is real — technique, repeat, home log — and check adherence and NSAIDs. Half of 'resistant' BP is one of those." },
  { keywords: ['statin', 'ldl', 'lipid', 'cholesterol'],
    response: "Most adults 40–75 with diabetes earn a statin regardless of a 'normal' LDL — it's prevention, not a reaction to a high number. After an MI like Linda's, you're aiming for an LDL under 55, high-intensity statin, add ezetimibe if you're not there." },
  { keywords: ['metformin', 'egfr'],
    response: "Don't reflexively stop metformin. You can continue it down to an eGFR of 30 — just don't start it below 45, and reassess if function is fluctuating. Linda at 48 stays on it." },
  { keywords: ['a1c', 'sugar', 'glucose', 'glycemic'],
    response: "A1c matters, but it's one input. The mistake I see most is chasing it while ignoring the kidneys and heart. Ask what the A1c is doing, sure — then ask what the patient's biggest risk is, and treat that." },
  { keywords: ['interview', 'hidden', 'ask', 'question', 'history'],
    response: "Good interviewing is open, specific, and non-judgmental. 'What do you take for pain?' beats 'You're not taking NSAIDs, right?' And always verify actual use and affordability — the chart is a hypothesis, the patient is the truth." },
  { keywords: ['soap', 'document', 'note', 'assessment', 'plan'],
    response: "A strong note makes the assessment and plan talk to each other: name the problem, state where the patient is versus goal, then a plan that follows logically and is monitorable. If a grader can't trace your plan back to your assessment, tighten it." },
  { keywords: ['next week', 'future', 'what next', 'ready', 'week 2', 'week two'],
    response: "Next week is hyperlipidemia and CKD — same cardiorenal thinking, but from the kidney's side. You'll stage CKD on two axes, titrate statins to intensity, and meet patients who quietly never started a drug or declined one. Bring the same interviewing instincts." },
  { keywords: ['nervous', 'hard', 'struggle', 'confiden', 'worried', 'imposter', 'overwhelmed'],
    response: "That's normal, and honestly it's a good sign — it means you're taking the responsibility seriously. Competence comes from reps. You did nine encounters this week; next week you'll do more, and the pattern recognition starts to feel automatic." },
  { keywords: ['thank', 'thanks', 'bye', 'goodbye', 'appreciate'],
    response: "Anytime — that's what I'm here for. Go rest; you earned it. I'll see you for Week 2." },
]

export const replyTo = makeReplyTo(KB)
