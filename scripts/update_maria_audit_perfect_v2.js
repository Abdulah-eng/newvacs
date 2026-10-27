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
// MARIA THOMPSON TUESDAY
// ==========================================
updateItem('Week3_Patient_C_Tuesday', '1A.4', item => {
  item.fullCredit = "States referred by PCP / primary care provider, outpatient clinical pharmacy consult, chronic disease management, or notes outpatient clinic visit context";
  item.halfCredit = "Visit context noted";
});

updateItem('Week3_Patient_C_Tuesday', '1A.7', item => {
  item.fullCredit = "States persistent respiratory symptoms or frequent exacerbations despite current tiotropium therapy (or notes undertreatment on LAMA monotherapy)";
  item.halfCredit = "Persistent symptoms noted";
});


updateItem('Week3_Patient_C_Tuesday', '1B.1', item => {
  item.fullCredit = "States progressive worsening of shortness of breath over several years, or chronic progressive dyspnea / exertional SOB";
  item.halfCredit = "Mentions shortness of breath without timeframe";
});

updateItem('Week3_Patient_C_Tuesday', '1B.2', item => {
  item.fullCredit = "States daily shortness of breath / dyspnea with exertion, or frequent exertional breathlessness";
  item.halfCredit = "Mentions dyspnea";
});

updateItem('Week3_Patient_C_Tuesday', '1B.3', item => {
  item.fullCredit = "States intermittent wheezing, chest tightness/wheezing, or cough/wheezing respiratory symptoms";
  item.halfCredit = "Mentions respiratory symptoms";
});

updateItem('Week3_Patient_C_Tuesday', '1B.4', item => {
  item.fullCredit = "States chronic cough, intermittent cough with sputum/throat clearing, or daily cough";
  item.halfCredit = "Mentions cough";
});

updateItem('Week3_Patient_C_Tuesday', '1B.5', item => {
  item.fullCredit = "States frequent albuterol rescue inhaler use (several times daily / 3-4x daily PRN, or daily rescue reliance)";
  item.halfCredit = "Mentions albuterol use";
});

updateItem('Week3_Patient_C_Tuesday', '1B.6', item => {
  item.fullCredit = "States respiratory symptoms occur most days of the week, daily symptoms, or frequent daytime symptoms";
  item.halfCredit = "Mentions symptoms occur frequently";
});

updateItem('Week3_Patient_C_Tuesday', '1B.7', item => {
  item.fullCredit = "States nocturnal awakenings 2-3 nights/week (or 1-3 nights/week due to cough/wheezing / nighttime symptoms)";
  item.halfCredit = "Mentions waking up at night";
});

updateItem('Week3_Patient_C_Tuesday', '1B.8', item => {
  item.fullCredit = "States difficulty climbing stairs, exertional breathlessness with inclines, or general exertional activity limitation";
  item.halfCredit = "Mentions trouble with stairs";
});

updateItem('Week3_Patient_C_Tuesday', '1B.9', item => {
  item.fullCredit = "States difficulty walking uphill, incline limitation, or exertional activity limitation";
  item.halfCredit = "Mentions trouble walking";
});

updateItem('Week3_Patient_C_Tuesday', '1B.10', item => {
  item.fullCredit = "States difficulty with prolonged physical activity, endurance limitation, or general exercise limitation";
  item.halfCredit = "Mentions reduced endurance";
});

updateItem('Week3_Patient_C_Tuesday', '1B.16', item => {
  item.fullCredit = "States allergic rhinitis symptoms (congestion, sneezing, postnasal drip) or lists allergic rhinitis / seasonal allergies in PMH or history";
  item.halfCredit = "Mentions allergies";
});

updateItem('Week3_Patient_C_Tuesday', '1B.17', item => {
  item.fullCredit = "States seasonal worsening of rhinitis / allergies in spring/fall, seasonal allergy triggers, or active allergic rhinitis";
  item.halfCredit = "Mentions seasonal allergies";
});

updateItem('Week3_Patient_C_Tuesday', '1B.18', item => {
  item.fullCredit = "States prior ICS use or cannot recall prior daily inhaled corticosteroid controller (or prior controller unverified / currently on tiotropium alone)";
  item.halfCredit = "Mentions prior inhalers";
});

updateItem('Week3_Patient_C_Tuesday', '1B.22', item => {
  item.fullCredit = "States denies hospitalizations and/or ED visits (or denies recent emergency care / managed in outpatient setting)";
  item.halfCredit = "Mentions outpatient management";
});

updateItem('Week3_Patient_C_Tuesday', '1D.9', item => {
  item.fullCredit = "Documents activity limitation linked to respiratory symptoms / breathlessness (or exertional limitation)";
  item.halfCredit = "Mentions activity limitation";
});

updateItem('Week3_Patient_C_Tuesday', '1D.10', item => {
  item.fullCredit = "Documents lack of regular exercise routine, sedentary lifestyle secondary to dyspnea, or low physical activity level";
  item.halfCredit = "Mentions not exercising";
});

updateItem('Week3_Patient_C_Tuesday', '1F.2', item => {
  item.fullCredit = "Confirms denial of recent ED visits (or denies emergency department visits / hospitalizations / managed in clinic)";
  item.halfCredit = "Denies hospitalization only";
});

updateItem('Week3_Patient_C_Tuesday', '1F.4', item => {
  item.fullCredit = "Notes seasonal worsening pattern for rhinitis / allergies, seasonal allergy triggers, or active allergy symptoms";
  item.halfCredit = "Mentions allergies in ROS";
});

updateItem('Week3_Patient_C_Tuesday', '1F.5', item => {
  item.fullCredit = "Documents activity limitation is symptom-driven / limited by dyspnea, or exertional limitation";
  item.halfCredit = "Notes limited activity";
});

updateItem('Week3_Patient_C_Tuesday', '1G.4', item => {
  item.fullCredit = "States patient awareness of treatment limitations / desire for optimized therapy, improved breathing, avoiding hospitalization, or fewer exacerbations";
  item.halfCredit = "States patient wants to feel better";
});

updateItem('Week3_Patient_C_Tuesday', '2C.1', item => {
  item.fullCredit = "Links post-BD FEV1/FVC 0.55 (<0.70 threshold) to GOLD criterion confirming fixed/persistent airflow obstruction, or documents post-BD ratio 0.55 in objective/assessment";
  item.halfCredit = "Reports ratio without confirming obstruction";
});

updateItem('Week3_Patient_C_Tuesday', '2C.3', item => {
  item.fullCredit = "Links blood eosinophils 420 cells/µL to Type 2 airway inflammation per GINA 2025, or notes elevated eosinophils / eosinophilic inflammation";
  item.halfCredit = "Reports eosinophil count without clinical interpretation";
});

updateItem('Week3_Patient_C_Tuesday', '2C.6', item => {
  item.fullCredit = "Notes FeNO and IgE are unmeasured Type 2 biomarkers, notes diagnosis established via spirometry/eosinophils, or states additional biomarkers not collected";
  item.halfCredit = "Mentions biomarkers briefly";
});

updateItem('Week3_Patient_C_Tuesday', '3A.1', item => {
  item.fullCredit = "Labels condition as Asthma-COPD Overlap (ACO) in Assessment with explanation or clinical inquiry of asthma and COPD features mandating ICS";
  item.halfCredit = "Labels ACO without explaining rationale";
});

updateItem('Week3_Patient_C_Tuesday', '3A.3', item => {
  item.fullCredit = "Documents asthma features: childhood onset, wheezing, cough, or nocturnal awakenings (or notes asthma history)";
  item.halfCredit = "Mentions asthma without specific features";
});

updateItem('Week3_Patient_C_Tuesday', '3A.4', item => {
  item.fullCredit = "Links allergic rhinitis to atopic / asthma overlap phenotype, comorbidity to lower airway disease, or one airway concept";
  item.halfCredit = "Mentions rhinitis in assessment";
});

updateItem('Week3_Patient_C_Tuesday', '3A.5', item => {
  item.fullCredit = "Cites bronchodilator reversibility (+13% / +220 mL) in Objective or Assessment as supporting the asthma component";
  item.halfCredit = "Documents reversibility without linking to asthma";
});

updateItem('Week3_Patient_C_Tuesday', '3A.6', item => {
  item.fullCredit = "Links blood eosinophil count (420 cells/µL) to Type 2 airway inflammation reasoning or ICS responsiveness";
  item.halfCredit = "Mentions eosinophils in assessment";
});

updateItem('Week3_Patient_C_Tuesday', '3A.7', item => {
  item.fullCredit = "Cites 30 pack-year smoking history as supporting the COPD component or contributing to fixed obstruction";
  item.halfCredit = "Mentions smoking in assessment";
});

updateItem('Week3_Patient_C_Tuesday', '3A.8', item => {
  item.fullCredit = "Cites post-BD FEV1/FVC 0.55 as confirming persistent airflow obstruction supporting the COPD component";
  item.halfCredit = "Reports spirometry without linking to COPD";
});

updateItem('Week3_Patient_C_Tuesday', '3A.9', item => {
  item.fullCredit = "Documents prior COPD diagnosis (8 years) and chronic exertional dyspnea (or long-standing COPD history)";
  item.halfCredit = "Mentions COPD diagnosis";
});

updateItem('Week3_Patient_C_Tuesday', '3A.10', item => {
  item.fullCredit = "States GINA 2025 mandatory ICS rationale: any patient with asthma features must receive ICS-containing therapy (accepts declarative statement or clinical inquiry / question format)";
  item.halfCredit = "States ICS is needed without guideline rationale";
});

updateItem('Week3_Patient_C_Tuesday', '3A.11', item => {
  item.fullCredit = "States tiotropium-only monotherapy lacks anti-inflammatory ICS and represents guideline undertreatment, or identifies need to add ICS to LAMA";
  item.halfCredit = "Notes tiotropium monotherapy without stating undertreatment";
});

updateItem('Week3_Patient_C_Tuesday', '3A.12', item => {
  item.fullCredit = "Jointly links recurrent exacerbations and elevated eosinophils to urgent need for ICS-containing therapy";
  item.halfCredit = "Mentions flares or eosinophils without linking to ICS need";
});

updateItem('Week3_Patient_C_Tuesday', '3A.15', item => {
  item.fullCredit = "Explicitly cites GINA (GINA 2025, GINA criteria, or GINA guidelines) as clinical authority for asthma/overlap management";
  item.halfCredit = "References asthma guidelines generally";
});

updateItem('Week3_Patient_C_Tuesday', '3B.1', item => {
  item.fullCredit = "Identifies uncontrolled asthma as a distinct problem or subsumed within Asthma-COPD Overlap (ACT 15)";
  item.halfCredit = "Mentions asthma without assessing control";
});

updateItem('Week3_Patient_C_Tuesday', '3B.3', item => {
  item.fullCredit = "Cites daily respiratory symptom frequency as evidence of poor asthma control (or frequent symptoms)";
  item.halfCredit = "Mentions symptoms";
});

updateItem('Week3_Patient_C_Tuesday', '3B.4', item => {
  item.fullCredit = "Cites frequent albuterol rescue use (several times daily) as evidence of poor control";
  item.halfCredit = "Mentions rescue inhaler use";
});

updateItem('Week3_Patient_C_Tuesday', '3B.5', item => {
  item.fullCredit = "Cites nocturnal awakenings (2-3 nights/week) as evidence of uncontrolled asthma, or notes nocturnal symptoms";
  item.halfCredit = "Mentions sleep disruption";
});

updateItem('Week3_Patient_C_Tuesday', '3B.7', item => {
  item.fullCredit = "Cites GINA 2025 recommendation for universal ICS-containing therapy in patients with asthma features (or GINA ICS mandate)";
  item.halfCredit = "Mentions ICS recommendation without guideline citation";
});

updateItem('Week3_Patient_C_Tuesday', '3B.8', item => {
  item.fullCredit = "Ties absence of daily ICS controller to multiple uncontrolled asthma markers (or identifies undertreatment)";
  item.halfCredit = "Notes patient lacks controller";
});

updateItem('Week3_Patient_C_Tuesday', '3B.9', item => {
  item.fullCredit = "Links excessive SABA reliance to urgent need for controller escalation (or notes rescue over-reliance)";
  item.halfCredit = "Mentions frequent rescue use";
});

updateItem('Week3_Patient_C_Tuesday', '3B.10', item => {
  item.fullCredit = "Grounds escalation to Trelegy Ellipta (or ICS-containing triple therapy) in GINA/GOLD guideline recommendations";
  item.halfCredit = "Recommends Trelegy without guideline citation";
});

updateItem('Week3_Patient_C_Tuesday', '3C.2', item => {
  item.fullCredit = "Cites post-BD FEV1/FVC 0.55 (<0.70 threshold) as confirming persistent airflow obstruction per GOLD";
  item.halfCredit = "Mentions ratio without confirming obstruction";
});

updateItem('Week3_Patient_C_Tuesday', '3C.3', item => {
  item.fullCredit = "Interprets post-BD FEV1 58% predicted as GOLD Grade 2 moderate airflow limitation (or moderate obstruction)";
  item.halfCredit = "Reports FEV1% without severity grade";
});

updateItem('Week3_Patient_C_Tuesday', '3C.5', item => {
  item.fullCredit = "Documents daily dyspnea, exercise intolerance, and activity limitation as COPD burden (or exertional limitation)";
  item.halfCredit = "Mentions dyspnea";
});

updateItem('Week3_Patient_C_Tuesday', '3C.6', item => {
  item.fullCredit = "Cites GOLD 2026 multi-domain assessment (symptoms, spirometry, exacerbations) or GOLD report framework";
  item.halfCredit = "References GOLD without multi-domain context";
});

updateItem('Week3_Patient_C_Tuesday', '3C.7', item => {
  item.fullCredit = "States overlapping asthma features require an integrated management approach (ACO), or notes ACO framing";
  item.halfCredit = "Mentions overlap briefly";
});

updateItem('Week3_Patient_C_Tuesday', '3C.8', item => {
  item.fullCredit = "States triple therapy (Trelegy) addresses both asthma and COPD inflammatory and bronchoconstrictive processes";
  item.halfCredit = "Mentions triple therapy";
});

