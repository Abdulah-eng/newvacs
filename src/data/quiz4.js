// Week 4 Monday quiz

export const PASS_THRESHOLD = 90;

export const QUIZ_ITEMS = [
  {
    "id": "HF-001",
    "disease": "Heart Failure",
    "concept_tag": "heart_failure_classification",
    "type": "sba",
    "stem": "A 58-year-old patient has an echocardiogram showing LVEF 35%. Based on the Week 4 heart failure framework, how should this patient’s heart failure be classified?",
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
      "c",
      "h",
      "f",
      "w",
      "r",
      "e",
      "f"
    ],
    "rationale": "Correct Answer: C. Heart failure with reduced ejection fraction\n\nHeart failure with reduced ejection fraction is defined as LVEF ≤40%. This patient’s LVEF of 35% meets the definition of HFrEF."
  },
  {
    "id": "HF-002",
    "disease": "Heart Failure",
    "concept_tag": "nyha_functional_classification",
    "type": "sba",
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
      "b",
      "n",
      "c",
      "i"
    ],
    "rationale": "Correct Answer: B. NYHA Class II\n\nNYHA Class II describes slight limitation of physical activity. Patients are comfortable at rest, but ordinary activity causes symptoms."
  },
  {
    "id": "HF-003",
    "disease": "Heart Failure",
    "concept_tag": "acc_aha_heart_failure_staging",
    "type": "sba",
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
      "c",
      "s",
      "c"
    ],
    "rationale": "Correct Answer: C. Stage C\n\nStage C heart failure describes structural heart disease with current or prior symptoms of heart failure."
  },
  {
    "id": "HF-004",
    "disease": "Heart Failure",
    "concept_tag": "foundational_hfref_therapy",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C, D\n\nModern HFrEF management centers on four foundational medication classes: ARNI, evidence-based beta blocker, MRA, and SGLT2 inhibitor."
  },
  {
    "id": "HF-005",
    "disease": "Heart Failure",
    "concept_tag": "evidence_based_beta_blockers",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C\n\nThe Week 4 heart failure materials identify metoprolol succinate, carvedilol, and bisoprolol as the beta blockers with demonstrated mortality benefit in HFrEF."
  },
  {
    "id": "HF-006",
    "disease": "Heart Failure",
    "concept_tag": "arni_transition_from_ace_inhibitor",
    "type": "sba",
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
      "b",
      "s",
      "l",
      "a",
      "a",
      "a",
      "a",
      "w",
      "p",
      "b",
      "s",
      "s"
    ],
    "rationale": "Correct Answer: B. Stop lisinopril and allow an appropriate washout period before starting sacubitril/valsartan\n\nWhen transitioning from an ACE inhibitor to an ARNI, the ACE inhibitor should be stopped and an appropriate washout period should occur before starting sacubitril/valsartan. This helps reduce the risk of angioedema."
  },
  {
    "id": "HF-007",
    "disease": "Heart Failure",
    "concept_tag": "mra_initiation_and_monitoring",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C, D\n\nMRA therapy requires assessment of potassium, renal function, eGFR, blood pressure, and clinical tolerability. These are important because MRAs can increase potassium and require careful renal monitoring."
  },
  {
    "id": "HF-008",
    "disease": "Heart Failure",
    "concept_tag": "sglt2_inhibitors_in_hfref",
    "type": "sba",
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
      "b",
      "t",
      "m",
      "r",
      "h",
      "a",
      "c",
      "m",
      "a",
      "b",
      "o",
      "r",
      "o",
      "d",
      "s"
    ],
    "rationale": "Correct Answer: B. They may reduce hospitalization and cardiovascular mortality, and benefits occur regardless of diabetes status\n\nThe Week 4 heart failure materials state that SGLT2 inhibitors have benefits in HFrEF regardless of diabetes status."
  },
  {
    "id": "HF-009",
    "disease": "Heart Failure",
    "concept_tag": "gdmt_sequencing",
    "type": "ktype",
    "stem": "Which statements about practical GDMT sequencing in HFrEF are consistent with the Week 4 materials?\n\nI. All four foundational HFrEF medication classes should be evaluated when feasible.\n\nII. Therapy should generally be implemented early and titrated as tolerated.\n\nIII. Clinicians must always fully titrate one medication to target before adding another class.\n\nIV. Monitoring should occur after initiation and titration.",
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
      "b",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: B. I, II, and IV only\n\nThe Week 4 heart failure materials emphasize early initiation of foundational therapy, titration as tolerated, and monitoring after initiation and dose changes. They specifically discourage delaying initiation of one therapy while waiting to optimize another."
  },
  {
    "id": "HF-010",
    "disease": "Heart Failure",
    "concept_tag": "home_monitoring_and_patient_education",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C, D, E\n\nNewly diagnosed HFrEF patients need education on self-monitoring, lifestyle changes, medication adherence, and symptom recognition. Daily weights, BP, HR, sodium intake, adherence, and symptom reporting are all relevant."
  },
  {
    "id": "HF-011",
    "disease": "Heart Failure",
    "concept_tag": "heart_failure_with_improved_ejection_fraction",
    "type": "sba",
    "stem": "Patient A’s LVEF improves from 35% to 45% after several months of guideline-directed therapy. He asks if he can stop his heart failure medications because his ejection fraction improved. What is the best response?",
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
      "b",
      "c",
      "h",
      "t",
      "b",
      "i",
      "e",
      "d",
      "n",
      "m",
      "t",
      "s",
      "b",
      "s"
    ],
    "rationale": "Correct Answer: B. Continue HFrEF therapy because improved EF does not mean therapy should be stopped\n\nPatients with improved EF after prior HFrEF should continue HFrEF therapy. Improvement reflects treatment response and does not mean the underlying condition is cured."
  },
  {
    "id": "HF-012",
    "disease": "Heart Failure",
    "concept_tag": "medication_therapy_problems_in_hfref",
    "type": "sba",
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
      "c",
      "a",
      "a",
      "a",
      "m",
      "a",
      "b",
      "b",
      "i",
      "s",
      "a",
      "t",
      "f"
    ],
    "rationale": "Correct Answer: C. Address adherence and medication access barriers before interpreting symptoms as treatment failure\n\nPersistent symptoms cannot be interpreted as treatment failure if the patient is not consistently taking prescribed therapy. The immediate priority is to address adherence, cost, and access barriers."
  },
  {
    "id": "AF-001",
    "disease": "Atrial Fibrillation",
    "concept_tag": "afib_classification",
    "type": "sba",
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
      "b",
      "p",
      "a"
    ],
    "rationale": "Correct Answer: B. Persistent AFib\n\nPersistent AFib is AFib that continues for more than 7 days."
  },
  {
    "id": "AF-002",
    "disease": "Atrial Fibrillation",
    "concept_tag": "cha_ds_vasc_score_components",
    "type": "sata",
    "stem": "Which factors are components of the CHA₂DS₂-VASc score? Select all that apply.",
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
        "text": "Age ≥75 years"
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
    "rationale": "Correct Answer: A, B, C, D, E\n\nThe CHA₂DS₂-VASc score includes congestive heart failure, hypertension, age ≥75 years, diabetes, prior stroke/TIA/systemic embolism, vascular disease, age 65–74 years, and female sex."
  },
  {
    "id": "AF-003",
    "disease": "Atrial Fibrillation",
    "concept_tag": "anticoagulation_threshold",
    "type": "sba",
    "stem": "According to the Week 4 AFib materials, which CHA₂DS₂-VASc category generally supports oral anticoagulation unless contraindicated?",
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
        "text": "Men ≥2; women ≥3"
      },
      {
        "key": "d",
        "text": "Any patient with palpitations, regardless of risk factors"
      }
    ],
    "correct": [
      "c",
      "m",
      "w"
    ],
    "rationale": "Correct Answer: C. Men ≥2; women ≥3\n\nThe Week 4 AFib summary identifies men with CHA₂DS₂-VASc ≥2 and women with CHA₂DS₂-VASc ≥3 as elevated risk, where oral anticoagulation is generally recommended unless contraindicated."
  },
  {
    "id": "AF-004",
    "disease": "Atrial Fibrillation",
    "concept_tag": "stroke_prevention_and_symptom_burden",
    "type": "sba",
    "stem": "A patient with AFib says, “I hardly ever feel my heart racing, so I probably do not need a blood thinner.” What is the best response?",
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
      "b",
      "s",
      "p",
      "i",
      "b",
      "o",
      "t",
      "r",
      "n",
      "s",
      "b",
      "a"
    ],
    "rationale": "Correct Answer: B. Stroke prevention is based on thromboembolic risk, not symptom burden alone\n\nPatients with AFib may remain at risk for thromboembolic events even when symptoms are minimal or absent. Anticoagulation decisions should be driven by stroke risk assessment."
  },
  {
    "id": "AF-005",
    "disease": "Atrial Fibrillation",
    "concept_tag": "doac_versus_warfarin_considerations",
    "type": "sba",
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
      "a",
      "d",
      "a",
      "g",
      "p",
      "o",
      "w",
      "i",
      "e",
      "p"
    ],
    "rationale": "Correct Answer: A. DOACs are generally preferred over warfarin in eligible patients\n\nThe Week 4 AFib materials describe DOACs as generally preferred over warfarin in eligible patients because of predictable pharmacokinetics, reduced monitoring requirements, fewer food and drug interactions, and lower intracranial bleeding risk."
  },
  {
    "id": "AF-006",
    "disease": "Atrial Fibrillation",
    "concept_tag": "rate_control_in_hfref",
    "type": "sba",
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
      "a",
      "e",
      "b",
      "b"
    ],
    "rationale": "Correct Answer: A. Evidence-based beta blocker\n\nBeta blockers are commonly used for rate control and are particularly important in patients with HFrEF. Nondihydropyridine calcium channel blockers such as diltiazem and verapamil should generally be avoided in HFrEF because of negative inotropic effects."
  },
  {
    "id": "AF-007",
    "disease": "Atrial Fibrillation",
    "concept_tag": "rhythm_control_referral_awareness",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C, D\n\nPharmacists should recognize situations where rhythm-control referral may be appropriate, including persistent symptoms despite rate control, recurrent hospitalizations, failure of initial strategies, and patient-specific preferences."
  },
  {
    "id": "AF-008",
    "disease": "Atrial Fibrillation",
    "concept_tag": "afib_monitoring",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C, D, E\n\nAFib management includes symptom and rate assessment, blood pressure control, anticoagulation safety monitoring, medication adherence assessment, and monitoring for signs of thromboembolic events."
  },
  {
    "id": "AF-009",
    "disease": "Atrial Fibrillation",
    "concept_tag": "patient_education_and_health_literacy",
    "type": "sba",
    "stem": "Patient B says, “I know apixaban is a blood thinner, but I am not sure what it is preventing.” What is the best pharmacist response?",
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
      "b",
      "e",
      "i",
      "p",
      "l",
      "t",
      "a",
      "h",
      "r",
      "s",
      "r",
      "f",
      "a"
    ],
    "rationale": "Correct Answer: B. Explain in patient-friendly language that apixaban helps reduce stroke risk from AFib\n\nPatient B has limited understanding of AFib, stroke risk, and the purpose of anticoagulation. Education using patient-friendly language and teach-back is appropriate."
  },
  {
    "id": "AF-010",
    "disease": "Atrial Fibrillation",
    "concept_tag": "anticoagulation_nonadherence",
    "type": "sba",
    "stem": "Patient B has persistent AFib and elevated stroke risk. She admits missing evening apixaban doses approximately 2–3 times per week because of cost. What is the most important clinical concern?",
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
      "a",
      "m",
      "a",
      "d",
      "m",
      "r",
      "s",
      "p"
    ],
    "rationale": "Correct Answer: A. Missed apixaban doses may reduce stroke protection\n\nConsistent anticoagulant use is essential for stroke prevention. Missing apixaban doses several times per week reduces the effectiveness of therapy and should prompt adherence and access interventions."
  },
  {
    "id": "AF-011",
    "disease": "Atrial Fibrillation",
    "concept_tag": "minor_bruising_and_anticoagulation_fear",
    "type": "sba",
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
      "b",
      "m",
      "b",
      "s",
      "b",
      "a",
      "a",
      "c",
      "o",
      "b",
      "d",
      "n",
      "a",
      "j",
      "s",
      "a"
    ],
    "rationale": "Correct Answer: B. Minor bruising should be assessed and counseled on, but does not automatically justify stopping anticoagulation\n\nThe student should distinguish minor bruising from major bleeding. In this case, the more urgent issue is fear-driven anticoagulation nonadherence in a patient with elevated stroke risk."
  },
  {
    "id": "AF-012",
    "disease": "Atrial Fibrillation",
    "concept_tag": "afib_goals_of_therapy",
    "type": "ktype",
    "stem": "Which statements correctly describe major goals of AFib management in ambulatory care?\n\nI. Reduce thromboembolic risk.\n\nII. Manage symptoms and rate/rhythm issues when appropriate.\n\nIII. Ignore anticoagulation if the patient does not feel palpitations.\n\nIV. Address lifestyle and risk factors such as blood pressure, weight, and physical activity.",
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
      "b",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: B. I, II, and IV only\n\nAFib management includes reducing thromboembolic risk, managing symptoms and rate/rhythm issues, and addressing risk factors. Anticoagulation should not be ignored simply because the patient is minimally symptomatic."
  },
  {
    "id": "AC-001",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "vte_definitions",
    "type": "sba",
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
      "b",
      "a",
      "t",
      "t",
      "e",
      "t",
      "t",
      "p",
      "v"
    ],
    "rationale": "Correct Answer: B. A thrombus that embolizes to the pulmonary vasculature\n\nPulmonary embolism occurs when a thrombus embolizes to the pulmonary vasculature."
  },
  {
    "id": "AC-002",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "provoked_versus_unprovoked_vte",
    "type": "sba",
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
      "b",
      "p",
      "v"
    ],
    "rationale": "Correct Answer: B. Provoked VTE\n\nProvoked VTE occurs in the setting of a transient risk factor such as major surgery, trauma, immobilization, hospitalization, or temporary estrogen therapy."
  },
  {
    "id": "AC-003",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "extended_anticoagulation",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C, D\n\nFactors supporting extended anticoagulation include unprovoked VTE, recurrent VTE, persistent risk factors, and acceptable bleeding risk."
  },
  {
    "id": "AC-004",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "bleeding_risk_assessment",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C, D, E\n\nThe Week 4 anticoagulation materials list advanced age, CKD, prior bleeding events, concurrent antiplatelet therapy, excessive alcohol use, and poor medication adherence as bleeding-risk factors."
  },
  {
    "id": "AC-005",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "bleeding_risk_versus_anticoagulation_benefit",
    "type": "sba",
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
      "c",
      "i",
      "b",
      "r",
      "s",
      "p",
      "c",
      "m",
      "a",
      "p",
      "d"
    ],
    "rationale": "Correct Answer: C. Increased bleeding risk should prompt careful monitoring and patient-specific decision-making\n\nThe Week 4 materials state that increased bleeding risk does not automatically preclude anticoagulation. Instead, it should prompt careful monitoring and individualized decision-making."
  },
  {
    "id": "AC-006",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "doac_advantages",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C, D\n\nThe Week 4 materials describe DOAC advantages as predictable anticoagulation, limited routine laboratory monitoring, fewer food interactions, and improved convenience."
  },
  {
    "id": "AC-007",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "apixaban_considerations",
    "type": "sba",
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
      "b",
      "a",
      "i",
      "c",
      "u",
      "f",
      "a",
      "d",
      "t",
      "p",
      "t",
      "a",
      "e",
      "v",
      "p"
    ],
    "rationale": "Correct Answer: B. Apixaban is commonly used for AFib, DVT treatment, PE treatment, and extended VTE prevention\n\nThe Week 4 anticoagulation materials list apixaban as commonly used for atrial fibrillation, DVT treatment, PE treatment, and extended VTE prevention."
  },
  {
    "id": "AC-008",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "rivaroxaban_counseling",
    "type": "sba",
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
      "a",
      "t",
      "w",
      "f"
    ],
    "rationale": "Correct Answer: A. Take with food\n\nThe Week 4 materials state that rivaroxaban requires food with therapeutic doses."
  },
  {
    "id": "AC-009",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "ckd_and_anticoagulation",
    "type": "sba",
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
      "a",
      "d",
      "r",
      "f",
      "m",
      "a",
      "d",
      "e",
      "a",
      "c",
      "i",
      "b",
      "t",
      "a",
      "b",
      "r"
    ],
    "rationale": "Correct Answer: A. Declining renal function may alter drug exposure and CKD increases both thrombotic and bleeding risk\n\nThe Week 4 materials emphasize that renal function should be evaluated before anticoagulation and monitored periodically because declining renal function can alter drug exposure. CKD also increases both thrombotic and bleeding risk."
  },
  {
    "id": "AC-010",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "anticoagulation_monitoring",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C, D, E\n\nAnticoagulation monitoring should include signs of bleeding, bruising, falls, adherence, renal function, and laboratory monitoring such as CBC when clinically appropriate."
  },
  {
    "id": "AC-011",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "routine_coagulation_monitoring_with_doacs",
    "type": "sba",
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
      "a",
      "r",
      "c",
      "m",
      "i",
      "g",
      "n",
      "r"
    ],
    "rationale": "Correct Answer: A. Routine coagulation monitoring is generally not required\n\nThe Week 4 anticoagulation materials state that routine coagulation monitoring is generally not required with DOAC therapy."
  },
  {
    "id": "AC-012",
    "disease": "Anticoagulation/VTE",
    "concept_tag": "shared_decision_making",
    "type": "ktype",
    "stem": "Which statements about anticoagulation shared decision-making are consistent with the Week 4 materials?\n\nI. Patients should understand expected benefits.\n\nII. Patients should understand potential risks.\n\nIII. Patient values and preferences should be considered.\n\nIV. Monitoring requirements and alternatives should be discussed when available.",
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
      "d",
      "i",
      "i",
      "i",
      "a",
      "i"
    ],
    "rationale": "Correct Answer: D. I, II, III, and IV\n\nThe Week 4 materials emphasize shared decision-making in anticoagulation. Patients should understand benefits, risks, monitoring needs, alternatives when available, and how the decision aligns with their values and preferences."
  },
  {
    "id": "INT-001",
    "disease": "Integrated Heart Failure + Atrial Fibrillation",
    "concept_tag": "afib_rate_control_in_hfref",
    "type": "sba",
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
      "a",
      "p",
      "a",
      "e",
      "b",
      "b",
      "w",
      "c",
      "a"
    ],
    "rationale": "Correct Answer: A. Prioritize an evidence-based beta blocker when clinically appropriate\n\nIn patients with AFib and HFrEF, beta blockers are clinically important because they support rate control and are part of HFrEF management. Nondihydropyridine calcium channel blockers should generally be avoided in HFrEF because of negative inotropic effects."
  },
  {
    "id": "INT-002",
    "disease": "Integrated Atrial Fibrillation + Anticoagulation",
    "concept_tag": "stroke_prevention_and_bleeding_risk",
    "type": "sba",
    "stem": "Patient B has persistent nonvalvular AFib and elevated stroke risk. She reports minor bruising but no major bleeding symptoms, stable hemoglobin, and admits skipping apixaban doses because she is afraid the medication is “too strong.” What is the best next step?",
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
      "c",
      "a",
      "b",
      "s",
      "c",
      "a",
      "a",
      "c",
      "o",
      "m",
      "v",
      "m",
      "b",
      "a",
      "a",
      "f",
      "n"
    ],
    "rationale": "Correct Answer: C. Assess bleeding severity, continue appropriate anticoagulation, counsel on minor versus major bleeding, and address fear-driven nonadherence\n\nThis case requires balancing stroke prevention and bleeding concerns. Minor bruising with stable hemoglobin and no major bleeding symptoms does not automatically justify stopping anticoagulation. The student should address missed doses, bleeding education, and the patient’s fear."
  },
  {
    "id": "INT-003",
    "disease": "Integrated Heart Failure + CKD + Anticoagulation",
    "concept_tag": "renal_function_potassium_and_anticoagulation_safety",
    "type": "sata",
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
    "rationale": "Correct Answer: A, B, C, D, E\n\nPatient C requires integrated monitoring because his HFrEF therapies, CKD, potassium level, and anticoagulation therapy all affect safety and outcomes. Renal function, potassium, bleeding symptoms, adherence, HF symptoms, and weight trends are all clinically relevant."
  },
  {
    "id": "INT-004",
    "disease": "Integrated Atrial Fibrillation + Anticoagulation + Periprocedural Management",
    "concept_tag": "periprocedural_anticoagulation_planning",
    "type": "ktype",
    "stem": "Patient C has persistent nonvalvular AFib, CKD stage 3b, and takes apixaban. He is scheduled for an elective colonoscopy with possible polypectomy and asks if he needs “bridging shots.” Which statements are appropriate?\n\nI. His ongoing stroke risk should be considered before interrupting anticoagulation.\n\nII. Procedural bleeding risk should be considered when planning interruption and resumption.\n\nIII. LMWH bridging should be used automatically for every DOAC interruption.\n\nIV. The medication plan should be coordinated with the procedural team and communicated clearly to the patient.",
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
      "b",
      "i",
      "i",
      "a",
      "i",
      "o"
    ],
    "rationale": "Correct Answer: B. I, II, and IV only\n\nPeriprocedural anticoagulation planning should account for stroke risk, procedural bleeding risk, renal function, timing of interruption/resumption, and coordination with the procedural team. The Week 4 Patient C materials do not support automatic LMWH bridging for this case."
  }
];
