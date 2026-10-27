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
  item.halfCredit = "Referral or visit context mentioned";
});

updateItem('Week3_Patient_B_Tuesday', '1B.2', item => {
  item.fullCredit = "States worsening dyspnea over past year / progressive dyspnea (or ongoing symptoms / chronic exertional SOB / chronicity)";
  item.halfCredit = "Chronicity or ongoing symptoms noted";
});

updateItem('Week3_Patient_B_Tuesday', '1B.8', item => {
  item.fullCredit = "States albuterol provides only temporary/short-lived relief (or notes symptoms persist despite albuterol / relies on albuterol without controller)";
  item.halfCredit = "Relies on albuterol for relief";
});

updateItem('Week3_Patient_B_Tuesday', '1D.9', item => {
  item.fullCredit = "Documents physical activity limitation due to dyspnea (e.g. winded walking to mailbox, stairs, lifting, or general exertional limitation)";
  item.halfCredit = "Mentions dyspnea with exertion";
});

updateItem('Week3_Patient_B_Tuesday', '1D.11', item => {
  item.fullCredit = "Documents fear of future oxygen dependence, disease progression concern, or goal to preserve independence/function";
  item.halfCredit = "Mentions patient wants to stay active";
});

updateItem('Week3_Patient_B_Tuesday', '1E.16', item => {
  item.fullCredit = "Documents Tdap status (overdue >10 years or unverified), or notes immunization review indicated";
  item.halfCredit = "Mentions vaccine history";
});

updateItem('Week3_Patient_B_Tuesday', '1E.20', item => {
  item.fullCredit = "Documents albuterol provides temporary relief only, symptoms persist despite albuterol, or patient relies on SABA without a maintenance controller";
  item.halfCredit = "Documents albuterol reliance";
});

updateItem('Week3_Patient_B_Tuesday', '1G.1', item => {
  item.fullCredit = "Documents patient concern about COPD disease progression, worsening breathlessness, or symptom burden";
  item.halfCredit = "Mentions shortness of breath";
});

updateItem('Week3_Patient_B_Tuesday', '1G.2', item => {
  item.fullCredit = "Documents patient fear regarding future oxygen dependence, desire to stay out of the hospital, or goal to maintain independence";
  item.halfCredit = "Mentions wanting to stay out of the hospital";
});

updateItem('Week3_Patient_B_Tuesday', '1G.4', item => {
  item.fullCredit = "Documents patient's limited understanding of daily maintenance vs rescue inhaler therapy (or albuterol-alone belief / 'I just use the albuterol')";
  item.halfCredit = "Notes patient relies on albuterol";
});

updateItem('Week3_Patient_B_Tuesday', '1G.6', item => {
  item.fullCredit = "Documents patient goal regarding symptom control, activity improvement, better endurance, or wanting to breathe easier";
  item.halfCredit = "Mentions wanting to breathe easier";
});

updateItem('Week3_Patient_B_Tuesday', '2B.9', item => {
  item.fullCredit = "States spirometry values (FEV1 1.86 L / 62% pred, FEV1/FVC 0.58-0.62) with or without explicit mention of post-bronchodilator testing methodology";
  item.halfCredit = "Reports spirometry values";
});

updateItem('Week3_Patient_B_Tuesday', '2C.2', item => {
  item.fullCredit = "Classifies COPD as GOLD Group B (or Group E) using CAT score (18, >=10) and exacerbation history (<=1 flare), or notes high symptom burden with low flare risk";
  item.halfCredit = "Mentions CAT score without group classification";
});

updateItem('Week3_Patient_B_Tuesday', '2C.3', item => {
  item.fullCredit = "Interprets SpO2 95% on room air as adequate / normal / above the 88% supplemental oxygen threshold (or notes normal oxygenation)";
  item.halfCredit = "Reports SpO2 value without interpretation";
});

updateItem('Week3_Patient_B_Tuesday', '2C.4', item => {
  item.fullCredit = "Notes only post-bronchodilator values are presented or evaluates current post-BD spirometry as confirming persistent airflow obstruction";
  item.halfCredit = "Notes post-BD spirometry";
});

updateItem('Week3_Patient_B_Tuesday', '3A.6', item => {
  item.fullCredit = "Exacerbation history (1 moderate flare, no hospitalizations) evaluated as supporting GOLD Group B (or Group E / low flare risk) within assessment";
  item.halfCredit = "Exacerbation history noted in assessment";
});

updateItem('Week3_Patient_B_Tuesday', '3A.15', item => {
  item.fullCredit = "Distinguishes treatment non-initiation due to cost barrier from pharmacologic treatment failure (whether framed as a narrative or clinical inquiry question)";
  item.halfCredit = "Cost barrier discussed";
});

updateItem('Week3_Patient_B_Tuesday', '3A.17', item => {
  item.fullCredit = "Links 45 pack-year smoking history to COPD disease burden, lung function impairment, or progression trajectory";
  item.halfCredit = "Mentions smoking history in assessment";
});

updateItem('Week3_Patient_B_Tuesday', '3B.1', item => {
  item.fullCredit = "Identifies medication non-initiation due to cost barrier ($300 inhaler cost) as a primary clinical problem (whether stated as problem header or clinical inquiry)";
  item.halfCredit = "Notes patient did not pick up inhaler";
});

updateItem('Week3_Patient_B_Tuesday', '3C.5', item => {
  item.fullCredit = "Assesses prescription insurance / formulary coverage, copay tiers, or plan to find an affordable inhaler option";
  item.halfCredit = "Mentions finding a cheaper medication";
});

updateItem('Week3_Patient_B_Tuesday', '3C.6', item => {
  item.fullCredit = "Evaluates cost-saving resources (patient assistance programs, manufacturer copay cards, formulary alternatives, or retail programs)";
  item.halfCredit = "Mentions copay resources";
});

updateItem('Week3_Patient_B_Tuesday', '3D.2', item => {
  item.fullCredit = "Identifies patient knowledge gap or need for education regarding COPD disease progression, chronic airway changes, or inhaler technique";
  item.halfCredit = "Mentions COPD education";
});

updateItem('Week3_Patient_B_Tuesday', '3D.3', item => {
  item.fullCredit = "Identifies knowledge gap regarding maintenance inhaler purpose and importance of consistent daily use (vs PRN albuterol)";
  item.halfCredit = "Notes need to explain daily inhaler";
});

updateItem('Week3_Patient_B_Tuesday', '3D.4', item => {
  item.fullCredit = "Identifies need for education on exacerbation prevention and early warning symptom recognition";
  item.halfCredit = "Mentions preventing flares";
});

updateItem('Week3_Patient_B_Tuesday', '3D.5', item => {
  item.fullCredit = "Addresses rescue vs maintenance inhaler distinction as a specific patient knowledge deficit or education need";
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
  item.fullCredit = "Frames continued tobacco abstinence as the single most critical intervention to slow lung decline / disease progression";
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
  item.fullCredit = "Identifies preventive care and immunization gaps as a clinical problem in Assessment or Plan (or lists vaccines indicated)";
  item.halfCredit = "Mentions vaccines briefly";
});

updateItem('Week3_Patient_B_Tuesday', '3F.4', item => {
  item.fullCredit = "Identifies Tdap booster overdue status (>10 years) or recommends review in Assessment or Plan";
  item.halfCredit = "Mentions tetanus booster";
});

updateItem('Week3_Patient_B_Tuesday', '3F.7', item => {
  item.fullCredit = "States preventive care and vaccine optimization is indicated for chronic respiratory disease";
  item.halfCredit = "Mentions updating vaccines";
});

updateItem('Week3_Patient_B_Tuesday', '3F.8', item => {
  item.fullCredit = "Links COPD status and age >=65 to pneumococcal (PCV20) and RSV vaccination indications";
  item.halfCredit = "Recommends pneumonia or RSV vaccine";
});

updateItem('Week3_Patient_B_Tuesday', '4A.1', item => {
  item.fullCredit = "Initiates or prescribes once-daily LABA/LAMA combination therapy (specifically naming agent, class, or finding an affordable LABA/LAMA)";
  item.halfCredit = "Recommends bronchodilator therapy";
});

