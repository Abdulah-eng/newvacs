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
// BOB JENKINS TUESDAY
// ==========================================

updateItem('Week3_Patient_B_Tuesday', '1D.11', item => {
  item.fullCredit = "Documents fear of future oxygen dependence, disease progression concern, or goal to preserve independence/function";
  item.halfCredit = "Mentions patient wants to stay active";
});

updateItem('Week3_Patient_B_Tuesday', '1E.16', item => {
  item.fullCredit = "Documents Tdap status (overdue >10 years or unverified), or notes immunization review indicated";
  item.halfCredit = "Mentions vaccine history";
});

updateItem('Week3_Patient_B_Tuesday', '1G.1', item => {
  item.fullCredit = "Documents patient concern about COPD disease progression, worsening breathlessness, or symptom burden";
  item.halfCredit = "Mentions shortness of breath";
});

updateItem('Week3_Patient_B_Tuesday', '1G.2', item => {
  item.fullCredit = "Documents patient fear regarding future oxygen dependence or goal to maintain functional independence";
  item.halfCredit = "Mentions wanting to stay out of the hospital";
});

updateItem('Week3_Patient_B_Tuesday', '1G.4', item => {
  item.fullCredit = "Documents patient's limited understanding of daily maintenance vs rescue inhaler therapy (or albuterol-alone belief)";
  item.halfCredit = "Notes patient relies on albuterol";
});

updateItem('Week3_Patient_B_Tuesday', '1G.6', item => {
  item.fullCredit = "Documents patient goal regarding symptom control, activity improvement, or better endurance";
  item.halfCredit = "Mentions wanting to breathe easier";
});

updateItem('Week3_Patient_B_Tuesday', '2C.2', item => {
  item.fullCredit = "Classifies COPD as GOLD Group B (or Group E) using CAT score (18) and exacerbation history (<=1 flare), or notes high symptom burden with low flare risk";
  item.halfCredit = "Mentions CAT score without group classification";
});

updateItem('Week3_Patient_B_Tuesday', '2C.3', item => {
  item.fullCredit = "Interprets SpO2 95% on room air as adequate / normal / above the 88% supplemental oxygen threshold";
  item.halfCredit = "Reports SpO2 value without interpretation";
});

updateItem('Week3_Patient_B_Tuesday', '3A.3', item => {
  item.fullCredit = "States GOLD Group B (or Group E) classification based on CAT 18 (>=10) and low exacerbation risk, or identifies high symptom burden COPD";
  item.halfCredit = "References GOLD guidelines without group letter";
});

updateItem('Week3_Patient_B_Tuesday', '3A.17', item => {
  item.fullCredit = "Links 45 pack-year smoking history to COPD disease burden, lung function impairment, or progression trajectory";
  item.halfCredit = "Mentions smoking history in assessment";
});

updateItem('Week3_Patient_B_Tuesday', '3B.1', item => {
  item.fullCredit = "Identifies medication non-initiation due to cost barrier ($300 inhaler cost) as a primary clinical problem";
  item.halfCredit = "Notes patient did not pick up inhaler";
});

updateItem('Week3_Patient_B_Tuesday', '3C.5', item => {
  item.fullCredit = "Assesses prescription insurance / formulary coverage and copay tiers as part of cost resolution plan";
  item.halfCredit = "Mentions finding a cheaper medication";
});

updateItem('Week3_Patient_B_Tuesday', '3D.2', item => {
  item.fullCredit = "Identifies patient knowledge gap or need for education regarding COPD disease progression and irreversible airway changes";
  item.halfCredit = "Mentions COPD education";
});

updateItem('Week3_Patient_B_Tuesday', '3D.3', item => {
  item.fullCredit = "Identifies knowledge gap regarding maintenance inhaler purpose and importance of consistent daily use";
  item.halfCredit = "Notes need to explain daily inhaler";
});

updateItem('Week3_Patient_B_Tuesday', '3D.4', item => {
  item.fullCredit = "Identifies need for education on exacerbation prevention and early warning symptom recognition";
  item.halfCredit = "Mentions preventing flares";
});

updateItem('Week3_Patient_B_Tuesday', '3D.5', item => {
  item.fullCredit = "Addresses rescue vs maintenance inhaler distinction as a specific patient knowledge deficit";
  item.halfCredit = "Mentions explaining albuterol vs controller";
});

updateItem('Week3_Patient_B_Tuesday', '3D.6', item => {
  item.fullCredit = "Identifies patient education on long-term daily adherence strategies as a clinical priority";
  item.halfCredit = "Mentions encouraging adherence";
});

updateItem('Week3_Patient_B_Tuesday', '3D.7', item => {
  item.fullCredit = "Identifies comprehensive COPD self-management education as an essential component of care";
  item.halfCredit = "Mentions self-management";
});

updateItem('Week3_Patient_B_Tuesday', '3E.4', item => {
  item.fullCredit = "Frames continued tobacco abstinence as the single most critical intervention to slow lung decline";
  item.halfCredit = "Mentions smoking cessation is good";
});

updateItem('Week3_Patient_B_Tuesday', '3E.5', item => {
  item.fullCredit = "Links smoking history to ongoing COPD progression risk and reinforces permanent abstinence";
  item.halfCredit = "Notes smoking caused COPD";
});

updateItem('Week3_Patient_B_Tuesday', '3E.6', item => {
  item.fullCredit = "Provides positive reinforcement and congratulations for sustaining 5 years of smoking cessation";
  item.halfCredit = "Notes patient quit 5 years ago";
});

updateItem('Week3_Patient_B_Tuesday', '3E.7', item => {
  item.fullCredit = "Confirms cessation pharmacotherapy is not indicated given stable 5-year abstinence and denial of cravings";
  item.halfCredit = "Notes no nicotine replacement needed";
});

updateItem('Week3_Patient_B_Tuesday', '3F.1', item => {
  item.fullCredit = "Identifies preventive care and immunization gaps as a distinct problem in Assessment or Plan";
  item.halfCredit = "Mentions vaccines briefly";
});

updateItem('Week3_Patient_B_Tuesday', '3F.4', item => {
  item.fullCredit = "Identifies Tdap booster overdue status (>10 years) in Assessment or Plan";
  item.halfCredit = "Mentions tetanus booster";
});

updateItem('Week3_Patient_B_Tuesday', '3F.7', item => {
  item.fullCredit = "States preventive care and vaccine optimization is indicated for chronic respiratory disease";
  item.halfCredit = "Mentions updating vaccines";
});

updateItem('Week3_Patient_B_Tuesday', '3F.8', item => {
  item.fullCredit = "Links COPD and age >=65 to pneumococcal (PCV20) and RSV vaccination indications";
  item.halfCredit = "Recommends pneumonia or RSV vaccine";
});

updateItem('Week3_Patient_B_Tuesday', '4A.1', item => {
  item.fullCredit = "Initiates or prescribes once-daily LABA/LAMA combination therapy (specifically naming agent or class)";
  item.halfCredit = "Recommends bronchodilator therapy";
});

updateItem('Week3_Patient_B_Tuesday', '4A.2', item => {
  item.fullCredit = "Names specific LABA/LAMA agent (e.g., Anoro Ellipta: umeclidinium/vilanterol, Stiolto Respimat, or Bevespi Aerosphere)";
  item.halfCredit = "Mentions LABA/LAMA without specific brand/generic name";
});

updateItem('Week3_Patient_B_Tuesday', '4A.3', item => {
  item.fullCredit = "Specifies dose and frequency for LABA/LAMA (e.g., 62.5/25 mcg 1 inhalation once daily)";
  item.halfCredit = "Mentions once daily without dose";
});

updateItem('Week3_Patient_B_Tuesday', '4A.4', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA 2 puffs q4-6h PRN for rescue";
  item.halfCredit = "Mentions continuing rescue inhaler";
});

