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

// ==================== SARAH TUESDAY ====================
updateItem('Week3_Patient_A_Tuesday', '1B.5', item => {
  item.fullCredit = "States allergy-season symptom worsening, links symptoms to seasonal triggers/colds, or notes seasonal allergies / loratadine use";
});
updateItem('Week3_Patient_A_Tuesday', '1B.15', item => {
  item.fullCredit = "States intermittent fluticasone nasal spray use vs prescribed daily use, notes inconsistent nasal spray adherence, or notes controller/inhaler nonadherence";
});
updateItem('Week3_Patient_A_Tuesday', '1C.3', item => {
  item.fullCredit = "Lists allergic rhinitis, seasonal allergies, or allergy history in PMH, problem list, or subjective history";
});
updateItem('Week3_Patient_A_Tuesday', '1D.7', item => {
  item.fullCredit = "States decreased activity due to asthma symptoms, or documents exertional limitation / avoids hiking";
});
updateItem('Week3_Patient_A_Tuesday', '1E.16', item => {
  item.fullCredit = "States fluticasone nasal spray use is intermittent / inconsistent in medication history or objective data, or documents general nonadherence";
});
updateItem('Week3_Patient_A_Tuesday', '1E.19', item => {
  item.fullCredit = "Lists cetirizine for allergic rhinitis / allergy management (or lists cetirizine on active medication list)";
});
updateItem('Week3_Patient_A_Tuesday', '1G.5', item => {
  item.fullCredit = "States patient goal of improved exercise tolerance, returning to activities/hiking, keeping up with children, or symptom control";
});
updateItem('Week3_Patient_A_Tuesday', '1G.8', item => {
  item.fullCredit = "States patient goal of improved symptom control, reduced rescue inhaler reliance, or improved quality of life";
});
updateItem('Week3_Patient_A_Tuesday', '2B.6', item => {
  item.fullCredit = "States bronchodilator reversibility (+14% to +16% / 280-290 mL) confirms or supports asthma diagnosis per GINA (or documents reversibility meeting GINA criteria)";
});
updateItem('Week3_Patient_A_Tuesday', '2C.3', item => {
  item.fullCredit = "Notes absence of prior baseline spirometry as a contextual gap, or evaluates current spirometry as new diagnostic baseline";
});
updateItem('Week3_Patient_A_Tuesday', '2C.4', item => {
  item.fullCredit = "Notes Type 2 biomarkers (FeNO, blood eosinophils) are unavailable / unmeasured, or notes diagnosis established via spirometric reversibility";
});
updateItem('Week3_Patient_A_Tuesday', '2C.5', item => {
  item.fullCredit = "Reports ACT score (16) and interprets as uncontrolled asthma / baseline for serial monitoring";
});
updateItem('Week3_Patient_A_Tuesday', '3A.2', item => {
  item.fullCredit = "States uncontrolled asthma (or poses/answers assessment question identifying uncontrolled status based on symptoms/SABA use)";
});
updateItem('Week3_Patient_A_Tuesday', '3A.3', item => {
  item.fullCredit = "Cites frequent daytime symptoms or albuterol use on 5-6 days/week indicating poor control";
});
updateItem('Week3_Patient_A_Tuesday', '3A.10', item => {
  item.fullCredit = "Links PFT bronchodilator reversibility to confirmed asthma diagnosis";
});
updateItem('Week3_Patient_A_Tuesday', '3A.11', item => {
  item.fullCredit = "Cites GINA guideline (GINA 2025 or GINA report) as clinical framework";
});
updateItem('Week3_Patient_A_Tuesday', '3A.12', item => {
  item.fullCredit = "States SABA-only treatment without ICS is associated with increased exacerbation risk and guideline discordance per GINA";
});
updateItem('Week3_Patient_A_Tuesday', '3A.13', item => {
  item.fullCredit = "States current SABA monotherapy is inconsistent with guideline-directed management / represents undertreatment";
});
updateItem('Week3_Patient_A_Tuesday', '3A.14', item => {
  item.fullCredit = "Recommends initiating low-dose ICS-formoterol MART (Track 1) or initiating daily ICS controller";
});
updateItem('Week3_Patient_A_Tuesday', '3A.15', item => {
  item.fullCredit = "References GINA Track 1, AIR, or SMART/MART therapy concepts (or initiation of daily controller before escalation)";
});
updateItem('Week3_Patient_A_Tuesday', '3A.16', item => {
  item.fullCredit = "Evaluates GINA symptom-control domains (reliever use, nighttime awakenings, daytime symptoms, activity limitation)";
});
updateItem('Week3_Patient_A_Tuesday', '3A.17', item => {
  item.fullCredit = "Notes persistent underlying airway inflammation in asthma regardless of symptom frequency";
});
updateItem('Week3_Patient_A_Tuesday', '3A.18', item => {
  item.fullCredit = "Notes SABA overuse / monotherapy is associated with increased exacerbation and mortality risk";
});
updateItem('Week3_Patient_A_Tuesday', '3A.19', item => {
  item.fullCredit = "Concludes FEV1/FVC and reversibility data confirm asthma diagnosis per GINA criteria";
});
updateItem('Week3_Patient_A_Tuesday', '3B.2', item => {
  item.fullCredit = "Distinguishes patient undertreatment (absence of prescribed controller) from true treatment failure";
});
updateItem('Week3_Patient_A_Tuesday', '3B.4', item => {
  item.fullCredit = "Frames lack of prior daily ICS as absence of guideline-directed anti-inflammatory therapy";
});
updateItem('Week3_Patient_A_Tuesday', '3B.5', item => {
  item.fullCredit = "Frames ensuring daily ICS controller adherence as initial step before considering future therapy escalation";
});
updateItem('Week3_Patient_A_Tuesday', '3B.6', item => {
  item.fullCredit = "Identifies lifelong SABA-only reliance as creating significant exacerbation risk";
});
updateItem('Week3_Patient_A_Tuesday', '3B.7', item => {
  item.fullCredit = "Cites GINA guideline supporting immediate daily ICS initiation after asthma diagnosis";
});
updateItem('Week3_Patient_A_Tuesday', '3B.8', item => {
  item.fullCredit = "Notes substantial exacerbation risk reduction achieved with ICS or ICS-formoterol therapy";
});
updateItem('Week3_Patient_A_Tuesday', '3B.9', item => {
  item.fullCredit = "Links SABA-only treatment to airway remodeling and worse long-term lung function";
});
updateItem('Week3_Patient_A_Tuesday', '3B.10', item => {
  item.fullCredit = "Confirms controller absence as a modifiable, first-line treatment gap";
});
updateItem('Week3_Patient_A_Tuesday', '3C.2', item => {
  item.fullCredit = "Assesses allergic rhinitis control status (uncontrolled/intermittent on inconsistent therapy)";
});
updateItem('Week3_Patient_A_Tuesday', '3C.6', item => {
  item.fullCredit = "Notes inconsistent fluticasone nasal spray use despite daily prescription";
});
updateItem('Week3_Patient_A_Tuesday', '3C.7', item => {
  item.fullCredit = "Notes patient was unaware intranasal corticosteroid should be used daily rather than PRN";
});
updateItem('Week3_Patient_A_Tuesday', '3C.8', item => {
  item.fullCredit = "Notes upper-lower airway link (one airway concept) between allergic rhinitis and asthma control";
});
updateItem('Week3_Patient_A_Tuesday', '3C.9', item => {
  item.fullCredit = "States optimizing rhinitis management improves both upper and lower airway outcomes";
});
updateItem('Week3_Patient_A_Tuesday', '3C.10', item => {
  item.fullCredit = "Notes postnasal drip / rhinitis symptoms as a potential asthma trigger";
});
updateItem('Week3_Patient_A_Tuesday', '3C.11', item => {
  item.fullCredit = "Concludes intranasal corticosteroid daily adherence must be optimized";
});
updateItem('Week3_Patient_A_Tuesday', '3C.12', item => {
  item.fullCredit = "Identifies allergic rhinitis as an asthma comorbidity in Assessment or note";
});
updateItem('Week3_Patient_A_Tuesday', '3D.2', item => {
  item.fullCredit = "Identifies patient knowledge deficit regarding controller vs reliever mechanism";
});
updateItem('Week3_Patient_A_Tuesday', '3D.3', item => {
  item.fullCredit = "Addresses ICS safety concerns or misunderstanding of daily preventive role vs emergency use";
});
updateItem('Week3_Patient_A_Tuesday', '3D.4', item => {
  item.fullCredit = "Notes lack of prior formal asthma education or written action plan";
});
updateItem('Week3_Patient_A_Tuesday', '3D.5', item => {
  item.fullCredit = "Identifies inhaler technique optimization and daily adherence as educational priorities";
});
updateItem('Week3_Patient_A_Tuesday', '3D.6', item => {
  item.fullCredit = "States education supports long-term disease control and self-management";
});
updateItem('Week3_Patient_A_Tuesday', '3D.7', item => {
  item.fullCredit = "Identifies written asthma action plan as an essential educational deliverable";
});
updateItem('Week3_Patient_A_Tuesday', '3D.8', item => {
  item.fullCredit = "Identifies inhaler technique education and demonstration as a required component";
});
updateItem('Week3_Patient_A_Tuesday', '3D.9', item => {
  item.fullCredit = "Identifies ICS safety and benefit counseling as a required educational component";
});
updateItem('Week3_Patient_A_Tuesday', '3E.1', item => {
  item.fullCredit = "Identifies immunization gaps as a clinical problem in Assessment";
});
updateItem('Week3_Patient_A_Tuesday', '3E.2', item => {
  item.fullCredit = "Identifies pneumococcal vaccination gap in Assessment";
});
updateItem('Week3_Patient_A_Tuesday', '3E.3', item => {
  item.fullCredit = "Identifies Tdap booster overdue status in Assessment";
});
updateItem('Week3_Patient_A_Tuesday', '3E.4', item => {
  item.fullCredit = "Discusses influenza vaccination status and relevance to asthma exacerbation prevention";
});
updateItem('Week3_Patient_A_Tuesday', '3E.6', item => {
  item.fullCredit = "Cites GINA recommendation for respiratory vaccinations in asthma";
});
updateItem('Week3_Patient_A_Tuesday', '3E.7', item => {
  item.fullCredit = "Recommends immunization record review or registry verification";
});
updateItem('Week3_Patient_A_Tuesday', '3E.8', item => {
  item.fullCredit = "Discusses pneumococcal and Tdap vaccine gaps in Assessment";
});
updateItem('Week3_Patient_A_Tuesday', '3E.9', item => {
  item.fullCredit = "Discusses preventive care optimization as appropriate and actionable";
});
updateItem('Week3_Patient_A_Tuesday', '3E.10', item => {
  item.fullCredit = "Links influenza vaccination to asthma exacerbation risk reduction";
});
updateItem('Week3_Patient_A_Tuesday', '3E.11', item => {
  item.fullCredit = "Notes referral pathway or pharmacy administration for immunization gaps";
});
updateItem('Week3_Patient_A_Tuesday', '4A.1', item => {
  item.fullCredit = "Initiates ICS-formoterol combination inhaler (Track 1 SMART) or daily ICS controller";
});
updateItem('Week3_Patient_A_Tuesday', '4A.2', item => {
  item.fullCredit = "Names specific agent and dose (e.g., budesonide-formoterol 160/4.5 mcg or daily ICS)";
});
updateItem('Week3_Patient_A_Tuesday', '4A.3', item => {
  item.fullCredit = "Specifies maintenance dosing (1 inhalation twice daily)";
});
updateItem('Week3_Patient_A_Tuesday', '4A.4', item => {
  item.fullCredit = "Specifies reliever dosing (1 inhalation as needed for symptoms)";
});
updateItem('Week3_Patient_A_Tuesday', '4A.5', item => {
  item.fullCredit = "Names SMART/MART regimen or dual maintenance and reliever therapy";
});
updateItem('Week3_Patient_A_Tuesday', '4A.6', item => {
  item.fullCredit = "Counsels to discontinue albuterol as primary monotherapy";
});
updateItem('Week3_Patient_A_Tuesday', '4A.7', item => {
  item.fullCredit = "Provides individualized education tailored to patient's triggers and lifestyle";
});
updateItem('Week3_Patient_A_Tuesday', '4A.9', item => {
  item.fullCredit = "Provides written asthma action plan in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4A.10', item => {
  item.fullCredit = "Includes inhaler technique review and demonstration in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4A.11', item => {
  item.fullCredit = "Addresses ICS safety concerns and therapeutic benefits in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4A.12', item => {
  item.fullCredit = "Discusses airway inflammation pathophysiology with patient";
});
updateItem('Week3_Patient_A_Tuesday', '4A.13', item => {
  item.fullCredit = "Discusses expected treatment goals (symptom relief, normal activities)";
});
updateItem('Week3_Patient_A_Tuesday', '4A.14', item => {
  item.fullCredit = "Discusses maximum daily inhalation limit for ICS-formoterol (up to 8-12 puffs/day)";
});
updateItem('Week3_Patient_A_Tuesday', '4B.1', item => {
  item.fullCredit = "Explicitly addresses continuation of cetirizine 10 mg PO daily in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4B.2', item => {
  item.fullCredit = "Explicitly addresses continuation of fluticasone nasal spray in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4B.3', item => {
  item.fullCredit = "Counsels on daily scheduled vs intermittent use of nasal spray and controller";
});
updateItem('Week3_Patient_A_Tuesday', '4B.4', item => {
  item.fullCredit = "Reviews proper nasal spray administration technique";
});
updateItem('Week3_Patient_A_Tuesday', '4B.5', item => {
  item.fullCredit = "Encourages allergen avoidance strategies in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4B.6', item => {
  item.fullCredit = "Links rhinitis management directly to improved asthma control";
});
updateItem('Week3_Patient_A_Tuesday', '4B.7', item => {
  item.fullCredit = "Plans allergic rhinitis symptom follow-up assessment";
});
updateItem('Week3_Patient_A_Tuesday', '4B.8', item => {
  item.fullCredit = "Discusses upper-lower airway concordance rationale";
});
updateItem('Week3_Patient_A_Tuesday', '4C.1', item => {
  item.fullCredit = "Discusses role of underlying airway inflammation with patient";
});
updateItem('Week3_Patient_A_Tuesday', '4C.2', item => {
  item.fullCredit = "Discusses daily ICS controller benefits with patient";
});
updateItem('Week3_Patient_A_Tuesday', '4C.3', item => {
  item.fullCredit = "Addresses steroid safety concerns with patient";
});
updateItem('Week3_Patient_A_Tuesday', '4C.4', item => {
  item.fullCredit = "Reviews expected treatment goals with patient";
});
updateItem('Week3_Patient_A_Tuesday', '4C.6', item => {
  item.fullCredit = "Reviews written asthma action plan with patient";
});
updateItem('Week3_Patient_A_Tuesday', '4C.7', item => {
  item.fullCredit = "Reviews proper inhaler technique at this visit";
});
updateItem('Week3_Patient_A_Tuesday', '4D.1', item => {
  item.fullCredit = "Plans serial ACT score monitoring at follow-up";
});
updateItem('Week3_Patient_A_Tuesday', '4D.2', item => {
  item.fullCredit = "Plans daytime symptom frequency monitoring";
});
updateItem('Week3_Patient_A_Tuesday', '4D.3', item => {
  item.fullCredit = "Plans nighttime awakening monitoring";
});
updateItem('Week3_Patient_A_Tuesday', '4D.4', item => {
  item.fullCredit = "Plans rescue inhaler use frequency monitoring";
});
updateItem('Week3_Patient_A_Tuesday', '4D.5', item => {
  item.fullCredit = "Plans asthma exacerbation monitoring";
});
updateItem('Week3_Patient_A_Tuesday', '4D.6', item => {
  item.fullCredit = "Plans inhaler technique assessment at follow-up";
});
updateItem('Week3_Patient_A_Tuesday', '4D.7', item => {
  item.fullCredit = "Plans medication adherence assessment as a monitoring parameter";
});
updateItem('Week3_Patient_A_Tuesday', '4D.8', item => {
  item.fullCredit = "Plans allergic rhinitis symptom monitoring";
});
updateItem('Week3_Patient_A_Tuesday', '4D.9', item => {
  item.fullCredit = "Plans monitoring of response to MART/ICS therapy";
});
updateItem('Week3_Patient_A_Tuesday', '4D.10', item => {
  item.fullCredit = "Plans periodic spirometry / lung function reassessment";
});
updateItem('Week3_Patient_A_Tuesday', '4E.1', item => {
  item.fullCredit = "Includes vaccination history review in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4E.2', item => {
  item.fullCredit = "Recommends pneumococcal vaccination in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4E.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza vaccination status / GINA relevance in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4F.1', item => {
  item.fullCredit = "Specifies follow-up timeframe in 2-6 weeks or 1-3 months";
});
updateItem('Week3_Patient_A_Tuesday', '4F.2', item => {
  item.fullCredit = "Plans reassessment of asthma control at follow-up";
});
updateItem('Week3_Patient_A_Tuesday', '4F.3', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at follow-up";
});
updateItem('Week3_Patient_A_Tuesday', '4F.4', item => {
  item.fullCredit = "Plans reassessment of adherence at follow-up";
});
updateItem('Week3_Patient_A_Tuesday', '4F.5', item => {
  item.fullCredit = "Plans reassessment of symptom burden / SMART response at follow-up";
});
updateItem('Week3_Patient_A_Tuesday', '5B.3', item => {
  item.fullCredit = "Includes numeric goals or thresholds (e.g., ACT >= 20, FEV1/FVC target)";
});
updateItem('Week3_Patient_A_Tuesday', '5B.4', item => {
  item.fullCredit = "Provides concrete actionable details including medication, dose, follow-up timing, and action plan";
});
updateItem('Week3_Patient_A_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 guideline rationale supporting asthma management recommendations";
});

