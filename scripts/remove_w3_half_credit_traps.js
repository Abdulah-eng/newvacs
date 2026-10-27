const fs = require('fs');
const path = require('path');

const rubricsPath = path.join(__dirname, '../src/data/granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricsPath, 'utf8'));

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

let trapCount = 0;
for (const key of w3Keys) {
  const rub = rubrics[key];
  if (!rub) continue;

  for (const item of rub) {
    if (item.halfCredit && item.halfCredit !== '—') {
      item.halfCredit = '—';
      trapCount++;
    }
  }
}

console.log(`Cleaned ${trapCount} half-credit traps across Week 3 rubrics.`);

// Section target normalization
const targets = { '1': 25.0, '2': 15.0, '3': 30.0, '4': 25.0, '5': 5.0 };

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
