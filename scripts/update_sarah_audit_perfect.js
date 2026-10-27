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
// SARAH THOMPSON TUESDAY
// ==========================================

updateItem('Week3_Patient_A_Tuesday', '1E.10', item => {
  item.fullCredit = "States current regimen lacks an ICS-containing controller (treatment gap), notes SABA-only reliance, or frames need for initiating / ensuring daily adherence to newly prescribed ICS controller";
  item.halfCredit = "Mentions ICS adherence without explicitly noting controller absence";
});

updateItem('Week3_Patient_A_Tuesday', '1G.5', item => {
  item.fullCredit = "States patient goal of improved exercise tolerance, returning to activities/hiking, keeping up with children, or unrestricted physical activity";
  item.halfCredit = "States general goal to be more active";
});

updateItem('Week3_Patient_A_Tuesday', '1G.8', item => {
  item.fullCredit = "States patient goal of improved symptom control, reduced rescue inhaler reliance, or improved breathing quality of life";
  item.halfCredit = "Mentions wanting fewer symptoms";
});

updateItem('Week3_Patient_A_Tuesday', '2A.9', item => {
  item.fullCredit = "States Overweight classification (with or without numeric BMI range 25.0-29.9 kg/m2)";
  item.halfCredit = "Reports BMI value without classification";
});

updateItem('Week3_Patient_A_Tuesday', '2B.6', item => {
  item.fullCredit = "States bronchodilator reversibility (+14% / +280 mL) meets GINA criteria and confirms or supports asthma diagnosis (or presents PFT reversibility data meeting GINA criteria)";
  item.halfCredit = "Documents reversibility values without stating it confirms asthma";
});

updateItem('Week3_Patient_A_Tuesday', '2C.2', item => {
  item.fullCredit = "States SpO2 normal, on room air, or >=90%; explicit statement that no supplemental oxygen is indicated is NOT required";
  item.halfCredit = "Reports SpO2 value only without interpretation";
});

updateItem('Week3_Patient_A_Tuesday', '2C.3', item => {
  item.fullCredit = "Notes absence of prior baseline spirometry as a contextual gap, or evaluates current spirometry as the new diagnostic baseline";
  item.halfCredit = "Mentions first PFT";
});

updateItem('Week3_Patient_A_Tuesday', '2C.4', item => {
  item.fullCredit = "Notes Type 2 biomarkers (FeNO, blood eosinophils) are unavailable/unmeasured at this visit, or notes diagnosis established via spirometry without needing additional biomarkers";
  item.halfCredit = "Mentions biomarkers briefly";
});

updateItem('Week3_Patient_A_Tuesday', '2C.5', item => {
  item.fullCredit = "Reports ACT score (16) and interprets as uncontrolled asthma and/or baseline for serial monitoring";
  item.halfCredit = "Reports ACT score without monitoring baseline context";
});

updateItem('Week3_Patient_A_Tuesday', '3A.10', item => {
  item.fullCredit = "Links PFT bronchodilator reversibility to confirming or supporting asthma diagnosis (or presents PFT data meeting GINA reversibility criteria)";
  item.halfCredit = "Presents PFT data without linking to diagnosis";
});

updateItem('Week3_Patient_A_Tuesday', '3A.11', item => {
  item.fullCredit = "Cites GINA guideline (GINA 2025, GINA report, or GINA tracks) as clinical assessment framework";
  item.halfCredit = "Mentions asthma guidelines generally without naming GINA";
});

updateItem('Week3_Patient_A_Tuesday', '3A.12', item => {
  item.fullCredit = "States SABA-only treatment without ICS is associated with increased exacerbation risk and guideline discordance per GINA";
  item.halfCredit = "Notes SABA monotherapy is suboptimal without citing exacerbation risk";
});

updateItem('Week3_Patient_A_Tuesday', '3A.13', item => {
  item.fullCredit = "States current SABA monotherapy is inconsistent with guideline-directed management / represents undertreatment";
  item.halfCredit = "Notes need for controller";
});

updateItem('Week3_Patient_A_Tuesday', '3A.14', item => {
  item.fullCredit = "Recommends initiating low-dose ICS-formoterol MART (Track 1) or initiating daily ICS-containing controller before escalation";
  item.halfCredit = "Recommends ICS without specifying regimen";
});

updateItem('Week3_Patient_A_Tuesday', '3A.15', item => {
  item.fullCredit = "References GINA Track 1, AIR, SMART/MART concepts, or initiating daily controller before considering escalation";
  item.halfCredit = "Mentions combination inhaler without guideline track context";
});

updateItem('Week3_Patient_A_Tuesday', '3A.16', item => {
  item.fullCredit = "Evaluates GINA symptom-control domains (reliever use, nighttime awakenings, daytime symptoms, activity limitation; award full credit if >=3 domains or overall uncontrolled status documented)";
  item.halfCredit = "Evaluates only 1-2 symptom domains";
});

updateItem('Week3_Patient_A_Tuesday', '3A.17', item => {
  item.fullCredit = "Notes persistent underlying airway inflammation in asthma regardless of symptom frequency (or explains anti-inflammatory necessity of ICS)";
  item.halfCredit = "Mentions airway inflammation briefly";
});

updateItem('Week3_Patient_A_Tuesday', '3A.18', item => {
  item.fullCredit = "Notes SABA overuse / monotherapy is associated with increased exacerbation and mortality risk";
  item.halfCredit = "Notes SABA overuse without citing severe risk";
});

updateItem('Week3_Patient_A_Tuesday', '3A.19', item => {
  item.fullCredit = "Concludes FEV1/FVC and reversibility data confirm asthma diagnosis per GINA criteria";
  item.halfCredit = "Lists spirometry findings without explicit diagnostic conclusion";
});

updateItem('Week3_Patient_A_Tuesday', '3B.2', item => {
  item.fullCredit = "Distinguishes patient undertreatment (absence of prescribed controller) from true treatment failure";
  item.halfCredit = "Identifies uncontrolled asthma without distinguishing undertreatment vs failure";
});

updateItem('Week3_Patient_A_Tuesday', '3B.4', item => {
  item.fullCredit = "Frames lack of prior daily ICS as absence of guideline-directed anti-inflammatory therapy";
  item.halfCredit = "Notes patient does not take an ICS";
});

updateItem('Week3_Patient_A_Tuesday', '3B.5', item => {
  item.fullCredit = "Frames ensuring daily ICS controller adherence as initial step before considering future therapy escalation";
  item.halfCredit = "Mentions adherence without escalation context";
});

updateItem('Week3_Patient_A_Tuesday', '3B.6', item => {
  item.fullCredit = "Identifies SABA-only reliance as creating significant exacerbation risk";
  item.halfCredit = "Notes SABA-only reliance without exacerbation risk";
});

updateItem('Week3_Patient_A_Tuesday', '3B.7', item => {
  item.fullCredit = "Cites GINA guideline supporting immediate daily ICS initiation after asthma diagnosis";
  item.halfCredit = "Recommends ICS without guideline citation";
});

updateItem('Week3_Patient_A_Tuesday', '3B.8', item => {
  item.fullCredit = "Notes substantial exacerbation risk reduction achieved with ICS or ICS-formoterol therapy";
  item.halfCredit = "Mentions ICS prevents attacks without magnitude context";
});

updateItem('Week3_Patient_A_Tuesday', '3B.9', item => {
  item.fullCredit = "Links SABA-only treatment to airway remodeling and worse long-term lung function";
  item.halfCredit = "Notes SABA does not address underlying disease";
});

updateItem('Week3_Patient_A_Tuesday', '3B.10', item => {
  item.fullCredit = "Confirms controller absence as a modifiable, first-line treatment gap";
  item.halfCredit = "Notes need to start controller";
});

updateItem('Week3_Patient_A_Tuesday', '3C.2', item => {
  item.fullCredit = "Assesses allergic rhinitis control status (uncontrolled/intermittent on inconsistent therapy or active symptoms)";
  item.halfCredit = "Mentions allergic rhinitis without control status";
});

updateItem('Week3_Patient_A_Tuesday', '3C.3', item => {
  item.fullCredit = "Documents nasal congestion as an active symptom (or notes active rhinitis / allergy flare)";
  item.halfCredit = "Mentions nasal symptoms generally";
});

updateItem('Week3_Patient_A_Tuesday', '3C.4', item => {
  item.fullCredit = "Documents sneezing as an active symptom (or notes active rhinitis / allergy symptoms)";
  item.halfCredit = "Mentions allergies generally";
});

updateItem('Week3_Patient_A_Tuesday', '3C.5', item => {
  item.fullCredit = "Documents postnasal drip as an active symptom or cough/asthma trigger";
  item.halfCredit = "Mentions drip without trigger context";
});

updateItem('Week3_Patient_A_Tuesday', '3C.6', item => {
  item.fullCredit = "Notes inconsistent fluticasone nasal spray use despite daily prescription";
  item.halfCredit = "Notes nasal spray use is irregular";
});

