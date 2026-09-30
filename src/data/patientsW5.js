import { makeCase } from './caseFactory.js'

// WEEK 5 — Depression + Anxiety + Tobacco Cessation
// Patients: Sarah Mitchell (A), Jessica Ramirez (B), David Carter (C)
// Case ids are namespaced 'w5-<patient>-<day>'

/* ============================ SARAH MITCHELL (A) ============================ */
// MDD + GAD + Tobacco Use.

const sarahTue = makeCase({
  "id": "w5-sarah_m-tue",
  "PATIENT": {
    "name": "Sarah Mitchell",
    "age": 54,
    "dob": "05/14/1972",
    "sex": "female",
    "ethnicity": "White",
    "mrn": "W5-10222"
  },
  "ENCOUNTER": {
    "week": "Week 5",
    "day": "Tuesday",
    "type": "Initial Ambulatory Behavioral Health Clinic Visit",
    "difficulty": "Foundational",
    "difficultyTone": "teal",
    "chiefConcern": "I haven't felt like myself in months. Work has been so stressful, and I just feel completely exhausted, anxious, and down.",
    "snapshotSummary": "Sarah is a 54-year-old female elementary school teacher referred by her PCP for an initial behavioral health evaluation. Newly diagnosed with Major Depressive Disorder (MDD, PHQ-9 = 13) and Generalized Anxiety Disorder (GAD, GAD-7 = 8). Also has Tobacco Use Disorder (smokes 5 cigarettes/day for stress, contemplative stage). Needs initial single-agent SSRI pharmacotherapy.",
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
    "temp": "98.2°F",
    "weight": "152 lbs",
    "height": "65 inches",
    "bmi": "25.3 kg/m²",
    "vitalsTime": "09/09/2026 09:14",
    "flags": {
      "bmi": "warn"
    }
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
      "unit": "mL/min/1.73m²",
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
      "value": "22",
      "unit": "U/L",
      "flag": "normal",
      "labDate": "09/09/2026 07:50"
    },
    {
      "label": "ALT",
      "value": "24",
      "unit": "U/L",
      "flag": "normal",
      "labDate": "09/09/2026 07:50"
    },
    {
      "label": "WBC",
      "value": "6.2",
      "unit": "x10³/mm³",
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
      "value": "245",
      "unit": "x10³/mm³",
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
      "text": "Patient is in the contemplative stage of change for tobacco cessation (smokes 5 cigarettes/day for stress management, not ready to set a quit date today). Motivational interviewing recommended per USPSTF Grade A recommendation."
    }
  ],
  "PROBLEMS": [
    {
      "name": "1. Major Depressive Disorder (MDD) — Newly Diagnosed, Moderate Severity",
      "detail": "PHQ-9 = 13 (Moderate). Symptom duration 4-5 months with low mood, anhedonia, fatigue, impaired concentration, and functional impairment. Treatment-naïve.",
      "flag": "high"
    },
    {
      "name": "2. Generalized Anxiety Disorder (GAD) — Newly Diagnosed, Mild Severity",
      "detail": "GAD-7 = 8 (Mild). Persistent worry, racing thoughts, restlessness, and sleep disruption linked to work stress. Treatment-naïve.",
      "flag": "high"
    },
    {
      "name": "3. Tobacco Use Disorder — Active, Contemplative Stage",
      "detail": "Current smoker, 5 cigarettes/day (2 pack-year history) used for stress management. Contemplative stage; not ready to set a quit date today.",
      "flag": "warn"
    },
    {
      "name": "4. Insomnia — Secondary to MDD and GAD",
      "detail": "Restless sleep, 5-6 hours/night, difficulty turning off thoughts after work. Secondary to psychiatric illness.",
      "flag": "warn"
    },
    {
      "name": "5. Behavioral Health Knowledge Deficit — Active",
      "detail": "Patient expresses anxiety regarding antidepressant weight gain, personality changes, and medication dependence, but is open to treatment with explanation.",
      "flag": "info"
    }
  ],
  "MEDICATIONS": [
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
      "value": "54-year-old female full-time elementary school teacher referred by her Primary Care Physician (PCP) for an initial evaluation at the ambulatory behavioral health clinic regarding worsening symptoms over the past 4 to 5 months. Patient attributes initial symptom onset to work stress and burnout. Reports persistent low mood occurring most days, emotional exhaustion, profound fatigue, and anhedonia (reduced interest and pleasure in previously enjoyed activities, specifically stopping her regular reading and weekend hiking with her husband). Reports restless sleep (5 to 6 hours per night with difficulty turning off thoughts after work), difficulty concentrating at work (struggling to complete lesson plans, taking significantly longer to grade papers), and noticeable occupational functioning impairment (feeling overwhelmed by daily teaching duties). Reports persistent anxiety, difficulty controlling anxious thoughts, racing thoughts after work, and interpersonal relationship impact (feeling distant from her husband, who encouraged today's evaluation). Confirms treatment-naïve status for psychiatric pharmacotherapy (no prior antidepressant use) and treatment-naïve status for psychotherapy (no prior counseling)."
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
      "value": "Full-time elementary school teacher. Married, lives with husband (who encouraged evaluation and serves as primary support system). Current smoker (5 cigarettes per day for 8 years = 2 pack-year smoking history), citing stress management as the primary reason for smoking. Contemplative stage of change regarding tobacco cessation: willing to quit eventually but not ready to set a quit date today. Drinks alcohol rarely (1 glass of wine 1–2 times per month). Denies illicit drug use. Exercises: regular walking and weekend hiking with husband."
    },
    {
      "label": "Family History",
      "value": "Mother: history of Major Depressive Disorder (MDD), successfully treated with Sertraline (Zoloft). Father: history of hypertension (HTN). Maternal grandmother: history of Generalized Anxiety Disorder (GAD). Family history explicitly linked to patient's genetic risk and medication response rationale."
    },
    {
      "label": "OTC & Allergies",
      "value": "Ibuprofen 200 mg PO PRN (takes 1–2 tablets PRN for occasional tension headaches). Confirms absence of any prescription medications. No known drug allergies (NKDA)."
    },
    {
      "label": "Patient Concerns & Education Needs",
      "value": "Patient expresses specific psychosocial concerns regarding antidepressant therapy: fears potential weight gain, fears personality changes, and fears medication dependence. Patient explicitly states she is open to treatment once expectations and clinical rationale are explained."
    }
  ],
  "OBJECTIVE_EXTRA": [
    {
      "label": "Objective Examination & Diagnostic Panel",
      "value": "Vital Signs: BP 118/74 mmHg (repeat 116/74 mmHg), HR 76 bpm, RR 16 breaths/min, Temp 98.2°F, Weight 152 lbs (69 kg), Height 65 inches (5 ft 5 in), BMI 25.3 kg/m² (classified as overweight / borderline). All vital signs are within normal limits. Laboratory Findings: Sodium 139 mEq/L, Potassium 4.2 mEq/L, Chloride 101 mEq/L, Bicarbonate 24 mEq/L, BUN 12 mg/dL, Serum Creatinine 0.8 mg/dL, eGFR >90 mL/min/1.73m², Glucose 92 mg/dL, TSH 2.1 mIU/L (interpreted as within normal limits), AST 22 U/L, ALT 24 U/L, WBC 6.2 x10³/mm³, Hgb 13.4 g/dL, Plt 245 x10³/mm³. Overall metabolic, hepatic, renal, hematologic, and thyroid panels are completely within normal limits, explicitly demonstrating a very low probability of a medical etiology for her mood and anxiety symptoms. Screening Scores: PHQ-9 = 13 (Moderate Depression), GAD-7 = 8 (Mild Anxiety). Suicide Risk Assessment: Low risk, explicit denial of SI, denial of suicide plan, and denial of prior suicide attempts."
    }
  ],
  "INTERVIEW_FIELDS": [
    {
      "key": "tobacco",
      "label": "Tobacco Cessation Readiness",
      "placeholder": "Assess readiness to quit and stress triggers"
    }
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
  "GUIDING_QUESTIONS": [
    "What clinical findings support a diagnosis of Major Depressive Disorder?",
    "Why is Sertraline the preferred first-line agent over Bupropion in this patient?",
    "How does mother's positive Sertraline response guide pharmacotherapy choice?",
    "What role does Cognitive Behavioral Therapy (CBT) play alongside SSRI therapy?",
    "How should tobacco cessation be addressed in a patient who is not ready to quit today?"
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
        "tylenol"
      ],
      "response": "I take over-the-counter Ibuprofen 200 mg occasionally for headaches—maybe 1 or 2 pills a month. I don't take any prescription medications or herbal supplements."
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
      "response": "I drink alcohol rarely—maybe a glass of wine once or twice a month."
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
      "response": "I smoke about 5 cigarettes a day and have for about 8 years. It helps me manage stress. I know I should quit eventually, but with all the stress at work right now, I'm not ready to set a quit date today."
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
        "job",
        "work",
        "employ",
        "living",
        "husband",
        "teacher",
        "school"
      ],
      "response": "I'm a full-time elementary school teacher. I live with my husband, who has been very supportive and actually encouraged me to come to clinic today."
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
      "title": "1. Major Depressive Disorder (MDD) — Newly Diagnosed, Moderate Severity",
      "icon": "Brain",
      "color": "13314f",
      "questions": [
        {
          "key": "q1",
          "q": "What is the diagnostic evaluation, severity, and treatment rationale for MDD?",
          "defaultAnswer": "Major Depressive Disorder (MDD), newly diagnosed, moderate severity (PHQ-9 = 13). Symptom duration 4 to 5 months, characterized by persistent low mood, anhedonia (loss of interest in reading and hiking), emotional exhaustion, profound fatigue, restless sleep, impaired concentration, and significant occupational and interpersonal functioning impairment. Bipolar disorder, psychosis, and substance-induced mood disorder are explicitly ruled out based on history and ROS. Normal lab findings (TSH 2.1 mIU/L, CMP, CBC) rule out a medical etiology (such as hypothyroidism). Single-agent SSRI therapy with Sertraline is strongly indicated per ACP Living Clinical Guidelines and VA/DoD MDD Guidelines. Remission (target PHQ-9 <5), not merely partial improvement, is the primary treatment goal. Rationale for Sertraline: mother's successful treatment response to Sertraline provides strong genetic/familial response rationale; dual efficacy for comorbid GAD; favorable safety and tolerability profile."
        }
      ]
    },
    {
      "id": "w5a_a2",
      "title": "2. Generalized Anxiety Disorder (GAD) — Newly Diagnosed, Mild Severity",
      "icon": "Activity",
      "color": "dc2626",
      "questions": [
        {
          "key": "q2",
          "q": "What is the diagnostic evaluation, severity, and treatment strategy for GAD?",
          "defaultAnswer": "Generalized Anxiety Disorder (GAD), newly diagnosed, mild severity (GAD-7 = 8). Characterized by persistent worry, difficulty controlling anxious thoughts, racing thoughts after work, restlessness, and sleep disruption linked to work performance and stress. Anxiety symptoms are closely intertwined with her depressive syndrome burden, but are characterized as milder than depression. Single-agent SSRI therapy with Sertraline is indicated per VA/DoD Anxiety Guidelines and JAMA 2026 Review (SSRIs/SNRIs first-line for GAD; paroxetine, escitalopram, duloxetine, venlafaxine also acceptable; benzodiazepines not recommended). A single SSRI agent effectively treats both MDD and GAD without needing polypharmacy. Long-term symptom control and functional recovery are primary goals."
        }
      ]
    },
    {
      "id": "w5a_a3",
      "title": "3. Tobacco Use Disorder — Active, Contemplative Stage",
      "icon": "Flame",
      "color": "d97706",
      "questions": [
        {
          "key": "q3",
          "q": "What is the tobacco use status and behavioral counseling approach?",
          "defaultAnswer": "Tobacco Use Disorder, active nicotine dependence. Smokes 5 cigarettes per day for 8 years (2 pack-year history), citing stress relief and management as the primary reason for smoking. Patient is in the contemplative stage of change: acknowledges health benefits and expresses desire to quit eventually, but is not ready to establish a quit date today due to current work stress. Per USPSTF Grade A recommendation and VA/DoD Tobacco Cessation CPG 2026, behavioral counseling using motivational interviewing is the recommended initial approach. Smoking is linked to underlying anxiety symptoms. Cessation pharmacotherapy (varenicline, bupropion SR, NRT) is declined/deferred at this time since patient is not yet ready to quit; readiness will be reassessed at future visits."
        }
      ]
    },
    {
      "id": "w5a_a4",
      "title": "4. Insomnia — Secondary to MDD and GAD",
      "icon": "Moon",
      "color": "6366f1",
      "questions": [
        {
          "key": "q4",
          "q": "What is the etiology and management strategy for insomnia?",
          "defaultAnswer": "Insomnia (restless sleep, 5–6 hours per night, difficulty turning off thoughts after work), classified as secondary to underlying MDD and GAD. Sleep-specific pharmacotherapy is NOT indicated. Successful treatment of depression and anxiety with SSRI therapy and CBT is expected to improve sleep quality. Non-pharmacologic sleep hygiene recommendations provided: maintain a consistent sleep schedule, limit caffeine intake, avoid screens before bed, and practice relaxation techniques. Sleep quality will be monitored as psychiatric conditions improve."
        }
      ]
    },
    {
      "id": "w5a_a5",
      "title": "5. Behavioral Health Knowledge Deficit — Active",
      "icon": "BookOpen",
      "color": "0891b2",
      "questions": [
        {
          "key": "q5",
          "q": "What knowledge gaps exist and how do they impact engagement?",
          "defaultAnswer": "Behavioral Health Knowledge Deficit identified as an active problem. Patient displays limited understanding of MDD, GAD, treatment expectations, and antidepressant medications. Harbors specific concerns regarding medication dependence, core personality changes, and weight gain. Patient is open to treatment once clear evidence-based explanations are provided. Education regarding medication onset (2–6 weeks), adherence importance, non-addictive nature of SSRIs, and treatment goals will improve patient engagement, confidence, and long-term adherence."
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
          "label": "Educate patient on expected 2 to 6 week onset of therapeutic benefit, importance of strict daily adherence, expected treatment duration (≥6 to 9 months post-remission per ACP and VA/DoD guidelines), and target goal of full remission (PHQ-9 <5)",
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
          "label": "Provide counseling on stress management techniques, relaxation techniques, and sleep hygiene (consistent sleep schedule, limit afternoon caffeine, avoid screens before bed)",
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
          "label": "Discuss relationship between smoking and stress management; review health benefits of complete cessation; acknowledge patient is in contemplative stage and not ready to set a quit date today",
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
          "label": "Emphasize that patient education improves treatment engagement, adherence, and clinical outcomes",
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
          "label": "Schedule follow-up visit in approximately 4 weeks to evaluate treatment response, medication adherence, tolerability, and safety",
          "correct": true
        },
        {
          "key": "o15",
          "label": "Repeat PHQ-9 and GAD-7 assessment scales at follow-up visit to quantify progress toward remission goal",
          "correct": true
        },
        {
          "key": "o16",
          "label": "Monitor suicidal ideation, mood, anxiety, sleep quality, occupational functioning, interpersonal functioning, and tobacco cessation readiness at follow-up",
          "correct": true
        }
      ]
    }
  ]
})

