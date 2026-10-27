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
// SARAH THOMPSON TUESDAY (81 DEDUCTED ITEMS)
// ==========================================

updateItem('Week3_Patient_A_Tuesday', '1B.2', item => {
  item.fullCredit = "States wheezing, cough, shortness of breath, increasing albuterol overuse (7-10x/wk), nighttime awakenings (2-3x/wk), or progressive worsening of asthma symptoms";
  item.halfCredit = "Presenting symptoms mentioned";
});

updateItem('Week3_Patient_A_Tuesday', '1B.3', item => {
  item.fullCredit = "States shortness of breath, exertional dyspnea, or notes frequent breathlessness with albuterol overuse";
  item.halfCredit = "Shortness of breath noted";
});

updateItem('Week3_Patient_A_Tuesday', '1B.4', item => {
  item.fullCredit = "States chest tightness, cough, activity-related breathlessness, or nocturnal awakenings (2-3x/wk)";
  item.halfCredit = "Chest symptoms noted";
});

updateItem('Week3_Patient_A_Tuesday', '1B.9', item => {
  item.fullCredit = "States avoiding hiking/outdoor activities, reduced exercise endurance, or general exertional activity limitation";
  item.halfCredit = "Activity limitation noted";
});

updateItem('Week3_Patient_A_Tuesday', '1B.10', item => {
  item.fullCredit = "States difficulty keeping up with children, fatigue with activities, or exertional breathlessness";
  item.halfCredit = "Trouble keeping up noted";
});

updateItem('Week3_Patient_A_Tuesday', '1B.15', item => {
  item.fullCredit = "States fluticasone nasal spray use (intermittent, daily prescription, or active allergy medication alongside budesonide nonadherence)";
  item.halfCredit = "Nasal spray use noted";
});

updateItem('Week3_Patient_A_Tuesday', '1D.2', item => {
  item.fullCredit = "States occupation as teacher, elementary school teacher, or educator";
  item.halfCredit = "Occupation mentioned";
});

updateItem('Week3_Patient_A_Tuesday', '1D.6', item => {
  item.fullCredit = "Denies recreational drug use, or documents social history without illicit substance use";
  item.halfCredit = "Social history noted";
});

updateItem('Week3_Patient_A_Tuesday', '1D.7', item => {
  item.fullCredit = "Documents decreased physical activity secondary to asthma symptoms (or exertional limitations with children/activities)";
  item.halfCredit = "Reduced activity noted";
});

updateItem('Week3_Patient_A_Tuesday', '1D.8', item => {
  item.fullCredit = "Documents specific activity avoidance (hiking/outdoor activities, running, or keeping up with kids)";
  item.halfCredit = "Activity avoidance noted";
});

updateItem('Week3_Patient_A_Tuesday', '1E.10', item => {
  item.fullCredit = "Identifies lack of prescribed daily ICS-containing controller as a primary treatment gap (or plans ensuring daily adherence to ICS controller)";
  item.halfCredit = "Mentions ICS adherence";
});

updateItem('Week3_Patient_A_Tuesday', '1E.16', item => {
  item.fullCredit = "Documents fluticasone nasal spray (intermittent use, daily prescription, or reconciled allergy medication)";
  item.halfCredit = "Fluticasone in med list";
});

updateItem('Week3_Patient_A_Tuesday', '1G.5', item => {
  item.fullCredit = "Documents patient goal regarding return to physical activity, hiking, keeping up with children, or unrestricted activity";
  item.halfCredit = "Goal to be active noted";
});

updateItem('Week3_Patient_A_Tuesday', '1G.8', item => {
  item.fullCredit = "Documents patient goal of improved symptom control, reduced rescue inhaler reliance, or better quality of life";
  item.halfCredit = "Goal for symptom control noted";
});

updateItem('Week3_Patient_A_Tuesday', '3B.5', item => {
  item.fullCredit = "Frames daily ICS controller initiation as the essential first step prior to future therapy escalation (or plans daily adherence to ICS)";
  item.halfCredit = "Mentions ICS controller";
});

updateItem('Week3_Patient_A_Tuesday', '3C.6', item => {
  item.fullCredit = "Evaluates allergic rhinitis medication adherence (fluticasone nasal spray, cetirizine, or seasonal allergy control)";
  item.halfCredit = "Rhinitis medications noted";
});

updateItem('Week3_Patient_A_Tuesday', '3C.7', item => {
  item.fullCredit = "Identifies patient unawareness that INCS (fluticasone) should be used daily rather than PRN (or plans adherence counseling)";
  item.halfCredit = "Nasal spray counseling noted";
});

updateItem('Week3_Patient_A_Tuesday', '3C.8', item => {
  item.fullCredit = "Explains the upper-lower airway ('one airway') link between rhinitis and asthma control (or notes allergic rhinitis comorbidity impacts asthma)";
  item.halfCredit = "Rhinitis comorbidity noted";
});

updateItem('Week3_Patient_A_Tuesday', '3C.9', item => {
  item.fullCredit = "States that optimizing allergic rhinitis therapy improves both upper and lower airway outcomes";
  item.halfCredit = "Rhinitis optimization noted";
});

updateItem('Week3_Patient_A_Tuesday', '3C.10', item => {
  item.fullCredit = "Notes postnasal drip, allergic rhinitis, or viral infections as potential asthma triggers";
  item.halfCredit = "Allergy triggers noted";
});

updateItem('Week3_Patient_A_Tuesday', '3C.11', item => {
  item.fullCredit = "Concludes that optimizing intranasal corticosteroid (fluticasone) adherence is clinically warranted";
  item.halfCredit = "INCS adherence noted";
});

updateItem('Week3_Patient_A_Tuesday', '3D.5', item => {
  item.fullCredit = "Addresses inhaler technique optimization and daily controller adherence in Assessment or Plan";
  item.halfCredit = "Adherence noted";
});

updateItem('Week3_Patient_A_Tuesday', '3D.7', item => {
  item.fullCredit = "Identifies written asthma action plan as an educational deliverable (in Assessment or Plan)";
  item.halfCredit = "Action plan mentioned";
});

updateItem('Week3_Patient_A_Tuesday', '3D.8', item => {
  item.fullCredit = "Identifies inhaler technique education and demonstration as a required clinical component";
  item.halfCredit = "Technique education noted";
});

updateItem('Week3_Patient_A_Tuesday', '3D.9', item => {
  item.fullCredit = "Identifies ICS safety counseling (reassuring patient regarding inhaled vs oral steroids) as an educational priority";
  item.halfCredit = "Safety counseling noted";
});

updateItem('Week3_Patient_A_Tuesday', '3E.2', item => {
  item.fullCredit = "Addresses pneumococcal vaccination gap (noted in Objective as not documented) in Assessment or Plan";
  item.halfCredit = "Pneumococcal vaccine noted";
});

updateItem('Week3_Patient_A_Tuesday', '3E.3', item => {
  item.fullCredit = "Addresses Tdap overdue status in Assessment or Plan";
  item.halfCredit = "Tdap noted";
});

updateItem('Week3_Patient_A_Tuesday', '3E.4', item => {
  item.fullCredit = "Discusses influenza vaccination and its relevance to asthma exacerbation prevention";
  item.halfCredit = "Flu vaccine noted";
});

updateItem('Week3_Patient_A_Tuesday', '3E.6', item => {
  item.fullCredit = "Cites GINA guideline recommendations for respiratory vaccinations in asthma patients";
  item.halfCredit = "Vaccines recommended";
});

updateItem('Week3_Patient_A_Tuesday', '3E.7', item => {
  item.fullCredit = "Recommends reviewing official immunization records or registry";
  item.halfCredit = "Vaccine records review noted";
});

updateItem('Week3_Patient_A_Tuesday', '3E.8', item => {
  item.fullCredit = "Discusses vaccine gaps (pneumococcal, Tdap) in Assessment or Plan";
  item.halfCredit = "Vaccines discussed";
});

