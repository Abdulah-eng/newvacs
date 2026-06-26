// WEEK 4 module content — Heart Failure + Atrial Fibrillation + Anticoagulation/VTE
// Grounded in 2022 AHA/ACC/HFSA HF guideline, 2023 ACC/AHA/ACCP/HRS AFib guideline,
// 2026 ACC/AHA/CHEST VTE guideline, and the AZALEA-TIMI 71 journal club.

export const MODULE4 = {
  code: "WEEK4_HF_AFIB_ANTICOAG",
  title: "Week 4 — Heart Failure + Atrial Fibrillation + Anticoagulation",
  subtitle: "Balancing mortality reduction, stroke prevention, and bleeding risk",
}

export const PATIENTS4 = [
  { key: "A", id: "michael_t4", name: "Michael Thompson", tag: "HFrEF (new dx)", focus: "Identifying HFrEF; GDMT initiation; NYHA classification" },
  { key: "B", id: "angela_b", name: "Angela Brooks", tag: "HFrEF + Persistent AFib", focus: "Anticoagulation adherence; cost and literacy barriers; stroke prevention counseling" },
  { key: "C", id: "robert_j4", name: "Robert Jenkins", tag: "HFrEF + AFib + CKD + T2DM", focus: "Multi-disease prioritization; anticoagulation risk-benefit; shared decision-making" },
]

export const caseIdFor4 = (patientId, dayKey) => `w4-${patientId}-${dayKey}`

export const GUIDELINE_REVIEW4 = {
  intro: "Week 4 integrates three cardiovascular disease states that frequently coexist. Read the heart failure, atrial fibrillation, and anticoagulation/VTE guideline summaries, then pass the 40-item quiz at ≥90% to unlock Tuesday.",
  sections: [
    {
      id: "hf", title: "Heart Failure — 2022 AHA/ACC/HFSA", color: "13314f",
      pdf: "AHA-ACC-HFSA-2022-HF-Guideline.pdf",
      points: [
        { label: "Classification by EF", text: "HFrEF: LVEF ≤40%. HFmrEF: LVEF 41–49%. HFpEF: LVEF ≥50%. EF drives GDMT selection." },
        { label: "ACC/AHA Staging", text: "Stage A: at risk, no structural disease. Stage B: structural disease, no symptoms. Stage C: structural disease with current/prior symptoms. Stage D: advanced, refractory." },
        { label: "NYHA Functional Class", text: "Class I: no limitation. Class II: slight limitation with ordinary activity. Class III: marked limitation with less-than-ordinary activity. Class IV: symptoms at rest." },
        { label: "GDMT for HFrEF (four pillars)", text: "ACEi/ARB/ARNI (sacubitril/valsartan preferred) + beta blocker (carvedilol, metoprolol succinate, bisoprolol) + MRA (spironolactone/eplerenone) + SGLT2 inhibitor. All four are mortality-reducing." },
        { label: "ARNI advantage", text: "Sacubitril/valsartan reduces mortality and HF hospitalizations more than enalapril in HFrEF. Preferred over ACEi/ARB when patients can tolerate it." },
        { label: "Diuretics for fluid management", text: "Loop diuretics (furosemide) relieve congestion but do not improve mortality. Titrate to dry weight." },
        { label: "Common mistakes", text: "Not initiating all four GDMT pillars; using ACEi+ARNi concurrently (contraindicated); escalating therapy without first monitoring heart rate and BP; missing SGLT2i indication in HFrEF." },
      ],
    },
    {
      id: "afib", title: "Atrial Fibrillation — 2023 ACC/AHA/ACCP/HRS", color: "0891b2",
      pdf: "ACC-AHA-ACCP-HRS-2023-AFib-Guideline.pdf",
      points: [
        { label: "CHA₂DS₂-VASc scoring", text: "Score ≥2 in males, ≥3 in females: anticoagulation recommended. Score 0 (male) or ≤1 (female): anticoagulation not indicated. Higher scores = higher annual stroke risk." },
        { label: "CHA₂DS₂-VASc components", text: "C: CHF (1pt). H: Hypertension (1pt). A₂: Age ≥75 (2pts). D: Diabetes (1pt). S₂: Prior stroke/TIA (2pts). V: Vascular disease (1pt). A: Age 65–74 (1pt). Sc: Female sex (1pt)." },
        { label: "DOACs over warfarin", text: "Apixaban, rivaroxaban, dabigatran, edoxaban are preferred for non-valvular AF. Lower bleeding risk, fewer interactions, no routine INR monitoring." },
        { label: "Apixaban preferred", text: "For most patients, apixaban (5 mg BID; dose-adjusted for renal, age, weight criteria) has favorable bleeding profile vs. other DOACs." },
        { label: "Rate vs. rhythm control", text: "Rate control (beta blocker, diltiazem, digoxin) is acceptable for most. Rhythm control improves QOL and HF outcomes when pursued." },
        { label: "Common mistakes", text: "Not anticoagulating when CHA₂DS₂-VASc is ≥2; using warfarin without clear indication over DOAC; not dose-adjusting apixaban in renal/elderly patients; stopping anticoagulation due to bleeding concerns without assessing alternatives." },
      ],
    },
    {
      id: "vte", title: "Anticoagulation/VTE — 2026 ACC/AHA/CHEST", color: "7c3aed",
      pdf: "ACC-AHA-CHEST-2026-VTE-Guideline.pdf",
      points: [
        { label: "Treatment of acute VTE (DVT/PE)", text: "DOACs (rivaroxaban, apixaban, edoxaban) are preferred. Duration: provoked (reversible cause) ≥3 months; unprovoked ≥3–6 months with reassessment; cancer-associated VTE: LMWH or DOAC (rivaroxaban/apixaban)." },
        { label: "HAS-BLED bleeding risk", text: "Hypertension, abnormal renal/liver function, stroke, bleeding history, labile INR, elderly, drugs/alcohol. Score ≥3 = high bleeding risk. Modify reversible risk factors; high bleeding risk does not automatically contraindicate anticoagulation." },
        { label: "Renal dose adjustment", text: "Adjust DOAC doses in CKD. Apixaban: reduce to 2.5 mg BID when ≥2 of: age ≥80, weight ≤60 kg, SCr ≥1.5 mg/dL. Avoid DOACs when CrCl <15–25 mL/min (agent-specific)." },
        { label: "Bridging", text: "Bridging with LMWH is generally NOT needed for AF patients on warfarin undergoing most procedures. Reassess for mechanical valves." },
        { label: "Common mistakes", text: "Not adjusting DOAC doses in renal impairment; stopping anticoagulation unnecessarily for minor bleeding; not considering a lower-risk DOAC when bleeding is the primary concern." },
      ],
    },
  ],
}

