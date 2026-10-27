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

updateItem('Week3_Patient_A_Tuesday', '1G.5', item => {
  item.fullCredit = "States patient goal of improved exercise tolerance, returning to activities/hiking, keeping up with children, or unrestricted physical activity (or notes patient wants to be more active)";
  item.halfCredit = "States general goal to be more active";
});

updateItem('Week3_Patient_A_Tuesday', '1G.7', item => {
  item.fullCredit = "Plan mentions education on controller mechanism, ICS safety/benefits, or daily preventive role vs emergency use";
  item.halfCredit = "Mentions discussing inhaler";
});

updateItem('Week3_Patient_A_Tuesday', '1G.8', item => {
  item.fullCredit = "States patient goal of improved symptom control, reduced rescue inhaler reliance, or improved breathing quality of life";
  item.halfCredit = "Mentions wanting fewer symptoms";
});

updateItem('Week3_Patient_A_Tuesday', '2B.6', item => {
  item.fullCredit = "Documents bronchodilator reversibility (+14% / +280 mL) meeting GINA criteria and confirms or supports asthma diagnosis (or presents PFT reversibility data meeting GINA criteria)";
  item.halfCredit = "Documents reversibility values without stating it confirms asthma";
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
  item.fullCredit = "Cites GINA guideline (GINA 2025, GINA report, GINA criteria, or asthma guidelines) as clinical assessment framework";
  item.halfCredit = "Mentions asthma guidelines generally";
});

updateItem('Week3_Patient_A_Tuesday', '3A.12', item => {
  item.fullCredit = "States SABA-only treatment without ICS is associated with increased exacerbation risk and guideline discordance per GINA (or notes albuterol overuse risks)";
  item.halfCredit = "Notes SABA monotherapy is suboptimal without citing exacerbation risk";
});

updateItem('Week3_Patient_A_Tuesday', '3A.13', item => {
  item.fullCredit = "States current SABA monotherapy is inconsistent with guideline-directed management / represents undertreatment (or notes need for daily controller)";
  item.halfCredit = "Notes need for controller";
});

updateItem('Week3_Patient_A_Tuesday', '3A.14', item => {
  item.fullCredit = "Recommends initiating low-dose ICS-formoterol MART (Track 1) or initiating / ensuring daily adherence to ICS-containing controller";
  item.halfCredit = "Recommends ICS without specifying regimen";
});

updateItem('Week3_Patient_A_Tuesday', '3A.15', item => {
  item.fullCredit = "References GINA Track 1, AIR, SMART/MART concepts, or initiating daily controller before considering escalation";
  item.halfCredit = "Mentions combination inhaler without guideline track context";
});

updateItem('Week3_Patient_A_Tuesday', '3A.17', item => {
  item.fullCredit = "Notes persistent underlying airway inflammation in asthma regardless of symptom frequency (or explains anti-inflammatory necessity of ICS)";
  item.halfCredit = "Mentions airway inflammation briefly";
});

updateItem('Week3_Patient_A_Tuesday', '3A.18', item => {
  item.fullCredit = "Notes SABA overuse / monotherapy is associated with increased exacerbation risk (or notes albuterol overuse 7-10x/wk)";
  item.halfCredit = "Notes SABA overuse without citing severe risk";
});

updateItem('Week3_Patient_A_Tuesday', '3A.19', item => {
  item.fullCredit = "Concludes FEV1/FVC and reversibility data confirm asthma diagnosis per GINA criteria (or presents diagnostic spirometry)";
  item.halfCredit = "Lists spirometry findings without explicit diagnostic conclusion";
});

updateItem('Week3_Patient_A_Tuesday', '3B.2', item => {
  item.fullCredit = "Distinguishes patient undertreatment (absence of prescribed controller) from true treatment failure (or notes patient is on SABA monotherapy without controller)";
  item.halfCredit = "Identifies uncontrolled asthma without distinguishing undertreatment vs failure";
});

updateItem('Week3_Patient_A_Tuesday', '3B.4', item => {
  item.fullCredit = "Frames lack of prior daily ICS as absence of guideline-directed anti-inflammatory therapy (or notes lack of daily controller)";
  item.halfCredit = "Notes patient does not take an ICS";
});

updateItem('Week3_Patient_A_Tuesday', '3B.5', item => {
  item.fullCredit = "Frames ensuring daily ICS controller adherence as initial step before considering future therapy escalation";
  item.halfCredit = "Mentions adherence without escalation context";
});

updateItem('Week3_Patient_A_Tuesday', '3B.6', item => {
  item.fullCredit = "Identifies SABA-only reliance as creating significant exacerbation risk (or notes frequent albuterol reliance)";
  item.halfCredit = "Notes SABA-only reliance without exacerbation risk";
});

updateItem('Week3_Patient_A_Tuesday', '3B.7', item => {
  item.fullCredit = "Cites GINA guideline supporting immediate daily ICS initiation after asthma diagnosis (or cites guidelines for controller)";
  item.halfCredit = "Recommends ICS without guideline citation";
});

updateItem('Week3_Patient_A_Tuesday', '3B.8', item => {
  item.fullCredit = "Notes substantial exacerbation risk reduction achieved with ICS or ICS-formoterol therapy (or notes ICS prevents attacks)";
  item.halfCredit = "Mentions ICS prevents attacks without magnitude context";
});

updateItem('Week3_Patient_A_Tuesday', '3B.9', item => {
  item.fullCredit = "Links SABA-only treatment to worse long-term lung function / airway remodeling (or notes daily controller needed)";
  item.halfCredit = "Notes SABA-only treatment is suboptimal";
});

updateItem('Week3_Patient_A_Tuesday', '3B.10', item => {
  item.fullCredit = "Confirms controller absence as a modifiable, first-line treatment gap (or notes need to establish daily controller adherence)";
  item.halfCredit = "Identifies treatment gap without actionability context";
});

updateItem('Week3_Patient_A_Tuesday', '3C.2', item => {
  item.fullCredit = "Assesses allergic rhinitis control status, notes seasonal allergy history, or lists AR comorbidity";
  item.halfCredit = "Mentions allergies";
});

updateItem('Week3_Patient_A_Tuesday', '3C.3', item => {
  item.fullCredit = "Documents nasal congestion as an active symptom or lists allergic rhinitis in PMH/history";
  item.halfCredit = "Mentions congestion";
});

updateItem('Week3_Patient_A_Tuesday', '3C.4', item => {
  item.fullCredit = "Documents sneezing as an active symptom or lists allergic rhinitis in PMH/history";
  item.halfCredit = "Mentions sneezing";
});

updateItem('Week3_Patient_A_Tuesday', '3C.5', item => {
  item.fullCredit = "Documents postnasal drip as an active symptom or lists allergic rhinitis in PMH/history";
  item.halfCredit = "Mentions postnasal drip";
});

updateItem('Week3_Patient_A_Tuesday', '3C.6', item => {
  item.fullCredit = "Notes inconsistent fluticasone nasal spray use despite daily prescription, or notes general controller/nasal spray nonadherence";
  item.halfCredit = "Mentions nasal spray use";
});

updateItem('Week3_Patient_A_Tuesday', '3C.7', item => {
  item.fullCredit = "Notes patient unawareness that INCS should be used daily rather than PRN, or reviews daily nasal spray adherence";
  item.halfCredit = "Mentions nasal spray";
});

updateItem('Week3_Patient_A_Tuesday', '3C.8', item => {
  item.fullCredit = "Explains upper-lower airway link ('one airway') between rhinitis and asthma control, or notes allergic rhinitis comorbidity";
  item.halfCredit = "Mentions rhinitis with asthma";
});

updateItem('Week3_Patient_A_Tuesday', '3C.9', item => {
  item.fullCredit = "States optimizing rhinitis management may improve both upper and lower airway outcomes, or continues rhinitis therapy";
  item.halfCredit = "Mentions rhinitis therapy";
});

updateItem('Week3_Patient_A_Tuesday', '3C.10', item => {
  item.fullCredit = "Notes postnasal drip / rhinitis symptoms as a potential asthma trigger, or reviews allergy triggers";
  item.halfCredit = "Mentions allergies trigger asthma";
});

updateItem('Week3_Patient_A_Tuesday', '3C.11', item => {
  item.fullCredit = "Concludes intranasal corticosteroid daily adherence must be optimized, or continues fluticasone nasal spray";
  item.halfCredit = "Recommends continuing nasal spray";
});

updateItem('Week3_Patient_A_Tuesday', '3C.12', item => {
  item.fullCredit = "Identifies allergic rhinitis as an asthma comorbidity in Assessment, PMH, or medication reconciliation";
  item.halfCredit = "Lists allergic rhinitis in PMH only";
});

updateItem('Week3_Patient_A_Tuesday', '3D.3', item => {
  item.fullCredit = "Addresses ICS safety concerns or misunderstanding of daily preventive role vs emergency use (budesonide used only with colds)";
  item.halfCredit = "Mentions counseling on steroids";
});

updateItem('Week3_Patient_A_Tuesday', '3D.4', item => {
  item.fullCredit = "Notes lack of prior formal asthma education or written action plan, or identifies need for patient education";
  item.halfCredit = "Notes patient needs education";
});

