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
  VITALS: { bp: '122/78', bpRepeat: '116/74', hr: '82', rr: '18', temp: '98.2°F', weight: '76 kg', height: "5'5\"", bmi: '27.9', spo2: '98%', spo2Qualifier: 'on room air', flags: {} },
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
    { name: 'Albuterol HFA', dose: '2 puffs', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'Asthma rescue', notes: 'Using 1–2 times daily on most days' },
    { name: 'Cetirizine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
    { name: 'Fluticasone nasal spray', dose: '1 spray/nostril', route: 'Intranasal', freq: 'daily', indication: 'Allergic rhinitis', notes: 'Not taking consistently' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented', flag: 'warn' },
    { name: 'Tdap', status: 'Overdue — last received >10 years ago', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Referred by PCP. Symptoms of uncontrolled asthma worsening over several months (increasing albuterol use, nighttime awakenings, activity limitation). A viral-triggered asthma exacerbation 6 weeks ago required an urgent-care visit and a 5-day course of prednisone. No prior ICS controller prescribed before this visit.' },
    { label: 'Social history', value: 'Teacher. Non-smoker. Lives with husband and two kids.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1 78% predicted, FEV1/FVC 0.69. Post-bronchodilator improvement +14% / +280 mL (meets GINA criteria ≥12% / ≥200 mL)', flag: 'normal' },
    { label: 'ACT Score', value: '16 — Poorly controlled asthma', flag: 'warn' }
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
    { id: 'w3-sarah_t-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "I was diagnosed with asthma when I was 8 years old. My brother and sister both have asthma. My mother has asthma and allergic rhinitis. My father has high blood pressure." },
    { id: 'w3a_albuterol', topic: 'Albuterol Overuse', field: 'albuterol', keywords: ['rescue', 'albuterol', 'how often', 'frequent'], response: "I've been using my albuterol about 1 to 2 times a day on 5 to 6 days a week (about 7 to 10 times a week), sometimes more. I even need it before I exercise and sometimes in the middle of the night." },
    { id: 'w3a_bud', topic: 'ICS Nonadherence', field: 'budesonide', keywords: ['budesonide', 'daily', 'controller', 'steroid'], response: "I only use the budesonide when I feel like a cold is coming on. I didn't think I needed it every day if my asthma wasn\'t bothering me." },
    { id: 'w3a_worse', topic: 'Worsening duration', field: 'worsening', keywords: ['how long', 'when did', 'getting worse', 'months', 'duration', 'worsen'], response: "Honestly, my breathing has been getting worse for several months. I\'ve been needing my rescue inhaler more and more. The flare-up six weeks ago was the worst it\'s been, but the symptoms were already building before that." },
    { id: 'w3a_activity', topic: 'Activity limitation', field: 'activity', keywords: ['activity', 'exercise', 'hike', 'outdoor', 'limit', 'avoid', 'stairs'], response: "I\'ve had to avoid hiking and outdoor activities that I used to enjoy. I get short of breath climbing stairs and I\'ve had to slow down playing with my children too." },
    { id: 'w3a_night', topic: 'Nighttime symptoms', field: 'nighttime', keywords: ['night', 'sleep', 'wake', 'waking'], response: "I wake up coughing and short of breath about 2 to 3 nights a week. I have to take my albuterol to get back to sleep." },
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
    snapshotSummary: 'Follow-up visit. Sarah is taking Symbicort SMART therapy with improved control (ACT 21), but still has exercise-induced symptoms due to inhaler technique errors. Inhaler technique must be corrected before considering any therapy escalation.',
    diseaseStates: ['Asthma'],
    learningObjectives: [
      'Assess asthma control using ACT score and symptom frequency',
      'Identify inhaler technique errors as the cause of persistent exercise symptoms',
      'Prioritize inhaler technique correction over pharmacologic escalation per GINA guidelines',
      'Establish follow-up and monitoring plan for asthma control and technique reassessment'
    ],
  },
  VITALS: { ...sarahTue.VITALS, bp: '120/76', hr: '76', rr: '16', weight: '75 kg', spo2: '99%', spo2Qualifier: 'on room air', bmi: '27.5' },
  LABS: sarahTue.LABS,
  ALERTS: [{ level: 'info', text: 'ACT 21 — Asthma well controlled on SMART therapy. Assess inhaler technique before considering any further escalation.' }],
  PROBLEMS: [{ name: 'Asthma', detail: 'Partly controlled', flag: 'warn' }],
  MEDICATIONS: [
    { name: 'Budesonide/Formoterol (Symbicort)', dose: '160/4.5 mcg', route: 'Inhaled', freq: '1 inhalation BID + 1 inhalation PRN (SMART)', indication: 'Asthma SMART therapy', notes: 'Started at last visit' },
    { name: 'Cetirizine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
    { name: 'Fluticasone nasal spray', dose: '1 spray/nostril', route: 'Intranasal', freq: 'daily', indication: 'Allergic rhinitis', notes: 'Now taking consistently' },
  ],
  IMMUNIZATIONS: sarahTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient reports improved daily adherence to ICS-LABA (Symbicort SMART). Experiences symptoms 2 days/week. ACT score is 21. Patient demonstrates increased self-management engagement and expresses willingness to continue the current regimen. Denies any additional past medical history beyond asthma, allergic rhinitis, and hypertension.' },
    { label: 'Past surgical history', value: 'Denies prior surgeries / no past surgical history.' },
    { label: 'Social history', value: 'Teacher. Non-smoker. Lives with husband and two kids. Denies recreational or illicit drug use.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1/FVC 0.76. Post-bronchodilator improvement +9% / +180 mL', flag: 'normal' },
    { label: 'ACT Score', value: '21 — Improved from baseline ACT 16. Well-controlled range.', flag: 'normal' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'symptoms', label: 'Current Symptoms', placeholder: 'How are the symptoms now?' },
    { key: 'adherence', label: 'ICS Adherence', placeholder: 'Still taking the daily inhaler?' },
  ],
    COUNSELING: [
    { id: 'c1', title: 'Inhaler Technique & Regimen Maintenance', body: [
      "Your asthma is well-controlled overall with an ACT score of 21. Your symptoms with exercise are related to inhaler technique rather than needing stronger medication.",
      "We will focus on fully exhaling before inhaling and holding your breath for 10 seconds after each puff, and continue your current Symbicort regimen." ] }
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
    { id: 'w3-sarah_t-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "I was diagnosed with asthma when I was 8 years old. My brother and sister both have asthma. My mother has asthma and allergic rhinitis. My father has high blood pressure." },
    { id: 'w3a2_sym', topic: 'Exercise symptoms', field: 'symptoms', keywords: ['symptoms', 'breathe', 'exercise', 'run'], response: "I\'m much better overall. I only have symptoms 1 to 2 days a week now, mostly with exercise. My ACT score was 21 today, which is a big improvement. I\'m really committed to staying on this regimen." },
    { id: 'w3a2_adh', topic: 'Adherence', field: 'adherence', keywords: ['budesonide', 'symbicort', 'every day', 'daily', 'take', 'miss'], response: "Yes, I\'ve been taking the Symbicort every morning and at night. I try not to miss it. Very few missed doses, maybe once." },
    { id: 'w3a2_rhinitis', topic: 'Allergic rhinitis status', field: 'rhinitis', keywords: ['rhinitis', 'nasal', 'allergy', 'nose', 'sinus', 'fluticasone', 'spray', 'symptoms'], response: "My nasal symptoms are so much better since I started using the nasal spray every day. The sneezing and congestion are significantly improved compared to before." },
    { id: 'w3a2_tech', topic: 'Inhaler technique', field: 'technique', keywords: ['show', 'demonstrate', 'technique', 'how', 'use', 'inhaler', 'steps'], response: "Sure. I just pick it up, shake it, put it in my mouth, and breathe in. I don\'t always breathe all the way out first before I inhale, and I usually just breathe normally after instead of holding my breath for 10 seconds." },
    { id: 'w3-sarah_t-wed_psh', topic: 'Past surgical history', field: 'psh', keywords: ['surgery', 'surgeries', 'surgical', 'operation', 'procedures', 'hospitalization'], response: "I haven't had any surgeries or major procedures." },
    { id: 'w3-sarah_t-wed_drugs', topic: 'Recreational drugs', field: 'drugs', keywords: ['drug', 'drugs', 'recreational', 'illicit', 'marijuana', 'weed', 'substance'], response: "I do not use any recreational or illicit drugs." },
    { id: 'w3-sarah_t-wed_pmh', topic: 'Past medical history', field: 'pmh', keywords: ['past medical', 'medical history', 'other conditions', 'chronic', 'pmh'], response: "Just asthma, allergic rhinitis, and hypertension. No additional conditions beyond those." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3a2_a1', title: 'Asthma Control & Inhaler Technique', icon: 'CheckCircle', color: '13314f', questions: [
      { key: 'q1', q: 'Since she is adherent with ACT 21 but has exercise symptoms and inhaler technique errors, is therapy escalation indicated or should technique be corrected first?', defaultAnswer: 'Asthma is well-controlled to partly controlled (ACT 21); exertional symptoms stem from documented inhaler technique errors (incomplete exhalation before inhalation and lack of breath-hold after inhalation) rather than medication insufficiency. Pharmacologic escalation is not warranted per GINA guidelines; prioritize technique correction with teach-back and maintain current Symbicort SMART therapy.' }
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3a2_p1', title: 'Asthma Maintenance & Technique Plan', options: [
      { key: 'o1', label: 'Maintain current Symbicort SMART therapy (160/4.5 mcg 1 inh BID + 1 inh PRN); prioritize inhaler technique correction with teach-back (fully exhale before inhalation, hold breath for 10 seconds after)', correct: true },
      { key: 'o2', label: 'Escalate therapy to higher-dose ICS-LABA or add tiotropium (LAMA)', correct: false },
      { key: 'o3', label: 'Double albuterol dose before exercise without checking technique', correct: false },
    ] },
    { id: 'w3a2_p2', title: 'Monitoring & Longitudinal Follow-Up', options: [
      { key: 'o1', label: 'Follow up in 4–6 weeks to reassess asthma control, ACT score, symptom burden, and inhaler technique; evaluate step-down eligibility after ≥3 months of sustained control; contact clinic if symptoms worsen', correct: true },
      { key: 'o2', label: 'No follow-up needed unless severe flare occurs', correct: false },
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
  VITALS: { ...sarahTue.VITALS, bp: '120/76', hr: '76', rr: '16', weight: '75 kg', spo2: '99%', spo2Qualifier: 'on room air', bmi: '27.5' },
  LABS: [
    { label: 'FEV1', value: '2.9', unit: 'L (85% pred)', flag: 'normal' },
    { label: 'FEV1/FVC', value: '0.77', flag: 'normal' },
    { label: 'FVC', value: '3.63', unit: 'L', flag: 'normal' }
  ],
  ALERTS: [{ level: 'info', text: 'ACT 22 — Asthma well controlled on SMART therapy. One viral-triggered exacerbation 6 weeks ago (OCS course) represents ongoing future risk despite current good control.' }],
  PROBLEMS: [{ name: 'Asthma', detail: 'Well controlled on SMART (ACT 22). Note: one OCS-requiring exacerbation 6 weeks ago — ongoing future exacerbation risk', flag: 'normal' }],
  MEDICATIONS: [
    { name: 'Budesonide/Formoterol (Symbicort)', dose: '160/4.5 mcg', route: 'Inhaled', freq: '1 inhalation BID and PRN', indication: 'Asthma SMART therapy', notes: '' },
    { name: 'Cetirizine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
    { name: 'Fluticasone nasal spray', dose: '1 spray/nostril', route: 'Intranasal', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
  ],
  IMMUNIZATIONS: sarahTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Follow-up after transitioning to SMART therapy. History of a viral-triggered asthma exacerbation 6 weeks ago requiring an urgent-care visit and a 5-day course of prednisone. Denies any prior hospitalizations for asthma.' },
    { label: 'Social history', value: 'Teacher. Non-smoker. Lives with husband and two kids.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1/FVC 0.77, FEV1 85% predicted. Post-bronchodilator improvement +8% / +160 mL.', flag: 'normal' },
    { label: 'ACT Score', value: '22 — Well controlled. Trend: baseline ACT 16 → 21 → 22.', flag: 'normal' },
  ],
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
    { id: 'w3-sarah_t-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin', 'loratadine', 'cetirizine', 'allergy'], response: "I take cetirizine 10 mg every day and use fluticasone nasal spray daily for my allergies. I also take a daily multivitamin. I used to take loratadine PRN but switched to cetirizine daily." },
    { id: 'w3-sarah_t-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a glass of wine on holidays or special occasions." },
    { id: 'w3-sarah_t-thu_vacc', topic: 'Vaccinations', field: 'vaccines', keywords: ['vaccine', 'vaccines', 'shot', 'flu', 'pneumonia'], response: "I'm pretty sure I got my flu shot at the pharmacy, but you should check my chart." },
    { id: 'w3-sarah_t-thu_drugs', topic: 'Recreational drugs', field: 'drugs', keywords: ['drugs', 'recreational', 'marijuana', 'weed', 'cocaine', 'illicit'], response: "I completely deny any recreational drug use." },
    { id: 'w3-sarah_t-thu_psh', topic: 'Past Surgical History', field: 'psh', keywords: ['surgery', 'surgeries', 'surgical', 'operation', 'operations', 'appendectomy'], response: "I haven't had any surgeries or major procedures." },

    { id: 'w3-sarah_t-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w3-sarah_t-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "I was diagnosed with asthma when I was 8 years old. My brother and sister both have asthma. My mother has asthma and allergic rhinitis. My father has high blood pressure." },
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
  VITALS: { bp: '132/78', bpRepeat: '130/76', hr: '80', rr: '18', temp: '98.4°F', weight: '89 kg', height: "5'10\"", bmi: '28.1', bsa: '2.10', spo2: '95%', spo2Qualifier: 'on room air', flags: {} },
  LABS: [
    { label: 'Eosinophils', value: '310', unit: 'cells/µL', flag: 'normal' },
    { label: 'FEV1', value: '1.86', unit: 'L (62% pred)', flag: 'warn' },
    { label: 'FEV1/FVC', value: '0.58', flag: 'warn' },
    { label: 'FVC', value: '3.2', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'warn', text: 'Patient is highly symptomatic (mMRC not formally assessed) but is not on a maintenance long-acting bronchodilator. CAT score 18.' }],
  PROBLEMS: [
    { name: 'COPD', detail: 'GOLD Group B (CAT ≥10, ≤1 moderate exacerbation in past year, no hospitalization)', flag: 'warn' },
    { name: 'Hypertension', detail: 'Controlled', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'Controlled', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Albuterol HFA', dose: '2 puffs', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'COPD rescue', notes: 'Frequent use' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented', flag: 'warn' },
    { name: 'RSV', status: 'Not documented', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Complains of shortness of breath on exertion (winded walking to mailbox). History of 1 moderate COPD exacerbation in the past 12 months, treated with oral corticosteroids and antibiotics without hospitalization. No maintenance bronchodilator therapy has been started due to $300 cost barrier; patient relies on albuterol PRN. Denies recent hospitalizations or emergency department visits.' },
    { label: 'Past Medical History', value: 'COPD (~4 years), Hypertension (~12 years, on lisinopril), Hyperlipidemia (~10 years, on atorvastatin). Past surgical history: appendectomy.' },
    { label: 'Social history', value: 'Married, lives with spouse. Retired automotive mechanic (occupational dust/fume exposure). Former smoker (45 pack-years, sustained cessation for 5 years; denies cravings; no cessation pharmacotherapy needed). Denies recreational drug use.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1/FVC 0.58, FEV1 62% predicted (GOLD Grade 2 — Moderate)', flag: 'warn' },
    { label: 'CAT Score', value: '18 — High symptom burden', flag: 'warn' },
  ],
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
    { id: 'w3-bob_j-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My brother has COPD. My father had both COPD and coronary artery disease (CAD). My mother had high blood pressure." },
    { id: 'w3b_maint', topic: 'Maintenance therapy', field: 'maintenance', keywords: ['daily', 'inhaler', 'prescribed', 'tiotropium', 'spiriva', 'laba', 'lama'], response: "The doctor gave me a script for some combination inhaler a while back, but when I went to the pharmacy, it was $300. I left it there. I just use the albuterol." },
    { id: 'w3b_cost', topic: 'Cost barrier', field: 'cost', keywords: ['cost', 'afford', 'expensive', 'money', 'pay'], response: "Yeah, I can't afford hundreds of dollars for an inhaler on a fixed income. The albuterol is cheap, so I stick with that." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w3b_a1', 
      title: 'COPD Maintenance & Cost Navigation', 
      icon: 'Lungs', 
      color: '13314f', 
      questions: [
        { key: 'q1', q: 'What is the appropriate initial therapy for this highly symptomatic patient per GOLD?', defaultAnswer: 'Bob has symptomatic moderate COPD (GOLD Grade 2, Group B: FEV1 62% pred, FEV1/FVC 0.58, CAT 18, 1 moderate exacerbation without hospitalization) secondary to a 45 pack-year smoking history (sustained 5-year cessation; congratulate patient; no cessation pharmacotherapy indicated). The clinical priority is addressing non-initiation due to a $300 cost barrier rather than treatment failure. Initial maintenance therapy with a dual bronchodilator (LABA/LAMA) is indicated per GOLD 2026 guidelines.' },
        { key: 'q2', q: 'How does cost affect the plan?', defaultAnswer: 'Evaluate formulary coverage and copay assistance programs to prescribe an affordable LABA/LAMA combination (target copay ≤$20) and provide inhaler technique instruction.' }
      ] 
    },
    { id: 'w3b_a2', title: 'Hypertension', icon: 'HeartPulse', color: 'dc2626', questions: [{ key: 'q3', q: 'Is his blood pressure currently at goal?', defaultAnswer: 'BP is 132/78 mmHg (repeat 130/76), well-controlled on lisinopril 20 mg daily with goal <130/80 mmHg.' }] },
    { id: 'w3b_a3', title: 'Hyperlipidemia', icon: 'Activity', color: 'f59e0b', questions: [{ key: 'q4', q: 'Is he on appropriate statin therapy?', defaultAnswer: 'Atorvastatin 20 mg daily is appropriate for primary ASCVD prevention; lipid profile stable.' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b_p1', title: 'COPD Pharmacotherapy & Technique Plan', options: [
      { key: 'o1', label: 'Initiate affordable LABA/LAMA combination (e.g., umeclidinium/vilanterol Anoro Ellipta 62.5/25 mcg 1 inh daily or formulary alternative with copay assistance) and demonstrate proper inhaler technique; continue albuterol HFA 2 puffs q4-6h PRN for rescue', correct: true },
      { key: 'o2', label: 'Prescribe triple therapy (LABA/LAMA/ICS)', correct: false },
      { key: 'o3', label: 'Prescribe daily oral prednisone', correct: false },
    ] },
    { id: 'w3b_p2', title: 'Comorbidity Management & Tobacco Cessation', options: [
      { key: 'o4', label: 'Continue current Lisinopril 20 mg PO daily (BP goal <130/80 mmHg) and Atorvastatin 20 mg PO daily; congratulate patient on sustained 5-year smoking cessation and reinforce lifelong abstinence to slow lung decline (no cessation pharmacotherapy needed)', correct: true },
      { key: 'o5', label: 'Increase dose of Atorvastatin', correct: false },
    ] },
    { id: 'w3b_p3', title: 'Preventive Care, Monitoring & Follow-Up', options: [
      { key: 'o6', label: 'Recommend PCV20 and RSV vaccinations (due/not documented per GOLD); schedule follow-up in 4–8 weeks to reassess dyspnea, CAT score (goal <10), inhaler adherence, affordability/fill confirmation, and clinical response before considering changes; monitor periodic spirometry per GOLD schedule', correct: true },
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
  VITALS: { bp: '130/76', bpRepeat: '130/76', hr: '78', rr: '18', temp: '98.4°F', weight: '89 kg', height: "5'10\"", bmi: '28.1', bsa: '2.10', spo2: '95%', spo2Qualifier: 'on room air', flags: {} },
  LABS: [
    { label: 'Eosinophils', value: '310', unit: 'cells/µL', flag: 'normal' },
    { label: 'FEV1', value: '1.8', unit: 'L (63% pred)', flag: 'warn' },
    { label: 'FEV1/FVC', value: '0.58', flag: 'warn' },
    { label: 'FVC', value: '3.1', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'warn', text: 'COPD symptoms persistent despite LAMA/LABA dual bronchodilator therapy (umeclidinium/vilanterol) — evaluate inhaler technique and device adherence before considering escalation.' }],
  PROBLEMS: [{ name: 'COPD', detail: 'Symptomatic despite LAMA/LABA (Anoro Ellipta — dual bronchodilator)', flag: 'warn' }],
  MEDICATIONS: [
    ...bobTue.MEDICATIONS,
    { name: 'Umeclidinium/Vilanterol (Anoro Ellipta)', dose: '62.5/25 mcg', route: 'Inhaled', freq: 'daily', indication: 'COPD maintenance', notes: 'Newly started' },
  ],
  IMMUNIZATIONS: bobTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient reports only mild, suboptimal improvement in dyspnea since starting umeclidinium/vilanterol (Anoro Ellipta) 62.5/25 mcg 1 inhalation daily. Denies any exacerbations, hospitalizations, or events requiring antibiotics or OCS. Patient has 3 chronic conditions: COPD (diagnosed 4 years ago), HTN (diagnosed 12 years ago, on lisinopril), and Hyperlipidemia (diagnosed 10 years ago). Past surgical history includes an appendectomy. Absence of diabetes or cardiac disease.' },
    { label: 'Social history', value: 'Married, lives with spouse. Retired automotive mechanic (occupational exposure). Former smoker (45 pack-years, quit 5 years ago). Denies recreational drug use.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1/FVC 0.58, FEV1 63% predicted', flag: 'warn' },
    { label: 'CAT Score', value: '16 — High symptom burden', flag: 'warn' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'technique', label: 'Inhaler Technique', placeholder: 'Ask him to demonstrate how he uses the Anoro Ellipta' },
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
    { id: 'w3-bob_j-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My brother has COPD. My father had both COPD and coronary artery disease (CAD). My mother had high blood pressure." },
    { id: 'w3b2_adh', topic: 'Adherence', field: 'adherence', keywords: ['take', 'every day', 'daily', 'miss', 'forget', 'reminder', 'routine'], response: "I try to take it every day, but honestly I forget sometimes. I\'d say I probably take it about 3 or 4 days a week. I don\'t have a good reminder system set up yet." },
    { id: 'w3b2_tech', topic: 'Inhaler technique', field: 'technique', keywords: ['show', 'demonstrate', 'how', 'use', 'technique', 'capsule', 'ellipta'], response: "I slide the cover down until it clicks. Then I breathe out really hard, blowing the air right into the mouthpiece, and then I take a breath in." },
    { id: 'w3b2_cravings', topic: 'Tobacco cravings', field: 'cravings', keywords: ['craving', 'cravings', 'smoke', 'desire', 'restart'], response: "I have no cravings or desire to start smoking again. I've been smoke-free for 5 years." },
    { id: 'w3b2_exertion', topic: 'Exertional dyspnea & activities', field: 'exertion', keywords: ['stairs', 'groceries', 'household', 'activity', 'walk', 'projects'], response: "I still get short of breath climbing stairs, carrying heavy grocery bags, or working on household projects. I've had to slow down and avoid strenuous tasks." },
    { id: 'w3b2_rescue_trend', topic: 'Rescue inhaler use', field: 'rescue_trend', keywords: ['rescue', 'albuterol', 'trend', 'frequency'], response: "I still use the albuterol PRN, maybe once a day or a few times a week, which is a bit less than before." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w3b2_a1', 
      title: 'COPD Control, Technique & Adherence Assessment', 
      icon: 'AlertTriangle', 
      color: 'd97706', 
      questions: [
        { key: 'q1', q: 'How should his persistent symptoms be evaluated within the GOLD framework, and what is the primary clinical problem?', defaultAnswer: 'Bob has COPD (GOLD Grade 2, Group B: FEV1 63%, CAT 16, 0 exacerbations). Suboptimal symptom response is explained by implementation barriers: inhaler technique error (blowing into mouthpiece rather than inhaling deeply) and subtherapeutic adherence (taking Anoro 3–4 days/week due to forgetfulness). These implementation barriers preclude interpreting symptoms as true pharmacologic treatment failure; zero exacerbations argue against escalation to triple therapy. Defer therapy escalation per GOLD 2026; optimize technique and daily adherence first before reassessing drug efficacy.' }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b2_p1', title: 'COPD Maintenance & Inhaler Technique Plan', options: [
      { key: 'o1', label: 'Continue Anoro Ellipta (umeclidinium/vilanterol 62.5/25 mcg 1 inh daily) without escalation per GOLD Group B guidelines; correct inhaler technique with teach-back: breathe IN deeply and steadily, do not blow into the device; review daily maintenance vs PRN rescue albuterol purpose', correct: true },
      { key: 'o2', label: 'Switch to a different inhaler or escalate to triple therapy immediately', correct: false },
    ] },
    { id: 'w3b2_p2', title: 'Adherence Optimization & Education Plan', options: [
      { key: 'o3', label: 'Establish behavioral adherence routine: pair daily morning inhaler with morning coffee maker, phone alarms, and visual cues; educate on realistic treatment timeline (gradual benefit over days to weeks); reinforce continued smoking abstinence', correct: true },
    ] },
    { id: 'w3b2_p3', title: 'Preventive Care, Monitoring & Follow-Up', options: [
      { key: 'o4', label: 'Recommend PCV20, RSV, and Tdap booster vaccinations to reduce respiratory infection risk; follow-up in 4–8 weeks (~3 months) to reassess dyspnea, activity tolerance, CAT score, rescue albuterol use, adherence, and inhaler technique; consider therapy adjustment only if symptoms persist despite verified technique and daily adherence', correct: true },
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
  VITALS: { bp: '128/76', bpRepeat: '128/76', hr: '82', rr: '18', temp: '98.4°F', weight: '89 kg', height: "5'10\"", bmi: '28.1', bsa: '2.10', spo2: '94%', spo2Qualifier: 'on room air', flags: {} },
  LABS: [
    { label: 'Eosinophils', value: '310', unit: 'cells/µL', flag: 'warn', note: 'Above 300 cells/µL threshold — favors ICS benefit per GOLD' },
    { label: 'FEV1', value: '1.8', unit: 'L (60% pred)', flag: 'warn' },
    { label: 'FEV1/FVC', value: '0.57', flag: 'warn' },
    { label: 'FVC', value: '3.16', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'warn', text: 'Recurrent exacerbations despite LAMA/LABA dual bronchodilator therapy (Anoro Ellipta). Eosinophils 310 cells/µL — consider ICS escalation (triple therapy) based on eosinophil count and frequent exacerbator pattern.' }],
  PROBLEMS: [{ name: 'COPD', detail: 'Frequent exacerbations, high symptom burden (CAT 17, eosinophils 310)', flag: 'high' }],
  MEDICATIONS: bobWed.MEDICATIONS,
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented', flag: 'warn' },
    { name: 'RSV', status: 'Not documented', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient reports persistent dyspnea and frequent albuterol use despite compliance with umeclidinium/vilanterol (Anoro Ellipta) 62.5/25 mcg 1 inhalation daily. History of 2 exacerbations in the past 3 months, and 3 exacerbations in the past 12 months. The first exacerbation was treated with OCS and antibiotics. The second exacerbation required an urgent care visit and OCS.' },
    { label: 'Social history', value: 'Married, lives with spouse. Retired automotive mechanic (occupational exposure). Former smoker (45 pack-years, quit 5 years ago). Denies recreational drug use.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1/FVC 0.56, FEV1 61% predicted (post-bronchodilator; baseline FEV1 60%)', flag: 'warn' },
    { label: 'CAT Score', value: '17 — High COPD symptom burden', flag: 'warn' },
  ],
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
    { id: 'w3-bob_j-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My brother has COPD. My father had both COPD and coronary artery disease (CAD). My mother had high blood pressure." },
    { id: 'w3b3_sym', topic: 'Symptoms', field: 'symptoms', keywords: ['exacerbation', 'rescue', 'albuterol', 'feel', 'breathing'], response: "I still use my albuterol almost every day, and I've had a couple of flare-ups recently. I'm really starting to get worried that my lung function is dropping and my COPD is getting worse." },
    { id: 'w3b3_adherence', topic: 'Adherence', field: 'adherence', keywords: ['adherence', 'take', 'taking', 'miss', 'forget', 'every day', 'routine', 'reminder'], response: "I take the Anoro inhaler every single morning. I know I used to miss my old inhaler, only taking it 3 or 4 days a week, but now my wife puts it right next to my coffee mug as a reminder so I never forget." },
    { id: 'w3b3_goals', topic: 'Goals', field: 'goals', keywords: ['goal', 'goals', 'hope', 'want', 'expect'], response: "My main goal right now is just to stop having these exacerbations and stay out of the urgent care." },
    { id: 'w3b3_affordability', topic: 'Affordability & access', field: 'affordability', keywords: ['afford', 'cost', 'copay', 'refill', 'access', 'expensive'], response: "Medication affordability is fine now, $20 copay, and I have no trouble picking up or refilling my prescriptions." },
    { id: 'w3b3_adverse', topic: 'Medication adverse effects', field: 'adverse', keywords: ['side effect', 'side effects', 'adverse', 'tolerance'], response: "I haven't noticed any new side effects or problems from the inhaler." },
    { id: 'w3b3_cravings', topic: 'Tobacco cravings', field: 'cravings', keywords: ['craving', 'cravings', 'smoke', 'desire', 'restart'], response: "I have no desire or cravings to start smoking again." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w3b3_a1', 
      title: 'COPD Triple Therapy Escalation Assessment', 
      icon: 'AlertTriangle', 
      color: 'd97706', 
      questions: [
        { key: 'q1', q: 'Should therapy be escalated to triple therapy (add ICS to LABA/LAMA)?', defaultAnswer: 'Bob has COPD with frequent exacerbations (2 in past 3 months, 3 in past 12 months) and high symptom burden (CAT 17, FEV1 60%) despite verified daily adherence (coffee mug routine) and correct inhaler technique on Anoro Ellipta. Blood eosinophils are 310 cells/µL, exceeding the GOLD threshold (≥300 cells/µL) that strongly predicts ICS benefit. Escalation to single-inhaler triple therapy (Trelegy Ellipta: fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg 1 inh daily) is indicated per GOLD 2026 guidelines. Reinforce sustained 5-year smoking cessation (slows disease progression) and update overdue immunizations.' }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b3_p1', title: 'Triple Inhaled Pharmacotherapy Plan', options: [
      { key: 'o1', label: 'Escalate to single-inhaler triple therapy: Trelegy Ellipta (fluticasone furoate/umeclidinium/vilanterol) 100/62.5/25 mcg 1 inhalation daily; continue albuterol HFA 2 puffs q4-6h PRN for rescue (target reduced rescue reliance); instruct patient to rinse mouth with water and spit after each inhalation to prevent oral candidiasis; continue established coffee-mug daily adherence routine', correct: true },
      { key: 'o2', label: 'Continue Anoro Ellipta dual therapy unchanged', correct: false },
    ] },
    { id: 'w3b3_p2', title: 'Action Plan, Tobacco Cessation & Preventive Care', options: [
      { key: 'o3', label: 'Review written COPD action plan and early recognition of worsening symptoms/infection avoidance; congratulate on 5-year sustained smoking cessation and encourage lifelong abstinence to slow decline; recommend PCV20, RSV, and Tdap booster vaccinations to reduce respiratory infection risk', correct: true },
    ] },
    { id: 'w3b3_p3', title: 'Monitoring & Longitudinal Follow-Up', options: [
      { key: 'o4', label: 'Schedule follow-up in 4–8 weeks (~3 months) to monitor dyspnea, activity tolerance, rescue albuterol frequency, medication adherence, inhaler technique, and screen for ICS-related adverse effects (oral thrush, dysphonia, pneumonia); continue longitudinal COPD management', correct: true },
    ] },
  ],
})


/* ============================ MARIA THOMPSON (C) ============================ */
// Asthma-COPD Overlap (ACO). Recurrent exacerbations on triple therapy. Eosinophilic.

const mariaTue = makeCase({
  id: 'w3-maria_t-tue',
  PATIENT: { name: 'Maria Thompson', age: 69, sex: 'female', ethnicity: 'Hispanic', mrn: 'W3-99211', allergiesSummary: 'Sulfonamide antibiotics (Rash — Moderate)' },
  ENCOUNTER: { week: 'Week 3', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I keep getting these chest infections and flare-ups.",
    snapshotSummary: 'Maria has Asthma-COPD Overlap. She is on LAMA and PRN albuterol, but is having frequent exacerbations. She needs ICS therapy due to her asthma component.',
    diseaseStates: ['Asthma-COPD Overlap', 'Allergic Rhinitis'],
    learningObjectives: ['Recognize ACO phenotype', 'Identify the mandatory role of ICS in patients with an asthma component'],
  },
  VITALS: { bp: '126/74', bpRepeat: '124/72', hr: '80', rr: '18', temp: '98.6°F', weight: '71 kg', height: "5'4\"", bmi: '26.9', bsa: '1.79', spo2: '95%', spo2Qualifier: 'on room air', flags: {} },
  LABS: [
    { label: 'Absolute Eosinophils', value: '420', unit: 'cells/µL', flag: 'high' },
    { label: 'FEV1', value: '1.45', unit: 'L (58% pred)', flag: 'warn', note: 'Post-bronchodilator' },
    { label: 'FEV1/FVC', value: '0.55', flag: 'warn', note: 'Post-bronchodilator (Pre-BD was 0.54)' },
    { label: 'FVC', value: '2.63', unit: 'L', flag: 'warn' }
  ],
  ALLERGIES: [{ substance: 'Sulfonamide antibiotics', reaction: 'Rash', severity: 'Moderate', type: 'Allergy', date: 'Past', source: 'Patient reported' }],
  ALERTS: [{ level: 'high', text: 'Patient has ACO and frequent exacerbations but is NOT on an inhaled corticosteroid.' }],
  PROBLEMS: [
    { name: 'Asthma-COPD Overlap (ACO)', detail: 'Frequent exacerbations (2 in past year)', flag: 'high' },
    { name: 'Allergic rhinitis', detail: 'Stable', flag: 'normal' },
    { name: 'Hypertension', detail: 'Controlled', flag: 'normal' },
    { name: 'Osteopenia', detail: 'Stable', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Tiotropium (Spiriva Respimat)', dose: '2.5 mcg', route: 'Inhaled', freq: '2 puffs daily', indication: 'COPD (ACO)', notes: '' },
    { name: 'Albuterol HFA', dose: '2 puffs', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'Rescue', notes: '' },
    { name: 'Fluticasone propionate nasal spray', dose: '50 mcg/spray, 2 sprays/nostril', route: 'Intranasal', freq: 'daily', indication: 'Allergic rhinitis', notes: 'Inconsistent use reported' },
    { name: 'Lisinopril', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Hypertension', notes: '' },
    { name: 'Calcium carbonate', dose: '500 mg', route: 'PO', freq: 'BID with meals', indication: 'Osteopenia prevention', notes: 'Also contains vitamin D 400 IU per tablet' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'PCV20 (Pneumococcal)', status: 'Received', flag: 'normal' },
    { name: 'RSV', status: 'Not documented', flag: 'warn' },
    { name: 'Tdap', status: 'Overdue — last received >10 years ago', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'History of asthma since childhood, COPD diagnosed 8 years ago (ACO phenotype). Past medical history includes Allergic Rhinitis, Hypertension, Osteopenia, and Cholecystectomy. Allergy: sulfonamide antibiotics (rash). Reports 2 exacerbations in the past 12 months, both treated with oral corticosteroids and antibiotics in the outpatient setting — neither required hospitalization.' },
    { label: 'Social', value: 'Former smoker (30 pack-years, quit 12 years ago). Married, lives with spouse. Retired elementary-school principal. Drinks alcohol rarely. Denies recreational drug use.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'Pre-BD FEV1/FVC 0.54 → Post-BD 0.55, FEV1 58% predicted. Bronchodilator reversibility: +15% / +260 mL (meets GINA criteria)', flag: 'warn' },
    { label: 'ACT Score', value: '15 — Poorly controlled asthma', flag: 'warn' },
    { label: 'CAT Score', value: '19 — High COPD symptom burden', flag: 'warn' },
  ],
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
    { id: 'w3-maria_t-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'sulfonamide', 'codeine', 'reaction', 'rash', 'hives'], response: "Yes, I have a severe allergy to sulfonamide antibiotics — I get a terrible rash when I take them. My doctor told me to always mention this." },
    { id: 'w3-maria_t-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin', 'calcium', 'vitamin d', 'lisinopril', 'blood pressure', 'nasal'], response: "I take cetirizine 10 mg PRN and sometimes use a saline nasal spray. I also use fluticasone nasal spray for my rhinitis when I remember to. I take lisinopril 10 mg once a day for blood pressure and calcium carbonate with vitamin D twice a day with meals for my bone health." },
    { id: 'w3-maria_t-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol rarely, maybe a glass of wine a few times a year." },
    { id: 'w3-maria_t-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 30 years before I quit 12 years ago. That\'s a 30 pack-year history." },
    { id: 'w3-maria_t-tue_drugs', topic: 'Recreational drugs', field: 'drugs', keywords: ['drugs', 'recreational', 'marijuana', 'weed', 'cocaine', 'illicit'], response: "I deny any recreational drug use." },
    { id: 'w3-maria_t-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had both COPD and coronary artery disease (CAD). My mother had asthma and allergic rhinitis. My sister also has asthma." },
    { id: 'w3c_tech', topic: 'Technique', field: 'technique', keywords: ['technique', 'use', 'show', 'worry', 'decline', 'spiriva', 'respimat'], response: "I turn the base until it clicks, then press the button on the side to release the dose, and then I inhale slowly and deeply. I\'m really worried that these flare-ups are causing a progressive decline in my lung function, and I want to avoid being hospitalized." },
    { id: 'w3c_exac', topic: 'Exacerbations', field: 'exacerbations', keywords: ['flare', 'infection', 'prednisone', 'hospital', 'exacerbation'], response: "I have symptoms on most days. I wake up at night from symptoms about twice a week. I have difficulty climbing stairs, walking uphill, and doing prolonged activities. I\'ve had 2 exacerbations in the past year — both times I was treated with prednisone and antibiotics at the clinic. Neither one required going to the hospital or the emergency room." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w3c_a1', title: 'ACO Pharmacotherapy Initiation', icon: 'Lungs', color: '7c3aed', questions: [
      { key: 'q1', q: 'Why is an inhaled corticosteroid (ICS) mandatory in asthma-COPD overlap (ACO)?' },
      { key: 'q2', q: 'What is the appropriate initial maintenance escalation (initiate Trelegy Ellipta or add ICS/LABA to LAMA)?' }
    ] },
    { id: 'w3c_a2', title: 'Allergic Rhinitis', icon: 'Wind', color: '0d9488', questions: [
      { key: 'q1', q: 'Is her current allergic rhinitis management adequate?' }
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3c_p1', title: 'ACO Inhaled Maintenance Plan', options: [
      { key: 'o1', label: 'Initiate Trelegy Ellipta (fluticasone/umeclidinium/vilanterol) 100/62.5/25 mcg 1 inhalation daily (or add Symbicort to Spiriva) and demonstrate inhaler technique', correct: true },
      { key: 'o2', label: 'Continue Spiriva Respimat alone without adding an inhaled corticosteroid', correct: false },
      { key: 'o3', label: 'Start chronic daily oral prednisone', correct: false },
    ] },
    { id: 'w3c_p2', title: 'Allergic Rhinitis Plan', options: [
      { key: 'o1', label: 'Re-educate on consistent daily fluticasone nasal spray and continue cetirizine PRN', correct: true },
      { key: 'o2', label: 'Discontinue fluticasone nasal spray and cetirizine', correct: false },
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
    diseaseStates: ['ACO', 'Allergic Rhinitis', 'Hypertension', 'Osteopenia'],
    learningObjectives: ['Identify biologic candidacy for severe eosinophilic exacerbating disease (MATINEE)', 'Implement corticosteroid stewardship and comorbidity management in severe ACO'],
  },
  VITALS: { bp: '126/74', bpRepeat: '124/72', hr: '80', rr: '18', temp: '98.6°F', weight: '71 kg', height: "5'4\"", bmi: '26.9', bsa: '1.79', spo2: '95%', spo2Qualifier: 'on room air', flags: {} },
  LABS: [
    { label: 'Absolute Eosinophils', value: '520', unit: 'cells/µL', flag: 'high', note: 'Rising from baseline 420 — highly elevated, supports biologic candidacy' },
    { label: 'FEV1', value: '1.52', unit: 'L (61% pred)', flag: 'warn', note: 'Post-bronchodilator' },
    { label: 'FEV1/FVC', value: '0.56', flag: 'warn', note: 'Post-bronchodilator' },
    { label: 'FVC', value: '2.71', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'high', text: 'Continued exacerbations despite optimized triple inhaled therapy. Eosinophils rising to 520 — strongly supports biologic (anti-IL-5) candidacy.' }],
  PROBLEMS: [
    { name: 'Asthma-COPD Overlap (ACO)', detail: 'Severe eosinophilic, frequent exacerbations despite verified adherence on Trelegy Ellipta', flag: 'high' },
    { name: 'Asthma', detail: 'Childhood-onset (diagnosed age 7), severe persistent component', flag: 'high' },
    { name: 'COPD', detail: 'Diagnosed ~8 years ago, post-BD FEV1/FVC 0.56, 30 pack-year smoking history', flag: 'warn' },
    { name: 'Allergic rhinitis', detail: 'Symptomatic / uncontrolled after stopping nasal corticosteroid', flag: 'warn' },
    { name: 'Hypertension', detail: 'Controlled on lisinopril 10 mg daily (BP 126/74)', flag: 'normal' },
    { name: 'Osteopenia', detail: 'At elevated fracture risk from repeated systemic OCS bursts', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Fluticasone/Umeclidinium/Vilanterol (Trelegy Ellipta)', dose: '100/62.5/25 mcg', route: 'Inhaled', freq: '1 inhalation daily in morning', indication: 'Severe ACO maintenance', notes: 'Verified excellent adherence and technique' },
    { name: 'Albuterol HFA', dose: '90 mcg (2 puffs)', route: 'Inhaled', freq: 'q4-6h PRN shortness of breath', indication: 'Rescue bronchodilator', notes: 'Uses 3-4 times/week' },
    { name: 'Cetirizine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
    { name: 'Lisinopril', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Hypertension', notes: 'BP at goal <130/80' },
    { name: 'Calcium carbonate + Vitamin D3', dose: '500 mg / 400 IU', route: 'PO', freq: 'BID with meals', indication: 'Osteopenia / bone health', notes: 'Continue for skeletal protection' },
  ],
  IMMUNIZATIONS: mariaTue.IMMUNIZATIONS,
  ALLERGIES: [{ substance: 'Sulfonamide antibiotics', reaction: 'Rash', severity: 'Moderate', type: 'Allergy', date: 'Past', source: 'Patient reported' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Maria presents for 3-month follow-up for severe Asthma-COPD Overlap (ACO). She reports persistent exertional dyspnea, daily cough with clear sputum, and had 1 moderate exacerbation 4 weeks ago treated with oral prednisone (40 mg daily x 5 days) and antibiotics, totaling 2 exacerbations in past 12 months (one requiring hospitalization). She experiences severe insomnia and jitteriness when taking prednisone and strongly desires to avoid future oral corticosteroid bursts. She confirms daily adherence to Trelegy Ellipta 100/62.5/25 mcg (uses every morning, verified Ellipta technique, rinses mouth with water after each use) and uses rescue albuterol 3–4 times weekly. Allergic rhinitis symptoms (sneezing, rhinorrhea, nasal congestion) are active and uncontrolled since stopping fluticasone nasal spray 6 months ago.' },
    { label: 'Past Medical History', value: '1. Asthma: diagnosed in childhood at age 7, severe persistent component.\n2. Chronic Obstructive Pulmonary Disease (COPD): diagnosed ~8 years ago, post-BD FEV1/FVC 0.56, 30 pack-year smoking history.\n3. Allergic Rhinitis: ~15 years duration, worsened without nasal spray.\n4. Hypertension: ~10 years duration, stable on lisinopril 10 mg daily.\n5. Osteopenia: ~3 years duration, at elevated risk from repeated OCS bursts.\nNo other chronic medical conditions beyond those listed.' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (laparoscopic gallbladder removal age 58). Denies prior cardiothoracic, pulmonary, or vascular surgeries.' },
    { label: 'Social history', value: 'Former cigarette smoker (1 pack/day for 30 years = 30 pack-years; quit 12 years ago; denies cravings or tobacco use). Denies recreational or illicit drug use. Drinks alcohol rarely (1 glass of wine 2–3 times/year). Retired elementary-school principal; lives with supportive spouse. Physical activity: walks 20–30 minutes daily around neighborhood for exercise, though limited by exertional dyspnea when walking uphill or climbing stairs.' },
    { label: 'Medication Reconciliation & Affordability', value: 'Reconciled 5 active medications: Trelegy Ellipta 100/62.5/25 mcg 1 inh daily, albuterol HFA 90 mcg 2 puffs q4-6h PRN, cetirizine 10 mg PO daily, lisinopril 10 mg PO daily, calcium carbonate 500 mg + vit D3 400 IU PO BID. Confirms all medications are affordable ($20 copay for Trelegy). Denies adverse drug effects (no tremors, palpitations, oral thrush, or dysphonia).' },
    { label: 'Patient Goals', value: 'Highly motivated to reduce or eliminate future exacerbations, avoid oral prednisone bursts and their unpleasant side effects (insomnia, jitteriness), prevent hospitalizations, and maintain daily walking independence.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Vitals', value: 'BP 126/74 mmHg (sitting, right arm), HR 80 bpm regular, RR 18 breaths/min unlabored, Temp 98.6°F oral, SpO2 95% on room air', flag: 'normal' },
    { label: 'Spirometry', value: 'FEV1 1.52 L (61% predicted, GOLD Grade 2 moderate obstruction), FEV1/FVC 0.56 (<0.70 confirming persistent airflow obstruction, post-bronchodilator)', flag: 'warn' },
    { label: 'Biomarkers', value: 'Absolute blood eosinophils 520 cells/µL (elevated Type 2 airway inflammation, rising from 420 cells/µL, exceeding the >=300 cells/µL threshold)', flag: 'high' },
    { label: 'ACT Score', value: '17 — Partly controlled asthma component (<20 threshold)', flag: 'warn' },
    { label: 'CAT Score', value: '15 — Moderate COPD symptom burden (>=10 threshold)', flag: 'warn' },
    { label: 'Immunization Status', value: 'Influenza (current season) and COVID-19 up to date; PCV20 received last year. Gaps flagged: RSV vaccine not documented (recommended for age >=60 with chronic lung disease); Tdap booster overdue (>10 years since last tetanus toxoid).', flag: 'warn' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Adherence / Technique', placeholder: 'Are you sure she is taking it?' },
    { key: 'goals', label: 'Patient Goals & Steroid Concerns', placeholder: 'What are her goals regarding treatment?' },
  ],
  COUNSELING: [
    { id: 'c1', title: 'Targeted Biologic Therapy & Steroid Stewardship', body: [
      "Your breathing tests and lab results show rising blood eosinophils (520 cells/µL) and ongoing flare-ups despite perfect use of your triple inhaler. We recommend stepping up to an add-on targeted biologic therapy (mepolizumab / Nucala) that specifically blocks eosinophilic inflammation, proven in the MATINEE trial to reduce flare-ups and prevent the need for prednisone bursts and their side effects." ] }
  ],
  GUIDING_QUESTIONS: [
    'What evidence confirms that current triple inhaled therapy is insufficient?',
    'Why is biologic therapy (anti-IL-5, mepolizumab) indicated for this patient?',
    'How does the MATINEE trial support mepolizumab in eosinophilic COPD/ACO?',
    'What corticosteroid stewardship and comorbidity management goals should be addressed?',
    'What structured monitoring and follow-up plan should be established?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-maria_t-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'sulfonamide', 'codeine', 'reaction', 'rash', 'hives'], response: "Yes, I have a severe allergy to sulfonamide antibiotics — I get a terrible rash when I take them." },
    { id: 'w3-maria_t-wed_pmh', topic: 'Medical history', field: 'pmh', keywords: ['past medical history', 'history', 'asthma', 'copd', 'diagnosed', 'duration', 'childhood', 'years'], response: "I have had asthma since childhood (diagnosed around age 7). About 8 years ago, I was also diagnosed with COPD due to my past smoking history. I also have allergic rhinitis for about 15 years, hypertension for 10 years, and osteopenia diagnosed 3 years ago. No other medical conditions." },
    { id: 'w3-maria_t-wed_psh', topic: 'Past surgical history', field: 'psh', keywords: ['surgery', 'surgeries', 'surgical', 'operation', 'gallbladder', 'cholecystectomy'], response: "I had my gallbladder removed (laparoscopic cholecystectomy) when I was 58. I have never had any lung, chest, or heart surgeries." },
    { id: 'w3-maria_t-wed_meds', topic: 'Current medications & Affordability', field: 'medications', keywords: ['medications', 'reconciliation', 'trelegy', 'albuterol', 'cetirizine', 'lisinopril', 'calcium', 'vitamin d', 'cost', 'copay', 'afford'], response: "I take Trelegy Ellipta 100/62.5/25 mcg 1 puff every morning, albuterol HFA 2 puffs as needed for rescue, cetirizine 10 mg daily for allergies, lisinopril 10 mg daily for blood pressure, and calcium carbonate 500 mg with vitamin D3 400 IU twice daily for my bones. My copay for Trelegy is $20 with insurance, so all my medicines are affordable." },
    { id: 'w3-maria_t-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take cetirizine 10 mg daily and calcium with vitamin D. I used to use fluticasone nasal spray for allergic rhinitis, but I stopped it about 6 months ago, and now my sneezing and congestion are terrible." },
    { id: 'w3-maria_t-wed_pred', topic: 'Prednisone side effects & Steroid concerns', field: 'steroids', keywords: ['prednisone', 'burst', 'side effects', 'insomnia', 'jittery', 'steroid', 'corticosteroid'], response: "Whenever I have a flare-up and have to take prednisone, I get terrible insomnia and severe jitteriness. It makes me feel awful, and I worry about what repeated steroid bursts are doing to my bones since I already have osteopenia. My biggest goal is to stop having these flare-ups so I never have to take prednisone again." },
    { id: 'w3-maria_t-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol rarely, maybe a glass of wine a few times a year." },
    { id: 'w3-maria_t-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 30 years before I quit 12 years ago. That\'s a 30 pack-year history. I never smoke anymore and have zero cravings." },
    { id: 'w3-maria_t-wed_drugs', topic: 'Illicit drug use denial', field: 'drugs', keywords: ['drug', 'drugs', 'illicit', 'recreational', 'marijuana', 'cocaine', 'substance'], response: "No, I have never used any recreational or illicit drugs." },
    { id: 'w3-maria_t-wed_activity', topic: 'Physical activity & Exercise', field: 'activity', keywords: ['exercise', 'walk', 'walking', 'activity', 'physical'], response: "I try to walk 20 to 30 minutes every day around my neighborhood. I get winded and have to slow down when walking uphill or climbing stairs, but I want to stay active." },
    { id: 'w3-maria_t-wed_tech', topic: 'Inhaler technique', field: 'technique', keywords: ['technique', 'trelegy', 'inhaler', 'show', 'demonstrate', 'how', 'ellipta', 'use', 'steps'], response: "I open the cover by sliding it down until I hear a click, which loads the dose. Then I breathe out fully away from the inhaler, seal my lips around the mouthpiece, and breathe in steadily and deeply. I hold my breath for about 5 seconds, then close the cover. I rinse my mouth with water afterward every time." },
    { id: 'w3-maria_t-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had both COPD and coronary artery disease (CAD). My mother had asthma and allergic rhinitis. My sister also has asthma." },
    { id: 'w3c2_adh', topic: 'Adherence verified', field: 'adherence', keywords: ['take', 'every day', 'daily', 'miss'], response: "I never miss a dose. I use it every morning exactly like you showed me. I even rinse my mouth after." },
    { id: 'w3-maria_t-wed_goals', topic: 'Patient goals & motivation', field: 'goals', keywords: ['goal', 'goals', 'motivation', 'want', 'hope', 'future'], response: "My main goals are to stop having flare-ups, stay out of the hospital, avoid prednisone and its terrible jitteriness and insomnia, and be able to walk without getting winded." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w3c2_a1', 
      title: 'Severe Eosinophilic ACO & Biologic Candidacy Assessment', 
      icon: 'Microscope', 
      color: '13314f', 
      questions: [
        { 
          key: 'q1', 
          q: 'Biologic Candidacy & ACO Assessment: How should persistent exacerbations with eosinophils 520 cells/µL despite verified adherence on triple therapy be managed?',
          defaultAnswer: 'Severe eosinophilic Asthma-COPD Overlap (ACO) with persistent exacerbations (2 in past 12 months, 1 hospitalization, 1 course 4 weeks ago) and rising blood eosinophils (520 cells/µL, exceeding the >=300 cells/µL threshold) despite verified daily adherence and excellent inhaler technique on optimized triple therapy (Trelegy Ellipta 100/62.5/25 mcg daily). Patient meets GINA 2025 Step 5 and GOLD 2026 criteria for add-on biologic therapy. Recommend initiating or referring for anti-IL-5 biologic therapy (specifically mepolizumab / Nucala 100 mg SQ once every 4 weeks) based on robust evidence from the MATINEE trial demonstrating significant reductions in annualized exacerbation rates in patients with eosinophilic chronic airway disease.' 
        },
        {
          key: 'q2',
          q: 'Corticosteroid Stewardship & Comorbidities: What clinical strategies address OCS adverse burden, allergic rhinitis, and bone health?',
          defaultAnswer: 'Corticosteroid stewardship is a paramount priority: patient experiences severe insomnia and jitteriness with prednisone, and cumulative systemic OCS exposure confers substantial risk for osteopenia progression, fractures, and metabolic toxicity. Mepolizumab provides proven OCS-sparing efficacy to eliminate or reduce future bursts. For comorbidities: restart intranasal fluticasone propionate (50 mcg 1-2 sprays each nostril daily) to control active allergic rhinitis and reduce upper-airway triggers; continue calcium carbonate 500 mg + vitamin D3 400 IU BID and order baseline DEXA bone mineral density screening for osteopenia; continue lisinopril 10 mg daily for hypertension (BP 126/74 at goal <130/80); and address immunization gaps (recommend RSV vaccination and administer Tdap booster overdue >10 years per CDC/GINA).'
        }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w3c2_p1', 
      title: 'Biologic Escalation & Inhaled Triple Maintenance Plan', 
      options: [
        { 
          key: 'o1', 
          label: 'Biologic Escalation: Initiate mepolizumab (Nucala) 100 mg subcutaneous injection once every 4 weeks per MATINEE trial evidence; continue Trelegy Ellipta 100/62.5/25 mcg 1 inhalation daily; continue albuterol HFA 90 mcg 2 puffs q4-6h PRN for rescue bronchodilation.', 
          correct: true 
        },
        { 
          key: 'o2', 
          label: 'Switch to a different brand of triple therapy without biologic referral', 
          correct: false 
        },
        { 
          key: 'o3', 
          label: 'Start chronic daily maintenance oral prednisone 10 mg daily', 
          correct: false 
        },
      ] 
    },
    {
      id: 'w3c2_p2',
      title: 'Corticosteroid Stewardship & Comorbidity Management Plan',
      options: [
        {
          key: 'o1',
          label: 'Corticosteroid Stewardship & Action Plan: Establish explicit goal to reduce and eliminate future systemic OCS exposure; acknowledge patient concerns regarding insomnia/jitteriness; provide updated written Asthma-COPD Action Plan with clear criteria for prompt clinical evaluation. Allergic Rhinitis: Restart fluticasone propionate nasal spray 50 mcg 1-2 sprays per nostril once daily with head tilted slightly forward; continue cetirizine 10 mg PO daily; review environmental allergen avoidance. Bone Health: Continue calcium carbonate 500 mg with vitamin D3 400 IU PO BID with meals; order screening DEXA scan to evaluate bone mineral density given cumulative OCS exposure.',
          correct: true
        }
      ]
    },
    {
      id: 'w3c2_p3',
      title: 'Preventive Care, Monitoring & Longitudinal Follow-Up Plan',
      options: [
        {
          key: 'o1',
          label: 'Preventive Care: Recommend RSV vaccination (single dose for chronic lung disease age >=60); administer Tdap booster (overdue >10 years); confirm up-to-date status for influenza, COVID-19, and PCV20 to prevent infectious exacerbations. Structured Monitoring: Monitor ACT score, CAT score, exacerbation frequency, systemic OCS requirements, rescue albuterol use frequency, eosinophil trending, inhaler adherence, and biologic safety (injection site reactions, counsel on anaphylaxis symptoms). Follow-Up: Schedule follow-up in 12–16 weeks (3–4 months) for formal biologic efficacy evaluation per GINA 2025; reassess symptom control, review vaccination completion, and evaluate treatment tolerability.',
          correct: true
        }
      ]
    }
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
    learningObjectives: ['Evaluate persistent exacerbations on ICS/LABA + LAMA', 'Assess biologic therapy candidacy', 'Implement corticosteroid stewardship and vaccine optimization in severe ACO'],
  },
  ALLERGIES: [{ substance: 'Sulfonamide antibiotics', reaction: 'Rash', severity: 'Moderate', type: 'Allergy', date: 'Past', source: 'Patient reported' }],
  VITALS: { bp: '124/72', bpRepeat: '122/70', hr: '76', rr: '16', temp: '98.6°F', weight: '71 kg', height: "5'4\"", bmi: '26.9', bsa: '1.79', spo2: '96%', spo2Qualifier: 'on room air', flags: {} },
  LABS: [
    { label: 'Absolute Eosinophils', value: '380', unit: 'cells/µL', flag: 'high', note: 'Elevated Type 2 airway inflammation, exceeds >=300 cells/µL threshold' },
    { label: 'FEV1', value: '1.45', unit: 'L (58% pred)', flag: 'warn', note: 'Post-bronchodilator, GOLD Grade 2 moderate obstruction' },
    { label: 'FEV1/FVC', value: '0.57', flag: 'warn', note: 'Post-bronchodilator, persistent airflow obstruction' },
    { label: 'FVC', value: '2.54', unit: 'L', flag: 'warn' }
  ],
  ALERTS: [{ level: 'high', text: 'Persistent exacerbations on triple therapy (ICS/LABA + LAMA). Eosinophils 380 — consider biologic escalation per GINA Step 5.' }],
  PROBLEMS: [
    { name: 'Asthma-COPD Overlap (ACO)', detail: 'Exacerbating on Symbicort + Spiriva, 2 exacerbations in past 12 months (1 hospitalization)', flag: 'high' },
    { name: 'Asthma', detail: 'Childhood-onset (diagnosed age 7), severe persistent component', flag: 'high' },
    { name: 'COPD', detail: 'Diagnosed ~8 years ago, post-BD FEV1/FVC 0.57, 30 pack-year smoking history', flag: 'warn' },
    { name: 'Allergic rhinitis', detail: 'Uncontrolled after stopping intranasal fluticasone', flag: 'warn' },
    { name: 'Hypertension', detail: 'Controlled on lisinopril 10 mg daily (BP 124/72)', flag: 'normal' },
    { name: 'Osteopenia', detail: 'At risk from cumulative systemic OCS bursts, on calcium + vit D', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Budesonide/Formoterol (Symbicort)', dose: '160/4.5 mcg', route: 'Inhaled', freq: '2 puffs BID', indication: 'ACO maintenance', notes: 'Confirmed adherence' },
    { name: 'Tiotropium (Spiriva Respimat)', dose: '2.5 mcg', route: 'Inhaled', freq: '2 puffs daily', indication: 'ACO maintenance', notes: 'Confirmed adherence' },
    { name: 'Albuterol HFA', dose: '90 mcg (2 puffs)', route: 'Inhaled', freq: 'q4-6h PRN', indication: 'Rescue bronchodilator', notes: 'Uses 3-4 times/week' },
    { name: 'Cetirizine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Allergic rhinitis', notes: '' },
    { name: 'Calcium carbonate + Vitamin D3', dose: '500 mg / 400 IU', route: 'PO', freq: 'BID with meals', indication: 'Osteopenia prevention', notes: 'Contains vitamin D 400 IU per tablet' },
    { name: 'Lisinopril', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Hypertension', notes: 'BP controlled' },
  ],
  IMMUNIZATIONS: mariaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient presents for 3-month follow-up reporting persistent exertional dyspnea, wheezing, nighttime awakenings 1-2 times/week, and 2 exacerbations in the past 12 months (one requiring hospitalization) despite verified adherence to Symbicort and Spiriva Respimat. Allergic rhinitis is uncontrolled since patient stopped intranasal fluticasone. Confirms taking all doses and using rescue albuterol frequently (3-4 times/week).' },
    { label: 'Past Medical History', value: '1. Asthma: diagnosed in childhood at age 7, severe persistent component.\n2. Chronic Obstructive Pulmonary Disease (COPD): diagnosed ~8 years ago, post-BD FEV1/FVC 0.57, 30 pack-year smoking history.\n3. Allergic Rhinitis: ~15 years duration, worsened without nasal spray.\n4. Hypertension: ~10 years duration, stable on lisinopril 10 mg daily.\n5. Osteopenia: ~3 years duration, at elevated risk from repeated OCS bursts.\nNo other chronic medical conditions.' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (laparoscopic gallbladder removal age 58). Denies prior thoracic, cardiac, or lung surgeries.' },
    { label: 'Social history', value: 'Former cigarette smoker (1 pack/day for 30 years = 30 pack-years; quit 12 years ago; denies cravings or tobacco use). Denies recreational or illicit drug use. Drinks alcohol rarely (1 glass of wine 2–3 times/year). Retired elementary-school principal; lives with supportive spouse. Physical activity: walks 20–30 minutes daily around neighborhood for exercise, though limited by exertional dyspnea when walking uphill or climbing stairs.' },
    { label: 'Medication Reconciliation & Affordability', value: 'Reconciled 6 active medications: Symbicort 160/4.5 mcg 2 puffs BID, Spiriva Respimat 2.5 mcg 2 puffs daily, albuterol HFA 90 mcg 2 puffs q4-6h PRN, cetirizine 10 mg daily, lisinopril 10 mg daily, calcium carbonate 500 mg with vit D3 400 IU BID. Confirms medications are affordable ($20 copays). Denies adverse drug effects (no tremors, palpitations, oral thrush, or dysphonia).' },
    { label: 'Patient Goals', value: 'Highly motivated to improve respiratory symptom control, reduce exacerbations, avoid repeated oral prednisone bursts and hospitalizations, and maintain daily functional ability.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Vitals', value: 'BP 124/72 mmHg, HR 76 bpm regular, RR 16 breaths/min unlabored, Temp 98.6°F oral, SpO2 96% on room air', flag: 'normal' },
    { label: 'Spirometry', value: 'FEV1 1.45 L (58% predicted, GOLD Grade 2 moderate obstruction), FEV1/FVC 0.57 (<0.70 confirming persistent airflow obstruction, post-bronchodilator)', flag: 'warn' },
    { label: 'Biomarkers', value: 'Absolute blood eosinophils 380 cells/µL (elevated Type 2 airway inflammation, exceeds >=300 cells/µL threshold)', flag: 'high' },
    { label: 'CAT Score', value: '18 — High COPD symptom burden (>=10 threshold)', flag: 'warn' },
    { label: 'ACT Score', value: '14 — Poorly controlled asthma component (<20 threshold)', flag: 'warn' },
    { label: 'Immunization Status', value: 'Influenza (current season) and COVID-19 up to date; PCV20 received last year. Gaps flagged: RSV vaccine not documented (recommended for age >=60 with chronic lung disease); Tdap booster overdue (>10 years since last tetanus toxoid).', flag: 'warn' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'update', label: 'Clinical Update', placeholder: 'How has she been feeling?' },
    { key: 'goals', label: 'Patient Goals & Steroid Concerns', placeholder: 'What are her goals regarding treatment?' },
  ],
  COUNSELING: [
    { id: 'c1', title: 'Biologic Escalation & Comprehensive Airway Care', body: [
      "Because you are still experiencing frequent flare-ups and poor control despite using three inhaled medications (ICS/LABA + LAMA), and your blood eosinophils remain elevated at 380 cells/µL, guideline-directed therapy recommends adding a targeted injectable biologic (mepolizumab / Nucala) to reduce flare-ups, preserve lung function, and avoid prednisone bursts." ] }
  ],
  GUIDING_QUESTIONS: [
    'What evidence suggests current triple inhaled therapy is insufficient?',
    'Why is biologic therapy (anti-IL-5) indicated for this patient per GINA Step 5?',
    'How should her uncontrolled allergic rhinitis be managed?',
    'What corticosteroid stewardship and bone health strategies are indicated?',
    'What structured monitoring and vaccine plans should be implemented?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w3-maria_t-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I have a severe allergy to sulfonamide antibiotics. I get a terrible rash." },
    { id: 'w3-maria_t-thu_pmh', topic: 'Medical history', field: 'pmh', keywords: ['past medical history', 'history', 'asthma', 'copd', 'diagnosed', 'duration', 'childhood', 'years'], response: "I have had asthma since childhood (diagnosed at age 7). About 8 years ago, I was diagnosed with COPD from my past smoking history. I also have allergic rhinitis for ~15 years, hypertension for ~10 years, and osteopenia for ~3 years. No other medical conditions." },
    { id: 'w3-maria_t-thu_psh', topic: 'Past Surgical History', field: 'psh', keywords: ['surgery', 'surgeries', 'surgical', 'operation', 'operations', 'cholecystectomy', 'gallbladder'], response: "I had my gallbladder removed (cholecystectomy) a few years ago. No lung, heart, or chest surgeries." },
    { id: 'w3-maria_t-thu_meds', topic: 'Current medications & Affordability', field: 'medications', keywords: ['medications', 'reconciliation', 'symbicort', 'spiriva', 'albuterol', 'cetirizine', 'lisinopril', 'calcium', 'vitamin d', 'cost', 'copay', 'afford'], response: "I take Symbicort 160/4.5 mcg 2 puffs twice daily, Spiriva Respimat 2.5 mcg 2 puffs once daily, albuterol HFA as needed, cetirizine 10 mg daily, lisinopril 10 mg daily, and calcium carbonate 500 mg with vitamin D3 400 IU twice daily. Everything is affordable with my insurance copays ($20 each)." },
    { id: 'w3-maria_t-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin', 'fluticasone', 'spray'], response: "I take cetirizine 10 mg daily and calcium with vitamin D. I stopped the intranasal fluticasone because I kept forgetting to use it, and now my allergies are completely uncontrolled." },
    { id: 'w3-maria_t-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol rarely, maybe a glass of wine a few times a year." },
    { id: 'w3-maria_t-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 30 years. I quit 12 years ago. That\'s a 30 pack-year history. I never smoke anymore and have zero cravings." },
    { id: 'w3-maria_t-thu_drugs', topic: 'Illicit drug use denial', field: 'drugs', keywords: ['drug', 'drugs', 'illicit', 'recreational', 'marijuana', 'cocaine', 'substance'], response: "No, I have never used recreational or illicit drugs." },
    { id: 'w3-maria_t-thu_activity', topic: 'Physical activity & Exercise', field: 'activity', keywords: ['exercise', 'walk', 'walking', 'activity', 'physical'], response: "I try to walk 20 to 30 minutes every day around my neighborhood. I get winded walking uphill, but I try to keep moving." },
    { id: 'w3-maria_t-thu_tech', topic: 'Inhaler technique', field: 'technique', keywords: ['technique', 'symbicort', 'spiriva', 'inhaler', 'show', 'demonstrate', 'how', 'respimat', 'ellipta', 'use', 'steps', 'correct'], response: "For the Symbicort, I shake it, breathe out fully, put it in my mouth and press the canister while breathing in slowly and deeply, then hold for 10 seconds. For the Spiriva Respimat, I turn the base until it clicks, press the button on the side to release the dose, and inhale slowly and deeply. I rinse my mouth after both inhalers." },
    { id: 'w3-maria_t-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had both COPD and coronary artery disease (CAD). My mother had asthma and allergic rhinitis. My sister also has asthma." },
    { id: 'w3c3_upd', topic: 'Update', field: 'update', keywords: ['feel', 'breathing', 'exacerbation', 'flare'], response: "I'm using the Symbicort and Spiriva exactly as prescribed, but I still had a flare-up last month and my breathing feels tight. My allergies are also acting up badly since I stopped the nasal spray." },
    { id: 'w3c3_vacc', topic: 'Vaccinations', field: 'vaccines', keywords: ['vaccine', 'vaccines', 'shot', 'flu', 'pneumonia'], response: "I'm not entirely sure which vaccines I'm due for. You'd have to check my chart to see if I need a pneumonia or flu shot." },
    { id: 'w3-maria_t-thu_goals', topic: 'Patient goals & motivation', field: 'goals', keywords: ['goal', 'goals', 'motivation', 'want', 'hope', 'future'], response: "My goals are to breathe easier, stop having these terrible flare-ups that put me in the hospital, avoid having to take prednisone bursts, and be able to walk comfortably." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w3c3_a1', 
      title: 'Severe Eosinophilic ACO & Biologic Candidacy Assessment', 
      icon: 'AlertTriangle', 
      color: 'dc2626', 
      questions: [
        { 
          key: 'q1', 
          q: 'Biologic Candidacy & ACO Assessment: What is the guideline-directed next step for severe eosinophilic ACO failing triple inhaled therapy?',
          defaultAnswer: 'Severe eosinophilic Asthma-COPD Overlap (ACO) failing triple inhaled therapy (Symbicort 160/4.5 mcg 2 puffs BID + Spiriva Respimat 2.5 mcg 2 puffs daily) with persistent symptoms (ACT 14, CAT 18), recurrent exacerbations (2 in past 12 months, 1 requiring hospitalization), and elevated blood eosinophils (380 cells/µL, exceeding the >=300 cells/µL threshold per GINA 2025 Step 5 and GOLD 2026). Candidate for add-on anti-IL-5 biologic therapy (specifically mepolizumab / Nucala 100 mg SQ once every 4 weeks) based on MATINEE trial evidence demonstrating substantial reductions in annualized exacerbation rates.' 
        },
        {
          key: 'q2',
          q: 'Corticosteroid Stewardship & Comorbidities: How should allergic rhinitis, bone health, and vaccine gaps be managed?',
          defaultAnswer: 'Corticosteroid stewardship is essential to minimize repeated systemic OCS bursts and prevent long-term skeletal/osteopenia deterioration. Mepolizumab provides critical OCS-sparing efficacy. For comorbidities: restart fluticasone propionate nasal spray (50 mcg 1-2 sprays each nostril daily) to control active allergic rhinitis and eliminate upper-airway triggers; continue calcium carbonate 500 mg with vitamin D3 400 IU BID and order screening DEXA scan for bone health monitoring; continue lisinopril 10 mg daily for hypertension; and address immunization gaps (recommend RSV vaccination and administer Tdap booster overdue >10 years per CDC/GINA).'
        }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w3c3_p1', 
      title: 'Biologic Escalation & Inhaled Triple Maintenance Plan', 
      options: [
        { 
          key: 'o1', 
          label: 'Biologic Escalation: Refer for or initiate add-on anti-IL-5 biologic therapy (specifically mepolizumab / Nucala 100 mg subcutaneous injection once every 4 weeks) per MATINEE trial evidence; maintain baseline inhaled therapy (Symbicort 160/4.5 mcg 2 puffs BID + Spiriva Respimat 2.5 mcg 2 puffs daily) and continue albuterol HFA 90 mcg 2 puffs q4-6h PRN for rescue bronchodilation.', 
          correct: true 
        },
        { 
          key: 'o2', 
          label: 'Continue current inhaled regimen and observe without biologic referral', 
          correct: false 
        },
      ] 
    },
    {
      id: 'w3c3_p2',
      title: 'Corticosteroid Stewardship & Comorbidity Management Plan',
      options: [
        {
          key: 'o1',
          label: 'Corticosteroid Stewardship & Action Plan: Establish explicit goal to minimize systemic corticosteroid bursts; acknowledge patient concerns; provide written Asthma-COPD Action Plan. Allergic Rhinitis: Restart fluticasone propionate nasal spray 50 mcg 1-2 sprays each nostril once daily; continue cetirizine 10 mg PO daily; review environmental allergen avoidance. Bone Health: Continue calcium carbonate 500 mg + vitamin D3 400 IU PO BID; order screening DEXA scan given repeated OCS exposure and osteopenia.',
          correct: true
        }
      ]
    },
    {
      id: 'w3c3_p3',
      title: 'Preventive Care, Monitoring & Longitudinal Follow-Up Plan',
      options: [
        {
          key: 'o1',
          label: 'Preventive Care: Recommend RSV vaccination (single dose for chronic lung disease); administer Tdap booster (overdue >10 years); confirm up-to-date status for influenza, COVID-19, and PCV20. Structured Monitoring: Monitor ACT score, CAT score, rescue inhaler use frequency, nighttime awakenings, exacerbation frequency, OCS requirements, medication adherence, inhaler technique, and biologic safety (injection site reactions, anaphylaxis). Follow-Up: Schedule follow-up in 4–12 weeks (3–4 months for formal biologic efficacy assessment); reassess asthma/COPD control scores and evaluate treatment tolerability.',
          correct: true
        }
      ]
    }
  ],
})

export const W3_CASES = [sarahTue, sarahWed, sarahThu, bobTue, bobWed, bobThu, mariaTue, mariaWed, mariaThu]
export const W3_RUBRICS = {} // Add rubrics if needed
