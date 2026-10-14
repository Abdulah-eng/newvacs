const fs = require('fs');
const path = require('path');

const rubrics = JSON.parse(fs.readFileSync('src/data/granular_rubrics.json', 'utf8'));
const patientsW2Content = fs.readFileSync('src/data/patientsW2.js', 'utf8');
const chartTabsContent = fs.readFileSync('src/components/ChartTabs.jsx', 'utf8');
const promptsContent = fs.readFileSync('src/lib/ai/prompts.js', 'utf8');

const results = [];

function check(id, title, pass, details) {
  results.push({ id, title, pass, details });
  console.log(`[${pass ? 'PASS' : 'FAIL'}] ${id}: ${title}`);
  if (!pass) console.log(`   -> Details: ${details}`);
}

// V01: Allergy display & banner
const v01_tabs = chartTabsContent.includes('const rawAllergies = c.ALLERGIES || (c.MED_HISTORY && c.MED_HISTORY.allergies) || []');
const v01_patients = patientsW2Content.includes("substance: 'Penicillin'") && patientsW2Content.includes("reaction: 'Rash (childhood)'");
check('V01', 'Angela Rodriguez allergy banner & ALLERGIES defined', v01_tabs && v01_patients, `tabs: ${v01_tabs}, patients: ${v01_patients}`);

// V02: Angela Tuesday EMR vs Grader synchronization
const bTueRubric = JSON.stringify(rubrics['Week2_Patient_B_Tuesday'] || '');
const v02_bp_sync = bTueRubric.includes('138/84') && bTueRubric.includes('142/86');
const v02_ascvd_sync = bTueRubric.includes('14.5%') && bTueRubric.includes('17.4%');
const v02_egfr_sync = bTueRubric.includes('53') && bTueRubric.includes('54');
check('V02', 'Angela Tue BP, ASCVD, eGFR dual-accepting in rubric', v02_bp_sync && v02_ascvd_sync && v02_egfr_sync, `bp: ${v02_bp_sync}, ascvd: ${v02_ascvd_sync}, egfr: ${v02_egfr_sync}`);

// V03: Simvastatin vs Rosuvastatin for Angela
const v03_no_simva_req = !bTueRubric.includes('Discontinue simvastatin') && !bTueRubric.includes('stop simvastatin') && !bTueRubric.includes('DC simvastatin');
const v03_rosuva = bTueRubric.includes('rosuvastatin') || bTueRubric.includes('Rosuvastatin');
check('V03', 'Angela Tue rubric does not require simvastatin DC & accepts rosuvastatin', v03_no_simva_req && v03_rosuva, `no_simva: ${v03_no_simva_req}, rosuva: ${v03_rosuva}`);

// V04: David Chen Metformin ER renal dose adjustment
const cTueRubric = JSON.stringify(rubrics['Week2_Patient_C_Tuesday'] || '');
const cWedRubric = JSON.stringify(rubrics['Week2_Patient_C_Wednesday'] || '');
const cThuRubric = JSON.stringify(rubrics['Week2_Patient_C_Thursday'] || '');
const v04_tue = cTueRubric.includes('1,000 mg daily') || cTueRubric.includes('1000 mg daily') || cTueRubric.includes('500 mg BID');
const v04_wed = cWedRubric.includes('1,000 mg daily') || cWedRubric.includes('1000 mg daily') || cWedRubric.includes('500 mg BID');
const v04_thu = cThuRubric.includes('1,000 mg daily') || cThuRubric.includes('1000 mg daily') || cThuRubric.includes('500 mg BID');
check('V04', 'David Chen Metformin ER 1000 mg total daily accepted in Tue/Wed/Thu', v04_tue && v04_wed && v04_thu, `tue: ${v04_tue}, wed: ${v04_wed}, thu: ${v04_thu}`);

// V05: Michael Turner father MI at 61 not premature
const aTueRubric = JSON.stringify(rubrics['Week2_Patient_A_Tuesday'] || '');
const v05_aTue = aTueRubric.includes('not premature') || aTueRubric.includes('61');
const v05_prompt = promptsContent.includes('Father\'s MI at age 61') && promptsContent.includes('premature');
check('V05', 'Michael Turner father MI at 61 not strictly premature ASCVD', v05_aTue && v05_prompt, `rubric: ${v05_aTue}, prompt: ${v05_prompt}`);

// V06: Baseline UACR values visible in LABS or OBJECTIVE_EXTRA
const v06_david = patientsW2Content.includes('505 mg/g');
const v06_angela = patientsW2Content.includes('142 mg/g') || patientsW2Content.includes('165 mg/g');
const v06_michael = patientsW2Content.includes('105 mg/g') || patientsW2Content.includes('118 mg/g');
check('V06', 'Baseline UACR values and dates accessible in patient data', v06_david && v06_angela && v06_michael, `david: ${v06_david}, angela: ${v06_angela}, michael: ${v06_michael}`);

// V07: Michael Turner social history & interview alignment
const v07_occ = patientsW2Content.includes('Warehouse manager') || patientsW2Content.includes('warehouse manager');
const v07_rubric = aTueRubric.includes('warehouse') || aTueRubric.includes('Warehouse');
check('V07', 'Michael Turner occupation and history aligned', v07_occ && v07_rubric, `occ: ${v07_occ}, rubric: ${v07_rubric}`);

// V08: Michael Turner physical activity / lifestyle
const v08_activity = aTueRubric.includes('sedentary') || aTueRubric.includes('Sedentary');
check('V08', 'Michael Turner sedentary lifestyle accurately credited', v08_activity, `activity: ${v08_activity}`);

