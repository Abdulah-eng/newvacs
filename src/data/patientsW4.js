import { makeCase } from './caseFactory.js'

// WEEK 4 — Heart Failure + AFib + Anticoagulation
// Patients: Michael Thompson (A), Angela Brooks (B), Robert Jenkins (C)
// Case ids are namespaced 'w4-<patient>-<day>'

/* ============================ MICHAEL THOMPSON (A) ============================ */
// Newly diagnosed HFrEF. Needs GDMT initiation.

const michaelTue = makeCase({
  id: 'w4-michael_t4-tue',
  PATIENT: { name: 'Michael Thompson', age: 58, sex: 'male', ethnicity: 'White', mrn: 'W4-51004' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Foundational', difficultyTone: 'teal',
    chiefConcern: "The cardiologist said my heart muscle is weak and I need to start new medications.",
    snapshotSummary: 'Newly diagnosed HFrEF (LVEF 35%). Currently only on lisinopril and HCTZ for hypertension. Needs initiation of GDMT.',
    diseaseStates: ['HFrEF', 'Hypertension', 'Hyperlipidemia'],
    learningObjectives: ['Identify HFrEF and ACC/AHA stage', 'Initiate the 4 pillars of GDMT'],
  },
  VITALS: { bp: '138/86', bpRepeat: '136/84', hr: '82', rr: '16', temp: '98.6°F', weight: '103 kg', height: "5'10\"", bmi: '32.6', flags: {} },
  LABS: [
    { label: 'NT-proBNP', value: '1850', unit: 'pg/mL', flag: 'high' },
    { label: 'K', value: '4.2', unit: 'mEq/L', flag: 'normal' },
    { label: 'SCr', value: '1.02', unit: 'mg/dL', flag: 'normal' },
    { label: 'eGFR', value: '79', unit: 'mL/min/1.73m²', flag: 'normal' },
  ],
  ALERTS: [
    { level: 'warn', text: 'HFrEF (LVEF 35%) not on optimal GDMT. Missing evidence-based beta blocker, MRA, and SGLT2i. Lisinopril can be optimized.' },
  ],
  PROBLEMS: [
    { name: 'Heart Failure with Reduced Ejection Fraction (HFrEF)', detail: 'LVEF 35%, NYHA Class II', flag: 'high' },
    { name: 'Hypertension', detail: 'Currently on Lisinopril and HCTZ', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Lisinopril', dose: '20 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [
    { label: 'HPI', value: 'Referred for GDMT optimization following new nonischemic cardiomyopathy diagnosis. NYHA Class II symptoms.' },
    { label: 'Echocardiogram', value: 'LVEF 35%, mild LV dilation.' },
  ],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'symptoms', label: 'Heart Failure Symptoms', placeholder: 'Any swelling or shortness of breath?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4a_sym', topic: 'Symptoms', field: 'symptoms', keywords: ['swelling', 'breathe', 'shortness', 'stairs', 'edema'], response: "My ankles get a little puffy by the end of the day, and I get winded if I walk up a flight of stairs quickly." },
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
  ENCOUNTER: {
    day: 'Wednesday', type: '1-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I'm taking all the new pills, but I feel a bit dizzy when I stand up.",
    snapshotSummary: 'Michael was started on the 4 pillars. He is experiencing orthostatic hypotension.',
    diseaseStates: ['HFrEF'],
    learningObjectives: ['Manage GDMT side effects (orthostasis)', 'Adjust non-GDMT meds to facilitate GDMT tolerance'],
  },
  VITALS: { bp: '106/68', bpRepeat: '104/66', hr: '62', rr: '16', temp: '98.6°F', weight: '101 kg', height: "5'10\"", bmi: '31.9', flags: { bp: 'warn' } },
  LABS: [{ label: 'K', value: '4.5', unit: 'mEq/L', flag: 'normal' }, { label: 'SCr', value: '1.08', unit: 'mg/dL', flag: 'normal' }],
  ALERTS: [],
  PROBLEMS: [{ name: 'HFrEF', detail: 'On GDMT, experiencing orthostasis', flag: 'warn' }],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan (Entresto)', dose: '24/26 mg', route: 'PO', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Carvedilol', dose: '3.125 mg', route: 'PO', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Spironolactone', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Dapagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Hydrochlorothiazide', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HTN', notes: '' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: michaelTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Reports dizziness upon standing since starting the new medications. Edema has resolved.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'dizziness', label: 'Dizziness Assessment', placeholder: 'When does he feel dizzy?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4a2_dizzy', topic: 'Orthostasis', field: 'dizziness', keywords: ['stand', 'dizzy', 'lightheaded', 'when'], response: "It's mostly when I get out of bed in the morning or stand up quickly from my desk. It passes after a few seconds." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4a2_a1', title: 'Orthostasis Management', icon: 'AlertTriangle', color: 'd97706', questions: [{ key: 'q1', q: 'How can we improve his blood pressure to allow continued GDMT titration?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4a2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Discontinue HCTZ to reduce volume depletion and lower BP burden, allowing GDMT to continue', correct: true },
      { key: 'o2', label: 'Stop Carvedilol and Sacubitril/Valsartan', correct: false },
    ] },
  ],
})

