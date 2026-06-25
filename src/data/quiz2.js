// Week 2 Monday quiz — CKD + Hyperlipidemia, grounded in the CKD & HLD teaching
// summaries, KDIGO 2024, AHA/ACC 2026 cholesterol, and the Patient A/B/C (CKD+HLD) cases.
// Representative 10-item sample (5 CKD + 5 HLD, all three formats).

export const PASS_THRESHOLD = 90

export const QUIZ_ITEMS = [
  // ------------------------------- CKD -------------------------------
  {
    id: 'CKD-001', disease: 'CKD', type: 'sba', concept_tag: 'ckd_staging',
    stem: 'A patient has a persistent eGFR of 54 mL/min/1.73m² and a UACR of 165 mg/g confirmed over several months. How is the CKD classified?',
    options: [
      { key: 'a', text: 'G2 A1' },
      { key: 'b', text: 'G3a A2' },
      { key: 'c', text: 'G3b A3' },
      { key: 'd', text: 'No CKD — eGFR is above 45' },
    ],
    correct: ['b'],
    rationale: 'Stage with both axes: eGFR 45–59 = G3a; UACR 30–300 mg/g = A2. So this is G3a A2. Albuminuria is part of the stage, not an afterthought.',
  },
  {
    id: 'CKD-002', disease: 'CKD', type: 'sba', concept_tag: 'ckd_normal_creatinine',
    stem: 'Michael has an eGFR of 79, a serum creatinine of 1.08 mg/dL, and a persistent UACR of 118 mg/g for over three months. He “feels fine.” Which statement is most accurate?',
    options: [
      { key: 'a', text: 'He does not have CKD because his eGFR and creatinine are normal' },
      { key: 'b', text: 'He has CKD (G2 A2) — persistent albuminuria is kidney damage even with a preserved eGFR' },
      { key: 'c', text: 'Albuminuria is irrelevant unless eGFR falls below 60' },
      { key: 'd', text: 'No action is needed because he is asymptomatic' },
    ],
    correct: ['b'],
    rationale: 'Persistent albuminuria for ≥3 months is CKD even when eGFR and creatinine look normal — here G2 (eGFR 60–89) A2 (UACR 30–300). Early CKD is silent; don’t miss it.',
  },
  {
    id: 'CKD-003', disease: 'CKD', type: 'sata', concept_tag: 'kidney_protective_therapy',
    stem: 'Which therapies are considered kidney-protective in CKD with albuminuria? Select all that apply.',
    options: [
      { key: 'a', text: 'ACE inhibitor or ARB' },
      { key: 'b', text: 'SGLT2 inhibitor' },
      { key: 'c', text: 'Finerenone (in T2DM with persistent albuminuria)' },
      { key: 'd', text: 'Routine NSAID use for chronic pain' },
      { key: 'e', text: 'Stopping the ACE inhibitor once albuminuria appears' },
    ],
    correct: ['a', 'b', 'c'],
    rationale: 'ACEi/ARB, SGLT2 inhibitors, and finerenone (T2DM + persistent albuminuria) all slow CKD progression and reduce albuminuria. NSAIDs are nephrotoxic, and you do not stop a RAAS inhibitor because albuminuria appears — that is when it helps most.',
  },
  {
    id: 'CKD-004', disease: 'CKD', type: 'sba', concept_tag: 'nsaid_stewardship',
    stem: 'On interview, a CKD patient reveals he takes ibuprofen 400–600 mg several times weekly for knee pain — it is not on his medication list. What is the most appropriate pharmacist action?',
    options: [
      { key: 'a', text: 'Ignore it because OTC medications are not clinically significant' },
      { key: 'b', text: 'Counsel to avoid/limit the NSAID and recommend a kidney-safer analgesic strategy' },
      { key: 'c', text: 'Increase his ACE inhibitor to offset the NSAID' },
      { key: 'd', text: 'Stop his statin since the NSAID is the bigger issue' },
    ],
    correct: ['b'],
    rationale: 'NSAIDs are nephrotoxic and can blunt antihypertensive and kidney-protective therapy. Medication stewardship in CKD means uncovering OTC/hidden NSAID use and counseling avoidance plus a safer pain plan.',
  },
  {
    id: 'CKD-005', disease: 'CKD', type: 'ktype', concept_tag: 'finerenone_residual_risk',
    stem: 'David has T2DM, CKD G3bA3 (eGFR 42, UACR 520), and is already on a maximally tolerated ACE inhibitor and an SGLT2 inhibitor. Which statements are accurate?\n  I. Persistent albuminuria on ACEi + SGLT2i signals residual cardiorenal risk.\n  II. Finerenone can further reduce albuminuria and cardiorenal risk in this setting.\n  III. A potassium of 5.0 mEq/L after starting finerenone mandates immediate discontinuation.\n  IV. Potassium and renal function should be monitored after starting finerenone.',
    options: [
      { key: 'a', text: 'I and II only' },
      { key: 'b', text: 'I, II, and IV only' },
      { key: 'c', text: 'II and III only' },
      { key: 'd', text: 'I, III, and IV only' },
      { key: 'e', text: 'I, II, III, and IV' },
    ],
    correct: ['b'],
    rationale: 'Persistent albuminuria despite ACEi + SGLT2i is residual risk (I); finerenone adds albuminuria and cardiorenal benefit (II) and requires potassium/renal monitoring (IV). Statement III is wrong — a potassium of 5.0 is interpreted in context, not an automatic stop.',
  },

  // ------------------------------- HLD -------------------------------
  {
    id: 'HLD-001', disease: 'HLD', type: 'sba', concept_tag: 'statin_intensity',
    stem: 'Which regimen qualifies as high-intensity statin therapy?',
    options: [
      { key: 'a', text: 'Atorvastatin 10 mg daily' },
      { key: 'b', text: 'Simvastatin 20 mg daily' },
      { key: 'c', text: 'Rosuvastatin 20 mg daily' },
      { key: 'd', text: 'Pravastatin 40 mg daily' },
    ],
    correct: ['c'],
    rationale: 'High-intensity = atorvastatin 40–80 mg or rosuvastatin 20–40 mg (≈≥50% LDL-C reduction). The others are moderate-intensity.',
  },
  {
    id: 'HLD-002', disease: 'HLD', type: 'sba', concept_tag: 'statin_intensification',
    stem: 'Michael is 58 with CKD, a strong family history of premature ASCVD, and an LDL-C of 132 mg/dL on atorvastatin 10 mg. What is the most appropriate next step?',
    options: [
      { key: 'a', text: 'Leave the statin unchanged because he feels well' },
      { key: 'b', text: 'Intensify statin therapy (e.g., toward high-intensity) given his elevated, CKD-enhanced ASCVD risk' },
      { key: 'c', text: 'Stop the statin and rely on diet alone' },
      { key: 'd', text: 'Only treat if LDL-C exceeds 190 mg/dL' },
    ],
    correct: ['b'],
    rationale: 'His LDL is above goal on a low-intensity statin, and CKD plus a strong family history are ASCVD risk enhancers. The move is to intensify statin therapy, not to wait — symptoms don’t gauge ASCVD risk.',
  },
  {
    id: 'HLD-003', disease: 'HLD', type: 'sata', concept_tag: 'ascvd_risk_enhancers',
    stem: 'Which findings are ASCVD risk enhancers that should raise the intensity of lipid management? Select all that apply.',
    options: [
      { key: 'a', text: 'Chronic kidney disease' },
      { key: 'b', text: 'Diabetes mellitus' },
      { key: 'c', text: 'Persistent albuminuria' },
      { key: 'd', text: 'Family history of premature ASCVD' },
      { key: 'e', text: 'The patient reports feeling well' },
    ],
    correct: ['a', 'b', 'c', 'd'],
    rationale: 'CKD, diabetes, albuminuria, and a family history of premature ASCVD all enhance ASCVD risk and push lipid therapy more aggressive. Feeling well is not a risk modifier — ASCVD risk is silent.',
  },
  {
    id: 'HLD-004', disease: 'HLD', type: 'sba', concept_tag: 'statin_non_initiation',
    stem: 'Angela’s chart lists simvastatin 10 mg, but on interview she reveals her PCP prescribed rosuvastatin 20 mg six months ago and she never filled it because of cost. Her LDL-C is 148 mg/dL. What is the best interpretation?',
    options: [
      { key: 'a', text: 'High-intensity statin therapy failed and a nonstatin is now required' },
      { key: 'b', text: 'The core issue is non-initiation due to a cost barrier — address affordability and get her started' },
      { key: 'c', text: 'Her LDL is acceptable and no change is needed' },
      { key: 'd', text: 'She is noncompliant and should be discharged from the clinic' },
    ],
    correct: ['b'],
    rationale: 'A statin can’t have failed if it was never started. The real problem is access — solve the cost barrier (formulary/assistance) and initiate the high-intensity statin, rather than assuming failure or labeling her noncompliant.',
  },
  {
    id: 'HLD-005', disease: 'HLD', type: 'ktype', concept_tag: 'nonstatin_addon',
    stem: 'A high-ASCVD-risk patient remains above LDL-C goal on a maximally tolerated high-intensity statin. Which statements are accurate?\n  I. Ezetimibe is a reasonable next step for additional LDL-C lowering.\n  II. A PCSK9 inhibitor may be considered if LDL-C remains above goal despite optimized therapy.\n  III. Nonstatin therapy should never be added to a statin.\n  IV. Adherence should be confirmed before escalating therapy.',
    options: [
      { key: 'a', text: 'I and II only' },
      { key: 'b', text: 'I, II, and IV only' },
      { key: 'c', text: 'II and III only' },
      { key: 'd', text: 'III and IV only' },
      { key: 'e', text: 'I, II, III, and IV' },
    ],
    correct: ['b'],
    rationale: 'When LDL stays above goal on a maximally tolerated statin, add ezetimibe (I), then consider a PCSK9 inhibitor (II) — and always confirm adherence before escalating (IV). Statement III is wrong: nonstatin add-ons are exactly how you get to goal.',
  },
]