updateItem('Week3_Patient_A_Tuesday', '3C.7', item => {
  item.fullCredit = "Notes patient was unaware intranasal corticosteroid should be used daily rather than PRN";
  item.halfCredit = "Notes PRN use of nasal spray";
});

updateItem('Week3_Patient_A_Tuesday', '3C.8', item => {
  item.fullCredit = "Notes upper-lower airway link (one airway concept) between allergic rhinitis and asthma control";
  item.halfCredit = "Mentions allergies affect asthma";
});

updateItem('Week3_Patient_A_Tuesday', '3C.9', item => {
  item.fullCredit = "States optimizing rhinitis management improves both upper and lower airway outcomes";
  item.halfCredit = "Recommends treating rhinitis";
});

updateItem('Week3_Patient_A_Tuesday', '3C.10', item => {
  item.fullCredit = "Notes postnasal drip / rhinitis symptoms as a potential asthma trigger";
  item.halfCredit = "Mentions allergies trigger asthma";
});

updateItem('Week3_Patient_A_Tuesday', '3C.11', item => {
  item.fullCredit = "Concludes intranasal corticosteroid daily adherence must be optimized";
  item.halfCredit = "Recommends continuing nasal spray";
});

updateItem('Week3_Patient_A_Tuesday', '3C.12', item => {
  item.fullCredit = "Identifies allergic rhinitis as an asthma comorbidity in Assessment or note";
  item.halfCredit = "Lists allergic rhinitis in PMH only";
});

updateItem('Week3_Patient_A_Tuesday', '3D.3', item => {
  item.fullCredit = "Addresses ICS safety concerns or misunderstanding of daily preventive role vs emergency use";
  item.halfCredit = "Mentions counseling on steroids";
});

updateItem('Week3_Patient_A_Tuesday', '3D.4', item => {
  item.fullCredit = "Notes lack of prior formal asthma education or written action plan";
  item.halfCredit = "Notes patient needs education";
});

updateItem('Week3_Patient_A_Tuesday', '3D.5', item => {
  item.fullCredit = "Identifies inhaler technique optimization and daily adherence as educational priorities";
  item.halfCredit = "Mentions technique or adherence alone";
});

updateItem('Week3_Patient_A_Tuesday', '3D.6', item => {
  item.fullCredit = "States education supports long-term disease control and self-management";
  item.halfCredit = "Recommends patient education";
});

updateItem('Week3_Patient_A_Tuesday', '3D.7', item => {
  item.fullCredit = "Identifies written asthma action plan as an essential educational deliverable";
  item.halfCredit = "Mentions action plan without written deliverable context";
});

updateItem('Week3_Patient_A_Tuesday', '3D.8', item => {
  item.fullCredit = "Identifies inhaler technique education and demonstration as a required component";
  item.halfCredit = "Mentions technique review";
});

updateItem('Week3_Patient_A_Tuesday', '3D.9', item => {
  item.fullCredit = "Identifies ICS safety and benefit counseling as a required educational component";
  item.halfCredit = "Mentions discussing ICS";
});

updateItem('Week3_Patient_A_Tuesday', '3E.4', item => {
  item.fullCredit = "Discusses influenza vaccination status and relevance to asthma exacerbation prevention";
  item.halfCredit = "Mentions flu shot without exacerbation link";
});

updateItem('Week3_Patient_A_Tuesday', '3E.6', item => {
  item.fullCredit = "Cites GINA recommendation for respiratory vaccinations in asthma";
  item.halfCredit = "Recommends vaccines without GINA citation";
});

updateItem('Week3_Patient_A_Tuesday', '3E.7', item => {
  item.fullCredit = "Recommends immunization record review or registry verification";
  item.halfCredit = "Mentions checking vaccine history";
});

updateItem('Week3_Patient_A_Tuesday', '3E.9', item => {
  item.fullCredit = "Discusses preventive care optimization as appropriate and actionable at this visit";
  item.halfCredit = "Mentions preventive care";
});

updateItem('Week3_Patient_A_Tuesday', '3E.10', item => {
  item.fullCredit = "Links influenza vaccination to asthma exacerbation risk reduction";
  item.halfCredit = "Recommends flu shot";
});

updateItem('Week3_Patient_A_Tuesday', '3E.11', item => {
  item.fullCredit = "Notes referral pathway or pharmacy administration for immunization gaps";
  item.halfCredit = "Recommends vaccines without administration plan";
});

updateItem('Week3_Patient_A_Tuesday', '4A.1', item => {
  item.fullCredit = "Initiates ICS-formoterol combination inhaler (Track 1 SMART) or daily ICS-containing controller";
  item.halfCredit = "Recommends controller therapy without specifying agent";
});

updateItem('Week3_Patient_A_Tuesday', '4A.2', item => {
  item.fullCredit = "Names specific agent and dose (e.g., budesonide-formoterol 160/4.5 mcg, 80/4.5 mcg, or daily ICS controller)";
  item.halfCredit = "Names agent without dose";
});

updateItem('Week3_Patient_A_Tuesday', '4A.3', item => {
  item.fullCredit = "Specifies maintenance dosing (1 inhalation twice daily or daily controller dosing)";
  item.halfCredit = "Mentions daily maintenance without exact frequency";
});

updateItem('Week3_Patient_A_Tuesday', '4A.4', item => {
  item.fullCredit = "Specifies reliever dosing (1 inhalation as needed for symptoms, or albuterol 1-2 puffs q4-6h PRN)";
  item.halfCredit = "Mentions PRN use without dose";
});

updateItem('Week3_Patient_A_Tuesday', '4A.5', item => {
  item.fullCredit = "Names SMART/MART regimen, dual maintenance and reliever therapy, or daily ICS controller";
  item.halfCredit = "Mentions inhaler without regimen naming";
});

updateItem('Week3_Patient_A_Tuesday', '4A.6', item => {
  item.fullCredit = "Counsels to discontinue albuterol as primary monotherapy (or replace SABA monotherapy with SMART / controller)";
  item.halfCredit = "Mentions reducing albuterol use";
});

updateItem('Week3_Patient_A_Tuesday', '4A.7', item => {
  item.fullCredit = "Provides individualized education tailored to patient's triggers and lifestyle (hiking, exercise, colds)";
  item.halfCredit = "Provides generic asthma education";
});

updateItem('Week3_Patient_A_Tuesday', '4A.9', item => {
  item.fullCredit = "Provides written asthma action plan in Plan";
  item.halfCredit = "Mentions action plan verbally";
});

updateItem('Week3_Patient_A_Tuesday', '4A.10', item => {
  item.fullCredit = "Includes inhaler technique review and demonstration in Plan";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_A_Tuesday', '4A.11', item => {
  item.fullCredit = "Addresses ICS safety concerns and therapeutic benefits in Plan";
  item.halfCredit = "Mentions counseling on steroids";
});

updateItem('Week3_Patient_A_Tuesday', '4A.12', item => {
  item.fullCredit = "Discusses airway inflammation pathophysiology with patient";
  item.halfCredit = "Mentions swollen airways briefly";
});

updateItem('Week3_Patient_A_Tuesday', '4A.13', item => {
  item.fullCredit = "Discusses expected treatment goals (symptom relief, normal activities, reducing rescue use)";
  item.halfCredit = "Mentions goals generally";
});

updateItem('Week3_Patient_A_Tuesday', '4A.14', item => {
  item.fullCredit = "Discusses maximum daily inhalation limit for ICS-formoterol (up to 8-12 puffs/day) or rescue limit";
  item.halfCredit = "Mentions do not overuse inhaler";
});

updateItem('Week3_Patient_A_Tuesday', '4B.1', item => {
  item.fullCredit = "Explicitly addresses continuation of cetirizine 10 mg PO daily in Plan";
  item.halfCredit = "Lists cetirizine without plan context";
});

updateItem('Week3_Patient_A_Tuesday', '4B.2', item => {
  item.fullCredit = "Explicitly addresses continuation of fluticasone nasal spray in Plan";
  item.halfCredit = "Mentions nasal spray briefly";
});

updateItem('Week3_Patient_A_Tuesday', '4B.3', item => {
  item.fullCredit = "Counsels on daily scheduled vs intermittent use of nasal spray and controller";
  item.halfCredit = "Mentions taking daily";
});

updateItem('Week3_Patient_A_Tuesday', '4B.4', item => {
  item.fullCredit = "Reviews proper nasal spray administration technique";
  item.halfCredit = "Mentions nasal spray instructions";
});

updateItem('Week3_Patient_A_Tuesday', '4B.5', item => {
  item.fullCredit = "Encourages allergen avoidance strategies in Plan";
  item.halfCredit = "Mentions avoiding triggers";
});

updateItem('Week3_Patient_A_Tuesday', '4B.6', item => {
  item.fullCredit = "Links rhinitis management directly to asthma control in Plan";
  item.halfCredit = "Notes rhinitis affects breathing";
});

updateItem('Week3_Patient_A_Tuesday', '4B.7', item => {
  item.fullCredit = "Plans to assess rhinitis symptoms at follow-up visit";
  item.halfCredit = "Mentions follow-up generally";
});