const michaelThu = makeCase({
  id: 'w4-michael_t4-thu',
  PATIENT: { ...michaelTue.PATIENT },
  ENCOUNTER: {
    day: 'Thursday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I feel great. Do I still need to increase the doses?",
    snapshotSummary: 'Michael is doing well but is on starting doses of GDMT. Needs up-titration.',
    diseaseStates: ['HFrEF'],
    learningObjectives: ['Recognize the need to titrate GDMT to target doses, not just starting doses'],
  },
  VITALS: { bp: '122/78', bpRepeat: '120/76', hr: '70', rr: '16', temp: '98.6°F', weight: '101 kg', height: "5'10\"", bmi: '31.9', flags: {} },
  LABS: [{ label: 'K', value: '4.6', unit: 'mEq/L', flag: 'normal' }, { label: 'SCr', value: '1.10', unit: 'mg/dL', flag: 'normal' }],
  ALERTS: [],
  PROBLEMS: [{ name: 'HFrEF', detail: 'Stable, requires GDMT titration', flag: 'warn' }],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan (Entresto)', dose: '24/26 mg', route: 'PO', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Carvedilol', dose: '3.125 mg', route: 'PO', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Spironolactone', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Dapagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Atorvastatin', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'HLD', notes: '' },
  ],
  IMMUNIZATIONS: michaelTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Dizziness resolved after stopping HCTZ. No HF symptoms. Feels great.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'titration', label: 'Medication Education', placeholder: 'Explain why doses need to increase' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4a3_titrate', topic: 'Titration', field: 'titration', keywords: ['why', 'increase', 'feel fine', 'dose'], response: "If I feel good, why do we need to mess with the doses? Can't we just leave it here?" },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4a3_a1', title: 'Target Doses', icon: 'ArrowUpCircle', color: '13314f', questions: [{ key: 'q1', q: 'Why is it important to increase the doses of Carvedilol and Entresto?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4a3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Educate that target doses provide maximum mortality benefit; titrate Carvedilol to 6.25 mg BID', correct: true },
      { key: 'o2', label: 'Leave doses as they are since he is asymptomatic', correct: false },
    ] },
  ],
})

/* ============================ ANGELA BROOKS (B) ============================ */
// HFrEF + Persistent AFib. Adherence and cost barriers, needs anticoagulation.

