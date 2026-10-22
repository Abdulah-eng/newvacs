import { makeCase } from './caseFactory.js'

/* ============================ JAMES WILSON (B) ============================ */
// Phenotype: T2DM + HTN + Obesity + Hyperlipidemia. 
// Hidden: cost barrier; empagliflozin prescribed ~4 mo ago, never started due to cost.
// Tuesday: Initial. Wednesday: 3-month follow-up. Thursday: 6-month follow-up.

const jamesTue = makeCase({
  id: 'james-tue',
  PATIENT: { name: 'James Wilson', age: 62, dob: '03/12/1964', sex: 'male', ethnicity: 'White', mrn: 'B-204417' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    setting: 'Collaborative Practice Ambulatory Care Pharmacy Clinic',
    chiefConcern: "My doctor wanted me to check in about my diabetes and blood pressure.",
    snapshotSummary: 'James Wilson is a 62-year-old male referred to ambulatory care pharmacy services for collaborative management of uncontrolled type 2 diabetes mellitus and hypertension in an ambulatory care pharmacy clinic. An SGLT2 inhibitor (empagliflozin) was prescribed four months ago but has no fill history.',
    diseaseStates: ['Type 2 Diabetes', 'Hypertension', 'Hyperlipidemia', 'Obesity'],
    learningObjectives: [
      'Identify an unstated medication access/affordability barrier',
      'Assess non-adherence due to cost and medication stretching',
      'Evaluate uncontrolled diabetes and hypertension above goal',
      'Formulate patient-centered affordability solutions before escalating therapy'
    ],
  },
  VITALS: { bp: '152/94', bpRepeat: '150/92', hr: '82', rr: '16', temp: '98.1°F', weight: '101 kg', height: "5'10\"", bmi: '31.9',
    flags: { bp: 'high', bpRepeat: 'high', bmi: 'warn' } },
  LABS: [
    { label: 'A1C', value: '8.8', unit: '%', flag: 'high', note: 'Prior 8.4% (6 mos), 8.0% (12 mos) — rising upward trend across three time points' },
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.3', unit: 'mEq/L', flag: 'normal', note: 'Normal, no electrolyte contraindication' },
    { label: 'SCr', value: '0.96', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '89', unit: 'mL/min/1.73m²', flag: 'normal', note: 'Preserved renal function; confirms SGLT2 inhibitor eligibility with no renal contraindication' },
    { label: 'UACR', value: '18', unit: 'mg/g', flag: 'normal', note: 'Normal normoalbuminuria (<30 mg/g)' },
    { label: 'Total cholesterol', value: '196', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '103', unit: 'mg/dL', flag: 'warn', note: 'Suboptimally controlled on atorvastatin 20 mg daily; elevated ASCVD risk' },
    { label: 'HDL-C', value: '42', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '235', unit: 'mg/dL', flag: 'high' }
  ],
  ALERTS: [
    { level: 'high', text: 'Empagliflozin 10 mg is active on the med list but has NO claims found in 4 months since prescribed due to $500/month copay barrier.' },
    { level: 'warn', text: 'BP 152/94 and A1C 8.8% both above goal; medication stretching identified.' },
  ],
  PROBLEMS: [
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 8.8% (rising from 8.0% to 8.4% to 8.8%), empagliflozin unstarted due to cost', flag: 'high' },
    { name: 'Essential hypertension', detail: 'BP 152/94 (repeat 150/92, home ~149/91 mmHg), above goal', flag: 'high' },
    { name: 'Hyperlipidemia', detail: 'LDL 103, TG 235 on atorvastatin 20 mg, elevated ASCVD risk', flag: 'warn' },
    { name: 'Obesity', detail: 'BMI 31.9 (Class I Obesity)', flag: 'warn' },
    { name: 'Gastroesophageal reflux disease (GERD)', detail: 'Managed on omeprazole 20 mg PO daily', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'BID with meals', indication: 'Type 2 diabetes', notes: 'Tolerating' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hypertension', notes: 'Stretching intermittently' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'Hypertension', notes: 'Stretching intermittently' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Type 2 diabetes / cardiorenal', notes: 'Active on med list — but unstarted due to $500/mo cost' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'ASCVD prevention', notes: 'Stretching intermittently' },
    { name: 'Omeprazole', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'GERD', notes: 'Well-controlled' }
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza (current season)', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date (primary series completed; booster received)', flag: 'normal' },
    { name: 'Pneumococcal (PCV20)', status: 'Not documented — Due per CDC schedule (age 62 with diabetes)', flag: 'warn' },
    { name: 'Zoster (Shingrix)', status: 'Not documented — Due per CDC schedule (2-dose series indicated for age ≥50)', flag: 'missing' },
    { name: 'Tdap', status: 'Overdue — last documented 12 years ago (>10-year booster interval)', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'Reason for referral & setting', value: 'Referred by PCP for collaborative diabetes and blood pressure management in an ambulatory care pharmacy clinic.' },
    { label: 'Chief Complaint (CC)', value: 'Reports doctor wanted him to check in about his diabetes and blood pressure.' },
    { label: 'PMH', value: 'Type 2 diabetes mellitus (10 years), essential hypertension (12 years), hyperlipidemia (8 years), Class I obesity, gastroesophageal reflux disease (GERD, on omeprazole 20 mg daily).' },
    { label: 'Past Surgical History (PSH)', value: 'Appendectomy (age 19), right knee arthroscopy (age 51).' },
    { label: 'Family History', value: 'Father: fatal stroke at age 68-71, type 2 diabetes, hypertension; Mother: hypertension, hyperlipidemia, deceased at age 74; Sister: type 2 diabetes.' },
    { label: 'Allergies', value: 'No known drug allergies (NKDA).' },
    { label: 'General wellness & affect', value: 'Patient reports feeling generally well overall but acknowledges intermittent daytime fatigue and reports mild increased thirst (polydipsia) over recent weeks. Expresses frustration and concern regarding persistently elevated blood pressure and blood glucose numbers.' },
    { label: 'Medication adherence & access discrepancy', value: 'Initial self-report indicated regular medication use; however, detailed inquiry revealed true adherence is substantially lower due to financial barriers. Patient admits to medication stretching behavior (taking blood pressure and diabetes medications every other day to make them last longer several times a year near refill dates) and delaying pharmacy refills until pension checks arrive. Cost barrier: empagliflozin 10 mg was prescribed 4 months ago but never filled or initiated due to prohibitive cost (>$500/month copay; non-initiation).' },
    { label: 'Social History', value: 'Occupation: Recently retired truck driver on a fixed pension income. Marital/living: Married, lives with wife. Former smoker: Smoked 1 pack/day for 20 years; quit 10 years ago (20 pack-years). Alcohol use: Uses alcohol (1–2 beers on weekends). Recreational drug use: Explicitly denies recreational or illicit drug use.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular/Pulmonary/Neurologic: Explicitly denies chest pain, shortness of breath, palpitations, dizziness, syncope, severe headaches, lower extremity edema, and acute vision changes.' },
    { label: 'Patient Goals & Motivators', value: 'Patient stated goals include achieving better health, maintaining retirement independence, avoiding insulin therapy (strong fear of insulin based on father\'s experience), preventing cardiovascular events and stroke (father died of stroke at age 68), and finding financial assistance programs (PAP / 340B / copay cards) to obtain affordable medications.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Documented home BP log', value: 'Average ~149/91 mmHg (readings in the high 140s over 90s), which is consistent with and corroborates elevated office BP readings (152/94, repeat 150/92 mmHg).', flag: 'warn' },
    { label: 'A1C trend data', value: 'Current A1C 8.8% (prior values: 8.4% at 6 months ago, 8.0% at 12 months ago; demonstrating a rising upward trend across three consecutive time points).', flag: 'high' },
    { label: 'Renal function interpretation', value: 'eGFR 89 mL/min/1.73m² and SCr 0.96 mg/dL demonstrate preserved renal function and confirm SGLT2 inhibitor eligibility with no renal contraindications.', flag: 'normal' },
    { label: 'Serum Potassium interpretation', value: 'Serum potassium 4.3 mEq/L is normal.', flag: 'normal' },
    { label: 'UACR interpretation', value: 'UACR 18 mg/g demonstrates normal normoalbuminuria (<30 mg/g).', flag: 'normal' },
    { label: 'Lipid panel ASCVD interpretation', value: 'Total cholesterol 196 mg/dL, LDL-C 103 mg/dL, HDL-C 42 mg/dL, TG 235 mg/dL on Atorvastatin 20 mg daily; informs elevated overall cardiovascular risk in diabetes.', flag: 'warn' },
    { label: 'Empagliflozin fill history', value: 'No claims found in 4 months since prescribed due to $500/month copay barrier; represents medication non-initiation due to cost rather than therapeutic failure.', flag: 'missing' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'empa', label: 'Empagliflozin Adherence', placeholder: 'Is he actually taking it?' },
    { key: 'cost', label: 'Cost / Affordability', placeholder: 'Affordability barriers?' },
    { key: 'adherence', label: 'Medication Stretching', placeholder: 'Taking meds differently to save money?' },
    { key: 'knowledge', label: 'Disease Understanding', placeholder: 'Does he understand A1C?' },
  ],
  GUIDING_QUESTIONS: [
    'What was the primary cause of uncontrolled diabetes in this patient?',
    'Why would adding another medication potentially be inappropriate today?',
    'What strategies can pharmacists use to address medication affordability?',
    'How did medication stretching affect your interpretation of blood pressure and A1C?',
    'Why is medication reconciliation critical in ambulatory care?',
    'What clues suggested a health literacy deficit?',
    'How would you explain A1C to this patient?',
    'What is the difference between medication nonadherence and medication non-initiation?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'james-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'james-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin and acetaminophen occasionally for my joint aches. I do not take any other supplements." },
    { id: 'james-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink 1 to 2 beers on weekends while watching sports, but I never drink during the week." },
    { id: 'james-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 20 years, but I quit 10 years ago." },
    { id: 'james-tue_drugs', topic: 'Recreational drug use', field: 'social', keywords: ['drug', 'illicit', 'marijuana', 'weed', 'cocaine', 'substance', 'recreational'], response: "I have never used recreational drugs or illicit substances in my life." },
    { id: 'james-tue_wellness', topic: 'General health status', field: 'symptoms', keywords: ['generally', 'overall', 'how do you feel', 'well', 'feeling', 'frustrated', 'concern'], response: "I feel generally well overall aside from some daytime fatigue, but I\'m really frustrated and worried that my blood pressure and sugar numbers keep staying elevated despite taking pills." },
    { id: 'james-tue_ros', topic: 'Review of systems', field: 'symptoms', keywords: ['chest pain', 'short of breath', 'palpitations', 'dizziness', 'syncope', 'headache', 'edema', 'vision', 'ros'], response: "I deny having any chest pain, shortness of breath, heart palpitations, dizziness, syncope, severe headaches, leg swelling, or vision changes." },
    { id: 'james-tue_goals', topic: 'Patient goals and motivation', field: 'concerns', keywords: ['goal', 'motivation', 'stroke', 'insulin', 'independence', 'retirement'], response: "My goals are to get healthy, keep my independence in retirement, avoid insulin shots at all costs, and prevent a stroke like my father had." },
    { id: 'james-tue_exercise', topic: 'Physical activity', field: 'exercise', keywords: ['exercise', 'activity', 'walk', 'active', 'yard work'], response: 'I do a little bit of yard work occasionally, but that\'s about all the physical activity I get.' },
    { id: 'james-tue_diet', topic: 'Diet', field: 'diet', keywords: ['eat', 'diet', 'food', 'meals', 'cook', 'beverage', 'drink', 'sugar'], response: 'My wife and I eat a lot of convenience foods and frozen dinners. I also drink a lot of regular soda and sweet tea during the week.' },
    { id: 'james-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had high blood pressure, type 2 diabetes, and had a stroke at age 71. My mother had high blood pressure and high cholesterol. My sister has type 2 diabetes." },
    { id: 'james-tue_surg', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'appendix', 'appendectomy', 'knee', 'arthroscopy'], response: 'I had my appendix out when I was 19, and a knee scope surgery on my right knee when I was 51.' },
    { id: 'james-tue_homebp', topic: 'Home BP monitoring', field: 'homeBp', keywords: ['home blood pressure', 'bp at home', 'check your blood pressure', 'monitor', 'log', 'average'], response: 'I check my blood pressure at home maybe 1 to 2 times a week. My readings are usually in the high 140s over 90s — my average is about 149 over 91.' },
    { id: 'james-tue_homebg', topic: 'Home glucose monitoring', field: 'glucoseMonitoring', keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'finger stick', 'meter'], response: 'I check my blood sugar a few times a week. My fasting numbers are usually in the range of 170 to 200.' },
    { id: 'james-tue_duration', topic: 'Disease duration', field: 'pmh', keywords: ['how long', 'when were you diagnosed', 'duration', 'years'], response: 'I\'ve had high blood pressure for about 12 years, diabetes for 10 years, and high cholesterol for 8 years.' },
    { id: 'b_symptoms', topic: 'Symptoms', field: 'symptoms', keywords: ['symptom', 'how do you feel', 'thirst', 'thirsty', 'urinate', 'fatigue', 'polydipsia'], response: 'I\'ve been feeling pretty fatigued lately, and honestly I have been a bit more thirsty and drinking more water than usual.' },
    { id: 'b_cost', topic: 'Affordability Barrier', field: 'cost', keywords: ['cost', 'afford', 'expensive', 'pay', 'money', 'copay', 'insurance', 'price'], response: "Honestly, the new one they prescribed (Jardiance) was too expensive—it was more than $500 a month! I just couldn't afford it on a fixed income, so I never picked it up." },
    { id: 'b_stretch', topic: 'Medication Stretching', field: 'adherence', keywords: ['miss', 'adherence', 'every other day', 'stretch', 'save', 'skip'], response: "To be honest, sometimes I take my other pills every other day to make them last longer. I probably do this several times a year when money is tight." },
    { id: 'b_delay', topic: 'Delayed Refills', field: 'adherence', keywords: ['refill', 'delay', 'pharmacy', 'pick up'], response: "Sometimes I wait a few extra days to refill my medicines until I get my pension check." },
    { id: 'b_a1c', topic: 'Limited Disease Understanding', field: 'knowledge', keywords: ['a1c', 'understand', 'number', 'mean'], response: "The doctor said my A1C was high, but I don't really know what that number means." },
    { id: 'b_insulin', topic: 'Fear of Insulin', field: 'knowledge', keywords: ['insulin', 'shot', 'future', 'worried', 'afraid', 'fear'], response: "My biggest fear is having to go on insulin. I saw what it did to my dad." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'b_dm', title: 'Type 2 diabetes mellitus & critical medication access barrier (Uncontrolled)', icon: 'Droplet', color: '0891b2', questions: [
      { key: 'b_dm_stat', q: 'What is the control status and trend of his diabetes?', defaultAnswer: 'Control status: Uncontrolled type 2 diabetes mellitus. Current A1C is 8.8% (fasting glucose 170-200 mg/dL), demonstrating a rising upward trend compared to prior values of 8.0% at 12 months ago and 8.4% at 6 months ago across three time points. Treatment goal is A1C <7% per ADA 2026 Standards of Care.' },
      { key: 'b_dm_root', q: 'What is the primary root cause and major contributor to poor glycemic control?', defaultAnswer: 'Access and affordability (not therapeutic failure) is the major contributor to poor control. The primary driver is medication non-initiation of empagliflozin 10 mg due to prohibitive cost ($500/month copay on a fixed pension income), accompanied by medication stretching (taking pills every other day) and delayed pharmacy refills. Failure to address this financial barrier would perpetuate poor disease control.' },
      { key: 'b_dm_contrib', q: 'What additional contributors and renal parameters are present?', defaultAnswer: 'Additional contributors include Class I obesity (BMI 31.9 kg/m²), physical inactivity (sedentary retired truck driver), dietary habits (convenience foods, frozen dinners, regular soda, sweet tea), and limited diabetes understanding (unclear on A1C meaning). Preserved renal function (eGFR 89 mL/min/1.73m², SCr 0.96 mg/dL, UACR 18 mg/g) confirms full eligibility for SGLT2 inhibitor therapy with no renal contraindication.' },
    ]},
    { id: 'b_htn', title: 'Essential hypertension (Uncontrolled, Above Goal)', icon: 'HeartPulse', color: '13314f', questions: [
      { key: 'b_htn_stat', q: 'How is his blood pressure classified and what is the target?', defaultAnswer: 'Control status: Uncontrolled Stage 2 hypertension. Office BP values of 152/94 mmHg and repeat 150/92 mmHg are above goal. Home BP readings (average ~149/91 mmHg in the high 140s/90s) are similarly elevated and corroborate office readings. Blood pressure goal is <130/80 mmHg for patients with diabetes per the 2025 AHA/ACC Hypertension Guideline.' },
      { key: 'b_htn_rationale', q: 'Why should antihypertensive intensification be deferred today?', defaultAnswer: 'Patient\'s intermittent medication stretching (taking lisinopril and HCTZ every other day and delaying refills) makes true baseline blood pressure control and medication effectiveness difficult to assess. Lifestyle contributors include Class I obesity, lack of physical activity, and a high-sodium convenience diet. Prioritize resolving cost and stretching barriers before intensifying antihypertensive medications, avoiding premature escalation today.' },
    ]},
    { id: 'b_lipid', title: 'Hyperlipidemia / Primary ASCVD Prevention (Suboptimally Controlled)', icon: 'Activity', color: 'dc2626', questions: [
      { key: 'b_lip_stat', q: 'What is his lipid control status and ASCVD risk profile?', defaultAnswer: 'Problem identified: Hyperlipidemia / primary ASCVD prevention. Control status: Suboptimally controlled. Supported by LDL-C of 103 mg/dL and Triglycerides 235 mg/dL on current Atorvastatin 20 mg daily therapy. Patient has elevated overall cardiovascular risk driven by multiple risk factors: type 2 diabetes, hypertension, Class I obesity, former smoking history (20 pack-years), and family history of premature stroke (father stroke at age 71).' },
      { key: 'b_lip_adh', q: 'How does adherence affect statin management?', defaultAnswer: 'Adherence concerns and intermittent medication stretching limit assessment of current statin effectiveness. Prioritize consistent statin adherence before intensifying lipid-lowering therapy; continue Atorvastatin 20 mg PO daily and reassess LDL-C after adherence and access issues improve.' },
    ]},
    { id: 'b_obesity', title: 'Obesity (Class I, BMI 31.9 kg/m²)', icon: 'Scale', color: 'ca8a04', questions: [
      { key: 'b_ob_eval', q: 'How does obesity affect his clinical trajectory?', defaultAnswer: 'Problem identified: Obesity. BMI 31.9 kg/m² (weight 101 kg, height 5\'10\") is classified as Class I Obesity. Obesity directly contributes to hypertension, insulin resistance, and elevated cardiovascular risk. Contributing factors include limited physical activity and suboptimal diet (sugary beverages, frozen convenience meals). Weight reduction of 5-7% will produce substantial dual benefits for both blood pressure and glycemic control.' },
    ]},
    { id: 'b_literacy', title: 'Health literacy deficit & financial vulnerability', icon: 'AlertTriangle', color: 'ea580c', questions: [
      { key: 'b_lit_eval', q: 'What educational and communication needs exist?', defaultAnswer: 'Patient exhibits limited understanding of A1C and treatment goals, and initially self-reported regular medication use despite true adherence being substantially lower due to cost. There is a clear educational opportunity on medication purposes, disease management, risks of medication stretching, and educating the patient to proactively communicate affordability barriers to the healthcare team rather than skipping doses.' },
    ]},
    { id: 'b_prevent', title: 'Preventive care gaps & health maintenance', icon: 'Heart', color: '7c3aed', questions: [
      { key: 'b_prev_gaps', q: 'What preventive care gaps exist in his chart?', defaultAnswer: 'Problem identified: Preventive care gaps. Objective records demonstrate: (1) Pneumococcal vaccination gap (PCV20 indicated for age 62 with diabetes); (2) Recombinant zoster vaccination gap (Shingrix 2-dose series indicated for age ≥50); and (3) Tdap booster gap (last received 12 years ago, exceeding the 10-year booster interval per CDC Adult Immunization Schedule). Recommend incorporating preventive care into long-term ambulatory care management.' },
    ]},
  ],
  PLAN_SECTIONS: [
    { id: 'b_p_dm', title: 'Diabetes & medication access / affordability plan', options: [
      { key: 'b_dm_cont', label: 'Continue Metformin XR 1000 mg PO twice daily (BID) with meals; reinforce consistent administration', correct: true },
      { key: 'b_dm_pathways', label: 'Determine at least two medication access pathways: manufacturer Patient Assistance Program (PAP / copay card) and insurance prior authorization / tier exception for empagliflozin 10 mg', correct: true },
      { key: 'b_dm_alt', label: 'Consider covered alternative SGLT2 inhibitor if empagliflozin remains unaffordable (e.g., Dapagliflozin 10 mg PO daily, canagliflozin, or ertugliflozin)', correct: true },
      { key: 'b_dm_edu', label: 'Educate patient on the purpose and cardiorenal/glycemic benefits of SGLT2 inhibitor therapy', correct: true },
      { key: 'b_dm_a1c', label: 'Repeat A1C in ~3 months to evaluate glycemic response after resolving access barriers', correct: true },
      { key: 'b_dm_target', label: 'Individualized glycemic treatment goal: A1C <7% per ADA 2026 Standards of Care', correct: true },
      { key: 'b_dm_o2', label: 'Escalate to insulin because A1C is 8.8%', correct: false },
      { key: 'b_dm_o3', label: 'Discontinue empagliflozin and add glipizide', correct: false },
    ]},
    { id: 'b_p_htn', title: 'Hypertension plan', options: [
      { key: 'b_htn_lis', label: 'Continue Lisinopril 20 mg PO once daily', correct: true },
      { key: 'b_htn_hctz', label: 'Continue Hydrochlorothiazide 25 mg PO once daily', correct: true },
      { key: 'b_htn_defer', label: 'Reinforce adherence; avoid immediate antihypertensive intensification until medication stretching resolves and true BP control can be assessed', correct: true },
      { key: 'b_htn_mon', label: 'Encourage home blood pressure monitoring 3-4 times weekly and keep a written log', correct: true },
      { key: 'b_htn_reassess', label: 'Reassess blood pressure in 6-8 weeks after adherence barriers are addressed', correct: true },
      { key: 'b_htn_target', label: 'Blood pressure treatment goal: <130/80 mmHg for diabetes per 2025 AHA/ACC Hypertension Guideline', correct: true },
      { key: 'b_htn_o2', label: 'Intensify with amlodipine today', correct: false },
    ]},
    { id: 'b_p_lipid', title: 'Hyperlipidemia / ASCVD risk reduction plan', options: [
      { key: 'b_lip_cont', label: 'Continue Atorvastatin 20 mg PO once daily at bedtime', correct: true },
      { key: 'b_lip_adh', label: 'Reinforce medication adherence and educate on cardiovascular risk reduction benefits', correct: true },
      { key: 'b_lip_reassess', label: 'Reassess lipid panel (LDL-C, TG) in ~3 months after adherence/access issues improve before escalating dose', correct: true },
      { key: 'b_lip_defer', label: 'Defer lipid-lowering intensification today until adherence is established', correct: true },
    ]},
    { id: 'b_p_access', title: 'Medication access, adherence & refill management plan', options: [
      { key: 'b_acc_stretch', label: 'Counsel patient regarding clinical risks associated with medication stretching (rebound BP elevation, hyperglycemia, organ damage)', correct: true },
      { key: 'b_acc_consist', label: 'Encourage consistent daily medication administration without skipping doses', correct: true },
      { key: 'b_acc_pillbox', label: 'Recommend a 7-day pill organizer (pillbox) to support adherence routines', correct: true },
      { key: 'b_acc_refill', label: 'Review refill management strategies and explore medication synchronization options with community pharmacy', correct: true },
      { key: 'b_acc_notify', label: 'Educate patient to notify healthcare team immediately when affordability concerns or copay increases arise', correct: true },
      { key: 'b_acc_compare', label: 'Explore pharmacy cost-comparison options, retail $4 generic prescription programs, and 90-day supplies for savings', correct: true },
    ]},
    { id: 'b_p_life', title: 'Lifestyle modification & weight management plan', options: [
      { key: 'b_lf_ssb', label: 'Counsel on reduction and elimination of sugary beverages (cut regular soda and sweet tea; substitute water)', correct: true },
      { key: 'b_lf_portion', label: 'Encourage portion control and improved food selection (reduce frozen convenience dinners and high-sodium meals)', correct: true },
      { key: 'b_lf_act', label: 'Recommend gradual progression toward >=150 minutes/week of moderate physical activity (e.g., walking 30 min 5 days/week)', correct: true },
      { key: 'b_lf_wt', label: 'Reinforce relationship between weight reduction (5-7% weight loss target), blood pressure control, and glycemic improvement', correct: true },
    ]},
    { id: 'b_p_edu', title: 'Patient education & health literacy plan', options: [
      { key: 'b_edu_a1c', label: 'Educate patient regarding A1C (3-month blood sugar average) and diabetes treatment goals (<7%)', correct: true },
      { key: 'b_edu_cv', label: 'Educate patient regarding cardiovascular risk reduction strategies (blood pressure, cholesterol, glucose control)', correct: true },
      { key: 'b_edu_comm', label: 'Reinforce importance of proactively communicating medication access and cost barriers', correct: true },
      { key: 'b_edu_insulin', label: 'Reassure patient regarding insulin fears: starting oral SGLT2 inhibitor and consistent adherence will help maintain control and avoid insulin', correct: true },
    ]},
    { id: 'b_p_imm', title: 'Preventive care & immunization plan', options: [
      { key: 'b_imm_pcv', label: 'Recommend Pneumococcal conjugate vaccination (PCV20) if not previously administered (indicated for age 62 with diabetes)', correct: true },
      { key: 'b_imm_shing', label: 'Recommend Recombinant Zoster vaccine (Shingrix) 2-dose series (0 and 2-6 months) for age ≥50', correct: true },
      { key: 'b_imm_tdap', label: 'Recommend Tdap booster today (overdue, 12 years since last booster) per CDC Adult Immunization Schedule', correct: true },
      { key: 'b_imm_incorp', label: 'Incorporate preventive care immunizations and screenings into long-term management plan', correct: true },
    ]},
    { id: 'b_p_fu', title: 'Follow-up & monitoring timeline', options: [
      { key: 'b_fu_time', label: 'Follow up in 6-8 weeks to reassess medication access interventions, formulary approval, and adherence', correct: true },
      { key: 'b_fu_bp', label: 'Obtain repeat home BP readings and review home BP log at follow-up visit', correct: true },
      { key: 'b_fu_refill', label: 'Review pharmacy refill history and verify consistent medication administration at follow-up visit', correct: true },
      { key: 'b_fu_a1c', label: 'Repeat A1C, fasting lipid panel, and comprehensive metabolic panel in ~3 months', correct: true },
    ]},
  ],
  COUNSELING: [
    { id: 'b_c1', title: 'Addressing Cost', body: [
      "Let's work together to find a version of your medications that you can actually afford through patient assistance or covered alternatives.",
      "It's very important to take your blood pressure and diabetes medications every single day, not every other day.",
      "If costs are ever an issue, please let us know immediately instead of stretching doses." ] },
  ],
  PRECEPTOR: {
    keyIssues: ['Empagliflozin never started (cost barrier)', 'Medication stretching behavior', 'A1C and BP above goal due to non-adherence'],
    assessment: ['A1C 8.8% and BP 152/94 reflect non-adherence, not treatment failure', 'Cost is the root cause'],
    plan: ['Re-initiate an affordable SGLT2 inhibitor', 'Reinforce daily adherence to current regimen', 'Recheck A1C and BP in 3 months before escalating'],
    pearls: ['Always check fill history against active med list', 'Cost barriers often manifest as "non-adherence"'],
    mistakes: ['Escalating therapy without addressing the underlying adherence/cost barrier', 'Prescribing insulin prematurely'],
    followupQuestions: ['How can pharmacists improve long-term medication access?'],
    checklist: ['Identified unstarted empagliflozin', 'Uncovered medication stretching', 'Addressed affordability', 'Deferred premature intensification'],
  },
})