updateItem('Week3_Patient_B_Tuesday', '4A.6', item => {
  item.fullCredit = "Discusses expected clinical benefits of daily maintenance therapy (improved breathlessness, better exercise tolerance)";
  item.halfCredit = "Mentions inhaler will help";
});

updateItem('Week3_Patient_B_Tuesday', '4A.7', item => {
  item.fullCredit = "Reviews realistic symptom improvement timeline (gradual benefit over days to weeks, not immediate like albuterol)";
  item.halfCredit = "Mentions timeline briefly";
});

updateItem('Week3_Patient_B_Tuesday', '4A.8', item => {
  item.fullCredit = "Educates on rescue vs maintenance inhaler distinction (daily prevention vs immediate symptom relief)";
  item.halfCredit = "Mentions albuterol is for rescue";
});

updateItem('Week3_Patient_B_Tuesday', '4A.9', item => {
  item.fullCredit = "Emphasizes consistent daily maintenance inhaler use regardless of whether symptoms are present";
  item.halfCredit = "Mentions taking daily";
});

updateItem('Week3_Patient_B_Tuesday', '4A.11', item => {
  item.fullCredit = "Cites GOLD guideline basis (GOLD 2026, GOLD report, or Group B dual bronchodilator recommendation)";
  item.halfCredit = "Mentions guideline recommendations";
});

updateItem('Week3_Patient_B_Tuesday', '4A.12', item => {
  item.fullCredit = "Explains dual bronchodilator mechanism and rationale for high symptom burden (CAT 18)";
  item.halfCredit = "Mentions two bronchodilators work better";
});

updateItem('Week3_Patient_B_Tuesday', '4A.13', item => {
  item.fullCredit = "Explicitly notes prior prescription failure was non-initiation due to cost rather than lack of efficacy";
  item.halfCredit = "Notes patient never started prior inhaler";
});

updateItem('Week3_Patient_B_Tuesday', '4B.1', item => {
  item.fullCredit = "Assesses insurance formulary coverage, tier status, or Medicare Part D copay structure";
  item.halfCredit = "Mentions checking insurance";
});

updateItem('Week3_Patient_B_Tuesday', '4B.2', item => {
  item.fullCredit = "Discusses expected copay costs with patient ($20-$40 tier copay vs $300 cash price)";
  item.halfCredit = "Mentions lower copay";
});

updateItem('Week3_Patient_B_Tuesday', '4B.4', item => {
  item.fullCredit = "Explores manufacturer copay cards, patient assistance programs, or low-cost pharmacy options";
  item.halfCredit = "Mentions copay assistance";
});

updateItem('Week3_Patient_B_Tuesday', '4B.5', item => {
  item.fullCredit = "Encourages patient to proactively communicate future prescription affordability concerns before leaving pharmacy";
  item.halfCredit = "Reminds patient to tell doctor if meds are expensive";
});

updateItem('Week3_Patient_B_Tuesday', '4B.6', item => {
  item.fullCredit = "Confirms oral medication adherence (lisinopril, atorvastatin) and addresses cost barriers holistically";
  item.halfCredit = "Notes patient takes oral pills";
});

updateItem('Week3_Patient_B_Tuesday', '4B.7', item => {
  item.fullCredit = "Emphasizes provider-patient collaboration to navigate financial and insurance coverage barriers";
  item.halfCredit = "Mentions working together on costs";
});

updateItem('Week3_Patient_B_Tuesday', '4C.1', item => {
  item.fullCredit = "Educates patient on chronic nature of COPD and importance of slowing progression";
  item.halfCredit = "Mentions COPD education";
});

updateItem('Week3_Patient_B_Tuesday', '4C.2', item => {
  item.fullCredit = "Provides education distinguishing rescue vs maintenance inhaler purposes and mechanisms";
  item.halfCredit = "Mentions inhaler purposes";
});

updateItem('Week3_Patient_B_Tuesday', '4C.3', item => {
  item.fullCredit = "Educates on importance of daily consistent maintenance inhaler adherence";
  item.halfCredit = "Reminds to take daily";
});

updateItem('Week3_Patient_B_Tuesday', '4C.4', item => {
  item.fullCredit = "Reviews exacerbation prevention role of maintenance bronchodilators";
  item.halfCredit = "Mentions avoiding hospital visits";
});

updateItem('Week3_Patient_B_Tuesday', '4C.5', item => {
  item.fullCredit = "Explains role of regular adherence in sustaining exertional symptom control";
  item.halfCredit = "Notes adherence helps symptoms";
});

updateItem('Week3_Patient_B_Tuesday', '4C.6', item => {
  item.fullCredit = "Connects daily inhaler education to long-term disease management, independence, and quality of life";
  item.halfCredit = "Mentions improving quality of life";
});

updateItem('Week3_Patient_B_Tuesday', '4C.7', item => {
  item.fullCredit = "Aligns patient education plan with identified knowledge gaps (daily use vs rescue, disease chronicity)";
  item.halfCredit = "Provides general education";
});

updateItem('Week3_Patient_B_Tuesday', '4C.8', item => {
  item.fullCredit = "Reviews warning signs and symptoms requiring prompt medical escalation (increased sputum, fever, severe SOB)";
  item.halfCredit = "Mentions when to call doctor";
});

updateItem('Week3_Patient_B_Tuesday', '4D.1', item => {
  item.fullCredit = "Congratulates patient and provides positive reinforcement for sustaining 5 years of tobacco cessation";
  item.halfCredit = "Praises quitting smoking";
});

updateItem('Week3_Patient_B_Tuesday', '4D.2', item => {
  item.fullCredit = "Reinforces continued lifelong tobacco and smoke abstinence in Plan";
  item.halfCredit = "Reminds patient to stay quit";
});

updateItem('Week3_Patient_B_Tuesday', '4D.3', item => {
  item.fullCredit = "Links continued smoking abstinence directly to preserved lung function and slowed COPD progression";
  item.halfCredit = "Notes quitting helps lungs";
});

updateItem('Week3_Patient_B_Tuesday', '4E.1', item => {
  item.fullCredit = "Plans CAT score monitoring at follow-up (target <10 or meaningful improvement)";
  item.halfCredit = "Mentions repeating CAT";
});

updateItem('Week3_Patient_B_Tuesday', '4E.2', item => {
  item.fullCredit = "Plans monitoring of dyspnea symptoms (exertional breathlessness)";
  item.halfCredit = "Mentions checking breathing";
});

updateItem('Week3_Patient_B_Tuesday', '4E.3', item => {
  item.fullCredit = "Plans monitoring of functional activity tolerance (stairs, groceries, yard work)";
  item.halfCredit = "Mentions checking daily activity";
});

updateItem('Week3_Patient_B_Tuesday', '4E.4', item => {
  item.fullCredit = "Plans monitoring of rescue albuterol use frequency (expecting reduction from several times daily)";
  item.halfCredit = "Mentions tracking rescue inhaler";
});

updateItem('Week3_Patient_B_Tuesday', '4E.5', item => {
  item.fullCredit = "Plans monitoring for COPD exacerbations and acute respiratory illness";
  item.halfCredit = "Mentions tracking flare-ups";
});

updateItem('Week3_Patient_B_Tuesday', '4E.6', item => {
  item.fullCredit = "Plans monitoring of maintenance medication adherence";
  item.halfCredit = "Mentions checking compliance";
});

updateItem('Week3_Patient_B_Tuesday', '4E.7', item => {
  item.fullCredit = "Plans inhaler technique verification and demonstration at follow-up";
  item.halfCredit = "Mentions checking inhaler use";
});

updateItem('Week3_Patient_B_Tuesday', '4E.8', item => {
  item.fullCredit = "Plans medication affordability and prescription access monitoring";
  item.halfCredit = "Mentions checking prescription cost";
});

updateItem('Week3_Patient_B_Tuesday', '4E.9', item => {
  item.fullCredit = "Plans monitoring of clinical therapeutic response to LABA/LAMA";
  item.halfCredit = "Mentions assessing response";
});