const angelaTue = makeCase({
  id: 'w4-angela_b-tue',
  PATIENT: { name: 'Angela Brooks', age: 64, sex: 'female', ethnicity: 'Black', mrn: 'W4-22091' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I have so many pills, and they cost too much.",
    snapshotSummary: 'Angela has HFrEF and Persistent AFib. She was prescribed Apixaban for stroke prevention but is not taking it due to cost.',
    diseaseStates: ['HFrEF', 'AFib'],
    learningObjectives: ['Calculate CHA2DS2-VASc score', 'Identify cost nonadherence as a barrier to stroke prevention'],
  },
  VITALS: { bp: '130/80', bpRepeat: '128/78', hr: '78', rr: '16', temp: '98.6°F', weight: '85 kg', height: "5'4\"", bmi: '32.1', flags: {} },
  LABS: [{ label: 'SCr', value: '1.1', unit: 'mg/dL', flag: 'normal' }],
  ALERTS: [{ level: 'high', text: 'Patient has AFib with elevated stroke risk (CHA2DS2-VASc = 4) but is not taking her prescribed anticoagulant.' }],
  PROBLEMS: [
    { name: 'Persistent AFib', detail: 'CHA2DS2-VASc 4. High stroke risk.', flag: 'high' },
    { name: 'HFrEF', detail: 'Stable on GDMT', flag: 'normal' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '49/51 mg', route: 'PO', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Metoprolol Succinate', dose: '50 mg', route: 'PO', freq: 'daily', indication: 'HFrEF/Rate control', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Apixaban', dose: '5 mg', route: 'PO', freq: 'BID', indication: 'AFib stroke prevention', notes: 'No recent fills' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Referred for medication adherence and cost review.' }],
  OBJECTIVE_EXTRA: [{ label: 'Pharmacy Claims', value: 'Apixaban last filled 4 months ago.', flag: 'missing' }],
  INTERVIEW_FIELDS: [
    { key: 'apixaban', label: 'Apixaban Adherence', placeholder: 'Why did she stop the Eliquis?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4b_apix', topic: 'Cost Barrier', field: 'apixaban', keywords: ['apixaban', 'eliquis', 'cost', 'afford', 'stop', 'fill'], response: "That Eliquis is way too expensive. I'm on a fixed income, I can't pay $50 a month for it. So I just stopped taking it." },
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
  ENCOUNTER: {
    day: 'Wednesday', type: '1-Month Follow-up', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I got the Eliquis approved through the foundation, but I'm scared to take it.",
    snapshotSummary: 'Cost barrier resolved, but Angela is now expressing fear of bleeding from the anticoagulant.',
    diseaseStates: ['AFib'],
    learningObjectives: ['Address bleeding fears using shared decision-making', 'Calculate HAS-BLED'],
  },
  VITALS: { ...angelaTue.VITALS },
  LABS: angelaTue.LABS,
  ALERTS: [],
  PROBLEMS: [{ name: 'AFib', detail: 'Cost resolved, fear of bleeding', flag: 'warn' }],
  MEDICATIONS: angelaTue.MEDICATIONS,
  IMMUNIZATIONS: angelaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Patient obtained Apixaban via patient assistance program but admits to not starting it yet due to fear.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'fear', label: 'Bleeding Fear', placeholder: 'What exactly is she afraid of?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4b2_fear', topic: 'Fear of bleeding', field: 'fear', keywords: ['afraid', 'scared', 'bleed', 'why', 'worry'], response: "My neighbor was on blood thinners and bled into his brain. I don't want that to happen to me. I already take so many meds, is this one really worth the risk?" },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4b2_a1', title: 'Risk/Benefit Discussion', icon: 'Scale', color: '0891b2', questions: [{ key: 'q1', q: 'How do you balance her HAS-BLED score against her CHA2DS2-VASc score in counseling?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4b2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Acknowledge fear, explain that stroke risk from AFib without anticoagulation outweighs bleeding risk with Apixaban', correct: true },
      { key: 'o2', label: 'Agree to stop Apixaban since she is fearful', correct: false },
    ] },
  ],
})

const angelaThu = makeCase({
  id: 'w4-angela_b-thu',
  PATIENT: { ...angelaTue.PATIENT },
  ENCOUNTER: {
    day: 'Thursday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I've been taking the blood thinner, and I haven't had any bleeding.",
    snapshotSummary: 'Angela successfully started Apixaban and is tolerating it well. Her HFrEF remains stable.',
    diseaseStates: ['AFib', 'HFrEF'],
    learningObjectives: ['Provide positive reinforcement and confirm adherence'],
  },
  VITALS: { ...angelaTue.VITALS },
  LABS: angelaTue.LABS,
  ALERTS: [],
  PROBLEMS: [{ name: 'AFib', detail: 'Anticoagulated successfully', flag: 'normal' }],
  MEDICATIONS: angelaTue.MEDICATIONS,
  IMMUNIZATIONS: angelaTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Patient compliant with Apixaban. No bleeding events reported.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'adherence', label: 'Adherence Check', placeholder: 'Check on her daily routine' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4b3_adh', topic: 'Adherence', field: 'adherence', keywords: ['take', 'miss', 'every day', 'routine'], response: "I set a pillbox like you suggested. I take the Eliquis every morning and night. No problems at all." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4b3_a1', title: 'Maintenance', icon: 'CheckCircle', color: '10b981', questions: [{ key: 'q1', q: 'Is any change to therapy needed?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4b3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Continue current therapy, praise adherence', correct: true },
      { key: 'o2', label: 'Decrease Apixaban dose to 2.5 mg BID since she is stable', correct: false },
    ] },
  ],
})

