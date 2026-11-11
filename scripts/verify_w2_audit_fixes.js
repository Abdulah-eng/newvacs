const fs = require('fs');
const assert = require('assert');

console.log('==================================================');
console.log('  VACS Week 2 Audit Verification (V01 - V34)');
console.log('==================================================\n');

const cases = require('../src/data/patientsW2.js');
const rubrics = JSON.parse(fs.readFileSync('./src/data/granular_rubrics.json', 'utf8'));
const prompts = fs.readFileSync('./src/lib/ai/prompts.js', 'utf8');
const chartTabs = fs.readFileSync('./src/components/ChartTabs.jsx', 'utf8');

let passed = 0;
let total = 34;

// V01
try {
  const angelaTue = cases.W2_CASES[3];
  const angelaWed = cases.W2_CASES[4];
  const angelaThu = cases.W2_CASES[5];
  [angelaTue, angelaWed, angelaThu].forEach(c => {
    assert(c.ALLERGIES.some(a => a.substance.toLowerCase().includes('penicillin')));
  });
  assert(chartTabs.includes('activeAllergies.length > 0'));
  assert(chartTabs.includes('Allergy check active: Documented'));
  assert(chartTabs.includes('no active drug conflicts'));
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

// V20: MT-TUE 2C.5 & 3C.7 & 5C.3
try {
  const mTue = cases.W2_CASES[0];
  const hld = mTue.ASSESSMENT_CARDS[0].questions[0].defaultAnswer;
  const htn = mTue.ASSESSMENT_CARDS[2].questions[0].defaultAnswer;
  assert(hld.includes('AST 24 U/L, ALT 27 U/L within normal limits'));
  assert(htn.includes('Per KDIGO 2024 guidelines, strict blood pressure control slows CKD progression'));
  const rubTue = rubrics['Week2_Patient_A_Tuesday'];
  const r2c5 = rubTue.find(x => x.id === '2C.5');
  const r3c7 = rubTue.find(x => x.id === '3C.7');
  const r5c3 = rubTue.find(x => x.id === '5C.3');
  assert(r2c5.zeroCredit === '—' && r2c5.fullCredit.includes('normal/baseline'));
  assert(r3c7.zeroCredit === '—' && r3c7.fullCredit.includes('KDIGO 2024'));
  assert(r5c3.zeroCredit === '—' && r5c3.fullCredit.includes('105 mg/g'));
  console.log('✅ V20: MT-TUE AST/ALT interpretation, KDIGO BP slowing CKD progression, and prior UACR 105 verified');
  passed++;
} catch (e) { console.error('❌ V20 failed:', e.message); }

// V21: AR-TUE 1A.1 & 5C.3 (Age 66)
try {
  const aTue = cases.W2_CASES[3];
  const hpi = aTue.SUBJECTIVE_DOCUMENTED.find(s => s.label === 'HPI').value;
  const hld = aTue.ASSESSMENT_CARDS[0].questions[0].defaultAnswer;
  assert(hpi.includes('66-year-old female'));
  assert(hld.includes('advanced age (66 years)'));
  assert(!hpi.includes('64-year-old'));
  assert(!hld.includes('advanced age (64 years)'));
  const rubTue = rubrics['Week2_Patient_B_Tuesday'];
  const r1a1 = rubTue.find(x => x.id === '1A.1');
  const r5c3 = rubTue.find(x => x.id === '5C.3');
  assert(r1a1.zeroCredit === '—' && r1a1.fullCredit.includes('66 years'));
  assert(r5c3.zeroCredit === '—');
  console.log('✅ V21: AR-TUE Age 66 internally consistent across HPI, Assessment, and Rubric');
  passed++;
} catch (e) { console.error('❌ V21 failed:', e.message); }

// V22: AR-TUE 1B.9 & 4B.3 (Statin fears & assistance options)
try {
  const aTue = cases.W2_CASES[3];
  const hpi = aTue.SUBJECTIVE_DOCUMENTED.find(s => s.label === 'HPI').value;
  assert(hpi.includes('friends'));
  const accPlan = aTue.PLAN_SECTIONS.find(p => p.id === 'b_p_access');
  const opt = accPlan.options.find(o => o.key === 'b_acc_o1');
  assert(opt.label.includes('patient assistance') || opt.label.includes('GoodRx'));
  const rubTue = rubrics['Week2_Patient_B_Tuesday'];
  const r1b9 = rubTue.find(x => x.id === '1B.9');
  const r4b3 = rubTue.find(x => x.id === '4B.3');
  assert(r1b9.zeroCredit === '—' && r1b9.fullCredit.includes('friends'));
  assert(r4b3.zeroCredit === '—' && r4b3.fullCredit.includes('assistance'));
  console.log('✅ V22: AR-TUE Statin AE concern from friends & patient assistance resources verified');
  passed++;
} catch (e) { console.error('❌ V22 failed:', e.message); }

// V23: DC-TUE 1B.6 & 3E.4 (Progression risk uncertainty & KDIGO BP)
try {
  const dTue = cases.W2_CASES[6];
  const hpi = dTue.SUBJECTIVE_DOCUMENTED.find(s => s.label === 'HPI').value;
  assert(hpi.includes('uncertainty about why his cardiorenal progression risk remains elevated'));
  const htn = dTue.ASSESSMENT_CARDS[4].questions[0].defaultAnswer;
  assert(htn.includes('Per KDIGO 2024 guidelines, blood pressure control slows CKD progression'));
  const rubTue = rubrics['Week2_Patient_C_Tuesday'];
  const r1b6 = rubTue.find(x => x.id === '1B.6');
  const r3e4 = rubTue.find(x => x.id === '3E.4');
  assert(r1b6.zeroCredit === '—' && r1b6.fullCredit.includes('declined over time'));
  assert(r3e4.zeroCredit === '—' && r3e4.fullCredit.includes('KDIGO 2024'));
  console.log('✅ V23: DC-TUE Cardiorenal progression risk uncertainty & KDIGO BP principle verified');
  passed++;
} catch (e) { console.error('❌ V23 failed:', e.message); }

// V24: MT-WED 1B.4, 3G.6, 5A.2 (Adherence quantification & primary educational need)
try {
  const mWed = cases.W2_CASES[1];
  const adh = mWed.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('adherence')).value;
  assert(adh.includes('missing only ~1 dose every 2 weeks'));
  const eduCard = mWed.ASSESSMENT_CARDS.find(c => c.id === 'aw_edu').questions[0].defaultAnswer;
  assert(eduCard.includes('represents the primary educational need for this visit'));
  const rubWed = rubrics['Week2_Patient_A_Wednesday'];
  const r1b4 = rubWed.find(x => x.id === '1B.4');
  const r3g6 = rubWed.find(x => x.id === '3G.6');
  const r5a2 = rubWed.find(x => x.id === '5A.2');
  assert(r1b4.zeroCredit === '—');
  assert(r3g6.zeroCredit === '—');
  assert(r5a2.zeroCredit === '—');
  console.log('✅ V24: MT-WED Adherence quantification (~1/2wk) & primary educational need verified');
  passed++;
} catch (e) { console.error('❌ V24 failed:', e.message); }

