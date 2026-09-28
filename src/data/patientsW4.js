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
    day: 'Tuesday', type: 'Initial Ambulatory Care Cardiology Clinic Visit', difficulty: 'Foundational', difficultyTone: 'teal',
    chiefConcern: "The cardiologist said my heart muscle is weak and I need to start new medications. Does this mean my heart is going to stop?",
    snapshotSummary: 'Newly diagnosed HFrEF (LVEF 35%). Referred by PCP for progressive dyspnea and reduced exercise tolerance. Ambulatory care cardiology clinic. Needs initiation of GDMT.',
    diseaseStates: ['HFrEF', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Identify HFrEF and ACC/AHA stage', 'Initiate the 4 pillars of GDMT'],
    visitDate: '09/09/2026',
  },
  VITALS: { bp: '138/84 mmHg', bpRepeat: '136/82 mmHg', hr: '82 bpm', rr: '18 breaths/min', temp: '98.4°F', spo2: '98%', spo2Qualifier: 'on room air', weight: '102 kg', height: "5'10\"", bmi: '32.2 kg/m²', vitalsTime: '09/09/2026 09:14', flags: {} },
  LABS: [
    { label: 'BNP', value: '320', unit: 'pg/mL', flag: 'high', labDate: '09/09/2026 07:50' },
    { label: 'K', value: '4.3', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'eGFR', value: '88', unit: 'mL/min/1.73m²', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'BUN', value: '17', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Glucose', value: '102', unit: 'mg/dL', flag: 'borderline', labDate: '09/09/2026 07:50' },
    { label: 'AST', value: '24', unit: 'U/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'ALT', value: '26', unit: 'U/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'LDL-C', value: '101', unit: 'mg/dL', flag: 'borderline', labDate: '09/09/2026 07:50' },
    { label: 'HDL-C', value: '46', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'TG', value: '178', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Total Chol', value: '192', unit: 'mg/dL', flag: 'borderline', labDate: '09/09/2026 07:50' },
  ],
  ALERTS: [
    { level: 'warn', text: 'HFrEF (LVEF 35%) not on optimal GDMT. Requires 36-hour washout from Lisinopril before ARNI initiation. Missing evidence-based beta blocker, MRA, and SGLT2i.' },
  ],
  PROBLEMS: [
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 35%, mild LV dilation, no significant valvular abnormalities. NYHA Class II, ACC/AHA Stage C.', flag: 'high' },
    { name: 'Hypertension', detail: 'On Lisinopril 20 mg and HCTZ 25 mg (BP 138/84 mmHg)', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg daily (LDL-C 101 mg/dL)', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '20 mg', route: 'by mouth', freq: 'daily', indication: 'HTN', notes: 'Discontinue — requires 36-hour washout before ARNI initiation' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HTN', notes: 'Adherence maintained daily' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: 'Cardiovascular risk reduction' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date (received)', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date (primary series completed)', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented (care gap)', flag: 'warn' },
    { name: 'Shingrix', status: 'Not documented (care gap)', flag: 'warn' },
    { name: 'Tdap', status: 'Last documented approximately 9 years ago (overdue)', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '58-year-old male referred by primary care provider for progressive exertional dyspnea, fatigue, reduced exercise tolerance, and intermittent lower extremity ankle edema over the past 6 months at the ambulatory care cardiology clinic. Patient initially attributed symptoms to aging, weight gain, and reduced fitness / being out of shape. New nonischemic cardiomyopathy diagnosis with LVEF 35%. Denies chest pain, palpitations, syncope, orthopnea, paroxysmal nocturnal dyspnea (PND), recent hospitalizations, or recent emergency department visits. Notes absence of home blood pressure monitoring and home weight tracking. Reports high overall medication adherence across all current agents (Lisinopril 20 mg daily, HCTZ 25 mg daily). Patient expresses anxiety regarding diagnosis, fearing that heart failure means his heart will stop working. Has limited understanding of heart failure, ejection fraction, home monitoring, and long-term disease management with no prior formal HF education. Stated goal is to understand heart failure, treatment options, and therapy goals.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular: Denies chest pain, palpitations, syncope, orthopnea, or paroxysmal nocturnal dyspnea (PND). Respiratory: Reports exertional dyspnea and reduced exercise tolerance. Musculoskeletal/Edema: Intermittent ankle edema noted.' },
    { label: 'Past Medical History', value: 'Hypertension (HTN), Hyperlipidemia (HLD), Obesity (Class I Obesity via BMI 32.2 kg/m²).' },
    { label: 'Social History', value: 'Married, lives with wife. Works full-time as an accountant. Former smoker (20 pack-year history, quit 5 years ago). Drinks 1–2 alcoholic beverages on weekends. Denies illicit drug use.' },
    { label: 'Family History', value: 'Father had CAD/HF/HTN and MI at age 62. Mother has hypertension (HTN) and type 2 diabetes.' },
    { label: 'OTC & Allergies', value: 'Daily multivitamin. Denies other OTC medications or herbal supplements. NKDA.' },
    { label: 'Past Surgical History', value: 'Appendectomy at age 24.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Echocardiogram & Lab Interpretations', value: 'First Echocardiogram documented (no prior LVEF for comparison): LVEF 35%, mild left ventricular dilation, no significant valvular abnormalities. Laboratory Interpretations: BNP 320 pg/mL is elevated (supporting HFrEF diagnosis); NT-proBNP not obtained (only BNP reported). Serum potassium (4.3 mEq/L) meets safety threshold criteria for GDMT initiation. Renal function (SCr 1.0 mg/dL, eGFR 88 mL/min/1.73m²) meets safety threshold criteria for GDMT initiation. LFTs (AST 24 U/L, ALT 26 U/L) are within normal reference limits (confirming statin and GDMT safety). Glucose (102 mg/dL) is in the borderline elevated / pre-diabetic range. LDL-C (101 mg/dL) contextualized on current Atorvastatin 40 mg daily. TSH/thyroid studies not documented (noted as missing in initial HF workup). Office blood pressure (138/84 mmHg) is slightly above traditional HTN goals but meets safety criteria for GDMT initiation and titration.' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'symptoms', label: 'Heart Failure Symptoms & Psychosocial Context', placeholder: 'Describe symptoms, fears, and education needs' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Heart Failure Diagnosis & 36-Hour Washout', body: ["Heart failure means your heart muscle is weakened, not that it will stop working. We will discontinue Lisinopril and wait 36 hours before starting Sacubitril/Valsartan (Entresto) to avoid dangerous allergic swelling (angioedema). We will also add Carvedilol, Dapagliflozin, and Spironolactone sequentially."] }], 
  GUIDING_QUESTIONS: [
    'What findings support a diagnosis of HFrEF?',
    'What are the four foundational medication classes for HFrEF?',
    'Why is a 36-hour washout required between ACEi and ARNI?',
    'What monitoring is required after initiation of heart failure therapy?',
    'Why are daily weights important?',
    'What counseling points should be provided during a new heart failure diagnosis?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-michael_t4-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-michael_t4-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin, but no other over-the-counter medications or supplements." },
    { id: 'w4-michael_t4-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 to 2 drinks on the weekends, usually a glass of wine or beer." },
    { id: 'w4-michael_t4-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago. I smoked about a pack a day for 20 years, so I guess that's about 20 pack-years." },
    { id: 'w4-michael_t4-tue_illicit', topic: 'Illicit drug use', field: 'illicit', keywords: ['illicit', 'drug', 'marijuana', 'cocaine', 'street'], response: "I do not use any illicit drugs or street substances." },
    { id: 'w4-michael_t4-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had hypertension and suffered a heart attack at age 62. My mother has hypertension and type 2 diabetes." },
    { id: 'w4-michael_t4-tue_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife'], response: "I am married and live with my wife. I work full-time as an accountant." },
    { id: 'w4-michael_t4-tue_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "I don't check my blood pressure or weigh myself at home. Notes absence of home blood pressure or home weight monitoring." },
    { id: 'w4a_sym', topic: 'Symptoms', field: 'symptoms', keywords: ['swelling', 'breathe', 'shortness', 'stairs', 'edema', 'tired', 'fatigue', 'exercise', 'energy', 'when', 'start'], response: "It's been gradually getting worse over about the last 6 months. I initially attributed my symptoms to aging, weight gain, and being out of shape. I get winded climbing stairs and I'm more tired than usual. My ankles get a little puffy by the end of the day." },
    { id: 'w4-michael_t4-tue_hctz', topic: 'HCTZ adherence', field: 'hctzAdherence', keywords: ['water pill', 'hydrochlorothiazide', 'hctz', 'restroom', 'bathroom', 'skip', 'miss', 'urination'], response: "I take the water pill every day as prescribed." },
    { id: 'w4-michael_t4-tue_fear', topic: 'Patient fear and understanding', field: 'fears', keywords: ['fear', 'stop', 'heart stop', 'die', 'understand', 'scared'], response: "The doctor said my heart muscle is weak. Does this mean my heart is going to stop working? I really want to understand what is happening and what these medications do." },
    { id: 'w4-michael_t4-tue_surgery', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'appendix', 'appendectomy'], response: "Yes, I had my appendix out when I was 24. That's the only surgery I've had." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4a1_a1', 
      title: 'Newly Diagnosed Heart Failure with Reduced Ejection Fraction (HFrEF)', 
      icon: 'Heart', 
      color: '13314f', 
      questions: [
        { 
          key: 'q1', 
          q: 'What is the primary diagnosis, clinical classification, and supporting evidence?',
          defaultAnswer: 'Newly diagnosed Heart Failure with Reduced Ejection Fraction (HFrEF), NYHA Class II, ACC/AHA Stage C. Patient initially attributed symptoms to aging, weight gain, and reduced fitness. Supporting evidence includes LVEF 35% with mild left ventricular dilation (first echocardiogram, no prior LVEF for comparison), elevated BNP 320 pg/mL (supporting HFrEF diagnosis; NT-proBNP not obtained), exertional dyspnea, fatigue, reduced exercise tolerance, and intermittent lower extremity ankle edema. TSH/thyroid studies not documented in initial workup.'
        },
        { 
          key: 'q2', 
          q: 'Why is current therapy inadequate, and what guideline recommendations support GDMT initiation?',
          defaultAnswer: 'Current regimen (Lisinopril 20 mg PO daily and Hydrochlorothiazide 25 mg PO daily) does not represent contemporary guideline-directed medical therapy (GDMT) for HFrEF. Patient is not currently on ARNI therapy, an evidence-based beta blocker (Carvedilol or Metoprolol Succinate), an MRA (Spironolactone), or an SGLT2 inhibitor (Dapagliflozin or Empagliflozin). Per 2022 AHA/ACC/HFSA Heart Failure Guidelines, all symptomatic HFrEF patients should receive foundational 4-pillar GDMT to achieve four core goals: reduce mortality, reduce heart failure hospitalizations, improve symptoms, and slow disease progression. Serum potassium (4.3 mEq/L), renal function (SCr 1.0 mg/dL, eGFR 88 mL/min/1.73m²), LFTs (AST 24 U/L, ALT 26 U/L), and blood pressure (138/84 mmHg) meet safety threshold criteria for comprehensive GDMT initiation.'
        }
      ] 
    },
    {
      id: 'w4a1_a2',
      title: 'Hypertension',
      icon: 'Activity',
      color: '10b981',
      questions: [
        {
          key: 'q3',
          q: 'What is the status of hypertension and its relationship to GDMT initiation?',
          defaultAnswer: 'Hypertension is present with office BP 138/84 mmHg (repeat 136/82 mmHg), which is slightly above traditional hypertension goals but meets safety criteria for GDMT initiation and titration. Initiation of ARNI (Sacubitril/Valsartan) and evidence-based beta blocker (Carvedilol) will provide additional blood pressure lowering. Plan for BP reassessment during GDMT optimization.'
        }
      ]
    },
    {
      id: 'w4a1_a3',
      title: 'Heart Failure Knowledge Deficit & Anxiety',
      icon: 'HelpCircle',
      color: 'd97706',
      questions: [
        {
          key: 'q4',
          q: 'What knowledge deficits and psychosocial concerns are present?',
          defaultAnswer: 'Heart failure knowledge deficit and anxiety identified as a distinct problem. Patient has limited understanding of heart failure, ejection fraction, home monitoring, and long-term disease management, expressing fear that heart failure means his heart will stop working. Patient has never received formal heart failure education. Providing education represents an essential opportunity to improve patient engagement, self-management, and GDMT adherence per 2022 AHA/ACC/HFSA guidelines.'
        }
      ]
    },
    {
      id: 'w4a1_a4',
      title: 'Preventive Care Gaps',
      icon: 'ShieldCheck',
      color: '059669',
      questions: [
        {
          key: 'q5',
          q: 'What preventive care gaps exist and what is the plan for optimization?',
          defaultAnswer: 'Preventive care gaps identified: Pneumococcal vaccination is not documented (care gap), Shingrix series is not documented (care gap), and Tdap is overdue (~9 years ago). Influenza and COVID-19 vaccinations are up to date. Preventive care optimization remains appropriate.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4a1_p1', 
      title: 'HFrEF Guideline-Directed Medical Therapy (GDMT) Initiation Strategy', 
      options: [
        { key: 'o1', label: 'Discontinue Lisinopril 20 mg PO daily', correct: true },
        { key: 'o2', label: 'Mandate a 36-hour washout period after Lisinopril discontinuation before ARNI initiation to avoid angioedema risk', correct: true },
        { key: 'o3', label: 'Initiate Sacubitril/Valsartan (Entresto) 49/51 mg PO twice daily (PO BID) following the 36-hour washout period', correct: true },
        { key: 'o4', label: 'Initiate evidence-based Beta Blocker: Carvedilol 3.125 mg PO twice daily (PO BID) (or Metoprolol Succinate 25 mg PO daily)', correct: true },
        { key: 'o5', label: 'Plan for future sequential initiation of SGLT2 inhibitor: Dapagliflozin 10 mg PO daily (or Empagliflozin 10 mg PO daily)', correct: true },
        { key: 'o6', label: 'Plan for future sequential initiation of MRA: Spironolactone 25 mg PO daily contingent on renal function and potassium stability', correct: true },
        { key: 'o7', label: 'Continue Lisinopril and add Furosemide', correct: false }
      ] 
    },
    {
      id: 'w4a1_p2',
      title: 'Hypertension Management Plan',
      options: [
        { key: 'o8', label: 'Continue monitoring blood pressure during GDMT initiation and titration', correct: true },
        { key: 'o9', label: 'Reassess antihypertensive needs as GDMT (ARNI and Beta Blocker) lowers blood pressure', correct: true }
      ]
    },
    {
      id: 'w4a1_p3',
      title: 'Patient Education & Self-Management Plan',
      options: [
        { key: 'o10', label: 'Educate patient regarding heart failure diagnosis, ejection fraction, expected treatment goals, and medication benefits per 2022 AHA/ACC/HFSA guidelines', correct: true },
        { key: 'o11', label: 'Review rationale for guideline-directed medical therapy (GDMT) with patient (including mortality and hospitalization reduction)', correct: true },
        { key: 'o12', label: 'Address patient anxiety: reassure patient that heart failure means weakened pumping, not that the heart will stop working', correct: true },
        { key: 'o13', label: 'Educate regarding daily weight monitoring: encourage patient to purchase or utilize a home scale (same scale, morning after voiding; instruct to contact healthcare team if weight increases >=3 lbs in 1 day or >=5 lbs in 1 week)', correct: true },
        { key: 'o14', label: 'Educate regarding sodium restriction and importance of medication adherence', correct: true },
        { key: 'o15', label: 'Review signs and symptoms of worsening HF and discuss when to contact the healthcare team', correct: true }
      ]
    },
    {
      id: 'w4a1_p4',
      title: 'Dedicated Monitoring Subsection',
      options: [
        { key: 'o16', label: 'Monitor blood pressure, heart rate, weight, dyspnea, exercise tolerance, edema, renal function (SCr, eGFR), serum potassium, and medication adherence', correct: true },
        { key: 'o17', label: 'Repeat basic metabolic panel (BMP) in approximately 1 to 2 weeks after therapy initiation to recheck renal function and potassium', correct: true }
      ]
    },
    {
      id: 'w4a1_p5',
      title: 'Preventive Care Optimization Plan',
      options: [
        { key: 'o18', label: 'Review vaccination history at future visits', correct: true },
        { key: 'o19', label: 'Recommend Pneumococcal vaccination per current ACIP recommendations', correct: true },
        { key: 'o20', label: 'Assess need for Shingrix vaccination and plan Tdap booster update when due', correct: true }
      ]
    },
    {
      id: 'w4a1_p6',
      title: 'Follow-Up Subsection',
      options: [
        { key: 'o21', label: 'Schedule follow-up visit in approximately 4 to 6 weeks for tolerability assessment, laboratory monitoring, and further GDMT optimization/titration', correct: true },
        { key: 'o22', label: 'Future visits will focus on progressive implementation of all four foundational HFrEF medication classes', correct: true }
      ]
    }
  ],
})

const michaelWed = makeCase({
  id: 'w4-michael_t4-wed',
  PATIENT: { ...michaelTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I'm taking all the new pills, but I feel a bit dizzy when I stand up.",
    snapshotSummary: 'Michael was started on the 4 pillars. He is experiencing orthostatic hypotension. HCTZ discontinuation is the key management step.',
    diseaseStates: ['HFrEF'],
    learningObjectives: ['Manage GDMT side effects (orthostasis)', 'Adjust non-GDMT meds to facilitate GDMT tolerance'],
    visitDate: '09/24/2026',
  },
  VITALS: { bp: '106/68', bpRepeat: '104/66', hr: '62', rr: '16', temp: '98.6°F', spo2: '97%', weight: '101 kg', height: "5'10\"", bmi: '31.9', vitalsTime: '09/24/2026 09:14', flags: { bp: 'warn' } },
  LABS: [
    { label: 'NT-proBNP', value: '165', unit: 'pg/mL', flag: 'high', labDate: '09/24/2026 07:50' },
    { label: 'K', value: '4.5', unit: 'mEq/L', flag: 'normal', labDate: '09/24/2026 07:50' },
    { label: 'SCr', value: '1.08', unit: 'mg/dL', flag: 'normal', labDate: '09/24/2026 07:50' },
    { label: 'eGFR', value: '80', unit: 'mL/min/1.73m²', flag: 'normal', labDate: '09/24/2026 07:50' }
  ],
  ALERTS: [],
  PROBLEMS: [
    { name: 'Orthostatic Hypotension (Primary MTP)', detail: 'Volume depletion from HCTZ + Carvedilol + Sacubitril/Valsartan. Target HCTZ for discontinuation while preserving GDMT.', flag: 'high' },
    { name: 'HFrEF', detail: 'On 4-pillar GDMT x 3 months. Ankle edema resolved, weight down 2 kg (103 -> 101 kg), NT-proBNP improved (320 -> 165 pg/mL).', flag: 'normal' },
    { name: 'Hypertension', detail: 'BP low due to GDMT + HCTZ — discontinue HCTZ to raise BP headroom for GDMT maintenance', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan (Entresto)', dose: '24/26 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: 'Continue current dose' },
    { name: 'Carvedilol', dose: '3.125 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: 'Continue current dose' },
    { name: 'Spironolactone', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: 'Continue current dose' },
    { name: 'Dapagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: 'Continue current dose' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HTN', notes: 'Non-GDMT diuretic — target for discontinuation to relieve orthostasis' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: michaelTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '3-Month Follow-Up. Reports dizziness upon standing since starting the new medications. Dizziness is postural (standing up from desk or bed) and self-limited, resolving after a few seconds. Ankle edema has completely resolved and residual shortness of breath with stair-climbing has significantly improved. Denies chest pain, resting dyspnea, orthopnea, paroxysmal nocturnal dyspnea, or emergency department visits.' },
    { label: 'Social History', value: 'Married, lives with wife. Works full-time as an accountant. Former smoker (20 pack-year history, quit 5 years ago). Drinks 1-2 alcoholic beverages on weekends.' },
    { label: 'Family History', value: 'Father had CAD/HF/HTN and MI at age 62. Mother has hypertension (HTN) and type 2 diabetes.' },
    { label: 'OTC & Allergies', value: 'Daily multivitamin. Denies other OTC medications or herbal supplements. NKDA.' },
    { label: 'Past Surgical History', value: 'Appendectomy at age 24.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend Analysis', value: 'Weight: 101 kg (2 kg fluid reduction from baseline 103 kg; edema resolved). NT-proBNP: 165 pg/mL (significantly improved from baseline 320 pg/mL). SCr: 1.08 mg/dL / eGFR 80 (stable change from baseline 1.0 / 88). BP: 106/68 mmHg (repeat 104/66 mmHg) — low BP consistent with orthostatic risk.' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'dizziness', label: 'Dizziness Assessment', placeholder: 'When does he feel dizzy?' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Fluid Management & Orthostasis', body: ["Rise slowly from bed or sitting position. Sit on the edge of the bed for a moment before standing. Drink adequate fluids. Monitor daily weight each morning after voiding; call clinic if weight increases by 3 lbs in 1 day or 5 lbs in 1 week."] }], 
  GUIDING_QUESTIONS: [
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
    { id: 'w4-michael_t4-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 to 2 drinks on the weekends, usually a glass of wine or beer." },
    { id: 'w4-michael_t4-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago. I had about a 20 pack-year history." },
    { id: 'w4-michael_t4-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had hypertension and suffered a heart attack at age 62. My mother has hypertension and type 2 diabetes." },
    { id: 'w4-michael_t4-wed_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife'], response: "I am married and live with my wife. I work full-time as an accountant." },
    { id: 'w4-michael_t4-wed_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "I have been trying to weigh myself but not consistently. I don't have a home blood pressure cuff yet." },
    { id: 'w4a2_dizzy', topic: 'Orthostasis', field: 'dizziness', keywords: ['stand', 'dizzy', 'lightheaded', 'when'], response: "It's mostly when I get out of bed in the morning or stand up quickly from my desk. It passes after a few seconds." },
    { id: 'w4-michael_t4-wed_surgery', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'appendix', 'appendectomy'], response: "Yes, I had my appendix out when I was 24. That's the only surgery I've had." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4a2_a1', 
      title: 'Orthostasis & Primary Medication Therapy Problem', 
      icon: 'AlertTriangle', 
      color: 'd97706', 
      questions: [
        { 
          key: 'q1', 
          q: 'What is the primary medication therapy problem and its contributing causes?',
          defaultAnswer: 'Orthostatic hypotension identified as the primary medication therapy problem, attributed to volume depletion and additive BP lowering from Carvedilol, Sacubitril/Valsartan, and Hydrochlorothiazide (HCTZ).'
        },
        { 
          key: 'q2', 
          q: 'Why should GDMT be preserved rather than stopped or reduced?',
          defaultAnswer: 'Guideline-directed medical therapy (Sacubitril/Valsartan, Carvedilol, Spironolactone, Dapagliflozin) provides proven mortality and hospitalization benefits in HFrEF. GDMT should NOT be stopped or reduced for mild orthostasis; instead, target the non-GDMT diuretic (HCTZ 25 mg daily) for discontinuation.'
        }
      ] 
    },
    {
      id: 'w4a2_a2',
      title: 'HFrEF Efficacy & Biomarker Trend',
      icon: 'Heart',
      color: '13314f',
      questions: [
        {
          key: 'q3',
          q: 'What findings demonstrate treatment efficacy on 4-pillar GDMT?',
          defaultAnswer: 'HFrEF is clinically improving on 4-pillar GDMT, evidenced by complete resolution of peripheral edema, 2 kg fluid weight reduction (103 kg -> 101 kg), and significant NT-proBNP improvement from baseline 320 pg/mL to 165 pg/mL.'
        },
        {
          key: 'q4',
          q: 'What safety monitoring is required after diuretic adjustment?',
          defaultAnswer: 'Serum potassium (4.5 mEq/L) and renal function (SCr 1.08 mg/dL, eGFR 80 mL/min/1.73m²) are stable. Monitor blood pressure, renal function, and electrolytes in 2 to 4 weeks after stopping HCTZ.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4a2_p1', 
      title: 'Medication Adjustments & GDMT Continuation', 
      options: [
        { key: 'o1', label: 'Discontinue Hydrochlorothiazide (HCTZ) 25 mg PO daily to reduce volume depletion and lower BP burden, relieving orthostasis', correct: true },
        { key: 'o2', label: 'Continue all 4 GDMT pillars at current doses: Sacubitril/Valsartan 24/26 mg PO BID, Carvedilol 3.125 mg PO BID, Spironolactone 25 mg PO daily, Dapagliflozin 10 mg PO daily, Atorvastatin 40 mg PO daily', correct: true },
        { key: 'o3', label: 'Stop Carvedilol and Sacubitril/Valsartan', correct: false },
      ] 
    },
    {
      id: 'w4a2_p2',
      title: 'Monitoring & Follow-Up Plan',
      options: [
        { key: 'o4', label: 'Recheck blood pressure and orthostatic vitals in 2 to 4 weeks following HCTZ discontinuation', correct: true },
        { key: 'o5', label: 'Monitor basic metabolic panel (potassium, SCr, eGFR) and CBC at 2-4 week follow-up to ensure medication safety', correct: true },
        { key: 'o6', label: 'Counsel patient on orthostatic precautions: rise slowly from bed/chair, sit at bedside before standing, maintain oral hydration', correct: true },
        { key: 'o7', label: 'Reinforce daily weight tracking (same scale, morning after voiding) and instruct to call clinic if weight increases by >=3 lbs in 1 day or >=5 lbs in 1 week', correct: true },
        { key: 'o8', label: 'Re-evaluate BP at next visit with goal to resume up-titration of Carvedilol and Sacubitril/Valsartan toward target guideline doses once orthostasis resolves', correct: true },
        { key: 'o9', label: 'Schedule follow-up visit in 2 to 4 weeks (1 month) for reassessment', correct: true },
      ]
    }
  ],
})

const michaelThu = makeCase({
  id: 'w4-michael_t4-thu',
  PATIENT: { ...michaelTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Thursday', type: 'Routine Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I feel great and my heart function improved. Can I stop taking these medications?",
    snapshotSummary: 'Michael presents to the ambulatory care cardiology clinic for a routine 6-month follow-up after GDMT optimization. EF improved from 35% to 45% (HFimpEF). Asks about discontinuing medications now that he feels well.',
    diseaseStates: ['HFrEF', 'HFimpEF', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Recognize HFimpEF and why GDMT is maintained lifelong', 'Understand treatment success vs cure in heart failure'],
    visitDate: '12/24/2026',
  },
  VITALS: { bp: '112/68', bpRepeat: '114/70', hr: '62', rr: '16', temp: '98.1°F', spo2: '98%', spo2Qualifier: 'on room air', weight: '97 kg', height: "5'10\"", bmi: '30.7', vitalsTime: '12/24/2026 09:14', flags: {} },
  LABS: [
    { label: 'NT-proBNP', value: '92', unit: 'pg/mL', flag: 'normal', labDate: '12/24/2026 07:50' },
    { label: 'Na', value: '137', unit: 'mEq/L', flag: 'normal', labDate: '12/24/2026 07:50' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal', labDate: '12/24/2026 07:50' },
    { label: 'BUN', value: '20', unit: 'mg/dL', flag: 'normal', labDate: '12/24/2026 07:50' },
    { label: 'SCr', value: '1.2', unit: 'mg/dL', flag: 'normal', labDate: '12/24/2026 07:50' },
    { label: 'eGFR', value: '75', unit: 'mL/min/1.73m²', flag: 'normal', labDate: '12/24/2026 07:50' },
    { label: 'AST', value: '23', unit: 'U/L', flag: 'normal', labDate: '12/24/2026 07:50' },
    { label: 'ALT', value: '24', unit: 'U/L', flag: 'normal', labDate: '12/24/2026 07:50' }
  ],
  ALERTS: [],
  PROBLEMS: [
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF) → HFimpEF', detail: 'LVEF improved from baseline 35% to 45% on 4-pillar GDMT. Fully optimized regimen.', flag: 'normal' },
    { name: 'Hypertension', detail: 'Controlled on current HF regimen (office BP 112/68, home 115/70)', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg daily for CV risk reduction', flag: 'normal' }
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan (Entresto)', dose: '97/103 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: 'Target dose achieved' },
    { name: 'Metoprolol Succinate', dose: '100 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: 'Target dose achieved (extended-release)' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: 'Target dose achieved' },
    { name: 'Spironolactone', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: 'Most recently added GDMT agent (target dose)' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: 'Cardiovascular risk reduction' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date (received)', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date (received)', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Received (completed since previous visit)', flag: 'normal' },
    { name: 'Shingrix', status: 'Dose #1 received (Dose #2 pending / due in 2-6 months)', flag: 'warn' },
    { name: 'Tdap', status: 'Up to date (due for booster in ~1 year)', flag: 'normal' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '58-year-old male presents for a routine 6-month follow-up at the ambulatory care cardiology clinic following 6 months of GDMT initiation. Reports marked improvement in exercise tolerance and energy; activities previously causing dyspnea are now easier. Walks for 30–40 minutes most days with only occasional fatigue during strenuous exertion. Dizziness and peripheral edema have completely resolved; weight is stable. Denies chest pain, orthopnea, paroxysmal nocturnal dyspnea (PND), palpitations, syncope, emergency department visits, or hospitalizations since last visit. Excellent medication adherence and good tolerability. Ongoing sodium reduction efforts reported. Asks if medications can be discontinued now that he feels well and heart function has improved.' },
    { label: 'Past Medical History', value: 'Heart Failure with Reduced Ejection Fraction (HFrEF, baseline LVEF 35%), Hypertension (HTN), Hyperlipidemia (HLD), Obesity.' },
    { label: 'Social History', value: 'Married, lives with wife. Works full-time as an accountant. Former smoker (20 pack-year history, quit 5 years ago). Drinks 1–2 alcoholic beverages on weekends. Denies illicit drug use. Patient maintains regular physical activity as an ongoing lifestyle goal (walking 30-40 min most days).' },
    { label: 'Family History', value: 'Father had CAD/HF/HTN and MI at age 62. Mother has hypertension (HTN) and type 2 diabetes.' },
    { label: 'OTC & Allergies', value: 'Daily multivitamin. Denies other OTC medications or herbal supplements. NKDA.' },
    { label: 'Past Surgical History', value: 'Appendectomy at age 24.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend & Home Vitals', value: 'Repeat Echocardiogram (6-Month): LVEF 45% (significantly improved from baseline LVEF 35%). Mild LV dilation reduced. Echocardiogram interpretation demonstrates improved left ventricular systolic function, consistent with Heart Failure with Improved Ejection Fraction (HFimpEF). NT-proBNP downward trend: baseline 320 pg/mL → previous 165 pg/mL → current 92 pg/mL. Home vital sign measurements corroborate office blood pressure and heart rate values (home BP average: 115/70 mmHg, home HR average: 62 bpm). Weight: 97 kg (BMI 30.7 kg/m²). Serum potassium (4.8 mEq/L) and eGFR (75 mL/min/1.73m²) are acceptable and non-limiting for MRA/ARNi therapy, supporting safety and continuation of the 4-drug GDMT regimen.' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'discontinuation', label: 'Medication Education & Discontinuation Query', placeholder: 'Address patient question about stopping medications' },
  ],
  COUNSELING: [{ id: 'c1', title: 'HFimpEF & Lifelong GDMT Adherence', body: ["Your ejection fraction improved to 45% because the medications are working (treatment success, not a cure). Discontinuing or reducing GDMT can cause heart failure relapse and worsening heart function. Maintain maximally tolerated GDMT long term."] }], 
  GUIDING_QUESTIONS: [
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
    { id: 'w4-michael_t4-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 to 2 drinks on the weekends, usually a glass of wine or beer." },
    { id: 'w4-michael_t4-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago. I had about a 20 pack-year history." },
    { id: 'w4-michael_t4-thu_illicit', topic: 'Illicit drug use', field: 'illicit', keywords: ['illicit', 'drug', 'marijuana', 'cocaine', 'street'], response: "I do not use any illicit drugs or street substances." },
    { id: 'w4-michael_t4-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had hypertension and suffered a heart attack at age 62. My mother has hypertension and type 2 diabetes." },
    { id: 'w4-michael_t4-thu_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife'], response: "I am married and live with my wife. I work full-time as an accountant. I maintain regular physical activity as an ongoing lifestyle goal." },
    { id: 'w4-michael_t4-thu_surgery', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'appendix', 'appendectomy'], response: "Yes, I had my appendix out when I was 24. That's the only surgery I've had." },
    { id: 'w4-michael_t4-thu_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "I weigh myself daily (stable at 97 kg). My home vital sign measurements corroborate office blood pressure and heart rate values, averaging 115/70 mmHg with a heart rate of 62 bpm." },
    { id: 'w4a3_discontinue', topic: 'Medication Discontinuation Query', field: 'discontinuation', keywords: ['stop', 'discontinue', 'feel good', 'cure', 'why keep taking'], response: "Since my ejection fraction improved to 45% and I feel great, do I still need to take all these heart medications?" },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4a3_a1', 
      title: 'Heart Failure with Improved Ejection Fraction (HFimpEF)', 
      icon: 'ArrowUpCircle', 
      color: '13314f', 
      questions: [
        { 
          key: 'q1', 
          q: 'What is the updated diagnosis based on repeat echocardiogram and clinical course?',
          defaultAnswer: 'Heart Failure with Improved Ejection Fraction (HFimpEF). 58-year-old male with HFrEF (baseline LVEF 35%) shows significant clinical improvement with repeat echocardiogram LVEF 45% (demonstrating improved left ventricular systolic function), marked exercise tolerance improvement (walking 30-40 min), complete resolution of edema, stable weight (97 kg), and NT-proBNP downward trend from baseline 320 pg/mL to previous 165 pg/mL to current 92 pg/mL. Home vital sign measurements corroborate office blood pressure and heart rate values (home BP 115/70 mmHg, home HR 62 bpm). No HF hospitalizations or ED visits since GDMT initiation. Excellent adherence and therapy tolerated without adverse effects. Serum potassium (4.8 mEq/L) and eGFR (75 mL/min/1.73m²) are acceptable and not limiting therapy.'
        },
        { 
          key: 'q2', 
          q: 'Should GDMT be stopped or reduced now that LVEF has improved to 45%?',
          defaultAnswer: 'No. Clinical scenario is identified as HFimpEF, NOT resolution or cure of disease. Per ACC/AHA guidelines, improvement reflects treatment success. Discontinuing or reducing GDMT carries high risk of recurrent LV dysfunction, worsening symptoms, HF hospitalization, and increased mortality. Spironolactone was the most recently added agent, completing the fully optimized 4-pillar GDMT regimen (Sacubitril/Valsartan, Metoprolol Succinate, Empagliflozin, Spironolactone). Primary focus of visit is maintenance, adherence reinforcement, and monitoring. All 4 GDMT pillars must be maintained as maximally tolerated GDMT long term at current target doses. Blood pressure, renal function, and potassium are acceptable and non-limiting for MRA and ARNi therapy.'
        }
      ] 
    },
    {
      id: 'w4a3_a2',
      title: 'Hypertension',
      icon: 'Heart',
      color: '10b981',
      questions: [
        {
          key: 'q3',
          q: 'What is the status and management of hypertension?',
          defaultAnswer: 'Hypertension is controlled. Office BP 112/68 mmHg and home average BP 115/70 mmHg are within acceptable target range (home vital sign measurements corroborate office values), supporting continuation of current therapy. BP is well-controlled and acceptable for current ARNi and beta-blocker dosing through the 4-pillar HF regimen without requiring separate antihypertensive agents. No medication changes or dose adjustments needed for HTN at this visit.'
        }
      ]
    },
    {
      id: 'w4a3_a3',
      title: 'Hyperlipidemia',
      icon: 'Activity',
      color: '6366f1',
      questions: [
        {
          key: 'q4',
          q: 'What is the status and rationale for hyperlipidemia management?',
          defaultAnswer: 'Hyperlipidemia is stable on appropriate statin therapy (Atorvastatin 40 mg PO daily) for cardiovascular risk reduction in the context of HFrEF and cardiovascular comorbidities. Statin is well tolerated without reported adverse effects. Lipid panel was not obtained at this visit. Continued statin therapy at 40 mg daily is appropriate with no dose change needed.'
        }
      ]
    },
    {
      id: 'w4a3_a4',
      title: 'Preventive Care / Health Maintenance',
      icon: 'ShieldCheck',
      color: '059669',
      questions: [
        {
          key: 'q5',
          q: 'What is the status of preventive care and remaining health maintenance needs?',
          defaultAnswer: 'Prior preventive care gaps have been successfully addressed: Pneumococcal vaccination documented as received and Shingrix series initiated (Dose #1 received). Influenza and COVID-19 vaccines are up to date with no further action needed. Remaining preventive needs include Shingrix Dose #2 completion (due in 2-6 months) and Tdap booster update when due (~1 year).'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4a3_p1', 
      title: 'Heart Failure with Improved Ejection Fraction (HFimpEF) Management', 
      options: [
        { key: 'o1', label: 'Continue Sacubitril/Valsartan 97/103 mg PO twice daily (ARNI target dose)', correct: true },
        { key: 'o2', label: 'Continue Metoprolol Succinate 100 mg PO daily (Beta-blocker target dose)', correct: true },
        { key: 'o3', label: 'Continue Empagliflozin 10 mg PO daily (SGLT2i target dose)', correct: true },
        { key: 'o4', label: 'Continue Spironolactone 25 mg PO daily (MRA target dose)', correct: true },
        { key: 'o5', label: 'Maintain maximally tolerated GDMT long term explicitly despite improvement in ejection fraction (no new additions or dose changes at this visit)', correct: true },
        { key: 'o6', label: 'Discontinue GDMT because EF improved', correct: false }
      ] 
    },
    {
      id: 'w4a3_p2',
      title: 'Hypertension Management',
      options: [
        { key: 'o7', label: 'Continue current HF regimen for BP management (office BP 112/68 mmHg, home BP 115/70 mmHg at goal; home values corroborate office measurements)', correct: true },
        { key: 'o8', label: 'No new antihypertensive initiated and no dose change needed', correct: true },
        { key: 'o9', label: 'Monitor blood pressure at routine follow-up', correct: true }
      ]
    },
    {
      id: 'w4a3_p3',
      title: 'Hyperlipidemia Management',
      options: [
        { key: 'o10', label: 'Continue Atorvastatin 40 mg PO daily for ongoing cardiovascular risk reduction in the context of HFrEF and cardiovascular comorbidities (no dose change or statin switch)', correct: true }
      ]
    },
    {
      id: 'w4a3_p4',
      title: 'Preventive Care / Health Maintenance Plan',
      options: [
        { key: 'o11', label: 'Complete Shingrix series by administering Dose #2 in 2 to 6 months', correct: true },
        { key: 'o12', label: 'Update Tdap booster when due in approximately 1 year', correct: true },
        { key: 'o13', label: 'Continue routine preventive health maintenance (Influenza and COVID-19 current)', correct: true }
      ]
    },
    {
      id: 'w4a3_p5',
      title: 'Patient Education, Counseling & Lifestyle',
      options: [
        { key: 'o14', label: 'Educate patient on HFimpEF concept: explain that LVEF improvement (35% to 45%) reflects treatment success, NOT a cure', correct: true },
        { key: 'o15', label: 'Address patient question regarding medication discontinuation: explicitly discuss long-term prognosis, mortality data, relapse risk, and medication duration, reinforcing that stopping or reducing GDMT causes relapse of LV dysfunction and hospitalization risk', correct: true },
        { key: 'o16', label: 'Cite guideline evidence supporting lifelong GDMT continuation in HFimpEF', correct: true },
        { key: 'o17', label: 'Reinforce daily weight tracking (same scale, morning after voiding; call clinic if weight increases >=3 lbs in 1 day or >=5 lbs in 1 week)', correct: true },
        { key: 'o18', label: 'Discuss sodium restriction and ongoing dietary lifestyle modifications', correct: true },
        { key: 'o19', label: 'Educate on recognition of worsening heart failure symptoms (shortness of breath, swelling, fatigue)', correct: true },
        { key: 'o20', label: 'Reinforce importance of routine follow-up despite feeling well', correct: true }
      ]
    },
    {
      id: 'w4a3_p6',
      title: 'Monitoring & Follow-Up Plan',
      options: [
        { key: 'o21', label: 'Monitor blood pressure, heart rate, daily weight, and heart failure symptoms', correct: true },
        { key: 'o22', label: 'Monitor renal function (SCr, eGFR) and serum potassium periodically (confirming eGFR and K are acceptable and non-limiting for MRA/ARNi therapy)', correct: true },
        { key: 'o23', label: 'Monitor medication adherence and quality of life', correct: true },
        { key: 'o24', label: 'Repeat laboratory monitoring as clinically indicated and consider repeat echocardiogram per cardiology follow-up plan', correct: true },
        { key: 'o25', label: 'Maintain maximally tolerated GDMT long term and schedule routine longitudinal follow-up in approximately 3 to 6 months for ongoing monitoring', correct: true }
      ]
    }
  ],
})

/* ============================ ANGELA BROOKS (B) ============================ */
// HFrEF + Persistent AFib. Adherence and cost barriers, needs anticoagulation.

const angelaTue = makeCase({
  id: 'w4-angela_b-tue',
  PATIENT: { name: 'Angela Brooks', age: 64, dob: '03/12/1962', sex: 'female', ethnicity: 'Black', mrn: 'W4-22091' },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Cardiology Clinic Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I have so many pills, and they cost too much.",
    snapshotSummary: 'Angela has HFrEF (LVEF 35%) and Persistent Nonvalvular AFib. Prescribed Apixaban for stroke prevention but skipping doses due to cost barrier. CHA2DS2-VASc = 4.',
    diseaseStates: ['HFrEF', 'AFib', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Calculate CHA2DS2-VASc score', 'Identify cost nonadherence as a barrier to stroke prevention', 'Formulate access and adherence interventions'],
    visitDate: '09/09/2026',
  },
  VITALS: { bp: '134/82', bpRepeat: '132/80', hr: '84', rr: '18', temp: '98.4°F', spo2: '98%', weight: '88 kg', height: "5'4\"", bmi: '33.6', vitalsTime: '09/09/2026 09:14', flags: { bmi: 'warn' } },
  LABS: [
    { label: 'Na', value: '140', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'BUN', value: '18', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'SCr', value: '1.1', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'eGFR', value: '68', unit: 'mL/min/1.73m²', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Glucose', value: '106', unit: 'mg/dL', flag: 'borderline', labDate: '09/09/2026 07:50' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'ALT', value: '20', unit: 'U/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'WBC', value: '6.8', unit: 'x10³/mm³', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Hgb', value: '13.2', unit: 'g/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Plt', value: '240', unit: 'x10³/mm³', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'BNP', value: '280', unit: 'pg/mL', flag: 'high', labDate: '09/09/2026 07:50' }
  ],
  ALERTS: [{ level: 'high', text: 'Patient has Persistent Nonvalvular AFib with elevated stroke risk (CHA2DS2-VASc = 4) and nonadherence to Apixaban due to cost.' }],
  PROBLEMS: [
    { name: 'Persistent Nonvalvular Atrial Fibrillation', detail: 'CHA2DS2-VASc = 4 (HF, HTN, Female sex, Age 64). Elevated stroke risk. Apixaban 5 mg BID skipped 2-3x/week due to cost barrier.', flag: 'high' },
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 35%, NYHA Class II. On 3 GDMT pillars (Sacubitril/Valsartan, Metoprolol Succinate, Empagliflozin). Evening Sacubitril/Valsartan doses missed 2-3x/week due to cost.', flag: 'normal' },
    { name: 'Hypertension', detail: 'On GDMT, BP 134/82 mmHg', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg daily', flag: 'normal' },
    { name: 'Obesity Class I', detail: 'BMI 33.6 kg/m²', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '24/26 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: 'Missed evening doses 2-3x/week due to cost barrier' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF / Rate control', notes: 'Adherence maintained' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: 'Adherence maintained' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'Skipped 2-3x/week due to cost barrier — standard non-reduced dose is appropriate' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: 'Cardiovascular risk reduction' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date (received)', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date (primary series completed)', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented (care gap)', flag: 'warn' },
    { name: 'Shingrix', status: 'Not documented (care gap)', flag: 'warn' },
    { name: 'Tdap', status: 'Last documented ~11 years ago (overdue)', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '64-year-old female presents to the ambulatory care cardiology clinic for an initial visit regarding medication adherence, cost barriers, and disease management. Known HFrEF (LVEF 35%) and persistent nonvalvular atrial fibrillation (AFib). Patient reports feeling generally stable overall, but experiences mild fatigue and occasional exertional shortness of breath / dyspnea on exertion. Reports awareness of irregular heartbeat, but denies significant palpitations, worsening symptoms, chest pain, syncope, recent falls, significant lower extremity edema, recent emergency department visits, or recent hospitalizations. Initial self-report indicates taking medications "for the most part," but further history reveals she misses evening doses of Sacubitril/Valsartan 24/26 mg BID 2–3 times per week and skips or rations Apixaban 5 mg BID 2–3 times per week due to financial hardship. Patient identifies both Sacubitril/Valsartan and Apixaban / Eliquis as prohibitively expensive. Patient feels overwhelmed by the total number of medications and expresses a limited understanding of specific drug purposes, displaying a distinct knowledge gap regarding Apixaban\'s stroke-prevention indication in AFib (viewing it only generically as a "blood thinner"). Occasional transportation difficulty is noted and linked directly to refill difficulty. Patient explicitly states strong motivation to improve medication adherence, better understand her therapies, and improve her overall health.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular: Reports awareness of irregular heartbeat. Denies chest pain, significant palpitations, syncope, orthopnea, or paroxysmal nocturnal dyspnea (PND). Respiratory: Reports mild fatigue and occasional exertional shortness of breath / dyspnea; denies resting dyspnea or worsening respiratory symptoms. Musculoskeletal/Edema: Denies significant lower extremity edema or recent falls. General: Denies recent ED visits or hospitalizations.' },
    { label: 'Past Medical History', value: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%), Persistent Nonvalvular Atrial Fibrillation (AFib), Hypertension (HTN), Hyperlipidemia (HLD), Class I Obesity (BMI 33.6 kg/m²).' },
    { label: 'Social History', value: 'Lives alone on a fixed income as a retired administrative assistant. Experiences occasional transportation difficulty (relying on public transit/bus or rides from relatives), which directly impacts medication refill timeliness. Former smoker (15 pack-year smoking history, quit ~8 years ago). Drinks 1 glass of wine per week. Denies illicit drug use.' },
    { label: 'Family History', value: 'Father: suffered an ischemic stroke at age 70. Mother: history of heart failure. Sister: history of hypertension. No additional relevant surgical or family history beyond documented.' },
    { label: 'OTC & Allergies', value: 'Tylenol (acetaminophen) PRN for occasional minor aches; explicitly avoids PRN NSAIDs and aspirin. No known drug allergies (NKDA).' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (gallbladder removal) several years ago. No additional relevant surgical history.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Echocardiogram & Lab Interpretations', value: 'Echocardiogram (on file): LVEF 35%, persistent nonvalvular AFib, no significant interval change from prior imaging. Physical Exam: Irregularly irregular cardiac rhythm, clear lungs, no peripheral edema. Laboratory Interpretations: BNP 280 pg/mL contextualized for stable known HFrEF (elevated but stable/non-acute). Serum potassium (4.4 mEq/L) is normal and supports continued RAAS inhibitor / GDMT therapy. Renal function (SCr 1.1 mg/dL, eGFR 68 mL/min/1.73m²) is interpreted as preserved/adequate, supporting current GDMT and full-dose Apixaban (5 mg BID). LFTs (AST 22 U/L, ALT 20 U/L) are explicitly noted as within normal limits. CBC (WBC 6.8, Hgb 13.2 g/dL, Plt 240k) is explicitly noted as without significant abnormalities. Absence of routine anticoagulation monitoring lab (INR/anti-Xa) noted as expected and unnecessary for DOAC therapy. CHA2DS2-VASc score calculated as 4 (Heart Failure +1, Hypertension +1, Female sex +1, Age 64 = +1 [or Age 65-74 component]; total score 4).' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'apixaban', label: 'Apixaban Adherence & Cost', placeholder: 'Describe cost barriers and rationing behavior' },
  ],
  COUNSELING: [{ id: 'c1', title: 'AFib Stroke Prevention & Access Resources', body: ["With persistent nonvalvular AFib, your heart rhythm is irregular and blood can pool, forming clots that cause a stroke. Apixaban 5 mg twice daily is essential to protect you. We will enroll you in patient assistance programs to make your medications affordable without switching your blood thinner or skipping doses."] }],
  GUIDING_QUESTIONS: [
    'What is her CHA2DS2-VASc score and stroke risk?',
    'Why is apixaban nonadherence the most concerning clinical finding?',
    'Why should cost barriers be resolved before considering medication switches?',
    'What access interventions can relieve her financial burden?',
    'Why should HF therapy escalation be deferred until adherence improves?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-angela_b-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-angela_b-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take Tylenol PRN for occasional headaches or body aches, but I avoid aspirin and NSAIDs." },
    { id: 'w4-angela_b-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 glass of wine per week." },
    { id: 'w4-angela_b-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 8 years ago, and I had a 15 pack-year history before that." },
    { id: 'w4-angela_b-tue_illicit', topic: 'Illicit drug use', field: 'illicit', keywords: ['illicit', 'drug', 'marijuana', 'cocaine', 'street'], response: "I do not use any illicit drugs or street substances." },
    { id: 'w4-angela_b-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had an ischemic stroke at age 70. My mother had heart failure. My sister has high blood pressure. There is no other major family history." },
    { id: 'w4-angela_b-tue_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'transport', 'drive', 'alone', 'bus', 'ride', 'income', 'fixed'], response: "I live alone on a fixed income as a retired administrative assistant. Occasional transportation difficulty makes getting to the pharmacy hard." },
    { id: 'w4-angela_b-tue_surgery', topic: 'Past surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy'], response: "Yes, I had my gallbladder removed (cholecystectomy) several years ago. No other surgeries." },
    { id: 'w4b_apix', topic: 'Cost Barrier & Rationing', field: 'apixaban', keywords: ['apixaban', 'eliquis', 'cost', 'afford', 'stop', 'fill', 'stretch', 'skip', 'miss'], response: "Sacubitril/Valsartan and Eliquis are so expensive on my fixed income. I try taking my pills for the most part, but I skip my evening Sacubitril/Valsartan dose 2-3 times a week and stretch my Eliquis by skipping doses 2-3 times a week. I really want to improve my adherence and health if I can afford them." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4b_a1', 
      title: 'Heart Failure with Reduced Ejection Fraction (HFrEF) & GDMT Status', 
      icon: 'Heart', 
      color: '13314f', 
      questions: [
        { 
          key: 'q1', 
          q: 'What is the clinical status of HFrEF and current GDMT implementation?',
          defaultAnswer: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%, NYHA Class II) is clinically stable with nonadherence caveat. Patient reports mild fatigue and occasional exertional dyspnea, but denies worsening symptoms, chest pain, syncope, orthopnea, PND, edema, ED visits, or hospitalizations. Patient is currently prescribed 3 GDMT pillars: Sacubitril/Valsartan 24/26 mg BID, Metoprolol Succinate 50 mg daily, and Empagliflozin 10 mg daily. However, Sacubitril/Valsartan evening doses are missed 2–3 times per week due to cost barriers, making it impossible to distinguish true treatment failure from inadequate drug exposure. Serum potassium (4.4 mEq/L), renal function (eGFR 68 mL/min/1.73m²), and blood pressure (134/82 mmHg) support future GDMT optimization once adherence is established. Therapy escalation should be withheld at this time until adherence barriers are resolved. Reassessment planned in 4 to 6 weeks. BNP 280 pg/mL is contextualized as elevated but stable/non-acute for known HFrEF.'
        }
      ] 
    },
    { 
      id: 'w4b_a2', 
      title: 'Persistent Nonvalvular Atrial Fibrillation & Thromboembolic Risk', 
      icon: 'Activity', 
      color: 'dc2626', 
      questions: [
        { 
          key: 'q2', 
          q: 'What is the stroke risk score and anticoagulation management strategy?',
          defaultAnswer: 'Persistent Nonvalvular Atrial Fibrillation with high thromboembolic risk. CHA2DS2-VASc score is explicitly calculated as 4 (Heart Failure +1, Hypertension +1, Female sex +1, Age 64 = +1; total score ≥3), indicating a clear indication for long-term oral anticoagulation. Apixaban nonadherence (skipping/rationing doses 2–3 times per week due to cost) is identified as the single most clinically concerning finding in this encounter, dramatically increasing stroke risk. Patient exhibits limited understanding of Apixaban\'s stroke-prevention purpose and is unaware of the severe thromboembolic consequences of missed anticoagulant doses. Apixaban 5 mg PO BID is confirmed as the appropriate non-reduced dose, as criteria for dose reduction (must meet 2 of: age ≥80, weight ≤60 kg, SCr ≥1.5 mg/dL) are not met (age 64, weight 88 kg, SCr 1.1 mg/dL, eGFR 68 mL/min/1.73m²). Cost barriers must be resolved to enable full DOAC adherence before considering any change to anticoagulation strategy; inappropriate substitution with Warfarin is NOT recommended due to monitoring burden and guideline DOAC preference.'
        }
      ] 
    },
    { 
      id: 'w4b_a3', 
      title: 'Medication Access & Financial Cost Barriers', 
      icon: 'DollarSign', 
      color: 'd97706', 
      questions: [
        { 
          key: 'q3', 
          q: 'What financial and logistical barriers impact medication therapy?',
          defaultAnswer: 'Medication access and cost barriers identified as a major medication therapy problem directly causing nonadherence. Patient is retired on a fixed income, living alone, with both Sacubitril/Valsartan and Apixaban identified as prohibitively expensive. Occasional transportation difficulty further impairs timely prescription refills. Comprehensive access interventions are required: prescription insurance coverage review, manufacturer patient assistance program (PAP) enrollment, copay assistance evaluation, mail-order pharmacy exploration, transportation resource identification, and social work referral.'
        }
      ] 
    },
    { 
      id: 'w4b_a4', 
      title: 'Health Literacy & Medication Knowledge Deficit', 
      icon: 'BookOpen', 
      color: '0891b2', 
      questions: [
        { 
          key: 'q4', 
          q: 'What knowledge gaps exist and how do they impact clinical care?',
          defaultAnswer: 'Health literacy deficit and medication knowledge gap identified as a distinct clinical problem. Patient expresses feeling overwhelmed by the medication regimen and has limited understanding of heart failure, AFib, stroke prevention, and specific drug indications. This knowledge deficit directly contributes to medication rationing behavior. Structured education on disease states, therapy goals, and medication benefits will enhance long-term adherence and engagement. Medication changes are not warranted based on knowledge gaps alone.'
        }
      ] 
    },
    { 
      id: 'w4b_a5', 
      title: 'Preventive Care Gaps', 
      icon: 'ShieldCheck', 
      color: '059669', 
      questions: [
        { 
          key: 'q5', 
          q: 'What preventive health care gaps are present?',
          defaultAnswer: 'Preventive care gaps identified as a distinct problem: Pneumococcal vaccination not documented (care gap), Shingrix series not documented (care gap), and Tdap booster overdue (~11 years ago). Influenza and COVID-19 vaccinations are up to date. These preventive gaps are non-priority for today\'s visit (focusing on anticoagulation adherence and cost) and will be reviewed and addressed at a future follow-up visit.'
        }
      ] 
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4b_p1', 
      title: 'HFrEF Guideline-Directed Medical Therapy (GDMT) Strategy', 
      options: [
        { key: 'o1', label: 'Continue Sacubitril/Valsartan 24/26 mg PO twice daily (ARNI pillar)', correct: true },
        { key: 'o2', label: 'Continue Metoprolol Succinate 50 mg PO daily (Beta-blocker pillar)', correct: true },
        { key: 'o3', label: 'Continue Empagliflozin 10 mg PO daily (SGLT2i pillar)', correct: true },
        { key: 'o4', label: 'Avoid intensifying heart failure therapy at this time; defer GDMT titration until cost and adherence barriers are resolved and reassessed in 4 to 6 weeks', correct: true },
        { key: 'o5', label: 'Recognize current labs (renal eGFR 68, K 4.4 mEq/L, BP 134/82 mmHg) as supportive of future GDMT optimization once adherence is confirmed', correct: true }
      ] 
    },
    { 
      id: 'w4b_p2', 
      title: 'Persistent Nonvalvular AFib & Anticoagulation Management Plan', 
      options: [
        { key: 'o6', label: 'Continue Apixaban 5 mg PO twice daily (do NOT discontinue, do NOT reduce dose, and do NOT switch to Warfarin)', correct: true },
        { key: 'o7', label: 'Confirm Apixaban 5 mg PO BID is the appropriate non-reduced dose (dose reduction criteria not met)', correct: true },
        { key: 'o8', label: 'Educate patient on AFib disease state, stroke risk, anticoagulation purpose, and the critical importance of 100% adherence to prevent thromboembolic stroke', correct: true },
        { key: 'o9', label: 'Warn patient regarding the serious thromboembolic consequences of missed or skipped anticoagulant doses', correct: true }
      ] 
    },
    { 
      id: 'w4b_p3', 
      title: 'Comprehensive Access & Cost Mitigation Plan', 
      options: [
        { key: 'o10', label: 'Assess prescription insurance coverage and formulary options for Sacubitril/Valsartan and Apixaban', correct: true },
        { key: 'o11', label: 'Submit applications for manufacturer Patient Assistance Programs (PAP) and evaluate copay assistance eligibility', correct: true },
        { key: 'o12', label: 'Explore mail-order pharmacy options and arrange community transportation assistance resources', correct: true },
        { key: 'o13', label: 'Refer patient to clinic social work and medication access coordinator services', correct: true }
      ] 
    },
    { 
      id: 'w4b_p4', 
      title: 'Structured Patient Education & Communication Plan', 
      options: [
        { key: 'o14', label: 'Provide structured education on heart failure, atrial fibrillation, stroke prevention, and the specific purpose of each prescribed medication', correct: true },
        { key: 'o15', label: 'Utilize the teach-back method to verify patient understanding of stroke risk and adherence importance', correct: true }
      ] 
    },
    { 
      id: 'w4b_p5', 
      title: 'Comprehensive Monitoring Plan (8 Parameters)', 
      options: [
        { key: 'o16', label: 'Monitor HF symptoms (fatigue, exertional dyspnea, edema)', correct: true },
        { key: 'o17', label: 'Monitor blood pressure, heart rate, medication adherence, pharmacy refill history, bleeding symptoms, stroke warning signs, and renal function (SCr, eGFR)', correct: true }
      ] 
    },
    { 
      id: 'w4b_p6', 
      title: 'Preventive Care Plan', 
      options: [
        { key: 'o18', label: 'Review vaccination history at future visit; recommend Pneumococcal, Shingrix, and Tdap booster when adherence is stabilized', correct: true }
      ] 
    },
    { 
      id: 'w4b_p7', 
      title: 'Follow-Up Plan', 
      options: [
        { key: 'o19', label: 'Schedule follow-up visit in 4 to 6 weeks to reassess medication adherence, affordability interventions, patient understanding, and symptom stability', correct: true },
        { key: 'o20', label: 'Defer heart failure therapy optimization until adherence and access are fully evaluated and confirmed at follow-up', correct: true }
      ] 
    }
  ]
})

const angelaWed = makeCase({
  id: 'w4-angela_b-wed',
  PATIENT: { ...angelaTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Wednesday', type: '3-Month Follow-Up Ambulatory Care Cardiology Clinic Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I started the Eliquis, but I stopped because I got bruises and got scared.",
    snapshotSummary: 'Angela obtained Apixaban via Patient Assistance Program, but independently stopped taking it several weeks ago due to minor bruising and a friend\'s bleeding anecdote.',
    diseaseStates: ['AFib', 'HFrEF', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Address bleeding fears using shared decision-making', 'Distinguish minor bruising from major bleeding', 'Reinforce guideline-directed DOAC continuation'],
    visitDate: '12/09/2026',
  },
  VITALS: { bp: '126/76', bpRepeat: '124/74', hr: '84', rr: '16', temp: '98.1°F', spo2: '98%', weight: '84 kg', height: "5'5\"", bmi: '30.8', vitalsTime: '12/09/2026 09:14', flags: {} },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'K', value: '4.3', unit: 'mEq/L', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'BUN', value: '17', unit: 'mg/dL', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'eGFR', value: '73', unit: 'mL/min/1.73m²', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'WBC', value: '6.5', unit: 'x10³/mm³', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'Hgb', value: '13.0', unit: 'g/dL', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'Plt', value: '236', unit: 'x10³/mm³', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'NT-proBNP', value: '210', unit: 'pg/mL', flag: 'high', labDate: '12/09/2026 07:50' }
  ],
  ALERTS: [{ level: 'high', text: 'Patient independently stopped Apixaban 5 mg BID due to minor cutaneous bruising. Elevated stroke risk (CHA2DS2-VASc = 4) warrants immediate resumption.' }],
  PROBLEMS: [
    { name: 'Persistent Nonvalvular Atrial Fibrillation', detail: 'CHA2DS2-VASc = 4. High stroke risk. Discontinued Apixaban several weeks ago due to minor bruising fear.', flag: 'high' },
    { name: 'Anticoagulation Nonadherence & Knowledge Deficit', detail: 'Knowledge gap regarding minor vs major bleeding and stroke risk magnitude.', flag: 'high' },
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 35%. Stable HF symptoms (mild fatigue, exertional dyspnea). On 3-pillar GDMT.', flag: 'normal' },
    { name: 'Hypertension', detail: 'Controlled on GDMT', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg daily', flag: 'normal' },
    { name: 'Preventive Care Gaps', detail: 'Pneumococcal and Shingrix vaccinations not documented; deferred to future visit.', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '49/51 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: 'Improved adherence' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/Rate control', notes: 'Adherence maintained' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: 'Adherence maintained' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'Stopped several weeks ago due to minor bruising fear — resume full dose 5 mg BID' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: 'Cardiovascular risk reduction' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date (received)', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date (received)', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented (care gap)', flag: 'warn' },
    { name: 'Shingrix', status: 'Not documented (care gap)', flag: 'warn' },
    { name: 'Tdap', status: 'Last documented ~11 years ago (overdue)', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '3-Month Follow-Up at the ambulatory care cardiology clinic. Patient successfully enrolled in Patient Assistance Program for Apixaban, resolving financial cost barriers. However, patient reports she independently discontinued Apixaban 5 mg BID several weeks ago after noticing small, non-painful cutaneous bruises on her arms and legs (lasting several weeks before resolving) and hearing a friend\'s anecdote about bleeding to death on blood thinners. Reports improved adherence to Sacubitril/Valsartan since last visit. Patient reports HF symptoms (mild fatigue, exertional dyspnea) are stable. Denies worsening dyspnea, lower extremity edema, chest pain, syncope, orthopnea, paroxysmal nocturnal dyspnea (PND), hemoptysis, hematochezia, melena, ED visits, hospitalizations, or major bleeding. Patient demonstrates a lack of understanding of Apixaban\'s stroke-prevention purpose and stroke risk magnitude. Expresses desire to understand minor vs major bleeding distinction and states willingness to continue anticoagulation therapy with better understanding and clinic guidance.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular: Denies chest pain, syncope, orthopnea, PND, or major bleeding. Respiratory: Denies worsening dyspnea or hemoptysis. Gastrointestinal: Denies hematochezia or melena. Musculoskeletal/Edema: Denies lower extremity edema. General: Denies ED visits or hospitalizations.' },
    { label: 'Past Medical History', value: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%), Persistent Nonvalvular Atrial Fibrillation (AFib), Hypertension (HTN), Hyperlipidemia (HLD), Obesity.' },
    { label: 'Social History', value: 'Lives alone on fixed income, retired administrative assistant. Cost barrier resolved via PAP. Transportation via bus or family rides. Former smoker (15 pack-year history, quit ~8 years ago). Drinks 1 glass of wine per week. Denies illicit drug use.' },
    { label: 'Family History', value: 'Father: ischemic stroke at age 70. Mother: heart failure. Sister: hypertension.' },
    { label: 'OTC & Allergies', value: 'Tylenol PRN for occasional headaches; avoids aspirin and NSAIDs. NKDA.' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (gallbladder removal).' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend Analysis & Lab Interpretations', value: 'Physical Exam: Cardiac rhythm is irregularly irregular on exam. Vital signs: BP 126/76 mmHg (repeat 124/74 mmHg), HR 84 bpm (irregularly irregular), Wt 84 kg (stable), BMI 30.8 kg/m². Laboratory Interpretations: Baseline Hgb 13.2 g/dL → Current Hgb 13.0 g/dL (quantified stable Hgb, no drop, providing objective evidence against major bleeding). Platelet count 236k is normal, confirming absence of thrombocytopenia. Serum potassium (4.3 mEq/L) and Na (139 mEq/L) are normal. Renal function (SCr 1.0 mg/dL, eGFR 73 mL/min/1.73m²) is interpreted as preserved/adequate renal function, confirming Apixaban dose-reduction criteria are not met and supporting full-dose Apixaban 5 mg BID. CMP is otherwise unremarkable. Routine anti-Xa and INR monitoring noted as unnecessary for Apixaban DOAC therapy. Immunizations: Pneumococcal and Shingrix are documented as NOT completed / care gaps in Objective data.' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'fear', label: 'Bruising & Bleeding Fear Assessment', placeholder: 'Assess bleeding symptoms and friend anecdote' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Apixaban Resumption & Bleeding Education', body: ["Minor bruising is expected with blood thinners and does not mean you are having dangerous bleeding. Your blood count (Hgb 13.0 g/dL) is stable, proving there is no internal bleeding. Because your stroke risk is high (CHA2DS2-VASc = 4), resuming Apixaban 5 mg twice daily is essential. Contact our clinic before ever stopping a medication."] }],
  GUIDING_QUESTIONS: [
    'Why is resuming Apixaban 5 mg BID indicated?',
    'How does stable Hgb 13.0 g/dL rule out major bleeding?',
    'Why should DOAC therapy be preferred over Warfarin per guidelines?',
    'How can teach-back and patient-centered counseling build confidence?',
    'Why are vaccine gaps deferred to a future visit?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-angela_b-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-angela_b-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take Tylenol PRN for occasional headaches or body aches, but I avoid aspirin and NSAIDs." },
    { id: 'w4-angela_b-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 glass of wine per week." },
    { id: 'w4-angela_b-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 8 years ago, and I had a 15 pack-year history before that." },
    { id: 'w4-angela_b-wed_illicit', topic: 'Illicit drug use', field: 'illicit', keywords: ['illicit', 'drug', 'marijuana', 'cocaine', 'street'], response: "I do not use any illicit drugs or street substances." },
    { id: 'w4-angela_b-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had an ischemic stroke at age 70. My mother had heart failure. My sister has high blood pressure." },
    { id: 'w4-angela_b-wed_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'transport', 'drive', 'alone', 'bus', 'ride', 'income', 'fixed', 'cost', 'afford'], response: "I live alone on a fixed income. The assistance program resolved the cost issue for Eliquis. Transportation can still be difficult." },
    { id: 'w4-angela_b-wed_surgery', topic: 'Past surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy'], response: "Yes, I had my gallbladder removed (cholecystectomy) several years ago." },
    { id: 'w4b2_bruise', topic: 'Bruising Symptoms', field: 'bleeding', keywords: ['bruise', 'bruising', 'bleed', 'bleeding', 'symptoms', 'nosebleed', 'gums', 'stool', 'urine'], response: "I noticed small bruises on my arms and legs for several weeks without bumping into anything. They went away on their own. I deny nosebleeds, gum bleeding, hemoptysis, hematochezia, melena, ER visits, hospitalizations, or major bleeding. I want to understand minor vs major bleeding and I am willing to resume Eliquis if guided." },
    { id: 'w4b2_fear', topic: 'Fear of bleeding', field: 'fear', keywords: ['scared', 'fear', 'afraid', 'stop', 'why', 'friend'], response: "My friend told me a story about someone bleeding to death on blood thinners. Combined with the bruises, I panicked and stopped taking it. I didn't realize how high my stroke risk is." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4b2_a1', 
      title: 'Persistent Nonvalvular Atrial Fibrillation & Stroke vs Bleeding Risk', 
      icon: 'Scale', 
      color: 'dc2626', 
      questions: [
        { 
          key: 'q1', 
          q: 'What is the stroke risk vs bleeding risk evaluation and anticoagulation recommendation?',
          defaultAnswer: 'Persistent Nonvalvular Atrial Fibrillation with high thromboembolic risk. CHA2DS2-VASc score = 4 (Heart Failure +1, Hypertension +1, Female sex +1, Age 64 = +1), indicating high stroke risk. Patient independently stopped Apixaban several weeks ago due to minor cutaneous bruising and fear after a friend\'s bleeding anecdote. Current lab evaluation shows baseline Hgb 13.2 g/dL → current Hgb 13.0 g/dL (quantified stable Hgb, no significant drop, ruling out major bleeding) and normal platelet count (236k). Patient denies major bleeding, hemoptysis, hematochezia, melena, or hospitalizations. Preserved renal function (eGFR 73 mL/min/1.73m², SCr 1.0 mg/dL) confirms Apixaban dose-reduction criteria are not met, supporting full-dose Apixaban 5 mg PO BID. Per 2023 ACC/AHA AFib guidelines, DOAC therapy is strongly preferred over VKAs (Warfarin), and no switch is warranted. Resuming full-dose Apixaban 5 mg PO BID immediately is indicated; do NOT reduce dose or discontinue anticoagulation.'
        }
      ] 
    },
    { 
      id: 'w4b2_a2', 
      title: 'HFrEF & GDMT Regimen Continuation', 
      icon: 'Heart', 
      color: '13314f', 
      questions: [
        { 
          key: 'q2', 
          q: 'What is the status of HFrEF and GDMT stability?',
          defaultAnswer: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%) is clinically stable on 3-pillar GDMT (Sacubitril/Valsartan 49/51 mg BID, Metoprolol Succinate 50 mg daily, Empagliflozin 10 mg daily). Patient reports stable HF symptoms (mild fatigue, exertional dyspnea) and denies decompensation negatives (orthopnea, PND, edema, ED visits, or hospitalizations). Absence of HF decompensation despite missed anticoagulant doses confirms clinical stability. No urgent therapy modification or dose uptitration is planned today; primary focus is maintaining stability and reinforcing adherence.'
        }
      ] 
    },
    { 
      id: 'w4b2_a3', 
      title: 'Anticoagulation Knowledge Gap & Health Literacy Deficit', 
      icon: 'BookOpen', 
      color: 'd97706', 
      questions: [
        { 
          key: 'q3', 
          q: 'What knowledge deficit caused nonadherence and what interventions are needed?',
          defaultAnswer: 'Knowledge gap and health literacy deficit regarding anticoagulation identified as a distinct problem. Patient lacks understanding of AFib, stroke risk magnitude, and the distinction between minor cutaneous bruising and major bleeding. Friend\'s anecdote was inappropriately prioritized over individualized clinical risk assessment. Patient-centered communication and the teach-back method are essential interventions to restore confidence and achieve long-term adherence.'
        }
      ] 
    },
    { 
      id: 'w4b2_a4', 
      title: 'Preventive Care Gaps', 
      icon: 'ShieldAlert', 
      color: '059669', 
      questions: [
        { 
          key: 'q4', 
          q: 'What is the status of preventive care vaccinations?',
          defaultAnswer: 'Preventive care gaps identified as a distinct problem: Pneumococcal and Shingrix vaccinations remain uncompleted / care gaps per Objective documentation. Given that today\'s visit focus is anticoagulation adherence and education, vaccine administration is deferred to a future follow-up visit.'
        }
      ] 
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4b2_p1', 
      title: 'Persistent Nonvalvular AFib Anticoagulation Strategy', 
      options: [
        { key: 'o1', label: 'Resume Apixaban 5 mg PO twice daily immediately (do NOT reduce dose, do NOT discontinue anticoagulation, and confirm no switch to Warfarin is warranted)', correct: true },
        { key: 'o2', label: 'Cite eGFR 73 mL/min/1.73m² and absence of dose-reduction criteria to justify full-dose Apixaban 5 mg BID', correct: true },
        { key: 'o3', label: 'Educate patient on AFib disease state, stroke risk, anticoagulation purpose, and adherence importance per 2023 ACC/AHA guidelines (DOAC class preference over VKAs)', correct: true },
        { key: 'o4', label: 'Use shared decision-making with confidence-building framing to address bleeding fears', correct: true },
        { key: 'o5', label: 'Instruct patient to contact clinic before making any future medication changes or self-adjusting doses', correct: true }
      ] 
    },
    { 
      id: 'w4b2_p2', 
      title: 'HFrEF GDMT Maintenance Strategy', 
      options: [
        { key: 'o6', label: 'Continue Sacubitril/Valsartan 49/51 mg PO BID, Metoprolol Succinate 50 mg PO daily, Empagliflozin 10 mg PO daily, and Atorvastatin 40 mg PO daily', correct: true },
        { key: 'o7', label: 'Reinforce adherence to HFrEF regimen and confirm no dose uptitration is planned today due to adherence/stability focus', correct: true }
      ] 
    },
    { 
      id: 'w4b2_p3', 
      title: 'Patient Counseling & Teach-Back Education Plan', 
      options: [
        { key: 'o8', label: 'Counsel patient distinguishing minor cutaneous bruising (expected, non-dangerous) from major bleeding warning signs (dark stools, hematuria, severe headache)', correct: true },
        { key: 'o9', label: 'Utilize teach-back method to verify patient understanding of stroke risk, minor vs major bleeding, and clinic contact instructions', correct: true },
        { key: 'o10', label: 'Employ patient-centered language approach to build patient confidence in long-term anticoagulation', correct: true }
      ] 
    },
    { 
      id: 'w4b2_p4', 
      title: 'Monitoring Plan (7 Parameters)', 
      options: [
        { key: 'o11', label: 'Monitor Apixaban adherence specifically, bruising/bleeding signs, stroke warning signs, HF symptoms, routine renal function (SCr, eGFR), CBC (as clinically indicated), and patient understanding/confidence', correct: true }
      ] 
    },
    { 
      id: 'w4b2_p5', 
      title: 'Preventive Care Plan', 
      options: [
        { key: 'o12', label: 'Review vaccination history at future follow-up visit; plan deferred Pneumococcal and Shingrix administration at next visit', correct: true }
      ] 
    },
    { 
      id: 'w4b2_p6', 
      title: 'Follow-Up Plan', 
      options: [
        { key: 'o13', label: 'Schedule follow-up visit in 4 to 6 weeks (guideline-aligned window) to reassess patient understanding, confidence, Apixaban adherence, and HF symptom stability', correct: true }
      ] 
    }
  ]
})

const angelaThu = makeCase({
  id: 'w4-angela_b-thu',
  PATIENT: { ...angelaTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Thursday', type: 'Routine 6-Month Follow-Up Ambulatory Care Cardiology Clinic Visit', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I've been taking the blood thinner, and I haven't had any bleeding.",
    snapshotSummary: 'Angela successfully resumed Apixaban 5 mg BID using a pillbox with 100% adherence and resolved cost/fear barriers. Asks about long-term medication duration.',
    diseaseStates: ['AFib', 'HFrEF', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Confirm longitudinal adherence and therapy maintenance', 'Address patient questions regarding lifelong medication duration', 'Execute preventive care updates'],
    visitDate: '03/09/2027',
  },
  VITALS: { bp: '124/74', bpRepeat: '122/72', hr: '80', rr: '16', temp: '98.0°F', spo2: '98%', weight: '83 kg', height: "5'5\"", bmi: '30.5', vitalsTime: '03/09/2027 09:14', flags: {} },
  LABS: [
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'BUN', value: '18', unit: 'mg/dL', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'eGFR', value: '72', unit: 'mL/min/1.73m²', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'ALT', value: '24', unit: 'U/L', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'WBC', value: '6.6', unit: 'x10³/mm³', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'Hgb', value: '13.1', unit: 'g/dL', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'Plt', value: '240', unit: 'x10³/mm³', flag: 'normal', labDate: '03/09/2027 07:50' }
  ],
  ALERTS: [],
  PROBLEMS: [
    { name: 'Persistent Nonvalvular Atrial Fibrillation', detail: 'CHA2DS2-VASc = 4. Anticoagulated on Apixaban 5 mg BID with 100% adherence and no bleeding. Lifelong therapy indicated.', flag: 'normal' },
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 35%. Stable HF symptoms (mild fatigue, exertional dyspnea). On 3-pillar GDMT.', flag: 'normal' },
    { name: 'Hypertension', detail: 'Controlled on GDMT (BP 124/74, goal <130/80 mmHg)', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg daily (LDL goal <70 mg/dL)', flag: 'normal' },
    { name: 'Preventive Care Optimization', detail: 'Pneumococcal completed; Shingrix dose #2 due; Tdap booster due.', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '49/51 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: 'ARNI pillar — adherence 100%' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/Rate control', notes: 'Beta-blocker pillar — adherence 100%' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: 'SGLT2i pillar — adherence 100%' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'DOAC — adherence 100% via pillbox, no bleeding' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: 'Cardiovascular risk reduction' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date (received)', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date (received)', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Received (completed since previous visit)', flag: 'normal' },
    { name: 'Shingrix', status: 'Dose #1 completed; Dose #2 administered today', flag: 'normal' },
    { name: 'Tdap', status: 'Administered today (up to date)', flag: 'normal' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '64-year-old female presents for a routine 6-month follow-up at the ambulatory care cardiology clinic. Patient reports 100% medication adherence to Apixaban 5 mg BID twice daily using a daily pillbox, with no intentionally skipped doses. Patient reports that prior bruising fears and knowledge barriers have completely resolved, and she now describes occasional minor bruising as resolved and no longer concerning. Can identify bleeding and stroke warning signs. Reports feeling increased confidence in managing her health and communicating with healthcare providers. Reports HF symptoms (mild fatigue, occasional exertional dyspnea) are unchanged and stable. Denies resting dyspnea, orthopnea, paroxysmal nocturnal dyspnea (PND), syncope, lower extremity edema, emergency department visits, or hospitalizations since last visit. Patient explicitly asks about the expected long-term duration of anticoagulation and heart failure therapies.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular: Denies syncope, orthopnea, PND, or major bleeding. Respiratory: Reports stable exertional dyspnea; denies resting dyspnea. Musculoskeletal/Edema: Denies lower extremity edema. General: Denies ED visits or hospitalizations.' },
    { label: 'Past Medical History', value: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%), Persistent Nonvalvular Atrial Fibrillation (AFib), Hypertension (HTN), Hyperlipidemia (HLD), Obesity.' },
    { label: 'Social History', value: 'Lives alone, retired administrative assistant. Transportation managed with bus and family rides. Fixed income access maintained via assistance program enrollment. Former smoker (15 pack-years, quit 8 years ago). Drinks 1 glass of wine per week. Denies illicit drug use.' },
    { label: 'Family History', value: 'Father: ischemic stroke at age 70. Mother: heart failure. Sister: hypertension. Family history explicitly linked to patient\'s elevated stroke and heart failure risk.' },
    { label: 'OTC & Allergies', value: 'Tylenol PRN for occasional headaches; avoids aspirin and NSAIDs. NKDA.' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (prior gallbladder removal).' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend & Lab Interpretations', value: 'Physical Exam: Cardiac rhythm is irregularly irregular on exam. Vital signs: BP 124/74 mmHg (repeat 122/72 mmHg, goal <130/80 mmHg), HR 80 bpm (controlled on Metoprolol Succinate), Wt 83 kg (stable), BMI 30.5 kg/m². Laboratory Interpretations: CBC (WBC 6.6, Hgb 13.1 g/dL, Plt 240k) is explicitly noted as within normal limits. Liver enzymes (AST 22 U/L, ALT 24 U/L) are explicitly noted as within normal limits, supporting continued Atorvastatin safety. Renal function (SCr 1.0 mg/dL, eGFR 72 mL/min/1.73m²) is interpreted as adequate renal function, supporting continued Apixaban 5 mg BID and GDMT. Absence of BNP/NT-proBNP noted as a missing data gap for stability assessment. Routine INR monitoring noted as unnecessary given DOAC (Apixaban) use. CHA2DS2-VASc score calculated as 4 (Heart Failure +1, HTN +1, Female +1, Age 64 = +1), confirming indication for lifelong anticoagulation. Apixaban dose-reduction criteria (age ≥80, weight ≤60 kg, SCr ≥1.5 mg/dL) are NOT met.' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Longitudinal Adherence & Duration Query', placeholder: 'Assess pillbox routine and answer duration questions' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Lifelong Anticoagulation & GDMT Rationale', body: ["Your blood pressure, heart rate, and heart failure are stable, and your adherence with the pillbox is fantastic. Because your atrial fibrillation and heart failure are chronic conditions, both Apixaban and your heart failure medications (Entresto, Metoprolol, Empagliflozin) are long-term, lifelong therapies. Never stop them without talking to us first."] }],
  GUIDING_QUESTIONS: [
    'Why is lifelong anticoagulation with Apixaban 5 mg BID indicated per ACC/AHA guidelines?',
    'Why should 3-pillar GDMT be maintained long term in stable HFrEF?',
    'How did prior pharmacist interventions resolve cost and fear barriers?',
    'What preventive health actions are completed at today\'s visit?',
    'What monitoring parameters should be evaluated long term?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-angela_b-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-angela_b-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take Tylenol PRN for occasional headaches or body aches, but I avoid aspirin and NSAIDs." },
    { id: 'w4-angela_b-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 glass of wine per week." },
    { id: 'w4-angela_b-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 8 years ago, and I had a 15 pack-year history before that." },
    { id: 'w4-angela_b-thu_illicit', topic: 'Illicit drug use', field: 'illicit', keywords: ['illicit', 'drug', 'marijuana', 'cocaine', 'street'], response: "I do not use any illicit drugs or street substances." },
    { id: 'w4-angela_b-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had an ischemic stroke at age 70. My mother had heart failure. My sister has high blood pressure. This family history reinforces my own stroke and heart failure risks." },
    { id: 'w4-angela_b-thu_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'transport', 'drive', 'alone', 'bus', 'ride'], response: "I live alone, retired administrative assistant. Assistance program keeps my medication affordable. Family and bus help with rides." },
    { id: 'w4-angela_b-thu_surgery', topic: 'Past surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy'], response: "Yes, I had my gallbladder removed (cholecystectomy)." },
    { id: 'w4b3_adh', topic: 'Longitudinal Adherence & Duration Query', field: 'adherence', keywords: ['take', 'miss', 'every day', 'routine', 'how long', 'duration', 'stop'], response: "I use a pillbox and take all my medications every morning and night without missing any. My minor bruising resolved and doesn't bother me. I feel confident managing my health. How long do I need to keep taking Eliquis and these heart failure pills? Are they lifelong?" },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4b3_a1', 
      title: 'Persistent Nonvalvular Atrial Fibrillation & Long-Term Anticoagulation', 
      icon: 'ShieldCheck', 
      color: '10b981', 
      questions: [
        { 
          key: 'q1', 
          q: 'What is the stroke risk assessment and long-term anticoagulation strategy?',
          defaultAnswer: 'Persistent Nonvalvular Atrial Fibrillation with elevated thromboembolic risk (CHA2DS2-VASc = 4). Patient demonstrates 100% adherence to Apixaban 5 mg PO BID via daily pillbox with complete resolution of prior bruising fears and knowledge deficit barriers (recognizing minor bruising as expected and non-concerning). eGFR 72 mL/min/1.73m², SCr 1.0 mg/dL, and weight 83 kg confirm Apixaban dose-reduction criteria are not met. Per 2023 ACC/AHA AFib guidelines, DOAC therapy (Apixaban 5 mg BID) is preferred over VKAs (Warfarin) and is indicated for lifelong stroke prevention. Prior pharmacist interventions successfully resolved cost and fear barriers. Patient question regarding medication duration requires clear education on the chronic nature of AFib and lifelong anticoagulation rationale.'
        }
      ] 
    },
    { 
      id: 'w4b3_a2', 
      title: 'HFrEF & 3-Pillar GDMT Stability', 
      icon: 'Heart', 
      color: '13314f', 
      questions: [
        { 
          key: 'q2', 
          q: 'What is the status of HFrEF and GDMT maintenance?',
          defaultAnswer: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%) is clinically stable on 3-pillar GDMT (Sacubitril/Valsartan 49/51 mg BID [ARNI], Metoprolol Succinate 50 mg daily [Beta-blocker], Empagliflozin 10 mg daily [SGLT2i]). Patient reports stable HF symptoms (mild fatigue, exertional dyspnea) and denies decompensation negatives (chest pain, resting dyspnea, orthopnea, PND, edema, ED visits, or hospitalizations). Improved adherence directly links to clinical HF stability. Absence of BNP/NT-proBNP is noted as missing expected data for objective stability assessment. Heart rate 80 bpm is well controlled on Metoprolol Succinate rate control in HFrEF. Continued 3-pillar GDMT is indicated long term.'
        }
      ] 
    },
    { 
      id: 'w4b3_a3', 
      title: 'Cost/Access Resolution & Health Literacy Advancement', 
      icon: 'CheckCircle', 
      color: '059669', 
      questions: [
        { 
          key: 'q3', 
          q: 'What progress has been made in access, literacy, and self-management?',
          defaultAnswer: 'Cost and access barriers have been successfully resolved via Patient Assistance Program (PAP) enrollment, serving as the primary driver of adherence improvement. However, fixed income status remains an ongoing vulnerability warranting periodic reassessment. Health literacy and communication comfort have improved significantly, enabling the patient to avoid independent medication changes. Pharmacist interventions successfully resolved prior medication therapy problems. Continued reinforcement of self-management education is indicated.'
        }
      ] 
    },
    { 
      id: 'w4b3_a4', 
      title: 'Comorbidities & Preventive Care Optimization', 
      icon: 'Shield', 
      color: '6366f1', 
      questions: [
        { 
          key: 'q4', 
          q: 'What is the status of ongoing comorbidities and preventive care?',
          defaultAnswer: 'Hypertension is controlled (office BP 124/74 mmHg, goal <130/80 mmHg). Hyperlipidemia is stable on Atorvastatin 40 mg daily for CV risk reduction in HFrEF/AFib. Preventive care progress recognized: Pneumococcal vaccination completed; Shingrix Dose #2 and Tdap booster administered at today\'s visit. Influenza and COVID-19 vaccines are up to date with no further action needed.'
        }
      ] 
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4b3_p1', 
      title: 'Persistent Nonvalvular AFib Long-Term Anticoagulation Plan', 
      options: [
        { key: 'o1', label: 'Continue Apixaban 5 mg PO twice daily for long-term/lifelong stroke prevention per 2023 ACC/AHA AFib guidelines (DOAC preference over VKAs; confirm Warfarin is not indicated)', correct: true },
        { key: 'o2', label: 'Reinforce 100% anticoagulation adherence using daily pillbox', correct: true },
        { key: 'o3', label: 'Review major bleeding warning signs (dark stools, hematuria, severe headache) and distinguish minor cutaneous bruising', correct: true },
        { key: 'o4', label: 'Address patient duration question: educate on chronic AFib nature and explain lifelong anticoagulation rationale', correct: true },
        { key: 'o5', label: 'Encourage patient to contact healthcare team before making any future medication changes', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p2', 
      title: 'HFrEF 3-Pillar GDMT Long-Term Strategy', 
      options: [
        { key: 'o6', label: 'Continue Sacubitril/Valsartan 49/51 mg PO BID (ARNI pillar with guideline class rationale)', correct: true },
        { key: 'o7', label: 'Continue Metoprolol Succinate 50 mg PO daily (Beta-blocker pillar with guideline class rationale)', correct: true },
        { key: 'o8', label: 'Continue Empagliflozin 10 mg PO daily (SGLT2i pillar with guideline class rationale)', correct: true },
        { key: 'o9', label: 'Maintain current stable GDMT doses without uptitration today', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p3', 
      title: 'Hyperlipidemia & Comorbidity Management', 
      options: [
        { key: 'o10', label: 'Continue Atorvastatin 40 mg PO daily for CV risk reduction in HFrEF and AFib (LDL goal <70 mg/dL)', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p4', 
      title: 'Patient Education & Self-Management Counseling', 
      options: [
        { key: 'o11', label: 'Educate patient on chronic nature of AFib and HFrEF, reinforcing lifelong need for both anticoagulation and 3-pillar GDMT', correct: true },
        { key: 'o12', label: 'Review heart failure self-management principles (monitoring fatigue, exertional dyspnea, edema)', correct: true },
        { key: 'o13', label: 'Praise patient for excellent adherence and encourage ongoing open communication before self-altering medications', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p5', 
      title: 'Longitudinal Monitoring Plan (8 Parameters)', 
      options: [
        { key: 'o14', label: 'Monitor HF symptoms (fatigue, dyspnea, edema), blood pressure (goal <130/80), heart rate, medication adherence, quality of life / patient-reported outcomes, renal function (SCr, eGFR), periodic liver function (given Atorvastatin), and medication affordability', correct: true },
        { key: 'o15', label: 'Confirm routine INR monitoring is unnecessary given DOAC (Apixaban) use', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p6', 
      title: 'Preventive Care Administration Plan', 
      options: [
        { key: 'o16', label: 'Administer Shingrix Dose #2 today to complete the 2-dose series', correct: true },
        { key: 'o17', label: 'Administer Tdap booster vaccine today', correct: true },
        { key: 'o18', label: 'Confirm Influenza and COVID-19 vaccinations are up to date with no further action needed', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p7', 
      title: 'Follow-Up Plan', 
      options: [
        { key: 'o19', label: 'Schedule routine follow-up visit in 3 to 6 months for ongoing monitoring of adherence, HF symptom stability, patient understanding, and medication access', correct: true }
      ] 
    }
  ]
})

/* ============================ ROBERT JENKINS (C) ============================ */
// Complex multi-morbidity (HFrEF + AFib + CKD + T2DM). Precise dosing and AZALEA trial application.

const robertTue = makeCase({
  id: 'w4-robert_j4-tue',
  // FIXED: DOB added; weight corrected to 58 kg per rubric; SCr corrected to 1.4 mg/dL per rubric
  PATIENT: { name: 'Robert Jenkins', age: 76, dob: '07/19/1950', sex: 'male', ethnicity: 'White', mrn: 'W4-90088' },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I like to review my labs. My kidney numbers seem worse.",
    snapshotSummary: 'Robert has complex multi-morbidity (HFrEF, AFib, CKD Stage 3, T2DM). He is 76, weighs 58 kg, and SCr is 1.4 mg/dL (eGFR 44). He meets only ONE Apixaban dose-reduction criterion (SCr ≥1.5? No — SCr is 1.4, so actually ZERO criteria met). Standard 5 mg BID is correct.',
    diseaseStates: ['HFrEF', 'AFib', 'CKD', 'T2DM'],
    learningObjectives: ['Identify need for DOAC dose adjustment based on age, weight, and SCr'],
    visitDate: '09/09/2026',
  },
  // FIXED: Weight 58 kg per rubric; vitalsTime added
  VITALS: { bp: '120/70', bpRepeat: '118/68', hr: '68', rr: '16', temp: '98.6°F', spo2: '97%', weight: '58 kg', height: "5'7\"", bmi: '20.0', vitalsTime: '09/09/2026 09:14', flags: {} },
  LABS: [
    // FIXED: SCr 1.4 mg/dL per rubric; eGFR adjusted accordingly; labDate added
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'K', value: '5.0', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'BUN', value: '34', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'SCr', value: '1.4', unit: 'mg/dL', flag: 'high', labDate: '09/09/2026 07:50' },
    { label: 'eGFR', value: '44', unit: 'mL/min/1.73m²', flag: 'low', labDate: '09/09/2026 07:50' },
    { label: 'WBC', value: '6.4', unit: 'x10³/mm³', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Hgb', value: '13.5', unit: 'g/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Plt', value: '228', unit: 'x10³/mm³', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'NT-proBNP', value: '165', unit: 'pg/mL', flag: 'high', labDate: '09/09/2026 07:50' },
    { label: 'HbA1c', value: '6.9', unit: '%', flag: 'normal', labDate: '09/09/2026 07:50' }
  ],
  // FIXED: Alert corrected to reflect SCr 1.4 (does NOT meet ≥1.5 criterion)
  ALERTS: [{ level: 'warn', text: 'Apixaban dose-reduction criteria (age ≥80, Wt ≤60kg, SCr ≥1.5 mg/dL): Age 76 [No]; Weight 58 kg [Yes — ≤60kg]; SCr 1.4 [No — <1.5]. Only ONE criterion met. Standard dose 5 mg BID is correct.' }, { level: 'warn', text: 'CKD Stage 3 (eGFR 44) and polypharmacy require careful renal and electrolyte monitoring.' }],
  // FIXED: Problem list expanded to include all active diagnoses
  PROBLEMS: [
    { name: 'AFib', detail: 'On Apixaban 5 mg BID — standard dose confirmed appropriate', flag: 'normal' },
    { name: 'CKD Stage 3', detail: 'SCr 1.4 mg/dL, eGFR 44. Monitor K and renal function.', flag: 'warn' },
    { name: 'HFrEF', detail: 'Stable on maximally tolerated GDMT', flag: 'normal' },
    { name: 'T2DM', detail: 'HbA1c 6.9%. Well controlled.', flag: 'normal' },
    { name: 'Coronary Artery Disease', detail: 'On Rosuvastatin 40 mg', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '97/103 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Metoprolol Succinate', dose: '100 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Spironolactone', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/T2DM', notes: '' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib', notes: 'Standard dose — meets only 1 of 3 dose-reduction criteria (weight)' },
    { name: 'Rosuvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'CAD', notes: '' },
  ],
  // FIXED: Full immunization panel added
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Up to date (received PPSV23 and PCV20)', flag: 'normal' },
    { name: 'Shingrix', status: 'Series completed', flag: 'normal' },
    { name: 'Tdap', status: 'Overdue', flag: 'warn' },
  ],
  // FIXED: Full SUBJECTIVE_DOCUMENTED with all components per rubric
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Highly engaged patient who reviews all labs. Excellent medication adherence. CKD Stage 3 on multi-drug GDMT. Questioned if SCr 1.4 mg/dL warrants Apixaban dose reduction.' },
    { label: 'Social history', value: 'Former smoker (25 pack-year history, quit ~12 years ago). Rarely drinks alcohol. Retired engineer. Lives with wife who assists with management.' },
    { label: 'Family History', value: 'Father: MI at age 58. Mother: stroke at age 72. Brother: CAD.' },
  ],
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

  // FIXED: INTERVIEW_KNOWLEDGE indentation corrected; counseling matches SCr 1.4, not 1.82
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-robert_j4-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-robert_j4-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin. I avoid other over-the-counter pain relievers unless my doctor approves them." },
    { id: 'w4-robert_j4-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe 1 to 2 drinks per month at social gatherings." },
    { id: 'w4-robert_j4-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 12 years ago, and I had a 25 pack-year history before that." },
    { id: 'w4-robert_j4-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a heart attack at age 58. My mother had a stroke at age 72. My brother has coronary artery disease." },
    { id: 'w4-robert_j4-tue_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife', 'engineer', 'retired'], response: "I am a retired engineer. I live with my wife, she helps me manage everything." },
    { id: 'w4-robert_j4-tue_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "Oh yes, I am very diligent. I check my blood pressure, heart rate, and weight at home every single day." },
    // FIXED: Patient question updated to match corrected SCr 1.4
    { id: 'w4c_q', topic: 'Evidence question', field: 'questions', keywords: ['labs', 'kidney', 'creatinine', 'dose', 'apixaban'], response: "My creatinine is 1.4. Does that affect my Apixaban dose? I read online that people with kidney problems sometimes need a lower dose." },
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
    snapshotSummary: 'Robert is experiencing minor epistaxis on Apixaban. He is questioning the risk-benefit tradeoff. AZALEA-TIMI 71 concept introduced.',
    diseaseStates: ['AFib'],
    learningObjectives: ['Manage minor bleeding on DOACs', 'Apply AZALEA-TIMI 71 concepts regarding future Factor XI inhibitors'],
    visitDate: '12/09/2026',
  },
  VITALS: { bp: '120/70', bpRepeat: '118/68', hr: '68', rr: '16', temp: '98.6°F', spo2: '97%', weight: '58 kg', height: "5'7\"", bmi: '20.0', vitalsTime: '12/09/2026 09:14', flags: {} },
  LABS: [
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'BUN', value: '32', unit: 'mg/dL', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'SCr', value: '1.38', unit: 'mg/dL', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'eGFR', value: '45', unit: 'mL/min/1.73m²', flag: 'low', labDate: '12/09/2026 07:50' },
    { label: 'WBC', value: '6.5', unit: 'x10³/mm³', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'Hgb', value: '13.4', unit: 'g/dL', flag: 'normal', labDate: '12/09/2026 07:50' },
    { label: 'Plt', value: '226', unit: 'x10³/mm³', flag: 'normal', labDate: '12/09/2026 07:50' }
  ],
  ALERTS: [],
  PROBLEMS: [
    { name: 'AFib (Minor Bleeding MTP)', detail: 'Minor self-limited epistaxis on Apixaban 5 mg BID. Continuation appropriate as stroke risk (CHA2DS2-VASc 4) outweighs minor bleeding risk.', flag: 'warn' },
    { name: 'CKD Stage 3a', detail: 'SCr 1.38 mg/dL, eGFR 45 mL/min/1.73m². Stable.', flag: 'warn' },
    { name: 'HFrEF', detail: 'Stable on GDMT 4 pillars.', flag: 'normal' },
    { name: 'T2DM', detail: 'Controlled. HbA1c 6.9%', flag: 'normal' },
    { name: 'Coronary Artery Disease', detail: 'On Rosuvastatin 40 mg', flag: 'normal' },
  ],
  MEDICATIONS: robertTue.MEDICATIONS,
  IMMUNIZATIONS: robertTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '3-Month Follow-Up. Reports two minor episodes of epistaxis (nosebleeds) in the past month, resolving within 5 minutes of direct nasal compression. Denies ER visits, hospitalizations, hemoptysis, hematuria, black/tarry stools, or major bleeding. Questions if a safer blood thinner exists.' },
    { label: 'Social History', value: 'Retired engineer. Lives with wife. Former smoker (25 pack-year history, quit 12 years ago). Rarely drinks alcohol (1-2 drinks/month). Diligent with home BP, HR, and weight tracking.' },
    { label: 'Family History', value: 'Father had MI at age 58. Mother had stroke at age 72. Brother has CAD.' },
    { label: 'OTC & Allergies', value: 'Daily multivitamin. Avoids OTC NSAIDs/aspirin unless approved. NKDA.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend Analysis', value: 'Weight 58 kg (stable), BMI 20.0, BP 120/70 mmHg (repeat 118/68), HR 68 bpm. SCr 1.38 mg/dL, eGFR 45 mL/min/1.73m² (stable CKD 3a). Hgb 13.4 g/dL, Plt 226k (normal).' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'nosebleeds', label: 'Bleeding details', placeholder: 'How severe are the bleeds?' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Minor Bleeding on DOACs & Local Management', body: ["Nosebleeds and easy bruising are known side effects of Apixaban. These minor bleeds should be managed locally — pinch your nose firmly for 10-15 minutes, stay upright, and avoid blowing your nose. The stroke risk from stopping your blood thinner is far greater than the risk from these minor bleeds."] }], 
  GUIDING_QUESTIONS: [
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
    { 
      id: 'w4c2_a1', 
      title: 'Epistaxis Management & DOAC Rationale', 
      icon: 'Droplet', 
      color: 'dc2626', 
      questions: [
        { 
          key: 'q1', 
          q: 'How should minor epistaxis be managed in this patient on Apixaban?',
          defaultAnswer: 'Continue Apixaban 5 mg PO BID. Minor self-limited epistaxis (resolving in 5 minutes with pressure) does NOT warrant stopping DOAC therapy, as stroke risk (CHA2DS2-VASc = 4) far outweighs minor bleeding risk. Counsel on local compression measures.'
        },
        { 
          key: 'q2', 
          q: 'How does AZALEA-TIMI 71 address his desire for a "safer" blood thinner?',
          defaultAnswer: 'Discuss that emerging Factor XI inhibitors (such as abelacimab studied in AZALEA-TIMI 71) represent future investigational therapies designed to decouple stroke prevention from bleeding risk, but are not yet commercially available.'
        }
      ] 
    },
    {
      id: 'w4c2_a2',
      title: 'Comorbidities & Renal Monitoring',
      icon: 'Scale',
      color: '13314f',
      questions: [
        {
          key: 'q3',
          q: 'What is the status of his CKD Stage 3a and HFrEF?',
          defaultAnswer: 'CKD Stage 3a (SCr 1.38 mg/dL, eGFR 45 mL/min/1.73m²) is stable; Apixaban 5 mg BID remains correct (meets only 1 of 3 dose reduction criteria). HFrEF stable on GDMT. Monitor renal function and CBC.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4c2_p1', 
      title: 'Anticoagulation & Local Epistaxis Measures', 
      options: [
        { key: 'o1', label: 'Continue Apixaban 5 mg PO BID. Counsel patient on local epistaxis measures: sit upright, lean forward slightly, pinch nasal bridge firmly for 10-15 minutes. Reassure that minor epistaxis does not warrant stopping Apixaban.', correct: true },
        { key: 'o2', label: 'Discuss that future Factor XI inhibitors (AZALEA-TIMI 71 trial) are being studied to decouple thrombosis from bleeding risk, but are not yet commercially available', correct: true },
        { key: 'o3', label: 'Stop Apixaban immediately', correct: false },
      ] 
    },
    {
      id: 'w4c2_p2',
      title: 'GDMT Maintenance & Monitoring',
      options: [
        { key: 'o4', label: 'Continue Sacubitril/Valsartan 97/103 mg PO BID, Metoprolol Succinate 100 mg PO daily, Spironolactone 25 mg PO daily, Empagliflozin 10 mg PO daily, Rosuvastatin 40 mg PO daily', correct: true },
        { key: 'o5', label: 'Monitor renal function (SCr, eGFR), potassium, CBC (Hgb, Plt), and bleeding symptoms at follow-up in 1 to 3 months', correct: true },
      ]
    }
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
    visitDate: '03/09/2027',
  },
  VITALS: { bp: '120/70', bpRepeat: '118/68', hr: '68', rr: '16', temp: '98.6°F', spo2: '97%', weight: '58 kg', height: "5'7\"", bmi: '20.0', vitalsTime: '03/09/2027 09:14', flags: {} },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'BUN', value: '31', unit: 'mg/dL', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'SCr', value: '1.35', unit: 'mg/dL', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'eGFR', value: '46', unit: 'mL/min/1.73m²', flag: 'low', labDate: '03/09/2027 07:50' },
    { label: 'WBC', value: '6.3', unit: 'x10³/mm³', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'Hgb', value: '13.3', unit: 'g/dL', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'Plt', value: '229', unit: 'x10³/mm³', flag: 'normal', labDate: '03/09/2027 07:50' }
  ],
  ALERTS: [],
  PROBLEMS: [
    { name: 'AFib (Post-Colonoscopy Anticoagulation Reassessment)', detail: 'On Apixaban 5 mg BID. Continuation indicated lifelong despite successful removal of colonic polyps.', flag: 'normal' },
    { name: 'CKD Stage 3a', detail: 'SCr 1.35 mg/dL, eGFR 46 mL/min/1.73m². Stable.', flag: 'warn' },
    { name: 'HFrEF', detail: 'Stable on GDMT', flag: 'normal' },
    { name: 'T2DM', detail: 'Controlled', flag: 'normal' },
  ],
  MEDICATIONS: robertTue.MEDICATIONS,
  IMMUNIZATIONS: robertTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '6-Month Follow-Up. Recent elective screening colonoscopy 10 days ago with successful removal of two small tubular adenomas. Apixaban was held 48 hours prior and resumed 24 hours post-procedure per protocol with no bleeding complications. Patient asks if he can discontinue Apixaban now that the polyps were removed.' },
    { label: 'Social History', value: 'Retired engineer. Lives with wife. Former smoker (25 pack-years, quit 12 years ago). Rarely drinks alcohol.' },
    { label: 'Family History', value: 'Father MI at 58, mother stroke at 72, brother CAD.' },
    { label: 'OTC & Allergies', value: 'Daily multivitamin. Avoids PRN NSAIDs. NKDA.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Gastroenterology Report', value: 'Colonoscopy (10 days ago): Two small tubular adenomas removed. No procedural complications. No post-procedural bleeding. Routine surveillance recommended by gastroenterology.' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'colonoscopy', label: 'Colonoscopy follow-up', placeholder: 'What are his concerns?' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Long-Term Anticoagulation Rationale', body: ["It's great news that the colonoscopy went well and the polyps were removed. However, we take Apixaban to prevent strokes caused by your atrial fibrillation. The polyps were a potential bleeding risk, but removing them does not cure your atrial fibrillation or lower your stroke risk. Therefore, you must continue taking your blood thinner exactly as prescribed."] }],
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
    { 
      id: 'w4c3_a1', 
      title: 'Post-Colonoscopy Anticoagulation Reassessment', 
      icon: 'ShieldAlert', 
      color: 'dc2626', 
      questions: [
        { 
          key: 'q1', 
          q: 'Does a successful colonoscopy alter his stroke risk or the underlying indication for anticoagulation?',
          defaultAnswer: 'No. Successful polyp removal eliminates the local lesion that could bleed, but does NOT alter the underlying stroke risk from persistent atrial fibrillation (CHA2DS2-VASc = 4). Apixaban 5 mg BID remains indicated for lifelong stroke prevention.'
        },
        { 
          key: 'q2', 
          q: 'What is the overall stability of his chronic conditions?',
          defaultAnswer: 'Persistent AFib, HFrEF, CKD Stage 3a, T2DM, and CAD are all clinically stable on current medical therapy. Peri-procedural hold and resumption of Apixaban was executed appropriately without bleeding or thromboembolic events.'
        }
      ] 
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4c3_p1', 
      title: 'Anticoagulation Reassurance & GDMT Maintenance', 
      options: [
        { key: 'o1', label: 'Reinforce that long-term anticoagulation with Apixaban 5 mg PO BID remains indicated despite successful colonoscopy and polyp removal', correct: true },
        { key: 'o2', label: 'Continue Sacubitril/Valsartan 97/103 mg PO BID, Metoprolol Succinate 100 mg PO daily, Spironolactone 25 mg PO daily, Empagliflozin 10 mg PO daily, Rosuvastatin 40 mg PO daily', correct: true },
        { key: 'o3', label: 'Discontinue Apixaban since the bleeding source (polyps) was removed', correct: false },
      ] 
    },
    {
      id: 'w4c3_p2',
      title: 'Monitoring & Follow-Up',
      options: [
        { key: 'o4', label: 'Monitor renal function (SCr, eGFR), CBC, medication adherence, and HF symptoms', correct: true },
        { key: 'o5', label: 'Schedule follow-up in 3 to 6 months for routine chronic disease monitoring', correct: true },
      ]
    }
  ],
  GUIDING_QUESTIONS: [
    'Why is continuation of GDMT appropriate despite declining eGFR?',
    'What factors may contribute to CKD progression?',
    'Why is potassium monitoring important?',
    'What is the significance of the BNP trend?',
    'How should dialysis concerns be addressed?',
    'What is the major teaching pearl of this encounter?'
  ],
})

export const W4_CASES = [michaelTue, michaelWed, michaelThu, angelaTue, angelaWed, angelaThu, robertTue, robertWed, robertThu]
export const W4_RUBRICS = {}
