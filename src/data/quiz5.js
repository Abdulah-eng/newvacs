// Week 5 Monday quiz — Depression + Anxiety + Tobacco Cessation, grounded in
// teaching summaries, ACP 2023, VA/DoD Guidelines, and Patient cases.
// Representative 10-item sample.

export const PASS_THRESHOLD = 90

export const QUIZ_ITEMS = [
  // ------------------------------- Depression & Anxiety -------------------------------
  {
    id: 'PSYCH-001', disease: 'MDD', type: 'sba', concept_tag: 'phq9_interpretation',
    stem: 'A patient completes a PHQ-9 and scores 16. How should this depression severity be classified?',
    options: [
      { key: 'a', text: 'Mild' },
      { key: 'b', text: 'Moderate' },
      { key: 'c', text: 'Moderately severe' },
      { key: 'd', text: 'Severe' },
    ],
    correct: ['c'],
    rationale: 'PHQ-9 interpretation: 5-9 Mild, 10-14 Moderate, 15-19 Moderately severe, 20-27 Severe. A score of 16 is moderately severe.',
  },
  {
    id: 'PSYCH-002', disease: 'MDD', type: 'sata', concept_tag: 'mdd_first_line',
    stem: 'Which medication classes are generally considered first-line pharmacotherapy for Major Depressive Disorder (MDD)? Select all that apply.',
    options: [
      { key: 'a', text: 'Selective serotonin reuptake inhibitors (SSRIs)' },
      { key: 'b', text: 'Serotonin-norepinephrine reuptake inhibitors (SNRIs)' },
      { key: 'c', text: 'Tricyclic antidepressants (TCAs)' },
      { key: 'd', text: 'Monoamine oxidase inhibitors (MAOIs)' },
    ],
    correct: ['a', 'b'],
    rationale: 'SSRIs and SNRIs are considered first-line due to their favorable safety and tolerability profiles. TCAs and MAOIs are generally reserved for later lines of therapy due to toxicity and drug interactions.',
  },
  {
    id: 'PSYCH-003', disease: 'MDD', type: 'sba', concept_tag: 'adequate_trial',
    stem: 'A patient with MDD was started on sertraline 50 mg daily 2 weeks ago. They report no improvement in mood. What is the most appropriate action?',
    options: [
      { key: 'a', text: 'Switch to a different SSRI' },
      { key: 'b', text: 'Add an atypical antipsychotic' },
      { key: 'c', text: 'Continue current therapy and reassure the patient that full effect takes 4 to 8 weeks' },
      { key: 'd', text: 'Label the patient as having treatment-resistant depression' },
    ],
    correct: ['c'],
    rationale: 'An adequate trial of an antidepressant requires 4 to 8 weeks at a therapeutic dose. It is too early to assess efficacy at 2 weeks, so reassurance and continued adherence are key.',
  },
  {
    id: 'PSYCH-004', disease: 'GAD', type: 'sba', concept_tag: 'gad_first_line',
    stem: 'A patient with newly diagnosed Generalized Anxiety Disorder (GAD) and comorbid MDD needs pharmacotherapy. Which option is the most appropriate initial choice to treat both conditions?',
    options: [
      { key: 'a', text: 'Lorazepam' },
      { key: 'b', text: 'Escitalopram' },
      { key: 'c', text: 'Buspirone' },
      { key: 'd', text: 'Quetiapine' },
    ],
    correct: ['b'],
    rationale: 'SSRIs like escitalopram are first-line for both MDD and GAD. Using a single agent to treat both comorbid conditions is preferred over polypharmacy. Benzodiazepines should be avoided for chronic treatment.',
  },
  {
    id: 'PSYCH-005', disease: 'MDD', type: 'ktype', concept_tag: 'treatment_resistant_depression',
    stem: 'Which statements are accurate regarding Treatment-Resistant Depression (TRD)?\n  I. It is defined as a failure to respond to one antidepressant trial\n  II. It generally requires failure of at least two adequate antidepressant trials\n  III. Adherence must be confirmed before diagnosing TRD\n  IV. Esketamine is a potential treatment option for TRD',
    options: [
      { key: 'a', text: 'I and III only' },
      { key: 'b', text: 'II and IV only' },
      { key: 'c', text: 'II, III, and IV only' },
      { key: 'd', text: 'I, II, III, and IV' },
    ],
    correct: ['c'],
    rationale: 'TRD is defined by the failure of at least two adequate trials (II). Adherence and adequate dosing/duration must be confirmed (III). Esketamine is an approved, evidence-based option for TRD (IV).',
  },
  {
    id: 'PSYCH-006', disease: 'MDD', type: 'sba', concept_tag: 'remission_goal',
    stem: 'What is the ultimate goal of acute phase treatment for Major Depressive Disorder?',
    options: [
      { key: 'a', text: 'A 50% reduction in PHQ-9 score' },
      { key: 'b', text: 'Remission, defined as a PHQ-9 score <5 and absence of significant symptoms' },
      { key: 'c', text: 'Improvement in sleep and appetite only' },
      { key: 'd', text: 'Return to baseline weight' },
    ],
    correct: ['b'],
    rationale: 'The goal of treatment is full remission (resolution of symptoms, PHQ-9 <5) and restoration of baseline functioning. Partial response is not sufficient and warrants treatment adjustment.',
  },

  // ------------------------------- Tobacco Cessation -------------------------------
  {
    id: 'TOB-001', disease: 'Tobacco', type: 'sba', concept_tag: 'most_effective_monotherapy',
    stem: 'Which pharmacotherapy is generally considered the most effective monotherapy for tobacco cessation?',
    options: [
      { key: 'a', text: 'Nicotine patch' },
      { key: 'b', text: 'Nicotine gum' },
      { key: 'c', text: 'Bupropion' },
      { key: 'd', text: 'Varenicline' },
    ],
    correct: ['d'],
    rationale: 'Varenicline (Chantix) has demonstrated superior efficacy compared to bupropion or single-agent nicotine replacement therapy in promoting tobacco cessation.',
  },
  {
    id: 'TOB-002', disease: 'Tobacco', type: 'sba', concept_tag: 'bupropion_dual_benefit',
    stem: 'A patient with MDD and Tobacco Use Disorder wants to quit smoking and start treatment for depression. Which medication has FDA approval for treating both conditions?',
    options: [
      { key: 'a', text: 'Fluoxetine' },
      { key: 'b', text: 'Bupropion' },
      { key: 'c', text: 'Varenicline' },
      { key: 'd', text: 'Sertraline' },
    ],
    correct: ['b'],
    rationale: 'Bupropion (Wellbutrin/Zyban) is FDA approved for both Major Depressive Disorder and smoking cessation, making it a highly appealing option for patients with this specific comorbidity.',
  },
  {
    id: 'TOB-003', disease: 'Tobacco', type: 'sata', concept_tag: '5A_framework',
    stem: 'Which of the following are steps in the "5 A\'s" framework for treating tobacco use and dependence? Select all that apply.',
    options: [
      { key: 'a', text: 'Ask about tobacco use' },
      { key: 'b', text: 'Advise to quit' },
      { key: 'c', text: 'Assess readiness to quit' },
      { key: 'd', text: 'Assist with quitting (counseling and meds)' },
      { key: 'e', text: 'Arrange follow-up' },
    ],
    correct: ['a', 'b', 'c', 'd', 'e'],
    rationale: 'The 5 A\'s are Ask, Advise, Assess, Assist, and Arrange. This framework guides clinicians through a comprehensive, evidence-based intervention for tobacco users.',
  },
  {
    id: 'TOB-004', disease: 'Tobacco', type: 'sba', concept_tag: 'combination_therapy',
    stem: 'A patient has tried the nicotine patch alone previously and relapsed due to strong cravings after meals. What is the best strategy for their next quit attempt?',
    options: [
      { key: 'a', text: 'Try the patch again at a lower dose' },
      { key: 'b', text: 'Combine the nicotine patch with a short-acting NRT (like gum or lozenge) for breakthrough cravings' },
      { key: 'c', text: 'Tell the patient they should quit cold turkey instead' },
      { key: 'd', text: 'Recommend switching to e-cigarettes permanently' },
    ],
    correct: ['b'],
    rationale: 'Combination NRT (a long-acting patch for baseline craving control plus a short-acting product like gum or lozenge for acute cravings) is significantly more effective than single-agent NRT and is the standard of care for patients failing monotherapy.',
  }
]
