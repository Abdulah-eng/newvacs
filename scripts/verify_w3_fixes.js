const fs = require('fs');
const path = require('path');

console.log('==================================================');
console.log('RUNNING WEEK 3 VACS AUDIT VERIFICATION SUITE');
console.log('==================================================\n');

let failed = false;

// 1. Verify Granular Rubrics
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

console.log('1. Checking Week 3 Rubric Normalization (Exact 100.00 pts, Sec 1: 25, Sec 2: 15, Sec 3: 30, Sec 4: 25, Sec 5: 5)...');
for (const key of w3Keys) {
  const rub = rubrics[key];
  if (!rub) {
    console.error(`FAIL: Missing rubric ${key}`);
    failed = true;
    continue;
  }

  const sec = {};
  let total = 0;
  for (const it of rub) {
    const s = it.section ? String(it.section) : it.id[0];
    sec[s] = (sec[s] || 0) + it.points;
    total += it.points;
  }
  total = Math.round(total * 100) / 100;

  const s1 = Math.round((sec['1'] || 0) * 100) / 100;
  const s2 = Math.round((sec['2'] || 0) * 100) / 100;
  const s3 = Math.round((sec['3'] || 0) * 100) / 100;
  const s4 = Math.round((sec['4'] || 0) * 100) / 100;
  const s5 = Math.round((sec['5'] || 0) * 100) / 100;

  if (Math.abs(total - 100.0) > 0.001 ||
      Math.abs(s1 - 25.0) > 0.001 ||
      Math.abs(s2 - 15.0) > 0.001 ||
      Math.abs(s3 - 30.0) > 0.001 ||
      Math.abs(s4 - 25.0) > 0.001 ||
      Math.abs(s5 - 5.0) > 0.001) {
    console.error(`FAIL: ${key} invalid totals -> Total: ${total}, Sec1: ${s1}, Sec2: ${s2}, Sec3: ${s3}, Sec4: ${s4}, Sec5: ${s5}`);
    failed = true;
  } else {
    console.log(`  PASS: ${key} -> 100.00 pts (Sec1: ${s1}, Sec2: ${s2}, Sec3: ${s3}, Sec4: ${s4}, Sec5: ${s5})`);
  }
}

