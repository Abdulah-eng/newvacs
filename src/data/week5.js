// WEEK 5 module content — Depression + Anxiety + Tobacco Cessation
// Grounded in ACP Living Clinical Guideline 2023, VA/DoD MDD 2022, VA/DoD Anxiety 2023,
// USPSTF Tobacco 2021, and the ESCAPE-TRD journal club.

export const MODULE5 = {
  code: "WEEK5_DEPRESSION_ANXIETY_TOBACCO",
  title: "Week 5 — Depression + Anxiety + Tobacco Cessation",
  subtitle: "Behavioral health management, antidepressant selection, and treatment-resistant depression",
}

export const PATIENTS5 = [
  { key: "A", id: "sarah_m", name: "Sarah Mitchell", tag: "MDD + GAD + Tobacco Use", focus: "Initial antidepressant selection; PHQ-9/GAD-7 interpretation; cessation readiness assessment" },
  { key: "B", id: "jessica_r", name: "Jessica Ramirez", tag: "MDD + GAD + Nonadherence", focus: "Distinguishing nonadherence from treatment failure; cost/access barriers; therapy engagement" },
  { key: "C", id: "david_c", name: "David Carter", tag: "Treatment-Resistant MDD + Severe GAD", focus: "TRD evaluation; augmentation strategies; suicide risk assessment; biologic referral criteria" },
]

export const caseIdFor5 = (patientId, dayKey) => `w5-${patientId}-${dayKey}`

export const GUIDELINE_REVIEW5 = {
  intro: "Week 5 covers three behavioral health conditions that frequently coexist. Read the depression, anxiety, and tobacco cessation guideline summaries, then pass the 40-item quiz at ≥90% to unlock Tuesday.",
  sections: [
    {
      id: "depression", title: "Depression — ACP 2023 / VA/DoD 2022", color: "13314f",
      pdf: "ACP-VA-DoD-Depression-Guidelines.pdf",
      points: [
        { label: "PHQ-9 interpretation", text: "0–4: Minimal. 5–9: Mild. 10–14: Moderate. 15–19: Moderately severe. 20–27: Severe. Score ≥10 suggests clinically significant depression requiring treatment." },
        { label: "First-line agents", text: "SSRIs (sertraline, escitalopram, fluoxetine) and SNRIs (venlafaxine, duloxetine) are first-line. Select based on side-effect profile, comorbidities, prior response, and cost." },
        { label: "Adequate trial duration", text: "Allow 4–8 weeks at therapeutic dose before concluding inadequate response. Partial response at 4 weeks: optimize dose. No response at 4–6 weeks: consider switch." },
        { label: "Remission target", text: "Goal is remission (PHQ-9 <5), not just response (≥50% score reduction). Partial response is not success — reassess and adjust." },
        { label: "Non-pharmacologic therapy", text: "CBT (cognitive behavioral therapy) is effective alone or combined with medication. Recommend alongside pharmacotherapy, especially for mild-moderate MDD." },
        { label: "Maintenance therapy", text: "Continue antidepressant ≥6–12 months after achieving remission. Patients with recurrent episodes may need indefinite treatment." },
        { label: "Common mistakes", text: "Stopping medication prematurely when feeling better; not trying adequate dose and duration; labeling as treatment-resistant before confirming adherence; missing anxiety as a comorbidity." },
      ],
    },
    {
      id: "anxiety", title: "Anxiety — VA/DoD 2023 / USPSTF 2023", color: "0891b2",
      pdf: "VA-DoD-Anxiety-Guideline.pdf",
      points: [
        { label: "GAD-7 interpretation", text: "0–4: Minimal. 5–9: Mild. 10–14: Moderate. 15–21: Severe. Score ≥10 suggests clinically significant GAD requiring treatment." },
        { label: "First-line pharmacotherapy", text: "SSRIs and SNRIs are first-line for GAD. Buspirone is second-line. Benzodiazepines should be used cautiously and short-term (avoid chronic use)." },
        { label: "SSRI/SNRI dual benefit", text: "For patients with comorbid depression and anxiety, one SSRI/SNRI agent often addresses both conditions — prefer this over polypharmacy when possible." },
        { label: "Psychotherapy", text: "CBT is highly effective for GAD, with or without medication. Recommend concurrent therapy when accessible." },
        { label: "Avoid benzodiazepine dependence", text: "Chronic benzodiazepines carry risks of dependence, cognitive impairment, and fall risk. Use only for short-term acute anxiety management while initiating SSRI/SNRI." },
        { label: "Common mistakes", text: "Using benzodiazepines as long-term treatment; not recognizing GAD as a comorbidity with MDD; failing to reassess with GAD-7 at follow-up; underestimating impact of anxiety on treatment response." },
      ],
    },
    {
      id: "tobacco", title: "Tobacco Cessation — VA/DoD 2025 / USPSTF 2021", color: "7c3aed",
      pdf: "VA-DoD-Tobacco-Cessation-2025.pdf",
      points: [
        { label: "5As framework", text: "Ask (identify users), Advise (clear quit message), Assess (readiness to quit), Assist (counseling + medication), Arrange (follow-up). Apply at every clinical encounter." },
        { label: "First-line pharmacotherapy", text: "Varenicline (Chantix/Champix) is most effective. Nicotine replacement therapy (patch, gum, lozenge — combinations increase success). Bupropion is an option (dual benefit in depression)." },
        { label: "Bupropion advantage in comorbid depression", text: "Bupropion SR (Wellbutrin/Zyban) has FDA approval for both depression and smoking cessation — particularly useful in patients with MDD + tobacco use." },
        { label: "Motivational interviewing", text: "For patients not ready to quit, brief motivational interviewing increases future quit attempts. Avoid lecturing; focus on ambivalence and patient values." },
        { label: "Cessation counseling + medication", text: "Combination of behavioral counseling and pharmacotherapy is significantly more effective than either alone." },
        { label: "Common mistakes", text: "Not asking about tobacco at every visit; offering only brief advice without pharmacotherapy; not addressing NRT or varenicline because of mood concerns; not providing follow-up support." },
      ],
    },
  ],
}

