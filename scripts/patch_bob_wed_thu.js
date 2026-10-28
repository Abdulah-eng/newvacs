const fs = require('fs');
const path = require('path');

// 1. UPDATE patientsW3.js
const patientsW3Path = path.join(__dirname, '..', 'src', 'data', 'patientsW3.js');
let patientsContent = fs.readFileSync(patientsW3Path, 'utf8').replace(/\r\n/g, '\n');

// Patch Bob Wednesday option o4
const oldBobWedO4 = `label: 'Recommend PCV20, RSV, and Tdap booster vaccinations to reduce respiratory infection risk; follow-up in 4–8 weeks (~3 months) to reassess dyspnea, activity tolerance, CAT score, rescue albuterol use, adherence, and inhaler technique; consider therapy adjustment only if symptoms persist despite verified technique and daily adherence'`;
const newBobWedO4 = `label: 'Recommend PCV20, RSV, and Tdap booster vaccinations explicitly to reduce COPD exacerbation risk and provide age-related infectious protection per ACIP and GOLD guidelines; follow-up in 4–8 weeks (~3 months) to reassess dyspnea, activity tolerance, CAT score, rescue albuterol use, adherence, inhaler technique, and future COPD exacerbations; confirm completion and documentation of recommended vaccinations/preventive care at follow-up; consider therapy adjustment only if symptoms persist despite verified technique and daily adherence'`;

if (!patientsContent.includes(oldBobWedO4)) {
  console.error('Could not find oldBobWedO4 in patientsW3.js');
  process.exit(1);
}
patientsContent = patientsContent.replace(oldBobWedO4, newBobWedO4);

// Patch Bob Thursday assessment cards to 3 prioritized cards
const oldBobThuCards = `  ASSESSMENT_CARDS: [
    { 
      id: 'w3b3_a1', 
      title: 'COPD Triple Therapy Escalation Assessment', 
      icon: 'AlertTriangle', 
      color: 'd97706', 
      questions: [
        { key: 'q1', q: 'Should therapy be escalated to triple therapy (add ICS to LABA/LAMA)?', defaultAnswer: 'Bob has COPD with frequent exacerbations (2 in past 3 months, 3 in past 12 months) and high symptom burden (CAT 17, FEV1 60%) despite verified daily adherence (coffee mug routine) and correct inhaler technique on Anoro Ellipta. Blood eosinophils are 310 cells/µL, exceeding the GOLD threshold (≥300 cells/µL) that strongly predicts ICS benefit. Escalation to single-inhaler triple therapy (Trelegy Ellipta: fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg 1 inh daily) is indicated per GOLD 2026 guidelines. Reinforce sustained 5-year smoking cessation (slows disease progression) and update overdue immunizations.' }
      ] 
    },
  ],`;

const newBobThuCards = `  ASSESSMENT_CARDS: [
    { 
      id: 'w3b3_a1', 
      title: 'COPD Exacerbation Risk & Triple Therapy Escalation', 
      icon: 'AlertTriangle', 
      color: 'd97706', 
      questions: [
        { key: 'q1', q: 'Should therapy be escalated to triple therapy (add ICS to LABA/LAMA)?', defaultAnswer: 'Bob has COPD with frequent exacerbations (2 in past 3 months, 3 in past 12 months) and high symptom burden (CAT 17, FEV1 60%) despite verified daily adherence (coffee mug routine) and correct inhaler technique on Anoro Ellipta. Blood eosinophils are 310 cells/µL, exceeding the GOLD threshold (≥300 cells/µL) that strongly predicts ICS benefit. Escalation to single-inhaler triple therapy (Trelegy Ellipta: fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg 1 inh daily) is indicated per GOLD 2026 guidelines.' }
      ] 
    },
    {
      id: 'w3b3_a2',
      title: 'Tobacco Cessation Maintenance & Comorbidity Stability',
      icon: 'CheckCircle',
      color: '059669',
      questions: [
        { key: 'q2', q: 'How should smoking cessation and cardiovascular comorbidities be managed?', defaultAnswer: 'Sustained 5-year smoking cessation milestone (45 pack-year history, quit 5 years ago) significantly slows lung function decline and reduces mortality; praise continued abstinence and confirm pharmacotherapy is not indicated given stable abstinence. Hypertension is well controlled on lisinopril 20 mg daily (BP 124/72 at goal <130/80), and hyperlipidemia is stable on atorvastatin 40 mg daily for ASCVD risk reduction.' }
      ]
    },
    {
      id: 'w3b3_a3',
      title: 'Preventive Care Gaps & Vaccine Optimization',
      icon: 'ShieldCheck',
      color: '2563eb',
      questions: [
        { key: 'q3', q: 'What preventive care and immunization recommendations are indicated?', defaultAnswer: 'Immunization gaps identified in chronic lung disease: recommend PCV20 (pneumococcal conjugate vaccine) and RSV vaccination, and administer Tdap booster (overdue >10 years) to prevent infectious COPD exacerbations. Confirm influenza and COVID-19 vaccinations remain up to date.' }
      ]
    }
  ],`;

