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
    week: 'Week 1 — Tuesday',
    length: '30-minute collaborative practice visit',
    difficulty: 'Foundational APPE Student',
    difficultyTone: 'teal',
    diseaseStates: ['Hypertension', 'Type 2 Diabetes', 'Hyperlipidemia', 'Obesity'],
    chiefConcern: 'My doctor said my blood pressure and diabetes numbers have been creeping up and wanted me to come talk with you.',
    snapshotSummary:
      'Maria is presenting for initial ambulatory care pharmacy management of hypertension and type 2 diabetes. PCP referred her for persistent elevated office BP and worsening glycemic control.',
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
    extras: [], // home BP is NOT documented yet — must be obtained on interview
  },

  LABS: [
    { label: 'A1C', value: '8.2', unit: '%', flag: 'high', ref: '4.0–5.6 %', note: 'Prior 7.6% (6 mo), 7.3% (12 mo) — upward trend' },
    { label: 'Glucose', value: '176', unit: 'mg/dL', flag: 'high', ref: '70–99 mg/dL' },
    { label: 'Na', value: '138', unit: 'mmol/L', flag: 'normal', ref: '135–145 mmol/L' },
    { label: 'K', value: '4.2', unit: 'mmol/L', flag: 'normal', ref: '3.5–5.0 mmol/L' },
    { label: 'Cl', value: '101', unit: 'mmol/L', flag: 'normal', ref: '98–107 mmol/L' },
    { label: 'CO2', value: '26', unit: 'mmol/L', flag: 'normal', ref: '22–29 mmol/L' },
    { label: 'BUN', value: '16', unit: 'mg/dL', flag: 'normal', ref: '7–20 mg/dL' },
    { label: 'SCr', value: '0.88', unit: 'mg/dL', flag: 'normal', ref: '0.6–1.1 mg/dL' },
    { label: 'eGFR', value: '79', unit: 'mL/min/1.73m²', flag: 'normal', ref: '≥60 mL/min/1.73m²' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal', ref: '7–56 U/L' },
    { label: 'ALT', value: '24', unit: 'U/L', flag: 'normal', ref: '7–56 U/L' },
    { label: 'Total cholesterol', value: '201', unit: 'mg/dL', flag: 'high', ref: '<200 mg/dL' },
    { label: 'LDL-C', value: '112', unit: 'mg/dL', flag: 'high', ref: '<100 mg/dL' },
    { label: 'HDL-C', value: '44', unit: 'mg/dL', flag: 'normal', ref: '>40 mg/dL' },
    { label: 'Triglycerides', value: '223', unit: 'mg/dL', flag: 'high', ref: '<150 mg/dL' },
    { label: 'UACR', value: 'No result on file', unit: '', flag: 'missing', ref: '<30 mg/g', note: 'Never obtained — order at this visit' },
  ],

  ALERTS: [
    { level: 'high', title: 'HTN — BP ABOVE GOAL (<130/80)', flag: 'Overdue', text: 'Office BP 146/92 → 144/90 mmHg: Stage 2 hypertension in a patient with diabetes (goal <130/80).' },
    { level: 'high', title: 'DIABETES — A1C ABOVE GOAL', flag: 'Overdue', text: 'A1C 8.2% and rising over 12 months despite metformin — above individualized goal.' },
    { level: 'warn', title: 'DIABETIC KIDNEY SCREENING — UACR', flag: 'Due', text: 'UACR has never been obtained in a patient with diabetes + hypertension.' },
    { level: 'info', title: 'ASCVD PREVENTION — STATIN THERAPY', flag: 'Due', text: 'No statin currently prescribed in a 54-year-old with diabetes.' },
  ],

  PROBLEMS: [
    { name: 'Essential hypertension', icd10: 'I10', detail: 'Office BP rising; on lisinopril + HCTZ', flag: 'high', noted: '03/2016' },
    { name: 'Type 2 diabetes mellitus', icd10: 'E11.9', detail: 'A1C 8.2% (trend up); on metformin XR', flag: 'high', noted: '07/2018', alert: 'Health maintenance: Nephropathy screening (UACR) overdue' },
    { name: 'Hyperlipidemia', icd10: 'E78.5', detail: 'LDL 112, TG 223; not on statin', flag: 'warn', noted: '01/2019', alert: 'Health maintenance: Statin therapy not on file' },
    { name: 'Obesity', icd10: 'E66.9', detail: 'BMI 34.8 kg/m²', flag: 'warn', noted: '09/2015' },
    { name: 'Bilateral knee osteoarthritis', icd10: 'M17.0', detail: 'Chronic; managed with PRN analgesia', flag: 'normal', noted: '11/2020' },
  ],

  ALLERGIES: [{ substance: 'No known drug allergies (NKDA)', reaction: '—' }],

  // VISIBLE med list — ibuprofen intentionally absent (hidden OTC use).
  MEDICATIONS: [
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'once daily', indication: 'Type 2 diabetes', notes: 'Tolerating' },
    { name: 'Lisinopril', dose: '10 mg', route: 'PO', freq: 'once daily', indication: 'Hypertension', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '12.5 mg', route: 'PO', freq: 'once daily', indication: 'Hypertension', notes: '' },
    { name: 'Acetaminophen', dose: '500 mg', route: 'PO', freq: 'PRN pain', indication: 'Knee osteoarthritis', notes: 'As needed' },
  ],

  IMMUNIZATIONS: [
    { name: 'Influenza (2025–26)', status: 'Administered 10/14/2025', detail: 'IM - L deltoid - Lot FL7732 - Sanofi', flag: 'normal' },
    { name: 'COVID-19 (2025–26)', status: 'Administered 09/30/2025', detail: 'IM - R deltoid - Lot CV5521 - Pfizer', flag: 'normal' },
    { name: 'Pneumococcal (PCV20)', status: 'Due — age/diabetes indicated', flag: 'warn' },
    { name: 'Zoster (Shingrix)', status: 'Due — age ≥50', flag: 'warn' },
    { name: 'Tdap', status: 'Overdue — last 06/12/2015 (q10yr)', flag: 'high' },
  ],

  SUBJECTIVE_DOCUMENTED: [
    { label: 'Reason for referral', value: 'PCP referral for persistently elevated office BP and worsening glycemic control.' },
    { label: 'Chief concern', value: 'Reports doctor noted BP and diabetes "numbers creeping up."' },
    { label: 'PMH', value: 'HTN, T2DM, hyperlipidemia, obesity, bilateral knee OA.' },
    { label: 'Documented symptoms', value: 'No acute complaints documented at intake.' },
  ],

  PHYSICAL_EXAM: {
    General: 'Well-appearing, in no acute distress (intake note).',
    CV: 'RRR, normal S1/S2, no murmurs/rubs/gallops; no JVD; distal pulses 2+ bilaterally.',
    Resp: 'Lungs clear to auscultation bilaterally; no wheezes or crackles; unlabored.',
    Extremities: 'No peripheral edema; feet skin intact, no ulcers; 10-g monofilament intact bilaterally; DP pulses 2+.',
  },

  OBJECTIVE_EXTRA: [
    { label: 'Documented home BP log', value: 'None on file', flag: 'missing' },
    { label: 'Documented SMBG log', value: 'None on file', flag: 'missing' },
    { label: 'UACR', value: 'Not obtained', flag: 'missing' },
  ],

  // Editable fields the student fills in from the interview. `field` links to a
  // discovered indicator when the matching interview topic is uncovered.
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

  INTERVIEW_KNOWLEDGE: [
    { id: 'reason', topic: 'Reason for visit', field: null,
      keywords: ['why are you here', 'reason for', 'bring you in', 'what brings', 'referred', 'doctor send', 'visit today'],
      response: 'My doctor said my blood pressure and my diabetes numbers have been creeping up, so he wanted me to come talk with the pharmacist.' },
    { id: 'symptoms', topic: 'Symptoms', field: 'sideEffects',
      keywords: ['symptom', 'how do you feel', 'feeling', 'chest pain', 'dizzy', 'headache', 'short of breath', 'swelling', 'any problems'],
      response: "Honestly I feel okay — no chest pain or anything like that. I get tired sometimes, and my knees bother me, but that's about it." },
    { id: 'adherence', topic: 'Medication adherence', field: 'adherence',
      keywords: ['miss', 'forget', 'adheren', 'take them every', 'remember to take', 'skip', 'consistent', 'every day'],
      response: "Most days I take them… but if I'm honest I probably miss them two or three times a week. Mornings are just chaotic getting out the door." },
    { id: 'currentMeds', topic: 'Current medications', field: 'currentMeds',
      keywords: ['what medicine', 'what medications', 'what are you taking', 'list your med', 'which pills', 'go over your med'],
      response: "I take the metformin for the sugar, the lisinopril, and the little water pill for blood pressure. And I take Tylenol when my knees act up." },
    { id: 'otc', topic: 'OTC / NSAIDs / supplements', field: 'otc',
      keywords: ['over the counter', 'otc', 'ibuprofen', 'advil', 'motrin', 'aleve', 'naproxen', 'pain reliever', 'supplement', 'vitamin', 'anything else you take', 'pain medicine'],
      response: "For my knees I usually take some ibuprofen — 400 or 600 — a few times a week. I don't really count that as a medicine though, it's just something I grab over the counter." },
    { id: 'sideEffects', topic: 'Side effects', field: 'sideEffects',
      keywords: ['side effect', 'bother you', 'tolerate', 'upset stomach', 'cough', 'problems with the med'],
      response: "No, I don't think the pills bother me. I feel fine on them." },
    { id: 'homeBp', topic: 'Home BP readings', field: 'homeBp',
      keywords: ['home blood pressure', 'check your blood pressure', 'bp at home', 'readings at home', 'monitor your pressure', 'numbers at home'],
      response: "When I do check it at home, it's usually in the 140s over 90s, somewhere around there." },
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
      response: "I don't smoke, and I rarely drink. I work at the elementary school office, and I'm married — my husband's supportive." },
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
      response: "I'm scared I'll end up on insulin someday. And I worry about my kidneys — I don't want what happened to my mom to happen to me." },
    { id: 'followup', topic: 'Follow-up', field: null,
      keywords: ['follow up', 'come back', 'next visit', 'see you again', 'schedule'],
      response: "Sure, I can come back whenever you need me to." },
  ],

  ASSESSMENT_CARDS: [
    { id: 'htn', title: 'Hypertension', icon: 'HeartPulse', color: '13314f', questions: [
      { key: 'htn_class', q: 'How is her office BP classified, and what is her target given diabetes?' },
      { key: 'htn_adhere', q: 'What should you assess about adherence and technique before intensifying therapy?' },
      { key: 'htn_contrib', q: 'What contributors (lifestyle, OTC) might be raising her BP?' },
      { key: 'htn_reg', q: 'Is her current 2-drug regimen optimized? What are the options?' },
      { key: 'htn_monitor', q: 'What monitoring is needed if you change ACEi/diuretic dosing?' },
    ]},
    { id: 't2dm', title: 'Type 2 Diabetes', icon: 'Droplet', color: '0d9488', questions: [
      { key: 'dm_goal', q: 'Is her A1C at an appropriate individualized goal? What is the trend?' },
      { key: 'dm_metf', q: 'Can metformin be optimized given her dose and renal function?' },
      { key: 'dm_uacr', q: 'What key piece of data is missing for diabetes monitoring?' },
      { key: 'dm_lifestyle', q: 'How are diet, activity, and monitoring affecting glycemic control?' },
      { key: 'dm_next', q: 'What would you reassess before adding another glucose-lowering agent?' },
    ]},
    { id: 'lipid', title: 'Hyperlipidemia / ASCVD Prevention', icon: 'Activity', color: 'dc2626', questions: [
      { key: 'lip_statin', q: 'Does a 54-year-old with diabetes have a statin indication? Why?' },
      { key: 'lip_values', q: 'How do you interpret her LDL and triglycerides?' },
      { key: 'lip_intensity', q: 'What statin intensity would you consider and why?' },
      { key: 'lip_monitor', q: 'What baseline/monitoring labs are relevant for statin therapy?' },
    ]},
    { id: 'obesity', title: 'Obesity / Lifestyle', icon: 'Scale', color: 'ca8a04', questions: [
      { key: 'ob_bmi', q: 'How does her BMI affect BP, glucose, and overall risk?' },
      { key: 'ob_motivation', q: 'What did the interview reveal about her motivation and barriers?' },
      { key: 'ob_plan', q: 'What realistic lifestyle targets would you set with her?' },
    ]},
    { id: 'kidney', title: 'Kidney Risk / Albuminuria', icon: 'FlaskConical', color: '0891b2', questions: [
      { key: 'kid_uacr', q: 'Why is UACR important here, and what is the next step?' },
      { key: 'kid_nsaid', q: 'How does her hidden NSAID use affect kidney and BP risk?' },
      { key: 'kid_acei', q: 'How does ACE inhibitor therapy fit into kidney protection?' },
    ]},
    { id: 'prevent', title: 'Preventive Care', icon: 'Heart', color: '7c3aed', questions: [
      { key: 'prev_imm', q: 'Which immunizations are due or undocumented?' },
      { key: 'prev_gaps', q: 'What preventive gaps should be addressed at this visit?' },
    ]},
  ],

  PLAN_SECTIONS: [
    { id: 'htn_plan', title: 'Hypertension plan', options: [
      { key: 'h1', label: 'Assess and reinforce adherence and home BP technique before intensifying', correct: true },
      { key: 'h2', label: 'Increase lisinopril to 20 mg daily', correct: true },
      { key: 'h3', label: 'Initiate home BP monitoring with correct technique', correct: true },
      { key: 'h4', label: 'Immediately add a fourth antihypertensive today', correct: false },
      { key: 'h5', label: 'Stop the ACE inhibitor because BP is still high', correct: false },
    ]},
    { id: 'dm_plan', title: 'Diabetes plan', options: [
      { key: 'd1', label: 'Increase metformin XR toward 2000 mg daily as tolerated', correct: true },
      { key: 'd2', label: 'Order UACR', correct: true },
      { key: 'd3', label: 'Reinforce SMBG and lifestyle; recheck A1C in ~3 months', correct: true },
      { key: 'd4', label: 'Start basal insulin today', correct: false },
      { key: 'd5', label: 'Stop metformin due to A1C rise', correct: false },
    ]},
    { id: 'lipid_plan', title: 'Lipid / ASCVD plan', options: [
      { key: 'l1', label: 'Initiate a statin (e.g., atorvastatin) given diabetes age 40–75', correct: true },
      { key: 'l2', label: 'Counsel on statin benefit and monitoring', correct: true },
      { key: 'l3', label: 'Defer all lipid therapy until BP is controlled', correct: false },
      { key: 'l4', label: 'Start a fibrate first-line for TG 223', correct: false },
    ]},
    { id: 'life_plan', title: 'Lifestyle / weight plan', options: [
      { key: 'lf1', label: 'Set a realistic, patient-centered weight goal', correct: true },
      { key: 'lf2', label: 'DASH-style diet, reduce sweet tea and sodium', correct: true },
      { key: 'lf3', label: 'Gradually increase walking within knee tolerance', correct: true },
      { key: 'lf4', label: 'Recommend a strict 1200-kcal diet immediately', correct: false },
    ]},
    { id: 'mon_plan', title: 'Monitoring plan', options: [
      { key: 'm1', label: 'Recheck BMP (K, SCr) after ACEi titration', correct: true },
      { key: 'm2', label: 'A1C in ~3 months; UACR result review', correct: true },
      { key: 'm3', label: 'No additional monitoring needed', correct: false },
    ]},
    { id: 'imm_plan', title: 'Immunizations / preventive care plan', options: [
      { key: 'i1', label: 'Address pneumococcal and Tdap (overdue ~11 yr)', correct: true },
      { key: 'i2', label: 'Offer Shingrix per age eligibility', correct: true },
      { key: 'i3', label: 'No vaccines indicated', correct: false },
    ]},
    { id: 'fu_plan', title: 'Follow-up plan', options: [
      { key: 'f1', label: 'Follow up ~1 month after medication adjustment', correct: true },
      { key: 'f2', label: 'Return in 1 year', correct: false },
    ]},
  ],

  PLAN_FREETEXT: [
    { key: 'patientEducation', label: 'Patient education plan', placeholder: 'Plain-language teaching points and teach-back items…' },
    { key: 'followUp', label: 'Follow-up plan', placeholder: 'Timing, what to recheck, what to bring…' },
    { key: 'questionsPatient', label: 'Questions for the patient', placeholder: 'What still needs clarifying?' },
    { key: 'questionsProvider', label: 'Questions for provider / preceptor', placeholder: 'Collaborative practice items to confirm…' },
  ],

  GUIDING_QUESTIONS: [
    'What is Maria’s BP classification, and what target applies given her diabetes?',
    'Before increasing any dose, what should you confirm about how she takes and measures things at home?',
    'What OTC product might she be taking that affects both BP and kidneys — and would she even mention it unprompted?',
    'Her A1C is 8.2% and rising. Is that "uncontrolled," and what is her trend telling you?',
    'What single diabetes monitoring test is missing from her chart entirely?',
    'Does a 54-year-old with diabetes meet a statin indication regardless of LDL?',
    'How might her knee pain be driving a hidden risk to her kidneys and BP?',
    'What lifestyle factors surfaced only when you interviewed her?',
    'How soon should she return after a medication change, and why?',
    'What does she actually understand about her A1C, and how would you explain it simply?',
  ],

  COUNSELING: [
    { id: 'bp', title: 'Blood pressure', body: [
      'Your blood pressure is a bit high right now. Our goal is to get the top number under about 130 and the bottom under 80.',
      'Taking your pills the same time every day — like with breakfast — helps a lot.',
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
      'Reinforce adherence + correct home BP technique; start a home BP log.',
      'Increase lisinopril to 20 mg daily; recheck BMP (K, SCr) after titration.',
      'Increase metformin XR toward 2000 mg daily as tolerated; order UACR; recheck A1C in ~3 months.',
      'Initiate moderate-intensity statin (e.g., atorvastatin 20 mg).',
      'DASH-style diet, reduce sweet tea/sodium, gradual walking within knee tolerance.',
      'Address pneumococcal, Tdap (overdue), Shingrix; follow up in ~1 month.',
    ],
    pearls: [
      'Always assess adherence and measurement technique BEFORE intensifying therapy.',
      'Ask specifically about OTC products — patients often don’t consider ibuprofen a "medication."',
      'A rising A1C trend is more informative than a single value.',
      'In diabetes, statin indication is driven by age/diabetes, not just LDL.',
    ],
    mistakes: [
      'Adding a new antihypertensive before checking adherence and home BP technique.',
      'Missing the hidden NSAID use entirely (only found by interview).',
      'Overlooking the missing UACR.',
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
    difficulty: 'Intermediate APPE Student',
    difficultyTone: 'amber',
    diseaseStates: ['Hypertension', 'Type 2 Diabetes', 'Albuminuria / CKD risk', 'Hyperlipidemia'],
    chiefConcern: 'I think things are getting a little better, but I’m not sure if I’m where I need to be yet.',
    snapshotSummary:
      '3-month follow-up after medication adjustments. BP and A1C improved but remain above goal; first UACR returns elevated. Decision point on kidney/cardiovascular-protective therapy.',
    learningObjectives: [
      'Interpret partial treatment response without treating it as failure',
      'Recognize moderately increased albuminuria and its impact on therapy choice',
      'Weigh SGLT2 inhibitor vs GLP-1 RA for cardiorenal and weight benefit',
      'Continue adherence/lifestyle support and renal monitoring',
    ],
    priorChanges: [
      'Lisinopril increased 10 → 20 mg daily',
      'Metformin XR increased 1000 → 2000 mg daily',
      'Atorvastatin 20 mg daily initiated',
      'UACR ordered; lifestyle + adherence interventions begun',
    ],
  },

  VITALS: {
    bp: '136/84 mmHg', bpRepeat: '134/82 mmHg', hr: '76 bpm', rr: '16',
    temp: '98.4 °F', weight: '89.5 kg', height: `5'4"`, bmi: '33.8 kg/m²',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'warn', hr: 'normal' },
    extras: [
      { label: 'Weight change', value: '−2.5 kg since prior visit', flag: 'normal' },
      { label: 'Home BP average', value: '134/82 mmHg (documented)', flag: 'warn' },
      { label: 'Home BP range', value: '128–140 / 78–86 mmHg', flag: 'warn' },
      { label: 'Home BP technique', value: 'Appears appropriate per log', flag: 'normal' },
    ],
  },

  LABS: [
    { label: 'A1C', value: '7.5', unit: '%', flag: 'warn', note: 'Improved from 8.2%' },
    { label: 'Na', value: '138', unit: 'mmol/L', flag: 'normal' },
    { label: 'K', value: '4.4', unit: 'mmol/L', flag: 'normal' },
    { label: 'SCr', value: '0.95', unit: 'mg/dL', flag: 'normal', note: 'Slight rise (expected after ACEi titration)' },
    { label: 'eGFR', value: '74', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'UACR', value: '45', unit: 'mg/g', flag: 'warn', note: 'NEW — moderately increased albuminuria (A2)' },
    { label: 'Total cholesterol', value: '170', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '78', unit: 'mg/dL', flag: 'normal', note: 'Improved on statin' },
    { label: 'HDL-C', value: '45', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '180', unit: 'mg/dL', flag: 'warn' },
  ],

  ALERTS: [
    { level: 'warn', text: 'NEW UACR 45 mg/g: moderately increased albuminuria — shifts priority toward kidney protection.' },
    { level: 'warn', text: 'BP improved (134/82) but still above the <130/80 goal.' },
    { level: 'warn', text: 'A1C improved (7.5%) but above the usual <7% goal.' },
    { level: 'info', text: 'SGLT2 inhibitor and/or GLP-1 RA may now be appropriate — weigh cardiorenal + weight benefits.' },
  ],

  PROBLEMS: [
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 7.5% (improved); on metformin 2000 mg', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP 134/82, home avg similar; on lisinopril 20 + HCTZ', flag: 'warn' },
    { name: 'Moderately increased albuminuria', detail: 'UACR 45 mg/g (new finding)', flag: 'warn' },
    { name: 'Hyperlipidemia', detail: 'LDL 78 on atorvastatin 20 mg', flag: 'normal' },
    { name: 'Obesity', detail: 'BMI 33.8 (−2.5 kg)', flag: 'warn' },
    { name: 'Bilateral knee osteoarthritis', detail: 'Chronic', flag: 'normal' },
  ],

  ALLERGIES: [{ substance: 'No known drug allergies (NKDA)', reaction: '—' }],

  // Ibuprofen now reconciled into the visible list (was uncovered last visit).
  MEDICATIONS: [
    { name: 'Metformin XR', dose: '2000 mg', route: 'PO', freq: 'once daily', indication: 'Type 2 diabetes', notes: 'Titrated up' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'once daily', indication: 'Hypertension / kidney protection', notes: 'Titrated up' },
    { name: 'Hydrochlorothiazide', dose: '12.5 mg', route: 'PO', freq: 'once daily', indication: 'Hypertension', notes: '' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'once daily', indication: 'ASCVD prevention (diabetes)', notes: 'Newly started' },
    { name: 'Acetaminophen', dose: '500 mg', route: 'PO', freq: 'PRN pain', indication: 'Knee OA', notes: '' },
    { name: 'Ibuprofen', dose: '400–600 mg', route: 'PO', freq: 'PRN pain', indication: 'Knee OA (OTC)', notes: 'Now reconciled — counsel re: BP/kidney' },
  ],

  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Current', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal (PCV)', status: 'Not documented', flag: 'missing' },
    { name: 'Zoster (Shingrix)', status: 'Not documented', flag: 'missing' },
    { name: 'Tdap', status: 'Overdue', flag: 'warn' },
  ],

  SUBJECTIVE_DOCUMENTED: [
    { label: 'Interval history', value: 'Returns for 3-month follow-up after med adjustments. Reports feeling "a little better."' },
    { label: 'Chief concern', value: 'Unsure whether she is "where she needs to be."' },
    { label: 'Documented symptoms', value: 'No new complaints documented at intake.' },
    { label: 'Home BP log', value: 'Submitted; average 134/82, technique appears appropriate.' },
  ],

  OBJECTIVE_EXTRA: [
    { label: 'General', value: 'Well-appearing, no acute distress.' },
    { label: 'Documented SMBG log', value: 'Not submitted at intake', flag: 'missing' },
    { label: 'Albuminuria understanding', value: 'Not documented', flag: 'missing' },
    { label: 'Preference re: injectable therapy', value: 'Not documented', flag: 'missing' },
  ],

  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Medication adherence', placeholder: 'Improved? Which med missed most often?' },
    { key: 'currentMeds', label: 'Medication routine', placeholder: 'When/how does she take each med?' },
    { key: 'sideEffects', label: 'Side effects', placeholder: 'Any new symptoms on titrated doses?' },
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

  INTERVIEW_KNOWLEDGE: [
    { id: 'reason', topic: 'Reason for visit', field: null,
      keywords: ['why are you here', 'reason for', 'what brings', 'follow up', 'how have you been', 'since last time'],
      response: "I'm back for my 3-month check. I think things are a little better, but I'm honestly not sure I'm where I need to be yet." },
    { id: 'adherence', topic: 'Medication adherence', field: 'adherence',
      keywords: ['miss', 'forget', 'adheren', 'skip', 'take them every', 'remember', 'consistent'],
      response: "I'm doing a lot better with them! I still miss maybe once a week though. If I forget one, it's usually the cholesterol pill at night." },
    { id: 'currentMeds', topic: 'Medication routine', field: 'currentMeds',
      keywords: ['routine', 'how do you take', 'when do you take', 'what time', 'go over your med', 'schedule your med', 'organize'],
      response: "I take the metformin with dinner, the blood pressure ones in the morning, and the cholesterol pill at night. I keep them all by the coffee maker so I remember." },
    { id: 'sideEffects', topic: 'Side effects', field: 'sideEffects',
      keywords: ['side effect', 'bother', 'tolerate', 'cough', 'stomach', 'dizzy', 'symptoms from the med'],
      response: "No, I haven't noticed any side effects. The higher doses seem fine." },
    { id: 'homeBp', topic: 'Home BP readings', field: 'homeBp',
      keywords: ['home blood pressure', 'bp at home', 'readings at home', 'check your blood pressure', 'numbers at home', 'monitor'],
      response: "At home it's been running about 134 over 82 — somewhere in the high 120s to 140 on top. I've been writing them down." },
    { id: 'bpTechnique', topic: 'BP technique', field: 'homeBp',
      keywords: ['how do you check', 'technique', 'sit when', 'cuff', 'rest before', 'cross your legs'],
      response: "I'm doing it the way you showed me now — I rest first, keep my feet flat, and I don't talk while it's going." },
    { id: 'glucoseMonitoring', topic: 'Home glucose monitoring', field: 'glucoseMonitoring',
      keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'finger stick', 'sugars at home'],
      response: "My fasting sugars are usually around 130 to 150 in the mornings now." },
    { id: 'diet', topic: 'Diet', field: 'diet',
      keywords: ['eat', 'diet', 'food', 'meals', 'sweet tea', 'drink', 'restaurant', 'cook', 'typical day'],
      response: "I cut the sweet tea way down — maybe once a week now. And I'm cooking at home a lot more instead of eating out." },
    { id: 'exercise', topic: 'Physical activity', field: 'exercise',
      keywords: ['exercise', 'activity', 'walk', 'active', 'move', 'workout'],
      response: "I'm walking about four days a week now, around 20 minutes each time." },
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
    { id: 't2dm', title: 'Type 2 Diabetes', icon: 'Droplet', color: '0d9488', questions: [
      { key: 'dm_partial', q: 'A1C dropped 8.2% → 7.5%. Is this success, failure, or partial response? Why?' },
      { key: 'dm_goal', q: 'Where does she stand relative to a typical <7% goal?' },
      { key: 'dm_agent', q: 'Given albuminuria and obesity, which agent class adds the most value now?' },
      { key: 'dm_metf', q: 'Should metformin continue at 2000 mg? Any renal concern at eGFR 74?' },
      { key: 'dm_monitor', q: 'What monitoring continues for diabetes at this stage?' },
    ]},
    { id: 'kidney', title: 'Albuminuria / CKD Risk', icon: 'FlaskConical', color: '0891b2', questions: [
      { key: 'kid_interp', q: 'How do you interpret UACR 45 mg/g with a normal eGFR?' },
      { key: 'kid_priority', q: 'How does albuminuria change your therapeutic priorities?' },
      { key: 'kid_acei', q: 'Is the ACE inhibitor appropriate, and what do you monitor on it?' },
      { key: 'kid_sglt2', q: 'What is the rationale for an SGLT2 inhibitor here?' },
    ]},
    { id: 'htn', title: 'Hypertension', icon: 'HeartPulse', color: '13314f', questions: [
      { key: 'htn_resp', q: 'BP improved to 134/82. At goal? What does the home average tell you?' },
      { key: 'htn_next', q: 'Is additional antihypertensive therapy needed yet? What are the options?' },
      { key: 'htn_renal', q: 'How do you monitor renal function/potassium after the ACEi increase?' },
    ]},
    { id: 'lipid', title: 'Hyperlipidemia / ASCVD', icon: 'Activity', color: 'dc2626', questions: [
      { key: 'lip_resp', q: 'LDL fell to 78 on atorvastatin. Continue, change, or stop?' },
      { key: 'lip_tg', q: 'How do you interpret residual TG 180?' },
    ]},
    { id: 'obesity', title: 'Obesity / Lifestyle', icon: 'Scale', color: 'ca8a04', questions: [
      { key: 'ob_progress', q: 'How do you frame −2.5 kg so it reinforces rather than discourages?' },
      { key: 'ob_synergy', q: 'How could a weight-beneficial agent align with her stated goals?' },
    ]},
  ],

  PLAN_SECTIONS: [
    { id: 'dm_plan', title: 'Diabetes plan', options: [
      { key: 'd1', label: 'Continue metformin XR 2000 mg daily', correct: true },
      { key: 'd2', label: 'Add an SGLT2 inhibitor for cardiorenal protection', correct: true },
      { key: 'd3', label: 'Consider a GLP-1 RA for glycemia + weight (per preference)', correct: true },
      { key: 'd4', label: 'Conclude treatment is failing and start basal insulin', correct: false },
      { key: 'd5', label: 'Stop metformin because A1C is not <7%', correct: false },
    ]},
    { id: 'kidney_plan', title: 'Kidney protection plan', options: [
      { key: 'k1', label: 'Continue ACE inhibitor; monitor SCr and K', correct: true },
      { key: 'k2', label: 'SGLT2 inhibitor for albuminuria/CKD protection', correct: true },
      { key: 'k3', label: 'Recheck UACR to confirm/track albuminuria', correct: true },
      { key: 'k4', label: 'Stop the ACE inhibitor because UACR is elevated', correct: false },
    ]},
    { id: 'htn_plan', title: 'Hypertension plan', options: [
      { key: 'h1', label: 'Continue current antihypertensives; reinforce home monitoring', correct: true },
      { key: 'h2', label: 'Reassess BP after any SGLT2 addition (mild BP lowering)', correct: true },
      { key: 'h3', label: 'Add two new BP agents today regardless of response', correct: false },
    ]},
    { id: 'lipid_plan', title: 'Lipid / ASCVD plan', options: [
      { key: 'l1', label: 'Continue atorvastatin 20 mg (good response)', correct: true },
      { key: 'l2', label: 'Stop the statin now that LDL is 78', correct: false },
    ]},
    { id: 'life_plan', title: 'Lifestyle / weight plan', options: [
      { key: 'lf1', label: 'Reinforce and praise progress (sweet tea, cooking, walking)', correct: true },
      { key: 'lf2', label: 'Set next realistic activity/diet goals', correct: true },
      { key: 'lf3', label: 'Tell her the weight loss is too slow to matter', correct: false },
    ]},
    { id: 'mon_plan', title: 'Monitoring plan', options: [
      { key: 'm1', label: 'Recheck BMP (K, SCr) and UACR; A1C in ~3 months', correct: true },
      { key: 'm2', label: 'No further labs needed', correct: false },
    ]},
    { id: 'fu_plan', title: 'Follow-up plan', options: [
      { key: 'f1', label: 'Follow up ~3 months (sooner if new agent started)', correct: true },
      { key: 'f2', label: 'Return in 1 year', correct: false },
    ]},
  ],

  PLAN_FREETEXT: [
    { key: 'patientEducation', label: 'Patient education plan', placeholder: 'Explain albuminuria, new agents, expected benefits…' },
    { key: 'followUp', label: 'Follow-up plan', placeholder: 'Timing and what to recheck…' },
    { key: 'questionsPatient', label: 'Questions for the patient', placeholder: 'Preferences, barriers to clarify…' },
    { key: 'questionsProvider', label: 'Questions for provider / preceptor', placeholder: 'Agent selection, formulary, etc.' },
  ],

  GUIDING_QUESTIONS: [
    'Her A1C went from 8.2% to 7.5%. Is that failure — or meaningful progress that just isn’t finished?',
    'What is brand-new on this lab panel that wasn’t there before, and why does it matter?',
    'How does a UACR of 45 mg/g change your priorities even though her eGFR is normal?',
    'Which is more compelling here for kidney protection: an SGLT2 inhibitor or another BP pill?',
    'She wants to lose weight and would accept a weekly injection — how does that shape options?',
    'Is the ACE inhibitor helping or hurting her kidneys? What do you monitor on it?',
    'BP is 134/82. Is she at goal? What does the home average confirm?',
    'Her LDL is 78 on a statin — continue, stop, or intensify?',
    'How do you talk about −2.5 kg so she feels encouraged, not defeated?',
    'What does she actually understand about "protein in the urine," and how would you explain it?',
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

// ----------------------------------------------------------------------------
// CASE 3 — THURSDAY — 6-Month Follow-Up (Advanced)
// ----------------------------------------------------------------------------
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
    diseaseStates: ['CKD / ASCVD prevention', 'Type 2 Diabetes', 'Obesity', 'Preventive care'],
    chiefConcern: 'My numbers are getting better, but I want to know what else I can do to stay healthy long-term.',
    snapshotSummary:
      '6-month follow-up. BP at goal, A1C near goal, weight down, but albuminuria persists. Focus shifts to long-term CKD/ASCVD risk reduction, agent selection, and closing preventive-care gaps.',
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
    bp: '128/78 mmHg', bpRepeat: '126/78 mmHg', hr: '74 bpm', rr: '16',
    temp: '98.3 °F', weight: '86.5 kg', height: `5'4"`, bmi: '32.7 kg/m²',
    flags: { bp: 'normal', bpRepeat: 'normal', bmi: 'warn', hr: 'normal' },
    extras: [
      { label: 'Weight change', value: '−5.5 kg total from baseline', flag: 'normal' },
      { label: 'Home BP average', value: '126/77 mmHg (at goal)', flag: 'normal' },
      { label: 'Fasting home glucose', value: '115–135 mg/dL', flag: 'normal' },
    ],
  },

  LABS: [
    { label: 'A1C', value: '7.1', unit: '%', flag: 'warn', note: 'Prior 7.5%; baseline 8.2% — near goal' },
    { label: 'Na', value: '139', unit: 'mmol/L', flag: 'normal' },
    { label: 'K', value: '4.5', unit: 'mmol/L', flag: 'normal' },
    { label: 'SCr', value: '0.92', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '76', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'UACR', value: '38', unit: 'mg/g', flag: 'warn', note: 'Prior 45 — persistent moderately increased albuminuria' },
    { label: 'Total cholesterol', value: '158', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '70', unit: 'mg/dL', flag: 'normal' },
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
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 7.1% (near goal); on metformin', flag: 'warn' },
    { name: 'Moderately increased albuminuria', detail: 'UACR 38 mg/g (persistent)', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP 126/78 — at goal', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'LDL 70 on statin', flag: 'normal' },
    { name: 'Obesity', detail: 'BMI 32.7 (−5.5 kg total)', flag: 'warn' },
    { name: 'Bilateral knee osteoarthritis', detail: 'Chronic, stable', flag: 'normal' },
  ],

  ALLERGIES: [{ substance: 'No known drug allergies (NKDA)', reaction: '—' }],

  MEDICATIONS: [
    { name: 'Metformin XR', dose: '2000 mg', route: 'PO', freq: 'once daily', indication: 'Type 2 diabetes', notes: '' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'once daily', indication: 'HTN / kidney protection', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '12.5 mg', route: 'PO', freq: 'once daily', indication: 'Hypertension', notes: '' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'once daily', indication: 'ASCVD prevention', notes: '' },
    { name: 'Acetaminophen', dose: '500 mg', route: 'PO', freq: 'PRN pain', indication: 'Knee OA', notes: '' },
  ],

  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Current', flag: 'normal' },
    { name: 'COVID-19', status: 'Current', flag: 'normal' },
    { name: 'Pneumococcal (PCV)', status: 'Still not completed', flag: 'missing' },
    { name: 'Zoster (Shingrix)', status: 'Still not completed', flag: 'missing' },
    { name: 'Tdap', status: 'Still overdue', flag: 'warn' },
  ],

  SUBJECTIVE_DOCUMENTED: [
    { label: 'Interval history', value: 'Returns for 6-month follow-up; reports steady improvement and strong engagement.' },
    { label: 'Chief concern', value: 'Wants to know what else she can do to stay healthy long-term.' },
    { label: 'Documented symptoms', value: 'No acute complaints; denies side effects at intake.' },
    { label: 'Home logs', value: 'Home BP avg 126/77; fasting glucose 115–135 documented.' },
  ],

  OBJECTIVE_EXTRA: [
    { label: 'General', value: 'Well-appearing, engaged, no acute distress.' },
    { label: 'Albuminuria understanding', value: 'Not documented', flag: 'missing' },
    { label: 'Long-term risk understanding', value: 'Not documented', flag: 'missing' },
    { label: 'Preventive care status', value: 'PCV/Shingrix/Tdap still open', flag: 'missing' },
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
      response: "I almost never miss anymore — I've got a really good routine now." },
    { id: 'weightGoals', topic: 'Weight goals', field: 'weightGoals',
      keywords: ['weight', 'lose weight', 'losing weight', 'goal'],
      response: "I'm happy with how much I've lost, but I'd still like to lose more. I'd really consider a medicine that helps with that." },
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
    { id: 'symptoms', topic: 'Symptoms / side effects', field: 'symptoms',
      keywords: ['symptom', 'how do you feel', 'chest pain', 'dizzy', 'short of breath', 'swelling', 'edema', 'low sugar', 'hypoglycemia', 'side effect', 'lightheaded', 'faint'],
      response: "No, nothing like that — no dizziness, no chest pain, no swelling, and no low sugars. I feel good." },
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
    { id: 'kidney', title: 'Albuminuria / CKD Risk', icon: 'FlaskConical', color: '0891b2', questions: [
      { key: 'kid_persist', q: 'UACR is 38 (was 45) with normal eGFR. How do you interpret persistent albuminuria?' },
      { key: 'kid_misconcept', q: 'She believes normal kidney bloodwork means healthy kidneys. How do you address this?' },
      { key: 'kid_sglt2', q: 'What is the long-term rationale for an SGLT2 inhibitor here?' },
      { key: 'kid_acei', q: 'BP is at goal on the ACEi — what is its continued role for the kidneys?' },
    ]},
    { id: 't2dm', title: 'Type 2 Diabetes', icon: 'Droplet', color: '0d9488', questions: [
      { key: 'dm_goal', q: 'A1C is 7.1%. Is more intensification needed, and on what basis?' },
      { key: 'dm_beyond', q: 'Why should decisions here NOT focus on A1C alone?' },
      { key: 'dm_agent', q: 'Which agent best serves weight, glycemia, and cardiorenal goals together?' },
    ]},
    { id: 'ascvd', title: 'ASCVD Prevention', icon: 'Activity', color: 'dc2626', questions: [
      { key: 'as_statin', q: 'LDL is 70 on a statin — continue? Any reason to intensify?' },
      { key: 'as_global', q: 'What therapies reduce her cardiovascular risk beyond LDL?' },
    ]},
    { id: 'obesity', title: 'Obesity / Lifestyle', icon: 'Scale', color: 'ca8a04', questions: [
      { key: 'ob_sustain', q: 'How do you sustain her excellent lifestyle gains long-term?' },
      { key: 'ob_med', q: 'How could a weight-beneficial agent support her stated goal?' },
    ]},
    { id: 'prevent', title: 'Preventive Care', icon: 'Heart', color: '7c3aed', questions: [
      { key: 'prev_gaps', q: 'Which immunizations remain open, and why prioritize them now?' },
      { key: 'prev_plan', q: 'What is your long-term preventive-care and monitoring plan?' },
    ]},
  ],

  PLAN_SECTIONS: [
    { id: 'kidney_plan', title: 'Kidney protection plan', options: [
      { key: 'k1', label: 'Add SGLT2 inhibitor for long-term kidney/CV protection', correct: true },
      { key: 'k2', label: 'Continue ACE inhibitor; monitor SCr and K', correct: true },
      { key: 'k3', label: 'Continue UACR monitoring', correct: true },
      { key: 'k4', label: 'No kidney action needed since eGFR is normal', correct: false },
    ]},
    { id: 'dm_plan', title: 'Diabetes plan', options: [
      { key: 'd1', label: 'Consider GLP-1 RA (weight + glycemia + ASCVD/CV benefit)', correct: true },
      { key: 'd2', label: 'Continue metformin', correct: true },
      { key: 'd3', label: 'Base all decisions only on the A1C value', correct: false },
      { key: 'd4', label: 'Declare diabetes "controlled" and stop monitoring', correct: false },
    ]},
    { id: 'ascvd_plan', title: 'Lipid / ASCVD plan', options: [
      { key: 'l1', label: 'Continue atorvastatin (LDL 70)', correct: true },
      { key: 'l2', label: 'Use agents with proven CV benefit (SGLT2/GLP-1)', correct: true },
      { key: 'l3', label: 'Stop statin since LDL is "good"', correct: false },
    ]},
    { id: 'htn_plan', title: 'Hypertension plan', options: [
      { key: 'h1', label: 'Continue current regimen; BP at goal', correct: true },
      { key: 'h2', label: 'No antihypertensive intensification needed if tolerated', correct: true },
      { key: 'h3', label: 'Add another BP agent despite at-goal BP', correct: false },
    ]},
    { id: 'imm_plan', title: 'Immunizations / preventive care plan', options: [
      { key: 'i1', label: 'Administer/refer pneumococcal (PCV)', correct: true },
      { key: 'i2', label: 'Administer/refer Shingrix', correct: true },
      { key: 'i3', label: 'Update Tdap (overdue)', correct: true },
      { key: 'i4', label: 'Defer all vaccines indefinitely', correct: false },
    ]},
    { id: 'life_plan', title: 'Lifestyle / weight plan', options: [
      { key: 'lf1', label: 'Reinforce sustained habits; set maintenance + further goals', correct: true },
      { key: 'lf2', label: 'Align weight-loss medication with her goals if appropriate', correct: true },
      { key: 'lf3', label: 'No further lifestyle support needed', correct: false },
    ]},
    { id: 'fu_plan', title: 'Follow-up plan', options: [
      { key: 'f1', label: 'Follow up ~3 months (sooner if new agent started)', correct: true },
      { key: 'f2', label: 'Discharge from clinic — "all better"', correct: false },
    ]},
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
