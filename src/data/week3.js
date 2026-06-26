// WEEK 3 module content — Asthma + Chronic Obstructive Pulmonary Disease
// Grounded in 2025 GINA and 2026 GOLD guideline summaries and patient master profiles.

export const MODULE3 = {
  code: "WEEK3_ASTHMA_COPD",
  title: "Week 3 — Asthma + Chronic Obstructive Pulmonary Disease",
  subtitle: "Inhaler optimization, exacerbation prevention, and eosinophilic phenotyping",
}

export const PATIENTS3 = [
  { key: "A", id: "sarah_t", name: "Sarah Thompson", tag: "Moderate Persistent Asthma", focus: "Normalizing uncontrolled symptoms; ICS non-use; rescue overuse" },
  { key: "B", id: "bob_j", name: `Robert "Bob" Jenkins`, tag: "COPD + HTN + HLD", focus: "LABA/LAMA initiation; cost concerns; maintenance vs. rescue confusion" },
  { key: "C", id: "maria_t", name: "Maria Thompson", tag: "Asthma-COPD Overlap (ACO)", focus: "Eosinophilic phenotype; recurrent exacerbations; biologic candidacy" },
]

export const caseIdFor3 = (patientId, dayKey) => `w3-${patientId}-${dayKey}`

export const GUIDELINE_REVIEW3 = {
  intro: "Week 3 covers the two most common chronic respiratory diseases in ambulatory care. Read the GINA 2025 and GOLD 2026 summaries, then pass the 40-item quiz at ≥90% to unlock Tuesday.",
  sections: [
    {
      id: "asthma", title: "Asthma — GINA 2025", color: "0891b2",
      pdf: "GINA-2025-Asthma-Guideline.pdf",
      points: [
        { label: "Control classification", text: "Well-controlled: symptoms ≤2 days/wk, no nighttime awakenings, reliever ≤2 days/wk, no activity limitation. Partly controlled: 1–2 criteria not met. Uncontrolled: 3–4 criteria not met." },
        { label: "SMART therapy", text: "Single Maintenance And Reliever Therapy (SMART): low-dose ICS/formoterol used both as controller and reliever. Reduces exacerbation risk even with infrequent use." },
        { label: "ICS are controller medications", text: "ICS reduce airway inflammation — they do not work like rescue inhalers. Patients must use them daily regardless of symptoms." },
        { label: "Bronchodilator reversibility", text: "Asthma is supported by FEV1 increase ≥12% AND ≥200 mL after bronchodilator. Variable symptoms over time also support the diagnosis." },
        { label: "Rescue overuse is a red flag", text: "Using a rescue inhaler ≥2 days/week indicates uncontrolled asthma and an opportunity for therapy escalation." },
        { label: "Step-up therapy", text: "If asthma is uncontrolled: confirm diagnosis, adherence, technique, and eliminate triggers before escalating. If confirmed, step up per GINA treatment track." },
        { label: "Common mistakes", text: "Treating rescue use as normal; not escalating despite persistent symptoms; prescribing ICS without demonstrating technique; failing to reassess at follow-up." },
      ],
    },
    {
      id: "copd", title: "COPD — GOLD 2026", color: "13314f",
      pdf: "GOLD-2026-COPD-Guideline.pdf",
      points: [
        { label: "Diagnosis", text: "Post-bronchodilator FEV1/FVC <0.70 confirms persistent airflow limitation. COPD is not diagnosed by symptoms alone." },
        { label: "Symptom assessment", text: "CAT score ≥10 or mMRC ≥2 = more symptoms. Primary driver of initial therapy selection alongside exacerbation history." },
        { label: "Exacerbation risk", text: "≥2 moderate or ≥1 severe (hospitalization) exacerbations in the past year = high exacerbation risk. Risk drives therapy escalation." },
        { label: "Initial inhaled therapy", text: "For most symptomatic patients: LABA/LAMA combination is preferred. LABA or LAMA monotherapy for mild symptoms. Add ICS when eosinophils ≥300 or recurrent exacerbations." },
        { label: "Triple therapy", text: "LABA + LAMA + ICS (e.g., Trelegy, Breztri) for patients with recurrent exacerbations or elevated eosinophils on LABA/LAMA." },
        { label: "Blood eosinophils", text: "Eosinophils ≥300 cells/µL predict ICS responsiveness and inform escalation decisions. Eosinophils <100 suggest limited ICS benefit." },
        { label: "Common mistakes", text: "Using only a rescue inhaler for COPD; failing to initiate maintenance therapy; escalating to triple therapy before assessing adherence and technique." },
      ],
    },
    {
      id: "overlap", title: "Asthma-COPD Overlap (ACO) & Biologics", color: "7c3aed",
      pdf: "ACO_Integration_Summary.pdf",
      points: [
        { label: "ACO features", text: "Persistent airflow limitation (as in COPD) PLUS features of asthma: significant bronchodilator reversibility, eosinophilia, early onset, or atopy." },
        { label: "Treat the dominant phenotype", text: "If asthma features are prominent, ICS are mandatory. Treat underlying eosinophilic inflammation alongside bronchodilator therapy." },
        { label: "Biologic candidacy", text: "Severe eosinophilic disease with recurrent exacerbations despite optimized inhaled therapy may warrant anti-IL-5 therapy (mepolizumab, benralizumab). MATINEE provides evidence for eosinophilic COPD." },
        { label: "Adherence and technique first", text: "Before escalating to biologics, confirm: correct inhaler technique, consistent daily use, and elimination of contributing triggers." },
        { label: "Exacerbation burden", text: "Each exacerbation accelerates lung function decline. Preventing exacerbations is as important as controlling daily symptoms." },
      ],
    },
  ],
}