updateItem('Week3_Patient_B_Tuesday', '4E.10', item => {
  item.fullCredit = "Plans longitudinal spirometry monitoring per GOLD schedule (within 6-12 months)";
  item.halfCredit = "Mentions repeating PFT";
});

updateItem('Week3_Patient_B_Tuesday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Mentions pneumonia vaccine";
});

updateItem('Week3_Patient_B_Tuesday', '4F.2', item => {
  item.fullCredit = "Recommends RSV vaccination in Plan";
  item.halfCredit = "Mentions RSV shot";
});

updateItem('Week3_Patient_B_Tuesday', '4F.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Mentions tetanus booster";
});

updateItem('Week3_Patient_B_Tuesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe (4-8 weeks or 1-3 months)";
  item.halfCredit = "Recommends follow-up without timeframe";
});

updateItem('Week3_Patient_B_Tuesday', '4G.2', item => {
  item.fullCredit = "Plans reassessment of dyspnea and symptom burden at follow-up visit";
  item.halfCredit = "Mentions checking symptoms later";
});

updateItem('Week3_Patient_B_Tuesday', '4G.3', item => {
  item.fullCredit = "Plans repeat CAT score assessment at follow-up";
  item.halfCredit = "Mentions repeating CAT";
});

updateItem('Week3_Patient_B_Tuesday', '4G.4', item => {
  item.fullCredit = "Plans reassessment of maintenance inhaler adherence and daily routine at follow-up";
  item.halfCredit = "Mentions checking adherence";
});

updateItem('Week3_Patient_B_Tuesday', '4G.5', item => {
  item.fullCredit = "Plans reassessment of medication affordability and successful prescription fill at follow-up";
  item.halfCredit = "Mentions checking if patient got meds";
});

updateItem('Week3_Patient_B_Tuesday', '4G.6', item => {
  item.fullCredit = "Plans evaluation of therapeutic response to LABA/LAMA at follow-up visit";
  item.halfCredit = "Mentions assessing inhaler benefit";
});

updateItem('Week3_Patient_B_Tuesday', '4G.7', item => {
  item.fullCredit = "Plans periodic spirometry / lung function reassessment per GOLD schedule";
  item.halfCredit = "Mentions repeating spirometry";
});

updateItem('Week3_Patient_B_Tuesday', '4G.8', item => {
  item.fullCredit = "Addresses active problems (COPD, adherence, affordability, preventive care) in comprehensive follow-up plan";
  item.halfCredit = "Follow-up covers only 1 problem";
});

updateItem('Week3_Patient_B_Tuesday', '5B.3', item => {
  item.fullCredit = "States numeric goals or thresholds (CAT < 10 or >=2 pt reduction, SpO2 >= 90%, BP < 130/80 mmHg)";
  item.halfCredit = "Mentions general goals without numeric criteria";
});

updateItem('Week3_Patient_B_Tuesday', '5B.4', item => {
  item.fullCredit = "Provides concrete actionable details (specific LABA/LAMA agent, dose, frequency, affordability plan, and follow-up timing)";
  item.halfCredit = "Vague plan item";
});


// ==========================================
// BOB JENKINS WEDNESDAY
// ==========================================

updateItem('Week3_Patient_B_Wednesday', '1A.7', item => {
  item.fullCredit = "States indication for LABA/LAMA therapy as symptomatic COPD / Group B management (or follow-up of newly initiated inhaler)";
  item.halfCredit = "Mentions COPD follow-up";
});

updateItem('Week3_Patient_B_Wednesday', '1B.4', item => {
  item.fullCredit = "Documents continued exertional dyspnea with stair climbing (or exertional breathlessness with physical tasks)";
  item.halfCredit = "Mentions SOB with stairs";
});

updateItem('Week3_Patient_B_Wednesday', '1B.5', item => {
  item.fullCredit = "Documents continued exertional dyspnea with carrying groceries (or lifting/carrying)";
  item.halfCredit = "Mentions SOB with chores";
});

updateItem('Week3_Patient_B_Wednesday', '1B.6', item => {
  item.fullCredit = "Documents continued exertional dyspnea with household projects (or yard work / daily home tasks)";
  item.halfCredit = "Mentions working around house";
});

updateItem('Week3_Patient_B_Wednesday', '1B.8', item => {
  item.fullCredit = "Documents that rescue inhaler use represents a slight reduction from baseline (or uses albuterol several times weekly / 1-2x daily)";
  item.halfCredit = "Mentions rescue use";
});

updateItem('Week3_Patient_B_Wednesday', '1B.20', item => {
  item.fullCredit = "Documents absence of difficulty obtaining prescriptions / confirms affordable $20 copay";
  item.halfCredit = "Notes meds affordable";
});

updateItem('Week3_Patient_B_Wednesday', '1B.23', item => {
  item.fullCredit = "Documents patient denies desire or craving to restart tobacco use";
  item.halfCredit = "Notes non-smoker";
});

updateItem('Week3_Patient_B_Wednesday', '1D.9', item => {
  item.fullCredit = "Documents limited physical activity secondary to dyspnea / exertional limitations";
  item.halfCredit = "Mentions less active";
});

updateItem('Week3_Patient_B_Wednesday', '1E.14', item => {
  item.fullCredit = "Documents Tdap status (overdue >10 years or unverified), or notes vaccine history review";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_B_Wednesday', '1F.5', item => {
  item.fullCredit = "Documents patient denies craving or desire to restart tobacco use in ROS / history";
  item.halfCredit = "Notes no cravings";
});

updateItem('Week3_Patient_B_Wednesday', '1G.1', item => {
  item.fullCredit = "Addresses patient's concern regarding suboptimal/slow improvement and provides clinical reassurance";
  item.halfCredit = "Mentions patient wants faster improvement";
});

updateItem('Week3_Patient_B_Wednesday', '1G.2', item => {
  item.fullCredit = "Discusses realistic treatment timeline expectations (bronchodilator benefit accumulates with daily consistency)";
  item.halfCredit = "Mentions benefit takes time";
});

updateItem('Week3_Patient_B_Wednesday', '1G.3', item => {
  item.fullCredit = "Ties mild improvement specifically to daily and functional activities (walking, light tasks)";
  item.halfCredit = "Notes patient feels a little better";
});

updateItem('Week3_Patient_B_Wednesday', '2A.13', item => {
  item.fullCredit = "Reports BP (128/78 mmHg) and interprets as acceptable / at goal on lisinopril (or normal BP)";
  item.halfCredit = "Reports BP without interpretation";
});

updateItem('Week3_Patient_B_Wednesday', '2B.4', item => {
  item.fullCredit = "Documents persistent exertional dyspnea in daily functional activities (stairs, groceries, household tasks)";
  item.halfCredit = "Mentions persistent dyspnea";
});

updateItem('Week3_Patient_B_Wednesday', '2B.5', item => {
  item.fullCredit = "Documents rescue albuterol usage frequency (several times weekly / 1-2 times daily, reduced from baseline)";
  item.halfCredit = "Mentions rescue use";
});

updateItem('Week3_Patient_B_Wednesday', '2B.6', item => {
  item.fullCredit = "Documents objective marker for rescue inhaler use frequency (or reports PRN albuterol usage pattern)";
  item.halfCredit = "Lists albuterol PRN";
});

updateItem('Week3_Patient_B_Wednesday', '2B.9', item => {
  item.fullCredit = "Links FEV1% predicted (62%) to GOLD Grade 2 moderate airflow limitation";
  item.halfCredit = "Reports FEV1% without Grade 2 classification";
});

updateItem('Week3_Patient_B_Wednesday', '2B.10', item => {
  item.fullCredit = "Notes spirometry values represent post-bronchodilator findings confirming persistent obstruction";
  item.halfCredit = "Mentions spirometry";
});

updateItem('Week3_Patient_B_Wednesday', '2C.2', item => {
  item.fullCredit = "Classifies COPD severity as GOLD Grade 2 moderate airflow limitation (FEV1 62% pred)";
  item.halfCredit = "Reports FEV1 without Grade 2";
});