const jamesWed = makeCase({
  id: 'james-wed',
  PATIENT: jamesTue.PATIENT,
  ENCOUNTER: {
    day: 'Wednesday', type: '3-Month Follow-Up', difficulty: 'Intermediate', difficultyTone: 'teal',
    setting: 'Collaborative Practice Ambulatory Care Pharmacy Clinic',
    chiefConcern: "Things are definitely better, but medications are still expensive.",
    snapshotSummary: '3-month collaborative practice follow-up visit. Empagliflozin 10 mg successfully initiated 3 months ago via patient assistance program. Medication stretching resolved. A1C improved from 8.8% to 7.9%, BP improved from 152/94 to 138/86 mmHg, LDL-C improved from 103 to 84 mg/dL, weight reduced by 2.5 kg.',
    diseaseStates: ['Type 2 Diabetes', 'Hypertension', 'Hyperlipidemia', 'Class I Obesity', 'Medication Access & Adherence Barrier'],
    learningObjectives: [
      'Evaluate clinical response to SGLT2 inhibitor initiation and adherence optimization',
      'Distinguish short-term assistance success from long-term medication affordability sustainability',
      'Decide between clinical observation vs premature therapy intensification',
      'Address residual health literacy gaps and preventive care needs'
    ],
  },
  VITALS: { bp: '138/86', bpRepeat: '136/84', hr: '78', rr: '16', temp: '98.2°F', weight: '98.5 kg', height: "5'10\" (70 inches)", bmi: '31.1',
    flags: { bp: 'high', bpRepeat: 'high', bmi: 'high' } },
  LABS: [
    { label: 'A1C', value: '7.9', unit: '%', flag: 'high', note: 'Previous 8.8% (0.9% absolute reduction; improved but above goal)' },
    { label: 'Glucose', value: '148', unit: 'mg/dL', flag: 'high' },
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal', note: 'Stable and normal on ACE inhibitor plus thiazide' },
    { label: 'SCr', value: '1.02', unit: 'mg/dL', flag: 'normal', note: 'Mild expected hemodynamic rise from baseline 0.96 mg/dL following SGLT2i initiation; clinically stable' },
    { label: 'eGFR', value: '84', unit: 'mL/min/1.73m²', flag: 'normal', note: 'Preserved and stable renal function (prior 89 mL/min/1.73m²)' },
    { label: 'UACR', value: '16', unit: 'mg/g', flag: 'normal', note: 'Stable and normal (prior 18 mg/g)' },
    { label: 'Total cholesterol', value: '172', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '158', unit: 'mg/dL', flag: 'normal' },
    { label: 'HDL-C', value: '46', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '84', unit: 'mg/dL', flag: 'normal', note: 'Previous 103 mg/dL (improved on consistent atorvastatin 20 mg)' },
  ],
  ALERTS: [
    { type: 'success', text: 'A1C decreased from 8.8% to 7.9% and BP improved to 138/86 mmHg following empagliflozin initiation and resolution of medication stretching.' },
    { type: 'info', text: 'Patient assistance program secured empagliflozin copay; ongoing coverage sustainability requires continuous monitoring.' },
  ],
  PROBLEMS: [
    { name: 'Type 2 diabetes mellitus', status: 'Improving on empagliflozin + metformin' },
    { name: 'Essential hypertension', status: 'Improved but above goal' },
    { name: 'Hyperlipidemia / primary ASCVD prevention', status: 'Improving on statin' },
    { name: 'Medication access barrier & affordability', status: 'Substantially improved; requires monitoring' },
    { name: 'Medication adherence', status: 'Substantially improved; stretching resolved' },
    { name: 'Obesity (Class I)', status: 'Improving (-2.5 kg)' },
    { name: 'Health literacy', status: 'Improving' },
    { name: 'Preventive care gaps', status: 'Immunizations indicated' },
  ],
  ALLERGIES: [],
  IMMUNIZATIONS: [
    { name: 'COVID-19', status: 'Up to date' },
    { name: 'Influenza', status: 'Up to date' },
    { name: 'PCV20 (Pneumococcal)', status: 'Not documented / indicated and due' },
    { name: 'Shingrix (Herpes Zoster)', status: 'Not documented / indicated and due' },
    { name: 'Tdap', status: 'Overdue (>10 years ago; booster recommended)' },
  ],
  MEDICATIONS: [
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'BID with meals', indication: 'Type 2 diabetes' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Type 2 diabetes / cardiorenal' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hypertension' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'Hypertension' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'daily at bedtime', indication: 'Hyperlipidemia' },
    { name: 'Omeprazole', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'GERD' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'Reason for referral & setting', value: '3-month collaborative practice follow-up visit for diabetes and hypertension management in an ambulatory care pharmacy clinic setting.' },
    { label: 'Chief Complaint (CC)', value: 'Reports feeling much better overall, but expresses lingering worry about ongoing medication affordability.' },
    { label: 'PMH', value: 'Type 2 diabetes mellitus (10 years), essential hypertension (12 years), hyperlipidemia (8 years), Class I obesity, and gastroesophageal reflux disease (GERD, on omeprazole 20 mg daily).' },
    { label: 'Past Surgical History (PSH)', value: 'Appendectomy (age 19), right knee arthroscopy (age 51).' },
    { label: 'Family History', value: 'Father: fatal stroke at age 68-71, type 2 diabetes, hypertension; Mother: hypertension, hyperlipidemia, deceased at age 74; Sister: type 2 diabetes.' },
    { label: 'Allergies', value: 'No known drug allergies (NKDA).' },
    { label: 'General wellness, symptoms & tolerability', value: 'Patient reports overall improvement and feels he is moving in the right direction; energy has improved. Successfully initiated empagliflozin 10 mg daily approximately 3 months ago after prior affordability barriers were resolved through a patient assistance program / manufacturer copay card. Has taken empagliflozin consistently for ~3 months with no missed doses and no refill delays. Explicitly denies hypoglycemia symptoms (no shakiness, sweating, lightheadedness). Notes mild expected daytime urination from SGLT2i mechanism, but explicitly denies dysuria, urgency, genital itching/yeast infections, dizziness, or volume depletion related to SGLT2 inhibitor therapy.' },
    { label: 'Medication adherence & access resolution', value: 'Medication adherence has improved substantially from baseline: medication stretching behavior is completely resolved (no longer takes medications every other day) and pharmacy refill delays have ceased. Has not missed any doses in the past 2 weeks.' },
    { label: 'Disease understanding & health literacy', value: 'Reports increased confidence and significantly improved understanding of diabetes and his medications; understands that A1C represents an average blood glucose over the past 2–3 months rather than a single day\'s reading.' },
    { label: 'Social History', value: 'Occupation: Recently retired truck driver on a fixed pension income. Marital/living: Married, lives with wife. Former smoker: Smoked 1 pack/day for 20 years; quit 10 years ago (20 pack-years). Alcohol use: Uses alcohol (1–2 beers on weekends). Recreational drug use: Explicitly denies recreational or illicit drug use.' },
    { label: 'Diet & Lifestyle', value: 'Walking 20–30 minutes 4 days per week (~100 min/week toward >=150 min/week goal). Cut out sugary drinks and sweet tea, substituting water and unsweetened beverages. Cooking at home more often and practicing portion control.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular/Pulmonary/Neurologic: Explicitly denies chest pain, shortness of breath, palpitations, dizziness, syncope, severe headaches, lower extremity edema, and acute visual changes.' },
    { label: 'Patient Goals & Motivators', value: 'Patient stated goals include maintaining retirement independence, avoiding insulin therapy (strong fear of insulin based on father\'s experience), preventing cardiovascular events and stroke (father died of stroke at age 68). Remains anxious about long-term medication affordability and worries that future insurance changes (e.g., Medicare transition) could disrupt access to empagliflozin.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Weight change & BMI', value: 'Current weight 98.5 kg, baseline 101 kg, documenting a 2.5 kg (5.5 lb) weight loss over 3 months. BMI 31.1 kg/m² (BMI reconciled with height/weight: Class I Obesity).' },
    { label: 'Home BP corroboration', value: 'Home blood pressure log reviewed: average 136/84 mmHg, corroborating office readings (138/86 mmHg, repeat 136/84 mmHg; improved from initial visit 152/94 mmHg, but remaining slightly above <130/80 mmHg goal).' },
    { label: 'Glycemic & lipid improvement', value: 'Current A1C 7.9%, previous baseline A1C 8.8% (0.9% absolute reduction following empagliflozin 10 mg initiation and metformin adherence; goal <7.0%). Both A1C and LDL-C improved on therapy: LDL-C decreased from baseline 103 mg/dL to 84 mg/dL on consistent atorvastatin 20 mg daily.' },
    { label: 'Renal function & UACR stability', value: 'SCr 1.02 mg/dL (mild expected hemodynamic rise from baseline 0.96 mg/dL following SGLT2 inhibitor initiation; reflects reversible intraglomerular pressure reduction and is clinically stable). eGFR 84 mL/min/1.73m² (preserved and stable, prior 89 mL/min/1.73m²). UACR 16 mg/g (stable and normal, prior 18 mg/g). Serum potassium 4.4 mEq/L (stable and normal on ACE inhibitor plus thiazide).' },
    { label: 'Immunizations', value: 'COVID-19 and Influenza up to date. Gaps noted: PCV20 (pneumococcal) indicated and due; recombinant zoster vaccine (Shingrix) indicated and due; Tdap booster overdue (>10 years ago).' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Adherence & stretching', placeholder: 'Has stretching behavior resolved?' },
    { key: 'empaTol', label: 'Empagliflozin tolerability', placeholder: 'Any polyuria, dysuria, fungal infections?' },
    { key: 'affordability', label: 'Ongoing cost concerns', placeholder: 'How is the copay card working?' },
    { key: 'lifestyle', label: 'Diet & exercise changes', placeholder: 'Walks, sweet tea reduction…' },
    { key: 'homeVitals', label: 'Home BP & glucose', placeholder: 'Recent readings…' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'jw_empa', topic: 'Empagliflozin use', keywords: ['empagliflozin', 'jardiance', 'pill', 'taking'],
      response: "I've been taking the empagliflozin every morning like clockwork for almost 3 months now. The copay card worked!" },
    { id: 'jw_stretch', topic: 'Medication stretching', keywords: ['stretch', 'skip', 'every other day', 'miss'],
      response: "No stretching at all anymore. Now that the cost is manageable, I take all my pills every single day." },
    { id: 'jw_side_effects', topic: 'Side effects', keywords: ['side effect', 'urinate', 'uti', 'infection', 'dizzy'],
      response: "I did notice I pee a little bit more during the day, but no burning, no infections, and no dizziness at all." },
    { id: 'jw_afford', topic: 'Affordability concern', keywords: ['cost', 'afford', 'insurance', 'future', 'card'],
      response: "The copay card helps for now, but I worry about what happens next year or when I transition to Medicare. Money is tight on my pension." },
    { id: 'jw_lifestyle', topic: 'Lifestyle progress', keywords: ['diet', 'walk', 'exercise', 'drink', 'sweet tea'],
      response: "I cut out the sweet tea and sodas, drink mostly water now, and walk 20 to 30 minutes 4 days a week with my wife." },
    { id: 'jw_homebg', topic: 'Home glucose monitoring', keywords: ['blood sugar', 'glucose', 'fasting', 'meter', 'finger stick'],
      response: "I check my blood sugar a few times a week with my home meter. My fasting readings have come down to around 140 to 160 now." },
    { id: 'jw_homebp', topic: 'Home blood pressure monitoring', keywords: ['blood pressure', 'home bp', 'cuff', 'readings', 'log'],
      response: "I check my blood pressure at home with my cuff. My readings have been averaging around 136 over 84, which matches what you're seeing today." },
    { id: 'jw_fh', topic: 'Family history', keywords: ['family history', 'father', 'mother', 'sister', 'parents', 'sibling'],
      response: "My father had high blood pressure, type 2 diabetes, and had a stroke at age 71. My mother had high blood pressure and high cholesterol. My sister has type 2 diabetes." },
  ],
  ASSESSMENT_CARDS: [
    {
      id: 't2dm',
      title: 'Type 2 diabetes mellitus',
      icon: 'Droplet',
      color: '0d9488',
      questions: [
        {
          key: 't2dm_eval',
          q: 'Glycemic status, goal, and contributing factors:',
          defaultAnswer: 'Status: Improving on empagliflozin 10 mg daily and metformin XR 1000 mg twice daily. Current A1C 7.9% improved from baseline 8.8% (0.9% absolute reduction; goal <7.0% per ADA 2026 Standards of Care). Improvement is directly attributed to successful empagliflozin initiation, complete resolution of medication stretching, consistent adherence, increased disease understanding, and lifestyle changes (sugary drink elimination, regular walking). Prior medication access barriers directly contributed to poor baseline control. Current therapy is effective and well tolerated without hypoglycemia or adverse effects; continued reinforcement of adherence, lifestyle modifications, and medication access is warranted.'
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
          q: 'Blood pressure status, goal, and contributing factors:',
          defaultAnswer: 'Status: Improved but above goal (office BP 138/86 mmHg, repeat 136/84 mmHg; home average ~136/84 mmHg; improved from baseline 152/94 mmHg). Goal: <130/80 mmHg per 2025 AHA/ACC Hypertension Guideline. Improvement is directly attributed to resolved medication stretching and consistent adherence to lisinopril 20 mg / HCTZ 25 mg daily, augmented by empagliflozin initiation, sodium reduction, and 2.5 kg weight loss. Therapy is well tolerated with stable renal function and normal potassium. Clinicians should appropriately hold adding amlodipine today to assess the full, steady-state effect of consistent therapy before further escalation.'
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
          q: 'Lipid response and cardiovascular risk assessment:',
          defaultAnswer: 'Status: Improving on atorvastatin 20 mg daily (LDL-C decreased from baseline 103 mg/dL to 84 mg/dL; adherence-driven cholesterol improvement). The patient has ongoing elevated cardiovascular risk due to multiple synthesized risk factors: type 2 diabetes mellitus, hypertension, obesity, former smoking history, and family history of premature stroke (father fatal stroke at age 68). If LDL-C remains >70 mg/dL after further observation, future intensification options include increasing atorvastatin to 40 mg or adding ezetimibe.'
        }
      ]
    },
    {
      id: 'access',
      title: 'Medication access barrier & affordability',
      icon: 'DollarSign',
      color: '059669',
      questions: [
        {
          key: 'acc_eval',
          q: 'Affordability status and long-term sustainability:',
          defaultAnswer: 'Status: Substantially improved. The primary medication-related problem was successfully addressed through patient assistance program / manufacturer copay assistance, enabling consistent initiation and 3-month use of empagliflozin 10 mg daily. However, there is a critical distinction between short-term copay card relief and long-term sustainability on a fixed pension income. Ongoing insurance coverage monitoring and proactive affordability planning are required to prevent future lapses.'
        }
      ]
    },
    {
      id: 'adherence',
      title: 'Medication adherence',
      icon: 'CheckCircle',
      color: '10b981',
      questions: [
        {
          key: 'adh_eval',
          q: 'Adherence pattern and clinical impact:',
          defaultAnswer: 'Status: Substantially improved compared with baseline. Complete resolution of medication stretching behavior (no longer taking medications every other day) and cessation of pharmacy refill delays. Observed clinical improvements in A1C (8.8% to 7.9%), blood pressure (152/94 to 138/86), and LDL-C (103 to 84) are directly linked to consistent daily medication adherence. Continued adherence reinforcement is warranted.'
        }
      ]
    },
    {
      id: 'obesity',
      title: 'Obesity (Class I, BMI 31.1 kg/m²)',
      icon: 'Scale',
      color: '4f46e5',
      questions: [
        {
          key: 'obe_eval',
          q: 'Weight trajectory and ongoing cardiometabolic risk:',
          defaultAnswer: 'Status: Improving. Weight reduced by 2.5 kg (from 101 kg to 98.5 kg; BMI 31.9 to 31.1 kg/m²). Weight loss directly contributes to observed improvements in glycemic and blood pressure control. However, obesity continues to confer ongoing cardiovascular and metabolic risk; continued lifestyle intervention is strongly recommended.'
        }
      ]
    },
    {
      id: 'literacy',
      title: 'Health literacy & disease understanding',
      icon: 'BookOpen',
      color: '6366f1',
      questions: [
        {
          key: 'lit_eval',
          q: 'Health literacy gains and ongoing educational needs:',
          defaultAnswer: 'Status: Improving. The patient demonstrates improved understanding of diabetes, now understands that A1C reflects average blood glucose over 2–3 months, and understands the purpose of his chronic medications. Residual knowledge gaps regarding long-term cardiovascular and kidney complications warrant continued patient education.'
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
          q: 'Immunization gaps and preventive health maintenance:',
          defaultAnswer: 'Status: Incomplete immunizations. Pneumococcal conjugate vaccination (PCV20) is indicated for adult with diabetes; recombinant zoster vaccine (Shingrix 2-dose series) is indicated for adult >=50 years; Tdap booster is overdue (>10 years). Preventive interventions remain fully appropriate.'
        }
      ]
    },
  ],
  PLAN_SECTIONS: [
    {
      id: 'dm_plan',
      title: 'Diabetes & SGLT2 inhibitor therapy plan',
      options: [
        { key: 'd1', label: 'Continue metformin XR 1000 mg PO twice daily with meals', correct: true },
        { key: 'd2', label: 'Continue empagliflozin 10 mg PO daily (maintain 10 mg, do NOT intensify to 25 mg)', correct: true },
        { key: 'd3', label: 'Reinforce medication adherence and lifestyle modifications', correct: true },
        { key: 'd4', label: 'Repeat A1C in ~3 months to assess trajectory toward <7.0% goal', correct: true },
        { key: 'd5', label: 'Monitor for SGLT2 inhibitor adverse effects (mycotic genital infections, dysuria, volume depletion)', correct: true },
      ]
    },
    {
      id: 'htn_plan',
      title: 'Hypertension plan',
      options: [
        { key: 'h1', label: 'Continue lisinopril 20 mg PO daily', correct: true },
        { key: 'h2', label: 'Continue hydrochlorothiazide 25 mg PO daily', correct: true },
        { key: 'h3', label: 'Continue home blood pressure monitoring with a written log', correct: true },
        { key: 'h4', label: 'Hold adding amlodipine today; conditionally reassess blood pressure in 4–6 weeks / 3 months and intensify only if still above <130/80 mmHg', correct: true },
      ]
    },
    {
      id: 'lipid_plan',
      title: 'Hyperlipidemia / ASCVD risk reduction plan',
      options: [
        { key: 'l1', label: 'Continue atorvastatin 20 mg PO daily at bedtime', correct: true },
        { key: 'l2', label: 'Reinforce statin medication adherence', correct: true },
        { key: 'l3', label: 'Repeat lipid panel in 6–12 months', correct: true },
      ]
    },
    {
      id: 'access_plan',
      title: 'Medication access & affordability plan',
      options: [
        { key: 'ac1', label: 'Review ongoing insurance coverage and prescription drug tier status', correct: true },
        { key: 'ac2', label: 'Reassess affordability concerns at future visits prior to assistance program expiration', correct: true },
        { key: 'ac3', label: 'Educate patient to immediately report any future cost barriers or copay changes', correct: true },
        { key: 'ac4', label: 'Continue utilizing manufacturer assistance and copay card resources', correct: true },
      ]
    },
    {
      id: 'adh_plan',
      title: 'Medication adherence & refill management plan',
      options: [
        { key: 'ad1', label: 'Reinforce the importance of consistent daily medication administration', correct: true },
        { key: 'ad2', label: 'Continue refill management strategies (request refills 7 days prior to running out)', correct: true },
        { key: 'ad3', label: 'Maintain reminder systems and weekly pill organizer / box', correct: true },
      ]
    },
    {
      id: 'life_plan',
      title: 'Lifestyle modification & weight management plan',
      options: [
        { key: 'lf1', label: 'Continue walking program progressing toward >=150 minutes/week moderate activity', correct: true },
        { key: 'lf2', label: 'Continue elimination of sugar-sweetened beverages and maintain portion control', correct: true },
        { key: 'lf3', label: 'Encourage further dietary improvements (low sodium, high fiber)', correct: true },
        { key: 'lf4', label: 'Explicitly tie continued weight loss to blood pressure and glycemic benefits', correct: true },
      ]
    },
    {
      id: 'edu_plan',
      title: 'Patient education & health literacy plan',
      options: [
        { key: 'ed1', label: 'Continue diabetes self-management education', correct: true },
        { key: 'ed2', label: 'Reinforce understanding of cardiovascular risk reduction and stroke prevention', correct: true },
        { key: 'ed3', label: 'Discuss empagliflozin\'s cardiorenal and cardiovascular benefits beyond glucose lowering', correct: true },
      ]
    },
    {
      id: 'imm_plan',
      title: 'Preventive care & immunization plan',
      options: [
        { key: 'im1', label: 'Verify vaccination history in state registry', correct: true },
        { key: 'im2', label: 'Recommend pneumococcal conjugate vaccination (PCV20) for adult with diabetes', correct: true },
        { key: 'im3', label: 'Recommend recombinant zoster vaccine (Shingrix 2-dose series) for adult >=50 years', correct: true },
        { key: 'im4', label: 'Recommend Tdap booster vaccination for overdue status (>10 years)', correct: true },
      ]
    },
    {
      id: 'fu_plan',
      title: 'Follow-up & monitoring timeline',
      options: [
        { key: 'fu1', label: 'Follow up in ~3 months for collaborative ambulatory care visit', correct: true },
        { key: 'fu2', label: 'Obtain repeat A1C prior to next visit', correct: true },
        { key: 'fu3', label: 'Reassess long-term sustainability of medication access and affordability', correct: true },
      ]
    },
  ],
  PLAN_FREETEXT: [],
  GUIDING_QUESTIONS: [
    'What evidence suggests the affordability intervention was successful?',
    'Why is it important to reassess medication affordability even after improvement?',
    'Would you intensify diabetes therapy today? Why or why not?',
    'Would you intensify hypertension therapy today? Why or why not?',
    'How can pharmacists improve long-term medication access?',
    'What evidence suggests adherence improved?',
    'What remaining barriers exist?',
    'How would you explain the relationship between medication access and clinical outcomes?'
  ],
  PRECEPTOR: {
    keyIssues: ['Clinical improvement on current therapy', 'Persistent affordability concerns', 'A1C and BP nearing goal'],
    assessment: ['Improvement suggests therapy is working', 'Observation is reasonable before further intensification', 'Must assess long-term access sustainability'],
    plan: ['Continue current regimen', 'Continue affordability monitoring', 'Reassess in 3 months'],
    pearls: ['Improvement and goal attainment are not the same thing'],
    mistakes: ['Premature therapy intensification', 'Assuming access issues are permanently resolved'],
    followupQuestions: ['What evidence suggests the affordability intervention was successful?'],
    checklist: ['Recognized improvement', 'Addressed affordability sustainability', 'Avoided premature escalation'],
  },
})

