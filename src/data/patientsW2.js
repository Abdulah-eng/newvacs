import { makeCase } from './caseFactory.js'

// WEEK 2 — Hyperlipidemia + Chronic Kidney Disease (cardiorenal protection).
// Patients and all clinical values are authored from the uploaded Week 2 source
// documents (master profiles + Tuesday/Wednesday/Thursday case files).
// Case ids are namespaced 'w2-<patient>-<day>' to coexist with Week 1.

/* ============================ MICHAEL TURNER (A) ============================ */
// HTN + HLD + CKD G2A2 (preserved eGFR, persistent albuminuria), obesity. No diabetes.
// Hidden: frequent OTC ibuprofen (nephrotoxic); misses atorvastatin 2–3×/wk;
// doesn't understand albuminuria; strong weight-loss motivation. Statin under-dosed.

const michaelTue = makeCase({
  id: 'w2-michael-tue',
  PATIENT: { name: 'Michael Turner', age: 58, sex: 'male', ethnicity: 'Non-Hispanic White', mrn: 'A2-510042' },
  ENCOUNTER: { 
    week: 'Week 2', 
    day: 'Tuesday', 
    type: 'initial collaborative practice management', 
    difficulty: 'Core', 
    difficultyTone: 'teal',
    setting: 'ambulatory care pharmacy clinic',
    referralSource: 'primary care provider (PCP)',
    chiefConcern: "My doctor sent me over about my cholesterol and some protein in my urine.",
    snapshotSummary: 'CKD G2A2 with preserved eGFR but persistent albuminuria, above-goal LDL on a low-dose statin, and HTN. The chart looks mild — but a nephrotoxic OTC and missed statin doses are hiding in plain sight.',
    diseaseStates: ['Hyperlipidemia', 'CKD G2A2', 'Hypertension', 'Obesity', 'Preventive Care'],
    learningObjectives: [
      'Recognize CKD by albuminuria even when eGFR is preserved (stage G2A2)',
      'Uncover an undisclosed nephrotoxic OTC (NSAID) and statin nonadherence',
      'Intensify lipid therapy to an appropriate intensity for a high-risk patient',
      'Address blood pressure, obesity, and immunization gaps',
    ],
  },
  VITALS: { bp: '136/84', bpRepeat: '134/82', hr: '72', rr: '16', temp: '98.4°F', weight: '103 kg', height: "5'10\"", bmi: '32.6',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'warn' } },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.5', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.08', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '79', unit: 'mL/min/1.73m²', flag: 'normal', note: 'Preserved (G2)' },
    { label: 'AST', value: '24', unit: 'U/L', flag: 'normal', note: 'Normal baseline for statin therapy' },
    { label: 'ALT', value: '27', unit: 'U/L', flag: 'normal', note: 'Normal baseline for statin therapy' },
    { label: 'Total cholesterol', value: '214', unit: 'mg/dL', flag: 'high' },
    { label: 'LDL-C', value: '132', unit: 'mg/dL', flag: 'high', note: 'Above goal for his cardiorenal risk' },
    { label: 'HDL-C', value: '42', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '196', unit: 'mg/dL', flag: 'high' },
    { label: 'UACR', value: '118', unit: 'mg/g', flag: 'warn', note: 'Moderately increased (A2); prior 105 mg/g documented 4 months ago' },
  ],
  ALERTS: [
    { level: 'warn', text: 'CKD G2A2 — persistent albuminuria despite a normal eGFR confirms kidney damage.' },
    { level: 'warn', text: 'LDL-C 132 on atorvastatin 10 mg — sub-therapeutic intensity for his cardiorenal risk.' },
  ],
  PROBLEMS: [
    { name: 'Hyperlipidemia', detail: 'LDL-C 132 mg/dL, above goal', flag: 'high' },
    { name: 'Chronic kidney disease, G2A2', detail: 'eGFR 79, UACR 118 (A2)', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP mid-130s/80s', flag: 'warn' },
    { name: 'Obesity', detail: 'BMI 32.6', flag: 'warn' },
    { name: 'Chronic NSAID exposure', detail: 'OTC Ibuprofen several times weekly for knee pain', flag: 'warn' },
    { name: 'Preventive care gaps', detail: 'Immunizations due: PCV20, Shingrix, Tdap overdue', flag: 'warn' }
  ],
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Atorvastatin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia', notes: 'Target: LDL < 70 mg/dL' },
  ],
  ALLERGIES: [{ substance: 'No known drug allergies', reaction: '—' }],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date (this season)', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date (booster received)', flag: 'normal' },
    { name: 'Pneumococcal', status: 'None documented', flag: 'warn' },
    { name: 'Herpes zoster (Shingrix)', status: 'None documented', flag: 'warn' },
    { name: 'Tdap', status: 'Overdue (last documented 12 years ago)', flag: 'warn' }
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '58-year-old male referred by his primary care provider (PCP) for initial collaborative practice management of persistent LDL-C elevation (132 mg/dL) despite statin therapy, essential hypertension, and newly identified persistent albuminuria (UACR 118 mg/g). Reports feeling generally well overall aside from mild occasional fatigue after long warehouse shifts and chronic, intermittent bilateral knee pain and stiffness.' },
    { label: 'Past Medical History', value: 'Essential hypertension (diagnosed 8 years ago), hyperlipidemia (diagnosed 5 years ago), and chronic kidney disease Stage G2A2 (identified ~4 months ago).' },
    { label: 'Review of Systems', value: 'Denies chest pain, shortness of breath, palpitations, dizziness, syncope, lower extremity edema, gross hematuria, or changes in urinary frequency.' },
    { label: 'Social history', value: 'Warehouse manager (formerly accountant). Former smoker (quit 5 years ago, ~10 pack-year history). Occasional alcohol (1–2 drinks per month). Denies recreational drug use. Largely sedentary (walks 0–1x/week). Diet includes frequent restaurant and processed meals (3–4x/week); does not monitor sodium or read nutrition labels.' },
    { label: 'Family history', value: 'Father had MI at age 61, hypertension, and hyperlipidemia (positive family history of ASCVD; does not meet criteria for premature ASCVD in a male relative [<55]). Mother has hypertension and hyperlipidemia. Brother has type 2 diabetes. Denies family history of ESKD, dialysis, or chronic kidney disease.' },
    { label: 'Patient Goals & Concerns', value: 'Very concerned about future kidney failure after seeing a close friend require hemodialysis. Strongly motivated to reduce cardiovascular risk, prevent CKD progression, and achieve gradual weight loss.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Body Surface Area (Mosteller)', value: '2.26 m²', flag: 'normal' },
    { label: '10-Year ASCVD Risk Score', value: '11.8% — Intermediate/High risk', flag: 'high' },
    { label: 'Home BP log', value: '5-day average ≈ 136/83 mmHg', flag: 'warn' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'otc', label: 'OTC / nephrotoxic use', placeholder: 'Pain relievers, supplements, frequency…' },
    { key: 'adherence', label: 'Statin adherence', placeholder: 'How consistently he takes atorvastatin…' },
    { key: 'diseaseUnderstanding', label: 'Understanding of albuminuria', placeholder: 'What he grasps about protein in the urine…' },
    { key: 'weightGoals', label: 'Weight / lifestyle goals', placeholder: 'Motivation, diet, activity…' },
  ],
  GUIDING_QUESTIONS: [
    'Why does this patient meet criteria for CKD despite having an eGFR of 79 mL/min/1.73m²?',
    'What is the significance of a UACR of 118 mg/g?',
    'Why is CKD considered an ASCVD risk-enhancing condition?',
    'Why did you choose statin intensification rather than adherence intervention alone?',
    'What additional factors may contribute to future CKD progression in this patient?',
    'Why is chronic NSAID use concerning in a patient with CKD?',
    'How would you explain albuminuria to this patient in plain language?',
    'What should be monitored after today\'s interventions?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w2-michael-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w2-michael-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take ibuprofen for knee pain, and a daily multivitamin." },
    { id: 'w2-michael-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol occasionally—maybe 1 to 2 drinks per month at family gatherings or dinners." },
    { id: 'w2-michael-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago, and I had about a 10 pack-year history before that." },
    { id: 'w2-michael-tue_drugs', topic: 'Recreational drug use', field: 'social', keywords: ['drug', 'illicit', 'marijuana', 'cocaine', 'recreational', 'substance'], response: "I have never used recreational drugs or illicit substances in my life." },
    { id: 'w2-michael-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling', 'family', 'dad', 'mom', 'relatives', 'hereditary'], response: "My father had high blood pressure and high cholesterol, and had a heart attack (myocardial infarction) at age 61. My mother has high blood pressure and high cholesterol. My brother has type 2 diabetes." },
    { id: 'w2-michael-tue_fh_eskd', topic: 'Family history of kidney disease', field: 'familyHistory', keywords: ['kidney disease', 'dialysis', 'eskd', 'renal failure', 'family kidney'], response: "No, nobody in my family has ever had chronic kidney disease, gone on dialysis, or had kidney failure." },
    { id: 'w2-michael-tue_psh', topic: 'Past surgical history', field: 'psh', keywords: ['surgery', 'surgeries', 'operation', 'appendectomy', 'surgical', 'appendix', 'procedure'], response: "I had an appendectomy when I was 27, but no other surgeries." },
    { id: 'w2-michael-tue_hosp', topic: 'Hospitalization / ED visits', field: 'hospitalization', keywords: ['hospital', 'hospitalization', 'admit', 'admission', 'emergency room', 'hospitalized', 'admitted', 'admissions'], response: "No, I haven't had any recent hospitalizations or emergency room visits." },
    { id: 'w2-michael-tue_marital', topic: 'Marital status', field: 'familyHistory', keywords: ['marital', 'married', 'wife', 'spouse'], response: "I am married and live with my wife." },
    { id: 'w2-michael-tue_occupation', topic: 'Occupation', field: 'exercise', keywords: ['job', 'work', 'occupation', 'manager', 'warehouse', 'accountant'], response: "I work as a warehouse manager, though my background was in accounting." },
    { id: 'w2-michael-tue_ref', topic: 'Referral source and reason', field: 'hpi', keywords: ['refer', 'referred', 'pcp', 'primary care', 'doctor', 'why are you here', 'sent'], response: "My primary care doctor (PCP) referred me over for follow-up because my cholesterol remains high on atorvastatin and my lab test showed protein in my urine." },
    { id: 'w2-michael-tue_fatigue', topic: 'Fatigue and general symptoms', field: 'symptoms', keywords: ['fatigue', 'tired', 'energy', 'weakness'], response: "I feel generally fine day-to-day. I do notice some mild occasional fatigue after long shifts on my feet at the warehouse, but nothing severe." },
    { id: 'w2-michael-tue_knee', topic: 'Knee stiffness and pain', field: 'symptoms', keywords: ['knee', 'joint', 'stiffness', 'arthritis', 'pain'], response: "I have had chronic, intermittent bilateral knee pain and stiffness for several years, which flares up when standing for long periods at work." },
    { id: 'w2-michael-tue_ros', topic: 'Review of systems negatives', field: 'symptoms', keywords: ['chest pain', 'short of breath', 'shortness of breath', 'palpitations', 'dizziness', 'syncope', 'edema', 'hematuria', 'urinary', 'frequency', 'swelling'], response: "I deny any chest pain, shortness of breath, palpitations, dizziness, syncope or fainting, lower extremity leg swelling or edema, gross hematuria (blood in urine), or urinary frequency changes." },
    { id: 'w2-michael-tue_fin', topic: 'Financial and adherence barriers', field: 'cost', keywords: ['cost', 'afford', 'money', 'expensive', 'copay', 'financial'], response: "No, cost is not a barrier at all. My generic copays through work insurance are very low, so I have no financial trouble getting my prescriptions." },
    { id: 'w2-michael-tue_skip', topic: 'Intentional statin skipping', field: 'adherence', keywords: ['on purpose', 'intentional', 'stop taking', 'why do you miss'], response: "No, I never intentionally skip my atorvastatin. I take it at bedtime and just get tired or forget to take it two or three nights a week." },
    { id: 'w2-michael-tue_nsaid_harm', topic: 'NSAID awareness', field: 'otc', keywords: ['harm', 'kidney', 'blood pressure', 'aware', 'nsaid effect', 'know'], response: "I honestly was completely unaware that over-the-counter ibuprofen could raise blood pressure or harm kidney function. I assumed OTC pain relievers were completely safe." },
    { id: 'w2-michael-tue_pmh_dur', topic: 'Disease durations', field: 'pmh', keywords: ['how long', 'duration', 'diagnosed', 'when did you get', 'years'], response: "I have had high blood pressure for about 8 years and high cholesterol for roughly 5 years. The kidney protein issue was just found a few months ago." },
    { id: 'w2-michael-tue_sodium', topic: 'Dietary sodium and food habits', field: 'diet', keywords: ['salt', 'sodium', 'label', 'restaurant', 'fast food', 'processed'], response: "We eat out at restaurants 3 to 4 times a week, and I do not monitor dietary sodium or look at food nutrition labels." },
    { id: 'w2-michael-tue_concerns_dialysis', topic: 'Dialysis and kidney fear', field: 'concerns', keywords: ['fear', 'dialysis', 'kidney failure', 'friend', 'worry'], response: "A close friend of mine went on hemodialysis recently and it really impacted his life. Seeing that made me very concerned about developing kidney failure, and I want to avoid anything like that." },
    { id: 'w2-michael-tue_goals', topic: 'Cardiovascular and kidney goals', field: 'weightGoals', keywords: ['goal', 'cardiovascular', 'heart', 'kidney', 'prevention'], response: "My goals are to reduce my cardiovascular risk, prevent my kidney disease from progressing, and lose some weight so I can stay healthy." },
    { id: 'a_nsaid', topic: 'OTC ibuprofen (nephrotoxic)', field: 'otc',
      keywords: ['ibuprofen', 'advil', 'motrin', 'nsaid', 'pain', 'knee', 'arthritis', 'otc', 'over the counter', 'supplement'],
      response: "Oh — I take ibuprofen for my knees, several times a week. Usually 1 to 2 over-the-counter tablets (about 200–400 mg) PRN. It's just over-the-counter, so I didn't think it counted as a medication." },
    { id: 'a_adh', topic: 'Statin nonadherence', field: 'adherence',
      keywords: ['miss', 'forget', 'adherence', 'atorvastatin', 'cholesterol medicine', 'every day', 'skip', 'take it'],
      response: "I take the cholesterol one at night… mostly. I probably miss it two or three times a week if I'm honest — I just forget." },
    { id: 'a_alb', topic: 'Albuminuria understanding', field: 'diseaseUnderstanding',
      keywords: ['albumin', 'protein', 'urine', 'understand', 'kidney', 'explain', 'why'],
      response: "Protein in my urine? I don't really know what that means. My kidney number looked normal, so I figured my kidneys were fine." },
    { id: 'a_wt', topic: 'Weight motivation', field: 'weightGoals',
      keywords: ['weight', 'lose', 'diet', 'exercise', 'lifestyle', 'goal', 'activity'],
      response: "I'd really like to lose some weight too — that's a big goal for me. I just haven't found a routine that sticks. I'm largely sedentary right now, maybe walking once a week if the weather is nice." },
    { id: 'a_bp', topic: 'Home BP habits', field: 'homeBp',
      keywords: ['home', 'check', 'blood pressure at home', 'monitor', 'cuff', 'log'],
      response: "My doctor asked me to log my home readings for 5 days before this visit, so I brought that in—it averaged around 136/83 mmHg. Otherwise, I don't check very consistently on my own." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'a_hld', 
      title: 'Hyperlipidemia / Elevated Cardiovascular Risk', 
      icon: 'Droplet', 
      color: '13314f',
      questions: [
        { 
          key: 'a_hld_eval', 
          q: 'Evaluation of lipid control, cardiovascular risk, and statin intensity:', 
          defaultAnswer: 'Control status: Suboptimal control. Current LDL-C is 132 mg/dL on atorvastatin 10 mg PO daily, which remains elevated above the treatment threshold. Calculated 10-year ASCVD risk score is 11.8%, placing him at elevated/intermediate-to-high cardiovascular risk. In addition, the patient exhibits multiple key ASCVD risk-enhancing conditions: chronic kidney disease (CKD G2A2 is an established risk enhancer per 2026 AHA/ACC Cholesterol Guidelines), essential hypertension, Class I obesity (BMI 32.6 kg/m²), former tobacco use (10 pack-years, quit 5 years ago), and positive family history of cardiovascular disease (father had MI at age 61). Medication nonadherence contributes to elevated LDL-C (misses evening doses 2–3 times weekly due to forgetting), but current statin intensity (atorvastatin 10 mg, low-to-moderate intensity) is inadequate for his risk profile. Indicated for statin intensification to high-intensity therapy (atorvastatin 40 mg PO daily, or titrating 20–40 mg daily) with adherence counseling and routine support to achieve goal LDL-C <70 mg/dL (or ≥50% reduction) per 2026 AHA/ACC Cholesterol Guidelines.' 
        }
      ] 
    },
    { 
      id: 'a_ckd', 
      title: 'Chronic Kidney Disease, Stage G2A2 & Nephrotoxin Risk', 
      icon: 'FlaskConical', 
      color: '0891b2',
      questions: [
        { 
          key: 'a_ckd_eval', 
          q: 'Evaluation of CKD staging, progression risk, and NSAID nephrotoxicity:', 
          defaultAnswer: 'Status: CKD Stage G2A2, stable renal filtration but persistent elevated albuminuria and progression risk. Classified using dual-axis staging: Stage G2 derived from preserved eGFR of 79 mL/min/1.73m² (SCr 1.08 mg/dL) and Category A2 derived from moderately increased albuminuria with UACR 118 mg/g. Persistence of albuminuria is confirmed across two distinct measurements (previous UACR 105 mg/g documented 4 months ago, increasing slightly to 118 mg/g today), confirming chronicity. Per KDIGO 2024 CKD Guidelines, eGFR and albuminuria independently predict CKD progression and cardiovascular events; persistent albuminuria signifies ongoing glomerular and microvascular kidney damage despite preserved filtration. Progression risk factors include ongoing hypertension, Class I obesity, and chronic nephrotoxin exposure (frequent OTC ibuprofen 400–600 mg). Chronic NSAID use contributes directly to blood pressure elevation, impairs renal autoregulation, blunts ACE inhibitor antiproteinuric efficacy, and accelerates CKD progression. Strict NSAID avoidance and safer analgesia with acetaminophen are strongly indicated per KDIGO 2024 nephrotoxin avoidance guidelines.' 
        }
      ] 
    },
    { 
      id: 'a_htn', 
      title: 'Essential Hypertension', 
      icon: 'HeartPulse', 
      color: '13314f',
      questions: [
        { 
          key: 'a_htn_eval', 
          q: 'Evaluation of blood pressure control, target, and management strategy:', 
          defaultAnswer: 'Status: Essential hypertension, near goal but above treatment target. Office BP is 136/84 mmHg (repeat 134/82 mmHg); 5-day home BP log average of 136/83 mmHg is consistent with and corroborates office measurements. Blood pressure treatment target is <130/80 mmHg per 2025 AHA/ACC Hypertension Guidelines in CKD (with systolic <120 mmHg considered when standardized office measurement is well-tolerated per KDIGO 2024). Sustained BP elevation accelerates albuminuria, renal decline, and ASCVD risk. Current 2-drug antihypertensive regimen (lisinopril 20 mg PO daily and hydrochlorothiazide 25 mg PO daily) is well-tolerated with stable renal function (SCr 1.08 mg/dL, eGFR 79) and normal potassium (4.5 mEq/L). Immediate pharmacologic BP intensification is deferred today; priority is placed on stopping nephrotoxic NSAIDs, reinforcing medication adherence, and dietary sodium restriction, reassessing BP at next visit.' 
        }
      ] 
    },
    { 
      id: 'a_obesity', 
      title: 'Obesity (Class I, BMI 32.6 kg/m²)', 
      icon: 'Scale', 
      color: 'ca8a04',
      questions: [
        { 
          key: 'a_ob_eval', 
          q: 'Evaluation of obesity, cardiometabolic impact, and weight loss goals:', 
          defaultAnswer: 'Classification: Weight 103 kg, height 5\'10" (70 inches), BMI 32.6 kg/m², classifying as Class I Obesity (BMI consistent with height and weight). Obesity directly contributes to cardiovascular risk, exacerbates essential hypertension, increases intraglomerular hyperfiltration, and raises CKD progression risk. Per 2026 AHA/ACC and KDIGO 2024 lifestyle guidelines, modest 5–10% weight reduction provides dual benefits in lowering blood pressure, reducing intraglomerular pressure/albuminuria, and improving lipid profiles. The patient is highly motivated to lose weight, providing an excellent intervention opportunity for structured lifestyle counseling.' 
        }
      ] 
    },
    { 
      id: 'a_prevent', 
      title: 'Preventive Care & Health Maintenance Gaps', 
      icon: 'Heart', 
      color: '7c3aed',
      questions: [
        { 
          key: 'a_prev_eval', 
          q: 'Evaluation of immunization status and preventive health needs:', 
          defaultAnswer: 'Status: Preventive care and immunization gaps identified from objective EMR records. Adults with CKD and elevated cardiovascular risk have increased susceptibility to vaccine-preventable infections: Pneumococcal conjugate vaccination (PCV20) is indicated for CKD; Recombinant Zoster vaccine (Shingrix 2-dose series) is indicated for age ≥50; and Tdap booster is overdue (last dose 12 years ago, exceeding the 10-year booster window per CDC guidelines). Recommend verifying immunization registry history and administering indicated vaccines.' 
        }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { 
      id: 'a_p_hld', 
      title: 'Lipid / ASCVD plan', 
      options: [
        { key: 'a_hld_o1', label: 'Intensify atorvastatin to 40 mg PO once daily at bedtime (or titrate 20–40 mg toward high-intensity dose) per 2026 AHA/ACC Cholesterol Guidelines', correct: true },
        { key: 'a_hld_o2', label: 'Treatment target: LDL-C <70 mg/dL (or >=50% reduction from baseline)', correct: true },
        { key: 'a_hld_o3', label: 'Counsel on medication adherence: recommend pill organizer, smartphone reminder, and pairing statin dose with bedtime routine', correct: true },
        { key: 'a_hld_o4', label: 'Educate patient on the relationship between CKD and elevated cardiovascular risk, and how statin therapy provides cardiovascular protection', correct: true },
        { key: 'a_hld_o5', label: 'Recheck lipid panel in 6-12 weeks to assess therapeutic response, adherence, and statin tolerance', correct: true },
        { key: 'a_hld_o6', label: 'Stop the statin because LDL is "only" 132', correct: false },
      ] 
    },
    { 
      id: 'a_p_ckd', 
      title: 'CKD & renoprotective plan', 
      options: [
        { key: 'a_ckd_o1', label: 'Continue lisinopril 20 mg PO once daily for renal and cardiovascular protection (reduces intraglomerular pressure and albuminuria)', correct: true },
        { key: 'a_ckd_o2', label: 'Educate patient on CKD staging (G2A2) and the clinical significance of albuminuria as a marker of kidney and vascular health', correct: true },
        { key: 'a_ckd_o3', label: 'Discuss comprehensive strategy to reduce kidney disease progression risk factors (blood pressure optimization, NSAID avoidance, weight control)', correct: true },
        { key: 'a_ckd_o4', label: 'Repeat spot UACR and renal function (CMP) in ~3 months', correct: true },
        { key: 'a_ckd_o5', label: 'Stop the ACE inhibitor because eGFR is "normal"', correct: false },
      ] 
    },
    { 
      id: 'a_p_htn', 
      title: 'Hypertension plan', 
      options: [
        { key: 'a_htn_o1', label: 'Continue lisinopril 20 mg PO once daily', correct: true },
        { key: 'a_htn_o2', label: 'Continue hydrochlorothiazide 25 mg PO once daily in the morning', correct: true },
        { key: 'a_htn_o3', label: 'Blood pressure treatment target: <130/80 mmHg per 2025 AHA/ACC Hypertension Guidelines in CKD (KDIGO <120 SBP when tolerated)', correct: true },
        { key: 'a_htn_o4', label: 'Recommend continued home blood pressure monitoring (HBPM) >=3-4 days/week and maintain a written log; counsel on proper measurement technique (sit quietly 5 min, feet flat, uncrossed legs, arm supported at heart level)', correct: true },
        { key: 'a_htn_o5', label: 'Defer immediate third antihypertensive agent pending NSAID cessation, dietary sodium restriction, and adherence reinforcement', correct: true },
      ] 
    },
    { 
      id: 'a_p_nsaid', 
      title: 'Pain management & nephrotoxin avoidance plan', 
      options: [
        { key: 'a_nsaid_o1', label: 'Discontinue frequent OTC ibuprofen use to avoid drug-induced nephrotoxicity and blood pressure elevation', correct: true },
        { key: 'a_nsaid_o2', label: 'Educate on CKD-specific NSAID risks: acute kidney injury, blunted ACE inhibitor/diuretic efficacy, fluid retention, and accelerated CKD progression', correct: true },
        { key: 'a_nsaid_o3', label: 'Recommend acetaminophen (Tylenol) 500-650 mg PO every 6 hours PRN as first-line therapy for knee osteoarthritis (maximum 3000 mg/day)', correct: true },
        { key: 'a_nsaid_o4', label: 'Explore non-pharmacologic joint support: low-impact walking, quadriceps strengthening, weight reduction, and warm compresses; conditional referral to PCP if pain persists', correct: true },
      ] 
    },
    { 
      id: 'a_p_life', 
      title: 'Lifestyle & weight management plan', 
      options: [
        { key: 'a_life_o1', label: 'Encourage progression toward >=150 minutes/week of moderate-intensity aerobic physical activity (e.g., brisk walking 30 min, 5 days/week)', correct: true },
        { key: 'a_life_o2', label: 'Counsel on dietary sodium reduction (<2000-2300 mg/day) and tie lifestyle changes to blood pressure lowering benefit', correct: true },
        { key: 'a_life_o3', label: 'Recommend reducing restaurant meal and takeout frequency, replacing with home-prepared meals', correct: true },
        { key: 'a_life_o4', label: 'Counsel on increasing dietary fruit and vegetable intake and choosing whole grains', correct: true },
        { key: 'a_life_o5', label: 'Discuss weight-loss benefits for kidney and cardiovascular health, setting an initial target of 5-10% (5-10 kg) gradual weight reduction', correct: true },
      ] 
    },
    { 
      id: 'a_p_prevent', 
      title: 'Preventive care / immunization plan', 
      options: [
        { key: 'a_prev_o1', label: 'Verify state immunization registry history', correct: true },
        { key: 'a_prev_o2', label: 'Recommend Pneumococcal conjugate vaccination (PCV20) for CKD risk', correct: true },
        { key: 'a_prev_o3', label: 'Recommend Recombinant Zoster vaccine (Shingrix) 2-dose series (dose 1 today, dose 2 in 2-6 months) for age >=50', correct: true },
        { key: 'a_prev_o4', label: 'Administer Tdap booster today (overdue >10 years per CDC schedule)', correct: true },
      ] 
    },
    { 
      id: 'a_p_followup', 
      title: 'Follow-up & monitoring plan', 
      options: [
        { key: 'a_foll_o1', label: 'Schedule comprehensive collaborative practice follow-up visit in 3 months', correct: true },
        { key: 'a_foll_o2', label: 'Order pre-visit laboratory testing: Comprehensive Metabolic Panel (CMP: SCr, eGFR, BUN, electrolytes, AST, ALT), spot UACR, and fasting lipid panel', correct: true },
        { key: 'a_foll_o3', label: 'Obtain repeat office blood pressure readings and review home BP log before next visit', correct: true },
        { key: 'a_foll_o4', label: 'Reassess medication adherence, pill organizer routine, tolerability of intensified statin, and knee pain at follow-up', correct: true },
      ] 
    },
  ],
  GUIDING_QUESTIONS: [
    'Why does this patient meet criteria for CKD despite having an eGFR of 79 mL/min/1.73m²?',
    'What is the significance of a UACR of 118 mg/g?',
    'Why is CKD considered an ASCVD risk-enhancing condition?',
    'Why did you choose statin intensification rather than adherence intervention alone?',
    'What additional factors may contribute to future CKD progression in this patient?',
    'Why is chronic NSAID use concerning in a patient with CKD?',
    'How would you explain albuminuria to this patient in plain language?',
    'What should be monitored after today\'s interventions?'
  ],
  COUNSELING: [
    { id: 'a_c1', title: 'Albuminuria & NSAIDs in plain language', body: [
      "Protein in your urine is an early sign your kidneys are under strain — even though your filtering number looks normal.",
      "Ibuprofen can be hard on the kidneys when used often. Let's switch your knee pain to acetaminophen and protect them.",
      "Taking the cholesterol pill every day is what actually lowers your heart risk — let's find a way to make it routine." ] },
  ],
  PRECEPTOR: {
    keyIssues: ['CKD G2A2 — albuminuria with preserved eGFR', 'Sub-therapeutic statin + nonadherence', 'Frequent nephrotoxic NSAID', 'Doesn’t understand albuminuria'],
    assessment: ['Albuminuria defines kidney damage independent of eGFR', 'LDL of 132 partly reflects missed doses and a low-intensity statin', 'NSAID use is actively harmful to his kidneys'],
    plan: ['Intensify the statin and fix adherence', 'Stop the NSAID; switch to acetaminophen', 'Continue ACEi; recheck lipids/UACR in 3 months', 'Lifestyle + weight counseling'],
    pearls: ['Stage CKD with eGFR AND albuminuria — never eGFR alone', 'Always ask about OTCs by name; patients don’t count them as meds'],
    mistakes: ['Calling the kidneys "fine" because eGFR is normal', 'Escalating the statin without first confirming adherence', 'Missing the nephrotoxic NSAID'],
    followupQuestions: ['What LDL response do you expect at 3 months?', 'How will you confirm he stopped the ibuprofen?'],
    checklist: ['Staged CKD correctly (G2A2)', 'Uncovered NSAID + nonadherence', 'Intensified lipid therapy', 'Counseled NSAID avoidance'],
  },
})

const michaelWed = makeCase({
  id: 'w2-michael-wed',
  IMMUNIZATIONS: michaelTue.IMMUNIZATIONS,
  ALLERGIES: michaelTue.ALLERGIES,
  PATIENT: michaelTue.PATIENT,
  ENCOUNTER: { week: 'Week 2', 
    day: 'Wednesday', type: '3-month follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "The higher cholesterol pill seems fine. I cut back on the ibuprofen.",
    setting: 'ambulatory care pharmacy clinic under collaborative practice agreement',
    snapshotSummary: 'Three months after intensifying the statin and counseling on NSAID avoidance. LDL and albuminuria improving — but he still believes a normal eGFR means healthy kidneys.',
    diseaseStates: ['Hyperlipidemia', 'CKD G2A2', 'Hypertension', 'Obesity'],
    learningObjectives: ['Interpret LDL and UACR response', 'Correct the "normal eGFR = healthy kidneys" misconception', 'Reinforce durable NSAID avoidance', 'Address preventive care gaps'],
  },
  VITALS: { bp: '132/80', bpRepeat: '130/80', hr: '70', rr: '16', temp: '98.3°F', weight: '101 kg', height: "5'10\"", bmi: '31.9',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'warn' } },
  LABS: [
    { label: 'Na', value: '140', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.4', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.10', unit: 'mg/dL', flag: 'normal', note: 'Stable from baseline 1.08 mg/dL' },
    { label: 'eGFR', value: '78', unit: 'mL/min/1.73m²', flag: 'normal', note: 'Preserved Stage G2 filtration; stable from baseline 79 mL/min' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal', note: 'Normal transaminase confirming absence of statin hepatotoxicity' },
    { label: 'ALT', value: '24', unit: 'U/L', flag: 'normal', note: 'Normal transaminase confirming absence of statin hepatotoxicity' },
    { label: 'Total cholesterol', value: '178', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '96', unit: 'mg/dL', flag: 'warn', note: 'Improved from 132 mg/dL (~27% reduction on atorvastatin 20 mg)' },
    { label: 'HDL-C', value: '44', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '170', unit: 'mg/dL', flag: 'normal' },
    { label: 'UACR', value: '102', unit: 'mg/g', flag: 'warn', note: 'Improved from 118 mg/g; remains persistent Category A2 moderately increased albuminuria' },
  ],
  ALERTS: [{ level: 'info', text: 'LDL and albuminuria both improving on intensified statin + reduced NSAID use.' }],
  PROBLEMS: [
    { name: 'Hyperlipidemia / Elevated ASCVD Risk', detail: 'LDL-C 96 mg/dL (improved from 132 on Atorvastatin 20 mg PO daily; target <70-100)', flag: 'warn' },
    { name: 'Chronic kidney disease, Stage G2A2', detail: 'eGFR 78 mL/min (preserved G2), persistent UACR 102 mg/g (improved from 118, Category A2)', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP 132/80 mmHg (repeat 130/80; improved from baseline 136/84; target <130/80)', flag: 'warn' },
    { name: 'Obesity (Class I)', detail: 'Weight 101 kg (down 2 kg from 103 kg), BMI 31.9 kg/m²', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: 'Continue' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: 'Continue' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia / ASCVD prevention', notes: 'Continue; favorable response' },
  ],
  ALLERGIES: [{ substance: 'No known drug allergies (NKDA)', reaction: 'None', severity: 'None', type: 'None' }],
  SUBJECTIVE_DOCUMENTED: [
    {
      label: 'Reason for visit & clinical setting',
      value: 'Scheduled 3-month follow-up encounter in an ambulatory care pharmacy clinic under collaborative practice agreement for comprehensive chronic disease management of hypertension, hyperlipidemia, and chronic kidney disease.'
    },
    {
      label: 'Interval history & general wellbeing',
      value: 'Patient reports doing well overall since previous visit. Tolerating intensified atorvastatin 20 mg PO daily well with zero muscle pain, stiffness, tenderness, or weakness (explicitly denies statin-associated muscle symptoms / myalgias). Expresses genuine satisfaction and pleasure with cholesterol improvement.'
    },
    {
      label: 'Medication adherence & routine',
      value: 'Medication adherence has improved substantially: established an effective behavioral reminder routine by placing evening pills in a visible location on the bedside counter. Quantified adherence: now takes ~6 of 7 doses weekly (~85-90% adherence, missing only ~1 dose/week versus missing 2–3 times weekly previously). Denies intentional skipping.'
    },
    {
      label: 'Dietary & lifestyle modifications',
      value: 'Has significantly reduced restaurant and takeout meals (cut from 3–4 times weekly down to ≤once weekly); now preparing and increasing home-cooked meals with portion control and lower sodium. Initiated walking 2–3 days per week toward a goal of ≥150 minutes/week. Weight reduced by ~2 kg (103 kg down to 101 kg).'
    },
    {
      label: 'OTC NSAID use & knee symptoms',
      value: 'Substantially reduced OTC ibuprofen use from several times weekly down to only ~once weekly for knee stiffness following previous kidney counseling; motivated to transition to acetaminophen.'
    },
    {
      label: 'Past Medical History (PMH)',
      value: 'Essential hypertension (diagnosed 8 years ago), hyperlipidemia (diagnosed 5 years ago), chronic kidney disease Stage G2A2 (confirmed on repeat UACR 7 months ago), and Class I Obesity (BMI 31.9 kg/m²).'
    },
    {
      label: 'Social History',
      value: 'Occupation: Warehouse manager (formerly accountant). Marital status: Married, lives with wife. Tobacco history: Former smoker (quit 5 years ago, ~10 pack-year history). Alcohol use: Occasional alcohol (1–2 drinks per month at family dinners). Recreational drug use: Explicitly denies illicit drug use.'
    },
    {
      label: 'Review of Systems (ROS)',
      value: 'Cardiovascular/Pulmonary/Neurologic/Renal: Explicitly denies chest pain, shortness of breath, palpitations, dizziness, syncope, and lower extremity edema. Explicitly denies gross hematuria or changes in urinary frequency or output.'
    },
    {
      label: 'Patient Goals & Motivations',
      value: 'Patient expresses high motivation to avoid kidney failure and avoid dialysis after witnessing a close friend on hemodialysis. Strongly motivated to prevent cardiovascular disease and heart attacks. Committed to gradual weight loss.'
    },
    {
      label: 'Patient Misconception & Disease Understanding',
      value: 'Patient demonstrates an active misconception: erroneously believes that his normal kidney blood test (eGFR 78 mL/min/1.73m²) means his kidneys are completely healthy, not recognizing that persistent A2 albuminuria indicates ongoing microvascular kidney damage.'
    },
    {
      label: 'Home Blood Pressure Monitoring',
      value: 'Patient acknowledges he has not been checking BP at home and does not currently have a written home BP log; agrees to resume home blood pressure monitoring and bring a log to the next visit.'
    }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Body Surface Area (Mosteller)', value: '2.23 m²', flag: 'normal' },
    { label: '10-Year ASCVD Risk Score', value: '10.7% — Improved from baseline 11.8%', flag: 'normal' },
    { label: 'Home BP monitoring', value: 'Patient not currently checking BP at home / no home log available; clinic will re-establish home BP monitoring plan', flag: 'normal' },
    { label: 'Prior Visit Trend Comparisons', value: 'LDL-C: 132 → 96 mg/dL; UACR: 118 → 102 mg/g; ASCVD Risk: 11.8% → 10.7%; BP: 136/84 → 132/80 mmHg; Weight: 103 → 101 kg', flag: 'normal' },
    { label: 'Objective Clinical Interpretations', value: 'eGFR 78: Preserved Stage G2 filtration; UACR 102: Improved yet remains persistent Category A2 moderately increased albuminuria; AST 22 / ALT 24: Normal transaminases confirming absence of statin hepatotoxicity; Lipid panel: Reflects favorable therapeutic response to atorvastatin intensification', flag: 'normal' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'otc', label: 'NSAID use now', placeholder: 'How much ibuprofen remains…' },
    { key: 'diseaseUnderstanding', label: 'Kidney understanding', placeholder: 'His belief about eGFR vs albuminuria…' },
  ],
  GUIDING_QUESTIONS: [
    'How would you explain to this patient that he still has CKD despite having a normal eGFR?',
    'Why is albuminuria still important if it improved?',
    'What likely contributed to the LDL-C improvement?',
    'What should be reinforced during today\'s visit?',
    'What are the remaining modifiable risk factors?',
    'Would you make additional medication changes today?',
    'What monitoring should occur before the next visit?',
    'What is the biggest unresolved issue today?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w2-michael-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w2-michael-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take ibuprofen or acetaminophen occasionally for my knee stiffness, and a daily multivitamin." },
    { id: 'w2-michael-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol occasionally—maybe 1 to 2 drinks per month at family gatherings or dinners." },
    { id: 'w2-michael-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago, and I had about a 10 pack-year history before that." },
    { id: 'w2-michael-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling', 'family', 'dad', 'mom', 'relatives', 'hereditary'], response: "My father had high blood pressure and high cholesterol, and had a heart attack (myocardial infarction) at age 61. My mother has high blood pressure and high cholesterol. My brother has type 2 diabetes." },
    { id: 'w2-michael-wed_marital', topic: 'Marital status', field: 'familyHistory', keywords: ['marital', 'married', 'wife', 'spouse'], response: "I am married and live with my wife." },
    { id: 'w2-michael-wed_occupation', topic: 'Occupation', field: 'exercise', keywords: ['job', 'work', 'occupation', 'manager', 'warehouse'], response: "I work as a warehouse manager." },
    { id: 'w2-michael-wed_psh', topic: 'Past surgical history', field: 'psh', keywords: ['surgery', 'surgeries', 'operation', 'appendectomy', 'surgical', 'appendix', 'procedure'], response: "I had an appendectomy when I was 27, but no other surgeries." },
    { id: 'w2-michael-wed_hosp', topic: 'Hospitalization / ED visits', field: 'hospitalization', keywords: ['hospital', 'hospitalization', 'admit', 'admission', 'emergency room', 'hospitalized', 'admitted', 'admissions'], response: "No, I haven't had any recent hospitalizations or emergency room visits." },
    { id: 'w2-michael-wed_homebp', topic: 'Home blood pressure', field: 'homeBp', keywords: ['home bp', 'blood pressure at home', 'cuff', 'log', 'monitor', 'check bp'], response: "I haven't been keeping a home BP log since the last visit; I don't have home readings with me today." },
    { id: 'w2-michael-wed_diet', topic: 'Diet and physical activity', field: 'exercise', keywords: ['diet', 'food', 'eating', 'exercise', 'walk', 'activity', 'routine', 'lifestyle'], response: "I've been trying to watch what I eat and walk a bit more when I get a chance, but I don't have a structured workout routine yet. Cutting back on ibuprofen was my main focus." },
    { id: 'aw_nsaid', topic: 'Residual NSAID use', field: 'otc', keywords: ['ibuprofen', 'nsaid', 'advil', 'pain', 'knee', 'still'],
      response: "I still take ibuprofen sometimes — maybe once a week now, a lot less than before." },
    { id: 'aw_alb', topic: 'Kidney misconception', field: 'diseaseUnderstanding', keywords: ['kidney', 'egfr', 'normal', 'albumin', 'protein', 'understand', 'healthy'],
      response: "My kidney number is normal, so my kidneys are basically healthy now, right?" },
  ],
  ASSESSMENT_CARDS: [
    {
      id: 'aw_hld',
      title: 'Hyperlipidemia / Elevated Cardiovascular Risk',
      icon: 'Droplet',
      color: '13314f',
      questions: [
        {
          key: 'aw_hld_eval',
          q: 'Evaluation of lipid control, statin response, and ASCVD risk:',
          defaultAnswer: 'Status: Hyperlipidemia, improving but not yet optimized. LDL-C decreased from baseline 132 mg/dL to 96 mg/dL, reflecting a favorable therapeutic response (~27% reduction) on atorvastatin 20 mg PO daily. Improvement is attributed directly to statin intensification combined with substantially improved medication adherence. Calculated 10-year ASCVD risk improved from baseline 11.8% to 10.7%. Per 2026 AHA/ACC Cholesterol Guidelines, statin therapy is the cornerstone of primary ASCVD prevention in patients with multiple risk enhancers. Residual cardiovascular risk factors remain present: CKD Stage G2A2 is an established ASCVD risk-enhancing condition, along with essential hypertension, Class I obesity, former smoking history, and family history of cardiovascular disease (father MI at 61). Ongoing risk-reduction efforts remain warranted. Hold further statin intensification today given favorable initial therapeutic response and good tolerability; maintain atorvastatin 20 mg PO daily while reinforcing adherence and lifestyle to reach LDL-C target (<70-100 mg/dL).'
        }
      ]
    },
    {
      id: 'aw_ckd',
      title: 'Chronic Kidney Disease Stage G2A2 & Albuminuria',
      icon: 'FlaskConical',
      color: '0891b2',
      questions: [
        {
          key: 'aw_ckd_eval',
          q: 'Evaluation of CKD staging, renal stability, and albuminuria trend:',
          defaultAnswer: 'Status: CKD Stage G2A2, stable renal filtration with persistent albuminuria and encouraging downward trend. Dual-axis classification: eGFR 78 mL/min/1.73m² (SCr 1.10 mg/dL) confirms preserved Stage G2 filtration, showing stable kidney function versus previous visit (eGFR 79 to 78, SCr 1.08 to 1.10); spot UACR improved from baseline 118 mg/g to 102 mg/g, but remains classified as persistent Category A2 moderately increased albuminuria. Per KDIGO 2024 CKD Guideline, dual-axis staging is essential; persistent A2 albuminuria represents active glomerular microvascular damage and independently predicts CKD progression and cardiovascular events despite preserved filtration. The reduction in albuminuria is an encouraging sign of therapeutic response driven by NSAID reduction, blood pressure control, and improved medication adherence. Continued monitoring and kidney-protective interventions beyond education remain essential.'
        }
      ]
    },
    {
      id: 'aw_htn',
      title: 'Essential Hypertension',
      icon: 'HeartPulse',
      color: '13314f',
      questions: [
        {
          key: 'aw_htn_eval',
          q: 'Evaluation of blood pressure status, control, and therapeutic efficacy:',
          defaultAnswer: 'Status: Essential hypertension, improved compared with baseline. Office BP is 132/80 mmHg (repeat 130/80 mmHg), demonstrating meaningful improvement from initial visit baseline (136/84 mmHg, repeat 134/82 mmHg). Improvement is attributed to enhanced medication adherence, reduced dietary sodium / fewer restaurant meals, and reduced NSAID use. Cites KDIGO 2024 and 2025 AHA/ACC Hypertension Guidelines: blood pressure control in CKD reduces CKD progression and lowers cardiovascular risk, directly linking BP lowering to both kidney protection and CV risk reduction. Current 2-drug antihypertensive therapy (lisinopril 20 mg PO daily and hydrochlorothiazide 25 mg PO daily) is effective, well-tolerated, and without adverse effects; continue current regimen with blood pressure target <130/80 mmHg (KDIGO systolic <120 mmHg when standardized office BP is tolerated).'
        }
      ]
    },
    {
      id: 'aw_adh_nsaid',
      title: 'Medication Adherence & NSAID Reduction',
      icon: 'CheckCircle2',
      color: '059669',
      questions: [
        {
          key: 'aw_adh_eval',
          q: 'Evaluation of adherence gains, reminder strategy, and NSAID reduction:',
          defaultAnswer: 'Status: Substantial medication adherence improvement achieved through behavioral strategies. Patient established a visible reminder placement on the bedside counter, improving adherence from missing doses 2-3 times weekly to missing only ~once weekly (~6 of 7 doses weekly, ~85-90% adherence). Improved adherence directly contributed to LDL-C reduction (132 to 96 mg/dL) and BP improvement (136/84 to 132/80 mmHg). In addition, patient substantially reduced OTC ibuprofen from several times weekly down to only ~once weekly following kidney-health counseling. Per KDIGO 2024 guidelines, avoiding nephrotoxic medications is a core principle in CKD management; discuss alternative pain management strategies (acetaminophen) to eliminate residual NSAID use completely.'
        }
      ]
    },
    {
      id: 'aw_obesity',
      title: 'Class I Obesity & Lifestyle Modifications',
      icon: 'Scale',
      color: 'ca8a04',
      questions: [
        {
          key: 'aw_ob_eval',
          q: 'Evaluation of weight status, lifestyle changes, and cardiometabolic goals:',
          defaultAnswer: 'Status: Slight improvement in obesity status. Weight decreased from baseline 103 kg to 101 kg (~2 kg / 4.4 lbs weight loss), BMI 31.9 kg/m² (Class I Obesity). Improvement is multifactorial, driven by cutting back on restaurant meals, increasing home-cooked meals, and initiating a walking program. Per KDIGO 2024 and 2026 AHA/ACC lifestyle guidelines, lifestyle modification is foundational therapy; additional gradual weight reduction (targeting 5-10% total weight loss) will confer cumulative cardiovascular and renal benefits. Reinforce successful behavior change in the assessment.'
        }
      ]
    },
    {
      id: 'aw_edu',
      title: 'Patient Education & Disease Understanding (Albuminuria Misconception)',
      icon: 'BookOpen',
      color: '0891b2',
      questions: [
        {
          key: 'aw_edu_eval',
          q: 'Addressing patient misconception regarding normal eGFR vs albuminuria:',
          defaultAnswer: 'Status: Disease understanding deficit identified: patient erroneously believes that his normal kidney blood test (eGFR 78 mL/min/1.73m²) means his kidneys are completely healthy, indicating limited understanding persists despite prior counseling. Per KDIGO 2024 CKD Guidelines, albuminuria signals kidney damage even when filtration rate is preserved; persistent A2 albuminuria confers elevated risk for progressive renal decline and cardiovascular disease. Continued patient-centered education is necessary to sustain engagement, medication adherence, and self-management.'
        }
      ]
    },
    {
      id: 'aw_prevent',
      title: 'Preventive Care & Health Maintenance Gaps',
      icon: 'ShieldAlert',
      color: '7c3aed',
      questions: [
        {
          key: 'aw_prev_eval',
          q: 'Evaluation of immunization status and preventive health needs:',
          defaultAnswer: 'Status: Preventive care and immunization gaps persist: Pneumococcal conjugate vaccination (PCV20) is indicated for CKD; Recombinant Zoster vaccine (Shingrix 2-dose series) is indicated for age ≥50; and Tdap booster is overdue (>10 years since last documented booster). Immunization catch-up should be actively recommended.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    {
      id: 'aw_p_hld',
      title: 'Hyperlipidemia / ASCVD Risk Plan',
      options: [
        { key: 'aw_hld_o1', label: 'Continue atorvastatin 20 mg PO once daily at bedtime', correct: true },
        { key: 'aw_hld_o2', label: 'Treatment target: LDL-C <70-100 mg/dL (or >=50% reduction from baseline)', correct: true },
        { key: 'aw_hld_o3', label: 'Hold statin intensification today given favorable therapeutic response and good tolerability', correct: true },
        { key: 'aw_hld_o4', label: 'Continue lifestyle modification efforts for lipid management (reduced saturated fats, cooking at home)', correct: true },
        { key: 'aw_hld_o5', label: 'Continue ASCVD risk-reduction counseling and reinforce adherence routine', correct: true },
        { key: 'aw_hld_o6', label: 'Order repeat fasting lipid panel in ~3 months before next visit', correct: true }
      ]
    },
    {
      id: 'aw_p_ckd',
      title: 'Chronic Kidney Disease / Renoprotective Plan',
      options: [
        { key: 'aw_ckd_o1', label: 'Continue lisinopril 20 mg PO once daily for renal protection (reduces intraglomerular pressure and albuminuria)', correct: true },
        { key: 'aw_ckd_o2', label: 'Educate that albuminuria still signals ongoing kidney damage despite preserved filtration rate (eGFR 78)', correct: true },
        { key: 'aw_ckd_o3', label: 'Continue monitoring CKD progression risk factors and maintain renoprotective therapy', correct: true },
        { key: 'aw_ckd_o4', label: 'Order repeat spot UACR, serum creatinine, and CMP in ~3 months before next visit', correct: true },
        { key: 'aw_ckd_o5', label: 'Stop the ACE inhibitor because eGFR is normal', correct: false }
      ]
    },
    {
      id: 'aw_p_htn',
      title: 'Hypertension Plan',
      options: [
        { key: 'aw_htn_o1', label: 'Continue lisinopril 20 mg PO once daily for blood pressure control', correct: true },
        { key: 'aw_htn_o2', label: 'Continue hydrochlorothiazide 25 mg PO once daily in the morning', correct: true },
        { key: 'aw_htn_o3', label: 'Blood pressure treatment target: <130/80 mmHg per 2025 AHA/ACC Hypertension Guidelines in CKD (KDIGO <120 SBP when tolerated)', correct: true },
        { key: 'aw_htn_o4', label: 'Encourage and re-establish structured home blood pressure monitoring (HBPM) >=3-4 days/week and maintain a written BP log before next visit', correct: true }
      ]
    },
    {
      id: 'aw_p_adh',
      title: 'Medication Adherence Plan',
      options: [
        { key: 'aw_adh_o1', label: 'Praise patient for substantial medication adherence improvements achieved through visible reminder routine', correct: true },
        { key: 'aw_adh_o2', label: 'Encourage continuing visible bedside placement and reminder system to maintain durable adherence', correct: true }
      ]
    },
    {
      id: 'aw_p_pain',
      title: 'Pain Management & Nephrotoxin Avoidance Plan',
      options: [
        { key: 'aw_pain_o1', label: 'Re-counsel on completely discontinuing OTC ibuprofen; reinforce kidney-specific risk rationale (AKI risk, blunted antihypertensive effect, accelerated CKD progression)', correct: true },
        { key: 'aw_pain_o2', label: 'Recommend acetaminophen (Tylenol) 500-650 mg PO every 6 hours PRN as safe first-line analgesic (maximum 3000 mg/day)', correct: true },
        { key: 'aw_pain_o3', label: 'Explore non-pharmacologic joint support: low-impact walking, quadriceps strengthening, and warm compresses for knee symptoms', correct: true }
      ]
    },
    {
      id: 'aw_p_life',
      title: 'Lifestyle & Weight Management Plan',
      options: [
        { key: 'aw_life_o1', label: 'Continue walking program, progressing toward activity goal of >=150 minutes/week of moderate physical activity', correct: true },
        { key: 'aw_life_o2', label: 'Continue reducing restaurant meals and maintain increased home-cooked meals with dietary sodium restriction (<2000 mg/day)', correct: true },
        { key: 'aw_life_o3', label: 'Continue weight-loss efforts targeting gradual 5-10% total weight reduction; reinforce positive changes already achieved (~2 kg lost)', correct: true }
      ]
    },
    {
      id: 'aw_p_prevent',
      title: 'Preventive Care & Immunization Plan',
      options: [
        { key: 'aw_prev_o1', label: 'Reassess and recommend Pneumococcal conjugate vaccination (PCV20) for CKD risk', correct: true },
        { key: 'aw_prev_o2', label: 'Reassess and recommend Recombinant Zoster vaccine (Shingrix) 2-dose series for age >=50', correct: true },
        { key: 'aw_prev_o3', label: 'Administer Tdap booster today (overdue >10 years per CDC guidelines)', correct: true }
      ]
    },
    {
      id: 'aw_p_foll',
      title: 'Follow-up & Monitoring Plan',
      options: [
        { key: 'aw_foll_o1', label: 'Schedule follow-up visit in 3 months', correct: true },
        { key: 'aw_foll_o2', label: 'Order pre-visit laboratory testing: fasting lipid panel, CMP (renal function, electrolytes, LFTs), and spot UACR', correct: true },
        { key: 'aw_foll_o3', label: 'Obtain home blood pressure readings and review BP log before next visit', correct: true },
        { key: 'aw_foll_o4', label: 'Explicitly reassess CKD progression/albuminuria, BP control, statin tolerability, and medication adherence at follow-up visit', correct: true }
      ]
    }
  ],
  COUNSELING: [
    { id: 'a_wed_c1', title: 'Addressing the "normal eGFR" misconception', body: [
      "It is great that your kidney filtering number (eGFR) is normal, but your urine protein indicates kidney strain.",
      "Think of it like high blood pressure — you might feel fine, but we treat it to prevent damage down the road.",
      "The medications we added are working to protect your kidneys, so we need to keep them on board." ] },
    { id: 'a_wed_c2', title: 'Lifestyle & NSAID feedback', body: [
      "You've made great progress with your diet, exercise, and weight loss — that's lowering your risks significantly.",
      "Your use of ibuprofen is down, but we want to get that to zero if possible to fully protect your kidneys.",
      "Let's make sure you have enough acetaminophen on hand for when the knee pain acts up." ] }
  ],
  GUIDING_QUESTIONS: [
    'How would you explain to this patient that he still has CKD despite having a normal eGFR?',
    'Why is albuminuria still important if it improved?',
    'What likely contributed to the LDL-C improvement?',
    'What should be reinforced during today\'s visit?',
    'What are the remaining modifiable risk factors?',
    'Would you make additional medication changes today?',
    'What monitoring should occur before the next visit?',
    'What is the biggest unresolved issue today?'
  ],
  PRECEPTOR: {
    keyIssues: ['Good LDL/UACR response', 'Persistent NSAID use', 'eGFR misconception'],
    assessment: ['Response confirms the plan is working', 'Albuminuria improving but still present — kidneys are not "cured"'],
    plan: ['Continue intensified statin', 'Reinforce NSAID cessation', 'Continue ACEi + monitoring'],
    pearls: ['Improving albuminuria is encouragement to continue, not stop, protection'],
    mistakes: ['Reassuring him the kidneys are "fine"', 'De-escalating the ACEi'],
    followupQuestions: ['What is his LDL goal and are we there?'],
    checklist: ['Interpreted response', 'Corrected misconception', 'Reinforced NSAID avoidance'],
  },
})

const michaelThu = makeCase({
  id: 'w2-michael-thu',
  IMMUNIZATIONS: michaelTue.IMMUNIZATIONS,
  ALLERGIES: michaelTue.ALLERGIES,
  PATIENT: michaelTue.PATIENT,
  ENCOUNTER: { week: 'Week 2', 
    day: 'Thursday', type: 'six-month follow-up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "Everything's better, but there's still protein in my urine — I thought it would be gone.",
    setting: 'ambulatory care pharmacy clinic under collaborative practice agreement',
    snapshotSummary: 'Six months in. LDL, BP, and weight improved and albuminuria is trending down — but he expects the proteinuria to disappear entirely. Manage expectations and sustain protection.',
    diseaseStates: ['Hyperlipidemia', 'CKD G2A2', 'Hypertension', 'Obesity'],
    learningObjectives: ['Frame persistent albuminuria realistically', 'Confirm durable LDL control', 'Sustain kidney protection and lifestyle gains', 'Address preventive care gaps'],
  },
  VITALS: { bp: '130/78', bpRepeat: '128/78', hr: '68', rr: '16', temp: '98.2°F', weight: '99 kg', height: "5'10\"", bmi: '31.3',
    flags: { bp: 'normal', bpRepeat: 'normal', bmi: 'warn' } },
  LABS: [
    { label: 'Na', value: '140', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.6', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.11', unit: 'mg/dL', flag: 'normal', note: 'Stable from baseline 1.08 and 3-month 1.10 mg/dL' },
    { label: 'eGFR', value: '77', unit: 'mL/min/1.73m²', flag: 'normal', note: 'Preserved Stage G2 filtration; stable from baseline 79 and 3-month 78 mL/min' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal', note: 'Normal transaminase confirming absence of statin hepatotoxicity' },
    { label: 'ALT', value: '23', unit: 'U/L', flag: 'normal', note: 'Normal transaminase confirming absence of statin hepatotoxicity' },
    { label: 'Total cholesterol', value: '166', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '84', unit: 'mg/dL', flag: 'normal', note: '132 → 96 → 84 mg/dL (~36% reduction; well-controlled on Atorvastatin 20 mg)' },
    { label: 'HDL-C', value: '47', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '148', unit: 'mg/dL', flag: 'normal' },
    { label: 'UACR', value: '98', unit: 'mg/g', flag: 'warn', note: '118 → 102 → 98 mg/g (~17% reduction; remains persistent Category A2 moderately increased albuminuria)' },
  ],
  ALERTS: [{ level: 'info', text: 'Sustained longitudinal improvement across LDL, BP, weight, and albuminuria.' }],
  PROBLEMS: [
    { name: 'Hyperlipidemia / Elevated ASCVD Risk', detail: 'LDL-C 84 mg/dL (durable control on Atorvastatin 20 mg PO daily; target <70-100)', flag: 'normal' },
    { name: 'Chronic kidney disease, Stage G2A2', detail: 'eGFR 77 mL/min (preserved G2), persistent UACR 98 mg/g (down from 118, Category A2)', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP 130/78 mmHg (repeat 128/78; controlled; target <130/80)', flag: 'normal' },
    { name: 'Obesity (Class I)', detail: 'Weight 99 kg (down 4 kg from baseline 103 kg), BMI 31.3 kg/m²', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: 'Continue' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: 'Continue' },
    { name: 'Atorvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia / ASCVD prevention', notes: 'Continue; durable response' },
  ],
  ALLERGIES: [{ substance: 'No known drug allergies (NKDA)', reaction: 'None', severity: 'None', type: 'None' }],
  SUBJECTIVE_DOCUMENTED: [
    {
      label: 'Reason for visit & clinical setting',
      value: 'Scheduled 6-month follow-up encounter in an ambulatory care pharmacy clinic under collaborative practice agreement for longitudinal management of hypertension, hyperlipidemia, and chronic kidney disease.'
    },
    {
      label: 'Interval history & general wellbeing',
      value: 'Patient reports feeling well overall. Tolerating atorvastatin 20 mg PO daily without muscle pain, stiffness, or weakness (explicitly denies statin-associated muscle symptoms / myalgias). Expresses satisfaction with cholesterol and blood pressure progress.'
    },
    {
      label: 'Medication adherence & routine',
      value: 'Medication adherence remains high (>95% adherence) utilizing visible bedside placement reminder routine; misses fewer than 1 dose per month. Denies intentional nonadherence.'
    },
    {
      label: 'Dietary & lifestyle modifications',
      value: 'Sustained reduction in restaurant/takeout meals (<=once weekly) with increased home-cooked meals emphasizing portion control and lower sodium. Maintains regular walking 3–4 days/week for 30 minutes. Weight reduced from baseline 103 kg to 99 kg (~4 kg / 8.8 lbs total loss).'
    },
    {
      label: 'OTC NSAID avoidance & pain management',
      value: 'Completely discontinued regular OTC ibuprofen following previous counseling; uses acetaminophen 500–650 mg PO PRN rare knee stiffness (only 1–2 times per month).'
    },
    {
      label: 'Past Medical History (PMH)',
      value: 'Essential hypertension (diagnosed 8 years ago), hyperlipidemia (diagnosed 5 years ago), chronic kidney disease Stage G2A2 (confirmed 10 months ago), and Class I Obesity (BMI 31.3 kg/m²).'
    },
    {
      label: 'Social History',
      value: 'Occupation: Warehouse manager (formerly accountant). Marital status: Married, lives with wife. Tobacco history: Former smoker (quit 5 years ago, ~10 pack-year history). Alcohol use: Occasional alcohol (1–2 drinks per month at family dinners). Recreational drug use: Explicitly denies illicit drug use.'
    },
    {
      label: 'Review of Systems (ROS)',
      value: 'Cardiovascular/Pulmonary/Neurologic/Renal: Explicitly denies chest pain, shortness of breath, palpitations, dizziness, syncope, and lower extremity edema. Explicitly denies gross hematuria or changes in urinary habits.'
    },
    {
      label: 'Patient Expectations & Albuminuria Misconception',
      value: 'Patient is puzzled that protein is still present in his urine (UACR 98 mg/g); expected it to be completely gone and wondered if treatment is failing. Needs counseling that reducing albuminuria—not eliminating it—is the realistic, protective goal.'
    },
    {
      label: 'Patient Goals & Motivations',
      value: 'Highly motivated to prevent kidney failure and avoid dialysis (motivated by witnessing friend on dialysis). Strongly committed to preventing cardiovascular disease and continuing gradual weight loss.'
    },
    {
      label: 'Home Blood Pressure Monitoring',
      value: 'Patient acknowledges he has not maintained a home BP log since clinic readings have been well controlled; agrees to resume home blood pressure checks before next routine visit.'
    }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Body Surface Area (Mosteller)', value: '2.21 m²', flag: 'normal' },
    { label: '10-Year ASCVD Risk Score', value: '9.8% — Improved from baseline 11.8% and 3-month 10.7%', flag: 'normal' },
    { label: 'Home BP log', value: 'No current log available; patient not checking BP at home (continue in-office monitoring and counseling)', flag: 'normal' },
    { label: 'Longitudinal Trend Comparisons', value: 'LDL-C: 132 → 96 → 84 mg/dL; UACR: 118 → 102 → 98 mg/g; ASCVD Risk: 11.8% → 10.7% → 9.8%; BP: 136/84 → 132/80 → 130/78 mmHg; Weight: 103 → 101 → 99 kg', flag: 'normal' },
    { label: 'Objective Clinical Interpretations', value: 'eGFR 77: Stable Stage G2 filtration; UACR 98: Meaningful longitudinal reduction (~17%), but remains in persistent Category A2 moderately increased albuminuria; AST 22 / ALT 23: Normal transaminases confirming absence of statin hepatotoxicity; Lipid panel: Confirms durable LDL-C control at goal on atorvastatin 20 mg', flag: 'normal' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'diseaseUnderstanding', label: 'Expectations re: albuminuria', placeholder: 'What he expects proteinuria to do…' },
    { key: 'weightGoals', label: 'Ongoing goals', placeholder: 'Weight, lifestyle, prevention…' },
  ],
  GUIDING_QUESTIONS: [
    'Is "albuminuria gone" a realistic clinical goal in CKD G2A2?',
    'Why continue renoprotective therapy when numbers are good?',
    'What evidence confirms durable LDL-C control?',
    'What residual cardiovascular and renal risks remain?',
    'What long-term monitoring cadence fits CKD G2A2?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w2-michael-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w2-michael-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take ibuprofen or acetaminophen occasionally for my knee stiffness, and a daily multivitamin." },
    { id: 'w2-michael-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink alcohol occasionally—maybe 1 to 2 drinks per month at family gatherings or dinners." },
    { id: 'w2-michael-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I am a former smoker. I quit about 5 years ago, and I had about a 10 pack-year history before that." },
    { id: 'w2-michael-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling', 'family', 'dad', 'mom', 'relatives', 'hereditary'], response: "My father had high blood pressure and high cholesterol, and had a heart attack (myocardial infarction) at age 61. My mother has high blood pressure and high cholesterol. My brother has type 2 diabetes." },
    { id: 'w2-michael-thu_marital', topic: 'Marital status', field: 'familyHistory', keywords: ['marital', 'married', 'wife', 'spouse'], response: "I am married and live with my wife." },
    { id: 'w2-michael-thu_occupation', topic: 'Occupation', field: 'exercise', keywords: ['job', 'work', 'occupation', 'manager', 'warehouse'], response: "I work as a warehouse manager." },
    { id: 'w2-michael-thu_psh', topic: 'Past surgical history', field: 'psh', keywords: ['surgery', 'surgeries', 'operation', 'appendectomy', 'surgical', 'appendix', 'procedure'], response: "I had an appendectomy when I was 27, but no other surgeries." },
    { id: 'w2-michael-thu_hosp', topic: 'Hospitalization / ED visits', field: 'hospitalization', keywords: ['hospital', 'hospitalization', 'admit', 'admission', 'emergency room', 'hospitalized', 'admitted', 'admissions'], response: "No, I haven't had any recent hospitalizations or emergency room visits." },
    { id: 'w2-michael-thu_homebp', topic: 'Home blood pressure', field: 'homeBp', keywords: ['home bp', 'blood pressure at home', 'cuff', 'log', 'monitor', 'check bp'], response: "I haven't been keeping a home BP log. My clinic readings have been around 130/78, so I haven't checked much at home." },
    { id: 'w2-michael-thu_diet', topic: 'Diet and exercise habits', field: 'exercise', keywords: ['diet', 'food', 'eating', 'exercise', 'walk', 'activity', 'routine', 'restaurant'], response: "I've been cooking at home more and eating out less often. I try to get out and walk a few times a week, though it's still not a strict daily routine." },
    { id: 'at_exp', topic: 'Albuminuria expectations', field: 'diseaseUnderstanding', keywords: ['protein', 'albumin', 'urine', 'gone', 'disappear', 'expect', 'still there', 'why'],
      response: "I figured the protein would be gone by now. It's still showing up — does that mean the treatment isn't working?" },
    { id: 'at_wt', topic: 'Weight goal', field: 'weightGoals', keywords: ['weight', 'lose', 'goal', 'exercise', 'diet'],
      response: "I'd really like to keep losing weight — that's still my main goal." },
  ],
  ASSESSMENT_CARDS: [
    {
      id: 'at_hld',
      title: 'Hyperlipidemia / Primary Cardiovascular Prevention',
      icon: 'Droplet',
      color: '13314f',
      questions: [
        {
          key: 'at_hld_eval',
          q: 'Evaluation of durable lipid control, statin response, and ASCVD risk:',
          defaultAnswer: 'Status: Hyperlipidemia, durable control at goal on atorvastatin 20 mg PO daily. Fasting lipid panel demonstrates LDL-C 84 mg/dL, reflecting a ~36% longitudinal reduction from baseline (132 to 96 to 84 mg/dL). Calculated 10-year ASCVD risk improved from baseline 11.8% to 9.8%. Per 2026 AHA/ACC Cholesterol Guidelines, statin therapy is the cornerstone of primary ASCVD prevention; residual cardiovascular risk factors remain present (CKD Stage G2A2 is an established ASCVD risk-enhancing condition, along with essential hypertension, Class I obesity, former smoking, and family history of cardiovascular disease [father MI at 61]). Durable LDL control and good tolerability confirm continuation of atorvastatin 20 mg PO daily as lifelong primary prevention; do not de-escalate therapy.'
        }
      ]
    },
    {
      id: 'at_ckd',
      title: 'Chronic Kidney Disease Stage G2A2 & Albuminuria Expectations',
      icon: 'FlaskConical',
      color: '0891b2',
      questions: [
        {
          key: 'at_ckd_eval',
          q: 'Evaluation of CKD staging, longitudinal trend, and managing albuminuria expectations:',
          defaultAnswer: 'Status: CKD Stage G2A2, stable filtration with longitudinal albuminuria reduction. Dual-axis classification: eGFR 77 mL/min/1.73m² (baseline 79, 3-month 78) confirms stable preserved Stage G2 filtration; spot UACR is 98 mg/g (down from baseline 118 and 3-month 102 mg/g, reflecting a ~17% cumulative reduction), but remains classified as persistent Category A2 moderately increased albuminuria. Cites KDIGO 2024 CKD Guideline: dual-axis staging confirms ongoing microvascular risk despite normal filtration. Crucial clinical communication: educate patient that reducing albuminuria—not eliminating it completely—is the realistic, protective therapeutic goal. Complete normalization of albuminuria is often not achievable and not required for durable kidney and cardiovascular protection; persisting protein does NOT mean treatment failure. Continue lisinopril 20 mg PO daily.'
        }
      ]
    },
    {
      id: 'at_htn',
      title: 'Essential Hypertension',
      icon: 'HeartPulse',
      color: '13314f',
      questions: [
        {
          key: 'at_htn_eval',
          q: 'Evaluation of blood pressure status, longitudinal control, and therapeutic efficacy:',
          defaultAnswer: 'Status: Essential hypertension, well-controlled at target. Office BP is 130/78 mmHg (repeat 128/78 mmHg), demonstrating sustained longitudinal control (baseline 136/84, 3-month 132/80 mmHg). Blood pressure meets guideline target (<130/80 mmHg per 2025 AHA/ACC Hypertension Guidelines in CKD). Current 2-drug antihypertensive therapy (lisinopril 20 mg PO daily and hydrochlorothiazide 25 mg PO daily) is effective, well-tolerated, and provides synergistic intraglomerular pressure reduction. Continue current regimen.'
        }
      ]
    },
    {
      id: 'at_adh_nsaid',
      title: 'Medication Adherence & Nephrotoxin Avoidance',
      icon: 'CheckCircle2',
      color: '059669',
      questions: [
        {
          key: 'at_adh_eval',
          q: 'Evaluation of durable adherence and complete NSAID avoidance:',
          defaultAnswer: 'Status: Durable medication adherence maintained (>95% adherence via bedtime routine, missing <1 dose/month). Patient has successfully eliminated regular OTC ibuprofen use, transitioning safely to occasional acetaminophen PRN for knee stiffness. Per KDIGO 2024, durable nephrotoxin avoidance is critical to preventing acute kidney injury and preserving residual nephron mass. Praise patient for sustained behavioral modifications.'
        }
      ]
    },
    {
      id: 'at_obesity',
      title: 'Class I Obesity & Longitudinal Lifestyle Gains',
      icon: 'Scale',
      color: 'ca8a04',
      questions: [
        {
          key: 'at_ob_eval',
          q: 'Evaluation of longitudinal weight loss and physical activity:',
          defaultAnswer: 'Status: Class I Obesity (BMI 31.3 kg/m²), weight 99 kg (cumulative 4 kg / 8.8 lbs weight loss from baseline 103 kg). Weight reduction is attributed to sustained home cooking, reduced restaurant meals, and consistent walking 3-4 days/week. Cites KDIGO 2024 and AHA/ACC lifestyle guidelines: sustained weight loss and regular physical activity confer progressive cardiometabolic and renoprotective benefits. Reinforce ongoing lifestyle goals targeting additional 5% weight reduction.'
        }
      ]
    },
    {
      id: 'at_prevent',
      title: 'Preventive Care Gaps & Health Maintenance',
      icon: 'ShieldAlert',
      color: '7c3aed',
      questions: [
        {
          key: 'at_prev_eval',
          q: 'Evaluation of immunization status and preventive health needs:',
          defaultAnswer: 'Status: Preventive care and immunization gaps persist: Pneumococcal conjugate vaccination (PCV20) is indicated for CKD; Recombinant Zoster vaccine (Shingrix 2-dose series) is indicated for age ≥50; and Tdap booster is overdue (>10 years since last dose). Immunization catch-up should be actively recommended.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    {
      id: 'at_p_hld',
      title: 'Hyperlipidemia Plan',
      options: [
        { key: 'at_hld_o1', label: 'Continue atorvastatin 20 mg PO once daily at bedtime', correct: true },
        { key: 'at_hld_o2', label: 'Treatment target: LDL-C <70-100 mg/dL (durable control achieved at 84 mg/dL)', correct: true },
        { key: 'at_hld_o3', label: 'Maintain statin therapy; avoid de-escalation as statin provides essential lifelong ASCVD risk reduction', correct: true },
        { key: 'at_hld_o4', label: 'Order repeat fasting lipid panel in 6-12 months', correct: true }
      ]
    },
    {
      id: 'at_p_ckd',
      title: 'Chronic Kidney Disease & Renoprotective Plan',
      options: [
        { key: 'at_ckd_o1', label: 'Continue lisinopril 20 mg PO once daily for renal and cardiovascular protection', correct: true },
        { key: 'at_ckd_o2', label: 'Reassure and educate patient: reducing albuminuria—not eliminating it—is the realistic, protective goal; persistence does not mean treatment failure', correct: true },
        { key: 'at_ckd_o3', label: 'Order repeat spot UACR and renal function (SCr/eGFR) in 6 months', correct: true },
        { key: 'at_ckd_o4', label: 'Discontinue ACE inhibitor because blood pressure and kidney numbers look good', correct: false }
      ]
    },
    {
      id: 'at_p_htn',
      title: 'Hypertension Plan',
      options: [
        { key: 'at_htn_o1', label: 'Continue lisinopril 20 mg PO once daily for blood pressure control', correct: true },
        { key: 'at_htn_o2', label: 'Continue hydrochlorothiazide 25 mg PO once daily in the morning', correct: true },
        { key: 'at_htn_o3', label: 'Blood pressure treatment target: <130/80 mmHg per 2025 AHA/ACC Guidelines in CKD (KDIGO <120 SBP when tolerated)', correct: true },
        { key: 'at_htn_o4', label: 'Re-encourage periodic home blood pressure checks (1-2 days/week) to verify out-of-office control', correct: true }
      ]
    },
    {
      id: 'at_p_pain',
      title: 'Pain Management & Nephrotoxin Avoidance Plan',
      options: [
        { key: 'at_pain_o1', label: 'Maintain complete avoidance of OTC NSAIDs (ibuprofen, naproxen) to protect residual kidney function', correct: true },
        { key: 'at_pain_o2', label: 'Continue acetaminophen 500-650 mg PO PRN every 6 hours (max 3000 mg/day) as preferred safe analgesic for knee stiffness', correct: true }
      ]
    },
    {
      id: 'at_p_life',
      title: 'Lifestyle & Weight Management Plan',
      options: [
        { key: 'at_life_o1', label: 'Continue walking program: sustain >=150 minutes/week of moderate physical activity', correct: true },
        { key: 'at_life_o2', label: 'Maintain home cooking habits and dietary sodium restriction (<2000 mg/day)', correct: true },
        { key: 'at_life_o3', label: 'Continue weight-loss efforts targeting ongoing gradual weight reduction; praise patient for 4 kg total weight loss', correct: true }
      ]
    },
    {
      id: 'at_p_prevent',
      title: 'Preventive Care & Immunization Plan',
      options: [
        { key: 'at_prev_o1', label: 'Recommend Pneumococcal conjugate vaccination (PCV20) for CKD', correct: true },
        { key: 'at_prev_o2', label: 'Recommend Recombinant Zoster vaccine (Shingrix) 2-dose series for age >=50', correct: true },
        { key: 'at_prev_o3', label: 'Administer Tdap booster today (overdue per CDC guidelines)', correct: true }
      ]
    },
    {
      id: 'at_p_foll',
      title: 'Follow-up & Monitoring Plan',
      options: [
        { key: 'at_foll_o1', label: 'Schedule follow-up visit in 6 months for routine chronic disease monitoring', correct: true },
        { key: 'at_foll_o2', label: 'Order pre-visit laboratory testing: CMP (renal function, electrolytes, LFTs), spot UACR, and fasting lipid panel', correct: true },
        { key: 'at_foll_o3', label: 'Reassess long-term albuminuria trajectory, blood pressure stability, and lifestyle maintenance at follow-up', correct: true }
      ]
    }
  ],
  COUNSELING: [
    { id: 'a_thu_c1', title: 'Managing albuminuria expectations', body: [
      "Reducing the protein in your urine by this much is a huge win, even if it doesn't go to zero.",
      "Our goal is to protect your kidneys from further damage, and the trend shows the medication is doing exactly that.",
      "You're doing everything right. We just need to keep this protective therapy going long-term." ] }
  ],
  GUIDING_QUESTIONS: ['Is "albuminuria gone" a realistic goal?', 'Why continue therapy when numbers are good?'],
  PRECEPTOR: {
    keyIssues: ['Sustained gains', 'Unrealistic expectation that albuminuria resolves', 'Durable protection needed'],
    assessment: ['Lowering albuminuria is the goal; full resolution often isn’t', 'Maintain protective therapy'],
    plan: ['Reassure and reframe', 'Continue statin + ACEi + monitoring', 'Support weight goals'],
    pearls: ['Managing expectations keeps patients adherent for the long haul'],
    mistakes: ['Implying treatment failed because albuminuria persists', 'De-escalating protection'],
    followupQuestions: ['What long-term monitoring cadence fits G2A2?'],
    checklist: ['Reframed expectations', 'Confirmed LDL control', 'Sustained protection'],
  },
})

/* ============================ ANGELA RODRIGUEZ (B) ============================ */
// HTN + HLD + CKD G3aA2, obesity. No diabetes. Penicillin allergy.
// Hidden: rosuvastatin 20 prescribed 6 mo ago, NEVER started (cost + embarrassment);
// statin fear. On low-intensity simvastatin 10; markedly elevated LDL.

const angelaTue = makeCase({
  id: 'w2-angela-tue',
  PATIENT: { name: 'Angela Rodriguez', age: 66, sex: 'female', ethnicity: 'Hispanic/Latina', mrn: 'B2-990812', allergiesSummary: 'Penicillin (Rash)' },
  ENCOUNTER: { week: 'Week 2', 
    day: 'Tuesday', type: 'initial collaborative practice management', difficulty: 'Core', difficultyTone: 'teal',
    setting: 'ambulatory care pharmacy clinic',
    referralSource: 'primary care provider (PCP)',
    chiefConcern: "I came to check on my blood pressure and cholesterol, and my doctor said we should talk about my kidneys too.",
    snapshotSummary: 'CKD G3aA2 with a significant drop in eGFR over the past year, elevated LDL-C on no therapy, and stage 1 HTN. She was prescribed rosuvastatin 6 months ago but never started it.',
    diseaseStates: ['Hyperlipidemia', 'CKD G3aA2', 'Hypertension', 'Obesity', 'Preventive Care'],
    learningObjectives: [
      'Understand CKD risk stratification and staging (G3aA2)',
      'Uncover a patient access barrier (cost) and fear of adverse effects (SAMS)',
      'Address clinical inertia by initiating a guideline-directed high-intensity statin',
      'Address blood pressure, obesity, and immunization gaps',
    ],
  },
  VITALS: { bp: '138/84', bpRepeat: '136/82', hr: '74', rr: '16', temp: '98.6°F', weight: '96 kg', height: "5'4\"", bmi: '36.3',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'high' } },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.6', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.20', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '53', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Moderate drop (G3a)' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal', note: 'Normal baseline for statin safety' },
    { label: 'ALT', value: '21', unit: 'U/L', flag: 'normal', note: 'Normal baseline for statin safety' },
    { label: 'Total cholesterol', value: '234', unit: 'mg/dL', flag: 'high' },
    { label: 'LDL-C', value: '148', unit: 'mg/dL', flag: 'high', note: 'Significantly elevated' },
    { label: 'HDL-C', value: '46', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '200', unit: 'mg/dL', flag: 'high' },
    { label: 'UACR', value: '165', unit: 'mg/g', flag: 'warn', note: 'Moderately increased (A2); prior 152 mg/g documented 5 months ago' },
  ],
  ALERTS: [
    { level: 'warn', text: 'CKD G3aA2 — moderate decrease in GFR (53) and persistent albuminuria (165).' },
    { level: 'warn', text: 'Untreated hyperlipidemia — high cardiovascular and renal risk.' },
  ],
  PROBLEMS: [
    { name: 'Hyperlipidemia', detail: 'LDL-C 148 mg/dL, untreated', flag: 'high' },
    { name: 'Chronic kidney disease, G3aA2', detail: 'eGFR 53, UACR 165 (A2)', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP mid-130s/80s', flag: 'warn' },
    { name: 'Obesity', detail: 'BMI 36.3', flag: 'warn' },
    { name: 'Therapeutic inertia secondary to non-initiation', detail: 'Prescribed rosuvastatin 20 mg unstarted due to cost/fears', flag: 'warn' },
    { name: 'Preventive care gaps', detail: 'Immunizations due: PCV20, Shingrix, Tdap overdue', flag: 'warn' }
  ],
  MEDICATIONS: [
    { name: 'Losartan', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: '' },
    { name: 'Amlodipine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
  ],
  ALLERGIES: [{ substance: 'Penicillin', reaction: 'Rash (childhood)', severity: 'Moderate', type: 'Allergy', date: 'Childhood', source: 'Patient reported' }],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'None documented', flag: 'warn' },
    { name: 'Herpes zoster (Shingrix)', status: 'None documented', flag: 'warn' },
    { name: 'Tdap', status: 'Overdue (last documented 12 years ago)', flag: 'warn' }
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '64-year-old female referred by her primary care provider (PCP) for initial collaborative practice management of uncontrolled hyperlipidemia (LDL-C 148 mg/dL), essential hypertension, and chronic kidney disease Stage G3aA2. Reports taking active blood pressure medications (losartan 50 mg, amlodipine 10 mg) faithfully as prescribed with no skipped or stretched doses. Rosuvastatin 20 mg PO daily was prescribed 6 months ago but never initiated due to out-of-pocket cost concerns on a fixed income, embarrassment discussing affordability with her doctor, and fear of statin-associated muscle aches.' },
    { label: 'Past Medical & Surgical History', value: 'Essential hypertension (diagnosed 15 years ago), hyperlipidemia (diagnosed 12 years ago), and chronic kidney disease Stage G3aA2 (newly identified). Surgical history: cholecystectomy (~10 years ago) and total abdominal hysterectomy at age 45.' },
    { label: 'Review of Systems', value: 'Denies chest pain, shortness of breath, palpitations, syncope, lower extremity edema, gross hematuria, or urinary complaints. Reports occasional mild fatigue and occasional nighttime leg cramping.' },
    { label: 'Social history', value: 'Retired elementary school teacher, widowed, lives independently in her own home. Never smoker. Rare alcohol use (holiday wine). Denies recreational drug use. Diet consists of frequent convenience/packaged foods with elevated sodium; sedentary lifestyle.' },
    { label: 'Family history', value: 'Father had hypertension, hyperlipidemia, and myocardial infarction at age 63. Mother had hypertension, chronic kidney disease, and stroke at age 72. Sister has hypertension and hyperlipidemia.' },
    { label: 'Patient Goals & Values', value: 'Deeply values maintaining independent living in her home. Primary health goals are avoiding future dialysis and protecting her kidneys and cardiovascular health.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Body Surface Area (Mosteller)', value: '2.08 m²', flag: 'normal' },
    { label: '10-Year ASCVD Risk Score', value: '14.5% — High risk', flag: 'high' },
    { label: 'Rosuvastatin fill history', value: 'Prescribed ~6 months ago — no claims on record (unstarted)', flag: 'warn' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Statin history (never started?)', placeholder: 'Prior prescriptions, unfilled meds…' },
    { key: 'cost', label: 'Cost / access barrier', placeholder: 'Affordability, embarrassment, insurance…' },
    { key: 'concerns', label: 'Statin concerns / fears', placeholder: 'Side-effect worries…' },
  ],
  GUIDING_QUESTIONS: [
    'What is the difference between nonadherence and noninitiation?',
    'What barriers prevented rosuvastatin initiation?',
    'Why is CKD considered a risk-enhancing condition?',
    'How would you address concerns about statin adverse effects?',
    'How would you determine whether cost is a barrier?',
    'What follow-up would be necessary after therapy initiation?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w2-angela-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I get a skin rash from Penicillin—I was told I broke out in a rash when given it as a child." },
    { id: 'w2-angela-tue_symptoms', topic: 'Symptoms and ROS', field: 'symptoms', keywords: ['symptom', 'symptoms', 'fatigue', 'tired', 'cramp', 'cramps', 'leg', 'pain', 'chest pain', 'shortness of breath'], response: "I feel mostly fine day-to-day. Occasionally I'll notice mild fatigue or some nighttime leg cramping, but no chest pain, shortness of breath, or severe symptoms." },
    { id: 'w2-angela-tue_durations', topic: 'Condition durations', field: 'durations', keywords: ['how long', 'duration', 'diagnosed', 'years', 'history', 'hypertension', 'cholesterol'], response: "I have had high blood pressure for about 15 years, and high cholesterol for roughly 12 years. The kidney issue was just brought up recently." },
    { id: 'w2-angela-tue_goals', topic: 'Health goals', field: 'goals', keywords: ['goal', 'goals', 'dialysis', 'kidney', 'protect', 'priority', 'motivation'], response: "My mother had chronic kidney disease and stroke, so my biggest goal is protecting my kidneys and avoiding ever ending up on dialysis, while keeping my heart healthy." },
    { id: 'w2-angela-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take Calcium 600 mg plus Vitamin D3 daily for bone health, and Tylenol occasionally for mild pain." },
    { id: 'w2-angela-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a glass of wine on holidays or special occasions." },
    { id: 'w2-angela-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w2-angela-tue_drugs', topic: 'Recreational drug use', field: 'social', keywords: ['drug', 'illicit', 'marijuana', 'cocaine', 'recreational', 'substance'], response: "I have never used illicit drugs or recreational substances." },
    { id: 'w2-angela-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling', 'family', 'dad', 'mom', 'relatives', 'hereditary'], response: "My father had high blood pressure, high cholesterol, and had a heart attack at age 63. My mother had high blood pressure and chronic kidney disease, and she suffered a stroke at age 72. My sister also has high cholesterol and high blood pressure." },
    { id: 'w2-angela-tue_psh', topic: 'Past surgical history', field: 'psh', keywords: ['surgery', 'surgeries', 'operation', 'cholecystectomy', 'hysterectomy', 'gallbladder', 'uterus', 'surgical', 'procedure'], response: "I had my gallbladder removed (cholecystectomy) about 10 years ago, and I also had a total abdominal hysterectomy when I was 45." },
    { id: 'w2-angela-tue_hosp', topic: 'Hospitalization / ED visits', field: 'hospitalization', keywords: ['hospital', 'hospitalization', 'admit', 'admission', 'emergency room', 'hospitalized', 'admitted', 'admissions'], response: "No, I have not had any recent hospitalizations or emergency department visits." },
    { id: 'w2-angela-tue_ref', topic: 'Referral source and trigger', field: 'hpi', keywords: ['refer', 'referred', 'pcp', 'primary care', 'doctor', 'why are you here', 'sent'], response: "My primary care provider (PCP) referred me here for comprehensive evaluation of my cardiovascular risk and elevated cholesterol, and to review my kidney numbers." },
    { id: 'w2-angela-tue_adherence_active', topic: 'Adherence to active blood pressure pills', field: 'adherence', keywords: ['adherence', 'take pills', 'regularly', 'losartan', 'amlodipine', 'stretch', 'skip'], response: "I take my blood pressure pills (losartan and amlodipine) faithfully every morning as prescribed. I never skip or stretch those doses." },
    { id: 'w2-angela-tue_rosuv_dose', topic: 'Rosuvastatin prior prescription dose', field: 'adherence', keywords: ['rosuvastatin', 'dose', 'how much', 'strength', 'prescribed'], response: "My doctor originally prescribed rosuvastatin 20 mg once daily about 6 months ago, but with the cost and my worries about muscle aches, I never started taking it." },
    { id: 'w2-angela-tue_cost_comm', topic: 'Cost anxiety and provider communication', field: 'cost', keywords: ['cost', 'afford', 'expensive', 'copay', 'fixed income', 'embarrassed', 'talk'], response: "I was very uncertain if I could afford the ongoing copays on my fixed retirement income, and I felt too embarrassed to bring up the price with my doctor at the time." },
    { id: 'w2-angela-tue_ros', topic: 'Review of systems pertinent negatives', field: 'symptoms', keywords: ['chest pain', 'short of breath', 'shortness of breath', 'palpitations', 'syncope', 'edema', 'hematuria', 'urinary', 'complaints', 'swelling'], response: "Review of systems: I deny having any chest pain, shortness of breath, heart palpitations, syncope or fainting spells, swelling in my legs or feet (edema), blood in my urine (gross hematuria), or urinary complaints." },
    { id: 'w2-angela-tue_indep', topic: 'Independent living value', field: 'goals', keywords: ['independent', 'living', 'alone', 'mobility', 'value'], response: "Living independently on my own in my home is something I value deeply. Staying healthy, mobile, and avoiding disability is very important to me." },
    { id: 'w2-angela-tue_hbpm', topic: 'Home blood pressure readings', field: 'homeBp', keywords: ['home bp', 'check at home', 'cuff', 'readings', 'log'], response: "I check my blood pressure at home occasionally, maybe once a week or every couple of weeks. When I check, it's usually around 140/85 mmHg, but I haven't kept a written log." },
    { id: 'b_statin', topic: 'Rosuvastatin never started', field: 'adherence',
      keywords: ['rosuvastatin', 'prescribed', 'never started', 'new', 'cholesterol medication', 'unfilled', 'previous', 'change', 'pick up'],
      response: "My doctor prescribed rosuvastatin about six months ago… but I never started it. I'm sorry — I felt embarrassed to bring it up." },
    { id: 'b_cost', topic: 'Cost barrier', field: 'cost',
      keywords: ['cost', 'afford', 'expensive', 'pay', 'copay', 'price', 'money', 'insurance'],
      response: "Honestly, I was worried about the cost. Some of these medications get pretty expensive, and I'm on a fixed income." },
    { id: 'b_fear', topic: 'Statin fear', field: 'concerns',
      keywords: ['side effect', 'muscle', 'safe', 'afraid', 'worried', 'concern', 'risk', 'stories'],
      response: "I also hear a lot of stories about people having muscle problems from those medications, so I was a little nervous." },
    { id: 'w2-angela-tue_marital', topic: 'Marital status', field: 'familyHistory', keywords: ['marital', 'married', 'husband', 'widow', 'spouse'], response: "I am widowed. My husband passed away a few years ago." },
    { id: 'w2-angela-tue_occupation', topic: 'Occupation', field: 'exercise', keywords: ['job', 'work', 'occupation', 'teacher', 'school'], response: "I'm a retired elementary school teacher." },
    { id: 'b_bp', topic: 'Home BP habits', field: 'homeBp',
      keywords: ['home', 'check', 'blood pressure at home', 'monitor', 'log'],
      response: "I check my blood pressure every once in a while, but I don't keep a written log." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'b_hld', 
      title: 'Hyperlipidemia & Therapeutic Inertia (Non-Initiation)', 
      icon: 'Droplet', 
      color: '13314f',
      questions: [
        { 
          key: 'b_hld_eval', 
          q: 'Evaluation of untreated hyperlipidemia, ASCVD risk, and non-initiation barriers:', 
          defaultAnswer: 'Status: Untreated severe hyperlipidemia with markedly elevated LDL-C of 148 mg/dL (Total Chol 234–238 mg/dL, Triglycerides 185–200 mg/dL, HDL-C 41–46 mg/dL). Baseline 10-year ASCVD risk is high at 14.5%–17.4%. Key ASCVD risk-enhancing conditions include CKD G3aA2, essential hypertension, Class II obesity (BMI 36.3 kg/m²), and advanced age (64 years). Absent statin therapy is clearly inadequate for this high-risk patient. Crucially, this reflects therapeutic inertia secondary to patient non-initiation rather than inappropriate prescribing or pharmacologic failure: rosuvastatin 20 mg PO daily was prescribed 6 months ago but never initiated due to unaddressed patient barriers (financial anxiety on fixed retirement income and fear of statin-associated muscle symptoms). Cost-related non-initiation represents a major threat to long-term cardiovascular and renal disease control. Clinical strategy must resolve these barriers through reassuring adverse effect counseling (actual low incidence of severe myopathy, protocol for managing aches), identifying affordable generic pharmacy options ($4–$10/month), and shared decision-making to successfully initiate guideline-directed high-intensity statin therapy (rosuvastatin 20 mg PO daily) targeting LDL-C <70–100 mg/dL (or ≥50% reduction) per 2026 AHA/ACC Cholesterol Guidelines.' 
        }
      ] 
    },
    { 
      id: 'b_ckd', 
      title: 'Chronic Kidney Disease, Stage G3aA2', 
      icon: 'FlaskConical', 
      color: '0891b2',
      questions: [
        { 
          key: 'b_ckd_eval', 
          q: 'Evaluation of CKD staging, cardiorenal risk, and renoprotection:', 
          defaultAnswer: 'Status: CKD Stage G3aA2, stable but at elevated cardiorenal risk. Dual-axis classification: Stage G3a derived from moderately-to-severely decreased eGFR of 53–54 mL/min/1.73m² (SCr 1.18–1.20 mg/dL) and Category A2 derived from persistent moderately increased albuminuria with UACR 165 mg/g (supported by prior UACR 152 mg/g documented 5 months ago, confirming chronicity and slightly worsening trend). Cites KDIGO 2024 CKD Guidelines: reduced eGFR and persistent albuminuria independently and synergistically predict CKD progression, end-stage kidney disease, and cardiovascular events. Combined risk demonstrates that continued, proactive cardiorenal risk reduction remains essential. Active ARB therapy (losartan 50 mg daily) provides vital renoprotective antiproteinuric effects and intraglomerular pressure reduction. AST (20–22 U/L) and ALT (19–21 U/L) are completely within normal limits, establishing safe baseline liver function prior to statin initiation.' 
        }
      ] 
    },
    { 
      id: 'b_htn', 
      title: 'Essential Hypertension', 
      icon: 'HeartPulse', 
      color: '13314f',
      questions: [
        { 
          key: 'b_htn_eval', 
          q: 'Evaluation of blood pressure control, target, and management strategy:', 
          defaultAnswer: 'Status: Essential hypertension, above treatment goal. Office BP is 138/84 mmHg (repeat 136/82 mmHg; ref 142/86, 140/84 mmHg); occasional home BP readings (~140/85 mmHg) corroborate in-office elevation. Blood pressure target is <130/80 mmHg per 2025 AHA/ACC Hypertension Guidelines in CKD (with KDIGO systolic target <120 mmHg when standardized measurement is tolerated). Contributing factors include high-sodium convenience food intake and lack of regular physical activity. Active regimen (losartan 50 mg PO daily and amlodipine 10 mg PO daily) is well-tolerated. Defer immediate pharmacologic intensification today to prevent polypharmacy and avoid confusing side-effect profiles while initiating rosuvastatin; prioritize establishing regular home BP monitoring, sodium restriction, and adherence assessment, reassessing BP for potential losartan titration to 100 mg at follow-up.' 
        }
      ] 
    },
    { 
      id: 'b_obesity', 
      title: 'Obesity (Class II, BMI 36.3 kg/m²)', 
      icon: 'Scale', 
      color: 'ca8a04',
      questions: [
        { 
          key: 'b_ob_eval', 
          q: 'Evaluation of obesity, cardiorenal impact, and lifestyle intervention:', 
          defaultAnswer: 'Classification: Weight 96 kg, height 5\'4" (64 inches, 1.6256 m), reconciles arithmetically to BMI 36.3 kg/m², classifying as Class II Obesity. Obesity directly contributes to cardiovascular risk, exacerbates essential hypertension, increases intraglomerular hyperfiltration, and accelerates CKD progression. Per 2026 AHA/ACC and KDIGO 2024 guidelines, modest 5–10% weight loss provides substantial cardiorenal benefits. Patient is motivated to maintain independent living; structured lifestyle modifications focusing on fresh meal preparation, dietary sodium reduction, and regular walking are indicated.' 
        }
      ] 
    },
    { 
      id: 'b_prevent', 
      title: 'Preventive Care & Health Maintenance Gaps', 
      icon: 'Heart', 
      color: '7c3aed',
      questions: [
        { 
          key: 'b_prev_eval', 
          q: 'Evaluation of immunization status and preventive health needs:', 
          defaultAnswer: 'Status: Preventive care and immunization gaps identified. Adults with CKD G3a and elevated ASCVD risk have increased susceptibility to vaccine-preventable infections. Indicated immunizations: Pneumococcal conjugate vaccination (PCV20) for CKD; Recombinant Zoster vaccine (Shingrix 2-dose series) for age ≥50; and Tdap booster is overdue (>10-year booster interval per CDC guidelines). Recommend verifying state immunization registry and administering indicated vaccines.' 
        }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { 
      id: 'b_p_hld', 
      title: 'Lipid / Statin initiation plan', 
      options: [
        { key: 'b_hld_o1', label: 'Initiate rosuvastatin 20 mg PO once daily at bedtime per 2026 AHA/ACC Cholesterol Guidelines', correct: true },
        { key: 'b_hld_o2', label: 'Treatment target: LDL-C <70-100 mg/dL (or >=50% reduction from baseline 148 mg/dL)', correct: true },
        { key: 'b_hld_o3', label: 'Discuss statin benefits and reassure patient regarding low incidence of severe adverse effects; establish plan to report any muscle aches', correct: true },
        { key: 'b_hld_o4', label: 'Tie statin choice and high-intensity dosing directly to high ASCVD risk score and CKD G3aA2 risk-enhancer status', correct: true },
        { key: 'b_hld_o5', label: 'Order repeat lipid panel in 6-12 weeks to evaluate response and tolerability', correct: true },
        { key: 'b_hld_o6', label: 'Re-prescribe an unaffordable brand without addressing cost', correct: false },
      ] 
    },
    { 
      id: 'b_p_access', 
      title: 'Affordability & access plan', 
      options: [
        { key: 'b_acc_o1', label: 'Identify affordable pharmacy options: navigate Medicare Part D low-cost generic copays ($4-$10/month) or $4 retail generic formularies', correct: true },
        { key: 'b_acc_o2', label: 'Encourage open, regular communication about prescription affordability concerns to prevent cost-related non-initiation', correct: true },
      ] 
    },
    { 
      id: 'b_p_bp', 
      title: 'Chronic kidney disease & antihypertensive plan', 
      options: [
        { key: 'b_bp_o1', label: 'Continue losartan 50 mg PO once daily for renal and cardiovascular protection (reduces intraglomerular pressure and albuminuria)', correct: true },
        { key: 'b_bp_o2', label: 'Continue amlodipine 10 mg PO once daily for essential hypertension control', correct: true },
        { key: 'b_bp_o3', label: 'Blood pressure treatment target: <130/80 mmHg per 2025 AHA/ACC Hypertension Guidelines (KDIGO <120 SBP when tolerated)', correct: true },
        { key: 'b_bp_o4', label: 'Order repeat spot UACR, serum creatinine, and CMP in 6-12 weeks to monitor renal function and albuminuria', correct: true },
        { key: 'b_bp_o5', label: 'Recommend initiating structured home blood pressure monitoring (HBPM) >=3-4 days/week and recording a written log', correct: true },
        { key: 'b_bp_o6', label: 'Stop the ARB because eGFR is 53-54', correct: false },
      ] 
    },
    { 
      id: 'b_p_life', 
      title: 'Lifestyle & weight management plan', 
      options: [
        { key: 'b_life_o1', label: 'Recommend increasing physical activity: initiate regular walking program, progressing toward >=150 minutes/week of moderate exercise', correct: true },
        { key: 'b_life_o2', label: 'Counsel on dietary sodium reduction (<2000 mg/day) by cutting down on packaged convenience foods and salty processed items', correct: true },
        { key: 'b_life_o3', label: 'Counsel on increasing fresh produce (fruits and vegetables) and home-cooked meals', correct: true },
        { key: 'b_life_o4', label: 'Establish realistic weight-loss goal of 5-10% (5-10 kg) to lower blood pressure, reduce intraglomerular hyperfiltration, and decrease CV risk', correct: true },
      ] 
    },
    { 
      id: 'b_p_prevent', 
      title: 'Preventive care / immunization plan', 
      options: [
        { key: 'b_prev_o1', label: 'Verify state immunization registry records', correct: true },
        { key: 'b_prev_o2', label: 'Recommend Pneumococcal conjugate vaccination (PCV20) for CKD', correct: true },
        { key: 'b_prev_o3', label: 'Recommend Recombinant Zoster vaccine (Shingrix) 2-dose series (dose 1 today, dose 2 in 2-6 months) for age >=50', correct: true },
        { key: 'b_prev_o4', label: 'Administer Tdap booster today (overdue per CDC guidelines)', correct: true },
      ] 
    },
    { 
      id: 'b_p_followup', 
      title: 'Follow-up & monitoring plan', 
      options: [
        { key: 'b_foll_o1', label: 'Schedule follow-up visit in 6-8 weeks', correct: true },
        { key: 'b_foll_o2', label: 'Order pre-visit laboratory testing: CMP (renal function, electrolytes, LFTs), spot UACR, and fasting lipid panel', correct: true },
        { key: 'b_foll_o3', label: 'Reassess medication initiation, affordability, and statin tolerability at follow-up visit', correct: true },
        { key: 'b_foll_o4', label: 'Review home blood pressure log and reassess office BP for potential losartan titration to 100 mg', correct: true },
      ] 
    },
  ],
  GUIDING_QUESTIONS: [
    'What is the difference between nonadherence and noninitiation?',
    'What barriers prevented rosuvastatin initiation?',
    'Why is CKD considered a risk-enhancing condition?',
    'How would you address concerns about statin adverse effects?',
    'How would you determine whether cost is a barrier?',
    'What follow-up would be necessary after therapy initiation?'
  ],
  COUNSELING: [
    { id: 'b_c1', title: 'Affordable, reassuring statin start', body: [
      "It's completely okay that you didn't start it — let's solve the cost together so you can.",
      "Rosuvastatin is often very affordable through your plan; we'll check and find the lowest-cost option.",
      "Serious muscle problems are rare. We'll start it, watch for any aches, and adjust if needed." ] },
  ],
  PRECEPTOR: {
    keyIssues: ['Rosuvastatin prescribed but never started (cost + embarrassment)', 'Markedly elevated LDL on a weak statin', 'CKD G3a raises CV risk', 'BP above goal'],
    assessment: ['Her LDL reflects non-initiation, not statin failure', 'CKD makes aggressive lipid lowering more important', 'Cost is the medication-related problem to solve'],
    plan: ['Confirm/reconcile; initiate affordable high-intensity rosuvastatin', 'Address cost + statin fear', 'Continue ARB; optimize BP + home monitoring', 'Recheck lipids/UACR in ~3 months'],
    pearls: ['An "uncontrolled" LDL is often an access problem', 'CKD is a cardiovascular risk enhancer — treat lipids accordingly'],
    mistakes: ['Labeling her nonadherent without finding the cost barrier', 'Re-prescribing an unaffordable option'],
    followupQuestions: ['Which covered statin fits her plan?', 'How will you confirm she actually starts it?'],
    checklist: ['Uncovered never-started statin', 'Addressed cost + fear', 'Initiated appropriate-intensity statin', 'Optimized BP/kidney protection'],
  },
})

const angelaWed = makeCase({
  id: 'w2-angela-wed',
  IMMUNIZATIONS: angelaTue.IMMUNIZATIONS,
  ALLERGIES: angelaTue.ALLERGIES,
  PATIENT: angelaTue.PATIENT,
  ENCOUNTER: { week: 'Week 2', 
    day: 'Wednesday', type: '3-month follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I started the rosuvastatin — it was cheaper than I feared.",
    setting: 'ambulatory care pharmacy clinic under collaborative practice agreement',
    snapshotSummary: 'Three months after starting an affordable high-intensity statin. Big LDL drop and good tolerability; confirm the win and keep optimizing BP.',
    diseaseStates: ['Hyperlipidemia', 'CKD G3aA2', 'Hypertension', 'Obesity'],
    learningObjectives: ['Interpret LDL response after fixing access', 'Confirm tolerability and sustainability', 'Continue BP/kidney optimization', 'Address preventive care gaps'],
  },
  VITALS: { bp: '136/82', bpRepeat: '134/80', hr: '72', rr: '16', temp: '98.4°F', weight: '95 kg', height: "5'4\"", bmi: '35.9',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'high' } },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.6', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.20', unit: 'mg/dL', flag: 'warn', note: 'Stable from baseline 1.20 mg/dL' },
    { label: 'eGFR', value: '53', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Stable Stage G3a filtration; baseline 53 mL/min' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal', note: 'Normal transaminase confirming absence of statin hepatotoxicity' },
    { label: 'ALT', value: '21', unit: 'U/L', flag: 'normal', note: 'Normal transaminase confirming absence of statin hepatotoxicity' },
    { label: 'Total cholesterol', value: '184', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '89', unit: 'mg/dL', flag: 'warn', note: 'Improved from 148 mg/dL (~40% reduction on rosuvastatin 20 mg)' },
    { label: 'HDL-C', value: '44', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '165', unit: 'mg/dL', flag: 'normal' },
    { label: 'UACR', value: '160', unit: 'mg/g', flag: 'warn', note: 'Stable from baseline 165 mg/g; persistent Category A2 moderately increased albuminuria' },
  ],
  ALERTS: [{ level: 'info', text: 'Marked LDL reduction after fixing the cost barrier; statin well tolerated.' }],
  PROBLEMS: [
    { name: 'Hyperlipidemia / Elevated ASCVD Risk', detail: 'LDL-C 89 mg/dL (improved from 148 on Rosuvastatin 20 mg PO daily; target <70-100)', flag: 'normal' },
    { name: 'Chronic kidney disease, Stage G3aA2', detail: 'eGFR 53 mL/min (Stage G3a), UACR 160 mg/g (persistent Category A2)', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP 136/82 mmHg (repeat 134/80; improved from baseline 138/84; target <130/80)', flag: 'warn' },
    { name: 'Obesity (Class II)', detail: 'Weight 95 kg (down 1 kg from 96 kg), BMI 35.9 kg/m²', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Losartan', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: 'Continue' },
    { name: 'Amlodipine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: 'Continue' },
    { name: 'Rosuvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia / primary ASCVD prevention', notes: 'Started; affordable via plan; continue' },
  ],
  ALLERGIES: [{ substance: 'Penicillin', reaction: 'Rash (childhood)', severity: 'Moderate', type: 'Allergy', date: 'Childhood', source: 'Patient reported' }],
  SUBJECTIVE_DOCUMENTED: [
    {
      label: 'Reason for visit & clinical setting',
      value: 'Scheduled 3-month follow-up encounter in an ambulatory care pharmacy clinic under collaborative practice agreement for comprehensive cardiorenal risk reduction, hyperlipidemia, and hypertension management.'
    },
    {
      label: 'Interval history & general wellbeing',
      value: 'Patient reports doing well overall since previous visit. Successfully initiated rosuvastatin 20 mg PO daily and taking it consistently (missed only 1–2 doses in 3 months). Reassured by affordability ($4 generic retail copay) and reports great peace of mind.'
    },
    {
      label: 'Statin tolerability & muscle symptoms',
      value: 'Reports mild, bilateral lower-extremity (thigh) muscle soreness after longer walking sessions. Symptoms are non-progressive, not present at rest, non-limiting, and do not interfere with daily activities. Patient is uncertain whether exertional soreness or medication effect; explicitly wishes to continue therapy because cholesterol has improved and protecting kidney/heart health is her top priority.'
    },
    {
      label: 'Past Medical History (PMH)',
      value: 'Essential hypertension (diagnosed 15 years ago), hyperlipidemia (diagnosed 12 years ago), chronic kidney disease Stage G3aA2 (identified ~6 months ago), and Class II Obesity (BMI 35.9 kg/m²).'
    },
    {
      label: 'Past Surgical History (PSH)',
      value: 'Cholecystectomy (gallbladder removal ~10 years ago) and total abdominal hysterectomy at age 45. No other surgeries.'
    },
    {
      label: 'Social History',
      value: 'Occupation: Retired elementary school teacher. Marital/living status: Widowed, lives independently. Tobacco status: Never smoker (denies any tobacco history). Alcohol use: Rarely drinks alcohol (glass of wine on special occasions only). Recreational drugs: Explicitly denies any illicit or recreational drug use. Physical activity: Walking 3–4 days/week for 20–30 minutes. Diet: Cooking more fresh meals from scratch at home and cutting down on salty packaged/convenience foods.'
    },
    {
      label: 'Review of Systems (ROS)',
      value: 'Cardiovascular/Pulmonary/Neurologic/Renal: Explicitly denies chest pain, shortness of breath, palpitations, syncope, dizziness, and lower extremity edema. Explicitly denies gross hematuria or urinary complaints.'
    },
    {
      label: 'Patient Goals & Motivations',
      value: 'Top personal goal is maintaining independent living and avoiding dialysis (motivated by mother suffering from severe CKD and stroke). Strongly committed to continuing cardiorenal therapy.'
    },
    {
      label: 'Home Blood Pressure Monitoring',
      value: 'Home BP log shows 7-day average of ~136/82 mmHg (range 130–140/78–84 mmHg), consistent with office BP readings.'
    }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Body Surface Area (Mosteller)', value: '2.07 m²', flag: 'normal' },
    { label: '10-Year ASCVD Risk Score', value: '14.5% — High risk (improved from baseline 17.4% [or 14.5%])', flag: 'high' },
    { label: 'Home BP log', value: '7-day home average 136/82 mmHg (range 130–140/78–84 mmHg), consistent with office BP', flag: 'normal' },
    { label: 'Prior Visit Trend Comparisons', value: 'LDL-C: 148 → 89 mg/dL; UACR: 165 → 160 mg/g; ASCVD Risk: 17.4% → 14.5%; BP: 138/84 → 136/82 mmHg; Weight: 96 → 95 kg', flag: 'normal' },
    { label: 'Objective Clinical Interpretations', value: 'eGFR 53: Stable Stage G3a filtration; UACR 160: Stable persistent Category A2 moderately increased albuminuria; AST 22 / ALT 21: Normal transaminases confirming absence of statin hepatotoxicity; Lipid panel: Reflects highly effective initial therapeutic response to rosuvastatin initiation; Home BP: Corroborates office readings, running above ideal CKD target', flag: 'normal' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'sideEffects', label: 'Did she start it / tolerability', placeholder: 'Initiation, side effects…' },
    { key: 'cost', label: 'Affordability now', placeholder: 'Is it sustainable?' },
  ],
  GUIDING_QUESTIONS: [
    'What factors suggest this may not represent clinically significant SAMS?',
    'What likely caused the LDL-C improvement?',
    'Why should affordability be reassessed even after initiation?',
    'What did this encounter teach about therapeutic inertia?',
    'Would you stop rosuvastatin today?',
    'What monitoring should occur before the next visit?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w2-angela-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I get a skin rash from Penicillin—I was told I broke out in a rash when given it as a child." },
    { id: 'w2-angela-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take Calcium 600 mg plus Vitamin D3 daily for bone health, and Tylenol occasionally for mild pain." },
    { id: 'w2-angela-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a glass of wine on holidays or special occasions." },
    { id: 'w2-angela-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w2-angela-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling', 'family', 'dad', 'mom', 'relatives', 'hereditary'], response: "My father had high blood pressure, high cholesterol, and had a heart attack at age 63. My mother had high blood pressure and chronic kidney disease, and she suffered a stroke at age 72. My sister also has high cholesterol and high blood pressure." },
    { id: 'w2-angela-wed_psh', topic: 'Past surgical history', field: 'psh', keywords: ['surgery', 'surgeries', 'operation', 'cholecystectomy', 'hysterectomy', 'gallbladder', 'uterus', 'surgical', 'procedure'], response: "I had my gallbladder removed (cholecystectomy) about 10 years ago, and I also had a total abdominal hysterectomy when I was 45." },
    { id: 'w2-angela-wed_hosp', topic: 'Hospitalization / ED visits', field: 'hospitalization', keywords: ['hospital', 'hospitalization', 'admit', 'admission', 'emergency room', 'hospitalized', 'admitted', 'admissions'], response: "No, I have not had any recent hospitalizations or emergency department visits." },
    { id: 'bw_bp', topic: 'Home BP log', field: 'homeBp', keywords: ['home', 'check', 'blood pressure at home', 'monitor', 'log', 'cuff', 'readings', 'average'], response: "I've been checking it at home. My readings average around 136/82 mmHg, usually ranging from 132 to 140 for the top number and 78 to 84 for the bottom number." },
    { id: 'w2-angela-wed_diet', topic: 'Diet and exercise', field: 'exercise', keywords: ['diet', 'food', 'eating', 'exercise', 'walk', 'activity', 'routine', 'packaged', 'sodium'], response: "I've been cooking more fresh meals at home and cutting down on salty packaged and convenience foods. I'm also walking regularly." },
    { id: 'w2-angela-wed_goals', topic: 'Dialysis prevention goal', field: 'goals', keywords: ['dialysis', 'kidney', 'protect', 'goal', 'motivation'], response: "Protecting my kidneys and avoiding dialysis like my mother had to deal with is my number one priority." },
    { id: 'bw_start', topic: 'Rosuvastatin started & tolerated', field: 'sideEffects', keywords: ['start', 'rosuvastatin', 'muscle', 'side effect', 'tolerate', 'ache', 'how'],
      response: "Yes — I started it and I've been taking it. I have noticed some occasional mild muscle soreness in both of my legs, especially after I go for my walks. It's not limiting my daily activities, but I'm not sure if it's from the walking or the medication." },
    { id: 'bw_cost', topic: 'Affordability', field: 'cost', keywords: ['cost', 'afford', 'pay', 'cheaper', 'price', 'sustain'],
      response: "It turned out to be much more affordable through my insurance than I expected — I can keep this up." },
  ],
  ASSESSMENT_CARDS: [
    {
      id: 'bw_hld',
      title: 'Hyperlipidemia / Primary ASCVD Prevention',
      icon: 'Droplet',
      color: '13314f',
      questions: [
        {
          key: 'bw_hld_eval',
          q: 'Evaluation of lipid control, rosuvastatin response, and ASCVD risk:',
          defaultAnswer: 'Status: Hyperlipidemia, significantly improved. LDL-C decreased from baseline 148 mg/dL to 89 mg/dL, reflecting a favorable therapeutic response (~40% reduction) following successful initiation of rosuvastatin 20 mg PO daily. Calculated 10-year ASCVD risk improved from 17.4% (or 14.5% baseline) to 14.5%. Per 2026 AHA/ACC Cholesterol Guidelines, statin therapy is the cornerstone of primary ASCVD prevention in patients with multiple risk enhancers. CKD Stage G3aA2 is an established ASCVD risk-enhancing condition, along with essential hypertension, Class II obesity, age (66), and positive family history of cardiovascular disease and stroke (father MI at 63, mother stroke at 72). Residual risk factors warrant ongoing risk reduction. Favorable response supports continuing rosuvastatin 20 mg PO daily; defers immediate intensification today through shared decision-making while monitoring tolerability.'
        }
      ]
    },
    {
      id: 'bw_inertia',
      title: 'Therapeutic Inertia & Medication Access (Cost Barrier Overcome)',
      icon: 'Unlock',
      color: '059669',
      questions: [
        {
          key: 'bw_inertia_eval',
          q: 'Clinical insight into implementation barriers and resolved affordability:',
          defaultAnswer: 'Status: Resolution of therapeutic inertia and prescription access barrier. This encounter demonstrates the critical clinical insight that prior treatment \'failure\' was due to prescription non-initiation resulting from cost barriers ($180/month brand quote), rather than biologic drug resistance. Identifying and resolving implementation barriers by identifying a $4 generic retail copay resulted in successful rosuvastatin initiation, high adherence, and substantial LDL-C lowering. Affordability has been resolved as an active barrier, but access and out-of-pocket costs must continue to be assessed at future visits to reinforce open communication and sustain long-term adherence.'
        }
      ]
    },
    {
      id: 'bw_ckd',
      title: 'Chronic Kidney Disease Stage G3aA2',
      icon: 'FlaskConical',
      color: '0891b2',
      questions: [
        {
          key: 'bw_ckd_eval',
          q: 'Evaluation of CKD staging, renal stability, and albuminuria category:',
          defaultAnswer: 'Status: CKD Stage G3aA2, stable. Dual-axis classification: eGFR 53 mL/min/1.73m² (SCr 1.20 mg/dL) confirms stable Stage G3a moderate filtration reduction; spot UACR is 160 mg/g (stable compared to baseline 165 mg/g), confirming persistent Category A2 moderately increased albuminuria. Cites KDIGO 2024 CKD Guideline: dual-axis classification is essential for comprehensive risk stratification; persistent CKD independently contributes to elevated cardiovascular risk. Stable kidney function and minimal albuminuria change support continuing current renoprotective therapy with losartan.'
        }
      ]
    },
    {
      id: 'bw_htn',
      title: 'Essential Hypertension',
      icon: 'HeartPulse',
      color: '13314f',
      questions: [
        {
          key: 'bw_htn_eval',
          q: 'Evaluation of blood pressure status, home BP log, and control targets:',
          defaultAnswer: 'Status: Essential hypertension, improved compared with baseline but above ideal target. Office BP is 136/82 mmHg (repeat 134/80 mmHg), improved from initial visit (138/84, repeat 136/82 mmHg). Home BP log (average 136/82 mmHg, range 130-140/78-84 mmHg) corroborates office readings. Cites KDIGO 2024 / 2025 AHA/ACC Hypertension Guidelines: blood pressure target in CKD is <130/80 mmHg (KDIGO systolic <120 mmHg when tolerated) to slow CKD progression and reduce cardiovascular risk. Current 2-drug antihypertensive therapy (losartan 50 mg PO daily and amlodipine 10 mg PO daily) is effective and well-tolerated; continue current regimen, reassessing for potential losartan titration to 100 mg daily at next visit if blood pressure remains above 130/80 mmHg.'
        }
      ]
    },
    {
      id: 'bw_sams',
      title: 'Statin Tolerability & SAMS Differential Diagnosis',
      icon: 'ShieldCheck',
      color: '0891b2',
      questions: [
        {
          key: 'bw_sams_eval',
          q: 'Evaluation of muscle symptoms, differential diagnosis, and continuation rationale:',
          defaultAnswer: 'Status: Mild bilateral lower-extremity muscle soreness evaluated. Differential diagnosis: Symptoms are mild, bilateral, occur predominantly after walking exercise, non-progressive, not present at rest, and non-limiting to daily activities. Normal liver transaminases (AST 22, ALT 21 U/L) confirm absence of statin hepatotoxicity. Findings differentiate exertional muscle soreness from severe statin-associated muscle symptoms (SAMS). Patient explicitly wishes to continue therapy. Risk-benefit conclusion: Cardiovascular and renal benefits of statin therapy far outweigh the risk of mild symptoms; avoiding unnecessary statin discontinuation is essential. Continue rosuvastatin 20 mg PO daily with active symptom monitoring and red-flag patient education.'
        }
      ]
    },
    {
      id: 'bw_obesity',
      title: 'Class II Obesity & Lifestyle Modifications',
      icon: 'Scale',
      color: 'ca8a04',
      questions: [
        {
          key: 'bw_ob_eval',
          q: 'Evaluation of weight status, dietary improvements, and activity goals:',
          defaultAnswer: 'Status: Class II Obesity (BMI 35.9 kg/m²), weight 95 kg (down ~1 kg from 96 kg). Weight change is attributed to regular walking (3-4 days/week) and reduced packaged/salty foods with increased home cooking. Cites KDIGO 2024 and 2026 AHA/ACC lifestyle guidelines: lifestyle modification provides foundational cardiorenal benefits in reducing blood pressure, intraglomerular pressure, and improving lipids. Reinforce successful behavioral modifications.'
        }
      ]
    },
    {
      id: 'bw_prevent',
      title: 'Preventive Care Gaps & Health Maintenance',
      icon: 'ShieldAlert',
      color: '7c3aed',
      questions: [
        {
          key: 'bw_prev_eval',
          q: 'Evaluation of immunization status and preventive health needs:',
          defaultAnswer: 'Status: Preventive care and immunization gaps identified: Pneumococcal conjugate vaccination (PCV20) is indicated for CKD Stage G3a; Recombinant Zoster vaccine (Shingrix 2-dose series) is indicated for age ≥50; and Tdap booster is overdue (>10 years since last dose). Immunization catch-up should be actively recommended.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    {
      id: 'bw_p_hld',
      title: 'Lipid & Statin Therapy Plan',
      options: [
        { key: 'bw_hld_o1', label: 'Continue rosuvastatin 20 mg PO once daily at bedtime', correct: true },
        { key: 'bw_hld_o2', label: 'Treatment target: LDL-C <70-100 mg/dL (or >=50% reduction from baseline)', correct: true },
        { key: 'bw_hld_o3', label: 'Utilize shared decision-making: maintain rosuvastatin 20 mg daily without immediate intensification given favorable LDL response (89 mg/dL)', correct: true },
        { key: 'bw_hld_o4', label: 'Recheck fasting lipid panel in ~3 months before next visit', correct: true }
      ]
    },
    {
      id: 'bw_p_ckd',
      title: 'Renoprotective & Antihypertensive Plan (Losartan)',
      options: [
        { key: 'bw_ckd_o1', label: 'Continue losartan 50 mg PO once daily (or titrate to 100 mg daily) for renal and cardiovascular protection', correct: true },
        { key: 'bw_ckd_o2', label: 'Renoprotective rationale: ARB therapy reduces intraglomerular pressure, slows CKD progression, and reduces albuminuria in CKD G3aA2', correct: true },
        { key: 'bw_ckd_o3', label: 'Order repeat spot UACR and renal function (SCr/eGFR) in ~3 months before next visit', correct: true },
        { key: 'bw_ckd_o4', label: 'Reinforce kidney-protective lifestyle modifications (sodium restriction, hydration, avoiding NSAIDs)', correct: true }
      ]
    },
    {
      id: 'bw_p_htn',
      title: 'Blood Pressure Management Plan (Amlodipine & HBPM)',
      options: [
        { key: 'bw_htn_o1', label: 'Continue amlodipine 10 mg PO once daily for essential hypertension control', correct: true },
        { key: 'bw_htn_o2', label: 'Blood pressure treatment target: <130/80 mmHg per 2025 AHA/ACC Hypertension Guidelines in CKD (KDIGO <120 SBP when tolerated)', correct: true },
        { key: 'bw_htn_o3', label: 'Continue structured home blood pressure monitoring (HBPM) >=3-4 days/week and maintain a written log', correct: true },
        { key: 'bw_htn_o4', label: 'Reassess blood pressure therapy and evaluate potential losartan titration to 100 mg daily at next visit', correct: true }
      ]
    },
    {
      id: 'bw_p_sams',
      title: 'Statin Tolerability & Muscle Safety Monitoring Plan',
      options: [
        { key: 'bw_sams_o1', label: 'Monitor for worsening, persistent, or limiting muscle pain, weakness, or stiffness', correct: true },
        { key: 'bw_sams_o2', label: 'Provide red-flag patient education: instruct patient to report severe muscle pain, unexplained weakness, or dark/tea-colored urine immediately', correct: true },
        { key: 'bw_sams_o3', label: 'Reassess muscle symptoms at next follow-up visit', correct: true },
        { key: 'bw_sams_o4', label: 'Maintain rosuvastatin therapy given favorable cardiorenal risk-benefit balance, avoiding premature discontinuation for mild exertional soreness', correct: true }
      ]
    },
    {
      id: 'bw_p_life',
      title: 'Lifestyle & Weight Management Plan',
      options: [
        { key: 'bw_life_o1', label: 'Continue walking program: 3-4 days/week, progressing toward >=150 minutes/week of moderate physical activity', correct: true },
        { key: 'bw_life_o2', label: 'Continue dietary sodium reduction (<2000 mg/day) and home cooking with fresh produce', correct: true },
        { key: 'bw_life_o3', label: 'Continue weight-loss efforts targeting gradual 5-10% total weight reduction; reinforce positive changes already initiated', correct: true }
      ]
    },
    {
      id: 'bw_p_prevent',
      title: 'Preventive Care & Immunization Plan',
      options: [
        { key: 'bw_prev_o1', label: 'Clarify and recommend Pneumococcal conjugate vaccination (PCV20) for CKD Stage 3', correct: true },
        { key: 'bw_prev_o2', label: 'Recommend Recombinant Zoster vaccine (Shingrix) 2-dose series for age >=50', correct: true },
        { key: 'bw_prev_o3', label: 'Recommend Tdap booster today (overdue per CDC guidelines)', correct: true }
      ]
    },
    {
      id: 'bw_p_foll',
      title: 'Follow-up & Monitoring Plan',
      options: [
        { key: 'bw_foll_o1', label: 'Schedule comprehensive follow-up visit in 3 months', correct: true },
        { key: 'bw_foll_o2', label: 'Order pre-visit laboratory testing: CMP (renal function, electrolytes, LFTs), spot UACR, and fasting lipid panel', correct: true },
        { key: 'bw_foll_o3', label: 'Collect home blood pressure log readings before next visit', correct: true },
        { key: 'bw_foll_o4', label: 'Reassess statin tolerability, muscle symptoms, CKD progression, and cardiovascular risk reduction at follow-up visit', correct: true }
      ]
    }
  ],
  COUNSELING: [
    { id: 'b_wed_c1', title: 'Affordable statin maintenance', body: [
      "Your cholesterol has dropped beautifully on this new medication, which significantly protects your heart.",
      "I'm glad we found a price that works for you. Let me know immediately if the cost ever becomes an issue again.",
      "Keep up the great work with the walking and dietary changes — they are making a real difference." ] }
  ],
  GUIDING_QUESTIONS: [
    'What factors suggest this may not represent clinically significant SAMS?',
    'What likely caused the LDL-C improvement?',
    'Why should affordability be reassessed even after initiation?',
    'What did this encounter teach about therapeutic inertia?',
    'Would you stop rosuvastatin today?',
    'What monitoring should occur before the next visit?'
  ],
  PRECEPTOR: {
    keyIssues: ['Large LDL drop after starting therapy', 'Confirms access was the issue', 'BP still slightly above goal'],
    assessment: ['The response proves the original barrier was access, not pharmacology', 'Continue and keep optimizing'],
    plan: ['Continue rosuvastatin', 'Optimize BP', 'Continue monitoring'],
    pearls: ['Fixing access often produces the biggest single LDL drop you’ll see'],
    mistakes: ['Stopping or down-titrating a working, now-affordable statin'],
    followupQuestions: ['Is further LDL lowering warranted for her risk?'],
    checklist: ['Confirmed initiation/tolerability', 'Continued therapy', 'Optimized BP'],
  },
})

const angelaThu = makeCase({
  id: 'w2-angela-thu',
  IMMUNIZATIONS: angelaTue.IMMUNIZATIONS,
  ALLERGIES: angelaTue.ALLERGIES,
  PATIENT: angelaTue.PATIENT,
  ENCOUNTER: { week: 'Week 2', 
    day: 'Thursday', type: 'six-month follow-up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "I feel good about my medicines now. What else should I be doing?",
    setting: 'ambulatory care pharmacy clinic under collaborative practice agreement',
    snapshotSummary: 'Six months in. LDL near goal, BP improving, confident and adherent. Decide whether further LDL lowering is warranted and consolidate gains.',
    diseaseStates: ['Hyperlipidemia', 'CKD G3aA2', 'Hypertension', 'Obesity'],
    learningObjectives: ['Judge whether to add nonstatin therapy', 'Confirm durable adherence and BP control', 'Reinforce lifestyle and monitoring', 'Address preventive care gaps'],
  },
  VITALS: { bp: '132/80', bpRepeat: '130/78', hr: '70', rr: '16', temp: '98.3°F', weight: '93 kg', height: "5'4\"", bmi: '35.2',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'high' } },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.5', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.19', unit: 'mg/dL', flag: 'warn', note: 'Stable from baseline 1.20 and 3-month 1.20 mg/dL' },
    { label: 'eGFR', value: '54', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Stable Stage G3a filtration; baseline 53, 3-month 53 mL/min' },
    { label: 'AST', value: '21', unit: 'U/L', flag: 'normal', note: 'Normal transaminase confirming absence of statin hepatotoxicity' },
    { label: 'ALT', value: '22', unit: 'U/L', flag: 'normal', note: 'Normal transaminase confirming absence of statin hepatotoxicity' },
    { label: 'Total cholesterol', value: '171', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '78', unit: 'mg/dL', flag: 'normal', note: '148 → 89 → 78 mg/dL (~47% reduction on Rosuvastatin 20 mg)' },
    { label: 'HDL-C', value: '46', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '150', unit: 'mg/dL', flag: 'normal' },
    { label: 'UACR', value: '155', unit: 'mg/g', flag: 'warn', note: '165 → 160 → 155 mg/g (stable persistent Category A2 moderately increased albuminuria)' },
  ],
  ALERTS: [{ level: 'info', text: 'Sustained LDL reduction, improving BP, stable kidney function.' }],
  PROBLEMS: [
    { name: 'Hyperlipidemia / Primary ASCVD Prevention', detail: 'LDL-C 78 mg/dL (approaching goal on Rosuvastatin 20 mg PO daily; target <70-100)', flag: 'normal' },
    { name: 'Chronic kidney disease, Stage G3aA2', detail: 'eGFR 54 mL/min (Stage G3a), UACR 155 mg/g (persistent Category A2)', flag: 'warn' },
    { name: 'Essential hypertension', detail: 'BP 132/80 mmHg (repeat 130/78; controlled; target <130/80)', flag: 'normal' },
    { name: 'Obesity (Class II)', detail: 'Weight 93 kg (down 3 kg from baseline 96 kg), BMI 35.2 kg/m²', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Losartan', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: 'Continue' },
    { name: 'Amlodipine', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: 'Continue' },
    { name: 'Rosuvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia / primary ASCVD prevention', notes: 'Continue; excellent tolerability' },
  ],
  ALLERGIES: [{ substance: 'Penicillin', reaction: 'Rash (childhood)', severity: 'Moderate', type: 'Allergy', date: 'Childhood', source: 'Patient reported' }],
  SUBJECTIVE_DOCUMENTED: [
    {
      label: 'Reason for visit & clinical setting',
      value: 'Scheduled 6-month follow-up encounter in an ambulatory care pharmacy clinic under collaborative practice agreement for comprehensive cardiorenal risk reduction, hyperlipidemia, and hypertension management.'
    },
    {
      label: 'Interval history & general wellbeing',
      value: 'Patient reports feeling well and confident with her medications. Rosuvastatin 20 mg PO daily is well-tolerated; prior mild leg soreness reported at 3 months has completely resolved. Explicitly denies current muscle aches, weakness, or stiffness.'
    },
    {
      label: 'Medication adherence & affordability',
      value: 'Medication adherence remains high (misses <1 dose per month). $4 generic copay remains affordable and sustainable. Patient expresses peace of mind regarding treatment plan.'
    },
    {
      label: 'Dietary & physical activity modifications',
      value: 'Walking 4 days/week for 20-30 minutes. Cooking from scratch at home, avoiding processed convenience foods, and restricting dietary sodium. Weight reduced to 93 kg (~3 kg / 6.6 lbs total loss).'
    },
    {
      label: 'Past Medical History (PMH)',
      value: 'Essential hypertension (diagnosed 15 years ago), hyperlipidemia (diagnosed 12 years ago), chronic kidney disease Stage G3aA2 (identified ~9 months ago), and Class II Obesity (BMI 35.2 kg/m²).'
    },
    {
      label: 'Past Surgical History (PSH)',
      value: 'Cholecystectomy (gallbladder removal ~10 years ago) and total abdominal hysterectomy at age 45. No other surgeries.'
    },
    {
      label: 'Social History',
      value: 'Occupation: Retired elementary school teacher. Marital/living status: Widowed (husband passed away 3 years ago), lives independently. Tobacco status: Never smoker (denies any tobacco history). Alcohol use: Rarely drinks alcohol (glass of wine on special occasions only). Recreational drugs: Explicitly denies any illicit or recreational drug use.'
    },
    {
      label: 'Review of Systems (ROS)',
      value: 'Cardiovascular/Pulmonary/Neurologic/Renal: Explicitly denies chest pain, shortness of breath, palpitations, syncope, dizziness, and lower extremity edema. Explicitly denies gross hematuria or urinary complaints.'
    },
    {
      label: 'Patient Goals & Motivations',
      value: 'Top personal goal is maintaining independent living and avoiding dialysis (motivated by mother suffering from severe CKD and stroke). Strongly committed to continuing cardiorenal therapy.'
    },
    {
      label: 'Home Blood Pressure Monitoring',
      value: 'Home BP log shows 7-day average of ~131/79 mmHg (range 126–136/76–82 mmHg), consistent with office BP readings.'
    }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Body Surface Area (Mosteller)', value: '2.05 m²', flag: 'normal' },
    { label: '10-Year ASCVD Risk Score', value: '13.2% — Improved from baseline 17.4% (or 14.5%) and 3-month 14.5%', flag: 'normal' },
    { label: 'Home BP log', value: '7-day home average 131/79 mmHg (range 126–136/76–82 mmHg), consistent with office BP', flag: 'normal' },
    { label: 'Longitudinal Trend Comparisons', value: 'LDL-C: 148 → 89 → 78 mg/dL; UACR: 165 → 160 → 155 mg/g; ASCVD Risk: 17.4% → 14.5% → 13.2%; BP: 138/84 → 136/82 → 132/80 mmHg; Weight: 96 → 95 → 93 kg', flag: 'normal' },
    { label: 'Objective Clinical Interpretations', value: 'eGFR 54: Stable Stage G3a filtration; UACR 155: Stable persistent Category A2 moderately increased albuminuria with minor downward trend (note: cautious interpretation; small ~6% decline within A2); AST 21 / ALT 22: Normal transaminases confirming absence of statin hepatotoxicity; Lipid panel: Confirms durable LDL-C response nearing 50% reduction on rosuvastatin 20 mg', flag: 'normal' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'concerns', label: 'Confidence / adherence', placeholder: 'How she feels about the regimen…' },
    { key: 'weightGoals', label: 'Goals & lifestyle', placeholder: 'Weight, activity, prevention…' },
    { key: 'familyHistory', label: 'Family History', placeholder: 'Parents, siblings…' },
    { key: 'social', label: 'Social History', placeholder: 'Occupation, living situation…' },
    { key: 'allergies', label: 'Allergies / Vaccinations', placeholder: 'Reactions, vaccines…' },
  ],
  GUIDING_QUESTIONS: [
    'Why should rosuvastatin be continued despite LDL-C improvement?',
    'Does this patient still have CKD?',
    'What evidence supports continued cardiovascular risk?',
    'Would you intensify therapy today?',
    'What counseling should be provided regarding long-term medication use?',
    'What should be monitored moving forward?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w2-angela-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I get a skin rash from Penicillin—I was told I broke out in a rash when given it as a child." },
    { id: 'w2-angela-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take Calcium 600 mg plus Vitamin D3 daily for bone health, and Tylenol occasionally for mild pain." },
    { id: 'w2-angela-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I rarely drink alcohol—maybe a glass of wine on holidays or special occasions." },
    { id: 'w2-angela-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w2-angela-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling', 'family', 'dad', 'mom', 'relatives', 'hereditary'], response: "My father had high blood pressure, high cholesterol, and had a heart attack at age 63. My mother had high blood pressure and chronic kidney disease, and she suffered a stroke at age 72. My sister also has high cholesterol and high blood pressure." },
    { id: 'w2-angela-thu_psh', topic: 'Past surgical history', field: 'psh', keywords: ['surgery', 'surgeries', 'operation', 'cholecystectomy', 'hysterectomy', 'gallbladder', 'uterus', 'surgical', 'procedure'], response: "I had my gallbladder removed (cholecystectomy) about 10 years ago, and I also had a total abdominal hysterectomy when I was 45." },
    { id: 'w2-angela-thu_hosp', topic: 'Hospitalization / ED visits', field: 'hospitalization', keywords: ['hospital', 'hospitalization', 'admit', 'admission', 'emergency room', 'hospitalized', 'admitted', 'admissions'], response: "No, I have not had any recent hospitalizations or emergency department visits." },
    { id: 'bt_bp', topic: 'Home BP log', field: 'homeBp', keywords: ['home', 'check', 'blood pressure at home', 'monitor', 'log', 'cuff', 'readings', 'average'], response: "Yes, I check it regularly. It's been better, averaging about 131/79 mmHg. The range is usually between 126 and 136 SBP, and 76 to 82 DBP." },
    { id: 'bt_side_effects', topic: 'Rosuvastatin side effects', field: 'sideEffects', keywords: ['side effect', 'muscle', 'ache', 'pain', 'soreness', 'legs', 'cramp', 'tolerate'], response: "That mild leg soreness I was having after walking at my last visit has completely resolved. I don't have any muscle aches or side effects now." },
    { id: 'bt_conf', topic: 'Confidence in statin', field: 'concerns', keywords: ['confiden', 'rosuvastatin', 'trust', 'helping', 'good', 'routine'],
      response: "I feel much more confident now — the rosuvastatin's been easy and I trust it's helping." },
    { id: 'bt_social', topic: 'Social history (marital/occupation/living)', field: 'hpiNarrative', keywords: ['married', 'marital', 'widow', 'live', 'alone', 'by yourself', 'partner', 'spouse', 'job', 'work', 'occupation', 'teacher', 'retire', 'did you work', 'what do you do'],
      response: "I am widowed — my husband passed away three years ago. I live independently on my own. Before I retired, I was an elementary school teacher for over 30 years." },
    { id: 'bt_goal', topic: 'Lifestyle goals', field: 'weightGoals', keywords: ['weight', 'walk', 'diet', 'exercise', 'goal', 'lose'],
      response: "I'm walking about four days a week and eating better. I'd still like to lose more weight." },
    { id: 'bt_diet', topic: 'Dietary habits', field: 'weightGoals', keywords: ['diet', 'eating', 'food', 'processed', 'packaged', 'home cooking', 'salt'],
      response: "I've maintained my dietary improvements—cooking more meals from scratch at home, choosing fresh produce, and substantially reducing packaged convenience foods." },
    { id: 'bt_dialysis', topic: 'Dialysis avoidance goal', field: 'goals', keywords: ['dialysis', 'kidney', 'prevent', 'goal', 'motivation'],
      response: "Staying off dialysis and protecting my kidney health long-term remains my biggest personal motivation." },
  ],
  ASSESSMENT_CARDS: [
    {
      id: 'bt_hld',
      title: 'Hyperlipidemia / Primary ASCVD Prevention',
      icon: 'Droplet',
      color: '13314f',
      questions: [
        {
          key: 'bt_hld_eval',
          q: 'Evaluation of durable lipid control, nonstatin decision, and ASCVD risk:',
          defaultAnswer: 'Status: Hyperlipidemia, durable and approaching goal on rosuvastatin 20 mg PO daily. Fasting lipid panel demonstrates LDL-C 78 mg/dL, reflecting a ~47% reduction from baseline (148 to 89 to 78 mg/dL). Calculated 10-year ASCVD risk improved from baseline 17.4% (or 14.5%) to 13.2%. Per 2026 AHA/ACC Cholesterol Guidelines, statin therapy is the cornerstone of primary ASCVD prevention; residual cardiovascular risk factors remain present (CKD Stage G3aA2 is an established ASCVD risk-enhancing condition, along with essential hypertension, Class II obesity, age 66, and family history of premature CV disease and stroke [father MI at 63, mother stroke at 72]). Rosuvastatin is well-tolerated with complete resolution of prior mild exertional soreness. Shared decision-making regarding nonstatin therapy: continuing rosuvastatin 20 mg PO daily as monotherapy is fully appropriate, as LDL-C (78 mg/dL) approaches 50% reduction and is well within acceptable primary prevention thresholds; adding ezetimibe 10 mg daily is an acceptable optional consideration if an intensive target (<70 mg/dL) is desired, but not strictly required. Avoid statin de-escalation.'
        }
      ]
    },
    {
      id: 'bt_ckd',
      title: 'Chronic Kidney Disease Stage G3aA2',
      icon: 'FlaskConical',
      color: '0891b2',
      questions: [
        {
          key: 'bt_ckd_eval',
          q: 'Evaluation of CKD staging, longitudinal trend, and renal stability:',
          defaultAnswer: 'Status: CKD Stage G3aA2, stable filtration with persistent albuminuria. Dual-axis classification: eGFR 54 mL/min/1.73m² (baseline 53, 3-month 53) confirms stable Stage G3a moderate filtration reduction; spot UACR is 155 mg/g (longitudinal trend: 165 to 160 to 155 mg/g). Note clinical interpretation: the minor downward trend represents stable persistent Category A2 moderately increased albuminuria (small ~6% decline within A2 range), rather than a marked resolution. Cites KDIGO 2024 CKD Guideline: persistent CKD Stage G3aA2 independently contributes to elevated cardiovascular and renal risk. Stable kidney function supports continuing current renoprotective therapy with losartan 50 mg PO daily.'
        }
      ]
    },
    {
      id: 'bt_htn',
      title: 'Essential Hypertension',
      icon: 'HeartPulse',
      color: '13314f',
      questions: [
        {
          key: 'bt_htn_eval',
          q: 'Evaluation of blood pressure status, home/office consistency, and control targets:',
          defaultAnswer: 'Status: Essential hypertension, controlled at target. Office BP is 132/80 mmHg (repeat 130/78 mmHg), improved from baseline (138/84 mmHg). Home BP log (average 131/79 mmHg, range 126-136/76-82 mmHg) corroborates office readings. Cites KDIGO 2024 / 2025 AHA/ACC Hypertension Guidelines: blood pressure target in CKD is <130/80 mmHg (KDIGO systolic <120 mmHg when tolerated). Current 2-drug antihypertensive therapy (losartan 50 mg PO daily and amlodipine 10 mg PO daily) is effective, well-tolerated, and without side effects; continue current regimen.'
        }
      ]
    },
    {
      id: 'bt_access_sams',
      title: 'Medication Access, Adherence & Statin Tolerability',
      icon: 'CheckCircle2',
      color: '059669',
      questions: [
        {
          key: 'bt_acc_eval',
          q: 'Evaluation of durable adherence, resolved affordability, and symptom resolution:',
          defaultAnswer: 'Status: Durable adherence (>95% adherence) and permanently resolved affordability barrier ($4 generic copay). Patient reports excellent confidence in her medication regimen. Prior mild lower-extremity muscle soreness reported at 3 months has completely resolved, confirming exertional etiology rather than drug-induced myopathy. Normal transaminases (AST 21, ALT 22 U/L) confirm hepatic safety.'
        }
      ]
    },
    {
      id: 'bt_obesity',
      title: 'Class II Obesity & Longitudinal Lifestyle Gains',
      icon: 'Scale',
      color: 'ca8a04',
      questions: [
        {
          key: 'bt_ob_eval',
          q: 'Evaluation of weight status, dietary improvements, and activity maintenance:',
          defaultAnswer: 'Status: Class II Obesity (BMI 35.2 kg/m²), weight 93 kg (cumulative 3 kg / 6.6 lbs weight loss from baseline 96 kg). Weight change is driven by consistent walking 4 days/week for 20-30 minutes and sustained home cooking with sodium restriction. Cites KDIGO 2024 and 2026 AHA/ACC lifestyle guidelines: lifestyle modification provides essential foundational cardiorenal benefits in reducing blood pressure, intraglomerular pressure, and improving lipids. Reinforce successful behavioral modifications.'
        }
      ]
    },
    {
      id: 'bt_prevent',
      title: 'Preventive Care Gaps & Health Maintenance',
      icon: 'ShieldAlert',
      color: '7c3aed',
      questions: [
        {
          key: 'bt_prev_eval',
          q: 'Evaluation of immunization status and preventive health needs:',
          defaultAnswer: 'Status: Preventive care and immunization gaps persist: Pneumococcal conjugate vaccination (PCV20) is indicated for CKD Stage G3a; Recombinant Zoster vaccine (Shingrix 2-dose series) is indicated for age ≥50; and Tdap booster is overdue (>10 years since last dose). Immunization catch-up should be actively recommended.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    {
      id: 'bt_p_hld',
      title: 'Lipid & Statin Therapy Plan',
      options: [
        { key: 'bt_hld_o1', label: 'Continue rosuvastatin 20 mg PO once daily at bedtime', correct: true },
        { key: 'bt_hld_o2', label: 'Treatment target: LDL-C <70-100 mg/dL (or >=50% reduction from baseline; current LDL 78 mg/dL is approaching goal)', correct: true },
        { key: 'bt_hld_o3', label: 'Shared decision-making regarding nonstatin therapy: continue rosuvastatin monotherapy given favorable response; consider ezetimibe 10 mg daily only if more intensive LDL lowering (<70 mg/dL) is desired', correct: true },
        { key: 'bt_hld_o4', label: 'Order repeat fasting lipid panel in 6-12 months', correct: true },
        { key: 'bt_hld_o5', label: 'Discontinue statin therapy because patient feels well and cholesterol is improved', correct: false }
      ]
    },
    {
      id: 'bt_p_ckd',
      title: 'Renoprotective & Antihypertensive Plan (Losartan)',
      options: [
        { key: 'bt_ckd_o1', label: 'Continue losartan 50 mg PO once daily for renal and cardiovascular protection', correct: true },
        { key: 'bt_ckd_o2', label: 'Renoprotective rationale: ARB therapy reduces intraglomerular pressure, slows CKD progression, and controls albuminuria in CKD G3aA2', correct: true },
        { key: 'bt_ckd_o3', label: 'Order repeat spot UACR and renal function (SCr/eGFR) in 6 months', correct: true },
        { key: 'bt_ckd_o4', label: 'Reinforce kidney-protective lifestyle modifications (sodium restriction, hydration, avoiding NSAIDs)', correct: true }
      ]
    },
    {
      id: 'bt_p_htn',
      title: 'Blood Pressure Management Plan (Amlodipine & HBPM)',
      options: [
        { key: 'bt_htn_o1', label: 'Continue amlodipine 10 mg PO once daily for essential hypertension control', correct: true },
        { key: 'bt_htn_o2', label: 'Blood pressure treatment target: <130/80 mmHg per 2025 AHA/ACC Hypertension Guidelines in CKD (KDIGO <120 SBP when tolerated)', correct: true },
        { key: 'bt_htn_o3', label: 'Continue structured home blood pressure monitoring (HBPM) 1-2 days/week and maintain a written log', correct: true }
      ]
    },
    {
      id: 'bt_p_life',
      title: 'Lifestyle & Weight Management Plan',
      options: [
        { key: 'bt_life_o1', label: 'Continue walking program: maintain 4 days/week, progressing toward >=150 minutes/week of moderate physical activity', correct: true },
        { key: 'bt_life_o2', label: 'Continue dietary sodium reduction (<2000 mg/day) and home cooking with fresh produce', correct: true },
        { key: 'bt_life_o3', label: 'Continue weight-loss efforts targeting gradual 5-10% total weight reduction; reinforce positive changes already achieved (~3 kg lost)', correct: true }
      ]
    },
    {
      id: 'bt_p_prevent',
      title: 'Preventive Care & Immunization Plan',
      options: [
        { key: 'bt_prev_o1', label: 'Clarify and recommend Pneumococcal conjugate vaccination (PCV20) for CKD Stage 3', correct: true },
        { key: 'bt_prev_o2', label: 'Recommend Recombinant Zoster vaccine (Shingrix) 2-dose series for age >=50', correct: true },
        { key: 'bt_prev_o3', label: 'Recommend Tdap booster today (overdue per CDC guidelines)', correct: true }
      ]
    },
    {
      id: 'bt_p_foll',
      title: 'Follow-up & Monitoring Plan',
      options: [
        { key: 'bt_foll_o1', label: 'Schedule comprehensive follow-up visit in 6 months for chronic disease maintenance', correct: true },
        { key: 'bt_foll_o2', label: 'Order pre-visit laboratory testing: CMP (renal function, electrolytes, LFTs), spot UACR, and fasting lipid panel', correct: true },
        { key: 'bt_foll_o3', label: 'Collect home blood pressure log readings before next visit', correct: true },
        { key: 'bt_foll_o4', label: 'Reassess statin adherence, tolerability, CKD progression, and blood pressure control at follow-up visit', correct: true }
      ]
    }
  ],
  COUNSELING: [
    { id: 'b_thu_c1', title: 'Maintaining long-term gains', body: [
      "Your numbers look fantastic and show what happens when the right medicine is combined with healthy habits.",
      "Because your cholesterol and blood pressure are controlled by the medicines, we want to keep you on them long-term.",
      "Keep walking and watching your salt — those lifestyle choices continue to protect your kidneys and heart every day." ] }
  ],
  GUIDING_QUESTIONS: [
    'Why should rosuvastatin be continued despite LDL-C improvement?',
    'Does this patient still have CKD?',
    'What evidence supports continued cardiovascular risk?',
    'Would you intensify therapy today?',
    'What counseling should be provided regarding long-term medication use?',
    'What should be monitored moving forward?'
  ],
  PRECEPTOR: {
    keyIssues: ['LDL near goal; decide on nonstatin therapy', 'BP improving; durable adherence', 'Consolidating gains'],
    assessment: ['Rosuvastatin monotherapy is working well; ezetimibe is optional', 'Continue protective regimen'],
    plan: ['Continue rosuvastatin + losartan + amlodipine', 'Routine 6-month monitoring', 'Reinforce lifestyle'],
    pearls: ['In primary prevention, reaching near-goal with good tolerability often means staying the course rather than polypharmacy'],
    mistakes: ['Stopping statin because LDL is "normal"', 'Adding ezetimibe reflexively without shared decision-making'],
    followupQuestions: ['When would you revisit adding ezetimibe?'],
    checklist: ['Evaluated nonstatin need', 'Confirmed durable adherence', 'Set long-term monitoring'],
  },
})

/* ============================ DAVID CHEN (C) ============================ */
// T2DM + CKD G3bA3 (highest risk) + HLD + HTN, obesity. Analytical; wants the "why".
// Already on ACEi + SGLT2i + high-intensity statin, but persistent SEVERE albuminuria.
// Hidden: previously DECLINED finerenone (pill burden, hyperkalemia worry, cost; never
// understood the rationale). The CONFIDENCE-trial phenotype.

const davidTue = makeCase({
  id: 'w2-david-tue',
  PATIENT: { name: 'David Chen', age: 62, sex: 'male', ethnicity: 'East Asian', mrn: 'C2-441098' },
  ENCOUNTER: { week: 'Week 2', 
    day: 'Tuesday', type: 'initial collaborative practice management', difficulty: 'Advanced', difficultyTone: 'amber',
    setting: 'ambulatory care pharmacy clinic',
    referralSource: 'primary care provider (PCP)',
    chiefConcern: "My doctor referred me to discuss my kidney numbers and diabetes.",
    snapshotSummary: 'CKD G3bA3 with severe albuminuria and high cardiorenal risk. He declined finerenone previously due to potassium concerns. He is already on ACEi, SGLT2i, and statin.',
    diseaseStates: ['Type 2 Diabetes', 'CKD G3bA3', 'Hyperlipidemia', 'Hypertension', 'Obesity', 'Preventive Care'],
    learningObjectives: [
      'Recognize CKD risk stage (G3bA3) and the need for combination therapy',
      'Address student/patient hyperkalemia concerns with real-world clinical evidence',
      'Overcome patient hesitation by explaining the cardiorenal benefits of finerenone',
      'Manage diabetes, lipids, blood pressure, obesity, and immunization gaps',
    ],
  },
  VITALS: { bp: '138/82', bpRepeat: '136/80', hr: '72', rr: '16', temp: '98.4°F', weight: '102 kg', height: "5'10\"", bmi: '32.3',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'warn' } },
  LABS: [
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal', note: 'Baseline potassium' },
    { label: 'SCr', value: '1.82', unit: 'mg/dL', flag: 'high' },
    { label: 'eGFR', value: '42', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Moderately-to-severely decreased (G3b)' },
    { label: 'A1C', value: '7.2', unit: '%', flag: 'high' },
    { label: 'Glucose', value: '136', unit: 'mg/dL', flag: 'high', note: 'Fasting' },
    { label: 'AST', value: '24', unit: 'U/L', flag: 'normal' },
    { label: 'ALT', value: '22', unit: 'U/L', flag: 'normal' },
    { label: 'Total cholesterol', value: '172', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '88', unit: 'mg/dL', flag: 'normal', note: 'Target <70 for very high risk' },
    { label: 'HDL-C', value: '43', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '178', unit: 'mg/dL', flag: 'normal' },
    { label: 'UACR', value: '520', unit: 'mg/g', flag: 'high', note: 'Severely increased (A3); prior 505 mg/g documented 4 months ago' },
  ],
  ALERTS: [
    { level: 'warn', text: 'CKD G3bA3 — severe cardiorenal and progression risk due to persistent A3 albuminuria.' },
    { level: 'warn', text: 'Diabetes co-management — A1C is near goal at 7.2%.' },
  ],
  PROBLEMS: [
    { name: 'Chronic kidney disease, G3bA3', detail: 'eGFR 42, UACR 520 (A3), high cardiorenal risk', flag: 'high' },
    { name: 'Type 2 diabetes mellitus with CKD', detail: 'A1C 7.2%, controlled with residual renal risk', flag: 'warn' },
    { name: 'Hyperlipidemia / ASCVD risk', detail: 'LDL-C 88 mg/dL, 10-year risk 22.0%', flag: 'normal' },
    { name: 'Essential hypertension', detail: 'BP mid-130s/80s, above goal', flag: 'warn' },
    { name: 'Obesity', detail: 'BMI 32.3', flag: 'warn' },
    { name: 'Preventive care gaps', detail: 'Immunizations due: PCV20, Shingrix, Tdap overdue', flag: 'warn' }
  ],
  MEDICATIONS: [
    { name: 'Metformin ER', dose: '1000 mg', route: 'PO', freq: 'BID', indication: 'T2DM', notes: 'Monitor renal function / eGFR' },
    { name: 'Empagliflozin', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'T2D / cardiorenal', notes: '' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: '' },
    { name: 'Rosuvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia / ASCVD risk', notes: 'Target: LDL < 70 mg/dL' },
    { name: 'Amlodipine', dose: '5 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
  ],
  ALLERGIES: [{ substance: 'No known drug allergies', reaction: '—' }],
  IMMUNIZATIONS: [
    { name: 'Influenza', status: 'Up to date', flag: 'normal' },
    { name: 'COVID-19', status: 'Up to date', flag: 'normal' },
    { name: 'Pneumococcal', status: 'None documented', flag: 'warn' },
    { name: 'Herpes zoster (Shingrix)', status: 'None documented', flag: 'warn' },
    { name: 'Tdap', status: 'Overdue (last documented >10 years ago)', flag: 'warn' }
  ],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: '62-year-old male referred by his primary care provider (PCP) for initial collaborative practice management of Type 2 diabetes with chronic kidney disease Stage G3bA3 and elevated cardiovascular risk, specifically addressing persistent severe albuminuria (UACR 520 mg/g) and progression risk despite dual foundational therapy (ACE inhibitor + SGLT2 inhibitor). Highly analytical, follows lab trends in patient portal, and researches medical literature online. Excellent adherence to current medications; denies hypoglycemia. Previously declined finerenone recommendation due to hyperkalemia concerns, pill burden, and wanting clear clinical trial evidence.' },
    { label: 'Past Medical & Surgical History', value: 'Type 2 diabetes mellitus (12 years), essential hypertension (10 years), hyperlipidemia (8 years), and chronic kidney disease Stage G3bA3 (3 years). Surgical history is completely negative (denies prior surgeries). Denies recent hospitalizations or emergency department visits.' },
    { label: 'Review of Systems', value: 'Denies chest pain, palpitations, syncope, lower extremity edema, gross hematuria, or voiding complaints/dysuria. Notes occasional nocturia (1-2x/night) and mild occasional fatigue after demanding work weeks.' },
    { label: 'Social history', value: 'Electrical engineer, married, lives with wife. Never smoker. Moderate alcohol (1-2 glasses red wine per week). Denies recreational drug use. Walks ~3 days/week. Attempts diabetic diet with occasional dietary lapses when working late.' },
    { label: 'Family history', value: 'Father had MI at age 58 and type 2 diabetes. Mother has type 2 diabetes and chronic kidney disease. Brother has coronary artery disease (coronary bypass surgery at age 58).' },
    { label: 'Patient Goals & Concerns', value: 'Deeply concerned about chronic kidney disease progression; identifies progression to end-stage kidney disease requiring hemodialysis as his greatest health-related fear. Highly motivated to preserve kidney function with evidence-based therapy.' },
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Body Surface Area (Mosteller)', value: '2.24 m²', flag: 'normal' },
    { label: '10-Year ASCVD Risk Score', value: '22.0% — Very high risk', flag: 'high' },
    { label: 'Prior finerenone recommendation', value: 'Recommended previously; patient hesitated/declined due to potassium concerns', flag: 'warn' },
    { label: 'Home BP log', value: '7-day average ≈ 136/80 mmHg', flag: 'warn' },
  ],
  INTERVIEW_FIELDS: [
    { key: 'finerenone', label: 'Finerenone history (declined?)', placeholder: 'Prior recommendations he didn’t start…' },
    { key: 'potassium', label: 'Hyperkalemia concern', placeholder: 'Worries about potassium…' },
    { key: 'why', label: 'Understanding / wants evidence', placeholder: 'What rationale he needs…' },
  ],
  GUIDING_QUESTIONS: [
    'Why is this patient considered high risk despite reasonable A1C and LDL-C values?',
    'What does UACR 520 mg/g tell you?',
    'Why might finerenone have been recommended previously?',
    'What barriers prevented therapy initiation?',
    'What additional information is needed before recommending therapy?',
    'What should be monitored moving forward?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w2-david-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w2-david-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take CoQ10 100 mg daily, Fish Oil 1000 mg daily, and a daily multivitamin." },
    { id: 'w2-david-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink moderately—about 1 to 2 glasses of red wine per week with dinner." },
    { id: 'w2-david-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w2-david-tue_drugs', topic: 'Recreational drug use', field: 'social', keywords: ['drug', 'illicit', 'marijuana', 'cocaine', 'recreational', 'substance'], response: "I have never used illicit drugs or recreational substances." },
    { id: 'w2-david-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a heart attack at age 58 and also had type 2 diabetes. My mother has type 2 diabetes and chronic kidney disease. My brother has coronary artery disease and had bypass surgery at age 58." },
    { id: 'w2-david-tue_social', topic: 'Social history', field: 'hpiNarrative', keywords: ['married', 'marital', 'live', 'alone', 'partner', 'spouse', 'job', 'work', 'occupation', 'engineer', 'retire'], response: "I am married and we live together at home. I work as an electrical engineer — I analyze problems for a living, which is probably why I ask so many questions about my health!" },
    { id: 'w2-david-tue_fatigue', topic: 'Fatigue and systemic symptoms', field: 'symptoms', keywords: ['fatigue', 'tired', 'energy', 'symptom', 'weakness'], response: "I feel mostly fine day-to-day. I might notice a little mild fatigue after a demanding work week, but no severe tiredness, shortness of breath, or weakness." },
    { id: 'w2-david-tue_nocturia', topic: 'Nocturia and voiding', field: 'symptoms', keywords: ['nocturia', 'urinate at night', 'voiding', 'urination', 'wake up to pee'], response: "I occasionally get up once or twice at night to urinate (nocturia), but I have no burning, difficulty, or painful urination." },
    { id: 'w2-david-tue_ros', topic: 'Review of systems pertinent negatives', field: 'symptoms', keywords: ['chest pain', 'short of breath', 'palpitations', 'syncope', 'edema', 'hematuria', 'swelling'], response: "Review of systems: I deny having any chest pain, heart palpitations, syncope or fainting spells, swelling in my legs or feet (edema), blood in my urine (gross hematuria), or voiding complaints." },
    { id: 'w2-david-tue_surg', topic: 'Surgical history', field: 'psh', keywords: ['surgery', 'surgeries', 'operation', 'procedure'], response: "I have never had any surgeries in my life; my surgical history is completely negative." },
    { id: 'w2-david-tue_hosp', topic: 'Hospitalization / ED visits', field: 'hospitalization', keywords: ['hospital', 'hospitalization', 'admit', 'admission', 'emergency room', 'hospitalized', 'admitted', 'admissions'], response: "No, I have not had any hospitalizations or emergency department visits in recent years." },
    { id: 'w2-david-tue_pmh_dur', topic: 'Condition durations', field: 'pmh', keywords: ['how long', 'duration', 'diagnosed', 'years', 'history'], response: "I have had type 2 diabetes for about 12 years, high blood pressure for 10 years, and high cholesterol for 8 years. My chronic kidney disease Stage G3bA3 was diagnosed about 3 years ago." },
    { id: 'w2-david-tue_info_seeking', topic: 'Information seeking and research', field: 'why', keywords: ['research', 'online', 'portal', 'labs', 'read', 'studies'], response: "I follow all my laboratory trends very closely in the patient portal and I read medical studies and research articles online about kidney disease and my medications." },
    { id: 'w2-david-tue_concerns_dialysis', topic: 'Dialysis fear and prognosis concerns', field: 'concerns', keywords: ['dialysis', 'kidney failure', 'fear', 'prognosis', 'future', 'scared'], response: "My mother had diabetes and kidney disease, and knowing how severe kidney failure can be, progressing to end-stage kidney disease and needing dialysis is honestly my greatest health-related fear. I want to do whatever works to protect my kidneys." },
    { id: 'w2-david-tue_diet_lapses', topic: 'Dietary habits and lapses', field: 'diet', keywords: ['diet', 'carbohydrate', 'eating', 'lapses', 'late'], response: "I try to follow a diabetic diet and watch carbohydrates, but when work gets demanding at the engineering firm, I occasionally have dietary lapses." },
    { id: 'w2-david-tue_exer', topic: 'Physical activity', field: 'exercise', keywords: ['exercise', 'walk', 'activity', 'active', 'gym', 'sport', 'run', 'physical', 'routine'], response: "I try to stay active. I typically walk about 3 days a week, sometimes more. I keep it moderate — nothing too intense." },
    { id: 'w2-david-tue_bp', topic: 'Home BP log', field: 'homeBp', keywords: ['home', 'check', 'blood pressure at home', 'monitor', 'log', 'cuff', 'readings', 'average'], response: "I check my blood pressure at home regularly and keep a written log. My home readings usually average around 136/80 mmHg." },
    { id: 'c_fin', topic: 'Declined finerenone', field: 'finerenone',
      keywords: ['finerenone', 'kidney medication', 'previous', 'recommend', 'declined', 'never started', 'another', 'mra'],
      response: "A doctor mentioned finerenone before, but I never started it. I didn't really understand why I needed it on top of everything else." },
    { id: 'c_k', topic: 'Hyperkalemia worry', field: 'potassium',
      keywords: ['potassium', 'hyperkalem', 'side effect', 'risk', 'electrolyte', 'worried'],
      response: "I remember hearing it could raise potassium, and that worried me. I didn't want to risk it." },
    { id: 'c_burden', topic: 'Pill burden / cost', field: 'finerenone',
      keywords: ['pill', 'too many', 'burden', 'cost', 'afford', 'another medication', 'expensive', 'copay'],
      response: "I'm already on several medications, and adding another brand-name drug with a copay made me hesitate along with the potassium risk, especially without understanding the evidence." },
    { id: 'c_why', topic: 'Wants the rationale', field: 'why',
      keywords: ['why', 'evidence', 'rationale', 'understand', 'explain', 'data', 'benefit', 'proof'],
      response: "I'm an engineer — I want to understand the evidence. If you can show me why it helps my kidneys, I'll seriously consider it." },
  ],
  ASSESSMENT_CARDS: [
    { 
      id: 'c_ckd', 
      title: 'Chronic Kidney Disease, Stage G3bA3 & Cardiorenal Residual Risk', 
      icon: 'FlaskConical', 
      color: 'dc2626',
      questions: [
        { 
          key: 'c_ckd_eval', 
          q: 'Evaluation of CKD staging, severe albuminuria chronicity, and finerenone indication:', 
          defaultAnswer: 'Status: CKD Stage G3bA3, high risk for kidney failure progression and major cardiovascular events. Classified using dual-axis staging: Stage G3b derived from moderately-to-severely decreased eGFR of 42 mL/min/1.73m² (SCr 1.82 mg/dL) and Category A3 derived from severely increased albuminuria with UACR 520 mg/g. Persistence of severe albuminuria is established across two distinct measurements (previous UACR 505 mg/g documented 4 months ago, and 520 mg/g today), confirming chronicity. Citing KDIGO 2024 CKD Guidelines, eGFR and albuminuria independently and synergistically predict CKD progression and cardiovascular mortality; the combined impact of reduced eGFR and persistent severe A3 albuminuria markedly amplifies long-term risk for kidney failure. Persistent severe albuminuria despite maximally tolerated foundational therapy (lisinopril 20 mg PO daily and empagliflozin 25 mg PO daily) indicates unaddressed residual cardiorenal risk. Guideline-directed management warrants adding non-steroidal mineralocorticoid receptor antagonist (nsMRA) therapy with finerenone 10–20 mg PO daily, supported by the CONFIDENCE, FIDELIO-DKD, and FIGARO-DKD clinical trials.' 
        }
      ] 
    },
    { 
      id: 'c_dm', 
      title: 'Type 2 Diabetes Mellitus with CKD (Reasonable Glycemic Control)', 
      icon: 'Droplet', 
      color: '0d9488',
      questions: [
        { 
          key: 'c_dm_eval', 
          q: 'Evaluation of glycemic control, metformin renal dosing, and cardiorenal endpoints:', 
          defaultAnswer: 'Status: Type 2 diabetes mellitus with CKD, reasonably controlled glycemic status with persistent cardiorenal risk. Current A1C is 7.2% (fasting blood glucose 136 mg/dL), near individualized goal of <7.0% per ADA 2026 and KDIGO 2024 guidelines. Adherence to metformin ER 1000 mg BID and empagliflozin 25 mg daily is confirmed with zero hypoglycemia. Citing KDIGO 2024 guidelines, diabetes management in CKD extends beyond glycemic control to cardiorenal risk reduction; persistent severe albuminuria represents unaddressed risk beyond glucose levels. Regarding metformin renal dosing, either continuing Metformin ER 1000 mg BID with eGFR monitoring OR reducing to 1000 mg total daily (500 mg BID) per ADA/KDIGO consensus for eGFR 30–44 mL/min/1.73m² is acceptable.' 
        }
      ] 
    },
    { 
      id: 'c_comm', 
      title: 'Patient-Centered Persuasion & Hyperkalemia Management Plan', 
      icon: 'HeartPulse', 
      color: '13314f',
      questions: [
        { 
          key: 'c_comm_eval', 
          q: 'Addressing analytical persuasion, hyperkalemia safety, and trial evidence:', 
          defaultAnswer: 'Management Strategy: Patient is a highly analytical electrical engineer who previously declined finerenone due to hyperkalemia fears, pill burden, and lack of clear evidence. For analytical patients, providing robust clinical trial evidence (the CONFIDENCE trial demonstrating dual SGLT2i + finerenone combination achieves significantly greater albuminuria reduction without compounding adverse events) is the key intervention. Hyperkalemia is a managed risk rather than an avoidance reason: baseline serum potassium is 4.8 mEq/L (acceptable for initiation <5.0 mEq/L per KDIGO 2024). Reassure patient by establishing scheduled potassium and eGFR monitoring (at 4 weeks post-initiation) and providing dietary potassium counseling. Discuss medication affordability and manufacturer copay assistance to alleviate financial concerns.' 
        }
      ] 
    },
    { 
      id: 'c_hld', 
      title: 'Hyperlipidemia & ASCVD Risk (Controlled LDL on Rosuvastatin 20 mg)', 
      icon: 'ShieldAlert', 
      color: 'd97706',
      questions: [
        { 
          key: 'c_hld_eval', 
          q: 'Evaluation of lipid control, ASCVD risk score, and risk enhancers:', 
          defaultAnswer: 'Status: Hyperlipidemia, controlled on high-intensity statin. Current LDL-C is 88 mg/dL (Total Chol 172 mg/dL, HDL 43 mg/dL, Triglycerides 178 mg/dL) on rosuvastatin 20 mg PO daily. Calculated 10-year ASCVD risk is 22.0%, placing him at very high cardiovascular risk. Per 2026 AHA/ACC Cholesterol Guidelines, key risk-enhancing conditions include type 2 diabetes mellitus, CKD Stage G3bA3 with severe albuminuria, essential hypertension, Class I obesity (BMI 32.3 kg/m²), and positive family history of premature CAD (brother coronary bypass at age 58). Continuing high-intensity rosuvastatin 20 mg daily is appropriate, targeting LDL-C <70 mg/dL for very high-risk cardiorenal disease.' 
        }
      ] 
    },
    { 
      id: 'c_htn', 
      title: 'Essential Hypertension', 
      icon: 'HeartPulse', 
      color: '13314f',
      questions: [
        { 
          key: 'c_htn_eval', 
          q: 'Evaluation of blood pressure control, target, and management strategy:', 
          defaultAnswer: 'Status: Essential hypertension, above treatment target. Office BP is 138/82 mmHg (repeat 136/80 mmHg); 7-day home BP log average of 136/80 mmHg corroborates office readings. Blood pressure target is <130/80 mmHg per 2025 AHA/ACC Hypertension Guidelines in CKD (with KDIGO systolic target <120 mmHg when standardized measurement is tolerated). Active regimen includes lisinopril 20 mg PO daily and amlodipine 5 mg PO daily. Defer immediate third antihypertensive escalation today while introducing finerenone, which provides modest complementary blood pressure reduction (2–4 mmHg systolic) alongside its antiproteinuric benefits; re-evaluate BP at follow-up.' 
        }
      ] 
    },
    { 
      id: 'c_obesity', 
      title: 'Obesity (Class I, BMI 32.3 kg/m²)', 
      icon: 'Scale', 
      color: 'ca8a04',
      questions: [
        { 
          key: 'c_ob_eval', 
          q: 'Evaluation of obesity, cardiometabolic impact, and lifestyle intervention:', 
          defaultAnswer: 'Classification: Weight 102 kg, height 5\'10" (70 inches), BMI 32.3 kg/m², classifying as Class I Obesity. Obesity directly contributes to cardiovascular disease, insulin resistance, and elevated intraglomerular pressure, accelerating CKD progression. Per 2026 AHA/ACC and KDIGO 2024 lifestyle guidelines, modest 5–10% weight loss provides dual benefits for glycemic, blood pressure, and renal endpoints. Patient walks 3 days/week; continue lifestyle intervention focusing on walking and dietary adjustments.' 
        }
      ] 
    },
    { 
      id: 'c_prevent', 
      title: 'Preventive Care & Health Maintenance Gaps', 
      icon: 'Heart', 
      color: '7c3aed',
      questions: [
        { 
          key: 'c_prev_eval', 
          q: 'Evaluation of immunization status and preventive health needs:', 
          defaultAnswer: 'Status: Preventive care and immunization gaps identified. Adults with CKD G3bA3 and type 2 diabetes have high vulnerability to vaccine-preventable infections: Pneumococcal conjugate vaccination (PCV20) is indicated for CKD/diabetes; Recombinant Zoster vaccine (Shingrix 2-dose series) is indicated for age ≥50; and Tdap booster is overdue per CDC Adult Immunization Schedule. Recommend verifying immunization registry and administering indicated vaccines.' 
        }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { 
      id: 'c_p_renal', 
      title: 'Cardiorenal & Finerenone plan', 
      options: [
        { key: 'c_o1', label: 'Initiate finerenone 10 mg PO once daily (with food or without) for residual severe albuminuria despite ACEi + SGLT2i, supported by CONFIDENCE and KDIGO 2024 guidelines', correct: true },
        { key: 'c_o2', label: 'Continue foundational cardiorenal therapy: continue lisinopril 20 mg PO once daily, continue empagliflozin 25 mg PO once daily, continue rosuvastatin 20 mg PO once daily', correct: true },
        { key: 'c_o3', label: 'Continue metformin ER 1000 mg BID with eGFR monitoring OR reduce to 1000 mg total daily (500 mg BID) per ADA/KDIGO renal dose consensus for eGFR 30-44 mL/min/1.73m²', correct: true },
        { key: 'c_o4', label: 'Order serum potassium and eGFR/SCr recheck at 4 weeks post-initiation (withhold or adjust if potassium >5.5 mEq/L)', correct: true },
        { key: 'c_o5', label: 'Order repeat spot UACR in 3-4 months to assess albuminuria reduction target (>=30% reduction from baseline)', correct: true },
        { key: 'c_o6', label: 'Stop the SGLT2i before starting finerenone', correct: false },
      ] 
    },
    { 
      id: 'c_p_dm', 
      title: 'Diabetes management plan', 
      options: [
        { key: 'c_dm_o1', label: 'Continue empagliflozin 25 mg PO once daily and metformin ER (1000 mg BID or 500 mg BID)', correct: true },
        { key: 'c_dm_o2', label: 'Individualized glycemic target: A1C <7.0% per ADA 2026 / KDIGO 2024 standards', correct: true },
        { key: 'c_dm_o3', label: 'Continue dietary modifications and fasting glucose monitoring', correct: true },
        { key: 'c_dm_o4', label: 'Order repeat A1C in 3 months', correct: true },
      ] 
    },
    { 
      id: 'c_p_hld', 
      title: 'Hyperlipidemia / ASCVD plan', 
      options: [
        { key: 'c_hld_o1', label: 'Continue rosuvastatin 20 mg PO once daily at bedtime', correct: true },
        { key: 'c_hld_o2', label: 'Reinforce cardiovascular and renal risk reduction benefits of high-intensity statin therapy', correct: true },
        { key: 'c_hld_o3', label: 'Treatment target: LDL-C <70 mg/dL per 2026 AHA/ACC Guidelines for very high ASCVD risk', correct: true },
        { key: 'c_hld_o4', label: 'Order repeat lipid panel in 3-6 months', correct: true },
      ] 
    },
    { 
      id: 'c_p_htn', 
      title: 'Hypertension plan', 
      options: [
        { key: 'c_htn_o1', label: 'Continue lisinopril 20 mg PO once daily', correct: true },
        { key: 'c_htn_o2', label: 'Continue amlodipine 5 mg PO once daily', correct: true },
        { key: 'c_htn_o3', label: 'Blood pressure treatment target: <130/80 mmHg per 2025 AHA/ACC Hypertension Guidelines in CKD (KDIGO <120 SBP when tolerated)', correct: true },
        { key: 'c_htn_o4', label: 'Continue structured home blood pressure monitoring (HBPM) and maintain written log', correct: true },
        { key: 'c_htn_o5', label: 'Re-evaluate BP control at follow-up after finerenone initiation', correct: true },
      ] 
    },
    { 
      id: 'c_p_persuasion', 
      title: 'Patient persuasion & hyperkalemia education plan', 
      options: [
        { key: 'c_pers_o1', label: 'Provide analytical clinical trial data (CONFIDENCE trial) explaining that combining finerenone with an SGLT2i provides additive albuminuria reduction and kidney protection', correct: true },
        { key: 'c_pers_o2', label: 'Counsel on scheduled potassium monitoring (baseline 4.8 mEq/L, recheck in 4 weeks) to manage hyperkalemia risk safely', correct: true },
        { key: 'c_pers_o3', label: 'Provide dietary potassium education (avoiding salt substitutes containing potassium chloride, moderating high-potassium foods)', correct: true },
        { key: 'c_pers_o4', label: 'Discuss medication affordability, insurance coverage navigation, and copay assistance programs to address pill burden and cost concerns', correct: true },
      ] 
    },
    { 
      id: 'c_p_life', 
      title: 'Lifestyle & weight management plan', 
      options: [
        { key: 'c_life_o1', label: 'Continue structured walking program, progressing toward >=150 minutes/week of moderate physical activity', correct: true },
        { key: 'c_life_o2', label: 'Reinforce diabetic dietary modifications: moderate carbohydrate intake, consistent meal timing, and avoid high-sodium processed foods', correct: true },
        { key: 'c_life_o3', label: 'Encourage gradual 5-7% weight reduction to improve insulin sensitivity and lower intraglomerular pressure', correct: true },
      ] 
    },
    { 
      id: 'c_p_prevent', 
      title: 'Preventive care / immunization plan', 
      options: [
        { key: 'c_prev_o1', label: 'Recommend Pneumococcal conjugate vaccination (PCV20) for CKD and diabetes', correct: true },
        { key: 'c_prev_o2', label: 'Recommend Recombinant Zoster vaccine (Shingrix) 2-dose series (dose 1 today, dose 2 in 2-6 months) for age >=50', correct: true },
        { key: 'c_prev_o3', label: 'Recommend Tdap booster (overdue per CDC guidelines)', correct: true },
      ] 
    },
    { 
      id: 'c_p_followup', 
      title: 'Follow-up & monitoring plan', 
      options: [
        { key: 'c_foll_o1', label: 'Schedule safety lab follow-up in 4 weeks for serum potassium and renal panel (BMP)', correct: true },
        { key: 'c_foll_o2', label: 'Schedule comprehensive follow-up visit in 3 months', correct: true },
        { key: 'c_foll_o3', label: 'Order pre-visit laboratory testing: CMP (electrolytes, BUN, SCr, eGFR, LFTs), spot UACR, A1C, and fasting lipid panel', correct: true },
        { key: 'c_foll_o4', label: 'Review 7-day home BP log and reassess finerenone tolerability, adherence, and willingness to sustain therapy', correct: true },
      ] 
    },
  ],
  GUIDING_QUESTIONS: [
    'Why is this patient considered high risk despite reasonable A1C and LDL-C values?',
    'What does UACR 520 mg/g tell you?',
    'Why might finerenone have been recommended previously?',
    'What barriers prevented therapy initiation?',
    'What additional information is needed before recommending therapy?',
    'What should be monitored moving forward?'
  ],
  COUNSELING: [
    { id: 'c_c1', title: 'The "why" behind finerenone', body: [
      "Your ACE inhibitor and SGLT2 inhibitor are doing a lot — but your urine protein is still high, which means there's risk left on the table.",
      "Finerenone targets that residual risk. In the CONFIDENCE trial, combining it with your SGLT2 inhibitor lowered urine protein substantially more than either alone.",
      "Potassium can rise, so we don't ignore it — we check it before and after starting, and adjust if needed. That's a managed risk, not a reason to skip a kidney-protective drug." ] },
  ],
  PRECEPTOR: {
    keyIssues: ['CKD G3bA3 — severe albuminuria despite optimized foundational therapy', 'Previously declined finerenone (pill burden, hyperkalemia, cost, no rationale)', 'Highly analytical — needs evidence'],
    assessment: ['Persistent A3 albuminuria signals residual risk that finerenone targets', 'CONFIDENCE supports finerenone + SGLT2i combination for greater albuminuria reduction', 'Hyperkalemia is monitored, not avoided'],
    plan: ['Initiate finerenone with a potassium monitoring plan', 'Continue ACEi, SGLT2i, statin, metformin', 'Educate with the evidence; recheck K/eGFR/UACR'],
    pearls: ['Foundational therapy ≠ maximal therapy — residual albuminuria is the signal to add finerenone', 'For analytical patients, the evidence IS the intervention'],
    mistakes: ['Accepting persistent severe albuminuria as "optimized"', 'Avoiding finerenone solely for hyperkalemia risk', 'Stopping the SGLT2i to "make room"'],
    followupQuestions: ['What potassium threshold changes your finerenone plan?', 'How will you measure benefit at 3 months?'],
    checklist: ['Identified residual albuminuria', 'Surfaced the declined finerenone + reasons', 'Built an evidence-based, monitored finerenone plan', 'Continued foundational therapy'],
  },
})

const davidWed = makeCase({
  id: 'w2-david-wed',
  IMMUNIZATIONS: davidTue.IMMUNIZATIONS,
  ALLERGIES: davidTue.ALLERGIES,
  PATIENT: davidTue.PATIENT,
  ENCOUNTER: { week: 'Week 2', 
    day: 'Wednesday', type: '3-month follow-up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "I started the finerenone. My potassium went up a little and my kidney number dipped — should I be worried?",
    setting: 'ambulatory care pharmacy clinic under collaborative practice agreement',
    snapshotSummary: 'Three months after adding finerenone. Albuminuria improving markedly; expected small eGFR dip and a potassium rise to 5.1 — interpret in context rather than reflexively stopping therapy.',
    diseaseStates: ['Type 2 Diabetes', 'CKD G3bA3', 'Hyperlipidemia', 'Hypertension', 'Obesity'],
    learningObjectives: ['Interpret finerenone potassium/eGFR monitoring in context', 'Recognize albuminuria response', 'Coach an anxious analytical patient through expected changes', 'Address preventive care gaps'],
  },
  VITALS: { bp: '132/78', bpRepeat: '130/76', hr: '70', rr: '16', temp: '98.1°F', weight: '101 kg', height: "5'10\"", bmi: '31.9',
    flags: { bp: 'warn', bpRepeat: 'warn', bmi: 'warn' } },
  LABS: [
    { label: 'Na', value: '138', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '5.1', unit: 'mEq/L', flag: 'warn', note: 'Up from 4.8 mEq/L — mild expected rise after finerenone; monitor, contextualize' },
    { label: 'SCr', value: '1.90', unit: 'mg/dL', flag: 'warn', note: 'Slight increase from baseline 1.74 mg/dL' },
    { label: 'eGFR', value: '40', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Expected small dip from baseline 42 mL/min (~4.8% hemodynamic effect after finerenone)' },
    { label: 'AST', value: '22', unit: 'U/L', flag: 'normal' },
    { label: 'ALT', value: '21', unit: 'U/L', flag: 'normal' },
    { label: 'Total cholesterol', value: '168', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '82', unit: 'mg/dL', flag: 'warn', note: 'Well-controlled on rosuvastatin 20 mg PO daily; target <70 mg/dL' },
    { label: 'HDL-C', value: '44', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '170', unit: 'mg/dL', flag: 'normal' },
    { label: 'A1C', value: '7.0', unit: '%', flag: 'warn', note: 'Improved from baseline 7.2% on metformin ER + empagliflozin' },
    { label: 'UACR', value: '390', unit: 'mg/g', flag: 'high', note: 'Improved from baseline 520 mg/g (~25% early reduction; remains Category A3)' },
  ],
  ALERTS: [{ level: 'warn', text: 'Potassium 5.1 and a small eGFR dip after finerenone — interpret in context; do not reflexively discontinue.' }],
  PROBLEMS: [
    { name: 'Chronic kidney disease, Stage G3bA3', detail: 'eGFR 40 mL/min, UACR 390 mg/g (improved from 520; favorable early response)', flag: 'high' },
    { name: 'Type 2 diabetes with CKD', detail: 'A1C 7.0% (improved from 7.2%; well-controlled on metformin + empagliflozin)', flag: 'warn' },
    { name: 'Hyperlipidemia / Elevated ASCVD Risk', detail: 'LDL-C 82 mg/dL on Rosuvastatin 20 mg PO daily; ASCVD risk 20.5%', flag: 'normal' },
    { name: 'Essential hypertension', detail: 'BP 132/78 mmHg (repeat 130/76; improved from baseline 136/80)', flag: 'warn' },
    { name: 'Obesity (Class I)', detail: 'Weight 101 kg (down 1 kg from 102 kg), BMI 31.9 kg/m²', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Metformin ER', dose: '1000 mg', route: 'PO', freq: 'BID', indication: 'T2DM', notes: 'Continue 1000 mg BID with renal monitoring or renal dose adjust to 1000 mg total daily' },
    { name: 'Empagliflozin', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'T2DM / Cardiorenal protection', notes: 'Continue' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: 'Continue' },
    { name: 'Rosuvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia / ASCVD prevention', notes: 'Continue' },
    { name: 'Amlodipine', dose: '5 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: 'Continue' },
    { name: 'Finerenone', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'CKD Stage G3bA3 / cardiorenal protection', notes: 'Continue; favorable albuminuria response' },
  ],
  ALLERGIES: [{ substance: 'No known drug allergies (NKDA)', reaction: 'None', severity: 'None', type: 'None' }],
  SUBJECTIVE_DOCUMENTED: [
    {
      label: 'Reason for visit & clinical setting',
      value: 'Scheduled 3-month follow-up encounter in an ambulatory care pharmacy clinic under collaborative practice agreement for complex cardiorenal risk reduction, type 2 diabetes, and CKD management.'
    },
    {
      label: 'Interval history & general wellbeing',
      value: 'Patient reports feeling well overall since previous visit. Successfully initiated finerenone 10 mg PO daily with excellent adherence (only 1 missed dose in 3 months). Acknowledges absence of hospitalizations or emergency department visits.'
    },
    {
      label: 'Symptom review & hyperkalemia screening',
      value: 'Explicitly denies muscle weakness, numbness, tingling, palpitations, cardiac arrhythmias, or nausea (denies symptoms of hyperkalemia). Denies hypoglycemia symptoms.'
    },
    {
      label: 'Therapy comfort & lab interpretation questions',
      value: 'Patient feels more comfortable with finerenone after understanding its renal benefits, but noticed the small eGFR decrease (from 42 to 40 mL/min) and potassium increase (from 4.8 to 5.1 mEq/L); asks whether this indicates disease worsening or an expected medication effect. Noticed the substantial drop in urine protein / albuminuria on lab results.'
    },
    {
      label: 'Past Medical History (PMH)',
      value: 'Type 2 diabetes mellitus (diagnosed 10 years ago), chronic kidney disease Stage G3bA3 (severe albuminuria, diagnosed 3 years ago), essential hypertension (12 years), hyperlipidemia (8 years), and Class I Obesity (BMI 31.9 kg/m²).'
    },
    {
      label: 'Past Surgical History (PSH)',
      value: 'Explicitly denies any past surgical history (absent / no prior surgeries).'
    },
    {
      label: 'Social History',
      value: 'Occupation: Structural engineer at consulting firm. Marital status: Married, lives with wife. Tobacco history: Former smoker (quit 8 years ago, 12 pack-year history). Alcohol use: Occasional alcohol (1–2 beers on weekends). Recreational drugs: Explicitly denies any illicit or recreational drug use. Continues diabetic diet, watching carbohydrates and sodium.'
    },
    {
      label: 'Review of Systems (ROS)',
      value: 'Cardiovascular/Pulmonary/Neurologic/Renal: Explicitly denies chest pain, shortness of breath, palpitations, dizziness, syncope, and lower extremity edema. Denies gross hematuria, dysuria, or urinary complaints.'
    },
    {
      label: 'Patient Goals & Motivators',
      value: 'Deeply motivated to avoid dialysis and prevent end-stage kidney disease (motivated by mother suffering from diabetic kidney disease). Highly committed to preserving long-term kidney function and avoiding cardiovascular complications.'
    },
    {
      label: 'Home Blood Pressure Monitoring',
      value: 'Home BP log shows 7-day average of ~131/77 mmHg (range 126–136/74–80 mmHg), consistent with office BP readings.'
    }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Body Surface Area (Mosteller)', value: '2.23 m²', flag: 'normal' },
    { label: '10-Year ASCVD Risk Score', value: '20.5% — High risk', flag: 'high' },
    { label: 'Home BP log', value: '7-day average ≈ 131/77 mmHg (range 126–136/74–80), consistent with office BP', flag: 'normal' },
    { label: 'Prior Visit Trend Comparisons', value: 'UACR: 520 → 390 mg/g (~25% early reduction, remains A3); K: 4.8 → 5.1 mEq/L (mild expected rise); eGFR: 42 → 40 mL/min/1.73m² (small hemodynamic dip); A1C: 7.2% → 7.0% (improved); BP: 136/80 → 132/78 mmHg (improved); Weight: 102 → 101 kg', flag: 'normal' },
    { label: 'Objective Clinical Interpretations', value: 'eGFR 40: Stable Stage G3b filtration with expected ~4.8% hemodynamic dip; UACR 390: Substantial early albuminuria improvement on finerenone, though persists in Category A3; K 5.1: Mild asymptomatic expected elevation, well below 5.5 threshold; A1C 7.0%: Improved glycemic control; BP 132/78: Improved blood pressure control', flag: 'normal' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'potassium', label: 'Potassium worry / symptoms', placeholder: 'Concerns, symptoms…' },
    { key: 'adherence', label: 'Finerenone adherence/tolerability', placeholder: 'How it’s going…' },
  ],
  GUIDING_QUESTIONS: [
    'What findings suggest finerenone is providing benefit?',
    'Why should potassium be monitored?',
    'Would you discontinue therapy today?',
    'How would you counsel this patient regarding the eGFR change?',
    'What residual risks remain?',
    'What monitoring should occur before the next visit?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w2-david-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w2-david-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take CoQ10 100 mg daily, Fish Oil 1000 mg daily, and a daily multivitamin." },
    { id: 'w2-david-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink moderately—about 1 to 2 glasses of red wine per week with dinner." },
    { id: 'w2-david-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w2-david-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a heart attack at age 58 and also had type 2 diabetes. My mother has type 2 diabetes and chronic kidney disease. My brother has coronary artery disease and had bypass surgery at age 58." },
    { id: 'w2-david-wed_social', topic: 'Social history', field: 'hpiNarrative', keywords: ['married', 'marital', 'live', 'alone', 'partner', 'spouse', 'job', 'work', 'occupation', 'engineer', 'retire'], response: "I am married and live at home with my wife. I am an electrical engineer — I analyze data for a living, which explains why I like to understand my lab trends so carefully." },
    { id: 'w2-david-wed_exer', topic: 'Physical activity', field: 'exercise', keywords: ['exercise', 'walk', 'activity', 'active', 'gym', 'sport', 'run', 'physical', 'routine'], response: "I have been keeping up my walking routine — about 3 to 4 days a week. I think staying active is important with my conditions." },
    { id: 'w2-david-wed_bp', topic: 'Home BP log', field: 'homeBp', keywords: ['home', 'check', 'blood pressure at home', 'monitor', 'log', 'cuff', 'readings', 'average'], response: "My home blood pressure readings have been improving on the new regimen. They average about 131/77 mmHg (ranging from 126–136 SBP / 74–80 DBP)." },
    { id: 'cw_k', topic: 'Potassium concern', field: 'potassium', keywords: ['potassium', 'hyperkalem', 'worried', 'number', 'went up', 'symptom', 'cramp', 'weak'],
      response: "I noticed my potassium went up to 5.1 and my kidney number dipped. I don't feel any cramps or weakness, but it makes me nervous." },
    { id: 'cw_adh', topic: 'Finerenone adherence', field: 'adherence', keywords: ['finerenone', 'start', 'adherence', 'miss', 'taking', 'tolerate'],
      response: "I've been taking the finerenone every day — only missed one dose. Otherwise I feel fine." },
  ],
  ASSESSMENT_CARDS: [
    {
      id: 'cw_ckd',
      title: 'Chronic Kidney Disease Stage G3bA3 & Finerenone Response',
      icon: 'FlaskConical',
      color: 'dc2626',
      questions: [
        {
          key: 'cw_ckd_eval',
          q: 'Evaluation of CKD staging, albuminuria reduction, and finerenone benefit:',
          defaultAnswer: 'Status: CKD Stage G3bA3, persistent high risk with favorable early albuminuria improvement on finerenone. Dual-axis classification: eGFR 40 mL/min/1.73m² (baseline 42 mL/min, SCr 1.74 to 1.90 mg/dL) confirms Stage G3b moderate-to-severe reduction in filtration; UACR decreased from baseline 520 mg/g to 390 mg/g (reflecting a favorable ~25% early reduction, though confirming persistent Category A3 severely increased albuminuria). Improvement is directly attributed to successful finerenone initiation. Cites KDIGO 2024 CKD Guideline: dual-axis staging confirms high residual risk; nonsteroidal MRA addition to SGLT2i + ACEi/ARB significantly slows CKD progression, reduces ESKD, and lowers cardiovascular mortality. Favorable early treatment response reduces long-term progression risk, though residual CKD progression risk remains elevated.'
        }
      ]
    },
    {
      id: 'cw_fin_safety',
      title: 'Finerenone Tolerability & Safety Monitoring (Potassium & Hemodynamic eGFR Dip)',
      icon: 'ShieldCheck',
      color: '0891b2',
      questions: [
        {
          key: 'cw_fin_eval',
          q: 'Evaluation of potassium elevation, eGFR dip, and benefit-risk balance:',
          defaultAnswer: 'Status: Finerenone therapy appropriately initiated via shared decision-making; early pharmacologic response favorable. Serum potassium increased from baseline 4.8 mEq/L to 5.1 mEq/L (mild asymptomatic hyperkalemia, within expected safety threshold <5.5 mEq/L). eGFR decreased from baseline 42 to 40 mL/min/1.73m² (~4.8% hemodynamic dip, well within acceptable <30% threshold). The mild potassium rise and slight eGFR decline represent expected hemodynamic and pharmacological effects of nonsteroidal MRA therapy rather than acute kidney injury or intrinsic disease progression. Explicitly concludes that cardiorenal benefits (25% albuminuria drop, reduction in CKD progression and CV death) strongly outweigh risks. Continue finerenone 10 mg PO daily with routine potassium monitoring and dietary guidance.'
        }
      ]
    },
    {
      id: 'cw_t2dm',
      title: 'Type 2 Diabetes Mellitus with CKD',
      icon: 'Activity',
      color: 'ca8a04',
      questions: [
        {
          key: 'cw_t2dm_eval',
          q: 'Evaluation of glycemic control, cardiorenal protection, and hypoglycemia status:',
          defaultAnswer: 'Status: Type 2 diabetes mellitus with CKD, glycemic control improved. Hemoglobin A1C improved from baseline 7.2% to 7.0%, meeting individualized ADA/KDIGO target (~7.0-7.5% for CKD G3b). Patient demonstrates excellent adherence to metformin ER and empagliflozin 25 mg PO daily with zero hypoglycemia symptoms. Cites ADA/KDIGO consensus: prioritizing cardiorenal protective glucose-lowering agents (SGLT2 inhibitors) is foundational in diabetic kidney disease. Current glycemic management is appropriate, safe, and effective.'
        }
      ]
    },
    {
      id: 'cw_hld',
      title: 'Hyperlipidemia / Elevated Cardiovascular Risk',
      icon: 'Droplet',
      color: '13314f',
      questions: [
        {
          key: 'cw_hld_eval',
          q: 'Evaluation of lipid control, statin therapy, and cardiovascular risk enhancers:',
          defaultAnswer: 'Status: Hyperlipidemia, stable and well-controlled on rosuvastatin 20 mg PO daily. Fasting lipid panel demonstrates LDL-C 82 mg/dL. Cites 2026 AHA/ACC Cholesterol Guidelines: CKD and diabetes are major ASCVD risk-enhancing conditions. Residual risk-enhancing factors include CKD Stage G3bA3, type 2 diabetes, essential hypertension, Class I obesity, and positive family history of premature ASCVD (father MI at 58, brother CAD at 58). Continue rosuvastatin 20 mg PO daily as cornerstone therapy for cardiovascular risk reduction; treatment target is LDL-C <70 mg/dL.'
        }
      ]
    },
    {
      id: 'cw_htn',
      title: 'Essential Hypertension',
      icon: 'HeartPulse',
      color: '13314f',
      questions: [
        {
          key: 'cw_htn_eval',
          q: 'Evaluation of blood pressure status, home/office consistency, and finerenone contribution:',
          defaultAnswer: 'Status: Essential hypertension, improved and well-controlled. Office BP is 132/78 mmHg (repeat 130/76 mmHg), improved from baseline (136/80 mmHg). 7-day home BP log (average 131/77 mmHg, range 126-136/74-80 mmHg) is highly consistent with office readings. Cites KDIGO 2024 / 2025 AHA/ACC Hypertension Guidelines: BP target in CKD is <130/80 mmHg (KDIGO systolic <120 mmHg when tolerated) to slow CKD progression. Finerenone provides a modest complementary blood-pressure-lowering effect. Current antihypertensive therapy (lisinopril 20 mg PO daily + amlodipine 5 mg PO daily) is effective, well-tolerated, and should continue.'
        }
      ]
    },
    {
      id: 'cw_understanding',
      title: 'Disease & Medication Understanding (Lab Interpretation Coaching)',
      icon: 'BookOpen',
      color: '0891b2',
      questions: [
        {
          key: 'cw_under_eval',
          q: 'Addressing patient lab anxiety, expected monitoring parameters, and treatment goals:',
          defaultAnswer: 'Status: Substantially improved understanding of CKD progression risk and finerenone rationale. Patient\'s remaining concerns are regarding lab interpretation (understanding that the small eGFR dip and potassium 5.1 are expected pharmacological effects) rather than opposition to therapy. Provide structured patient education regarding expected monitoring parameters, treatment goals, and distinction between expected drug mechanism and disease progression.'
        }
      ]
    },
    {
      id: 'cw_obesity',
      title: 'Class I Obesity & Lifestyle Modifications',
      icon: 'Scale',
      color: 'ca8a04',
      questions: [
        {
          key: 'cw_ob_eval',
          q: 'Evaluation of obesity, lifestyle modifications, and cardiorenal impact:',
          defaultAnswer: 'Status: Class I Obesity (BMI 31.9 kg/m²), weight 101 kg (down 1 kg from 102 kg). Weight loss and ongoing walking (3-4 days/week) provide cumulative cardiorenal benefits. Cites KDIGO 2024 and ADA/AHA lifestyle guidelines: continued lifestyle modification and gradual weight reduction provide dual benefits for glycemic control, blood pressure lowering, and intraglomerular pressure reduction.'
        }
      ]
    },
    {
      id: 'cw_prevent',
      title: 'Preventive Care Gaps & Health Maintenance',
      icon: 'ShieldAlert',
      color: '7c3aed',
      questions: [
        {
          key: 'cw_prev_eval',
          q: 'Evaluation of immunization status and preventive health needs:',
          defaultAnswer: 'Status: Preventive care and immunization gaps identified: Pneumococcal conjugate vaccination (PCV20) is indicated for CKD Stage G3b; Recombinant Zoster vaccine (Shingrix 2-dose series) is indicated for age ≥50; and Tdap booster is overdue (>10 years since last dose). Immunization catch-up should be actively recommended.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    {
      id: 'cw_p_cardiorenal',
      title: 'Cardiorenal & Finerenone Plan',
      options: [
        { key: 'cw_cr_o1', label: 'Continue finerenone 10 mg PO once daily for renal and cardiovascular protection', correct: true },
        { key: 'cw_cr_o2', label: 'Continue lisinopril 20 mg PO once daily (foundational RAAS inhibitor)', correct: true },
        { key: 'cw_cr_o3', label: 'Continue empagliflozin 25 mg PO once daily (foundational SGLT2 inhibitor)', correct: true },
        { key: 'cw_cr_o4', label: 'Plan ongoing renal function (SCr/eGFR) and spot UACR monitoring in ~3 months', correct: true },
        { key: 'cw_cr_o5', label: 'Reinforce ongoing cardiorenal risk reduction benefits of triple foundational therapy (RAASi + SGLT2i + nsMRA)', correct: true },
        { key: 'cw_cr_o6', label: 'Discontinue finerenone immediately for a potassium of 5.1', correct: false }
      ]
    },
    {
      id: 'cw_p_potassium',
      title: 'Potassium Management & Safety Monitoring Plan',
      options: [
        { key: 'cw_k_o1', label: 'Provide education on hyperkalemia symptoms: instruct patient to report any unexplained muscle weakness, severe fatigue, numbness/tingling, or palpitations', correct: true },
        { key: 'cw_k_o2', label: 'Provide dietary potassium counseling: guide patient on high-potassium foods (bananas, potatoes, tomatoes) and portion control without eliminating healthy produce', correct: true },
        { key: 'cw_k_o3', label: 'Recheck serum potassium and CMP in 4-8 weeks (before next routine follow-up)', correct: true },
        { key: 'cw_k_o4', label: 'Continue ongoing eGFR monitoring, recognizing the ~4.8% dip as an expected hemodynamic effect rather than acute kidney injury', correct: true }
      ]
    },
    {
      id: 'cw_p_diabetes',
      title: 'Diabetes Management Plan',
      options: [
        { key: 'cw_dm_o1', label: 'Continue metformin ER (continue 1,000 mg BID with renal monitoring OR reduce to 1,000 mg total daily per ADA/KDIGO consensus for eGFR 30-44 mL/min)', correct: true },
        { key: 'cw_dm_o2', label: 'Continue empagliflozin 25 mg PO once daily for cardiorenal protection and glycemic control', correct: true },
        { key: 'cw_dm_o3', label: 'Reinforce diabetic dietary modifications and carbohydrate management', correct: true },
        { key: 'cw_dm_o4', label: 'Order repeat hemoglobin A1C before follow-up in ~3 months', correct: true }
      ]
    },
    {
      id: 'cw_p_hld',
      title: 'Hyperlipidemia Plan',
      options: [
        { key: 'cw_hld_o1', label: 'Continue rosuvastatin 20 mg PO once daily at bedtime', correct: true },
        { key: 'cw_hld_o2', label: 'Treatment target: LDL-C <70 mg/dL (or >=50% reduction from baseline)', correct: true },
        { key: 'cw_hld_o3', label: 'Order repeat fasting lipid panel in ~3 months before next visit', correct: true },
        { key: 'cw_hld_o4', label: 'Reinforce comprehensive cardiovascular risk reduction strategies', correct: true }
      ]
    },
    {
      id: 'cw_p_htn',
      title: 'Hypertension Plan',
      options: [
        { key: 'cw_htn_o1', label: 'Continue lisinopril 20 mg PO once daily for blood pressure control', correct: true },
        { key: 'cw_htn_o2', label: 'Continue amlodipine 5 mg PO once daily', correct: true },
        { key: 'cw_htn_o3', label: 'Blood pressure treatment target: <130/80 mmHg per 2025 AHA/ACC Guidelines (KDIGO <120 SBP when tolerated)', correct: true },
        { key: 'cw_htn_o4', label: 'Continue structured home blood pressure monitoring (HBPM) >=3-4 days/week and maintain a written log', correct: true }
      ]
    },
    {
      id: 'cw_p_life',
      title: 'Lifestyle & Weight Management Plan',
      options: [
        { key: 'cw_life_o1', label: 'Continue walking program: progress toward >=150 minutes/week of moderate physical activity', correct: true },
        { key: 'cw_life_o2', label: 'Continue diabetic meal planning with portion control and dietary sodium reduction (<2000 mg/day)', correct: true },
        { key: 'cw_life_o3', label: 'Continue weight-loss efforts targeting gradual 5-10% total weight reduction', correct: true }
      ]
    },
    {
      id: 'cw_p_prevent',
      title: 'Preventive Care & Immunization Plan',
      options: [
        { key: 'cw_prev_o1', label: 'Clarify and recommend Pneumococcal conjugate vaccination (PCV20) for CKD Stage 3b', correct: true },
        { key: 'cw_prev_o2', label: 'Recommend Recombinant Zoster vaccine (Shingrix) 2-dose series for age >=50', correct: true },
        { key: 'cw_prev_o3', label: 'Recommend Tdap booster today (overdue per CDC guidelines)', correct: true }
      ]
    },
    {
      id: 'cw_p_foll',
      title: 'Follow-up & Monitoring Plan',
      options: [
        { key: 'cw_foll_o1', label: 'Schedule comprehensive collaborative practice follow-up visit in 3 months', correct: true },
        { key: 'cw_foll_o2', label: 'Order pre-visit laboratory testing: CMP (potassium, renal function, electrolytes, LFTs), spot UACR, hemoglobin A1C, and fasting lipid panel', correct: true },
        { key: 'cw_foll_o3', label: 'Collect home blood pressure log readings before next visit', correct: true },
        { key: 'cw_foll_o4', label: 'Reassess serum potassium, renal function stability, albuminuria reduction, glycemic control, and cardiorenal risk reduction at follow-up', correct: true }
      ]
    }
  ],
  COUNSELING: [
    { id: 'c_wed_c1', title: 'Addressing potassium anxiety', body: [
      "Your potassium went up slightly, which is completely expected with this medication — but it is still safe.",
      "We will always monitor your labs closely so you don't have to worry about it creeping up unnoticed.",
      "The benefit to your kidneys from lowering that protein in your urine far outweighs this mild potassium change." ] }
  ],
  GUIDING_QUESTIONS: [
    'What findings suggest finerenone is providing benefit?',
    'Why should potassium be monitored?',
    'Would you discontinue therapy today?',
    'How would you counsel this patient regarding the eGFR change?',
    'What residual risks remain?',
    'What monitoring should occur before the next visit?'
  ],
  PRECEPTOR: {
    keyIssues: ['Albuminuria improving on finerenone', 'Potassium 5.1 + expected eGFR dip', 'Anxious analytical patient'],
    assessment: ['Falling UACR shows the drug is working', 'Potassium 5.1 is interpreted in context — monitor, counsel diet, don’t reflexively stop', 'eGFR dip is expected'],
    plan: ['Continue finerenone; recheck potassium', 'Dietary potassium counseling', 'Continue foundational therapy'],
    pearls: ['A modest potassium rise is a monitoring event, not an automatic discontinuation', 'Show the analytical patient the UACR trend — data reassures him'],
    mistakes: ['Stopping finerenone reflexively at K 5.1', 'Stopping the SGLT2i for the expected eGFR dip'],
    followupQuestions: ['What potassium value would change your plan?'],
    checklist: ['Continued finerenone appropriately', 'Managed potassium with monitoring/diet', 'Interpreted UACR/eGFR correctly'],
  },
})

const davidThu = makeCase({
  id: 'w2-david-thu',
  IMMUNIZATIONS: davidTue.IMMUNIZATIONS,
  ALLERGIES: davidTue.ALLERGIES,
  PATIENT: davidTue.PATIENT,
  ENCOUNTER: { week: 'Week 2', 
    day: 'Thursday', type: 'six-month follow-up', difficulty: 'Advanced', difficultyTone: 'amber',
    chiefConcern: "My potassium settled and the protein keeps dropping. This makes sense now.",
    setting: 'ambulatory care pharmacy clinic under collaborative practice agreement',
    snapshotSummary: 'Six months in. Albuminuria down from 520 to 290, potassium normalized, kidney function stable — the combination cardiorenal strategy is working. Consolidate and set long-term monitoring.',
    diseaseStates: ['Type 2 Diabetes', 'CKD G3bA3', 'Hyperlipidemia', 'Hypertension', 'Obesity'],
    learningObjectives: ['Interpret longitudinal UACR/eGFR/potassium trends', 'Confirm the combination cardiorenal strategy', 'Set durable monitoring and connect to CONFIDENCE', 'Address preventive care gaps'],
  },
  VITALS: { bp: '128/76', bpRepeat: '126/74', hr: '68', rr: '16', temp: '98.2°F', weight: '99 kg', height: "5'10\"", bmi: '31.3',
    flags: { bp: 'normal', bpRepeat: 'normal', bmi: 'warn' } },
  LABS: [
    { label: 'Na', value: '139', unit: 'mEq/L', flag: 'normal' },
    { label: 'K', value: '4.9', unit: 'mEq/L', flag: 'normal', note: 'Settled from 5.1; normal' },
    { label: 'SCr', value: '1.85', unit: 'mg/dL', flag: 'warn', note: 'Stabilized from 1.90; baseline 1.74 mg/dL' },
    { label: 'eGFR', value: '41', unit: 'mL/min/1.73m²', flag: 'warn', note: 'Stabilized from 40; baseline 42 mL/min' },
    { label: 'AST', value: '21', unit: 'U/L', flag: 'normal' },
    { label: 'ALT', value: '20', unit: 'U/L', flag: 'normal' },
    { label: 'Total cholesterol', value: '160', unit: 'mg/dL', flag: 'normal' },
    { label: 'LDL-C', value: '74', unit: 'mg/dL', flag: 'normal', note: 'Well-controlled on Rosuvastatin 20 mg PO daily; target <70 mg/dL' },
    { label: 'HDL-C', value: '46', unit: 'mg/dL', flag: 'normal' },
    { label: 'Triglycerides', value: '154', unit: 'mg/dL', flag: 'normal' },
    { label: 'A1C', value: '6.9', unit: '%', flag: 'normal', note: 'Improved from baseline 7.2% and 3-month 7.0%' },
    { label: 'UACR', value: '290', unit: 'mg/g', flag: 'high', note: '520 → 390 → 290 mg/g (~44% longitudinal reduction; transitioning toward A2)' },
  ],
  ALERTS: [{ level: 'info', text: 'Marked albuminuria reduction, normalized potassium, stable kidney function on combination cardiorenal therapy.' }],
  PROBLEMS: [
    { name: 'Chronic kidney disease, Stage G3bA3', detail: 'eGFR 41 mL/min, UACR 290 mg/g (down from 520; marked longitudinal response)', flag: 'high' },
    { name: 'Type 2 diabetes with CKD', detail: 'A1C 6.9% (at goal on metformin + empagliflozin)', flag: 'normal' },
    { name: 'Hyperlipidemia / Elevated ASCVD Risk', detail: 'LDL-C 74 mg/dL on Rosuvastatin 20 mg PO daily; target <70', flag: 'normal' },
    { name: 'Essential hypertension', detail: 'BP 128/76 mmHg (repeat 126/74; controlled; target <130/80)', flag: 'normal' },
    { name: 'Obesity (Class I)', detail: 'Weight 99 kg (down 3 kg from baseline 102 kg), BMI 31.3 kg/m²', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Metformin ER', dose: '1000 mg', route: 'PO', freq: 'BID', indication: 'T2DM', notes: 'Continue 1000 mg BID with renal monitoring or renal dose adjust to 1000 mg total daily' },
    { name: 'Empagliflozin', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'T2DM / Cardiorenal protection', notes: 'Continue' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN / kidney protection', notes: 'Continue' },
    { name: 'Rosuvastatin', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'Hyperlipidemia / ASCVD prevention', notes: 'Continue' },
    { name: 'Amlodipine', dose: '5 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: 'Continue' },
    { name: 'Finerenone', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'CKD Stage G3bA3 / cardiorenal protection', notes: 'Continue; sustained albuminuria reduction' },
  ],
  ALLERGIES: [{ substance: 'No known drug allergies (NKDA)', reaction: 'None', severity: 'None', type: 'None' }],
  SUBJECTIVE_DOCUMENTED: [
    {
      label: 'Reason for visit & clinical setting',
      value: 'Scheduled 6-month follow-up encounter in an ambulatory care pharmacy clinic under collaborative practice agreement for complex cardiorenal risk reduction, type 2 diabetes, and CKD management.'
    },
    {
      label: 'Interval history & general wellbeing',
      value: 'Patient reports feeling well overall. Potassium concerns have resolved following normalized lab results (K 4.9 mEq/L). Patient understands and fully endorses the combination cardiorenal strategy. Acknowledges absence of hospitalizations or emergency department visits.'
    },
    {
      label: 'Medication adherence & routine',
      value: 'Adherence remains excellent across the full regimen (<1 missed dose per month). Denies intentional nonadherence; committed to lifelong therapy.'
    },
    {
      label: 'Dietary & physical activity modifications',
      value: 'Walking 4 days/week with improved energy levels. Watching carbohydrate intake and dietary sodium. Weight reduced to 99 kg (~3 kg / 6.6 lbs total loss from baseline 102 kg).'
    },
    {
      label: 'Past Medical History (PMH)',
      value: 'Type 2 diabetes mellitus (diagnosed 10 years ago), chronic kidney disease Stage G3bA3 (severe albuminuria, diagnosed 3.5 years ago), essential hypertension (12 years), hyperlipidemia (8 years), and Class I Obesity (BMI 31.3 kg/m²).'
    },
    {
      label: 'Past Surgical History (PSH)',
      value: 'Explicitly denies any past surgical history (absent / no prior surgeries).'
    },
    {
      label: 'Social History',
      value: 'Occupation: Structural engineer at consulting firm. Marital status: Married, lives with wife. Tobacco history: Former smoker (quit 8 years ago, 12 pack-year history). Alcohol use: Occasional alcohol (1–2 red wines per week with dinner). Recreational drugs: Explicitly denies any illicit or recreational drug use.'
    },
    {
      label: 'Review of Systems (ROS)',
      value: 'Cardiovascular/Pulmonary/Neurologic/Renal: Explicitly denies chest pain, shortness of breath, palpitations, dizziness, syncope, and lower extremity edema. Denies gross hematuria, dysuria, hypoglycemia symptoms, or muscle weakness/cramps.'
    },
    {
      label: 'Patient Goals & Motivators',
      value: 'Deeply motivated to preserve kidney function and avoid dialysis (motivated by mother suffering from diabetic kidney disease). Committed to lifelong therapy and preventing cardiovascular disease.'
    },
    {
      label: 'Home Blood Pressure Monitoring',
      value: 'Home BP log shows 7-day average of ~127/75 mmHg (range 122–132/72–78 mmHg), consistent with office BP readings.'
    }
  ],
  OBJECTIVE_EXTRA: [
    { label: 'Body Surface Area (Mosteller)', value: '2.21 m²', flag: 'normal' },
    { label: '10-Year ASCVD Risk Score', value: '18.7% — Improved from baseline 20.5%', flag: 'normal' },
    { label: 'Home BP log', value: '7-day average ≈ 127/75 mmHg (range 122–132/72–78), consistent with office BP', flag: 'normal' },
    { label: 'Longitudinal Trend Comparisons', value: 'UACR: 520 → 390 → 290 mg/g (~44% reduction from baseline); K: 4.8 → 5.1 → 4.9 mEq/L (settled and stable); eGFR: 42 → 40 → 41 mL/min/1.73m² (stabilized); A1C: 7.2% → 7.0% → 6.9% (improved); BP: 136/80 → 132/78 → 128/76 mmHg; Weight: 102 → 101 → 99 kg', flag: 'normal' },
    { label: 'Objective Clinical Interpretations', value: 'eGFR 41: Stable Stage G3b filtration showing resolution of initial hemodynamic dip; UACR 290: Marked sustained albuminuria reduction (~44% drop on finerenone + SGLT2i + ACEi); K 4.9: Normal potassium confirming long-term safety of finerenone; A1C 6.9%: Glycemic control at individualized ADA/KDIGO target; BP 128/76: Blood pressure well-controlled', flag: 'normal' }
  ],
  INTERVIEW_FIELDS: [
    { key: 'understanding', label: 'Understanding / endorsement', placeholder: 'His grasp of the strategy…' },
    { key: 'barriers', label: 'Any barriers to sustaining', placeholder: 'Cost, pill burden, monitoring…' },
  ],
  GUIDING_QUESTIONS: [
    'Why should finerenone be continued despite improvement?',
    'Does this patient still have CKD?',
    'What evidence suggests treatment is working?',
    'What residual risks remain?',
    'What monitoring should continue long-term?',
    'How would you explain continued therapy to this patient?'
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w2-david-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w2-david-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take CoQ10 100 mg daily, Fish Oil 1000 mg daily, and a daily multivitamin." },
    { id: 'w2-david-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink moderately—about 1 to 2 glasses of red wine per week with dinner." },
    { id: 'w2-david-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have never smoked or used tobacco products in my life." },
    { id: 'w2-david-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My father had a heart attack at age 58 and also had type 2 diabetes. My mother has type 2 diabetes and chronic kidney disease. My brother has coronary artery disease — he had bypass surgery at age 58." },
    { id: 'w2-david-thu_social', topic: 'Social history', field: 'hpiNarrative', keywords: ['married', 'marital', 'live', 'alone', 'partner', 'spouse', 'job', 'work', 'occupation', 'engineer', 'retire'], response: "I am married and live at home with my wife. I am an electrical engineer. Honestly, reviewing these lab trends over the past six months has been fascinating from a data standpoint!" },
    { id: 'w2-david-thu_exer', topic: 'Physical activity', field: 'exercise', keywords: ['exercise', 'walk', 'activity', 'active', 'gym', 'sport', 'run', 'physical', 'routine'], response: "Yes, I have kept up my walking — about 4 days a week now. I feel like staying active has helped with my energy levels and my blood pressure control." },
    { id: 'w2-david-thu_bp', topic: 'Home BP log', field: 'homeBp', keywords: ['home', 'check', 'blood pressure at home', 'monitor', 'log', 'cuff', 'readings', 'average'], response: "My home blood pressure readings are stable and well controlled. They average about 127/75 mmHg (ranging from 122–132 SBP / 72–78 DBP)." },
    { id: 'ct_und', topic: 'Endorses strategy', field: 'understanding', keywords: ['understand', 'makes sense', 'protein', 'kidney', 'why', 'evidence', 'working', 'forever', 'continue', 'stop'],
      response: "Now that I see the protein dropping from 520 to 290 and potassium staying safe, it makes sense. The data convinced me — I'm committed to staying on it. Seeing everything improve did make me wonder if I'll need all these pills forever, but I understand the lifelong protective benefits." },
    { id: 'ct_bar', topic: 'Barriers', field: 'barriers', keywords: ['cost', 'afford', 'pill', 'burden', 'barrier', 'monitor', 'hard'],
      response: "The cost ended up being manageable, and the monitoring isn't a burden now that I understand its purpose." },
    { id: 'w2-david-thu_diet', topic: 'Dietary habits', field: 'exercise', keywords: ['diet', 'food', 'eating', 'carb', 'sodium', 'salt', 'diabetic diet'],
      response: "I've been trying to watch my carbohydrate intake and limit added sodium, though keeping up with a strict diabetic diet is still an ongoing effort." },
  ],
  ASSESSMENT_CARDS: [
    {
      id: 'ct_ckd',
      title: 'Chronic Kidney Disease Stage G3bA3 & Combination Cardiorenal Response',
      icon: 'FlaskConical',
      color: 'dc2626',
      questions: [
        {
          key: 'ct_ckd_eval',
          q: 'Evaluation of CKD staging, longitudinal albuminuria reduction, and therapy consolidation:',
          defaultAnswer: 'Status: CKD Stage G3bA3, substantial longitudinal improvement on foundational cardiorenal therapy. Dual-axis classification: eGFR 41 mL/min/1.73m² (baseline 42, 3-month 40, SCr 1.85 mg/dL) confirms stable Stage G3b filtration showing complete stabilization and resolution of the initial hemodynamic dip; spot UACR decreased from baseline 520 mg/g to 390 mg/g at 3 months, and now to 290 mg/g at 6 months (~44% cumulative longitudinal reduction, transitioning from A3 toward the A2 boundary). Improvement is directly attributed to combination cardiorenal therapy (lisinopril + empagliflozin + finerenone). Cites KDIGO 2024 / ADA 2026 guidelines: combination therapy with SGLT2i + nsMRA + RAASi provides additive cardiorenal benefits, significantly slowing CKD progression, reducing ESKD risk, and lowering cardiovascular mortality. Crucial clinical communication: educate patient that improving numbers reflect successful treatment rather than disease resolution; full quadruple therapy must be maintained long-term without de-escalation.'
        }
      ]
    },
    {
      id: 'ct_fin_safety',
      title: 'Finerenone Safety & Long-term Potassium Stability',
      icon: 'ShieldCheck',
      color: '0891b2',
      questions: [
        {
          key: 'ct_fin_eval',
          q: 'Evaluation of potassium normalization, safety monitoring, and benefit-risk balance:',
          defaultAnswer: 'Status: Finerenone long-term safety and tolerability confirmed. Serum potassium normalized to 4.9 mEq/L (settling from 5.1 mEq/L at 3 months, baseline 4.8 mEq/L), well within the safe therapeutic range (<5.5 mEq/L). Renal function has stabilized (eGFR 41 mL/min/1.73m²). Patient demonstrates excellent adherence and absence of hyperkalemia symptoms. Concludes that long-term cardiorenal benefits strongly outweigh risks; continue finerenone 10 mg PO daily with routine potassium and renal function monitoring.'
        }
      ]
    },
    {
      id: 'ct_t2dm',
      title: 'Type 2 Diabetes Mellitus with CKD',
      icon: 'Activity',
      color: 'ca8a04',
      questions: [
        {
          key: 'ct_t2dm_eval',
          q: 'Evaluation of glycemic control, A1C trend, and medication optimization:',
          defaultAnswer: 'Status: Type 2 diabetes mellitus with CKD, well-controlled at target. Hemoglobin A1C improved from baseline 7.2% to 7.0% at 3 months, and now to 6.9% at 6 months, meeting individualized ADA/KDIGO target (<7.0-7.5% for CKD G3b). Patient demonstrates excellent adherence to metformin ER and empagliflozin 25 mg PO daily without hypoglycemia. Per ADA/KDIGO consensus, continue empagliflozin 25 mg daily; continue metformin ER (1,000 mg BID with renal monitoring or renal dose adjust to 1,000 mg total daily for eGFR 30-44 mL/min/1.73m²). Current glycemic management is safe, effective, and nephroprotective.'
        }
      ]
    },
    {
      id: 'ct_hld',
      title: 'Hyperlipidemia / Elevated ASCVD Risk',
      icon: 'Droplet',
      color: '13314f',
      questions: [
        {
          key: 'ct_hld_eval',
          q: 'Evaluation of lipid control, statin therapy, and cardiovascular risk enhancers:',
          defaultAnswer: 'Status: Hyperlipidemia, durable control at goal on rosuvastatin 20 mg PO daily. Fasting lipid panel demonstrates LDL-C 74 mg/dL. Calculated 10-year ASCVD risk improved from baseline 20.5% to 18.7%. Cites 2026 AHA/ACC Cholesterol Guidelines: CKD and diabetes are major ASCVD risk-enhancing conditions. Residual risk-enhancing factors include CKD Stage G3bA3, type 2 diabetes, essential hypertension, Class I obesity, and positive family history of premature ASCVD (father MI at 58, brother CAD at 58). Continue rosuvastatin 20 mg PO daily as cornerstone therapy for cardiovascular risk reduction; treatment target is LDL-C <70 mg/dL.'
        }
      ]
    },
    {
      id: 'ct_htn',
      title: 'Essential Hypertension',
      icon: 'HeartPulse',
      color: '13314f',
      questions: [
        {
          key: 'ct_htn_eval',
          q: 'Evaluation of blood pressure status, home/office consistency, and synergistic therapy:',
          defaultAnswer: 'Status: Essential hypertension, well-controlled at target. Office BP is 128/76 mmHg (repeat 126/74 mmHg), demonstrating longitudinal improvement from baseline (136/80 mmHg). 7-day home BP log (average 127/75 mmHg, range 122-132/72-78 mmHg) is consistent with office readings. Cites KDIGO 2024 / 2025 AHA/ACC Hypertension Guidelines: BP target in CKD is <130/80 mmHg (KDIGO systolic <120 mmHg when tolerated). Regimen provides synergistic blood pressure lowering and intraglomerular pressure reduction. Continue lisinopril 20 mg PO daily and amlodipine 5 mg PO daily.'
        }
      ]
    },
    {
      id: 'ct_understanding',
      title: 'Disease Understanding & Long-term Therapy Commitment',
      icon: 'BookOpen',
      color: '0891b2',
      questions: [
        {
          key: 'ct_under_eval',
          q: 'Long-term counseling on sustained therapy and addressing pill burden:',
          defaultAnswer: 'Status: Excellent disease understanding achieved. The analytical patient is convinced by objective lab trends (protein down 44%, potassium normal) and now fully endorses the cardiorenal strategy. Addressed patient question regarding lifelong therapy: reinforced that medications manage and protect against underlying chronic microvascular disease, explaining why ongoing lifelong therapy remains essential even when numbers improve.'
        }
      ]
    },
    {
      id: 'ct_obesity',
      title: 'Class I Obesity & Lifestyle Modifications',
      icon: 'Scale',
      color: 'ca8a04',
      questions: [
        {
          key: 'ct_ob_eval',
          q: 'Evaluation of longitudinal weight loss and physical activity:',
          defaultAnswer: 'Status: Class I Obesity (BMI 31.3 kg/m²), weight 99 kg (cumulative 3 kg / 6.6 lbs weight loss from baseline 102 kg). Weight loss and ongoing walking (4 days/week) provide cumulative cardiorenal benefits. Cites KDIGO 2024 and ADA/AHA lifestyle guidelines: continued lifestyle modification and gradual weight reduction provide dual benefits for glycemic control, blood pressure lowering, and intraglomerular pressure reduction.'
        }
      ]
    },
    {
      id: 'ct_prevent',
      title: 'Preventive Care Gaps & Health Maintenance',
      icon: 'ShieldAlert',
      color: '7c3aed',
      questions: [
        {
          key: 'ct_prev_eval',
          q: 'Evaluation of immunization status and preventive health needs:',
          defaultAnswer: 'Status: Preventive care and immunization gaps identified: Pneumococcal conjugate vaccination (PCV20) is indicated for CKD Stage G3b; Recombinant Zoster vaccine (Shingrix 2-dose series) is indicated for age ≥50; and Tdap booster is overdue (>10 years since last dose). Immunization catch-up should be actively recommended.'
        }
      ]
    }
  ],
  PLAN_SECTIONS: [
    {
      id: 'ct_p_cardiorenal',
      title: 'Cardiorenal Combination Plan',
      options: [
        { key: 'ct_cr_o1', label: 'Continue finerenone 10 mg PO once daily for renal and cardiovascular protection', correct: true },
        { key: 'ct_cr_o2', label: 'Continue lisinopril 20 mg PO once daily (foundational RAAS inhibitor)', correct: true },
        { key: 'ct_cr_o3', label: 'Continue empagliflozin 25 mg PO once daily (foundational SGLT2 inhibitor)', correct: true },
        { key: 'ct_cr_o4', label: 'Consolidate quadruple cardiorenal therapy; avoid de-escalation as therapy provides essential lifelong organ protection', correct: true },
        { key: 'ct_cr_o5', label: 'Order repeat spot UACR and renal function (SCr/eGFR) in 6 months', correct: true },
        { key: 'ct_cr_o6', label: 'Discontinue finerenone because albuminuria has improved', correct: false }
      ]
    },
    {
      id: 'ct_p_potassium',
      title: 'Potassium Management & Safety Monitoring Plan',
      options: [
        { key: 'ct_k_o1', label: 'Maintain routine potassium and renal function monitoring every 3-6 months', correct: true },
        { key: 'ct_k_o2', label: 'Reinforce awareness of hyperkalemia symptoms (unexplained muscle weakness, numbness, palpitations)', correct: true },
        { key: 'ct_k_o3', label: 'Continue dietary potassium awareness without eliminating healthy produce', correct: true }
      ]
    },
    {
      id: 'ct_p_diabetes',
      title: 'Diabetes Management Plan',
      options: [
        { key: 'ct_dm_o1', label: 'Continue metformin ER (continue 1,000 mg BID with renal monitoring OR reduce to 1,000 mg total daily per ADA/KDIGO consensus for eGFR 30-44 mL/min)', correct: true },
        { key: 'ct_dm_o2', label: 'Continue empagliflozin 25 mg PO once daily for cardiorenal protection and glycemic control', correct: true },
        { key: 'ct_dm_o3', label: 'Reinforce diabetic dietary modifications and carbohydrate management', correct: true },
        { key: 'ct_dm_o4', label: 'Order repeat hemoglobin A1C before follow-up in 6 months', correct: true }
      ]
    },
    {
      id: 'ct_p_hld',
      title: 'Hyperlipidemia Plan',
      options: [
        { key: 'ct_hld_o1', label: 'Continue rosuvastatin 20 mg PO once daily at bedtime', correct: true },
        { key: 'ct_hld_o2', label: 'Treatment target: LDL-C <70 mg/dL (or >=50% reduction from baseline; current LDL 74 mg/dL is near goal)', correct: true },
        { key: 'ct_hld_o3', label: 'Order repeat fasting lipid panel in 6-12 months', correct: true },
        { key: 'ct_hld_o4', label: 'Maintain statin therapy; avoid de-escalation', correct: true }
      ]
    },
    {
      id: 'ct_p_htn',
      title: 'Hypertension Plan',
      options: [
        { key: 'ct_htn_o1', label: 'Continue lisinopril 20 mg PO once daily for blood pressure control', correct: true },
        { key: 'ct_htn_o2', label: 'Continue amlodipine 5 mg PO once daily', correct: true },
        { key: 'ct_htn_o3', label: 'Blood pressure treatment target: <130/80 mmHg per 2025 AHA/ACC Guidelines (KDIGO <120 SBP when tolerated)', correct: true },
        { key: 'ct_htn_o4', label: 'Continue structured home blood pressure monitoring (HBPM) 1-2 days/week and maintain a written log', correct: true }
      ]
    },
    {
      id: 'ct_p_life',
      title: 'Lifestyle & Weight Management Plan',
      options: [
        { key: 'ct_life_o1', label: 'Continue walking program: sustain >=150 minutes/week of moderate physical activity', correct: true },
        { key: 'ct_life_o2', label: 'Continue diabetic meal planning with portion control and dietary sodium reduction (<2000 mg/day)', correct: true },
        { key: 'ct_life_o3', label: 'Continue weight-loss efforts targeting gradual 5-10% total weight reduction; praise patient for 3 kg weight loss', correct: true }
      ]
    },
    {
      id: 'ct_p_prevent',
      title: 'Preventive Care & Immunization Plan',
      options: [
        { key: 'ct_prev_o1', label: 'Clarify and recommend Pneumococcal conjugate vaccination (PCV20) for CKD Stage 3b', correct: true },
        { key: 'ct_prev_o2', label: 'Recommend Recombinant Zoster vaccine (Shingrix) 2-dose series for age >=50', correct: true },
        { key: 'ct_prev_o3', label: 'Recommend Tdap booster today (overdue per CDC guidelines)', correct: true }
      ]
    },
    {
      id: 'ct_p_foll',
      title: 'Follow-up & Monitoring Plan',
      options: [
        { key: 'ct_foll_o1', label: 'Schedule comprehensive collaborative practice follow-up visit in 6 months for chronic disease maintenance', correct: true },
        { key: 'ct_foll_o2', label: 'Order pre-visit laboratory testing: CMP (potassium, renal function, electrolytes, LFTs), spot UACR, hemoglobin A1C, and fasting lipid panel', correct: true },
        { key: 'ct_foll_o3', label: 'Collect home blood pressure log readings before next visit', correct: true },
        { key: 'ct_foll_o4', label: 'Reassess serum potassium stability, albuminuria trajectory, glycemic control, and cardiorenal risk reduction at follow-up', correct: true }
      ]
    }
  ],
  COUNSELING: [
    { id: 'c_thu_c1', title: 'Chronic disease maintenance', body: [
      "You've done an incredible job bringing your numbers down and taking control of your health.",
      "These improvements mean our treatment plan is successful, not that the underlying conditions have disappeared.",
      "We need to continue these medications long-term to keep your kidneys protected and your heart safe." ] }
  ],
  GUIDING_QUESTIONS: [
    'Why should finerenone be continued despite improvement?',
    'Does this patient still have CKD?',
    'What evidence suggests treatment is working?',
    'What residual risks remain?',
    'What monitoring should continue long-term?',
    'How would you explain continued therapy to this patient?'
  ],
  PRECEPTOR: {
    keyIssues: ['Albuminuria down from 520 to 290', 'Potassium settled at 4.9', 'Kidney function stable at 41'],
    assessment: ['Longitudinal data confirms the combination cardiorenal strategy works', 'Sustained therapy needed — improving numbers reflect treatment success, not disease cure'],
    plan: ['Continue full combination therapy', 'Set 6-month routine monitoring cadence', 'Support lifestyle and adherence'],
    pearls: ['Patients often wonder if they can stop pills when labs improve — connect to CONFIDENCE to show they need lifelong protection'],
    mistakes: ['De-escalating therapy because the patient improved', 'Stopping finerenone because potassium was 5.1 at 3 months'],
    followupQuestions: ['How often should a G3bA3 patient on finerenone be monitored?'],
    checklist: ['Confirmed longitudinal benefit', 'Consolidated combination therapy', 'Set appropriate monitoring'],
  },
})

export const W2_CASES = [michaelTue, michaelWed, michaelThu, angelaTue, angelaWed, angelaThu, davidTue, davidWed, davidThu]

/* ----------------------------- Grading rubrics ----------------------------- */
const r = (id, label, keywords, tip) => ({ id, label, keywords, tip })

export const W2_RUBRICS = {
  'w2-michael-tue': {
    subjective: [
      r('s_nsaid', 'OTC ibuprofen (nephrotoxic)', ['ibuprofen', 'nsaid', 'advil', 'otc', 'pain', 'knee'], 'The NSAID is a hidden, kidney-harming OTC.'),
      r('s_adh', 'Statin nonadherence', ['miss', 'adherence', 'atorvastatin', 'forget', '2', '3'], 'He misses the statin 2–3×/week.'),
      r('s_alb', 'Albuminuria understanding gap', ['albumin', 'protein', 'understand', 'eGFR', 'normal'], 'He thinks a normal eGFR means healthy kidneys.'),
    ],
    objective: [
      r('o_ldl', 'LDL above goal (132)', ['132', 'ldl', 'above goal', 'high'], 'Report the above-goal LDL on low-dose statin.'),
      r('o_ckd', 'CKD G2A2 (eGFR 79, UACR 118)', ['g2a2', 'uacr', '118', 'albumin', 'egfr 79', 'preserved'], 'Stage with eGFR AND albuminuria.'),
      r('o_bp', 'BP above goal', ['136', '134', 'blood pressure', 'above goal'], 'Note the mid-130s/80s BP.'),
    ],
    assessment: [
      r('a_ckd', 'Albuminuria defines CKD despite normal eGFR', ['albumin', 'damage', 'preserved egfr', 'g2a2', 'kidney'], 'CKD is present by albuminuria alone.'),
      r('a_statin', 'Statin under-dosed + adherence-limited', ['intensity', 'high intensity', 'adherence', 'under', 'low dose', '10'], 'LDL reflects low dose + missed doses.'),
      r('a_nsaid', 'NSAID is nephrotoxic / contributing', ['nsaid', 'ibuprofen', 'nephrotox', 'avoid', 'kidney'], 'The NSAID actively harms his kidneys.'),
    ],
    plan: [
      r('p_statin', 'Intensify statin to high intensity', ['atorvastatin', '40', '20', 'high intensity', 'intensif'], 'Move to a guideline-appropriate intensity.'),
      r('p_nsaid', 'Stop NSAID; use acetaminophen', ['stop', 'acetaminophen', 'tylenol', 'nsaid', 'avoid ibuprofen'], 'Replace the NSAID.'),
      r('p_acei', 'Continue ACEi for kidney protection', ['continue', 'ace', 'lisinopril', 'kidney'], 'Keep the ACEi.'),
      r('p_mon', 'Recheck lipids/UACR in ~3 months', ['lipid', 'uacr', '3 month', 'recheck'], 'Set the monitoring interval.'),
    ],
    avoid: [
      r('x_egfr', 'Calling kidneys "fine" because eGFR is normal', ['kidneys fine', 'normal egfr healthy', 'no ckd'], 'Albuminuria means kidney damage.'),
      r('x_esc', 'Escalating statin before confirming adherence', ['escalate without', 'ignore adherence'], 'Confirm adherence first.'),
    ],
  },
  'w2-michael-wed': {
    subjective: [
      r('s_nsaid', 'Residual NSAID use', ['ibuprofen', 'nsaid', 'still', 'weekly'], 'He still uses ibuprofen ~weekly.'),
      r('s_misc', 'eGFR misconception', ['egfr', 'normal', 'healthy', 'albumin', 'understand'], 'He believes normal eGFR = healthy kidneys.'),
    ],
    objective: [
      r('o_ldl', 'LDL improved to 96', ['96', 'ldl', 'improv'], 'Report improved LDL.'),
      r('o_uacr', 'UACR improved to 102', ['102', 'uacr', 'improv', 'albumin'], 'Note improving albuminuria.'),
    ],
    assessment: [
      r('a_resp', 'Good response to intensified statin', ['response', 'improv', 'working', 'statin'], 'The plan is working.'),
      r('a_edu', 'Albuminuria still signals risk', ['albumin', 'risk', 'still', 'continue', 'not cured'], 'Kidneys aren’t "cured."'),
    ],
    plan: [
      r('p_cont', 'Continue statin; reinforce adherence', ['continue', 'atorvastatin', 'adherence', 'goal'], 'Continue and assess goal.'),
      r('p_nsaid', 'Re-counsel NSAID cessation', ['nsaid', 'stop', 'ibuprofen', 'avoid'], 'Push for full cessation.'),
      r('p_acei', 'Continue ACEi / kidney protection', ['continue', 'ace', 'kidney', 'monitor'], 'Maintain protection.'),
    ],
    avoid: [r('x_deesc', 'De-escalating ACEi because albuminuria improved', ['stop ace', 'discontinue ace', 'stop lisinopril'], 'Continue kidney protection.')],
  },
  'w2-michael-thu': {
    subjective: [
      r('s_exp', 'Expects albuminuria to fully resolve', ['expect', 'gone', 'disappear', 'protein', 'still'], 'He expects proteinuria to vanish.'),
      r('s_wt', 'Weight-loss motivation', ['weight', 'lose', 'goal', 'lifestyle'], 'Weight remains a key motivator.'),
    ],
    objective: [
      r('o_ldl', 'LDL controlled (84)', ['84', 'ldl', 'control', 'goal'], 'LDL well controlled.'),
      r('o_uacr', 'UACR trend 118→102→98', ['98', 'uacr', 'trend', 'improv'], 'Improving albuminuria trend.'),
    ],
    assessment: [
      r('a_frame', 'Reducing — not eliminating — albuminuria is the goal', ['reduce', 'not eliminate', 'realistic', 'protective', 'manage'], 'Frame expectations correctly.'),
      r('a_maint', 'Maintain protective therapy', ['maintain', 'continue', 'protective'], 'Keep protection going.'),
    ],
    plan: [
      r('p_reassure', 'Reassure/reframe persistent albuminuria', ['reassure', 'reframe', 'explain', 'expect', 'realistic'], 'Manage expectations.'),
      r('p_cont', 'Continue statin + ACEi + monitoring', ['continue', 'statin', 'ace', 'monitor'], 'Maintain therapy.'),
      r('p_life', 'Support weight/lifestyle', ['weight', 'lifestyle', 'diet', 'exercise'], 'Support his goals.'),
    ],
    avoid: [r('x_fail', 'Implying treatment failed because albuminuria persists', ['failed', 'not working', 'stop'], 'Persistence isn’t failure.')],
  },
  'w2-angela-tue': {
    subjective: [
      r('s_never', 'Rosuvastatin never started', ['rosuvastatin', 'never started', 'not started', 'prescribed', 'unfilled'], 'The statin was never initiated.'),
      r('s_cost', 'Cost / affordability barrier', ['cost', 'afford', 'expensive', 'money', 'fixed income', 'copay'], 'Cost is the root barrier.'),
      r('s_fear', 'Statin fear (muscle)', ['fear', 'muscle', 'side effect', 'nervous', 'worried'], 'She fears statin side effects.'),
    ],
    objective: [
      r('o_ldl', 'LDL markedly elevated (148)', ['148', 'ldl', 'elevated', 'high'], 'Markedly elevated LDL.'),
      r('o_ckd', 'CKD G3aA2 (eGFR 54, UACR 165)', ['g3a', 'egfr 54', 'uacr', '165', 'albumin'], 'Stage the CKD.'),
      r('o_bp', 'BP above goal', ['142', '140', 'blood pressure', 'above goal'], 'BP above goal.'),
    ],
    assessment: [
      r('a_access', 'LDL reflects non-initiation, not failure', ['never started', 'access', 'not failure', 'non-initiation', 'cost'], 'It was never started.'),
      r('a_intensity', 'Needs high-intensity statin for CKD risk', ['high intensity', 'rosuvastatin', 'ckd', 'risk', 'intensify'], 'CKD raises CV risk; treat lipids hard.'),
      r('a_bp', 'BP above goal in CKD', ['bp', 'goal', 'ckd', 'above'], 'Optimize BP.'),
    ],
    plan: [
      r('p_init', 'Initiate affordable high-intensity statin', ['initiate', 'rosuvastatin', 'afford', 'high intensity', 'start'], 'Start an affordable statin.'),
      r('p_cost', 'Address cost + statin fear', ['cost', 'afford', 'assistance', 'insurance', 'fear', 'counsel'], 'Solve the barrier.'),
      r('p_bp', 'Continue ARB; optimize BP + home monitoring', ['arb', 'losartan', 'bp', 'home', 'monitor'], 'Optimize BP/kidney.'),
      r('p_mon', 'Recheck lipids/UACR in ~3 months', ['lipid', 'uacr', '3 month', 'recheck'], 'Set monitoring.'),
    ],
    avoid: [
      r('x_label', 'Labeling her nonadherent without finding cost', ['noncompliant', 'nonadherent', 'label'], 'It’s access, not noncompliance.'),
      r('x_unafford', 'Re-prescribing an unaffordable option', ['brand', 'unaffordable', 'expensive same'], 'Address cost first.'),
    ],
  },
  'w2-angela-wed': {
    subjective: [
      r('s_start', 'Started + tolerating rosuvastatin', ['started', 'rosuvastatin', 'tolerate', 'no side', 'muscle'], 'She started and tolerates it.'),
      r('s_cost', 'Now affordable/sustainable', ['afford', 'cost', 'cheaper', 'sustain'], 'Affordable now.'),
    ],
    objective: [
      r('o_ldl', 'LDL improved to 89', ['89', 'ldl', 'improv'], 'Big LDL drop.'),
      r('o_uacr', 'UACR stable', ['uacr', '160', 'stable', 'albumin'], 'Albuminuria stable.'),
    ],
    assessment: [
      r('a_access', 'Confirms access was the issue', ['access', 'confirm', 'response', 'barrier'], 'Access, not pharmacology.'),
      r('a_bp', 'BP still slightly above goal', ['bp', 'goal', 'above', 'optimize'], 'Keep optimizing BP.'),
    ],
    plan: [
      r('p_cont', 'Continue rosuvastatin', ['continue', 'rosuvastatin', 'adherence'], 'Continue the statin.'),
      r('p_bp', 'Optimize BP', ['bp', 'optimize', 'goal'], 'Push BP to goal.'),
      r('p_mon', 'Recheck lipids/UACR in ~3 months', ['lipid', 'uacr', '3 month', 'recheck'], 'Set monitoring.'),
    ],
    avoid: [r('x_stop', 'Stopping the working, affordable statin', ['stop statin', 'discontinue rosuvastatin'], 'Don’t stop a working statin.')],
  },
  'w2-angela-thu': {
    subjective: [
      r('s_conf', 'Confidence + adherence', ['confiden', 'trust', 'adherent', 'routine'], 'She’s confident and adherent.'),
      r('s_goal', 'Lifestyle/weight goals', ['weight', 'walk', 'diet', 'goal'], 'Lifestyle progress.'),
    ],
    objective: [
      r('o_ldl', 'LDL near goal (78)', ['78', 'ldl', 'goal', '148'], 'LDL near goal.'),
      r('o_uacr', 'UACR slowly improving', ['uacr', '155', 'improv', 'albumin'], 'Albuminuria improving.'),
    ],
    assessment: [
      r('a_goal', 'Judge LDL against individualized goal', ['goal', 'individual', 'ezetimibe', 'target'], 'Is she at goal?'),
      r('a_maint', 'Maintain protective therapy', ['maintain', 'continue', 'protective'], 'Maintain therapy.'),
    ],
    plan: [
      r('p_cont', 'Continue statin (± ezetimibe if above goal)', ['continue', 'rosuvastatin', 'ezetimibe', 'goal'], 'Continue ± ezetimibe.'),
      r('p_bp', 'Continue ARB; BP + kidney monitoring', ['arb', 'bp', 'monitor', 'kidney'], 'Continue BP/kidney care.'),
      r('p_life', 'Reinforce lifestyle/adherence', ['lifestyle', 'adherence', 'monitor'], 'Reinforce habits.'),
    ],
    avoid: [r('x_stop', 'Stopping the statin because she feels well', ['stop statin', 'discontinue'], 'Feeling well isn’t a reason to stop.')],
  },
  'w2-david-tue': {
    subjective: [
      r('s_fin', 'Previously declined finerenone', ['finerenone', 'declined', 'never started', 'previous', 'recommend'], 'He declined finerenone before.'),
      r('s_k', 'Hyperkalemia concern', ['potassium', 'hyperkalem', 'worried', 'risk'], 'He worries about potassium.'),
      r('s_why', 'Wants the evidence/rationale', ['why', 'evidence', 'understand', 'rationale', 'data'], 'He needs the "why."'),
    ],
    objective: [
      r('o_ckd', 'CKD G3bA3 (eGFR 42, UACR 520)', ['g3b', 'a3', 'egfr 42', '520', 'severe', 'albumin'], 'Stage the severe CKD.'),
      r('o_found', 'Already on ACEi + SGLT2i + statin', ['ace', 'sglt2', 'empagliflozin', 'statin', 'foundational'], 'Foundational therapy in place.'),
      r('o_a1c', 'A1C near goal (7.2)', ['7 2', 'a1c', 'near goal'], 'A1C is near goal.'),
    ],
    assessment: [
      r('a_resid', 'Residual albuminuria = residual risk', ['residual', 'persistent', 'albumin', 'risk', 'despite'], 'Severe albuminuria persists despite foundational therapy.'),
      r('a_fin', 'Finerenone indicated (CONFIDENCE)', ['finerenone', 'confidence', 'combination', 'add', 'mra'], 'Add finerenone for residual risk.'),
      r('a_k', 'Hyperkalemia is monitored, not avoided', ['potassium', 'monitor', 'context', 'not avoid'], 'Manage K with monitoring.'),
    ],
    plan: [
      r('p_fin', 'Initiate finerenone', ['finerenone', 'initiate', 'start', 'add'], 'Start finerenone.'),
      r('p_kplan', 'Potassium monitoring plan + diet', ['potassium', 'monitor', 'baseline', 'recheck', 'diet'], 'Build a K monitoring plan.'),
      r('p_found', 'Continue ACEi/SGLT2i/statin/metformin', ['continue', 'sglt2', 'ace', 'statin', 'metformin', 'foundational'], 'Don’t de-escalate foundation.'),
      r('p_edu', 'Explain the evidence/rationale', ['explain', 'evidence', 'rationale', 'why', 'confidence', 'educate'], 'Give him the "why."'),
    ],
    avoid: [
      r('x_opt', 'Accepting severe albuminuria as "optimized"', ['optimized', 'no change', 'leave as is', 'nothing more'], 'Residual A3 is the signal to add finerenone.'),
      r('x_kavoid', 'Avoiding finerenone solely for hyperkalemia risk', ['avoid finerenone', 'too risky', 'potassium so no'], 'Monitor, don’t avoid.'),
      r('x_sglt2', 'Stopping the SGLT2i to "make room"', ['stop sglt2', 'stop empagliflozin'], 'Keep the SGLT2i.'),
    ],
  },
  'w2-david-wed': {
    subjective: [
      r('s_k', 'Potassium worry / no symptoms', ['potassium', 'worried', '5 1', 'symptom', 'cramp'], 'Worried about K, asymptomatic.'),
      r('s_adh', 'Finerenone adherence', ['finerenone', 'adherence', 'taking', 'miss'], 'Good finerenone adherence.'),
    ],
    objective: [
      r('o_uacr', 'UACR improved (520→390)', ['390', 'uacr', 'improv', 'albumin'], 'Albuminuria improving.'),
      r('o_k', 'Potassium 5.1; eGFR dip to 40', ['5 1', 'potassium', 'egfr', '40', 'dip'], 'K up, eGFR dipped.'),
    ],
    assessment: [
      r('a_context', 'K 5.1 interpreted in context — not auto-stop', ['context', 'monitor', 'not stop', 'manage', 'expected'], 'Don’t reflexively stop.'),
      r('a_benefit', 'Falling UACR shows benefit', ['uacr', 'benefit', 'working', 'improv', 'albumin'], 'The drug is working.'),
      r('a_egfr', 'eGFR dip is expected', ['egfr', 'expected', 'dip'], 'Expected early dip.'),
    ],
    plan: [
      r('p_cont', 'Continue finerenone; recheck potassium', ['continue', 'finerenone', 'recheck', 'potassium'], 'Continue + recheck K.'),
      r('p_diet', 'Dietary potassium counseling', ['diet', 'potassium', 'low potassium', 'food'], 'Counsel diet.'),
      r('p_found', 'Continue SGLT2i/ACEi', ['continue', 'sglt2', 'ace'], 'Keep foundation.'),
    ],
    avoid: [
      r('x_stop', 'Discontinuing finerenone for K 5.1', ['stop finerenone', 'discontinue finerenone'], 'K 5.1 isn’t an auto-stop.'),
      r('x_sglt2', 'Stopping SGLT2i for the eGFR dip', ['stop sglt2', 'stop empagliflozin'], 'Dip is expected.'),
    ],
  },
  'w2-david-thu': {
    subjective: [
      r('s_und', 'Understands/endorses strategy', ['understand', 'makes sense', 'data', 'committed', 'evidence'], 'He endorses the plan.'),
      r('s_bar', 'No sustaining barriers', ['cost', 'afford', 'manageable', 'monitor', 'barrier'], 'Barriers resolved.'),
    ],
    objective: [
      r('o_uacr', 'UACR 520→390→290', ['290', 'uacr', 'trend', 'improv'], 'Marked albuminuria reduction.'),
      r('o_k', 'Potassium settled (4.9); eGFR stable', ['4 9', 'potassium', 'egfr', 'stable', 'settled'], 'K normalized.'),
    ],
    assessment: [
      r('a_cont', 'Continue full cardiorenal regimen', ['continue', 'cardiorenal', 'protective', 'benefit', 'ongoing'], 'Benefit is ongoing.'),
      r('a_confidence', 'Real-world CONFIDENCE scenario', ['confidence', 'combination', 'finerenone', 'sglt2', 'phenotype'], 'His case mirrors CONFIDENCE.'),
    ],
    plan: [
      r('p_cont', 'Continue finerenone + SGLT2i + ACEi + statin + metformin', ['continue', 'finerenone', 'sglt2', 'ace', 'statin'], 'Continue all therapy.'),
      r('p_mon', 'Long-term K/eGFR/UACR/lipid monitoring', ['monitor', 'potassium', 'egfr', 'uacr', 'lipid', 'long term'], 'Set durable monitoring.'),
      r('p_self', 'Reinforce adherence/self-management', ['adherence', 'self', 'reinforce'], 'Reinforce habits.'),
    ],
    avoid: [r('x_deesc', 'De-escalating cardiorenal therapy at improvement', ['de-escalate', 'deescalate', 'stop', 'discontinue'], 'Don’t de-escalate protection.')],
  },
}
