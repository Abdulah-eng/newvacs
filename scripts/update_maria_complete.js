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

// ==================== MARIA TUESDAY ====================
updateItem('Week3_Patient_C_Tuesday', '1A.4', item => {
  item.fullCredit = "States referred by PCP / primary care provider (or outpatient clinical pharmacy consult / chronic disease management)";
});
updateItem('Week3_Patient_C_Tuesday', '1A.5', item => {
  item.fullCredit = "States worsening dyspnea or frequent exacerbations as reason for referral/evaluation (or evaluation of asthma/COPD overlap)";
});
updateItem('Week3_Patient_C_Tuesday', '1A.7', item => {
  item.fullCredit = "States persistent respiratory symptoms despite current tiotropium maintenance therapy (or uncontrolled symptoms / therapy review)";
});
updateItem('Week3_Patient_C_Tuesday', '1A.8', item => {
  item.fullCredit = "States collaborative practice management, clinical pharmacy consult, or chronic airway disease management";
});
updateItem('Week3_Patient_C_Tuesday', '1B.1', item => {
  item.fullCredit = "States progressive worsening of shortness of breath over several years (or chronic progressive dyspnea / exertional SOB)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.2', item => {
  item.fullCredit = "States daily shortness of breath / dyspnea with exertion";
});
updateItem('Week3_Patient_C_Tuesday', '1B.3', item => {
  item.fullCredit = "States intermittent wheezing (or chest tightness/wheezing, or respiratory symptoms)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.4', item => {
  item.fullCredit = "States chronic cough (or intermittent cough with sputum/clearing, or cough symptoms)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.5', item => {
  item.fullCredit = "States frequent albuterol rescue inhaler use (several times daily / 3-4x daily PRN, or rescue reliance)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.6', item => {
  item.fullCredit = "States respiratory symptoms occur most days of the week (or frequent daytime symptoms)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.7', item => {
  item.fullCredit = "States nocturnal awakenings 2-3 nights/week (or 1-3 nights/week due to cough/wheezing)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.8', item => {
  item.fullCredit = "States difficulty climbing stairs or exertional breathlessness (or general exertional activity limitation)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.9', item => {
  item.fullCredit = "States difficulty walking uphill or incline limitation (or exertional activity limitation)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.10', item => {
  item.fullCredit = "States difficulty with prolonged physical activity or endurance limitation (or general exercise limitation)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.16', item => {
  item.fullCredit = "States allergic rhinitis symptoms (congestion, sneezing, postnasal drip) or seasonal allergies / allergic rhinitis history";
});
updateItem('Week3_Patient_C_Tuesday', '1B.17', item => {
  item.fullCredit = "States seasonal worsening of rhinitis / allergies in spring/fall (or seasonal allergy triggers)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.18', item => {
  item.fullCredit = "States prior ICS use or cannot recall prior daily inhaled corticosteroid controller (or prior controller unverified)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.19', item => {
  item.fullCredit = "Documents regular use of Spiriva and albuterol, alongside missed/stopped fluticasone nasal spray (or lists current respiratory meds)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.22', item => {
  item.fullCredit = "States denies hospitalizations and ED visits (or denies recent emergency care / managed in outpatient setting)";
});
updateItem('Week3_Patient_C_Tuesday', '1D.9', item => {
  item.fullCredit = "Documents activity limitation linked to respiratory symptoms / breathlessness (or exertional limitation)";
});
updateItem('Week3_Patient_C_Tuesday', '1D.10', item => {
  item.fullCredit = "Documents lack of regular exercise routine or sedentary lifestyle secondary to dyspnea";
});
updateItem('Week3_Patient_C_Tuesday', '1F.2', item => {
  item.fullCredit = "Confirms denial of recent ED visits (or denies emergency department visits / managed in clinic)";
});
updateItem('Week3_Patient_C_Tuesday', '1F.3', item => {
  item.fullCredit = "Documents active allergic rhinitis symptoms (congestion, sneezing, or rhinorrhea, or allergic rhinitis history)";
});
updateItem('Week3_Patient_C_Tuesday', '1F.4', item => {
  item.fullCredit = "Notes seasonal worsening pattern for rhinitis / allergies (or seasonal allergy triggers)";
});
updateItem('Week3_Patient_C_Tuesday', '1F.5', item => {
  item.fullCredit = "Documents activity limitation is symptom-driven / limited by dyspnea (or exertional limitation)";
});
updateItem('Week3_Patient_C_Tuesday', '1G.4', item => {
  item.fullCredit = "States patient awareness of treatment limitations / desire for optimized therapy, improved breathing, or fewer exacerbations";
});
updateItem('Week3_Patient_C_Tuesday', '2C.1', item => {
  item.fullCredit = "Links post-BD FEV1/FVC 0.55 (<0.70 threshold) to GOLD criterion confirming fixed/persistent airflow obstruction";
});
updateItem('Week3_Patient_C_Tuesday', '2C.3', item => {
  item.fullCredit = "Links blood eosinophils 420 cells/µL to Type 2 airway inflammation per GINA 2025 (or notes eosinophilic inflammation)";
});
updateItem('Week3_Patient_C_Tuesday', '2C.4', item => {
  item.fullCredit = "States ACT 15 indicates poorly controlled asthma (<20 GINA threshold, or poorly controlled asthma)";
});
updateItem('Week3_Patient_C_Tuesday', '2C.5', item => {
  item.fullCredit = "States CAT 19 indicates high COPD symptom burden (>=10 threshold / GOLD 2026, or high symptom burden)";
});
updateItem('Week3_Patient_C_Tuesday', '2C.6', item => {
  item.fullCredit = "Notes FeNO and IgE are unmeasured Type 2 biomarkers, or notes eosinophils and spirometry confirm phenotype";
});
updateItem('Week3_Patient_C_Tuesday', '3A.1', item => {
  item.fullCredit = "Labels condition as Asthma-COPD Overlap (ACO) in Assessment with explanation of asthma and COPD features mandating ICS";
});
updateItem('Week3_Patient_C_Tuesday', '3A.3', item => {
  item.fullCredit = "Documents asthma features: childhood onset, wheezing, cough, or nocturnal awakenings";
});
updateItem('Week3_Patient_C_Tuesday', '3A.4', item => {
  item.fullCredit = "Links allergic rhinitis to atopic / asthma overlap phenotype (or comorbidity to lower airway disease)";
});
updateItem('Week3_Patient_C_Tuesday', '3A.6', item => {
  item.fullCredit = "Links blood eosinophil count (420 cells/µL) to Type 2 airway inflammation reasoning";
});
updateItem('Week3_Patient_C_Tuesday', '3A.9', item => {
  item.fullCredit = "Documents prior COPD diagnosis (8 years) and chronic exertional dyspnea";
});
updateItem('Week3_Patient_C_Tuesday', '3A.10', item => {
  item.fullCredit = "States GINA 2025 mandatory ICS rationale: any patient with asthma features must receive ICS-containing therapy";
});
updateItem('Week3_Patient_C_Tuesday', '3A.11', item => {
  item.fullCredit = "States tiotropium-only monotherapy lacks anti-inflammatory ICS and represents guideline undertreatment";
});
updateItem('Week3_Patient_C_Tuesday', '3A.12', item => {
  item.fullCredit = "Jointly links recurrent exacerbations and elevated eosinophils to urgent need for ICS-containing therapy";
});
updateItem('Week3_Patient_C_Tuesday', '3A.15', item => {
  item.fullCredit = "Explicitly cites GINA 2025 guideline as clinical authority for asthma/overlap management";
});
updateItem('Week3_Patient_C_Tuesday', '3B.1', item => {
  item.fullCredit = "Identifies uncontrolled asthma as a distinct problem (or within Asthma-COPD Overlap)";
});
updateItem('Week3_Patient_C_Tuesday', '3B.3', item => {
  item.fullCredit = "Cites daily respiratory symptom frequency as evidence of poor asthma control";
});
updateItem('Week3_Patient_C_Tuesday', '3B.4', item => {
  item.fullCredit = "Cites frequent albuterol rescue use (several times daily) as evidence of poor control";
});
updateItem('Week3_Patient_C_Tuesday', '3B.5', item => {
  item.fullCredit = "Cites nocturnal awakenings (2-3 nights/week) as evidence of uncontrolled asthma";
});
updateItem('Week3_Patient_C_Tuesday', '3B.6', item => {
  item.fullCredit = "Frames two OCS-treated exacerbations as evidence of uncontrolled disease and future flare risk";
});
updateItem('Week3_Patient_C_Tuesday', '3B.7', item => {
  item.fullCredit = "Cites GINA 2025 recommendation for universal ICS-containing therapy in patients with asthma features";
});
updateItem('Week3_Patient_C_Tuesday', '3B.8', item => {
  item.fullCredit = "Ties absence of daily ICS controller to multiple uncontrolled asthma markers";
});
updateItem('Week3_Patient_C_Tuesday', '3B.9', item => {
  item.fullCredit = "Links excessive SABA reliance to urgent need for controller escalation";
});
updateItem('Week3_Patient_C_Tuesday', '3B.10', item => {
  item.fullCredit = "Grounds escalation to Trelegy Ellipta in GINA/GOLD guideline recommendations";
});
updateItem('Week3_Patient_C_Tuesday', '3C.1', item => {
  item.fullCredit = "Identifies COPD with persistent airflow obstruction as a distinct problem (or within ACO)";
});
updateItem('Week3_Patient_C_Tuesday', '3C.2', item => {
  item.fullCredit = "Cites post-BD FEV1/FVC 0.55 (<0.70 threshold) as confirming persistent airflow obstruction";
});
updateItem('Week3_Patient_C_Tuesday', '3C.3', item => {
  item.fullCredit = "Interprets post-BD FEV1 58% predicted as GOLD Grade 2 moderate airflow limitation";
});
updateItem('Week3_Patient_C_Tuesday', '3C.5', item => {
  item.fullCredit = "Documents daily dyspnea, exercise intolerance, and activity limitation as COPD burden";
});
updateItem('Week3_Patient_C_Tuesday', '3C.6', item => {
  item.fullCredit = "Cites GOLD 2026 multi-domain assessment (symptoms, spirometry, exacerbations)";
});
updateItem('Week3_Patient_C_Tuesday', '3C.7', item => {
  item.fullCredit = "States overlapping asthma features require an integrated management approach (ACO)";
});
updateItem('Week3_Patient_C_Tuesday', '3C.9', item => {
  item.fullCredit = "Cites GOLD 2026 as guideline authority for COPD component";
});
updateItem('Week3_Patient_C_Tuesday', '3D.1', item => {
  item.fullCredit = "Identifies recurrent respiratory exacerbations as a distinct clinical problem in Assessment";
});
updateItem('Week3_Patient_C_Tuesday', '3D.3', item => {
  item.fullCredit = "Frames prior exacerbations (2 in past year) as strongest predictor of future exacerbation risk";
});
updateItem('Week3_Patient_C_Tuesday', '3D.4', item => {
  item.fullCredit = "Links recurrent exacerbations to accelerated lung function decline, reduced QoL, and healthcare utilization";
});
updateItem('Week3_Patient_C_Tuesday', '3D.5', item => {
  item.fullCredit = "Cites GINA 2025 / GOLD 2026 regarding exacerbation reduction as primary therapeutic goal";
});
updateItem('Week3_Patient_C_Tuesday', '3D.6', item => {
  item.fullCredit = "States absence of ICS-containing maintenance therapy directly contributes to recurrent flares";
});
updateItem('Week3_Patient_C_Tuesday', '3D.8', item => {
  item.fullCredit = "Cites GINA 2025 or GOLD 2026 in context of exacerbation prevention";
});
updateItem('Week3_Patient_C_Tuesday', '3E.1', item => {
  item.fullCredit = "Identifies eosinophilic airway inflammation as a distinct problem or treatable trait";
});
updateItem('Week3_Patient_C_Tuesday', '3E.3', item => {
  item.fullCredit = "Links blood eosinophilia (420 cells/µL) to Type 2 inflammatory airway disease";
});
updateItem('Week3_Patient_C_Tuesday', '3E.4', item => {
  item.fullCredit = "Cites GINA 2025 linking elevated eosinophils to ICS responsiveness";
});
updateItem('Week3_Patient_C_Tuesday', '3E.5', item => {
  item.fullCredit = "Recognizes eosinophilia as a treatable trait per GINA 2025 / GOLD 2026";
});
updateItem('Week3_Patient_C_Tuesday', '3E.6', item => {
  item.fullCredit = "States eosinophil count >=300 cells/µL strongly supports immediate ICS initiation";
});
updateItem('Week3_Patient_C_Tuesday', '3E.7', item => {
  item.fullCredit = "Notes eosinophil count relevance for future biologic therapy decisions if flares persist";
});
updateItem('Week3_Patient_C_Tuesday', '3E.8', item => {
  item.fullCredit = "Cites GINA 2025 in context of eosinophil-driven therapeutic decision-making";
});
updateItem('Week3_Patient_C_Tuesday', '3F.2', item => {
  item.fullCredit = "Documents specific allergic rhinitis symptoms (congestion, rhinorrhea, sneezing) or seasonal pattern";
});
updateItem('Week3_Patient_C_Tuesday', '3F.3', item => {
  item.fullCredit = "States upper airway disease commonly coexists with and impacts lower airway disease (one airway concept)";
});
updateItem('Week3_Patient_C_Tuesday', '3F.4', item => {
  item.fullCredit = "States untreated allergic rhinitis may worsen asthma control and overall respiratory symptom burden";
});
updateItem('Week3_Patient_C_Tuesday', '3F.5', item => {
  item.fullCredit = "Cites GINA 2025 regarding allergic rhinitis management as core component of airway care";
});
updateItem('Week3_Patient_C_Tuesday', '3F.6', item => {
  item.fullCredit = "Recommends daily intranasal corticosteroid (fluticasone) and outlines symptom monitoring plan";
});
updateItem('Week3_Patient_C_Tuesday', '3F.7', item => {
  item.fullCredit = "Frames allergic rhinitis as a relevant ongoing comorbidity affecting respiratory control";
});
updateItem('Week3_Patient_C_Tuesday', '3G.3', item => {
  item.fullCredit = "Links improved disease control and fewer exacerbations to reduced systemic corticosteroid exposure";
});
updateItem('Week3_Patient_C_Tuesday', '3G.4', item => {
  item.fullCredit = "Notes exacerbation prevention reduces OCS-related adverse effects and skeletal / osteopenia risk";
});
updateItem('Week3_Patient_C_Tuesday', '3H.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a distinct problem in Assessment (or addresses vaccines in plan)";
});
updateItem('Week3_Patient_C_Tuesday', '3H.2', item => {
  item.fullCredit = "Identifies RSV vaccination gap in Assessment (indicated for age 65 with chronic lung disease)";
});
updateItem('Week3_Patient_C_Tuesday', '3H.3', item => {
  item.fullCredit = "Identifies Tdap booster overdue status (>10 years ago) in Assessment";
});
updateItem('Week3_Patient_C_Tuesday', '3H.4', item => {
  item.fullCredit = "States importance of respiratory vaccination in asthma and COPD management";
});
updateItem('Week3_Patient_C_Tuesday', '3H.5', item => {
  item.fullCredit = "Identifies viral respiratory infections as common triggers for acute exacerbations";
});
updateItem('Week3_Patient_C_Tuesday', '3H.6', item => {
  item.fullCredit = "Incorporates preventive care optimization into overall treatment plan";
});
updateItem('Week3_Patient_C_Tuesday', '3H.7', item => {
  item.fullCredit = "Recommends review and updating of immunization records";
});
updateItem('Week3_Patient_C_Tuesday', '4A.3', item => {
  item.fullCredit = "Initiates ICS-containing therapy with explicit clinical justification tied to asthma component and eosinophils 420 cells/µL";
});
updateItem('Week3_Patient_C_Tuesday', '4A.6', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA rescue inhaler";
});
updateItem('Week3_Patient_C_Tuesday', '4A.7', item => {
  item.fullCredit = "Restates albuterol rescue dosing regimen: 2 puffs q4-6h PRN shortness of breath";
});
updateItem('Week3_Patient_C_Tuesday', '4A.10', item => {
  item.fullCredit = "Discusses rationale for ICS therapy (airway inflammation, eosinophils) with patient";
});
updateItem('Week3_Patient_C_Tuesday', '4A.11', item => {
  item.fullCredit = "Counsels patient on expected benefit of improved daytime symptom control";
});
updateItem('Week3_Patient_C_Tuesday', '4A.12', item => {
  item.fullCredit = "Counsels patient on expected benefit of reduced nighttime awakenings and better sleep";
});
updateItem('Week3_Patient_C_Tuesday', '4A.13', item => {
  item.fullCredit = "Counsels patient on expected benefit of reduced exacerbation frequency and fewer OCS bursts";
});
updateItem('Week3_Patient_C_Tuesday', '4A.14', item => {
  item.fullCredit = "Counsels patient on expected reduction in rescue inhaler reliance";
});
updateItem('Week3_Patient_C_Tuesday', '4A.15', item => {
  item.fullCredit = "References GINA 2025 Step 4/5 maintenance framework or Track 1 MART principles";
});
updateItem('Week3_Patient_C_Tuesday', '4B.3', item => {
  item.fullCredit = "Addresses allergen avoidance strategies (dust, pollen, triggers) in plan";
});
updateItem('Week3_Patient_C_Tuesday', '4B.4', item => {
  item.fullCredit = "Discusses upper-lower airway relationship (one airway) with patient";
});
updateItem('Week3_Patient_C_Tuesday', '4B.5', item => {
  item.fullCredit = "Plans ongoing allergic rhinitis symptom monitoring at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4C.1', item => {
  item.fullCredit = "Educates on early recognition of worsening respiratory symptoms";
});
updateItem('Week3_Patient_C_Tuesday', '4C.2', item => {
  item.fullCredit = "Discusses importance of early intervention during respiratory flares";
});
updateItem('Week3_Patient_C_Tuesday', '4C.3', item => {
  item.fullCredit = "Encourages prompt medical evaluation if symptoms worsen significantly";
});
updateItem('Week3_Patient_C_Tuesday', '4C.4', item => {
  item.fullCredit = "Grounds education plan in GINA 2025 / GOLD 2026 action plan principles";
});
updateItem('Week3_Patient_C_Tuesday', '4D.1', item => {
  item.fullCredit = "Plans monitoring of ACT score at follow-up (target >= 20)";
});
updateItem('Week3_Patient_C_Tuesday', '4D.2', item => {
  item.fullCredit = "Plans monitoring of CAT score at follow-up (target < 10 or reduction)";
});
updateItem('Week3_Patient_C_Tuesday', '4D.3', item => {
  item.fullCredit = "Plans monitoring of daytime symptom frequency";
});
updateItem('Week3_Patient_C_Tuesday', '4D.4', item => {
  item.fullCredit = "Plans monitoring of nighttime awakenings";
});
updateItem('Week3_Patient_C_Tuesday', '4D.5', item => {
  item.fullCredit = "Plans monitoring of albuterol rescue inhaler use frequency";
});
updateItem('Week3_Patient_C_Tuesday', '4D.6', item => {
  item.fullCredit = "Plans monitoring for acute exacerbations and oral corticosteroid bursts";
});
updateItem('Week3_Patient_C_Tuesday', '4D.7', item => {
  item.fullCredit = "Plans monitoring of maintenance medication adherence";
});
updateItem('Week3_Patient_C_Tuesday', '4D.8', item => {
  item.fullCredit = "Plans ongoing re-evaluation and demonstration of inhaler technique at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4D.9', item => {
  item.fullCredit = "Comprehensive monitoring plan covers GINA 2025 symptom-control domains";
});
updateItem('Week3_Patient_C_Tuesday', '4E.2', item => {
  item.fullCredit = "States goal to minimize future systemic corticosteroid exposure to protect bone health / skeletal density";
});
updateItem('Week3_Patient_C_Tuesday', '4F.1', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo) for age 65 with chronic lung disease";
});
updateItem('Week3_Patient_C_Tuesday', '4F.2', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
});
updateItem('Week3_Patient_C_Tuesday', '4F.3', item => {
  item.fullCredit = "Plans review and update of immunization records at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4F.4', item => {
  item.fullCredit = "Frames respiratory vaccination as integral part of exacerbation prevention strategy";
});
updateItem('Week3_Patient_C_Tuesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe in 4-8 weeks or 1-3 months";
});
updateItem('Week3_Patient_C_Tuesday', '4G.2', item => {
  item.fullCredit = "Plans to assess clinical response to ICS initiation at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.3', item => {
  item.fullCredit = "Plans to reassess ACT score at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.4', item => {
  item.fullCredit = "Plans to reassess CAT score at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.5', item => {
  item.fullCredit = "Plans to reassess exacerbation frequency at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.6', item => {
  item.fullCredit = "Plans to reassess overall respiratory symptom burden at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.7', item => {
  item.fullCredit = "Plans to re-evaluate inhaler technique at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.8', item => {
  item.fullCredit = "Plans to reassess medication adherence at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.9', item => {
  item.fullCredit = "States commitment to continued longitudinal management of Asthma-COPD Overlap";
});
updateItem('Week3_Patient_C_Tuesday', '5A.3', item => {
  item.fullCredit = "Assessment structures prioritized clinical problems (ACO, Allergic Rhinitis, Exacerbations, Vaccines)";
});
updateItem('Week3_Patient_C_Tuesday', '5B.4', item => {
  item.fullCredit = "Provides concrete, actionable plan details including specific agent, dose, frequency, and monitoring";
});
updateItem('Week3_Patient_C_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 and/or GOLD 2026 guideline rationale for therapeutic recommendations";
});

