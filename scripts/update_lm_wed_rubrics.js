const fs = require('fs');
const path = require('path');

const rubricPath = path.join(__dirname, '../src/data/granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricPath, 'utf8'));

const lmWed = rubrics['Week1_Patient_C_Wednesday'];

// 1E.30
const item1E30 = lmWed.find(x => x.id === '1E.30');
if (item1E30) {
  item1E30.description = "Tdap last received 11 years ago (or overdue >10 years)";
  item1E30.fullCredit = "States Tdap 11 years ago or overdue >10 years";
  item1E30.halfCredit = "States Tdap, no interval/status";
}

// 2B.11
const item2B11 = lmWed.find(x => x.id === '2B.11');
if (item2B11) {
  item2B11.description = "Total cholesterol (156 or 170 mg/dL)";
  item2B11.fullCredit = "States 156 mg/dL (or 170 mg/dL)";
}

// 2B.13
const item2B13 = lmWed.find(x => x.id === '2B.13');
if (item2B13) {
  item2B13.description = "HDL-C (48 or 45 mg/dL)";
  item2B13.fullCredit = "States 48 mg/dL (or 45 mg/dL)";
}

// 2B.14
const item2B14 = lmWed.find(x => x.id === '2B.14');
if (item2B14) {
  item2B14.description = "Triglycerides (160 or 184 mg/dL)";
  item2B14.fullCredit = "States 160 mg/dL (or 184 mg/dL)";
}

// 4D.4
const item4D4 = lmWed.find(x => x.id === '4D.4');
if (item4D4) {
  item4D4.description = "Reinforce cardiovascular risk reduction strategies";
  item4D4.fullCredit = "States CV risk reduction (or reinforces secondary prevention across medications and lifestyle)";
}

// 4E.4
const item4E4 = lmWed.find(x => x.id === '4E.4');
if (item4E4) {
  item4E4.description = "Leverage GLP-1 RA therapy for ongoing weight management";
  item4E4.fullCredit = "States GLP-1 weight role (or continues semaglutide noting weight/lifestyle role anywhere in plan)";
}

fs.writeFileSync(rubricPath, JSON.stringify(rubrics, null, 2), 'utf8');

const sum = lmWed.reduce((acc, x) => acc + (x.points || 0), 0);
console.log('Week1_Patient_C_Wednesday sum:', sum.toFixed(2));
console.log('Successfully updated granular_rubrics.json for Linda Martinez Wednesday!');
