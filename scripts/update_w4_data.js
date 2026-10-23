const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/patientsW4.js');
let code = fs.readFileSync(filePath, 'utf8');

// 1. michaelWed
code = code.replace(
  "VITALS: { bp: '106/68', bpRepeat: '104/66', hr: '62', rr: '16', temp: '98.6°F', spo2: '97%', weight: '101 kg', height: \"5'10\\\"\", bmi: '31.9', vitalsTime: '09/24/2026 09:14', flags: { bp: 'warn' } }",
  "VITALS: { bp: '106/68', bpRepeat: '104/66', hr: '62', rr: '16', temp: '98.6°F', spo2: '97%', spo2Qualifier: 'on room air', weight: '101 kg', height: \"5'10\\\"\", bmi: '31.9', vitalsTime: '09/24/2026 09:14', flags: { bp: 'warn' } }"
);

code = code.replace(
  "Ankle edema resolved, weight down 2 kg (103 -> 101 kg), NT-proBNP improved (320 -> 165 pg/mL).",
  "Ankle edema resolved, weight down from baseline 102 to 101 kg, NT-proBNP 165 pg/mL (improved from baseline BNP 320 pg/mL)."
);

code = code.replace(
  "Weight: 101 kg (2 kg fluid reduction from baseline 103 kg; edema resolved). NT-proBNP: 165 pg/mL (significantly improved from baseline 320 pg/mL).",
  "Weight: 101 kg (fluid reduction from baseline 102 kg to 101 kg; edema resolved). Cardiac biomarkers: NT-proBNP 165 pg/mL (significantly improved clinical trend compared to baseline BNP 320 pg/mL; noting difference in assay from baseline BNP to follow-up NT-proBNP)."
);

// 2. michaelThu
code = code.replace(
  "NT-proBNP downward trend: baseline 320 pg/mL → previous 165 pg/mL → current 92 pg/mL.",
  "Natriuretic peptide downward trend: baseline BNP 320 pg/mL → previous NT-proBNP 165 pg/mL → current NT-proBNP 92 pg/mL (same-assay NT-proBNP 165 to 92 pg/mL, demonstrating marked biochemical improvement from baseline BNP 320 pg/mL)."
);

// 3. angelaTue
code = code.replace(
  "VITALS: { bp: '128/78', bpRepeat: '126/76', hr: '88', rr: '16', temp: '98.2°F', spo2: '98%', weight: '84 kg', height: \"5'5\\\"\", bmi: '30.8', vitalsTime: '09/09/2026 09:14', flags: { bmi: 'warn' } }",
  "VITALS: { bp: '128/78', bpRepeat: '126/76', hr: '88', rr: '16', temp: '98.2°F', spo2: '98%', spo2Qualifier: 'on room air', weight: '84 kg', height: \"5'5\\\"\", bmi: '30.8', vitalsTime: '09/09/2026 09:14', flags: { bmi: 'warn' } }"
);

// 4. angelaWed
code = code.replace(
  "VITALS: { bp: '126/76', bpRepeat: '124/74', hr: '84', rr: '16', temp: '98.1°F', spo2: '98%', weight: '84 kg', height: \"5'5\\\"\", bmi: '30.8', vitalsTime: '12/09/2026 09:14', flags: {} }",
  "VITALS: { bp: '126/76', bpRepeat: '124/74', hr: '84', rr: '16', temp: '98.1°F', spo2: '98%', spo2Qualifier: 'on room air', weight: '84 kg', height: \"5'5\\\"\", bmi: '30.8', vitalsTime: '12/09/2026 09:14', flags: {} }"
);

code = code.replace(
  "Your blood count (Hgb 13.0 g/dL) is stable, proving there is no internal bleeding.",
  "Your blood count (Hgb 13.0 g/dL) is reassuringly stable with no significant drop from baseline 13.2 g/dL, and you have had no warning signs of major bleeding."
);

code = code.replace(
  "'How does stable Hgb 13.0 g/dL rule out major bleeding?'",
  "'How does a stable Hgb 13.0 g/dL reassure against major bleeding without definitively ruling out occult bleeding?'"
);

