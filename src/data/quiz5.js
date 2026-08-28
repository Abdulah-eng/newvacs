// Week 5 Monday quiz

export const PASS_THRESHOLD = 90;

export const QUIZ_ITEMS = [
  {
    "id": "W5-Q1",
    "disease": "Depression",
    "concept_tag": "mdd_diagnostic_features",
    "type": "sba",
    "stem": "According to the depression guideline framework, which symptom pattern best supports a diagnosis of major depressive disorder?",
    "options": [
      {
        "key": "a",
        "text": "One day of sadness after a stressful event without functional impairment"
      },
      {
        "key": "b",
        "text": "Depressed mood or loss of interest/pleasure with additional depressive symptoms for at least 2 weeks causing clinically significant impairment"
      },
      {
        "key": "c",
        "text": "Excessive worry for 6 months without depressive symptoms"
      },
      {
        "key": "d",
        "text": "Nicotine cravings that occur only after meals"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": "Correct Answer: B. Depressed mood or loss of interest/pleasure with additional depressive symptoms for at least 2 weeks causing clinically significant impairment\n\nMajor depressive disorder requires depressed mood or loss of interest/pleasure along with additional symptoms for at least 2 weeks and clinically significant distress or impairment."
  },
  {
    "id": "W5-Q2",
    "disease": "Depression",
    "concept_tag": "treatment_goal",
    "type": "sba",
    "stem": "What is the preferred treatment goal for major depressive disorder?",
    "options": [
      {
        "key": "a",
        "text": "Mild symptom improvement only"
      },
      {
        "key": "b",
        "text": "Remission with resolution or near-resolution of symptoms and restoration of functioning"
      },
      {
        "key": "c",
        "text": "Temporary sedation"
      },
      {
        "key": "d",
        "text": "Avoiding all pharmacotherapy regardless of severity"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": "Correct Answer: B. Remission with resolution or near-resolution of symptoms and restoration of functioning\n\nDepression treatment should aim for remission, not merely partial symptom improvement. Response is meaningful improvement, but remission is the preferred endpoint."
  },
  {
    "id": "W5-Q3",
    "disease": "Depression",
    "concept_tag": "response_versus_remission",
    "type": "sba",
    "stem": "A patient’s depressive symptoms improve substantially after treatment, but residual fatigue, low motivation, and incomplete functional recovery remain. Which term best describes this outcome?",
    "options": [
      {
        "key": "a",
        "text": "Remission"
      },
      {
        "key": "b",
        "text": "Response without remission"
      },
      {
        "key": "c",
        "text": "Treatment-resistant depression"
      },
      {
        "key": "d",
        "text": "Medication intolerance"
      }
    ],
    "correct": [
      "b"
    ],
    "rationale": "Correct Answer: B. Response without remission\n\nResponse refers to substantial clinical improvement. Remission requires resolution or near-resolution of symptoms and return toward baseline functioning."
  },
  {
    "id": "W5-Q4",
    "disease": "Depression",
    "concept_tag": "first_line_therapy_for_moderate_to_severe_mdd",
    "type": "sata",
    "stem": "Which options are guideline-supported initial treatments for adults in the acute phase of moderate-to-severe major depressive disorder?",
    "options": [
      {
        "key": "a",
        "text": "Cognitive behavioral therapy"
      },
      {
        "key": "b",
        "text": "Second-generation antidepressant monotherapy"
      },
      {
        "key": "c",
        "text": "CBT plus a second-generation antidepressant"
      },
      {
        "key": "d",
        "text": "Benzodiazepine monotherapy"
      },
      {
        "key": "e",
        "text": "No active treatment unless symptoms persist for 12 months"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": "Correct Answer: A, B, C\n\nACP recommends CBT or a second-generation antidepressant as initial treatment for moderate-to-severe MDD and suggests combination therapy may be considered."
  },
  {
    "id": "W5-Q5",
    "disease": "Depression",
    "concept_tag": "mild_mdd_treatment",
    "type": "sba",
    "stem": "For an adult with mild major depressive disorder, which initial treatment option is specifically suggested by the ACP guideline?",
    "options": [
      {
        "key": "a",
        "text": "CBT monotherapy"
      },
      {
        "key": "b",
        "text": "Chronic benzodiazepine therapy"
      },
      {
        "key": "c",
        "text": "Immediate antipsychotic augmentation"
      },
      {
        "key": "d",
        "text": "No follow-up monitoring"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. CBT monotherapy\n\nACP suggests CBT monotherapy as an initial treatment option for mild MDD."
  },
  {
    "id": "W5-Q6",
    "disease": "Depression",
    "concept_tag": "shared_decision_making",
    "type": "sba",
    "stem": "When choosing between CBT, antidepressant therapy, or combination therapy for MDD, which factor should guide treatment selection?",
    "options": [
      {
        "key": "a",
        "text": "Patient preference, symptom profile, adverse effects, cost, feasibility, comorbidities, and medication use"
      },
      {
        "key": "b",
        "text": "The lowest-cost medication only, regardless of patient preference"
      },
      {
        "key": "c",
        "text": "Avoidance of psychotherapy in all patients"
      },
      {
        "key": "d",
        "text": "Automatic use of antipsychotic augmentation first"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Patient preference, symptom profile, adverse effects, cost, feasibility, comorbidities, and medication use\n\nThe ACP guideline emphasizes individualized treatment selection using shared decision-making and consideration of benefits, harms, feasibility, cost, symptoms, comorbidities, medication use, and patient preferences."
  },
  {
    "id": "W5-Q7",
    "disease": "Depression",
    "concept_tag": "second_generation_antidepressants",
    "type": "sata",
    "stem": "Which medication classes or agents fall within the second-generation antidepressant category discussed in the ACP guideline?",
    "options": [
      {
        "key": "a",
        "text": "SSRIs"
      },
      {
        "key": "b",
        "text": "SNRIs"
      },
      {
        "key": "c",
        "text": "Bupropion"
      },
      {
        "key": "d",
        "text": "Mirtazapine"
      },
      {
        "key": "e",
        "text": "Warfarin"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nSecond-generation antidepressants include SSRIs, SNRIs, and other agents such as bupropion and mirtazapine."
  },
  {
    "id": "W5-Q8",
    "disease": "Depression",
    "concept_tag": "starting_antidepressant_therapy",
    "type": "sba",
    "stem": "When initiating a second-generation antidepressant, which approach is most consistent with ACP clinical considerations?",
    "options": [
      {
        "key": "a",
        "text": "Start at a low or minimum dose to improve tolerability and adherence"
      },
      {
        "key": "b",
        "text": "Start above the maximum recommended dose"
      },
      {
        "key": "c",
        "text": "Use the medication only as needed for sadness"
      },
      {
        "key": "d",
        "text": "Avoid counseling about adverse effects"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Start at a low or minimum dose to improve tolerability and adherence\n\nThe ACP guideline notes that clinicians should start treatment with a low or minimum dose to reduce adverse effects and improve adherence."
  },
  {
    "id": "W5-Q9",
    "disease": "Depression",
    "concept_tag": "antidepressant_monitoring",
    "type": "sata",
    "stem": "Which items should be monitored after initiating a second-generation antidepressant?",
    "options": [
      {
        "key": "a",
        "text": "Worsening depressive symptoms"
      },
      {
        "key": "b",
        "text": "New or increased suicidal or self-harming thoughts"
      },
      {
        "key": "c",
        "text": "Adherence"
      },
      {
        "key": "d",
        "text": "Adverse effects"
      },
      {
        "key": "e",
        "text": "Tobacco pack-years only"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nMonitoring should include symptom response, suicidality/self-harm risk, adherence, and adverse effects. Tobacco history may be relevant when present, but it is not sufficient as the only monitoring parameter."
  },
  {
    "id": "W5-Q10",
    "disease": "Depression",
    "concept_tag": "inadequate_response_to_antidepressant_therapy",
    "type": "sba",
    "stem": "A patient with moderate-to-severe MDD does not improve after initial second-generation antidepressant therapy. Before switching therapy, what should be assessed?",
    "options": [
      {
        "key": "a",
        "text": "Whether the patient had adequate adherence and an optimal tolerated dose"
      },
      {
        "key": "b",
        "text": "Whether the patient prefers the color of the tablet"
      },
      {
        "key": "c",
        "text": "Whether all antidepressants should be permanently avoided"
      },
      {
        "key": "d",
        "text": "Whether CBT is contraindicated in all patients"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Whether the patient had adequate adherence and an optimal tolerated dose\n\nThe ACP guideline emphasizes assessing adherence and optimizing the tolerated dose before moving to second-line strategies."
  },
  {
    "id": "W5-Q11",
    "disease": "Depression",
    "concept_tag": "second_line_therapy",
    "type": "sata",
    "stem": "For adults with moderate-to-severe MDD who do not respond to an adequate dose of a second-generation antidepressant, which second-line strategies are guideline-supported?",
    "options": [
      {
        "key": "a",
        "text": "Switch to or augment with CBT"
      },
      {
        "key": "b",
        "text": "Switch to a different second-generation antidepressant"
      },
      {
        "key": "c",
        "text": "Augment with a second pharmacologic treatment"
      },
      {
        "key": "d",
        "text": "Stop all treatment and avoid follow-up"
      },
      {
        "key": "e",
        "text": "Tell the patient there are no remaining options"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": "Correct Answer: A, B, C\n\nACP suggests switching to or augmenting with CBT, switching to another second-generation antidepressant, or augmenting with another pharmacologic treatment."
  },
  {
    "id": "W5-Q12",
    "disease": "Depression",
    "concept_tag": "continuation_after_remission",
    "type": "sba",
    "stem": "After a patient achieves remission with a second-generation antidepressant, what does the ACP guideline recommend regarding ongoing therapy?",
    "options": [
      {
        "key": "a",
        "text": "Continue the treatment strategy for at least an additional 4 to 9 months"
      },
      {
        "key": "b",
        "text": "Stop the antidepressant immediately without tapering"
      },
      {
        "key": "c",
        "text": "Switch automatically to antipsychotic monotherapy"
      },
      {
        "key": "d",
        "text": "Stop monitoring because relapse is no longer possible"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Continue the treatment strategy for at least an additional 4 to 9 months\n\nThe ACP guideline recommends continuing the treatment strategy for at least an additional 4 to 9 months after remission. If treatment is discontinued, gradual tapering is recommended to minimize withdrawal symptoms."
  },
  {
    "id": "W5-Q13",
    "disease": "Anxiety",
    "concept_tag": "gad_diagnostic_features",
    "type": "sba",
    "stem": "Which symptom pattern best aligns with generalized anxiety disorder?",
    "options": [
      {
        "key": "a",
        "text": "Excessive anxiety and worry occurring more days than not for at least 6 months, with difficulty controlling the worry"
      },
      {
        "key": "b",
        "text": "Depressed mood for one day after poor sleep"
      },
      {
        "key": "c",
        "text": "Nicotine craving only after meals"
      },
      {
        "key": "d",
        "text": "Elevated blood glucose without worry or functional impairment"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Excessive anxiety and worry occurring more days than not for at least 6 months, with difficulty controlling the worry\n\nGAD is characterized by excessive anxiety and worry occurring more days than not for at least 6 months, with difficulty controlling the worry."
  },
  {
    "id": "W5-Q14",
    "disease": "Anxiety",
    "concept_tag": "associated_gad_symptoms",
    "type": "sata",
    "stem": "Which symptoms may be associated with generalized anxiety disorder?",
    "options": [
      {
        "key": "a",
        "text": "Restlessness or feeling keyed up"
      },
      {
        "key": "b",
        "text": "Fatigue"
      },
      {
        "key": "c",
        "text": "Difficulty concentrating"
      },
      {
        "key": "d",
        "text": "Sleep disturbance"
      },
      {
        "key": "e",
        "text": "Complete absence of distress or impairment"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nCommon GAD-associated symptoms include restlessness, fatigue, impaired concentration, irritability, muscle tension, and sleep disturbance."
  },
  {
    "id": "W5-Q15",
    "disease": "Anxiety",
    "concept_tag": "gad_7_interpretation",
    "type": "sba",
    "stem": "Which GAD-7 score range is consistent with severe anxiety?",
    "options": [
      {
        "key": "a",
        "text": "0–4"
      },
      {
        "key": "b",
        "text": "5–9"
      },
      {
        "key": "c",
        "text": "10–14"
      },
      {
        "key": "d",
        "text": "15–21"
      }
    ],
    "correct": [
      "d"
    ],
    "rationale": "Correct Answer: D. 15–21\n\nGAD-7 severity categories are minimal anxiety 0–4, mild anxiety 5–9, moderate anxiety 10–14, and severe anxiety 15–21."
  },
  {
    "id": "W5-Q16",
    "disease": "Anxiety",
    "concept_tag": "screening_accuracy",
    "type": "sba",
    "stem": "According to the USPSTF anxiety evidence review, which screening tools had acceptable accuracy for detecting generalized anxiety disorder?",
    "options": [
      {
        "key": "a",
        "text": "GAD-2 and GAD-7"
      },
      {
        "key": "b",
        "text": "PHQ-9 only"
      },
      {
        "key": "c",
        "text": "AUDIT-C only"
      },
      {
        "key": "d",
        "text": "CHA₂DS₂-VASc"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. GAD-2 and GAD-7\n\nThe USPSTF evidence review found that GAD-2 and GAD-7 had acceptable accuracy for identifying generalized anxiety disorder."
  },
  {
    "id": "W5-Q17",
    "disease": "Anxiety",
    "concept_tag": "evidence_for_anxiety_treatment",
    "type": "sba",
    "stem": "Which statement best reflects the USPSTF evidence review on anxiety screening and treatment?",
    "options": [
      {
        "key": "a",
        "text": "Evidence was insufficient to determine benefits or harms of anxiety screening programs, but treatment for anxiety has demonstrated benefit"
      },
      {
        "key": "b",
        "text": "Anxiety treatment has no evidence of benefit"
      },
      {
        "key": "c",
        "text": "GAD-7 has no role in anxiety assessment"
      },
      {
        "key": "d",
        "text": "CBT consistently worsens anxiety symptoms"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Evidence was insufficient to determine benefits or harms of anxiety screening programs, but treatment for anxiety has demonstrated benefit\n\nThe evidence review found insufficient evidence to determine the benefit or harm of screening programs alone, but clear evidence that anxiety treatment is beneficial."
  },
  {
    "id": "W5-Q18",
    "disease": "Anxiety",
    "concept_tag": "first_line_nonpharmacologic_therapy",
    "type": "sba",
    "stem": "Which nonpharmacologic treatment is considered a first-line option for anxiety disorders?",
    "options": [
      {
        "key": "a",
        "text": "Cognitive behavioral therapy"
      },
      {
        "key": "b",
        "text": "Long-term avoidance of all anxiety triggers"
      },
      {
        "key": "c",
        "text": "Chronic sedative-hypnotic therapy"
      },
      {
        "key": "d",
        "text": "No treatment unless symptoms become severe"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Cognitive behavioral therapy\n\nCBT is a first-line behavioral treatment option for anxiety disorders and may be used alone or with pharmacotherapy."
  },
  {
    "id": "W5-Q19",
    "disease": "Anxiety",
    "concept_tag": "pharmacologic_treatment",
    "type": "sata",
    "stem": "Which medication classes are commonly used as first-line pharmacologic options for anxiety disorders, especially when depression coexists?",
    "options": [
      {
        "key": "a",
        "text": "SSRIs"
      },
      {
        "key": "b",
        "text": "SNRIs"
      },
      {
        "key": "c",
        "text": "Warfarin"
      },
      {
        "key": "d",
        "text": "Insulin"
      },
      {
        "key": "e",
        "text": "Statins"
      }
    ],
    "correct": [
      "a",
      "b"
    ],
    "rationale": "Correct Answer: A, B\n\nSSRIs and SNRIs are commonly used first-line pharmacologic options for anxiety and may also treat coexisting depression."
  },
  {
    "id": "W5-Q20",
    "disease": "Anxiety",
    "concept_tag": "depression_anxiety_overlap",
    "type": "sba",
    "stem": "Why are SSRIs or SNRIs often useful when anxiety and depression coexist?",
    "options": [
      {
        "key": "a",
        "text": "They may treat both anxiety and depressive symptoms with one medication strategy"
      },
      {
        "key": "b",
        "text": "They eliminate the need for monitoring"
      },
      {
        "key": "c",
        "text": "They work only when taken as needed"
      },
      {
        "key": "d",
        "text": "They are tobacco cessation medications only"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. They may treat both anxiety and depressive symptoms with one medication strategy\n\nSSRIs and SNRIs can address both depression and anxiety, making them useful when the conditions coexist."
  },
  {
    "id": "W5-Q21",
    "disease": "Anxiety",
    "concept_tag": "bupropion_caution",
    "type": "sba",
    "stem": "Why may bupropion be less preferred as an initial antidepressant when prominent anxiety symptoms are present?",
    "options": [
      {
        "key": "a",
        "text": "It may worsen anxiety in some patients"
      },
      {
        "key": "b",
        "text": "It has no possible role in depression treatment"
      },
      {
        "key": "c",
        "text": "It is an anticoagulant"
      },
      {
        "key": "d",
        "text": "It is only used for hypertension"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. It may worsen anxiety in some patients\n\nAlthough bupropion can be useful for depression and tobacco cessation, it may worsen anxiety in some patients and may be less preferred when anxiety symptoms are prominent."
  },
  {
    "id": "W5-Q22",
    "disease": "Anxiety",
    "concept_tag": "benzodiazepine_safety",
    "type": "sba",
    "stem": "Why are benzodiazepines generally not preferred for long-term anxiety management?",
    "options": [
      {
        "key": "a",
        "text": "Risks include dependence, withdrawal, misuse, overdose, and other safety concerns"
      },
      {
        "key": "b",
        "text": "They cure anxiety permanently after one dose"
      },
      {
        "key": "c",
        "text": "They are first-line for all anxiety patients indefinitely"
      },
      {
        "key": "d",
        "text": "They also treat tobacco dependence"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Risks include dependence, withdrawal, misuse, overdose, and other safety concerns\n\nBenzodiazepines carry important safety concerns, especially with long-term use."
  },
  {
    "id": "W5-Q23",
    "disease": "Anxiety",
    "concept_tag": "anxiety_monitoring",
    "type": "sata",
    "stem": "Which parameters should be monitored when treating generalized anxiety disorder?",
    "options": [
      {
        "key": "a",
        "text": "GAD-7 score"
      },
      {
        "key": "b",
        "text": "Anxiety symptom burden"
      },
      {
        "key": "c",
        "text": "Sleep quality"
      },
      {
        "key": "d",
        "text": "Functional impairment"
      },
      {
        "key": "e",
        "text": "Medication adherence and adverse effects"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nLongitudinal anxiety management should include validated symptom scales, clinical symptoms, function, sleep, adherence, and tolerability."
  },
  {
    "id": "W5-Q24",
    "disease": "Anxiety",
    "concept_tag": "when_to_reassess",
    "type": "sba",
    "stem": "After initiating treatment for anxiety, which follow-up approach is most appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Reassess symptoms, function, adherence, adverse effects, and GAD-7 longitudinally"
      },
      {
        "key": "b",
        "text": "Avoid follow-up unless the patient calls"
      },
      {
        "key": "c",
        "text": "Monitor only weight"
      },
      {
        "key": "d",
        "text": "Stop therapy once the prescription is written"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Reassess symptoms, function, adherence, adverse effects, and GAD-7 longitudinally\n\nAnxiety treatment requires longitudinal reassessment of symptom response, function, adherence, and medication safety."
  },
  {
    "id": "W5-Q25",
    "disease": "Tobacco Cessation",
    "concept_tag": "uspstf_adult_tobacco_recommendation",
    "type": "sba",
    "stem": "What does the USPSTF recommend clinicians do for adults who use tobacco?",
    "options": [
      {
        "key": "a",
        "text": "Ask about tobacco use, advise them to quit, and provide behavioral interventions and FDA-approved pharmacotherapy for nonpregnant adults who smoke"
      },
      {
        "key": "b",
        "text": "Avoid asking about tobacco use unless the patient has COPD"
      },
      {
        "key": "c",
        "text": "Recommend e-cigarettes as first-line therapy for every patient"
      },
      {
        "key": "d",
        "text": "Delay tobacco counseling until the patient has already quit"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Ask about tobacco use, advise them to quit, and provide behavioral interventions and FDA-approved pharmacotherapy for nonpregnant adults who smoke\n\nUSPSTF recommends asking all adults about tobacco use, advising them to stop, and providing behavioral interventions and FDA-approved pharmacotherapy for cessation to nonpregnant adults who smoke."
  },
  {
    "id": "W5-Q26",
    "disease": "Tobacco Cessation",
    "concept_tag": "5_a_s_framework",
    "type": "sata",
    "stem": "Which steps are included in the 5 A’s framework for tobacco cessation?",
    "options": [
      {
        "key": "a",
        "text": "Ask"
      },
      {
        "key": "b",
        "text": "Advise"
      },
      {
        "key": "c",
        "text": "Assess"
      },
      {
        "key": "d",
        "text": "Assist"
      },
      {
        "key": "e",
        "text": "Arrange"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nThe 5 A’s are Ask, Advise, Assess, Assist, and Arrange."
  },
  {
    "id": "W5-Q27",
    "disease": "Tobacco Cessation",
    "concept_tag": "ask_step",
    "type": "sba",
    "stem": "Which action best represents the “Ask” step of the 5 A’s?",
    "options": [
      {
        "key": "a",
        "text": "Identify tobacco use at every encounter"
      },
      {
        "key": "b",
        "text": "Start medication without asking about tobacco use"
      },
      {
        "key": "c",
        "text": "Avoid tobacco history if the patient has anxiety"
      },
      {
        "key": "d",
        "text": "Recommend hospitalization for all tobacco users"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Identify tobacco use at every encounter\n\nThe Ask step involves identifying tobacco use routinely, including cigarettes, cigars, smokeless tobacco, and electronic nicotine products."
  },
  {
    "id": "W5-Q28",
    "disease": "Tobacco Cessation",
    "concept_tag": "advise_step",
    "type": "sba",
    "stem": "Which statement best reflects the “Advise” step of tobacco cessation counseling?",
    "options": [
      {
        "key": "a",
        "text": "Provide clear, personalized advice to quit tobacco use"
      },
      {
        "key": "b",
        "text": "Avoid discussing cessation benefits"
      },
      {
        "key": "c",
        "text": "Tell the patient quitting is impossible"
      },
      {
        "key": "d",
        "text": "Recommend e-cigarettes as the only option"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Provide clear, personalized advice to quit tobacco use\n\nThe Advise step involves providing clear, personalized advice that quitting tobacco is important for health."
  },
  {
    "id": "W5-Q29",
    "disease": "Tobacco Cessation",
    "concept_tag": "assess_readiness",
    "type": "sba",
    "stem": "Which question best assesses readiness to quit tobacco use?",
    "options": [
      {
        "key": "a",
        "text": "“Have you considered quitting, and what concerns do you have about quitting?”"
      },
      {
        "key": "b",
        "text": "“What is your favorite flavor of gum?”"
      },
      {
        "key": "c",
        "text": "“Do you want to stop all medications?”"
      },
      {
        "key": "d",
        "text": "“Do you have atrial fibrillation?”"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. “Have you considered quitting, and what concerns do you have about quitting?”\n\nAssessing readiness involves understanding whether the patient has considered quitting, prior quit attempts, barriers, and concerns."
  },
  {
    "id": "W5-Q30",
    "disease": "Tobacco Cessation",
    "concept_tag": "not_ready_to_quit",
    "type": "sba",
    "stem": "For a patient who uses tobacco but is not ready to quit, what is the most appropriate counseling approach?",
    "options": [
      {
        "key": "a",
        "text": "Provide education, motivational interviewing, and address barriers"
      },
      {
        "key": "b",
        "text": "Refuse to discuss tobacco until the patient is ready"
      },
      {
        "key": "c",
        "text": "Force pharmacotherapy immediately"
      },
      {
        "key": "d",
        "text": "Tell the patient tobacco use is harmless"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Provide education, motivational interviewing, and address barriers\n\nFor patients not ready to quit, counseling should focus on education, motivational interviewing, and addressing barriers."
  },
  {
    "id": "W5-Q31",
    "disease": "Tobacco Cessation",
    "concept_tag": "ready_to_quit",
    "type": "sata",
    "stem": "For a patient who is ready to quit tobacco use, which interventions are appropriate?",
    "options": [
      {
        "key": "a",
        "text": "Set a quit date"
      },
      {
        "key": "b",
        "text": "Select pharmacotherapy when appropriate"
      },
      {
        "key": "c",
        "text": "Create a cessation plan"
      },
      {
        "key": "d",
        "text": "Arrange follow-up"
      },
      {
        "key": "e",
        "text": "Tell the patient no treatment options exist"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d"
    ],
    "rationale": "Correct Answer: A, B, C, D\n\nPatients ready to quit should receive practical support, which may include pharmacotherapy, a quit date, a cessation plan, and follow-up."
  },
  {
    "id": "W5-Q32",
    "disease": "Tobacco Cessation",
    "concept_tag": "fda_approved_pharmacotherapy",
    "type": "sata",
    "stem": "Which pharmacotherapy options are FDA-approved for tobacco smoking cessation in adults?",
    "options": [
      {
        "key": "a",
        "text": "Nicotine replacement therapy"
      },
      {
        "key": "b",
        "text": "Bupropion SR"
      },
      {
        "key": "c",
        "text": "Varenicline"
      },
      {
        "key": "d",
        "text": "Warfarin"
      },
      {
        "key": "e",
        "text": "Hydroxyzine"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "rationale": "Correct Answer: A, B, C\n\nFDA-approved tobacco cessation pharmacotherapies include NRT, bupropion SR, and varenicline."
  },
  {
    "id": "W5-Q33",
    "disease": "Tobacco Cessation",
    "concept_tag": "combination_nrt",
    "type": "sba",
    "stem": "Which nicotine replacement therapy strategy has been found more effective than using a single form of NRT?",
    "options": [
      {
        "key": "a",
        "text": "Combining long-acting NRT, such as the patch, with short-acting NRT, such as gum or lozenge"
      },
      {
        "key": "b",
        "text": "Using only nicotine gum once monthly"
      },
      {
        "key": "c",
        "text": "Combining NRT with warfarin"
      },
      {
        "key": "d",
        "text": "Avoiding all behavioral counseling"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Combining long-acting NRT, such as the patch, with short-acting NRT, such as gum or lozenge\n\nCombination NRT, particularly a long-acting plus short-acting form, is more effective than single-form NRT."
  },
  {
    "id": "W5-Q34",
    "disease": "Tobacco Cessation",
    "concept_tag": "varenicline",
    "type": "sba",
    "stem": "Which statement best describes varenicline’s role in tobacco cessation?",
    "options": [
      {
        "key": "a",
        "text": "Varenicline is an FDA-approved cessation medication and appears more effective than NRT or bupropion SR in available evidence"
      },
      {
        "key": "b",
        "text": "Varenicline is an anticoagulant"
      },
      {
        "key": "c",
        "text": "Varenicline is only used for insomnia"
      },
      {
        "key": "d",
        "text": "Varenicline should be used only as an antidepressant"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Varenicline is an FDA-approved cessation medication and appears more effective than NRT or bupropion SR in available evidence\n\nUSPSTF notes varenicline is FDA-approved for cessation and appears more effective than NRT or bupropion SR based on available studies."
  },
  {
    "id": "W5-Q35",
    "disease": "Tobacco Cessation",
    "concept_tag": "e_cigarettes",
    "type": "sba",
    "stem": "What does USPSTF conclude about e-cigarettes for tobacco cessation?",
    "options": [
      {
        "key": "a",
        "text": "Evidence is insufficient to assess the balance of benefits and harms"
      },
      {
        "key": "b",
        "text": "E-cigarettes are first-line cessation therapy for all adults"
      },
      {
        "key": "c",
        "text": "E-cigarettes are preferred over all FDA-approved pharmacotherapy"
      },
      {
        "key": "d",
        "text": "E-cigarettes are required before varenicline can be used"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Evidence is insufficient to assess the balance of benefits and harms\n\nUSPSTF concludes evidence is insufficient to assess the benefits and harms of e-cigarettes for tobacco cessation."
  },
  {
    "id": "W5-Q36",
    "disease": "Tobacco Cessation",
    "concept_tag": "behavioral_health_overlap",
    "type": "ktype",
    "stem": "Which statements are consistent with guideline-based tobacco cessation counseling?\n\nI. Tobacco use should be assessed routinely.\n\nII. Readiness to quit should guide the intervention.\n\nIII. Follow-up should be arranged to support ongoing cessation efforts.",
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
        "text": "I, II, and III"
      }
    ],
    "correct": [
      "d",
      "i",
      "i",
      "a",
      "i"
    ],
    "rationale": "Correct Answer: D. I, II, and III\n\nGuideline-based tobacco care includes routine assessment, readiness assessment, appropriate assistance, and arranged follow-up."
  },
  {
    "id": "W5-Q37",
    "disease": "Integrated — Depression + Anxiety + Tobacco Cessation",
    "concept_tag": "medication_selection_across_comorbid_conditions",
    "type": "sba",
    "stem": "A patient has moderate MDD, clinically significant generalized anxiety symptoms, and tobacco use disorder. Which principle best supports antidepressant selection?",
    "options": [
      {
        "key": "a",
        "text": "Choose a medication strategy that addresses both depression and anxiety while also considering tobacco cessation goals and patient-specific risks"
      },
      {
        "key": "b",
        "text": "Choose bupropion automatically for every patient who smokes, regardless of anxiety severity"
      },
      {
        "key": "c",
        "text": "Avoid CBT because multiple conditions are present"
      },
      {
        "key": "d",
        "text": "Treat tobacco use only after depression and anxiety are permanently cured"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Choose a medication strategy that addresses both depression and anxiety while also considering tobacco cessation goals and patient-specific risks\n\nDepression, anxiety, and tobacco use frequently overlap. Treatment selection should consider all active conditions, symptom burden, medication benefits and risks, and patient readiness."
  },
  {
    "id": "W5-Q38",
    "disease": "Integrated — Depression + Anxiety + Tobacco Cessation",
    "concept_tag": "measurement_based_behavioral_health_care",
    "type": "sata",
    "stem": "Which measures or clinical domains should be reassessed longitudinally when managing depression and anxiety with coexisting tobacco use?",
    "options": [
      {
        "key": "a",
        "text": "PHQ-9"
      },
      {
        "key": "b",
        "text": "GAD-7"
      },
      {
        "key": "c",
        "text": "Medication adherence and adverse effects"
      },
      {
        "key": "d",
        "text": "Tobacco use and readiness to quit"
      },
      {
        "key": "e",
        "text": "Functional improvement"
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ],
    "rationale": "Correct Answer: A, B, C, D, E\n\nLongitudinal care should include depression and anxiety symptom scales, adherence, adverse effects, tobacco status, readiness to quit, and functional improvement."
  },
  {
    "id": "W5-Q39",
    "disease": "Integrated — Depression + Anxiety + Tobacco Cessation",
    "concept_tag": "adherence_before_escalation",
    "type": "sba",
    "stem": "Before concluding that depression or anxiety therapy has failed, what should the pharmacist assess?",
    "options": [
      {
        "key": "a",
        "text": "Medication adherence, dose adequacy, treatment duration, adverse effects, access barriers, and psychotherapy engagement"
      },
      {
        "key": "b",
        "text": "Tablet color only"
      },
      {
        "key": "c",
        "text": "Whether the patient has ever smoked a cigarette"
      },
      {
        "key": "d",
        "text": "Whether the patient should stop all therapy immediately"
      }
    ],
    "correct": [
      "a"
    ],
    "rationale": "Correct Answer: A. Medication adherence, dose adequacy, treatment duration, adverse effects, access barriers, and psychotherapy engagement\n\nInadequate adherence, limited access, adverse effects, and insufficient treatment exposure can mimic treatment failure. These should be evaluated before escalation."
  },
  {
    "id": "W5-Q40",
    "disease": "Integrated — Depression + Anxiety + Tobacco Cessation",
    "concept_tag": "guideline_concordant_patient_education",
    "type": "ktype",
    "stem": "Which counseling points are appropriate for a patient receiving guideline-based care for depression, anxiety, and tobacco use disorder?\n\nI. Explain that remission, not just partial symptom improvement, is the goal of depression treatment.\n\nII. Explain that CBT may be used alone or with medication depending on severity and patient preference.\n\nIII. Explain that tobacco cessation support can include behavioral counseling, readiness assessment, follow-up, and pharmacotherapy when appropriate.",
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
        "text": "I, II, and III"
      }
    ],
    "correct": [
      "d",
      "i",
      "i",
      "a",
      "i"
    ],
    "rationale": "Correct Answer: D. I, II, and III\n\nAll three statements align with guideline-based behavioral health and tobacco cessation care. Depression treatment targets remission, CBT is a guideline-supported option, and tobacco cessation should include counseling, readiness assessment, follow-up, and pharmacotherapy when appropriate."
  }
];
