import { makeCase } from './caseFactory.js'

// WEEK 3 — Asthma + COPD
// Patients: Sarah Thompson (A) - Asthma, Bob Jenkins (B) - COPD, Maria Thompson (C) - ACO
// Case ids are namespaced 'w3-<patient>-<day>'

/* ============================ SARAH THOMPSON (A) ============================ */
// Moderate persistent asthma. Overusing albuterol, not taking ICS daily.

const sarahTue = makeCase({
  id: 'w3-sarah_t-tue',
  PATIENT: { name: 'Sarah Thompson', age: 34, sex: 'female', ethnicity: 'White', mrn: 'W3-10022' },
  ENCOUNTER: { week: 'Week 3', 
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
  VITALS: { bp: '122/78', bpRepeat: '116/74', hr: '82', rr: '18', temp: '98.2°F', weight: '76 kg', height: "5'5\"", bmi: '27.9', spo2: '98%', flags: {} },
  LABS: [
    { label: 'FEV1', value: '2.5', unit: 'L (78% pred)', flag: 'warn', note: 'Reversible post-bronchodilator (+14% / 280 mL; meets GINA criteria >=12% / >=200mL)' },
    { label: 'FEV1/FVC', value: '0.69', flag: 'warn' },
    { label: 'FVC', value: '3.3', unit: 'L', flag: 'normal' }
  ],
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
    { label: 'HPI', value: 'Referred by PCP. Patient had a viral-triggered asthma exacerbation 6 weeks ago requiring an urgent-care visit and a 5-day course of prednisone.' },
    { label: 'Social history', value: 'Teacher. Non-smoker. Lives with husband and two kids.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1 78% predicted, FEV1/FVC 0.69', flag: 'normal' },
    { label: 'ACT Score', value: 'Not yet administered', flag: 'warn' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'albuterol', label: 'Rescue Inhaler Use', placeholder: 'How often does she use albuterol?' },
    { key: 'budesonide', label: 'Controller Adherence', placeholder: 'Is she taking the budesonide?' },
    { key: 'nighttime', label: 'Nighttime Symptoms', placeholder: 'Waking up at night?' },
  ],
    COUNSELING: [
    { id: 'c1', title: 'Controller vs Rescue Inhaler', body: [
      "Your albuterol is like a fire extinguisher—it helps during an emergency, but it doesn't put out the smoldering fire in your lungs.",
      "The budesonide is your daily fire prevention. You need to use it every single day to stop the asthma attacks before they start." ] }
  ],
  GUIDING_QUESTIONS:
   [
    'What findings indicate uncontrolled asthma?',
    'Why is SABA-only therapy no longer preferred?',
    'What are the advantages of SMART therapy?',
    'Why should allergic rhinitis be addressed?',
    'What monitoring is necessary after therapy initiation?',
    'What counseling points are important for inhaled corticosteroids?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-sarah_t-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w3-sarah_t-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take loratadine 10 mg PRN for seasonal allergies and a daily multivitamin." },
    { id: 'w3-sarah_t-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a glass of wine on holidays or special occasions." },
    { id: 'w3-sarah_t-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w3-sarah_t-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "I was diagnosed with asthma when I was 8 years old. I was diagnosed with asthma when I was 8 years old. My sister also has asthma. My mother has asthma and allergic rhinitis. My father has coronary artery disease (CAD)." },
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
  ENCOUNTER: { week: 'Week 3', 
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I'm using the daily inhaler, but I still need my rescue inhaler when I exercise.",
    snapshotSummary: 'Follow-up visit. Sarah is now taking her ICS daily, but still has symptoms with activity. Time to step up therapy.',
    diseaseStates: ['Asthma'],
    learningObjectives: ['Escalate therapy per GINA guidelines (e.g., add LABA or switch to SMART therapy)'],
  },
  VITALS: { ...sarahTue.VITALS, bp: '120/76', hr: '78', rr: '16', weight: '75 kg', spo2: '99%', bmi: '27.5' },
  LABS: sarahTue.LABS,
  ALERTS: [{ level: 'warn', text: 'Asthma partly controlled — assess adherence and consider therapy escalation (add LABA).' }],
  PROBLEMS: [{ name: 'Asthma', detail: 'Partly controlled', flag: 'warn' }],
  MEDICATIONS: sarahTue.MEDICATIONS,
  IMMUNIZATIONS: sarahTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient reports improved daily adherence to ICS. Experiences symptoms 2 days/week. ACT score is 21. Patient demonstrates increased self-management engagement and expresses willingness to continue the current regimen.' },
    { label: 'Social history', value: 'Teacher. Non-smoker. Lives with husband and two kids.' }
  ],
  OBJECTIVE_EXTRA: [{ label: 'Spirometry', value: 'FEV1/FVC 0.58, FEV1 63% predicted', flag: 'warn' }, { label: 'CAT Score', value: '16', flag: 'warn' }],
  INTERVIEW_FIELDS: [
    { key: 'symptoms', label: 'Current Symptoms', placeholder: 'How are the symptoms now?' },
    { key: 'adherence', label: 'ICS Adherence', placeholder: 'Still taking the daily inhaler?' },
  ],
    COUNSELING: [
    { id: 'c1', title: 'Escalating Therapy', body: [
      "You've done a great job taking your daily inhaler. Since you're still having symptoms when you exercise, we need to add a long-acting medication.",
      "This combination will keep your airways open longer and reduce the inflammation." ] }
  ],
  GUIDING_QUESTIONS:
   [
    'What evidence suggests the current regimen is working?',
    'Why should inhaler technique be assessed before escalation?',
    'What inhaler technique errors were identified?',
    'Why is escalation not appropriate at this time?',
    'What monitoring is needed moving forward?',
    'How has allergic rhinitis affected this case?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-sarah_t-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w3-sarah_t-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take loratadine 10 mg PRN for seasonal allergies and a daily multivitamin." },
    { id: 'w3-sarah_t-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a glass of wine on holidays or special occasions." },
    { id: 'w3-sarah_t-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w3-sarah_t-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "I was diagnosed with asthma when I was 8 years old. I was diagnosed with asthma when I was 8 years old. My sister also has asthma. My mother has asthma and allergic rhinitis. My father has coronary artery disease (CAD)." },
    { id: 'w3a2_sym', topic: 'Exercise symptoms', field: 'symptoms', keywords: ['symptoms', 'breathe', 'exercise', 'run'], response: "I'm much better during the day. I have symptoms about 2 days a week now when I exercise, and I take my rescue inhaler. My Asthma Control Test score was 21 today. I am much more engaged in managing my asthma and I'm definitely willing to continue my current regimen." },
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
  ENCOUNTER: { week: 'Week 3', 
    day: 'Thursday', type: '6-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I switched to the Symbicort, and things are great.",
    snapshotSummary: 'Sarah was switched to SMART therapy (Symbicort). Asthma is now well controlled.',
    diseaseStates: ['Asthma'],
    learningObjectives: ['Assess asthma control on SMART therapy', 'Reinforce maintenance and reliever concept'],
  },
  VITALS: { ...sarahTue.VITALS, bp: '120/76', hr: '78', rr: '16', weight: '75 kg', spo2: '99%', bmi: '27.5' },
  LABS: [
    { label: 'FEV1', value: '2.9', unit: 'L (85% pred)', flag: 'normal' },
    { label: 'FEV1/FVC', value: '0.77', flag: 'normal' },
    { label: 'FVC', value: '3.63', unit: 'L', flag: 'normal' }
  ],
  ALERTS: [{ level: 'warn', text: 'Recurrent exacerbations despite dual bronchodilator therapy (LAMA/LABA). Consider ICS escalation based on eosinophil count.' }],
  PROBLEMS: [{ name: 'Asthma', detail: 'Well controlled on SMART', flag: 'normal' }],
  MEDICATIONS: [
    { name: 'Budesonide/Formoterol (Symbicort)', dose: '160/4.5 mcg', route: 'Inhaled', freq: '1 inhalation BID and PRN', indication: 'Asthma SMART therapy', notes: '' },
    { name: 'Cetirizine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
    { name: 'Fluticasone nasal spray', dose: '1 spray/nostril', route: 'Intranasal', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
  ],
  IMMUNIZATIONS: sarahTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Follow-up after transitioning to SMART therapy.' },
    { label: 'Social history', value: 'Teacher. Non-smoker. Lives with husband and two kids.' }
  ],
  OBJECTIVE_EXTRA: [{ label: 'Spirometry', value: 'FEV1/FVC 0.75, FEV1 78% predicted', flag: 'normal' }],
  INTERVIEW_FIELDS: [
    { key: 'control', label: 'Asthma Control', placeholder: 'Any symptoms or rescue use?' },
  ],
    COUNSELING: [
    { id: 'c1', title: 'Maintaining Control', body: [
      "Your asthma is much better controlled now. It's really important to stick with this current inhaler regimen so you don't have another flare-up." ] }
  ],
  GUIDING_QUESTIONS:
   [
    'What evidence suggests asthma remains controlled?',
    'Why is escalation not required?',
    'What role did the viral illness play?',
    'What factors should be assessed before escalating therapy?',
    'What monitoring should continue moving forward?',
    'How can future exacerbation risk be reduced?'
  ],

    INTERVIEW_KNOWLEDGE: [
    { id: 'w3-sarah_t-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w3-sarah_t-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take loratadine 10 mg PRN for seasonal allergies and a daily multivitamin." },
    { id: 'w3-sarah_t-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a glass of wine on holidays or special occasions." },
    { id: 'w3-sarah_t-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w3-sarah_t-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "I was diagnosed with asthma when I was 8 years old. My sister also has asthma. My mother has asthma and allergic rhinitis. My father has coronary artery disease (CAD)." },
    { id: 'w3a3_ctrl', topic: 'Controlled', field: 'control', keywords: ['symptoms', 'rescue', 'use', 'feel'], response: "I use the Symbicort as my daily controller. I still have symptoms and need an extra puff for relief about 1 or 2 times a week. I wake up from asthma about once a month." },
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
  ENCOUNTER: { week: 'Week 3', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I get winded walking to the mailbox.",
    snapshotSummary: 'Bob has COPD but is only taking lisinopril and atorvastatin. He has an albuterol inhaler. A maintenance COPD inhaler was prescribed but he is not on it.',
    diseaseStates: ['COPD', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Identify missing maintenance therapy in symptomatic COPD', 'Assess cost and technique barriers'],
  },
  VITALS: { bp: '132/82', bpRepeat: '130/80', hr: '76', rr: '20', temp: '98.4°F', weight: '80 kg', height: "5'9\"", bmi: '26.0', flags: {} },
  LABS: [
    { label: 'Eosinophils', value: '310', unit: 'cells/µL', flag: 'normal' },
    { label: 'FEV1', value: '1.8', unit: 'L (60% pred)', flag: 'warn' },
    { label: 'FEV1/FVC', value: '0.57', flag: 'warn' },
    { label: 'FVC', value: '2.9', unit: 'L', flag: 'warn' }
  ],
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
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Complains of shortness of breath. History of 2 moderate COPD exacerbations in the past 3 months.' }, { label: 'Social', value: 'Former smoker (45 pack-years, quit 5 years ago).' }],
  OBJECTIVE_EXTRA: [{ label: 'Spirometry', value: 'FEV1/FVC 0.57, FEV1 60% predicted', flag: 'warn' }, { label: 'CAT Score', value: '17', flag: 'warn' }],
  INTERVIEW_FIELDS: [
    { key: 'maintenance', label: 'Maintenance Inhaler', placeholder: 'Was he prescribed a daily inhaler?' },
    { key: 'cost', label: 'Cost/Affordability', placeholder: 'Can he afford his meds?' },
  ],
    COUNSELING: [
    { id: 'c1', title: 'Proper Inhaler Technique', body: [
      "With COPD, getting the medication deep into your lungs is the hardest part. Let's practice using your inhaler together.",
      "Remember to breathe out completely before taking a slow, deep breath in." ] }
  ],
  GUIDING_QUESTIONS:
   [
    'What findings support GOLD Group B classification?',
    'Why is this case treatment non-initiation rather than treatment failure?',
    'What barriers prevented therapy initiation?',
    'Why is LABA/LAMA therapy appropriate?',
    'What education is most important?',
    'What should be monitored after therapy initiation?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-bob_j-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w3-bob_j-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take occasional acetaminophen for joint aches, but no other over-the-counter medications or supplements." },
    { id: 'w3-bob_j-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink 1 to 2 beers on weekends while watching sports, but nothing during the week." },
    { id: 'w3-bob_j-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago, and I had a 45 pack-year history before that." },
    { id: 'w3-bob_j_psh', topic: 'Past Surgical History', field: 'psh', keywords: ['surgery', 'surgeries', 'surgical', 'operation', 'operations', 'appendectomy'], response: "I had my appendix taken out a long time ago, but no other major surgeries." },
    { id: 'w3-bob_j-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My brother has COPD. My father had coronary artery disease (CAD). My mother had high blood pressure." },
    { id: 'w3b_maint', topic: 'Maintenance therapy', field: 'maintenance', keywords: ['daily', 'inhaler', 'prescribed', 'tiotropium', 'spiriva', 'laba', 'lama'], response: "The doctor gave me a script for some combination inhaler a while back, but when I went to the pharmacy, it was $300. I left it there. I just use the albuterol." },
    { id: 'w3b_cost', topic: 'Cost barrier', field: 'cost', keywords: ['cost', 'afford', 'expensive', 'money', 'pay'], response: "Yeah, I can't afford hundreds of dollars for an inhaler on a fixed income. The albuterol is cheap, so I stick with that." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3b_a1', title: 'COPD Maintenance', icon: 'Lungs', color: '13314f', questions: [{ key: 'q1', q: 'What is the appropriate initial therapy for this highly symptomatic patient per GOLD?' }, { key: 'q2', q: 'How does cost affect the plan?' }] },
    { id: 'w3b_a2', title: 'Hypertension', icon: 'HeartPulse', color: 'dc2626', questions: [{ key: 'q3', q: 'Is his blood pressure currently at goal?' }] },
    { id: 'w3b_a3', title: 'Hyperlipidemia', icon: 'Activity', color: 'f59e0b', questions: [{ key: 'q4', q: 'Is he on appropriate statin therapy?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b_p1', title: 'Therapy Plan', options: [
      { key: 'o1', label: 'Find an affordable LABA/LAMA combination or single agent and teach proper inhaler technique', correct: true },
      { key: 'o2', label: 'Prescribe triple therapy (LABA/LAMA/ICS)', correct: false },
      { key: 'o3', label: 'Prescribe daily oral prednisone', correct: false },
    ] },
    { id: 'w3b_p2', title: 'Hypertension & Hyperlipidemia', options: [
      { key: 'o4', label: 'Continue current Lisinopril and Atorvastatin', correct: true },
      { key: 'o5', label: 'Increase dose of Atorvastatin', correct: false },
    ] },
  ],
})

const bobWed = makeCase({
  id: 'w3-bob_j-wed',
  PATIENT: { ...bobTue.PATIENT },
  ENCOUNTER: { week: 'Week 3', 
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "The new inhaler is cheaper, and I feel a tiny bit better, but not much.",
    snapshotSummary: 'Bob was started on umeclidinium/vilanterol (Anoro Ellipta) that was affordable, but he feels only mild/suboptimal improvement.',
    diseaseStates: ['COPD'],
    learningObjectives: ['Assess inhaler technique as a cause of treatment failure'],
  },
  VITALS: { bp: '130/76', bpRepeat: '130/76', hr: '78', rr: '18', temp: '98.4°F', weight: '89 kg', height: "5'10\"", bmi: '28.1', spo2: '95%', flags: {} },
  LABS: [
    { label: 'Eosinophils', value: '310', unit: 'cells/µL', flag: 'normal' },
    { label: 'FEV1', value: '1.8', unit: 'L (63% pred)', flag: 'warn' },
    { label: 'FEV1/FVC', value: '0.58', flag: 'warn' },
    { label: 'FVC', value: '3.1', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'warn', text: 'COPD symptoms persistent despite LAMA therapy — evaluate inhaler technique and device adherence.' }],
  PROBLEMS: [{ name: 'COPD', detail: 'Symptomatic despite LAMA', flag: 'warn' }],
  MEDICATIONS: [
    ...bobTue.MEDICATIONS,
    { name: 'Umeclidinium/Vilanterol (Anoro Ellipta)', dose: '62.5/25 mcg', route: 'Inhaled', freq: 'daily', indication: 'COPD maintenance', notes: 'Newly started' },
  ],
  IMMUNIZATIONS: bobTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient reports only mild, suboptimal improvement in dyspnea since starting umeclidinium/vilanterol (Anoro Ellipta) 62.5/25 mcg 1 inhalation daily. Denies any exacerbations, hospitalizations, or events requiring antibiotics or OCS. Patient has 3 chronic conditions: COPD (diagnosed 4 years ago), HTN (diagnosed 12 years ago, on lisinopril), and Hyperlipidemia (diagnosed 10 years ago). Past surgical history includes an appendectomy. Absence of diabetes or cardiac disease.' },
    { label: 'Social history', value: 'Married, lives with spouse. Retired automotive mechanic (occupational exposure). Former smoker (45 pack-years, quit 5 years ago). Denies recreational drug use.' }
  ],
  OBJECTIVE_EXTRA: [{ label: 'Spirometry', value: 'FEV1/FVC 0.58, FEV1 63% predicted', flag: 'warn' }, { label: 'CAT Score', value: '16', flag: 'warn' }],
  INTERVIEW_FIELDS: [
    { key: 'technique', label: 'Inhaler Technique', placeholder: 'Ask him to demonstrate how he uses the HandiHaler' },
  ],
    COUNSELING: [
    { id: 'c1', title: 'Pulmonary Rehabilitation & Maintenance', body: [
      "Since you've already quit smoking, the next best step is staying active. Pulmonary rehabilitation can significantly improve your symptoms.",
      "Keep using your maintenance inhaler every day, even when you feel good." ] }
  ],
  GUIDING_QUESTIONS:
   [
    'What evidence suggests adherence is contributing to persistent symptoms?',
    'Why is escalation not appropriate today?',
    'What interventions could improve adherence?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-bob_j-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w3-bob_j-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take occasional acetaminophen for joint aches, but no other over-the-counter medications or supplements." },
    { id: 'w3-bob_j-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink 1 to 2 beers on weekends while watching sports, but nothing during the week." },
    { id: 'w3-bob_j-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago, and I had a 45 pack-year history before that." },
    { id: 'w3-bob_j-wed_psh', topic: 'Past Surgical History', field: 'psh', keywords: ['surgery', 'surgeries', 'surgical', 'operation', 'operations', 'appendectomy'], response: "I had my appendix taken out a long time ago, but no other major surgeries." },
    { id: 'w3-bob_j-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My brother has COPD. My father had coronary artery disease (CAD). My mother had high blood pressure." },
    { id: 'w3b2_tech', topic: 'Inhaler technique', field: 'technique', keywords: ['show', 'demonstrate', 'how', 'use', 'technique', 'capsule'], response: "I slide the cover down until it clicks. Then I breathe out really hard straight into the mouthpiece, and then take a breath in." },
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
  ENCOUNTER: { week: 'Week 3', 
    day: 'Thursday', type: '6-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I keep having flare-ups and needing my rescue inhaler.",
    snapshotSummary: 'Bob is fully adherent to umeclidinium/vilanterol but continues to experience frequent exacerbations. Escalation to triple therapy is indicated.',
    diseaseStates: ['COPD'],
    learningObjectives: ['Recognize indications for escalating to triple therapy (LABA/LAMA/ICS) in COPD', 'Interpret eosinophil count in COPD exacerbation risk'],
  },
  VITALS: { bp: '128/76', bpRepeat: '128/76', hr: '82', rr: '18', temp: '98.4°F', weight: '89 kg', height: "5'10\"", bmi: '28.1', spo2: '94%', flags: {} },
  LABS: [
    { label: 'Eosinophils', value: '310', unit: 'cells/µL', flag: 'normal' },
    { label: 'FEV1', value: '1.8', unit: 'L (63% pred)', flag: 'warn' },
    { label: 'FEV1/FVC', value: '0.58', flag: 'warn' },
    { label: 'FVC', value: '3.1', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'warn', text: 'Recurrent exacerbations despite dual bronchodilator therapy (LAMA/LABA). Consider ICS escalation based on eosinophil count.' }],
  PROBLEMS: [{ name: 'COPD', detail: 'Frequent exacerbations, high symptom burden (CAT 17, eosinophils 310)', flag: 'high' }],
  MEDICATIONS: bobWed.MEDICATIONS,
  IMMUNIZATIONS: bobTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient reports persistent dyspnea and frequent albuterol use despite compliance with umeclidinium/vilanterol (Anoro Ellipta) 62.5/25 mcg 1 inhalation daily. History of 2 exacerbations in the past 3 months, and 3 exacerbations in the past 12 months. The first exacerbation was treated with OCS and antibiotics. The second exacerbation required an urgent care visit and OCS.' },
    { label: 'Social history', value: 'Married, lives with spouse. Retired automotive mechanic (occupational exposure). Former smoker (45 pack-years, quit 5 years ago). Denies recreational drug use.' }
  ],
  OBJECTIVE_EXTRA: [{ label: 'Spirometry', value: 'FEV1/FVC 0.57, FEV1 60% predicted', flag: 'warn' }, { label: 'CAT Score', value: '17', flag: 'warn' }],
  INTERVIEW_FIELDS: [
    { key: 'symptoms', label: 'Symptom check', placeholder: 'Any exacerbations or rescue use?' },
  ],
    COUNSELING: [
    { id: 'c1', title: 'Triple Therapy Education', body: [
      "Because you are still having flare-ups, we are adding an inhaled steroid to your regimen to reduce inflammation.",
      "Remember to rinse your mouth after using the new inhaler to prevent thrush." ] }
  ],
  GUIDING_QUESTIONS:
   [
    'Why is escalation to triple therapy appropriate today?',
    'What role do eosinophils play in this decision?',
    'What are the risks of adding an inhaled corticosteroid (ICS)?'
  ],

    INTERVIEW_KNOWLEDGE: [
    { id: 'w3-bob_j-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w3-bob_j-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take occasional acetaminophen for joint aches, but no other over-the-counter medications or supplements." },
    { id: 'w3-bob_j-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink 1 to 2 beers on weekends while watching sports, but nothing during the week." },
    { id: 'w3-bob_j-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago, and I had a 45 pack-year history before that." },
    { id: 'w3-bob_j-thu_psh', topic: 'Past Surgical History', field: 'psh', keywords: ['surgery', 'surgeries', 'surgical', 'operation', 'operations', 'appendectomy'], response: "I had my appendix taken out a long time ago, but no other major surgeries." },
    { id: 'w3-bob_j-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My brother has COPD. My father had coronary artery disease (CAD). My mother had high blood pressure." },
    { id: 'w3b3_sym', topic: 'Symptoms', field: 'symptoms', keywords: ['exacerbation', 'rescue', 'albuterol', 'feel', 'breathing'], response: "I still use my albuterol almost every day, and I've had a couple of flare-ups recently. I'm really starting to get worried that my lung function is dropping and my COPD is getting worse." },
    { id: 'w3b3_adherence', topic: 'Adherence', field: 'adherence', keywords: ['adherence', 'take', 'taking', 'miss', 'forget', 'every day', 'routine', 'reminder'], response: "I take the Anoro inhaler every single morning. I know I used to miss my old inhaler, only taking it 3 or 4 days a week, but now my wife puts it right next to my coffee mug as a reminder so I never forget." },
    { id: 'w3b3_goals', topic: 'Goals', field: 'goals', keywords: ['goal', 'goals', 'hope', 'want', 'expect'], response: "My main goal right now is just to stop having these exacerbations and stay out of the urgent care." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3b3_a1', title: 'Clinical Status', icon: 'CheckCircle', color: '10b981', questions: [{ key: 'q1', q: 'Should therapy be escalated to LABA/LAMA?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Escalate to triple therapy (add ICS) due to recurrent exacerbations and elevated eosinophils', correct: true },
      { key: 'o2', label: 'Escalate to LABA/LAMA', correct: false },
    ] },
  ],
})


/* ============================ MARIA THOMPSON (C) ============================ */
// Asthma-COPD Overlap (ACO). Recurrent exacerbations on triple therapy. Eosinophilic.

const mariaTue = makeCase({
  id: 'w3-maria_t-tue',
  PATIENT: { name: 'Maria Thompson', age: 69, sex: 'female', ethnicity: 'Hispanic', mrn: 'W3-99211' },
  ENCOUNTER: { week: 'Week 3', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I keep getting these chest infections and flare-ups.",
    snapshotSummary: 'Maria has Asthma-COPD Overlap. She is on LAMA and PRN albuterol, but is having frequent exacerbations. She needs ICS therapy due to her asthma component.',
    diseaseStates: ['Asthma-COPD Overlap', 'Allergic Rhinitis'],
    learningObjectives: ['Recognize ACO phenotype', 'Identify the mandatory role of ICS in patients with an asthma component'],
  },
  VITALS: { bp: '128/80', bpRepeat: '126/78', hr: '72', rr: '18', temp: '98.6°F', weight: '70 kg', height: "5'4\"", bmi: '26.5', flags: {} },
  LABS: [
    { label: 'Absolute Eosinophils', value: '420', unit: 'cells/µL', flag: 'high' },
    { label: 'FEV1', value: '1.45', unit: 'L (58% pred)', flag: 'warn', note: 'Post-bronchodilator' },
    { label: 'FEV1/FVC', value: '0.55', flag: 'warn', note: 'Post-bronchodilator (Pre-BD was 0.54)' },
    { label: 'FVC', value: '2.63', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'high', text: 'Patient has ACO and frequent exacerbations but is NOT on an inhaled corticosteroid.' }],
  PROBLEMS: [
    { name: 'Asthma-COPD Overlap (ACO)', detail: 'Frequent exacerbations (2 in past year)', flag: 'high' },
    { name: 'Allergic rhinitis', detail: 'Stable', flag: 'normal' },
    { name: 'Hypertension', detail: 'Controlled', flag: 'normal' },
    { name: 'Osteopenia', detail: 'Stable', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Tiotropium (Spiriva)', dose: '2 inhalations', route: 'Inhaled', freq: 'daily', indication: 'COPD', notes: '' },
    { name: 'Albuterol HFA', dose: '2 puffs', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'Rescue', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'History of asthma since childhood, COPD diagnosed 8 years ago. Past medical history includes Allergic Rhinitis, Hypertension, Osteopenia, and a Cholecystectomy. Reports 2 exacerbations requiring prednisone in the last 12 months.' }, { label: 'Social', value: 'Never smoker. Married, lives with spouse. Retired teacher. Drinks alcohol rarely. Denies recreational drug use.' }],
  OBJECTIVE_EXTRA: [{ label: 'Spirometry', value: 'FEV1/FVC 0.60, FEV1 65% predicted with significant bronchodilator reversibility (+15%, +250mL)', flag: 'warn' }],
  INTERVIEW_FIELDS: [
    { key: 'exacerbations', label: 'Exacerbation History', placeholder: 'Tell me about the flare-ups' },
    { key: 'technique', label: 'Inhaler Technique & Concerns', placeholder: 'Show me your technique' },
  ],
    COUNSELING: [
    { id: 'c1', title: 'Understanding Overlap Syndrome', body: [
      "You have features of both asthma and COPD. This means we have to treat the inflammation and keep the airways open with a combination of medications." ] }
  ],
  GUIDING_QUESTIONS:
   [
    'What findings support asthma-COPD overlap rather than isolated COPD?',
    'Why is ICS therapy indicated?',
    'What role do eosinophils play in this case?',
    'How might allergic rhinitis affect respiratory control?',
    'What outcomes should be monitored after Symbicort initiation?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-maria_t-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w3-maria_t-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take cetirizine 10 mg PRN and use a saline nasal spray for allergic rhinitis. I have a lot of sneezing and nasal congestion that gets worse seasonally. I tried an inhaled steroid in the past but it didn't seem to help much." },
    { id: 'w3-maria_t-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol rarely, maybe a glass of wine a few times a year." },
    { id: 'w3-maria_t-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w3-maria_t-tue_drugs', topic: 'Recreational drugs', field: 'drugs', keywords: ['drugs', 'recreational', 'marijuana', 'weed', 'cocaine', 'illicit'], response: "I deny any recreational drug use." },
    { id: 'w3-maria_t-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother had allergic rhinitis. My father had coronary artery disease (CAD). My sister has asthma." },
    { id: 'w3c_tech', topic: 'Technique', field: 'technique', keywords: ['technique', 'use', 'show', 'worry', 'decline'], response: "I put the capsule in, pierce it, and breathe in deeply. I am really worried that these flare-ups are causing a progressive decline in my lung function, and I want to avoid being hospitalized." },
    { id: 'w3c_exac', topic: 'Exacerbations', field: 'exacerbations', keywords: ['flare', 'infection', 'prednisone', 'hospital'], response: "I have symptoms on most days. I wake up at night from symptoms about twice a week. I have difficulty climbing stairs, walking uphill, and doing prolonged activities. I've had to go to urgent care 2 times in the last year for exacerbations and was hospitalized for one of them. I deny any recent hospitalizations or ED visits in the past month." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3c_a1', title: 'ACO Management', icon: 'Lungs', color: '7c3aed', questions: [
      { key: 'q1', q: 'Based on her frequent exacerbations and elevated eosinophils, what is the best biologic therapy?' },
      { key: 'q2', q: 'Should Trelegy be continued?' }
    ] },
    { id: 'w3c_a2', title: 'Allergic Rhinitis', icon: 'Wind', color: '0d9488', questions: [
      { key: 'q1', q: 'Is her current allergic rhinitis management adequate?' }
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3c_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Start mepolizumab (Nucala) injection and continue Trelegy', correct: true },
      { key: 'o2', label: 'Switch Trelegy to Breztri (budesonide/glycopyrrolate/formoterol)', correct: false },
    ] },
    { id: 'w3c_p2', title: 'Allergic Rhinitis Plan', options: [
      { key: 'o1', label: 'Continue cetirizine and fluticasone nasal spray', correct: true },
      { key: 'o2', label: 'Discontinue cetirizine', correct: false },
    ] },
  ],
})

const mariaWed = makeCase({
  id: 'w3-maria_t-wed',
  PATIENT: { ...mariaTue.PATIENT },
  ENCOUNTER: { week: 'Week 3', 
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I'm using the new triple inhaler every day perfectly, but I still had another flare-up last month.",
    snapshotSummary: 'Maria was escalated to triple therapy (Trelegy). She is perfectly adherent with great technique, but she is still exacerbating. Eosinophils remain high.',
    diseaseStates: ['ACO'],
    learningObjectives: ['Identify biologic candidacy for severe eosinophilic exacerbating disease (MATINEE)'],
  },
  VITALS: { ...mariaTue.VITALS },
  LABS: [
    { label: 'Absolute Eosinophils', value: '420', unit: 'cells/µL', flag: 'high' },
    { label: 'FEV1', value: '1.45', unit: 'L (58% pred)', flag: 'warn', note: 'Post-bronchodilator' },
    { label: 'FEV1/FVC', value: '0.55', flag: 'warn', note: 'Post-bronchodilator (Pre-BD was 0.54)' },
    { label: 'FVC', value: '2.63', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'high', text: 'Continued exacerbations despite optimized triple inhaled therapy.' }],
  PROBLEMS: [{ name: 'ACO', detail: 'Exacerbating on triple therapy', flag: 'high' }],
  MEDICATIONS: [
    { name: 'Fluticasone/Umeclidinium/Vilanterol (Trelegy)', dose: '100/62.5/25 mcg', route: 'Inhaled', freq: 'daily', indication: 'ACO', notes: '' },
    { name: 'Albuterol HFA', dose: '2 puffs', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'Rescue', notes: '' },
  ],
  IMMUNIZATIONS: mariaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'One moderate exacerbation treated with prednisone 4 weeks ago. Adherence and technique confirmed excellent in clinic today.' },
    { label: 'Social history', value: 'Retired elementary school principal. Married, lives with spouse. Never smoker.' }
  ],
  OBJECTIVE_EXTRA: [{ label: 'Spirometry', value: 'FEV1/FVC 0.57, FEV1 60% predicted', flag: 'warn' }, { label: 'CAT Score', value: '17', flag: 'warn' }],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Adherence / Technique', placeholder: 'Are you sure she is taking it?' },
  ],
    COUNSELING: [
    { id: 'c1', title: 'Managing Severe Symptoms', body: [
      "Your breathing tests show we need to step up your treatment. Let's discuss adding a specialized medication to target the specific type of inflammation you have." ] }
  ],
  GUIDING_QUESTIONS: [
    'What evidence suggests the current inhaled triple therapy is insufficient?',
    'Why is biologic therapy (anti-IL-5) indicated for this patient?',
    'What is the significance of persistent eosinophilia (420 cells/µL) despite triple therapy?',
    'How does the MATINEE trial support the use of mepolizumab in COPD/ACO?',
    'What monitoring parameters and clinical outcomes should be tracked after initiating biologic therapy?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-maria_t-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w3-maria_t-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take cetirizine 10 mg PRN and use a saline nasal spray for allergic rhinitis. I have a lot of sneezing and nasal congestion that gets worse seasonally. I tried an inhaled steroid in the past but it didn't seem to help much." },
    { id: 'w3-maria_t-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol rarely, maybe a glass of wine a few times a year." },
    { id: 'w3-maria_t-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w3-maria_t-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother had allergic rhinitis. My father had coronary artery disease (CAD). My sister has asthma." },
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
  ENCOUNTER: { week: 'Week 3', 
    day: 'Thursday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I'm using all my inhalers but I still had another flare-up.",
    snapshotSummary: 'Maria is on Symbicort and Spiriva but continues to have frequent exacerbations. Eosinophils remain elevated.',
    diseaseStates: ['ACO', 'Allergic Rhinitis', 'Hypertension', 'Osteopenia'],
    learningObjectives: ['Evaluate persistent exacerbations on ICS/LABA + LAMA', 'Assess biologic therapy candidacy'],
  },
  VITALS: { bp: '130/80', bpRepeat: '130/80', hr: '76', rr: '18', temp: '98.6°F', weight: '70 kg', height: "5'4\"", bmi: '26.5', spo2: '94%', flags: {} },
  LABS: [
    { label: 'Absolute Eosinophils', value: '380', unit: 'cells/µL', flag: 'high' },
    { label: 'FEV1', value: '1.45', unit: 'L (58% pred)', flag: 'warn', note: 'Post-bronchodilator' },
    { label: 'FEV1/FVC', value: '0.57', flag: 'warn' },
    { label: 'FVC', value: '2.54', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'high', text: 'Persistent exacerbations on triple therapy (ICS/LABA + LAMA). Consider biologic escalation.' }],
  PROBLEMS: [
    { name: 'Asthma-COPD Overlap (ACO)', detail: 'Exacerbating on Symbicort + Spiriva', flag: 'high' },
    { name: 'Allergic rhinitis', detail: 'Uncontrolled', flag: 'warn' },
    { name: 'Hypertension', detail: 'Stable', flag: 'normal' },
    { name: 'Osteopenia', detail: 'Stable', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Budesonide/Formoterol (Symbicort)', dose: '160/4.5 mcg', route: 'Inhaled', freq: '2 puffs BID', indication: 'ACO', notes: '' },
    { name: 'Tiotropium (Spiriva Respimat)', dose: '2.5 mcg', route: 'Inhaled', freq: '2 puffs daily', indication: 'ACO', notes: '' },
    { name: 'Albuterol HFA', dose: '2 puffs', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'Rescue', notes: '' },
    { name: 'Cetirizine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
  ],
  IMMUNIZATIONS: mariaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient reports continued dyspnea and 2 exacerbations in the past 12 months (one requiring hospitalization) despite adherence to Symbicort and Spiriva. Allergic rhinitis is uncontrolled; patient stopped intranasal fluticasone. Denies missed doses.' },
    { label: 'Social history', value: 'Retired teacher. Married, lives with spouse. Former smoker (30 pack-years, quit 10 years ago).' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1/FVC 0.57, FEV1 58% predicted', flag: 'warn' },
    { label: 'CAT Score', value: '18', flag: 'warn' },
    { label: 'ACT Score', value: '14', flag: 'warn' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'update', label: 'Clinical Update', placeholder: 'How has she been feeling?' },
  ],
    COUNSELING: [
    { id: 'c1', title: 'Targeted Therapy', body: [
      "Because you are still having flare-ups despite using three different inhaled medicines, we need to consider an injectable medication that targets the specific type of inflammation (eosinophils) in your lungs." ] }
  ],
  GUIDING_QUESTIONS: [
    'What evidence suggests current inhaled therapy is insufficient?',
    'Why is biologic therapy indicated?',
    'How should her allergic rhinitis be managed?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-maria_t-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I have a severe allergy to sulfonamide antibiotics. I get a terrible rash." },
    { id: 'w3-maria_t-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin', 'fluticasone', 'spray'], response: "I take cetirizine 10 mg PRN. I stopped the intranasal fluticasone because I kept forgetting to use it, and now my allergies are completely uncontrolled." },
    { id: 'w3-maria_t-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol rarely, maybe a glass of wine a few times a year." },
    { id: 'w3-maria_t-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked for 30 years before quitting 10 years ago." },
    { id: 'w3-maria_t-thu_psh', topic: 'Past Surgical History', field: 'psh', keywords: ['surgery', 'surgeries', 'surgical', 'operation', 'operations', 'cholecystectomy', 'gallbladder'], response: "I had my gallbladder removed (cholecystectomy) a few years ago." },
    { id: 'w3-maria_t-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother had allergic rhinitis. My father had coronary artery disease (CAD). My sister has asthma." },
    { id: 'w3c3_upd', topic: 'Update', field: 'update', keywords: ['feel', 'breathing', 'exacerbation', 'flare'], response: "I'm using the Symbicort and Spiriva exactly as prescribed, but I still had a flare-up last month and my breathing feels tight. My allergies are also acting up badly since I stopped the nasal spray." },
    { id: 'w3c3_vacc', topic: 'Vaccinations', field: 'vaccines', keywords: ['vaccine', 'vaccines', 'shot', 'flu', 'pneumonia'], response: "I'm not entirely sure which vaccines I'm due for. You'd have to check my chart to see if I need a pneumonia or flu shot." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3c3_a1', title: 'Treatment Failure', icon: 'AlertTriangle', color: 'dc2626', questions: [{ key: 'q1', q: 'What is the next step for a patient failing triple ICS/LABA+LAMA therapy with high eosinophils?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3c3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Refer for biologic therapy (anti-IL-5) and restart fluticasone nasal spray', correct: true },
      { key: 'o2', label: 'Continue current regimen and observe', correct: false },
    ] },
  ],
})

export const W3_CASES = [sarahTue, sarahWed, sarahThu, bobTue, bobWed, bobThu, mariaTue, mariaWed, mariaThu]
export const W3_RUBRICS = {} // Add rubrics if needed
