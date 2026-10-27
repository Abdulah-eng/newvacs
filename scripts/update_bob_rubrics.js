const fs = require('fs');
const path = require('path');

const rubricsPath = path.join(__dirname, '../src/data/granular_rubrics.json');
const rubrics = JSON.parse(fs.readFileSync(rubricsPath, 'utf8'));

function updateItem(key, id, updater) {
  const rub = rubrics[key];
  if (!rub) {
    console.error(`Rubric key not found: ${key}`);
    return;
  }
  const item = rub.find(x => x.id === id);
  if (!item) {
    console.warn(`Item ${id} not found in ${key}`);
    return;
  }
  updater(item);
}

// ==================== BOB TUESDAY ====================
updateItem('Week3_Patient_B_Tuesday', '1A.4', item => {
  item.fullCredit = "States referred by PCP / primary care provider (or outpatient clinical pharmacy consult)";
});
updateItem('Week3_Patient_B_Tuesday', '1A.8', item => {
  item.fullCredit = "States collaborative practice management, clinical pharmacy consult, or COPD pharmacotherapy management";
});
updateItem('Week3_Patient_B_Tuesday', '1B.1', item => {
  item.fullCredit = "States shortness of breath on exertion (with or without explicitly specifying gradually worsening)";
});
updateItem('Week3_Patient_B_Tuesday', '1B.2', item => {
  item.fullCredit = "States worsening dyspnea over past year / progressive dyspnea (or chronic exertional SOB)";
});
updateItem('Week3_Patient_B_Tuesday', '1B.3', item => {
  item.fullCredit = "States difficulty climbing stairs or general exertional limitation";
});
updateItem('Week3_Patient_B_Tuesday', '1B.4', item => {
  item.fullCredit = "States difficulty carrying groceries or activity limitation with lifting/carrying";
});
updateItem('Week3_Patient_B_Tuesday', '1B.5', item => {
  item.fullCredit = "States limitation with home projects/repairs or general daily activity limitation";
});
updateItem('Week3_Patient_B_Tuesday', '1B.6', item => {
  item.fullCredit = "States cough is absent, mild, or intermittent (or documents denial of significant chronic productive cough)";
});
updateItem('Week3_Patient_B_Tuesday', '1B.7', item => {
  item.fullCredit = "States albuterol rescue use multiple times daily / frequent daily reliance (or 2-4 puffs daily PRN)";
});
updateItem('Week3_Patient_B_Tuesday', '1B.8', item => {
  item.fullCredit = "States albuterol provides only temporary/short-lived relief (or partial relief of symptoms)";
});
updateItem('Week3_Patient_B_Tuesday', '1C.2', item => {
  item.fullCredit = "States COPD diagnosed ~4 years ago (or chronic / several years duration)";
});
updateItem('Week3_Patient_B_Tuesday', '1C.3', item => {
  item.fullCredit = "Lists hypertension in PMH or problem list";
});
updateItem('Week3_Patient_B_Tuesday', '1C.4', item => {
  item.fullCredit = "States hypertension duration (~12 years or several years / chronic)";
});
updateItem('Week3_Patient_B_Tuesday', '1C.5', item => {
  item.fullCredit = "Lists hyperlipidemia in PMH or problem list";
});
updateItem('Week3_Patient_B_Tuesday', '1C.6', item => {
  item.fullCredit = "States hyperlipidemia duration (~10 years or several years / chronic)";
});
updateItem('Week3_Patient_B_Tuesday', '1C.12', item => {
  item.fullCredit = "States denies recent hospitalizations, or notes outpatient/urgent care management only";
});
updateItem('Week3_Patient_B_Tuesday', '1C.13', item => {
  item.fullCredit = "States denies recent ED visits, or notes managed in clinic/urgent care";
});
updateItem('Week3_Patient_B_Tuesday', '1D.10', item => {
  item.fullCredit = "States cost concern ($300 inhaler unfilled) and notes no stretching of oral medications (or cost barrier alone)";
});
updateItem('Week3_Patient_B_Tuesday', '1D.11', item => {
  item.fullCredit = "States fear of future oxygen dependence or disease progression, or goal to preserve independence";
});
updateItem('Week3_Patient_B_Tuesday', '1E.16', item => {
  item.fullCredit = "States Tdap overdue (>10 years ago) or identifies need to verify/update Tdap";
});
updateItem('Week3_Patient_B_Tuesday', '1E.17', item => {
  item.fullCredit = "Documents patient does not stretch oral medications despite unobtained inhaler (or cost barrier noted)";
});
updateItem('Week3_Patient_B_Tuesday', '1E.18', item => {
  item.fullCredit = "States patient did not communicate cost barrier to prescribing provider";
});
updateItem('Week3_Patient_B_Tuesday', '1E.20', item => {
  item.fullCredit = "States albuterol provides temporary relief only (or notes reliance on SABA without maintenance controller)";
});
updateItem('Week3_Patient_B_Tuesday', '1F.1', item => {
  item.fullCredit = "Confirms absence of recent hospitalizations / denies hospitalizations";
});
updateItem('Week3_Patient_B_Tuesday', '1F.2', item => {
  item.fullCredit = "Confirms absence of recent ED visits / denies ED visits";
});
updateItem('Week3_Patient_B_Tuesday', '1F.4', item => {
  item.fullCredit = "Documents frequent or multiple daily use of albuterol (or heavy reliance on SABA)";
});
updateItem('Week3_Patient_B_Tuesday', '1F.5', item => {
  item.fullCredit = "Notes cost barrier was not communicated to previous prescribing provider";
});
updateItem('Week3_Patient_B_Tuesday', '1G.1', item => {
  item.fullCredit = "States patient concern about COPD disease progression or worsening breathlessness";
});
updateItem('Week3_Patient_B_Tuesday', '1G.2', item => {
  item.fullCredit = "States fear of future oxygen dependence or desire to remain independent";
});
updateItem('Week3_Patient_B_Tuesday', '1G.4', item => {
  item.fullCredit = "Documents patient limited understanding of daily maintenance inhalers vs rescue";
});
updateItem('Week3_Patient_B_Tuesday', '1G.5', item => {
  item.fullCredit = "Documents patient belief that albuterol alone was sufficient (or unawareness of maintenance benefit)";
});
updateItem('Week3_Patient_B_Tuesday', '1G.6', item => {
  item.fullCredit = "Documents patient goal to improve activity tolerance, climb stairs, or manage home projects";
});
updateItem('Week3_Patient_B_Tuesday', '2B.2', item => {
  item.fullCredit = "References FEV1/FVC < 0.70 threshold confirming persistent airflow obstruction (or post-BD ratio 0.58-0.62)";
});
updateItem('Week3_Patient_B_Tuesday', '2C.2', item => {
  item.fullCredit = "Classifies as GOLD Group B (or Group E) using CAT score and exacerbation history criteria";
});
updateItem('Week3_Patient_B_Tuesday', '2C.3', item => {
  item.fullCredit = "Documents SpO2 95% on room air interpreted as adequate / no hypoxemia / above 88% O2 threshold";
});
updateItem('Week3_Patient_B_Tuesday', '2C.4', item => {
  item.fullCredit = "Notes spirometry values are post-bronchodilator (or flags lack of pre-BD comparison)";
});
updateItem('Week3_Patient_B_Tuesday', '2C.5', item => {
  item.fullCredit = "Notes mMRC dyspnea scale or notes CAT score 18 as primary objective symptom assessment";
});
updateItem('Week3_Patient_B_Tuesday', '3A.3', item => {
  item.fullCredit = "States GOLD Group B (or Group E) in assessment based on CAT 18 and 0-1 exacerbations";
});
updateItem('Week3_Patient_B_Tuesday', '3A.4', item => {
  item.fullCredit = "Cites GOLD guideline (GOLD 2026 or GOLD report) for COPD management";
});
updateItem('Week3_Patient_B_Tuesday', '3A.5', item => {
  item.fullCredit = "Cites CAT score >= 10 (or CAT 18) supporting high symptom burden / Group B or Group E";
});
updateItem('Week3_Patient_B_Tuesday', '3A.6', item => {
  item.fullCredit = "Cites <=1 moderate exacerbation (or 1 exacerbation without hospitalization) for Group B or Group E";
});
updateItem('Week3_Patient_B_Tuesday', '3A.10', item => {
  item.fullCredit = "Documents albuterol rescue use multiple times daily / frequent daily reliance";
});
updateItem('Week3_Patient_B_Tuesday', '3A.15', item => {
  item.fullCredit = "Distinguishes treatment non-initiation (due to cost) from medication/treatment failure";
});
updateItem('Week3_Patient_B_Tuesday', '3A.16', item => {
  item.fullCredit = "States need to address implementation/cost barriers prior to considering escalation";
});
updateItem('Week3_Patient_B_Tuesday', '3A.17', item => {
  item.fullCredit = "Links 45 pack-year smoking history to COPD development and disease trajectory";
});
updateItem('Week3_Patient_B_Tuesday', '3B.1', item => {
  item.fullCredit = "Identifies cost-related non-initiation / access barrier as a distinct clinical problem";
});
updateItem('Week3_Patient_B_Tuesday', '3B.4', item => {
  item.fullCredit = "Identifies limited understanding of daily maintenance therapy as a barrier to initiation";
});
updateItem('Week3_Patient_B_Tuesday', '3B.5', item => {
  item.fullCredit = "Identifies patient failure to communicate cost barriers to prescribing provider as a barrier";
});
updateItem('Week3_Patient_B_Tuesday', '3B.7', item => {
  item.fullCredit = "States untreated symptoms reflect non-initiation of maintenance therapy rather than treatment failure";
});
updateItem('Week3_Patient_B_Tuesday', '3B.8', item => {
  item.fullCredit = "States affordability and access barriers must be resolved before assessing clinical response or escalation";
});
updateItem('Week3_Patient_B_Tuesday', '3B.9', item => {
  item.fullCredit = "Identifies the unfilled $300 inhaler and confirms adherence to affordable oral medications (lisinopril/atorvastatin)";
});
updateItem('Week3_Patient_B_Tuesday', '3B.10', item => {
  item.fullCredit = "States reliance on SABA-only monotherapy without maintenance controller threatens COPD disease control";
});
updateItem('Week3_Patient_B_Tuesday', '3C.3', item => {
  item.fullCredit = "Specifies non-filling of $300 combination inhaler due to cost as the key financial barrier/behavior";
});
updateItem('Week3_Patient_B_Tuesday', '3C.4', item => {
  item.fullCredit = "Identifies financial/cost barriers as a major threat to long-term COPD disease control";
});
updateItem('Week3_Patient_B_Tuesday', '3C.5', item => {
  item.fullCredit = "States prescription insurance / formulary coverage assessment is indicated";
});
updateItem('Week3_Patient_B_Tuesday', '3C.7', item => {
  item.fullCredit = "Notes failure to communicate medication cost concerns to prior provider as a barrier";
});
updateItem('Week3_Patient_B_Tuesday', '3D.1', item => {
  item.fullCredit = "Identifies COPD knowledge deficit / education need regarding maintenance therapy as a problem";
});
updateItem('Week3_Patient_B_Tuesday', '3D.2', item => {
  item.fullCredit = "Identifies knowledge deficit regarding COPD progression and role of maintenance therapy";
});
updateItem('Week3_Patient_B_Tuesday', '3D.3', item => {
  item.fullCredit = "Identifies knowledge deficit regarding the purpose and regular daily use of maintenance inhalers";
});
updateItem('Week3_Patient_B_Tuesday', '3D.4', item => {
  item.fullCredit = "Identifies knowledge deficit regarding maintenance therapy reducing exacerbation risk";
});
updateItem('Week3_Patient_B_Tuesday', '3D.5', item => {
  item.fullCredit = "Identifies knowledge deficit distinguishing fast-acting rescue vs daily maintenance inhalers";
});
updateItem('Week3_Patient_B_Tuesday', '3D.6', item => {
  item.fullCredit = "States education is needed to support long-term medication adherence and disease control";
});
updateItem('Week3_Patient_B_Tuesday', '3D.7', item => {
  item.fullCredit = "States education on long-term disease management and symptom control is indicated";
});
updateItem('Week3_Patient_B_Tuesday', '3D.8', item => {
  item.fullCredit = "Links both limited understanding of maintenance benefit and cost barrier to therapy non-initiation";
});
updateItem('Week3_Patient_B_Tuesday', '3E.4', item => {
  item.fullCredit = "Frames continued smoking abstinence as the single most critical intervention to slow COPD progression";
});
updateItem('Week3_Patient_B_Tuesday', '3E.5', item => {
  item.fullCredit = "Links 45 pack-year smoking history to ongoing COPD progression risk";
});
updateItem('Week3_Patient_B_Tuesday', '3E.6', item => {
  item.fullCredit = "Provides positive reinforcement / praise for achieving and sustaining smoking cessation";
});
updateItem('Week3_Patient_B_Tuesday', '3E.7', item => {
  item.fullCredit = "States smoking cessation is sustained and no cessation pharmacotherapy is currently indicated";
});
updateItem('Week3_Patient_B_Tuesday', '3F.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a distinct problem in the Assessment";
});
updateItem('Week3_Patient_B_Tuesday', '3F.4', item => {
  item.fullCredit = "Identifies Tdap booster as overdue (>10 years) or indicates review of tetanus status";
});
updateItem('Week3_Patient_B_Tuesday', '3F.7', item => {
  item.fullCredit = "States preventive care optimization / immunization update is indicated";
});
updateItem('Week3_Patient_B_Tuesday', '3F.8', item => {
  item.fullCredit = "Links COPD chronic respiratory diagnosis and age 66 to pneumococcal and RSV vaccine recommendations";
});
updateItem('Week3_Patient_B_Tuesday', '4A.1', item => {
  item.fullCredit = "Recommends initiating a once-daily LABA/LAMA combination inhaler (e.g., Anoro Ellipta: umeclidinium/vilanterol)";
});
updateItem('Week3_Patient_B_Tuesday', '4A.2', item => {
  item.fullCredit = "Names specific LABA/LAMA agent (Anoro Ellipta: umeclidinium/vilanterol 62.5/25 mcg or formulary LABA/LAMA)";
});
updateItem('Week3_Patient_B_Tuesday', '4A.3', item => {
  item.fullCredit = "Specifies dose and frequency: 1 inhalation once daily";
});
updateItem('Week3_Patient_B_Tuesday', '4A.4', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA 2 puffs q4-6h PRN for acute rescue";
});
updateItem('Week3_Patient_B_Tuesday', '4A.6', item => {
  item.fullCredit = "Discusses expected benefits: improved dyspnea, increased activity tolerance, and reduced exacerbations";
});
updateItem('Week3_Patient_B_Tuesday', '4A.7', item => {
  item.fullCredit = "Discusses realistic symptom improvement timeline (gradual onset over days to weeks)";
});
updateItem('Week3_Patient_B_Tuesday', '4A.8', item => {
  item.fullCredit = "Addresses rescue vs maintenance distinction (daily preventive controller vs as-needed reliever)";
});
updateItem('Week3_Patient_B_Tuesday', '4A.9', item => {
  item.fullCredit = "Emphasizes daily consistent use of maintenance inhaler even when feeling well";
});
updateItem('Week3_Patient_B_Tuesday', '4A.11', item => {
  item.fullCredit = "Cites GOLD 2026 Group B (or Group E) guideline recommendation for initial dual LABA/LAMA";
});
updateItem('Week3_Patient_B_Tuesday', '4A.12', item => {
  item.fullCredit = "Explains dual bronchodilator mechanism combining LAMA and LABA for superior lung function and symptom relief";
});
updateItem('Week3_Patient_B_Tuesday', '4A.13', item => {
  item.fullCredit = "Notes plan addresses non-initiation due to cost rather than lack of medication efficacy";
});
updateItem('Week3_Patient_B_Tuesday', '4B.1', item => {
  item.fullCredit = "Includes assessment of prescription insurance formulary coverage / copay tiers";
});
updateItem('Week3_Patient_B_Tuesday', '4B.2', item => {
  item.fullCredit = "Discusses finding an affordable option or checking copay tier";
});
updateItem('Week3_Patient_B_Tuesday', '4B.4', item => {
  item.fullCredit = "Mentions manufacturer copay cards, patient assistance programs, or formulary alternatives";
});
updateItem('Week3_Patient_B_Tuesday', '4B.5', item => {
  item.fullCredit = "Encourages patient to proactively communicate future medication cost or access barriers";
});
updateItem('Week3_Patient_B_Tuesday', '4B.6', item => {
  item.fullCredit = "Confirms oral medication adherence and addresses cost barriers to inhaler access";
});
updateItem('Week3_Patient_B_Tuesday', '4B.7', item => {
  item.fullCredit = "Emphasizes provider-patient collaboration to navigate financial barriers";
});
updateItem('Week3_Patient_B_Tuesday', '4B.8', item => {
  item.fullCredit = "States confirming affordability / insurance coverage prior to finalizing prescription choice";
});
updateItem('Week3_Patient_B_Tuesday', '4C.1', item => {
  item.fullCredit = "Educates on COPD chronic progressive nature and how maintenance therapy preserves function";
});
updateItem('Week3_Patient_B_Tuesday', '4C.2', item => {
  item.fullCredit = "Educates on fast-acting rescue albuterol vs daily scheduled maintenance inhaler";
});
updateItem('Week3_Patient_B_Tuesday', '4C.3', item => {
  item.fullCredit = "Reinforces daily scheduled adherence to maintenance inhaler";
});
updateItem('Week3_Patient_B_Tuesday', '4C.4', item => {
  item.fullCredit = "Discusses maintenance therapy's role in preventing acute COPD exacerbations";
});
updateItem('Week3_Patient_B_Tuesday', '4C.5', item => {
  item.fullCredit = "Explains that consistent daily adherence is required to achieve sustained symptom control";
});
updateItem('Week3_Patient_B_Tuesday', '4C.6', item => {
  item.fullCredit = "Connects education to long-term disease management, quality of life, and independence";
});
updateItem('Week3_Patient_B_Tuesday', '4C.7', item => {
  item.fullCredit = "Maps education plan directly to addressed knowledge deficit and maintenance therapy purpose";
});
updateItem('Week3_Patient_B_Tuesday', '4C.8', item => {
  item.fullCredit = "Educates on early recognition of worsening symptoms and when to seek medical evaluation";
});
updateItem('Week3_Patient_B_Tuesday', '4D.1', item => {
  item.fullCredit = "Congratulates patient / provides positive reinforcement for sustaining smoking cessation";
});
updateItem('Week3_Patient_B_Tuesday', '4D.2', item => {
  item.fullCredit = "Reinforces lifelong smoking abstinence to slow COPD lung function decline";
});
updateItem('Week3_Patient_B_Tuesday', '4D.3', item => {
  item.fullCredit = "Links continued abstinence directly to reduced rate of FEV1 decline and fewer exacerbations";
});
updateItem('Week3_Patient_B_Tuesday', '4D.4', item => {
  item.fullCredit = "Notes smoking cessation pharmacotherapy is not indicated given stable long-term abstinence";
});
updateItem('Week3_Patient_B_Tuesday', '4E.1', item => {
  item.fullCredit = "Plans monitoring of CAT score at follow-up (target <10 or improvement from 18)";
});
updateItem('Week3_Patient_B_Tuesday', '4E.2', item => {
  item.fullCredit = "Plans monitoring of exertional dyspnea and shortness of breath";
});
updateItem('Week3_Patient_B_Tuesday', '4E.3', item => {
  item.fullCredit = "Plans monitoring of functional activity tolerance (stair climbing, walking, home projects)";
});
updateItem('Week3_Patient_B_Tuesday', '4E.4', item => {
  item.fullCredit = "Plans monitoring of albuterol rescue use frequency (target reduction from multiple daily uses)";
});
updateItem('Week3_Patient_B_Tuesday', '4E.5', item => {
  item.fullCredit = "Plans monitoring for acute COPD exacerbations, steroid/antibiotic bursts, or urgent visits";
});
updateItem('Week3_Patient_B_Tuesday', '4E.6', item => {
  item.fullCredit = "Plans monitoring of daily maintenance inhaler adherence";
});
updateItem('Week3_Patient_B_Tuesday', '4E.7', item => {
  item.fullCredit = "Plans demonstration and monitoring of inhaler technique at follow-up";
});
updateItem('Week3_Patient_B_Tuesday', '4E.8', item => {
  item.fullCredit = "Plans monitoring of medication affordability and prescription fill status";
});
updateItem('Week3_Patient_B_Tuesday', '4E.9', item => {
  item.fullCredit = "Plans assessment of clinical response to LABA/LAMA therapy at follow-up";
});
updateItem('Week3_Patient_B_Tuesday', '4E.10', item => {
  item.fullCredit = "Plans longitudinal spirometry / pulmonary function monitoring per GOLD schedule (annually)";
});
updateItem('Week3_Patient_B_Tuesday', '4F.1', item => {
  item.fullCredit = "Recommends PCV20 (Prevnar 20) or PCV15 followed by PPSV23 for age >=65 with COPD";
});
updateItem('Week3_Patient_B_Tuesday', '4F.2', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo) for age 60-74 with chronic lung disease";
});
updateItem('Week3_Patient_B_Tuesday', '4F.3', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
});
updateItem('Week3_Patient_B_Tuesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe in 4-8 weeks or 1-3 months";
});
updateItem('Week3_Patient_B_Tuesday', '4G.2', item => {
  item.fullCredit = "Plans follow-up reassessment of dyspnea, symptoms, and functional capacity";
});
updateItem('Week3_Patient_B_Tuesday', '4G.3', item => {
  item.fullCredit = "Plans repeat CAT score assessment at follow-up";
});
updateItem('Week3_Patient_B_Tuesday', '4G.4', item => {
  item.fullCredit = "Plans follow-up reassessment of maintenance inhaler adherence and routine";
});
updateItem('Week3_Patient_B_Tuesday', '4G.5', item => {
  item.fullCredit = "Plans follow-up reassessment of medication affordability and successful prescription access";
});
updateItem('Week3_Patient_B_Tuesday', '4G.6', item => {
  item.fullCredit = "Plans evaluation of therapeutic response to LABA/LAMA before considering therapy changes";
});
updateItem('Week3_Patient_B_Tuesday', '4G.7', item => {
  item.fullCredit = "Plans periodic spirometry / lung function reassessment per GOLD recommendations";
});
updateItem('Week3_Patient_B_Tuesday', '4G.8', item => {
  item.fullCredit = "Follow-up plan addresses assessed COPD, adherence, affordability, and preventive care needs";
});
updateItem('Week3_Patient_B_Tuesday', '5B.3', item => {
  item.fullCredit = "States numeric goals or thresholds (e.g., CAT < 10, BP < 130/80 mmHg, SpO2 >= 90%)";
});
updateItem('Week3_Patient_B_Tuesday', '5B.4', item => {
  item.fullCredit = "Provides concrete, actionable plan details including specific agent, dose, frequency, and monitoring";
});
updateItem('Week3_Patient_B_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites GOLD 2026 (or GOLD report) guideline rationale supporting initial LABA/LAMA for Group B";
});