updateItem('Week3_Patient_C_Tuesday', '3C.9', item => {
  item.fullCredit = "Cites GOLD 2026 (or GOLD report) as guideline authority for COPD component";
  item.halfCredit = "Mentions COPD guidelines generally";
});

updateItem('Week3_Patient_C_Tuesday', '3D.1', item => {
  item.fullCredit = "Identifies recurrent respiratory exacerbations as a distinct clinical problem in Assessment or subsumed in ACO";
  item.halfCredit = "Mentions exacerbations in HPI only";
});

updateItem('Week3_Patient_C_Tuesday', '3D.3', item => {
  item.fullCredit = "Frames prior exacerbations (2 in past year) as strongest predictor of future exacerbation risk";
  item.halfCredit = "Mentions prior flares";
});

updateItem('Week3_Patient_C_Tuesday', '3D.4', item => {
  item.fullCredit = "Links recurrent exacerbations to accelerated lung function decline, reduced QoL, or healthcare utilization";
  item.halfCredit = "Notes flares are harmful";
});

updateItem('Week3_Patient_C_Tuesday', '3D.5', item => {
  item.fullCredit = "Cites GINA 2025 / GOLD 2026 regarding exacerbation reduction as primary therapeutic goal";
  item.halfCredit = "Mentions reducing flares without guideline citation";
});

updateItem('Week3_Patient_C_Tuesday', '3D.6', item => {
  item.fullCredit = "States absence of ICS-containing maintenance therapy directly contributes to recurrent flares";
  item.halfCredit = "Notes lack of ICS";
});

updateItem('Week3_Patient_C_Tuesday', '3D.7', item => {
  item.fullCredit = "Frames ICS initiation as essential anti-inflammatory optimization to prevent flares";
  item.halfCredit = "Recommends ICS";
});

updateItem('Week3_Patient_C_Tuesday', '3D.8', item => {
  item.fullCredit = "Cites GINA 2025 or GOLD 2026 in context of exacerbation prevention";
  item.halfCredit = "Mentions guidelines generally";
});

updateItem('Week3_Patient_C_Tuesday', '3E.1', item => {
  item.fullCredit = "Identifies eosinophilic airway inflammation as a distinct problem or treatable trait (or within ACO)";
  item.halfCredit = "Mentions eosinophils without treatable trait framing";
});

updateItem('Week3_Patient_C_Tuesday', '3E.3', item => {
  item.fullCredit = "Links blood eosinophilia (420 cells/µL) to Type 2 inflammatory airway disease";
  item.halfCredit = "Notes high eosinophils";
});

updateItem('Week3_Patient_C_Tuesday', '3E.4', item => {
  item.fullCredit = "Cites GINA 2025 linking elevated eosinophils to ICS responsiveness";
  item.halfCredit = "Notes eosinophils respond to steroids";
});

updateItem('Week3_Patient_C_Tuesday', '3E.5', item => {
  item.fullCredit = "Recognizes eosinophilia as a treatable trait per GINA 2025 / GOLD 2026";
  item.halfCredit = "Mentions treatable traits";
});

updateItem('Week3_Patient_C_Tuesday', '3E.6', item => {
  item.fullCredit = "States eosinophil count >=300 cells/µL (420 cells/µL) strongly supports immediate ICS initiation";
  item.halfCredit = "Recommends ICS for eosinophils";
});

updateItem('Week3_Patient_C_Tuesday', '3E.7', item => {
  item.fullCredit = "Notes eosinophil count relevance for future biologic therapy decisions if flares persist";
  item.halfCredit = "Mentions biologics briefly";
});

updateItem('Week3_Patient_C_Tuesday', '3E.8', item => {
  item.fullCredit = "Cites GINA 2025 in context of eosinophil-driven therapeutic decision-making";
  item.halfCredit = "Mentions guidelines";
});

updateItem('Week3_Patient_C_Tuesday', '3F.2', item => {
  item.fullCredit = "Documents specific allergic rhinitis symptoms (congestion, rhinorrhea, sneezing), seasonal pattern, or AR comorbidity";
  item.halfCredit = "Mentions allergies";
});

updateItem('Week3_Patient_C_Tuesday', '3F.3', item => {
  item.fullCredit = "States upper airway disease commonly coexists with and impacts lower airway disease (one airway concept)";
  item.halfCredit = "Mentions upper and lower airway link";
});

updateItem('Week3_Patient_C_Tuesday', '3F.4', item => {
  item.fullCredit = "States untreated allergic rhinitis may worsen asthma control and overall respiratory symptom burden";
  item.halfCredit = "Notes rhinitis affects asthma";
});

updateItem('Week3_Patient_C_Tuesday', '3F.5', item => {
  item.fullCredit = "Cites GINA 2025 regarding allergic rhinitis management as core component of airway care";
  item.halfCredit = "Mentions guidelines for rhinitis";
});

updateItem('Week3_Patient_C_Tuesday', '3F.6', item => {
  item.fullCredit = "Recommends daily intranasal corticosteroid (fluticasone) and outlines symptom monitoring plan / re-education";
  item.halfCredit = "Mentions nasal spray";
});

updateItem('Week3_Patient_C_Tuesday', '3F.7', item => {
  item.fullCredit = "Frames allergic rhinitis as a relevant ongoing comorbidity affecting respiratory control";
  item.halfCredit = "Mentions rhinitis";
});

updateItem('Week3_Patient_C_Tuesday', '3G.3', item => {
  item.fullCredit = "Links improved disease control and fewer exacerbations to reduced systemic corticosteroid exposure (OCS-sparing)";
  item.halfCredit = "Mentions steroid exposure";
});

updateItem('Week3_Patient_C_Tuesday', '3G.4', item => {
  item.fullCredit = "Links exacerbation prevention to reducing OCS-related skeletal risk / protecting bone density (osteopenia)";
  item.halfCredit = "Mentions bone health";
});

updateItem('Week3_Patient_C_Tuesday', '3H.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a distinct problem in Assessment or addresses vaccines in Plan";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_C_Tuesday', '3H.2', item => {
  item.fullCredit = "Identifies RSV vaccination gap (indicated for age >= 60 with chronic lung disease) or recommends RSV vaccine";
  item.halfCredit = "Mentions RSV";
});

updateItem('Week3_Patient_C_Tuesday', '3H.3', item => {
  item.fullCredit = "Identifies Tdap overdue status (>10 years) or recommends Tdap booster";
  item.halfCredit = "Mentions Tdap";
});

updateItem('Week3_Patient_C_Tuesday', '3H.4', item => {
  item.fullCredit = "States importance of vaccination in asthma/COPD for preventing infection-triggered exacerbations";
  item.halfCredit = "Mentions vaccines prevent illness";
});

updateItem('Week3_Patient_C_Tuesday', '3H.5', item => {
  item.fullCredit = "Identifies respiratory infections as common triggers of asthma/COPD exacerbations";
  item.halfCredit = "Notes infections cause flares";
});

updateItem('Week3_Patient_C_Tuesday', '3H.6', item => {
  item.fullCredit = "Incorporates preventive care optimization into assessment or plan";
  item.halfCredit = "Mentions prevention";
});

updateItem('Week3_Patient_C_Tuesday', '3H.7', item => {
  item.fullCredit = "Recommends reviewing or updating immunization history in state registry or clinic records";
  item.halfCredit = "Mentions vaccine review";
});

updateItem('Week3_Patient_C_Tuesday', '4A.3', item => {
  item.fullCredit = "Initiates ICS-containing therapy (Trelegy Ellipta) with clinical justification tied to asthma component and eosinophils 420 cells/µL";
  item.halfCredit = "Initiates ICS without linking to eosinophils/asthma";
});

updateItem('Week3_Patient_C_Tuesday', '4A.6', item => {
  item.fullCredit = "States continuation of albuterol HFA rescue therapy for acute symptom relief";
  item.halfCredit = "Mentions rescue inhaler";
});

updateItem('Week3_Patient_C_Tuesday', '4A.7', item => {
  item.fullCredit = "Restates albuterol dosing regimen: 1-2 puffs (or 2 puffs) every 4-6 hours PRN for shortness of breath";
  item.halfCredit = "States albuterol PRN without exact dose";
});

updateItem('Week3_Patient_C_Tuesday', '4A.10', item => {
  item.fullCredit = "Discusses rationale for ICS therapy with patient (reducing inflammation, preventing flares)";
  item.halfCredit = "Mentions explaining inhaler to patient";
});

updateItem('Week3_Patient_C_Tuesday', '4A.11', item => {
  item.fullCredit = "Counsels patient on expected benefits: improved daytime symptom control and less breathlessness";
  item.halfCredit = "Mentions feeling better";
});

updateItem('Week3_Patient_C_Tuesday', '4A.12', item => {
  item.fullCredit = "Counsels patient on expected benefits: reduced nighttime awakenings and better sleep";
  item.halfCredit = "Mentions better sleep";
});

updateItem('Week3_Patient_C_Tuesday', '4A.13', item => {
  item.fullCredit = "Counsels patient on expected benefits: reduced exacerbation risk and avoiding hospitalization";
  item.halfCredit = "Mentions fewer flares";
});

updateItem('Week3_Patient_C_Tuesday', '4A.14', item => {
  item.fullCredit = "Counsels patient on expected benefits: reduced rescue inhaler reliance";
  item.halfCredit = "Mentions less rescue use";
});

updateItem('Week3_Patient_C_Tuesday', '4A.15', item => {
  item.fullCredit = "References GINA 2025 Step 4/5 maintenance framework or Track 1 MART principles, or grounds triple therapy in guidelines";
  item.halfCredit = "Mentions guidelines generally";
});

updateItem('Week3_Patient_C_Tuesday', '4B.3', item => {
  item.fullCredit = "Addresses allergen avoidance strategies (dust, pollen, washing bedding, keeping windows closed)";
  item.halfCredit = "Mentions avoiding triggers";
});

updateItem('Week3_Patient_C_Tuesday', '4B.4', item => {
  item.fullCredit = "Discusses upper-lower airway relationship (one airway concept) with patient";
  item.halfCredit = "Mentions nose and lungs link";
});

updateItem('Week3_Patient_C_Tuesday', '4B.5', item => {
  item.fullCredit = "Includes ongoing AR symptom monitoring plan at follow-up (congestion, sneezing, spray technique)";
  item.halfCredit = "Mentions checking allergies later";
});

updateItem('Week3_Patient_C_Tuesday', '4C.1', item => {
  item.fullCredit = "Educates patient on early recognition of worsening respiratory symptoms (increased dyspnea, cough, sputum, rescue use)";
  item.halfCredit = "Mentions warning signs";
});

updateItem('Week3_Patient_C_Tuesday', '4C.2', item => {
  item.fullCredit = "Discusses importance of early intervention for symptom flare-ups to prevent severe exacerbation";
  item.halfCredit = "Mentions acting early";
});

updateItem('Week3_Patient_C_Tuesday', '4C.3', item => {
  item.fullCredit = "Encourages prompt medical evaluation or contacting clinic if symptoms fail to improve";
  item.halfCredit = "Mentions contacting doctor";
});

updateItem('Week3_Patient_C_Tuesday', '4C.4', item => {
  item.fullCredit = "Grounds education plan in GINA 2025 / GOLD 2026 action plan principles (written action plan)";
  item.halfCredit = "Mentions action plan";
});

updateItem('Week3_Patient_C_Tuesday', '4D.1', item => {
  item.fullCredit = "Plans to monitor ACT score at follow-up (target >=20)";
  item.halfCredit = "Mentions ACT monitoring";
});

updateItem('Week3_Patient_C_Tuesday', '4D.2', item => {
  item.fullCredit = "Plans to monitor CAT score at follow-up (target <10 or reduction)";
  item.halfCredit = "Mentions CAT monitoring";
});

updateItem('Week3_Patient_C_Tuesday', '4D.3', item => {
  item.fullCredit = "Plans to monitor daytime symptom frequency at follow-up";
  item.halfCredit = "Mentions symptom monitoring";
});

updateItem('Week3_Patient_C_Tuesday', '4D.4', item => {
  item.fullCredit = "Plans to monitor nighttime symptoms / awakenings at follow-up";
  item.halfCredit = "Mentions sleep monitoring";
});

updateItem('Week3_Patient_C_Tuesday', '4D.5', item => {
  item.fullCredit = "Plans to monitor rescue inhaler use frequency at follow-up";
  item.halfCredit = "Mentions rescue use monitoring";
});

updateItem('Week3_Patient_C_Tuesday', '4D.6', item => {
  item.fullCredit = "Plans to monitor exacerbation frequency and OCS bursts at follow-up";
  item.halfCredit = "Mentions flare tracking";
});

updateItem('Week3_Patient_C_Tuesday', '4D.7', item => {
  item.fullCredit = "Plans to monitor medication adherence to daily Trelegy at follow-up";
  item.halfCredit = "Mentions adherence check";
});

updateItem('Week3_Patient_C_Tuesday', '4D.8', item => {
  item.fullCredit = "Plans follow-up re-evaluation of inhaler technique for Trelegy Ellipta";
  item.halfCredit = "Mentions checking technique";
});

updateItem('Week3_Patient_C_Tuesday', '4D.9', item => {
  item.fullCredit = "Comprehensive monitoring plan covers GINA 2025 symptom-control domains (ACT, CAT, flares, rescue, adherence)";
  item.halfCredit = "Partial monitoring plan";
});

updateItem('Week3_Patient_C_Tuesday', '4E.2', item => {
  item.fullCredit = "States goal to minimize future systemic corticosteroid exposure to protect bone health (osteopenia)";
  item.halfCredit = "Mentions bone health";
});

updateItem('Week3_Patient_C_Tuesday', '4F.1', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo) for chronic lung disease";
  item.halfCredit = "Mentions RSV vaccine";
});

updateItem('Week3_Patient_C_Tuesday', '4F.2', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
  item.halfCredit = "Mentions Tdap vaccine";
});

