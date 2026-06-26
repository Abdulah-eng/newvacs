// Week 3 Monday quiz — Asthma + COPD, grounded in the Asthma & COPD teaching
// summaries, GINA 2025, GOLD 2026, and the Patient A/B/C cases.
// Representative 10-item sample.

export const PASS_THRESHOLD = 90

export const QUIZ_ITEMS = [
  // ------------------------------- ASTHMA -------------------------------
  {
    id: "ASTHMA-001", disease: "Asthma", type: "sba", concept_tag: "asthma_diagnosis",
    stem: "A 34-year-old patient reports recurrent wheezing, shortness of breath, and chest tightness that vary over time and worsen during allergy season and physical activity. Spirometry shows an FEV1 increase of 14% and 280 mL after bronchodilator administration. Which interpretation is most appropriate?",
    options: [
      { key: "a", text: "The findings support asthma because symptoms are compatible and bronchodilator reversibility is present" },
      { key: "b", text: "The findings rule out asthma because symptoms are not constant every day" },
      { key: "c", text: "The findings support COPD because any bronchodilator response confirms COPD" },
      { key: "d", text: "The findings are insufficient because asthma is diagnosed by symptoms alone" },
    ],
    correct: ["a"],
    rationale: "Asthma is supported by variable respiratory symptoms plus objective evidence of variable airflow limitation. A bronchodilator response meeting both ≥12% and ≥200 mL supports asthma.",
  },
  {
    id: "ASTHMA-002", disease: "Asthma", type: "sba", concept_tag: "asthma_symptom_control",
    stem: "A patient reports asthma symptoms 5 days per week, nighttime awakenings twice weekly, reliever inhaler use daily, and limitation with exercise. How should this patient’s asthma control be classified?",
    options: [
      { key: "a", text: "Well controlled" },
      { key: "b", text: "Partly controlled" },
      { key: "c", text: "Uncontrolled" },
      { key: "d", text: "Controlled because there were no hospitalizations" },
    ],
    correct: ["c"],
    rationale: "Uncontrolled asthma is present when three or four symptom-control criteria are not met. This patient has frequent symptoms, nighttime awakenings, frequent reliever use, and activity limitation.",
  },
  {
    id: "ASTHMA-003", disease: "Asthma", type: "ktype", concept_tag: "asthma_control_assessment",
    stem: "Which elements are part of asthma symptom-control assessment?\n  I. Daytime symptom frequency\n  II. Nighttime awakenings\n  III. Reliever medication use\n  IV. Activity limitation",
    options: [
      { key: "a", text: "I only" },
      { key: "b", text: "I and II only" },
      { key: "c", text: "II and III only" },
      { key: "d", text: "I, II, III, and IV" },
    ],
    correct: ["d"],
    rationale: "Asthma symptom-control assessment includes daytime symptoms, nighttime awakenings, reliever use, and activity limitation over the past 4 weeks.",
  },
  {
    id: "ASTHMA-004", disease: "Asthma", type: "sba", concept_tag: "asthma_reliever_overuse",
    stem: "A patient with asthma uses an albuterol inhaler 4 to 5 times per week for symptom relief but denies nighttime awakenings or activity limitation. How should this be interpreted?",
    options: [
      { key: "a", text: "The asthma is well controlled because they do not wake up at night" },
      { key: "b", text: "The asthma is uncontrolled due to excessive reliever use, indicating need for controller therapy escalation" },
      { key: "c", text: "The albuterol is working well, so continue the current regimen" },
      { key: "d", text: "The patient should switch to a different short-acting bronchodilator" },
    ],
    correct: ["b"],
    rationale: "Reliever use ≥2 days per week is a criterion for partly or uncontrolled asthma. Excessive albuterol use indicates underlying inflammation that requires initiation or escalation of controller therapy, not just continuing a rescue inhaler.",
  },
  {
    id: "ASTHMA-005", disease: "Asthma", type: "sata", concept_tag: "asthma_smart_therapy",
    stem: "Which statements regarding Single Maintenance And Reliever Therapy (SMART) in asthma are accurate? Select all that apply.",
    options: [
      { key: "a", text: "It uses a low-dose ICS-formoterol inhaler as both the daily controller and the as-needed reliever" },
      { key: "b", text: "It reduces the risk of severe exacerbations compared with using a SABA reliever alone" },
      { key: "c", text: "It relies on formoterol's rapid onset of action" },
      { key: "d", text: "It is only appropriate for COPD, not asthma" },
    ],
    correct: ["a", "b", "c"],
    rationale: "SMART uses ICS-formoterol for both maintenance and reliever therapy. Formoterol acts quickly like albuterol but provides long-acting bronchodilation, and combining it with an ICS ensures patients receive anti-inflammatory therapy whenever they experience symptoms, reducing exacerbations.",
  },

  // ------------------------------- COPD -------------------------------
  {
    id: "COPD-001", disease: "COPD", type: "sba", concept_tag: "copd_diagnosis",
    stem: "A 62-year-old former smoker presents with chronic cough and progressive shortness of breath. Which test is required to confirm a diagnosis of COPD?",
    options: [
      { key: "a", text: "Chest X-ray showing hyperinflation" },
      { key: "b", text: "Blood eosinophil count" },
      { key: "c", text: "Spirometry demonstrating a post-bronchodilator FEV1/FVC ratio <0.70" },
      { key: "d", text: "Computed tomography (CT) scan of the chest" },
    ],
    correct: ["c"],
    rationale: "COPD diagnosis requires spirometry demonstrating persistent airflow limitation, defined as a post-bronchodilator FEV1/FVC ratio <0.70 in the appropriate clinical context.",
  },
  {
    id: "COPD-002", disease: "COPD", type: "sba", concept_tag: "copd_initial_therapy",
    stem: "A patient with newly diagnosed COPD has an mMRC score of 3, a CAT score of 18, and no exacerbations in the past year. What is the preferred initial pharmacologic therapy according to GOLD guidelines?",
    options: [
      { key: "a", text: "Short-acting beta-agonist (SABA) as needed" },
      { key: "b", text: "Inhaled corticosteroid (ICS) monotherapy" },
      { key: "c", text: "Long-acting muscarinic antagonist (LAMA) + Long-acting beta-agonist (LABA) combination" },
      { key: "d", text: "Oral corticosteroids" },
    ],
    correct: ["c"],
    rationale: "For highly symptomatic patients (Group E or highly symptomatic Group B), a LABA/LAMA combination is the preferred initial maintenance therapy to optimize bronchodilation and symptom relief.",
  },
  {
    id: "COPD-003", disease: "COPD", type: "sata", concept_tag: "copd_exacerbation_risk",
    stem: "Which factors indicate a high risk for future COPD exacerbations? Select all that apply.",
    options: [
      { key: "a", text: "Two or more moderate exacerbations in the past year" },
      { key: "b", text: "One exacerbation requiring hospital admission in the past year" },
      { key: "c", text: "Using a rescue inhaler once a month" },
      { key: "d", text: "A blood eosinophil count of 150 cells/µL" },
    ],
    correct: ["a", "b"],
    rationale: "High exacerbation risk is defined by GOLD as ≥2 moderate exacerbations or ≥1 severe exacerbation (leading to hospitalization) in the previous year. The best predictor of future exacerbations is a history of past exacerbations.",
  },
  {
    id: "COPD-004", disease: "COPD", type: "sba", concept_tag: "copd_ics_role",
    stem: "In which clinical scenario is the addition of an inhaled corticosteroid (ICS) most strongly supported for a patient with COPD?",
    options: [
      { key: "a", text: "A patient with mild symptoms and no exacerbation history" },
      { key: "b", text: "A patient with frequent exacerbations and a blood eosinophil count of 450 cells/µL" },
      { key: "c", text: "A patient with a blood eosinophil count of 50 cells/µL" },
      { key: "d", text: "A patient with a history of recurrent pneumonias" },
    ],
    correct: ["b"],
    rationale: "ICS therapy is supported in COPD primarily for patients with frequent exacerbations and elevated blood eosinophils (≥300 cells/µL), as this indicates eosinophilic airway inflammation that responds to corticosteroids.",
  },
  {
    id: "COPD-005", disease: "COPD", type: "ktype", concept_tag: "copd_aco_overlap",
    stem: "A patient with a long smoking history presents with features of both asthma and COPD. Which statements regarding Asthma-COPD Overlap (ACO) are accurate?\n  I. Patients often have persistent airflow limitation alongside significant bronchodilator reversibility\n  II. Inhaled corticosteroids (ICS) are a mandatory component of therapy\n  III. LABA monotherapy should be avoided without ICS\n  IV. Biologic therapies are never appropriate",
    options: [
      { key: "a", text: "I and II only" },
      { key: "b", text: "II and III only" },
      { key: "c", text: "I, II, and III only" },
      { key: "d", text: "I, II, III, and IV" },
    ],
    correct: ["c"],
    rationale: "ACO patients have features of both diseases (I). Because of the asthma component, ICS therapy is essential (II), and LABA monotherapy without ICS is unsafe in asthma and should be avoided in ACO (III). Biologics may be appropriate for severe eosinophilic overlap disease (IV is incorrect).",
  }
]