// ==================== MARIA WEDNESDAY ====================
updateItem('Week3_Patient_C_Wednesday', '1A.6', item => {
  item.fullCredit = "Names Asthma-COPD Overlap (ACO), asthma, or COPD as context for visit (or respiratory symptom evaluation)";
});
updateItem('Week3_Patient_C_Wednesday', '1A.7', item => {
  item.fullCredit = "States context of inhaled therapy optimization and evaluating response to Trelegy Ellipta";
});
updateItem('Week3_Patient_C_Wednesday', '1A.8', item => {
  item.fullCredit = "Documents exacerbation 4 weeks ago and persistent/rougher breathing symptoms despite Trelegy";
});
updateItem('Week3_Patient_C_Wednesday', '1B.1', item => {
  item.fullCredit = "Documents persistent chest tightness, rougher breathing, or exertional limitation";
});
updateItem('Week3_Patient_C_Wednesday', '1B.2', item => {
  item.fullCredit = "Documents baseline dyspnea status (shortness of breath with walking/stairs)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.3', item => {
  item.fullCredit = "Documents wheezing status (intermittent wheezing or chest tightness)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.4', item => {
  item.fullCredit = "Documents activity tolerance (limited walking, fatigue with exertion)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.5', item => {
  item.fullCredit = "Documents rescue inhaler use trend (using albuterol 1-2 times daily / several times weekly)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.7', item => {
  item.fullCredit = "Documents multiple OCS-treated exacerbations in past year (3-5 flares / frequent prednisone bursts)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.8', item => {
  item.fullCredit = "Documents antibiotic therapy for prior exacerbation (amoxicillin/clavulanate or azithromycin)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.9', item => {
  item.fullCredit = "States denies ED visits (or denies recent emergency department visits)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.10', item => {
  item.fullCredit = "States denies hospitalizations (or managed in clinic / urgent care only)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.13', item => {
  item.fullCredit = "Confirms albuterol PRN adherence and appropriate rescue use";
});
updateItem('Week3_Patient_C_Wednesday', '1B.14', item => {
  item.fullCredit = "Confirms medication affordability ($20 copay / affordable without cost barrier)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.18', item => {
  item.fullCredit = "Documents patient dislike of prednisone / strong desire to avoid future steroid bursts";
});
updateItem('Week3_Patient_C_Wednesday', '1B.19', item => {
  item.fullCredit = "Documents prednisone side effects (insomnia, jitteriness, stomach discomfort, or mood changes)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.20', item => {
  item.fullCredit = "Documents patient motivation to reduce exacerbations and maintain active lifestyle";
});
updateItem('Week3_Patient_C_Wednesday', '1B.21', item => {
  item.fullCredit = "Explicitly confirms absence / denial of hospitalizations in HPI";
});
updateItem('Week3_Patient_C_Wednesday', '1B.22', item => {
  item.fullCredit = "Explicitly confirms absence / denial of ED visits in HPI";
});
updateItem('Week3_Patient_C_Wednesday', '1B.24', item => {
  item.fullCredit = "Documents daily activity level is limited by recurrent exacerbations and dyspnea";
});
updateItem('Week3_Patient_C_Wednesday', '1C.1', item => {
  item.fullCredit = "Lists asthma in PMH or problem list";
});
updateItem('Week3_Patient_C_Wednesday', '1C.2', item => {
  item.fullCredit = "Documents childhood onset of asthma (age 8-10 or lifelong)";
});
updateItem('Week3_Patient_C_Wednesday', '1C.3', item => {
  item.fullCredit = "Lists COPD in PMH or problem list";
});
updateItem('Week3_Patient_C_Wednesday', '1C.4', item => {
  item.fullCredit = "Documents COPD diagnosis duration (~8 years or chronic)";
});
updateItem('Week3_Patient_C_Wednesday', '1C.10', item => {
  item.fullCredit = "Documents past surgical history (cholecystectomy / gallbladder removal, or denies cardiac/pulmonary surgeries)";
});
updateItem('Week3_Patient_C_Wednesday', '1D.3', item => {
  item.fullCredit = "Documents denial of recreational / illicit drug use";
});
updateItem('Week3_Patient_C_Wednesday', '1D.4', item => {
  item.fullCredit = "Documents physical activity level in social history (walking limited to 1-2 blocks / sedentary)";
});
updateItem('Week3_Patient_C_Wednesday', '1D.5', item => {
  item.fullCredit = "Documents activity limitation secondary to frequent exacerbations and dyspnea";
});
updateItem('Week3_Patient_C_Wednesday', '1E.3', item => {
  item.fullCredit = "Documents Trelegy Ellipta dosing: 100/62.5/25 mcg 1 inhalation once daily";
});
updateItem('Week3_Patient_C_Wednesday', '1E.5', item => {
  item.fullCredit = "Identifies Trelegy contains umeclidinium (LAMA) and separate tiotropium is NOT prescribed (precludes duplicate LAMA)";
});
updateItem('Week3_Patient_C_Wednesday', '1E.21', item => {
  item.fullCredit = "Documents absence of medication affordability concerns ($20 copay / affordable)";
});
updateItem('Week3_Patient_C_Wednesday', '1E.23', item => {
  item.fullCredit = "Confirms adherence for Trelegy and appropriate PRN use of albuterol HFA";
});
updateItem('Week3_Patient_C_Wednesday', '1E.27', item => {
  item.fullCredit = "Reconciles active medications (Trelegy, albuterol, cetirizine, lisinopril, calcium/vitamin D - >=5 meds reconciled)";
});
updateItem('Week3_Patient_C_Wednesday', '1F.1', item => {
  item.fullCredit = "Respiratory ROS documents dyspnea, wheezing, and rescue inhaler use";
});
updateItem('Week3_Patient_C_Wednesday', '1F.2', item => {
  item.fullCredit = "Documents rescue inhaler use trend (several times weekly / 1-2x daily)";
});
updateItem('Week3_Patient_C_Wednesday', '1F.3', item => {
  item.fullCredit = "Documents rhinitis symptoms (congestion, sneezing) exacerbated by stopping nasal spray";
});
updateItem('Week3_Patient_C_Wednesday', '1F.4', item => {
  item.fullCredit = "Documents denial of ED visits as a relevant negative";
});
updateItem('Week3_Patient_C_Wednesday', '1F.5', item => {
  item.fullCredit = "Documents denial of hospitalizations as a relevant negative";
});
updateItem('Week3_Patient_C_Wednesday', '1F.6', item => {
  item.fullCredit = "Documents prednisone-related insomnia / sleep disruption";
});
updateItem('Week3_Patient_C_Wednesday', '1F.7', item => {
  item.fullCredit = "Documents prednisone-related jitteriness / nervousness";
});
updateItem('Week3_Patient_C_Wednesday', '1F.8', item => {
  item.fullCredit = "Documents functional activity limitation secondary to exacerbations in ROS";
});
updateItem('Week3_Patient_C_Wednesday', '1G.1', item => {
  item.fullCredit = "States patient goal to reduce or eliminate frequent exacerbations and steroid bursts";
});
updateItem('Week3_Patient_C_Wednesday', '1G.2', item => {
  item.fullCredit = "States patient goal of maintaining an active lifestyle and walking without limitation";
});
updateItem('Week3_Patient_C_Wednesday', '1G.3', item => {
  item.fullCredit = "Documents patient frustration with recurrent flares despite daily medication adherence";
});
updateItem('Week3_Patient_C_Wednesday', '1G.4', item => {
  item.fullCredit = "Documents patient concern regarding prednisone adverse effects (insomnia, jitteriness, bone health)";
});
updateItem('Week3_Patient_C_Wednesday', '1G.5', item => {
  item.fullCredit = "Documents patient desire to minimize cumulative oral corticosteroid exposure";
});
updateItem('Week3_Patient_C_Wednesday', '1G.6', item => {
  item.fullCredit = "Documents patient motivation to pursue advanced add-on therapy (biologic)";
});
updateItem('Week3_Patient_C_Wednesday', '2A.2', item => {
  item.fullCredit = "Documents HR 80 bpm (or 80 with standard clinical context / units)";
});
updateItem('Week3_Patient_C_Wednesday', '2A.3', item => {
  item.fullCredit = "Documents RR 18/min (or 18 breaths/min with standard units)";
});
updateItem('Week3_Patient_C_Wednesday', '2A.10', item => {
  item.fullCredit = "Documents Temp 98.6°F (or notes afebrile / vital signs complete)";
});
updateItem('Week3_Patient_C_Wednesday', '2A.11', item => {
  item.fullCredit = "Documents SpO2 95% on room air interpreted as adequate / target range (93-95%)";
});
updateItem('Week3_Patient_C_Wednesday', '2A.13', item => {
  item.fullCredit = "Interprets RR 18/min as within normal limits (eupneic / unlabored)";
});
updateItem('Week3_Patient_C_Wednesday', '2A.14', item => {
  item.fullCredit = "Interprets HR 80 bpm as normal / regular rate and rhythm";
});
updateItem('Week3_Patient_C_Wednesday', '2B.3', item => {
  item.fullCredit = "Interprets FEV1/FVC 0.56 against <0.70 threshold confirming persistent airflow obstruction";
});
updateItem('Week3_Patient_C_Wednesday', '2B.4', item => {
  item.fullCredit = "Classifies FEV1 61% predicted as GOLD Grade 2 moderate airflow limitation";
});
updateItem('Week3_Patient_C_Wednesday', '2B.6', item => {
  item.fullCredit = "Lists blood eosinophils 520 cells/µL and interprets as significantly elevated (>=300 threshold)";
});
updateItem('Week3_Patient_C_Wednesday', '2B.10', item => {
  item.fullCredit = "Interprets ACT score 17 as partly controlled (<=19 threshold, target >=20)";
});
updateItem('Week3_Patient_C_Wednesday', '2B.13', item => {
  item.fullCredit = "Interprets CAT score 15 as moderate-to-high symptom burden (>=10 threshold)";
});
updateItem('Week3_Patient_C_Wednesday', '2B.15', item => {
  item.fullCredit = "Documents prior antibiotic-requiring exacerbation episode";
});
updateItem('Week3_Patient_C_Wednesday', '2B.16', item => {
  item.fullCredit = "Documents annual exacerbation count (3-5 flares in past year, 3 in past 3 months)";
});
updateItem('Week3_Patient_C_Wednesday', '2B.17', item => {
  item.fullCredit = "Documents absence / denial of hospitalizations in Objective data";
});
updateItem('Week3_Patient_C_Wednesday', '2B.18', item => {
  item.fullCredit = "Notes blood glucose / metabolic monitoring consideration in context of corticosteroid exposure";
});
updateItem('Week3_Patient_C_Wednesday', '2B.20', item => {
  item.fullCredit = "Notes IgE and FeNO status (unmeasured / gaps) or notes eosinophilia confirms Type 2 phenotype";
});
updateItem('Week3_Patient_C_Wednesday', '2B.21', item => {
  item.fullCredit = "Notes upward trend in blood eosinophils (from 420 to 520 cells/µL)";
});
updateItem('Week3_Patient_C_Wednesday', '2B.22', item => {
  item.fullCredit = "Identifies lab source as CBC with differential";
});
updateItem('Week3_Patient_C_Wednesday', '2C.2', item => {
  item.fullCredit = "States obstructive pattern with FEV1/FVC < 0.70 (0.56) in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '2C.3', item => {
  item.fullCredit = "Classifies FEV1 (61% pred) as GOLD Grade 2 moderate obstruction in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '2C.4', item => {
  item.fullCredit = "Cites blood eosinophils 520 cells/µL meeting >=300 cells/µL threshold for biologic therapy";
});
updateItem('Week3_Patient_C_Wednesday', '2C.5', item => {
  item.fullCredit = "Classifies exacerbation frequency (3 in past 3 months, 4 in past year) as high-risk recurrent phenotype";
});
updateItem('Week3_Patient_C_Wednesday', '2C.6', item => {
  item.fullCredit = "Interprets ACT score (17) compared to >=20 controlled target threshold";
});
updateItem('Week3_Patient_C_Wednesday', '2C.7', item => {
  item.fullCredit = "Interprets CAT score (15) compared to >=10 threshold in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '2C.8', item => {
  item.fullCredit = "Interprets SpO2 95% within target range (93-95%) in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '2C.10', item => {
  item.fullCredit = "Addresses cumulative oral corticosteroid exposure risks (osteoporosis, hyperglycemia, metabolic)";
});
updateItem('Week3_Patient_C_Wednesday', '2C.11', item => {
  item.fullCredit = "Notes upward eosinophil trend (420 to 520 cells/µL) despite high-dose ICS";
});
updateItem('Week3_Patient_C_Wednesday', '2C.12', item => {
  item.fullCredit = "Notes FeNO status / gap or notes eosinophilia confirms Type 2 inflammation";
});
updateItem('Week3_Patient_C_Wednesday', '2C.13', item => {
  item.fullCredit = "Notes serum IgE status / gap or notes eosinophils guide anti-IL-5 selection";
});
updateItem('Week3_Patient_C_Wednesday', '2C.15', item => {
  item.fullCredit = "Notes sputum eosinophils not indicated given peripheral blood eosinophil elevation (520)";
});
updateItem('Week3_Patient_C_Wednesday', '2C.18', item => {
  item.fullCredit = "Notes comparison to prior spirometry data (FEV1 58% to 61% pred, persistent obstruction)";
});
updateItem('Week3_Patient_C_Wednesday', '2C.19', item => {
  item.fullCredit = "Delineates timing and frequency of recent OCS bursts (recent flare 4 weeks ago, 3 bursts in 3 months)";
});
updateItem('Week3_Patient_C_Wednesday', '2C.20', item => {
  item.fullCredit = "Quantifies rescue inhaler use frequency (1-2x daily / several times weekly)";
});
updateItem('Week3_Patient_C_Wednesday', '2C.22', item => {
  item.fullCredit = "Notes electrolyte status is stable in context of steroid and albuterol use";
});
updateItem('Week3_Patient_C_Wednesday', '2C.24', item => {
  item.fullCredit = "Compares ACT (15 to 17) and CAT (19 to 15) scores to baseline showing partial symptom improvement";
});
updateItem('Week3_Patient_C_Wednesday', '3A.1', item => {
  item.fullCredit = "Labels condition as Asthma-COPD Overlap (ACO) in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3A.2', item => {
  item.fullCredit = "Characterizes exacerbations as severe, recurrent, and eosinophilic";
});
updateItem('Week3_Patient_C_Wednesday', '3A.4', item => {
  item.fullCredit = "Cites childhood-onset asthma as an essential component of the ACO phenotype";
});
updateItem('Week3_Patient_C_Wednesday', '3A.5', item => {
  item.fullCredit = "Cites FEV1/FVC 0.56 and FEV1 61% pred within the Assessment text";
});
updateItem('Week3_Patient_C_Wednesday', '3A.6', item => {
  item.fullCredit = "Cites specific blood eosinophil count (520 cells/µL) in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3A.7', item => {
  item.fullCredit = "Cites allergic rhinitis as a contributing comorbidity to airway reactivity";
});
updateItem('Week3_Patient_C_Wednesday', '3A.8', item => {
  item.fullCredit = "Frames recurrent exacerbations as defining severe, refractory ACO";
});
updateItem('Week3_Patient_C_Wednesday', '3A.9', item => {
  item.fullCredit = "States current inhaled triple regimen (Trelegy) provides baseline symptom control but fails to prevent flares";
});
updateItem('Week3_Patient_C_Wednesday', '3A.10', item => {
  item.fullCredit = "Explicitly states inadequacy of maximal inhaled triple therapy to prevent severe eosinophilic exacerbations";
});
updateItem('Week3_Patient_C_Wednesday', '3A.12', item => {
  item.fullCredit = "References verified inhaler technique in the Assessment, ruling out implementation failure";
});
updateItem('Week3_Patient_C_Wednesday', '3A.13', item => {
  item.fullCredit = "Addresses allergic rhinitis optimization (fluticasone nasal spray restart) in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3A.14', item => {
  item.fullCredit = "Cites GINA 2025 Step 5 recommendation for add-on biologic therapy in refractory disease";
});
updateItem('Week3_Patient_C_Wednesday', '3A.15', item => {
  item.fullCredit = "Documents Type 2 eosinophilic airway inflammation driving persistent exacerbations";
});
updateItem('Week3_Patient_C_Wednesday', '3A.16', item => {
  item.fullCredit = "Concludes patient has severe eosinophilic disease warranting advanced biologic escalation";
});
updateItem('Week3_Patient_C_Wednesday', '3A.17', item => {
  item.fullCredit = "Interprets ACT score 17 (partly controlled) within the Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3A.18', item => {
  item.fullCredit = "Interprets CAT score 15 (moderate symptom burden) within the Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3A.19', item => {
  item.fullCredit = "Classifies current Trelegy regimen as maximal high-dose ICS/LABA/LAMA (GINA Step 4/5 equivalent)";
});
updateItem('Week3_Patient_C_Wednesday', '3A.20', item => {
  item.fullCredit = "Provides rationale for Step 5 biologic escalation (frequent flares despite maximal inhaled therapy)";
});
updateItem('Week3_Patient_C_Wednesday', '3A.21', item => {
  item.fullCredit = "Compares blood eosinophil count (520) to >=300 cells/µL threshold";
});
updateItem('Week3_Patient_C_Wednesday', '3A.22', item => {
  item.fullCredit = "Cites GINA 2025 Step 5 biologic eligibility criteria (eosinophils >=300, recurrent flares on high-dose ICS)";
});
updateItem('Week3_Patient_C_Wednesday', '3A.25', item => {
  item.fullCredit = "Cites MATINEE trial evidence supporting mepolizumab in eosinophilic COPD/overlap";
});
updateItem('Week3_Patient_C_Wednesday', '3A.26', item => {
  item.fullCredit = "Discusses applicability of evidence to Asthma-COPD Overlap vs isolated COPD";
});
updateItem('Week3_Patient_C_Wednesday', '3A.27', item => {
  item.fullCredit = "Prioritizes ACO / severe eosinophilic exacerbations as primary clinical problem (#1)";
});
updateItem('Week3_Patient_C_Wednesday', '3A.28', item => {
  item.fullCredit = "Describes Trelegy Ellipta regimen within the Assessment text";
});
updateItem('Week3_Patient_C_Wednesday', '3A.29', item => {
  item.fullCredit = "Cites albuterol HFA rescue use within the Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3A.31', item => {
  item.fullCredit = "Cites patient frustration and OCS side-effect burden as drivers of treatment urgency";
});
updateItem('Week3_Patient_C_Wednesday', '3A.32', item => {
  item.fullCredit = "Addresses follow-up context and need for longitudinal disease monitoring";
});
updateItem('Week3_Patient_C_Wednesday', '3B.1', item => {
  item.fullCredit = "Documents recurrent severe exacerbation count (3 in past 3 months, 4 in past year)";
});
updateItem('Week3_Patient_C_Wednesday', '3B.2', item => {
  item.fullCredit = "Documents annual corticosteroid-treated exacerbation count (4-5 bursts in past 12 months)";
});
updateItem('Week3_Patient_C_Wednesday', '3B.3', item => {
  item.fullCredit = "Cites GINA 2025 / GOLD 2026 predictive risk: prior exacerbations are strongest predictor of future flares";
});
updateItem('Week3_Patient_C_Wednesday', '3B.4', item => {
  item.fullCredit = "Frames recurrent exacerbations as the primary driver of biologic treatment escalation";
});
updateItem('Week3_Patient_C_Wednesday', '3B.5', item => {
  item.fullCredit = "Links recurrent exacerbations to accelerated FEV1 lung function decline";
});
updateItem('Week3_Patient_C_Wednesday', '3B.6', item => {
  item.fullCredit = "Links exacerbations to progressive quality of life impairment";
});
updateItem('Week3_Patient_C_Wednesday', '3B.7', item => {
  item.fullCredit = "Links exacerbations to increased healthcare utilization and clinical burden";
});
updateItem('Week3_Patient_C_Wednesday', '3B.8', item => {
  item.fullCredit = "Notes risk of future hospitalizations and respiratory failure without escalation";
});
updateItem('Week3_Patient_C_Wednesday', '3B.9', item => {
  item.fullCredit = "Explicitly frames exacerbation frequency as unacceptably high despite appropriate inhaled therapy";
});
updateItem('Week3_Patient_C_Wednesday', '3B.11', item => {
  item.fullCredit = "Confirms absence / denial of hospitalizations and ED visits in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3B.12', item => {
  item.fullCredit = "Documents prior antibiotic-treated exacerbation episode";
});
updateItem('Week3_Patient_C_Wednesday', '3B.13', item => {
  item.fullCredit = "Structures and ranks exacerbations as a high-priority problem in Assessment (#2)";
});
updateItem('Week3_Patient_C_Wednesday', '3B.14', item => {
  item.fullCredit = "Confirms excellent adherence and correct technique rule out implementation failure in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3B.15', item => {
  item.fullCredit = "Links biologic escalation directly to corticosteroid stewardship and flare prevention";
});
updateItem('Week3_Patient_C_Wednesday', '3B.16', item => {
  item.fullCredit = "Includes updated exacerbation action plan review in Assessment/Plan";
});
updateItem('Week3_Patient_C_Wednesday', '3B.17', item => {
  item.fullCredit = "Recommends prompt medical evaluation for worsening respiratory symptoms";
});
updateItem('Week3_Patient_C_Wednesday', '3B.18', item => {
  item.fullCredit = "Quantifies exacerbation burden over both timeframes (3 months: 3 flares; 12 months: 4 flares)";
});
updateItem('Week3_Patient_C_Wednesday', '3B.19', item => {
  item.fullCredit = "States dual role of exacerbation history as both clinical outcome and future risk marker";
});
updateItem('Week3_Patient_C_Wednesday', '3B.20', item => {
  item.fullCredit = "Cites GINA 2025 Step 4 failure recommendation for specialist evaluation and biologic initiation";
});
updateItem('Week3_Patient_C_Wednesday', '3C.1', item => {
  item.fullCredit = "Cites absolute blood eosinophil count (520 cells/µL) in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3C.2', item => {
  item.fullCredit = "Frames clinical picture as persistent eosinophilic airway inflammation refractory to high-dose ICS";
});
updateItem('Week3_Patient_C_Wednesday', '3C.4', item => {
  item.fullCredit = "States clear association between elevated blood eosinophils (520) and increased exacerbation risk";
});
updateItem('Week3_Patient_C_Wednesday', '3C.5', item => {
  item.fullCredit = "References treatable trait framework: eosinophilia as targetable biomarker";
});
updateItem('Week3_Patient_C_Wednesday', '3C.7', item => {
  item.fullCredit = "Elaborates MATINEE trial conclusion regarding mepolizumab efficacy in patients with elevated eosinophils";
});
updateItem('Week3_Patient_C_Wednesday', '3C.8', item => {
  item.fullCredit = "Distinguishes ACO from isolated COPD regarding MATINEE applicability and GINA biologic eligibility";
});
updateItem('Week3_Patient_C_Wednesday', '3C.9', item => {
  item.fullCredit = "Confirms patient meets all supporting criteria (eosinophils >=300, recurrent flares, high-dose ICS adherence)";
});
updateItem('Week3_Patient_C_Wednesday', '3C.11', item => {
  item.fullCredit = "Compares eosinophil count (520) to specific therapeutic threshold (>=300 cells/µL)";
});
updateItem('Week3_Patient_C_Wednesday', '3C.12', item => {
  item.fullCredit = "Structures and ranks eosinophilic inflammation as a prioritized clinical problem (#3)";
});
updateItem('Week3_Patient_C_Wednesday', '3C.13', item => {
  item.fullCredit = "Explicitly classifies patient's presentation as Type 2 inflammatory airway phenotype";
});
updateItem('Week3_Patient_C_Wednesday', '3C.14', item => {
  item.fullCredit = "Identifies eosinophils as the biomarker guiding selection of anti-IL-5 therapy (mepolizumab)";
});
updateItem('Week3_Patient_C_Wednesday', '3C.15', item => {
  item.fullCredit = "States inadequate suppression of eosinophilic inflammation by current ICS-based therapy";
});
updateItem('Week3_Patient_C_Wednesday', '3C.16', item => {
  item.fullCredit = "Explains mechanism: anti-IL-5 (mepolizumab) inhibits eosinophil maturation/survival to reduce exacerbations";
});
updateItem('Week3_Patient_C_Wednesday', '3C.17', item => {
  item.fullCredit = "Notes age eligibility for mepolizumab (FDA approved for age >=6 years; patient is 65)";
});
updateItem('Week3_Patient_C_Wednesday', '3C.18', item => {
  item.fullCredit = "Outlines plan for post-biologic eosinophil and clinical response monitoring";
});
updateItem('Week3_Patient_C_Wednesday', '3C.19', item => {
  item.fullCredit = "Links eosinophil count directly to CBC with differential as lab source";
});
updateItem('Week3_Patient_C_Wednesday', '3C.20', item => {
  item.fullCredit = "Frames mepolizumab initiation within GINA 2025 Step 5 add-on biologic pathway";
});
updateItem('Week3_Patient_C_Wednesday', '3D.1', item => {
  item.fullCredit = "Documents multiple prednisone courses in past year (3 in past 3 months, 4 in past year)";
});
updateItem('Week3_Patient_C_Wednesday', '3D.2', item => {
  item.fullCredit = "Documents patient's reported insomnia during oral corticosteroid bursts";
});
updateItem('Week3_Patient_C_Wednesday', '3D.3', item => {
  item.fullCredit = "Documents patient's reported jitteriness and nervousness from prednisone";
});
updateItem('Week3_Patient_C_Wednesday', '3D.5', item => {
  item.fullCredit = "Cites GINA 2025 goal of minimizing systemic corticosteroid exposure";
});
updateItem('Week3_Patient_C_Wednesday', '3D.6', item => {
  item.fullCredit = "Discusses cumulative adverse effect burden of repeated OCS (osteoporosis, metabolic, ocular, infections)";
});
updateItem('Week3_Patient_C_Wednesday', '3D.7', item => {
  item.fullCredit = "States explicit prioritization of OCS-sparing therapy to prevent long-term toxicity";
});
updateItem('Week3_Patient_C_Wednesday', '3D.8', item => {
  item.fullCredit = "Discusses proven OCS-sparing benefit of mepolizumab";
});
updateItem('Week3_Patient_C_Wednesday', '3D.9', item => {
  item.fullCredit = "Ranks oral corticosteroid burden and toxicity as a distinct clinical problem (#4)";
});
updateItem('Week3_Patient_C_Wednesday', '3D.11', item => {
  item.fullCredit = "Lists OCS adverse risks: insomnia, hyperglycemia, mood changes, and skeletal/osteoporosis risk";
});
updateItem('Week3_Patient_C_Wednesday', '3D.12', item => {
  item.fullCredit = "Documents patient's explicit preference to avoid future prednisone bursts in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3D.13', item => {
  item.fullCredit = "Quantifies cumulative OCS exposure (4-5 bursts in past 12 months)";
});
updateItem('Week3_Patient_C_Wednesday', '3D.14', item => {
  item.fullCredit = "Cites GINA 2025 evidence that even short, repeated OCS courses carry cumulative adverse risks";
});
updateItem('Week3_Patient_C_Wednesday', '3D.15', item => {
  item.fullCredit = "Explicitly links mepolizumab to reducing need for future oral corticosteroid bursts";
});
updateItem('Week3_Patient_C_Wednesday', '3D.16', item => {
  item.fullCredit = "Documents dual strategy: optimized inhaled triple therapy PLUS biologic for OCS sparing";
});
updateItem('Week3_Patient_C_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies allergic rhinitis as a distinct comorbidity problem in Assessment (#5)";
});
updateItem('Week3_Patient_C_Wednesday', '3E.2', item => {
  item.fullCredit = "Assesses rhinitis control status as worsened / uncontrolled after stopping nasal spray";
});
updateItem('Week3_Patient_C_Wednesday', '3E.4', item => {
  item.fullCredit = "Concludes rhinitis contributes to respiratory symptoms and plans restarting daily fluticasone nasal spray";
});
updateItem('Week3_Patient_C_Wednesday', '3E.6', item => {
  item.fullCredit = "Structures and ranks allergic rhinitis as a distinct comorbidity problem (#5)";
});
updateItem('Week3_Patient_C_Wednesday', '3E.7', item => {
  item.fullCredit = "Cites GINA 2025 recommendation for daily intranasal corticosteroid in allergic rhinitis";
});
updateItem('Week3_Patient_C_Wednesday', '3E.8', item => {
  item.fullCredit = "Discusses clinical nuance: treating upper airway disease improves overall asthma/airway control";
});
updateItem('Week3_Patient_C_Wednesday', '3F.3', item => {
  item.fullCredit = "Identifies skeletal / osteopenia risk from repeated systemic corticosteroid exposure";
});
updateItem('Week3_Patient_C_Wednesday', '3F.4', item => {
  item.fullCredit = "Links exacerbation reduction and OCS avoidance to skeletal / bone health protection";
});
updateItem('Week3_Patient_C_Wednesday', '3F.8', item => {
  item.fullCredit = "Structures and ranks bone health / skeletal risk as a distinct clinical problem (#6)";
});
updateItem('Week3_Patient_C_Wednesday', '3F.10', item => {
  item.fullCredit = "Addresses baseline DEXA scan / bone mineral density monitoring appropriateness";
});
updateItem('Week3_Patient_C_Wednesday', '3F.11', item => {
  item.fullCredit = "Documents risk of steroid-induced osteoporosis progression in postmenopausal female";
});
updateItem('Week3_Patient_C_Wednesday', '3F.12', item => {
  item.fullCredit = "Links mepolizumab's OCS-sparing effect to skeletal preservation and fracture risk reduction";
});
updateItem('Week3_Patient_C_Wednesday', '3G.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a distinct Assessment problem (#7)";
});
updateItem('Week3_Patient_C_Wednesday', '3G.2', item => {
  item.fullCredit = "Documents RSV vaccination gap in Assessment (indicated for age 65 with chronic lung disease)";
});
updateItem('Week3_Patient_C_Wednesday', '3G.3', item => {
  item.fullCredit = "Documents Tdap booster overdue status (>10 years ago) in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3G.4', item => {
  item.fullCredit = "Documents influenza vaccination is up to date in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3G.5', item => {
  item.fullCredit = "Documents COVID-19 vaccination is up to date in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3G.6', item => {
  item.fullCredit = "Documents PCV20 pneumococcal vaccination received at prior visit / up to date";
});
updateItem('Week3_Patient_C_Wednesday', '3G.7', item => {
  item.fullCredit = "Links respiratory vaccinations directly to preventing exacerbations and hospitalizations";
});
updateItem('Week3_Patient_C_Wednesday', '3G.8', item => {
  item.fullCredit = "Structures and ranks preventive care as a prioritized clinical problem (#7)";
});
updateItem('Week3_Patient_C_Wednesday', '3G.9', item => {
  item.fullCredit = "Cites GINA 2025 / CDC recommendations for respiratory vaccinations in chronic airway disease";
});
updateItem('Week3_Patient_C_Wednesday', '3G.10', item => {
  item.fullCredit = "Frames RSV and Tdap vaccine administration as actionable at this visit";
});
updateItem('Week3_Patient_C_Wednesday', '3G.11', item => {
  item.fullCredit = "Plans review of vaccination completion at next follow-up visit";
});
updateItem('Week3_Patient_C_Wednesday', '3G.12', item => {
  item.fullCredit = "Enumerates two actionable immunization gaps: RSV and Tdap booster";
});
updateItem('Week3_Patient_C_Wednesday', '4A.1', item => {
  item.fullCredit = "States continuation of Trelegy Ellipta (fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg 1 inhalation daily)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies mepolizumab (Nucala) 100 mg subcutaneous injection every 4 weeks";
});
updateItem('Week3_Patient_C_Wednesday', '4A.4', item => {
  item.fullCredit = "Explicitly states continuation of baseline Trelegy Ellipta maintenance therapy";
});
updateItem('Week3_Patient_C_Wednesday', '4A.5', item => {
  item.fullCredit = "Documents Trelegy sig: 1 inhalation once daily in the morning";
});
updateItem('Week3_Patient_C_Wednesday', '4A.6', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA PRN for acute rescue";
});
updateItem('Week3_Patient_C_Wednesday', '4A.7', item => {
  item.fullCredit = "Documents albuterol sig: 2 puffs q4-6h PRN shortness of breath";
});
updateItem('Week3_Patient_C_Wednesday', '4A.8', item => {
  item.fullCredit = "Names mepolizumab (Nucala) with dose (100 mg), route (subcutaneous), and frequency (every 4 weeks)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.9', item => {
  item.fullCredit = "Names generic mepolizumab and brand Nucala";
});
updateItem('Week3_Patient_C_Wednesday', '4A.10', item => {
  item.fullCredit = "Documents mepolizumab dose: 100 mg";
});
updateItem('Week3_Patient_C_Wednesday', '4A.11', item => {
  item.fullCredit = "Documents route: subcutaneous (SC / SQ)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.12', item => {
  item.fullCredit = "Documents frequency: once every 4 weeks (monthly)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.13', item => {
  item.fullCredit = "Educates on mechanism of action: monoclonal antibody targeting IL-5 to inhibit eosinophil survival";
});
updateItem('Week3_Patient_C_Wednesday', '4A.14', item => {
  item.fullCredit = "Educates on expected benefits: reduced exacerbation frequency and sparing of oral corticosteroids";
});
updateItem('Week3_Patient_C_Wednesday', '4A.15', item => {
  item.fullCredit = "Educates on administration: in-clinic subcutaneous injection (or autoinjector after training)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.16', item => {
  item.fullCredit = "Educates on monitoring requirements: injection site reactions, anaphylaxis signs, eosinophil response";
});
updateItem('Week3_Patient_C_Wednesday', '4A.17', item => {
  item.fullCredit = "Sets realistic expectations: gradual onset of clinical benefit over weeks to months";
});
updateItem('Week3_Patient_C_Wednesday', '4A.19', item => {
  item.fullCredit = "Lists omalizumab as biologic alternative (anti-IgE for allergic asthma)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.20', item => {
  item.fullCredit = "Lists benralizumab as biologic alternative (anti-IL-5 receptor alpha)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.21', item => {
  item.fullCredit = "Lists dupilumab as biologic alternative (anti-IL-4R alpha for Type 2 disease)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.22', item => {
  item.fullCredit = "Lists tezepelumab as biologic alternative (anti-TSLP for severe asthma)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.24', item => {
  item.fullCredit = "Educates on gradual onset of biologic benefit (requires 3-6 months to assess full efficacy)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.25', item => {
  item.fullCredit = "Verifies mepolizumab 100 mg SQ q4w against GINA 2025 standard dosing guidelines";
});
updateItem('Week3_Patient_C_Wednesday', '4A.26', item => {
  item.fullCredit = "Classifies mepolizumab as GINA Step 5 add-on biologic for severe eosinophilic asthma/overlap";
});
updateItem('Week3_Patient_C_Wednesday', '4A.28', item => {
  item.fullCredit = "Documents no changes to baseline Trelegy Ellipta (continue daily triple therapy)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.29', item => {
  item.fullCredit = "Documents no changes to rescue inhaler (continue albuterol HFA PRN)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.30', item => {
  item.fullCredit = "Reinforces daily inhaled adherence and correct Ellipta technique in Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4A.31', item => {
  item.fullCredit = "Initiates prior authorization and insurance verification for mepolizumab (Nucala)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.32', item => {
  item.fullCredit = "Explains rationale for continuing baseline triple therapy alongside biologic (maintains bronchodilation)";
});
updateItem('Week3_Patient_C_Wednesday', '4B.1', item => {
  item.fullCredit = "States explicit clinical goal to reduce or eliminate future oral corticosteroid exposure";
});
updateItem('Week3_Patient_C_Wednesday', '4B.2', item => {
  item.fullCredit = "Communicates OCS-sparing goal directly to patient in Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4B.3', item => {
  item.fullCredit = "Includes written exacerbation action plan review and update in Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4B.4', item => {
  item.fullCredit = "Recommends prompt clinical evaluation if respiratory symptoms worsen";
});
updateItem('Week3_Patient_C_Wednesday', '4B.5', item => {
  item.fullCredit = "References written Asthma/COPD Action Plan with color zones";
});
updateItem('Week3_Patient_C_Wednesday', '4B.6', item => {
  item.fullCredit = "Frames OCS-sparing as a patient-valued goal aligned with avoiding prednisone toxicity";
});
updateItem('Week3_Patient_C_Wednesday', '4B.7', item => {
  item.fullCredit = "Explicitly frames mepolizumab as an OCS-reduction / flare-prevention mechanism";
});
updateItem('Week3_Patient_C_Wednesday', '4B.8', item => {
  item.fullCredit = "Defines clear clinical criteria for when acute OCS burst is indicated during severe flares";
});
updateItem('Week3_Patient_C_Wednesday', '4B.9', item => {
  item.fullCredit = "Cites GINA 2025 guidance on corticosteroid stewardship and OCS minimization";
});
updateItem('Week3_Patient_C_Wednesday', '4B.10', item => {
  item.fullCredit = "Discusses short- and long-term OCS side effects with patient";
});
updateItem('Week3_Patient_C_Wednesday', '4B.11', item => {
  item.fullCredit = "Acknowledges and validates patient's concerns regarding prednisone side effects";
});
updateItem('Week3_Patient_C_Wednesday', '4B.12', item => {
  item.fullCredit = "Integrates corticosteroid stewardship into comprehensive care strategy";
});
updateItem('Week3_Patient_C_Wednesday', '4C.3', item => {
  item.fullCredit = "Reinforces continued allergen avoidance strategies in Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4C.4', item => {
  item.fullCredit = "Provides allergic rhinitis management plan: restart fluticasone propionate nasal spray 50 mcg daily + cetirizine";
});
updateItem('Week3_Patient_C_Wednesday', '4C.5', item => {
  item.fullCredit = "Cites GINA 2025 guideline support for daily intranasal corticosteroids";
});
updateItem('Week3_Patient_C_Wednesday', '4C.7', item => {
  item.fullCredit = "Documents treatment goal of achieving complete allergic rhinitis symptom control";
});
updateItem('Week3_Patient_C_Wednesday', '4C.8', item => {
  item.fullCredit = "Frames allergen avoidance as non-pharmacologic adjunct to nasal steroids";
});
updateItem('Week3_Patient_C_Wednesday', '4D.2', item => {
  item.fullCredit = "States goal to continue minimizing systemic corticosteroid exposure to protect bone density";
});
updateItem('Week3_Patient_C_Wednesday', '4D.4', item => {
  item.fullCredit = "Links mepolizumab's OCS-sparing effect directly to skeletal protection and fracture prevention";
});
updateItem('Week3_Patient_C_Wednesday', '4D.6', item => {
  item.fullCredit = "Addresses bone health: continue calcium 600 mg + vitamin D 400 IU BID and consider baseline DEXA scan";
});
updateItem('Week3_Patient_C_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo) for age 65 with chronic lung disease";
});
updateItem('Week3_Patient_C_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
});
updateItem('Week3_Patient_C_Wednesday', '4E.3', item => {
  item.fullCredit = "Plans review of vaccination status and administration at next visit";
});
updateItem('Week3_Patient_C_Wednesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza vaccination status is up to date in Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4E.5', item => {
  item.fullCredit = "Confirms COVID-19 vaccination status is up to date in Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4E.6', item => {
  item.fullCredit = "Confirms PCV20 pneumococcal vaccine received / up to date in Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4E.7', item => {
  item.fullCredit = "Cites GINA 2025 / CDC recommendations for respiratory immunization in chronic airway disease";
});
updateItem('Week3_Patient_C_Wednesday', '4E.8', item => {
  item.fullCredit = "Frames vaccination directly as part of exacerbation prevention strategy";
});
updateItem('Week3_Patient_C_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans monitoring of ACT score at follow-up (target >= 20)";
});
updateItem('Week3_Patient_C_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans monitoring of CAT score at follow-up (target < 10 or reduction)";
});
updateItem('Week3_Patient_C_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans monitoring of exacerbation frequency (tracking flares since biologic initiation)";
});
updateItem('Week3_Patient_C_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans monitoring of oral corticosteroid bursts and cumulative exposure";
});
updateItem('Week3_Patient_C_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans monitoring of albuterol rescue inhaler use frequency";
});
updateItem('Week3_Patient_C_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans monitoring of repeat blood eosinophil count to verify suppression";
});
updateItem('Week3_Patient_C_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans monitoring of medication adherence (Trelegy daily and mepolizumab monthly)";
});
updateItem('Week3_Patient_C_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans monitoring for injection-related adverse effects (site reactions, headache, fatigue)";
});
updateItem('Week3_Patient_C_Wednesday', '4F.9', item => {
  item.fullCredit = "Plans comprehensive assessment of overall clinical response to mepolizumab";
});
updateItem('Week3_Patient_C_Wednesday', '4F.10', item => {
  item.fullCredit = "Comprehensive monitoring plan covers >= 7 discrete monitoring parameters";
});
updateItem('Week3_Patient_C_Wednesday', '4F.11', item => {
  item.fullCredit = "Plans longitudinal eosinophil trending at 3-6 month intervals";
});
updateItem('Week3_Patient_C_Wednesday', '4F.12', item => {
  item.fullCredit = "Specifies timeframe for ACT/CAT reassessment (at 4-8 week follow-up)";
});
updateItem('Week3_Patient_C_Wednesday', '4F.13', item => {
  item.fullCredit = "Frames OCS tracking as a corticosteroid stewardship outcome";
});
updateItem('Week3_Patient_C_Wednesday', '4F.14', item => {
  item.fullCredit = "Frames reduction in rescue inhaler use as expected clinical outcome";
});
updateItem('Week3_Patient_C_Wednesday', '4F.15', item => {
  item.fullCredit = "Notes monitoring for local injection site reactions per GINA 2025 guidance";
});
updateItem('Week3_Patient_C_Wednesday', '4F.16', item => {
  item.fullCredit = "Educates on signs of severe hypersensitivity / anaphylaxis monitoring";
});
updateItem('Week3_Patient_C_Wednesday', '4F.17', item => {
  item.fullCredit = "Presents a dedicated Monitoring subsection within the Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4F.18', item => {
  item.fullCredit = "Plans ongoing adherence monitoring for both inhaled triple therapy and monthly biologic";
});
updateItem('Week3_Patient_C_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up interval in 4-8 weeks (or 4-12 weeks)";
});
updateItem('Week3_Patient_C_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans to assess initial clinical response to mepolizumab at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans to reassess exacerbation frequency at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans to reassess ACT score at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.5', item => {
  item.fullCredit = "Plans to reassess CAT score at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.6', item => {
  item.fullCredit = "Plans to reassess oral corticosteroid exposure and bursts at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.7', item => {
  item.fullCredit = "Plans to reassess overall respiratory symptom burden and dyspnea at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.8', item => {
  item.fullCredit = "Plans to reassess treatment tolerability and injection adverse effects at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.9', item => {
  item.fullCredit = "States commitment to continued longitudinal management of Asthma-COPD Overlap";
});
updateItem('Week3_Patient_C_Wednesday', '4G.10', item => {
  item.fullCredit = "Frames follow-up visit explicitly around biologic response and tolerability assessment";
});
updateItem('Week3_Patient_C_Wednesday', '4G.11', item => {
  item.fullCredit = "References GINA 2025 follow-up framework for Step 5 biologic therapy";
});
updateItem('Week3_Patient_C_Wednesday', '4G.12', item => {
  item.fullCredit = "Confirms 4-8 week interval is clinically appropriate for initial biologic monitoring";
});
updateItem('Week3_Patient_C_Wednesday', '4G.13', item => {
  item.fullCredit = "Plans to reassess vaccination completion (RSV, Tdap) at next visit";
});
updateItem('Week3_Patient_C_Wednesday', '4G.14', item => {
  item.fullCredit = "Follow-up plan encompasses all major active problems (ACO, biologic, rhinitis, vaccines)";
});
updateItem('Week3_Patient_C_Wednesday', '5A.2', item => {
  item.fullCredit = "Assessment structures prioritized clinical problems across ACO, exacerbations, eosinophilia, OCS burden, rhinitis, and vaccines (or focused biologic candidacy)";
});
updateItem('Week3_Patient_C_Wednesday', '5A.3', item => {
  item.fullCredit = "Plan headings and items mirror problems identified in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '5A.4', item => {
  item.fullCredit = "Structures Plan with clear sections including dedicated Monitoring and Follow-Up";
});
updateItem('Week3_Patient_C_Wednesday', '5B.2', item => {
  item.fullCredit = "Documents lab values with units and clinical interpretation (eosinophils 520 cells/µL elevated, ACT 17, CAT 15)";
});
updateItem('Week3_Patient_C_Wednesday', '5C.3', item => {
  item.fullCredit = "Cites GINA 2025, GOLD 2026, and/or MATINEE trial evidence supporting biologic initiation in eosinophilic ACO";
});

