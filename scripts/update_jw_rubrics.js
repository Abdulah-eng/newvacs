const fs = require('fs');
const path = require('path');

const rubricPath = path.join(__dirname, '../src/data/granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricPath, 'utf8'));

// 1. Week1_Patient_B_Tuesday 4H.1
const jwTue = rubrics['Week1_Patient_B_Tuesday'];
const item4H1 = jwTue.find(x => x.id === '4H.1');
if (item4H1) {
  item4H1.fullCredit = "States verify immunizations (or assesses/documents immunization status in chart or plan)";
}

// 2. Week1_Patient_B_Thursday 3A.13
const jwThu = rubrics['Week1_Patient_B_Thursday'];
const item3A13 = jwThu.find(x => x.id === '3A.13');
if (item3A13) {
  item3A13.fullCredit = "States no intensification needed (or continues current regimen without dose change / escalation)";
}

fs.writeFileSync(rubricPath, JSON.stringify(rubrics, null, 2), 'utf8');

const sumTue = jwTue.reduce((acc, x) => acc + (x.points || 0), 0);
const sumThu = jwThu.reduce((acc, x) => acc + (x.points || 0), 0);

console.log('Week1_Patient_B_Tuesday sum:', sumTue.toFixed(2));
console.log('Week1_Patient_B_Thursday sum:', sumThu.toFixed(2));
console.log('Successfully updated granular_rubrics.json for James Wilson Tue & Thu!');