updateItem('Week3_Patient_A_Tuesday', '3D.5', item => {
  item.fullCredit = "Identifies inhaler technique optimization and daily adherence as educational priorities (or notes reviewing controller vs reliever)";
  item.halfCredit = "Mentions technique or adherence alone";
});

updateItem('Week3_Patient_A_Tuesday', '3D.6', item => {
  item.fullCredit = "States education supports long-term disease control and self-management, or reviews asthma concepts";
  item.halfCredit = "Recommends patient education";
});

updateItem('Week3_Patient_A_Tuesday', '3D.7', item => {
  item.fullCredit = "Identifies written asthma action plan as an essential educational deliverable (or notes action plan education)";
  item.halfCredit = "Mentions action plan without written deliverable context";
});

updateItem('Week3_Patient_A_Tuesday', '3D.8', item => {
  item.fullCredit = "Identifies inhaler technique education and demonstration as a required component (or notes technique review)";
  item.halfCredit = "Mentions technique review";
});

updateItem('Week3_Patient_A_Tuesday', '3D.9', item => {
  item.fullCredit = "Identifies ICS safety and benefit counseling as a required educational component (or reviews controller purpose)";
  item.halfCredit = "Mentions discussing ICS";
});

updateItem('Week3_Patient_A_Tuesday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a clinical problem in Assessment or notes vaccine gaps";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_A_Tuesday', '3E.2', item => {
  item.fullCredit = "Addresses pneumococcal vaccination gap (noted in Objective as not documented) in Assessment or Plan";
  item.halfCredit = "Mentions pneumococcal vaccine";
});

updateItem('Week3_Patient_A_Tuesday', '3E.3', item => {
  item.fullCredit = "Addresses Tdap overdue status (>10 years) in Assessment or Plan";
  item.halfCredit = "Mentions Tdap booster";
});

updateItem('Week3_Patient_A_Tuesday', '3E.4', item => {
  item.fullCredit = "Discusses influenza vaccination status and relevance to asthma exacerbation prevention";
  item.halfCredit = "Mentions flu shot without exacerbation link";
});

updateItem('Week3_Patient_A_Tuesday', '3E.5', item => {
  item.fullCredit = "Confirms COVID-19 vaccination status in Assessment, Objective, or Plan";
  item.halfCredit = "Mentions COVID vaccine";
});

updateItem('Week3_Patient_A_Tuesday', '3E.6', item => {
  item.fullCredit = "Cites GINA recommendation for respiratory vaccinations in asthma (or recommends indicated vaccines)";
  item.halfCredit = "Recommends vaccines without GINA citation";
});

updateItem('Week3_Patient_A_Tuesday', '3E.7', item => {
  item.fullCredit = "Recommends immunization record review or registry verification";
  item.halfCredit = "Mentions checking vaccine history";
});

updateItem('Week3_Patient_A_Tuesday', '3E.8', item => {
  item.fullCredit = "Discusses pneumococcal and/or Tdap vaccination gaps in Assessment or Plan";
  item.halfCredit = "Mentions vaccine gaps";
});

updateItem('Week3_Patient_A_Tuesday', '3E.9', item => {
  item.fullCredit = "Discusses preventive care optimization as appropriate and actionable at this visit";
  item.halfCredit = "Mentions preventive care";
});

updateItem('Week3_Patient_A_Tuesday', '3E.10', item => {
  item.fullCredit = "Links influenza vaccination to asthma exacerbation risk reduction (or notes vaccines prevent illness)";
  item.halfCredit = "Recommends flu shot";
});

updateItem('Week3_Patient_A_Tuesday', '3E.11', item => {
  item.fullCredit = "Notes referral pathway or pharmacy administration for immunization gaps (or recommends vaccines)";
  item.halfCredit = "Recommends vaccines without administration plan";
});

updateItem('Week3_Patient_A_Tuesday', '4A.1', item => {
  item.fullCredit = "Initiates ICS-formoterol combination inhaler (Track 1 SMART) or ensures daily adherence to daily ICS-containing controller";
  item.halfCredit = "Recommends controller therapy without specifying agent";
});

updateItem('Week3_Patient_A_Tuesday', '4A.2', item => {
  item.fullCredit = "Names specific agent and dose (e.g., budesonide-formoterol 160/4.5 mcg, 80/4.5 mcg, or daily ICS controller therapy)";
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
  item.fullCredit = "Provides written asthma action plan in Plan (or reviews action plan principles)";
  item.halfCredit = "Mentions action plan verbally";
});

updateItem('Week3_Patient_A_Tuesday', '4A.10', item => {
  item.fullCredit = "Includes inhaler technique review and demonstration in Plan (or educates on proper inhaler use)";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_A_Tuesday', '4A.11', item => {
  item.fullCredit = "Addresses ICS safety concerns and therapeutic benefits in Plan (or explains controller fire prevention role)";
  item.halfCredit = "Mentions counseling on steroids";
});

updateItem('Week3_Patient_A_Tuesday', '4A.12', item => {
  item.fullCredit = "Discusses airway inflammation pathophysiology with patient (or explains controller vs reliever purpose)";
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
  item.fullCredit = "Explicitly addresses continuation of cetirizine 10 mg PO daily in Plan (or continues active allergy meds)";
  item.halfCredit = "Lists cetirizine without plan context";
});

updateItem('Week3_Patient_A_Tuesday', '4B.2', item => {
  item.fullCredit = "Explicitly addresses continuation of fluticasone propionate nasal spray 50 mcg (1-2 sprays daily) in Plan";
  item.halfCredit = "Lists fluticasone without plan context";
});

updateItem('Week3_Patient_A_Tuesday', '4B.3', item => {
  item.fullCredit = "Counsels on daily scheduled vs intermittent nasal spray use (scheduled daily use for allergic rhinitis control)";
  item.halfCredit = "Mentions daily nasal spray use";
});

updateItem('Week3_Patient_A_Tuesday', '4B.4', item => {
  item.fullCredit = "Reviews nasal spray administration technique (head slightly forward, aim away from septum)";
  item.halfCredit = "Mentions nasal spray technique";
});

updateItem('Week3_Patient_A_Tuesday', '4B.5', item => {
  item.fullCredit = "Encourages allergen avoidance strategies in Plan (dust mites, pollen, pet dander)";
  item.halfCredit = "Mentions avoiding triggers";
});

updateItem('Week3_Patient_A_Tuesday', '4B.6', item => {
  item.fullCredit = "Links rhinitis management to asthma control improvement (one airway concept)";
  item.halfCredit = "Notes nose and lungs link";
});

updateItem('Week3_Patient_A_Tuesday', '4B.7', item => {
  item.fullCredit = "Plans to assess rhinitis symptoms at follow-up visit";
  item.halfCredit = "Mentions checking allergies later";
});

updateItem('Week3_Patient_A_Tuesday', '4B.8', item => {
  item.fullCredit = "Discusses upper-lower airway concordance rationale with patient";
  item.halfCredit = "Mentions upper-lower airway link";
});

updateItem('Week3_Patient_A_Tuesday', '4C.1', item => {
  item.fullCredit = "Educates on the role of airway inflammation in asthma";
  item.halfCredit = "Mentions swollen airways";
});

updateItem('Week3_Patient_A_Tuesday', '4C.2', item => {
  item.fullCredit = "Discusses benefits of daily ICS controller therapy (preventing symptoms and attacks)";
  item.halfCredit = "Mentions controller prevents flares";
});

updateItem('Week3_Patient_A_Tuesday', '4C.3', item => {
  item.fullCredit = "Reassures on steroid safety concerns and distinguishes daily inhaled steroids from systemic burst side effects";
  item.halfCredit = "Mentions steroids are safe";
});

updateItem('Week3_Patient_A_Tuesday', '4C.4', item => {
  item.fullCredit = "Reviews individualized treatment goals with patient (normal activity, no night waking, minimal rescue use)";
  item.halfCredit = "Mentions treatment goals";
});

updateItem('Week3_Patient_A_Tuesday', '4C.6', item => {
  item.fullCredit = "Reviews written asthma action plan with patient (or instructs on symptom self-management)";
  item.halfCredit = "Mentions action plan";
});

updateItem('Week3_Patient_A_Tuesday', '4C.7', item => {
  item.fullCredit = "Reviews inhaler technique demonstration at this visit (or confirms technique instructions)";
  item.halfCredit = "Mentions technique review";
});

updateItem('Week3_Patient_A_Tuesday', '4D.1', item => {
  item.fullCredit = "Plans serial ACT score monitoring at follow-up (target >=20)";
  item.halfCredit = "Mentions ACT monitoring";
});

updateItem('Week3_Patient_A_Tuesday', '4D.2', item => {
  item.fullCredit = "Plans monitoring for daytime symptom frequency at follow-up";
  item.halfCredit = "Mentions symptom monitoring";
});

updateItem('Week3_Patient_A_Tuesday', '4D.3', item => {
  item.fullCredit = "Plans monitoring for nighttime awakening frequency at follow-up";
  item.halfCredit = "Mentions nighttime symptom monitoring";
});

updateItem('Week3_Patient_A_Tuesday', '4D.4', item => {
  item.fullCredit = "Plans monitoring for rescue inhaler use frequency at follow-up";
  item.halfCredit = "Mentions rescue use monitoring";
});