updateItem('Week3_Patient_B_Tuesday', '4A.2', item => {
  item.fullCredit = "Names specific LABA/LAMA agent (e.g., Anoro Ellipta: umeclidinium/vilanterol, Stiolto Respimat, Bevespi Aerosphere, or affordable LABA/LAMA alternative)";
  item.halfCredit = "Mentions LABA/LAMA without specific brand/generic name";
});

updateItem('Week3_Patient_B_Tuesday', '4A.3', item => {
  item.fullCredit = "Specifies dose and frequency for maintenance therapy (e.g., 62.5/25 mcg 1 inhalation once daily, or standard once-daily dosing)";
  item.halfCredit = "Mentions once daily without dose";
});

updateItem('Week3_Patient_B_Tuesday', '4A.4', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA 2 puffs q4-6h PRN for rescue (or continues PRN rescue inhaler)";
  item.halfCredit = "Mentions continuing rescue inhaler";
});

updateItem('Week3_Patient_B_Tuesday', '4A.6', item => {
  item.fullCredit = "Discusses expected clinical benefits of maintenance therapy (improved breathlessness, better exercise tolerance, reduced rescue reliance)";
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
  item.fullCredit = "Cites GOLD guideline basis (GOLD 2026, GOLD report, or Group B dual bronchodilator recommendation, in narrative or question format)";
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
  item.fullCredit = "Assesses insurance formulary coverage, tier status, or Medicare Part D copay structure (or plans formulary check)";
  item.halfCredit = "Mentions checking insurance";
});

updateItem('Week3_Patient_B_Tuesday', '4B.2', item => {
  item.fullCredit = "Discusses expected copay costs with patient ($20-$40 tier copay vs $300 cash price, or affordable copay target)";
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
  item.fullCredit = "Confirms oral medication adherence (lisinopril, atorvastatin) and addresses cost barriers holistically without stretching";
  item.halfCredit = "Notes patient takes oral pills";
});

updateItem('Week3_Patient_B_Tuesday', '4B.7', item => {
  item.fullCredit = "Emphasizes provider-patient collaboration to navigate financial and insurance coverage barriers";
  item.halfCredit = "Mentions working together on costs";
});

updateItem('Week3_Patient_B_Tuesday', '4C.1', item => {
  item.fullCredit = "Educates patient on chronic nature of COPD and importance of slowing progression (or provides COPD education)";
  item.halfCredit = "Mentions COPD education";
});

updateItem('Week3_Patient_B_Tuesday', '4C.2', item => {
  item.fullCredit = "Provides education distinguishing rescue vs maintenance inhaler purposes and mechanisms";
  item.halfCredit = "Mentions inhaler purposes";
});

updateItem('Week3_Patient_B_Tuesday', '4C.3', item => {
  item.fullCredit = "Educates on importance of daily maintenance adherence for symptom control and flare reduction";
  item.halfCredit = "Mentions taking inhaler consistently";
});

updateItem('Week3_Patient_B_Tuesday', '4C.4', item => {
  item.fullCredit = "Reviews exacerbation prevention role of maintenance dual bronchodilators";
  item.halfCredit = "Mentions preventing flares";
});

updateItem('Week3_Patient_B_Tuesday', '4C.5', item => {
  item.fullCredit = "Discusses adherence role in achieving sustained symptom control and functional improvement";
  item.halfCredit = "Notes adherence helps symptoms";
});

updateItem('Week3_Patient_B_Tuesday', '4C.6', item => {
  item.fullCredit = "Connects patient education to long-term disease management, quality of life, and independence";
  item.halfCredit = "Mentions improving quality of life";
});

updateItem('Week3_Patient_B_Tuesday', '4C.7', item => {
  item.fullCredit = "Education plan maps to identified knowledge gaps (inhaler purpose, cost navigation, technique, daily use)";
  item.halfCredit = "Provides patient education";
});

updateItem('Week3_Patient_B_Tuesday', '4C.8', item => {
  item.fullCredit = "Reviews early warning signs of COPD exacerbation and when to seek urgent evaluation";
  item.halfCredit = "Mentions warning signs";
});

updateItem('Week3_Patient_B_Tuesday', '4D.1', item => {
  item.fullCredit = "Congratulates patient and provides positive reinforcement for sustained 5-year smoking cessation";
  item.halfCredit = "Mentions smoking cessation in plan";
});

updateItem('Week3_Patient_B_Tuesday', '4D.2', item => {
  item.fullCredit = "Reinforces continued lifelong tobacco abstinence to protect lung function";
  item.halfCredit = "Encourages staying smoke-free";
});

updateItem('Week3_Patient_B_Tuesday', '4D.3', item => {
  item.fullCredit = "Links continued tobacco abstinence to slowed COPD progression and reduced mortality";
  item.halfCredit = "Mentions benefits of not smoking";
});

updateItem('Week3_Patient_B_Tuesday', '4D.4', item => {
  item.fullCredit = "Confirms smoking cessation pharmacotherapy is not indicated given stable 5-year abstinence";
  item.halfCredit = "Notes no smoking cessation meds needed";
});

updateItem('Week3_Patient_B_Tuesday', '4E.1', item => {
  item.fullCredit = "Plans CAT score monitoring at follow-up (target <10 or meaningful improvement)";
  item.halfCredit = "Mentions tracking CAT score";
});

updateItem('Week3_Patient_B_Tuesday', '4E.2', item => {
  item.fullCredit = "Plans monitoring of dyspnea and shortness of breath symptoms at follow-up";
  item.halfCredit = "Monitors dyspnea";
});

updateItem('Week3_Patient_B_Tuesday', '4E.3', item => {
  item.fullCredit = "Plans monitoring of physical activity tolerance, walking distance, and daily functioning";
  item.halfCredit = "Monitors activity";
});

updateItem('Week3_Patient_B_Tuesday', '4E.4', item => {
  item.fullCredit = "Plans monitoring of rescue albuterol use frequency (target reduction toward PRN occasional use)";
  item.halfCredit = "Monitors albuterol use";
});

updateItem('Week3_Patient_B_Tuesday', '4E.5', item => {
  item.fullCredit = "Plans monitoring for COPD exacerbations, acute flares, or urgent care visits";
  item.halfCredit = "Monitors exacerbations";
});

updateItem('Week3_Patient_B_Tuesday', '4E.6', item => {
  item.fullCredit = "Plans monitoring of maintenance medication adherence and daily inhaler use consistency";
  item.halfCredit = "Monitors adherence";
});

updateItem('Week3_Patient_B_Tuesday', '4E.7', item => {
  item.fullCredit = "Plans verification and re-evaluation of inhaler technique at follow-up";
  item.halfCredit = "Monitors technique";
});

updateItem('Week3_Patient_B_Tuesday', '4E.8', item => {
  item.fullCredit = "Plans monitoring of ongoing prescription affordability, fill status, and copay sustainability";
  item.halfCredit = "Monitors affordability";
});

updateItem('Week3_Patient_B_Tuesday', '4E.9', item => {
  item.fullCredit = "Plans evaluation of overall clinical response and symptom relief from initial LABA/LAMA therapy";
  item.halfCredit = "Monitors treatment response";
});

updateItem('Week3_Patient_B_Tuesday', '4E.10', item => {
  item.fullCredit = "Plans longitudinal spirometry or lung function reassessment per GOLD schedule (annual or as clinically indicated)";
  item.halfCredit = "Mentions repeat spirometry";
});

updateItem('Week3_Patient_B_Tuesday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20 or PPSV23) for chronic lung disease / age >=65";
  item.halfCredit = "Mentions pneumonia vaccine";
});

updateItem('Week3_Patient_B_Tuesday', '4F.2', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo) for adult >=60 with chronic lung disease";
  item.halfCredit = "Mentions RSV vaccine";
});

updateItem('Week3_Patient_B_Tuesday', '4F.3', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years) per adult immunization schedule";
  item.halfCredit = "Mentions Tdap booster";
});

updateItem('Week3_Patient_B_Tuesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe (e.g., 4–8 weeks, 1–3 months, or routine outpatient follow-up)";
  item.halfCredit = "Follow-up timeframe mentioned";
});

