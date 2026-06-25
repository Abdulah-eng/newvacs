import { makeCase } from './caseFactory.js'

/* ============================ JAMES WILSON (B) ============================ */
// Phenotype: T2DM + HTN + Obesity + Hyperlipidemia. 
// Hidden: cost barrier; empagliflozin prescribed ~4 mo ago, never started due to cost.
// Tuesday: Initial. Wednesday: 3-month follow-up. Thursday: 6-month follow-up.

const jamesTue = makeCase({
  id: 'james-tue',
  PATIENT: { name: 'James Wilson', age: 62, sex: 'male', ethnicity: 'White', mrn: 'B-204417' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "My doctor wanted me to check in about my diabetes and blood pressure.",
    snapshotSummary: 'James Wilson is a 62-year-old male referred to ambulatory care pharmacy services for collaborative management of uncontrolled type 2 diabetes mellitus and hypertension. An SGLT2 inhibitor (empagliflozin) was prescribed four months ago but has no fill history.',
    diseaseStates: ['Type 2 Diabetes', 'Hypertension', 'Hyperlipidemia', 'Obesity'],
    learningObjectives: [
      'Identify an unstated medication access/affordability barrier',
      'Assess non-adherence due to cost',
      'Identify medication stretching behavior',
      'Evaluate diabetes and hypertension above goal'
    ],
  },
  VITALS: { bp: '152/94', bpRepeat: '150/92', hr: '82', rr: '16', temp: '98.1°F', weight: '101 kg', height: "5'10\"", bmi: '31.9',
    flags: { bp: 'high', bpRepeat: 'high', bmi: 'warn' } },
  LABS: [
    { label: 'A1C', value: '8.8', unit: '%', flag: 'high', note: 'Prior 8.3% — worsening' },
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.2', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '0.96', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '89', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'UACR', value: '18', unit: 'mg/g', flag: 'normal' },
    { label: 'LDL-C', value: '103', unit: 'mg/dL', flag: 'warn' },
    { label: 'HDL-C', value: '41', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '212', unit: 'mg/dL', flag: 'high' }
  ],
  ALERTS: [
    { level: 'high', text: 'Empagliflozin 10 mg is active on the med list but has NO claims found in 4 months since prescribed.' },
    { level: 'warn', text: 'BP and A1C both above goal.' },
  ],
  PROBLEMS: [
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 8.8%, above goal', flag: 'high' },
    { name: 'Hypertension', detail: 'BP 152/94, above goal', flag: 'high' },
    { name: 'Hyperlipidemia', detail: 'LDL 103, ASCVD risk', flag: 'warn' },
    { name: 'Obesity', detail: 'BMI 31.9', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'BID', indication: 'T2DM', notes: '' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'T2DM', notes: 'Active — but no fills on record' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'ASCVD prevention', notes: '' },
    { name: 'Omeprazole', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'GERD', notes: '' }
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza (current season)', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented', flag: 'warn' },
    { name: 'Tdap', status: 'Last documented 12 years ago', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Referred by PCP for diabetes and blood pressure management. Reports overall feeling well but acknowledges some fatigue.' },
    { label: 'Social history', value: 'Recently retired truck driver. Lives with wife. Fixed income.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Empagliflozin fill history', value: 'No claims found in 4 months since prescribed', flag: 'missing' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'empa', label: 'Empagliflozin Adherence', placeholder: 'Is he actually taking it?' },
    { key: 'cost', label: 'Cost / Affordability', placeholder: 'Affordability barriers?' },
    { key: 'adherence', label: 'Medication Stretching', placeholder: 'Taking meds differently to save money?' },
    { key: 'knowledge', label: 'Disease Understanding', placeholder: 'Does he understand A1C?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'b_cost', topic: 'Affordability Barrier', field: 'cost',
      keywords: ['cost', 'afford', 'expensive', 'pay', 'money', 'copay', 'insurance', 'price'],
      response: "Honestly, the new one they prescribed (Jardiance) was too expensive. I just couldn't afford it on a fixed income, so I never picked it up." },
    { id: 'b_stretch', topic: 'Medication Stretching', field: 'adherence',
      keywords: ['miss', 'adherence', 'every other day', 'stretch', 'save', 'skip'],
      response: "To be honest, sometimes I take my other pills every other day to make them last longer. They cost a lot too." },
    { id: 'b_delay', topic: 'Delayed Refills', field: 'adherence',
      keywords: ['refill', 'delay', 'pharmacy', 'pick up'],
      response: "Sometimes I wait a few extra days to refill my medicines until I get my pension check." },
    { id: 'b_a1c', topic: 'Limited Disease Understanding', field: 'knowledge',
      keywords: ['a1c', 'understand', 'number', 'mean'],
      response: "The doctor said my A1C was high, but I don't really know what that number means." },
    { id: 'b_insulin', topic: 'Fear of Insulin', field: 'knowledge',
      keywords: ['insulin', 'shot', 'future', 'worried', 'afraid', 'fear'],
      response: "My biggest fear is having to go on insulin. I saw what it did to my dad." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'b_dm', title: 'Diabetes Control & Access Barrier', icon: 'Droplet', color: '0891b2',
      questions: [
        { key: 'b_dm_q1', q: 'How does the unstarted empagliflozin change your interpretation of his A1C?' },
        { key: 'b_dm_q2', q: 'What is the root cause of his elevated BP and A1C?' },
      ] },
  ],
  PLAN_SECTIONS: [
    { id: 'b_p_dm', title: 'Diabetes / Cardiorenal Plan', options: [
      { key: 'b_dm_o1', label: 'Address the cost barrier and find an affordable SGLT2 inhibitor option (assistance program or formulary check)', correct: true },
      { key: 'b_dm_o2', label: 'Escalate to insulin because A1C is 8.8%', correct: false },
      { key: 'b_dm_o3', label: 'Discontinue empagliflozin and add glipizide', correct: false },
    ] },
    { id: 'b_p_htn', title: 'Hypertension Plan', options: [
      { key: 'b_htn_o1', label: 'Reinforce adherence; avoid immediate intensification until stretching behavior resolves', correct: true },
      { key: 'b_htn_o2', label: 'Intensify with amlodipine today', correct: false },
    ] },
  ],
  GUIDING_QUESTIONS: [
    'Why might a medication be active on the chart yet never have been taken?',
    'How does medication stretching impact both diabetes and hypertension?',
  ],
  COUNSELING: [
    { id: 'b_c1', title: 'Addressing Cost', body: [
      "Let's work together to find a version of your medications that you can actually afford.",
      "It's very important to take your blood pressure and diabetes medications every day, not every other day.",
      "If costs are ever an issue, please let us know instead of skipping doses." ] },
  ],
  PRECEPTOR: {
    keyIssues: ['Empagliflozin never started (cost barrier)', 'Medication stretching behavior', 'A1C and BP above goal due to non-adherence'],
    assessment: ['A1C 8.8% and BP 152/94 reflect non-adherence, not treatment failure', 'Cost is the root cause'],
    plan: ['Re-initiate an affordable SGLT2 inhibitor', 'Reinforce daily adherence to current regimen', 'Recheck A1C and BP in 3 months before escalating'],
    pearls: ['Always check fill history against active med list', 'Cost barriers often manifest as "non-adherence"'],
    mistakes: ['Escalating therapy without addressing the underlying adherence/cost barrier', 'Prescribing insulin prematurely'],
    followupQuestions: ['How can pharmacists improve long-term medication access?'],
    checklist: ['Identified unstarted empagliflozin', 'Uncovered medication stretching', 'Addressed affordability', 'Deferred premature intensification'],
  },
})