/* ============================ ROBERT JENKINS (C) ============================ */
// Complex multi-morbidity (HFrEF + AFib + CKD + T2DM). Precise dosing and AZALEA trial application.

const robertTue = makeCase({
  id: 'w4-robert_j4-tue',
  PATIENT: { name: 'Robert Jenkins', age: 76, sex: 'male', ethnicity: 'White', mrn: 'W4-90088' },
  ENCOUNTER: {
    day: 'Tuesday', type: 'Initial Ambulatory Care Visit', difficulty: 'Core', difficultyTone: 'teal',
    chiefConcern: "I like to review my labs. My kidney numbers seem worse.",
    snapshotSummary: 'Robert has complex multi-morbidity. He is 76, weighs 58 kg, and has a SCr of 1.4 mg/dL. He is on Apixaban 5 mg BID, which is inappropriately dosed for his renal/age/weight profile.',
    diseaseStates: ['HFrEF', 'AFib', 'CKD', 'T2DM'],
    learningObjectives: ['Identify need for DOAC dose adjustment based on age, weight, and SCr'],
  },
  VITALS: { bp: '120/70', bpRepeat: '118/68', hr: '68', rr: '16', temp: '98.6°F', weight: '58 kg', height: "5'7\"", bmi: '20.0', flags: {} },
  LABS: [{ label: 'SCr', value: '1.4', unit: 'mg/dL', flag: 'high' }, { label: 'K', value: '4.8', unit: 'mEq/L', flag: 'normal' }],
  ALERTS: [{ level: 'high', text: 'Patient meets criteria for Apixaban dose reduction (age ≥80 [no, he is 76], weight ≤60 kg [yes, 58 kg], SCr ≥1.5 [no, 1.4]). Wait, let me check the criteria again. Ah, he only meets ONE criterion (weight). So standard dose is correct! Let me re-evaluate.' }, { level: 'warn', text: 'Polypharmacy and CKD necessitate careful monitoring.' }],
  PROBLEMS: [
    { name: 'AFib', detail: 'On Apixaban 5 mg BID', flag: 'normal' },
    { name: 'CKD', detail: 'SCr 1.4', flag: 'warn' },
  ],
  MEDICATIONS: [
    { name: 'Sacubitril/Valsartan', dose: '97/103 mg', route: 'PO', freq: 'BID', indication: 'HFrEF', notes: '' },
    { name: 'Metoprolol Succinate', dose: '100 mg', route: 'PO', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Spironolactone', dose: '25 mg', route: 'PO', freq: 'daily', indication: 'HFrEF', notes: '' },
    { name: 'Empagliflozin', dose: '10 mg', route: 'PO', freq: 'daily', indication: 'HFrEF/T2DM', notes: '' },
    { name: 'Apixaban', dose: '5 mg', route: 'PO', freq: 'BID', indication: 'AFib', notes: '' },
    { name: 'Rosuvastatin', dose: '40 mg', route: 'PO', freq: 'daily', indication: 'CAD', notes: '' },
  ],
  IMMUNIZATIONS: [{ name: 'Influenza', status: 'Up to date', flag: 'normal' }],
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Highly engaged patient. Reviews all labs. Excellent adherence.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'questions', label: 'Patient Questions', placeholder: 'What does he want to know?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4c_q', topic: 'Evidence question', field: 'questions', keywords: ['labs', 'kidney', 'creatinine', 'dose', 'apixaban'], response: "My creatinine is 1.4 and I weigh 58 kg. Shouldn't my Apixaban dose be lowered? I read online that older, lighter people need a lower dose." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4c_a1', title: 'Apixaban Dosing Criteria', icon: 'Scale', color: '13314f', questions: [{ key: 'q1', q: 'Does he meet TWO of the criteria for dose reduction (Age ≥80, Wt ≤60kg, SCr ≥1.5)?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4c_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Educate that he only meets ONE criterion (weight), so 5 mg BID is the correct and most protective dose', correct: true },
      { key: 'o2', label: 'Reduce Apixaban to 2.5 mg BID just to be safe', correct: false },
    ] },
  ],
})