updateItem('Week3_Patient_B_Tuesday', '4G.2', item => {
  item.fullCredit = "Plans follow-up visit to reassess dyspnea, symptom burden, and exercise tolerance";
  item.halfCredit = "Reassessment planned";
});

updateItem('Week3_Patient_B_Tuesday', '4G.3', item => {
  item.fullCredit = "Plans serial CAT score reassessment at follow-up to track symptom trajectory";
  item.halfCredit = "CAT recheck noted";
});

updateItem('Week3_Patient_B_Tuesday', '4G.4', item => {
  item.fullCredit = "Plans reassessment of maintenance inhaler adherence at follow-up";
  item.halfCredit = "Adherence check planned";
});

updateItem('Week3_Patient_B_Tuesday', '4G.5', item => {
  item.fullCredit = "Plans follow-up check to confirm patient successfully obtained and filled the affordable inhaler";
  item.halfCredit = "Fill confirmation planned";
});

updateItem('Week3_Patient_B_Tuesday', '4G.6', item => {
  item.fullCredit = "Plans evaluation of therapeutic response to LABA/LAMA at follow-up before considering changes";
  item.halfCredit = "Response evaluation planned";
});

updateItem('Week3_Patient_B_Tuesday', '4G.7', item => {
  item.fullCredit = "Notes periodic spirometry or lung function monitoring per GOLD schedule";
  item.halfCredit = "Spirometry planned";
});

updateItem('Week3_Patient_B_Tuesday', '4G.8', item => {
  item.fullCredit = "Follow-up plan addresses active problems comprehensively (symptoms, adherence, affordability, prevention)";
  item.halfCredit = "Follow-up plan outlined";
});

updateItem('Week3_Patient_B_Tuesday', '5B.3', item => {
  item.fullCredit = "Includes numeric goals or thresholds (e.g., CAT <10, BP <130/80 mmHg, SpO2 >88%, or rescue reduction)";
  item.halfCredit = "Goals mentioned";
});

updateItem('Week3_Patient_B_Tuesday', '5B.4', item => {
  item.fullCredit = "Plan contains actionable items with specific medication classes/agents, adherence counseling, or follow-up timing";
  item.halfCredit = "Plan outlined";
});

updateItem('Week3_Patient_B_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites GOLD guideline rationale (GOLD 2026, GOLD report, or Group B dual bronchodilator recommendation)";
  item.halfCredit = "Guideline rationale mentioned";
});


// ==========================================
// BOB JENKINS WEDNESDAY (140 DEDUCTED ITEMS)
// ==========================================

updateItem('Week3_Patient_B_Wednesday', '1B.4', item => {
  item.fullCredit = "Documents continued exertional dyspnea with climbing stairs (or notes residual dyspnea with exertion/stairs)";
  item.halfCredit = "Notes dyspnea on stairs";
});

updateItem('Week3_Patient_B_Wednesday', '1B.5', item => {
  item.fullCredit = "Documents continued exertional dyspnea with carrying groceries/lifting (or notes limitation with carrying loads/exertion)";
  item.halfCredit = "Notes dyspnea with groceries";
});

updateItem('Week3_Patient_B_Wednesday', '1B.6', item => {
  item.fullCredit = "Documents continued exertional dyspnea with household projects/yard work (or notes residual activity limitations)";
  item.halfCredit = "Notes dyspnea with household chores";
});

updateItem('Week3_Patient_B_Wednesday', '1B.8', item => {
  item.fullCredit = "Documents albuterol rescue use frequency / PRN regimen, or notes slight reduction from baseline";
  item.halfCredit = "Albuterol rescue use documented";
});

updateItem('Week3_Patient_B_Wednesday', '1B.20', item => {
  item.fullCredit = "Documents medication affordability ($20 copay / cheaper) and absence of difficulty obtaining prescriptions";
  item.halfCredit = "Notes medication is affordable";
});

updateItem('Week3_Patient_B_Wednesday', '1B.23', item => {
  item.fullCredit = "Documents patient denies desire or cravings to restart tobacco use (or notes stable 5-year abstinence)";
  item.halfCredit = "Notes patient does not smoke";
});

updateItem('Week3_Patient_B_Wednesday', '1D.9', item => {
  item.fullCredit = "Documents physical activity limitation secondary to dyspnea (or notes exertional limitations in daily life)";
  item.halfCredit = "Activity limitation noted";
});

updateItem('Week3_Patient_B_Wednesday', '1E.14', item => {
  item.fullCredit = "Documents Tdap status (overdue >10 years or unverified), or notes immunization review indicated";
  item.halfCredit = "Vaccine status noted";
});

updateItem('Week3_Patient_B_Wednesday', '1E.18', item => {
  item.fullCredit = "Identifies immunization gaps (pneumococcal, RSV, and/or Tdap) or confirms flu/COVID up-to-date";
  item.halfCredit = "Vaccine gaps identified";
});

updateItem('Week3_Patient_B_Wednesday', '1F.5', item => {
  item.fullCredit = "ROS confirms patient denies cravings or desire to restart tobacco use (or notes stable smoking abstinence)";
  item.halfCredit = "Non-smoker noted";
});

updateItem('Week3_Patient_B_Wednesday', '1F.6', item => {
  item.fullCredit = "ROS confirms absence of prescription affordability or access concerns ($20 copay resolved)";
  item.halfCredit = "Meds affordable noted";
});

updateItem('Week3_Patient_B_Wednesday', '1G.1', item => {
  item.fullCredit = "Addresses patient concern regarding suboptimal improvement with clinical reassurance and education";
  item.halfCredit = "Concern noted";
});

updateItem('Week3_Patient_B_Wednesday', '1G.2', item => {
  item.fullCredit = "Reviews realistic treatment timeline expectations for daily maintenance bronchodilators (gradual onset over weeks)";
  item.halfCredit = "Timeline reviewed";
});

updateItem('Week3_Patient_B_Wednesday', '1G.3', item => {
  item.fullCredit = "Documents patient reports feeling 'a tiny bit better' or ties symptom response to functional activities";
  item.halfCredit = "Slight improvement noted";
});

updateItem('Week3_Patient_B_Wednesday', '2A.13', item => {
  item.fullCredit = "Reports BP (130/76) and interprets as acceptable / controlled in context of lisinopril therapy";
  item.halfCredit = "BP reported";
});

updateItem('Week3_Patient_B_Wednesday', '2B.4', item => {
  item.fullCredit = "Documents persistent exertional dyspnea (stairs, groceries, household tasks, or general exertion)";
  item.halfCredit = "Exertional dyspnea documented";
});

updateItem('Week3_Patient_B_Wednesday', '2B.5', item => {
  item.fullCredit = "Documents albuterol PRN usage frequency or pattern (several times weekly / 1-2 times daily)";
  item.halfCredit = "Albuterol PRN documented";
});

updateItem('Week3_Patient_B_Wednesday', '2B.6', item => {
  item.fullCredit = "Documents albuterol PRN in medication list with objective usage frequency or rescue reliance marker";
  item.halfCredit = "Albuterol PRN in med list";
});

updateItem('Week3_Patient_B_Wednesday', '2B.9', item => {
  item.fullCredit = "Documents FEV1% predicted (58-62%) and links to GOLD Grade 2 moderate obstruction (or reports spirometry)";
  item.halfCredit = "Spirometry reported";
});

updateItem('Week3_Patient_B_Wednesday', '2B.10', item => {
  item.fullCredit = "Documents spirometry values (FEV1, FEV1/FVC) as post-bronchodilator findings or confirms persistent airflow limitation";
  item.halfCredit = "Spirometry documented";
});

updateItem('Week3_Patient_B_Wednesday', '2C.2', item => {
  item.fullCredit = "Classifies COPD as GOLD Grade 2 moderate airflow limitation based on FEV1 58-62% predicted";
  item.halfCredit = "Grade 2 mentioned";
});

updateItem('Week3_Patient_B_Wednesday', '2C.4', item => {
  item.fullCredit = "Links zero exacerbations and CAT score to GOLD Group B classification";
  item.halfCredit = "Group B mentioned";
});

