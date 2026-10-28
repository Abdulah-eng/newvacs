const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/patientsW3.js');
let code = fs.readFileSync(filePath, 'utf8');

const isCRLF = code.includes('\r\n');
const normalize = s => s.replace(/\r\n/g, '\n');
const denormalize = s => isCRLF ? s.replace(/\n/g, '\r\n') : s;

let normCode = normalize(code);

// ==========================================
// 1. BOB TUESDAY
// ==========================================
const oldBobTueAssessPlan = `  ASSESSMENT_CARDS: [
    { id: 'w3b_a1', title: 'COPD Maintenance', icon: 'Lungs', color: '13314f', questions: [{ key: 'q1', q: 'What is the appropriate initial therapy for this highly symptomatic patient per GOLD?' }, { key: 'q2', q: 'How does cost affect the plan?' }] },
    { id: 'w3b_a2', title: 'Hypertension', icon: 'HeartPulse', color: 'dc2626', questions: [{ key: 'q3', q: 'Is his blood pressure currently at goal?' }] },
    { id: 'w3b_a3', title: 'Hyperlipidemia', icon: 'Activity', color: 'f59e0b', questions: [{ key: 'q4', q: 'Is he on appropriate statin therapy?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b_p1', title: 'Therapy Plan', options: [
      { key: 'o1', label: 'Find an affordable LABA/LAMA combination or single agent and teach proper inhaler technique', correct: true },
      { key: 'o2', label: 'Prescribe triple therapy (LABA/LAMA/ICS)', correct: false },
      { key: 'o3', label: 'Prescribe daily oral prednisone', correct: false },
    ] },
    { id: 'w3b_p2', title: 'Hypertension & Hyperlipidemia', options: [
      { key: 'o4', label: 'Continue current Lisinopril and Atorvastatin', correct: true },
      { key: 'o5', label: 'Increase dose of Atorvastatin', correct: false },
    ] },
  ],`;

const newBobTueAssessPlan = `  ASSESSMENT_CARDS: [
    { 
      id: 'w3b_a1', 
      title: 'COPD Maintenance & Cost Navigation', 
      icon: 'Lungs', 
      color: '13314f', 
      questions: [
        { key: 'q1', q: 'What is the appropriate initial therapy for this highly symptomatic patient per GOLD?', defaultAnswer: 'Bob has symptomatic moderate COPD (GOLD Grade 2, Group B: FEV1 62% pred, FEV1/FVC 0.58, CAT 18, 1 moderate exacerbation without hospitalization) secondary to a 45 pack-year smoking history (sustained 5-year cessation; congratulate patient; no cessation pharmacotherapy indicated). The clinical priority is addressing non-initiation due to a $300 cost barrier rather than treatment failure. Initial maintenance therapy with a dual bronchodilator (LABA/LAMA) is indicated per GOLD 2026 guidelines.' },
        { key: 'q2', q: 'How does cost affect the plan?', defaultAnswer: 'Evaluate formulary coverage and copay assistance programs to prescribe an affordable LABA/LAMA combination (target copay ≤$20) and provide inhaler technique instruction.' }
      ] 
    },
    { id: 'w3b_a2', title: 'Hypertension', icon: 'HeartPulse', color: 'dc2626', questions: [{ key: 'q3', q: 'Is his blood pressure currently at goal?', defaultAnswer: 'BP is 132/78 mmHg (repeat 130/76), well-controlled on lisinopril 20 mg daily with goal <130/80 mmHg.' }] },
    { id: 'w3b_a3', title: 'Hyperlipidemia', icon: 'Activity', color: 'f59e0b', questions: [{ key: 'q4', q: 'Is he on appropriate statin therapy?', defaultAnswer: 'Atorvastatin 20 mg daily is appropriate for primary ASCVD prevention; lipid profile stable.' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b_p1', title: 'COPD Pharmacotherapy & Technique Plan', options: [
      { key: 'o1', label: 'Initiate affordable LABA/LAMA combination (e.g., umeclidinium/vilanterol Anoro Ellipta 62.5/25 mcg 1 inh daily or formulary alternative with copay assistance) and demonstrate proper inhaler technique; continue albuterol HFA 2 puffs q4-6h PRN for rescue', correct: true },
      { key: 'o2', label: 'Prescribe triple therapy (LABA/LAMA/ICS)', correct: false },
      { key: 'o3', label: 'Prescribe daily oral prednisone', correct: false },
    ] },
    { id: 'w3b_p2', title: 'Comorbidity Management & Tobacco Cessation', options: [
      { key: 'o4', label: 'Continue current Lisinopril 20 mg PO daily (BP goal <130/80 mmHg) and Atorvastatin 20 mg PO daily; congratulate patient on sustained 5-year smoking cessation and reinforce lifelong abstinence to slow lung decline (no cessation pharmacotherapy needed)', correct: true },
      { key: 'o5', label: 'Increase dose of Atorvastatin', correct: false },
    ] },
    { id: 'w3b_p3', title: 'Preventive Care, Monitoring & Follow-Up', options: [
      { key: 'o6', label: 'Recommend PCV20 and RSV vaccinations (due/not documented per GOLD); schedule follow-up in 4–8 weeks to reassess dyspnea, CAT score (goal <10), inhaler adherence, affordability/fill confirmation, and clinical response before considering changes; monitor periodic spirometry per GOLD schedule', correct: true },
    ] },
  ],`;