const robertWed = makeCase({
  id: 'w4-robert_j4-wed',
  PATIENT: { ...robertTue.PATIENT },
  ENCOUNTER: {
    day: 'Wednesday', type: '3-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "I've had a few nosebleeds recently. I'm worried about this blood thinner.",
    snapshotSummary: 'Robert is experiencing minor epistaxis on Apixaban. He is questioning the risk-benefit tradeoff.',
    diseaseStates: ['AFib'],
    learningObjectives: ['Manage minor bleeding on DOACs', 'Apply AZALEA-TIMI 71 concepts regarding future Factor XI inhibitors'],
  },
  VITALS: { ...robertTue.VITALS },
  LABS: robertTue.LABS,
  ALERTS: [],
  PROBLEMS: [{ name: 'AFib', detail: 'Minor epistaxis on DOAC', flag: 'warn' }],
  MEDICATIONS: robertTue.MEDICATIONS,
  IMMUNIZATIONS: robertTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'Reports two episodes of nosebleeds in the past month, resolving with 5 minutes of pressure. No ER visits.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'nosebleeds', label: 'Bleeding details', placeholder: 'How severe are the bleeds?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4c2_bleed', topic: 'Epistaxis', field: 'nosebleeds', keywords: ['nose', 'bleed', 'epistaxis', 'severe', 'stop'], response: "They aren't huge gushers, they stop if I pinch my nose for a few minutes. But it makes me nervous. Is there a safer drug that won't make me bleed?" },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4c2_a1', title: 'Minor Bleeding Management', icon: 'Droplet', color: 'dc2626', questions: [{ key: 'q1', q: 'How should you manage this minor bleeding?' }, { key: 'q2', q: 'How does AZALEA-TIMI 71 address his desire for a "safer" drug?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4c2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Continue Apixaban, counsel on local epistaxis measures. Discuss that future therapies (Factor XI inhibitors, AZALEA trial) are being studied to decouple thrombosis from bleeding risk, but aren\'t available yet.', correct: true },
      { key: 'o2', label: 'Stop Apixaban immediately', correct: false },
    ] },
  ],
})

const robertThu = makeCase({
  id: 'w4-robert_j4-thu',
  PATIENT: { ...robertTue.PATIENT },
  ENCOUNTER: {
    day: 'Thursday', type: '6-Month Follow-up', difficulty: 'Advanced', difficultyTone: '7c3aed',
    chiefConcern: "The nosebleeds stopped, and my heart failure feels very stable.",
    snapshotSummary: 'Robert is stable on all GDMT and anticoagulation. Minor bleeding resolved.',
    diseaseStates: ['HFrEF', 'AFib', 'CKD'],
    learningObjectives: ['Recognize successful management of complex polypharmacy'],
  },
  VITALS: { ...robertTue.VITALS },
  LABS: [{ label: 'SCr', value: '1.4', unit: 'mg/dL', flag: 'normal' }, { label: 'K', value: '4.7', unit: 'mEq/L', flag: 'normal' }],
  ALERTS: [],
  PROBLEMS: [{ name: 'Multi-morbidity', detail: 'Stable', flag: 'normal' }],
  MEDICATIONS: robertTue.MEDICATIONS,
  IMMUNIZATIONS: robertTue.IMMUNIZATIONS,
  SUBJECTIVE_DOCUMENTED: [{ label: 'HPI', value: 'No further bleeding. No HF symptoms. Continues to review his labs and is satisfied.' }],
  OBJECTIVE_EXTRA: [],
  INTERVIEW_FIELDS: [
    { key: 'satisfaction', label: 'Patient Satisfaction', placeholder: 'How is he feeling overall?' },
  ],
  INTERVIEW_KNOWLEDGE: [
    { id: 'w4c3_sat', topic: 'Satisfaction', field: 'satisfaction', keywords: ['feel', 'labs', 'stable', 'happy'], response: "I feel great. Thank you for explaining the dosing rules to me. It makes sense, and I feel confident in the plan." },
  ],
  ASSESSMENT_CARDS: [
    { id: 'w4c3_a1', title: 'Maintenance', icon: 'CheckCircle', color: '10b981', questions: [{ key: 'q1', q: 'Are any changes needed?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w4c3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Continue current GDMT and anticoagulation regimens', correct: true },
    ] },
  ],
})

export const W4_CASES = [michaelTue, michaelWed, michaelThu, angelaTue, angelaWed, angelaThu, robertTue, robertWed, robertThu]
export const W4_RUBRICS = {}