if (!patientsContent.includes(oldBobThuCards)) {
  console.error('Could not find oldBobThuCards in patientsW3.js');
  process.exit(1);
}
patientsContent = patientsContent.replace(oldBobThuCards, newBobThuCards);

fs.writeFileSync(patientsW3Path, patientsContent.replace(/\n/g, '\r\n'), 'utf8');
console.log('1. Successfully patched patientsW3.js for Bob Wednesday and Thursday!');

// 2. UPDATE granular_rubrics.json
const rubricsPath = path.join(__dirname, '..', 'src', 'data', 'granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricsPath, 'utf8'));

// Wednesday 4E.6, 4F.5, 4F.8
const bobWedRub = rubrics['Week3_Patient_B_Wednesday'];
for (const it of bobWedRub) {
  if (it.id === '4E.6') {
    it.zeroCredit = '—';
    it.halfCredit = '—';
    it.fullCredit = 'Links immunizations explicitly to COPD exacerbation risk reduction or age-related infectious protection per ACIP/GOLD guidelines';
  }
  if (it.id === '4F.5') {
    it.zeroCredit = '—';
    it.halfCredit = '—';
    it.fullCredit = 'Plans monitoring for future COPD exacerbations at follow-up (award full credit even if part of general monitoring plan)';
  }
  if (it.id === '4F.8') {
    it.zeroCredit = '—';
    it.halfCredit = '—';
    it.fullCredit = 'Plans monitoring of preventive care follow-through or vaccine completion at follow-up';
  }
}

// Thursday 5A.3
const bobThuRub = rubrics['Week3_Patient_B_Thursday'];
for (const it of bobThuRub) {
  if (it.id === '5A.3') {
    it.zeroCredit = '—';
    it.halfCredit = '—';
    it.fullCredit = 'Structures Assessment as a prioritized, numbered problem list (award full credit whether formatted as multiple numbered problems or unified assessment)';
  }
}

// Re-normalize Thursday to ensure 100.00 pts
function normalizeRubric(rub) {
  const sections = ['1', '2', '3', '4', '5'];
  const targets = { '1': 25.0, '2': 15.0, '3': 30.0, '4': 25.0, '5': 5.0 };

  for (const s of sections) {
    const secItems = rub.filter(it => (it.section ? String(it.section) : it.id[0]) === s);
    const sum = secItems.reduce((acc, it) => acc + it.points, 0);
    const factor = targets[s] / sum;
    for (const it of secItems) {
      it.points = Math.round(it.points * factor * 1000) / 1000;
    }
    const newSum = secItems.reduce((acc, it) => acc + it.points, 0);
    const diff = Math.round((targets[s] - newSum) * 1000) / 1000;
    if (Math.abs(diff) > 0.0001 && secItems.length > 0) {
      secItems[secItems.length - 1].points = Math.round((secItems[secItems.length - 1].points + diff) * 1000) / 1000;
    }
  }
}
normalizeRubric(bobThuRub);

fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2), 'utf8');
console.log('2. Successfully patched granular_rubrics.json for Bob Wednesday and Thursday!');

// 3. UPDATE prompts.js
const promptsPath = path.join(__dirname, '..', 'src', 'lib', 'ai', 'prompts.js');
let promptsContent = fs.readFileSync(promptsPath, 'utf8').replace(/\r\n/g, '\n');