updateItem('Week3_Patient_B_Wednesday', '2C.6', item => {
  item.fullCredit = "Documents rescue inhaler use trend or reduction from baseline in objective findings";
  item.halfCredit = "Rescue use noted";
});

updateItem('Week3_Patient_B_Wednesday', '2C.7', item => {
  item.fullCredit = "Notes routine laboratory evaluation (sputum culture, CBC, CMP) is unnecessary given stable clinical picture";
  item.halfCredit = "No acute labs needed noted";
});

updateItem('Week3_Patient_B_Wednesday', '2C.8', item => {
  item.fullCredit = "Notes arterial blood gas (ABG) is not indicated given stable SpO2 (95-97%) on room air";
  item.halfCredit = "ABG not indicated noted";
});

updateItem('Week3_Patient_B_Wednesday', '3A.2', item => {
  item.fullCredit = "Labels COPD as GOLD Group B (or Group E) with high symptom burden and low flare risk";
  item.halfCredit = "Group B mentioned";
});

updateItem('Week3_Patient_B_Wednesday', '3A.4', item => {
  item.fullCredit = "Links inhaler technique error (blowing into device) to reduced drug lung deposition and suboptimal clinical response";
  item.halfCredit = "Technique error linked to symptoms";
});

updateItem('Week3_Patient_B_Wednesday', '3A.5', item => {
  item.fullCredit = "Cites decreased rescue inhaler use or slight dyspnea improvement as evidence of modest treatment benefit";
  item.halfCredit = "Modest benefit noted";
});

updateItem('Week3_Patient_B_Wednesday', '3A.6', item => {
  item.fullCredit = "Documents continued exertional dyspnea as clinically significant residual symptom burden";
  item.halfCredit = "Continued dyspnea noted";
});

updateItem('Week3_Patient_B_Wednesday', '3A.7', item => {
  item.fullCredit = "Documents continued physical activity limitation with exertion in assessment";
  item.halfCredit = "Activity limitation noted";
});

updateItem('Week3_Patient_B_Wednesday', '3A.8', item => {
  item.fullCredit = "Cites GOLD 2026 multi-domain framework (symptom burden, exacerbation history, adherence, technique)";
  item.halfCredit = "GOLD guidelines cited";
});

updateItem('Week3_Patient_B_Wednesday', '3A.9', item => {
  item.fullCredit = "Evaluates GOLD activity limitation criteria in assessment of COPD control";
  item.halfCredit = "Activity limitation evaluated";
});

updateItem('Week3_Patient_B_Wednesday', '3A.10', item => {
  item.fullCredit = "Evaluates rescue inhaler use within overall COPD symptom control framework";
  item.halfCredit = "Rescue use evaluated";
});

updateItem('Week3_Patient_B_Wednesday', '3A.11', item => {
  item.fullCredit = "Evaluates exacerbation history in context of Group B maintenance decision (no acute flares, withholding escalation)";
  item.halfCredit = "Exacerbation history evaluated";
});

updateItem('Week3_Patient_B_Wednesday', '3A.12', item => {
  item.fullCredit = "Explains persistent symptoms stem from implementation barriers (technique error, missed doses) rather than drug inefficacy";
  item.halfCredit = "Implementation barriers noted";
});

updateItem('Week3_Patient_B_Wednesday', '3A.13', item => {
  item.fullCredit = "Frames inhaler technique error (blowing into mouthpiece) as primary driver of suboptimal clinical response (in narrative or question format)";
  item.halfCredit = "Technique error framed as problem";
});

updateItem('Week3_Patient_B_Wednesday', '3A.14', item => {
  item.fullCredit = "States current symptoms cannot be interpreted as true pharmacologic medication failure";
  item.halfCredit = "Not true drug failure noted";
});

updateItem('Week3_Patient_B_Wednesday', '3A.15', item => {
  item.fullCredit = "States adherence and technique optimization must precede any consideration of treatment escalation";
  item.halfCredit = "Optimize technique before escalation noted";
});

updateItem('Week3_Patient_B_Wednesday', '3A.17', item => {
  item.fullCredit = "Links FEV1 (58-62%) to GOLD Grade 2 moderate airflow limitation within Assessment section";
  item.halfCredit = "Grade 2 obstruction noted";
});

updateItem('Week3_Patient_B_Wednesday', '3A.19', item => {
  item.fullCredit = "Characterizes SpO2 (95-97%) as adequate without need for supplemental oxygen therapy";
  item.halfCredit = "SpO2 adequate noted";
});

updateItem('Week3_Patient_B_Wednesday', '3A.21', item => {
  item.fullCredit = "Explicitly distinguishes technique/adherence deficiency from true pharmacologic treatment failure";
  item.halfCredit = "Distinguishes technique from drug failure";
});

updateItem('Week3_Patient_B_Wednesday', '3A.22', item => {
  item.fullCredit = "States LABA/LAMA remains guideline-supported first-line therapy for GOLD Group B";
  item.halfCredit = "LABA/LAMA guideline supported noted";
});

updateItem('Week3_Patient_B_Wednesday', '3A.23', item => {
  item.fullCredit = "Notes absence of frequent/severe exacerbations argues against triple therapy / ICS escalation at this visit";
  item.halfCredit = "No escalation to triple therapy noted";
});

updateItem('Week3_Patient_B_Wednesday', '3B.2', item => {
  item.fullCredit = "Links nonadherence (missed doses, taking Anoro 3-4 days/week) to persistent symptoms and suboptimal response";
  item.halfCredit = "Missed doses linked to symptoms";
});

updateItem('Week3_Patient_B_Wednesday', '3B.6', item => {
  item.fullCredit = "Identifies unrealistic expectations about symptom improvement timeline as an adherence barrier";
  item.halfCredit = "Timeline expectations noted";
});

updateItem('Week3_Patient_B_Wednesday', '3B.7', item => {
  item.fullCredit = "Identifies limited understanding of maintenance therapy benefits as contributing to missed doses";
  item.halfCredit = "Knowledge gap noted";
});

updateItem('Week3_Patient_B_Wednesday', '3B.8', item => {
  item.fullCredit = "Frames technique errors and missed doses as precluding accurate assessment of medication efficacy";
  item.halfCredit = "Cannot assess efficacy yet noted";
});

updateItem('Week3_Patient_B_Wednesday', '3B.9', item => {
  item.fullCredit = "States adherence and technique optimization must precede treatment escalation per GOLD guidance";
  item.halfCredit = "Optimize adherence before escalation";
});

updateItem('Week3_Patient_B_Wednesday', '3B.11', item => {
  item.fullCredit = "Notes medication affordability status ($20 copay) resolved financial access barriers";
  item.halfCredit = "Affordability resolved noted";
});

updateItem('Week3_Patient_B_Wednesday', '3B.12', item => {
  item.fullCredit = "Links nonadherence (forgetfulness, lack of routine) to persistent symptom burden";
  item.halfCredit = "Adherence barrier noted";
});

updateItem('Week3_Patient_B_Wednesday', '3B.13', item => {
  item.fullCredit = "Outlines comprehensive step-by-step Ellipta education/demonstration plan (slide cover, exhale away, inhale deeply, hold breath 5-10s)";
  item.halfCredit = "Inhaler technique instruction provided";
});

updateItem('Week3_Patient_B_Wednesday', '3B.14', item => {
  item.fullCredit = "Evaluates rescue inhaler reliance relative to undertreated maintenance symptoms";
  item.halfCredit = "Rescue reliance evaluated";
});

updateItem('Week3_Patient_B_Wednesday', '3B.15', item => {
  item.fullCredit = "Identifies adherence and technique mastery as the primary clinical priorities for this visit";
  item.halfCredit = "Technique and adherence prioritized";
});

updateItem('Week3_Patient_B_Wednesday', '3C.1', item => {
  item.fullCredit = "Identifies inhaler technique error and/or knowledge deficit as a clinical problem (in narrative or inquiry format)";
  item.halfCredit = "Technique issue identified";
});

updateItem('Week3_Patient_B_Wednesday', '3C.2', item => {
  item.fullCredit = "Compares patient understanding to initial visit (affordability resolved, but administration error present)";
  item.halfCredit = "Interval progress noted";
});