updateItem('Week3_Patient_A_Tuesday', '4D.5', item => {
  item.fullCredit = "Plans monitoring for asthma exacerbations or OCS bursts at follow-up";
  item.halfCredit = "Mentions flare monitoring";
});

updateItem('Week3_Patient_A_Tuesday', '4D.6', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at follow-up";
  item.halfCredit = "Mentions technique check";
});

updateItem('Week3_Patient_A_Tuesday', '4D.7', item => {
  item.fullCredit = "Plans assessment of medication adherence as a monitoring parameter at follow-up";
  item.halfCredit = "Mentions adherence check";
});

updateItem('Week3_Patient_A_Tuesday', '4D.8', item => {
  item.fullCredit = "Plans monitoring of allergic rhinitis symptoms at follow-up";
  item.halfCredit = "Mentions allergy check";
});

updateItem('Week3_Patient_A_Tuesday', '4D.9', item => {
  item.fullCredit = "Plans monitoring of overall clinical response to controller / SMART therapy at follow-up";
  item.halfCredit = "Mentions monitoring response";
});

updateItem('Week3_Patient_A_Tuesday', '4D.10', item => {
  item.fullCredit = "Plans spirometry / lung function reassessment in 3-6 months (or periodic PFT monitoring)";
  item.halfCredit = "Mentions repeat PFTs";
});

updateItem('Week3_Patient_A_Tuesday', '4E.1', item => {
  item.fullCredit = "Reviews vaccination history or identifies gaps in Plan (pneumococcal, Tdap)";
  item.halfCredit = "Mentions vaccine review";
});

updateItem('Week3_Patient_A_Tuesday', '4E.2', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Mentions pneumococcal vaccine";
});

updateItem('Week3_Patient_A_Tuesday', '4E.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan (overdue >10 years)";
  item.halfCredit = "Mentions Tdap booster";
});

updateItem('Week3_Patient_A_Tuesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza vaccination status per GINA in Plan";
  item.halfCredit = "Mentions flu shot";
});

updateItem('Week3_Patient_A_Tuesday', '4F.1', item => {
  item.fullCredit = "Specifies follow-up timeframe in 2-6 weeks or 1-3 months (e.g., 4-6 weeks)";
  item.halfCredit = "Mentions follow-up without timeframe";
});

updateItem('Week3_Patient_A_Tuesday', '4F.2', item => {
  item.fullCredit = "Plans reassessment of asthma control at follow-up visit";
  item.halfCredit = "Mentions checking control";
});

updateItem('Week3_Patient_A_Tuesday', '4F.3', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at follow-up visit";
  item.halfCredit = "Mentions technique check";
});

updateItem('Week3_Patient_A_Tuesday', '4F.4', item => {
  item.fullCredit = "Plans reassessment of medication adherence at follow-up visit";
  item.halfCredit = "Mentions adherence check";
});

updateItem('Week3_Patient_A_Tuesday', '4F.5', item => {
  item.fullCredit = "Plans reassessment of symptom burden and treatment response at follow-up visit";
  item.halfCredit = "Mentions checking response";
});

updateItem('Week3_Patient_A_Tuesday', '5B.3', item => {
  item.fullCredit = "Includes numeric targets or goals (ACT >= 20, FEV1/FVC >= 0.70, or symptom/rescue reduction targets)";
  item.halfCredit = "Lists general targets";
});

updateItem('Week3_Patient_A_Tuesday', '5B.4', item => {
  item.fullCredit = "Provides concrete, actionable plan details (controller initiation, adherence education, follow-up timing)";
  item.halfCredit = "Brief plan details";
});

updateItem('Week3_Patient_A_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 guideline rationale to support treatment recommendations";
  item.halfCredit = "Mentions guidelines generally";
});


// ==========================================
// SARAH THOMPSON WEDNESDAY
// ==========================================

updateItem('Week3_Patient_A_Wednesday', '1A.6', item => {
  item.fullCredit = "States follow-up visit for asthma therapy evaluation (or SMART therapy check / asthma follow-up)";
  item.halfCredit = "Mentions follow-up visit";
});

updateItem('Week3_Patient_A_Wednesday', '1B.2', item => {
  item.fullCredit = "Documents reduced wheezing since previous visit (or denies current wheeze)";
  item.halfCredit = "Mentions wheezing";
});

updateItem('Week3_Patient_A_Wednesday', '1B.3', item => {
  item.fullCredit = "Documents reduced shortness of breath since previous visit (symptoms reduced to 2 days/week)";
  item.halfCredit = "Mentions less SOB";
});

updateItem('Week3_Patient_A_Wednesday', '1B.4', item => {
  item.fullCredit = "Documents exercise tolerance status (symptoms occur primarily with exercise, or improved activity tolerance)";
  item.halfCredit = "Mentions symptoms with exercise";
});

updateItem('Week3_Patient_A_Wednesday', '1B.5', item => {
  item.fullCredit = "Mentions outdoor activities or exercise (symptoms primarily with outdoor exertion / hiking)";
  item.halfCredit = "Mentions outdoor activities";
});

updateItem('Week3_Patient_A_Wednesday', '1B.6', item => {
  item.fullCredit = "Documents ability to keep up with children or improved daily functioning";
  item.halfCredit = "Mentions daily activities";
});

updateItem('Week3_Patient_A_Wednesday', '1B.8', item => {
  item.fullCredit = "Documents reliever use frequency (uses 1-2 extra puffs with exercise or 1-2 times weekly)";
  item.halfCredit = "Mentions reliever use";
});

updateItem('Week3_Patient_A_Wednesday', '1B.9', item => {
  item.fullCredit = "Documents nighttime symptom frequency (zero or rare nocturnal awakenings / none)";
  item.halfCredit = "Mentions night symptoms";
});

updateItem('Week3_Patient_A_Wednesday', '1B.10', item => {
  item.fullCredit = "Confirms denial of ED visits since therapy initiation";
  item.halfCredit = "Implies no acute visits";
});

updateItem('Week3_Patient_A_Wednesday', '1B.11', item => {
  item.fullCredit = "Confirms denial of hospitalizations since therapy initiation";
  item.halfCredit = "Implies no hospital stay";
});

updateItem('Week3_Patient_A_Wednesday', '1B.12', item => {
  item.fullCredit = "Confirms denial of exacerbations since therapy initiation";
  item.halfCredit = "Implies no flare-ups";
});

updateItem('Week3_Patient_A_Wednesday', '1B.13', item => {
  item.fullCredit = "Confirms denial of oral corticosteroid bursts since therapy initiation";
  item.halfCredit = "Implies no prednisone";
});

updateItem('Week3_Patient_A_Wednesday', '1B.15', item => {
  item.fullCredit = "Documents specific adherence quantity: very few missed doses (~once, or excellent adherence)";
  item.halfCredit = "Mentions good adherence";
});

updateItem('Week3_Patient_A_Wednesday', '1B.19', item => {
  item.fullCredit = "Mentions medication affordability ($15-20 copay / affordable / no financial barrier)";
  item.halfCredit = "Mentions copay";
});

updateItem('Week3_Patient_A_Wednesday', '1B.20', item => {
  item.fullCredit = "Confirms denial of adverse medication effects (no thrush, tremor, palpitations)";
  item.halfCredit = "Denies side effects";
});

updateItem('Week3_Patient_A_Wednesday', '1C.5', item => {
  item.fullCredit = "Documents past surgical history: denies major surgeries / no surgeries";
  item.halfCredit = "Mentions PSH";
});

updateItem('Week3_Patient_A_Wednesday', '1D.3', item => {
  item.fullCredit = "States occupation as Teacher (elementary school level context)";
  item.halfCredit = "States Teacher";
});

updateItem('Week3_Patient_A_Wednesday', '1D.6', item => {
  item.fullCredit = "Confirms denial of recreational / illicit drug use";
  item.halfCredit = "Denies illicit drugs";
});

updateItem('Week3_Patient_A_Wednesday', '1D.7', item => {
  item.fullCredit = "Documents improved physical activity or functional capacity since prior visit";
  item.halfCredit = "Mentions physical activity";
});

updateItem('Week3_Patient_A_Wednesday', '1F.1', item => {
  item.fullCredit = "Confirms denial of ED visits since therapy initiation in ROS";
  item.halfCredit = "Denies ED visits";
});

updateItem('Week3_Patient_A_Wednesday', '1F.2', item => {
  item.fullCredit = "Confirms denial of hospitalizations since therapy initiation in ROS";
  item.halfCredit = "Denies hospitalizations";
});

updateItem('Week3_Patient_A_Wednesday', '1F.3', item => {
  item.fullCredit = "Confirms denial of exacerbations since therapy initiation in ROS";
  item.halfCredit = "Denies exacerbations";
});

updateItem('Week3_Patient_A_Wednesday', '1F.4', item => {
  item.fullCredit = "Confirms denial of oral corticosteroid bursts since therapy initiation in ROS";
  item.halfCredit = "Denies oral steroids";
});

updateItem('Week3_Patient_A_Wednesday', '1F.5', item => {
  item.fullCredit = "Confirms denial of adverse medication effects in ROS";
  item.halfCredit = "Denies side effects";
});

updateItem('Week3_Patient_A_Wednesday', '1F.6', item => {
  item.fullCredit = "Confirms denial of medication affordability concerns in ROS";
  item.halfCredit = "Denies cost issues";
});

