import { makeCase } from './caseFactory.js'

// WEEK 5 — Depression + Anxiety + Tobacco Cessation
// Patients: Sarah Mitchell (A), Jessica Ramirez (B), David Carter (C)
// Case ids are namespaced 'w5-<patient>-<day>'

/* ============================ SARAH MITCHELL (A) ============================ */
// MDD + GAD + Tobacco Use. Initial presentation. Needs dual-purpose therapy.

const sarahTue = makeCase({
  id: 'w5-sarah_m-tue',
  PATIENT: { name: 'Sarah Mitchell', age: 29, sex: 'female', ethnicity: 'White', mrn: 'W5-10222' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Foundational', difficultyTone: 'teal',
    chiefConcern: "I haven't felt like myself in months.",
    snapshotSummary: 'Newly diagnosed with Major Depressive Disorder (MDD) and Generalized Anxiety Disorder (GAD). Also uses tobacco. Needs initial pharmacotherapy.',
    diseaseStates: ['MDD', 'GAD', 'Tobacco Use Disorder'],
    learningObjectives: ['Interpret PHQ-9 and GAD-7', 'Select appropriate first-line therapy for comorbid MDD/GAD', 'Assess readiness to quit tobacco'],
  },
  VITALS: { bp: '118/76', bpRepeat: '116/74', hr: '88', rr: '16', temp: '98.6°F', weight: '65 kg', height: "5'5\"", bmi: '23.9', flags: {} },
  LABS: [],
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
  ],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'tobacco', label: 'Tobacco Cessation', placeholder: 'Is she ready to quit smoking?' },
  ],
  INTERVIEW_KNOWLEDGE: [
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
  ENCOUNTER: {
    day: 'Wednesday', type: '4-Week Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I feel a little better, but I'm still not 100%.",
    snapshotSummary: 'Sarah was started on Sertraline 50 mg. She is tolerating it and has partial response.',
    diseaseStates: ['MDD', 'GAD'],
    learningObjectives: ['Recognize partial response to antidepressant', 'Titrate dose to achieve remission'],
  },
  VITALS: { ...sarahTue.VITALS },
  LABS: [],
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
  INTERVIEW_KNOWLEDGE: [
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
  ENCOUNTER: {
    day: 'Thursday', type: '12-Week Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I feel like myself again. And I'm ready to tackle the smoking.",
    snapshotSummary: 'Sarah achieved remission on Sertraline 100 mg. She is now ready to quit smoking.',
    diseaseStates: ['MDD', 'GAD', 'Tobacco'],
    learningObjectives: ['Confirm remission', 'Initiate tobacco cessation pharmacotherapy'],
  },
  VITALS: { ...sarahTue.VITALS },
  LABS: [],
  ALERTS: [],
  PROBLEMS: [{ name: 'MDD/GAD', detail: 'In remission', flag: 'normal' }, { name: 'Tobacco Use', detail: 'Ready to quit', flag: 'warn' }],
  MEDICATIONS: [
    { name: 'Sertraline', dose: '100 mg', route: 'PO', freq: 'daily', indication: 'MDD/GAD', notes: '' },
  ],
  IMMUNIZATIONS: sarahTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'PHQ-9: 2. GAD-7: 1. Mood is excellent. Now wants to quit smoking.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'tobacco', label: 'Tobacco Plan', placeholder: 'How does she want to quit?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w5a3_tob', topic: 'Tobacco plan', field: 'tobacco', keywords: ['quit', 'smoke', 'how', 'medicine', 'patch'], response: "I'd like to try whatever is most effective. I've heard there are pills or patches?" },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w5a3_a1', title: 'Tobacco Cessation', icon: 'CigaretteOff', color: '10b981', questions: [{ key: 'q1', q: 'What is the most effective pharmacotherapy for tobacco cessation?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w5a3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Prescribe Varenicline (Chantix) and refer for counseling', correct: true },
      { key: 'o2', label: 'Tell her to quit cold turkey', correct: false },
    ] },
  ],
})

/* ============================ JESSICA RAMIREZ (B) ============================ */
// MDD + GAD + Nonadherence. Distinguish nonadherence from treatment failure.