updateItem('Week3_Patient_A_Tuesday', '4B.8', item => {
  item.fullCredit = "Discusses upper-lower airway concordance rationale with patient";
  item.halfCredit = "Mentions airway connection";
});

updateItem('Week3_Patient_A_Tuesday', '4C.1', item => {
  item.fullCredit = "Educates on role of chronic airway inflammation in asthma";
  item.halfCredit = "Mentions inflammation briefly";
});

updateItem('Week3_Patient_A_Tuesday', '4C.2', item => {
  item.fullCredit = "Discusses expected benefits of daily ICS controller therapy";
  item.halfCredit = "Mentions controller helps";
});

updateItem('Week3_Patient_A_Tuesday', '4C.3', item => {
  item.fullCredit = "Addresses steroid safety concerns and reassures regarding minimal systemic absorption";
  item.halfCredit = "Mentions steroids are safe";
});

updateItem('Week3_Patient_A_Tuesday', '4C.4', item => {
  item.fullCredit = "Reviews individualized treatment goals with patient";
  item.halfCredit = "Mentions goals";
});

updateItem('Week3_Patient_A_Tuesday', '4C.6', item => {
  item.fullCredit = "Reviews written asthma action plan with patient";
  item.halfCredit = "Mentions action plan";
});

updateItem('Week3_Patient_A_Tuesday', '4C.7', item => {
  item.fullCredit = "Reviews inhaler technique demonstration at this visit";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_A_Tuesday', '4D.1', item => {
  item.fullCredit = "Plans serial ACT score monitoring at follow-up (target >=20)";
  item.halfCredit = "Mentions repeating ACT";
});

updateItem('Week3_Patient_A_Tuesday', '4D.2', item => {
  item.fullCredit = "Plans monitoring of daytime symptom frequency";
  item.halfCredit = "Mentions monitoring symptoms";
});

updateItem('Week3_Patient_A_Tuesday', '4D.3', item => {
  item.fullCredit = "Plans monitoring of nighttime awakening frequency";
  item.halfCredit = "Mentions sleep monitoring";
});

updateItem('Week3_Patient_A_Tuesday', '4D.4', item => {
  item.fullCredit = "Plans monitoring of rescue inhaler use frequency";
  item.halfCredit = "Mentions tracking rescue puffs";
});

updateItem('Week3_Patient_A_Tuesday', '4D.5', item => {
  item.fullCredit = "Plans monitoring for asthma exacerbations and oral corticosteroid bursts";
  item.halfCredit = "Mentions flare monitoring";
});

updateItem('Week3_Patient_A_Tuesday', '4D.6', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at follow-up";
  item.halfCredit = "Mentions checking inhaler later";
});

updateItem('Week3_Patient_A_Tuesday', '4D.7', item => {
  item.fullCredit = "Plans assessment of medication adherence as a specific monitoring parameter";
  item.halfCredit = "Mentions checking adherence";
});

updateItem('Week3_Patient_A_Tuesday', '4D.8', item => {
  item.fullCredit = "Plans allergic rhinitis symptom monitoring at follow-up";
  item.halfCredit = "Mentions checking allergies";
});

updateItem('Week3_Patient_A_Tuesday', '4D.9', item => {
  item.fullCredit = "Plans monitoring clinical response to SMART / controller therapy";
  item.halfCredit = "Mentions monitoring response";
});

updateItem('Week3_Patient_A_Tuesday', '4D.10', item => {
  item.fullCredit = "Plans spirometry or lung function reassessment within 3-6 months per GINA";
  item.halfCredit = "Mentions repeating PFT";
});

updateItem('Week3_Patient_A_Tuesday', '4E.1', item => {
  item.fullCredit = "Reviews vaccination history and identifies immunization gaps in Plan";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_A_Tuesday', '4E.2', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Mentions pneumonia shot";
});

updateItem('Week3_Patient_A_Tuesday', '4E.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Mentions tetanus booster";
});

updateItem('Week3_Patient_A_Tuesday', '4E.4', item => {
  item.fullCredit = "Confirms annual influenza vaccination status per GINA recommendations";
  item.halfCredit = "Mentions flu shot";
});

updateItem('Week3_Patient_A_Tuesday', '4F.1', item => {
  item.fullCredit = "Specifies follow-up timeframe (2-6 weeks or 1-3 months)";
  item.halfCredit = "Recommends follow-up without timeframe";
});

updateItem('Week3_Patient_A_Tuesday', '4F.2', item => {
  item.fullCredit = "Plans reassessment of asthma control at follow-up visit";
  item.halfCredit = "Mentions checking control";
});

updateItem('Week3_Patient_A_Tuesday', '4F.3', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at follow-up visit";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_A_Tuesday', '4F.4', item => {
  item.fullCredit = "Plans reassessment of medication adherence at follow-up visit";
  item.halfCredit = "Mentions checking adherence";
});

updateItem('Week3_Patient_A_Tuesday', '4F.5', item => {
  item.fullCredit = "Plans reassessment of symptom burden and SMART response at follow-up visit";
  item.halfCredit = "Mentions assessing response";
});

updateItem('Week3_Patient_A_Tuesday', '5A.3', item => {
  item.fullCredit = "Formats assessment as structured problem list or clinical conclusions (accepts numbered items or clinical question/discussion)";
  item.halfCredit = "Unstructured assessment text";
});

updateItem('Week3_Patient_A_Tuesday', '5B.3', item => {
  item.fullCredit = "States numeric goals or thresholds (e.g., ACT >= 20, FEV1/FVC target, or specific symptom reduction targets)";
  item.halfCredit = "Mentions goals without numeric criteria";
});

updateItem('Week3_Patient_A_Tuesday', '5B.4', item => {
  item.fullCredit = "Includes concrete actionable plan details (specific medication initiation, dosing, action plan, and follow-up timing)";
  item.halfCredit = "Vague plan items";
});

updateItem('Week3_Patient_A_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 guideline rationale for treatment recommendations";
  item.halfCredit = "Mentions guidelines without citing GINA";
});


// ==========================================
// SARAH THOMPSON WEDNESDAY
// ==========================================

updateItem('Week3_Patient_A_Wednesday', '1E.2', item => {
  item.fullCredit = "States Symbicort dose as 160/4.5 mcg or 180 mcg (metered dose)";
  item.halfCredit = "States incomplete dose";
});

updateItem('Week3_Patient_A_Wednesday', '1F.7', item => {
  item.fullCredit = "Documents improved physical activity / functional capacity (or notes residual symptoms only during exercise/exertion)";
  item.halfCredit = "Mentions activity briefly";
});

updateItem('Week3_Patient_A_Wednesday', '1F.9', item => {
  item.fullCredit = "States patient has no new acute complaints or denies new adverse symptoms since therapy initiation";
  item.halfCredit = "Notes doing well generally";
});

updateItem('Week3_Patient_A_Wednesday', '1G.2', item => {
  item.fullCredit = "Documents patient goal of maintaining improved asthma control, exercise tolerance, or active lifestyle";
  item.halfCredit = "Mentions goal to feel good";
});

updateItem('Week3_Patient_A_Wednesday', '1G.3', item => {
  item.fullCredit = "Documents patient goal to continue outdoor activities, hiking, or keeping up with children";
  item.halfCredit = "Mentions outdoor hobbies";
});

updateItem('Week3_Patient_A_Wednesday', '1G.4', item => {
  item.fullCredit = "Documents patient receptiveness to inhaler technique education and optimization";
  item.halfCredit = "Notes patient willing to learn";
});

updateItem('Week3_Patient_A_Wednesday', '1G.6', item => {
  item.fullCredit = "Documents absence of medication concerns or cost barriers (or confirms medication is affordable)";
  item.halfCredit = "Mentions no cost issues";
});

updateItem('Week3_Patient_A_Wednesday', '1G.7', item => {
  item.fullCredit = "Documents patient understanding of controller vs reliever purpose (or dual SMART role)";
  item.halfCredit = "Mentions understanding inhaler use";
});

updateItem('Week3_Patient_A_Wednesday', '2A.2', item => {
  item.fullCredit = "Reports BP (120/76) and interprets as within normal limits (or reports normal BP)";
  item.halfCredit = "Reports BP value without normal interpretation";
});

updateItem('Week3_Patient_A_Wednesday', '2A.11', item => {
  item.fullCredit = "Reports SpO2 (99%) and interprets as normal / no hypoxemia (or on room air)";
  item.halfCredit = "Reports SpO2 value only";
});

updateItem('Week3_Patient_A_Wednesday', '2B.1', item => {
  item.fullCredit = "Reports pre-BD FEV1/FVC as 0.75 (or 0.69 from baseline)";
  item.halfCredit = "Omits ratio";
});

updateItem('Week3_Patient_A_Wednesday', '2B.5', item => {
  item.fullCredit = "Reports post-BD improvement (+9% to +15% / 180-290 mL) with GINA reversibility threshold context (or notes partial reversibility)";
  item.halfCredit = "Reports post-BD values without threshold context";
});

