import { makeCase } from './caseFactory.js'

// WEEK 5 — Depression + Anxiety + Tobacco Cessation
// Patients: Sarah Mitchell (A), Jessica Ramirez (B), David Carter (C)
// Case ids are namespaced 'w5-<patient>-<day>'

/* ============================ SARAH MITCHELL (A) ============================ */
// MDD + GAD + Tobacco Use. Initial presentation. Needs dual-purpose therapy.

const sarahTue = makeCase({
  id: 'w5-sarah_m-tue',
  PATIENT: { name: 'Sarah Mitchell', age: 54, sex: 'female', ethnicity: 'White', mrn: 'W5-10222' },
  ENCOUNTER: { week: 'Week 5', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Foundational', difficultyTone: 'teal',
    chiefConcern: "I haven't felt like myself in months.",
    snapshotSummary: 'Newly diagnosed with Major Depressive Disorder (MDD) and Generalized Anxiety Disorder (GAD). Also uses tobacco. Needs initial pharmacotherapy.',
    diseaseStates: ['MDD', 'GAD', 'Tobacco Use Disorder'],
    learningObjectives: ['Interpret PHQ-9 and GAD-7', 'Select appropriate first-line therapy for comorbid MDD/GAD', 'Assess readiness to quit tobacco'],
  },
  VITALS: { bp: '118/74', bpRepeat: '116/74', hr: '76', rr: '16', temp: '98.2°F', weight: '69 kg', height: "5'5\"", bmi: '25.3', flags: {} },
  LABS: [
    { label: 'Sodium', value: '139', unit: 'mEq/L', range: '135-145' },
    { label: 'Potassium', value: '4.2', unit: 'mEq/L', range: '3.5-5.0' },
    { label: 'Chloride', value: '101', unit: 'mEq/L', range: '96-106' },
    { label: 'Bicarbonate', value: '24', unit: 'mEq/L', range: '22-29' },
    { label: 'BUN', value: '12', unit: 'mg/dL', range: '8-20' },
    { label: 'Serum Creatinine', value: '0.8', unit: 'mg/dL', range: '0.6-1.2' },
    { label: 'Glucose', value: '92', unit: 'mg/dL', range: '70-99' },
    { label: 'TSH', value: '2.1', unit: 'mIU/L', range: '0.4-4.0' },
    { label: 'CBC', value: 'Unremarkable', unit: '', range: 'Normal' }
  ],
  ALERTS: [{ level: 'warn', text: 'Patient presents with both moderate depression and mild anxiety. Needs careful agent selection.' }],
  PROBLEMS: [
    { name: 'Major Depressive Disorder', detail: 'New diagnosis', flag: 'high' },
    { name: 'Generalized Anxiety Disorder', detail: 'New diagnosis', flag: 'high' },
    { name: 'Tobacco Use', detail: 'Current smoker, 5 cigs/day', flag: 'warn' },
  ],
  MEDICATIONS: [],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Reports persistent low mood, decreased motivation, fatigue, and frequent worrying for 4-5 months.' },
    { label: 'Scores', value: 'PHQ-9: 13 (Moderate). GAD-7: 8 (Mild).' },
    { label: 'Suicide Risk', value: 'Low risk. Denies suicidal ideation or self-harm.' },
    { label: 'Social history', value: 'Current smoker (5 cigs/day, 8 years). Occasional alcohol.' },
  ],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'tobacco', label: 'Tobacco Cessation', placeholder: 'Is she ready to quit smoking?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Antidepressant Expectations', body: ["Medications like SSRIs can take 4 to 6 weeks to start fully working for your depression. In the first week, you might feel some mild nausea or jitteriness, but that usually passes."] }], GUIDING_QUESTIONS:
   [
    'What findings support a diagnosis of Major Depressive Disorder?',
    'Why was sertraline selected over bupropion?',
    'What role does CBT play in treatment?',
    'How should treatment response be assessed?',
    'How should tobacco use be addressed when a patient is not ready to quit?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w5-sarah_m-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w5-sarah_m-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin and occasional melatonin 3 mg at bedtime if I have trouble sleeping." },
    { id: 'w5-sarah_m-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 to 2 alcoholic beverages weekly when socializing with friends." },
    { id: 'w5-sarah_m-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I currently smoke approximately 5 cigarettes daily, and I have a smoking history of about 8 years." },
    { id: 'w5-sarah_m-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother has Major Depressive Disorder and was successfully treated with sertraline. My father has high blood pressure. My maternal grandmother has Generalized Anxiety Disorder." },
    { id: 'w5-sarah_m-tue_living', topic: 'Living situation', field: 'living', keywords: ['living', 'live', 'house', 'apartment', 'home', 'roommate', 'alone'], response: "I live alone in a small house in the suburbs." },
    { id: 'w5-sarah_m-tue_diet', topic: 'Diet', field: 'diet', keywords: ['diet', 'eat', 'meals', 'food', 'nutrition'], response: "Lately my diet hasn't been great. I eat mostly quick processed foods or takeout because I just don't have the energy to cook." },
    { id: 'w5-sarah_m-tue_exercise', topic: 'Exercise / Physical activity', field: 'exercise', keywords: ['exercise', 'walk', 'run', 'workout', 'activity', 'hiking', 'physical'], response: "I used to walk regularly, but since feeling this way, I have been too tired and unmotivated to do much physical activity." },
    { id: 'w5-sarah_m-tue_sleep', topic: 'Sleep duration', field: 'sleep', keywords: ['sleep', 'insomnia', 'hour', 'hours', 'night'], response: "I sleep about 5 to 6 hours a night, but it is very restless. I have trouble falling asleep due to racing thoughts." },
    { id: 'w5-sarah_m-tue_insurance', topic: 'Insurance / Medication cost', field: 'insurance', keywords: ['insurance', 'cost', 'copay', 'pay', 'afford', 'coverage'], response: "I have good insurance through my employer as a school teacher, so I don't have concerns about copays or medication costs." },
    { id: 'w5-sarah_m-tue_quit_attempts', topic: 'Prior quit attempts', field: 'tobacco', keywords: ['quit before', 'tried to quit', 'previous quit', 'past quit', 'attempts'], response: "No, I have never tried to quit smoking before. This would be my first time trying if I do." },
    { id: 'w5a_tobacco', topic: 'Readiness to quit', field: 'tobacco', keywords: ['quit', 'smoke', 'ready', 'tobacco'], response: "I know I need to quit eventually, but right now I'm just so stressed and overwhelmed. I don't think I can handle quitting smoking on top of everything else." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w5a_a1', title: 'Initial Therapy', icon: 'Brain', color: '13314f', questions: [{ key: 'q1', q: 'What is the best initial pharmacotherapy for both her MDD and GAD?' }, { key: 'q2', q: 'Should you push tobacco cessation today?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w5a_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Start an SSRI (e.g., Sertraline or Escitalopram) to treat both MDD and GAD. Use motivational interviewing for tobacco but respect she is not ready to quit today.', correct: true },
      { key: 'o2', label: 'Start Bupropion for MDD and tobacco cessation', correct: false },
      { key: 'o3', label: 'Start Lorazepam for anxiety and wait on depression', correct: false },
    ] },
  ],
})