const jamesThu = makeCase({
  id: 'james-thu',
  PATIENT: jamesTue.PATIENT,
  ENCOUNTER: {
    day: 'Thursday', type: '6-Month Follow-Up', difficulty: 'Advanced', difficultyTone: 'amber',
    setting: 'Collaborative Practice Ambulatory Care Pharmacy Clinic',
    chiefConcern: "Things are going pretty well, but I still worry about keeping everything affordable.",
    snapshotSummary: '62-year-old male presenting for scheduled 6-month follow-up (final follow-up) in an ambulatory care pharmacy clinic under collaborative practice agreement. BP is controlled (128/80 mmHg, repeat 126/78 mmHg) and A1C near goal (7.1%), weight down 5.5 kg total, and empagliflozin access maintained without difficulty. Focus on long-term disease maintenance, proactive affordability surveillance, and closing preventive care gaps.',
    diseaseStates: ['Type 2 Diabetes', 'Hypertension', 'Hyperlipidemia', 'Medication Access & Affordability', 'Medication Adherence', 'Obesity', 'Health Literacy', 'Preventive Care Gaps'],
    learningObjectives: ['Evaluate long-term response across cardiorenal and metabolic parameters', 'Develop proactive contingency plans for future access barriers', 'Reinforce chronic disease self-management, adherence, and lifestyle', 'Address preventive care gaps including adult immunizations'],
  },
  VITALS: { bp: '128/80', bpRepeat: '126/78', hr: '74', rr: '16', temp: '98.2°F', weight: '95.5 kg', height: "5'10\" (70 inches)", bmi: '30.2',
    flags: { bp: 'normal', bpRepeat: 'normal' },
    extras: [
      { label: 'Total weight change', value: '−5.5 kg total weight reduction since baseline visit (baseline 101 kg to current 95.5 kg; BMI 32.1 to 30.2 kg/m², reconciled as Class I Obesity)', flag: 'normal' },
      { label: 'Home BP average', value: '~126/78 mmHg (corroborates office BP, at goal <130/80 mmHg)', flag: 'normal' },
      { label: 'Fasting home glucose', value: '120–140 mg/dL', flag: 'normal' },
    ]
  },
  LABS: [
    { label: 'A1C', value: '7.1', unit: '%', flag: 'warn', note: 'Prior 7.9% at 3 months; baseline 8.8% — downward trend across three time points: 8.8% → 7.9% → 7.1%' },
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.3', unit: 'mEq/L', flag: 'normal', note: 'Potassium stable on lisinopril 20 mg + HCTZ 25 mg' },
    { label: 'SCr', value: '1.00', unit: 'mg/dL', flag: 'normal', note: 'Stable and preserved renal function' },
    { label: 'eGFR', value: '85', unit: 'mL/min/1.73m²', flag: 'normal', note: 'Stable and preserved renal function' },
    { label: 'UACR', value: '16', unit: 'mg/g', flag: 'normal', note: 'UACR low/normal and stable (<30 mg/g)' },
    { label: 'Total cholesterol', value: '165', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '72', unit: 'mg/dL', flag: 'normal', note: 'Baseline 103 mg/dL — sustained statin response and LDL-C improvement on atorvastatin 20 mg daily' },
    { label: 'HDL-C', value: '44', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '170', unit: 'mg/dL', flag: 'normal' },
  ],
  ALERTS: [{ level: 'info', text: 'Significant longitudinal improvement. BP controlled, A1C near goal. Weight reduced by 5.5 kg total from baseline.' }],
  PROBLEMS: [
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 7.1% (downward trend: 8.8% → 7.9% → 7.1%, near goal <7%)', flag: 'normal' },
    { name: 'Essential hypertension', detail: 'BP 128/80 (repeat 126/78, home ~126/78) — controlled and at goal <130/80', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'LDL 72 (baseline 103) on atorvastatin 20 mg — sustained statin response', flag: 'normal' },
    { name: 'Class I Obesity', detail: 'BMI 30.2 (−5.5 kg total loss from baseline 101 kg)', flag: 'warn' },
    { name: 'Medication access & affordability', detail: 'Empagliflozin access maintained; long-term contingency planning', flag: 'normal' },
    { name: 'Medication adherence', detail: 'Consistent daily use; stretching resolved', flag: 'normal' },
    { name: 'Gastroesophageal reflux disease (GERD)', detail: 'Managed on omeprazole 20 mg daily', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'BID with meals', indication: 'Type 2 diabetes', notes: 'Taking consistently, well tolerated' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily in morning', indication: 'Type 2 diabetes / cardiorenal', notes: 'Taking consistently without difficulty, well tolerated' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hypertension', notes: 'Taking consistently, well tolerated' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily in morning', indication: 'Hypertension', notes: 'Taking consistently, well tolerated' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'daily at bedtime', indication: 'Hyperlipidemia / ASCVD prevention', notes: 'Taking consistently, well tolerated' },
    { name: 'Omeprazole', dose: '20 mg', route: 'PO', freq: 'daily before breakfast', indication: 'GERD', notes: 'Taking consistently' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Current season up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date with current booster', flag: 'normal' },
    { name: 'Pneumococcal (PCV20)', status: 'Not documented — recommended per CDC Adult Immunization Schedule for diabetes age 19-64', flag: 'missing' },
    { name: 'Zoster (Shingrix series)', status: 'Not documented — 2-dose series recommended for age >=50', flag: 'missing' },
    { name: 'Tdap booster', status: 'Last received >10 years ago — overdue for booster per CDC schedule', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'General wellness & symptoms', value: 'Patient states he feels better than in several years with greatly improved energy and physical function.' },
    { label: 'Medication adherence & access', value: 'Denies recurrence of stretching doses, delayed refills, or cost-related missed doses; reports consistent daily medication use without difficulty. Takes empagliflozin 10 mg daily consistently without adverse effects and believes empagliflozin contributed significantly to his clinical improvement.' },
    { label: 'Health literacy & confidence', value: 'Expresses greatly increased confidence in managing his chronic conditions; understands medication purposes (metformin and empagliflozin for blood sugar, kidney, and heart protection; lisinopril and HCTZ for blood pressure and kidney protection; atorvastatin for cholesterol and stroke prevention).' },
    { label: 'Dietary improvements', value: 'Sustained dietary improvements including specific reduction of sugary beverages and sweet tea, active portion control, and increased home-prepared meals.' },
    { label: 'Physical activity', value: 'Walking 5 days per week with session duration of 25 to 30 minutes each time.' },
    { label: 'Past Medical History (PMH)', value: 'Type 2 diabetes mellitus (diagnosed 10 years ago), essential hypertension (diagnosed 12 years ago), hyperlipidemia (diagnosed 8 years ago), obesity (Class I, BMI 30.2 kg/m²), and Gastroesophageal Reflux Disease (GERD, managed on omeprazole 20 mg daily).' },
    { label: 'Social History', value: 'Occupation: Recently retired truck driver living with wife on fixed income. Tobacco: Former smoker (1 pack/day for 20 years, quit 10 years ago). Alcohol: 1-2 beers on weekends. Recreational drugs: Explicitly denies recreational or illicit drug use.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular/Pulmonary/Neurologic/Endocrine/GU: Explicitly denies chest pain, shortness of breath, heart palpitations, dizziness, syncope, severe headaches, and visual changes. Explicitly denies hypoglycemia symptoms, denies UTI or dysuria symptoms, and denies other medication adverse effects.' },
    { label: 'Patient Goals & Motivations', value: 'Highly motivated to maintain independence through retirement, prevent a stroke like his father had at age 71, and avoid future insulin therapy.' },
    { label: 'Family History', value: 'Father: fatal stroke at age 68-71, type 2 diabetes, hypertension; Mother: hypertension, hyperlipidemia, deceased at age 74; Sister: type 2 diabetes.' },
    { label: 'Long-term Affordability Concern', value: 'Expresses lingering anxiety about future insurance changes or benefit cliffs, fearing loss of affordable access to empagliflozin.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Total weight change', value: 'Current weight 95.5 kg (−5.5 kg total weight reduction since baseline visit from 101 kg; BMI 30.2 kg/m², reconciled as Class I Obesity).' },
    { label: 'A1C downward trend', value: 'A1C downward trend across three time points: baseline 8.8% → 3-month 7.9% → 6-month 7.1% (near individualized goal <7.0%).' },
    { label: 'BP longitudinal trend', value: 'Baseline 152/94 mmHg → 3-month 138/86 mmHg → 6-month 128/80 mmHg (repeat 126/78 mmHg); home BP average ~126/78 mmHg corroborates office readings and achieves goal <130/80 mmHg.' },
    { label: 'UACR interpretation', value: 'UACR 16 mg/g confirms low, normal, and stable albumin excretion (<30 mg/g).' },
    { label: 'Renal & Electrolyte stability', value: 'SCr 1.00 mg/dL, eGFR 85 mL/min/1.73m² (stable and preserved renal function); serum potassium 4.3 mEq/L (stable on lisinopril 20 mg + HCTZ 25 mg).' },
    { label: 'Lipid response', value: 'LDL-C improved from baseline 103 mg/dL to 72 mg/dL on atorvastatin 20 mg daily, reflecting sustained statin response and adherence.' },
    { label: 'Immunization status', value: 'PCV20, recombinant zoster vaccine series (Shingrix), and Tdap booster remain open per CDC Adult Immunization Schedule.' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'cost', label: 'Long-term Access', placeholder: 'Insurance or coverage worries?' },
    { key: 'adherence', label: 'Medication Adherence', placeholder: 'Consistency, stretching, missed doses?' },
    { key: 'diet', label: 'Diet & Nutrition', placeholder: 'Sweet drinks, portion control, cooking?' },
    { key: 'exercise', label: 'Physical Activity', placeholder: 'Walking frequency and duration?' },
    { key: 'symptoms', label: 'Review of Systems', placeholder: 'Chest pain, SOB, dizziness, hypoglycemia?' },
    { key: 'goals', label: 'Patient Goals', placeholder: 'Retirement independence, avoiding insulin?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'james-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'james-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin and acetaminophen occasionally for my joint aches. I do not take any other supplements." },
    { id: 'james-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink 1 to 2 beers on weekends while watching sports, but I never drink during the week." },
    { id: 'james-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 20 years, but I quit 10 years ago." },
    { id: 'james-thu_social', topic: 'Social / Lifestyle', field: 'social', keywords: ['live with', 'marital', 'work', 'job', 'retired', 'truck driver'], response: 'I am a recently retired truck driver. I live with my wife on a fixed income. I have never used recreational drugs in my life.' },
    { id: 'james-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had high blood pressure, type 2 diabetes, and had a stroke at age 71. My mother had high blood pressure and high cholesterol. My sister has type 2 diabetes." },
    { id: 'james-thu_surg', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'appendix', 'appendectomy', 'knee', 'arthroscopy'], response: 'I had my appendix out when I was 19, and a knee scope surgery on my right knee when I was 51.' },
    { id: 'james-thu_homebp', topic: 'Home BP monitoring', field: 'homeBp', keywords: ['home blood pressure', 'bp at home', 'check your blood pressure', 'monitor', 'log', 'average'], response: 'I check my blood pressure at home 1 to 2 times a week. Things have really improved — my readings are usually in the 120s over 70s now. My average is about 126 over 78.' },
    { id: 'james-thu_homebg', topic: 'Home glucose monitoring', field: 'glucoseMonitoring', keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'finger stick', 'meter'], response: 'I check my blood sugar a few times a week. My fasting numbers have really improved — they are usually in the 120 to 140 range now.' },
    { id: 'james-thu_duration', topic: 'Disease duration', field: 'pmh', keywords: ['how long', 'when were you diagnosed', 'duration', 'years', 'gerd'], response: 'I have had high blood pressure for about 12 years, diabetes for 10 years, high cholesterol for 8 years, and acid reflux (GERD) which is controlled on omeprazole.' },
    { id: 'james-thu_wellness', topic: 'General wellness and adherence', field: 'adherence', keywords: ['feel', 'better', 'years', 'energy', 'stretching', 'delay', 'miss'], response: "I feel better than in several years! I take all my pills every day now. No more stretching pills, no delayed refills, and no missed doses. Taking empagliflozin consistently without difficulty has made a huge difference." },
    { id: 'james-thu_lifestyle', topic: 'Diet and physical activity details', field: 'diet', keywords: ['diet', 'eat', 'soda', 'sweet tea', 'beverage', 'portion', 'cook', 'walk', 'minutes'], response: "I cut out regular soda and sweet tea completely. My wife and I cook at home almost every night with strict portion control. I also walk 5 days a week for 25 to 30 minutes each session." },
    { id: 'james-thu_ros', topic: 'Review of systems', field: 'symptoms', keywords: ['ros', 'chest pain', 'short of breath', 'palpitations', 'dizziness', 'syncope', 'headache', 'vision', 'uti', 'hypoglycemia'], response: "I have no chest pain, no shortness of breath, no heart palpitations, no dizziness, no syncope, no severe headaches, and no visual changes. I have had no low blood sugar episodes, no urinary tract infections, and no side effects from any of my medications." },
    { id: 'james-thu_goals', topic: 'Patient goals and motivations', field: 'goals', keywords: ['goal', 'motivation', 'retire', 'independence', 'insulin', 'stroke'], response: "My primary goals are to maintain my independence through retirement, avoid insulin shots at all costs, and prevent a stroke like my father had." },
    { id: 'bth_cost', topic: 'Fear of Losing Access', field: 'cost', keywords: ['worry', 'insurance', 'future', 'change'],
      response: "Things are okay right now, but I still worry about what happens if my insurance changes again. I'd hate to finally get things under control and then have to stop because I can't afford empagliflozin." },
  ],
  ASSESSMENT_CARDS: [
    {
      id: 't2dm',
      title: 'Type 2 diabetes mellitus',
      icon: 'Droplet',
      color: '0d9488',
      questions: [
        {
          key: 'dm_eval',
          q: 'Glycemic status, trend, contributing factors, and goal:',
          defaultAnswer: 'Status: Significantly improved, near goal. Documents A1C improvement across three time points: baseline 8.8% → 3-month 7.9% → 6-month 7.1%. Glycemic goal is A1C <7.0% per ADA 2026 Standards of Care. Attributes improvement to resolution of initial access barriers, empagliflozin 10 mg initiation, improved adherence, increased health literacy, and sustained lifestyle modification. Patient is approaching target with a favorable clinical trajectory. Current therapy (Metformin XR 1,000 mg twice daily + Empagliflozin 10 mg daily) is effective and well tolerated without hypoglycemia or adverse effects. Continue adherence, monitoring, and lifestyle reinforcement.'
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
          q: 'Blood pressure control status, office and home measurements, and contributors:',
          defaultAnswer: 'Status: Controlled. Documents office BP at goal (128/80 mmHg, repeat 126/78 mmHg); home BP average (~126/78 mmHg) corroborates office measurements. States BP goal <130/80 mmHg for diabetes per 2025 ACC/AHA and ADA 2026 guidelines; confirms patient is meeting the evidence-based goal. Attributes control to adherence, resolution of medication stretching, consistent therapy, 5.5 kg weight reduction, sodium reduction, and regular walking 5 days/week. Documents current regimen (lisinopril 20 mg + HCTZ 25 mg daily), well tolerated with stable renal function (eGFR 85 mL/min/1.73m²) and stable potassium (K 4.3 mEq/L). No further antihypertensive intensification warranted; continue HBPM and lifestyle to maintain control.'
        }
      ]
    },
    {
      id: 'ascvd_lipids',
      title: 'Hyperlipidemia / Primary ASCVD prevention',
      icon: 'ShieldAlert',
      color: 'd97706',
      questions: [
        {
          key: 'ascvd_eval',
          q: 'Lipid control status, trend, statin intensity, and cardiovascular risk:',
          defaultAnswer: 'Status: Improved. Documents LDL-C improvement from baseline 103 mg/dL to 72 mg/dL on atorvastatin 20 mg daily. States at least moderate-intensity statin recommendation for diabetes age 40–75 per ADA 2026 and 2018 ACC-AHA Cholesterol Guidelines, with consideration of high-intensity statin (atorvastatin 40–80 mg) given multiple ASCVD risk enhancers (hypertension, obesity, former 20 pack-year tobacco use, family history of premature stroke in father at age 71, and long-standing diabetes). Attributes LDL reduction to improved adherence after access resolution. Atorvastatin 20 mg produces a favorable and well-tolerated response; continue statin, adherence, and lifestyle for multi-component CV risk reduction.'
        }
      ]
    },
    {
      id: 'access_affordability',
      title: 'Medication access & affordability surveillance',
      icon: 'DollarSign',
      color: '059669',
      questions: [
        {
          key: 'acc_eval',
          q: 'Access status, barrier resolution, and long-term dependency:',
          defaultAnswer: 'Status: Improved, requires long-term planning. Initial access barrier successfully addressed via patient assistance program / copay card. Maintained empagliflozin access with zero refill delays and no stretching. Resolution is associated with improvements across clinical parameters (A1C, BP, LDL) and self-management. Long-term disease control depends on sustained medication access; established proactive annual coverage review and contingency protocol.'
        }
      ]
    },
    {
      id: 'adherence',
      title: 'Medication adherence',
      icon: 'CheckCircle2',
      color: '2563eb',
      questions: [
        {
          key: 'adh_eval',
          q: 'Adherence trajectory, baseline recall, and reinforcement:',
          defaultAnswer: 'Status: Controlled. Adherence improved dramatically since initial visit. Recalls baseline barriers (delayed refills pending pension check, stretching pills to every other day, uninitiated empagliflozin due to cost). Now reports consistent daily use with only rare missed doses and no ongoing cost-related adherence barriers. Clinical improvements directly support reported adherence; continue adherence reinforcement.'
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
          q: 'Obesity status, weight loss amount, and chronic disease framing:',
          defaultAnswer: 'Status: Improving. Documents weight loss of ~5.5 kg since initial encounter (101 kg to 95.5 kg; BMI 32.1 to 30.2 kg/m²). Manage obesity as a chronic disease per ADA 2026. Attributes weight loss to sustained lifestyle modification (portion control, walking 25–30 min 5 days/wk, eliminating sugary beverages) plus empagliflozin. Continue lifestyle counseling to reduce ongoing cardiometabolic risk.'
        }
      ]
    },
    {
      id: 'health_literacy',
      title: 'Health literacy & disease understanding',
      icon: 'BookOpen',
      color: '6366f1',
      questions: [
        {
          key: 'lit_eval',
          q: 'Health literacy trajectory, baseline recall, and residual needs:',
          defaultAnswer: 'Status: Significantly improved compared with initial encounter. Recalls baseline deficits (not understanding A1C, not knowing medication purposes, not communicating financial distress). Now shows improved understanding of management, adherence, and monitoring. Patient actively participates with greater self-management confidence. Residual education needs include long-term cardiovascular risk, kidney protection, and cardiorenal benefits of SGLT2 inhibitors.'
        }
      ]
    },
    {
      id: 'preventive_care',
      title: 'Preventive care gaps & immunizations',
      icon: 'ShieldPlus',
      color: '8b5cf6',
      questions: [
        {
          key: 'prev_eval',
          q: 'Immunization gaps and recommendations:',
          defaultAnswer: 'Status: Open immunization gaps identified. Adult immunizations are framed as an essential component of comprehensive chronic disease management. Open gaps include: pneumococcal conjugate vaccine (PCV20) indicated for diabetes age 19–64; recombinant zoster vaccine series (Shingrix, 2 doses) indicated for age >=50; and Tdap booster overdue (>10-year interval) per CDC Adult Immunization Schedule.'
        }
      ]
    },
  ],
  PLAN_SECTIONS: [
    {
      id: 'dm_plan',
      title: 'Type 2 diabetes mellitus plan',
      options: [
        { key: 'dp1', label: 'Continue metformin XR 1000 mg PO twice daily with meals', correct: true },
        { key: 'dp2', label: 'Continue empagliflozin 10 mg PO daily in the morning', correct: true },
        { key: 'dp3', label: 'Reinforce adherence and lifestyle modification', correct: true },
        { key: 'dp4', label: 'Repeat A1C in ~3–6 months to monitor trajectory toward <7.0% goal', correct: true },
        { key: 'dp5', label: 'Continue monitoring for SGLT2 inhibitor adverse effects (mycotic genital infections, volume depletion, UTI symptoms)', correct: true },
      ]
    },
    {
      id: 'htn_plan',
      title: 'Essential hypertension plan',
      options: [
        { key: 'hp1', label: 'Continue lisinopril 20 mg PO daily', correct: true },
        { key: 'hp2', label: 'Continue hydrochlorothiazide 25 mg PO daily', correct: true },
        { key: 'hp3', label: 'Maintain blood pressure goal <130/80 mmHg; hold further antihypertensive intensification given well-tolerated, at-goal BP', correct: true },
        { key: 'hp4', label: 'Continue home blood pressure monitoring (HBPM) 1–2 times weekly with log review', correct: true },
        { key: 'hp5', label: 'Repeat BMP (serum creatinine, eGFR, potassium) in 6–12 months as clinically appropriate', correct: true },
      ]
    },
    {
      id: 'ascvd_plan',
      title: 'Hyperlipidemia & ASCVD risk reduction plan',
      options: [
        { key: 'ap1', label: 'Continue atorvastatin 20 mg PO daily at bedtime', correct: true },
        { key: 'ap2', label: 'Reinforce cardiovascular risk reduction strategies and consistent statin adherence', correct: true },
        { key: 'ap3', label: 'Repeat lipid panel in ~6–12 months', correct: true },
      ]
    },
    {
      id: 'access_plan',
      title: 'Medication access & affordability surveillance plan',
      options: [
        { key: 'ac1', label: 'Review insurance coverage annually to anticipate changes in copays or formulary tiers', correct: true },
        { key: 'ac2', label: 'Educate patient to report future cost concerns or coverage disruptions promptly before skipping doses', correct: true },
        { key: 'ac3', label: 'Continue active monitoring of medication affordability at all future visits', correct: true },
      ]
    },
    {
      id: 'adherence_plan',
      title: 'Medication adherence plan',
      options: [
        { key: 'ad1', label: 'Continue current effective adherence strategies', correct: true },
        { key: 'ad2', label: 'Reinforce importance of consistent daily medication administration without stretching', correct: true },
        { key: 'ad3', label: 'Encourage continued use of reminder systems and 7-day pill organizer if needed', correct: true },
      ]
    },
    {
      id: 'life_plan',
      title: 'Lifestyle modification & obesity plan',
      options: [
        { key: 'lp1', label: 'Continue walking program 25–30 minutes 5 days/week', correct: true },
        { key: 'lp2', label: 'Encourage progression toward long-term exercise goals of >=150 minutes/week moderate-intensity physical activity', correct: true },
        { key: 'lp3', label: 'Continue dietary improvements: home-cooked meals and avoidance of sugary drinks / sweet tea', correct: true },
        { key: 'lp4', label: 'Reinforce portion control strategies', correct: true },
        { key: 'lp5', label: 'Link lifestyle habits directly to cardiometabolic and blood pressure risk reduction', correct: true },
      ]
    },
    {
      id: 'edu_plan',
      title: 'Patient education & disease understanding plan',
      options: [
        { key: 'ep1', label: 'Continue patient-centered education on chronic disease self-management', correct: true },
        { key: 'ep2', label: 'Discuss cardiovascular and renal protective benefits of empagliflozin beyond blood sugar lowering', correct: true },
        { key: 'ep3', label: 'Reinforce importance of long-term disease monitoring and follow-up', correct: true },
      ]
    },
    {
      id: 'imm_plan',
      title: 'Preventive care & immunization plan',
      options: [
        { key: 'ip1', label: 'Recommend and administer pneumococcal conjugate vaccine (PCV20) if not previously administered', correct: true },
        { key: 'ip2', label: 'Recommend recombinant zoster vaccination series (Shingrix): dose 1 today, dose 2 in 2–6 months', correct: true },
        { key: 'ip3', label: 'Recommend and administer Tdap booster today (overdue >10 years)', correct: true },
      ]
    },
    {
      id: 'fu_plan',
      title: 'Follow-up & monitoring timeline',
      options: [
        { key: 'fp1', label: 'Schedule follow-up visit in ~3–6 months', correct: true },
        { key: 'fp2', label: 'Repeat A1C prior to next visit', correct: true },
        { key: 'fp3', label: 'Review home blood pressure monitoring log at follow-up', correct: true },
        { key: 'fp4', label: 'Review home glucose monitoring log at follow-up', correct: true },
      ]
    },
  ],
  PLAN_FREETEXT: [],
  GUIDING_QUESTIONS: [
    'What was the primary intervention that improved this patient\'s outcomes?',
    'Why did this patient\'s A1C improve?',
    'Would you intensify diabetes therapy today? Why or why not?',
    'Would you intensify hypertension therapy today? Why or why not?',
    'How should affordability be monitored in future visits?',
    'What evidence supports improved adherence?',
    'What remaining opportunities for optimization exist?',
    'What lessons from this case can be applied to future ambulatory care patients?'
  ],
  PRECEPTOR: {
    keyIssues: ['BP controlled, A1C near goal', 'Sustained access to medication', 'Ongoing affordability anxiety'],
    assessment: ['Significant longitudinal improvement', 'Current therapy is safe, effective, and well tolerated'],
    plan: ['Continue current therapy', 'Develop long-term affordability plan', 'Address remaining preventive care gaps'],
    pearls: ['Access is a therapeutic intervention', 'Clinical trajectory matters more than isolated values'],
    mistakes: ['Escalating therapy unnecessarily when trajectory is excellent', 'Assuming patient no longer requires follow-up'],
    followupQuestions: ['How should affordability be monitored in future visits?'],
    checklist: ['Recognized BP at goal', 'Reinforced lifestyle changes', 'Addressed long-term affordability concerns'],
  },
})

const lindaTue = makeCase({
  id: 'linda-tue',
  PATIENT: { name: 'Linda Martinez', age: 68, dob: '03/12/1958', sex: 'female', ethnicity: 'Hispanic / Latina', mrn: 'C-892110', allergiesSummary: 'Penicillin (Rash and hives)' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Advanced', difficultyTone: 'amber',
    setting: 'Collaborative Practice Ambulatory Care Pharmacy Clinic',
    chiefConcern: "My doctor told me my kidneys aren't doing as well as they should be, and honestly that's what worries me the most.",
    snapshotSummary: '68-year-old female with T2DM, HTN, CKD Stage 3a with severe albuminuria, and a prior STEMI. Referred for cardiorenal risk reduction prioritization in an ambulatory care pharmacy clinic.',
    diseaseStates: ['Chronic Kidney Disease', 'Type 2 Diabetes', 'Hypertension', 'Secondary ASCVD Prevention', 'Obesity'],
    learningObjectives: [
      'Identify CKD stage (G3a) and albuminuria category (A3)',
      'Calculate KDIGO risk classification (Very High Risk)',
      'Prioritize interventions based on overall clinical and cardiorenal benefit',
      'Evaluate cardiorenal risk in a patient with multiple complex priorities'
    ],
  },
  VITALS: { bp: '142/84', bpRepeat: '140/82', hr: '72', rr: '16', temp: '98.6°F', weight: '96 kg', height: "5'5\"", bmi: '35.2',
    flags: { bp: 'high', bpRepeat: 'high', bmi: 'high' } },
  LABS: [
    { label: 'A1C', value: '8.2', unit: '%', flag: 'high', note: 'Previous 8.0% — persistent elevation above target' },
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.7', unit: 'mEq/L', flag: 'normal', note: 'Upper-normal potassium (<5.0 mEq/L); acceptable for continued RAAS therapy and relevant to RAAS/MRA escalation monitoring' },
    { label: 'SCr', value: '1.24', unit: 'mg/dL', flag: 'high' },
    { label: 'eGFR', value: '52', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Corresponds to CKD Stage G3a (mildly to moderately decreased)' },
    { label: 'UACR', value: '452', unit: 'mg/g', flag: 'high', note: 'Prior 410 mg/g → 452 mg/g (worsening). Corresponds to Severely Increased Albuminuria (Category A3, >300 mg/g). KDIGO Stage G3aA3, Very High Risk' },
    { label: 'Total cholesterol', value: '176', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '92', unit: 'mg/dL', flag: 'warn', note: 'Prior STEMI 3 years ago; above secondary prevention target (<70 or <55 mg/dL)' },
    { label: 'HDL-C', value: '45', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '194', unit: 'mg/dL', flag: 'warn' },
  ],
  ALERTS: [
    { level: 'high', text: 'UACR 452 mg/g indicates severe albuminuria (Category A3) and very high risk for CKD progression and CV events.' },
    { level: 'warn', text: 'LDL 92 mg/dL is above secondary prevention target for patient with prior STEMI.' },
  ],
  ALLERGIES: [{ substance: 'Penicillin', reaction: 'Rash and hives', severity: 'Severe', type: 'Allergy', date: 'Childhood', source: 'Patient reported' }],
  PROBLEMS: [
    { name: 'Chronic Kidney Disease Stage G3a, Category A3', detail: 'eGFR 52, UACR 452 (KDIGO Very High Risk, persistent on therapy)', flag: 'high' },
    { name: 'Secondary ASCVD Prevention', detail: 'Prior STEMI 3 years ago s/p PCI with DES, LDL 92 mg/dL', flag: 'high' },
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 8.2% (previous 8.0%), above goal', flag: 'high' },
    { name: 'Essential hypertension', detail: 'BP 142/84 (repeat 140/82, home ~138/82 mmHg), above goal', flag: 'high' },
    { name: 'Obesity (Class II)', detail: 'BMI 35.2 kg/m²', flag: 'warn' },
    { name: 'Gastroesophageal reflux disease (GERD)', detail: 'Managed on omeprazole 20 mg daily', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'BID with meals', indication: 'Type 2 diabetes', notes: 'Tolerating' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'T2DM / cardiorenal', notes: 'Taking consistently' },
    { name: 'Semaglutide', dose: '0.5 mg', route: 'SQ', freq: 'weekly', indication: 'T2DM / obesity', notes: 'Taking consistently' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / CKD', notes: 'Taking consistently' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'Secondary ASCVD', notes: 'Taking consistently' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'Secondary ASCVD', notes: 'Taking consistently' },
    { name: 'Aspirin', dose: '81 mg', route: 'PO', freq: 'daily', indication: 'Secondary ASCVD', notes: 'Taking consistently' },
    { name: 'Omeprazole', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'GERD', notes: 'Taking consistently' },
  ],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Current season up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date (primary series completed; booster received)', flag: 'normal' },
    { name: 'PCV', status: 'Received at age 65 (complete)', flag: 'normal' },
    { name: 'Shingrix', status: 'Series complete (2 doses received)', flag: 'normal' },
    { name: 'Tdap', status: 'Last received 11 years ago — Overdue per CDC Adult Immunization Schedule (>10-year booster interval)', flag: 'warn' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'Reason for referral & setting', value: 'Referred by PCP for cardiorenal risk reduction prioritization in an ambulatory care pharmacy clinic setting.' },
    { label: 'Chief Complaint (CC)', value: 'Reports doctor told her kidneys are not doing well and that worries her most.' },
    { label: 'PMH', value: 'Chronic Kidney Disease Stage 3a (CKD Stage 3a), severely increased albuminuria (Category A3, severe albuminuria), Type 2 diabetes mellitus (15 years), essential hypertension (18 years), hyperlipidemia (known history), Secondary ASCVD prevention (prior STEMI 3 years ago s/p PCI with DES), Class II obesity, and Gastroesophageal Reflux Disease (GERD, on omeprazole 20 mg daily).' },
    { label: 'Past Surgical History (PSH)', value: 'Percutaneous coronary intervention (PCI) with drug-eluting stent (DES) placed 3 years ago; cholecystectomy (age 49); total abdominal hysterectomy (age 52).' },
    { label: 'Family History', value: 'Father: MI at age 62 and hypertension; Mother: type 2 diabetes and chronic kidney disease (CKD); Brother: MI at age 58; Sister: hypertension and type 2 diabetes.' },
    { label: 'Allergies', value: 'Penicillin allergy documented (developed skin rash and hives as a child; allergic reaction).' },
    { label: 'General wellness & symptoms', value: 'Patient reports feeling generally well overall aside from chronic conditions; acknowledges intermittent daytime fatigue, expresses frustration regarding the number of chronic conditions managed, and feels overwhelmed by multiple medical conditions and conflicting doctor recommendations.' },
    { label: 'Medication adherence', value: 'Patient reports medication adherence (takes all prescribed chronic medications consistently without missed doses); explicitly denies medication-related adverse effects or intolerances.' },
    { label: 'Social History', value: 'Occupation: Retired elementary school teacher. Marital/living status: Married, lives with husband; assists with grandchildren childcare multiple days per week. Alcohol use: Rare (small glass of wine on holidays). Former smoker: Quit 10 years ago, 20 pack-years (1 pack/day for 20 years). Recreational drug use: Explicitly denies recreational or illicit drug use.' },
    { label: 'Diet & lifestyle struggles', value: 'Acknowledges struggles with diabetic diet consistency, portion control, and limited regular exercise.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular/Pulmonary/Neurologic: Explicitly denies chest pain, shortness of breath, palpitations, orthopnea, paroxysmal nocturnal dyspnea (PND), dizziness, syncope, and acute vision changes. Denies recent hospitalizations. Reports mild positional lower extremity edema after prolonged standing.' },
    { label: 'Patient Goals & Motivators', value: 'Patient goals: highly motivated to achieve kidney preservation and avoid dialysis (dialysis is greatest fear); highly motivated to avoid another cardiovascular event / heart attack (motivated by personal prior STEMI and family history of premature MI in father and brother); expresses prioritization uncertainty (unsure which health problems deserve greatest attention).' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Cardiovascular history', value: 'STEMI 3 years ago with PCI and drug-eluting stent (DES) placement.', flag: 'warn' },
    { label: 'A1C trend data', value: 'Current A1C 8.2% (previous value: 8.0%; reflects persistent glycemic elevation above target).', flag: 'high' },
    { label: 'UACR trend data', value: 'Current UACR 452 mg/g (previous value: 410 mg/g; demonstrates worsening/rising albuminuria into the Severely Increased Albuminuria / Category A3 range, >300 mg/g).', flag: 'high' },
    { label: 'Renal function interpretation', value: 'eGFR 52 mL/min/1.73m² corresponds to CKD Stage G3a (mildly to moderately decreased kidney function).', flag: 'warn' },
    { label: 'KDIGO risk classification', value: 'KDIGO Stage G3a, Category A3 (G3aA3), placing patient in the KDIGO "Very High Risk" category for CKD progression, cardiovascular events, and kidney failure.', flag: 'high' },
    { label: 'Serum Potassium interpretation', value: 'Serum potassium 4.7 mEq/L (upper-normal range, <5.0 mEq/L) is acceptable for continued RAAS inhibitor therapy and guides safe monitoring for RAAS titration or nonsteroidal MRA consideration.', flag: 'normal' },
    { label: 'Documented home BP log', value: 'Average ~138/82 mmHg, corroborating office BP elevations (142/84, repeat 140/82 mmHg).', flag: 'warn' },
    { label: 'Lipid panel ASCVD interpretation', value: 'Total cholesterol 176 mg/dL, LDL-C 92 mg/dL, HDL-C 45 mg/dL, Triglycerides 194 mg/dL on Atorvastatin 40 mg daily; LDL-C remains elevated above secondary prevention target (<70 or <55 mg/dL).', flag: 'warn' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'knowledge', label: 'Understanding of CKD', placeholder: 'Does she understand staging and albuminuria?' },
    { key: 'fears', label: 'Patient Fears', placeholder: 'What worries her most?' },
    { key: 'priorities', label: 'Priorities', placeholder: 'How does she prioritize her health?' },
  ],
  GUIDING_QUESTIONS: [
    'How would you classify this patient\'s CKD stage?',
    'How would you classify this patient\'s albuminuria?',
    'What is this patient\'s KDIGO risk category?',
    'What intervention would you prioritize first?',
    'Why might reducing albuminuria be important?',
    'How does prior STEMI influence treatment decisions?',
    'Would you prioritize A1C reduction, BP reduction, LDL reduction, or albuminuria reduction?',
    'How would you explain cardiorenal protection to this patient?',
    'How should you interpret the worsening in UACR (410 to 452 mg/g)?',
    'Would you classify this patient as low risk now?',
    'What is the next highest-priority intervention?',
    'Why is LDL-C still important despite improving kidney outcomes?',
    'Would you consider finerenone in this patient?',
    'What evidence suggests the original intervention worked?',
    'How would you explain residual risk to this patient?',
    'What long-term complications remain most concerning?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'linda-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I get a skin rash and hives from Penicillin—I was told I developed a severe rash when given it as a child." },
    { id: 'linda-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a Calcium 600 mg plus Vitamin D3 supplement every morning for bone health, and occasional Tylenol for headaches." },
    { id: 'linda-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a small glass of wine on holidays or special dinners." },
    { id: 'linda-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 20 years, but I quit 10 years ago." },
    { id: 'linda-tue_drugs', topic: 'Recreational drug use', field: 'social', keywords: ['drug', 'illicit', 'marijuana', 'weed', 'cocaine', 'substance', 'recreational'], response: "I have never used recreational drugs or illicit substances in my life." },
    { id: 'linda-tue_wellness', topic: 'General health status', field: 'symptoms', keywords: ['generally', 'overall', 'how do you feel', 'well', 'feeling', 'fatigue'], response: "Overall, I feel generally well aside from my chronic conditions and some intermittent daytime fatigue. But I feel overwhelmed with all these doctors and appointments." },
    { id: 'linda-tue_diet_struggles', topic: 'Diet struggles', field: 'diet', keywords: ['diet', 'food', 'meals', 'portion', 'consistency', 'struggle'], response: "I try to watch what I eat, but I really struggle with consistency and portion control when it comes to following a strict diabetic diet." },
    { id: 'linda-tue_ros', topic: 'Review of systems', field: 'symptoms', keywords: ['chest pain', 'short of breath', 'palpitations', 'orthopnea', 'pnd', 'dizziness', 'syncope', 'hospitalization', 'ros'], response: "I deny having chest pain, shortness of breath, palpitations, orthopnea, paroxysmal nocturnal dyspnea, dizziness, syncope, or recent hospitalizations. I just get mild leg swelling if I stand for a long time." },
    { id: 'linda-tue_kidney_goal', topic: 'Kidney preservation goal', field: 'fears', keywords: ['kidney goal', 'dialysis', 'kidney preservation', 'protect kidneys'], response: "My number one goal is preserving my kidney function and avoiding dialysis. Dialysis is what scares me more than anything." },
    { id: 'linda-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had high blood pressure and a heart attack at age 62. My mother had type 2 diabetes and chronic kidney disease. My brother had a heart attack at age 58, and my sister has high blood pressure and diabetes." },
    { id: 'linda-tue_surg', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy', 'hysterectomy'], response: 'I had my gallbladder removed when I was 49, and then a total abdominal hysterectomy when I was 52.' },
    { id: 'linda-tue_mi', topic: 'Heart Attack / Stent', field: 'pmh', keywords: ['heart attack', 'stemi', 'stent', 'pci', 'catheterization'], response: 'I had a heart attack about 3 years ago. They told me I had a drug-eluting stent placed (PCI).' },
    { id: 'linda-tue_duration', topic: 'Disease duration', field: 'pmh', keywords: ['how long', 'when were you diagnosed', 'duration', 'years'], response: 'I\'ve had high blood pressure for 18 years and diabetes for 15 years.' },
    { id: 'linda-tue_social', topic: 'Social / Family', field: 'social', keywords: ['live', 'work', 'family', 'grandchild', 'children', 'retired', 'married'], response: 'I am a retired elementary school teacher. I am married and live with my husband, and I help take care of my grandchildren regularly.' },
    { id: 'linda-tue_homebp', topic: 'Home BP monitoring', field: 'homeBp', keywords: ['home blood pressure', 'bp at home', 'check your blood pressure', 'monitor', 'log', 'average'], response: 'I check my blood pressure at home about twice a week. My readings are usually in the high 130s over low 80s — my average is around 138 over 82.' },
    { id: 'linda-tue_homebg', topic: 'Home glucose monitoring', field: 'glucoseMonitoring', keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'finger stick', 'meter'], response: 'I check my blood sugar regularly. My fasting readings are usually around 150 to 180.' },
    { id: 'linda-tue_swelling', topic: 'Swelling', field: 'symptoms', keywords: ['swelling', 'edema', 'legs', 'feet', 'stand', 'positional'], response: 'I do get some mild swelling in my legs if I stand for a long time.' },
    { id: 'c_ckd', topic: 'Lack of CKD Understanding', field: 'knowledge', keywords: ['stage', 'albuminuria', 'understand', 'kidney'], response: "I know they told me I have kidney disease, but I don't really know what Stage 3 means, or what albuminuria is. I thought my blood sugar was the most important thing." },
    { id: 'c_fears', topic: 'Fear of Dialysis & Heart Attack', field: 'fears', keywords: ['fear', 'worry', 'scared', 'dialysis', 'heart attack'], response: "If I'm being honest, dialysis is probably what scares me the most. That, and I don't ever want to go through another heart attack." },
    { id: 'c_overwhelmed', topic: 'Feeling Overwhelmed', field: 'priorities', keywords: ['priority', 'focus', 'overwhelm', 'doctors'], response: "Sometimes I feel like every doctor tells me something different and I don't know what I should focus on first." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'c_ckd', title: 'Chronic Kidney Disease Stage G3a, Category A3 — Severely Increased Albuminuria (Highest Priority)', icon: 'AlertTriangle', color: 'f59e0b', questions: [
      { key: 'c_ckd_stage', q: 'How is her kidney disease staged and classified?', defaultAnswer: 'Problem identified: Chronic Kidney Disease Stage 3a with severely increased albuminuria, identified as the highest-priority problem. Baseline eGFR 52 mL/min/1.73m² corresponds to CKD Stage G3a. Current UACR 452 mg/g (worsening from prior 410 mg/g) corresponds to Category A3 (severely increased albuminuria, >300 mg/g). KDIGO classification is Stage G3a, Category A3 (G3aA3), placing patient in the KDIGO "Very High Risk" category.' },
      { key: 'c_ckd_risk', q: 'What is her clinical risk trajectory and guideline targets?', defaultAnswer: 'Patient exhibits persistent severe albuminuria despite baseline dual therapy with an ACE inhibitor (lisinopril 20 mg daily) and an SGLT2 inhibitor (empagliflozin 10 mg daily). She is at very high risk for CKD progression, very high risk for cardiovascular events, and very high risk for future kidney failure. Per ADA 2026 Standards of Care and KDIGO guidelines, albuminuria reduction and kidney preservation are paramount therapeutic priorities. Baseline serum potassium of 4.7 mEq/L (upper-normal) is acceptable for continued RAAS therapy and requires close monitoring upon escalation or MRA initiation.' },
    ]},
    { id: 'c_ascvd', title: 'Secondary ASCVD Prevention (Status Post STEMI with PCI/DES) (High Priority)', icon: 'Activity', color: 'dc2626', questions: [
      { key: 'c_ascvd_stat', q: 'What is her cardiovascular status and treatment target?', defaultAnswer: 'Problem identified: Secondary ASCVD prevention, representing a major therapeutic priority. Status: Above goal. Patient has established ASCVD status post STEMI 3 years ago with PCI and drug-eluting stent (DES) placement. Current LDL-C remains elevated at 92 mg/dL on Atorvastatin 40 mg daily, which is above the secondary prevention LDL goal threshold (<70 mg/dL or <55 mg/dL for very high risk). Established ASCVD warrants intensive lipid-lowering therapy per ADA 2026 and ACC/AHA lipid guidelines. Patient possesses substantial residual cardiovascular risk from prior MI, diabetes, CKD, and elevated LDL.' },
    ]},
    { id: 'c_dm', title: 'Type 2 diabetes mellitus (Uncontrolled, Above Goal)', icon: 'Droplet', color: '0d9488', questions: [
      { key: 'c_dm_stat', q: 'What is her diabetes control status and treatment objective?', defaultAnswer: 'Problem identified: Type 2 diabetes mellitus. Control status: Uncontrolled. Supported by current A1C of 8.2% (previous 8.0%). Individualized glycemic goal is A1C <7% per ADA 2026 Standards of Care, individualized for a functional older adult with high cardiorenal risk. Current regimen includes metformin XR 1000 mg BID, empagliflozin 10 mg daily, and semaglutide 0.5 mg SQ weekly, already including two medication classes with proven cardiovascular and renal benefits. Treatment objective extends beyond glucose lowering alone: prioritize therapies providing combined glycemic and cardiorenal benefit, framing optimization within a cardiorenal context rather than glucocentric escalation.' },
    ]},
    { id: 'c_htn', title: 'Essential hypertension (Above Goal)', icon: 'HeartPulse', color: '13314f', questions: [
      { key: 'c_htn_stat', q: 'What is her blood pressure status and treatment goal?', defaultAnswer: 'Problem identified: Essential hypertension. Control status: Above goal. Office BP values of 142/84 mmHg and repeat 140/82 mmHg are corroborated by home BP average ~138/82 mmHg. Blood pressure goal is <130/80 mmHg for patients with diabetes and CKD per KDIGO 2024, ADA 2026, and 2025 ACC/AHA guidelines. Above-target blood pressure contributes directly to CKD progression and elevated cardiovascular risk. Prioritization is guided by overall cardiorenal benefit.' },
    ]},
    { id: 'c_obesity', title: 'Obesity (Class II, BMI 35.2 kg/m²)', icon: 'Scale', color: 'ca8a04', questions: [
      { key: 'c_ob_class', q: 'How is her obesity staged and managed?', defaultAnswer: 'Problem identified: Obesity. Status: Uncontrolled. BMI 35.2 kg/m² (weight 96 kg, height 5\'5\") is classified as Class II Obesity (35.0–39.9 kg/m²). Obesity must be managed as a chronic disease per ADA 2026. Obesity directly links to diabetes, hypertension, CKD progression, and cardiovascular risk. Patient has limited physical activity and inconsistent diet. Weight reduction provides multiple benefits for glycemia, blood pressure, cardiorenal outcomes, and quality of life. Current GLP-1 RA (semaglutide) presents an optimization opportunity for weight management.' },
    ]},
    { id: 'c_literacy', title: 'Health literacy & psychosocial overwhelm', icon: 'AlertTriangle', color: 'ea580c', questions: [
      { key: 'c_lit_gap', q: 'What psychosocial and educational factors are present?', defaultAnswer: 'Patient does not appreciate the albuminuria–CKD–cardiovascular relationship and thought blood glucose was the only important marker. She expresses severe fear of dialysis and recurrent heart attack, and feels overwhelmed by conflicting doctor advice. Providing a structured, patient-centered prioritization framework and education on cardiorenal protection will significantly improve engagement in long-term management.' },
    ]},
    { id: 'c_prevent', title: 'Preventive care & health maintenance gaps', icon: 'Heart', color: '7c3aed', questions: [
      { key: 'c_prev_gaps', q: 'What preventive care gaps exist?', defaultAnswer: 'Problem identified: Preventive care gaps. Objective review reveals that Tdap booster is overdue (last received 11 years ago, exceeding the 10-year booster interval per the CDC Adult Immunization Schedule). PCV20 was received at age 65 and Shingrix 2-dose series is complete.' },
    ]},
  ],
  PLAN_SECTIONS: [
    { id: 'c_p_ckd', title: 'Cardiorenal protection & CKD optimization plan', options: [
      { key: 'c_ckd_calc', label: 'Calculate and document CKD Stage G3a, Category A3 (KDIGO Very High Risk classification)', correct: true },
      { key: 'c_ckd_empa', label: 'Continue Empagliflozin 10 mg PO once daily for proven cardiorenal protection and slowing CKD progression', correct: true },
      { key: 'c_ckd_lis', label: 'Continue Lisinopril 20 mg PO once daily (or titrate toward 40 mg daily as tolerated) to maximize antiproteinuric and renoprotective effects', correct: true },
      { key: 'c_ckd_mon', label: 'Continue monitoring UACR and renal function (eGFR, serum creatinine)', correct: true },
      { key: 'c_ckd_k', label: 'Reassess serum potassium and renal function in 2-4 weeks given baseline K+ of 4.7 mEq/L and RAAS/MRA therapy considerations (note: if finerenone is considered, baseline K+ must be ≤4.8 mEq/L with repeat potassium in 4 weeks)', correct: true },
      { key: 'c_ckd_target', label: 'Kidney treatment targets: Goal is >=30% reduction in UACR and stabilization of eGFR decline per KDIGO guidelines', correct: true },
      { key: 'c_ckd_o3', label: 'Initiate basal insulin to prioritize A1C reduction', correct: false },
    ]},
    { id: 'c_p_ascvd', title: 'Secondary ASCVD prevention & lipid management plan', options: [
      { key: 'c_ascvd_asa', label: 'Continue Aspirin 81 mg PO once daily for secondary cardiovascular prevention', correct: true },
      { key: 'c_ascvd_metop', label: 'Continue Metoprolol Succinate 50 mg PO once daily for post-MI cardioprotection', correct: true },
      { key: 'c_ascvd_statin', label: 'Continue Atorvastatin 40 mg daily and intensify lipid-lowering therapy: Increase Atorvastatin to 80 mg PO once daily OR add Ezetimibe 10 mg PO once daily to achieve secondary-prevention LDL goal (<70 mg/dL or <55 mg/dL)', correct: true },
      { key: 'c_ascvd_cv', label: 'Reinforce cardiovascular risk reduction measures (blood pressure control, diet, smoking cessation maintenance)', correct: true },
      { key: 'c_ascvd_repeat', label: 'Repeat fasting lipid panel in 6-12 weeks to assess LDL-C reduction toward secondary prevention target', correct: true },
    ]},
    { id: 'c_p_dm', title: 'Type 2 diabetes mellitus plan', options: [
      { key: 'c_dm_metf', label: 'Continue Metformin XR 1000 mg PO twice daily (BID) with meals', correct: true },
      { key: 'c_dm_empa', label: 'Continue Empagliflozin 10 mg PO once daily', correct: true },
      { key: 'c_dm_sema', label: 'Continue Semaglutide 0.5 mg subcutaneously once weekly', correct: true },
      { key: 'c_dm_titr', label: 'Consider semaglutide titration to 1.0 mg subcutaneously weekly for added glycemic and weight reduction benefits', correct: true },
      { key: 'c_dm_life', label: 'Reinforce lifestyle modification and consistent home glucose monitoring', correct: true },
      { key: 'c_dm_a1c', label: 'Repeat A1C in ~3 months (individualized glycemic goal: A1C <7% per ADA 2026 Standards of Care)', correct: true },
    ]},
    { id: 'c_p_htn', title: 'Hypertension plan', options: [
      { key: 'c_htn_lis', label: 'Continue Lisinopril 20 mg PO once daily (or titrate toward 40 mg daily) supporting renal protection and blood pressure lowering', correct: true },
      { key: 'c_htn_metop', label: 'Continue Metoprolol Succinate 50 mg PO once daily', correct: true },
      { key: 'c_htn_mon', label: 'Continue home blood pressure monitoring 3-4 days weekly and log readings', correct: true },
      { key: 'c_htn_ratio', label: 'Notes ACE inhibitor continuation directly supports renal protection by reducing intraglomerular pressure', correct: true },
      { key: 'c_htn_target', label: 'Blood pressure treatment goal: <130/80 mmHg per KDIGO 2024 and 2025 ACC/AHA guidelines', correct: true },
    ]},
    { id: 'c_p_life', title: 'Lifestyle modification & obesity management plan', options: [
      { key: 'c_lf_counsel', label: 'Reinforce nutrition and physical activity counseling: adopt kidney-friendly DASH eating pattern with dietary sodium restriction (<2000 mg/day) and portion control', correct: true },
      { key: 'c_lf_act', label: 'Encourage progression toward >=150 minutes/week of moderate-intensity physical activity (e.g., walking within tolerance)', correct: true },
      { key: 'c_lf_wt', label: 'Continue weight-loss supportive interventions targeting 5-7% weight reduction', correct: true },
      { key: 'c_lf_sema', label: 'Leverage GLP-1 RA therapy (semaglutide) for weight management and appetite suppression', correct: true },
    ]},
    { id: 'c_p_edu', title: 'Patient education & prioritization framework', options: [
      { key: 'c_edu_ckd', label: 'Educate patient regarding CKD staging (Stage 3a) and disease course', correct: true },
      { key: 'c_edu_uacr', label: 'Educate patient regarding albuminuria significance (protein in the urine reflecting kidney filtration barrier stress)', correct: true },
      { key: 'c_edu_cardio', label: 'Discuss cardiovascular and renal protective benefits of current therapies (SGLT2 inhibitor, ACE inhibitor, GLP-1 RA) in preventing dialysis and heart attacks', correct: true },
      { key: 'c_edu_prior', label: 'Provide a patient-centered prioritization framework reassuring her that protecting her kidneys and heart is the top clinical focus today', correct: true },
    ]},
    { id: 'c_p_imm', title: 'Preventive care & immunization plan', options: [
      { key: 'c_imm_tdap', label: 'Recommend and administer Tdap booster today (last received 11 years ago, overdue per CDC Adult Immunization Schedule)', correct: true },
      { key: 'c_imm_status', label: 'Document that PCV20 (received age 65) and Shingrix 2-dose series are complete and up to date', correct: true },
    ]},
    { id: 'c_p_fu', title: 'Follow-up & monitoring timeline', options: [
      { key: 'c_fu_time', label: 'Follow up in ~4-6 weeks for clinical evaluation and monitoring review', correct: true },
      { key: 'c_fu_bp', label: 'Review blood pressure readings and home BP log at follow-up visit', correct: true },
      { key: 'c_fu_lab', label: 'Review laboratory monitoring (BMP: potassium and serum creatinine) in 2-4 weeks', correct: true },
      { key: 'c_fu_cardio', label: 'Reassess cardiorenal risk reduction strategy and semaglutide titration at follow-up visit', correct: true },
      { key: 'c_fu_eval', label: 'Evaluate implementation of prioritized interventions and repeat UACR/lipids in 3 months', correct: true },
    ]},
  ],
  COUNSELING: [
    { id: 'c_c1', title: 'Cardiorenal Protection', body: [
      "Your blood sugar is important, but protecting your kidneys and heart is our top priority right now.",
      "Some of the medications you are on do more than just lower your sugar—they directly protect your kidneys and heart from damage.",
      "We will prioritize the changes that give you the biggest benefit in avoiding another heart attack or dialysis." ] },
  ],
  PRECEPTOR: {
    keyIssues: ['CKD Stage 3a with severe albuminuria (G3aA3)', 'Secondary ASCVD prevention (Prior STEMI)', 'Patient feels overwhelmed by multiple conditions'],
    assessment: ['Albuminuria and ASCVD history drive the highest risk for future events', 'Multiple reasonable interventions exist; justification is key'],
    plan: ['Prioritize cardiorenal risk reduction (lisinopril titration, finerenone, or lipid optimization)', 'Educate patient on cardiorenal protection over pure A1C focus'],
    pearls: ['The highest A1C is not always the highest priority', 'Albuminuria is both a kidney and cardiovascular risk marker'],
    mistakes: ['Treating all abnormalities equally without prioritization', 'Focusing exclusively on A1C and ignoring secondary ASCVD prevention'],
    followupQuestions: ['What intervention would you prioritize first and why?'],
    checklist: ['Staged CKD accurately', 'Identified secondary prevention status', 'Prioritized interventions appropriately', 'Explained rationale for prioritization'],
  },
})


const lindaWed = makeCase({
  id: 'linda-wed',
  PATIENT: lindaTue.PATIENT,
  ENCOUNTER: {
    day: 'Wednesday', type: 'First Follow-Up', difficulty: 'Advanced', difficultyTone: 'amber',
    setting: 'Collaborative Practice Ambulatory Care Pharmacy Clinic',
    chiefConcern: "My blood pressure is much better, but I'm still worried about my kidneys.",
    snapshotSummary: '3-month collaborative practice follow-up visit. Blood pressure controlled at 130/78 mmHg (repeat 128/78 mmHg) on lisinopril 40 mg titration. UACR improved from 452 to 330 mg/g (27% reduction), but persistent Category A3. Serum potassium 4.8 mEq/L. LDL-C improved to 76 mg/dL on atorvastatin 40 mg. Sequential prioritization of cardiorenal and secondary ASCVD risk reduction.',
    diseaseStates: ['Chronic Kidney Disease', 'Secondary ASCVD Prevention', 'Type 2 Diabetes', 'Hypertension', 'Obesity'],
    learningObjectives: [
      'Interpret interval reduction in albuminuria and blood pressure goal attainment',
      'Recognize persistent Category A3 albuminuria as a very high risk driver requiring sequential prioritization',
      'Evaluate secondary ASCVD prevention and consider non-statin lipid-lowering add-on therapy',
      'Navigate hyperkalemia safety guardrails when balancing ACE inhibitor and potential MRA therapy'
    ],
  },
  VITALS: { bp: '130/78', bpRepeat: '128/78', hr: '70', rr: '16', temp: '98.4°F', weight: '94.5 kg', height: "5'5\" (65 inches)", bmi: '34.7',
    flags: { bp: 'normal', bpRepeat: 'normal', bmi: 'high' } },
  LABS: [
    { label: 'A1C', value: '7.9', unit: '%', flag: 'high', note: 'Previous 8.2% (0.3% absolute reduction, moving in favorable direction)' },
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal', note: 'Previous 4.7 mEq/L; stable but upper-normal on lisinopril 40 mg; limits aggressive RAAS/MRA intensification without strict potassium monitoring' },
    { label: 'SCr', value: '1.28', unit: 'mg/dL', flag: 'high', note: 'Previous 1.24 mg/dL; renal function remains stable' },
    { label: 'eGFR', value: '50', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Corresponds to CKD Stage G3a (mildly to moderately decreased); stable renal function (prior 52 mL/min/1.73m²)' },
    { label: 'UACR', value: '330', unit: 'mg/g', flag: 'high', note: 'Prior 452 mg/g → 330 mg/g (27% reduction following lisinopril 40 mg titration and empagliflozin). Corresponds to persistent Category A3 severely increased albuminuria (>300 mg/g); KDIGO Stage G3aA3, Very High Risk' },
    { label: 'Total cholesterol', value: '156', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '160', unit: 'mg/dL', flag: 'normal' },
    { label: 'HDL-C', value: '48', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '76', unit: 'mg/dL', flag: 'warn', note: 'Previous 92 mg/dL; improved on atorvastatin 40 mg, but remains above secondary prevention target of <70 mg/dL (or <55 mg/dL)' },
  ],
  ALERTS: [
    { type: 'success', text: 'UACR reduced by 27% (452 → 330 mg/g) and blood pressure reached goal (<130/80 mmHg) on lisinopril 40 mg daily.' },
    { type: 'warning', text: 'UACR remains Category A3 (>300 mg/g) and LDL-C remains >70 mg/dL. Serum K 4.8 mEq/L requires close potassium monitoring.' },
  ],
  PROBLEMS: [
    { name: 'Chronic Kidney Disease Stage G3a, Category A3', status: 'Improving but persistent very high risk' },
    { name: 'Type 2 diabetes mellitus', status: 'Improving but above goal' },
    { name: 'Essential hypertension', status: 'Controlled and at goal' },
    { name: 'Secondary ASCVD prevention & hyperlipidemia', status: 'Residual risk remains' },
    { name: 'Obesity (Class I)', status: 'Improving (-1.5 kg)' },
    { name: 'Health literacy & disease understanding', status: 'Significantly improved' },
    { name: 'Preventive care gap', status: 'Tdap overdue' },
  ],
  ALLERGIES: [
    { substance: 'Penicillin', reaction: 'Rash and hives', severity: 'moderate' }
  ],
  IMMUNIZATIONS: [
    { name: 'COVID-19', status: 'Up to date' },
    { name: 'Influenza', status: 'Up to date' },
    { name: 'PCV20 (Pneumococcal)', status: 'Up to date (received age 65)' },
    { name: 'Shingrix (Herpes Zoster)', status: 'Up to date (2-dose series completed)' },
    { name: 'Tdap', status: 'Overdue (>10 years ago; booster recommended)' },
  ],
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'CKD / Hypertension' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'CKD / T2DM' },
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'BID with meals', indication: 'Type 2 diabetes' },
    { name: 'Semaglutide', dose: '0.5 mg', route: 'SubQ', freq: 'weekly', indication: 'Type 2 diabetes / weight / CV' },
    { name: 'Metoprolol succinate', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'Post-MI / CAD' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'PO', freq: 'daily at bedtime', indication: 'Secondary ASCVD prevention' },
    { name: 'Aspirin', dose: '81 mg', route: 'PO', freq: 'daily', indication: 'Secondary ASCVD prevention' },
    { name: 'Omeprazole', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'GERD' },
    { name: 'Calcium + Vitamin D3', dose: '600 mg / 400 IU', route: 'PO', freq: 'daily', indication: 'Bone health' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'Reason for referral & setting', value: '3-month collaborative practice follow-up visit for cardiorenal and secondary ASCVD risk reduction in an ambulatory care pharmacy clinic.' },
    { label: 'Chief Complaint (CC)', value: 'Reports blood pressure is much better, but remains deeply worried about her kidneys.' },
    { label: 'PMH', value: 'Chronic Kidney Disease Stage 3a (CKD Stage 3a), severely increased albuminuria (Category A3), Type 2 diabetes mellitus (15 years), essential hypertension (18 years), hyperlipidemia (known history), Secondary ASCVD prevention (prior STEMI 3 years ago s/p PCI with DES), Class I obesity (borderline Class II), and Gastroesophageal Reflux Disease (GERD, on omeprazole 20 mg daily).' },
    { label: 'Past Surgical History (PSH)', value: 'Percutaneous coronary intervention (PCI) with drug-eluting stent (DES) placed 3 years ago; cholecystectomy (age 49); total abdominal hysterectomy (age 52).' },
    { label: 'Family History', value: 'Father: MI at age 62 and hypertension; Mother: type 2 diabetes and chronic kidney disease (CKD); Brother: MI at age 58; Sister: hypertension and type 2 diabetes.' },
    { label: 'Allergies', value: 'Penicillin allergy documented (developed skin rash and hives as a child; allergic reaction).' },
    { label: 'General wellness, interval progress & tolerability', value: 'Patient reports overall improvement since the previous visit and feels more confident managing her chronic conditions. Reports excellent medication adherence without missed doses (takes all chronic medications consistently). Tolerating lisinopril 40 mg dose titration well without adverse effects; explicitly denies cough, dizziness, or lightheadedness. Explicitly denies hypoglycemia symptoms (no shakiness, sweating, lightheadedness).' },
    { label: 'Disease understanding & health literacy', value: 'Demonstrates significantly improved understanding of kidney disease specifically, and clearly understands the critical relationship between blood pressure control, diabetes management, CKD progression, and cardiovascular risk.' },
    { label: 'Social History', value: 'Occupation: Retired elementary school teacher. Marital/living status: Married, lives with husband; assists with grandchildren childcare multiple days per week. Alcohol use: Rare (small glass of wine on holidays). Former smoker: Quit 10 years ago, 20 pack-years (1 pack/day for 20 years). Recreational drug use: Explicitly denies recreational or illicit drug use.' },
    { label: 'Diet & Lifestyle', value: 'Walking program increased to 20–30 minutes 4 days per week (~100 min/week toward >=150 min/week goal). Actively practicing portion control and reducing sodium intake (<2,000 mg/day).' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular/Pulmonary/Neurologic: Explicitly denies chest pain, shortness of breath, palpitations, syncope, orthopnea, paroxysmal nocturnal dyspnea (PND), dizziness, and acute vision changes. Denies recent hospitalizations.' },
    { label: 'Patient Goals & Motivators', value: 'Highly motivated to achieve kidney preservation and prevent kidney disease progression; remains deeply concerned about eventually requiring dialysis (dialysis is greatest fear). Highly motivated to avoid recurrent cardiovascular events / heart attacks (motivated by personal prior STEMI and family history of premature MI in father and brother).' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Weight change & BMI', value: 'Current weight 94.5 kg, baseline 96 kg, documenting a 1.5 kg (3.3 lb) weight loss. BMI 34.7 kg/m² (BMI reconciled with height/weight: Class I Obesity, borderline Class II).' },
    { label: 'BP corroboration & goal attainment', value: 'Office BP 130/78 mmHg (repeat 128/78 mmHg); home BP average ~126/78 mmHg directly corroborating office readings and confirming blood pressure is controlled and at goal (<130/80 mmHg) following lisinopril 40 mg titration.' },
    { label: 'Glycemic improvement', value: 'Current A1C 7.9%, previous baseline A1C 8.2% (0.3% absolute reduction, moving in a favorable direction on metformin XR 1000 mg BID, empagliflozin 10 mg, and semaglutide 0.5 mg; goal <7.0%).' },
    { label: 'Cardiorenal lab trends', value: 'UACR improved from baseline 452 mg/g to 330 mg/g (27% reduction following lisinopril 40 mg titration and empagliflozin), confirming therapeutic efficacy; however, albuminuria remains Category A3 (>300 mg/g) and KDIGO G3aA3 Very High Risk. Renal function is stable: SCr 1.28 mg/dL (prior 1.24 mg/dL), eGFR 50 mL/min/1.73m² (prior 52 mL/min/1.73m²; stable CKD Stage G3a). Serum potassium increased from 4.7 mEq/L to 4.8 mEq/L following lisinopril 40 mg titration; stable but upper-normal, which places limits on further RAAS/MRA intensification (such as finerenone) without strict potassium monitoring.' },
    { label: 'Lipid improvement', value: 'LDL-C improved from baseline 92 mg/dL to 76 mg/dL on atorvastatin 40 mg daily; improved, but remains above secondary-prevention goal (<70 mg/dL or <55 mg/dL per ACC/AHA guidelines). Total cholesterol 156 mg/dL, HDL-C 48 mg/dL, Triglycerides 160 mg/dL.' },
    { label: 'Immunization status', value: 'COVID-19, Influenza, PCV20, and Shingrix (2 doses) are up to date. Tdap booster is overdue (>10 years ago).' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Medication adherence', placeholder: 'Consistency with medications…' },
    { key: 'kidneyUnderstand', label: 'CKD & UACR understanding', placeholder: 'What does she understand about urine protein now?' },
    { key: 'lifestyle', label: 'Diet & exercise habits', placeholder: 'Walking, portion control, sodium…' },
    { key: 'concerns', label: 'Ongoing concerns', placeholder: 'Dialysis, heart attack worries…' },
    { key: 'homeBp', label: 'Home BP monitoring', placeholder: 'Recent readings at home…' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'lw_adherence', topic: 'Medication adherence', keywords: ['miss', 'take', 'adhere', 'routine', 'pills'],
      response: "I take all of my medicines exactly as prescribed every single day. I haven't missed any doses." },
    { id: 'lw_kidney', topic: 'Kidney understanding', keywords: ['kidney', 'protein', 'uacr', 'albumin', 'stage'],
      response: "You explained that my kidneys are filtering well enough, but leaking protein into the urine means they're under stress. I know keeping my pressure and sugar down protects them." },
    { id: 'lw_lifestyle', topic: 'Diet and exercise', keywords: ['walk', 'exercise', 'diet', 'eat', 'salt', 'sodium'],
      response: "I've been walking 4 days a week for 20 to 30 minutes, watching my portion sizes, and cutting way back on salt." },
    { id: 'lw_concerns', topic: 'Concerns and fears', keywords: ['dialysis', 'heart attack', 'worry', 'scared', 'afraid'],
      response: "I just don't ever want to go on dialysis. And I never want to experience another heart attack like I did 3 years ago." },
    { id: 'lw_homebp', topic: 'Home blood pressure monitoring', keywords: ['blood pressure', 'home bp', 'cuff', 'readings', 'log'],
      response: "I've been checking my blood pressure at home with my cuff. My log has been averaging around 126 over 78, so it's been staying well under 130." },
    { id: 'lw_homebg', topic: 'Home glucose monitoring', keywords: ['blood sugar', 'glucose', 'fasting', 'meter', 'finger stick'],
      response: "I check my blood sugar at home periodically with my meter, and my fasting numbers are usually between 130 and 160." },
    { id: 'lw_symptoms', topic: 'Symptoms and leg swelling', keywords: ['swelling', 'edema', 'legs', 'feet', 'tired', 'fatigue', 'feel'],
      response: "I'm feeling much better overall. My energy is good, and the swelling in my legs that I used to get after standing has gone away." },
  ],
  ASSESSMENT_CARDS: [
    {
      id: 'ckd',
      title: 'Chronic Kidney Disease Stage G3a, Category A3 with Severely Increased Albuminuria (Highest Priority)',
      icon: 'FlaskConical',
      color: '0891b2',
      questions: [
        {
          key: 'ckd_eval',
          q: 'CKD status, risk classification, and therapeutic strategy:',
          defaultAnswer: 'Status: Improving but persistent very high risk. eGFR 50 mL/min/1.73m² corresponds to Stage G3a (mildly to moderately decreased); UACR 330 mg/g corresponds to Category A3 (severely increased albuminuria, >300 mg/g). Albuminuria improved from baseline 452 to 330 mg/g (27% reduction), demonstrating that prior therapy with lisinopril 40 mg daily and empagliflozin 10 mg daily is effective, and progression risk is likely reduced. However, residual risks of persistent severe albuminuria remain elevated (progression to kidney failure, ESRD requiring dialysis, and cardiovascular events per KDIGO/ADA 2026 guidelines). Residual risk contributors include persistent severe albuminuria, diabetes, hypertension, CKD, and established ASCVD. Continued cardiorenal protective optimization is warranted. CRITICAL SAFETY GUARDRAIL: Serum potassium has risen from 4.7 to 4.8 mEq/L following lisinopril 40 mg titration; this upper-normal potassium places limits on further aggressive RAAS/MRA intensification. Finerenone should not be initiated recklessly today given the hyperkalemia risk; serum potassium and renal function must be re-checked in 2–4 weeks, and nonsteroidal MRA therapy considered only if potassium remains <=4.8 mEq/L with mandatory potassium monitoring.'
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
          key: 't2dm_eval',
          q: 'Glycemic status, goal, and therapeutic rationale:',
          defaultAnswer: 'Status: Improving but above goal. Current A1C 7.9% improved from baseline 8.2% (0.3% reduction, moving in a favorable direction). Improvement is attributed to lifestyle changes, excellent adherence, and established dual therapy (metformin XR 1000 mg BID + empagliflozin 10 mg daily + semaglutide 0.5 mg subcutaneous weekly). Glycemic goal: <7.0% (individualized goal <7.0–7.5% appropriate for older adult with CKD/ASCVD per ADA 2026 Standards of Care). Therapies are specifically prioritized for established cardiorenal and cardiovascular benefit beyond glucose lowering. Current therapy is well tolerated; continue current regimen.'
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
          q: 'Blood pressure status, goal, and contribution to cardiorenal outcomes:',
          defaultAnswer: 'Status: Controlled and at goal. Office BP 130/78 mmHg (repeat 128/78 mmHg); home blood pressure monitoring corroborates (~126/78 mmHg). BP goal <130/80 mmHg per 2025 AHA/ACC Hypertension Guideline. Blood pressure improved from baseline 142/84 to 128–130/78 mmHg; lisinopril 40 mg uptitration directly contributed to blood pressure control and the 27% reduction in albuminuria. Therapy is effective and well tolerated; continue ongoing monitoring and maintenance.'
        }
      ]
    },
    {
      id: 'ascvd',
      title: 'Secondary ASCVD prevention & hyperlipidemia',
      icon: 'ShieldAlert',
      color: 'd97706',
      questions: [
        {
          key: 'ascvd_eval',
          q: 'Residual cardiovascular risk, lipid goal, and optimization options:',
          defaultAnswer: 'Status: Residual cardiovascular risk remains. Patient has established ASCVD based on prior STEMI with PCI/DES placement 3 years ago. Very high risk drivers include prior MI, T2DM, CKD Stage 3a, and severe albuminuria. LDL-C improved from baseline 92 mg/dL to 76 mg/dL on atorvastatin 40 mg daily; however, LDL-C remains above the secondary prevention target of <70 mg/dL (or <55 mg/dL per ACC/AHA guidelines). Substantial residual CV risk remains; consider adding ezetimibe 10 mg daily for additional LDL-C lowering if not at goal.'
        }
      ]
    },
    {
      id: 'obesity',
      title: 'Obesity (Class I, BMI 34.7 kg/m²)',
      icon: 'Scale',
      color: '4f46e5',
      questions: [
        {
          key: 'obe_eval',
          q: 'Obesity status and cardiometabolic contribution:',
          defaultAnswer: 'Status: Improving. Weight decreased from 96 kg to 94.5 kg (-1.5 kg loss; BMI 35.2 to 34.7 kg/m²). Obesity is a chronic, relapsing disease that contributes directly to cardiorenal risk, hypertension, and insulin resistance. Continued lifestyle modifications, portion control, and walking program are reinforced.'
        }
      ]
    },
    {
      id: 'literacy',
      title: 'Health literacy & disease understanding',
      icon: 'BookOpen',
      color: '6366f1',
      questions: [
        {
          key: 'lit_eval',
          q: 'Health literacy gains and educational reinforcement:',
          defaultAnswer: 'Status: Significantly improved. Patient demonstrates improved understanding of kidney disease, albuminuria, and the critical relationship between blood pressure, diabetes, CKD progression, and cardiovascular risk. Shared decision-making framework utilized; continue cardiorenal education.'
        }
      ]
    },
    {
      id: 'preventive',
      title: 'Preventive care gap (Tdap overdue)',
      icon: 'ShieldPlus',
      color: '8b5cf6',
      questions: [
        {
          key: 'prev_eval',
          q: 'Immunization gap and recommendation:',
          defaultAnswer: 'Status: Tdap booster is overdue (>10 years since last dose) per CDC Adult Immunization Schedule. Recommend Tdap administration at this visit.'
        }
      ]
    },
  ],
  PLAN_SECTIONS: [
    {
      id: 'ckd_plan',
      title: 'Cardiorenal protection & CKD optimization plan',
      options: [
        { key: 'cp1', label: 'Continue lisinopril 40 mg PO daily for cardiorenal protection and blood pressure maintenance', correct: true },
        { key: 'cp2', label: 'Continue empagliflozin 10 mg PO daily for kidney and cardiovascular protection', correct: true },
        { key: 'cp3', label: 'Reinforce blood pressure control and renal protection goals', correct: true },
        { key: 'cp4', label: 'Monitor eGFR, serum creatinine, and UACR regularly to track progression', correct: true },
        { key: 'cp5', label: 'Continue long-term cardiorenal optimization efforts beyond immediate next-step interventions', correct: true },
        { key: 'cp6', label: 'CRITICAL SAFETY GUARDRAIL: Monitor serum potassium in 2–4 weeks; given baseline potassium 4.8 mEq/L and maximal lisinopril 40 mg, hold off on initiating finerenone today to avoid hyperkalemia risk; only consider nonsteroidal MRA if potassium remains <=4.8 mEq/L with mandatory 4-week potassium monitoring', correct: true },
      ]
    },
    {
      id: 'dm_plan',
      title: 'Type 2 diabetes mellitus plan',
      options: [
        { key: 'dp1', label: 'Continue metformin XR 1000 mg PO twice daily with meals', correct: true },
        { key: 'dp2', label: 'Continue empagliflozin 10 mg PO daily', correct: true },
        { key: 'dp3', label: 'Continue semaglutide 0.5 mg subcutaneous weekly (maintain current dose, do NOT increase prematurely)', correct: true },
        { key: 'dp4', label: 'Reinforce diabetic diet, portion control, and lifestyle habits', correct: true },
        { key: 'dp5', label: 'Repeat A1C in ~3 months to evaluate trajectory toward <7.0% goal', correct: true },
      ]
    },
    {
      id: 'htn_plan',
      title: 'Hypertension plan',
      options: [
        { key: 'hp1', label: 'Continue lisinopril 40 mg PO daily', correct: true },
        { key: 'hp2', label: 'Continue metoprolol succinate 50 mg PO daily', correct: true },
        { key: 'hp3', label: 'Continue home blood pressure monitoring with a written log', correct: true },
        { key: 'hp4', label: 'Maintain blood pressure goal <130/80 mmHg', correct: true },
      ]
    },
    {
      id: 'ascvd_plan',
      title: 'Secondary ASCVD prevention & lipid management plan',
      options: [
        { key: 'ap1', label: 'Continue atorvastatin 40 mg PO daily at bedtime (maintain current dose, do NOT increase to 80 mg)', correct: true },
        { key: 'ap2', label: 'Continue aspirin 81 mg PO daily', correct: true },
        { key: 'ap3', label: 'Target secondary prevention LDL-C <70 mg/dL (or <55 mg/dL)', correct: true },
        { key: 'ap4', label: 'Consider adding ezetimibe 10 mg PO daily if LDL-C remains above target at next follow-up', correct: true },
        { key: 'ap5', label: 'Repeat lipid panel in 6–12 months', correct: true },
      ]
    },
    {
      id: 'life_plan',
      title: 'Lifestyle modification & obesity plan',
      options: [
        { key: 'lp1', label: 'Continue regular walking program progressing toward >=150 minutes/week moderate activity', correct: true },
        { key: 'lp2', label: 'Reinforce portion control, healthy food choices, and sodium restriction (<2,000 mg/day)', correct: true },
      ]
    },
    {
      id: 'edu_plan',
      title: 'Patient education & health literacy plan',
      options: [
        { key: 'ep1', label: 'Continue chronic kidney disease education', correct: true },
        { key: 'ep2', label: 'Continue counseling regarding albuminuria and cardiovascular risk relationship', correct: true },
        { key: 'ep3', label: 'Engage in shared decision-making with patient on therapy prioritization', correct: true },
      ]
    },
    {
      id: 'imm_plan',
      title: 'Preventive care & immunization plan',
      options: [
        { key: 'ip1', label: 'Recommend and administer Tdap booster vaccination today (overdue >10 years)', correct: true },
      ]
    },
    {
      id: 'fu_plan',
      title: 'Follow-up & monitoring timeline',
      options: [
        { key: 'fp1', label: 'Follow up in ~4–8 weeks for collaborative ambulatory care visit', correct: true },
        { key: 'fp2', label: 'Repeat laboratory monitoring (BMP: serum creatinine, eGFR, potassium) in 2–4 weeks', correct: true },
        { key: 'fp3', label: 'Repeat UACR in 3–6 months to track albuminuria trajectory', correct: true },
        { key: 'fp4', label: 'Continue long-term cardiorenal risk reduction efforts beyond immediate next-step interventions', correct: true },
        { key: 'fp5', label: 'Reassess potassium and renal function before considering any future RAAS/MRA intensification', correct: true },
      ]
    },
  ],
  PLAN_FREETEXT: [],
  GUIDING_QUESTIONS: [
    'How should you interpret the reduction in UACR?',
    'Would you classify this patient as low risk now?',
    'What should become the next therapeutic priority?',
    'Why does LDL-C remain important despite improving kidney outcomes?',
    'Would you consider finerenone in this patient?',
    'What evidence suggests the initial intervention strategy was successful?',
    'How would you explain residual risk to this patient?',
    'What long-term complications remain most concerning?'
  ],
  PRECEPTOR: {
    keyIssues: ['Improvement in UACR and BP', 'Persistent A3 albuminuria', 'Residual ASCVD risk (LDL 76)'],
    assessment: ['Improvement is meaningful but risk remains elevated', 'Secondary prevention patients require sequential intervention prioritization'],
    plan: ['Identify next major therapeutic target (lipids, finerenone, or GLP-1 titration)'],
    pearls: ['Risk reduction and risk elimination are not the same thing', 'Patients with CKD and ASCVD frequently require sequential prioritization'],
    mistakes: ['Assuming improvement means the problem is solved', 'Missing residual ASCVD risk'],
    followupQuestions: ['What is the next highest-priority intervention?'],
    checklist: ['Recognized albuminuria improvement', 'Recognized BP goal attainment', 'Identified persistent residual risk', 'Selected appropriate next intervention'],
  },
})

const lindaThu = makeCase({
  id: 'linda-thu',
  PATIENT: lindaTue.PATIENT,
  ENCOUNTER: {
    day: 'Thursday', type: 'Final Follow-Up', difficulty: 'Advanced', difficultyTone: 'amber',
    setting: 'Collaborative Practice Ambulatory Care Pharmacy Clinic',
    chiefConcern: "I finally feel like I have a handle on all of this.",
    snapshotSummary: '68-year-old female presenting for scheduled 6-month follow-up (final follow-up / transition of care) in an ambulatory care pharmacy clinic under collaborative practice agreement for management of CKD Stage 3a with improving albuminuria (reclassified from A3 to A2), type 2 diabetes mellitus near goal (A1C 7.2%), controlled hypertension (124/76 mmHg), and secondary ASCVD prevention (prior STEMI s/p PCI/DES, LDL 63 mg/dL on atorvastatin 80 mg + ezetimibe 10 mg). Focus on transition of care, comprehensive maintenance care plan, and lifelong cardiorenal monitoring.',
    diseaseStates: ['Chronic Kidney Disease Stage 3a', 'Type 2 Diabetes Mellitus', 'Essential Hypertension', 'Secondary ASCVD Prevention', 'Obesity', 'Health Literacy', 'Preventive Care Gap'],
    learningObjectives: ['Develop long-term comprehensive maintenance care plan', 'Ensure safe transition of care to primary care', 'Summarize cumulative cardiorenal and secondary prevention optimization'],
  },
  VITALS: { bp: '124/76', bpRepeat: '122/74', hr: '68', rr: '16', temp: '98.6°F', weight: '92 kg', height: "5'5\" (65 inches)", bmi: '33.8',
    flags: { bp: 'normal', bpRepeat: 'normal' },
    extras: [
      { label: 'Total weight change', value: '−4.0 kg total loss from baseline (baseline 96 kg to current 92 kg; BMI 35.2 to 33.8 kg/m², reconciled as Class I Obesity)', flag: 'normal' },
      { label: 'Home BP average', value: '~123/75 mmHg (corroborates office BP, at maintenance goal <130/80 mmHg)', flag: 'normal' },
      { label: 'Fasting home glucose', value: '120–140 mg/dL', flag: 'normal' },
    ]
  },
  LABS: [
    { label: 'A1C', value: '7.2', unit: '%', flag: 'warn', note: 'Trend across three time points: 8.2% → 7.9% → 7.2% (near goal <7.0%)' },
    { label: 'Na', value: '140', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.7', unit: 'mEq/L', flag: 'normal', note: 'Potassium stable on lisinopril 40 mg PO daily' },
    { label: 'SCr', value: '1.28', unit: 'mg/dL', flag: 'high', note: 'Stable renal function on maximal lisinopril 40 mg + empagliflozin 10 mg' },
    { label: 'eGFR', value: '49', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Corresponds to CKD Stage G3a (mildly to moderately decreased)' },
    { label: 'UACR', value: '210', unit: 'mg/g', flag: 'warn', note: 'Trend across three time points: 452 → 330 → 210 mg/g (53.5% reduction); reclassified from Category A3 to Category A2 (moderately increased albuminuria, 30-300 mg/g)' },
    { label: 'Total cholesterol', value: '152', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '63', unit: 'mg/dL', flag: 'normal', note: 'Trend across three time points: 92 → 76 → 63 mg/dL; achieved secondary prevention goal <70 mg/dL on atorvastatin 80 mg + ezetimibe 10 mg' },
    { label: 'HDL-C', value: '47', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '160', unit: 'mg/dL', flag: 'normal' },
  ],
  ALERTS: [{ level: 'info', text: 'Significant cumulative improvement. UACR reduced to A2 category. BP and LDL at secondary prevention goal.' }],
  PROBLEMS: [
    { name: 'Chronic Kidney Disease Stage G3a with persistent albuminuria', detail: 'eGFR 49, UACR 210 mg/g (reclassified to A2, 53.5% reduction from baseline 452)', flag: 'warn' },
    { name: 'Secondary ASCVD Prevention', detail: 'Prior STEMI s/p PCI/DES 3 years ago; LDL 63 mg/dL (at goal <70 mg/dL on atorvastatin 80 + ezetimibe 10)', flag: 'normal' },
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 7.2% (trend: 8.2% → 7.9% → 7.2%, near goal <7.0%)', flag: 'normal' },
    { name: 'Essential hypertension', detail: 'BP 124/76 (repeat 122/74, home ~123/75) — controlled and at goal <130/80', flag: 'normal' },
    { name: 'Class I Obesity', detail: 'BMI 33.8 (−4.0 kg total loss from baseline 96 kg)', flag: 'warn' },
    { name: 'Health literacy & long-term disease understanding', detail: 'Significantly improved understanding of CKD, albuminuria, CVD, and risk reduction vs cure', flag: 'normal' },
    { name: 'Gastroesophageal reflux disease (GERD)', detail: 'Managed on omeprazole 20 mg daily', flag: 'normal' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Total weight change', value: 'Current weight 92 kg (−4.0 kg total loss from baseline 96 kg; BMI 33.8 kg/m², reconciled as Class I Obesity).' },
    { label: 'A1C longitudinal trend', value: 'A1C downward trend across three time points: baseline 8.2% → 3-month 7.9% → 6-month 7.2% (near individualized goal <7.0%).' },
    { label: 'UACR longitudinal trend', value: 'UACR downward trend across three time points: baseline 452 mg/g → 3-month 330 mg/g → 6-month 210 mg/g (53.5% cumulative reduction); reclassified from Category A3 (severely increased) to Category A2 (moderately increased albuminuria, 30–300 mg/g).' },
    { label: 'BP longitudinal trend', value: 'Baseline 142/84 mmHg → 3-month 128/78 mmHg → 6-month 124/76 mmHg (repeat 122/74 mmHg); home BP log average ~123/75 mmHg corroborates office readings and achieves maintenance goal <130/80 mmHg.' },
    { label: 'LDL-C longitudinal trend', value: 'LDL-C downward trend across three time points: baseline 92 mg/dL → 3-month 76 mg/dL → 6-month 63 mg/dL; achieved secondary prevention target <70 mg/dL on intensified atorvastatin 80 mg daily + ezetimibe 10 mg daily.' },
    { label: 'Renal & Electrolyte stability', value: 'SCr 1.28 mg/dL, eGFR 49 mL/min/1.73m² (CKD Stage G3a, stable kidney function); serum potassium 4.7 mEq/L (stable on lisinopril 40 mg daily).' },
    { label: 'Preventive care status', value: 'Influenza, COVID-19, PCV20, and Shingrix (2 doses) are complete; Tdap booster is overdue (>10-year interval) per CDC Adult Immunization Schedule.' },
  ],
  ALLERGIES: [{ substance: 'Penicillin', reaction: 'Rash and hives', severity: 'Severe', type: 'Allergy', date: 'Childhood', source: 'Patient reported' }],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Current season up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date with current booster', flag: 'normal' },
    { name: 'PCV20', status: 'Received at age 65 (complete)', flag: 'normal' },
    { name: 'Shingrix', status: 'Series complete (2 doses received)', flag: 'normal' },
    { name: 'Tdap booster', status: 'Last received 11 years ago — overdue for booster (>10-year interval) per CDC Adult Immunization Schedule', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'HTN / CKD renoprotection', notes: 'Optimized at prior visit, well tolerated' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'T2DM / cardiorenal protection', notes: 'Well tolerated' },
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'BID with meals', indication: 'T2DM', notes: 'Well tolerated' },
    { name: 'Semaglutide', dose: '1 mg', route: 'SQ', freq: 'weekly', indication: 'T2DM / obesity', notes: 'Uptitrated from 0.5 mg at last visit, well tolerated' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'Secondary ASCVD / post-STEMI', notes: 'Well tolerated' },
    { name: 'Atorvastatin', dose: '80 mg', route: 'PO', freq: 'daily at bedtime', indication: 'Secondary ASCVD prevention', notes: 'Intensified from 40 mg to 80 mg at last visit, well tolerated without myalgias' },
    { name: 'Ezetimibe', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Secondary ASCVD prevention', notes: 'Added at last visit, well tolerated' },
    { name: 'Aspirin', dose: '81 mg', route: 'PO', freq: 'daily', indication: 'Secondary ASCVD antiplatelet', notes: 'Taking consistently' },
    { name: 'Omeprazole', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'GERD', notes: 'Taking consistently' },
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'Managed chronic conditions', value: 'Managed for Type 2 diabetes mellitus (diagnosed 15 years ago), Essential hypertension (diagnosed 18 years ago), Chronic Kidney Disease Stage 3a (CKD Stage G3a) with improving albuminuria, Hyperlipidemia, Secondary ASCVD prevention (prior STEMI 3 years ago s/p PCI with DES), and Class I Obesity.' },
    { label: 'Medication adherence & tolerability', value: 'Reports excellent medication adherence (takes all prescribed chronic medications consistently without missed doses); explicitly denies missed doses, denies financial or access concerns, and denies medication adverse effects.' },
    { label: 'Health literacy & disease understanding', value: 'Expresses understanding specific to kidney disease, albuminuria, and cardiovascular risk. Demonstrates understanding that although her lab values have improved significantly, her risk for future complications (CKD progression, recurrent myocardial infarction / cardiovascular events) remains elevated and requires lifelong vigilance.' },
    { label: 'Social History', value: 'Occupation: Retired elementary school teacher. Marital/living status: Married, lives with husband; assists with grandchildren childcare multiple days per week. Tobacco: Former smoker (1 pack/day for 20 years, quit 10 years ago). Alcohol: Rare (small glass of wine on holidays). Recreational drugs: Explicitly denies recreational or illicit drug use.' },
    { label: 'Review of Systems (ROS)', value: 'Cardiovascular/Pulmonary/Neurologic/Endocrine: Explicitly denies chest pain, shortness of breath, palpitations, dizziness, syncope, orthopnea, paroxysmal nocturnal dyspnea (PND), hypoglycemia symptoms, and other medication adverse effects.' },
    { label: 'Patient Goals & Motivations', value: 'Highly motivated to preserve kidney function and avoid dialysis, avoid another heart attack / cardiovascular event, maintain physical independence through retirement, and maintain active vigilance over her health.' },
    { label: 'Lifestyle habits', value: 'Walking 30 to 40 minutes 5 days per week; sodium restriction (<2,000 mg/day); sustained portion control.' },
    { label: 'Past Medical History (PMH)', value: 'Type 2 diabetes mellitus, essential hypertension, Chronic Kidney Disease Stage 3a (CKD Stage 3a), hyperlipidemia, secondary ASCVD prevention (prior STEMI 3 years ago s/p PCI with DES), Class I obesity, and Gastroesophageal Reflux Disease (GERD, on omeprazole 20 mg daily).' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'confidence', label: 'Self-Management Confidence', placeholder: 'How does she feel about her regimen now?' },
    { key: 'understanding', label: 'Disease Understanding & Vigilance', placeholder: 'Understanding of risk reduction vs cure?' },
    { key: 'lifestyle', label: 'Lifestyle habits', placeholder: 'Walking duration, sodium, diet?' },
    { key: 'symptoms', label: 'Review of Systems', placeholder: 'Chest pain, SOB, palpitations, orthopnea, PND?' },
    { key: 'goals', label: 'Motivations', placeholder: 'Dialysis avoidance, MI prevention, independence?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'linda-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I get a skin rash and hives from Penicillin—I was told I developed a severe rash when given it as a child." },
    { id: 'linda-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a Calcium 600 mg plus Vitamin D3 supplement every morning for bone health, and occasional Tylenol for headaches." },
    { id: 'linda-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a small glass of wine on holidays or special dinners." },
    { id: 'linda-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 20 years, but I quit 10 years ago." },
    { id: 'linda-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had high blood pressure and a heart attack at age 62. My mother had type 2 diabetes and chronic kidney disease. My brother had a heart attack at age 58, and my sister has high blood pressure and diabetes." },
    { id: 'linda-thu_surg', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy', 'hysterectomy'], response: 'I had my gallbladder removed when I was 49, and then a total abdominal hysterectomy when I was 52.' },
    { id: 'linda-thu_mi', topic: 'Heart Attack / Stent', field: 'pmh', keywords: ['heart attack', 'stemi', 'stent', 'pci', 'catheterization'], response: 'I had a heart attack about 3 years ago. They told me I had a drug-eluting stent placed (PCI).' },
    { id: 'linda-thu_duration', topic: 'Disease duration', field: 'pmh', keywords: ['how long', 'when were you diagnosed', 'duration', 'years'], response: 'I have had high blood pressure for 18 years, diabetes for 15 years, kidney disease Stage 3a, high cholesterol, and GERD on omeprazole.' },
    { id: 'linda-thu_social', topic: 'Social / Family', field: 'social', keywords: ['live', 'work', 'family', 'grandchild', 'children', 'retired', 'married'], response: 'I am a retired elementary school teacher. I am married and live with my husband, and I help take care of my grandchildren regularly. I have never used recreational drugs.' },
    { id: 'linda-thu_homebp', topic: 'Home BP monitoring', field: 'homeBp', keywords: ['home blood pressure', 'bp at home', 'check your blood pressure', 'monitor', 'log', 'average'], response: 'I check my blood pressure at home regularly — several times a week. My readings are consistently good now, around 123 over 75 on average.' },
    { id: 'linda-thu_homebg', topic: 'Home glucose monitoring', field: 'glucoseMonitoring', keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'finger stick', 'meter'], response: 'I check my blood sugar regularly. My fasting readings are usually around 120 to 140 now, which is much better than where I started.' },
    { id: 'linda-thu_lifestyle', topic: 'Lifestyle', field: 'lifestyle', keywords: ['walk', 'exercise', 'diet', 'food', 'sodium', 'salt', 'portion'], response: 'I am walking about 5 days a week for 30-40 minutes each time. I also really reduced my sodium and I am controlling my portions better.' },
    { id: 'linda-thu_ros', topic: 'Review of systems', field: 'symptoms', keywords: ['chest pain', 'short of breath', 'palpitations', 'dizziness', 'syncope', 'orthopnea', 'pnd', 'hypoglycemia', 'side effects'], response: 'I have no chest pain, no shortness of breath, no heart palpitations, no dizziness, no syncope, no orthopnea, and no waking up gasping for air (PND). I have had no low blood sugars and no side effects from my medications.' },
    { id: 'linda-thu_goals', topic: 'Motivations and long-term vigilance', field: 'goals', keywords: ['dialysis', 'kidney', 'heart attack', 'independence', 'vigilance', 'cure'], response: 'My greatest fears are needing dialysis or having another heart attack like 3 years ago. I want to keep my independence to be with my grandchildren. I know my improved lab numbers do not mean I am cured, and I understand I need to stay vigilant for life.' },
    { id: 'cth_conf', topic: 'Increased Confidence', field: 'confidence', keywords: ['confident', 'handle', 'understand', 'better'],
      response: "I feel so much better now. I finally understand why I'm taking all these pills and what we're trying to prevent." },
  ],
  ASSESSMENT_CARDS: [
    {
      id: 'ckd',
      title: 'Chronic Kidney Disease Stage G3a with persistent albuminuria',
      icon: 'FlaskConical',
      color: '0891b2',
      questions: [
        {
          key: 'ckd_eval',
          q: 'CKD staging, albuminuria reclassification, progression risk, and guidelines:',
          defaultAnswer: 'Status: Significantly improved but ongoing risk. eGFR 49 mL/min/1.73m² (CKD Stage G3a) and SCr 1.28 mg/dL reflect stable kidney function. Documents substantial albuminuria improvement across three time points: baseline 452 mg/g → 3-month 330 mg/g → 6-month 210 mg/g (53.5% cumulative reduction). Reclassifies albuminuria as Category A2 (moderately increased albuminuria, 30–300 mg/g, no longer A3 / severely increased). Notes meaningful reduction in CKD progression risk. Cites KDIGO 2024 Clinical Practice Guideline and ADA 2026 Standards of Care. Albuminuria reduction is associated with lower CKD progression and reduced cardiovascular event risk. Patient remains at elevated long-term cardiorenal risk due to CKD, diabetes, hypertension, and established ASCVD. Current therapy (lisinopril 40 mg daily + empagliflozin 10 mg daily) is effective and should be continued. Ongoing monitoring of renal function (eGFR, SCr), potassium, and UACR remains essential. Recognizes cumulative therapy optimization drove the albuminuria reduction.'
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
          q: 'Glycemic status, trend, therapy benefits, and goal:',
          defaultAnswer: 'Status: Near goal and improving. Documents A1C improvement across three time points: baseline 8.2% → 3-month 7.9% → 6-month 7.2%. States A1C goal <7.0% per ADA 2026 Standards of Care. Individualizes goal for a functional, cognitively intact older adult. Notes approaching target with a favorable clinical trajectory. References therapy: metformin XR 1,000 mg twice daily, empagliflozin 10 mg daily, and semaglutide 1 mg subcutaneously weekly. Therapy provides proven cardiovascular and renal protective benefits. Recognizes semaglutide uptitration (0.5 to 1 mg) directly supported glycemic and weight improvement. Current therapy is appropriate given improvement, adherence, and tolerability.'
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
          q: 'Blood pressure control status, office and home measurements, and renoprotection:',
          defaultAnswer: 'Status: Controlled. Documents office BP at goal (124/76 mmHg, repeat 122/74 mmHg). Home BP log average (~123/75 mmHg) is consistent with office measurements. States patient is meeting the evidence-based BP goal <130/80 mmHg for diabetes, CKD, and ASCVD per ADA 2026, KDIGO 2024, and 2025 ACC/AHA guidelines. BP control contributed substantially to the 53.5% albuminuria reduction and is a key intervention for long-term kidney protection. Current therapy (lisinopril 40 mg daily + metoprolol succinate 50 mg daily) is effective and well tolerated.'
        }
      ]
    },
    {
      id: 'ascvd',
      title: 'Secondary ASCVD prevention & hyperlipidemia',
      icon: 'ShieldAlert',
      color: 'd97706',
      questions: [
        {
          key: 'ascvd_eval',
          q: 'ASCVD risk status, LDL trend, statin intensification, and residual risk:',
          defaultAnswer: 'Status: Improved but lifelong high risk. Patient has established ASCVD based on STEMI with PCI/DES placement 3 years ago; secondary prevention patient for life. Documents LDL-C improvement across three time points: baseline 92 mg/dL → 3-month 76 mg/dL → 6-month 63 mg/dL. Attributes improvement to lipid-lowering intensification (atorvastatin intensified from 40 mg to 80 mg daily high-intensity, plus ezetimibe 10 mg daily) and improved adherence. LDL-C is now at and below the secondary-prevention goal of <70 mg/dL (or <55 mg/dL per ACC/AHA guidelines). Represents substantial cardiovascular risk reduction, but risk is reduced, not eliminated. Continued elevated lifetime risk drivers include prior MI, diabetes, CKD Stage 3a, obesity, and age. Continue high-intensity statin, ezetimibe, aspirin, BP/glycemic control, and lifestyle.'
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
          q: 'Obesity status, weight loss amount, and chronic disease framing:',
          defaultAnswer: 'Status: Improving. BMI remains elevated (33.8 kg/m²) but weight decreased meaningfully from 96 kg to 92 kg (−4.0 kg total loss). Manage obesity as a chronic disease per ADA guidelines. Links obesity to cardiovascular disease, CKD progression, hypertension, and insulin resistance. Notes sustainable lifestyle changes and high motivation. Continued gradual weight reduction supported by semaglutide 1 mg weekly improves cardiorenal outcomes and quality of life.'
        }
      ]
    },
    {
      id: 'health_literacy',
      title: 'Health literacy & long-term disease understanding',
      icon: 'BookOpen',
      color: '6366f1',
      questions: [
        {
          key: 'lit_eval',
          q: 'Health literacy trajectory, risk reduction vs cure, and engagement:',
          defaultAnswer: 'Status: Significantly improved. Substantial improvement in understanding CKD, albuminuria, cardiovascular disease, and risk reduction. Understands that chronic disease management reduces risk rather than cures, requiring lifelong vigilance. Improved health literacy contributed directly to adherence, lifestyle modifications, and active engagement in self-management. Continued education and reinforcement remain appropriate; links health literacy to self-management success.'
        }
      ]
    },
    {
      id: 'preventive_care',
      title: 'Preventive care gap (Tdap overdue)',
      icon: 'ShieldPlus',
      color: '8b5cf6',
      questions: [
        {
          key: 'prev_eval',
          q: 'Immunization gap and recommendation:',
          defaultAnswer: 'Status: Preventive care gap identified. Identifies Tdap booster as overdue (>10 years since last dose) per CDC Adult Immunization Schedule. Recommend Tdap administration at this encounter.'
        }
      ]
    },
  ],
  PLAN_SECTIONS: [
    {
      id: 'ckd_plan',
      title: 'Cardiorenal protection & CKD optimization plan',
      options: [
        { key: 'cp1', label: 'Continue lisinopril 40 mg PO daily for cardiorenal protection and blood pressure maintenance', correct: true },
        { key: 'cp2', label: 'Continue empagliflozin 10 mg PO daily for kidney and cardiovascular protection', correct: true },
        { key: 'cp3', label: 'Reinforce importance of long-term kidney protection strategies', correct: true },
        { key: 'cp4', label: 'Continue integrated blood pressure and diabetes management to reduce CKD progression risk', correct: true },
      ]
    },
    {
      id: 'dm_plan',
      title: 'Type 2 diabetes mellitus plan',
      options: [
        { key: 'dp1', label: 'Continue metformin XR 1000 mg PO twice daily with meals', correct: true },
        { key: 'dp2', label: 'Continue empagliflozin 10 mg PO daily', correct: true },
        { key: 'dp3', label: 'Continue semaglutide 1 mg subcutaneously weekly', correct: true },
        { key: 'dp4', label: 'Repeat A1C in ~3 months to monitor glycemic trajectory', correct: true },
        { key: 'dp5', label: 'Continue lifestyle modifications and portion control', correct: true },
      ]
    },
    {
      id: 'htn_plan',
      title: 'Essential hypertension plan',
      options: [
        { key: 'hp1', label: 'Continue lisinopril 40 mg PO daily', correct: true },
        { key: 'hp2', label: 'Continue metoprolol succinate 50 mg PO daily', correct: true },
        { key: 'hp3', label: 'Continue home blood pressure monitoring with written log review', correct: true },
        { key: 'hp4', label: 'Maintain blood pressure goal <130/80 mmHg for long-term renoprotection', correct: true },
      ]
    },
    {
      id: 'ascvd_plan',
      title: 'Secondary ASCVD prevention & lipid management plan',
      options: [
        { key: 'ap1', label: 'Continue atorvastatin 80 mg PO daily at bedtime (high-intensity statin)', correct: true },
        { key: 'ap2', label: 'Continue ezetimibe 10 mg PO daily', correct: true },
        { key: 'ap3', label: 'Continue aspirin 81 mg PO daily', correct: true },
        { key: 'ap4', label: 'Reinforce adherence to secondary prevention therapies', correct: true },
        { key: 'ap5', label: 'Continue comprehensive cardiovascular risk reduction strategies', correct: true },
        { key: 'ap6', label: 'Maintain LDL-C at secondary-prevention goal (<70 mg/dL or <55 mg/dL)', correct: true },
      ]
    },
    {
      id: 'life_plan',
      title: 'Lifestyle modification & obesity plan',
      options: [
        { key: 'lp1', label: 'Continue walking program 30–40 minutes 5 days/week', correct: true },
        { key: 'lp2', label: 'Encourage maintenance of >=150 minutes/week moderate-intensity physical activity', correct: true },
        { key: 'lp3', label: 'Reinforce dietary modifications, portion control, and sodium restriction (<2,000 mg/day)', correct: true },
        { key: 'lp4', label: 'Leverage GLP-1 RA therapy (semaglutide 1 mg weekly) for continued weight management and metabolic health', correct: true },
      ]
    },
    {
      id: 'edu_plan',
      title: 'Patient education & health literacy plan',
      options: [
        { key: 'ep1', label: 'Reinforce concept of residual cardiovascular and renal risk despite improved numbers', correct: true },
        { key: 'ep2', label: 'Continue patient-centered education regarding long-term disease management versus cure', correct: true },
        { key: 'ep3', label: 'Encourage ongoing engagement in self-management', correct: true },
        { key: 'ep4', label: 'Support sustained adherence and durable lifestyle habits', correct: true },
      ]
    },
    {
      id: 'imm_plan',
      title: 'Preventive care & immunization plan',
      options: [
        { key: 'ip1', label: 'Recommend and administer Tdap booster vaccination today (overdue >10 years per CDC schedule)', correct: true },
      ]
    },
    {
      id: 'fu_plan',
      title: 'Follow-up, transition of care, & monitoring timeline',
      options: [
        { key: 'fp1', label: 'Schedule follow-up visit in ~3–6 months for ambulatory care transition of care', correct: true },
        { key: 'fp2', label: 'Repeat A1C prior to next visit', correct: true },
        { key: 'fp3', label: 'Repeat lipid panel in 6–12 months prior to next visit', correct: true },
        { key: 'fp4', label: 'Repeat UACR in 6–12 months prior to next visit', correct: true },
        { key: 'fp5', label: 'Coordinate routine laboratory monitoring (BMP: serum creatinine, eGFR, potassium) with PCP for ongoing CKD progression risk monitoring', correct: true },
        { key: 'fp6', label: 'Continue secondary ASCVD prevention monitoring and statin follow-up', correct: true },
        { key: 'fp7', label: 'Reinforce successful lifestyle modifications and medication adherence', correct: true },
      ]
    },
  ],
  PLAN_FREETEXT: [],
  GUIDING_QUESTIONS: [
    'How would you describe this patient\'s overall progress?',
    'Has this patient\'s risk been eliminated?',
    'Why should ACE inhibitor and SGLT2 inhibitor therapy be continued?',
    'Why should high-intensity statin therapy be continued?',
    'What monitoring should occur moving forward?',
    'How would you explain residual risk to this patient?',
    'What evidence suggests the current treatment strategy has been successful?',
    'What is the most important lesson from this case?'
  ],
  PRECEPTOR: {
    keyIssues: ['Cumulative success of sequential interventions', 'Need for long-term monitoring plan', 'Safe transition of care'],
    assessment: ['Patient achieved major risk reduction across multiple domains', 'Regimen is complex and requires clear documentation for PCP'],
    plan: ['Continue all optimized therapies', 'Provide clear handoff documentation', 'Schedule routine lab monitoring'],
    pearls: ['A successful ambulatory care intervention must be successfully handed back to primary care'],
    mistakes: ['Failing to provide clear follow-up instructions', 'Assuming complex regimens will automatically be sustained without support'],
    followupQuestions: ['How do you summarize a 6-month intervention series for a busy PCP?'],
    checklist: ['Recognized cumulative improvement', 'Developed comprehensive maintenance plan', 'Ensured safe transition of care'],
  },
})

export const casesByDay = {
  Tuesday: [jamesTue, lindaTue],
  Wednesday: [jamesWed, lindaWed],
  Thursday: [jamesThu, lindaThu],
}

// Flat array expected by cases.js CASES registry
export const BC_CASES = [jamesTue, jamesWed, jamesThu, lindaTue, lindaWed, lindaThu]

// Grading rubrics keyed by case id — merged into GRADING_RUBRICS in cases.js
export const BC_RUBRICS = {
  'james-tue': {
    subjective: [
      { id: 'b_s_cost', label: 'Cost barrier for empagliflozin', keywords: ['cost', 'afford', 'expensive', 'pay', 'money', 'fixed income', 'copay'], tip: 'He never filled empagliflozin because of cost — the key hidden driver.' },
      { id: 'b_s_stretch', label: 'Medication stretching (every other day)', keywords: ['stretch', 'every other day', 'skip', 'alternate', 'save', 'last longer'], tip: 'He stretches his medications by taking every other day to make them last.' },
      { id: 'b_s_delay', label: 'Delayed refills pending pension check', keywords: ['refill', 'delay', 'pension', 'wait', 'pick up'], tip: 'He waits until his pension check arrives before refilling medications.' },
      { id: 'b_s_a1c_know', label: 'Limited A1C understanding', keywords: ['understand', 'a1c', 'number', 'mean', 'know'], tip: 'He does not understand what his A1C number means.' },
      { id: 'b_s_insulin_fear', label: 'Fear of insulin', keywords: ['insulin', 'fear', 'afraid', 'scared', 'shot', 'dad'], tip: 'He fears insulin based on his father\'s experience.' },
    ],
    objective: [
      { id: 'b_o_empa', label: 'Empagliflozin — no fills in 4 months', keywords: ['empagliflozin', 'no fill', 'no claims', 'never filled', 'jardiance'], tip: 'Empagliflozin is active on the chart but has no fill history in 4 months.' },
      { id: 'b_o_a1c', label: 'A1C 8.8% (prior 8.3%)', keywords: ['8 8', 'a1c', 'worsening', '8 3'], tip: 'Report A1C 8.8%, noting worsening from prior 8.3%.' },
      { id: 'b_o_bp', label: 'BP 152/94 (repeat 150/92)', keywords: ['152', '150', 'blood pressure', ' bp '], tip: 'Report BP 152/94, repeat 150/92.' },
    ],
    assessment: [
      { id: 'b_a_root', label: 'Root cause: non-adherence/cost — not treatment failure', keywords: ['adherence', 'cost', 'root cause', 'not failure', 'never filled'], tip: 'The root cause is cost-driven non-adherence, not treatment failure.' },
      { id: 'b_a_access', label: 'Empagliflozin never started due to cost', keywords: ['never started', 'cost', 'empagliflozin', 'barrier', 'access'], tip: 'Identify empagliflozin as unstarted due to affordability barrier.' },
      { id: 'b_a_no_insulin', label: 'No premature insulin escalation', keywords: ['not insulin', 'avoid insulin', 'premature', 'defer insulin'], tip: 'Escalating to insulin prematurely is a critical error here.' },
    ],
    plan: [
      { id: 'b_p_access', label: 'Address affordability / assistance program', keywords: ['assistance', 'program', 'formulary', 'affordable', 'manufacturer', 'coupon'], tip: 'Address affordability — patient assistance program or formulary alternative.' },
      { id: 'b_p_adhere', label: 'Reinforce daily adherence / stop stretching', keywords: ['daily', 'every day', 'reinforce', 'stop stretching', 'adherence'], tip: 'Reinforce taking medications every day; stop stretching behavior.' },
      { id: 'b_p_recheck', label: 'Recheck A1C and BP in 3 months', keywords: ['3 month', 'recheck', 'follow up', 'a1c', 'blood pressure'], tip: 'Recheck A1C and BP in 3 months before considering escalation.' },
    ],
    avoid: [
      { id: 'b_x_insulin', label: 'Escalating to insulin without addressing adherence', keywords: ['start insulin', 'basal insulin', 'escalate to insulin'], tip: 'Do not escalate to insulin without addressing the cost/adherence root cause.' },
      { id: 'b_x_escalate', label: 'Intensifying therapy without checking adherence', keywords: ['intensif', 'escalate', 'before checking adherence', 'add another'], tip: 'Do not intensify therapy before evaluating the real barrier.' },
    ],
  },
  'james-wed': {
    subjective: [
      { id: 'bw_s_afford', label: 'Ongoing affordability anxiety', keywords: ['worry', 'insurance', 'change', 'future', 'afford'], tip: 'He still worries about losing access if insurance changes.' },
    ],
    objective: [
      { id: 'bw_o_a1c', label: 'A1C 7.9% (improved from 8.8%)', keywords: ['7 9', 'improv', 'a1c'], tip: 'A1C improved from 8.8% to 7.9%.' },
      { id: 'bw_o_bp', label: 'BP 138/86 (improved)', keywords: ['138', '136', 'blood pressure', 'improv'], tip: 'BP improved to 138/86.' },
    ],
    assessment: [
      { id: 'bw_a_progress', label: 'Improvement on therapy — above goal but trending', keywords: ['improv', 'not goal', 'trending', 'progress', 'partial'], tip: 'Improvement noted; still above goal — requires further monitoring.' },
      { id: 'bw_a_sustain', label: 'Access sustainability must be reassessed', keywords: ['access', 'sustain', 'afford', 'long term', 'insurance'], tip: 'Affordability interventions must be monitored for long-term sustainability.' },
    ],
    plan: [
      { id: 'bw_p_continue', label: 'Continue therapy; avoid premature escalation', keywords: ['continue', 'observe', 'monitor', 'no escalation', 'not yet'], tip: 'Continue current effective therapy before escalating further.' },
    ],
    avoid: [],
  },
  'james-thu': {
    subjective: [
      { id: 'bth_s_access', label: 'Residual access anxiety acknowledged', keywords: ['worry', 'insurance', 'change', 'future', 'access'], tip: 'Acknowledge residual access anxiety even when things are going well.' },
    ],
    objective: [
      { id: 'bth_o_bp', label: 'BP 128/80 (at goal)', keywords: ['128', '126', 'goal', 'blood pressure'], tip: 'BP at goal (128/80).' },
      { id: 'bth_o_a1c', label: 'A1C 7.1% (near goal)', keywords: ['7 1', 'a1c', 'near goal'], tip: 'A1C 7.1% — near goal and significantly improved from baseline 8.8%.' },
    ],
    assessment: [
      { id: 'bth_a_traj', label: 'Trajectory is excellent; therapy is working', keywords: ['trajectory', 'excellent', 'effective', 'working', 'success'], tip: 'Recognize that the clinical trajectory (not just single values) is excellent.' },
    ],
    plan: [
      { id: 'bth_p_continue', label: 'Continue all medications', keywords: ['continue', 'maintain', 'current therapy'], tip: 'Continue current effective therapy.' },
      { id: 'bth_p_contingency', label: 'Develop contingency plan for future access', keywords: ['contingency', 'plan', 'if insurance', 'future access', 'backup'], tip: 'Develop a contingency plan for future insurance/access changes.' },
    ],
    avoid: [
      { id: 'bth_x_stop', label: 'Stopping empagliflozin because near goal', keywords: ['stop', 'discontinue', 'near goal', 'done'], tip: 'Do not stop empagliflozin simply because A1C or BP is near goal.' },
    ],
  },
  'linda-tue': {
    subjective: [
      { id: 'c_s_ckd', label: 'Patient does not understand CKD staging', keywords: ['stage', 'understand', 'know', 'kidney', 'albumin'], tip: 'She does not understand CKD staging or what albuminuria means.' },
      { id: 'c_s_fears', label: 'Fear of dialysis and repeat MI', keywords: ['dialysis', 'fear', 'afraid', 'heart attack', 'worry'], tip: 'Her top fears: dialysis and another heart attack.' },
      { id: 'c_s_overwhelm', label: 'Feels overwhelmed with multiple conditions', keywords: ['overwhelm', 'different doctors', 'focus', 'priority'], tip: 'She feels overwhelmed with multiple conditions and conflicting guidance.' },
    ],
    objective: [
      { id: 'c_o_uacr', label: 'UACR 452 mg/g (severely increased, A3)', keywords: ['452', 'uacr', 'severe', ' a3', 'severely'], tip: 'UACR 452 = severely increased albuminuria (A3 category).' },
      { id: 'c_o_egfr', label: 'eGFR 52 (CKD Stage 3a)', keywords: ['52', 'egfr', 'stage 3', '3a', 'ckd'], tip: 'eGFR 52 = CKD Stage 3a.' },
      { id: 'c_o_stemi', label: 'Prior STEMI (secondary prevention)', keywords: ['stemi', 'prior', 'mi', 'secondary prevention', 'pci', 'des'], tip: 'Prior STEMI establishes secondary ASCVD prevention status.' },
    ],
    assessment: [
      { id: 'c_a_kdigo', label: 'KDIGO risk: G3aA3 = very high risk', keywords: ['g3a', 'a3', 'kdigo', 'very high', 'risk'], tip: 'Stage accurately: G3aA3 = very high CKD progression risk per KDIGO.' },
      { id: 'c_a_prioritize', label: 'Cardiorenal protection is the top priority (not A1C)', keywords: ['priorit', 'cardiorenal', 'not a1c', 'kidney', 'heart'], tip: 'The highest A1C is not always the highest priority — cardiorenal risk leads.' },
      { id: 'c_a_ascvd', label: 'Secondary ASCVD prevention (prior STEMI)', keywords: ['secondary', 'ascvd', 'stemi', 'prevention', 'ldl'], tip: 'Secondary ASCVD prevention status changes lipid targets.' },
    ],
    plan: [
      { id: 'c_p_lisinopril', label: 'Optimize lisinopril for cardiorenal protection', keywords: ['lisinopril', 'ace', 'titrat', 'increase', 'optimize'], tip: 'Titrate lisinopril to maximum tolerated dose for cardiorenal protection.' },
      { id: 'c_p_educate', label: 'Educate on CKD staging and cardiorenal priorities', keywords: ['educat', 'explain', 'kidney', 'stage', 'priorit', 'protect'], tip: 'Educate on CKD staging and why cardiorenal protection leads over A1C.' },
    ],
    avoid: [
      { id: 'c_x_a1c', label: 'Treating A1C as the top priority', keywords: ['a1c first', 'a1c is highest', 'focus on a1c', 'insulin because a1c'], tip: 'Do not prioritize A1C over cardiorenal protection in this patient.' },
    ],
  },
  'linda-wed': {
    subjective: [
      { id: 'cw_s_progress', label: 'Understands progress but knows risk remains', keywords: ['better', 'still at risk', 'progress', 'next', 'what now'], tip: 'She understands she is improving but knows she remains at high risk.' },
    ],
    objective: [
      { id: 'cw_o_uacr', label: 'UACR 330 (improved from 452 but still A3)', keywords: ['330', 'uacr', 'still a3', 'improv'], tip: 'UACR improved to 330 but remains in the severely increased (A3) category.' },
      { id: 'cw_o_bp', label: 'BP 128/78 (at goal)', keywords: ['128', '126', 'blood pressure', 'goal'], tip: 'BP now at goal.' },
      { id: 'cw_o_ldl', label: 'LDL 76 (above secondary prevention target)', keywords: ['76', '86', 'ldl', 'above', 'secondary', 'target'], tip: 'LDL 76 is above the typical secondary prevention target of <70 mg/dL.' },
    ],
    assessment: [
      { id: 'cw_a_residual', label: 'Residual risk remains despite BP improvement', keywords: ['residual', 'risk', 'remain', 'still', 'not resolved'], tip: 'Improvement in one metric does not eliminate overall residual risk.' },
      { id: 'cw_a_next', label: 'Identify the next sequential priority', keywords: ['next', 'priorit', 'sequential', 'finerenone', 'lipid', 'ldl'], tip: 'Must choose the next highest-yield intervention among finerenone, lipids, GLP-1.' },
    ],
    plan: [
      { id: 'cw_p_lipid', label: 'Optimize lipids for secondary ASCVD prevention', keywords: ['atorvastatin', 'ezetimibe', 'ldl', 'lipid', 'ascvd', 'secondary'], tip: 'Optimize lipids (increase statin intensity or add ezetimibe) for secondary prevention.' },
      { id: 'cw_p_finerenone', label: 'Consider finerenone for persistent A3 albuminuria', keywords: ['finerenone', 'kerendia', 'mra', 'mineralocorticoid', 'persistent albumin'], tip: 'Finerenone is indicated for persistent A3 albuminuria with T2DM.' },
    ],
    avoid: [
      { id: 'cw_x_resolved', label: 'Assuming albuminuria/risk is resolved', keywords: ['resolved', 'fixed', 'done', 'no more albumin', 'discharg'], tip: 'UACR improved but remains A3 — risk is NOT resolved.' },
    ],
  },
  'linda-thu': {
    subjective: [
      { id: 'cth_s_confidence', label: 'Patient increased confidence and understanding', keywords: ['confident', 'understand', 'handle', 'better', 'know why'], tip: 'Her increased confidence and disease understanding is a therapeutic win.' },
    ],
    objective: [
      { id: 'cth_o_uacr', label: 'UACR 210 (improved to A2 category)', keywords: ['210', 'uacr', ' a2 ', 'improv'], tip: 'UACR improved to 210 — now in moderately increased (A2) category.' },
      { id: 'cth_o_ldl', label: 'LDL 64 (at secondary prevention goal)', keywords: ['64', 'ldl', 'goal', 'secondary', 'at goal'], tip: 'LDL 64 — at goal for secondary ASCVD prevention.' },
    ],
    assessment: [
      { id: 'cth_a_cumulative', label: 'Cumulative improvement across all domains', keywords: ['cumulative', 'all domains', 'overall', 'across', 'improved'], tip: 'Recognize cumulative improvement across BP, UACR, LDL, and weight.' },
      { id: 'cth_a_transition', label: 'Plan for transition of care', keywords: ['transition', 'handoff', 'pcp', 'primary care', 'handover'], tip: 'Develop a clear plan for transition of care back to primary care.' },
    ],
    plan: [
      { id: 'cth_p_handoff', label: 'Provide transition of care documentation', keywords: ['handoff', 'document', 'summary', 'pcp', 'transition'], tip: 'Provide clear handoff documentation for the PCP.' },
      { id: 'cth_p_monitor', label: 'Schedule ongoing K/SCr monitoring', keywords: ['potassium', 'creatinine', 'k', 'scr', 'monitor', 'lab'], tip: 'Schedule routine K and SCr monitoring given finerenone or ACEi use.' },
    ],
    avoid: [
      { id: 'cth_x_stop', label: 'Discontinuing medications because doing well', keywords: ['stop', 'discontinue', 'no longer need', 'doing well so'], tip: 'Do not discontinue complex cardiorenal medications because the patient is doing well.' },
    ],
  },
}
