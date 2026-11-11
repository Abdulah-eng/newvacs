// scripts/verify_w3_w5_audit_fixes.js
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== RUNNING VERIFICATION SUITE FOR WEEK 3 & WEEK 5 AUDIT FIXES ===\n');

let passCount = 0;
let totalTests = 0;

function test(description, fn) {
  totalTests++;
  try {
    fn();
    console.log(`  [PASS] Test ${totalTests}: ${description}`);
    passCount++;
  } catch (err) {
    console.error(`  [FAIL] Test ${totalTests}: ${description}`);
    console.error(`         Error: ${err.message}`);
  }
}

// 1. Verify granular_rubrics.json
const rubrics = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/granular_rubrics.json'), 'utf8'));

// Test 1-9: Week 3 rubric balances
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

w3Keys.forEach(k => {
  test(`${k} totals 100.00 pts with correct section targets`, () => {
    const rub = rubrics[k];
    assert(rub, `Rubric ${k} exists`);
    const secTotals = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 };
    rub.forEach(item => {
      const sec = item.id.charAt(0);
      secTotals[sec] = (secTotals[sec] || 0) + item.points;
    });
    const total = Object.values(secTotals).reduce((a, b) => a + b, 0);
    assert(Math.abs(total - 100.00) < 0.05, `Total is ${total}, expected 100.00`);
    assert(Math.abs(secTotals['1'] - 25.0) < 0.05, `Sec 1 is ${secTotals['1']}, expected 25.0`);
    assert(Math.abs(secTotals['2'] - 15.0) < 0.05, `Sec 2 is ${secTotals['2']}, expected 15.0`);
    assert(Math.abs(secTotals['3'] - 30.0) < 0.05, `Sec 3 is ${secTotals['3']}, expected 30.0`);
    assert(Math.abs(secTotals['4'] - 25.0) < 0.05, `Sec 4 is ${secTotals['4']}, expected 25.0`);
    assert(Math.abs(secTotals['5'] - 5.0) < 0.05, `Sec 5 is ${secTotals['5']}, expected 5.0`);
  });
});

// Test 10-18: Week 5 rubric balances
const w5Keys = [
  'Week5_Patient_A_Tuesday',
  'Week5_Patient_A_Wednesday',
  'Week5_Patient_A_Thursday',
  'Week5_Patient_B_Tuesday',
  'Week5_Patient_B_Wednesday',
  'Week5_Patient_B_Thursday',
  'Week5_Patient_C_Tuesday',
  'Week5_Patient_C_Wednesday',
  'Week5_Patient_C_Thursday'
];

w5Keys.forEach(k => {
  test(`${k} totals 100.00 pts with correct section targets`, () => {
    const rub = rubrics[k];
    assert(rub, `Rubric ${k} exists`);
    const secTotals = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 };
    rub.forEach(item => {
      const sec = item.id.charAt(0);
      secTotals[sec] = (secTotals[sec] || 0) + item.points;
    });
    const total = Object.values(secTotals).reduce((a, b) => a + b, 0);
    assert(Math.abs(total - 100.00) < 0.05, `Total is ${total}, expected 100.00`);
    assert(Math.abs(secTotals['1'] - 25.0) < 0.05, `Sec 1 is ${secTotals['1']}, expected 25.0`);
    assert(Math.abs(secTotals['2'] - 15.0) < 0.05, `Sec 2 is ${secTotals['2']}, expected 15.0`);
    assert(Math.abs(secTotals['3'] - 30.0) < 0.05, `Sec 3 is ${secTotals['3']}, expected 30.0`);
    assert(Math.abs(secTotals['4'] - 25.0) < 0.05, `Sec 4 is ${secTotals['4']}, expected 25.0`);
    assert(Math.abs(secTotals['5'] - 5.0) < 0.05, `Sec 5 is ${secTotals['5']}, expected 5.0`);
  });
});

