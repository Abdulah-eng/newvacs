export const PASS_THRESHOLD = 90;

export const QUIZ_ITEMS = [
  {
    "id": "HTN-001",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "blood_pressure_classification",
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
      "c"
    ],
    "rationale": " Stage 1 hypertension is defined as systolic blood pressure 130–139 mmHg or diastolic blood pressure 80–89 mmHg. This patient’s average blood pressure of 136/84 mmHg meets both systolic and diastolic criteria for stage 1 hypertension. A. Normal blood pressure is <120/<80 mmHg. B. Elevated blood pressure is 120–129 systolic and <80 diastolic. D. Stage 2 hypertension is ≥140 systolic or ≥90 diastolic. 2025 AHA/ACC Hypertension Guideline; HTN Guideline Teaching Summary Classifying blood pressure correctly before making treatment decisions. Pass. The correct answer is clearly supported and distractors reflect adjacent BP categories."
  },
  {
    "id": "HTN-002",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "blood_pressure_goal",
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
      "c"
    ],
    "rationale": " The Week 1 hypertension summary and 2025 AHA/ACC guideline emphasize a blood pressure goal of <130/80 mmHg for most adults with hypertension, with patient-specific considerations for special populations. A. <150/90 mmHg is too permissive for most adults in this module. B. <140/90 mmHg does not reflect the Week 1 guideline target for most adults. D. <120/70 mmHg is not the general treatment target used in this module. 2025 AHA/ACC Hypertension Guideline; HTN Guideline Teaching Summary Selecting a guideline-concordant BP goal for a patient with hypertension and diabetes. Pass. The question is foundational and unambiguous."
  },
  {
    "id": "HTN-003",
    "disease": "Hypertension",
    "type": "sata",
    "concept_tag": "first_line_antihypertensive_therapy",
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
    "rationale": " Preferred first-line drug classes include ACE inhibitors, ARBs, thiazide-type diuretics, and dihydropyridine calcium channel blockers. Beta blockers are not listed as universal first-line agents for uncomplicated primary hypertension and are generally reserved for compelling indications such as coronary heart disease or heart failure. E. Beta blockers are not preferred as first-line therapy for all patients without regard to comorbidities. HTN Guideline Teaching Summary; 2025 AHA/ACC Hypertension Guideline Identifying preferred first-line antihypertensive drug classes. Pass. All correct options are directly supported."
  },
  {
    "id": "HTN-004",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "treatment_threshold_in_diabetes",
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
      "b"
    ],
    "rationale": " The 2025 AHA/ACC guideline recommends initiation of BP-lowering medication for adults with hypertension and diabetes when average SBP is ≥130 mmHg or DBP is ≥80 mmHg, in addition to lifestyle intervention. A. The threshold is much lower for patients with diabetes. C. Diabetes changes the treatment threshold; waiting until ≥140/90 mmHg would miss guideline-directed risk reduction. D. This patient does not have severe hypertension or symptoms suggesting acute target organ damage. 2025 AHA/ACC Hypertension Guideline Applying treatment thresholds based on comorbid diabetes. Pass. The stem clearly identifies diabetes and repeated average BP ≥130/80 mmHg."
  },
  {
    "id": "HTN-005",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "monotherapy_versus_combination_therapy",
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
      "c"
    ],
    "rationale": " This patient has stage 2 hypertension. The Week 1 summary and 2025 AHA/ACC guideline support combination therapy for stage 2 hypertension, ideally using two first-line agents from different classes and using single-pill combinations when possible to support adherence. A. Lifestyle-only therapy is not appropriate for stage 2 hypertension. B. Monotherapy is more appropriate for stage 1 hypertension in many cases, not stage 2 hypertension. D. Beta blockers are not preferred first-line agents for uncomplicated primary hypertension. HTN Guideline Teaching Summary; 2025 AHA/ACC Hypertension Guideline Choosing initial therapy intensity based on hypertension stage. Pass. This is guideline-concordant and clinically relevant."
  },
  {
    "id": "HTN-006",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "follow_up_timing",
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
      "b"
    ],
    "rationale": " The Week 1 hypertension summary recommends follow-up approximately 1 month after medication initiation or adjustment. A 3–6 month interval is more appropriate when lifestyle modification alone is being used. A. Waiting only for symptoms is not appropriate because hypertension is often asymptomatic. C. 3–6 months applies to lifestyle-only management, not medication changes. D. 12 months is too long after a medication adjustment. HTN Guideline Teaching Summary Selecting appropriate follow-up timing after antihypertensive therapy changes. Pass. The timing is directly supported by the teaching summary."
  },
  {
    "id": "HTN-007",
    "disease": "Hypertension",
    "type": "sata",
    "concept_tag": "initial_evaluation_and_baseline_labs",
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
    "rationale": " Initial hypertension evaluation should include confirmation of accurate BP measurement, review of home BP readings when available, ASCVD risk assessment, evaluation for diabetes and kidney disease, lifestyle assessment, review of medications that increase BP, and baseline labs including renal function and potassium. E. Medication contributors should be reviewed early because they may explain uncontrolled BP or reduce the effectiveness of therapy. HTN Guideline Teaching Summary; 2025 AHA/ACC Hypertension Guideline Performing a complete pharmacist-led hypertension assessment. Pass. Correct answers are comprehensive but not excessive."
  },
  {
    "id": "HTN-008",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "home_blood_pressure_monitoring_technique",
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
      "b"
    ],
    "rationale": " Students should assess BP technique before interpreting home readings. Common errors include taking readings immediately after activity, crossing legs, incorrect cuff positioning, and talking during measurement. Home BP monitoring is useful only when performed with appropriate technique and validated devices. A. Intensification without assessing adherence or technique may lead to inappropriate overtreatment. C. Home BP readings should not be automatically dismissed; they should be evaluated for accuracy. D. Cuffless devices such as smartwatches should not replace validated BP measurement methods. HTN Guideline Teaching Summary; Patient A Tuesday; 2025 AHA/ACC Hypertension Guideline Distinguishing true uncontrolled hypertension from measurement error. Pass. The case tests a common ambulatory care mistake."
  },
  {
    "id": "HTN-009",
    "disease": "Hypertension",
    "type": "sata",
    "concept_tag": "adherence_before_intensification",
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
    "rationale": " Uncontrolled hypertension may reflect nonadherence, poor home BP technique, lifestyle factors such as excess sodium intake, or medications that increase BP such as NSAIDs. Hypertension is often asymptomatic, so feeling well does not confirm control. E. Symptom presence or absence is not a reliable way to determine BP control or treatment success. HTN Guideline Teaching Summary; Patient A Tuesday Teaching Pearls Evaluating contributors to uncontrolled BP before escalating therapy. Pass. The question emphasizes clinical reasoning and medication reconciliation."
  },
  {
    "id": "HTN-010",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "severe_hypertension_versus_hypertensive_emergency",
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
      "a"
    ],
    "rationale": " The 2025 AHA/ACC guideline uses the term severe hypertension for BP >180/120 mmHg without evidence of acute target organ damage. These patients should be evaluated and treated in the outpatient setting with timely oral medication initiation, reinstitution, or intensification when appropriate. B. IV emergency therapy is reserved for hypertensive emergency with acute target organ damage. C. Annual follow-up is unsafe and inappropriate. D. Oral therapy is appropriate when severe hypertension lacks emergency features. 2025 AHA/ACC Hypertension Guideline Differentiating severe hypertension from hypertensive emergency. Pass. The wording avoids encouraging unsafe emergency misclassification."
  },
  {
    "id": "HTN-011",
    "disease": "Hypertension",
    "type": "ktype",
    "concept_tag": "ace_inhibitor_arb_role_in_diabetes_and_albuminuria",
    "stem": "A patient has diabetes, hypertension, eGFR 74 mL/min/1.73m², and UACR 45 mg/g. Which statements are accurate?\nI. Albuminuria can indicate kidney risk even when serum creatinine appears normal.\nII. ACE inhibitor or ARB therapy is appropriate in diabetes and hypertension when albuminuria is present.\nIII. Albuminuria should be ignored unless eGFR is <30 mL/min/1.73m².\nIV. BP optimization becomes more important when albuminuria is present.",
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
      "c"
    ],
    "rationale": " Albuminuria may identify early kidney involvement despite preserved eGFR or normal serum creatinine. In adults with diabetes and hypertension, ACE inhibitor or ARB therapy is recommended when CKD is identified by eGFR <60 or albuminuria ≥30 mg/g. BP optimization is important for kidney and cardiovascular risk reduction. III is incorrect because albuminuria should not be ignored when eGFR is preserved. 2025 AHA/ACC Hypertension Guideline; Patient A Wednesday; Patient A Tuesday Teaching Pearls Integrating UACR into hypertension and kidney-protection decisions. Pass. The question tests application rather than recall only."
  },
  {
    "id": "HTN-012",
    "disease": "Hypertension",
    "type": "sata",
    "concept_tag": "lifestyle_interventions",
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
    "rationale": " The Week 1 content highlights weight reduction, DASH diet, sodium restriction, increased physical activity, reduced alcohol intake, and tobacco cessation as high-yield lifestyle counseling points. Potassium strategies require patient-specific evaluation, especially in CKD or with drugs that affect potassium handling. E. Potassium supplementation should not be recommended universally without considering kidney function and medications that affect potassium. HTN Guideline Teaching Summary; 2025 AHA/ACC Hypertension Guideline Selecting safe, high-yield lifestyle counseling priorities. Pass. The incorrect option tests safety awareness."
  },
  {
    "id": "HTN-013",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "medication_monitoring_after_ace_inhibitor_titration",
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
      "a"
    ],
    "rationale": " After ACE inhibitor therapy is initiated or adjusted, the pharmacist should monitor BP response, renal function, potassium, adverse effects, and adherence. Feeling well does not ensure safety or effectiveness. B. Heart rate is not the key safety monitoring parameter for ACE inhibitor titration. C. A1c is relevant to diabetes, not ACE inhibitor safety monitoring. D. Lack of symptoms does not eliminate the need for monitoring. HTN Guideline Teaching Summary; Patient A Tuesday Teaching Pearls Developing a medication safety monitoring plan. Pass. The answer is supported and clinically actionable."
  },
  {
    "id": "HTN-014",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "beta_blockers_and_first_line_therapy",
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
        "text": "Beta blockers should always be combined with an ACE inhibitor and ARB."
      },
      {
        "key": "d",
        "text": "Beta blockers should be used instead of lifestyle modification."
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " The 2025 AHA/ACC guideline notes that beta blockers are not recommended as first-line agents unless the patient has coronary heart disease or heart failure. Preferred first-line agents for primary hypertension include ACE inhibitors, ARBs, thiazide-type diuretics, and dihydropyridine calcium channel blockers. A. This overgeneralizes beta blocker use. C. Combining ACE inhibitors, ARBs, and/or renin inhibitors is not recommended due to potential harm. D. Lifestyle modification remains part of hypertension management. 2025 AHA/ACC Hypertension Guideline; HTN Guideline Teaching Summary Selecting antihypertensive therapy based on compelling indications. Pass. The question avoids oversimplifying beta blocker use."
  },
  {
    "id": "HTN-015",
    "disease": "Hypertension",
    "type": "ktype",
    "concept_tag": "single_pill_combination_and_adherence",
    "stem": "Which statements about initial combination therapy are accurate?\nI. Stage 2 hypertension commonly warrants two first-line agents from different classes.\nII. Single-pill combinations may improve adherence and help patients reach BP control faster.\nIII. Combining an ACE inhibitor, ARB, and direct renin inhibitor is preferred for faster BP reduction.\nIV. Stage 1 hypertension can often begin with one first-line agent when medication is indicated.",
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
      "c"
    ],
    "rationale": " Stage 2 hypertension supports use of two first-line agents from different classes, ideally as a single-pill combination when possible. Stage 1 hypertension can often begin with one first-line agent when medication is appropriate. Simultaneous ACE inhibitor, ARB, and/or direct renin inhibitor use is not recommended due to potential harm. III is incorrect because combined ACE inhibitor/ARB/renin inhibitor use is harmful and not recommended. 2025 AHA/ACC Hypertension Guideline Applying combination therapy principles while avoiding unsafe RAAS combinations. Pass. The safety distractor is clear and supported."
  },
  {
    "id": "HTN-016",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "patient_specific_contributors_to_uncontrolled_bp",
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
      "b"
    ],
    "rationale": " The Patient A Tuesday case identifies multiple contributors to uncontrolled BP, including nonadherence, incorrect home BP technique, obesity, high sodium intake from restaurant meals, and NSAID use. Students should avoid assuming treatment failure without evaluating these factors. A. Lisinopril can be appropriate, especially in diabetes and albuminuria risk. C. Hypertension is often asymptomatic; absence of symptoms does not mean control. D. UACR is important but does not justify ignoring uncontrolled BP. Patient A Tuesday; HTN Guideline Teaching Summary Identifying multifactorial causes of uncontrolled hypertension. Pass. Strong patient-specific clinical reasoning question."
  },
  {
    "id": "HTN-017",
    "disease": "Hypertension",
    "type": "sba",
    "concept_tag": "avoiding_overreaction_to_one_bp_reading",
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
      "b"
    ],
    "rationale": " A common student mistake is treating one elevated reading as definitive hypertension or treatment failure. The pharmacist should assess measurement accuracy, home BP readings, adherence, lifestyle factors, and interfering medications. A. One isolated reading is insufficient for a full management decision. C. Symptoms are not required for hypertension treatment. D. Stopping therapy without rationale is unsafe. HTN Guideline Teaching Summary Avoiding premature intensification based on incomplete BP assessment. Pass. The item reinforces a common learner pitfall."
  },
  {
    "id": "HTN-018",
    "disease": "Hypertension",
    "type": "sata",
    "concept_tag": "ckd_and_raas_therapy",
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
    "rationale": " ACE inhibitor or ARB therapy is recommended in diabetes and hypertension when CKD is identified by albuminuria or reduced eGFR. Monitoring renal function and potassium is important. Albuminuria can reveal kidney risk before serum creatinine is obviously abnormal. B. Combining ACE inhibitor and ARB therapy is not recommended due to harm. E. ACE inhibitors and ARBs play an important role in albuminuria and kidney risk management. 2025 AHA/ACC Hypertension Guideline; HTN Guideline Teaching Summary; Patient A Wednesday Applying RAAS therapy principles safely in diabetes and kidney risk. Pass. The question tests both therapeutic selection and safety."
  },
  {
    "id": "HTN-019",
    "disease": "Hypertension",
    "type": "ktype",
    "concept_tag": "lifestyle_impact_and_counseling",
    "stem": "A patient with hypertension asks whether lifestyle changes are worth making if medications are likely needed. Which statements are accurate?\nI. Lifestyle changes are recommended for prevention and treatment of elevated BP and hypertension.\nII. Weight reduction, DASH-style eating, sodium reduction, and physical activity can meaningfully lower BP.\nIII. Lifestyle counseling is unnecessary once medication is started.\nIV. Lifestyle changes may also support diabetes and weight-management goals.",
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
      "c"
    ],
    "rationale": " Lifestyle changes remain foundational even when medications are used. Weight reduction, DASH-style eating, sodium restriction, and physical activity are high-yield BP interventions and often support broader cardiometabolic goals. III is incorrect because medications do not replace lifestyle counseling. HTN Guideline Teaching Summary; 2025 AHA/ACC Hypertension Guideline Counseling patients on combined medication and lifestyle strategies. Pass. The item tests counseling and long-term management."
  },
  {
    "id": "HTN-020",
    "disease": "Hypertension",
    "type": "sata",
    "concept_tag": "longitudinal_clinical_reasoning",
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
    "rationale": " Improvement and goal attainment are not the same. A patient can improve substantially and still have residual BP, kidney, and cardiovascular risk. Albuminuria identifies kidney risk even when creatinine appears acceptable. The pharmacist should consider trends, adherence, tolerability, and residual risk. C. Improvement does not mean risk has resolved. D. UACR remains clinically meaningful even with preserved eGFR or normal creatinine. Patient A Wednesday; HTN Guideline Teaching Summary; 2025 AHA/ACC Hypertension Guideline Interpreting longitudinal BP response and albuminuria together. Pass. This is an advanced application question. Type 2 Diabetes Questions"
  },
  {
    "id": "T2DM-001",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "a1c_goals",
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
      "c"
    ],
    "rationale": " The Week 1 T2DM teaching summary lists a general A1c goal of <7%, while emphasizing that goals should be individualized based on age, comorbidities, life expectancy, hypoglycemia risk, and patient preferences. A. <5.0% is not the general goal. B. <6.0% for every patient ignores individualization and hypoglycemia risk. D. <9.0% for every patient is too permissive as a general goal. T2DM Guideline Teaching Summary Identifying the general A1c target while recognizing the need for individualization. Pass. Foundational and directly supported."
  },
  {
    "id": "T2DM-002",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "initial_evaluation",
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
        "text": "Heart failure history F. CKD status"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": " The Week 1 T2DM teaching summary recommends assessing A1c, eGFR, UACR, weight/BMI, ASCVD history, heart failure history, and CKD status. These factors drive modern diabetes medication selection beyond A1c alone. All listed options are correct. This item is intentionally written with all options correct because it assesses whether students recognize the full baseline evaluation set. T2DM Guideline Teaching Summary Performing a complete diabetes assessment before selecting therapy. Pass. Although all options are correct, this is justified because the learning objective is comprehensive initial evaluation."
  },
  {
    "id": "T2DM-003",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "first_line_therapy_and_exceptions",
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
      "a"
    ],
    "rationale": " The Week 1 summary states that most patients start with metformin plus lifestyle modification, but exceptions occur when ASCVD, CKD, heart failure, or significant obesity predominates. Medication selection should not be based only on A1c. B. This delays appropriate therapy and ignores patient-specific indications. C. Modern diabetes management includes cardiorenal and weight considerations. D. GLP-1 receptor agonists and SGLT2 inhibitors may be appropriate before insulin depending on patient-specific factors. T2DM Guideline Teaching Summary Applying modern patient-specific diabetes medication selection. Pass. The item directly targets a core Week 1 concept."
  },
  {
    "id": "T2DM-004",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "metformin_renal_considerations",
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
      "b"
    ],
    "rationale": " The ADA 2026 source material notes that metformin can be used with caution but should not be initiated if eGFR is <45 mL/min/1.73m² and should be discontinued with eGFR <30 mL/min/1.73m². A. Kidney function affects metformin safety. C. Fluctuating kidney function can increase safety concerns such as lactic acidosis risk. D. eGFR below 90 alone is not an automatic reason to stop metformin. ADA Standards of Care in Diabetes—2026 Applying renal safety considerations to metformin therapy. Pass. The renal thresholds are directly supported by the ADA source material."
  },
  {
    "id": "T2DM-005",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "glp_1_receptor_agonists",
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
    "rationale": " The Week 1 T2DM summary lists weight loss, A1c reduction, and ASCVD benefit as key GLP-1 receptor agonist benefits. GLP-1 receptor agonists are not selected because hypoglycemia is the desired effect. D. Hypoglycemia is not the primary therapeutic benefit. E. The summary does not frame kidney protection as the only reason to use GLP-1 receptor agonists. T2DM Guideline Teaching Summary Recognizing GLP-1 receptor agonist clinical benefits. Pass. The correct options are directly supported."
  },
  {
    "id": "T2DM-006",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "sglt2_inhibitors",
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
    "rationale": " The Week 1 T2DM summary lists kidney protection, heart failure benefit, and cardiovascular benefit as key SGLT2 inhibitor benefits. These medications do not eliminate the need for monitoring or lifestyle modification. D. No medication guarantees A1c normalization without patient-specific management. E. Renal monitoring remains important. T2DM Guideline Teaching Summary Recognizing SGLT2 inhibitor cardiorenal benefits. Pass. The item is foundational and clear."
  },
  {
    "id": "T2DM-007",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "cardiorenal_protection_independent_of_a1c",
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
      "b"
    ],
    "rationale": " The Week 1 T2DM teaching summary emphasizes that CKD, ASCVD, or heart failure should influence therapy selection independent of A1c goals. This is one of the central modern diabetes management principles. A. A1c-only decision-making is a common student mistake. C. The threshold of A1c >10% is not the determining factor for cardiorenal therapy. D. Age alone is not the deciding factor in this scenario. T2DM Guideline Teaching Summary; Patient C Teaching Guide Distinguishing glycemic control from cardiorenal risk reduction. Pass. The question targets a key conceptual error."
  },
  {
    "id": "T2DM-008",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "statin_therapy_in_diabetes",
    "stem": "A 54-year-old patient with type 2 diabetes has LDL-C 112 mg/dL and no prior MI or stroke. Which statement best reflects the Week 1 T2DM teaching summary?",
    "options": [
      {
        "key": "a",
        "text": "Statin therapy is generally not considered unless LDL-C is >190 mg/dL."
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
      "b"
    ],
    "rationale": " The Week 1 T2DM summary states that most adults age 40–75 years with diabetes should receive statin therapy. The Patient A teaching materials reinforce that statins are preventive medications and should not be delayed until LDL becomes “very high.” A. This misses diabetes-related ASCVD risk reduction. C. Statins are used for primary prevention in many adults with diabetes, not only after events. D. Statins are not categorically avoided in diabetes. T2DM Guideline Teaching Summary; Patient A Tuesday Teaching Pearls Recognizing statin indications for ASCVD prevention in diabetes. Pass. The item is clinically relevant and guideline-aligned."
  },
  {
    "id": "T2DM-009",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "a1c_monitoring_frequency",
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
      "b"
    ],
    "rationale": " The Week 1 T2DM teaching summary recommends A1c monitoring every 3 months until controlled. A. Monthly A1c monitoring is not the standard interval in the teaching summary. C. Every 2 years is too infrequent for uncontrolled diabetes. D. Symptoms are not required to monitor glycemic control. T2DM Guideline Teaching Summary Selecting appropriate glycemic monitoring intervals. Pass. Directly supported."
  },
  {
    "id": "T2DM-010",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "uacr_and_egfr_interpretation",
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
      "b"
    ],
    "rationale": " Patient A’s Wednesday case identifies UACR 45 mg/g as moderately increased albuminuria. The teaching guide emphasizes that albuminuria can be an early marker of diabetic kidney injury and that normal creatinine does not rule out kidney risk. A. Normal creatinine does not eliminate kidney risk. C. UACR is clinically useful before eGFR is severely reduced. D. Albuminuria is relevant in type 2 diabetes. Patient A Wednesday; T2DM Guideline Teaching Summary Interpreting UACR and avoiding overreliance on serum creatinine. Pass. The item is patient-specific and clinically important."
  },
  {
    "id": "T2DM-011",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "diabetes_medication_selection_with_obesity",
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
      "a"
    ],
    "rationale": " GLP-1 receptor agonists provide A1c reduction, weight loss, and ASCVD benefit. In the Week 1 cases, obesity and patient interest in weight loss are important factors when considering therapy intensification. B. A sulfonylurea is not the only reasonable option and does not address the patient’s weight-related goals in the way a GLP-1 RA may. C. Discontinuing therapy is inappropriate when diabetes remains above goal. D. Beta blockers are not glucose-lowering medications. T2DM Guideline Teaching Summary; Patient A Wednesday/Thursday case trajectory Matching therapy selection to glycemic and weight-management goals. Pass. The item is aligned with module priorities."
  },
  {
    "id": "T2DM-012",
    "disease": "Type 2 Diabetes",
    "type": "ktype",
    "concept_tag": "sglt2_inhibitor_and_albuminuria",
    "stem": "A patient with type 2 diabetes has persistent albuminuria despite improved A1c and BP. Which statements are accurate?\nI. SGLT2 inhibitors should be considered when kidney protection is a treatment priority.\nII. Cardiorenal risk can remain elevated even when A1c improves.\nIII. Albuminuria is irrelevant if the patient has no hypoglycemia.\nIV. Medication selection should consider kidney protection, not just glucose lowering.",
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
      "c"
    ],
    "rationale": " SGLT2 inhibitors have kidney, heart failure, and cardiovascular benefits. Diabetes care should address cardiorenal risk beyond A1c. Albuminuria is clinically meaningful regardless of hypoglycemia symptoms. III is incorrect because albuminuria is a kidney and cardiovascular risk marker. T2DM Guideline Teaching Summary; Patient A Wednesday Teaching Pearls Applying cardiorenal protection concepts beyond glycemic control. Pass. Advanced, but fair and supported."
  },
  {
    "id": "T2DM-013",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "cost_and_access_barriers",
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
      "b"
    ],
    "rationale": " Patient B is designed to test whether students uncover access and affordability barriers rather than reflexively escalating therapy. A medication cannot be judged ineffective if the patient never obtained or started it. A. The medication did not fail; it was never started. C. Medication access is a medication-related problem. D. Labeling the patient without addressing barriers is poor clinical care. Patient B Tuesday Teaching Guide; T2DM Guideline Teaching Summary Distinguishing treatment failure from non-initiation due to access barriers. Pass. This is highly relevant to ambulatory care pharmacy."
  },
  {
    "id": "T2DM-014",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "medication_access_interventions",
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
    "rationale": " The Patient B teaching guide identifies practical pharmacist strategies such as formulary review, prior authorization, tier exceptions, manufacturer assistance, cost comparison, refill synchronization, and ongoing monitoring. Patients may minimize adherence or cost barriers, so refill behavior should not be ignored. E. Patients may report taking medications even when cost-related stretching or non-initiation is occurring. Patient B Tuesday Teaching Guide Developing practical access-focused pharmacist interventions. Pass. The item reinforces the access theme in Patient B."
  },
  {
    "id": "T2DM-015",
    "disease": "Type 2 Diabetes",
    "type": "ktype",
    "concept_tag": "a1c_only_mistake",
    "stem": "Linda is a 68-year-old patient with type 2 diabetes, CKD stage 3a, UACR 452 mg/g, prior STEMI, BP above goal, LDL-C above secondary prevention targets, and A1c 8.2%. Which statements reflect strong clinical reasoning?\nI. Her A1c is above goal and should be addressed.\nII. Her severe albuminuria and established ASCVD create major cardiorenal risk beyond A1c.\nIII. The highest A1c value is always the highest clinical priority.\nIV. Multiple interventions may be reasonable, but the student must justify prioritization.",
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
      "c"
    ],
    "rationale": " Linda’s A1c is above goal, but the core learning objective is prioritization of cardiorenal risk reduction. Her CKD, severe albuminuria, and prior STEMI mean the student should not focus exclusively on A1c. Multiple interventions may be reasonable if justified. III is incorrect because the highest A1c is not always the highest priority in a complex cardiorenal patient. Patient C Tuesday; Patient C Teaching Guide; T2DM Guideline Teaching Summary Prioritizing diabetes care in a complex patient with CKD and ASCVD. Pass. Advanced and strongly aligned with Patient C learning objectives."
  },
  {
    "id": "T2DM-016",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "ckd_staging_and_albuminuria",
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
      "b"
    ],
    "rationale": " Patient C’s case identifies CKD stage 3a and severe albuminuria. The teaching guide emphasizes that students should not focus only on eGFR and should recognize UACR >300 mg/g as high risk. A. eGFR alone understates risk; UACR is critical. C. Albuminuria remains clinically relevant despite current therapy. D. Albuminuria is not dependent on metformin use. Patient C Tuesday; Patient C Teaching Guide Interpreting eGFR and UACR together. Pass. The item directly tests a core Patient C objective."
  },
  {
    "id": "T2DM-017",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "monitoring_plan",
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
        "text": "Blood pressure F. SMBG or CGM when appropriate"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": " The T2DM teaching summary includes A1c every 3 months until controlled, eGFR, UACR, SMBG or CGM when appropriate, weight, and blood pressure. All answer choices are correct. This all-correct item is justified because the learning objective is to identify a complete monitoring framework. T2DM Guideline Teaching Summary Building a complete monitoring plan for type 2 diabetes. Pass. All-correct format is intentional and clinically justified."
  },
  {
    "id": "T2DM-018",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "therapy_intensification_timing",
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
      "c"
    ],
    "rationale": " Patient B’s follow-up teaching guide emphasizes that improvement and goal attainment are not the same. The pharmacist must reassess affordability sustainability, adherence, monitoring, and residual barriers before deciding whether to intensify therapy. A. Improvement does not mean all goals are met. B. Aggressive escalation may ignore recent therapy initiation and access issues. D. Empagliflozin may provide benefits beyond A1c and should not be stopped solely for incomplete short-term A1c response. Patient B Wednesday Teaching Guide; T2DM Guideline Teaching Summary Evaluating treatment response longitudinally and avoiding premature escalation. Pass. Strong intermediate application question."
  },
  {
    "id": "T2DM-019",
    "disease": "Type 2 Diabetes",
    "type": "ktype",
    "concept_tag": "hypoglycemia_and_individualization",
    "stem": "Which statements about individualizing A1c goals are accurate?\nI. A1c goals should consider hypoglycemia risk.\nII. A1c goals should consider comorbidities and life expectancy.\nIII. Patient preferences may influence the individualized goal.\nIV. Every adult with type 2 diabetes must have the exact same A1c goal regardless of clinical context.",
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
      "c"
    ],
    "rationale": " The Week 1 T2DM summary states that goals should be individualized based on age, comorbidities, life expectancy, hypoglycemia risk, and patient preferences. A single universal target for every patient ignores individual risk and benefit. IV is incorrect because the module explicitly emphasizes individualized goals. T2DM Guideline Teaching Summary Individualizing glycemic goals rather than applying a rigid target. Pass. The item reinforces safe patient-centered care."
  },
  {
    "id": "T2DM-020",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "common_student_mistakes",
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
    "rationale": " The Week 1 T2DM teaching summary identifies common mistakes including focusing only on A1c, ignoring ASCVD risk, ignoring CKD status, delaying treatment intensification, missing statin indications, and missing kidney-protective therapies. Considering kidney-protective therapy when CKD or albuminuria is present is appropriate, not a mistake. E. This is good clinical reasoning, not an error. T2DM Guideline Teaching Summary; Patient C Teaching Guide Recognizing and avoiding common clinical reasoning errors. Pass. The question directly assesses common student pitfalls."
  },
  {
    "id": "T2DM-021",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "glp_1_ra_versus_sglt2_inhibitor_selection",
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
      "a"
    ],
    "rationale": " This patient remains above goal and has obesity and albuminuria. GLP-1 receptor agonists offer A1c reduction, weight loss, and ASCVD benefit, while SGLT2 inhibitors provide kidney, heart failure, and cardiovascular benefit. The best answer recognizes patient-specific planning rather than a single-factor decision. B. Weight and patient preference are relevant. C. Insulin is not automatically required for A1c 7.5%. D. Improvement does not eliminate residual risk or future planning needs. T2DM Guideline Teaching Summary; Patient A Wednesday Teaching Guide Integrating A1c, obesity, albuminuria, and patient preference. Pass. Advanced and clinically realistic."
  },
  {
    "id": "T2DM-022",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "cardiorenal_protection_in_established_ascvd_and_ckd",
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
        "text": "Patient fear of dialysis and desire to avoid another heart attack F. The assumption that A1c is the only relevant outcome"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": " Modern T2DM management considers ASCVD, CKD, heart failure risk, obesity, kidney protection, cardiovascular risk reduction, and patient preferences. Linda’s prior STEMI, CKD, albuminuria, obesity, and goals/fears all matter. A1c is important but not the only relevant outcome. F. A1c-only decision-making is a common student mistake. T2DM Guideline Teaching Summary; Patient C Tuesday; Patient C Teaching Guide Applying multidimensional medication selection in complex diabetes. Pass. The item tests a major Week 1 learning objective."
  },
  {
    "id": "T2DM-023",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "medication_counseling",
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
      "b"
    ],
    "rationale": " GLP-1 receptor agonists provide A1c reduction, weight loss, and ASCVD benefit. Pharmacist-specific interventions include injection training, adherence assessment, insurance navigation, and monitoring plan development. A. This understates GLP-1 RA benefits. C. Injection therapy still requires adherence counseling. D. Medication does not replace lifestyle counseling. T2DM Guideline Teaching Summary Providing patient-centered GLP-1 RA counseling. Pass. The question tests practical pharmacy counseling."
  },
  {
    "id": "T2DM-024",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "sglt2_inhibitor_counseling_and_monitoring",
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
    "rationale": " The Patient B case emphasizes that access, non-initiation, and medication stretching can drive uncontrolled diabetes. The T2DM summary includes renal monitoring and pharmacist roles in adherence assessment, insurance navigation, and monitoring plan development. Starting therapy is not enough; sustainability matters. All options are correct because each is relevant to SGLT2 inhibitor follow-up and access-focused ambulatory care. Patient B Tuesday/Wednesday Teaching Guides; T2DM Guideline Teaching Summary Following up on medication initiation, safety, access, and adherence. Pass. All-correct format is justified by comprehensive follow-up objective."
  },
  {
    "id": "T2DM-025",
    "disease": "Type 2 Diabetes",
    "type": "ktype",
    "concept_tag": "prioritization_in_complex_care",
    "stem": "A patient with T2DM, CKD stage 3a, severe albuminuria, prior STEMI, LDL-C above secondary prevention targets, BP above goal, obesity, and A1c 8.2% asks, “What should I focus on first?” Which statements are appropriate?\nI. The pharmacist should recognize that several interventions may be reasonable.\nII. The pharmacist should justify the priority based on cardiorenal and ASCVD risk reduction.\nIII. The pharmacist should treat every abnormality equally without prioritization.\nIV. The pharmacist should address the patient’s concern about dialysis and future cardiovascular events.",
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
      "c"
    ],
    "rationale": " Patient C is designed to test prioritization. Several interventions may be reasonable, but students must justify which intervention should come first based on cardiorenal and ASCVD risk. Patient fears and preferences should be addressed. III is incorrect because treating every abnormality equally demonstrates poor prioritization. Patient C Tuesday Teaching Guide; T2DM Guideline Teaching Summary Prioritizing competing diabetes, kidney, BP, and ASCVD risks. Pass. This is an advanced clinical reasoning item."
  },
  {
    "id": "T2DM-026",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "recognizing_residual_risk",
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
      "b"
    ],
    "rationale": " Patient C’s follow-up teaching emphasizes that risk reduction and risk elimination are not the same. Improvement in UACR is meaningful, but persistent severe albuminuria, CKD, diabetes, and prior STEMI mean residual renal and cardiovascular risk remains. A. Improvement does not eliminate risk. C. Lipid management remains important in secondary prevention. D. A1c-only focus ignores residual cardiorenal and ASCVD risk. Patient C Wednesday Teaching Guide; Patient C Thursday case trajectory Interpreting response to therapy without underestimating residual risk. Pass. Advanced and case-aligned."
  },
  {
    "id": "T2DM-027",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "medication_non_initiation_versus_nonadherence",
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
      "a"
    ],
    "rationale": " Medication non-initiation occurs when a prescribed medication is never started. In Patient B, empagliflozin was prescribed but never started because of cost. This is different from pharmacologic failure. B. A medication cannot fail pharmacologically if the patient never started it. C. Therapeutic duplication refers to unnecessary overlap, not failure to start. D. No allergy is described. Patient B Tuesday Teaching Guide Differentiating access-related non-initiation from medication failure. Pass. The question supports a key ambulatory care concept."
  },
  {
    "id": "T2DM-028",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "preventive_care_and_diabetes_management",
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
      "b"
    ],
    "rationale": " The Week 1 patient cases repeatedly include preventive care gaps, and students are expected to identify them. Diabetes care is comprehensive and includes risk reduction beyond glucose lowering. A. A1c-only care is incomplete. C. Preventive care should not be delayed solely due to A1c above goal. D. Stopping medications is inappropriate. Patient A, B, and C case materials; T2DM Guideline Teaching Summary Integrating preventive care into diabetes follow-up. Pass. The item is basic but clinically relevant."
  },
  {
    "id": "T2DM-029",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "therapy_escalation_and_safety",
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
    "rationale": " The Week 1 T2DM teaching summary lists escalation points including A1c >9%, symptomatic hyperglycemia, progressive CKD, recurrent hypoglycemia, and failure of dual therapy. All options are correct because each is listed as an escalation point. T2DM Guideline Teaching Summary Recognizing when diabetes care requires escalation or closer evaluation. Pass. All options are correct by design and directly supported."
  },
  {
    "id": "T2DM-030",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "glp_1_ra_and_residual_ckd_cv_risk",
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
      "b"
    ],
    "rationale": " The T2DM teaching summary highlights GLP-1 receptor agonist benefits, including A1c reduction, weight loss, and ASCVD benefit. In complex patients, medication selection should be tied to broader cardiovascular and kidney risk reduction, not glucose alone. A. This is too narrow and glucose-focused. C. GLP-1 RA therapy does not replace BP or lipid management. D. Lifestyle counseling remains important even when medications are used. T2DM Guideline Teaching Summary; Patient C Teaching Guide Connecting GLP-1 RA therapy to cardiometabolic risk reduction. Pass. Advanced but fair."
  },
  {
    "id": "T2DM-031",
    "disease": "Type 2 Diabetes",
    "type": "ktype",
    "concept_tag": "longitudinal_response_assessment",
    "stem": "A patient’s A1c improves from 8.2% to 7.5%, BP improves, LDL-C improves, and weight decreases after medication optimization and lifestyle changes. However, A1c and BP remain above goal and UACR is elevated. Which statements are accurate?\nI. The current plan shows evidence of benefit.\nII. The patient has achieved all long-term goals and needs no further monitoring.\nIII. Residual risk remains and should be reassessed longitudinally.\nIV. UACR should influence future kidney-protection planning.",
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
      "c"
    ],
    "rationale": " Improvement across A1c, BP, LDL-C, and weight suggests progress, but persistent above-goal values and albuminuria indicate residual risk. UACR should shape kidney-protection planning. II is incorrect because improvement does not mean all goals are achieved or that monitoring can stop. Patient A Wednesday Teaching Guide; T2DM Guideline Teaching Summary Interpreting clinical trends and residual risk. Pass. Strong longitudinal reasoning question."
  },
  {
    "id": "T2DM-032",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "patient_preferences",
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
      "b"
    ],
    "rationale": " The T2DM teaching summary emphasizes individualized goals and patient preferences. Patient cases reinforce that weight loss motivation, fear of complications, adherence, access, and health literacy should shape the care plan. A. Patient preferences are part of individualization. C. Weight management is relevant to diabetes care. D. Insulin need is not the only consideration. T2DM Guideline Teaching Summary; Patient A and Patient C Master Profiles Incorporating patient goals into diabetes medication planning. Pass. The item reinforces patient-centered care."
  },
  {
    "id": "T2DM-033",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "smbg_cgm_appropriateness",
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
      "a"
    ],
    "rationale": " The Week 1 T2DM teaching summary includes SMBG or CGM “when appropriate,” along with A1c, eGFR, UACR, weight, and BP monitoring. B. Hourly monitoring is excessive for most ambulatory patients and not supported by the module. C. Glucose monitoring can be useful when appropriate. D. SMBG does not replace A1c monitoring. T2DM Guideline Teaching Summary Individualizing glucose monitoring recommendations. Pass. The wording avoids overprescribing monitoring."
  },
  {
    "id": "T2DM-034",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "secondary_prevention_and_residual_risk",
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
      "b"
    ],
    "rationale": " Patient C’s case emphasizes established ASCVD, CKD, severe albuminuria, and prioritization. Secondary prevention status changes therapeutic priorities and requires broader risk reduction than A1c alone. A. A1c-only focus is a common error. C. ASCVD can influence therapy selection. D. CKD and albuminuria remain relevant even without chest pain. Patient C Tuesday Teaching Guide; T2DM Guideline Teaching Summary Recognizing secondary prevention status in diabetes care. Pass. Advanced and patient-specific."
  },
  {
    "id": "T2DM-035",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "medication_reconciliation",
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
    "rationale": " Patient B demonstrates that active chart medications may not reflect actual use. Medication reconciliation should uncover non-initiation, cost-related nonadherence, refill delays, side effects, and patient concerns. All options are correct because each helps determine whether the patient is receiving the intended therapy. Patient B Tuesday Teaching Guide Conducting clinically meaningful medication reconciliation. Pass. All-correct format is justified by the case objective."
  },
  {
    "id": "T2DM-036",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "avoiding_insulin_overuse_in_complex_cardiorenal_risk",
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
        "text": "Start basal insulin as the first and only priority without addressing cardiorenal risk, BP, albuminuria, or ASCVD."
      },
      {
        "key": "d",
        "text": "Discuss patient concerns about dialysis and another heart attack."
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": " The Patient C teaching guide identifies focusing exclusively on A1c as a critical miss. Basal insulin may lower glucose but does not address the broader cardiorenal prioritization required in this case. The issue is not that insulin is never appropriate, but that making it the first and only priority ignores the case’s main learning objectives. A, B, and D are appropriate because they reflect prioritization, cardiorenal benefit, and patient-centered counseling. Patient C Tuesday Teaching Guide; T2DM Guideline Teaching Summary Avoiding glucose-only escalation in a complex cardiorenal patient. Pass. The question carefully avoids claiming insulin is never appropriate."
  },
  {
    "id": "T2DM-037",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "renal_monitoring",
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
      "b"
    ],
    "rationale": " The Week 1 T2DM teaching summary includes UACR and eGFR in the initial evaluation and monitoring framework. Patient A’s case specifically identifies missing UACR as a gap that prevents complete kidney risk assessment. A. UACR is important even when creatinine appears acceptable. C. Symptoms do not rule out kidney risk. D. Diabetes care includes renal monitoring, not just glucose monitoring. T2DM Guideline Teaching Summary; Patient A Tuesday Recognizing missing kidney monitoring in diabetes. Pass. Foundational and patient-relevant."
  },
  {
    "id": "T2DM-038",
    "disease": "Type 2 Diabetes",
    "type": "sata",
    "concept_tag": "follow_up_and_monitoring_after_improvement",
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
    "rationale": " Improvement does not eliminate the need for ongoing monitoring, access planning, adherence support, lifestyle reinforcement, or preventive care. Patient B’s follow-up cases emphasize long-term sustainability and residual barriers. E. Improvement does not mean chronic disease management can stop. Patient B Thursday; T2DM Guideline Teaching Summary Creating a maintenance plan after clinical improvement. Pass. The item supports longitudinal care thinking."
  },
  {
    "id": "T2DM-039",
    "disease": "Type 2 Diabetes",
    "type": "ktype",
    "concept_tag": "integrating_bp_and_diabetes_care",
    "stem": "A patient has type 2 diabetes, BP above goal, UACR 45 mg/g, obesity, and A1c above goal. Which statements are accurate?\nI. BP control is part of diabetes complication risk reduction.\nII. Albuminuria should prompt attention to kidney protection.\nIII. Weight and patient preference may influence diabetes medication selection.\nIV. Diabetes management should ignore blood pressure because BP is a separate disease state.",
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
      "c"
    ],
    "rationale": " Diabetes care requires comprehensive risk reduction, including BP management, kidney monitoring, cardiorenal therapy selection, and patient-centered medication planning. Blood pressure is not separate from diabetes complication prevention. IV is incorrect because BP control is central to reducing cardiovascular and kidney risk in diabetes. T2DM Guideline Teaching Summary; HTN Guideline Teaching Summary; Patient A Wednesday Integrating HTN and diabetes care rather than treating them in silos. Pass. This bridges both Week 1 disease states."
  },
  {
    "id": "T2DM-040",
    "disease": "Type 2 Diabetes",
    "type": "sba",
    "concept_tag": "overall_diabetes_management_strategy",
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
      "b"
    ],
    "rationale": " The Week 1 T2DM framework emphasizes individualized, patient-specific therapy selection that accounts for glycemia, cardiorenal risk, obesity, monitoring, adherence, access, and preferences. This approach prepares students to manage the Week 1 patients rather than simply chase glucose values. A. This is the exact A1c-only mistake the module is designed to correct. C. GLP-1 receptor agonists and SGLT2 inhibitors are important modern options when patient-specific factors support their use. D. Waiting for symptoms is inappropriate because diabetes complications and risk factors may progress silently. T2DM Guideline Teaching Summary; Patient A/B/C Teaching Guides Synthesizing the full Week 1 T2DM medication-selection framework. Pass. This is an appropriate final integrative diabetes question. Internal QA Summary Question Count Hypertension: 20 questions Type 2 Diabetes: 20 questions Total: 40 questions Question Type Distribution Hypertension: Single-best-answer: 10 Select-all-that-apply: 6 K-type-style: 4 Type 2 Diabetes: Single-best-answer: 10 Select-all-that-apply: 6 K-type-style: 4 Difficulty Progression Early questions test foundational guideline understanding. Middle questions test monitoring, medication selection, and follow-up. Later questions test patient-specific clinical application, prioritization, longitudinal response, access barriers, and cardiorenal risk reduction. QA Verdict Pass with minor future formatting edits only. Notes for Developer Upload Each question should be stored with: Question ID Disease state Topic tag Difficulty tag Question type Stem Answer choices Correct answer Rationale Incorrect answer explanations Source support label Clinical skill tested For Monday quiz delivery: Randomize question order on each attempt. Show correct answer and rationale after each submitted question. Require 90% or higher to unlock Tuesday. Allow unlimited retries. Store first-attempt score, passing-attempt score, number of attempts, and missed topic tags."
  }
]