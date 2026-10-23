const fs = require('fs');
const assert = require('assert');
const path = require('path');

console.log('================================================================');
console.log('  VACS Week 4 Final Clinical and Operational Audit Verification');
console.log('================================================================\n');

const patientsW4 = require('../src/data/patientsW4.js');
const rubrics = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/granular_rubrics.json'), 'utf8'));
const prompts = fs.readFileSync(path.join(__dirname, '../src/lib/ai/prompts.js'), 'utf8');
const chartTabs = fs.readFileSync(path.join(__dirname, '../src/components/ChartTabs.jsx'), 'utf8');
const iconMap = fs.readFileSync(path.join(__dirname, '../src/lib/iconMap.js'), 'utf8');
const subjectiveTab = fs.readFileSync(path.join(__dirname, '../src/components/SubjectiveTab.jsx'), 'utf8');

let passed = 0;
let total = 36;

// 1. MT-TUE-01: 2A.5 full credit accepts SpO2 98% with or without room air
try {
  const rub = rubrics['Week4_Patient_A_Tuesday'];
  const item2A5 = rub.find(x => x.id === '2A.5');
  assert(item2A5.fullCredit.includes('with or without'));
  assert(prompts.includes('Oxygen delivery status'));
  console.log('✅ MT-TUE-01: 2A.5 credits SpO2 98% with or without room air qualifier');
  passed++;
} catch (e) { console.error('❌ MT-TUE-01 failed:', e.message); }

// 2. MT-TUE-02: 3D.5 full credit accepts "remains appropriate / indicated / recommended"
try {
  const rub = rubrics['Week4_Patient_A_Tuesday'];
  const item3D5 = rub.find(x => x.id === '3D.5');
  assert(item3D5.fullCredit.includes('indicated') || item3D5.fullCredit.includes('recommended'));
  assert(prompts.includes('Michael Thompson Tuesday: Award FULL CREDIT for preventive care (3D.5)'));
  console.log('✅ MT-TUE-02: 3D.5 accepts equivalent preventive care language (indicated/recommended/appropriate)');
  passed++;
} catch (e) { console.error('❌ MT-TUE-02 failed:', e.message); }

// 3. MT-WED-01: Detailed vitals timestamp dynamically uses v.vitalsTime
try {
  assert(chartTabs.includes('const vTime = v.vitalsTime ||'));
  assert(!chartTabs.includes("label: 'Office BP', time: '06/23/2026 09:14'"));
  console.log('✅ MT-WED-01: VitalsTab uses dynamic vitals timestamp rather than hardcoded 06/23/2026');
  passed++;
} catch (e) { console.error('❌ MT-WED-01 failed:', e.message); }

// 4. MT-WED-02: Mosteller BSA calculates dynamically for height in ft/in
try {
  assert(chartTabs.includes("v.height).match(/(\\d+)\\s*(?:'|ft"));
  console.log('✅ MT-WED-02: getMostellerBsa dynamically supports ft and in height strings');
  passed++;
} catch (e) { console.error('❌ MT-WED-02 failed:', e.message); }

// 5. MT-WED-03: Baseline weight and natriuretic peptide assay distinction in Wednesday objective trend
try {
  const c = patientsW4.W4_CASES.find(x => x.id === 'w4-michael_t4-wed');
  const trend = c.OBJECTIVE_EXTRA.find(x => x.label === 'Objective Trend Analysis');
  assert(trend.value.includes('baseline 102 kg to 101 kg'));
  assert(trend.value.includes('noting difference in assay from baseline BNP to follow-up NT-proBNP'));
  console.log('✅ MT-WED-03: MT Wednesday objective trend reconciles baseline 102 kg and notes BNP vs NT-proBNP assays');
  passed++;
} catch (e) { console.error('❌ MT-WED-03 failed:', e.message); }