updateItem('Week3_Patient_B_Wednesday', '3C.3', item => {
  item.fullCredit = "Addresses unrealistic expectations regarding treatment timeline and explains gradual cumulative onset";
  item.halfCredit = "Timeline explained";
});

updateItem('Week3_Patient_B_Wednesday', '3C.5', item => {
  item.fullCredit = "Instructs patient not to blow into device and to exhale fully AWAY from device before inhalation";
  item.halfCredit = "Exhale away from device instructed";
});

updateItem('Week3_Patient_B_Wednesday', '3C.6', item => {
  item.fullCredit = "Instructs on sliding cover until click, deep steady inhalation, and holding breath for 5-10 seconds";
  item.halfCredit = "Ellipta steps instructed";
});

updateItem('Week3_Patient_B_Wednesday', '3C.7', item => {
  item.fullCredit = "Utilizes teach-back demonstration to confirm patient mastery of corrected Ellipta technique";
  item.halfCredit = "Teach-back utilized";
});

updateItem('Week3_Patient_B_Wednesday', '3C.8', item => {
  item.fullCredit = "Distinguishes administration technique error from behavioral adherence barrier (forgetfulness)";
  item.halfCredit = "Technique and routine distinguished";
});

updateItem('Week3_Patient_B_Wednesday', '3C.9', item => {
  item.fullCredit = "Notes administration understanding remained incomplete despite prior initiation, requiring in-person coaching";
  item.halfCredit = "Re-education needed noted";
});

updateItem('Week3_Patient_B_Wednesday', '3C.10', item => {
  item.fullCredit = "Addresses maintenance vs rescue therapy knowledge deficit and reinforces daily preventive use";
  item.halfCredit = "Daily maintenance reinforced";
});

updateItem('Week3_Patient_B_Wednesday', '3D.1', item => {
  item.fullCredit = "Identifies tobacco use history and stable cessation status in Assessment section";
  item.halfCredit = "Smoking cessation noted";
});

updateItem('Week3_Patient_B_Wednesday', '3D.2', item => {
  item.fullCredit = "Reiterates current tobacco-free status (quit 5 years ago) in clinical assessment";
  item.halfCredit = "Smoke-free status noted";
});

updateItem('Week3_Patient_B_Wednesday', '3D.3', item => {
  item.fullCredit = "Reinforces importance of continued lifelong abstinence for slowing COPD progression";
  item.halfCredit = "Abstinence reinforced";
});

updateItem('Week3_Patient_B_Wednesday', '3D.4', item => {
  item.fullCredit = "Provides positive reinforcement and congratulations for sustained 5-year smoking cessation";
  item.halfCredit = "Congratulations on quitting";
});

updateItem('Week3_Patient_B_Wednesday', '3D.5', item => {
  item.fullCredit = "Acknowledges 5-year cessation milestone in clinical assessment";
  item.halfCredit = "5-year milestone acknowledged";
});

updateItem('Week3_Patient_B_Wednesday', '3D.6', item => {
  item.fullCredit = "Confirms smoking cessation pharmacotherapy is not indicated given stable abstinence and denial of cravings";
  item.halfCredit = "No cessation meds needed noted";
});

updateItem('Week3_Patient_B_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care and immunization gaps as a clinical problem in Assessment or Plan";
  item.halfCredit = "Vaccines noted";
});

updateItem('Week3_Patient_B_Wednesday', '3E.2', item => {
  item.fullCredit = "Identifies pneumococcal vaccination gap (PCV20 indicated) in chronic lung disease";
  item.halfCredit = "Pneumococcal vaccine noted";
});

updateItem('Week3_Patient_B_Wednesday', '3E.3', item => {
  item.fullCredit = "Identifies RSV vaccination gap (Arexvy/Abrysvo indicated for age >=60 with COPD)";
  item.halfCredit = "RSV vaccine noted";
});

updateItem('Week3_Patient_B_Wednesday', '3E.4', item => {
  item.fullCredit = "Identifies Tdap booster overdue status (>10 years) in clinical assessment";
  item.halfCredit = "Tdap noted";
});

updateItem('Week3_Patient_B_Wednesday', '3E.5', item => {
  item.fullCredit = "Confirms influenza vaccination is up to date in clinical evaluation";
  item.halfCredit = "Flu vaccine noted";
});

updateItem('Week3_Patient_B_Wednesday', '3E.6', item => {
  item.fullCredit = "Confirms COVID-19 vaccination is up to date in clinical evaluation";
  item.halfCredit = "COVID vaccine noted";
});

updateItem('Week3_Patient_B_Wednesday', '3E.7', item => {
  item.fullCredit = "States preventive care optimization remains appropriate and actionable for chronic lung disease";
  item.halfCredit = "Preventive care optimization noted";
});

updateItem('Week3_Patient_B_Wednesday', '3E.8', item => {
  item.fullCredit = "Frames immunization completion as a core quality and exacerbation prevention measure";
  item.halfCredit = "Vaccines prevent exacerbations noted";
});

updateItem('Week3_Patient_B_Wednesday', '3E.9', item => {
  item.fullCredit = "Links pneumococcal and RSV vaccination to COPD-specific risk reduction";
  item.halfCredit = "Vaccines linked to COPD risk";
});

updateItem('Week3_Patient_B_Wednesday', '3E.10', item => {
  item.fullCredit = "Links Tdap to routine adult immunization schedule (every 10 years)";
  item.halfCredit = "Tdap routine schedule noted";
});

updateItem('Week3_Patient_B_Wednesday', '3E.11', item => {
  item.fullCredit = "Identifies specific immunization gaps (PCV20, RSV, Tdap) for outpatient follow-up";
  item.halfCredit = "Vaccine gaps identified";
});

updateItem('Week3_Patient_B_Wednesday', '3E.12', item => {
  item.fullCredit = "Discusses respiratory vaccine relevance to reducing COPD exacerbation risk per GOLD guidance";
  item.halfCredit = "Vaccine relevance discussed";
});

updateItem('Week3_Patient_B_Wednesday', '4A.1', item => {
  item.fullCredit = "Maintains and continues Anoro Ellipta (umeclidinium/vilanterol 62.5/25 mcg 1 inhalation daily)";
  item.halfCredit = "Continues LABA/LAMA";
});

updateItem('Week3_Patient_B_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies dose and frequency of Anoro Ellipta (62.5/25 mcg 1 inhalation once daily)";
  item.halfCredit = "Dose/frequency specified";
});

updateItem('Week3_Patient_B_Wednesday', '4A.3', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA 2 puffs q4-6h PRN for rescue";
  item.halfCredit = "Continues rescue inhaler";
});

updateItem('Week3_Patient_B_Wednesday', '4A.4', item => {
  item.fullCredit = "Explicitly decides to withhold medication escalation at this visit";
  item.halfCredit = "No escalation today noted";
});

updateItem('Week3_Patient_B_Wednesday', '4A.5', item => {
  item.fullCredit = "States clinical rationale for non-escalation (adherence and technique optimization must precede drug changes)";
  item.halfCredit = "Rationale for non-escalation stated";
});

updateItem('Week3_Patient_B_Wednesday', '4A.6', item => {
  item.fullCredit = "Plans to reassess symptom response after adherence and technique are optimized before modifying therapy";
  item.halfCredit = "Reassess response after technique fixed";
});

updateItem('Week3_Patient_B_Wednesday', '4A.7', item => {
  item.fullCredit = "Explicitly states ICS and triple therapy are withheld given low exacerbation history";
  item.halfCredit = "Triple therapy withheld";
});

updateItem('Week3_Patient_B_Wednesday', '4A.8', item => {
  item.fullCredit = "Explicitly maintains LABA/LAMA therapy without change";
  item.halfCredit = "LABA/LAMA maintained";
});

updateItem('Week3_Patient_B_Wednesday', '4A.9', item => {
  item.fullCredit = "Cites GOLD Group B guideline support for maintaining initial dual bronchodilator therapy";
  item.halfCredit = "GOLD Group B cited";
});

updateItem('Week3_Patient_B_Wednesday', '4A.10', item => {
  item.fullCredit = "Defers future escalation decisions pending reassessment of adherence and technique";
  item.halfCredit = "Escalation deferred";
});