// ==================== BOB WEDNESDAY ====================
updateItem('Week3_Patient_B_Wednesday', '1A.7', item => {
  item.fullCredit = "States indication for LABA/LAMA therapy as symptomatic COPD / Group B management";
});
updateItem('Week3_Patient_B_Wednesday', '1B.2', item => {
  item.fullCredit = "States general dyspnea improvement (with or without specific daily activity ties)";
});
updateItem('Week3_Patient_B_Wednesday', '1B.4', item => {
  item.fullCredit = "States continued exertional dyspnea with stair climbing or general exertional symptoms";
});
updateItem('Week3_Patient_B_Wednesday', '1B.5', item => {
  item.fullCredit = "States continued exertional dyspnea with carrying groceries or general lifting limitation";
});
updateItem('Week3_Patient_B_Wednesday', '1B.6', item => {
  item.fullCredit = "States continued exertional dyspnea with household projects or activity limitation";
});
updateItem('Week3_Patient_B_Wednesday', '1B.7', item => {
  item.fullCredit = "Documents albuterol rescue use frequency (several times weekly, 1-2x/day, or slight reduction)";
});
updateItem('Week3_Patient_B_Wednesday', '1B.8', item => {
  item.fullCredit = "States rescue inhaler use represents slight reduction from baseline (or continued regular PRN use)";
});
updateItem('Week3_Patient_B_Wednesday', '1B.10', item => {
  item.fullCredit = "States denies ED visits (or denies exacerbations / hospitalizations / OCS)";
});
updateItem('Week3_Patient_B_Wednesday', '1B.16', item => {
  item.fullCredit = "States patient believed his inhaler technique was correct prior to demonstration";
});
updateItem('Week3_Patient_B_Wednesday', '1B.18', item => {
  item.fullCredit = "Describes blowing into mouthpiece (or patient belief this forced medicine into lungs)";
});
updateItem('Week3_Patient_B_Wednesday', '1B.19', item => {
  item.fullCredit = "Confirms affordability of medication ($20 copay / cheaper / affordable without financial strain)";
});
updateItem('Week3_Patient_B_Wednesday', '1B.20', item => {
  item.fullCredit = "States denies difficulty obtaining prescriptions / fills medication without issue";
});
updateItem('Week3_Patient_B_Wednesday', '1B.23', item => {
  item.fullCredit = "States patient denies desire to restart tobacco use / maintains stable abstinence";
});
updateItem('Week3_Patient_B_Wednesday', '1B.24', item => {
  item.fullCredit = "HPI covers symptoms, exacerbation history, adherence, technique, and/or reliever use";
});
updateItem('Week3_Patient_B_Wednesday', '1C.12', item => {
  item.fullCredit = "Lists appendectomy as PSH (or confirms absence of pulmonary/cardiac surgeries)";
});
updateItem('Week3_Patient_B_Wednesday', '1D.9', item => {
  item.fullCredit = "Documents limited physical activity secondary to dyspnea (or sedentary lifestyle)";
});
updateItem('Week3_Patient_B_Wednesday', '1E.14', item => {
  item.fullCredit = "States Tdap overdue (>10 years ago) or identifies tetanus update needed";
});
updateItem('Week3_Patient_B_Wednesday', '1E.17', item => {
  item.fullCredit = "Lists albuterol HFA as PRN rescue SABA bronchodilator";
});
updateItem('Week3_Patient_B_Wednesday', '1E.18', item => {
  item.fullCredit = "Identifies immunization gaps (pneumococcal, RSV, and/or Tdap overdue)";
});
updateItem('Week3_Patient_B_Wednesday', '1F.1', item => {
  item.fullCredit = "Notes mild dyspnea improvement with exertional activity";
});
updateItem('Week3_Patient_B_Wednesday', '1F.5', item => {
  item.fullCredit = "Documents patient denies desire or craving to restart tobacco use";
});
updateItem('Week3_Patient_B_Wednesday', '1F.6', item => {
  item.fullCredit = "Confirms absence of current medication access or affordability concerns";
});
updateItem('Week3_Patient_B_Wednesday', '1G.2', item => {
  item.fullCredit = "Addresses realistic treatment timeline expectation (gradual onset over days to weeks)";
});
updateItem('Week3_Patient_B_Wednesday', '1G.3', item => {
  item.fullCredit = "Notes mild improvement in symptoms and functional activities";
});
updateItem('Week3_Patient_B_Wednesday', '2A.1', item => {
  item.fullCredit = "Documents BP 130/76 (or 132/82 mmHg)";
});
updateItem('Week3_Patient_B_Wednesday', '2A.2', item => {
  item.fullCredit = "Documents HR 78 bpm (or 76 bpm)";
});
updateItem('Week3_Patient_B_Wednesday', '2A.3', item => {
  item.fullCredit = "Documents RR 18/min (or 20/min)";
});
updateItem('Week3_Patient_B_Wednesday', '2A.4', item => {
  item.fullCredit = "Documents Weight 89 kg (or 80 kg)";
});
updateItem('Week3_Patient_B_Wednesday', '2A.6', item => {
  item.fullCredit = "Documents BMI 28.1 kg/m² (or 26.0 kg/m²)";
});
updateItem('Week3_Patient_B_Wednesday', '2A.7', item => {
  item.fullCredit = "Documents SpO2 95% (or 97%) on room air";
});
updateItem('Week3_Patient_B_Wednesday', '2A.13', item => {
  item.fullCredit = "Comments that BP is acceptable / at goal in context of lisinopril therapy";
});
updateItem('Week3_Patient_B_Wednesday', '2B.4', item => {
  item.fullCredit = "Documents persistent exertional dyspnea (stairs, groceries, or household tasks)";
});
updateItem('Week3_Patient_B_Wednesday', '2B.5', item => {
  item.fullCredit = "Documents rescue albuterol usage frequency (several times weekly / 1-2 times daily)";
});
updateItem('Week3_Patient_B_Wednesday', '2B.6', item => {
  item.fullCredit = "Documents objective marker for rescue inhaler use frequency";
});
updateItem('Week3_Patient_B_Wednesday', '2B.9', item => {
  item.fullCredit = "Links FEV1 58% predicted to GOLD Grade 2 moderate airflow limitation";
});
updateItem('Week3_Patient_B_Wednesday', '2C.2', item => {
  item.fullCredit = "States GOLD Grade 2 moderate obstruction (or FEV1 58% predicted)";
});
updateItem('Week3_Patient_B_Wednesday', '2C.3', item => {
  item.fullCredit = "Assesses significant symptom burden (CAT 16-18, exertional dyspnea)";
});
updateItem('Week3_Patient_B_Wednesday', '2C.4', item => {
  item.fullCredit = "Notes zero exacerbations supporting Group B classification";
});
updateItem('Week3_Patient_B_Wednesday', '2C.6', item => {
  item.fullCredit = "Documents rescue inhaler use trend (several times weekly / slight reduction)";
});
updateItem('Week3_Patient_B_Wednesday', '2C.7', item => {
  item.fullCredit = "States unnecessary labs (sputum culture, CBC, metabolic panel) are not indicated";
});
updateItem('Week3_Patient_B_Wednesday', '2C.8', item => {
  item.fullCredit = "States ABG is not indicated given SpO2 95-97% without acute distress";
});
updateItem('Week3_Patient_B_Wednesday', '3A.2', item => {
  item.fullCredit = "States GOLD Group B classification based on high symptoms and low exacerbations";
});
updateItem('Week3_Patient_B_Wednesday', '3A.4', item => {
  item.fullCredit = "Links inhaler technique errors (blowing into mouthpiece) to reduced drug deposition and incomplete LAMA/LABA benefit";
});
updateItem('Week3_Patient_B_Wednesday', '3A.5', item => {
  item.fullCredit = "Notes decreased rescue inhaler use or partial symptom improvement as evidence of initial benefit";
});
updateItem('Week3_Patient_B_Wednesday', '3A.7', item => {
  item.fullCredit = "Documents persistent exertional activity limitation";
});
updateItem('Week3_Patient_B_Wednesday', '3A.8', item => {
  item.fullCredit = "Cites GOLD 2026 framework (symptom burden and exacerbation history) for COPD assessment";
});
updateItem('Week3_Patient_B_Wednesday', '3A.9', item => {
  item.fullCredit = "Cites GOLD 2026 activity limitation criterion";
});
updateItem('Week3_Patient_B_Wednesday', '3A.10', item => {
  item.fullCredit = "Cites GOLD 2026 rescue inhaler use frequency criterion";
});
updateItem('Week3_Patient_B_Wednesday', '3A.11', item => {
  item.fullCredit = "Cites GOLD 2026 exacerbation history criterion (zero exacerbations)";
});
updateItem('Week3_Patient_B_Wednesday', '3A.12', item => {
  item.fullCredit = "Notes that persistent symptoms might initially suggest inadequate response but must be evaluated in context of adherence/technique";
});
updateItem('Week3_Patient_B_Wednesday', '3A.14', item => {
  item.fullCredit = "Concludes symptoms cannot be interpreted as medication failure due to missed doses and technique errors";
});
updateItem('Week3_Patient_B_Wednesday', '3A.15', item => {
  item.fullCredit = "States adherence optimization and technique correction must precede consideration of therapy escalation";
});
updateItem('Week3_Patient_B_Wednesday', '3A.17', item => {
  item.fullCredit = "Notes FEV1 58% predicted / GOLD Grade 2 moderate airflow obstruction";
});
updateItem('Week3_Patient_B_Wednesday', '3A.19', item => {
  item.fullCredit = "Documents SpO2 95% (or 97%) on room air as adequate / no supplemental oxygen indicated";
});
updateItem('Week3_Patient_B_Wednesday', '3A.21', item => {
  item.fullCredit = "Explicitly distinguishes technique/adherence deficiency from true pharmacologic medication failure";
});
updateItem('Week3_Patient_B_Wednesday', '3A.22', item => {
  item.fullCredit = "Notes that LABA/LAMA remains guideline-supported first-line therapy for Group B";
});
updateItem('Week3_Patient_B_Wednesday', '3A.23', item => {
  item.fullCredit = "Notes that lack of exacerbations argues against triple therapy / ICS escalation at this visit";
});
updateItem('Week3_Patient_B_Wednesday', '3B.2', item => {
  item.fullCredit = "Links nonadherence (taking 3-4 days/week) to persistent exertional symptoms";
});
updateItem('Week3_Patient_B_Wednesday', '3B.6', item => {
  item.fullCredit = "Identifies unrealistic expectations about symptom improvement timeline as an adherence barrier";
});
updateItem('Week3_Patient_B_Wednesday', '3B.7', item => {
  item.fullCredit = "Identifies limited understanding of maintenance therapy benefits as a contributor to missed doses";
});
updateItem('Week3_Patient_B_Wednesday', '3B.8', item => {
  item.fullCredit = "Frames technique errors as precluding accurate assessment of medication effectiveness";
});
updateItem('Week3_Patient_B_Wednesday', '3B.9', item => {
  item.fullCredit = "States adherence optimization before escalation is necessary to determine true drug response";
});
updateItem('Week3_Patient_B_Wednesday', '3B.11', item => {
  item.fullCredit = "Notes affordability/access barriers have been successfully resolved ($20 copay)";
});
updateItem('Week3_Patient_B_Wednesday', '3B.12', item => {
  item.fullCredit = "Identifies nonadherence as a modifiable contributor to ongoing symptom burden";
});
updateItem('Week3_Patient_B_Wednesday', '3B.13', item => {
  item.fullCredit = "States patient needs step-by-step Anoro Ellipta technique education and demonstration";
});
updateItem('Week3_Patient_B_Wednesday', '3B.14', item => {
  item.fullCredit = "Discusses rescue inhaler use frequency in relation to undertreated symptoms";
});
updateItem('Week3_Patient_B_Wednesday', '3B.15', item => {
  item.fullCredit = "Identifies adherence and technique as primary barriers to assessing treatment response";
});
updateItem('Week3_Patient_B_Wednesday', '3C.1', item => {
  item.fullCredit = "Identifies COPD knowledge deficit / inhaler technique deficiency as a distinct problem";
});
updateItem('Week3_Patient_B_Wednesday', '3C.2', item => {
  item.fullCredit = "Notes understanding has improved regarding cost but remains incomplete regarding daily scheduled adherence";
});
updateItem('Week3_Patient_B_Wednesday', '3C.3', item => {
  item.fullCredit = "Addresses unrealistic expectations regarding treatment timeline and symptom onset";
});
updateItem('Week3_Patient_B_Wednesday', '3C.6', item => {
  item.fullCredit = "Instructs on Ellipta device steps: slide cover until click, exhale away, inhale deeply/steadily, and hold breath";
});
updateItem('Week3_Patient_B_Wednesday', '3C.7', item => {
  item.fullCredit = "States additional education and teach-back demonstration is warranted";
});
updateItem('Week3_Patient_B_Wednesday', '3C.8', item => {
  item.fullCredit = "Distinguishes knowledge deficit from behavioral forgetfulness/adherence barriers";
});
updateItem('Week3_Patient_B_Wednesday', '3C.9', item => {
  item.fullCredit = "Notes that understanding of daily routine remains incomplete despite prior education";
});
updateItem('Week3_Patient_B_Wednesday', '3C.10', item => {
  item.fullCredit = "Discusses maintenance vs rescue inhaler purpose knowledge deficit";
});
updateItem('Week3_Patient_B_Wednesday', '3D.1', item => {
  item.fullCredit = "Identifies former tobacco use / sustained smoking abstinence as a problem in assessment";
});
updateItem('Week3_Patient_B_Wednesday', '3D.2', item => {
  item.fullCredit = "Reiterates current tobacco-free status and 5-year duration of abstinence";
});
updateItem('Week3_Patient_B_Wednesday', '3D.3', item => {
  item.fullCredit = "States importance of continued abstinence for slowing COPD lung function decline";
});
updateItem('Week3_Patient_B_Wednesday', '3D.4', item => {
  item.fullCredit = "Provides positive reinforcement / praise for successful smoking cessation";
});
updateItem('Week3_Patient_B_Wednesday', '3D.5', item => {
  item.fullCredit = "Acknowledges cessation timeline (quit 5 years ago) in clinical context";
});
updateItem('Week3_Patient_B_Wednesday', '3D.6', item => {
  item.fullCredit = "Confirms smoking cessation is sustained and cessation pharmacotherapy is not indicated";
});
updateItem('Week3_Patient_B_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a distinct problem in Assessment";
});
updateItem('Week3_Patient_B_Wednesday', '3E.2', item => {
  item.fullCredit = "Identifies pneumococcal vaccination gap (PCV20 indicated for age >=65 with COPD)";
});
updateItem('Week3_Patient_B_Wednesday', '3E.3', item => {
  item.fullCredit = "Identifies RSV vaccination gap (indicated for age 60-74 with COPD)";
});
updateItem('Week3_Patient_B_Wednesday', '3E.4', item => {
  item.fullCredit = "Identifies Tdap booster overdue status (>10 years ago)";
});
updateItem('Week3_Patient_B_Wednesday', '3E.5', item => {
  item.fullCredit = "Reiterates influenza up-to-date status in assessment";
});
updateItem('Week3_Patient_B_Wednesday', '3E.6', item => {
  item.fullCredit = "Reiterates COVID-19 vaccination status in assessment";
});
updateItem('Week3_Patient_B_Wednesday', '3E.7', item => {
  item.fullCredit = "States preventive care optimization / closing vaccine gaps remains indicated";
});
updateItem('Week3_Patient_B_Wednesday', '3E.8', item => {
  item.fullCredit = "Frames preventive care as a distinct clinical problem in Assessment";
});
updateItem('Week3_Patient_B_Wednesday', '3E.9', item => {
  item.fullCredit = "Links pneumococcal and RSV vaccination to COPD preventive respiratory priorities";
});
updateItem('Week3_Patient_B_Wednesday', '3E.10', item => {
  item.fullCredit = "Links Tdap to adult routine booster schedule (every 10 years)";
});
updateItem('Week3_Patient_B_Wednesday', '3E.11', item => {
  item.fullCredit = "Identifies actionable immunization gaps (pneumococcal, RSV, Tdap)";
});
updateItem('Week3_Patient_B_Wednesday', '3E.12', item => {
  item.fullCredit = "Discusses respiratory vaccine relevance to reducing COPD exacerbation risk";
});
updateItem('Week3_Patient_B_Wednesday', '4A.4', item => {
  item.fullCredit = "Explicitly decides to withhold therapy escalation (no escalation today)";
});
updateItem('Week3_Patient_B_Wednesday', '4A.5', item => {
  item.fullCredit = "States rationale for non-escalation: adherence and technique must be optimized before evaluating efficacy";
});
updateItem('Week3_Patient_B_Wednesday', '4A.6', item => {
  item.fullCredit = "Plans to reassess symptom response after adherence and technique improve";
});
updateItem('Week3_Patient_B_Wednesday', '4A.7', item => {
  item.fullCredit = "States ICS / triple therapy is withheld at this visit";
});
updateItem('Week3_Patient_B_Wednesday', '4A.8', item => {
  item.fullCredit = "Explicitly states LABA/LAMA therapy (Anoro Ellipta) is continued";
});
updateItem('Week3_Patient_B_Wednesday', '4A.9', item => {
  item.fullCredit = "Cites GOLD Group B guideline support for continuing dual bronchodilator regimen";
});
updateItem('Week3_Patient_B_Wednesday', '4A.10', item => {
  item.fullCredit = "Defers escalation decision pending adherence and technique reassessment";
});
updateItem('Week3_Patient_B_Wednesday', '4B.1', item => {
  item.fullCredit = "Discusses importance of daily scheduled inhaler use (not PRN)";
});
updateItem('Week3_Patient_B_Wednesday', '4B.2', item => {
  item.fullCredit = "Reviews maintenance vs rescue distinction in plan";
});
updateItem('Week3_Patient_B_Wednesday', '4B.3', item => {
  item.fullCredit = "Discusses expected timeline of benefit from daily maintenance therapy";
});
updateItem('Week3_Patient_B_Wednesday', '4B.4', item => {
  item.fullCredit = "Recommends daily routine pairing strategy (e.g., placing inhaler next to coffee maker)";
});
updateItem('Week3_Patient_B_Wednesday', '4B.5', item => {
  item.fullCredit = "Instructs on full Ellipta technique: slide cover until click, exhale away, inhale deeply, and hold breath";
});
updateItem('Week3_Patient_B_Wednesday', '4B.6', item => {
  item.fullCredit = "Recommends phone alarm, visual cue, or calendar reminder adherence strategy";
});
updateItem('Week3_Patient_B_Wednesday', '4B.7', item => {
  item.fullCredit = "Recommends visual cue adherence strategy (e.g. coffee maker placement)";
});
updateItem('Week3_Patient_B_Wednesday', '4B.8', item => {
  item.fullCredit = "Specifically addresses forgetfulness barrier with concrete routine habit";
});
updateItem('Week3_Patient_B_Wednesday', '4B.9', item => {
  item.fullCredit = "Addresses unrealistic expectations regarding symptom improvement timeline";
});
updateItem('Week3_Patient_B_Wednesday', '4B.10', item => {
  item.fullCredit = "Plans to reassess adherence at next follow-up visit";
});
updateItem('Week3_Patient_B_Wednesday', '4B.11', item => {
  item.fullCredit = "Plans to re-evaluate inhaler technique at follow-up visit";
});
updateItem('Week3_Patient_B_Wednesday', '4B.12', item => {
  item.fullCredit = "Confirms affordability is resolved ($20 copay) and maintains access";
});
updateItem('Week3_Patient_B_Wednesday', '4B.13', item => {
  item.fullCredit = "Frames adherence optimization as an essential prerequisite to future escalation";
});
updateItem('Week3_Patient_B_Wednesday', '4C.1', item => {
  item.fullCredit = "Reviews COPD disease progression and functional preservation with patient";
});
updateItem('Week3_Patient_B_Wednesday', '4C.2', item => {
  item.fullCredit = "Reviews purpose of maintenance therapy in education plan";
});
updateItem('Week3_Patient_B_Wednesday', '4C.3', item => {
  item.fullCredit = "Reviews expected symptom improvement timeline with patient";
});
updateItem('Week3_Patient_B_Wednesday', '4C.4', item => {
  item.fullCredit = "Reviews exacerbation prevention as a core treatment goal";
});
updateItem('Week3_Patient_B_Wednesday', '4C.5', item => {
  item.fullCredit = "Reviews full Anoro Ellipta device steps (slide click, exhale away, deep breath, breath hold)";
});
updateItem('Week3_Patient_B_Wednesday', '4C.6', item => {
  item.fullCredit = "Addresses maintenance vs rescue inhaler purposes in education plan";
});
updateItem('Week3_Patient_B_Wednesday', '4C.8', item => {
  item.fullCredit = "Separates educational instruction from behavioral adherence habit strategies";
});
updateItem('Week3_Patient_B_Wednesday', '4C.9', item => {
  item.fullCredit = "Addresses smoking cessation reinforcement or confirms stable abstinence";
});
updateItem('Week3_Patient_B_Wednesday', '4D.1', item => {
  item.fullCredit = "Reinforces continued smoking abstinence to slow COPD lung function decline";
});
updateItem('Week3_Patient_B_Wednesday', '4D.2', item => {
  item.fullCredit = "Congratulates patient / provides positive reinforcement on sustained smoking cessation";
});
updateItem('Week3_Patient_B_Wednesday', '4D.3', item => {
  item.fullCredit = "Confirms smoking cessation pharmacotherapy is not indicated";
});
updateItem('Week3_Patient_B_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20 or PCV15 + PPSV23)";
});
updateItem('Week3_Patient_B_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo)";
});
updateItem('Week3_Patient_B_Wednesday', '4E.3', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
});
updateItem('Week3_Patient_B_Wednesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza and COVID-19 vaccines are up to date";
});
updateItem('Week3_Patient_B_Wednesday', '4E.5', item => {
  item.fullCredit = "Frames vaccination recommendations as actionable plan orders / referrals";
});
updateItem('Week3_Patient_B_Wednesday', '4E.6', item => {
  item.fullCredit = "Links immunizations to COPD diagnosis and age-related risk";
});
updateItem('Week3_Patient_B_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans monitoring of dyspnea and symptom control at follow-up";
});
updateItem('Week3_Patient_B_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans monitoring of exertional dyspnea symptoms";
});
updateItem('Week3_Patient_B_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans monitoring of functional activity tolerance";
});
updateItem('Week3_Patient_B_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans monitoring of rescue albuterol use frequency";
});
updateItem('Week3_Patient_B_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans monitoring for acute COPD exacerbations";
});
updateItem('Week3_Patient_B_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans monitoring of medication adherence (daily use next to coffee maker)";
});
updateItem('Week3_Patient_B_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans demonstration and re-evaluation of inhaler technique at follow-up";
});
updateItem('Week3_Patient_B_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans monitoring of preventive care / vaccine administration follow-through";
});
updateItem('Week3_Patient_B_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up interval (e.g. ~4-8 weeks or ~3 months)";
});
updateItem('Week3_Patient_B_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans to reassess adherence at follow-up";
});
updateItem('Week3_Patient_B_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans to reassess symptom burden and CAT score at follow-up";
});
updateItem('Week3_Patient_B_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans to reassess dyspnea, activity tolerance, and inhaler technique at follow-up";
});
updateItem('Week3_Patient_B_Wednesday', '4G.5', item => {
  item.fullCredit = "Plans to determine need for therapy escalation if symptoms persist despite optimized adherence";
});
updateItem('Week3_Patient_B_Wednesday', '5A.2', item => {
  item.fullCredit = "Assessment addresses prioritized clinical problems (COPD severity, adherence/technique, knowledge, tobacco, vaccines)";
});
updateItem('Week3_Patient_B_Wednesday', '5A.3', item => {
  item.fullCredit = "Plan mirrors assessed problems across COPD management, adherence, education, and preventive care";
});
updateItem('Week3_Patient_B_Wednesday', '5A.4', item => {
  item.fullCredit = "Structures SOAP note with clear headings, grouping, and clinical sequencing";
});
updateItem('Week3_Patient_B_Wednesday', '5C.1', item => {
  item.fullCredit = "Uses appropriate clinical terminology (exacerbation, bronchodilator, GOLD, maintenance therapy)";
});
updateItem('Week3_Patient_B_Wednesday', '5C.2', item => {
  item.fullCredit = "Assessment provides clear, clinically grounded statements regarding COPD control and technique";
});
updateItem('Week3_Patient_B_Wednesday', '5C.3', item => {
  item.fullCredit = "Plan provides specific, action-oriented items covering technique, routine, and monitoring";
});