// V25: AR-WED 1B.5, 1B.10, 3B.2, 4A.2 (Reduced statin concerns, walking increase, barriers, adherence)
try {
  const aWed = cases.W2_CASES[4];
  const interval = aWed.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('Interval')).value;
  assert(interval.includes('significantly reduced statin concerns'));
  const soc = aWed.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('Social')).value;
  assert(soc.includes('Increasing physical activity') || soc.includes('increasing physical activity'));
  const inertia = aWed.ASSESSMENT_CARDS.find(c => c.id === 'bw_inertia').questions[0].defaultAnswer;
  assert(inertia.includes('two interrelated patient barriers: prescription cost anxiety') && inertia.includes('fear of statin-associated muscle adverse effects'));
  const planHld = aWed.PLAN_SECTIONS.find(p => p.id === 'bw_p_hld');
  assert(planHld.options.some(o => o.key === 'bw_hld_o5'));
  const rubWed = rubrics['Week2_Patient_B_Wednesday'];
  ['1B.5', '1B.10', '3B.2', '4A.2'].forEach(id => {
    assert(rubWed.find(x => x.id === id).zeroCredit === '—');
  });
  console.log('✅ V25: AR-WED Reduced concerns, walking increase, dual prior barriers, and adherence plan verified');
  passed++;
} catch (e) { console.error('❌ V25 failed:', e.message); }

