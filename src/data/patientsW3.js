import { makeCase } from './caseFactory.js'

// WEEK 3 — Asthma + COPD
// Patients: Sarah Thompson (A) - Asthma, Bob Jenkins (B) - COPD, Maria Thompson (C) - ACO
// Case ids are namespaced 'w3-<patient>-<day>'

/* ============================ SARAH THOMPSON (A) ============================ */
// Moderate persistent asthma. Overusing albuterol, not taking ICS daily.

const sarahTue = makeCase({
  id: 'w3-sarah_t-tue',
  PATIENT: { name: 'Sarah Thompson', age: 34, sex: 'female', ethnicity: 'White', mrn: 'W3-10022' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Foundational', difficultyTone: 'teal',
    chiefConcern: "I've been needing my rescue inhaler a lot more lately.",
    snapshotSummary: 'Sarah is a 34-year-old with asthma who reports needing her albuterol frequently. She was prescribed an ICS but the chart lacks detail on her adherence and technique.',
    diseaseStates: ['Asthma', 'Allergic Rhinitis'],
    learningObjectives: [
      'Assess asthma symptom control using rule of 2s / GINA criteria',
      'Identify rescue inhaler overuse as a marker of uncontrolled inflammation',
      'Recognize ICS nonadherence as a common cause of poor control',
    ],
  },
  VITALS: { bp: '118/76', bpRepeat: '116/74', hr: '88', rr: '18', temp: '98.6°F', weight: '65 kg', height: "5'5\"", bmi: '23.9', flags: {} },
  LABS: [],
  ALERTS: [
    { level: 'warn', text: 'Patient reports increased albuterol use — assess for uncontrolled asthma.' },
  ],
  PROBLEMS: [
    { name: 'Moderate persistent asthma', detail: 'Increased symptoms', flag: 'warn' },
    { name: 'Allergic rhinitis', detail: 'On cetirizine and fluticasone nasal spray', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Albuterol HFA', dose: '2 puffs', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'Asthma rescue', notes: 'Using frequently' },
    { name: 'Budesonide HFA', dose: '180 mcg', route: 'Inhaled', freq: 'BID', indication: 'Asthma maintenance', notes: 'Active prescription' },
    { name: 'Cetirizine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
    { name: 'Fluticasone nasal spray', dose: '1 spray/nostril', route: 'Intranasal', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Referred by PCP for asthma management due to increased albuterol refill requests.' },
    { label: 'Social history', value: 'Teacher. Non-smoker. Lives with husband and two kids.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1 78% predicted, FEV1/FVC 75%', flag: 'normal' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'albuterol', label: 'Rescue Inhaler Use', placeholder: 'How often does she use albuterol?' },
    { key: 'budesonide', label: 'Controller Adherence', placeholder: 'Is she taking the budesonide?' },
    { key: 'nighttime', label: 'Nighttime Symptoms', placeholder: 'Waking up at night?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w3a_albuterol', topic: 'Albuterol Overuse', field: 'albuterol', keywords: ['rescue', 'albuterol', 'how often', 'frequent'], response: "I've been using my albuterol about 4 or 5 times a week lately. It helps me breathe better." },
    { id: 'w3a_bud', topic: 'ICS Nonadherence', field: 'budesonide', keywords: ['budesonide', 'daily', 'controller', 'steroid'], response: "I only use the budesonide when I feel like a cold is coming on. I didn't think I needed it every day if my asthma wasn't bothering me." },
    { id: 'w3a_night', topic: 'Nighttime symptoms', field: 'nighttime', keywords: ['night', 'sleep', 'wake', 'waking'], response: "I wake up coughing maybe once a week. I usually take a puff of albuterol and go back to sleep." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3a_a1', title: 'Asthma Control Assessment', icon: 'Lungs', color: '0891b2',
      questions: [
        { key: 'q1', q: 'Based on her albuterol use and nighttime awakenings, is her asthma controlled?' },
        { key: 'q2', q: 'What is the root cause of her poor control?' },
      ] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3a_p1', title: 'Asthma Action Plan', options: [
      { key: 'o1', label: 'Educate on controller vs. reliever mechanism and ensure daily adherence to ICS', correct: true },
      { key: 'o2', label: 'Increase albuterol dose to q2-4h PRN', correct: false },
      { key: 'o3', label: 'Switch budesonide to an oral corticosteroid', correct: false },
    ] },
  ],
})

const sarahWed = makeCase({
  id: 'w3-sarah_t-wed',
  PATIENT: { ...sarahTue.PATIENT },
  ENCOUNTER: {
    day: 'Wednesday', type: '1-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I'm using the daily inhaler, but I still need my rescue inhaler when I exercise.",
    snapshotSummary: 'Follow-up visit. Sarah is now taking her ICS daily, but still has symptoms with activity. Time to step up therapy.',
    diseaseStates: ['Asthma'],
    learningObjectives: ['Escalate therapy per GINA guidelines (e.g., add LABA or switch to SMART therapy)'],
  },
  VITALS: { ...sarahTue.VITALS },
  LABS: [],
  ALERTS: [],
  PROBLEMS: [{ name: 'Asthma', detail: 'Partly controlled', flag: 'warn' }],
  MEDICATIONS: sarahTue.MEDICATIONS,
  IMMUNIZATIONS: sarahTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Patient reports improved daily adherence to ICS.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'symptoms', label: 'Current Symptoms', placeholder: 'How are the symptoms now?' },
    { key: 'adherence', label: 'ICS Adherence', placeholder: 'Still taking the daily inhaler?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w3a2_sym', topic: 'Exercise symptoms', field: 'symptoms', keywords: ['symptoms', 'breathe', 'exercise', 'run'], response: "I'm much better during the day, but when I try to run or play with the kids, I get tight and need the rescue inhaler." },
    { id: 'w3a2_adh', topic: 'Adherence', field: 'adherence', keywords: ['budesonide', 'every day', 'daily', 'take'], response: "Yes, I've been taking the budesonide every morning and night like you said." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3a2_a1', title: 'Therapy Escalation', icon: 'ArrowUpCircle', color: '13314f', questions: [{ key: 'q1', q: 'Since she is adherent but still symptomatic, what is the appropriate step-up therapy?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3a2_p1', title: 'Step-up Plan', options: [
      { key: 'o1', label: 'Change to ICS-LABA combination or SMART therapy', correct: true },
      { key: 'o2', label: 'Add tiotropium (LAMA)', correct: false },
      { key: 'o3', label: 'Double the albuterol dose before exercise', correct: false },
    ] },
  ],
})