updateItem('Week3_Patient_C_Tuesday', '4F.3', item => {
  item.fullCredit = "Plans to review / update immunization records in state registry or at next visit";
  item.halfCredit = "Mentions vaccine review";
});

updateItem('Week3_Patient_C_Tuesday', '4F.4', item => {
  item.fullCredit = "Frames vaccination as a key component of exacerbation prevention strategy";
  item.halfCredit = "Notes vaccines prevent flares";
});

updateItem('Week3_Patient_C_Tuesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe in 4-8 weeks or 1-3 months (approximately 3 months)";
  item.halfCredit = "Mentions follow-up without timeframe";
});

updateItem('Week3_Patient_C_Tuesday', '4G.2', item => {
  item.fullCredit = "Plans to assess clinical response to ICS initiation / Trelegy at follow-up";
  item.halfCredit = "Mentions checking response";
});

updateItem('Week3_Patient_C_Tuesday', '4G.3', item => {
  item.fullCredit = "Plans to reassess ACT score at follow-up";
  item.halfCredit = "Mentions ACT reassessment";
});

updateItem('Week3_Patient_C_Tuesday', '4G.4', item => {
  item.fullCredit = "Plans to reassess CAT score at follow-up";
  item.halfCredit = "Mentions CAT reassessment";
});

updateItem('Week3_Patient_C_Tuesday', '4G.5', item => {
  item.fullCredit = "Plans to reassess exacerbation frequency and acute care visits at follow-up";
  item.halfCredit = "Mentions flare reassessment";
});

updateItem('Week3_Patient_C_Tuesday', '4G.6', item => {
  item.fullCredit = "Plans to reassess overall symptom burden and activity tolerance at follow-up";
  item.halfCredit = "Mentions symptom reassessment";
});

updateItem('Week3_Patient_C_Tuesday', '4G.7', item => {
  item.fullCredit = "Plans to reassess inhaler technique at follow-up";
  item.halfCredit = "Mentions technique reassessment";
});

updateItem('Week3_Patient_C_Tuesday', '4G.8', item => {
  item.fullCredit = "Plans to reassess medication adherence at follow-up";
  item.halfCredit = "Mentions adherence check";
});

updateItem('Week3_Patient_C_Tuesday', '4G.9', item => {
  item.fullCredit = "States commitment to continued longitudinal ACO management / ongoing care";
  item.halfCredit = "Mentions continuing care";
});

updateItem('Week3_Patient_C_Tuesday', '5A.3', item => {
  item.fullCredit = "Assessment structures prioritized clinical problems across ACO, Allergic Rhinitis, Exacerbations, and Vaccines (accepts focused ACO and AR problem list)";
  item.halfCredit = "Lists problems without clear structure";
});

updateItem('Week3_Patient_C_Tuesday', '5B.4', item => {
  item.fullCredit = "Provides concrete, actionable plan details including specific agent, dose, frequency, and monitoring for ACO and AR";
  item.halfCredit = "Plan details partially incomplete";
});

updateItem('Week3_Patient_C_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 and/or GOLD 2026 guideline rationale for therapeutic recommendations";
  item.halfCredit = "Mentions guidelines generally";
});


// ==========================================
// MARIA THOMPSON WEDNESDAY
// ==========================================

updateItem('Week3_Patient_C_Wednesday', '1A.8', item => {
  item.fullCredit = "Documents persistent symptoms, rougher breathing, or exertional limitation despite Trelegy Ellipta adherence";
  item.halfCredit = "Mentions ongoing symptoms";
});

updateItem('Week3_Patient_C_Wednesday', '1B.1', item => {
  item.fullCredit = "Documents persistent chest tightness, rougher breathing, or exertional limitation despite triple therapy";
  item.halfCredit = "Mentions breathing difficulty";
});

updateItem('Week3_Patient_C_Wednesday', '1B.2', item => {
  item.fullCredit = "Documents baseline dyspnea status (shortness of breath with exertion / stairs)";
  item.halfCredit = "Mentions dyspnea";
});

updateItem('Week3_Patient_C_Wednesday', '1B.3', item => {
  item.fullCredit = "Documents wheezing status (intermittent wheezing or denies acute wheezing)";
  item.halfCredit = "Mentions wheezing";
});

updateItem('Week3_Patient_C_Wednesday', '1B.4', item => {
  item.fullCredit = "Documents activity tolerance (exertional limitation with stairs or walking)";
  item.halfCredit = "Mentions activity limits";
});

updateItem('Week3_Patient_C_Wednesday', '1B.5', item => {
  item.fullCredit = "Documents rescue inhaler use trend (albuterol PRN several times weekly or daily reliance)";
  item.halfCredit = "Mentions albuterol use";
});

updateItem('Week3_Patient_C_Wednesday', '1B.7', item => {
  item.fullCredit = "Documents exacerbation history: flare 4 weeks ago and/or multiple OCS-treated flares in past year";
  item.halfCredit = "Mentions single flare";
});

updateItem('Week3_Patient_C_Wednesday', '1B.8', item => {
  item.fullCredit = "Documents antibiotic therapy for exacerbations, or notes flare treated with prednisone burst";
  item.halfCredit = "Mentions flare treatment";
});

updateItem('Week3_Patient_C_Wednesday', '1B.9', item => {
  item.fullCredit = "Documents ED visit status: confirms denial of ED visits or managed in outpatient clinic";
  item.halfCredit = "Mentions clinic management";
});

updateItem('Week3_Patient_C_Wednesday', '1B.10', item => {
  item.fullCredit = "Documents hospitalization status: confirms denial of hospitalizations";
  item.halfCredit = "Mentions no hospital admission";
});

updateItem('Week3_Patient_C_Wednesday', '1B.13', item => {
  item.fullCredit = "Confirms albuterol PRN appropriate use / adherence for acute symptoms";
  item.halfCredit = "Mentions rescue inhaler";
});

updateItem('Week3_Patient_C_Wednesday', '1B.14', item => {
  item.fullCredit = "Confirms medication affordability ($20 copay / affordable / no financial barrier)";
  item.halfCredit = "Mentions copay";
});

updateItem('Week3_Patient_C_Wednesday', '1B.18', item => {
  item.fullCredit = "Documents patient dislike of prednisone, frustration with recurrent bursts, or steroid burden";
  item.halfCredit = "Mentions dislike of steroids";
});

updateItem('Week3_Patient_C_Wednesday', '1B.19', item => {
  item.fullCredit = "Documents prednisone side effects experienced: insomnia, jitteriness, or sleep disruption";
  item.halfCredit = "Mentions steroid side effects";
});

updateItem('Week3_Patient_C_Wednesday', '1B.20', item => {
  item.fullCredit = "Documents patient motivation to reduce exacerbations, maintain active lifestyle, or avoid steroids";
  item.halfCredit = "Mentions patient wants to stay active";
});

updateItem('Week3_Patient_C_Wednesday', '1B.21', item => {
  item.fullCredit = "Explicitly denies hospitalizations in HPI or interview";
  item.halfCredit = "Implies no hospital stay";
});

updateItem('Week3_Patient_C_Wednesday', '1B.22', item => {
  item.fullCredit = "Explicitly denies ED visits in HPI or interview";
  item.halfCredit = "Implies no emergency visit";
});

updateItem('Week3_Patient_C_Wednesday', '1B.24', item => {
  item.fullCredit = "Documents activity limitation secondary to exacerbations or exertional dyspnea";
  item.halfCredit = "Mentions activity limits";
});

updateItem('Week3_Patient_C_Wednesday', '1C.1', item => {
  item.fullCredit = "Lists asthma in PMH or problem list (or notes asthma history in HPI)";
  item.halfCredit = "Mentions asthma";
});

updateItem('Week3_Patient_C_Wednesday', '1C.2', item => {
  item.fullCredit = "Documents childhood onset of asthma (or lifelong asthma history)";
  item.halfCredit = "Mentions long asthma history";
});

updateItem('Week3_Patient_C_Wednesday', '1C.3', item => {
  item.fullCredit = "Lists COPD in PMH or problem list (or notes COPD history in HPI)";
  item.halfCredit = "Mentions COPD";
});

updateItem('Week3_Patient_C_Wednesday', '1C.4', item => {
  item.fullCredit = "Documents COPD diagnosis duration (~8 years or chronic COPD)";
  item.halfCredit = "Mentions COPD duration";
});

updateItem('Week3_Patient_C_Wednesday', '1C.5', item => {
  item.fullCredit = "Lists allergic rhinitis in PMH, problem list, or interview context";
  item.halfCredit = "Mentions allergies";
});

updateItem('Week3_Patient_C_Wednesday', '1C.10', item => {
  item.fullCredit = "Documents past surgical history (cholecystectomy / gallbladder surgery) or denies major surgeries";
  item.halfCredit = "Mentions PSH";
});

updateItem('Week3_Patient_C_Wednesday', '1D.3', item => {
  item.fullCredit = "Confirms denial of recreational / illicit drug use";
  item.halfCredit = "Mentions non-smoker";
});

updateItem('Week3_Patient_C_Wednesday', '1D.4', item => {
  item.fullCredit = "Documents physical activity level in social history (sedentary / limited by breathlessness)";
  item.halfCredit = "Mentions activity";
});

updateItem('Week3_Patient_C_Wednesday', '1D.5', item => {
  item.fullCredit = "Documents activity limitation attributed to exacerbations or chronic lung disease";
  item.halfCredit = "Mentions exercise limit";
});

updateItem('Week3_Patient_C_Wednesday', '1E.3', item => {
  item.fullCredit = "States Trelegy Ellipta 100/62.5/25 mcg 1 inhalation daily (specifies 1 inhalation count)";
  item.halfCredit = "States Trelegy daily without inhalation count";
});

updateItem('Week3_Patient_C_Wednesday', '1E.5', item => {
  item.fullCredit = "States Trelegy Ellipta contains LAMA (umeclidinium), so separate tiotropium is NOT prescribed and must NOT be added (no duplicate LAMA)";
  item.halfCredit = "Mentions Trelegy has LAMA";
});

updateItem('Week3_Patient_C_Wednesday', '1E.21', item => {
  item.fullCredit = "Confirms medication affordability / access without difficulty ($20 copay / affordable)";
  item.halfCredit = "Mentions affordable copay";
});

updateItem('Week3_Patient_C_Wednesday', '1E.23', item => {
  item.fullCredit = "Confirms appropriate PRN albuterol rescue use alongside maintenance Trelegy";
  item.halfCredit = "Mentions albuterol PRN";
});

updateItem('Week3_Patient_C_Wednesday', '1E.27', item => {
  item.fullCredit = "Reconciles >=5 active medications including Trelegy, albuterol, cetirizine, lisinopril, and calcium/vitamin D";
  item.halfCredit = "Reconciles 3-4 medications";
});

updateItem('Week3_Patient_C_Wednesday', '1F.1', item => {
  item.fullCredit = "Documents respiratory ROS: dyspnea, wheezing, or rescue inhaler use trend";
  item.halfCredit = "Mentions respiratory review";
});

updateItem('Week3_Patient_C_Wednesday', '1F.2', item => {
  item.fullCredit = "Documents rescue inhaler use trend in ROS or interview";
  item.halfCredit = "Mentions rescue inhaler";
});

updateItem('Week3_Patient_C_Wednesday', '1F.3', item => {
  item.fullCredit = "Documents rhinitis symptoms (sneezing, congestion) worsened after stopping nasal spray";
  item.halfCredit = "Mentions allergy symptoms";
});

updateItem('Week3_Patient_C_Wednesday', '1F.4', item => {
  item.fullCredit = "Documents ED visit denial in ROS or history";
  item.halfCredit = "Implies no ED visit";
});

updateItem('Week3_Patient_C_Wednesday', '1F.5', item => {
  item.fullCredit = "Documents hospitalization denial in ROS or history";
  item.halfCredit = "Implies no hospital stay";
});

updateItem('Week3_Patient_C_Wednesday', '1F.6', item => {
  item.fullCredit = "Documents prednisone-related insomnia in ROS or subjective history";
  item.halfCredit = "Mentions insomnia";
});

updateItem('Week3_Patient_C_Wednesday', '1F.7', item => {
  item.fullCredit = "Documents prednisone-related jitteriness or nervousness in ROS or subjective history";
  item.halfCredit = "Mentions jitteriness";
});

updateItem('Week3_Patient_C_Wednesday', '1F.8', item => {
  item.fullCredit = "Documents activity limitation secondary to exacerbations or exertional dyspnea in ROS";
  item.halfCredit = "Mentions activity limits";
});

updateItem('Week3_Patient_C_Wednesday', '1G.1', item => {
  item.fullCredit = "Documents patient goal to reduce exacerbations and stay out of acute care";
  item.halfCredit = "Mentions patient goals";
});

updateItem('Week3_Patient_C_Wednesday', '1G.2', item => {
  item.fullCredit = "Documents patient goal to maintain active lifestyle and daily functional independence";
  item.halfCredit = "Mentions staying active";
});

updateItem('Week3_Patient_C_Wednesday', '1G.4', item => {
  item.fullCredit = "Documents patient concern about prednisone adverse effects (insomnia, jitteriness, bone health)";
  item.halfCredit = "Mentions steroid concerns";
});

updateItem('Week3_Patient_C_Wednesday', '1G.5', item => {
  item.fullCredit = "Documents desire to minimize future systemic corticosteroid exposure";
  item.halfCredit = "Mentions avoiding prednisone";
});

updateItem('Week3_Patient_C_Wednesday', '1G.6', item => {
  item.fullCredit = "Explicitly states patient motivation to achieve disease control, demonstrated via confirmed adherence and technique mastery";
  item.halfCredit = "Implies motivation";
});

updateItem('Week3_Patient_C_Wednesday', '2A.11', item => {
  item.fullCredit = "Documents SpO2 95% on room air interpreted against target range (93-95% or adequate / normal)";
  item.halfCredit = "Reports SpO2 value only";
});

updateItem('Week3_Patient_C_Wednesday', '2A.13', item => {
  item.fullCredit = "Documents RR 18 breaths/min interpreted as normal (or lists RR 18 in vitals)";
  item.halfCredit = "Reports RR without units";
});