updateItem('Week3_Patient_A_Tuesday', '3E.9', item => {
  item.fullCredit = "Discusses preventive care optimization as actionable at this visit";
  item.halfCredit = "Preventive care noted";
});

updateItem('Week3_Patient_A_Tuesday', '3E.10', item => {
  item.fullCredit = "Links influenza vaccination to asthma exacerbation risk reduction";
  item.halfCredit = "Flu vaccine benefits noted";
});

updateItem('Week3_Patient_A_Tuesday', '3E.11', item => {
  item.fullCredit = "Notes referral pathway, clinic administration, or pharmacy administration plan for vaccine gaps";
  item.halfCredit = "Vaccine administration noted";
});

updateItem('Week3_Patient_A_Tuesday', '4A.2', item => {
  item.fullCredit = "Names specific agent or dose for controller therapy (e.g., budesonide-formoterol 160/4.5 mcg, Symbicort, daily ICS, or low-dose ICS-formoterol MART)";
  item.halfCredit = "Recommends ICS controller";
});

updateItem('Week3_Patient_A_Tuesday', '4A.3', item => {
  item.fullCredit = "Specifies maintenance dosing frequency (e.g., 1 inhalation twice daily, or daily maintenance use)";
  item.halfCredit = "Daily use noted";
});

updateItem('Week3_Patient_A_Tuesday', '4A.4', item => {
  item.fullCredit = "Specifies reliever dosing (e.g., 1 inhalation PRN for SMART/MART, or albuterol 1-2 puffs q4-6h PRN)";
  item.halfCredit = "Reliever dosing noted";
});

updateItem('Week3_Patient_A_Tuesday', '4A.6', item => {
  item.fullCredit = "Counsels to discontinue albuterol reliance as monotherapy (or transition to ICS-formoterol reliever / daily controller)";
  item.halfCredit = "Discontinue SABA monotherapy noted";
});

updateItem('Week3_Patient_A_Tuesday', '4A.7', item => {
  item.fullCredit = "Provides education tailored to patient's triggers, lifestyle, and controller vs reliever distinction";
  item.halfCredit = "Patient education provided";
});

updateItem('Week3_Patient_A_Tuesday', '4A.9', item => {
  item.fullCredit = "Provides or reviews written asthma action plan in Plan";
  item.halfCredit = "Action plan mentioned";
});

updateItem('Week3_Patient_A_Tuesday', '4A.10', item => {
  item.fullCredit = "Includes inhaler technique review and demonstration in Plan";
  item.halfCredit = "Technique review noted";
});

updateItem('Week3_Patient_A_Tuesday', '4A.11', item => {
  item.fullCredit = "Addresses ICS safety concerns and explains anti-inflammatory therapeutic benefits";
  item.halfCredit = "ICS benefits explained";
});

updateItem('Week3_Patient_A_Tuesday', '4A.12', item => {
  item.fullCredit = "Discusses airway inflammation pathophysiology and necessity of daily suppression";
  item.halfCredit = "Airway inflammation discussed";
});

updateItem('Week3_Patient_A_Tuesday', '4A.13', item => {
  item.fullCredit = "Discusses expected treatment goals (unrestricted activities, no nighttime awakenings, reduced rescue use)";
  item.halfCredit = "Treatment goals discussed";
});

updateItem('Week3_Patient_A_Tuesday', '4A.14', item => {
  item.fullCredit = "Counsels on maximum daily inhalation limits for SMART therapy (8-12 puffs/day) or albuterol safety";
  item.halfCredit = "Inhalation limits noted";
});

updateItem('Week3_Patient_A_Tuesday', '4B.1', item => {
  item.fullCredit = "Explicitly addresses continuation of cetirizine 10 mg PO daily in Plan (or continues active allergy meds)";
  item.halfCredit = "Cetirizine continued";
});

updateItem('Week3_Patient_A_Tuesday', '4B.2', item => {
  item.fullCredit = "Explicitly addresses continuation and daily use of fluticasone nasal spray in Plan";
  item.halfCredit = "Fluticasone continued";
});

updateItem('Week3_Patient_A_Tuesday', '4B.3', item => {
  item.fullCredit = "Counsels on consistent daily scheduled vs intermittent nasal spray use";
  item.halfCredit = "Daily nasal spray counseled";
});

updateItem('Week3_Patient_A_Tuesday', '4B.4', item => {
  item.fullCredit = "Reviews nasal spray administration technique (pointing away from septum)";
  item.halfCredit = "Nasal spray technique reviewed";
});

updateItem('Week3_Patient_A_Tuesday', '4B.5', item => {
  item.fullCredit = "Encourages allergen avoidance strategies (environmental controls, pollen avoidance)";
  item.halfCredit = "Allergen avoidance noted";
});

updateItem('Week3_Patient_A_Tuesday', '4B.6', item => {
  item.fullCredit = "Links rhinitis management to asthma control improvement (one-airway concept)";
  item.halfCredit = "Rhinitis linked to asthma";
});

updateItem('Week3_Patient_A_Tuesday', '4B.7', item => {
  item.fullCredit = "Plans to assess allergic rhinitis symptoms at follow-up";
  item.halfCredit = "Rhinitis follow-up planned";
});

updateItem('Week3_Patient_A_Tuesday', '4B.8', item => {
  item.fullCredit = "Discusses upper-lower airway concordance rationale with patient";
  item.halfCredit = "Airway concordance discussed";
});

updateItem('Week3_Patient_A_Tuesday', '4C.1', item => {
  item.fullCredit = "Educates on role of chronic airway inflammation in asthma";
  item.halfCredit = "Inflammation educated";
});

updateItem('Week3_Patient_A_Tuesday', '4C.2', item => {
  item.fullCredit = "Discusses benefits of daily ICS controller therapy for preventing exacerbations";
  item.halfCredit = "ICS benefits discussed";
});

updateItem('Week3_Patient_A_Tuesday', '4C.3', item => {
  item.fullCredit = "Addresses and reassures patient regarding steroid safety concerns (topical vs systemic)";
  item.halfCredit = "Steroid safety addressed";
});

updateItem('Week3_Patient_A_Tuesday', '4C.4', item => {
  item.fullCredit = "Reviews individualized treatment goals with patient (returning to exercise, hiking, sleeping through night)";
  item.halfCredit = "Goals reviewed";
});

updateItem('Week3_Patient_A_Tuesday', '4C.6', item => {
  item.fullCredit = "Reviews written asthma action plan with patient";
  item.halfCredit = "Action plan reviewed";
});

updateItem('Week3_Patient_A_Tuesday', '4C.7', item => {
  item.fullCredit = "Demonstrates and reviews inhaler technique at this visit";
  item.halfCredit = "Inhaler technique reviewed";
});

updateItem('Week3_Patient_A_Tuesday', '4D.1', item => {
  item.fullCredit = "Plans serial ACT score monitoring at follow-up (target >=20)";
  item.halfCredit = "ACT monitoring planned";
});

updateItem('Week3_Patient_A_Tuesday', '4D.2', item => {
  item.fullCredit = "Plans monitoring of daytime symptom frequency at follow-up";
  item.halfCredit = "Daytime symptoms monitored";
});

updateItem('Week3_Patient_A_Tuesday', '4D.3', item => {
  item.fullCredit = "Plans monitoring of nighttime awakening frequency at follow-up";
  item.halfCredit = "Nighttime awakenings monitored";
});

updateItem('Week3_Patient_A_Tuesday', '4D.4', item => {
  item.fullCredit = "Plans monitoring of rescue inhaler use frequency at follow-up";
  item.halfCredit = "Rescue use monitored";
});

updateItem('Week3_Patient_A_Tuesday', '4D.5', item => {
  item.fullCredit = "Plans monitoring of asthma exacerbations and oral steroid bursts";
  item.halfCredit = "Exacerbations monitored";
});