const sarahThu = makeCase({
  id: 'w3-sarah_t-thu',
  PATIENT: { ...sarahTue.PATIENT },
  ENCOUNTER: {
    day: 'Thursday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I switched to the Symbicort, and things are great.",
    snapshotSummary: 'Sarah was switched to SMART therapy (Symbicort). Asthma is now well controlled.',
    diseaseStates: ['Asthma'],
    learningObjectives: ['Assess asthma control on SMART therapy', 'Reinforce maintenance and reliever concept'],
  },
  VITALS: { ...sarahTue.VITALS },
  LABS: [],
  ALERTS: [],
  PROBLEMS: [{ name: 'Asthma', detail: 'Well controlled on SMART', flag: 'normal' }],
  MEDICATIONS: [
    { name: 'Budesonide/Formoterol (Symbicort)', dose: '160/4.5 mcg', route: 'Inhaled', freq: 'BID and PRN', indication: 'Asthma SMART therapy', notes: '' },
  ],
  IMMUNIZATIONS: sarahTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Follow-up after transitioning to SMART therapy.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'control', label: 'Asthma Control', placeholder: 'Any symptoms or rescue use?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w3a3_ctrl', topic: 'Controlled', field: 'control', keywords: ['symptoms', 'rescue', 'use', 'feel'], response: "I use the Symbicort twice a day. I haven't needed to take any extra puffs in weeks, even when I exercise." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3a3_a1', title: 'SMART Therapy Maintenance', icon: 'CheckCircle', color: '10b981', questions: [{ key: 'q1', q: 'Is her asthma well controlled on the current regimen?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3a3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Continue current SMART regimen and praise adherence', correct: true },
      { key: 'o2', label: 'Step down therapy since she has no symptoms', correct: false },
    ] },
  ],
})

/* ============================ BOB JENKINS (B) ============================ */
// COPD + HTN + HLD. Nonadherent due to cost/technique, using albuterol only.

