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
      answer:
        'Yes, this patient appears to be an appropriate candidate for dapagliflozin based on the DAPA-CKD trial population. The trial included adults with CKD who had an eGFR between 25 and 75 mL/min/1.73m² and a UACR between 200 and 5000 mg/g. This patient’s eGFR of 46 and UACR of 620 fall within those inclusion criteria. The patient is already receiving lisinopril, which aligns with the trial requirement that patients be on stable ACE inhibitor or ARB therapy for at least 4 weeks unless contraindicated. Since renal function is stable, dapagliflozin 10 mg once daily would be reasonable if no contraindications exist. The key benefit is not just glucose lowering; it is kidney and cardiovascular risk reduction. In DAPA-CKD, dapagliflozin reduced the composite risk of sustained eGFR decline of at least 50%, end-stage kidney disease, or renal/cardiovascular death compared with placebo.',
    },
    {
      id: 'q2',
      title: 'Therapy Selection Beyond A1C',
      prompt:
        'A patient with type 2 diabetes has an A1C of 7.1%, eGFR of 52 mL/min/1.73m², UACR of 900 mg/g, and no history of hypoglycemia. The provider says, “Their A1C is almost at goal, so I do not think we need another diabetes medication.” How would you respond as the pharmacist? Explain how DAPA-CKD supports using an SGLT2 inhibitor for cardiorenal risk reduction rather than only for glucose lowering.',
      answer:
        'The pharmacist should explain that this decision should not be based only on A1C. Although the patient’s A1C is close to goal, the patient has significant albuminuria and CKD risk. DAPA-CKD supports use of dapagliflozin in eligible CKD patients because it reduced kidney disease progression and renal/cardiovascular death. The benefit was observed in patients with and without type 2 diabetes, which reinforces that the effect is not purely due to glucose lowering. In this patient, dapagliflozin should be considered as cardiorenal protective therapy, not merely as an additional diabetes medication. A strong pharmacist response would be: “Even though the A1C is close to goal, the kidneys remain at risk. Dapagliflozin may help slow kidney disease progression and reduce cardiovascular events independent of its effect on blood sugar.”',
    },
    {
      id: 'q3',
      title: 'Interpreting Benefit and Communicating Value',
      prompt:
        'In DAPA-CKD, the primary outcome occurred in 9.2% of patients receiving dapagliflozin compared with 14.5% receiving placebo, with a hazard ratio of 0.61 and an NNT of 19. How would you explain the clinical significance of these results to a primary care provider? Then explain how you would translate the same information into patient-friendly language for someone worried about kidney failure.',
      answer:
        'To a provider, the pharmacist should explain that dapagliflozin produced a clinically meaningful reduction in kidney disease progression and renal/cardiovascular death. The absolute risk reduction was 5.3%, and the NNT was 19, meaning that treating 19 similar patients for the study duration would prevent one primary outcome event. The hazard ratio of 0.61 suggests a 39% relative risk reduction in the composite outcome. The outcome included meaningful events such as sustained major eGFR decline, end-stage kidney disease, renal death, and cardiovascular death. To a patient, the pharmacist should avoid overly technical language and say something like: “This medication has been shown to help protect the kidneys and lower the chance of serious kidney problems getting worse. It does not cure kidney disease, but it can help slow it down and protect you over time.”',
    },
    {
      id: 'q4',
      title: 'Safety and Monitoring in Practice',
      prompt:
        'A patient who meets DAPA-CKD eligibility criteria is started on dapagliflozin. They also take lisinopril and hydrochlorothiazide and report occasional lightheadedness when standing. What safety concerns would you assess before and after initiation? Include monitoring for renal function, volume status, blood pressure, genital/urinary symptoms, diabetic ketoacidosis risk, and when the medication may need to be temporarily held.',
      answer:
        'Before starting dapagliflozin, the pharmacist should assess baseline renal function, eGFR, electrolytes, blood pressure, volume status, orthostatic symptoms, and current diuretic use. Because the patient is taking hydrochlorothiazide and reports lightheadedness, volume depletion or orthostatic hypotension should be considered. After initiation, monitor renal function and eGFR, recognizing that a small early eGFR dip may occur but long-term kidney effects are protective. Monitor blood pressure and symptoms of dehydration, especially with concurrent ACE inhibitor and diuretic therapy. Counsel on genital mycotic infections and urinary symptoms, including burning, itching, unusual discharge, fever, flank pain, or persistent symptoms. Counsel on rare diabetic ketoacidosis symptoms such as nausea, vomiting, abdominal pain, shortness of breath, severe fatigue, or feeling very sick even if glucose is not extremely high. Dapagliflozin may need to be temporarily held during acute illness, dehydration, vomiting, poor oral intake, prolonged fasting, or before major surgery/procedures depending on local protocol.',
    },
    {
      id: 'q5',
      title: 'Limits of Evidence and Patient-Specific Decision-Making',
      prompt:
        'A 70-year-old patient with CKD has an eGFR of 58 mL/min/1.73m² but a UACR of only 45 mg/g. The provider asks whether DAPA-CKD proves this patient should receive dapagliflozin. How would you evaluate whether the trial applies to this patient? Discuss the trial’s albuminuria requirement, generalizability limits, potential guideline evolution, and what other patient-specific factors would influence your recommendation.',
      answer:
        'DAPA-CKD does not directly prove benefit for this exact patient because the trial required a UACR of 200–5000 mg/g. This patient’s UACR of 45 mg/g is below the albuminuria range studied in the trial. Although the patient’s eGFR fits the trial’s eGFR range, the low UACR means the patient is outside the core DAPA-CKD population. The pharmacist should avoid overstating the evidence. A strong response would distinguish direct trial evidence from broader guideline-based application. Other factors to consider include current guideline recommendations, diabetes status, cardiovascular risk, heart failure history, kidney disease progression, tolerability, cost, volume status, fall risk, and patient preferences. If therapy is recommended, it should be framed as based on broader evidence or guideline evolution rather than DAPA-CKD alone.',
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