updateItem('Week3_Patient_B_Wednesday', '2C.4', item => {
  item.fullCredit = "Links zero recent exacerbations (or <=1 moderate flare) to GOLD Group B classification";
  item.halfCredit = "Notes no hospitalizations";
});

updateItem('Week3_Patient_B_Wednesday', '2C.6', item => {
  item.fullCredit = "Documents rescue inhaler use trend (reduced from multiple times daily to several times weekly)";
  item.halfCredit = "Notes using less rescue inhaler";
});

updateItem('Week3_Patient_B_Wednesday', '2C.7', item => {
  item.fullCredit = "Notes sputum culture, CBC, or metabolic panel are unnecessary given clinical stability without infection signs";
  item.halfCredit = "Mentions no acute labs needed";
});

updateItem('Week3_Patient_B_Wednesday', '2C.8', item => {
  item.fullCredit = "Notes arterial blood gas (ABG) is not indicated given normal room air SpO2 (95%) and absence of acute distress";
  item.halfCredit = "Notes no ABG needed";
});

updateItem('Week3_Patient_B_Wednesday', '3A.2', item => {
  item.fullCredit = "Classifies COPD as GOLD Group B (or Group E) based on CAT 18 (>=10) and low exacerbation risk";
  item.halfCredit = "Mentions COPD without group letter";
});

updateItem('Week3_Patient_B_Wednesday', '3A.4', item => {
  item.fullCredit = "Links inhaler technique error (blowing into device) directly to reduced lung deposition and incomplete LABA/LAMA benefit";
  item.halfCredit = "Notes technique error";
});

updateItem('Week3_Patient_B_Wednesday', '3A.5', item => {
  item.fullCredit = "Cites decreased rescue inhaler use as evidence of early bronchodilator benefit";
  item.halfCredit = "Notes using less albuterol";
});

updateItem('Week3_Patient_B_Wednesday', '3A.6', item => {
  item.fullCredit = "Identifies continued exertional dyspnea and functional limitation as clinically significant";
  item.halfCredit = "Mentions shortness of breath persists";
});

updateItem('Week3_Patient_B_Wednesday', '3A.7', item => {
  item.fullCredit = "Documents continued activity limitation with exertion (stairs, carrying items)";
  item.halfCredit = "Notes activity limitation";
});

updateItem('Week3_Patient_B_Wednesday', '3A.8', item => {
  item.fullCredit = "Cites GOLD 2026 multi-domain framework (symptom burden, exacerbation history, spirometry)";
  item.halfCredit = "Mentions GOLD guidelines";
});

updateItem('Week3_Patient_B_Wednesday', '3A.9', item => {
  item.fullCredit = "Cites GOLD 2026 activity limitation and symptom criteria";
  item.halfCredit = "Mentions symptom burden";
});

updateItem('Week3_Patient_B_Wednesday', '3A.10', item => {
  item.fullCredit = "Evaluates rescue inhaler use pattern in the context of symptom control";
  item.halfCredit = "Mentions albuterol use";
});

updateItem('Week3_Patient_B_Wednesday', '3A.11', item => {
  item.fullCredit = "Evaluates exacerbation history (zero in past year) supporting Group B maintenance without escalation";
  item.halfCredit = "Notes no exacerbations";
});

updateItem('Week3_Patient_B_Wednesday', '3A.12', item => {
  item.fullCredit = "Explains persistent symptoms stem from implementation barriers (technique error + missed doses) rather than inadequate drug efficacy";
  item.halfCredit = "Notes patient not getting full dose";
});

updateItem('Week3_Patient_B_Wednesday', '3A.13', item => {
  item.fullCredit = "Frames inhaler technique deficiency as a primary driver of suboptimal clinical response";
  item.halfCredit = "Notes technique needs work";
});

updateItem('Week3_Patient_B_Wednesday', '3A.14', item => {
  item.fullCredit = "Concludes symptoms CANNOT be interpreted as true medication failure while implementation barriers exist";
  item.halfCredit = "Notes inhaler might still work";
});

updateItem('Week3_Patient_B_Wednesday', '3A.15', item => {
  item.fullCredit = "States adherence and technique optimization must precede any medication escalation per GOLD";
  item.halfCredit = "Recommends fixing technique before changing meds";
});

updateItem('Week3_Patient_B_Wednesday', '3A.17', item => {
  item.fullCredit = "Links FEV1 (62% pred) to GOLD Grade 2 moderate severity in Assessment";
  item.halfCredit = "Mentions FEV1 in assessment";
});

updateItem('Week3_Patient_B_Wednesday', '3A.19', item => {
  item.fullCredit = "Characterizes SpO2 95% on room air as adequate without need for supplemental oxygen";
  item.halfCredit = "Notes SpO2 normal";
});

updateItem('Week3_Patient_B_Wednesday', '3A.21', item => {
  item.fullCredit = "Explicitly distinguishes technique/adherence deficiency from true pharmacologic treatment failure";
  item.halfCredit = "Notes problem is how patient takes it";
});

updateItem('Week3_Patient_B_Wednesday', '3A.22', item => {
  item.fullCredit = "States LABA/LAMA remains guideline-supported first-line therapy for Group B COPD";
  item.halfCredit = "Recommends continuing LABA/LAMA";
});

updateItem('Week3_Patient_B_Wednesday', '3A.23', item => {
  item.fullCredit = "Notes absence of exacerbations argues against triple therapy (ICS) escalation at this visit";
  item.halfCredit = "Notes no need for steroids yet";
});

updateItem('Week3_Patient_B_Wednesday', '3B.2', item => {
  item.fullCredit = "Links intermittent nonadherence (missed doses 3-4 days/week) directly to ongoing symptom burden";
  item.halfCredit = "Notes patient misses doses";
});

updateItem('Week3_Patient_B_Wednesday', '3B.6', item => {
  item.fullCredit = "Identifies unrealistic expectations regarding symptom improvement timeline as an adherence barrier";
  item.halfCredit = "Notes patient expected faster results";
});

updateItem('Week3_Patient_B_Wednesday', '3B.7', item => {
  item.fullCredit = "Identifies limited understanding of daily maintenance benefits as contributing to missed doses";
  item.halfCredit = "Notes patient needs education";
});

updateItem('Week3_Patient_B_Wednesday', '3B.8', item => {
  item.fullCredit = "Frames technique errors and missed doses as precluding accurate assessment of medication efficacy";
  item.halfCredit = "Notes cannot judge inhaler yet";
});

updateItem('Week3_Patient_B_Wednesday', '3B.9', item => {
  item.fullCredit = "States adherence optimization and technique correction must precede treatment escalation";
  item.halfCredit = "Fix technique before escalating";
});

updateItem('Week3_Patient_B_Wednesday', '3B.11', item => {
  item.fullCredit = "Confirms prescription affordability is resolved ($20 copay) and is no longer an active access barrier";
  item.halfCredit = "Notes cost is now affordable";
});

updateItem('Week3_Patient_B_Wednesday', '3B.12', item => {
  item.fullCredit = "Links nonadherence directly to persistent exertional breathlessness in Assessment/Plan";
  item.halfCredit = "Notes missed doses cause symptoms";
});

updateItem('Week3_Patient_B_Wednesday', '3B.13', item => {
  item.fullCredit = "Provides comprehensive step-by-step technique education and demonstration plan for Ellipta device";
  item.halfCredit = "Mentions correcting technique";
});

updateItem('Week3_Patient_B_Wednesday', '3B.14', item => {
  item.fullCredit = "Discusses rescue inhaler reliance in relation to undertreated maintenance symptoms";
  item.halfCredit = "Mentions albuterol use";
});

updateItem('Week3_Patient_B_Wednesday', '3B.15', item => {
  item.fullCredit = "Identifies adherence routine and technique mastery as primary clinical priorities";
  item.halfCredit = "Mentions adherence and technique";
});

