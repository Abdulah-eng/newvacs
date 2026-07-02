// Week 1 module structure, Monday guideline content, and the Friday FLOW journal club.

export const MODULE = {
  code: 'WEEK1_HTN_T2DM',
  title: 'Week 1 — Hypertension + Type 2 Diabetes',
  subtitle: 'Autonomous, multi-visit ambulatory care simulation',
}

export const PATIENTS = [
  { key: 'A', id: 'maria', name: 'Maria Gonzalez', tag: 'HTN + T2DM', focus: 'Hidden nonadherence, OTC NSAID, home-BP technique' },
  { key: 'B', id: 'james', name: 'James Wilson', tag: 'T2DM + HTN', focus: 'Cost barrier; SGLT2i prescribed but never started' },
  { key: 'C', id: 'linda', name: 'Linda Martinez', tag: 'T2DM + CKD + prior MI', focus: 'Prioritizing cardiorenal therapy' },
]

export const DAYS = [
  { key: 'mon', label: 'Monday', kind: 'learn', title: 'Guideline Review + Quiz', blurb: 'Learn the rules of the game, then pass the 40-item quiz at ≥90% to unlock Tuesday.' },
  { key: 'tue', label: 'Tuesday', kind: 'clinic', title: 'Initial Visits', blurb: 'First contact — review the chart, interview, and write an initial SOAP for each patient.' },
  { key: 'wed', label: 'Wednesday', kind: 'clinic', title: '3-Month Follow-up', blurb: 'Did it work? Reassess response and intensify where needed.' },
  { key: 'thu', label: 'Thursday', kind: 'clinic', title: '2nd Follow-up', blurb: 'Advanced reasoning — manage evolving response and barriers.' },
  { key: 'fri', label: 'Friday', kind: 'journal', title: 'Journal Club', blurb: 'Evidence to bedside — apply the FLOW trial, then generate your weekly summary.' },
]

export const CLINIC_DAYS = ['tue', 'wed', 'thu']
export const caseIdFor = (patientId, dayKey) => `${patientId}-${dayKey}`

// ---------------------------------------------------------------- Monday review
export const GUIDELINE_REVIEW = {
  intro: 'Read the guideline review, then take the 40-item, NAPLEX-inspired quiz. Per-question rationale appears immediately; retries are unlimited and reshuffled. Tuesday unlocks at ≥90%.',
  sections: [
    {
      id: 'htn', title: 'Hypertension — 2025 AHA/ACC', color: '13314f',
      pdf: 'HTN-AHA-ACC-2025-Guidelines.pdf',
      points: [
        { label: 'Classification', text: 'Normal <120/<80; Elevated 120–129/<80; Stage 1 130–139 or 80–89; Stage 2 ≥140 or ≥90.' },
        { label: 'Goal', text: 'Universal target <130/80 for most adults.' },
        { label: 'First-line agents', text: 'ACE inhibitor, ARB, thiazide-type diuretic, or dihydropyridine CCB.' },
        { label: 'Mono vs. combo', text: 'Monotherapy for Stage 1; combination (prefer single-pill) for Stage 2 or BP >20/10 above goal.' },
        { label: 'Lifestyle (highest-yield)', text: 'Weight loss, DASH, sodium restriction, activity, reduced alcohol, tobacco cessation.' },
        { label: 'Follow-up & monitoring', text: 'Lifestyle-only recheck 3–6 mo; after a med change ~1 mo. Recheck renal function + K⁺ after ACEi/ARB.' },
        { label: 'Common mistakes', text: 'Treating one reading as diagnosis; ignoring home BP; not rechecking renal function after ACEi/ARB; intensifying before assessing adherence; missing secondary causes.' },
      ],
    },
    {
      id: 't2dm', title: 'Type 2 Diabetes — ADA 2026', color: '0891b2',
      pdf: 'Diabetes-ADA-Standards-of-Care-2026.pdf',
      points: [
        { label: 'A1C goal', text: '<7% for most, individualized by age, comorbidity, life expectancy, hypoglycemia risk, and preference.' },
        { label: 'First-line', text: 'Metformin + lifestyle — except when ASCVD / CKD / HF / significant obesity predominate, where comorbidity drives selection.' },
        { label: 'SGLT2 inhibitors', text: 'Empagliflozin, dapagliflozin — kidney + heart-failure + CV benefit.' },
        { label: 'GLP-1 receptor agonists', text: 'Semaglutide, dulaglutide, tirzepatide — weight, A1C, and ASCVD benefit.' },
        { label: 'Cardiorenal principle', text: 'Cardiorenal protection drives drug selection independent of A1C.' },
        { label: 'Statins & monitoring', text: 'Statin for most adults 40–75 with diabetes. Monitor A1C q3 months until controlled, plus eGFR, UACR, SMBG/CGM, weight, BP.' },
        { label: 'Common mistakes', text: 'A1C tunnel vision; ignoring ASCVD/CKD; delaying intensification; missing statin and kidney-protective indications.' },
      ],
    },
  ],
}

