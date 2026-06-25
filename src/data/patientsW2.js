import { makeCase } from './caseFactory.js'

// WEEK 2 — Hyperlipidemia + Chronic Kidney Disease (cardiorenal protection).
// Patients and all clinical values are authored from the uploaded Week 2 source
// documents (master profiles + Tuesday/Wednesday/Thursday case files).
// Case ids are namespaced 'w2-<patient>-<day>' to coexist with Week 1.

/* ============================ MICHAEL TURNER (A) ============================ */
// HTN + HLD + CKD G2A2 (preserved eGFR, persistent albuminuria), obesity. No diabetes.
// Hidden: frequent OTC ibuprofen (nephrotoxic); misses atorvastatin 2–3×/wk;
// doesn't understand albuminuria; strong weight-loss motivation. Statin under-dosed.

const michaelTue = makeCase({
  id: 'w2-michael-tue',
  PATIENT: { name: 'Michael Turner', age: 58, sex: 'male', ethnicity: 'Non-Hispanic White', mrn: 'A2-510042' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial ambulatory visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "My doctor sent me over about my cholesterol and some protein in my urine.",
    snapshotSummary: 'CKD G2A2 with preserved eGFR but persistent albuminuria, above-goal LDL on a low-dose statin, and HTN. The chart looks mild — but a nephrotoxic OTC and missed statin doses are hiding in plain sight.',
    diseaseStates: ['Hyperlipidemia', 'CKD G2A2', 'Hypertension'],
    learningObjectives: [
      'Recognize CKD by albuminuria even when eGFR is preserved (stage G2A2)',
      'Uncover an undisclosed nephrotoxic OTC (NSAID) and statin nonadherence',
      'Intensify lipid therapy to an appropriate intensity for a high-risk patient',
    ],
  },
  VITALS: { bp: '136/84', bpRepeat: '134/82', hr: '74', rr: '16', temp: '98.4°F', weight: '103 kg', height: "5'10\"", bmi: '32.6',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'warn' } },
  LABS: [
    { label: 'LDL-C', value: '132', unit: 'mg/dL', flag: 'high', note: 'Above goal for his risk' },
    { label: 'HDL-C', value: '42', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '79', unit: 'mL/min/1.73m²', flag: 'normal', note: 'Preserved (G2)' },
    { label: 'UACR', value: '118', unit: 'mg/g', flag: 'warn', note: 'Moderately increased (A2); prior 105' },
    { label: 'K', value: '4.5', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.02', unit: 'mg/dL', flag: 'normal' },
  ],
  ALERTS: [
    { level: 'warn', text: 'CKD G2A2 — persistent albuminuria despite a normal eGFR confirms kidney damage.' },
    { level: 'warn', text: 'LDL-C 132 on atorvastatin 10 mg — sub-therapeutic intensity for his cardiorenal risk.' },
  ],
  PROBLEMS: [
    { name: 'Hyperlipidemia', detail: 'LDL-C 132 mg/dL, above goal', flag: 'high' },
    { name: 'Chronic kidney disease, G2A2', detail: 'eGFR 79, UACR 118 (A2)', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP mid-130s/80s', flag: 'warn' },
    { name: 'Obesity', detail: 'BMI 32.6', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Atorvastatin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia', notes: 'Low intensity' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Referred for persistent LDL-C elevation despite statin therapy and newly identified persistent albuminuria. Feels well; questions why more treatment is needed.' },
    { label: 'Social history', value: 'Accountant. Former smoker (20 pack-years, quit 6y). Frequent restaurant/processed meals. Largely sedentary.' },
    { label: 'Family history', value: 'Father MI at 61, HLD, HTN; mother HTN, HLD — strong premature ASCVD history.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Home BP log', value: '5-day average ≈ 136/83 mmHg', flag: 'warn' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'nsaid', label: 'OTC / nephrotoxic use', placeholder: 'Pain relievers, supplements, frequency…' },
    { key: 'adherence', label: 'Statin adherence', placeholder: 'How consistently he takes atorvastatin…' },
    { key: 'albumin', label: 'Understanding of albuminuria', placeholder: 'What he grasps about protein in the urine…' },
    { key: 'weight', label: 'Weight / lifestyle goals', placeholder: 'Motivation, diet, activity…' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'a_nsaid', topic: 'OTC ibuprofen (nephrotoxic)', field: 'nsaid',
      keywords: ['ibuprofen', 'advil', 'motrin', 'nsaid', 'pain', 'knee', 'arthritis', 'otc', 'over the counter', 'supplement'],
      response: "Oh — I take ibuprofen for my knees, a few times a week. It's just over-the-counter, so I didn't think it counted as a medication." },
    { id: 'a_adh', topic: 'Statin nonadherence', field: 'adherence',
      keywords: ['miss', 'forget', 'adherence', 'atorvastatin', 'cholesterol medicine', 'every day', 'skip', 'take it'],
      response: "I take the cholesterol one at night… mostly. I probably miss it two or three times a week if I'm honest — I just forget." },
    { id: 'a_alb', topic: 'Albuminuria understanding', field: 'albumin',
      keywords: ['albumin', 'protein', 'urine', 'understand', 'kidney', 'explain', 'why'],
      response: "Protein in my urine? I don't really know what that means. My kidney number looked normal, so I figured my kidneys were fine." },
    { id: 'a_wt', topic: 'Weight motivation', field: 'weight',
      keywords: ['weight', 'lose', 'diet', 'exercise', 'lifestyle', 'goal', 'activity'],
      response: "I'd really like to lose some weight too — that's a big goal for me. I just haven't found a routine that sticks." },
    { id: 'a_bp', topic: 'Home BP habits', field: 'nsaid',
      keywords: ['home', 'check', 'blood pressure at home', 'monitor', 'cuff'],
      response: "I check my blood pressure once in a while, not on any schedule." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'a_hld', title: 'Hyperlipidemia / ASCVD risk', icon: 'Droplet', color: '13314f',
      questions: [
        { key: 'a_hld_q1', q: 'Is atorvastatin 10 mg the right intensity given his LDL, CKD, and family history?' },
        { key: 'a_hld_q2', q: 'How does missing the statin 2–3×/week change your read on the LDL of 132?' },
      ] },
    { id: 'a_ckd', title: 'CKD G2A2 & nephrotoxins', icon: 'FlaskConical', color: '0891b2',
      questions: [
        { key: 'a_ckd_q1', q: 'How is he CKD G2A2 with an eGFR of 79? What does the UACR add?' },
        { key: 'a_ckd_q2', q: 'What is the significance of his frequent ibuprofen use?' },
      ] },
  ],
  PLAN_SECTIONS: [
    { id: 'a_p_hld', title: 'Lipid / ASCVD plan', options: [
      { key: 'a_hld_o1', label: 'Intensify atorvastatin (e.g., to 20–40 mg) toward a high-intensity, guideline-appropriate dose', correct: true },
      { key: 'a_hld_o2', label: 'Address adherence first — confirm he is actually taking the statin', correct: true },
      { key: 'a_hld_o3', label: 'Stop the statin because LDL is "only" 132', correct: false },
      { key: 'a_hld_o4', label: 'Recheck a lipid panel in ~3 months', correct: true },
    ] },
    { id: 'a_p_ckd', title: 'CKD / kidney-protection plan', options: [
      { key: 'a_ckd_o1', label: 'Counsel to stop the NSAID; suggest acetaminophen for knee pain', correct: true },
      { key: 'a_ckd_o2', label: 'Continue the ACE inhibitor for albuminuria/kidney protection', correct: true },
      { key: 'a_ckd_o3', label: 'Stop the ACE inhibitor because eGFR is "normal"', correct: false },
      { key: 'a_ckd_o4', label: 'Repeat UACR and renal function in ~3 months', correct: true },
    ] },
  ],
  GUIDING_QUESTIONS: [
    'Why does persistent albuminuria establish CKD even with a normal eGFR?',
    'Which questions surface an OTC the patient does not consider a "medication"?',
    'What statin intensity matches his risk, and how does adherence factor in?',
  ],
  COUNSELING: [
    { id: 'a_c1', title: 'Albuminuria & NSAIDs in plain language', body: [
      "Protein in your urine is an early sign your kidneys are under strain — even though your filtering number looks normal.",
      "Ibuprofen can be hard on the kidneys when used often. Let's switch your knee pain to acetaminophen and protect them.",
      "Taking the cholesterol pill every day is what actually lowers your heart risk — let's find a way to make it routine." ] },
  ],
  PRECEPTOR: {
    keyIssues: ['CKD G2A2 — albuminuria with preserved eGFR', 'Sub-therapeutic statin + nonadherence', 'Frequent nephrotoxic NSAID', 'Doesn’t understand albuminuria'],
    assessment: ['Albuminuria defines kidney damage independent of eGFR', 'LDL of 132 partly reflects missed doses and a low-intensity statin', 'NSAID use is actively harmful to his kidneys'],
    plan: ['Intensify the statin and fix adherence', 'Stop the NSAID; switch to acetaminophen', 'Continue ACEi; recheck lipids/UACR in 3 months', 'Lifestyle + weight counseling'],
    pearls: ['Stage CKD with eGFR AND albuminuria — never eGFR alone', 'Always ask about OTCs by name; patients don’t count them as meds'],
    mistakes: ['Calling the kidneys "fine" because eGFR is normal', 'Escalating the statin without first confirming adherence', 'Missing the nephrotoxic NSAID'],
    followupQuestions: ['What LDL response do you expect at 3 months?', 'How will you confirm he stopped the ibuprofen?'],
    checklist: ['Staged CKD correctly (G2A2)', 'Uncovered NSAID + nonadherence', 'Intensified lipid therapy', 'Counseled NSAID avoidance'],
  },
})

const michaelWed = makeCase({
  id: 'w2-michael-wed',
  PATIENT: michaelTue.PATIENT,
  ENCOUNTER: {
    day: 'Wednesday', type: '3-month follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "The higher cholesterol pill seems fine. I cut back on the ibuprofen.",
    snapshotSummary: 'Three months after intensifying the statin and counseling on NSAID avoidance. LDL and albuminuria improving — but he still believes a normal eGFR means healthy kidneys.',
    diseaseStates: ['Hyperlipidemia', 'CKD G2A2', 'Hypertension'],
    learningObjectives: ['Interpret LDL and UACR response', 'Correct the "normal eGFR = healthy kidneys" misconception', 'Reinforce durable NSAID avoidance'],
  },
  VITALS: { bp: '132/80', bpRepeat: '130/80', hr: '72', rr: '16', temp: '98.3°F', weight: '101 kg', height: "5'10\"", bmi: '31.9',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'warn' } },
  LABS: [
    { label: 'LDL-C', value: '96', unit: 'mg/dL', flag: 'warn', note: 'Improved from 132' },
    { label: 'HDL-C', value: '44', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '78', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'UACR', value: '102', unit: 'mg/g', flag: 'warn', note: 'Improved from 118' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal' },
  ],
  ALERTS: [{ level: 'info', text: 'LDL and albuminuria both improving on intensified statin + reduced NSAID use.' }],
  PROBLEMS: michaelTue.PROBLEMS,
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia', notes: 'Intensified' },
  ],
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Tolerating atorvastatin 20 mg without muscle symptoms. Reduced ibuprofen substantially but still uses it ~weekly.' }],
  INTERVIEW_FIELDS: [
    { key: 'nsaid', label: 'NSAID use now', placeholder: 'How much ibuprofen remains…' },
    { key: 'albumin', label: 'Kidney understanding', placeholder: 'His belief about eGFR vs albuminuria…' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'aw_nsaid', topic: 'Residual NSAID use', field: 'nsaid', keywords: ['ibuprofen', 'nsaid', 'advil', 'pain', 'knee', 'still'],
      response: "I still take ibuprofen sometimes — maybe once a week now, a lot less than before." },
    { id: 'aw_alb', topic: 'Kidney misconception', field: 'albumin', keywords: ['kidney', 'egfr', 'normal', 'albumin', 'protein', 'understand', 'healthy'],
      response: "My kidney number is normal, so my kidneys are basically healthy now, right?" },
  ],
  ASSESSMENT_CARDS: [
    { id: 'aw_a', title: 'Response & education', icon: 'Droplet', color: '0891b2', questions: [
      { key: 'aw_q1', q: 'How do you interpret the LDL drop to 96 and UACR to 102?' },
      { key: 'aw_q2', q: 'How will you correct his belief that a normal eGFR means healthy kidneys?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'aw_p', title: 'Plan', options: [
      { key: 'aw_o1', label: 'Continue atorvastatin; reinforce adherence and reassess if LDL is at goal', correct: true },
      { key: 'aw_o2', label: 'Re-counsel on fully stopping the NSAID', correct: true },
      { key: 'aw_o3', label: 'Stop the ACE inhibitor now that albuminuria is improving', correct: false },
      { key: 'aw_o4', label: 'Educate that albuminuria still signals ongoing kidney risk', correct: true },
    ] },
  ],
  GUIDING_QUESTIONS: ['Is improving albuminuria a reason to relax kidney-protective therapy?', 'How do you explain CKD with a normal eGFR?'],
  PRECEPTOR: {
    keyIssues: ['Good LDL/UACR response', 'Persistent NSAID use', 'eGFR misconception'],
    assessment: ['Response confirms the plan is working', 'Albuminuria improving but still present — kidneys are not "cured"'],
    plan: ['Continue intensified statin', 'Reinforce NSAID cessation', 'Continue ACEi + monitoring'],
    pearls: ['Improving albuminuria is encouragement to continue, not stop, protection'],
    mistakes: ['Reassuring him the kidneys are "fine"', 'De-escalating the ACEi'],
    followupQuestions: ['What is his LDL goal and are we there?'],
    checklist: ['Interpreted response', 'Corrected misconception', 'Reinforced NSAID avoidance'],
  },
})

const michaelThu = makeCase({
  id: 'w2-michael-thu',
  PATIENT: michaelTue.PATIENT,
  ENCOUNTER: {
    day: 'Thursday', type: '2nd 3-month follow-up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "Everything's better, but there's still protein in my urine — I thought it would be gone.",
    snapshotSummary: 'Six months in. LDL, BP, and weight improved and albuminuria is trending down — but he expects the proteinuria to disappear entirely. Manage expectations and sustain protection.',
    diseaseStates: ['Hyperlipidemia', 'CKD G2A2', 'Hypertension'],
    learningObjectives: ['Frame persistent albuminuria realistically', 'Confirm durable LDL control', 'Sustain kidney protection and lifestyle gains'],
  },
  VITALS: { bp: '130/78', bpRepeat: '128/78', hr: '70', rr: '16', temp: '98.2°F', weight: '99 kg', height: "5'10\"", bmi: '31.3',
    flags: { bp: 'normal', bpRepeat: 'normal', bmi: 'warn' } },
  LABS: [
    { label: 'LDL-C', value: '84', unit: 'mg/dL', flag: 'normal', note: '118→102→98 UACR trend; LDL well-controlled' },
    { label: 'HDL-C', value: '47', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '77', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'UACR', value: '98', unit: 'mg/g', flag: 'warn', note: 'Trend 118 → 102 → 98' },
    { label: 'K', value: '4.6', unit: 'mEq/L', flag: 'normal' },
  ],
  ALERTS: [{ level: 'info', text: 'Sustained improvement across LDL, BP, weight, and albuminuria.' }],
  PROBLEMS: michaelTue.PROBLEMS,
  MEDICATIONS: michaelWed.MEDICATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Rare ibuprofen (1–2×/month); much more aware of kidney-affecting meds. Pleased with progress; puzzled the proteinuria has not resolved.' }],
  INTERVIEW_FIELDS: [
    { key: 'expect', label: 'Expectations re: albuminuria', placeholder: 'What he expects proteinuria to do…' },
    { key: 'weight', label: 'Ongoing goals', placeholder: 'Weight, lifestyle, prevention…' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'at_exp', topic: 'Albuminuria expectations', field: 'expect', keywords: ['protein', 'albumin', 'urine', 'gone', 'disappear', 'expect', 'still there', 'why'],
      response: "I figured the protein would be gone by now. It's still showing up — does that mean the treatment isn't working?" },
    { id: 'at_wt', topic: 'Weight goal', field: 'weight', keywords: ['weight', 'lose', 'goal', 'exercise', 'diet'],
      response: "I'd really like to keep losing weight — that's still my main goal." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'at_a', title: 'Expectations & maintenance', icon: 'FlaskConical', color: '0891b2', questions: [
      { key: 'at_q1', q: 'How do you frame persistent-but-improving albuminuria so he stays engaged?' },
      { key: 'at_q2', q: 'Is his LDL controlled, and should anything change?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'at_p', title: 'Plan', options: [
      { key: 'at_o1', label: 'Reassure: reducing albuminuria — not eliminating it — is the realistic, protective goal', correct: true },
      { key: 'at_o2', label: 'Continue statin + ACEi; maintain kidney protection', correct: true },
      { key: 'at_o3', label: 'Stop therapy because numbers look good', correct: false },
      { key: 'at_o4', label: 'Continue lifestyle/weight support and routine monitoring', correct: true },
    ] },
  ],
  GUIDING_QUESTIONS: ['Is "albuminuria gone" a realistic goal?', 'Why continue therapy when numbers are good?'],
  PRECEPTOR: {
    keyIssues: ['Sustained gains', 'Unrealistic expectation that albuminuria resolves', 'Durable protection needed'],
    assessment: ['Lowering albuminuria is the goal; full resolution often isn’t', 'Maintain protective therapy'],
    plan: ['Reassure and reframe', 'Continue statin + ACEi + monitoring', 'Support weight goals'],
    pearls: ['Managing expectations keeps patients adherent for the long haul'],
    mistakes: ['Implying treatment failed because albuminuria persists', 'De-escalating protection'],
    followupQuestions: ['What long-term monitoring cadence fits G2A2?'],
    checklist: ['Reframed expectations', 'Confirmed LDL control', 'Sustained protection'],
  },
})

/* ============================ ANGELA RODRIGUEZ (B) ============================ */
// HTN + HLD + CKD G3aA2, obesity. No diabetes. Penicillin allergy.
// Hidden: rosuvastatin 20 prescribed 6 mo ago, NEVER started (cost + embarrassment);
// statin fear. On low-intensity simvastatin 10; markedly elevated LDL.

const angelaTue = makeCase({
  id: 'w2-angela-tue',
  PATIENT: { name: 'Angela Rodriguez', age: 66, sex: 'female', ethnicity: 'Hispanic', mrn: 'B2-447120' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial ambulatory visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "My cholesterol is still high and they wanted me to come in about my kidneys.",
    snapshotSummary: 'CKD G3aA2 with markedly elevated LDL on a weak statin. A high-intensity statin was prescribed months ago — but the fill history is empty, and she hasn’t volunteered why.',
    diseaseStates: ['Hyperlipidemia', 'CKD G3aA2', 'Hypertension'],
    learningObjectives: [
      'Uncover a never-started statin and the cost/embarrassment barrier behind it',
      'Match statin intensity to a high-risk CKD patient',
      'Address affordability as a medication-related problem, not a personal failing',
    ],
  },
  VITALS: { bp: '142/86', bpRepeat: '140/84', hr: '76', rr: '16', temp: '98.5°F', weight: '96 kg', height: "5'2\"", bmi: '36.3',
    flags: { bp: 'high', bpRepeat: 'high', bmi: 'high' } },
  LABS: [
    { label: 'LDL-C', value: '148', unit: 'mg/dL', flag: 'high', note: 'Markedly elevated' },
    { label: 'HDL-C', value: '41', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '54', unit: 'mL/min/1.73m²', flag: 'warn', note: 'CKD G3a' },
    { label: 'UACR', value: '165', unit: 'mg/g', flag: 'warn', note: 'Moderately increased (A2); prior 152' },
    { label: 'K', value: '4.7', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.18', unit: 'mg/dL', flag: 'warn' },
  ],
  ALERTS: [
    { level: 'high', text: 'Rosuvastatin 20 mg was prescribed ~6 months ago but has no fill history.' },
    { level: 'warn', text: 'CKD G3a with markedly elevated LDL on low-intensity simvastatin 10 mg.' },
  ],
  PROBLEMS: [
    { name: 'Hyperlipidemia', detail: 'LDL-C 148 mg/dL, markedly elevated', flag: 'high' },
    { name: 'Chronic kidney disease, G3aA2', detail: 'eGFR 54, UACR 165 (A2)', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP low-140s/80s', flag: 'high' },
    { name: 'Obesity', detail: 'BMI 36.3', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Losartan', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: '' },
    { name: 'Amlodipine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Simvastatin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia', notes: 'Low intensity' },
  ],
  ALLERGIES: [{ substance: 'Penicillin', reaction: 'Rash (childhood)' }],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }, { name: 'Pneumococcal', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Referred for persistently elevated LDL-C despite prior recommendation to intensify therapy. Pleasant, engaged; avoids volunteering concerns.' },
    { label: 'Social history', value: 'Retired teacher, widowed, lives alone. Medicare Part D. Convenience/high-sodium diet. Walks <1×/week.' },
    { label: 'Family history', value: 'Father MI at 63; mother CKD; sister HLD/HTN.' },
  ],
  OBJECTIVE_EXTRA: [{ label: 'Rosuvastatin fill history', value: 'Prescribed ~6 months ago — no claims on record', flag: 'missing' }],
  INTERVIEW_FIELDS: [
    { key: 'statin', label: 'Statin history (never started?)', placeholder: 'Prior prescriptions, unfilled meds…' },
    { key: 'cost', label: 'Cost / access barrier', placeholder: 'Affordability, embarrassment, insurance…' },
    { key: 'fear', label: 'Statin concerns / fears', placeholder: 'Side-effect worries…' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'b_statin', topic: 'Rosuvastatin never started', field: 'statin',
      keywords: ['rosuvastatin', 'prescribed', 'never started', 'new', 'cholesterol medication', 'unfilled', 'previous', 'change', 'pick up'],
      response: "My doctor prescribed rosuvastatin about six months ago… but I never started it. I'm sorry — I felt embarrassed to bring it up." },
    { id: 'b_cost', topic: 'Cost barrier', field: 'cost',
      keywords: ['cost', 'afford', 'expensive', 'pay', 'copay', 'price', 'money', 'insurance'],
      response: "Honestly, I was worried about the cost. Some of these medications get pretty expensive, and I'm on a fixed income." },
    { id: 'b_fear', topic: 'Statin fear', field: 'fear',
      keywords: ['side effect', 'muscle', 'safe', 'afraid', 'worried', 'concern', 'risk', 'stories'],
      response: "I also hear a lot of stories about people having muscle problems from those medications, so I was a little nervous." },
    { id: 'b_bp', topic: 'Home BP habits', field: 'cost',
      keywords: ['home', 'check', 'blood pressure at home', 'monitor', 'log'],
      response: "I check my blood pressure every once in a while, but I don't keep a written log." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'b_hld', title: 'Hyperlipidemia & access', icon: 'Droplet', color: '13314f',
      questions: [
        { key: 'b_hld_q1', q: 'Why is her LDL still 148 — pharmacology or access?' },
        { key: 'b_hld_q2', q: 'What statin intensity does a CKD G3a patient with this LDL warrant?' },
      ] },
    { id: 'b_ckd', title: 'CKD G3aA2 & BP', icon: 'FlaskConical', color: '0891b2',
      questions: [
        { key: 'b_ckd_q1', q: 'How does CKD change her cardiovascular risk and lipid targets?' },
        { key: 'b_ckd_q2', q: 'Is her BP at goal? What is appropriate here?' },
      ] },
  ],
  PLAN_SECTIONS: [
    { id: 'b_p_hld', title: 'Lipid plan', options: [
      { key: 'b_hld_o1', label: 'Initiate a high-intensity statin (rosuvastatin) after confirming affordability', correct: true },
      { key: 'b_hld_o2', label: 'Reconcile the med list — confirm she is not taking rosuvastatin', correct: true },
      { key: 'b_hld_o3', label: 'Re-prescribe a brand she already said she can’t afford, without addressing cost', correct: false },
      { key: 'b_hld_o4', label: 'Address the cost barrier (insurance coverage, assistance) and the statin fear', correct: true },
    ] },
    { id: 'b_p_bp', title: 'BP / kidney plan', options: [
      { key: 'b_bp_o1', label: 'Continue ARB for kidney protection; optimize BP toward goal', correct: true },
      { key: 'b_bp_o2', label: 'Start a home BP monitoring routine', correct: true },
      { key: 'b_bp_o3', label: 'Stop the ARB because eGFR is 54', correct: false },
    ] },
  ],
  GUIDING_QUESTIONS: [
    'How do you uncover a cost barrier without shaming the patient?',
    'Why is "treatment failure" the wrong label for a never-started drug?',
    'What lipid intensity fits CKD G3a with LDL 148?',
  ],
  COUNSELING: [
    { id: 'b_c1', title: 'Affordable, reassuring statin start', body: [
      "It's completely okay that you didn't start it — let's solve the cost together so you can.",
      "Rosuvastatin is often very affordable through your plan; we'll check and find the lowest-cost option.",
      "Serious muscle problems are rare. We'll start it, watch for any aches, and adjust if needed." ] },
  ],
  PRECEPTOR: {
    keyIssues: ['Rosuvastatin prescribed but never started (cost + embarrassment)', 'Markedly elevated LDL on a weak statin', 'CKD G3a raises CV risk', 'BP above goal'],
    assessment: ['Her LDL reflects non-initiation, not statin failure', 'CKD makes aggressive lipid lowering more important', 'Cost is the medication-related problem to solve'],
    plan: ['Confirm/reconcile; initiate affordable high-intensity rosuvastatin', 'Address cost + statin fear', 'Continue ARB; optimize BP + home monitoring', 'Recheck lipids/UACR in ~3 months'],
    pearls: ['An "uncontrolled" LDL is often an access problem', 'CKD is a cardiovascular risk enhancer — treat lipids accordingly'],
    mistakes: ['Labeling her nonadherent without finding the cost barrier', 'Re-prescribing an unaffordable option'],
    followupQuestions: ['Which covered statin fits her plan?', 'How will you confirm she actually starts it?'],
    checklist: ['Uncovered never-started statin', 'Addressed cost + fear', 'Initiated appropriate-intensity statin', 'Optimized BP/kidney protection'],
  },
})

const angelaWed = makeCase({
  id: 'w2-angela-wed',
  PATIENT: angelaTue.PATIENT,
  ENCOUNTER: {
    day: 'Wednesday', type: '3-month follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I started the rosuvastatin — it was cheaper than I feared.",
    snapshotSummary: 'Three months after starting an affordable high-intensity statin. Big LDL drop and good tolerability; confirm the win and keep optimizing BP.',
    diseaseStates: ['Hyperlipidemia', 'CKD G3aA2', 'Hypertension'],
    learningObjectives: ['Interpret LDL response after fixing access', 'Confirm tolerability and sustainability', 'Continue BP/kidney optimization'],
  },
  VITALS: { bp: '136/82', bpRepeat: '134/80', hr: '74', rr: '16', temp: '98.4°F', weight: '95 kg', height: "5'2\"", bmi: '35.9',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'high' } },
  LABS: [
    { label: 'LDL-C', value: '89', unit: 'mg/dL', flag: 'warn', note: 'Improved from 148' },
    { label: 'HDL-C', value: '44', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '53', unit: 'mL/min/1.73m²', flag: 'warn' },
    { label: 'UACR', value: '160', unit: 'mg/g', flag: 'warn', note: 'Stable (A2)' },
    { label: 'K', value: '4.6', unit: 'mEq/L', flag: 'normal' },
  ],
  ALERTS: [{ level: 'info', text: 'Marked LDL reduction after fixing the cost barrier; statin well tolerated.' }],
  PROBLEMS: angelaTue.PROBLEMS,
  MEDICATIONS: [
    { name: 'Losartan', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney', notes: '' },
    { name: 'Amlodipine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Rosuvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia', notes: 'Started; affordable via plan' },
  ],
  ALLERGIES: [{ substance: 'Penicillin', reaction: 'Rash (childhood)' }],
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Started rosuvastatin, taking it consistently (1–2 missed doses in 3 months). Reassured by affordability and no serious side effects.' }],
  INTERVIEW_FIELDS: [
    { key: 'start', label: 'Did she start it / tolerability', placeholder: 'Initiation, side effects…' },
    { key: 'cost', label: 'Affordability now', placeholder: 'Is it sustainable?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'bw_start', topic: 'Rosuvastatin started & tolerated', field: 'start', keywords: ['start', 'rosuvastatin', 'muscle', 'side effect', 'tolerate', 'ache', 'how'],
      response: "Yes — I started it and I've been taking it. No muscle aches or problems at all, which was a relief." },
    { id: 'bw_cost', topic: 'Affordability', field: 'cost', keywords: ['cost', 'afford', 'pay', 'cheaper', 'price', 'sustain'],
      response: "It turned out to be much more affordable through my insurance than I expected — I can keep this up." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'bw_a', title: 'Response & next steps', icon: 'Droplet', color: '13314f', questions: [
      { key: 'bw_q1', q: 'How would you characterize her LDL response now that access is fixed?' },
      { key: 'bw_q2', q: 'BP is mid-130s/80s — continue or intensify?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'bw_p', title: 'Plan', options: [
      { key: 'bw_o1', label: 'Continue rosuvastatin; reinforce adherence', correct: true },
      { key: 'bw_o2', label: 'Optimize BP toward goal with the current regimen', correct: true },
      { key: 'bw_o3', label: 'Stop the statin now that LDL improved', correct: false },
      { key: 'bw_o4', label: 'Recheck lipids/UACR in ~3 months', correct: true },
    ] },
  ],
  GUIDING_QUESTIONS: ['Does the response confirm the original problem was access?', 'Is her LDL at goal for her CKD risk?'],
  PRECEPTOR: {
    keyIssues: ['Large LDL drop after starting therapy', 'Confirms access was the issue', 'BP still slightly above goal'],
    assessment: ['The response proves the original barrier was access, not pharmacology', 'Continue and keep optimizing'],
    plan: ['Continue rosuvastatin', 'Optimize BP', 'Continue monitoring'],
    pearls: ['Fixing access often produces the biggest single LDL drop you’ll see'],
    mistakes: ['Stopping or down-titrating a working, now-affordable statin'],
    followupQuestions: ['Is further LDL lowering warranted for her risk?'],
    checklist: ['Confirmed initiation/tolerability', 'Continued therapy', 'Optimized BP'],
  },
})

const angelaThu = makeCase({
  id: 'w2-angela-thu',
  PATIENT: angelaTue.PATIENT,
  ENCOUNTER: {
    day: 'Thursday', type: '2nd 3-month follow-up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "I feel good about my medicines now. What else should I be doing?",
    snapshotSummary: 'Six months in. LDL near goal, BP improving, confident and adherent. Decide whether further LDL lowering is warranted and consolidate gains.',
    diseaseStates: ['Hyperlipidemia', 'CKD G3aA2', 'Hypertension'],
    learningObjectives: ['Judge whether to add nonstatin therapy', 'Confirm durable adherence and BP control', 'Reinforce lifestyle and monitoring'],
  },
  VITALS: { bp: '132/80', bpRepeat: '130/78', hr: '72', rr: '16', temp: '98.3°F', weight: '93 kg', height: "5'2\"", bmi: '35.2',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'high' } },
  LABS: [
    { label: 'LDL-C', value: '78', unit: 'mg/dL', flag: 'normal', note: '148 → 89 → 78' },
    { label: 'HDL-C', value: '46', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '54', unit: 'mL/min/1.73m²', flag: 'warn' },
    { label: 'UACR', value: '155', unit: 'mg/g', flag: 'warn', note: '165 → 160 → 155' },
    { label: 'K', value: '4.5', unit: 'mEq/L', flag: 'normal' },
  ],
  ALERTS: [{ level: 'info', text: 'Sustained LDL reduction, improving BP, stable kidney function.' }],
  PROBLEMS: angelaTue.PROBLEMS,
  MEDICATIONS: angelaWed.MEDICATIONS,
  ALLERGIES: [{ substance: 'Penicillin', reaction: 'Rash (childhood)' }],
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Adherent (misses ~1×/month), confident with medications, walking ~4×/week, improved diet and gradual weight loss.' }],
  INTERVIEW_FIELDS: [
    { key: 'confidence', label: 'Confidence / adherence', placeholder: 'How she feels about the regimen…' },
    { key: 'goals', label: 'Goals & lifestyle', placeholder: 'Weight, activity, prevention…' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'bt_conf', topic: 'Confidence in statin', field: 'confidence', keywords: ['confiden', 'rosuvastatin', 'trust', 'helping', 'good', 'routine'],
      response: "I feel much more confident now — the rosuvastatin's been easy and I trust it's helping." },
    { id: 'bt_goal', topic: 'Lifestyle goals', field: 'goals', keywords: ['weight', 'walk', 'diet', 'exercise', 'goal', 'lose'],
      response: "I'm walking about four days a week and eating better. I'd still like to lose more weight." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'bt_a', title: 'Goal attainment & maintenance', icon: 'Droplet', color: '13314f', questions: [
      { key: 'bt_q1', q: 'Is her LDL at goal for a CKD G3a patient, or is nonstatin therapy warranted?' },
      { key: 'bt_q2', q: 'What maintenance and monitoring plan fits?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'bt_p', title: 'Plan', options: [
      { key: 'bt_o1', label: 'Continue rosuvastatin; consider ezetimibe only if LDL remains above her individualized goal', correct: true },
      { key: 'bt_o2', label: 'Continue ARB; maintain BP and kidney monitoring', correct: true },
      { key: 'bt_o3', label: 'Discontinue the statin because she feels well', correct: false },
      { key: 'bt_o4', label: 'Reinforce lifestyle, adherence, and routine monitoring', correct: true },
    ] },
  ],
  GUIDING_QUESTIONS: ['What is her individualized LDL goal given CKD?', 'When would you add ezetimibe?'],
  PRECEPTOR: {
    keyIssues: ['LDL near goal', 'Durable adherence + confidence', 'Decision: add nonstatin or maintain'],
    assessment: ['Strong response; judge against an individualized goal', 'Maintain protective therapy'],
    plan: ['Continue rosuvastatin (± ezetimibe if above goal)', 'Continue ARB + monitoring', 'Lifestyle support'],
    pearls: ['Ezetimibe is the natural next step when a maximally tolerated statin leaves LDL above goal'],
    mistakes: ['Stopping a statin in a high-risk CKD patient who feels well'],
    followupQuestions: ['What LDL threshold would trigger ezetimibe for her?'],
    checklist: ['Judged goal attainment', 'Planned maintenance', 'Reinforced lifestyle/monitoring'],
  },
})

/* ============================ DAVID CHEN (C) ============================ */
// T2DM + CKD G3bA3 (highest risk) + HLD + HTN, obesity. Analytical; wants the "why".
// Already on ACEi + SGLT2i + high-intensity statin, but persistent SEVERE albuminuria.
// Hidden: previously DECLINED finerenone (pill burden, hyperkalemia worry, cost; never
// understood the rationale). The CONFIDENCE-trial phenotype.

const davidTue = makeCase({
  id: 'w2-david-tue',
  PATIENT: { name: 'David Chen', age: 62, sex: 'male', ethnicity: 'Asian', mrn: 'C2-336071' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial ambulatory visit', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "My kidney numbers aren't improving and I want to understand why.",
    snapshotSummary: 'T2DM with CKD G3bA3 — severe albuminuria persisting despite ACEi, SGLT2i, and a high-intensity statin. The missing lever is finerenone, which he previously declined. He wants the evidence before agreeing.',
    diseaseStates: ['Type 2 Diabetes', 'CKD G3bA3', 'Hyperlipidemia', 'Hypertension'],
    learningObjectives: [
      'Recognize residual cardiorenal risk despite optimized foundational therapy',
      'Surface a previously declined therapy (finerenone) and the reasons behind it',
      'Make an evidence-based case for combination cardiorenal therapy (CONFIDENCE)',
    ],
  },
  VITALS: { bp: '138/82', bpRepeat: '136/80', hr: '72', rr: '16', temp: '98.2°F', weight: '102 kg', height: "5'9\"", bmi: '32.3',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'warn' } },
  LABS: [
    { label: 'A1C', value: '7.2', unit: '%', flag: 'warn', note: 'Near goal' },
    { label: 'LDL-C', value: '88', unit: 'mg/dL', flag: 'warn', note: 'On high-intensity statin' },
    { label: 'HDL-C', value: '43', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '42', unit: 'mL/min/1.73m²', flag: 'warn', note: 'CKD G3b' },
    { label: 'UACR', value: '520', unit: 'mg/g', flag: 'high', note: 'Severely increased (A3); prior 505' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.78', unit: 'mg/dL', flag: 'warn' },
  ],
  ALERTS: [
    { level: 'high', text: 'CKD G3bA3 — severe albuminuria persisting despite ACEi + SGLT2i + statin.' },
    { level: 'warn', text: 'Finerenone was previously recommended and declined — high-value missing therapy.' },
  ],
  PROBLEMS: [
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 7.2%, 14-year duration', flag: 'warn' },
    { name: 'Chronic kidney disease, G3bA3', detail: 'eGFR 42, UACR 520 (A3)', flag: 'high' },
    { name: 'Hyperlipidemia', detail: 'LDL-C 88 on rosuvastatin 20', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP high-130s/80s', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Metformin ER', dose: '1000 mg', route: 'PO', freq: 'BID', indication: 'T2DM', notes: 'Appropriate at eGFR 42' },
    { name: 'Empagliflozin', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'T2DM / cardiorenal', notes: '' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: '' },
    { name: 'Rosuvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia / ASCVD', notes: 'High intensity' },
    { name: 'Amlodipine', dose: '5 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }, { name: 'Pneumococcal', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Established T2DM/CKD patient, highly analytical, requests the rationale before agreeing to changes. Excellent adherence to current regimen.' },
    { label: 'Social history', value: 'Electrical engineer, married. Never smoker. Attempts a diabetic diet; walks ~3×/week.' },
    { label: 'Family history', value: 'Father MI at 58 + T2DM; mother T2DM + CKD; brother CAD.' },
  ],
  OBJECTIVE_EXTRA: [{ label: 'Prior finerenone recommendation', value: 'Recommended by another provider; patient declined — not on med list', flag: 'missing' }],
  INTERVIEW_FIELDS: [
    { key: 'finerenone', label: 'Finerenone history (declined?)', placeholder: 'Prior recommendations he didn’t start…' },
    { key: 'potassium', label: 'Hyperkalemia concern', placeholder: 'Worries about potassium…' },
    { key: 'why', label: 'Understanding / wants evidence', placeholder: 'What rationale he needs…' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'c_fin', topic: 'Declined finerenone', field: 'finerenone',
      keywords: ['finerenone', 'kidney medication', 'previous', 'recommend', 'declined', 'never started', 'another', 'mra'],
      response: "A doctor mentioned finerenone before, but I never started it. I didn't really understand why I needed it on top of everything else." },
    { id: 'c_k', topic: 'Hyperkalemia worry', field: 'potassium',
      keywords: ['potassium', 'hyperkalem', 'side effect', 'risk', 'electrolyte', 'worried'],
      response: "I remember hearing it could raise potassium, and that worried me. I didn't want to risk it." },
    { id: 'c_burden', topic: 'Pill burden / cost', field: 'finerenone',
      keywords: ['pill', 'too many', 'burden', 'cost', 'afford', 'another medication', 'expensive'],
      response: "I'm already on a lot of medications. Adding another — and the cost — made me hesitate." },
    { id: 'c_why', topic: 'Wants the rationale', field: 'why',
      keywords: ['why', 'evidence', 'rationale', 'understand', 'explain', 'data', 'benefit', 'proof'],
      response: "I'm an engineer — I want to understand the evidence. If you can show me why it helps my kidneys, I'll seriously consider it." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'c_ckd', title: 'Residual cardiorenal risk', icon: 'FlaskConical', color: 'dc2626',
      questions: [
        { key: 'c_ckd_q1', q: 'Why is severe albuminuria persisting despite ACEi + SGLT2i? What does that signal?' },
        { key: 'c_ckd_q2', q: 'How does CONFIDENCE support adding finerenone to his SGLT2i?' },
      ] },
    { id: 'c_comm', title: 'Patient-centered persuasion', icon: 'HeartPulse', color: '13314f',
      questions: [
        { key: 'c_comm_q1', q: 'How will you address his hyperkalemia concern with monitoring rather than avoidance?' },
        { key: 'c_comm_q2', q: 'How do you give an analytical patient the "why" he needs?' },
      ] },
  ],
  PLAN_SECTIONS: [
    { id: 'c_p_renal', title: 'Cardiorenal plan', options: [
      { key: 'c_o1', label: 'Initiate finerenone for residual albuminuria despite ACEi + SGLT2i (CONFIDENCE-supported)', correct: true },
      { key: 'c_o2', label: 'Counsel the hyperkalemia plan: baseline + scheduled potassium monitoring, dietary guidance', correct: true },
      { key: 'c_o3', label: 'Continue ACEi, SGLT2i, metformin, statin — do not de-escalate foundational therapy', correct: true },
      { key: 'c_o4', label: 'Stop the SGLT2i before starting finerenone', correct: false },
    ] },
    { id: 'c_p_edu', title: 'Education / monitoring', options: [
      { key: 'c_o5', label: 'Explain the rationale and evidence (combination cardiorenal protection) to address his questions', correct: true },
      { key: 'c_o6', label: 'Schedule potassium + eGFR recheck after initiation', correct: true },
      { key: 'c_o7', label: 'Avoid finerenone permanently because potassium might rise', correct: false },
    ] },
  ],
  GUIDING_QUESTIONS: [
    'What does persistent A3 albuminuria despite foundational therapy tell you?',
    'How does CONFIDENCE change the conversation about finerenone + SGLT2i?',
    'How do you turn a hyperkalemia fear into a monitoring plan?',
  ],
  COUNSELING: [
    { id: 'c_c1', title: 'The "why" behind finerenone', body: [
      "Your ACE inhibitor and SGLT2 inhibitor are doing a lot — but your urine protein is still high, which means there's risk left on the table.",
      "Finerenone targets that residual risk. In the CONFIDENCE trial, combining it with your SGLT2 inhibitor lowered urine protein substantially more than either alone.",
      "Potassium can rise, so we don't ignore it — we check it before and after starting, and adjust if needed. That's a managed risk, not a reason to skip a kidney-protective drug." ] },
  ],
  PRECEPTOR: {
    keyIssues: ['CKD G3bA3 — severe albuminuria despite optimized foundational therapy', 'Previously declined finerenone (pill burden, hyperkalemia, cost, no rationale)', 'Highly analytical — needs evidence'],
    assessment: ['Persistent A3 albuminuria signals residual risk that finerenone targets', 'CONFIDENCE supports finerenone + SGLT2i combination for greater albuminuria reduction', 'Hyperkalemia is monitored, not avoided'],
    plan: ['Initiate finerenone with a potassium monitoring plan', 'Continue ACEi, SGLT2i, statin, metformin', 'Educate with the evidence; recheck K/eGFR/UACR'],
    pearls: ['Foundational therapy ≠ maximal therapy — residual albuminuria is the signal to add finerenone', 'For analytical patients, the evidence IS the intervention'],
    mistakes: ['Accepting persistent severe albuminuria as "optimized"', 'Avoiding finerenone solely for hyperkalemia risk', 'Stopping the SGLT2i to "make room"'],
    followupQuestions: ['What potassium threshold changes your finerenone plan?', 'How will you measure benefit at 3 months?'],
    checklist: ['Identified residual albuminuria', 'Surfaced the declined finerenone + reasons', 'Built an evidence-based, monitored finerenone plan', 'Continued foundational therapy'],
  },
})

const davidWed = makeCase({
  id: 'w2-david-wed',
  PATIENT: davidTue.PATIENT,
  ENCOUNTER: {
    day: 'Wednesday', type: '3-month follow-up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "I started the finerenone. My potassium went up a little and my kidney number dipped — should I be worried?",
    snapshotSummary: 'Three months after adding finerenone. Albuminuria improving markedly; expected small eGFR dip and a potassium rise to 5.1 — interpret in context rather than reflexively stopping therapy.',
    diseaseStates: ['Type 2 Diabetes', 'CKD G3bA3', 'Hyperlipidemia', 'Hypertension'],
    learningObjectives: ['Interpret finerenone potassium/eGFR monitoring in context', 'Recognize albuminuria response', 'Coach an anxious analytical patient through expected changes'],
  },
  VITALS: { bp: '132/78', bpRepeat: '130/76', hr: '70', rr: '16', temp: '98.1°F', weight: '101 kg', height: "5'9\"", bmi: '31.9',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'warn' } },
  LABS: [
    { label: 'A1C', value: '7.0', unit: '%', flag: 'warn' },
    { label: 'LDL-C', value: '82', unit: 'mg/dL', flag: 'warn' },
    { label: 'eGFR', value: '40', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Expected small dip after finerenone' },
    { label: 'UACR', value: '390', unit: 'mg/g', flag: 'high', note: 'Improved from 520' },
    { label: 'K', value: '5.1', unit: 'mEq/L', flag: 'warn', note: 'Up from 4.8 — monitor, contextualize' },
    { label: 'SCr', value: '1.86', unit: 'mg/dL', flag: 'warn' },
  ],
  ALERTS: [{ level: 'warn', text: 'Potassium 5.1 and a small eGFR dip after finerenone — interpret in context; do not reflexively discontinue.' }],
  PROBLEMS: davidTue.PROBLEMS,
  MEDICATIONS: [
    { name: 'Metformin ER', dose: '1000 mg', route: 'PO', freq: 'BID', indication: 'T2DM', notes: '' },
    { name: 'Empagliflozin', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'Cardiorenal', notes: '' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney', notes: '' },
    { name: 'Rosuvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'ASCVD', notes: '' },
    { name: 'Amlodipine', dose: '5 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Finerenone', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'CKD / albuminuria', notes: 'Started' },
  ],
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Initiated finerenone, good adherence (1 missed dose). No symptoms of hyperkalemia. Noticed the eGFR decrease and remains somewhat worried about potassium.' }],
  INTERVIEW_FIELDS: [
    { key: 'potassium', label: 'Potassium worry / symptoms', placeholder: 'Concerns, symptoms…' },
    { key: 'adherence', label: 'Finerenone adherence/tolerability', placeholder: 'How it’s going…' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'cw_k', topic: 'Potassium concern', field: 'potassium', keywords: ['potassium', 'hyperkalem', 'worried', 'number', 'went up', 'symptom', 'cramp', 'weak'],
      response: "I noticed my potassium went up to 5.1 and my kidney number dipped. I don't feel any cramps or weakness, but it makes me nervous." },
    { id: 'cw_adh', topic: 'Finerenone adherence', field: 'adherence', keywords: ['finerenone', 'start', 'adherence', 'miss', 'taking', 'tolerate'],
      response: "I've been taking the finerenone every day — only missed one dose. Otherwise I feel fine." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'cw_a', title: 'Finerenone monitoring', icon: 'FlaskConical', color: 'dc2626', questions: [
      { key: 'cw_q1', q: 'Does a potassium of 5.1 and a small eGFR dip require stopping finerenone?' },
      { key: 'cw_q2', q: 'How do you interpret the UACR drop from 520 to 390?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'cw_p', title: 'Plan', options: [
      { key: 'cw_o1', label: 'Continue finerenone; recheck potassium and assess in context', correct: true },
      { key: 'cw_o2', label: 'Provide low-potassium dietary guidance; review other potassium-raising contributors', correct: true },
      { key: 'cw_o3', label: 'Discontinue finerenone immediately for a potassium of 5.1', correct: false },
      { key: 'cw_o4', label: 'Continue SGLT2i/ACEi; recognize the eGFR dip as expected', correct: true },
    ] },
  ],
  GUIDING_QUESTIONS: ['Is 5.1 mEq/L an automatic stop?', 'What does the falling UACR tell you about benefit?'],
  PRECEPTOR: {
    keyIssues: ['Albuminuria improving on finerenone', 'Potassium 5.1 + expected eGFR dip', 'Anxious analytical patient'],
    assessment: ['Falling UACR shows the drug is working', 'Potassium 5.1 is interpreted in context — monitor, counsel diet, don’t reflexively stop', 'eGFR dip is expected'],
    plan: ['Continue finerenone; recheck potassium', 'Dietary potassium counseling', 'Continue foundational therapy'],
    pearls: ['A modest potassium rise is a monitoring event, not an automatic discontinuation', 'Show the analytical patient the UACR trend — data reassures him'],
    mistakes: ['Stopping finerenone reflexively at K 5.1', 'Stopping the SGLT2i for the expected eGFR dip'],
    followupQuestions: ['What potassium value would change your plan?'],
    checklist: ['Continued finerenone appropriately', 'Managed potassium with monitoring/diet', 'Interpreted UACR/eGFR correctly'],
  },
})

const davidThu = makeCase({
  id: 'w2-david-thu',
  PATIENT: davidTue.PATIENT,
  ENCOUNTER: {
    day: 'Thursday', type: '2nd 3-month follow-up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "My potassium settled and the protein keeps dropping. This makes sense now.",
    snapshotSummary: 'Six months in. Albuminuria down from 520 to 290, potassium normalized, kidney function stable — the combination cardiorenal strategy is working. Consolidate and set long-term monitoring.',
    diseaseStates: ['Type 2 Diabetes', 'CKD G3bA3', 'Hyperlipidemia', 'Hypertension'],
    learningObjectives: ['Interpret longitudinal UACR/eGFR/potassium trends', 'Confirm the combination cardiorenal strategy', 'Set durable monitoring and connect to CONFIDENCE'],
  },
  VITALS: { bp: '128/76', bpRepeat: '126/74', hr: '68', rr: '16', temp: '98.2°F', weight: '99 kg', height: "5'9\"", bmi: '31.3',
    flags: { bp: 'normal', bpRepeat: 'normal', bmi: 'warn' } },
  LABS: [
    { label: 'A1C', value: '6.9', unit: '%', flag: 'normal' },
    { label: 'LDL-C', value: '74', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '41', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Stabilized' },
    { label: 'UACR', value: '290', unit: 'mg/g', flag: 'high', note: '520 → 390 → 290' },
    { label: 'K', value: '4.9', unit: 'mEq/L', flag: 'normal', note: 'Settled from 5.1' },
  ],
  ALERTS: [{ level: 'info', text: 'Marked albuminuria reduction, normalized potassium, stable kidney function on combination cardiorenal therapy.' }],
  PROBLEMS: davidTue.PROBLEMS,
  MEDICATIONS: davidWed.MEDICATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Adherent to the full regimen (<1 missed dose/month). Potassium concerns resolved after reviewing repeat labs. Understands and endorses the strategy.' }],
  INTERVIEW_FIELDS: [
    { key: 'understanding', label: 'Understanding / endorsement', placeholder: 'His grasp of the strategy…' },
    { key: 'barriers', label: 'Any barriers to sustaining', placeholder: 'Cost, pill burden, monitoring…' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'ct_und', topic: 'Endorses strategy', field: 'understanding', keywords: ['understand', 'makes sense', 'protein', 'kidney', 'why', 'evidence', 'working'],
      response: "Now that I see the protein dropping from 520 to 290, it makes sense. The data convinced me — I'm committed to staying on it." },
    { id: 'ct_bar', topic: 'Barriers', field: 'barriers', keywords: ['cost', 'afford', 'pill', 'burden', 'barrier', 'monitor', 'hard'],
      response: "The cost ended up being manageable, and the monitoring isn't a burden now that I understand its purpose." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'ct_a', title: 'Consolidation & monitoring', icon: 'FlaskConical', color: 'dc2626', questions: [
      { key: 'ct_q1', q: 'Why continue the full cardiorenal regimen even as numbers improve?' },
      { key: 'ct_q2', q: 'What long-term monitoring does CKD G3bA3 on finerenone require?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'ct_p', title: 'Plan', options: [
      { key: 'ct_o1', label: 'Continue finerenone + SGLT2i + ACEi + statin + metformin', correct: true },
      { key: 'ct_o2', label: 'Continue scheduled potassium, eGFR, UACR, and lipid monitoring', correct: true },
      { key: 'ct_o3', label: 'De-escalate cardiorenal therapy now that albuminuria improved', correct: false },
      { key: 'ct_o4', label: 'Reinforce adherence and long-term self-management', correct: true },
    ] },
  ],
  GUIDING_QUESTIONS: ['Why is improving albuminuria a reason to continue, not stop?', 'How does his case map onto the CONFIDENCE trial?'],
  PRECEPTOR: {
    keyIssues: ['Strong cardiorenal trajectory on combination therapy', 'Potassium normalized', 'Highest-risk patient — sustained protection is the goal'],
    assessment: ['Continue the full regimen; benefit is ongoing risk reduction', 'His case is the real-world CONFIDENCE scenario (finerenone + SGLT2i)'],
    plan: ['Continue all cardiorenal therapy', 'Long-term K/eGFR/UACR/lipid monitoring', 'Reinforce self-management'],
    pearls: ['Combination cardiorenal therapy attacks residual risk foundational therapy leaves behind'],
    mistakes: ['De-escalating protective therapy because UACR improved'],
    followupQuestions: ['How will you frame his case during the CONFIDENCE journal club?'],
    checklist: ['Consolidated combination therapy', 'Confirmed monitoring', 'Linked to CONFIDENCE evidence'],
  },
})

export const W2_CASES = [michaelTue, michaelWed, michaelThu, angelaTue, angelaWed, angelaThu, davidTue, davidWed, davidThu]

/* ----------------------------- Grading rubrics ----------------------------- */
const r = (id, label, keywords, tip) => ({ id, label, keywords, tip })

export const W2_RUBRICS = {
  'w2-michael-tue': {
    subjective: [
      r('s_nsaid', 'OTC ibuprofen (nephrotoxic)', ['ibuprofen', 'nsaid', 'advil', 'otc', 'pain', 'knee'], 'The NSAID is a hidden, kidney-harming OTC.'),
      r('s_adh', 'Statin nonadherence', ['miss', 'adherence', 'atorvastatin', 'forget', '2', '3'], 'He misses the statin 2–3×/week.'),
      r('s_alb', 'Albuminuria understanding gap', ['albumin', 'protein', 'understand', 'eGFR', 'normal'], 'He thinks a normal eGFR means healthy kidneys.'),
    ],
    objective: [
      r('o_ldl', 'LDL above goal (132)', ['132', 'ldl', 'above goal', 'high'], 'Report the above-goal LDL on low-dose statin.'),
      r('o_ckd', 'CKD G2A2 (eGFR 79, UACR 118)', ['g2a2', 'uacr', '118', 'albumin', 'egfr 79', 'preserved'], 'Stage with eGFR AND albuminuria.'),
      r('o_bp', 'BP above goal', ['136', '134', 'blood pressure', 'above goal'], 'Note the mid-130s/80s BP.'),
    ],
    assessment: [
      r('a_ckd', 'Albuminuria defines CKD despite normal eGFR', ['albumin', 'damage', 'preserved egfr', 'g2a2', 'kidney'], 'CKD is present by albuminuria alone.'),
      r('a_statin', 'Statin under-dosed + adherence-limited', ['intensity', 'high intensity', 'adherence', 'under', 'low dose', '10'], 'LDL reflects low dose + missed doses.'),
      r('a_nsaid', 'NSAID is nephrotoxic / contributing', ['nsaid', 'ibuprofen', 'nephrotox', 'avoid', 'kidney'], 'The NSAID actively harms his kidneys.'),
    ],
    plan: [
      r('p_statin', 'Intensify statin to high intensity', ['atorvastatin', '40', '20', 'high intensity', 'intensif'], 'Move to a guideline-appropriate intensity.'),
      r('p_nsaid', 'Stop NSAID; use acetaminophen', ['stop', 'acetaminophen', 'tylenol', 'nsaid', 'avoid ibuprofen'], 'Replace the NSAID.'),
      r('p_acei', 'Continue ACEi for kidney protection', ['continue', 'ace', 'lisinopril', 'kidney'], 'Keep the ACEi.'),
      r('p_mon', 'Recheck lipids/UACR in ~3 months', ['lipid', 'uacr', '3 month', 'recheck'], 'Set the monitoring interval.'),
    ],
    avoid: [
      r('x_egfr', 'Calling kidneys "fine" because eGFR is normal', ['kidneys fine', 'normal egfr healthy', 'no ckd'], 'Albuminuria means kidney damage.'),
      r('x_esc', 'Escalating statin before confirming adherence', ['escalate without', 'ignore adherence'], 'Confirm adherence first.'),
    ],
  },
  'w2-michael-wed': {
    subjective: [
      r('s_nsaid', 'Residual NSAID use', ['ibuprofen', 'nsaid', 'still', 'weekly'], 'He still uses ibuprofen ~weekly.'),
      r('s_misc', 'eGFR misconception', ['egfr', 'normal', 'healthy', 'albumin', 'understand'], 'He believes normal eGFR = healthy kidneys.'),
    ],
    objective: [
      r('o_ldl', 'LDL improved to 96', ['96', 'ldl', 'improv'], 'Report improved LDL.'),
      r('o_uacr', 'UACR improved to 102', ['102', 'uacr', 'improv', 'albumin'], 'Note improving albuminuria.'),
    ],
    assessment: [
      r('a_resp', 'Good response to intensified statin', ['response', 'improv', 'working', 'statin'], 'The plan is working.'),
      r('a_edu', 'Albuminuria still signals risk', ['albumin', 'risk', 'still', 'continue', 'not cured'], 'Kidneys aren’t "cured."'),
    ],
    plan: [
      r('p_cont', 'Continue statin; reinforce adherence', ['continue', 'atorvastatin', 'adherence', 'goal'], 'Continue and assess goal.'),
      r('p_nsaid', 'Re-counsel NSAID cessation', ['nsaid', 'stop', 'ibuprofen', 'avoid'], 'Push for full cessation.'),
      r('p_acei', 'Continue ACEi / kidney protection', ['continue', 'ace', 'kidney', 'monitor'], 'Maintain protection.'),
    ],
    avoid: [r('x_deesc', 'De-escalating ACEi because albuminuria improved', ['stop ace', 'discontinue ace', 'stop lisinopril'], 'Continue kidney protection.')],
  },
  'w2-michael-thu': {
    subjective: [
      r('s_exp', 'Expects albuminuria to fully resolve', ['expect', 'gone', 'disappear', 'protein', 'still'], 'He expects proteinuria to vanish.'),
      r('s_wt', 'Weight-loss motivation', ['weight', 'lose', 'goal', 'lifestyle'], 'Weight remains a key motivator.'),
    ],
    objective: [
      r('o_ldl', 'LDL controlled (84)', ['84', 'ldl', 'control', 'goal'], 'LDL well controlled.'),
      r('o_uacr', 'UACR trend 118→102→98', ['98', 'uacr', 'trend', 'improv'], 'Improving albuminuria trend.'),
    ],
    assessment: [
      r('a_frame', 'Reducing — not eliminating — albuminuria is the goal', ['reduce', 'not eliminate', 'realistic', 'protective', 'manage'], 'Frame expectations correctly.'),
      r('a_maint', 'Maintain protective therapy', ['maintain', 'continue', 'protective'], 'Keep protection going.'),
    ],
    plan: [
      r('p_reassure', 'Reassure/reframe persistent albuminuria', ['reassure', 'reframe', 'explain', 'expect', 'realistic'], 'Manage expectations.'),
      r('p_cont', 'Continue statin + ACEi + monitoring', ['continue', 'statin', 'ace', 'monitor'], 'Maintain therapy.'),
      r('p_life', 'Support weight/lifestyle', ['weight', 'lifestyle', 'diet', 'exercise'], 'Support his goals.'),
    ],
    avoid: [r('x_fail', 'Implying treatment failed because albuminuria persists', ['failed', 'not working', 'stop'], 'Persistence isn’t failure.')],
  },
  'w2-angela-tue': {
    subjective: [
      r('s_never', 'Rosuvastatin never started', ['rosuvastatin', 'never started', 'not started', 'prescribed', 'unfilled'], 'The statin was never initiated.'),
      r('s_cost', 'Cost / affordability barrier', ['cost', 'afford', 'expensive', 'money', 'fixed income', 'copay'], 'Cost is the root barrier.'),
      r('s_fear', 'Statin fear (muscle)', ['fear', 'muscle', 'side effect', 'nervous', 'worried'], 'She fears statin side effects.'),
    ],
    objective: [
      r('o_ldl', 'LDL markedly elevated (148)', ['148', 'ldl', 'elevated', 'high'], 'Markedly elevated LDL.'),
      r('o_ckd', 'CKD G3aA2 (eGFR 54, UACR 165)', ['g3a', 'egfr 54', 'uacr', '165', 'albumin'], 'Stage the CKD.'),
      r('o_bp', 'BP above goal', ['142', '140', 'blood pressure', 'above goal'], 'BP above goal.'),
    ],
    assessment: [
      r('a_access', 'LDL reflects non-initiation, not failure', ['never started', 'access', 'not failure', 'non-initiation', 'cost'], 'It was never started.'),
      r('a_intensity', 'Needs high-intensity statin for CKD risk', ['high intensity', 'rosuvastatin', 'ckd', 'risk', 'intensify'], 'CKD raises CV risk; treat lipids hard.'),
      r('a_bp', 'BP above goal in CKD', ['bp', 'goal', 'ckd', 'above'], 'Optimize BP.'),
    ],
    plan: [
      r('p_init', 'Initiate affordable high-intensity statin', ['initiate', 'rosuvastatin', 'afford', 'high intensity', 'start'], 'Start an affordable statin.'),
      r('p_cost', 'Address cost + statin fear', ['cost', 'afford', 'assistance', 'insurance', 'fear', 'counsel'], 'Solve the barrier.'),
      r('p_bp', 'Continue ARB; optimize BP + home monitoring', ['arb', 'losartan', 'bp', 'home', 'monitor'], 'Optimize BP/kidney.'),
      r('p_mon', 'Recheck lipids/UACR in ~3 months', ['lipid', 'uacr', '3 month', 'recheck'], 'Set monitoring.'),
    ],
    avoid: [
      r('x_label', 'Labeling her nonadherent without finding cost', ['noncompliant', 'nonadherent', 'label'], 'It’s access, not noncompliance.'),
      r('x_unafford', 'Re-prescribing an unaffordable option', ['brand', 'unaffordable', 'expensive same'], 'Address cost first.'),
    ],
  },
  'w2-angela-wed': {
    subjective: [
      r('s_start', 'Started + tolerating rosuvastatin', ['started', 'rosuvastatin', 'tolerate', 'no side', 'muscle'], 'She started and tolerates it.'),
      r('s_cost', 'Now affordable/sustainable', ['afford', 'cost', 'cheaper', 'sustain'], 'Affordable now.'),
    ],
    objective: [
      r('o_ldl', 'LDL improved to 89', ['89', 'ldl', 'improv'], 'Big LDL drop.'),
      r('o_uacr', 'UACR stable', ['uacr', '160', 'stable', 'albumin'], 'Albuminuria stable.'),
    ],
    assessment: [
      r('a_access', 'Confirms access was the issue', ['access', 'confirm', 'response', 'barrier'], 'Access, not pharmacology.'),
      r('a_bp', 'BP still slightly above goal', ['bp', 'goal', 'above', 'optimize'], 'Keep optimizing BP.'),
    ],
    plan: [
      r('p_cont', 'Continue rosuvastatin', ['continue', 'rosuvastatin', 'adherence'], 'Continue the statin.'),
      r('p_bp', 'Optimize BP', ['bp', 'optimize', 'goal'], 'Push BP to goal.'),
      r('p_mon', 'Recheck lipids/UACR in ~3 months', ['lipid', 'uacr', '3 month', 'recheck'], 'Set monitoring.'),
    ],
    avoid: [r('x_stop', 'Stopping the working, affordable statin', ['stop statin', 'discontinue rosuvastatin'], 'Don’t stop a working statin.')],
  },
  'w2-angela-thu': {
    subjective: [
      r('s_conf', 'Confidence + adherence', ['confiden', 'trust', 'adherent', 'routine'], 'She’s confident and adherent.'),
      r('s_goal', 'Lifestyle/weight goals', ['weight', 'walk', 'diet', 'goal'], 'Lifestyle progress.'),
    ],
    objective: [
      r('o_ldl', 'LDL near goal (78)', ['78', 'ldl', 'goal', '148'], 'LDL near goal.'),
      r('o_uacr', 'UACR slowly improving', ['uacr', '155', 'improv', 'albumin'], 'Albuminuria improving.'),
    ],
    assessment: [
      r('a_goal', 'Judge LDL against individualized goal', ['goal', 'individual', 'ezetimibe', 'target'], 'Is she at goal?'),
      r('a_maint', 'Maintain protective therapy', ['maintain', 'continue', 'protective'], 'Maintain therapy.'),
    ],
    plan: [
      r('p_cont', 'Continue statin (± ezetimibe if above goal)', ['continue', 'rosuvastatin', 'ezetimibe', 'goal'], 'Continue ± ezetimibe.'),
      r('p_bp', 'Continue ARB; BP + kidney monitoring', ['arb', 'bp', 'monitor', 'kidney'], 'Continue BP/kidney care.'),
      r('p_life', 'Reinforce lifestyle/adherence', ['lifestyle', 'adherence', 'monitor'], 'Reinforce habits.'),
    ],
    avoid: [r('x_stop', 'Stopping the statin because she feels well', ['stop statin', 'discontinue'], 'Feeling well isn’t a reason to stop.')],
  },
  'w2-david-tue': {
    subjective: [
      r('s_fin', 'Previously declined finerenone', ['finerenone', 'declined', 'never started', 'previous', 'recommend'], 'He declined finerenone before.'),
      r('s_k', 'Hyperkalemia concern', ['potassium', 'hyperkalem', 'worried', 'risk'], 'He worries about potassium.'),
      r('s_why', 'Wants the evidence/rationale', ['why', 'evidence', 'understand', 'rationale', 'data'], 'He needs the "why."'),
    ],
    objective: [
      r('o_ckd', 'CKD G3bA3 (eGFR 42, UACR 520)', ['g3b', 'a3', 'egfr 42', '520', 'severe', 'albumin'], 'Stage the severe CKD.'),
      r('o_found', 'Already on ACEi + SGLT2i + statin', ['ace', 'sglt2', 'empagliflozin', 'statin', 'foundational'], 'Foundational therapy in place.'),
      r('o_a1c', 'A1C near goal (7.2)', ['7 2', 'a1c', 'near goal'], 'A1C is near goal.'),
    ],
    assessment: [
      r('a_resid', 'Residual albuminuria = residual risk', ['residual', 'persistent', 'albumin', 'risk', 'despite'], 'Severe albuminuria persists despite foundational therapy.'),
      r('a_fin', 'Finerenone indicated (CONFIDENCE)', ['finerenone', 'confidence', 'combination', 'add', 'mra'], 'Add finerenone for residual risk.'),
      r('a_k', 'Hyperkalemia is monitored, not avoided', ['potassium', 'monitor', 'context', 'not avoid'], 'Manage K with monitoring.'),
    ],
    plan: [
      r('p_fin', 'Initiate finerenone', ['finerenone', 'initiate', 'start', 'add'], 'Start finerenone.'),
      r('p_kplan', 'Potassium monitoring plan + diet', ['potassium', 'monitor', 'baseline', 'recheck', 'diet'], 'Build a K monitoring plan.'),
      r('p_found', 'Continue ACEi/SGLT2i/statin/metformin', ['continue', 'sglt2', 'ace', 'statin', 'metformin', 'foundational'], 'Don’t de-escalate foundation.'),
      r('p_edu', 'Explain the evidence/rationale', ['explain', 'evidence', 'rationale', 'why', 'confidence', 'educate'], 'Give him the "why."'),
    ],
    avoid: [
      r('x_opt', 'Accepting severe albuminuria as "optimized"', ['optimized', 'no change', 'leave as is', 'nothing more'], 'Residual A3 is the signal to add finerenone.'),
      r('x_kavoid', 'Avoiding finerenone solely for hyperkalemia risk', ['avoid finerenone', 'too risky', 'potassium so no'], 'Monitor, don’t avoid.'),
      r('x_sglt2', 'Stopping the SGLT2i to "make room"', ['stop sglt2', 'stop empagliflozin'], 'Keep the SGLT2i.'),
    ],
  },
  'w2-david-wed': {
    subjective: [
      r('s_k', 'Potassium worry / no symptoms', ['potassium', 'worried', '5 1', 'symptom', 'cramp'], 'Worried about K, asymptomatic.'),
      r('s_adh', 'Finerenone adherence', ['finerenone', 'adherence', 'taking', 'miss'], 'Good finerenone adherence.'),
    ],
    objective: [
      r('o_uacr', 'UACR improved (520→390)', ['390', 'uacr', 'improv', 'albumin'], 'Albuminuria improving.'),
      r('o_k', 'Potassium 5.1; eGFR dip to 40', ['5 1', 'potassium', 'egfr', '40', 'dip'], 'K up, eGFR dipped.'),
    ],
    assessment: [
      r('a_context', 'K 5.1 interpreted in context — not auto-stop', ['context', 'monitor', 'not stop', 'manage', 'expected'], 'Don’t reflexively stop.'),
      r('a_benefit', 'Falling UACR shows benefit', ['uacr', 'benefit', 'working', 'improv', 'albumin'], 'The drug is working.'),
      r('a_egfr', 'eGFR dip is expected', ['egfr', 'expected', 'dip'], 'Expected early dip.'),
    ],
    plan: [
      r('p_cont', 'Continue finerenone; recheck potassium', ['continue', 'finerenone', 'recheck', 'potassium'], 'Continue + recheck K.'),
      r('p_diet', 'Dietary potassium counseling', ['diet', 'potassium', 'low potassium', 'food'], 'Counsel diet.'),
      r('p_found', 'Continue SGLT2i/ACEi', ['continue', 'sglt2', 'ace'], 'Keep foundation.'),
    ],
    avoid: [
      r('x_stop', 'Discontinuing finerenone for K 5.1', ['stop finerenone', 'discontinue finerenone'], 'K 5.1 isn’t an auto-stop.'),
      r('x_sglt2', 'Stopping SGLT2i for the eGFR dip', ['stop sglt2', 'stop empagliflozin'], 'Dip is expected.'),
    ],
  },
  'w2-david-thu': {
    subjective: [
      r('s_und', 'Understands/endorses strategy', ['understand', 'makes sense', 'data', 'committed', 'evidence'], 'He endorses the plan.'),
      r('s_bar', 'No sustaining barriers', ['cost', 'afford', 'manageable', 'monitor', 'barrier'], 'Barriers resolved.'),
    ],
    objective: [
      r('o_uacr', 'UACR 520→390→290', ['290', 'uacr', 'trend', 'improv'], 'Marked albuminuria reduction.'),
      r('o_k', 'Potassium settled (4.9); eGFR stable', ['4 9', 'potassium', 'egfr', 'stable', 'settled'], 'K normalized.'),
    ],
    assessment: [
      r('a_cont', 'Continue full cardiorenal regimen', ['continue', 'cardiorenal', 'protective', 'benefit', 'ongoing'], 'Benefit is ongoing.'),
      r('a_confidence', 'Real-world CONFIDENCE scenario', ['confidence', 'combination', 'finerenone', 'sglt2', 'phenotype'], 'His case mirrors CONFIDENCE.'),
    ],
    plan: [
      r('p_cont', 'Continue finerenone + SGLT2i + ACEi + statin + metformin', ['continue', 'finerenone', 'sglt2', 'ace', 'statin'], 'Continue all therapy.'),
      r('p_mon', 'Long-term K/eGFR/UACR/lipid monitoring', ['monitor', 'potassium', 'egfr', 'uacr', 'lipid', 'long term'], 'Set durable monitoring.'),
      r('p_self', 'Reinforce adherence/self-management', ['adherence', 'self', 'reinforce'], 'Reinforce habits.'),
    ],
    avoid: [r('x_deesc', 'De-escalating cardiorenal therapy at improvement', ['de-escalate', 'deescalate', 'stop', 'discontinue'], 'Don’t de-escalate protection.')],
  },
}
