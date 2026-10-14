const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/patientsW2.js');
let content = fs.readFileSync(filePath, 'utf8');

// 1. MICHAEL WEDNESDAY REPLACEMENT
const michaelWedBlock = `const michaelWed = makeCase({
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
  VITALS: { bp: '132/80', bpRepeat: '130/80', hr: '70', rr: '16', temp: '98.3°F', weight: '101 kg', height: "5'10\\"", bmi: '31.9',
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
    'What should be reinforced during today\\'s visit?',
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
    'What should be reinforced during today\\'s visit?',
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
})`;

// 2. ANGELA WEDNESDAY REPLACEMENT
const angelaWedBlock = `const angelaWed = makeCase({
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
  VITALS: { bp: '136/82', bpRepeat: '134/80', hr: '72', rr: '16', temp: '98.4°F', weight: '95 kg', height: "5'4\\"", bmi: '35.9',
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
          defaultAnswer: 'Status: Resolution of therapeutic inertia and prescription access barrier. This encounter demonstrates the critical clinical insight that prior treatment \\'failure\\' was due to prescription non-initiation resulting from cost barriers ($180/month brand quote), rather than biologic drug resistance. Identifying and resolving implementation barriers by identifying a $4 generic retail copay resulted in successful rosuvastatin initiation, high adherence, and substantial LDL-C lowering. Affordability has been resolved as an active barrier, but access and out-of-pocket costs must continue to be assessed at future visits to reinforce open communication and sustain long-term adherence.'
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
})`;

// 3. DAVID WEDNESDAY REPLACEMENT
const davidWedBlock = `const davidWed = makeCase({
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
  VITALS: { bp: '132/78', bpRepeat: '130/76', hr: '70', rr: '16', temp: '98.1°F', weight: '101 kg', height: "5'10\\"", bmi: '31.9',
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
          defaultAnswer: 'Status: Substantially improved understanding of CKD progression risk and finerenone rationale. Patient\\'s remaining concerns are regarding lab interpretation (understanding that the small eGFR dip and potassium 5.1 are expected pharmacological effects) rather than opposition to therapy. Provide structured patient education regarding expected monitoring parameters, treatment goals, and distinction between expected drug mechanism and disease progression.'
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
})`;

// Replace each block in content
function replaceCase(content, startStr, endStr, newBlock) {
  const startIdx = content.indexOf(startStr);
  if (startIdx === -1) throw new Error('Could not find start string: ' + startStr);
  const endIdx = content.indexOf(endStr, startIdx);
  if (endIdx === -1) throw new Error('Could not find end string: ' + endStr);
  return content.slice(0, startIdx) + newBlock + content.slice(endIdx);
}

// Michael Wed
content = replaceCase(
  content,
  'const michaelWed = makeCase({',
  'const michaelThu = makeCase({',
  michaelWedBlock + '\n\n'
);

// Angela Wed
content = replaceCase(
  content,
  'const angelaWed = makeCase({',
  'const angelaThu = makeCase({',
  angelaWedBlock + '\n\n'
);

// David Wed
content = replaceCase(
  content,
  'const davidWed = makeCase({',
  'const davidThu = makeCase({',
  davidWedBlock + '\n\n'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully applied Wednesday case expansions to patientsW2.js!');
