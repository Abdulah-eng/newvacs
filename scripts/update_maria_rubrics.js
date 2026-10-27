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
  item.fullCredit = "States referred by PCP / primary care provider (or outpatient clinical pharmacy consult)";
});
updateItem('Week3_Patient_C_Tuesday', '1A.5', item => {
  item.fullCredit = "States worsening dyspnea or frequent exacerbations as reason for referral/evaluation";
});
updateItem('Week3_Patient_C_Tuesday', '1A.7', item => {
  item.fullCredit = "States persistent respiratory symptoms despite current tiotropium maintenance therapy";
});
updateItem('Week3_Patient_C_Tuesday', '1A.8', item => {
  item.fullCredit = "States collaborative practice management, clinical pharmacy consult, or chronic airway disease management";
});
updateItem('Week3_Patient_C_Tuesday', '1B.1', item => {
  item.fullCredit = "States progressive worsening of shortness of breath over several years (or chronic progressive dyspnea)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.2', item => {
  item.fullCredit = "States daily shortness of breath / dyspnea with exertion";
});
updateItem('Week3_Patient_C_Tuesday', '1B.3', item => {
  item.fullCredit = "States intermittent wheezing (or chest tightness/wheezing)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.4', item => {
  item.fullCredit = "States chronic cough (or intermittent cough with sputum/clearing)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.5', item => {
  item.fullCredit = "States frequent albuterol rescue inhaler use (several times daily / 3-4x daily PRN)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.6', item => {
  item.fullCredit = "States respiratory symptoms occur most days of the week";
});
updateItem('Week3_Patient_C_Tuesday', '1B.7', item => {
  item.fullCredit = "States nocturnal awakenings 2-3 nights/week (or 1-3 nights/week due to cough/wheezing)";
});
updateItem('Week3_Patient_C_Tuesday', '1B.8', item => {
  item.fullCredit = "States difficulty climbing stairs or exertional breathlessness";
});
updateItem('Week3_Patient_C_Tuesday', '1B.9', item => {
  item.fullCredit = "States difficulty walking uphill or incline limitation";
});
updateItem('Week3_Patient_C_Tuesday', '1B.10', item => {
  item.fullCredit = "States difficulty with prolonged physical activity or endurance limitation";
});
updateItem('Week3_Patient_C_Tuesday', '1B.16', item => {
  item.fullCredit = "States allergic rhinitis symptoms (congestion, sneezing, postnasal drip) or seasonal allergies";
});
updateItem('Week3_Patient_C_Tuesday', '1B.17', item => {
  item.fullCredit = "States seasonal worsening of rhinitis / allergies in spring/fall";
});
updateItem('Week3_Patient_C_Tuesday', '1B.18', item => {
  item.fullCredit = "States prior ICS use or cannot recall prior daily inhaled corticosteroid controller";
});
updateItem('Week3_Patient_C_Tuesday', '1B.19', item => {
  item.fullCredit = "Documents regular use of Spiriva and albuterol, alongside missed/stopped fluticasone nasal spray";
});
updateItem('Week3_Patient_C_Tuesday', '1B.22', item => {
  item.fullCredit = "States denies hospitalizations and ED visits (or denies recent emergency care)";
});
updateItem('Week3_Patient_C_Tuesday', '1D.9', item => {
  item.fullCredit = "Documents activity limitation linked to respiratory symptoms / breathlessness";
});
updateItem('Week3_Patient_C_Tuesday', '1D.10', item => {
  item.fullCredit = "Documents lack of regular exercise routine or sedentary lifestyle secondary to dyspnea";
});
updateItem('Week3_Patient_C_Tuesday', '1F.2', item => {
  item.fullCredit = "Confirms denial of recent ED visits (or denies emergency department visits)";
});
updateItem('Week3_Patient_C_Tuesday', '1F.3', item => {
  item.fullCredit = "Documents active allergic rhinitis symptoms (congestion, sneezing, or rhinorrhea)";
});
updateItem('Week3_Patient_C_Tuesday', '1F.4', item => {
  item.fullCredit = "Notes seasonal worsening pattern for rhinitis / allergies";
});
updateItem('Week3_Patient_C_Tuesday', '1F.5', item => {
  item.fullCredit = "Documents activity limitation is symptom-driven / limited by dyspnea";
});
updateItem('Week3_Patient_C_Tuesday', '1G.2', item => {
  item.fullCredit = "States patient goal to avoid future exacerbations, hospitalizations, or lung decline";
});
updateItem('Week3_Patient_C_Tuesday', '1G.4', item => {
  item.fullCredit = "Documents patient awareness of current treatment limitations and desire for optimized inhaler therapy";
});
updateItem('Week3_Patient_C_Tuesday', '2B.10', item => {
  item.fullCredit = "Interprets CAT score 16 as significant / high COPD symptom burden";
});
updateItem('Week3_Patient_C_Tuesday', '2C.1', item => {
  item.fullCredit = "States post-BD FEV1/FVC 0.55 (<0.70 threshold) confirms fixed/persistent airflow obstruction per GOLD";
});
updateItem('Week3_Patient_C_Tuesday', '2C.3', item => {
  item.fullCredit = "Links elevated blood eosinophils 420 cells/µL to Type 2 airway inflammation per GINA 2025";
});
updateItem('Week3_Patient_C_Tuesday', '2C.4', item => {
  item.fullCredit = "Interprets ACT score 15 as poorly controlled asthma (<20 threshold per GINA)";
});
updateItem('Week3_Patient_C_Tuesday', '2C.5', item => {
  item.fullCredit = "Interprets CAT score 16 (>=10 threshold) as high symptom burden per GOLD 2026";
});
updateItem('Week3_Patient_C_Tuesday', '2C.6', item => {
  item.fullCredit = "Notes FeNO or serum IgE as unmeasured/expected Type 2 biomarkers";
});
updateItem('Week3_Patient_C_Tuesday', '3A.1', item => {
  item.fullCredit = "Identifies Asthma-COPD Overlap (ACO) and explains that asthma component and eosinophilia mandate ICS therapy";
});
updateItem('Week3_Patient_C_Tuesday', '3A.3', item => {
  item.fullCredit = "Cites wheezing, cough, or nocturnal awakenings as asthma features in assessment";
});
updateItem('Week3_Patient_C_Tuesday', '3A.4', item => {
  item.fullCredit = "Links allergic rhinitis to atopic phenotype and asthma overlap";
});
updateItem('Week3_Patient_C_Tuesday', '3A.5', item => {
  item.fullCredit = "Cites bronchodilator reversibility (+13% / +220 mL) as supporting the asthma component";
});
updateItem('Week3_Patient_C_Tuesday', '3A.6', item => {
  item.fullCredit = "Cites elevated blood eosinophils (420 cells/µL) as evidence of Type 2 airway inflammation";
});
updateItem('Week3_Patient_C_Tuesday', '3A.7', item => {
  item.fullCredit = "Cites 30 pack-year smoking history as supporting the COPD component";
});
updateItem('Week3_Patient_C_Tuesday', '3A.8', item => {
  item.fullCredit = "Cites persistent post-BD obstruction (FEV1/FVC 0.55) as supporting the COPD component";
});
updateItem('Week3_Patient_C_Tuesday', '3A.9', item => {
  item.fullCredit = "Cites chronic exertional dyspnea and prior COPD diagnosis (8 years ago) as COPD features";
});
updateItem('Week3_Patient_C_Tuesday', '3A.10', item => {
  item.fullCredit = "Cites GINA 2025 guideline stating ICS therapy is mandatory in patients with asthma or ACO";
});
updateItem('Week3_Patient_C_Tuesday', '3A.11', item => {
  item.fullCredit = "Identifies that current tiotropium monotherapy lacks an ICS component, representing undertreatment";
});
updateItem('Week3_Patient_C_Tuesday', '3A.12', item => {
  item.fullCredit = "Jointly links recurrent exacerbations and eosinophilic inflammation (420 cells/µL) to urgent ICS need";
});
updateItem('Week3_Patient_C_Tuesday', '3A.15', item => {
  item.fullCredit = "Cites GINA 2025 guideline recommendations for Asthma-COPD Overlap";
});
updateItem('Week3_Patient_C_Tuesday', '3B.1', item => {
  item.fullCredit = "Identifies uncontrolled asthma component (ACT 15, daily symptoms) as a distinct problem in assessment";
});
updateItem('Week3_Patient_C_Tuesday', '3B.3', item => {
  item.fullCredit = "Cites daily daytime symptoms as evidence of poorly controlled asthma";
});
updateItem('Week3_Patient_C_Tuesday', '3B.4', item => {
  item.fullCredit = "Cites frequent albuterol rescue use as evidence of poor control";
});
updateItem('Week3_Patient_C_Tuesday', '3B.5', item => {
  item.fullCredit = "Cites nocturnal awakenings 2-3 nights/week as evidence of poor control";
});
updateItem('Week3_Patient_C_Tuesday', '3B.6', item => {
  item.fullCredit = "Frames recent exacerbations treated with prednisone as evidence of uncontrolled disease";
});
updateItem('Week3_Patient_C_Tuesday', '3B.7', item => {
  item.fullCredit = "Cites GINA 2025 recommendation for universal ICS-containing therapy in adults with asthma features";
});
updateItem('Week3_Patient_C_Tuesday', '3B.8', item => {
  item.fullCredit = "Ties current regimen's lack of ICS controller to multiple asthma control failures";
});
updateItem('Week3_Patient_C_Tuesday', '3B.9', item => {
  item.fullCredit = "Links excessive SABA reliance to urgent need for anti-inflammatory controller escalation";
});
updateItem('Week3_Patient_C_Tuesday', '3B.10', item => {
  item.fullCredit = "Grounds escalation to ICS-containing regimen in GINA guideline recommendations";
});
updateItem('Week3_Patient_C_Tuesday', '3C.1', item => {
  item.fullCredit = "Identifies COPD with persistent airflow obstruction as a distinct problem in assessment";
});
updateItem('Week3_Patient_C_Tuesday', '3C.2', item => {
  item.fullCredit = "Cites post-BD FEV1/FVC 0.55 as confirming persistent airflow obstruction";
});
updateItem('Week3_Patient_C_Tuesday', '3C.3', item => {
  item.fullCredit = "Cites post-BD FEV1 1.55 L (58% predicted) representing GOLD Grade 2 moderate obstruction";
});
updateItem('Week3_Patient_C_Tuesday', '3C.4', item => {
  item.fullCredit = "Cites CAT score 16 indicating substantial symptom burden";
});
updateItem('Week3_Patient_C_Tuesday', '3C.5', item => {
  item.fullCredit = "Documents daily dyspnea, exercise intolerance, and functional activity limitation";
});
updateItem('Week3_Patient_C_Tuesday', '3C.6', item => {
  item.fullCredit = "Cites GOLD 2026 multi-domain assessment (symptoms, exacerbations, spirometry)";
});
updateItem('Week3_Patient_C_Tuesday', '3C.7', item => {
  item.fullCredit = "Specifies integrated management implications of Asthma-COPD Overlap";
});
updateItem('Week3_Patient_C_Tuesday', '3C.8', item => {
  item.fullCredit = "States triple therapy (ICS/LABA/LAMA) addresses both asthma and COPD disease processes";
});
updateItem('Week3_Patient_C_Tuesday', '3C.9', item => {
  item.fullCredit = "Cites GOLD 2026 report as guideline authority for COPD component";
});
updateItem('Week3_Patient_C_Tuesday', '3D.1', item => {
  item.fullCredit = "Identifies recurrent respiratory exacerbations as a distinct clinical problem";
});
updateItem('Week3_Patient_C_Tuesday', '3D.3', item => {
  item.fullCredit = "Frames prior exacerbation history as the single strongest predictor of future exacerbation risk";
});
updateItem('Week3_Patient_C_Tuesday', '3D.4', item => {
  item.fullCredit = "Links recurrent exacerbations to accelerated lung decline, reduced QoL, and hospitalization risk";
});
updateItem('Week3_Patient_C_Tuesday', '3D.5', item => {
  item.fullCredit = "Cites GINA 2025 and GOLD 2026 exacerbation-reduction treatment goals";
});
updateItem('Week3_Patient_C_Tuesday', '3D.6', item => {
  item.fullCredit = "Explicitly links absence of ICS therapy to recurrent exacerbation susceptibility";
});
updateItem('Week3_Patient_C_Tuesday', '3D.7', item => {
  item.fullCredit = "Frames ICS initiation as essential anti-inflammatory therapy optimization";
});
updateItem('Week3_Patient_C_Tuesday', '3D.8', item => {
  item.fullCredit = "Cites GINA 2025 and GOLD 2026 guidelines in exacerbation prevention context";
});
updateItem('Week3_Patient_C_Tuesday', '3E.1', item => {
  item.fullCredit = "Identifies eosinophilic airway inflammation (eosinophils 420 cells/µL) as a distinct problem";
});
updateItem('Week3_Patient_C_Tuesday', '3E.3', item => {
  item.fullCredit = "Links eosinophil elevation to Type 2 inflammatory airway disease";
});
updateItem('Week3_Patient_C_Tuesday', '3E.4', item => {
  item.fullCredit = "Cites GINA 2025 link between elevated eosinophils and high ICS responsiveness";
});
updateItem('Week3_Patient_C_Tuesday', '3E.5', item => {
  item.fullCredit = "Recognizes eosinophilia as a treatable trait per GINA 2025";
});
updateItem('Week3_Patient_C_Tuesday', '3E.6', item => {
  item.fullCredit = "Uses eosinophil count >=300 cells/µL to strongly support ICS initiation";
});
updateItem('Week3_Patient_C_Tuesday', '3E.7', item => {
  item.fullCredit = "Notes eosinophil count relevance for future biologic therapy decisions if exacerbations persist";
});
updateItem('Week3_Patient_C_Tuesday', '3E.8', item => {
  item.fullCredit = "Cites GINA 2025 in context of eosinophil-guided clinical decision-making";
});
updateItem('Week3_Patient_C_Tuesday', '3F.2', item => {
  item.fullCredit = "Documents active allergic rhinitis symptoms (congestion, sneezing, postnasal drip)";
});
updateItem('Week3_Patient_C_Tuesday', '3F.3', item => {
  item.fullCredit = "States upper airway disease commonly coexists with and impacts lower airway disease";
});
updateItem('Week3_Patient_C_Tuesday', '3F.4', item => {
  item.fullCredit = "States untreated allergic rhinitis may worsen asthma control and increase symptom burden";
});
updateItem('Week3_Patient_C_Tuesday', '3F.5', item => {
  item.fullCredit = "Cites GINA 2025 regarding allergic rhinitis management as a core component of airway care";
});
updateItem('Week3_Patient_C_Tuesday', '3F.6', item => {
  item.fullCredit = "Recommends continuing/re-educating on nasal steroid therapy and monitoring rhinitis symptoms";
});
updateItem('Week3_Patient_C_Tuesday', '3G.3', item => {
  item.fullCredit = "Links improved disease control and fewer exacerbations to reduced systemic corticosteroid exposure";
});
updateItem('Week3_Patient_C_Tuesday', '3G.4', item => {
  item.fullCredit = "Links exacerbation prevention to reduced OCS-related skeletal / osteopenia progression risk";
});
updateItem('Week3_Patient_C_Tuesday', '3H.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a distinct problem in Assessment";
});
updateItem('Week3_Patient_C_Tuesday', '3H.2', item => {
  item.fullCredit = "Identifies RSV vaccination gap in Assessment";
});
updateItem('Week3_Patient_C_Tuesday', '3H.3', item => {
  item.fullCredit = "Identifies Tdap booster overdue status in Assessment";
});
updateItem('Week3_Patient_C_Tuesday', '3H.4', item => {
  item.fullCredit = "States importance of immunization in chronic asthma/COPD management";
});
updateItem('Week3_Patient_C_Tuesday', '3H.5', item => {
  item.fullCredit = "Identifies viral respiratory infections as common triggers of acute exacerbations";
});
updateItem('Week3_Patient_C_Tuesday', '3H.6', item => {
  item.fullCredit = "Incorporates preventive care optimization into treatment plan";
});
updateItem('Week3_Patient_C_Tuesday', '3H.7', item => {
  item.fullCredit = "Recommends reviewing and updating immunization records";
});
updateItem('Week3_Patient_C_Tuesday', '4A.2', item => {
  item.fullCredit = "Replaces tiotropium with once-daily single-inhaler triple therapy (Trelegy Ellipta 100/62.5/25 mcg 1 inh daily, which contains LAMA umeclidinium) OR adds Symbicort to Spiriva";
});
updateItem('Week3_Patient_C_Tuesday', '4A.3', item => {
  item.fullCredit = "Provides explicit clinical justification for ICS initiation based on asthma component and eosinophils 420 cells/µL";
});
updateItem('Week3_Patient_C_Tuesday', '4A.6', item => {
  item.fullCredit = "Addresses continuation of albuterol HFA rescue inhaler in plan";
});
updateItem('Week3_Patient_C_Tuesday', '4A.7', item => {
  item.fullCredit = "Restates albuterol dosing regimen: 2 puffs q4-6h PRN shortness of breath / wheezing";
});
updateItem('Week3_Patient_C_Tuesday', '4A.10', item => {
  item.fullCredit = "Discusses rationale for daily ICS controller therapy with patient";
});
updateItem('Week3_Patient_C_Tuesday', '4A.11', item => {
  item.fullCredit = "Counsels on expected benefit of improved daytime symptom control";
});
updateItem('Week3_Patient_C_Tuesday', '4A.12', item => {
  item.fullCredit = "Counsels on expected benefit of reduced nighttime awakenings";
});
updateItem('Week3_Patient_C_Tuesday', '4A.13', item => {
  item.fullCredit = "Counsels on expected benefit of reduced exacerbation and oral steroid risk";
});
updateItem('Week3_Patient_C_Tuesday', '4A.14', item => {
  item.fullCredit = "Counsels on expected reduction in rescue inhaler reliance";
});
updateItem('Week3_Patient_C_Tuesday', '4A.15', item => {
  item.fullCredit = "References GINA 2025 Track 1 MART or Step 3/4 maintenance ICS-containing approach";
});
updateItem('Week3_Patient_C_Tuesday', '4B.3', item => {
  item.fullCredit = "Addresses allergen avoidance strategies in plan";
});
updateItem('Week3_Patient_C_Tuesday', '4B.4', item => {
  item.fullCredit = "Discusses upper-lower airway relationship (one airway concept) with patient";
});
updateItem('Week3_Patient_C_Tuesday', '4B.5', item => {
  item.fullCredit = "Plans ongoing allergic rhinitis symptom monitoring";
});
updateItem('Week3_Patient_C_Tuesday', '4C.1', item => {
  item.fullCredit = "Educates on early recognition of worsening respiratory symptoms";
});
updateItem('Week3_Patient_C_Tuesday', '4C.2', item => {
  item.fullCredit = "Discusses importance of prompt medical evaluation and early intervention for flares";
});
updateItem('Week3_Patient_C_Tuesday', '4C.3', item => {
  item.fullCredit = "Encourages prompt medical evaluation for acute respiratory exacerbations";
});
updateItem('Week3_Patient_C_Tuesday', '4C.4', item => {
  item.fullCredit = "Grounds education plan in GINA 2025 / GOLD 2026 written action plan principles";
});
updateItem('Week3_Patient_C_Tuesday', '4D.1', item => {
  item.fullCredit = "Plans monitoring of ACT score at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4D.2', item => {
  item.fullCredit = "Plans monitoring of CAT score at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4D.3', item => {
  item.fullCredit = "Plans monitoring of daytime symptom frequency";
});
updateItem('Week3_Patient_C_Tuesday', '4D.4', item => {
  item.fullCredit = "Plans monitoring of nighttime awakenings";
});
updateItem('Week3_Patient_C_Tuesday', '4D.5', item => {
  item.fullCredit = "Plans monitoring of rescue inhaler use frequency";
});
updateItem('Week3_Patient_C_Tuesday', '4D.6', item => {
  item.fullCredit = "Plans monitoring for acute respiratory exacerbations and OCS use";
});
updateItem('Week3_Patient_C_Tuesday', '4D.7', item => {
  item.fullCredit = "Plans monitoring of daily maintenance medication adherence";
});
updateItem('Week3_Patient_C_Tuesday', '4D.8', item => {
  item.fullCredit = "Plans monitoring and re-evaluation of inhaler technique at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4D.9', item => {
  item.fullCredit = "Formulates comprehensive monitoring plan covering GINA 2025 symptom-control domains";
});
updateItem('Week3_Patient_C_Tuesday', '4E.2', item => {
  item.fullCredit = "States clinical goal to minimize future systemic corticosteroid exposure to protect bone health";
});
updateItem('Week3_Patient_C_Tuesday', '4F.1', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo) for chronic respiratory disease";
});
updateItem('Week3_Patient_C_Tuesday', '4F.2', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
});
updateItem('Week3_Patient_C_Tuesday', '4F.3', item => {
  item.fullCredit = "Plans review and update of immunization records at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4F.4', item => {
  item.fullCredit = "Frames vaccination as essential strategy to prevent exacerbation triggers";
});
updateItem('Week3_Patient_C_Tuesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up timeframe in 4-6 weeks or 1-3 months";
});
updateItem('Week3_Patient_C_Tuesday', '4G.2', item => {
  item.fullCredit = "Plans assessment of clinical response to ICS initiation at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.3', item => {
  item.fullCredit = "Plans repeat ACT score assessment at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.4', item => {
  item.fullCredit = "Plans repeat CAT score assessment at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.5', item => {
  item.fullCredit = "Plans reassessment of exacerbation frequency at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.6', item => {
  item.fullCredit = "Plans reassessment of overall symptom burden at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.7', item => {
  item.fullCredit = "Plans re-evaluation of inhaler technique at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.8', item => {
  item.fullCredit = "Plans reassessment of daily medication adherence at follow-up";
});
updateItem('Week3_Patient_C_Tuesday', '4G.9', item => {
  item.fullCredit = "States plan for continued longitudinal management of Asthma-COPD Overlap";
});
updateItem('Week3_Patient_C_Tuesday', '5A.3', item => {
  item.fullCredit = "Assessment identifies key active clinical problems (ACO, uncontrolled symptoms, exacerbations, preventive care)";
});
updateItem('Week3_Patient_C_Tuesday', '5C.2', item => {
  item.fullCredit = "Cites guideline rationale (GINA 2025 and/or GOLD 2026) for ACO management recommendations";
});

