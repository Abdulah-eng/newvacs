// Week 1 Monday quiz

export const PASS_THRESHOLD = 90;

export const QUIZ_ITEMS = [
  {
    "id": "HTN-001",
    "disease": "Hypertension",
    "concept_tag": "blood_pressure_classification",
    "type": "sba",
    "stem": "A 48-year-old patient has repeated office blood pressure readings averaging 136/84 mmHg. Based on the 2025 AHA/ACC blood pressure classification framework, how should this blood pressure be classified?",
    "options": [
      {
        "key": "a",
        "text": "Normal blood pressure"
      },
      {
        "key": "b",
        "text": "Elevated blood pressure"
      },
      {
        "key": "c",
        "text": "Stage 1 hypertension"
      },
      {
        "key": "d",
        "text": "Stage 2 hypertension"
      }
    ],
    "correct": [
      "c",
      "s",
      "h"
    ],
    "rationale": "Correct Answer: C. Stage 1 hypertension\n\nStage 1 hypertension is defined as systolic blood pressure 130–139 mmHg or diastolic blood pressure 80–89 mmHg. This patient’s average blood pressure of 136/84 mmHg meets both systolic and diastolic criteria for stage 1 hypertension."
  },
  {
    "id": "HTN-002",
    "disease": "Hypertension",
    "concept_tag": "blood_pressure_goal",
    "type": "sba",
    "stem": "A 56-year-old patient with hypertension and type 2 diabetes asks what blood pressure goal she should be working toward. She is otherwise functional and does not have limited life expectancy. Which goal is most appropriate for most adults like this patient?",
    "options": [
      {
        "key": "a",
        "text": "<150/90 mmHg"
      },
      {
        "key": "b",
        "text": "<140/90 mmHg"
      },
      {
        "key": "c",
        "text": "<130/80 mmHg"
      },
      {
        "key": "d",
        "text": "<120/70 mmHg"
      }
    ],
    "correct": [
      "c",
      "m"
    ],
    "rationale": "Correct Answer: C. <130/80 mmHg\n\nThe Week 1 hypertension summary and 2025 AHA/ACC guideline emphasize a blood pressure goal of <130/80 mmHg for most adults with hypertension, with patient-specific considerations for special populations."
  },
  {
    "id": "HTN-003",
    "disease": "Hypertension",
    "concept_tag": "first_line_antihypertensive_therapy",
    "type": "sata",
    "stem": "Which medication classes are considered preferred first-line options for primary hypertension management in the Week 1 hypertension guideline summary? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "ACE inhibitors"
      },
      {
        "key": "b",
        "text": "Angiotensin receptor blockers"
      },
      {
        "key": "c",
        "text": "Thiazide-type diuretics"
      },
      {
        "key": "d",
        "text": "Dihydropyridine calcium channel blockers"
      },
      {
        "key": "e",
        "text": "Beta blockers for all patients without regard to comorbidities"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nPreferred first-line drug classes include ACE inhibitors, ARBs, thiazide-type diuretics, and dihydropyridine calcium channel blockers. Beta blockers are not listed as universal first-line agents for uncomplicated primary hypertension and are generally reserved for compelling indications such as coronary heart disease or heart failure."
  },
  {
    "id": "HTN-004",
    "disease": "Hypertension",
    "concept_tag": "treatment_threshold_in_diabetes",
    "type": "sba",
    "stem": "A 52-year-old patient with type 2 diabetes has repeated average blood pressure readings of 132/82 mmHg despite lifestyle counseling. She has no symptoms of acute target organ damage. Which statement best reflects guideline-based management?",
    "options": [
      {
        "key": "a",
        "text": "Medication therapy is not considered until BP is ≥160/100 mmHg."
      },
      {
        "key": "b",
        "text": "Medication therapy should be considered because she has diabetes and average BP ≥130/80 mmHg."
      },
      {
        "key": "c",
        "text": "Medication therapy is unnecessary because her systolic BP is below 140 mmHg."
      },
      {
        "key": "d",
        "text": "She should be sent to the emergency department for hypertensive emergency management."
      }
    ],
    "correct": [
      "b",
      "m",
      "t",
      "s",
      "b",
      "c",
      "b",
      "s",
      "h",
      "d",
      "a",
      "a",
      "b",
      "m"
    ],
    "rationale": "Correct Answer: B. Medication therapy should be considered because she has diabetes and average BP ≥130/80 mmHg.\n\nThe 2025 AHA/ACC guideline recommends initiation of BP-lowering medication for adults with hypertension and diabetes when average SBP is ≥130 mmHg or DBP is ≥80 mmHg, in addition to lifestyle intervention."
  },
  {
    "id": "HTN-005",
    "disease": "Hypertension",
    "concept_tag": "monotherapy_versus_combination_therapy",
    "type": "sba",
    "stem": "A newly diagnosed patient has repeated blood pressure readings averaging 148/92 mmHg. He has no contraindications to first-line therapy. Which initial medication strategy is most consistent with the Week 1 hypertension guideline summary?",
    "options": [
      {
        "key": "a",
        "text": "Lifestyle modification only for 12 months before starting medication"
      },
      {
        "key": "b",
        "text": "One first-line antihypertensive medication only, regardless of BP level"
      },
      {
        "key": "c",
        "text": "Two first-line agents from different classes, ideally as a single-pill combination"
      },
      {
        "key": "d",
        "text": "Beta blocker monotherapy as the preferred initial regimen"
      }
    ],
    "correct": [
      "c",
      "t",
      "f",
      "a",
      "f",
      "d",
      "c",
      "i",
      "a",
      "a",
      "s",
      "c"
    ],
    "rationale": "Correct Answer: C. Two first-line agents from different classes, ideally as a single-pill combination\n\nThis patient has stage 2 hypertension. The Week 1 summary and 2025 AHA/ACC guideline support combination therapy for stage 2 hypertension, ideally using two first-line agents from different classes and using single-pill combinations when possible to support adherence."
  },
  {
    "id": "HTN-006",
    "disease": "Hypertension",
    "concept_tag": "follow_up_timing",
    "type": "sba",
    "stem": "A pharmacist recommends increasing a patient’s ACE inhibitor dose due to persistently uncontrolled hypertension. When should follow-up generally occur after medication initiation or adjustment?",
    "options": [
      {
        "key": "a",
        "text": "Approximately 1 week only if the patient develops symptoms"
      },
      {
        "key": "b",
        "text": "Approximately 1 month"
      },
      {
        "key": "c",
        "text": "3–6 months"
      },
      {
        "key": "d",
        "text": "12 months"
      }
    ],
    "correct": [
      "b",
      "a",
      "m"
    ],
    "rationale": "Correct Answer: B. Approximately 1 month\n\nThe Week 1 hypertension summary recommends follow-up approximately 1 month after medication initiation or adjustment. A 3–6 month interval is more appropriate when lifestyle modification alone is being used."
  },
  {
    "id": "HTN-007",
    "disease": "Hypertension",
    "concept_tag": "initial_evaluation_and_baseline_labs",
    "type": "sata",
    "stem": "A patient is being evaluated for hypertension in an ambulatory care clinic. Which items should be part of the initial assessment or baseline evaluation? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Confirm accurate BP measurement"
      },
      {
        "key": "b",
        "text": "Review home BP readings when available"
      },
      {
        "key": "c",
        "text": "Assess ASCVD risk"
      },
      {
        "key": "d",
        "text": "Assess kidney disease and obtain renal function/electrolyte data"
      },
      {
        "key": "e",
        "text": "Ignore medications that may increase BP until after therapy fails"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nInitial hypertension evaluation should include confirmation of accurate BP measurement, review of home BP readings when available, ASCVD risk assessment, evaluation for diabetes and kidney disease, lifestyle assessment, review of medications that increase BP, and baseline labs including renal function and potassium."
  },
  {
    "id": "HTN-008",
    "disease": "Hypertension",
    "concept_tag": "home_blood_pressure_monitoring_technique",
    "type": "sba",
    "stem": "A patient’s clinic BP is 146/92 mmHg, and his home BP log averages 148/90 mmHg. Before assuming treatment failure, which pharmacist action is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Increase medication without assessing adherence or technique"
      },
      {
        "key": "b",
        "text": "Ask how the patient measures BP at home, including timing, cuff position, posture, and rest period"
      },
      {
        "key": "c",
        "text": "Discontinue antihypertensive therapy because home readings are unreliable"
      },
      {
        "key": "d",
        "text": "Recommend using a smartwatch BP reading as the primary measurement method"
      }
    ],
    "correct": [
      "b",
      "a",
      "h",
      "t",
      "p",
      "m",
      "b",
      "a",
      "h",
      "i",
      "t",
      "c",
      "p",
      "p",
      "a",
      "r",
      "p"
    ],
    "rationale": "Correct Answer: B. Ask how the patient measures BP at home, including timing, cuff position, posture, and rest period\n\nStudents should assess BP technique before interpreting home readings. Common errors include taking readings immediately after activity, crossing legs, incorrect cuff positioning, and talking during measurement. Home BP monitoring is useful only when performed with appropriate technique and validated devices."
  },
  {
    "id": "HTN-009",
    "disease": "Hypertension",
    "concept_tag": "adherence_before_intensification",
    "type": "sata",
    "stem": "A patient remains above BP goal despite being prescribed lisinopril and hydrochlorothiazide. Which findings should the pharmacist assess before concluding the regimen has failed? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Missed doses"
      },
      {
        "key": "b",
        "text": "Home BP measurement technique"
      },
      {
        "key": "c",
        "text": "NSAID use"
      },
      {
        "key": "d",
        "text": "Dietary sodium intake"
      },
      {
        "key": "e",
        "text": "Whether the patient feels symptoms from hypertension"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nUncontrolled hypertension may reflect nonadherence, poor home BP technique, lifestyle factors such as excess sodium intake, or medications that increase BP such as NSAIDs. Hypertension is often asymptomatic, so feeling well does not confirm control."
  },
  {
    "id": "HTN-010",
    "disease": "Hypertension",
    "concept_tag": "severe_hypertension_versus_hypertensive_emergency",
    "type": "sba",
    "stem": "A nonpregnant adult presents to clinic with BP 184/122 mmHg. The patient denies chest pain, dyspnea, neurologic deficits, severe headache, vision changes, or other signs of acute target organ damage. Which approach best reflects the 2025 AHA/ACC framework?",
    "options": [
      {
        "key": "a",
        "text": "Treat as severe hypertension without acute target organ damage and arrange timely oral medication initiation, reinstitution, or intensification"
      },
      {
        "key": "b",
        "text": "Diagnose hypertensive emergency and send all patients with BP >180/120 mmHg for IV therapy"
      },
      {
        "key": "c",
        "text": "Reassure the patient and repeat BP in one year"
      },
      {
        "key": "d",
        "text": "Avoid oral antihypertensive therapy because lowering BP is always harmful at this level"
      }
    ],
    "correct": [
      "a",
      "t",
      "a",
      "s",
      "h",
      "w",
      "a",
      "t",
      "o",
      "d",
      "a",
      "a",
      "t",
      "o",
      "m",
      "i",
      "r",
      "o",
      "i"
    ],
    "rationale": "Correct Answer: A. Treat as severe hypertension without acute target organ damage and arrange timely oral medication initiation, reinstitution, or intensification\n\nThe 2025 AHA/ACC guideline uses the term severe hypertension for BP >180/120 mmHg without evidence of acute target organ damage. These patients should be evaluated and treated in the outpatient setting with timely oral medication initiation, reinstitution, or intensification when appropriate."
  },
  {
    "id": "HTN-011",
    "disease": "Hypertension",
    "concept_tag": "ace_inhibitor_arb_role_in_diabetes_and_albuminuria",
    "type": "ktype",
    "stem": "A patient has diabetes, hypertension, eGFR 74 mL/min/1.73m², and UACR 45 mg/g. Which statements are accurate?\n\nI. Albuminuria can indicate kidney risk even when serum creatinine appears normal.\n\nII. ACE inhibitor or ARB therapy is appropriate in diabetes and hypertension when albuminuria is present.\n\nIII. Albuminuria should be ignored unless eGFR is <30 mL/min/1.73m².\n\nIV. BP optimization becomes more important when albuminuria is present.",
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
        "text": "II and III only"
      },
      {
        "key": "e",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "c",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: C. I, II, and IV only\n\nAlbuminuria may identify early kidney involvement despite preserved eGFR or normal serum creatinine. In adults with diabetes and hypertension, ACE inhibitor or ARB therapy is recommended when CKD is identified by eGFR <60 or albuminuria ≥30 mg/g. BP optimization is important for kidney and cardiovascular risk reduction."
  },
  {
    "id": "HTN-012",
    "disease": "Hypertension",
    "concept_tag": "lifestyle_interventions",
    "type": "sata",
    "stem": "Which lifestyle interventions are highlighted as high-yield strategies for BP reduction in the Week 1 hypertension content? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Weight reduction"
      },
      {
        "key": "b",
        "text": "DASH-style eating pattern"
      },
      {
        "key": "c",
        "text": "Sodium restriction"
      },
      {
        "key": "d",
        "text": "Increased physical activity"
      },
      {
        "key": "e",
        "text": "Routine high-dose potassium supplementation for every patient regardless of kidney function"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nThe Week 1 content highlights weight reduction, DASH diet, sodium restriction, increased physical activity, reduced alcohol intake, and tobacco cessation as high-yield lifestyle counseling points. Potassium strategies require patient-specific evaluation, especially in CKD or with drugs that affect potassium handling."
  },
  {
    "id": "HTN-013",
    "disease": "Hypertension",
    "concept_tag": "medication_monitoring_after_ace_inhibitor_titration",
    "type": "sba",
    "stem": "A pharmacist increases lisinopril for a patient with uncontrolled hypertension. Which monitoring plan is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Monitor BP response, serum creatinine/eGFR, and potassium"
      },
      {
        "key": "b",
        "text": "Monitor only heart rate"
      },
      {
        "key": "c",
        "text": "Monitor only A1c"
      },
      {
        "key": "d",
        "text": "No monitoring is needed if the patient feels well"
      }
    ],
    "correct": [
      "a",
      "m",
      "b",
      "r",
      "s",
      "c",
      "a",
      "p"
    ],
    "rationale": "Correct Answer: A. Monitor BP response, serum creatinine/eGFR, and potassium\n\nAfter ACE inhibitor therapy is initiated or adjusted, the pharmacist should monitor BP response, renal function, potassium, adverse effects, and adherence. Feeling well does not ensure safety or effectiveness."
  },
  {
    "id": "HTN-014",
    "disease": "Hypertension",
    "concept_tag": "beta_blockers_and_first_line_therapy",
    "type": "sba",
    "stem": "A patient with newly diagnosed uncomplicated primary hypertension has no history of coronary heart disease or heart failure. Which statement about beta blockers is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Beta blockers are preferred first-line therapy for all patients with hypertension."
      },
      {
        "key": "b",
        "text": "Beta blockers are not recommended as first-line agents unless a compelling indication such as coronary heart disease or heart failure is present."
      },
      {
        "key": "c",
        "text": "Beta blockers should always be combined with an ACE inhibitor and AR"
      },
      {
        "key": "b",
        "text": ""
      },
      {
        "key": "d",
        "text": "Beta blockers should be used instead of lifestyle modification."
      }
    ],
    "correct": [
      "b",
      "b",
      "b",
      "a",
      "n",
      "r",
      "a",
      "f",
      "a",
      "u",
      "a",
      "c",
      "i",
      "s",
      "a",
      "c",
      "h",
      "d",
      "o",
      "h",
      "f",
      "i",
      "p"
    ],
    "rationale": "Correct Answer: B. Beta blockers are not recommended as first-line agents unless a compelling indication such as coronary heart disease or heart failure is present.\n\nThe 2025 AHA/ACC guideline notes that beta blockers are not recommended as first-line agents unless the patient has coronary heart disease or heart failure. Preferred first-line agents for primary hypertension include ACE inhibitors, ARBs, thiazide-type diuretics, and dihydropyridine calcium channel blockers."
  },
  {
    "id": "HTN-015",
    "disease": "Hypertension",
    "concept_tag": "single_pill_combination_and_adherence",
    "type": "ktype",
    "stem": "Which statements about initial combination therapy are accurate?\n\nI. Stage 2 hypertension commonly warrants two first-line agents from different classes.\n\nII. Single-pill combinations may improve adherence and help patients reach BP control faster.\n\nIII. Combining an ACE inhibitor, ARB, and direct renin inhibitor is preferred for faster BP reduction.\n\nIV. Stage 1 hypertension can often begin with one first-line agent when medication is indicated.",
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
        "text": "II and III only"
      },
      {
        "key": "e",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "c",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: C. I, II, and IV only\n\nStage 2 hypertension supports use of two first-line agents from different classes, ideally as a single-pill combination when possible. Stage 1 hypertension can often begin with one first-line agent when medication is appropriate. Simultaneous ACE inhibitor, ARB, and/or direct renin inhibitor use is not recommended due to potential harm."
  },
  {
    "id": "HTN-016",
    "disease": "Hypertension",
    "concept_tag": "patient_specific_contributors_to_uncontrolled_bp",
    "type": "sba",
    "stem": "Maria is a 54-year-old patient with BP 146/92 mmHg, repeat 144/90 mmHg, type 2 diabetes, obesity, frequent restaurant meals, missed medications 2–3 times weekly, incorrect home BP technique, and recurrent ibuprofen use for knee pain. Which assessment best explains her uncontrolled BP?",
    "options": [
      {
        "key": "a",
        "text": "Her BP is uncontrolled only because lisinopril is always ineffective in diabetes."
      },
      {
        "key": "b",
        "text": "Her BP is likely multifactorial, with adherence, technique, lifestyle sodium intake, obesity, and NSAID use contributing."
      },
      {
        "key": "c",
        "text": "Her BP is controlled because she denies symptoms."
      },
      {
        "key": "d",
        "text": "Her BP should be ignored until UACR is obtained."
      }
    ],
    "correct": [
      "b",
      "h",
      "b",
      "i",
      "l",
      "m",
      "w",
      "a",
      "t",
      "l",
      "s",
      "i",
      "o",
      "a",
      "n",
      "u",
      "c"
    ],
    "rationale": "Correct Answer: B. Her BP is likely multifactorial, with adherence, technique, lifestyle sodium intake, obesity, and NSAID use contributing.\n\nThe Patient A Tuesday case identifies multiple contributors to uncontrolled BP, including nonadherence, incorrect home BP technique, obesity, high sodium intake from restaurant meals, and NSAID use. Students should avoid assuming treatment failure without evaluating these factors."
  },
  {
    "id": "HTN-017",
    "disease": "Hypertension",
    "concept_tag": "avoiding_overreaction_to_one_bp_reading",
    "type": "sba",
    "stem": "A student sees one clinic BP reading of 142/88 mmHg and immediately diagnoses uncontrolled hypertension and recommends adding two medications. Which critique is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "This is always correct because one elevated reading confirms uncontrolled hypertension."
      },
      {
        "key": "b",
        "text": "The student should confirm accurate measurement, review repeat and home readings, assess adherence, and evaluate contributing factors before escalating therapy."
      },
      {
        "key": "c",
        "text": "The student should never treat hypertension unless the patient has symptoms."
      },
      {
        "key": "d",
        "text": "The student should stop all current antihypertensives and restart therapy later."
      }
    ],
    "correct": [
      "b",
      "t",
      "s",
      "s",
      "c",
      "a",
      "m",
      "r",
      "r",
      "a",
      "h",
      "r",
      "a",
      "a",
      "a",
      "e",
      "c",
      "f",
      "b",
      "e",
      "t"
    ],
    "rationale": "Correct Answer: B. The student should confirm accurate measurement, review repeat and home readings, assess adherence, and evaluate contributing factors before escalating therapy.\n\nA common student mistake is treating one elevated reading as definitive hypertension or treatment failure. The pharmacist should assess measurement accuracy, home BP readings, adherence, lifestyle factors, and interfering medications."
  },
  {
    "id": "HTN-018",
    "disease": "Hypertension",
    "concept_tag": "ckd_and_raas_therapy",
    "type": "sata",
    "stem": "Which statements are accurate regarding ACE inhibitor or ARB therapy in patients with hypertension and kidney risk? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "ACE inhibitor or ARB therapy is recommended in adults with diabetes and hypertension when CKD is identified by eGFR <60 mL/min/1.73m² or albuminuria ≥30 mg/g."
      },
      {
        "key": "b",
        "text": "ACE inhibitor plus ARB combination therapy is preferred to maximize kidney protection."
      },
      {
        "key": "c",
        "text": "Renal function and potassium should be monitored when using ACE inhibitor or ARB therapy."
      },
      {
        "key": "d",
        "text": "Albuminuria can influence antihypertensive medication selection even when serum creatinine is not markedly elevated."
      },
      {
        "key": "e",
        "text": "ACE inhibitors and ARBs have no role in diabetes-related kidney risk."
      }
    ],
    "correct": [
      "a",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, C, D\n\nACE inhibitor or ARB therapy is recommended in diabetes and hypertension when CKD is identified by albuminuria or reduced eGFR. Monitoring renal function and potassium is important. Albuminuria can reveal kidney risk before serum creatinine is obviously abnormal."
  },
  {
    "id": "HTN-019",
    "disease": "Hypertension",
    "concept_tag": "lifestyle_impact_and_counseling",
    "type": "ktype",
    "stem": "A patient with hypertension asks whether lifestyle changes are worth making if medications are likely needed. Which statements are accurate?\n\nI. Lifestyle changes are recommended for prevention and treatment of elevated BP and hypertension.\n\nII. Weight reduction, DASH-style eating, sodium reduction, and physical activity can meaningfully lower BP.\n\nIII. Lifestyle counseling is unnecessary once medication is started.\n\nIV. Lifestyle changes may also support diabetes and weight-management goals.",
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
        "text": "II and III only"
      },
      {
        "key": "e",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "c",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: C. I, II, and IV only\n\nLifestyle changes remain foundational even when medications are used. Weight reduction, DASH-style eating, sodium restriction, and physical activity are high-yield BP interventions and often support broader cardiometabolic goals."
  },
  {
    "id": "HTN-020",
    "disease": "Hypertension",
    "concept_tag": "longitudinal_clinical_reasoning",
    "type": "sata",
    "stem": "A patient’s BP improves from 146/92 mmHg to 136/84 mmHg after medication optimization, adherence improvement, and lifestyle changes. She has diabetes and a new UACR of 45 mg/g. Which interpretations are appropriate? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "The patient has improved but remains above the general goal of <130/80 mmHg."
      },
      {
        "key": "b",
        "text": "Albuminuria increases the importance of kidney protection and BP optimization."
      },
      {
        "key": "c",
        "text": "Improvement means the hypertension problem is completely resolved."
      },
      {
        "key": "d",
        "text": "A normal serum creatinine would make UACR irrelevant."
      },
      {
        "key": "e",
        "text": "The pharmacist should assess the trend, adherence, tolerability, and residual risk before deciding whether to intensify therapy."
      }
    ],
    "correct": [
      "a",
      "b",
      "e"
    ],
    "rationale": "Correct Answer: A, B, E\n\nImprovement and goal attainment are not the same. A patient can improve substantially and still have residual BP, kidney, and cardiovascular risk. Albuminuria identifies kidney risk even when creatinine appears acceptable. The pharmacist should consider trends, adherence, tolerability, and residual risk."
  },
  {
    "id": "T2DM-001",
    "disease": "Type 2 Diabetes",
    "concept_tag": "a1c_goals",
    "type": "sba",
    "stem": "For many nonpregnant adults with type 2 diabetes, what is the general A1c goal used in the Week 1 teaching summary?",
    "options": [
      {
        "key": "a",
        "text": "<5.0%"
      },
      {
        "key": "b",
        "text": "<6.0% for every patient"
      },
      {
        "key": "c",
        "text": "<7.0%, individualized based on patient-specific factors"
      },
      {
        "key": "d",
        "text": "<9.0% for every patient"
      }
    ],
    "correct": [
      "c",
      "i",
      "b",
      "o",
      "p",
      "f"
    ],
    "rationale": "Correct Answer: C. <7.0%, individualized based on patient-specific factors\n\nThe Week 1 T2DM teaching summary lists a general A1c goal of <7%, while emphasizing that goals should be individualized based on age, comorbidities, life expectancy, hypoglycemia risk, and patient preferences."
  },
  {
    "id": "T2DM-002",
    "disease": "Type 2 Diabetes",
    "concept_tag": "initial_evaluation",
    "type": "sata",
    "stem": "Which factors should be assessed when evaluating a patient with type 2 diabetes in the Week 1 ambulatory care workflow? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "A1c"
      },
      {
        "key": "b",
        "text": "eGFR"
      },
      {
        "key": "c",
        "text": "UACR"
      },
      {
        "key": "d",
        "text": "ASCVD history"
      },
      {
        "key": "e",
        "text": "Heart failure history"
      },
      {
        "key": "f",
        "text": "CKD status"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ],
    "rationale": "Correct Answer: A, B, C, D, E, F\n\nThe Week 1 T2DM teaching summary recommends assessing A1c, eGFR, UACR, weight/BMI, ASCVD history, heart failure history, and CKD status. These factors drive modern diabetes medication selection beyond A1c alone."
  },
  {
    "id": "T2DM-003",
    "disease": "Type 2 Diabetes",
    "concept_tag": "first_line_therapy_and_exceptions",
    "type": "sba",
    "stem": "Which statement best reflects the Week 1 T2DM medication selection framework?",
    "options": [
      {
        "key": "a",
        "text": "Metformin plus lifestyle modification is appropriate for many patients, but ASCVD, CKD, heart failure, and obesity may shift medication priorities."
      },
      {
        "key": "b",
        "text": "Metformin must always be used alone for at least two years before adding any other medication."
      },
      {
        "key": "c",
        "text": "Medication selection should be based only on A1c."
      },
      {
        "key": "d",
        "text": "GLP-1 receptor agonists and SGLT2 inhibitors should only be considered after insulin failure."
      }
    ],
    "correct": [
      "a",
      "m",
      "p",
      "l",
      "m",
      "i",
      "a",
      "f",
      "m",
      "p",
      "b",
      "a",
      "c",
      "h",
      "f",
      "a",
      "o",
      "m",
      "s",
      "m",
      "p"
    ],
    "rationale": "Correct Answer: A. Metformin plus lifestyle modification is appropriate for many patients, but ASCVD, CKD, heart failure, and obesity may shift medication priorities.\n\nThe Week 1 summary states that most patients start with metformin plus lifestyle modification, but exceptions occur when ASCVD, CKD, heart failure, or significant obesity predominates. Medication selection should not be based only on A1c."
  },
  {
    "id": "T2DM-004",
    "disease": "Type 2 Diabetes",
    "concept_tag": "metformin_renal_considerations",
    "type": "sba",
    "stem": "Which statement about metformin and kidney function is most appropriate based on the ADA 2026 source material?",
    "options": [
      {
        "key": "a",
        "text": "Metformin should be initiated at any eGFR if the patient has type 2 diabetes."
      },
      {
        "key": "b",
        "text": "Metformin should not be initiated if eGFR is <45 mL/min/1.73m² and should be discontinued if eGFR is <30 mL/min/1.73m²."
      },
      {
        "key": "c",
        "text": "Metformin is preferred when kidney function is rapidly fluctuating because it has no renal safety concerns."
      },
      {
        "key": "d",
        "text": "Metformin should be stopped whenever eGFR is below 90 mL/min/1.73m²."
      }
    ],
    "correct": [
      "b",
      "m",
      "s",
      "n",
      "b",
      "i",
      "i",
      "e",
      "i",
      "m",
      "a",
      "s",
      "b",
      "d",
      "i",
      "e",
      "i",
      "m"
    ],
    "rationale": "Correct Answer: B. Metformin should not be initiated if eGFR is <45 mL/min/1.73m² and should be discontinued if eGFR is <30 mL/min/1.73m².\n\nThe ADA 2026 source material notes that metformin can be used with caution but should not be initiated if eGFR is <45 mL/min/1.73m² and should be discontinued with eGFR <30 mL/min/1.73m²."
  },
  {
    "id": "T2DM-005",
    "disease": "Type 2 Diabetes",
    "concept_tag": "glp_1_receptor_agonists",
    "type": "sata",
    "stem": "Which benefits are associated with GLP-1 receptor agonists in the Week 1 T2DM teaching summary? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Weight loss"
      },
      {
        "key": "b",
        "text": "A1c reduction"
      },
      {
        "key": "c",
        "text": "ASCVD benefit"
      },
      {
        "key": "d",
        "text": "Increased hypoglycemia risk as the primary therapeutic benefit"
      },
      {
        "key": "e",
        "text": "Kidney protection as the only reason to use the class"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": "Correct Answer: A, B, C\n\nThe Week 1 T2DM summary lists weight loss, A1c reduction, and ASCVD benefit as key GLP-1 receptor agonist benefits. GLP-1 receptor agonists are not selected because hypoglycemia is the desired effect."
  },
  {
    "id": "T2DM-006",
    "disease": "Type 2 Diabetes",
    "concept_tag": "sglt2_inhibitors",
    "type": "sata",
    "stem": "Which benefits are associated with SGLT2 inhibitors in the Week 1 T2DM teaching summary? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Kidney protection"
      },
      {
        "key": "b",
        "text": "Heart failure benefit"
      },
      {
        "key": "c",
        "text": "Cardiovascular benefit"
      },
      {
        "key": "d",
        "text": "Guaranteed normalization of A1c without lifestyle changes"
      },
      {
        "key": "e",
        "text": "Replacement for renal monitoring"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": "Correct Answer: A, B, C\n\nThe Week 1 T2DM summary lists kidney protection, heart failure benefit, and cardiovascular benefit as key SGLT2 inhibitor benefits. These medications do not eliminate the need for monitoring or lifestyle modification."
  },
  {
    "id": "T2DM-007",
    "disease": "Type 2 Diabetes",
    "concept_tag": "cardiorenal_protection_independent_of_a1c",
    "type": "sba",
    "stem": "A patient with type 2 diabetes has A1c 7.1%, CKD, and established ASCVD. A student says, “Because the A1c is almost at goal, there is no reason to consider medications with cardiovascular or kidney benefit.” Which response is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Correct; medication selection is based only on A1c."
      },
      {
        "key": "b",
        "text": "Incorrect; CKD, ASCVD, and heart failure risk can influence therapy selection independent of A1c."
      },
      {
        "key": "c",
        "text": "Correct; GLP-1 receptor agonists and SGLT2 inhibitors only matter when A1c is >10%."
      },
      {
        "key": "d",
        "text": "Incorrect only if the patient is younger than 40 years old."
      }
    ],
    "correct": [
      "b",
      "i",
      "c",
      "a",
      "a",
      "h",
      "f",
      "r",
      "c",
      "i",
      "t",
      "s",
      "i",
      "o",
      "a"
    ],
    "rationale": "Correct Answer: B. Incorrect; CKD, ASCVD, and heart failure risk can influence therapy selection independent of A1c.\n\nThe Week 1 T2DM teaching summary emphasizes that CKD, ASCVD, or heart failure should influence therapy selection independent of A1c goals. This is one of the central modern diabetes management principles."
  },
  {
    "id": "T2DM-008",
    "disease": "Type 2 Diabetes",
    "concept_tag": "statin_therapy_in_diabetes",
    "type": "sba",
    "stem": "A 54-year-old patient with type 2 diabetes has LDL-C 112 mg/dL and no prior MI or stroke. Which statement best reflects the Week 1 T2DM teaching summary?",
    "options": [
      {
        "key": "a",
        "text": "Statin therapy is generally not considered unless LDL-C is >190 mg/d"
      },
      {
        "key": "l",
        "text": ""
      },
      {
        "key": "b",
        "text": "Most adults age 40–75 years with diabetes should receive statin therapy."
      },
      {
        "key": "c",
        "text": "Statins are only used after a cardiovascular event."
      },
      {
        "key": "d",
        "text": "Statins should be avoided in all patients with diabetes."
      }
    ],
    "correct": [
      "b",
      "m",
      "a",
      "a",
      "y",
      "w",
      "d",
      "s",
      "r",
      "s",
      "t"
    ],
    "rationale": "Correct Answer: B. Most adults age 40–75 years with diabetes should receive statin therapy.\n\nThe Week 1 T2DM summary states that most adults age 40–75 years with diabetes should receive statin therapy. The Patient A teaching materials reinforce that statins are preventive medications and should not be delayed until LDL becomes “very high.”"
  },
  {
    "id": "T2DM-009",
    "disease": "Type 2 Diabetes",
    "concept_tag": "a1c_monitoring_frequency",
    "type": "sba",
    "stem": "A patient with type 2 diabetes has an A1c above goal and therapy is being adjusted. Based on the Week 1 T2DM teaching summary, how often should A1c generally be monitored until controlled?",
    "options": [
      {
        "key": "a",
        "text": "Every month"
      },
      {
        "key": "b",
        "text": "Every 3 months"
      },
      {
        "key": "c",
        "text": "Every 2 years"
      },
      {
        "key": "d",
        "text": "Only when the patient develops symptoms"
      }
    ],
    "correct": [
      "b",
      "e",
      "m"
    ],
    "rationale": "Correct Answer: B. Every 3 months\n\nThe Week 1 T2DM teaching summary recommends A1c monitoring every 3 months until controlled."
  },
  {
    "id": "T2DM-010",
    "disease": "Type 2 Diabetes",
    "concept_tag": "uacr_and_egfr_interpretation",
    "type": "sba",
    "stem": "Maria has type 2 diabetes, eGFR 74 mL/min/1.73m², serum creatinine 0.95 mg/dL, and UACR 45 mg/g. Which interpretation is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Kidney risk can be dismissed because serum creatinine is normal."
      },
      {
        "key": "b",
        "text": "UACR 45 mg/g suggests moderately increased albuminuria and should influence kidney-protection planning."
      },
      {
        "key": "c",
        "text": "UACR is only useful when eGFR is <30 mL/min/1.73m²."
      },
      {
        "key": "d",
        "text": "Albuminuria only matters in patients with type 1 diabetes."
      }
    ],
    "correct": [
      "b",
      "u",
      "m",
      "s",
      "m",
      "i",
      "a",
      "a",
      "s",
      "i",
      "k",
      "p"
    ],
    "rationale": "Correct Answer: B. UACR 45 mg/g suggests moderately increased albuminuria and should influence kidney-protection planning.\n\nPatient A’s Wednesday case identifies UACR 45 mg/g as moderately increased albuminuria. The teaching guide emphasizes that albuminuria can be an early marker of diabetic kidney injury and that normal creatinine does not rule out kidney risk."
  },
  {
    "id": "T2DM-011",
    "disease": "Type 2 Diabetes",
    "concept_tag": "diabetes_medication_selection_with_obesity",
    "type": "sba",
    "stem": "A patient with type 2 diabetes remains above A1c goal despite metformin optimization. She has obesity and strongly desires weight loss. She has no major access barriers documented. Which medication class should the pharmacist strongly consider discussing as part of future intensification?",
    "options": [
      {
        "key": "a",
        "text": "GLP-1 receptor agonist"
      },
      {
        "key": "b",
        "text": "Routine sulfonylurea escalation as the only reasonable next step"
      },
      {
        "key": "c",
        "text": "Discontinue all diabetes medications and use lifestyle only"
      },
      {
        "key": "d",
        "text": "Beta blocker therapy"
      }
    ],
    "correct": [
      "a",
      "g",
      "r",
      "a"
    ],
    "rationale": "Correct Answer: A. GLP-1 receptor agonist\n\nGLP-1 receptor agonists provide A1c reduction, weight loss, and ASCVD benefit. In the Week 1 cases, obesity and patient interest in weight loss are important factors when considering therapy intensification."
  },
  {
    "id": "T2DM-012",
    "disease": "Type 2 Diabetes",
    "concept_tag": "sglt2_inhibitor_and_albuminuria",
    "type": "ktype",
    "stem": "A patient with type 2 diabetes has persistent albuminuria despite improved A1c and BP. Which statements are accurate?\n\nI. SGLT2 inhibitors should be considered when kidney protection is a treatment priority.\n\nII. Cardiorenal risk can remain elevated even when A1c improves.\n\nIII. Albuminuria is irrelevant if the patient has no hypoglycemia.\n\nIV. Medication selection should consider kidney protection, not just glucose lowering.",
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
        "text": "II and III only"
      },
      {
        "key": "e",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "c",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: C. I, II, and IV only\n\nSGLT2 inhibitors have kidney, heart failure, and cardiovascular benefits. Diabetes care should address cardiorenal risk beyond A1c. Albuminuria is clinically meaningful regardless of hypoglycemia symptoms."
  },
  {
    "id": "T2DM-013",
    "disease": "Type 2 Diabetes",
    "concept_tag": "cost_and_access_barriers",
    "type": "sba",
    "stem": "James has A1c 8.8% and BP 152/94 mmHg. His chart lists empagliflozin as active, but further questioning reveals he never started it because of cost and has been stretching other medications. What is the most appropriate pharmacist interpretation?",
    "options": [
      {
        "key": "a",
        "text": "His diabetes is uncontrolled because empagliflozin failed pharmacologically."
      },
      {
        "key": "b",
        "text": "The primary issue is likely medication access and non-initiation, so adding another medication without addressing affordability may be inappropriate."
      },
      {
        "key": "c",
        "text": "The pharmacist should ignore cost because it is not a medication-related problem."
      },
      {
        "key": "d",
        "text": "The patient should be labeled noncompliant without further intervention."
      }
    ],
    "correct": [
      "b",
      "t",
      "p",
      "i",
      "i",
      "l",
      "m",
      "a",
      "a",
      "n",
      "s",
      "a",
      "a",
      "m",
      "w",
      "a",
      "a",
      "m",
      "b",
      "i"
    ],
    "rationale": "Correct Answer: B. The primary issue is likely medication access and non-initiation, so adding another medication without addressing affordability may be inappropriate.\n\nPatient B is designed to test whether students uncover access and affordability barriers rather than reflexively escalating therapy. A medication cannot be judged ineffective if the patient never obtained or started it."
  },
  {
    "id": "T2DM-014",
    "disease": "Type 2 Diabetes",
    "concept_tag": "medication_access_interventions",
    "type": "sata",
    "stem": "Which pharmacist actions may help address medication affordability or access barriers in a patient with uncontrolled type 2 diabetes? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Formulary review"
      },
      {
        "key": "b",
        "text": "Prior authorization support"
      },
      {
        "key": "c",
        "text": "Tier exception or formulary alternative assessment"
      },
      {
        "key": "d",
        "text": "Manufacturer assistance or cost comparison resources"
      },
      {
        "key": "e",
        "text": "Ignoring refill behavior if the patient says “I take everything”"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nThe Patient B teaching guide identifies practical pharmacist strategies such as formulary review, prior authorization, tier exceptions, manufacturer assistance, cost comparison, refill synchronization, and ongoing monitoring. Patients may minimize adherence or cost barriers, so refill behavior should not be ignored."
  },
  {
    "id": "T2DM-015",
    "disease": "Type 2 Diabetes",
    "concept_tag": "a1c_only_mistake",
    "type": "ktype",
    "stem": "Linda is a 68-year-old patient with type 2 diabetes, CKD stage 3a, UACR 452 mg/g, prior STEMI, BP above goal, LDL-C above secondary prevention targets, and A1c 8.2%. Which statements reflect strong clinical reasoning?\n\nI. Her A1c is above goal and should be addressed.\n\nII. Her severe albuminuria and established ASCVD create major cardiorenal risk beyond A1c.\n\nIII. The highest A1c value is always the highest clinical priority.\n\nIV. Multiple interventions may be reasonable, but the student must justify prioritization.",
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
        "text": "II and III only"
      },
      {
        "key": "e",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "c",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: C. I, II, and IV only\n\nLinda’s A1c is above goal, but the core learning objective is prioritization of cardiorenal risk reduction. Her CKD, severe albuminuria, and prior STEMI mean the student should not focus exclusively on A1c. Multiple interventions may be reasonable if justified."
  },
  {
    "id": "T2DM-016",
    "disease": "Type 2 Diabetes",
    "concept_tag": "ckd_staging_and_albuminuria",
    "type": "sba",
    "stem": "Linda has type 2 diabetes, eGFR 52 mL/min/1.73m², and UACR 452 mg/g. Which interpretation is most appropriate for Week 1 clinical reasoning?",
    "options": [
      {
        "key": "a",
        "text": "CKD risk is low because eGFR is above 45 mL/min/1.73m²."
      },
      {
        "key": "b",
        "text": "The patient has CKD stage 3a with severely increased albuminuria and high cardiorenal risk."
      },
      {
        "key": "c",
        "text": "UACR should be ignored because the patient is already taking medications."
      },
      {
        "key": "d",
        "text": "Albuminuria only matters if the patient is not taking metformin."
      }
    ],
    "correct": [
      "b",
      "t",
      "p",
      "h",
      "c",
      "s",
      "w",
      "s",
      "i",
      "a",
      "a",
      "h",
      "c",
      "r"
    ],
    "rationale": "Correct Answer: B. The patient has CKD stage 3a with severely increased albuminuria and high cardiorenal risk.\n\nPatient C’s case identifies CKD stage 3a and severe albuminuria. The teaching guide emphasizes that students should not focus only on eGFR and should recognize UACR >300 mg/g as high risk."
  },
  {
    "id": "T2DM-017",
    "disease": "Type 2 Diabetes",
    "concept_tag": "monitoring_plan",
    "type": "sata",
    "stem": "Which monitoring parameters are included in the Week 1 T2DM teaching summary? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "A1c every 3 months until controlled"
      },
      {
        "key": "b",
        "text": "eGFR"
      },
      {
        "key": "c",
        "text": "UACR"
      },
      {
        "key": "d",
        "text": "Weight"
      },
      {
        "key": "e",
        "text": "Blood pressure"
      },
      {
        "key": "f",
        "text": "SMBG or CGM when appropriate"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f"
    ],
    "rationale": "Correct Answer: A, B, C, D, E, F\n\nThe T2DM teaching summary includes A1c every 3 months until controlled, eGFR, UACR, SMBG or CGM when appropriate, weight, and blood pressure."
  },
  {
    "id": "T2DM-018",
    "disease": "Type 2 Diabetes",
    "concept_tag": "therapy_intensification_timing",
    "type": "sba",
    "stem": "A patient’s A1c improves from 8.8% to 7.9% after finally starting empagliflozin and resolving cost-related medication stretching. BP also improves but remains above goal. Which approach is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Assume the problem is solved because both A1c and BP improved."
      },
      {
        "key": "b",
        "text": "Immediately add multiple new medications without reassessing affordability or adherence."
      },
      {
        "key": "c",
        "text": "Recognize improvement but reassess adherence, access sustainability, home monitoring, lifestyle, and whether further intensification is needed."
      },
      {
        "key": "d",
        "text": "Stop empagliflozin because A1c did not immediately fall below 7%."
      }
    ],
    "correct": [
      "c",
      "r",
      "i",
      "b",
      "r",
      "a",
      "a",
      "s",
      "h",
      "m",
      "l",
      "a",
      "w",
      "f",
      "i",
      "i",
      "n"
    ],
    "rationale": "Correct Answer: C. Recognize improvement but reassess adherence, access sustainability, home monitoring, lifestyle, and whether further intensification is needed.\n\nPatient B’s follow-up teaching guide emphasizes that improvement and goal attainment are not the same. The pharmacist must reassess affordability sustainability, adherence, monitoring, and residual barriers before deciding whether to intensify therapy."
  },
  {
    "id": "T2DM-019",
    "disease": "Type 2 Diabetes",
    "concept_tag": "hypoglycemia_and_individualization",
    "type": "ktype",
    "stem": "Which statements about individualizing A1c goals are accurate?\n\nI. A1c goals should consider hypoglycemia risk.\n\nII. A1c goals should consider comorbidities and life expectancy.\n\nIII. Patient preferences may influence the individualized goal.\n\nIV. Every adult with type 2 diabetes must have the exact same A1c goal regardless of clinical context.",
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
        "text": "I, II, and III only"
      },
      {
        "key": "d",
        "text": "II and IV only"
      },
      {
        "key": "e",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "c",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: C. I, II, and III only\n\nThe Week 1 T2DM summary states that goals should be individualized based on age, comorbidities, life expectancy, hypoglycemia risk, and patient preferences. A single universal target for every patient ignores individual risk and benefit."
  },
  {
    "id": "T2DM-020",
    "disease": "Type 2 Diabetes",
    "concept_tag": "common_student_mistakes",
    "type": "sata",
    "stem": "Which actions represent common student mistakes in modern type 2 diabetes management? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Focusing only on A1c while ignoring ASCVD risk"
      },
      {
        "key": "b",
        "text": "Ignoring CKD status and UACR"
      },
      {
        "key": "c",
        "text": "Missing statin indications in adults with diabetes"
      },
      {
        "key": "d",
        "text": "Delaying treatment intensification when goals remain unmet"
      },
      {
        "key": "e",
        "text": "Considering kidney-protective therapy when CKD or albuminuria is present"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nThe Week 1 T2DM teaching summary identifies common mistakes including focusing only on A1c, ignoring ASCVD risk, ignoring CKD status, delaying treatment intensification, missing statin indications, and missing kidney-protective therapies. Considering kidney-protective therapy when CKD or albuminuria is present is appropriate, not a mistake."
  },
  {
    "id": "T2DM-021",
    "disease": "Type 2 Diabetes",
    "concept_tag": "glp_1_ra_versus_sglt2_inhibitor_selection",
    "type": "sba",
    "stem": "A patient with type 2 diabetes has A1c 7.5%, BMI 34 kg/m², UACR 45 mg/g, no known ASCVD, and strong interest in weight loss. Which answer best reflects patient-specific medication planning?",
    "options": [
      {
        "key": "a",
        "text": "Consider GLP-1 receptor agonist therapy because it may address A1c, weight, and cardiometabolic risk, while also considering SGLT2 inhibitor therapy for kidney protection if albuminuria persists."
      },
      {
        "key": "b",
        "text": "Ignore weight because it should not influence diabetes medication selection."
      },
      {
        "key": "c",
        "text": "Use insulin immediately because A1c is above 7%."
      },
      {
        "key": "d",
        "text": "Avoid discussing future therapy because A1c improved from baseline."
      }
    ],
    "correct": [
      "a",
      "c",
      "g",
      "r",
      "a",
      "t",
      "b",
      "i",
      "m",
      "a",
      "a",
      "w",
      "a",
      "c",
      "r",
      "w",
      "a",
      "c",
      "s",
      "i",
      "t",
      "f",
      "k",
      "p",
      "i",
      "a",
      "p"
    ],
    "rationale": "Correct Answer: A. Consider GLP-1 receptor agonist therapy because it may address A1c, weight, and cardiometabolic risk, while also considering SGLT2 inhibitor therapy for kidney protection if albuminuria persists.\n\nThis patient remains above goal and has obesity and albuminuria. GLP-1 receptor agonists offer A1c reduction, weight loss, and ASCVD benefit, while SGLT2 inhibitors provide kidney, heart failure, and cardiovascular benefit. The best answer recognizes patient-specific planning rather than a single-factor decision."
  },
  {
    "id": "T2DM-022",
    "disease": "Type 2 Diabetes",
    "concept_tag": "cardiorenal_protection_in_established_ascvd_and_ckd",
    "type": "sata",
    "stem": "Linda has type 2 diabetes, CKD stage 3a, severe albuminuria, prior STEMI, obesity, and A1c 8.2%. Which factors should influence diabetes medication selection beyond A1c? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Established ASCVD"
      },
      {
        "key": "b",
        "text": "CKD status"
      },
      {
        "key": "c",
        "text": "Severe albuminuria"
      },
      {
        "key": "d",
        "text": "Obesity"
      },
      {
        "key": "e",
        "text": "Patient fear of dialysis and desire to avoid another heart attack"
      },
      {
        "key": "f",
        "text": "The assumption that A1c is the only relevant outcome"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nModern T2DM management considers ASCVD, CKD, heart failure risk, obesity, kidney protection, cardiovascular risk reduction, and patient preferences. Linda’s prior STEMI, CKD, albuminuria, obesity, and goals/fears all matter. A1c is important but not the only relevant outcome."
  },
  {
    "id": "T2DM-023",
    "disease": "Type 2 Diabetes",
    "concept_tag": "medication_counseling",
    "type": "sba",
    "stem": "A patient is willing to start a weekly injectable GLP-1 receptor agonist for type 2 diabetes and weight management. Which counseling approach is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "“This medication only lowers blood sugar and has no relevance to weight or cardiovascular risk.”"
      },
      {
        "key": "b",
        "text": "“This medication may help lower A1c and support weight loss; we should discuss administration, expected benefits, side effects, monitoring, and insurance coverage.”"
      },
      {
        "key": "c",
        "text": "“Because it is injectable, there is no need to discuss adherence.”"
      },
      {
        "key": "d",
        "text": "“This medication replaces all lifestyle counseling.”"
      }
    ],
    "correct": [
      "b",
      "m",
      "m",
      "h",
      "l",
      "a",
      "a",
      "s",
      "w",
      "l",
      "w",
      "s",
      "d",
      "a",
      "e",
      "b",
      "s",
      "e",
      "m",
      "a",
      "i",
      "c"
    ],
    "rationale": "Correct Answer: B. “This medication may help lower A1c and support weight loss; we should discuss administration, expected benefits, side effects, monitoring, and insurance coverage.”\n\nGLP-1 receptor agonists provide A1c reduction, weight loss, and ASCVD benefit. Pharmacist-specific interventions include injection training, adherence assessment, insurance navigation, and monitoring plan development."
  },
  {
    "id": "T2DM-024",
    "disease": "Type 2 Diabetes",
    "concept_tag": "sglt2_inhibitor_counseling_and_monitoring",
    "type": "sata",
    "stem": "A patient starts empagliflozin after a cost barrier is resolved. Which follow-up areas should the pharmacist assess? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Whether the patient actually obtained and started the medication"
      },
      {
        "key": "b",
        "text": "Adherence and refill sustainability"
      },
      {
        "key": "c",
        "text": "Renal function/eGFR monitoring"
      },
      {
        "key": "d",
        "text": "Patient-reported tolerability and side effects"
      },
      {
        "key": "e",
        "text": "Whether cost barriers may return"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nThe Patient B case emphasizes that access, non-initiation, and medication stretching can drive uncontrolled diabetes. The T2DM summary includes renal monitoring and pharmacist roles in adherence assessment, insurance navigation, and monitoring plan development. Starting therapy is not enough; sustainability matters."
  },
  {
    "id": "T2DM-025",
    "disease": "Type 2 Diabetes",
    "concept_tag": "prioritization_in_complex_care",
    "type": "ktype",
    "stem": "A patient with T2DM, CKD stage 3a, severe albuminuria, prior STEMI, LDL-C above secondary prevention targets, BP above goal, obesity, and A1c 8.2% asks, “What should I focus on first?” Which statements are appropriate?\n\nI. The pharmacist should recognize that several interventions may be reasonable.\n\nII. The pharmacist should justify the priority based on cardiorenal and ASCVD risk reduction.\n\nIII. The pharmacist should treat every abnormality equally without prioritization.\n\nIV. The pharmacist should address the patient’s concern about dialysis and future cardiovascular events.",
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
        "text": "II and III only"
      },
      {
        "key": "e",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "c",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: C. I, II, and IV only\n\nPatient C is designed to test prioritization. Several interventions may be reasonable, but students must justify which intervention should come first based on cardiorenal and ASCVD risk. Patient fears and preferences should be addressed."
  },
  {
    "id": "T2DM-026",
    "disease": "Type 2 Diabetes",
    "concept_tag": "recognizing_residual_risk",
    "type": "sba",
    "stem": "Linda’s UACR improves from 452 mg/g to 330 mg/g after therapy optimization, and her BP improves to approximately 130/78 mmHg. Which interpretation is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Her risk is eliminated because UACR improved."
      },
      {
        "key": "b",
        "text": "The improvement is meaningful, but persistent severe albuminuria and established ASCVD mean residual risk remains."
      },
      {
        "key": "c",
        "text": "UACR improvement means lipid management no longer matters."
      },
      {
        "key": "d",
        "text": "A1c is now the only issue that should be discussed."
      }
    ],
    "correct": [
      "b",
      "t",
      "i",
      "i",
      "m",
      "b",
      "p",
      "s",
      "a",
      "a",
      "e",
      "a",
      "m",
      "r",
      "r",
      "r"
    ],
    "rationale": "Correct Answer: B. The improvement is meaningful, but persistent severe albuminuria and established ASCVD mean residual risk remains.\n\nPatient C’s follow-up teaching emphasizes that risk reduction and risk elimination are not the same. Improvement in UACR is meaningful, but persistent severe albuminuria, CKD, diabetes, and prior STEMI mean residual renal and cardiovascular risk remains."
  },
  {
    "id": "T2DM-027",
    "disease": "Type 2 Diabetes",
    "concept_tag": "medication_non_initiation_versus_nonadherence",
    "type": "sba",
    "stem": "A patient’s chart lists empagliflozin as active, but the patient says, “I never picked it up because it was too expensive.” Which term best describes this issue?",
    "options": [
      {
        "key": "a",
        "text": "Medication non-initiation due to access barrier"
      },
      {
        "key": "b",
        "text": "Pharmacologic treatment failure"
      },
      {
        "key": "c",
        "text": "Therapeutic duplication"
      },
      {
        "key": "d",
        "text": "Medication allergy"
      }
    ],
    "correct": [
      "a",
      "m",
      "n",
      "d",
      "t",
      "a",
      "b"
    ],
    "rationale": "Correct Answer: A. Medication non-initiation due to access barrier\n\nMedication non-initiation occurs when a prescribed medication is never started. In Patient B, empagliflozin was prescribed but never started because of cost. This is different from pharmacologic failure."
  },
  {
    "id": "T2DM-028",
    "disease": "Type 2 Diabetes",
    "concept_tag": "preventive_care_and_diabetes_management",
    "type": "sba",
    "stem": "A patient with type 2 diabetes is overdue for several vaccines. How should the pharmacist approach this in a chronic disease management visit?",
    "options": [
      {
        "key": "a",
        "text": "Ignore preventive care because only A1c matters."
      },
      {
        "key": "b",
        "text": "Identify preventive care gaps and incorporate them into the plan or coordinate follow-up."
      },
      {
        "key": "c",
        "text": "Delay all preventive care until the patient reaches A1c <6%."
      },
      {
        "key": "d",
        "text": "Stop diabetes medications until vaccines are complete."
      }
    ],
    "correct": [
      "b",
      "i",
      "p",
      "c",
      "g",
      "a",
      "i",
      "t",
      "i",
      "t",
      "p",
      "o",
      "c",
      "f"
    ],
    "rationale": "Correct Answer: B. Identify preventive care gaps and incorporate them into the plan or coordinate follow-up.\n\nThe Week 1 patient cases repeatedly include preventive care gaps, and students are expected to identify them. Diabetes care is comprehensive and includes risk reduction beyond glucose lowering."
  },
  {
    "id": "T2DM-029",
    "disease": "Type 2 Diabetes",
    "concept_tag": "therapy_escalation_and_safety",
    "type": "sata",
    "stem": "Which situations should prompt concern or escalation in type 2 diabetes management according to the Week 1 T2DM teaching summary? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "A1c >9%"
      },
      {
        "key": "b",
        "text": "Symptomatic hyperglycemia"
      },
      {
        "key": "c",
        "text": "Progressive CKD"
      },
      {
        "key": "d",
        "text": "Recurrent hypoglycemia"
      },
      {
        "key": "e",
        "text": "Failure of dual therapy"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nThe Week 1 T2DM teaching summary lists escalation points including A1c >9%, symptomatic hyperglycemia, progressive CKD, recurrent hypoglycemia, and failure of dual therapy."
  },
  {
    "id": "T2DM-030",
    "disease": "Type 2 Diabetes",
    "concept_tag": "glp_1_ra_and_residual_ckd_cv_risk",
    "type": "sba",
    "stem": "A patient with type 2 diabetes, CKD, albuminuria, obesity, and elevated cardiovascular risk is already taking metformin and an SGLT2 inhibitor. A GLP-1 receptor agonist is being considered. Which rationale is strongest?",
    "options": [
      {
        "key": "a",
        "text": "It is being considered only because the patient’s fasting glucose is slightly elevated."
      },
      {
        "key": "b",
        "text": "It may provide A1c reduction, weight loss, and cardiovascular benefit as part of broader cardiorenal risk reduction."
      },
      {
        "key": "c",
        "text": "It will replace the need for BP and lipid management."
      },
      {
        "key": "d",
        "text": "It should be used only if the patient refuses all lifestyle changes."
      }
    ],
    "correct": [
      "b",
      "i",
      "m",
      "p",
      "a",
      "r",
      "w",
      "l",
      "a",
      "c",
      "b",
      "a",
      "p",
      "o",
      "b",
      "c",
      "r",
      "r"
    ],
    "rationale": "Correct Answer: B. It may provide A1c reduction, weight loss, and cardiovascular benefit as part of broader cardiorenal risk reduction.\n\nThe T2DM teaching summary highlights GLP-1 receptor agonist benefits, including A1c reduction, weight loss, and ASCVD benefit. In complex patients, medication selection should be tied to broader cardiovascular and kidney risk reduction, not glucose alone."
  },
  {
    "id": "T2DM-031",
    "disease": "Type 2 Diabetes",
    "concept_tag": "longitudinal_response_assessment",
    "type": "ktype",
    "stem": "A patient’s A1c improves from 8.2% to 7.5%, BP improves, LDL-C improves, and weight decreases after medication optimization and lifestyle changes. However, A1c and BP remain above goal and UACR is elevated. Which statements are accurate?\n\nI. The current plan shows evidence of benefit.\n\nII. The patient has achieved all long-term goals and needs no further monitoring.\n\nIII. Residual risk remains and should be reassessed longitudinally.\n\nIV. UACR should influence future kidney-protection planning.",
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
        "text": "I, III, and IV only"
      },
      {
        "key": "d",
        "text": "II and III only"
      },
      {
        "key": "e",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "c",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: C. I, III, and IV only\n\nImprovement across A1c, BP, LDL-C, and weight suggests progress, but persistent above-goal values and albuminuria indicate residual risk. UACR should shape kidney-protection planning."
  },
  {
    "id": "T2DM-032",
    "disease": "Type 2 Diabetes",
    "concept_tag": "patient_preferences",
    "type": "sba",
    "stem": "A patient with type 2 diabetes says, “I really want to lose weight and avoid complications like kidney failure.” Which response best reflects patient-centered diabetes care?",
    "options": [
      {
        "key": "a",
        "text": "“Your preferences do not affect medication selection.”"
      },
      {
        "key": "b",
        "text": "“We can consider your goals along with A1c, weight, kidney markers, cardiovascular risk, safety, and access when selecting therapy.”"
      },
      {
        "key": "c",
        "text": "“Weight loss is unrelated to diabetes management.”"
      },
      {
        "key": "d",
        "text": "“The only thing that matters is whether you need insulin today.”"
      }
    ],
    "correct": [
      "b",
      "c",
      "c",
      "y",
      "g",
      "a",
      "w",
      "a",
      "w",
      "k",
      "m",
      "c",
      "r",
      "s",
      "a",
      "a",
      "w",
      "s",
      "t"
    ],
    "rationale": "Correct Answer: B. “We can consider your goals along with A1c, weight, kidney markers, cardiovascular risk, safety, and access when selecting therapy.”\n\nThe T2DM teaching summary emphasizes individualized goals and patient preferences. Patient cases reinforce that weight loss motivation, fear of complications, adherence, access, and health literacy should shape the care plan."
  },
  {
    "id": "T2DM-033",
    "disease": "Type 2 Diabetes",
    "concept_tag": "smbg_cgm_appropriateness",
    "type": "sba",
    "stem": "Which statement best reflects the Week 1 T2DM monitoring framework?",
    "options": [
      {
        "key": "a",
        "text": "SMBG or CGM may be used when appropriate, but monitoring should be individualized based on the patient and regimen."
      },
      {
        "key": "b",
        "text": "Every patient with type 2 diabetes must check glucose every hour."
      },
      {
        "key": "c",
        "text": "Glucose monitoring is never useful in type 2 diabetes."
      },
      {
        "key": "d",
        "text": "SMBG replaces the need for A1c monitoring."
      }
    ],
    "correct": [
      "a",
      "s",
      "o",
      "c",
      "m",
      "b",
      "u",
      "w",
      "a",
      "b",
      "m",
      "s",
      "b",
      "i",
      "b",
      "o",
      "t",
      "p",
      "a",
      "r"
    ],
    "rationale": "Correct Answer: A. SMBG or CGM may be used when appropriate, but monitoring should be individualized based on the patient and regimen.\n\nThe Week 1 T2DM teaching summary includes SMBG or CGM “when appropriate,” along with A1c, eGFR, UACR, weight, and BP monitoring."
  },
  {
    "id": "T2DM-034",
    "disease": "Type 2 Diabetes",
    "concept_tag": "secondary_prevention_and_residual_risk",
    "type": "sba",
    "stem": "A patient with type 2 diabetes has a prior STEMI, CKD stage 3a, albuminuria, LDL-C above secondary prevention targets, and A1c above goal. Which student statement shows the strongest clinical reasoning?",
    "options": [
      {
        "key": "a",
        "text": "“I will focus only on A1c because diabetes management is glucose management.”"
      },
      {
        "key": "b",
        "text": "“The prior STEMI makes this a secondary prevention patient, so ASCVD risk reduction must be prioritized along with diabetes and kidney management.”"
      },
      {
        "key": "c",
        "text": "“ASCVD history does not affect diabetes medication selection.”"
      },
      {
        "key": "d",
        "text": "“CKD and albuminuria are irrelevant because the patient has no chest pain.”"
      }
    ],
    "correct": [
      "b",
      "p",
      "s",
      "m",
      "t",
      "a",
      "s",
      "p",
      "p",
      "s",
      "a",
      "r",
      "r",
      "m",
      "b",
      "p",
      "a",
      "w",
      "d",
      "a",
      "k",
      "m"
    ],
    "rationale": "Correct Answer: B. “The prior STEMI makes this a secondary prevention patient, so ASCVD risk reduction must be prioritized along with diabetes and kidney management.”\n\nPatient C’s case emphasizes established ASCVD, CKD, severe albuminuria, and prioritization. Secondary prevention status changes therapeutic priorities and requires broader risk reduction than A1c alone."
  },
  {
    "id": "T2DM-035",
    "disease": "Type 2 Diabetes",
    "concept_tag": "medication_reconciliation",
    "type": "sata",
    "stem": "In a patient with uncontrolled type 2 diabetes despite multiple medications listed in the chart, which medication reconciliation questions are important? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "“Which medications do you actually take each day?”"
      },
      {
        "key": "b",
        "text": "“Have you been able to pick up each medication?”"
      },
      {
        "key": "c",
        "text": "“Do you ever skip or stretch doses because of cost?”"
      },
      {
        "key": "d",
        "text": "“What side effects or concerns do you have?”"
      },
      {
        "key": "e",
        "text": "“Are any medications listed in your chart that you never started?”"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nPatient B demonstrates that active chart medications may not reflect actual use. Medication reconciliation should uncover non-initiation, cost-related nonadherence, refill delays, side effects, and patient concerns."
  },
  {
    "id": "T2DM-036",
    "disease": "Type 2 Diabetes",
    "concept_tag": "avoiding_insulin_overuse_in_complex_cardiorenal_risk",
    "type": "sba",
    "stem": "Linda has A1c 8.2%, CKD stage 3a, severe albuminuria, prior STEMI, obesity, and is already taking metformin, empagliflozin, and semaglutide. Which recommendation would be least aligned with the Patient C teaching guide?",
    "options": [
      {
        "key": "a",
        "text": "Prioritize cardiorenal risk reduction and justify the selected intervention."
      },
      {
        "key": "b",
        "text": "Consider optimizing therapies with cardiovascular, kidney, and weight-related benefits."
      },
      {
        "key": "c",
        "text": "Start basal insulin as the first and only priority without addressing cardiorenal risk, BP, albuminuria, or ASCV"
      },
      {
        "key": "d",
        "text": ""
      },
      {
        "key": "d",
        "text": "Discuss patient concerns about dialysis and another heart attack."
      }
    ],
    "correct": [
      "c",
      "s",
      "b",
      "i",
      "a",
      "t",
      "f",
      "a",
      "o",
      "p",
      "w",
      "a",
      "c",
      "r",
      "b",
      "a",
      "o",
      "a"
    ],
    "rationale": "Correct Answer: C. Start basal insulin as the first and only priority without addressing cardiorenal risk, BP, albuminuria, or ASCVD.\n\nThe Patient C teaching guide identifies focusing exclusively on A1c as a critical miss. Basal insulin may lower glucose but does not address the broader cardiorenal prioritization required in this case. The issue is not that insulin is never appropriate, but that making it the first and only priority ignores the case’s main learning objectives."
  },
  {
    "id": "T2DM-037",
    "disease": "Type 2 Diabetes",
    "concept_tag": "renal_monitoring",
    "type": "sba",
    "stem": "A patient with type 2 diabetes has no UACR documented. Which action is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Do not assess albuminuria unless serum creatinine is abnormal."
      },
      {
        "key": "b",
        "text": "Order or recommend UACR to assess kidney risk."
      },
      {
        "key": "c",
        "text": "Assume kidney risk is absent because the patient feels well."
      },
      {
        "key": "d",
        "text": "Focus only on fasting glucose and ignore renal monitoring."
      }
    ],
    "correct": [
      "b",
      "o",
      "o",
      "r",
      "u",
      "t",
      "a",
      "k",
      "r"
    ],
    "rationale": "Correct Answer: B. Order or recommend UACR to assess kidney risk.\n\nThe Week 1 T2DM teaching summary includes UACR and eGFR in the initial evaluation and monitoring framework. Patient A’s case specifically identifies missing UACR as a gap that prevents complete kidney risk assessment."
  },
  {
    "id": "T2DM-038",
    "disease": "Type 2 Diabetes",
    "concept_tag": "follow_up_and_monitoring_after_improvement",
    "type": "sata",
    "stem": "A patient improves from A1c 8.8% to 7.1%, BP becomes controlled, and weight decreases after improved adherence and SGLT2 inhibitor initiation. Which follow-up actions remain appropriate? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Continue monitoring A1c, renal function, UACR, BP, and weight"
      },
      {
        "key": "b",
        "text": "Reassess medication access sustainability"
      },
      {
        "key": "c",
        "text": "Reinforce adherence and lifestyle progress"
      },
      {
        "key": "d",
        "text": "Address preventive care gaps"
      },
      {
        "key": "e",
        "text": "Stop follow-up because the patient improved"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nImprovement does not eliminate the need for ongoing monitoring, access planning, adherence support, lifestyle reinforcement, or preventive care. Patient B’s follow-up cases emphasize long-term sustainability and residual barriers."
  },
  {
    "id": "T2DM-039",
    "disease": "Type 2 Diabetes",
    "concept_tag": "integrating_bp_and_diabetes_care",
    "type": "ktype",
    "stem": "A patient has type 2 diabetes, BP above goal, UACR 45 mg/g, obesity, and A1c above goal. Which statements are accurate?\n\nI. BP control is part of diabetes complication risk reduction.\n\nII. Albuminuria should prompt attention to kidney protection.\n\nIII. Weight and patient preference may influence diabetes medication selection.\n\nIV. Diabetes management should ignore blood pressure because BP is a separate disease state.",
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
        "text": "I, II, and III only"
      },
      {
        "key": "d",
        "text": "II and IV only"
      },
      {
        "key": "e",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "c",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: C. I, II, and III only\n\nDiabetes care requires comprehensive risk reduction, including BP management, kidney monitoring, cardiorenal therapy selection, and patient-centered medication planning. Blood pressure is not separate from diabetes complication prevention."
  },
  {
    "id": "T2DM-040",
    "disease": "Type 2 Diabetes",
    "concept_tag": "overall_diabetes_management_strategy",
    "type": "sba",
    "stem": "Which student care plan best reflects the Week 1 approach to modern type 2 diabetes management?",
    "options": [
      {
        "key": "a",
        "text": "Focus only on A1c and ignore ASCVD risk, CKD, albuminuria, weight, adherence, cost, and patient preferences."
      },
      {
        "key": "b",
        "text": "Assess A1c, renal function, UACR, ASCVD/HF/CKD status, weight, adherence, access, safety, and patient goals before selecting or modifying therapy."
      },
      {
        "key": "c",
        "text": "Avoid GLP-1 receptor agonists and SGLT2 inhibitors in all patients because they are newer than metformin."
      },
      {
        "key": "d",
        "text": "Wait until symptoms develop before intensifying therapy or monitoring complications."
      }
    ],
    "correct": [
      "b",
      "a",
      "a",
      "r",
      "f",
      "u",
      "a",
      "s",
      "w",
      "a",
      "a",
      "s",
      "a",
      "p",
      "g",
      "b",
      "s",
      "o",
      "m",
      "t"
    ],
    "rationale": "Correct Answer: B. Assess A1c, renal function, UACR, ASCVD/HF/CKD status, weight, adherence, access, safety, and patient goals before selecting or modifying therapy.\n\nThe Week 1 T2DM framework emphasizes individualized, patient-specific therapy selection that accounts for glycemia, cardiorenal risk, obesity, monitoring, adherence, access, and preferences. This approach prepares students to manage the Week 1 patients rather than simply chase glucose values."
  }
];
