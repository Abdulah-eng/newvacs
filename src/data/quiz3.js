export const PASS_THRESHOLD = 90;

export const QUIZ_ITEMS = [
  {
    "id": "ASTHMA-001",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "asthma_diagnosis",
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
    "rationale": " Asthma is supported by variable respiratory symptoms plus objective evidence of variable airflow limitation. A bronchodilator response meeting both ΓëÑ12% and ΓëÑ200 mL supports asthma. A. Correct. The patient has compatible symptoms and objective bronchodilator response. B. Incorrect. Asthma symptoms often vary over time and intensity. C. Incorrect. COPD requires persistent post-bronchodilator airflow obstruction in the appropriate clinical context, not simply bronchodilator response. D. Incorrect. Symptoms alone are not sufficient when objective confirmation is available. Asthma teaching summary lists variable symptoms and bronchodilator response criteria of ΓëÑ12% and ΓëÑ200 mL. Interpreting asthma diagnostic criteria using symptoms and spirometry. ┬á"
  },
  {
    "id": "ASTHMA-002",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "asthma_symptom_control",
    "stem": "A patient reports asthma symptoms 5 days per week, nighttime awakenings twice weekly, reliever inhaler use daily, and limitation with exercise. How should this patientΓÇÖs asthma control be classified?",
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
    "rationale": " Uncontrolled asthma is present when three or four symptom-control criteria are not met. This patient has frequent symptoms, nighttime awakenings, frequent reliever use, and activity limitation. A. Incorrect. Well-controlled asthma requires symptoms and reliever use Γëñ2 days/week, no nighttime awakening, and no activity limitation. B. Incorrect. Partly controlled asthma has only one to two criteria not met. C. Correct. This patient has multiple uncontrolled features. D. Incorrect. Lack of hospitalization does not mean asthma is controlled. Asthma teaching summary defines well-controlled, partly controlled, and uncontrolled asthma using symptom frequency, nighttime awakening, reliever use, and activity limitation. Classifying asthma control from patient-reported symptoms. ┬á"
  },
  {
    "id": "ASTHMA-003",
    "disease": "Asthma",
    "type": "ktype",
    "concept_tag": "asthma_control_assessment",
    "stem": "Which elements are part of asthma symptom-control assessment?\nI. Daytime symptom frequency\nII. Nighttime awakenings\nIII. Reliever medication use\nIV. Activity limitation",
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
    "rationale": " Asthma control assessment includes daytime symptoms, nighttime awakening, reliever use, and activity limitation. A. Incorrect. Daytime symptoms alone are incomplete. B. Incorrect. Reliever use and activity limitation are also required. C. Incorrect. Daytime symptoms and activity limitation are also required. D. Correct. All four are part of asthma control assessment. Asthma teaching summary lists all four domains in its asthma control framework. Recognizing the full asthma-control assessment framework. ┬á"
  },
  {
    "id": "ASTHMA-004",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "ics_containing_therapy",
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
    "rationale": " Modern asthma management emphasizes ICS-containing therapy because asthma is an inflammatory airway disease and SABA-only therapy does not address airway inflammation or future exacerbation risk. A. Correct. The absence of ICS-containing therapy is the key issue. B. Incorrect. Scheduled albuterol does not provide anti-inflammatory control. C. Incorrect. Reliever therapy may still be needed. D. Incorrect. LAMA monotherapy is not appropriate asthma controller therapy. Asthma teaching summary states that GINA recommends ICS-containing therapy for all asthma patients rather than SABA-only treatment. Identifying unsafe reliance on SABA-only asthma treatment. ┬á"
  },
  {
    "id": "ASTHMA-005",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "smart_mart_therapy",
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
    "rationale": " SMART/MART uses an ICS-formoterol inhaler for both maintenance treatment and symptom relief. A. Correct. This accurately describes SMART/MART. B. Incorrect. Albuterol does not treat airway inflammation. C. Incorrect. Routine systemic corticosteroids are not used as monthly prevention. D. Incorrect. Tiotropium alone is not a reliever and does not replace ICS-containing therapy. GINA Track 1 describes ICS-formoterol as the preferred reliever approach and MART as maintenance-and-reliever therapy using ICS-formoterol. Understanding SMART/MART pharmacotherapy and patient counseling. ┬á"
  },
  {
    "id": "ASTHMA-006",
    "disease": "Asthma",
    "type": "sata",
    "concept_tag": "future_exacerbation_risk",
    "stem": "Which factors increase a patientΓÇÖs future risk of asthma exacerbations?",
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
    "rationale": " Prior exacerbations, excessive SABA use, poor adherence, and incorrect inhaler technique are all risk factors for future asthma exacerbations. A. Correct. Prior severe exacerbation increases future risk. B. Correct. Excessive SABA use is a risk factor. C. Correct. Poor adherence increases risk. D. Correct. Incorrect technique can mimic treatment failure and increase risk. Asthma teaching summary lists previous severe exacerbation, excessive SABA use, poor adherence, and incorrect inhaler technique as risk factors. Identifying modifiable and historical asthma exacerbation risk factors. ┬á"
  },
  {
    "id": "ASTHMA-007",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "inhaler_technique_and_adherence",
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
    "rationale": " Poor control is often due to implementation issues such as missed doses, incorrect technique, cost barriers, or misunderstanding of the regimen. These should be assessed before labeling therapy as ineffective. A. Correct. Adherence and technique must be assessed before escalation. B. Incorrect. Family history does not determine whether current therapy is being used correctly. C. Incorrect. Scheduled SABA does not fix poor controller use. D. Incorrect. Stopping ICS-containing therapy may worsen asthma control and risk. Asthma teaching summary states that adherence and technique should be evaluated before escalating therapy. Distinguishing treatment failure from poor implementation. ┬á"
  },
  {
    "id": "ASTHMA-008",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "patient_a_tuesday_initial_visit",
    "stem": "Sarah Thompson is a 34-year-old patient with asthma and allergic rhinitis. At her initial visit, she has ACT 16, frequent rescue inhaler use, activity limitation, and no controller therapy. What is the most appropriate therapeutic direction?",
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
    "rationale": " Sarah has poorly controlled asthma and is not receiving controller therapy. An ICS-containing regimen is indicated, and SMART/MART is an appropriate preferred strategy when available. A. Correct. This addresses airway inflammation and symptom control. B. Incorrect. SABA-only therapy is not appropriate ongoing asthma care. C. Incorrect. LABA/LAMA without ICS is inappropriate for asthma. D. Incorrect. Biologic therapy is not appropriate before optimizing controller therapy. Patient A Tuesday documents poorly controlled asthma, ACT 16, frequent rescue inhaler use, and absence of controller therapy. Applying guideline-based asthma therapy to an initial ambulatory care visit. ┬á"
  },
  {
    "id": "ASTHMA-009",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "patient_a_wednesday_follow_up",
    "stem": "At SarahΓÇÖs 3-month follow-up, her ACT score has improved to 21 and she reports symptoms only once or twice weekly. However, possible inhaler technique deficiencies are identified. What is the best next step?",
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
    "rationale": " SarahΓÇÖs asthma is improved and well controlled by ACT. Remaining symptoms should prompt inhaler technique reassessment and education rather than unnecessary escalation. A. Correct. Continue effective therapy and fix technique. B. Incorrect. Improvement does not justify stopping ICS-containing therapy. C. Incorrect. Biologic therapy is not indicated in this scenario. D. Incorrect. SABA-only therapy is not guideline-concordant asthma care. Patient A Wednesday emphasizes response to SMART therapy, ACT 21, and the need to assess inhaler technique before escalation. Reassessing asthma response and avoiding premature escalation. ┬á"
  },
  {
    "id": "ASTHMA-010",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "patient_a_thursday_follow_up",
    "stem": "At SarahΓÇÖs 6-month follow-up, her ACT score is 22 and day-to-day symptoms remain well controlled. She had one viral-triggered exacerbation 6 weeks ago that resolved after a 5-day prednisone course. What is the best assessment?",
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
    "rationale": " SarahΓÇÖs daily asthma control remains strong. A single viral-triggered exacerbation should prompt action-plan reinforcement and monitoring, but it does not automatically mean persistent uncontrolled asthma. A. Correct. This distinguishes an isolated exacerbation from persistent poor control. B. Incorrect. Biologic therapy is not justified based on this case. C. Incorrect. SarahΓÇÖs case is asthma, not COPD. D. Incorrect. ICS-formoterol should not be stopped. Patient A Thursday documents ACT 22, well-controlled asthma, and one viral-triggered exacerbation that resolved after prednisone. Differentiating isolated exacerbation from persistent uncontrolled asthma. ┬á"
  },
  {
    "id": "ASTHMA-011",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "allergic_rhinitis_and_asthma_control",
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
    "rationale": " Upper airway disease can worsen asthma symptoms. Before escalating pulmonary therapy, comorbid contributors such as allergic rhinitis should be assessed and optimized. A. Correct. Allergic rhinitis can contribute to respiratory symptoms. B. Incorrect. Biologic therapy should not be used before addressing modifiable contributors. C. Incorrect. Rhinitis can affect asthma control. D. Incorrect. Stopping nasal therapy may worsen symptoms. Patient C Wednesday emphasizes persistent allergic rhinitis as a contributor to respiratory symptoms and the need to avoid inappropriate pulmonary escalation. Recognizing comorbid contributors to asthma control. ┬á"
  },
  {
    "id": "ASTHMA-012",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "ics_safety_counseling",
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
    "rationale": " ICS adverse effects include local effects such as oral candidiasis and dysphonia. Counseling should include proper inhaler technique and mouth rinsing when appropriate. A. Correct. This is appropriate ICS safety counseling. B. Incorrect. Severe immediate hypoglycemia is not a typical ICS counseling point. C. Incorrect. Symptom and exacerbation monitoring remain necessary. D. Incorrect. Stopping ICS when symptoms improve can increase risk. Asthma teaching summary lists ICS safety concerns including oral candidiasis and dysphonia. Providing practical ICS safety counseling. ┬á"
  },
  {
    "id": "ASTHMA-013",
    "disease": "Asthma",
    "type": "sata",
    "concept_tag": "systemic_corticosteroid_stewardship",
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
    "rationale": " Systemic corticosteroids can contribute to hyperglycemia, hypertension, osteoporosis, and weight gain. Repeated steroid bursts should prompt efforts to reduce future exacerbation and steroid exposure. A. Correct. Hyperglycemia is a systemic corticosteroid risk. B. Correct. Hypertension is a systemic corticosteroid risk. C. Correct. Osteoporosis is a systemic corticosteroid risk. D. Correct. Weight gain is a systemic corticosteroid risk. Asthma teaching summary lists systemic corticosteroid adverse effects including hyperglycemia, hypertension, osteoporosis, and weight gain. Recognizing steroid-related safety risks and stewardship priorities. ┬á"
  },
  {
    "id": "ASTHMA-014",
    "disease": "Asthma",
    "type": "sata",
    "concept_tag": "severe_asthma_referral_concepts",
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
    "rationale": " Students are not expected to independently select every biologic, but they should recognize referral candidates with persistent uncontrolled disease, recurrent exacerbations, high steroid burden, and Type 2 inflammation. A. Correct. Persistent uncontrolled disease after optimization supports referral. B. Correct. Recurrent exacerbations are a key signal. C. Correct. High corticosteroid burden supports escalation/referral. D. Correct. Type 2 inflammation supports biologic evaluation. Asthma teaching summary lists biologic referral concepts and criteria. Identifying candidates for advanced asthma evaluation. ┬á"
  },
  {
    "id": "ASTHMA-015",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "asthma_copd_overlap_safety",
    "stem": "Maria has childhood asthma, COPD, persistent post-bronchodilator obstruction, bronchodilator reversibility, elevated eosinophils, and recurrent exacerbations. Which treatment principle is most important?",
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
    "rationale": " Patients with asthma-COPD overlap or asthma features should not be treated with LABA and/or LAMA without ICS. ICS-containing therapy is essential for asthma safety. A. Correct. Asthma features require ICS-containing therapy. B. Incorrect. ICS may be appropriate when asthma features or eosinophilic inflammation are present. C. Incorrect. LABA/LAMA without ICS is unsafe when asthma features are present. D. Incorrect. Maintenance therapy is needed for uncontrolled disease. GINA states that patients with any asthma features should not be treated with LABA and/or LAMA alone without ICS. Applying asthma safety principles to asthma-COPD overlap. ┬á"
  },
  {
    "id": "ASTHMA-016",
    "disease": "Asthma",
    "type": "sata",
    "concept_tag": "asthma_monitoring",
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
    "rationale": " Asthma follow-up should monitor symptom control, reliever use, exacerbations, and validated control tools such as ACT when available. A. Correct. ACT is an appropriate monitoring tool. B. Correct. Symptom frequency is central to control. C. Correct. Reliever use reflects control and risk. D. Correct. Exacerbations are a key future-risk marker. Asthma teaching summary lists ACT, symptom frequency, reliever use, exacerbations, and lung function as monitoring parameters. Building a complete asthma monitoring plan. ┬á"
  },
  {
    "id": "ASTHMA-017",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "gina_track_1",
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
    "rationale": " GINA Track 1 uses low-dose ICS-formoterol as the reliever. This approach reduces severe exacerbations and oral corticosteroid exposure compared with SABA-based regimens. A. Correct. This accurately describes Track 1. B. Incorrect. SABA-only treatment is not preferred. C. Incorrect. Prednisone is not a reliever inhaler strategy. D. Incorrect. ICS-formoterol is specifically used as reliever therapy in Track 1. GINA 2026 describes Track 1 as the preferred approach using low-dose ICS-formoterol as reliever therapy. Understanding GINA Track 1 treatment logic. ┬á"
  },
  {
    "id": "ASTHMA-018",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "asthma_exacerbation_follow_up",
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
    "rationale": " After an exacerbation, follow-up should evaluate recovery, identify triggers and risk factors, review adherence and technique, and reinforce or provide an asthma action plan. A. Correct. This addresses future risk reduction. B. Incorrect. ICS-containing therapy should generally be continued or optimized. C. Incorrect. Reliever therapy should be used as needed, not indefinitely scheduled. D. Incorrect. Trigger identification is important. GINA exacerbation guidance emphasizes follow-up, trigger assessment, inhaler technique, adherence, and action-plan review. Developing a post-exacerbation asthma follow-up plan. ┬á"
  },
  {
    "id": "ASTHMA-019",
    "disease": "Asthma",
    "type": "ktype",
    "concept_tag": "patient_counseling",
    "stem": "Which counseling points are appropriate for a patient starting ICS-formoterol SMART/MART?\nI. Explain which inhaler is used for daily maintenance\nII. Explain that the same inhaler may be used for symptom relief when prescribed as SMART/MART\nIII. Review inhaler technique\nIV. Review when to seek medical care for worsening symptoms",
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
    "rationale": " SMART/MART counseling should include maintenance use, reliever use, technique, and guidance on worsening symptoms or excessive reliever use. A. Incorrect. Maintenance counseling alone is incomplete. B. Incorrect. Technique and worsening-symptom planning are also needed. C. Incorrect. Daily maintenance use and action planning are also needed. D. Correct. All statements are appropriate. GINA Track 1 notes that ICS-formoterol can be used for both maintenance and reliever therapy and emphasizes action-plan and symptom-relief instructions. Providing patient-centered SMART/MART counseling. ┬á"
  },
  {
    "id": "ASTHMA-020",
    "disease": "Asthma",
    "type": "sba",
    "concept_tag": "patient_c_thursday_severe_eosinophilic_disease",
    "stem": "MariaΓÇÖs Thursday follow-up shows optimized inhaled therapy, excellent adherence, appropriate inhaler technique, controlled rhinitis, eosinophils 520 cells/┬╡L, and five corticosteroid-treated exacerbations in the past year. What is the most appropriate clinical interpretation?",
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
    "rationale": " Maria has recurrent steroid-treated exacerbations despite optimized inhaled therapy and persistent eosinophilic inflammation. This supports biologic evaluation or initiation and a steroid-sparing strategy. A. Correct. The case is designed to identify severe eosinophilic disease and biologic candidacy. B. Incorrect. Recurrent corticosteroid-treated exacerbations indicate ongoing uncontrolled disease risk. C. Incorrect. The case states adherence and technique are optimized. D. Incorrect. Rhinitis has been controlled, but exacerbations persist. Patient C Thursday identifies severe eosinophilic airway disease, recurrent steroid-treated exacerbations, eosinophils 520 cells/┬╡L, optimized therapy, biologic eligibility, and MATINEE application. Recognizing when persistent exacerbations require escalation beyond inhaled therapy. ┬á COPD Questions ΓÇö 20 Questions ┬á"
  },
  {
    "id": "COPD-001",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "copd_diagnosis",
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
    "rationale": " COPD diagnosis requires spirometric confirmation. Symptoms alone are insufficient. A. Correct. Post-bronchodilator FEV1/FVC <0.70 confirms airflow obstruction consistent with COPD in the appropriate context. B. Incorrect. ACT is used for asthma control, not COPD diagnosis. C. Incorrect. Eosinophils do not diagnose COPD. D. Incorrect. Symptoms alone do not confirm COPD. COPD teaching summary states that spirometry is required and diagnostic criterion is post-bronchodilator FEV1/FVC <0.70. Identifying objective diagnostic criteria for COPD. ┬á"
  },
  {
    "id": "COPD-002",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "gold_grouping",
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
    "rationale": " GOLD Group B represents high symptoms with low exacerbation risk. A. Incorrect. Group A is low symptoms and low exacerbation risk. B. Correct. Group B is high symptoms and low exacerbation risk. C. Incorrect. Group E is driven by frequent exacerbations. D. Incorrect. Eosinophils may guide ICS benefit but are not required to assign A/B/E grouping. COPD teaching summary describes GOLD groups A, B, and E using symptom burden and exacerbation history. Classifying COPD using symptom burden and exacerbation risk. ┬á"
  },
  {
    "id": "COPD-003",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "initial_copd_pharmacotherapy",
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
    "rationale": " GOLD Group B initial therapy is LABA + LAMA. A. Correct. LABA/LAMA is appropriate for Group B. B. Incorrect. ICS monotherapy is not the recommended initial COPD regimen. C. Incorrect. Albuterol is rescue therapy and does not replace maintenance treatment. D. Incorrect. Chronic oral prednisone is not appropriate maintenance COPD therapy. COPD teaching summary lists LABA + LAMA as initial therapy for Group B. Selecting initial COPD maintenance therapy. ┬á"
  },
  {
    "id": "COPD-004",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "gold_group_e",
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
    "rationale": " Group E identifies patients with frequent exacerbations and higher exacerbation risk. A. Correct. Exacerbation history drives Group E. B. Incorrect. Low rescue use does not identify Group E. C. Incorrect. Low symptoms without exacerbations is more consistent with Group A. D. Incorrect. Normal post-bronchodilator FEV1/FVC would not support COPD. COPD teaching summary defines Group E as frequent exacerbations. Recognizing exacerbation risk as a key COPD treatment driver. ┬á"
  },
  {
    "id": "COPD-005",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "blood_eosinophils",
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
    "rationale": " Blood eosinophils help estimate the likelihood that a patient may benefit from ICS-containing COPD therapy. They are one factor within the broader clinical assessment. A. Correct. Higher eosinophils suggest greater expected ICS benefit. B. Incorrect. COPD diagnosis requires spirometry. C. Incorrect. CAT or mMRC still assess symptom burden. D. Incorrect. Eosinophils do not justify stopping all inhalers. COPD teaching summary states that blood eosinophils help estimate likelihood of ICS benefit. Using eosinophils to inform COPD escalation decisions. ┬á"
  },
  {
    "id": "COPD-006",
    "disease": "COPD",
    "type": "sata",
    "concept_tag": "triple_therapy",
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
    "rationale": " COPD triple therapy consists of LABA + LAMA + ICS. A. Correct. LABA is part of triple therapy. B. Correct. LAMA is part of triple therapy. C. Correct. ICS is part of triple therapy. D. Incorrect. Chronic oral corticosteroid is not part of standard inhaled triple therapy. COPD teaching summary defines triple therapy as LABA + LAMA + ICS. Identifying components of COPD combination therapy. ┬á"
  },
  {
    "id": "COPD-007",
    "disease": "COPD",
    "type": "sata",
    "concept_tag": "non_pharmacologic_management",
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
    "rationale": " COPD management includes smoking cessation, vaccinations, and pulmonary rehabilitation to improve dyspnea, exercise capacity, and quality of life. A. Correct. Smoking cessation is highly impactful. B. Correct. Vaccination assessment is important in COPD. C. Correct. Pulmonary rehabilitation improves dyspnea and functional outcomes. D. Incorrect. Avoiding all physical activity is not appropriate. COPD teaching summary lists smoking cessation, vaccinations, and pulmonary rehabilitation as essential interventions. Building a comprehensive COPD care plan beyond medications. ┬á"
  },
  {
    "id": "COPD-008",
    "disease": "COPD",
    "type": "ktype",
    "concept_tag": "copd_monitoring",
    "stem": "Which monitoring parameters are appropriate for COPD follow-up?\nI. CAT score\nII. Exacerbation history\nIII. Rescue inhaler use\nIV. Activity tolerance",
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
    "rationale": " COPD follow-up should include symptom burden, exacerbations, rescue medication use, and activity tolerance. A. Incorrect. CAT alone is incomplete. B. Incorrect. Rescue use and activity tolerance are also important. C. Incorrect. CAT score and activity tolerance are also important. D. Correct. All four should be monitored. COPD teaching summary lists CAT score, exacerbations, rescue inhaler use, and activity tolerance as monitoring parameters. Constructing COPD monitoring plans. ┬á"
  },
  {
    "id": "COPD-009",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "patient_b_tuesday_initial_visit",
    "stem": "Bob Jenkins has post-bronchodilator FEV1/FVC 0.58, CAT score 18, activity limitation, frequent rescue inhaler use, and one moderate exacerbation in the past year. He is not using maintenance therapy. What is the most appropriate initial pharmacotherapy direction?",
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
    "rationale": " Bob has symptomatic COPD consistent with a need for maintenance LABA/LAMA therapy. His case also requires assessing barriers to medication initiation and adherence. A. Correct. LABA/LAMA addresses symptomatic COPD and should be paired with access support. B. Incorrect. Lack of hospitalization does not justify rescue-only therapy. C. Incorrect. Biologic therapy is not initial COPD therapy for this case. D. Incorrect. His spirometry and clinical history support COPD management. Patient B Tuesday documents FEV1/FVC 0.58, CAT 18, activity limitation, frequent rescue inhaler use, no maintenance therapy, and affordability/adherence concerns. Applying GOLD-based initial therapy to a symptomatic COPD patient. ┬á"
  },
  {
    "id": "COPD-010",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "patient_b_wednesday_follow_up",
    "stem": "At BobΓÇÖs 3-month follow-up, he reports only mild improvement after starting umeclidinium/vilanterol. Further questioning reveals he uses the inhaler only ΓÇ£most daysΓÇ¥ rather than daily. What should the student do next?",
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
    "rationale": " BobΓÇÖs symptoms cannot be interpreted as true treatment failure until adherence is optimized. The correct next step is to address missed doses and reinforce maintenance inhaler expectations. A. Correct. Adherence must be optimized first. B. Incorrect. Escalation before addressing nonadherence is premature. C. Incorrect. Stopping maintenance therapy worsens long-term control. D. Incorrect. Chronic prednisone is not appropriate for persistent dyspnea. Patient B Wednesday focuses on differentiating medication failure from nonadherence and optimizing adherence before escalation. Distinguishing medication failure from nonadherence in COPD follow-up. ┬á"
  },
  {
    "id": "COPD-011",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "patient_b_thursday_follow_up",
    "stem": "At BobΓÇÖs 6-month follow-up, adherence to LABA/LAMA has improved, but he has had two moderate COPD exacerbations in the past three months and eosinophils are 310 cells/┬╡L. What is the key therapeutic consideration?",
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
    "rationale": " Bob now has persistent exacerbation risk despite improved adherence to LABA/LAMA and elevated eosinophils. Triple therapy should be considered. A. Correct. Exacerbations plus eosinophils support considering ICS-containing escalation. B. Incorrect. Rescue-only treatment is inappropriate. C. Incorrect. Exacerbation burden is clinically important and should not be ignored. D. Incorrect. Biologic therapy is not the first escalation step in this Bob case. Patient B Thursday documents improved adherence, two moderate exacerbations, eosinophils 310 cells/┬╡L, and need to evaluate triple therapy. Applying COPD escalation logic after adherence optimization. ┬á"
  },
  {
    "id": "COPD-012",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "rescue_versus_maintenance_therapy",
    "stem": "A COPD patient says, ΓÇ£I stopped my daily inhaler because it didnΓÇÖt make me breathe better right away like albuterol does.ΓÇ¥ What is the best counseling response?",
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
    "rationale": " Patients may misunderstand the difference between rescue and maintenance inhalers. Maintenance therapy should be used consistently, not only for immediate relief. A. Correct. This explains long-term purpose and adherence importance. B. Incorrect. Maintenance inhalers are not flare-only medications. C. Incorrect. Rescue therapy does not replace maintenance therapy. D. Incorrect. Missed doses can reduce treatment effectiveness. Patient B materials emphasize limited understanding of maintenance therapy and the need to differentiate rescue versus maintenance inhalers. Counseling patients on COPD maintenance inhaler expectations. ┬á"
  },
  {
    "id": "COPD-013",
    "disease": "COPD",
    "type": "sata",
    "concept_tag": "preventive_care",
    "stem": "Which preventive care gaps are relevant for Bob in the Week 3 COPD cases?",
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
    "rationale": " BobΓÇÖs cases document influenza and COVID vaccination as current, while PCV20, RSV, and Tdap remain gaps. A. Correct. PCV20 is not documented. B. Correct. RSV vaccine is not documented. C. Correct. Tdap is overdue. D. Incorrect. Influenza was received this season and is not a gap. Patient B Thursday documents PCV20 not documented, RSV not documented, Tdap last documented 13 years ago, and influenza received this season. Identifying COPD preventive care gaps from chart data. ┬á"
  },
  {
    "id": "COPD-014",
    "disease": "COPD",
    "type": "sata",
    "concept_tag": "copd_medication_safety",
    "stem": "Which adverse effects are correctly matched with COPD inhaler classes?",
    "options": [
      {
        "key": "a",
        "text": "LAMA ΓÇö dry mouth or urinary retention"
      },
      {
        "key": "b",
        "text": "LABA ΓÇö tremor or palpitations"
      },
      {
        "key": "c",
        "text": "ICS ΓÇö pneumonia risk or oral candidiasis"
      },
      {
        "key": "d",
        "text": "SABA ΓÇö permanent cure of COPD"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": " COPD therapy monitoring includes class-specific safety concerns. LAMA may cause dry mouth or urinary retention, LABA may cause tremor or palpitations, and ICS may increase pneumonia risk or oral candidiasis. A. Correct. LAMA adverse effects include dry mouth and urinary retention. B. Correct. LABA adverse effects include tremor and palpitations. C. Correct. ICS safety concerns include pneumonia risk and oral candidiasis. D. Incorrect. SABA provides symptom relief but does not cure COPD. COPD teaching summary lists safety monitoring for LAMA, LABA, and ICS. Monitoring COPD pharmacotherapy safety. ┬á"
  },
  {
    "id": "COPD-015",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "pulmonary_rehabilitation",
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
    "rationale": " Pulmonary rehabilitation improves dyspnea, exercise capacity, and quality of life in COPD patients. A. Correct. Pulmonary rehabilitation is appropriate for persistent functional limitation. B. Incorrect. Bed rest may worsen deconditioning. C. Incorrect. Inhaler therapy should not be stopped without a clinical reason. D. Incorrect. Chronic antibiotics are not indicated solely for dyspnea. COPD teaching summary describes pulmonary rehabilitation benefits. Selecting non-pharmacologic interventions for COPD symptom burden. ┬á"
  },
  {
    "id": "COPD-016",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "patient_c_tuesday_asthma_copd_overlap",
    "stem": "MariaΓÇÖs initial visit shows childhood asthma, COPD diagnosis, former smoking history, post-bronchodilator FEV1/FVC 0.55, bronchodilator response of 15% and 260 mL, eosinophils 420 cells/┬╡L, ACT 15, CAT 19, and two steroid-treated exacerbations in the past year. She is taking tiotropium and albuterol but no ICS-containing inhaler. What is the key therapeutic concern?",
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
    "rationale": " Maria has overlapping asthma and COPD features, elevated eosinophils, and recurrent exacerbations without ICS-containing therapy. Asthma features require ICS-containing treatment. A. Correct. Her history and objective data support asthma-COPD overlap and need for ICS-containing therapy. B. Incorrect. ACT 15, CAT 19, and exacerbations indicate uncontrolled disease burden. C. Incorrect. She has lower airway disease with obstructive spirometry. D. Incorrect. Asthma history is clinically relevant and LABA/LAMA without ICS is unsafe when asthma features are present. Patient C Tuesday documents asthma-COPD overlap features, elevated eosinophils, recurrent exacerbations, and absence of ICS-containing therapy. Identifying asthma-COPD overlap and ICS safety requirements. ┬á"
  },
  {
    "id": "COPD-017",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "patient_c_wednesday_follow_up",
    "stem": "At MariaΓÇÖs 3-month follow-up, breathing has improved after Symbicort was added to Spiriva. ACT and CAT scores improved, and she has had no steroid-treated exacerbations. She reports nasal congestion and stopped fluticasone nasal spray. What is the best next step?",
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
    "rationale": " MariaΓÇÖs lower airway symptoms improved with ICS-containing therapy. Persistent symptoms appear related to uncontrolled allergic rhinitis, so rhinitis should be optimized before pulmonary escalation. A. Correct. This avoids inappropriate escalation and addresses the likely contributor. B. Incorrect. Biologic therapy is premature before confirming optimized therapy and addressing rhinitis. C. Incorrect. Discontinuing ICS-containing therapy is unsafe given asthma features. D. Incorrect. Repeated prednisone bursts increase corticosteroid burden and do not address the root issue. Patient C Wednesday emphasizes improved respiratory control with persistent allergic rhinitis and avoiding inappropriate escalation. Differentiating persistent pulmonary disease from comorbid upper-airway contributors. ┬á"
  },
  {
    "id": "COPD-018",
    "disease": "COPD",
    "type": "sata",
    "concept_tag": "matinee_trial_population",
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
        "text": "Blood eosinophils ΓëÑ300 cells/┬╡L"
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
    "rationale": " MATINEE evaluated mepolizumab in patients with COPD characterized by an eosinophilic phenotype and persistent exacerbations despite optimized inhaled therapy. A. Correct. Eosinophilic COPD phenotype is central. B. Correct. Persistent exacerbations despite optimized inhaled therapy are central. C. Correct. The Week 3 journal club document identifies eosinophils ΓëÑ300 cells/┬╡L as a major criterion. D. Incorrect. Controlled mild asthma does not reflect the MATINEE population. Journal Club Week 3 describes MATINEE as evaluating mepolizumab for eosinophilic COPD with frequent exacerbations despite optimized inhaled therapy. Identifying appropriate biologic trial population and avoiding overgeneralization. ┬á"
  },
  {
    "id": "COPD-019",
    "disease": "COPD",
    "type": "sba",
    "concept_tag": "matinee_application_to_patient_c",
    "stem": "Which Week 3 patient is the strongest fit for applying MATINEE trial evidence?",
    "options": [
      {
        "key": "a",
        "text": "Sarah Tuesday, because she has newly recognized uncontrolled asthma without controller therapy"
      },
      {
        "key": "b",
        "text": "Bob Wednesday, because he has persistent symptoms but poor adherence to LABA/LAMA"
      },
      {
        "key": "c",
        "text": "Maria Thursday, because she has eosinophilic airway disease and recurrent exacerbations despite optimized inhaled therapy"
      },
      {
        "key": "d",
        "text": "Sarah Wednesday, because her ACT improved to 21"
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": " Maria Thursday best matches the MATINEE application because she has elevated eosinophils, recurrent corticosteroid-treated exacerbations, optimized inhaled therapy, confirmed adherence, and persistent exacerbation burden. A. Incorrect. Sarah Tuesday needs foundational controller therapy, not biologic trial application. B. Incorrect. Bob Wednesday requires adherence optimization before escalation. C. Correct. Maria Thursday is the strongest fit. D. Incorrect. Sarah Wednesday is improving and does not need biologic therapy. Patient C Thursday requires applying MATINEE evidence and evaluating mepolizumab candidacy after optimized therapy. Applying clinical trial evidence to the right patient. ┬á"
  },
  {
    "id": "COPD-020",
    "disease": "COPD",
    "type": "ktype",
    "concept_tag": "copd_biologic_therapy_and_escalation_logic",
    "stem": "Which statements reflect appropriate COPD biologic/escalation reasoning in Week 3?\nI. Biologic therapy should be considered only after confirming optimized inhaled therapy, adherence, technique, and appropriate patient phenotype.\nII. MATINEE evidence should be applied primarily to eosinophilic COPD with recurrent exacerbations despite optimized therapy.\nIII. Bob Wednesday should be escalated to triple therapy before assessing adherence.\nIV. Maria Thursday is a stronger biologic candidate than Maria Wednesday because she continues to exacerbate despite optimized therapy and controlled rhinitis.",
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
    "rationale": " Biologic therapy should follow optimization of foundational therapy and should be phenotype-specific. MATINEE applies to eosinophilic COPD with recurrent exacerbations despite optimized therapy. Maria Thursday is appropriate for biologic consideration; Bob Wednesday should not be escalated before adherence is addressed. A. Incorrect. II and IV are also correct. B. Incorrect. IV is also correct. C. Correct. I, II, and IV are accurate. D. Incorrect. III is unsafe because Bob Wednesday requires adherence optimization before escalation. The Week 3 QA prompt flags escalation before adherence/technique assessment as unsafe and limits MATINEE use to eosinophilic COPD with recurrent exacerbations despite optimized inhaled therapy. Integrating escalation safety, adherence assessment, phenotype selection, and MATINEE evidence. ┬á *From <*[*https://chatgpt.com/g/g-p-6a2c4016e23081918c2946bb6565644a-vacs-week-3-asthma-copd/c/6a2c4356-44d8-83ea-b2c3-29f2b3a4c374?tab=chats*](https://chatgpt.com/g/g-p-6a2c4016e23081918c2946bb6565644a-vacs-week-3-asthma-copd/c/6a2c4356-44d8-83ea-b2c3-29f2b3a4c374?tab=chats)*> * ┬á"
  }
]