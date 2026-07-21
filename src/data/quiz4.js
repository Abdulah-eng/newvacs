export const PASS_THRESHOLD = 90;

export const QUIZ_ITEMS = [
  {
    "id": "HF-001",
    "disease": "Heart Failure",
    "type": "sba",
    "concept_tag": "heart_failure_classification",
    "stem": "A 58-year-old patient has an echocardiogram showing LVEF 35%. Based on the Week 4 heart failure framework, how should this patientΓÇÖs heart failure be classified?",
    "options": [
      {
        "key": "a",
        "text": "Heart failure with preserved ejection fraction"
      },
      {
        "key": "b",
        "text": "Heart failure with mildly reduced ejection fraction"
      },
      {
        "key": "c",
        "text": "Heart failure with reduced ejection fraction"
      },
      {
        "key": "d",
        "text": "Stage A heart failure"
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": " Heart failure with reduced ejection fraction is defined as LVEF Γëñ40%. This patientΓÇÖs LVEF of 35% meets the definition of HFrEF. A. HFpEF is defined as LVEF ΓëÑ50%, which does not apply here. B. HFmrEF is defined as LVEF 41ΓÇô49%, which does not apply here. D. Stage A refers to patients at risk for heart failure without structural heart disease or symptoms; this patient already has reduced LVEF. Heart Failure Guideline Teaching Summary; 2022 AHA/ACC/HFSA Heart Failure Guideline Classifying heart failure by ejection fraction. ┬á"
  },
  {
    "id": "HF-002",
    "disease": "Heart Failure",
    "type": "sba",
    "concept_tag": "nyha_functional_classification",
    "stem": "A patient with heart failure reports being comfortable at rest but develops shortness of breath when climbing stairs or doing ordinary activity. Which NYHA functional class best describes this patient?",
    "options": [
      {
        "key": "a",
        "text": "NYHA Class I"
      },
      {
        "key": "b",
        "text": "NYHA Class II"
      },
      {
        "key": "c",
        "text": "NYHA Class III"
      },
      {
        "key": "d",
        "text": "NYHA Class IV"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " NYHA Class II describes slight limitation of physical activity. Patients are comfortable at rest, but ordinary activity causes symptoms. A. Class I indicates no limitation of physical activity. C. Class III involves symptoms with less-than-ordinary activity. D. Class IV involves symptoms at rest. Heart Failure Guideline Teaching Summary Assessing symptom burden and functional status in heart failure. ┬á"
  },
  {
    "id": "HF-003",
    "disease": "Heart Failure",
    "type": "sba",
    "concept_tag": "acc_aha_heart_failure_staging",
    "stem": "A patient has structural heart disease and current symptoms of heart failure. Which ACC/AHA heart failure stage best applies?",
    "options": [
      {
        "key": "a",
        "text": "Stage A"
      },
      {
        "key": "b",
        "text": "Stage B"
      },
      {
        "key": "c",
        "text": "Stage C"
      },
      {
        "key": "d",
        "text": "Stage D"
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": " Stage C heart failure describes structural heart disease with current or prior symptoms of heart failure. A. Stage A describes patients at risk for heart failure without structural heart disease or symptoms. B. Stage B describes structural heart disease without signs or symptoms of heart failure. D. Stage D describes advanced heart failure requiring specialized interventions. Heart Failure Guideline Teaching Summary Applying ACC/AHA staging to ambulatory heart failure patients. ┬á"
  },
  {
    "id": "HF-004",
    "disease": "Heart Failure",
    "type": "sata",
    "concept_tag": "foundational_hfref_therapy",
    "stem": "Which medication classes are considered foundational therapy for HFrEF in the Week 4 heart failure materials? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "ARNI"
      },
      {
        "key": "b",
        "text": "Evidence-based beta blocker"
      },
      {
        "key": "c",
        "text": "Mineralocorticoid receptor antagonist"
      },
      {
        "key": "d",
        "text": "SGLT2 inhibitor"
      },
      {
        "key": "e",
        "text": "Routine nondihydropyridine calcium channel blocker therapy"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": " Modern HFrEF management centers on four foundational medication classes: ARNI, evidence-based beta blocker, MRA, and SGLT2 inhibitor. E. Nondihydropyridine calcium channel blockers are not foundational HFrEF therapy and may be problematic in HFrEF because of negative inotropic effects. Heart Failure Guideline Teaching Summary; 2022 AHA/ACC/HFSA Heart Failure Guideline Recognizing core guideline-directed medical therapy for HFrEF. ┬á"
  },
  {
    "id": "HF-005",
    "disease": "Heart Failure",
    "type": "sata",
    "concept_tag": "evidence_based_beta_blockers",
    "stem": "Which beta blockers are identified as evidence-based options for HFrEF? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Metoprolol succinate"
      },
      {
        "key": "b",
        "text": "Carvedilol"
      },
      {
        "key": "c",
        "text": "Bisoprolol"
      },
      {
        "key": "d",
        "text": "Atenolol"
      },
      {
        "key": "e",
        "text": "Propranolol"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": " The Week 4 heart failure materials identify metoprolol succinate, carvedilol, and bisoprolol as the beta blockers with demonstrated mortality benefit in HFrEF. D. Atenolol is not listed as one of the evidence-based HFrEF beta blockers. E. Propranolol is not listed as one of the evidence-based HFrEF beta blockers. Heart Failure Guideline Teaching Summary; 2022 AHA/ACC/HFSA Heart Failure Guideline Selecting evidence-based beta blocker therapy in HFrEF. ┬á"
  },
  {
    "id": "HF-006",
    "disease": "Heart Failure",
    "type": "sba",
    "concept_tag": "arni_transition_from_ace_inhibitor",
    "stem": "Patient A is newly diagnosed with symptomatic HFrEF and is currently taking lisinopril 20 mg daily. The pharmacist is considering sacubitril/valsartan. Which recommendation is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Start sacubitril/valsartan immediately while continuing lisinopril"
      },
      {
        "key": "b",
        "text": "Stop lisinopril and allow an appropriate washout period before starting sacubitril/valsartan"
      },
      {
        "key": "c",
        "text": "Avoid ARNI therapy because the patient has HFrEF"
      },
      {
        "key": "d",
        "text": "Continue lisinopril indefinitely and avoid GDMT optimization"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " When transitioning from an ACE inhibitor to an ARNI, the ACE inhibitor should be stopped and an appropriate washout period should occur before starting sacubitril/valsartan. This helps reduce the risk of angioedema. A. ACE inhibitors and ARNIs should not be overlapped. C. HFrEF is an appropriate setting to evaluate ARNI therapy when patient-specific factors allow. D. Continuing lisinopril without evaluating contemporary GDMT would miss an important optimization opportunity. Heart Failure Guideline Teaching Summary; 2022 AHA/ACC/HFSA Heart Failure Guideline; Patient A Tuesday Safely transitioning from ACE inhibitor therapy to ARNI therapy. ┬á"
  },
  {
    "id": "HF-007",
    "disease": "Heart Failure",
    "type": "sata",
    "concept_tag": "mra_initiation_and_monitoring",
    "stem": "Which parameters should be assessed when considering spironolactone therapy for a patient with HFrEF? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Potassium"
      },
      {
        "key": "b",
        "text": "Serum creatinine"
      },
      {
        "key": "c",
        "text": "eGFR"
      },
      {
        "key": "d",
        "text": "Blood pressure and symptoms"
      },
      {
        "key": "e",
        "text": "Routine INR"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": " MRA therapy requires assessment of potassium, renal function, eGFR, blood pressure, and clinical tolerability. These are important because MRAs can increase potassium and require careful renal monitoring. E. Routine INR monitoring is not required for spironolactone therapy. Heart Failure Guideline Teaching Summary Assessing safety and monitoring needs before adding MRA therapy. ┬á"
  },
  {
    "id": "HF-008",
    "disease": "Heart Failure",
    "type": "sba",
    "concept_tag": "sglt2_inhibitors_in_hfref",
    "stem": "Which statement about SGLT2 inhibitors in HFrEF is most consistent with the Week 4 materials?",
    "options": [
      {
        "key": "a",
        "text": "They only provide benefit in patients with diabetes"
      },
      {
        "key": "b",
        "text": "They may reduce hospitalization and cardiovascular mortality, and benefits occur regardless of diabetes status"
      },
      {
        "key": "c",
        "text": "They replace the need for beta blocker therapy"
      },
      {
        "key": "d",
        "text": "They require routine coagulation monitoring"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " The Week 4 heart failure materials state that SGLT2 inhibitors have benefits in HFrEF regardless of diabetes status. A. Their benefit is not limited to patients with diabetes. C. SGLT2 inhibitors do not replace other foundational HFrEF therapies. D. Routine coagulation monitoring is not required for SGLT2 inhibitors. Heart Failure Guideline Teaching Summary Understanding the role of SGLT2 inhibitors in HFrEF. ┬á"
  },
  {
    "id": "HF-009",
    "disease": "Heart Failure",
    "type": "ktype",
    "concept_tag": "gdmt_sequencing",
    "stem": "Which statements about practical GDMT sequencing in HFrEF are consistent with the Week 4 materials?\nI. All four foundational HFrEF medication classes should be evaluated when feasible.\nII. Therapy should generally be implemented early and titrated as tolerated.\nIII. Clinicians must always fully titrate one medication to target before adding another class.\nIV. Monitoring should occur after initiation and titration.",
    "options": [
      {
        "key": "a",
        "text": "I and II only"
      },
      {
        "key": "b",
        "text": "I, II, and IV only"
      },
      {
        "key": "c",
        "text": "II and III only"
      },
      {
        "key": "d",
        "text": "I, III, and IV only"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " The Week 4 heart failure materials emphasize early initiation of foundational therapy, titration as tolerated, and monitoring after initiation and dose changes. They specifically discourage delaying initiation of one therapy while waiting to optimize another. A. This omits monitoring after initiation and titration. C. Statement III is incorrect because full titration of one class is not required before adding another. D. Statement III is incorrect. Heart Failure Guideline Teaching Summary Applying modern HFrEF GDMT sequencing principles. ┬á"
  },
  {
    "id": "HF-010",
    "disease": "Heart Failure",
    "type": "sata",
    "concept_tag": "home_monitoring_and_patient_education",
    "stem": "Which counseling and monitoring topics are appropriate for a patient newly diagnosed with HFrEF? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Daily weight monitoring"
      },
      {
        "key": "b",
        "text": "Blood pressure and heart rate monitoring"
      },
      {
        "key": "c",
        "text": "Sodium reduction counseling"
      },
      {
        "key": "d",
        "text": "Medication adherence counseling"
      },
      {
        "key": "e",
        "text": "Education on when to report worsening symptoms"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": " Newly diagnosed HFrEF patients need education on self-monitoring, lifestyle changes, medication adherence, and symptom recognition. Daily weights, BP, HR, sodium intake, adherence, and symptom reporting are all relevant. There are no incorrect options in this question. Heart Failure Guideline Teaching Summary; Patient A Tuesday Developing a patient-centered heart failure monitoring and education plan. ┬á"
  },
  {
    "id": "HF-011",
    "disease": "Heart Failure",
    "type": "sba",
    "concept_tag": "heart_failure_with_improved_ejection_fraction",
    "stem": "Patient AΓÇÖs LVEF improves from 35% to 45% after several months of guideline-directed therapy. He asks if he can stop his heart failure medications because his ejection fraction improved. What is the best response?",
    "options": [
      {
        "key": "a",
        "text": "Stop all HFrEF medications because the heart failure is cured"
      },
      {
        "key": "b",
        "text": "Continue HFrEF therapy because improved EF does not mean therapy should be stopped"
      },
      {
        "key": "c",
        "text": "Stop the beta blocker but continue the other medications"
      },
      {
        "key": "d",
        "text": "Stop sacubitril/valsartan because EF is now above 40%"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " Patients with improved EF after prior HFrEF should continue HFrEF therapy. Improvement reflects treatment response and does not mean the underlying condition is cured. A. EF improvement is not the same as cure. C. The beta blocker should not be stopped solely because EF improved. D. ARNI therapy should not be stopped solely because EF improved. 2022 AHA/ACC/HFSA Heart Failure Guideline; Patient A Thursday Recognizing the need for long-term GDMT continuation in HFimpEF. ┬á"
  },
  {
    "id": "HF-012",
    "disease": "Heart Failure",
    "type": "sba",
    "concept_tag": "medication_therapy_problems_in_hfref",
    "stem": "Patient B has HFrEF and reports persistent mild fatigue and exertional dyspnea. She is prescribed sacubitril/valsartan, metoprolol succinate, and empagliflozin, but she misses evening doses several times per week because of cost concerns. What is the most appropriate next step?",
    "options": [
      {
        "key": "a",
        "text": "Immediately intensify HFrEF therapy without addressing adherence"
      },
      {
        "key": "b",
        "text": "Stop all HFrEF medications because symptoms persist"
      },
      {
        "key": "c",
        "text": "Address adherence and medication access barriers before interpreting symptoms as treatment failure"
      },
      {
        "key": "d",
        "text": "Switch metoprolol succinate to atenolol"
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": " Persistent symptoms cannot be interpreted as treatment failure if the patient is not consistently taking prescribed therapy. The immediate priority is to address adherence, cost, and access barriers. A. Intensifying therapy without addressing adherence may worsen medication burden and does not solve the root issue. B. Stopping therapy would be unsafe and unsupported. D. Atenolol is not one of the evidence-based beta blockers for HFrEF. Patient B Tuesday; Heart Failure Guideline Teaching Summary Prioritizing adherence and access barriers before therapy escalation. ┬á ATRIAL FIBRILLATION QUESTIONS"
  },
  {
    "id": "AF-001",
    "disease": "Atrial Fibrillation",
    "type": "sba",
    "concept_tag": "afib_classification",
    "stem": "A patient has atrial fibrillation that continues for more than 7 days. How should this AFib pattern be classified?",
    "options": [
      {
        "key": "a",
        "text": "Paroxysmal AFib"
      },
      {
        "key": "b",
        "text": "Persistent AFib"
      },
      {
        "key": "c",
        "text": "Long-standing persistent AFib"
      },
      {
        "key": "d",
        "text": "Permanent AFib"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " Persistent AFib is AFib that continues for more than 7 days. A. Paroxysmal AFib terminates spontaneously or with intervention within 7 days. C. Long-standing persistent AFib is continuous AFib lasting longer than 12 months. D. Permanent AFib means the patient and care team have decided to discontinue rhythm-control attempts. Atrial Fibrillation Guideline Teaching Summary Classifying atrial fibrillation patterns. ┬á"
  },
  {
    "id": "AF-002",
    "disease": "Atrial Fibrillation",
    "type": "sata",
    "concept_tag": "cha_ds_vasc_score_components",
    "stem": "Which factors are components of the CHAΓééDSΓéé-VASc score? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Congestive heart failure"
      },
      {
        "key": "b",
        "text": "Hypertension"
      },
      {
        "key": "c",
        "text": "Age ΓëÑ75 years"
      },
      {
        "key": "d",
        "text": "Diabetes mellitus"
      },
      {
        "key": "e",
        "text": "Prior stroke/TIA/systemic embolism"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": " The CHAΓééDSΓéé-VASc score includes congestive heart failure, hypertension, age ΓëÑ75 years, diabetes, prior stroke/TIA/systemic embolism, vascular disease, age 65ΓÇô74 years, and female sex. There are no incorrect options in this question. Atrial Fibrillation Guideline Teaching Summary Identifying stroke-risk factors in AFib. ┬á"
  },
  {
    "id": "AF-003",
    "disease": "Atrial Fibrillation",
    "type": "sba",
    "concept_tag": "anticoagulation_threshold",
    "stem": "According to the Week 4 AFib materials, which CHAΓééDSΓéé-VASc category generally supports oral anticoagulation unless contraindicated?",
    "options": [
      {
        "key": "a",
        "text": "Men 0; women 1"
      },
      {
        "key": "b",
        "text": "Men 1; women 2"
      },
      {
        "key": "c",
        "text": "Men ΓëÑ2; women ΓëÑ3"
      },
      {
        "key": "d",
        "text": "Any patient with palpitations, regardless of risk factors"
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": " The Week 4 AFib summary identifies men with CHAΓééDSΓéé-VASc ΓëÑ2 and women with CHAΓééDSΓéé-VASc ΓëÑ3 as elevated risk, where oral anticoagulation is generally recommended unless contraindicated. A. This is considered low risk. B. This is an intermediate-risk category where individualized decision-making is appropriate. D. Anticoagulation decisions are based on thromboembolic risk, not palpitations alone. Atrial Fibrillation Guideline Teaching Summary Applying CHAΓééDSΓéé-VASc interpretation to anticoagulation decisions. ┬á"
  },
  {
    "id": "AF-004",
    "disease": "Atrial Fibrillation",
    "type": "sba",
    "concept_tag": "stroke_prevention_and_symptom_burden",
    "stem": "A patient with AFib says, ΓÇ£I hardly ever feel my heart racing, so I probably do not need a blood thinner.ΓÇ¥ What is the best response?",
    "options": [
      {
        "key": "a",
        "text": "Anticoagulation is only needed when AFib symptoms are severe"
      },
      {
        "key": "b",
        "text": "Stroke prevention is based on thromboembolic risk, not symptom burden alone"
      },
      {
        "key": "c",
        "text": "Blood thinners are only used for rhythm control"
      },
      {
        "key": "d",
        "text": "Aspirin is always enough if the patient has no palpitations"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " Patients with AFib may remain at risk for thromboembolic events even when symptoms are minimal or absent. Anticoagulation decisions should be driven by stroke risk assessment. A. Symptom burden alone does not determine anticoagulation need. C. Anticoagulants are used for stroke prevention, not rhythm control. D. The Week 4 materials do not support using aspirin as a default substitute for anticoagulation in this scenario. Atrial Fibrillation Guideline Teaching Summary Explaining the purpose of anticoagulation in AFib. ┬á"
  },
  {
    "id": "AF-005",
    "disease": "Atrial Fibrillation",
    "type": "sba",
    "concept_tag": "doac_versus_warfarin_considerations",
    "stem": "Which statement best reflects the Week 4 AFib materials regarding DOACs?",
    "options": [
      {
        "key": "a",
        "text": "DOACs are generally preferred over warfarin in eligible patients"
      },
      {
        "key": "b",
        "text": "DOACs require routine INR monitoring"
      },
      {
        "key": "c",
        "text": "DOACs have more food interactions than warfarin"
      },
      {
        "key": "d",
        "text": "DOACs are used only for patients with no stroke risk factors"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": " The Week 4 AFib materials describe DOACs as generally preferred over warfarin in eligible patients because of predictable pharmacokinetics, reduced monitoring requirements, fewer food and drug interactions, and lower intracranial bleeding risk. B. DOACs do not require routine INR monitoring. C. DOACs generally have fewer food interactions than warfarin. D. DOACs are commonly used for stroke prevention in patients with elevated thromboembolic risk. Atrial Fibrillation Guideline Teaching Summary; Anticoagulation/VTE Guideline Teaching Summary Comparing DOACs and warfarin for AFib stroke prevention. ┬á"
  },
  {
    "id": "AF-006",
    "disease": "Atrial Fibrillation",
    "type": "sba",
    "concept_tag": "rate_control_in_hfref",
    "stem": "A patient has persistent AFib and HFrEF. Which rate-control medication class is most appropriate to prioritize based on the Week 4 materials?",
    "options": [
      {
        "key": "a",
        "text": "Evidence-based beta blocker"
      },
      {
        "key": "b",
        "text": "Diltiazem"
      },
      {
        "key": "c",
        "text": "Verapamil"
      },
      {
        "key": "d",
        "text": "Immediate discontinuation of all rate-control therapy"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": " Beta blockers are commonly used for rate control and are particularly important in patients with HFrEF. Nondihydropyridine calcium channel blockers such as diltiazem and verapamil should generally be avoided in HFrEF because of negative inotropic effects. B. Diltiazem should generally be avoided in HFrEF. C. Verapamil should generally be avoided in HFrEF. D. Rate control remains clinically relevant in AFib management. Atrial Fibrillation Guideline Teaching Summary; 2022 AHA/ACC/HFSA Heart Failure Guideline Selecting rate-control therapy in AFib with HFrEF. ┬á"
  },
  {
    "id": "AF-007",
    "disease": "Atrial Fibrillation",
    "type": "sata",
    "concept_tag": "rhythm_control_referral_awareness",
    "stem": "Which findings may prompt consideration of referral for rhythm-control evaluation? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Persistent symptoms despite rate control"
      },
      {
        "key": "b",
        "text": "Recurrent hospitalizations"
      },
      {
        "key": "c",
        "text": "Failure of initial management strategies"
      },
      {
        "key": "d",
        "text": "Patient preference after shared decision-making"
      },
      {
        "key": "e",
        "text": "Stable AFib with no symptoms, no concerns, and no management problems"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": " Pharmacists should recognize situations where rhythm-control referral may be appropriate, including persistent symptoms despite rate control, recurrent hospitalizations, failure of initial strategies, and patient-specific preferences. E. Stable AFib without symptoms, concerns, or management issues does not automatically require rhythm-control referral. Atrial Fibrillation Guideline Teaching Summary Recognizing when AFib rhythm-control referral may be appropriate. ┬á"
  },
  {
    "id": "AF-008",
    "disease": "Atrial Fibrillation",
    "type": "sata",
    "concept_tag": "afib_monitoring",
    "stem": "Which items are appropriate to monitor in a patient with AFib receiving anticoagulation? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Heart rate"
      },
      {
        "key": "b",
        "text": "Blood pressure"
      },
      {
        "key": "c",
        "text": "Bleeding symptoms"
      },
      {
        "key": "d",
        "text": "Medication adherence"
      },
      {
        "key": "e",
        "text": "Stroke or TIA symptoms"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": " AFib management includes symptom and rate assessment, blood pressure control, anticoagulation safety monitoring, medication adherence assessment, and monitoring for signs of thromboembolic events. There are no incorrect options in this question. Atrial Fibrillation Guideline Teaching Summary; Anticoagulation/VTE Guideline Teaching Summary Identifying monitoring priorities in AFib and anticoagulation. ┬á"
  },
  {
    "id": "AF-009",
    "disease": "Atrial Fibrillation",
    "type": "sba",
    "concept_tag": "patient_education_and_health_literacy",
    "stem": "Patient B says, ΓÇ£I know apixaban is a blood thinner, but I am not sure what it is preventing.ΓÇ¥ What is the best pharmacist response?",
    "options": [
      {
        "key": "a",
        "text": "Ignore the knowledge gap because she is already prescribed the medication"
      },
      {
        "key": "b",
        "text": "Explain in patient-friendly language that apixaban helps reduce stroke risk from AFib"
      },
      {
        "key": "c",
        "text": "Tell her to stop apixaban until she understands it better"
      },
      {
        "key": "d",
        "text": "Focus only on cholesterol counseling"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " Patient B has limited understanding of AFib, stroke risk, and the purpose of anticoagulation. Education using patient-friendly language and teach-back is appropriate. A. Knowledge gaps can worsen adherence and should be addressed. C. Stopping anticoagulation without indication may increase stroke risk. D. Cholesterol counseling does not address the immediate anticoagulation knowledge gap. Patient B Tuesday; Atrial Fibrillation Guideline Teaching Summary Providing patient-centered anticoagulation education. ┬á"
  },
  {
    "id": "AF-010",
    "disease": "Atrial Fibrillation",
    "type": "sba",
    "concept_tag": "anticoagulation_nonadherence",
    "stem": "Patient B has persistent AFib and elevated stroke risk. She admits missing evening apixaban doses approximately 2ΓÇô3 times per week because of cost. What is the most important clinical concern?",
    "options": [
      {
        "key": "a",
        "text": "Missed apixaban doses may reduce stroke protection"
      },
      {
        "key": "b",
        "text": "Missed doses improve safety and have no clinical downside"
      },
      {
        "key": "c",
        "text": "Missed doses mean anticoagulation is no longer indicated"
      },
      {
        "key": "d",
        "text": "Missed doses mean the patient should automatically be switched to aspirin"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": " Consistent anticoagulant use is essential for stroke prevention. Missing apixaban doses several times per week reduces the effectiveness of therapy and should prompt adherence and access interventions. B. Missed doses may increase thromboembolic risk. C. Nonadherence does not remove the indication for anticoagulation. D. Aspirin is not an automatic substitute for anticoagulation in this scenario. Patient B Tuesday; Atrial Fibrillation Guideline Teaching Summary; Anticoagulation/VTE Guideline Teaching Summary Recognizing the clinical significance of DOAC nonadherence. ┬á"
  },
  {
    "id": "AF-011",
    "disease": "Atrial Fibrillation",
    "type": "sba",
    "concept_tag": "minor_bruising_and_anticoagulation_fear",
    "stem": "Patient B reports minor bruising on her arms and legs but denies hematuria, melena, hematochezia, epistaxis, falls, trauma, or major bleeding. Her hemoglobin is stable. Because of fear, she has skipped several apixaban doses. What is the most appropriate interpretation?",
    "options": [
      {
        "key": "a",
        "text": "Minor bruising automatically requires permanent apixaban discontinuation"
      },
      {
        "key": "b",
        "text": "Minor bruising should be assessed and counseled on, but does not automatically justify stopping anticoagulation"
      },
      {
        "key": "c",
        "text": "Bruising means stroke risk no longer matters"
      },
      {
        "key": "d",
        "text": "Bruising requires LMWH bridging"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " The student should distinguish minor bruising from major bleeding. In this case, the more urgent issue is fear-driven anticoagulation nonadherence in a patient with elevated stroke risk. A. Minor bruising alone does not automatically require stopping apixaban. C. Stroke risk remains clinically important. D. LMWH bridging is not indicated for minor bruising. Patient B Wednesday; Atrial Fibrillation Guideline Teaching Summary; Anticoagulation/VTE Guideline Teaching Summary Differentiating minor bleeding concerns from major bleeding and addressing adherence risk. ┬á"
  },
  {
    "id": "AF-012",
    "disease": "Atrial Fibrillation",
    "type": "ktype",
    "concept_tag": "afib_goals_of_therapy",
    "stem": "Which statements correctly describe major goals of AFib management in ambulatory care?\nI. Reduce thromboembolic risk.\nII. Manage symptoms and rate/rhythm issues when appropriate.\nIII. Ignore anticoagulation if the patient does not feel palpitations.\nIV. Address lifestyle and risk factors such as blood pressure, weight, and physical activity.",
    "options": [
      {
        "key": "a",
        "text": "I and II only"
      },
      {
        "key": "b",
        "text": "I, II, and IV only"
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
      "b"
    ],
    "rationale": " AFib management includes reducing thromboembolic risk, managing symptoms and rate/rhythm issues, and addressing risk factors. Anticoagulation should not be ignored simply because the patient is minimally symptomatic. A. This omits lifestyle and risk-factor modification. C. Statement III is incorrect because stroke risk remains important even without symptoms. D. Statement III is incorrect. Atrial Fibrillation Guideline Teaching Summary Recognizing the core goals of AFib management. ┬á ANTICOAGULATION / VTE QUESTIONS"
  },
  {
    "id": "AC-001",
    "disease": "Anticoagulation/VTE",
    "type": "sba",
    "concept_tag": "vte_definitions",
    "stem": "Which statement best describes a pulmonary embolism?",
    "options": [
      {
        "key": "a",
        "text": "A clot that forms only in superficial veins"
      },
      {
        "key": "b",
        "text": "A thrombus that embolizes to the pulmonary vasculature"
      },
      {
        "key": "c",
        "text": "A rhythm disorder caused by abnormal atrial electrical activity"
      },
      {
        "key": "d",
        "text": "A heart failure classification based on ejection fraction"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " Pulmonary embolism occurs when a thrombus embolizes to the pulmonary vasculature. A. This describes superficial venous thrombosis, not PE. C. This describes atrial fibrillation. D. This describes heart failure classification, not PE. Anticoagulation/VTE Guideline Teaching Summary Distinguishing VTE terminology. ┬á"
  },
  {
    "id": "AC-002",
    "disease": "Anticoagulation/VTE",
    "type": "sba",
    "concept_tag": "provoked_versus_unprovoked_vte",
    "stem": "A patient develops a DVT after major surgery and temporary immobilization. How should this event be categorized?",
    "options": [
      {
        "key": "a",
        "text": "Unprovoked VTE"
      },
      {
        "key": "b",
        "text": "Provoked VTE"
      },
      {
        "key": "c",
        "text": "Permanent atrial fibrillation"
      },
      {
        "key": "d",
        "text": "HFimpEF"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " Provoked VTE occurs in the setting of a transient risk factor such as major surgery, trauma, immobilization, hospitalization, or temporary estrogen therapy. A. Unprovoked VTE occurs without an identifiable transient provoking factor. C. Permanent AFib is an arrhythmia classification, not a VTE category. D. HFimpEF is a heart failure category, not a VTE category. Anticoagulation/VTE Guideline Teaching Summary Classifying VTE based on provoking factors. ┬á"
  },
  {
    "id": "AC-003",
    "disease": "Anticoagulation/VTE",
    "type": "sata",
    "concept_tag": "extended_anticoagulation",
    "stem": "Which factors may support consideration of extended anticoagulation after the initial treatment period? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Unprovoked VTE"
      },
      {
        "key": "b",
        "text": "Recurrent VTE"
      },
      {
        "key": "c",
        "text": "Persistent risk factors"
      },
      {
        "key": "d",
        "text": "Acceptable bleeding risk"
      },
      {
        "key": "e",
        "text": "Resolved major transient provoking factor with high bleeding risk"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": " Factors supporting extended anticoagulation include unprovoked VTE, recurrent VTE, persistent risk factors, and acceptable bleeding risk. E. A resolved major transient provoking factor and high bleeding risk generally weigh against extended anticoagulation. Anticoagulation/VTE Guideline Teaching Summary; 2021 CHEST VTE Guideline Evaluating recurrence-risk factors that support extended anticoagulation. ┬á"
  },
  {
    "id": "AC-004",
    "disease": "Anticoagulation/VTE",
    "type": "sata",
    "concept_tag": "bleeding_risk_assessment",
    "stem": "Which factors can increase bleeding risk in patients receiving anticoagulation? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Advanced age"
      },
      {
        "key": "b",
        "text": "Chronic kidney disease"
      },
      {
        "key": "c",
        "text": "Prior bleeding events"
      },
      {
        "key": "d",
        "text": "Concurrent antiplatelet therapy"
      },
      {
        "key": "e",
        "text": "Excessive alcohol use"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": " The Week 4 anticoagulation materials list advanced age, CKD, prior bleeding events, concurrent antiplatelet therapy, excessive alcohol use, and poor medication adherence as bleeding-risk factors. There are no incorrect options in this question. Anticoagulation/VTE Guideline Teaching Summary Identifying bleeding-risk factors during anticoagulation assessment. ┬á"
  },
  {
    "id": "AC-005",
    "disease": "Anticoagulation/VTE",
    "type": "sba",
    "concept_tag": "bleeding_risk_versus_anticoagulation_benefit",
    "stem": "A patient receiving anticoagulation has CKD and advanced age, increasing bleeding risk. Which statement best reflects the Week 4 anticoagulation framework?",
    "options": [
      {
        "key": "a",
        "text": "Increased bleeding risk automatically means anticoagulation must be stopped"
      },
      {
        "key": "b",
        "text": "Bleeding risk should be ignored when thrombotic risk is high"
      },
      {
        "key": "c",
        "text": "Increased bleeding risk should prompt careful monitoring and patient-specific decision-making"
      },
      {
        "key": "d",
        "text": "Bleeding risk only matters for patients taking warfarin"
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": " The Week 4 materials state that increased bleeding risk does not automatically preclude anticoagulation. Instead, it should prompt careful monitoring and individualized decision-making. A. Increased bleeding risk does not automatically require stopping therapy. B. Bleeding risk should not be ignored. D. Bleeding risk applies to anticoagulation broadly, not only warfarin. Anticoagulation/VTE Guideline Teaching Summary Balancing thrombotic and bleeding risk. ┬á"
  },
  {
    "id": "AC-006",
    "disease": "Anticoagulation/VTE",
    "type": "sata",
    "concept_tag": "doac_advantages",
    "stem": "Which are general advantages of DOAC therapy listed in the Week 4 materials? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Predictable anticoagulation"
      },
      {
        "key": "b",
        "text": "Limited routine laboratory monitoring"
      },
      {
        "key": "c",
        "text": "Fewer food interactions"
      },
      {
        "key": "d",
        "text": "Improved convenience"
      },
      {
        "key": "e",
        "text": "Required weekly INR monitoring"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": " The Week 4 materials describe DOAC advantages as predictable anticoagulation, limited routine laboratory monitoring, fewer food interactions, and improved convenience. E. Weekly INR monitoring is not required for DOAC therapy. Anticoagulation/VTE Guideline Teaching Summary Recognizing practical advantages of DOAC therapy. ┬á"
  },
  {
    "id": "AC-007",
    "disease": "Anticoagulation/VTE",
    "type": "sba",
    "concept_tag": "apixaban_considerations",
    "stem": "Which statement best reflects the Week 4 materials regarding apixaban?",
    "options": [
      {
        "key": "a",
        "text": "Apixaban is never used for AFib"
      },
      {
        "key": "b",
        "text": "Apixaban is commonly used for AFib, DVT treatment, PE treatment, and extended VTE prevention"
      },
      {
        "key": "c",
        "text": "Apixaban requires routine INR monitoring"
      },
      {
        "key": "d",
        "text": "Apixaban must always be taken with food at therapeutic doses"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": " The Week 4 anticoagulation materials list apixaban as commonly used for atrial fibrillation, DVT treatment, PE treatment, and extended VTE prevention. A. Apixaban is commonly used for AFib stroke prevention. C. Routine INR monitoring is not required for apixaban. D. The therapeutic-dose food requirement is highlighted for rivaroxaban, not apixaban. Anticoagulation/VTE Guideline Teaching Summary Identifying common indications and counseling considerations for apixaban. ┬á"
  },
  {
    "id": "AC-008",
    "disease": "Anticoagulation/VTE",
    "type": "sba",
    "concept_tag": "rivaroxaban_counseling",
    "stem": "Which counseling point is specifically highlighted for rivaroxaban at therapeutic doses?",
    "options": [
      {
        "key": "a",
        "text": "Take with food"
      },
      {
        "key": "b",
        "text": "Inject monthly"
      },
      {
        "key": "c",
        "text": "Check INR weekly"
      },
      {
        "key": "d",
        "text": "Avoid use for VTE"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": " The Week 4 materials state that rivaroxaban requires food with therapeutic doses. B. Rivaroxaban is not a monthly injection. C. Rivaroxaban does not require weekly INR monitoring. D. Rivaroxaban is used for AFib, DVT treatment, PE treatment, and extended VTE prevention. Anticoagulation/VTE Guideline Teaching Summary Providing medication-specific DOAC counseling. ┬á"
  },
  {
    "id": "AC-009",
    "disease": "Anticoagulation/VTE",
    "type": "sba",
    "concept_tag": "ckd_and_anticoagulation",
    "stem": "Why should renal function be evaluated before and during anticoagulation therapy?",
    "options": [
      {
        "key": "a",
        "text": "Declining renal function may alter drug exposure and CKD increases both thrombotic and bleeding risk"
      },
      {
        "key": "b",
        "text": "Renal function is only relevant for warfarin"
      },
      {
        "key": "c",
        "text": "CKD eliminates the need for anticoagulation"
      },
      {
        "key": "d",
        "text": "CKD means routine coagulation monitoring is required for every DOAC"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": " The Week 4 materials emphasize that renal function should be evaluated before anticoagulation and monitored periodically because declining renal function can alter drug exposure. CKD also increases both thrombotic and bleeding risk. B. Renal function is relevant to DOAC selection and safety. C. CKD does not automatically remove the indication for anticoagulation. D. Routine coagulation monitoring is generally not required with DOAC therapy. Anticoagulation/VTE Guideline Teaching Summary; 2026 ACC/AHA/CHEST VTE Guideline Applying renal function considerations to anticoagulation safety. ┬á"
  },
  {
    "id": "AC-010",
    "disease": "Anticoagulation/VTE",
    "type": "sata",
    "concept_tag": "anticoagulation_monitoring",
    "stem": "Which monitoring items are appropriate for a patient receiving anticoagulation? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Signs of bleeding"
      },
      {
        "key": "b",
        "text": "Bruising"
      },
      {
        "key": "c",
        "text": "Falls"
      },
      {
        "key": "d",
        "text": "Medication adherence"
      },
      {
        "key": "e",
        "text": "Serum creatinine and eGFR"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": " Anticoagulation monitoring should include signs of bleeding, bruising, falls, adherence, renal function, and laboratory monitoring such as CBC when clinically appropriate. There are no incorrect options in this question. Anticoagulation/VTE Guideline Teaching Summary Creating a practical anticoagulation monitoring plan. ┬á"
  },
  {
    "id": "AC-011",
    "disease": "Anticoagulation/VTE",
    "type": "sba",
    "concept_tag": "routine_coagulation_monitoring_with_doacs",
    "stem": "Which statement about routine coagulation monitoring with DOAC therapy is most accurate?",
    "options": [
      {
        "key": "a",
        "text": "Routine coagulation monitoring is generally not required"
      },
      {
        "key": "b",
        "text": "INR should be checked weekly for all DOACs"
      },
      {
        "key": "c",
        "text": "aPTT should be checked before every DOAC dose"
      },
      {
        "key": "d",
        "text": "Anti-Xa levels are required daily for all DOAC patients"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": " The Week 4 anticoagulation materials state that routine coagulation monitoring is generally not required with DOAC therapy. B. INR monitoring is not routinely required for DOACs. C. aPTT monitoring before every dose is not required. D. Daily anti-Xa monitoring is not required for all DOAC patients. Anticoagulation/VTE Guideline Teaching Summary Distinguishing DOAC monitoring from warfarin monitoring. ┬á"
  },
  {
    "id": "AC-012",
    "disease": "Anticoagulation/VTE",
    "type": "ktype",
    "concept_tag": "shared_decision_making",
    "stem": "Which statements about anticoagulation shared decision-making are consistent with the Week 4 materials?\nI. Patients should understand expected benefits.\nII. Patients should understand potential risks.\nIII. Patient values and preferences should be considered.\nIV. Monitoring requirements and alternatives should be discussed when available.",
    "options": [
      {
        "key": "a",
        "text": "I and II only"
      },
      {
        "key": "b",
        "text": "I, II, and III only"
      },
      {
        "key": "c",
        "text": "II and IV only"
      },
      {
        "key": "d",
        "text": "I, II, III, and IV"
      }
    ],
    "correct": [
      "d"
    ],
    "rationale": " The Week 4 materials emphasize shared decision-making in anticoagulation. Patients should understand benefits, risks, monitoring needs, alternatives when available, and how the decision aligns with their values and preferences. A. This omits patient preferences, monitoring, and alternatives. B. This omits monitoring and alternatives. C. This omits benefits and patient preferences. Anticoagulation/VTE Guideline Teaching Summary Applying shared decision-making to anticoagulation management. ┬á INTEGRATED CROSS-DISEASE QUESTIONS"
  },
  {
    "id": "INT-001",
    "disease": "Integrated Heart Failure + Atrial Fibrillation",
    "type": "sba",
    "concept_tag": "afib_rate_control_in_hfref",
    "stem": "A patient has persistent nonvalvular AFib and HFrEF with LVEF 35%. Which rate-control strategy is most consistent with the Week 4 materials?",
    "options": [
      {
        "key": "a",
        "text": "Prioritize an evidence-based beta blocker when clinically appropriate"
      },
      {
        "key": "b",
        "text": "Use diltiazem as preferred first-line therapy for HFrEF"
      },
      {
        "key": "c",
        "text": "Use verapamil as preferred first-line therapy for HFrEF"
      },
      {
        "key": "d",
        "text": "Avoid all rate-control assessment because anticoagulation is the only goal in AFib"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": " In patients with AFib and HFrEF, beta blockers are clinically important because they support rate control and are part of HFrEF management. Nondihydropyridine calcium channel blockers should generally be avoided in HFrEF because of negative inotropic effects. B. Diltiazem is generally avoided in HFrEF. C. Verapamil is generally avoided in HFrEF. D. AFib care includes stroke prevention, symptom assessment, and rate/rhythm considerations. Atrial Fibrillation Guideline Teaching Summary; Heart Failure Guideline Teaching Summary; 2022 AHA/ACC/HFSA Heart Failure Guideline Integrating AFib rate control with HFrEF medication safety. ┬á"
  },
  {
    "id": "INT-002",
    "disease": "Integrated Atrial Fibrillation + Anticoagulation",
    "type": "sba",
    "concept_tag": "stroke_prevention_and_bleeding_risk",
    "stem": "Patient B has persistent nonvalvular AFib and elevated stroke risk. She reports minor bruising but no major bleeding symptoms, stable hemoglobin, and admits skipping apixaban doses because she is afraid the medication is ΓÇ£too strong.ΓÇ¥ What is the best next step?",
    "options": [
      {
        "key": "a",
        "text": "Stop apixaban permanently"
      },
      {
        "key": "b",
        "text": "Reduce apixaban solely because bruising occurred"
      },
      {
        "key": "c",
        "text": "Assess bleeding severity, continue appropriate anticoagulation, counsel on minor versus major bleeding, and address fear-driven nonadherence"
      },
      {
        "key": "d",
        "text": "Ignore the missed doses because bruising is more important than stroke prevention"
      }
    ],
    "correct": [
      "c"
    ],
    "rationale": " This case requires balancing stroke prevention and bleeding concerns. Minor bruising with stable hemoglobin and no major bleeding symptoms does not automatically justify stopping anticoagulation. The student should address missed doses, bleeding education, and the patientΓÇÖs fear. A. Stopping anticoagulation may increase stroke risk and is unsupported by the case. B. Dose reduction solely due to minor bruising is unsupported. D. Missed anticoagulant doses are clinically important because they reduce stroke protection. Patient B Wednesday; Atrial Fibrillation Guideline Teaching Summary; Anticoagulation/VTE Guideline Teaching Summary Balancing AFib stroke prevention, bleeding concerns, and medication adherence. ┬á"
  },
  {
    "id": "INT-003",
    "disease": "Integrated Heart Failure + CKD + Anticoagulation",
    "type": "sata",
    "concept_tag": "renal_function_potassium_and_anticoagulation_safety",
    "stem": "Patient C has HFrEF, persistent nonvalvular AFib, CKD stage 3b, borderline hyperkalemia, and long-term apixaban therapy. Which monitoring items should be prioritized? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Serum creatinine and eGFR"
      },
      {
        "key": "b",
        "text": "Potassium"
      },
      {
        "key": "c",
        "text": "Bleeding symptoms"
      },
      {
        "key": "d",
        "text": "Anticoagulant adherence"
      },
      {
        "key": "e",
        "text": "Heart failure symptoms and weight trends"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": " Patient C requires integrated monitoring because his HFrEF therapies, CKD, potassium level, and anticoagulation therapy all affect safety and outcomes. Renal function, potassium, bleeding symptoms, adherence, HF symptoms, and weight trends are all clinically relevant. There are no incorrect options in this question. Patient C Tuesday; Patient C Master Profile; Heart Failure Guideline Teaching Summary; Anticoagulation/VTE Guideline Teaching Summary Integrating cardiorenal and anticoagulation monitoring in a complex ambulatory care patient. ┬á"
  },
  {
    "id": "INT-004",
    "disease": "Integrated Atrial Fibrillation + Anticoagulation + Periprocedural Management",
    "type": "ktype",
    "concept_tag": "periprocedural_anticoagulation_planning",
    "stem": "Patient C has persistent nonvalvular AFib, CKD stage 3b, and takes apixaban. He is scheduled for an elective colonoscopy with possible polypectomy and asks if he needs ΓÇ£bridging shots.ΓÇ¥ Which statements are appropriate?\nI. His ongoing stroke risk should be considered before interrupting anticoagulation.\nII. Procedural bleeding risk should be considered when planning interruption and resumption.\nIII. LMWH bridging should be used automatically for every DOAC interruption.\nIV. The medication plan should be coordinated with the procedural team and communicated clearly to the patient.",
    "options": [
      {
        "key": "a",
        "text": "I and II only"
      },
      {
        "key": "b",
        "text": "I, II, and IV only"
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
      "b"
    ],
    "rationale": " Periprocedural anticoagulation planning should account for stroke risk, procedural bleeding risk, renal function, timing of interruption/resumption, and coordination with the procedural team. The Week 4 Patient C materials do not support automatic LMWH bridging for this case. A. This omits the need for coordination and clear patient instructions. C. This includes automatic bridging, which is not appropriate here, and omits stroke risk. D. This includes automatic bridging, which is not supported. Patient C Wednesday; Atrial Fibrillation Guideline Teaching Summary; Anticoagulation/VTE Guideline Teaching Summary Developing a periprocedural anticoagulation plan that balances stroke risk and bleeding risk. ┬á *From <*[*https://chatgpt.com/g/g-p-6a2c407492188191a62e11e351d6f546-week-4-hf-afib-anticoagulation/c/6a2c432c-f808-83ea-862f-7b3fa4f1fba2?tab=chats*](https://chatgpt.com/g/g-p-6a2c407492188191a62e11e351d6f546-week-4-hf-afib-anticoagulation/c/6a2c432c-f808-83ea-862f-7b3fa4f1fba2?tab=chats)*> * ┬á"
  }
]