const sarahWed = makeCase({
  "id": "w5-sarah_m-wed",
  "PATIENT": {
    "name": "Sarah Mitchell",
    "age": 54,
    "dob": "05/14/1972",
    "sex": "female",
    "ethnicity": "White",
    "mrn": "W5-10222"
  },
  "ENCOUNTER": {
    "week": "Week 5",
    "day": "Wednesday",
    "type": "4-Week Follow-Up Ambulatory Behavioral Health Clinic Visit",
    "difficulty": "Core",
    "difficultyTone": "teal",
    "chiefConcern": "I'm feeling somewhat better and sleeping a bit more, but I still feel tired and lack motivation.",
    "snapshotSummary": "Sarah presents for a 4-week follow-up after starting Sertraline 50 mg PO daily and attending CBT. Demonstrates partial improvement (PHQ-9 improved 13 to 8, GAD-7 8 to 5; reduced smoking 5 to 2 cigs/day). However, residual fatigue and low motivation persist. Sertraline dose escalation to 100 mg daily indicated to target full remission.",
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
    "temp": "98.0°F",
    "weight": "151 lbs",
    "height": "65 inches",
    "bmi": "25.1 kg/m²",
    "vitalsTime": "10/07/2026 09:14",
    "flags": {
      "bmi": "warn"
    }
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
      "label": "Serum Creatinine",
      "value": "0.8",
      "unit": "mg/dL",
      "flag": "normal",
      "labDate": "10/07/2026 07:50"
    },
    {
      "label": "eGFR",
      "value": ">90",
      "unit": "mL/min/1.73m²",
      "flag": "normal",
      "labDate": "10/07/2026 07:50"
    },
    {
      "label": "AST",
      "value": "22",
      "unit": "U/L",
      "flag": "normal",
      "labDate": "10/07/2026 07:50"
    },
    {
      "label": "ALT",
      "value": "24",
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
      "name": "1. Major Depressive Disorder (MDD) — Improved, Partial Response (Not in Remission)",
      "detail": "PHQ-9 improved from 13 (initial) to 8 (current), ~38.5% reduction. Clinically meaningful response, but residual fatigue and low motivation persist. Increase Sertraline to 100 mg daily to target remission.",
      "flag": "high"
    },
    {
      "name": "2. Generalized Anxiety Disorder (GAD) — Significantly Improved, Near Remission",
      "detail": "GAD-7 improved from 8 (initial) to 5 (current, mild anxiety). Less excessive worrying; improved coping. Sertraline dose escalation for MDD will optimize GAD control.",
      "flag": "normal"
    },
    {
      "name": "3. Tobacco Use Disorder — Improving, Contemplative Stage",
      "detail": "Reduced smoking from 5 to 2 cigarettes/day, attributed to stress reduction and CBT coping skills. Meaningful progress; not yet ready to set a quit date.",
      "flag": "warn"
    },
    {
      "name": "4. Behavioral Health Knowledge Deficit — Improving",
      "detail": "Patient verbalizes treatment as a process; needs education on response vs remission distinction and dose escalation rationale.",
      "flag": "info"
    }
  ],
  "MEDICATIONS": [
    {
      "name": "Sertraline",
      "dose": "50 mg",
      "route": "by mouth",
      "freq": "daily",
      "indication": "MDD / GAD",
      "notes": "Target starting dose — 100% adherence, well tolerated (nausea resolved). Increase to 100 mg daily."
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
      "value": "54-year-old female presents for a 4-week follow-up visit at the ambulatory behavioral health clinic to evaluate treatment response following initiation of Sertraline (titrated from 25 mg daily to 50 mg daily) and CBT referral. Patient reports feeling overall improved, noting 'more good days than bad days.' Reports improved energy, improved concentration, improved sleep (falling asleep more easily, sleeping 6 to 7 hours per night), and improved enjoyment of activities (resumed regular reading, went hiking once with her husband). Attended 2 CBT sessions and reports CBT has been extremely beneficial for learning to challenge negative thoughts and manage stress. However, patient reports residual depressive symptoms: persistent occasional fatigue, low motivation, incomplete return to baseline functioning, and intermittent work-related stress. Reports anxiety symptoms are significantly improved: less worrying, no longer feeling overwhelmed by worry, and fewer racing thoughts. Reports 100% medication adherence (0 missed doses). Sertraline has been well tolerated; initial mild nausea completely resolved after the first week. Reduced tobacco consumption from 5 to 2 cigarettes per day, attributing reduction directly to decreased stress and improved coping strategies learned in CBT."
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
      "value": "Full-time elementary school teacher. Married, lives with husband (who notes positive mood changes). Reduced tobacco use from 5 to 2 cigarettes per day, attributed to stress reduction and CBT coping skills. Contemplative stage of change; not yet ready to set a quit date today. Rare alcohol use. Denies illicit drug use. Resumed regular walking and weekend hiking with husband."
    },
    {
      "label": "Family History",
      "value": "Mother: MDD successfully treated with Sertraline. Father: HTN. Maternal grandmother: GAD."
    },
    {
      "label": "OTC & Allergies",
      "value": "Ibuprofen 200 mg PO PRN for occasional headaches. NKDA."
    },
    {
      "label": "Patient Education & Goals",
      "value": "Patient verbalizes treatment as a process and acknowledges symptom progress. Expresses goal of continued mood and symptom improvement toward full remission, continued anxiety reduction, ongoing CBT participation, and eventual tobacco cessation."
    }
  ],
  "OBJECTIVE_EXTRA": [
    {
      "label": "Objective Examination & Clinical Trends",
      "value": "Vital Signs: BP 116/72 mmHg (repeat 114/70 mmHg), HR 72 bpm, RR 16 breaths/min, Temp 98.0°F, Weight 151 lbs (68.5 kg), Height 65 inches (5 ft 5 in), BMI 25.1 kg/m² (borderline overweight). All vital signs are within normal limits with no acute safety concerns. Laboratory Data: Sodium 139 mEq/L, Potassium 4.2 mEq/L, Serum Creatinine 0.8 mg/dL, eGFR >90 mL/min/1.73m², AST 22 U/L, ALT 24 U/L. Comprehensive metabolic, renal, and hepatic panels demonstrate no clinically significant abnormalities, confirming safety for Sertraline dose escalation. Longitudinal Assessment Score Trends: PHQ-9 trend: 13 (initial visit) -> 8 (current visit), representing a ~38.5% reduction. Clinically meaningful response, but patient remains symptomatic (PHQ-9 8) and is not in remission. GAD-7 trend: 8 (initial visit) -> 5 (current visit), confirming maintained mild anxiety threshold and near-remission status."
    }
  ],
  "INTERVIEW_FIELDS": [
    {
      "key": "response",
      "label": "4-Week Response Evaluation",
      "placeholder": "Assess PHQ-9/GAD-7 progress and residual fatigue"
    }
  ],
  "COUNSELING": [
    {
      "id": "c1",
      "title": "Sertraline Dose Escalation to 100 mg Daily",
      "body": [
        "You have made wonderful progress on Sertraline 50 mg—your depression score dropped from 13 to 8, and your anxiety dropped from 8 to 5. However, because you still have some fatigue and low motivation, our goal is full remission (a PHQ-9 score under 5). Increasing Sertraline to 100 mg daily per clinical guidelines is safe, well-tolerated, and will help you achieve full recovery over the next 2 to 4 weeks."
      ]
    }
  ],
  "GUIDING_QUESTIONS": [
    "What is the difference between clinical response and full remission in MDD?",
    "Why is Sertraline dose escalation to 100 mg daily indicated despite a 38.5% PHQ-9 reduction?",
    "What guidelines (ACP, VA/DoD) support targeting full remission as the primary goal?",
    "How does CBT complement pharmacotherapy in achieving GAD near-remission?",
    "Why is tobacco cessation pharmacotherapy withheld while continuing motivational interviewing?"
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
        "ibuprofen"
      ],
      "response": "I take Ibuprofen 200 mg occasionally for headaches. I've been taking Sertraline 50 mg every single day without missing any doses."
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
      "response": "Rarely, maybe 1 glass of wine a month."
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
      "response": "I've cut down from 5 cigarettes a day to just 2 cigarettes a day! Feeling less stressed and using the CBT breathing exercises really helped. I'm not quite ready to set a quit date today, but I'm feeling much more confident."
    },
    {
      "id": "w5-sarah_m-wed_social",
      "topic": "Social history",
      "field": "socialHistory",
      "keywords": [
        "live",
        "marital",
        "married",
        "job",
        "work",
        "employ",
        "living",
        "husband",
        "teacher"
      ],
      "response": "I'm working as an elementary school teacher. I live with my husband. We went hiking last weekend for the first time in months."
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
      "response": "I've attended 2 CBT sessions so far, and it's been extremely helpful. I'm learning to recognize negative thought patterns and challenge them when I get stressed at work."
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
      "response": "I'm definitely feeling better overall—more good days than bad. I'm sleeping 6-7 hours, falling asleep easier, reading again, and my anxiety is much less. But I still feel tired sometimes and lack motivation on some days."
    }
  ],
  "ASSESSMENT_CARDS": [
    {
      "id": "w5b_a1",
      "title": "1. Major Depressive Disorder (MDD) — Improved, Partial Response (Not in Remission)",
      "icon": "Brain",
      "color": "13314f",
      "questions": [
        {
          "key": "q1",
          "q": "What is the clinical evaluation of treatment response and dose optimization strategy?",
          "defaultAnswer": "Major Depressive Disorder (MDD), improved status, partial response (not in remission). PHQ-9 score improved from 13 (initial) to 8 (current), representing a ~38.5% reduction and clinically meaningful partial response. Patient reports noticeable improvements in mood ('more good days than bad days'), energy, concentration, sleep (falling asleep easier, 6–7 hours/night), and enjoyment of activities (resumed reading, went hiking with husband). Excellent medication adherence (100% compliant, 0 missed doses), minimal adverse effects (initial nausea resolved), and active CBT engagement (attended 2 sessions with substantial cognitive restructuring benefit). However, residual depressive symptoms persist: persistent occasional fatigue, low motivation, and incomplete return to baseline functioning. ACP Living Clinical Guidelines and VA/DoD MDD Guidelines explicitly mandate that **remission (PHQ-9 <=4 / <5), not merely partial response, is the primary treatment goal**. Given residual symptoms after ~4 weeks on target starting dose (50 mg daily) with excellent tolerability and adherence, **sertraline dose escalation to 100 mg PO daily is indicated** to optimize therapeutic response and target full remission."
        }
      ]
    },
    {
      "id": "w5b_a2",
      "title": "2. Generalized Anxiety Disorder (GAD) — Significantly Improved, Near Remission",
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
      "title": "3. Tobacco Use Disorder — Improving, Contemplative Stage",
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
      "title": "4. Behavioral Health Knowledge Deficit — Improving",
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
          "label": "Document dose escalation rationale: significant partial improvement achieved, residual fatigue/motivation symptoms persist, remission (PHQ-9 <=4 / <5) has not yet been achieved, medication is well tolerated, and 100% adherence is demonstrated",
          "correct": true
        },
        {
          "key": "o3",
          "label": "Continue Cognitive Behavioral Therapy (CBT) participation for combination treatment benefit",
          "correct": true
        },
        {
          "key": "o4",
          "label": "Educate patient on difference between response and remission, rationale for dose escalation, expected 2 to 4 week timeline for additional improvement, continued adherence importance, and potential adverse effects after dose increase",
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
          "label": "Continue Sertraline therapy as outlined in MDD plan — no additional GAD-specific pharmacotherapy added (SSRIs/SNRIs first-line per JAMA 2026 Review; avoid long-term benzodiazepines)",
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
          "label": "State explicitly that patient is not yet ready to establish a quit date; withhold cessation pharmacotherapy (varenicline, bupropion SR, NRT per VA/DoD Tobacco CPG 2026) while behavioral approach is ongoing; reassess readiness at next visit",
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
      "title": "5. Comprehensive Monitoring Plan (12 Parameters)",
      "options": [
        {
          "key": "o12",
          "label": "Monitor PHQ-9 score, GAD-7 score, mood, energy, motivation, sleep quality, medication adherence, medication adverse effects, suicidal ideation, tobacco use, occupational functioning, and interpersonal functioning (covers all active problems)",
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
          "label": "Evaluate maintenance therapy planning, tobacco cessation progression, and relapse prevention strategies at future visit",
          "correct": true
        }
      ]
    }
  ]
})