// 6. MT-THU-01: Spironolactone 1A.9 and 3A.19 do not require "most recent addition"
try {
  const rub = rubrics['Week4_Patient_A_Thursday'];
  const item1A9 = rub.find(x => x.id === '1A.9');
  const item3A19 = rub.find(x => x.id === '3A.19');
  assert(item1A9.fullCredit.includes('active GDMT pillar'));
  assert(item3A19.fullCredit.includes('active/continued as MRA pillar'));
  assert(prompts.includes('Michael Thompson Thursday: Award FULL CREDIT for spironolactone (1A.9, 3A.19)'));
  console.log('✅ MT-THU-01: Spironolactone criteria 1A.9 and 3A.19 credit continuation without forcing "most recent addition"');
  passed++;
} catch (e) { console.error('❌ MT-THU-01 failed:', e.message); }

// 7. MT-THU-02: 2A.5 full credit accepts 98% with or without room air
try {
  const rub = rubrics['Week4_Patient_A_Thursday'];
  const item2A5 = rub.find(x => x.id === '2A.5');
  assert(item2A5.fullCredit.includes('with or without'));
  console.log('✅ MT-THU-02: MT Thursday 2A.5 credits 98% with or without room air qualifier');
  passed++;
} catch (e) { console.error('❌ MT-THU-02 failed:', e.message); }

// 8. MT-THU-03: 3A.6 full credit accepts NT-proBNP 165 -> 92 or overall from baseline BNP 320
try {
  const rub = rubrics['Week4_Patient_A_Thursday'];
  const item3A6 = rub.find(x => x.id === '3A.6');
  assert(item3A6.fullCredit.includes('165') || item3A6.fullCredit.includes('320'));
  const c = patientsW4.W4_CASES.find(x => x.id === 'w4-michael_t4-thu');
  const trend = c.OBJECTIVE_EXTRA.find(x => x.label === 'Objective Trend & Home Vitals');
  assert(trend.value.includes('baseline BNP 320 pg/mL') && trend.value.includes('previous NT-proBNP 165 pg/mL'));
  assert(prompts.includes('biomarkers (3A.6)'));
  console.log('✅ MT-THU-03: 3A.6 credits NT-proBNP 165->92 same-assay trend and distinguishes baseline BNP 320');
  passed++;
} catch (e) { console.error('❌ MT-THU-03 failed:', e.message); }

// 9. AB-TUE-01: 2A.6 full credit accepts SpO2 98% with or without room air
try {
  const rub = rubrics['Week4_Patient_B_Tuesday'];
  const item2A6 = rub.find(x => x.id === '2A.6');
  assert(item2A6.fullCredit.includes('with or without'));
  console.log('✅ AB-TUE-01: AB Tuesday 2A.6 credits SpO2 98% with or without room air');
  passed++;
} catch (e) { console.error('❌ AB-TUE-01 failed:', e.message); }

// 10. AB-TUE-02: 3B.13 accepts adherence, access, or education as immediate priorities across note
try {
  const rub = rubrics['Week4_Patient_B_Tuesday'];
  const item3B13 = rub.find(x => x.id === '3B.13');
  assert(item3B13.fullCredit.includes('access intervention') || item3B13.fullCredit.includes('across note'));
  assert(prompts.includes('Angela Brooks Tuesday: Award FULL CREDIT for adherence & education priorities (3B.13)'));
  console.log('✅ AB-TUE-02: 3B.13 credits adherence, access, and education priorities across note');
  passed++;
} catch (e) { console.error('❌ AB-TUE-02 failed:', e.message); }

// 11. AB-WED-01: 2A.6 full credit accepts 98% with or without room air
try {
  const rub = rubrics['Week4_Patient_B_Wednesday'];
  const item2A6 = rub.find(x => x.id === '2A.6');
  assert(item2A6.fullCredit.includes('with or without'));
  console.log('✅ AB-WED-01: AB Wednesday 2A.6 credits SpO2 98% with or without room air');
  passed++;
} catch (e) { console.error('❌ AB-WED-01 failed:', e.message); }

// 12. AB-WED-02: 3A.17 full credit accepts HF stable without forcing link to apixaban omission
try {
  const rub = rubrics['Week4_Patient_B_Wednesday'];
  const item3A17 = rub.find(x => x.id === '3A.17');
  assert(item3A17.fullCredit.includes('with or without referencing'));
  assert(prompts.includes('Angela Brooks Wednesday: Award FULL CREDIT for HFrEF stability (3A.17)'));
  console.log('✅ AB-WED-02: 3A.17 credits HFrEF stability on GDMT without requiring causal link to apixaban hold');
  passed++;
} catch (e) { console.error('❌ AB-WED-02 failed:', e.message); }