if (!normCode.includes(oldBobTueAssessPlan)) {
  console.error("Could not find oldBobTueAssessPlan");
} else {
  normCode = normCode.replace(oldBobTueAssessPlan, newBobTueAssessPlan);
  console.log("Replaced Bob Tue Assess/Plan");
}

// ==========================================
// 2. BOB WEDNESDAY
// ==========================================
const oldBobWedAssessPlan = `  ASSESSMENT_CARDS: [
    { id: 'w3b2_a1', title: 'Technique Assessment', icon: 'AlertTriangle', color: 'd97706', questions: [{ key: 'q1', q: 'What is wrong with his inhaler technique?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b2_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Correct technique: breathe IN deeply and steadily, do not blow into the device', correct: true },
      { key: 'o2', label: 'Switch to a different inhaler immediately', correct: false },
    ] },
  ],`;

const newBobWedAssessPlan = `  ASSESSMENT_CARDS: [
    { 
      id: 'w3b2_a1', 
      title: 'COPD Control, Technique & Adherence Assessment', 
      icon: 'AlertTriangle', 
      color: 'd97706', 
      questions: [
        { key: 'q1', q: 'How should his persistent symptoms be evaluated within the GOLD framework, and what is the primary clinical problem?', defaultAnswer: 'Bob has COPD (GOLD Grade 2, Group B: FEV1 63%, CAT 16, 0 exacerbations). Suboptimal symptom response is explained by implementation barriers: inhaler technique error (blowing into mouthpiece rather than inhaling deeply) and subtherapeutic adherence (taking Anoro 3–4 days/week due to forgetfulness). These implementation barriers preclude interpreting symptoms as true pharmacologic treatment failure; zero exacerbations argue against escalation to triple therapy. Defer therapy escalation per GOLD 2026; optimize technique and daily adherence first before reassessing drug efficacy.' }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b2_p1', title: 'COPD Maintenance & Inhaler Technique Plan', options: [
      { key: 'o1', label: 'Continue Anoro Ellipta (umeclidinium/vilanterol 62.5/25 mcg 1 inh daily) without escalation per GOLD Group B guidelines; correct inhaler technique with teach-back: breathe IN deeply and steadily, do not blow into the device; review daily maintenance vs PRN rescue albuterol purpose', correct: true },
      { key: 'o2', label: 'Switch to a different inhaler or escalate to triple therapy immediately', correct: false },
    ] },
    { id: 'w3b2_p2', title: 'Adherence Optimization & Education Plan', options: [
      { key: 'o3', label: 'Establish behavioral adherence routine: pair daily morning inhaler with morning coffee maker, phone alarms, and visual cues; educate on realistic treatment timeline (gradual benefit over days to weeks); reinforce continued smoking abstinence', correct: true },
    ] },
    { id: 'w3b2_p3', title: 'Preventive Care, Monitoring & Follow-Up', options: [
      { key: 'o4', label: 'Recommend PCV20, RSV, and Tdap booster vaccinations to reduce respiratory infection risk; follow-up in 4–8 weeks (~3 months) to reassess dyspnea, activity tolerance, CAT score, rescue albuterol use, adherence, and inhaler technique; consider therapy adjustment only if symptoms persist despite verified technique and daily adherence', correct: true },
    ] },
  ],`;