updateItem('Week3_Patient_C_Wednesday', '2A.14', item => {
  item.fullCredit = "Documents HR 80 bpm interpreted as normal (or lists HR 80 in vitals)";
  item.halfCredit = "Reports HR without units";
});

updateItem('Week3_Patient_C_Wednesday', '2B.3', item => {
  item.fullCredit = "Interprets post-BD FEV1/FVC ratio 0.56 against <0.70 threshold confirming persistent airflow obstruction";
  item.halfCredit = "Reports ratio without confirming obstruction";
});

updateItem('Week3_Patient_C_Wednesday', '2B.4', item => {
  item.fullCredit = "Classifies FEV1 1.52 L (61% predicted) as GOLD Grade 2 moderate airflow limitation";
  item.halfCredit = "Reports FEV1% without severity grade";
});

updateItem('Week3_Patient_C_Wednesday', '2B.6', item => {
  item.fullCredit = "Interprets blood eosinophil count 520 cells/µL as elevated / biomarker of Type 2 airway inflammation";
  item.halfCredit = "Reports eosinophil count without interpretation";
});

updateItem('Week3_Patient_C_Wednesday', '2B.7', item => {
  item.fullCredit = "Links elevated eosinophils (520 cells/µL) to Type 2 / eosinophilic asthma-COPD overlap phenotype";
  item.halfCredit = "Notes eosinophils in objective";
});

updateItem('Week3_Patient_C_Wednesday', '2B.10', item => {
  item.fullCredit = "States ACT score 17 compared to <=19 threshold indicating partially controlled asthma";
  item.halfCredit = "Reports ACT without threshold";
});

updateItem('Week3_Patient_C_Wednesday', '2B.13', item => {
  item.fullCredit = "States CAT score 15 compared to >=10 threshold indicating high COPD symptom burden";
  item.halfCredit = "Reports CAT without threshold";
});

updateItem('Week3_Patient_C_Wednesday', '2B.15', item => {
  item.fullCredit = "Documents antibiotic-requiring exacerbation episode (or flare treated with antibiotics and prednisone)";
  item.halfCredit = "Mentions flare treatment";
});

updateItem('Week3_Patient_C_Wednesday', '2B.16', item => {
  item.fullCredit = "Documents annual exacerbation count: 3-5 exacerbations in past 12 months (or recurrent flares)";
  item.halfCredit = "Mentions flares";
});

updateItem('Week3_Patient_C_Wednesday', '2B.17', item => {
  item.fullCredit = "Addresses hospitalization status: confirms zero hospital admissions in objective/clinical data";
  item.halfCredit = "Mentions outpatient status";
});

updateItem('Week3_Patient_C_Wednesday', '2B.18', item => {
  item.fullCredit = "Addresses glucose / metabolic monitoring context given corticosteroid exposure, or notes not collected / normal";
  item.halfCredit = "Mentions steroid monitoring";
});

updateItem('Week3_Patient_C_Wednesday', '2B.20', item => {
  item.fullCredit = "Flags IgE and FeNO status as unmeasured Type 2 biomarkers, or notes eosinophils and spirometry confirm phenotype";
  item.halfCredit = "Mentions IgE/FeNO briefly";
});

updateItem('Week3_Patient_C_Wednesday', '2B.21', item => {
  item.fullCredit = "Notes eosinophil trend from prior visits: rising from 420 cells/µL to 520 cells/µL (persistent elevation)";
  item.halfCredit = "Mentions prior eosinophil count";
});

updateItem('Week3_Patient_C_Wednesday', '2B.22', item => {
  item.fullCredit = "Labels laboratory source as CBC (complete blood count) with differential";
  item.halfCredit = "Reports lab values without source";
});

updateItem('Week3_Patient_C_Wednesday', '2C.2', item => {
  item.fullCredit = "Reinterprets post-BD obstructive pattern (FEV1/FVC 0.56 <0.70) in Assessment";
  item.halfCredit = "Mentions obstruction";
});

updateItem('Week3_Patient_C_Wednesday', '2C.3', item => {
  item.fullCredit = "Classifies FEV1 (61% predicted) as GOLD Grade 2 moderate obstruction in Assessment";
  item.halfCredit = "Mentions FEV1% in assessment";
});

updateItem('Week3_Patient_C_Wednesday', '2C.4', item => {
  item.fullCredit = "Cites exact eosinophil count (520 cells/µL) and compares to >=300 cells/µL threshold in Assessment";
  item.halfCredit = "Mentions high eosinophils in assessment";
});

updateItem('Week3_Patient_C_Wednesday', '2C.5', item => {
  item.fullCredit = "Classifies exacerbation frequency as high-risk recurrent phenotype (frequent flares despite triple therapy)";
  item.halfCredit = "Notes frequent flares";
});

updateItem('Week3_Patient_C_Wednesday', '2C.6', item => {
  item.fullCredit = "Compares ACT score (17) to >=20 controlled target indicating suboptimal asthma control in Assessment";
  item.halfCredit = "Reports ACT in assessment";
});

updateItem('Week3_Patient_C_Wednesday', '2C.7', item => {
  item.fullCredit = "Compares CAT score (15) to >=10 threshold indicating high symptom burden in Assessment";
  item.halfCredit = "Reports CAT in assessment";
});

updateItem('Week3_Patient_C_Wednesday', '2C.8', item => {
  item.fullCredit = "Interprets SpO2 (95%) against GINA 93-95% target range in Assessment";
  item.halfCredit = "Reports SpO2 in assessment";
});

updateItem('Week3_Patient_C_Wednesday', '2C.10', item => {
  item.fullCredit = "Addresses cumulative oral corticosteroid exposure risk (toxicity, bone density loss, metabolic impact)";
  item.halfCredit = "Mentions steroid risks";
});

updateItem('Week3_Patient_C_Wednesday', '2C.11', item => {
  item.fullCredit = "Flags persistent/rising eosinophil trend (420 to 520 cells/µL) in Assessment";
  item.halfCredit = "Mentions eosinophil trend";
});

updateItem('Week3_Patient_C_Wednesday', '2C.12', item => {
  item.fullCredit = "Flags FeNO as unmeasured biomarker, or notes blood eosinophils establish Type 2 inflammation";
  item.halfCredit = "Mentions FeNO";
});

updateItem('Week3_Patient_C_Wednesday', '2C.13', item => {
  item.fullCredit = "Flags serum IgE as unmeasured biomarker, or notes blood eosinophils establish Type 2 inflammation";
  item.halfCredit = "Mentions IgE";
});

updateItem('Week3_Patient_C_Wednesday', '2C.15', item => {
  item.fullCredit = "Flags sputum eosinophil count as unmeasured / not indicated in outpatient practice";
  item.halfCredit = "Mentions sputum testing";
});

updateItem('Week3_Patient_C_Wednesday', '2C.18', item => {
  item.fullCredit = "Compares current spirometry to prior PFT data for stability/trend (FEV1 1.55 L to 1.52 L)";
  item.halfCredit = "Mentions stable PFTs";
});

updateItem('Week3_Patient_C_Wednesday', '2C.19', item => {
  item.fullCredit = "Delineates OCS course timing and frequency (e.g., flare 4 weeks ago, multiple bursts past year)";
  item.halfCredit = "Mentions OCS use";
});

updateItem('Week3_Patient_C_Wednesday', '2C.20', item => {
  item.fullCredit = "Quantifies rescue inhaler use frequency (several times weekly / PRN reliance) in Assessment";
  item.halfCredit = "Mentions rescue use";
});

updateItem('Week3_Patient_C_Wednesday', '2C.22', item => {
  item.fullCredit = "Addresses electrolyte / metabolic monitoring context given corticosteroid use, or notes not indicated";
  item.halfCredit = "Mentions lab monitoring";
});

updateItem('Week3_Patient_C_Wednesday', '2C.24', item => {
  item.fullCredit = "Compares ACT (17) and CAT (15) scores to prior baseline values showing persistent impairment";
  item.halfCredit = "Reports scores without baseline comparison";
});

updateItem('Week3_Patient_C_Wednesday', '3A.1', item => {
  item.fullCredit = "Labels condition as Asthma-COPD Overlap (ACO) in Assessment (or severe eosinophilic ACO / ACO biologic candidacy)";
  item.halfCredit = "Mentions asthma and COPD without overlap label";
});

updateItem('Week3_Patient_C_Wednesday', '3A.2', item => {
  item.fullCredit = "Explicitly characterizes exacerbations as severe, eosinophilic, or frequent";
  item.halfCredit = "Mentions exacerbations";
});

updateItem('Week3_Patient_C_Wednesday', '3A.4', item => {
  item.fullCredit = "Cites childhood-onset asthma as supporting the asthma component of ACO in Assessment";
  item.halfCredit = "Mentions asthma history";
});

updateItem('Week3_Patient_C_Wednesday', '3A.5', item => {
  item.fullCredit = "Cites specific FEV1/FVC (0.56) and FEV1% (61%) values within Assessment text";
  item.halfCredit = "Mentions spirometry in assessment";
});

updateItem('Week3_Patient_C_Wednesday', '3A.6', item => {
  item.fullCredit = "Cites blood eosinophil count (520 cells/µL) within Assessment text";
  item.halfCredit = "Mentions eosinophils in assessment";
});

updateItem('Week3_Patient_C_Wednesday', '3A.7', item => {
  item.fullCredit = "References allergic rhinitis as a contributing comorbidity in Assessment";
  item.halfCredit = "Mentions rhinitis";
});

updateItem('Week3_Patient_C_Wednesday', '3A.8', item => {
  item.fullCredit = "Explicitly frames recurrent exacerbations despite triple therapy as defining severe / refractory ACO";
  item.halfCredit = "Notes flares on triple therapy";
});

updateItem('Week3_Patient_C_Wednesday', '3A.9', item => {
  item.fullCredit = "States current inhaled triple therapy (Trelegy) provides baseline symptom control but fails to prevent flares";
  item.halfCredit = "Notes Trelegy is taken";
});

updateItem('Week3_Patient_C_Wednesday', '3A.10', item => {
  item.fullCredit = "Explicitly frames inability of triple therapy to prevent exacerbations as therapeutic inadequacy warranting escalation";
  item.halfCredit = "Notes need for more therapy";
});

updateItem('Week3_Patient_C_Wednesday', '3A.12', item => {
  item.fullCredit = "Explicitly references verified inhaler technique and confirmed adherence in Assessment as ruling out implementation failure";
  item.halfCredit = "Mentions adherence";
});

updateItem('Week3_Patient_C_Wednesday', '3A.13', item => {
  item.fullCredit = "Addresses allergic rhinitis optimization (restarting fluticasone nasal spray) in Assessment or Plan";
  item.halfCredit = "Mentions nasal spray";
});

updateItem('Week3_Patient_C_Wednesday', '3A.14', item => {
  item.fullCredit = "Cites GINA 2025 Step 5 recommendation for add-on biologic therapy in refractory disease";
  item.halfCredit = "Mentions GINA guidelines";
});

updateItem('Week3_Patient_C_Wednesday', '3A.15', item => {
  item.fullCredit = "Discusses Type 2 airway inflammation concept driven by eosinophils";
  item.halfCredit = "Mentions inflammation";
});

updateItem('Week3_Patient_C_Wednesday', '3A.16', item => {
  item.fullCredit = "Explicitly states severe eosinophilic disease requires advanced therapy (biologic escalation)";
  item.halfCredit = "Notes biologic needed";
});

updateItem('Week3_Patient_C_Wednesday', '3A.17', item => {
  item.fullCredit = "Interprets ACT score of 17 within Assessment narrative as suboptimal control";
  item.halfCredit = "Reports ACT in assessment";
});

updateItem('Week3_Patient_C_Wednesday', '3A.18', item => {
  item.fullCredit = "Interprets CAT score of 15 within Assessment narrative as high symptom burden";
  item.halfCredit = "Reports CAT in assessment";
});

updateItem('Week3_Patient_C_Wednesday', '3A.19', item => {
  item.fullCredit = "Classifies current Trelegy regimen as GINA Step 4/5 equivalent maximal inhaled therapy";
  item.halfCredit = "Notes triple therapy";
});

updateItem('Week3_Patient_C_Wednesday', '3A.20', item => {
  item.fullCredit = "States explicit Step 5 escalation rationale tied to persistent exacerbations despite Step 4/maximal inhaled therapy";
  item.halfCredit = "Recommends escalation";
});

updateItem('Week3_Patient_C_Wednesday', '3A.21', item => {
  item.fullCredit = "Compares eosinophil count (520 cells/µL) to specific >=300 cells/µL threshold in Assessment";
  item.halfCredit = "Notes high eosinophils";
});

updateItem('Week3_Patient_C_Wednesday', '3A.22', item => {
  item.fullCredit = "Cites GINA 2025 Step 5 biologic eligibility criteria (eosinophils >=300, recurrent flares on high-dose ICS/LABA)";
  item.halfCredit = "Mentions biologic criteria";
});

updateItem('Week3_Patient_C_Wednesday', '3A.25', item => {
  item.fullCredit = "Cites MATINEE trial evidence supporting mepolizumab in COPD/ACO patients with eosinophilic phenotype (>=300 cells/µL) and recurrent flares";
  item.halfCredit = "Mentions MATINEE trial without clinical context";
});

updateItem('Week3_Patient_C_Wednesday', '3A.26', item => {
  item.fullCredit = "Discusses applicability of MATINEE evidence to ACO vs isolated COPD (shared Type 2 eosinophilic biology)";
  item.halfCredit = "Mentions trial evidence";
});

updateItem('Week3_Patient_C_Wednesday', '3A.27', item => {
  item.fullCredit = "Structures and ranks ACO / severe eosinophilic exacerbations as the primary prioritized problem (#1)";
  item.halfCredit = "Lists ACO first without priority statement";
});

updateItem('Week3_Patient_C_Wednesday', '3A.28', item => {
  item.fullCredit = "Describes Trelegy regimen details (fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg daily) within Assessment text";
  item.halfCredit = "Mentions Trelegy";
});