// V09: Michael Turner home BP monitoring
const aWedRubric = JSON.stringify(rubrics['Week2_Patient_A_Wednesday'] || '');
const aThuRubric = JSON.stringify(rubrics['Week2_Patient_A_Thursday'] || '');
const v09_wed = aWedRubric.includes('no home log') || aWedRubric.includes('no log') || aWedRubric.includes('infrequent') || aWedRubric.includes('denies');
const v09_thu = aThuRubric.includes('no home log') || aThuRubric.includes('no log') || aThuRubric.includes('infrequent') || aThuRubric.includes('denies');
check('V09', 'Michael Turner home BP log status accepted on follow-up', v09_wed && v09_thu, `wed: ${v09_wed}, thu: ${v09_thu}`);

// V10: David Chen symptom & barrier alignment
const v10_prompt = promptsContent.includes('David Chen denying fatigue or cost barrier on Tue');
const v10_rubric = cTueRubric.toLowerCase().includes('denies significant fatigue') || cTueRubric.toLowerCase().includes('hesitation regarding hyperkalemia');
check('V10', 'David Chen symptom and barrier alignment on Tue/Thu', v10_prompt && v10_rubric, `prompt: ${v10_prompt}, rubric: ${v10_rubric}`);

// V11: Angela Rodriguez interview & rubric alignment
const v11_prompt = promptsContent.includes('Angela Rodriguez uncertain condition durations or denying cramps');
const v11_rubric = bTueRubric.includes('denies cramps') || bTueRubric.includes('denies muscle') || bTueRubric.includes('uncertain');
check('V11', 'Angela Rodriguez interview disclosures & denials credited', v11_prompt && v11_rubric, `prompt: ${v11_prompt}, rubric: ${v11_rubric}`);

// V12: Losartan titration safe & reasonable
const bWedRubric = JSON.stringify(rubrics['Week2_Patient_B_Wednesday'] || '');
const v12_prompt = promptsContent.includes('Titrating losartan to 100 mg daily') && promptsContent.includes('MUST NOT be placed in unsafe_flags');
const v12_rubric = bWedRubric.includes('100 mg');
check('V12', 'Losartan titration to 100 mg daily is non-punitive and not unsafe', v12_prompt && v12_rubric, `prompt: ${v12_prompt}, rubric: ${v12_rubric}`);

// V13: KDIGO and guideline citations optional year
const v13_prompt = promptsContent.includes('formal publication year is omitted') && promptsContent.includes('award FULL CREDIT for guideline citation');
check('V13', 'Guideline citation items award full credit with or without publication year', v13_prompt, `prompt: ${v13_prompt}`);

// V14: Clear LDL goals & statin titration
const v14_prompt = promptsContent.includes('conditional lipid optimization/ezetimibe discussion');
const v14_david = cWedRubric.includes('<70') || cWedRubric.includes('70 mg/dL');
check('V14', 'LDL targets & statin titration rubric criteria clear and guideline-concordant', v14_prompt && v14_david, `prompt: ${v14_prompt}, david: ${v14_david}`);

// V15: BP target <130/80 mmHg in CKD
const v15_prompt = promptsContent.includes('either <130/80 mmHg (per 2025 AHA/ACC Hypertension in CKD) or systolic <120 mmHg');
const v15_rubric = aTueRubric.includes('<130/80') || aTueRubric.includes('130/80');
check('V15', 'BP target <130/80 mmHg accepted in CKD across guidelines', v15_prompt && v15_rubric, `prompt: ${v15_prompt}, rubric: ${v15_rubric}`);

// V16: Angela Thu UACR cautious interpretation
const bThuRubric = JSON.stringify(rubrics['Week2_Patient_B_Thursday'] || '');
const v16_rubric = bThuRubric.includes('persistent A2') || bThuRubric.includes('microalbuminuria') || bThuRubric.includes('155');
const v16_prompt = promptsContent.includes('cautious interpretation of small albuminuria trends');
check('V16', 'Angela Thu UACR cautious interpretation accepted', v16_rubric && v16_prompt, `rubric: ${v16_rubric}, prompt: ${v16_prompt}`);

// V17: Objective extra "Missing" badge fix
const v17_tabs = chartTabsContent.includes('isAbsent') && chartTabsContent.includes('o.flag !== \'missing\'');
check('V17', 'Objective extra populated data does not display Missing badge', v17_tabs, `tabs: ${v17_tabs}`);

// V18: Michael Thu LDL row annotation
const v18_pt = patientsW2Content.includes("trend: '132 → 96 → 84 mg/dL'") || patientsW2Content.includes("132 -> 96 -> 84") || patientsW2Content.includes("132 → 96 → 84");
check('V18', 'Michael Turner Thu LDL row displays LDL trend not UACR', v18_pt, `pt: ${v18_pt}`);

// V19: Angela Tue BMI calculation 36.3
const v19_pt = patientsW2Content.includes("bmi: '36.3'") || patientsW2Content.includes("bmi: \"36.3\"");
check('V19', 'Angela Rodriguez Tue BMI is accurately 36.3 kg/m2', v19_pt, `pt: ${v19_pt}`);

console.log('\n--- SUMMARY ---');
const total = results.length;
const passed = results.filter(r => r.pass).length;
console.log(`Passed ${passed} / ${total} checks.`);
if (passed === total) {
  console.log('ALL 19 AUDIT FINDINGS (V01 - V19) VERIFIED SUCCESSFULLY!');
} else {
  console.log('FAILURES DETECTED! Review details above.');
  process.exit(1);
}