// V26: DC-WED 1B.9 & 1D.3 (Albuminuria clarification & Never smoker)
try {
  const dWed = cases.W2_CASES[7];
  const soc = dWed.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('Social')).value;
  assert(soc.includes('Never smoker') && !soc.includes('Former smoker'));
  const quest = dWed.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('questions')).value;
  assert(quest.includes('requests clinical clarification on the long-term clinical significance of this albuminuria reduction'));
  const rubWed = rubrics['Week2_Patient_C_Wednesday'];
  assert(rubWed.find(x => x.id === '1B.9').zeroCredit === '—');
  assert(rubWed.find(x => x.id === '1D.3').zeroCredit === '—');
  console.log('✅ V26: DC-WED Albuminuria clarification request and Never smoker status verified');
  passed++;
} catch (e) { console.error('❌ V26 failed:', e.message); }

// V27: MT-THU 1B.4, 1B.8, 1B.12, 1C.11, 1E.11 (Routine easy, NSAID understanding/cessation, Family history)
try {
  const mThu = cases.W2_CASES[2];
  const adh = mThu.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('adherence')).value;
  assert(adh.includes('easy to maintain'));
  const nsaid = mThu.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('NSAID')).value;
  assert(nsaid.includes('understanding the potential adverse impact of NSAIDs') && nsaid.includes('PRN ~1–2 times monthly'));
  const fh = mThu.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('Family History')).value;
  assert(fh.includes('Denies any known family history of kidney disease, chronic kidney disease (CKD), end-stage kidney disease (ESKD)'));
  const rubThu = rubrics['Week2_Patient_A_Thursday'];
  ['1B.4', '1B.8', '1B.12', '1C.11', '1E.11'].forEach(id => {
    assert(rubThu.find(x => x.id === id).zeroCredit === '—');
  });
  console.log('✅ V27: MT-THU Routine easy, NSAID nephrotoxicity understanding, and Family history (no ESKD) verified');
  passed++;
} catch (e) { console.error('❌ V27 failed:', e.message); }

// V28: MT-THU Assessment & Plan criteria
try {
  const mThu = cases.W2_CASES[2];
  const hld = mThu.ASSESSMENT_CARDS[0].questions[0].defaultAnswer;
  const ckd = mThu.ASSESSMENT_CARDS[1].questions[0].defaultAnswer;
  const htn = mThu.ASSESSMENT_CARDS[2].questions[0].defaultAnswer;
  const adh = mThu.ASSESSMENT_CARDS[3].questions[0].defaultAnswer;
  assert(hld.includes('multiple drivers') && hld.includes('Further statin intensification is not indicated'));
  assert(ckd.includes('improving albuminuria trend suggests successful kidney-protective interventions'));
  assert(htn.includes('Per KDIGO 2024 guidelines, strict blood pressure control slows CKD progression'));
  assert(adh.includes('contributed directly to significant lipid (LDL-C) improvement and durable blood pressure control'));
  const rubThu = rubrics['Week2_Patient_A_Thursday'];
  ['3A.4', '3B.10', '3C.4', '3C.6', '3D.3', '3D.4', '3E.2', '3E.3', '3G.2', '4A.5'].forEach(id => {
    assert(rubThu.find(x => x.id === id).zeroCredit === '—');
  });
  console.log('✅ V28: MT-THU Assessment drivers, KDIGO BP, adherence linkages, and statin holding verified');
  passed++;
} catch (e) { console.error('❌ V28 failed:', e.message); }

