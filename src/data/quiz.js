// Monday quiz — items drawn from the authored Week 1 40-question bank (HTN-### / T2DM-###),
// grounded in the HTN & T2DM teaching summaries, 2025 AHA/ACC, ADA 2026, and the Patient A/B/C cases.
// Types: 'sba' (single best answer), 'sata' (select all, exact-set match), 'ktype' (combination single-answer).
// Option keys are stable, so reshuffling display order never breaks the answer key.
// This is a representative 10-item sample of the 40; append the remaining items in the same shape.

export const PASS_THRESHOLD = 90

export const QUIZ_ITEMS = [
  // ----------------------------- Hypertension -----------------------------
  {
    id: 'HTN-001', disease: 'HTN', type: 'sba', concept_tag: 'bp_classification',
    stem: 'A 48-year-old patient has repeated office blood pressure readings averaging 136/84 mmHg. Based on the 2025 AHA/ACC classification framework, how should this blood pressure be classified?',
    options: [
      { key: 'a', text: 'Normal blood pressure' },
      { key: 'b', text: 'Elevated blood pressure' },
      { key: 'c', text: 'Stage 1 hypertension' },
      { key: 'd', text: 'Stage 2 hypertension' },
    ],
    correct: ['c'],
    rationale: 'Stage 1 = systolic 130–139 OR diastolic 80–89 mmHg; 136/84 meets both. (Normal <120/<80; Elevated 120–129/<80; Stage 2 ≥140 or ≥90.)',
  },
  {
    id: 'HTN-003', disease: 'HTN', type: 'sata', concept_tag: 'first_line_agents',
    stem: 'Which medication classes are preferred first-line options for primary hypertension in the Week 1 guideline summary? Select all that apply.',
    options: [
      { key: 'a', text: 'ACE inhibitors' },
      { key: 'b', text: 'Angiotensin receptor blockers' },
      { key: 'c', text: 'Thiazide-type diuretics' },
      { key: 'd', text: 'Dihydropyridine calcium channel blockers' },
      { key: 'e', text: 'Beta blockers for all patients regardless of comorbidities' },
    ],
    correct: ['a', 'b', 'c', 'd'],
    rationale: 'Preferred first-line classes are ACE inhibitors, ARBs, thiazide-type diuretics, and dihydropyridine CCBs. Beta blockers are not universal first-line agents — they are reserved for compelling indications such as coronary heart disease or heart failure.',
  },
  {
    id: 'HTN-008', disease: 'HTN', type: 'sba', concept_tag: 'home_bp_technique',
    stem: 'A patient’s clinic BP is 146/92 mmHg and his home BP log averages 148/90 mmHg. Before assuming treatment failure, which pharmacist action is most appropriate?',
    options: [
      { key: 'a', text: 'Increase medication without assessing adherence or technique' },
      { key: 'b', text: 'Ask how he measures BP at home — timing, cuff position, posture, and rest period' },
      { key: 'c', text: 'Discontinue therapy because home readings are unreliable' },
      { key: 'd', text: 'Recommend a smartwatch BP reading as the primary method' },
    ],
    correct: ['b'],
    rationale: 'Assess technique before interpreting home readings. Common errors include measuring right after activity, crossing legs, poor cuff position, and talking during measurement. Home BP is useful only with proper technique and a validated device.',
  },
  {
    id: 'HTN-011', disease: 'HTN', type: 'ktype', concept_tag: 'acei_arb_albuminuria',
    stem: 'A patient has diabetes, hypertension, eGFR 74 mL/min/1.73m², and UACR 45 mg/g. Which statements are accurate?\n  I. Albuminuria can indicate kidney risk even when serum creatinine appears normal.\n  II. ACE inhibitor or ARB therapy is appropriate in diabetes and hypertension when albuminuria is present.\n  III. Albuminuria should be ignored unless eGFR is <30 mL/min/1.73m².\n  IV. BP optimization becomes more important when albuminuria is present.',
    options: [
      { key: 'a', text: 'I only' },
      { key: 'b', text: 'I and II only' },
      { key: 'c', text: 'I, II, and IV only' },
      { key: 'd', text: 'II and III only' },
      { key: 'e', text: 'I, II, III, and IV' },
    ],
    correct: ['c'],
    rationale: 'Albuminuria can identify early kidney involvement despite preserved eGFR/normal creatinine. In diabetes + hypertension, ACEi/ARB therapy is recommended when CKD is identified by eGFR <60 or albuminuria ≥30 mg/g, and BP optimization matters more with albuminuria. Statement III is wrong — albuminuria is not ignored when eGFR is preserved.',
  },
  {
    id: 'HTN-016', disease: 'HTN', type: 'sba', concept_tag: 'multifactorial_bp',
    stem: 'Maria is 54 with BP 146/92 (repeat 144/90), type 2 diabetes, obesity, frequent restaurant meals, missed medications 2–3 times weekly, incorrect home BP technique, and recurrent ibuprofen for knee pain. Which assessment best explains her uncontrolled BP?',
    options: [
      { key: 'a', text: 'Uncontrolled only because lisinopril is always ineffective in diabetes' },
      { key: 'b', text: 'Multifactorial — adherence, technique, lifestyle sodium, obesity, and NSAID use all contribute' },
      { key: 'c', text: 'Controlled, because she denies symptoms' },
      { key: 'd', text: 'Should be ignored until a UACR is obtained' },
    ],
    correct: ['b'],
    rationale: 'Maria’s uncontrolled BP is multifactorial: nonadherence, incorrect home BP technique, obesity, high sodium from restaurant meals, and NSAID (ibuprofen) use. Avoid assuming treatment failure before evaluating these contributors.',
  },

  // ----------------------------- Type 2 Diabetes -----------------------------
  {
    id: 'T2DM-001', disease: 'T2DM', type: 'sba', concept_tag: 'a1c_goal',
    stem: 'For many nonpregnant adults with type 2 diabetes, what is the general A1c goal used in the Week 1 teaching summary?',
    options: [
      { key: 'a', text: '<5.0%' },
      { key: 'b', text: '<6.0% for every patient' },
      { key: 'c', text: '<7.0%, individualized based on patient-specific factors' },
      { key: 'd', text: '<9.0% for every patient' },
    ],
    correct: ['c'],
    rationale: 'The general A1c goal is <7%, individualized by age, comorbidities, life expectancy, hypoglycemia risk, and patient preferences.',
  },
  {
    id: 'T2DM-004', disease: 'T2DM', type: 'sba', concept_tag: 'metformin_renal',
    stem: 'Which statement about metformin and kidney function is most appropriate based on the ADA 2026 source material?',
    options: [
      { key: 'a', text: 'Metformin may be initiated at any eGFR in type 2 diabetes' },
      { key: 'b', text: 'Do not initiate metformin if eGFR <45; discontinue if eGFR <30 mL/min/1.73m²' },
      { key: 'c', text: 'Metformin is preferred when kidney function is rapidly fluctuating' },
      { key: 'd', text: 'Stop metformin whenever eGFR is below 90 mL/min/1.73m²' },
    ],
    correct: ['b'],
    rationale: 'Per ADA 2026, metformin may be used with caution but should not be initiated if eGFR is <45 and should be discontinued if eGFR is <30 mL/min/1.73m².',
  },
  {
    id: 'T2DM-006', disease: 'T2DM', type: 'sata', concept_tag: 'sglt2_benefits',
    stem: 'Which benefits are associated with SGLT2 inhibitors in the Week 1 T2DM teaching summary? Select all that apply.',
    options: [
      { key: 'a', text: 'Kidney protection' },
      { key: 'b', text: 'Heart failure benefit' },
      { key: 'c', text: 'Cardiovascular benefit' },
      { key: 'd', text: 'Guaranteed normalization of A1c without lifestyle changes' },
      { key: 'e', text: 'Replacement for renal monitoring' },
    ],
    correct: ['a', 'b', 'c'],
    rationale: 'SGLT2 inhibitors provide kidney protection, heart-failure benefit, and cardiovascular benefit. They do not guarantee A1c normalization without lifestyle change and do not remove the need for renal monitoring.',
  },
  {
    id: 'T2DM-013', disease: 'T2DM', type: 'sba', concept_tag: 'access_barrier',
    stem: 'James has A1c 8.8% and BP 152/94. His chart lists empagliflozin as active, but questioning reveals he never started it because of cost and has been stretching other medications. What is the most appropriate interpretation?',
    options: [
      { key: 'a', text: 'His diabetes is uncontrolled because empagliflozin failed pharmacologically' },
      { key: 'b', text: 'The primary issue is access / non-initiation, so adding another medication without addressing affordability may be inappropriate' },
      { key: 'c', text: 'Cost should be ignored because it is not a medication-related problem' },
      { key: 'd', text: 'He should be labeled noncompliant without further intervention' },
    ],
    correct: ['b'],
    rationale: 'A medication cannot be judged ineffective if it was never started. The core issue is access / non-initiation — address affordability rather than reflexively escalating therapy.',
  },
  {
    id: 'T2DM-015', disease: 'T2DM', type: 'ktype', concept_tag: 'prioritization',
    stem: 'Linda is 68 with type 2 diabetes, CKD stage 3a, UACR 452 mg/g, prior STEMI, BP above goal, LDL-C above secondary-prevention targets, and A1c 8.2%. Which statements reflect strong clinical reasoning?\n  I. Her A1c is above goal and should be addressed.\n  II. Her severe albuminuria and established ASCVD create major cardiorenal risk beyond A1c.\n  III. The highest A1c value is always the highest clinical priority.\n  IV. Multiple interventions may be reasonable, but the student must justify prioritization.',
    options: [
      { key: 'a', text: 'I only' },
      { key: 'b', text: 'I and II only' },
      { key: 'c', text: 'I, II, and IV only' },
      { key: 'd', text: 'II and III only' },
      { key: 'e', text: 'I, II, III, and IV' },
    ],
    correct: ['c'],
    rationale: 'Linda’s A1c is above goal (I) and her CKD, severe albuminuria, and prior STEMI create major cardiorenal risk beyond A1c (II); multiple interventions may be reasonable if prioritization is justified (IV). Statement III is wrong — the highest A1c is not automatically the top priority in a complex cardiorenal patient.',
  },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Build a fresh attempt: randomized item order, each item's options reshuffled.
export function buildAttempt() {
  return shuffle(QUIZ_ITEMS).map(it => ({ ...it, options: shuffle(it.options) }))
}

export function isCorrect(item, selectedKeys) {
  const a = new Set(selectedKeys)
  const b = new Set(item.correct)
  if (a.size !== b.size) return false
  for (const k of a) if (!b.has(k)) return false
  return true
}

export function scoreAttempt(items, answers) {
  const correctCount = items.filter(it => isCorrect(it, answers[it.id] || [])).length
  return Math.round((correctCount / items.length) * 100)
}
