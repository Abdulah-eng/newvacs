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
// 1. Week4_Patient_C_Tuesday
// ==========================================
// [3A.9] Volume overload / edema
updateItem('Week4_Patient_C_Tuesday', '3A.9', item => {
  item.description = "States no evidence of fluid overload / hypervolemia";
  item.fullCredit = "States no fluid overload / hypervolemia, OR notes absence of peripheral/lower extremity edema, orthopnea, or congestion";
  item.halfCredit = "Vaguely mentions symptoms without assessing volume status or edema";
});

// [3B.4] Renal trend acute vs chronic
updateItem('Week4_Patient_C_Tuesday', '3B.4', item => {
  item.description = "States no recent illness or volume depletion contributing to renal trend";
  item.fullCredit = "States no acute illness / volume depletion, OR attributes renal trend to chronic progressive decline rather than acute prerenal insult";
  item.halfCredit = "Notes renal decline without evaluating acute vs chronic contributors";
});

// [4B.6] Assess CKD contributors
updateItem('Week4_Patient_C_Tuesday', '4B.6', item => {
  item.description = "States assess for additional contributors to CKD progression";
  item.fullCredit = "States assess for additional contributors to CKD progression, OR evaluates existing contributors (HTN, diabetes, HF, vascular disease, avoiding nephrotoxins/NSAIDs)";
  item.halfCredit = "States evaluate causes without specific contributor assessment";
});

// [4E.4] Discuss potassium monitoring
updateItem('Week4_Patient_C_Tuesday', '4E.4', item => {
  item.description = "States potassium monitoring in plan/monitoring or discussed with patient";
  item.fullCredit = "States potassium monitoring in plan/monitoring or discusses potassium monitoring/dietary awareness with patient";
  item.halfCredit = "Mentions potassium without monitoring timeframe or plan context";
});

// ==========================================
// 2. Week4_Patient_C_Wednesday
// ==========================================
// [2A.8] BMI (28.3 kg/m² or 27.8 kg/m²)
updateItem('Week4_Patient_C_Wednesday', '2A.8', item => {
  item.description = "Body mass index (28.3 kg/m² or 27.8 kg/m²)";
  item.fullCredit = "States 28.3 kg/m² (or 27.8 kg/m²)";
  item.halfCredit = "BMI stated, value imprecise";
});

// [3A.13] Continued anticoagulation rationale
updateItem('Week4_Patient_C_Wednesday', '3A.13', item => {
  item.description = "Concludes: significant thromboembolic risk supports continued long-term anticoagulation";
  item.fullCredit = "States significant TE risk supports continued anticoagulation (or documents apixaban resumption post-procedure for long-term stroke prevention)";
  item.halfCredit = "States continued AC, no TE risk link";
});

// [5B.3] Clinical targets with numeric thresholds
updateItem('Week4_Patient_C_Wednesday', '5B.3', item => {
  item.description = "Clinical targets stated with numeric thresholds where applicable";
  item.fullCredit = "Numeric thresholds stated where applicable (e.g. 48h DOAC hold, eGFR, CHA2DS2-VASc, or BP goal <130/80 mmHg; minor omission of single threshold acceptable if overall quantified)";
  item.halfCredit = "Majority of clinical targets vague without numeric thresholds";
});

// ==========================================
// 3. Week4_Patient_C_Thursday
// ==========================================
// [2A.8] BMI (28.1 kg/m² or 27.6 kg/m²)
updateItem('Week4_Patient_C_Thursday', '2A.8', item => {
  item.description = "BMI (28.1 kg/m² or 27.6 kg/m²)";
  item.fullCredit = "States 28.1 kg/m² (or 27.6 kg/m²)";
  item.halfCredit = "States BMI, value imprecise";
});

// Save updated rubrics
fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2), 'utf8');

// Verify sums
const rjKeys = [
  'Week4_Patient_C_Tuesday',
  'Week4_Patient_C_Wednesday',
  'Week4_Patient_C_Thursday'
];

let allOk = true;
for (const k of rjKeys) {
  const sum = rubrics[k].reduce((acc, x) => acc + x.points, 0);
  const diff = Math.abs(sum - 100.0);
  console.log(`${k} -> Sum: ${sum.toFixed(2)} (${rubrics[k].length} items)`);
  if (diff > 0.001) {
    console.error(`ERROR: ${k} sum is ${sum.toFixed(4)}, expected 100.00!`);
    allOk = false;
  }
}

if (allOk) {
  console.log('SUCCESS: All Robert Jenkins rubrics sum to 100.00 exactly!');
} else {
  process.exit(1);
}