code = code.replace(
  "ruling out major bleeding, normal platelet count 236k ruling out thrombocytopenia",
  "reassuring against acute or major bleeding, normal platelet count 236k ruling out thrombocytopenia"
);

// 5. angelaThu
code = code.replace(
  "VITALS: { bp: '124/74', bpRepeat: '122/72', hr: '80', rr: '16', temp: '98.0°F', spo2: '98%', weight: '84 kg', height: \"5'5\\\"\", bmi: '30.8', vitalsTime: '03/09/2027 09:14', flags: {} }",
  "VITALS: { bp: '124/74', bpRepeat: '122/72', hr: '80', rr: '16', temp: '98.0°F', spo2: '98%', spo2Qualifier: 'on room air', weight: '84 kg', height: \"5'5\\\"\", bmi: '30.8', vitalsTime: '03/09/2027 09:14', flags: {} }"
);

code = code.replace(
  "Wt 83 kg, BMI 30.5 kg/m². Laboratory Data: WBC 6.6 x10³/mm³, Hgb 13.1 g/dL, Plt 240 x10³/mm³. SCr 1.0 mg/dL, eGFR 72 mL/min/1.73m², AST 22 U/L, ALT 24 U/L, Na 138 mEq/L, K 4.4 mEq/L.",
  "Wt 84 kg, BMI 30.8 kg/m². Laboratory Data: WBC 6.6 x10³/mm³, Hgb 13.1 g/dL, Plt 241 x10³/mm³. SCr 1.0 mg/dL, eGFR 72 mL/min/1.73m², AST 24 U/L, ALT 21 U/L, Na 139 mEq/L, K 4.4 mEq/L."
);

code = code.replace(
  "Age 64, Wt 83 kg, SCr 1.0 mg/dL",
  "Age 64, Wt 84 kg, SCr 1.0 mg/dL"
);

// 6. robertTue
code = code.replace(
  'persistent nonvalvular AFib (CHA2DS2-VASc = 4)',
  'persistent nonvalvular AFib (CHA2DS2-VASc = 6; Congestive HF +1, HTN +1, Age 76 +2, Diabetes +1, Vascular Disease/CAD +1)'
);

code = code.replace(
  'bmi: "27.8 kg/m²", vitalsTime: "09/09/2026 09:14"',
  'bmi: "28.3 kg/m²", vitalsTime: "09/09/2026 09:14"'
);

code = code.replace(
  'BMI 27.8 kg/m². Home average BP:',
  'BMI 28.3 kg/m². Home average BP:'
);

code = code.replace(
  '2. Chronic Kidney Disease Stage 3b (CKD 3b) — Stable Longitudinal Trend',
  '2. Chronic Kidney Disease Stage 3b (CKD 3b) — Progressive Longitudinal Decline Over 12 Months'
);

code = code.replace(
  '4. Persistent Nonvalvular Atrial Fibrillation (AFib) — Stable Anticoagulation", detail: "CHA2DS2-VASc = 4.',
  '4. Persistent Nonvalvular Atrial Fibrillation (AFib) — Stable Anticoagulation", detail: "CHA2DS2-VASc = 6 (calculated from HF +1, HTN +1, Age 76 +2, Diabetes +1, CAD/Vascular +1).'
);

code = code.replace(
  'Persistent Nonvalvular Atrial Fibrillation (AFib, CHA2DS2-VASc = 4)',
  'Persistent Nonvalvular Atrial Fibrillation (AFib, CHA2DS2-VASc = 6 [prior EMR export showed 4])'
);

// 7. robertWed
code = code.replace(
  'VITALS: { bp: "114/68 mmHg", bpRepeat: "112/66 mmHg", hr: "70 bpm", rr: "16 breaths/min", temp: "98.0°F", spo2: "98%", spo2Qualifier: "on room air", weight: "82 kg", height: "5 ft 7 in", bmi: "27.8 kg/m²", vitalsTime: "12/09/2026 09:14", flags: {} }',
  'VITALS: { bp: "114/68 mmHg", bpRepeat: "112/66 mmHg", hr: "70 bpm", rr: "16 breaths/min", temp: "98.0°F", spo2: "98%", spo2Qualifier: "on room air", weight: "82 kg", height: "5 ft 7 in", bmi: "28.3 kg/m²", vitalsTime: "12/09/2026 09:14", flags: {} }'
);

