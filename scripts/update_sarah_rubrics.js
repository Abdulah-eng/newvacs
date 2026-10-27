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
updateItem('Week3_Patient_A_Tuesday', '1A.6', item => {
  item.fullCredit = "States collaborative practice management of asthma (or asthma management / uncontrolled asthma follow-up / evaluation)";
});
updateItem('Week3_Patient_A_Tuesday', '1B.2', item => {
  item.fullCredit = "States wheezing, or documents cough and shortness of breath as primary presenting symptoms";
});
updateItem('Week3_Patient_A_Tuesday', '1B.4', item => {
  item.fullCredit = "States chest tightness, or documents activity-related breathlessness";
});
updateItem('Week3_Patient_A_Tuesday', '1B.5', item => {
  item.fullCredit = "States allergy-season symptom worsening, or links symptoms to seasonal triggers/colds";
});
updateItem('Week3_Patient_A_Tuesday', '1B.9', item => {
  item.fullCredit = "States avoids hiking/outdoor activities (or general exertional activity limitation)";
});
updateItem('Week3_Patient_A_Tuesday', '1B.10', item => {
  item.fullCredit = "States difficulty keeping up with children or general exertional limitation";
});
updateItem('Week3_Patient_A_Tuesday', '1B.11', item => {
  item.fullCredit = "States denies recent ED visits, or notes urgent care visit 6 weeks ago without ED/hospitalization";
});
updateItem('Week3_Patient_A_Tuesday', '1B.12', item => {
  item.fullCredit = "States denies recent hospitalizations, or notes outpatient/urgent care management only";
});
updateItem('Week3_Patient_A_Tuesday', '1B.14', item => {
  item.fullCredit = "States seasonal allergy symptoms (congestion, sneezing, or postnasal drip) or allergic rhinitis";
});
updateItem('Week3_Patient_A_Tuesday', '1B.15', item => {
  item.fullCredit = "States intermittent fluticasone nasal spray use vs prescribed daily use, or notes inconsistent nasal spray adherence";
});
updateItem('Week3_Patient_A_Tuesday', '1B.16', item => {
  item.fullCredit = "States reliance on albuterol rescue only without prior daily controller prescribed (or notes intermittent budesonide with colds)";
});
updateItem('Week3_Patient_A_Tuesday', '1C.3', item => {
  item.fullCredit = "Lists allergic rhinitis under PMH, problems, or subjective history";
});
updateItem('Week3_Patient_A_Tuesday', '1C.11', item => {
  item.fullCredit = "States no prior formal asthma education, or notes patient unfamiliar with daily preventive controller role";
});
updateItem('Week3_Patient_A_Tuesday', '1D.2', item => {
  item.fullCredit = "States teacher (or elementary school teacher)";
});
updateItem('Week3_Patient_A_Tuesday', '1D.6', item => {
  item.fullCredit = "States denies recreational drug use, or documents social history without illicit substances";
});
updateItem('Week3_Patient_A_Tuesday', '1D.8', item => {
  item.fullCredit = "States avoids hiking/outdoor activities or general exertional limitation";
});
updateItem('Week3_Patient_A_Tuesday', '1D.9', item => {
  item.fullCredit = "States teacher occupation (with or without connecting to classroom/respiratory trigger exposures)";
});
updateItem('Week3_Patient_A_Tuesday', '1D.10', item => {
  item.fullCredit = "States lives with husband and two kids (with or without connecting to triggers or action plan)";
});
updateItem('Week3_Patient_A_Tuesday', '1E.16', item => {
  item.fullCredit = "States fluticasone nasal spray use is intermittent / inconsistent in medication history or objective data";
});
updateItem('Week3_Patient_A_Tuesday', '1E.17', item => {
  item.fullCredit = "States immunization gaps (pneumococcal and/or Tdap overdue), or notes 2 vaccine gaps";
});
updateItem('Week3_Patient_A_Tuesday', '1E.19', item => {
  item.fullCredit = "Lists cetirizine for allergic rhinitis / allergy management";
});
updateItem('Week3_Patient_A_Tuesday', '1F.1', item => {
  item.fullCredit = "States denies recent ED visits, or notes urgent care visit without ED evaluation";
});
updateItem('Week3_Patient_A_Tuesday', '1F.2', item => {
  item.fullCredit = "States denies recent hospitalizations, or notes outpatient management only";
});
updateItem('Week3_Patient_A_Tuesday', '1F.5', item => {
  item.fullCredit = "States active rhinitis symptoms (congestion, sneezing) or seasonal allergies";
});
updateItem('Week3_Patient_A_Tuesday', '1G.4', item => {
  item.fullCredit = "States rescue-only reliance / no prior daily controller prescribed, or notes lifelong reliance on SABA";
});
updateItem('Week3_Patient_A_Tuesday', '1G.5', item => {
  item.fullCredit = "States patient goal of improved exercise tolerance, returning to activities, or keeping up with children";
});
updateItem('Week3_Patient_A_Tuesday', '1G.7', item => {
  item.fullCredit = "States need for education on daily controller benefits vs rescue albuterol, or addresses misconception";
});
updateItem('Week3_Patient_A_Tuesday', '1G.8', item => {
  item.fullCredit = "States patient seeks improved asthma symptom control or reduced inhaler reliance";
});
updateItem('Week3_Patient_A_Tuesday', '2B.2', item => {
  item.fullCredit = "Documents FEV1/FVC 0.69 (or 0.76) and post-bronchodilator reversibility meeting GINA criteria";
});
updateItem('Week3_Patient_A_Tuesday', '2B.6', item => {
  item.fullCredit = "States reversible obstruction confirms or supports asthma diagnosis per GINA";
});
updateItem('Week3_Patient_A_Tuesday', '2C.2', item => {
  item.fullCredit = "States SpO2 normal / on room air (no supplemental oxygen indicated)";
});
updateItem('Week3_Patient_A_Tuesday', '2C.3', item => {
  item.fullCredit = "Notes initial baseline spirometry established (or absence of prior baseline comparison)";
});
updateItem('Week3_Patient_A_Tuesday', '2C.4', item => {
  item.fullCredit = "Notes Type 2 biomarkers (FeNO, eosinophils) not assessed at this baseline visit";
});
updateItem('Week3_Patient_A_Tuesday', '2C.5', item => {
  item.fullCredit = "Reports ACT score 16 (uncontrolled) as baseline for serial tracking";
});
updateItem('Week3_Patient_A_Tuesday', '3A.2', item => {
  item.fullCredit = "States uncontrolled asthma (or answers assessment question identifying uncontrolled status)";
});
updateItem('Week3_Patient_A_Tuesday', '3A.3', item => {
  item.fullCredit = "States frequent daytime symptoms occurring most days of the week (1–2x daily on 5–6 days/week)";
});
updateItem('Week3_Patient_A_Tuesday', '3A.10', item => {
  item.fullCredit = "Links spirometric reversibility (+14% / +280 mL) to confirmed asthma diagnosis per GINA";
});
updateItem('Week3_Patient_A_Tuesday', '3A.12', item => {
  item.fullCredit = "Cites GINA regarding SABA-only treatment being associated with increased exacerbation risk";
});
updateItem('Week3_Patient_A_Tuesday', '3A.13', item => {
  item.fullCredit = "States current SABA-only treatment is inconsistent with guideline-directed management";
});
updateItem('Week3_Patient_A_Tuesday', '3A.14', item => {
  item.fullCredit = "States initiation of ICS-formoterol MART (budesonide-formoterol 160/4.5 mcg) or daily ICS controller as appropriate next step";
});
updateItem('Week3_Patient_A_Tuesday', '3A.15', item => {
  item.fullCredit = "References GINA Track 1, AIR, or SMART/MART therapy concepts";
});
updateItem('Week3_Patient_A_Tuesday', '3A.17', item => {
  item.fullCredit = "Notes persistent airway inflammation present in asthma regardless of symptom frequency";
});
updateItem('Week3_Patient_A_Tuesday', '3A.18', item => {
  item.fullCredit = "Notes SABA overuse is associated with increased exacerbation and mortality risk";
});
updateItem('Week3_Patient_A_Tuesday', '3A.19', item => {
  item.fullCredit = "States FEV1/FVC and bronchodilator reversibility confirm asthma diagnosis";
});
updateItem('Week3_Patient_A_Tuesday', '3B.1', item => {
  item.fullCredit = "Names absence of controller therapy, SABA-only reliance, or undertreatment";
});
updateItem('Week3_Patient_A_Tuesday', '3B.2', item => {
  item.fullCredit = "Distinguishes undertreatment from medication failure, or notes patient has not received daily controller";
});
updateItem('Week3_Patient_A_Tuesday', '3B.5', item => {
  item.fullCredit = "Notes initiation of controller therapy before considering escalation";
});
updateItem('Week3_Patient_A_Tuesday', '3B.6', item => {
  item.fullCredit = "Identifies SABA-only reliance as creating exacerbation risk";
});
updateItem('Week3_Patient_A_Tuesday', '3B.7', item => {
  item.fullCredit = "References GINA supporting immediate ICS initiation after diagnosis";
});
updateItem('Week3_Patient_A_Tuesday', '3B.8', item => {
  item.fullCredit = "Notes GINA-cited exacerbation risk reduction with ICS or ICS-formoterol";
});
updateItem('Week3_Patient_A_Tuesday', '3B.9', item => {
  item.fullCredit = "Links SABA-only treatment to worse long-term lung function or airway remodeling";
});
updateItem('Week3_Patient_A_Tuesday', '3B.10', item => {
  item.fullCredit = "Confirms controller initiation as a modifiable first-line treatment gap";
});
updateItem('Week3_Patient_A_Tuesday', '3C.1', item => {
  item.fullCredit = "Names allergic rhinitis as problem or comorbidity";
});
updateItem('Week3_Patient_A_Tuesday', '3C.2', item => {
  item.fullCredit = "Assesses allergic rhinitis control status as suboptimal due to inconsistent nasal spray use";
});
updateItem('Week3_Patient_A_Tuesday', '3C.3', item => {
  item.fullCredit = "Notes congestion as an active symptom or seasonal complaint";
});
updateItem('Week3_Patient_A_Tuesday', '3C.4', item => {
  item.fullCredit = "Notes sneezing as an active symptom or seasonal complaint";
});
updateItem('Week3_Patient_A_Tuesday', '3C.5', item => {
  item.fullCredit = "Notes postnasal drip, drainage, or upper airway symptoms as asthma trigger";
});
updateItem('Week3_Patient_A_Tuesday', '3C.6', item => {
  item.fullCredit = "Notes inconsistent fluticasone nasal spray use despite daily prescription";
});
updateItem('Week3_Patient_A_Tuesday', '3C.7', item => {
  item.fullCredit = "Notes patient was unaware that intranasal corticosteroid should be used daily";
});
updateItem('Week3_Patient_A_Tuesday', '3C.8', item => {
  item.fullCredit = "Notes upper-lower airway link between allergic rhinitis and asthma control";
});
updateItem('Week3_Patient_A_Tuesday', '3C.9', item => {
  item.fullCredit = "Notes optimizing rhinitis management improves both upper and lower airway control";
});
updateItem('Week3_Patient_A_Tuesday', '3C.10', item => {
  item.fullCredit = "Notes upper airway inflammation or postnasal drip as an asthma trigger";
});
updateItem('Week3_Patient_A_Tuesday', '3C.11', item => {
  item.fullCredit = "Concludes intranasal corticosteroid adherence must be optimized";
});
updateItem('Week3_Patient_A_Tuesday', '3C.12', item => {
  item.fullCredit = "Names allergic rhinitis as an asthma comorbidity anywhere in the note";
});
updateItem('Week3_Patient_A_Tuesday', '3D.1', item => {
  item.fullCredit = "Names asthma knowledge deficit, education need, or controller vs reliever understanding";
});
updateItem('Week3_Patient_A_Tuesday', '3D.4', item => {
  item.fullCredit = "Notes lack of prior formal asthma education or action plan";
});
updateItem('Week3_Patient_A_Tuesday', '3D.5', item => {
  item.fullCredit = "Emphasizes daily controller adherence and inhaler use optimization";
});
updateItem('Week3_Patient_A_Tuesday', '3D.6', item => {
  item.fullCredit = "Notes patient education supports long-term disease control";
});
updateItem('Week3_Patient_A_Tuesday', '3D.7', item => {
  item.fullCredit = "Identifies written asthma action plan as an education deliverable";
});
updateItem('Week3_Patient_A_Tuesday', '3D.8', item => {
  item.fullCredit = "Identifies inhaler technique education as a required component";
});
updateItem('Week3_Patient_A_Tuesday', '3D.9', item => {
  item.fullCredit = "Identifies ICS safety counseling and benefit explanation as required";
});
updateItem('Week3_Patient_A_Tuesday', '3E.1', item => {
  item.fullCredit = "Names preventive care gaps, immunization needs, or pneumococcal/Tdap vaccines";
});
updateItem('Week3_Patient_A_Tuesday', '3E.2', item => {
  item.fullCredit = "Addresses pneumococcal vaccination gap in Assessment";
});
updateItem('Week3_Patient_A_Tuesday', '3E.3', item => {
  item.fullCredit = "Addresses Tdap overdue status in Assessment";
});
updateItem('Week3_Patient_A_Tuesday', '3E.4', item => {
  item.fullCredit = "Confirms influenza vaccination up-to-date and notes asthma relevance";
});
updateItem('Week3_Patient_A_Tuesday', '3E.5', item => {
  item.fullCredit = "Confirms COVID-19 vaccination status up-to-date";
});
updateItem('Week3_Patient_A_Tuesday', '3E.6', item => {
  item.fullCredit = "Cites GINA recommendation for respiratory vaccinations in asthma";
});
updateItem('Week3_Patient_A_Tuesday', '3E.7', item => {
  item.fullCredit = "Indicates immunization record review or registry verification";
});
updateItem('Week3_Patient_A_Tuesday', '3E.8', item => {
  item.fullCredit = "Names pneumococcal and/or Tdap gaps in Assessment";
});
updateItem('Week3_Patient_A_Tuesday', '3E.9', item => {
  item.fullCredit = "Discusses preventive care optimization as appropriate and actionable";
});
updateItem('Week3_Patient_A_Tuesday', '3E.10', item => {
  item.fullCredit = "Links influenza vaccination to asthma exacerbation risk reduction";
});
updateItem('Week3_Patient_A_Tuesday', '3E.11', item => {
  item.fullCredit = "Recommends vaccination administration or pharmacy referral pathway";
});
updateItem('Week3_Patient_A_Tuesday', '4A.2', item => {
  item.fullCredit = "Names specific agent and dose (e.g. budesonide-formoterol 160/4.5 mcg, or Symbicort)";
});
updateItem('Week3_Patient_A_Tuesday', '4A.3', item => {
  item.fullCredit = "Specifies maintenance dosing of 1 inhalation BID";
});
updateItem('Week3_Patient_A_Tuesday', '4A.4', item => {
  item.fullCredit = "Specifies reliever dosing of 1 inhalation PRN for symptoms";
});
updateItem('Week3_Patient_A_Tuesday', '4A.5', item => {
  item.fullCredit = "Names SMART or MART regimen concept";
});
updateItem('Week3_Patient_A_Tuesday', '4A.6', item => {
  item.fullCredit = "Counsels to discontinue albuterol as primary monotherapy in favor of SMART/ICS";
});
updateItem('Week3_Patient_A_Tuesday', '4A.7', item => {
  item.fullCredit = "Describes education as individualized to patient's triggers and lifestyle";
});
updateItem('Week3_Patient_A_Tuesday', '4A.9', item => {
  item.fullCredit = "Provides written asthma action plan in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4A.10', item => {
  item.fullCredit = "Reviews inhaler technique in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4A.11', item => {
  item.fullCredit = "Addresses ICS safety concerns and benefits in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4A.12', item => {
  item.fullCredit = "Discusses airway inflammation pathophysiology with patient";
});
updateItem('Week3_Patient_A_Tuesday', '4A.13', item => {
  item.fullCredit = "Discusses expected treatment goals (reduced symptoms, activity tolerance)";
});
updateItem('Week3_Patient_A_Tuesday', '4A.14', item => {
  item.fullCredit = "Counsels on maximum daily inhalation limit for formoterol combination";
});
updateItem('Week3_Patient_A_Tuesday', '4B.1', item => {
  item.fullCredit = "Continues cetirizine 10 mg PO daily in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4B.2', item => {
  item.fullCredit = "Continues fluticasone nasal spray 1 spray/nostril daily in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4B.3', item => {
  item.fullCredit = "Counsels on daily vs intermittent use of fluticasone nasal spray";
});
updateItem('Week3_Patient_A_Tuesday', '4B.4', item => {
  item.fullCredit = "Reviews nasal spray administration technique";
});
updateItem('Week3_Patient_A_Tuesday', '4B.5', item => {
  item.fullCredit = "Encourages allergen avoidance strategies in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4B.6', item => {
  item.fullCredit = "Links rhinitis management to asthma control improvement";
});
updateItem('Week3_Patient_A_Tuesday', '4B.7', item => {
  item.fullCredit = "Plans rhinitis symptom follow-up assessment";
});
updateItem('Week3_Patient_A_Tuesday', '4B.8', item => {
  item.fullCredit = "Discusses upper-lower airway concordance rationale with patient";
});
updateItem('Week3_Patient_A_Tuesday', '4C.1', item => {
  item.fullCredit = "Discusses role of airway inflammation with patient";
});
updateItem('Week3_Patient_A_Tuesday', '4C.2', item => {
  item.fullCredit = "Discusses ICS benefits with patient";
});
updateItem('Week3_Patient_A_Tuesday', '4C.3', item => {
  item.fullCredit = "Addresses steroid safety concerns / clarifies emergency vs daily role";
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
  item.fullCredit = "Plans serial ACT score monitoring";
});
updateItem('Week3_Patient_A_Tuesday', '4D.2', item => {
  item.fullCredit = "Plans daytime symptom frequency monitoring";
});
updateItem('Week3_Patient_A_Tuesday', '4D.3', item => {
  item.fullCredit = "Plans nighttime awakening monitoring";
});
updateItem('Week3_Patient_A_Tuesday', '4D.4', item => {
  item.fullCredit = "Plans albuterol / reliever use frequency monitoring";
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
  item.fullCredit = "Plans response to SMART/controller therapy monitoring";
});
updateItem('Week3_Patient_A_Tuesday', '4D.10', item => {
  item.fullCredit = "Plans spirometry or lung function reassessment";
});
updateItem('Week3_Patient_A_Tuesday', '4E.1', item => {
  item.fullCredit = "Reviews vaccination history in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4E.2', item => {
  item.fullCredit = "Recommends pneumococcal vaccination in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4E.3', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
});
updateItem('Week3_Patient_A_Tuesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza vaccination status or GINA relevance";
});
updateItem('Week3_Patient_A_Tuesday', '4F.1', item => {
  item.fullCredit = "Specifies follow-up timeframe of 2–6 weeks or approximately 3 months";
});
updateItem('Week3_Patient_A_Tuesday', '4F.2', item => {
  item.fullCredit = "Specifies reassessment of asthma control at follow-up";
});
updateItem('Week3_Patient_A_Tuesday', '4F.3', item => {
  item.fullCredit = "Specifies reassessment of inhaler technique at follow-up";
});
updateItem('Week3_Patient_A_Tuesday', '4F.4', item => {
  item.fullCredit = "Specifies reassessment of adherence at follow-up";
});
updateItem('Week3_Patient_A_Tuesday', '4F.5', item => {
  item.fullCredit = "Specifies reassessment of symptom burden or SMART response at follow-up";
});
updateItem('Week3_Patient_A_Tuesday', '5B.3', item => {
  item.fullCredit = "Includes numeric goals or thresholds (e.g., ACT score >= 20, FEV1/FVC, or GINA criteria)";
});
updateItem('Week3_Patient_A_Tuesday', '5B.4', item => {
  item.fullCredit = "Details concrete medication, dosing, follow-up timing, or written action plan";
});
updateItem('Week3_Patient_A_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites GINA guideline rationale supporting asthma recommendations";
});

