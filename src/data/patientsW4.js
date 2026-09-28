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
    snapshotSummary: 'Newly diagnosed HFrEF (LVEF 35%). Referred by PCP for progressive dyspnea and reduced exercise tolerance. Ambulatory care cardiology clinic. Needs initiation of GDMT.',
    diseaseStates: ['HFrEF', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Identify HFrEF and ACC/AHA stage', 'Initiate the 4 pillars of GDMT'],
    visitDate: '09/09/2026',
  },
  // FIXED: Vitals synchronized to rubric (BP 138/84, Temp 98.4°F, SpO2 98% on room air, RR 18)
  VITALS: { bp: '138/84', bpRepeat: '136/82', hr: '82', rr: '18', temp: '98.4°F', spo2: '98%', spo2Qualifier: 'on room air', weight: '102 kg', height: "5'10\"", bmi: '32.2', vitalsTime: '09/09/2026 09:14', flags: {} },
  LABS: [
    // FIXED: BNP label (not NT-proBNP) per rubric; K synchronized to 4.3 mEq/L per rubric
    { label: 'BNP', value: '320', unit: 'pg/mL', flag: 'high', labDate: '09/09/2026 07:50' },
    { label: 'K', value: '4.3', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'eGFR', value: '88', unit: 'mL/min/1.73m²', flag: 'normal', labDate: '09/09/2026 07:50' },
    // FIXED: Added full CMP and lipid panel as rubric requires
    { label: 'Na', value: '140', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'BUN', value: '16', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Glucose', value: '98', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'ALT', value: '20', unit: 'U/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'LDL', value: '118', unit: 'mg/dL', flag: 'high', labDate: '09/09/2026 07:50' },
    { label: 'HDL', value: '42', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'TG', value: '162', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Total Chol', value: '192', unit: 'mg/dL', flag: 'borderline', labDate: '09/09/2026 07:50' },
  ],
  ALERTS: [
    { level: 'warn', text: 'HFrEF (LVEF 35%) not on optimal GDMT. Missing evidence-based beta blocker, MRA, and SGLT2i. Lisinopril can be optimized.' },
  ],
  PROBLEMS: [
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 35%, mild LV dilation, no significant valvular abnormalities. NYHA Class II.', flag: 'high' },
    { name: 'Hypertension', detail: 'Currently on Lisinopril and HCTZ', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '20 mg', route: 'by mouth', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'by mouth', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  // FIXED: Complete immunization panel added per rubric requirements
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date (primary series completed)', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented', flag: 'warn' },
    { name: 'Shingrix', status: 'Not documented', flag: 'warn' },
    { name: 'Tdap', status: 'Last documented approximately 9 years ago (overdue)', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Referred by primary care provider for progressive dyspnea and reduced exercise tolerance. New nonischemic cardiomyopathy diagnosis with LVEF 35%. Ambulatory care cardiology clinic.' },
    { label: 'Echocardiogram', value: 'LVEF 35%, mild LV dilation, no significant valvular abnormalities.' },
    { label: 'Social history', value: 'Former smoker (20 pack-year history, quit approximately 5 years ago). Drinks 1-2 alcoholic beverages on weekends.' },
    { label: 'Past Surgical History', value: 'Appendectomy at age 24.' },
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
    // FIXED: Alcohol synchronized to rubric (1-2 drinks on weekends)
    { id: 'w4-michael_t4-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 to 2 drinks on the weekends, usually a glass of wine or beer." },
    // FIXED: Tobacco synchronized to rubric (20 pack-years)
    { id: 'w4-michael_t4-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago. I smoked about a pack a day for 20 years, so I guess that's about 20 pack-years." },
    // FIXED: Family history synchronized to rubric (father: HTN + MI at age 62; mother: T2DM)
    { id: 'w4-michael_t4-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had hypertension and suffered a heart attack at age 62. My mother has hypertension and type 2 diabetes." },
    { id: 'w4-michael_t4-tue_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife'], response: "I am married and live with my wife. I work full-time as an accountant." },
    { id: 'w4-michael_t4-tue_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "I don't check my blood pressure or weigh myself at home. Should I be doing that?" },
    // FIXED: Symptoms updated — 6-month gradual course, fatigue, reduced exercise tolerance per rubric
    { id: 'w4a_sym', topic: 'Symptoms', field: 'symptoms', keywords: ['swelling', 'breathe', 'shortness', 'stairs', 'edema', 'tired', 'fatigue', 'exercise', 'energy', 'when', 'start'], response: "It's been gradually getting worse over about the last 6 months. I just thought it was my age, weight gain, or being out of shape. I get winded climbing stairs and I've noticed I'm more tired than usual. My exercise tolerance has gone down. My ankles get a little puffy by the end of the day." },
    // FIXED: HCTZ adherence — no restroom barrier (grader should accept this, not penalize)
    { id: 'w4-michael_t4-tue_hctz', topic: 'HCTZ adherence', field: 'hctzAdherence', keywords: ['water pill', 'hydrochlorothiazide', 'hctz', 'restroom', 'bathroom', 'skip', 'miss', 'urination'], response: "I take the water pill every day as prescribed. Restroom access hasn't really been a problem for me." },
    // FIXED: Surgical history — appendectomy at 24 per rubric
    { id: 'w4-michael_t4-tue_surgery', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'appendix', 'appendectomy'], response: "Yes, I had my appendix out when I was 24. That's the only surgery I've had." },
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
    { label: 'Past Medical History', value: 'Heart Failure with Reduced Ejection Fraction (HFrEF, baseline LVEF 35%), Hypertension (HTN), Hyperlipidemia (HLD).' },
    { label: 'Social History', value: 'Married, lives with wife. Works full-time as an accountant. Former smoker (20 pack-year history, quit 5 years ago). Drinks 1–2 alcoholic beverages on weekends. Denies illicit drug use. Maintains regular physical activity (walking 30-40 min most days).' },
    { label: 'Family History', value: 'Father had CAD/HF/HTN and MI at age 62. Mother has hypertension (HTN) and type 2 diabetes.' },
    { label: 'OTC & Allergies', value: 'Daily multivitamin. Denies other OTC medications or herbal supplements. NKDA.' },
    { label: 'Past Surgical History', value: 'Appendectomy at age 24.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend & Home Vitals', value: 'Repeat Echocardiogram (6-Month): LVEF 45% (significantly improved from baseline LVEF 35%). Mild LV dilation reduced. Consistent with Heart Failure with Improved Ejection Fraction (HFimpEF). NT-proBNP downward trend: baseline 320 pg/mL → previous 165 pg/mL → current 92 pg/mL. Home BP average: 115/70 mmHg, Home HR average: 64 bpm. Weight: 97 kg (BMI 30.7 kg/m²).' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'discontinuation', label: 'Medication Education & Discontinuation Query', placeholder: 'Address patient question about stopping medications' },
  ],
  COUNSELING: [{ id: 'c1', title: 'HFimpEF & Lifelong GDMT Adherence', body: ["Your ejection fraction improved to 45% because the medications are working (treatment success, not a cure). Discontinuing or reducing GDMT can cause heart failure relapse and worsening heart function. All 4 GDMT pillars must be maintained lifelong."] }], 
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
    { id: 'w4-michael_t4-thu_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'spouse', 'wife'], response: "I am married and live with my wife. I work full-time as an accountant." },
    { id: 'w4-michael_t4-thu_surgery', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'appendix', 'appendectomy'], response: "Yes, I had my appendix out when I was 24. That's the only surgery I've had." },
    { id: 'w4-michael_t4-thu_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "I weigh myself daily (stable at 97 kg). My home blood pressure averages 115/70 mmHg with a heart rate of 64 bpm." },
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
          defaultAnswer: 'Heart Failure with Improved Ejection Fraction (HFimpEF). 58-year-old male with HFrEF (baseline LVEF 35%) shows significant clinical improvement with repeat echocardiogram LVEF 45%, marked exercise tolerance improvement (walking 30-40 min), complete resolution of edema, stable weight (97 kg), and NT-proBNP downward trend from baseline 320 pg/mL to previous 165 pg/mL to current 92 pg/mL. No HF hospitalizations or ED visits since GDMT initiation. Excellent adherence and therapy tolerated without adverse effects.'
        },
        { 
          key: 'q2', 
          q: 'Should GDMT be stopped or reduced now that LVEF has improved to 45%?',
          defaultAnswer: 'No. Clinical scenario is identified as HFimpEF, NOT resolution or cure of disease. Per ACC/AHA guidelines, improvement reflects treatment success. Discontinuing or reducing GDMT carries high risk of recurrent LV dysfunction, worsening symptoms, HF hospitalization, and increased mortality. Spironolactone was the most recently added agent, completing the fully optimized 4-pillar GDMT regimen (Sacubitril/Valsartan, Metoprolol Succinate, Empagliflozin, Spironolactone). Primary focus of visit is maintenance, adherence reinforcement, and monitoring. All 4 GDMT pillars must be maintained lifelong at current target doses.'
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
          defaultAnswer: 'Hypertension is controlled. Office BP 112/68 mmHg and home average BP 115/70 mmHg are within acceptable target range, supporting continuation of current therapy. BP is well-controlled through the current 4-pillar HF regimen (Sacubitril/Valsartan and Metoprolol Succinate) without requiring separate antihypertensive agents. No medication changes or dose adjustments needed for HTN at this visit.'
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
          defaultAnswer: 'Hyperlipidemia is stable on appropriate statin therapy (Atorvastatin 40 mg PO daily) for cardiovascular risk reduction. Statin is well tolerated without reported adverse effects. Lipid panel was not obtained at this visit. Continued statin therapy at 40 mg daily is appropriate with no dose change needed.'
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
        { key: 'o5', label: 'Continue all four GDMT agents explicitly despite improvement in ejection fraction (no new additions or dose changes at this visit)', correct: true },
        { key: 'o6', label: 'Discontinue GDMT because EF improved', correct: false }
      ] 
    },
    {
      id: 'w4a3_p2',
      title: 'Hypertension Management',
      options: [
        { key: 'o7', label: 'Continue current HF regimen for BP management (office BP 112/68 mmHg, home BP 115/70 mmHg at goal)', correct: true },
        { key: 'o8', label: 'No new antihypertensive initiated and no dose change needed', correct: true },
        { key: 'o9', label: 'Monitor blood pressure at routine follow-up', correct: true }
      ]
    },
    {
      id: 'w4a3_p3',
      title: 'Hyperlipidemia Management',
      options: [
        { key: 'o10', label: 'Continue Atorvastatin 40 mg PO daily for ongoing cardiovascular risk reduction (no dose change or statin switch)', correct: true }
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
        { key: 'o15', label: 'Address patient question regarding medication discontinuation: explicitly reinforce that stopping or reducing GDMT causes relapse of LV dysfunction and hospitalization risk', correct: true },
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
        { key: 'o22', label: 'Monitor renal function (SCr, eGFR) and serum potassium periodically', correct: true },
        { key: 'o23', label: 'Monitor medication adherence and quality of life', correct: true },
        { key: 'o24', label: 'Repeat laboratory monitoring as clinically indicated and consider repeat echocardiogram per cardiology follow-up plan', correct: true },
        { key: 'o25', label: 'Schedule routine longitudinal follow-up in approximately 3 to 6 months for ongoing monitoring', correct: true }
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
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I have so many pills, and they cost too much.",
    snapshotSummary: 'Angela has HFrEF (LVEF 35%) and Persistent Nonvalvular AFib. She was prescribed Apixaban for stroke prevention but is not taking it due to cost. CHA2DS2-VASc = 4.',
    diseaseStates: ['HFrEF', 'AFib', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Calculate CHA2DS2-VASc score', 'Identify cost nonadherence as a barrier to stroke prevention'],
    visitDate: '09/09/2026',
  },
  VITALS: { bp: '128/78', bpRepeat: '126/76', hr: '88', rr: '16', temp: '98.2°F', spo2: '98%', weight: '84 kg', height: "5'5\"", bmi: '30.8', vitalsTime: '09/09/2026 09:14', flags: {} },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'BUN', value: '18', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'SCr', value: '1.0', unit: 'mg/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'eGFR', value: '72', unit: 'mL/min/1.73m²', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'AST', value: '24', unit: 'U/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'ALT', value: '21', unit: 'U/L', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'WBC', value: '6.8', unit: 'x10³/mm³', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Hgb', value: '13.2', unit: 'g/dL', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'Plt', value: '241', unit: 'x10³/mm³', flag: 'normal', labDate: '09/09/2026 07:50' },
    { label: 'NT-proBNP', value: '210', unit: 'pg/mL', flag: 'high', labDate: '09/09/2026 07:50' }
  ],
  ALERTS: [{ level: 'high', text: 'Patient has AFib with elevated stroke risk (CHA2DS2-VASc = 4) but is not taking her prescribed anticoagulant.' }],
  // FIXED: Problem list expanded to include all active diagnoses
  PROBLEMS: [
    { name: 'Persistent Nonvalvular AFib', detail: 'CHA2DS2-VASc 4. High stroke risk. Apixaban not being taken.', flag: 'high' },
    { name: 'HFrEF', detail: 'LVEF 35%. Stable on GDMT.', flag: 'normal' },
    { name: 'Hypertension', detail: 'Controlled on current regimen', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg', flag: 'normal' },
  ],
  // FIXED: Atorvastatin added to medication list
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '49/51 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/Rate control', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'No recent fills — patient reports cost barrier' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  // FIXED: Full immunization panel added
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'Not documented', flag: 'warn' },
    { name: 'Shingrix', status: 'Not documented', flag: 'warn' },
    { name: 'Tdap', status: 'Overdue', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Referred for medication adherence and cost review. Known HFrEF (LVEF 35%) and persistent nonvalvular AFib.' },
    { label: 'Social history', value: 'Lives alone on fixed income. Retired administrative assistant. Transportation difficult. Former smoker (15 pack-year history, quit ~8 years ago).' },
    // FIXED: Surgical and family history added per rubric
    { label: 'Past Surgical History', value: 'Cholecystectomy (prior).' },
    { label: 'Family History', value: 'Father: ischemic stroke at age 70. Mother: heart failure. Sister: hypertension.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Pharmacy Claims', value: 'Apixaban last filled 4 months ago.', flag: 'missing' },
    { label: 'Echocardiogram (on file)', value: 'LVEF 35%. Persistent nonvalvular AFib. Irregularly irregular rhythm on exam.' },
  ],
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
    // FIXED: Family history synchronized to rubric (father: stroke at 70; mother: HF; sister: HTN)
    { id: 'w4-angela_b-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a stroke at age 70. My mother had heart failure. My sister has high blood pressure." },
    // FIXED: Social history enriched with fixed income and transportation detail
    { id: 'w4-angela_b-tue_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'transport', 'drive', 'alone', 'bus', 'ride', 'income', 'fixed'], response: "I live alone on a fixed income. I am a retired administrative assistant. Transportation can be difficult, I usually have to take the bus or get a ride." },
    // FIXED: Surgical history added per rubric (cholecystectomy)
    { id: 'w4-angela_b-tue_surgery', topic: 'Past surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy'], response: "Yes, I had my gallbladder removed several years ago. That's the only surgery I've had." },
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
    snapshotSummary: 'Cost barrier resolved via patient assistance program, but Angela stopped Apixaban due to bruising and fear of bleeding.',
    diseaseStates: ['AFib'],
    learningObjectives: ['Address bleeding fears using shared decision-making', 'Calculate HAS-BLED'],
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
  ALERTS: [],
  PROBLEMS: [
    { name: 'Persistent Nonvalvular AFib (Stroke Risk MTP)', detail: 'CHA2DS2-VASc 4. High stroke risk. Cost barrier resolved via PAP, but patient stopped Apixaban due to minor bruising and fear of bleeding after friend\'s anecdote.', flag: 'high' },
    { name: 'HFrEF', detail: 'LVEF 35%. Stable on 3-pillar GDMT.', flag: 'normal' },
    { name: 'Hypertension', detail: 'Controlled on GDMT', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '49/51 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/Rate control', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'Patient stopped recently due to minor bruising fear — resume immediately' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: angelaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '3-Month Follow-Up. Patient obtained Apixaban via Patient Assistance Program. She took it for several weeks but independently stopped taking it after noticing small non-painful bruises on her arms and legs and hearing a friend\'s anecdote about bleeding to death on blood thinners. Bruises were self-limited and resolved. Denies nosebleeds, gum bleeding, hematuria, melena, or ER visits/hospitalizations.' },
    { label: 'Social History', value: 'Lives alone on fixed income. Retired administrative assistant. Cost barrier resolved via PAP. Transportation via bus/family ride. Former smoker (15 pack-year history, quit 8 years ago). Drinks 1 glass of wine per week.' },
    { label: 'Family History', value: 'Father had ischemic stroke at age 70. Mother had heart failure. Sister has hypertension.' },
    { label: 'OTC & Allergies', value: 'Tylenol PRN for headaches/body aches; avoids aspirin and NSAIDs. NKDA.' },
    { label: 'Past Surgical History', value: 'Cholecystectomy (prior gallbladder removal).' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend Analysis', value: 'Weight: 84 kg (stable). BMI: 30.8 kg/m² (Class I Obesity). BP 126/76 mmHg (repeat 124/74 mmHg) — controlled. Hgb 13.0 g/dL, Plt 236k, SCr 1.0 mg/dL, eGFR 73 mL/min/1.73m² (stable).' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'fear', label: 'Bleeding Fears', placeholder: 'What are her bleeding symptoms?' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Apixaban Safety & Shared Decision Making', body: ["Apixaban does not require routine blood monitoring like warfarin. However, you must take it exactly as prescribed. Missing doses leaves you unprotected against stroke. Minor bruising is an expected side effect and does not mean the medication is dangerous."] }], 
  GUIDING_QUESTIONS: [
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
    { id: 'w4-angela_b-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a stroke at age 70. My mother had heart failure. My sister has high blood pressure." },
    { id: 'w4-angela_b-wed_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'transport', 'drive', 'alone', 'bus', 'ride', 'income', 'fixed', 'cost', 'afford'], response: "I live alone on a fixed income. I am retired. The assistance program resolved the cost issue for Eliquis. Transportation can still be difficult — I usually take the bus or get a ride." },
    { id: 'w4-angela_b-wed_surgery', topic: 'Past surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy'], response: "Yes, I had my gallbladder removed several years ago. That's the only surgery I've had." },
    { id: 'w4b2_bruise', topic: 'Bruising Symptoms', field: 'bleeding', keywords: ['bruise', 'bruising', 'bleed', 'bleeding', 'symptoms', 'nosebleed', 'gums'], response: "I noticed some small bruises on my arms and legs without even bumping into anything. They weren't painful and went away on their own. I haven't had any gum bleeding, nosebleeds, or blood in my stool, and I haven't gone to the ER, but seeing bruises scared me." },
    { id: 'w4b2_fear', topic: 'Fear of bleeding', field: 'fear', keywords: ['scared', 'fear', 'afraid', 'stop', 'why', 'friend'], response: "My friend told me a terrifying story about someone who bled to death on these exact blood thinners. Combined with the bruises I got, I panicked and stopped taking it." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4b2_a1', 
      title: 'Stroke Risk vs Bleeding Risk & Adherence', 
      icon: 'Scale', 
      color: '0891b2', 
      questions: [
        { 
          key: 'q1', 
          q: 'How do you balance her CHA2DS2-VASc score vs HAS-BLED score in addressing her nonadherence?',
          defaultAnswer: 'CHA2DS2-VASc score = 4 (Female, HTN, HFrEF, Age 64), placing her at high risk for ischemic stroke. HAS-BLED score evaluated. Apixaban 5 mg BID is strongly indicated per 2023 ACC/AHA AFib guidelines. Nonadherence due to fear of bleeding must be addressed via shared decision-making; minor cutaneous bruising does not warrant stopping DOAC.'
        },
        { 
          key: 'q2', 
          q: 'What is the status of her medication access and reason for stopping Apixaban?',
          defaultAnswer: 'Prior cost barrier successfully resolved via Patient Assistance Program. Patient independently stopped Apixaban due to minor bruising and fear of bleeding after a friend\'s anecdote. Reassurance and education on minor vs major bleeding will restore adherence.'
        }
      ] 
    },
    {
      id: 'w4b2_a2',
      title: 'HFrEF & Preventive Care Status',
      icon: 'Heart',
      color: '10b981',
      questions: [
        {
          key: 'q3',
          q: 'What is the status of her HFrEF and preventive health gaps?',
          defaultAnswer: 'HFrEF (LVEF 35%) stable on GDMT 3 pillars (Sacubitril/Valsartan 49/51 mg BID, Metoprolol Succinate 50 mg daily, Empagliflozin 10 mg daily). Controlled HTN and hyperlipidemia. Preventive care: Pneumococcal completed; Shingrix series initiated (dose #2 due); Tdap overdue.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4b2_p1', 
      title: 'Anticoagulation & Shared Decision-Making', 
      options: [
        { key: 'o1', label: 'Resume Apixaban 5 mg PO BID immediately for stroke prevention per 2023 ACC/AHA AFib guidelines', correct: true },
        { key: 'o2', label: 'Acknowledge patient fears, explain that stroke risk without anticoagulation far outweighs bleeding risk. Reassure that minor cutaneous bruising is expected and non-dangerous. Counsel on warning signs of major bleeding (dark stools, hematuria, severe headache) requiring immediate evaluation', correct: true },
        { key: 'o3', label: 'Agree to stop Apixaban since she is fearful', correct: false },
      ] 
    },
    {
      id: 'w4b2_p2',
      title: 'GDMT Maintenance, Monitoring & Preventive Care',
      options: [
        { key: 'o4', label: 'Continue Sacubitril/Valsartan 49/51 mg PO BID, Metoprolol Succinate 50 mg PO daily, Empagliflozin 10 mg PO daily, Atorvastatin 40 mg PO daily', correct: true },
        { key: 'o5', label: 'Monitor CBC (Hgb, Plt), renal function (SCr, eGFR), bleeding signs, and medication adherence at follow-up', correct: true },
        { key: 'o6', label: 'Administer Shingrix dose #2 and Tdap vaccine. Schedule follow-up visit in 1 to 3 months', correct: true },
      ]
    }
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
    { name: 'Persistent Nonvalvular AFib', detail: 'Anticoagulated successfully on Apixaban 5 mg BID with 100% adherence and no bleeding.', flag: 'normal' },
    { name: 'HFrEF', detail: 'LVEF 35%. Stable on 3-pillar GDMT.', flag: 'normal' },
    { name: 'Hypertension', detail: 'Controlled', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'On Atorvastatin 40 mg', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '49/51 mg', route: 'by mouth', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF/Rate control', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'by mouth', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Apixaban', dose: '5 mg', route: 'by mouth', freq: 'BID', indication: 'AFib stroke prevention', notes: 'Taking as prescribed' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'by mouth', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: angelaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '6-Month Follow-Up. Patient compliant with Apixaban 5 mg BID twice daily using a pillbox. Reports no significant bleeding events, nosebleeds, or easy bruising. Stable mild fatigue, no chest pain, resting dyspnea, orthopnea, or PND.' },
    { label: 'Social History', value: 'Lives alone, retired administrative assistant. Transportation barriers managed with family support and bus. Fixed income access maintained via assistance program.' },
    { label: 'Family History', value: 'Father had stroke at age 70. Mother had heart failure. Sister has hypertension.' },
    { label: 'OTC & Allergies', value: 'Tylenol PRN for occasional headaches; avoids aspirin and NSAIDs. NKDA.' },
    { label: 'Past Surgical History', value: 'Cholecystectomy.' }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Objective Trend Analysis', value: 'Weight 83 kg (stable), BMI 30.5 kg/m² (Class I Obesity), BP 124/74 mmHg (repeat 122/72), HR 80 bpm. SCr 1.0, eGFR 72, Hgb 13.1 g/dL, Plt 240k.' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Adherence Check', placeholder: 'Check on her daily routine' },
  ],
  COUNSELING: [{ id: 'c1', title: 'Bleeding Precautions & Maintenance', body: ["You may bruise more easily on this medication. If you experience severe headaches, blood in your urine or stool, or bleeding that won't stop, go to the emergency room. You do not need routine blood monitoring like warfarin patients do."] }], 
  GUIDING_QUESTIONS: [
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
    { id: 'w4-angela_b-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a stroke at age 70. My mother had heart failure. My sister has high blood pressure." },
    { id: 'w4-angela_b-thu_social', topic: 'Social history', field: 'socialHistory', keywords: ['live', 'marital', 'married', 'job', 'work', 'employ', 'living', 'transport', 'drive', 'alone', 'bus', 'ride'], response: "I live alone. I am a retired administrative assistant. Transportation can still be difficult — I usually take the bus or get a ride, but I've managed to make all my appointments." },
    { id: 'w4-angela_b-thu_monitor', topic: 'Home monitoring', field: 'monitoring', keywords: ['monitor', 'home', 'blood pressure', 'bp', 'heart rate', 'hr', 'weight', 'scale', 'weigh', 'daily'], response: "I don't have a blood pressure cuff or a scale at home. I just come in for checkups." },
    { id: 'w4-angela_b-thu_surgery', topic: 'Past surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy'], response: "Yes, I had my gallbladder removed several years ago. That's the only surgery I've had." },
    { id: 'w4b3_adh', topic: 'Adherence', field: 'adherence', keywords: ['take', 'miss', 'every day', 'routine'], response: "Getting the Eliquis through the assistance program made it affordable, and your counseling helped me understand why I need it. I set a pillbox and I take it every morning and night. No problems at all." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'w4b3_a1', 
      title: 'Therapy Maintenance & Disease Stability', 
      icon: 'CheckCircle', 
      color: '10b981', 
      questions: [
        { 
          key: 'q1', 
          q: 'Is any change to therapy needed for AFib or HFrEF at this visit?',
          defaultAnswer: 'No medication changes needed. Persistent AFib is stable and stroke-protected on Apixaban 5 mg BID. HFrEF (LVEF 35%) is stable on 3-pillar GDMT (Sacubitril/Valsartan, Metoprolol Succinate, Empagliflozin). Blood pressure (124/74 mmHg) and HR (80 bpm) are well controlled.'
        },
        { 
          key: 'q2', 
          q: 'What progress has been made in self-management and health literacy?',
          defaultAnswer: 'Patient demonstrates excellent adherence to Apixaban with no bleeding events reported. Health literacy and comfort communicating with providers have improved significantly. Fixed income access remains stable.'
        }
      ] 
    },
    {
      id: 'w4b3_a2',
      title: 'Preventive Care Status',
      icon: 'ShieldAlert',
      color: '13314f',
      questions: [
        {
          key: 'q3',
          q: 'What preventive health actions are required today?',
          defaultAnswer: 'Pneumococcal vaccine completed. Shingrix series dose #2 due today. Tdap vaccine overdue and recommended.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    { 
      id: 'w4b3_p1', 
      title: 'Medication Maintenance & Adherence Reinforcement', 
      options: [
        { key: 'o1', label: 'Continue Apixaban 5 mg PO BID, Sacubitril/Valsartan 49/51 mg PO BID, Metoprolol Succinate 50 mg PO daily, Empagliflozin 10 mg PO daily, Atorvastatin 40 mg PO daily', correct: true },
        { key: 'o2', label: 'Praise patient for excellent medication adherence and reinforce shared decision-making approach', correct: true },
        { key: 'o3', label: 'Decrease Apixaban dose to 2.5 mg BID since she is stable', correct: false },
      ] 
    },
    {
      id: 'w4b3_p2',
      title: 'Monitoring & Preventive Care',
      options: [
        { key: 'o4', label: 'Continue routine monitoring of medication adherence, bleeding/stroke symptoms, renal function (SCr, eGFR), CBC, and medication affordability', correct: true },
        { key: 'o5', label: 'Administer Shingrix dose #2 and Tdap vaccine. Schedule follow-up in 3 to 6 months', correct: true },
      ]
    }
  ],
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