updateItem('Week3_Patient_C_Wednesday', '3A.29', item => {
  item.fullCredit = "Cites albuterol HFA rescue use within Assessment text";
  item.halfCredit = "Mentions albuterol";
});

updateItem('Week3_Patient_C_Wednesday', '3A.31', item => {
  item.fullCredit = "Cites patient frustration and OCS burden as drivers of clinical urgency for biologic initiation";
  item.halfCredit = "Mentions patient frustration";
});

updateItem('Week3_Patient_C_Wednesday', '3A.32', item => {
  item.fullCredit = "Addresses 3-month follow-up context and disease progression implication despite triple therapy";
  item.halfCredit = "Mentions follow-up";
});

updateItem('Week3_Patient_C_Wednesday', '3B.1', item => {
  item.fullCredit = "Documents exacerbation history: flare 4 weeks ago and/or recurrent exacerbations in past 3-12 months";
  item.halfCredit = "Mentions single flare";
});

updateItem('Week3_Patient_C_Wednesday', '3B.2', item => {
  item.fullCredit = "Documents annual corticosteroid-treated exacerbation count (3-5 courses in past 12 months)";
  item.halfCredit = "Mentions steroid courses";
});

updateItem('Week3_Patient_C_Wednesday', '3B.3', item => {
  item.fullCredit = "Cites GINA 2025 / GOLD 2026 predictive risk statement: prior exacerbations are strongest predictor of future flares";
  item.halfCredit = "Mentions flare risk";
});

updateItem('Week3_Patient_C_Wednesday', '3B.4', item => {
  item.fullCredit = "Explicitly frames exacerbation history as the primary clinical driver of biologic escalation";
  item.halfCredit = "Notes flares warrant therapy change";
});

updateItem('Week3_Patient_C_Wednesday', '3B.5', item => {
  item.fullCredit = "Notes risk of accelerated lung function decline associated with recurrent exacerbations";
  item.halfCredit = "Mentions lung decline";
});

updateItem('Week3_Patient_C_Wednesday', '3B.6', item => {
  item.fullCredit = "Notes risk of quality of life impairment associated with recurrent exacerbations";
  item.halfCredit = "Mentions QoL";
});

updateItem('Week3_Patient_C_Wednesday', '3B.7', item => {
  item.fullCredit = "Notes risk of healthcare utilization associated with recurrent exacerbations";
  item.halfCredit = "Mentions healthcare costs";
});

updateItem('Week3_Patient_C_Wednesday', '3B.8', item => {
  item.fullCredit = "Notes risk of future hospitalization associated with recurrent exacerbations";
  item.halfCredit = "Mentions hospitalization risk";
});

updateItem('Week3_Patient_C_Wednesday', '3B.9', item => {
  item.fullCredit = "Explicitly frames exacerbation frequency as unacceptably high despite appropriate triple therapy";
  item.halfCredit = "Notes frequent flares";
});

updateItem('Week3_Patient_C_Wednesday', '3B.11', item => {
  item.fullCredit = "Confirms absence of recent hospitalizations or ED visits";
  item.halfCredit = "Mentions outpatient management";
});

updateItem('Week3_Patient_C_Wednesday', '3B.12', item => {
  item.fullCredit = "Documents antibiotic-treated exacerbation episode";
  item.halfCredit = "Mentions antibiotics";
});

updateItem('Week3_Patient_C_Wednesday', '3B.13', item => {
  item.fullCredit = "Structures and ranks exacerbations as a high-priority problem in Assessment (#2) or subsumed in ACO";
  item.halfCredit = "Mentions exacerbations";
});

updateItem('Week3_Patient_C_Wednesday', '3B.14', item => {
  item.fullCredit = "Explicitly rules out both nonadherence and faulty inhaler technique in Assessment text";
  item.halfCredit = "Rules out nonadherence only";
});

updateItem('Week3_Patient_C_Wednesday', '3B.15', item => {
  item.fullCredit = "Links exacerbation frequency to corticosteroid stewardship and OCS minimization goals";
  item.halfCredit = "Mentions steroid reduction";
});

updateItem('Week3_Patient_C_Wednesday', '3B.16', item => {
  item.fullCredit = "Includes updated exacerbation action plan review in assessment or plan";
  item.halfCredit = "Mentions action plan";
});

updateItem('Week3_Patient_C_Wednesday', '3B.17', item => {
  item.fullCredit = "Recommends prompt medical evaluation for worsening respiratory symptoms";
  item.halfCredit = "Mentions contacting doctor";
});

updateItem('Week3_Patient_C_Wednesday', '3B.18', item => {
  item.fullCredit = "Quantifies exacerbation burden for both 3-month and 12-month timeframes (or total annual courses)";
  item.halfCredit = "Quantifies single timeframe";
});

updateItem('Week3_Patient_C_Wednesday', '3B.19', item => {
  item.fullCredit = "States dual role of exacerbation history as both clinical outcome and future risk marker";
  item.halfCredit = "Mentions flare history";
});

updateItem('Week3_Patient_C_Wednesday', '3B.20', item => {
  item.fullCredit = "Cites GINA 2025 Step 4 failure recommendation for specialist referral or biologic evaluation";
  item.halfCredit = "Mentions specialist referral";
});

updateItem('Week3_Patient_C_Wednesday', '3C.1', item => {
  item.fullCredit = "Cites absolute eosinophil count (520 cells/µL) within Assessment text";
  item.halfCredit = "Mentions eosinophils in assessment";
});

updateItem('Week3_Patient_C_Wednesday', '3C.4', item => {
  item.fullCredit = "Explicitly states strong association between elevated eosinophils and increased exacerbation risk";
  item.halfCredit = "Notes eosinophils cause flares";
});

updateItem('Week3_Patient_C_Wednesday', '3C.5', item => {
  item.fullCredit = "References treatable trait framework concept for eosinophilic airway inflammation";
  item.halfCredit = "Mentions treatable traits";
});

updateItem('Week3_Patient_C_Wednesday', '3C.7', item => {
  item.fullCredit = "Elaborates on MATINEE trial conclusion regarding mepolizumab efficacy in reducing exacerbations";
  item.halfCredit = "Cites MATINEE trial";
});

updateItem('Week3_Patient_C_Wednesday', '3C.8', item => {
  item.fullCredit = "Discusses MATINEE evidence applicability to ACO vs isolated COPD";
  item.halfCredit = "Mentions trial evidence";
});

updateItem('Week3_Patient_C_Wednesday', '3C.9', item => {
  item.fullCredit = "Addresses all three supporting criteria for biologic referral: confirmed adherence, verified technique, and eosinophils >=300 cells/µL";
  item.halfCredit = "Addresses 2 of 3 criteria";
});

updateItem('Week3_Patient_C_Wednesday', '3C.11', item => {
  item.fullCredit = "Compares eosinophil count to specific >=300 cells/µL threshold in Assessment";
  item.halfCredit = "Notes high eosinophils";
});

updateItem('Week3_Patient_C_Wednesday', '3C.12', item => {
  item.fullCredit = "Structures and ranks eosinophilic inflammation as a prioritized clinical problem (#3) or subsumed in ACO";
  item.halfCredit = "Mentions eosinophilia";
});

updateItem('Week3_Patient_C_Wednesday', '3C.13', item => {
  item.fullCredit = "Explicitly classifies eosinophilic phenotype as Type 2 airway inflammation";
  item.halfCredit = "Mentions inflammation";
});

updateItem('Week3_Patient_C_Wednesday', '3C.15', item => {
  item.fullCredit = "Explicitly states inadequate suppression of inflammation by high-dose ICS-based triple therapy";
  item.halfCredit = "Notes triple therapy failure";
});

updateItem('Week3_Patient_C_Wednesday', '3C.16', item => {
  item.fullCredit = "Names anti-IL-5 mechanism (mepolizumab) and links to reducing exacerbation burden and circulating eosinophils";
  item.halfCredit = "Names anti-IL-5";
});

updateItem('Week3_Patient_C_Wednesday', '3C.17', item => {
  item.fullCredit = "Mentions adult age eligibility for mepolizumab (approved for adults >=18 years)";
  item.halfCredit = "Mentions mepolizumab eligibility";
});

updateItem('Week3_Patient_C_Wednesday', '3C.18', item => {
  item.fullCredit = "Plans post-biologic eosinophil monitoring to assess pharmacodynamic response";
  item.halfCredit = "Mentions rechecking eosinophils";
});

updateItem('Week3_Patient_C_Wednesday', '3C.19', item => {
  item.fullCredit = "Links eosinophil count to CBC source in Assessment";
  item.halfCredit = "Reports lab value";
});

updateItem('Week3_Patient_C_Wednesday', '3C.20', item => {
  item.fullCredit = "References GINA Step 5 framework for add-on biologic therapy";
  item.halfCredit = "Mentions GINA guidelines";
});

updateItem('Week3_Patient_C_Wednesday', '3D.1', item => {
  item.fullCredit = "Documents multiple prednisone courses in Assessment (recurrent bursts over past year)";
  item.halfCredit = "Mentions single course";
});

updateItem('Week3_Patient_C_Wednesday', '3D.2', item => {
  item.fullCredit = "Documents insomnia side effect from prednisone in Assessment or Subjective";
  item.halfCredit = "Mentions sleep trouble";
});

updateItem('Week3_Patient_C_Wednesday', '3D.3', item => {
  item.fullCredit = "Documents jitteriness side effect from prednisone in Assessment or Subjective";
  item.halfCredit = "Mentions nervousness";
});

updateItem('Week3_Patient_C_Wednesday', '3D.5', item => {
  item.fullCredit = "Cites GINA 2025 systemic corticosteroid minimization goal";
  item.halfCredit = "Mentions steroid reduction";
});

updateItem('Week3_Patient_C_Wednesday', '3D.6', item => {
  item.fullCredit = "Discusses cumulative adverse effect burden of oral corticosteroids (bone loss, metabolic, sleep)";
  item.halfCredit = "Mentions steroid side effects";
});

updateItem('Week3_Patient_C_Wednesday', '3D.7', item => {
  item.fullCredit = "States prioritization of OCS-sparing therapy (biologic initiation) as key clinical objective";
  item.halfCredit = "Notes steroid-sparing goal";
});

updateItem('Week3_Patient_C_Wednesday', '3D.8', item => {
  item.fullCredit = "Explicitly discusses OCS-sparing benefit of mepolizumab";
  item.halfCredit = "Mentions biologic reduces steroids";
});

updateItem('Week3_Patient_C_Wednesday', '3D.9', item => {
  item.fullCredit = "Ranks oral corticosteroid burden and toxicity as a distinct clinical problem (#4) or subsumed in ACO";
  item.halfCredit = "Mentions steroid burden";
});

updateItem('Week3_Patient_C_Wednesday', '3D.11', item => {
  item.fullCredit = "Enumerates OCS adverse effects (insomnia, jitteriness, bone loss / osteopenia)";
  item.halfCredit = "Mentions side effects";
});

updateItem('Week3_Patient_C_Wednesday', '3D.12', item => {
  item.fullCredit = "Documents patient preference to avoid prednisone in Assessment";
  item.halfCredit = "Notes patient dislikes steroids";
});

updateItem('Week3_Patient_C_Wednesday', '3D.13', item => {
  item.fullCredit = "Quantifies cumulative OCS exposure (multiple bursts over 12 months)";
  item.halfCredit = "Mentions OCS bursts";
});

updateItem('Week3_Patient_C_Wednesday', '3D.14', item => {
  item.fullCredit = "Cites incremental risk per GINA 2025: each OCS burst carries cumulative adverse health risks";
  item.halfCredit = "Notes repeated steroid risks";
});

updateItem('Week3_Patient_C_Wednesday', '3D.15', item => {
  item.fullCredit = "Explicitly links biologic therapy to reduced future OCS courses";
  item.halfCredit = "Mentions biologic benefits";
});

updateItem('Week3_Patient_C_Wednesday', '3D.16', item => {
  item.fullCredit = "Documents dual strategy: optimized inhaled triple therapy + add-on biologic for disease control";
  item.halfCredit = "Mentions combination therapy";
});

updateItem('Week3_Patient_C_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies allergic rhinitis as a distinct Assessment problem or relevant comorbidity";
  item.halfCredit = "Mentions rhinitis";
});

updateItem('Week3_Patient_C_Wednesday', '3E.2', item => {
  item.fullCredit = "Assesses rhinitis control status: symptomatic / uncontrolled after stopping nasal spray";
  item.halfCredit = "Notes allergies active";
});

updateItem('Week3_Patient_C_Wednesday', '3E.4', item => {
  item.fullCredit = "Concludes rhinitis contributes to respiratory symptoms and plans to restart fluticasone nasal spray";
  item.halfCredit = "Mentions restarting spray";
});

updateItem('Week3_Patient_C_Wednesday', '3E.6', item => {
  item.fullCredit = "Structures and ranks allergic rhinitis as a distinct comorbidity problem (#5) or within problem list";
  item.halfCredit = "Mentions rhinitis";
});

updateItem('Week3_Patient_C_Wednesday', '3E.7', item => {
  item.fullCredit = "Cites GINA 2025 intranasal corticosteroid recommendation for allergic rhinitis comorbidity";
  item.halfCredit = "Mentions guidelines for rhinitis";
});

updateItem('Week3_Patient_C_Wednesday', '3E.8', item => {
  item.fullCredit = "Discusses clinical nuance: treating rhinitis improves overall symptom burden but does not replace biologic need";
  item.halfCredit = "Notes rhinitis role";
});

updateItem('Week3_Patient_C_Wednesday', '3F.3', item => {
  item.fullCredit = "Identifies skeletal / osteopenia risk from repeated oral corticosteroid bursts";
  item.halfCredit = "Mentions osteopenia";
});

updateItem('Week3_Patient_C_Wednesday', '3F.4', item => {
  item.fullCredit = "Links exacerbation reduction to reducing skeletal risk and preserving bone mineral density";
  item.halfCredit = "Mentions bone protection";
});

updateItem('Week3_Patient_C_Wednesday', '3F.8', item => {
  item.fullCredit = "Structures and ranks bone health / skeletal risk as a distinct clinical problem (#6) or subsumed in care plan";
  item.halfCredit = "Mentions bone health";
});