// ==================== SARAH WEDNESDAY ====================
updateItem('Week3_Patient_A_Wednesday', '1B.2', item => {
  item.fullCredit = "States less wheezing / improved breathing since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.3', item => {
  item.fullCredit = "States less shortness of breath overall since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.4', item => {
  item.fullCredit = "States improved exercise tolerance since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.6', item => {
  item.fullCredit = "States better able to keep up with children or daily activities";
});
updateItem('Week3_Patient_A_Wednesday', '1B.8', item => {
  item.fullCredit = "States reliever use frequency 1–2 times weekly with exercise";
});
updateItem('Week3_Patient_A_Wednesday', '1B.10', item => {
  item.fullCredit = "States denial of ED visits since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.11', item => {
  item.fullCredit = "States denial of hospitalizations since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.12', item => {
  item.fullCredit = "States denial of exacerbations since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.13', item => {
  item.fullCredit = "States denial of oral corticosteroid use since previous visit";
});
updateItem('Week3_Patient_A_Wednesday', '1B.15', item => {
  item.fullCredit = "States missed doses very few (~1 dose or 1–2 doses) with good adherence";
});
updateItem('Week3_Patient_A_Wednesday', '1B.19', item => {
  item.fullCredit = "States no affordability concerns with current Symbicort regimen";
});
updateItem('Week3_Patient_A_Wednesday', '1B.20', item => {
  item.fullCredit = "States denial of adverse effects from current inhaler";
});
updateItem('Week3_Patient_A_Wednesday', '1C.5', item => {
  item.fullCredit = "States no major surgical history (or denies surgeries)";
});
updateItem('Week3_Patient_A_Wednesday', '1C.10', item => {
  item.fullCredit = "States maternal asthma and allergic rhinitis history (atopic link)";
});
updateItem('Week3_Patient_A_Wednesday', '1C.11', item => {
  item.fullCredit = "States no additional PMH beyond asthma and allergic rhinitis";
});
updateItem('Week3_Patient_A_Wednesday', '1D.3', item => {
  item.fullCredit = "States teacher (or elementary school teacher)";
});
updateItem('Week3_Patient_A_Wednesday', '1D.6', item => {
  item.fullCredit = "States denial of recreational drug use";
});
updateItem('Week3_Patient_A_Wednesday', '1D.7', item => {
  item.fullCredit = "States improved physical activity or exercise since prior visit";
});
updateItem('Week3_Patient_A_Wednesday', '1D.9', item => {
  item.fullCredit = "Notes household with two children (with or without viral exposure context)";
});
updateItem('Week3_Patient_A_Wednesday', '1E.4', item => {
  item.fullCredit = "Lists albuterol HFA as PRN rescue or notes Symbicort serves PRN role in SMART";
});
updateItem('Week3_Patient_A_Wednesday', '1E.5', item => {
  item.fullCredit = "Documents albuterol HFA regimen (2 puffs q4-6h PRN) or Symbicort PRN";
});
updateItem('Week3_Patient_A_Wednesday', '1E.16', item => {
  item.fullCredit = "Documents OTC loratadine PRN and multivitamin with no other medications";
});
updateItem('Week3_Patient_A_Wednesday', '1F.1', item => {
  item.fullCredit = "States denial of ED visits since therapy initiation";
});
updateItem('Week3_Patient_A_Wednesday', '1F.2', item => {
  item.fullCredit = "States denial of hospitalizations since therapy initiation";
});
updateItem('Week3_Patient_A_Wednesday', '1F.3', item => {
  item.fullCredit = "States denial of exacerbations since therapy initiation";
});
updateItem('Week3_Patient_A_Wednesday', '1F.4', item => {
  item.fullCredit = "States denial of OCS use since therapy initiation";
});
updateItem('Week3_Patient_A_Wednesday', '1F.5', item => {
  item.fullCredit = "States denial of adverse medication effects";
});
updateItem('Week3_Patient_A_Wednesday', '1F.6', item => {
  item.fullCredit = "States denial of affordability concerns";
});
updateItem('Week3_Patient_A_Wednesday', '1F.9', item => {
  item.fullCredit = "States patient has no new acute complaints since therapy initiation";
});
updateItem('Week3_Patient_A_Wednesday', '1G.2', item => {
  item.fullCredit = "States goal of maintaining improved asthma control and exercise tolerance";
});
updateItem('Week3_Patient_A_Wednesday', '1G.4', item => {
  item.fullCredit = "States patient is receptive to inhaler technique demonstration and correction";
});
updateItem('Week3_Patient_A_Wednesday', '1G.6', item => {
  item.fullCredit = "Notes absence of medication concerns or cost barriers";
});
updateItem('Week3_Patient_A_Wednesday', '2A.2', item => {
  item.fullCredit = "States BP 120/76 (interpreted as normal / within goal)";
});
updateItem('Week3_Patient_A_Wednesday', '2A.11', item => {
  item.fullCredit = "States SpO2 99% (interpreted as normal / no hypoxemia)";
});
updateItem('Week3_Patient_A_Wednesday', '2B.2', item => {
  item.fullCredit = "Documents FEV1/FVC 0.76 (improved from baseline 0.69)";
});
updateItem('Week3_Patient_A_Wednesday', '2B.5', item => {
  item.fullCredit = "Documents post-bronchodilator response (+9% / +180 mL) with GINA threshold context";
});
updateItem('Week3_Patient_A_Wednesday', '2B.10', item => {
  item.fullCredit = "Notes current lab and spirometry data sufficient (no additional labs needed)";
});
updateItem('Week3_Patient_A_Wednesday', '2C.3', item => {
  item.fullCredit = "Interprets spirometry values showing improved airflow obstruction";
});
updateItem('Week3_Patient_A_Wednesday', '2C.4', item => {
  item.fullCredit = "Notes FeNO/eosinophils not assessed at this follow-up visit";
});
updateItem('Week3_Patient_A_Wednesday', '2C.5', item => {
  item.fullCredit = "Concludes objective data support an improving clinical picture (ACT 21, FEV1/FVC 0.76)";
});
updateItem('Week3_Patient_A_Wednesday', '2C.6', item => {
  item.fullCredit = "Notes spirometry and ACT served as primary objective monitoring tools";
});
updateItem('Week3_Patient_A_Wednesday', '2C.7', item => {
  item.fullCredit = "Notes allergic rhinitis improvement is clinically reported by patient";
});
updateItem('Week3_Patient_A_Wednesday', '3A.1', item => {
  item.fullCredit = "Names asthma as a problem in Assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3A.2', item => {
  item.fullCredit = "Labels asthma control status as improved / well controlled (ACT 21)";
});
updateItem('Week3_Patient_A_Wednesday', '3A.5', item => {
  item.fullCredit = "Notes reduced reliever use frequency (1–2x/week with exercise) supporting control";
});
updateItem('Week3_Patient_A_Wednesday', '3A.6', item => {
  item.fullCredit = "Notes absence or marked reduction of nighttime symptoms";
});
updateItem('Week3_Patient_A_Wednesday', '3A.8', item => {
  item.fullCredit = "Notes absence of exacerbations, OCS use, or ED visits since last visit";
});
updateItem('Week3_Patient_A_Wednesday', '3A.9', item => {
  item.fullCredit = "Cites GINA guideline as assessment framework";
});
updateItem('Week3_Patient_A_Wednesday', '3A.10', item => {
  item.fullCredit = "Evaluates GINA control domains (symptoms, reliever use, exacerbations, adherence, technique)";
});
updateItem('Week3_Patient_A_Wednesday', '3A.11', item => {
  item.fullCredit = "Concludes therapy escalation is NOT warranted (or that technique must be corrected before escalating)";
});
updateItem('Week3_Patient_A_Wednesday', '3A.12', item => {
  item.fullCredit = "Provides rationale for withholding escalation (well controlled ACT 21, symptoms linked to technique)";
});
updateItem('Week3_Patient_A_Wednesday', '3A.15', item => {
  item.fullCredit = "Links allergic rhinitis improvement to overall asthma stability";
});
updateItem('Week3_Patient_A_Wednesday', '3A.16', item => {
  item.fullCredit = "States current asthma therapy (Symbicort SMART) is effective and well tolerated";
});
updateItem('Week3_Patient_A_Wednesday', '3B.1', item => {
  item.fullCredit = "Labels inhaler technique deficiency as a clinical problem in Assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3B.4', item => {
  item.fullCredit = "Notes technique errors contribute to residual exertional symptoms";
});
updateItem('Week3_Patient_A_Wednesday', '3B.5', item => {
  item.fullCredit = "Classifies technique deficiency as an implementation issue rather than medication failure";
});
updateItem('Week3_Patient_A_Wednesday', '3B.6', item => {
  item.fullCredit = "States technique correction should precede any consideration of escalation";
});
updateItem('Week3_Patient_A_Wednesday', '3B.8', item => {
  item.fullCredit = "Plans technique reassessment at next visit";
});
updateItem('Week3_Patient_A_Wednesday', '3B.9', item => {
  item.fullCredit = "Cites GINA recommendation to check and correct inhaler technique";
});
updateItem('Week3_Patient_A_Wednesday', '3B.10', item => {
  item.fullCredit = "Notes incorrect technique reduces lung drug deposition and efficacy";
});
updateItem('Week3_Patient_A_Wednesday', '3C.1', item => {
  item.fullCredit = "Identifies allergic rhinitis as a problem in Assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3C.2', item => {
  item.fullCredit = "Labels allergic rhinitis control status as improved on daily fluticasone nasal spray";
});
updateItem('Week3_Patient_A_Wednesday', '3C.4', item => {
  item.fullCredit = "Notes improved upper airway control contributes to asthma outcomes";
});
updateItem('Week3_Patient_A_Wednesday', '3C.5', item => {
  item.fullCredit = "States current rhinitis therapy (cetirizine + fluticasone spray) is effective";
});
updateItem('Week3_Patient_A_Wednesday', '3C.6', item => {
  item.fullCredit = "States rhinitis therapy is well tolerated";
});
updateItem('Week3_Patient_A_Wednesday', '3C.7', item => {
  item.fullCredit = "States no therapeutic change is indicated for allergic rhinitis";
});
updateItem('Week3_Patient_A_Wednesday', '3C.8', item => {
  item.fullCredit = "Cites intranasal corticosteroid as guideline-appropriate per GINA";
});
updateItem('Week3_Patient_A_Wednesday', '3C.9', item => {
  item.fullCredit = "Encourages continued allergen avoidance strategies";
});
updateItem('Week3_Patient_A_Wednesday', '3C.10', item => {
  item.fullCredit = "Reinforces adherence to daily fluticasone nasal spray";
});
updateItem('Week3_Patient_A_Wednesday', '3D.1', item => {
  item.fullCredit = "Names asthma self-management or technique optimization as a problem in Assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3D.7', item => {
  item.fullCredit = "States continued education and adherence reinforcement is appropriate";
});
updateItem('Week3_Patient_A_Wednesday', '3D.8', item => {
  item.fullCredit = "Lists self-management education targets (technique, adherence, trigger avoidance)";
});
updateItem('Week3_Patient_A_Wednesday', '3D.9', item => {
  item.fullCredit = "Links self-management improvement to positive clinical outcomes";
});
updateItem('Week3_Patient_A_Wednesday', '3D.10', item => {
  item.fullCredit = "Cites GINA self-management education recommendations";
});
updateItem('Week3_Patient_A_Wednesday', '3D.11', item => {
  item.fullCredit = "Encourages ongoing patient symptom monitoring";
});
updateItem('Week3_Patient_A_Wednesday', '3E.1', item => {
  item.fullCredit = "Names preventive care or immunization gaps as a problem in Assessment";
});
updateItem('Week3_Patient_A_Wednesday', '3E.6', item => {
  item.fullCredit = "Cites GINA vaccine recommendations for asthma patients";
});
updateItem('Week3_Patient_A_Wednesday', '3E.7', item => {
  item.fullCredit = "States pneumococcal vaccination and Tdap booster are recommended";
});
updateItem('Week3_Patient_A_Wednesday', '3E.8', item => {
  item.fullCredit = "States preventive care optimization remains appropriate";
});
updateItem('Week3_Patient_A_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies SMART maintenance dose (1 inhalation BID)";
});
updateItem('Week3_Patient_A_Wednesday', '4A.3', item => {
  item.fullCredit = "Specifies SMART reliever dose (1 inhalation PRN for exercise/symptoms)";
});
updateItem('Week3_Patient_A_Wednesday', '4A.4', item => {
  item.fullCredit = "Continues SMART therapy to manage exercise-induced symptoms with PRN dosing";
});
updateItem('Week3_Patient_A_Wednesday', '4A.5', item => {
  item.fullCredit = "Maintains low-dose ICS-formoterol SMART therapy without escalation";
});
updateItem('Week3_Patient_A_Wednesday', '4A.6', item => {
  item.fullCredit = "Discusses guideline-based management and reassessment timeline";
});
updateItem('Week3_Patient_A_Wednesday', '4A.7', item => {
  item.fullCredit = "Notes step-down eligibility may be considered after 3 months of sustained control";
});
updateItem('Week3_Patient_A_Wednesday', '4A.8', item => {
  item.fullCredit = "Advises continuing daily ICS maintenance during viral illnesses";
});
updateItem('Week3_Patient_A_Wednesday', '4A.9', item => {
  item.fullCredit = "Reinforces written asthma action plan in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4A.10', item => {
  item.fullCredit = "Reinforces tobacco, vaping, and smoke avoidance";
});
updateItem('Week3_Patient_A_Wednesday', '4A.11', item => {
  item.fullCredit = "Encourages regular physical activity with pre-exercise SMART dose as needed";
});
updateItem('Week3_Patient_A_Wednesday', '4B.1', item => {
  item.fullCredit = "Plans detailed inhaler technique review and correction";
});
updateItem('Week3_Patient_A_Wednesday', '4B.2', item => {
  item.fullCredit = "Plans physical demonstration of proper inhaler administration";
});
updateItem('Week3_Patient_A_Wednesday', '4B.3', item => {
  item.fullCredit = "Instructs patient to exhale completely away from inhaler before inhalation";
});
updateItem('Week3_Patient_A_Wednesday', '4B.4', item => {
  item.fullCredit = "Instructs patient to hold breath for 10 seconds after inhalation";
});
updateItem('Week3_Patient_A_Wednesday', '4B.5', item => {
  item.fullCredit = "Plans teach-back demonstration with patient";
});
updateItem('Week3_Patient_A_Wednesday', '4B.6', item => {
  item.fullCredit = "Plans reassessment of technique at next follow-up visit";
});
updateItem('Week3_Patient_A_Wednesday', '4B.7', item => {
  item.fullCredit = "Utilizes device-specific inhaler administration checklist";
});
updateItem('Week3_Patient_A_Wednesday', '4C.1', item => {
  item.fullCredit = "Continues cetirizine 10 mg PO daily in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4C.2', item => {
  item.fullCredit = "Continues fluticasone nasal spray 1 spray/nostril daily in Plan";
});
updateItem('Week3_Patient_A_Wednesday', '4C.3', item => {
  item.fullCredit = "Reinforces consistent daily fluticasone nasal spray adherence";
});
updateItem('Week3_Patient_A_Wednesday', '4C.4', item => {
  item.fullCredit = "Reinforces allergen avoidance strategies";
});
updateItem('Week3_Patient_A_Wednesday', '4C.5', item => {
  item.fullCredit = "States no change indicated for rhinitis therapy given good response";
});
updateItem('Week3_Patient_A_Wednesday', '4C.6', item => {
  item.fullCredit = "Cites GINA alignment for intranasal corticosteroid in allergic rhinitis comorbidity";
});
updateItem('Week3_Patient_A_Wednesday', '4C.7', item => {
  item.fullCredit = "Links continued rhinitis control to ongoing asthma stability";
});
updateItem('Week3_Patient_A_Wednesday', '4D.1', item => {
  item.fullCredit = "Reinforces controller vs reliever concepts";
});
updateItem('Week3_Patient_A_Wednesday', '4D.2', item => {
  item.fullCredit = "Reviews SMART therapy dual role (maintenance + PRN reliever)";
});
updateItem('Week3_Patient_A_Wednesday', '4D.3', item => {
  item.fullCredit = "Praises and reinforces adherence to daily maintenance dosing";
});
updateItem('Week3_Patient_A_Wednesday', '4D.4', item => {
  item.fullCredit = "Reviews trigger avoidance and environmental controls";
});
updateItem('Week3_Patient_A_Wednesday', '4D.5', item => {
  item.fullCredit = "Encourages ongoing patient symptom monitoring";
});
updateItem('Week3_Patient_A_Wednesday', '4D.6', item => {
  item.fullCredit = "Counsels on maximum daily Symbicort inhalation limit";
});
updateItem('Week3_Patient_A_Wednesday', '4D.7', item => {
  item.fullCredit = "Educates on red flag symptoms and when to seek urgent/emergency care";
});
updateItem('Week3_Patient_A_Wednesday', '4D.8', item => {
  item.fullCredit = "Reinforces using written asthma action plan";
});
updateItem('Week3_Patient_A_Wednesday', '4D.9', item => {
  item.fullCredit = "Educates on respiratory vaccine importance for asthma patients";
});
updateItem('Week3_Patient_A_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination";
});
updateItem('Week3_Patient_A_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster";
});
updateItem('Week3_Patient_A_Wednesday', '4E.3', item => {
  item.fullCredit = "Confirms influenza vaccine up to date";
});
updateItem('Week3_Patient_A_Wednesday', '4E.4', item => {
  item.fullCredit = "Confirms COVID-19 vaccine up to date";
});
updateItem('Week3_Patient_A_Wednesday', '4E.5', item => {
  item.fullCredit = "Advises keeping respiratory vaccines current";
});
updateItem('Week3_Patient_A_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans to monitor ACT score at follow-up";
});
updateItem('Week3_Patient_A_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans to monitor daytime symptom frequency at follow-up";
});
updateItem('Week3_Patient_A_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans to monitor reliever use frequency at follow-up";
});
updateItem('Week3_Patient_A_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans to monitor nighttime awakenings at follow-up";
});
updateItem('Week3_Patient_A_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans to monitor for asthma exacerbations at follow-up";
});
updateItem('Week3_Patient_A_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans to reassess inhaler technique at next visit";
});
updateItem('Week3_Patient_A_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans to assess medication adherence at follow-up";
});
updateItem('Week3_Patient_A_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans to monitor allergic rhinitis symptoms at follow-up";
});
updateItem('Week3_Patient_A_Wednesday', '4F.9', item => {
  item.fullCredit = "Plans periodic spirometry reassessment per GINA timeline";
});
updateItem('Week3_Patient_A_Wednesday', '4F.10', item => {
  item.fullCredit = "Flags reassessment of escalation if control worsens";
});
updateItem('Week3_Patient_A_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe of 4–6 weeks or 1–3 months";
});
updateItem('Week3_Patient_A_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans to reassess asthma control at next visit";
});
updateItem('Week3_Patient_A_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans to reassess inhaler technique at next visit";
});
updateItem('Week3_Patient_A_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans to reassess symptom burden at next visit";
});
updateItem('Week3_Patient_A_Wednesday', '4G.5', item => {
  item.fullCredit = "Addresses evaluating therapy modification if control deteriorates";
});
updateItem('Week3_Patient_A_Wednesday', '4G.6', item => {
  item.fullCredit = "Mentions evaluating step-down eligibility after sustained control";
});
updateItem('Week3_Patient_A_Wednesday', '5B.2', item => {
  item.fullCredit = "Documents clinical values with standard units (BMI 27.5 kg/m²)";
});
updateItem('Week3_Patient_A_Wednesday', '5B.3', item => {
  item.fullCredit = "Includes specific target criteria (e.g. ACT score >= 20, GINA control criteria)";
});
updateItem('Week3_Patient_A_Wednesday', '5B.4', item => {
  item.fullCredit = "Provides concrete actionable plan detailing SMART dosing, technique, and follow-up";
});
updateItem('Week3_Patient_A_Wednesday', '5C.2', item => {
  item.fullCredit = "Cites GINA guideline rationale for continuing SMART and addressing technique";
});
updateItem('Week3_Patient_A_Wednesday', '5C.3', item => {
  item.fullCredit = "Accurately acknowledges patient is already established on Symbicort SMART therapy";
});