// 2. Checking specific rubric criteria
console.log('\n2. Checking Key Audit Fixes in Rubrics...');
const checks = [
  { key: 'Week3_Patient_C_Wednesday', id: '1E.28', test: it => it.fullCredit.toLowerCase().includes('sulfonamide') && it.fullCredit.includes('NOT require NKDA'), desc: 'Maria Wed Allergy: Sulfonamide without NKDA penalty' },
  { key: 'Week3_Patient_C_Thursday', id: '1E.9', test: it => it.fullCredit.toLowerCase().includes('sulfonamide') && it.fullCredit.includes('NOT require NKDA'), desc: 'Maria Thu Allergy: Sulfonamide without NKDA penalty' },
  { key: 'Week3_Patient_C_Wednesday', id: '1E.5', test: it => it.fullCredit.includes('Trelegy') && it.fullCredit.includes('separate tiotropium is NOT prescribed'), desc: 'Maria Wed: Trelegy includes LAMA (no duplicate tiotropium)' },
  { key: 'Week3_Patient_B_Tuesday', id: '3A.5', test: it => it.fullCredit.includes('Group B') && it.fullCredit.includes('Group E'), desc: 'Bob Tue: Accepts both GOLD Group B and Group E' },
  { key: 'Week3_Patient_B_Tuesday', id: '3A.17', test: it => it.zeroCredit === '—', desc: 'Bob Tue: 3A.17 zeroCredit neutralized' },
  { key: 'Week3_Patient_B_Tuesday', id: '3E.6', test: it => it.zeroCredit === '—', desc: 'Bob Tue: 3E.6 zeroCredit neutralized' },
  { key: 'Week3_Patient_B_Tuesday', id: '4G.2', test: it => it.zeroCredit === '—', desc: 'Bob Tue: 4G.2 zeroCredit neutralized' },
  { key: 'Week3_Patient_B_Tuesday', id: '5C.2', test: it => it.zeroCredit === '—', desc: 'Bob Tue: 5C.2 zeroCredit neutralized' },
  { key: 'Week3_Patient_B_Wednesday', id: '3A.11', test: it => it.zeroCredit === '—', desc: 'Bob Wed: 3A.11 zeroCredit neutralized' },
  { key: 'Week3_Patient_B_Wednesday', id: '4B.4', test: it => it.zeroCredit === '—' && it.fullCredit.includes('coffee'), desc: 'Bob Wed: 4B.4 coffee routine pairing' },
  { key: 'Week3_Patient_B_Wednesday', id: '4B.5', test: it => it.zeroCredit === '—' && it.fullCredit.includes('blow into'), desc: 'Bob Wed: 4B.5 technique education full credit' },
  { key: 'Week3_Patient_B_Wednesday', id: '4G.2', test: it => it.zeroCredit === '—', desc: 'Bob Wed: 4G.2 follow-up timing' },
  { key: 'Week3_Patient_B_Thursday', id: '4A.1', test: it => it.fullCredit.includes('triple therapy') && it.fullCredit.includes('Trelegy'), desc: 'Bob Thu: Escalation to triple therapy (Trelegy)' },
  { key: 'Week3_Patient_B_Thursday', id: '1D.10', test: it => it.zeroCredit === '—', desc: 'Bob Thu: 1D.10 affordability confirmed' },
  { key: 'Week3_Patient_B_Thursday', id: '3A.12', test: it => it.zeroCredit === '—', desc: 'Bob Thu: 3A.12 adherence verified' },
  { key: 'Week3_Patient_B_Thursday', id: '4C.1', test: it => it.zeroCredit === '—' && it.fullCredit.includes('rinse'), desc: 'Bob Thu: 4C.1 mouth rinsing instructions' },
  { key: 'Week3_Patient_B_Thursday', id: '4G.1', test: it => it.zeroCredit === '—', desc: 'Bob Thu: 4G.1 longitudinal monitoring' },
  { key: 'Week3_Patient_A_Tuesday', id: '1B.13', test: it => it.fullCredit.includes('5-day prednisone course 6 weeks ago'), desc: 'Sarah Tue: Accepts 5-day prednisone burst 6 weeks ago' },
  { key: 'Week3_Patient_A_Tuesday', id: '1C.2', test: it => it.fullCredit.includes('age 8'), desc: 'Sarah Tue: Accepts diagnosis age 8' },
  { key: 'Week3_Patient_A_Wednesday', id: '1A.7', test: it => it.fullCredit.includes('SMART'), desc: 'Sarah Wed: SMART therapy continuation' },
  { key: 'Week3_Patient_A_Wednesday', id: '3A.11', test: it => it.fullCredit.includes('escalation') && it.zeroCredit === '—', desc: 'Sarah Wed: No escalation penalty for 3A.11' },
  { key: 'Week3_Patient_A_Wednesday', id: '1C.5', test: it => it.fullCredit.includes('surgeries') && it.zeroCredit === '—', desc: 'Sarah Wed: No surgery penalty for 1C.5' },
  { key: 'Week3_Patient_A_Wednesday', id: '4G.2', test: it => it.fullCredit.includes('reassess') && it.zeroCredit === '—', desc: 'Sarah Wed: Follow-up plan 4G.2' },
  { key: 'Week3_Patient_A_Thursday', id: '3A.1', test: it => it.fullCredit.includes('ACT 22'), desc: 'Sarah Thu: Well-controlled ACT 22' },
];

for (const c of checks) {
  const rub = rubrics[c.key];
  const item = rub?.find(x => x.id === c.id);
  if (!item || !c.test(item)) {
    console.error(`FAIL: ${c.desc} (${c.key} ${c.id})`);
    failed = true;
  } else {
    console.log(`  PASS: ${c.desc}`);
  }
}