if (!normCode.includes(oldBobWedAssessPlan)) {
  console.error("Could not find oldBobWedAssessPlan");
} else {
  normCode = normCode.replace(oldBobWedAssessPlan, newBobWedAssessPlan);
  console.log("Replaced Bob Wed Assess/Plan");
}

// ==========================================
// 3. BOB THURSDAY
// ==========================================
const oldBobThuAssessPlan = `  ASSESSMENT_CARDS: [
    { id: 'w3b3_a1', title: 'Triple Therapy Escalation', icon: 'AlertTriangle', color: 'd97706', questions: [{ key: 'q1', q: 'Should therapy be escalated to triple therapy (add ICS to LABA/LAMA)?' }] },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b3_p1', title: 'Plan', options: [
      { key: 'o1', label: 'Escalate to triple therapy (add ICS) due to recurrent exacerbations and elevated eosinophils', correct: true },
      { key: 'o2', label: 'Escalate to LABA/LAMA', correct: false },
    ] },
  ],`;

const newBobThuAssessPlan = `  ASSESSMENT_CARDS: [
    { 
      id: 'w3b3_a1', 
      title: 'COPD Triple Therapy Escalation Assessment', 
      icon: 'AlertTriangle', 
      color: 'd97706', 
      questions: [
        { key: 'q1', q: 'Should therapy be escalated to triple therapy (add ICS to LABA/LAMA)?', defaultAnswer: 'Bob has COPD with frequent exacerbations (2 in past 3 months, 3 in past 12 months) and high symptom burden (CAT 17, FEV1 60%) despite verified daily adherence (coffee mug routine) and correct inhaler technique on Anoro Ellipta. Blood eosinophils are 310 cells/µL, exceeding the GOLD threshold (≥300 cells/µL) that strongly predicts ICS benefit. Escalation to single-inhaler triple therapy (Trelegy Ellipta: fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg 1 inh daily) is indicated per GOLD 2026 guidelines. Reinforce sustained 5-year smoking cessation (slows disease progression) and update overdue immunizations.' }
      ] 
    },
  ],
  PLAN_SECTIONS: [
    { id: 'w3b3_p1', title: 'Triple Inhaled Pharmacotherapy Plan', options: [
      { key: 'o1', label: 'Escalate to single-inhaler triple therapy: Trelegy Ellipta (fluticasone furoate/umeclidinium/vilanterol) 100/62.5/25 mcg 1 inhalation daily; continue albuterol HFA 2 puffs q4-6h PRN for rescue (target reduced rescue reliance); instruct patient to rinse mouth with water and spit after each inhalation to prevent oral candidiasis; continue established coffee-mug daily adherence routine', correct: true },
      { key: 'o2', label: 'Continue Anoro Ellipta dual therapy unchanged', correct: false },
    ] },
    { id: 'w3b3_p2', title: 'Action Plan, Tobacco Cessation & Preventive Care', options: [
      { key: 'o3', label: 'Review written COPD action plan and early recognition of worsening symptoms/infection avoidance; congratulate on 5-year sustained smoking cessation and encourage lifelong abstinence to slow decline; recommend PCV20, RSV, and Tdap booster vaccinations to reduce respiratory infection risk', correct: true },
    ] },
    { id: 'w3b3_p3', title: 'Monitoring & Longitudinal Follow-Up', options: [
      { key: 'o4', label: 'Schedule follow-up in 4–8 weeks (~3 months) to monitor dyspnea, activity tolerance, rescue albuterol frequency, medication adherence, inhaler technique, and screen for ICS-related adverse effects (oral thrush, dysphonia, pneumonia); continue longitudinal COPD management', correct: true },
    ] },
  ],`;

if (!normCode.includes(oldBobThuAssessPlan)) {
  console.error("Could not find oldBobThuAssessPlan");
} else {
  normCode = normCode.replace(oldBobThuAssessPlan, newBobThuAssessPlan);
  console.log("Replaced Bob Thu Assess/Plan");
}

fs.writeFileSync(filePath, denormalize(normCode), 'utf8');
console.log('Saved patientsW3.js successfully!');