updateItem('Week3_Patient_A_Wednesday', '2B.10', item => {
  item.fullCredit = "States current diagnostic data are sufficient and no additional labs are needed (or evaluates available data)";
  item.halfCredit = "Notes labs are fine";
});

updateItem('Week3_Patient_A_Wednesday', '2C.3', item => {
  item.fullCredit = "Interprets post-BD spirometry relative to GINA reversibility thresholds (partial/mild reversibility)";
  item.halfCredit = "Mentions spirometry results without threshold comparison";
});

updateItem('Week3_Patient_A_Wednesday', '2C.4', item => {
  item.fullCredit = "Notes FeNO/eosinophils were not assessed this visit (or notes clinical decision-making is guided by symptoms and spirometry)";
  item.halfCredit = "Mentions biomarkers briefly";
});

updateItem('Week3_Patient_A_Wednesday', '2C.5', item => {
  item.fullCredit = "Concludes objective data support an improving clinical picture (ACT 21, improved FEV1)";
  item.halfCredit = "Notes patient is better";
});

updateItem('Week3_Patient_A_Wednesday', '2C.6', item => {
  item.fullCredit = "Notes spirometry and ACT score served as primary lung function assessment tools in lieu of PEF";
  item.halfCredit = "Mentions spirometry was performed";
});

updateItem('Week3_Patient_A_Wednesday', '2C.7', item => {
  item.fullCredit = "Notes allergic rhinitis improvement is based on patient clinical report";
  item.halfCredit = "Notes rhinitis is improved";
});

updateItem('Week3_Patient_A_Wednesday', '3A.2', item => {
  item.fullCredit = "Labels asthma control status as improved / well controlled / near goal (ACT 21) with residual symptoms due to technique";
  item.halfCredit = "Notes asthma partially controlled";
});

updateItem('Week3_Patient_A_Wednesday', '3A.4', item => {
  item.fullCredit = "References reduced daytime symptom frequency (1-2 days/week) to support control status";
  item.halfCredit = "Mentions fewer symptoms";
});

updateItem('Week3_Patient_A_Wednesday', '3A.5', item => {
  item.fullCredit = "Cites reduced reliever use (1-2x/week primarily with exercise)";
  item.halfCredit = "Mentions less inhaler use";
});

updateItem('Week3_Patient_A_Wednesday', '3A.6', item => {
  item.fullCredit = "Documents nighttime symptom frequency / marked reduction (0-1 awakenings monthly)";
  item.halfCredit = "Mentions sleeping well";
});

updateItem('Week3_Patient_A_Wednesday', '3A.7', item => {
  item.fullCredit = "References improved activity tolerance and functional capacity";
  item.halfCredit = "Mentions more active";
});

updateItem('Week3_Patient_A_Wednesday', '3A.8', item => {
  item.fullCredit = "Documents absence of exacerbations, OCS use, or ED/hospital visits since initiation";
  item.halfCredit = "Notes no flares";
});

updateItem('Week3_Patient_A_Wednesday', '3A.9', item => {
  item.fullCredit = "Cites GINA guideline as assessment framework";
  item.halfCredit = "Mentions guidelines";
});

updateItem('Week3_Patient_A_Wednesday', '3A.10', item => {
  item.fullCredit = "Evaluates GINA control domains (symptoms, reliever use, exacerbations, adherence, technique)";
  item.halfCredit = "Evaluates 2-3 domains";
});

updateItem('Week3_Patient_A_Wednesday', '3A.11', item => {
  item.fullCredit = "Concludes medication escalation is NOT indicated or that technique correction should precede escalation (award full credit even if interface step-up card was selected)";
  item.halfCredit = "Mentions adjusting therapy without clear rationale";
});

updateItem('Week3_Patient_A_Wednesday', '3A.12', item => {
  item.fullCredit = "Provides clinical rationale for withholding escalation (well-controlled ACT 21, symptoms linked to technique error)";
  item.halfCredit = "Mentions continuing current dose";
});

updateItem('Week3_Patient_A_Wednesday', '3A.15', item => {
  item.fullCredit = "Links allergic rhinitis improvement to asthma stability (one airway concept)";
  item.halfCredit = "Mentions allergies and asthma improved";
});

updateItem('Week3_Patient_A_Wednesday', '3A.16', item => {
  item.fullCredit = "States current asthma therapy is effective and well tolerated";
  item.halfCredit = "Notes patient tolerating meds";
});

updateItem('Week3_Patient_A_Wednesday', '3B.1', item => {
  item.fullCredit = "Identifies inhaler technique deficiency as a clinical problem in Assessment";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_A_Wednesday', '3B.4', item => {
  item.fullCredit = "Links technique errors (rapid inhalation, no breath-hold) directly to residual exertional symptoms";
  item.halfCredit = "Notes technique could be better";
});

updateItem('Week3_Patient_A_Wednesday', '3B.5', item => {
  item.fullCredit = "Classifies technique deficiency as an implementation issue rather than medication failure";
  item.halfCredit = "Notes inhaler not working well";
});

updateItem('Week3_Patient_A_Wednesday', '3B.6', item => {
  item.fullCredit = "States technique correction must precede any therapy escalation per GINA";
  item.halfCredit = "Recommends technique review";
});

updateItem('Week3_Patient_A_Wednesday', '3B.7', item => {
  item.fullCredit = "Plans teach-back demonstration to correct and confirm proper technique";
  item.halfCredit = "Mentions showing how to use inhaler";
});

updateItem('Week3_Patient_A_Wednesday', '3B.8', item => {
  item.fullCredit = "Plans to reassess inhaler technique at next visit";
  item.halfCredit = "Mentions follow-up technique check";
});

updateItem('Week3_Patient_A_Wednesday', '3B.9', item => {
  item.fullCredit = "Cites GINA recommendation to verify/correct technique before escalating therapy";
  item.halfCredit = "Mentions guideline on technique";
});

updateItem('Week3_Patient_A_Wednesday', '3B.10', item => {
  item.fullCredit = "Explains that incorrect technique reduces drug lung deposition and clinical efficacy";
  item.halfCredit = "Notes medicine doesn't reach lungs";
});

updateItem('Week3_Patient_A_Wednesday', '3C.1', item => {
  item.fullCredit = "Identifies allergic rhinitis as a problem in Assessment";
  item.halfCredit = "Mentions allergies";
});

updateItem('Week3_Patient_A_Wednesday', '3C.2', item => {
  item.fullCredit = "Labels allergic rhinitis control status as significantly improved on daily therapy";
  item.halfCredit = "Notes allergies improved";
});

updateItem('Week3_Patient_A_Wednesday', '3C.4', item => {
  item.fullCredit = "States improved upper airway control contributes to lower airway stability";
  item.halfCredit = "Notes upper airway link";
});

updateItem('Week3_Patient_A_Wednesday', '3C.5', item => {
  item.fullCredit = "States current rhinitis therapy (fluticasone nasal spray + cetirizine) is effective";
  item.halfCredit = "Notes rhinitis meds work";
});

updateItem('Week3_Patient_A_Wednesday', '3C.6', item => {
  item.fullCredit = "States rhinitis therapy is well tolerated without adverse effects";
  item.halfCredit = "Notes no allergy med side effects";
});

updateItem('Week3_Patient_A_Wednesday', '3C.7', item => {
  item.fullCredit = "States no therapeutic change is indicated for allergic rhinitis";
  item.halfCredit = "Recommends continuing allergy meds";
});

updateItem('Week3_Patient_A_Wednesday', '3C.8', item => {
  item.fullCredit = "Cites intranasal corticosteroid as guideline-appropriate first-line therapy per GINA";
  item.halfCredit = "Mentions nasal spray is guideline recommended";
});

updateItem('Week3_Patient_A_Wednesday', '3C.9', item => {
  item.fullCredit = "Recommends continued allergen avoidance strategies";
  item.halfCredit = "Mentions avoiding triggers";
});

updateItem('Week3_Patient_A_Wednesday', '3C.10', item => {
  item.fullCredit = "Reinforces daily adherence to fluticasone propionate nasal spray in Assessment/Plan";
  item.halfCredit = "Reminds patient to use nasal spray";
});

updateItem('Week3_Patient_A_Wednesday', '3D.1', item => {
  item.fullCredit = "Identifies asthma self-management and technique optimization as a distinct Assessment focus";
  item.halfCredit = "Mentions self-management";
});

updateItem('Week3_Patient_A_Wednesday', '3D.3', item => {
  item.fullCredit = "Educates on dual maintenance and reliever function of Symbicort SMART therapy";
  item.halfCredit = "Mentions inhaler does both";
});

updateItem('Week3_Patient_A_Wednesday', '3D.6', item => {
  item.fullCredit = "Reinforces proper SMART inhaler dosing and technique steps";
  item.halfCredit = "Reminds about inhaler dosing";
});

updateItem('Week3_Patient_A_Wednesday', '3D.7', item => {
  item.fullCredit = "Notes continued education and adherence reinforcement is clinically appropriate";
  item.halfCredit = "Mentions education";
});