// Test 19: Week 3 target deduction traps neutralized
test('Week 3 target deduction traps are neutralized in granular_rubrics.json', () => {
  const rubSatue = rubrics['Week3_Patient_A_Tuesday'];
  assert.strictEqual(rubSatue.find(i => i.id === '3D.6').zeroCredit, '—');

  const rubSaved = rubrics['Week3_Patient_A_Wednesday'];
  assert.strictEqual(rubSaved.find(i => i.id === '2C.6').zeroCredit, '—');

  const rubBwed = rubrics['Week3_Patient_B_Wednesday'];
  ['2A.13', '3B.6', '3B.7', '3C.9'].forEach(id => {
    assert.strictEqual(rubBwed.find(i => i.id === id).zeroCredit, '—');
  });

  const rubMwed = rubrics['Week3_Patient_C_Wednesday'];
  ['1B.3', '1B.9', '1B.22', '1B.24', '1C.16', '1D.5', '3C.17', '3C.19', '3D.14', '3E.7', '3E.8', '4A.13', '4A.14', '4A.15', '4A.17'].forEach(id => {
    assert.strictEqual(rubMwed.find(i => i.id === id).zeroCredit, '—');
  });

  const rubSthu = rubrics['Week3_Patient_A_Thursday'];
  const sthuIds = [
    '1B.15', '1C.8', '4C.5', '4C.6', '4D.3', '4D.4', '4D.6', '4D.7', '4D.8',
    '4E.1', '4E.2', '4E.3', '4E.4', '4E.6', '4E.7', '4E.8', '4E.9', '4E.10',
    '4F.1', '4F.2', '4F.3', '4F.4', '4G.1', '4G.2', '4G.4', '4G.5', '4G.6',
    '4G.7', '5A.3', '5A.4', '5B.1', '5B.3', '5C.2'
  ];
  sthuIds.forEach(id => {
    assert.strictEqual(rubSthu.find(i => i.id === id).zeroCredit, '—');
  });

  const rubBthu = rubrics['Week3_Patient_B_Thursday'];
  assert.strictEqual(rubBthu.find(i => i.id === '3E.8').zeroCredit, '—');
  assert.strictEqual(rubBthu.find(i => i.id === '5C.3').zeroCredit, '—');
});

// Test 20: Week 5 deduction traps neutralized
test('Week 5 deduction traps are neutralized in granular_rubrics.json', () => {
  // Test Sarah Mitchell Tue items
  const rubSatue = rubrics['Week5_Patient_A_Tuesday'];
  ['1B.8', '1B.9', '1B.11', '1F.9', '3C.5', '4B.7', '4C.4', '4F.6'].forEach(id => {
    assert.strictEqual(rubSatue.find(i => i.id === id).zeroCredit, '—', `Sarah Tue ${id} neutralized`);
  });

  // Test Jessica Ramirez Tue items
  const rubJtue = rubrics['Week5_Patient_B_Tuesday'];
  ['1A.6', '1B.8', '1E.6', '2A.9', '2B.6', '3A.7', '4A.1', '4B.1'].forEach(id => {
    assert.strictEqual(rubJtue.find(i => i.id === id).zeroCredit, '—', `Jessica Tue ${id} neutralized`);
  });

  // Test David Carter Tue items
  const rubDtue = rubrics['Week5_Patient_C_Tuesday'];
  ['1A.3', '1B.4', '1G.2', '2B.9', '2B.10', '2B.16', '2C.2'].forEach(id => {
    assert.strictEqual(rubDtue.find(i => i.id === id).zeroCredit, '—', `David Tue ${id} neutralized`);
  });
});

// 2. Verify patientsW3.js
const patientsW3Str = fs.readFileSync(path.join(__dirname, '../src/data/patientsW3.js'), 'utf8');

test('Sarah Tuesday education includes long-term disease control and self-management', () => {
  assert(patientsW3Str.includes('long-term disease control and self-management'));
});

