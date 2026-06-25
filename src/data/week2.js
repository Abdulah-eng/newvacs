// WEEK 2 module content — Hyperlipidemia + Chronic Kidney Disease (cardiorenal protection).
// Grounded in the uploaded KDIGO 2024 CKD, AHA/ACC 2026 cholesterol, and integration summaries,
// plus the CONFIDENCE trial journal club.

export const MODULE2 = {
  code: 'WEEK2_HLD_CKD',
  title: 'Week 2 — Hyperlipidemia + Chronic Kidney Disease',
  subtitle: 'Cardiorenal protection across three longitudinal patients',
}

export const PATIENTS2 = [
  { key: 'A', id: 'michael', name: 'Michael Turner', tag: 'HTN + HLD + CKD G2A2', focus: 'Hidden NSAID; CKD with preserved eGFR; statin intensity' },
  { key: 'B', id: 'angela', name: 'Angela Rodriguez', tag: 'HLD + CKD G3a', focus: 'Cost barrier; never-started high-intensity statin' },
  { key: 'C', id: 'david', name: 'David Chen', tag: 'T2DM + CKD G3bA3', focus: 'Residual albuminuria; declined finerenone (CONFIDENCE)' },
]

export const caseIdFor2 = (patientId, dayKey) => `w2-${patientId}-${dayKey}`

// ---------------------------------------------------------------- Monday review
export const GUIDELINE_REVIEW2 = {
  intro: 'Week 2 integrates two disease states into one cardiorenal framework. Read the CKD and lipid summaries plus the integration principles, then pass the quiz at ≥90% to unlock Tuesday.',
  sections: [
    {
      id: 'ckd', title: 'Chronic Kidney Disease — KDIGO 2024', color: '0891b2',
      pdf: 'KDIGO-2024-CKD-Guideline.pdf',
      points: [
        { label: 'Stage with BOTH axes', text: 'GFR category (G1 ≥90 · G2 60–89 · G3a 45–59 · G3b 30–44 · G4 15–29 · G5 <15) AND albuminuria (A1 <30 · A2 30–300 · A3 >300 mg/g). Use eGFR and UACR together.' },
        { label: 'Albuminuria is damage', text: 'Persistent albuminuria confirms CKD and predicts progression and cardiovascular risk even when eGFR is preserved.' },
        { label: 'RAAS inhibitors', text: 'ACEi/ARB reduce albuminuria and slow progression. Monitor creatinine, potassium, BP, UACR. Do not stop for an expected modest creatinine rise.' },
        { label: 'SGLT2 inhibitors', text: 'Slow CKD progression and reduce HF/CV events. Expect a small early eGFR dip — it is protective.' },
        { label: 'Nonsteroidal MRA (finerenone)', text: 'Reduces albuminuria, slows progression, lowers CV events in T2DM + CKD with persistent albuminuria despite optimized RAAS. Monitor potassium and renal function.' },
        { label: 'Medication stewardship', text: 'Screen for NSAIDs and other nephrotoxins, duplicate therapy, and renal dose adjustments as function declines.' },
        { label: 'Common mistakes', text: 'Focusing only on eGFR; ignoring albuminuria; missing early CKD; stopping ACEi/ARB unnecessarily; missing SGLT2i/finerenone indications; not monitoring potassium.' },
      ],
    },
    {
      id: 'hld', title: 'Hyperlipidemia & ASCVD — AHA/ACC 2026', color: '13314f',
      pdf: 'HLD_AHA_ACC_2026.pdf',
      points: [
        { label: 'Goal', text: 'Reduce ASCVD risk through evidence-based LDL-C lowering; intensity individualized by ASCVD status, LDL-C, diabetes, CKD, and overall risk.' },
        { label: 'Statin intensity', text: 'High-intensity = atorvastatin 40–80 or rosuvastatin 20–40. Moderate = atorvastatin 10–20, rosuvastatin 5–10, simvastatin/pravastatin. Match intensity to risk.' },
        { label: 'Secondary prevention', text: 'Established ASCVD warrants high-intensity statin and aggressive LDL lowering.' },
        { label: 'Nonstatin therapy', text: 'Add ezetimibe when LDL remains above goal on a maximally tolerated statin or when statin-limited; PCSK9-directed therapy (evolocumab, alirocumab, inclisiran) for further lowering.' },
        { label: 'Diabetes & CKD', text: 'Both raise ASCVD risk. Most adults with diabetes warrant a statin; CKD is a cardiovascular risk enhancer, so treat lipids accordingly.' },
        { label: 'Common mistakes', text: 'Chasing LDL numbers while ignoring overall risk; under-using high-intensity statins; not assessing adherence before intensifying; ignoring CKD as a risk enhancer.' },
      ],
    },
    {
      id: 'integration', title: 'Cardiorenal Integration', color: '7c3aed',
      pdf: 'CKD___HLD_Integration_Guideline_Summary',
      points: [
        { label: 'CKD multiplies CV risk', text: 'Many CKD patients have a cardiovascular event before reaching kidney failure — reduce CV risk alongside kidney protection.' },
        { label: 'Albuminuria ≈ eGFR', text: 'Evaluate eGFR and UACR together; albuminuria marks both kidney-progression and cardiovascular risk.' },
        { label: 'Beyond A1c', text: 'A patient can have A1c at goal yet progressive albuminuria and worsening CKD and still need intensification.' },
        { label: 'Prioritization framework', text: 'Lipid-lowering → BP optimization → kidney-protective therapy (ACEi/ARB, SGLT2i, finerenone) → cardiovascular risk reduction. Many patients qualify for several at once.' },
        { label: 'Residual risk', text: 'Foundational therapy is not maximal therapy — persistent albuminuria despite ACEi + SGLT2i is the signal to add finerenone (see CONFIDENCE).' },
      ],
    },
  ],
}

