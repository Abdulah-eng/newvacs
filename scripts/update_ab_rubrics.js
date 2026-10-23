const fs = require('fs');
const path = require('path');

const rubricsPath = path.join(__dirname, '../src/data/granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricsPath, 'utf8'));

function updateItem(key, id, updater) {
  const rub = rubrics[key];
  if (!rub) {
    console.error(`Rubric key not found: ${key}`);
    return;
  }
  const item = rub.find(x => x.id === id);
  if (!item) {
    console.error(`Item ${id} not found in ${key}`);
    return;
  }
  updater(item);
}

// ==========================================
// 1. Week4_Patient_B_Tuesday
// ==========================================
// [1B.14] Apixaban missed/rationed 2-3x/week
updateItem('Week4_Patient_B_Tuesday', '1B.14', item => {
  item.description = "Admits missing/rationing apixaban ~2-3 times per week";
  item.fullCredit = "States apixaban missed/rationed 2-3x/week (with or without 'evening' dose qualifier)";
  item.halfCredit = "States apixaban missed without frequency or timeframe";
});

// [2A.11] Irregularly irregular rhythm linked to known AFib
updateItem('Week4_Patient_B_Tuesday', '2A.11', item => {
  item.description = "Irregularly irregular rhythm documented in context of known AFib";
  item.fullCredit = "Documents irregularly irregular cardiac rhythm (and identifies AFib as known diagnosis in note)";
  item.halfCredit = "States irregular rhythm without documenting AFib anywhere in note";
});

// ==========================================
// 2. Week4_Patient_B_Wednesday
// ==========================================
// [2C.4] CMP otherwise unremarkable
updateItem('Week4_Patient_B_Wednesday', '2C.4', item => {
  item.description = "CMP otherwise unremarkable (no additional abnormalities)";
  item.fullCredit = "States CMP unremarkable / no other abnormalities, OR documents individual normal CMP values without other abnormalities";
});

// [3A.14] Reassurance and individualized risk-benefit communication
updateItem('Week4_Patient_B_Wednesday', '3A.14', item => {
  item.description = "Reassurance and individualized risk-benefit communication identified as key strategy";
  item.fullCredit = "States reassurance and individualized risk-benefit communication (or shared decision-making / confidence-building) are key strategies";
});

// [3C.6] Status: improving but continues to affect medication decisions
updateItem('Week4_Patient_B_Wednesday', '3C.6', item => {
  item.description = "Status: improving but continues to affect medication decisions";
  item.fullCredit = "States health literacy improving with persisting gaps (such as stroke risk magnitude, fear of bruising, or ongoing education needs affecting medication decisions)";
});

// [5A.3] Plan mirrors assessment problem order
updateItem('Week4_Patient_B_Wednesday', '5A.3', item => {
  item.description = "Plan mirrors assessment problem order";
  item.fullCredit = "Plan headings correspond to assessed problems (standalone monitoring, education, or follow-up sections are acceptable)";
});

// [5A.4] Objective data presented before assessment
updateItem('Week4_Patient_B_Wednesday', '5A.4', item => {
  item.description = "Objective data presented before assessment (no clinical conclusions in objective section)";
  item.fullCredit = "Objective data presented before assessment (clinical justifications like 'routine coagulation monitoring not indicated for DOAC' are acceptable context in objective section)";
});

// ==========================================
// 3. Week4_Patient_B_Thursday
// ==========================================
// [1B.7] Bruising concerns resolved
updateItem('Week4_Patient_B_Thursday', '1B.7', item => {
  item.description = "Bruising concerns resolved / no longer skips doses for bruising";
  item.fullCredit = "States bruising fears resolved, minor bruising accepted as expected, or no longer skips doses for bruising";
});

// [2A.8] Weight (84 kg or 83 kg)
updateItem('Week4_Patient_B_Thursday', '2A.8', item => {
  item.description = "Weight (84 kg or 83 kg)";
  item.fullCredit = "States 84 kg (or 83 kg)";
});

// [2A.9] BMI (30.8 kg/m² or 30.5 kg/m²)
updateItem('Week4_Patient_B_Thursday', '2A.9', item => {
  item.description = "BMI (30.8 kg/m² or 30.5 kg/m²)";
  item.fullCredit = "States 30.8 kg/m² (or 30.5 kg/m²)";
  item.halfCredit = "States BMI value without unit or slightly imprecise";
});

// [2B.3] Platelets (241 or 240 x10³/mm³)
updateItem('Week4_Patient_B_Thursday', '2B.3', item => {
  item.description = "Platelets (241 or 240 x10³/mm³)";
  item.fullCredit = "States 241 x10³/mm³ (or 240 x10³/mm³)";
});

// [2B.4] CBC noted as within normal limits / no clinically significant abnormalities
updateItem('Week4_Patient_B_Thursday', '2B.4', item => {
  item.description = "CBC noted as within normal limits / no clinically significant abnormalities";
  item.fullCredit = "States CBC unremarkable / WNL, OR documents normal WBC, Hgb, and Plt values without abnormalities";
});

// [2B.5] Sodium (139 or 138 mEq/L)
updateItem('Week4_Patient_B_Thursday', '2B.5', item => {
  item.description = "Sodium (139 or 138 mEq/L)";
  item.fullCredit = "States 139 mEq/L (or 138 mEq/L)";
});

// [2B.10] eGFR interpreted as adequate renal function (≥60)
updateItem('Week4_Patient_B_Thursday', '2B.10', item => {
  item.description = "eGFR interpreted as adequate renal function (≥60)";
  item.fullCredit = "States eGFR 72 mL/min/1.73m² (or interprets as adequate / normal / preserved renal function >=60)";
});

// [2B.11] AST (24 or 22 U/L)
updateItem('Week4_Patient_B_Thursday', '2B.11', item => {
  item.description = "AST (24 or 22 U/L)";
  item.fullCredit = "States 24 U/L (or 22 U/L)";
});

// [2B.12] ALT (21 or 24 U/L)
updateItem('Week4_Patient_B_Thursday', '2B.12', item => {
  item.description = "ALT (21 or 24 U/L)";
  item.fullCredit = "States 21 U/L (or 24 U/L)";
});

// [2B.13] Liver enzymes noted as within normal limits
updateItem('Week4_Patient_B_Thursday', '2B.13', item => {
  item.description = "Liver enzymes noted as within normal limits";
  item.fullCredit = "States LFTs / liver enzymes WNL or normal, OR documents normal AST and ALT values without hepatic impairment";
});

// [2C.4] Stable renal trend supports continued DOAC and SGLT2i
updateItem('Week4_Patient_B_Thursday', '2C.4', item => {
  item.description = "Notes stable renal function trend supports continued DOAC and SGLT2i use";
  item.fullCredit = "States stable renal trend supports current regimen (DOAC and/or SGLT2i continuation)";
});

// [5A.4] Plan elements map to assessed problems
updateItem('Week4_Patient_B_Thursday', '5A.4', item => {
  item.description = "Each plan element maps to an assessed problem";
  item.fullCredit = "Plan items map to assessed problems or care domains (standalone Patient Education, Longitudinal/Safety Monitoring, and Follow-up sections are acceptable)";
});

// Save updated rubrics
fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2), 'utf8');

// Verify sums
const w4Keys = [
  'Week4_Patient_B_Tuesday',
  'Week4_Patient_B_Wednesday',
  'Week4_Patient_B_Thursday'
];

let allOk = true;
for (const k of w4Keys) {
  const sum = rubrics[k].reduce((acc, x) => acc + x.points, 0);
  const diff = Math.abs(sum - 100.0);
  console.log(`${k} -> Sum: ${sum.toFixed(2)} (${rubrics[k].length} items)`);
  if (diff > 0.001) {
    console.error(`ERROR: ${k} sum is ${sum.toFixed(4)}, expected 100.00!`);
    allOk = false;
  }
}

if (allOk) {
  console.log('SUCCESS: All Angela Brooks rubrics sum to 100.00 exactly!');
} else {
  process.exit(1);
}