// 13. AB-WED-03: 3C.2 full credit accepts specific knowledge deficits (stroke risk, bruising vs major bleeding)
try {
  const rub = rubrics['Week4_Patient_B_Wednesday'];
  const item3C2 = rub.find(x => x.id === '3C.2');
  assert(item3C2.fullCredit.includes('stroke risk') || item3C2.fullCredit.includes('bruising'));
  assert(prompts.includes('knowledge gaps (3C.2)'));
  console.log('✅ AB-WED-03: 3C.2 credits patient-supported knowledge gaps (stroke risk magnitude & minor bruising)');
  passed++;
} catch (e) { console.error('❌ AB-WED-03 failed:', e.message); }

// 14. AB-WED-SAFE: Counseling script avoids claiming Hgb 13.0 "proves" no internal bleeding
try {
  const c = patientsW4.W4_CASES.find(x => x.id === 'w4-angela_b-wed');
  const counsel = c.COUNSELING[0].body[0];
  assert(!counsel.includes('proving there is no internal bleeding'));
  assert(counsel.includes('reassuringly stable'));
  console.log('✅ AB-WED-SAFE: Counseling script replaces categorical "proving" with clinically sound reassurance');
  passed++;
} catch (e) { console.error('❌ AB-WED-SAFE failed:', e.message); }

// 15. AB-THU-01: 3E.3 accepts Shingrix dose #2 administered today / completed
try {
  const rub = rubrics['Week4_Patient_B_Thursday'];
  const item3E3 = rub.find(x => x.id === '3E.3');
  assert(item3E3.fullCredit.includes('administered today') || item3E3.fullCredit.includes('completed'));
  assert(prompts.includes('Shingrix (3E.3)'));
  console.log('✅ AB-THU-01: 3E.3 accepts Shingrix dose #2 administered today / completed');
  passed++;
} catch (e) { console.error('❌ AB-THU-01 failed:', e.message); }

// 16. AB-THU-02: 3E.4 accepts Tdap booster administered today / gap closed
try {
  const rub = rubrics['Week4_Patient_B_Thursday'];
  const item3E4 = rub.find(x => x.id === '3E.4');
  assert(item3E4.fullCredit.includes('administered today') || item3E4.fullCredit.includes('gap closed'));
  assert(prompts.includes('Tdap (3E.4, 3E.5)'));
  console.log('✅ AB-THU-02: 3E.4 accepts Tdap booster administered today / gap closed');
  passed++;
} catch (e) { console.error('❌ AB-THU-02 failed:', e.message); }

// 17. AB-THU-03: 3E.5 accepts Tdap booster administered today / routine preventive care
try {
  const rub = rubrics['Week4_Patient_B_Thursday'];
  const item3E5 = rub.find(x => x.id === '3E.5');
  assert(item3E5.fullCredit.includes('administered today') || item3E5.fullCredit.includes('gaps closed'));
  console.log('✅ AB-THU-03: 3E.5 accepts completed same-day Tdap administration');
  passed++;
} catch (e) { console.error('❌ AB-THU-03 failed:', e.message); }

// 18. AB-THU-04: 2A.7 accepts SpO2 98% with or without room air
try {
  const rub = rubrics['Week4_Patient_B_Thursday'];
  const item2A7 = rub.find(x => x.id === '2A.7');
  assert(item2A7.fullCredit.includes('with or without'));
  console.log('✅ AB-THU-04: AB Thursday 2A.7 credits SpO2 98% with or without room air');
  passed++;
} catch (e) { console.error('❌ AB-THU-04 failed:', e.message); }

// 19. AB-THU-05: 3C.5 credits access to adherence linkage anywhere in note
try {
  const rub = rubrics['Week4_Patient_B_Thursday'];
  const item3C5 = rub.find(x => x.id === '3C.5');
  assert(item3C5.fullCredit.includes('anywhere in note'));
  assert(prompts.includes('access-to-adherence (3C.5)'));
  console.log('✅ AB-THU-05: 3C.5 credits access-to-adherence relationship anywhere in note');
  passed++;
} catch (e) { console.error('❌ AB-THU-05 failed:', e.message); }