const sarahThu = makeCase({
  "id": "w5-sarah_m-thu",
  "PATIENT": {
    "name": "Sarah Mitchell",
    "age": 54,
    "dob": "05/14/1972",
    "sex": "female",
    "ethnicity": "White",
    "mrn": "W5-10222"
  },
  "ENCOUNTER": {
    "week": "Week 5",
    "day": "Thursday",
    "type": "12-Week Follow-Up Ambulatory Behavioral Health Clinic Visit",
    "difficulty": "Advanced",
    "difficultyTone": "7c3aed",
    "chiefConcern": "I feel fantastic—my mood is back to normal, I'm sleeping great, and I actually quit smoking 6 weeks ago! Do I still need to keep taking Sertraline?",
    "snapshotSummary": "Sarah presents for a 12-week follow-up after Sertraline 100 mg daily optimization and CBT completion. Achieved full remission (PHQ-9 = 2, GAD-7 = 1) and complete smoking cessation (6 weeks tobacco-free, early remission). Asks if Sertraline can be stopped. Maintenance therapy for >=6-9 months post-remission indicated per ACP and VA/DoD guidelines.",
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
    "hr": "70 bpm",
    "rr": "16 breaths/min",
    "temp": "98.0°F",
    "weight": "150 lbs",
    "height": "65 inches",
    "bmi": "25.0 kg/m²",
    "vitalsTime": "12/09/2026 09:14",
    "flags": {
      "bmi": "warn"
    }
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
      "value": "4.2",
      "unit": "mEq/L",
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
      "unit": "mL/min/1.73m²",
      "flag": "normal",
      "labDate": "12/09/2026 07:50"
    },
    {
      "label": "AST",
      "value": "22",
      "unit": "U/L",
      "flag": "normal",
      "labDate": "12/09/2026 07:50"
    },
    {
      "label": "ALT",
      "value": "24",
      "unit": "U/L",
      "flag": "normal",
      "labDate": "12/09/2026 07:50"
    },
    {
      "label": "Glucose",
      "value": "92",
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
      "name": "1. Major Depressive Disorder (MDD) — In Full Remission, Stable on Maintenance Therapy",
      "detail": "PHQ-9 = 2 (minimal/no depression; trend 13 -> 8 -> 2). Full return to baseline functioning. Continue Sertraline 100 mg PO daily maintenance for >=6-9 months per ACP and VA/DoD guidelines.",
      "flag": "normal"
    },
    {
      "name": "2. Generalized Anxiety Disorder (GAD) — In Full Remission / Minimal Symptoms, Well Controlled",
      "detail": "GAD-7 = 1 (minimal anxiety; trend 8 -> 5 -> 1). Occasional normal work stress without excessive worry. Continue Sertraline 100 mg PO daily.",
      "flag": "normal"
    },
    {
      "name": "3. Tobacco Use Disorder — In Early Remission, Successful Smoking Cessation",
      "detail": "Tobacco-free for 6 weeks with zero smoking relapse. Occasional cravings during stress managed with CBT skills. Early remission phase (<12 months).",
      "flag": "normal"
    },
    {
      "name": "4. Behavioral Health Knowledge Deficit — Improving",
      "detail": "Patient asks if medication can be stopped now that she feels well. Needs education on maintenance treatment rationale, remission vs cure, and relapse warning signs.",
      "flag": "info"
    }
  ],
  "MEDICATIONS": [
    {
      "name": "Sertraline",
      "dose": "100 mg",
      "route": "by mouth",
      "freq": "daily",
      "indication": "MDD / GAD",
      "notes": "Optimized maintenance dose — 100% adherence, excellent tolerability, zero adverse effects. Continue long-term."
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
      "value": "54-year-old female presents for a 12-week follow-up visit (post-initiation and optimization of treatment) at the ambulatory behavioral health clinic. Patient reports feeling 'fantastic' with a complete return of mood to baseline. Denies feelings of sadness, overwhelm, or exhaustion. Attributes improvement directly to Sertraline dose increase to 100 mg daily combined with CBT completion. Reports normal energy levels, improved concentration, good motivation, and full restoration of enjoyment in activities (reading regularly, hiking weekly with her husband). Reports improved social engagement and excellent work performance as an elementary school teacher, denying feeling overwhelmed. Reports significant anxiety improvement, denying excessive worry, racing thoughts, or persistent anxiety, noting only occasional normal work stress. Reports excellent sleep quality (7 to 8 hours per night) and denies insomnia. Reports 100% medication adherence (zero missed doses) and denies any medication adverse effects. Completed 8 CBT sessions with major benefit in stress management, relaxation techniques, and cognitive restructuring. Successfully quit smoking approximately 6 weeks ago (tobacco-free for 6 weeks, occasional cravings during stress managed with CBT deep breathing exercises; explicitly denies any smoking relapse). Patient expresses gratitude for treatment success, but explicitly asks whether ongoing medication and therapy remain necessary now that she feels completely well, expressing concern about potential future depression recurrence."
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
      "value": "Full-time elementary school teacher. Married, lives with husband (who provides strong support and participates in outdoor activities). Tobacco Use Disorder in Early Remission: quit smoking 6 weeks ago, tobacco-free for 6 weeks, occasional stress cravings managed with CBT skills, zero relapse. Rare alcohol use. Denies illicit drug use. Exercises regularly: walking and weekly hiking with husband."
    },
    {
      "label": "Family History",
      "value": "Mother: MDD successfully treated with Sertraline. Father: HTN. Maternal grandmother: GAD."
    },
    {
      "label": "OTC & Allergies",
      "value": "Ibuprofen 200 mg PO PRN for occasional headaches. Confirms no additional prescription medications used. NKDA."
    },
    {
      "label": "Patient Questions & Knowledge Deficit",
      "value": "Patient expresses gratitude for recovery, but asks if ongoing medication is necessary now that she feels well. Expresses concern about future depression recurrence. Represents a knowledge deficit regarding maintenance therapy and relapse prevention."
    }
  ],
  "OBJECTIVE_EXTRA": [
    {
      "label": "Objective Examination & Longitudinal Diagnostic Panel",
      "value": "Vital Signs: BP 116/72 mmHg (repeat 114/70 mmHg, well controlled), HR 70 bpm, RR 16 breaths/min, Temp 98.0°F, Weight 150 lbs (68 kg), Height 65 inches (5 ft 5 in), BMI 25.0 kg/m² (borderline overweight). All vital signs are within normal limits. Laboratory Findings: Sodium 139 mEq/L, Potassium 4.2 mEq/L, Serum Creatinine 0.8 mg/dL, eGFR >90 mL/min/1.73m² (adequate renal function for current medications), Glucose 92 mg/dL (within normal range), AST 22 U/L, ALT 24 U/L (normal hepatic transaminases confirming Sertraline safety). Comprehensive metabolic panel is completely free of clinically significant abnormalities. Screening Score Trends across 3 Visits: PHQ-9 trend: 13 (initial visit) -> 8 (4-week visit) -> 2 (current visit), confirming progressive improvement and full clinical remission (PHQ-9 2 = minimal depressive symptoms). GAD-7 trend: 8 (initial visit) -> 5 (4-week visit) -> 1 (current visit), confirming minimal anxiety symptoms (GAD-7 1 = minimal anxiety)."
    }
  ],
  "INTERVIEW_FIELDS": [
    {
      "key": "duration",
      "label": "12-Week Maintenance & Duration Query",
      "placeholder": "Assess 6-week tobacco cessation and answer duration questions"
    }
  ],
  "COUNSELING": [
    {
      "id": "c1",
      "title": "Maintenance Therapy & Relapse Prevention Rationale",
      "body": [
        "Congratulations on reaching full remission and staying tobacco-free for 6 weeks! Feeling completely well is the exact goal of treatment. However, depression remission is not a permanent cure—stopping Sertraline now carries a high risk of relapse. Clinical guidelines from ACP and VA/DoD recommend continuing Sertraline 100 mg PO daily for at least 6 to 9 months post-remission to protect your recovery."
      ]
    }
  ],
  "GUIDING_QUESTIONS": [
    "What clinical findings confirm full remission of MDD and GAD?",
    "Why do ACP and VA/DoD guidelines recommend continuing Sertraline for >=6-9 months post-remission?",
    "What is the distinction between remission and permanent cure?",
    "Why is 6 weeks of smoking cessation classified as early remission rather than sustained remission?",
    "What relapse warning signs should be reviewed with the patient?"
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
        "ibuprofen"
      ],
      "response": "I take Ibuprofen 200 mg occasionally for headaches. I've taken Sertraline 100 mg every single day with zero missed doses and no side effects."
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
      "response": "Rarely, maybe a glass of wine once a month."
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
        "job",
        "work",
        "employ",
        "living",
        "husband",
        "teacher"
      ],
      "response": "I'm teaching full-time, feeling great at work and not overwhelmed. My husband and I go hiking every weekend and I'm reading regularly again."
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
        "necessary"
      ],
      "response": "I feel fantastic and my mood is completely back to normal. Do I really need to keep taking Sertraline 100 mg every day now that I feel well? What if my depression comes back in the future?"
    }
  ],
  "ASSESSMENT_CARDS": [
    {
      "id": "w5c_a1",
      "title": "1. Major Depressive Disorder (MDD) — In Full Remission, Stable on Maintenance Therapy",
      "icon": "ShieldCheck",
      "color": "10b981",
      "questions": [
        {
          "key": "q1",
          "q": "What clinical findings confirm remission and what is the guideline-based continuation therapy plan?",
          "defaultAnswer": "Major Depressive Disorder (MDD), in full clinical remission, stable on maintenance therapy. PHQ-9 score is 2 (minimal/no depressive symptoms), demonstrating a progressive improvement trend across all 3 visits (initial 13 -> 4-week 8 -> current 2). Sertraline 100 mg PO daily and CBT completion cited as primary drivers of resolution of depressive symptoms. Patient demonstrates complete return to baseline functioning: mood back to normal, normal energy, excellent concentration, good motivation, restored enjoyment in hobbies (reading, weekly hiking), improved social engagement, excellent work performance, and absence of distress or functional impairment. Excellent medication adherence (100% compliant, 0 missed doses), excellent tolerability (zero adverse effects), and meaningful CBT engagement documented. Guidelines cited: ACP Living Clinical Guideline recommends continuation therapy for >=4 to 9 months post-remission; VA/DoD MDD Guideline recommends continuation therapy for >=6 months post-remission. Premature discontinuation carries a high risk of depressive relapse. Rationale for continuing Sertraline 100 mg PO daily: full remission achieved, excellent tolerability, excellent adherence, high likelihood of continued benefit. No dose change or medication switch warranted. Patient question regarding stopping treatment is identified as a knowledge deficit; education focus must address maintenance treatment expectations and relapse prevention."
        }
      ]
    },
    {
      "id": "w5c_a2",
      "title": "2. Generalized Anxiety Disorder (GAD) — In Full Remission / Minimal Symptoms, Well Controlled",
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
      "title": "3. Tobacco Use Disorder — In Early Remission, Successful Smoking Cessation",
      "icon": "Flame",
      "color": "059669",
      "questions": [
        {
          "key": "q3",
          "q": "What is the smoking cessation status and ongoing relapse prevention plan?",
          "defaultAnswer": "Tobacco Use Disorder, in early remission, successful smoking cessation. Patient successfully quit smoking approximately 6 weeks ago and has remained completely tobacco-free with zero smoking relapse. Occasional cravings during stress are acknowledged and effectively managed using CBT deep breathing skills. Patient is highly motivated to maintain abstinence. Improved mental health and coping strategies identified as key contributors. Six weeks of tobacco abstinence constitutes **Early Remission** (sustained remission requires >=12 months). Early phase carries elevated relapse risk; continued behavioral counseling and support appropriate per USPSTF guidelines for tobacco cessation. FDA-approved pharmacotherapy options (NRT patch/gum/lozenge, bupropion SR, varenicline) were not initiated because behavioral approach achieved successful cessation, but remain available if relapse occurs. Reinforcement of cessation success and relapse prevention strategies planned for future visits."
        }
      ]
    },
    {
      "id": "w5c_a4",
      "title": "4. Behavioral Health Knowledge Deficit — Improving",
      "icon": "BookOpen",
      "color": "0891b2",
      "questions": [
        {
          "key": "q4",
          "q": "How are patient questions regarding maintenance duration and relapse prevention addressed?",
          "defaultAnswer": "Behavioral Health Knowledge Deficit, improving status. Patient demonstrates improved understanding of depression, anxiety, medication therapy, and behavioral health management. However, patient has specific questions regarding duration of therapy and whether treatment remains necessary now that she feels completely well, expressing concern about potential future depression recurrence. Additional education regarding maintenance treatment expectations, distinction between remission and permanent cure, and relapse prevention is appropriate. Topics directly linked to patient's specific questions: explaining maintenance duration (>=6-9 months), educating on relapse warning signs, instructing prompt contact if symptoms recur, and emphasizing that education improves long-term adherence and reduces recurrence risk. Documented as an active, ongoing concern."
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
          "label": "Provide counseling on common triggers for relapse and stress-management strategies for craving management",
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
      "title": "5. Follow-Up & Longitudinal Monitoring Plan",
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
          "label": "Monitor mood, anxiety symptoms, sleep quality, functional status, and signs of relapse; future visits will focus on maintaining remission, preventing relapse, supporting tobacco abstinence, and long-term behavioral health recovery",
          "correct": true
        }
      ]
    }
  ]
})

export const W5_CASES = [sarahTue, sarahWed, sarahThu]
export const W5_RUBRICS = {}