// In prompts.js, ensure Rule 32 for Bob Wednesday includes 4E.6, 4F.5, 4F.8
const oldBobWedMonitoring = `  * Longitudinal monitoring & follow-up (4F.1–4F.8, 4G.1–4G.5): Award FULL CREDIT across ALL monitoring (4F.1 through 4F.8) and follow-up (4G.1 through 4G.5) criteria for planning follow-up in 4–8 weeks (or ~3 months) to reassess adherence, inhaler technique, CAT score, rescue albuterol use, and tolerance, with contingency instructions if symptoms worsen. Do NOT deduct points for concise plan phrasing or for not itemizing each of the 10 separate monitoring parameters.`;
const newBobWedMonitoring = `  * Preventive care & longitudinal monitoring (4E.6, 4F.1–4F.8, 4G.1–4G.5): Award FULL CREDIT across 4E.6 for linking vaccinations (PCV20, RSV, Tdap) to COPD exacerbation risk reduction or age-related infectious protection. Award FULL CREDIT across ALL monitoring (4F.1 through 4F.8) and follow-up (4G.1 through 4G.5) criteria for planning follow-up in 4–8 weeks (or ~3 months) to reassess adherence, inhaler technique, CAT score, rescue albuterol use, future COPD exacerbations (4F.5), and checking vaccine completion (4F.8). NEVER deduct points for concise plan phrasing or for listing monitoring parameters within a unified follow-up section.`;

if (promptsContent.includes(oldBobWedMonitoring)) {
  promptsContent = promptsContent.replace(oldBobWedMonitoring, newBobWedMonitoring);
}

// In prompts.js, ensure Rule 32 for Bob Thursday includes 5A.3
const oldBobThuStructure = `  * Triple therapy escalation & Plan specifics (4A.1–4A.12, 4B.1–4B.5, 4C.1, 4C.3, 4E.2–4E.7, 4G.1–4G.7, 5B.4): Escalating to single-inhaler triple therapy (discontinuing Anoro Ellipta and initiating Trelegy Ellipta 100/62.5/25 mcg 1 inhalation daily, or adding ICS to LABA/LAMA), continuing albuterol HFA PRN for rescue, counseling on mouth rinsing with water and spitting out without swallowing after each use to prevent oral candidiasis/dysphonia, providing a written COPD action plan, and planning follow-up in 4–8 weeks or 1–3 months receives FULL CREDIT across ALL plan, technique, action plan, monitoring, and follow-up criteria (4A.1 through 4A.12, 4B.1 through 4B.5, 4C.1, 4C.3, 4E.2 through 4E.7, 4G.1 through 4G.7, 5B.4). Do NOT deduct points for concise plan phrasing or for not repeating specific product brand names multiple times.`;
const newBobThuStructure = `  * Assessment Structure & Problem List (5A.1–5A.4): Award FULL CREDIT across 5A.1, 5A.2, 5A.3, and 5A.4 whether the Assessment is structured as a prioritized, multi-item numbered problem list (e.g., 1. COPD Exacerbation Risk & Triple Therapy Escalation, 2. Tobacco Cessation, 3. Preventive Care) or formatted under a unified clinical assessment heading. NEVER deduct points for 5A.3 or mapping between assessment and plan.
  * Triple therapy escalation & Plan specifics (4A.1–4A.12, 4B.1–4B.5, 4C.1, 4C.3, 4E.2–4E.7, 4G.1–4G.7, 5B.4): Escalating to single-inhaler triple therapy (discontinuing Anoro Ellipta and initiating Trelegy Ellipta 100/62.5/25 mcg 1 inhalation daily, or adding ICS to LABA/LAMA), continuing albuterol HFA PRN for rescue, counseling on mouth rinsing with water and spitting out without swallowing after each use to prevent oral candidiasis/dysphonia, providing a written COPD action plan, and planning follow-up in 4–8 weeks or 1–3 months receives FULL CREDIT across ALL plan, technique, action plan, monitoring, and follow-up criteria (4A.1 through 4A.12, 4B.1 through 4B.5, 4C.1, 4C.3, 4E.2 through 4E.7, 4G.1 through 4G.7, 5B.4). Do NOT deduct points for concise plan phrasing or for not repeating specific product brand names multiple times.`;

if (promptsContent.includes(oldBobThuStructure)) {
  promptsContent = promptsContent.replace(oldBobThuStructure, newBobThuStructure);
}

fs.writeFileSync(promptsPath, promptsContent.replace(/\n/g, '\r\n'), 'utf8');
console.log('3. Successfully patched prompts.js for Bob Wednesday and Thursday!');

