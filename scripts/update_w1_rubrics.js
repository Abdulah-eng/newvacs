const fs = require('fs');
const path = require('path');

const rubricPath = path.join(__dirname, '../src/data/granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricPath, 'utf8'));

function updateItem(key, id, updates) {
  const list = rubrics[key];
  if (!list) {
    throw new Error(`Rubric key ${key} not found`);
  }
  const item = list.find(x => x.id === id);
  if (!item) {
    throw new Error(`Item ${id} not found in ${key}`);
  }
  Object.assign(item, updates);
  console.log(`Updated ${key} [${id}]:`, updates);
}

// 1. Week1_Patient_A_Tuesday
updateItem('Week1_Patient_A_Tuesday', '4H.1', {
  fullCredit: 'States ~1-month (4-week) follow-up, 3-month follow-up, or 4-week interim check with 3-month lab review'
});
updateItem('Week1_Patient_A_Tuesday', '4H.3', {
  fullCredit: 'States A1C before next visit or in ~3 months'
});
updateItem('Week1_Patient_A_Tuesday', '4H.5', {
  fullCredit: 'States lipid panel before next visit or in 4–12 weeks'
});

// 2. Week1_Patient_A_Wednesday
updateItem('Week1_Patient_A_Wednesday', '2B.4', {
  description: 'Sodium (139 mEq/L)',
  fullCredit: 'States 139 mEq/L (or 138)'
});
updateItem('Week1_Patient_A_Wednesday', '2B.5', {
  description: 'Potassium (4.3 mEq/L)',
  fullCredit: 'States 4.3 mEq/L (or 4.4)'
});
updateItem('Week1_Patient_A_Wednesday', '2B.6', {
  description: 'Serum creatinine (0.90 mg/dL)',
  fullCredit: 'States 0.90 mg/dL (or 0.9 / 0.95)'
});
updateItem('Week1_Patient_A_Wednesday', '2B.7', {
  description: 'eGFR (82 mL/min/1.73m2)',
  fullCredit: 'States 82 mL/min/1.73m2 (or 74)'
});
updateItem('Week1_Patient_A_Wednesday', '2B.9', {
  description: 'Total cholesterol (158 mg/dL)',
  fullCredit: 'States 158 mg/dL (or 170)'
});
updateItem('Week1_Patient_A_Wednesday', '2B.11', {
  description: 'HDL-C (48 mg/dL)',
  fullCredit: 'States 48 mg/dL (or 45)'
});
updateItem('Week1_Patient_A_Wednesday', '2B.12', {
  description: 'Triglycerides (160 mg/dL)',
  fullCredit: 'States 160 mg/dL (or 180)'
});

// 3. Week1_Patient_B_Tuesday
updateItem('Week1_Patient_B_Tuesday', '1C.13', {
  description: 'Family history, father: stroke at age 68-71',
  fullCredit: 'States father stroke at 68 or 71'
});

// 4. Week1_Patient_B_Wednesday
updateItem('Week1_Patient_B_Wednesday', '1B.7', {
  description: 'Estimates missing medications ~once every 1-2 weeks or excellent adherence',
  fullCredit: 'States no missed doses / excellent adherence in past 2 weeks (or ~1 every 1-2 weeks)'
});
updateItem('Week1_Patient_B_Wednesday', '1B.11', {
  description: 'Reported fasting glucose range (140-160 mg/dL or relies on clinic labs)',
  fullCredit: 'States no home glucose meter / relies on clinic labs (or 140-160 mg/dL)'
});
updateItem('Week1_Patient_B_Wednesday', '1B.16', {
  description: 'Beginning walking program (~3-4 days/week, 15-30 min/session)',
  fullCredit: 'States walking 3-4 days/week, 15-30 min (or 20-30 min ~4 days/wk)'
});
updateItem('Week1_Patient_B_Wednesday', '1C.13', {
  description: 'Family history, father: stroke at age 68-71',
  fullCredit: 'States father stroke at 68 or 71'
});
updateItem('Week1_Patient_B_Wednesday', '1D.8', {
  description: 'Physical activity (walking 3-4 days/week, 15-30 min)',
  fullCredit: 'States walking 3-4 days/week, 15-30 min (or 20-30 min ~4 days/wk)'
});
updateItem('Week1_Patient_B_Wednesday', '2B.4', {
  description: 'Sodium (139 mEq/L)',
  fullCredit: 'States 139 mEq/L (or 138)'
});
updateItem('Week1_Patient_B_Wednesday', '2B.7', {
  description: 'eGFR (84 mL/min/1.73m2)',
  fullCredit: 'States 84 mL/min/1.73m2 (or 83)'
});
updateItem('Week1_Patient_B_Wednesday', '2B.8', {
  description: 'Total cholesterol (172 mg/dL)',
  fullCredit: 'States 172 mg/dL (or 178)'
});
updateItem('Week1_Patient_B_Wednesday', '2B.10', {
  description: 'HDL-C (46 mg/dL)',
  fullCredit: 'States 46 mg/dL (or 43)'
});
updateItem('Week1_Patient_B_Wednesday', '2B.11', {
  description: 'Triglycerides (158 mg/dL)',
  fullCredit: 'States 158 mg/dL (or 200)'
});
updateItem('Week1_Patient_B_Wednesday', '2B.12', {
  description: 'UACR (16 mg/g)',
  fullCredit: 'States 16 mg/g (or 20)'
});

// 5. Week1_Patient_B_Thursday
updateItem('Week1_Patient_B_Thursday', '1C.13', {
  description: 'Family history, father: stroke at age 68-71',
  fullCredit: 'States father stroke at 68 or 71'
});
updateItem('Week1_Patient_B_Thursday', '1E.24', {
  description: 'Tdap last documented >10 years ago (or 12 years ago)',
  fullCredit: 'States Tdap >10 years ago (or 12 years ago) / overdue'
});
updateItem('Week1_Patient_B_Thursday', '2C.2', {
  description: 'UACR low/normal, stable, or improving (<30 mg/g)',
  fullCredit: 'States UACR low/normal, stable, or improving (<30 mg/g)'
});

// 6. Week1_Patient_C_Tuesday
updateItem('Week1_Patient_C_Tuesday', '1D.6', {
  description: 'Physical activity (limited regular exercise / no structured routine or occasional walking)',
  fullCredit: 'States limited regular exercise / no structured routine (or occasional walking)'
});

// 7. Week1_Patient_C_Wednesday
updateItem('Week1_Patient_C_Wednesday', '1B.4', {
  description: 'Medication adherence (no missed doses or 1-2 isolated occurrences)',
  fullCredit: 'States no missed doses / excellent adherence (or ~1-2 isolated misses)'
});
updateItem('Week1_Patient_C_Wednesday', '1B.7', {
  description: 'Blood pressure monitoring frequency (several times weekly / periodic)',
  fullCredit: 'States several times weekly (or notes home BP monitoring)'
});
updateItem('Week1_Patient_C_Wednesday', '1B.8', {
  description: 'Reported home blood pressure range (upper 120s/upper 70s or ~126/78)',
  fullCredit: 'States upper 120s/upper 70s, ~126/78, or ~129/78 mmHg'
});
updateItem('Week1_Patient_C_Wednesday', '1B.9', {
  description: 'Glucose monitoring frequency (regularly / periodic or relies on clinic)',
  fullCredit: 'States regularly / pretty regularly (or notes monitoring/relies on clinic)'
});
updateItem('Week1_Patient_C_Wednesday', '1B.10', {
  description: 'Reported fasting glucose range (130-160 mg/dL or clinic glycemic values)',
  fullCredit: 'States 130-160 mg/dL (or notes clinic glycemic values)'
});
updateItem('Week1_Patient_C_Wednesday', '1B.13', {
  description: 'Reports lower extremity swelling status (denies current swelling / resolved)',
  fullCredit: 'States denies current leg swelling / resolved positional LE swelling (or notes historical positional LE swelling)'
});
updateItem('Week1_Patient_C_Wednesday', '1B.14', {
  description: 'Reports fatigue status (denies current fatigue / feeling well)',
  fullCredit: 'States denies current fatigue / reports feeling well (or notes historical intermittent fatigue)'
});
updateItem('Week1_Patient_C_Wednesday', '2A.6', {
  description: 'Home blood pressure log average (~126–129/78 mmHg)',
  fullCredit: 'States ~126/78 or ~129/78 mmHg'
});
updateItem('Week1_Patient_C_Wednesday', '2B.12', {
  description: 'LDL-C (76 mg/dL)',
  fullCredit: 'States 76 mg/dL (or 86)'
});
updateItem('Week1_Patient_C_Wednesday', '2B.15', {
  description: 'LDL-C improvement noted (92 to 76 mg/dL)',
  fullCredit: 'States improvement with values (92 to 76 or 86)'
});
updateItem('Week1_Patient_C_Wednesday', '3D.10', {
  description: 'Identifies lipid optimization or finerenone/renoprotection as next target',
  fullCredit: 'States this prioritization (lipid optimization or finerenone for persistent albuminuria with K monitoring)'
});

fs.writeFileSync(rubricPath, JSON.stringify(rubrics, null, 2), 'utf8');
console.log('Successfully updated Week 1 rubrics in granular_rubrics.json!');
