const fs = require('fs');
const path = require('path');

const rubricPath = path.join(__dirname, '../src/data/granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricPath, 'utf8'));

// 1. Week1_Patient_A_Thursday updates
const thuItems = rubrics['Week1_Patient_A_Thursday'];

// 1B.3
const item1B3 = thuItems.find(x => x.id === '1B.3');
if (item1B3) {
  item1B3.description = "Reports medication routine easier to maintain or describes established routine";
  item1B3.fullCredit = "States routine easier or describes established routine (e.g. coffee maker / evening reminder)";
}

// 1B.6
const item1B6 = thuItems.find(x => x.id === '1B.6');
if (item1B6) {
  item1B6.description = "Reported fasting glucose range (115-135 mg/dL) or home glucose status";
  item1B6.fullCredit = "States 115-135 mg/dL (or notes fasting home glucose readings/range from chart or interview, or glucose at target)";
  item1B6.halfCredit = "Range stated, imprecise";
}

// 4E.2
const item4E2 = thuItems.find(x => x.id === '4E.2');
if (item4E2) {
  item4E2.description = "Encourage progression toward sustainable weight-loss goals";
  item4E2.fullCredit = "States sustainable weight-loss goals, exercise progression, or discusses weight-loss pharmacotherapy / lifestyle anywhere in plan";
}

// 5A.2
const item5A2 = thuItems.find(x => x.id === '5A.2');
if (item5A2) {
  item5A2.description = "Subjective and objective data placed in correct sections";
  item5A2.fullCredit = "Correctly partitioned (citing labs/vitals in subjective to contextualize patient perspective or misconception receives full credit)";
  item5A2.halfCredit = "Minor misplacement";
}

// 2. Week1_Patient_A_Wednesday updates
const wedItems = rubrics['Week1_Patient_A_Wednesday'];

// 1E.16
const item1E16 = wedItems.find(x => x.id === '1E.16');
if (item1E16) {
  item1E16.description = "Acetaminophen listed (or notes ibuprofen discontinued/avoided)";
  item1E16.fullCredit = "Names acetaminophen (or states ibuprofen discontinued/avoided)";
  item1E16.halfCredit = "Names acetaminophen or ibuprofen, imprecise";
}

// 1E.17
const item1E17 = wedItems.find(x => x.id === '1E.17');
if (item1E17) {
  item1E17.description = "Acetaminophen frequency (PRN) or notes ibuprofen discontinued/avoided";
  item1E17.fullCredit = "States PRN (or notes ibuprofen discontinued/avoided)";
  item1E17.halfCredit = "States frequency without PRN / imprecise";
}

// 3B.12
const item3B12 = wedItems.find(x => x.id === '3B.12');
if (item3B12) {
  item3B12.description = "Identifies factors supporting intensification (obesity/weight/elevation/albuminuria)";
  item3B12.fullCredit = "Names >=2 factors (e.g. unmet A1C, obesity/weight, albuminuria, or cardiovascular risk anywhere in assessment/plan)";
  item3B12.halfCredit = "Names 1 factor";
}

// 3B.14
const item3B14 = wedItems.find(x => x.id === '3B.14');
if (item3B14) {
  item3B14.description = "Cites cardiovascular/renal/metabolic/weight benefit rationale";
  item3B14.fullCredit = "Names >=2 benefit domains (e.g. glycemic, weight loss, renal protection, or CV benefits anywhere in note)";
  item3B14.halfCredit = "Names 1 domain";
}

// 3C.8
const item3C8 = wedItems.find(x => x.id === '3C.8');
if (item3C8) {
  item3C8.description = "Strengthens future SGLT2 inhibitor consideration (renal protection)";
  item3C8.fullCredit = "Links albuminuria/kidney protection to SGLT2 inhibitor consideration anywhere in note";
  item3C8.halfCredit = "Mentions SGLT2 or kidney protection without explicit link";
}

fs.writeFileSync(rubricPath, JSON.stringify(rubrics, null, 2), 'utf8');

const sumThu = thuItems.reduce((acc, x) => acc + (x.points || 0), 0);
const sumWed = wedItems.reduce((acc, x) => acc + (x.points || 0), 0);

console.log('Week1_Patient_A_Thursday new sum:', sumThu.toFixed(2));
console.log('Week1_Patient_A_Wednesday new sum:', sumWed.toFixed(2));
console.log('Successfully updated granular_rubrics.json for Maria Gonzalez Thu & Wed!');