updateItem('Week3_Patient_B_Wednesday', '3C.1', item => {
  item.fullCredit = "Identifies patient knowledge deficit regarding inhaler technique and maintenance therapy as a clinical problem";
  item.halfCredit = "Mentions patient misunderstands inhaler";
});

updateItem('Week3_Patient_B_Wednesday', '3C.2', item => {
  item.fullCredit = "Assesses progress in understanding compared to initial visit (cost resolved, technique still needed)";
  item.halfCredit = "Notes progress";
});

updateItem('Week3_Patient_B_Wednesday', '3C.3', item => {
  item.fullCredit = "Addresses unrealistic expectations regarding symptom improvement timeline";
  item.halfCredit = "Explains timeline";
});

updateItem('Week3_Patient_B_Wednesday', '3C.5', item => {
  item.fullCredit = "Instructs patient not to blow into device and to exhale fully AWAY from device before inhalation";
  item.halfCredit = "Tells patient not to blow in";
});

updateItem('Week3_Patient_B_Wednesday', '3C.6', item => {
  item.fullCredit = "Instructs on complete Ellipta steps: slide cover until click, steady deep breath, hold breath 5-10 seconds";
  item.halfCredit = "Mentions inhaler steps";
});

updateItem('Week3_Patient_B_Wednesday', '3C.7', item => {
  item.fullCredit = "Confirms teach-back demonstration is warranted to ensure mastery of Ellipta device";
  item.halfCredit = "Mentions teach-back";
});

updateItem('Week3_Patient_B_Wednesday', '3C.8', item => {
  item.fullCredit = "Distinguishes knowledge deficit (technique misunderstanding) from behavioral adherence barrier (forgetfulness)";
  item.halfCredit = "Notes forgetting vs technique";
});

updateItem('Week3_Patient_B_Wednesday', '3C.9', item => {
  item.fullCredit = "Notes patient understanding remains incomplete regarding daily prevention vs immediate rescue";
  item.halfCredit = "Notes needs more education";
});

updateItem('Week3_Patient_B_Wednesday', '3C.10', item => {
  item.fullCredit = "Educates on maintenance controller vs rescue inhaler mechanisms and purposes";
  item.halfCredit = "Explains difference between inhalers";
});

updateItem('Week3_Patient_B_Wednesday', '3D.1', item => {
  item.fullCredit = "Identifies former tobacco use / sustained abstinence as a clinical problem or Assessment focus";
  item.halfCredit = "Mentions smoking history";
});

updateItem('Week3_Patient_B_Wednesday', '3D.2', item => {
  item.fullCredit = "Reiterates current tobacco-free status and denial of cravings in Assessment";
  item.halfCredit = "Notes patient is smoke-free";
});

updateItem('Week3_Patient_B_Wednesday', '3D.3', item => {
  item.fullCredit = "Emphasizes continued abstinence as critical to slowing COPD progression and preserving lung function";
  item.halfCredit = "Notes quitting slows disease";
});

updateItem('Week3_Patient_B_Wednesday', '3D.4', item => {
  item.fullCredit = "Provides positive reinforcement and congratulations for sustaining 5 years of tobacco cessation";
  item.halfCredit = "Praises quitting";
});

updateItem('Week3_Patient_B_Wednesday', '3D.5', item => {
  item.fullCredit = "Acknowledges 5-year cessation milestone in clinical assessment";
  item.halfCredit = "Mentions quit 5 years ago";
});

updateItem('Week3_Patient_B_Wednesday', '3D.6', item => {
  item.fullCredit = "Confirms cessation pharmacotherapy is not indicated given stable abstinence";
  item.halfCredit = "Notes no meds needed for smoking";
});

updateItem('Week3_Patient_B_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care and immunization gaps as a clinical problem in Assessment";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_B_Wednesday', '3E.2', item => {
  item.fullCredit = "Identifies pneumococcal vaccination (PCV20) gap in Assessment";
  item.halfCredit = "Mentions pneumonia shot";
});

updateItem('Week3_Patient_B_Wednesday', '3E.3', item => {
  item.fullCredit = "Identifies RSV vaccination gap in Assessment";
  item.halfCredit = "Mentions RSV shot";
});

updateItem('Week3_Patient_B_Wednesday', '3E.4', item => {
  item.fullCredit = "Identifies Tdap booster overdue status (>10 years) in Assessment";
  item.halfCredit = "Mentions tetanus booster";
});

updateItem('Week3_Patient_B_Wednesday', '3E.5', item => {
  item.fullCredit = "Reiterates annual influenza vaccine up-to-date status in Assessment";
  item.halfCredit = "Mentions flu shot";
});

updateItem('Week3_Patient_B_Wednesday', '3E.6', item => {
  item.fullCredit = "Reiterates COVID-19 vaccination up-to-date status in Assessment";
  item.halfCredit = "Mentions COVID vaccine";
});

updateItem('Week3_Patient_B_Wednesday', '3E.7', item => {
  item.fullCredit = "States preventive care optimization remains appropriate and actionable for chronic lung disease";
  item.halfCredit = "Mentions preventive care";
});

updateItem('Week3_Patient_B_Wednesday', '3E.8', item => {
  item.fullCredit = "Frames immunization completion as a core quality measure and exacerbation prevention strategy";
  item.halfCredit = "Notes vaccines prevent flares";
});

updateItem('Week3_Patient_B_Wednesday', '3E.9', item => {
  item.fullCredit = "Links pneumococcal and RSV vaccination directly to COPD and age-related risk reduction";
  item.halfCredit = "Recommends vaccines for COPD";
});

updateItem('Week3_Patient_B_Wednesday', '3E.10', item => {
  item.fullCredit = "Links Tdap booster to routine adult immunization schedule";
  item.halfCredit = "Recommends Tdap";
});

updateItem('Week3_Patient_B_Wednesday', '3E.11', item => {
  item.fullCredit = "Identifies actionable immunization gaps (PCV20, RSV, Tdap) in Assessment";
  item.halfCredit = "Lists vaccine gaps";
});

updateItem('Week3_Patient_B_Wednesday', '3E.12', item => {
  item.fullCredit = "Discusses respiratory vaccine relevance to reducing COPD exacerbation risk";
  item.halfCredit = "Notes vaccines protect lungs";
});

updateItem('Week3_Patient_B_Wednesday', '4A.1', item => {
  item.fullCredit = "Continues Anoro Ellipta (umeclidinium/vilanterol 62.5/25 mcg 1 inh daily) in Plan";
  item.halfCredit = "Mentions continuing LABA/LAMA";
});

updateItem('Week3_Patient_B_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies dose and frequency of Anoro Ellipta (1 inhalation once daily)";
  item.halfCredit = "Mentions once daily";
});

updateItem('Week3_Patient_B_Wednesday', '4A.3', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA 2 puffs q4-6h PRN for rescue";
  item.halfCredit = "Mentions rescue inhaler PRN";
});

updateItem('Week3_Patient_B_Wednesday', '4A.4', item => {
  item.fullCredit = "Explicitly decides to withhold medication escalation at this visit";
  item.halfCredit = "Mentions no changes to meds";
});

updateItem('Week3_Patient_B_Wednesday', '4A.5', item => {
  item.fullCredit = "States rationale for non-escalation (adherence and technique optimization needed first)";
  item.halfCredit = "Notes fix technique first";
});

updateItem('Week3_Patient_B_Wednesday', '4A.6', item => {
  item.fullCredit = "Plans to reassess symptom response after adherence and technique improve";
  item.halfCredit = "Mentions checking response later";
});

updateItem('Week3_Patient_B_Wednesday', '4A.7', item => {
  item.fullCredit = "Explicitly states triple therapy / ICS is withheld at this visit";
  item.halfCredit = "Notes no steroids needed";
});