export const AZALEA_JOURNAL = {
  id: "week4-journal",
  title: "Friday Journal Club",
  subtitle: "Can We Prevent Stroke Without Increasing Bleeding? — The AZALEA-TIMI 71 Trial",
  description: "Evaluate the AZALEA-TIMI 71 trial and apply it to Week 4 patients. The pedagogical payoff: understanding that Factor XI inhibition may fundamentally change the bleeding-efficacy tradeoff in anticoagulation, and recognizing which patients face the greatest barrier of bleeding-related anticoagulation discontinuation.",
  citation: "Piccini JP, Patel MR, Mahaffey KW, et al. Abelacimab versus Rivaroxaban in Patients with Atrial Fibrillation. N Engl J Med. 2024;391:105-116.",
  trial: {
    name: "AZALEA-TIMI 71",
    facts: [
      { label: "Drug", value: "Abelacimab (anti-Factor XI monoclonal antibody) 150 mg or 90 mg subcutaneous monthly" },
      { label: "Comparator", value: "Rivaroxaban 20 mg daily (dose-adjusted)" },
      { label: "Design", value: "International, multicenter, randomized, parallel-group trial; stopped early for benefit" },
      { label: "Population", value: "Adults with AF and elevated thromboembolic risk requiring long-term anticoagulation" },
      { label: "Follow-up", value: "Trial stopped early following overwhelming reduction in bleeding events" },
    ],
    inclusion: [
      "Age ≥55 years",
      "Documented atrial fibrillation",
      "CHA₂DS₂-VASc score indicating anticoagulation need",
      "Appropriate candidate for DOAC therapy",
    ],
    primaryEndpoint: [
      "Composite: major bleeding OR clinically relevant nonmajor bleeding",
    ],
    primaryResult: [
      { label: "Abelacimab 150 mg vs. rivaroxaban", value: "≈67% reduction in bleeding" },
      { label: "Abelacimab 90 mg vs. rivaroxaban", value: "≈62% reduction in bleeding" },
      { label: "Stroke/embolism", value: "Low event rates across groups; trial not powered to confirm stroke non-inferiority" },
    ],
    secondary: [
      { label: "Major bleeding", value: "Significantly lower with abelacimab" },
      { label: "Clinically relevant nonmajor bleeding", value: "Significantly lower with abelacimab" },
      { label: "Mortality", value: "No major differences between groups" },
    ],
    safety: [
      "Favorable safety profile; no major unexpected safety signals",
      "Serious adverse event rates similar between groups",
      "Injection-site reactions were uncommon",
    ],
  },
  questions: [
    {
      id: "q1", title: "Future Implications for High-Bleeding-Risk Patients",
      prompt: "A 78-year-old patient with AF has had multiple epistaxis episodes on apixaban and is considering stopping anticoagulation. How does AZALEA-TIMI 71 influence future anticoagulation discussions for patients like this?",
      answer: "The trial suggests that Factor XI inhibitors may provide stroke prevention with substantially less bleeding than current DOACs. Although abelacimab is not yet standard of care, AZALEA-TIMI 71 highlights a potential future option for patients whose primary concern is bleeding risk — offering a path between the unacceptable alternatives of accepting recurrent bleeding or abandoning stroke prevention entirely. For Angela Brooks (Patient B), who has multiple bleeding risk factors and hesitancy about medication complexity, this trial illustrates the emerging therapeutic landscape.",
    },
    {
      id: "q2", title: "Why Rivaroxaban Is a Clinically Relevant Comparator",
      prompt: "Why was rivaroxaban a more clinically informative comparator than warfarin in this trial?",
      answer: "DOACs are now the first-line standard of care for most patients with non-valvular AF. Comparing a novel agent against rivaroxaban — a representative DOAC — provides information directly applicable to contemporary practice. A warfarin comparator would have answered a less relevant question in today's clinical environment and would not reflect the actual decision pharmacists and prescribers face when selecting anticoagulation.",
    },
    {
      id: "q3", title: "When NOT to Replace Current Therapy",
      prompt: "A patient with AF asks whether abelacimab should replace apixaban today. How would you respond?",
      answer: "No. Although AZALEA-TIMI 71 demonstrated impressive reductions in bleeding, abelacimab is not currently guideline-directed therapy. Additional efficacy data confirming stroke non-inferiority, regulatory approval, and guideline incorporation are all still needed before routine clinical use. The trial is promising and clinically meaningful but should not lead to changing a patient's established anticoagulation regimen today.",
    },
    {
      id: "q4", title: "Identifying Candidates for Future Factor XI Inhibition",
      prompt: "Which patient would potentially derive greater benefit from a future Factor XI inhibitor: Patient A (CHA₂DS₂-VASc=3, no prior bleeding) vs. Patient B (CHA₂DS₂-VASc=4, prior GI bleed, recurrent epistaxis)?",
      answer: "Patient B. The primary potential advantage of Factor XI inhibition is maintaining thromboembolic protection while substantially reducing bleeding risk. This is most beneficial for patients who have a strong indication for anticoagulation (high stroke risk) combined with a significant bleeding history or concern — exactly the scenario where clinicians currently face an uncomfortable tradeoff. For Patient A with no bleeding history, existing DOACs are appropriate and well-tolerated.",
    },
    {
      id: "q5", title: "Supporting Shared Decision-Making",
      prompt: "How does AZALEA-TIMI 71 inform shared decision-making conversations about anticoagulation in patients with AF?",
      answer: "The trial highlights that the bleeding-thrombosis tradeoff — long a central tension in anticoagulation management — may be substantially narrowed by future therapeutic options. For current conversations, AZALEA-TIMI 71 validates patient concerns about bleeding as legitimate and clinically important, and reinforces the need to assess and modify reversible bleeding risk factors. It also provides an evidence-based context for discussing emerging options with engaged patients like Robert Jenkins (Patient C), who carefully evaluates the evidence behind every therapeutic decision.",
    },
  ],
}