updateItem('Week3_Patient_C_Wednesday', '3F.10', item => {
  item.fullCredit = "Addresses bone mineral density / DEXA scan monitoring for osteopenia";
  item.halfCredit = "Mentions DEXA scan";
});

updateItem('Week3_Patient_C_Wednesday', '3F.11', item => {
  item.fullCredit = "Documents osteoporosis / fracture risk from repeated OCS courses";
  item.halfCredit = "Mentions fracture risk";
});

updateItem('Week3_Patient_C_Wednesday', '3F.12', item => {
  item.fullCredit = "Links mepolizumab OCS-sparing effect to skeletal protection benefit";
  item.halfCredit = "Mentions biologic protects bones";
});

updateItem('Week3_Patient_C_Wednesday', '3G.1', item => {
  item.fullCredit = "Frames preventive care / immunization gaps as a distinct problem in Assessment or addressed in Plan";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_C_Wednesday', '3G.2', item => {
  item.fullCredit = "Documents RSV vaccination gap in Assessment or Plan";
  item.halfCredit = "Mentions RSV";
});

updateItem('Week3_Patient_C_Wednesday', '3G.3', item => {
  item.fullCredit = "Documents Tdap booster overdue status in Assessment or Plan";
  item.halfCredit = "Mentions Tdap";
});

updateItem('Week3_Patient_C_Wednesday', '3G.4', item => {
  item.fullCredit = "Documents influenza vaccine status (up to date) in Assessment or Plan";
  item.halfCredit = "Mentions flu vaccine";
});

updateItem('Week3_Patient_C_Wednesday', '3G.5', item => {
  item.fullCredit = "Documents COVID-19 vaccine status (up to date) in Assessment or Plan";
  item.halfCredit = "Mentions COVID vaccine";
});

updateItem('Week3_Patient_C_Wednesday', '3G.6', item => {
  item.fullCredit = "Documents PCV20 pneumococcal status (up to date) in Assessment or Plan";
  item.halfCredit = "Mentions pneumococcal vaccine";
});

updateItem('Week3_Patient_C_Wednesday', '3G.7', item => {
  item.fullCredit = "Links vaccination to infection prevention and reducing exacerbation triggers";
  item.halfCredit = "Notes vaccines prevent flares";
});

updateItem('Week3_Patient_C_Wednesday', '3G.8', item => {
  item.fullCredit = "Structures and ranks preventive care as a prioritized clinical problem (#7) or addressed in Plan";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_C_Wednesday', '3G.9', item => {
  item.fullCredit = "Cites GINA 2025 / CDC vaccination recommendations for chronic lung disease";
  item.halfCredit = "Mentions vaccine guidelines";
});

updateItem('Week3_Patient_C_Wednesday', '3G.10', item => {
  item.fullCredit = "States RSV and Tdap gaps are actionable for administration or pharmacy referral";
  item.halfCredit = "Recommends vaccines";
});

updateItem('Week3_Patient_C_Wednesday', '3G.11', item => {
  item.fullCredit = "Plans next-visit vaccination review or record verification";
  item.halfCredit = "Mentions vaccine check";
});

updateItem('Week3_Patient_C_Wednesday', '3G.12', item => {
  item.fullCredit = "Enumerates two specific vaccination gaps: RSV and Tdap booster";
  item.halfCredit = "Mentions vaccine gaps";
});

updateItem('Week3_Patient_C_Wednesday', '4A.1', item => {
  item.fullCredit = "States continuation of Trelegy Ellipta 100/62.5/25 mcg 1 inhalation daily";
  item.halfCredit = "Continues Trelegy without dose";
});

updateItem('Week3_Patient_C_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies mepolizumab (Nucala) 100 mg subcutaneous injection every 4 weeks";
  item.halfCredit = "Recommends mepolizumab without exact dose/route/frequency";
});

updateItem('Week3_Patient_C_Wednesday', '4A.4', item => {
  item.fullCredit = "Documents continuation of Trelegy Ellipta maintenance therapy";
  item.halfCredit = "Continues maintenance inhaler";
});

updateItem('Week3_Patient_C_Wednesday', '4A.5', item => {
  item.fullCredit = "Documents Trelegy sig: 1 inhalation daily";
  item.halfCredit = "Mentions daily inhalation";
});

updateItem('Week3_Patient_C_Wednesday', '4A.6', item => {
  item.fullCredit = "Documents continuation of albuterol HFA rescue therapy";
  item.halfCredit = "Continues albuterol";
});

updateItem('Week3_Patient_C_Wednesday', '4A.7', item => {
  item.fullCredit = "Documents albuterol sig: 1-2 puffs (or 2 puffs) every 4-6 hours PRN for dyspnea";
  item.halfCredit = "States albuterol PRN without exact dose";
});

updateItem('Week3_Patient_C_Wednesday', '4A.8', item => {
  item.fullCredit = "Names mepolizumab with dose (100 mg), route (SQ), and frequency (every 4 weeks)";
  item.halfCredit = "Names mepolizumab without full regimen";
});

updateItem('Week3_Patient_C_Wednesday', '4A.9', item => {
  item.fullCredit = "Documents brand name Nucala alongside generic mepolizumab (or recognizes mepolizumab)";
  item.halfCredit = "Uses generic name only";
});

updateItem('Week3_Patient_C_Wednesday', '4A.10', item => {
  item.fullCredit = "Documents mepolizumab dose: 100 mg";
  item.halfCredit = "Mentions mepolizumab";
});

updateItem('Week3_Patient_C_Wednesday', '4A.11', item => {
  item.fullCredit = "Documents mepolizumab route: subcutaneous (SC / SQ)";
  item.halfCredit = "Mentions injection";
});

updateItem('Week3_Patient_C_Wednesday', '4A.12', item => {
  item.fullCredit = "Documents mepolizumab frequency: once every 4 weeks (monthly)";
  item.halfCredit = "Mentions every 4 weeks";
});

updateItem('Week3_Patient_C_Wednesday', '4A.13', item => {
  item.fullCredit = "Educates on mechanism of action: anti-IL-5 monoclonal antibody targeting eosinophils";
  item.halfCredit = "Mentions targets eosinophils";
});

updateItem('Week3_Patient_C_Wednesday', '4A.14', item => {
  item.fullCredit = "Educates on expected benefits: reduced exacerbations, reduced OCS bursts, improved breathing";
  item.halfCredit = "Mentions fewer flares";
});

updateItem('Week3_Patient_C_Wednesday', '4A.15', item => {
  item.fullCredit = "Educates on administration requirements: subcutaneous injection in clinic or autoinjector at home";
  item.halfCredit = "Mentions injection";
});

updateItem('Week3_Patient_C_Wednesday', '4A.16', item => {
  item.fullCredit = "Educates on monitoring requirements: symptom response, flare tracking, eosinophil reduction";
  item.halfCredit = "Mentions monitoring";
});

updateItem('Week3_Patient_C_Wednesday', '4A.17', item => {
  item.fullCredit = "Sets expectations regarding gradual onset of biologic benefit (weeks to months)";
  item.halfCredit = "Mentions gradual improvement";
});

updateItem('Week3_Patient_C_Wednesday', '4A.19', item => {
  item.fullCredit = "Lists omalizumab as alternative biologic (anti-IgE) or identifies mepolizumab as preferred anti-IL-5 agent";
  item.halfCredit = "Names mepolizumab alone";
});

updateItem('Week3_Patient_C_Wednesday', '4A.20', item => {
  item.fullCredit = "Lists benralizumab as alternative biologic (anti-IL-5 receptor alpha) or identifies mepolizumab as preferred anti-IL-5 agent";
  item.halfCredit = "Names mepolizumab alone";
});

updateItem('Week3_Patient_C_Wednesday', '4A.21', item => {
  item.fullCredit = "Lists dupilumab as alternative biologic (anti-IL-4Ralpha) or identifies mepolizumab as preferred anti-IL-5 agent";
  item.halfCredit = "Names mepolizumab alone";
});

updateItem('Week3_Patient_C_Wednesday', '4A.22', item => {
  item.fullCredit = "Lists tezepelumab as alternative biologic (anti-TSLP) or identifies mepolizumab as preferred anti-IL-5 agent";
  item.halfCredit = "Names mepolizumab alone";
});

updateItem('Week3_Patient_C_Wednesday', '4A.24', item => {
  item.fullCredit = "Counsels patient on gradual onset of biologic benefit (requires 3-4 months for full assessment)";
  item.halfCredit = "Mentions takes time to work";
});

updateItem('Week3_Patient_C_Wednesday', '4A.25', item => {
  item.fullCredit = "Verifies mepolizumab dose against GINA 2025 standard dosing (100 mg SC q4w for eosinophilic asthma/ACO)";
  item.halfCredit = "Mentions standard dose";
});

updateItem('Week3_Patient_C_Wednesday', '4A.26', item => {
  item.fullCredit = "Documents GINA Step 5 add-on biologic classification for mepolizumab";
  item.halfCredit = "Mentions GINA Step 5";
});

updateItem('Week3_Patient_C_Wednesday', '4A.28', item => {
  item.fullCredit = "Confirms no change to LAMA therapy (Trelegy umeclidinium maintained, no separate LAMA added)";
  item.halfCredit = "Continues Trelegy";
});

updateItem('Week3_Patient_C_Wednesday', '4A.29', item => {
  item.fullCredit = "Confirms no change to rescue inhaler therapy (continues albuterol HFA PRN)";
  item.halfCredit = "Continues albuterol";
});

updateItem('Week3_Patient_C_Wednesday', '4A.30', item => {
  item.fullCredit = "Reinforces continued excellent inhaler technique and daily adherence to baseline Trelegy";
  item.halfCredit = "Mentions continuing inhaler";
});

updateItem('Week3_Patient_C_Wednesday', '4A.31', item => {
  item.fullCredit = "Mentions checking insurance formulary / prior authorization / local eligibility for mepolizumab";
  item.halfCredit = "Mentions prior authorization";
});

updateItem('Week3_Patient_C_Wednesday', '4A.32', item => {
  item.fullCredit = "States rationale for continuing baseline triple therapy alongside biologic (biologic is add-on, not replacement)";
  item.halfCredit = "Continues baseline inhalers";
});

updateItem('Week3_Patient_C_Wednesday', '4B.1', item => {
  item.fullCredit = "States explicit goal to reduce or eliminate systemic corticosteroid exposure";
  item.halfCredit = "Mentions reducing steroids";
});

updateItem('Week3_Patient_C_Wednesday', '4B.2', item => {
  item.fullCredit = "Communicates OCS reduction goal to patient in Plan";
  item.halfCredit = "Mentions discussing steroid reduction";
});

updateItem('Week3_Patient_C_Wednesday', '4B.3', item => {
  item.fullCredit = "Includes written exacerbation action plan review in Plan";
  item.halfCredit = "Mentions action plan";
});

updateItem('Week3_Patient_C_Wednesday', '4B.4', item => {
  item.fullCredit = "Recommends prompt evaluation of worsening respiratory symptoms";
  item.halfCredit = "Mentions contacting clinic";
});

updateItem('Week3_Patient_C_Wednesday', '4B.5', item => {
  item.fullCredit = "References written asthma/COPD action plan";
  item.halfCredit = "Mentions action plan";
});

updateItem('Week3_Patient_C_Wednesday', '4B.6', item => {
  item.fullCredit = "Frames OCS-sparing as a patient-valued goal aligned with avoiding insomnia and jitteriness";
  item.halfCredit = "Notes patient preferences";
});

updateItem('Week3_Patient_C_Wednesday', '4B.7', item => {
  item.fullCredit = "Frames mepolizumab as the mechanism for reducing future OCS courses";
  item.halfCredit = "Notes biologic spares steroids";
});

updateItem('Week3_Patient_C_Wednesday', '4B.8', item => {
  item.fullCredit = "Defines criteria for when an OCS burst is indicated during acute severe flare-up";
  item.halfCredit = "Mentions when to use steroids";
});

updateItem('Week3_Patient_C_Wednesday', '4B.9', item => {
  item.fullCredit = "Cites GINA 2025 corticosteroid stewardship principles";
  item.halfCredit = "Mentions steroid guidelines";
});

updateItem('Week3_Patient_C_Wednesday', '4B.10', item => {
  item.fullCredit = "Discusses OCS adverse effects with patient in Plan";
  item.halfCredit = "Mentions steroid risks";
});

updateItem('Week3_Patient_C_Wednesday', '4B.11', item => {
  item.fullCredit = "Acknowledges patient's prednisone side-effect concerns in Plan";
  item.halfCredit = "Notes patient concerns";
});

updateItem('Week3_Patient_C_Wednesday', '4B.12', item => {
  item.fullCredit = "Integrates corticosteroid stewardship into overall care strategy";
  item.halfCredit = "Mentions steroid reduction";
});

updateItem('Week3_Patient_C_Wednesday', '4C.3', item => {
  item.fullCredit = "Reviews allergen avoidance strategies (dust, pollen, washing bedding)";
  item.halfCredit = "Mentions avoiding allergens";
});

updateItem('Week3_Patient_C_Wednesday', '4C.4', item => {
  item.fullCredit = "Provides allergic rhinitis management plan: restart fluticasone propionate nasal spray 50 mcg 1-2 sprays daily";
  item.halfCredit = "Mentions nasal spray";
});

updateItem('Week3_Patient_C_Wednesday', '4C.5', item => {
  item.fullCredit = "Cites GINA 2025 reference for intranasal corticosteroids in allergic rhinitis";
  item.halfCredit = "Mentions guidelines for rhinitis";
});

updateItem('Week3_Patient_C_Wednesday', '4C.7', item => {
  item.fullCredit = "Documents allergic rhinitis control goal in Plan";
  item.halfCredit = "Mentions allergy control";
});

updateItem('Week3_Patient_C_Wednesday', '4C.8', item => {
  item.fullCredit = "Frames allergen avoidance as non-pharmacologic adjunct to pharmacotherapy";
  item.halfCredit = "Mentions trigger avoidance";
});

