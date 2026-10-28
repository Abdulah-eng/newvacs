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
    console.warn(`Item ${id} not found in ${key}`);
    return;
  }
  updater(item);
}

// 1. Update Sarah Wednesday Rubric Items
updateItem('Week3_Patient_A_Wednesday', '1C.5', item => {
  item.fullCredit = "Documents past surgical history (denies surgeries), or award full credit if omitted as patient has no surgical history";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '1C.11', item => {
  item.fullCredit = "Documents past medical history (asthma, allergic rhinitis, hypertension); award full credit without requiring explicit statement of 'no additional PMH'";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '1D.6', item => {
  item.fullCredit = "Confirms denial of recreational / illicit drug use, or award full credit for non-smoker / social history documentation";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '3A.11', item => {
  item.fullCredit = "Concludes pharmacologic escalation is not warranted, prioritizes inhaler technique correction over medication escalation per GINA, or maintains current SMART regimen (award full credit even if interface escalation option was selected)";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '3A.12', item => {
  item.fullCredit = "Provides clinical rationale for maintaining therapy or evaluating technique (ACT 21, technique errors explain exertional symptoms; award full credit even if interface escalation option was selected)";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '4A.1', item => {
  item.fullCredit = "Continues Symbicort (budesonide/formoterol 160/4.5 mcg) 1 puff BID maintenance + 1 puff PRN reliever without escalation (award full credit even if interface escalation option was selected)";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies SMART maintenance dose (1 inhalation BID) in Plan, or award full credit for continuing current regimen";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '4A.3', item => {
  item.fullCredit = "Specifies SMART reliever dose (1 inhalation PRN) in Plan, or award full credit for continuing current regimen";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '4A.4', item => {
  item.fullCredit = "Provides clinical justification for maintaining therapy or withholding escalation (technique correction, ACT 21), or selects interface option 'Change to ICS-LABA combination or SMART therapy'";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '4A.5', item => {
  item.fullCredit = "Explains that exertional symptoms stem from technique error rather than medication insufficiency, or provides rationale for maintaining/escalating SMART therapy";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans follow-up visit to reassess asthma control, or award full credit for longitudinal follow-up / concise plan";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at follow-up visit, or award full credit if inhaler technique was reviewed";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans reassessment of symptom burden and ACT score at follow-up, or award full credit if baseline ACT 21 was documented";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '4G.5', item => {
  item.fullCredit = "Documents contingency plan for therapy adjustment if control worsens before next visit, or award full credit for PRN reliever instructions";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

updateItem('Week3_Patient_A_Wednesday', '4G.6', item => {
  item.fullCredit = "Plans evaluation of step-down eligibility after sustained control, or award full credit for continuing current regimen";
  item.halfCredit = "—";
  item.zeroCredit = "—";
});

// Section target normalization
const targets = { '1': 25.0, '2': 15.0, '3': 30.0, '4': 25.0, '5': 5.0 };
const w3Keys = [
  'Week3_Patient_A_Tuesday',
  'Week3_Patient_A_Wednesday',
  'Week3_Patient_A_Thursday',
  'Week3_Patient_B_Tuesday',
  'Week3_Patient_B_Wednesday',
  'Week3_Patient_B_Thursday',
  'Week3_Patient_C_Tuesday',
  'Week3_Patient_C_Wednesday',
  'Week3_Patient_C_Thursday'
];

for (const key of w3Keys) {
  const rub = rubrics[key];
  if (!rub) continue;

  for (const s of ['1', '2', '3', '4', '5']) {
    const items = rub.filter(x => (x.section ? String(x.section) : x.id[0]) === s);
    const sum = items.reduce((acc, x) => acc + x.points, 0);
    const target = targets[s];
    const diff = Math.round((target - sum) * 1000) / 1000;
    if (Math.abs(diff) > 0.0001 && items.length > 0) {
      items[0].points = Math.round((items[0].points + diff) * 100) / 100;
    }
  }

  let tot = 0;
  for (const it of rub) tot += it.points;
  console.log(`${key} -> Total: ${tot.toFixed(2)} pts`);
}

fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2), 'utf8');
console.log('Saved updated rubrics to granular_rubrics.json successfully!');

