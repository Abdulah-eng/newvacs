const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/patientsW3.js');
let code = fs.readFileSync(filePath, 'utf8');

const oldSarahWed = `const sarahWed = makeCase({
  id: 'w3-sarah_t-wed',
  PATIENT: { ...sarahTue.PATIENT },
  ENCOUNTER: { week: 'Week 3', 
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I'm using the daily inhaler, but I still need my rescue inhaler when I exercise.",
    snapshotSummary: 'Follow-up visit. Sarah is now taking her ICS daily, but still has symptoms with activity. Time to step up therapy.',
    diseaseStates: ['Asthma'],
    learningObjectives: ['Escalate therapy per GINA guidelines (e.g., add LABA or switch to SMART therapy)'],
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
    { label: 'HPI', value: 'Patient reports improved daily adherence to ICS. Experiences symptoms 2 days/week. ACT score is 21. Patient demonstrates increased self-management engagement and expresses willingness to continue the current regimen.' },
    { label: 'Social history', value: 'Teacher. Non-smoker. Lives with husband and two kids.' }
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
    { id: 'w3-sarah_t-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "I was diagnosed with asthma when I was 8 years old. My brother and sister both have asthma. My mother has asthma and allergic rhinitis. My father has high blood pressure." },
    { id: 'w3a2_sym', topic: 'Exercise symptoms', field: 'symptoms', keywords: ['symptoms', 'breathe', 'exercise', 'run'], response: "I\\'m much better overall. I only have symptoms 1 to 2 days a week now, mostly with exercise. My ACT score was 21 today, which is a big improvement. I\\'m really committed to staying on this regimen." },
    { id: 'w3a2_adh', topic: 'Adherence', field: 'adherence', keywords: ['budesonide', 'symbicort', 'every day', 'daily', 'take', 'miss'], response: "Yes, I\\'ve been taking the Symbicort every morning and at night. I try not to miss it. Very few missed doses, maybe once." },
    { id: 'w3a2_rhinitis', topic: 'Allergic rhinitis status', field: 'rhinitis', keywords: ['rhinitis', 'nasal', 'allergy', 'nose', 'sinus', 'fluticasone', 'spray', 'symptoms'], response: "My nasal symptoms are so much better since I started using the nasal spray every day. The sneezing and congestion are significantly improved compared to before." },
    { id: 'w3a2_tech', topic: 'Inhaler technique', field: 'technique', keywords: ['show', 'demonstrate', 'technique', 'how', 'use', 'inhaler', 'steps'], response: "Sure. I just pick it up, shake it, put it in my mouth, and breathe in. I don\\'t always breathe all the way out first before I inhale, and I usually just breathe normally after instead of holding my breath for 10 seconds." },
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
})`;

const newSarahWed = `const sarahWed = makeCase({
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
    { id: 'w3a2_sym', topic: 'Exercise symptoms', field: 'symptoms', keywords: ['symptoms', 'breathe', 'exercise', 'run'], response: "I\\'m much better overall. I only have symptoms 1 to 2 days a week now, mostly with exercise. My ACT score was 21 today, which is a big improvement. I\\'m really committed to staying on this regimen." },
    { id: 'w3a2_adh', topic: 'Adherence', field: 'adherence', keywords: ['budesonide', 'symbicort', 'every day', 'daily', 'take', 'miss'], response: "Yes, I\\'ve been taking the Symbicort every morning and at night. I try not to miss it. Very few missed doses, maybe once." },
    { id: 'w3a2_rhinitis', topic: 'Allergic rhinitis status', field: 'rhinitis', keywords: ['rhinitis', 'nasal', 'allergy', 'nose', 'sinus', 'fluticasone', 'spray', 'symptoms'], response: "My nasal symptoms are so much better since I started using the nasal spray every day. The sneezing and congestion are significantly improved compared to before." },
    { id: 'w3a2_tech', topic: 'Inhaler technique', field: 'technique', keywords: ['show', 'demonstrate', 'technique', 'how', 'use', 'inhaler', 'steps'], response: "Sure. I just pick it up, shake it, put it in my mouth, and breathe in. I don\\'t always breathe all the way out first before I inhale, and I usually just breathe normally after instead of holding my breath for 10 seconds." },
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
})`;

const normalize = s => s.replace(/\r\n/g, '\n');

if (!normalize(code).includes(normalize(oldSarahWed))) {
  console.error("Could not find oldSarahWed block in patientsW3.js");
  process.exit(1);
}

const isCRLF = code.includes('\r\n');
const toReplace = isCRLF ? oldSarahWed.replace(/\n/g, '\r\n') : oldSarahWed;
const replacement = isCRLF ? newSarahWed.replace(/\n/g, '\r\n') : newSarahWed;

code = code.replace(toReplace, replacement);
fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully updated sarahWed in patientsW3.js!');