// ==================== SARAH THURSDAY ====================
updateItem('Week3_Patient_A_Thursday', '1A.6', item => {
  item.fullCredit = "States asthma follow-up / evaluation as reason for visit management";
});
updateItem('Week3_Patient_A_Thursday', '1A.8', item => {
  item.fullCredit = "States denial of recent ED visits (or notes urgent care flare 6 weeks ago without ED visits)";
});
updateItem('Week3_Patient_A_Thursday', '1B.1', item => {
  item.fullCredit = "States sustained or longitudinal asthma control / 'things are great'";
});
updateItem('Week3_Patient_A_Thursday', '1B.3', item => {
  item.fullCredit = "States PRN Symbicort used 1–2 times/week for exercise or appropriate SMART relief";
});
updateItem('Week3_Patient_A_Thursday', '1B.5', item => {
  item.fullCredit = "States no activity limitation in subjective history";
});
updateItem('Week3_Patient_A_Thursday', '1B.7', item => {
  item.fullCredit = "States ability to keep up with children and daily activities";
});
updateItem('Week3_Patient_A_Thursday', '1B.15', item => {
  item.fullCredit = "Documents excellent adherence to Symbicort in subjective/interview findings";
});
updateItem('Week3_Patient_A_Thursday', '1B.16', item => {
  item.fullCredit = "Notes continued inhaler use with technique reviewed at prior visit";
});
updateItem('Week3_Patient_A_Thursday', '1B.17', item => {
  item.fullCredit = "Documents denial of affordability concerns or adverse effects";
});
updateItem('Week3_Patient_A_Thursday', '1C.2', item => {
  item.fullCredit = "Lists allergic rhinitis under PMH, problems, or subjective history";
});
updateItem('Week3_Patient_A_Thursday', '1C.3', item => {
  item.fullCredit = "References seasonal allergies or allergic rhinitis";
});
updateItem('Week3_Patient_A_Thursday', '1C.8', item => {
  item.fullCredit = "Notes allergic rhinitis is controlled on daily fluticasone nasal spray and cetirizine";
});
updateItem('Week3_Patient_A_Thursday', '1D.2', item => {
  item.fullCredit = "States teacher (or elementary school teacher)";
});
updateItem('Week3_Patient_A_Thursday', '1D.7', item => {
  item.fullCredit = "Documents regular physical activity or exercise";
});
updateItem('Week3_Patient_A_Thursday', '1D.9', item => {
  item.fullCredit = "Notes teacher occupation context (with or without viral/school trigger links)";
});
updateItem('Week3_Patient_A_Thursday', '1D.10', item => {
  item.fullCredit = "Notes household with two children (with or without activity/trigger links)";
});
updateItem('Week3_Patient_A_Thursday', '1E.16', item => {
  item.fullCredit = "Lists rhinitis medications (fluticasone spray + cetirizine) with controlled status";
});
updateItem('Week3_Patient_A_Thursday', '1F.1', item => {
  item.fullCredit = "States symptoms well controlled with minimal PRN use (1–2x/week with exercise)";
});
updateItem('Week3_Patient_A_Thursday', '1F.2', item => {
  item.fullCredit = "States denial of adverse drug effects";
});
updateItem('Week3_Patient_A_Thursday', '1F.3', item => {
  item.fullCredit = "States denial of affordability concerns";
});
updateItem('Week3_Patient_A_Thursday', '1F.4', item => {
  item.fullCredit = "States rhinitis symptoms stable / controlled";
});
updateItem('Week3_Patient_A_Thursday', '1F.6', item => {
  item.fullCredit = "States denial of activity limitations";
});
updateItem('Week3_Patient_A_Thursday', '1G.1', item => {
  item.fullCredit = "States patient goal of maintaining asthma control";
});
updateItem('Week3_Patient_A_Thursday', '1G.2', item => {
  item.fullCredit = "Assesses patient understanding of asthma self-management plan";
});
updateItem('Week3_Patient_A_Thursday', '1G.3', item => {
  item.fullCredit = "States patient goal of maintaining full physical activity";
});
updateItem('Week3_Patient_A_Thursday', '1G.5', item => {
  item.fullCredit = "Notes absence of affordability or adverse effect concerns as patient goals/barriers";
});
updateItem('Week3_Patient_A_Thursday', '2B.6', item => {
  item.fullCredit = "Interprets PFT findings (FEV1 85% pred, FEV1/FVC 0.77) as consistent with well-controlled asthma";
});
updateItem('Week3_Patient_A_Thursday', '2C.3', item => {
  item.fullCredit = "Notes FEV1/FVC 0.77 is above the 0.70 obstruction threshold";
});
updateItem('Week3_Patient_A_Thursday', '2C.4', item => {
  item.fullCredit = "Notes current PFT confirms stable airflow with longitudinal follow-up";
});
updateItem('Week3_Patient_A_Thursday', '3A.1', item => {
  item.fullCredit = "States asthma is well controlled on SMART therapy (ACT 22)";
});
updateItem('Week3_Patient_A_Thursday', '3A.3', item => {
  item.fullCredit = "Cites GINA guideline criteria in Assessment";
});
updateItem('Week3_Patient_A_Thursday', '3A.4', item => {
  item.fullCredit = "Cites GINA daytime symptom frequency criterion (<= 2 days/week)";
});
updateItem('Week3_Patient_A_Thursday', '3A.5', item => {
  item.fullCredit = "Cites GINA nighttime awakening criterion (none or <= 1/month)";
});
updateItem('Week3_Patient_A_Thursday', '3A.6', item => {
  item.fullCredit = "Cites GINA reliever use criterion (<= 2 days/week)";
});
updateItem('Week3_Patient_A_Thursday', '3A.7', item => {
  item.fullCredit = "Cites GINA activity limitation criterion (none)";
});
updateItem('Week3_Patient_A_Thursday', '3A.9', item => {
  item.fullCredit = "Assesses current SMART therapy as highly effective";
});
updateItem('Week3_Patient_A_Thursday', '3A.10', item => {
  item.fullCredit = "Notes therapy is well tolerated with no reported adverse effects";
});
updateItem('Week3_Patient_A_Thursday', '3A.11', item => {
  item.fullCredit = "States sustained improvement since SMART initiation (ACT 16 -> 21 -> 22)";
});
updateItem('Week3_Patient_A_Thursday', '3A.12', item => {
  item.fullCredit = "Notes minimal symptom burden on current regimen";
});
updateItem('Week3_Patient_A_Thursday', '3A.13', item => {
  item.fullCredit = "Documents current reliever use frequency (1–2x/week with exercise)";
});
updateItem('Week3_Patient_A_Thursday', '3A.14', item => {
  item.fullCredit = "Assesses future exacerbation risk noting 6-week-ago flare despite current good control (ACT 22)";
});
updateItem('Week3_Patient_A_Thursday', '3A.15', item => {
  item.fullCredit = "Notes no current activity limitation";
});
updateItem('Week3_Patient_A_Thursday', '3A.16', item => {
  item.fullCredit = "Interprets FEV1/FVC 0.77 relative to 0.70 obstruction threshold";
});
updateItem('Week3_Patient_A_Thursday', '3A.18', item => {
  item.fullCredit = "Explicitly concludes that therapy escalation is NOT indicated";
});
updateItem('Week3_Patient_A_Thursday', '3A.20', item => {
  item.fullCredit = "Praises and documents excellent adherence to daily Symbicort";
});
updateItem('Week3_Patient_A_Thursday', '3A.21', item => {
  item.fullCredit = "Confirms proper inhaler technique or plans verification";
});
updateItem('Week3_Patient_A_Thursday', '3A.22', item => {
  item.fullCredit = "Notes affordability and adverse effect concerns are absent";
});
updateItem('Week3_Patient_A_Thursday', '3C.1', item => {
  item.fullCredit = "Assesses allergic rhinitis control status as well controlled";
});
updateItem('Week3_Patient_A_Thursday', '3C.3', item => {
  item.fullCredit = "Confirms completeness of rhinitis medication regimen (fluticasone spray + cetirizine)";
});
updateItem('Week3_Patient_A_Thursday', '3C.4', item => {
  item.fullCredit = "Assesses rhinitis therapy as effective in controlling nasal symptoms";
});
updateItem('Week3_Patient_A_Thursday', '3C.5', item => {
  item.fullCredit = "Notes rhinitis-asthma comorbidity link and airway concordance";
});
updateItem('Week3_Patient_A_Thursday', '3C.6', item => {
  item.fullCredit = "Concludes no changes are indicated for allergic rhinitis therapy";
});
updateItem('Week3_Patient_A_Thursday', '3C.7', item => {
  item.fullCredit = "Notes intranasal corticosteroid class appropriateness per guidelines";
});
updateItem('Week3_Patient_A_Thursday', '3C.8', item => {
  item.fullCredit = "Notes second-generation antihistamine appropriateness";
});
updateItem('Week3_Patient_A_Thursday', '3C.9', item => {
  item.fullCredit = "Specifies seasonal allergy etiology controlled on current meds";
});
updateItem('Week3_Patient_A_Thursday', '3D.1', item => {
  item.fullCredit = "Assesses adherence within self-management problem as excellent";
});
updateItem('Week3_Patient_A_Thursday', '3D.2', item => {
  item.fullCredit = "Assesses inhaler technique maintenance and improvement";
});
updateItem('Week3_Patient_A_Thursday', '3D.3', item => {
  item.fullCredit = "Assesses patient's understanding of asthma action plan";
});
updateItem('Week3_Patient_A_Thursday', '3D.6', item => {
  item.fullCredit = "Reinforces positive self-management behaviors and continued adherence";
});
updateItem('Week3_Patient_A_Thursday', '3D.7', item => {
  item.fullCredit = "Links self-management improvement to absence of activity limitations";
});
updateItem('Week3_Patient_A_Thursday', '3D.9', item => {
  item.fullCredit = "Notes absence of affordability or adverse effect concerns in self-management";
});
updateItem('Week3_Patient_A_Thursday', '3E.5', item => {
  item.fullCredit = "Discusses pneumococcal vaccine indication in asthma";
});
updateItem('Week3_Patient_A_Thursday', '3E.6', item => {
  item.fullCredit = "States preventive care optimization remains appropriate";
});
updateItem('Week3_Patient_A_Thursday', '3E.7', item => {
  item.fullCredit = "Frames immunization gaps (pneumococcal, Tdap) as actionable plan items";
});
updateItem('Week3_Patient_A_Thursday', '4A.1', item => {
  item.fullCredit = "Continues current SMART regimen (budesonide/formoterol 160/4.5 mcg) in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4A.2', item => {
  item.fullCredit = "Specifies dose (160/4.5 mcg) in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4A.3', item => {
  item.fullCredit = "Specifies maintenance dosing of 1 inhalation BID in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4A.4', item => {
  item.fullCredit = "Specifies PRN dosing (1 inhalation as needed) in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4A.5', item => {
  item.fullCredit = "States therapy should NOT be escalated given well-controlled status";
});
updateItem('Week3_Patient_A_Thursday', '4A.8', item => {
  item.fullCredit = "Praises and reinforces continued adherence to inhaler regimen";
});
updateItem('Week3_Patient_A_Thursday', '4A.9', item => {
  item.fullCredit = "Reinforces proper inhaler technique in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4B.1', item => {
  item.fullCredit = "Reviews written asthma action plan in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4B.2', item => {
  item.fullCredit = "Reviews early recognition of worsening symptoms";
});
updateItem('Week3_Patient_A_Thursday', '4B.3', item => {
  item.fullCredit = "Discusses viral illness management strategies (continuing SMART maintenance)";
});
updateItem('Week3_Patient_A_Thursday', '4B.4', item => {
  item.fullCredit = "Provides guidance on when to seek prompt medical evaluation";
});
updateItem('Week3_Patient_A_Thursday', '4B.7', item => {
  item.fullCredit = "Reviews trigger avoidance in viral illness and allergy context";
});
updateItem('Week3_Patient_A_Thursday', '4C.1', item => {
  item.fullCredit = "Continues fluticasone nasal spray and cetirizine in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4C.2', item => {
  item.fullCredit = "Addresses rhinitis continuation without escalation given controlled status";
});
updateItem('Week3_Patient_A_Thursday', '4C.3', item => {
  item.fullCredit = "Encourages continued allergen avoidance measures in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4C.4', item => {
  item.fullCredit = "Confirms rhinitis therapy appropriateness in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4C.5', item => {
  item.fullCredit = "Retains fluticasone nasal spray dosing (1 spray/nostril daily)";
});
updateItem('Week3_Patient_A_Thursday', '4C.6', item => {
  item.fullCredit = "Links continued rhinitis management to ongoing asthma control";
});
updateItem('Week3_Patient_A_Thursday', '4D.1', item => {
  item.fullCredit = "Reinforces SMART therapy principles and education in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4D.2', item => {
  item.fullCredit = "Reinforces adherence education plan";
});
updateItem('Week3_Patient_A_Thursday', '4D.3', item => {
  item.fullCredit = "Includes trigger avoidance education in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4D.4', item => {
  item.fullCredit = "Reinforces proper inhaler technique in education plan";
});
updateItem('Week3_Patient_A_Thursday', '4D.6', item => {
  item.fullCredit = "Reviews asthma action plan use in education plan";
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
  item.fullCredit = "Lists symptom frequency as a monitoring parameter";
});
updateItem('Week3_Patient_A_Thursday', '4E.3', item => {
  item.fullCredit = "Lists reliever inhaler use frequency as a monitoring parameter";
});
updateItem('Week3_Patient_A_Thursday', '4E.4', item => {
  item.fullCredit = "Lists nighttime symptoms as a monitoring parameter";
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
  item.fullCredit = "Plans spirometry or peak flow monitoring at future visits";
});
updateItem('Week3_Patient_A_Thursday', '4E.10', item => {
  item.fullCredit = "References GINA assess-adjust-review framework";
});
updateItem('Week3_Patient_A_Thursday', '4F.1', item => {
  item.fullCredit = "Recommends pneumococcal vaccination in Plan";
});
updateItem('Week3_Patient_A_Thursday', '4F.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan (overdue >10 years)";
});
updateItem('Week3_Patient_A_Thursday', '4F.4', item => {
  item.fullCredit = "Recommends verifying vaccination records in state registry";
});
updateItem('Week3_Patient_A_Thursday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe of 4–6 weeks or 3–6 months";
});
updateItem('Week3_Patient_A_Thursday', '4G.2', item => {
  item.fullCredit = "Plans to reassess asthma control at follow-up";
});
updateItem('Week3_Patient_A_Thursday', '4G.4', item => {
  item.fullCredit = "Mentions continuing longitudinal asthma monitoring";
});
updateItem('Week3_Patient_A_Thursday', '4G.5', item => {
  item.fullCredit = "Addresses evaluating therapy modification if control deteriorates";
});
updateItem('Week3_Patient_A_Thursday', '4G.6', item => {
  item.fullCredit = "Plans repeat pulmonary function testing at future visits";
});
updateItem('Week3_Patient_A_Thursday', '4G.7', item => {
  item.fullCredit = "Reviews adherence and inhaler technique at follow-up";
});
updateItem('Week3_Patient_A_Thursday', '5A.3', item => {
  item.fullCredit = "Assessment problems structured, numbered, or clearly prioritized";
});
updateItem('Week3_Patient_A_Thursday', '5B.2', item => {
  item.fullCredit = "PFT values reported with units and clinical interpretation";
});
updateItem('Week3_Patient_A_Thursday', '5B.3', item => {
  item.fullCredit = "Lists comprehensive monitoring parameters in Plan";
});
updateItem('Week3_Patient_A_Thursday', '5B.4', item => {
  item.fullCredit = "Provides concrete actionable plan detailing SMART regimen, education, and follow-up";
});
updateItem('Week3_Patient_A_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 guidelines supporting asthma maintenance recommendations";
});

// ==================== SECTION NORMALIZATION ALGORITHM ====================
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
console.log('Successfully updated Sarah Thompson rubrics in granular_rubrics.json and normalized points!');