updateItem('Week3_Patient_B_Wednesday', '4A.8', item => {
  item.fullCredit = "Explicitly states LABA/LAMA therapy is maintained without change";
  item.halfCredit = "Continues current inhaler";
});

updateItem('Week3_Patient_B_Wednesday', '4A.9', item => {
  item.fullCredit = "Cites GOLD Group B guideline support for continuing dual bronchodilator";
  item.halfCredit = "Mentions GOLD guidelines";
});

updateItem('Week3_Patient_B_Wednesday', '4A.10', item => {
  item.fullCredit = "Defers escalation decision pending reassessment of adherence and technique";
  item.halfCredit = "Re-evaluate before escalating";
});

updateItem('Week3_Patient_B_Wednesday', '4B.1', item => {
  item.fullCredit = "Emphasizes importance of daily consistent inhaler use regardless of daily symptoms";
  item.halfCredit = "Reminds to take daily";
});

updateItem('Week3_Patient_B_Wednesday', '4B.2', item => {
  item.fullCredit = "Reviews maintenance vs rescue inhaler distinction in patient education";
  item.halfCredit = "Explains maintenance vs rescue";
});

updateItem('Week3_Patient_B_Wednesday', '4B.3', item => {
  item.fullCredit = "Reviews expected timeline of benefit from consistent maintenance therapy (gradual over weeks)";
  item.halfCredit = "Mentions takes time to work";
});

updateItem('Week3_Patient_B_Wednesday', '4B.4', item => {
  item.fullCredit = "Recommends daily routine pairing adherence strategy (e.g., placing inhaler next to coffee pot / morning routine)";
  item.halfCredit = "Mentions setting a routine";
});

updateItem('Week3_Patient_B_Wednesday', '4B.5', item => {
  item.fullCredit = "Instructs on complete Ellipta device steps: slide cover until click, steady deep inhalation, hold breath 5-10s";
  item.halfCredit = "Mentions inhaler steps";
});

updateItem('Week3_Patient_B_Wednesday', '4B.6', item => {
  item.fullCredit = "Suggests phone alarm reminder or medication tracking app";
  item.halfCredit = "Mentions setting an alarm";
});

updateItem('Week3_Patient_B_Wednesday', '4B.7', item => {
  item.fullCredit = "Suggests visual cue adherence strategy (pill organizer, visible location)";
  item.halfCredit = "Mentions visual reminder";
});

updateItem('Week3_Patient_B_Wednesday', '4B.8', item => {
  item.fullCredit = "Addresses forgetfulness barrier with concrete behavioral strategies";
  item.halfCredit = "Reminds patient not to forget";
});

updateItem('Week3_Patient_B_Wednesday', '4B.9', item => {
  item.fullCredit = "Reassures patient regarding symptom improvement expectations";
  item.halfCredit = "Provides reassurance";
});

updateItem('Week3_Patient_B_Wednesday', '4B.10', item => {
  item.fullCredit = "Plans to reassess adherence at next follow-up visit";
  item.halfCredit = "Mentions checking adherence later";
});

updateItem('Week3_Patient_B_Wednesday', '4B.11', item => {
  item.fullCredit = "Plans to re-evaluate inhaler technique at follow-up visit";
  item.halfCredit = "Mentions checking technique later";
});

updateItem('Week3_Patient_B_Wednesday', '4B.12', item => {
  item.fullCredit = "Confirms prescription affordability resolution ($20 copay confirmed accessible)";
  item.halfCredit = "Notes copay is good";
});

updateItem('Week3_Patient_B_Wednesday', '4B.13', item => {
  item.fullCredit = "Frames adherence optimization as prerequisite to evaluating true therapy response";
  item.halfCredit = "Adherence needed first";
});

updateItem('Week3_Patient_B_Wednesday', '4C.1', item => {
  item.fullCredit = "Reviews COPD disease progression and irreversible airway changes with patient";
  item.halfCredit = "Mentions COPD education";
});

updateItem('Week3_Patient_B_Wednesday', '4C.2', item => {
  item.fullCredit = "Reviews purpose of maintenance therapy in opening airways and reducing exertional SOB";
  item.halfCredit = "Explains maintenance inhaler";
});

updateItem('Week3_Patient_B_Wednesday', '4C.3', item => {
  item.fullCredit = "Reviews expected symptom improvement timeline with patient";
  item.halfCredit = "Mentions timeline";
});

updateItem('Week3_Patient_B_Wednesday', '4C.4', item => {
  item.fullCredit = "Reviews exacerbation prevention and preservation of lung function as primary treatment goals";
  item.halfCredit = "Mentions preventing flares";
});

updateItem('Week3_Patient_B_Wednesday', '4C.5', item => {
  item.fullCredit = "Conducts step-by-step Ellipta review: slide cover until click, exhale away, deep steady breath, hold 5-10s";
  item.halfCredit = "Reviews Ellipta use";
});

updateItem('Week3_Patient_B_Wednesday', '4C.6', item => {
  item.fullCredit = "Contrasts maintenance vs rescue inhaler purposes in education plan";
  item.halfCredit = "Explains rescue vs controller";
});

updateItem('Week3_Patient_B_Wednesday', '4C.8', item => {
  item.fullCredit = "Details concrete behavioral adherence strategies (coffee routine, cues)";
  item.halfCredit = "Mentions adherence tips";
});

updateItem('Week3_Patient_B_Wednesday', '4C.9', item => {
  item.fullCredit = "Reinforces smoking cessation and confirms continued tobacco abstinence";
  item.halfCredit = "Mentions smoking cessation";
});

updateItem('Week3_Patient_B_Wednesday', '4D.1', item => {
  item.fullCredit = "Reinforces continued lifelong tobacco abstinence in Plan";
  item.halfCredit = "Reminds to stay quit";
});

updateItem('Week3_Patient_B_Wednesday', '4D.2', item => {
  item.fullCredit = "Congratulates patient and provides positive reinforcement for sustained cessation";
  item.halfCredit = "Praises quitting";
});

updateItem('Week3_Patient_B_Wednesday', '4D.3', item => {
  item.fullCredit = "Confirms smoking cessation pharmacotherapy is not indicated";
  item.halfCredit = "Notes no smoking meds needed";
});

updateItem('Week3_Patient_B_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Mentions pneumonia vaccine";
});

updateItem('Week3_Patient_B_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends RSV vaccination in Plan";
  item.halfCredit = "Mentions RSV shot";
});

updateItem('Week3_Patient_B_Wednesday', '4E.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Mentions tetanus booster";
});

updateItem('Week3_Patient_B_Wednesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza and COVID-19 vaccination status in Plan";
  item.halfCredit = "Mentions flu shot";
});

updateItem('Week3_Patient_B_Wednesday', '4E.5', item => {
  item.fullCredit = "Frames vaccination recommendations as actionable plan items at this visit";
  item.halfCredit = "Mentions getting vaccines";
});

updateItem('Week3_Patient_B_Wednesday', '4E.6', item => {
  item.fullCredit = "Links immunization recommendations to COPD diagnosis and age >=65 risk reduction";
  item.halfCredit = "Notes vaccines for COPD";
});

updateItem('Week3_Patient_B_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans monitoring of dyspnea and symptom control at follow-up";
  item.halfCredit = "Mentions checking symptoms";
});

updateItem('Week3_Patient_B_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans monitoring of exertional dyspnea with physical exertion";
  item.halfCredit = "Mentions checking breathing with activity";
});

updateItem('Week3_Patient_B_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans monitoring of functional activity tolerance (stairs, chores)";
  item.halfCredit = "Mentions tracking daily tasks";
});

updateItem('Week3_Patient_B_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans monitoring of rescue albuterol use frequency";
  item.halfCredit = "Mentions tracking rescue puffs";
});

updateItem('Week3_Patient_B_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans monitoring for COPD exacerbations and acute illness";
  item.halfCredit = "Mentions flare monitoring";
});

updateItem('Week3_Patient_B_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans monitoring of medication adherence routine";
  item.halfCredit = "Mentions checking adherence";
});