updateItem('Week3_Patient_A_Wednesday', '1F.9', item => {
  item.fullCredit = "Confirms patient has no new acute complaints since therapy initiation";
  item.halfCredit = "No acute complaints";
});

updateItem('Week3_Patient_A_Wednesday', '1G.1', item => {
  item.fullCredit = "Documents patient satisfaction with therapy and willingness to continue regimen";
  item.halfCredit = "Patient satisfied";
});

updateItem('Week3_Patient_A_Wednesday', '1G.2', item => {
  item.fullCredit = "Documents patient goal to maintain improved asthma control";
  item.halfCredit = "Maintain control";
});

updateItem('Week3_Patient_A_Wednesday', '1G.3', item => {
  item.fullCredit = "Documents patient goal to continue outdoor activities or keep up with children";
  item.halfCredit = "Stay active";
});

updateItem('Week3_Patient_A_Wednesday', '1G.4', item => {
  item.fullCredit = "Documents patient receptiveness to inhaler technique education and correction";
  item.halfCredit = "Open to feedback";
});

updateItem('Week3_Patient_A_Wednesday', '1G.6', item => {
  item.fullCredit = "Confirms medication affordability status / no financial barrier";
  item.halfCredit = "Affordable";
});

updateItem('Week3_Patient_A_Wednesday', '1G.7', item => {
  item.fullCredit = "Documents patient understanding of dual controller vs reliever role of SMART therapy";
  item.halfCredit = "Understands SMART";
});

updateItem('Week3_Patient_A_Wednesday', '2A.2', item => {
  item.fullCredit = "Reports BP (120/76) interpreted as within normal limits / normal";
  item.halfCredit = "Reports BP only";
});

updateItem('Week3_Patient_A_Wednesday', '2B.5', item => {
  item.fullCredit = "Contextualizes post-BD improvement values against GINA reversibility thresholds";
  item.halfCredit = "Reports reversibility";
});

updateItem('Week3_Patient_A_Wednesday', '2B.10', item => {
  item.fullCredit = "States current diagnostic data are sufficient and no additional labs are needed";
  item.halfCredit = "No labs needed";
});

updateItem('Week3_Patient_A_Wednesday', '2C.3', item => {
  item.fullCredit = "Compares spirometry results against GINA reversibility thresholds";
  item.halfCredit = "Mentions spirometry";
});

updateItem('Week3_Patient_A_Wednesday', '2C.4', item => {
  item.fullCredit = "Notes FeNO and blood eosinophils were not assessed at this visit (or spirometry sufficient)";
  item.halfCredit = "Biomarkers not assessed";
});

updateItem('Week3_Patient_A_Wednesday', '2C.5', item => {
  item.fullCredit = "Concludes objective data (ACT 21, spirometry) support an improving clinical picture";
  item.halfCredit = "Objective data improved";
});

updateItem('Week3_Patient_A_Wednesday', '2C.6', item => {
  item.fullCredit = "Notes spirometry and ACT score served as primary lung function assessment tools in lieu of PEF";
  item.halfCredit = "Spirometry used";
});

updateItem('Week3_Patient_A_Wednesday', '2C.7', item => {
  item.fullCredit = "Notes rhinitis improvement is based on patient report / clinical history";
  item.halfCredit = "Rhinitis improved";
});

updateItem('Week3_Patient_A_Wednesday', '3A.2', item => {
  item.fullCredit = "Labels asthma control status as well controlled / improved / near goal (ACT 21) in Assessment";
  item.halfCredit = "Asthma improved";
});

updateItem('Week3_Patient_A_Wednesday', '3A.4', item => {
  item.fullCredit = "Cites reduced daytime symptom frequency (2 days/week) in Assessment to support control status";
  item.halfCredit = "Cites symptoms 2x/week";
});

updateItem('Week3_Patient_A_Wednesday', '3A.5', item => {
  item.fullCredit = "Cites reduced reliever use in Assessment";
  item.halfCredit = "Reduced reliever use";
});

updateItem('Week3_Patient_A_Wednesday', '3A.6', item => {
  item.fullCredit = "Documents nighttime symptom frequency (zero or rare nocturnal awakenings) in Assessment";
  item.halfCredit = "No night waking";
});

updateItem('Week3_Patient_A_Wednesday', '3A.7', item => {
  item.fullCredit = "References improved activity tolerance in Assessment";
  item.halfCredit = "Better exercise tolerance";
});

updateItem('Week3_Patient_A_Wednesday', '3A.8', item => {
  item.fullCredit = "Documents absence of exacerbations, OCS bursts, or acute care visits in Assessment";
  item.halfCredit = "No recent flares";
});

updateItem('Week3_Patient_A_Wednesday', '3A.9', item => {
  item.fullCredit = "Cites GINA guideline framework in Assessment";
  item.halfCredit = "Cites guidelines";
});

updateItem('Week3_Patient_A_Wednesday', '3A.10', item => {
  item.fullCredit = "Evaluates GINA control domains (symptoms, reliever use, exacerbations, adherence, technique)";
  item.halfCredit = "Evaluates control domains";
});

updateItem('Week3_Patient_A_Wednesday', '3A.11', item => {
  item.fullCredit = "Prioritizes inhaler technique correction over medication escalation per GINA (award full credit even if interface escalation option was selected)";
  item.halfCredit = "Technique correction discussed";
});

updateItem('Week3_Patient_A_Wednesday', '3A.12', item => {
  item.fullCredit = "Provides clinical rationale for withholding escalation (ACT 21, technique errors explain exertional symptoms; award full credit even if interface escalation option was selected)";
  item.halfCredit = "Clinical rationale provided";
});

updateItem('Week3_Patient_A_Wednesday', '3A.14', item => {
  item.fullCredit = "Cites good adherence as key contributor to clinical improvement";
  item.halfCredit = "Good adherence";
});

updateItem('Week3_Patient_A_Wednesday', '3A.15', item => {
  item.fullCredit = "Links allergic rhinitis improvement to asthma stability (one airway concept)";
  item.halfCredit = "Rhinitis link";
});

updateItem('Week3_Patient_A_Wednesday', '3A.16', item => {
  item.fullCredit = "States current asthma therapy is effective and well tolerated";
  item.halfCredit = "Therapy effective";
});

updateItem('Week3_Patient_A_Wednesday', '3B.1', item => {
  item.fullCredit = "Identifies inhaler technique deficiency as a clinical focus or problem in Assessment";
  item.halfCredit = "Technique issue";
});

updateItem('Week3_Patient_A_Wednesday', '3B.2', item => {
  item.fullCredit = "Addresses failure to fully exhale before inhalation in Assessment";
  item.halfCredit = "Exhalation issue";
});

updateItem('Week3_Patient_A_Wednesday', '3B.3', item => {
  item.fullCredit = "Addresses failure to hold breath for 5-10 seconds after inhalation in Assessment";
  item.halfCredit = "Breath hold issue";
});

updateItem('Week3_Patient_A_Wednesday', '3B.4', item => {
  item.fullCredit = "Links technique errors to residual exertional symptoms";
  item.halfCredit = "Technique affects symptoms";
});

updateItem('Week3_Patient_A_Wednesday', '3B.5', item => {
  item.fullCredit = "Classifies technique deficiency as an implementation issue rather than medication failure";
  item.halfCredit = "Implementation issue";
});

updateItem('Week3_Patient_A_Wednesday', '3B.6', item => {
  item.fullCredit = "States technique correction should precede any consideration of therapy escalation";
  item.halfCredit = "Correct technique first";
});

updateItem('Week3_Patient_A_Wednesday', '3B.7', item => {
  item.fullCredit = "Plans teach-back demonstration to confirm technique mastery";
  item.halfCredit = "Teach-back planned";
});

updateItem('Week3_Patient_A_Wednesday', '3B.8', item => {
  item.fullCredit = "Plans to reassess inhaler technique at next visit";
  item.halfCredit = "Reassess technique";
});

updateItem('Week3_Patient_A_Wednesday', '3B.9', item => {
  item.fullCredit = "Cites GINA recommendation to verify and correct technique before escalating therapy";
  item.halfCredit = "GINA recommendation";
});

updateItem('Week3_Patient_A_Wednesday', '3B.10', item => {
  item.fullCredit = "Explains that incorrect technique reduces drug lung deposition";
  item.halfCredit = "Reduces drug deposition";
});

updateItem('Week3_Patient_A_Wednesday', '3C.1', item => {
  item.fullCredit = "Identifies allergic rhinitis as a well-controlled comorbidity in Assessment or note";
  item.halfCredit = "Rhinitis noted";
});

updateItem('Week3_Patient_A_Wednesday', '3C.2', item => {
  item.fullCredit = "Labels rhinitis control status as significantly improved";
  item.halfCredit = "Rhinitis improved";
});

updateItem('Week3_Patient_A_Wednesday', '3C.3', item => {
  item.fullCredit = "Links rhinitis improvement to consistent fluticasone nasal spray use";
  item.halfCredit = "Nasal spray benefit";
});

updateItem('Week3_Patient_A_Wednesday', '3C.4', item => {
  item.fullCredit = "Links improved upper airway control to lower airway stability";
  item.halfCredit = "Upper-lower airway link";
});