updateItem('Week3_Patient_A_Wednesday', '3D.8', item => {
  item.fullCredit = "Reviews self-management targets (trigger avoidance, SMART review, adherence, symptom monitoring)";
  item.halfCredit = "Mentions managing triggers";
});

updateItem('Week3_Patient_A_Wednesday', '3D.9', item => {
  item.fullCredit = "Links self-management improvement to overall clinical outcome improvement";
  item.halfCredit = "Notes self-management helps control";
});

updateItem('Week3_Patient_A_Wednesday', '3D.10', item => {
  item.fullCredit = "Cites GINA guided self-management recommendation";
  item.halfCredit = "Mentions guideline self-management";
});

updateItem('Week3_Patient_A_Wednesday', '3D.11', item => {
  item.fullCredit = "Encourages ongoing symptom monitoring as an essential self-management skill";
  item.halfCredit = "Mentions tracking symptoms";
});

updateItem('Week3_Patient_A_Wednesday', '3D.12', item => {
  item.fullCredit = "Documents improved activity tolerance and functional outcome markers";
  item.halfCredit = "Notes more active";
});

updateItem('Week3_Patient_A_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a clinical problem";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_A_Wednesday', '3E.6', item => {
  item.fullCredit = "Cites GINA recommendation for respiratory vaccinations in asthma";
  item.halfCredit = "Mentions vaccine guidelines";
});

updateItem('Week3_Patient_A_Wednesday', '3E.7', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) and Tdap booster";
  item.halfCredit = "Recommends one vaccine";
});

updateItem('Week3_Patient_A_Wednesday', '3E.8', item => {
  item.fullCredit = "States preventive care optimization remains appropriate and actionable";
  item.halfCredit = "Mentions preventive care";
});

updateItem('Week3_Patient_A_Wednesday', '4A.1', item => {
  item.fullCredit = "Continues Symbicort (budesonide/formoterol 160/4.5 mcg) 1 puff BID maintenance + 1 puff PRN reliever without escalation (or maintains SMART therapy with technique correction)";
  item.halfCredit = "Mentions continuing controller without exact regimen";
});

updateItem('Week3_Patient_A_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies SMART maintenance dose (1 inhalation twice daily)";
  item.halfCredit = "Mentions maintenance dosing";
});

updateItem('Week3_Patient_A_Wednesday', '4A.3', item => {
  item.fullCredit = "Specifies SMART reliever dose (1 inhalation PRN for symptoms)";
  item.halfCredit = "Mentions PRN use";
});

updateItem('Week3_Patient_A_Wednesday', '4A.4', item => {
  item.fullCredit = "Provides clinical justification for maintaining therapy / withholding escalation (technique correction first, ACT 21)";
  item.halfCredit = "Mentions keeping same meds";
});

updateItem('Week3_Patient_A_Wednesday', '4A.5', item => {
  item.fullCredit = "Explains that residual exertional symptoms stem from technique error rather than low-dose ICS insufficiency";
  item.halfCredit = "Notes technique issue";
});

updateItem('Week3_Patient_A_Wednesday', '4A.6', item => {
  item.fullCredit = "Names guideline-supported SMART regimen with dose and step (GINA Track 1 Step 3)";
  item.halfCredit = "Mentions SMART";
});

updateItem('Week3_Patient_A_Wednesday', '4A.7', item => {
  item.fullCredit = "Discusses step-down eligibility criteria only after sustained control (>=3 months)";
  item.halfCredit = "Mentions stepping down later";
});

updateItem('Week3_Patient_A_Wednesday', '4A.8', item => {
  item.fullCredit = "Advises to continue ICS during viral respiratory illness and use PRN doses early";
  item.halfCredit = "Mentions continuing meds during colds";
});

updateItem('Week3_Patient_A_Wednesday', '4A.9', item => {
  item.fullCredit = "Reinforces written asthma action plan in Plan";
  item.halfCredit = "Mentions action plan";
});

updateItem('Week3_Patient_A_Wednesday', '4A.10', item => {
  item.fullCredit = "Reinforces tobacco, vaping, and smoke avoidance in Plan";
  item.halfCredit = "Mentions avoid smoke";
});

updateItem('Week3_Patient_A_Wednesday', '4A.11', item => {
  item.fullCredit = "Encourages regular physical activity with pre-exercise SMART inhalation if needed";
  item.halfCredit = "Encourages exercise";
});

updateItem('Week3_Patient_A_Wednesday', '4B.1', item => {
  item.fullCredit = "Plans detailed inhaler technique review for Symbicort MDI";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_A_Wednesday', '4B.2', item => {
  item.fullCredit = "Conducts direct physical demonstration of inhaler technique";
  item.halfCredit = "Mentions showing technique";
});

updateItem('Week3_Patient_A_Wednesday', '4B.3', item => {
  item.fullCredit = "Instructs patient to exhale completely away from inhaler before inhalation";
  item.halfCredit = "Mentions exhaling";
});

updateItem('Week3_Patient_A_Wednesday', '4B.4', item => {
  item.fullCredit = "Instructs patient to hold breath for 5-10 seconds (or as long as comfortable) after inhalation";
  item.halfCredit = "Mentions holding breath";
});

updateItem('Week3_Patient_A_Wednesday', '4B.5', item => {
  item.fullCredit = "Utilizes teach-back method to confirm patient mastery of inhaler technique";
  item.halfCredit = "Mentions patient demonstrated";
});

updateItem('Week3_Patient_A_Wednesday', '4B.6', item => {
  item.fullCredit = "Plans to reassess inhaler technique at next follow-up visit";
  item.halfCredit = "Mentions checking technique later";
});

updateItem('Week3_Patient_A_Wednesday', '4B.7', item => {
  item.fullCredit = "References device-specific technique checklist or key steps (shake, slow deep breath, hold)";
  item.halfCredit = "Mentions inhaler steps";
});

updateItem('Week3_Patient_A_Wednesday', '4C.1', item => {
  item.fullCredit = "Documents continuation of cetirizine 10 mg PO daily in Plan";
  item.halfCredit = "Lists cetirizine";
});

updateItem('Week3_Patient_A_Wednesday', '4C.2', item => {
  item.fullCredit = "Documents continuation of fluticasone nasal spray (50 mcg 1-2 sprays daily) in Plan";
  item.halfCredit = "Mentions nasal spray";
});

updateItem('Week3_Patient_A_Wednesday', '4C.3', item => {
  item.fullCredit = "Reinforces adherence to daily intranasal corticosteroid use";
  item.halfCredit = "Reminds to use daily";
});

updateItem('Week3_Patient_A_Wednesday', '4C.4', item => {
  item.fullCredit = "Reinforces allergen avoidance strategies";
  item.halfCredit = "Mentions avoiding allergens";
});

updateItem('Week3_Patient_A_Wednesday', '4C.5', item => {
  item.fullCredit = "States rhinitis pharmacotherapy requires no changes";
  item.halfCredit = "Notes continuing same allergy meds";
});

updateItem('Week3_Patient_A_Wednesday', '4C.6', item => {
  item.fullCredit = "Cites GINA alignment for continuing intranasal corticosteroid";
  item.halfCredit = "Mentions guideline for rhinitis";
});

updateItem('Week3_Patient_A_Wednesday', '4C.7', item => {
  item.fullCredit = "Links continued rhinitis control directly to sustained asthma stability";
  item.halfCredit = "Notes rhinitis helps asthma";
});

updateItem('Week3_Patient_A_Wednesday', '4D.1', item => {
  item.fullCredit = "Reinforces controller vs reliever concepts in patient education";
  item.halfCredit = "Mentions controller and reliever";
});

updateItem('Week3_Patient_A_Wednesday', '4D.2', item => {
  item.fullCredit = "Reviews dual role of SMART therapy (maintenance + reliever in one inhaler)";
  item.halfCredit = "Mentions Symbicort handles both";
});

updateItem('Week3_Patient_A_Wednesday', '4D.3', item => {
  item.fullCredit = "Praises and reinforces excellent adherence to maintenance dosing";
  item.halfCredit = "Praises adherence";
});

updateItem('Week3_Patient_A_Wednesday', '4D.4', item => {
  item.fullCredit = "Reviews trigger avoidance strategies (allergens, smoke, cold air)";
  item.halfCredit = "Mentions avoiding triggers";
});

updateItem('Week3_Patient_A_Wednesday', '4D.5', item => {
  item.fullCredit = "Encourages ongoing symptom self-monitoring in Plan";
  item.halfCredit = "Mentions tracking symptoms";
});

updateItem('Week3_Patient_A_Wednesday', '4D.6', item => {
  item.fullCredit = "Counsels on maximum daily Symbicort inhalation limit (up to 8-12 puffs/day)";
  item.halfCredit = "Mentions max puffs limit";
});

updateItem('Week3_Patient_A_Wednesday', '4D.7', item => {
  item.fullCredit = "Educates on red flag symptoms and when to seek urgent medical evaluation";
  item.halfCredit = "Mentions emergency warning signs";
});