// Check that no "model note" traps remain in Bob Wed
const bobWed = rubrics['Week3_Patient_B_Wednesday'];
const modelNoteTraps = bobWed.filter(it => (it.zeroCredit || '').toLowerCase().includes('model note'));
if (modelNoteTraps.length > 0) {
  console.error(`FAIL: ${modelNoteTraps.length} model note traps remain in Week3_Patient_B_Wednesday`);
  failed = true;
} else {
  console.log('  PASS: Zero "model note" traps in Week3_Patient_B_Wednesday');
}

// 3. Checking Case Data (src/data/patientsW3.js)...
console.log('\n3. Checking Case Data (src/data/patientsW3.js)...');
const patientsW3Path = path.join(__dirname, '../src/data/patientsW3.js');
const patientsW3Code = fs.readFileSync(patientsW3Path, 'utf8');

if (!patientsW3Code.includes("spo2Qualifier: 'on room air'")) {
  console.error("FAIL: patientsW3.js missing spo2Qualifier: 'on room air'");
  failed = true;
} else {
  console.log("  PASS: patientsW3.js contains spo2Qualifier: 'on room air'");
}

if (!patientsW3Code.includes("title: 'ACO Pharmacotherapy Initiation'")) {
  console.error("FAIL: Maria Tue assessment card not updated to initial ACO therapy");
  failed = true;
} else {
  console.log("  PASS: Maria Tue assessment card updated to initial ACO therapy (Trelegy initiation)");
}

if (!patientsW3Code.includes("title: 'Asthma Control & Inhaler Technique'")) {
  console.error("FAIL: Sarah Wed assessment card not updated to Asthma Control & Inhaler Technique");
  failed = true;
} else {
  console.log("  PASS: Sarah Wed assessment card updated to Asthma Control & Inhaler Technique");
}

if (!patientsW3Code.includes("title: 'COPD Triple Therapy Escalation Assessment'")) {
  console.error("FAIL: Bob Thu assessment card not updated to COPD Triple Therapy Escalation Assessment");
  failed = true;
} else {
  console.log("  PASS: Bob Thu assessment card updated to COPD Triple Therapy Escalation Assessment");
}

// Check Bob Thu specifically for ACT score removal
const bobThuObj = patientsW3Code.slice(patientsW3Code.indexOf("const bobThu ="), patientsW3Code.indexOf("const mariaTue ="));
if (bobThuObj.includes("ACT Score")) {
  console.error("FAIL: Bob Thu still contains contradictory ACT Score");
  failed = true;
} else {
  console.log("  PASS: Bob Thu contradictory ACT Score removed");
}

// 4. Checking Rule 32 in prompts.js
console.log('\n4. Checking Rule 32 in src/lib/ai/prompts.js...');
const promptsPath = path.join(__dirname, '../src/lib/ai/prompts.js');
const promptsCode = fs.readFileSync(promptsPath, 'utf8');

if (!promptsCode.includes("32. For Week 3 encounters (Sarah Thompson, Bob Jenkins, Maria Thompson):")) {
  console.error("FAIL: prompts.js missing Rule 32");
  failed = true;
} else {
  console.log("  PASS: prompts.js contains comprehensive Rule 32 for Week 3");
}

if (!promptsCode.includes("Bob Jenkins Tuesday:") || !promptsCode.includes("Bob Jenkins Wednesday:") || !promptsCode.includes("Bob Jenkins Thursday:")) {
  console.error("FAIL: prompts.js missing Bob Jenkins sections");
  failed = true;
} else {
  console.log("  PASS: prompts.js contains Bob Jenkins Tuesday, Wednesday, and Thursday guidelines");
}

console.log('\n==================================================');
if (failed) {
  console.error('VERIFICATION FAILED: One or more checks failed.');
  process.exit(1);
} else {
  console.log('ALL AUDIT CHECKS PASSED PERFECTLY!');
  console.log('==================================================');
}