updateItem('Week3_Patient_B_Wednesday', '4B.1', item => {
  item.fullCredit = "Educates on importance of daily consistent maintenance inhaler use regardless of symptoms";
  item.halfCredit = "Daily use educated";
});

updateItem('Week3_Patient_B_Wednesday', '4B.2', item => {
  item.fullCredit = "Reinforces maintenance vs rescue distinction (daily prevention vs immediate relief)";
  item.halfCredit = "Maintenance vs rescue reinforced";
});

updateItem('Week3_Patient_B_Wednesday', '4B.3', item => {
  item.fullCredit = "Discusses expected timeline of clinical benefit (gradual cumulative improvement over weeks)";
  item.halfCredit = "Timeline discussed";
});

updateItem('Week3_Patient_B_Wednesday', '4B.4', item => {
  item.fullCredit = "Recommends daily routine pairing adherence strategy (e.g., placing inhaler next to coffee maker)";
  item.halfCredit = "Daily routine strategy recommended";
});

updateItem('Week3_Patient_B_Wednesday', '4B.5', item => {
  item.fullCredit = "Instructs on complete Ellipta technique: slide cover until click, exhale fully away, inhale deeply, hold breath 5-10s";
  item.halfCredit = "Technique correction instructed";
});

updateItem('Week3_Patient_B_Wednesday', '4B.6', item => {
  item.fullCredit = "Suggests reminder system (phone alarm, daily routine, or calendar alert) for daily dosing";
  item.halfCredit = "Reminder system suggested";
});

updateItem('Week3_Patient_B_Wednesday', '4B.7', item => {
  item.fullCredit = "Suggests visual cue adherence strategy (placing inhaler on kitchen counter / near morning routine)";
  item.halfCredit = "Visual cue suggested";
});

updateItem('Week3_Patient_B_Wednesday', '4B.8', item => {
  item.fullCredit = "Addresses forgetfulness barrier with concrete behavioral adherence strategies";
  item.halfCredit = "Behavioral strategies addressed";
});

updateItem('Week3_Patient_B_Wednesday', '4B.9', item => {
  item.fullCredit = "Addresses unrealistic symptom improvement expectations with reassurance and guidance";
  item.halfCredit = "Reassurance provided";
});

updateItem('Week3_Patient_B_Wednesday', '4B.10', item => {
  item.fullCredit = "Plans reassessment of medication adherence at next follow-up encounter";
  item.halfCredit = "Adherence reassessment planned";
});

updateItem('Week3_Patient_B_Wednesday', '4B.11', item => {
  item.fullCredit = "Plans re-evaluation of inhaler technique at follow-up visit to ensure retention";
  item.halfCredit = "Technique re-check planned";
});

updateItem('Week3_Patient_B_Wednesday', '4B.12', item => {
  item.fullCredit = "Confirms prescription affordability resolution ($20 copay confirmed) in care plan";
  item.halfCredit = "Affordability confirmed";
});

updateItem('Week3_Patient_B_Wednesday', '4B.13', item => {
  item.fullCredit = "Frames adherence and technique optimization as essential prerequisite to any future therapy escalation";
  item.halfCredit = "Prerequisite to escalation framed";
});

updateItem('Week3_Patient_B_Wednesday', '4C.1', item => {
  item.fullCredit = "Reviews COPD disease progression and importance of daily maintenance therapy";
  item.halfCredit = "COPD reviewed";
});

updateItem('Week3_Patient_B_Wednesday', '4C.2', item => {
  item.fullCredit = "Reviews purpose of maintenance dual bronchodilator therapy with patient";
  item.halfCredit = "Maintenance purpose reviewed";
});

updateItem('Week3_Patient_B_Wednesday', '4C.3', item => {
  item.fullCredit = "Reviews expected symptom improvement timeline and encourages patience with daily therapy";
  item.halfCredit = "Timeline reviewed";
});

updateItem('Week3_Patient_B_Wednesday', '4C.4', item => {
  item.fullCredit = "Reviews exacerbation prevention as key treatment goal of maintenance therapy";
  item.halfCredit = "Exacerbation prevention reviewed";
});

updateItem('Week3_Patient_B_Wednesday', '4C.5', item => {
  item.fullCredit = "Provides step-by-step Ellipta review: slide cover until click, exhale away, steady deep breath, hold breath 5-10s";
  item.halfCredit = "Ellipta steps reviewed";
});

updateItem('Week3_Patient_B_Wednesday', '4C.6', item => {
  item.fullCredit = "Contrasts maintenance vs rescue inhaler purposes and mechanisms with patient";
  item.halfCredit = "Inhaler purposes contrasted";
});

updateItem('Week3_Patient_B_Wednesday', '4C.7', item => {
  item.fullCredit = "Instructs patient not to exhale/blow into mouthpiece and to exhale away before inhalation";
  item.halfCredit = "Exhale away instructed";
});

updateItem('Week3_Patient_B_Wednesday', '4C.8', item => {
  item.fullCredit = "Documents concrete behavioral adherence strategies (routine pairing, visual cue, reminder alarm)";
  item.halfCredit = "Behavioral strategies documented";
});

updateItem('Week3_Patient_B_Wednesday', '4C.9', item => {
  item.fullCredit = "Reinforces continued smoking cessation and praises sustained tobacco abstinence";
  item.halfCredit = "Smoking cessation reinforced";
});

updateItem('Week3_Patient_B_Wednesday', '4D.1', item => {
  item.fullCredit = "Reinforces continued lifelong tobacco abstinence in care plan";
  item.halfCredit = "Abstinence reinforced";
});

updateItem('Week3_Patient_B_Wednesday', '4D.2', item => {
  item.fullCredit = "Provides congratulatory reinforcement for sustained 5-year smoking cessation";
  item.halfCredit = "Congratulations on quitting";
});

updateItem('Week3_Patient_B_Wednesday', '4D.3', item => {
  item.fullCredit = "Confirms smoking cessation pharmacotherapy is not indicated given stable abstinence";
  item.halfCredit = "No cessation drugs needed";
});

updateItem('Week3_Patient_B_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan for chronic lung disease / age >=65";
  item.halfCredit = "Pneumococcal vaccine recommended";
});

updateItem('Week3_Patient_B_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends RSV vaccination in Plan for adult >=60 with chronic lung disease";
  item.halfCredit = "RSV vaccine recommended";
});

updateItem('Week3_Patient_B_Wednesday', '4E.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan per routine 10-year adult schedule";
  item.halfCredit = "Tdap recommended";
});

updateItem('Week3_Patient_B_Wednesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza and COVID-19 vaccination status are up to date";
  item.halfCredit = "Flu/COVID status confirmed";
});

updateItem('Week3_Patient_B_Wednesday', '4E.5', item => {
  item.fullCredit = "Frames immunization recommendations as actionable plan items";
  item.halfCredit = "Vaccines actionable";
});

updateItem('Week3_Patient_B_Wednesday', '4E.6', item => {
  item.fullCredit = "Links immunization to COPD diagnosis and age-related risk reduction";
  item.halfCredit = "Vaccines linked to COPD";
});

updateItem('Week3_Patient_B_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans monitoring of dyspnea and overall COPD symptom control at follow-up";
  item.halfCredit = "Monitors dyspnea";
});

updateItem('Week3_Patient_B_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans monitoring of exertional dyspnea (stairs, groceries, walking)";
  item.halfCredit = "Monitors exertional dyspnea";
});

updateItem('Week3_Patient_B_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans monitoring of functional activity tolerance and daily endurance";
  item.halfCredit = "Monitors activity tolerance";
});

updateItem('Week3_Patient_B_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans monitoring of rescue albuterol use frequency (target reduction toward occasional PRN)";
  item.halfCredit = "Monitors rescue use";
});

updateItem('Week3_Patient_B_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans monitoring for COPD exacerbations and urgent care visits";
  item.halfCredit = "Monitors exacerbations";
});

updateItem('Week3_Patient_B_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans monitoring of daily maintenance medication adherence";
  item.halfCredit = "Monitors adherence";
});