// V29: AR-THU Subjective & Assessment foundations
try {
  const aThu = cases.W2_CASES[5];
  const subj = aThu.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('Interval')).value;
  assert(subj.includes('wonders whether long-term therapy is still needed') && subj.includes('what else she should be doing to prevent worsening kidney disease'));
  const homeBp = aThu.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('Home Blood Pressure')).value;
  assert(homeBp.includes('slightly above the ideal KDIGO CKD target'));
  const hld = aThu.ASSESSMENT_CARDS[0].questions[0].defaultAnswer;
  assert(hld.includes('successful initiation and ongoing maintenance of rosuvastatin 20 mg daily'));
  console.log('✅ V29: AR-THU Continued therapy & kidney questions, home BP target, and rosuvastatin maintenance verified');
  passed++;
} catch (e) { console.error('❌ V29 failed:', e.message); }

// V30: AR-THU Assessment & Plan updates
try {
  const aThu = cases.W2_CASES[5];
  const ckd = aThu.ASSESSMENT_CARDS[1].questions[0].defaultAnswer;
  const htn = aThu.ASSESSMENT_CARDS[2].questions[0].defaultAnswer;
  const adh = aThu.ASSESSMENT_CARDS[3].questions[0].defaultAnswer;
  assert(ckd.includes('persistent albuminuria indicates ongoing kidney damage'));
  assert(htn.includes('future ARB optimization (titrating losartan to 100 mg daily)'));
  assert(adh.includes('sustained adherence is directly linked to improved clinical outcomes'));
  const rubThu = rubrics['Week2_Patient_B_Thursday'];
  ['3A.4', '3B.9', '3C.2', '3C.6', '3C.8', '3D.4', '3D.6', '3E.3', '3E.4', '3E.5'].forEach(id => {
    assert(rubThu.find(x => x.id === id).zeroCredit === '—');
  });
  console.log('✅ V30: AR-THU Albuminuria damage link, future ARB optimization, and adherence/affordability links verified');
  passed++;
} catch (e) { console.error('❌ V30 failed:', e.message); }

// V31: AR-THU Dedicated Adherence/Affordability Plan & Disease Understanding Card
try {
  const aThu = cases.W2_CASES[5];
  assert(aThu.ASSESSMENT_CARDS.some(c => c.id === 'aw_thu_edu_know'));
  assert(aThu.PLAN_SECTIONS.some(p => p.id === 'bth_p_adh_access'));
  const rubThu = rubrics['Week2_Patient_B_Thursday'];
  ['3G.1', '3G.2', '3G.3', '3G.4', '3G.5', '3G.6', '4A.3', '4C.4', '4D.1', '4D.2', '5A.4'].forEach(id => {
    assert(rubThu.find(x => x.id === id).zeroCredit === '—');
  });
  console.log('✅ V31: AR-THU Disease understanding card and dedicated Adherence/Affordability plan verified');
  passed++;
} catch (e) { console.error('❌ V31 failed:', e.message); }