// 20. AB-THU-06: 3D.6 credits education to adherence linkage anywhere in note
try {
  const rub = rubrics['Week4_Patient_B_Thursday'];
  const item3D6 = rub.find(x => x.id === '3D.6');
  assert(item3D6.fullCredit.includes('anywhere in note'));
  assert(prompts.includes('education-to-adherence (3D.6)'));
  console.log('✅ AB-THU-06: 3D.6 credits education-to-adherence relationship anywhere in note');
  passed++;
} catch (e) { console.error('❌ AB-THU-06 failed:', e.message); }

// 21. AB-THU-EMR: Objective trend weight (84 kg, BMI 30.8) and labs synchronized
try {
  const c = patientsW4.W4_CASES.find(x => x.id === 'w4-angela_b-thu');
  const trend = c.OBJECTIVE_EXTRA.find(x => x.label === 'Objective Trend & Lab Interpretations');
  assert(trend.value.includes('Wt 84 kg, BMI 30.8 kg/m²'));
  assert(trend.value.includes('Plt 241 x10³/mm³'));
  assert(trend.value.includes('Na 139 mEq/L'));
  console.log('✅ AB-THU-EMR: Objective trend weight 84 kg / BMI 30.8 and labs synchronized with structured records');
  passed++;
} catch (e) { console.error('❌ AB-THU-EMR failed:', e.message); }

// 22. RJ-TUE-01: 1B.13 accepts denial of lower extremity edema or peripheral edema
try {
  const rub = rubrics['Week4_Patient_C_Tuesday'];
  const item1B13 = rub.find(x => x.id === '1B.13');
  assert(item1B13.fullCredit.includes('peripheral edema'));
  assert(prompts.includes('edema denial (1B.13)'));
  console.log('✅ RJ-TUE-01: 1B.13 accepts peripheral edema or lower extremity edema denial');
  passed++;
} catch (e) { console.error('❌ RJ-TUE-01 failed:', e.message); }

// 23. RJ-TUE-02: 1B.21 accepts spouse/family shared concern about medications or dialysis
try {
  const rub = rubrics['Week4_Patient_C_Tuesday'];
  const item1B21 = rub.find(x => x.id === '1B.21');
  assert(item1B21.fullCredit.includes('dialysis') || item1B21.fullCredit.includes('family'));
  assert(prompts.includes('spousal concern (1B.21)'));
  console.log('✅ RJ-TUE-02: 1B.21 credits shared spouse/family concern regarding kidney decline or dialysis');
  passed++;
} catch (e) { console.error('❌ RJ-TUE-02 failed:', e.message); }

// 24. RJ-TUE-03: 4B.8 credits BP control as kidney-protective anywhere in note
try {
  const rub = rubrics['Week4_Patient_C_Tuesday'];
  const item4B8 = rub.find(x => x.id === '4B.8');
  assert(item4B8.fullCredit.includes('anywhere in note'));
  assert(prompts.includes('BP and diabetes management (4B.8, 4B.9)'));
  console.log('✅ RJ-TUE-03: 4B.8 credits BP control framed as kidney-protective anywhere in note');
  passed++;
} catch (e) { console.error('❌ RJ-TUE-03 failed:', e.message); }

// 25. RJ-TUE-04: 4B.9 credits diabetes management as kidney-protective anywhere in note
try {
  const rub = rubrics['Week4_Patient_C_Tuesday'];
  const item4B9 = rub.find(x => x.id === '4B.9');
  assert(item4B9.fullCredit.includes('anywhere in note'));
  console.log('✅ RJ-TUE-04: 4B.9 credits diabetes management framed as kidney-protective anywhere in note');
  passed++;
} catch (e) { console.error('❌ RJ-TUE-04 failed:', e.message); }