export const MATINEE_JOURNAL = {
  id: "week3-journal",
  title: "Friday Journal Club",
  subtitle: "Targeting Eosinophilic Inflammation Beyond Optimized Inhaled Therapy",
  description: "Evaluate the MATINEE trial and apply it to Week 3 patients. The pedagogical payoff: understanding when biologic therapy is justified in eosinophilic COPD, and that a high eosinophil count alone is not sufficient — it must be combined with exacerbation burden and optimized inhaled therapy.",
  citation: "Pavord ID, Rabe KF, Martinez FJ, et al. Mepolizumab to Prevent Exacerbations in COPD with an Eosinophilic Phenotype (MATINEE). N Engl J Med. 2025.",
  trial: {
    name: "MATINEE",
    facts: [
      { label: "Drug", value: "Mepolizumab 100 mg subcutaneously every 4 weeks" },
      { label: "Design", value: "International, multicenter, randomized, double-blind, placebo-controlled" },
      { label: "Population", value: "COPD with eosinophilic phenotype (eos ≥300 cells/µL), frequent exacerbator history, on optimized inhaled therapy" },
      { label: "Sample size", value: "≈800 patients" },
      { label: "Follow-up", value: "≈52 weeks" },
    ],
    inclusion: [
      "Age ≥40 years",
      "Established COPD diagnosis",
      "Blood eosinophil count ≥300 cells/µL",
      "History of frequent COPD exacerbations",
      "On optimized inhaled maintenance therapy (LABA/LAMA ± ICS)",
    ],
    primaryEndpoint: [
      "Annualized rate of moderate or severe COPD exacerbations",
    ],
    primaryResult: [
      { label: "Result", value: "Mepolizumab significantly reduced moderate/severe exacerbation rate vs. placebo" },
      { label: "Time to first exacerbation", value: "Longer with mepolizumab" },
      { label: "Safety", value: "Generally well tolerated; adverse event rates similar between groups" },
    ],
    secondary: [
      { label: "Quality of life", value: "Improved with mepolizumab" },
      { label: "Lung function (FEV1)", value: "No major differences between groups" },
    ],
    safety: [
      "Well tolerated; no major unexpected safety signals",
      "Injection-site reactions were uncommon",
      "Adverse event rates similar to placebo group",
    ],
  },
  questions: [
    {
      id: "q1", title: "Patient Selection",
      prompt: "A 68-year-old patient with COPD is on Trelegy Ellipta with excellent adherence, eosinophil count of 420 cells/µL, and four prednisone-treated exacerbations in the past year. Does MATINEE support consideration of mepolizumab?",
      answer: "Yes. MATINEE enrolled COPD patients with eosinophils ≥300 cells/µL and recurrent exacerbations despite optimized inhaled maintenance therapy — this patient closely fits. The trial demonstrated meaningful reductions in moderate/severe exacerbation rates. Triple therapy confirms foundational inhaled therapy is already optimized, making biologic escalation a reasonable conversation.",
    },
    {
      id: "q2", title: "Adding a Biologic to Triple Therapy",
      prompt: "A patient already on triple inhaled therapy asks why you want to add yet another medication. How do you explain the rationale?",
      answer: "Triple therapy (LABA + LAMA + ICS) controls symptoms and reduces exacerbations, but some patients with elevated eosinophils continue to experience significant residual disease. MATINEE shows that targeting eosinophilic (Type 2) airway inflammation with an anti-IL-5 agent provides a mechanistically distinct layer of protection beyond inhalers. In plain terms: your inhalers manage your breathing day-to-day, but your immune system is still triggering flare-ups through a separate inflammatory pathway. This monthly injection targets that specific pathway.",
    },
    {
      id: "q3", title: "Adherence Before Biologics",
      prompt: "Why is it critical to confirm inhaler adherence and technique before considering biologic therapy for COPD?",
      answer: "Poor adherence and poor inhaler technique are the most common correctable causes of apparent treatment failure. MATINEE enrolled patients with truly optimized maintenance therapy — biologics are only justified when foundational therapy is confirmed adequate. Escalating to expensive biologic therapy in a patient who is not using their inhalers correctly would expose them to unnecessary cost and risk without addressing the root cause.",
    },
    {
      id: "q4", title: "Eosinophilia Alone Is Not Sufficient",
      prompt: "A patient has a blood eosinophil count of 520 cells/µL but has not had any COPD exacerbations in the past year. Does MATINEE support initiating biologic therapy?",
      answer: "Not based on MATINEE alone. The trial enrolled patients with both elevated eosinophils AND a history of frequent exacerbations despite optimized inhaled therapy. Eosinophilia predicts ICS responsiveness and biologic eligibility, but it is not sufficient alone — clinical burden (exacerbation frequency) must also be present. A stable, non-exacerbating patient with elevated eosinophils is better managed by continued optimization and observation.",
    },
    {
      id: "q5", title: "Best-Fit Patient",
      prompt: "Which of this week's three patients is the best candidate for biologic therapy discussion? Connect your answer to MATINEE eligibility criteria.",
      answer: "Maria Thompson (Patient C) with Asthma-COPD Overlap is the best candidate. She has persistent airflow limitation, eosinophilic airway inflammation, recurrent exacerbations despite inhaled therapy, and significant symptom burden — closely mirroring the MATINEE population. Sarah Thompson (Patient A) has asthma alone, not eosinophilic COPD. Bob Jenkins (Patient B) needs foundational LABA/LAMA therapy first; his eligibility should be re-evaluated after his maintenance regimen is optimized. Maria's combination of eosinophilic phenotype, ACO overlap, and persistent exacerbations makes her the appropriate biologic candidate.",
    },
  ],
}