test('Sarah Wednesday includes PEF note with spirometry and ACT', () => {
  assert(patientsW3Str.includes('Peak Expiratory Flow (PEF)'));
  assert(patientsW3Str.includes('spirometry (FEV1, FEV1/FVC) and ACT score (21) served as primary lung function and control monitoring tools in lieu of PEF measurement'));
});

test('Bob Wednesday includes BP 130/76, timeline expectations, maintenance understanding, and prior education note', () => {
  assert(patientsW3Str.includes('technique understanding remains incomplete despite prior education provided at the initial visit'));
  assert(patientsW3Str.includes('unrealistic expectations about symptom improvement timeline'));
  assert(patientsW3Str.includes('limited understanding of daily maintenance therapy benefits'));
  assert(patientsW3Str.includes('Blood pressure 130/76 is acceptable / controlled in the context of lisinopril therapy'));
});

test('Maria Wednesday includes wheezing denial, ED denial, married status, mepolizumab age >=6, CBC diff source, OCS risk escalation, and biologic patient education', () => {
  assert(patientsW3Str.includes('denies wheezing on presentation'));
  assert(patientsW3Str.includes('denies emergency department (ED) visits over past 12 months'));
  assert(patientsW3Str.includes('Married, lives with supportive spouse'));
  assert(patientsW3Str.includes('age >=6 years'));
  assert(patientsW3Str.includes('Complete Blood Count differential source'));
  assert(patientsW3Str.includes('risk increases with each additional OCS course per GINA 2025'));
  assert(patientsW3Str.includes('Provide patient education on mepolizumab mechanism of action'));
});

test('Sarah Thursday includes adherence report, rhinitis control, fluticasone dose, upper-lower airway link, self-management, GINA monitoring, vaccines, and follow-up', () => {
  assert(patientsW3Str.includes('Patient reports excellent, consistent adherence to Symbicort'));
  assert(patientsW3Str.includes('Allergic rhinitis is well controlled on daily fluticasone nasal spray and cetirizine'));
  assert(patientsW3Str.includes('fluticasone propionate nasal spray 50 mcg 1-2 sprays per nostril once daily'));
  assert(patientsW3Str.includes('controlling allergic rhinitis (upper airway) directly supports sustained lower airway asthma stability'));
  assert(patientsW3Str.includes('GINA assess-adjust-review cycle'));
  assert(patientsW3Str.includes('Recommend pneumococcal vaccination (PCV20) and administer Tdap booster'));
});

test('Bob Thursday has BP 128/76 and atorvastatin 20 mg (not 124/72 or 40 mg) and GOLD 2026 vaccine citation', () => {
  assert(patientsW3Str.includes('BP 128/76 at goal <130/80'));
  assert(patientsW3Str.includes('atorvastatin 20 mg daily'));
  assert(!patientsW3Str.includes('BP 124/72 at goal <130/80'));
  assert(!patientsW3Str.includes('atorvastatin 40 mg daily'));
  assert(patientsW3Str.includes('GOLD 2026 and CDC/ACIP guidelines: recommend PCV20'));
});

// 3. Verify patientsW5.js
const patientsW5Str = fs.readFileSync(path.join(__dirname, '../src/data/patientsW5.js'), 'utf8');

test('Sarah Mitchell marital status is Married / lives with husband across all visits (no single contradiction)', () => {
  assert(!patientsW5Str.includes('single (lives alone in suburban house'));
  assert(patientsW5Str.includes('Married, lives with husband in suburban home'));
});

test('Sarah Mitchell Tuesday HPI includes fatigue increasing through day, non-restorative sleep, lesson plan concentration, gradual onset, and follow-up adverse effect/adherence monitoring', () => {
  assert(patientsW5Str.includes('fatigue that increases throughout the day'));
  assert(patientsW5Str.includes('restless, non-restorative insufficient sleep'));
  assert(patientsW5Str.includes('rereading emails or lesson plans multiple times'));
  assert(patientsW5Str.includes('gradual onset over the past 4 to 5 months'));
  assert(patientsW5Str.includes('systematically monitor medication adherence and assess ongoing medication adverse effects at follow-up'));
});

