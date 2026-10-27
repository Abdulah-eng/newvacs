const fs = require('fs');
const path = require('path');

// Let's read the existing update_maria_audit_perfect.js
const originalCode = fs.readFileSync(path.join(__dirname, 'update_maria_audit_perfect.js'), 'utf8');

// We'll build the enhanced v2 script
let v2 = originalCode;

// 1. Add missing Tuesday items 1A.4, 1A.7 right after Week3_Patient_C_Tuesday header
const tueMissingItems = `
updateItem('Week3_Patient_C_Tuesday', '1A.4', item => {
  item.fullCredit = "States referred by PCP / primary care provider, outpatient clinical pharmacy consult, chronic disease management, or notes outpatient clinic visit context";
  item.halfCredit = "Visit context noted";
});

updateItem('Week3_Patient_C_Tuesday', '1A.7', item => {
  item.fullCredit = "States persistent respiratory symptoms or frequent exacerbations despite current tiotropium therapy (or notes undertreatment on LAMA monotherapy)";
  item.halfCredit = "Persistent symptoms noted";
});
`;

v2 = v2.replace("// MARIA THOMPSON TUESDAY\n// ==========================================", "// MARIA THOMPSON TUESDAY\n// ==========================================" + tueMissingItems);

// 2. Add missing Thursday item 1B.11
const thuMissingItems = `
updateItem('Week3_Patient_C_Thursday', '1B.11', item => {
  item.fullCredit = "Documents patient-reported inhaler technique (or notes technique demonstrated / verified / reviewed)";
  item.halfCredit = "Inhaler technique noted";
});
`;

v2 = v2.replace("// MARIA THOMPSON THURSDAY\n// ==========================================", "// MARIA THOMPSON THURSDAY\n// ==========================================" + thuMissingItems);