// ==================== BOB THURSDAY ====================
updateItem('Week3_Patient_B_Thursday', '1A.7', item => {
  item.fullCredit = "Documents visit context: adherence intervention history (coffee mug) and prior LABA/LAMA therapy";
});
updateItem('Week3_Patient_B_Thursday', '1C.3', item => {
  item.fullCredit = "Lists hypertension in PMH or problem list";
});
updateItem('Week3_Patient_B_Thursday', '1C.5', item => {
  item.fullCredit = "Lists hyperlipidemia in PMH or problem list";
});
updateItem('Week3_Patient_B_Thursday', '1D.10', item => {
  item.fullCredit = "Documents medication access/affordability confirmed (no cost concerns)";
});
updateItem('Week3_Patient_B_Thursday', '1E.18', item => {
  item.fullCredit = "Identifies Tdap booster status as overdue (>10 years ago) or review indicated";
});
updateItem('Week3_Patient_B_Thursday', '1F.1', item => {
  item.fullCredit = "Documents patient denies desire or craving to restart smoking";
});
updateItem('Week3_Patient_B_Thursday', '1F.2', item => {
  item.fullCredit = "Confirms denial of medication affordability concerns for the current visit";
});
updateItem('Week3_Patient_B_Thursday', '1F.3', item => {
  item.fullCredit = "Confirms denial of difficulty obtaining or refilling medications";
});
updateItem('Week3_Patient_B_Thursday', '1F.7', item => {
  item.fullCredit = "Documents absence of new medication adverse effects";
});
updateItem('Week3_Patient_B_Thursday', '1G.3', item => {
  item.fullCredit = "Documents patient goal to maintain independence and daily functional ability";
});
updateItem('Week3_Patient_B_Thursday', '1G.4', item => {
  item.fullCredit = "Documents patient goal to improve quality of life and avoid future exacerbations";
});
updateItem('Week3_Patient_B_Thursday', '2B.2', item => {
  item.fullCredit = "Interprets FEV1 (60-61% pred) as GOLD Grade 2 moderate airflow obstruction";
});
updateItem('Week3_Patient_B_Thursday', '2C.1', item => {
  item.fullCredit = "References FEV1/FVC < 0.70 threshold confirming persistent airflow obstruction";
});
updateItem('Week3_Patient_B_Thursday', '2C.2', item => {
  item.fullCredit = "Classifies obstruction as GOLD Grade 2 moderate (FEV1 60-61% predicted)";
});
updateItem('Week3_Patient_B_Thursday', '2C.4', item => {
  item.fullCredit = "Notes elevated blood eosinophils 310 cells/µL (>=300 threshold) favoring ICS escalation";
});
updateItem('Week3_Patient_B_Thursday', '3A.10', item => {
  item.fullCredit = "Cites GOLD 2026 Report (or GOLD guidelines) as the clinical framework";
});
updateItem('Week3_Patient_B_Thursday', '3A.13', item => {
  item.fullCredit = "Documents adherence is optimized and inhaler technique is verified/correct";
});
updateItem('Week3_Patient_B_Thursday', '3B.2', item => {
  item.fullCredit = "Cites elevated eosinophils (310 cells/µL, >=300 threshold) supporting escalation to triple therapy (Trelegy Ellipta)";
});
updateItem('Week3_Patient_B_Thursday', '3B.4', item => {
  item.fullCredit = "Cites GOLD 2026 recommendation for eosinophil-guided ICS escalation in patients with recurrent exacerbations";
});
updateItem('Week3_Patient_B_Thursday', '3B.5', item => {
  item.fullCredit = "Notes ICS benefit is supported by blood eosinophils >=300 cells/µL (310 cells/µL)";
});
updateItem('Week3_Patient_B_Thursday', '3C.1', item => {
  item.fullCredit = "Documents inhaler technique is resolved, correct, and verified on demonstration";
});
updateItem('Week3_Patient_B_Thursday', '3C.7', item => {
  item.fullCredit = "Recommends continuing established adherence routine (coffee mug reminder)";
});
updateItem('Week3_Patient_B_Thursday', '3D.1', item => {
  item.fullCredit = "Identifies former tobacco use / sustained abstinence as a clinical problem";
});
updateItem('Week3_Patient_B_Thursday', '3D.2', item => {
  item.fullCredit = "Documents tobacco-free status (quit 5 years ago, 45 pack-years)";
});
updateItem('Week3_Patient_B_Thursday', '3D.3', item => {
  item.fullCredit = "Identifies smoking cessation as the most effective intervention for slowing COPD progression";
});
updateItem('Week3_Patient_B_Thursday', '3D.4', item => {
  item.fullCredit = "States continued abstinence reduces future respiratory complications and mortality";
});
updateItem('Week3_Patient_B_Thursday', '3D.5', item => {
  item.fullCredit = "Recommends reinforcing continued smoking abstinence";
});
updateItem('Week3_Patient_B_Thursday', '3D.6', item => {
  item.fullCredit = "Documents patient denies craving or desire to restart smoking";
});
updateItem('Week3_Patient_B_Thursday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a problem in Assessment";
});
updateItem('Week3_Patient_B_Thursday', '3E.4', item => {
  item.fullCredit = "Identifies Tdap booster gap (overdue >10 years ago)";
});
updateItem('Week3_Patient_B_Thursday', '3E.7', item => {
  item.fullCredit = "States preventive care optimization remains appropriate given chronic respiratory disease";
});
updateItem('Week3_Patient_B_Thursday', '3E.8', item => {
  item.fullCredit = "Cites GOLD 2026 support for vaccination in COPD management";
});
updateItem('Week3_Patient_B_Thursday', '4A.1', item => {
  item.fullCredit = "Escalates to single-inhaler triple therapy: Trelegy Ellipta (fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg 1 inhalation daily)";
});
updateItem('Week3_Patient_B_Thursday', '4A.4', item => {
  item.fullCredit = "Addresses rescue inhaler use frequency target (reduction with triple therapy)";
});
updateItem('Week3_Patient_B_Thursday', '4A.5', item => {
  item.fullCredit = "States continuation of albuterol HFA for PRN acute rescue";
});
updateItem('Week3_Patient_B_Thursday', '4A.6', item => {
  item.fullCredit = "Specifies albuterol regimen: 2 puffs q4-6h PRN shortness of breath";
});
updateItem('Week3_Patient_B_Thursday', '4A.8', item => {
  item.fullCredit = "Includes inhaler technique review and demonstration for Trelegy Ellipta";
});
updateItem('Week3_Patient_B_Thursday', '4A.11', item => {
  item.fullCredit = "Discusses expected benefit of triple therapy: improved symptom control and reduced rescue inhaler use";
});
updateItem('Week3_Patient_B_Thursday', '4A.12', item => {
  item.fullCredit = "Discusses expected quality of life benefit and reduced exacerbation frequency";
});
updateItem('Week3_Patient_B_Thursday', '4B.1', item => {
  item.fullCredit = "Includes written COPD action plan review in plan";
});
updateItem('Week3_Patient_B_Thursday', '4B.2', item => {
  item.fullCredit = "Educates on early recognition of worsening symptoms and prompt treatment";
});
updateItem('Week3_Patient_B_Thursday', '4B.4', item => {
  item.fullCredit = "Discusses infection prevention via respiratory vaccinations";
});
updateItem('Week3_Patient_B_Thursday', '4B.5', item => {
  item.fullCredit = "Discusses infection prevention via avoidance of respiratory exposures and hand hygiene";
});
updateItem('Week3_Patient_B_Thursday', '4C.1', item => {
  item.fullCredit = "Includes continued inhaler technique monitoring and mouth rinsing counseling for ICS";
});
updateItem('Week3_Patient_B_Thursday', '4C.3', item => {
  item.fullCredit = "Encourages continued daily adherence with coffee mug routine";
});
updateItem('Week3_Patient_B_Thursday', '4D.1', item => {
  item.fullCredit = "Congratulates patient on continued smoking cessation success";
});
updateItem('Week3_Patient_B_Thursday', '4D.2', item => {
  item.fullCredit = "Encourages lifelong smoking abstinence";
});
updateItem('Week3_Patient_B_Thursday', '4D.3', item => {
  item.fullCredit = "Links continued abstinence to slowed COPD progression";
});
updateItem('Week3_Patient_B_Thursday', '4E.2', item => {
  item.fullCredit = "Plans monitoring of dyspnea symptoms at follow-up";
});
updateItem('Week3_Patient_B_Thursday', '4E.3', item => {
  item.fullCredit = "Plans monitoring of functional activity tolerance";
});
updateItem('Week3_Patient_B_Thursday', '4E.4', item => {
  item.fullCredit = "Plans monitoring of rescue inhaler use frequency";
});
updateItem('Week3_Patient_B_Thursday', '4E.6', item => {
  item.fullCredit = "Plans monitoring of medication adherence to Trelegy Ellipta";
});
updateItem('Week3_Patient_B_Thursday', '4E.7', item => {
  item.fullCredit = "Plans monitoring of inhaler technique and mouth rinsing at follow-up";
});
updateItem('Week3_Patient_B_Thursday', '4F.1', item => {
  item.fullCredit = "Recommends PCV20 vaccination (or PCV15 + PPSV23)";
});
updateItem('Week3_Patient_B_Thursday', '4F.2', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo)";
});
updateItem('Week3_Patient_B_Thursday', '4F.3', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
});
updateItem('Week3_Patient_B_Thursday', '4F.4', item => {
  item.fullCredit = "Includes immunization history review and updating records";
});
updateItem('Week3_Patient_B_Thursday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timing (e.g. 4-8 weeks or 1-3 months)";
});
updateItem('Week3_Patient_B_Thursday', '4G.5', item => {
  item.fullCredit = "Plans evaluation of adherence and inhaler technique at follow-up";
});
updateItem('Week3_Patient_B_Thursday', '4G.6', item => {
  item.fullCredit = "Plans monitoring for ICS-related adverse effects (oral candidiasis, dysphonia, pneumonia)";
});
updateItem('Week3_Patient_B_Thursday', '4G.7', item => {
  item.fullCredit = "States continuation of longitudinal COPD management and follow-up";
});
updateItem('Week3_Patient_B_Thursday', '5B.3', item => {
  item.fullCredit = "Cites GOLD 2026 guideline rationale supporting triple therapy for exacerbations with eosinophils >=300";
});
updateItem('Week3_Patient_B_Thursday', '5B.4', item => {
  item.fullCredit = "Provides concrete, actionable plan details including specific triple therapy agent, dose, frequency, and monitoring";
});