const jamesWed = makeCase({
  id: 'james-wed',
  PATIENT: jamesTue.PATIENT,
  ENCOUNTER: {
    day: 'Wednesday', type: '3-Month Follow-Up', difficulty: 'Intermediate', difficultyTone: 'teal',
    chiefConcern: "Things are definitely better, but medications are still expensive.",
    snapshotSummary: 'James returns for a 3-month follow-up. Empagliflozin was initiated successfully and adherence improved, but he still worries about cost.',
    diseaseStates: ['Type 2 Diabetes', 'Hypertension'],
    learningObjectives: ['Evaluate response to therapy', 'Assess sustainability of affordability interventions', 'Identify persistent barriers'],
  },
  VITALS: { bp: '138/86', bpRepeat: '136/84', hr: '78', rr: '16', temp: '98.2°F', weight: '98.5 kg', height: "5'10\"", bmi: '31.1',
    flags: { bp: 'warn', bpRepeat: 'warn' } },
  LABS: [
    { label: 'A1C', value: '7.9', unit: '%', flag: 'warn', note: 'Improved from 8.8%' },
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.02', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '83', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'UACR', value: '20', unit: 'mg/g', flag: 'normal' },
    { label: 'LDL-C', value: '84', unit: 'mg/dL', flag: 'normal' },
    { label: 'HDL-C', value: '43', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '200', unit: 'mg/dL', flag: 'warn' },
  ],
  ALERTS: [{ level: 'info', text: 'Adherence improved; empagliflozin now being taken consistently. A1C and BP improved but above goal.' }],
  PROBLEMS: jamesTue.PROBLEMS,
  MEDICATIONS: jamesTue.MEDICATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Taking empagliflozin. No longer stretching medications. Reports mild polyuria.' }],
  INTERVIEW_FIELDS: [
    { key: 'cost', label: 'Cost sustainability', placeholder: 'Can he still afford everything?' },
    { key: 'adherence', label: 'Adherence updates', placeholder: 'Any missed doses?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'bw_cost', topic: 'Affordability Anxiety', field: 'cost', keywords: ['cost', 'afford', 'worry', 'insurance', 'future'],
      response: "Right now I can afford it, but I worry about what happens if my insurance changes again. I'd hate to have to stop something that's helping." },
    { id: 'bw_adh', topic: 'Adherence Improvement', field: 'adherence', keywords: ['miss', 'adherence', 'every day'],
      response: "I'm doing much better than before, but I still miss a dose every now and then. Maybe once every couple weeks." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'bw_a', title: 'Response & Sustainability', icon: 'Droplet', color: '0891b2', questions: [
      { key: 'bw_q1', q: 'A1C and BP improved but remain above goal. What is the next step?' },
      { key: 'bw_q2', q: 'How do you address his ongoing affordability anxiety?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'bw_p', title: 'Plan', options: [
      { key: 'bw_o1', label: 'Continue current therapy; observe for further response', correct: true },
      { key: 'bw_o2', label: 'Intensify empagliflozin to 25 mg', correct: true },
      { key: 'bw_o3', label: 'Add amlodipine for BP', correct: true },
      { key: 'bw_o4', label: 'Stop empagliflozin', correct: false },
    ] },
  ],
  GUIDING_QUESTIONS: ['When is observation preferred over immediate intensification?'],
  PRECEPTOR: {
    keyIssues: ['Clinical improvement on current therapy', 'Persistent affordability concerns', 'A1C and BP nearing goal'],
    assessment: ['Improvement suggests therapy is working', 'Observation is reasonable before further intensification', 'Must assess long-term access sustainability'],
    plan: ['Continue current regimen', 'Continue affordability monitoring', 'Reassess in 3 months'],
    pearls: ['Improvement and goal attainment are not the same thing'],
    mistakes: ['Premature therapy intensification', 'Assuming access issues are permanently resolved'],
    followupQuestions: ['What evidence suggests the affordability intervention was successful?'],
    checklist: ['Recognized improvement', 'Addressed affordability sustainability', 'Avoided premature escalation'],
  },
})

const jamesThu = makeCase({
  id: 'james-thu',
  PATIENT: jamesTue.PATIENT,
  ENCOUNTER: {
    day: 'Thursday', type: '6-Month Follow-Up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "Things are going pretty well, but I still worry about keeping everything affordable.",
    snapshotSummary: 'Second 3-month follow-up (6 months total). BP is now controlled and A1C is near goal. Patient expresses increased confidence but retains long-term affordability worries.',
    diseaseStates: ['Type 2 Diabetes', 'Hypertension'],
    learningObjectives: ['Evaluate long-term response', 'Develop contingency plans for future access barriers', 'Reinforce chronic disease self-management'],
  },
  VITALS: { bp: '128/80', bpRepeat: '126/78', hr: '74', rr: '16', temp: '98.2°F', weight: '95.5 kg', height: "5'10\"", bmi: '30.2',
    flags: { bp: 'normal', bpRepeat: 'normal' } },
  LABS: [
    { label: 'A1C', value: '7.1', unit: '%', flag: 'warn', note: 'Improved from 7.9% and baseline 8.8%' },
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.3', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.00', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '85', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'UACR', value: '16', unit: 'mg/g', flag: 'normal' },
    { label: 'LDL-C', value: '72', unit: 'mg/dL', flag: 'normal' },
  ],
  ALERTS: [{ level: 'info', text: 'Significant longitudinal improvement. BP controlled, A1C near goal. Weight reduced by 5.5 kg.' }],
  PROBLEMS: jamesTue.PROBLEMS,
  MEDICATIONS: jamesTue.MEDICATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Excellent adherence. Walking 5 days/week. Sustained dietary improvements.' }],
  INTERVIEW_FIELDS: [
    { key: 'cost', label: 'Long-term Access', placeholder: 'Insurance or coverage worries?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'bth_cost', topic: 'Fear of Losing Access', field: 'cost', keywords: ['worry', 'insurance', 'future', 'change'],
      response: "Things are okay right now, but I still worry about what happens if my insurance changes again. I'd hate to finally get things under control and then have to stop." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'bth_a', title: 'Long-term Planning', icon: 'CheckCircle', color: '10b981', questions: [
      { key: 'bth_q1', q: 'How do you transition from acute optimization to long-term maintenance?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'bth_p', title: 'Plan', options: [
      { key: 'bth_o1', label: 'Continue current effective therapy', correct: true },
      { key: 'bth_o2', label: 'Develop contingency plan for future insurance changes', correct: true },
      { key: 'bth_o3', label: 'Discontinue empagliflozin because he is near goal', correct: false },
    ] },
  ],
  GUIDING_QUESTIONS: ['How does prior access difficulty inform future contingency planning?'],
  PRECEPTOR: {
    keyIssues: ['BP controlled, A1C near goal', 'Sustained access to medication', 'Ongoing affordability anxiety'],
    assessment: ['Significant longitudinal improvement', 'Current therapy is safe, effective, and well tolerated'],
    plan: ['Continue current therapy', 'Develop long-term affordability plan', 'Address remaining preventive care gaps'],
    pearls: ['Access is a therapeutic intervention', 'Clinical trajectory matters more than isolated values'],
    mistakes: ['Escalating therapy unnecessarily when trajectory is excellent', 'Assuming patient no longer requires follow-up'],
    followupQuestions: ['How should affordability be monitored in future visits?'],
    checklist: ['Recognized BP at goal', 'Reinforced lifestyle changes', 'Addressed long-term affordability concerns'],
  },
})

/* ============================ LINDA MARTINEZ (C) ============================ */
// Phenotype: CKD Stage 3a + Severe Albuminuria + T2DM + HTN + ASCVD (Prior STEMI) + Obesity.
// Tuesday: Initial. Wednesday: 1st Follow-up. Thursday: 2nd Follow-up.

const lindaTue = makeCase({
  id: 'linda-tue',
  PATIENT: { name: 'Linda Martinez', age: 68, sex: 'female', ethnicity: 'Hispanic/Latina', mrn: 'C-892110' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "My doctor told me my kidneys aren't doing as well as they should be, and honestly that's what worries me the most.",
    snapshotSummary: '68-year-old female with T2DM, HTN, CKD Stage 3a with severe albuminuria, and a prior STEMI. Referred for cardiorenal risk reduction prioritization.',
    diseaseStates: ['Chronic Kidney Disease', 'Type 2 Diabetes', 'Hypertension', 'Secondary ASCVD Prevention', 'Obesity'],
    learningObjectives: [
      'Identify CKD stage and albuminuria category',
      'Calculate KDIGO risk classification',
      'Prioritize interventions based on overall clinical benefit',
      'Evaluate cardiorenal risk in a patient with multiple priorities'
    ],
  },
  VITALS: { bp: '142/84', bpRepeat: '140/82', hr: '72', rr: '16', temp: '98.6°F', weight: '96 kg', height: "5'5\"", bmi: '35.2',
    flags: { bp: 'high', bpRepeat: 'high', bmi: 'high' } },
  LABS: [
    { label: 'A1C', value: '8.2', unit: '%', flag: 'high', note: 'Previous 8.0%' },
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.7', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.24', unit: 'mg/dL', flag: 'high' },
    { label: 'eGFR', value: '52', unit: 'mL/min/1.73m²', flag: 'warn', note: 'CKD Stage 3a' },
    { label: 'UACR', value: '452', unit: 'mg/g', flag: 'high', note: 'Severely Increased Albuminuria (A3)' },
    { label: 'LDL-C', value: '92', unit: 'mg/dL', flag: 'warn', note: 'Prior STEMI 3 years ago' },
    { label: 'HDL-C', value: '45', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '194', unit: 'mg/dL', flag: 'warn' },
  ],
  ALERTS: [
    { level: 'high', text: 'UACR 452 mg/g indicating severe albuminuria and high risk for CKD progression.' },
    { level: 'warn', text: 'LDL 92 mg/dL is above secondary prevention target for patient with prior STEMI.' },
  ],
  PROBLEMS: [
    { name: 'Chronic Kidney Disease Stage 3a', detail: 'eGFR 52, UACR 452 (G3aA3)', flag: 'high' },
    { name: 'Secondary ASCVD Prevention', detail: 'Prior STEMI, LDL 92', flag: 'high' },
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 8.2%', flag: 'warn' },
    { name: 'Hypertension', detail: 'BP 142/84', flag: 'warn' },
    { name: 'Obesity', detail: 'BMI 35.2', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'BID', indication: 'T2DM', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'T2DM / cardiorenal', notes: '' },
    { name: 'Semaglutide', dose: '0.5 mg', route: 'SQ', freq: 'weekly', indication: 'T2DM / obesity', notes: '' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / CKD', notes: '' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'ASCVD', notes: '' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'ASCVD', notes: '' },
    { name: 'Aspirin', dose: '81 mg', route: 'PO', freq: 'daily', indication: 'ASCVD', notes: '' },
    { name: 'Omeprazole', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'GERD', notes: '' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Current', flag: 'normal' },
    { name: 'COVID-19', status: 'Current', flag: 'normal' },
    { name: 'PCV', status: 'Received age 65', flag: 'normal' },
    { name: 'Shingrix', status: 'Series complete', flag: 'normal' },
    { name: 'Tdap', status: 'Last received 11 years ago', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Referred for cardiorenal risk reduction. Feels overwhelmed by multiple conditions.' },
    { label: 'Social history', value: 'Retired teacher. Walks occasionally. Rare alcohol use.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Cardiovascular history', value: 'STEMI 3 years ago with PCI and DES placement.', flag: 'warn' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'knowledge', label: 'Understanding of CKD', placeholder: 'Does she understand staging and albuminuria?' },
    { key: 'fears', label: 'Patient Fears', placeholder: 'What worries her most?' },
    { key: 'priorities', label: 'Priorities', placeholder: 'How does she prioritize her health?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'c_ckd', topic: 'Lack of CKD Understanding', field: 'knowledge', keywords: ['stage', 'albuminuria', 'understand', 'kidney'],
      response: "I know they told me I have kidney disease, but I don't really know what Stage 3 means, or what albuminuria is. I thought my blood sugar was the most important thing." },
    { id: 'c_fears', topic: 'Fear of Dialysis & Heart Attack', field: 'fears', keywords: ['fear', 'worry', 'scared', 'dialysis', 'heart attack'],
      response: "If I'm being honest, dialysis is probably what scares me the most. That, and I don't ever want to go through another heart attack." },
    { id: 'c_overwhelmed', topic: 'Feeling Overwhelmed', field: 'priorities', keywords: ['priority', 'focus', 'overwhelm', 'doctors'],
      response: "Sometimes I feel like every doctor tells me something different and I don't know what I should focus on first." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'c_ckd', title: 'Prioritization & Cardiorenal Risk', icon: 'AlertTriangle', color: 'f59e0b', questions: [
      { key: 'c_ckd_q1', q: 'In a patient with multiple uncontrolled comorbidities, what intervention provides the greatest overall risk reduction?' },
      { key: 'c_ckd_q2', q: 'How do you justify prioritizing one disease state over another?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'c_p_ckd', title: 'Prioritized Plan', options: [
      { key: 'c_ckd_o1', label: 'Optimize cardiorenal protection (e.g., increase lisinopril or add finerenone) to address severe albuminuria', correct: true },
      { key: 'c_ckd_o2', label: 'Optimize secondary ASCVD prevention (increase atorvastatin or add ezetimibe)', correct: true },
      { key: 'c_ckd_o3', label: 'Initiate basal insulin to prioritize A1C reduction', correct: false },
      { key: 'c_ckd_o4', label: 'Optimize hypertension management', correct: true },
    ] },
  ],
  GUIDING_QUESTIONS: [
    'How do KDIGO and ADA guidelines guide prioritization for patients with CKD G3aA3?',
    'Why is the highest A1C not always the highest therapeutic priority?'
  ],
  COUNSELING: [
    { id: 'c_c1', title: 'Cardiorenal Protection', body: [
      "Your blood sugar is important, but protecting your kidneys and heart is our top priority right now.",
      "Some of the medications you are on do more than just lower your sugar—they directly protect your kidneys and heart.",
      "We will prioritize the changes that give you the biggest benefit in avoiding another heart attack or dialysis." ] },
  ],
  PRECEPTOR: {
    keyIssues: ['CKD Stage 3a with severe albuminuria (G3aA3)', 'Secondary ASCVD prevention (Prior STEMI)', 'Patient feels overwhelmed by multiple conditions'],
    assessment: ['Albuminuria and ASCVD history drive the highest risk for future events', 'Multiple reasonable interventions exist; justification is key'],
    plan: ['Prioritize cardiorenal risk reduction (lisinopril titration, finerenone, or lipid optimization)', 'Educate patient on cardiorenal protection over pure A1C focus'],
    pearls: ['The highest A1C is not always the highest priority', 'Albuminuria is both a kidney and cardiovascular risk marker'],
    mistakes: ['Treating all abnormalities equally without prioritization', 'Focusing exclusively on A1C and ignoring secondary ASCVD prevention'],
    followupQuestions: ['What intervention would you prioritize first and why?'],
    checklist: ['Staged CKD accurately', 'Identified secondary prevention status', 'Prioritized interventions appropriately', 'Explained rationale for prioritization'],
  },
})

const lindaWed = makeCase({
  id: 'linda-wed',
  PATIENT: lindaTue.PATIENT,
  ENCOUNTER: {
    day: 'Wednesday', type: 'First Follow-Up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "My blood pressure is much better, but I'm still worried about my kidneys.",
    snapshotSummary: 'Follow-up after initial prioritization. Albuminuria and BP improved, but patient remains high-risk (CKD G3aA3 + ASCVD). Determine the next sequential priority.',
    diseaseStates: ['Chronic Kidney Disease', 'Type 2 Diabetes', 'Hypertension', 'Secondary ASCVD Prevention', 'Obesity'],
    learningObjectives: ['Interpret treatment response beyond simple goal attainment', 'Prioritize interventions sequentially', 'Recognize persistent residual risk'],
  },
  VITALS: { bp: '128/78', bpRepeat: '126/76', hr: '70', rr: '16', temp: '98.6°F', weight: '94 kg', height: "5'5\"", bmi: '34.5',
    flags: { bp: 'normal', bpRepeat: 'normal' } },
  LABS: [
    { label: 'A1C', value: '7.9', unit: '%', flag: 'warn', note: 'Improved from 8.2%' },
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.26', unit: 'mg/dL', flag: 'high' },
    { label: 'eGFR', value: '50', unit: 'mL/min/1.73m²', flag: 'warn' },
    { label: 'UACR', value: '330', unit: 'mg/g', flag: 'high', note: 'Improved from 452 mg/g but remains A3' },
    { label: 'LDL-C', value: '86', unit: 'mg/dL', flag: 'warn', note: 'Prior STEMI' },
  ],
  ALERTS: [{ level: 'info', text: 'UACR improved but remains severely increased. BP is now at goal. Identify the next therapeutic priority.' }],
  PROBLEMS: lindaTue.PROBLEMS,
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'HTN / CKD', notes: 'Optimized at last visit' },
    ...lindaTue.MEDICATIONS.filter(m => m.name !== 'Lisinopril')
  ],
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'BP improved. Tolerating increased lisinopril dose without issue. Still highly motivated.' }],
  INTERVIEW_FIELDS: [
    { key: 'understanding', label: 'Understanding of Progress', placeholder: 'Does she know she is improving but still at risk?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'cw_understanding', topic: 'Understanding Progress', field: 'understanding', keywords: ['progress', 'better', 'kidneys', 'risk'],
      response: "I know my numbers are a little better, which is great, but I know I'm still at high risk. What should we focus on next?" },
  ],
  ASSESSMENT_CARDS: [
    { id: 'cw_priority', title: 'Sequential Prioritization', icon: 'List', color: '6366f1', questions: [
      { key: 'cw_q1', q: 'Albuminuria improved but remains >300. Would you intensify CKD therapy or address ASCVD/LDL risk next?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'cw_p', title: 'Next Priority', options: [
      { key: 'cw_o1', label: 'Optimize secondary ASCVD prevention (increase atorvastatin or add ezetimibe)', correct: true },
      { key: 'cw_o2', label: 'Initiate finerenone for persistent A3 albuminuria', correct: true },
      { key: 'cw_o3', label: 'Increase semaglutide for further weight/A1C benefit', correct: true },
      { key: 'cw_o4', label: 'Assume risk has resolved because UACR improved', correct: false },
    ] },
  ],
  GUIDING_QUESTIONS: ['How do you choose between finerenone and lipid optimization at this stage?'],
  PRECEPTOR: {
    keyIssues: ['Improvement in UACR and BP', 'Persistent A3 albuminuria', 'Residual ASCVD risk (LDL 86)'],
    assessment: ['Improvement is meaningful but risk remains elevated', 'Secondary prevention patients require sequential intervention prioritization'],
    plan: ['Identify next major therapeutic target (lipids, finerenone, or GLP-1 titration)'],
    pearls: ['Risk reduction and risk elimination are not the same thing', 'Patients with CKD and ASCVD frequently require sequential prioritization'],
    mistakes: ['Assuming improvement means the problem is solved', 'Missing residual ASCVD risk'],
    followupQuestions: ['What is the next highest-priority intervention?'],
    checklist: ['Recognized albuminuria improvement', 'Recognized BP goal attainment', 'Identified persistent residual risk', 'Selected appropriate next intervention'],
  },
})

const lindaThu = makeCase({
  id: 'linda-thu',
  PATIENT: lindaTue.PATIENT,
  ENCOUNTER: {
    day: 'Thursday', type: 'Final Follow-Up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "I finally feel like I have a handle on all of this.",
    snapshotSummary: 'Final follow-up. Patient has received comprehensive cardiorenal optimization. Focus on transition of care and long-term maintenance.',
    diseaseStates: ['Chronic Kidney Disease', 'Type 2 Diabetes', 'Hypertension', 'Secondary ASCVD Prevention', 'Obesity'],
    learningObjectives: ['Develop long-term comprehensive care plan', 'Ensure safe transition of care', 'Summarize cumulative interventions'],
  },
  VITALS: { bp: '124/76', bpRepeat: '122/74', hr: '68', rr: '16', temp: '98.6°F', weight: '92 kg', height: "5'5\"", bmi: '33.8',
    flags: { bp: 'normal', bpRepeat: 'normal' } },
  LABS: [
    { label: 'A1C', value: '7.6', unit: '%', flag: 'warn', note: 'Trending down appropriately' },
    { label: 'Na', value: '140', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.7', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.28', unit: 'mg/dL', flag: 'high' },
    { label: 'eGFR', value: '49', unit: 'mL/min/1.73m²', flag: 'warn' },
    { label: 'UACR', value: '210', unit: 'mg/g', flag: 'warn', note: 'Improved to A2 albuminuria' },
    { label: 'LDL-C', value: '64', unit: 'mg/dL', flag: 'normal', note: 'At goal for secondary prevention' },
  ],
  ALERTS: [{ level: 'info', text: 'Significant cumulative improvement. UACR reduced to A2 category. BP and LDL at goal.' }],
  PROBLEMS: lindaTue.PROBLEMS,
  MEDICATIONS: [
    { name: 'Ezetimibe', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'ASCVD', notes: 'Added at last visit' },
    ...lindaWed.MEDICATIONS
  ],
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Feels much more confident. Understands her conditions and medication purposes.' }],
  INTERVIEW_FIELDS: [
    { key: 'confidence', label: 'Self-Management Confidence', placeholder: 'How does she feel about her regimen now?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'cth_conf', topic: 'Increased Confidence', field: 'confidence', keywords: ['confident', 'handle', 'understand', 'better'],
      response: "I feel so much better now. I finally understand why I'm taking all these pills and what we're trying to prevent." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'cth_maint', title: 'Long-term Maintenance', icon: 'CheckCircle', color: '10b981', questions: [
      { key: 'cth_q1', q: 'How do you ensure these complex interventions are maintained long-term?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'cth_p', title: 'Transition Plan', options: [
      { key: 'cth_o1', label: 'Summarize comprehensive care plan and provide written instructions', correct: true },
      { key: 'cth_o2', label: 'Coordinate ongoing labs (K, SCr) with PCP', correct: true },
      { key: 'cth_o3', label: 'Discontinue medications because she is doing well', correct: false },
    ] },
  ],
  GUIDING_QUESTIONS: ['What information is critical during a transition of care handoff?'],
  PRECEPTOR: {
    keyIssues: ['Cumulative success of sequential interventions', 'Need for long-term monitoring plan', 'Safe transition of care'],
    assessment: ['Patient achieved major risk reduction across multiple domains', 'Regimen is complex and requires clear documentation for PCP'],
    plan: ['Continue all optimized therapies', 'Provide clear handoff documentation', 'Schedule routine lab monitoring'],
    pearls: ['A successful ambulatory care intervention must be successfully handed back to primary care'],
    mistakes: ['Failing to provide clear follow-up instructions', 'Assuming complex regimens will automatically be sustained without support'],
    followupQuestions: ['How do you summarize a 6-month intervention series for a busy PCP?'],
    checklist: ['Recognized cumulative improvement', 'Developed comprehensive maintenance plan', 'Ensured safe transition of care'],
  },
})

export const casesByDay = {
  Tuesday: [jamesTue, lindaTue],
  Wednesday: [jamesWed, lindaWed],
  Thursday: [jamesThu, lindaThu],
}

// Flat array expected by cases.js CASES registry
export const BC_CASES = [jamesTue, jamesWed, jamesThu, lindaTue, lindaWed, lindaThu]

// Grading rubrics keyed by case id — merged into GRADING_RUBRICS in cases.js
export const BC_RUBRICS = {
  'james-tue': {
    subjective: [
      { id: 'b_s_cost', label: 'Cost barrier for empagliflozin', keywords: ['cost', 'afford', 'expensive', 'pay', 'money', 'fixed income', 'copay'], tip: 'He never filled empagliflozin because of cost — the key hidden driver.' },
      { id: 'b_s_stretch', label: 'Medication stretching (every other day)', keywords: ['stretch', 'every other day', 'skip', 'alternate', 'save', 'last longer'], tip: 'He stretches his medications by taking every other day to make them last.' },
      { id: 'b_s_delay', label: 'Delayed refills pending pension check', keywords: ['refill', 'delay', 'pension', 'wait', 'pick up'], tip: 'He waits until his pension check arrives before refilling medications.' },
      { id: 'b_s_a1c_know', label: 'Limited A1C understanding', keywords: ['understand', 'a1c', 'number', 'mean', 'know'], tip: 'He does not understand what his A1C number means.' },
      { id: 'b_s_insulin_fear', label: 'Fear of insulin', keywords: ['insulin', 'fear', 'afraid', 'scared', 'shot', 'dad'], tip: 'He fears insulin based on his father\'s experience.' },
    ],
    objective: [
      { id: 'b_o_empa', label: 'Empagliflozin — no fills in 4 months', keywords: ['empagliflozin', 'no fill', 'no claims', 'never filled', 'jardiance'], tip: 'Empagliflozin is active on the chart but has no fill history in 4 months.' },
      { id: 'b_o_a1c', label: 'A1C 8.8% (prior 8.3%)', keywords: ['8 8', 'a1c', 'worsening', '8 3'], tip: 'Report A1C 8.8%, noting worsening from prior 8.3%.' },
      { id: 'b_o_bp', label: 'BP 152/94 (repeat 150/92)', keywords: ['152', '150', 'blood pressure', ' bp '], tip: 'Report BP 152/94, repeat 150/92.' },
    ],
    assessment: [
      { id: 'b_a_root', label: 'Root cause: non-adherence/cost — not treatment failure', keywords: ['adherence', 'cost', 'root cause', 'not failure', 'never filled'], tip: 'The root cause is cost-driven non-adherence, not treatment failure.' },
      { id: 'b_a_access', label: 'Empagliflozin never started due to cost', keywords: ['never started', 'cost', 'empagliflozin', 'barrier', 'access'], tip: 'Identify empagliflozin as unstarted due to affordability barrier.' },
      { id: 'b_a_no_insulin', label: 'No premature insulin escalation', keywords: ['not insulin', 'avoid insulin', 'premature', 'defer insulin'], tip: 'Escalating to insulin prematurely is a critical error here.' },
    ],
    plan: [
      { id: 'b_p_access', label: 'Address affordability / assistance program', keywords: ['assistance', 'program', 'formulary', 'affordable', 'manufacturer', 'coupon'], tip: 'Address affordability — patient assistance program or formulary alternative.' },
      { id: 'b_p_adhere', label: 'Reinforce daily adherence / stop stretching', keywords: ['daily', 'every day', 'reinforce', 'stop stretching', 'adherence'], tip: 'Reinforce taking medications every day; stop stretching behavior.' },
      { id: 'b_p_recheck', label: 'Recheck A1C and BP in 3 months', keywords: ['3 month', 'recheck', 'follow up', 'a1c', 'blood pressure'], tip: 'Recheck A1C and BP in 3 months before considering escalation.' },
    ],
    avoid: [
      { id: 'b_x_insulin', label: 'Escalating to insulin without addressing adherence', keywords: ['start insulin', 'basal insulin', 'escalate to insulin'], tip: 'Do not escalate to insulin without addressing the cost/adherence root cause.' },
      { id: 'b_x_escalate', label: 'Intensifying therapy without checking adherence', keywords: ['intensif', 'escalate', 'before checking adherence', 'add another'], tip: 'Do not intensify therapy before evaluating the real barrier.' },
    ],
  },
  'james-wed': {
    subjective: [
      { id: 'bw_s_afford', label: 'Ongoing affordability anxiety', keywords: ['worry', 'insurance', 'change', 'future', 'afford'], tip: 'He still worries about losing access if insurance changes.' },
    ],
    objective: [
      { id: 'bw_o_a1c', label: 'A1C 7.9% (improved from 8.8%)', keywords: ['7 9', 'improv', 'a1c'], tip: 'A1C improved from 8.8% to 7.9%.' },
      { id: 'bw_o_bp', label: 'BP 138/86 (improved)', keywords: ['138', '136', 'blood pressure', 'improv'], tip: 'BP improved to 138/86.' },
    ],
    assessment: [
      { id: 'bw_a_progress', label: 'Improvement on therapy — above goal but trending', keywords: ['improv', 'not goal', 'trending', 'progress', 'partial'], tip: 'Improvement noted; still above goal — requires further monitoring.' },
      { id: 'bw_a_sustain', label: 'Access sustainability must be reassessed', keywords: ['access', 'sustain', 'afford', 'long term', 'insurance'], tip: 'Affordability interventions must be monitored for long-term sustainability.' },
    ],
    plan: [
      { id: 'bw_p_continue', label: 'Continue therapy; avoid premature escalation', keywords: ['continue', 'observe', 'monitor', 'no escalation', 'not yet'], tip: 'Continue current effective therapy before escalating further.' },
    ],
    avoid: [],
  },
  'james-thu': {
    subjective: [
      { id: 'bth_s_access', label: 'Residual access anxiety acknowledged', keywords: ['worry', 'insurance', 'change', 'future', 'access'], tip: 'Acknowledge residual access anxiety even when things are going well.' },
    ],
    objective: [
      { id: 'bth_o_bp', label: 'BP 128/80 (at goal)', keywords: ['128', '126', 'goal', 'blood pressure'], tip: 'BP at goal (128/80).' },
      { id: 'bth_o_a1c', label: 'A1C 7.1% (near goal)', keywords: ['7 1', 'a1c', 'near goal'], tip: 'A1C 7.1% — near goal and significantly improved from baseline 8.8%.' },
    ],
    assessment: [
      { id: 'bth_a_traj', label: 'Trajectory is excellent; therapy is working', keywords: ['trajectory', 'excellent', 'effective', 'working', 'success'], tip: 'Recognize that the clinical trajectory (not just single values) is excellent.' },
    ],
    plan: [
      { id: 'bth_p_continue', label: 'Continue all medications', keywords: ['continue', 'maintain', 'current therapy'], tip: 'Continue current effective therapy.' },
      { id: 'bth_p_contingency', label: 'Develop contingency plan for future access', keywords: ['contingency', 'plan', 'if insurance', 'future access', 'backup'], tip: 'Develop a contingency plan for future insurance/access changes.' },
    ],
    avoid: [
      { id: 'bth_x_stop', label: 'Stopping empagliflozin because near goal', keywords: ['stop', 'discontinue', 'near goal', 'done'], tip: 'Do not stop empagliflozin simply because A1C or BP is near goal.' },
    ],
  },
  'linda-tue': {
    subjective: [
      { id: 'c_s_ckd', label: 'Patient does not understand CKD staging', keywords: ['stage', 'understand', 'know', 'kidney', 'albumin'], tip: 'She does not understand CKD staging or what albuminuria means.' },
      { id: 'c_s_fears', label: 'Fear of dialysis and repeat MI', keywords: ['dialysis', 'fear', 'afraid', 'heart attack', 'worry'], tip: 'Her top fears: dialysis and another heart attack.' },
      { id: 'c_s_overwhelm', label: 'Feels overwhelmed with multiple conditions', keywords: ['overwhelm', 'different doctors', 'focus', 'priority'], tip: 'She feels overwhelmed with multiple conditions and conflicting guidance.' },
    ],
    objective: [
      { id: 'c_o_uacr', label: 'UACR 452 mg/g (severely increased, A3)', keywords: ['452', 'uacr', 'severe', ' a3', 'severely'], tip: 'UACR 452 = severely increased albuminuria (A3 category).' },
      { id: 'c_o_egfr', label: 'eGFR 52 (CKD Stage 3a)', keywords: ['52', 'egfr', 'stage 3', '3a', 'ckd'], tip: 'eGFR 52 = CKD Stage 3a.' },
      { id: 'c_o_stemi', label: 'Prior STEMI (secondary prevention)', keywords: ['stemi', 'prior', 'mi', 'secondary prevention', 'pci', 'des'], tip: 'Prior STEMI establishes secondary ASCVD prevention status.' },
    ],
    assessment: [
      { id: 'c_a_kdigo', label: 'KDIGO risk: G3aA3 = very high risk', keywords: ['g3a', 'a3', 'kdigo', 'very high', 'risk'], tip: 'Stage accurately: G3aA3 = very high CKD progression risk per KDIGO.' },
      { id: 'c_a_prioritize', label: 'Cardiorenal protection is the top priority (not A1C)', keywords: ['priorit', 'cardiorenal', 'not a1c', 'kidney', 'heart'], tip: 'The highest A1C is not always the highest priority — cardiorenal risk leads.' },
      { id: 'c_a_ascvd', label: 'Secondary ASCVD prevention (prior STEMI)', keywords: ['secondary', 'ascvd', 'stemi', 'prevention', 'ldl'], tip: 'Secondary ASCVD prevention status changes lipid targets.' },
    ],
    plan: [
      { id: 'c_p_lisinopril', label: 'Optimize lisinopril for cardiorenal protection', keywords: ['lisinopril', 'ace', 'titrat', 'increase', 'optimize'], tip: 'Titrate lisinopril to maximum tolerated dose for cardiorenal protection.' },
      { id: 'c_p_educate', label: 'Educate on CKD staging and cardiorenal priorities', keywords: ['educat', 'explain', 'kidney', 'stage', 'priorit', 'protect'], tip: 'Educate on CKD staging and why cardiorenal protection leads over A1C.' },
    ],
    avoid: [
      { id: 'c_x_a1c', label: 'Treating A1C as the top priority', keywords: ['a1c first', 'a1c is highest', 'focus on a1c', 'insulin because a1c'], tip: 'Do not prioritize A1C over cardiorenal protection in this patient.' },
    ],
  },
  'linda-wed': {
    subjective: [
      { id: 'cw_s_progress', label: 'Understands progress but knows risk remains', keywords: ['better', 'still at risk', 'progress', 'next', 'what now'], tip: 'She understands she is improving but knows she remains at high risk.' },
    ],
    objective: [
      { id: 'cw_o_uacr', label: 'UACR 330 (improved from 452 but still A3)', keywords: ['330', 'uacr', 'still a3', 'improv'], tip: 'UACR improved to 330 but remains in the severely increased (A3) category.' },
      { id: 'cw_o_bp', label: 'BP 128/78 (at goal)', keywords: ['128', '126', 'blood pressure', 'goal'], tip: 'BP now at goal.' },
      { id: 'cw_o_ldl', label: 'LDL 86 (above secondary prevention target)', keywords: ['86', 'ldl', 'above', 'secondary', 'target'], tip: 'LDL 86 is above the typical secondary prevention target of <70 mg/dL.' },
    ],
    assessment: [
      { id: 'cw_a_residual', label: 'Residual risk remains despite BP improvement', keywords: ['residual', 'risk', 'remain', 'still', 'not resolved'], tip: 'Improvement in one metric does not eliminate overall residual risk.' },
      { id: 'cw_a_next', label: 'Identify the next sequential priority', keywords: ['next', 'priorit', 'sequential', 'finerenone', 'lipid', 'ldl'], tip: 'Must choose the next highest-yield intervention among finerenone, lipids, GLP-1.' },
    ],
    plan: [
      { id: 'cw_p_lipid', label: 'Optimize lipids for secondary ASCVD prevention', keywords: ['atorvastatin', 'ezetimibe', 'ldl', 'lipid', 'ascvd', 'secondary'], tip: 'Optimize lipids (increase statin intensity or add ezetimibe) for secondary prevention.' },
      { id: 'cw_p_finerenone', label: 'Consider finerenone for persistent A3 albuminuria', keywords: ['finerenone', 'kerendia', 'mra', 'mineralocorticoid', 'persistent albumin'], tip: 'Finerenone is indicated for persistent A3 albuminuria with T2DM.' },
    ],
    avoid: [
      { id: 'cw_x_resolved', label: 'Assuming albuminuria/risk is resolved', keywords: ['resolved', 'fixed', 'done', 'no more albumin', 'discharg'], tip: 'UACR improved but remains A3 — risk is NOT resolved.' },
    ],
  },
  'linda-thu': {
    subjective: [
      { id: 'cth_s_confidence', label: 'Patient increased confidence and understanding', keywords: ['confident', 'understand', 'handle', 'better', 'know why'], tip: 'Her increased confidence and disease understanding is a therapeutic win.' },
    ],
    objective: [
      { id: 'cth_o_uacr', label: 'UACR 210 (improved to A2 category)', keywords: ['210', 'uacr', ' a2 ', 'improv'], tip: 'UACR improved to 210 — now in moderately increased (A2) category.' },
      { id: 'cth_o_ldl', label: 'LDL 64 (at secondary prevention goal)', keywords: ['64', 'ldl', 'goal', 'secondary', 'at goal'], tip: 'LDL 64 — at goal for secondary ASCVD prevention.' },
    ],
    assessment: [
      { id: 'cth_a_cumulative', label: 'Cumulative improvement across all domains', keywords: ['cumulative', 'all domains', 'overall', 'across', 'improved'], tip: 'Recognize cumulative improvement across BP, UACR, LDL, and weight.' },
      { id: 'cth_a_transition', label: 'Plan for transition of care', keywords: ['transition', 'handoff', 'pcp', 'primary care', 'handover'], tip: 'Develop a clear plan for transition of care back to primary care.' },
    ],
    plan: [
      { id: 'cth_p_handoff', label: 'Provide transition of care documentation', keywords: ['handoff', 'document', 'summary', 'pcp', 'transition'], tip: 'Provide clear handoff documentation for the PCP.' },
      { id: 'cth_p_monitor', label: 'Schedule ongoing K/SCr monitoring', keywords: ['potassium', 'creatinine', 'k', 'scr', 'monitor', 'lab'], tip: 'Schedule routine K and SCr monitoring given finerenone or ACEi use.' },
    ],
    avoid: [
      { id: 'cth_x_stop', label: 'Discontinuing medications because doing well', keywords: ['stop', 'discontinue', 'no longer need', 'doing well so'], tip: 'Do not discontinue complex cardiorenal medications because the patient is doing well.' },
    ],
  },
}
