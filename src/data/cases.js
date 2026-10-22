import { BC_CASES, BC_RUBRICS } from './patientsBC.js'
import { W2_CASES, W2_RUBRICS } from './patientsW2.js'
import { W3_CASES, W3_RUBRICS } from './patientsW3.js'
import { W4_CASES, W4_RUBRICS } from './patientsW4.js'
import { W5_CASES, W5_RUBRICS } from './patientsW5.js'
// ============================================================================
// VACS case data — Maria Gonzalez, Week 1 (Tuesday / Wednesday / Thursday)
// ----------------------------------------------------------------------------
// JSON-safe: icons are strings (see iconMap.js), colors are hex WITHOUT '#'.
// CRITICAL: visible chart sections (snapshot/subjective-documented/objective/
// meds/labs/vitals/problems) contain NO hidden facts. Hidden facts live ONLY in
// INTERVIEW_KNOWLEDGE (revealed by interviewing) and PRECEPTOR (locked).
// To add cases later, copy a case object, change `id`, and edit the fields.
// ============================================================================

export const PATIENT_MASTER = {
  name: 'Maria Gonzalez',
  age: 54,
  dob: '03/12/1972',
  sex: 'Female',
  ethnicity: 'Hispanic / Latina',
  mrn: 'VACS-100482',
  language: 'English',
  marital: 'Married',
  occupation: 'Elementary school administrative assistant',
  insurance: 'Commercial (employer-sponsored)',
  setting: 'Collaborative Practice Ambulatory Care Clinic (within Primary Care)',
  pcp: 'Dr. A. Whitfield, MD',
}