// ==================== MARIA THURSDAY ====================
updateItem('Week3_Patient_C_Thursday', '1A.5', item => {
  item.fullCredit = "States visit reason as Asthma-COPD Overlap (ACO) follow-up, evaluation, or respiratory management";
});
updateItem('Week3_Patient_C_Thursday', '1B.2', item => {
  item.fullCredit = "Documents wheezing status (denies active wheezing, or notes intermittent chest tightness/wheezing)";
});
updateItem('Week3_Patient_C_Thursday', '1B.3', item => {
  item.fullCredit = "Documents nighttime symptom status (waking 1x weekly or denial of frequent awakenings)";
});
updateItem('Week3_Patient_C_Thursday', '1B.4', item => {
  item.fullCredit = "Documents exercise tolerance status (walking 1-2 blocks, exertional dyspnea)";
});
updateItem('Week3_Patient_C_Thursday', '1B.5', item => {
  item.fullCredit = "Documents albuterol rescue use frequency (1-2 puffs daily PRN or several times weekly)";
});
updateItem('Week3_Patient_C_Thursday', '1B.11', item => {
  item.fullCredit = "Documents inhaler technique was demonstrated, verified, or described as correct";
});
updateItem('Week3_Patient_C_Thursday', '1C.1', item => {
  item.fullCredit = "Lists asthma in PMH or problem list";
});
updateItem('Week3_Patient_C_Thursday', '1C.2', item => {
  item.fullCredit = "Lists COPD in PMH or problem list with duration (~8 years or chronic)";
});
updateItem('Week3_Patient_C_Thursday', '1C.12', item => {
  item.fullCredit = "Documents childhood onset of asthma (age 8-10 or lifelong)";
});
updateItem('Week3_Patient_C_Thursday', '1D.8', item => {
  item.fullCredit = "Documents denial of recreational / illicit drug use";
});
updateItem('Week3_Patient_C_Thursday', '1D.9', item => {
  item.fullCredit = "Documents physical activity status (walking frequency, 1-2 blocks daily / sedentary)";
});
updateItem('Week3_Patient_C_Thursday', '1E.4b', item => {
  item.fullCredit = "Specifies biologic therapy: mepolizumab (Nucala) 100 mg subcutaneous every 4 weeks (or anti-IL-5 mepolizumab)";
});
updateItem('Week3_Patient_C_Thursday', '1F.2', item => {
  item.fullCredit = "Documents allergy worsening and concurrent chest tightness / breathing symptoms (linking upper and lower airway)";
});
updateItem('Week3_Patient_C_Thursday', '1G.1', item => {
  item.fullCredit = "Documents patient motivation and goals to improve respiratory control and avoid exacerbations";
});
updateItem('Week3_Patient_C_Thursday', '1G.4', item => {
  item.fullCredit = "Documents patient awareness of connection between allergic rhinitis control and breathing";
});
updateItem('Week3_Patient_C_Thursday', '2B.4', item => {
  item.fullCredit = "Documents exacerbation history and albuterol rescue use frequency in objective evaluation";
});
updateItem('Week3_Patient_C_Thursday', '2B.7', item => {
  item.fullCredit = "Documents albuterol rescue use frequency alongside biologic therapy evaluation";
});
updateItem('Week3_Patient_C_Thursday', '2C.2', item => {
  item.fullCredit = "Interprets FEV1/FVC ratio (0.55-0.56) against <0.70 threshold confirming persistent obstruction";
});
updateItem('Week3_Patient_C_Thursday', '2C.3', item => {
  item.fullCredit = "Classifies FEV1 % predicted (60-61%) as GOLD Grade 2 moderate airflow limitation";
});
updateItem('Week3_Patient_C_Thursday', '2C.4', item => {
  item.fullCredit = "Interprets elevated eosinophils (420-520 cells/µL, >=300 threshold) in Type 2 inflammation context";
});
updateItem('Week3_Patient_C_Thursday', '2C.5', item => {
  item.fullCredit = "Interprets SpO2 96% on room air as normal / adequate in chronic respiratory disease";
});
updateItem('Week3_Patient_C_Thursday', '2C.6', item => {
  item.fullCredit = "Interprets ACT (14) and CAT (18) scores compared to prior visit trends";
});
updateItem('Week3_Patient_C_Thursday', '3A.1', item => {
  item.fullCredit = "Names Asthma-COPD Overlap (ACO), asthma, or COPD phenotype explicitly in Assessment";
});
updateItem('Week3_Patient_C_Thursday', '3A.3', item => {
  item.fullCredit = "Interprets ACT score 14 as poorly controlled asthma in Assessment (<20 threshold)";
});
updateItem('Week3_Patient_C_Thursday', '3A.4', item => {
  item.fullCredit = "Documents and discusses rescue inhaler use frequency in Assessment";
});
updateItem('Week3_Patient_C_Thursday', '3A.6', item => {
  item.fullCredit = "Discusses ongoing rescue inhaler reliance and need for therapy optimization";
});
updateItem('Week3_Patient_C_Thursday', '3A.7', item => {
  item.fullCredit = "Addresses exercise tolerance and exertional limitation in Assessment";
});
updateItem('Week3_Patient_C_Thursday', '3B.4', item => {
  item.fullCredit = "Documents allergic rhinitis symptoms (rhinorrhea, nasal congestion, or uncontrolled rhinitis)";
});
updateItem('Week3_Patient_C_Thursday', '3B.6', item => {
  item.fullCredit = "Documents sneezing, nasal congestion, or itching as active rhinitis symptoms";
});
updateItem('Week3_Patient_C_Thursday', '3B.9', item => {
  item.fullCredit = "Differentiates whether respiratory complaints stem from uncontrolled upper airway disease vs ACO progression";
});
updateItem('Week3_Patient_C_Thursday', '3B.10', item => {
  item.fullCredit = "Restarts fluticasone nasal spray and links allergic rhinitis optimization to avoiding inappropriate pulmonary escalation";
});
updateItem('Week3_Patient_C_Thursday', '3B.11', item => {
  item.fullCredit = "Explicitly states correlation between allergy worsening and chest tightness / breathing symptoms";
});
updateItem('Week3_Patient_C_Thursday', '3C.2', item => {
  item.fullCredit = "References eosinophilia (persistently elevated eosinophils 420-520 cells/µL, >=300 threshold)";
});
updateItem('Week3_Patient_C_Thursday', '3C.4', item => {
  item.fullCredit = "Explains mechanism of persistent Type 2 inflammation driving airway reactivity and flares";
});
updateItem('Week3_Patient_C_Thursday', '3C.6', item => {
  item.fullCredit = "Cites GINA 2025 treatable trait framework for eosinophilic airway disease";
});
updateItem('Week3_Patient_C_Thursday', '3C.8', item => {
  item.fullCredit = "Provides clinical basis for biologic escalation: eosinophils >=300 cells/µL and recurrent flares on triple therapy";
});
updateItem('Week3_Patient_C_Thursday', '3D.9', item => {
  item.fullCredit = "Provides rationale for continued close longitudinal monitoring of exacerbations and OCS bursts";
});
updateItem('Week3_Patient_C_Thursday', '3E.2', item => {
  item.fullCredit = "Links cumulative oral corticosteroid exposure to skeletal / osteopenia risk";
});
updateItem('Week3_Patient_C_Thursday', '3E.4', item => {
  item.fullCredit = "Addresses continuation of calcium / vitamin D supplementation in Assessment";
});
updateItem('Week3_Patient_C_Thursday', '3E.5', item => {
  item.fullCredit = "Explicitly states continuation of calcium / vitamin D in Plan";
});
updateItem('Week3_Patient_C_Thursday', '3E.6', item => {
  item.fullCredit = "Addresses bone mineral density (DEXA scan) monitoring appropriateness";
});
updateItem('Week3_Patient_C_Thursday', '3F.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a distinct problem in Assessment (or addresses vaccines in plan)";
});
updateItem('Week3_Patient_C_Thursday', '3F.2', item => {
  item.fullCredit = "Discusses RSV vaccination gap in Assessment / Plan";
});
updateItem('Week3_Patient_C_Thursday', '3F.3', item => {
  item.fullCredit = "Discusses Tdap booster overdue status in Assessment / Plan";
});
updateItem('Week3_Patient_C_Thursday', '3F.4', item => {
  item.fullCredit = "Discusses importance of respiratory vaccinations in preventing exacerbations";
});
updateItem('Week3_Patient_C_Thursday', '3F.6', item => {
  item.fullCredit = "Recommends preventive care optimization and immunization record review";
});
updateItem('Week3_Patient_C_Thursday', '4A.4', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA 2 puffs q4-6h PRN rescue regimen";
});
updateItem('Week3_Patient_C_Thursday', '4A.5', item => {
  item.fullCredit = "Explicitly states continuation of baseline Trelegy Ellipta maintenance therapy alongside biologic";
});
updateItem('Week3_Patient_C_Thursday', '4A.6', item => {
  item.fullCredit = "Includes medication adherence reinforcement in Plan";
});
updateItem('Week3_Patient_C_Thursday', '4A.7', item => {
  item.fullCredit = "Includes inhaler technique reinforcement in Plan";
});
updateItem('Week3_Patient_C_Thursday', '4A.8', item => {
  item.fullCredit = "Specifies biologic therapy: mepolizumab (Nucala) 100 mg subcutaneous every 4 weeks";
});
updateItem('Week3_Patient_C_Thursday', '4B.4', item => {
  item.fullCredit = "Counsels patient on consistent daily fluticasone nasal spray use despite symptom improvement";
});
updateItem('Week3_Patient_C_Thursday', '4B.5', item => {
  item.fullCredit = "Reviews allergen avoidance strategies in Plan";
});
updateItem('Week3_Patient_C_Thursday', '4B.6', item => {
  item.fullCredit = "Restarts fluticasone propionate nasal spray with specific dosing (50 mcg 1-2 sprays each nostril daily)";
});
updateItem('Week3_Patient_C_Thursday', '4C.1', item => {
  item.fullCredit = "Plans monitoring of ACT score at follow-up";
});
updateItem('Week3_Patient_C_Thursday', '4C.2', item => {
  item.fullCredit = "Plans monitoring of CAT score at follow-up";
});
updateItem('Week3_Patient_C_Thursday', '4C.3', item => {
  item.fullCredit = "Plans monitoring of albuterol rescue use frequency";
});
updateItem('Week3_Patient_C_Thursday', '4C.4', item => {
  item.fullCredit = "Plans monitoring of nighttime symptoms and awakenings";
});
updateItem('Week3_Patient_C_Thursday', '4C.7', item => {
  item.fullCredit = "Plans monitoring of medication adherence (Trelegy and fluticasone)";
});
updateItem('Week3_Patient_C_Thursday', '4C.8', item => {
  item.fullCredit = "Plans monitoring of inhaler technique at follow-up";
});
updateItem('Week3_Patient_C_Thursday', '4C.9', item => {
  item.fullCredit = "Includes a dedicated Monitoring subsection within the Plan";
});
updateItem('Week3_Patient_C_Thursday', '4C.10', item => {
  item.fullCredit = "Comprehensive monitoring plan addresses respiratory control, allergic rhinitis symptoms, and adherence";
});
updateItem('Week3_Patient_C_Thursday', '4D.1', item => {
  item.fullCredit = "Specifies albuterol HFA rescue regimen: 2 puffs q4-6h PRN shortness of breath";
});
updateItem('Week3_Patient_C_Thursday', '4E.1', item => {
  item.fullCredit = "Recommends RSV vaccination in Plan";
});
updateItem('Week3_Patient_C_Thursday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster in Plan (overdue >10 years)";
});
updateItem('Week3_Patient_C_Thursday', '4E.3', item => {
  item.fullCredit = "Plans review of vaccination status and records at next visit";
});
updateItem('Week3_Patient_C_Thursday', '4E.4', item => {
  item.fullCredit = "Includes a dedicated preventive care subsection in Plan";
});
updateItem('Week3_Patient_C_Thursday', '4F.1', item => {
  item.fullCredit = "Specifies follow-up interval in 4-8 weeks (or 1-3 months)";
});
updateItem('Week3_Patient_C_Thursday', '4F.2', item => {
  item.fullCredit = "Plans to reassess asthma and COPD symptom control at follow-up";
});
updateItem('Week3_Patient_C_Thursday', '4F.5', item => {
  item.fullCredit = "States commitment to continued longitudinal management of Asthma-COPD Overlap";
});
updateItem('Week3_Patient_C_Thursday', '4F.6', item => {
  item.fullCredit = "Includes a labeled follow-up subsection in Plan";
});
updateItem('Week3_Patient_C_Thursday', '5A.3', item => {
  item.fullCredit = "Structures Assessment across prioritized clinical problems (ACO, Allergic Rhinitis, Bone Health, Vaccines)";
});
updateItem('Week3_Patient_C_Thursday', '5A.4', item => {
  item.fullCredit = "Plan items map directly to problems identified in Assessment";
});
updateItem('Week3_Patient_C_Thursday', '5B.3', item => {
  item.fullCredit = "Interprets ACT (14) and CAT (18) scores alongside reported numerical values";
});
updateItem('Week3_Patient_C_Thursday', '5B.4', item => {
  item.fullCredit = "Provides concrete plan details with specific medication names, doses, routes, and monitoring";
});
updateItem('Week3_Patient_C_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 and/or GOLD 2026 guideline rationale for clinical recommendations";
});
updateItem('Week3_Patient_C_Thursday', '5C.3', item => {
  item.fullCredit = "Explicitly states continuation of existing triple inhaled therapy (Trelegy Ellipta) alongside biologic evaluation";
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
console.log('Successfully updated Maria Thompson complete rubrics and normalized points!');