const bobTue = makeCase({
  id: 'w3-bob_j-tue',
  PATIENT: { name: 'Robert "Bob" Jenkins', age: 67, sex: 'male', ethnicity: 'White', mrn: 'W3-30044' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I get winded walking to the mailbox.",
    snapshotSummary: 'Bob has COPD but is only taking lisinopril and atorvastatin. He has an albuterol inhaler. A maintenance COPD inhaler was prescribed but he is not on it.',
    diseaseStates: ['COPD', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Identify missing maintenance therapy in symptomatic COPD', 'Assess cost and technique barriers'],
  },
  VITALS: { bp: '132/82', bpRepeat: '130/80', hr: '76', rr: '20', temp: '98.4°F', weight: '80 kg', height: "5'9\"", bmi: '26.0', flags: {} },
  LABS: [{ label: 'Eosinophils', value: '150', unit: 'cells/µL', flag: 'normal' }],
  ALERTS: [{ level: 'warn', text: 'Patient is highly symptomatic (mMRC 3) but not on a maintenance long-acting bronchodilator.' }],
  PROBLEMS: [
    { name: 'COPD', detail: 'GOLD Group E', flag: 'high' },
    { name: 'Hypertension', detail: 'Controlled', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'Controlled', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Albuterol HFA', dose: '2 puffs', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'COPD rescue', notes: 'Frequent use' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Complains of shortness of breath. History of 1 COPD exacerbation treated with prednisone 6 months ago.' }, { label: 'Social', value: 'Former smoker (45 pack-years).' }],
  OBJECTIVE_EXTRA: [{ label: 'Spirometry', value: 'FEV1/FVC 0.62, FEV1 55% predicted', flag: 'warn' }],
  INTERVIEW_FIELDS: [
    { key: 'maintenance', label: 'Maintenance Inhaler', placeholder: 'Was he prescribed a daily inhaler?' },
    { key: 'cost', label: 'Cost/Affordability', placeholder: 'Can he afford his meds?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w3b_maint', topic: 'Maintenance therapy', field: 'maintenance', keywords: ['daily', 'inhaler', 'prescribed', 'tiotropium', 'spiriva', 'laba', 'lama'], response: "The doctor gave me a script for some combination inhaler a while back, but when I went to the pharmacy, it was $300. I left it there. I just use the albuterol." },
    { id: 'w3b_cost', topic: 'Cost barrier', field: 'cost', keywords: ['cost', 'afford', 'expensive', 'money', 'pay'], response: "Yeah, I can't afford hundreds of dollars for an inhaler on a fixed income. The albuterol is cheap, so I stick with that." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3b_a1', title: 'COPD Maintenance', icon: 'Lungs', color: '13314f', questions: [{ key: 'q1', q: 'What is the appropriate initial therapy for this highly symptomatic patient per GOLD?' }, { key: 'q2', q: 'How does cost affect the plan?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b_p1', title: 'Therapy Plan', options: [
      { key: 'o1', label: 'Find an affordable LABA/LAMA combination or single agent and teach proper inhaler technique', correct: true },
      { key: 'o2', label: 'Prescribe triple therapy (LABA/LAMA/ICS)', correct: false },
      { key: 'o3', label: 'Prescribe daily oral prednisone', correct: false },
    ] },
  ],
})

const bobWed = makeCase({
  id: 'w3-bob_j-wed',
  PATIENT: { ...bobTue.PATIENT },
  ENCOUNTER: {
    day: 'Wednesday', type: '1-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "The new inhaler is cheaper, but I don't feel any different.",
    snapshotSummary: 'Bob was started on a LAMA (Tiotropium HandiHaler) that was affordable, but he feels no improvement.',
    diseaseStates: ['COPD'],
    learningObjectives: ['Assess inhaler technique as a cause of treatment failure'],
  },
  VITALS: { ...bobTue.VITALS },
  LABS: bobTue.LABS,
  ALERTS: [],
  PROBLEMS: [{ name: 'COPD', detail: 'Symptomatic despite LAMA', flag: 'warn' }],
  MEDICATIONS: [
    ...bobTue.MEDICATIONS,
    { name: 'Tiotropium (Spiriva HandiHaler)', dose: '18 mcg', route: 'Inhaled', freq: 'daily', indication: 'COPD maintenance', notes: 'Newly started' },
  ],
  IMMUNIZATIONS: bobTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Patient reports no improvement in dyspnea since starting tiotropium.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'technique', label: 'Inhaler Technique', placeholder: 'Ask him to demonstrate how he uses the HandiHaler' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w3b2_tech', topic: 'Inhaler technique', field: 'technique', keywords: ['show', 'demonstrate', 'how', 'use', 'technique', 'capsule'], response: "I put the pill in the device, press the button, and then breathe out into the mouthpiece really hard to blow the medicine into my lungs." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3b2_a1', title: 'Technique Assessment', icon: 'AlertTriangle', color: 'd97706', questions: [{ key: 'q1', q: 'What is wrong with his inhaler technique?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Correct technique: breathe IN deeply and steadily, do not blow into the device', correct: true },
      { key: 'o2', label: 'Switch to a different inhaler immediately', correct: false },
    ] },
  ],
})