// ---------------------------------------------------------------- Friday FLOW
export const FLOW_JOURNAL = {
  id: 'flow-journal',
  title: 'Friday Journal Club',
  subtitle: 'GLP-1 Receptor Agonists for Cardiorenal Protection in T2DM + CKD',
  description: 'Apply the FLOW trial to real Week 1 patients. The pedagogical payoff: recognizing which of this week’s patients best matches the high-risk FLOW phenotype, and that GLP-1 RAs are cardiorenal therapy — not just glucose-lowering.',
  citation: 'Perkovic V, Tuttle KR, Rossing P, et al. Effects of Semaglutide on Chronic Kidney Disease in Patients with Type 2 Diabetes (FLOW). N Engl J Med. 2024.',
  trial: {
    name: 'FLOW',
    facts: [
      { label: 'Drug', value: 'Semaglutide 1.0 mg subcutaneously once weekly' },
      { label: 'Design', value: 'Randomized, double-blind, placebo-controlled (stopped early for efficacy)' },
      { label: 'Population', value: 'T2DM with CKD (eGFR 25–75) and albuminuria' },
      { label: 'Sample size', value: '≈3,533 patients' },
      { label: 'Median follow-up', value: '≈3.4 years' },
    ],
    inclusion: [
      'Type 2 diabetes',
      'eGFR 25–75 mL/min/1.73m²',
      'Albuminuria (elevated UACR)',
      'On a maximally tolerated ACE inhibitor or ARB',
    ],
    primaryEndpoint: [
      'Kidney failure (dialysis, transplant, or sustained eGFR <15)',
      'Sustained ≥50% eGFR decline',
      'Death from kidney-related causes',
      'Death from cardiovascular causes',
    ],
    primaryResult: [
      { label: 'Hazard ratio', value: '0.76' },
      { label: 'Relative risk reduction', value: '24%' },
      { label: 'p-value', value: '0.0003' },
    ],
    secondary: [
      { label: 'Slower annual eGFR decline (slope benefit)', value: 'Favored semaglutide' },
      { label: 'Major CV events (MACE)', value: 'HR ≈0.82' },
      { label: 'All-cause mortality', value: 'Reduced vs placebo' },
    ],
    safety: [
      'Mostly GI adverse effects (nausea, vomiting), typically with titration',
      'Fewer serious adverse events overall vs placebo',
      'Consistent with the known GLP-1 RA safety profile',
    ],
  },
  questions: [
    {
      id: 'q1', title: 'Best-Fit Patient',
      prompt: 'Of this week’s three patients (Maria — HTN/T2DM; James — T2DM/HTN with a cost barrier; Linda — T2DM with CKD 3a, severe albuminuria, and prior MI), which best matches the FLOW trial population, and why? Use the trial’s eligibility criteria in your answer.',
      
    },
    {
      id: 'q2', title: 'Mechanistic Framing',
      prompt: 'A provider says, “Linda’s A1C is reasonable, so a GLP-1 RA is just extra glucose-lowering she doesn’t need.” How does FLOW reframe the GLP-1 RA as cardiorenal therapy rather than a glucose drug?',
      
    },
    {
      id: 'q3', title: 'Interpreting the Effect Size',
      prompt: 'FLOW reported a hazard ratio of 0.76 (24% relative risk reduction, p=0.0003) for its composite kidney/CV outcome. Explain this to a provider, then translate it into plain language for Linda.',
      
    },
    {
      id: 'q4', title: 'Sequencing With an SGLT2 Inhibitor',
      prompt: 'Linda is already starting an SGLT2 inhibitor. How would you reason about adding a GLP-1 RA on top — overlap, complementary benefit, sequencing, and how to avoid overwhelming her?',
      
    },
    {
      id: 'q5', title: 'Limits of the Evidence',
      prompt: 'Could you cite FLOW to justify a GLP-1 RA for Maria, whose albuminuria is mild and kidney function near-normal? Discuss generalizability, overstatement, and what would actually drive a recommendation for her.',
      
    },
  ],
}