// ---------------------------------------------------------------- Friday CONFIDENCE
export const CONFIDENCE_JOURNAL = {
  id: 'week2-journal',
  title: 'Friday Journal Club',
  subtitle: 'Combination Cardiorenal Protection — The CONFIDENCE Trial',
  description: 'Evaluate the CONFIDENCE trial and apply it to Week 2 patients: when foundational therapy (ACEi/ARB + SGLT2i) leaves residual albuminuria, does adding finerenone help? The pedagogical payoff is recognizing residual cardiorenal risk and matching combination therapy to the right high-risk patient — David Chen.',
  citation: 'Agarwal R, Filippatos G, Pitt B, et al. Combination Therapy with Finerenone and Empagliflozin in Chronic Kidney Disease and Type 2 Diabetes (CONFIDENCE). N Engl J Med. 2025.',
  trial: {
    name: 'CONFIDENCE',
    facts: [
      { label: 'Question', value: 'Does finerenone + empagliflozin reduce albuminuria more than either alone?' },
      { label: 'Design', value: 'International, multicenter, randomized, double-blind, active-controlled' },
      { label: 'Population', value: 'T2DM + CKD with elevated albuminuria, on maximally tolerated ACEi/ARB' },
      { label: 'Sample size', value: '≈800 patients' },
      { label: 'Follow-up', value: '180-day primary analysis' },
    ],
    inclusion: [
      'Age ≥18 years',
      'Type 2 diabetes mellitus',
      'CKD with elevated albuminuria',
      'eGFR ≥30 mL/min/1.73m²',
      'Maximally tolerated ACE inhibitor or ARB',
    ],
    primaryEndpoint: [
      'Percent change in UACR from baseline at 180 days',
    ],
    primaryResult: [
      { label: 'vs finerenone alone', value: '≈29% greater UACR reduction' },
      { label: 'vs empagliflozin alone', value: '≈32% greater UACR reduction' },
      { label: 'Design', value: 'Superiority, two-sided α=0.05' },
    ],
    secondary: [
      { label: 'Albuminuria', value: 'Greatest reduction with combination therapy' },
      { label: 'Renal function', value: 'Stable overall' },
      { label: 'Hyperkalemia', value: 'More common in finerenone-containing groups; manageable with monitoring' },
    ],
    safety: [
      'Combination therapy generally well tolerated',
      'No major unexpected safety signals',
      'Hyperkalemia and acute kidney injury monitored throughout',
    ],
  },
  questions: [
    {
      id: 'q1', title: 'Trial Application',
      prompt: 'A patient with T2DM, eGFR 45 mL/min/1.73m², UACR 700 mg/g, and potassium 4.5 mEq/L is on losartan and empagliflozin. Does CONFIDENCE support adding finerenone? Explain using the trial’s design and findings.',
      answer: 'Yes. CONFIDENCE enrolled patients with T2DM and CKD with elevated albuminuria on a maximally tolerated ACEi/ARB (eGFR ≥30) — this patient fits. It showed that adding finerenone to empagliflozin produced roughly 29–32% greater UACR reduction than either agent alone. With a potassium of 4.5 and eGFR 45, there is room to add finerenone with a monitoring plan, targeting the residual albuminuria that foundational therapy has not resolved.',
    },
    {
      id: 'q2', title: 'Explaining "Another Medication"',
      prompt: 'A patient already on an SGLT2 inhibitor asks why you want to add yet another kidney medication. How do you explain it?',
      answer: 'SGLT2 inhibitors meaningfully reduce kidney and cardiovascular risk, but they do not eliminate it — substantial residual risk remains, especially when albuminuria stays elevated. Finerenone works through a different (mineralocorticoid) pathway, and CONFIDENCE showed the combination lowers urine protein substantially more than either alone. In plain terms: “Your current medicine is helping, but there’s still protein leaking, which means risk remains. This adds protection through a different mechanism.”',
    },
    {
      id: 'q3', title: 'Interpreting a Potassium Rise',
      prompt: 'After starting finerenone, a patient’s potassium rises from 4.6 to 5.0 mEq/L. Does this automatically require discontinuation? How do you reason through it?',
      answer: 'No. A potassium of 5.0 is not an automatic stop. Hyperkalemia must be interpreted in clinical context — the magnitude, trajectory, symptoms, diet, other potassium-raising drugs, and the overall benefit-versus-risk of a kidney-protective therapy. The appropriate response is to recheck potassium, give dietary guidance, review contributors, and weigh continuing finerenone (which is reducing albuminuria) against the manageable, monitored potassium rise — not reflexive discontinuation.',
    },
    {
      id: 'q4', title: 'Why Albuminuria Matters',
      prompt: 'CONFIDENCE used percent change in UACR as its primary endpoint. Why is reducing albuminuria considered clinically meaningful, and what is the key limitation of this endpoint?',
      answer: 'Albuminuria is both a marker of ongoing kidney damage and a strong predictor of CKD progression and cardiovascular risk; reductions in albuminuria are associated with improved long-term kidney and cardiovascular outcomes. The key limitation is that UACR is a surrogate endpoint, not a hard outcome like kidney failure or death — combined with the short (180-day) follow-up and industry funding, the trial supports the strategy but leaves long-term clinical-outcome confirmation to ongoing studies.',
    },
    {
      id: 'q5', title: 'Best-Fit Patient',
      prompt: 'Which patient is more likely to benefit from combination cardiorenal therapy? Patient A: A1C 7.8%, eGFR 90, UACR 15, no ASCVD. Patient B: A1C 7.1%, eGFR 42, UACR 850, prior MI. Justify your choice — and connect it to one of this week’s patients.',
      answer: 'Patient B. CONFIDENCE supports selecting therapy by cardiorenal risk and albuminuria burden, not glycemic control — and Patient B has markedly reduced eGFR, severe albuminuria, and established ASCVD, while Patient A has normal eGFR and minimal albuminuria. This mirrors David Chen (Patient C) this week: CKD G3bA3 with UACR 520 despite ACEi + SGLT2i, exactly the residual-risk phenotype CONFIDENCE targets with finerenone.',
    },
  ],
}
