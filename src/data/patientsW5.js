import { makeCase } from './caseFactory.js'

export const W5_CASES = [
  {
    "id": "w5-sarah_m-tue",
    "PATIENT": {
      "name": "Sarah Mitchell",
      "age": 54,
      "sex": "female",
      "ethnicity": "White",
      "mrn": "W5-10222",
      "setting": "Ambulatory care clinic",
      "dob": "05/14/1972"
    },
    "ENCOUNTER": {
      "day": "Tuesday",
      "week": "Week 5",
      "type": "Initial Ambulatory Behavioral Health Clinic Visit",
      "chiefConcern": "I haven't felt like myself in months. Work has been so stressful, and I just feel completely exhausted, anxious, and down.",
      "snapshotSummary": "Sarah is a 54-year-old female elementary school teacher referred by her PCP for an initial behavioral health evaluation. Newly diagnosed with Major Depressive Disorder (MDD, PHQ-9 = 13) and Generalized Anxiety Disorder (GAD, GAD-7 = 8). Also has Tobacco Use Disorder (smokes 5 cigarettes/day for stress, contemplative stage). Needs initial single-agent SSRI pharmacotherapy.",
      "difficulty": "Foundational",
      "difficultyTone": "teal",
      "diseaseStates": [
        "MDD",
        "GAD",
        "Tobacco Use Disorder"
      ],
      "learningObjectives": [
        "Interpret PHQ-9 and GAD-7 assessment scores",
        "Select first-line dual-purpose SSRI therapy for comorbid MDD and GAD",
        "Assess readiness to quit tobacco using motivational interviewing"
      ],
      "visitDate": "09/09/2026"
    },
    "VITALS": {
      "bp": "118/74 mmHg",
      "bpRepeat": "116/74 mmHg",
      "hr": "76 bpm",
      "rr": "16 breaths/min",
      "temp": "98.2Â°F",
      "weight": "152 lbs",
      "height": "65 inches",
      "bmi": "25.3 kg/mÂ²",
      "flags": {
        "bmi": "warn"
      },
      "extras": [],
      "vitalsTime": "09/09/2026 09:14"
    },
    "LABS": [
      {
        "label": "Sodium",
        "value": "139",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "Potassium",
        "value": "4.2",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "Chloride",
        "value": "101",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "Bicarbonate",
        "value": "24",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "BUN",
        "value": "12",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "Serum Creatinine",
        "value": "0.8",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "eGFR",
        "value": ">90",
        "unit": "mL/min/1.73mÂ²",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "Glucose",
        "value": "92",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "TSH",
        "value": "2.1",
        "unit": "mIU/L",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "AST",
        "value": "19",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "ALT",
        "value": "18",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "WBC",
        "value": "6.2",
        "unit": "x10Â³/Î¼L",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "Hgb",
        "value": "13.4",
        "unit": "g/dL",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      },
      {
        "label": "Plt",
        "value": "255",
        "unit": "x10Â³/Î¼L",
        "flag": "normal",
        "labDate": "09/09/2026 07:50"
      }
    ],
    "ALERTS": [
      {
        "level": "warn",
        "text": "Comorbid Moderate Major Depressive Disorder (PHQ-9 = 13) and Mild Generalized Anxiety Disorder (GAD-7 = 8). First-line treatment with a single-agent SSRI (Sertraline 25 mg daily titrating to 50 mg after 7 days) addresses both conditions per ACP and VA/DoD guidelines."
      },
      {
        "level": "info",
        "text": "Patient is in the contemplative stage of change for tobacco cessation (smokes 5 cigarettes/day for stress management, no prior quit attempts, not ready to set a quit date today). Motivational interviewing recommended per USPSTF Grade A recommendation."
      }
    ],
    "PROBLEMS": [
      {
        "name": "1. Major Depressive Disorder (MDD) â€” Newly Diagnosed, Moderate Severity",
        "detail": "PHQ-9 = 13 (Moderate). Symptom duration 4-5 months with low mood, anhedonia, reduced motivation for hobbies and social activities, fatigue, impaired concentration, and functional impairment. Treatment-naÃ¯ve.",
        "flag": "high"
      },
      {
        "name": "2. Generalized Anxiety Disorder (GAD) â€” Newly Diagnosed, Mild Severity",
        "detail": "GAD-7 = 8 (Mild). Persistent worry, racing thoughts, restlessness, and sleep disruption linked specifically to work performance and meeting expectations. Treatment-naÃ¯ve.",
        "flag": "high"
      },
      {
        "name": "3. Tobacco Use Disorder â€” Active, Contemplative Stage",
        "detail": "Current smoker, 5 cigarettes/day (8-year history, 2 pack-years) used for stress management. No prior tobacco quit attempts and no prior periods of abstinence. Contemplative stage; not ready to set a quit date today.",
        "flag": "warn"
      },
      {
        "name": "4. Insomnia â€” Secondary to MDD and GAD",
        "detail": "Restless, insufficient sleep (5-6 hours per night), unable to get restful or adequate sleep despite feeling exhausted. Secondary to psychiatric illness.",
        "flag": "warn"
      },
      {
        "name": "5. Behavioral Health Knowledge Deficit â€” Active",
        "detail": "Patient expresses anxiety regarding antidepressant weight gain, personality changes, and medication dependence, but is open to treatment with explanation.",
        "flag": "info"
      }
    ],
    "ALLERGIES": [
      {
        "substance": "No known drug allergies",
        "reaction": "—"
      }
    ],
    "MEDICATIONS": [
      {
        "name": "Daily multivitamin",
        "dose": "1 tablet",
        "route": "by mouth",
        "freq": "daily",
        "indication": "Nutritional supplement",
        "notes": "OTC daily multivitamin."
      },
      {
        "name": "Ibuprofen",
        "dose": "200 mg",
        "route": "by mouth",
        "freq": "PRN",
        "indication": "Occasional tension headache",
        "notes": "Takes 1-2 tablets PRN rarely. Confirms no prescription medications taken."
      }
    ],
    "IMMUNIZATIONS": [
      {
        "name": "Influenza",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "COVID-19",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "Tdap",
        "status": "Up to date (received)",
        "flag": "normal"
      }
    ],
    "SUBJECTIVE_DOCUMENTED": [
      {
        "label": "HPI",
        "value": "54-year-old female full-time elementary school teacher referred by her Primary Care Physician (PCP) for an initial evaluation at the ambulatory behavioral health clinic regarding worsening symptoms over the past 4 to 5 months. Patient attributes initial symptom onset to work stress and burnout. Reports persistent low mood occurring most days, emotional exhaustion, profound fatigue, anhedonia (reduced interest and pleasure in previously enjoyed activities, specifically stopping her regular reading and weekend hiking), and reduced motivation for hobbies and social activities. Reports restless, insufficient sleep (5 to 6 hours per night), unable to get restful or adequate sleep despite feeling exhausted, with difficulty turning off thoughts after work. Reports difficulty concentrating at work (struggling to complete lesson plans, taking significantly longer to grade papers), and noticeable occupational functioning impairment (feeling overwhelmed by daily teaching duties). Reports persistent anxiety, difficulty controlling anxious thoughts, racing thoughts after work, with anxiety linked specifically to work performance and meeting expectations. Reports interpersonal relationship impact (feeling distant from her husband, who encouraged today's evaluation). Confirms treatment-naÃ¯ve status for psychiatric pharmacotherapy (no prior antidepressant use) and treatment-naÃ¯ve status for psychotherapy (no prior counseling)."
      },
      {
        "label": "Review of Systems (ROS) & Safety Assessment",
        "value": "Psychiatric ROS & Safety: Patient explicitly denies suicidal ideation (SI), denies suicide plan, and denies prior suicide attempts. Overall suicide risk assessed as low. Patient explicitly denies homicidal ideation (HI), denies self-harm behaviors, denies panic attacks, denies mania or hypomania, denies hallucinations, and denies delusions. Denies prior psychiatric hospitalizations."
      },
      {
        "label": "Scores & Screening Tools",
        "value": "PHQ-9 score: 13, interpreted as Moderate Depression. GAD-7 score: 8, interpreted as Mild Anxiety."
      },
      {
        "label": "Past Medical History",
        "value": "Major Depressive Disorder (MDD, newly diagnosed), Generalized Anxiety Disorder (GAD, newly diagnosed), Tobacco Use Disorder (active). Confirms no past surgical history (denies prior surgeries). Denies prior psychiatric hospitalizations, prior antidepressant use, or prior psychotherapy."
      },
      {
        "label": "Social History",
        "value": "Full-time elementary school teacher. Marital status & living situation: single (lives alone in suburban house; maintains supportive relationship with husband who encouraged evaluation). Current smoker (5 cigarettes per day for 8 years = 2 pack-year smoking history), citing stress management as the primary reason for smoking. Reports no previous tobacco quit attempts and no prior periods of tobacco abstinence. Contemplative stage of change regarding tobacco cessation: willing to quit eventually but not ready to set a quit date today. Drinks alcohol: 1-2 beverages weekly (1 glass of wine 1-2 times per week). Denies illicit drug use. Exercises: occasional walking, reduced secondary to fatigue and motivation."
      },
      {
        "label": "Family History",
        "value": "Mother: history of Major Depressive Disorder (MDD), successfully treated with Sertraline (Zoloft). Father: history of hypertension (HTN). Maternal grandmother: history of Generalized Anxiety Disorder (GAD). Family history explicitly linked to patient's genetic risk and medication response rationale."
      },
      {
        "label": "OTC & Allergies",
        "value": "Daily multivitamin 1 tab PO daily. Ibuprofen 200 mg PO PRN (takes 1â€“2 tablets PRN for occasional tension headaches). Confirms absence of any prescription medications. No known drug allergies (NKDA)."
      },
      {
        "label": "Patient Concerns & Education Needs",
        "value": "Patient expresses specific psychosocial concerns regarding antidepressant therapy: fears potential weight gain, fears personality changes, and fears medication dependence. Patient explicitly states she is open to treatment once expectations and clinical rationale are explained."
      }
    ],
    "OBJECTIVE_EXTRA": [
      {
        "label": "Objective Examination & Diagnostic Panel",
        "value": "Vital Signs: BP 118/74 mmHg (repeat 116/74 mmHg), HR 76 bpm, RR 16 breaths/min, Temp 98.2Â°F, Weight 152 lbs (69 kg), Height 65 inches (5 ft 5 in), BMI 25.3 kg/mÂ² (classified as overweight / borderline, 25.0-29.9 kg/mÂ²). All vital signs are within normal limits. Laboratory Findings: Sodium 139 mEq/L, Potassium 4.2 mEq/L, Chloride 101 mEq/L, Bicarbonate 24 mEq/L, BUN 12 mg/dL, Serum Creatinine 0.8 mg/dL, eGFR >90 mL/min/1.73mÂ², Glucose 92 mg/dL, TSH 2.1 mIU/L (interpreted as within normal limits), AST 19 U/L, ALT 18 U/L, WBC 6.2 x10Â³/Î¼L, Hgb 13.4 g/dL, Plt 255 x10Â³/Î¼L. Overall metabolic, hepatic, renal, hematologic, and thyroid panels are completely within normal limits (unremarkable), explicitly demonstrating that an untreated medical etiology is less likely for her mood and anxiety symptoms. Screening Scores: PHQ-9 = 13 (Moderate Depression), GAD-7 = 8 (Mild Anxiety). Suicide Risk Assessment: Low risk, explicit denial of SI, denial of suicide plan, and denial of prior suicide attempts."
      }
    ],
    "INTERVIEW_FIELDS": [
      {
        "key": "tobacco",
        "label": "Tobacco Cessation Readiness",
        "placeholder": "Assess readiness to quit and stress triggers"
      }
    ],
    "INTERVIEW_KNOWLEDGE": [
      {
        "id": "w5-sarah_m-tue_allerg",
        "topic": "Medication allergies",
        "field": "allergies",
        "keywords": [
          "allergy",
          "allergic",
          "allergies",
          "penicillin",
          "sulfa",
          "codeine",
          "reaction",
          "rash",
          "hives"
        ],
        "response": "I do not have any known drug or food allergies."
      },
      {
        "id": "w5-sarah_m-tue_otc",
        "topic": "OTC / Supplements",
        "field": "otc",
        "keywords": [
          "otc",
          "over the counter",
          "supplement",
          "herb",
          "vitamin",
          "ibuprofen",
          "tylenol",
          "multivitamin"
        ],
        "response": "I take a daily multivitamin. I also take over-the-counter Ibuprofen 200 mg occasionally for headachesâ€”maybe 1 or 2 pills a month. I don't take any prescription medications."
      },
      {
        "id": "w5-sarah_m-tue_alc",
        "topic": "Alcohol use",
        "field": "alcohol",
        "keywords": [
          "alcohol",
          "drink",
          "beer",
          "wine",
          "liquor"
        ],
        "response": "I drink 1-2 alcoholic beverages weeklyâ€”about 1 glass of wine once or twice a week."
      },
      {
        "id": "w5-sarah_m-tue_tobacco",
        "topic": "Tobacco use",
        "field": "tobacco",
        "keywords": [
          "tobacco",
          "smoke",
          "smoking",
          "cigarette",
          "cigar",
          "vape",
          "vaping",
          "nicotine"
        ],
        "response": "I smoke about 5 cigarettes a day and have for about 8 years. It helps me manage stress. I have never tried to quit before (no previous quit attempts). I know I should quit eventually, but with all the stress at work right now, I'm not ready to set a quit date today."
      },
      {
        "id": "w5-sarah_m-tue_illicit",
        "topic": "Illicit drug use",
        "field": "illicit",
        "keywords": [
          "illicit",
          "drug",
          "marijuana",
          "cocaine",
          "street"
        ],
        "response": "I do not use any illicit drugs or street substances."
      },
      {
        "id": "w5-sarah_m-tue_fh",
        "topic": "Family history",
        "field": "familyHistory",
        "keywords": [
          "family history",
          "father",
          "mother",
          "parents",
          "brother",
          "sister",
          "sibling"
        ],
        "response": "My mother had major depression and did really well on Sertraline (Zoloft). My father has high blood pressure, and my maternal grandmother had anxiety."
      },
      {
        "id": "w5-sarah_m-tue_social",
        "topic": "Social history",
        "field": "socialHistory",
        "keywords": [
          "live",
          "marital",
          "married",
          "single",
          "job",
          "work",
          "employ",
          "living",
          "husband",
          "teacher",
          "school",
          "house",
          "alone"
        ],
        "response": "I'm a full-time elementary school teacher. Marital status: single (lives alone in a suburban house; maintains supportive relationship with my husband who encouraged me to come to clinic today)."
      },
      {
        "id": "w5-sarah_m-tue_safety",
        "topic": "Safety & ROS",
        "field": "safety",
        "keywords": [
          "suicide",
          "suicidal",
          "kill",
          "harm",
          "die",
          "end it",
          "panic",
          "hallucination",
          "delusion",
          "mania"
        ],
        "response": "I do not have any thoughts of ending my life or hurting myself, and I've never tried to harm myself. I don't have panic attacks, hallucinations, or manic episodes. I've never been hospitalized for mental health."
      },
      {
        "id": "w5a_concerns",
        "topic": "Medication Concerns",
        "field": "concerns",
        "keywords": [
          "fear",
          "weight",
          "personality",
          "addicted",
          "dependence",
          "change me"
        ],
        "response": "I'm open to taking medication if it helps, but I'm worried: will it make me gain weight, change my personality, or make me dependent on it? I'd like to understand what to expect."
      }
    ],
    "ASSESSMENT_CARDS": [
      {
        "id": "w5a_a1",
        "title": "1. Major Depressive Disorder (MDD) â€” Newly Diagnosed, Moderate Severity",
        "icon": "Brain",
        "color": "13314f",
        "questions": [
          {
            "key": "q1",
            "q": "What is the diagnostic evaluation, severity, and treatment rationale for MDD?",
            "defaultAnswer": "Major Depressive Disorder (MDD), newly diagnosed, moderate severity (PHQ-9 = 13). Symptom duration 4 to 5 months, characterized by persistent low mood, anhedonia (loss of interest in reading and hiking), reduced motivation for hobbies and social activities, emotional exhaustion, profound fatigue, restless insufficient sleep, impaired concentration, and significant occupational and interpersonal functioning impairment. Bipolar disorder, psychosis, and substance-induced mood disorder are explicitly ruled out based on history and ROS. Normal lab findings (TSH 2.1 mIU/L, CMP, CBC) support that an untreated medical etiology is less likely. Single-agent SSRI therapy with Sertraline is strongly indicated per ACP Living Clinical Guidelines and VA/DoD MDD Guidelines. Remission (target PHQ-9 <5), not merely partial improvement, is the primary treatment goal. Rationale for Sertraline: mother's successful treatment response to Sertraline provides strong genetic/familial response rationale; dual efficacy for comorbid GAD; favorable safety and tolerability profile."
          }
        ]
      },
      {
        "id": "w5a_a2",
        "title": "2. Generalized Anxiety Disorder (GAD) â€” Newly Diagnosed, Mild Severity",
        "icon": "Activity",
        "color": "dc2626",
        "questions": [
          {
            "key": "q2",
            "q": "What is the diagnostic evaluation, severity, and treatment strategy for GAD?",
            "defaultAnswer": "Generalized Anxiety Disorder (GAD), newly diagnosed, mild severity (GAD-7 = 8). Characterized by persistent worry, difficulty controlling anxious thoughts, racing thoughts after work, restlessness, and sleep disruption linked specifically to work performance and meeting expectations. Anxiety symptoms are closely intertwined with her depressive syndrome burden, but are characterized as milder than depression. Single-agent SSRI therapy with Sertraline is indicated per VA/DoD Anxiety Guidelines and JAMA 2026 Review (SSRIs/SNRIs first-line for GAD; paroxetine, escitalopram, duloxetine, venlafaxine also acceptable; benzodiazepines not recommended). A single SSRI agent effectively treats both MDD and GAD without needing polypharmacy. Long-term symptom control and functional recovery are primary goals."
          }
        ]
      },
      {
        "id": "w5a_a3",
        "title": "3. Tobacco Use Disorder â€” Active, Contemplative Stage",
        "icon": "Flame",
        "color": "d97706",
        "questions": [
          {
            "key": "q3",
            "q": "What is the tobacco use status and behavioral counseling approach?",
            "defaultAnswer": "Tobacco Use Disorder, active nicotine dependence. Smokes 5 cigarettes per day for 8 years (2 pack-year history), citing stress relief and management as the primary reason for smoking. Patient reports no previous tobacco quit attempts and no prior periods of tobacco abstinence. Patient is in the contemplative stage of change: acknowledges health benefits and expresses desire to quit eventually, but is not ready to establish a quit date today due to current work stress. Per USPSTF Grade A recommendation and VA/DoD Tobacco Cessation CPG 2026, behavioral counseling using motivational interviewing is the recommended initial approach. Smoking is linked to underlying anxiety symptoms. Cessation pharmacotherapy (varenicline, bupropion SR, NRT) is declined/deferred at this time since patient is not yet ready to quit; readiness will be reassessed at future visits."
          }
        ]
      },
      {
        "id": "w5a_a4",
        "title": "4. Insomnia â€” Secondary to MDD and GAD",
        "icon": "Moon",
        "color": "6366f1",
        "questions": [
          {
            "key": "q4",
            "q": "What is the etiology and management strategy for insomnia?",
            "defaultAnswer": "Insomnia (restless, insufficient sleep, 5â€“6 hours per night, unable to get restful sleep despite feeling exhausted), classified as secondary to underlying MDD and GAD. Sleep-specific pharmacotherapy is NOT indicated. Successful treatment of depression and anxiety with SSRI therapy and CBT is expected to improve sleep quality. Non-pharmacologic sleep hygiene recommendations provided: maintain a consistent sleep schedule, limit caffeine intake, avoid screens before bed, and practice relaxation techniques. Sleep quality will be monitored as psychiatric conditions improve."
          }
        ]
      },
      {
        "id": "w5a_a5",
        "title": "5. Behavioral Health Knowledge Deficit â€” Active",
        "icon": "BookOpen",
        "color": "0891b2",
        "questions": [
          {
            "key": "q5",
            "q": "What knowledge gaps exist and how do they impact engagement?",
            "defaultAnswer": "Behavioral Health Knowledge Deficit identified as an active problem. Patient displays limited understanding of MDD, GAD, treatment expectations, and antidepressant medications. Harbors specific concerns regarding medication dependence, core personality changes, and weight gain. Patient is open to treatment once clear evidence-based explanations are provided. Education regarding medication onset (2â€“6 weeks), adherence importance, non-addictive nature of SSRIs, and treatment goals will improve patient engagement, confidence, and long-term adherence."
          }
        ]
      }
    ],
    "PLAN_SECTIONS": [
      {
        "id": "w5a_p1",
        "title": "1. Major Depressive Disorder (MDD) Pharmacotherapy & CBT Plan",
        "options": [
          {
            "key": "o1",
            "label": "Initiate Sertraline 25 mg PO daily for 7 days, then increase to target starting dose of 50 mg PO daily (acceptable SSRI alternatives per ACP/VA-DoD guidelines: escitalopram 10 mg daily, fluoxetine 20 mg daily, citalopram 20 mg daily; Sertraline preferred given mother's positive response, dual GAD efficacy, and favorable safety profile)",
            "correct": true
          },
          {
            "key": "o2",
            "label": "Refer patient for Cognitive Behavioral Therapy (CBT) for evidence-based psychotherapy combination treatment",
            "correct": true
          },
          {
            "key": "o3",
            "label": "Educate patient on expected 2 to 6 week onset of therapeutic benefit, importance of strict daily adherence, expected treatment duration (â‰¥6 to 9 months post-remission per ACP and VA/DoD guidelines), and target goal of full remission (PHQ-9 <5)",
            "correct": true
          },
          {
            "key": "o4",
            "label": "Discuss potential mild, transient adverse effects (nausea, headache, insomnia, GI upset) and instruct to take with food",
            "correct": true
          }
        ]
      },
      {
        "id": "w5a_p2",
        "title": "2. Generalized Anxiety Disorder (GAD) & Sleep Management Plan",
        "options": [
          {
            "key": "o5",
            "label": "Utilize single-agent Sertraline to treat both MDD and GAD (SSRIs/SNRIs first-line per JAMA 2026 Review; acceptable: escitalopram, duloxetine, venlafaxine; avoid long-term benzodiazepines)",
            "correct": true
          },
          {
            "key": "o6",
            "label": "Provide counseling on stress management techniques, relaxation techniques, sleep hygiene (consistent sleep schedule, limit afternoon caffeine, avoid screens before bed), and counsel on the evidence-based benefits of Cognitive Behavioral Therapy (CBT) specifically for anxiety treatment",
            "correct": true
          },
          {
            "key": "o7",
            "label": "Monitor for initial transient anxiety worsening during first week of SSRI initiation; confirm sleep-specific pharmacotherapy is not indicated",
            "correct": true
          }
        ]
      },
      {
        "id": "w5a_p3",
        "title": "3. Tobacco Cessation Counseling Plan",
        "options": [
          {
            "key": "o8",
            "label": "Provide behavioral counseling using motivational interviewing per USPSTF Grade A recommendation for tobacco cessation",
            "correct": true
          },
          {
            "key": "o9",
            "label": "Discuss relationship between smoking and stress management; review health benefits of complete cessation; acknowledge no previous quit attempts reported; connect tobacco cessation efforts directly to broader long-term behavioral health goals and stress management",
            "correct": true
          },
          {
            "key": "o10",
            "label": "Discuss future cessation pharmacotherapy options (NRT patch/gum, bupropion SR, varenicline per VA/DoD Tobacco CPG 2026) for when patient is ready to quit; reassess readiness at next visit",
            "correct": true
          }
        ]
      },
      {
        "id": "w5a_p4",
        "title": "4. Patient Education & Psychosocial Counseling Plan",
        "options": [
          {
            "key": "o11",
            "label": "Provide psychoeducation on MDD and GAD, explaining PHQ-9 (13 = Moderate) and GAD-7 (8 = Mild) score interpretations",
            "correct": true
          },
          {
            "key": "o12",
            "label": "Address patient medication concerns directly: reassure that SSRIs are non-addictive (no dependence), do not alter core personality (restore baseline mood), and have minimal weight gain risk",
            "correct": true
          },
          {
            "key": "o13",
            "label": "Educate patient explicitly on the critical importance of follow-up, reinforcing that regular visits are needed to titrate medication and monitor progress to improve treatment engagement and outcomes",
            "correct": true
          }
        ]
      },
      {
        "id": "w5a_p5",
        "title": "5. Monitoring & Follow-Up Plan",
        "options": [
          {
            "key": "o14",
            "label": "Schedule follow-up visit in approximately 3 months (with initial 4-week check-in specified for medication titration and tolerability monitoring)",
            "correct": true
          },
          {
            "key": "o15",
            "label": "Repeat PHQ-9 and GAD-7 assessment scales at follow-up visit to quantify progress toward remission goal",
            "correct": true
          },
          {
            "key": "o16",
            "label": "Assess need for dose adjustment at follow-up based on symptom response; monitor suicidal ideation, mood, anxiety, sleep quality, occupational functioning, interpersonal functioning, and tobacco cessation readiness",
            "correct": true
          },
          {
            "key": "o17",
            "label": "Confirm that future visits will focus on achieving full symptom remission and optimizing antidepressant therapy, and that continued behavioral health counseling will continue longitudinally",
            "correct": true
          }
        ]
      }
    ],
    "PLAN_FREETEXT": [
      {
        "key": "monitoring",
        "label": "Monitoring plan",
        "placeholder": "Labs, vitals, and follow-up intervals…"
      },
      {
        "key": "followUp",
        "label": "Follow-up",
        "placeholder": "When should the patient return and why?"
      }
    ],
    "GUIDING_QUESTIONS": [
      "What clinical findings support a diagnosis of Major Depressive Disorder?",
      "Why is Sertraline the preferred first-line agent over Bupropion in this patient?",
      "How does mother's positive Sertraline response guide pharmacotherapy choice?",
      "What role does Cognitive Behavioral Therapy (CBT) play alongside SSRI therapy?",
      "How should tobacco cessation be addressed in a patient who is not ready to quit today?"
    ],
    "COUNSELING": [
      {
        "id": "c1",
        "title": "Sertraline Initiation & Expectations",
        "body": [
          "Antidepressants like Sertraline take 2 to 6 weeks to show full therapeutic benefit. Sertraline is non-addictive, does not alter your core personality, and has a very low risk of weight gain. In the first week, mild transient nausea may occur, but taking it with food helps. We will start at 25 mg daily for 7 days, then increase to 50 mg daily."
        ]
      }
    ],
    "PRECEPTOR": {
      "keyIssues": [],
      "assessment": [],
      "plan": [],
      "pearls": [],
      "mistakes": [],
      "followupQuestions": [],
      "checklist": []
    },
    "INTERVIEW_SYSTEM_PROMPT": ""
  },
  {
    "id": "w5-sarah_m-wed",
    "PATIENT": {
      "name": "Sarah Mitchell",
      "age": 54,
      "sex": "female",
      "ethnicity": "White",
      "mrn": "W5-10222",
      "setting": "Ambulatory care clinic",
      "dob": "05/14/1972"
    },
    "ENCOUNTER": {
      "day": "Wednesday",
      "week": "Week 5",
      "type": "4-Week Follow-Up Ambulatory Behavioral Health Clinic Visit",
      "chiefConcern": "I'm feeling somewhat better and sleeping a bit more, but I still feel tired and lack motivation.",
      "snapshotSummary": "Sarah presents for a 4-week follow-up after starting Sertraline 50 mg PO daily and attending CBT. Demonstrates partial improvement (PHQ-9 improved 13 to 8, GAD-7 8 to 5; reduced smoking 5 to 2 cigs/day). However, residual fatigue and low motivation persist. Sertraline dose escalation to 100 mg daily indicated to target full remission.",
      "difficulty": "Core",
      "difficultyTone": "teal",
      "diseaseStates": [
        "MDD",
        "GAD",
        "Tobacco Use Disorder"
      ],
      "learningObjectives": [
        "Evaluate treatment response using PHQ-9 and GAD-7 trends",
        "Recognize partial response vs full remission",
        "Escalate SSRI dose to 100 mg daily per guidelines"
      ],
      "visitDate": "10/07/2026"
    },
    "VITALS": {
      "bp": "116/72 mmHg",
      "bpRepeat": "114/70 mmHg",
      "hr": "72 bpm",
      "rr": "16 breaths/min",
      "temp": "98.1Â°F",
      "weight": "151 lbs",
      "height": "65 inches",
      "bmi": "25.1 kg/mÂ²",
      "flags": {
        "bmi": "warn"
      },
      "extras": [],
      "vitalsTime": "10/07/2026 09:14"
    },
    "LABS": [
      {
        "label": "Sodium",
        "value": "139",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "10/07/2026 07:50"
      },
      {
        "label": "Potassium",
        "value": "4.2",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "10/07/2026 07:50"
      },
      {
        "label": "BUN",
        "value": "12",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/07/2026 07:50"
      },
      {
        "label": "Serum Creatinine",
        "value": "0.8",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/07/2026 07:50"
      },
      {
        "label": "eGFR",
        "value": ">90",
        "unit": "mL/min/1.73mÂ²",
        "flag": "normal",
        "labDate": "10/07/2026 07:50"
      },
      {
        "label": "Glucose",
        "value": "91",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/07/2026 07:50"
      },
      {
        "label": "AST",
        "value": "20",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "10/07/2026 07:50"
      },
      {
        "label": "ALT",
        "value": "18",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "10/07/2026 07:50"
      }
    ],
    "ALERTS": [
      {
        "level": "warn",
        "text": "Partial response achieved on Sertraline 50 mg PO daily (PHQ-9 improved from 13 to 8, ~38.5% reduction; GAD-7 improved from 8 to 5). Patient is NOT in remission (PHQ-9 <=4 / <5). Guideline-concordant dose escalation to Sertraline 100 mg PO daily is indicated per ACP and VA/DoD MDD guidelines."
      }
    ],
    "PROBLEMS": [
      {
        "name": "1. Major Depressive Disorder (MDD) â€” Improved, Partial Response (Not in Remission)",
        "detail": "PHQ-9 improved from 13 (initial) to 8 (current), ~38.5% reduction. Clinically meaningful response, but residual fatigue and low motivation persist. Increase Sertraline to 100 mg daily to target remission.",
        "flag": "high"
      },
      {
        "name": "2. Generalized Anxiety Disorder (GAD) â€” Significantly Improved, Near Remission",
        "detail": "GAD-7 improved from 8 (initial) to 5 (current, mild anxiety). Less excessive worrying; improved coping. Sertraline dose escalation for MDD will optimize GAD control.",
        "flag": "normal"
      },
      {
        "name": "3. Tobacco Use Disorder â€” Improving, Contemplative Stage",
        "detail": "Reduced smoking from 5 to 2 cigarettes/day, attributed to stress reduction and CBT coping skills. Meaningful progress; not yet ready to set a quit date.",
        "flag": "warn"
      },
      {
        "name": "4. Behavioral Health Knowledge Deficit â€” Improving",
        "detail": "Patient verbalizes treatment as a process; needs education on response vs remission distinction and dose escalation rationale.",
        "flag": "info"
      }
    ],
    "ALLERGIES": [
      {
        "substance": "No known drug allergies",
        "reaction": "—"
      }
    ],
    "MEDICATIONS": [
      {
        "name": "Sertraline",
        "dose": "50 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "MDD / GAD",
        "notes": "Target starting dose â€” missed one dose in past month (otherwise excellent adherence), well tolerated (initial nausea resolved). Increase to 100 mg daily."
      },
      {
        "name": "Daily multivitamin",
        "dose": "1 tablet",
        "route": "by mouth",
        "freq": "daily",
        "indication": "Nutritional supplement",
        "notes": "OTC daily multivitamin."
      },
      {
        "name": "Ibuprofen",
        "dose": "200 mg",
        "route": "by mouth",
        "freq": "PRN",
        "indication": "Occasional tension headache",
        "notes": "Takes 1-2 tablets PRN rarely."
      }
    ],
    "IMMUNIZATIONS": [
      {
        "name": "Influenza",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "COVID-19",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "Tdap",
        "status": "Up to date (received)",
        "flag": "normal"
      }
    ],
    "SUBJECTIVE_DOCUMENTED": [
      {
        "label": "HPI",
        "value": "54-year-old female presents for a 4-week follow-up visit at the ambulatory behavioral health clinic to evaluate treatment response following initiation of Sertraline (titrated from 25 mg daily to 50 mg daily) and CBT referral. Patient attributes overall symptom improvement directly to the combination of Sertraline therapy and CBT attendance together, noting 'more good days than bad days.' Reports improved energy, improved concentration, improved sleep (falling asleep more easily, sleeping 6 to 7 hours per night), and improved enjoyment of activities (resumed regular reading, went hiking once with her husband). Attended 4 CBT sessions and reports CBT has been extremely beneficial for learning to challenge negative thoughts and manage stress. However, patient reports residual depressive symptoms: persistent occasional fatigue, low motivation, incomplete return to baseline functioning, and intermittent work-related stress. Reports anxiety symptoms are significantly improved: less worrying, no longer feeling overwhelmed by worry, and fewer racing thoughts. Reports excellent adherence (missed one dose in past month). Sertraline has been well tolerated; initial mild nausea completely resolved after the first week. Reduced tobacco consumption from 5 to 2 cigarettes per day, attributing reduction directly to decreased stress and improved coping strategies learned in CBT."
      },
      {
        "label": "Review of Systems (ROS) & Safety Assessment",
        "value": "Psychiatric ROS & Safety: Patient explicitly denies suicidal ideation (SI), denies suicide plan, denies prior suicide attempts, and denies self-harm behaviors. Overall suicide risk assessed as low. Explicitly denies homicidal ideation (HI), panic attacks, mania, hypomania, hallucinations, and delusions."
      },
      {
        "label": "Scores & Screening Trends",
        "value": "Initial PHQ-9: 13 (Moderate). Current PHQ-9: 8 (Mild), representing a 5-point drop and ~38.5% reduction (clinically meaningful partial response, but NOT in remission; remission threshold PHQ-9 <=4 / <5). Initial GAD-7: 8 (Mild). Current GAD-7: 5 (Mild), threshold for mild anxiety maintained."
      },
      {
        "label": "Past Medical History",
        "value": "Major Depressive Disorder (MDD, improved, partial response), Generalized Anxiety Disorder (GAD, significantly improved, near remission), Tobacco Use Disorder (improving, reduced 5 to 2 cigs/day). Confirms no past surgical history. Denies prior psychiatric hospitalizations."
      },
      {
        "label": "Social History",
        "value": "Full-time elementary school teacher. Marital status & living situation: single (lives alone in suburban house; maintains supportive relationship with husband who notes positive mood changes). Reduced tobacco use from 5 to 2 cigarettes per day (previously 5 cigs/day), attributed to stress reduction and CBT coping skills. Contemplative stage of change; not yet ready to set a quit date today. Drinks alcohol: 1-2 alcoholic beverages weekly. Denies illicit drug use. Exercises: walking several times weekly and resumed occasional hiking."
      },
      {
        "label": "Family History",
        "value": "Mother: MDD successfully treated with Sertraline. Father: HTN. Maternal grandmother: GAD."
      },
      {
        "label": "OTC & Allergies",
        "value": "Daily multivitamin 1 tab PO daily. Ibuprofen 200 mg PO PRN for occasional headaches. NKDA."
      },
      {
        "label": "Patient Education & Goals",
        "value": "Patient verbalizes treatment as a process and acknowledges symptom progress. Expresses goal of continued mood and symptom improvement toward full remission, continued anxiety reduction, ongoing CBT participation, and eventual tobacco cessation."
      }
    ],
    "OBJECTIVE_EXTRA": [
      {
        "label": "Objective Examination & Clinical Trends",
        "value": "Vital Signs: BP 116/72 mmHg (repeat 114/70 mmHg), HR 72 bpm, RR 16 breaths/min, Temp 98.1Â°F, Weight 151 lbs (68.5 kg), Height 65 inches (5 ft 5 in), BMI 25.1 kg/mÂ² (borderline overweight). All vital signs are within normal limits with no acute safety concerns. Laboratory Data: Sodium 139 mEq/L, Potassium 4.2 mEq/L, BUN 12 mg/dL, Serum Creatinine 0.8 mg/dL, eGFR >90 mL/min/1.73mÂ², Glucose 91 mg/dL, AST 20 U/L, ALT 18 U/L. Comprehensive metabolic, renal, and hepatic panels demonstrate no clinically significant abnormalities, confirming safety for Sertraline dose escalation. Longitudinal Assessment Score Trends: PHQ-9 baseline 13 -> current 8 (~38.5% reduction, mild depression). GAD-7 baseline 8 -> current 5 (mild anxiety). Suicide Risk: explicit denial of SI, plan, attempts, self-harm; overall low risk."
      }
    ],
    "INTERVIEW_FIELDS": [
      {
        "key": "response",
        "label": "4-Week Response Evaluation",
        "placeholder": "Assess PHQ-9/GAD-7 progress and residual fatigue"
      }
    ],
    "INTERVIEW_KNOWLEDGE": [
      {
        "id": "w5-sarah_m-wed_allerg",
        "topic": "Medication allergies",
        "field": "allergies",
        "keywords": [
          "allergy",
          "allergic",
          "allergies",
          "penicillin",
          "sulfa",
          "codeine",
          "reaction",
          "rash",
          "hives"
        ],
        "response": "I do not have any known drug or food allergies."
      },
      {
        "id": "w5-sarah_m-wed_otc",
        "topic": "OTC / Supplements",
        "field": "otc",
        "keywords": [
          "otc",
          "over the counter",
          "supplement",
          "herb",
          "vitamin",
          "ibuprofen",
          "multivitamin"
        ],
        "response": "I take a daily multivitamin. I take Ibuprofen 200 mg occasionally for headaches. I've missed only one dose of Sertraline 50 mg in the past month."
      },
      {
        "id": "w5-sarah_m-wed_alc",
        "topic": "Alcohol use",
        "field": "alcohol",
        "keywords": [
          "alcohol",
          "drink",
          "beer",
          "wine",
          "liquor"
        ],
        "response": "I drink 1-2 alcoholic beverages weeklyâ€”about 1 glass of wine a week."
      },
      {
        "id": "w5-sarah_m-wed_tobacco",
        "topic": "Tobacco use",
        "field": "tobacco",
        "keywords": [
          "tobacco",
          "smoke",
          "smoking",
          "cigarette",
          "cigar",
          "vape",
          "vaping",
          "nicotine"
        ],
        "response": "I've cut down from 5 cigarettes a day to 2 cigarettes a day! Feeling less stressed and using the CBT breathing exercises really helped. I'm not quite ready to set a quit date today, but I'm feeling much more confident."
      },
      {
        "id": "w5-sarah_m-wed_social",
        "topic": "Social history",
        "field": "socialHistory",
        "keywords": [
          "live",
          "marital",
          "married",
          "single",
          "job",
          "work",
          "employ",
          "living",
          "husband",
          "teacher",
          "alone",
          "house"
        ],
        "response": "I'm working as an elementary school teacher. Marital status: single (lives alone in suburban house; maintains supportive relationship with my husband). We went hiking last weekend."
      },
      {
        "id": "w5-sarah_m-wed_cbt",
        "topic": "CBT Attendance & Benefit",
        "field": "cbt",
        "keywords": [
          "cbt",
          "therapy",
          "counseling",
          "sessions",
          "thought",
          "negative"
        ],
        "response": "I've attended 4 CBT sessions so far, and it's been extremely helpful. I'm learning to recognize negative thought patterns and challenge them when I get stressed at work."
      },
      {
        "id": "w5-sarah_m-wed_progress",
        "topic": "Symptom Progress",
        "field": "response",
        "keywords": [
          "feel",
          "better",
          "energy",
          "sleep",
          "mood",
          "fatigue",
          "motivation"
        ],
        "response": "I'm definitely feeling better overallâ€”more good days than bad. I'm sleeping 6-7 hours, falling asleep easier, reading again, and my anxiety is much less. Both occupational and interpersonal functioning have noticeably improved. But I still feel tired sometimes and lack motivation on some days."
      }
    ],
    "ASSESSMENT_CARDS": [
      {
        "id": "w5b_a1",
        "title": "1. Major Depressive Disorder (MDD) â€” Improved, Partial Response (Not in Remission)",
        "icon": "Brain",
        "color": "13314f",
        "questions": [
          {
            "key": "q1",
            "q": "What is the clinical evaluation of treatment response and dose optimization strategy?",
            "defaultAnswer": "Major Depressive Disorder (MDD), improved status, partial response (not in remission). PHQ-9 score improved from 13 (initial) to 8 (current), representing a ~38.5% reduction and clinically meaningful partial response. Patient attributes overall improvement directly to the combination of Sertraline therapy and CBT attendance together. Patient reports noticeable improvements in mood ('more good days than bad days'), energy, concentration, sleep (falling asleep easier, 6â€“7 hours/night), and enjoyment of activities (resumed reading, went hiking with husband). Both occupational and interpersonal functioning have noticeably improved (referencing husband's observations and return to work function). Excellent medication adherence (missed one dose in past month), minimal adverse effects (initial nausea resolved), and active CBT engagement (attended 4 sessions with substantial cognitive restructuring benefit). However, residual depressive symptoms persist after ~3 months of total treatment / 4-week target dose optimization timeframe: persistent occasional fatigue, low motivation, and incomplete return to baseline functioning. ACP Living Clinical Guidelines and VA/DoD MDD Guidelines explicitly mandate that **remission (PHQ-9 <=4 / <5), not merely partial response, is the primary treatment goal**. Given residual symptoms after ~4 weeks on target starting dose (50 mg daily) with excellent tolerability and adherence, **sertraline dose escalation to 100 mg PO daily is indicated** to optimize therapeutic response and target full remission."
          }
        ]
      },
      {
        "id": "w5b_a2",
        "title": "2. Generalized Anxiety Disorder (GAD) â€” Significantly Improved, Near Remission",
        "icon": "Activity",
        "color": "059669",
        "questions": [
          {
            "key": "q2",
            "q": "What is the anxiety status and role of ongoing treatment?",
            "defaultAnswer": "Generalized Anxiety Disorder (GAD), significantly improved status, near-remission. GAD-7 score improved from 8 (initial) to 5 (current), categorized as mild anxiety per validated instrument interpretation. Patient reports less excessive worrying, improved stress management via CBT, and reduced racing thoughts. Residual occasional work-related anxiety persists but no longer causes significant functional impairment. Continued CBT participation and ongoing SSRI therapy are appropriate. Sertraline provides guideline-supported first-line pharmacotherapy for GAD (SSRIs/SNRIs per JAMA 2026 Review). Sertraline dose optimization for MDD is expected to yield further anxiety reduction. No new separate GAD pharmacotherapy or benzodiazepines required (benzodiazepines not recommended for long-term GAD management)."
          }
        ]
      },
      {
        "id": "w5b_a3",
        "title": "3. Tobacco Use Disorder â€” Improving, Contemplative Stage",
        "icon": "Flame",
        "color": "d97706",
        "questions": [
          {
            "key": "q3",
            "q": "What progress has been made and what is the ongoing behavioral counseling plan?",
            "defaultAnswer": "Tobacco Use Disorder, improving status, contemplative stage of change. Patient successfully reduced tobacco consumption from approximately 5 to approximately 2 cigarettes daily, directly attributing reduction to decreased stress and improved coping strategies learned in CBT. While tobacco abstinence has not yet been achieved, this reduction and increasing confidence represent meaningful progress along the stages-of-change continuum. Patient is not yet ready to establish a quit date. Continued behavioral counseling using motivational interviewing is recommended per USPSTF Grade A recommendation and VA/DoD Tobacco Cessation CPG 2026. Cessation pharmacotherapy (varenicline, bupropion SR, NRT) is withheld at this time with clear rationale: patient is not yet ready to set a quit date; behavioral approach is ongoing and effective. Readiness will be reassessed at next visit."
          }
        ]
      },
      {
        "id": "w5b_a4",
        "title": "4. Behavioral Health Knowledge Deficit â€” Improving",
        "icon": "BookOpen",
        "color": "0891b2",
        "questions": [
          {
            "key": "q4",
            "q": "What education gaps exist regarding dose escalation and remission?",
            "defaultAnswer": "Behavioral Health Knowledge Deficit, improving status. Patient verbalizes that treatment is a process and recognizes symptom progress. Remaining education gaps include: understanding the critical distinction between partial response and full remission, clinical rationale for medication dose optimization, expected timeline for additional improvement, expected duration of therapy, and relapse prevention strategies. Continued patient education remains appropriate to reinforce adherence and self-monitoring."
          }
        ]
      }
    ],
    "PLAN_SECTIONS": [
      {
        "id": "w5b_p1",
        "title": "1. Major Depressive Disorder (MDD) Dose Optimization Plan",
        "options": [
          {
            "key": "o1",
            "label": "Increase Sertraline from 50 mg PO daily to 100 mg PO daily (acceptable per ACP Living Guideline and VA/DoD MDD 2022 Guideline: sertraline dose escalation to 100 mg daily; alternative second-generation antidepressants [escitalopram, fluoxetine, duloxetine] acceptable only if switch justified; note specifies sertraline 100 mg daily)",
            "correct": true
          },
          {
            "key": "o2",
            "label": "Document dose escalation rationale: significant partial improvement achieved, residual fatigue/motivation symptoms persist, remission (PHQ-9 <=4 / <5) has not yet been achieved, medication is well tolerated, and 100% adherence (missed only 1 dose) is demonstrated",
            "correct": true
          },
          {
            "key": "o3",
            "label": "Continue Cognitive Behavioral Therapy (CBT) participation for combination treatment benefit",
            "correct": true
          },
          {
            "key": "o4",
            "label": "Educate patient on difference between response and remission, rationale for dose escalation, expected 2 to 4 week timeline for additional improvement, continued adherence importance, and monitor for adverse effects specifically related to the sertraline dose increase to 100 mg daily",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_p2",
        "title": "2. Generalized Anxiety Disorder (GAD) & Coping Strategy Plan",
        "options": [
          {
            "key": "o5",
            "label": "Continue Sertraline therapy as outlined in MDD plan â€” no additional GAD-specific pharmacotherapy added (SSRIs/SNRIs first-line per JAMA 2026 Review; avoid long-term benzodiazepines)",
            "correct": true
          },
          {
            "key": "o6",
            "label": "Continue CBT and provide counseling on stress management strategies, relaxation techniques, and sleep hygiene",
            "correct": true
          },
          {
            "key": "o7",
            "label": "Monitor for additional improvement in anxiety symptoms, medication tolerability, and functional recovery; repeat GAD-7 at follow-up",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_p3",
        "title": "3. Tobacco Cessation Motivational Counseling Plan",
        "options": [
          {
            "key": "o8",
            "label": "Provide continued motivational interviewing per USPSTF Grade A recommendation for tobacco cessation",
            "correct": true
          },
          {
            "key": "o9",
            "label": "Discuss progress achieved thus far (reduction from 5 to 2 cigarettes/day), benefits of complete cessation, and relationship between smoking and stress management",
            "correct": true
          },
          {
            "key": "o10",
            "label": "State explicitly that patient is not yet ready to establish a quit date; discuss future smoking cessation strategies (outlining potential future pharmacotherapy options [varenicline, bupropion SR, NRT] and behavioral techniques for when patient is ready to quit); withhold cessation pharmacotherapy at this visit while behavioral approach is ongoing; reassess readiness at next visit",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_p4",
        "title": "4. Patient Psychoeducation Plan",
        "options": [
          {
            "key": "o11",
            "label": "Provide education on improvement achieved to date, response versus remission distinction, importance of continuing therapy, medication expectations, CBT participation, and long-term management expectations",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_p5",
        "title": "5. Comprehensive Monitoring Plan (12 Parameters â€” MDD, GAD, Tobacco)",
        "options": [
          {
            "key": "o12",
            "label": "Monitor PHQ-9 score, GAD-7 score, mood, energy, motivation, sleep quality, medication adherence, medication adverse effects (specifically monitoring tolerability after dose increase), suicidal ideation, tobacco use, occupational functioning, and interpersonal functioning (explicitly mapping to all active problems: MDD, GAD, Tobacco Use Disorder)",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_p6",
        "title": "6. Follow-Up & Remission Assessment Plan",
        "options": [
          {
            "key": "o13",
            "label": "Schedule follow-up visit in approximately 8 weeks (~3 months from initial visit)",
            "correct": true
          },
          {
            "key": "o14",
            "label": "Repeat PHQ-9 and GAD-7 at follow-up visit; assess symptom remission, medication adherence, medication tolerability, CBT participation, and tobacco use",
            "correct": true
          },
          {
            "key": "o15",
            "label": "Evaluate maintenance therapy planning, tobacco cessation progression, and relapse prevention strategies at future visit (explicitly referencing MDD, GAD, and Tobacco Use Disorder)",
            "correct": true
          }
        ]
      }
    ],
    "PLAN_FREETEXT": [
      {
        "key": "monitoring",
        "label": "Monitoring plan",
        "placeholder": "Labs, vitals, and follow-up intervals…"
      },
      {
        "key": "followUp",
        "label": "Follow-up",
        "placeholder": "When should the patient return and why?"
      }
    ],
    "GUIDING_QUESTIONS": [
      "What is the difference between clinical response and full remission in MDD?",
      "Why is Sertraline dose escalation to 100 mg daily indicated despite a 38.5% PHQ-9 reduction?",
      "What guidelines (ACP, VA/DoD) support targeting full remission as the primary goal?",
      "How does CBT complement pharmacotherapy in achieving GAD near-remission?",
      "Why is tobacco cessation pharmacotherapy withheld while continuing motivational interviewing?"
    ],
    "COUNSELING": [
      {
        "id": "c1",
        "title": "Sertraline Dose Escalation to 100 mg Daily",
        "body": [
          "You have made wonderful progress on Sertraline 50 mgâ€”your depression score dropped from 13 to 8, and your anxiety dropped from 8 to 5. However, because you still have some fatigue and low motivation, our goal is full remission (a PHQ-9 score under 5). Increasing Sertraline to 100 mg daily per clinical guidelines is safe, well-tolerated, and will help you achieve full recovery over the next 2 to 4 weeks."
        ]
      }
    ],
    "PRECEPTOR": {
      "keyIssues": [],
      "assessment": [],
      "plan": [],
      "pearls": [],
      "mistakes": [],
      "followupQuestions": [],
      "checklist": []
    },
    "INTERVIEW_SYSTEM_PROMPT": ""
  },
  {
    "id": "w5-sarah_m-thu",
    "PATIENT": {
      "name": "Sarah Mitchell",
      "age": 54,
      "sex": "female",
      "ethnicity": "White",
      "mrn": "W5-10222",
      "setting": "Ambulatory care clinic",
      "dob": "05/14/1972"
    },
    "ENCOUNTER": {
      "day": "Thursday",
      "week": "Week 5",
      "type": "12-Week Follow-Up Ambulatory Behavioral Health Clinic Visit",
      "chiefConcern": "I feel fantasticâ€”my mood is back to normal, I'm sleeping great, and I actually quit smoking 6 weeks ago! Do I still need to keep taking Sertraline and going to therapy?",
      "snapshotSummary": "Sarah presents for a 12-week follow-up after Sertraline 100 mg daily optimization and CBT completion. Achieved full remission (PHQ-9 = 2, GAD-7 = 1) and complete smoking cessation (6 weeks tobacco-free, early remission). Asks if Sertraline and therapy can be stopped. Maintenance therapy for >=6-9 months post-remission indicated per ACP and VA/DoD guidelines.",
      "difficulty": "Advanced",
      "difficultyTone": "7c3aed",
      "diseaseStates": [
        "MDD",
        "GAD",
        "Tobacco Use Disorder"
      ],
      "learningObjectives": [
        "Confirm full clinical remission using PHQ-9 and GAD-7",
        "Formulate maintenance therapy plan per ACP and VA/DoD guidelines",
        "Counsel on relapse prevention and tobacco early remission"
      ],
      "visitDate": "12/09/2026"
    },
    "VITALS": {
      "bp": "116/72 mmHg",
      "bpRepeat": "114/70 mmHg",
      "hr": "72 bpm",
      "rr": "16 breaths/min",
      "temp": "98.1Â°F",
      "weight": "151 lbs",
      "height": "65 inches",
      "bmi": "25.1 kg/mÂ²",
      "flags": {
        "bmi": "warn"
      },
      "extras": [],
      "vitalsTime": "12/09/2026 09:14"
    },
    "LABS": [
      {
        "label": "Sodium",
        "value": "139",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "12/09/2026 07:50"
      },
      {
        "label": "Potassium",
        "value": "4.1",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "12/09/2026 07:50"
      },
      {
        "label": "BUN",
        "value": "12",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/09/2026 07:50"
      },
      {
        "label": "Serum Creatinine",
        "value": "0.8",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/09/2026 07:50"
      },
      {
        "label": "eGFR",
        "value": ">90",
        "unit": "mL/min/1.73mÂ²",
        "flag": "normal",
        "labDate": "12/09/2026 07:50"
      },
      {
        "label": "AST",
        "value": "19",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "12/09/2026 07:50"
      },
      {
        "label": "ALT",
        "value": "18",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "12/09/2026 07:50"
      },
      {
        "label": "Glucose",
        "value": "90",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/09/2026 07:50"
      }
    ],
    "ALERTS": [
      {
        "level": "info",
        "text": "Full clinical remission achieved for MDD (PHQ-9 = 2, trend: 13 -> 8 -> 2) and GAD (GAD-7 = 1, trend: 8 -> 5 -> 1). Sertraline 100 mg PO daily maintenance therapy indicated for >=6-9 months post-remission per ACP Living Clinical Guidelines and VA/DoD MDD Guidelines to prevent depressive relapse."
      },
      {
        "level": "info",
        "text": "Tobacco Use Disorder in Early Remission (tobacco-free for 6 weeks, no relapse). Continue behavioral support and relapse prevention."
      }
    ],
    "PROBLEMS": [
      {
        "name": "1. Major Depressive Disorder (MDD) â€” In Full Remission, Stable on Maintenance Therapy",
        "detail": "PHQ-9 = 2 (minimal/no depression; trend 13 -> 8 -> 2). Full return to baseline functioning. Continue Sertraline 100 mg PO daily maintenance for >=6-9 months per ACP and VA/DoD guidelines.",
        "flag": "normal"
      },
      {
        "name": "2. Generalized Anxiety Disorder (GAD) â€” In Full Remission / Minimal Symptoms, Well Controlled",
        "detail": "GAD-7 = 1 (minimal anxiety; trend 8 -> 5 -> 1). Occasional normal work stress without excessive worry. Continue Sertraline 100 mg PO daily.",
        "flag": "normal"
      },
      {
        "name": "3. Tobacco Use Disorder â€” In Early Remission, Successful Smoking Cessation",
        "detail": "Tobacco-free for 6 weeks with zero smoking relapse. Occasional cravings during stress managed with CBT skills. Early remission phase (<12 months).",
        "flag": "normal"
      },
      {
        "name": "4. Behavioral Health Knowledge Deficit â€” Improving",
        "detail": "Patient asks if medication and ongoing therapy remain necessary now that she feels well. Needs education on maintenance treatment rationale, remission vs cure, and relapse warning signs.",
        "flag": "info"
      }
    ],
    "ALLERGIES": [
      {
        "substance": "No known drug allergies",
        "reaction": "—"
      }
    ],
    "MEDICATIONS": [
      {
        "name": "Sertraline",
        "dose": "100 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "MDD / GAD",
        "notes": "Optimized maintenance dose â€” 100% adherence, excellent tolerability, zero adverse effects. Continue long-term."
      },
      {
        "name": "Daily multivitamin",
        "dose": "1 tablet",
        "route": "by mouth",
        "freq": "daily",
        "indication": "Nutritional supplement",
        "notes": "OTC daily multivitamin."
      },
      {
        "name": "Ibuprofen",
        "dose": "200 mg",
        "route": "by mouth",
        "freq": "PRN",
        "indication": "Occasional tension headache",
        "notes": "Takes 1-2 tablets PRN rarely. Confirms no additional prescription medications used."
      }
    ],
    "IMMUNIZATIONS": [
      {
        "name": "Influenza",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "COVID-19",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "Tdap",
        "status": "Up to date (received)",
        "flag": "normal"
      }
    ],
    "SUBJECTIVE_DOCUMENTED": [
      {
        "label": "HPI",
        "value": "54-year-old female presents for a 12-week follow-up visit (post-initiation and optimization of treatment) at the ambulatory behavioral health clinic. Patient reports feeling 'fantastic' with a complete return of mood to baseline. Denies feelings of sadness, overwhelm, or exhaustion. Attributes improvement directly to Sertraline dose increase to 100 mg daily combined with CBT completion. Reports normal energy levels, improved concentration, good motivation, and full restoration of enjoyment in activities (reading regularly, hiking weekly with her husband). Reports feeling productive and able to concentrate throughout the day. Reports improved social engagement and excellent work performance as an elementary school teacher, denying feeling overwhelmed. Reports significant anxiety improvement, denying excessive worry, racing thoughts, or persistent anxiety, noting only occasional normal work stress. Reports excellent sleep quality (7 to 8 hours per night) and denies insomnia. Reports 100% medication adherence (zero missed doses) and denies any medication adverse effects. Completed 8 CBT sessions with major benefit in stress management, relaxation techniques, and cognitive restructuring. Successfully quit smoking approximately 6 weeks ago (tobacco-free for 6 weeks, occasional cravings during stress managed with CBT deep breathing exercises; explicitly denies any smoking relapse). Patient expresses gratitude for treatment success, but explicitly asks whether ongoing medication and ongoing therapy/CBT remain necessary now that she feels completely well, expressing concern about potential future depression recurrence."
      },
      {
        "label": "Review of Systems (ROS) & Safety Assessment",
        "value": "Psychiatric ROS & Safety Assessment: Patient explicitly denies suicidal ideation (SI), denies suicide plan, denies prior suicide attempts, and denies self-harm behaviors. Safety assessment: low overall risk, no plan, no prior attempts. Explicitly denies homicidal ideation (HI), panic attacks, mania, hypomania, hallucinations, delusions, and medication intolerance."
      },
      {
        "label": "Scores & Longitudinal Screening Trends",
        "value": "Initial PHQ-9: 13 (Moderate) -> 4-week PHQ-9: 8 (Mild) -> Current PHQ-9: 2 (Minimal/No Depression), confirming progressive improvement trend across all three visits and full clinical remission. Initial GAD-7: 8 (Mild) -> 4-week GAD-7: 5 (Mild) -> Current GAD-7: 1 (Minimal/No Anxiety), confirming minimal anxiety symptoms and full remission."
      },
      {
        "label": "Past Medical History",
        "value": "Major Depressive Disorder (MDD, in full remission, stable on maintenance therapy), Generalized Anxiety Disorder (GAD, in full remission / minimal symptoms, well controlled), Tobacco Use Disorder (in early remission, 6 weeks tobacco-free). Confirms no past surgical history (none). Denies prior psychiatric hospitalizations."
      },
      {
        "label": "Social History",
        "value": "Full-time elementary school teacher. Marital status & living situation: single (lives alone in suburban house; hiking with spouse/husband). Tobacco Use Disorder in Early Remission: quit smoking 6 weeks ago, tobacco-free for 6 weeks, occasional stress cravings managed with CBT skills, zero relapse. Alcohol: 1-2 alcoholic beverages weekly (1 glass of wine weekly). Denies illicit drug use. Exercises regularly: walking and weekly hiking with husband."
      },
      {
        "label": "Family History",
        "value": "Mother: MDD successfully treated with Sertraline. Father: HTN. Maternal grandmother: GAD."
      },
      {
        "label": "OTC & Allergies",
        "value": "Daily multivitamin 1 tab PO daily. Ibuprofen 200 mg PO PRN for occasional headaches. Confirms no additional prescription medications used. NKDA."
      },
      {
        "label": "Patient Questions & Knowledge Deficit",
        "value": "Patient expresses gratitude for recovery, but asks if ongoing medication and ongoing therapy/CBT remain necessary now that she feels well. Expresses concern about future depression recurrence. Represents a knowledge deficit regarding maintenance therapy and relapse prevention."
      }
    ],
    "OBJECTIVE_EXTRA": [
      {
        "label": "Objective Examination & Longitudinal Diagnostic Panel",
        "value": "Vital Signs: BP 116/72 mmHg (repeat 114/70 mmHg, well controlled), HR 72 bpm, RR 16 breaths/min, Temp 98.1Â°F, Weight 151 lbs (68 kg), Height 65 inches (5 ft 5 in), BMI 25.1 kg/mÂ² (borderline overweight). All vital signs are within normal limits. Laboratory Findings: Sodium 139 mEq/L, Potassium 4.1 mEq/L, BUN 12 mg/dL, Serum Creatinine 0.8 mg/dL, eGFR >90 mL/min/1.73mÂ² (adequate renal function for current medications), Glucose 90 mg/dL (within normal range), AST 19 U/L, ALT 18 U/L (normal hepatic transaminases confirming Sertraline safety). Comprehensive metabolic panel is completely free of clinically significant abnormalities; no laboratory data missing from expected monitoring panel. Screening Score Trends across 3 Visits: PHQ-9 trend: 13 (initial visit) -> 8 (4-week visit) -> 2 (current visit), confirming progressive improvement and full clinical remission (PHQ-9 2 = minimal depressive symptoms). GAD-7 trend: 8 (initial visit) -> 5 (4-week visit) -> 1 (current visit), confirming minimal anxiety symptoms (GAD-7 1 = minimal anxiety)."
      }
    ],
    "INTERVIEW_FIELDS": [
      {
        "key": "duration",
        "label": "12-Week Maintenance & Duration Query",
        "placeholder": "Assess 6-week tobacco cessation and answer duration questions"
      }
    ],
    "INTERVIEW_KNOWLEDGE": [
      {
        "id": "w5-sarah_m-thu_allerg",
        "topic": "Medication allergies",
        "field": "allergies",
        "keywords": [
          "allergy",
          "allergic",
          "allergies",
          "penicillin",
          "sulfa",
          "codeine",
          "reaction",
          "rash",
          "hives"
        ],
        "response": "I do not have any known drug or food allergies."
      },
      {
        "id": "w5-sarah_m-thu_otc",
        "topic": "OTC / Supplements",
        "field": "otc",
        "keywords": [
          "otc",
          "over the counter",
          "supplement",
          "herb",
          "vitamin",
          "ibuprofen",
          "multivitamin"
        ],
        "response": "I take a daily multivitamin. I take Ibuprofen 200 mg occasionally for headaches. I've taken Sertraline 100 mg every single day with zero missed doses and no side effects."
      },
      {
        "id": "w5-sarah_m-thu_alc",
        "topic": "Alcohol use",
        "field": "alcohol",
        "keywords": [
          "alcohol",
          "drink",
          "beer",
          "wine",
          "liquor"
        ],
        "response": "I drink 1-2 alcoholic beverages weeklyâ€”about a glass of wine once a week."
      },
      {
        "id": "w5-sarah_m-thu_tobacco",
        "topic": "Tobacco use",
        "field": "tobacco",
        "keywords": [
          "tobacco",
          "smoke",
          "smoking",
          "cigarette",
          "cigar",
          "vape",
          "vaping",
          "nicotine"
        ],
        "response": "I haven't smoked a single cigarette in 6 weeks! I quit completely. Whenever I feel a craving during stress, I use the deep breathing techniques I learned in CBT. I haven't had any slip-ups."
      },
      {
        "id": "w5-sarah_m-thu_social",
        "topic": "Social history",
        "field": "socialHistory",
        "keywords": [
          "live",
          "marital",
          "married",
          "single",
          "job",
          "work",
          "employ",
          "living",
          "husband",
          "teacher",
          "alone",
          "house"
        ],
        "response": "I'm teaching full-time, feeling great at work and not overwhelmed. Marital status: single (lives alone in suburban house; hiking with my spouse/husband). My husband and I go hiking every weekend and I'm reading regularly again."
      },
      {
        "id": "w5-sarah_m-thu_cbt",
        "topic": "CBT Completion",
        "field": "cbt",
        "keywords": [
          "cbt",
          "therapy",
          "counseling",
          "completed",
          "sessions"
        ],
        "response": "I finished all 8 CBT sessions. It made a huge difference in how I manage work stress and cravings."
      },
      {
        "id": "w5-sarah_m-thu_duration",
        "topic": "Maintenance & Duration Query",
        "field": "duration",
        "keywords": [
          "stop",
          "keep taking",
          "how long",
          "duration",
          "cure",
          "recurrence",
          "necessary",
          "therapy"
        ],
        "response": "I feel fantastic and my mood is completely back to normal. Do I really need to keep taking Sertraline 100 mg every day and going to ongoing therapy/CBT now that I feel well? What if my depression comes back in the future?"
      }
    ],
    "ASSESSMENT_CARDS": [
      {
        "id": "w5c_a1",
        "title": "1. Major Depressive Disorder (MDD) â€” In Full Remission, Stable on Maintenance Therapy",
        "icon": "ShieldCheck",
        "color": "10b981",
        "questions": [
          {
            "key": "q1",
            "q": "What clinical findings confirm remission and what is the guideline-based continuation therapy plan?",
            "defaultAnswer": "Major Depressive Disorder (MDD), in full clinical remission, stable on maintenance therapy. PHQ-9 score is 2 (minimal/no depressive symptoms), demonstrating a progressive improvement trend across all 3 visits (initial 13 -> 4-week 8 -> current 2). Sertraline 100 mg PO daily and CBT completion cited as primary drivers of resolution of depressive symptoms. Patient demonstrates complete return to baseline functioning: mood back to normal, normal energy, excellent concentration, good motivation, restored enjoyment in hobbies (reading, weekly hiking), improved social engagement, feeling productive and able to concentrate throughout the day, excellent work performance, and absence of distress or functional impairment. Excellent medication adherence (100% compliant, 0 missed doses), excellent tolerability (zero adverse effects), and meaningful CBT engagement documented. Guidelines cited: ACP Living Clinical Guideline recommends continuation therapy for >=4 to 9 months post-remission; VA/DoD MDD Guideline recommends continuation therapy for >=6 months post-remission. Premature discontinuation carries a high risk of depressive relapse. Rationale for continuing Sertraline 100 mg PO daily: full remission achieved, excellent tolerability, excellent adherence, high likelihood of continued benefit. No dose change or medication switch warranted. Patient question regarding stopping medication and ongoing therapy is identified as a knowledge deficit; education focus must address maintenance treatment expectations and relapse prevention."
          }
        ]
      },
      {
        "id": "w5c_a2",
        "title": "2. Generalized Anxiety Disorder (GAD) â€” In Full Remission / Minimal Symptoms, Well Controlled",
        "icon": "CheckCircle",
        "color": "059669",
        "questions": [
          {
            "key": "q2",
            "q": "What is the anxiety status and role of ongoing maintenance therapy?",
            "defaultAnswer": "Generalized Anxiety Disorder (GAD), in full clinical remission / minimal symptoms, well controlled. GAD-7 score is 1 (minimal/no anxiety), demonstrating progressive improvement across visits (initial 8 -> 4-week 5 -> current 1). Patient reports significant anxiety improvement, denying excessive worry, racing thoughts, or persistent anxiety, with only occasional normal work stress. Symptoms cause no distress or functional impairment. CBT credited as major contributor via coping skills learned. Sertraline 100 mg PO daily continues to provide guideline-supported first-line pharmacotherapy for GAD (SSRIs/SNRIs per JAMA 2026 Review). Continuation of current therapy without dose change or additional pharmacotherapy is appropriate. Ongoing monitoring of anxiety symptoms and stress-management reinforcement recommended; repeat GAD-7 at future visits."
          }
        ]
      },
      {
        "id": "w5c_a3",
        "title": "3. Tobacco Use Disorder â€” In Early Remission, Successful Smoking Cessation",
        "icon": "Flame",
        "color": "059669",
        "questions": [
          {
            "key": "q3",
            "q": "What is the smoking cessation status and ongoing relapse prevention plan?",
            "defaultAnswer": "Tobacco Use Disorder, in early remission, successful smoking cessation. Patient successfully quit smoking approximately 6 weeks ago and has remained completely tobacco-free with zero smoking relapse. Occasional cravings during stress are acknowledged and effectively managed using CBT deep breathing skills. Patient is highly motivated to maintain abstinence. Improved mental health and coping strategies identified as key contributors. Six weeks of tobacco abstinence constitutes **Early Remission** (sustained remission requires >=12 months). Early phase carries elevated relapse risk; continued behavioral counseling and support appropriate per USPSTF guidelines for tobacco cessation. FDA-approved pharmacotherapy options (NRT patch/gum/lozenge, bupropion SR, varenicline) were not initiated because behavioral approach achieved successful cessation, but remain available if relapse occurs. Reinforcement of cessation success, maintaining coping techniques as an ongoing strategy beyond craving management, and relapse prevention strategies planned for future visits."
          }
        ]
      },
      {
        "id": "w5c_a4",
        "title": "4. Behavioral Health Knowledge Deficit â€” Improving",
        "icon": "BookOpen",
        "color": "0891b2",
        "questions": [
          {
            "key": "q4",
            "q": "How are patient questions regarding maintenance duration and relapse prevention addressed?",
            "defaultAnswer": "Behavioral Health Knowledge Deficit, improving status. Patient demonstrates improved understanding of depression, anxiety, medication therapy, and behavioral health management. However, patient has specific questions regarding duration of therapy and whether ongoing medication and ongoing therapy/CBT remain necessary now that she feels completely well, expressing concern about potential future depression recurrence. Additional education regarding maintenance treatment expectations, distinction between remission and permanent cure, and relapse prevention is appropriate. Topics directly linked to patient's specific questions: explaining maintenance duration (>=6-9 months), educating on relapse warning signs, instructing prompt contact if symptoms recur, and emphasizing that education improves long-term adherence and reduces recurrence risk. Documented as an active, ongoing concern. No other active psychiatric or behavioral health problems exist beyond the four listed (MDD, GAD, Tobacco Use Disorder, Knowledge Deficit)."
          }
        ]
      }
    ],
    "PLAN_SECTIONS": [
      {
        "id": "w5c_p1",
        "title": "1. Major Depressive Disorder (MDD) Maintenance Therapy Plan",
        "options": [
          {
            "key": "o1",
            "label": "Continue Sertraline 100 mg PO daily maintenance therapy (no dose change or medication switch warranted)",
            "correct": true
          },
          {
            "key": "o2",
            "label": "Document maintenance rationale: full clinical remission achieved (PHQ-9 = 2), excellent tolerability, 100% adherence, and high likelihood of continued benefit",
            "correct": true
          },
          {
            "key": "o3",
            "label": "Cite guideline-based rationale: ACP Living Clinical Guideline recommends continuation for >=4 to 9 months post-remission; VA/DoD MDD Guideline recommends continuation for >=6 months post-remission to prevent depressive relapse",
            "correct": true
          },
          {
            "key": "o4",
            "label": "Educate patient on difference between remission and permanent cure, importance of maintenance treatment, relapse risk with premature discontinuation, and expected duration of therapy",
            "correct": true
          },
          {
            "key": "o5",
            "label": "Educate on relapse warning signs (persistent low mood, loss of interest/anhedonia, sleep disturbance, increasing anxiety, social withdrawal, difficulty concentrating) and instruct patient to contact healthcare team if symptoms recur",
            "correct": true
          },
          {
            "key": "o6",
            "label": "Continue Cognitive Behavioral Therapy (CBT) maintenance skills; repeat PHQ-9 at future follow-up visits",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_p2",
        "title": "2. Generalized Anxiety Disorder (GAD) Maintenance Plan",
        "options": [
          {
            "key": "o7",
            "label": "Continue Sertraline 100 mg PO daily for GAD maintenance (first-line SSRI per JAMA 2026 Review; acceptable: sertraline, escitalopram, duloxetine, venlafaxine; no additional pharmacotherapy needed given GAD-7 of 1)",
            "correct": true
          },
          {
            "key": "o8",
            "label": "Continue CBT maintenance for anxiety management; provide counseling on stress management techniques, maintenance of healthy coping strategies, and recognition of worsening anxiety symptoms",
            "correct": true
          },
          {
            "key": "o9",
            "label": "Repeat GAD-7 at future follow-up visits; confirm no medication change or benzodiazepine is warranted",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_p3",
        "title": "3. Tobacco Cessation Early Remission & Relapse Prevention Plan",
        "options": [
          {
            "key": "o10",
            "label": "Congratulate patient on successful 6-week tobacco cessation; provide counseling on benefits of continued abstinence and encouragement of continued tobacco-free lifestyle",
            "correct": true
          },
          {
            "key": "o11",
            "label": "Provide counseling on common triggers for relapse, stress-management strategies for craving management, and explicitly counsel on the importance of maintaining coping techniques as an ongoing strategy beyond craving management",
            "correct": true
          },
          {
            "key": "o12",
            "label": "Behavioral counseling approach recommended per USPSTF for tobacco cessation; no pharmacotherapy initiated at this visit given successful cessation, but note FDA-approved options (NRT patch/gum, bupropion SR, varenicline) available if relapse occurs",
            "correct": true
          },
          {
            "key": "o13",
            "label": "Recognize early remission status (6 weeks < 12 months) carries elevated relapse risk; continue monitoring tobacco abstinence at future visits",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_p4",
        "title": "4. Patient Education & Relapse Prevention Counseling Plan",
        "options": [
          {
            "key": "o14",
            "label": "Educate patient on depression remission vs cure, anxiety management, maintenance therapy expectations, relapse prevention, continued CBT participation, tobacco abstinence maintenance, and ongoing follow-up importance",
            "correct": true
          },
          {
            "key": "o15",
            "label": "Present relapse warning signs explicitly: persistent low mood, loss of interest in activities, sleep disturbance, increasing anxiety, social withdrawal, difficulty concentrating; instruct to contact clinic if symptoms emerge",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_p5",
        "title": "5. Follow-Up & Longitudinal Monitoring Plan (All 5 Focus Areas)",
        "options": [
          {
            "key": "o16",
            "label": "Schedule follow-up visit in approximately 3 to 6 months for longitudinal maintenance monitoring",
            "correct": true
          },
          {
            "key": "o17",
            "label": "Repeat PHQ-9 and GAD-7 assessment scales at follow-up visit",
            "correct": true
          },
          {
            "key": "o18",
            "label": "Assess continued remission, medication adherence, medication tolerability, continued tobacco abstinence, relapse risk factors, and long-term maintenance therapy needs at follow-up visit",
            "correct": true
          },
          {
            "key": "o19",
            "label": "Monitor mood, anxiety symptoms, sleep quality, functional status, and signs of relapse; explicitly enumerate all five future visit focus areas: (1) maintaining remission, (2) preventing relapse, (3) reinforcing coping strategies, (4) supporting tobacco abstinence, and (5) long-term behavioral health recovery",
            "correct": true
          }
        ]
      }
    ],
    "PLAN_FREETEXT": [
      {
        "key": "monitoring",
        "label": "Monitoring plan",
        "placeholder": "Labs, vitals, and follow-up intervals…"
      },
      {
        "key": "followUp",
        "label": "Follow-up",
        "placeholder": "When should the patient return and why?"
      }
    ],
    "GUIDING_QUESTIONS": [
      "What clinical findings confirm full remission of MDD and GAD?",
      "Why do ACP and VA/DoD guidelines recommend continuing Sertraline for >=6-9 months post-remission?",
      "What is the distinction between remission and permanent cure?",
      "Why is 6 weeks of smoking cessation classified as early remission rather than sustained remission?",
      "What relapse warning signs should be reviewed with the patient?"
    ],
    "COUNSELING": [
      {
        "id": "c1",
        "title": "Maintenance Therapy & Relapse Prevention Rationale",
        "body": [
          "Congratulations on reaching full remission and staying tobacco-free for 6 weeks! Feeling completely well is the exact goal of treatment. However, depression remission is not a permanent cureâ€”stopping Sertraline now carries a high risk of relapse. Clinical guidelines from ACP and VA/DoD recommend continuing Sertraline 100 mg PO daily for at least 6 to 9 months post-remission to protect your recovery."
        ]
      }
    ],
    "PRECEPTOR": {
      "keyIssues": [],
      "assessment": [],
      "plan": [],
      "pearls": [],
      "mistakes": [],
      "followupQuestions": [],
      "checklist": []
    },
    "INTERVIEW_SYSTEM_PROMPT": ""
  },
  {
    "id": "w5-jessica_r-tue",
    "PATIENT": {
      "name": "Jessica Ramirez",
      "age": 42,
      "sex": "female",
      "ethnicity": "Hispanic / Latina",
      "mrn": "W5-20441",
      "setting": "Ambulatory Behavioral Health Clinic",
      "dob": "11/03/1983"
    },
    "ENCOUNTER": {
      "day": "Tuesday",
      "week": "Week 5",
      "type": "Initial Visit - Ambulatory Behavioral Health Clinic",
      "chiefConcern": "I've been feeling so down and overwhelmed. My PCP prescribed Zoloft 100 mg 6 weeks ago for my depression and anxiety, but the copay was $45 at the pharmacy and I couldn't afford it every month, so I only take it once or twice a week when things get really bad.",
      "snapshotSummary": "Jessica is a 42-year-old female medical receptionist (divorced, lives with 2 children) with MDD (PHQ-9 = 16) and GAD (GAD-7 = 14) referred by PCP. Reports pseudo-treatment failure due to non-adherence driven by financial barrier ($45 copay) and unrealistic response expectations. Prescribed Sertraline 100 mg daily and Hydroxyzine 25 mg PO q8h PRN anxiety. Requires switching to $4 generic program, pill alarm adherence support, and tobacco cessation counseling.",
      "difficulty": "Intermediate",
      "difficultyTone": "blue",
      "diseaseStates": [
        "MDD (Moderate-Severe)",
        "GAD (Moderate)",
        "Non-adherence (Financial & Knowledge Deficit)",
        "Tobacco Use Disorder (Contemplative)"
      ],
      "learningObjectives": [
        "Recognize cost-driven non-adherence masquerading as antidepressant treatment failure",
        "Transition patient to $4 generic sertraline 50 mg daily",
        "Implement pill alarm adherence strategies",
        "Counsel on tobacco cessation in contemplative stage"
      ],
      "visitDate": "09/09/2026"
    },
    "VITALS": {
      "bp": "124/78 mmHg",
      "bpRepeat": "120/76 mmHg",
      "hr": "82 bpm",
      "rr": "16 breaths/min",
      "temp": "98.3°F",
      "weight": "176 lbs",
      "height": "64 inches",
      "bmi": "30.2 kg/m²",
      "flags": {
        "bmi": "obese"
      },
      "extras": [],
      "vitalsTime": "09/09/2026 10:15"
    },
    "LABS": [
      {
        "label": "Sodium",
        "value": "140",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Potassium",
        "value": "4.2",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Chloride",
        "value": "102",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Bicarbonate",
        "value": "25",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "BUN",
        "value": "14",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Serum Creatinine",
        "value": "0.9",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "eGFR",
        "value": ">90",
        "unit": "mL/min/1.73m²",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Glucose",
        "value": "97",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "TSH",
        "value": "2.0",
        "unit": "mIU/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "AST",
        "value": "22",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "ALT",
        "value": "25",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "WBC",
        "value": "5.8",
        "unit": "x10³/μL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Hgb",
        "value": "13.1",
        "unit": "g/dL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Plt",
        "value": "240",
        "unit": "x10³/μL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      }
    ],
    "ALERTS": [
      {
        "level": "high",
        "text": "Pseudo-treatment failure: Patient has not been taking Sertraline 50 mg daily consistently due to a $45/month copay ($4 generic available). PHQ-9 = 16 (Moderate-Severe), GAD-7 = 14 (Moderate)."
      },
      {
        "level": "info",
        "text": "Tobacco Use Disorder (smokes 6 cigarettes/day for stress, contemplative stage). Motivational interviewing recommended."
      }
    ],
    "PROBLEMS": [
      {
        "name": "1. Major Depressive Disorder (MDD) â€” Moderate-Severe, Non-adherent",
        "detail": "PHQ-9 = 16. Symptom duration 6 months. Pseudo-treatment failure driven by financial non-adherence ($45 copay, takes 1-2 doses/week).",
        "flag": "high"
      },
      {
        "name": "2. Generalized Anxiety Disorder (GAD) â€” Moderate, Non-adherent",
        "detail": "GAD-7 = 14. Persistent worry and tension. Non-adherent to prescribed SSRI secondary to cost.",
        "flag": "high"
      },
      {
        "name": "3. Non-adherence (Financial Barrier) â€” Active",
        "detail": "Takes Sertraline 50 mg only 1-2 times per week due to $45/month copay at retail pharmacy.",
        "flag": "warn"
      },
      {
        "name": "4. Tobacco Use Disorder â€” Active, Contemplative Stage",
        "detail": "Smokes 6 cigarettes/day for 6 years (1.8 pack-years). Contemplative stage of change.",
        "flag": "info"
      }
    ],
    "ALLERGIES": [
      {
        "substance": "No known drug allergies",
        "reaction": "—"
      }
    ],
    "MEDICATIONS": [
      {
        "name": "Sertraline",
        "dose": "100 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "MDD / GAD",
        "notes": "Prescribed 6 weeks ago by PCP; patient taking only 1-2 times per week due to $45 copay barrier and expectation of rapid response."
      },
      {
        "name": "Hydroxyzine",
        "dose": "25 mg",
        "route": "by mouth",
        "freq": "every 8 hours as needed",
        "indication": "Anxiety PRN",
        "notes": "Prescribed PRN for acute anxiety spikes; skipped due to cost/forgetfulness."
      },
      {
        "name": "Ethinyl estradiol / Norgestimate",
        "dose": "0.035 mg / 0.25 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "Contraception",
        "notes": "Oral contraceptive pill."
      }
    ],
    "IMMUNIZATIONS": [
      {
        "name": "Influenza",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "COVID-19",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "Tdap",
        "status": "Up to date (received)",
        "flag": "normal"
      }
    ],
    "SUBJECTIVE_DOCUMENTED": [
      {
        "label": "HPI",
        "value": "42-year-old female medical receptionist (divorced, living with 2 teenage children) presenting for initial evaluation in behavioral health clinic upon PCP referral for ongoing MDD and GAD symptoms (~2 years duration, gradual course) despite sertraline 100 mg daily prescribed 6 weeks ago. Reports persistent low mood, anhedonia, fatigue, poor motivation, irritability, difficulty concentrating, difficulty relaxing, and persistent worry. States symptoms impair work focus and engagement with children. Reveals she only takes Sertraline 100 mg 1-2 times per week because the monthly copay was $45, which she could not afford, and she expected rapid results. Denies side effects when taking medication. Denies prior history of mania, hypomania, psychosis, or panic attacks."
      },
      {
        "label": "Review of Systems (ROS) & Safety Assessment",
        "value": "Psychiatric ROS & Safety: Explicitly denies suicidal ideation (SI), denies plan, denies intent, denies suicide attempts (low risk). Denies homicidal ideation (HI), denies self-harm. Denies hallucinations, delusions, mania, hypomania, panic attacks. Denies prior psychiatric hospitalizations."
      },
      {
        "label": "Scores & Screening Tools",
        "value": "PHQ-9 score: 16 (Moderate-Severe Depression). GAD-7 score: 14 (Moderate Anxiety)."
      },
      {
        "label": "Past Medical History & Surgeries",
        "value": "PMH: MDD, GAD, Tobacco Use Disorder. PSH: Denies prior surgeries."
      },
      {
        "label": "Social History",
        "value": "Works full-time as a medical receptionist. Divorced, lives with 2 teenage children. Smokes ~10 cigarettes/day for 6 years (3 pack-years). Contemplative stage of change regarding tobacco cessation (desires to quit but overwhelmed). Drinks 1 glass of wine on weekends. Minimal exercise (walks occasionally). Denies illicit drug use. Immunizations up to date (Influenza, COVID-19, Tdap). NKDA."
      },
      {
        "label": "Family History",
        "value": "Mother: MDD (responded well to sertraline). Father: Alcohol Use Disorder. Sister: Generalized Anxiety Disorder."
      }
    ],
    "OBJECTIVE_EXTRA": {
      "Mental Status Exam (MSE)": "Alert, oriented x4. Mood: 'anxious and down'. Affect: mood-congruent, constricted. Speech: normal rate and volume. Thought process: goal-directed, logical. Thought content: no SI/HI, no delusions. Perceptions: no hallucinations. Cognition: intact. Insight/Judgment: good."
    },
    "INTERVIEW_FIELDS": [
      {
        "field": "financial",
        "label": "Reason for non-adherence & cost barrier ($45 copay)"
      },
      {
        "field": "adherence",
        "label": "Actual medication taking pattern (1-2x/week)"
      },
      {
        "field": "generic_option",
        "label": "Acceptability of $4 generic option"
      },
      {
        "field": "tobacco",
        "label": "Tobacco use quantity and readiness to quit"
      }
    ],
    "INTERVIEW_KNOWLEDGE": [
      {
        "id": "w5-jessica_r-tue_ik_financial",
        "topic": "Reason for non-adherence & cost barrier ($45 copay)",
        "field": "financial",
        "keywords": [
          "financial",
          "reason",
          "for",
          "non",
          "adherence",
          "cost",
          "barrier",
          "copay",
          "afford",
          "money",
          "pay",
          "expensive",
          "dollar",
          "45",
          "price"
        ],
        "response": "I was paying $45 a month at the retail pharmacy and couldn't keep up with that cost, so I saved the pills for days when I felt worst."
      },
      {
        "id": "w5-jessica_r-tue_ik_adherence",
        "topic": "Actual medication taking pattern (1-2x/week)",
        "field": "adherence",
        "keywords": [
          "adherence",
          "actual",
          "medication",
          "taking",
          "pattern",
          "week",
          "adhere",
          "take",
          "miss",
          "skip",
          "forget",
          "daily",
          "pill",
          "dose",
          "regularly"
        ],
        "response": "I only take Sertraline once or twice a week. I know I was supposed to take it daily, but the money was tight."
      },
      {
        "id": "w5-jessica_r-tue_ik_generic_option",
        "topic": "Acceptability of $4 generic option",
        "field": "generic_option",
        "keywords": [
          "generic_option",
          "acceptability",
          "generic",
          "option",
          "program",
          "mail",
          "cheap",
          "switch",
          "4"
        ],
        "response": "If there's a $4 generic at the retail pharmacy or mail order, that would be amazing! I can easily afford $4 a month."
      },
      {
        "id": "w5-jessica_r-tue_ik_tobacco",
        "topic": "Tobacco use quantity and readiness to quit",
        "field": "tobacco",
        "keywords": [
          "tobacco",
          "use",
          "quantity",
          "and",
          "readiness",
          "quit",
          "smoke",
          "smoking",
          "cigarette",
          "cigar",
          "vape",
          "craving",
          "abstinence"
        ],
        "response": "I smoke about 6 cigarettes a day. It helps me calm down when I feel overwhelmed at work, but I know I should quit eventually."
      }
    ],
    "ASSESSMENT_CARDS": [
      {
        "id": "w5b_tue_a1",
        "title": "1. MDD & GAD Pseudo-Treatment Failure (Cost-Driven Non-Adherence)",
        "icon": "Brain",
        "color": "13314f",
        "questions": [
          {
            "key": "q1",
            "q": "What is the assessment of MDD/GAD status and non-adherence?",
            "defaultAnswer": "MDD (PHQ-9 = 16, Moderate-Severe) and GAD (GAD-7 = 14, Moderate) showing lack of response. However, this is a pseudo-treatment failure driven by financial non-adherence ($45 copay, taking sertraline 50 mg only 1-2 times/week). True efficacy cannot be evaluated without 4-6 weeks of consistent daily adherence."
          }
        ]
      },
      {
        "id": "w5b_tue_a2",
        "title": "2. Tobacco Use Disorder (Contemplative Stage)",
        "icon": "Cigarette",
        "color": "13314f",
        "questions": [
          {
            "key": "q2",
            "q": "What is the tobacco status and stage of change?",
            "defaultAnswer": "Active Tobacco Use Disorder (6 cigarettes/day). Patient is in contemplative stage of change (recognizes need to quit but not ready to set a quit date today)."
          }
        ]
      }
    ],
    "PLAN_SECTIONS": [
      {
        "id": "w5b_tue_p1",
        "title": "1. Pharmacotherapy & Adherence Optimization Plan",
        "options": [
          {
            "key": "o1",
            "label": "Transition patient to generic Sertraline 50 mg PO daily available on $4 generic prescription program to resolve financial barrier",
            "correct": true
          },
          {
            "key": "o2",
            "label": "Counsel patient on necessity of strict daily adherence (takes 4-6 weeks of uninterrupted daily use for full antidepressant/anxiolytic effect)",
            "correct": true
          },
          {
            "key": "o3",
            "label": "Implement adherence strategies: set a daily smartphone alarm and use a 7-day pill organizer",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_tue_p2",
        "title": "2. Tobacco Cessation Counseling Plan",
        "options": [
          {
            "key": "o4",
            "label": "Provide motivational interviewing for tobacco cessation (5 Rs: Relevance, Risks, Rewards, Roadblocks, Repetition) for contemplative stage of change",
            "correct": true
          },
          {
            "key": "o5",
            "label": "Reassess readiness to quit at next follow-up visit in 6 weeks",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_tue_p3",
        "title": "3. Follow-Up Plan",
        "options": [
          {
            "key": "o6",
            "label": "Schedule follow-up visit in 6 weeks to evaluate clinical response to 100% adherent Sertraline 50 mg daily",
            "correct": true
          }
        ]
      }
    ],
    "PLAN_FREETEXT": [
      {
        "key": "monitoring",
        "label": "Monitoring plan",
        "placeholder": "Labs, vitals, and follow-up intervals…"
      },
      {
        "key": "followUp",
        "label": "Follow-up",
        "placeholder": "When should the patient return and why?"
      }
    ],
    "GUIDING_QUESTIONS": [],
    "COUNSELING": [
      "Counsel on daily adherence importance for SSRI therapeutic efficacy (takes 4-6 weeks of consistent daily use).",
      "Transition to $4 generic sertraline 50 mg daily at target pharmacy.",
      "Recommend setting a daily phone alarm or pill organizer to maintain 100% adherence.",
      "Motivational interviewing for tobacco cessation (contemplative stage)."
    ],
    "PRECEPTOR": {
      "keyIssues": [],
      "assessment": [],
      "plan": [],
      "pearls": [],
      "mistakes": [],
      "followupQuestions": [],
      "checklist": []
    },
    "INTERVIEW_SYSTEM_PROMPT": ""
  },
  {
    "id": "w5-jessica_r-wed",
    "PATIENT": {
      "name": "Jessica Ramirez",
      "age": 42,
      "sex": "female",
      "ethnicity": "Hispanic / Latina",
      "mrn": "W5-20441",
      "setting": "Ambulatory Behavioral Health Clinic",
      "dob": "11/03/1983"
    },
    "ENCOUNTER": {
      "day": "Wednesday",
      "week": "Week 5",
      "type": "6-Week Follow-Up Visit (Post-Adherence Optimization)",
      "chiefConcern": "I've been taking the $4 generic Sertraline 100 mg every single day with breakfast and my phone alarm! I definitely feel less anxious and my mood is better, though I still have mild residual fatigue.",
      "snapshotSummary": "Jessica returns for 6-week follow-up after switching to $4 generic sertraline 100 mg daily. Reports 100% adherence paired with breakfast. Partial response: PHQ-9 reduced from 16 to 9 (mild), GAD-7 reduced from 14 to 7 (mild). Tolerating well. Hydroxyzine 25 mg PRN used occasionally. Plan: Continue Sertraline 100 mg daily for target remission per ACP/VA-DoD guidelines; continue virtual CBT; advance tobacco cessation (preparation stage, set quit date).",
      "difficulty": "Intermediate",
      "difficultyTone": "blue",
      "diseaseStates": [
        "MDD (Partial Response)",
        "GAD (Partial Response)",
        "Tobacco Use Disorder (Preparation Stage)"
      ],
      "learningObjectives": [
        "Assess partial antidepressant response",
        "Titrate Sertraline 50 mg to 100 mg daily for remission target",
        "Assist patient in setting a tobacco quit date"
      ],
      "visitDate": "10/21/2026"
    },
    "VITALS": {
      "bp": "122/76 mmHg",
      "bpRepeat": "118/74 mmHg",
      "hr": "78 bpm",
      "rr": "16 breaths/min",
      "temp": "98.1°F",
      "weight": "174 lbs",
      "height": "64 inches",
      "bmi": "29.9 kg/m²",
      "flags": {
        "bmi": "overweight"
      },
      "extras": [],
      "vitalsTime": "10/21/2026 09:30"
    },
    "LABS": [
      {
        "label": "Sodium",
        "value": "140",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Potassium",
        "value": "4.1",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Chloride",
        "value": "101",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Bicarbonate",
        "value": "24",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "BUN",
        "value": "13",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Serum Creatinine",
        "value": "0.9",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "eGFR",
        "value": ">90",
        "unit": "mL/min/1.73m²",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Glucose",
        "value": "95",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "AST",
        "value": "21",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "ALT",
        "value": "22",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      }
    ],
    "ALERTS": [
      {
        "level": "warn",
        "text": "Partial response to Sertraline 50 mg daily with 100% adherence over 6 weeks: PHQ-9 = 10 (down from 16), GAD-7 = 8 (down from 14). Guideline-recommended action: Titrate Sertraline to 100 mg daily."
      },
      {
        "level": "info",
        "text": "Tobacco Use Disorder: Patient is now in Preparation stage of change and ready to set a quit date."
      }
    ],
    "PROBLEMS": [
      {
        "name": "1. Major Depressive Disorder (MDD) â€” Partial Response",
        "detail": "PHQ-9 = 10 (improved from 16). Residual depressive symptoms warrant dose titration.",
        "flag": "warn"
      },
      {
        "name": "2. Generalized Anxiety Disorder (GAD) â€” Partial Response",
        "detail": "GAD-7 = 8 (improved from 14). Anxiety symptoms reduced but residual mild worry remains.",
        "flag": "warn"
      },
      {
        "name": "3. Tobacco Use Disorder â€” Preparation Stage",
        "detail": "Smokes 4 cigarettes/day (down from 6). Ready to set a quit date within 2 weeks.",
        "flag": "info"
      }
    ],
    "ALLERGIES": [
      {
        "substance": "No known drug allergies",
        "reaction": "—"
      }
    ],
    "MEDICATIONS": [
      {
        "name": "Generic Sertraline",
        "dose": "100 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "MDD / GAD",
        "notes": "100% adherent on $4 program with breakfast routine; partial response; well tolerated."
      },
      {
        "name": "Hydroxyzine",
        "dose": "25 mg",
        "route": "by mouth",
        "freq": "every 8 hours as needed",
        "indication": "Anxiety PRN",
        "notes": "Used 1-2 times per week for acute anxiety; helpful, well tolerated."
      },
      {
        "name": "Ethinyl estradiol / Norgestimate",
        "dose": "0.035 mg / 0.25 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "Contraception",
        "notes": "Oral contraceptive pill."
      }
    ],
    "IMMUNIZATIONS": [
      {
        "name": "Influenza",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "COVID-19",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "Tdap",
        "status": "Up to date (received)",
        "flag": "normal"
      }
    ],
    "SUBJECTIVE_DOCUMENTED": [
      {
        "label": "HPI",
        "value": "42-year-old female medical receptionist (divorced, 2 children) presenting for 6-week follow-up after switching to generic Sertraline 100 mg daily ($4 program). Confirms 100% daily adherence taking medication with breakfast and phone alarm. Reports significant reduction in worry, improved sleep, improved patience with children, and better work focus. Residual symptoms include mild fatigue and occasional low motivation. Hydroxyzine 25 mg PRN helps with occasional anxiety. Participates in virtual CBT sessions. Tolerating medication well with no side effects."
      },
      {
        "label": "Review of Systems (ROS) & Safety Assessment",
        "value": "Psychiatric ROS: Explicitly denies SI, denies plan, denies intent (low risk). Denies HI, denies self-harm, denies mania, hypomania, panic attacks, hallucinations, or delusions."
      },
      {
        "label": "Scores & Screening Tools",
        "value": "PHQ-9 score: 9 (Mild Depression, down from 16). GAD-7 score: 7 (Mild Anxiety, down from 14)."
      },
      {
        "label": "Past Medical History & Surgeries",
        "value": "PMH: MDD, GAD, Tobacco Use Disorder. PSH: Denies prior surgeries."
      },
      {
        "label": "Social History",
        "value": "Works full-time as medical receptionist. Divorced, lives with 2 children. Smokes ~5 cigarettes/day (down from ~10). Expresses readiness to set a quit date within the next 30 days (Preparation stage). Walks several times weekly. Denies alcohol abuse and illicit drug use. Telehealth improves appointment attendance. Immunizations up to date. NKDA."
      },
      {
        "label": "Family History",
        "value": "Mother: MDD. Father: Alcohol Use Disorder. Sister: GAD."
      }
    ],
    "OBJECTIVE_EXTRA": {
      "Mental Status Exam (MSE)": "Alert, oriented x4. Mood: 'improving, brighter'. Affect: full range, congruent. Speech: normal. Thought process: logical, goal-directed. Cognition: intact."
    },
    "INTERVIEW_FIELDS": [
      {
        "field": "adherence_confirm",
        "label": "Confirmation of 100% adherence"
      },
      {
        "field": "side_effects",
        "label": "Medication tolerability check"
      },
      {
        "field": "quit_date",
        "label": "Tobacco quit date agreement"
      }
    ],
    "INTERVIEW_KNOWLEDGE": [
      {
        "id": "w5-jessica_r-wed_ik_adherence_confirm",
        "topic": "Confirmation of 100% adherence",
        "field": "adherence_confirm",
        "keywords": [
          "adherence_confirm",
          "confirmation",
          "100%",
          "adherence",
          "adhere",
          "take",
          "miss",
          "skip",
          "forget",
          "daily",
          "pill",
          "dose",
          "regularly"
        ],
        "response": "I haven't missed a single dose of Sertraline 50 mg since we switched to the $4 program 6 weeks ago."
      },
      {
        "id": "w5-jessica_r-wed_ik_side_effects",
        "topic": "Medication tolerability check",
        "field": "side_effects",
        "keywords": [
          "side_effects",
          "medication",
          "tolerability",
          "check",
          "side effect",
          "stomach",
          "headache",
          "sleep",
          "bother",
          "adverse",
          "suicide",
          "die",
          "hurt",
          "kill",
          "end",
          "wish",
          "better off",
          "wishing"
        ],
        "response": "No side effects at all â€” no stomach upset, no headaches, no sleep issues."
      },
      {
        "id": "w5-jessica_r-wed_ik_quit_date",
        "topic": "Tobacco quit date agreement",
        "field": "quit_date",
        "keywords": [
          "quit_date",
          "tobacco",
          "quit",
          "date",
          "agreement",
          "smoke",
          "smoking",
          "cigarette",
          "cigar",
          "vape",
          "craving",
          "abstinence"
        ],
        "response": "I'm ready to quit smoking! I want to set a quit date for 2 weeks from today."
      }
    ],
    "ASSESSMENT_CARDS": [
      {
        "id": "w5b_wed_a1",
        "title": "1. MDD & GAD Partial Response Evaluation",
        "icon": "Brain",
        "color": "13314f",
        "questions": [
          {
            "key": "q1",
            "q": "What is the assessment of treatment response and titration strategy?",
            "defaultAnswer": "MDD (PHQ-9 = 10) and GAD (GAD-7 = 8) show partial response to 6 weeks of 100% adherent Sertraline 50 mg daily. Per ACP and VA/DoD guidelines, partial response with good tolerability warrants dose titration to Sertraline 100 mg daily to achieve full clinical remission."
          }
        ]
      },
      {
        "id": "w5b_wed_a2",
        "title": "2. Tobacco Cessation (Preparation Stage)",
        "icon": "Cigarette",
        "color": "13314f",
        "questions": [
          {
            "key": "q2",
            "q": "What is the tobacco status and intervention plan?",
            "defaultAnswer": "Active Tobacco Use Disorder (4 cigs/day), now in Preparation stage of change. Patient is motivated and ready to set a target quit date within 2 weeks."
          }
        ]
      }
    ],
    "PLAN_SECTIONS": [
      {
        "id": "w5b_wed_p1",
        "title": "1. Sertraline Dose Titration Plan",
        "options": [
          {
            "key": "o1",
            "label": "Increase Sertraline from 50 mg PO daily to target dose of 100 mg PO daily to target full remission of MDD and GAD",
            "correct": true
          },
          {
            "key": "o2",
            "label": "Counsel patient on expected 2-4 week timeline for onset of additional therapeutic response from dose increase",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_wed_p2",
        "title": "2. Tobacco Cessation Plan (Preparation Stage)",
        "options": [
          {
            "key": "o3",
            "label": "Establish target tobacco quit date within 2 weeks",
            "correct": true
          },
          {
            "key": "o4",
            "label": "Provide behavioral counseling for tobacco cessation: identify smoking triggers, substitute healthy coping strategies, remove ash trays and cigarettes from home/car",
            "correct": true
          },
          {
            "key": "o5",
            "label": "Offer OTC Nicotine Replacement Therapy (NRT patch 14 mg/24hr or NRT gum 2 mg) as pharmacotherapy option for quit date",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_wed_p3",
        "title": "3. Follow-Up Plan",
        "options": [
          {
            "key": "o6",
            "label": "Schedule follow-up visit in 6 weeks to evaluate remission status on Sertraline 100 mg daily and tobacco cessation outcome",
            "correct": true
          }
        ]
      }
    ],
    "PLAN_FREETEXT": [
      {
        "key": "monitoring",
        "label": "Monitoring plan",
        "placeholder": "Labs, vitals, and follow-up intervals…"
      },
      {
        "key": "followUp",
        "label": "Follow-up",
        "placeholder": "When should the patient return and why?"
      }
    ],
    "GUIDING_QUESTIONS": [],
    "COUNSELING": [
      "Educate on rationale for titrating Sertraline 50 mg â†’ 100 mg daily to achieve full remission.",
      "Counsel on maintaining 100% adherence and monitoring for transient GI side effects.",
      "Confirm tobacco quit date (2 weeks out) and discuss behavioral coping strategies & NRT options."
    ],
    "PRECEPTOR": {
      "keyIssues": [],
      "assessment": [],
      "plan": [],
      "pearls": [],
      "mistakes": [],
      "followupQuestions": [],
      "checklist": []
    },
    "INTERVIEW_SYSTEM_PROMPT": ""
  },
  {
    "id": "w5-jessica_r-thu",
    "PATIENT": {
      "name": "Jessica Ramirez",
      "age": 42,
      "sex": "female",
      "ethnicity": "Hispanic / Latina",
      "mrn": "W5-20441",
      "setting": "Ambulatory Behavioral Health Clinic",
      "dob": "11/03/1983"
    },
    "ENCOUNTER": {
      "day": "Thursday",
      "week": "Week 5",
      "type": "12-Week Follow-Up Visit (Remission & Maintenance)",
      "chiefConcern": "I feel fantastic! Sertraline 100 mg daily has brought me back to my normal self, virtual CBT helped me reframe stress, and I've reduced smoking to only 1-2 cigarettes a week!",
      "snapshotSummary": "Jessica presents for 12-week follow-up (6 weeks post prior visit on Sertraline 100 mg daily). Full remission achieved: PHQ-9 = 3 (minimal symptoms), GAD-7 = 2 (minimal symptoms). Tobacco use near abstinence (1-2 cigarettes/week). Plan: Continue Sertraline 100 mg daily for maintenance (minimum 6-12 months per ACP/VA-DoD guidelines), continue hydroxyzine PRN, continue virtual CBT, reinforce tobacco abstinence coping, follow-up in 3-6 months with repeat scales.",
      "difficulty": "Intermediate",
      "difficultyTone": "blue",
      "diseaseStates": [
        "MDD (Full Remission)",
        "GAD (Full Remission)",
        "Tobacco Cessation (Early Remission)"
      ],
      "learningObjectives": [
        "Confirm full MDD/GAD remission",
        "Establish maintenance therapy plan (minimum 6-12 months per ACP/VA-DoD)",
        "Counsel on relapse prevention and tobacco abstinence maintenance"
      ],
      "visitDate": "12/02/2026"
    },
    "VITALS": {
      "bp": "120/74 mmHg",
      "bpRepeat": "116/72 mmHg",
      "hr": "74 bpm",
      "rr": "16 breaths/min",
      "temp": "98.0°F",
      "weight": "171 lbs",
      "height": "64 inches",
      "bmi": "29.4 kg/m²",
      "flags": {
        "bmi": "overweight"
      },
      "extras": [],
      "vitalsTime": "12/02/2026 10:00"
    },
    "LABS": [
      {
        "label": "Sodium",
        "value": "139",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Potassium",
        "value": "4.0",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Chloride",
        "value": "100",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Bicarbonate",
        "value": "25",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "BUN",
        "value": "13",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Serum Creatinine",
        "value": "0.8",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "eGFR",
        "value": ">90",
        "unit": "mL/min/1.73m²",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Glucose",
        "value": "92",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "AST",
        "value": "20",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "ALT",
        "value": "21",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      }
    ],
    "ALERTS": [
      {
        "level": "info",
        "text": "Full clinical remission achieved: PHQ-9 = 3, GAD-7 = 3. Continue Sertraline 100 mg daily for maintenance phase (minimum 6-12 months)."
      },
      {
        "level": "info",
        "text": "Tobacco Cessation: Successful abstinence for 4 weeks (early remission status). Support continued tobacco-free lifestyle."
      }
    ],
    "PROBLEMS": [
      {
        "name": "1. Major Depressive Disorder (MDD) â€” In Full Remission",
        "detail": "PHQ-9 = 3. Complete resolution of depressive symptoms.",
        "flag": "normal"
      },
      {
        "name": "2. Generalized Anxiety Disorder (GAD) â€” In Full Remission",
        "detail": "GAD-7 = 3. Complete resolution of anxiety symptoms.",
        "flag": "normal"
      },
      {
        "name": "3. Tobacco Use Disorder â€” Early Remission",
        "detail": "Abstinent 4 weeks. Continuing relapse prevention and lifestyle support.",
        "flag": "normal"
      }
    ],
    "ALLERGIES": [
      {
        "substance": "No known drug allergies",
        "reaction": "—"
      }
    ],
    "MEDICATIONS": [
      {
        "name": "Generic Sertraline",
        "dose": "100 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "MDD / GAD",
        "notes": "100% adherent with breakfast routine; full remission; excellent tolerability."
      },
      {
        "name": "Hydroxyzine",
        "dose": "25 mg",
        "route": "by mouth",
        "freq": "every 8 hours as needed",
        "indication": "Anxiety PRN",
        "notes": "Rarely needed; available for acute situational anxiety."
      },
      {
        "name": "Ethinyl estradiol / Norgestimate",
        "dose": "0.035 mg / 0.25 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "Contraception",
        "notes": "Oral contraceptive pill."
      }
    ],
    "IMMUNIZATIONS": [
      {
        "name": "Influenza",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "COVID-19",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "Tdap",
        "status": "Up to date (received)",
        "flag": "normal"
      }
    ],
    "SUBJECTIVE_DOCUMENTED": [
      {
        "label": "HPI",
        "value": "42-year-old female medical receptionist (divorced, 2 children) presenting for 12-week follow-up (6 weeks on established Sertraline 100 mg daily). Reports sustained resolution of depressive and anxiety symptoms. Energy, concentration, motivation, sleep, and work performance returned to baseline. Denies any medication side effects. Attends virtual CBT regularly. Reduced tobacco to 1-2 cigarettes/week, using deep breathing and walking during stress."
      },
      {
        "label": "Review of Systems (ROS) & Safety Assessment",
        "value": "Psychiatric ROS: Explicitly denies SI, denies plan, denies intent, denies suicide attempts (low risk). Denies HI, denies self-harm, denies mania, hypomania, panic attacks, hallucinations, or delusions."
      },
      {
        "label": "Scores & Screening Tools",
        "value": "PHQ-9 score: 3 (Minimal depressive symptoms / Remission, down from 16 initial and 9 at 3-mo). GAD-7 score: 2 (Minimal anxiety symptoms / Remission, down from 14 initial and 7 at 3-mo)."
      },
      {
        "label": "Past Medical History & Surgeries",
        "value": "PMH: MDD, GAD, Tobacco Use Disorder. PSH: Denies prior surgeries."
      },
      {
        "label": "Social History",
        "value": "Full-time medical receptionist. Divorced, lives with 2 children. Smokes 1-2 cigarettes/week (down from ~10). Uses deep breathing, walking, and active engagement with children for stress management. Occasional alcohol use. Denies illicit drugs. Telehealth improves access. Immunizations up to date. NKDA."
      },
      {
        "label": "Family History",
        "value": "Mother: MDD. Father: Alcohol Use Disorder. Sister: GAD."
      }
    ],
    "OBJECTIVE_EXTRA": {
      "Mental Status Exam (MSE)": "Alert, oriented x4. Mood: 'euthymic, great'. Affect: bright, full range. Speech: normal. Thought process: logical. Cognition: intact."
    },
    "INTERVIEW_FIELDS": [
      {
        "field": "remission_status",
        "label": "Subjective remission confirmation"
      },
      {
        "field": "tobacco_abstinence",
        "label": "4-week tobacco abstinence validation"
      },
      {
        "field": "duration_question",
        "label": "Maintenance therapy duration inquiry"
      }
    ],
    "INTERVIEW_KNOWLEDGE": [
      {
        "id": "w5-jessica_r-thu_ik_remission_status",
        "topic": "Subjective remission confirmation",
        "field": "remission_status",
        "keywords": [
          "remission_status",
          "subjective",
          "remission",
          "confirmation",
          "better",
          "feel",
          "normal",
          "100%",
          "back",
          "trd",
          "suicide",
          "die",
          "hurt",
          "kill",
          "end",
          "wish",
          "better off",
          "wishing"
        ],
        "response": "I feel 100% back to my old self. I'm enjoying work, spending time with family, and sleeping great."
      },
      {
        "id": "w5-jessica_r-thu_ik_tobacco_abstinence",
        "topic": "4-week tobacco abstinence validation",
        "field": "tobacco_abstinence",
        "keywords": [
          "tobacco_abstinence",
          "week",
          "tobacco",
          "abstinence",
          "validation",
          "smoke",
          "smoking",
          "cigarette",
          "cigar",
          "vape",
          "quit",
          "craving"
        ],
        "response": "I haven't smoked a single cigarette in 4 weeks! The cravings were tough at first, but now I don't even think about it."
      },
      {
        "id": "w5-jessica_r-thu_ik_duration_question",
        "topic": "Maintenance therapy duration inquiry",
        "field": "duration_question",
        "keywords": [
          "duration_question",
          "maintenance",
          "therapy",
          "duration",
          "inquiry",
          "long",
          "continue",
          "stay",
          "how long",
          "months",
          "keep taking"
        ],
        "response": "How long should I stay on Sertraline 100 mg daily now that I'm feeling better?"
      }
    ],
    "ASSESSMENT_CARDS": [
      {
        "id": "w5b_thu_a1",
        "title": "1. Full Remission Assessment & Maintenance Duration Rationale",
        "icon": "Brain",
        "color": "13314f",
        "questions": [
          {
            "key": "q1",
            "q": "What is the assessment of remission and duration of maintenance therapy?",
            "defaultAnswer": "MDD (PHQ-9 = 3) and GAD (GAD-7 = 3) are in full clinical remission on Sertraline 100 mg daily. Per ACP and VA/DoD clinical practice guidelines, maintenance antidepressant pharmacotherapy must be continued at the effective therapeutic dose (100 mg daily) for a minimum of 6 to 12 months following initial remission to prevent relapse."
          }
        ]
      },
      {
        "id": "w5b_thu_a2",
        "title": "2. Tobacco Cessation Early Remission Status",
        "icon": "Cigarette",
        "color": "13314f",
        "questions": [
          {
            "key": "q2",
            "q": "What is the tobacco cessation status and relapse prevention plan?",
            "defaultAnswer": "Tobacco Use Disorder in early remission (4 weeks of confirmed tobacco abstinence). Relapse risk remains elevated during early remission (< 12 months), requiring continued behavioral reinforcement and coping strategy maintenance."
          }
        ]
      }
    ],
    "PLAN_SECTIONS": [
      {
        "id": "w5b_thu_p1",
        "title": "1. Maintenance Pharmacotherapy Plan",
        "options": [
          {
            "key": "o1",
            "label": "CONTINUE Sertraline 100 mg PO daily for maintenance therapy for a minimum of 6 to 12 months post-remission per ACP/VA-DoD guidelines",
            "correct": true
          },
          {
            "key": "o2",
            "label": "Explicitly counsel patient on the risk of depressive relapse and antidepressant discontinuation syndrome if medication is abruptly stopped",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_thu_p2",
        "title": "2. Relapse Prevention & Tobacco Abstinence Plan",
        "options": [
          {
            "key": "o3",
            "label": "Congratulate patient on 4 weeks of tobacco abstinence; reinforce stress-management coping strategies and triggers for relapse prevention",
            "correct": true
          },
          {
            "key": "o4",
            "label": "Provide education on early warning signs of depressive/anxiety relapse (sleep disturbance, persistent low mood, loss of interest, irritability)",
            "correct": true
          }
        ]
      },
      {
        "id": "w5b_thu_p3",
        "title": "3. Follow-Up & Longitudinal Monitoring Plan",
        "options": [
          {
            "key": "o5",
            "label": "Schedule follow-up visit in 3 to 6 months for longitudinal maintenance monitoring, repeating PHQ-9 and GAD-7 assessments",
            "correct": true
          }
        ]
      }
    ],
    "PLAN_FREETEXT": [
      {
        "key": "monitoring",
        "label": "Monitoring plan",
        "placeholder": "Labs, vitals, and follow-up intervals…"
      },
      {
        "key": "followUp",
        "label": "Follow-up",
        "placeholder": "When should the patient return and why?"
      }
    ],
    "GUIDING_QUESTIONS": [],
    "COUNSELING": [
      "Educate patient that antidepressant maintenance therapy must continue for at least 6-12 months post-remission to prevent relapse.",
      "Warn against abrupt discontinuation of Sertraline (risk of discontinuation syndrome and depressive relapse).",
      "Congratulate on 4 weeks of tobacco abstinence and reinforce long-term relapse prevention strategies."
    ],
    "PRECEPTOR": {
      "keyIssues": [],
      "assessment": [],
      "plan": [],
      "pearls": [],
      "mistakes": [],
      "followupQuestions": [],
      "checklist": []
    },
    "INTERVIEW_SYSTEM_PROMPT": ""
  },
  {
    "id": "w5-david_c-tue",
    "PATIENT": {
      "name": "David Carter",
      "age": 51,
      "sex": "male",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "mrn": "W5-30882",
      "setting": "Ambulatory Behavioral Health Clinic"
    },
    "ENCOUNTER": {
      "day": "Tuesday",
      "week": "Week 5",
      "type": "TRD & Safety Evaluation - Ambulatory Behavioral Health Clinic",
      "chiefConcern": "I've tried so many depression meds and nothing works long-term. I wake up every day wishing I didn't have to face another day. Everyone would be better off without me.",
      "snapshotSummary": "David is a 51-year-old male IT manager (separated, lives alone) referred for collaborative management of severe recurrent MDD / Treatment-Resistant Depression (PHQ-9 = 21) and severe GAD (GAD-7 = 18). Has failed trials of Escitalopram 20 mg (8 wks), Sertraline 150 mg (6 mos), Duloxetine 60 mg (10 wks), and current Venlafaxine XR 150 mg (12 wks). Expresses passive SI (Item 9 = 1) without active plan/intent. Lethal means safety plan executed (hunting rifles placed in brother's gun safe; 988 Lifeline provided). Plan: Initiate Aripiprazole 2 mg daily augmentation to Venlafaxine XR 150 mg per APA/VA-DoD guidelines.",
      "difficulty": "Advanced",
      "difficultyTone": "purple",
      "diseaseStates": [
        "Recurrent Severe MDD (Treatment-Resistant Depression)",
        "Severe GAD",
        "Passive Suicidal Ideation (Low Imminent Risk)",
        "Tobacco Use Disorder (~1 pack/day)"
      ],
      "learningObjectives": [
        "Evaluate Treatment-Resistant Depression (TRD) after multiple adequate antidepressant failures",
        "Perform comprehensive suicide risk evaluation and execute lethal means safety plan",
        "Initiate evidence-based augmentation therapy with Aripiprazole 2 mg PO daily",
        "Address tobacco use disorder and social determinants of health"
      ],
      "visitDate": "09/09/2026"
    },
    "VITALS": {
      "bp": "126/80 mmHg",
      "bpRepeat": "122/78 mmHg",
      "hr": "84 bpm",
      "rr": "16 breaths/min",
      "temp": "98.3°F",
      "weight": "211 lbs",
      "height": "71 inches",
      "bmi": "29.5 kg/m²",
      "flags": {
        "bmi": "overweight"
      },
      "extras": [],
      "vitalsTime": "09/09/2026 11:30"
    },
    "LABS": [
      {
        "label": "Sodium",
        "value": "140",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Potassium",
        "value": "4.1",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Chloride",
        "value": "102",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Bicarbonate",
        "value": "25",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "BUN",
        "value": "16",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Serum Creatinine",
        "value": "1.0",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "eGFR",
        "value": "89",
        "unit": "mL/min/1.73m²",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Glucose",
        "value": "99",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "TSH",
        "value": "1.8",
        "unit": "mIU/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "AST",
        "value": "24",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "ALT",
        "value": "26",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "WBC",
        "value": "6.2",
        "unit": "x10³/μL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Hgb",
        "value": "14.5",
        "unit": "g/dL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      },
      {
        "label": "Plt",
        "value": "250",
        "unit": "x10³/μL",
        "flag": "normal",
        "labDate": "09/09/2026 08:00"
      }
    ],
    "ALERTS": [
      {
        "level": "high",
        "text": "Treatment-Resistant Depression (TRD) with Severe Depression (PHQ-9 = 21) and Severe Anxiety (GAD-7 = 18). Failed Sertraline 150 mg (inadequate response/tolerability) and Duloxetine 60 mg (no benefit). Currently failing Venlafaxine XR 150 mg daily x 8 weeks."
      },
      {
        "level": "high",
        "text": "Passive Suicidal Ideation present ('everyone would be better off without me'). Suicide risk assessment indicates LOW to MODERATE acute risk (no active plan/intent). Immediate safety plan and lethal means counseling required."
      },
      {
        "level": "info",
        "text": "Tobacco Use Disorder: Smokes 15 cigarettes/day for 20 years (15 pack-years). Contemplative stage."
      }
    ],
    "PROBLEMS": [
      {
        "name": "1. Major Depressive Disorder (MDD) â€” Severe, Treatment-Resistant",
        "detail": "PHQ-9 = 21. Failed sertraline and duloxetine; inadequate response to venlafaxine XR 150 mg daily x 8 weeks.",
        "flag": "high"
      },
      {
        "name": "2. Generalized Anxiety Disorder (GAD) â€” Severe",
        "detail": "GAD-7 = 18. Severe persistent worry, panic-like tension, sleep disturbance.",
        "flag": "high"
      },
      {
        "name": "3. Passive Suicidal Ideation â€” Active",
        "detail": "Passive SI ('family better off without me'). Low-to-moderate risk; no active plan or intent. Firearms at home require offsite transfer.",
        "flag": "high"
      },
      {
        "name": "4. Tobacco Use Disorder â€” Active, Contemplative Stage",
        "detail": "Smokes 15 cigarettes/day for 20 years (15 pack-years). Contemplative stage.",
        "flag": "warn"
      },
      {
        "name": "5. Overweight",
        "detail": "BMI 26.5 kg/mÂ².",
        "flag": "info"
      }
    ],
    "ALLERGIES": [
      {
        "substance": "No known drug allergies",
        "reaction": "—"
      }
    ],
    "MEDICATIONS": [
      {
        "name": "Venlafaxine XR",
        "dose": "150 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "MDD / GAD",
        "notes": "Current trial x 12 weeks; 100% adherent; mild anxiety benefit but persistent severe depressive symptoms."
      },
      {
        "name": "Hydroxyzine",
        "dose": "25 mg",
        "route": "by mouth",
        "freq": "every 8 hours as needed",
        "indication": "Anxiety PRN",
        "notes": "Prescribed for acute anxiety; well tolerated."
      },
      {
        "name": "Lisinopril",
        "dose": "20 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "Hypertension",
        "notes": "BP well controlled."
      }
    ],
    "IMMUNIZATIONS": [
      {
        "name": "Influenza",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "COVID-19",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "Tdap",
        "status": "Up to date (received)",
        "flag": "normal"
      }
    ],
    "SUBJECTIVE_DOCUMENTED": [
      {
        "label": "HPI",
        "value": "51-year-old male IT manager (separated, living alone) presenting for initial evaluation in behavioral health clinic for severe recurrent MDD (~1 year progressive worsening) and severe GAD despite multiple antidepressant trials: Escitalopram 20 mg (8 wks), Sertraline 150 mg (6 mos, stopped for GI distress), Duloxetine 60 mg (10 wks), and current Venlafaxine XR 150 mg daily (12 wks). Reports persistent profound sadness, total anhedonia, severe fatigue, low motivation, social withdrawal, loss of interest in hobbies (woodworking, hiking), and excessive worry impairing work performance. Reports passive SI ('wake up wishing I didn't face another day'). Explicitly denies active intent, plan, or desire to die ('I don't want to die, I'm just tired of feeling this way'). Lethal means safety assessment: owns two hunting rifles stored in home safe; agreed to have brother take rifles and keep them locked at his house today. Provided 988 Suicide & Crisis Lifeline."
      },
      {
        "label": "Review of Systems (ROS) & Safety Assessment",
        "value": "Psychiatric ROS & Safety: Explicitly denies active suicidal intent, denies active plan, denies suicide attempts, denies preparatory behaviors, denies self-harm (low imminent risk; does not meet criteria for emergency hospitalization). Denies homicidal ideation (HI). Denies mania, hypomania, psychosis, panic attacks."
      },
      {
        "label": "Scores & Screening Tools",
        "value": "PHQ-9 score: 21 (Severe Depression). GAD-7 score: 18 (Severe Anxiety). Item 9 (SI): 1 (Passive ideation)."
      },
      {
        "label": "Past Medical History & Surgeries",
        "value": "PMH: Recurrent MDD (TRD), GAD, Hypertension, Obstructive Sleep Apnea (OSA on CPAP), Tobacco Use Disorder. PSH: Cholecystectomy (prior gallbladder surgery)."
      },
      {
        "label": "Social History",
        "value": "IT Manager. Separated from wife, lives alone. Smokes ~1 pack/day (20 cigarettes/day) for 25 years (25 pack-years). Uses cigarettes as coping mechanism for emotional distress. Not ready for quit attempt due to depression severity. Drinks 1-2 beers on weekends. Denies illicit drug use. Immunizations up to date (Influenza, COVID-19, Tdap). NKDA."
      },
      {
        "label": "Family History",
        "value": "Mother: MDD. Father: Alcohol Use Disorder. Brother: MDD."
      }
    ],
    "OBJECTIVE_EXTRA": {
      "Mental Status Exam (MSE)": "Alert, oriented x4. Mood: 'depressed, overwhelmed'. Affect: blunted, tearful at times. Speech: slowed rate, low tone. Thought process: goal-directed, delayed latency. Thought content: passive SI present, worthlessness, no active plan/intent, no HI. Cognition: intact but slow processing."
    },
    "INTERVIEW_FIELDS": [
      {
        "field": "passive_si",
        "label": "Suicidal ideation intent & plan evaluation"
      },
      {
        "field": "lethal_means",
        "label": "Firearm and lethal means safety agreement"
      },
      {
        "field": "prior_trials",
        "label": "Detailed antidepressant trial history & failure confirmation"
      },
      {
        "field": "current_adherence",
        "label": "Venlafaxine XR adherence validation"
      }
    ],
    "INTERVIEW_KNOWLEDGE": [
      {
        "id": "w5-david_c-tue_ik_passive_si",
        "topic": "Suicidal ideation intent & plan evaluation",
        "field": "passive_si",
        "keywords": [
          "passive_si",
          "suicidal",
          "ideation",
          "intent",
          "plan",
          "evaluation",
          "suicide",
          "die",
          "hurt",
          "kill",
          "end",
          "wish",
          "better off",
          "wishing"
        ],
        "response": "I don't have a plan to hurt myself, but I just wake up wishing I didn't have to face another day. Everyone would be better off without me."
      },
      {
        "id": "w5-david_c-tue_ik_lethal_means",
        "topic": "Firearm and lethal means safety agreement",
        "field": "lethal_means",
        "keywords": [
          "lethal_means",
          "firearm",
          "and",
          "lethal",
          "means",
          "safety",
          "agreement",
          "rifle",
          "gun",
          "safe",
          "weapon",
          "home",
          "brother",
          "lock"
        ],
        "response": "I have two hunting rifles at home in a safe. My brother can take them and keep them locked at his house today."
      },
      {
        "id": "w5-david_c-tue_ik_prior_trials",
        "topic": "Detailed antidepressant trial history & failure confirmation",
        "field": "prior_trials",
        "keywords": [
          "prior_trials",
          "detailed",
          "antidepressant",
          "trial",
          "history",
          "failure",
          "confirmation",
          "prior",
          "past",
          "failed",
          "sertraline",
          "cymbalta",
          "effexor"
        ],
        "response": "I took Sertraline 150 mg for 3 months (didn't help and gave me stomach issues) and Cymbalta 60 mg for 2.5 months (no change at all)."
      },
      {
        "id": "w5-david_c-tue_ik_current_adherence",
        "topic": "Venlafaxine XR adherence validation",
        "field": "current_adherence",
        "keywords": [
          "current_adherence",
          "venlafaxine",
          "adherence",
          "validation",
          "adhere",
          "take",
          "miss",
          "skip",
          "forget",
          "daily",
          "pill",
          "dose",
          "regularly"
        ],
        "response": "I take my Effexor XR 150 mg every single morning with breakfast. I haven't missed a dose."
      }
    ],
    "ASSESSMENT_CARDS": [
      {
        "id": "w5c_tue_a1",
        "title": "1. Severe Treatment-Resistant Depression (TRD) & Augmentation Rationale",
        "icon": "Brain",
        "color": "13314f",
        "questions": [
          {
            "key": "q1",
            "q": "What is the evaluation of TRD and justification for SGA augmentation?",
            "defaultAnswer": "Major Depressive Disorder, Severe (PHQ-9 = 21) meeting criteria for Treatment-Resistant Depression (TRD) following failure of â‰¥2 adequate antidepressant trials from different classes (Sertraline [SSRI], Duloxetine [SNRI], and partial/non-response to Venlafaxine XR 150 mg daily [SNRI] x 8 weeks). Per APA, VA/DoD, and CANMAT guidelines, augmentation with a second-generation antipsychotic (Aripiprazole 2 mg PO daily) is a first-line evidence-based strategy to enhance response without switching agents."
          }
        ]
      },
      {
        "id": "w5c_tue_a2",
        "title": "2. Comprehensive Suicide Risk Assessment & Safety Plan",
        "icon": "ShieldAlert",
        "color": "13314f",
        "questions": [
          {
            "key": "q2",
            "q": "What is the suicide risk level and safety management plan?",
            "defaultAnswer": "Passive suicidal ideation present ('family better off without me') without active plan or intent; overall suicide risk assessed as LOW to MODERATE. Requires immediate safety planning: (1) lethal means restriction (moving firearms offsite), (2) providing 988 Suicide & Crisis Lifeline, and (3) establishing emergency contact protocols."
          }
        ]
      },
      {
        "id": "w5c_tue_a3",
        "title": "3. Tobacco Use Disorder (Contemplative Stage)",
        "icon": "Cigarette",
        "color": "13314f",
        "questions": [
          {
            "key": "q3",
            "q": "What is the tobacco cessation plan?",
            "defaultAnswer": "Active Tobacco Use Disorder (15 cigs/day, 15 pack-years), contemplative stage. Motivational interviewing recommended."
          }
        ]
      }
    ],
    "PLAN_SECTIONS": [
      {
        "id": "w5c_tue_p1",
        "title": "1. TRD Pharmacotherapy Augmentation Plan",
        "options": [
          {
            "key": "o1",
            "label": "Initiate Aripiprazole 2 mg PO daily as low-dose SGA augmentation to current Venlafaxine XR 150 mg PO daily for Treatment-Resistant Depression",
            "correct": true
          },
          {
            "key": "o2",
            "label": "Continue Venlafaxine XR 150 mg PO daily (do not discontinue or switch SNRI while initiating augmentation)",
            "correct": true
          },
          {
            "key": "o3",
            "label": "Monitor for Aripiprazole side effects, specifically akathisia (motor restlessness), extrapyramidal symptoms (EPS), weight gain, and metabolic changes (baseline lipids/glucose on file)",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_tue_p2",
        "title": "2. Suicide Risk & Lethal Means Safety Plan",
        "options": [
          {
            "key": "o4",
            "label": "Formulate comprehensive written Suicide Safety Plan: identify personal warning signs, internal coping strategies, family support contacts, and emergency resources",
            "correct": true
          },
          {
            "key": "o5",
            "label": "Provide 988 Suicide & Crisis Lifeline contact information and clinic emergency contact number",
            "correct": true
          },
          {
            "key": "o6",
            "label": "Enforce lethal means safety: counsel and confirm transfer of all household firearms and ammunition locked offsite to brother's residence",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_tue_p3",
        "title": "3. Tobacco Cessation Counseling Plan",
        "options": [
          {
            "key": "o7",
            "label": "Provide motivational interviewing for tobacco cessation (contemplative stage); reassess readiness at next visit",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_tue_p4",
        "title": "4. Follow-Up Plan",
        "options": [
          {
            "key": "o8",
            "label": "Schedule close follow-up visit in 6 weeks (with telephone safety check-in at 1-2 weeks) to monitor SI, mood response, and aripiprazole tolerability",
            "correct": true
          }
        ]
      }
    ],
    "PLAN_FREETEXT": [
      {
        "key": "monitoring",
        "label": "Monitoring plan",
        "placeholder": "Labs, vitals, and follow-up intervals…"
      },
      {
        "key": "followUp",
        "label": "Follow-up",
        "placeholder": "When should the patient return and why?"
      }
    ],
    "GUIDING_QUESTIONS": [],
    "COUNSELING": [
      "Develop written Suicide Safety Plan including warning signs, coping strategies, family support, and 988 Crisis Lifeline.",
      "Counsel on lethal means restriction: confirm firearms moved offsite to brother's house.",
      "Educate on Aripiprazole 2 mg daily augmentation rationale for TRD and expected onset (1-2 weeks).",
      "Counsel on monitoring for akathisia (motor restlessness), weight changes, and metabolic parameters.",
      "Motivational interviewing for tobacco cessation (contemplative stage)."
    ],
    "PRECEPTOR": {
      "keyIssues": [],
      "assessment": [],
      "plan": [],
      "pearls": [],
      "mistakes": [],
      "followupQuestions": [],
      "checklist": []
    },
    "INTERVIEW_SYSTEM_PROMPT": ""
  },
  {
    "id": "w5-david_c-wed",
    "PATIENT": {
      "name": "David Carter",
      "age": 51,
      "sex": "male",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "mrn": "W5-30882",
      "setting": "Ambulatory Behavioral Health Clinic"
    },
    "ENCOUNTER": {
      "day": "Wednesday",
      "week": "Week 5",
      "type": "6-Week Follow-Up Visit (Post-TRD Augmentation)",
      "chiefConcern": "The combination of Venlafaxine XR 150 mg and Aripiprazole 2 mg is working remarkably well! My mood and energy are so much better, suicidal thoughts are completely gone, and I feel hopeful for the first time in years.",
      "snapshotSummary": "David returns for 6-week follow-up post Aripiprazole 2 mg daily augmentation to Venlafaxine XR 150 mg daily. Demonstrates clinically meaningful improvement: PHQ-9 reduced from 21 to 12 (moderate), GAD-7 reduced from 18 to 9 (mild-moderate), SI completely resolved (Item 9 = 0). Tolerating well with no akathisia or sedation. Smokes ~half pack/day (10 cigarettes/day, down from 20). Plan: CONTINUE Venlafaxine XR 150 mg + Aripiprazole 2 mg daily per APA/VA-DoD guidelines; continue CBT; reinforce tobacco reduction.",
      "difficulty": "Advanced",
      "difficultyTone": "purple",
      "diseaseStates": [
        "Recurrent MDD (Partial Response / Improving)",
        "GAD (Partial Response / Mild-Moderate)",
        "SI (Resolved)",
        "Tobacco Use Disorder (Preparation Stage)"
      ],
      "learningObjectives": [
        "Assess therapeutic response to atypical antipsychotic augmentation in TRD",
        "Screen for EPS/akathisia and metabolic changes from Aripiprazole 2 mg daily",
        "Confirm resolution of suicidal ideation and reinforce safety plan",
        "Support ongoing smoking reduction and CBT engagement"
      ],
      "visitDate": "10/21/2026"
    },
    "VITALS": {
      "bp": "126/80 mmHg",
      "bpRepeat": "122/78 mmHg",
      "hr": "78 bpm",
      "rr": "16 breaths/min",
      "temp": "98.1°F",
      "weight": "216 lbs",
      "height": "71 inches",
      "bmi": "30.1 kg/m²",
      "flags": {
        "bmi": "obese"
      },
      "extras": [],
      "vitalsTime": "10/21/2026 11:30"
    },
    "LABS": [
      {
        "label": "Sodium",
        "value": "139",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Potassium",
        "value": "4.0",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Chloride",
        "value": "101",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Bicarbonate",
        "value": "24",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "BUN",
        "value": "16",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Serum Creatinine",
        "value": "1.0",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "eGFR",
        "value": "89",
        "unit": "mL/min/1.73m²",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Glucose (fasting)",
        "value": "101",
        "unit": "mg/dL",
        "flag": "warn",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Total Cholesterol",
        "value": "188",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "Triglycerides",
        "value": "176",
        "unit": "mg/dL",
        "flag": "warn",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "LDL-C",
        "value": "106",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      },
      {
        "label": "HDL-C",
        "value": "45",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "10/21/2026 08:00"
      }
    ],
    "ALERTS": [
      {
        "level": "info",
        "text": "Significant clinical response to Venlafaxine XR 150 mg + Aripiprazole 2 mg daily: PHQ-9 improved to 12 (down from 21), GAD-7 improved to 9 (down from 18)."
      },
      {
        "level": "info",
        "text": "Suicidal Ideation: Completely RESOLVED (PHQ-9 Item 9 = 0). Passive SI absent."
      }
    ],
    "PROBLEMS": [
      {
        "name": "1. Major Depressive Disorder (MDD) â€” Treatment Response",
        "detail": "PHQ-9 = 12 (down from 21). Significant clinical improvement on augmentation therapy.",
        "flag": "warn"
      },
      {
        "name": "2. Generalized Anxiety Disorder (GAD) â€” Treatment Response",
        "detail": "GAD-7 = 9 (down from 18). Mild residual anxiety.",
        "flag": "warn"
      },
      {
        "name": "3. Suicidal Ideation â€” Fully Resolved",
        "detail": "PHQ-9 Item 9 = 0. Passive SI absent.",
        "flag": "normal"
      },
      {
        "name": "4. Tobacco Use Disorder â€” Active",
        "detail": "Smokes 10 cigarettes/day (down from 15). Preparing to set quit date.",
        "flag": "info"
      }
    ],
    "ALLERGIES": [
      {
        "substance": "No known drug allergies",
        "reaction": "—"
      }
    ],
    "MEDICATIONS": [
      {
        "name": "Venlafaxine XR",
        "dose": "150 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "MDD / GAD",
        "notes": "100% adherent; continued combination therapy."
      },
      {
        "name": "Aripiprazole",
        "dose": "2 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "TRD Augmentation",
        "notes": "Initiated 6 weeks ago; 100% adherent; well tolerated with no EPS or akathisia."
      },
      {
        "name": "Hydroxyzine",
        "dose": "25 mg",
        "route": "by mouth",
        "freq": "every 8 hours as needed",
        "indication": "Anxiety PRN",
        "notes": "Used occasionally for anxiety spikes."
      },
      {
        "name": "Lisinopril",
        "dose": "20 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "Hypertension",
        "notes": "BP well controlled."
      }
    ],
    "IMMUNIZATIONS": [
      {
        "name": "Influenza",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "COVID-19",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "Tdap",
        "status": "Up to date (received)",
        "flag": "normal"
      }
    ],
    "SUBJECTIVE_DOCUMENTED": [
      {
        "label": "HPI",
        "value": "51-year-old male IT manager (separated, living alone) presenting for 6-week follow-up after adding Aripiprazole 2 mg daily to Venlafaxine XR 150 mg daily. Reports marked improvement in mood, energy, sleep, concentration, and motivation. Resumed woodworking projects and yard work for first time in months. Expresses feeling hopeful for first time in years ('I don't feel trapped anymore'). Suicidal ideation completely resolved. Denies restlessness, akathisia, muscle stiffness, or sedation."
      },
      {
        "label": "Review of Systems (ROS) & Safety Assessment",
        "value": "Psychiatric ROS: Explicitly denies active or passive suicidal ideation (SI = 0), denies plan, denies intent, denies desire to die, denies preparatory behaviors (low risk). Denies HI, denies self-harm, denies mania, hypomania, psychosis, panic attacks."
      },
      {
        "label": "Scores & Screening Tools",
        "value": "PHQ-9 score: 12 (Moderate Depression, down from 21). GAD-7 score: 9 (Mild-Moderate Anxiety, down from 18). Item 9 (SI): 0."
      },
      {
        "label": "Past Medical History & Surgeries",
        "value": "PMH: Recurrent MDD (TRD), GAD, Hypertension, OSA on CPAP, Tobacco Use Disorder. PSH: Cholecystectomy."
      },
      {
        "label": "Social History",
        "value": "IT Manager. Separated, lives alone. Smokes ~10 cigarettes/day (down from ~20). Interested in further smoking reduction. Attends CBT sessions. Immunizations up to date. NKDA."
      },
      {
        "label": "Family History",
        "value": "Mother: MDD. Father: AUD. Brother: MDD."
      }
    ],
    "OBJECTIVE_EXTRA": {
      "Mental Status Exam (MSE)": "Alert, oriented x4. Mood: 'much better, hopeful'. Affect: full range, congruent. Speech: normal rate and volume. Motor: no akathisia, no tremor, no rigidity, normal gait. Cognition: intact."
    },
    "INTERVIEW_FIELDS": [
      {
        "field": "response_confirm",
        "label": "Subjective response confirmation"
      },
      {
        "field": "si_status",
        "label": "Suicidal ideation resolution check"
      },
      {
        "field": "akathisia_check",
        "label": "Akathisia and EPS screening"
      }
    ],
    "INTERVIEW_KNOWLEDGE": [
      {
        "id": "w5-david_c-wed_ik_response_confirm",
        "topic": "Subjective response confirmation",
        "field": "response_confirm",
        "keywords": [
          "response_confirm",
          "subjective",
          "response",
          "confirmation",
          "working",
          "better",
          "combination",
          "abilify",
          "effexor"
        ],
        "response": "The combination of Effexor 150 and Abilify 2 mg is working really well. I feel light years better than 6 weeks ago."
      },
      {
        "id": "w5-david_c-wed_ik_si_status",
        "topic": "Suicidal ideation resolution check",
        "field": "si_status",
        "keywords": [
          "si_status",
          "suicidal",
          "ideation",
          "resolution",
          "check",
          "suicide",
          "die",
          "hurt",
          "kill",
          "end",
          "wish",
          "better off",
          "wishing"
        ],
        "response": "No suicidal thoughts at all. I am looking forward to the future and planning a family vacation."
      },
      {
        "id": "w5-david_c-wed_ik_akathisia_check",
        "topic": "Akathisia and EPS screening",
        "field": "akathisia_check",
        "keywords": [
          "akathisia_check",
          "akathisia",
          "and",
          "eps",
          "screening",
          "suicide",
          "die",
          "hurt",
          "kill",
          "end",
          "wish",
          "better off",
          "wishing",
          "restless",
          "pacing",
          "move",
          "feet"
        ],
        "response": "No restlessness or feeling like I need to pace around. I feel physically fine."
      }
    ],
    "ASSESSMENT_CARDS": [
      {
        "id": "w5c_wed_a1",
        "title": "1. TRD Response Assessment & Combination Therapy Rationale",
        "icon": "Brain",
        "color": "13314f",
        "questions": [
          {
            "key": "q1",
            "q": "What is the assessment of SGA augmentation efficacy and ongoing plan?",
            "defaultAnswer": "MDD (PHQ-9 = 12, 9-point reduction) and GAD (GAD-7 = 9, 9-point reduction) show robust clinical response to 6 weeks of Aripiprazole 2 mg daily augmentation with Venlafaxine XR 150 mg daily. Suicidal ideation is fully resolved (Item 9 = 0). Given significant response and excellent tolerability (no akathisia/EPS), current combination therapy should be maintained without dose adjustment."
          }
        ]
      },
      {
        "id": "w5c_wed_a2",
        "title": "2. Suicide Safety Maintenance",
        "icon": "ShieldAlert",
        "color": "13314f",
        "questions": [
          {
            "key": "q2",
            "q": "What is the ongoing safety status?",
            "defaultAnswer": "Suicidal ideation resolved. Safety plan remains active; firearms remain stored offsite."
          }
        ]
      }
    ],
    "PLAN_SECTIONS": [
      {
        "id": "w5c_wed_p1",
        "title": "1. Combination Pharmacotherapy Maintenance Plan",
        "options": [
          {
            "key": "o1",
            "label": "CONTINUE Venlafaxine XR 150 mg PO daily in combination with Aripiprazole 2 mg PO daily for TRD maintenance",
            "correct": true
          },
          {
            "key": "o2",
            "label": "Maintain current Aripiprazole dose of 2 mg PO daily given excellent therapeutic response and absence of side effects",
            "correct": true
          },
          {
            "key": "o3",
            "label": "Continue routine monitoring for akathisia, EPS, weight changes, and metabolic parameters at future visits",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_wed_p2",
        "title": "2. Safety Maintenance & Tobacco Reduction Plan",
        "options": [
          {
            "key": "o4",
            "label": "Reconfirm resolution of suicidal ideation and maintain active Suicide Safety Plan with emergency contact numbers",
            "correct": true
          },
          {
            "key": "o5",
            "label": "Encourage continued tobacco reduction (10 cigs/day); provide behavioral strategies to support preparation for quit date",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_wed_p3",
        "title": "3. Follow-Up Plan",
        "options": [
          {
            "key": "o6",
            "label": "Schedule follow-up visit in 6 weeks to evaluate full remission target on combination therapy",
            "correct": true
          }
        ]
      }
    ],
    "PLAN_FREETEXT": [
      {
        "key": "monitoring",
        "label": "Monitoring plan",
        "placeholder": "Labs, vitals, and follow-up intervals…"
      },
      {
        "key": "followUp",
        "label": "Follow-up",
        "placeholder": "When should the patient return and why?"
      }
    ],
    "GUIDING_QUESTIONS": [],
    "COUNSELING": [
      "Counsel patient on importance of continuing stable combination therapy (Venlafaxine XR 150 mg + Aripiprazole 2 mg daily).",
      "Reinforce safety plan and confirm firearms remain stored safely offsite.",
      "Encourage continued tobacco reduction and discuss setting a quit date."
    ],
    "PRECEPTOR": {
      "keyIssues": [],
      "assessment": [],
      "plan": [],
      "pearls": [],
      "mistakes": [],
      "followupQuestions": [],
      "checklist": []
    },
    "INTERVIEW_SYSTEM_PROMPT": ""
  },
  {
    "id": "w5-david_c-thu",
    "PATIENT": {
      "name": "David Carter",
      "age": 51,
      "sex": "male",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "mrn": "W5-30882",
      "setting": "Ambulatory Behavioral Health Clinic"
    },
    "ENCOUNTER": {
      "day": "Thursday",
      "week": "Week 5",
      "type": "12-Week Follow-Up Visit (TRD Remission & Maintenance)",
      "chiefConcern": "I haven't felt this good in years. My PHQ-9 score is 3, I'm fully back at work, enjoying woodworking and hiking, and I'm down to only 3 cigarettes a day!",
      "snapshotSummary": "David presents for 12-week follow-up (6 weeks post stable combo therapy). Full remission achieved: PHQ-9 = 3 (minimal symptoms), GAD-7 = 4 (minimal symptoms), SI absent (Item 9 = 0). Smokes ~3 cigarettes/day (near abstinence / preparation stage). Plan: CONTINUE Venlafaxine XR 150 mg + Aripiprazole 2 mg daily for long-term TRD maintenance (minimum 12-24 months per APA/VA-DoD guidelines), continue CBT, reinforce tobacco cessation, annual metabolic monitoring.",
      "difficulty": "Advanced",
      "difficultyTone": "purple",
      "diseaseStates": [
        "Severe MDD (TRD, Full Remission - Minimal Symptoms)",
        "GAD (Full Remission - Minimal Symptoms)",
        "SI (Resolved)",
        "Tobacco Use Disorder (Near Abstinence / Preparation Stage)"
      ],
      "learningObjectives": [
        "Confirm full remission in Treatment-Resistant Depression",
        "Establish long-term maintenance duration for TRD (at least 12-24 months per APA/VA-DoD guidelines)",
        "Counsel on relapse prevention, CBT continuation, and ongoing metabolic monitoring"
      ],
      "visitDate": "12/02/2026"
    },
    "VITALS": {
      "bp": "124/78 mmHg",
      "bpRepeat": "120/76 mmHg",
      "hr": "74 bpm",
      "rr": "16 breaths/min",
      "temp": "98.2°F",
      "weight": "218 lbs",
      "height": "71 inches",
      "bmi": "30.4 kg/m²",
      "flags": {
        "bmi": "obese"
      },
      "extras": [],
      "vitalsTime": "12/02/2026 11:30"
    },
    "LABS": [
      {
        "label": "Sodium",
        "value": "140",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Potassium",
        "value": "4.1",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Chloride",
        "value": "100",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Bicarbonate",
        "value": "25",
        "unit": "mEq/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "BUN",
        "value": "15",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Serum Creatinine",
        "value": "1.0",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "eGFR",
        "value": "88",
        "unit": "mL/min/1.73m²",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Glucose (fasting)",
        "value": "99",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "AST",
        "value": "22",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "ALT",
        "value": "24",
        "unit": "U/L",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Total Cholesterol",
        "value": "188",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "Triglycerides",
        "value": "176",
        "unit": "mg/dL",
        "flag": "warn",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "LDL-C",
        "value": "106",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      },
      {
        "label": "HDL-C",
        "value": "45",
        "unit": "mg/dL",
        "flag": "normal",
        "labDate": "12/02/2026 08:00"
      }
    ],
    "ALERTS": [
      {
        "level": "info",
        "text": "Full clinical remission achieved for Severe TRD: PHQ-9 = 3, GAD-7 = 4. Passive SI completely absent."
      },
      {
        "level": "info",
        "text": "TRD Long-Term Maintenance: Continue Venlafaxine XR 150 mg + Aripiprazole 2 mg daily for at least 12-24 months per guidelines."
      }
    ],
    "PROBLEMS": [
      {
        "name": "1. Major Depressive Disorder (TRD) â€” Full Remission",
        "detail": "PHQ-9 = 3. Full remission achieved on combo therapy.",
        "flag": "normal"
      },
      {
        "name": "2. Generalized Anxiety Disorder (GAD) â€” Full Remission",
        "detail": "GAD-7 = 4. Full remission achieved.",
        "flag": "normal"
      },
      {
        "name": "3. Suicidal Ideation â€” Fully Resolved",
        "detail": "PHQ-9 Item 9 = 0. SI absent.",
        "flag": "normal"
      },
      {
        "name": "4. Tobacco Use Disorder â€” Active, Preparation Stage",
        "detail": "Smokes 2 cigarettes/day (down from 15). Setting final quit date.",
        "flag": "info"
      }
    ],
    "ALLERGIES": [
      {
        "substance": "No known drug allergies",
        "reaction": "—"
      }
    ],
    "MEDICATIONS": [
      {
        "name": "Venlafaxine XR",
        "dose": "150 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "MDD / GAD",
        "notes": "100% adherent; full remission."
      },
      {
        "name": "Aripiprazole",
        "dose": "2 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "TRD Augmentation Maintenance",
        "notes": "100% adherent; full remission; excellent tolerability."
      },
      {
        "name": "Hydroxyzine",
        "dose": "25 mg",
        "route": "by mouth",
        "freq": "every 8 hours as needed",
        "indication": "Anxiety PRN",
        "notes": "Rarely needed."
      },
      {
        "name": "Lisinopril",
        "dose": "20 mg",
        "route": "by mouth",
        "freq": "daily",
        "indication": "Hypertension",
        "notes": "BP well controlled."
      }
    ],
    "IMMUNIZATIONS": [
      {
        "name": "Influenza",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "COVID-19",
        "status": "Up to date (received)",
        "flag": "normal"
      },
      {
        "name": "Tdap",
        "status": "Up to date (received)",
        "flag": "normal"
      }
    ],
    "SUBJECTIVE_DOCUMENTED": [
      {
        "label": "HPI",
        "value": "51-year-old male IT manager (separated, living alone) presenting for 12-week follow-up (6 weeks on stable combination Venlafaxine XR 150 mg daily + Aripiprazole 2 mg daily). Reports sustained full remission of depressive and anxiety symptoms. Sleeping 7-8 hours per night, energy excellent, fully functioning at work with high productivity. Resumed woodworking and hiking hobbies. SI remains completely absent. Attends CBT regularly. Tolerating combo therapy with zero side effects."
      },
      {
        "label": "Review of Systems (ROS) & Safety Assessment",
        "value": "Psychiatric ROS: Explicitly denies suicidal ideation (SI = 0), denies plan, denies intent, denies desire to die, denies self-harm, denies panic attacks, mania, or psychosis."
      },
      {
        "label": "Scores & Screening Tools",
        "value": "PHQ-9 score: 3 (Minimal depressive symptoms / Remission, down from 21 initial and 12 at 3-mo). GAD-7 score: 4 (Minimal anxiety symptoms / Remission, down from 18 initial and 9 at 3-mo). Item 9 (SI): 0."
      },
      {
        "label": "Past Medical History & Surgeries",
        "value": "PMH: Recurrent MDD (TRD, Full Remission), GAD (Full Remission), Hypertension, OSA on CPAP, Tobacco Use Disorder. PSH: Cholecystectomy."
      },
      {
        "label": "Social History",
        "value": "Full-time IT manager. Separated, lives alone. Smokes ~3 cigarettes/day (down from ~20). Preparing to set quit date next week. Enjoys woodworking and hiking. Denies illicit drugs. Immunizations up to date. NKDA."
      },
      {
        "label": "Family History",
        "value": "Mother: MDD. Father: AUD. Brother: MDD."
      }
    ],
    "OBJECTIVE_EXTRA": {
      "Mental Status Exam (MSE)": "Alert, oriented x4. Mood: 'euthymic, optimistic'. Affect: bright, full range. Speech: normal. Motor: normal, no EPS/akathisia. Cognition: intact."
    },
    "INTERVIEW_FIELDS": [
      {
        "field": "trd_remission",
        "label": "Full TRD remission validation"
      },
      {
        "field": "maintenance_inquiry",
        "label": "TRD maintenance duration question"
      },
      {
        "field": "tobacco_near_quit",
        "label": "Final tobacco quit date plan"
      }
    ],
    "INTERVIEW_KNOWLEDGE": [
      {
        "id": "w5-david_c-thu_ik_trd_remission",
        "topic": "Full TRD remission validation",
        "field": "trd_remission",
        "keywords": [
          "trd_remission",
          "full",
          "trd",
          "remission",
          "validation",
          "better",
          "feel",
          "normal",
          "100%",
          "back",
          "suicide",
          "die",
          "hurt",
          "kill",
          "end",
          "wish",
          "better off",
          "wishing"
        ],
        "response": "I feel like I have my life back. The combination of Effexor and Abilify saved my life."
      },
      {
        "id": "w5-david_c-thu_ik_maintenance_inquiry",
        "topic": "TRD maintenance duration question",
        "field": "maintenance_inquiry",
        "keywords": [
          "maintenance_inquiry",
          "trd",
          "maintenance",
          "duration",
          "question",
          "long",
          "continue",
          "stay",
          "how long",
          "months",
          "keep taking"
        ],
        "response": "How long do I need to keep taking Abilify with my Effexor?"
      },
      {
        "id": "w5-david_c-thu_ik_tobacco_near_quit",
        "topic": "Final tobacco quit date plan",
        "field": "tobacco_near_quit",
        "keywords": [
          "tobacco_near_quit",
          "final",
          "tobacco",
          "quit",
          "date",
          "plan",
          "smoke",
          "smoking",
          "cigarette",
          "cigar",
          "vape",
          "craving",
          "abstinence"
        ],
        "response": "I'm down to 2 cigarettes a day and ready to quit completely next week."
      }
    ],
    "ASSESSMENT_CARDS": [
      {
        "id": "w5c_thu_a1",
        "title": "1. TRD Full Remission & Long-Term Maintenance Rationale",
        "icon": "Brain",
        "color": "13314f",
        "questions": [
          {
            "key": "q1",
            "q": "What is the assessment of remission and maintenance therapy duration for TRD?",
            "defaultAnswer": "MDD (PHQ-9 = 3) and GAD (GAD-7 = 4) are in full clinical remission on combination Venlafaxine XR 150 mg daily + Aripiprazole 2 mg daily. Because the patient has Treatment-Resistant Depression (failed â‰¥2 prior trials), clinical guidelines (APA, VA/DoD, CANMAT) recommend continuing successful augmentation maintenance therapy for a minimum of 12 to 24 months (or indefinitely) post-remission to prevent high-risk depressive relapse."
          }
        ]
      },
      {
        "id": "w5c_thu_a2",
        "title": "2. Suicide Risk & Relapse Prevention Monitoring",
        "icon": "ShieldAlert",
        "color": "13314f",
        "questions": [
          {
            "key": "q2",
            "q": "What is the long-term safety and monitoring plan?",
            "defaultAnswer": "Suicidal ideation remains fully resolved (Item 9 = 0). Continue routine safety monitoring and periodic metabolic laboratory evaluation (fasting lipids/glucose)."
          }
        ]
      }
    ],
    "PLAN_SECTIONS": [
      {
        "id": "w5c_thu_p1",
        "title": "1. Long-Term TRD Maintenance Pharmacotherapy Plan",
        "options": [
          {
            "key": "o1",
            "label": "CONTINUE combination maintenance therapy: Venlafaxine XR 150 mg PO daily + Aripiprazole 2 mg PO daily for a minimum of 12 to 24 months post-remission per TRD clinical practice guidelines",
            "correct": true
          },
          {
            "key": "o2",
            "label": "Counsel patient on vital importance of adhering to both medications and risks of relapse if either agent is stopped prematurely",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_thu_p2",
        "title": "2. Patient Education & Relapse Prevention Plan",
        "options": [
          {
            "key": "o3",
            "label": "Educate patient on early warning signs of depressive relapse (sleep changes, low mood, anxiety, fatigue) and instruct to contact clinic immediately if symptoms re-emerge",
            "correct": true
          },
          {
            "key": "o4",
            "label": "Support final tobacco quit date transition (currently 2 cigs/day); provide encouragement and NRT options if needed",
            "correct": true
          }
        ]
      },
      {
        "id": "w5c_thu_p3",
        "title": "3. Longitudinal Monitoring & Follow-Up Plan",
        "options": [
          {
            "key": "o5",
            "label": "Schedule follow-up visit in 3 to 6 months for ongoing TRD maintenance monitoring",
            "correct": true
          },
          {
            "key": "o6",
            "label": "Order annual metabolic laboratory monitoring (fasting plasma glucose, A1C, lipid panel) for long-term Aripiprazole safety",
            "correct": true
          }
        ]
      }
    ],
    "PLAN_FREETEXT": [
      {
        "key": "monitoring",
        "label": "Monitoring plan",
        "placeholder": "Labs, vitals, and follow-up intervals…"
      },
      {
        "key": "followUp",
        "label": "Follow-up",
        "placeholder": "When should the patient return and why?"
      }
    ],
    "GUIDING_QUESTIONS": [],
    "COUNSELING": [
      "Educate patient that for Treatment-Resistant Depression (TRD), maintenance combination therapy should continue for at least 12 to 24 months (or longer) post-remission to prevent severe relapse.",
      "Warn against self-discontinuation of either Venlafaxine XR or Aripiprazole.",
      "Reinforce relapse warning signs and maintain annual fasting glucose/lipid monitoring."
    ],
    "PRECEPTOR": {
      "keyIssues": [],
      "assessment": [],
      "plan": [],
      "pearls": [],
      "mistakes": [],
      "followupQuestions": [],
      "checklist": []
    },
    "INTERVIEW_SYSTEM_PROMPT": ""
  }
]

export const W5_RUBRICS = {}