updateItem('Week3_Patient_A_Wednesday', '3C.5', item => {
  item.fullCredit = "States current rhinitis therapy is effective";
  item.halfCredit = "Rhinitis therapy effective";
});

updateItem('Week3_Patient_A_Wednesday', '3C.6', item => {
  item.fullCredit = "States rhinitis therapy is well tolerated";
  item.halfCredit = "Well tolerated";
});

updateItem('Week3_Patient_A_Wednesday', '3C.7', item => {
  item.fullCredit = "States no therapeutic change is indicated for allergic rhinitis";
  item.halfCredit = "No change needed";
});

updateItem('Week3_Patient_A_Wednesday', '3C.8', item => {
  item.fullCredit = "Cites intranasal corticosteroid as guideline-appropriate therapy";
  item.halfCredit = "Guideline appropriate";
});

updateItem('Week3_Patient_A_Wednesday', '3C.9', item => {
  item.fullCredit = "Recommends continued allergen avoidance strategies";
  item.halfCredit = "Allergen avoidance";
});

updateItem('Week3_Patient_A_Wednesday', '3C.10', item => {
  item.fullCredit = "Reinforces adherence to daily nasal spray in Assessment or Plan";
  item.halfCredit = "Reinforce adherence";
});

updateItem('Week3_Patient_A_Wednesday', '3D.1', item => {
  item.fullCredit = "Identifies asthma self-management and adherence as an Assessment focus";
  item.halfCredit = "Self-management noted";
});

updateItem('Week3_Patient_A_Wednesday', '3D.2', item => {
  item.fullCredit = "Labels self-management status as improved / engaged";
  item.halfCredit = "Self-management improved";
});

updateItem('Week3_Patient_A_Wednesday', '3D.3', item => {
  item.fullCredit = "Educates on dual maintenance and reliever function of Symbicort SMART therapy";
  item.halfCredit = "SMART education";
});

updateItem('Week3_Patient_A_Wednesday', '3D.6', item => {
  item.fullCredit = "Reinforces SMART inhaler dosing and technique steps distinguishing controller from reliever role";
  item.halfCredit = "Dosing reinforced";
});

updateItem('Week3_Patient_A_Wednesday', '3D.7', item => {
  item.fullCredit = "States continued education and adherence reinforcement is clinically appropriate";
  item.halfCredit = "Continue education";
});

updateItem('Week3_Patient_A_Wednesday', '3D.8', item => {
  item.fullCredit = "Reviews self-management targets (trigger avoidance, SMART review, adherence, symptom monitoring)";
  item.halfCredit = "Targets reviewed";
});

updateItem('Week3_Patient_A_Wednesday', '3D.9', item => {
  item.fullCredit = "Links self-management improvement to overall clinical outcome improvement";
  item.halfCredit = "Self-management benefits";
});

updateItem('Week3_Patient_A_Wednesday', '3D.10', item => {
  item.fullCredit = "Cites GINA guided self-management recommendations";
  item.halfCredit = "GINA self-management";
});

updateItem('Week3_Patient_A_Wednesday', '3D.11', item => {
  item.fullCredit = "Encourages ongoing symptom monitoring as a self-management skill";
  item.halfCredit = "Symptom monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '3D.12', item => {
  item.fullCredit = "Documents improved functional and activity outcome markers";
  item.halfCredit = "Improved function";
});

updateItem('Week3_Patient_A_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a clinical focus in Assessment or Plan";
  item.halfCredit = "Vaccines noted";
});

updateItem('Week3_Patient_A_Wednesday', '3E.6', item => {
  item.fullCredit = "Cites GINA recommendation for keeping respiratory vaccines current";
  item.halfCredit = "Vaccine guidelines";
});

updateItem('Week3_Patient_A_Wednesday', '3E.7', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) and/or Tdap booster";
  item.halfCredit = "Recommends vaccines";
});

updateItem('Week3_Patient_A_Wednesday', '3E.8', item => {
  item.fullCredit = "States preventive care optimization remains appropriate and actionable";
  item.halfCredit = "Preventive care appropriate";
});

updateItem('Week3_Patient_A_Wednesday', '4A.1', item => {
  item.fullCredit = "Continues Symbicort (budesonide/formoterol 160/4.5 mcg) 1 puff BID maintenance + 1 puff PRN reliever without escalation (award full credit even if interface escalation option was selected)";
  item.halfCredit = "Continues controller";
});

updateItem('Week3_Patient_A_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies SMART maintenance dose (1 inhalation twice daily)";
  item.halfCredit = "Maintenance dose specified";
});

updateItem('Week3_Patient_A_Wednesday', '4A.3', item => {
  item.fullCredit = "Specifies SMART reliever dose (1 inhalation PRN as needed)";
  item.halfCredit = "Reliever dose specified";
});

updateItem('Week3_Patient_A_Wednesday', '4A.4', item => {
  item.fullCredit = "Provides clinical justification for maintaining therapy or withholding escalation (technique correction, ACT 21)";
  item.halfCredit = "Justification provided";
});

updateItem('Week3_Patient_A_Wednesday', '4A.5', item => {
  item.fullCredit = "Explains that exertional symptoms stem from technique error rather than medication insufficiency";
  item.halfCredit = "Technique error explains symptoms";
});

updateItem('Week3_Patient_A_Wednesday', '4A.6', item => {
  item.fullCredit = "Names guideline-supported SMART regimen (GINA Track 1 Step 3)";
  item.halfCredit = "Guideline regimen named";
});

updateItem('Week3_Patient_A_Wednesday', '4A.7', item => {
  item.fullCredit = "Discusses step-down eligibility criteria after sustained control (3 months)";
  item.halfCredit = "Step-down discussed";
});

updateItem('Week3_Patient_A_Wednesday', '4A.8', item => {
  item.fullCredit = "Advises continuing ICS controller during viral illness";
  item.halfCredit = "Continue during illness";
});

updateItem('Week3_Patient_A_Wednesday', '4A.9', item => {
  item.fullCredit = "Reinforces written asthma action plan in Plan";
  item.halfCredit = "Action plan reinforced";
});

updateItem('Week3_Patient_A_Wednesday', '4A.10', item => {
  item.fullCredit = "Reinforces tobacco / vaping avoidance in Plan";
  item.halfCredit = "Tobacco avoidance";
});

updateItem('Week3_Patient_A_Wednesday', '4A.11', item => {
  item.fullCredit = "Encourages physical activity with pre-exercise inhaler use if needed";
  item.halfCredit = "Pre-exercise inhaler";
});

updateItem('Week3_Patient_A_Wednesday', '4B.1', item => {
  item.fullCredit = "Plans detailed inhaler technique review in Plan";
  item.halfCredit = "Review technique";
});

updateItem('Week3_Patient_A_Wednesday', '4B.2', item => {
  item.fullCredit = "Plans physical demonstration of inhaler technique in Plan";
  item.halfCredit = "Demonstrate technique";
});

updateItem('Week3_Patient_A_Wednesday', '4B.3', item => {
  item.fullCredit = "Instructs patient to fully exhale away from device before inhalation";
  item.halfCredit = "Exhale instruction";
});

updateItem('Week3_Patient_A_Wednesday', '4B.4', item => {
  item.fullCredit = "Instructs patient to hold breath for 5-10 seconds after inhalation";
  item.halfCredit = "Breath hold instruction";
});

updateItem('Week3_Patient_A_Wednesday', '4B.5', item => {
  item.fullCredit = "Utilizes teach-back demonstration to confirm technique mastery";
  item.halfCredit = "Teach-back utilized";
});

updateItem('Week3_Patient_A_Wednesday', '4B.6', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at next visit";
  item.halfCredit = "Reassess technique";
});

updateItem('Week3_Patient_A_Wednesday', '4B.7', item => {
  item.fullCredit = "References device-specific technique checklist or key steps";
  item.halfCredit = "Technique steps";
});

updateItem('Week3_Patient_A_Wednesday', '4C.1', item => {
  item.fullCredit = "Documents continuation of cetirizine 10 mg PO daily in Plan";
  item.halfCredit = "Continue cetirizine";
});

updateItem('Week3_Patient_A_Wednesday', '4C.2', item => {
  item.fullCredit = "Documents continuation of fluticasone nasal spray 50 mcg daily in Plan";
  item.halfCredit = "Continue fluticasone";
});

updateItem('Week3_Patient_A_Wednesday', '4C.3', item => {
  item.fullCredit = "Documents adherence reinforcement for intranasal corticosteroid in Plan";
  item.halfCredit = "Reinforce nasal spray";
});

updateItem('Week3_Patient_A_Wednesday', '4C.4', item => {
  item.fullCredit = "Reinforces allergen avoidance strategies in Plan";
  item.halfCredit = "Allergen avoidance";
});

updateItem('Week3_Patient_A_Wednesday', '4C.5', item => {
  item.fullCredit = "States rhinitis pharmacotherapy requires no changes";
  item.halfCredit = "No rhinitis changes";
});

updateItem('Week3_Patient_A_Wednesday', '4C.6', item => {
  item.fullCredit = "Cites GINA alignment for continuing intranasal corticosteroid";
  item.halfCredit = "GINA alignment";
});