updateItem('Week3_Patient_C_Wednesday', '4D.2', item => {
  item.fullCredit = "States plan to minimize systemic corticosteroid exposure to protect bone health";
  item.halfCredit = "Mentions bone health";
});

updateItem('Week3_Patient_C_Wednesday', '4D.4', item => {
  item.fullCredit = "Links mepolizumab OCS-sparing effect to skeletal protection in Plan";
  item.halfCredit = "Mentions bone protection";
});

updateItem('Week3_Patient_C_Wednesday', '4D.6', item => {
  item.fullCredit = "Addresses bone health in Plan: continue calcium + vitamin D, recommend DEXA scan";
  item.halfCredit = "Mentions calcium and vitamin D";
});

updateItem('Week3_Patient_C_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo) for chronic lung disease";
  item.halfCredit = "Mentions RSV vaccine";
});

updateItem('Week3_Patient_C_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
  item.halfCredit = "Mentions Tdap booster";
});

updateItem('Week3_Patient_C_Wednesday', '4E.3', item => {
  item.fullCredit = "Plans to review vaccination status in registry or at next visit";
  item.halfCredit = "Mentions vaccine review";
});

updateItem('Week3_Patient_C_Wednesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza vaccine is up to date";
  item.halfCredit = "Mentions flu vaccine";
});

updateItem('Week3_Patient_C_Wednesday', '4E.5', item => {
  item.fullCredit = "Confirms COVID-19 vaccine is up to date";
  item.halfCredit = "Mentions COVID vaccine";
});

updateItem('Week3_Patient_C_Wednesday', '4E.6', item => {
  item.fullCredit = "Confirms PCV20 pneumococcal vaccine received / up to date";
  item.halfCredit = "Mentions pneumococcal vaccine";
});

updateItem('Week3_Patient_C_Wednesday', '4E.7', item => {
  item.fullCredit = "Cites GINA 2025 / CDC vaccine recommendations in Plan";
  item.halfCredit = "Mentions vaccine guidelines";
});

updateItem('Week3_Patient_C_Wednesday', '4E.8', item => {
  item.fullCredit = "Frames vaccination as part of exacerbation prevention strategy";
  item.halfCredit = "Notes vaccines prevent flares";
});

updateItem('Week3_Patient_C_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans ACT score monitoring at follow-up (target >=20)";
  item.halfCredit = "Mentions ACT monitoring";
});

updateItem('Week3_Patient_C_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans CAT score monitoring at follow-up (target <10 or reduction)";
  item.halfCredit = "Mentions CAT monitoring";
});

updateItem('Week3_Patient_C_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans exacerbation frequency monitoring at follow-up";
  item.halfCredit = "Mentions flare tracking";
});

updateItem('Week3_Patient_C_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans oral corticosteroid burst tracking at follow-up";
  item.halfCredit = "Mentions steroid tracking";
});

updateItem('Week3_Patient_C_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans rescue inhaler use frequency monitoring at follow-up";
  item.halfCredit = "Mentions rescue monitoring";
});

updateItem('Week3_Patient_C_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans blood eosinophil trend monitoring following biologic initiation";
  item.halfCredit = "Mentions eosinophil recheck";
});

updateItem('Week3_Patient_C_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans adherence monitoring for both baseline Trelegy and biologic regimen";
  item.halfCredit = "Mentions adherence check";
});

updateItem('Week3_Patient_C_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans monitoring for injection-related adverse effects (injection site reactions, anaphylaxis)";
  item.halfCredit = "Mentions injection safety";
});

updateItem('Week3_Patient_C_Wednesday', '4F.9', item => {
  item.fullCredit = "Comprehensive treatment response monitoring plan covers symptom control, flares, and tolerability";
  item.halfCredit = "Partial monitoring plan";
});

updateItem('Week3_Patient_C_Wednesday', '4F.10', item => {
  item.fullCredit = "Comprehensive monitoring plan covers >= 5 discrete monitoring parameters (ACT, CAT, flares, rescue, adherence)";
  item.halfCredit = "Fewer monitoring elements";
});

updateItem('Week3_Patient_C_Wednesday', '4F.11', item => {
  item.fullCredit = "Plans longitudinal eosinophil trending after biologic initiation";
  item.halfCredit = "Mentions eosinophil tracking";
});

updateItem('Week3_Patient_C_Wednesday', '4F.12', item => {
  item.fullCredit = "Specifies timeframe for ACT/CAT reassessment (e.g., 4-12 weeks or 3-4 months)";
  item.halfCredit = "Mentions reassessment";
});

updateItem('Week3_Patient_C_Wednesday', '4F.13', item => {
  item.fullCredit = "Frames OCS tracking as a corticosteroid stewardship outcome";
  item.halfCredit = "Mentions steroid tracking";
});

updateItem('Week3_Patient_C_Wednesday', '4F.14', item => {
  item.fullCredit = "Frames rescue inhaler reduction as an expected outcome of biologic therapy";
  item.halfCredit = "Mentions less rescue use";
});

updateItem('Week3_Patient_C_Wednesday', '4F.15', item => {
  item.fullCredit = "Mentions monitoring for injection site reactions per GINA 2025";
  item.halfCredit = "Mentions injection reactions";
});

updateItem('Week3_Patient_C_Wednesday', '4F.16', item => {
  item.fullCredit = "Mentions monitoring for hypersensitivity / anaphylaxis per GINA 2025";
  item.halfCredit = "Mentions anaphylaxis";
});

updateItem('Week3_Patient_C_Wednesday', '4F.17', item => {
  item.fullCredit = "Presents monitoring plan within Plan section (dedicated Monitoring subsection or integrated monitoring items)";
  item.halfCredit = "Mentions monitoring briefly";
});

updateItem('Week3_Patient_C_Wednesday', '4F.18', item => {
  item.fullCredit = "Plans adherence monitoring for both inhaled triple therapy and biologic regimen";
  item.halfCredit = "Mentions adherence";
});

updateItem('Week3_Patient_C_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up interval in 4-12 weeks (or 3-4 months for formal biologic efficacy assessment per GINA)";
  item.halfCredit = "Mentions follow-up without interval";
});

updateItem('Week3_Patient_C_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans to assess response to mepolizumab / biologic at follow-up";
  item.halfCredit = "Mentions checking biologic response";
});

updateItem('Week3_Patient_C_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans to reassess exacerbation frequency at follow-up";
  item.halfCredit = "Mentions flare reassessment";
});

updateItem('Week3_Patient_C_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans to reassess ACT score at follow-up";
  item.halfCredit = "Mentions ACT reassessment";
});

updateItem('Week3_Patient_C_Wednesday', '4G.5', item => {
  item.fullCredit = "Plans to reassess CAT score at follow-up";
  item.halfCredit = "Mentions CAT reassessment";
});

updateItem('Week3_Patient_C_Wednesday', '4G.6', item => {
  item.fullCredit = "Plans to reassess oral corticosteroid exposure and bursts at follow-up";
  item.halfCredit = "Mentions steroid reassessment";
});

updateItem('Week3_Patient_C_Wednesday', '4G.7', item => {
  item.fullCredit = "Plans to reassess symptom burden and activity tolerance at follow-up";
  item.halfCredit = "Mentions symptom reassessment";
});

updateItem('Week3_Patient_C_Wednesday', '4G.8', item => {
  item.fullCredit = "Plans to reassess treatment tolerability and adverse effects at follow-up";
  item.halfCredit = "Mentions tolerability check";
});

updateItem('Week3_Patient_C_Wednesday', '4G.9', item => {
  item.fullCredit = "States commitment to continued longitudinal ACO management / specialized care";
  item.halfCredit = "Mentions continuing care";
});

updateItem('Week3_Patient_C_Wednesday', '4G.10', item => {
  item.fullCredit = "Frames follow-up around biologic response and tolerability assessment";
  item.halfCredit = "Mentions biologic check";
});

updateItem('Week3_Patient_C_Wednesday', '4G.11', item => {
  item.fullCredit = "References GINA 2025 follow-up framework (assess-adjust-review)";
  item.halfCredit = "Mentions guidelines";
});

updateItem('Week3_Patient_C_Wednesday', '4G.12', item => {
  item.fullCredit = "Justifies follow-up interval appropriateness (allowing sufficient time for biologic response)";
  item.halfCredit = "Mentions timing";
});

updateItem('Week3_Patient_C_Wednesday', '4G.13', item => {
  item.fullCredit = "Plans to reassess vaccination completion (RSV, Tdap) at next visit";
  item.halfCredit = "Mentions vaccine follow-up";
});

updateItem('Week3_Patient_C_Wednesday', '4G.14', item => {
  item.fullCredit = "Follow-up plan encompasses major active problems (ACO, biologic, flares, rhinitis, vaccines)";
  item.halfCredit = "Partial follow-up plan";
});

updateItem('Week3_Patient_C_Wednesday', '5A.2', item => {
  item.fullCredit = "Assessment structures prioritized clinical problems across ACO, exacerbations, eosinophilia, OCS burden, rhinitis, and vaccines (or focused biologic candidacy)";
  item.halfCredit = "Lists problems without clear order";
});

updateItem('Week3_Patient_C_Wednesday', '5A.3', item => {
  item.fullCredit = "Plan headings mirror Assessment problems or care domains (biologic therapy, maintenance inhaler, rhinitis, vaccines, monitoring)";
  item.halfCredit = "Partial alignment";
});

updateItem('Week3_Patient_C_Wednesday', '5A.4', item => {
  item.fullCredit = "Structures Plan with clear sections including monitoring and follow-up (dedicated subsections or integrated within plan)";
  item.halfCredit = "Unstructured plan";
});

updateItem('Week3_Patient_C_Wednesday', '5B.2', item => {
  item.fullCredit = "Reports and interprets eosinophil count (520 cells/µL) as elevated / Type 2 inflammatory marker";
  item.halfCredit = "Reports count without interpretation";
});

updateItem('Week3_Patient_C_Wednesday', '5C.2', item => {
  item.fullCredit = "Cites specific eosinophil count (520 cells/µL), ACT/CAT scores, and GINA 2025, GOLD 2026, or MATINEE trial evidence in Assessment";
  item.halfCredit = "Mentions guidelines or phenotype without specific citations";
});


// ==========================================
// MARIA THOMPSON THURSDAY
// ==========================================
updateItem('Week3_Patient_C_Thursday', '1B.11', item => {
  item.fullCredit = "Documents patient-reported inhaler technique (or notes technique demonstrated / verified / reviewed)";
  item.halfCredit = "Inhaler technique noted";
});


updateItem('Week3_Patient_C_Thursday', '1A.5', item => {
  item.fullCredit = "States reason for encounter: Asthma-COPD Overlap management, persistent respiratory symptoms, or inhaler therapy evaluation";
  item.halfCredit = "Mentions flare-up or inhaler check";
});

updateItem('Week3_Patient_C_Thursday', '1B.2', item => {
  item.fullCredit = "Documents wheezing status: denies acute wheezing, reports resolved wheezing, or notes intermittent wheeze";
  item.halfCredit = "Mentions wheezing";
});

updateItem('Week3_Patient_C_Thursday', '1B.3', item => {
  item.fullCredit = "Documents nighttime symptom status: denies nocturnal awakenings or reports rare / improved awakenings";
  item.halfCredit = "Mentions sleep status";
});

updateItem('Week3_Patient_C_Thursday', '1B.4', item => {
  item.fullCredit = "Documents exercise tolerance status: improved, stable, or walking/activity tolerance";
  item.halfCredit = "Mentions exercise";
});

updateItem('Week3_Patient_C_Thursday', '1B.5', item => {
  item.fullCredit = "Documents albuterol rescue use frequency: 1-2 times weekly, reduced from baseline, or PRN reliance";
  item.halfCredit = "Mentions albuterol use";
});

updateItem('Week3_Patient_C_Thursday', '1C.1', item => {
  item.fullCredit = "Lists asthma in PMH or problem list (or notes asthma history in HPI)";
  item.halfCredit = "Mentions asthma";
});

updateItem('Week3_Patient_C_Thursday', '1C.2', item => {
  item.fullCredit = "Lists COPD in PMH or problem list with duration (~8 years or chronic COPD)";
  item.halfCredit = "Mentions COPD without duration";
});

updateItem('Week3_Patient_C_Thursday', '1C.12', item => {
  item.fullCredit = "Documents childhood onset of asthma (or lifelong asthma history)";
  item.halfCredit = "Mentions long asthma history";
});

updateItem('Week3_Patient_C_Thursday', '1D.8', item => {
  item.fullCredit = "Documents denial of recreational / illicit drug use";
  item.halfCredit = "Mentions non-smoker";
});

updateItem('Week3_Patient_C_Thursday', '1D.9', item => {
  item.fullCredit = "Documents physical activity status or comparison to prior visit (walking, exercise tolerance)";
  item.halfCredit = "Mentions activity";
});

updateItem('Week3_Patient_C_Thursday', '1G.1', item => {
  item.fullCredit = "Documents patient motivation / goals to improve respiratory control, maintain active lifestyle, or avoid future flares";
  item.halfCredit = "Mentions patient goals";
});

updateItem('Week3_Patient_C_Thursday', '1E.4b', item => {
  item.fullCredit = "Specifies biologic therapy: mepolizumab (Nucala) 100 mg subcutaneous every 4 weeks (or anti-IL-5 referral)";
  item.halfCredit = "Mentions anti-IL-5 without exact drug/dose";
});

updateItem('Week3_Patient_C_Thursday', '2B.4', item => {
  item.fullCredit = "Documents exacerbation history and albuterol rescue use frequency in objective / clinical evaluation";
  item.halfCredit = "Documents flares without rescue frequency";
});

updateItem('Week3_Patient_C_Thursday', '2B.5', item => {
  item.fullCredit = "Ties blood eosinophils (380 cells/µL) to persistent Type 2 inflammation with specific value";
  item.halfCredit = "Mentions high eosinophils";
});

updateItem('Week3_Patient_C_Thursday', '2B.7', item => {
  item.fullCredit = "Documents albuterol rescue use frequency alongside biologic therapy evaluation";
  item.halfCredit = "Mentions rescue inhaler";
});