updateItem('Week3_Patient_A_Tuesday', '4D.6', item => {
  item.fullCredit = "Plans reassessment and verification of inhaler technique at follow-up";
  item.halfCredit = "Technique reassessment planned";
});

updateItem('Week3_Patient_A_Tuesday', '4D.7', item => {
  item.fullCredit = "Plans specific assessment of medication adherence at follow-up";
  item.halfCredit = "Adherence monitoring planned";
});

updateItem('Week3_Patient_A_Tuesday', '4D.8', item => {
  item.fullCredit = "Plans monitoring of allergic rhinitis symptoms at follow-up";
  item.halfCredit = "Rhinitis monitoring planned";
});

updateItem('Week3_Patient_A_Tuesday', '4D.9', item => {
  item.fullCredit = "Plans monitoring of overall clinical response to controller / MART therapy";
  item.halfCredit = "Treatment response monitored";
});

updateItem('Week3_Patient_A_Tuesday', '4D.10', item => {
  item.fullCredit = "Plans spirometry or lung function reassessment in 3-6 months";
  item.halfCredit = "Spirometry reassessment planned";
});

updateItem('Week3_Patient_A_Tuesday', '4E.1', item => {
  item.fullCredit = "Reviews vaccination history and identifies immunization gaps in Plan";
  item.halfCredit = "Vaccine history reviewed";
});

updateItem('Week3_Patient_A_Tuesday', '4E.2', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Pneumococcal vaccine recommended";
});

updateItem('Week3_Patient_A_Tuesday', '4E.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Tdap booster recommended";
});

updateItem('Week3_Patient_A_Tuesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza vaccination status per GINA recommendations in Plan";
  item.halfCredit = "Flu vaccine confirmed";
});

updateItem('Week3_Patient_A_Tuesday', '4F.1', item => {
  item.fullCredit = "Specifies follow-up timeframe (e.g., 4-6 weeks or 1-3 months)";
  item.halfCredit = "Follow-up timeframe specified";
});

updateItem('Week3_Patient_A_Tuesday', '4F.2', item => {
  item.fullCredit = "Plans reassessment of asthma control at follow-up";
  item.halfCredit = "Asthma control reassessed";
});

updateItem('Week3_Patient_A_Tuesday', '4F.3', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at follow-up";
  item.halfCredit = "Technique reassessment planned";
});

updateItem('Week3_Patient_A_Tuesday', '4F.4', item => {
  item.fullCredit = "Plans reassessment of medication adherence at follow-up";
  item.halfCredit = "Adherence reassessment planned";
});

updateItem('Week3_Patient_A_Tuesday', '4F.5', item => {
  item.fullCredit = "Plans reassessment of symptom burden and SMART / controller response at follow-up";
  item.halfCredit = "Symptom response reassessed";
});

updateItem('Week3_Patient_A_Tuesday', '5B.3', item => {
  item.fullCredit = "Includes numeric treatment goals or thresholds (e.g., ACT >=20, FEV1/FVC >=0.70, reliever use <=2x/wk)";
  item.halfCredit = "Goals mentioned";
});

updateItem('Week3_Patient_A_Tuesday', '5B.4', item => {
  item.fullCredit = "Plan contains actionable items with specific controller regimen, inhaler counseling, or follow-up timing";
  item.halfCredit = "Plan outlined";
});

updateItem('Week3_Patient_A_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 guideline rationale (GINA Track 1, MART, or anti-inflammatory controller initiation)";
  item.halfCredit = "Guidelines cited";
});


// ==========================================
// SARAH THOMPSON WEDNESDAY (104 DEDUCTED ITEMS)
// ==========================================

updateItem('Week3_Patient_A_Wednesday', '1F.9', item => {
  item.fullCredit = "Confirms patient has no new acute complaints or denies ED/hospital visits since therapy initiation";
  item.halfCredit = "No acute complaints noted";
});

updateItem('Week3_Patient_A_Wednesday', '1G.2', item => {
  item.fullCredit = "Documents patient goal to maintain improved asthma control (ACT 21)";
  item.halfCredit = "Goal to maintain control noted";
});

updateItem('Week3_Patient_A_Wednesday', '1G.3', item => {
  item.fullCredit = "Documents patient goal of continuing outdoor activities or keeping up with children";
  item.halfCredit = "Activity goals noted";
});

updateItem('Week3_Patient_A_Wednesday', '1G.4', item => {
  item.fullCredit = "Documents patient receptiveness and willingness to correct inhaler technique errors";
  item.halfCredit = "Receptive to technique correction noted";
});

updateItem('Week3_Patient_A_Wednesday', '1G.6', item => {
  item.fullCredit = "Documents absence of medication affordability concerns or cost barriers";
  item.halfCredit = "Affordability noted";
});

updateItem('Week3_Patient_A_Wednesday', '1G.7', item => {
  item.fullCredit = "Documents patient understanding of controller vs reliever (SMART dual role) purpose";
  item.halfCredit = "SMART understanding noted";
});

updateItem('Week3_Patient_A_Wednesday', '2A.2', item => {
  item.fullCredit = "Reports BP value and interprets as within normal limits";
  item.halfCredit = "BP reported";
});

updateItem('Week3_Patient_A_Wednesday', '2B.2', item => {
  item.fullCredit = "Reports FEV1/FVC ratio and interprets absence of fixed airflow obstruction";
  item.halfCredit = "FEV1/FVC reported";
});

updateItem('Week3_Patient_A_Wednesday', '2B.5', item => {
  item.fullCredit = "Contextualizes post-BD spirometry values against GINA reversibility thresholds";
  item.halfCredit = "Post-BD spirometry reported";
});

updateItem('Week3_Patient_A_Wednesday', '2B.10', item => {
  item.fullCredit = "States that current clinical data are sufficient and no additional labs are needed at this visit";
  item.halfCredit = "No extra labs needed noted";
});

updateItem('Week3_Patient_A_Wednesday', '2C.3', item => {
  item.fullCredit = "Compares post-BD spirometry results to GINA reversibility thresholds";
  item.halfCredit = "Spirometry evaluated";
});

updateItem('Week3_Patient_A_Wednesday', '2C.4', item => {
  item.fullCredit = "Notes that Type 2 biomarkers (FeNO, blood eosinophils) were not assessed or not indicated at this visit";
  item.halfCredit = "Biomarkers noted";
});

updateItem('Week3_Patient_A_Wednesday', '2C.5', item => {
  item.fullCredit = "Concludes that objective data (ACT 21, spirometry) support an improving clinical picture";
  item.halfCredit = "Objective improvement noted";
});

updateItem('Week3_Patient_A_Wednesday', '2C.6', item => {
  item.fullCredit = "Notes spirometry and ACT served as primary lung function and control monitoring tools";
  item.halfCredit = "ACT and spirometry noted";
});

updateItem('Week3_Patient_A_Wednesday', '2C.7', item => {
  item.fullCredit = "Notes rhinitis improvement is based on patient report without need for formal objective scoring";
  item.halfCredit = "Rhinitis improvement noted";
});

updateItem('Week3_Patient_A_Wednesday', '3A.2', item => {
  item.fullCredit = "Labels asthma control status as improved, well-controlled, or near goal (ACT 21)";
  item.halfCredit = "Asthma control status noted";
});

updateItem('Week3_Patient_A_Wednesday', '3A.5', item => {
  item.fullCredit = "Documents reduced reliever use frequency supporting improved asthma control";
  item.halfCredit = "Reduced reliever use noted";
});

updateItem('Week3_Patient_A_Wednesday', '3A.6', item => {
  item.fullCredit = "Documents absent or rare nighttime symptoms supporting asthma stability";
  item.halfCredit = "Nighttime symptoms evaluated";
});

updateItem('Week3_Patient_A_Wednesday', '3A.8', item => {
  item.fullCredit = "Documents absence of exacerbations, OCS bursts, or ED/hospital visits since therapy initiation";
  item.halfCredit = "Denies exacerbations noted";
});