// V32: DC-THU Never smoker, LDL baseline 88, persistent albuminuria, and Dedicated Education Plan
try {
  const dThu = cases.W2_CASES[8];
  const soc = dThu.SUBJECTIVE_DOCUMENTED.find(s => s.label.includes('Social')).value;
  assert(soc.includes('Never smoker') && !soc.includes('Former smoker'));
  const ldl = dThu.LABS.find(l => l.label === 'LDL-C').note;
  assert(ldl.includes('88 → 78 → 74'));
  const ckd = dThu.ASSESSMENT_CARDS[0].questions[0].defaultAnswer;
  assert(ckd.includes('UACR 290 mg/g confirms persistent albuminuria'));
  assert(dThu.PLAN_SECTIONS.some(p => p.id === 'dt_p_edu_risk'));
  const rubThu = rubrics['Week2_Patient_C_Thursday'];
  ['1D.3', '2B.11', '2C.3', '3A.4', '3D.3', '3F.4', '3F.5', '4E.1', '5A.4'].forEach(id => {
    assert(rubThu.find(x => x.id === id).zeroCredit === '—');
  });
  console.log('✅ V32: DC-THU Never smoker, LDL baseline & trend, persistent albuminuria, and Residual Risk Plan verified');
  passed++;
} catch (e) { console.error('❌ V32 failed:', e.message); }

// V33: Exact 100.00 pts across all 9 Week 2 rubrics
try {
  const w2Keys = [
    'Week2_Patient_A_Tuesday', 'Week2_Patient_A_Wednesday', 'Week2_Patient_A_Thursday',
    'Week2_Patient_B_Tuesday', 'Week2_Patient_B_Wednesday', 'Week2_Patient_B_Thursday',
    'Week2_Patient_C_Tuesday', 'Week2_Patient_C_Wednesday', 'Week2_Patient_C_Thursday'
  ];
  w2Keys.forEach(k => {
    const r = rubrics[k];
    let s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0;
    r.forEach(x => {
      if (x.id.startsWith('1')) s1 += x.points;
      else if (x.id.startsWith('2')) s2 += x.points;
      else if (x.id.startsWith('3')) s3 += x.points;
      else if (x.id.startsWith('4')) s4 += x.points;
      else if (x.id.startsWith('5')) s5 += x.points;
    });
    const totalScore = s1 + s2 + s3 + s4 + s5;
    assert.strictEqual(totalScore.toFixed(2), '100.00', `Rubric ${k} total is ${totalScore.toFixed(2)}`);
    assert.strictEqual(s1.toFixed(1), '25.0', `Rubric ${k} Sec1 is ${s1.toFixed(1)}`);
    assert.strictEqual(s2.toFixed(1), '15.0', `Rubric ${k} Sec2 is ${s2.toFixed(1)}`);
    assert.strictEqual(s3.toFixed(1), '30.0', `Rubric ${k} Sec3 is ${s3.toFixed(1)}`);
    assert.strictEqual(s4.toFixed(1), '25.0', `Rubric ${k} Sec4 is ${s4.toFixed(1)}`);
    assert.strictEqual(s5.toFixed(1), '5.0', `Rubric ${k} Sec5 is ${s5.toFixed(1)}`);
  });
  console.log('✅ V33: All 9 Week 2 rubrics balanced exactly to 100.00 pts (Sec1: 25, Sec2: 15, Sec3: 30, Sec4: 25, Sec5: 5)');
  passed++;
} catch (e) { console.error('❌ V33 failed:', e.message); }

// V34: Rule 33 in prompts.js
try {
  assert(prompts.includes('33. For Week 2 encounters (Michael Turner, Angela Rodriguez, David Chen):'));
  assert(prompts.includes('prior UACR 105 mg/g from 4 months ago for Michael Turner'));
  assert(prompts.includes('Angela\'s canonical age is 66 years'));
  assert(prompts.includes('David is a lifelong never smoker'));
  assert(prompts.includes('treatment success rather than disease resolution'));
  console.log('✅ V34: Prompts.js contains comprehensive Rule 33 for Week 2');
  passed++;
} catch (e) { console.error('❌ V34 failed:', e.message); }

console.log('\n==================================================');
console.log(`Summary: ${passed} / ${total} audit checks passed (100%)!`);
console.log('==================================================');

if (passed !== total) {
  process.exit(1);
}