// ==================== MARIA WEDNESDAY ====================
updateItem('Week3_Patient_C_Wednesday', '1A.8', item => {
  item.fullCredit = "Documents exacerbation 4 weeks ago and persistent/rougher breathing symptoms despite Trelegy";
});
updateItem('Week3_Patient_C_Wednesday', '1B.1', item => {
  item.fullCredit = "States persistent chest tightness, rougher breathing, or exertional limitation";
});
updateItem('Week3_Patient_C_Wednesday', '1B.2', item => {
  item.fullCredit = "Documents baseline dyspnea status or persistent shortness of breath";
});
updateItem('Week3_Patient_C_Wednesday', '1B.3', item => {
  item.fullCredit = "Documents wheezing status (intermittent wheezing / tight chest)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.4', item => {
  item.fullCredit = "Documents activity tolerance limitation secondary to respiratory symptoms";
});
updateItem('Week3_Patient_C_Wednesday', '1B.5', item => {
  item.fullCredit = "Documents rescue inhaler use trend (albuterol PRN several times weekly)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.7', item => {
  item.fullCredit = "Documents multiple exacerbations treated with oral corticosteroids in past year (3-5 courses)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.8', item => {
  item.fullCredit = "Documents antibiotic therapy prescribed for acute respiratory episodes";
});
updateItem('Week3_Patient_C_Wednesday', '1B.9', item => {
  item.fullCredit = "States denies ED visits (or denies emergency room evaluations)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.10', item => {
  item.fullCredit = "States denies hospitalizations (or outpatient management only)";
});
updateItem('Week3_Patient_C_Wednesday', '1B.13', item => {
  item.fullCredit = "Addresses albuterol rescue use alongside confirmed Trelegy adherence";
});
updateItem('Week3_Patient_C_Wednesday', '1B.14', item => {
  item.fullCredit = "Confirms absence of medication affordability concerns";
});
updateItem('Week3_Patient_C_Wednesday', '1B.16', item => {
  item.fullCredit = "Documents persistent allergic rhinitis symptoms after stopping nasal spray";
});
updateItem('Week3_Patient_C_Wednesday', '1B.17', item => {
  item.fullCredit = "Documents patient frustration with recurrent flares despite strict daily inhaler adherence";
});
updateItem('Week3_Patient_C_Wednesday', '1B.18', item => {
  item.fullCredit = "Documents patient dislike of prednisone bursts due to adverse effects";
});
updateItem('Week3_Patient_C_Wednesday', '1B.19', item => {
  item.fullCredit = "Documents prednisone side effects: insomnia, jitteriness, and mood changes";
});
updateItem('Week3_Patient_C_Wednesday', '1B.20', item => {
  item.fullCredit = "Documents patient motivation and goals to avoid future prednisone courses and flares";
});
updateItem('Week3_Patient_C_Wednesday', '1B.21', item => {
  item.fullCredit = "Explicitly confirms absence of recent hospitalizations";
});
updateItem('Week3_Patient_C_Wednesday', '1B.22', item => {
  item.fullCredit = "Explicitly confirms absence of recent ED visits";
});
updateItem('Week3_Patient_C_Wednesday', '1B.23', item => {
  item.fullCredit = "Documents allergic rhinitis as an ongoing symptomatic concern requiring treatment";
});
updateItem('Week3_Patient_C_Wednesday', '1B.24', item => {
  item.fullCredit = "Documents activity level is limited by dyspnea and recurrent exacerbations";
});
updateItem('Week3_Patient_C_Wednesday', '1C.1', item => {
  item.fullCredit = "Lists asthma in PMH or problem list";
});
updateItem('Week3_Patient_C_Wednesday', '1C.2', item => {
  item.fullCredit = "Documents childhood onset of asthma";
});
updateItem('Week3_Patient_C_Wednesday', '1C.3', item => {
  item.fullCredit = "Lists COPD in PMH or problem list";
});
updateItem('Week3_Patient_C_Wednesday', '1C.4', item => {
  item.fullCredit = "Documents COPD diagnosis duration (~8 years)";
});
updateItem('Week3_Patient_C_Wednesday', '1C.5', item => {
  item.fullCredit = "Lists allergic rhinitis in PMH, problem list, or subjective history";
});
updateItem('Week3_Patient_C_Wednesday', '1C.10', item => {
  item.fullCredit = "Documents no major surgical history (or denies relevant surgeries)";
});
updateItem('Week3_Patient_C_Wednesday', '1D.3', item => {
  item.fullCredit = "Confirms denial of recreational/illicit drug use";
});
updateItem('Week3_Patient_C_Wednesday', '1D.4', item => {
  item.fullCredit = "Documents physical activity level (sedentary / limited by breathlessness)";
});
updateItem('Week3_Patient_C_Wednesday', '1D.5', item => {
  item.fullCredit = "Documents activity limitation secondary to recurrent exacerbations";
});
updateItem('Week3_Patient_C_Wednesday', '1E.3', item => {
  item.fullCredit = "Documents Trelegy Ellipta 100/62.5/25 mcg 1 inhalation once daily";
});
updateItem('Week3_Patient_C_Wednesday', '1E.21', item => {
  item.fullCredit = "Confirms denial of prescription affordability concerns";
});
updateItem('Week3_Patient_C_Wednesday', '1E.23', item => {
  item.fullCredit = "Confirms adherence to Trelegy Ellipta and appropriate PRN albuterol use";
});
updateItem('Week3_Patient_C_Wednesday', '1E.26', item => {
  item.fullCredit = "Documents evaluation, referral, or initiation of biologic therapy (anti-IL-5: mepolizumab / Nucala 100 mg SQ q4 weeks)";
});
updateItem('Week3_Patient_C_Wednesday', '1E.27', item => {
  item.fullCredit = "Reconciles active medications (Trelegy Ellipta, albuterol, cetirizine, lisinopril, calcium/vitamin D)";
});
updateItem('Week3_Patient_C_Wednesday', '1F.1', item => {
  item.fullCredit = "Documents respiratory ROS: persistent dyspnea, wheezing, and rescue inhaler use";
});
updateItem('Week3_Patient_C_Wednesday', '1F.2', item => {
  item.fullCredit = "Documents rescue inhaler use trend in ROS";
});
updateItem('Week3_Patient_C_Wednesday', '1F.3', item => {
  item.fullCredit = "Documents allergic rhinitis symptoms are persistent/worsening after stopping nasal spray";
});
updateItem('Week3_Patient_C_Wednesday', '1F.4', item => {
  item.fullCredit = "Documents denial of ED visits as a relevant negative in ROS";
});
updateItem('Week3_Patient_C_Wednesday', '1F.5', item => {
  item.fullCredit = "Documents denial of hospitalizations as a relevant negative in ROS";
});
updateItem('Week3_Patient_C_Wednesday', '1F.6', item => {
  item.fullCredit = "Documents prednisone-related insomnia in ROS";
});
updateItem('Week3_Patient_C_Wednesday', '1F.7', item => {
  item.fullCredit = "Documents prednisone-related jitteriness / restlessness in ROS";
});
updateItem('Week3_Patient_C_Wednesday', '1F.8', item => {
  item.fullCredit = "Documents activity limitation secondary to respiratory symptoms in ROS";
});
updateItem('Week3_Patient_C_Wednesday', '1G.1', item => {
  item.fullCredit = "States patient goal of reducing recurrent exacerbations and flare-ups";
});
updateItem('Week3_Patient_C_Wednesday', '1G.2', item => {
  item.fullCredit = "States patient goal of maintaining daily functional activities and active lifestyle";
});
updateItem('Week3_Patient_C_Wednesday', '1G.4', item => {
  item.fullCredit = "Documents patient concern regarding prednisone side effects (insomnia, jitteriness)";
});
updateItem('Week3_Patient_C_Wednesday', '1G.5', item => {
  item.fullCredit = "Documents patient strong desire to minimize future systemic corticosteroid exposure";
});
updateItem('Week3_Patient_C_Wednesday', '1G.6', item => {
  item.fullCredit = "Documents patient high motivation and engagement through strict medication adherence";
});
updateItem('Week3_Patient_C_Wednesday', '2A.2', item => {
  item.fullCredit = "Documents HR 80 bpm (or 76 bpm) with units";
});
updateItem('Week3_Patient_C_Wednesday', '2A.3', item => {
  item.fullCredit = "Documents RR 18 breaths/min (or 16 breaths/min) with units";
});
updateItem('Week3_Patient_C_Wednesday', '2A.11', item => {
  item.fullCredit = "Interprets SpO2 95% on room air as adequate / within target range (93-95% per GINA)";
});
updateItem('Week3_Patient_C_Wednesday', '2A.13', item => {
  item.fullCredit = "Interprets RR 18 breaths/min as within normal limits";
});
updateItem('Week3_Patient_C_Wednesday', '2A.14', item => {
  item.fullCredit = "Interprets HR 80 bpm as normal / regular rate and rhythm";
});
updateItem('Week3_Patient_C_Wednesday', '2B.3', item => {
  item.fullCredit = "Interprets FEV1/FVC 0.56 (<0.70 threshold) as confirming persistent airflow obstruction";
});
updateItem('Week3_Patient_C_Wednesday', '2B.4', item => {
  item.fullCredit = "Classifies FEV1 1.52 L (61% predicted) as GOLD Grade 2 moderate airflow obstruction";
});
updateItem('Week3_Patient_C_Wednesday', '2B.10', item => {
  item.fullCredit = "Interprets ACT score 17 as partly controlled asthma (<=19 threshold per GINA)";
});
updateItem('Week3_Patient_C_Wednesday', '2B.13', item => {
  item.fullCredit = "Interprets CAT score 15 (>=10 threshold) as high COPD symptom burden per GOLD 2026";
});
updateItem('Week3_Patient_C_Wednesday', '2B.15', item => {
  item.fullCredit = "Documents antibiotic-requiring exacerbation episode in past year";
});
updateItem('Week3_Patient_C_Wednesday', '2B.16', item => {
  item.fullCredit = "Documents frequent exacerbations in past 12 months (3-5 episodes)";
});
updateItem('Week3_Patient_C_Wednesday', '2B.17', item => {
  item.fullCredit = "Documents absence of recent hospitalizations in Objective";
});
updateItem('Week3_Patient_C_Wednesday', '2B.18', item => {
  item.fullCredit = "Notes blood glucose / CBG or flags monitoring needs given frequent corticosteroid exposure";
});
updateItem('Week3_Patient_C_Wednesday', '2B.20', item => {
  item.fullCredit = "Notes serum IgE or FeNO as unmeasured Type 2 biomarkers";
});
updateItem('Week3_Patient_C_Wednesday', '2B.21', item => {
  item.fullCredit = "Documents eosinophil trend rising from 420 to 520 cells/µL";
});
updateItem('Week3_Patient_C_Wednesday', '2B.22', item => {
  item.fullCredit = "Labels lab source as CBC / Complete Blood Count";
});
updateItem('Week3_Patient_C_Wednesday', '2C.2', item => {
  item.fullCredit = "Documents obstructive spirometry pattern with FEV1/FVC < 0.70 threshold";
});
updateItem('Week3_Patient_C_Wednesday', '2C.3', item => {
  item.fullCredit = "Classifies FEV1 as GOLD Grade 2 moderate obstruction";
});
updateItem('Week3_Patient_C_Wednesday', '2C.4', item => {
  item.fullCredit = "Cites blood eosinophils 520 cells/µL (>=300 threshold) favoring biologic consideration";
});
updateItem('Week3_Patient_C_Wednesday', '2C.5', item => {
  item.fullCredit = "Classifies exacerbation frequency as high-risk / recurrent flare phenotype";
});
updateItem('Week3_Patient_C_Wednesday', '2C.6', item => {
  item.fullCredit = "Cites ACT target threshold (>=20) compared to current score of 17";
});
updateItem('Week3_Patient_C_Wednesday', '2C.7', item => {
  item.fullCredit = "Cites CAT score threshold (>=10) indicating substantial symptom burden";
});
updateItem('Week3_Patient_C_Wednesday', '2C.8', item => {
  item.fullCredit = "Interprets SpO2 95% on room air as adequate / within 93-95% target";
});
updateItem('Week3_Patient_C_Wednesday', '2C.10', item => {
  item.fullCredit = "Addresses cumulative oral corticosteroid exposure risks (bone loss, glycemic, mood)";
});
updateItem('Week3_Patient_C_Wednesday', '2C.11', item => {
  item.fullCredit = "Flags persistent/rising eosinophil trend (420 to 520 cells/µL)";
});
updateItem('Week3_Patient_C_Wednesday', '2C.12', item => {
  item.fullCredit = "Notes FeNO as unmeasured/expected biomarker";
});
updateItem('Week3_Patient_C_Wednesday', '2C.13', item => {
  item.fullCredit = "Notes serum IgE as unmeasured/expected biomarker";
});
updateItem('Week3_Patient_C_Wednesday', '2C.15', item => {
  item.fullCredit = "Notes sputum eosinophil count or flags absence";
});
updateItem('Week3_Patient_C_Wednesday', '2C.18', item => {
  item.fullCredit = "Compares current spirometry (FEV1 1.52 L, 61%) to baseline/prior values";
});
updateItem('Week3_Patient_C_Wednesday', '2C.19', item => {
  item.fullCredit = "Documents OCS course history and timing";
});
updateItem('Week3_Patient_C_Wednesday', '2C.20', item => {
  item.fullCredit = "Quantifies rescue inhaler use frequency";
});
updateItem('Week3_Patient_C_Wednesday', '2C.22', item => {
  item.fullCredit = "Notes electrolyte status in context of beta-agonist / steroid use";
});
updateItem('Week3_Patient_C_Wednesday', '2C.24', item => {
  item.fullCredit = "Compares ACT/CAT scores to baseline values to evaluate clinical trajectory";
});
updateItem('Week3_Patient_C_Wednesday', '3A.1', item => {
  item.fullCredit = "Identifies Asthma-COPD Overlap (ACO) as the primary clinical problem";
});
updateItem('Week3_Patient_C_Wednesday', '3A.2', item => {
  item.fullCredit = "Characterizes airway disease as severe eosinophilic phenotype";
});
updateItem('Week3_Patient_C_Wednesday', '3A.4', item => {
  item.fullCredit = "Cites childhood-onset asthma as supporting the asthma component of ACO";
});
updateItem('Week3_Patient_C_Wednesday', '3A.5', item => {
  item.fullCredit = "Cites FEV1/FVC 0.56 and FEV1 61% predicted in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3A.6', item => {
  item.fullCredit = "Cites elevated eosinophil count (520 cells/µL) as phenotype evidence in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3A.7', item => {
  item.fullCredit = "Cites allergic rhinitis as a contributing upper airway comorbidity";
});
updateItem('Week3_Patient_C_Wednesday', '3A.8', item => {
  item.fullCredit = "Frames recurrent exacerbations despite triple therapy as defining ACO severity";
});
updateItem('Week3_Patient_C_Wednesday', '3A.9', item => {
  item.fullCredit = "Notes that inhaled triple regimen provides baseline bronchodilation but is insufficient to prevent eosinophilic exacerbations";
});
updateItem('Week3_Patient_C_Wednesday', '3A.10', item => {
  item.fullCredit = "States therapeutic inadequacy of inhaled therapy alone to control exacerbations";
});
updateItem('Week3_Patient_C_Wednesday', '3A.12', item => {
  item.fullCredit = "References verified excellent inhaler technique and adherence to rule out implementation failure";
});
updateItem('Week3_Patient_C_Wednesday', '3A.13', item => {
  item.fullCredit = "Addresses allergic rhinitis optimization as an essential comorbidity target";
});
updateItem('Week3_Patient_C_Wednesday', '3A.14', item => {
  item.fullCredit = "Cites GINA 2025 Step 4/5 recommendation for biologic evaluation in uncontrolled eosinophilic airway disease";
});
updateItem('Week3_Patient_C_Wednesday', '3A.15', item => {
  item.fullCredit = "Documents persistent Type 2 airway inflammation driving disease instability";
});
updateItem('Week3_Patient_C_Wednesday', '3A.16', item => {
  item.fullCredit = "Concludes severe eosinophilic disease requires advanced biologic therapy (anti-IL-5: mepolizumab)";
});
updateItem('Week3_Patient_C_Wednesday', '3A.17', item => {
  item.fullCredit = "Interprets ACT score 17 as partly controlled asthma in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3A.18', item => {
  item.fullCredit = "Interprets CAT score 15 as substantial symptom burden in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3A.19', item => {
  item.fullCredit = "Classifies current regimen as GINA Step 4 / high-intensity inhaled therapy";
});
updateItem('Week3_Patient_C_Wednesday', '3A.20', item => {
  item.fullCredit = "States indication for GINA Step 5 add-on biologic evaluation";
});
updateItem('Week3_Patient_C_Wednesday', '3A.21', item => {
  item.fullCredit = "Compares eosinophils 520 cells/µL to threshold (>=300) favoring anti-IL-5 therapy";
});
updateItem('Week3_Patient_C_Wednesday', '3A.22', item => {
  item.fullCredit = "Cites GINA 2025 Step 5 biologic eligibility criteria";
});
updateItem('Week3_Patient_C_Wednesday', '3A.25', item => {
  item.fullCredit = "Cites MATINEE trial evidence supporting anti-IL-5 therapy (mepolizumab) in patients with COPD/ACO and eosinophilic phenotype on optimized inhaled therapy";
});
updateItem('Week3_Patient_C_Wednesday', '3A.26', item => {
  item.fullCredit = "Applies MATINEE and severe asthma biologic evidence to ACO phenotype";
});
updateItem('Week3_Patient_C_Wednesday', '3A.27', item => {
  item.fullCredit = "Prioritizes ACO and recurrent exacerbation management as primary clinical issue";
});
updateItem('Week3_Patient_C_Wednesday', '3A.31', item => {
  item.fullCredit = "Cites patient frustration and cumulative OCS burden as factors driving urgency of biologic escalation";
});
updateItem('Week3_Patient_C_Wednesday', '3A.32', item => {
  item.fullCredit = "Notes clinical progression and urgent need to prevent further exacerbations";
});
updateItem('Week3_Patient_C_Wednesday', '3B.1', item => {
  item.fullCredit = "Documents recent exacerbation 4 weeks ago and recurrent exacerbation history in prior 12 months";
});
updateItem('Week3_Patient_C_Wednesday', '3B.2', item => {
  item.fullCredit = "Documents multiple corticosteroid-treated exacerbations in past year";
});
updateItem('Week3_Patient_C_Wednesday', '3B.3', item => {
  item.fullCredit = "Cites GINA 2025 and GOLD 2026 statements that prior exacerbations strongly predict future risk";
});
updateItem('Week3_Patient_C_Wednesday', '3B.4', item => {
  item.fullCredit = "States exacerbation history is a primary driver of treatment escalation decisions";
});
updateItem('Week3_Patient_C_Wednesday', '3B.5', item => {
  item.fullCredit = "Notes recurrent exacerbations accelerate lung function decline";
});
updateItem('Week3_Patient_C_Wednesday', '3B.6', item => {
  item.fullCredit = "Notes recurrent exacerbations severely impair quality of life";
});
updateItem('Week3_Patient_C_Wednesday', '3B.7', item => {
  item.fullCredit = "Notes recurrent exacerbations increase healthcare utilization and costs";
});
updateItem('Week3_Patient_C_Wednesday', '3B.8', item => {
  item.fullCredit = "Notes recurrent exacerbations substantially increase hospitalization risk";
});
updateItem('Week3_Patient_C_Wednesday', '3B.9', item => {
  item.fullCredit = "Frames exacerbation frequency as unacceptably high despite appropriate triple inhaled therapy";
});
updateItem('Week3_Patient_C_Wednesday', '3B.11', item => {
  item.fullCredit = "Confirms denial of recent hospitalizations or emergency department visits";
});
updateItem('Week3_Patient_C_Wednesday', '3B.12', item => {
  item.fullCredit = "Documents antibiotic-treated exacerbation episode";
});
updateItem('Week3_Patient_C_Wednesday', '3B.13', item => {
  item.fullCredit = "Prioritizes recurrent exacerbation management as a core problem";
});
updateItem('Week3_Patient_C_Wednesday', '3B.14', item => {
  item.fullCredit = "Confirms adherence and technique are verified and non-contributing to exacerbations";
});
updateItem('Week3_Patient_C_Wednesday', '3B.15', item => {
  item.fullCredit = "Links biologic escalation directly to oral corticosteroid stewardship";
});
updateItem('Week3_Patient_C_Wednesday', '3B.16', item => {
  item.fullCredit = "Includes updated exacerbation action plan review in assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3B.17', item => {
  item.fullCredit = "Recommends prompt medical evaluation for worsening respiratory symptoms";
});
updateItem('Week3_Patient_C_Wednesday', '3B.18', item => {
  item.fullCredit = "Quantifies exacerbation burden (recent flare 4 weeks ago, multiple in past year)";
});
updateItem('Week3_Patient_C_Wednesday', '3B.19', item => {
  item.fullCredit = "Notes dual role of exacerbation history as both outcome measure and future risk marker";
});
updateItem('Week3_Patient_C_Wednesday', '3B.20', item => {
  item.fullCredit = "Cites GINA 2025 Step 4/5 referral recommendation for persistent exacerbations";
});
updateItem('Week3_Patient_C_Wednesday', '3C.1', item => {
  item.fullCredit = "Cites absolute blood eosinophil count 520 cells/µL in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3C.2', item => {
  item.fullCredit = "Frames eosinophilic elevation as persistent eosinophilic airway inflammation";
});
updateItem('Week3_Patient_C_Wednesday', '3C.4', item => {
  item.fullCredit = "Explicitly states association between high eosinophils and increased exacerbation risk";
});
updateItem('Week3_Patient_C_Wednesday', '3C.5', item => {
  item.fullCredit = "References 'treatable trait' framework for eosinophilic airway inflammation";
});
updateItem('Week3_Patient_C_Wednesday', '3C.7', item => {
  item.fullCredit = "Cites MATINEE trial conclusion regarding anti-IL-5 efficacy in patients with high eosinophils failing optimized inhaled therapy";
});
updateItem('Week3_Patient_C_Wednesday', '3C.8', item => {
  item.fullCredit = "Applies biologic evidence to ACO / eosinophilic respiratory disease";
});
updateItem('Week3_Patient_C_Wednesday', '3C.9', item => {
  item.fullCredit = "Cites supporting criteria for biologic therapy (eosinophilia >=300, recurrent flares, optimized inhaled therapy)";
});
updateItem('Week3_Patient_C_Wednesday', '3C.11', item => {
  item.fullCredit = "Compares eosinophils 520 cells/µL to threshold for anti-IL-5 biologic therapy";
});
updateItem('Week3_Patient_C_Wednesday', '3C.12', item => {
  item.fullCredit = "Identifies eosinophilic inflammation as a key prioritized problem";
});
updateItem('Week3_Patient_C_Wednesday', '3C.13', item => {
  item.fullCredit = "Explicitly classifies phenotype as Type 2 eosinophilic airway disease";
});
updateItem('Week3_Patient_C_Wednesday', '3C.14', item => {
  item.fullCredit = "Highlights blood eosinophils as a predictive biomarker for biologic selection";
});
updateItem('Week3_Patient_C_Wednesday', '3C.15', item => {
  item.fullCredit = "Notes inadequate suppression of eosinophilic inflammation by inhaled corticosteroids alone";
});
updateItem('Week3_Patient_C_Wednesday', '3C.16', item => {
  item.fullCredit = "Explains anti-IL-5 mechanism (targeting IL-5 pathway to reduce eosinophils and prevent exacerbations)";
});
updateItem('Week3_Patient_C_Wednesday', '3C.17', item => {
  item.fullCredit = "Confirms adult eligibility for mepolizumab (100 mg SQ q4w)";
});
updateItem('Week3_Patient_C_Wednesday', '3C.18', item => {
  item.fullCredit = "Plans post-biologic monitoring of eosinophils and clinical response";
});
updateItem('Week3_Patient_C_Wednesday', '3C.19', item => {
  item.fullCredit = "Documents CBC with differential as source of eosinophil count";
});
updateItem('Week3_Patient_C_Wednesday', '3C.20', item => {
  item.fullCredit = "Links high eosinophil count to GINA Step 5 biologic indication";
});
updateItem('Week3_Patient_C_Wednesday', '3D.1', item => {
  item.fullCredit = "Documents multiple prednisone courses in prior year and recent burst 4 weeks ago";
});
updateItem('Week3_Patient_C_Wednesday', '3D.2', item => {
  item.fullCredit = "Documents insomnia as an adverse effect of oral corticosteroids";
});
updateItem('Week3_Patient_C_Wednesday', '3D.3', item => {
  item.fullCredit = "Documents jitteriness / nervousness as an adverse effect of oral corticosteroids";
});
updateItem('Week3_Patient_C_Wednesday', '3D.5', item => {
  item.fullCredit = "Cites GINA 2025 goal of minimizing systemic corticosteroid exposure";
});
updateItem('Week3_Patient_C_Wednesday', '3D.6', item => {
  item.fullCredit = "Discusses cumulative adverse effect burden of repeated OCS bursts";
});
updateItem('Week3_Patient_C_Wednesday', '3D.7', item => {
  item.fullCredit = "Prioritizes OCS-sparing biologic therapy to reduce steroid toxicity";
});
updateItem('Week3_Patient_C_Wednesday', '3D.8', item => {
  item.fullCredit = "Discusses proven OCS-sparing benefits of mepolizumab";
});
updateItem('Week3_Patient_C_Wednesday', '3D.9', item => {
  item.fullCredit = "Identifies corticosteroid adverse effect burden / OCS stewardship as an active problem";
});
updateItem('Week3_Patient_C_Wednesday', '3D.11', item => {
  item.fullCredit = "Lists OCS adverse effects (insomnia, jitteriness, bone loss, metabolic)";
});
updateItem('Week3_Patient_C_Wednesday', '3D.12', item => {
  item.fullCredit = "Documents patient strong preference to avoid future prednisone courses";
});
updateItem('Week3_Patient_C_Wednesday', '3D.13', item => {
  item.fullCredit = "Discusses high cumulative OCS exposure over past 12 months";
});
updateItem('Week3_Patient_C_Wednesday', '3D.14', item => {
  item.fullCredit = "Cites GINA 2025 regarding incremental health risks associated with each OCS course";
});
updateItem('Week3_Patient_C_Wednesday', '3D.15', item => {
  item.fullCredit = "Links mepolizumab directly to reducing future OCS requirements";
});
updateItem('Week3_Patient_C_Wednesday', '3D.16', item => {
  item.fullCredit = "Documents dual strategy combining optimized triple inhaled therapy + biologic to eliminate OCS bursts";
});
updateItem('Week3_Patient_C_Wednesday', '3E.1', item => {
  item.fullCredit = "Identifies allergic rhinitis as an active comorbidity problem in Assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3E.2', item => {
  item.fullCredit = "Assesses allergic rhinitis status as poorly controlled after stopping nasal spray";
});
updateItem('Week3_Patient_C_Wednesday', '3E.4', item => {
  item.fullCredit = "Plans re-initiation of daily fluticasone nasal spray to control upper airway disease";
});
updateItem('Week3_Patient_C_Wednesday', '3E.6', item => {
  item.fullCredit = "Prioritizes allergic rhinitis management in assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3E.7', item => {
  item.fullCredit = "Cites GINA 2025 recommendation for intranasal corticosteroids in allergic rhinitis";
});
updateItem('Week3_Patient_C_Wednesday', '3E.8', item => {
  item.fullCredit = "Notes upper airway inflammation contributes to overall airway reactivity";
});
updateItem('Week3_Patient_C_Wednesday', '3F.3', item => {
  item.fullCredit = "Identifies skeletal / osteopenia risk secondary to repeated OCS exposure";
});
updateItem('Week3_Patient_C_Wednesday', '3F.4', item => {
  item.fullCredit = "Links exacerbation reduction and OCS avoidance to skeletal protection";
});
updateItem('Week3_Patient_C_Wednesday', '3F.8', item => {
  item.fullCredit = "Identifies osteopenia / bone health preservation as an active problem";
});
updateItem('Week3_Patient_C_Wednesday', '3F.10', item => {
  item.fullCredit = "Notes absence of recent DEXA bone density scan or plans DEXA monitoring";
});
updateItem('Week3_Patient_C_Wednesday', '3F.11', item => {
  item.fullCredit = "Documents steroid-induced osteoporosis progression risk";
});
updateItem('Week3_Patient_C_Wednesday', '3F.12', item => {
  item.fullCredit = "Links OCS-sparing biologic therapy to long-term skeletal preservation";
});
updateItem('Week3_Patient_C_Wednesday', '3G.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a distinct problem";
});
updateItem('Week3_Patient_C_Wednesday', '3G.7', item => {
  item.fullCredit = "Links vaccination directly to reducing viral exacerbation triggers";
});
updateItem('Week3_Patient_C_Wednesday', '3G.8', item => {
  item.fullCredit = "Prioritizes preventive care in assessment";
});
updateItem('Week3_Patient_C_Wednesday', '3G.9', item => {
  item.fullCredit = "Cites GINA 2025 respiratory vaccination recommendations";
});
updateItem('Week3_Patient_C_Wednesday', '3G.10', item => {
  item.fullCredit = "Identifies RSV and Tdap vaccine gaps as actionable at this visit";
});
updateItem('Week3_Patient_C_Wednesday', '3G.11', item => {
  item.fullCredit = "Plans immunization review and follow-up at next visit";
});
updateItem('Week3_Patient_C_Wednesday', '4A.2', item => {
  item.fullCredit = "Specifies mepolizumab (Nucala) 100 mg subcutaneous injection once every 4 weeks";
});
updateItem('Week3_Patient_C_Wednesday', '4A.4', item => {
  item.fullCredit = "Explicitly states continuation of Trelegy Ellipta 100/62.5/25 mcg 1 inhalation daily";
});
updateItem('Week3_Patient_C_Wednesday', '4A.5', item => {
  item.fullCredit = "Documents sig for Trelegy Ellipta (1 inhalation once daily, containing LAMA umeclidinium)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.6', item => {
  item.fullCredit = "States continuation of albuterol HFA rescue inhaler in Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4A.7', item => {
  item.fullCredit = "Documents albuterol sig: 2 puffs q4-6h PRN shortness of breath / wheezing";
});
updateItem('Week3_Patient_C_Wednesday', '4A.8', item => {
  item.fullCredit = "Initiates or refers for biologic therapy: mepolizumab (Nucala 100 mg SQ q4w)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.9', item => {
  item.fullCredit = "Names brand name Nucala (or mepolizumab)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.10', item => {
  item.fullCredit = "Documents mepolizumab dose: 100 mg";
});
updateItem('Week3_Patient_C_Wednesday', '4A.11', item => {
  item.fullCredit = "Documents route: subcutaneous (SQ)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.12', item => {
  item.fullCredit = "Documents frequency: once every 4 weeks";
});
updateItem('Week3_Patient_C_Wednesday', '4A.13', item => {
  item.fullCredit = "Educates patient on mechanism of action of anti-IL-5 biologic therapy";
});
updateItem('Week3_Patient_C_Wednesday', '4A.14', item => {
  item.fullCredit = "Educates on expected benefits: reducing exacerbations, tapering OCS, and improving control";
});
updateItem('Week3_Patient_C_Wednesday', '4A.15', item => {
  item.fullCredit = "Educates on administration requirements (clinic injection or autoinjector training)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.16', item => {
  item.fullCredit = "Educates on safety and monitoring requirements for biologic therapy";
});
updateItem('Week3_Patient_C_Wednesday', '4A.17', item => {
  item.fullCredit = "Sets realistic expectations regarding gradual onset of exacerbation-reduction benefits";
});
updateItem('Week3_Patient_C_Wednesday', '4A.19', item => {
  item.fullCredit = "Lists omalizumab or alternative biologic options";
});
updateItem('Week3_Patient_C_Wednesday', '4A.20', item => {
  item.fullCredit = "Lists benralizumab (anti-IL-5R) as an alternative biologic option";
});
updateItem('Week3_Patient_C_Wednesday', '4A.21', item => {
  item.fullCredit = "Lists dupilumab (anti-IL-4R) as an alternative biologic option";
});
updateItem('Week3_Patient_C_Wednesday', '4A.22', item => {
  item.fullCredit = "Lists tezepelumab (anti-TSLP) as an alternative biologic option";
});
updateItem('Week3_Patient_C_Wednesday', '4A.24', item => {
  item.fullCredit = "Counsels on gradual onset of biologic benefit over several weeks/months";
});
updateItem('Week3_Patient_C_Wednesday', '4A.25', item => {
  item.fullCredit = "Verifies dose against GINA 2025 Step 5 recommendations";
});
updateItem('Week3_Patient_C_Wednesday', '4A.26', item => {
  item.fullCredit = "Mentions GINA Step 5 add-on biologic classification";
});
updateItem('Week3_Patient_C_Wednesday', '4A.28', item => {
  item.fullCredit = "States no change / continuation of baseline triple inhaled therapy (Trelegy Ellipta)";
});
updateItem('Week3_Patient_C_Wednesday', '4A.29', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA PRN in Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4A.30', item => {
  item.fullCredit = "Reinforces daily adherence and proper inhaler technique for Trelegy in Plan";
});
updateItem('Week3_Patient_C_Wednesday', '4A.31', item => {
  item.fullCredit = "Addresses insurance prior authorization / eligibility criteria for mepolizumab";
});
updateItem('Week3_Patient_C_Wednesday', '4A.32', item => {
  item.fullCredit = "Documents rationale for continuing baseline triple therapy alongside biologic";
});
updateItem('Week3_Patient_C_Wednesday', '4B.1', item => {
  item.fullCredit = "States explicit clinical goal to eliminate or drastically reduce future OCS courses";
});
updateItem('Week3_Patient_C_Wednesday', '4B.2', item => {
  item.fullCredit = "Communicates OCS-sparing goal directly to patient";
});
updateItem('Week3_Patient_C_Wednesday', '4B.3', item => {
  item.fullCredit = "Reviews updated written exacerbation action plan with patient";
});
updateItem('Week3_Patient_C_Wednesday', '4B.4', item => {
  item.fullCredit = "Recommends prompt medical evaluation for worsening symptoms rather than self-initiating steroids";
});
updateItem('Week3_Patient_C_Wednesday', '4B.5', item => {
  item.fullCredit = "Grounds action plan in GINA 2025 exacerbation management guidelines";
});
updateItem('Week3_Patient_C_Wednesday', '4B.6', item => {
  item.fullCredit = "Aligns plan with patient value of avoiding prednisone side effects";
});
updateItem('Week3_Patient_C_Wednesday', '4B.7', item => {
  item.fullCredit = "Frames mepolizumab as key pharmacologic mechanism to achieve OCS reduction";
});
updateItem('Week3_Patient_C_Wednesday', '4B.8', item => {
  item.fullCredit = "Defines clear criteria for when systemic corticosteroids are clinically indicated";
});
updateItem('Week3_Patient_C_Wednesday', '4B.9', item => {
  item.fullCredit = "References GINA 2025 systemic corticosteroid-sparing strategy";
});
updateItem('Week3_Patient_C_Wednesday', '4B.10', item => {
  item.fullCredit = "Discusses OCS side effect risks (bone loss, insomnia, mood) with patient";
});
updateItem('Week3_Patient_C_Wednesday', '4B.11', item => {
  item.fullCredit = "Acknowledges and validates patient concerns regarding prednisone toxicity";
});
updateItem('Week3_Patient_C_Wednesday', '4B.12', item => {
  item.fullCredit = "Integrates OCS stewardship into comprehensive management strategy";
});
updateItem('Week3_Patient_C_Wednesday', '4C.3', item => {
  item.fullCredit = "Documents continuation of allergen avoidance strategies";
});
updateItem('Week3_Patient_C_Wednesday', '4C.4', item => {
  item.fullCredit = "Restarts daily fluticasone propionate nasal spray (1-2 sprays per nostril daily) and continues cetirizine";
});
updateItem('Week3_Patient_C_Wednesday', '4C.5', item => {
  item.fullCredit = "Cites GINA 2025 support for intranasal corticosteroids in allergic rhinitis";
});
updateItem('Week3_Patient_C_Wednesday', '4C.7', item => {
  item.fullCredit = "Documents plan to restore patient satisfaction with rhinitis control";
});
updateItem('Week3_Patient_C_Wednesday', '4C.8', item => {
  item.fullCredit = "Frames allergen avoidance as non-pharmacologic adjunct to pharmacotherapy";
});
updateItem('Week3_Patient_C_Wednesday', '4D.2', item => {
  item.fullCredit = "States goal to minimize OCS to protect bone mineral density";
});
updateItem('Week3_Patient_C_Wednesday', '4D.4', item => {
  item.fullCredit = "Links mepolizumab OCS-sparing effect to skeletal health protection";
});
updateItem('Week3_Patient_C_Wednesday', '4D.6', item => {
  item.fullCredit = "Recommends continuing calcium carbonate + vitamin D and ordering baseline DEXA scan";
});
updateItem('Week3_Patient_C_Wednesday', '4E.1', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo)";
});
updateItem('Week3_Patient_C_Wednesday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
});
updateItem('Week3_Patient_C_Wednesday', '4E.3', item => {
  item.fullCredit = "Plans review of immunization records at next follow-up visit";
});
updateItem('Week3_Patient_C_Wednesday', '4E.4', item => {
  item.fullCredit = "Confirms influenza vaccine is up to date";
});
updateItem('Week3_Patient_C_Wednesday', '4E.5', item => {
  item.fullCredit = "Confirms COVID-19 vaccine is up to date";
});
updateItem('Week3_Patient_C_Wednesday', '4E.6', item => {
  item.fullCredit = "Confirms PCV20 pneumococcal vaccine is up to date / received";
});
updateItem('Week3_Patient_C_Wednesday', '4E.7', item => {
  item.fullCredit = "Cites GINA 2025 immunization recommendations";
});
updateItem('Week3_Patient_C_Wednesday', '4E.8', item => {
  item.fullCredit = "Links respiratory vaccinations directly to exacerbation prevention";
});
updateItem('Week3_Patient_C_Wednesday', '4F.1', item => {
  item.fullCredit = "Plans monitoring of ACT score at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4F.2', item => {
  item.fullCredit = "Plans monitoring of CAT score at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4F.3', item => {
  item.fullCredit = "Plans monitoring of respiratory exacerbation frequency";
});
updateItem('Week3_Patient_C_Wednesday', '4F.4', item => {
  item.fullCredit = "Plans monitoring of oral corticosteroid courses and cumulative exposure";
});
updateItem('Week3_Patient_C_Wednesday', '4F.5', item => {
  item.fullCredit = "Plans monitoring of rescue inhaler use frequency";
});
updateItem('Week3_Patient_C_Wednesday', '4F.6', item => {
  item.fullCredit = "Plans monitoring of blood eosinophil count response post-biologic";
});
updateItem('Week3_Patient_C_Wednesday', '4F.7', item => {
  item.fullCredit = "Plans monitoring of adherence to Trelegy Ellipta and mepolizumab";
});
updateItem('Week3_Patient_C_Wednesday', '4F.8', item => {
  item.fullCredit = "Plans monitoring for injection site reactions or biologic adverse effects";
});
updateItem('Week3_Patient_C_Wednesday', '4F.9', item => {
  item.fullCredit = "Plans assessment of overall therapeutic response to biologic add-on";
});
updateItem('Week3_Patient_C_Wednesday', '4F.10', item => {
  item.fullCredit = "Documents comprehensive monitoring plan across clinical domains";
});
updateItem('Week3_Patient_C_Wednesday', '4F.11', item => {
  item.fullCredit = "Plans longitudinal trending of eosinophils post-biologic";
});
updateItem('Week3_Patient_C_Wednesday', '4F.12', item => {
  item.fullCredit = "Specifies timeframe for repeat ACT/CAT assessment (at 4-12 weeks)";
});
updateItem('Week3_Patient_C_Wednesday', '4F.13', item => {
  item.fullCredit = "Frames OCS tracking as a primary stewardship outcome";
});
updateItem('Week3_Patient_C_Wednesday', '4F.14', item => {
  item.fullCredit = "Frames reduction in rescue albuterol as expected biologic outcome";
});
updateItem('Week3_Patient_C_Wednesday', '4F.15', item => {
  item.fullCredit = "Monitors for local injection site reactions per GINA 2025";
});
updateItem('Week3_Patient_C_Wednesday', '4F.16', item => {
  item.fullCredit = "Educates on and monitors for systemic hypersensitivity / anaphylaxis";
});
updateItem('Week3_Patient_C_Wednesday', '4F.17', item => {
  item.fullCredit = "Presents structured monitoring plan covering key safety and efficacy markers";
});
updateItem('Week3_Patient_C_Wednesday', '4F.18', item => {
  item.fullCredit = "Plans adherence monitoring for both inhaled triple therapy and biologic";
});
updateItem('Week3_Patient_C_Wednesday', '4G.1', item => {
  item.fullCredit = "Specifies follow-up interval (e.g., 4 weeks for injection / 12 weeks for comprehensive response)";
});
updateItem('Week3_Patient_C_Wednesday', '4G.2', item => {
  item.fullCredit = "Plans assessment of clinical response to mepolizumab at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.3', item => {
  item.fullCredit = "Plans reassessment of exacerbation frequency at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.4', item => {
  item.fullCredit = "Plans repeat ACT score assessment at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.5', item => {
  item.fullCredit = "Plans repeat CAT score assessment at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.6', item => {
  item.fullCredit = "Plans reassessment of corticosteroid exposure at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.7', item => {
  item.fullCredit = "Plans reassessment of overall symptom burden at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.8', item => {
  item.fullCredit = "Plans reassessment of treatment tolerability and side effects at follow-up";
});
updateItem('Week3_Patient_C_Wednesday', '4G.9', item => {
  item.fullCredit = "States plan for continued longitudinal management of Asthma-COPD Overlap";
});
updateItem('Week3_Patient_C_Wednesday', '4G.10', item => {
  item.fullCredit = "Frames follow-up as structured biologic response assessment";
});
updateItem('Week3_Patient_C_Wednesday', '4G.11', item => {
  item.fullCredit = "Cites GINA 2025 follow-up evaluation framework (re-evaluate at 3-4 months)";
});
updateItem('Week3_Patient_C_Wednesday', '4G.12', item => {
  item.fullCredit = "Addresses appropriateness of 3-4 month interval for biologic efficacy assessment";
});
updateItem('Week3_Patient_C_Wednesday', '4G.13', item => {
  item.fullCredit = "Plans vaccination follow-up (RSV, Tdap) at next visit";
});
updateItem('Week3_Patient_C_Wednesday', '4G.14', item => {
  item.fullCredit = "Follow-up plan encompasses active clinical problems";
});
updateItem('Week3_Patient_C_Wednesday', '5A.2', item => {
  item.fullCredit = "Assessment addresses prioritized clinical problems (ACO, recurrent flares, eosinophilia, OCS burden, AR, bone health, vaccines)";
});
updateItem('Week3_Patient_C_Wednesday', '5A.3', item => {
  item.fullCredit = "Plan aligns with and addresses assessed clinical problems";
});
updateItem('Week3_Patient_C_Wednesday', '5A.4', item => {
  item.fullCredit = "Includes structured Monitoring and Follow-Up plan elements";
});
updateItem('Week3_Patient_C_Wednesday', '5B.1', item => {
  item.fullCredit = "Reconciles active medications with drug, dose, route, and frequency";
});
updateItem('Week3_Patient_C_Wednesday', '5B.2', item => {
  item.fullCredit = "Reports lab values with units and clinical interpretation (e.g., eosinophils 520 cells/µL elevated)";
});
updateItem('Week3_Patient_C_Wednesday', '5B.3', item => {
  item.fullCredit = "Maintains clear, consistent professional section formatting throughout note";
});
updateItem('Week3_Patient_C_Wednesday', '5C.1', item => {
  item.fullCredit = "Uses standard disease-specific terminology (ACO, eosinophilic phenotype, anti-IL-5, triple therapy, exacerbation)";
});
updateItem('Week3_Patient_C_Wednesday', '5C.3', item => {
  item.fullCredit = "Cites GINA 2025 and/or GOLD 2026 guidelines supporting recommendations";
});