updateItem('Week3_Patient_B_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans re-evaluation and verification of inhaler technique at follow-up";
  item.halfCredit = "Monitors technique";
});

updateItem('Week3_Patient_B_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans monitoring of preventive care and vaccine completion";
  item.halfCredit = "Monitors vaccine completion";
});

updateItem('Week3_Patient_B_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe (e.g., 4–8 weeks or ~1–3 months)";
  item.halfCredit = "Follow-up timeframe specified";
});

updateItem('Week3_Patient_B_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans reassessment of medication adherence at follow-up";
  item.halfCredit = "Adherence reassessment planned";
});

updateItem('Week3_Patient_B_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans reassessment of symptom burden and CAT score at follow-up";
  item.halfCredit = "Symptom reassessment planned";
});

updateItem('Week3_Patient_B_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans reassessment of symptoms, activity tolerance, and inhaler technique at follow-up";
  item.halfCredit = "Comprehensive reassessment planned";
});

updateItem('Week3_Patient_B_Wednesday', '4G.5', item => {
  item.fullCredit = "Plans evaluation of therapy escalation contingent on adherence and technique optimization";
  item.halfCredit = "Contingent escalation planned";
});

updateItem('Week3_Patient_B_Wednesday', '5A.1', item => {
  item.fullCredit = "SOAP sections present with clearly structured assessment (whether narrative, problem list, or inquiry header)";
  item.halfCredit = "SOAP sections present";
});

updateItem('Week3_Patient_B_Wednesday', '5A.3', item => {
  item.fullCredit = "Plan logically maps to assessed problems (maintaining LABA/LAMA, technique correction, adherence routine, follow-up)";
  item.halfCredit = "Plan maps to problems";
});

updateItem('Week3_Patient_B_Wednesday', '5A.4', item => {
  item.fullCredit = "Note clearly groups and addresses COPD management, adherence/technique optimization, and preventive care";
  item.halfCredit = "Content grouped logically";
});

updateItem('Week3_Patient_B_Wednesday', '5C.1', item => {
  item.fullCredit = "Uses professional clinical terminology (bronchodilator, maintenance therapy, technique, GOLD staging, exacerbation)";
  item.halfCredit = "Clinical terminology used";
});

updateItem('Week3_Patient_B_Wednesday', '5C.2', item => {
  item.fullCredit = "Assessment provides grounded clinical reasoning evaluating symptom response, adherence, and technique (narrative or inquiry format)";
  item.halfCredit = "Clinical reasoning present";
});

updateItem('Week3_Patient_B_Wednesday', '5C.3', item => {
  item.fullCredit = "Plan provides actionable details including specific adherence routine, technique teach-back, and follow-up timing";
  item.halfCredit = "Actionable plan provided";
});


// ==========================================
// BOB JENKINS THURSDAY (56 DEDUCTED ITEMS)
// ==========================================

updateItem('Week3_Patient_B_Thursday', '1D.10', item => {
  item.fullCredit = "Documents medication affordability and access ($20 copay, filled reliably, no financial concerns) at this visit";
  item.halfCredit = "Affordability noted";
});

updateItem('Week3_Patient_B_Thursday', '1E.18', item => {
  item.fullCredit = "Documents Tdap status (overdue >10 years or unverified), or notes immunization review indicated";
  item.halfCredit = "Vaccine status noted";
});

updateItem('Week3_Patient_B_Thursday', '1F.1', item => {
  item.fullCredit = "ROS confirms patient denies cravings or desire to restart smoking (or notes stable 5-year abstinence)";
  item.halfCredit = "Non-smoker confirmed";
});

updateItem('Week3_Patient_B_Thursday', '1F.2', item => {
  item.fullCredit = "ROS confirms absence of prescription affordability concerns at this visit ($20 copay sustainable)";
  item.halfCredit = "Affordability confirmed";
});

updateItem('Week3_Patient_B_Thursday', '1F.3', item => {
  item.fullCredit = "ROS confirms absence of difficulty obtaining or refilling medications";
  item.halfCredit = "Refills obtained reliably";
});

updateItem('Week3_Patient_B_Thursday', '1F.7', item => {
  item.fullCredit = "ROS confirms absence of new medication adverse effects (no palpitations, tremor, urinary retention, thrush)";
  item.halfCredit = "Denies adverse effects";
});

updateItem('Week3_Patient_B_Thursday', '2C.2', item => {
  item.fullCredit = "Classifies FEV1 (1.8 L / 60-61% pred) as GOLD Grade 2 moderate airflow obstruction";
  item.halfCredit = "Grade 2 obstruction noted";
});

updateItem('Week3_Patient_B_Thursday', '2C.4', item => {
  item.fullCredit = "Identifies elevated blood eosinophils (310 cells/µL, meeting/exceeding >=300 cells/µL threshold) favoring ICS escalation";
  item.halfCredit = "Elevated eosinophils noted";
});

updateItem('Week3_Patient_B_Thursday', '3A.10', item => {
  item.fullCredit = "Cites GOLD guideline rationale (GOLD 2026, GOLD report, or GOLD recommendations) for eosinophil-guided escalation";
  item.halfCredit = "Guideline rationale cited";
});

updateItem('Week3_Patient_B_Thursday', '3A.13', item => {
  item.fullCredit = "Confirms daily adherence (coffee mug routine) and verifies correct inhaler technique, ruling out implementation failure";
  item.halfCredit = "Adherence and technique verified";
});

updateItem('Week3_Patient_B_Thursday', '3B.2', item => {
  item.fullCredit = "Links elevated eosinophils (310 cells/µL, >=300 threshold) and recurrent exacerbations to single-inhaler triple therapy (Trelegy Ellipta)";
  item.halfCredit = "Eosinophils linked to triple therapy";
});

updateItem('Week3_Patient_B_Thursday', '3B.4', item => {
  item.fullCredit = "Cites GOLD 2026 guidelines as basis for eosinophil-guided ICS escalation in patients with recurrent exacerbations";
  item.halfCredit = "Guideline basis cited";
});

updateItem('Week3_Patient_B_Thursday', '3B.5', item => {
  item.fullCredit = "Explains ICS addition reduces exacerbation frequency and airway inflammation in patients with eosinophils >=300 cells/µL";
  item.halfCredit = "ICS mechanism explained";
});

updateItem('Week3_Patient_B_Thursday', '3C.1', item => {
  item.fullCredit = "Documents inhaler technique status as verified/mastered and ruling out administration error as cause of exacerbations";
  item.halfCredit = "Technique verified";
});

updateItem('Week3_Patient_B_Thursday', '3C.7', item => {
  item.fullCredit = "Recommends continuing the established coffee-mug morning adherence routine with new therapy";
  item.halfCredit = "Coffee-mug routine continued";
});

updateItem('Week3_Patient_B_Thursday', '3D.1', item => {
  item.fullCredit = "Identifies former tobacco use / stable 5-year abstinence as a managed issue in Assessment";
  item.halfCredit = "Smoking status noted";
});

updateItem('Week3_Patient_B_Thursday', '3D.3', item => {
  item.fullCredit = "States continued smoking cessation is the most effective intervention for slowing COPD lung decline";
  item.halfCredit = "Cessation benefit stated";
});

updateItem('Week3_Patient_B_Thursday', '3D.4', item => {
  item.fullCredit = "States continued tobacco abstinence reduces future respiratory complications and mortality";
  item.halfCredit = "Abstinence benefits stated";
});

updateItem('Week3_Patient_B_Thursday', '3D.5', item => {
  item.fullCredit = "Includes reinforcement of continued smoking abstinence in care plan";
  item.halfCredit = "Abstinence reinforced";
});

updateItem('Week3_Patient_B_Thursday', '3D.6', item => {
  item.fullCredit = "Confirms patient denies cravings or desire to restart smoking in assessment";
  item.halfCredit = "Denies cravings confirmed";
});

updateItem('Week3_Patient_B_Thursday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care and immunization gaps as a clinical problem in Assessment or Plan";
  item.halfCredit = "Vaccines noted";
});

