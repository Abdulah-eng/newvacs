// Week 3 Monday quiz

export const PASS_THRESHOLD = 90;

export const QUIZ_ITEMS = [
  {
    "id": "ASTHMA-001",
    "disease": "Asthma",
    "concept_tag": "asthma_diagnosis",
    "type": "sba",
    "stem": "A 34-year-old patient reports recurrent wheezing, shortness of breath, and chest tightness that vary over time and worsen during allergy season and physical activity. Spirometry shows an FEV1 increase of 14% and 280 mL after bronchodilator administration. Which interpretation is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "The findings support asthma because symptoms are compatible and bronchodilator reversibility is present"
      },
      {
        "key": "b",
        "text": "The findings rule out asthma because symptoms are not constant every day"
      },
      {
        "key": "c",
        "text": "The findings support COPD because any bronchodilator response confirms COPD"
      },
      {
        "key": "d",
        "text": "The findings are insufficient because asthma is diagnosed by symptoms alone"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nAsthma is supported by variable respiratory symptoms plus objective evidence of variable airflow limitation. A bronchodilator response meeting both ≥12% and ≥200 mL supports asthma."
  },
  {
    "id": "ASTHMA-002",
    "disease": "Asthma",
    "concept_tag": "asthma_symptom_control",
    "type": "sba",
    "stem": "A patient reports asthma symptoms 5 days per week, nighttime awakenings twice weekly, reliever inhaler use daily, and limitation with exercise. How should this patient’s asthma control be classified?",
    "options": [
      {
        "key": "a",
        "text": "Well controlled"
      },
      {
        "key": "b",
        "text": "Partly controlled"
      },
      {
        "key": "c",
        "text": "Uncontrolled"
      },
      {
        "key": "d",
        "text": "Controlled because there were no hospitalizations"
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": "Correct Answer: C\n\nUncontrolled asthma is present when three or four symptom-control criteria are not met. This patient has frequent symptoms, nighttime awakenings, frequent reliever use, and activity limitation."
  },
  {
    "id": "ASTHMA-003",
    "disease": "Asthma",
    "concept_tag": "asthma_control_assessment",
    "type": "ktype",
    "stem": "Which elements are part of asthma symptom-control assessment?\n\nI. Daytime symptom frequency\n\nII. Nighttime awakenings\n\nIII. Reliever medication use\n\nIV. Activity limitation",
    "options": [
      {
        "key": "a",
        "text": "I only"
      },
      {
        "key": "b",
        "text": "I and II only"
      },
      {
        "key": "c",
        "text": "II and III only"
      },
      {
        "key": "d",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "d"
    ],
    "rationale": "Correct Answer: D\n\nAsthma control assessment includes daytime symptoms, nighttime awakening, reliever use, and activity limitation."
  },
  {
    "id": "ASTHMA-004",
    "disease": "Asthma",
    "concept_tag": "ics_containing_therapy",
    "type": "sba",
    "stem": "A patient with asthma currently uses only albuterol as needed and reports symptoms several days per week. What is the most important medication-related issue?",
    "options": [
      {
        "key": "a",
        "text": "The patient lacks ICS-containing therapy"
      },
      {
        "key": "b",
        "text": "The patient should use albuterol on a fixed daily schedule"
      },
      {
        "key": "c",
        "text": "The patient should stop all reliever therapy"
      },
      {
        "key": "d",
        "text": "The patient should be treated with LAMA monotherapy"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nModern asthma management emphasizes ICS-containing therapy because asthma is an inflammatory airway disease and SABA-only therapy does not address airway inflammation or future exacerbation risk."
  },
  {
    "id": "ASTHMA-005",
    "disease": "Asthma",
    "concept_tag": "smart_mart_therapy",
    "type": "sba",
    "stem": "Which statement best describes SMART/MART therapy?",
    "options": [
      {
        "key": "a",
        "text": "ICS-formoterol is used for both daily maintenance and symptom relief"
      },
      {
        "key": "b",
        "text": "Albuterol is used daily to prevent airway inflammation"
      },
      {
        "key": "c",
        "text": "Oral corticosteroids are used monthly to prevent asthma symptoms"
      },
      {
        "key": "d",
        "text": "Tiotropium is used alone as both controller and reliever therapy"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nSMART/MART uses an ICS-formoterol inhaler for both maintenance treatment and symptom relief."
  },
  {
    "id": "ASTHMA-006",
    "disease": "Asthma",
    "concept_tag": "future_exacerbation_risk",
    "type": "sata",
    "stem": "Which factors increase a patient’s future risk of asthma exacerbations?",
    "options": [
      {
        "key": "a",
        "text": "Previous severe exacerbation"
      },
      {
        "key": "b",
        "text": "Excessive SABA use"
      },
      {
        "key": "c",
        "text": "Poor adherence"
      },
      {
        "key": "d",
        "text": "Incorrect inhaler technique"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nPrior exacerbations, excessive SABA use, poor adherence, and incorrect inhaler technique are all risk factors for future asthma exacerbations."
  },
  {
    "id": "ASTHMA-007",
    "disease": "Asthma",
    "concept_tag": "inhaler_technique_and_adherence",
    "type": "sba",
    "stem": "A patient remains symptomatic after starting ICS-formoterol therapy. Before escalating asthma therapy, what should the pharmacist assess first?",
    "options": [
      {
        "key": "a",
        "text": "Adherence and inhaler technique"
      },
      {
        "key": "b",
        "text": "Family history only"
      },
      {
        "key": "c",
        "text": "Whether the patient needs scheduled albuterol"
      },
      {
        "key": "d",
        "text": "Whether ICS-containing therapy should be stopped"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nPoor control is often due to implementation issues such as missed doses, incorrect technique, cost barriers, or misunderstanding of the regimen. These should be assessed before labeling therapy as ineffective."
  },
  {
    "id": "ASTHMA-008",
    "disease": "Asthma",
    "concept_tag": "patient_a_tuesday_initial_visit",
    "type": "sba",
    "stem": "A 34-year-old patient with asthma and allergic rhinitis. At her initial visit, she has ACT 16, frequent rescue inhaler use, activity limitation, and no controller therapy. What is the most appropriate therapeutic direction?",
    "options": [
      {
        "key": "a",
        "text": "Initiate ICS-containing therapy, such as low-dose ICS-formoterol SMART/MART"
      },
      {
        "key": "b",
        "text": "Continue albuterol alone because she has no recent hospitalization"
      },
      {
        "key": "c",
        "text": "Start LABA/LAMA without ICS"
      },
      {
        "key": "d",
        "text": "Start biologic therapy immediately"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nThe patient has poorly controlled asthma and is not receiving controller therapy. An ICS-containing regimen is indicated, and SMART/MART is an appropriate preferred strategy when available."
  },
  {
    "id": "ASTHMA-009",
    "disease": "Asthma",
    "concept_tag": "patient_a_wednesday_follow_up",
    "type": "sba",
    "stem": "At a 3-month follow-up, her ACT score has improved to 21 and she reports symptoms only once or twice weekly. However, possible inhaler technique deficiencies are identified. What is the best next step?",
    "options": [
      {
        "key": "a",
        "text": "Continue current SMART therapy and correct inhaler technique"
      },
      {
        "key": "b",
        "text": "Stop ICS-formoterol because asthma is improved"
      },
      {
        "key": "c",
        "text": "Escalate directly to biologic therapy"
      },
      {
        "key": "d",
        "text": "Switch to albuterol-only therapy"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nThe patient’s asthma is improved and well controlled by ACT. Remaining symptoms should prompt inhaler technique reassessment and education rather than unnecessary escalation."
  },
  {
    "id": "ASTHMA-010",
    "disease": "Asthma",
    "concept_tag": "patient_a_thursday_follow_up",
    "type": "sba",
    "stem": "At a 6-month follow-up, her ACT score is 22 and day-to-day symptoms remain well controlled. She had one viral-triggered exacerbation 6 weeks ago that resolved after a 5-day prednisone course. What is the best assessment?",
    "options": [
      {
        "key": "a",
        "text": "Well-controlled day-to-day asthma with one isolated viral-triggered exacerbation"
      },
      {
        "key": "b",
        "text": "Persistent uncontrolled asthma requiring biologic therapy"
      },
      {
        "key": "c",
        "text": "COPD exacerbation requiring LABA/LAMA therapy"
      },
      {
        "key": "d",
        "text": "Treatment failure requiring discontinuation of ICS-formoterol"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nThe patient’s daily asthma control remains strong. A single viral-triggered exacerbation should prompt action-plan reinforcement and monitoring, but it does not automatically mean persistent uncontrolled asthma."
  },
  {
    "id": "ASTHMA-011",
    "disease": "Asthma",
    "concept_tag": "allergic_rhinitis_and_asthma_control",
    "type": "sba",
    "stem": "A patient with asthma reports worsening nasal congestion, sneezing, and postnasal drainage after stopping fluticasone nasal spray. She notices her breathing worsens when allergies flare. What is the best interpretation?",
    "options": [
      {
        "key": "a",
        "text": "Allergic rhinitis may be contributing to lower airway symptoms"
      },
      {
        "key": "b",
        "text": "Asthma therapy must automatically be escalated to biologic therapy"
      },
      {
        "key": "c",
        "text": "Allergic rhinitis is unrelated to asthma symptoms"
      },
      {
        "key": "d",
        "text": "The patient should stop all nasal therapy"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nUpper airway disease can worsen asthma symptoms. Before escalating pulmonary therapy, comorbid contributors such as allergic rhinitis should be assessed and optimized."
  },
  {
    "id": "ASTHMA-012",
    "disease": "Asthma",
    "concept_tag": "ics_safety_counseling",
    "type": "sba",
    "stem": "A patient starting an inhaled corticosteroid-containing inhaler asks about common local adverse effects. Which counseling point is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Oral candidiasis and dysphonia may occur, so proper technique and mouth rinsing are important"
      },
      {
        "key": "b",
        "text": "Inhaled corticosteroids commonly cause immediate severe hypoglycemia"
      },
      {
        "key": "c",
        "text": "Inhaled corticosteroids eliminate the need for monitoring symptoms"
      },
      {
        "key": "d",
        "text": "Inhaled corticosteroids should be stopped as soon as symptoms improve"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nICS adverse effects include local effects such as oral candidiasis and dysphonia. Counseling should include proper inhaler technique and mouth rinsing when appropriate."
  },
  {
    "id": "ASTHMA-013",
    "disease": "Asthma",
    "concept_tag": "systemic_corticosteroid_stewardship",
    "type": "sata",
    "stem": "Which adverse effects are associated with systemic corticosteroid exposure in the Week 3 asthma materials?",
    "options": [
      {
        "key": "a",
        "text": "Hyperglycemia"
      },
      {
        "key": "b",
        "text": "Hypertension"
      },
      {
        "key": "c",
        "text": "Osteoporosis"
      },
      {
        "key": "d",
        "text": "Weight gain"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nSystemic corticosteroids can contribute to hyperglycemia, hypertension, osteoporosis, and weight gain. Repeated steroid bursts should prompt efforts to reduce future exacerbation and steroid exposure."
  },
  {
    "id": "ASTHMA-014",
    "disease": "Asthma",
    "concept_tag": "severe_asthma_referral_concepts",
    "type": "sata",
    "stem": "Which findings should prompt consideration of referral for severe asthma or biologic evaluation?",
    "options": [
      {
        "key": "a",
        "text": "Persistent uncontrolled asthma despite optimized inhaled therapy"
      },
      {
        "key": "b",
        "text": "Recurrent exacerbations"
      },
      {
        "key": "c",
        "text": "High systemic corticosteroid burden"
      },
      {
        "key": "d",
        "text": "Evidence of Type 2 inflammation"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nStudents are not expected to independently select every biologic, but they should recognize referral candidates with persistent uncontrolled disease, recurrent exacerbations, high steroid burden, and Type 2 inflammation."
  },
  {
    "id": "ASTHMA-015",
    "disease": "Asthma",
    "concept_tag": "asthma_copd_overlap_safety",
    "type": "sba",
    "stem": "A 55-year-old patient has childhood asthma, COPD, persistent post-bronchodilator obstruction, bronchodilator reversibility, elevated eosinophils, and recurrent exacerbations. Which treatment principle is most important?",
    "options": [
      {
        "key": "a",
        "text": "Use ICS-containing therapy because asthma features are present"
      },
      {
        "key": "b",
        "text": "Avoid ICS because any COPD diagnosis makes ICS unsafe"
      },
      {
        "key": "c",
        "text": "Use LABA/LAMA without ICS because COPD features override asthma features"
      },
      {
        "key": "d",
        "text": "Treat with albuterol only because overlap disease cannot be managed with maintenance inhalers"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nPatients with asthma-COPD overlap or asthma features should not be treated with LABA and/or LAMA without ICS. ICS-containing therapy is essential for asthma safety."
  },
  {
    "id": "ASTHMA-016",
    "disease": "Asthma",
    "concept_tag": "asthma_monitoring",
    "type": "sata",
    "stem": "Which monitoring parameters are appropriate for asthma follow-up?",
    "options": [
      {
        "key": "a",
        "text": "Asthma Control Test score"
      },
      {
        "key": "b",
        "text": "Symptom frequency"
      },
      {
        "key": "c",
        "text": "Reliever use"
      },
      {
        "key": "d",
        "text": "Exacerbation history"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nAsthma follow-up should monitor symptom control, reliever use, exacerbations, and validated control tools such as ACT when available."
  },
  {
    "id": "ASTHMA-017",
    "disease": "Asthma",
    "concept_tag": "gina_track_1",
    "type": "sba",
    "stem": "Which statement best reflects the GINA Track 1 preferred approach for adults and adolescents?",
    "options": [
      {
        "key": "a",
        "text": "Low-dose ICS-formoterol is used as the reliever, with or without maintenance ICS-formoterol depending on treatment step"
      },
      {
        "key": "b",
        "text": "SABA is preferred as the only reliever for all adults with asthma"
      },
      {
        "key": "c",
        "text": "Oral prednisone is preferred as the reliever for persistent symptoms"
      },
      {
        "key": "d",
        "text": "ICS-formoterol should never be used for symptom relief"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nGINA Track 1 uses low-dose ICS-formoterol as the reliever. This approach reduces severe exacerbations and oral corticosteroid exposure compared with SABA-based regimens."
  },
  {
    "id": "ASTHMA-018",
    "disease": "Asthma",
    "concept_tag": "asthma_exacerbation_follow_up",
    "type": "sba",
    "stem": "After an asthma exacerbation treated in urgent care, which follow-up action is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Review the cause of the exacerbation, inhaler technique, adherence, and the asthma action plan"
      },
      {
        "key": "b",
        "text": "Stop ICS-containing therapy because the exacerbation resolved"
      },
      {
        "key": "c",
        "text": "Schedule albuterol every 4 hours indefinitely"
      },
      {
        "key": "d",
        "text": "Avoid asking about triggers because they do not affect future risk"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nAfter an exacerbation, follow-up should evaluate recovery, identify triggers and risk factors, review adherence and technique, and reinforce or provide an asthma action plan."
  },
  {
    "id": "ASTHMA-019",
    "disease": "Asthma",
    "concept_tag": "patient_counseling",
    "type": "ktype",
    "stem": "Which counseling points are appropriate for a patient starting ICS-formoterol SMART/MART?\n\nI. Explain which inhaler is used for daily maintenance\n\nII. Explain that the same inhaler may be used for symptom relief when prescribed as SMART/MART\n\nIII. Review inhaler technique\n\nIV. Review when to seek medical care for worsening symptoms",
    "options": [
      {
        "key": "a",
        "text": "I only"
      },
      {
        "key": "b",
        "text": "I and II only"
      },
      {
        "key": "c",
        "text": "II and III only"
      },
      {
        "key": "d",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "d"
    ],
    "rationale": "Correct Answer: D\n\nSMART/MART counseling should include maintenance use, reliever use, technique, and guidance on worsening symptoms or excessive reliever use."
  },
  {
    "id": "ASTHMA-020",
    "disease": "Asthma",
    "concept_tag": "patient_c_thursday_severe_eosinophilic_disease",
    "type": "sba",
    "stem": "A follow-up visit for a patient with Asthma-COPD overlap shows optimized inhaled therapy, excellent adherence, appropriate inhaler technique, controlled rhinitis, eosinophils 520 cells/µL, and five corticosteroid-treated exacerbations in the past year. What is the most appropriate clinical interpretation?",
    "options": [
      {
        "key": "a",
        "text": "Severe eosinophilic asthma-COPD overlap requiring biologic evaluation or initiation"
      },
      {
        "key": "b",
        "text": "Controlled disease requiring no therapy modification"
      },
      {
        "key": "c",
        "text": "Poor inhaler adherence as the most likely cause of exacerbations"
      },
      {
        "key": "d",
        "text": "Rhinitis-driven symptoms requiring only nasal spray adjustment"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nThe patient has recurrent steroid-treated exacerbations despite optimized inhaled therapy and persistent eosinophilic inflammation. This supports biologic evaluation or initiation and a steroid-sparing strategy."
  },
  {
    "id": "COPD-001",
    "disease": "COPD",
    "concept_tag": "copd_diagnosis",
    "type": "sba",
    "stem": "Which finding is required to confirm COPD in the appropriate clinical context?",
    "options": [
      {
        "key": "a",
        "text": "Post-bronchodilator FEV1/FVC <0.70"
      },
      {
        "key": "b",
        "text": "ACT score <20"
      },
      {
        "key": "c",
        "text": "Elevated eosinophils alone"
      },
      {
        "key": "d",
        "text": "Dyspnea without spirometry"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nCOPD diagnosis requires spirometric confirmation. Symptoms alone are insufficient."
  },
  {
    "id": "COPD-002",
    "disease": "COPD",
    "concept_tag": "gold_grouping",
    "type": "sba",
    "stem": "A COPD patient has high symptom burden but low exacerbation risk. Which GOLD group best fits this patient?",
    "options": [
      {
        "key": "a",
        "text": "Group A"
      },
      {
        "key": "b",
        "text": "Group B"
      },
      {
        "key": "c",
        "text": "Group E"
      },
      {
        "key": "d",
        "text": "Cannot classify without eosinophils"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": "Correct Answer: B\n\nGOLD Group B represents high symptoms with low exacerbation risk."
  },
  {
    "id": "COPD-003",
    "disease": "COPD",
    "concept_tag": "initial_copd_pharmacotherapy",
    "type": "sba",
    "stem": "Which initial maintenance therapy is recommended for a symptomatic GOLD Group B COPD patient?",
    "options": [
      {
        "key": "a",
        "text": "LABA + LAMA"
      },
      {
        "key": "b",
        "text": "ICS monotherapy"
      },
      {
        "key": "c",
        "text": "Scheduled albuterol only"
      },
      {
        "key": "d",
        "text": "Chronic oral prednisone"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nGOLD Group B initial therapy is LABA + LAMA."
  },
  {
    "id": "COPD-004",
    "disease": "COPD",
    "concept_tag": "gold_group_e",
    "type": "sba",
    "stem": "Which factor most strongly supports classification as GOLD Group E?",
    "options": [
      {
        "key": "a",
        "text": "Frequent exacerbations"
      },
      {
        "key": "b",
        "text": "No rescue inhaler use"
      },
      {
        "key": "c",
        "text": "Low symptom burden without exacerbations"
      },
      {
        "key": "d",
        "text": "Normal post-bronchodilator FEV1/FVC"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nGroup E identifies patients with frequent exacerbations and higher exacerbation risk."
  },
  {
    "id": "COPD-005",
    "disease": "COPD",
    "concept_tag": "blood_eosinophils",
    "type": "sba",
    "stem": "What is the role of blood eosinophils in COPD pharmacotherapy decisions?",
    "options": [
      {
        "key": "a",
        "text": "They help estimate likelihood of benefit from ICS-containing regimens"
      },
      {
        "key": "b",
        "text": "They independently diagnose COPD"
      },
      {
        "key": "c",
        "text": "They replace symptom assessment tools such as CAT"
      },
      {
        "key": "d",
        "text": "They determine whether all inhalers should be stopped"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nBlood eosinophils help estimate the likelihood that a patient may benefit from ICS-containing COPD therapy. They are one factor within the broader clinical assessment."
  },
  {
    "id": "COPD-006",
    "disease": "COPD",
    "concept_tag": "triple_therapy",
    "type": "sata",
    "stem": "Which medication classes are included in COPD triple therapy?",
    "options": [
      {
        "key": "a",
        "text": "LABA"
      },
      {
        "key": "b",
        "text": "LAMA"
      },
      {
        "key": "c",
        "text": "ICS"
      },
      {
        "key": "d",
        "text": "Chronic oral corticosteroid"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": "Correct Answer: A, B, C\n\nCOPD triple therapy consists of LABA + LAMA + ICS."
  },
  {
    "id": "COPD-007",
    "disease": "COPD",
    "concept_tag": "non_pharmacologic_management",
    "type": "sata",
    "stem": "Which interventions are essential non-pharmacologic components of COPD management?",
    "options": [
      {
        "key": "a",
        "text": "Smoking cessation"
      },
      {
        "key": "b",
        "text": "Vaccination assessment"
      },
      {
        "key": "c",
        "text": "Pulmonary rehabilitation when appropriate"
      },
      {
        "key": "d",
        "text": "Avoiding all physical activity"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": "Correct Answer: A, B, C\n\nCOPD management includes smoking cessation, vaccinations, and pulmonary rehabilitation to improve dyspnea, exercise capacity, and quality of life."
  },
  {
    "id": "COPD-008",
    "disease": "COPD",
    "concept_tag": "copd_monitoring",
    "type": "ktype",
    "stem": "Which monitoring parameters are appropriate for COPD follow-up?\n\nI. CAT score\n\nII. Exacerbation history\n\nIII. Rescue inhaler use\n\nIV. Activity tolerance",
    "options": [
      {
        "key": "a",
        "text": "I only"
      },
      {
        "key": "b",
        "text": "I and II only"
      },
      {
        "key": "c",
        "text": "II and III only"
      },
      {
        "key": "d",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "d"
    ],
    "rationale": "Correct Answer: D\n\nCOPD follow-up should include symptom burden, exacerbations, rescue medication use, and activity tolerance."
  },
  {
    "id": "COPD-009",
    "disease": "COPD",
    "concept_tag": "patient_b_tuesday_initial_visit",
    "type": "sba",
    "stem": "A 68-year-old patient has post-bronchodilator FEV1/FVC 0.58, CAT score 18, activity limitation, frequent rescue inhaler use, and one moderate exacerbation in the past year. He is not using maintenance therapy. What is the most appropriate initial pharmacotherapy direction?",
    "options": [
      {
        "key": "a",
        "text": "Start LABA/LAMA maintenance therapy and address access or affordability barriers"
      },
      {
        "key": "b",
        "text": "Continue albuterol only because he has not been hospitalized"
      },
      {
        "key": "c",
        "text": "Start biologic therapy immediately"
      },
      {
        "key": "d",
        "text": "Diagnose asthma only and ignore COPD treatment"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nThe patient has symptomatic COPD consistent with a need for maintenance LABA/LAMA therapy. His case also requires assessing barriers to medication initiation and adherence."
  },
  {
    "id": "COPD-010",
    "disease": "COPD",
    "concept_tag": "patient_b_wednesday_follow_up",
    "type": "sba",
    "stem": "At a 3-month follow-up, a patient reports only mild improvement after starting umeclidinium/vilanterol. Further questioning reveals he uses the inhaler only “most days” rather than daily. What should the student do next?",
    "options": [
      {
        "key": "a",
        "text": "Optimize adherence before escalating therapy"
      },
      {
        "key": "b",
        "text": "Immediately escalate to triple therapy"
      },
      {
        "key": "c",
        "text": "Stop maintenance therapy because it did not work"
      },
      {
        "key": "d",
        "text": "Add chronic prednisone for persistent dyspnea"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nThe symptoms cannot be interpreted as true treatment failure until adherence is optimized. The correct next step is to address missed doses and reinforce maintenance inhaler expectations."
  },
  {
    "id": "COPD-011",
    "disease": "COPD",
    "concept_tag": "patient_b_thursday_follow_up",
    "type": "sba",
    "stem": "At a 6-month follow-up, a patient's adherence to LABA/LAMA has improved, but he has had two moderate COPD exacerbations in the past three months and eosinophils are 310 cells/µL. What is the key therapeutic consideration?",
    "options": [
      {
        "key": "a",
        "text": "Escalation to triple therapy"
      },
      {
        "key": "b",
        "text": "Stopping LABA/LAMA and using albuterol only"
      },
      {
        "key": "c",
        "text": "Ignoring exacerbations because CAT score remains elevated"
      },
      {
        "key": "d",
        "text": "Starting biologic therapy as first-line COPD escalation"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nThe patient now has persistent exacerbation risk despite improved adherence to LABA/LAMA and elevated eosinophils. Triple therapy should be considered."
  },
  {
    "id": "COPD-012",
    "disease": "COPD",
    "concept_tag": "rescue_versus_maintenance_therapy",
    "type": "sba",
    "stem": "A COPD patient says, “I stopped my daily inhaler because it didn’t make me breathe better right away like albuterol does.” What is the best counseling response?",
    "options": [
      {
        "key": "a",
        "text": "Maintenance inhalers work best when used consistently to improve symptoms and reduce risk over time"
      },
      {
        "key": "b",
        "text": "Maintenance inhalers should only be used during flare-ups"
      },
      {
        "key": "c",
        "text": "Albuterol should replace maintenance therapy"
      },
      {
        "key": "d",
        "text": "Missing maintenance inhaler doses does not affect COPD control"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nPatients may misunderstand the difference between rescue and maintenance inhalers. Maintenance therapy should be used consistently, not only for immediate relief."
  },
  {
    "id": "COPD-013",
    "disease": "COPD",
    "concept_tag": "preventive_care",
    "type": "sata",
    "stem": "Which preventive care gaps are relevant for a 68-year-old COPD patient with a smoking history?",
    "options": [
      {
        "key": "a",
        "text": "PCV20 not documented"
      },
      {
        "key": "b",
        "text": "RSV vaccine not documented"
      },
      {
        "key": "c",
        "text": "Tdap overdue"
      },
      {
        "key": "d",
        "text": "Influenza received this season"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": "Correct Answer: A, B, C\n\nThe patient's record documents influenza and COVID vaccination as current, while PCV20, RSV, and Tdap remain gaps."
  },
  {
    "id": "COPD-014",
    "disease": "COPD",
    "concept_tag": "copd_medication_safety",
    "type": "sata",
    "stem": "Which adverse effects are correctly matched with COPD inhaler classes?",
    "options": [
      {
        "key": "a",
        "text": "LAMA — dry mouth or urinary retention"
      },
      {
        "key": "b",
        "text": "LABA — tremor or palpitations"
      },
      {
        "key": "c",
        "text": "ICS — pneumonia risk or oral candidiasis"
      },
      {
        "key": "d",
        "text": "SABA — permanent cure of COPD"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": "Correct Answer: A, B, C\n\nCOPD therapy monitoring includes class-specific safety concerns. LAMA may cause dry mouth or urinary retention, LABA may cause tremor or palpitations, and ICS may increase pneumonia risk or oral candidiasis."
  },
  {
    "id": "COPD-015",
    "disease": "COPD",
    "concept_tag": "pulmonary_rehabilitation",
    "type": "sba",
    "stem": "A COPD patient has persistent dyspnea and reduced activity tolerance despite inhaler therapy. Which non-pharmacologic intervention should be considered to improve dyspnea, exercise capacity, and quality of life?",
    "options": [
      {
        "key": "a",
        "text": "Pulmonary rehabilitation"
      },
      {
        "key": "b",
        "text": "Long-term bed rest"
      },
      {
        "key": "c",
        "text": "Stopping all inhalers"
      },
      {
        "key": "d",
        "text": "Chronic antibiotics without exacerbation history"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nPulmonary rehabilitation improves dyspnea, exercise capacity, and quality of life in COPD patients."
  },
  {
    "id": "COPD-016",
    "disease": "COPD",
    "concept_tag": "patient_c_tuesday_asthma_copd_overlap",
    "type": "sba",
    "stem": "A patient presents with childhood asthma, COPD diagnosis, former smoking history, post-bronchodilator FEV1/FVC 0.55, bronchodilator response of 15% and 260 mL, eosinophils 420 cells/µL, ACT 15, CAT 19, and two steroid-treated exacerbations in the past year. She is taking tiotropium and albuterol but no ICS-containing inhaler. What is the key therapeutic concern?",
    "options": [
      {
        "key": "a",
        "text": "Asthma-COPD overlap with need for ICS-containing therapy"
      },
      {
        "key": "b",
        "text": "Controlled COPD requiring no therapy change"
      },
      {
        "key": "c",
        "text": "Pure allergic rhinitis without lower airway disease"
      },
      {
        "key": "d",
        "text": "COPD that should be treated with LABA/LAMA without ICS because asthma history is irrelevant"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nThe patient has overlapping asthma and COPD features, elevated eosinophils, and recurrent exacerbations without ICS-containing therapy. Asthma features require ICS-containing treatment."
  },
  {
    "id": "COPD-017",
    "disease": "COPD",
    "concept_tag": "patient_c_wednesday_follow_up",
    "type": "sba",
    "stem": "At a 3-month follow-up, a patient's breathing has improved after Symbicort was added to Spiriva. ACT and CAT scores improved, and she has had no steroid-treated exacerbations. She reports nasal congestion and stopped fluticasone nasal spray. What is the best next step?",
    "options": [
      {
        "key": "a",
        "text": "Continue current inhaled pulmonary regimen and optimize allergic rhinitis management"
      },
      {
        "key": "b",
        "text": "Escalate immediately to biologic therapy"
      },
      {
        "key": "c",
        "text": "Discontinue ICS-containing therapy"
      },
      {
        "key": "d",
        "text": "Treat with repeated prednisone bursts as maintenance therapy"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A\n\nThe patient's lower airway symptoms improved with ICS-containing therapy. Persistent symptoms appear related to uncontrolled allergic rhinitis, so rhinitis should be optimized before pulmonary escalation."
  },
  {
    "id": "COPD-018",
    "disease": "COPD",
    "concept_tag": "matinee_trial_population",
    "type": "sata",
    "stem": "Which characteristics align with the MATINEE trial concept for mepolizumab use in COPD?",
    "options": [
      {
        "key": "a",
        "text": "Eosinophilic COPD phenotype"
      },
      {
        "key": "b",
        "text": "Frequent exacerbations despite optimized inhaled maintenance therapy"
      },
      {
        "key": "c",
        "text": "Blood eosinophils ≥300 cells/µL"
      },
      {
        "key": "d",
        "text": "Newly diagnosed mild asthma controlled on low-dose therapy"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": "Correct Answer: A, B, C\n\nMATINEE evaluated mepolizumab in patients with COPD characterized by an eosinophilic phenotype and persistent exacerbations despite optimized inhaled therapy."
  },
  {
    "id": "COPD-019",
    "disease": "COPD",
    "concept_tag": "matinee_application_to_patient_c",
    "type": "sba",
    "stem": "Which of the following patient profiles is the strongest fit for applying MATINEE trial evidence?",
    "options": [
      {
        "key": "a",
        "text": "A patient with newly recognized uncontrolled asthma without controller therapy"
      },
      {
        "key": "b",
        "text": "A patient with persistent symptoms but poor adherence to LABA/LAMA"
      },
      {
        "key": "c",
        "text": "A patient with eosinophilic airway disease and recurrent exacerbations despite optimized inhaled therapy"
      },
      {
        "key": "d",
        "text": "A patient whose ACT improved to 21"
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": "Correct Answer: C\n\nThe patient with eosinophilic airway disease best matches the MATINEE application because they has elevated eosinophils, recurrent corticosteroid-treated exacerbations, optimized inhaled therapy, confirmed adherence, and persistent exacerbation burden."
  },
  {
    "id": "COPD-020",
    "disease": "COPD",
    "concept_tag": "copd_biologic_therapy_and_escalation_logic",
    "type": "ktype",
    "stem": "Which statements reflect appropriate COPD biologic/escalation reasoning?\n\nI. Biologic therapy should be considered only after confirming optimized inhaled therapy, adherence, technique, and appropriate patient phenotype.\n\nII. MATINEE evidence should be applied primarily to eosinophilic COPD with recurrent exacerbations despite optimized therapy.\n\nIII. A patient with poor adherence to LABA/LAMA should be escalated to triple therapy before assessing adherence.\n\nIV. A patient who continues to exacerbate despite optimized therapy and controlled rhinitis is a strong biologic candidate.",
    "options": [
      {
        "key": "a",
        "text": "I only"
      },
      {
        "key": "b",
        "text": "I and II only"
      },
      {
        "key": "c",
        "text": "I, II, and IV only"
      },
      {
        "key": "d",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": "Correct Answer: C\n\nBiologic therapy should follow optimization of foundational therapy and should be phenotype-specific. MATINEE applies to eosinophilic COPD with recurrent exacerbations despite optimized therapy. The patient with optimized therapy is appropriate for biologic consideration; a patient with poor adherence should not be escalated before adherence is addressed."
  }
];