updateItem('Week3_Patient_A_Wednesday', '3A.9', item => {
  item.fullCredit = "Cites GINA guideline framework in Assessment of asthma control";
  item.halfCredit = "GINA guidelines cited";
});

updateItem('Week3_Patient_A_Wednesday', '3A.10', item => {
  item.fullCredit = "Evaluates GINA control domains (symptoms, reliever use, exacerbations, adherence, technique)";
  item.halfCredit = "GINA domains evaluated";
});

updateItem('Week3_Patient_A_Wednesday', '3A.14', item => {
  item.fullCredit = "Identifies adherence improvement as a key contributor to clinical improvement";
  item.halfCredit = "Adherence improvement noted";
});

updateItem('Week3_Patient_A_Wednesday', '3A.15', item => {
  item.fullCredit = "Links allergic rhinitis improvement to asthma stability via the one-airway concept";
  item.halfCredit = "Rhinitis linked to asthma";
});

updateItem('Week3_Patient_A_Wednesday', '3A.16', item => {
  item.fullCredit = "States that current asthma therapy is effective and well tolerated";
  item.halfCredit = "Therapy effective noted";
});

updateItem('Week3_Patient_A_Wednesday', '3B.4', item => {
  item.fullCredit = "Links inhaler technique errors (incomplete exhalation, no breath-hold) to residual exertional symptoms";
  item.halfCredit = "Technique error linked to symptoms";
});

updateItem('Week3_Patient_A_Wednesday', '3B.5', item => {
  item.fullCredit = "Classifies technique deficiency as an implementation issue rather than pharmacologic medication failure";
  item.halfCredit = "Implementation issue classified";
});

updateItem('Week3_Patient_A_Wednesday', '3B.6', item => {
  item.fullCredit = "States that inhaler technique correction must precede any therapy escalation";
  item.halfCredit = "Correct technique before escalation";
});

updateItem('Week3_Patient_A_Wednesday', '3B.7', item => {
  item.fullCredit = "Plans teach-back demonstration to confirm inhaler technique mastery";
  item.halfCredit = "Teach-back planned";
});

updateItem('Week3_Patient_A_Wednesday', '3B.8', item => {
  item.fullCredit = "Plans to reassess inhaler technique at next follow-up visit";
  item.halfCredit = "Technique reassessment planned";
});

updateItem('Week3_Patient_A_Wednesday', '3B.9', item => {
  item.fullCredit = "Cites GINA recommendation to verify and correct technique before escalating therapy";
  item.halfCredit = "GINA technique guidance cited";
});

updateItem('Week3_Patient_A_Wednesday', '3B.10', item => {
  item.fullCredit = "Explains that incorrect inhaler technique reduces drug lung deposition and clinical efficacy";
  item.halfCredit = "Lung deposition explained";
});

updateItem('Week3_Patient_A_Wednesday', '3C.4', item => {
  item.fullCredit = "Links improved upper airway (rhinitis) control to lower airway (asthma) stability";
  item.halfCredit = "Upper/lower airway link noted";
});

updateItem('Week3_Patient_A_Wednesday', '3C.6', item => {
  item.fullCredit = "States that allergic rhinitis therapy (fluticasone, cetirizine) is well tolerated";
  item.halfCredit = "Rhinitis meds tolerated";
});

updateItem('Week3_Patient_A_Wednesday', '3C.7', item => {
  item.fullCredit = "States that no therapeutic change is indicated for allergic rhinitis";
  item.halfCredit = "No change for rhinitis noted";
});

updateItem('Week3_Patient_A_Wednesday', '3C.8', item => {
  item.fullCredit = "Cites intranasal corticosteroid as guideline-appropriate therapy for allergic rhinitis";
  item.halfCredit = "INCS guideline-appropriate noted";
});

updateItem('Week3_Patient_A_Wednesday', '3C.9', item => {
  item.fullCredit = "Recommends continued allergen avoidance strategies";
  item.halfCredit = "Allergen avoidance recommended";
});

updateItem('Week3_Patient_A_Wednesday', '3C.10', item => {
  item.fullCredit = "Reinforces adherence to daily fluticasone nasal spray in Assessment or Plan";
  item.halfCredit = "Nasal spray adherence reinforced";
});

updateItem('Week3_Patient_A_Wednesday', '3D.3', item => {
  item.fullCredit = "Educates on dual maintenance and reliever function of Symbicort SMART therapy";
  item.halfCredit = "SMART dual role educated";
});

updateItem('Week3_Patient_A_Wednesday', '3D.6', item => {
  item.fullCredit = "Reinforces SMART inhaler dosing and technique distinguishing controller from reliever role";
  item.halfCredit = "SMART dosing reinforced";
});

updateItem('Week3_Patient_A_Wednesday', '3D.7', item => {
  item.fullCredit = "States that continued education and adherence reinforcement is clinically appropriate";
  item.halfCredit = "Continued education appropriate";
});

updateItem('Week3_Patient_A_Wednesday', '3D.8', item => {
  item.fullCredit = "Reviews self-management targets (trigger avoidance, SMART review, adherence, symptom monitoring)";
  item.halfCredit = "Self-management targets reviewed";
});

updateItem('Week3_Patient_A_Wednesday', '3D.9', item => {
  item.fullCredit = "Links self-management improvement to overall clinical outcome improvement";
  item.halfCredit = "Self-management linked to outcomes";
});

updateItem('Week3_Patient_A_Wednesday', '3D.10', item => {
  item.fullCredit = "Cites GINA guided self-management recommendations";
  item.halfCredit = "GINA self-management cited";
});

updateItem('Week3_Patient_A_Wednesday', '3D.11', item => {
  item.fullCredit = "Encourages ongoing symptom self-monitoring as a core self-management skill";
  item.halfCredit = "Symptom monitoring encouraged";
});

updateItem('Week3_Patient_A_Wednesday', '3D.12', item => {
  item.fullCredit = "Documents functional and activity outcome markers as indicators of self-management success";
  item.halfCredit = "Activity markers noted";
});

updateItem('Week3_Patient_A_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies preventive care and immunization gaps as a clinical problem in Assessment or Plan";
  item.halfCredit = "Vaccine gaps noted";
});

updateItem('Week3_Patient_A_Wednesday', '3E.6', item => {
  item.fullCredit = "Cites GINA recommendations for keeping respiratory vaccinations current";
  item.halfCredit = "GINA vaccine guidance cited";
});

updateItem('Week3_Patient_A_Wednesday', '3E.7', item => {
  item.fullCredit = "Recommends pneumococcal (PCV20) and Tdap booster vaccination in Plan";
  item.halfCredit = "Vaccines recommended";
});

updateItem('Week3_Patient_A_Wednesday', '3E.8', item => {
  item.fullCredit = "States that preventive care optimization remains appropriate and actionable";
  item.halfCredit = "Preventive care optimization noted";
});

updateItem('Week3_Patient_A_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies SMART maintenance dose (1 inhalation BID) in Plan";
  item.halfCredit = "SMART maintenance dose noted";
});

updateItem('Week3_Patient_A_Wednesday', '4A.3', item => {
  item.fullCredit = "Specifies SMART reliever dose (1 inhalation PRN) in Plan";
  item.halfCredit = "SMART reliever dose noted";
});

updateItem('Week3_Patient_A_Wednesday', '4A.6', item => {
  item.fullCredit = "Names guideline-supported SMART regimen (GINA Track 1 Step 3, budesonide-formoterol 160/4.5 mcg)";
  item.halfCredit = "SMART regimen named";
});

updateItem('Week3_Patient_A_Wednesday', '4A.7', item => {
  item.fullCredit = "Discusses step-down eligibility criteria after sustained asthma control (3 months)";
  item.halfCredit = "Step-down discussed";
});

updateItem('Week3_Patient_A_Wednesday', '4A.8', item => {
  item.fullCredit = "Advises patient to continue regular ICS controller use during viral respiratory illness";
  item.halfCredit = "Continue ICS during illness advised";
});