const bobThu = makeCase({
  id: 'w3-bob_j-thu',
  PATIENT: { ...bobTue.PATIENT },
  ENCOUNTER: {
    day: 'Thursday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "Breathing is much better since I learned how to use that gadget.",
    snapshotSummary: 'Bob is using his LAMA correctly and his symptoms have improved significantly.',
    diseaseStates: ['COPD'],
    learningObjectives: ['Recognize successful COPD maintenance and avoid unnecessary escalation'],
  },
  VITALS: { ...bobTue.VITALS },
  LABS: bobTue.LABS,
  ALERTS: [],
  PROBLEMS: [{ name: 'COPD', detail: 'Well controlled on LAMA', flag: 'normal' }],
  MEDICATIONS: bobWed.MEDICATIONS,
  IMMUNIZATIONS: bobTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Dyspnea significantly improved. Walking further without stopping.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'symptoms', label: 'Symptom check', placeholder: 'Any exacerbations or rescue use?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w3b3_sym', topic: 'Symptoms', field: 'symptoms', keywords: ['exacerbation', 'rescue', 'albuterol', 'feel', 'breathing'], response: "I hardly touch the albuterol now. I can walk to the mailbox and back without stopping. No flare-ups." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3b3_a1', title: 'Clinical Status', icon: 'CheckCircle', color: '10b981', questions: [{ key: 'q1', q: 'Should therapy be escalated to LABA/LAMA?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Continue LAMA, emphasize adherence and smoking cessation maintenance', correct: true },
      { key: 'o2', label: 'Escalate to LABA/LAMA', correct: false },
    ] },
  ],
})


/* ============================ MARIA THOMPSON (C) ============================ */
// Asthma-COPD Overlap (ACO). Recurrent exacerbations on triple therapy. Eosinophilic.

const mariaTue = makeCase({
  id: 'w3-maria_t-tue',
  PATIENT: { name: 'Maria Thompson', age: 69, sex: 'female', ethnicity: 'Hispanic', mrn: 'W3-99211' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I keep getting these chest infections and flare-ups.",
    snapshotSummary: 'Maria has Asthma-COPD Overlap. She is on LAMA and PRN albuterol, but is having frequent exacerbations. She needs ICS therapy due to her asthma component.',
    diseaseStates: ['Asthma-COPD Overlap', 'Allergic Rhinitis'],
    learningObjectives: ['Recognize ACO phenotype', 'Identify the mandatory role of ICS in patients with an asthma component'],
  },
  VITALS: { bp: '128/80', bpRepeat: '126/78', hr: '72', rr: '18', temp: '98.6°F', weight: '70 kg', height: "5'4\"", bmi: '26.5', flags: {} },
  LABS: [{ label: 'Eosinophils', value: '450', unit: 'cells/µL', flag: 'high', note: 'Elevated (eosinophilic phenotype)' }],
  ALERTS: [{ level: 'high', text: 'Patient has ACO and frequent exacerbations but is NOT on an inhaled corticosteroid.' }],
  PROBLEMS: [
    { name: 'Asthma-COPD Overlap (ACO)', detail: 'Frequent exacerbations (3 in past year)', flag: 'high' },
    { name: 'Allergic rhinitis', detail: 'Stable', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Tiotropium (Spiriva)', dose: '2 inhalations', route: 'Inhaled', freq: 'daily', indication: 'COPD', notes: '' },
    { name: 'Albuterol HFA', dose: '2 puffs', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'Rescue', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'History of asthma since childhood, COPD diagnosed 8 years ago. Reports 3 exacerbations requiring prednisone in the last 12 months.' }, { label: 'Social', value: 'Former smoker (30 pack-years, quit 12y ago).' }],
  OBJECTIVE_EXTRA: [{ label: 'Spirometry', value: 'FEV1/FVC 0.60, FEV1 65% predicted with significant bronchodilator reversibility (+15%, +250mL)', flag: 'warn' }],
  INTERVIEW_FIELDS: [
    { key: 'exacerbations', label: 'Exacerbation History', placeholder: 'Tell me about the flare-ups' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w3c_exac', topic: 'Exacerbations', field: 'exacerbations', keywords: ['flare', 'infection', 'prednisone', 'hospital'], response: "I've had to go to urgent care three times in the last year for steroids and antibiotics. My breathing just gets so tight." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3c_a1', title: 'ACO Management', icon: 'Lungs', color: '7c3aed', questions: [{ key: 'q1', q: 'Why is LAMA monotherapy inappropriate for Maria?' }, { key: 'q2', q: 'How does her eosinophil count guide therapy?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3c_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Escalate to ICS-containing therapy (e.g., ICS/LABA/LAMA triple therapy) due to asthma overlap, high eosinophils, and exacerbations', correct: true },
      { key: 'o2', label: 'Add a second long-acting bronchodilator (LABA) without an ICS', correct: false },
    ] },
  ],
})