// ==================== SARAH WEDNESDAY ====================
updateItem('Week3_Patient_A_Wednesday', '1B.2', item => {
  item.fullCredit = "Documents reduced wheezing or improved respiratory symptoms since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.3', item => {
  item.fullCredit = "Documents reduced shortness of breath since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.4', item => {
  item.fullCredit = "Documents improved exercise tolerance since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.5', item => {
  item.fullCredit = "Documents resumed outdoor activities or reduced activity limitation";
});
updateItem('Week3_Patient_A_Wednesday', '1B.6', item => {
  item.fullCredit = "Documents better able to keep up with children or daily activities";
});
updateItem('Week3_Patient_A_Wednesday', '1B.8', item => {
  item.fullCredit = "Documents reliever use frequency (1-2x weekly, or PRN with exercise)";
});
updateItem('Week3_Patient_A_Wednesday', '1B.9', item => {
  item.fullCredit = "Documents nighttime symptom frequency (rare / 0-1 monthly / denied)";
});
updateItem('Week3_Patient_A_Wednesday', '1B.10', item => {
  item.fullCredit = "Documents denial of ED visits since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.11', item => {
  item.fullCredit = "Documents denial of hospitalizations since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.12', item => {
  item.fullCredit = "Documents denial of exacerbations since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.13', item => {
  item.fullCredit = "Documents denial of oral corticosteroid use since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.15', item => {
  item.fullCredit = "Documents adherence estimate (taking twice daily, missed only 1-2 doses)";
});
updateItem('Week3_Patient_A_Wednesday', '1B.19', item => {
  item.fullCredit = "Confirms affordability or denies medication cost concerns";
});
updateItem('Week3_Patient_A_Wednesday', '1B.20', item => {
  item.fullCredit = "Documents denial of adverse effects from current therapy";
});
updateItem('Week3_Patient_A_Wednesday', '1C.5', item => {
  item.fullCredit = "Documents surgical history (denies major surgeries / no prior pulmonary surgeries)";
});
updateItem('Week3_Patient_A_Wednesday', '1C.11', item => {
  item.fullCredit = "Documents no additional past medical history beyond listed conditions";
});
updateItem('Week3_Patient_A_Wednesday', '1D.3', item => {
  item.fullCredit = "States teacher (or elementary school teacher)";
});
updateItem('Week3_Patient_A_Wednesday', '1D.6', item => {
  item.fullCredit = "Documents denial of recreational/illicit drug use";
});
updateItem('Week3_Patient_A_Wednesday', '1D.7', item => {
  item.fullCredit = "Documents improved physical activity / functional capacity since prior visit";
});
updateItem('Week3_Patient_A_Wednesday', '1F.1', item => {
  item.fullCredit = "Confirms denial of ED visits since therapy initiation";
});
updateItem('Week3_Patient_A_Wednesday', '1F.2', item => {
  item.fullCredit = "Confirms denial of hospitalizations since therapy initiation";
});
updateItem('Week3_Patient_A_Wednesday', '1F.3', item => {
  item.fullCredit = "Confirms denial of exacerbations since therapy initiation";
});
updateItem('Week3_Patient_A_Wednesday', '1F.4', item => {
  item.fullCredit = "Confirms denial of oral corticosteroid use since therapy initiation";
});
updateItem('Week3_Patient_A_Wednesday', '1F.5', item => {
  item.fullCredit = "Confirms denial of adverse medication effects";
});
updateItem('Week3_Patient_A_Wednesday', '1F.6', item => {
  item.fullCredit = "Confirms denial of medication affordability concerns";
});
updateItem('Week3_Patient_A_Wednesday', '1F.7', item => {
  item.fullCredit = "Documents improved physical activity / functional capacity";
});
updateItem('Week3_Patient_A_Wednesday', '2A.3', item => {
  item.fullCredit = "Documents HR 76 bpm (or 82-88 bpm)";
});
updateItem('Week3_Patient_A_Wednesday', '2B.3', item => {
  item.fullCredit = "Documents post-bronchodilator improvement +9% (or +14% to 15%)";
});
updateItem('Week3_Patient_A_Wednesday', '2B.4', item => {
  item.fullCredit = "Documents absolute FEV1 improvement 180 mL (or 280-375 mL)";
});
updateItem('Week3_Patient_A_Wednesday', '3A.1', item => {
  item.fullCredit = "Identifies asthma as a problem in Assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3A.2', item => {
  item.fullCredit = "Labels asthma control status as improved / well controlled / near goal (ACT 21)";
});
updateItem('Week3_Patient_A_Wednesday', '3A.4', item => {
  item.fullCredit = "References reduced daytime symptom frequency supporting assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3A.5', item => {
  item.fullCredit = "Cites reduced reliever use (1-2x/week) supporting assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3A.6', item => {
  item.fullCredit = "Cites reduced nighttime symptoms (0-1 monthly) supporting assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3A.7', item => {
  item.fullCredit = "References improved activity tolerance supporting assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3A.8', item => {
  item.fullCredit = "Mentions absence of exacerbations, OCS use, or ED visits";
});
updateItem('Week3_Patient_A_Wednesday', '3A.9', item => {
  item.fullCredit = "Cites GINA guideline as clinical assessment framework";
});
updateItem('Week3_Patient_A_Wednesday', '3A.10', item => {
  item.fullCredit = "Evaluates GINA control domains (symptoms, reliever use, exacerbations, adherence, technique)";
});
updateItem('Week3_Patient_A_Wednesday', '3A.11', item => {
  item.fullCredit = "Concludes therapy should NOT be stepped up, or that technique correction must precede escalation";
});
updateItem('Week3_Patient_A_Wednesday', '3A.12', item => {
  item.fullCredit = "Provides rationale for withholding escalation (good baseline control, technique errors explain exercise symptoms)";
});
updateItem('Week3_Patient_A_Wednesday', '3A.14', item => {
  item.fullCredit = "Cites good medication adherence as contributor to clinical improvement";
});
updateItem('Week3_Patient_A_Wednesday', '3A.15', item => {
  item.fullCredit = "Links allergic rhinitis improvement to asthma stability";
});
updateItem('Week3_Patient_A_Wednesday', '3A.16', item => {
  item.fullCredit = "States current asthma therapy (Symbicort SMART) is effective and well tolerated";
});
updateItem('Week3_Patient_A_Wednesday', '3B.1', item => {
  item.fullCredit = "Identifies inhaler technique errors / administration technique as a clinical problem";
});
updateItem('Week3_Patient_A_Wednesday', '3B.4', item => {
  item.fullCredit = "Links technique errors (not exhaling, lack of breath hold) to residual exertional symptoms";
});
updateItem('Week3_Patient_A_Wednesday', '3B.5', item => {
  item.fullCredit = "Classifies technique deficiency as an implementation issue rather than medication failure";
});
updateItem('Week3_Patient_A_Wednesday', '3B.6', item => {
  item.fullCredit = "States technique correction must precede any therapy escalation";
});
updateItem('Week3_Patient_A_Wednesday', '3B.7', item => {
  item.fullCredit = "Plans teach-back demonstration for inhaler technique correction";
});
updateItem('Week3_Patient_A_Wednesday', '3B.8', item => {
  item.fullCredit = "Plans technique reassessment at next follow-up visit";
});
updateItem('Week3_Patient_A_Wednesday', '3B.9', item => {
  item.fullCredit = "Cites GINA recommendation to check and correct inhaler technique before escalating";
});
updateItem('Week3_Patient_A_Wednesday', '3B.10', item => {
  item.fullCredit = "States incorrect technique reduces lung drug deposition and efficacy";
});
updateItem('Week3_Patient_A_Wednesday', '3C.4', item => {
  item.fullCredit = "States improved upper airway control contributes to asthma stability";
});
updateItem('Week3_Patient_A_Wednesday', '3C.6', item => {
  item.fullCredit = "States rhinitis therapy (cetirizine + fluticasone spray) is well tolerated";
});
updateItem('Week3_Patient_A_Wednesday', '3C.8', item => {
  item.fullCredit = "Cites intranasal corticosteroid as guideline-appropriate per GINA";
});
updateItem('Week3_Patient_A_Wednesday', '3C.9', item => {
  item.fullCredit = "Recommends continued allergen avoidance strategies";
});
updateItem('Week3_Patient_A_Wednesday', '3C.10', item => {
  item.fullCredit = "Reinforces daily adherence to fluticasone nasal spray";
});
updateItem('Week3_Patient_A_Wednesday', '3D.1', item => {
  item.fullCredit = "Identifies asthma self-management and technique optimization as an assessment focus";
});
updateItem('Week3_Patient_A_Wednesday', '3D.3', item => {
  item.fullCredit = "Educates on dual maintenance and reliever function of Symbicort SMART";
});
updateItem('Week3_Patient_A_Wednesday', '3D.6', item => {
  item.fullCredit = "Reinforces proper SMART inhaler dosing and technique";
});
updateItem('Week3_Patient_A_Wednesday', '3D.7', item => {
  item.fullCredit = "States continued education and adherence reinforcement is appropriate";
});
updateItem('Week3_Patient_A_Wednesday', '3D.8', item => {
  item.fullCredit = "Lists self-management targets: trigger avoidance, SMART review, adherence, symptom monitoring";
});
updateItem('Week3_Patient_A_Wednesday', '3D.9', item => {
  item.fullCredit = "Links self-management improvement to positive clinical outcomes";
});
updateItem('Week3_Patient_A_Wednesday', '3D.10', item => {
  item.fullCredit = "Cites GINA recommendations for guided self-management education";
});
updateItem('Week3_Patient_A_Wednesday', '3D.11', item => {
  item.fullCredit = "Encourages ongoing symptom monitoring as a self-management skill";
});
updateItem('Week3_Patient_A_Wednesday', '3D.12', item => {
  item.fullCredit = "Documents improved activity tolerance as an outcome marker";
});
updateItem('Week3_Patient_A_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a problem in Assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3E.6', item => {
  item.fullCredit = "Cites GINA recommendation for respiratory vaccinations in asthma";
});
updateItem('Week3_Patient_A_Wednesday', '3E.7', item => {
  item.fullCredit = "Recommends pneumococcal vaccination and Tdap booster";
});
updateItem('Week3_Patient_A_Wednesday', '3E.8', item => {
  item.fullCredit = "States preventive care optimization remains appropriate";
});
updateItem('Week3_Patient_A_Wednesday', '4A.1', item => {
  item.fullCredit = "Continues current SMART regimen (Symbicort: budesonide/formoterol 160/4.5 mcg) and reinforces inhaler technique";
});
updateItem('Week3_Patient_A_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies SMART maintenance dose: 1 inhalation twice daily";
});
updateItem('Week3_Patient_A_Wednesday', '4A.3', item => {
  item.fullCredit = "Specifies SMART reliever dose: 1 inhalation as needed for symptoms";
});
updateItem('Week3_Patient_A_Wednesday', '4A.4', item => {
  item.fullCredit = "Provides clinical justification for maintaining therapy (good control, technique error explains exercise symptoms)";
});
updateItem('Week3_Patient_A_Wednesday', '4A.5', item => {
  item.fullCredit = "Notes current therapy is effective once technique is optimized";
});
updateItem('Week3_Patient_A_Wednesday', '4A.6', item => {
  item.fullCredit = "Names guideline-supported SMART therapy regimen";
});
updateItem('Week3_Patient_A_Wednesday', '4A.7', item => {
  item.fullCredit = "Mentions step-down eligibility consideration after sustained control";
});
updateItem('Week3_Patient_A_Wednesday', '4A.8', item => {
  item.fullCredit = "Advises continuing daily ICS controller during viral respiratory illness";
});
updateItem('Week3_Patient_A_Wednesday', '4A.9', item => {
  item.fullCredit = "Reinforces written asthma action plan in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4A.10', item => {
  item.fullCredit = "Reinforces tobacco and vaping avoidance";
});
updateItem('Week3_Patient_A_Wednesday', '4A.11', item => {
  item.fullCredit = "Encourages regular physical activity with pre-exercise SMART dosing as needed";
});
updateItem('Week3_Patient_A_Wednesday', '4B.1', item => {
  item.fullCredit = "Plans detailed inhaler technique review";
});
updateItem('Week3_Patient_A_Wednesday', '4B.2', item => {
  item.fullCredit = "Plans direct demonstration of proper inhaler technique";
});
updateItem('Week3_Patient_A_Wednesday', '4B.3', item => {
  item.fullCredit = "Instructs to exhale fully away from inhaler before inhalation";
});
updateItem('Week3_Patient_A_Wednesday', '4B.4', item => {
  item.fullCredit = "Instructs to hold breath for 5-10 seconds after inhalation";
});
updateItem('Week3_Patient_A_Wednesday', '4B.5', item => {
  item.fullCredit = "Plans teach-back demonstration to confirm technique mastery";
});
updateItem('Week3_Patient_A_Wednesday', '4B.6', item => {
  item.fullCredit = "Plans to reassess inhaler technique at next visit";
});
updateItem('Week3_Patient_A_Wednesday', '4B.7', item => {
  item.fullCredit = "Utilizes device-specific technique checklist";
});
updateItem('Week3_Patient_A_Wednesday', '4C.1', item => {
  item.fullCredit = "Continues cetirizine 10 mg PO daily in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4C.2', item => {
  item.fullCredit = "Continues fluticasone propionate nasal spray in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4C.3', item => {
  item.fullCredit = "Reinforces adherence to daily intranasal corticosteroid spray";
});
updateItem('Week3_Patient_A_Wednesday', '4C.4', item => {
  item.fullCredit = "Reinforces allergen avoidance strategies";
});
updateItem('Week3_Patient_A_Wednesday', '4C.5', item => {
  item.fullCredit = "States no change required to current rhinitis therapy";
});
updateItem('Week3_Patient_A_Wednesday', '4C.6', item => {
  item.fullCredit = "Cites GINA alignment for intranasal corticosteroid in allergic rhinitis";
});
updateItem('Week3_Patient_A_Wednesday', '4C.7', item => {
  item.fullCredit = "Links rhinitis control to ongoing asthma stability";
});
updateItem('Week3_Patient_A_Wednesday', '4D.1', item => {
  item.fullCredit = "Reinforces controller vs reliever concepts in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4D.2', item => {
  item.fullCredit = "Reviews dual role of SMART therapy in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4D.3', item => {
  item.fullCredit = "Praises and reinforces adherence to daily maintenance dosing";
});
updateItem('Week3_Patient_A_Wednesday', '4D.4', item => {
  item.fullCredit = "Reviews environmental trigger avoidance strategies";
});
updateItem('Week3_Patient_A_Wednesday', '4D.5', item => {
  item.fullCredit = "Encourages ongoing symptom monitoring in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4D.6', item => {
  item.fullCredit = "Counsels on maximum daily Symbicort inhalation limit (up to 8-12 puffs/day)";
});
updateItem('Week3_Patient_A_Wednesday', '4D.7', item => {
  item.fullCredit = "Educates on red flag symptoms and when to seek urgent/emergency care";
});
updateItem('Week3_Patient_A_Wednesday', '4D.8', item => {
  item.fullCredit = "Reinforces utilization of written asthma action plan";
});
updateItem('Week3_Patient_A_Wednesday', '4D.9', item => {
  item.fullCredit = "Educates on importance of respiratory vaccines for asthma";
});
updateItem('Week3_Patient_A_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4E.5', item => {
  item.fullCredit = "Advises keeping respiratory vaccines current per GINA";
});
updateItem('Week3_Patient_A_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans monitoring of ACT score at follow-up";
});
updateItem('Week3_Patient_A_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans monitoring of daytime symptom frequency";
});
updateItem('Week3_Patient_A_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans monitoring of reliever use frequency";
});
updateItem('Week3_Patient_A_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans monitoring of nighttime awakenings";
});
updateItem('Week3_Patient_A_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans monitoring for asthma exacerbations";
});
updateItem('Week3_Patient_A_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans re-evaluation of inhaler technique at next visit";
});
updateItem('Week3_Patient_A_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans monitoring of medication adherence at follow-up";
});
updateItem('Week3_Patient_A_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans monitoring of allergic rhinitis symptom control";
});
updateItem('Week3_Patient_A_Wednesday', '4F.9', item => {
  item.fullCredit = "Plans periodic spirometry reassessment per GINA timeline";
});
updateItem('Week3_Patient_A_Wednesday', '4F.10', item => {
  item.fullCredit = "Flags reassessment of therapy escalation if control worsens";
});
updateItem('Week3_Patient_A_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe in 4-6 weeks or 1-3 months";
});
updateItem('Week3_Patient_A_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans reassessment of asthma control at next visit";
});
updateItem('Week3_Patient_A_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at next visit";
});
updateItem('Week3_Patient_A_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans reassessment of symptom burden at next visit";
});
updateItem('Week3_Patient_A_Wednesday', '4G.5', item => {
  item.fullCredit = "Plans evaluation of therapy modification if control worsens";
});
updateItem('Week3_Patient_A_Wednesday', '4G.6', item => {
  item.fullCredit = "Plans evaluation of step-down eligibility after sustained control";
});
updateItem('Week3_Patient_A_Wednesday', '5A.3', item => {
  item.fullCredit = "Assessment identifies prioritized clinical problems (asthma control, technique, rhinitis, vaccines)";
});
updateItem('Week3_Patient_A_Wednesday', '5A.4', item => {
  item.fullCredit = "Plan connects to assessed clinical problems (technique correction, maintenance therapy, rhinitis, vaccines)";
});
updateItem('Week3_Patient_A_Wednesday', '5B.1', item => {
  item.fullCredit = "Lists medications with drug, dose, route, and frequency";
});
updateItem('Week3_Patient_A_Wednesday', '5B.2', item => {
  item.fullCredit = "Reports clinical values with standard units (BMI 27.5 kg/m²)";
});
updateItem('Week3_Patient_A_Wednesday', '5B.3', item => {
  item.fullCredit = "States target criteria in Plan (ACT >= 20, normal lung function)";
});
updateItem('Week3_Patient_A_Wednesday', '5B.4', item => {
  item.fullCredit = "Provides concrete, actionable plan details for continuing SMART and correcting technique";
});
updateItem('Week3_Patient_A_Wednesday', '5C.2', item => {
  item.fullCredit = "Cites GINA guideline rationale for continuing SMART and optimizing technique";
});
updateItem('Week3_Patient_A_Wednesday', '5C.3', item => {
  item.fullCredit = "Recognizes established Symbicort SMART therapy and focuses on technique optimization";
});