updateItem('Week3_Patient_A_Wednesday', '4C.7', item => {
  item.fullCredit = "Links continued rhinitis control to asthma stability";
  item.halfCredit = "Rhinitis link";
});

updateItem('Week3_Patient_A_Wednesday', '4D.1', item => {
  item.fullCredit = "Reinforces controller vs reliever concepts in Plan";
  item.halfCredit = "Controller vs reliever";
});

updateItem('Week3_Patient_A_Wednesday', '4D.2', item => {
  item.fullCredit = "Reviews dual role of SMART therapy in Plan";
  item.halfCredit = "Dual role reviewed";
});

updateItem('Week3_Patient_A_Wednesday', '4D.3', item => {
  item.fullCredit = "Praises and reinforces adherence to maintenance dosing in Plan";
  item.halfCredit = "Praise adherence";
});

updateItem('Week3_Patient_A_Wednesday', '4D.4', item => {
  item.fullCredit = "Reviews trigger avoidance strategies in Plan";
  item.halfCredit = "Trigger avoidance";
});

updateItem('Week3_Patient_A_Wednesday', '4D.5', item => {
  item.fullCredit = "Encourages ongoing symptom self-monitoring in Plan";
  item.halfCredit = "Symptom monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4D.6', item => {
  item.fullCredit = "Counsels on maximum daily Symbicort inhalation limit (up to 8-12 puffs/day)";
  item.halfCredit = "Max puffs limit";
});

updateItem('Week3_Patient_A_Wednesday', '4D.7', item => {
  item.fullCredit = "Educates on red flag symptoms and urgent care guidance";
  item.halfCredit = "Red flags guidance";
});

updateItem('Week3_Patient_A_Wednesday', '4D.8', item => {
  item.fullCredit = "Reinforces written asthma action plan use";
  item.halfCredit = "Action plan reinforced";
});

updateItem('Week3_Patient_A_Wednesday', '4D.9', item => {
  item.fullCredit = "Educates on importance of respiratory vaccines in Plan";
  item.halfCredit = "Vaccine education";
});

updateItem('Week3_Patient_A_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Pneumococcal vaccine";
});

updateItem('Week3_Patient_A_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Tdap booster";
});

updateItem('Week3_Patient_A_Wednesday', '4E.5', item => {
  item.fullCredit = "Advises keeping respiratory vaccines current per GINA in Plan";
  item.halfCredit = "Vaccines current";
});

updateItem('Week3_Patient_A_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans ACT score monitoring at follow-up (target >=20)";
  item.halfCredit = "ACT monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans daytime symptom frequency monitoring at follow-up";
  item.halfCredit = "Symptom monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans reliever use frequency monitoring at follow-up";
  item.halfCredit = "Reliever monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans nighttime awakening monitoring at follow-up";
  item.halfCredit = "Night waking monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans exacerbation monitoring at follow-up";
  item.halfCredit = "Exacerbation monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans inhaler technique reassessment at next visit";
  item.halfCredit = "Technique reassessment";
});

updateItem('Week3_Patient_A_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans medication adherence monitoring at follow-up";
  item.halfCredit = "Adherence monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans allergic rhinitis symptom control monitoring at follow-up";
  item.halfCredit = "Rhinitis monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4F.9', item => {
  item.fullCredit = "Plans periodic spirometry reassessment per GINA timeline (3-6 months)";
  item.halfCredit = "PFT monitoring";
});

updateItem('Week3_Patient_A_Wednesday', '4F.10', item => {
  item.fullCredit = "Flags treatment escalation reassessment only if control worsens after verified technique";
  item.halfCredit = "Escalation reassessment";
});

updateItem('Week3_Patient_A_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe in 4-6 weeks or 1-3 months";
  item.halfCredit = "Follow-up interval specified";
});

updateItem('Week3_Patient_A_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans follow-up visit for reassessment of asthma control";
  item.halfCredit = "Reassess control";
});

updateItem('Week3_Patient_A_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans to reassess inhaler technique at future visit";
  item.halfCredit = "Reassess technique";
});

updateItem('Week3_Patient_A_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans to reassess symptom burden and ACT score at future visit";
  item.halfCredit = "Reassess symptom burden";
});

updateItem('Week3_Patient_A_Wednesday', '4G.5', item => {
  item.fullCredit = "Documents contingency plan for therapy adjustment if control worsens";
  item.halfCredit = "Contingency plan";
});

updateItem('Week3_Patient_A_Wednesday', '4G.6', item => {
  item.fullCredit = "Documents evaluation of step-down eligibility after sustained control";
  item.halfCredit = "Step-down evaluation";
});

updateItem('Week3_Patient_A_Wednesday', '5A.3', item => {
  item.fullCredit = "Assessment structures prioritized clinical problems (accepts focused asthma control and technique problem list)";
  item.halfCredit = "Prioritized problem list";
});

updateItem('Week3_Patient_A_Wednesday', '5A.4', item => {
  item.fullCredit = "Plan elements map to assessed problems (maintaining SMART therapy, correcting technique, rhinitis, vaccines)";
  item.halfCredit = "Plan mapping";
});

updateItem('Week3_Patient_A_Wednesday', '5B.2', item => {
  item.fullCredit = "Reports BMI (27.5) with standard units (kg/m²) or classification";
  item.halfCredit = "Reports BMI";
});

updateItem('Week3_Patient_A_Wednesday', '5B.3', item => {
  item.fullCredit = "States specific target criteria (ACT >= 20, reliever use <=2x/wk)";
  item.halfCredit = "Target criteria stated";
});

updateItem('Week3_Patient_A_Wednesday', '5B.4', item => {
  item.fullCredit = "Provides concrete, actionable plan details (SMART dosing, technique teach-back, follow-up timing)";
  item.halfCredit = "Actionable plan details";
});

updateItem('Week3_Patient_A_Wednesday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 guideline rationale to support recommendations";
  item.halfCredit = "GINA rationale cited";
});

updateItem('Week3_Patient_A_Wednesday', '5C.3', item => {
  item.fullCredit = "Prioritizes inhaler technique correction over drug escalation per GINA (award full credit even if interface step-up card was selected)";
  item.halfCredit = "Technique correction prioritized";
});


// ==========================================
// SARAH THOMPSON THURSDAY
// ==========================================

updateItem('Week3_Patient_A_Thursday', '1B.5', item => {
  item.fullCredit = "Documents activity limitation status in subjective history (denies activity limitations / unrestricted)";
  item.halfCredit = "Denies activity limits";
});

updateItem('Week3_Patient_A_Thursday', '1B.6', item => {
  item.fullCredit = "Documents return to hiking or outdoor activities";
  item.halfCredit = "Outdoor activities";
});

updateItem('Week3_Patient_A_Thursday', '1B.7', item => {
  item.fullCredit = "Documents ability to keep up with children";
  item.halfCredit = "Keeps up with kids";
});

updateItem('Week3_Patient_A_Thursday', '1B.16', item => {
  item.fullCredit = "Documents that inhaler technique was reviewed and confirmed at prior visit";
  item.halfCredit = "Technique confirmed";
});

updateItem('Week3_Patient_A_Thursday', '1B.17', item => {
  item.fullCredit = "Documents denial of affordability concerns or adverse drug effects";
  item.halfCredit = "No affordability/adverse issues";
});

updateItem('Week3_Patient_A_Thursday', '1C.2', item => {
  item.fullCredit = "Lists allergic rhinitis in PMH, problem list, or allergy history";
  item.halfCredit = "Rhinitis in PMH";
});

updateItem('Week3_Patient_A_Thursday', '1C.3', item => {
  item.fullCredit = "Documents seasonal allergies / spring-fall allergy triggers";
  item.halfCredit = "Seasonal allergies";
});

updateItem('Week3_Patient_A_Thursday', '1C.8', item => {
  item.fullCredit = "Documents allergic rhinitis control status (well controlled on fluticasone nasal spray)";
  item.halfCredit = "Rhinitis controlled";
});

updateItem('Week3_Patient_A_Thursday', '1D.7', item => {
  item.fullCredit = "Documents regular physical activity in social history (active lifestyle / exercise)";
  item.halfCredit = "Active lifestyle";
});

updateItem('Week3_Patient_A_Thursday', '1D.8', item => {
  item.fullCredit = "Documents return to hiking / outdoor activities in social history";
  item.halfCredit = "Hiking mentioned";
});

updateItem('Week3_Patient_A_Thursday', '1D.9', item => {
  item.fullCredit = "Documents teacher occupation without classroom trigger issues";
  item.halfCredit = "Teacher occupation";
});

updateItem('Week3_Patient_A_Thursday', '1D.10', item => {
  item.fullCredit = "Documents household composition (husband and two children) with unrestricted physical activity";
  item.halfCredit = "Household noted";
});

updateItem('Week3_Patient_A_Thursday', '1E.16', item => {
  item.fullCredit = "Connects rhinitis medications (fluticasone, cetirizine) to controlled rhinitis status";
  item.halfCredit = "Rhinitis medications connected";
});

updateItem('Week3_Patient_A_Thursday', '1F.2', item => {
  item.fullCredit = "Documents denial of adverse drug effects (thrush, tremor, palpitations) in ROS";
  item.halfCredit = "Denies side effects";
});

