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
      
    },
    {
      id: 'q2', title: 'Explaining "Another Medication"',
      prompt: 'A patient already on an SGLT2 inhibitor asks why you want to add yet another kidney medication. How do you explain it?',
      
    },
    {
      id: 'q3', title: 'Interpreting a Potassium Rise',
      prompt: 'After starting finerenone, a patient’s potassium rises from 4.6 to 5.0 mEq/L. Does this automatically require discontinuation? How do you reason through it?',
      
    },
    {
      id: 'q4', title: 'Why Albuminuria Matters',
      prompt: 'CONFIDENCE used percent change in UACR as its primary endpoint. Why is reducing albuminuria considered clinically meaningful, and what is the key limitation of this endpoint?',
      
    },
    {
      id: 'q5', title: 'Best-Fit Patient',
      prompt: 'Which patient is more likely to benefit from combination cardiorenal therapy? Patient A: A1C 7.8%, eGFR 90, UACR 15, no ASCVD. Patient B: A1C 7.1%, eGFR 42, UACR 850, prior MI. Justify your choice — and connect it to one of this week’s patients.',
      
    },
  ],
}
