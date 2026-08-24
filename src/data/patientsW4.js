import { makeCase } from './caseFactory.js'

// WEEK 4 — Heart Failure + AFib + Anticoagulation
// Patients: Michael Thompson (A), Angela Brooks (B), Robert Jenkins (C)
// Case ids are namespaced 'w4-<patient>-<day>'

/* ============================ MICHAEL THOMPSON (A) ============================ */
// Newly diagnosed HFrEF. Needs GDMT initiation.

const michaelTue = makeCase({
  id: 'w4-michael_t4-tue',
  PATIENT: { name: 'Michael Thompson', age: 58, sex: 'male', ethnicity: 'White', mrn: 'W4-51004' },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Foundational', difficultyTone: 'teal',
    chiefConcern: "The cardiologist said my heart muscle is weak and I need to start new medications.",
    snapshotSummary: 'Newly diagnosed HFrEF (LVEF 35%). Currently only on lisinopril and HCTZ for hypertension. Needs initiation of GDMT.',
    diseaseStates: ['HFrEF', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Identify HFrEF and ACC/AHA stage', 'Initiate the 4 pillars of GDMT'],
  },
  VITALS: { bp: '138/86', bpRepeat: '136/84', hr: '82', rr: '16', temp: '98.6°F', spo2: '96%', weight: '102 kg', height: "5'10\"", bmi: '32.2', vitalsTime: '06/23/2026 09:14', flags: {} },
  LABS: [
    { label: 'NT-proBNP', value: '320', unit: 'pg/mL', flag: 'high' },
    { label: 'K', value: '4.2', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '88', unit: 'mL/min/1.73m²', flag: 'normal' },
  ],
  ALERTS: [
    { level: 'warn', text: 'HFrEF (LVEF 35%) not on optimal GDMT. Missing evidence-based beta blocker, MRA, and SGLT2i. Lisinopril can be optimized.' },
  ],
  PROBLEMS: [
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 35%, NYHA Class II', flag: 'high' },
    { name: 'Hypertension', detail: 'Currently on Lisinopril and HCTZ', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '20 mg', route: 'by mouth', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Referred for GDMT optimization following new nonischemic cardiomyopathy diagnosis. NYHA Class II symptoms.' },
    { label: 'Echocardiogram', value: 'LVEF 35%, mild LV dilation.' },
    { label: 'Social history', value: 'Former smoker (quit 5 years ago). Occasional alcohol.' },
  ],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'symptoms', label: 'Heart Failure Symptoms', placeholder: 'Any swelling or shortness of breath?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Heart Failure Basics', body: ["Heart failure means your heart isn't pumping as strongly as it should. The medications we prescribe are designed to help your heart work smarter, not harder."] }], GUIDING_QUESTIONS:
   [
    'What findings support a diagnosis of HFrEF?',
    'What are the four foundational medication classes for HFrEF?',
    'Why is sacubitril/valsartan preferred over ACE inhibitor therapy in many patients?',
    'What monitoring is required after initiation of heart failure therapy?',
    'Why are daily weights important?',
    'What counseling points should be provided during a new heart failure diagnosis?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-michael_t4-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-michael_t4-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin, but no other over-the-counter medications or supplements." },
    { id: 'w4-michael_t4-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a glass of wine or beer on special occasions." },
    { id: 'w4-michael_t4-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago." },
    { id: 'w4-michael_t4-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had coronary artery disease and heart failure, and suffered a heart attack at age 64. My mother has high blood pressure." },
    { id: 'w4-michael_t4-tue_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife'], response: "I am married and live with my wife. I work full-time as an accountant." },
    { id: 'w4-michael_t4-tue_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "I don't check my blood pressure or weigh myself at home. Should I be doing that?" },
    { id: 'w4a_sym', topic: 'Symptoms', field: 'symptoms', keywords: ['swelling', 'breathe', 'shortness', 'stairs', 'edema'], response: "My ankles get a little puffy by the end of the day, and I get winded if I walk up a flight of stairs quickly." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4a_a1', title: 'GDMT Initiation', icon: 'Heart', color: '13314f', questions: [{ key: 'q1', q: 'Which medications should be added or changed to establish the 4 pillars of HFrEF GDMT?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4a_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Transition Lisinopril to ARNI, add Carvedilol, add Spironolactone, add Dapagliflozin', correct: true },
      { key: 'o2', label: 'Continue Lisinopril and add Furosemide', correct: false },
      { key: 'o3', label: 'Add Amlodipine to lower BP', correct: false },
    ] },
  ],
})

const michaelWed = makeCase({
  id: 'w4-michael_t4-wed',
  PATIENT: { ...michaelTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I'm taking all the new pills, but I feel a bit dizzy when I stand up.",
    snapshotSummary: 'Michael was started on the 4 pillars. He is experiencing orthostatic hypotension.',
    diseaseStates: ['HFrEF'],
    learningObjectives: ['Manage GDMT side effects (orthostasis)', 'Adjust non-GDMT meds to facilitate GDMT tolerance'],
  },
  VITALS: { bp: '106/68', bpRepeat: '104/66', hr: '62', rr: '16', temp: '98.6°F', spo2: '97%', weight: '101 kg', height: "5'10\"", bmi: '31.9', flags: { bp: 'warn' } },
  LABS: [
    { label: 'NT-proBNP', value: '165', unit: 'pg/mL', flag: 'high' },
    { label: 'K', value: '4.5', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.08', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '80', unit: 'mL/min/1.73m²', flag: 'normal' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'HFrEF', detail: 'On GDMT, experiencing orthostasis', flag: 'warn' }],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan (Entresto)', dose: '24/26 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Carvedilol', dose: '3.125 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Spironolactone', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Dapagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: michaelTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Reports dizziness upon standing since starting the new medications. Edema has resolved.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'dizziness', label: 'Dizziness Assessment', placeholder: 'When does he feel dizzy?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Fluid Management', body: ["Monitoring your daily weight is critical. If you gain 3 pounds in a day or 5 pounds in a week, call the clinic right away so we can adjust your water pill."] }], GUIDING_QUESTIONS:
   [
    'What findings demonstrate treatment success?',
    'Why is MRA therapy appropriate today?',
    'Should mild orthostatic symptoms change management?',
    'What monitoring is required after spironolactone initiation?',
    'Why is BNP trending useful?',
    'What is the next long-term goal?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-michael_t4-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-michael_t4-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin, but no other over-the-counter medications or supplements." },
    { id: 'w4-michael_t4-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a glass of wine or beer on special occasions." },
    { id: 'w4-michael_t4-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago." },
    { id: 'w4-michael_t4-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had coronary artery disease and heart failure, and suffered a heart attack at age 64. My mother has high blood pressure." },
    { id: 'w4-michael_t4-wed_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife'], response: "I am married and live with my wife. I work full-time as an accountant." },
    { id: 'w4a2_dizzy', topic: 'Orthostasis', field: 'dizziness', keywords: ['stand', 'dizzy', 'lightheaded', 'when'], response: "It's mostly when I get out of bed in the morning or stand up quickly from my desk. It passes after a few seconds." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4a2_a1', title: 'Orthostasis Management', icon: 'AlertTriangle', color: 'd97706', questions: [{ key: 'q1', q: 'How can we improve his blood pressure to allow continued GDMT titration?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4a2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Discontinue HCTZ to reduce volume depletion and lower BP burden, allowing GDMT to continue', correct: true },
      { key: 'o2', label: 'Stop Carvedilol and Sacubitril/Valsartan', correct: false },
    ] },
  ],
})

const michaelThu = makeCase({
  id: 'w4-michael_t4-thu',
  PATIENT: { ...michaelTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Thursday', type: '6-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I feel great. Do I still need to increase the doses?",
    snapshotSummary: 'Michael is doing well but is on starting doses of GDMT. Needs up-titration.',
    diseaseStates: ['HFrEF'],
    learningObjectives: ['Recognize the need to titrate GDMT to target doses, not just starting doses'],
  },
  VITALS: { bp: '122/78', bpRepeat: '120/76', hr: '70', rr: '16', temp: '98.6°F', spo2: '97%', weight: '101 kg', height: "5'10\"", bmi: '31.9', flags: {} },
  LABS: [
    { label: 'NT-proBNP', value: '92', unit: 'pg/mL', flag: 'normal' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.2', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '75', unit: 'mL/min/1.73m²', flag: 'normal' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'HFrEF', detail: 'Stable, requires GDMT titration', flag: 'warn' }],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan (Entresto)', dose: '24/26 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Carvedilol', dose: '3.125 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Spironolactone', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Dapagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: michaelTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Dizziness resolved after stopping HCTZ. No HF symptoms. Feels great.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'titration', label: 'Medication Education', placeholder: 'Explain why doses need to increase' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Beta Blocker Titration', body: ["We are slowly increasing your beta blocker. You might feel a little more tired for a few days, but this medication is proven to strengthen your heart over the long term."] }], GUIDING_QUESTIONS:
   [
    'What findings support a diagnosis of HFimpEF?',
    'Should GDMT be continued after EF improves?',
    'Why is discontinuation of therapy potentially harmful?',
    'What monitoring remains important?',
    'What counseling should be provided regarding medication duration?',
    'What is the major educational pearl of this encounter?'
  ],

    INTERVIEW_KNOWLEDGE: [
    { id: 'w4-michael_t4-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-michael_t4-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin, but no other over-the-counter medications or supplements." },
    { id: 'w4-michael_t4-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a glass of wine or beer on special occasions." },
    { id: 'w4-michael_t4-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago." },
    { id: 'w4-michael_t4-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had coronary artery disease and heart failure, and suffered a heart attack at age 64. My mother has high blood pressure." },
    { id: 'w4-michael_t4-thu_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife'], response: "I am married and live with my wife. I work full-time as an accountant." },
    { id: 'w4a3_titrate', topic: 'Titration', field: 'titration', keywords: ['why', 'increase', 'feel fine', 'dose'], response: "If I feel good, why do we need to mess with the doses? Can't we just leave it here?" },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4a3_a1', title: 'Target Doses', icon: 'ArrowUpCircle', color: '13314f', questions: [{ key: 'q1', q: 'Why is it important to increase the doses of Carvedilol and Entresto?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4a3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Educate that target doses provide maximum mortality benefit; titrate Carvedilol to 6.25 mg BID', correct: true },
      { key: 'o2', label: 'Leave doses as they are since he is asymptomatic', correct: false },
    ] },
  ],
})

/* ============================ ANGELA BROOKS (B) ============================ */
// HFrEF + Persistent AFib. Adherence and cost barriers, needs anticoagulation.

const angelaTue = makeCase({
  id: 'w4-angela_b-tue',
  PATIENT: { name: 'Angela Brooks', age: 64, sex: 'female', ethnicity: 'Black', mrn: 'W4-22091' },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I have so many pills, and they cost too much.",
    snapshotSummary: 'Angela has HFrEF and Persistent AFib. She was prescribed Apixaban for stroke prevention but is not taking it due to cost.',
    diseaseStates: ['HFrEF', 'AFib'],
    learningObjectives: ['Calculate CHA2DS2-VASc score', 'Identify cost nonadherence as a barrier to stroke prevention'],
  },
  VITALS: { bp: '128/78', bpRepeat: '126/76', hr: '88', rr: '16', temp: '98.2°F', spo2: '98%', weight: '84 kg', height: "5'5\"", bmi: '30.8', flags: {} },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal' },
    { label: 'BUN', value: '18', unit: 'mg/dL', flag: 'normal' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '72', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'AST', value: '24', unit: 'U/L', flag: 'normal' },
    { label: 'ALT', value: '21', unit: 'U/L', flag: 'normal' },
    { label: 'WBC', value: '6.8', unit: 'x10³/mm³', flag: 'normal' },
    { label: 'Hgb', value: '13.2', unit: 'g/dL', flag: 'normal' },
    { label: 'Plt', value: '241', unit: 'x10³/mm³', flag: 'normal' },
    { label: 'NT-proBNP', value: '210', unit: 'pg/mL', flag: 'high' }
  ],
  ALERTS: [{ level: 'high', text: 'Patient has AFib with elevated stroke risk (CHA2DS2-VASc = 4) but is not taking her prescribed anticoagulant.' }],
  PROBLEMS: [
    { name: 'Persistent AFib', detail: 'CHA2DS2-VASc 4. High stroke risk.', flag: 'high' },
    { name: 'HFrEF', detail: 'Stable on GDMT', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '49/51 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/Rate control', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'No recent fills' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Referred for medication adherence and cost review.' }, { label: 'Social history', value: 'Former smoker. Occasional alcohol.' }],
  OBJECTIVE_EXTRA: [{ label: 'Pharmacy Claims', value: 'Apixaban last filled 4 months ago.', flag: 'missing' }],
  INTERVIEW_FIELDS: [
    { key: 'apixaban', label: 'Apixaban Adherence', placeholder: 'Why did she stop the Eliquis?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'AFib and Stroke Risk', body: ["With Atrial Fibrillation, blood can pool in your heart and form a clot. We strongly recommend a blood thinner to protect you from having a stroke."] }], GUIDING_QUESTIONS:
   [
    'What was the most important medication therapy problem in this encounter?',
    'Why is intermittent apixaban nonadherence concerning?',
    'Why should adherence be addressed before intensifying heart failure therapy?',
    'What social determinants of health affect this patient?',
    'What interventions could improve adherence?',
    'What is the major teaching pearl of this encounter?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-angela_b-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-angela_b-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take Tylenol PRN for occasional headaches or body aches, but I avoid aspirin and NSAIDs." },
    { id: 'w4-angela_b-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 glass of wine per week." },
    { id: 'w4-angela_b-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 8 years ago, and I had a 15 pack-year history before that." },
    { id: 'w4-angela_b-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother had atrial fibrillation and suffered a stroke at age 74. My father had high blood pressure and type 2 diabetes." },
    { id: 'w4-angela_b-tue_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'transport', 'drive', 'alone', 'bus', 'ride'], response: "I live alone. I am a retired administrative assistant. Transportation can be difficult, I usually have to take the bus or get a ride." },
    { id: 'w4b_apix', topic: 'Cost Barrier', field: 'apixaban', keywords: ['apixaban', 'eliquis', 'cost', 'afford', 'stop', 'fill', 'stretch', 'skip'], response: "That Eliquis is way too expensive. I'm on a fixed income, I can't pay $50 a month for it. I was trying to stretch it out by skipping doses around refill time, but I just ran out and stopped taking it completely." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4b_a1', title: 'Stroke Risk vs Cost', icon: 'AlertCircle', color: 'dc2626', questions: [{ key: 'q1', q: 'What is her CHA2DS2-VASc score and what does it mean?' }, { key: 'q2', q: 'How can you address the cost barrier?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4b_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Discuss stroke risk, explore manufacturer assistance programs or cheaper alternatives (e.g., warfarin) if DOAC unaffordable', correct: true },
      { key: 'o2', label: 'Switch to Aspirin 81 mg', correct: false },
    ] },
  ],
})

const angelaWed = makeCase({
  id: 'w4-angela_b-wed',
  PATIENT: { ...angelaTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I started the Eliquis, but I stopped because I got bruises and got scared.",
    snapshotSummary: 'Cost barrier resolved, but Angela is now expressing fear of bleeding due to bruising and a friend\'s story.',
    diseaseStates: ['AFib'],
    learningObjectives: ['Address bleeding fears using shared decision-making', 'Calculate HAS-BLED'],
  },
  VITALS: { bp: '126/76', bpRepeat: '124/74', hr: '84', rr: '16', temp: '98.1°F', spo2: '98%', weight: '84 kg', height: "5'5\"", bmi: '30.8', flags: {} },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.3', unit: 'mEq/L', flag: 'normal' },
    { label: 'BUN', value: '17', unit: 'mg/dL', flag: 'normal' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '73', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'WBC', value: '6.5', unit: 'x10³/mm³', flag: 'normal' },
    { label: 'Hgb', value: '13.0', unit: 'g/dL', flag: 'normal' },
    { label: 'Plt', value: '236', unit: 'x10³/mm³', flag: 'normal' },
    { label: 'NT-proBNP', value: '210', unit: 'pg/mL', flag: 'high' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'AFib', detail: 'Cost resolved, fear of bleeding', flag: 'warn' }],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '49/51 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/Rate control', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'Patient stopped taking recently' },
  ],
  IMMUNIZATIONS: angelaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Patient obtained Apixaban via patient assistance program but stopped taking it due to bruising and fear of major bleeding after a friend\'s anecdote.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'fear', label: 'Bleeding Fears', placeholder: 'What are her bleeding symptoms?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Starting DOACs', body: ["This blood thinner doesn't require routine blood checks like warfarin, but you must take it exactly as prescribed. Missing doses leaves you unprotected."] }], GUIDING_QUESTIONS:
   [
    'Why is minor bruising managed differently than major bleeding?',
    'Why is continuation of apixaban appropriate?',
    'What factors contributed to nonadherence?',
    'What counseling points should be provided?',
    'How does shared decision-making improve outcomes?',
    'What is the major teaching pearl of this encounter?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-angela_b-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-angela_b-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take Tylenol PRN for occasional headaches or body aches, but I avoid aspirin and NSAIDs." },
    { id: 'w4-angela_b-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 glass of wine per week." },
    { id: 'w4-angela_b-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 8 years ago, and I had a 15 pack-year history before that." },
    { id: 'w4-angela_b-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother had atrial fibrillation and suffered a stroke at age 74. My father had high blood pressure and type 2 diabetes." },
    { id: 'w4-angela_b-wed_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'transport', 'drive', 'alone', 'bus', 'ride'], response: "I live alone. I am a retired administrative assistant. Transportation can be difficult, I usually have to take the bus or get a ride." },
    { id: 'w4b2_bruise', topic: 'Bruising Symptoms', field: 'bleeding', keywords: ['bruise', 'bruising', 'bleed', 'bleeding', 'symptoms', 'nosebleed', 'gums'], response: "I noticed some small bruises on my arms and legs without even bumping into anything. They weren't painful and went away on their own. I haven't had any gum bleeding, nosebleeds, or blood in my stool, and I haven't gone to the ER, but seeing bruises scared me." },
    { id: 'w4b2_fear', topic: 'Fear of bleeding', field: 'fear', keywords: ['scared', 'fear', 'afraid', 'stop', 'why', 'friend'], response: "My friend told me a terrifying story about someone who bled to death on these exact blood thinners. Combined with the bruises I got, I panicked and stopped taking it." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4b2_a1', title: 'Risk/Benefit Discussion', icon: 'Scale', color: '0891b2', questions: [{ key: 'q1', q: 'How do you balance her HAS-BLED score against her CHA2DS2-VASc score in counseling?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4b2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Acknowledge fear, explain that stroke risk from AFib without anticoagulation outweighs bleeding risk with Apixaban', correct: true },
      { key: 'o2', label: 'Agree to stop Apixaban since she is fearful', correct: false },
    ] },
  ],
})

const angelaThu = makeCase({
  id: 'w4-angela_b-thu',
  PATIENT: { ...angelaTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Thursday', type: '6-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I've been taking the blood thinner, and I haven't had any bleeding.",
    snapshotSummary: 'Angela successfully started Apixaban and is tolerating it well. Her HFrEF remains stable.',
    diseaseStates: ['AFib', 'HFrEF'],
    learningObjectives: ['Provide positive reinforcement and confirm adherence'],
  },
  VITALS: { bp: '124/74', bpRepeat: '122/72', hr: '80', rr: '16', temp: '98.0°F', spo2: '98%', weight: '83 kg', height: "5'5\"", bmi: '30.5', flags: {} },
  LABS: [
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal' },
    { label: 'BUN', value: '18', unit: 'mg/dL', flag: 'normal' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '72', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal' },
    { label: 'ALT', value: '24', unit: 'U/L', flag: 'normal' },
    { label: 'WBC', value: '6.6', unit: 'x10³/mm³', flag: 'normal' },
    { label: 'Hgb', value: '13.1', unit: 'g/dL', flag: 'normal' },
    { label: 'Plt', value: '240', unit: 'x10³/mm³', flag: 'normal' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'AFib', detail: 'Anticoagulated successfully', flag: 'normal' }],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '49/51 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/Rate control', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'Taking as prescribed' },
  ],
  IMMUNIZATIONS: angelaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Patient compliant with Apixaban. No bleeding events reported.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Adherence Check', placeholder: 'Check on her daily routine' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Bleeding Precautions', body: ["You may bruise more easily on this medication. If you experience severe headaches, blood in your urine or stool, or bleeding that won't stop, go to the emergency room."] }], GUIDING_QUESTIONS:
   [
    'What was the primary success demonstrated during this encounter?',
    'Why was continuation of anticoagulation appropriate?',
    'What barriers were successfully addressed?',
    'Why is reinforcement important even when a patient is doing well?',
    'What pharmacist interventions contributed most to success?',
    'What is the major teaching pearl of Patient B?'
  ],

    INTERVIEW_KNOWLEDGE: [
    { id: 'w4-angela_b-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-angela_b-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take Tylenol PRN for occasional headaches or body aches, but I avoid aspirin and NSAIDs." },
    { id: 'w4-angela_b-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 glass of wine per week." },
    { id: 'w4-angela_b-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 8 years ago, and I had a 15 pack-year history before that." },
    { id: 'w4-angela_b-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother had atrial fibrillation and suffered a stroke at age 74. My father had high blood pressure and type 2 diabetes." },
    { id: 'w4-angela_b-thu_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'transport', 'drive', 'alone', 'bus', 'ride'], response: "I live alone. I am a retired administrative assistant. Transportation can be difficult, I usually have to take the bus or get a ride." },
    { id: 'w4-angela_b-thu_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "I don't have a blood pressure cuff or a scale at home. I just come in for checkups." },
    { id: 'w4b3_adh', topic: 'Adherence', field: 'adherence', keywords: ['take', 'miss', 'every day', 'routine'], response: "Getting the Eliquis through the assistance program made it affordable, and your counseling helped me understand why I need it. I set a pillbox and I take it every morning and night. No problems at all." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4b3_a1', title: 'Maintenance', icon: 'CheckCircle', color: '10b981', questions: [{ key: 'q1', q: 'Is any change to therapy needed?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4b3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Continue current therapy, praise adherence', correct: true },
      { key: 'o2', label: 'Decrease Apixaban dose to 2.5 mg BID since she is stable', correct: false },
    ] },
  ],
})

/* ============================ ROBERT JENKINS (C) ============================ */
// Complex multi-morbidity (HFrEF + AFib + CKD + T2DM). Precise dosing and AZALEA trial application.

const robertTue = makeCase({
  id: 'w4-robert_j4-tue',
  PATIENT: { name: 'Robert Jenkins', age: 76, sex: 'male', ethnicity: 'White', mrn: 'W4-90088' },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I like to review my labs. My kidney numbers seem worse.",
    snapshotSummary: 'Robert has complex multi-morbidity. He is 76, weighs 58 kg, and has a SCr of 1.4 mg/dL. He is on Apixaban 5 mg BID, which is inappropriately dosed for his renal/age/weight profile.',
    diseaseStates: ['HFrEF', 'AFib', 'CKD', 'T2DM'],
    learningObjectives: ['Identify need for DOAC dose adjustment based on age, weight, and SCr'],
  },
  VITALS: { bp: '120/70', bpRepeat: '118/68', hr: '68', rr: '16', temp: '98.6°F', spo2: '97%', weight: '82 kg', height: "5'7\"", bmi: '28.3', flags: {} },
  LABS: [
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '5.0', unit: 'mEq/L', flag: 'normal' },
    { label: 'BUN', value: '34', unit: 'mg/dL', flag: 'normal' },
    { label: 'SCr', value: '1.82', unit: 'mg/dL', flag: 'high' },
    { label: 'eGFR', value: '38', unit: 'mL/min/1.73m²', flag: 'low' },
    { label: 'WBC', value: '6.4', unit: 'x10³/mm³', flag: 'normal' },
    { label: 'Hgb', value: '13.5', unit: 'g/dL', flag: 'normal' },
    { label: 'Plt', value: '228', unit: 'x10³/mm³', flag: 'normal' },
    { label: 'NT-proBNP', value: '165', unit: 'pg/mL', flag: 'high' },
    { label: 'HbA1c', value: '6.9', unit: '%', flag: 'normal' }
  ],
  ALERTS: [{ level: 'warn', text: 'Apixaban dose-reduction criteria: age ≥80 [No — age 76], weight ≤60 kg [No — 82 kg], SCr ≥1.5 mg/dL [Yes — SCr 1.82, but reduction requires ≥2 criteria]. Only ONE criterion met; standard dose 5 mg BID is correct.' }, { level: 'warn', text: 'CKD (eGFR 38) and polypharmacy require careful renal and electrolyte monitoring.' }],
  PROBLEMS: [
    { name: 'AFib', detail: 'On Apixaban 5 mg BID', flag: 'normal' },
    { name: 'CKD', detail: 'SCr 1.82, eGFR 38', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '97/103 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Metoprolol Succinate', dose: '100 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Spironolactone', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/T2DM', notes: '' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib', notes: '' },
    { name: 'Rosuvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'CAD', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Highly engaged patient. Reviews all labs. Excellent adherence.' }, { label: 'Social history', value: 'Former smoker. Occasional alcohol.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'questions', label: 'Patient Questions', placeholder: 'What does he want to know?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Apixaban Dosing and Renal Monitoring', body: ["Your blood thinner, apixaban, is dosed based on your age, weight, and kidney function. With your kidney function (creatinine 1.82) you meet one of the three dose-reduction criteria, but two are required to reduce the dose—so 5 mg twice daily is the correct and most protective dose for you. Your kidney function will be checked at each visit."] }], GUIDING_QUESTIONS:
   [
    'Why is continuation of GDMT appropriate despite declining eGFR?',
    'What factors may contribute to CKD progression?',
    'Why is potassium monitoring important?',
    'What is the significance of the BNP trend?',
    'How should dialysis concerns be addressed?',
    'What is the major teaching pearl of this encounter?'
  ],

    INTERVIEW_KNOWLEDGE: [
    { id: 'w4-robert_j4-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-robert_j4-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin. I avoid other over-the-counter pain relievers unless my doctor approves them." },
    { id: 'w4-robert_j4-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe 1 to 2 drinks per month at social gatherings." },
    { id: 'w4-robert_j4-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 12 years ago, and I had a 25 pack-year history before that." },
    { id: 'w4-robert_j4-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a heart attack at age 58. My mother had a stroke at age 72. My brother has coronary artery disease." },
    { id: 'w4-robert_j4-tue_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife', 'engineer', 'retired'], response: "I am a retired engineer. I live with my wife, she helps me manage everything." },
    { id: 'w4-robert_j4-tue_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "Oh yes, I am very diligent. I check my blood pressure, heart rate, and weight at home every single day." },
    { id: 'w4c_q', topic: 'Evidence question', field: 'questions', keywords: ['labs', 'kidney', 'creatinine', 'dose', 'apixaban'], response: "My creatinine is 1.82. Shouldn't my Apixaban dose be lowered? I read online that people with kidney problems need a lower dose." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4c_a1', title: 'Apixaban Dosing Criteria', icon: 'Scale', color: '13314f', questions: [{ key: 'q1', q: 'Does he meet TWO of the criteria for dose reduction (Age ≥80, Wt ≤60kg, SCr ≥1.5)?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4c_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Educate that he only meets ONE criterion (SCr), so 5 mg BID is the correct and most protective dose', correct: true },
      { key: 'o2', label: 'Reduce Apixaban to 2.5 mg BID just to be safe', correct: false },
    ] },
  ],
})

const robertWed = makeCase({
  id: 'w4-robert_j4-wed',
  PATIENT: { ...robertTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I've had a few nosebleeds recently. I'm worried about this blood thinner.",
    snapshotSummary: 'Robert is experiencing minor epistaxis on Apixaban. He is questioning the risk-benefit tradeoff.',
    diseaseStates: ['AFib'],
    learningObjectives: ['Manage minor bleeding on DOACs', 'Apply AZALEA-TIMI 71 concepts regarding future Factor XI inhibitors'],
  },
  VITALS: { bp: '120/70', bpRepeat: '118/68', hr: '68', rr: '16', temp: '98.6°F', spo2: '97%', weight: '82 kg', height: "5'7\"", bmi: '28.3', flags: {} },
  LABS: [
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal' },
    { label: 'BUN', value: '32', unit: 'mg/dL', flag: 'normal' },
    { label: 'SCr', value: '1.79', mg: 'dL', flag: 'high' },
    { label: 'eGFR', value: '39', unit: 'mL/min/1.73m²', flag: 'low' },
    { label: 'WBC', value: '6.5', unit: 'x10³/mm³', flag: 'normal' },
    { label: 'Hgb', value: '13.4', unit: 'g/dL', flag: 'normal' },
    { label: 'Plt', value: '226', unit: 'x10³/mm³', flag: 'normal' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'AFib', detail: 'Minor epistaxis on DOAC', flag: 'warn' }],
  MEDICATIONS: robertTue.MEDICATIONS,
  IMMUNIZATIONS: robertTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Reports two episodes of nosebleeds in the past month, resolving with 5 minutes of pressure. No ER visits.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'nosebleeds', label: 'Bleeding details', placeholder: 'How severe are the bleeds?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Interactions and Diet', body: ["Many antibiotics and over-the-counter pain relievers can drastically change your INR. Always ask the pharmacist before starting any new medication or supplement."] }], GUIDING_QUESTIONS:
   [
    'Why is bridging generally unnecessary in this patient?',
    'What factors influence interruption timing?',
    'What are the risks of unnecessary bridging?',
    'Why does this patient prefer written instructions?',
    'How does CKD influence anticoagulation management?',
    'What is the major teaching pearl of this encounter?'
  ],

    INTERVIEW_KNOWLEDGE: [
    { id: 'w4-robert_j4-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-robert_j4-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin. I avoid other over-the-counter pain relievers unless my doctor approves them." },
    { id: 'w4-robert_j4-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe 1 to 2 drinks per month at social gatherings." },
    { id: 'w4-robert_j4-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 12 years ago, and I had a 25 pack-year history before that." },
    { id: 'w4-robert_j4-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a heart attack at age 58. My mother had a stroke at age 72. My brother has coronary artery disease." },
    { id: 'w4-robert_j4-wed_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife', 'engineer', 'retired'], response: "I am a retired engineer. I live with my wife, she helps me manage everything." },
    { id: 'w4-robert_j4-wed_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "Oh yes, I am very diligent. I check my blood pressure, heart rate, and weight at home every single day." },
    { id: 'w4c2_bleed', topic: 'Epistaxis', field: 'nosebleeds', keywords: ['nose', 'bleed', 'epistaxis', 'severe', 'stop'], response: "They aren't huge gushers, they stop if I pinch my nose for a few minutes. But it makes me nervous. Is there a safer drug that won't make me bleed?" },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4c2_a1', title: 'Minor Bleeding Management', icon: 'Droplet', color: 'dc2626', questions: [{ key: 'q1', q: 'How should you manage this minor bleeding?' }, { key: 'q2', q: 'How does AZALEA-TIMI 71 address his desire for a "safer" drug?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4c2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Continue Apixaban, counsel on local epistaxis measures. Discuss that future therapies (Factor XI inhibitors, AZALEA trial) are being studied to decouple thrombosis from bleeding risk, but aren\'t available yet.', correct: true },
      { key: 'o2', label: 'Stop Apixaban immediately', correct: false },
    ] },
  ],
})

const robertThu = makeCase({
  id: 'w4-robert_j4-thu',
  PATIENT: { ...robertTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Thursday', type: '6-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I had my colonoscopy 10 days ago, and I'm wondering if I still need this blood thinner.",
    snapshotSummary: 'Robert is here for post-procedural follow-up after an elective screening colonoscopy 10 days ago. He questions the need for ongoing anticoagulation.',
    diseaseStates: ['HFrEF', 'AFib', 'CKD'],
    learningObjectives: ['Assess bleeding risk vs stroke risk post-procedure', 'Reinforce indication for long-term anticoagulation'],
  },
  VITALS: { bp: '120/70', bpRepeat: '118/68', hr: '68', rr: '16', temp: '98.6°F', spo2: '97%', weight: '82 kg', height: "5'7\"", bmi: '28.3', flags: {} },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal' },
    { label: 'BUN', value: '31', unit: 'mg/dL', flag: 'normal' },
    { label: 'SCr', value: '1.76', unit: 'mg/dL', flag: 'high' },
    { label: 'eGFR', value: '40', unit: 'mL/min/1.73m²', flag: 'low' },
    { label: 'WBC', value: '6.3', unit: 'x10³/mm³', flag: 'normal' },
    { label: 'Hgb', value: '13.3', unit: 'g/dL', flag: 'normal' },
    { label: 'Plt', value: '229', unit: 'x10³/mm³', flag: 'normal' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'AFib', detail: 'On Apixaban 5 mg BID', flag: 'normal' }],
  MEDICATIONS: robertTue.MEDICATIONS,
  IMMUNIZATIONS: robertTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Recent elective screening colonoscopy approximately 10 days ago.' }, { label: 'Past Surgical History', value: 'Recent screening colonoscopy with tubular adenoma removal.' }],
  OBJECTIVE_EXTRA: [
    { label: 'Gastroenterology Report', value: 'Colonoscopy (10 days ago): Two small tubular adenomas removed. No procedural complications. No post-procedural bleeding. Routine surveillance recommended by gastroenterology.' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'colonoscopy', label: 'Colonoscopy follow-up', placeholder: 'What are his concerns?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-robert_j4-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-robert_j4-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin. I avoid other over-the-counter pain relievers unless my doctor approves them." },
    { id: 'w4-robert_j4-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe 1 to 2 drinks per month at social gatherings." },
    { id: 'w4-robert_j4-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 12 years ago, and I had a 25 pack-year history before that." },
    { id: 'w4-robert_j4-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a heart attack at age 58. My mother had a stroke at age 72. My brother has coronary artery disease." },
    { id: 'w4-robert_j4-thu_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife', 'engineer', 'retired'], response: "I am a retired engineer. I live with my wife, she helps me manage everything." },
    { id: 'w4-robert_j4-thu_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "Oh yes, I am very diligent. I check my blood pressure, heart rate, and weight at home every single day." },
    { id: 'w4c3_col', topic: 'Colonoscopy Results', field: 'colonoscopy', keywords: ['colonoscopy', 'polyp', 'adenoma', 'bleeding', 'blood thinner', 'need'], response: "The gastroenterologist removed two polyps, but said everything went perfectly with no bleeding. Now that those polyps are gone, do I really still need to take Apixaban? Doesn't the success of the colonoscopy mean my bleeding risk is lower?" },
    { id: 'w4c3_peri', topic: 'Peri-procedure Anticoagulation', field: 'perioperative', keywords: ['stop', 'hold', 'before', 'resume', 'restart', 'after', 'procedure'], response: "I stopped the Apixaban two days before the colonoscopy like my cardiologist told me to. Since there was no bleeding, they told me to restart it the day after the procedure, which I did." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4c3_a1', title: 'Anticoagulation Reassessment', icon: 'ShieldAlert', color: 'dc2626', questions: [{ key: 'q1', q: 'Does a successful colonoscopy alter his stroke risk or the underlying indication for anticoagulation?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4c3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Reinforce that long-term anticoagulation remains indicated despite successful colonoscopy', correct: true },
      { key: 'o2', label: 'Discontinue Apixaban since the bleeding source (polyps) was removed', correct: false },
    ] },
  ],
  COUNSELING: [{ id: 'c1', title: 'Long-Term Anticoagulation', body: ["It's great news that the colonoscopy went well and the polyps were removed. However, we take Apixaban to prevent strokes caused by your atrial fibrillation. The polyps were a potential bleeding risk, but removing them does not cure your atrial fibrillation or lower your stroke risk. Therefore, you must continue taking your blood thinner exactly as prescribed."] }],
})

export const W4_CASES = [michaelTue, michaelWed, michaelThu, angelaTue, angelaWed, angelaThu, robertTue, robertWed, robertThu]
export const W4_RUBRICS = {}
