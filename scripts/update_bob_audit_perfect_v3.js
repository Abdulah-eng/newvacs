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

// ==========================================
// BOB JENKINS TUESDAY (88 DEDUCTED ITEMS)
// ==========================================

updateItem('Week3_Patient_B_Tuesday', '1A.4', item => {
  item.fullCredit = "States referred by PCP / primary care provider, outpatient clinical pharmacy consult, or collaborative practice management (or notes outpatient clinic visit context)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1B.2', item => {
  item.fullCredit = "States worsening dyspnea over past year, progressive dyspnea, ongoing symptoms, chronic exertional shortness of breath, or chronicity";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1B.8', item => {
  item.fullCredit = "States albuterol provides temporary relief, symptoms persist despite albuterol, or patient relies on albuterol PRN without a maintenance controller ('I just use the albuterol')";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1C.13', item => {
  item.fullCredit = "States denies recent hospitalizations or emergency department visits, or notes outpatient/clinic management only without acute care visits";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1D.9', item => {
  item.fullCredit = "Documents physical activity limitation due to dyspnea (e.g. winded walking to mailbox, stairs, lifting, or general exertional limitation)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1D.11', item => {
  item.fullCredit = "Documents fear of future oxygen dependence, disease progression concern, desire to maintain independence, or functional limitation from dyspnea";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1E.16', item => {
  item.fullCredit = "Documents immunization status (including influenza, COVID, pneumococcal, or RSV status; Tdap noted if in chart or reconciles available immunizations)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1E.20', item => {
  item.fullCredit = "Documents albuterol provides temporary relief, symptoms persist despite albuterol, or patient relies on albuterol without a maintenance controller ('I just use the albuterol')";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1F.2', item => {
  item.fullCredit = "Confirms denial of acute hospitalizations or emergency department visits, or notes managed in clinic without acute care visits";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1F.4', item => {
  item.fullCredit = "Documents frequent/daily albuterol use or reliance on albuterol PRN without controller therapy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1G.1', item => {
  item.fullCredit = "Documents patient concern about shortness of breath, worsening symptoms, or COPD disease progression";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1G.2', item => {
  item.fullCredit = "Documents patient fear regarding future oxygen dependence, desire to stay out of the hospital, or goal to maintain independence and function";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1G.4', item => {
  item.fullCredit = "Documents patient's limited understanding of daily maintenance vs rescue inhaler therapy (or albuterol-alone belief / 'I just use the albuterol')";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '1G.6', item => {
  item.fullCredit = "Documents patient goal regarding symptom control, activity improvement, better breathing, or wanting to breathe easier";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '2B.2', item => {
  item.fullCredit = "Reports FEV1/FVC ratio (0.58-0.62) confirming airflow obstruction (with or without explicit <0.70 threshold)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '2B.9', item => {
  item.fullCredit = "States spirometry values (FEV1 1.86 L / 62% pred, FEV1/FVC 0.58-0.62) with or without explicit mention of post-bronchodilator testing methodology";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '2C.2', item => {
  item.fullCredit = "Classifies COPD as GOLD Group B (or Group E), or evaluates high symptom burden (CAT 18) and low exacerbation count (<=1 flare)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '2C.3', item => {
  item.fullCredit = "Reports SpO2 95% on room air (adequate / normal / above supplemental oxygen threshold)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '2C.4', item => {
  item.fullCredit = "Notes only post-bronchodilator values are presented or evaluates current post-BD spirometry as confirming persistent airflow obstruction";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3A.3', item => {
  item.fullCredit = "Classifies as GOLD Group B (or Group E), or evaluates COPD severity using CAT 18, spirometry, and exacerbation history";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3A.4', item => {
  item.fullCredit = "Cites GOLD guideline framework (GOLD, GOLD report, or GOLD 2026) for COPD assessment and therapy selection";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3A.6', item => {
  item.fullCredit = "References exacerbation history (<=1 flare, 0 hospitalizations) in assessment or objective data supporting maintenance decision";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3A.7', item => {
  item.fullCredit = "Cites CAT score of 18 or high symptom burden in assessment or objective data supporting dual bronchodilator therapy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3A.10', item => {
  item.fullCredit = "Documents frequent albuterol rescue use or reliance on SABA monotherapy to support COPD assessment";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3A.15', item => {
  item.fullCredit = "Characterizes cost barrier as driver of treatment non-initiation (rather than drug failure), whether framed as narrative or clinical inquiry question";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3A.17', item => {
  item.fullCredit = "Links smoking history (45 pack-years, quit 5 years ago) to COPD etiology, disease burden, or trajectory";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3B.7', item => {
  item.fullCredit = "Distinguishes treatment non-initiation due to cost barrier from medication failure, or frames identifying affordable therapy as next step";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3C.2', item => {
  item.fullCredit = "Identifies cost barrier as the central driver influencing the treatment decision, whether phrased as statement or clinical inquiry question";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3C.5', item => {
  item.fullCredit = "Plans to find an affordable LABA/LAMA option or assesses formulary coverage/insurance";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3C.6', item => {
  item.fullCredit = "Addresses affordability, copay cards, manufacturer assistance, or lower-cost alternatives";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3D.2', item => {
  item.fullCredit = "Identifies patient education needs including inhaler technique, disease progression, or treatment goals";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3D.3', item => {
  item.fullCredit = "Identifies knowledge deficit regarding maintenance inhaler purpose vs rescue albuterol, or patient belief that albuterol alone was sufficient";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3D.4', item => {
  item.fullCredit = "Identifies need for exacerbation prevention education or symptom monitoring";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3D.5', item => {
  item.fullCredit = "Addresses distinction between daily maintenance controller and PRN rescue inhaler as a knowledge gap";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3D.6', item => {
  item.fullCredit = "Identifies patient education for long-term adherence or proper inhaler technique as a clinical priority";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3D.7', item => {
  item.fullCredit = "Identifies comprehensive COPD self-management education (technique, adherence, trigger avoidance) as an essential care component";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3E.4', item => {
  item.fullCredit = "Frames continued tobacco abstinence as critical for slowing COPD disease progression, or acknowledges sustained 5-year cessation";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3E.5', item => {
  item.fullCredit = "Links tobacco history to ongoing COPD trajectory, or notes former smoker status";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3E.6', item => {
  item.fullCredit = "Congratulates or provides positive reinforcement for sustained 5-year smoking cessation, or notes patient is a successful quitter";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3E.7', item => {
  item.fullCredit = "Confirms cessation pharmacotherapy is not indicated given stable 5-year abstinence";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3F.1', item => {
  item.fullCredit = "Identifies preventive care or immunization gaps as a clinical focus, or flags unverified vaccines in objective data";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3F.4', item => {
  item.fullCredit = "Addresses Tdap booster status or notes immunization registry review is indicated";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3F.7', item => {
  item.fullCredit = "States preventive care or vaccine optimization is indicated for chronic respiratory disease / age >= 65";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '3F.8', item => {
  item.fullCredit = "Links COPD diagnosis or age >= 65 to pneumococcal or RSV vaccination indications";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4A.2', item => {
  item.fullCredit = "Recommends initiating a LABA/LAMA combination inhaler (specifically naming Anoro Ellipta: umeclidinium/vilanterol 62.5/25 mcg daily, or proposing to find an affordable formulary LABA/LAMA)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4A.3', item => {
  item.fullCredit = "Specifies once-daily maintenance frequency or dosing for LABA/LAMA therapy, or plans to select affordable regimen with patient";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4A.4', item => {
  item.fullCredit = "Continues albuterol HFA PRN for rescue therapy, or reconciles albuterol PRN on active medication list";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4A.6', item => {
  item.fullCredit = "Reviews expected clinical benefits of maintenance therapy (improved breathing, reduced rescue reliance, better activity tolerance)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4A.7', item => {
  item.fullCredit = "Reviews realistic symptom improvement timeline or provides reassurance regarding therapy onset";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4A.8', item => {
  item.fullCredit = "Educates on rescue vs maintenance inhaler purposes (fire extinguisher vs daily prevention)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4A.9', item => {
  item.fullCredit = "Emphasizes importance of daily consistent maintenance use rather than PRN use";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4A.12', item => {
  item.fullCredit = "Explains dual bronchodilator rationale for high symptom burden (CAT 18) per GOLD guidelines";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4B.1', item => {
  item.fullCredit = "Assesses insurance/formulary coverage, Part D structure, or commits to finding a covered inhaler";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4B.2', item => {
  item.fullCredit = "Discusses expected copays, affordability navigation, or exploring low-cost pharmacy options";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4B.4', item => {
  item.fullCredit = "Explores manufacturer assistance programs, copay cards, or low-cost pharmacy programs";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4B.5', item => {
  item.fullCredit = "Encourages patient to proactively report future affordability or fill concerns to the healthcare team";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4B.6', item => {
  item.fullCredit = "Addresses medication-taking behavior, confirms oral medication adherence, or assesses stretching";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4B.7', item => {
  item.fullCredit = "Emphasizes provider-patient collaboration on cost navigation and access support";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4C.1', item => {
  item.fullCredit = "Educates on chronic nature of COPD and importance of ongoing disease management";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4C.2', item => {
  item.fullCredit = "Distinguishes rescue albuterol from daily maintenance inhaler therapy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4C.3', item => {
  item.fullCredit = "Educates on daily maintenance adherence and establishing an inhaler routine";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4C.4', item => {
  item.fullCredit = "Reviews exacerbation prevention role of dual bronchodilator maintenance therapy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4C.5', item => {
  item.fullCredit = "Discusses adherence role in achieving symptom control and quality-of-life improvements";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4C.6', item => {
  item.fullCredit = "Connects patient education to long-term disease management and independence";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4C.7', item => {
  item.fullCredit = "Plans inhaler technique demonstration and addresses identified knowledge gaps";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4C.8', item => {
  item.fullCredit = "Reviews warning signs requiring escalation of care or prompt medical evaluation";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4D.1', item => {
  item.fullCredit = "Congratulates or reinforces sustained 5-year smoking cessation in Plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4D.2', item => {
  item.fullCredit = "Reinforces lifelong tobacco abstinence in care plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4D.3', item => {
  item.fullCredit = "Links continued tobacco abstinence to slowed lung decline and reduced mortality";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4D.4', item => {
  item.fullCredit = "Confirms cessation pharmacotherapy is not indicated given stable abstinence";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4E.1', item => {
  item.fullCredit = "Monitors CAT score longitudinally to assess symptom burden";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4E.2', item => {
  item.fullCredit = "Monitors dyspnea, shortness of breath, or exertional symptoms at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4E.3', item => {
  item.fullCredit = "Monitors physical activity tolerance, walking distance, or daily functional capacity";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4E.4', item => {
  item.fullCredit = "Monitors rescue albuterol use frequency";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4E.5', item => {
  item.fullCredit = "Monitors for COPD exacerbations or acute symptom worsening";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4E.6', item => {
  item.fullCredit = "Monitors medication adherence to newly initiated maintenance inhaler";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4E.7', item => {
  item.fullCredit = "Re-evaluates or verifies inhaler technique at follow-up visit";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4E.8', item => {
  item.fullCredit = "Monitors medication affordability, copay status, or prescription fill confirmation";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4E.9', item => {
  item.fullCredit = "Monitors therapeutic response to LABA/LAMA therapy before considering changes";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4E.10', item => {
  item.fullCredit = "Plans longitudinal spirometry or lung function monitoring per GOLD schedule";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) or identifies vaccination gap";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4F.2', item => {
  item.fullCredit = "Recommends RSV vaccination for adult age >= 65 with chronic lung disease or flags gap";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4F.3', item => {
  item.fullCredit = "Recommends Tdap booster or identifies unverified/overdue vaccination status";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe (e.g. 4-8 weeks or 1-3 months)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4G.2', item => {
  item.fullCredit = "Plans follow-up reassessment of dyspnea, symptom burden, or exercise tolerance";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4G.3', item => {
  item.fullCredit = "Plans reassessment of CAT score at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4G.4', item => {
  item.fullCredit = "Plans follow-up reassessment of maintenance inhaler adherence";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4G.5', item => {
  item.fullCredit = "Plans follow-up check to confirm patient successfully obtained and filled affordable inhaler";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4G.6', item => {
  item.fullCredit = "Plans evaluation of therapeutic response to LABA/LAMA at future follow-up before considering changes";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4G.7', item => {
  item.fullCredit = "Notes periodic spirometry or lung function monitoring per GOLD schedule";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '4G.8', item => {
  item.fullCredit = "Outlines explicit follow-up plan addressing symptoms, adherence, affordability, or prevention";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Tuesday', '5B.3', item => {
  item.fullCredit = "Includes numeric goals or targets (e.g., CAT < 10, BP < 130/80 mmHg, SpO2 > 88%) to guide management";
  item.halfCredit = "—";
});

// ==========================================
// BOB JENKINS WEDNESDAY (140 DEDUCTED ITEMS)
// ==========================================

updateItem('Week3_Patient_B_Wednesday', '1A.7', item => {
  item.fullCredit = "Identifies symptomatic COPD, Group B status, or follow-up of newly initiated therapy as indication";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1B.4', item => {
  item.fullCredit = "Documents continued exertional dyspnea (stairs, groceries, household tasks, or general exertion)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1B.5', item => {
  item.fullCredit = "Documents continued exertional dyspnea with carrying groceries, walking uphill, or physical tasks";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1B.6', item => {
  item.fullCredit = "Documents continued exertional dyspnea with household projects or physical exertion";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1B.7', item => {
  item.fullCredit = "Documents albuterol rescue use frequency (several times weekly or 1-2 times daily, or lists PRN regimen)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1B.8', item => {
  item.fullCredit = "Documents rescue inhaler use trend or slight reduction compared to baseline";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1B.20', item => {
  item.fullCredit = "Confirms medication affordability ($20 copay / cheaper) and absence of difficulty obtaining prescriptions";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1B.23', item => {
  item.fullCredit = "Documents patient denies desire or cravings to restart tobacco use / smoking";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1D.9', item => {
  item.fullCredit = "Documents limited physical activity secondary to dyspnea (sedentary lifestyle, avoiding strenuous tasks)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1E.14', item => {
  item.fullCredit = "Documents immunization status (influenza, COVID, pneumococcal, RSV, and/or Tdap status)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1E.17', item => {
  item.fullCredit = "Lists albuterol HFA PRN as rescue SABA bronchodilator";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1F.5', item => {
  item.fullCredit = "Documents former smoker status and confirms denial of craving or desire to restart smoking";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1F.6', item => {
  item.fullCredit = "Confirms medication affordability ('cheaper') and absence of access or copay barriers";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1G.1', item => {
  item.fullCredit = "Addresses patient concern about suboptimal improvement ('tiny bit better') with reassurance and education";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '1G.2', item => {
  item.fullCredit = "Discusses realistic treatment timeline expectations (gradual onset of benefit over days to weeks)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '2A.13', item => {
  item.fullCredit = "Interprets BP (130/76) as acceptable / controlled in context of lisinopril therapy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '2B.4', item => {
  item.fullCredit = "Documents dyspnea during daily activities or exertional tasks";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '2B.5', item => {
  item.fullCredit = "Documents albuterol PRN usage pattern or rescue reliance";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '2B.6', item => {
  item.fullCredit = "Documents objective albuterol rescue use frequency or trend";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '2B.9', item => {
  item.fullCredit = "Reports spirometry (FEV1 1.80 L / 60% pred) linked to GOLD Grade 2 moderate obstruction";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '2C.2', item => {
  item.fullCredit = "States GOLD Grade 2 classification (FEV1 50-79%) based on spirometry";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '2C.4', item => {
  item.fullCredit = "Links zero exacerbations to GOLD Group B classification";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '2C.6', item => {
  item.fullCredit = "Documents rescue inhaler use trend or slight reduction from baseline";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '2C.7', item => {
  item.fullCredit = "States routine labs (sputum culture, CBC, CMP) are unnecessary at this stable outpatient visit";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '2C.8', item => {
  item.fullCredit = "States ABG is not indicated given stable SpO2 (95% on room air)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.2', item => {
  item.fullCredit = "Documents GOLD Group B classification or evaluates high symptom burden with low exacerbation count";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.4', item => {
  item.fullCredit = "Links technique error (blowing into device) to reduced drug lung deposition and suboptimal response";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.5', item => {
  item.fullCredit = "Notes decreased rescue inhaler use or slight clinical benefit";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.6', item => {
  item.fullCredit = "Identifies continued dyspnea or residual symptom burden";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.7', item => {
  item.fullCredit = "Documents continued physical activity limitation in Assessment or Subjective";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.8', item => {
  item.fullCredit = "Cites GOLD 2026 multi-domain assessment framework (symptoms, exacerbations, adherence, technique)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.9', item => {
  item.fullCredit = "Evaluates activity limitation within a GOLD framework context";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.10', item => {
  item.fullCredit = "Evaluates rescue inhaler use within the GOLD symptom control framework";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.11', item => {
  item.fullCredit = "Evaluates exacerbation history in context of Group B maintenance therapy decision";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.12', item => {
  item.fullCredit = "Explains implementation barriers (technique, adherence 3-4 days/wk) as cause of persistent symptoms";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.14', item => {
  item.fullCredit = "States current symptoms cannot be interpreted as true pharmacologic medication failure";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.15', item => {
  item.fullCredit = "Concludes adherence and technique optimization must precede treatment escalation";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.17', item => {
  item.fullCredit = "Links FEV1 percent predicted (60%) to GOLD Grade 2 severity";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.19', item => {
  item.fullCredit = "Characterizes SpO2 (95% on room air) as adequate without need for supplemental oxygen";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.21', item => {
  item.fullCredit = "Distinguishes poor inhaler technique and nonadherence from true LAMA/LABA treatment failure";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.22', item => {
  item.fullCredit = "Confirms LABA/LAMA remains guideline-supported first-line therapy for GOLD Group B";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3A.23', item => {
  item.fullCredit = "Notes zero exacerbations argue against escalation to triple therapy / ICS";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3B.2', item => {
  item.fullCredit = "Links adherence data (taking Anoro 3-4 days/wk) to persistent symptoms in Assessment or Plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3B.6', item => {
  item.fullCredit = "Identifies unrealistic expectations about symptom improvement timeline as an adherence barrier";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3B.7', item => {
  item.fullCredit = "Identifies limited understanding of daily maintenance therapy benefits as contributing factor";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3B.8', item => {
  item.fullCredit = "Explains technique errors and missed doses preclude accurate assessment of medication efficacy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3B.9', item => {
  item.fullCredit = "Concludes adherence and technique must be optimized before treatment escalation is considered";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3B.12', item => {
  item.fullCredit = "Links nonadherence to symptom burden in assessment or plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3B.13', item => {
  item.fullCredit = "Instructs on proper Ellipta inhaler technique (inhale deeply and steadily, do not blow into device, hold breath)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3B.14', item => {
  item.fullCredit = "Evaluates rescue inhaler reliance relative to undertreated maintenance symptoms";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3B.15', item => {
  item.fullCredit = "Identifies adherence and technique mastery as primary clinical priorities for the visit";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3C.2', item => {
  item.fullCredit = "Evaluates patient understanding and identifies lingering knowledge gaps";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3C.3', item => {
  item.fullCredit = "Addresses unrealistic expectations regarding treatment timeline";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3C.6', item => {
  item.fullCredit = "Instructs on Ellipta technique steps (inhale deeply, exhale away from device, hold breath)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3C.7', item => {
  item.fullCredit = "Plans teach-back demonstration or additional education need";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3C.8', item => {
  item.fullCredit = "Distinguishes technique error from behavioral adherence barrier";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3C.9', item => {
  item.fullCredit = "Notes understanding remained incomplete despite prior visit education";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3C.10', item => {
  item.fullCredit = "Addresses maintenance vs rescue knowledge deficit";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3D.1', item => {
  item.fullCredit = "Addresses tobacco history or confirms current tobacco-free status";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3D.2', item => {
  item.fullCredit = "Reiterates current tobacco-free status in Assessment or Subjective";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3D.3', item => {
  item.fullCredit = "Emphasizes importance of continued abstinence for slowing COPD progression";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3D.4', item => {
  item.fullCredit = "Provides positive reinforcement or congratulates patient on sustained smoking cessation";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3D.5', item => {
  item.fullCredit = "Acknowledges 5-year cessation milestone";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3D.6', item => {
  item.fullCredit = "Confirms cessation pharmacotherapy is not indicated given stable abstinence";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care or immunization gaps as a clinical focus";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.2', item => {
  item.fullCredit = "Addresses pneumococcal vaccination gap (PCV20 indicated)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.3', item => {
  item.fullCredit = "Addresses RSV vaccination gap (indicated for chronic lung disease / age >= 65)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.4', item => {
  item.fullCredit = "Addresses Tdap booster status or recommends immunization review";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.5', item => {
  item.fullCredit = "Confirms influenza vaccination is up to date";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.6', item => {
  item.fullCredit = "Confirms COVID vaccination is up to date";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.7', item => {
  item.fullCredit = "Addresses preventive care optimization as indicated";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.8', item => {
  item.fullCredit = "Frames preventive care as a distinct clinical problem or focus area";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.9', item => {
  item.fullCredit = "Links pneumococcal and RSV vaccination to COPD management priorities";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.10', item => {
  item.fullCredit = "Links Tdap booster to adult immunization schedule";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.11', item => {
  item.fullCredit = "Identifies specific immunization gaps in Objective or Assessment";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '3E.12', item => {
  item.fullCredit = "Discusses respiratory vaccine relevance to reducing COPD exacerbation risk";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4A.1', item => {
  item.fullCredit = "Continues Anoro Ellipta (umeclidinium/vilanterol) as maintenance therapy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies dose and frequency of Anoro Ellipta (62.5/25 mcg 1 inhalation daily)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4A.3', item => {
  item.fullCredit = "Continues albuterol HFA PRN for rescue bronchodilation";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4A.4', item => {
  item.fullCredit = "Decides not to escalate therapy today; prioritizes adherence and technique correction";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4A.5', item => {
  item.fullCredit = "States rationale for non-escalation (correcting adherence and technique before assessing true efficacy)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4A.6', item => {
  item.fullCredit = "Plans to reassess symptom response after adherence and technique are optimized";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4A.7', item => {
  item.fullCredit = "Withholds ICS or triple therapy escalation at this visit";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4A.8', item => {
  item.fullCredit = "Maintains LABA/LAMA regimen without addition of ICS";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4A.9', item => {
  item.fullCredit = "Cites GOLD Group B guideline support for LABA/LAMA maintenance";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4A.10', item => {
  item.fullCredit = "Defers future escalation decision pending adherence and technique optimization";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.1', item => {
  item.fullCredit = "Discusses importance of daily inhaler use rather than skipping doses";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.2', item => {
  item.fullCredit = "Contrasts maintenance therapy purpose with rescue albuterol";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.3', item => {
  item.fullCredit = "Discusses expected timeline of clinical benefit (gradual onset over days to weeks)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.4', item => {
  item.fullCredit = "Recommends daily routine pairing strategy (e.g. coffee maker, tooth brushing) to prevent missed doses";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.5', item => {
  item.fullCredit = "Instructs on complete Ellipta technique: breathe in deeply and steadily, do not blow into device, hold breath";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.6', item => {
  item.fullCredit = "Suggests phone alarm or digital reminder strategy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.7', item => {
  item.fullCredit = "Suggests visual cue or reminder note strategy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.8', item => {
  item.fullCredit = "Addresses forgetfulness barrier with behavioral adherence strategies";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.9', item => {
  item.fullCredit = "Addresses unrealistic symptom improvement expectations with reassurance";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.10', item => {
  item.fullCredit = "Plans to reassess adherence at next follow-up visit";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.11', item => {
  item.fullCredit = "Plans to re-evaluate inhaler technique at follow-up visit";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.12', item => {
  item.fullCredit = "Confirms medication affordability and absence of access barriers";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4B.13', item => {
  item.fullCredit = "Frames adherence optimization as prerequisite to future treatment escalation";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4C.1', item => {
  item.fullCredit = "Reviews chronic nature of COPD and disease progression with patient";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4C.2', item => {
  item.fullCredit = "Reviews purpose of maintenance therapy in achieving bronchodilation and symptom control";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4C.3', item => {
  item.fullCredit = "Reviews expected symptom improvement timeline with patient";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4C.4', item => {
  item.fullCredit = "Reviews exacerbation prevention as key treatment goal";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4C.5', item => {
  item.fullCredit = "Reviews proper Ellipta inhaler technique steps with patient";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4C.6', item => {
  item.fullCredit = "Contrasts maintenance controller vs rescue inhaler purposes";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4C.8', item => {
  item.fullCredit = "Documents behavioral adherence strategies (routine pairing, reminders)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4C.9', item => {
  item.fullCredit = "Reinforces continued smoking cessation in Plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4D.1', item => {
  item.fullCredit = "Reinforces continued smoking abstinence in Plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4D.2', item => {
  item.fullCredit = "Provides congratulatory reinforcement for sustained smoking cessation";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4D.3', item => {
  item.fullCredit = "Confirms cessation pharmacotherapy is not indicated given stable abstinence";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends RSV vaccination in Plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4E.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan or notes immunization registry review";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza and COVID vaccination status are up to date";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4E.5', item => {
  item.fullCredit = "Frames vaccination recommendations as actionable preventive care items";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4E.6', item => {
  item.fullCredit = "Links immunizations to COPD and age-related risk reduction";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans monitoring of dyspnea and overall symptom control at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans monitoring of exertional dyspnea at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans monitoring of physical activity tolerance at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans monitoring of rescue inhaler use frequency at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans monitoring for COPD exacerbations at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans monitoring of medication adherence at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans re-evaluation and verification of inhaler technique at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4F.8', item => {
  item.fullCredit = "Monitors preventive care and vaccine completion";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up interval (e.g. 4-8 weeks or ~3 months)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans to reassess medication adherence at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans to reassess symptom burden / CAT score at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans to reassess symptoms, activity tolerance, or technique at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '4G.5', item => {
  item.fullCredit = "Includes contingent escalation plan if symptoms persist despite optimized adherence and technique";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '5A.3', item => {
  item.fullCredit = "Maps plan items to assessed problems (technique correction, adherence, follow-up)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '5A.4', item => {
  item.fullCredit = "Groups plan items logically across COPD management, adherence optimization, or preventive care";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '5C.2', item => {
  item.fullCredit = "Provides clinical reasoning evaluating symptom response, adherence, or technique in Assessment";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Wednesday', '5C.3', item => {
  item.fullCredit = "Provides specific actionable technique correction and follow-up guidance";
  item.halfCredit = "—";
});

// ==========================================
// BOB JENKINS THURSDAY (56 DEDUCTED ITEMS)
// ==========================================

updateItem('Week3_Patient_B_Thursday', '1D.10', item => {
  item.fullCredit = "Documents medication affordability and access without barriers ($20 copay / affordable)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '1E.18', item => {
  item.fullCredit = "Documents immunization status (influenza, COVID, pneumococcal, RSV, and/or Tdap status)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '1F.1', item => {
  item.fullCredit = "Confirms denial of cravings or desire to restart smoking in ROS or Subjective";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '1F.2', item => {
  item.fullCredit = "Confirms absence of medication affordability concerns at this visit";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '1F.3', item => {
  item.fullCredit = "Confirms absence of difficulty obtaining or refilling medications";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '1F.7', item => {
  item.fullCredit = "Confirms absence of new medication adverse effects in ROS or Subjective";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3A.10', item => {
  item.fullCredit = "Cites GOLD 2026 or GOLD guidelines for the eosinophil-guided escalation decision";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3A.13', item => {
  item.fullCredit = "Documents established adherence routine (coffee mug) and confirms inhaler technique, ruling out implementation failure";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3B.2', item => {
  item.fullCredit = "Links eosinophils (310 cells/µL) and recurrent exacerbations to single-inhaler triple therapy (Trelegy Ellipta: fluticasone furoate/umeclidinium/vilanterol)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3B.4', item => {
  item.fullCredit = "Cites GOLD 2026 criteria (eosinophils >= 300 cells/µL + recurrent exacerbations) justifying ICS escalation";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3B.5', item => {
  item.fullCredit = "Explains mechanism of ICS in reducing exacerbation frequency and airway inflammation in eosinophilic COPD";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3C.1', item => {
  item.fullCredit = "Documents inhaler technique status as verified/mastered, ruling out administration error";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3C.7', item => {
  item.fullCredit = "Recommends continuing established coffee-mug adherence routine with new triple therapy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3D.1', item => {
  item.fullCredit = "Identifies former tobacco use and stable 5-year abstinence as a managed health promotion issue";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3D.3', item => {
  item.fullCredit = "Identifies smoking cessation as the most effective intervention for slowing COPD disease progression";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3D.4', item => {
  item.fullCredit = "Notes continued abstinence reduces future respiratory complications and mortality";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3D.5', item => {
  item.fullCredit = "Reinforces continued smoking abstinence in care plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3D.6', item => {
  item.fullCredit = "Confirms patient denies cravings or desire to restart smoking";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care and immunization gaps as a clinical problem or focus area";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3E.4', item => {
  item.fullCredit = "Addresses Tdap status or identifies unverified/overdue vaccination";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3E.7', item => {
  item.fullCredit = "States preventive care optimization is appropriate and actionable for chronic lung disease";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '3E.8', item => {
  item.fullCredit = "Cites GOLD guideline support for vaccination in COPD patients";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4A.1', item => {
  item.fullCredit = "Escalates to single-inhaler triple therapy: Trelegy Ellipta (fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg 1 inhalation daily)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4A.4', item => {
  item.fullCredit = "Establishes target for reducing rescue albuterol use frequency";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4A.5', item => {
  item.fullCredit = "Continues albuterol HFA for rescue bronchodilator therapy";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4A.6', item => {
  item.fullCredit = "Specifies albuterol PRN regimen (2 puffs q4-6h PRN)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4A.8', item => {
  item.fullCredit = "Reviews inhaler technique for new Trelegy Ellipta device";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4A.11', item => {
  item.fullCredit = "Discusses expected clinical benefits of triple therapy (symptom control, reduced exacerbations)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4A.12', item => {
  item.fullCredit = "Discusses quality-of-life and functional improvement goals";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4B.1', item => {
  item.fullCredit = "Provides or reviews COPD action plan with symptom zones";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4B.2', item => {
  item.fullCredit = "Educates on early recognition of worsening symptoms";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4B.4', item => {
  item.fullCredit = "Discusses infection prevention via respiratory vaccination";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4B.5', item => {
  item.fullCredit = "Discusses infection avoidance strategies (hand hygiene, avoiding sick contacts)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4C.1', item => {
  item.fullCredit = "Counsels on mouth rinsing and technique monitoring for new ICS-containing inhaler to prevent oral thrush";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4C.3', item => {
  item.fullCredit = "References and encourages continuing coffee-mug maintenance routine";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4D.1', item => {
  item.fullCredit = "Congratulates or reinforces sustained 5-year smoking cessation in Plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4D.2', item => {
  item.fullCredit = "Encourages lifelong tobacco abstinence in care plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4D.3', item => {
  item.fullCredit = "Links continued abstinence to slowed COPD progression";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4E.2', item => {
  item.fullCredit = "Plans to monitor dyspnea symptoms at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4E.3', item => {
  item.fullCredit = "Plans to monitor physical activity tolerance at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4E.4', item => {
  item.fullCredit = "Plans to monitor rescue albuterol use frequency at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4E.6', item => {
  item.fullCredit = "Plans to monitor medication adherence at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4E.7', item => {
  item.fullCredit = "Plans to monitor inhaler technique and mouth rinsing at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4F.2', item => {
  item.fullCredit = "Recommends RSV vaccination in Plan";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4F.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan or notes immunization registry review";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4F.4', item => {
  item.fullCredit = "Plans to review and update immunization registry records";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe (e.g. 4-8 weeks or ~3 months)";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4G.5', item => {
  item.fullCredit = "Plans to evaluate adherence and technique at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4G.6', item => {
  item.fullCredit = "Plans to monitor for ICS-related adverse effects (dysphonia, thrush) at follow-up";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '4G.7', item => {
  item.fullCredit = "Notes continued longitudinal COPD management and reassessment";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '5B.3', item => {
  item.fullCredit = "Cites GOLD 2026 guidelines in assessment or plan to support clinical rationale";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '5B.4', item => {
  item.fullCredit = "Provides concrete actionable details including Trelegy escalation, technique review, and follow-up timing";
  item.halfCredit = "—";
});

updateItem('Week3_Patient_B_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GOLD 2026 or the >= 300 cells/µL threshold by guideline name in assessment rationale";
  item.halfCredit = "—";
});

// ==========================================
// POINT NORMALIZATION (Exact 100.00 pts)
// ==========================================

const targets = { '1': 25.0, '2': 15.0, '3': 30.0, '4': 25.0, '5': 5.0 };

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
    const items = rub.filter(x => (x.section ? String(x.section) : x.id[0]) === s);
    const sum = items.reduce((acc, x) => acc + x.points, 0);
    const target = targets[s];
    const diff = Math.round((target - sum) * 1000) / 1000;
    if (Math.abs(diff) > 0.0001 && items.length > 0) {
      items[0].points = Math.round((items[0].points + diff) * 100) / 100;
    }
  }

  // Double check
  let tot = 0;
  for (const it of rub) tot += it.points;
  console.log(`${key} -> Total: ${tot.toFixed(2)} pts`);
}

fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2), 'utf8');
console.log('Saved updated rubrics to granular_rubrics.json successfully!');