// 26. RJ-EMR-01: eGFR <= 44 flag maps to abnormal/low; FLAG_STYLES includes low
try {
  assert(iconMap.includes("low:     { hex: 'dc2626', label: 'Low'"));
  assert(chartTabs.includes("l.flag === 'high' || l.flag === 'low'"));
  console.log('✅ RJ-EMR-01: FLAG_STYLES includes low style and panelStatus treats low eGFR as Abnormal');
  passed++;
} catch (e) { console.error('❌ RJ-EMR-01 failed:', e.message); }

// 27. RJ-EMR-02: CKD 3b problem detail accurately reflects 12-month progressive decline
try {
  const c = patientsW4.W4_CASES.find(x => x.id === 'w4-robert_j4-tue');
  const ckdProblem = c.PROBLEMS.find(x => x.name.includes('Chronic Kidney Disease'));
  assert(ckdProblem.name.includes('Progressive Longitudinal Decline'));
  console.log('✅ RJ-EMR-02: CKD 3b problem header correctly reflects progressive decline rather than stable');
  passed++;
} catch (e) { console.error('❌ RJ-EMR-02 failed:', e.message); }

// 28. RJ-EMR-03: CHA2DS2-VASc calculated as 6 across Robert Jenkins encounters
try {
  const tue = patientsW4.W4_CASES.find(x => x.id === 'w4-robert_j4-tue');
  const wed = patientsW4.W4_CASES.find(x => x.id === 'w4-robert_j4-wed');
  const thu = patientsW4.W4_CASES.find(x => x.id === 'w4-robert_j4-thu');
  assert(tue.PROBLEMS.find(x => x.name.includes('Atrial Fibrillation')).detail.includes('CHA2DS2-VASc = 6'));
  assert(wed.PROBLEMS.find(x => x.name.includes('Atrial Fibrillation')).detail.includes('CHA2DS2-VASc = 6'));
  assert(thu.PROBLEMS.find(x => x.name.includes('Atrial Fibrillation')).detail.includes('CHA2DS2-VASc = 6'));
  assert(prompts.includes('Accept CHA2DS2-VASc calculated as 6'));
  console.log('✅ RJ-EMR-03: CHA2DS2-VASc = 6 reconciled across Robert Jenkins encounters & prompts accept 6 or 4');
  passed++;
} catch (e) { console.error('❌ RJ-EMR-03 failed:', e.message); }

// 29. RJ-EMR-04: BMI calculated accurately (28.3 kg/m² for 82 kg / 5'7")
try {
  const tue = patientsW4.W4_CASES.find(x => x.id === 'w4-robert_j4-tue');
  assert(tue.VITALS.bmi.includes('28.3'));
  console.log('✅ RJ-EMR-04: Robert Jenkins BMI 28.3 kg/m² accurately calculated from 82 kg and 5 ft 7 in');
  passed++;
} catch (e) { console.error('❌ RJ-EMR-04 failed:', e.message); }

// 30. RJ-WED-01: Miskeyed nosebleeds field in RJ Wednesday changed to procedural_planning + bleeding response added
try {
  const wed = patientsW4.W4_CASES.find(x => x.id === 'w4-robert_j4-wed');
  const procField = wed.INTERVIEW_FIELDS.find(x => x.key === 'procedural_planning');
  assert(procField !== undefined);
  const bleedTopic = wed.INTERVIEW_KNOWLEDGE.find(x => x.id === 'w4-robert_j4-wed_bleeding');
  assert(bleedTopic !== undefined);
  assert(prompts.includes('Do NOT issue a hidden-nosebleed warning'));
  console.log('✅ RJ-WED-01: Procedural planning key uncoupled from nosebleeds & dedicated bleeding response added');
  passed++;
} catch (e) { console.error('❌ RJ-WED-01 failed:', e.message); }

