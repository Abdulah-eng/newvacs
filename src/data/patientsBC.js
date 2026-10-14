import { makeCase } from './caseFactory.js'

/* ============================ JAMES WILSON (B) ============================ */
// Phenotype: T2DM + HTN + Obesity + Hyperlipidemia. 
// Hidden: cost barrier; empagliflozin prescribed ~4 mo ago, never started due to cost.
// Tuesday: Initial. Wednesday: 3-month follow-up. Thursday: 6-month follow-up.

const jamesTue = makeCase({
  id: 'james-tue',
  PATIENT: { name: 'James Wilson', age: 62, sex: 'male', ethnicity: 'White', mrn: 'B-204417' },
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
    { label: 'Family History', value: 'Father: fatal stroke at age 68, type 2 diabetes, hypertension; Mother: hypertension, deceased at age 74.' },
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
    chiefConcern: "Things are definitely better, but medications are still expensive.",
    snapshotSummary: 'James returns for a 3-month follow-up. Empagliflozin was initiated successfully and adherence improved, but he still worries about cost.',
    diseaseStates: ['Type 2 Diabetes', 'Hypertension'],
    learningObjectives: ['Evaluate response to therapy', 'Assess sustainability of affordability interventions', 'Identify persistent barriers'],
  },
  VITALS: { bp: '138/86', bpRepeat: '136/84', hr: '78', rr: '16', temp: '98.2°F', weight: '98.5 kg', height: "5'10\"", bmi: '31.1',
    flags: { bp: 'warn', bpRepeat: 'warn' } },
  LABS: [
    { label: 'A1C', value: '7.9', unit: '%', flag: 'warn', note: 'Improved from 8.8%' },
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.02', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '83', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'UACR', value: '20', unit: 'mg/g', flag: 'normal' },
    { label: 'Total cholesterol', value: '178', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '84', unit: 'mg/dL', flag: 'normal' },
    { label: 'HDL-C', value: '43', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '200', unit: 'mg/dL', flag: 'warn' },
  ],
  ALERTS: [{ level: 'info', text: 'Adherence improved; empagliflozin now being taken consistently. A1C and BP improved but above goal.' }],
  PROBLEMS: [
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 7.9% (improved on empagliflozin)', flag: 'warn' },
    { name: 'Hypertension', detail: 'BP 138/86 (improved)', flag: 'warn' },
    { name: 'Hyperlipidemia', detail: 'LDL 84 (improved on atorvastatin)', flag: 'normal' },
    { name: 'Obesity', detail: 'BMI 31.1 (−2.5 kg)', flag: 'warn' },
  ],
  MEDICATIONS: jamesTue.MEDICATIONS,
  IMMUNIZATIONS: jamesTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Taking empagliflozin. No longer stretching medications. Reports mild polyuria.' }],
  INTERVIEW_FIELDS: [
    { key: 'cost', label: 'Cost sustainability', placeholder: 'Can he still afford everything?' },
    { key: 'adherence', label: 'Adherence updates', placeholder: 'Any missed doses?' },
  ],
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

  INTERVIEW_KNOWLEDGE: [
    { id: 'james-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'james-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin and acetaminophen occasionally for my joint aches. I do not take any other supplements." },
    { id: 'james-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink 1 to 2 beers on weekends while watching sports, but I never drink during the week." },
    { id: 'james-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 20 years, but I quit 10 years ago." },
    { id: 'james-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had high blood pressure, type 2 diabetes, and had a stroke at age 71. My mother had high blood pressure and high cholesterol. My sister has type 2 diabetes." },
    { id: 'james-wed_social', topic: 'Social / Lifestyle', field: 'social', keywords: ['live with', 'marital', 'work', 'job', 'retired', 'walk', 'exercise', 'diet', 'yard work', 'occupation', 'truck', 'driver', 'career'], response: 'I am a recently retired truck driver. I live with my wife. I started walking about 3 times a week for 15-20 minutes. I also cut down on sugary drinks and eat out less.' },
    { id: 'james-wed_surg', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'appendix', 'appendectomy', 'knee', 'arthroscopy'], response: 'I had my appendix out when I was 19, and a knee scope surgery on my right knee when I was 51.' },
    { id: 'james-wed_homebp', topic: 'Home BP monitoring', field: 'homeBp', keywords: ['home blood pressure', 'bp at home', 'check your blood pressure', 'monitor', 'log', 'average'], response: 'I check my blood pressure at home several times a week now. My readings have been coming down — my average lately is around 136 over 84, which is much better than before.' },
    { id: 'james-wed_homebg', topic: 'Home glucose monitoring', field: 'glucoseMonitoring', keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'finger stick', 'meter'], response: 'I check my blood sugar a few times a week. My fasting numbers have improved and are usually around 140 to 160 now.' },
    { id: 'james-wed_duration', topic: 'Disease duration', field: 'pmh', keywords: ['how long', 'when were you diagnosed', 'duration', 'years'], response: 'I\'ve had high blood pressure for about 12 years, diabetes for 10 years, and high cholesterol for 8 years.' },
    { id: 'bw_cost', topic: 'Affordability Anxiety', field: 'cost', keywords: ['cost', 'afford', 'worry', 'insurance', 'future'],
      response: "Right now I can afford it, but I worry about what happens if my insurance changes again. I'd hate to have to stop something that's helping." },
    { id: 'bw_adh', topic: 'Adherence Improvement', field: 'adherence', keywords: ['miss', 'adherence', 'every day'],
      response: "I'm doing much better than before, but I still miss a dose every now and then. Maybe once every couple weeks." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'bw_a', title: 'Response & Sustainability', icon: 'Droplet', color: '0891b2', questions: [
      { key: 'bw_q1', q: 'A1C and BP improved but remain above goal. What is the next step?' },
      { key: 'bw_q2', q: 'How do you address his ongoing affordability anxiety?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'bw_p', title: 'Plan', options: [
      { key: 'bw_o1', label: 'Continue current therapy; observe for further response', correct: true },
      { key: 'bw_o2', label: 'Intensify empagliflozin to 25 mg', correct: true },
      { key: 'bw_o3', label: 'Add amlodipine for BP', correct: true },
      { key: 'bw_o4', label: 'Stop empagliflozin', correct: false },
    ] },
  ],
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
    chiefConcern: "Things are going pretty well, but I still worry about keeping everything affordable.",
    snapshotSummary: 'Second 3-month follow-up (6 months total). BP is now controlled and A1C is near goal. Patient expresses increased confidence but retains long-term affordability worries.',
    diseaseStates: ['Type 2 Diabetes', 'Hypertension'],
    learningObjectives: ['Evaluate long-term response', 'Develop contingency plans for future access barriers', 'Reinforce chronic disease self-management'],
  },
  VITALS: { bp: '128/80', bpRepeat: '126/78', hr: '74', rr: '16', temp: '98.2°F', weight: '95.5 kg', height: "5'10\"", bmi: '30.2',
    flags: { bp: 'normal', bpRepeat: 'normal' } },
  LABS: [
    { label: 'A1C', value: '7.1', unit: '%', flag: 'warn', note: 'Improved from 7.9% and baseline 8.8%' },
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.3', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.00', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '85', unit: 'mL/min/1.73m²', flag: 'normal' },
    { label: 'UACR', value: '16', unit: 'mg/g', flag: 'normal' },
    { label: 'Total cholesterol', value: '165', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '72', unit: 'mg/dL', flag: 'normal' },
    { label: 'HDL-C', value: '44', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '170', unit: 'mg/dL', flag: 'normal' },
  ],
  ALERTS: [{ level: 'info', text: 'Significant longitudinal improvement. BP controlled, A1C near goal. Weight reduced by 5.5 kg.' }],
  PROBLEMS: [
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 7.1% (near goal)', flag: 'normal' },
    { name: 'Hypertension', detail: 'BP 128/80 (at goal)', flag: 'normal' },
    { name: 'Hyperlipidemia', detail: 'LDL 72 (at goal on atorvastatin)', flag: 'normal' },
    { name: 'Obesity', detail: 'BMI 30.2 (−5.5 kg total)', flag: 'warn' },
  ],
  MEDICATIONS: jamesTue.MEDICATIONS,
  IMMUNIZATIONS: jamesTue.IMMUNIZATIONS,
  IMMUNIZATIONS: jamesTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Excellent adherence. Walking 5 days/week. Sustained dietary improvements.' }],
  INTERVIEW_FIELDS: [
    { key: 'cost', label: 'Long-term Access', placeholder: 'Insurance or coverage worries?' },
  ],
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

  INTERVIEW_KNOWLEDGE: [
    { id: 'james-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'james-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin and acetaminophen occasionally for my joint aches. I do not take any other supplements." },
    { id: 'james-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink 1 to 2 beers on weekends while watching sports, but I never drink during the week." },
    { id: 'james-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 20 years, but I quit 10 years ago." },
    { id: 'james-thu_social', topic: 'Social / Lifestyle', field: 'social', keywords: ['live with', 'marital', 'work', 'job', 'retired', 'truck driver'], response: 'I am a recently retired truck driver. I live with my wife on a fixed income.' },
    { id: 'james-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had high blood pressure, type 2 diabetes, and had a stroke at age 71. My mother had high blood pressure and high cholesterol. My sister has type 2 diabetes." },
    { id: 'james-thu_surg', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'appendix', 'appendectomy', 'knee', 'arthroscopy'], response: 'I had my appendix out when I was 19, and a knee scope surgery on my right knee when I was 51.' },
    { id: 'james-thu_homebp', topic: 'Home BP monitoring', field: 'homeBp', keywords: ['home blood pressure', 'bp at home', 'check your blood pressure', 'monitor', 'log', 'average'], response: 'I check my blood pressure at home 1 to 2 times a week. Things have really improved — my readings are usually in the 120s over 70s now. My average is about 126 over 78.' },
    { id: 'james-thu_homebg', topic: 'Home glucose monitoring', field: 'glucoseMonitoring', keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'finger stick', 'meter'], response: 'I check my blood sugar a few times a week. My fasting numbers have really improved — they are usually in the 120 to 140 range now.' },
    { id: 'james-thu_duration', topic: 'Disease duration', field: 'pmh', keywords: ['how long', 'when were you diagnosed', 'duration', 'years'], response: 'I\'ve had high blood pressure for about 12 years, diabetes for 10 years, and high cholesterol for 8 years.' },
    { id: 'bth_cost', topic: 'Fear of Losing Access', field: 'cost', keywords: ['worry', 'insurance', 'future', 'change'],
      response: "Things are okay right now, but I still worry about what happens if my insurance changes again. I'd hate to finally get things under control and then have to stop." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'bth_a', title: 'Long-term Planning', icon: 'CheckCircle', color: '10b981', questions: [
      { key: 'bth_q1', q: 'How do you transition from acute optimization to long-term maintenance?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'bth_p', title: 'Plan', options: [
      { key: 'bth_o1', label: 'Continue current effective therapy', correct: true },
      { key: 'bth_o2', label: 'Develop contingency plan for future insurance changes', correct: true },
      { key: 'bth_o3', label: 'Discontinue empagliflozin because he is near goal', correct: false },
    ] },
  ],
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

/* ============================ LINDA MARTINEZ (C) ============================ */
// Phenotype: CKD Stage 3a + Severe Albuminuria + T2DM + HTN + ASCVD (Prior STEMI) + Obesity.
// Tuesday: Initial. Wednesday: 1st Follow-up. Thursday: 2nd Follow-up.

const lindaTue = makeCase({
  id: 'linda-tue',
  PATIENT: { name: 'Linda Martinez', age: 68, sex: 'female', ethnicity: 'Hispanic / Latina', mrn: 'C-892110', allergiesSummary: 'Penicillin (Rash and hives)' },
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
    chiefConcern: "My blood pressure is much better, but I'm still worried about my kidneys.",
    snapshotSummary: 'Follow-up after initial prioritization. Albuminuria and BP improved, but patient remains high-risk (CKD G3aA3 + ASCVD). Determine the next sequential priority.',
    diseaseStates: ['Chronic Kidney Disease', 'Type 2 Diabetes', 'Hypertension', 'Secondary ASCVD Prevention', 'Obesity'],
    learningObjectives: ['Interpret treatment response beyond simple goal attainment', 'Prioritize interventions sequentially', 'Recognize persistent residual risk'],
  },
  VITALS: { bp: '130/78', bpRepeat: '128/78', hr: '70', rr: '16', temp: '98.6°F', weight: '94.5 kg', height: "5'5\"", bmi: '34.7',
    flags: { bp: 'normal', bpRepeat: 'normal' } },
  LABS: [
    { label: 'A1C', value: '7.9', unit: '%', flag: 'warn', note: 'Improved from 8.2%' },
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.28', unit: 'mg/dL', flag: 'high' },
    { label: 'eGFR', value: '50', unit: 'mL/min/1.73m²', flag: 'warn' },
    { label: 'UACR', value: '330', unit: 'mg/g', flag: 'high', note: 'Improved from 452 mg/g but remains A3 (severely increased)' },
    { label: 'Total cholesterol', value: '170', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '86', unit: 'mg/dL', flag: 'warn', note: 'Prior STEMI — prior 92 mg/dL' },
    { label: 'HDL-C', value: '45', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '184', unit: 'mg/dL', flag: 'normal' },
  ],
  ALERTS: [{ level: 'info', text: 'UACR improved but remains severely increased. BP is now at goal. Identify the next therapeutic priority.' }],
  PROBLEMS: [
    { name: 'Chronic Kidney Disease Stage 3a', detail: 'eGFR 50, UACR 330 (G3aA3, improved from 452)', flag: 'high' },
    { name: 'Secondary ASCVD Prevention', detail: 'Prior STEMI, LDL 86 (improved from 92)', flag: 'warn' },
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 7.9% (improved from 8.2%)', flag: 'warn' },
    { name: 'Hypertension', detail: 'BP 130/78 (at goal <130/80)', flag: 'normal' },
    { name: 'Obesity', detail: 'BMI 34.7 (−1.5 kg)', flag: 'warn' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Cardiovascular history', value: 'STEMI 3 years ago with PCI and DES placement.', flag: 'normal' },
  ],
  ALLERGIES: [{ substance: 'Penicillin', reaction: 'Rash and hives', severity: 'Severe', type: 'Allergy', date: 'Childhood', source: 'Patient reported' }],
  IMMUNIZATIONS: lindaTue.IMMUNIZATIONS,
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'HTN / CKD', notes: 'Optimized at last visit' },
    ...lindaTue.MEDICATIONS.filter(m => m.name !== 'Lisinopril')
  ],
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'BP improved. Tolerating increased lisinopril dose without issue. Still highly motivated.' }],
  INTERVIEW_FIELDS: [
    { key: 'understanding', label: 'Understanding of Progress', placeholder: 'Does she know she is improving but still at risk?' },
  ],
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

  INTERVIEW_KNOWLEDGE: [
    { id: 'linda-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I get a skin rash and hives from Penicillin—I was told I developed a severe rash when given it as a child." },
    { id: 'linda-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a Calcium 600 mg plus Vitamin D3 supplement every morning for bone health, and occasional Tylenol for headaches." },
    { id: 'linda-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a small glass of wine on holidays or special dinners." },
    { id: 'linda-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 20 years, but I quit 10 years ago." },
    { id: 'linda-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had high blood pressure and a heart attack at age 62. My mother had type 2 diabetes and chronic kidney disease. My brother had a heart attack at age 58, and my sister has high blood pressure and diabetes." },
    { id: 'linda-wed_surg', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy', 'hysterectomy'], response: 'I had my gallbladder removed when I was 49, and then a total abdominal hysterectomy when I was 52.' },
    { id: 'linda-wed_mi', topic: 'Heart Attack / Stent', field: 'pmh', keywords: ['heart attack', 'stemi', 'stent', 'pci', 'catheterization'], response: 'I had a heart attack about 3 years ago. They told me I had a drug-eluting stent placed (PCI).' },
    { id: 'linda-wed_duration', topic: 'Disease duration', field: 'pmh', keywords: ['how long', 'when were you diagnosed', 'duration', 'years'], response: 'I\'ve had high blood pressure for 18 years and diabetes for 15 years.' },
    { id: 'linda-wed_social', topic: 'Social / Family', field: 'social', keywords: ['live', 'work', 'family', 'grandchild', 'children', 'retired', 'married'], response: 'I am a retired elementary school teacher. I am married and live with my husband, and I help take care of my grandchildren regularly.' },
    { id: 'linda-wed_homebp', topic: 'Home BP monitoring', field: 'homeBp', keywords: ['home blood pressure', 'bp at home', 'check your blood pressure', 'monitor', 'log', 'average'], response: 'I check my blood pressure at home several times a week now. My readings are coming down — they are usually in the upper 120s over upper 70s. My average is about 129 over 78.' },
    { id: 'linda-wed_homebg', topic: 'Home glucose monitoring', field: 'glucoseMonitoring', keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'finger stick', 'meter'], response: 'I check my blood sugar regularly. My fasting readings have improved and are usually in the range of 130 to 160 now.' },
    { id: 'linda-wed_swelling', topic: 'Swelling', field: 'symptoms', keywords: ['swelling', 'edema', 'legs', 'feet', 'stand', 'positional'], response: 'I do get some mild swelling in my legs if I stand for a long time.' },
    { id: 'linda-wed_fatigue', topic: 'Fatigue', field: 'symptoms', keywords: ['fatigue', 'tired', 'energy', 'exhausted', 'worn out'], response: 'Yes, I do notice some intermittent fatigue during the day — I get tired more easily than I used to, especially in the afternoons.' },
    { id: 'linda-wed_adherence', topic: 'Medication adherence', field: 'adherence', keywords: ['miss', 'dose', 'forget', 'skip', 'adhere', 'take every day'], response: 'I have been pretty good overall. I did miss a dose or two since the last visit — maybe 1 or 2 times I forgot, but that was it.' },
    { id: 'linda-wed_diet', topic: 'Diet changes', field: 'diet', keywords: ['diet', 'eat', 'food', 'sodium', 'salt', 'restaurant', 'portion', 'meals'], response: 'I have been working on my diet. I am eating less sodium — I stopped adding salt to my food and I read labels now. I am also eating out at restaurants less often, maybe once a week now instead of several times. And I have been watching my portion sizes more carefully.' },
    { id: 'linda-wed_exercise', topic: 'Exercise / activity', field: 'exercise', keywords: ['exercise', 'walk', 'activity', 'physical', 'minutes', 'days per week'], response: 'I have been walking about 3 to 4 days a week for around 20 to 30 minutes each time. It has been good for my energy and my blood pressure.' },
    { id: 'cw_understanding', topic: 'Understanding Progress', field: 'understanding', keywords: ['progress', 'better', 'kidneys', 'risk'],
      response: "I know my numbers are a little better, which is great, but I know I'm still at high risk. What should we focus on next?" },
  ],
  ASSESSMENT_CARDS: [
    { id: 'cw_priority', title: 'Sequential Prioritization', icon: 'List', color: '6366f1', questions: [
      { key: 'cw_q1', q: 'Albuminuria improved but remains >300. Would you intensify CKD therapy or address ASCVD/LDL risk next?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'cw_p', title: 'Next Priority', options: [
      { key: 'cw_o1', label: 'Optimize secondary ASCVD prevention (increase atorvastatin or add ezetimibe)', correct: true },
      { key: 'cw_o2', label: 'Initiate finerenone for persistent A3 albuminuria', correct: true },
      { key: 'cw_o3', label: 'Increase semaglutide for further weight/A1C benefit', correct: true },
      { key: 'cw_o4', label: 'Assume risk has resolved because UACR improved', correct: false },
    ] },
  ],
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
    keyIssues: ['Improvement in UACR and BP', 'Persistent A3 albuminuria', 'Residual ASCVD risk (LDL 86)'],
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
    chiefConcern: "I finally feel like I have a handle on all of this.",
    snapshotSummary: 'Final follow-up. Patient has received comprehensive cardiorenal optimization. Focus on transition of care and long-term maintenance.',
    diseaseStates: ['Chronic Kidney Disease', 'Type 2 Diabetes', 'Hypertension', 'Secondary ASCVD Prevention', 'Obesity'],
    learningObjectives: ['Develop long-term comprehensive care plan', 'Ensure safe transition of care', 'Summarize cumulative interventions'],
  },
  VITALS: { bp: '124/76', bpRepeat: '122/74', hr: '68', rr: '16', temp: '98.6°F', weight: '92 kg', height: "5'5\"", bmi: '33.8',
    flags: { bp: 'normal', bpRepeat: 'normal' } },
  LABS: [
    { label: 'A1C', value: '7.2', unit: '%', flag: 'warn', note: 'Trend: 8.2% → 7.9% → 7.2% (near goal <7%)' },
    { label: 'Na', value: '140', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.7', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.28', unit: 'mg/dL', flag: 'high' },
    { label: 'eGFR', value: '49', unit: 'mL/min/1.73m²', flag: 'warn' },
    { label: 'UACR', value: '210', unit: 'mg/g', flag: 'warn', note: 'Trend: 452 → 330 → 210 mg/g. Now A2 (moderately increased)' },
    { label: 'Total cholesterol', value: '152', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '63', unit: 'mg/dL', flag: 'normal', note: 'At secondary prevention goal (<70 mg/dL); prior 92 mg/dL baseline' },
    { label: 'HDL-C', value: '47', unit: 'mg/dL', flag: 'normal' },
    { label: 'TG', value: '160', unit: 'mg/dL', flag: 'normal' },
  ],
  ALERTS: [{ level: 'info', text: 'Significant cumulative improvement. UACR reduced to A2 category. BP and LDL at goal.' }],
  PROBLEMS: [
    { name: 'Chronic Kidney Disease Stage 3a', detail: 'eGFR 49, UACR 210 (G3aA2, improved from 452)', flag: 'warn' },
    { name: 'Secondary ASCVD Prevention', detail: 'Prior STEMI, LDL 63 (at goal <70)', flag: 'normal' },
    { name: 'Type 2 diabetes mellitus', detail: 'A1C 7.2% (near goal)', flag: 'normal' },
    { name: 'Hypertension', detail: 'BP 124/76 (at goal <130/80)', flag: 'normal' },
    { name: 'Obesity', detail: 'BMI 33.8 (−4 kg total)', flag: 'warn' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Cardiovascular history', value: 'STEMI 3 years ago with PCI and DES placement.', flag: 'normal' },
  ],
  ALLERGIES: [{ substance: 'Penicillin', reaction: 'Rash and hives', severity: 'Severe', type: 'Allergy', date: 'Childhood', source: 'Patient reported' }],
  IMMUNIZATIONS: lindaTue.IMMUNIZATIONS,
  MEDICATIONS: [
    { name: 'Ezetimibe', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'ASCVD', notes: 'Added at last visit' },
    { name: 'Metformin XR', dose: '1000 mg', route: 'PO', freq: 'BID', indication: 'T2DM', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'T2DM / cardiorenal', notes: '' },
    { name: 'Semaglutide', dose: '1 mg', route: 'SQ', freq: 'weekly', indication: 'T2DM / obesity', notes: 'Uptitrated from 0.5 mg at last visit' },
    { name: 'Lisinopril', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'HTN / CKD', notes: 'Optimized at prior visit' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'ASCVD', notes: '' },
    { name: 'Atorvastatin', dose: '80 mg', route: 'PO', freq: 'daily', indication: 'ASCVD', notes: 'Intensified from 40 mg at last visit' },
    { name: 'Aspirin', dose: '81 mg', route: 'PO', freq: 'daily', indication: 'ASCVD', notes: '' },
    { name: 'Omeprazole', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'GERD', notes: '' },
  ],
  SUBJECTIVE_DOCUMENTED: [{ label: 'Interval history', value: 'Feels much more confident. Understands her conditions and medication purposes.' }],
  INTERVIEW_FIELDS: [
    { key: 'confidence', label: 'Self-Management Confidence', placeholder: 'How does she feel about her regimen now?' },
  ],
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

  INTERVIEW_KNOWLEDGE: [
    { id: 'linda-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I get a skin rash and hives from Penicillin—I was told I developed a severe rash when given it as a child." },
    { id: 'linda-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a Calcium 600 mg plus Vitamin D3 supplement every morning for bone health, and occasional Tylenol for headaches." },
    { id: 'linda-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a small glass of wine on holidays or special dinners." },
    { id: 'linda-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I smoked about a pack a day for 20 years, but I quit 10 years ago." },
    { id: 'linda-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had high blood pressure and a heart attack at age 62. My mother had type 2 diabetes and chronic kidney disease. My brother had a heart attack at age 58, and my sister has high blood pressure and diabetes." },
    { id: 'linda-thu_surg', topic: 'Surgical history', field: 'surgery', keywords: ['surgery', 'surgeries', 'procedure', 'operation', 'gallbladder', 'cholecystectomy', 'hysterectomy'], response: 'I had my gallbladder removed when I was 49, and then a total abdominal hysterectomy when I was 52.' },
    { id: 'linda-thu_mi', topic: 'Heart Attack / Stent', field: 'pmh', keywords: ['heart attack', 'stemi', 'stent', 'pci', 'catheterization'], response: 'I had a heart attack about 3 years ago. They told me I had a drug-eluting stent placed (PCI).' },
    { id: 'linda-thu_duration', topic: 'Disease duration', field: 'pmh', keywords: ['how long', 'when were you diagnosed', 'duration', 'years'], response: 'I\'ve had high blood pressure for 18 years and diabetes for 15 years.' },
    { id: 'linda-thu_social', topic: 'Social / Family', field: 'social', keywords: ['live', 'work', 'family', 'grandchild', 'children', 'retired', 'married'], response: 'I am a retired elementary school teacher. I am married and live with my husband, and I help take care of my grandchildren regularly.' },
    { id: 'linda-thu_homebp', topic: 'Home BP monitoring', field: 'homeBp', keywords: ['home blood pressure', 'bp at home', 'check your blood pressure', 'monitor', 'log', 'average'], response: 'I check my blood pressure at home regularly — several times a week. My readings are consistently good now, around 123 over 75 on average.' },
    { id: 'linda-thu_homebg', topic: 'Home glucose monitoring', field: 'glucoseMonitoring', keywords: ['blood sugar', 'glucose', 'check your sugar', 'fasting', 'finger stick', 'meter'], response: 'I check my blood sugar regularly. My fasting readings are usually around 120 to 140 now, which is much better than where I started.' },
    { id: 'linda-thu_lifestyle', topic: 'Lifestyle', field: 'lifestyle', keywords: ['walk', 'exercise', 'diet', 'food', 'sodium', 'salt', 'portion'], response: 'I am walking about 5 days a week for 30-40 minutes. I also really reduced my sodium and I am controlling my portions better.' },
    { id: 'cth_conf', topic: 'Increased Confidence', field: 'confidence', keywords: ['confident', 'handle', 'understand', 'better'],
      response: "I feel so much better now. I finally understand why I'm taking all these pills and what we're trying to prevent." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'cth_maint', title: 'Long-term Maintenance', icon: 'CheckCircle', color: '10b981', questions: [
      { key: 'cth_q1', q: 'How do you ensure these complex interventions are maintained long-term?' },
    ] },
  ],
  PLAN_SECTIONS: [
    { id: 'cth_p', title: 'Transition Plan', options: [
      { key: 'cth_o1', label: 'Summarize comprehensive care plan and provide written instructions', correct: true },
      { key: 'cth_o2', label: 'Coordinate ongoing labs (K, SCr) with PCP', correct: true },
      { key: 'cth_o3', label: 'Discontinue medications because she is doing well', correct: false },
    ] },
  ],
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
      { id: 'cw_o_ldl', label: 'LDL 86 (above secondary prevention target)', keywords: ['86', 'ldl', 'above', 'secondary', 'target'], tip: 'LDL 86 is above the typical secondary prevention target of <70 mg/dL.' },
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