updateItem('Week3_Patient_C_Thursday', '2C.2', item => {
  item.fullCredit = "Interprets post-BD FEV1/FVC ratio (0.57) against <0.70 threshold confirming fixed/persistent airflow obstruction";
  item.halfCredit = "Reports ratio without confirming obstruction";
});

updateItem('Week3_Patient_C_Thursday', '2C.3', item => {
  item.fullCredit = "Classifies FEV1 (58% predicted) against GOLD severity grading as GOLD Grade 2 moderate airflow limitation";
  item.halfCredit = "Reports FEV1% without severity grade";
});

updateItem('Week3_Patient_C_Thursday', '2C.4', item => {
  item.fullCredit = "Interprets blood eosinophil elevation (380 cells/µL) in the context of persistent Type 2 inflammation";
  item.halfCredit = "Mentions elevated eosinophils";
});

updateItem('Week3_Patient_C_Thursday', '2C.5', item => {
  item.fullCredit = "Interprets SpO2 96% on room air in the context of chronic respiratory disease (adequate / normal / >90%)";
  item.halfCredit = "Reports SpO2 value only";
});

updateItem('Week3_Patient_C_Thursday', '2C.6', item => {
  item.fullCredit = "Interprets ACT (14) and CAT (18) scores against prior visit trends or clinical thresholds";
  item.halfCredit = "Reports scores without trend context";
});

updateItem('Week3_Patient_C_Thursday', '3A.1', item => {
  item.fullCredit = "Names Asthma-COPD Overlap (ACO), asthma, COPD, or Treatment Failure in severe ACO explicitly in Assessment heading";
  item.halfCredit = "Labels heading Treatment Failure without mentioning airway disease";
});

updateItem('Week3_Patient_C_Thursday', '3A.3', item => {
  item.fullCredit = "Interprets ACT score (14) as indicating poorly controlled disease in Assessment";
  item.halfCredit = "Reports ACT in assessment";
});

updateItem('Week3_Patient_C_Thursday', '3A.4', item => {
  item.fullCredit = "Discusses and quantifies rescue inhaler use frequency in Assessment";
  item.halfCredit = "Mentions rescue use";
});

updateItem('Week3_Patient_C_Thursday', '3A.6', item => {
  item.fullCredit = "Discusses ongoing rescue inhaler reliance and need for therapy optimization";
  item.halfCredit = "Mentions rescue inhaler";
});

updateItem('Week3_Patient_C_Thursday', '3A.7', item => {
  item.fullCredit = "Addresses exercise tolerance and exertional limitation in Assessment";
  item.halfCredit = "Mentions exercise limitation";
});

updateItem('Week3_Patient_C_Thursday', '3B.6', item => {
  item.fullCredit = "Documents specific allergic rhinitis symptoms: sneezing, congestion, rhinorrhea, or itchy/watery eyes";
  item.halfCredit = "Mentions allergies acting up";
});

updateItem('Week3_Patient_C_Thursday', '3B.9', item => {
  item.fullCredit = "Differentiates whether ongoing respiratory complaints stem from uncontrolled upper airway disease vs ACO progression";
  item.halfCredit = "Mentions upper and lower airway link";
});

updateItem('Week3_Patient_C_Thursday', '3B.10', item => {
  item.fullCredit = "Restarts fluticasone nasal spray and links allergic rhinitis optimization to avoiding inappropriate pulmonary escalation";
  item.halfCredit = "Restarts nasal spray without escalation linkage";
});

updateItem('Week3_Patient_C_Thursday', '3B.11', item => {
  item.fullCredit = "Explicitly links allergy symptoms and breathing tightness as a correlation";
  item.halfCredit = "Mentions both symptoms separately";
});

updateItem('Week3_Patient_C_Thursday', '3C.2', item => {
  item.fullCredit = "References eosinophilia with stability qualifier or specific persistent range (380 cells/µL, >=300 threshold)";
  item.halfCredit = "Mentions high eosinophils";
});

updateItem('Week3_Patient_C_Thursday', '3C.3', item => {
  item.fullCredit = "Explicitly discusses eosinophil count (380 cells/µL) in context of exacerbation risk in Assessment";
  item.halfCredit = "Mentions eosinophils in assessment";
});

updateItem('Week3_Patient_C_Thursday', '3C.4', item => {
  item.fullCredit = "Explains mechanism of persistent Type 2 inflammation driven by eosinophils";
  item.halfCredit = "Mentions Type 2 inflammation";
});

updateItem('Week3_Patient_C_Thursday', '3C.6', item => {
  item.fullCredit = "Cites GINA 2025 treatable trait framework for eosinophilic airway disease";
  item.halfCredit = "Mentions treatable traits";
});

updateItem('Week3_Patient_C_Thursday', '3D.9', item => {
  item.fullCredit = "Provides clinical rationale for continued longitudinal monitoring of exacerbations and OCS bursts";
  item.halfCredit = "Mentions tracking flares";
});

updateItem('Week3_Patient_C_Thursday', '3E.2', item => {
  item.fullCredit = "Links systemic corticosteroid exposure to skeletal / osteopenia risk";
  item.halfCredit = "Mentions bone health";
});

updateItem('Week3_Patient_C_Thursday', '3E.4', item => {
  item.fullCredit = "Addresses continuation of calcium / vitamin D supplementation in Assessment";
  item.halfCredit = "Mentions calcium and vitamin D";
});

updateItem('Week3_Patient_C_Thursday', '3E.5', item => {
  item.fullCredit = "Explicitly states continuation of calcium / vitamin D supplementation in Plan";
  item.halfCredit = "Continues supplements";
});

updateItem('Week3_Patient_C_Thursday', '3E.6', item => {
  item.fullCredit = "Addresses bone mineral density / DEXA monitoring in Assessment or Plan";
  item.halfCredit = "Mentions DEXA scan";
});

updateItem('Week3_Patient_C_Thursday', '3F.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a distinct problem in Assessment or Plan";
  item.halfCredit = "Mentions vaccines";
});

updateItem('Week3_Patient_C_Thursday', '3F.2', item => {
  item.fullCredit = "Discusses RSV vaccination gap (indicated for chronic lung disease)";
  item.halfCredit = "Mentions RSV";
});

updateItem('Week3_Patient_C_Thursday', '3F.3', item => {
  item.fullCredit = "Discusses Tdap booster overdue status (>10 years)";
  item.halfCredit = "Mentions Tdap";
});

updateItem('Week3_Patient_C_Thursday', '3F.4', item => {
  item.fullCredit = "Discusses importance of respiratory vaccinations in chronic airway disease";
  item.halfCredit = "Notes vaccines prevent flares";
});

updateItem('Week3_Patient_C_Thursday', '3F.6', item => {
  item.fullCredit = "Recommends preventive care optimization / immunization record review";
  item.halfCredit = "Mentions vaccine review";
});

updateItem('Week3_Patient_C_Thursday', '4A.4', item => {
  item.fullCredit = "Explicitly states albuterol HFA rescue continuation regimen: 1-2 puffs (or 2 puffs) q4-6h PRN";
  item.halfCredit = "Continues albuterol PRN";
});

updateItem('Week3_Patient_C_Thursday', '4A.5', item => {
  item.fullCredit = "Explicitly states continuation of baseline maintenance inhaler therapy (Trelegy Ellipta) alongside biologic";
  item.halfCredit = "Continues Trelegy";
});

updateItem('Week3_Patient_C_Thursday', '4A.6', item => {
  item.fullCredit = "Includes medication adherence reinforcement in Plan";
  item.halfCredit = "Mentions taking meds daily";
});

updateItem('Week3_Patient_C_Thursday', '4A.7', item => {
  item.fullCredit = "Includes inhaler technique reinforcement in Plan";
  item.halfCredit = "Mentions inhaler technique";
});

updateItem('Week3_Patient_C_Thursday', '4A.8', item => {
  item.fullCredit = "Specifies biologic therapy: mepolizumab (Nucala) 100 mg subcutaneous every 4 weeks (or anti-IL-5 referral)";
  item.halfCredit = "Mentions anti-IL-5 without exact drug/dose";
});

updateItem('Week3_Patient_C_Thursday', '4B.4', item => {
  item.fullCredit = "Counsels patient on consistent daily nasal spray use even after symptoms improve";
  item.halfCredit = "Mentions daily use";
});

updateItem('Week3_Patient_C_Thursday', '4B.5', item => {
  item.fullCredit = "Reviews allergen avoidance strategies (dust mites, pollen, pet dander)";
  item.halfCredit = "Mentions avoiding triggers";
});

updateItem('Week3_Patient_C_Thursday', '4B.6', item => {
  item.fullCredit = "Restarts fluticasone propionate nasal spray with specific dosing (50 mcg 1-2 sprays each nostril daily) and links to avoiding pulmonary escalation";
  item.halfCredit = "Restarts nasal spray without exact dose";
});

updateItem('Week3_Patient_C_Thursday', '4C.1', item => {
  item.fullCredit = "Plans ACT score monitoring at follow-up (target >=20)";
  item.halfCredit = "Mentions ACT monitoring";
});

updateItem('Week3_Patient_C_Thursday', '4C.2', item => {
  item.fullCredit = "Plans CAT score monitoring at follow-up (target <10 or reduction)";
  item.halfCredit = "Mentions CAT monitoring";
});

updateItem('Week3_Patient_C_Thursday', '4C.3', item => {
  item.fullCredit = "Plans rescue inhaler use frequency monitoring at follow-up";
  item.halfCredit = "Mentions rescue monitoring";
});

updateItem('Week3_Patient_C_Thursday', '4C.4', item => {
  item.fullCredit = "Plans nighttime symptom monitoring at follow-up";
  item.halfCredit = "Mentions sleep monitoring";
});

updateItem('Week3_Patient_C_Thursday', '4C.7', item => {
  item.fullCredit = "Plans medication adherence monitoring at follow-up";
  item.halfCredit = "Mentions adherence check";
});

updateItem('Week3_Patient_C_Thursday', '4C.8', item => {
  item.fullCredit = "Plans inhaler technique monitoring at follow-up";
  item.halfCredit = "Mentions technique check";
});

updateItem('Week3_Patient_C_Thursday', '4C.9', item => {
  item.fullCredit = "Includes monitoring items within Plan (dedicated Monitoring subsection or integrated monitoring items)";
  item.halfCredit = "Mentions monitoring briefly";
});

updateItem('Week3_Patient_C_Thursday', '4C.10', item => {
  item.fullCredit = "Comprehensive monitoring plan addresses respiratory control, allergic rhinitis, and adherence";
  item.halfCredit = "Partial monitoring plan";
});

updateItem('Week3_Patient_C_Thursday', '4D.1', item => {
  item.fullCredit = "Specifies albuterol HFA rescue regimen: 1-2 puffs (or 2 puffs) q4-6h PRN for dyspnea";
  item.halfCredit = "Continues albuterol";
});

updateItem('Week3_Patient_C_Thursday', '4E.1', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo) in Plan";
  item.halfCredit = "Mentions RSV vaccine";
});

updateItem('Week3_Patient_C_Thursday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan";
  item.halfCredit = "Mentions Tdap booster";
});

updateItem('Week3_Patient_C_Thursday', '4E.3', item => {
  item.fullCredit = "Plans review of vaccination status at next visit";
  item.halfCredit = "Mentions vaccine review";
});

updateItem('Week3_Patient_C_Thursday', '4E.4', item => {
  item.fullCredit = "Includes preventive care recommendations in Plan (dedicated subsection or integrated vaccine plan)";
  item.halfCredit = "Mentions prevention";
});

updateItem('Week3_Patient_C_Thursday', '4F.1', item => {
  item.fullCredit = "Specifies follow-up interval in 4-8 weeks or 1-3 months";
  item.halfCredit = "Mentions follow-up without interval";
});

updateItem('Week3_Patient_C_Thursday', '4F.2', item => {
  item.fullCredit = "Plans reassessment of asthma/COPD control at follow-up";
  item.halfCredit = "Mentions checking control";
});

updateItem('Week3_Patient_C_Thursday', '4F.5', item => {
  item.fullCredit = "States commitment to continued longitudinal ACO management / ongoing care";
  item.halfCredit = "Mentions continuing care";
});

updateItem('Week3_Patient_C_Thursday', '4F.6', item => {
  item.fullCredit = "Includes follow-up plan in Plan section (labeled subsection or integrated follow-up details)";
  item.halfCredit = "Mentions follow-up briefly";
});

updateItem('Week3_Patient_C_Thursday', '5A.3', item => {
  item.fullCredit = "Structures Assessment across prioritized clinical problems: Asthma-COPD Overlap, Allergic Rhinitis, Bone Health, and Vaccines (accepts Treatment Failure / ACO and AR)";
  item.halfCredit = "Single problem without structure";
});

updateItem('Week3_Patient_C_Thursday', '5A.4', item => {
  item.fullCredit = "Plan elements map to assessed problems (biologic evaluation, baseline Trelegy, fluticasone restart, bone health, vaccines)";
  item.halfCredit = "Partial alignment";
});

updateItem('Week3_Patient_C_Thursday', '5B.3', item => {
  item.fullCredit = "Reports and interprets ACT (14) and CAT (18) scores in Objective and/or Assessment";
  item.halfCredit = "Reports scores without interpretation";
});

updateItem('Week3_Patient_C_Thursday', '5B.4', item => {
  item.fullCredit = "Provides specific medication names, doses, and monitoring details (mepolizumab 100 mg SQ q4w, fluticasone 50 mcg sprays)";
  item.halfCredit = "Partial plan details";
});

updateItem('Week3_Patient_C_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 and/or GOLD 2026 guideline rationale for therapeutic recommendations";
  item.halfCredit = "Mentions guidelines generally";
});

updateItem('Week3_Patient_C_Thursday', '5C.3', item => {
  item.fullCredit = "Explicitly states continuation of existing baseline inhaled triple therapy (Trelegy) alongside biologic evaluation";
  item.halfCredit = "Continues baseline inhaler";
});


// ==========================================

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