test('Jessica Ramirez has ZERO references to Sertraline 50 mg; all are Sertraline 100 mg daily', () => {
  const w5Cases = JSON.parse(patientsW5Str.substring(patientsW5Str.indexOf('['), patientsW5Str.lastIndexOf(']') + 1));
  [3, 4, 5].forEach(i => {
    const caseStr = JSON.stringify(w5Cases[i]);
    const m = caseStr.match(/.{0,30}50\s*mg.{0,30}/gi) || [];
    assert.strictEqual(m.length, 0, `Case ${w5Cases[i].id} has ${m.length} matches for 50 mg: ${m.join('; ')}`);
  });
});

test('Jessica Ramirez Tuesday continues Sertraline 100 mg daily on $4 generic program without switching', () => {
  assert(patientsW5Str.includes('Continue generic Sertraline 100 mg PO daily available on $4 generic prescription program'));
  assert(patientsW5Str.includes('do not switch antidepressants or change dose at this time'));
});

test('Jessica Ramirez Wednesday continues generic Sertraline 100 mg daily for partial response toward remission', () => {
  assert(patientsW5Str.includes('Continue generic Sertraline 100 mg PO daily to target full remission of MDD and GAD per ACP and VA/DoD guidelines'));
});

test('David Carter has GAD as dedicated assessment card and plan section across encounters', () => {
  const w5Cases = JSON.parse(patientsW5Str.substring(patientsW5Str.indexOf('['), patientsW5Str.lastIndexOf(']') + 1));
  const davidTue = w5Cases[6];
  assert(davidTue.ASSESSMENT_CARDS.some(c => c.title.includes('Generalized Anxiety Disorder')));
  assert(davidTue.PLAN_SECTIONS.some(p => p.title.includes('Generalized Anxiety Disorder')));
});

test('David Carter Tuesday includes passive SI quotes, denial of active intent/plan/means, protective factors, and lethal means safety', () => {
  assert(patientsW5Str.includes("not waking up wouldn't be the worst thing"));
  assert(patientsW5Str.includes("wish I could just go to sleep and not wake up"));
  assert(patientsW5Str.includes("brother has removed and secured all firearms"));
  assert(patientsW5Str.includes("woodworking"));
  assert(patientsW5Str.includes("988 Suicide & Crisis Lifeline"));
});

// 4. Verify prompts.js
const promptsStr = fs.readFileSync(path.join(__dirname, '../src/lib/ai/prompts.js'), 'utf8');

test('prompts.js buildPatientInterviewPrompt does NOT contain Rule 33', () => {
  const interviewPromptEnd = promptsStr.indexOf('export function buildSoapGradingPrompt');
  const interviewSection = promptsStr.substring(0, interviewPromptEnd);
  assert(!interviewSection.includes('33. For Week 2 encounters'), 'Interview prompt does not contain Rule 33');
});

test('prompts.js buildSoapGradingPrompt contains Rule 32 enhancements, Rule 33, and Rule 34', () => {
  const soapSection = promptsStr.substring(promptsStr.indexOf('export function buildSoapGradingPrompt'));
  assert(soapSection.includes('32. For Week 3 encounters'), 'Soap prompt contains Rule 32');
  assert(soapSection.includes('Additional Week 3 Encounter Guidance'), 'Soap prompt contains Rule 32 enhancements');
  assert(soapSection.includes('33. For Week 2 encounters'), 'Soap prompt contains Rule 33');
  assert(soapSection.includes('34. For Week 5 encounters'), 'Soap prompt contains Rule 34');
});

console.log(`\n=== SUMMARY: ${passCount} / ${totalTests} TESTS PASSED ===\n`);
if (passCount !== totalTests) {
  process.exit(1);
}