updateItem('Week3_Patient_A_Thursday', '1F.3', item => {
  item.fullCredit = "Documents denial of affordability concerns in ROS";
  item.halfCredit = "Denies cost issues";
});

updateItem('Week3_Patient_A_Thursday', '1F.4', item => {
  item.fullCredit = "Documents rhinitis symptom stability in ROS";
  item.halfCredit = "Rhinitis stable";
});

updateItem('Week3_Patient_A_Thursday', '1F.6', item => {
  item.fullCredit = "Documents absence of activity limitations in ROS";
  item.halfCredit = "No activity limits";
});

updateItem('Week3_Patient_A_Thursday', '1G.1', item => {
  item.fullCredit = "Documents patient goal of maintaining asthma control";
  item.halfCredit = "Maintain control";
});

updateItem('Week3_Patient_A_Thursday', '1G.2', item => {
  item.fullCredit = "Assesses patient understanding of self-management plan";
  item.halfCredit = "Understands plan";
});

updateItem('Week3_Patient_A_Thursday', '1G.3', item => {
  item.fullCredit = "Documents patient goal of maintaining full physical activity and endurance";
  item.halfCredit = "Maintain activity";
});

updateItem('Week3_Patient_A_Thursday', '1G.5', item => {
  item.fullCredit = "Documents denial of affordability or adverse effect concerns";
  item.halfCredit = "No barriers";
});

updateItem('Week3_Patient_A_Thursday', '2B.6', item => {
  item.fullCredit = "Interprets PFT values (FEV1 2.9 L / 85%, FEV1/FVC 0.77) as consistent with well-controlled asthma";
  item.halfCredit = "Reports PFT values";
});

updateItem('Week3_Patient_A_Thursday', '2C.3', item => {
  item.fullCredit = "Compares FEV1/FVC 0.77 against the 0.70 obstruction threshold (no fixed obstruction)";
  item.halfCredit = "Compares ratio to 0.70";
});

updateItem('Week3_Patient_A_Thursday', '2C.4', item => {
  item.fullCredit = "Notes single-visit PFT limitations or evaluates spirometry as demonstrating stable lung function";
  item.halfCredit = "PFT interpretation";
});

updateItem('Week3_Patient_A_Thursday', '3A.1', item => {
  item.fullCredit = "Concludes asthma is well controlled on SMART therapy (ACT 22) (accepts explicit statement, clinical inquiry, or question header 'Is her asthma well controlled?')";
  item.halfCredit = "Notes asthma is well controlled";
});

updateItem('Week3_Patient_A_Thursday', '3A.3', item => {
  item.fullCredit = "Cites GINA guideline as assessment framework";
  item.halfCredit = "Cites guidelines";
});

updateItem('Week3_Patient_A_Thursday', '3A.4', item => {
  item.fullCredit = "Cites GINA symptom frequency criterion (symptoms <=2x/wk)";
  item.halfCredit = "Symptom frequency criterion";
});

updateItem('Week3_Patient_A_Thursday', '3A.5', item => {
  item.fullCredit = "Cites GINA nighttime awakening criterion (no nighttime awakenings)";
  item.halfCredit = "Night waking criterion";
});

updateItem('Week3_Patient_A_Thursday', '3A.6', item => {
  item.fullCredit = "Cites GINA reliever use criterion (reliever use <=2x/wk)";
  item.halfCredit = "Reliever use criterion";
});

updateItem('Week3_Patient_A_Thursday', '3A.7', item => {
  item.fullCredit = "Cites GINA activity limitation criterion (no activity limitation)";
  item.halfCredit = "Activity limitation criterion";
});

updateItem('Week3_Patient_A_Thursday', '3A.9', item => {
  item.fullCredit = "Explicitly assesses therapy effectiveness (Symbicort SMART is highly effective)";
  item.halfCredit = "Therapy effective";
});

updateItem('Week3_Patient_A_Thursday', '3A.10', item => {
  item.fullCredit = "Addresses tolerability of current therapy (well tolerated, no adverse effects)";
  item.halfCredit = "Well tolerated";
});

updateItem('Week3_Patient_A_Thursday', '3A.11', item => {
  item.fullCredit = "References sustained improvement since SMART initiation (ACT score trend 16 -> 21 -> 22)";
  item.halfCredit = "ACT trend noted";
});

updateItem('Week3_Patient_A_Thursday', '3A.12', item => {
  item.fullCredit = "Explicitly states minimal symptom burden in Assessment";
  item.halfCredit = "Minimal symptoms";
});

updateItem('Week3_Patient_A_Thursday', '3A.14', item => {
  item.fullCredit = "Evaluates rare nighttime awakenings (once/month) against ongoing exacerbation risk";
  item.halfCredit = "Rare night awakenings";
});

updateItem('Week3_Patient_A_Thursday', '3A.15', item => {
  item.fullCredit = "Documents absence of activity limitation in Assessment";
  item.halfCredit = "No activity limits";
});

updateItem('Week3_Patient_A_Thursday', '3A.16', item => {
  item.fullCredit = "Interprets FEV1/FVC 0.77 against 0.70 obstruction threshold in Assessment";
  item.halfCredit = "Interprets ratio";
});

updateItem('Week3_Patient_A_Thursday', '3A.18', item => {
  item.fullCredit = "Explicitly states no escalation of therapy is indicated (maintains current SMART regimen)";
  item.halfCredit = "No escalation";
});

updateItem('Week3_Patient_A_Thursday', '3A.20', item => {
  item.fullCredit = "Confirms medication adherence as excellent and consistent";
  item.halfCredit = "Good adherence";
});

updateItem('Week3_Patient_A_Thursday', '3A.21', item => {
  item.fullCredit = "Addresses confirmation of inhaler technique mastery";
  item.halfCredit = "Technique mastery";
});

updateItem('Week3_Patient_A_Thursday', '3A.22', item => {
  item.fullCredit = "Addresses absence of affordability and adverse effect concerns in Assessment";
  item.halfCredit = "No barriers";
});

updateItem('Week3_Patient_A_Thursday', '3C.1', item => {
  item.fullCredit = "Assesses allergic rhinitis control status as well controlled on daily therapy";
  item.halfCredit = "Rhinitis controlled";
});

updateItem('Week3_Patient_A_Thursday', '3C.3', item => {
  item.fullCredit = "Assesses rhinitis regimen completeness (fluticasone nasal spray + cetirizine)";
  item.halfCredit = "Rhinitis meds noted";
});

updateItem('Week3_Patient_A_Thursday', '3C.4', item => {
  item.fullCredit = "Assesses rhinitis therapy effectiveness";
  item.halfCredit = "Therapy effective";
});

updateItem('Week3_Patient_A_Thursday', '3C.5', item => {
  item.fullCredit = "Discusses rhinitis-asthma comorbidity (one airway concept)";
  item.halfCredit = "Rhinitis-asthma link";
});

updateItem('Week3_Patient_A_Thursday', '3C.6', item => {
  item.fullCredit = "States no therapeutic change is indicated for allergic rhinitis";
  item.halfCredit = "No rhinitis change";
});

updateItem('Week3_Patient_A_Thursday', '3C.7', item => {
  item.fullCredit = "Notes intranasal corticosteroid class appropriateness";
  item.halfCredit = "Class appropriate";
});

updateItem('Week3_Patient_A_Thursday', '3C.8', item => {
  item.fullCredit = "Notes oral antihistamine class appropriateness";
  item.halfCredit = "Antihistamine appropriate";
});

updateItem('Week3_Patient_A_Thursday', '3C.9', item => {
  item.fullCredit = "Notes seasonal allergy etiology and allergen avoidance";
  item.halfCredit = "Allergen avoidance";
});

updateItem('Week3_Patient_A_Thursday', '3D.1', item => {
  item.fullCredit = "Assesses adherence and self-management mastery in Assessment";
  item.halfCredit = "Self-management noted";
});

updateItem('Week3_Patient_A_Thursday', '3D.2', item => {
  item.fullCredit = "Assesses inhaler technique mastery";
  item.halfCredit = "Technique mastery";
});

updateItem('Week3_Patient_A_Thursday', '3D.3', item => {
  item.fullCredit = "Assesses patient understanding of management plan";
  item.halfCredit = "Understands plan";
});

updateItem('Week3_Patient_A_Thursday', '3D.6', item => {
  item.fullCredit = "States rationale for reinforcing self-management principles";
  item.halfCredit = "Reinforce self-management";
});

updateItem('Week3_Patient_A_Thursday', '3D.7', item => {
  item.fullCredit = "Links unrestricted activity level to self-management success";
  item.halfCredit = "Activity level linked";
});

updateItem('Week3_Patient_A_Thursday', '3D.8', item => {
  item.fullCredit = "Documents return to hiking and outdoor activities";
  item.halfCredit = "Hiking noted";
});

updateItem('Week3_Patient_A_Thursday', '3D.9', item => {
  item.fullCredit = "Notes absence of affordability or adverse effect concerns in self-management context";
  item.halfCredit = "No barriers";
});

updateItem('Week3_Patient_A_Thursday', '3E.5', item => {
  item.fullCredit = "Discusses pneumococcal vaccine (PCV20) relevance to chronic asthma";
  item.halfCredit = "Pneumococcal vaccine";
});