// ----------------------------------------------------------------------------
// CASE 1 — TUESDAY — Initial Ambulatory Care Pharmacist Visit
// ----------------------------------------------------------------------------
const caseTue = {
  id: 'maria-tue',
  PATIENT: PATIENT_MASTER,
  ENCOUNTER: {
    day: 'Tuesday',
    type: 'Initial Ambulatory Care Pharmacist Visit',
    setting: 'Collaborative Practice Ambulatory Care Pharmacy Clinic',
    week: 'Week 1 — Tuesday',
    length: '30-minute collaborative practice visit',
    difficulty: 'Foundational APPE Student',
    difficultyTone: 'teal',
    diseaseStates: ['Hypertension', 'Type 2 Diabetes', 'Hyperlipidemia', 'Obesity'],
    chiefConcern: 'My doctor said my blood pressure and diabetes numbers have been creeping up and wanted me to come talk with you.',
    snapshotSummary:
      'Maria is presenting for initial ambulatory care pharmacy management of hypertension and type 2 diabetes in an ambulatory care pharmacy clinic. PCP referred her for persistent elevated office BP and worsening glycemic control.',
    learningObjectives: [
      'Classify BP and identify treatment goal in a patient with diabetes',
      'Assess adherence and measurement technique before intensifying therapy',
      'Recognize missing data (UACR) and statin indication in diabetes',
      'Identify lifestyle and OTC contributors uncovered only by interview',
    ],
  },

  VITALS: {
    bp: '146/92 mmHg', bpRepeat: '144/90 mmHg', hr: '78 bpm', rr: '16',
    temp: '98.2 °F', weight: '92 kg', height: `5'4"`, bmi: '34.8 kg/m²',
    flags: { bp: 'high', bpRepeat: 'high', bmi: 'high', hr: 'normal' },
    extras: [],
  },

  LABS: [
    { label: 'A1C', value: '8.2', unit: '%', flag: 'high', ref: '4.0–5.6 %', note: 'Prior 7.6% (6 mo), 7.3% (12 mo) — upward worsening trend across three time points' },
    { label: 'Glucose', value: '176', unit: 'mg/dL', flag: 'high', ref: '70–99 mg/dL' },
    { label: 'Na', value: '138', unit: 'mmol/L', flag: 'normal', ref: '135–145 mmol/L' },
    { label: 'K', value: '4.2', unit: 'mmol/L', flag: 'normal', ref: '3.5–5.0 mmol/L', note: 'Normal, acceptable for ACE inhibitor escalation' },
    { label: 'Cl', value: '101', unit: 'mmol/L', flag: 'normal', ref: '98–107 mmol/L' },
    { label: 'CO2', value: '26', unit: 'mmol/L', flag: 'normal', ref: '22–29 mmol/L' },
    { label: 'BUN', value: '16', unit: 'mg/dL', flag: 'normal', ref: '7–20 mg/dL' },
    { label: 'SCr', value: '0.88', unit: 'mg/dL', flag: 'normal', ref: '0.6–1.1 mg/dL' },
    { label: 'eGFR', value: '79', unit: 'mL/min/1.73m²', flag: 'normal', ref: '≥60 mL/min/1.73m²', note: 'Adequate preserved renal function (≥60)' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal', ref: '7–56 U/L' },
    { label: 'ALT', value: '24', unit: 'U/L', flag: 'normal', ref: '7–56 U/L' },
    { label: 'Total cholesterol', value: '201', unit: 'mg/dL', flag: 'high', ref: '<200 mg/dL' },
    { label: 'LDL-C', value: '112', unit: 'mg/dL', flag: 'high', ref: '<100 mg/dL', note: 'Informs elevated ASCVD risk' },
    { label: 'HDL-C', value: '44', unit: 'mg/dL', flag: 'normal', ref: '>40 mg/dL' },
    { label: 'Triglycerides', value: '223', unit: 'mg/dL', flag: 'high', ref: '<150 mg/dL' },
    { label: 'UACR', value: 'No result on file', unit: '', flag: 'missing', ref: '<30 mg/g', note: 'Never obtained — annual screening indicated per ADA 2026/KDIGO' },
  ],

  ALERTS: [
    { level: 'high', title: 'HTN — BP ABOVE GOAL (<130/80)', flag: 'Overdue', text: 'Office BP 146/92 → 144/90 mmHg: Stage 2 hypertension in a patient with diabetes (goal <130/80).' },
    { level: 'high', title: 'DIABETES — A1C ABOVE GOAL', flag: 'Overdue', text: 'A1C 8.2% and rising over 12 months despite metformin — above individualized goal.' },
    { level: 'warn', title: 'DIABETIC KIDNEY SCREENING — UACR', flag: 'Due', text: 'UACR has never been obtained in a patient with diabetes + hypertension.' },
    { level: 'info', title: 'ASCVD PREVENTION — STATIN THERAPY', flag: 'Due', text: 'No statin currently prescribed in a 54-year-old with diabetes.' },
  ],

  PROBLEMS: [
    { name: 'Essential hypertension', icd10: 'I10', detail: 'Office BP rising; on lisinopril + HCTZ', flag: 'high', noted: '03/2018' },
    { name: 'Type 2 diabetes mellitus', icd10: 'E11.9', detail: 'A1C 8.2% (trend up); on metformin XR', flag: 'high', noted: '07/2022', alert: 'Health maintenance: Nephropathy screening (UACR) overdue' },
    { name: 'Hyperlipidemia', icd10: 'E78.5', detail: 'LDL 112, TG 223; not on statin', flag: 'warn', noted: '01/2023', alert: 'Health maintenance: Statin therapy not on file' },
    { name: 'Obesity', icd10: 'E66.9', detail: 'BMI 34.8 kg/m²', flag: 'warn', noted: '09/2015' },
    { name: 'Bilateral knee osteoarthritis', icd10: 'M17.0', detail: 'Chronic; managed with PRN analgesia', flag: 'normal', noted: '11/2020' },
  ],

  ALLERGIES: [{ substance: 'No known drug allergies (NKDA)', reaction: '—' }],

  MEDICATIONS: [
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'Take 1 tablet by mouth once daily with dinner', indication: 'Type 2 diabetes', notes: 'Tolerating', start: '07/15/2018', prescriber: 'Dr. A. Whitfield', lastFilled: '05/20/2026', refills: '2' },
    { name: 'Lisinopril', dose: '10 mg', route: 'PO', freq: 'Take 1 tablet by mouth once daily', indication: 'Hypertension', notes: '', start: '03/10/2016', prescriber: 'Dr. A. Whitfield', lastFilled: '05/20/2026', refills: '2' },
    { name: 'Hydrochlorothiazide', dose: '12.5 mg', route: 'PO', freq: 'Take 1 tablet by mouth once daily', indication: 'Hypertension', notes: '', start: '03/10/2016', prescriber: 'Dr. A. Whitfield', lastFilled: '05/20/2026', refills: '2' },
    { name: 'Acetaminophen', dose: '500 mg', route: 'PO', freq: 'Take 1 tablet by mouth every 6 hours as needed for pain', indication: 'Knee osteoarthritis', notes: 'As needed', start: '11/05/2020', prescriber: 'Dr. A. Whitfield', lastFilled: '04/10/2026', refills: '1' },
    { name: 'Ibuprofen (OTC)', dose: '200 mg', route: 'PO', freq: 'Take 2 tablets by mouth occasionally for pain', patientReported: true, source: 'Patient Interview' },
    { name: 'Multivitamin (OTC)', dose: '1 tablet', route: 'PO', freq: 'Take 1 tablet by mouth daily', patientReported: true, source: 'Patient Interview' }
  ],

  IMMUNIZATIONS: [
    { name: 'Influenza (2025–26)', status: 'Administered 10/14/2025', detail: 'IM - L deltoid - Lot FL7732 - Sanofi', flag: 'normal' },
    { name: 'COVID-19 (2025–26)', status: 'Administered 09/30/2025 (primary series confirmed complete; booster received)', detail: 'IM - R deltoid - Lot CV5521 - Pfizer', flag: 'normal' },
    { name: 'Pneumococcal (PCV20)', status: 'Due — age 54 with diabetes indicated per CDC schedule', flag: 'warn' },
    { name: 'Zoster (Shingrix)', status: 'Due — age ≥50 (2-dose series indicated)', flag: 'warn' },
    { name: 'Tdap', status: 'Overdue — last administered 06/12/2015 (11 years ago; >10-year booster interval)', flag: 'high' },
  ],

  SUBJECTIVE_DOCUMENTED: [
    { label: 'Reason for referral', value: 'PCP referral for persistently elevated office BP and worsening glycemic control in an ambulatory care pharmacy clinic.' },
    { label: 'Chief Complaint (CC)', value: 'Reports doctor noted BP and diabetes "numbers creeping up."' },
    { label: 'PMH', value: 'Essential hypertension (8 years), type 2 diabetes mellitus (4 years), hyperlipidemia (3 years), Class I obesity, bilateral knee osteoarthritis.' },
    { label: 'Past Surgical History (PSH)', value: 'Cholecystectomy (gallbladder removal at age 41). No other surgical history.' },
    { label: 'Family History', value: 'Father: hypertension, type 2 diabetes, myocardial infarction (MI) at age 62; Mother: hypertension, type 2 diabetes, diabetic kidney disease (DKD); Brother: type 2 diabetes.' },
    { label: 'Allergies', value: 'No known drug allergies (NKDA).' },
    { label: 'General wellness & symptoms', value: 'Patient reports feeling generally well overall aside from chronic conditions and knee stiffness; no acute complaints documented at intake.' },
    { label: 'Medication adherence & monitoring', value: 'Patient misses morning doses 2–3 times per week due to chaotic mornings and busy schedule/forgetfulness; explicitly denies intentional nonadherence (never intentionally skips or stops pills). Tolerating current regimen well; prior metformin GI intolerance (nausea and diarrhea upon initiation years ago) is now completely resolved. Intermittent home blood pressure monitoring (1–2 times per week) reveals readings typically in the 140s/90s range (average ~144/90 mmHg) with improper measurement technique (crossing legs, checking right after moving around, unverified cuff placement).' },
    { label: 'Social History', value: 'Occupation: Elementary school administrative assistant. Marital/living status: Married, lives with husband. Tobacco status: Never smoker (denies tobacco use). Alcohol use status: Uses alcohol (1–2 glasses of wine on weekends). Recreational drug use: Explicitly denies recreational or illicit drug use.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular/Pulmonary/Neurologic: Explicitly denies chest pain, shortness of breath, palpitations, dizziness, syncope, severe headaches, lower extremity edema, and acute vision changes.' },
    { label: 'Patient Goals & Motivators', value: 'Expresses concern about future diabetes complications, linking concern to family history of mother\'s diabetic kidney disease (fear of diabetic kidney disease). Stated patient goals include improved glycemic control (lower blood sugar / A1C), blood pressure control (<130/80 mmHg), weight loss (highly motivated to lose weight), avoiding future insulin therapy (fear of insulin), and protecting kidney function.' },
  ],

  PHYSICAL_EXAM: {
    General: 'Well-appearing, in no acute distress (intake note).',
    CV: 'RRR, normal S1/S2, no murmurs/rubs/gallops; no JVD; distal pulses 2+ bilaterally.',
    Resp: 'Lungs clear to auscultation bilaterally; no wheezes or crackles; unlabored.',
    Extremities: 'No peripheral edema; feet skin intact, no ulcers; 10-g monofilament intact bilaterally; DP pulses 2+.',
  },

  OBJECTIVE_EXTRA: [
    { label: 'Documented home BP log', value: 'Submitted; average ~144/90 mmHg, which is consistent with and corroborates elevated office BP readings (146/92, repeat 144/90 mmHg).', flag: 'warn' },
    { label: 'A1C trend data', value: 'Current A1C 8.2% (prior values: 7.6% at 6 months ago, 7.3% at 12 months ago; demonstrating an upward/worsening trajectory over the past 12 months across three time points).', flag: 'high' },
    { label: 'Renal function interpretation', value: 'eGFR 79 mL/min/1.73m² and SCr 0.88 mg/dL demonstrate adequate and preserved renal function, which permits metformin titration and ACE inhibitor escalation.', flag: 'normal' },
    { label: 'Serum Potassium interpretation', value: 'Serum potassium 4.2 mmol/L is normal and acceptable for ACE inhibitor escalation.', flag: 'normal' },
    { label: 'UACR status & guideline significance', value: 'Not obtained / no result on file. Declarative interpretation: Absent albuminuria data limits complete diabetic kidney disease risk assessment; annual UACR screening is strongly indicated per ADA 2026 and KDIGO guidelines.', flag: 'missing' },
    { label: 'Lipid panel ASCVD interpretation', value: 'Total cholesterol 201 mg/dL, LDL-C 112 mg/dL, HDL-C 44 mg/dL, Triglycerides 223 mg/dL available to inform elevated ASCVD risk in diabetes, indicating statin therapy.', flag: 'warn' },
    { label: 'Documented SMBG log', value: 'None on file; reports checking fasting blood sugars 1-2 times per week at home, typically ranging 160–180 mg/dL.', flag: 'missing' },
  ],

  INTERVIEW_FIELDS: [
    { key: 'currentMeds', label: 'Current medication use / doses', placeholder: 'What is she actually taking, and how?' },
    { key: 'adherence', label: 'Medication adherence', placeholder: 'Missed doses? How often? Barriers?' },
    { key: 'otc', label: 'OTC / supplements / NSAID use', placeholder: 'Ask specifically about OTC pain relievers…' },
    { key: 'sideEffects', label: 'Side effects', placeholder: 'Any medication-related symptoms?' },
    { key: 'homeBp', label: 'Home BP readings', placeholder: 'Typical readings if she checks at home…' },
    { key: 'bpTechnique', label: 'Home BP technique', placeholder: 'How does she actually measure it?' },
    { key: 'glucoseMonitoring', label: 'Home glucose monitoring', placeholder: 'How often? Typical fasting values?' },
    { key: 'diet', label: 'Diet & sodium intake', placeholder: 'Eating pattern, restaurant meals, sweet tea, salt…' },
    { key: 'exercise', label: 'Physical activity', placeholder: 'Frequency, duration, barriers…' },
    { key: 'weightGoals', label: 'Weight goals', placeholder: 'Motivation and goals around weight…' },
    { key: 'familyHistory', label: 'Family history', placeholder: 'Relevant family history…' },
    { key: 'diseaseUnderstanding', label: 'Disease / A1C understanding', placeholder: 'What does she understand about A1C and her conditions?' },
    { key: 'concerns', label: 'Patient concerns & goals', placeholder: 'What worries her most?' },
    { key: 'cost', label: 'Cost / access', placeholder: 'Any cost or refill barriers?' },
  ],
  GUIDING_QUESTIONS: [
    'What factors contributed to this patient\'s uncontrolled blood pressure?',
    'Why did you choose medication intensification rather than adherence intervention alone?',
    'What additional information is needed before fully evaluating kidney risk?',
    'Why does diabetes change your blood pressure goal?',
    'Why is statin therapy indicated even though this patient has never had a heart attack or stroke?',
    'What would make your treatment plan difficult for this patient to follow?',
    'How would you explain A1C to this patient in plain language?',
    'What would you monitor after increasing lisinopril?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'maria-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'maria-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take ibuprofen 400 mg to 600 mg a few times a week for my knee stiffness, and I also take a daily multivitamin." },
    { id: 'maria-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I usually have 1 or 2 glasses of wine on the weekends, but I don't drink during the week." },
    { id: 'maria-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'maria-tue_drugs', topic: 'Recreational drug use', field: 'social', keywords: ['drug', 'illicit', 'marijuana', 'weed', 'cocaine', 'substance', 'recreational'], response: "I have never used recreational drugs or illicit substances in my life." },
    { id: 'maria-tue_wellness', topic: 'General health status', field: 'symptoms', keywords: ['generally', 'overall', 'how do you feel overall', 'well', 'feeling'], response: "Overall, I feel generally well aside from my chronic conditions and my knees being stiff when walking." },
    { id: 'maria-tue_intentional', topic: 'Intentional adherence', field: 'adherence', keywords: ['intentionally', 'on purpose', 'stop', 'quit', 'skip on purpose'], response: "No, I never intentionally skip or stop my pills. I just get rushed in the morning and forget them two or three times a week." },
    { id: 'maria-tue_ros', topic: 'Review of systems', field: 'symptoms', keywords: ['chest pain', 'short of breath', 'palpitations', 'dizziness', 'syncope', 'headache', 'edema', 'vision', 'ros'], response: "I deny having any chest pain, shortness of breath, palpitations, dizziness, syncope, severe headaches, leg swelling, or vision changes." },
    { id: 'maria-tue_glycemic_goal', topic: 'Glycemic control goals', field: 'concerns', keywords: ['glycemic goal', 'sugar goal', 'a1c goal', 'lower sugar'], response: "My goal is to achieve improved glycemic control and lower my A1C so I can protect my health and stay off insulin." },
    { id: 'maria-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had high blood pressure, type 2 diabetes, and had a heart attack at age 62. My mother had high blood pressure and type 2 diabetes, and suffered from diabetic kidney disease. My brother has type 2 diabetes." },
    { id: 'maria-tue_surg', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy'], response: 'I had my gallbladder removed when I was 41. No other surgeries.' },
    { id: 'maria-tue_duration', topic: 'Disease duration', field: 'pmh', keywords: ['how long', 'when were you diagnosed', 'duration', 'years'], response: 'I\'ve had high blood pressure for about 8 years, diabetes for 4 years, and high cholesterol for 3 years.' },
    { id: 'reason', topic: 'Reason for visit', field: null,
      keywords: ['why are you here', 'reason for', 'bring you in', 'what brings', 'referred', 'doctor send', 'visit today'],
      response: 'My doctor said my blood pressure and my diabetes numbers have been creeping up, so he wanted me to come talk with the pharmacist.' },
    { id: 'symptoms', topic: 'Symptoms', field: 'sideEffects',
      keywords: ['symptom', 'how do you feel', 'feeling', 'chest pain', 'dizzy', 'headache', 'short of breath', 'swelling', 'any problems'],
      response: "Honestly I feel generally well overall — no chest pain, shortness of breath, palpitations, dizziness, syncope, headaches, or vision changes. I get tired sometimes, and my knees bother me, but that's about it." },
    { id: 'adherence', topic: 'Medication adherence', field: 'adherence',
      keywords: ['miss', 'forget', 'adheren', 'take them every', 'remember to take', 'skip', 'consistent', 'every day'],
      response: "Most days I take them… but if I'm honest I probably miss them two or three times a week. Mornings are just chaotic getting out the door. I never skip on purpose though." },
    { id: 'currentMeds', topic: 'Current medications', field: 'currentMeds',
      keywords: ['what medicine', 'what medications', 'what are you taking', 'list your med', 'which pills', 'go over your med'],
      response: "I take the metformin with dinner, and the lisinopril and water pill in the morning. And I take Tylenol when my knees act up." },
    { id: 'otc', topic: 'OTC / NSAIDs / supplements', field: 'otc',
      keywords: ['over the counter', 'otc', 'ibuprofen', 'advil', 'motrin', 'aleve', 'naproxen', 'pain reliever', 'supplement', 'vitamin', 'anything else you take', 'pain medicine'],
      response: "For my knees I usually take some ibuprofen — 400 or 600 — a few times a week. I don't really count that as a medicine though, it's just something I grab over the counter." },
    { id: 'sideEffects', topic: 'Side effects', field: 'sideEffects',
      keywords: ['side effect', 'bother you', 'tolerate', 'upset stomach', 'cough', 'problems with the med'],
      response: "No, I don't think the pills bother me now. When I first started the metformin years ago, I did have some nausea and diarrhea for a few weeks, but that completely went away. I feel fine on them now and tolerate the regimen well." },
    { id: 'homeBp', topic: 'Home BP readings', field: 'homeBp',
      keywords: ['home blood pressure', 'check your blood pressure', 'bp at home', 'readings at home', 'monitor your pressure', 'numbers at home'],
      response: "I check it occasionally. I started keeping a log, and my average is around 144 over 90." },
    { id: 'bpTechnique', topic: 'BP measurement technique', field: 'bpTechnique',
      keywords: ['how do you check', 'technique', 'sit when', 'arm position', 'cuff', 'before you check', 'cross your legs', 'rest before'],
      response: "I just check it whenever — sometimes right after I've been moving around the house. I usually have my legs crossed, and I'm honestly not sure the cuff is in the right spot." },
    { id: 'glucoseMonitoring', topic: 'Home glucose monitoring', field: 'glucoseMonitoring',
      keywords: ['blood sugar', 'glucose', 'check your sugar', 'monitor your sugar', 'fasting', 'finger stick', 'glucometer', 'sugars at home'],
      response: "I check my sugar maybe once or twice a week. In the mornings it's usually around 160 to 180." },
    { id: 'diet', topic: 'Diet', field: 'diet',
      keywords: ['eat', 'diet', 'food', 'meals', 'sweet tea', 'drink', 'restaurant', 'cook', 'typical day of eating'],
      response: "We eat out three or four times a week — it's just easier. And I do love my sweet tea, I have it most days." },
    { id: 'sodium', topic: 'Sodium intake', field: 'diet',
      keywords: ['salt', 'sodium', 'salty'],
      response: "Salt? No, I don't really pay attention to that, to be honest." },
    { id: 'exercise', topic: 'Physical activity', field: 'exercise',
      keywords: ['exercise', 'activity', 'walk', 'workout', 'physical', 'active', 'move around'],
      response: "I walk maybe once or twice a week for about 15 minutes. My knees hurt and I'm tired a lot, so it's hard to do more." },
    { id: 'weightGoals', topic: 'Weight goals', field: 'weightGoals',
      keywords: ['weight', 'lose weight', 'goal weight', 'losing weight', 'your weight'],
      response: "I really want to lose some weight — that's the thing I care about most. I just haven't figured out how." },
    { id: 'familyHistory', topic: 'Family history', field: 'familyHistory',
      keywords: ['family history', 'your mother', 'your mom', 'family member', 'parents have', 'runs in your family'],
      response: "My mom had diabetes and ended up with kidney problems. That really scares me." },
    { id: 'social', topic: 'Social history', field: null,
      keywords: ['smoke', 'alcohol', 'drink alcohol', 'tobacco', 'work', 'social', 'live with', 'married', 'job'],
      response: "I don't smoke, and I rarely drink. I work at the elementary school office, and I'm married — my husband's supportive. I never use recreational drugs." },
    { id: 'cost', topic: 'Cost / access', field: 'cost',
      keywords: ['cost', 'afford', 'insurance', 'pay for', 'refill', 'pharmacy pick up', 'expensive'],
      response: "No, cost isn't really a problem — I have insurance through work." },
    { id: 'diseaseUnderstanding', topic: 'Disease understanding', field: 'diseaseUnderstanding',
      keywords: ['understand', 'what do you know about', 'explain your diabetes', 'know about your condition', 'overwhelmed'],
      response: "Honestly I get overwhelmed. There's so much conflicting information about what I should eat and do — I don't always know what's right." },
    { id: 'a1c', topic: 'A1C understanding', field: 'diseaseUnderstanding',
      keywords: ['a1c', 'hemoglobin', 'what does a1c', 'know what a1c'],
      response: "The A1C? I hear the doctor say the number but I really don't know what it actually means." },
    { id: 'concerns', topic: 'Concerns & goals', field: 'concerns',
      keywords: ['worry', 'worried', 'concern', 'afraid', 'scared', 'insulin', 'kidney', 'fear', 'goals for your health'],
      response: "I'm scared I'll end up on insulin someday. And I worry about my kidneys — I don't want what happened to my mom to happen to me. My goal is to get my sugar and pressure under control." },
    { id: 'followup', topic: 'Follow-up', field: null,
      keywords: ['follow up', 'come back', 'next visit', 'see you again', 'schedule'],
      response: "Sure, I can come back whenever you need me to." },
  ],

  ASSESSMENT_CARDS: [
    { id: 'htn', title: 'Essential hypertension (Uncontrolled, Above Goal)', icon: 'HeartPulse', color: '13314f', questions: [
      { key: 'htn_class', q: 'How is her office BP classified, and what is her target given diabetes?', defaultAnswer: 'Control status: Uncontrolled Stage 2 hypertension. Office BP readings of 146/92 mmHg and repeat 144/90 mmHg are above goal. The blood pressure goal is <130/80 mmHg tied to her diabetes comorbidity per the 2025 AHA/ACC Hypertension Guideline. Home BP log average (~144/90 mmHg) is similarly elevated and corroborates office readings.' },
      { key: 'htn_contrib', q: 'What contributors (lifestyle, OTC) might be raising her BP?', defaultAnswer: 'Key contributors to uncontrolled blood pressure include medication nonadherence (misses morning doses 2-3 times per week due to chaotic mornings), improper home BP measurement technique (crosses legs, rests inadequately, uncertain cuff position), Class I obesity (BMI 34.8 kg/m²), high dietary sodium and frequent restaurant meals (3-4 times per week) with daily sweet tea, and frequent OTC NSAID use (ibuprofen 400-600 mg multiple times weekly).' },
      { key: 'htn_reg', q: 'Is her current 2-drug regimen optimized? What are the options?', defaultAnswer: 'Current two-drug regimen (lisinopril 10 mg PO daily and hydrochlorothiazide 12.5 mg PO daily) is tolerated without adverse effects. Preserved renal function (eGFR 79 mL/min/1.73m²) and acceptable serum potassium (4.2 mmol/L) permit and support titration of lisinopril to 20 mg PO daily.' },
      { key: 'htn_nsaid', q: 'How does her OTC NSAID use affect blood pressure and kidney risk?', defaultAnswer: 'Frequent OTC ibuprofen use contributes directly to elevated blood pressure, reduces the antihypertensive efficacy of ACE inhibitors and diuretics, and increases future renal risk. Advise limiting/stopping ibuprofen and explore alternative pain strategies, recommending acetaminophen as first-line therapy.' },
    ]},
    { id: 't2dm', title: 'Type 2 diabetes mellitus (Uncontrolled, Above Goal)', icon: 'Droplet', color: '0d9488', questions: [
      { key: 'dm_goal', q: 'Is her A1C at an appropriate individualized goal? What is the trend?', defaultAnswer: 'Control status: Uncontrolled type 2 diabetes mellitus. Current A1C is 8.2% (fasting glucose 176 mg/dL, home SMBG 160-180 mg/dL), demonstrating a worsening upward trend compared to prior values of 7.6% at 6 months ago and 7.3% at 12 months ago across three time points. Individualized A1C goal is <7% per ADA 2026 Standards of Care.' },
      { key: 'dm_contrib', q: 'How are diet, activity, and monitoring affecting glycemic control?', defaultAnswer: 'Contributors to poor glycemic control include medication nonadherence (missed doses), Class I obesity, physical inactivity (walks only 1-2 times per week for 15 min), dietary habits (regular sweet tea, restaurant meals), and inconsistent glucose monitoring (checks only 1-2 times per week).' },
      { key: 'dm_metf', q: 'Can metformin be optimized given her dose and renal function?', defaultAnswer: 'Metformin XR 1000 mg PO daily is a submaximal dose. Preserved renal function (eGFR 79 mL/min/1.73m²) permits titration toward the target dose of 2000 mg PO daily. Plan logic: optimize metformin to maximal tolerated dose before adding new antihyperglycemic agents.' },
      { key: 'dm_next', q: 'What would you reassess before adding another glucose-lowering agent?', defaultAnswer: 'Future escalation plan: If glycemic goals (A1C <7%) remain unmet at 3-month follow-up despite metformin optimization and adherence reinforcement, consider adding a GLP-1 receptor agonist (e.g., semaglutide, dulaglutide) or SGLT2 inhibitor (e.g., empagliflozin, dapagliflozin), specifically justified by her obesity/weight reduction needs and cardiorenal risk, conditioned on failure to achieve goal after metformin optimization.' },
    ]},
    { id: 'kidney', title: 'Diabetic Kidney Disease Screening & Renal Risk (Dual Risk)', icon: 'FlaskConical', color: '0891b2', questions: [
      { key: 'kid_dual', q: 'What is her renal risk given diabetes and hypertension?', defaultAnswer: 'Patient has significant dual risk for diabetic kidney disease due to concurrent type 2 diabetes and hypertension. Current renal function is preserved with eGFR 79 mL/min/1.73m² and SCr 0.88 mg/dL.' },
      { key: 'kid_uacr', q: 'Why is UACR important here, and what is the next step?', defaultAnswer: 'UACR has never been obtained; absent albuminuria data limits complete diabetic kidney disease risk assessment. Annual UACR screening is strongly recommended per ADA 2026 and KDIGO guidelines. ACE inhibitor therapy (lisinopril) supports renoprotection and reduces intraglomerular pressure.' },
    ]},
    { id: 'lipid', title: 'Hyperlipidemia / Primary ASCVD Prevention (Evidence-Based Care Gap)', icon: 'Activity', color: 'dc2626', questions: [
      { key: 'lip_statin', q: 'Does a 54-year-old with diabetes have a statin indication? Why?', defaultAnswer: 'Patient is not currently on statin therapy, which represents an evidence-based care gap for primary ASCVD prevention. ADA 2026 Standards of Care recommend at least moderate-intensity (or high-intensity) statin therapy for all patients aged 40-75 with diabetes for primary prevention, independent of baseline LDL-C.' },
      { key: 'lip_risk', q: 'What ASCVD risk enhancers are present?', defaultAnswer: 'Patient has multiple ASCVD risk enhancers: hypertension, obesity, elevated triglycerides (223 mg/dL, LDL-C 112 mg/dL), and family history of premature cardiovascular disease (father had MI at age 62). Statin initiation with atorvastatin 20 mg (or 40 mg) daily is indicated with adverse effect counseling and a repeat lipid panel in 6-12 weeks.' },
    ]},
    { id: 'obesity', title: 'Obesity (Class I, BMI 34.8 kg/m²)', icon: 'Scale', color: 'ca8a04', questions: [
      { key: 'ob_bmi', q: 'How does her BMI affect BP, glucose, and overall risk?', defaultAnswer: 'BMI 34.8 kg/m² (weight 92 kg, height 5\'4\") classifies as Class I Obesity. Obesity directly contributes to hypertension, insulin resistance, and elevated cardiovascular risk. Obesity influences antihyperglycemic medication selection, prioritizing weight-beneficial agents (metformin, GLP-1 RA). Modest 5-7% weight reduction provides dual benefits for both blood pressure and glycemic control.' },
    ]},
    { id: 'nsaid', title: 'Hidden OTC NSAID Use & Knee Osteoarthritis', icon: 'AlertTriangle', color: 'ea580c', questions: [
      { key: 'nsaid_assess', q: 'How should knee pain and NSAID use be managed?', defaultAnswer: 'Frequent OTC ibuprofen use contributes to elevated blood pressure, reduced antihypertensive efficacy, and increased future renal risk. Recommend exploring alternative pain management strategies: limit ibuprofen, recommend acetaminophen as first-line pain therapy (up to 3000 mg/day), and provide a conditional referral to PCP for osteoarthritis management if knee pain worsens.' },
    ]},
    { id: 'prevent', title: 'Preventive Care & Immunization Gaps', icon: 'Heart', color: '7c3aed', questions: [
      { key: 'prev_gaps', q: 'What preventive gaps should be addressed at this visit?', defaultAnswer: 'Preventive care gaps identified from objective records: Pneumococcal conjugate vaccination (PCV20) is indicated for age 54 with diabetes; Recombinant Zoster vaccine (Shingrix) 2-dose series is indicated for age ≥50; and Tdap booster is overdue (last dose received 11 years ago, exceeding the 10-year booster interval per CDC Adult Immunization Schedule).' },
    ]},
  ],

  PLAN_SECTIONS: [
    { id: 'htn_plan', title: 'Hypertension plan', options: [
      { key: 'h_cont', label: 'Continue hydrochlorothiazide 12.5 mg PO once daily', correct: true },
      { key: 'h2', label: 'Increase lisinopril to 20 mg PO once daily', correct: true },
      { key: 'h_tech', label: 'Educate on proper home BP monitoring technique (rest 5 min, feet flat, uncrossed legs, arm supported at heart level, proper cuff placement)', correct: true },
      { key: 'h_freq', label: 'Recommend home BP monitoring >=3-4 days/week and maintain a written log of readings to review at follow-up', correct: true },
      { key: 'h_nsaid', label: 'Advise limiting NSAID use (ibuprofen) to avoid BP elevation and reduce renal risk', correct: true },
      { key: 'h_bmp', label: 'Order BMP (serum creatinine, BUN, potassium) in 2-4 weeks after ACE inhibitor dose titration', correct: true },
      { key: 'h_target', label: 'Blood pressure treatment goal: <130/80 mmHg per 2025 AHA/ACC Hypertension Guideline', correct: true },
      { key: 'h4', label: 'Immediately add a fourth antihypertensive today', correct: false },
      { key: 'h5', label: 'Stop the ACE inhibitor because BP is still high', correct: false },
    ]},
    { id: 'dm_plan', title: 'Diabetes plan', options: [
      { key: 'd1', label: 'Increase metformin XR toward target 2000 mg PO daily with dinner (titrate to 1500 mg daily for 1-2 weeks, then 2000 mg daily as tolerated)', correct: true },
      { key: 'd_gi', label: 'Counsel patient on potential gastrointestinal adverse effects of metformin dose escalation (nausea, diarrhea) and emphasize taking with meals', correct: true },
      { key: 'd_smbg', label: 'Encourage fasting self-monitoring of blood glucose (SMBG) >=3-4 times weekly and log readings', correct: true },
      { key: 'd_uacr', label: 'Order urine albumin-to-creatinine ratio (UACR) spot urine test at this visit to screen for albuminuria per ADA 2026 / KDIGO guidelines', correct: true },
      { key: 'd_goal', label: 'Individualized glycemic goal: A1C <7% per ADA 2026 Standards of Care', correct: true },
      { key: 'd_addon', label: 'Plan future add-on therapy if glycemic goals unmet at 3 months despite metformin optimization: GLP-1 RA (e.g., semaglutide, dulaglutide) or SGLT2 inhibitor (e.g., empagliflozin, dapagliflozin), conditioned on failure to achieve goal', correct: true },
      { key: 'd4', label: 'Start basal insulin today', correct: false },
      { key: 'd5', label: 'Stop metformin due to A1C rise', correct: false },
    ]},
    { id: 'kidney_plan', title: 'Diabetic kidney disease screening & monitoring plan', options: [
      { key: 'k_uacr', label: 'Order UACR spot test at this visit to address missing albuminuria screening gap per ADA/KDIGO recommendations', correct: true },
      { key: 'k_acei', label: 'Continue lisinopril supporting renal protective antiproteinuric effects and intraglomerular pressure reduction', correct: true },
      { key: 'k_bmp', label: 'Recheck BMP (SCr, eGFR, potassium) in 2-4 weeks after lisinopril titration', correct: true },
      { key: 'k_avoid', label: 'Avoid nephrotoxic agents including frequent OTC NSAIDs', correct: true },
    ]},
    { id: 'lipid_plan', title: 'Lipid / primary ASCVD prevention plan', options: [
      { key: 'l1', label: 'Initiate statin therapy for primary ASCVD prevention in diabetes: Atorvastatin 20 mg (or 40 mg) PO once daily at bedtime per ADA 2026 guidelines', correct: true },
      { key: 'l_counsel', label: 'Educate patient on potential statin adverse effects (myalgias, muscle soreness) and emphasize cardiovascular risk reduction benefits', correct: true },
      { key: 'l_monitor_edu', label: 'Educate patient on statin monitoring: inform patient about follow-up lipid panel/safety lab checks in 6–12 weeks and symptom monitoring to report unexplained muscle pain or weakness', correct: true },
      { key: 'l_repeat', label: 'Repeat fasting lipid panel in 6-12 weeks (before next visit) to assess LDL reduction and therapy response', correct: true },
      { key: 'l3', label: 'Defer all lipid therapy until BP is controlled', correct: false },
      { key: 'l4', label: 'Start a fibrate first-line for TG 223', correct: false },
    ]},
    { id: 'life_plan', title: 'Lifestyle & weight management plan', options: [
      { key: 'lf_act', label: 'Recommend >=150 minutes/week of moderate-intensity physical activity (gradually increase walking within knee tolerance)', correct: true },
      { key: 'lf_veg', label: 'Recommend increasing vegetable intake and dietary fiber', correct: true },
      { key: 'lf_rest', label: 'Recommend reducing restaurant meal frequency (cut dining out from 3-4x/week) and preparing more home-cooked meals', correct: true },
      { key: 'lf_dash', label: 'Adopt DASH-style diet: reduce sodium intake and replace sweet tea with water to eliminate sugary beverages', correct: true },
      { key: 'lf_wt', label: 'Set a realistic 5-7% weight loss target (~5-7 kg), reinforcing that weight loss produces dual benefits for both blood pressure and glycemic control', correct: true },
      { key: 'lf4', label: 'Recommend a strict 1200-kcal diet immediately', correct: false },
    ]},
    { id: 'pain_plan', title: 'Knee osteoarthritis & pain management plan', options: [
      { key: 'p_limit', label: 'Recommend limiting/stopping OTC ibuprofen use to reduce blood pressure elevation and renal risk', correct: true },
      { key: 'p_tylenol', label: 'Recommend acetaminophen (500-1000 mg PO every 6 hours PRN, maximum 3000 mg/day) as first-line pain therapy for knee osteoarthritis', correct: true },
      { key: 'p_ref', label: 'Conditional PCP referral: refer to PCP for dedicated osteoarthritis evaluation/physical therapy if knee pain worsens or remains uncontrolled', correct: true },
      { key: 'p_ratio', label: 'Tie pain management plan to blood pressure control and renal risk reduction rationale', correct: true },
    ]},
    { id: 'imm_plan', title: 'Immunizations & preventive care plan', options: [
      { key: 'i_verify', label: 'Verify immunization history in state registry', correct: true },
      { key: 'i_pcv', label: 'Recommend Pneumococcal conjugate vaccination (PCV20) single dose for diabetes indication', correct: true },
      { key: 'i_shing', label: 'Recommend Recombinant Zoster vaccine (Shingrix) 2-dose series (0 and 2-6 months) for age ≥50', correct: true },
      { key: 'i_tdap', label: 'Recommend Tdap booster today (overdue, 11 years since last dose in 2015) per CDC Adult Immunization Schedule', correct: true },
      { key: 'i3', label: 'No vaccines indicated', correct: false },
    ]},
    { id: 'fu_plan', title: 'Follow-up & monitoring plan', options: [
      { key: 'f_bmp', label: 'BMP lab check (serum creatinine, potassium) in 2-4 weeks after ACE inhibitor titration', correct: true },
      { key: 'f_fu', label: 'Follow up in 3 months for comprehensive clinic visit', correct: true },
      { key: 'f_lip', label: 'Repeat lipid panel before next visit (at 6-12 weeks)', correct: true },
      { key: 'f_rev_bp', label: 'Review home BP log at follow-up visit', correct: true },
      { key: 'f_rev_bg', label: 'Review glucose monitoring data and repeat A1C at follow-up visit', correct: true },
      { key: 'f_rev_adh', label: 'Review medication adherence at follow-up visit', correct: true },
      { key: 'f_rev_resp', label: 'Review response to therapy and evaluate UACR result at follow-up visit', correct: true },
      { key: 'f2', label: 'Return in 1 year', correct: false },
    ]},
  ],

  PLAN_FREETEXT: [
    { key: 'patientEducation', label: 'Patient education plan', placeholder: 'Plain-language teaching points and teach-back items…' },
    { key: 'followUp', label: 'Follow-up plan', placeholder: 'Timing, what to recheck, what to bring…' },
    { key: 'questionsPatient', label: 'Questions for the patient', placeholder: 'What still needs clarifying?' },
    { key: 'questionsProvider', label: 'Questions for provider / preceptor', placeholder: 'Collaborative practice items to confirm…' },
  ],

  COUNSELING: [
    { id: 'bp', title: 'Blood pressure', body: [
      'Your blood pressure is a bit high right now. Our goal is to get the top number under about 130 and the bottom under 80 per guidelines.',
      'Taking your pills the same time every day — like with breakfast — helps a lot. We will also avoid skipping doses.',
      'We’ll also work on checking it correctly at home so the numbers are accurate.',
    ]},
    { id: 'homebp', title: 'Home BP monitoring', body: [
      'Before you check: sit quietly for 5 minutes, feet flat, back supported, don’t cross your legs.',
      'Rest your arm on a table at heart level, and don’t talk during the reading.',
      'Avoid checking right after walking, coffee, or activity. Write down the numbers to bring in.',
    ]},
    { id: 'dm', title: 'Diabetes & A1C', body: [
      'The A1C is like an average of your sugar over the past 3 months — it’s a "big picture" number.',
      'Checking your finger-stick sugar a few mornings a week helps us see your day-to-day pattern.',
      'Small steps — less sweet tea, a little more walking — add up over time.',
    ]},
    { id: 'adherence', title: 'Medication adherence', body: [
      'Missing a couple of doses a week can make a real difference in your numbers.',
      'Let’s find a routine that sticks — like keeping pills next to something you use every morning.',
      'There’s no judgment here; tell me honestly what gets in the way so we can fix it together.',
    ]},
    { id: 'nsaid', title: 'OTC pain relievers (NSAIDs)', body: [
      'Over-the-counter ibuprofen counts as a medicine, even though you buy it without a prescription.',
      'Used often, it can raise blood pressure and stress the kidneys, especially with your BP pills.',
      'Acetaminophen (Tylenol) is usually safer for your knees — let’s talk about how much you use.',
    ]},
    { id: 'lifestyle', title: 'Lifestyle / DASH / sodium', body: [
      'A DASH-style plate — more vegetables, fruit, and whole grains, less salt — helps both BP and sugar.',
      'Restaurant food is often very salty; even small swaps help.',
      'Sweet tea has a lot of sugar — cutting back even a little can help your A1C.',
    ]},
    { id: 'statin', title: 'Statin therapy & monitoring', body: [
      'We are starting atorvastatin to lower your cholesterol and protect your heart and blood vessels.',
      'Most people take it without any trouble, but let us know right away if you notice unusual, unexplained muscle aches or soreness.',
      'We will check your cholesterol and safety labs again in 6 to 12 weeks to see how well it is working for you.',
    ]},
  ],

  PRECEPTOR: {
    keyIssues: [
      'Stage 2 hypertension (≥140/≥90) in a patient with diabetes; BP goal <130/80.',
      'T2DM with A1C 8.2% and a clear 12-month upward trend despite metformin monotherapy.',
      'No statin in a 54-year-old with diabetes (statin indication age 40–75).',
      'UACR never obtained — required in diabetes + HTN.',
      'Hidden drivers: nonadherence 2–3x/week, frequent OTC NSAID use, poor home BP technique.',
    ],
    assessment: [
      'BP is Stage 2 by AHA/ACC classification; do NOT escalate aggressively before confirming adherence and technique.',
      'A1C above individualized goal and trending up — optimize metformin (dose can increase toward 2000 mg) before assuming need for injectables.',
      'Diabetes age 40–75 supports statin initiation independent of LDL value.',
      'UACR is the missing data point and changes long-term risk stratification.',
      'NSAID use can blunt antihypertensive response and add kidney risk.',
    ],
    plan: [
      'Titrate lisinopril to 20 mg daily; continue HCTZ 12.5 mg; recheck BMP in 2–4 weeks.',
      'Titrate metformin XR toward 2000 mg daily; order UACR; SMBG 3-4x weekly.',
      'Initiate atorvastatin 20 mg daily; repeat lipid panel in 6–12 weeks.',
      'Address knee pain with acetaminophen first-line; limit ibuprofen.',
      'Set physical activity (>=150 min/wk), vegetable intake, and weight loss goals.',
      'Address overdue vaccines (PCV20, Shingrix, Tdap).',
      'Follow up in 3 months.',
    ],
    pearls: [
      'Never assume high office BP means true treatment failure until adherence and technique are verified.',
      'Patients often omit OTC NSAIDs from medication lists; always ask directly.',
      'In diabetes, statin therapy is an evidence-based quality measure, not just a response to high LDL.',
    ],
    mistakes: [
      'Adding a third antihypertensive before confirming adherence or optimizing current doses.',
      'Switching from metformin to insulin without exploring dose optimization and barriers.',
      'Failing to order a baseline UACR.',
      'Failing to recognize the statin indication.',
      'Treating the A1C number in isolation without the trend or lifestyle context.',
    ],
    followupQuestions: [
      'If you increase lisinopril, what lab do you recheck and when?',
      'How would you explain A1C to Maria in one sentence?',
      'Why does her ibuprofen use matter for both BP and kidneys?',
      'What would you say to a student who wants to "just add another BP pill" today?',
    ],
    checklist: [
      'Asked about missed doses / adherence',
      'Asked specifically about OTC / NSAIDs',
      'Asked about home BP technique',
      'Asked about home glucose values',
      'Identified missing UACR',
      'Identified statin indication',
      'Set realistic lifestyle goals',
      'Planned ~1 month follow-up',
    ],
  },

  INTERVIEW_SYSTEM_PROMPT:
    'You are Maria Gonzalez, a 54-year-old friendly, polite, cooperative woman with hypertension, type 2 diabetes, obesity, and knee arthritis. You want to be healthier but feel overwhelmed by conflicting information and sometimes minimize unhealthy habits out of embarrassment. Speak in plain, conversational, non-clinical language. Never use guideline or clinical terminology. Do NOT volunteer hidden facts (missed doses, ibuprofen use, poor BP technique, infrequent glucose checks, diet, fears) unless the student specifically asks about that topic. Keep answers short and natural.',
}


// ----------------------------------------------------------------------------
// CASE 2 — WEDNESDAY — 3-Month Ambulatory Care Follow-Up
// ----------------------------------------------------------------------------
const caseWed = {
  id: 'maria-wed',
  PATIENT: PATIENT_MASTER,
  ENCOUNTER: {
    day: 'Wednesday',
    type: '3-Month Ambulatory Care Follow-Up',
    week: 'Week 1 — Wednesday',
    length: '30-minute collaborative practice visit',
    setting: 'Collaborative Practice Ambulatory Care Pharmacy Clinic',
    difficulty: 'Intermediate APPE Student',
    difficultyTone: 'amber',
    diseaseStates: ['Hypertension', 'Type 2 Diabetes', 'Albuminuria / CKD Risk', 'Hyperlipidemia', 'Obesity', 'Cardiovascular Risk Reduction'],
    chiefConcern: "I think things are getting a little better, but I'm not sure if I'm where I need to be yet.",
    snapshotSummary:
      '3-month collaborative practice follow-up visit after medication adjustments. Focus on cardiorenal and cardiovascular risk reduction. BP improved to 136/84 mmHg, A1C improved to 7.5%, LDL-C improved to 78 mg/dL, weight reduced by 2.5 kg. UACR now available at 45 mg/g (Category A2).',
    learningObjectives: [
      'Interpret interval changes in blood pressure, A1C, lipids, and weight',
      'Classify and respond to newly resulted moderately increased albuminuria (UACR 45 mg/g, Category A2)',
      'Evaluate therapeutic momentum: decide between observation vs. pharmacologic intensification',
      'Address residual medication nonadherence and health maintenance gaps',
    ],
  },

  VITALS: {
    bp: '136/84 mmHg',
    bpRepeat: '134/82 mmHg',
    hr: '76 bpm',
    rr: '16',
    temp: '98.4 °F',
    weight: '89.5 kg',
    height: "5'4\" (64 inches)",
    bmi: '33.8 kg/m²',
    flags: { bp: 'high', bpRepeat: 'high', bmi: 'high', hr: 'normal' },
    extras: [],
  },

  LABS: [
    { label: 'A1C', value: '7.5', unit: '%', flag: 'high', note: 'Previous 8.2% (0.7% absolute reduction; improved but above goal)' },
    { label: 'Glucose', value: '142', unit: 'mg/dL', flag: 'high' },
    { label: 'Na', value: '139', unit: 'mmol/L', flag: 'normal' },
    { label: 'K', value: '4.3', unit: 'mmol/L', flag: 'normal', note: 'Serum potassium stable and normal following lisinopril 20 mg titration' },
    { label: 'Cl', value: '102', unit: 'mmol/L', flag: 'normal' },
    { label: 'CO2', value: '25', unit: 'mmol/L', flag: 'normal' },
    { label: 'BUN', value: '17', unit: 'mg/dL', flag: 'normal' },
    { label: 'SCr', value: '0.9', unit: 'mg/dL', flag: 'normal', note: 'Renal function stable and preserved following lisinopril 20 mg titration' },
    { label: 'eGFR', value: '82', unit: 'mL/min/1.73m²', flag: 'normal', note: 'eGFR 82 mL/min/1.73m² indicates adequate, preserved renal function' },
    { label: 'UACR', value: '45', unit: 'mg/g', flag: 'warn', note: 'UACR now resulted and available at 45 mg/g (previously unavailable/unobtained at initial visit). Value indicates Category A2 (moderately increased albuminuria, 30–299 mg/g), confirming early diabetic kidney involvement and increased cardiovascular risk despite preserved eGFR.' },
    { label: 'Total cholesterol', value: '158', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '160', unit: 'mg/dL', flag: 'normal' },
    { label: 'HDL-C', value: '48', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '78', unit: 'mg/dL', flag: 'normal', note: 'Prior baseline LDL-C 112 mg/dL; 30.4% reduction consistent with expected moderate-intensity statin efficacy on atorvastatin 20 mg daily' },
  ],

  ALERTS: [
    { type: 'info', text: 'UACR now resulted: 45 mg/g — Category A2 (moderately increased albuminuria). Early kidney involvement identified.' },
    { type: 'success', text: 'LDL-C improved from 112 to 78 mg/dL on atorvastatin 20 mg. A1C improved from 8.2% to 7.5%. BP improved to 134/82 mmHg.' },
  ],

  PROBLEMS: [
    { name: 'Essential hypertension', status: 'Improved but above goal' },
    { name: 'Type 2 diabetes mellitus', status: 'Improved but above goal' },
    { name: 'Moderately increased albuminuria (Category A2)', status: 'New finding / early DKD risk' },
    { name: 'Hyperlipidemia / primary ASCVD prevention', status: 'Improved on statin' },
    { name: 'Obesity (Class I)', status: 'Improving (-2.5 kg)' },
    { name: 'Medication adherence', status: 'Improved (residual evening gap)' },
    { name: 'Preventive care gaps', status: 'Immunizations due' },
  ],

  ALLERGIES: [],

  MEDICATIONS: [
    { name: 'Metformin XR', dose: '2000 mg', route: 'PO', freq: 'daily with dinner', indication: 'Type 2 diabetes' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily in morning', indication: 'Hypertension / renal protection' },
    { name: 'Hydrochlorothiazide', dose: '12.5 mg', route: 'PO', freq: 'daily in morning', indication: 'Hypertension' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'daily at bedtime', indication: 'Hyperlipidemia / primary ASCVD prevention' },
    { name: 'Acetaminophen', dose: '500 mg', route: 'PO', freq: 'PRN knee pain', indication: 'Bilateral knee osteoarthritis' },
  ],

  IMMUNIZATIONS: [
    { name: 'COVID-19', status: 'Up to date (updated booster received)' },
    { name: 'Influenza', status: 'Up to date (current season received)' },
    { name: 'PCV20 (Pneumococcal)', status: 'Not documented / indicated and due' },
    { name: 'Shingrix (Herpes Zoster)', status: 'Not documented / indicated and due (age >=50)' },
    { name: 'Tdap', status: 'Overdue (last received 11 years ago; booster recommended)' },
  ],

  SUBJECTIVE_DOCUMENTED: [
    { label: 'Reason for referral & setting', value: '3-month follow-up for diabetes and hypertension management in Collaborative Practice Ambulatory Care Pharmacy Clinic, focusing on overarching cardiorenal and cardiovascular risk reduction.' },
    { label: 'Chief Complaint (CC)', value: 'Reports feeling "a little better," but uncertain if numbers are where they need to be.' },
    { label: 'PMH', value: 'Essential hypertension (8 years), type 2 diabetes mellitus (4 years), hyperlipidemia (3 years), Obesity (Class I), and bilateral knee osteoarthritis.' },
    { label: 'Past Surgical History (PSH)', value: 'Cholecystectomy (gallbladder removal at age 41). No other surgeries.' },
    { label: 'Family History', value: 'Father: hypertension, type 2 diabetes, myocardial infarction (MI) at age 62; Mother: hypertension, type 2 diabetes, diabetic kidney disease (DKD); Brother: type 2 diabetes.' },
    { label: 'Allergies', value: 'No known drug allergies (NKDA).' },
    { label: 'General wellness & symptom review', value: 'Patient reports feeling generally well overall and acknowledges interval progress. Explicitly denies hypoglycemia symptoms (no shakiness, sweating, confusion, or lightheadedness). Tolerating current regimen well; explicitly denies medication-related adverse effects including cough (denies lisinopril cough), myalgias/muscle pain (denies statin-associated muscle symptoms), or symptomatic hypotension/dizziness.' },
    { label: 'Medication adherence & routine', value: 'Medication adherence has improved substantially: patient now misses morning doses only ~once weekly (versus 2–3 times weekly previously). If a dose is missed, it is usually the evening cholesterol pill (atorvastatin). Patient keeps morning medications by the coffee maker as an effective reminder strategy. Explicitly denies intentional nonadherence (never intentionally skips or stops pills).' },
    { label: 'Social History', value: 'Occupation: Elementary school administrative assistant. Marital/living status: Married, lives with husband. Tobacco status: Never smoker (denies any history of tobacco use). Alcohol use status: Uses alcohol (1–2 glasses of wine on weekends). Recreational drug use: Explicitly denies recreational or illicit drug use.' },
    { label: 'Diet, lifestyle & home monitoring', value: 'Walking program increased to 4 days per week for 20 minutes each (~80 minutes/week toward >=150 min/week target). Significantly reduced sugar-sweetened beverages (sweet tea down to ~once weekly). Cooking at home regularly instead of dining out. Intermittent home blood pressure monitoring (3–4 days/week) shows readings running in the 130s/80s (average ~134/82 mmHg) with appropriate measurement technique (resting first, feet flat, uncrossed legs). Home fasting blood glucose monitoring averages 130–150 mg/dL in the mornings.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular/Pulmonary/Neurologic: Explicitly denies chest pain, shortness of breath, palpitations, dizziness, syncope, lower extremity edema, severe headaches, and acute vision changes.' },
    { label: 'Pain & Over-the-counter medications', value: 'Bilateral knee osteoarthritis managed with acetaminophen 500 mg PO PRN knee pain; confirms ibuprofen was completely discontinued and avoided as instructed to protect kidney function and blood pressure.' },
    { label: 'Patient Goals & Motivators', value: 'Patient acknowledges progress and expresses satisfaction that numbers are improving, but expresses disappointment at not having lost more weight (~5 lbs / 2.5 kg lost); highly motivated for further weight loss. Remains deeply concerned about protecting kidney function linked to mother\'s history of diabetic kidney disease, though acknowledges limited understanding of urine protein / albuminuria. Open to once-weekly injectable therapy (GLP-1 receptor agonist) if beneficial for weight and glycemic control, and open to kidney-protective medications (SGLT2 inhibitor).' },
  ],

  OBJECTIVE_EXTRA: [
    { label: 'Weight change & BMI', value: 'Current weight 89.5 kg (197.3 lbs), baseline 92 kg (202.8 lbs), documenting a 2.5 kg (5.5 lb) weight loss over 3 months. BMI 33.8 kg/m² (BMI reconciled with height/weight: Class I Obesity).' },
    { label: 'Home BP corroboration', value: 'Home blood pressure log reviewed: average 134/82 mmHg with proper technique, corroborating current office BP (136/84 mmHg, repeat 134/82 mmHg; improved from initial visit 146/92 mmHg, but remaining slightly above <130/80 mmHg goal).' },
    { label: 'Glycemic comparison & trend', value: 'Current A1C 7.5%, previous baseline 8.2% (0.7% absolute reduction, demonstrating glycemic improvement on metformin XR 2000 mg titration and lifestyle modification, though remaining above the <7.0% goal). Home fasting glucose improved to 130–150 mg/dL (prior 160–180 mg/dL).' },
    { label: 'Renal function & UACR result', value: 'Urine albumin-to-creatinine ratio (UACR) now resulted and available at 45 mg/g (previously unobtained/unavailable at initial visit). Value indicates Category A2 (moderately increased albuminuria, 30–299 mg/g), confirming early diabetic kidney involvement and increased cardiovascular risk despite preserved eGFR. Renal function and potassium are stable and adequate following lisinopril 20 mg titration: SCr 0.9 mg/dL, eGFR 82 mL/min/1.73m² (preserved renal function), serum potassium 4.3 mmol/L (stable within normal limits).' },
    { label: 'Lipid panel response', value: 'Lipid panel demonstrates favorable response on atorvastatin 20 mg daily: Total cholesterol 158 mg/dL, Triglycerides 160 mg/dL, HDL-C 48 mg/dL, LDL-C 78 mg/dL (improved from baseline 112 mg/dL, representing a 30.4% reduction consistent with expected moderate-intensity statin efficacy [30–49%]).' },
    { label: 'Immunization status', value: 'COVID-19 and Influenza up to date. Gaps noted: PCV20 (pneumococcal) indicated and due; recombinant zoster vaccine (Shingrix) indicated and due (age >=50); Tdap booster overdue (last received 11 years ago).' },
  ],

  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Medication adherence', placeholder: 'Doses missed per week now…' },
    { key: 'sideEffects', label: 'Side effects / tolerability', placeholder: 'Any adverse effects with higher doses?' },
    { key: 'homeBp', label: 'Home BP readings', placeholder: 'Confirm values and technique…' },
    { key: 'glucoseMonitoring', label: 'Home glucose monitoring', placeholder: 'Typical fasting values now…' },
    { key: 'diet', label: 'Diet changes', placeholder: 'Sweet tea, cooking at home, restaurant meals…' },
    { key: 'exercise', label: 'Physical activity', placeholder: 'Frequency and duration now…' },
    { key: 'weightGoals', label: 'Weight goals & motivation', placeholder: 'How does she feel about progress?' },
    { key: 'albuminuria', label: 'Albuminuria / kidney understanding', placeholder: 'What does she understand about urine protein?' },
    { key: 'injectionPref', label: 'Injectable therapy preference', placeholder: 'Open to a once-weekly injection?' },
    { key: 'glp1', label: 'Weight-loss medication interest', placeholder: 'Interested in a med that helps weight?' },
    { key: 'concerns', label: 'Concerns & goals', placeholder: 'Kidney worries, weight, etc.' },
    { key: 'cost', label: 'Cost / access', placeholder: 'Any refill or cost barriers?' },
  ],

  GUIDING_QUESTIONS: [
    'Why did you choose to intensify therapy or not intensify therapy today?',
    'What does a UACR of 45 mg/g tell you about this patient\'s future risk?',
    'How does albuminuria change your treatment priorities?',
    'Why isn\'t a normal creatinine enough to rule out diabetic kidney disease?',
    'What therapies may become appropriate if albuminuria persists?',
    'What evidence suggests the current treatment plan is working?',
    'What additional goals remain unmet?',
    'If you only looked at today\'s numbers and ignored the trends, what mistake might you make?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'reason', topic: 'Reason for visit', field: null,
      keywords: ['why are you here', 'reason for', 'what brings', 'follow up', 'how have you been', 'since last time'],
      response: "I'm back for my 3-month check. I think things are a little better, but I'm honestly not sure I'm where I need to be yet." },
    { id: 'adherence', topic: 'Medication adherence', field: 'adherence',
      keywords: ['miss', 'forget', 'adheren', 'skip', 'take them every', 'remember', 'consistent'],
      response: "I'm doing a lot better with them! I still miss maybe once a week though. I used to miss them two or three times a week, so this is a big improvement. If I forget one, it's usually the cholesterol pill at night." },
    { id: 'currentMeds', topic: 'Medication routine', field: 'currentMeds',
      keywords: ['routine', 'how do you take', 'when do you take', 'what time', 'go over your med', 'schedule your med', 'organize'],
      response: "I take the metformin with dinner, the blood pressure ones in the morning, and the cholesterol pill at night. I keep them all by the coffee maker so I remember." },
    { id: 'sideEffects', topic: 'Side effects', field: 'sideEffects',
      keywords: ['side effect', 'bother', 'tolerate', 'cough', 'stomach', 'dizzy', 'symptoms from the med'],
      response: "No, I haven't noticed any side effects on the new doses. And like I mentioned before, the stomach issues I had with metformin years ago never came back." },
    { id: 'homeBp', topic: 'Home BP readings', field: 'homeBp',
      keywords: ['home blood pressure', 'bp at home', 'readings at home', 'check your blood pressure', 'numbers at home', 'monitor'],
      response: "At home it's been running about 134 over 82 — somewhere in the high 120s to 140 on top. I've been writing them down." },
    { id: 'bpTechnique', topic: 'BP technique', field: 'homeBp',
      keywords: ['how do you check', 'technique', 'sit when', 'cuff', 'rest before', 'cross your legs'],
      response: "I'm doing it the way you showed me now — I rest first, keep my feet flat, and I don't talk while it's going." },
    { id: 'glucoseMonitoring', topic: 'Home glucose monitoring', field: 'glucoseMonitoring',
      keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'finger stick', 'sugars at home'],
      response: "My fasting sugars are usually around 130 to 150 in the mornings now. I am checking a lot more often than I used to." },
    { id: 'diet', topic: 'Diet', field: 'diet',
      keywords: ['eat', 'diet', 'food', 'meals', 'sweet tea', 'drink', 'restaurant', 'cook', 'typical day'],
      response: "I cut the sweet tea way down — maybe once a week now. And I'm cooking at home a lot more instead of eating out." },
    { id: 'maria-wed_duration', topic: 'Disease duration', field: 'pmh',
      keywords: ['how long', 'when were you diagnosed', 'duration', 'years'],
      response: "I've had high blood pressure for about 8 years, diabetes for 4 years, and high cholesterol for 3 years." },
    { id: 'maria-wed_surg', topic: 'Surgical history', field: 'surgery',
      keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy'],
      response: 'I had my gallbladder removed when I was 41. No other surgeries.' },
    { id: 'maria-wed_fh', topic: 'Family history', field: 'familyHistory',
      keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'],
      response: "My father had high blood pressure, type 2 diabetes, and had a heart attack at age 62. My mother had high blood pressure and type 2 diabetes, and suffered from diabetic kidney disease. My brother has type 2 diabetes." },
    { id: 'maria-wed_social', topic: 'Social history', field: null,
      keywords: ['smoke', 'alcohol', 'drink', 'tobacco', 'work', 'social', 'live with', 'married', 'husband'],
      response: "I am married and I live with my husband. I don't smoke. I usually have 1 or 2 glasses of wine on the weekends." },
    { id: 'exercise', topic: 'Physical activity', field: 'exercise',
      keywords: ['exercise', 'activity', 'walk', 'active', 'move', 'workout'],
      response: "I'm walking about four days a week now, around 20 minutes each time." },
    { id: 'otc_pain', topic: 'Pain / OTC medications', field: 'otc',
      keywords: ['ibuprofen', 'motrin', 'advil', 'tylenol', 'acetaminophen', 'pain', 'knee', 'nsaid', 'otc', 'arthritis'],
      response: "I stopped taking the ibuprofen after you told me it could hurt my kidneys and blood pressure. I take acetaminophen 500 mg occasionally as needed now when my knees ache." },
    { id: 'weightGoals', topic: 'Weight goals', field: 'weightGoals',
      keywords: ['weight', 'lose weight', 'losing weight', 'goal'],
      response: "I lost a little — about 5 pounds — but honestly I'm disappointed it's not more. Losing weight is really important to me." },
    { id: 'albuminuria', topic: 'Albuminuria understanding', field: 'albuminuria',
      keywords: ['urine', 'protein', 'albumin', 'kidney test', 'uacr', 'understand your kidney'],
      response: "Protein in my urine? I don't really know what that means, to be honest." },
    { id: 'concerns', topic: 'Concerns / kidney', field: 'concerns',
      keywords: ['worry', 'worried', 'concern', 'afraid', 'scared', 'kidney', 'fear'],
      response: "My mom had kidney problems from her diabetes, so anything about my kidneys really worries me." },
    { id: 'injectionPref', topic: 'Injection preference', field: 'injectionPref',
      keywords: ['injection', 'shot', 'injectable', 'needle', 'once a week', 'weekly'],
      response: "A shot? I think that would be okay if it really helps. I'm not thrilled about needles, but I could do it." },
    { id: 'glp1', topic: 'Weight-loss medication interest', field: 'glp1',
      keywords: ['weight loss medication', 'medicine that helps you lose', 'glp', 'help with weight', 'help you lose weight'],
      response: "Oh, if there's a medicine that could help me lose weight, I'd definitely want to hear about it." },
    { id: 'sglt2', topic: 'Kidney-protective medication', field: 'glp1',
      keywords: ['kidney medicine', 'protect your kidney', 'new medication for', 'sglt', 'add a medication'],
      response: "If it protects my kidneys, I'd be open to it — that's exactly what I'm afraid of." },
    { id: 'cost', topic: 'Cost / access', field: 'cost',
      keywords: ['cost', 'afford', 'insurance', 'pay', 'refill', 'expensive'],
      response: "No, I haven't had any trouble with refills or cost." },
    { id: 'followup', topic: 'Follow-up', field: null,
      keywords: ['follow up', 'come back', 'next visit', 'schedule'],
      response: "Whatever you think is best — I can come back when you need me to." },
  ],

  ASSESSMENT_CARDS: [
    {
      id: 'htn',
      title: 'Essential hypertension',
      icon: 'HeartPulse',
      color: '13314f',
      questions: [
        {
          key: 'htn_eval',
          q: 'Blood pressure status, goal, and contributing factors:',
          defaultAnswer: 'Status: Improved but above goal (office BP 136/84 mmHg, repeat 134/82 mmHg; home average ~134/82 mmHg corroborates office findings; improved from baseline 146/92 mmHg). Goal: <130/80 mmHg per 2025 AHA/ACC Hypertension Guideline. Blood pressure improvement is directly attributed to lisinopril dose escalation to 20 mg daily, improved medication adherence (~once weekly missed dose vs. 2–3 times weekly previously), improved measurement technique (resting prior, feet flat, uncrossed legs), regular physical activity (walking 4 days/week), and dietary sodium reduction (reduced restaurant meals and sweet tea). Renal function (SCr 0.9 mg/dL, eGFR 82 mL/min/1.73m²) and serum potassium (4.3 mmol/L) remain completely stable following ACE inhibitor uptitration. The newly identified presence of persistent albuminuria (UACR 45 mg/g) strongly reinforces the critical need for strict blood pressure optimization (<130/80 mmHg) to slow kidney disease progression. Given significant recent improvement and active adherence/lifestyle momentum, it is clinically justified to continue observation and hold immediate pharmacologic escalation, reassessing control at the next encounter.'
        }
      ]
    },
    {
      id: 't2dm',
      title: 'Type 2 diabetes mellitus',
      icon: 'Droplet',
      color: '0d9488',
      questions: [
        {
          key: 'dm_eval',
          q: 'Glycemic status, goal, and contributing factors:',
          defaultAnswer: 'Status: Improved but above goal (A1C decreased from 8.2% to 7.5%, a 0.7% absolute reduction; home fasting blood glucose improved from 160–180 mg/dL to 130–150 mg/dL). Goal: <7.0% per ADA 2026 Standards of Care. Improvement is directly attributed to metformin XR dose optimization to 2000 mg daily, improved medication adherence, substantial reduction in sugar-sweetened beverages (sweet tea), increased walking, and modest weight loss (2.5 kg). Metformin XR 2000 mg daily is well tolerated with no GI side effects, and renal function is entirely adequate (eGFR 82 mL/min/1.73m²). Multiple factors support consideration of future therapy intensification (GLP-1 receptor agonist or SGLT2 inhibitor) if goals remain unmet at next visit: persistent glycemic elevation above target (A1C 7.5% vs <7.0%), Class I obesity (BMI 33.8 kg/m²), newly recognized albuminuria (UACR 45 mg/g), and elevated lifetime cardiovascular risk. Clinician rationale explicitly links GLP-1 RA and SGLT2i to dual cardiorenal and metabolic benefit domains: glycemic reduction, sustainable weight loss, and proven renal and cardiovascular protection.'
        }
      ]
    },
    {
      id: 'kidney',
      title: 'Moderately increased albuminuria / early DKD risk',
      icon: 'FlaskConical',
      color: '0891b2',
      questions: [
        {
          key: 'kid_eval',
          q: 'UACR interpretation, cardiorenal implications, and therapeutic strategy:',
          defaultAnswer: 'Status: UACR now resulted and available at 45 mg/g (previously unobtained at intake visit), confirming Category A2 (moderately increased albuminuria, 30–299 mg/g). This finding demonstrates early diabetic kidney involvement despite preserved eGFR (82 mL/min/1.73m²) and normal serum creatinine (0.9 mg/dL). Persistent albuminuria carries substantial long-term risks of chronic kidney disease progression to kidney failure as well as significantly increased cardiovascular event risk. Confirms the essential indication for continuing ACE inhibitor therapy (lisinopril 20 mg daily) for renal and cardiorenal protection. Explicitly links the elevated UACR finding to future SGLT2 inhibitor consideration, which provides proven nephroprotective and cardiorenal benefit independent of glycemic control per ADA and KDIGO guidelines. Highlights the increasing importance of strict blood pressure control (<130/80 mmHg) and identifies a clear need for patient education regarding albuminuria, kidney preservation, and avoiding OTC NSAIDs.'
        }
      ]
    },
    {
      id: 'lipid',
      title: 'Hyperlipidemia / primary ASCVD prevention',
      icon: 'ShieldAlert',
      color: 'd97706',
      questions: [
        {
          key: 'lip_eval',
          q: 'Lipid response, efficacy assessment, and cardiovascular risk:',
          defaultAnswer: 'Status: Improved on atorvastatin 20 mg daily (LDL-C decreased from baseline 112 mg/dL to 78 mg/dL, representing a 30.4% reduction consistent with expected moderate-intensity statin efficacy [30–49% reduction]). The patient remains at elevated long-term cardiovascular risk despite the absence of established clinical ASCVD due to multiple contributing risk factors: type 2 diabetes mellitus, essential hypertension, obesity, persistent albuminuria (A2), and a strong family history of premature CAD (father MI at age 62). Therapy is well tolerated without myalgias or muscle symptoms.'
        }
      ]
    },
    {
      id: 'obesity',
      title: 'Obesity (Class I, BMI 33.8 kg/m²)',
      icon: 'Scale',
      color: '4f46e5',
      questions: [
        {
          key: 'obe_eval',
          q: 'Obesity status, weight trajectory, and cardiometabolic impact:',
          defaultAnswer: 'Status: Improving. Weight reduced by 2.5 kg (from 92 kg to 89.5 kg; BMI 34.8 to 33.8 kg/m²). This weight loss directly contributed to the observed improvements in blood pressure and glycemic control. However, Class I obesity continues to contribute to ongoing cardiometabolic and cardiorenal risk, and continued lifestyle intervention is strongly warranted. The patient expresses disappointment at the modest loss but remains highly motivated for further weight loss and receptive to weight-beneficial pharmacotherapy.'
        }
      ]
    },
    {
      id: 'adherence',
      title: 'Medication adherence (improved with residual gap)',
      icon: 'CheckCircle',
      color: '10b981',
      questions: [
        {
          key: 'adh_eval',
          q: 'Adherence pattern, impact, and counseling need:',
          defaultAnswer: 'Status: Substantially improved from 2–3 missed doses weekly to approximately once weekly. This improvement directly underlies the observed clinical gains in BP and A1C. However, residual nonadherence remains present (predominantly the evening atorvastatin dose), which contributes to persistent blood pressure and glycemic elevations above target. Clinicians must avoid labeling current therapy ineffective before fully optimizing adherence; continued adherence counseling, reminder strategies, and evening dosing routines are warranted.'
        }
      ]
    },
    {
      id: 'preventive',
      title: 'Preventive care gaps & health maintenance',
      icon: 'ShieldPlus',
      color: '8b5cf6',
      questions: [
        {
          key: 'prev_eval',
          q: 'Immunization gaps and health maintenance needs:',
          defaultAnswer: 'Status: Incomplete immunizations. Pneumococcal conjugate vaccination (PCV20) is indicated for adults with diabetes mellitus; recombinant zoster vaccine (Shingrix 2-dose series) is indicated for adults >=50 years; Tdap booster is overdue (11 years since last tetanus immunization). Recommend addressing preventive care gaps at this visit or scheduling for near-term follow-up.'
        }
      ]
    },
  ],

  PLAN_SECTIONS: [
    {
      id: 'htn_plan',
      title: 'Hypertension plan',
      options: [
        { key: 'h1', label: 'Continue lisinopril 20 mg PO daily in the morning', correct: true },
        { key: 'h2', label: 'Continue hydrochlorothiazide 12.5 mg PO daily in the morning', correct: true },
        { key: 'h3', label: 'Reinforce medication adherence strategies under the hypertension plan', correct: true },
        { key: 'h4', label: 'Reinforce home blood pressure monitoring 3–4 times weekly with a written log', correct: true },
        { key: 'h5', label: 'Hold immediate pharmacologic escalation today to observe full response to recent titration and lifestyle modifications', correct: true },
        { key: 'h6', label: 'Condition future antihypertensive intensification on blood pressure remaining above target (<130/80 mmHg) at next visit', correct: true },
        { key: 'h7', label: 'Provide dietary sodium reduction counseling (DASH diet principles, <2,000 mg/day)', correct: true },
      ]
    },
    {
      id: 'dm_plan',
      title: 'Diabetes plan',
      options: [
        { key: 'd1', label: 'Continue metformin XR 2000 mg PO daily with dinner', correct: true },
        { key: 'd2', label: 'Continue self-monitoring of blood glucose (SMBG) 3–4 times weekly fasting', correct: true },
        { key: 'd3', label: 'Repeat A1C in ~3 months to assess trajectory toward <7.0% goal', correct: true },
        { key: 'd4', label: 'Condition future add-on therapy (GLP-1 RA or SGLT2 inhibitor) on unmet glycemic goals (A1C >7.0% at next visit), ongoing Class I obesity (BMI 33.8), and persistent cardiorenal risk', correct: true },
      ]
    },
    {
      id: 'kidney_plan',
      title: 'Albuminuria & diabetic kidney disease risk plan',
      options: [
        { key: 'k1', label: 'Continue lisinopril 20 mg PO daily for renal and cardiorenal protection', correct: true },
        { key: 'k2', label: 'Educate patient regarding albuminuria, early kidney involvement, and the protective role of ACE inhibitors and BP control', correct: true },
        { key: 'k3', label: 'Repeat UACR annually or sooner (in 6–12 months) to confirm and track albuminuria trajectory', correct: true },
        { key: 'k4', label: 'Consider future initiation of an SGLT2 inhibitor (empagliflozin or dapagliflozin) for kidney and cardiovascular protection if albuminuria persists (UACR >=30 mg/g)', correct: true },
      ]
    },
    {
      id: 'lipid_plan',
      title: 'Lipid & primary ASCVD prevention plan',
      options: [
        { key: 'l1', label: 'Continue atorvastatin 20 mg PO daily at bedtime', correct: true },
        { key: 'l2', label: 'Reinforce medication adherence specifically for lipid therapy (evening dosing strategies)', correct: true },
        { key: 'l3', label: 'Repeat lipid panel in ~6–12 months to monitor long-term efficacy and adherence', correct: true },
      ]
    },
    {
      id: 'life_plan',
      title: 'Lifestyle & weight management plan',
      options: [
        { key: 'lf1', label: 'Continue regular walking program progressing toward >=150 minutes/week moderate activity', correct: true },
        { key: 'lf2', label: 'Continue reduction in sugar-sweetened beverages (sweet tea) and restaurant meal frequency', correct: true },
        { key: 'lf3', label: 'Encourage further weight loss via balanced nutrition and activity', correct: true },
        { key: 'lf4', label: 'Explicitly tie continued weight loss and lifestyle modifications to blood pressure and glycemic benefits', correct: true },
      ]
    },
    {
      id: 'adh_plan',
      title: 'Medication adherence optimization plan',
      options: [
        { key: 'a1', label: 'Continue established reminder strategies (pill placement by coffee maker for morning medications)', correct: true },
        { key: 'a2', label: 'Recommend a medication organizer (pill box) if missed doses persist', correct: true },
        { key: 'a3', label: 'Discuss reminder strategies for evening medications (focusing on atorvastatin at bedtime, e.g., toothbrush pairing)', correct: true },
      ]
    },
    {
      id: 'imm_plan',
      title: 'Preventive care & immunization plan',
      options: [
        { key: 'i1', label: 'Verify vaccination history in state registry', correct: true },
        { key: 'i2', label: 'Recommend pneumococcal conjugate vaccination (PCV20) for adult with diabetes mellitus', correct: true },
        { key: 'i3', label: 'Recommend recombinant zoster vaccine (Shingrix 2-dose series) for adult >=50 years', correct: true },
        { key: 'i4', label: 'Recommend Tdap booster vaccination given 11-year interval since last tetanus toxoid dose', correct: true },
      ]
    },
    {
      id: 'fu_plan',
      title: 'Follow-up & monitoring plan',
      options: [
        { key: 'f1', label: 'Follow up in 3 months for collaborative ambulatory care visit', correct: true },
        { key: 'f2', label: 'Obtain repeat A1C prior to next encounter', correct: true },
        { key: 'f3', label: 'Obtain repeat BMP (serum creatinine, eGFR, potassium) prior to next visit', correct: true },
        { key: 'f4', label: 'Explicitly review home blood pressure log and measurement technique at next visit', correct: true },
        { key: 'f5', label: 'Explicitly review medication adherence patterns at the follow-up visit', correct: true },
        { key: 'f6', label: 'Review lifestyle progress, dietary habits, and weight trajectory toward goals at next encounter', correct: true },
        { key: 'f7', label: 'Reassess need for therapy intensification (GLP-1 RA or SGLT2i) if A1C or BP remain above goal', correct: true },
        { key: 'f8', label: 'Monitor response and tolerability of current pharmacotherapy regimen', correct: true },
      ]
    },
  ],

  PLAN_FREETEXT: [
    { key: 'patientEducation', label: 'Patient education plan', placeholder: 'Explain albuminuria, new agents, expected benefits…' },
    { key: 'followUp', label: 'Follow-up plan', placeholder: 'Timing and what to recheck…' },
    { key: 'questionsPatient', label: 'Questions for the patient', placeholder: 'Preferences, barriers to clarify…' },
    { key: 'questionsProvider', label: 'Questions for provider / preceptor', placeholder: 'Agent selection, formulary, etc.' },
  ],

  COUNSELING: [
    { id: 'kidney', title: 'Kidney protection / albuminuria', body: [
      'A urine test showed a small amount of protein leaking — an early sign your kidneys need extra protection.',
      'The good news: we have medicines that protect the kidneys, and your BP pill already helps.',
      'Keeping blood pressure and sugar in range, and avoiding frequent ibuprofen, all protect your kidneys.',
    ]},
    { id: 'sglt2', title: 'SGLT2 inhibitor', body: [
      'This is a once-daily pill that lowers sugar and also protects the kidneys and heart.',
      'It can cause more urination at first and a small risk of yeast/urinary infections — keep the area clean and stay hydrated.',
      'Tell us about any genital itching, or if you feel unwell or stop eating — rare but important.',
    ]},
    { id: 'glp1', title: 'GLP-1 receptor agonist', body: [
      'This is usually a once-weekly injection that lowers sugar and often helps with weight.',
      'Nausea is common at first and usually improves; we start low and go slow.',
      'Many people find the pen easy to use — we’ll practice together.',
    ]},
    { id: 'adherence', title: 'Medication adherence', body: [
      'You’ve made real progress keeping pills by the coffee maker — that’s a great system.',
      'The cholesterol pill at night is the one you miss most; let’s pair it with something you always do at night.',
    ]},
    { id: 'lifestyle', title: 'Lifestyle progress', body: [
      'Cutting sweet tea and cooking at home are exactly the changes that move your numbers.',
      'Four walks a week is great — let’s build slowly from there.',
    ]},
  ],

  PRECEPTOR: {
    keyIssues: [
      'Partial but real response: A1C 8.2→7.5%, BP 146/92→134/82, −2.5 kg.',
      'NEW UACR 45 mg/g = moderately increased albuminuria (A2) with normal eGFR.',
      'Decision point: SGLT2 inhibitor (cardiorenal) and/or GLP-1 RA (glycemia + weight, ASCVD).',
      'Statin working (LDL 78) — continue.',
      'Adherence improved (misses ~weekly, usually the statin); technique now appropriate.',
    ],
    assessment: [
      'Do not label partial improvement as treatment failure; reinforce and build on it.',
      'Albuminuria shifts the priority toward kidney protection independent of A1C.',
      'SGLT2 inhibitors provide kidney/HF/CV benefit; strongly relevant with A2 albuminuria.',
      'GLP-1 RA aligns with weight loss, glycemic improvement, and ASCVD risk reduction; she is open to injection.',
      'Continue ACE inhibitor; monitor SCr and potassium after titration.',
    ],
    plan: [
      'Continue metformin 2000 mg; add SGLT2 inhibitor for cardiorenal protection.',
      'Consider GLP-1 RA given weight goals and openness to once-weekly injection.',
      'Continue lisinopril + atorvastatin; reinforce adherence and lifestyle wins.',
      'Recheck BMP and UACR; A1C in ~3 months; follow up ~3 months.',
      'Counsel on new agent(s); address pneumococcal/Tdap/Shingrix gaps.',
    ],
    pearls: [
      'A2 albuminuria with normal eGFR still signals meaningful kidney risk.',
      'Cardiorenal protection can drive agent choice independent of the A1C value.',
      'Match the agent to the patient’s stated goals (weight) and preferences (injection ok).',
      'Reframe "only 2.5 kg" as durable, encouraging progress.',
    ],
    mistakes: [
      'Treating partial response as failure and over-escalating.',
      'Ignoring the new albuminuria.',
      'Choosing therapy on A1C alone, missing SGLT2/GLP-1 cardiorenal value.',
      'Stopping the ACE inhibitor or the statin inappropriately.',
      'Not asking about injectable preference before assuming barriers.',
    ],
    followupQuestions: [
      'Why does UACR 45 change your plan even with a normal eGFR?',
      'How would you choose between an SGLT2 inhibitor and a GLP-1 RA here?',
      'What do you monitor after adding an SGLT2 inhibitor?',
      'How do you keep Maria motivated about her weight progress?',
    ],
    checklist: [
      'Recognized partial (not failed) response',
      'Identified new albuminuria and its implications',
      'Considered SGLT2 inhibitor for cardiorenal protection',
      'Considered GLP-1 RA aligned to weight goals',
      'Confirmed injectable preference before deciding',
      'Continued ACEi + statin appropriately',
      'Planned renal monitoring + UACR recheck',
      'Reinforced lifestyle and adherence gains',
    ],
  },

  INTERVIEW_SYSTEM_PROMPT:
    'You are Maria Gonzalez at a 3-month follow-up. You feel cautiously encouraged but unsure if you are "where you need to be." You are friendly and cooperative. Speak plainly, never clinically. Do NOT volunteer hidden details (which med you miss, exact home values, diet changes, weight feelings, kidney understanding, injection preference) unless specifically asked. You are motivated by weight loss and frightened about your kidneys because of your mother. Keep answers short and natural.',
}


const caseThu = {
  id: 'maria-thu',
  PATIENT: PATIENT_MASTER,
  ENCOUNTER: {
    day: 'Thursday',
    type: '6-Month Follow-Up',
    week: 'Week 1 — Thursday',
    length: '30-minute collaborative practice visit',
    difficulty: 'Advanced APPE Student',
    difficultyTone: 'red',
    setting: 'Collaborative Practice Ambulatory Care Pharmacy Clinic',
    diseaseStates: [
      'Moderately increased albuminuria / CKD risk',
      'Type 2 Diabetes Mellitus',
      'Essential Hypertension',
      'Hyperlipidemia / Primary ASCVD Prevention',
      'Class I Obesity',
      'Preventive care gaps'
    ],
    chiefConcern: 'My numbers are getting better, but I want to know what else I can do to stay healthy long-term.',
    snapshotSummary:
      '54-year-old female presenting for scheduled 6-month follow-up (final follow-up) in an ambulatory care pharmacy clinic under collaborative practice agreement for management of hypertension, type 2 diabetes mellitus, hyperlipidemia, obesity, and persistent moderately increased albuminuria with focus on long-term cardiorenal risk reduction.',
    learningObjectives: [
      'Prioritize long-term cardiorenal/ASCVD risk reduction beyond A1C',
      'Recognize persistent albuminuria despite good BP and ACEi therapy',
      'Make a guideline-based case for SGLT2 inhibitor and/or GLP-1 RA',
      'Correct the misconception that normal eGFR means healthy kidneys',
      'Close preventive-care gaps (PCV, Shingrix, Tdap)',
    ],
    priorChanges: [
      'BP improved to 136/84 at prior visit; A1C to 7.5%',
      'UACR 45 mg/g identified; LDL to 78 on statin',
      'Weight loss achieved; adherence and technique improved',
    ],
  },

  VITALS: {
    bp: '126/78 mmHg', bpRepeat: '128/78 mmHg', hr: '74 bpm', rr: '16',
    temp: '98.3 °F', weight: '86.5 kg', height: `5'4\" (64 inches)`, bmi: '32.7 kg/m²',
    flags: { bp: 'normal', bpRepeat: 'normal', bmi: 'warn', hr: 'normal' },
    extras: [
      { label: 'Weight change', value: '−5.5 kg total weight reduction since initial visit (baseline 92 kg to current 86.5 kg)', flag: 'normal' },
      { label: 'Home BP average', value: '126/77 mmHg (corroborates office BP, at goal <130/80 mmHg)', flag: 'normal' },
      { label: 'Fasting home glucose', value: '115–135 mg/dL', flag: 'normal' },
    ],
  },

  LABS: [
    { label: 'A1C', value: '7.1', unit: '%', flag: 'warn', note: 'Prior 7.5% at 3 months; baseline 8.2% — downward trend: 8.2% → 7.5% → 7.1%' },
    { label: 'Na', value: '139', unit: 'mmol/L', flag: 'normal' },
    { label: 'K', value: '4.5', unit: 'mmol/L', flag: 'normal', note: 'Potassium stable on lisinopril 20 mg + HCTZ 12.5 mg' },
    { label: 'SCr', value: '0.92', unit: 'mg/dL', flag: 'normal', note: 'Stable and preserved renal function' },
    { label: 'eGFR', value: '76', unit: 'mL/min/1.73m²', flag: 'normal', note: 'Stable and preserved renal function' },
    { label: 'UACR', value: '38', unit: 'mg/g', flag: 'warn', note: 'Prior 45 mg/g — persistent moderately increased albuminuria (Category A2, 30–300 mg/g)' },
    { label: 'Total cholesterol', value: '158', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '70', unit: 'mg/dL', flag: 'normal', note: 'Prior baseline 112 mg/dL — sustained statin response and lipid control on atorvastatin 20 mg daily' },
    { label: 'HDL-C', value: '48', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '155', unit: 'mg/dL', flag: 'warn' },
  ],

  ALERTS: [
    { level: 'warn', text: 'Persistent albuminuria (UACR 38 mg/g) despite at-goal BP and ACE inhibitor therapy.' },
    { level: 'info', text: 'Normal eGFR does NOT eliminate kidney risk — long-term protection still indicated.' },
    { level: 'info', text: 'SGLT2 inhibitor (kidney/CV) and GLP-1 RA (weight/glycemia/CV) remain highly relevant.' },
    { level: 'warn', text: 'Preventive gaps persist: pneumococcal, Shingrix, and Tdap not completed.' },
  ],

  PROBLEMS: [
    { name: 'Moderately increased albuminuria', detail: 'UACR 38 mg/g (persistent Category A2)', flag: 'warn' },
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 7.1% (downward trend: 8.2% → 7.5% → 7.1%, near goal <7%)', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP 126/78 (repeat 128/78, home 126/77) — controlled and at goal <130/80', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'LDL 70 (prior baseline 112) on atorvastatin — controlled', flag: 'normal' },
    { name: 'Class I Obesity', detail: 'BMI 32.7 (−5.5 kg total weight loss from baseline 92 kg)', flag: 'warn' },
    { name: 'Bilateral knee osteoarthritis', detail: 'Chronic, stable on PRN acetaminophen', flag: 'normal' },
  ],

  ALLERGIES: [{ substance: 'No known drug allergies (NKDA)', reaction: '—' }],

  MEDICATIONS: [
    { name: 'Metformin XR', dose: '2000 mg', route: 'PO', freq: 'once daily with dinner', indication: 'Type 2 diabetes', notes: 'Well tolerated' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'once daily', indication: 'HTN / kidney protection', notes: 'Well tolerated, K stable' },
    { name: 'Hydrochlorothiazide', dose: '12.5 mg', route: 'PO', freq: 'once daily', indication: 'Hypertension', notes: 'Well tolerated' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'once daily at bedtime', indication: 'ASCVD prevention / dyslipidemia', notes: 'Well tolerated without myalgias' },
    { name: 'Acetaminophen', dose: '500 mg', route: 'PO', freq: 'PRN pain', indication: 'Knee OA', notes: '' },
  ],

  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Current season up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date with current booster', flag: 'normal' },
    { name: 'Pneumococcal (PCV20)', status: 'Still not completed — indicated for diabetes age 19-64', flag: 'missing' },
    { name: 'Zoster (Shingrix series)', status: 'Still not completed — 2-dose series indicated age >=50', flag: 'missing' },
    { name: 'Tdap booster', status: 'Still overdue (>10-year booster interval)', flag: 'warn' },
  ],

  SUBJECTIVE_DOCUMENTED: [
    { label: 'Reason for visit & setting', value: 'Scheduled 6-month follow-up (final follow-up) in an ambulatory care pharmacy clinic under a collaborative practice agreement for comprehensive cardiorenal risk reduction and chronic disease management.' },
    { label: 'Past Medical History (PMH)', value: 'Hypertension (diagnosed 8 years ago), Type 2 diabetes mellitus (diagnosed 6 years ago), Hyperlipidemia (diagnosed 5 years ago), Class I Obesity (BMI 32.7 kg/m²), Moderately increased albuminuria (Category A2, persistent on UACR), and Bilateral knee osteoarthritis.' },
    { label: 'Social History', value: 'Occupation: Elementary school administrative assistant. Marital/living status: Married, lives with husband. Tobacco status: Never smoker (states never smoked in her life). Alcohol use: 1 to 2 glasses of wine on weekends. Recreational drug use: Explicitly denies recreational or illicit drug use.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular/Pulmonary/Neurologic/GI: Explicitly denies syncope, chest pain, shortness of breath, palpitations, dizziness, severe headaches, visual changes, and lower extremity edema. Explicitly denies gastrointestinal intolerance (no nausea, vomiting, diarrhea, constipation, or abdominal pain). Denies hypoglycemia symptoms. Denies myalgias or muscle weakness on statin therapy.' },
    { label: 'Patient Sentiment & Misconception', value: 'Patient is pleased with improved numbers but senses she may be "done" or cured; mistakenly believes that her normal kidney blood test results mean her kidneys are completely healthy; frightened about kidney disease due to her mother suffering from diabetic kidney disease.' },
    { label: 'Patient Goals & Motivations', value: 'Motivated for further weight loss and explicitly open to once-weekly injection therapy (GLP-1 RA); primary motivation is long-term kidney protection and avoiding dialysis.' },
    { label: 'Lifestyle improvements', value: 'Walking 30 minutes 5 days per week (durable routine); eliminated sweet tea completely; cooking most meals at home with portion control.' },
    { label: 'Medication Adherence', value: 'Reports excellent adherence with zero missed doses in the past month using her established morning coffee maker placement and evening reminder routine, noting the routine has become much easier to maintain.' },
    { label: 'Home Blood Glucose Monitoring', value: 'Self-monitored fasting blood glucose readings run between 115 and 135 mg/dL.' },
  ],

  OBJECTIVE_EXTRA: [
    { label: 'Total weight reduction', value: 'Current weight 86.5 kg (−5.5 kg total weight reduction since initial visit from baseline 92 kg; BMI 32.7 kg/m², reconciled as Class I Obesity).' },
    { label: 'A1C downward trend', value: 'A1C downward trend across three time points: baseline 8.2% → 3-month 7.5% → 6-month 7.1% (approaching individualized goal <7.0%).' },
    { label: 'BP longitudinal trend', value: 'Baseline 148/92 mmHg → 3-month 136/84 mmHg → 6-month 126/78 mmHg (repeat 128/78 mmHg); home BP average 126/77 mmHg corroborates office readings and achieves goal <130/80 mmHg.' },
    { label: 'UACR interpretation', value: 'UACR improved from baseline 45 mg/g to 38 mg/g but remains persistent in the moderately increased range (Category A2, 30–300 mg/g).' },
    { label: 'Renal & Electrolyte stability', value: 'SCr 0.92 mg/dL, eGFR 76 mL/min/1.73m² (stable and preserved renal function); serum potassium 4.5 mmol/L (stable on lisinopril 20 mg + HCTZ 12.5 mg without hyperkalemia or renal dysfunction).' },
    { label: 'Lipid panel response', value: 'LDL-C improved from baseline 112 mg/dL to 70 mg/dL, demonstrating sustained statin response and lipid control on atorvastatin 20 mg daily.' },
    { label: 'Preventive care gaps', value: 'Pneumococcal conjugate vaccine (PCV20), recombinant zoster vaccine series (Shingrix), and Tdap booster remain open per CDC Adult Immunization Schedule.' },
  ],

  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Medication adherence', placeholder: 'How consistent is she now?' },
    { key: 'weightGoals', label: 'Weight goals & motivation', placeholder: 'Wants more weight loss? Open to therapy?' },
    { key: 'injectionPref', label: 'Injectable therapy preference', placeholder: 'Comfort with once-weekly injection…' },
    { key: 'albuminuria', label: 'Albuminuria / kidney understanding', placeholder: 'Does she think normal SCr = healthy kidneys?' },
    { key: 'diseaseUnderstanding', label: 'Overall disease understanding', placeholder: 'Does she think diabetes is "almost cured"?' },
    { key: 'exercise', label: 'Physical activity', placeholder: 'Frequency/duration now…' },
    { key: 'diet', label: 'Diet', placeholder: 'Sweet tea, restaurant meals now…' },
    { key: 'symptoms', label: 'Symptoms / side effects', placeholder: 'Hypoglycemia, CP, dyspnea, edema, dizziness?' },
    { key: 'glp1', label: 'GLP-1 / weight-med interest', placeholder: 'Interested in weight-loss medication?' },
    { key: 'concerns', label: 'Concerns & long-term goals', placeholder: 'What does "staying healthy long-term" mean to her?' },
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'reason', topic: 'Reason for visit', field: null,
      keywords: ['why are you here', 'reason for', 'what brings', 'follow up', 'how have you been', 'today'],
      response: "My numbers are getting better, and I'm really happy about that. I want to know what else I can do to stay healthy for the long run." },
    { id: 'adherence', topic: 'Medication adherence', field: 'adherence',
      keywords: ['miss', 'forget', 'adheren', 'skip', 'take them every', 'remember', 'consistent'],
      response: "I almost never miss anymore — the routine with my coffee maker and evening reminders has become so much easier to maintain, with zero missed doses in the past month." },
    { id: 'homebg', topic: 'Home glucose monitoring', field: 'glucoseMonitoring',
      keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'meter', 'finger stick', 'readings', 'numbers', 'home readings', 'range'],
      response: "I check my blood sugar a few times a week with my meter. My morning fasting readings have been running between 115 and 135 mg/dL." },
    { id: 'weightGoals', topic: 'Weight goals', field: 'weightGoals',
      keywords: ['weight', 'lose weight', 'losing weight', 'goal'],
      response: "I'm happy with losing 5.5 kg so far, but I'd still like to lose more. I'd really consider a medicine that helps with weight loss." },
    { id: 'injectionPref', topic: 'Injection preference', field: 'injectionPref',
      keywords: ['injection', 'shot', 'injectable', 'needle', 'once a week', 'weekly'],
      response: "A weekly shot wouldn't bother me at all if it helps. I'm past being scared of needles." },
    { id: 'glp1', topic: 'Weight-loss medication interest', field: 'glp1',
      keywords: ['weight loss medication', 'medicine that helps you lose', 'glp', 'help with weight', 'help you lose weight'],
      response: "Yes — if there's a medicine that helps with weight and is good for me, I want to talk about it." },
    { id: 'albuminuria', topic: 'Albuminuria understanding', field: 'albuminuria',
      keywords: ['urine', 'protein', 'albumin', 'kidney test', 'uacr', 'understand your kidney'],
      response: "Protein in my urine? I don't really understand that. But my kidney blood test was normal, so I figured my kidneys are fine." },
    { id: 'diseaseUnderstanding', topic: 'Disease understanding', field: 'diseaseUnderstanding',
      keywords: ['understand', 'how do you feel about your diabetes', 'think your diabetes', 'controlled', 'cured', 'almost'],
      response: "Honestly, I kind of feel like my diabetes is almost taken care of now, since my numbers are so much better." },
    { id: 'exercise', topic: 'Physical activity', field: 'exercise',
      keywords: ['exercise', 'activity', 'walk', 'active', 'move', 'workout'],
      response: "I'm walking five days a week now, about 30 minutes each time. It's become a habit." },
    { id: 'diet', topic: 'Diet', field: 'diet',
      keywords: ['eat', 'diet', 'food', 'meals', 'sweet tea', 'drink', 'restaurant', 'cook'],
      response: "I quit the sweet tea completely, and I hardly ever eat out anymore. I cook most of my meals now." },
    { id: 'maria-thu_surg', topic: 'Surgical history', field: 'surgery',
      keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy'],
      response: 'I had my gallbladder removed when I was 41. No other surgeries.' },
    { id: 'maria-thu_fh', topic: 'Family history', field: 'familyHistory',
      keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'],
      response: "My father had high blood pressure, type 2 diabetes, and had a heart attack at age 62. My mother had high blood pressure and type 2 diabetes, and suffered from diabetic kidney disease. My brother has type 2 diabetes." },
    { id: 'maria-thu_social', topic: 'Social history', field: null,
      keywords: ['smoke', 'alcohol', 'drink', 'tobacco', 'work', 'social', 'live with', 'married', 'husband', 'occupation'],
      response: "I work as an elementary school administrative assistant. I am married and I live with my husband. I am a never smoker and have never smoked in my life. I have never used recreational or illicit drugs. I usually have 1 or 2 glasses of wine on the weekends." },
    { id: 'symptoms', topic: 'Symptoms / side effects', field: 'symptoms',
      keywords: ['symptom', 'how do you feel', 'chest pain', 'dizzy', 'short of breath', 'swelling', 'edema', 'low sugar', 'hypoglycemia', 'side effect', 'lightheaded', 'faint', 'syncope', 'headache', 'vision', 'nausea', 'vomit', 'diarrhea', 'constipation', 'muscle', 'myalgia'],
      response: "No, nothing like that — no syncope, no shortness of breath, no chest pain, no heart palpitations, no dizziness, no severe headaches, no vision changes, and no leg swelling. I have had no low blood sugars, no stomach problems like nausea or diarrhea, and no muscle aches or pain from my statin. I feel good." },
    { id: 'concerns', topic: 'Concerns / long-term goals', field: 'concerns',
      keywords: ['worry', 'worried', 'concern', 'afraid', 'kidney', 'long term', 'future', 'healthy', 'goals'],
      response: "I just want to stay healthy and avoid what happened to my mom with her kidneys. Tell me what else I can do." },
    { id: 'cost', topic: 'Cost / access', field: null,
      keywords: ['cost', 'afford', 'insurance', 'pay', 'refill', 'expensive'],
      response: "No cost or refill problems for me." },
    { id: 'followup', topic: 'Follow-up', field: null,
      keywords: ['follow up', 'come back', 'next visit', 'schedule'],
      response: "Sure — I'll come back whenever you'd like." },
  ],

  ASSESSMENT_CARDS: [
    {
      id: 'albuminuria_ckd',
      title: 'Moderately increased albuminuria / CKD risk',
      icon: 'FlaskConical',
      color: '0891b2',
      questions: [
        {
          key: 'kid_eval',
          q: 'Persistent albuminuria interpretation, clinical significance, and renoprotective rationale:',
          defaultAnswer: 'Status: Persistent moderately increased albuminuria (Category A2). UACR improved from baseline 45 mg/g to 38 mg/g (Category A2, 30–300 mg/g). Persistent albuminuria indicates ongoing renal injury (glomerular and microvascular endothelial damage). Albuminuria independently predicts CKD progression and predicts adverse cardiovascular events. Preserved eGFR (76 mL/min/1.73m²) and normal serum creatinine (0.92 mg/dL) do NOT indicate absence of kidney risk, as early diabetic kidney disease characteristically manifests with preserved filtration despite active structural nephropathy. SGLT2 inhibitors provide proven kidney and cardiovascular protection independent of glycemic control or baseline A1C per ADA 2026 Standards of Care and KDIGO guidelines. Continued ACE inhibitor therapy (lisinopril 20 mg daily) remains essential for intraglomerular pressure reduction.'
        }
      ]
    },
    {
      id: 't2dm',
      title: 'Type 2 diabetes mellitus',
      icon: 'Droplet',
      color: '0d9488',
      questions: [
        {
          key: 'dm_eval',
          q: 'Glycemic status, trend, contributing factors, and goal:',
          defaultAnswer: 'Status: Significantly improved but above individualized goal. A1C downward trend across three time points: baseline 8.2% → 3-month 7.5% → 6-month 7.1%. Glycemic target is A1C <7.0% per ADA 2026 Standards of Care. Improvement is attributed to metformin XR 2000 mg daily optimization, excellent adherence, dietary modifications (elimination of sweet tea, home cooking), regular walking, and 5.5 kg weight loss. Treatment decisions should extend beyond A1C alone to prioritize organ protection (cardiorenal) and weight management. Adding a GLP-1 receptor agonist (e.g., semaglutide 0.25 mg SC weekly with titration to 0.5 mg) addresses residual glycemic elevation, supports further weight loss, and confers proven cardiovascular and renal benefits.'
        }
      ]
    },
    {
      id: 'htn',
      title: 'Essential hypertension',
      icon: 'HeartPulse',
      color: '13314f',
      questions: [
        {
          key: 'htn_eval',
          q: 'Blood pressure control status, longitudinal trend, tolerability, and goal:',
          defaultAnswer: 'Status: Controlled and at goal. Office BP 126/78 mmHg (repeat 128/78 mmHg); home BP average 126/77 mmHg corroborates office readings and confirms goal attainment (<130/80 mmHg per 2025 AHA/ACC Hypertension Guideline). Significant improvement since baseline (148/92 mmHg → 136/84 mmHg → 126/78 mmHg), attributed to medication optimization (lisinopril 20 mg + HCTZ 12.5 mg daily), adherence, home BP technique, sodium reduction, and 5.5 kg weight loss. Antihypertensive therapy is well tolerated with no symptomatic hypotension, renal dysfunction (eGFR 76 mL/min/1.73m²), or hyperkalemia (K 4.5 mmol/L). No further antihypertensive intensification is warranted; continue current regimen.'
        }
      ]
    },
    {
      id: 'ascvd_lipids',
      title: 'Hyperlipidemia / Primary ASCVD prevention',
      icon: 'ShieldAlert',
      color: 'dc2626',
      questions: [
        {
          key: 'ascvd_eval',
          q: 'Lipid control status, trend, tolerability, and cardiovascular risk:',
          defaultAnswer: 'Status: Controlled. LDL-C improved significantly from baseline 112 mg/dL to 70 mg/dL (37.5% reduction) on atorvastatin 20 mg PO daily at bedtime. Statin therapy is well tolerated without myalgias or adverse effects. Moderate-intensity statin therapy is highly effective and guideline-appropriate per 2018/2026 AHA/ACC Cholesterol Guidelines and ADA 2026. While the patient has no established clinical ASCVD, she has elevated lifetime cardiovascular risk driven by multiple contributing risk factors: type 2 diabetes mellitus, hypertension, Class I obesity, persistent albuminuria, and family history of premature CAD (father MI at age 62). Statin therapy provides cardiovascular benefit extending beyond LDL-C lowering and should be continued.'
        }
      ]
    },
    {
      id: 'obesity',
      title: 'Class I obesity & lifestyle modifications',
      icon: 'Scale',
      color: 'ca8a04',
      questions: [
        {
          key: 'obe_eval',
          q: 'Obesity status, weight trend, and cardiometabolic contribution:',
          defaultAnswer: 'Status: Improving but persistent. Current weight 86.5 kg with BMI 32.7 kg/m² (reconciled as Class I Obesity). Documents total weight loss of ~5.5 kg since initial encounter (92 kg to 86.5 kg). Patient lifestyle modifications (walking 30 minutes 5 days/week, cooking at home, portion control) have been highly successful and should be reinforced. Obesity continues to contribute to ongoing cardiometabolic risk, insulin resistance, and blood pressure elevation. Sustained weight reduction directly reduces cardiometabolic risk and aligns with patient desire for further weight loss using a weight-beneficial agent (GLP-1 RA).'
        }
      ]
    },
    {
      id: 'preventive_care',
      title: 'Preventive care gaps & immunizations',
      icon: 'ShieldPlus',
      color: '7c3aed',
      questions: [
        {
          key: 'prev_eval',
          q: 'Immunization gaps and chronic disease framing:',
          defaultAnswer: 'Status: Preventive care gaps persist. Adult immunizations are framed as an essential component of comprehensive chronic disease management in patients with diabetes to prevent morbidity and acute hospitalization. Open gaps include: pneumococcal conjugate vaccine (PCV20) indicated for diabetes age 19–64; recombinant zoster vaccine series (Shingrix, 2 doses) indicated for adults age >=50; and Tdap booster overdue (>10-year booster interval) per CDC Adult Immunization Schedule.'
        }
      ]
    },
    {
      id: 'monitoring_followup',
      title: 'Long-term monitoring & follow-up timeline',
      icon: 'CheckCircle',
      color: '10b981',
      questions: [
        {
          key: 'fu_eval',
          q: 'Transition to long-term monitoring and follow-up plan:',
          defaultAnswer: 'Status: Transitioning from acute therapy titration to durable long-term maintenance. Schedule routine follow-up in ~3 months with repeat A1C, BMP (serum creatinine, eGFR, potassium), weight assessment, and review of home BP logs and medication adherence. Reassess GLP-1 RA response, weight progression, and tolerability at that time.'
        }
      ]
    },
  ],

  PLAN_SECTIONS: [
    {
      id: 'kidney_plan',
      title: 'Moderately increased albuminuria / kidney protection plan',
      options: [
        { key: 'kp1', label: 'Continue lisinopril 20 mg PO daily for blood pressure control and renal protection', correct: true },
        { key: 'kp2', label: 'Consider future initiation of an SGLT2 inhibitor (empagliflozin 10 mg PO daily or dapagliflozin 10 mg PO daily) for proven cardiorenal and kidney protective benefits independent of glycemic control', correct: true },
        { key: 'kp3', label: 'Educate patient regarding albuminuria as an early marker of kidney injury and clarify that normal eGFR does not mean kidneys are free from risk', correct: true },
        { key: 'kp4', label: 'Continue annual UACR monitoring (or repeat in 6–12 months) to assess albuminuria trajectory', correct: true },
      ]
    },
    {
      id: 'dm_plan',
      title: 'Type 2 diabetes mellitus plan',
      options: [
        { key: 'dp1', label: 'Continue metformin XR 2000 mg PO once daily with dinner', correct: true },
        { key: 'dp2', label: 'Discuss and initiate semaglutide 0.25 mg subcutaneously once weekly for 4 weeks (or alternative guideline-supported GLP-1 RA) for glycemic, weight, and cardiovascular benefits', correct: true },
        { key: 'dp3', label: 'Plan titration of semaglutide to 0.5 mg SC weekly after 4 weeks per prescribing guidelines, with further titration to 1 mg weekly as tolerated/indicated', correct: true },
        { key: 'dp4', label: 'Counsel patient on potential gastrointestinal adverse effects (nausea, vomiting, diarrhea, constipation, early satiety)', correct: true },
        { key: 'dp5', label: 'Counsel patient on GI mitigation strategies: eat smaller portions, stop eating when full, stay well hydrated, and avoid fatty/greasy foods', correct: true },
        { key: 'dp6', label: 'Repeat A1C in ~3 months to assess glycemic response toward target <7.0%', correct: true },
      ]
    },
    {
      id: 'htn_plan',
      title: 'Essential hypertension plan',
      options: [
        { key: 'hp1', label: 'Continue lisinopril 20 mg PO daily', correct: true },
        { key: 'hp2', label: 'Continue hydrochlorothiazide 12.5 mg PO daily', correct: true },
        { key: 'hp3', label: 'Maintain blood pressure goal <130/80 mmHg; hold further antihypertensive intensification given well-tolerated, at-goal BP', correct: true },
        { key: 'hp4', label: 'Continue home blood pressure monitoring (HBPM) 3–4 times weekly with written log review', correct: true },
      ]
    },
    {
      id: 'ascvd_plan',
      title: 'Hyperlipidemia / Primary ASCVD prevention plan',
      options: [
        { key: 'ap1', label: 'Continue statin therapy: atorvastatin 20 mg PO daily at bedtime', correct: true },
        { key: 'ap2', label: 'Reinforce daily statin adherence for comprehensive cardiovascular risk reduction', correct: true },
        { key: 'ap3', label: 'Repeat lipid panel annually or sooner in 6–12 months if clinically indicated', correct: true },
      ]
    },
    {
      id: 'life_plan',
      title: 'Lifestyle modification & obesity plan',
      options: [
        { key: 'lp1', label: 'Continue current exercise program: walking 30 minutes 5 days/week progressing toward >=150 minutes/week moderate-intensity physical activity', correct: true },
        { key: 'lp2', label: 'Continue dietary improvements: cooking at home, avoiding sweet tea, portion control, and sodium restriction (<2,000 mg/day)', correct: true },
        { key: 'lp3', label: 'Encourage progression toward further sustainable weight-loss goals (additional 5–10% weight loss) supported by exercise progression, dietary maintenance, and weight-beneficial pharmacotherapy (GLP-1 RA)', correct: true },
        { key: 'lp4', label: 'Link sustained weight loss (~5.5 kg to date) directly to cardiometabolic, blood pressure, and renal risk reduction', correct: true },
      ]
    },
    {
      id: 'imm_plan',
      title: 'Preventive care & immunization plan',
      options: [
        { key: 'ip1', label: 'Recommend and administer pneumococcal conjugate vaccine (PCV20) today', correct: true },
        { key: 'ip2', label: 'Recommend recombinant zoster vaccination series (Shingrix): administer dose 1 today and schedule dose 2 in 2–6 months', correct: true },
        { key: 'ip3', label: 'Recommend and administer Tdap booster today (overdue >10 years)', correct: true },
      ]
    },
    {
      id: 'fu_plan',
      title: 'Follow-up & monitoring timeline',
      options: [
        { key: 'fp1', label: 'Schedule follow-up visit in ~3 months', correct: true },
        { key: 'fp2', label: 'Obtain repeat A1C before next visit', correct: true },
        { key: 'fp3', label: 'Obtain BMP (serum creatinine, eGFR, potassium) before next visit', correct: true },
        { key: 'fp4', label: 'Obtain weight and vital signs assessment before next visit', correct: true },
        { key: 'fp5', label: 'Reassess GLP-1 RA glycemic and weight response at follow-up if initiated', correct: true },
        { key: 'fp6', label: 'Reassess GLP-1 RA tolerability and adverse effects at follow-up if initiated', correct: true },
        { key: 'fp7', label: 'Review medication adherence and lifestyle progress at follow-up', correct: true },
      ]
    },
  ],

  PLAN_FREETEXT: [
    { key: 'patientEducation', label: 'Patient education plan', placeholder: 'Long-term risk, "normal eGFR ≠ healthy kidneys," agent benefits…' },
    { key: 'followUp', label: 'Follow-up plan', placeholder: 'Long-term monitoring cadence…' },
    { key: 'questionsPatient', label: 'Questions for the patient', placeholder: 'Preferences for long-term therapy…' },
    { key: 'questionsProvider', label: 'Questions for provider / preceptor', placeholder: 'Agent selection, vaccine logistics…' },
  ],

  GUIDING_QUESTIONS: [
    'Her A1C is 7.1% and BP is at goal — so is she "done"? What still needs attention?',
    'Her UACR is still elevated (38) despite good BP and an ACE inhibitor. What does persistent albuminuria mean?',
    'She thinks normal kidney bloodwork means healthy kidneys. Is she right? How would you explain it?',
    'Why should long-term decisions here NOT be driven by the A1C number alone?',
    'Which therapy class best protects her kidneys long-term — and would also help her weight goal?',
    'She’s open to a weekly injection and wants more weight loss. How does that shape your recommendation?',
    'BP is 126/78 — does she need more BP medication?',
    'LDL is 70 on a statin — continue, stop, or intensify?',
    'What preventive-care gaps have been open for three visits now?',
    'What is the single biggest long-term risk you’re trying to prevent, and how?',
  ],

  COUNSELING: [
    { id: 'kidney', title: 'Kidney protection (long-term)', body: [
      'Your kidney blood test is normal, which is great — but the urine test still shows a little protein.',
      'That protein is an early warning sign, so we keep protecting your kidneys even though the bloodwork looks good.',
      'A normal kidney blood test doesn’t mean the kidneys are fully in the clear — the urine test catches problems earlier.',
    ]},
    { id: 'glp1', title: 'GLP-1 receptor agonist', body: [
      'A once-weekly injection can help with weight and sugar, and it’s good for the heart.',
      'We start at a low dose; some nausea early on is common and usually fades.',
      'Since weight loss is your goal and you’re comfortable with a weekly shot, this fits well.',
    ]},
    { id: 'sglt2', title: 'SGLT2 inhibitor', body: [
      'A once-daily pill that protects the kidneys and heart and helps sugar.',
      'You may urinate a bit more at first; stay hydrated and keep good hygiene to lower infection risk.',
      'Tell us if you feel unwell, stop eating, or have genital itching — uncommon but worth knowing.',
    ]},
    { id: 'immun', title: 'Immunizations', body: [
      'A few vaccines are still due — pneumonia, shingles, and a tetanus booster.',
      'With diabetes, these protect you from infections that can hit harder.',
      'We can take care of some today and schedule the rest.',
    ]},
    { id: 'lifestyle', title: 'Sustaining lifestyle gains', body: [
      'Walking five days a week and cooking at home are fantastic — those habits are doing real work.',
      'The goal now is keeping them going for the long haul, not perfection.',
    ]},
  ],

  PRECEPTOR: {
    keyIssues: [
      'BP at goal (126/78); A1C near goal (7.1%); −5.5 kg total.',
      'PERSISTENT albuminuria (UACR 38) despite at-goal BP + ACE inhibitor.',
      'Normal eGFR does NOT equal healthy kidneys — patient misconception to correct.',
      'Strong indication remains for SGLT2 inhibitor (kidney/CV) and GLP-1 RA (weight/glycemia/CV).',
      'Open preventive gaps: pneumococcal, Shingrix, Tdap.',
    ],
    assessment: [
      'Do not treat the case as "finished" because numbers improved.',
      'Persistent albuminuria justifies kidney-protective therapy independent of A1C.',
      'SGLT2 inhibitor is strongly relevant for long-term kidney and cardiovascular protection.',
      'GLP-1 RA is highly relevant for weight loss, glycemia, and CV risk reduction; she is willing.',
      'No additional antihypertensive needed while BP is at goal and therapy tolerated.',
      'Continue statin (LDL 70); CV risk reduction extends beyond LDL.',
    ],
    plan: [
      'Add SGLT2 inhibitor for kidney/CV protection; continue ACEi with SCr/K monitoring.',
      'Consider GLP-1 RA aligned to weight goals and injection acceptance.',
      'Continue metformin, lisinopril/HCTZ, atorvastatin.',
      'Administer/refer pneumococcal, Shingrix, Tdap.',
      'Reinforce durable lifestyle; correct "normal eGFR = healthy kidneys" misconception.',
      'Continue UACR/BMP/A1C monitoring; follow up ~3 months.',
    ],
    pearls: [
      'Persistent albuminuria with normal eGFR still warrants kidney-protective therapy.',
      'Long-term care prioritizes CKD prevention, ASCVD prevention, weight, adherence sustainability, and preventive gaps.',
      'Use the patient’s own goals (weight) as leverage for guideline-concordant therapy.',
      'Close the preventive-care loop — gaps left open across visits are a quality miss.',
    ],
    mistakes: [
      'Declaring the patient "controlled/cured" and de-escalating monitoring.',
      'Focusing only on A1C and missing the cardiorenal indication.',
      'Reinforcing the misconception that normal eGFR means healthy kidneys.',
      'Adding antihypertensives despite at-goal BP.',
      'Leaving PCV/Shingrix/Tdap unaddressed yet again.',
    ],
    followupQuestions: [
      'How do you explain persistent albuminuria to a patient who feels "cured"?',
      'Why is an SGLT2 inhibitor still indicated when the eGFR is normal?',
      'How do you select between/with SGLT2 and GLP-1 for her long-term goals?',
      'What preventive items must not be deferred again?',
    ],
    checklist: [
      'Recognized persistent albuminuria despite at-goal BP',
      'Corrected the "normal eGFR = healthy kidneys" misconception',
      'Made the case for SGLT2 inhibitor (kidney/CV)',
      'Considered GLP-1 RA aligned to weight goals',
      'Avoided unnecessary antihypertensive intensification',
      'Continued statin appropriately',
      'Closed preventive gaps (PCV/Shingrix/Tdap)',
      'Set a sustainable long-term monitoring plan',
    ],
  },

  INTERVIEW_SYSTEM_PROMPT:
    'You are Maria Gonzalez at a 6-month follow-up. You are proud of your progress and engaged, and you want to know how to stay healthy long-term. You are friendly and cooperative, and speak in plain, non-clinical language. You mistakenly believe your kidneys are fine because your kidney blood test is normal, and you feel your diabetes is "almost taken care of." Do NOT volunteer these beliefs or other hidden details (weight wishes, injection comfort, exact habits) unless specifically asked. Keep answers short and natural.',
}