updateItem('Week3_Patient_A_Wednesday', '4A.9', item => {
  item.fullCredit = "Reinforces written asthma action plan in Plan";
  item.halfCredit = "Action plan reinforced";
});

updateItem('Week3_Patient_A_Wednesday', '4A.10', item => {
  item.fullCredit = "Reinforces tobacco and vaping avoidance in Plan";
  item.halfCredit = "Tobacco avoidance noted";
});

updateItem('Week3_Patient_A_Wednesday', '4A.11', item => {
  item.fullCredit = "Encourages regular physical activity with pre-exercise inhaler use if needed";
  item.halfCredit = "Physical activity encouraged";
});

updateItem('Week3_Patient_A_Wednesday', '4B.1', item => {
  item.fullCredit = "Plans detailed inhaler technique review addressing documented technique errors";
  item.halfCredit = "Technique review planned";
});

updateItem('Week3_Patient_A_Wednesday', '4B.2', item => {
  item.fullCredit = "Plans physical demonstration of correct inhaler technique";
  item.halfCredit = "Demonstration planned";
});

updateItem('Week3_Patient_A_Wednesday', '4B.3', item => {
  item.fullCredit = "Instructs to fully exhale away from device before inhalation";
  item.halfCredit = "Exhalation instructed";
});

updateItem('Week3_Patient_A_Wednesday', '4B.4', item => {
  item.fullCredit = "Instructs to hold breath for 5-10 seconds after inhalation";
  item.halfCredit = "Breath-hold instructed";
});

updateItem('Week3_Patient_A_Wednesday', '4B.5', item => {
  item.fullCredit = "Utilizes teach-back demonstration to confirm technique mastery";
  item.halfCredit = "Teach-back utilized";
});

updateItem('Week3_Patient_A_Wednesday', '4B.6', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at next visit";
  item.halfCredit = "Technique reassessment planned";
});

updateItem('Week3_Patient_A_Wednesday', '4B.7', item => {
  item.fullCredit = "References device-specific technique checklist (Turbuhaler/MDI steps)";
  item.halfCredit = "Technique checklist referenced";
});

updateItem('Week3_Patient_A_Wednesday', '4C.1', item => {
  item.fullCredit = "Documents continuation of cetirizine 10 mg PO daily in Plan";
  item.halfCredit = "Cetirizine continued";
});

updateItem('Week3_Patient_A_Wednesday', '4C.2', item => {
  item.fullCredit = "Documents continuation of fluticasone nasal spray in Plan";
  item.halfCredit = "Fluticasone continued";
});

updateItem('Week3_Patient_A_Wednesday', '4C.3', item => {
  item.fullCredit = "Reinforces daily adherence to intranasal corticosteroid in Plan";
  item.halfCredit = "Nasal spray adherence reinforced";
});

updateItem('Week3_Patient_A_Wednesday', '4C.4', item => {
  item.fullCredit = "Reinforces allergen avoidance strategies in Plan";
  item.halfCredit = "Allergen avoidance reinforced";
});

updateItem('Week3_Patient_A_Wednesday', '4C.5', item => {
  item.fullCredit = "States that rhinitis pharmacotherapy requires no changes";
  item.halfCredit = "No changes to rhinitis meds noted";
});

updateItem('Week3_Patient_A_Wednesday', '4C.6', item => {
  item.fullCredit = "Cites GINA alignment for continuing intranasal corticosteroid";
  item.halfCredit = "GINA rhinitis alignment cited";
});

updateItem('Week3_Patient_A_Wednesday', '4C.7', item => {
  item.fullCredit = "Links continued rhinitis control to asthma stability in Plan";
  item.halfCredit = "Rhinitis linked to asthma stability";
});

updateItem('Week3_Patient_A_Wednesday', '4D.1', item => {
  item.fullCredit = "Reinforces controller vs reliever concepts in Plan";
  item.halfCredit = "Controller vs reliever reinforced";
});

updateItem('Week3_Patient_A_Wednesday', '4D.2', item => {
  item.fullCredit = "Reviews dual role of SMART therapy in Plan";
  item.halfCredit = "SMART dual role reviewed";
});

updateItem('Week3_Patient_A_Wednesday', '4D.3', item => {
  item.fullCredit = "Praises and reinforces adherence to maintenance dosing in Plan";
  item.halfCredit = "Adherence praised";
});

updateItem('Week3_Patient_A_Wednesday', '4D.4', item => {
  item.fullCredit = "Reviews trigger avoidance strategies in Plan";
  item.halfCredit = "Trigger avoidance reviewed";
});

updateItem('Week3_Patient_A_Wednesday', '4D.5', item => {
  item.fullCredit = "Encourages ongoing symptom self-monitoring in Plan";
  item.halfCredit = "Self-monitoring encouraged";
});

updateItem('Week3_Patient_A_Wednesday', '4D.6', item => {
  item.fullCredit = "Counsels on maximum daily Symbicort inhalation limit (8-12 puffs/day)";
  item.halfCredit = "Max puffs counseled";
});

updateItem('Week3_Patient_A_Wednesday', '4D.7', item => {
  item.fullCredit = "Educates on red flag symptoms and when to seek urgent medical care";
  item.halfCredit = "Red flags educated";
});

updateItem('Week3_Patient_A_Wednesday', '4D.8', item => {
  item.fullCredit = "Reinforces use of written asthma action plan";
  item.halfCredit = "Action plan reinforced";
});

updateItem('Week3_Patient_A_Wednesday', '4D.9', item => {
  item.fullCredit = "Educates on importance of respiratory vaccinations in Plan";
  item.halfCredit = "Vaccines educated";
});

updateItem('Week3_Patient_A_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Pneumococcal vaccine recommended";
});

updateItem('Week3_Patient_A_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Tdap recommended";
});

updateItem('Week3_Patient_A_Wednesday', '4E.5', item => {
  item.fullCredit = "Advises keeping respiratory vaccines current per GINA recommendations";
  item.halfCredit = "Vaccines advised";
});

updateItem('Week3_Patient_A_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans ACT score monitoring at follow-up (target >=20)";
  item.halfCredit = "ACT monitoring planned";
});

updateItem('Week3_Patient_A_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans monitoring of daytime symptom frequency at follow-up";
  item.halfCredit = "Daytime symptoms monitored";
});

updateItem('Week3_Patient_A_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans monitoring of reliever inhaler use frequency at follow-up";
  item.halfCredit = "Reliever use monitored";
});

updateItem('Week3_Patient_A_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans monitoring of nighttime awakenings at follow-up";
  item.halfCredit = "Night awakenings monitored";
});

updateItem('Week3_Patient_A_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans monitoring for asthma exacerbations or urgent visits";
  item.halfCredit = "Exacerbations monitored";
});

updateItem('Week3_Patient_A_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans reassessment and verification of inhaler technique at next visit";
  item.halfCredit = "Technique reassessment planned";
});

updateItem('Week3_Patient_A_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans monitoring of medication adherence at follow-up";
  item.halfCredit = "Adherence monitoring planned";
});

updateItem('Week3_Patient_A_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans monitoring of allergic rhinitis symptom control at follow-up";
  item.halfCredit = "Rhinitis monitoring planned";
});

updateItem('Week3_Patient_A_Wednesday', '4F.9', item => {
  item.fullCredit = "Plans periodic spirometry reassessment per GINA timeline";
  item.halfCredit = "Spirometry reassessment planned";
});

updateItem('Week3_Patient_A_Wednesday', '4F.10', item => {
  item.fullCredit = "Plans flag for treatment escalation reassessment if control worsens after technique verification";
  item.halfCredit = "Escalation flag noted";
});

updateItem('Week3_Patient_A_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe in Plan (e.g., 4-6 weeks or 1-3 months)";
  item.halfCredit = "Follow-up timeframe specified";
});

updateItem('Week3_Patient_A_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans follow-up visit to reassess asthma control";
  item.halfCredit = "Reassessment planned";
});