// ==================== RE-NORMALIZE ALL 9 WEEK 3 RUBRICS ====================
const targets = {
  '1': 25.0,
  '2': 15.0,
  '3': 30.0,
  '4': 25.0,
  '5': 5.0
};

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

for (const key of w3Keys) {
  const rub = rubrics[key];
  if (!rub) continue;

  for (const s of ['1', '2', '3', '4', '5']) {
    const sectionItems = rub.filter(item => {
      const sec = (item.section ? String(item.section) : item.id[0]);
      return sec === s;
    });

    if (sectionItems.length === 0) continue;

    const currentSum = sectionItems.reduce((acc, item) => acc + item.points, 0);
    const targetSum = targets[s];
    const factor = targetSum / currentSum;

    // Scale each item
    for (const item of sectionItems) {
      item.points = Math.round(item.points * factor * 100) / 100;
    }

    // Adjust residual on the item with largest points
    const scaledSum = sectionItems.reduce((acc, item) => acc + item.points, 0);
    const residual = Math.round((targetSum - scaledSum) * 100) / 100;

    if (Math.abs(residual) > 0.0001) {
      let largest = sectionItems[0];
      for (const it of sectionItems) {
        if (it.points > largest.points) largest = it;
      }
      largest.points = Math.round((largest.points + residual) * 100) / 100;
    }
  }
}

// Write back to file
fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2) + '\n', 'utf8');
console.log('Successfully updated Bob Jenkins rubrics in granular_rubrics.json and normalized points!');
