const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/patientsW3.js');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Add spo2Qualifier: 'on room air' to all VITALS in patientsW3.js
// Sarah Tue:
code = code.replace(
  "VITALS: { bp: '122/78', bpRepeat: '116/74', hr: '82', rr: '18', temp: '98.2°F', weight: '76 kg', height: \"5'5\\\"\", bmi: '27.9', spo2: '98%', flags: {} },",
  "VITALS: { bp: '122/78', bpRepeat: '116/74', hr: '82', rr: '18', temp: '98.2°F', weight: '76 kg', height: \"5'5\\\"\", bmi: '27.9', spo2: '98%', spo2Qualifier: 'on room air', flags: {} },"
);

// Sarah Wed:
code = code.replace(
  "VITALS: { ...sarahTue.VITALS, bp: '120/76', hr: '76', rr: '16', weight: '75 kg', spo2: '99%', bmi: '27.5' },",
  "VITALS: { ...sarahTue.VITALS, bp: '120/76', hr: '76', rr: '16', weight: '75 kg', spo2: '99%', spo2Qualifier: 'on room air', bmi: '27.5' },"
);

// Sarah Thu:
code = code.replace(
  "VITALS: { ...sarahTue.VITALS, bp: '120/76', hr: '76', rr: '16', weight: '75 kg', spo2: '99%', bmi: '27.5' },",
  "VITALS: { ...sarahTue.VITALS, bp: '120/76', hr: '76', rr: '16', weight: '75 kg', spo2: '99%', spo2Qualifier: 'on room air', bmi: '27.5' },"
);

// Bob Tue:
code = code.replace(
  "VITALS: { bp: '132/78', bpRepeat: '130/76', hr: '80', rr: '18', temp: '98.4°F', weight: '89 kg', height: \"5'10\\\"\", bmi: '28.1', spo2: '95%', flags: {} },",
  "VITALS: { bp: '132/78', bpRepeat: '130/76', hr: '80', rr: '18', temp: '98.4°F', weight: '89 kg', height: \"5'10\\\"\", bmi: '28.1', bsa: '2.10', spo2: '95%', spo2Qualifier: 'on room air', flags: {} },"
);

// Bob Wed:
code = code.replace(
  "VITALS: { bp: '130/76', bpRepeat: '130/76', hr: '78', rr: '18', temp: '98.4°F', weight: '89 kg', height: \"5'10\\\"\", bmi: '28.1', spo2: '95%', flags: {} },",
  "VITALS: { bp: '130/76', bpRepeat: '130/76', hr: '78', rr: '18', temp: '98.4°F', weight: '89 kg', height: \"5'10\\\"\", bmi: '28.1', bsa: '2.10', spo2: '95%', spo2Qualifier: 'on room air', flags: {} },"
);

// Bob Thu:
code = code.replace(
  "VITALS: { bp: '128/76', bpRepeat: '128/76', hr: '82', rr: '18', temp: '98.4°F', weight: '89 kg', height: \"5'10\\\"\", bmi: '28.1', spo2: '94%', flags: {} },",
  "VITALS: { bp: '128/76', bpRepeat: '128/76', hr: '82', rr: '18', temp: '98.4°F', weight: '89 kg', height: \"5'10\\\"\", bmi: '28.1', bsa: '2.10', spo2: '94%', spo2Qualifier: 'on room air', flags: {} },"
);

// Maria Tue:
code = code.replace(
  "VITALS: { bp: '126/74', bpRepeat: '124/72', hr: '80', rr: '18', temp: '98.6°F', weight: '71 kg', height: \"5'4\\\"\", bmi: '26.9', spo2: '95%', flags: {} },",
  "VITALS: { bp: '126/74', bpRepeat: '124/72', hr: '80', rr: '18', temp: '98.6°F', weight: '71 kg', height: \"5'4\\\"\", bmi: '26.9', bsa: '1.79', spo2: '95%', spo2Qualifier: 'on room air', flags: {} },"
);

// Maria Thu:
code = code.replace(
  "VITALS: { bp: '124/72', bpRepeat: '122/70', hr: '76', rr: '16', temp: '98.6°F', weight: '71 kg', height: \"5'4\\\"\", bmi: '26.9', spo2: '96%', flags: {} },",
  "VITALS: { bp: '124/72', bpRepeat: '122/70', hr: '76', rr: '16', temp: '98.6°F', weight: '71 kg', height: \"5'4\\\"\", bmi: '26.9', bsa: '1.79', spo2: '96%', spo2Qualifier: 'on room air', flags: {} },"
);

// 2. Bob Immunizations: Add Tdap overdue to Bob Tue, Wed, Thu
code = code.replace(
  `  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented', flag: 'warn' },
    { name: 'RSV', status: 'Not documented', flag: 'warn' },
  ],`,
  `  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented', flag: 'warn' },
    { name: 'RSV', status: 'Not documented', flag: 'warn' },
    { name: 'Tdap', status: 'Overdue — last received >10 years ago', flag: 'warn' },
  ],`
);

// Also Bob Thu immunizations (if separate)
code = code.replace(
  `  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented', flag: 'warn' },
    { name: 'RSV', status: 'Not documented', flag: 'warn' },
  ],`,
  `  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented', flag: 'warn' },
    { name: 'RSV', status: 'Not documented', flag: 'warn' },
    { name: 'Tdap', status: 'Overdue — last received >10 years ago', flag: 'warn' },
  ],`
);

// 3. Bob Thu: Remove contradictory ACT score and update CAT/Spirometry
code = code.replace(
  `  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1/FVC 0.56, FEV1 61% predicted (post-bronchodilator)', flag: 'warn' },
    { label: 'ACT Score', value: '17 — Partly controlled asthma component', flag: 'warn' },
    { label: 'CAT Score', value: '15 — Moderate COPD symptom burden', flag: 'warn' },
  ],`,
  `  OBJECTIVE_EXTRA: [
    { label: 'Spirometry', value: 'FEV1/FVC 0.56, FEV1 61% predicted (post-bronchodilator; baseline FEV1 60%)', flag: 'warn' },
    { label: 'CAT Score', value: '17 — High COPD symptom burden', flag: 'warn' },
  ],`
);

// Bob Thu: Update Assessment question
code = code.replace(
  `  ASSESSMENT_CARDS: [
    { id: 'w3b3_a1', title: 'Clinical Status', icon: 'CheckCircle', color: '10b981', questions: [{ key: 'q1', q: 'Should therapy be escalated to LABA/LAMA?' }] },
  ],`,
  `  ASSESSMENT_CARDS: [
    { id: 'w3b3_a1', title: 'Triple Therapy Escalation', icon: 'AlertTriangle', color: 'd97706', questions: [{ key: 'q1', q: 'Should therapy be escalated to triple therapy (add ICS to LABA/LAMA)?' }] },
  ],`
);

// 4. Maria Tue: Fix Assessment Cards & Plan Sections (Initial visit on Spiriva, not biologic follow-up!)
const oldMariaTueAssessmentAndPlan = `  ASSESSMENT_CARDS: [
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
  ],`;

const newMariaTueAssessmentAndPlan = `  ASSESSMENT_CARDS: [
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
  ],`;

code = code.replace(oldMariaTueAssessmentAndPlan, newMariaTueAssessmentAndPlan);

// 5. Maria allergy note & banner reconciliation across all Maria encounters
code = code.replace(
  "allergiesSummary: 'Sulfonamide antibiotics (Rash)'",
  "allergiesSummary: 'Sulfonamide antibiotics (Rash — Moderate)'"
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully updated patientsW3.js!');
