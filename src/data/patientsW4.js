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
    snapshotSummary: 'Angela has HFrEF (LVEF 35%) and Persistent Nonvalvular AFib. Prescribed Apixaban for stroke prevention but skipping doses due to cost barrier. CHA2DS2-VASc = 3.',
    diseaseStates: ['HFrEF', 'AFib', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Calculate CHA2DS2-VASc score', 'Identify cost nonadherence as a barrier to stroke prevention', 'Formulate access and adherence interventions'],
    visitDate: '09/09/2026',
  },
  VITALS: { bp: '128/78', bpRepeat: '126/76', hr: '88', rr: '16', temp: '98.2°F', spo2: '98%', weight: '84 kg', height: "5'5\"", bmi: '30.8', vitalsTime: '09/09/2026 09:14', flags: { bmi: 'warn' } },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'BUN', value: '18', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'eGFR', value: '72', unit: 'mL/min/1.73m²', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Glucose', value: '106', unit: 'mg/dL', flag: 'borderline', labDate: '09/09/2026 07:50' },
    { label: 'AST', value: '24', unit: 'U/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'ALT', value: '21', unit: 'U/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'WBC', value: '6.8', unit: 'x10³/mm³', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Hgb', value: '13.2', unit: 'g/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Plt', value: '241', unit: 'x10³/mm³', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'BNP', value: '210', unit: 'pg/mL', flag: 'high', labDate: '09/09/2026 07:50' }
  ],
  ALERTS: [{ level: 'high', text: 'Patient has Persistent Nonvalvular AFib with elevated stroke risk (CHA2DS2-VASc = 3) and nonadherence to Apixaban due to cost.' }],
  PROBLEMS: [
    { name: 'Persistent Nonvalvular Atrial Fibrillation', detail: 'CHA2DS2-VASc = 3 (HF +1, HTN +1, Female sex +1; Age 64 does not meet ≥65 criterion). Elevated stroke risk. Apixaban 5 mg BID skipped 2-3x/week due to cost barrier.', flag: 'high' },
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 35%, NYHA Class II. On 3 GDMT pillars (Sacubitril/Valsartan 49/51 mg BID, Metoprolol Succinate 50 mg daily, Empagliflozin 10 mg daily). Evening Sacubitril/Valsartan doses missed 2-3x/week due to cost.', flag: 'normal' },
    { name: 'Hypertension', detail: 'On GDMT, BP 128/78 mmHg (repeat 126/76 mmHg)', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg daily', flag: 'normal' },
    { name: 'Obesity Class I', detail: 'BMI 30.8 kg/m²', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '49/51 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: 'Missed evening doses 2-3x/week due to cost barrier — standard target dose 49/51 mg BID' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF / Rate control', notes: 'Adherence maintained' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: 'Adherence maintained' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'Skipped 2-3x/week due to cost barrier; patient stretches supply toward the end of the month before refill date' },
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
    { label: 'HPI', value: '64-year-old female presents to the ambulatory care cardiology clinic for an initial visit regarding medication adherence, cost barriers, and disease management. Known HFrEF (LVEF 35%) and persistent nonvalvular atrial fibrillation (AFib). Patient reports feeling generally stable overall, but experiences mild fatigue and occasional exertional shortness of breath / dyspnea on exertion. Reports awareness of irregular heartbeat, but denies significant palpitations, worsening symptoms, chest pain, syncope, recent falls, significant lower extremity edema, recent emergency department visits, or recent hospitalizations. Initial self-report indicates taking medications "for the most part," but further history reveals she misses evening doses of Sacubitril/Valsartan 49/51 mg BID 2–3 times per week and skips or rations Apixaban 5 mg BID 2–3 times per week, specifically stretching her supply toward the end of the month before her refill date due to financial hardship. Patient identifies both Sacubitril/Valsartan and Apixaban / Eliquis as prohibitively expensive. Patient feels overwhelmed by the total number of medications and expresses a limited understanding of specific drug purposes, displaying a distinct knowledge gap regarding both stroke prevention and anticoagulation purpose in AFib (viewing Apixaban only generically as a "blood thinner"). Occasional transportation difficulty is noted and linked directly to refill difficulty. Patient explicitly states strong motivation to improve medication adherence, better understand her therapies, and improve her overall health.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular: Reports awareness of irregular heartbeat. Denies chest pain, significant palpitations, syncope, orthopnea, or paroxysmal nocturnal dyspnea (PND). Respiratory: Reports mild fatigue and occasional exertional shortness of breath / dyspnea; denies resting dyspnea or worsening respiratory symptoms. Musculoskeletal/Edema: Denies significant lower extremity edema or recent falls. General: Denies recent ED visits or hospitalizations.' },
    { label: 'Past Medical History', value: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%), Persistent Nonvalvular Atrial Fibrillation (AFib), Hypertension (HTN), Hyperlipidemia (HLD), Class I Obesity (BMI 30.8 kg/m²).' },
    { label: 'Social History', value: 'Lives alone on a fixed income as a retired administrative assistant. Experiences occasional transportation difficulty (relying on public transit/bus or rides from relatives), which directly impacts medication refill timeliness. Former smoker (15 pack-year smoking history, quit ~8 years ago). Drinks 1 glass of wine per week. Denies illicit drug use.' },
    { label: 'Family History', value: 'Father: suffered an ischemic stroke at age 70. Mother: history of heart failure. Sister: history of hypertension. No additional relevant surgical or family history beyond documented.' },
    { label: 'OTC & Allergies', value: 'Tylenol (acetaminophen) PRN for occasional minor aches; explicitly avoids PRN NSAIDs and aspirin. No known drug allergies (NKDA).' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (gallbladder removal) several years ago. No additional relevant surgical history.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Echocardiogram & Lab Interpretations', value: 'Echocardiogram (on file): LVEF 35%, persistent nonvalvular AFib, no significant interval change from prior imaging. Physical Exam: Irregularly irregular cardiac rhythm, clear lungs, no peripheral edema. Laboratory Interpretations: BNP 210 pg/mL contextualized for stable known HFrEF (elevated but stable/non-acute). Serum potassium (4.4 mEq/L) is normal and supports continued RAAS inhibitor / GDMT therapy. Renal function (SCr 1.0 mg/dL, eGFR 72 mL/min/1.73m²) and hepatic function (AST 24 U/L, ALT 21 U/L) are explicitly linked together as preserved and within normal limits, fully supporting the current medication regimen, GDMT, and full-dose Apixaban (5 mg BID). CBC (WBC 6.8, Hgb 13.2 g/dL, Plt 241k) is explicitly noted as without significant abnormalities. Absence of routine anticoagulation monitoring lab (INR/anti-Xa) noted as expected and unnecessary for DOAC therapy. CHA2DS2-VASc score calculated as 3 (Heart Failure +1, Hypertension +1, Female sex +1; Age 64 does not meet the ≥65 age criterion for a point; total score 3).' }
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
    { id: 'w4b_apix', topic: 'Cost Barrier & Rationing', field: 'apixaban', keywords: ['apixaban', 'eliquis', 'cost', 'afford', 'stop', 'fill', 'stretch', 'skip', 'miss'], response: "Sacubitril/Valsartan and Eliquis are so expensive on my fixed income. I try taking my pills for the most part, but I skip my evening Sacubitril/Valsartan dose 2-3 times a week and stretch my Eliquis by skipping doses 2-3 times a week toward the end of the month before my refill date. I really want to improve my adherence and health if I can afford them." },
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
          defaultAnswer: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%, NYHA Class II) is clinically stable with nonadherence caveat. Patient reports mild fatigue and occasional exertional dyspnea, but denies worsening symptoms, chest pain, syncope, orthopnea, PND, edema, ED visits, or hospitalizations. Patient is currently prescribed 3 GDMT pillars: Sacubitril/Valsartan 49/51 mg BID, Metoprolol Succinate 50 mg daily, and Empagliflozin 10 mg daily. However, Sacubitril/Valsartan evening doses are missed 2–3 times per week due to cost barriers, making it impossible to distinguish true treatment failure from inadequate drug exposure. Both renal function (eGFR 72 mL/min/1.73m², SCr 1.0 mg/dL) and hepatic function (AST 24 U/L, ALT 21 U/L) together with serum potassium (4.4 mEq/L) and blood pressure (128/78 mmHg) support current medication regimen and future GDMT optimization once adherence is established. Therapy escalation should be withheld at this time until adherence barriers are resolved. Reassessment planned in 4 to 6 weeks. BNP 210 pg/mL is contextualized as elevated but stable/non-acute for known HFrEF.'
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
          defaultAnswer: 'Persistent Nonvalvular Atrial Fibrillation with high thromboembolic risk. CHA2DS2-VASc score is explicitly calculated as 3 (Heart Failure +1, Hypertension +1, Female sex +1; Age 64 does not meet the ≥65 age criterion for a point; total score 3 ≥2), indicating a clear indication for long-term oral anticoagulation. Apixaban nonadherence (skipping/rationing doses 2–3 times per week toward the end of the month before refill date due to cost) is identified as the single most clinically concerning finding in this encounter, dramatically increasing stroke risk. Patient exhibits limited understanding of both stroke prevention and anticoagulation purpose, unaware of the severe thromboembolic consequences of missed anticoagulant doses. Apixaban 5 mg PO BID is confirmed as the appropriate non-reduced dose, as criteria for dose reduction (must meet 2 of: age ≥80, weight ≤60 kg, SCr ≥1.5 mg/dL) are not met (age 64, weight 84 kg, SCr 1.0 mg/dL, eGFR 72 mL/min/1.73m²). Cost barriers must be resolved to enable full DOAC adherence before considering any change to anticoagulation strategy; inappropriate substitution with Warfarin is NOT recommended due to monitoring burden and guideline DOAC preference.'
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
          defaultAnswer: 'Medication access and cost barriers identified as a major medication therapy problem directly causing nonadherence. Patient is retired on a fixed income, living alone, with both Sacubitril/Valsartan 49/51 mg BID and Apixaban 5 mg BID identified as prohibitively expensive. Occasional transportation difficulty further impairs timely prescription refills. Comprehensive access interventions are required: prescription insurance coverage review, manufacturer patient assistance program (PAP) enrollment, copay assistance evaluation, mail-order pharmacy exploration, transportation resource identification, and social work referral.'
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
          defaultAnswer: 'Health literacy deficit and medication knowledge gap identified as a distinct clinical problem. Patient expresses feeling overwhelmed by the medication regimen and has limited understanding of heart failure, AFib, stroke prevention, and anticoagulation purpose as distinct understanding gaps. This knowledge deficit directly contributes to medication rationing behavior. Structured education on disease states, therapy goals, and medication benefits will enhance long-term adherence and engagement. Medication changes are not warranted based on knowledge gaps alone.'
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
        { key: 'o1', label: 'Continue Sacubitril/Valsartan 49/51 mg PO twice daily (ARNI target maintenance dose)', correct: true },
        { key: 'o2', label: 'Continue Metoprolol Succinate 50 mg PO daily (Beta-blocker pillar)', correct: true },
        { key: 'o3', label: 'Continue Empagliflozin 10 mg PO daily (SGLT2i pillar)', correct: true },
        { key: 'o4', label: 'Avoid intensifying heart failure therapy at this time; defer GDMT titration until cost and adherence barriers are resolved and reassessed in 4 to 6 weeks', correct: true },
        { key: 'o5', label: 'Recognize current labs (renal eGFR 72 mL/min/1.73m², K 4.4 mEq/L, LFTs WNL, BP 128/78 mmHg) as supportive of current regimen and future GDMT optimization once adherence is confirmed', correct: true }
      ] 
    },
    { 
      id: 'w4b_p2', 
      title: 'Persistent Nonvalvular AFib & Anticoagulation Management Plan', 
      options: [
        { key: 'o6', label: 'Continue Apixaban 5 mg PO twice daily (do NOT discontinue, do NOT reduce dose, and do NOT switch to Warfarin)', correct: true },
        { key: 'o7', label: 'Confirm Apixaban 5 mg PO BID is the appropriate non-reduced dose (dose reduction criteria not met)', correct: true },
        { key: 'o8', label: 'Educate patient on AFib disease state, stroke risk, stroke prevention, and anticoagulation purpose, emphasizing 100% adherence to prevent thromboembolic stroke', correct: true },
        { key: 'o9', label: 'Warn patient regarding the serious thromboembolic consequences of missed or skipped anticoagulant doses', correct: true }
      ] 
    },
    { 
      id: 'w4b_p3', 
      title: 'Comprehensive Access & Cost Mitigation Plan', 
      options: [
        { key: 'o10', label: 'Assess prescription insurance coverage and formulary options for Sacubitril/Valsartan 49/51 mg BID and Apixaban 5 mg BID', correct: true },
        { key: 'o11', label: 'Submit applications for manufacturer Patient Assistance Programs (PAP) and evaluate copay assistance eligibility', correct: true },
        { key: 'o12', label: 'Explore mail-order pharmacy options and arrange community transportation assistance resources', correct: true },
        { key: 'o13', label: 'Refer patient to clinic social work and medication access coordinator services', correct: true }
      ] 
    },
    { 
      id: 'w4b_p4', 
      title: 'Structured Patient Education & Communication Plan', 
      options: [
        { key: 'o14', label: 'Provide structured education on heart failure, atrial fibrillation, stroke prevention, anticoagulation purpose, and the specific purpose of each prescribed medication', correct: true },
        { key: 'o15', label: 'Utilize the teach-back method to verify patient understanding of stroke risk and adherence importance', correct: true }
      ] 
    },
    { 
      id: 'w4b_p5', 
      title: 'Comprehensive Monitoring Plan (8 Parameters)', 
      options: [
        { key: 'o16', label: 'Monitor HF symptoms (fatigue, exertional dyspnea, edema)', correct: true },
        { key: 'o17', label: 'Monitor blood pressure, heart rate, medication adherence, pharmacy refill history, bleeding symptoms, stroke warning signs, and routine renal function (SCr, eGFR)', correct: true }
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
  ALERTS: [{ level: 'high', text: 'Patient independently stopped Apixaban 5 mg BID due to minor cutaneous bruising. Elevated stroke risk (CHA2DS2-VASc = 3) warrants immediate resumption.' }],
  PROBLEMS: [
    { name: 'Persistent Nonvalvular Atrial Fibrillation', detail: 'CHA2DS2-VASc = 3. High stroke risk. Discontinued Apixaban several weeks ago due to minor bruising fear.', flag: 'high' },
    { name: 'Anticoagulation Nonadherence & Knowledge Deficit', detail: 'Knowledge gap regarding minor vs major bleeding and stroke risk magnitude.', flag: 'high' },
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 35%. Stable HF symptoms (mild fatigue, exertional dyspnea). On 3-pillar GDMT.', flag: 'normal' },
    { name: 'Hypertension', detail: 'Controlled on GDMT', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg daily', flag: 'normal' },
    { name: 'Preventive Care Gaps', detail: 'Pneumococcal and Shingrix (age-appropriate ≥50 years) vaccinations not documented; deferred to future visit.', flag: 'warn' },
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
    { name: 'Shingrix', status: 'Not documented (care gap, age-appropriate for ≥50 years)', flag: 'warn' },
    { name: 'Tdap', status: 'Last documented ~11 years ago (overdue, needs booster)', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '3-Month Follow-Up at the ambulatory care cardiology clinic. Patient successfully enrolled in Patient Assistance Program for Apixaban, resolving financial cost barriers. However, patient reports she independently discontinued Apixaban 5 mg BID several weeks ago after noticing small, non-painful cutaneous bruises on her arms and legs (lasting several weeks before resolving) and hearing a friend\'s anecdote about bleeding to death on blood thinners. Reports that the bruising specifically did not require medical evaluation or emergency care. Reports improved adherence to Sacubitril/Valsartan since last visit due to improved affordability. Patient reports HF symptoms (mild fatigue, exertional dyspnea) are stable. Denies worsening dyspnea, lower extremity edema, chest pain, syncope, orthopnea, paroxysmal nocturnal dyspnea (PND), hemoptysis, hematuria, hematochezia, melena, ED visits, hospitalizations, or major bleeding. Patient now understands Apixaban\'s stroke-prevention purpose as a foundation, but lacks understanding of the true magnitude of her stroke risk without anticoagulation. Expresses desire to understand minor vs major bleeding distinction and states willingness to continue anticoagulation therapy with better understanding and clinic guidance.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular: Denies chest pain, syncope, orthopnea, PND, or major bleeding. Respiratory: Denies worsening dyspnea or hemoptysis. Gastrointestinal: Denies hematochezia or melena. Genitourinary: Denies hematuria. Musculoskeletal/Edema: Denies lower extremity edema. Skin: Reports minor cutaneous bruising on arms/legs that resolved and specifically did not require medical evaluation. General: Denies ED visits or hospitalizations.' },
    { label: 'Past Medical History', value: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%), Persistent Nonvalvular Atrial Fibrillation (AFib), Hypertension (HTN), Hyperlipidemia (HLD), Obesity.' },
    { label: 'Social History', value: 'Lives alone on fixed income, retired administrative assistant. Cost barrier resolved via PAP. Transportation via bus or family rides. Former smoker (15 pack-year history, quit ~8 years ago). Drinks 1 glass of wine per week. Denies illicit drug use.' },
    { label: 'Family History', value: 'Father: ischemic stroke at age 70. Mother: heart failure. Sister: hypertension.' },
    { label: 'OTC & Allergies', value: 'Tylenol PRN for occasional headaches; avoids aspirin and NSAIDs. NKDA.' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (gallbladder removal).' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Data & Laboratory Panel', value: 'Physical Exam: Cardiac rhythm is irregularly irregular on exam. Vital signs: BP 126/76 mmHg (repeat 124/74 mmHg), HR 84 bpm (irregularly irregular), Wt 84 kg (stable), BMI 30.8 kg/m². Laboratory Data: Baseline Hgb 13.2 g/dL, current Hgb 13.0 g/dL (within normal limits). Platelet count 236 x10³/mm³ (within normal limits). Serum sodium 139 mEq/L, potassium 4.3 mEq/L, BUN 17 mg/dL, SCr 1.0 mg/dL, eGFR 73 mL/min/1.73m², NT-proBNP 210 pg/mL (all within normal limits). CMP is otherwise unremarkable. Routine anti-Xa and INR tests not performed. Immunizations: Pneumococcal, Shingrix, and Tdap documented as uncompleted / care gaps.' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'fear', label: 'Bruising & Bleeding Fear Assessment', placeholder: 'Assess bleeding symptoms and friend anecdote' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Apixaban Resumption & Bleeding Education', body: ["Minor bruising is expected with blood thinners and does not mean you are having dangerous bleeding. Your blood count (Hgb 13.0 g/dL) is stable, proving there is no internal bleeding. Because your stroke risk is high (CHA2DS2-VASc = 3), resuming Apixaban 5 mg twice daily is essential. Contact our clinic before ever stopping a medication."] }],
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
    { id: 'w4b2_bruise', topic: 'Bruising Symptoms', field: 'bleeding', keywords: ['bruise', 'bruising', 'bleed', 'bleeding', 'symptoms', 'nosebleed', 'gums', 'stool', 'urine', 'hematuria'], response: "I noticed small bruises on my arms and legs for several weeks without bumping into anything. They went away on their own and did not require any medical attention or emergency visit. I deny nosebleeds, gum bleeding, hemoptysis, hematuria, hematochezia, melena, ER visits, hospitalizations, or major bleeding. I want to understand minor vs major bleeding and I am willing to resume Eliquis if guided." },
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
          defaultAnswer: 'Persistent Nonvalvular Atrial Fibrillation with high thromboembolic risk. CHA2DS2-VASc score = 3 (Heart Failure +1, Hypertension +1, Female sex +1; Age 64 does not meet ≥65 criterion), indicating high stroke risk. Patient independently stopped Apixaban several weeks ago due to minor cutaneous bruising and fear after a friend\'s bleeding anecdote. Given her specific CHA2DS2-VASc score of 3 and low bleeding risk profile (stable Hgb 13.0 g/dL compared to baseline 13.2 g/dL ruling out major bleeding, normal platelet count 236k ruling out thrombocytopenia), stroke-prevention benefits far outweigh minor bleeding risks. Patient denies major bleeding, hemoptysis, hematuria, hematochezia, melena, or hospitalizations. Preserved renal function (eGFR 73 mL/min/1.73m², SCr 1.0 mg/dL) confirms Apixaban dose-reduction criteria are not met, supporting full-dose Apixaban 5 mg PO BID. Per 2023 ACC/AHA AFib guidelines, DOAC therapy is strongly preferred over VKAs (Warfarin), and no switch is warranted. Resuming full-dose Apixaban 5 mg PO BID immediately is indicated; do NOT reduce dose or discontinue anticoagulation.'
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
          defaultAnswer: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%) is clinically stable on 3-pillar GDMT (Sacubitril/Valsartan 49/51 mg BID, Metoprolol Succinate 50 mg daily, Empagliflozin 10 mg daily). Improved adherence to Sacubitril/Valsartan 49/51 mg BID is directly causally linked to improved medication affordability achieved through Patient Assistance Program (PAP) enrollment. Patient reports stable HF symptoms (mild fatigue, exertional dyspnea) and denies decompensation negatives (chest pain, orthopnea, PND, edema, ED visits, or hospitalizations). Absence of HF decompensation despite missed anticoagulant doses confirms clinical stability. No urgent therapy modification or dose uptitration is planned today; primary focus is maintaining stability and reinforcing adherence.'
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
          defaultAnswer: 'Knowledge gap and health literacy deficit regarding anticoagulation identified as a distinct problem. Patient understands Apixaban\'s stroke-prevention purpose as a foundation, but lacks understanding of AFib stroke risk magnitude and the distinction between minor cutaneous bruising and major bleeding. The knowledge deficit regarding stroke risk magnitude and minor vs major bleeding directly causally led to her decision to self-discontinue Apixaban therapy upon experiencing minor bruising. Friend\'s anecdote was inappropriately prioritized over individualized clinical risk assessment. Health literacy and understanding are improving but still affecting medication decisions. This health literacy gap is an ongoing problem warranting additional structured education at today\'s visit. Patient-centered communication and the teach-back method are essential interventions to restore confidence and achieve long-term adherence.'
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
          defaultAnswer: 'Preventive care gaps identified as a distinct problem: Pneumococcal, Shingrix (age-appropriate for adults ≥50 years old; patient is 64), and Tdap booster (overdue) vaccinations remain uncompleted / care gaps per Objective documentation. Given that today\'s visit focus is anticoagulation adherence and education, vaccine administration is deferred to a future follow-up visit.'
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
        { key: 'o4', label: 'Specifically educate patient on the serious clinical risks of self-adjusting or skipping anticoagulant doses', correct: true },
        { key: 'o5', label: 'Use shared decision-making with confidence-building framing to address bleeding fears', correct: true },
        { key: 'o6', label: 'Instruct patient to contact clinic before making any future medication changes or self-adjusting doses', correct: true }
      ] 
    },
    { 
      id: 'w4b2_p2', 
      title: 'HFrEF GDMT Maintenance Strategy', 
      options: [
        { key: 'o7', label: 'Continue Sacubitril/Valsartan 49/51 mg PO BID, Metoprolol Succinate 50 mg PO daily, Empagliflozin 10 mg PO daily, and Atorvastatin 40 mg PO daily', correct: true },
        { key: 'o8', label: 'Reinforce adherence to HFrEF regimen and confirm no dose uptitration is planned today due to adherence/stability focus', correct: true }
      ] 
    },
    { 
      id: 'w4b2_p3', 
      title: 'Patient Counseling & Teach-Back Education Plan', 
      options: [
        { key: 'o9', label: 'Counsel patient distinguishing minor cutaneous bruising (expected, non-dangerous) from major bleeding warning signs (dark stools, hematuria, severe headache)', correct: true },
        { key: 'o10', label: 'Utilize teach-back method to verify patient understanding of stroke risk, minor vs major bleeding, and clinic contact instructions', correct: true },
        { key: 'o11', label: 'Employ patient-centered language approach to build patient confidence in long-term anticoagulation', correct: true }
      ] 
    },
    { 
      id: 'w4b2_p4', 
      title: 'Monitoring Plan (7 Parameters)', 
      options: [
        { key: 'o12', label: 'Monitor Apixaban adherence specifically, bruising/bleeding signs, stroke warning signs, HF symptoms, routine renal function (SCr, eGFR), CBC (as clinically indicated), and patient understanding/confidence', correct: true }
      ] 
    },
    { 
      id: 'w4b2_p5', 
      title: 'Preventive Care Plan', 
      options: [
        { key: 'o13', label: 'Review vaccination history at future follow-up visit; assess need for Tdap booster and plan deferred Pneumococcal and Shingrix administration at next visit', correct: true }
      ] 
    },
    { 
      id: 'w4b2_p6', 
      title: 'Follow-Up Plan', 
      options: [
        { key: 'o14', label: 'Schedule follow-up visit in 4 to 6 weeks (guideline-aligned window) to reassess patient understanding, confidence, Apixaban adherence, bleeding concerns explicitly, and HF symptom stability', correct: true }
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
  VITALS: { bp: '124/74', bpRepeat: '122/72', hr: '80', rr: '16', temp: '98.0°F', spo2: '98%', weight: '84 kg', height: "5'5\"", bmi: '30.8', vitalsTime: '03/09/2027 09:14', flags: {} },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'BUN', value: '18', unit: 'mg/dL', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'eGFR', value: '72', unit: 'mL/min/1.73m²', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'AST', value: '24', unit: 'U/L', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'ALT', value: '21', unit: 'U/L', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'WBC', value: '6.6', unit: 'x10³/mm³', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'Hgb', value: '13.1', unit: 'g/dL', flag: 'normal', labDate: '03/09/2027 07:50' },
    { label: 'Plt', value: '241', unit: 'x10³/mm³', flag: 'normal', labDate: '03/09/2027 07:50' }
  ],
  ALERTS: [],
  PROBLEMS: [
    { name: 'Persistent Nonvalvular Atrial Fibrillation', detail: 'CHA2DS2-VASc = 3. Clinically stable. Anticoagulated on Apixaban 5 mg BID with 100% adherence and no bleeding. Lifelong therapy indicated.', flag: 'normal' },
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 35%. Stable HF symptoms (mild fatigue, exertional dyspnea). On 3-pillar GDMT.', flag: 'normal' },
    { name: 'Hypertension', detail: 'Controlled on GDMT (BP 124/74, goal <130/80 mmHg). No medication changes needed today.', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg daily (LDL goal <70 mg/dL). No medication changes needed today.', flag: 'normal' },
    { name: 'Preventive Care Optimization', detail: 'Pneumococcal completed; Shingrix dose #2 administered today; Tdap booster administered today.', flag: 'normal' },
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
    { label: 'HPI', value: '64-year-old female presents for a routine 6-month follow-up at the ambulatory care cardiology clinic. Patient reports 100% medication adherence to Apixaban 5 mg BID twice daily using a daily pillbox, with no intentionally skipped doses. Patient states prior counseling and education helped her understand medication necessity, directly improving her adherence to 100%. Patient demonstrates clear understanding of Apixaban\'s specific role in reducing stroke risk by preventing blood clot formation in persistent AFib. Patient reports that prior bruising fears and knowledge barriers have completely resolved, and she now describes occasional minor bruising as resolved and no longer concerning. Can identify bleeding and stroke warning signs. Reports feeling increased confidence in managing her health and communicating with healthcare providers. Reports HF symptoms (mild fatigue, occasional exertional dyspnea) are unchanged and stable. Denies chest pain, resting dyspnea, orthopnea, paroxysmal nocturnal dyspnea (PND), syncope, lower extremity edema, emergency department visits, or hospitalizations since last visit. Patient explicitly asks about the expected long-term duration of anticoagulation and heart failure therapies.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular: Denies chest pain, syncope, orthopnea, PND, or major bleeding. Respiratory: Reports stable exertional dyspnea; denies chest pain or resting dyspnea. Musculoskeletal/Edema: Denies lower extremity edema. General: Denies ED visits or hospitalizations.' },
    { label: 'Past Medical History', value: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%), Persistent Nonvalvular Atrial Fibrillation (AFib), Hypertension (HTN), Hyperlipidemia (HLD), Obesity.' },
    { label: 'Social History', value: 'Lives alone, retired administrative assistant. Transportation barriers have been successfully resolved and improved via family support and public bus transit. Fixed income access maintained via assistance program enrollment. Former smoker (15 pack-years, quit 8 years ago). Drinks 1 glass of wine per week. Denies illicit drug use.' },
    { label: 'Family History', value: 'Father: ischemic stroke at age 70. Mother: heart failure. Sister: hypertension. Family history explicitly linked to patient\'s elevated stroke and heart failure risk.' },
    { label: 'OTC & Allergies', value: 'Tylenol PRN for occasional headaches; avoids aspirin and NSAIDs. NKDA.' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (prior gallbladder removal).' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend & Lab Interpretations', value: 'Physical Exam: Cardiac rhythm is irregularly irregular on exam. Vital signs: BP 128/78 mmHg (repeat 126/76 mmHg, goal <130/80 mmHg), HR 88 bpm (controlled on Metoprolol Succinate), Wt 84 kg (stable), BMI 30.8 kg/m². Laboratory Interpretations: CBC (WBC 6.6, Hgb 13.1 g/dL, Plt 241k) is explicitly noted as within normal limits. Both renal function (SCr 1.0 mg/dL, eGFR 72 mL/min/1.73m²) and hepatic function (AST 24 U/L, ALT 21 U/L) are explicitly linked together as within normal limits, supporting continued full-dose Apixaban 5 mg BID, Atorvastatin safety, and GDMT. Absence of BNP/NT-proBNP noted as a missing data gap for stability assessment. Routine INR monitoring noted as unnecessary given DOAC (Apixaban) use. CHA2DS2-VASc score calculated as 3 (Heart Failure +1, HTN +1, Female +1; Age 64 does not meet ≥65 criterion), confirming indication for long-term oral anticoagulation. Apixaban dose-reduction criteria (age ≥80, weight ≤60 kg, SCr ≥1.5 mg/dL) are NOT met.' }
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
    { id: 'w4-angela_b-thu_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'transport', 'drive', 'alone', 'bus', 'ride'], response: "I live alone, retired administrative assistant. Assistance program keeps my medication affordable. Family support and bus rides have resolved my transportation barriers." },
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
          defaultAnswer: 'Persistent Nonvalvular Atrial Fibrillation is clinically stable with elevated thromboembolic risk (CHA2DS2-VASc = 3; Heart Failure +1, HTN +1, Female +1; Age 64 does not meet ≥65 criterion). Patient demonstrates 100% adherence to Apixaban 5 mg PO BID via daily pillbox with complete resolution of prior bruising fears and knowledge deficit barriers (recognizing minor bruising as expected and non-concerning). Patient now fully understands the purpose and clinical rationale of anticoagulation therapy in preventing thromboembolic stroke. Both renal function (SCr 1.0 mg/dL, eGFR 72 mL/min/1.73m²) and hepatic function (AST 24 U/L, ALT 21 U/L) together with weight 84 kg confirm Apixaban dose-reduction criteria are not met, supporting continued full-dose Apixaban 5 mg PO BID. Per 2023 ACC/AHA AFib guidelines, DOAC therapy (Apixaban 5 mg BID) is preferred over VKAs (Warfarin) and is indicated for lifelong stroke prevention. Prior pharmacist interventions successfully resolved cost and fear barriers. A shared decision-making approach is appropriate for long-term anticoagulation and HF therapy management. Patient question regarding medication duration requires clear education on the chronic nature of AFib and lifelong anticoagulation rationale.'
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
          defaultAnswer: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 35%) is clinically stable on 3-pillar GDMT (Sacubitril/Valsartan 49/51 mg BID [ARNI], Metoprolol Succinate 50 mg daily [Beta-blocker], Empagliflozin 10 mg daily [SGLT2i]). Patient reports stable HF symptoms (mild fatigue, exertional dyspnea) and denies decompensation negatives (chest pain, resting dyspnea, orthopnea, PND, edema, ED visits, or hospitalizations). Within the HFrEF assessment, adherence maintenance, symptom monitoring, and self-management reinforcement are framed as the primary clinical foci. Improved adherence directly links to clinical HF stability. Absence of BNP/NT-proBNP is noted as missing expected data for objective stability assessment. Heart rate 88 bpm is controlled on Metoprolol Succinate rate control in HFrEF. Continued 3-pillar GDMT is indicated long term.'
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
          defaultAnswer: 'Cost and access barriers have been successfully resolved via Patient Assistance Program (PAP) enrollment, serving as the primary driver of adherence improvement. Transportation barriers have been explicitly resolved and improved via family support and public bus transit. Periodic reassessment of fixed income financial status is indicated due to ongoing chronic lifelong medication needs. Improvements in health literacy and communication confidence directly causally led to 100% medication adherence, enabling the patient to avoid independent medication changes. Pharmacist interventions successfully resolved prior medication therapy problems. Continued reinforcement of self-management education is indicated.'
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
          defaultAnswer: 'Hypertension is controlled (office BP 128/78 mmHg, goal <130/80 mmHg). Hyperlipidemia is stable on Atorvastatin 40 mg daily for CV risk reduction in HFrEF/AFib. No medication changes are needed for hypertension or hyperlipidemia at today\'s visit. Preventive care progress recognized: Pneumococcal vaccination completed since prior visit; Shingrix Dose #2 and Tdap booster were administered at today\'s visit. Influenza and COVID-19 vaccines are up to date with no further action needed.'
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
        { key: 'o2', label: 'Continue a shared decision-making approach to long-term anticoagulation and heart failure therapy management', correct: true },
        { key: 'o3', label: 'Reinforce 100% anticoagulation adherence using daily pillbox', correct: true },
        { key: 'o4', label: 'Review major bleeding warning signs (dark stools, hematuria, severe headache) and distinguish minor cutaneous bruising', correct: true },
        { key: 'o5', label: 'Address patient duration question: educate on chronic AFib nature and explain lifelong anticoagulation rationale', correct: true },
        { key: 'o6', label: 'Encourage patient to contact healthcare team before making any future medication changes', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p2', 
      title: 'HFrEF 3-Pillar GDMT Long-Term Strategy', 
      options: [
        { key: 'o7', label: 'Continue Sacubitril/Valsartan 49/51 mg PO BID (ARNI pillar per 2022 AHA/ACC/HFSA Heart Failure Guideline to reduce mortality and HF hospitalizations)', correct: true },
        { key: 'o8', label: 'Continue Metoprolol Succinate 50 mg PO daily (Beta-blocker pillar per 2022 AHA/ACC/HFSA Heart Failure Guideline to reduce mortality and HF hospitalizations)', correct: true },
        { key: 'o9', label: 'Continue Empagliflozin 10 mg PO daily (SGLT2i pillar per 2022 AHA/ACC/HFSA Heart Failure Guideline to reduce mortality and HF hospitalizations)', correct: true },
        { key: 'o10', label: 'Maintain current stable GDMT doses without uptitration today', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p3', 
      title: 'Hyperlipidemia & Comorbidity Management', 
      options: [
        { key: 'o11', label: 'Continue Atorvastatin 40 mg PO daily for CV risk reduction in HFrEF and AFib (LDL goal <70 mg/dL); confirm no medication changes needed for HTN or HLD today', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p4', 
      title: 'Patient Education & Self-Management Counseling', 
      options: [
        { key: 'o12', label: 'Educate patient on chronic nature of AFib and HFrEF, reinforcing lifelong need for both anticoagulation and 3-pillar GDMT', correct: true },
        { key: 'o13', label: 'Review heart failure self-management principles (monitoring fatigue, exertional dyspnea, edema)', correct: true },
        { key: 'o14', label: 'Praise patient for excellent adherence and encourage ongoing open communication before self-altering medications', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p5', 
      title: 'Longitudinal & DOAC Safety Monitoring Plan', 
      options: [
        { key: 'o15', label: 'Monitor HF symptoms (fatigue, dyspnea, edema), blood pressure (goal <130/80), heart rate, medication adherence, quality of life, renal function (SCr, eGFR linked to ARNI/SGLT2i safety), CBC (monitoring for DOAC safety), bleeding symptoms, stroke warning signs, periodic liver function (given Atorvastatin), and medication affordability', correct: true },
        { key: 'o16', label: 'Confirm routine INR monitoring is unnecessary given DOAC (Apixaban) use', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p6', 
      title: 'Preventive Care Administration Plan', 
      options: [
        { key: 'o17', label: 'Administer Shingrix Dose #2 today to complete the 2-dose series', correct: true },
        { key: 'o18', label: 'Administer Tdap booster vaccine today', correct: true },
        { key: 'o19', label: 'Confirm Influenza and COVID-19 vaccinations are up to date with no further action needed', correct: true },
        { key: 'o20', label: 'Confirm continuation of routine preventive health maintenance and screening', correct: true }
      ] 
    },
    { 
      id: 'w4b3_p7', 
      title: 'Follow-Up Plan', 
      options: [
        { key: 'o21', label: 'Schedule routine follow-up visit in 3 to 6 months for ongoing monitoring of adherence, HF symptom stability, patient understanding, bleeding symptoms, stroke warning signs, and medication access', correct: true }
      ] 
    }
  ]
})

/* ============================ ROBERT JENKINS (C) ============================ */
// Complex multi-morbidity (HFrEF + AFib + CKD + T2DM). Precise dosing and AZALEA trial application.

/* ============================ ROBERT JENKINS (C) ============================ */
// Complex multi-morbidity (HFrEF + AFib + CKD + T2DM + Secondary ASCVD Prevention).

const robertTue = makeCase({
  id: 'w4-robert_j4-tue',
  PATIENT: { name: 'Robert Jenkins', age: 76, dob: '07/19/1950', sex: 'male', ethnicity: 'White', mrn: 'W4-90088' },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Tuesday', type: 'Routine Follow-Up Ambulatory Care Cardiology Clinic Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I like to review my labs on the portal. My kidney numbers seem worse, and I'm wondering if my medications are causing it or if I need a lower blood thinner dose.",
    snapshotSummary: 'Robert Jenkins is a 76-year-old male with HFrEF (LVEF 32%), persistent nonvalvular AFib (CHA2DS2-VASc = 4), CKD Stage 3b (SCr 1.4 mg/dL, eGFR 44 mL/min/1.73m²), T2DM (HbA1c 6.9%), and secondary ASCVD (s/p NSTEMI and PCI with DES). Reviews lab results via patient portal and questions if SCr 1.4 mg/dL warrants Apixaban dose reduction or GDMT discontinuation.',
    diseaseStates: ['HFrEF', 'AFib', 'CKD', 'T2DM', 'ASCVD'],
    learningObjectives: ['Apply DOAC dose reduction criteria (Age ≥80, Wt ≤60kg, SCr ≥1.5)', 'Maintain 4-pillar GDMT despite mild renal decline', 'Manage borderline hyperkalemia'],
    visitDate: '09/09/2026',
  },
  VITALS: { bp: '120/70', bpRepeat: '118/68', hr: '68', rr: '16', temp: '98.6°F', spo2: '97%', weight: '58 kg', height: "5'7\"", bmi: '20.0', vitalsTime: '09/09/2026 09:14', flags: {} },
  LABS: [
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'K', value: '5.0', unit: 'mEq/L', flag: 'high', labDate: '09/09/2026 07:50' },
    { label: 'BUN', value: '34', unit: 'mg/dL', flag: 'high', labDate: '09/09/2026 07:50' },
    { label: 'SCr', value: '1.4', unit: 'mg/dL', flag: 'high', labDate: '09/09/2026 07:50' },
    { label: 'eGFR', value: '44', unit: 'mL/min/1.73m²', flag: 'low', labDate: '09/09/2026 07:50' },
    { label: 'WBC', value: '6.4', unit: 'x10³/mm³', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Hgb', value: '13.5', unit: 'g/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Plt', value: '228', unit: 'x10³/mm³', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'NT-proBNP', value: '165', unit: 'pg/mL', flag: 'high', labDate: '09/09/2026 07:50' },
    { label: 'HbA1c', value: '6.9', unit: '%', flag: 'normal', labDate: '09/09/2026 07:50' }
  ],
  ALERTS: [
    { level: 'warn', text: 'Apixaban dose-reduction criteria (Age ≥80, Wt ≤60kg, SCr ≥1.5 mg/dL): Age 76 [No]; Weight 58 kg [Yes — ≤60kg]; SCr 1.4 [No — <1.5]. Only ONE criterion met. Standard dose 5 mg BID is correct and most protective.' },
    { level: 'warn', text: 'Serum potassium 5.0 mEq/L represents borderline/mild hyperkalemia in CKD Stage 3b; continuation of Spironolactone and ARNI is appropriate with dietary review and 2-4 week lab recheck.' }
  ],
  PROBLEMS: [
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 32% (stable vs 30% baseline), NYHA Class II. Clinically stable on 4-pillar GDMT.', flag: 'normal' },
    { name: 'Chronic Kidney Disease Stage 3b (CKD 3b)', detail: 'SCr 1.4 mg/dL, eGFR 44 mL/min/1.73m² (baseline eGFR ~52 -> 38/44 over past year). Stable longitudinal trend.', flag: 'warn' },
    { name: 'Borderline / Mild Hyperkalemia', detail: 'Serum K 5.0 mEq/L. Asymptomatic. Maintain MRA and RAAS inhibition with monitoring.', flag: 'warn' },
    { name: 'Persistent Nonvalvular Atrial Fibrillation', detail: 'CHA2DS2-VASc = 4. Stable on Apixaban 5 mg BID (meets only 1 of 3 dose reduction criteria).', flag: 'normal' },
    { name: 'Coronary Artery Disease & Secondary ASCVD Prevention', detail: 's/p NSTEMI and PCI with DES. Stable on Rosuvastatin 40 mg daily.', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '97/103 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: 'ARNI pillar — target maintenance dose' },
    { name: 'Metoprolol Succinate', dose: '100 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/Rate control', notes: 'Beta-blocker pillar' },
    { name: 'Spironolactone', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: 'MRA pillar' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/T2DM', notes: 'SGLT2i pillar' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'DOAC — standard dose confirmed (meets only 1 of 3 dose-reduction criteria)' },
    { name: 'Rosuvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'Secondary ASCVD prevention', notes: 'High-intensity statin' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date (received)', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date (received)', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Up to date (received PCV20 and PPSV23)', flag: 'normal' },
    { name: 'Shingrix', status: 'Series completed (2 doses received)', flag: 'normal' },
    { name: 'Tdap', status: 'Last documented ~11 years ago (overdue, needs booster)', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '76-year-old male presents for a routine follow-up at the ambulatory care cardiology clinic. Patient is highly engaged in his healthcare and routinely reviews recent laboratory results via the patient portal. Noticed that serum creatinine is 1.4 mg/dL (eGFR 44 mL/min/1.73m²) and questions if progressive kidney function decline over the past year (eGFR ~52 to 38/44 mL/min/1.73m²) is caused by his medications or if his Apixaban dose should be reduced. Reports excellent medication adherence, taking all prescribed medications exactly as directed without missing doses. Reports performing regular home monitoring of blood pressure, heart rate, and weight every single day, with stable home readings. Patient reports HF symptoms (mild exertional fatigue) are unchanged and stable. Denies chest pain, syncope, significant palpitations, resting dyspnea, orthopnea, paroxysmal nocturnal dyspnea (PND), lower extremity edema, recent falls, emergency department visits, or hospitalizations since last visit.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular: Denies chest pain, syncope, significant palpitations, orthopnea, PND, or major bleeding. Respiratory: Reports stable exertional fatigue; denies resting dyspnea or hemoptysis. Musculoskeletal/Edema: Denies lower extremity edema or recent falls. General: Denies ED visits or hospitalizations.' },
    { label: 'Past Medical History', value: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 32%, NYHA Class II), Persistent Nonvalvular Atrial Fibrillation (AFib), Chronic Kidney Disease Stage 3b (CKD 3b, eGFR 44 mL/min/1.73m²), Type 2 Diabetes Mellitus (T2DM, HbA1c 6.9%), Hypertension (HTN), Hyperlipidemia (HLD).' },
    { label: 'Social History', value: 'Retired engineer. Lives with wife who assists with health management and medication tracking. Former smoker (25 pack-year smoking history, quit ~12 years ago). Rarely drinks alcohol (1-2 drinks per month at social gatherings). Denies illicit drug use. Diligent with daily home BP, HR, and weight monitoring.' },
    { label: 'Family History', value: 'Father: myocardial infarction (MI) at age 58. Mother: ischemic stroke at age 72. Brother: coronary artery disease (CAD). Family history explicitly linked to patient\'s cardiovascular and stroke risk.' },
    { label: 'OTC & Allergies', value: 'Daily multivitamin; explicitly avoids OTC NSAIDs and aspirin unless provider approved. No known drug allergies (NKDA).' },
    { label: 'Past Surgical History', value: 'Prior NSTEMI s/p Percutaneous Coronary Intervention (PCI) with Drug-Eluting Stent (DES).' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend Analysis & Physical Exam', value: 'Physical Exam: Cardiac rhythm is irregularly irregular on exam, clear lungs, no peripheral edema. Vital signs: BP 120/70 mmHg (repeat 118/68 mmHg, goal <130/80 mmHg), HR 68 bpm (controlled on Metoprolol Succinate), RR 16, Temp 98.6°F, SpO2 97%, Wt 58 kg (lean body habitus), Ht 5\'7" (67 inches), BMI 20.0 kg/m². Laboratory Interpretations: SCr 1.4 mg/dL, eGFR 44 mL/min/1.73m² (CKD Stage 3b; trend ~52 to 38/44 over past year, stable without AKI). Serum potassium 5.0 mEq/L (borderline/mild hyperkalemia, asymptomatic). Na 138 mEq/L, BUN 34 mg/dL, WBC 6.4 x10³/mm³, Hgb 13.5 g/dL, Plt 228 x10³/mm³, NT-proBNP 165 pg/mL (stable), HbA1c 6.9% (controlled). Echocardiogram: LVEF 32% (stable compared to 30% baseline). Immunizations: Tdap booster overdue (~11 years ago).' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'questions', label: 'Patient Questions & Evidence Inquiry', placeholder: 'Assess renal concerns and apixaban dosing question' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Apixaban Dosing & Cardiorenal GDMT Continuation', body: ["Your blood thinner, Apixaban, is dosed based on your age, weight, and kidney function. To reduce the dose from 5 mg to 2.5 mg twice daily, you must meet at least TWO of three criteria: age 80 or older, weight 60 kg or less, and serum creatinine 1.5 mg/dL or higher. Although your weight is 58 kg, your age is 76 and your creatinine is 1.4 mg/dL—so you only meet ONE criterion. Therefore, 5 mg twice daily remains the correct and most protective dose for your stroke prevention. Furthermore, your heart failure medications protect your heart and kidneys long term, so we will continue them with close lab monitoring."] }],
  GUIDING_QUESTIONS: [
    'Why is continuation of GDMT appropriate despite declining eGFR?',
    'What factors may contribute to CKD progression in this patient?',
    'Why is potassium monitoring important with Spironolactone and Sacubitril/Valsartan?',
    'What is the significance of the stable NT-proBNP trend?',
    'How should dialysis concerns and medication safety questions be addressed?',
    'What is the major teaching pearl regarding Apixaban dose reduction criteria?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-robert_j4-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-robert_j4-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin. I avoid other over-the-counter pain relievers unless my doctor approves them." },
    { id: 'w4-robert_j4-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe 1 to 2 drinks per month at social gatherings." },
    { id: 'w4-robert_j4-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 12 years ago, and I had a 25 pack-year history before that." },
    { id: 'w4-robert_j4-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a heart attack at age 58. My mother had a stroke at age 72. My brother has coronary artery disease." },
    { id: 'w4-robert_j4-tue_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife', 'engineer', 'retired'], response: "I am a retired engineer. I live with my wife, she helps me manage everything." },
    { id: 'w4-robert_j4-tue_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "Oh yes, I am very diligent. I check my blood pressure, heart rate, and weight at home every single day." },
    { id: 'w4c_q', topic: 'Evidence question', field: 'questions', keywords: ['labs', 'kidney', 'creatinine', 'dose', 'apixaban', 'dialysis'], response: "My creatinine is 1.4 and eGFR is 44. Does that affect my Apixaban dose or mean my heart failure pills are damaging my kidneys? I read online that people with kidney problems sometimes need a lower blood thinner dose or have to stop heart failure pills." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4c_a1', 
      title: 'HFrEF & 4-Pillar GDMT Stability', 
      icon: 'Heart', 
      color: '13314f', 
      questions: [
        { 
          key: 'q1', 
          q: 'What is the clinical status of HFrEF and current GDMT implementation?',
          defaultAnswer: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 32% stable vs 30% baseline, NYHA Class II) is clinically stable on 4-pillar GDMT (Sacubitril/Valsartan 97/103 mg BID [ARNI preferred per 2022 AHA/ACC HF guidelines], Metoprolol Succinate 100 mg daily [Beta-blocker], Spironolactone 25 mg daily [MRA], Empagliflozin 10 mg daily [SGLT2i]). Patient reports stable mild exertional fatigue and denies decompensation negatives (chest pain, syncope, resting dyspnea, orthopnea, PND, edema, ED visits, or hospitalizations). Patient concerns regarding kidney function do not indicate treatment failure; observed renal trend alone does not mandate discontinuation of foundational HF therapies, as GDMT provides proven mortality, hospitalization, and disease progression reduction benefits that outweigh renal risks. Continuation of all 4 GDMT pillars at current doses without reduction is strongly indicated.'
        }
      ] 
    },
    { 
      id: 'w4c_a2', 
      title: 'Chronic Kidney Disease Stage 3b & Cardiorenal Surveillance', 
      icon: 'Activity', 
      color: 'd97706', 
      questions: [
        { 
          key: 'q2', 
          q: 'What is the interpretation of the renal function trend and management strategy?',
          defaultAnswer: 'Chronic Kidney Disease Stage 3b (eGFR 44 mL/min/1.73m², SCr 1.4 mg/dL; trend from ~52 to 38/44 mL/min/1.73m² over past year). Patient is clinically stable with no evidence of acute kidney injury (AKI), recent illness, or volume depletion. Progressive CKD is common in patients with longstanding HF, diabetes, hypertension, and vascular disease. Current renal function remains well within ranges where GDMT may safely continue. Sacubitril/Valsartan, Spironolactone, and Empagliflozin may all continue with longitudinal monitoring. Explicitly instruct patient to avoid nephrotoxic medications (NSAIDs).'
        }
      ] 
    },
    { 
      id: 'w4c_a3', 
      title: 'Borderline Hyperkalemia Management', 
      icon: 'AlertCircle', 
      color: 'eab308', 
      questions: [
        { 
          key: 'q3', 
          q: 'How should serum potassium 5.0 mEq/L be managed?',
          defaultAnswer: 'Borderline / mild hyperkalemia (serum potassium 5.0 mEq/L). Patient is asymptomatic with no clinical or ECG abnormalities. Potassium of 5.0 mEq/L does NOT independently necessitate MRA (Spironolactone) or ARNI discontinuation. Reflexive discontinuation of Spironolactone would sacrifice morbidity and mortality benefits. Continued therapy with dietary potassium assessment and repeat laboratory surveillance in 2 to 4 weeks is indicated.'
        }
      ] 
    },
    { 
      id: 'w4c_a4', 
      title: 'Persistent Nonvalvular AFib & Apixaban Dosing Criteria', 
      icon: 'ShieldCheck', 
      color: '059669', 
      questions: [
        { 
          key: 'q4', 
          q: 'Does SCr 1.4 mg/dL warrant Apixaban dose reduction in this patient?',
          defaultAnswer: 'Persistent Nonvalvular Atrial Fibrillation with elevated thromboembolic risk (CHA2DS2-VASc = 4; Heart Failure +1, HTN +1, Age 75+ +2 = 4). Patient is appropriately anticoagulated on Apixaban 5 mg PO BID with 100% adherence and no bleeding or thromboembolic events. Apixaban dose-reduction criteria (must meet ≥2 of: Age ≥80, Wt ≤60 kg, SCr ≥1.5 mg/dL) are NOT met: Age is 76 [No], Weight is 58 kg [Yes — ≤60kg], SCr is 1.4 mg/dL [No — <1.5 mg/dL]. Meeting only ONE criterion (weight) mandates continuation of standard full-dose Apixaban 5 mg PO BID, which provides optimal stroke protection per 2026 AHA/ACC VTE guidelines (DOAC preferred over VKAs/Warfarin).'
        }
      ] 
    },
    { 
      id: 'w4c_a5', 
      title: 'Secondary ASCVD Prevention & Comorbidities', 
      icon: 'CheckCircle', 
      color: '6366f1', 
      questions: [
        { 
          key: 'q5', 
          q: 'What is the status of secondary ASCVD prevention and comorbidity control?',
          defaultAnswer: 'Coronary Artery Disease / Secondary ASCVD Prevention (s/p NSTEMI and PCI with DES). Patient reports no symptoms suggestive of recurrent ischemia. High-intensity statin therapy with Rosuvastatin 40 mg PO daily is appropriate for secondary ASCVD prevention. Diabetes (HbA1c 6.9%) and hypertension (BP 120/70 mmHg) are well controlled. No medication changes warranted for secondary prevention.'
        }
      ] 
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4c_p1', 
      title: 'HFrEF 4-Pillar GDMT Strategy', 
      options: [
        { key: 'o1', label: 'Continue Sacubitril/Valsartan 97/103 mg PO BID (ARNI preferred per 2022 AHA/ACC HF guidelines)', correct: true },
        { key: 'o2', label: 'Continue Metoprolol Succinate 100 mg PO daily (Beta-blocker pillar; carvedilol as acceptable alternative)', correct: true },
        { key: 'o3', label: 'Continue Spironolactone 25 mg PO daily (MRA pillar; eplerenone as acceptable alternative)', correct: true },
        { key: 'o4', label: 'Continue Empagliflozin 10 mg PO daily (SGLT2i pillar; dapagliflozin as acceptable alternative)', correct: true },
        { key: 'o5', label: 'Confirm no medication discontinuation recommended at this time, as GDMT benefits (mortality, hospitalization reduction) outweigh mild renal trend', correct: true }
      ] 
    },
    { 
      id: 'w4c_p2', 
      title: 'Longitudinal CKD & Cardiorenal Surveillance Plan', 
      options: [
        { key: 'o6', label: 'Continue close longitudinal CKD surveillance; repeat BMP (SCr, eGFR, K) in approximately 2 to 4 weeks', correct: true },
        { key: 'o7', label: 'Encourage patient to strictly avoid OTC NSAIDs and nephrotoxic medications', correct: true },
        { key: 'o8', label: 'Maintain blood pressure optimization (BP <130/80 mmHg) and diabetes control (HbA1c <7.0%) as kidney-protective measures', correct: true }
      ] 
    },
    { 
      id: 'w4c_p3', 
      title: 'Borderline Hyperkalemia Management Plan', 
      options: [
        { key: 'o9', label: 'Review dietary potassium intake with patient; no immediate pharmacologic intervention required for K 5.0 mEq/L', correct: true },
        { key: 'o10', label: 'Continue Spironolactone 25 mg PO daily without dose reduction pending repeat laboratory surveillance in 2 to 4 weeks', correct: true }
      ] 
    },
    { 
      id: 'w4c_p4', 
      title: 'Persistent Nonvalvular AFib Anticoagulation Plan', 
      options: [
        { key: 'o11', label: 'Continue Apixaban 5 mg PO BID (no dose change); confirm standard dose is correct as dose-reduction criteria (must meet ≥2) are not met (meets weight ≤60kg only; SCr 1.4 < 1.5, Age 76 < 80)', correct: true },
        { key: 'o12', label: 'Acknowledge DOAC (Apixaban) as guideline-preferred anticoagulant for NVAF per 2026 AHA/ACC VTE guidelines (acceptable DOAC alternatives: Rivaroxaban 20mg daily, Dabigatran 150mg BID, Edoxaban 60mg daily; Warfarin less preferred)', correct: true }
      ] 
    },
    { 
      id: 'w4c_p5', 
      title: 'Secondary ASCVD Prevention Strategy', 
      options: [
        { key: 'o13', label: 'Continue Rosuvastatin 40 mg PO daily (high-intensity statin) for secondary ASCVD risk reduction following NSTEMI/PCI', correct: true },
        { key: 'o14', label: 'Maintain aggressive cardiovascular risk-factor modification; monitor for symptoms of recurrent ischemia at follow-up', correct: true }
      ] 
    },
    { 
      id: 'w4c_p6', 
      title: 'Patient Education & Shared Decision-Making', 
      options: [
        { key: 'o15', label: 'Discuss cardiorenal benefits of GDMT and expected renal function trends in HF patients on GDMT', correct: true },
        { key: 'o16', label: 'Address patient concerns regarding dialysis and medication safety directly using evidence-based explanations', correct: true },
        { key: 'o17', label: 'Engage patient and spouse directly in shared decision-making, tailoring education to patient\'s stated preference for portal lab evidence', correct: true }
      ] 
    },
    { 
      id: 'w4c_p7', 
      title: 'Monitoring & Follow-Up Plan', 
      options: [
        { key: 'o18', label: 'Monitor renal function (SCr, eGFR), potassium, blood pressure, weight, HF symptoms, and medication adherence', correct: true },
        { key: 'o19', label: 'Schedule repeat laboratory assessment in 2 to 4 weeks and follow-up visit in approximately 1 month to reassess renal trend, potassium, and GDMT appropriateness', correct: true }
      ] 
    }
  ]
})

const robertWed = makeCase({
  id: 'w4-robert_j4-wed',
  PATIENT: { ...robertTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Wednesday', type: '3-Month Follow-Up Ambulatory Care Cardiology Clinic Visit', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I have an elective screening colonoscopy scheduled in 3 weeks. My gastroenterologist said I might need to stop my blood thinner, and I want to make sure we have a clear plan.",
    snapshotSummary: 'Robert presents for pre-procedural anticoagulation planning prior to an elective screening colonoscopy in 3 weeks. Asks about temporary DOAC interruption and whether heparin bridging is required.',
    diseaseStates: ['AFib', 'HFrEF', 'CKD', 'T2DM', 'ASCVD'],
    learningObjectives: ['Develop periprocedural DOAC interruption plan based on bleeding risk and eGFR', 'Recognize that heparin bridging is NOT recommended for DOACs in NVAF', 'Provide clear written procedural instructions'],
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
  ALERTS: [
    { level: 'warn', text: 'Pre-procedural planning for elective screening colonoscopy (~3 weeks out). Hold Apixaban 5 mg BID for 48 hours prior to procedure. Do NOT initiate LMWH (heparin) bridging.' }
  ],
  PROBLEMS: [
    { name: 'Persistent Nonvalvular AFib — Periprocedural Anticoagulation Planning', detail: 'CHA2DS2-VASc = 4. Elective colonoscopy (~3 weeks out). Hold Apixaban 48h pre-procedure; NO LMWH bridging.', flag: 'warn' },
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 30% (basis for classification). Clinically stable on 4-pillar GDMT.', flag: 'normal' },
    { name: 'Chronic Kidney Disease Stage 3b (CKD 3b)', detail: 'SCr 1.38 mg/dL, eGFR 45 mL/min/1.73m² (stable). Supports Apixaban 5 mg BID continuation.', flag: 'warn' },
    { name: 'Type 2 Diabetes Mellitus & Secondary ASCVD Prevention', detail: 'HbA1c 6.9%. Stable on Rosuvastatin 40 mg daily s/p NSTEMI/PCI.', flag: 'normal' },
    { name: 'Health Literacy & Shared Decision-Making', detail: 'Patient requests evidence-based clarification regarding bridging and procedural timing.', flag: 'normal' }
  ],
  MEDICATIONS: robertTue.MEDICATIONS,
  IMMUNIZATIONS: robertTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '3-Month Follow-Up at the ambulatory care cardiology clinic. Patient presents for pre-procedural anticoagulation management prior to an elective screening colonoscopy scheduled in approximately 3 weeks. Gastroenterologist recommended cardiology consultation to establish a coordinated periprocedural medication plan. Patient reports stable overall health since previous visit and reports 100% adherence to all prescribed medications. Diligent home monitoring: daily BP, HR, and weight tracking. Denies chest pain, syncope, significant palpitations, resting dyspnea, orthopnea, paroxysmal nocturnal dyspnea (PND), lower extremity edema, hemoptysis, hematuria, hematochezia, melena, or bleeding symptoms. Patient specifically requests clarification regarding whether injectable bridging anticoagulation (heparin/LMWH) is required prior to procedure, noting a friend\'s prior procedural experience.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular: Denies chest pain, syncope, significant palpitations, orthopnea, PND, or bleeding. Respiratory: Denies dyspnea or hemoptysis. Gastrointestinal: Denies hematochezia or melena. Genitourinary: Denies hematuria. Musculoskeletal/Edema: Denies edema. General: Denies ED visits or hospitalizations.' },
    { label: 'Past Medical History', value: 'HFrEF (LVEF 30%), Persistent Nonvalvular AFib, CKD Stage 3b (eGFR 45 mL/min/1.73m²), T2DM, HTN, HLD.' },
    { label: 'Social History', value: 'Retired engineer. Lives with wife who assists with management. Former smoker (25 pack-years, quit 12 years ago). Rarely drinks alcohol (1-2 drinks/month). Diligent home monitoring of BP, HR, and weight.' },
    { label: 'Family History', value: 'Father MI at 58, mother stroke at 72, brother CAD.' },
    { label: 'OTC & Allergies', value: 'Daily multivitamin. Avoids OTC NSAIDs/aspirin unless approved. NKDA.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend & Procedural Context', value: 'Physical Exam: Irregularly irregular rhythm, clear lungs, no peripheral edema. Vital signs: BP 120/70 mmHg (repeat 118/68 mmHg), HR 68 bpm, Wt 58 kg, BMI 20.0 kg/m². Laboratory Data: SCr 1.38 mg/dL, eGFR 45 mL/min/1.73m² (stable CKD Stage 3b), Na 138 mEq/L, K 4.8 mEq/L, BUN 32 mg/dL, WBC 6.5 x10³/mm³, Hgb 13.4 g/dL, Plt 226 x10³/mm³ (all within normal limits). eGFR 45 mL/min/1.73m² supports Apixaban 5 mg BID without dose reduction (per 2026 AHA/ACC PE/VTE guidelines: DOACs supported in Stage 2-3 CKD; eGFR >25-30 threshold met).' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'nosebleeds', label: 'Procedural Planning & Bridging Inquiry', placeholder: 'Assess colonoscopy timing and bridging questions' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Periprocedural Anticoagulation Plan & Bridging Rationale', body: ["For your upcoming colonoscopy, you will hold your Apixaban for exactly 48 hours prior to the procedure. Because you take Apixaban for nonvalvular atrial fibrillation, injectable heparin bridging is NOT recommended—studies show bridging significantly increases bleeding risk without reducing stroke risk. You will resume Apixaban after the procedure once hemostasis is confirmed. We will provide a clear written schedule."] }],
  GUIDING_QUESTIONS: [
    'Why is bridging generally unnecessary in this patient on a DOAC?',
    'What factors (bleeding risk, eGFR) influence interruption timing?',
    'What are the risks of unnecessary heparin bridging?',
    'Why does this patient benefit from written procedural instructions?',
    'How does CKD Stage 3b influence periprocedural anticoagulation management?',
    'What is the major teaching pearl regarding periprocedural DOAC management?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-robert_j4-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-robert_j4-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin. I avoid other over-the-counter pain relievers unless my doctor approves them." },
    { id: 'w4-robert_j4-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe 1 to 2 drinks per month at social gatherings." },
    { id: 'w4-robert_j4-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 12 years ago, and I had a 25 pack-year history before that." },
    { id: 'w4-robert_j4-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a heart attack at age 58. My mother had a stroke at age 72. My brother has coronary artery disease." },
    { id: 'w4-robert_j4-wed_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife', 'engineer', 'retired'], response: "I am a retired engineer. I live with my wife, she helps me manage everything." },
    { id: 'w4-robert_j4-wed_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "Oh yes, I am very diligent. I check my blood pressure, heart rate, and weight at home every single day." },
    { id: 'w4c2_bleed', topic: 'Colonoscopy Planning', field: 'nosebleeds', keywords: ['colonoscopy', 'polyp', 'procedure', 'stop', 'hold', 'bridge', 'heparin', 'injectable'], response: "I have an elective colonoscopy in 3 weeks. My gastroenterologist said I might need to hold my blood thinner. Do I need injectable heparin shots before the procedure like my friend had to do?" },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4c2_a1', 
      title: 'Persistent Nonvalvular AFib — Periprocedural Anticoagulation Plan', 
      icon: 'ShieldAlert', 
      color: 'dc2626', 
      questions: [
        { 
          key: 'q1', 
          q: 'What is the periprocedural DOAC interruption plan and bridging recommendation?',
          defaultAnswer: 'Persistent Nonvalvular Atrial Fibrillation with elevated stroke risk (CHA2DS2-VASc = 4; Age 76, HF, HTN, DM, Vascular disease). Elective screening colonoscopy (~3 weeks out) with potential polypectomy carries low-to-moderate procedural bleeding risk. Per 2023 ACC/AHA guidelines and renal function (eGFR 45 mL/min/1.73m²), hold Apixaban 5 mg PO BID for 48 hours prior to procedure (last dose 2 days pre-procedure). Do NOT initiate LMWH (heparin) bridging, as evidence demonstrates bridging DOAC therapy in NVAF significantly increases bleeding risk without reducing thromboembolic risk. Resume Apixaban 5 mg BID post-procedure once hemostasis is confirmed by the gastroenterology team.'
        }
      ] 
    },
    { 
      id: 'w4c2_a2', 
      title: 'HFrEF & 4-Pillar GDMT Stability', 
      icon: 'Heart', 
      color: '13314f', 
      questions: [
        { 
          key: 'q2', 
          q: 'What is the status of HFrEF and GDMT maintenance?',
          defaultAnswer: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 30% basis for classification) is clinically stable on 4-pillar GDMT (Sacubitril/Valsartan 97/103 mg BID, Metoprolol Succinate 100 mg daily, Spironolactone 25 mg daily, Empagliflozin 10 mg daily [SGLT2i provides dual cardiorenal benefit; dapagliflozin as acceptable alternative per 2022 AHA/ACC HF guidelines]). Patient reports stable symptoms and excellent adherence. No GDMT adjustments indicated. Cardiac stability supports proceeding with procedural planning without cardiac escalation.'
        }
      ] 
    },
    { 
      id: 'w4c2_a3', 
      title: 'CKD Stage 3b & Cardiorenal Safety', 
      icon: 'Activity', 
      color: 'd97706', 
      questions: [
        { 
          key: 'q3', 
          q: 'How does renal function influence procedural planning and therapy continuation?',
          defaultAnswer: 'Chronic Kidney Disease Stage 3b (SCr 1.38 mg/dL, eGFR 45 mL/min/1.73m²) is stable. eGFR 45 supports Apixaban 5 mg BID continuation without dose reduction (per 2026 AHA/ACC PE/VTE guidelines: DOACs supported in Stage 2-3 CKD). Renal function informs the 48-hour pre-procedure DOAC hold timing. Continue routine monitoring of SCr, eGFR, and K; avoid NSAIDs.'
        }
      ] 
    },
    { 
      id: 'w4c2_a4', 
      title: 'Health Literacy & Patient Education Plan', 
      icon: 'BookOpen', 
      color: '0891b2', 
      questions: [
        { 
          key: 'q4', 
          q: 'How are patient inquiries and bridging misconceptions addressed?',
          defaultAnswer: 'Patient demonstrates high health literacy and actively participates in shared decision-making. Addressed patient question regarding heparin bridging, providing evidence-based explanation for why bridging is omitted in DOAC therapy. Clear written instructions detailing pre-procedure hold timing, procedure day management, and post-procedure resumption will ensure high procedural safety and patient confidence.'
        }
      ] 
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4c2_p1', 
      title: 'Periprocedural Anticoagulation Plan', 
      options: [
        { key: 'o1', label: 'Continue Apixaban 5 mg PO BID until scheduled interruption period; coordinate plan with gastroenterology team', correct: true },
        { key: 'o2', label: 'Hold Apixaban 5 mg BID for exactly 48 hours prior to colonoscopy (last pre-procedure dose 2 days before procedure based on low-to-moderate bleeding risk and eGFR 45 mL/min/1.73m²)', correct: true },
        { key: 'o3', label: 'Do NOT initiate LMWH (heparin) bridging anticoagulation (bridging is not recommended in NVAF on DOACs due to increased bleeding risk without thromboembolic benefit)', correct: true },
        { key: 'o4', label: 'Resume Apixaban 5 mg PO BID post-procedure once hemostasis is confirmed by gastroenterology team and procedural bleeding risk is acceptable', correct: true }
      ] 
    },
    { 
      id: 'w4c2_p2', 
      title: 'HFrEF GDMT Maintenance Strategy', 
      options: [
        { key: 'o5', label: 'Continue Sacubitril/Valsartan 97/103 mg PO BID, Metoprolol Succinate 100 mg PO daily, Spironolactone 25 mg PO daily, and Empagliflozin 10 mg PO daily (SGLT2i dual cardiorenal benefit; dapagliflozin as acceptable alternative per 2022 AHA/ACC HF guidelines)', correct: true },
        { key: 'o6', label: 'Maintain current stable GDMT without adjustments; confirm cardiac stability allows procedural planning without cardiac escalation', correct: true }
      ] 
    },
    { 
      id: 'w4c2_p3', 
      title: 'CKD & Cardiorenal Monitoring Plan', 
      options: [
        { key: 'o7', label: 'Continue routine monitoring of serum creatinine, eGFR, and potassium; avoid OTC NSAIDs and nephrotoxic agents', correct: true },
        { key: 'o8', label: 'Confirm eGFR 45 mL/min/1.73m² supports Apixaban 5 mg BID continuation without dose adjustment per 2026 AHA/ACC PE/VTE guidelines', correct: true }
      ] 
    },
    { 
      id: 'w4c2_p4', 
      title: 'Written Patient Education & Instructions Plan', 
      options: [
        { key: 'o9', label: 'Provide detailed written procedural schedule detailing last pre-procedure dose, procedure day management, and post-procedure resumption timing', correct: true },
        { key: 'o10', label: 'Counsel patient on stroke prevention in AFib, temporary interruption vs discontinuation, procedural bleeding risk, and why bridging is omitted', correct: true },
        { key: 'o11', label: 'Educate patient on warning signs of stroke and bleeding requiring urgent medical evaluation', correct: true }
      ] 
    },
    { 
      id: 'w4c2_p5', 
      title: 'Post-Procedural Follow-Up Plan', 
      options: [
        { key: 'o12', label: 'Schedule follow-up visit shortly after colonoscopy (~10 days post-procedure) to review procedural outcomes, resumption status, bleeding/thromboembolic complications, and ongoing medication management', correct: true }
      ] 
    }
  ]
})

const robertThu = makeCase({
  id: 'w4-robert_j4-thu',
  PATIENT: { ...robertTue.PATIENT },
  ENCOUNTER: { week: 'Week 4', 
    day: 'Thursday', type: 'Routine 6-Month Follow-Up Ambulatory Care Cardiology Clinic Visit', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I had my colonoscopy 10 days ago and two polyps were removed without bleeding. Since the polyps are gone, do I really still need to take Apixaban?",
    snapshotSummary: 'Robert presents for post-procedural follow-up 10 days after elective screening colonoscopy s/p successful removal of two small tubular adenomas. Apixaban was held 48h pre-procedure and resumed post-hemostasis without complications. Asks if Apixaban can be discontinued now that polyps are removed.',
    diseaseStates: ['AFib', 'HFrEF', 'CKD', 'T2DM', 'ASCVD'],
    learningObjectives: ['Reevaluate stroke risk vs procedural bleeding risk post-colonoscopy', 'Reinforce lifelong anticoagulation indication in persistent NVAF', 'Maintain longitudinal 4-pillar GDMT and CKD surveillance'],
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
    { name: 'Persistent Nonvalvular AFib — Long-Term Anticoagulation Reassessment', detail: 'CHA2DS2-VASc = 4. Post-colonoscopy follow-up. Successful polyp removal does NOT alter stroke risk. Continue Apixaban 5 mg BID lifelong.', flag: 'normal' },
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 30% (stable), NYHA Class II. Clinically stable on 4-pillar GDMT.', flag: 'normal' },
    { name: 'Chronic Kidney Disease Stage 3b (CKD 3b)', detail: 'SCr 1.35 mg/dL, eGFR 46 mL/min/1.73m² (stable). Supports continued Apixaban and GDMT.', flag: 'warn' },
    { name: 'Secondary ASCVD Prevention & T2DM', detail: 'Stable on Rosuvastatin 40 mg daily s/p NSTEMI/PCI. HbA1c 6.9%.', flag: 'normal' },
    { name: 'Health Literacy & Patient Engagement', detail: 'Patient and spouse ask thoughtful questions regarding long-term management.', flag: 'normal' }
  ],
  MEDICATIONS: robertTue.MEDICATIONS,
  IMMUNIZATIONS: robertTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '76-year-old male presents for routine 6-month follow-up and post-procedural review approximately 10 days following an elective screening colonoscopy. Gastroenterology report confirms two small tubular adenomas were successfully removed without procedural or post-procedural complications. Patient reports following all periprocedural anticoagulation instructions exactly as directed: held Apixaban 5 mg BID for 48 hours prior to procedure and resumed following confirmation of hemostasis by the procedural team. Reports no bleeding or thromboembolic complications associated with interruption or resumption. Denies hematochezia, melena, hematuria, epistaxis, excessive bruising, or neurologic symptoms. Reports HF symptoms (mild exertional fatigue) are unchanged and stable. Denies chest pain, syncope, significant palpitations, resting dyspnea, orthopnea, paroxysmal nocturnal dyspnea (PND), lower extremity edema, ED visits, or hospitalizations. Patient and spouse ask if Apixaban can be discontinued now that the polyps have been removed.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular: Denies chest pain, syncope, significant palpitations, orthopnea, PND, or major bleeding. Respiratory: Denies dyspnea. Gastrointestinal: Denies hematochezia or melena. Genitourinary: Denies hematuria. Musculoskeletal/Edema: Denies edema. Neurologic: Denies focal weakness, numbness, or stroke symptoms. General: Denies ED visits or hospitalizations.' },
    { label: 'Past Medical History', value: 'HFrEF (LVEF 30%), Persistent Nonvalvular AFib, CKD Stage 3b (eGFR 46 mL/min/1.73m²), T2DM, HTN, HLD.' },
    { label: 'Social History', value: 'Retired engineer. Lives with wife who assists with health management. Former smoker (25 pack-years, quit 12 years ago). Rarely drinks alcohol (1-2 drinks/month). Diligent home monitoring of BP, HR, and weight.' },
    { label: 'Family History', value: 'Father MI at 58, mother stroke at 72, brother CAD. Family history explicitly linked to ongoing stroke and cardiovascular risk.' },
    { label: 'OTC & Allergies', value: 'Daily multivitamin. Avoids OTC NSAIDs/aspirin unless approved. NKDA.' },
    { label: 'Past Surgical History', value: 'Prior NSTEMI s/p PCI with DES. Elective screening colonoscopy ~10 days ago (2 small tubular adenomas removed).' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Gastroenterology Report & Objective Data', value: 'Gastroenterology Report (10 days ago): Elective screening colonoscopy performed with successful endoscopic mucosal resection of two small tubular adenomas. No procedural complications, no immediate bleeding, no post-procedural bleeding. Routine endoscopic surveillance recommended by gastroenterology. Physical Exam: Irregularly irregular cardiac rhythm, clear lungs, no peripheral edema. Vital signs: BP 120/70 mmHg (repeat 118/68 mmHg, goal <130/80 mmHg), HR 68 bpm, Wt 58 kg, BMI 20.0 kg/m². Laboratory Interpretations: SCr 1.35 mg/dL, eGFR 46 mL/min/1.73m² (CKD Stage 3b, stable baseline). Na 139 mEq/L, K 4.8 mEq/L, BUN 31 mg/dL, WBC 6.3 x10³/mm³, Hgb 13.3 g/dL (well above clinical bleeding threshold), Plt 229 x10³/mm³ (all within normal limits). Coagulation monitoring labs (INR/anti-Xa) not ordered — appropriate for DOAC (Apixaban) use.' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'colonoscopy', label: 'Post-Procedural Review & Anticoagulation Duration Query', placeholder: 'Assess post-colonoscopy recovery and duration questions' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Long-Term Anticoagulation Rationale Post-Colonoscopy', body: ["It is wonderful news that your colonoscopy went smoothly and the polyps were removed. However, removing the polyps eliminates a local spot that could bleed, but does NOT remove the underlying stroke risk from your atrial fibrillation. Because of your age, heart failure, high blood pressure, and diabetes, your stroke risk remains elevated (CHA2DS2-VASc = 4). Therefore, continuing Apixaban 5 mg twice daily is strongly indicated for lifelong stroke prevention."] }],
  GUIDING_QUESTIONS: [
    'Why does successful colonoscopy not eliminate the indication for long-term anticoagulation?',
    'How do stroke risk factors (age 76, HF, HTN, DM, vascular disease) contribute to CHA2DS2-VASc = 4?',
    'Why is Apixaban preferred over VKAs (Warfarin) per 2026 AHA/ACC VTE guidelines?',
    'Why is LVEF 30% baseline stable and supportive of GDMT continuation?',
    'What long-term monitoring parameters should be evaluated at follow-up?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4-robert_j4-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w4-robert_j4-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin. I avoid other over-the-counter pain relievers unless my doctor approves them." },
    { id: 'w4-robert_j4-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe 1 to 2 drinks per month at social gatherings." },
    { id: 'w4-robert_j4-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 12 years ago, and I had a 25 pack-year history before that." },
    { id: 'w4-robert_j4-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a heart attack at age 58. My mother had a stroke at age 72. My brother has coronary artery disease. This family history reinforces my own stroke and heart disease risks." },
    { id: 'w4-robert_j4-thu_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife', 'engineer', 'retired'], response: "I am a retired engineer. I live with my wife, she helps me manage everything." },
    { id: 'w4-robert_j4-thu_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "Oh yes, I am very diligent. I check my blood pressure, heart rate, and weight at home every single day." },
    { id: 'w4c3_col', topic: 'Colonoscopy Results', field: 'colonoscopy', keywords: ['colonoscopy', 'polyp', 'adenoma', 'bleeding', 'blood thinner', 'need', 'discontinue', 'stop'], response: "The colonoscopy went great and two small polyps were removed with no bleeding at all. My wife and I were wondering: now that those polyps are gone, do I really still need to take Apixaban? Doesn't removing them mean my bleeding risk is lower and I can stop the blood thinner?" },
    { id: 'w4c3_peri', topic: 'Peri-procedure Anticoagulation', field: 'perioperative', keywords: ['stop', 'hold', 'before', 'resume', 'restart', 'after', 'procedure'], response: "I followed your instructions exactly: I held my Apixaban for 48 hours before the colonoscopy, and restarted it the day after once the GI doctor confirmed there was no bleeding. I had no problems at all." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4c3_a1', 
      title: 'Persistent Nonvalvular AFib — Long-Term Anticoagulation Reassessment', 
      icon: 'ShieldCheck', 
      color: '059669', 
      questions: [
        { 
          key: 'q1', 
          q: 'Does successful colonoscopy and polyp removal alter the indication for long-term anticoagulation?',
          defaultAnswer: 'Persistent Nonvalvular Atrial Fibrillation with high stroke risk (CHA2DS2-VASc = 4; Age 76 [+2], Heart Failure [+1], HTN [+1], DM [+1], Vascular disease [+1]). Periprocedural interruption (held 48h pre-procedure) and resumption following confirmation of hemostasis were executed successfully without bleeding or thromboembolic complications. Successful polyp removal eliminates a local mucosal bleeding lesion, but does NOT alter the underlying stroke risk driven by advanced age, heart failure, hypertension, diabetes, and vascular disease. Reiterate to patient and spouse that long-term oral anticoagulation with Apixaban 5 mg PO BID remains strongly indicated for lifelong stroke prevention per 2026 AHA/ACC VTE guidelines (DOACs preferred over VKAs/Warfarin; VKAs recommended over DOACs only if thrombotic Antiphospholipid Syndrome [APS] is present). Patient\'s active participation and understanding represent a significant clinical strength.'
        }
      ] 
    },
    { 
      id: 'w4c3_a2', 
      title: 'HFrEF & 4-Pillar GDMT Stability', 
      icon: 'Heart', 
      color: '13314f', 
      questions: [
        { 
          key: 'q2', 
          q: 'What is the status of HFrEF and GDMT maintenance?',
          defaultAnswer: 'Heart Failure with Reduced Ejection Fraction (HFrEF, LVEF 30% baseline) is clinically stable on 4-pillar GDMT (Sacubitril/Valsartan 97/103 mg PO BID [ARNI], Metoprolol Succinate 100 mg PO daily [Beta-blocker], Spironolactone 25 mg PO daily [MRA], Empagliflozin 10 mg PO daily [SGLT2i]). Patient reports stable symptoms, no recent HF decompensation, no hospitalizations, and no signs of volume overload. Patient demonstrates excellent adherence to HF medications. GDMT is complete, well tolerated, and provides ongoing clinical benefit. No medication adjustments warranted at this time.'
        }
      ] 
    },
    { 
      id: 'w4c3_a3', 
      title: 'CKD Stage 3b & Cardiorenal Surveillance', 
      icon: 'Activity', 
      color: 'd97706', 
      questions: [
        { 
          key: 'q3', 
          q: 'What is the renal function status and longitudinal surveillance plan?',
          defaultAnswer: 'Chronic Kidney Disease Stage 3b (eGFR 46 mL/min/1.73m², SCr 1.35 mg/dL) is stable compared with recent measurements. Current labs do not suggest acute worsening and fully support continuation of current HF and anticoagulation therapies. Patient is engaged in and understands the importance of renal surveillance. Continue longitudinal CKD monitoring (SCr, eGFR, K) given concurrent RAAS inhibition and Spironolactone use; avoid nephrotoxic medications (NSAIDs).'
        }
      ] 
    },
    { 
      id: 'w4c3_a4', 
      title: 'Secondary ASCVD Prevention & Comorbidities', 
      icon: 'CheckCircle', 
      color: '6366f1', 
      questions: [
        { 
          key: 'q4', 
          q: 'What is the status of secondary ASCVD prevention and comorbidity management?',
          defaultAnswer: 'Secondary ASCVD prevention following prior NSTEMI and PCI with DES. Patient reports no symptoms suggestive of recurrent ischemia. High-intensity statin therapy with Rosuvastatin 40 mg PO daily is appropriate for secondary ASCVD prevention. Diabetes and blood pressure management are well maintained as part of secondary prevention. Current secondary prevention measures are appropriate; no medication changes warranted.'
        }
      ] 
    },
    { 
      id: 'w4c3_a5', 
      title: 'Health Literacy & Collaborative Care Model', 
      icon: 'BookOpen', 
      color: '0891b2', 
      questions: [
        { 
          key: 'q5', 
          q: 'How should patient engagement and health literacy be leveraged for long-term care?',
          defaultAnswer: 'Patient demonstrates excellent health literacy and disease state understanding, actively engaging in shared decision-making. Patient appropriately followed a complex periprocedural anticoagulation plan and asks thoughtful questions regarding long-term management. Patient engagement should be reinforced through a continued collaborative care model.'
        }
      ] 
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4c3_p1', 
      title: 'Persistent Nonvalvular AFib Long-Term Anticoagulation Plan', 
      options: [
        { key: 'o1', label: 'Continue Apixaban 5 mg PO BID for long-term/lifelong stroke prevention per 2026 AHA/ACC VTE guidelines (acceptable DOAC alternatives for NVAF without APS: Rivaroxaban 20mg daily, Dabigatran 150mg BID, Edoxaban 60mg daily; VKAs recommended over DOACs only if thrombotic APS is present)', correct: true },
        { key: 'o2', label: 'Reinforce that long-term anticoagulation remains strongly indicated despite successful colonoscopy and polyp removal, as polyp removal does not alter underlying stroke risk', correct: true },
        { key: 'o3', label: 'Discuss stroke prevention rationale, review bleeding signs and symptoms requiring evaluation, and continue shared decision-making regarding future procedural planning', correct: true },
        { key: 'o4', label: 'Address patient and spouse questions directly, educating on long-term anticoagulation expectations and stroke prevention benefits', correct: true }
      ] 
    },
    { 
      id: 'w4c3_p2', 
      title: 'HFrEF 4-Pillar GDMT Maintenance Strategy', 
      options: [
        { key: 'o5', label: 'Continue Sacubitril/Valsartan 97/103 mg PO BID, Metoprolol Succinate 100 mg PO daily, Spironolactone 25 mg PO daily, and Empagliflozin 10 mg PO daily', correct: true },
        { key: 'o6', label: 'Maintain current stable GDMT without adjustments; confirm GDMT is complete, well tolerated, and providing ongoing clinical benefit', correct: true },
        { key: 'o7', label: 'Continue routine HF symptom monitoring and medication adherence tracking at follow-up', correct: true }
      ] 
    },
    { 
      id: 'w4c3_p3', 
      title: 'CKD Surveillance & Renal Safety Plan', 
      options: [
        { key: 'o8', label: 'Continue periodic monitoring of serum creatinine, eGFR, and potassium in the context of RAAS inhibitor and Spironolactone use', correct: true },
        { key: 'o9', label: 'Continue longitudinal CKD surveillance, blood pressure optimization, and strict avoidance of nephrotoxic medications (NSAIDs)', correct: true }
      ] 
    },
    { 
      id: 'w4c3_p4', 
      title: 'Secondary ASCVD Prevention Strategy', 
      options: [
        { key: 'o10', label: 'Continue Rosuvastatin 40 mg PO daily (high-intensity statin) for secondary ASCVD prevention following NSTEMI/PCI', correct: true },
        { key: 'o11', label: 'Maintain diabetes and blood pressure control; monitor for symptoms of recurrent ischemia at follow-up (no secondary prevention changes warranted)', correct: true }
      ] 
    },
    { 
      id: 'w4c3_p5', 
      title: 'Patient Education & Counseling Plan', 
      options: [
        { key: 'o12', label: 'Discuss long-term anticoagulation expectations, stroke prevention benefits, future procedural planning, bleeding monitoring, and ongoing kidney monitoring', correct: true },
        { key: 'o13', label: 'Address patient and spouse questions directly using collaborative, evidence-based shared decision-making', correct: true }
      ] 
    },
    { 
      id: 'w4c3_p6', 
      title: 'Longitudinal Monitoring & Follow-Up Plan', 
      options: [
        { key: 'o14', label: 'Monitor bleeding symptoms, stroke symptoms, HF symptoms, renal function (creatinine and eGFR), potassium, and medication adherence', correct: true },
        { key: 'o15', label: 'Schedule routine follow-up visit in approximately 3 to 6 months for ongoing longitudinal management of HFrEF, AFib, CKD, and secondary ASCVD prevention', correct: true }
      ] 
    }
  ]
})

export const W4_CASES = [michaelTue, michaelWed, michaelThu, angelaTue, angelaWed, angelaThu, robertTue, robertWed, robertThu]
export const W4_RUBRICS = {}