// ----------------------------------------------------------------------------
// Exports
// ----------------------------------------------------------------------------
export const CASES = [caseTue, caseWed, caseThu, ...BC_CASES, ...W2_CASES, ...W3_CASES, ...W4_CASES, ...W5_CASES]
export const CASE_BY_ID = Object.fromEntries(CASES.map(c => [c.id, c]))

// Workflow areas counted for the "Case Progress" bar.
export const PROGRESS_AREAS = [
  { key: 'chart', label: 'Chart reviewed' },
  { key: 'interview', label: 'Interview started' },
  { key: 'assessment', label: 'Assessment started' },
  { key: 'plan', label: 'Plan started' },
  { key: 'soap', label: 'SOAP note started' },
  { key: 'counseling', label: 'Counseling reviewed' },
]

// ----------------------------------------------------------------------------
// SOAP GRADING RUBRICS
// Concept-based rubric per case, consumed by lib/grader.js. Keywords are matched
// against the normalized student note (punctuation stripped: "8.2"->"8 2",
// "130/80"->"130 80"). Keep keywords lowercase. `tip` shows on a miss.
// ----------------------------------------------------------------------------
export const GRADING_RUBRICS = {
  'maria-tue': {
    subjective: [
      { id: 's_adhere', label: 'Medication adherence (misses 2–3×/week)', keywords: ['miss', 'adheren', 'skip', 'forget', 'nonadher', 'few times a week', 'two or three', '2 3'], tip: 'She misses 2–3 doses/week — a hidden driver of her numbers.' },
      { id: 's_nsaid', label: 'OTC / NSAID (ibuprofen) use', keywords: ['ibuprofen', 'nsaid', 'advil', 'motrin', 'naproxen', 'over the counter', 'otc', 'pain reliever'], tip: 'Frequent OTC ibuprofen raises BP and kidney risk — uncovered only by interview.' },
      { id: 's_bptech', label: 'Home BP technique', keywords: ['technique', 'legs crossed', 'cross', 'cuff', 'rest before', 'how she checks', 'measurement'], tip: 'Document her home BP technique — poor technique inflates readings.' },
      { id: 's_glucose', label: 'Home glucose monitoring', keywords: ['home glucose', 'home sugar', 'smbg', 'finger stick', 'fasting', '160', '180', 'once or twice'], tip: 'Capture her home glucose pattern (~160–180 mornings, 1–2×/week).' },
      { id: 's_diet', label: 'Diet & sodium (sweet tea, eating out)', keywords: ['diet', 'sweet tea', 'sodium', 'salt', 'restaurant', 'eat out', 'dash'], tip: 'Note diet drivers: eating out 3–4×/week and daily sweet tea.' },
      { id: 's_activity', label: 'Physical activity', keywords: ['exercise', 'walk', 'physical activity', 'active'], tip: 'Document activity (~1–2 short walks/week, limited by knees).' },
      { id: 's_goals', label: 'Patient goals & concerns', keywords: ['goal', 'weight loss', 'worried', 'scared', 'kidney', 'insulin', 'motivat', 'afraid', 'concern'], tip: 'Record her goals/fears — wants weight loss; fears insulin and kidney disease.' },
    ],
    objective: [
      { id: 'o_bp', label: 'Office BP 146/92 (repeat 144/90)', keywords: ['146', '144', 'blood pressure', ' bp '], tip: 'State the measured office BP (146/92, repeat 144/90).' },
      { id: 'o_a1c', label: 'A1C 8.2% with rising trend', keywords: ['8 2', 'a1c', 'rising', 'trend', '7 6', '7 3'], tip: 'Report A1C 8.2% and the upward 12-month trend.' },
      { id: 'o_lipid', label: 'Lipids (LDL 112, TG 223)', keywords: ['ldl', '112', 'triglyceride', '223', 'cholesterol'], tip: 'Note LDL 112 and triglycerides 223.' },
      { id: 'o_uacr', label: 'UACR never obtained', keywords: ['uacr', 'albumin', 'no result', 'not obtained', 'missing'], tip: 'Flag that UACR has never been obtained.' },
      { id: 'o_bmi', label: 'BMI 34.8 / obesity', keywords: ['bmi', '34', 'obes'], tip: 'Record BMI 34.8 / obesity.' },
      { id: 'o_meds', label: 'Current medications', keywords: ['metformin', 'lisinopril', 'hydrochlorothiazide', 'hctz'], tip: 'List current medications.' },
    ],
    assessment: [
      { id: 'a_stage', label: 'Stage 2 HTN; goal <130/80', keywords: ['stage 2', '130 80', 'goal', 'uncontrolled'], tip: 'Classify as Stage 2 HTN with a goal <130/80 given diabetes.' },
      { id: 'a_before', label: 'Confirm adherence/technique before intensifying', keywords: ['adheren', 'technique', 'before intensif', 'before escalat', 'reinforce', 'confirm'], tip: 'Confirm adherence and BP technique before intensifying therapy.' },
      { id: 'a_metformin', label: 'A1C above goal — optimize metformin first', keywords: ['above goal', 'optimize', 'increase metformin', 'metformin', 'trend'], tip: 'A1C above individualized goal; optimize metformin before injectables.' },
      { id: 'a_statin', label: 'Statin indication (diabetes age 40–75)', keywords: ['statin', '40 75', 'age', 'indication'], tip: 'Diabetes age 40–75 = statin indication regardless of LDL.' },
      { id: 'a_uacr', label: 'UACR is the key missing data', keywords: ['uacr', 'albumin', 'kidney'], tip: 'UACR is the missing diabetes/kidney monitoring test.' },
      { id: 'a_nsaid', label: 'NSAID effect on BP/kidney', keywords: ['ibuprofen', 'nsaid', 'kidney', 'blunt', 'raise'], tip: 'NSAID use can blunt the antihypertensive effect and add kidney risk.' },
    ],
    plan: [
      { id: 'p_adhere', label: 'Reinforce adherence + home BP log', keywords: ['adheren', 'home bp', ' log', 'technique', 'monitor'], tip: 'Reinforce adherence and start a correct home BP log.' },
      { id: 'p_lisino', label: 'Increase lisinopril to 20 mg', keywords: ['lisinopril', 'titrat', 'increase', ' 20 '], tip: 'Increase lisinopril to 20 mg daily.' },
      { id: 'p_bmp', label: 'Recheck BMP (K, SCr) after titration', keywords: ['bmp', 'potassium', 'creatinine', 'scr', 'recheck'], tip: 'Recheck BMP (K, SCr) after ACEi titration.' },
      { id: 'p_metformin', label: 'Increase metformin toward 2000 mg', keywords: ['metformin', '2000', 'titrat', 'increase'], tip: 'Increase metformin XR toward 2000 mg as tolerated.' },
      { id: 'p_uacr', label: 'Order UACR', keywords: ['uacr', 'order', 'albumin'], tip: 'Order a UACR.' },
      { id: 'p_a1c', label: 'Recheck A1C in ~3 months', keywords: ['a1c', '3 month', 'three month', 'recheck'], tip: 'Recheck A1C in ~3 months.' },
      { id: 'p_statin', label: 'Initiate a statin', keywords: ['statin', 'atorvastatin'], tip: 'Initiate a moderate-intensity statin (e.g., atorvastatin 20 mg).' },
      { id: 'p_life', label: 'Lifestyle (DASH, sodium, walking)', keywords: ['dash', 'sodium', 'sweet tea', 'walk', 'lifestyle', 'diet'], tip: 'DASH-style diet, reduce sweet tea/sodium, gradual walking.' },
      { id: 'p_imm', label: 'Address immunizations', keywords: ['pneumococcal', 'tdap', 'shingrix', 'vaccin', 'immuniz'], tip: 'Address pneumococcal, Tdap (overdue), and Shingrix.' },
      { id: 'p_fu', label: 'Follow up in ~1 month', keywords: ['follow up', '1 month', 'one month', 'return'], tip: 'Follow up in ~1 month after the medication change.' },
    ],
    avoid: [
      { id: 'x_fourth', label: 'Adding a 4th BP agent before checking adherence', keywords: ['fourth antihypertensive', 'add a fourth', '4th antihypertensive', 'another bp pill today'], tip: 'Avoid adding a fourth antihypertensive before checking adherence/technique.' },
      { id: 'x_insulin', label: 'Starting insulin now', keywords: ['start insulin', 'basal insulin', 'initiate insulin', 'start basal'], tip: 'Insulin is premature — optimize metformin first.' },
      { id: 'x_stopmet', label: 'Stopping metformin', keywords: ['stop metformin', 'discontinue metformin'], tip: 'Do not stop metformin for a rising A1C.' },
      { id: 'x_stopace', label: 'Stopping the ACE inhibitor', keywords: ['stop the ace', 'stop lisinopril', 'discontinue lisinopril', 'stop ace inhibitor'], tip: 'Do not stop the ACE inhibitor.' },
    ],
  },

  'maria-wed': {
    subjective: [
      { id: 's_adhere', label: 'Adherence specifics (misses nighttime statin)', keywords: ['statin', 'night', 'cholesterol pill', 'miss', 'adheren'], tip: 'She now mainly misses the nighttime statin — note adherence specifics.' },
      { id: 's_home', label: 'Improved home BP values', keywords: ['home', '134', '128', 'improv', 'better', 'average'], tip: 'Document the improved home BP average (~134/82).' },
      { id: 's_life', label: 'Lifestyle wins (sweet tea, cooking, walking)', keywords: ['sweet tea', 'cook', 'walk', 'diet', 'lifestyle'], tip: 'Capture lifestyle wins: cut sweet tea, cooking at home, ~4 walks/week.' },
      { id: 's_weight', label: 'Weight progress (−2.5 kg) & feelings', keywords: ['weight', '2 5', ' kg', 'progress', 'encourag'], tip: 'Note her −2.5 kg progress and how she feels about it.' },
      { id: 's_kidney', label: 'Understanding of albuminuria', keywords: ['kidney', 'protein', 'understand', 'albumin'], tip: 'Assess her understanding of "protein in the urine."' },
      { id: 's_inject', label: 'Injection preference (open to GLP-1)', keywords: ['inject', 'weekly', 'glp', 'willing', 'open'], tip: 'Ask about willingness to use a weekly injection — she is open.' },
    ],
    objective: [
      { id: 'o_a1c', label: 'A1C improved to 7.5%', keywords: ['7 5', 'a1c', 'improv'], tip: 'Report A1C improved to 7.5%.' },
      { id: 'o_bp', label: 'BP 134/82 with home confirmation', keywords: ['134', '136', 'blood pressure', ' bp ', 'goal'], tip: 'Report BP 134/82 with the home average confirming.' },
      { id: 'o_uacr', label: 'NEW UACR 45 mg/g (A2 albuminuria)', keywords: ['uacr', '45', 'albumin', ' a2 '], tip: 'Highlight the NEW UACR 45 mg/g — moderately increased albuminuria.' },
      { id: 'o_ldl', label: 'LDL 78 on statin', keywords: ['ldl', '78', 'statin'], tip: 'Note LDL 78 — good statin response.' },
      { id: 'o_weight', label: 'Weight −2.5 kg', keywords: ['2 5', ' kg', '89', 'weight'], tip: 'Record −2.5 kg.' },
      { id: 'o_meds', label: 'Reconciled medications', keywords: ['atorvastatin', 'metformin', 'lisinopril', 'ibuprofen'], tip: 'Reconcile current meds (statin added; ibuprofen now reconciled).' },
    ],
    assessment: [
      { id: 'a_partial', label: 'Partial response, not treatment failure', keywords: ['partial', 'progress', 'not failure', 'improv', 'reinforce'], tip: 'Frame this as meaningful partial response, not treatment failure.' },
      { id: 'a_albumin', label: 'Albuminuria shifts priority to kidney protection', keywords: ['albumin', 'uacr', 'kidney', 'protect', 'priorit'], tip: 'New albuminuria shifts priority to kidney protection independent of A1C.' },
      { id: 'a_sglt2', label: 'SGLT2 inhibitor cardiorenal benefit', keywords: ['sglt2', 'sglt 2', 'cardiorenal', 'flozin', 'empagliflozin', 'dapagliflozin'], tip: 'SGLT2 inhibitor offers kidney/HF/CV benefit — strongly relevant with A2 albuminuria.' },
      { id: 'a_glp1', label: 'GLP-1 RA for weight/glycemia/ASCVD', keywords: ['glp', 'glp 1', 'tide', 'weight', 'glycemi'], tip: 'GLP-1 RA aligns with her weight goal, glycemia, and ASCVD risk.' },
      { id: 'a_ace', label: 'Continue ACEi; monitor SCr & K', keywords: ['ace', 'lisinopril', 'monitor', 'potassium', 'creatinine', 'scr'], tip: 'Continue ACE inhibitor; monitor SCr and potassium.' },
    ],
    plan: [
      { id: 'p_sglt2', label: 'Continue metformin; add SGLT2 inhibitor', keywords: ['sglt2', 'sglt 2', 'flozin', 'metformin'], tip: 'Continue metformin; add an SGLT2 inhibitor for cardiorenal protection.' },
      { id: 'p_glp1', label: 'Consider GLP-1 RA', keywords: ['glp', 'glp 1', 'tide', 'injection'], tip: 'Consider a GLP-1 RA given her weight goal and injection acceptance.' },
      { id: 'p_continue', label: 'Continue lisinopril + atorvastatin', keywords: ['lisinopril', 'atorvastatin', 'statin', 'continue'], tip: 'Continue lisinopril and atorvastatin; reinforce gains.' },
      { id: 'p_monitor', label: 'Recheck BMP/UACR; A1C ~3 months', keywords: ['bmp', 'uacr', 'a1c', 'recheck', 'monitor'], tip: 'Recheck BMP and UACR; A1C in ~3 months.' },
      { id: 'p_counsel', label: 'Counsel new agent + immunizations', keywords: ['counsel', 'pneumococcal', 'tdap', 'shingrix', 'educat'], tip: 'Counsel on the new agent(s); address pneumococcal/Tdap/Shingrix.' },
      { id: 'p_fu', label: 'Follow up ~3 months', keywords: ['follow up', '3 month', 'three month'], tip: 'Follow up in ~3 months.' },
    ],
    avoid: [
      { id: 'x_fail', label: 'Calling partial response a failure / starting insulin', keywords: ['treatment failure', 'start insulin', 'basal insulin'], tip: 'Do not label partial improvement as failure or jump to insulin.' },
      { id: 'x_stopmet', label: 'Stopping metformin', keywords: ['stop metformin', 'discontinue metformin'], tip: 'Do not stop metformin.' },
      { id: 'x_stopace', label: 'Stopping the ACEi for elevated UACR', keywords: ['stop the ace', 'stop lisinopril', 'discontinue ace'], tip: 'Do not stop the ACE inhibitor for elevated UACR — it is protective.' },
      { id: 'x_stopstatin', label: 'Stopping the statin at LDL 78', keywords: ['stop statin', 'stop the statin', 'discontinue statin'], tip: 'Do not stop the statin at LDL 78.' },
    ],
  },

  'maria-thu': {
    subjective: [
      { id: 's_feel', label: 'Her sense that she may be "done"', keywords: ['cured', 'done', 'better', 'fine', 'feel'], tip: 'Capture her sense that she may be "done" — it sets up the misconception.' },
      { id: 's_miscon', label: 'Normal-bloodwork kidney misconception', keywords: ['kidney', 'normal', 'blood test', 'egfr', 'healthy'], tip: 'She believes normal kidney bloodwork = healthy kidneys; note this misconception.' },
      { id: 's_weight', label: 'Ongoing weight goal & injection openness', keywords: ['weight', 'goal', 'more', 'inject', 'lose'], tip: 'She wants further weight loss and is open to a weekly injection.' },
      { id: 's_life', label: 'Sustained lifestyle (walks 5×/week, cooking)', keywords: ['walk', 'cook', '5 day', 'five day', 'habit', 'lifestyle'], tip: 'Document sustained lifestyle (walking 5×/week, cooking at home).' },
      { id: 's_prev', label: 'Open preventive gaps history', keywords: ['vaccin', 'immuniz', 'pneumo', 'shingrix', 'tdap'], tip: 'Note long-open preventive-care gaps.' },
    ],
    objective: [
      { id: 'o_bp', label: 'BP at goal (126/78)', keywords: ['126', '128', 'goal', 'blood pressure'], tip: 'BP at goal (126/78).' },
      { id: 'o_a1c', label: 'A1C 7.1% (near goal)', keywords: ['7 1', 'a1c', 'near goal'], tip: 'A1C 7.1% (near goal).' },
      { id: 'o_uacr', label: 'PERSISTENT UACR 38', keywords: ['uacr', '38', 'albumin', 'persist'], tip: 'Persistent UACR 38 despite at-goal BP and an ACEi.' },
      { id: 'o_ldl', label: 'LDL 70 on statin', keywords: ['ldl', '70', 'statin'], tip: 'LDL 70 on statin.' },
      { id: 'o_weight', label: 'Weight −5.5 kg total', keywords: ['5 5', ' kg', '86', 'total', 'weight'], tip: '−5.5 kg total from baseline.' },
      { id: 'o_imm', label: 'PCV/Shingrix/Tdap gaps', keywords: ['pneumococcal', 'shingrix', 'tdap', 'not documented'], tip: 'PCV/Shingrix/Tdap remain open.' },
    ],
    assessment: [
      { id: 'a_notdone', label: 'Case is not "finished" despite good numbers', keywords: ['not finished', 'not done', 'not cured', 'ongoing', 'still'], tip: 'Do not treat the case as finished because numbers improved.' },
      { id: 'a_albumin', label: 'Persistent albuminuria → kidney therapy', keywords: ['albumin', 'uacr', 'kidney', 'protect', 'persist'], tip: 'Persistent albuminuria justifies kidney-protective therapy independent of A1C.' },
      { id: 'a_sglt2', label: 'SGLT2 inhibitor long-term kidney/CV', keywords: ['sglt2', 'sglt 2', 'flozin', 'cardio', 'kidney'], tip: 'SGLT2 inhibitor strongly indicated for long-term kidney/CV protection.' },
      { id: 'a_glp1', label: 'GLP-1 RA for weight/glycemia/CV', keywords: ['glp', 'glp 1', 'tide', 'weight'], tip: 'GLP-1 RA relevant for weight, glycemia, and CV risk; she is willing.' },
      { id: 'a_nobp', label: 'No added antihypertensive at goal', keywords: ['no additional', 'at goal', 'no further bp', 'tolerated'], tip: 'No additional antihypertensive needed while at goal.' },
      { id: 'a_statin', label: 'Continue statin (benefit beyond LDL)', keywords: ['statin', 'continue', 'cv risk', 'beyond ldl'], tip: 'Continue statin — CV benefit extends beyond the LDL number.' },
    ],
    plan: [
      { id: 'p_sglt2', label: 'Add SGLT2; continue ACEi with monitoring', keywords: ['sglt2', 'sglt 2', 'flozin', 'ace', 'monitor'], tip: 'Add an SGLT2 inhibitor; continue ACEi with SCr/K monitoring.' },
      { id: 'p_glp1', label: 'Consider GLP-1 RA', keywords: ['glp', 'glp 1', 'tide', 'injection'], tip: 'Consider a GLP-1 RA aligned to her weight goals.' },
      { id: 'p_continue', label: 'Continue core medications', keywords: ['metformin', 'lisinopril', 'atorvastatin', 'continue'], tip: 'Continue metformin, lisinopril/HCTZ, atorvastatin.' },
      { id: 'p_imm', label: 'Administer/refer PCV, Shingrix, Tdap', keywords: ['pneumococcal', 'shingrix', 'tdap', 'vaccin'], tip: 'Administer/refer pneumococcal, Shingrix, Tdap — do not defer again.' },
      { id: 'p_educate', label: 'Correct misconception + reinforce lifestyle', keywords: ['misconception', 'egfr', 'normal', 'educat', 'lifestyle', 'kidney'], tip: 'Correct "normal eGFR = healthy kidneys"; reinforce durable lifestyle.' },
      { id: 'p_monitor', label: 'Long-term monitoring + follow-up', keywords: ['uacr', 'bmp', 'a1c', 'follow up', '3 month', 'monitor'], tip: 'Continue UACR/BMP/A1C monitoring; follow up ~3 months.' },
    ],
    avoid: [
      { id: 'x_cured', label: 'Declaring her cured / discharging', keywords: ['declare cured', 'discharge', 'all better', 'stop monitoring'], tip: 'Do not declare her cured or de-escalate monitoring.' },
      { id: 'x_a1conly', label: 'Deciding on A1C alone', keywords: ['only the a1c', 'a1c alone', 'based only on a1c'], tip: 'Do not base long-term decisions on the A1C value alone.' },
      { id: 'x_miscon', label: 'Reinforcing the eGFR misconception', keywords: ['kidneys are fine', 'no kidney issue', 'normal egfr means healthy'], tip: 'Do not reinforce the normal-eGFR misconception.' },
      { id: 'x_addbp', label: 'Adding a BP agent at goal', keywords: ['add another bp', 'add antihypertensive', 'intensify bp'], tip: 'Avoid adding antihypertensives while BP is at goal.' },
    ],
  },
}


// Merge in Patients B & C grading rubrics.
Object.assign(GRADING_RUBRICS, BC_RUBRICS)

// Merge in Week 2 (CKD + HLD) grading rubrics.
Object.assign(GRADING_RUBRICS, W2_RUBRICS)

Object.assign(GRADING_RUBRICS, W3_RUBRICS)
Object.assign(GRADING_RUBRICS, W4_RUBRICS)
Object.assign(GRADING_RUBRICS, W5_RUBRICS)
