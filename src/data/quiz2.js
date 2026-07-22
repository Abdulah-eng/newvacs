// Week 2 Monday quiz

export const PASS_THRESHOLD = 90;

export const QUIZ_ITEMS = [
  {
    "id": "HLD-001",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "general_lipid_management_goal",
    "type": "sba",
    "stem": "A 58-year-old patient asks why his pharmacist is concerned about his cholesterol even though he feels well. Which response best reflects the overall goal of hyperlipidemia management?",
    "options": [
      {
        "key": "a",
        "text": "To normalize all lipid values as quickly as possible"
      },
      {
        "key": "b",
        "text": "To reduce ASCVD risk through evidence-based LDL-C lowering and lifestyle modification"
      },
      {
        "key": "c",
        "text": "To treat only patients who already have symptoms of cardiovascular disease"
      },
      {
        "key": "d",
        "text": "To avoid statin therapy unless triglycerides are severely elevated"
      }
    ],
    "correct": [
      "b",
      "t",
      "r",
      "a",
      "r",
      "t",
      "e",
      "l",
      "l",
      "a",
      "l",
      "m"
    ],
    "rationale": "Correct Answer: B. To reduce ASCVD risk through evidence-based LDL-C lowering and lifestyle modification\n\nThe primary goal of hyperlipidemia management is to reduce ASCVD risk through evidence-based LDL-C lowering and lifestyle modification. Patients may feel well but still have significant long-term cardiovascular risk."
  },
  {
    "id": "HLD-002",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "initial_lipid_evaluation",
    "type": "sata",
    "stem": "Which items should be assessed during an initial hyperlipidemia and ASCVD risk evaluation? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "LDL-C"
      },
      {
        "key": "b",
        "text": "HDL-C"
      },
      {
        "key": "c",
        "text": "Triglycerides"
      },
      {
        "key": "d",
        "text": "ASCVD history"
      },
      {
        "key": "e",
        "text": "CKD status"
      },
      {
        "key": "f",
        "text": "Statin tolerance"
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
    "rationale": "Correct Answer: A, B, C, D, E, F\n\nInitial evaluation should include lipid values, ASCVD history, diabetes status, CKD status, smoking status, blood pressure, family history of premature ASCVD, current lipid-lowering therapy, and statin tolerance."
  },
  {
    "id": "HLD-003",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "high_intensity_statin_therapy",
    "type": "sba",
    "stem": "Which regimen is considered high-intensity statin therapy?",
    "options": [
      {
        "key": "a",
        "text": "Simvastatin 10 mg daily"
      },
      {
        "key": "b",
        "text": "Pravastatin 20 mg daily"
      },
      {
        "key": "c",
        "text": "Atorvastatin 40 mg daily"
      },
      {
        "key": "d",
        "text": "Rosuvastatin 5 mg daily"
      }
    ],
    "correct": [
      "c",
      "a",
      "m",
      "d"
    ],
    "rationale": "Correct Answer: C. Atorvastatin 40 mg daily\n\nHigh-intensity statin therapy includes atorvastatin 40–80 mg daily or rosuvastatin 20–40 mg daily."
  },
  {
    "id": "HLD-004",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "moderate_intensity_statin_therapy",
    "type": "sba",
    "stem": "Which regimen is most consistent with moderate-intensity statin therapy?",
    "options": [
      {
        "key": "a",
        "text": "Atorvastatin 10 mg daily"
      },
      {
        "key": "b",
        "text": "Simvastatin 5 mg daily"
      },
      {
        "key": "c",
        "text": "Rosuvastatin 40 mg daily"
      },
      {
        "key": "d",
        "text": "Atorvastatin 80 mg daily"
      }
    ],
    "correct": [
      "a",
      "a",
      "m",
      "d"
    ],
    "rationale": "Correct Answer: A. Atorvastatin 10 mg daily\n\nModerate-intensity statin therapy includes atorvastatin 10–20 mg daily, rosuvastatin 5–10 mg daily, simvastatin 20–40 mg daily, and pravastatin 40–80 mg daily."
  },
  {
    "id": "HLD-005",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "patient_a_initial_lipid_management",
    "type": "sba",
    "stem": "Michael Turner is a 58-year-old male with LDL-C 132 mg/dL, 10-year ASCVD risk 11.8%, CKD G2A2, hypertension, obesity, and family history of premature ASCVD. He is taking atorvastatin 10 mg daily but reports missing several doses weekly. Which plan is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Discontinue atorvastatin because LDL-C is only mildly elevated"
      },
      {
        "key": "b",
        "text": "Continue atorvastatin 10 mg daily without addressing adherence"
      },
      {
        "key": "c",
        "text": "Increase atorvastatin to 20 mg daily and address adherence barriers"
      },
      {
        "key": "d",
        "text": "Recommend lifestyle modification alone"
      }
    ],
    "correct": [
      "c",
      "i",
      "a",
      "t",
      "m",
      "d",
      "a",
      "a",
      "a",
      "b"
    ],
    "rationale": "Correct Answer: C. Increase atorvastatin to 20 mg daily and address adherence barriers\n\nMichael has elevated ASCVD risk, CKD as a cardiovascular risk-enhancing condition, and persistent LDL-C elevation. Statin optimization is appropriate, but adherence must also be addressed because missed doses may contribute to inadequate LDL-C reduction."
  },
  {
    "id": "HLD-006",
    "disease": "Integrated Cardiorenal",
    "concept_tag": "ascvd_risk_enhancers_and_lipid_intensification",
    "type": "ktype",
    "stem": "A patient has LDL-C 132 mg/dL, CKD, former tobacco use, hypertension, obesity, and family history of premature ASCVD. Which statements support statin intensification?\n\nI. CKD increases cardiovascular risk\n\nII. LDL-C remains above the desired treatment threshold\n\nIII. Family history of premature ASCVD increases concern for future events\n\nIV. Lifestyle modification eliminates the need for pharmacotherapy",
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
    "rationale": "Correct Answer: C. I, II, and III only\n\nCKD increases cardiovascular risk, persistent LDL-C elevation supports therapy optimization, and family history of premature ASCVD increases concern for future cardiovascular events. Lifestyle modification is important but does not eliminate the need for pharmacotherapy when risk remains elevated."
  },
  {
    "id": "HLD-007",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "distinguishing_nonadherence_from_non_initiation",
    "type": "sba",
    "stem": "Angela Rodriguez is a 66-year-old female with CKD G3aA2, LDL-C 148 mg/dL, and 10-year ASCVD risk 17.4%. Her active medication list includes simvastatin 10 mg daily. Her PCP previously prescribed rosuvastatin 20 mg daily, but she never started it because of cost and adverse-effect concerns. What is the most important first step?",
    "options": [
      {
        "key": "a",
        "text": "Label rosuvastatin as treatment failure"
      },
      {
        "key": "b",
        "text": "Ask about prior prescriptions, medication access, cost, and medication concerns before changing therapy"
      },
      {
        "key": "c",
        "text": "Add a PCSK9 inhibitor immediately"
      },
      {
        "key": "d",
        "text": "Stop all statin therapy because she is worried about adverse effects"
      }
    ],
    "correct": [
      "b",
      "a",
      "a",
      "p",
      "p",
      "m",
      "a",
      "c",
      "a",
      "m",
      "c",
      "b",
      "c",
      "t"
    ],
    "rationale": "Correct Answer: B. Ask about prior prescriptions, medication access, cost, and medication concerns before changing therapy\n\nAngela did not fail rosuvastatin therapy because she never started it. The pharmacist must distinguish non-initiation from true treatment failure and address access, affordability, and medication beliefs using shared decision-making."
  },
  {
    "id": "HLD-008",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "statin_associated_muscle_symptom_assessment",
    "type": "sba",
    "stem": "Angela starts rosuvastatin 20 mg daily. Three months later, LDL-C improves from 148 mg/dL to 89 mg/dL. She reports mild, bilateral soreness after walking that is occasional and not activity-limiting. What is the best response?",
    "options": [
      {
        "key": "a",
        "text": "Immediately discontinue rosuvastatin permanently"
      },
      {
        "key": "b",
        "text": "Continue rosuvastatin while assessing symptom pattern, severity, timing, and functional impact"
      },
      {
        "key": "c",
        "text": "Reduce rosuvastatin to once weekly without assessment"
      },
      {
        "key": "d",
        "text": "Tell the patient muscle symptoms are impossible with statins"
      }
    ],
    "correct": [
      "b",
      "c",
      "r",
      "w",
      "a",
      "s",
      "p",
      "s",
      "t",
      "a",
      "f",
      "i"
    ],
    "rationale": "Correct Answer: B. Continue rosuvastatin while assessing symptom pattern, severity, timing, and functional impact\n\nAngela’s LDL-C response is strong, and her soreness is mild, bilateral, occasional, and possibly related to increased walking. The pharmacist should assess the symptoms rather than immediately discontinuing effective therapy."
  },
  {
    "id": "HLD-009",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "continuing_effective_therapy",
    "type": "sba",
    "stem": "Angela returns at six months. LDL-C has improved to 78 mg/dL on rosuvastatin 20 mg daily, muscle soreness has resolved, and adherence is strong. She asks whether she can stop the statin now that her numbers are better. What is the best response?",
    "options": [
      {
        "key": "a",
        "text": "Stop rosuvastatin because LDL-C improved"
      },
      {
        "key": "b",
        "text": "Reduce statin intensity because CKD is stable"
      },
      {
        "key": "c",
        "text": "Continue rosuvastatin and explain that improvement reflects successful risk reduction, not cure"
      },
      {
        "key": "d",
        "text": "Switch to lifestyle modification alone"
      }
    ],
    "correct": [
      "c",
      "c",
      "r",
      "a",
      "e",
      "t",
      "i",
      "r",
      "s",
      "r",
      "r",
      "n",
      "c"
    ],
    "rationale": "Correct Answer: C. Continue rosuvastatin and explain that improvement reflects successful risk reduction, not cure\n\nImproved LDL-C indicates the therapy is working. Angela still has CKD and elevated cardiovascular risk, so continued therapy and monitoring remain appropriate."
  },
  {
    "id": "HLD-010",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "ezetimibe_role",
    "type": "sba",
    "stem": "Which situation most appropriately supports considering ezetimibe?",
    "options": [
      {
        "key": "a",
        "text": "A patient has never tried lifestyle changes and has no ASCVD risk factors"
      },
      {
        "key": "b",
        "text": "LDL-C remains above goal despite maximally tolerated statin therapy"
      },
      {
        "key": "c",
        "text": "LDL-C is controlled and no additional LDL-C lowering is needed"
      },
      {
        "key": "d",
        "text": "The patient reports mild muscle soreness but has not been assessed"
      }
    ],
    "correct": [
      "b",
      "l",
      "r",
      "a",
      "g",
      "d",
      "m",
      "t",
      "s",
      "t"
    ],
    "rationale": "Correct Answer: B. LDL-C remains above goal despite maximally tolerated statin therapy\n\nEzetimibe may be used when LDL-C remains above goal despite maximally tolerated statin therapy or when statin intolerance limits therapy."
  },
  {
    "id": "HLD-011",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "pcsk9_directed_therapy",
    "type": "sba",
    "stem": "Which statement best describes the role of PCSK9-directed therapy in the Week 2 lipid management framework?",
    "options": [
      {
        "key": "a",
        "text": "It should replace statins for all patients with CKD"
      },
      {
        "key": "b",
        "text": "It may be considered when additional LDL-C lowering is needed despite optimized therapy"
      },
      {
        "key": "c",
        "text": "It should be used only for triglyceride lowering"
      },
      {
        "key": "d",
        "text": "It eliminates the need for lifestyle counseling"
      }
    ],
    "correct": [
      "b",
      "i",
      "m",
      "b",
      "c",
      "w",
      "a",
      "l",
      "l",
      "i",
      "n",
      "d",
      "o",
      "t"
    ],
    "rationale": "Correct Answer: B. It may be considered when additional LDL-C lowering is needed despite optimized therapy\n\nPCSK9-directed therapies can provide substantial LDL-C lowering and may be considered when additional LDL-C lowering is needed despite optimized therapy."
  },
  {
    "id": "HLD-012",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "hypertriglyceridemia_evaluation",
    "type": "sata",
    "stem": "A patient has triglycerides of 196 mg/dL. Which factors should be assessed as potential contributors? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Alcohol intake"
      },
      {
        "key": "b",
        "text": "Dietary contributors"
      },
      {
        "key": "c",
        "text": "Diabetes control, when applicable"
      },
      {
        "key": "d",
        "text": "Medication contributors"
      },
      {
        "key": "e",
        "text": "Weight and lifestyle factors"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nEvaluation of hypertriglyceridemia should include secondary causes, alcohol intake, dietary contributors, diabetes control when applicable, medication contributors, weight, and lifestyle factors."
  },
  {
    "id": "HLD-013",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "lipid_therapy_monitoring",
    "type": "sata",
    "stem": "Which monitoring items are appropriate for a patient receiving statin therapy? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Lipid panel"
      },
      {
        "key": "b",
        "text": "Medication adherence"
      },
      {
        "key": "c",
        "text": "Muscle-related symptoms"
      },
      {
        "key": "d",
        "text": "Liver-related adverse effects when clinically indicated"
      },
      {
        "key": "e",
        "text": "Lifestyle modification progress"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nMonitoring should include lipid response, adherence, statin tolerance, muscle-related symptoms, liver-related adverse effects when clinically indicated, ASCVD events, and lifestyle modification progress."
  },
  {
    "id": "HLD-014",
    "disease": "Integrated Cardiorenal",
    "concept_tag": "ckd_as_a_cardiovascular_risk_multiplier",
    "type": "sba",
    "stem": "Which statement best describes the relationship between CKD and ASCVD risk?",
    "options": [
      {
        "key": "a",
        "text": "CKD only matters if the patient has eGFR below 15 mL/min/1.73m²"
      },
      {
        "key": "b",
        "text": "CKD increases cardiovascular risk and should be incorporated into lipid management decisions"
      },
      {
        "key": "c",
        "text": "CKD lowers cardiovascular risk because LDL-C is less predictive"
      },
      {
        "key": "d",
        "text": "CKD should be ignored when selecting lipid-lowering therapy"
      }
    ],
    "correct": [
      "b",
      "c",
      "i",
      "c",
      "r",
      "a",
      "s",
      "b",
      "i",
      "i",
      "l",
      "m",
      "d"
    ],
    "rationale": "Correct Answer: B. CKD increases cardiovascular risk and should be incorporated into lipid management decisions\n\nCKD is a cardiovascular risk multiplier. Many patients with CKD experience cardiovascular events before kidney failure, so cardiovascular risk reduction should occur alongside kidney protection."
  },
  {
    "id": "HLD-015",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "patient_c_lipid_management",
    "type": "sba",
    "stem": "David Chen has CKD G3bA3, type 2 diabetes, hypertension, hyperlipidemia, LDL-C 88 mg/dL, and 10-year ASCVD risk 22%. He is taking rosuvastatin 20 mg daily and reports excellent adherence. What is the best lipid-related plan for the initial visit?",
    "options": [
      {
        "key": "a",
        "text": "Stop rosuvastatin because LDL-C is below 100 mg/dL"
      },
      {
        "key": "b",
        "text": "Continue rosuvastatin and reinforce ASCVD risk-reduction strategies"
      },
      {
        "key": "c",
        "text": "Switch to simvastatin 10 mg daily because CKD requires lower-intensity statins"
      },
      {
        "key": "d",
        "text": "Ignore lipid management because CKD is the only active issue"
      }
    ],
    "correct": [
      "b",
      "c",
      "r",
      "a",
      "r",
      "a",
      "r",
      "s"
    ],
    "rationale": "Correct Answer: B. Continue rosuvastatin and reinforce ASCVD risk-reduction strategies\n\nDavid remains at high ASCVD risk due to CKD, diabetes, hypertension, and family history. His current statin therapy is appropriate and should be continued with ongoing risk-reduction counseling and monitoring."
  },
  {
    "id": "HLD-016",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "lipoprotein_a_risk_assessment",
    "type": "sba",
    "stem": "According to the Week 2 dyslipidemia source material, which statement about lipoprotein(a), or Lp(a), is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Lp(a) should never be measured in primary prevention"
      },
      {
        "key": "b",
        "text": "Lp(a) should be measured at least once to identify individuals at higher ASCVD risk"
      },
      {
        "key": "c",
        "text": "Lp(a) is used to diagnose CKD stage"
      },
      {
        "key": "d",
        "text": "Lp(a) replaces LDL-C for all lipid treatment decisions"
      }
    ],
    "correct": [
      "b",
      "l",
      "s",
      "b",
      "m",
      "a",
      "l",
      "o",
      "t",
      "i",
      "i",
      "a",
      "h",
      "a",
      "r"
    ],
    "rationale": "Correct Answer: B. Lp(a) should be measured at least once to identify individuals at higher ASCVD risk\n\nThe dyslipidemia guideline identifies Lp(a) measurement as useful at least once for ASCVD risk assessment. It helps identify patients with higher ASCVD risk but does not replace LDL-C-based treatment decisions."
  },
  {
    "id": "HLD-017",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "apob_and_residual_lipid_related_risk",
    "type": "sba",
    "stem": "Which patient is most likely to benefit from ApoB measurement to better assess residual lipid-related risk?",
    "options": [
      {
        "key": "a",
        "text": "A patient with no ASCVD risk factors and very low triglycerides"
      },
      {
        "key": "b",
        "text": "A patient on lipid-lowering therapy with diabetes and elevated triglycerides"
      },
      {
        "key": "c",
        "text": "A patient with acute kidney injury and no lipid disorder"
      },
      {
        "key": "d",
        "text": "A patient taking no medications who refuses all lab testing"
      }
    ],
    "correct": [
      "b",
      "a",
      "p",
      "o",
      "l",
      "t",
      "w",
      "d",
      "a",
      "e",
      "t"
    ],
    "rationale": "Correct Answer: B. A patient on lipid-lowering therapy with diabetes and elevated triglycerides\n\nApoB measurement may be useful to assess residual atherogenic particle burden, particularly in patients with diabetes, elevated triglycerides, ASCVD, CKM syndrome, or low achieved LDL-C where LDL-C alone may underestimate risk."
  },
  {
    "id": "HLD-018",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "lifestyle_counseling",
    "type": "sata",
    "stem": "Which lifestyle counseling points are appropriate for dyslipidemia management? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Heart-healthy dietary pattern"
      },
      {
        "key": "b",
        "text": "Weight management"
      },
      {
        "key": "c",
        "text": "Physical activity"
      },
      {
        "key": "d",
        "text": "Tobacco cessation"
      },
      {
        "key": "e",
        "text": "Medication adherence"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nLifestyle counseling for dyslipidemia should include heart-healthy nutrition, weight management, physical activity, tobacco cessation, alcohol moderation when relevant, and medication adherence."
  },
  {
    "id": "HLD-019",
    "disease": "Hyperlipidemia / ASCVD Risk Reduction",
    "concept_tag": "common_student_mistake",
    "type": "sba",
    "stem": "Which student statement reflects a common mistake in hyperlipidemia management?",
    "options": [
      {
        "key": "a",
        "text": "“I should assess adherence before assuming the statin failed.”"
      },
      {
        "key": "b",
        "text": "“CKD contributes to cardiovascular risk.”"
      },
      {
        "key": "c",
        "text": "“LDL-C is the only thing that matters, so I do not need to assess overall ASCVD risk.”"
      },
      {
        "key": "d",
        "text": "“Lifestyle counseling should accompany medication management.”"
      }
    ],
    "correct": [
      "c",
      "i",
      "t",
      "o",
      "t",
      "t",
      "m",
      "s",
      "i",
      "d",
      "n",
      "n",
      "t",
      "a",
      "o",
      "a",
      "r"
    ],
    "rationale": "Correct Answer: C. “LDL-C is the only thing that matters, so I do not need to assess overall ASCVD risk.”\n\nA common student mistake is focusing only on LDL-C and ignoring overall ASCVD risk, CKD status, adherence, tolerability, and patient-specific barriers."
  },
  {
    "id": "HLD-020",
    "disease": "Integrated Cardiorenal",
    "concept_tag": "lipid_optimization_in_ckd",
    "type": "sba",
    "stem": "A 66-year-old patient with CKD G3aA2, LDL-C 148 mg/dL, ASCVD risk 17.4%, and simvastatin 10 mg daily has persistent LDL-C elevation. Which approach is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Assess adherence, prior medication history, cost/access barriers, and optimize statin therapy"
      },
      {
        "key": "b",
        "text": "Avoid intensifying therapy because CKD makes statins ineffective"
      },
      {
        "key": "c",
        "text": "Stop statin therapy and focus only on albuminuria"
      },
      {
        "key": "d",
        "text": "Treat only if the patient develops chest pain"
      }
    ],
    "correct": [
      "a",
      "a",
      "a",
      "p",
      "m",
      "h",
      "c",
      "b",
      "a",
      "o",
      "s",
      "t"
    ],
    "rationale": "Correct Answer: A. Assess adherence, prior medication history, cost/access barriers, and optimize statin therapy\n\nThis patient has uncontrolled hyperlipidemia, CKD, and elevated ASCVD risk. The pharmacist should assess barriers and optimize lipid-lowering therapy while continuing CKD risk management."
  },
  {
    "id": "CKD-001",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "ckd_definition",
    "type": "sba",
    "stem": "Which finding best supports a diagnosis of CKD when present for at least 3 months?",
    "options": [
      {
        "key": "a",
        "text": "One isolated elevated glucose value"
      },
      {
        "key": "b",
        "text": "Persistent albuminuria"
      },
      {
        "key": "c",
        "text": "Mild headache"
      },
      {
        "key": "d",
        "text": "Normal eGFR with no other kidney abnormality"
      }
    ],
    "correct": [
      "b",
      "p",
      "a"
    ],
    "rationale": "Correct Answer: B. Persistent albuminuria\n\nCKD is defined by abnormalities of kidney structure or function present for at least 3 months with implications for health. Persistent albuminuria is evidence of kidney damage even when eGFR is preserved."
  },
  {
    "id": "CKD-002",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "egfr_category",
    "type": "sba",
    "stem": "A patient has an eGFR of 54 mL/min/1.73m². Which GFR category is correct?",
    "options": [
      {
        "key": "a",
        "text": "G1"
      },
      {
        "key": "b",
        "text": "G2"
      },
      {
        "key": "c",
        "text": "G3a"
      },
      {
        "key": "d",
        "text": "G4"
      }
    ],
    "correct": [
      "c",
      "g"
    ],
    "rationale": "Correct Answer: C. G3a\n\nG3a corresponds to eGFR 45–59 mL/min/1.73m²."
  },
  {
    "id": "CKD-003",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "albuminuria_category",
    "type": "sba",
    "stem": "A patient has a UACR of 165 mg/g. Which albuminuria category is correct?",
    "options": [
      {
        "key": "a",
        "text": "A1"
      },
      {
        "key": "b",
        "text": "A2"
      },
      {
        "key": "c",
        "text": "A3"
      },
      {
        "key": "d",
        "text": "Not albuminuria"
      }
    ],
    "correct": [
      "b",
      "a"
    ],
    "rationale": "Correct Answer: B. A2\n\nA2 albuminuria corresponds to UACR 30–300 mg/g."
  },
  {
    "id": "CKD-004",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "patient_a_ckd_staging",
    "type": "sba",
    "stem": "Michael Turner has eGFR 79 mL/min/1.73m² and persistent UACR 118 mg/g. What is the correct CKD classification?",
    "options": [
      {
        "key": "a",
        "text": "No CKD because eGFR is preserved"
      },
      {
        "key": "b",
        "text": "CKD G1A1"
      },
      {
        "key": "c",
        "text": "CKD G2A2"
      },
      {
        "key": "d",
        "text": "CKD G4A3"
      }
    ],
    "correct": [
      "c",
      "c",
      "g"
    ],
    "rationale": "Correct Answer: C. CKD G2A2\n\nAn eGFR of 79 mL/min/1.73m² corresponds to G2. A UACR of 118 mg/g corresponds to A2. Persistent albuminuria supports CKD even when eGFR is preserved."
  },
  {
    "id": "CKD-005",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "patient_b_ckd_staging",
    "type": "sba",
    "stem": "Angela Rodriguez has eGFR 54 mL/min/1.73m² and UACR 165 mg/g. What is the correct CKD classification?",
    "options": [
      {
        "key": "a",
        "text": "CKD G2A1"
      },
      {
        "key": "b",
        "text": "CKD G3aA2"
      },
      {
        "key": "c",
        "text": "CKD G3bA3"
      },
      {
        "key": "d",
        "text": "No CKD because UACR is below 300 mg/g"
      }
    ],
    "correct": [
      "b",
      "c",
      "g"
    ],
    "rationale": "Correct Answer: B. CKD G3aA2\n\nAn eGFR of 54 mL/min/1.73m² corresponds to G3a. A UACR of 165 mg/g corresponds to A2. Both eGFR and albuminuria should be used when staging CKD."
  },
  {
    "id": "CKD-006",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "patient_c_ckd_staging",
    "type": "sba",
    "stem": "David Chen has eGFR 42 mL/min/1.73m² and UACR 520 mg/g. What is the correct CKD classification?",
    "options": [
      {
        "key": "a",
        "text": "CKD G2A2"
      },
      {
        "key": "b",
        "text": "CKD G3aA1"
      },
      {
        "key": "c",
        "text": "CKD G3bA3"
      },
      {
        "key": "d",
        "text": "CKD G5A3"
      }
    ],
    "correct": [
      "c",
      "c",
      "g"
    ],
    "rationale": "Correct Answer: C. CKD G3bA3\n\nAn eGFR of 42 mL/min/1.73m² corresponds to G3b. A UACR of 520 mg/g corresponds to A3. This indicates advanced CKD risk with severely increased albuminuria."
  },
  {
    "id": "CKD-007",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "clinical_significance_of_albuminuria",
    "type": "sata",
    "stem": "Albuminuria is clinically important because it is a marker of which of the following? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Kidney damage"
      },
      {
        "key": "b",
        "text": "CKD progression risk"
      },
      {
        "key": "c",
        "text": "Cardiovascular risk"
      },
      {
        "key": "d",
        "text": "Need to ignore eGFR"
      },
      {
        "key": "e",
        "text": "Long-term risk that should be trended over time"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, E\n\nAlbuminuria is a marker of kidney damage, CKD progression risk, and cardiovascular risk. It should be evaluated together with eGFR and trended over time."
  },
  {
    "id": "CKD-008",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "ace_inhibitor_arb_monitoring",
    "type": "sata",
    "stem": "Which parameters should be monitored when using ACE inhibitor or ARB therapy in CKD? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Serum creatinine"
      },
      {
        "key": "b",
        "text": "Potassium"
      },
      {
        "key": "c",
        "text": "Blood pressure"
      },
      {
        "key": "d",
        "text": "UACR"
      },
      {
        "key": "e",
        "text": "Medication adherence"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nACE inhibitor and ARB therapy require monitoring of renal function, potassium, blood pressure, albuminuria response, and adherence."
  },
  {
    "id": "CKD-009",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "sglt2_inhibitor_role_in_ckd",
    "type": "sata",
    "stem": "Which statements are appropriate regarding SGLT2 inhibitors in CKD care? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "They may slow CKD progression"
      },
      {
        "key": "b",
        "text": "They may reduce albuminuria"
      },
      {
        "key": "c",
        "text": "They may reduce heart failure risk"
      },
      {
        "key": "d",
        "text": "They require monitoring of eGFR and volume status"
      },
      {
        "key": "e",
        "text": "They eliminate the need to monitor kidney function"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nSGLT2 inhibitors may slow CKD progression, reduce albuminuria, reduce heart failure risk, and reduce cardiovascular events. Monitoring remains necessary, including eGFR and volume status."
  },
  {
    "id": "CKD-010",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "finerenone_role",
    "type": "sba",
    "stem": "Which patient profile most closely fits the Week 2 framework for considering finerenone?",
    "options": [
      {
        "key": "a",
        "text": "Patient without CKD, no diabetes, UACR 10 mg/g"
      },
      {
        "key": "b",
        "text": "Patient with type 2 diabetes, CKD, and persistent albuminuria despite optimized therapy"
      },
      {
        "key": "c",
        "text": "Patient with isolated LDL-C elevation and no kidney disease"
      },
      {
        "key": "d",
        "text": "Patient with severe hyperkalemia risk and no albuminuria"
      }
    ],
    "correct": [
      "b",
      "p",
      "w",
      "t",
      "d",
      "c",
      "a",
      "p",
      "a",
      "d",
      "o",
      "t"
    ],
    "rationale": "Correct Answer: B. Patient with type 2 diabetes, CKD, and persistent albuminuria despite optimized therapy\n\nFinerenone may be considered in appropriate patients with type 2 diabetes, CKD, and persistent albuminuria despite optimized therapy. Potassium and renal function monitoring are required."
  },
  {
    "id": "CKD-011",
    "disease": "Integrated Cardiorenal",
    "concept_tag": "patient_c_residual_ckd_progression_risk",
    "type": "sba",
    "stem": "David Chen has type 2 diabetes, CKD G3bA3, UACR 520 mg/g, eGFR 42 mL/min/1.73m², and is already taking lisinopril and empagliflozin. He previously declined finerenone due to medication burden, potassium concerns, and cost. What is the best pharmacist approach?",
    "options": [
      {
        "key": "a",
        "text": "State that current therapy is sufficient because A1C is near goal"
      },
      {
        "key": "b",
        "text": "Discuss persistent albuminuria and residual cardiorenal risk, explore prior concerns, and use shared decision-making about finerenone"
      },
      {
        "key": "c",
        "text": "Stop empagliflozin because albuminuria persists"
      },
      {
        "key": "d",
        "text": "Ignore albuminuria and focus only on LDL-C"
      }
    ],
    "correct": [
      "b",
      "d",
      "p",
      "a",
      "a",
      "r",
      "c",
      "r",
      "e",
      "p",
      "c",
      "a",
      "u",
      "s",
      "d",
      "a",
      "f"
    ],
    "rationale": "Correct Answer: B. Discuss persistent albuminuria and residual cardiorenal risk, explore prior concerns, and use shared decision-making about finerenone\n\nDavid remains at high residual cardiorenal risk due to CKD G3bA3 and severe persistent albuminuria despite foundational therapy. The pharmacist should address his concerns about pill burden, potassium, and cost while using shared decision-making."
  },
  {
    "id": "CKD-012",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "finerenone_monitoring",
    "type": "sba",
    "stem": "David starts finerenone. At follow-up, UACR improves from 520 to 390 mg/g, eGFR changes from 42 to 40 mL/min/1.73m², potassium is 5.1 mEq/L, and he denies weakness, cramps, palpitations, or dizziness. What is the best interpretation?",
    "options": [
      {
        "key": "a",
        "text": "Finerenone must be permanently discontinued solely because potassium is 5.1 mEq/L"
      },
      {
        "key": "b",
        "text": "Therapy is clearly ineffective because eGFR declined slightly"
      },
      {
        "key": "c",
        "text": "Continue therapy with monitoring and interpret potassium, eGFR, and UACR in clinical context"
      },
      {
        "key": "d",
        "text": "Stop all kidney-protective therapy because albuminuria improved"
      }
    ],
    "correct": [
      "c",
      "c",
      "t",
      "w",
      "m",
      "a",
      "i",
      "p",
      "e",
      "a",
      "u",
      "i",
      "c",
      "c"
    ],
    "rationale": "Correct Answer: C. Continue therapy with monitoring and interpret potassium, eGFR, and UACR in clinical context\n\nFinerenone requires potassium and renal function monitoring. In this case, UACR improved, eGFR changed slightly, and potassium requires continued monitoring. The pharmacist should interpret the trend in context rather than automatically stopping therapy."
  },
  {
    "id": "CKD-013",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "improvement_versus_ckd_resolution",
    "type": "sba",
    "stem": "At six months, David’s UACR improves from 520 to 290 mg/g, potassium is 4.9 mEq/L, and eGFR is 41 mL/min/1.73m². He asks if his CKD is resolved. What is the best response?",
    "options": [
      {
        "key": "a",
        "text": "Yes, CKD is resolved because UACR improved"
      },
      {
        "key": "b",
        "text": "No, improvement suggests risk reduction, but CKD and residual cardiorenal risk remain"
      },
      {
        "key": "c",
        "text": "Stop finerenone because it has already worked"
      },
      {
        "key": "d",
        "text": "Stop statin therapy because kidney markers improved"
      }
    ],
    "correct": [
      "b",
      "n",
      "i",
      "s",
      "r",
      "r",
      "b",
      "c",
      "a",
      "r",
      "c",
      "r",
      "r"
    ],
    "rationale": "Correct Answer: B. No, improvement suggests risk reduction, but CKD and residual cardiorenal risk remain\n\nImproved albuminuria is clinically meaningful, but it does not mean CKD is cured. David still has CKD and residual cardiorenal risk, requiring ongoing therapy, monitoring, and counseling."
  },
  {
    "id": "CKD-014",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "medication_stewardship_in_ckd",
    "type": "sata",
    "stem": "Which medication-related issues should be reviewed in patients with CKD? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "NSAID use"
      },
      {
        "key": "b",
        "text": "Duplicate therapy"
      },
      {
        "key": "c",
        "text": "Inappropriate dosing"
      },
      {
        "key": "d",
        "text": "Nephrotoxic medications"
      },
      {
        "key": "e",
        "text": "Herbal supplements and OTC medications"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nMedication stewardship in CKD includes reviewing NSAID use, duplicate therapy, inappropriate dosing, nephrotoxic medications, herbal supplements, and OTC medications."
  },
  {
    "id": "CKD-015",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "nsaid_use_in_ckd",
    "type": "sba",
    "stem": "Michael has CKD G2A2 and uses ibuprofen 400–600 mg several times weekly for knee pain, but this is not listed in the chart. What should the pharmacist do?",
    "options": [
      {
        "key": "a",
        "text": "Ignore OTC medications because they are not prescribed"
      },
      {
        "key": "b",
        "text": "Ask about OTC pain medications and counsel on kidney-related risks of chronic NSAID exposure"
      },
      {
        "key": "c",
        "text": "Stop lisinopril because ibuprofen is being used"
      },
      {
        "key": "d",
        "text": "Tell the patient all pain medications are contraindicated"
      }
    ],
    "correct": [
      "b",
      "a",
      "a",
      "o",
      "p",
      "m",
      "a",
      "c",
      "o",
      "k",
      "r",
      "o",
      "c",
      "n",
      "e"
    ],
    "rationale": "Correct Answer: B. Ask about OTC pain medications and counsel on kidney-related risks of chronic NSAID exposure\n\nOTC and NSAID use should be assessed in CKD. Chronic NSAID exposure may contribute to kidney-related risk, and the pharmacist should identify use through patient questioning and provide counseling."
  },
  {
    "id": "CKD-016",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "ckd_monitoring",
    "type": "sata",
    "stem": "Which items should be monitored routinely in CKD management? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "eGFR"
      },
      {
        "key": "b",
        "text": "UACR"
      },
      {
        "key": "c",
        "text": "Blood pressure"
      },
      {
        "key": "d",
        "text": "Potassium"
      },
      {
        "key": "e",
        "text": "Serum creatinine"
      },
      {
        "key": "f",
        "text": "Medication adherence and tolerability"
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
    "rationale": "Correct Answer: A, B, C, D, E, F\n\nCKD monitoring should include eGFR, UACR, blood pressure, potassium, serum creatinine, medication adherence, medication tolerability, CKD progression, and cardiovascular risk factors."
  },
  {
    "id": "CKD-017",
    "disease": "Integrated Cardiorenal",
    "concept_tag": "therapy_selection_beyond_a1c",
    "type": "sba",
    "stem": "Which statement best reflects modern cardiorenal management in a patient with type 2 diabetes and CKD?",
    "options": [
      {
        "key": "a",
        "text": "If A1C is near goal, CKD therapy never needs intensification"
      },
      {
        "key": "b",
        "text": "Albuminuria and CKD progression risk may require treatment intensification even when A1C is controlled"
      },
      {
        "key": "c",
        "text": "LDL-C control eliminates the need for kidney-protective therapy"
      },
      {
        "key": "d",
        "text": "eGFR alone should determine all treatment decisions"
      }
    ],
    "correct": [
      "b",
      "a",
      "a",
      "c",
      "p",
      "r",
      "m",
      "r",
      "t",
      "i",
      "e",
      "w",
      "a",
      "i",
      "c"
    ],
    "rationale": "Correct Answer: B. Albuminuria and CKD progression risk may require treatment intensification even when A1C is controlled\n\nModern cardiorenal management prioritizes kidney protection, cardiovascular protection, heart failure prevention, and albuminuria reduction, not only glycemic control. A patient can have A1C near goal and still require treatment intensification for CKD risk reduction."
  },
  {
    "id": "CKD-018",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "blood_pressure_relevance_in_ckd",
    "type": "sba",
    "stem": "Why is blood pressure assessment important in CKD management?",
    "options": [
      {
        "key": "a",
        "text": "Blood pressure has no effect on CKD progression"
      },
      {
        "key": "b",
        "text": "Persistent uncontrolled blood pressure accelerates kidney disease progression and increases cardiovascular risk"
      },
      {
        "key": "c",
        "text": "Blood pressure only matters in patients on dialysis"
      },
      {
        "key": "d",
        "text": "Blood pressure should be ignored if UACR is abnormal"
      }
    ],
    "correct": [
      "b",
      "p",
      "u",
      "b",
      "p",
      "a",
      "k",
      "d",
      "p",
      "a",
      "i",
      "c",
      "r"
    ],
    "rationale": "Correct Answer: B. Persistent uncontrolled blood pressure accelerates kidney disease progression and increases cardiovascular risk\n\nBlood pressure control is one of the most important interventions for slowing CKD progression and reducing cardiovascular risk."
  },
  {
    "id": "CKD-019",
    "disease": "Chronic Kidney Disease",
    "concept_tag": "ckd_escalation_points",
    "type": "sata",
    "stem": "Which findings may warrant escalation, closer monitoring, or referral consideration in CKD? Select all that apply.",
    "options": [
      {
        "key": "a",
        "text": "Rapid eGFR decline"
      },
      {
        "key": "b",
        "text": "Progressive albuminuria"
      },
      {
        "key": "c",
        "text": "Persistent A3 albuminuria"
      },
      {
        "key": "d",
        "text": "Recurrent hyperkalemia"
      },
      {
        "key": "e",
        "text": "Suspected secondary kidney disease"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nEscalation points include rapid eGFR decline, progressive albuminuria, persistent A3 albuminuria, refractory hypertension, recurrent hyperkalemia, significant medication-related adverse effects, suspected secondary kidney disease, advanced CKD approaching kidney failure, and evidence of accelerated CKD progression."
  },
  {
    "id": "CKD-020",
    "disease": "Integrated Cardiorenal",
    "concept_tag": "integrated_cardiorenal_care_priorities",
    "type": "ktype",
    "stem": "A patient has CKD, albuminuria, elevated ASCVD risk, hypertension, and hyperlipidemia. Which care priorities should the pharmacist assess?\n\nI. Whether lipid-lowering therapy is appropriate\n\nII. Whether blood pressure is optimized\n\nIII. Whether kidney-protective therapy is optimized\n\nIV. Whether cardiovascular risk factors and lifestyle barriers are addressed",
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
    "rationale": "Correct Answer: D. I, II, III, and IV\n\nCardiorenal care requires integrated management. The pharmacist should assess lipid therapy, blood pressure, kidney-protective therapy, cardiovascular risk factors, lifestyle, adherence, monitoring, and patient-specific barriers."
  }
];