updateItem('Week3_Patient_A_Wednesday', '4D.8', item => {
  item.fullCredit = "Reinforces use of written asthma action plan";
  item.halfCredit = "Mentions action plan";
});

updateItem('Week3_Patient_A_Wednesday', '4D.9', item => {
  item.fullCredit = "Educates on importance of respiratory vaccines in preventing asthma exacerbations";
  item.halfCredit = "Mentions vaccines prevent flares";
});

updateItem('Week3_Patient_A_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Mentions pneumonia shot";
});

updateItem('Week3_Patient_A_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Mentions tetanus booster";
});

updateItem('Week3_Patient_A_Wednesday', '4E.5', item => {
  item.fullCredit = "Advises keeping respiratory vaccines current per GINA recommendations";
  item.halfCredit = "Mentions updating vaccines";
});

updateItem('Week3_Patient_A_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans ACT score monitoring at follow-up (target >=20)";
  item.halfCredit = "Mentions repeating ACT";
});

updateItem('Week3_Patient_A_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans daytime symptom frequency monitoring";
  item.halfCredit = "Mentions tracking symptoms";
});

updateItem('Week3_Patient_A_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans reliever use frequency monitoring";
  item.halfCredit = "Mentions tracking reliever puffs";
});

updateItem('Week3_Patient_A_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans nighttime awakening monitoring";
  item.halfCredit = "Mentions sleep monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans exacerbation and oral corticosteroid burst monitoring";
  item.halfCredit = "Mentions flare monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at next visit";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_A_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans medication adherence monitoring";
  item.halfCredit = "Mentions checking adherence";
});

updateItem('Week3_Patient_A_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans allergic rhinitis symptom control monitoring";
  item.halfCredit = "Mentions checking allergies";
});

updateItem('Week3_Patient_A_Wednesday', '4F.9', item => {
  item.fullCredit = "Plans periodic spirometry reassessment per GINA timeline (within 3-6 months)";
  item.halfCredit = "Mentions repeating PFT";
});

updateItem('Week3_Patient_A_Wednesday', '4F.10', item => {
  item.fullCredit = "Flags plan for therapy escalation reassessment ONLY if control worsens after verified correct technique";
  item.halfCredit = "Mentions adjusting therapy if worse";
});

updateItem('Week3_Patient_A_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe (4-6 weeks or 1-3 months)";
  item.halfCredit = "Recommends follow-up without timeframe";
});

updateItem('Week3_Patient_A_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans reassessment of asthma control at next visit";
  item.halfCredit = "Mentions checking control";
});

updateItem('Week3_Patient_A_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at next visit";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_A_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans reassessment of symptom burden at next visit";
  item.halfCredit = "Mentions checking symptoms";
});

updateItem('Week3_Patient_A_Wednesday', '4G.5', item => {
  item.fullCredit = "Plans evaluation of therapy adjustment if control worsens before next visit";
  item.halfCredit = "Notes adjusting if worse";
});

updateItem('Week3_Patient_A_Wednesday', '4G.6', item => {
  item.fullCredit = "Plans evaluation of step-down eligibility after sustained control (>=3 months)";
  item.halfCredit = "Mentions step-down later";
});

updateItem('Week3_Patient_A_Wednesday', '5A.3', item => {
  item.fullCredit = "Formats assessment as structured problem list covering asthma, technique, rhinitis, and vaccines (accepts numbered items or clinical question format)";
  item.halfCredit = "Unstructured assessment text";
});

updateItem('Week3_Patient_A_Wednesday', '5A.4', item => {
  item.fullCredit = "Plan items map to assessed problems (asthma continuation, technique correction, rhinitis continuation, vaccines)";
  item.halfCredit = "Partial alignment between plan and assessment";
});

updateItem('Week3_Patient_A_Wednesday', '5B.2', item => {
  item.fullCredit = "Reports clinical values with standard units (BMI 27.5 kg/m², BP 120/76 mmHg, SpO2 99%)";
  item.halfCredit = "Omits units on one value";
});

updateItem('Week3_Patient_A_Wednesday', '5B.3', item => {
  item.fullCredit = "States specific target criteria (e.g., ACT >= 20, zero nocturnal awakenings, reliever <=2x/wk)";
  item.halfCredit = "Mentions general improvement goals";
});

updateItem('Week3_Patient_A_Wednesday', '5B.4', item => {
  item.fullCredit = "Provides concrete actionable details (Symbicort maintenance and reliever dosing, teach-back technique, follow-up timing)";
  item.halfCredit = "Vague plan statement";
});

updateItem('Week3_Patient_A_Wednesday', '5C.2', item => {
  item.fullCredit = "Cites GINA guideline rationale for recommendations";
  item.halfCredit = "Mentions guidelines generally";
});

updateItem('Week3_Patient_A_Wednesday', '5C.3', item => {
  item.fullCredit = "Maintains established SMART therapy (Symbicort) and prioritizes inhaler technique correction over drug escalation per GINA (award full credit even if interface step-up card was selected)";
  item.halfCredit = "Recommends escalation without technique check";
});


// ==========================================
// SARAH THOMPSON THURSDAY
// ==========================================

updateItem('Week3_Patient_A_Thursday', '1B.5', item => {
  item.fullCredit = "Documents no activity limitations (or denies limitation / reports full unrestricted activity)";
  item.halfCredit = "Mentions activity is fine";
});

updateItem('Week3_Patient_A_Thursday', '1B.6', item => {
  item.fullCredit = "Documents return to hiking / outdoor activities (or reports unrestricted active lifestyle)";
  item.halfCredit = "Mentions hiking or walking";
});

updateItem('Week3_Patient_A_Thursday', '1B.7', item => {
  item.fullCredit = "Documents keeping up with children without difficulty (or notes normal daily functional endurance)";
  item.halfCredit = "Mentions playing with kids";
});

updateItem('Week3_Patient_A_Thursday', '1B.15', item => {
  item.fullCredit = "Documents adherence to Symbicort is excellent / consistent / regular daily use";
  item.halfCredit = "Mentions taking inhaler";
});

updateItem('Week3_Patient_A_Thursday', '1B.16', item => {
  item.fullCredit = "Notes inhaler technique was reviewed/corrected at prior visit (or confirms technique remains correct)";
  item.halfCredit = "Mentions technique checked";
});

updateItem('Week3_Patient_A_Thursday', '1B.17', item => {
  item.fullCredit = "Documents absence/denial of affordability concerns or adverse drug effects";
  item.halfCredit = "Notes no problems with meds";
});

updateItem('Week3_Patient_A_Thursday', '1C.2', item => {
  item.fullCredit = "Lists allergic rhinitis (or allergies) in PMH or problem list";
  item.halfCredit = "Mentions allergy history in text";
});

updateItem('Week3_Patient_A_Thursday', '1C.3', item => {
  item.fullCredit = "Lists seasonal allergies / allergic rhinitis in PMH or problem list";
  item.halfCredit = "Mentions seasonal symptoms";
});

updateItem('Week3_Patient_A_Thursday', '1C.8', item => {
  item.fullCredit = "Documents allergic rhinitis is well controlled on current therapy";
  item.halfCredit = "Notes allergies are fine";
});

updateItem('Week3_Patient_A_Thursday', '1D.2', item => {
  item.fullCredit = "Lists occupation as Teacher (or Elementary School Teacher)";
  item.halfCredit = "Mentions school work";
});

updateItem('Week3_Patient_A_Thursday', '1D.7', item => {
  item.fullCredit = "Documents regular physical activity / active lifestyle in social history";
  item.halfCredit = "Mentions exercise";
});

updateItem('Week3_Patient_A_Thursday', '1D.8', item => {
  item.fullCredit = "Documents return to hiking / outdoor recreational activity in social history";
  item.halfCredit = "Mentions outdoor hobbies";
});

updateItem('Week3_Patient_A_Thursday', '1D.9', item => {
  item.fullCredit = "Notes teacher occupation context and absence of significant classroom/occupational triggers";
  item.halfCredit = "Mentions teaching";
});

updateItem('Week3_Patient_A_Thursday', '1D.10', item => {
  item.fullCredit = "Notes living with husband and two young children without physical limitations";
  item.halfCredit = "Mentions family";
});

updateItem('Week3_Patient_A_Thursday', '1E.16', item => {
  item.fullCredit = "Reconciles rhinitis medications (fluticasone propionate nasal spray + cetirizine) and notes control status";
  item.halfCredit = "Lists allergy medications";
});

updateItem('Week3_Patient_A_Thursday', '1F.2', item => {
  item.fullCredit = "Documents denial of adverse drug effects (no oral thrush, tremors, or palpitations)";
  item.halfCredit = "Notes no side effects";
});

updateItem('Week3_Patient_A_Thursday', '1F.3', item => {
  item.fullCredit = "Documents denial of medication affordability concerns";
  item.halfCredit = "Notes can afford meds";
});

updateItem('Week3_Patient_A_Thursday', '1F.4', item => {
  item.fullCredit = "Documents rhinitis symptom stability / well controlled on current therapy";
  item.halfCredit = "Notes allergies stable";
});