// 31. RJ-WED-02: 3C.10 and 4C.7 credit standard AF dose-reduction criteria (only SCr met -> 5 mg BID)
try {
  const rub = rubrics['Week4_Patient_C_Wednesday'];
  const item3C10 = rub.find(x => x.id === '3C.10');
  const item4C7 = rub.find(x => x.id === '4C.7');
  assert(item3C10.fullCredit.includes('standard AF criteria') || item3C10.fullCredit.includes('CKD Stage 3b'));
  assert(item4C7.fullCredit.includes('standard dose-reduction criteria') || item4C7.fullCredit.includes('CKD Stage 3b'));
  assert(prompts.includes('Robert Jenkins Wednesday: Award FULL CREDIT for apixaban dosing rationale (3C.10, 4C.7)'));
  console.log('✅ RJ-WED-02: 3C.10 and 4C.7 credit standard AF dosing criteria (only 1 of 3 met) without forcing eGFR cutoff');
  passed++;
} catch (e) { console.error('❌ RJ-WED-02 failed:', e.message); }

// 32. RJ-WED-03: 3D.2 credits active participation or engagement in shared decision-making
try {
  const rub = rubrics['Week4_Patient_C_Wednesday'];
  const item3D2 = rub.find(x => x.id === '3D.2');
  assert(item3D2.fullCredit.includes('engaged'));
  assert(prompts.includes('patient engagement (3D.2)'));
  console.log('✅ RJ-WED-03: 3D.2 credits active participation or engagement in shared decisions');
  passed++;
} catch (e) { console.error('❌ RJ-WED-03 failed:', e.message); }

// 33. RJ-THU-01: 2C.6 credits Hgb 13.3 g/dL stable trend (vs 13.4 g/dL) or above bleeding threshold
try {
  const rub = rubrics['Week4_Patient_C_Thursday'];
  const item2C6 = rub.find(x => x.id === '2C.6');
  assert(item2C6.fullCredit.includes('stable'));
  assert(prompts.includes('hemoglobin trend (2C.6)'));
  console.log('✅ RJ-THU-01: 2C.6 credits stable Hgb 13.3 g/dL (vs 13.4 g/dL) without requiring single universal cutoff');
  passed++;
} catch (e) { console.error('❌ RJ-THU-01 failed:', e.message); }

// 34. RJ-THU-02: 5B.1 prompt rule ensures students are not penalized for unelicited multivitamin dose
try {
  assert(prompts.includes('do not deduct points for daily multivitamin without an explicit tablet count'));
  const thu = patientsW4.W4_CASES.find(x => x.id === 'w4-robert_j4-thu');
  const otc = thu.INTERVIEW_KNOWLEDGE.find(x => x.id === 'w4-robert_j4-thu_otc');
  assert(otc.response.includes('one daily multivitamin tablet'));
  console.log('✅ RJ-THU-02: 5B.1 credits complete Rx meds without penalizing multivitamin & interview includes 1 tablet');
  passed++;
} catch (e) { console.error('❌ RJ-THU-02 failed:', e.message); }

// 35. RJ-THU-03: 4B.8 credits GDMT complete / well tolerated or continuation of 4 pillars
try {
  const rub = rubrics['Week4_Patient_C_Thursday'];
  const item4B8 = rub.find(x => x.id === '4B.8');
  assert(item4B8.fullCredit.includes('complete') || item4B8.fullCredit.includes('continues'));
  assert(prompts.includes('GDMT continuation (4B.8)'));
  console.log('✅ RJ-THU-03: 4B.8 credits GDMT continuation or complete/well-tolerated characterization');
  passed++;
} catch (e) { console.error('❌ RJ-THU-03 failed:', e.message); }

// 36. W4-RUBRICS-SUM: All 9 Week 4 rubrics sum to exactly 100.00 points
try {
  const w4Keys = Object.keys(rubrics).filter(k => k.startsWith('Week4_'));
  assert.strictEqual(w4Keys.length, 9);
  for (const k of w4Keys) {
    const sum = rubrics[k].reduce((acc, x) => acc + x.points, 0);
    assert(Math.abs(sum - 100.0) < 0.001, `${k} sum is ${sum}`);
  }
  console.log('✅ W4-RUBRICS-SUM: All 9 Week 4 rubrics sum to exactly 100.00 points');
  passed++;
} catch (e) { console.error('❌ W4-RUBRICS-SUM failed:', e.message); }

console.log('\n================================================================');
console.log(`  Summary: ${passed} / ${total} tests passed!`);
console.log('================================================================');

if (passed === total) {
  process.exit(0);
} else {
  process.exit(1);
}