// ==================== SARAH THURSDAY ====================
updateItem('Week3_Patient_A_Thursday', '1B.5', item => {
  item.fullCredit = "Documents denial of activity limitations in subjective history";
});
updateItem('Week3_Patient_A_Thursday', '1B.6', item => {
  item.fullCredit = "Documents return to hiking, outdoor activities, or unrestricted exercise";
});
updateItem('Week3_Patient_A_Thursday', '1B.7', item => {
  item.fullCredit = "Documents keeping up with children without difficulty";
});
updateItem('Week3_Patient_A_Thursday', '1B.15', item => {
  item.fullCredit = "Documents excellent / consistent adherence to daily Symbicort controller";
});
updateItem('Week3_Patient_A_Thursday', '1B.16', item => {
  item.fullCredit = "Documents inhaler technique was reviewed and confirmed correct";
});
updateItem('Week3_Patient_A_Thursday', '1B.17', item => {
  item.fullCredit = "Documents denial of medication affordability concerns or adverse effects";
});
updateItem('Week3_Patient_A_Thursday', '1C.2', item => {
  item.fullCredit = "Lists allergic rhinitis (or seasonal allergies / environmental allergies) in PMH";
});
updateItem('Week3_Patient_A_Thursday', '1C.3', item => {
  item.fullCredit = "Documents seasonal / environmental allergy triggers";
});
updateItem('Week3_Patient_A_Thursday', '1C.8', item => {
  item.fullCredit = "Documents allergic rhinitis is well controlled on current therapy";
});
updateItem('Week3_Patient_A_Thursday', '1D.1', item => {
  item.fullCredit = "Documents married status (or states lives with husband)";
});
updateItem('Week3_Patient_A_Thursday', '1D.2', item => {
  item.fullCredit = "States teacher (or elementary school teacher)";
});
updateItem('Week3_Patient_A_Thursday', '1D.7', item => {
  item.fullCredit = "Documents regular physical activity or exercise";
});
updateItem('Week3_Patient_A_Thursday', '1D.8', item => {
  item.fullCredit = "Documents return to hiking or outdoor physical activities";
});
updateItem('Week3_Patient_A_Thursday', '1D.9', item => {
  item.fullCredit = "States occupation as teacher (with or without classroom trigger context)";
});
updateItem('Week3_Patient_A_Thursday', '1D.10', item => {
  item.fullCredit = "Mentions two children in household without exertional limitation";
});
updateItem('Week3_Patient_A_Thursday', '1E.16', item => {
  item.fullCredit = "Lists rhinitis medications and notes well-controlled status";
});
updateItem('Week3_Patient_A_Thursday', '1F.2', item => {
  item.fullCredit = "Documents denial of adverse medication effects";
});
updateItem('Week3_Patient_A_Thursday', '1F.3', item => {
  item.fullCredit = "Documents denial of medication affordability concerns";
});
updateItem('Week3_Patient_A_Thursday', '1F.4', item => {
  item.fullCredit = "Documents allergic rhinitis stability and lack of worsening";
});
updateItem('Week3_Patient_A_Thursday', '1F.6', item => {
  item.fullCredit = "Documents denial of activity limitations";
});
updateItem('Week3_Patient_A_Thursday', '1G.1', item => {
  item.fullCredit = "Documents patient goal of maintaining asthma control";
});
updateItem('Week3_Patient_A_Thursday', '1G.2', item => {
  item.fullCredit = "Documents patient understanding of asthma self-management plan";
});
updateItem('Week3_Patient_A_Thursday', '1G.3', item => {
  item.fullCredit = "Documents patient goal of maintaining full physical activity";
});
updateItem('Week3_Patient_A_Thursday', '1G.5', item => {
  item.fullCredit = "Documents denial of affordability or adverse effect barriers";
});
updateItem('Week3_Patient_A_Thursday', '2B.6', item => {
  item.fullCredit = "Interprets PFT findings (FEV1 85% pred, FEV1/FVC 0.77) as consistent with well-controlled asthma";
});
updateItem('Week3_Patient_A_Thursday', '2C.3', item => {
  item.fullCredit = "Interprets FEV1/FVC 0.77 relative to 0.70 threshold confirming absence of obstruction";
});
updateItem('Week3_Patient_A_Thursday', '2C.4', item => {
  item.fullCredit = "Notes single-visit PFT cannot establish longitudinal trend, or evaluates PFT in clinical context";
});
updateItem('Week3_Patient_A_Thursday', '3A.1', item => {
  item.fullCredit = "States asthma is well controlled on SMART therapy (ACT 22) in Assessment";
});
updateItem('Week3_Patient_A_Thursday', '3A.3', item => {
  item.fullCredit = "Cites GINA guideline as clinical assessment framework";
});
updateItem('Week3_Patient_A_Thursday', '3A.4', item => {
  item.fullCredit = "Cites GINA daytime symptom criterion (<2 days/week)";
});
updateItem('Week3_Patient_A_Thursday', '3A.5', item => {
  item.fullCredit = "Cites GINA nighttime awakening criterion (none / rare)";
});
updateItem('Week3_Patient_A_Thursday', '3A.6', item => {
  item.fullCredit = "Cites GINA reliever use criterion (<2 days/week)";
});
updateItem('Week3_Patient_A_Thursday', '3A.7', item => {
  item.fullCredit = "Cites GINA activity limitation criterion (no limitation)";
});
updateItem('Week3_Patient_A_Thursday', '3A.9', item => {
  item.fullCredit = "States SMART therapy is effective for symptom control";
});
updateItem('Week3_Patient_A_Thursday', '3A.10', item => {
  item.fullCredit = "States current therapy is well tolerated without adverse effects";
});
updateItem('Week3_Patient_A_Thursday', '3A.12', item => {
  item.fullCredit = "Notes minimal symptom burden on current regimen (1-2x/week reliever)";
});
updateItem('Week3_Patient_A_Thursday', '3A.14', item => {
  item.fullCredit = "Assesses ongoing future exacerbation risk given 6-week-ago flare despite current good control";
});
updateItem('Week3_Patient_A_Thursday', '3A.15', item => {
  item.fullCredit = "Documents no activity limitation at current visit";
});
updateItem('Week3_Patient_A_Thursday', '3A.16', item => {
  item.fullCredit = "Interprets FEV1/FVC relative to obstruction threshold";
});
updateItem('Week3_Patient_A_Thursday', '3A.18', item => {
  item.fullCredit = "Explicitly concludes that therapy escalation is not indicated";
});
updateItem('Week3_Patient_A_Thursday', '3A.20', item => {
  item.fullCredit = "Praises and documents adherence as excellent";
});
updateItem('Week3_Patient_A_Thursday', '3A.21', item => {
  item.fullCredit = "Documents inhaler technique confirmation and mastery";
});
updateItem('Week3_Patient_A_Thursday', '3A.22', item => {
  item.fullCredit = "Confirms absence of affordability and adverse effect concerns";
});
updateItem('Week3_Patient_A_Thursday', '3C.1', item => {
  item.fullCredit = "Assesses allergic rhinitis control status as well controlled";
});
updateItem('Week3_Patient_A_Thursday', '3C.3', item => {
  item.fullCredit = "Confirms completeness of allergic rhinitis medication regimen";
});
updateItem('Week3_Patient_A_Thursday', '3C.4', item => {
  item.fullCredit = "Assesses rhinitis therapy as effective";
});
updateItem('Week3_Patient_A_Thursday', '3C.5', item => {
  item.fullCredit = "Links allergic rhinitis control to ongoing asthma stability";
});
updateItem('Week3_Patient_A_Thursday', '3C.6', item => {
  item.fullCredit = "Concludes no changes to rhinitis therapy are indicated";
});
updateItem('Week3_Patient_A_Thursday', '3C.7', item => {
  item.fullCredit = "Notes appropriateness of intranasal corticosteroid class";
});
updateItem('Week3_Patient_A_Thursday', '3C.8', item => {
  item.fullCredit = "Notes appropriateness of oral antihistamine class";
});
updateItem('Week3_Patient_A_Thursday', '3C.9', item => {
  item.fullCredit = "Specifies seasonal allergy etiology";
});
updateItem('Week3_Patient_A_Thursday', '3D.1', item => {
  item.fullCredit = "Identifies self-management and adherence as excellent";
});
updateItem('Week3_Patient_A_Thursday', '3D.2', item => {
  item.fullCredit = "Assesses inhaler technique improvement and mastery";
});
updateItem('Week3_Patient_A_Thursday', '3D.3', item => {
  item.fullCredit = "Assesses patient understanding of asthma self-management plan";
});
updateItem('Week3_Patient_A_Thursday', '3D.6', item => {
  item.fullCredit = "Recommends continued reinforcement of self-management behaviors";
});
updateItem('Week3_Patient_A_Thursday', '3D.7', item => {
  item.fullCredit = "Links absence of activity limitation to self-management success";
});
updateItem('Week3_Patient_A_Thursday', '3D.8', item => {
  item.fullCredit = "Documents return to hiking and outdoor physical activities";
});
updateItem('Week3_Patient_A_Thursday', '3D.9', item => {
  item.fullCredit = "Notes absence of affordability or adverse effect concerns in self-management";
});
updateItem('Week3_Patient_A_Thursday', '3E.5', item => {
  item.fullCredit = "Discusses pneumococcal vaccine relevance in chronic asthma";
});
updateItem('Week3_Patient_A_Thursday', '3E.6', item => {
  item.fullCredit = "Frames preventive care optimization as appropriate and indicated";
});
updateItem('Week3_Patient_A_Thursday', '3E.7', item => {
  item.fullCredit = "Frames immunization gaps as actionable plan orders";
});
updateItem('Week3_Patient_A_Thursday', '4A.5', item => {
  item.fullCredit = "Explicitly states therapy should not be escalated at this visit";
});
updateItem('Week3_Patient_A_Thursday', '4A.9', item => {
  item.fullCredit = "Includes inhaler technique reinforcement in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4B.1', item => {
  item.fullCredit = "Includes written asthma action plan review in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4B.2', item => {
  item.fullCredit = "Educates on early recognition of worsening symptoms";
});
updateItem('Week3_Patient_A_Thursday', '4B.3', item => {
  item.fullCredit = "Discusses viral illness management strategies";
});
updateItem('Week3_Patient_A_Thursday', '4B.4', item => {
  item.fullCredit = "Provides guidance on prompt medical evaluation for flares";
});
updateItem('Week3_Patient_A_Thursday', '4B.7', item => {
  item.fullCredit = "Reviews environmental trigger avoidance in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4C.1', item => {
  item.fullCredit = "Continues cetirizine and fluticasone propionate nasal spray in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4C.2', item => {
  item.fullCredit = "Addresses rhinitis action plan if seasonal symptoms worsen";
});
updateItem('Week3_Patient_A_Thursday', '4C.3', item => {
  item.fullCredit = "Reviews allergen avoidance measures in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4C.4', item => {
  item.fullCredit = "Confirms appropriateness of continuing current rhinitis regimen";
});
updateItem('Week3_Patient_A_Thursday', '4C.5', item => {
  item.fullCredit = "Retains fluticasone nasal spray dosing (1-2 sprays daily)";
});
updateItem('Week3_Patient_A_Thursday', '4C.6', item => {
  item.fullCredit = "Links continued rhinitis management to sustained asthma control";
});
updateItem('Week3_Patient_A_Thursday', '4D.1', item => {
  item.fullCredit = "Reinforces SMART therapy principles and education in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4D.2', item => {
  item.fullCredit = "States reinforcement and education plan for daily adherence";
});
updateItem('Week3_Patient_A_Thursday', '4D.3', item => {
  item.fullCredit = "Includes trigger avoidance education in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4D.4', item => {
  item.fullCredit = "Reinforces proper inhaler technique in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4D.6', item => {
  item.fullCredit = "Reinforces written asthma action plan use";
});
updateItem('Week3_Patient_A_Thursday', '4D.7', item => {
  item.fullCredit = "Discusses viral illness management strategies";
});
updateItem('Week3_Patient_A_Thursday', '4D.8', item => {
  item.fullCredit = "Reinforces early recognition of worsening symptoms";
});
updateItem('Week3_Patient_A_Thursday', '4E.1', item => {
  item.fullCredit = "Lists ACT score as a monitoring parameter in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4E.2', item => {
  item.fullCredit = "Lists daytime symptom frequency as a monitoring parameter";
});
updateItem('Week3_Patient_A_Thursday', '4E.3', item => {
  item.fullCredit = "Lists reliever inhaler use frequency as a monitoring parameter";
});
updateItem('Week3_Patient_A_Thursday', '4E.4', item => {
  item.fullCredit = "Lists nighttime awakenings as a monitoring parameter";
});
updateItem('Week3_Patient_A_Thursday', '4E.6', item => {
  item.fullCredit = "Frames medication adherence as a monitoring parameter";
});
updateItem('Week3_Patient_A_Thursday', '4E.7', item => {
  item.fullCredit = "Frames inhaler technique as a monitoring parameter";
});
updateItem('Week3_Patient_A_Thursday', '4E.8', item => {
  item.fullCredit = "Lists allergic rhinitis symptom control as a monitoring parameter";
});
updateItem('Week3_Patient_A_Thursday', '4E.9', item => {
  item.fullCredit = "Plans periodic spirometry / PEF monitoring at future visits";
});
updateItem('Week3_Patient_A_Thursday', '4E.10', item => {
  item.fullCredit = "References GINA assess-adjust-review framework";
});
updateItem('Week3_Patient_A_Thursday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4F.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4F.4', item => {
  item.fullCredit = "Recommends verification of immunization records";
});
updateItem('Week3_Patient_A_Thursday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up interval in 4-6 weeks or 3-6 months";
});
updateItem('Week3_Patient_A_Thursday', '4G.2', item => {
  item.fullCredit = "Plans reassessment of asthma control at follow-up";
});
updateItem('Week3_Patient_A_Thursday', '4G.4', item => {
  item.fullCredit = "Plans continued longitudinal monitoring of asthma control";
});
updateItem('Week3_Patient_A_Thursday', '4G.5', item => {
  item.fullCredit = "Plans evaluation of therapy modification if control worsens";
});
updateItem('Week3_Patient_A_Thursday', '4G.6', item => {
  item.fullCredit = "Plans repeat pulmonary function testing at future visits";
});
updateItem('Week3_Patient_A_Thursday', '4G.7', item => {
  item.fullCredit = "Plans review of adherence and inhaler technique at follow-up";
});
updateItem('Week3_Patient_A_Thursday', '5A.3', item => {
  item.fullCredit = "Assessment identifies prioritized active problems (asthma control, rhinitis, vaccines)";
});
updateItem('Week3_Patient_A_Thursday', '5B.2', item => {
  item.fullCredit = "Reports PFT values with units and compares to GINA criteria";
});
updateItem('Week3_Patient_A_Thursday', '5B.3', item => {
  item.fullCredit = "Includes structured monitoring parameters in Plan";
});
updateItem('Week3_Patient_A_Thursday', '5B.4', item => {
  item.fullCredit = "Provides concrete, actionable plan details for continuing SMART regimen";
});
updateItem('Week3_Patient_A_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 guideline rationale in Assessment and Plan";
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
console.log('Successfully updated Sarah Thompson comprehensive rubrics and normalized points!');