updateItem('Week3_Patient_A_Thursday', '1F.6', item => {
  item.fullCredit = "Explicitly documents denial of activity limitations in ROS";
  item.halfCredit = "Notes feeling good";
});

updateItem('Week3_Patient_A_Thursday', '1G.1', item => {
  item.fullCredit = "Documents patient goal of maintaining well-controlled asthma";
  item.halfCredit = "Mentions goal to stay well";
});

updateItem('Week3_Patient_A_Thursday', '1G.2', item => {
  item.fullCredit = "Assesses patient understanding and mastery of asthma self-management plan";
  item.halfCredit = "Notes patient understands plan";
});

updateItem('Week3_Patient_A_Thursday', '1G.3', item => {
  item.fullCredit = "Documents goal of maintaining full unrestricted physical activity and outdoor recreation";
  item.halfCredit = "Mentions being active";
});

updateItem('Week3_Patient_A_Thursday', '1G.5', item => {
  item.fullCredit = "Documents denial of affordability concerns or adverse effect barriers";
  item.halfCredit = "Notes no medication barriers";
});

updateItem('Week3_Patient_A_Thursday', '2B.6', item => {
  item.fullCredit = "Reports PFT values (FEV1 2.9 L, 85% pred; FEV1/FVC 0.77) and interprets as consistent with well-controlled asthma";
  item.halfCredit = "Reports PFT values without interpretation";
});

updateItem('Week3_Patient_A_Thursday', '2C.3', item => {
  item.fullCredit = "Interprets FEV1/FVC (0.77) as normal / above the 0.70 obstruction threshold";
  item.halfCredit = "Reports ratio without threshold comparison";
});

updateItem('Week3_Patient_A_Thursday', '2C.4', item => {
  item.fullCredit = "Notes spirometry confirms absence of airflow obstruction, or notes single-visit PFT establishes well-controlled baseline";
  item.halfCredit = "Mentions normal PFT";
});

updateItem('Week3_Patient_A_Thursday', '3A.1', item => {
  item.fullCredit = "Concludes asthma is well controlled on SMART therapy (ACT 22) (accepts explicit statement or clinical assessment discussion)";
  item.halfCredit = "Notes asthma is better";
});

updateItem('Week3_Patient_A_Thursday', '3A.3', item => {
  item.fullCredit = "Cites GINA guideline as assessment framework";
  item.halfCredit = "Mentions guidelines";
});

updateItem('Week3_Patient_A_Thursday', '3A.4', item => {
  item.fullCredit = "Cites GINA daytime symptom criterion (symptoms <=2 days/week, well controlled)";
  item.halfCredit = "Mentions minimal daytime symptoms";
});

updateItem('Week3_Patient_A_Thursday', '3A.5', item => {
  item.fullCredit = "Cites GINA nighttime awakening criterion (zero nocturnal awakenings / ~once monthly)";
  item.halfCredit = "Mentions sleeping well";
});

updateItem('Week3_Patient_A_Thursday', '3A.6', item => {
  item.fullCredit = "Cites GINA reliever use criterion (reliever <=2 days/week, 1-2 puffs weekly with exercise)";
  item.halfCredit = "Mentions minimal reliever use";
});

updateItem('Week3_Patient_A_Thursday', '3A.7', item => {
  item.fullCredit = "Cites GINA activity limitation criterion (no activity limitation / full exercise tolerance)";
  item.halfCredit = "Mentions no limitations";
});

updateItem('Week3_Patient_A_Thursday', '3A.9', item => {
  item.fullCredit = "Explicitly states SMART therapy (Symbicort) is effective in sustaining asthma control";
  item.halfCredit = "Notes Symbicort works well";
});

updateItem('Week3_Patient_A_Thursday', '3A.10', item => {
  item.fullCredit = "Addresses tolerability of current therapy and notes absence of adverse effects";
  item.halfCredit = "Notes no side effects";
});

updateItem('Week3_Patient_A_Thursday', '3A.14', item => {
  item.fullCredit = "Documents nocturnal symptoms occur rarely (~once/month) and evaluates low current exacerbation risk";
  item.halfCredit = "Mentions rare awakenings";
});

updateItem('Week3_Patient_A_Thursday', '3A.15', item => {
  item.fullCredit = "Documents absence of activity limitation in Assessment";
  item.halfCredit = "Notes full activity";
});

updateItem('Week3_Patient_A_Thursday', '3A.16', item => {
  item.fullCredit = "Interprets FEV1/FVC ratio (0.77) against the 0.70 obstruction threshold in Assessment";
  item.halfCredit = "Mentions ratio in assessment";
});

updateItem('Week3_Patient_A_Thursday', '3A.18', item => {
  item.fullCredit = "Concludes therapy should NOT be stepped up / no escalation is indicated";
  item.halfCredit = "Mentions continuing current dose";
});

updateItem('Week3_Patient_A_Thursday', '3A.20', item => {
  item.fullCredit = "Praises adherence and confirms consistent / excellent daily use";
  item.halfCredit = "Notes good adherence";
});

updateItem('Week3_Patient_A_Thursday', '3A.21', item => {
  item.fullCredit = "Confirms inhaler technique mastery (correct breath-hold, slow deep inhalation)";
  item.halfCredit = "Notes technique is good";
});

updateItem('Week3_Patient_A_Thursday', '3A.22', item => {
  item.fullCredit = "Addresses absence of affordability barriers and adverse drug effects in Assessment";
  item.halfCredit = "Notes no med issues";
});

updateItem('Week3_Patient_A_Thursday', '3C.1', item => {
  item.fullCredit = "Assesses allergic rhinitis control status as well controlled";
  item.halfCredit = "Mentions rhinitis is fine";
});

updateItem('Week3_Patient_A_Thursday', '3C.3', item => {
  item.fullCredit = "Confirms completeness of rhinitis regimen (nasal steroid + oral antihistamine)";
  item.halfCredit = "Lists allergy meds";
});

updateItem('Week3_Patient_A_Thursday', '3C.4', item => {
  item.fullCredit = "Assesses rhinitis therapy effectiveness in suppressing nasal symptoms";
  item.halfCredit = "Notes allergy meds work";
});

updateItem('Week3_Patient_A_Thursday', '3C.5', item => {
  item.fullCredit = "Discusses rhinitis-asthma comorbidity link (one airway concept) and its contribution to stability";
  item.halfCredit = "Notes allergy connection";
});

updateItem('Week3_Patient_A_Thursday', '3C.6', item => {
  item.fullCredit = "States no rhinitis therapy changes are indicated";
  item.halfCredit = "Recommends continuing allergy meds";
});

updateItem('Week3_Patient_A_Thursday', '3C.7', item => {
  item.fullCredit = "Notes intranasal corticosteroid class appropriateness for allergic rhinitis";
  item.halfCredit = "Mentions nasal steroid class";
});

updateItem('Week3_Patient_A_Thursday', '3C.8', item => {
  item.fullCredit = "Notes oral antihistamine class appropriateness for allergic rhinitis";
  item.halfCredit = "Mentions antihistamine class";
});

updateItem('Week3_Patient_A_Thursday', '3C.9', item => {
  item.fullCredit = "Specifies seasonal allergy etiology and allergen avoidance measures";
  item.halfCredit = "Mentions avoiding allergens";
});

updateItem('Week3_Patient_A_Thursday', '3D.1', item => {
  item.fullCredit = "Assesses self-management adherence and patient engagement as a distinct problem or focus";
  item.halfCredit = "Mentions self-management";
});

updateItem('Week3_Patient_A_Thursday', '3D.2', item => {
  item.fullCredit = "Assesses sustained inhaler technique mastery";
  item.halfCredit = "Notes technique remains good";
});

updateItem('Week3_Patient_A_Thursday', '3D.3', item => {
  item.fullCredit = "Assesses patient understanding and confident execution of the management plan";
  item.halfCredit = "Notes patient understands";
});

updateItem('Week3_Patient_A_Thursday', '3D.6', item => {
  item.fullCredit = "States continued reinforcement of self-management is appropriate";
  item.halfCredit = "Mentions ongoing education";
});

updateItem('Week3_Patient_A_Thursday', '3D.7', item => {
  item.fullCredit = "Links active physical lifestyle to self-management success";
  item.halfCredit = "Notes activity level";
});

updateItem('Week3_Patient_A_Thursday', '3D.8', item => {
  item.fullCredit = "Documents return to hiking and outdoor recreation in Assessment";
  item.halfCredit = "Mentions hiking in assessment";
});

updateItem('Week3_Patient_A_Thursday', '3D.9', item => {
  item.fullCredit = "Notes absence of affordability barriers and adverse effects in self-management context";
  item.halfCredit = "Notes no barriers";
});

updateItem('Week3_Patient_A_Thursday', '3E.5', item => {
  item.fullCredit = "Discusses pneumococcal vaccine relevance to chronic asthma";
  item.halfCredit = "Mentions pneumonia shot";
});

updateItem('Week3_Patient_A_Thursday', '3E.6', item => {
  item.fullCredit = "Frames preventive care and vaccine optimization as a clinical priority";
  item.halfCredit = "Mentions preventive care";
});