const mariaWed = makeCase({
  id: 'w3-maria_t-wed',
  PATIENT: { ...mariaTue.PATIENT },
  ENCOUNTER: {
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I'm using the new triple inhaler every day perfectly, but I still had another flare-up last month.",
    snapshotSummary: 'Maria was escalated to triple therapy (Trelegy). She is perfectly adherent with great technique, but she is still exacerbating. Eosinophils remain high.',
    diseaseStates: ['ACO'],
    learningObjectives: ['Identify biologic candidacy for severe eosinophilic exacerbating disease (MATINEE)'],
  },
  VITALS: { ...mariaTue.VITALS },
  LABS: [{ label: 'Eosinophils', value: '420', unit: 'cells/µL', flag: 'high' }],
  ALERTS: [{ level: 'high', text: 'Continued exacerbations despite optimized triple inhaled therapy.' }],
  PROBLEMS: [{ name: 'ACO', detail: 'Exacerbating on triple therapy', flag: 'high' }],
  MEDICATIONS: [
    { name: 'Fluticasone/Umeclidinium/Vilanterol (Trelegy)', dose: '100/62.5/25 mcg', route: 'Inhaled', freq: 'daily', indication: 'ACO', notes: '' },
    { name: 'Albuterol HFA', dose: '2 puffs', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'Rescue', notes: '' },
  ],
  IMMUNIZATIONS: mariaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'One moderate exacerbation treated with prednisone 4 weeks ago. Adherence and technique confirmed excellent in clinic today.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Adherence / Technique', placeholder: 'Are you sure she is taking it?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w3c2_adh', topic: 'Adherence verified', field: 'adherence', keywords: ['take', 'every day', 'daily', 'miss'], response: "I never miss a dose. I use it every morning exactly like you showed me. I even rinse my mouth after." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3c2_a1', title: 'Biologic Candidacy', icon: 'Microscope', color: '13314f', questions: [{ key: 'q1', q: 'With optimized inhalers, proven adherence, and persistent eosinophilic exacerbations, what is the next step?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3c2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Refer for biologic therapy (anti-IL-5, e.g., mepolizumab) to target eosinophilic inflammation per MATINEE trial evidence', correct: true },
      { key: 'o2', label: 'Switch to a different brand of triple therapy', correct: false },
      { key: 'o3', label: 'Start chronic daily oral prednisone', correct: false },
    ] },
  ],
})

const mariaThu = makeCase({
  id: 'w3-maria_t-thu',
  PATIENT: { ...mariaTue.PATIENT },
  ENCOUNTER: {
    day: 'Thursday', type: '6-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "The injections have changed my life.",
    snapshotSummary: 'Maria was started on mepolizumab. Exacerbations have stopped.',
    diseaseStates: ['ACO'],
    learningObjectives: ['Recognize the impact of targeted biologic therapy in the appropriate phenotype'],
  },
  VITALS: { ...mariaTue.VITALS },
  LABS: [{ label: 'Eosinophils', value: '50', unit: 'cells/µL', flag: 'normal', note: 'Suppressed by biologic therapy' }],
  ALERTS: [],
  PROBLEMS: [{ name: 'ACO', detail: 'Stable on triple therapy + mepolizumab', flag: 'normal' }],
  MEDICATIONS: [
    ...mariaWed.MEDICATIONS,
    { name: 'Mepolizumab', dose: '100 mg', route: 'SQ', freq: 'every 4 weeks', indication: 'Severe eosinophilic asthma/COPD', notes: '' },
  ],
  IMMUNIZATIONS: mariaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Zero exacerbations in the last 6 months since starting mepolizumab.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'update', label: 'Clinical Update', placeholder: 'How has she been feeling?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w3c3_upd', topic: 'Update', field: 'update', keywords: ['feel', 'breathing', 'exacerbation', 'flare'], response: "I haven't had a single flare-up. I'm breathing better, sleeping better, and I feel like I have my life back." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3c3_a1', title: 'Maintenance', icon: 'CheckCircle', color: '10b981', questions: [{ key: 'q1', q: 'What is the appropriate follow-up?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3c3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Continue current triple therapy and biologic; continue routine monitoring', correct: true },
      { key: 'o2', label: 'Stop triple therapy since the biologic is working so well', correct: false },
    ] },
  ],
})

export const W3_CASES = [sarahTue, sarahWed, sarahThu, bobTue, bobWed, bobThu, mariaTue, mariaWed, mariaThu]
export const W3_RUBRICS = {} // Add rubrics if needed
