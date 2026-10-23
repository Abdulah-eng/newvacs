const fs = require('fs');
const path = require('path');

const rubricsPath = path.join(__dirname, '../src/data/granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricsPath, 'utf8'));

// Helper
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

// 1. Week4_Patient_A_Tuesday
updateItem('Week4_Patient_A_Tuesday', '2A.5', item => {
  item.fullCredit = "States SpO2 98% (with or without 'on room air')";
});
updateItem('Week4_Patient_A_Tuesday', '3D.5', item => {
  item.fullCredit = "States preventive care optimization remains appropriate / indicated / recommended";
});

// 2. Week4_Patient_A_Thursday
updateItem('Week4_Patient_A_Thursday', '1A.9', item => {
  item.description = "Spironolactone continued (active GDMT pillar)";
  item.fullCredit = "States spironolactone 25 mg daily continued / active GDMT pillar (with or without 'recently added')";
});
updateItem('Week4_Patient_A_Thursday', '3A.19', item => {
  item.description = "Spironolactone evaluated as active GDMT pillar / MRA therapy";
  item.fullCredit = "States spironolactone active/continued as MRA pillar of GDMT (with or without 'recently added')";
});
updateItem('Week4_Patient_A_Thursday', '2A.5', item => {
  item.fullCredit = "States 98% (with or without 'on room air')";
});
updateItem('Week4_Patient_A_Thursday', '3A.6', item => {
  item.description = "Cardiac biomarker improvement documented (NT-proBNP 165 → 92 pg/mL, or baseline BNP 320)";
  item.fullCredit = "States NT-proBNP improved to 92 pg/mL (from 165 pg/mL, or notes overall improvement from baseline BNP 320 pg/mL)";
});

// 3. Week4_Patient_B_Tuesday
updateItem('Week4_Patient_B_Tuesday', '2A.6', item => {
  item.fullCredit = "States 98% (with or without 'on room air')";
});
updateItem('Week4_Patient_B_Tuesday', '3B.13', item => {
  item.fullCredit = "States adherence improvement, access intervention, or patient education as immediate priorities across note";
});

// 4. Week4_Patient_B_Wednesday
updateItem('Week4_Patient_B_Wednesday', '2A.6', item => {
  item.fullCredit = "States 98% (with or without 'on room air')";
});
updateItem('Week4_Patient_B_Wednesday', '3A.17', item => {
  item.fullCredit = "States no decompensation or clinical deterioration noted (with or without referencing apixaban hold or missed doses)";
});
updateItem('Week4_Patient_B_Wednesday', '3C.2', item => {
  item.fullCredit = "States patient has knowledge gaps regarding AF stroke risk, anticoagulation, or distinguishing minor bruising from major bleeding";
});

// 5. Week4_Patient_B_Thursday
updateItem('Week4_Patient_B_Thursday', '3E.3', item => {
  item.description = "Shingrix series status (dose #2 administered today / series completed, or prior dose #1 done)";
  item.fullCredit = "States Shingrix dose #2 administered today / completed (or notes prior dose #1 done, dose #2 given today/pending)";
});
updateItem('Week4_Patient_B_Thursday', '3E.4', item => {
  item.description = "Tdap booster status (administered today / prior care gap closed)";
  item.fullCredit = "States Tdap booster administered today / gap closed (or identifies Tdap prior gap addressed)";
});
updateItem('Week4_Patient_B_Thursday', '3E.5', item => {
  item.description = "Preventive care / immunization maintenance (Tdap administered today; routine schedule)";
  item.fullCredit = "States Tdap administered today / gaps closed, or plans routine preventive maintenance at future visits";
});
updateItem('Week4_Patient_B_Thursday', '2A.7', item => {
  item.fullCredit = "States 98% (with or without 'on room air')";
});
updateItem('Week4_Patient_B_Thursday', '3C.5', item => {
  item.fullCredit = "Links improved access/copay assistance to restored adherence anywhere in note";
});
updateItem('Week4_Patient_B_Thursday', '3D.6', item => {
  item.fullCredit = "Links education/confidence to restored adherence anywhere in note";
});

// 6. Week4_Patient_C_Tuesday
updateItem('Week4_Patient_C_Tuesday', '1B.13', item => {
  item.description = "Denies lower extremity edema / peripheral edema";
  item.fullCredit = "Denies lower extremity edema or peripheral edema";
});
updateItem('Week4_Patient_C_Tuesday', '1B.21', item => {
  item.fullCredit = "States spouse (wife) or family shares concern about medications worsening kidney function or dialysis";
});
updateItem('Week4_Patient_C_Tuesday', '4B.8', item => {
  item.fullCredit = "States discuss BP control as kidney-protective anywhere in note";
});
updateItem('Week4_Patient_C_Tuesday', '4B.9', item => {
  item.fullCredit = "States discuss diabetes management as kidney-protective anywhere in note";
});

// 7. Week4_Patient_C_Wednesday
updateItem('Week4_Patient_C_Wednesday', '3C.10', item => {
  item.description = "States apixaban does not require dose adjustment per standard AF criteria or supported in CKD 3b";
  item.fullCredit = "States standard apixaban dose (5 mg BID) continues without reduction using standard AF criteria (meets only 1 of 3: SCr) and/or noting CKD Stage 3b does not require dose reduction";
});
updateItem('Week4_Patient_C_Wednesday', '4C.7', item => {
  item.description = "States apixaban does not require dose adjustment per standard dose-reduction criteria or supported in CKD 3b";
  item.fullCredit = "States apixaban does not require dose adjustment per standard dose-reduction criteria or supported in CKD 3b";
});
updateItem('Week4_Patient_C_Wednesday', '3D.2', item => {
  item.fullCredit = "States patient actively participates / engaged in shared healthcare decisions";
});

// 8. Week4_Patient_C_Thursday
updateItem('Week4_Patient_C_Thursday', '2C.6', item => {
  item.description = "Hgb 13.3 g/dL stable with no significant decline / above bleeding concern";
  item.fullCredit = "States Hgb 13.3 g/dL is stable (vs 13.4 g/dL), no significant decline, or above clinical bleeding threshold";
});
updateItem('Week4_Patient_C_Thursday', '4B.8', item => {
  item.fullCredit = "States GDMT complete / well tolerated, or continues documented 4-pillar GDMT regimen";
});

// Save rubrics
fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2) + '\n', 'utf8');

// Verify point sums
const w4Keys = Object.keys(rubrics).filter(k => k.startsWith('Week4_'));
let all100 = true;
for (const k of w4Keys) {
  const sum = rubrics[k].reduce((acc, x) => acc + x.points, 0);
  console.log(`${k} -> Sum: ${sum.toFixed(2)} (${rubrics[k].length} items)`);
  if (Math.abs(sum - 100.0) > 0.001) {
    all100 = false;
  }
}
if (!all100) {
  console.error('ERROR: Some Week 4 rubrics do not sum to 100.00!');
  process.exit(1);
} else {
  console.log('SUCCESS: All Week 4 rubrics sum to 100.00 exactly!');
}