updateItem('Week3_Patient_B_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans re-evaluation and physical demonstration of inhaler technique at follow-up";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_B_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans monitoring of preventive care and vaccine completion";
  item.halfCredit = "Mentions tracking vaccines";
});

updateItem('Week3_Patient_B_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe (4-8 weeks or 1-3 months)";
  item.halfCredit = "Recommends follow-up without interval";
});

updateItem('Week3_Patient_B_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans reassessment of medication adherence at next visit";
  item.halfCredit = "Mentions checking adherence later";
});

updateItem('Week3_Patient_B_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans reassessment of symptom burden and CAT score at follow-up";
  item.halfCredit = "Mentions repeating CAT";
});

updateItem('Week3_Patient_B_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans reassessment of dyspnea, activity tolerance, and inhaler technique at follow-up";
  item.halfCredit = "Mentions checking symptoms and technique";
});

updateItem('Week3_Patient_B_Wednesday', '4G.5', item => {
  item.fullCredit = "Plans evaluation of therapy escalation ONLY if symptoms persist after verified adherence and technique";
  item.halfCredit = "Mentions considering stronger meds if needed";
});

updateItem('Week3_Patient_B_Wednesday', '5A.4', item => {
  item.fullCredit = "Structures assessment and plan with clear logical grouping covering COPD, adherence/technique, and vaccines (accepts question format or numbered items)";
  item.halfCredit = "Sparse unstructured text";
});

updateItem('Week3_Patient_B_Wednesday', '5C.2', item => {
  item.fullCredit = "Provides clear, clinically grounded statement on COPD control, technique deficiency, and non-escalation rationale";
  item.halfCredit = "Assessment phrased as unanswered question";
});

updateItem('Week3_Patient_B_Wednesday', '5C.3', item => {
  item.fullCredit = "Includes specific technique correction, adherence routine establishment (coffee mug), and structured monitoring in Plan";
  item.halfCredit = "Brief plan item";
});


// ==========================================
// BOB JENKINS THURSDAY
// ==========================================

updateItem('Week3_Patient_B_Thursday', '1D.10', item => {
  item.fullCredit = "Confirms medication access and affordability ($20 copay) at current visit";
  item.halfCredit = "Notes meds affordable";
});

updateItem('Week3_Patient_B_Thursday', '1E.18', item => {
  item.fullCredit = "Documents Tdap booster status (overdue >10 years or unverified), or notes vaccine history review";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_B_Thursday', '1F.1', item => {
  item.fullCredit = "Documents patient denies desire or craving to restart tobacco use";
  item.halfCredit = "Notes non-smoker";
});

updateItem('Week3_Patient_B_Thursday', '1F.2', item => {
  item.fullCredit = "Confirms absence of medication affordability concerns at this visit";
  item.halfCredit = "Notes no financial issues";
});

updateItem('Week3_Patient_B_Thursday', '1F.3', item => {
  item.fullCredit = "Confirms absence of difficulty obtaining or refilling medications";
  item.halfCredit = "Notes refills are fine";
});

updateItem('Week3_Patient_B_Thursday', '1F.7', item => {
  item.fullCredit = "Documents absence of new medication adverse effects";
  item.halfCredit = "Notes no side effects";
});

updateItem('Week3_Patient_B_Thursday', '2C.2', item => {
  item.fullCredit = "Classifies FEV1 (60-61% pred) as GOLD Grade 2 moderate airflow obstruction";
  item.halfCredit = "Reports FEV1% without Grade 2";
});

updateItem('Week3_Patient_B_Thursday', '2C.4', item => {
  item.fullCredit = "Identifies elevated blood eosinophils (310 cells/µL, >=300 threshold) favoring ICS-containing therapy";
  item.halfCredit = "Mentions eosinophils elevated without threshold";
});

updateItem('Week3_Patient_B_Thursday', '3A.10', item => {
  item.fullCredit = "Cites GOLD 2026 Report or GOLD guidelines as clinical framework";
  item.halfCredit = "Mentions guidelines";
});

updateItem('Week3_Patient_B_Thursday', '3A.13', item => {
  item.fullCredit = "Documents inhaler technique verification and confirmed excellent adherence routine (coffee mug)";
  item.halfCredit = "Notes adherence is good";
});

updateItem('Week3_Patient_B_Thursday', '3B.2', item => {
  item.fullCredit = "Cites elevated blood eosinophils (310 cells/µL, >=300 cells/µL threshold) supporting escalation to Trelegy Ellipta";
  item.halfCredit = "Notes eosinophils high";
});

updateItem('Week3_Patient_B_Thursday', '3B.4', item => {
  item.fullCredit = "Cites GOLD 2026 as guideline basis for eosinophil-guided ICS escalation in patients with recurrent exacerbations";
  item.halfCredit = "Mentions guideline for eosinophils";
});

updateItem('Week3_Patient_B_Thursday', '3B.5', item => {
  item.fullCredit = "Explains ICS benefit in reducing exacerbation risk when blood eosinophils are >=300 cells/µL";
  item.halfCredit = "Notes ICS prevents flares";
});

updateItem('Week3_Patient_B_Thursday', '3C.1', item => {
  item.fullCredit = "Documents inhaler technique is verified/resolved and correct in Assessment";
  item.halfCredit = "Notes technique checked";
});

updateItem('Week3_Patient_B_Thursday', '3C.7', item => {
  item.fullCredit = "Recommends continuing established adherence routine (coffee mug reminder)";
  item.halfCredit = "Mentions keeping routine";
});

updateItem('Week3_Patient_B_Thursday', '3D.1', item => {
  item.fullCredit = "Identifies former tobacco use / sustained abstinence as a clinical problem in Assessment";
  item.halfCredit = "Mentions smoking history";
});

updateItem('Week3_Patient_B_Thursday', '3D.3', item => {
  item.fullCredit = "Identifies smoking cessation as the most effective intervention for slowing COPD progression";
  item.halfCredit = "Notes quitting helps disease";
});

updateItem('Week3_Patient_B_Thursday', '3D.4', item => {
  item.fullCredit = "States continued tobacco abstinence reduces future respiratory complications and mortality";
  item.halfCredit = "Notes quitting improves health";
});

updateItem('Week3_Patient_B_Thursday', '3D.5', item => {
  item.fullCredit = "Recommends reinforcing continued smoking abstinence in Plan";
  item.halfCredit = "Reminds patient to stay quit";
});

updateItem('Week3_Patient_B_Thursday', '3D.6', item => {
  item.fullCredit = "Documents patient denies craving or desire to restart smoking";
  item.halfCredit = "Notes no cravings";
});

updateItem('Week3_Patient_B_Thursday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care and immunization gaps as a clinical problem in Assessment";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_B_Thursday', '3E.4', item => {
  item.fullCredit = "Identifies Tdap booster overdue status (>10 years) in Assessment or Plan";
  item.halfCredit = "Mentions tetanus booster";
});

updateItem('Week3_Patient_B_Thursday', '3E.7', item => {
  item.fullCredit = "States preventive care and vaccine optimization remains appropriate for chronic lung disease";
  item.halfCredit = "Mentions preventive care";
});

updateItem('Week3_Patient_B_Thursday', '3E.8', item => {
  item.fullCredit = "Cites GOLD 2026 supporting routine respiratory vaccinations in COPD management";
  item.halfCredit = "Mentions guideline on vaccines";
});

updateItem('Week3_Patient_B_Thursday', '4A.1', item => {
  item.fullCredit = "Escalates to single-inhaler triple therapy: Trelegy Ellipta (fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg 1 inh daily)";
  item.halfCredit = "Recommends triple therapy without specific agent/dose";
});

updateItem('Week3_Patient_B_Thursday', '4A.4', item => {
  item.fullCredit = "Establishes target for rescue inhaler use frequency (expecting reduced reliance / <=2-3x/week)";
  item.halfCredit = "Mentions reducing rescue use";
});