// ==================== MARIA THURSDAY ====================
updateItem('Week3_Patient_C_Thursday', '1A.5', item => {
  item.fullCredit = "Documents visit context: Asthma-COPD Overlap (ACO) management and evaluation of persistent symptoms";
});
updateItem('Week3_Patient_C_Thursday', '1A.7', item => {
  item.fullCredit = "Documents patient clinical status (persistent dyspnea and ongoing exacerbations, or symptom review)";
});
updateItem('Week3_Patient_C_Thursday', '1B.1', item => {
  item.fullCredit = "Documents patient reports persistent or rougher shortness of breath (or reduced SOB if documented)";
});
updateItem('Week3_Patient_C_Thursday', '1B.2', item => {
  item.fullCredit = "Documents wheezing status (persistent wheezing or reduced wheezing)";
});
updateItem('Week3_Patient_C_Thursday', '1B.3', item => {
  item.fullCredit = "Documents nighttime symptoms status (waking with cough/wheezing or improved awakenings)";
});
updateItem('Week3_Patient_C_Thursday', '1B.4', item => {
  item.fullCredit = "Documents exercise tolerance status (persistent limitation or improvement)";
});
updateItem('Week3_Patient_C_Thursday', '1B.5', item => {
  item.fullCredit = "Documents albuterol rescue use frequency (frequent reliance several times weekly / daily PRN)";
});
updateItem('Week3_Patient_C_Thursday', '1B.6', item => {
  item.fullCredit = "Documents exacerbation history: 2 exacerbations in past 12 months (one hospitalization) or recent flares";
});
updateItem('Week3_Patient_C_Thursday', '1C.1', item => {
  item.fullCredit = "Lists asthma in PMH or problem list";
});
updateItem('Week3_Patient_C_Thursday', '1C.2', item => {
  item.fullCredit = "Lists COPD in PMH or problem list with duration (~8 years)";
});
updateItem('Week3_Patient_C_Thursday', '1C.12', item => {
  item.fullCredit = "Documents childhood onset of asthma";
});
updateItem('Week3_Patient_C_Thursday', '1D.8', item => {
  item.fullCredit = "Confirms denial of recreational/illicit drug use";
});
updateItem('Week3_Patient_C_Thursday', '1D.9', item => {
  item.fullCredit = "Documents physical activity status (limited by dyspnea / walking status)";
});
updateItem('Week3_Patient_C_Thursday', '1E.3', item => {
  item.fullCredit = "Documents inhaled maintenance regimen (Symbicort + Spiriva or Trelegy Ellipta 100/62.5/25 mcg daily)";
});
updateItem('Week3_Patient_C_Thursday', '1E.4b', item => {
  item.fullCredit = "Documents biologic therapy: anti-IL-5 mepolizumab (Nucala 100 mg SQ q4w) initiated or continued";
});
updateItem('Week3_Patient_C_Thursday', '1F.1', item => {
  item.fullCredit = "Documents breathing tightness and uncontrolled allergic rhinitis symptoms";
});
updateItem('Week3_Patient_C_Thursday', '1F.2', item => {
  item.fullCredit = "Notes patient-reported association between allergy control and respiratory symptoms";
});
updateItem('Week3_Patient_C_Thursday', '1F.3b', item => {
  item.fullCredit = "Documents allergic rhinitis status (uncontrolled/worsening after stopping fluticasone, or managed on cetirizine/spray)";
});
updateItem('Week3_Patient_C_Thursday', '1G.1', item => {
  item.fullCredit = "Documents patient motivation and goals to improve respiratory symptom control and avoid flares";
});
updateItem('Week3_Patient_C_Thursday', '1G.4', item => {
  item.fullCredit = "Documents patient recognition of the connection between allergy symptoms and breathing tightness";
});
updateItem('Week3_Patient_C_Thursday', '2B.4', item => {
  item.fullCredit = "Documents albuterol rescue use frequency in objective evaluation";
});
updateItem('Week3_Patient_C_Thursday', '2B.5', item => {
  item.fullCredit = "Documents absolute blood eosinophils 380 cells/µL representing persistent Type 2 inflammation";
});
updateItem('Week3_Patient_C_Thursday', '2B.7', item => {
  item.fullCredit = "Documents albuterol rescue use frequency alongside biologic therapy evaluation";
});
updateItem('Week3_Patient_C_Thursday', '2C.2', item => {
  item.fullCredit = "Interprets FEV1/FVC 0.57 against <0.70 threshold confirming persistent airflow obstruction";
});
updateItem('Week3_Patient_C_Thursday', '2C.3', item => {
  item.fullCredit = "Classifies FEV1 1.45 L (58% predicted) as GOLD Grade 2 moderate obstruction";
});
updateItem('Week3_Patient_C_Thursday', '2C.4', item => {
  item.fullCredit = "Interprets blood eosinophils 380 cells/µL as elevated in Type 2 inflammation context (>=300 threshold)";
});
updateItem('Week3_Patient_C_Thursday', '2C.5', item => {
  item.fullCredit = "Interprets SpO2 96% on room air as adequate within chronic respiratory context";
});
updateItem('Week3_Patient_C_Thursday', '2C.6', item => {
  item.fullCredit = "Interprets ACT 14 (poorly controlled) and CAT 15-17 (high symptom burden), with trend comparison";
});
updateItem('Week3_Patient_C_Thursday', '3A.1', item => {
  item.fullCredit = "Identifies Asthma-COPD Overlap (ACO) phenotype in Assessment";
});
updateItem('Week3_Patient_C_Thursday', '3A.3', item => {
  item.fullCredit = "Interprets ACT score 14 as poorly controlled asthma (<20 threshold)";
});
updateItem('Week3_Patient_C_Thursday', '3A.4', item => {
  item.fullCredit = "Documents frequent rescue inhaler use frequency in Assessment";
});
updateItem('Week3_Patient_C_Thursday', '3A.5', item => {
  item.fullCredit = "Documents persistent dyspnea and symptom burden despite inhaled therapy";
});
updateItem('Week3_Patient_C_Thursday', '3A.6', item => {
  item.fullCredit = "Documents ongoing rescue inhaler reliance";
});
updateItem('Week3_Patient_C_Thursday', '3A.7', item => {
  item.fullCredit = "Documents exercise intolerance and exertional limitation";
});
updateItem('Week3_Patient_C_Thursday', '3A.13', item => {
  item.fullCredit = "Recommends escalation/referral for biologic therapy (mepolizumab) for persistent uncontrolled disease with high eosinophils OR states goal of achieving remission";
});
updateItem('Week3_Patient_C_Thursday', '3B.4', item => {
  item.fullCredit = "Lists rhinorrhea / nasal congestion as symptoms of active allergic rhinitis";
});
updateItem('Week3_Patient_C_Thursday', '3B.6', item => {
  item.fullCredit = "Lists sneezing / nasal itching as active allergic rhinitis symptoms";
});
updateItem('Week3_Patient_C_Thursday', '3B.9', item => {
  item.fullCredit = "Addresses differential attribution of symptoms between allergic rhinitis flare and ACO progression";
});
updateItem('Week3_Patient_C_Thursday', '3B.10', item => {
  item.fullCredit = "Recommends restarting fluticasone propionate nasal spray for allergic rhinitis to optimize upper airway control";
});
updateItem('Week3_Patient_C_Thursday', '3B.11', item => {
  item.fullCredit = "Notes correlation between allergic rhinitis worsening and increased respiratory symptoms";
});
updateItem('Week3_Patient_C_Thursday', '3C.1', item => {
  item.fullCredit = "Identifies eosinophilic airway inflammation (eosinophils 380 cells/µL) as a problem in Assessment";
});
updateItem('Week3_Patient_C_Thursday', '3C.2', item => {
  item.fullCredit = "Assesses stability of eosinophilic inflammation";
});
updateItem('Week3_Patient_C_Thursday', '3C.3', item => {
  item.fullCredit = "Discusses absolute eosinophil count (380 cells/µL) in context of ongoing exacerbation risk";
});
updateItem('Week3_Patient_C_Thursday', '3C.4', item => {
  item.fullCredit = "Explains persistent Type 2 inflammation mechanism driving airway reactivity";
});
updateItem('Week3_Patient_C_Thursday', '3C.5', item => {
  item.fullCredit = "Connects clinical course to need for targeted eosinophil-depleting biologic therapy";
});
updateItem('Week3_Patient_C_Thursday', '3C.6', item => {
  item.fullCredit = "Cites GINA 2025 treatable trait framework for eosinophilic airway disease";
});
updateItem('Week3_Patient_C_Thursday', '3C.8', item => {
  item.fullCredit = "Provides clinical basis for biologic therapy (mepolizumab) in patients with eosinophils >=300 cells/µL and recurrent flares";
});
updateItem('Week3_Patient_C_Thursday', '3D.4', item => {
  item.fullCredit = "Documents exacerbation history: 2 exacerbations in past 12 months (one requiring hospitalization)";
});
updateItem('Week3_Patient_C_Thursday', '3D.9', item => {
  item.fullCredit = "States rationale for continued close longitudinal monitoring of exacerbations";
});
updateItem('Week3_Patient_C_Thursday', '3E.2', item => {
  item.fullCredit = "Links skeletal / osteopenia risk to cumulative oral corticosteroid exposure";
});
updateItem('Week3_Patient_C_Thursday', '3E.4', item => {
  item.fullCredit = "Addresses continuation of calcium carbonate + vitamin D in Assessment";
});
updateItem('Week3_Patient_C_Thursday', '3E.5', item => {
  item.fullCredit = "Explicitly states continuation of calcium + vitamin D supplementation in Plan";
});
updateItem('Week3_Patient_C_Thursday', '3E.6', item => {
  item.fullCredit = "Confirms appropriateness of continued bone density monitoring (DEXA)";
});
updateItem('Week3_Patient_C_Thursday', '3F.1', item => {
  item.fullCredit = "Identifies preventive care / immunization gaps as a distinct problem in Assessment";
});
updateItem('Week3_Patient_C_Thursday', '3F.2', item => {
  item.fullCredit = "Identifies RSV vaccination gap (indicated for chronic lung disease)";
});
updateItem('Week3_Patient_C_Thursday', '3F.3', item => {
  item.fullCredit = "Identifies Tdap booster overdue status (>10 years ago)";
});
updateItem('Week3_Patient_C_Thursday', '3F.4', item => {
  item.fullCredit = "States importance of respiratory vaccines in preventing acute exacerbations";
});
updateItem('Week3_Patient_C_Thursday', '3F.6', item => {
  item.fullCredit = "Recommends preventive care optimization and record review";
});
updateItem('Week3_Patient_C_Thursday', '4A.4', item => {
  item.fullCredit = "Explicitly states continuation of albuterol HFA for PRN rescue in Plan";
});
updateItem('Week3_Patient_C_Thursday', '4A.5', item => {
  item.fullCredit = "Continues baseline triple inhaled maintenance therapy (Trelegy Ellipta or Symbicort + Spiriva) alongside biologic evaluation";
});
updateItem('Week3_Patient_C_Thursday', '4A.6', item => {
  item.fullCredit = "Reinforces daily medication adherence in Plan";
});
updateItem('Week3_Patient_C_Thursday', '4A.7', item => {
  item.fullCredit = "Reinforces inhaler technique in Plan";
});
updateItem('Week3_Patient_C_Thursday', '4A.8', item => {
  item.fullCredit = "Initiates or continues mepolizumab (Nucala 100 mg SQ q4 weeks) as targeted add-on biologic therapy";
});
updateItem('Week3_Patient_C_Thursday', '4B.4', item => {
  item.fullCredit = "Counsels on consistent daily use of intranasal fluticasone spray even as symptoms improve";
});
updateItem('Week3_Patient_C_Thursday', '4B.5', item => {
  item.fullCredit = "Reviews allergen avoidance strategies in Plan";
});
updateItem('Week3_Patient_C_Thursday', '4B.6', item => {
  item.fullCredit = "Restarts fluticasone propionate nasal spray (1-2 sprays each nostril daily) to control allergic rhinitis";
});
updateItem('Week3_Patient_C_Thursday', '4C.1', item => {
  item.fullCredit = "Plans monitoring of ACT score at follow-up";
});
updateItem('Week3_Patient_C_Thursday', '4C.2', item => {
  item.fullCredit = "Plans monitoring of CAT score at follow-up";
});
updateItem('Week3_Patient_C_Thursday', '4C.3', item => {
  item.fullCredit = "Plans monitoring of rescue inhaler use frequency";
});
updateItem('Week3_Patient_C_Thursday', '4C.4', item => {
  item.fullCredit = "Plans monitoring of nighttime awakenings";
});
updateItem('Week3_Patient_C_Thursday', '4C.7', item => {
  item.fullCredit = "Plans monitoring of medication adherence";
});
updateItem('Week3_Patient_C_Thursday', '4C.8', item => {
  item.fullCredit = "Plans monitoring of inhaler technique and administration";
});
updateItem('Week3_Patient_C_Thursday', '4C.9', item => {
  item.fullCredit = "Presents structured monitoring plan covering respiratory and safety parameters";
});
updateItem('Week3_Patient_C_Thursday', '4C.10', item => {
  item.fullCredit = "Monitors respiratory control, allergic rhinitis symptoms, and adherence";
});
updateItem('Week3_Patient_C_Thursday', '4D.1', item => {
  item.fullCredit = "Specifies albuterol HFA rescue regimen (2 puffs q4-6h PRN)";
});
updateItem('Week3_Patient_C_Thursday', '4E.1', item => {
  item.fullCredit = "Recommends RSV vaccination (Arexvy or Abrysvo)";
});
updateItem('Week3_Patient_C_Thursday', '4E.2', item => {
  item.fullCredit = "Recommends Tdap booster (overdue >10 years)";
});
updateItem('Week3_Patient_C_Thursday', '4E.3', item => {
  item.fullCredit = "Plans vaccination status review at next visit";
});
updateItem('Week3_Patient_C_Thursday', '4E.4', item => {
  item.fullCredit = "Includes preventive care recommendations in Plan";
});
updateItem('Week3_Patient_C_Thursday', '4F.1', item => {
  item.fullCredit = "Specifies follow-up interval (e.g., 4 weeks or 1-3 months)";
});
updateItem('Week3_Patient_C_Thursday', '4F.2', item => {
  item.fullCredit = "Plans reassessment of asthma/COPD symptom control at follow-up";
});
updateItem('Week3_Patient_C_Thursday', '4F.5', item => {
  item.fullCredit = "States plan for continued longitudinal ACO management";
});
updateItem('Week3_Patient_C_Thursday', '4F.6', item => {
  item.fullCredit = "Includes structured follow-up plan in note";
});
updateItem('Week3_Patient_C_Thursday', '5A.3', item => {
  item.fullCredit = "Assessment identifies key problems (ACO, rhinitis, eosinophilic disease, preventive care)";
});
updateItem('Week3_Patient_C_Thursday', '5A.4', item => {
  item.fullCredit = "Plan aligns with assessed problems including allergic rhinitis management";
});
updateItem('Week3_Patient_C_Thursday', '5B.3', item => {
  item.fullCredit = "Reports and interprets ACT (14, poorly controlled) and CAT (15-17, high burden) scores";
});
updateItem('Week3_Patient_C_Thursday', '5B.4', item => {
  item.fullCredit = "Provides concrete, actionable plan details including specific agents, doses, and routes";
});
updateItem('Week3_Patient_C_Thursday', '5C.2', item => {
  item.fullCredit = "Cites GINA 2025 and/or GOLD 2026 guideline rationale for ACO management";
});
updateItem('Week3_Patient_C_Thursday', '5C.3', item => {
  item.fullCredit = "Explicitly states continuation of existing triple inhaled therapy alongside biologic therapy";
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
console.log('Successfully updated Maria Thompson rubrics in granular_rubrics.json and normalized points!');
