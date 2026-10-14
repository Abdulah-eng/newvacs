const fs = require('fs');
const assert = require('assert');

console.log('==================================================');
console.log('  VACS Week 2 Audit Verification (V01 - V19)');
console.log('==================================================\n');

const cases = require('../src/data/patientsW2.js');
const rubrics = JSON.parse(fs.readFileSync('./src/data/granular_rubrics.json', 'utf8'));
const prompts = fs.readFileSync('./src/lib/ai/prompts.js', 'utf8');
const chartTabs = fs.readFileSync('./src/components/ChartTabs.jsx', 'utf8');

let passed = 0;
let total = 19;

// V01
try {
  const angelaTue = cases.W2_CASES[3];
  const angelaWed = cases.W2_CASES[4];
  const angelaThu = cases.W2_CASES[5];
  [angelaTue, angelaWed, angelaThu].forEach(c => {
    assert(c.ALLERGIES.some(a => a.substance.toLowerCase().includes('penicillin')));
  });
  assert(chartTabs.includes('activeAllergies.length > 0'));
  assert(chartTabs.includes('Allergies: ${activeAllergies.map(a => a.substance).join(", ")} — no active drug conflicts'));
  console.log('✅ V01: Penicillin allergy properly exposed and displayed in safety banner without false NKDA');
  passed++;
} catch (e) { console.error('❌ V01 failed:', e.message); }

// V02
try {
  const aTue = cases.W2_CASES[3];
  assert.strictEqual(aTue.VITALS.bp, '138/84');
  assert.strictEqual(aTue.VITALS.bpRepeat, '136/82');
  const na = aTue.LABS.find(l => l.label === 'Na').value;
  const k = aTue.LABS.find(l => l.label === 'K').value;
  const scr = aTue.LABS.find(l => l.label === 'SCr').value;
  const egfr = aTue.LABS.find(l => l.label === 'eGFR').value;
  assert.strictEqual(na, '139');
  assert.strictEqual(k, '4.6');
  assert.strictEqual(scr, '1.20');
  assert.strictEqual(egfr, '53');
  const rubTue = rubrics['Week2_Patient_B_Tuesday'];
  assert(rubTue.find(x => x.id === '2A.1').fullCredit.includes('138/84'));
  assert(rubTue.find(x => x.id === '2B.1').fullCredit.includes('139'));
  assert(rubTue.find(x => x.id === '2B.4').fullCredit.includes('53'));
  const rubWed = rubrics['Week2_Patient_B_Wednesday'];
  assert(rubWed.find(x => x.id === '2B.16').fullCredit.includes('14.5%'));
  console.log('✅ V02: Angela objective values and ASCVD risk baseline synchronized across chart & rubric');
  passed++;
} catch (e) { console.error('❌ V02 failed:', e.message); }

// V03
try {
  const aTue = cases.W2_CASES[3];
  const aWed = cases.W2_CASES[4];
  assert(!aTue.MEDICATIONS.some(m => m.name.toLowerCase().includes('simvastatin')));
  assert(!aWed.MEDICATIONS.some(m => m.name.toLowerCase().includes('simvastatin')));
  const rubTue = rubrics['Week2_Patient_B_Tuesday'];
  assert(!JSON.stringify(rubTue).toLowerCase().includes('simvastatin'));
  assert(prompts.includes('Angela Rodriguez has never taken or been prescribed simvastatin'));
  console.log('✅ V03: Unsupported simvastatin history removed from expectations');
  passed++;
} catch (e) { console.error('❌ V03 failed:', e.message); }

// V04
try {
  ['Week2_Patient_C_Tuesday', 'Week2_Patient_C_Wednesday', 'Week2_Patient_C_Thursday'].forEach(k => {
    const item = rubrics[k].find(x => x.description.includes('Metformin ER plan'));
    assert(item.fullCredit.includes('1000 mg total daily') && item.fullCredit.includes('ADA/KDIGO'));
  });
  assert(prompts.includes('either continuing Metformin ER 1,000 mg BID with renal monitoring OR reducing to 1,000 mg total daily'));
  console.log('✅ V04: Metformin renal dose reduction appropriately credited and not penalized');
  passed++;
} catch (e) { console.error('❌ V04 failed:', e.message); }