updateItem('Week3_Patient_B_Thursday', '4A.5', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA for PRN rescue";
  item.halfCredit = "Mentions rescue inhaler";
});

updateItem('Week3_Patient_B_Thursday', '4A.6', item => {
  item.fullCredit = "Specifies albuterol PRN regimen (2 puffs q4-6h PRN for acute dyspnea)";
  item.halfCredit = "Mentions albuterol dose";
});

updateItem('Week3_Patient_B_Thursday', '4A.8', item => {
  item.fullCredit = "Reviews inhaler technique for new Trelegy Ellipta device";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_B_Thursday', '4A.11', item => {
  item.fullCredit = "Discusses expected clinical benefits of triple therapy (improved symptom control, reduced exacerbations)";
  item.halfCredit = "Mentions inhaler will help";
});

updateItem('Week3_Patient_B_Thursday', '4A.12', item => {
  item.fullCredit = "Discusses expected quality-of-life and functional endurance benefits";
  item.halfCredit = "Mentions better quality of life";
});

updateItem('Week3_Patient_B_Thursday', '4B.1', item => {
  item.fullCredit = "Provides written COPD action plan in Plan";
  item.halfCredit = "Mentions action plan";
});

updateItem('Week3_Patient_B_Thursday', '4B.2', item => {
  item.fullCredit = "Educates on early recognition of worsening symptoms and when to seek prompt medical evaluation";
  item.halfCredit = "Mentions flare warning signs";
});

updateItem('Week3_Patient_B_Thursday', '4B.4', item => {
  item.fullCredit = "Discusses respiratory infection prevention through vaccination (pneumococcal, RSV, flu, COVID)";
  item.halfCredit = "Mentions vaccines prevent infections";
});

updateItem('Week3_Patient_B_Thursday', '4B.5', item => {
  item.fullCredit = "Discusses infection avoidance strategies (hand hygiene, avoiding sick contacts)";
  item.halfCredit = "Mentions hand washing";
});

updateItem('Week3_Patient_B_Thursday', '4C.1', item => {
  item.fullCredit = "Counsels on rinsing mouth with water and spitting after Trelegy inhalation to prevent oral candidiasis";
  item.halfCredit = "Mentions rinsing mouth";
});

updateItem('Week3_Patient_B_Thursday', '4C.3', item => {
  item.fullCredit = "Encourages continuing established daily maintenance routine (next to coffee pot)";
  item.halfCredit = "Reminds to take daily";
});

updateItem('Week3_Patient_B_Thursday', '4D.1', item => {
  item.fullCredit = "Congratulates patient and praises sustained 5-year smoking cessation";
  item.halfCredit = "Praises quitting";
});

updateItem('Week3_Patient_B_Thursday', '4D.2', item => {
  item.fullCredit = "Encourages continued lifelong tobacco and smoke abstinence";
  item.halfCredit = "Reminds patient to stay quit";
});

updateItem('Week3_Patient_B_Thursday', '4D.3', item => {
  item.fullCredit = "Links continued smoking abstinence directly to slowed COPD progression and preserved lung function";
  item.halfCredit = "Notes quitting protects lungs";
});

updateItem('Week3_Patient_B_Thursday', '4E.2', item => {
  item.fullCredit = "Plans monitoring of dyspnea symptoms at follow-up";
  item.halfCredit = "Mentions checking breathing";
});

updateItem('Week3_Patient_B_Thursday', '4E.3', item => {
  item.fullCredit = "Plans monitoring of activity tolerance and exercise capacity";
  item.halfCredit = "Mentions checking daily activity";
});

updateItem('Week3_Patient_B_Thursday', '4E.4', item => {
  item.fullCredit = "Plans monitoring of rescue inhaler use frequency";
  item.halfCredit = "Mentions tracking rescue puffs";
});

updateItem('Week3_Patient_B_Thursday', '4E.6', item => {
  item.fullCredit = "Plans monitoring of medication adherence";
  item.halfCredit = "Mentions checking adherence";
});

updateItem('Week3_Patient_B_Thursday', '4E.7', item => {
  item.fullCredit = "Plans monitoring of inhaler technique and mouth rinsing adherence";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_B_Thursday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Mentions pneumonia shot";
});

updateItem('Week3_Patient_B_Thursday', '4F.2', item => {
  item.fullCredit = "Recommends RSV vaccination in Plan";
  item.halfCredit = "Mentions RSV shot";
});

updateItem('Week3_Patient_B_Thursday', '4F.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Mentions tetanus booster";
});

updateItem('Week3_Patient_B_Thursday', '4F.4', item => {
  item.fullCredit = "Plans review and updating of immunization records / registry verification";
  item.halfCredit = "Mentions updating vaccines";
});

updateItem('Week3_Patient_B_Thursday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timing (4-8 weeks or 1-3 months)";
  item.halfCredit = "Recommends follow-up without timing";
});

updateItem('Week3_Patient_B_Thursday', '4G.5', item => {
  item.fullCredit = "Plans evaluation of adherence and inhaler technique at follow-up visit";
  item.halfCredit = "Mentions checking adherence and technique";
});

updateItem('Week3_Patient_B_Thursday', '4G.6', item => {
  item.fullCredit = "Plans monitoring for ICS-related adverse effects (oral thrush, dysphonia, pneumonia)";
  item.halfCredit = "Mentions checking side effects";
});

updateItem('Week3_Patient_B_Thursday', '4G.7', item => {
  item.fullCredit = "Outlines plan for continued longitudinal COPD management and reassessment";
  item.halfCredit = "Mentions long-term follow-up";
});

updateItem('Week3_Patient_B_Thursday', '5B.3', item => {
  item.fullCredit = "Cites GOLD 2026 guideline rationale for triple therapy escalation";
  item.halfCredit = "Mentions guidelines";
});

updateItem('Week3_Patient_B_Thursday', '5B.4', item => {
  item.fullCredit = "Provides concrete actionable plan details (Trelegy Ellipta dosing, albuterol PRN, action plan, and follow-up timing)";
  item.halfCredit = "Single vague line";
});

updateItem('Week3_Patient_B_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GOLD 2026 guideline rationale for eosinophil-guided escalation";
  item.halfCredit = "Mentions guideline rationale";
});


// ==========================================
// RE-NORMALIZE ALL 9 WEEK 3 RUBRICS TO 100.00
// ==========================================

const TARGETS = { 1: 25.00, 2: 15.00, 3: 30.00, 4: 25.00, 5: 5.00 };

const allKeys = [
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

allKeys.forEach(k => {
  const rub = rubrics[k];
  if (!rub) return;

  for (let s = 1; s <= 5; s++) {
    const secItems = rub.filter(item => {
      const firstChar = (item.id || '')[0];
      return firstChar === String(s);
    });

    if (secItems.length === 0) continue;

    const currentSum = secItems.reduce((acc, it) => acc + (it.points || 0), 0);
    const target = TARGETS[s];

    if (currentSum > 0) {
      const scale = target / currentSum;
      secItems.forEach(it => {
        it.points = Math.round(it.points * scale * 100) / 100;
      });

      // Adjust rounding residual on the item with highest points
      let newSum = secItems.reduce((acc, it) => acc + it.points, 0);
      let diff = Math.round((target - newSum) * 100) / 100;
      if (Math.abs(diff) > 0.0001) {
        let maxItem = secItems.reduce((max, it) => (it.points > max.points ? it : max), secItems[0]);
        maxItem.points = Math.round((maxItem.points + diff) * 100) / 100;
      }
    }
  }

  // Verify total
  const finalTotal = rub.reduce((acc, it) => acc + (it.points || 0), 0);
  console.log(`${k} -> Total: ${finalTotal.toFixed(2)} pts`);
});

fs.writeFileSync(rubricsPath, JSON.stringify(rubrics, null, 2), 'utf8');
console.log('Saved updated rubrics to granular_rubrics.json successfully!');
