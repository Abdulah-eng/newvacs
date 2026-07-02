// Weekly Journal Club Discussion content — DAPA-CKD.
// Unlocks once the Thursday case (unlockCaseId) is completed.
export const JOURNAL_CLUB = {
  id: 'journal-club',
  unlockCaseId: 'maria-thu',
  title: 'Weekly Journal Club Discussion',
  subtitle: 'SGLT2 Inhibitors in Type 2 Diabetes and Cardiorenal Disease',
  description:
    'Apply DAPA-CKD findings to real-world pharmacist decision-making in patients with type 2 diabetes, chronic kidney disease, albuminuria, and cardiovascular risk.',
  citation:
    'Heerspink HJL, Stefánsson BV, Correa-Rotter R, et al. Dapagliflozin in Patients with Chronic Kidney Disease. N Engl J Med. 2020;383:1436–1446.',

  trial: {
    name: 'DAPA-CKD',
    facts: [
      { label: 'Drug', value: 'Dapagliflozin 10 mg once daily' },
      { label: 'Design', value: 'Multicenter, randomized, double-blind, placebo-controlled' },
      { label: 'Population', value: 'Adults with CKD, with or without type 2 diabetes' },
      { label: 'Sample size', value: '4,304 patients' },
      { label: 'Median follow-up', value: '2.4 years' },
    ],
    inclusion: [
      'Age ≥18 years',
      'eGFR 25–75 mL/min/1.73m²',
      'UACR 200–5000 mg/g',
      'Stable ACE inhibitor or ARB therapy ≥4 weeks unless contraindicated',
    ],
    primaryEndpoint: [
      'Sustained eGFR decline ≥50%',
      'End-stage kidney disease',
      'Death from renal causes',
      'Death from cardiovascular causes',
    ],
    primaryResult: [
      { label: 'Dapagliflozin', value: '9.2%' },
      { label: 'Placebo', value: '14.5%' },
      { label: 'Hazard ratio', value: '0.61' },
      { label: '95% CI', value: '0.51–0.72' },
      { label: 'p-value', value: '<0.001' },
      { label: 'ARR', value: '5.3%' },
      { label: 'NNT', value: '19' },
    ],
    secondary: [
      { label: 'Kidney-specific composite', value: 'HR 0.56' },
      { label: 'CV death or HF hospitalization', value: 'HR 0.71' },
      { label: 'All-cause mortality', value: 'HR 0.69' },
    ],
    safety: [
      'Serious adverse events occurred less frequently with dapagliflozin than placebo',
      'No significant increase in amputations',
      'No significant increase in fractures',
      'Diabetic ketoacidosis was rare',
      'Overall safety profile favorable',
    ],
  },

  questions: [
    {
      id: 'q1',
      title: 'Patient Eligibility and Trial Application',
      prompt:
        'A 58-year-old patient with type 2 diabetes, hypertension, and chronic kidney disease has an eGFR of 46 mL/min/1.73m² and a UACR of 620 mg/g. The patient is already taking lisinopril 20 mg daily and has stable renal function. Based on the DAPA-CKD trial, would this patient be an appropriate candidate for dapagliflozin? Explain your decision using the trial’s inclusion criteria, baseline therapy requirements, and expected clinical benefit.',
      
    },
    {
      id: 'q2',
      title: 'Therapy Selection Beyond A1C',
      prompt:
        'A patient with type 2 diabetes has an A1C of 7.1%, eGFR of 52 mL/min/1.73m², UACR of 900 mg/g, and no history of hypoglycemia. The provider says, “Their A1C is almost at goal, so I do not think we need another diabetes medication.” How would you respond as the pharmacist? Explain how DAPA-CKD supports using an SGLT2 inhibitor for cardiorenal risk reduction rather than only for glucose lowering.',
      
    },
    {
      id: 'q3',
      title: 'Interpreting Benefit and Communicating Value',
      prompt:
        'In DAPA-CKD, the primary outcome occurred in 9.2% of patients receiving dapagliflozin compared with 14.5% receiving placebo, with a hazard ratio of 0.61 and an NNT of 19. How would you explain the clinical significance of these results to a primary care provider? Then explain how you would translate the same information into patient-friendly language for someone worried about kidney failure.',
      
    },
    {
      id: 'q4',
      title: 'Safety and Monitoring in Practice',
      prompt:
        'A patient who meets DAPA-CKD eligibility criteria is started on dapagliflozin. They also take lisinopril and hydrochlorothiazide and report occasional lightheadedness when standing. What safety concerns would you assess before and after initiation? Include monitoring for renal function, volume status, blood pressure, genital/urinary symptoms, diabetic ketoacidosis risk, and when the medication may need to be temporarily held.',
      
    },
    {
      id: 'q5',
      title: 'Limits of Evidence and Patient-Specific Decision-Making',
      prompt:
        'A 70-year-old patient with CKD has an eGFR of 58 mL/min/1.73m² but a UACR of only 45 mg/g. The provider asks whether DAPA-CKD proves this patient should receive dapagliflozin. How would you evaluate whether the trial applies to this patient? Discuss the trial’s albuminuria requirement, generalizability limits, potential guideline evolution, and what other patient-specific factors would influence your recommendation.',
      
    },
  ],
}

export const SELF_RATINGS = [
  { key: 'needs', label: 'Needs improvement' },
  { key: 'meets', label: 'Meets expectations' },
  { key: 'strong', label: 'Strong clinical reasoning' },
]

// Derive progress from a saved journal-club state object.
export function journalProgress(state) {
  const responses = state?.responses || {}
  const answered = JOURNAL_CLUB.questions.filter(q => (responses[q.id] || '').trim().length > 0).length
  const total = JOURNAL_CLUB.questions.length
  return { answered, total, complete: answered === total }
}