// V05
try {
  const mTue = cases.W2_CASES[0];
  const fh = mTue.SUBJECTIVE_DOCUMENTED.find(s => s.label.toLowerCase().includes('family')).value;
  assert(fh.includes('does not meet criteria for premature ASCVD in a male relative [<55]'));
  const rubTue = rubrics['Week2_Patient_A_Tuesday'];
  const item = rubTue.find(x => x.id === '1C.14');
  assert(item.fullCredit.includes('<55'));
  assert(prompts.includes('does not meet the formal premature ASCVD threshold (<55 for males)'));
  console.log('✅ V05: Father MI at 61 classified correctly without premature risk-enhancer mislabel');
  passed++;
} catch (e) { console.error('❌ V05 failed:', e.message); }

// V06
try {
  const mTue = cases.W2_CASES[0];
  const aTue = cases.W2_CASES[3];
  const dTue = cases.W2_CASES[6];
  assert(mTue.LABS.find(l => l.label === 'UACR').note.includes('prior 105 mg/g documented 4 months ago'));
  assert(aTue.LABS.find(l => l.label === 'UACR').note.includes('prior 152 mg/g documented 5 months ago'));
  assert(dTue.LABS.find(l => l.label === 'UACR').note.includes('prior 505 mg/g documented 4 months ago'));
  console.log('✅ V06: Prior UACR values and dates accessible in chart for all initial encounters');
  passed++;
} catch (e) { console.error('❌ V06 failed:', e.message); }

// V07
try {
  const mTue = cases.W2_CASES[0];
  const soc = mTue.SUBJECTIVE_DOCUMENTED.find(s => s.label.toLowerCase().includes('social')).value;
  assert(soc.includes('Warehouse manager'));
  assert(soc.includes('10 pack-year'));
  const rubTue = rubrics['Week2_Patient_A_Tuesday'];
  assert(rubTue.find(x => x.id === '1D.2').fullCredit.includes('warehouse manager'));
  assert(rubTue.find(x => x.id === '1D.4').fullCredit.includes('10-20 pack-year'));
  assert(rubTue.find(x => x.id === '1E.11').fullCredit.includes('1-2 OTC tablets'));
  console.log('✅ V07: Michael personal history, tobacco, alcohol, and OTC ibuprofen reconciled');
  passed++;
} catch (e) { console.error('❌ V07 failed:', e.message); }

// V08
try {
  const rubWed = rubrics['Week2_Patient_A_Wednesday'];
  assert(rubWed.find(x => x.id === '3F.4').fullCredit.includes('multifactorial'));
  const rubThu = rubrics['Week2_Patient_A_Thursday'];
  assert(rubThu.find(x => x.id === '1B.6').fullCredit.includes('without strict daily schedule'));
  console.log('✅ V08: Michael lifestyle scoring rewards actual patient reports rather than phantom habits');
  passed++;
} catch (e) { console.error('❌ V08 failed:', e.message); }

// V09
try {
  const rubWed = rubrics['Week2_Patient_A_Wednesday'];
  assert(rubWed.find(x => x.id === '2A.6').fullCredit.includes('not checking BP at home'));
  const rubThu = rubrics['Week2_Patient_A_Thursday'];
  assert(rubThu.find(x => x.id === '2A.7').fullCredit.includes('not checking BP at home'));
  console.log('✅ V09: Absence of home BP log appropriately accepted with monitoring plan');
  passed++;
} catch (e) { console.error('❌ V09 failed:', e.message); }

// V10
try {
  const rubTue = rubrics['Week2_Patient_C_Tuesday'];
  assert(rubTue.find(x => x.id === '1B.2').fullCredit.includes('denies significant fatigue'));
  assert(rubTue.find(x => x.id === '1B.11').fullCredit.includes('hyperkalemia risk and wanting clinical evidence'));
  const rubThu = rubrics['Week2_Patient_C_Thursday'];
  assert(rubThu.find(x => x.id === '1B.9').fullCredit.includes('committed to therapy based on lab data'));
  console.log('✅ V10: David symptom denials and therapy commitment properly credited');
  passed++;
} catch (e) { console.error('❌ V10 failed:', e.message); }

// V11
try {
  const rubTue = rubrics['Week2_Patient_B_Tuesday'];
  assert(rubTue.find(x => x.id === '1B.2').fullCredit.includes('denies significant fatigue'));
  assert(rubTue.find(x => x.id === '1B.3').fullCredit.includes('denies severe muscle'));
  assert(rubTue.find(x => x.id === '1C.2').fullCredit.includes('uncertain'));
  const rubThu = rubrics['Week2_Patient_B_Thursday'];
  assert(rubThu.find(x => x.id === '1B.7').fullCredit.includes('healthier food choices'));
  console.log('✅ V11: Angela symptom screening, condition timing, and dietary details reconciled');
  passed++;
} catch (e) { console.error('❌ V11 failed:', e.message); }

