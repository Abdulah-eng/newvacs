const fs = require('fs');
const path = require('path');

const rubricPath = path.join(__dirname, '../src/data/granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricPath, 'utf8'));

const mgTue = rubrics['Week1_Patient_A_Tuesday'];
const item4D5 = mgTue.find(x => x.id === '4D.5');
if (item4D5) {
  item4D5.description = "Educate on monitoring (follow-up labs and/or symptom monitoring for myopathy/safety)";
  item4D5.fullCredit = "States monitoring education (or mentions follow-up lipid labs / symptom monitoring for muscle soreness or safety)";
  item4D5.halfCredit = "Mentions monitoring, imprecise";
}

fs.writeFileSync(rubricPath, JSON.stringify(rubrics, null, 2), 'utf8');

const sum = mgTue.reduce((acc, x) => acc + (x.points || 0), 0);
console.log('Week1_Patient_A_Tuesday sum:', sum.toFixed(2));
console.log('Successfully updated 4D.5 for Maria Gonzalez Tuesday!');