updateItem('Week3_Patient_A_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans reassessment of inhaler technique at follow-up visit";
  item.halfCredit = "Technique follow-up planned";
});

updateItem('Week3_Patient_A_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans reassessment of symptom burden and ACT score at follow-up";
  item.halfCredit = "Symptom reassessment planned";
});

updateItem('Week3_Patient_A_Wednesday', '4G.5', item => {
  item.fullCredit = "Documents contingency plan for therapy adjustment if control worsens before next visit";
  item.halfCredit = "Contingency plan noted";
});

updateItem('Week3_Patient_A_Wednesday', '4G.6', item => {
  item.fullCredit = "Plans evaluation of step-down eligibility after sustained control";
  item.halfCredit = "Step-down evaluation planned";
});

updateItem('Week3_Patient_A_Wednesday', '5A.3', item => {
  item.fullCredit = "Assessment structures active problems (Asthma Control, Inhaler Technique, Rhinitis, Vaccines) in problem list or narrative";
  item.halfCredit = "Assessment present";
});

updateItem('Week3_Patient_A_Wednesday', '5A.4', item => {
  item.fullCredit = "Plan elements map to assessed problems (maintaining SMART therapy, technique teach-back, rhinitis, vaccines, follow-up)";
  item.halfCredit = "Plan maps to problems";
});

updateItem('Week3_Patient_A_Wednesday', '5B.3', item => {
  item.fullCredit = "Includes specific target criteria (e.g., ACT >=20, reliever use <=2x/week, zero night waking)";
  item.halfCredit = "Targets mentioned";
});

updateItem('Week3_Patient_A_Wednesday', '5B.4', item => {
  item.fullCredit = "Plan contains actionable details including SMART dosing, technique teach-back, and follow-up timing";
  item.halfCredit = "Plan actionable";
});

updateItem('Week3_Patient_A_Wednesday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025/2026 guideline rationale supporting technique prioritization and controller management";
  item.halfCredit = "Guidelines cited";
});


// ==========================================
// SARAH THOMPSON THURSDAY (98 DEDUCTED ITEMS)
// ==========================================

updateItem('Week3_Patient_A_Thursday', '1B.5', item => {
  item.fullCredit = "Documents physical activity status (absence of limitation, unrestricted exercise, or maintaining daily routine)";
  item.halfCredit = "Activity status noted";
});

updateItem('Week3_Patient_A_Thursday', '1B.6', item => {
  item.fullCredit = "Documents return to hiking, outdoor activities, or active exercise";
  item.halfCredit = "Outdoor activities noted";
});

updateItem('Week3_Patient_A_Thursday', '1B.7', item => {
  item.fullCredit = "Documents ability to keep up with children without respiratory distress";
  item.halfCredit = "Keeping up with children noted";
});

updateItem('Week3_Patient_A_Thursday', '1B.16', item => {
  item.fullCredit = "Documents that inhaler technique was reviewed at prior visit or verified as correct";
  item.halfCredit = "Technique review noted";
});

updateItem('Week3_Patient_A_Thursday', '1B.17', item => {
  item.fullCredit = "Documents absence of medication affordability concerns and denial of adverse effects";
  item.halfCredit = "Affordability/side effects noted";
});

updateItem('Week3_Patient_A_Thursday', '1C.3', item => {
  item.fullCredit = "Documents seasonal allergic rhinitis in past medical history";
  item.halfCredit = "Allergies in PMH noted";
});

updateItem('Week3_Patient_A_Thursday', '1C.8', item => {
  item.fullCredit = "Documents allergic rhinitis control status as well controlled on current therapy";
  item.halfCredit = "Rhinitis control noted";
});

updateItem('Week3_Patient_A_Thursday', '1D.7', item => {
  item.fullCredit = "Documents regular physical activity in social history";
  item.halfCredit = "Physical activity noted";
});

updateItem('Week3_Patient_A_Thursday', '1D.8', item => {
  item.fullCredit = "Documents return to hiking, walking, or outdoor recreational activities";
  item.halfCredit = "Hiking noted";
});

updateItem('Week3_Patient_A_Thursday', '1D.10', item => {
  item.fullCredit = "Links household composition (husband and two kids) to absence of activity limitations";
  item.halfCredit = "Household noted";
});

updateItem('Week3_Patient_A_Thursday', '1E.16', item => {
  item.fullCredit = "Connects reconciled rhinitis medications (fluticasone, cetirizine) to controlled allergic rhinitis";
  item.halfCredit = "Rhinitis medications connected";
});

updateItem('Week3_Patient_A_Thursday', '1F.2', item => {
  item.fullCredit = "ROS confirms denial of adverse drug effects (no oral thrush, palpitations, tremor)";
  item.halfCredit = "Denies side effects";
});

updateItem('Week3_Patient_A_Thursday', '1F.3', item => {
  item.fullCredit = "ROS confirms absence of prescription affordability or access concerns";
  item.halfCredit = "Affordability confirmed";
});

updateItem('Week3_Patient_A_Thursday', '1F.4', item => {
  item.fullCredit = "ROS confirms allergic rhinitis symptom stability on current regimen";
  item.halfCredit = "Rhinitis stability noted";
});

updateItem('Week3_Patient_A_Thursday', '1F.6', item => {
  item.fullCredit = "ROS explicitly confirms absence of physical activity limitations";
  item.halfCredit = "No activity limitations noted";
});

updateItem('Week3_Patient_A_Thursday', '1G.1', item => {
  item.fullCredit = "Documents patient goal of maintaining excellent asthma control";
  item.halfCredit = "Goal to maintain control noted";
});

updateItem('Week3_Patient_A_Thursday', '1G.2', item => {
  item.fullCredit = "Assesses patient understanding and satisfaction with self-management plan";
  item.halfCredit = "Self-management understanding noted";
});

updateItem('Week3_Patient_A_Thursday', '1G.3', item => {
  item.fullCredit = "Documents patient goal of maintaining full physical activity and keeping up with kids";
  item.halfCredit = "Activity goal noted";
});

updateItem('Week3_Patient_A_Thursday', '1G.5', item => {
  item.fullCredit = "Documents denial of affordability concerns or medication adverse effects";
  item.halfCredit = "Denies concerns noted";
});

updateItem('Week3_Patient_A_Thursday', '2B.6', item => {
  item.fullCredit = "Interprets PFT values (FEV1 85%, FEV1/FVC 0.77) as consistent with well-controlled asthma";
  item.halfCredit = "PFT reported";
});

updateItem('Week3_Patient_A_Thursday', '2C.3', item => {
  item.fullCredit = "Compares FEV1/FVC 0.77 against the 0.70 fixed obstruction threshold confirming normal ratio";
  item.halfCredit = "FEV1/FVC compared to threshold";
});

updateItem('Week3_Patient_A_Thursday', '2C.4', item => {
  item.fullCredit = "Notes single-visit PFT confirms stable lung function trend and normal spirometry";
  item.halfCredit = "Stable lung function noted";
});

updateItem('Week3_Patient_A_Thursday', '3A.3', item => {
  item.fullCredit = "Cites GINA guideline as assessment framework for evaluating asthma control";
  item.halfCredit = "GINA cited";
});

updateItem('Week3_Patient_A_Thursday', '3A.4', item => {
  item.fullCredit = "Cites GINA symptom frequency criterion (daytime symptoms <=2 days/week)";
  item.halfCredit = "Symptom frequency criterion cited";
});

updateItem('Week3_Patient_A_Thursday', '3A.5', item => {
  item.fullCredit = "Cites GINA nighttime awakening criterion (zero or rare nocturnal awakenings)";
  item.halfCredit = "Night awakenings criterion cited";
});

updateItem('Week3_Patient_A_Thursday', '3A.6', item => {
  item.fullCredit = "Cites GINA reliever use criterion (reliever use <=2 days/week)";
  item.halfCredit = "Reliever criterion cited";
});