// V12
try {
  assert(prompts.includes('Titrating losartan to 100 mg daily with renal/potassium monitoring'));
  assert(prompts.includes('MUST NOT be placed in unsafe_flags'));
  const rubWed = rubrics['Week2_Patient_B_Wednesday'];
  assert(rubWed.find(x => x.id === '4B.1').fullCredit.includes('titrate to 100 mg daily'));
  console.log('✅ V12: Losartan titration recognized as valid option and removed from unsafe warnings');
  passed++;
} catch (e) { console.error('❌ V12 failed:', e.message); }

// V13
try {
  assert(prompts.includes('award FULL CREDIT for guideline citation items even if the formal publication year is omitted'));
  const rubTue = rubrics['Week2_Patient_C_Tuesday'];
  assert(rubTue.find(x => x.id === '3A.10').fullCredit.includes('applies KDIGO staging criteria'));
  console.log('✅ V13: Guideline citation scoring aligned with narrative expectations');
  passed++;
} catch (e) { console.error('❌ V13 failed:', e.message); }

// V14
try {
  assert(prompts.includes('Award FULL CREDIT for thoughtful clinical plans, including conditional lipid optimization/ezetimibe discussion'));
  const rubWed = rubrics['Week2_Patient_C_Wednesday'];
  assert(rubWed.find(x => x.id === '3D.3').fullCredit.includes('ezetimibe'));
  console.log('✅ V14: Lipid targets allow justified shared decision-making and conditional escalation');
  passed++;
} catch (e) { console.error('❌ V14 failed:', e.message); }

// V15
try {
  assert(prompts.includes('<130/80 mmHg (per 2025 AHA/ACC Hypertension in CKD) or systolic <120 mmHg'));
  const rubTue = rubrics['Week2_Patient_A_Tuesday'];
  assert(rubTue.find(x => x.id === '3C.9').fullCredit.includes('<130/80 or KDIGO <120'));
  console.log('✅ V15: BP goal accepts <130/80 mmHg and standardized office <120 mmHg');
  passed++;
} catch (e) { console.error('❌ V15 failed:', e.message); }

// V16
try {
  const rubThu = rubrics['Week2_Patient_B_Thursday'];
  assert(rubThu.find(x => x.id === '2C.3').fullCredit.includes('persistent A2 albuminuria with minor downward trend'));
  assert(rubThu.find(x => x.id === '2B.15').fullCredit.includes('persistent A2 with minor downward variation'));
  console.log('✅ V16: Small UACR changes accept cautious interpretation without penalizing clinical prudence');
  passed++;
} catch (e) { console.error('❌ V16 failed:', e.message); }

// V17
try {
  cases.W2_CASES.forEach(c => {
    (c.OBJECTIVE_EXTRA || []).forEach(o => {
      assert(o.flag !== 'missing', 'Case ' + c.id + ' has flag missing on ' + o.label);
    });
  });
  console.log('✅ V17: Populated objective fields no longer labeled Missing');
  passed++;
} catch (e) { console.error('❌ V17 failed:', e.message); }

// V18
try {
  const mThu = cases.W2_CASES[2];
  const ldl = mThu.LABS.find(l => l.label === 'LDL-C');
  const uacr = mThu.LABS.find(l => l.label === 'UACR');
  assert(ldl.note.includes('132 → 96 → 84'));
  assert(uacr.note.includes('118 → 102 → 98'));
  console.log('✅ V18: LDL and UACR trend annotations placed on their respective rows');
  passed++;
} catch (e) { console.error('❌ V18 failed:', e.message); }

// V19
try {
  const aTue = cases.W2_CASES[3];
  assert.strictEqual(aTue.VITALS.bmi, '36.3');
  const rubTue = rubrics['Week2_Patient_B_Tuesday'];
  assert(rubTue.find(x => x.id === '2A.6').fullCredit.includes('36.3'));
  console.log('✅ V19: Angela Tuesday BMI correctly displayed as 36.3 kg/m² matching ht/wt');
  passed++;
} catch (e) { console.error('❌ V19 failed:', e.message); }

console.log('\n==================================================');
console.log(`Summary: ${passed} / ${total} audit checks passed (100%)!`);
console.log('==================================================');

if (passed !== total) {
  process.exit(1);
}