export const ESCAPE_TRD_JOURNAL = {
  id: "week5-journal",
  title: "Friday Journal Club",
  subtitle: "Escalating Therapy After Antidepressant Failure — The ESCAPE-TRD Trial",
  description: "Evaluate the ESCAPE-TRD trial and apply it to Week 5 patients. The pedagogical payoff: distinguishing nonadherence from true treatment-resistant depression, and understanding when escalation to advanced therapies like esketamine is clinically justified.",
  citation: "Daly EJ, Singh JB, Fedgchin M, et al. Esketamine Nasal Spray versus Quetiapine Extended Release for Treatment-Resistant Depression. N Engl J Med. 2023;388:227-239.",
  trial: {
    name: "ESCAPE-TRD",
    facts: [
      { label: "Intervention", value: "Esketamine nasal spray (under supervision) + continued oral antidepressant" },
      { label: "Comparator", value: "Quetiapine extended-release augmentation + continued oral antidepressant" },
      { label: "Design", value: "International, multicenter, randomized, open-label, active-controlled trial" },
      { label: "Population", value: "Adults with treatment-resistant MDD (failure of ≥2 adequate antidepressant trials)" },
      { label: "Follow-up", value: "Through acute and maintenance treatment phases" },
    ],
    inclusion: [
      "Age 18–74 years",
      "Major depressive disorder diagnosis",
      "Failure of at least two antidepressant therapies at adequate dose and duration",
      "Current depressive episode requiring treatment escalation",
    ],
    primaryEndpoint: [
      "Remission at Week 8 (defined by standardized depression rating scale)",
    ],
    primaryResult: [
      { label: "Remission rate at Week 8", value: "Significantly higher with esketamine vs. quetiapine XR" },
      { label: "Sustained remission", value: "More patients maintained remission with esketamine" },
      { label: "Relapse prevention", value: "Esketamine showed favorable long-term outcomes vs. quetiapine XR" },
    ],
    secondary: [
      { label: "Response rates", value: "Greater response with esketamine" },
      { label: "Functional outcomes", value: "Improvements in both groups, favoring esketamine" },
      { label: "Esketamine common side effects", value: "Dissociation, dizziness, nausea, transient BP increases" },
      { label: "Quetiapine common side effects", value: "Sedation, somnolence, weight gain, metabolic concerns" },
    ],
    safety: [
      "Similar overall treatment completion between groups",
      "Esketamine requires supervised administration",
      "Open-label design; industry funded",
    ],
  },
  questions: [
    {
      id: "q1", title: "Defining Treatment-Resistant Depression",
      prompt: "A patient has been taking sertraline 200 mg daily for 12 weeks with perfect adherence and continues to have significant depressive symptoms. How do you determine whether this patient meets criteria for treatment-resistant depression?",
      
    },
    {
      id: "q2", title: "Nonadherence vs. Treatment Failure",
      prompt: "A patient reports persistent depression after several antidepressant trials but admits to taking medication only 3–4 days per week. How does this influence interpretation of treatment failure?",
      
    },
    {
      id: "q3", title: "Why Quetiapine XR Was an Appropriate Comparator",
      prompt: "Why was quetiapine extended-release a clinically meaningful comparator in ESCAPE-TRD?",
      
    },
    {
      id: "q4", title: "Factors to Consider Before Esketamine Referral",
      prompt: "A patient with depression and significant anxiety has failed two adequate antidepressant trials. What factors should be considered before referring for esketamine treatment?",
      
    },
    {
      id: "q5", title: "Best-Fit Patient",
      prompt: "Which of this week's three patients most closely matches the ESCAPE-TRD population, and why? What role does the pharmacist play in identifying and facilitating appropriate referral?",
      
    },
  ],
}