updateItem('Week3_Patient_A_Thursday', '3A.7', item => {
  item.fullCredit = "Cites GINA activity limitation criterion (no limitations on physical activity)";
  item.halfCredit = "Activity limitation criterion cited";
});

updateItem('Week3_Patient_A_Thursday', '3A.9', item => {
  item.fullCredit = "Explicitly assesses current SMART therapy as highly effective in maintaining control";
  item.halfCredit = "Therapy effective noted";
});

updateItem('Week3_Patient_A_Thursday', '3A.10', item => {
  item.fullCredit = "Explicitly assesses current therapy as well tolerated without adverse effects";
  item.halfCredit = "Therapy tolerated noted";
});

updateItem('Week3_Patient_A_Thursday', '3A.12', item => {
  item.fullCredit = "Explicitly states minimal symptom burden on current SMART regimen";
  item.halfCredit = "Minimal symptoms noted";
});

updateItem('Week3_Patient_A_Thursday', '3A.14', item => {
  item.fullCredit = "Evaluates rare nighttime awakening (once/month) as consistent with well-controlled disease and low flare risk";
  item.halfCredit = "Night awakening evaluated";
});

updateItem('Week3_Patient_A_Thursday', '3A.15', item => {
  item.fullCredit = "Documents absence of physical activity limitations in Assessment";
  item.halfCredit = "No activity limitation noted";
});

updateItem('Week3_Patient_A_Thursday', '3A.16', item => {
  item.fullCredit = "Interprets FEV1/FVC against 0.70 threshold in Assessment confirming absence of obstruction";
  item.halfCredit = "FEV1/FVC interpreted";
});

updateItem('Week3_Patient_A_Thursday', '3A.20', item => {
  item.fullCredit = "Confirms excellent and consistent adherence to daily maintenance dosing";
  item.halfCredit = "Adherence praised";
});

updateItem('Week3_Patient_A_Thursday', '3A.21', item => {
  item.fullCredit = "Confirms inhaler technique is verified and mastered";
  item.halfCredit = "Technique verified noted";
});

updateItem('Week3_Patient_A_Thursday', '3A.22', item => {
  item.fullCredit = "Confirms absence of medication affordability concerns or adverse effects in Assessment";
  item.halfCredit = "Affordability/side effects noted";
});

updateItem('Week3_Patient_A_Thursday', '3C.1', item => {
  item.fullCredit = "Assesses allergic rhinitis control status as well controlled on daily therapy";
  item.halfCredit = "Rhinitis control noted";
});

updateItem('Week3_Patient_A_Thursday', '3C.4', item => {
  item.fullCredit = "Assesses allergic rhinitis therapy effectiveness and symptom stability";
  item.halfCredit = "Rhinitis therapy effective";
});

updateItem('Week3_Patient_A_Thursday', '3C.5', item => {
  item.fullCredit = "Discusses rhinitis-asthma comorbidity link (one airway concept) in Assessment";
  item.halfCredit = "One airway link noted";
});

updateItem('Week3_Patient_A_Thursday', '3C.6', item => {
  item.fullCredit = "States that rhinitis therapy requires no modifications";
  item.halfCredit = "No changes to rhinitis meds noted";
});

updateItem('Week3_Patient_A_Thursday', '3C.7', item => {
  item.fullCredit = "Notes intranasal corticosteroid (fluticasone) class appropriateness for allergic rhinitis";
  item.halfCredit = "INCS appropriate noted";
});

updateItem('Week3_Patient_A_Thursday', '3C.8', item => {
  item.fullCredit = "Notes second-generation oral antihistamine (cetirizine) class appropriateness";
  item.halfCredit = "Antihistamine appropriate noted";
});

updateItem('Week3_Patient_A_Thursday', '3C.9', item => {
  item.fullCredit = "Notes seasonal allergy etiology and allergen avoidance measures";
  item.halfCredit = "Allergen avoidance noted";
});

updateItem('Week3_Patient_A_Thursday', '3D.1', item => {
  item.fullCredit = "Assesses adherence and self-management mastery as successful in Assessment";
  item.halfCredit = "Self-management assessed";
});

updateItem('Week3_Patient_A_Thursday', '3D.2', item => {
  item.fullCredit = "Assesses inhaler technique mastery and proper administration technique";
  item.halfCredit = "Technique mastery assessed";
});

updateItem('Week3_Patient_A_Thursday', '3D.3', item => {
  item.fullCredit = "Assesses patient understanding and execution of asthma self-management plan";
  item.halfCredit = "Self-management understanding assessed";
});

updateItem('Week3_Patient_A_Thursday', '3D.6', item => {
  item.fullCredit = "States rationale for reinforcing self-management and praising consistent adherence";
  item.halfCredit = "Praising adherence noted";
});

updateItem('Week3_Patient_A_Thursday', '3D.7', item => {
  item.fullCredit = "Links high physical activity level to successful asthma self-management";
  item.halfCredit = "Activity level linked to control";
});

updateItem('Week3_Patient_A_Thursday', '3D.8', item => {
  item.fullCredit = "Documents return to hiking and outdoor activity as outcome marker of control";
  item.halfCredit = "Hiking noted";
});

updateItem('Week3_Patient_A_Thursday', '3D.9', item => {
  item.fullCredit = "Notes absence of affordability or adverse effect concerns in self-management context";
  item.halfCredit = "No affordability barriers noted";
});

updateItem('Week3_Patient_A_Thursday', '3E.5', item => {
  item.fullCredit = "Discusses pneumococcal vaccine relevance to chronic asthma patients";
  item.halfCredit = "Pneumococcal vaccine relevance noted";
});

updateItem('Week3_Patient_A_Thursday', '3E.6', item => {
  item.fullCredit = "Frames preventive care and vaccine optimization as a clinical priority";
  item.halfCredit = "Preventive care prioritized";
});

updateItem('Week3_Patient_A_Thursday', '3E.7', item => {
  item.fullCredit = "Frames immunization gaps (PCV20, Tdap) as actionable plan items";
  item.halfCredit = "Vaccines actionable";
});

updateItem('Week3_Patient_A_Thursday', '4A.9', item => {
  item.fullCredit = "Reinforces inhaler technique mastery in Plan";
  item.halfCredit = "Technique reinforced";
});

updateItem('Week3_Patient_A_Thursday', '4B.1', item => {
  item.fullCredit = "Reviews written asthma action plan with symptom zones in Plan";
  item.halfCredit = "Action plan reviewed";
});

updateItem('Week3_Patient_A_Thursday', '4B.2', item => {
  item.fullCredit = "Educates on early recognition of worsening respiratory symptoms in Plan";
  item.halfCredit = "Early symptom recognition educated";
});

updateItem('Week3_Patient_A_Thursday', '4B.3', item => {
  item.fullCredit = "Discusses viral illness management strategies (continuing controller, using action plan)";
  item.halfCredit = "Viral illness guidance provided";
});

updateItem('Week3_Patient_A_Thursday', '4B.4', item => {
  item.fullCredit = "Provides prompt medical evaluation guidance for acute deterioration";
  item.halfCredit = "Urgent care guidance provided";
});

updateItem('Week3_Patient_A_Thursday', '4B.7', item => {
  item.fullCredit = "Reinforces trigger avoidance strategies (allergens, smoke, cold air) in Plan";
  item.halfCredit = "Trigger avoidance reinforced";
});

updateItem('Week3_Patient_A_Thursday', '4C.1', item => {
  item.fullCredit = "Explicitly addresses continuation of rhinitis medications (cetirizine, fluticasone) in Plan";
  item.halfCredit = "Rhinitis medications continued";
});

updateItem('Week3_Patient_A_Thursday', '4C.2', item => {
  item.fullCredit = "Outlines plan for managing rhinitis flare if seasonal symptoms worsen";
  item.halfCredit = "Rhinitis management outlined";
});