updateItem('Week3_Patient_A_Thursday', '3E.7', item => {
  item.fullCredit = "Frames immunization gaps (PCV20, Tdap) as actionable plan items";
  item.halfCredit = "Mentions vaccine gaps";
});

updateItem('Week3_Patient_A_Thursday', '4A.5', item => {
  item.fullCredit = "Explicitly states asthma therapy should NOT be stepped up / continues current regimen";
  item.halfCredit = "Mentions continuing current dose";
});

updateItem('Week3_Patient_A_Thursday', '4A.9', item => {
  item.fullCredit = "Includes inhaler technique reinforcement in Plan";
  item.halfCredit = "Mentions checking inhaler";
});

updateItem('Week3_Patient_A_Thursday', '4B.1', item => {
  item.fullCredit = "Reviews and reinforces written asthma action plan in Plan";
  item.halfCredit = "Mentions action plan";
});

updateItem('Week3_Patient_A_Thursday', '4B.2', item => {
  item.fullCredit = "Reinforces early recognition of worsening symptoms";
  item.halfCredit = "Mentions recognizing flares";
});

updateItem('Week3_Patient_A_Thursday', '4B.3', item => {
  item.fullCredit = "Discusses viral illness management strategies (continuing controller, increasing reliever)";
  item.halfCredit = "Mentions managing colds";
});

updateItem('Week3_Patient_A_Thursday', '4B.4', item => {
  item.fullCredit = "Provides prompt medical evaluation guidance for severe symptoms";
  item.halfCredit = "Mentions emergency care";
});

updateItem('Week3_Patient_A_Thursday', '4B.7', item => {
  item.fullCredit = "Discusses trigger avoidance measures in Plan";
  item.halfCredit = "Mentions avoiding triggers";
});

updateItem('Week3_Patient_A_Thursday', '4C.2', item => {
  item.fullCredit = "Outlines plan for escalating rhinitis therapy if symptoms worsen";
  item.halfCredit = "Mentions what to do if allergies flare";
});

updateItem('Week3_Patient_A_Thursday', '4C.3', item => {
  item.fullCredit = "Reinforces allergen avoidance measures in Plan";
  item.halfCredit = "Mentions avoiding allergens";
});

updateItem('Week3_Patient_A_Thursday', '4C.4', item => {
  item.fullCredit = "Addresses rhinitis therapy appropriateness and continuation in Plan";
  item.halfCredit = "Notes allergy meds appropriate";
});

updateItem('Week3_Patient_A_Thursday', '4C.5', item => {
  item.fullCredit = "Specifies continuation of fluticasone nasal spray dosing (50 mcg 1-2 sprays each nostril daily)";
  item.halfCredit = "Mentions nasal spray";
});

updateItem('Week3_Patient_A_Thursday', '4C.6', item => {
  item.fullCredit = "Links continued rhinitis management directly to sustained asthma control";
  item.halfCredit = "Notes rhinitis control protects asthma";
});

updateItem('Week3_Patient_A_Thursday', '4D.1', item => {
  item.fullCredit = "Reinforces SMART therapy principles and education in Plan";
  item.halfCredit = "Mentions Symbicort education";
});

updateItem('Week3_Patient_A_Thursday', '4D.2', item => {
  item.fullCredit = "Praises and reinforces excellent adherence to maintenance dosing in Plan";
  item.halfCredit = "Praises adherence";
});

updateItem('Week3_Patient_A_Thursday', '4D.3', item => {
  item.fullCredit = "Reviews trigger avoidance strategies in Plan";
  item.halfCredit = "Mentions avoiding triggers";
});

updateItem('Week3_Patient_A_Thursday', '4D.4', item => {
  item.fullCredit = "Reinforces inhaler technique in patient education section";
  item.halfCredit = "Mentions technique review";
});

updateItem('Week3_Patient_A_Thursday', '4D.6', item => {
  item.fullCredit = "Reviews written asthma action plan in patient education section";
  item.halfCredit = "Mentions action plan review";
});

updateItem('Week3_Patient_A_Thursday', '4D.7', item => {
  item.fullCredit = "Discusses viral illness management and anticipatory guidance in education section";
  item.halfCredit = "Mentions what to do when sick";
});

updateItem('Week3_Patient_A_Thursday', '4D.8', item => {
  item.fullCredit = "Reinforces early recognition of worsening symptoms in education section";
  item.halfCredit = "Mentions flare warning signs";
});

updateItem('Week3_Patient_A_Thursday', '4E.1', item => {
  item.fullCredit = "Lists ACT score as a specific monitoring parameter in Plan";
  item.halfCredit = "Mentions ACT monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4E.2', item => {
  item.fullCredit = "Lists symptom frequency as a monitoring parameter";
  item.halfCredit = "Mentions tracking symptoms";
});

updateItem('Week3_Patient_A_Thursday', '4E.3', item => {
  item.fullCredit = "Lists reliever inhaler use frequency as a monitoring parameter";
  item.halfCredit = "Mentions tracking reliever puffs";
});

updateItem('Week3_Patient_A_Thursday', '4E.4', item => {
  item.fullCredit = "Lists nighttime awakening frequency as a monitoring parameter";
  item.halfCredit = "Mentions sleep monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4E.6', item => {
  item.fullCredit = "Frames medication adherence as a specific monitoring parameter";
  item.halfCredit = "Mentions checking adherence";
});

updateItem('Week3_Patient_A_Thursday', '4E.7', item => {
  item.fullCredit = "Frames inhaler technique as a specific monitoring parameter";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_A_Thursday', '4E.8', item => {
  item.fullCredit = "Lists allergic rhinitis symptom control as a monitoring parameter";
  item.halfCredit = "Mentions checking allergies";
});

updateItem('Week3_Patient_A_Thursday', '4E.9', item => {
  item.fullCredit = "Plans periodic spirometry / PEF monitoring at future routine visits";
  item.halfCredit = "Mentions repeating PFT";
});

updateItem('Week3_Patient_A_Thursday', '4E.10', item => {
  item.fullCredit = "References GINA assess-adjust-review monitoring cycle framework";
  item.halfCredit = "Mentions GINA monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Mentions pneumonia shot";
});

updateItem('Week3_Patient_A_Thursday', '4F.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Mentions tetanus booster";
});

updateItem('Week3_Patient_A_Thursday', '4F.4', item => {
  item.fullCredit = "Recommends verification and review of state immunization records / registry";
  item.halfCredit = "Mentions checking records";
});

updateItem('Week3_Patient_A_Thursday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up interval (4-6 weeks for technique/action plan check, or routine 3-6 months)";
  item.halfCredit = "Mentions follow-up without interval";
});

updateItem('Week3_Patient_A_Thursday', '4G.2', item => {
  item.fullCredit = "Plans reassessment of asthma control at follow-up";
  item.halfCredit = "Mentions checking control";
});

updateItem('Week3_Patient_A_Thursday', '4G.4', item => {
  item.fullCredit = "Outlines a clear longitudinal monitoring plan";
  item.halfCredit = "Mentions long-term follow-up";
});

updateItem('Week3_Patient_A_Thursday', '4G.5', item => {
  item.fullCredit = "Plans evaluation of therapy modification if control worsens before routine follow-up";
  item.halfCredit = "Notes adjusting if worse";
});

updateItem('Week3_Patient_A_Thursday', '4G.6', item => {
  item.fullCredit = "Plans repeat pulmonary function testing at future routine visits per GINA";
  item.halfCredit = "Mentions repeating PFT";
});

updateItem('Week3_Patient_A_Thursday', '4G.7', item => {
  item.fullCredit = "Plans review of adherence and inhaler technique at follow-up";
  item.halfCredit = "Mentions checking adherence and technique";
});

updateItem('Week3_Patient_A_Thursday', '5A.3', item => {
  item.fullCredit = "Structures assessment covering asthma, rhinitis, and vaccines (accepts numbered items or clinical question format)";
  item.halfCredit = "Single unnumbered assessment item";
});

updateItem('Week3_Patient_A_Thursday', '5B.2', item => {
  item.fullCredit = "Reports PFT values with standard units and GINA threshold comparison (FEV1 2.9 L, 85% pred, ratio 0.77 >= 0.70)";
  item.halfCredit = "Reports PFT without threshold comparison";
});

updateItem('Week3_Patient_A_Thursday', '5B.3', item => {
  item.fullCredit = "Lists specific, measurable monitoring parameters (ACT >= 20, daytime symptoms <=2x/wk, no awakenings)";
  item.halfCredit = "Mentions general monitoring";
});

updateItem('Week3_Patient_A_Thursday', '5B.4', item => {
  item.fullCredit = "Provides concrete actionable details (maintaining Symbicort dosing, continuing rhinitis meds, vaccines, follow-up timing)";
  item.halfCredit = "Brief plan statement";
});

updateItem('Week3_Patient_A_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 guideline rationale in Assessment or Plan";
  item.halfCredit = "Mentions guidelines without naming GINA";
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