const jessicaTue = makeCase({
  id: 'w5-jessica_r-tue',
  PATIENT: { name: 'Jessica Ramirez', age: 42, sex: 'female', ethnicity: 'Hispanic', mrn: 'W5-30041' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "These medications aren't working.",
    snapshotSummary: 'Jessica has MDD/GAD and is prescribed Sertraline 100 mg. Her symptoms are moderately severe. On paper, it looks like a treatment failure.',
    diseaseStates: ['MDD', 'GAD'],
    learningObjectives: ['Identify medication nonadherence as a root cause', 'Distinguish nonadherence from true treatment-resistant depression'],
  },
  VITALS: { bp: '124/80', bpRepeat: '122/78', hr: '76', rr: '16', temp: '98.6°F', weight: '75 kg', height: "5'4\"", bmi: '28.3', flags: {} },
  LABS: [],
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
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Referred for treatment optimization due to lack of efficacy of Sertraline 100 mg over the last 3 months.' }, { label: 'Social', value: 'Divorced, single mother of two. Medical receptionist.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Medication Adherence', placeholder: 'How many days a week does she take the Sertraline?' },
    { key: 'barriers', label: 'Barriers to Care', placeholder: 'Why is she struggling with her medications?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w5b_adh', topic: 'Nonadherence', field: 'adherence', keywords: ['take', 'every day', 'miss', 'forget', 'how often'], response: "I try to take it, but honestly I probably miss it three or four days a week. It's just hard to remember when things are chaotic." },
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
  ENCOUNTER: {
    day: 'Wednesday', type: '1-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I've been taking it every day now. It's helping, but slowly.",
    snapshotSummary: 'Jessica has improved her adherence. Her symptoms are improving but she expects faster results.',
    diseaseStates: ['MDD', 'GAD'],
    learningObjectives: ['Manage patient expectations regarding antidepressant onset of action'],
  },
  VITALS: { ...jessicaTue.VITALS },
  LABS: [],
  ALERTS: [],
  PROBLEMS: [{ name: 'MDD/GAD', detail: 'Improving with adherence', flag: 'warn' }],
  MEDICATIONS: jessicaTue.MEDICATIONS,
  IMMUNIZATIONS: jessicaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Patient utilized pillbox and alarms. Adherence significantly improved. PHQ-9: 11. GAD-7: 9.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'expectations', label: 'Expectations', placeholder: 'What are her expectations for the medication?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w5b2_exp', topic: 'Expectations', field: 'expectations', keywords: ['expect', 'fast', 'slow', 'work'], response: "I've been taking it perfectly for 3 weeks now, shouldn't I feel completely better by now? I feel like it's not working fast enough." },
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
  ENCOUNTER: {
    day: 'Thursday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I feel so much better. I'm finally able to manage things.",
    snapshotSummary: 'Jessica is adherent and has achieved remission.',
    diseaseStates: ['MDD', 'GAD'],
    learningObjectives: ['Recognize successful treatment and reinforce maintenance therapy'],
  },
  VITALS: { ...jessicaTue.VITALS },
  LABS: [],
  ALERTS: [],
  PROBLEMS: [{ name: 'MDD/GAD', detail: 'In remission', flag: 'normal' }],
  MEDICATIONS: jessicaTue.MEDICATIONS,
  IMMUNIZATIONS: jessicaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'PHQ-9: 3. GAD-7: 2. Full remission achieved.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'maintenance', label: 'Maintenance Education', placeholder: 'What is her plan for the medication?' },
  ],
  INTERVIEW_KNOWLEDGE: [
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
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "Nothing works. I'm running out of options.",
    snapshotSummary: 'David has severe MDD and GAD. He has failed Escitalopram and Sertraline, and is currently failing Venlafaxine despite adequate dose and duration. He has true Treatment-Resistant Depression.',
    diseaseStates: ['TRD', 'GAD'],
    learningObjectives: ['Confirm true Treatment-Resistant Depression (TRD)', 'Assess suicide risk in severe depression', 'Recognize indications for advanced therapies'],
  },
  VITALS: { bp: '135/85', bpRepeat: '133/83', hr: '70', rr: '16', temp: '98.6°F', weight: '88 kg', height: "5'11\"", bmi: '27.1', flags: {} },
  LABS: [],
  ALERTS: [{ level: 'high', text: 'Severe Depression (PHQ-9 21) despite multiple adequate trials. High risk patient.' }],
  PROBLEMS: [
    { name: 'Treatment-Resistant Depression', detail: 'PHQ-9 21', flag: 'high' },
    { name: 'Severe GAD', detail: 'GAD-7 18', flag: 'high' },
  ],
  MEDICATIONS: [
    { name: 'Venlafaxine XR', dose: '150 mg', route: 'PO', freq: 'daily', indication: 'MDD/GAD', notes: 'Taking for 12 weeks' },
    { name: 'Hydroxyzine', dose: '25 mg', route: 'PO', freq: 'q8h PRN', indication: 'Anxiety', notes: '' },
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Patient reports severe emotional exhaustion, social withdrawal, and anhedonia. Prior failed trials: Escitalopram 20mg (16wks), Sertraline 150mg (6mos). Adherence confirmed.' },
  ],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'suicide', label: 'Suicide Risk Assessment', placeholder: 'Assess for suicidal ideation' },
  ],
  INTERVIEW_KNOWLEDGE: [
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
  ENCOUNTER: {
    day: 'Wednesday', type: '1-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "The nasal spray is intense, but the fog is starting to lift.",
    snapshotSummary: 'David was referred and started on Esketamine nasal spray at a specialized center while continuing Venlafaxine. He is experiencing dissociation but improving mood.',
    diseaseStates: ['TRD'],
    learningObjectives: ['Manage side effects of advanced therapies (Esketamine dissociation)', 'Coordinate care with specialty centers'],
  },
  VITALS: { bp: '145/90', bpRepeat: '142/88', hr: '76', rr: '16', temp: '98.6°F', weight: '88 kg', height: "5'11\"", bmi: '27.1', flags: { bp: 'warn' } },
  LABS: [],
  ALERTS: [],
  PROBLEMS: [{ name: 'TRD', detail: 'Improving on Esketamine', flag: 'warn' }],
  MEDICATIONS: [
    { name: 'Esketamine Nasal Spray', dose: '84 mg', route: 'Intranasal', freq: 'Twice weekly', indication: 'TRD', notes: 'Administered at specialty clinic' },
    ...davidTue.MEDICATIONS,
  ],
  IMMUNIZATIONS: davidTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'PHQ-9 decreased to 12. Reports feeling somewhat better. Notes transient dissociation and dizziness during treatments.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'sideeffects', label: 'Esketamine Side Effects', placeholder: 'Ask about the dissociation and BP' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w5c2_se', topic: 'Side effects', field: 'sideeffects', keywords: ['dissociation', 'dizzy', 'intense', 'blood pressure'], response: "During the treatment I feel very detached and dizzy, and my blood pressure spikes. The clinic watches me for 2 hours, and it goes away. It's worth it if it keeps working." },
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
  ENCOUNTER: {
    day: 'Thursday', type: '6-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I never thought I'd feel this good again.",
    snapshotSummary: 'David achieved and sustained remission on Esketamine maintenance therapy + Venlafaxine.',
    diseaseStates: ['TRD', 'GAD'],
    learningObjectives: ['Recognize the success of advanced therapy in TRD per ESCAPE-TRD data'],
  },
  VITALS: { bp: '132/82', bpRepeat: '130/80', hr: '72', rr: '16', temp: '98.6°F', weight: '88 kg', height: "5'11\"", bmi: '27.1', flags: {} },
  LABS: [],
  ALERTS: [],
  PROBLEMS: [{ name: 'TRD', detail: 'In remission', flag: 'normal' }],
  MEDICATIONS: [
    { name: 'Esketamine Nasal Spray', dose: '84 mg', route: 'Intranasal', freq: 'Every 2 weeks', indication: 'TRD Maintenance', notes: 'Administered at specialty clinic' },
    ...davidTue.MEDICATIONS,
  ],
  IMMUNIZATIONS: davidTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'PHQ-9: 3. GAD-7: 4. Sustained remission.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'update', label: 'Clinical Update', placeholder: 'How is he doing?' },
  ],
  INTERVIEW_KNOWLEDGE: [
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