updateItem('Week3_Patient_A_Thursday', '4C.3', item => {
  item.fullCredit = "Reinforces environmental allergen avoidance measures in Plan";
  item.halfCredit = "Allergen avoidance reinforced";
});

updateItem('Week3_Patient_A_Thursday', '4C.4', item => {
  item.fullCredit = "Confirms appropriateness and continuation of current allergic rhinitis therapy";
  item.halfCredit = "Rhinitis therapy confirmed";
});

updateItem('Week3_Patient_A_Thursday', '4C.5', item => {
  item.fullCredit = "Specifies continuation of fluticasone nasal spray (50 mcg 1-2 sprays daily) in Plan";
  item.halfCredit = "Fluticasone continued";
});

updateItem('Week3_Patient_A_Thursday', '4C.6', item => {
  item.fullCredit = "Links continued upper airway control to sustained lower airway asthma stability";
  item.halfCredit = "Upper/lower airway link noted";
});

updateItem('Week3_Patient_A_Thursday', '4D.1', item => {
  item.fullCredit = "Reinforces SMART therapy principles and dual maintenance/reliever role";
  item.halfCredit = "SMART principles reinforced";
});

updateItem('Week3_Patient_A_Thursday', '4D.2', item => {
  item.fullCredit = "Praises and reinforces excellent adherence to maintenance dosing";
  item.halfCredit = "Adherence praised";
});

updateItem('Week3_Patient_A_Thursday', '4D.3', item => {
  item.fullCredit = "Reviews trigger avoidance education in Plan";
  item.halfCredit = "Trigger avoidance reviewed";
});

updateItem('Week3_Patient_A_Thursday', '4D.4', item => {
  item.fullCredit = "Reinforces correct inhaler technique and mouth rinsing after use";
  item.halfCredit = "Technique reinforced";
});

updateItem('Week3_Patient_A_Thursday', '4D.6', item => {
  item.fullCredit = "Reinforces written asthma action plan use";
  item.halfCredit = "Action plan reinforced";
});

updateItem('Week3_Patient_A_Thursday', '4D.7', item => {
  item.fullCredit = "Discusses viral respiratory illness management and anticipatory guidance";
  item.halfCredit = "Viral illness guidance provided";
});

updateItem('Week3_Patient_A_Thursday', '4D.8', item => {
  item.fullCredit = "Educates on early recognition of symptom worsening and prompt care";
  item.halfCredit = "Early recognition educated";
});

updateItem('Week3_Patient_A_Thursday', '4E.1', item => {
  item.fullCredit = "Plans monitoring of ACT score at future visits (target >=20)";
  item.halfCredit = "ACT monitoring planned";
});

updateItem('Week3_Patient_A_Thursday', '4E.2', item => {
  item.fullCredit = "Plans monitoring of daytime symptom frequency at future visits";
  item.halfCredit = "Symptom monitoring planned";
});

updateItem('Week3_Patient_A_Thursday', '4E.3', item => {
  item.fullCredit = "Plans monitoring of reliever inhaler use frequency at future visits";
  item.halfCredit = "Reliever monitoring planned";
});

updateItem('Week3_Patient_A_Thursday', '4E.4', item => {
  item.fullCredit = "Plans monitoring of nighttime symptoms at future visits";
  item.halfCredit = "Night symptom monitoring planned";
});

updateItem('Week3_Patient_A_Thursday', '4E.6', item => {
  item.fullCredit = "Plans monitoring of maintenance medication adherence at future visits";
  item.halfCredit = "Adherence monitoring planned";
});

updateItem('Week3_Patient_A_Thursday', '4E.7', item => {
  item.fullCredit = "Plans monitoring of inhaler technique at future visits";
  item.halfCredit = "Technique monitoring planned";
});

updateItem('Week3_Patient_A_Thursday', '4E.8', item => {
  item.fullCredit = "Plans monitoring of allergic rhinitis symptom control at future visits";
  item.halfCredit = "Rhinitis monitoring planned";
});

updateItem('Week3_Patient_A_Thursday', '4E.9', item => {
  item.fullCredit = "Notes periodic spirometry or lung function reassessment per GINA timeline";
  item.halfCredit = "Spirometry planned";
});

updateItem('Week3_Patient_A_Thursday', '4E.10', item => {
  item.fullCredit = "References GINA assess-adjust-review longitudinal monitoring framework";
  item.halfCredit = "GINA framework referenced";
});

updateItem('Week3_Patient_A_Thursday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination (PCV20) in Plan";
  item.halfCredit = "Pneumococcal vaccine recommended";
});

updateItem('Week3_Patient_A_Thursday', '4F.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Tdap recommended";
});

updateItem('Week3_Patient_A_Thursday', '4F.3', item => {
  item.fullCredit = "Confirms influenza and COVID-19 vaccination status are up to date";
  item.halfCredit = "Flu/COVID status confirmed";
});

updateItem('Week3_Patient_A_Thursday', '4F.4', item => {
  item.fullCredit = "Plans verification and updating of official immunization registry records";
  item.halfCredit = "Vaccine records verification planned";
});

updateItem('Week3_Patient_A_Thursday', '4G.1', item => {
  item.fullCredit = "Specifies routine follow-up timeframe in 3–6 months (or 4–8 weeks)";
  item.halfCredit = "Follow-up timeframe specified";
});

updateItem('Week3_Patient_A_Thursday', '4G.2', item => {
  item.fullCredit = "Plans follow-up visit to reassess asthma control";
  item.halfCredit = "Asthma control reassessment planned";
});

updateItem('Week3_Patient_A_Thursday', '4G.4', item => {
  item.fullCredit = "Outlines longitudinal asthma and rhinitis monitoring plan";
  item.halfCredit = "Longitudinal monitoring outlined";
});

updateItem('Week3_Patient_A_Thursday', '4G.5', item => {
  item.fullCredit = "Documents plan to evaluate therapy modification if control worsens";
  item.halfCredit = "Therapy modification contingency noted";
});

updateItem('Week3_Patient_A_Thursday', '4G.6', item => {
  item.fullCredit = "Notes periodic repeat pulmonary function testing per guidelines";
  item.halfCredit = "Repeat PFT noted";
});

updateItem('Week3_Patient_A_Thursday', '4G.7', item => {
  item.fullCredit = "Plans review of adherence and inhaler technique at follow-up";
  item.halfCredit = "Adherence/technique review planned";
});

updateItem('Week3_Patient_A_Thursday', '5A.3', item => {
  item.fullCredit = "Assessment evaluates asthma control and stability (in narrative, inquiry header, or problem list format)";
  item.halfCredit = "Assessment present";
});

updateItem('Week3_Patient_A_Thursday', '5A.4', item => {
  item.fullCredit = "Plan elements map to assessed active problems (maintaining SMART therapy, praising adherence, rhinitis, vaccines, follow-up)";
  item.halfCredit = "Plan maps to problems";
});

updateItem('Week3_Patient_A_Thursday', '5B.1', item => {
  item.fullCredit = "Reconciles and documents medications with drug, dose, route, and frequency details";
  item.halfCredit = "Medications documented";
});

updateItem('Week3_Patient_A_Thursday', '5B.2', item => {
  item.fullCredit = "Reports objective values with appropriate units (BP, HR, RR, SpO2, BMI, FEV1, FEV1/FVC)";
  item.halfCredit = "Objective values reported";
});

updateItem('Week3_Patient_A_Thursday', '5B.3', item => {
  item.fullCredit = "Includes specific measurable monitoring targets (e.g., ACT >=20, reliever use <=2x/week, FEV1/FVC >=0.70)";
  item.halfCredit = "Monitoring targets included";
});

updateItem('Week3_Patient_A_Thursday', '5B.4', item => {
  item.fullCredit = "Plan contains actionable details with continuing SMART regimen, praising adherence, and follow-up timing";
  item.halfCredit = "Plan actionable";
});

updateItem('Week3_Patient_A_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 guideline rationale supporting maintaining therapy without escalation";
  item.halfCredit = "Guidelines cited";
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