// 3. Add explicit overrides at the end before normalization for key items that had strict criteria
const overrides = `
// ==========================================
// MARIA THOMPSON KEY AUDIT OVERRIDES & REFINEMENTS
// ==========================================

// Tuesday Monitoring & Follow-up
['4D.1', '4D.2', '4D.3', '4D.4', '4D.5', '4D.6', '4D.7', '4D.8', '4D.9'].forEach(id => {
  updateItem('Week3_Patient_C_Tuesday', id, item => {
    item.fullCredit = "Plans monitoring of asthma/COPD symptom control (ACT score, CAT score, daytime/nighttime symptoms, rescue use), exacerbations, adherence, or technique";
    item.halfCredit = "Monitoring planned";
  });
});

['4G.1', '4G.2', '4G.3', '4G.4', '4G.5', '4G.6', '4G.7', '4G.8', '4G.9'].forEach(id => {
  updateItem('Week3_Patient_C_Tuesday', id, item => {
    item.fullCredit = "Plans follow-up in 4–8 weeks (or 1–3 months) to reassess symptom response to Trelegy, ACT/CAT scores, exacerbation frequency, technique, adherence, or longitudinal ACO care";
    item.halfCredit = "Follow-up planned";
  });
});

// Wednesday OCS side effects, bone health, monitoring & follow-up
updateItem('Week3_Patient_C_Wednesday', '3D.2', item => {
  item.fullCredit = "Documents insomnia as a prednisone side effect (or notes adverse effects of oral corticosteroids in Subjective, Objective, or Assessment)";
  item.halfCredit = "Notes prednisone side effects";
});

updateItem('Week3_Patient_C_Wednesday', '3D.3', item => {
  item.fullCredit = "Documents jitteriness as a prednisone side effect (or notes systemic steroid tolerability concerns in Subjective, Objective, or Assessment)";
  item.halfCredit = "Notes steroid side effects";
});

updateItem('Week3_Patient_C_Wednesday', '3D.6', item => {
  item.fullCredit = "Discusses cumulative OCS adverse effect burden (bone loss, metabolic, sleep) or notes steroid-sparing benefit of biologic therapy";
  item.halfCredit = "Steroid burden noted";
});

updateItem('Week3_Patient_C_Wednesday', '3F.3', item => {
  item.fullCredit = "Identifies skeletal / osteopenia risk from repeated OCS exposure (or notes bone health protection in Assessment or Plan)";
  item.halfCredit = "Bone risk noted";
});

updateItem('Week3_Patient_C_Wednesday', '3F.10', item => {
  item.fullCredit = "Addresses DEXA scan / bone density monitoring (or notes calcium/vitamin D continuation to protect bone health)";
  item.halfCredit = "DEXA or calcium noted";
});

['4F.1', '4F.2', '4F.3', '4F.4', '4F.5', '4F.6', '4F.7', '4F.8', '4F.9', '4F.10', '4F.11', '4F.12', '4F.13', '4F.14', '4F.15', '4F.16', '4F.17', '4F.18'].forEach(id => {
  updateItem('Week3_Patient_C_Wednesday', id, item => {
    item.fullCredit = "Plans monitoring of clinical response, symptom control (ACT, CAT, dyspnea), exacerbations, adherence, eosinophil trends, or biologic safety";
    item.halfCredit = "Monitoring planned";
  });
});

['4G.1', '4G.2', '4G.3', '4G.4', '4G.5', '4G.6', '4G.7', '4G.8', '4G.9', '4G.10', '4G.11', '4G.12', '4G.13', '4G.14'].forEach(id => {
  updateItem('Week3_Patient_C_Wednesday', id, item => {
    item.fullCredit = "Plans follow-up in 3–4 months (or 4–8 weeks) to evaluate biologic response, exacerbation frequency, symptom control, adherence, or vaccines";
    item.halfCredit = "Follow-up planned";
  });
});

// Thursday Heading, ACT, Rescue, Baseline inhaler, Biologic name, Bone health, Formatting
updateItem('Week3_Patient_C_Thursday', '3A.1', item => {
  item.fullCredit = "Labels assessment heading as Treatment Failure, Asthma-COPD Overlap (ACO), Eosinophilic Airway Disease, or severe asthma/COPD overlap";
  item.halfCredit = "Assessment heading present";
});

updateItem('Week3_Patient_C_Thursday', '3A.3', item => {
  item.fullCredit = "Documents ACT score (14) and interprets as indicating poorly controlled disease (in Objective or Assessment)";
  item.halfCredit = "Reports ACT score";
});

updateItem('Week3_Patient_C_Thursday', '3A.4', item => {
  item.fullCredit = "Discusses and quantifies rescue albuterol use frequency (in Subjective, Objective, or Assessment)";
  item.halfCredit = "Mentions rescue use";
});

updateItem('Week3_Patient_C_Thursday', '3A.6', item => {
  item.fullCredit = "Discusses ongoing rescue inhaler reliance and need for therapy optimization (in Subjective, Objective, or Assessment)";
  item.halfCredit = "Mentions rescue inhaler";
});

updateItem('Week3_Patient_C_Thursday', '1E.4b', item => {
  item.fullCredit = "Recommends anti-IL-5 biologic therapy (specifically naming mepolizumab, mepolizumab 100 mg SQ q4w, or referring for anti-IL-5 biologic therapy / biologic evaluation)";
  item.halfCredit = "Biologic therapy mentioned";
});

updateItem('Week3_Patient_C_Thursday', '4A.5', item => {
  item.fullCredit = "States or implies continuation of baseline maintenance inhaler therapy (Trelegy) alongside biologic evaluation / add-on";
  item.halfCredit = "Continues baseline inhaler";
});

updateItem('Week3_Patient_C_Thursday', '5C.3', item => {
  item.fullCredit = "States or implies continuation of existing baseline inhaled triple therapy (Trelegy) alongside biologic evaluation";
  item.halfCredit = "Continues baseline inhaler";
});

updateItem('Week3_Patient_C_Thursday', '3E.4', item => {
  item.fullCredit = "Addresses continued appropriateness of calcium carbonate / vitamin D supplementation (in medication list, assessment, or plan)";
  item.halfCredit = "Mentions calcium";
});

updateItem('Week3_Patient_C_Thursday', '3E.5', item => {
  item.fullCredit = "States or implies continuation of calcium and vitamin D supplementation (in medication reconciliation or plan)";
  item.halfCredit = "Calcium continued";
});

updateItem('Week3_Patient_C_Thursday', '3E.6', item => {
  item.fullCredit = "Notes bone mineral density / DEXA monitoring (or notes bone protection strategies given repeated OCS exposure)";
  item.halfCredit = "Bone health noted";
});

updateItem('Week3_Patient_C_Thursday', '5A.3', item => {
  item.fullCredit = "Assessment structures active problems (ACO / Treatment Failure, Allergic Rhinitis, Bone Health, Vaccines) in problem list or narrative";
  item.halfCredit = "Assessment present";
});

updateItem('Week3_Patient_C_Thursday', '5A.4', item => {
  item.fullCredit = "Plan elements map to assessed active problems (biologic therapy, continuing baseline inhaler, nasal spray, vaccines, follow-up)";
  item.halfCredit = "Plan maps to problems";
});

updateItem('Week3_Patient_C_Thursday', '5B.2', item => {
  item.fullCredit = "Reports objective values with appropriate clinical units (BP, HR, RR, SpO2, BMI, FEV1, eosinophils)";
  item.halfCredit = "Reports objective values";
});

updateItem('Week3_Patient_C_Thursday', '5B.3', item => {
  item.fullCredit = "Reports and interprets ACT (14) and CAT (18) scores clinically (in Objective or Assessment)";
  item.halfCredit = "Reports ACT and CAT scores";
});

updateItem('Week3_Patient_C_Thursday', '5B.4', item => {
  item.fullCredit = "Plan contains actionable items with specific medications (biologic therapy, baseline inhaler, nasal spray), technique, or follow-up timing";
  item.halfCredit = "Plan actionable";
});

updateItem('Week3_Patient_C_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 and/or GOLD 2026 guideline rationale for therapeutic recommendations";
  item.halfCredit = "Guidelines cited";
});

['4C.1', '4C.2', '4C.3', '4C.4', '4C.7', '4C.8', '4C.9', '4C.10'].forEach(id => {
  updateItem('Week3_Patient_C_Thursday', id, item => {
    item.fullCredit = "Plans monitoring of asthma/COPD symptom control (ACT, CAT, rescue use, nighttime symptoms), adherence, technique, or exacerbations";
    item.halfCredit = "Monitoring planned";
  });
});

['4F.1', '4F.2', '4F.5', '4F.6'].forEach(id => {
  updateItem('Week3_Patient_C_Thursday', id, item => {
    item.fullCredit = "Plans follow-up in 1–3 months (or 4–8 weeks) to reassess asthma/COPD control, biologic response, rhinitis, or longitudinal ACO care";
    item.halfCredit = "Follow-up planned";
  });
});
`;

v2 = v2.replace("// STRICT NORMALIZATION TO 100.00 POINTS", overrides + "\n// STRICT NORMALIZATION TO 100.00 POINTS");

fs.writeFileSync(path.join(__dirname, 'update_maria_audit_perfect_v2.js'), v2, 'utf8');
console.log('Successfully generated update_maria_audit_perfect_v2.js!');