updateItem('Week3_Patient_B_Thursday', '3E.4', item => {
  item.fullCredit = "Identifies Tdap booster overdue status (>10 years) in Assessment or Plan";
  item.halfCredit = "Tdap overdue noted";
});

updateItem('Week3_Patient_B_Thursday', '3E.7', item => {
  item.fullCredit = "States preventive care and vaccine optimization remains appropriate and actionable for chronic lung disease";
  item.halfCredit = "Vaccine optimization stated";
});

updateItem('Week3_Patient_B_Thursday', '3E.8', item => {
  item.fullCredit = "Cites GOLD 2026 guideline support for respiratory vaccinations in COPD patients";
  item.halfCredit = "Guideline support cited";
});

updateItem('Week3_Patient_B_Thursday', '4A.1', item => {
  item.fullCredit = "Escalates to single-inhaler triple therapy: Trelegy Ellipta (fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg 1 inhalation daily)";
  item.halfCredit = "Triple therapy recommended";
});

updateItem('Week3_Patient_B_Thursday', '4A.4', item => {
  item.fullCredit = "Establishes target for reducing rescue albuterol use frequency (toward occasional PRN use)";
  item.halfCredit = "Target rescue reduction noted";
});

updateItem('Week3_Patient_B_Thursday', '4A.5', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA for rescue therapy";
  item.halfCredit = "Continues rescue inhaler";
});

updateItem('Week3_Patient_B_Thursday', '4A.6', item => {
  item.fullCredit = "Specifies albuterol PRN regimen (2 puffs q4-6h PRN as needed for acute symptoms)";
  item.halfCredit = "Albuterol PRN regimen specified";
});

updateItem('Week3_Patient_B_Thursday', '4A.8', item => {
  item.fullCredit = "Plans review and verification of inhaler technique for new Trelegy Ellipta device";
  item.halfCredit = "Reviews inhaler technique";
});

updateItem('Week3_Patient_B_Thursday', '4A.11', item => {
  item.fullCredit = "Discusses expected clinical benefits of triple therapy (symptom control, reduced exacerbation frequency)";
  item.halfCredit = "Expected benefits discussed";
});

updateItem('Week3_Patient_B_Thursday', '4A.12', item => {
  item.fullCredit = "Discusses quality-of-life and functional improvement goals with triple therapy";
  item.halfCredit = "Functional goals discussed";
});

updateItem('Week3_Patient_B_Thursday', '4B.1', item => {
  item.fullCredit = "Provides or reviews written COPD action plan with symptom zones (green, yellow, red)";
  item.halfCredit = "Action plan provided";
});

updateItem('Week3_Patient_B_Thursday', '4B.2', item => {
  item.fullCredit = "Educates on early recognition of worsening symptoms (increased sputum volume/purulence, increased dyspnea)";
  item.halfCredit = "Early symptom recognition educated";
});

updateItem('Week3_Patient_B_Thursday', '4B.4', item => {
  item.fullCredit = "Discusses infection prevention via respiratory vaccinations (flu, COVID, pneumococcal, RSV)";
  item.halfCredit = "Vaccines discussed";
});

updateItem('Week3_Patient_B_Thursday', '4B.5', item => {
  item.fullCredit = "Discusses infection avoidance strategies (hand hygiene, avoiding sick contacts, prompt care)";
  item.halfCredit = "Infection avoidance discussed";
});

updateItem('Week3_Patient_B_Thursday', '4C.1', item => {
  item.fullCredit = "Counsels on rinsing mouth with water and spitting after Trelegy inhalation to prevent oral candidiasis (thrush)";
  item.halfCredit = "Mouth rinsing counseled";
});

updateItem('Week3_Patient_B_Thursday', '4C.3', item => {
  item.fullCredit = "Encourages patient to continue established daily morning coffee-mug maintenance routine";
  item.halfCredit = "Coffee mug routine encouraged";
});

updateItem('Week3_Patient_B_Thursday', '4D.1', item => {
  item.fullCredit = "Congratulates patient and provides positive reinforcement for sustained 5-year smoking cessation";
  item.halfCredit = "Congratulations on quitting";
});

updateItem('Week3_Patient_B_Thursday', '4D.2', item => {
  item.fullCredit = "Encourages lifelong tobacco abstinence in care plan";
  item.halfCredit = "Lifelong abstinence encouraged";
});

updateItem('Week3_Patient_B_Thursday', '4D.3', item => {
  item.fullCredit = "Links continued abstinence to slowed COPD lung function decline and reduced mortality";
  item.halfCredit = "Abstinence benefits linked";
});

updateItem('Week3_Patient_B_Thursday', '4E.2', item => {
  item.fullCredit = "Plans monitoring of dyspnea and shortness of breath symptoms at follow-up";
  item.halfCredit = "Monitors dyspnea";
});

updateItem('Week3_Patient_B_Thursday', '4E.3', item => {
  item.fullCredit = "Plans monitoring of physical activity tolerance, walking distance, and daily functioning";
  item.halfCredit = "Monitors activity tolerance";
});

updateItem('Week3_Patient_B_Thursday', '4E.4', item => {
  item.fullCredit = "Plans monitoring of rescue inhaler use frequency (target reduction toward occasional PRN)";
  item.halfCredit = "Monitors rescue use";
});

updateItem('Week3_Patient_B_Thursday', '4E.6', item => {
  item.fullCredit = "Plans monitoring of Trelegy Ellipta medication adherence";
  item.halfCredit = "Monitors adherence";
});

updateItem('Week3_Patient_B_Thursday', '4E.7', item => {
  item.fullCredit = "Plans monitoring and re-evaluation of Trelegy Ellipta inhaler technique";
  item.halfCredit = "Monitors technique";
});

updateItem('Week3_Patient_B_Thursday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan for chronic lung disease / age >=65";
  item.halfCredit = "Pneumococcal vaccine recommended";
});

updateItem('Week3_Patient_B_Thursday', '4F.2', item => {
  item.fullCredit = "Recommends RSV vaccination in Plan for adult >=60 with chronic lung disease";
  item.halfCredit = "RSV vaccine recommended";
});

updateItem('Week3_Patient_B_Thursday', '4F.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan per routine 10-year adult schedule";
  item.halfCredit = "Tdap recommended";
});

updateItem('Week3_Patient_B_Thursday', '4F.4', item => {
  item.fullCredit = "Plans review and updating of official immunization registry records";
  item.halfCredit = "Vaccine records review planned";
});

updateItem('Week3_Patient_B_Thursday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe (e.g., 4–8 weeks, 1–3 months, or routine outpatient follow-up)";
  item.halfCredit = "Follow-up timeframe specified";
});

updateItem('Week3_Patient_B_Thursday', '4G.5', item => {
  item.fullCredit = "Plans evaluation of Trelegy adherence and technique at follow-up visit";
  item.halfCredit = "Adherence/technique follow-up planned";
});

updateItem('Week3_Patient_B_Thursday', '4G.6', item => {
  item.fullCredit = "Plans monitoring for ICS-related adverse effects (oral thrush, dysphonia, pneumonia symptoms)";
  item.halfCredit = "Monitors ICS adverse effects";
});

updateItem('Week3_Patient_B_Thursday', '4G.7', item => {
  item.fullCredit = "Notes continued longitudinal COPD management, symptom reassessment, and exacerbation tracking";
  item.halfCredit = "Longitudinal management noted";
});

updateItem('Week3_Patient_B_Thursday', '5B.3', item => {
  item.fullCredit = "Cites GOLD 2026 guideline rationale for eosinophil-guided triple therapy escalation";
  item.halfCredit = "Guideline rationale cited";
});

updateItem('Week3_Patient_B_Thursday', '5B.4', item => {
  item.fullCredit = "Plan contains actionable items with specific Trelegy Ellipta dosing, technique review, and follow-up timing";
  item.halfCredit = "Plan actionable";
});

updateItem('Week3_Patient_B_Thursday', '5C.2', item => {
  item.fullCredit = "Cites guideline rationale (GOLD 2026, eosinophils >=300 cells/µL threshold) supporting triple therapy escalation";
  item.halfCredit = "Guideline rationale cited";
});


// ==========================================
// STRICT NORMALIZATION TO 100.00 POINTS
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