code = code.replace(
  'BMI 27.8 kg/m². Laboratory Data: SCr 1.79',
  'BMI 28.3 kg/m². Laboratory Data: SCr 1.79'
);

code = code.replace(
  '1. Persistent Nonvalvular AFib — Periprocedural Anticoagulation Planning", detail: "CHA2DS2-VASc = 4.',
  '1. Persistent Nonvalvular AFib — Periprocedural Anticoagulation Planning", detail: "CHA2DS2-VASc = 6 (prior EMR export showed 4).'
);

code = code.replace(
  'key: "nosebleeds", label: "Procedural Planning & Bridging Inquiry"',
  'key: "procedural_planning", label: "Procedural Planning & Bridging Inquiry"'
);

code = code.replace(
  'id: "w4c2_bleed", topic: "Colonoscopy Planning", field: "nosebleeds"',
  'id: "w4c2_bleed", topic: "Colonoscopy Planning", field: "procedural_planning"'
);

// Add bleeding inquiry response to robertWed interview knowledge
const bleedTopicWed = `    { id: "w4-robert_j4-wed_bleeding", topic: "Bleeding and epistaxis history", field: "bleeding", keywords: ["bleed", "bleeding", "nosebleed", "epistaxis", "bruise", "bruising", "blood", "stool", "urine", "hematuria"], response: "I haven't had any unusual bleeding, bruising, bloody stools, or bloody urine. I don't have frequent nosebleeds—just occasional minor dryness during winter months years ago, but nothing recent or concerning." },\n`;
if (!code.includes('w4-robert_j4-wed_bleeding')) {
  code = code.replace(
    '{ id: "w4c2_bleed", topic: "Colonoscopy Planning", field: "procedural_planning"',
    bleedTopicWed + '    { id: "w4c2_bleed", topic: "Colonoscopy Planning", field: "procedural_planning"'
  );
}

// 8. robertThu
code = code.replace(
  'VITALS: { bp: "112/66 mmHg", bpRepeat: "110/64 mmHg", hr: "72 bpm", rr: "16 breaths/min", temp: "98.0°F", spo2: "98%", spo2Qualifier: "on room air", weight: "81.5 kg", height: "5 ft 7 in", bmi: "27.6 kg/m²", vitalsTime: "03/09/2027 09:14", flags: {} }',
  'VITALS: { bp: "112/66 mmHg", bpRepeat: "110/64 mmHg", hr: "72 bpm", rr: "16 breaths/min", temp: "98.0°F", spo2: "98%", spo2Qualifier: "on room air", weight: "81.5 kg", height: "5 ft 7 in", bmi: "28.1 kg/m²", vitalsTime: "03/09/2027 09:14", flags: {} }'
);

code = code.replace(
  'BMI 27.6 kg/m². BP 112/66 mmHg is clinically acceptable',
  'BMI 28.1 kg/m². BP 112/66 mmHg is clinically acceptable'
);

code = code.replace(
  '1. Persistent Nonvalvular AFib — Long-Term Anticoagulation Reassessment", detail: "CHA2DS2-VASc = 4.',
  '1. Persistent Nonvalvular AFib — Long-Term Anticoagulation Reassessment", detail: "CHA2DS2-VASc = 6 (prior EMR export showed 4).'
);

code = code.replace(
  'response: "I take a daily multivitamin. I avoid other over-the-counter pain relievers unless my doctor approves them."',
  'response: "I take one daily multivitamin tablet every morning with breakfast. I avoid other over-the-counter pain relievers unless my doctor approves them."'
);

fs.writeFileSync(filePath, code, 'utf8');
console.log('patientsW4.js updated successfully!');