const sarahWed = makeCase({
  id: 'w5-sarah_m-wed',
  PATIENT: { ...sarahTue.PATIENT },
  ENCOUNTER: { week: 'Week 5', 
    day: 'Wednesday', type: '4-Week Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I feel a little better, but I'm still not 100%.",
    snapshotSummary: 'Sarah was started on Sertraline 50 mg. She is tolerating it and has partial response.',
    diseaseStates: ['MDD', 'GAD'],
    learningObjectives: ['Recognize partial response to antidepressant', 'Titrate dose to achieve remission'],
  },
  VITALS: { bp: '116/72', bpRepeat: '114/70', hr: '72', rr: '16', temp: '98.1°F', weight: '68.5 kg', height: "5'5\"", bmi: '25.1', flags: {} },
  LABS: [
    { label: 'Sodium', value: '139', unit: 'mEq/L', range: '135-145' },
    { label: 'Potassium', value: '4.2', unit: 'mEq/L', range: '3.5-5.0' },
    { label: 'BUN', value: '12', unit: 'mg/dL', range: '8-20' },
    { label: 'Serum Creatinine', value: '0.8', unit: 'mg/dL', range: '0.6-1.2' },
    { label: 'eGFR', value: '>90', unit: 'mL/min/1.73m²', range: '>=60' },
    { label: 'AST', value: '20', unit: 'U/L', range: '0-35' },
    { label: 'ALT', value: '18', unit: 'U/L', range: '0-35' },
    { label: 'Glucose', value: '91', unit: 'mg/dL', range: '70-99' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'MDD/GAD', detail: 'Partial response to SSRI', flag: 'warn' }],
  MEDICATIONS: [
    { name: 'Sertraline', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'MDD/GAD', notes: 'Tolerating well' },
  ],
  IMMUNIZATIONS: sarahTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Reports mood is slightly better. Less worrying. PHQ-9: 8 (Mild). GAD-7: 5 (Mild).' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'tolerability', label: 'Side Effects / Tolerability', placeholder: 'Any issues with the medication?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Evaluating Response', body: ["It sounds like you're starting to have more good days than bad days. We'll increase the dose slightly to get you the rest of the way there."] }], GUIDING_QUESTIONS:
   [
    'Has this patient responded to treatment?',
    'Has this patient achieved remission?',
    'Why is increasing sertraline reasonable?',
    'What factors should be assessed before increasing the dose?',
    'Why should CBT continue?',
    'How should tobacco use be addressed today?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w5-sarah_m-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w5-sarah_m-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin and occasional melatonin 3 mg at bedtime if I have trouble sleeping." },
    { id: 'w5-sarah_m-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 to 2 alcoholic beverages weekly when socializing with friends." },
    { id: 'w5-sarah_m-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have reduced my smoking from approximately 5 cigarettes daily to about 2 cigarettes daily now." },
    { id: 'w5-sarah_m-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother has Major Depressive Disorder and was successfully treated with sertraline. My father has high blood pressure. My maternal grandmother has Generalized Anxiety Disorder." },
    { id: 'w5-sarah_m-wed_trigger', topic: 'Smoking triggers', field: 'tobacco', keywords: ['trigger', 'triggers', 'stress', 'work', 'stressful'], response: "My smoking seems to happen a lot at work when I'm really stressed out." },
    { id: 'w5-sarah_m-wed_mood', topic: 'Mood improvement', field: 'mood', keywords: ['mood', 'feel', 'improve', 'better', 'depression', 'anxiety'], response: "I feel a little better, less worrying, but I'm still not 100%. My mood is slightly improved since starting the sertraline." },
    { id: 'w5a2_tol', topic: 'Tolerability', field: 'tolerability', keywords: ['side effects', 'tolerate', 'stomach', 'sleep'], response: "I had a little bit of an upset stomach the first few days, but it went away. No other problems." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w5a2_a1', title: 'Treatment Optimization', icon: 'ArrowUpCircle', color: '13314f', questions: [{ key: 'q1', q: 'Since she only has a partial response (PHQ-9 is 8, goal is <5) and is tolerating the medication well, what is the next step?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w5a2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Increase Sertraline to 100 mg daily to target full remission', correct: true },
      { key: 'o2', label: 'Switch to a different SSRI', correct: false },
      { key: 'o3', label: 'Add Quetiapine', correct: false },
    ] },
  ],
})

const sarahThu = makeCase({
  id: 'w5-sarah_m-thu',
  PATIENT: { ...sarahTue.PATIENT },
  ENCOUNTER: { week: 'Week 5', 
    day: 'Thursday', type: '12-Week Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I feel like myself again. And I'm ready to tackle the smoking.",
    snapshotSummary: 'Sarah achieved remission on Sertraline 100 mg. She is now ready to quit smoking.',
    diseaseStates: ['MDD', 'GAD', 'Tobacco'],
    learningObjectives: ['Confirm remission', 'Initiate tobacco cessation pharmacotherapy'],
  },
  VITALS: { bp: '116/72', bpRepeat: '114/70', hr: '72', rr: '16', temp: '98.1°F', weight: '68.5 kg', height: "5'5\"", bmi: '25.1', flags: {} },
  LABS: [
    { label: 'Sodium', value: '139', unit: 'mEq/L', range: '135-145' },
    { label: 'Potassium', value: '4.1', unit: 'mEq/L', range: '3.5-5.0' },
    { label: 'BUN', value: '12', unit: 'mg/dL', range: '8-20' },
    { label: 'Serum Creatinine', value: '0.8', unit: 'mg/dL', range: '0.6-1.2' },
    { label: 'eGFR', value: '>90', unit: 'mL/min/1.73m²', range: '>=60' },
    { label: 'AST', value: '19', unit: 'U/L', range: '0-35' },
    { label: 'ALT', value: '18', unit: 'U/L', range: '0-35' },
    { label: 'Glucose', value: '90', unit: 'mg/dL', range: '70-99' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'MDD/GAD', detail: 'In remission', flag: 'normal' }, { name: 'Tobacco Use', detail: 'In remission (quit 6 weeks ago)', flag: 'normal' }],
  MEDICATIONS: [
    { name: 'Sertraline', dose: '100 mg', route: 'PO', freq: 'daily', indication: 'MDD/GAD', notes: '' },
  ],
  IMMUNIZATIONS: sarahTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'PHQ-9: 2. GAD-7: 1. Mood is excellent. Now wants to quit smoking.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'tobacco', label: 'Tobacco Plan', placeholder: 'How does she want to quit?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Long-term Maintenance', body: ["Even though you feel completely better, it's recommended to stay on the medication for at least 6 to 9 months to prevent a relapse."] }], GUIDING_QUESTIONS:
   [
    'How do you know this patient has achieved remission?',
    'Should sertraline be discontinued today?',
    'Why is relapse prevention important?',
    'What counseling should be provided regarding smoking?',
    'What should long-term monitoring include?'
  ],

    INTERVIEW_KNOWLEDGE: [
    { id: 'w5-sarah_m-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w5-sarah_m-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take a daily multivitamin and occasional melatonin 3 mg at bedtime if I have trouble sleeping." },
    { id: 'w5-sarah_m-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink about 1 to 2 alcoholic beverages weekly when socializing with friends." },
    { id: 'w5-sarah_m-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I quit smoking completely about 6 weeks ago and have remained tobacco free since then. I'm proud that I've been smoke-free for 6 weeks now and feel comfortable with my progress." },
    { id: 'w5-sarah_m-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother has Major Depressive Disorder and was successfully treated with sertraline. My father has high blood pressure. My maternal grandmother has Generalized Anxiety Disorder." },
    { id: 'w5-sarah_m-thu_exercise', topic: 'Exercise / Hiking', field: 'exercise', keywords: ['exercise', 'hiking', 'hike', 'walk', 'husband', 'spouse', 'activity'], response: "I've been feeling great and have actually resumed going on hikes with my husband on weekends." },
    { id: 'w5-sarah_m-thu_trigger', topic: 'Smoking triggers', field: 'tobacco', keywords: ['trigger', 'triggers', 'stress', 'work', 'stressful'], response: "I still occasionally feel the urge or craving when work stress builds up, but I have not had any cigarettes since I quit." },
    { id: 'w5a3_tob', topic: 'Tobacco plan', field: 'tobacco', keywords: ['quit', 'smoke', 'how', 'prevent', 'relapse', 'cravings'], response: "I've been smoke-free for 6 weeks, but I want to make sure I don't start again. I want to talk about how to prevent relapse." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w5a3_a1', title: 'Tobacco Cessation', icon: 'CigaretteOff', color: '10b981', questions: [{ key: 'q1', q: 'What is the most effective pharmacotherapy for tobacco cessation?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w5a3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Congratulate on successful smoking cessation, discuss relapse triggers, and recommend continuing behavioral therapy/relapse prevention.', correct: true },
      { key: 'o2', label: 'Initiate Varenicline', correct: false },
    ] },
  ],
})

/* ============================ JESSICA RAMIREZ (B) ============================ */
// MDD + GAD + Nonadherence. Distinguish nonadherence from treatment failure.

const jessicaTue = makeCase({
  id: 'w5-jessica_r-tue',
  PATIENT: { name: 'Jessica Ramirez', age: 42, sex: 'female', ethnicity: 'Hispanic', mrn: 'W5-30041' },
  ENCOUNTER: { week: 'Week 5', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "These medications aren't working.",
    snapshotSummary: 'Jessica has MDD/GAD and is prescribed Sertraline 100 mg. Her symptoms are moderately severe. On paper, it looks like a treatment failure.',
    diseaseStates: ['MDD', 'GAD'],
    learningObjectives: ['Identify medication nonadherence as a root cause', 'Distinguish nonadherence from true treatment-resistant depression'],
  },
  VITALS: { bp: '124/78', bpRepeat: '122/78', hr: '82', rr: '16', temp: '98.3°F', weight: '80 kg', height: "5'4\"", bmi: '30.2', flags: {} },
  LABS: [
    { label: 'Sodium', value: '140', unit: 'mEq/L', range: '135-145' },
    { label: 'Potassium', value: '4.2', unit: 'mEq/L', range: '3.5-5.0' },
    { label: 'BUN', value: '14', unit: 'mg/dL', range: '8-20' },
    { label: 'Serum Creatinine', value: '0.9', unit: 'mg/dL', range: '0.6-1.2' },
    { label: 'eGFR', value: '>90', unit: 'mL/min/1.73m²', range: '>=60' },
    { label: 'AST', value: '22', unit: 'U/L', range: '0-35' },
    { label: 'ALT', value: '25', unit: 'U/L', range: '0-35' },
    { label: 'Glucose', value: '97', unit: 'mg/dL', range: '70-99' },
    { label: 'TSH', value: '2.0', unit: 'mIU/L', range: '0.4-4.0' }
  ],
  ALERTS: [{ level: 'high', text: 'Patient reports medication is not working. PHQ-9 is 16 (Moderately Severe). Must assess adherence before escalating.' }],
  PROBLEMS: [
    { name: 'MDD', detail: 'PHQ-9 16', flag: 'high' },
    { name: 'GAD', detail: 'GAD-7 14', flag: 'high' },
  ],
  MEDICATIONS: [
    { name: 'Sertraline', dose: '100 mg', route: 'PO', freq: 'daily', indication: 'MDD/GAD', notes: '' },
    { name: 'Hydroxyzine', dose: '25 mg', route: 'PO', freq: 'q8h PRN', indication: 'Anxiety', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Referred for treatment optimization due to lack of efficacy of Sertraline 100 mg over the last 3 months.' }, { label: 'Social', value: 'Divorced, single mother of two. Medical receptionist. Current smoker (10 cigs/day, 20 years). Occasional alcohol.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Medication Adherence', placeholder: 'How many days a week does she take the Sertraline?' },
    { key: 'barriers', label: 'Barriers to Care', placeholder: 'Why is she struggling with her medications?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Anxiety Management', body: ["For anxiety, we start at a very low dose because sometimes the medication can temporarily make you feel more anxious before it helps. We'll go slow."] }], GUIDING_QUESTIONS:
   [
    'Has this patient failed sertraline?',
    'What information changed your treatment plan?',
    'What barriers are affecting outcomes?',
    'What interventions would likely have the greatest impact?',
    'Why is switching antidepressants not preferred today?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w5-jessica_r-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w5-jessica_r-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I drink chamomile tea for relaxation and take a daily multivitamin." },
    { id: 'w5-jessica_r-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink occasionally—about 1 drink every few weeks." },
    { id: 'w5-jessica_r-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I currently smoke approximately 10 cigarettes daily, and I have a smoking history of about 20 years." },
    { id: 'w5-jessica_r-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother has Major Depressive Disorder. My father has Alcohol Use Disorder. My sister has Generalized Anxiety Disorder." },
    { id: 'w5-jessica_r-tue_suicide', topic: 'Suicide risk / psychosis', field: 'suicide', keywords: ['suicide', 'harm', 'kill', 'end', 'ideation', 'hallucinations', 'psychosis', 'hear voices'], response: "No, I have never had any thoughts of hurting myself or anyone else, and I've never experienced hallucinations or anything like that." },
    { id: 'w5b_adh', topic: 'Nonadherence', field: 'adherence', keywords: ['take', 'every day', 'miss', 'forget', 'how often'], response: "I try to take it, but honestly I probably miss it two to three days a week. There have been a few times where I stopped taking it completely for a week or two when things got too chaotic." },
    { id: 'w5b_bar', topic: 'Barriers', field: 'barriers', keywords: ['why', 'hard', 'chaos', 'children', 'barriers'], response: "Between getting the kids to school, working full time, and financial stress, my own health just falls to the bottom of the list." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w5b_a1', title: 'Treatment Failure vs Nonadherence', icon: 'AlertTriangle', color: 'd97706', questions: [{ key: 'q1', q: 'Does she meet criteria for treatment-resistant depression?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w5b_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Identify nonadherence as the cause of failure. Do NOT escalate dose. Focus on adherence strategies and social support.', correct: true },
      { key: 'o2', label: 'Diagnose Treatment-Resistant Depression and add Quetiapine', correct: false },
      { key: 'o3', label: 'Switch to Venlafaxine', correct: false },
    ] },
  ],
})

const jessicaWed = makeCase({
  id: 'w5-jessica_r-wed',
  PATIENT: { ...jessicaTue.PATIENT },
  ENCOUNTER: { week: 'Week 5', 
    day: 'Wednesday', type: '1-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I've been taking it every day now. It's helping, but slowly.",
    snapshotSummary: 'Jessica has improved her adherence. Her symptoms are improving but she expects faster results.',
    diseaseStates: ['MDD', 'GAD'],
    learningObjectives: ['Manage patient expectations regarding antidepressant onset of action'],
  },
  VITALS: { bp: '122/76', bpRepeat: '120/74', hr: '78', rr: '16', temp: '98.1°F', weight: '79 kg', height: "5'4\"", bmi: '29.9', flags: {} },
  LABS: [
    { label: 'Sodium', value: '140', unit: 'mEq/L', range: '135-145' },
    { label: 'Potassium', value: '4.1', unit: 'mEq/L', range: '3.5-5.0' },
    { label: 'BUN', value: '13', unit: 'mg/dL', range: '8-20' },
    { label: 'Serum Creatinine', value: '0.9', unit: 'mg/dL', range: '0.6-1.2' },
    { label: 'eGFR', value: '>90', unit: 'mL/min/1.73m²', range: '>=60' },
    { label: 'AST', value: '22', unit: 'U/L', range: '0-35' },
    { label: 'ALT', value: '23', unit: 'U/L', range: '0-35' },
    { label: 'Glucose', value: '95', unit: 'mg/dL', range: '70-99' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'MDD/GAD', detail: 'Improving with adherence', flag: 'warn' }],
  MEDICATIONS: jessicaTue.MEDICATIONS,
  IMMUNIZATIONS: jessicaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Patient utilized pillbox and alarms. Adherence significantly improved. PHQ-9: 9. GAD-7: 7.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'expectations', label: 'Expectations', placeholder: 'What are her expectations for the medication?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Managing Side Effects', body: ["If the medication is causing sleep issues, we can switch you to taking it in the morning. Let's not give up on it just yet."] }], GUIDING_QUESTIONS:
   [
    'Has this patient achieved remission?',
    'Should sertraline be changed today?',
    'What intervention may have contributed most to improvement?',
    'What stage of change is the patient demonstrating regarding smoking?',
    'What should be the major goals before the next visit?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w5-jessica_r-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w5-jessica_r-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I drink chamomile tea for relaxation and take a daily multivitamin." },
    { id: 'w5-jessica_r-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink occasionally—about 1 drink every few weeks." },
    { id: 'w5-jessica_r-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have reduced my smoking from approximately 10 cigarettes daily to about 5 cigarettes daily now." },
    { id: 'w5-jessica_r-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother has Major Depressive Disorder. My father has Alcohol Use Disorder. My sister has Generalized Anxiety Disorder." },
    { id: 'w5-jessica_r-wed_adh', topic: 'Medication adherence', field: 'adherence', keywords: ['take', 'every day', 'miss', 'forget', 'how often', 'adherence', 'adherent', 'perfect'], response: "I've been taking it perfectly 100% of the time for the past 3 weeks since I started using the pillbox and setting alarms." },
    { id: 'w5b2_exp', topic: 'Expectations', field: 'expectations', keywords: ['expect', 'fast', 'slow', 'work'], response: "I've been taking it perfectly for 3 weeks now, with only one missed dose in the past month. I do feel noticeably better—my mood and energy are up, my concentration is better, my sleep has improved, and I have more patience with the kids—but shouldn't I feel completely better by now? I feel like it's not working fast enough." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w5b2_a1', title: 'Counseling', icon: 'MessageSquare', color: '0891b2', questions: [{ key: 'q1', q: 'How long does an adequate trial of an antidepressant take to show full effect?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w5b2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Counsel that full effect takes 4-8 weeks of consistent use. Continue Sertraline 100 mg and reassure.', correct: true },
      { key: 'o2', label: 'Increase dose to 150 mg immediately to speed up response', correct: false },
    ] },
  ],
})

const jessicaThu = makeCase({
  id: 'w5-jessica_r-thu',
  PATIENT: { ...jessicaTue.PATIENT },
  ENCOUNTER: { week: 'Week 5', 
    day: 'Thursday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I feel so much better. I'm finally able to manage things.",
    snapshotSummary: 'Jessica is adherent and has achieved remission.',
    diseaseStates: ['MDD', 'GAD'],
    learningObjectives: ['Recognize successful treatment and reinforce maintenance therapy'],
  },
  VITALS: { bp: '120/74', bpRepeat: '118/72', hr: '74', rr: '16', temp: '98.0°F', weight: '77.5 kg', height: "5'4\"", bmi: '29.4', flags: {} },
  LABS: [
    { label: 'Sodium', value: '139', unit: 'mEq/L', range: '135-145' },
    { label: 'Potassium', value: '4.0', unit: 'mEq/L', range: '3.5-5.0' },
    { label: 'BUN', value: '13', unit: 'mg/dL', range: '8-20' },
    { label: 'Serum Creatinine', value: '0.8', unit: 'mg/dL', range: '0.6-1.2' },
    { label: 'eGFR', value: '>90', unit: 'mL/min/1.73m²', range: '>=60' },
    { label: 'AST', value: '20', unit: 'U/L', range: '0-35' },
    { label: 'ALT', value: '21', unit: 'U/L', range: '0-35' },
    { label: 'Glucose', value: '92', unit: 'mg/dL', range: '70-99' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'MDD/GAD', detail: 'In remission', flag: 'normal' }],
  MEDICATIONS: jessicaTue.MEDICATIONS,
  IMMUNIZATIONS: jessicaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'PHQ-9: 3. GAD-7: 2. Full remission achieved.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'maintenance', label: 'Maintenance Education', placeholder: 'What is her plan for the medication?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Tapering Off', body: ["If you ever decide you want to stop this medication, please let us know so we can give you a schedule to taper off slowly. Stopping abruptly can cause withdrawal symptoms."] }], GUIDING_QUESTIONS:
   [
    'How do you know this patient has achieved remission?',
    'What intervention may have had the greatest impact on this patient\'s outcome?',
    'Should sertraline be discontinued today?',
    'What behaviors should be reinforced?',
    'Why is self-efficacy important?'
  ],

    INTERVIEW_KNOWLEDGE: [
    { id: 'w5-jessica_r-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w5-jessica_r-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I drink chamomile tea for relaxation and take a daily multivitamin." },
    { id: 'w5-jessica_r-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink occasionally—about 1 drink every few weeks." },
    { id: 'w5-jessica_r-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I smoke only one to two cigarettes weekly now, usually during periods of high stress." },
    { id: 'w5-jessica_r-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother has Major Depressive Disorder. My father has Alcohol Use Disorder. My sister has Generalized Anxiety Disorder." },
    { id: 'w5b3_maint', topic: 'Stopping meds', field: 'maintenance', keywords: ['stop', 'plan', 'continue', 'long', 'better'], response: "Since I feel 100% better, can I stop taking the Sertraline now?" },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w5b3_a1', title: 'Maintenance Therapy', icon: 'CheckCircle', color: '10b981', questions: [{ key: 'q1', q: 'Should she stop the medication now that she is in remission?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w5b3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Counsel to continue medication for at least 6-12 months post-remission to prevent relapse', correct: true },
      { key: 'o2', label: 'Agree to taper and stop the medication', correct: false },
    ] },
  ],
})

/* ============================ DAVID CARTER (C) ============================ */
// Treatment-Resistant MDD + Severe GAD. Evaluating TRD, suicide risk, and advanced therapy (ESCAPE-TRD).

const davidTue = makeCase({
  id: 'w5-david_c-tue',
  PATIENT: { name: 'David Carter', age: 51, sex: 'male', ethnicity: 'White', mrn: 'W5-99881' },
  ENCOUNTER: { week: 'Week 5', 
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "Nothing works. I'm running out of options.",
    snapshotSummary: 'David has severe MDD and GAD. He has failed Escitalopram and Sertraline, and is currently failing Venlafaxine despite adequate dose and duration. He has true Treatment-Resistant Depression.',
    diseaseStates: ['TRD', 'GAD'],
    learningObjectives: ['Confirm true Treatment-Resistant Depression (TRD)', 'Assess suicide risk in severe depression', 'Recognize indications for advanced therapies'],
  },
  VITALS: { bp: '128/82', bpRepeat: '126/80', hr: '84', rr: '16', temp: '98.3°F', weight: '96 kg', height: "5'11\"", bmi: '29.5', flags: {} },
  LABS: [
    { label: 'Sodium', value: '139', unit: 'mEq/L', range: '135-145' },
    { label: 'Potassium', value: '4.1', unit: 'mEq/L', range: '3.5-5.0' },
    { label: 'BUN', value: '16', unit: 'mg/dL', range: '8-20' },
    { label: 'Serum Creatinine', value: '1.0', unit: 'mg/dL', range: '0.6-1.2' },
    { label: 'eGFR', value: '89', unit: 'mL/min/1.73m²', range: '>=60' },
    { label: 'AST', value: '24', unit: 'U/L', range: '0-35' },
    { label: 'ALT', value: '26', unit: 'U/L', range: '0-35' },
    { label: 'Glucose', value: '99', unit: 'mg/dL', range: '70-99' },
    { label: 'TSH', value: '1.8', unit: 'mIU/L', range: '0.4-4.0' },
    { label: 'CBC', value: 'Normal', unit: '', range: 'Normal' }
  ],
  ALERTS: [{ level: 'high', text: 'Severe Depression (PHQ-9 21) despite multiple adequate trials. High risk patient.' }],
  PROBLEMS: [
    { name: 'Treatment-Resistant Depression', detail: 'PHQ-9 21', flag: 'high' },
    { name: 'Severe GAD', detail: 'GAD-7 18', flag: 'high' },
    { name: 'Obstructive Sleep Apnea', detail: 'Uses CPAP nightly', flag: 'normal' },
    { name: 'Cholecystectomy', detail: 'Surgical history', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Venlafaxine XR', dose: '150 mg', route: 'PO', freq: 'daily', indication: 'MDD/GAD', notes: 'Taking for 12 weeks' },
    { name: 'Hydroxyzine', dose: '25 mg', route: 'PO', freq: 'q8h PRN', indication: 'Anxiety', notes: '' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient reports severe emotional exhaustion, social withdrawal, and anhedonia. Prior failed trials: Escitalopram 20mg (16wks), Sertraline 150mg (6mos). Adherence confirmed.' },
    { label: 'Social history', value: 'Current smoker (~half pack per day). Prior tobacco use (~1 pack per day). Occasional alcohol.' },
  ],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'suicide', label: 'Suicide Risk Assessment', placeholder: 'Assess for suicidal ideation' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Tobacco Cessation Options', body: ["Quitting smoking is a journey. We can use nicotine patches to give you a steady baseline and gum for cravings, which doubles your chances of success."] }], GUIDING_QUESTIONS:
   [
    'Does this patient meet criteria for emergency psychiatric hospitalization?',
    'Why is treatment-resistant depression being considered?',
    'Why is augmentation reasonable?',
    'What are the patient\'s major protective factors?',
    'What should be the major goals before the next visit?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w5-david_c-tue_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w5-david_c-tue_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take melatonin 3 mg nightly for sleep, but I do not take other herbal supplements." },
    { id: 'w5-david_c-tue_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink occasionally—about 1 drink per month." },
    { id: 'w5-david_c-tue_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I currently smoke approximately one pack of cigarettes daily, and I have a smoking history of about 25 years." },
    { id: 'w5-david_c-tue_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother has Major Depressive Disorder. My father has Alcohol Use Disorder. My brother also has Major Depressive Disorder." },
    { id: 'w5-david_c-tue_living', topic: 'Living situation', field: 'living', keywords: ['living', 'live', 'house', 'apartment', 'home', 'roommate', 'alone'], response: "I live alone. I separated from my wife about two years ago." },
    { id: 'w5-david_c-tue_cbt', topic: 'CBT history / therapy', field: 'cbt', keywords: ['cbt', 'therapy', 'cognitive', 'counseling', 'therapist'], response: "Yes, I completed a course of cognitive behavioral therapy (CBT) about a year ago, but unfortunately it didn't seem to help much with my symptoms." },
    { id: 'w5-david_c-tue_osa', topic: 'Sleep apnea / CPAP', field: 'osa', keywords: ['osa', 'sleep apnea', 'cpap', 'apnea', 'mask', 'sleep machine'], response: "Yes, I have obstructive sleep apnea and I use a CPAP machine every night." },
    { id: 'w5-david_c-tue_surgery', topic: 'Surgical history / cholecystectomy', field: 'surgery', keywords: ['surgery', 'operation', 'cholecystectomy', 'gallbladder', 'appendix', 'surgeries'], response: "I had my gallbladder removed (a cholecystectomy) a few years ago. No other surgeries." },
    { id: 'w5-david_c-tue_efficacy', topic: 'Medication response', field: 'efficacy', keywords: ['efficacy', 'working', 'help', 'better', 'improvement', 'response', 'venlafaxine'], response: "I have had a partial response with some minor improvement since starting venlafaxine, but my symptoms are still quite severe." },
    { id: 'w5c_si', topic: 'Suicide risk', field: 'suicide', keywords: ['suicide', 'harm', 'kill', 'end', 'ideation'], response: "I don't have a plan to hurt myself. But sometimes I wish I just wouldn't wake up. It's so exhausting fighting this every day." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w5c_a1', title: 'TRD Assessment', icon: 'AlertOctagon', color: 'dc2626', questions: [{ key: 'q1', q: 'Does he meet criteria for true Treatment-Resistant Depression?' }, { key: 'q2', q: 'How does ESCAPE-TRD guide your next step?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w5c_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Diagnose TRD. Refer to specialty behavioral health for advanced therapy (e.g., Esketamine) per ESCAPE-TRD evidence, as standard augmentation is less likely to achieve remission.', correct: true },
      { key: 'o2', label: 'Switch to a 4th oral antidepressant', correct: false },
      { key: 'o3', label: 'Add Quetiapine augmentation', correct: false },
    ] },
  ],
})

const davidWed = makeCase({
  id: 'w5-david_c-wed',
  PATIENT: { ...davidTue.PATIENT },
  ENCOUNTER: { week: 'Week 5', 
    day: 'Wednesday', type: '1-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "The nasal spray is intense, but the fog is starting to lift.",
    snapshotSummary: 'David was referred and started on Esketamine nasal spray at a specialized center while continuing Venlafaxine. He is experiencing dissociation but improving mood.',
    diseaseStates: ['TRD'],
    learningObjectives: ['Manage side effects of advanced therapies (Esketamine dissociation)', 'Coordinate care with specialty centers'],
  },
  VITALS: { bp: '126/80', bpRepeat: '124/78', hr: '78', rr: '16', temp: '98.1°F', weight: '98 kg', height: "5'11\"", bmi: '30.1', flags: {} },
  LABS: [
    { label: 'Sodium', value: '139', unit: 'mEq/L', range: '135-145' },
    { label: 'Potassium', value: '4.0', unit: 'mEq/L', range: '3.5-5.0' },
    { label: 'BUN', value: '16', unit: 'mg/dL', range: '8-20' },
    { label: 'Serum Creatinine', value: '1.0', unit: 'mg/dL', range: '0.6-1.2' },
    { label: 'eGFR', value: '89', unit: 'mL/min/1.73m²', range: '>=60' },
    { label: 'AST', value: '23', unit: 'U/L', range: '0-35' },
    { label: 'ALT', value: '24', unit: 'U/L', range: '0-35' },
    { label: 'Glucose', value: '101', unit: 'mg/dL', range: '70-99' },
    { label: 'Total Cholesterol', value: '190', unit: 'mg/dL', range: '<200' },
    { label: 'LDL-C', value: '109', unit: 'mg/dL', range: '<100' },
    { label: 'HDL-C', value: '43', unit: 'mg/dL', range: '>40' },
    { label: 'Triglycerides', value: '181', unit: 'mg/dL', range: '<150' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'TRD', detail: 'Improving on Esketamine', flag: 'warn' }],
  MEDICATIONS: [
    { name: 'Esketamine Nasal Spray', dose: '84 mg', route: 'Intranasal', freq: 'Twice weekly', indication: 'TRD', notes: 'Administered at specialty clinic' },
    { name: 'Aripiprazole', dose: '2 mg', route: 'PO', freq: 'daily', indication: 'TRD Augmentation', notes: '' },
    ...davidTue.MEDICATIONS,
  ],
  IMMUNIZATIONS: davidTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'PHQ-9 decreased to 12. Reports feeling somewhat better. Notes transient dissociation and dizziness during treatments.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'sideeffects', label: 'Esketamine Side Effects', placeholder: 'Ask about the dissociation and BP' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Handling Relapse', body: ["A slip-up doesn't mean you've failed. Many people try multiple times before quitting for good. Let's adjust your nicotine replacement therapy to help with those cravings."] }], GUIDING_QUESTIONS:
   [
    'Has this patient responded to treatment?',
    'Has remission been achieved?',
    'Should medications be changed today?',
    'What are the most important improvements?',
    'What remains concerning?'
  ],

  INTERVIEW_KNOWLEDGE: [
    { id: 'w5-david_c-wed_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w5-david_c-wed_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take melatonin 3 mg nightly for sleep, but I do not take other herbal supplements." },
    { id: 'w5-david_c-wed_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink occasionally—about 1 drink per month." },
    { id: 'w5-david_c-wed_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I have reduced my smoking from approximately one pack daily to about half a pack daily now." },
    { id: 'w5-david_c-wed_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother has Major Depressive Disorder. My father has Alcohol Use Disorder. My brother also has Major Depressive Disorder." },
    { id: 'w5-david_c-wed_suicide', topic: 'Suicide risk', field: 'suicide', keywords: ['suicide', 'harm', 'kill', 'end', 'ideation'], response: "I don't have any thoughts of wanting to die or wishing I wouldn't wake up anymore. That has definitely resolved since I started feeling better." },
    { id: 'w5-david_c-wed_concern', topic: 'Patient concerns', field: 'concerns', keywords: ['worry', 'concern', 'temporary', 'lasting', 'relapse'], response: "I'm really worried that this improvement is only temporary and that my symptoms will come back." },
    { id: 'w5c2_se', topic: 'Side effects', field: 'sideeffects', keywords: ['dissociation', 'dizzy', 'intense', 'blood pressure'], response: "During the treatment I feel very detached and dizzy, and my blood pressure spikes. The clinic watches me for 2 hours, and it goes away. It's worth it if it keeps working. Truly, this is the best I have felt in years. The esketamine nasal spray has really helped clear the fog, and I've experienced significant symptom improvement." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w5c2_a1', title: 'Therapy Management', icon: 'Activity', color: '13314f', questions: [{ key: 'q1', q: 'Are his side effects expected?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w5c2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Reassure that transient dissociation and BP elevation are expected and safely monitored in the clinic. Continue current plan.', correct: true },
      { key: 'o2', label: 'Discontinue Esketamine immediately due to side effects', correct: false },
    ] },
  ],
})

const davidThu = makeCase({
  id: 'w5-david_c-thu',
  PATIENT: { ...davidTue.PATIENT },
  ENCOUNTER: { week: 'Week 5', 
    day: 'Thursday', type: '6-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I never thought I'd feel this good again.",
    snapshotSummary: 'David achieved and sustained remission on Esketamine maintenance therapy + Venlafaxine.',
    diseaseStates: ['TRD', 'GAD'],
    learningObjectives: ['Recognize the success of advanced therapy in TRD per ESCAPE-TRD data'],
  },
  VITALS: { bp: '124/78', bpRepeat: '122/76', hr: '74', rr: '16', temp: '98.2°F', weight: '99 kg', height: "5'11\"", bmi: '30.4', flags: {} },
  LABS: [
    { label: 'Sodium', value: '140', unit: 'mEq/L', range: '135-145' },
    { label: 'Potassium', value: '4.1', unit: 'mEq/L', range: '3.5-5.0' },
    { label: 'BUN', value: '15', unit: 'mg/dL', range: '8-20' },
    { label: 'Serum Creatinine', value: '1.0', unit: 'mg/dL', range: '0.6-1.2' },
    { label: 'eGFR', value: '88', unit: 'mL/min/1.73m²', range: '>=60' },
    { label: 'AST', value: '22', unit: 'U/L', range: '0-35' },
    { label: 'ALT', value: '24', unit: 'U/L', range: '0-35' },
    { label: 'Glucose', value: '99', unit: 'mg/dL', range: '70-99' },
    { label: 'Total Cholesterol', value: '188', unit: 'mg/dL', range: '<200' },
    { label: 'LDL-C', value: '106', unit: 'mg/dL', range: '<100' },
    { label: 'HDL-C', value: '45', unit: 'mg/dL', range: '>40' },
    { label: 'Triglycerides', value: '176', unit: 'mg/dL', range: '<150' }
  ],
  ALERTS: [],
  PROBLEMS: [{ name: 'TRD', detail: 'In remission', flag: 'normal' }],
  MEDICATIONS: [
    { name: 'Esketamine Nasal Spray', dose: '84 mg', route: 'Intranasal', freq: 'Every 2 weeks', indication: 'TRD Maintenance', notes: 'Administered at specialty clinic' },
    { name: 'Aripiprazole', dose: '2 mg', route: 'PO', freq: 'daily', indication: 'TRD Augmentation', notes: '' },
    ...davidTue.MEDICATIONS,
  ],
  IMMUNIZATIONS: davidTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'PHQ-9: 3. GAD-7: 4. Sustained remission.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'update', label: 'Clinical Update', placeholder: 'How is he doing?' },
  ],
    COUNSELING: [{ id: 'c1', title: 'Celebrating Success', body: ["You've been smoke-free for weeks! Your heart and lungs are already healing. Keep using the lozenges when you face high-stress triggers."] }], GUIDING_QUESTIONS:
   [
    'How do you know this patient is in remission?',
    'What demonstrates successful augmentation therapy?',
    'Should medications be stopped today?',
    'What outcomes are most meaningful?',
    'What are the major goals moving forward?'
  ],

    INTERVIEW_KNOWLEDGE: [
    { id: 'w5-david_c-thu_allerg', topic: 'Medication allergies', field: 'allergies', keywords: ['allergy', 'allergic', 'allergies', 'penicillin', 'sulfa', 'codeine', 'reaction', 'rash', 'hives'], response: "I do not have any known drug or food allergies." },
    { id: 'w5-david_c-thu_otc', topic: 'OTC / Supplements', field: 'otc', keywords: ['otc', 'over the counter', 'supplement', 'herb', 'vitamin', 'multivitamin'], response: "I take melatonin 3 mg nightly for sleep, but I do not take other herbal supplements." },
    { id: 'w5-david_c-thu_alc', topic: 'Alcohol use', field: 'alcohol', keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'], response: "I drink occasionally—about 1 drink per month." },
    { id: 'w5-david_c-thu_tobacco', topic: 'Tobacco use', field: 'tobacco', keywords: ['tobacco', 'smoke', 'smoking', 'cigarette', 'cigar', 'vape', 'vaping', 'nicotine'], response: "I smoke approximately 3 cigarettes daily now." },
    { id: 'w5-david_c-thu_fh', topic: 'Family history', field: 'familyHistory', keywords: ['family history', 'father', 'mother', 'parents', 'brother', 'sister', 'sibling'], response: "My mother has Major Depressive Disorder. My father has Alcohol Use Disorder. My brother also has Major Depressive Disorder." },
    { id: 'w5c3_upd', topic: 'Update', field: 'update', keywords: ['feel', 'hope', 'better', 'life'], response: "I have my life back. I'm engaging with my family again, enjoying my hobbies. I thought I was a lost cause." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w5c3_a1', title: 'Maintenance', icon: 'CheckCircle', color: '10b981', questions: [{ key: 'q1', q: 'What is the long-term plan?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w5c3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Continue maintenance Esketamine and oral Venlafaxine to prevent relapse', correct: true },
    ] },
  ],
})

export const W5_CASES = [sarahTue, sarahWed, sarahThu, jessicaTue, jessicaWed, jessicaThu, davidTue, davidWed, davidThu]
export const W5_RUBRICS = {}
