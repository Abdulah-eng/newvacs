const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/patientsW2.js');
let content = fs.readFileSync(filePath, 'utf8');

// 1. MICHAEL THURSDAY REPLACEMENT
const michaelThuBlock = `const michaelThu = makeCase({
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
  VITALS: { bp: '130/78', bpRepeat: '128/78', hr: '68', rr: '16', temp: '98.2°F', weight: '99 kg', height: "5'10\\"", bmi: '31.3',
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
})`;

// 2. ANGELA THURSDAY REPLACEMENT
const angelaThuBlock = `const angelaThu = makeCase({
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
  VITALS: { bp: '132/80', bpRepeat: '130/78', hr: '70', rr: '16', temp: '98.3°F', weight: '93 kg', height: "5'4\\"", bmi: '35.2',
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
})`;

// 3. DAVID THURSDAY REPLACEMENT
const davidThuBlock = `const davidThu = makeCase({
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
  VITALS: { bp: '128/76', bpRepeat: '126/74', hr: '68', rr: '16', temp: '98.2°F', weight: '99 kg', height: "5'10\\"", bmi: '31.3',
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
})`;

// Replace each block in content
function replaceCase(content, startStr, endStr, newBlock) {
  const startIdx = content.indexOf(startStr);
  if (startIdx === -1) throw new Error('Could not find start string: ' + startStr);
  let endIdx;
  if (endStr) {
    endIdx = content.indexOf(endStr, startIdx);
    if (endIdx === -1) throw new Error('Could not find end string: ' + endStr);
  } else {
    endIdx = content.length;
  }
  return content.slice(0, startIdx) + newBlock + content.slice(endIdx);
}

// Michael Thu: from `const michaelThu = makeCase({` to `/* ============================ ANGELA RODRIGUEZ (B) ============================ */`
content = replaceCase(
  content,
  'const michaelThu = makeCase({',
  '/* ============================ ANGELA RODRIGUEZ (B) ============================ */',
  michaelThuBlock + '\n\n'
);

// Angela Thu: from `const angelaThu = makeCase({` to `/* ============================ DAVID CHEN (C) ============================ */`
content = replaceCase(
  content,
  'const angelaThu = makeCase({',
  '/* ============================ DAVID CHEN (C) ============================ */',
  angelaThuBlock + '\n\n'
);

// David Thu: from `const davidThu = makeCase({` to `export const W2_CASES =`
content = replaceCase(
  content,
  'const davidThu = makeCase({',
  'export const W2_CASES =',
  davidThuBlock + '\n\n'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully applied Thursday case expansions to patientsW2.js!');