updateItem('Week3_Patient_A_Thursday', '3E.6', item => {
  item.fullCredit = "Frames preventive care optimization as a clinical priority";
  item.halfCredit = "Preventive care priority";
});

updateItem('Week3_Patient_A_Thursday', '3E.7', item => {
  item.fullCredit = "Frames immunization gaps (PCV20, Tdap) as actionable plan items";
  item.halfCredit = "Vaccines actionable";
});

updateItem('Week3_Patient_A_Thursday', '4A.1', item => {
  item.fullCredit = "Names budesonide/formoterol (Symbicort) explicitly in Plan (or continues SMART regimen)";
  item.halfCredit = "Continues SMART";
});

updateItem('Week3_Patient_A_Thursday', '4A.2', item => {
  item.fullCredit = "Specifies dose (160/4.5 mcg) in Plan";
  item.halfCredit = "Dose specified";
});

updateItem('Week3_Patient_A_Thursday', '4A.3', item => {
  item.fullCredit = "Specifies maintenance dosing (1 inhalation twice daily) in Plan";
  item.halfCredit = "Maintenance dose specified";
});

updateItem('Week3_Patient_A_Thursday', '4A.4', item => {
  item.fullCredit = "Specifies PRN dosing (1 inhalation as needed for symptoms) in Plan";
  item.halfCredit = "PRN dose specified";
});

updateItem('Week3_Patient_A_Thursday', '4A.5', item => {
  item.fullCredit = "Explicitly states no escalation of therapy is indicated (maintains current regimen)";
  item.halfCredit = "No escalation";
});

updateItem('Week3_Patient_A_Thursday', '4A.9', item => {
  item.fullCredit = "Includes inhaler technique reinforcement in Plan";
  item.halfCredit = "Technique reinforced";
});

updateItem('Week3_Patient_A_Thursday', '4B.1', item => {
  item.fullCredit = "Includes written asthma action plan review in Plan";
  item.halfCredit = "Action plan review";
});

updateItem('Week3_Patient_A_Thursday', '4B.2', item => {
  item.fullCredit = "Addresses early recognition of worsening symptoms in Plan";
  item.halfCredit = "Early recognition";
});

updateItem('Week3_Patient_A_Thursday', '4B.3', item => {
  item.fullCredit = "Discusses viral illness management strategies in Plan";
  item.halfCredit = "Viral illness plan";
});

updateItem('Week3_Patient_A_Thursday', '4B.4', item => {
  item.fullCredit = "Provides prompt medical evaluation guidance in Plan";
  item.halfCredit = "Prompt evaluation";
});

updateItem('Week3_Patient_A_Thursday', '4B.7', item => {
  item.fullCredit = "Mentions trigger avoidance in Plan";
  item.halfCredit = "Trigger avoidance";
});

updateItem('Week3_Patient_A_Thursday', '4C.1', item => {
  item.fullCredit = "Addresses continuation of rhinitis medication (cetirizine 10 mg + fluticasone spray) in Plan";
  item.halfCredit = "Continue rhinitis meds";
});

updateItem('Week3_Patient_A_Thursday', '4C.2', item => {
  item.fullCredit = "Outlines plan for escalating rhinitis therapy if symptoms worsen";
  item.halfCredit = "Rhinitis escalation plan";
});

updateItem('Week3_Patient_A_Thursday', '4C.3', item => {
  item.fullCredit = "Reinforces allergen avoidance measures in Plan";
  item.halfCredit = "Allergen avoidance";
});

updateItem('Week3_Patient_A_Thursday', '4C.4', item => {
  item.fullCredit = "Addresses appropriateness and continuation of current rhinitis therapy";
  item.halfCredit = "Continue therapy";
});

updateItem('Week3_Patient_A_Thursday', '4C.5', item => {
  item.fullCredit = "Specifies fluticasone nasal spray dosing continuation in Plan";
  item.halfCredit = "Fluticasone dose specified";
});

updateItem('Week3_Patient_A_Thursday', '4C.6', item => {
  item.fullCredit = "Links upper airway / rhinitis control to sustained asthma stability";
  item.halfCredit = "Upper airway link";
});

updateItem('Week3_Patient_A_Thursday', '4D.1', item => {
  item.fullCredit = "Explicitly reinforces SMART principles and dual maintenance/reliever education";
  item.halfCredit = "SMART principles reinforced";
});

updateItem('Week3_Patient_A_Thursday', '4D.3', item => {
  item.fullCredit = "Reviews trigger avoidance strategies in Plan";
  item.halfCredit = "Trigger avoidance";
});

updateItem('Week3_Patient_A_Thursday', '4D.4', item => {
  item.fullCredit = "Mentions inhaler technique reinforcement in Plan";
  item.halfCredit = "Technique reinforcement";
});

updateItem('Week3_Patient_A_Thursday', '4D.6', item => {
  item.fullCredit = "Mentions written asthma action plan review in Plan";
  item.halfCredit = "Action plan review";
});

updateItem('Week3_Patient_A_Thursday', '4D.7', item => {
  item.fullCredit = "Discusses viral illness management and anticipatory guidance";
  item.halfCredit = "Viral illness guidance";
});

updateItem('Week3_Patient_A_Thursday', '4D.8', item => {
  item.fullCredit = "Lists early recognition of worsening symptoms education in Plan";
  item.halfCredit = "Early recognition";
});

updateItem('Week3_Patient_A_Thursday', '4E.1', item => {
  item.fullCredit = "Lists ACT score as a monitoring parameter in Plan (target >=20)";
  item.halfCredit = "ACT monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4E.2', item => {
  item.fullCredit = "Lists daytime symptom frequency as a monitoring parameter in Plan";
  item.halfCredit = "Symptom frequency monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4E.3', item => {
  item.fullCredit = "Lists reliever inhaler use frequency as a monitoring parameter in Plan";
  item.halfCredit = "Reliever frequency monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4E.4', item => {
  item.fullCredit = "Lists nighttime symptom frequency as a monitoring parameter in Plan";
  item.halfCredit = "Night waking monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4E.6', item => {
  item.fullCredit = "Frames medication adherence as a monitoring parameter in Plan";
  item.halfCredit = "Adherence monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4E.7', item => {
  item.fullCredit = "Lists inhaler technique as a monitoring parameter in Plan";
  item.halfCredit = "Technique monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4E.8', item => {
  item.fullCredit = "Lists allergic rhinitis symptom control as a monitoring parameter in Plan";
  item.halfCredit = "Rhinitis monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4E.9', item => {
  item.fullCredit = "Mentions periodic spirometry / lung function testing at future visits";
  item.halfCredit = "Spirometry monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4E.10', item => {
  item.fullCredit = "References GINA assess-adjust-review monitoring framework in Plan";
  item.halfCredit = "GINA monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Pneumococcal vaccine";
});

updateItem('Week3_Patient_A_Thursday', '4F.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Tdap booster";
});

updateItem('Week3_Patient_A_Thursday', '4F.4', item => {
  item.fullCredit = "Mentions verification of vaccination records in state registry or clinic";
  item.halfCredit = "Verify records";
});

updateItem('Week3_Patient_A_Thursday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up interval in 3-6 months (or routine longitudinal follow-up)";
  item.halfCredit = "Follow-up interval specified";
});

updateItem('Week3_Patient_A_Thursday', '4G.2', item => {
  item.fullCredit = "States reassessment of asthma control at follow-up";
  item.halfCredit = "Reassess control";
});

updateItem('Week3_Patient_A_Thursday', '4G.4', item => {
  item.fullCredit = "Outlines longitudinal monitoring plan";
  item.halfCredit = "Longitudinal monitoring";
});

updateItem('Week3_Patient_A_Thursday', '4G.5', item => {
  item.fullCredit = "Outlines plan to evaluate therapy modification if control worsens";
  item.halfCredit = "Therapy modification plan";
});

updateItem('Week3_Patient_A_Thursday', '4G.6', item => {
  item.fullCredit = "Plans repeat pulmonary function testing in 3-6 months";
  item.halfCredit = "Repeat PFTs";
});

updateItem('Week3_Patient_A_Thursday', '4G.7', item => {
  item.fullCredit = "Mentions adherence and technique review at follow-up";
  item.halfCredit = "Adherence/technique review";
});

updateItem('Week3_Patient_A_Thursday', '5A.3', item => {
  item.fullCredit = "Structures Assessment across prioritized clinical problems (accepts focused asthma control assessment)";
  item.halfCredit = "Prioritized problem list";
});

updateItem('Week3_Patient_A_Thursday', '5B.2', item => {
  item.fullCredit = "Reports PFT values with units and compares against GINA criteria";
  item.halfCredit = "Reports PFTs with units";
});

updateItem('Week3_Patient_A_Thursday', '5B.3', item => {
  item.fullCredit = "Lists specific, measurable monitoring targets in Plan (ACT >= 20, reliever use <=2x/wk)";
  item.halfCredit = "Measurable targets listed";
});

updateItem('Week3_Patient_A_Thursday', '5B.4', item => {
  item.fullCredit = "Provides concrete, actionable plan details (continuation of SMART, rhinitis meds, vaccines, follow-up timing)";
  item.halfCredit = "Actionable plan details";
});

updateItem('Week3_Patient_A_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 guideline rationale in Assessment or Plan";
  item.halfCredit = "GINA rationale cited";
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
