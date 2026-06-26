// Week 4 Monday quiz — Heart Failure + AFib + Anticoagulation, grounded in
// teaching summaries, 2022 HF, 2023 AFib, 2026 VTE guidelines, and Patient cases.
// Representative 10-item sample.

export const PASS_THRESHOLD = 90

export const QUIZ_ITEMS = [
  // ------------------------------- Heart Failure -------------------------------
  {
    id: 'HF-001', disease: 'HF', type: 'sba', concept_tag: 'hf_classification',
    stem: 'A 58-year-old patient has an echocardiogram showing LVEF 35%. Based on the Week 4 heart failure framework, how should this patient’s heart failure be classified?',
    options: [
      { key: 'a', text: 'Heart failure with preserved ejection fraction' },
      { key: 'b', text: 'Heart failure with mildly reduced ejection fraction' },
      { key: 'c', text: 'Heart failure with reduced ejection fraction' },
      { key: 'd', text: 'Stage A heart failure' },
    ],
    correct: ['c'],
    rationale: 'Heart failure with reduced ejection fraction (HFrEF) is defined as LVEF ≤40%. This patient’s LVEF of 35% meets the definition of HFrEF.',
  },
  {
    id: 'HF-002', disease: 'HF', type: 'sba', concept_tag: 'nyha_class',
    stem: 'A patient with heart failure reports being comfortable at rest but develops shortness of breath when climbing stairs or doing ordinary activity. Which NYHA functional class best describes this patient?',
    options: [
      { key: 'a', text: 'NYHA Class I' },
      { key: 'b', text: 'NYHA Class II' },
      { key: 'c', text: 'NYHA Class III' },
      { key: 'd', text: 'NYHA Class IV' },
    ],
    correct: ['b'],
    rationale: 'NYHA Class II describes slight limitation of physical activity. Patients are comfortable at rest, but ordinary activity causes symptoms.',
  },
  {
    id: 'HF-003', disease: 'HF', type: 'sata', concept_tag: 'gdmt_pillars',
    stem: 'Which medication classes form the "four pillars" of guideline-directed medical therapy (GDMT) that reduce mortality in HFrEF? Select all that apply.',
    options: [
      { key: 'a', text: 'ACE inhibitor / ARB / ARNI' },
      { key: 'b', text: 'Beta blocker (evidence-based)' },
      { key: 'c', text: 'Mineralocorticoid receptor antagonist (MRA)' },
      { key: 'd', text: 'SGLT2 inhibitor' },
      { key: 'e', text: 'Loop diuretic' },
    ],
    correct: ['a', 'b', 'c', 'd'],
    rationale: 'The four pillars of HFrEF GDMT that reduce mortality are ARNI/ACEi/ARB, evidence-based beta blockers, MRAs, and SGLT2 inhibitors. Loop diuretics relieve congestion but do not improve mortality.',
  },
  {
    id: 'HF-004', disease: 'HF', type: 'sba', concept_tag: 'arni_advantage',
    stem: 'Why is sacubitril/valsartan (ARNI) generally preferred over an ACE inhibitor or ARB for patients with HFrEF?',
    options: [
      { key: 'a', text: 'It has no effect on blood pressure' },
      { key: 'b', text: 'It requires less frequent dosing' },
      { key: 'c', text: 'It demonstrates greater reductions in cardiovascular mortality and heart failure hospitalizations' },
      { key: 'd', text: 'It does not cause hyperkalemia' },
    ],
    correct: ['c'],
    rationale: 'Sacubitril/valsartan has demonstrated superior reductions in morbidity and mortality compared with ACE inhibitors (enalapril) in patients with HFrEF, earning a Class 1 recommendation as the preferred RAAS inhibitor.',
  },

  // ------------------------------- AFib & Anticoagulation -------------------------------
  {
    id: 'AF-001', disease: 'AF', type: 'sba', concept_tag: 'chads_vasc',
    stem: 'A 68-year-old female patient with hypertension and heart failure develops atrial fibrillation. What is her CHA₂DS₂-VASc score?',
    options: [
      { key: 'a', text: '2' },
      { key: 'b', text: '3' },
      { key: 'c', text: '4' },
      { key: 'd', text: '5' },
    ],
    correct: ['c'],
    rationale: 'Age 65-74 (1), female sex (1), hypertension (1), and heart failure (1) yield a total score of 4, indicating a high risk of stroke and a strong indication for anticoagulation.',
  },
  {
    id: 'AF-002', disease: 'AF', type: 'sba', concept_tag: 'doac_vs_warfarin',
    stem: 'For a patient with newly diagnosed non-valvular atrial fibrillation and no contraindications, which anticoagulant strategy is preferred?',
    options: [
      { key: 'a', text: 'Warfarin with INR target 2.0-3.0' },
      { key: 'b', text: 'Direct oral anticoagulant (DOAC)' },
      { key: 'c', text: 'Aspirin 325 mg daily' },
      { key: 'd', text: 'Clopidogrel 75 mg daily' },
    ],
    correct: ['b'],
    rationale: 'DOACs are preferred over warfarin for stroke prevention in non-valvular AF due to a lower risk of intracranial hemorrhage, comparable or superior efficacy, and lack of routine monitoring requirements. Aspirin is not effective for stroke prevention in AF.',
  },
  {
    id: 'AF-003', disease: 'AF', type: 'ktype', concept_tag: 'apixaban_dosing',
    stem: 'A 82-year-old female weighing 58 kg with a serum creatinine of 1.2 mg/dL requires apixaban for atrial fibrillation. Which statement is correct regarding her dosing?\n  I. She requires a reduced dose of apixaban 2.5 mg BID\n  II. She should receive the standard dose of apixaban 5 mg BID\n  III. She meets two criteria for dose reduction: age ≥80 and weight ≤60 kg\n  IV. Apixaban is contraindicated in this patient',
    options: [
      { key: 'a', text: 'I only' },
      { key: 'b', text: 'II only' },
      { key: 'c', text: 'I and III only' },
      { key: 'd', text: 'II and III only' },
    ],
    correct: ['c'],
    rationale: 'Apixaban is dose-reduced to 2.5 mg BID if a patient meets at least two of the following: age ≥80 years, weight ≤60 kg, or SCr ≥1.5 mg/dL. This patient is 82 (1 criterion) and weighs 58 kg (2 criteria), so the dose must be reduced (I and III).',
  },
  {
    id: 'AF-004', disease: 'VTE', type: 'sba', concept_tag: 'vte_duration',
    stem: 'A patient is diagnosed with a deep vein thrombosis (DVT) provoked by a recent major orthopedic surgery. What is the recommended minimum duration of anticoagulation?',
    options: [
      { key: 'a', text: '4 weeks' },
      { key: 'b', text: '3 months' },
      { key: 'c', text: '6 months' },
      { key: 'd', text: 'Indefinitely' },
    ],
    correct: ['b'],
    rationale: 'For a provoked VTE with a transient, reversible risk factor (such as major surgery), the recommended duration of anticoagulation is 3 months.',
  },
  {
    id: 'AF-005', disease: 'AF', type: 'sata', concept_tag: 'bleeding_risk',
    stem: 'Which of the following are components of the HAS-BLED bleeding risk score? Select all that apply.',
    options: [
      { key: 'a', text: 'Hypertension' },
      { key: 'b', text: 'Abnormal renal or liver function' },
      { key: 'c', text: 'Stroke history' },
      { key: 'd', text: 'Male sex' },
      { key: 'e', text: 'Bleeding history' },
    ],
    correct: ['a', 'b', 'c', 'e'],
    rationale: 'HAS-BLED stands for Hypertension, Abnormal renal/liver function, Stroke, Bleeding, Labile INRs, Elderly (age > 65), and Drugs/alcohol. Male sex is not a bleeding risk factor in this score.',
  },
  {
    id: 'AF-006', disease: 'AF', type: 'sba', concept_tag: 'bleeding_management',
    stem: 'A patient with AF on apixaban reports recurrent mild epistaxis (nosebleeds) that resolve with direct pressure. What is the most appropriate management approach?',
    options: [
      { key: 'a', text: 'Stop apixaban immediately and switch to aspirin' },
      { key: 'b', text: 'Hold apixaban for one week, then restart' },
      { key: 'c', text: 'Continue apixaban, counsel on epistaxis management, and reassure' },
      { key: 'd', text: 'Reduce the apixaban dose to 2.5 mg BID' },
    ],
    correct: ['c'],
    rationale: 'Minor nuisance bleeding (like self-resolving epistaxis) should generally be managed locally without interrupting or reducing life-saving anticoagulation. DOACs should not be dose-reduced inappropriately, as this increases stroke risk without proven bleeding benefit.',
  }
]
