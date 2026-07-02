export const CAPSTONE_TOPIC_MASH = {
  id: 'capstone-mash-resmetirom',
  title: 'Resmetirom (Rezdiffra) in MASH',
  
  assignmentGuide: {
    overview: 'This is your final Capstone assignment. You will write a Grand Rounds manuscript evaluating a new drug.',
    deliverable: 'One .docx manuscript, uploaded to the VACS site.',
    formatting: 'Arial 11-point, single-spaced, 1-inch margins, AMA numbered citations, a references page at the end, no page limit.',
    audience: 'A pharmacy department Grand Rounds (students, pharmacists, faculty).',
    requiredArticles: [
      { citation: 'MAESTRO-NASH (Efficacy trial) — Harrison SA et al. N Engl J Med. 2024;390(6):497-509.', link: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2309000' },
      { citation: 'MAESTRO-NAFLD-1 (Safety trial) — Harrison SA et al. Nat Med. 2023;29(11):2919-2928.', link: 'https://www.nature.com/articles/s41591-023-02603-1' },
      { citation: 'AASLD Practice Guidance — Chen VL et al. Hepatology. 2025;81(5):1774-1786.', link: 'https://journals.lww.com/hep/fulltext/2025/05000/resmetirom_therapy_for_metabolic.30.aspx' }
    ],
    requiredSections: [
      { 
        number: 1, title: 'Disease State Background',
        subsections: ['Nomenclature and Definition', 'Epidemiology and Disease Burden', 'Pathophysiology and Rationale for THR-β Agonism', 'Unmet Need and Prior Treatment Landscape']
      },
      { 
        number: 2, title: 'Pharmacology',
        subsections: ['Mechanism of Action', 'Pharmacokinetics', 'Drug Interactions']
      },
      { 
        number: 3, title: 'Pivotal Efficacy Trial — MAESTRO-NASH',
        subsections: ['Study Design and Methods', 'Efficacy Results', 'Critical Appraisal (Strengths and Limitations)']
      },
      { 
        number: 4, title: 'Safety Trial — MAESTRO-NAFLD-1',
        subsections: ['Study Design and Purpose', 'Safety Results', 'Secondary Efficacy Endpoints (Noninvasive Biomarkers)']
      },
      { 
        number: 5, title: 'Clinical Implementation — AASLD Practice Guidance',
        subsections: ['Patient Selection and Screening', 'Dosing Recommendations', 'Monitoring Parameters and Schedule (hepatic function panel, thyroid function, efficacy monitoring)', 'Contraindications and Special Populations']
      },
      { 
        number: 6, title: 'Place in Therapy and Formulary Recommendation',
        subsections: ['Comparative Positioning', 'Cost and Access Considerations', 'Formulary Recommendation (with proposed formulary restrictions)']
      },
      { 
        number: 7, title: 'Patient Counseling and Ambulatory Care Pharmacy Application',
        subsections: ['Patient Counseling Points', 'Ambulatory Care Pharmacy Role']
      }
    ]
  },

  // ── Post-Presentation MCQ Questions (from cap_3.txt) ──
  // These are UNSCORED formative questions with per-option scripted feedback.
  postQuestions: [
    // ── Q1 — Drug Interaction Management [Single-Answer] ──
    {
      id: 'q1',
      title: 'Drug Interaction Management',
      type: 'single-answer',
      stem: 'A 58-year-old woman (82 kg) with biopsy-confirmed MASH (F2 fibrosis) is being initiated on resmetirom. Her current medications include metformin 1000 mg BID, rosuvastatin 40 mg daily, clopidogrel 75 mg daily (placed after a coronary stent 8 months ago), and lisinopril 20 mg daily. Which of the following is the most appropriate set of medication changes before starting resmetirom?',
      options: [
        { key: 'A', text: 'Start resmetirom 80 mg/day; reduce rosuvastatin to 20 mg/day' },
        { key: 'B', text: 'Start resmetirom 60 mg/day; reduce rosuvastatin to 20 mg/day' },
        { key: 'C', text: 'Start resmetirom 60 mg/day; discontinue rosuvastatin entirely' },
        { key: 'D', text: 'Start resmetirom 80 mg/day; no other changes needed' },
        { key: 'E', text: 'Delay resmetirom until clopidogrel is discontinued' }
      ],
      correctAnswer: ['B'],
      feedback: {
        A: { correct: false, strong: 'Recognizing the need to cap rosuvastatin at 20 mg/day shows strong awareness of the OATP1B1/1B3 interaction between resmetirom and statins.', missed: 'Clopidogrel is a moderate CYP2C8 inhibitor. Because resmetirom is metabolized by CYP2C8, coadministration with clopidogrel requires a dose reduction — 60 mg/day for patients <100 kg, 80 mg/day for patients ≥100 kg. At 82 kg, this patient should receive 60 mg/day, not the standard 80 mg. Missing this interaction could result in a 1.7-fold increase in resmetirom AUC.', pearl: "Resmetirom's own LDL-C reduction (~14–16%) may partially offset the statin dose reduction — always recheck a lipid panel at 8–12 weeks after initiation." },
        B: { correct: true, strong: "Excellent identification of both the CYP2C8 interaction (clopidogrel → resmetirom dose reduction to 60 mg) and the OATP1B1/1B3 interaction (resmetirom → rosuvastatin cap at 20 mg). This demonstrates the kind of comprehensive medication reconciliation that defines the pharmacist's unique value.", missed: "Nothing — this is the optimal answer. As a next step, consider rechecking a lipid panel at 8–12 weeks to assess the net effect of the statin dose reduction combined with resmetirom's intrinsic LDL-C lowering.", pearl: "Resmetirom's own LDL-C reduction (~14–16%) may partially offset the statin dose reduction — always recheck a lipid panel at 8–12 weeks after initiation." },
        C: { correct: false, strong: 'Correctly identifying the CYP2C8 interaction and selecting the appropriate resmetirom dose of 60 mg/day shows strong pharmacokinetic reasoning.', missed: 'Rosuvastatin should be dose-reduced to a maximum of 20 mg/day, not discontinued entirely. This patient is 8 months post-coronary stent — discontinuing statin therapy would leave her without essential secondary cardiovascular prevention. The OATP1B1/1B3 interaction requires a dose cap, not discontinuation.', pearl: "Resmetirom's own LDL-C reduction (~14–16%) may partially offset the statin dose reduction — always recheck a lipid panel at 8–12 weeks after initiation." },
        D: { correct: false, strong: 'Correctly identifying the standard resmetirom dose of 80 mg/day for a patient <100 kg shows familiarity with the weight-based dosing protocol.', missed: 'Two critical drug interactions were missed. First, clopidogrel is a moderate CYP2C8 inhibitor, requiring resmetirom dose reduction to 60 mg/day for patients <100 kg. Second, resmetirom inhibits OATP1B1/1B3, requiring rosuvastatin to be capped at 20 mg/day (currently 40 mg). Failing to address both interactions could result in resmetirom overexposure and statin toxicity (myopathy, rhabdomyolysis).', pearl: "Resmetirom's own LDL-C reduction (~14–16%) may partially offset the statin dose reduction — always recheck a lipid panel at 8–12 weeks after initiation." },
        E: { correct: false, strong: 'Recognizing that clopidogrel interacts with resmetirom demonstrates awareness of the CYP2C8 pathway.', missed: 'Clopidogrel does not need to be discontinued — a resmetirom dose reduction is the appropriate management. At 8 months post-coronary stent, clopidogrel is still clinically indicated (typically continued 6–12 months). Delaying a needed therapy when a dose adjustment is available is not optimal patient care. Additionally, the rosuvastatin interaction (cap at 20 mg/day) was not addressed.', pearl: "Resmetirom's own LDL-C reduction (~14–16%) may partially offset the statin dose reduction — always recheck a lipid panel at 8–12 weeks after initiation." }
      }
    },

    // ── Q2 — Patient Eligibility Determination [Single-Answer] ──
    {
      id: 'q2',
      title: 'Patient Eligibility Determination',
      type: 'single-answer',
      stem: 'A 64-year-old man with type 2 diabetes, BMI 34, and persistently elevated ALT (68 U/L) is referred to your ambulatory care clinic. He has no prior liver biopsy. His FIB-4 score is 1.85. What is the most appropriate next step?',
      options: [
        { key: 'A', text: 'Start resmetirom 80 mg/day — FIB-4 of 1.85 confirms F2 fibrosis' },
        { key: 'B', text: 'Refer for liver biopsy — biopsy is required before initiating resmetirom' },
        { key: 'C', text: 'Order vibration-controlled transient elastography (VCTE) to further assess fibrosis stage' },
        { key: 'D', text: 'Reassess FIB-4 in 2–3 years — 1.85 is in the low-risk range' },
        { key: 'E', text: 'Start pioglitazone instead — resmetirom requires biopsy-confirmed MASH' }
      ],
      correctAnswer: ['C'],
      feedback: {
        A: { correct: false, strong: 'Recognizing that a FIB-4 of 1.85 is elevated and warrants action shows appropriate clinical concern for this high-risk patient.', missed: 'FIB-4 is a screening tool, not a diagnostic tool. A score of 1.85 falls in the indeterminate range (1.3–2.67), which requires second-tier noninvasive testing — such as VCTE, ELF (≥9.8), or MRE — to estimate fibrosis stage before treatment decisions can be made. FIB-4 alone cannot confirm F2 fibrosis.', pearl: 'FIB-4 is a screening tool, not a diagnostic tool — indeterminate results (1.3–2.67) always require second-tier testing before making treatment decisions.' },
        B: { correct: false, strong: 'Recognizing that additional evaluation is needed beyond FIB-4 before initiating resmetirom demonstrates appropriate clinical caution.', missed: 'The AASLD Practice Guidance explicitly states that liver biopsy is not required for resmetirom initiation. Noninvasive testing (VCTE, ELF, MRE) can establish eligibility for treatment. Requiring biopsy creates an unnecessary barrier to care — biopsy is invasive, costly, subject to sampling error (~1/50,000th of the liver), and may deter patients from pursuing treatment.', pearl: 'FIB-4 is a screening tool, not a diagnostic tool — indeterminate results (1.3–2.67) always require second-tier testing before making treatment decisions.' },
        C: { correct: true, strong: 'Excellent application of the AASLD two-tier noninvasive testing pathway. Correctly identifying FIB-4 1.85 as indeterminate and selecting VCTE as the appropriate second-tier test demonstrates strong clinical guideline knowledge.', missed: "Nothing — this is the optimal answer. As a refinement, note that if VCTE shows LSM consistent with F2–F3 (generally >8 kPa, with >12 kPa suggesting advanced fibrosis), the patient would be eligible for resmetirom without biopsy. The patient's type 2 diabetes and elevated ALT further increase clinical suspicion for MASH.", pearl: 'FIB-4 is a screening tool, not a diagnostic tool — indeterminate results (1.3–2.67) always require second-tier testing before making treatment decisions.' },
        D: { correct: false, strong: 'Awareness that FIB-4 has defined risk categories shows familiarity with the screening framework.', missed: 'A FIB-4 of 1.85 is NOT in the low-risk range. Low risk is <1.3 (or <2.0 for patients >65 years; this patient is 64, so standard cutoffs apply). A score of 1.85 is in the indeterminate range (1.3–2.67), which requires prompt second-tier testing — not reassessment in 2–3 years. Delaying evaluation in a patient with type 2 diabetes, obesity, and elevated ALT could allow fibrosis to progress unchecked.', pearl: 'FIB-4 is a screening tool, not a diagnostic tool — indeterminate results (1.3–2.67) always require second-tier testing before making treatment decisions.' },
        E: { correct: false, strong: 'Considering alternative pharmacotherapy shows awareness that multiple treatment options exist for MASH.', missed: 'Resmetirom does not require biopsy-confirmed MASH — the AASLD Practice Guidance allows initiation based on noninvasive testing consistent with F2–F3 fibrosis. Additionally, defaulting to pioglitazone without completing the diagnostic workup is premature. The appropriate next step is second-tier noninvasive testing (VCTE) to determine fibrosis stage, which then informs the treatment decision.', pearl: 'FIB-4 is a screening tool, not a diagnostic tool — indeterminate results (1.3–2.67) always require second-tier testing before making treatment decisions.' }
      }
    },

    // ── Q3 — Adverse Event Management [Single-Answer] ──
    {
      id: 'q3',
      title: 'Adverse Event Management',
      type: 'single-answer',
      stem: 'A patient has been on resmetirom 100 mg daily for 6 weeks and calls reporting persistent loose stools for 10 days, occurring 3–4 times daily. She has no fever, abdominal pain, or blood in stool. She is considering stopping the medication. What is the most appropriate response?',
      options: [
        { key: 'A', text: 'Discontinue resmetirom immediately and refer to gastroenterology' },
        { key: 'B', text: 'Reduce resmetirom to 80 mg/day per the dose-reduction protocol for GI intolerance' },
        { key: 'C', text: 'Reassure that GI effects are common and typically self-limiting; encourage continuation with supportive measures and close follow-up' },
        { key: 'D', text: 'Switch to semaglutide, which has a more favorable GI profile' },
        { key: 'E', text: 'Order stool studies (C. difficile, ova and parasites) before making any changes' }
      ],
      correctAnswer: ['C'],
      feedback: {
        A: { correct: false, strong: "Taking the patient's symptoms seriously and considering a specialist referral shows patient-centered thinking.", missed: 'The symptoms described — loose stools 3–4 times daily without fever, blood, or severe pain — are consistent with the expected adverse effect profile of resmetirom (diarrhea in 24–34% of patients, median duration 15–20 days, no severe diarrhea reported in trials). Discontinuing therapy for an expected, self-limiting side effect at 6 weeks — when resolution is anticipated — would deprive the patient of a needed treatment prematurely. The appropriate response is reassurance, supportive measures, and close follow-up.', pearl: 'There is no formal dose-reduction protocol for resmetirom GI intolerance — counsel patients to continue through early symptoms, which typically resolve within 2–3 weeks.' },
        B: { correct: false, strong: 'Attempting to maintain the patient on therapy while addressing tolerability shows good clinical instinct to balance efficacy and adherence.', missed: 'There is no formal dose-reduction protocol for GI intolerance in the resmetirom prescribing information. This option was fabricated. Dose reductions exist only for CYP2C8 inhibitor coadministration. The appropriate management is reassurance that GI effects are expected and self-limiting, with supportive measures (hydration, dietary modifications) and close follow-up.', pearl: 'There is no formal dose-reduction protocol for resmetirom GI intolerance — counsel patients to continue through early symptoms, which typically resolve within 2–3 weeks.' },
        C: { correct: true, strong: 'Excellent clinical judgment. Correctly identifying the symptoms as consistent with the expected adverse effect profile (diarrhea 24–34%, onset <12 weeks, median duration 15–20 days, no severe cases in trials) and recommending continuation with supportive care demonstrates strong patient counseling skills.', missed: 'Nothing — this is the optimal answer. As a refinement, if symptoms persist beyond 4–6 weeks or worsen (fever, blood, dehydration), escalation would be appropriate. Approximately 50% of reported diarrhea cases were described as intermittent or worsening of preexisting loose stools rather than new-onset severe diarrhea.', pearl: 'There is no formal dose-reduction protocol for resmetirom GI intolerance — counsel patients to continue through early symptoms, which typically resolve within 2–3 weeks.' },
        D: { correct: false, strong: 'Considering alternative therapies shows awareness of the evolving MASH treatment landscape.', missed: 'Semaglutide does not have a more favorable GI profile — it also causes significant nausea, vomiting, and diarrhea, often at higher rates than resmetirom. Switching agents for an expected, self-limiting side effect at 6 weeks is premature and exposes the patient to a new set of adverse effects and a titration period. The appropriate response is reassurance and supportive care.', pearl: 'There is no formal dose-reduction protocol for resmetirom GI intolerance — counsel patients to continue through early symptoms, which typically resolve within 2–3 weeks.' },
        E: { correct: false, strong: 'Considering an infectious etiology before attributing symptoms to a drug effect shows appropriate differential diagnosis thinking.', missed: 'While stool studies may be warranted if atypical features develop (fever, bloody stool, severe pain, immunocompromised status), the clinical picture — loose stools at 6 weeks on resmetirom, no alarm features — is entirely consistent with the known adverse effect profile. Ordering stool studies as a first step delays reassurance and may unnecessarily alarm the patient. The appropriate first response is counseling and supportive care, with stool studies reserved for worsening or atypical symptoms.', pearl: 'There is no formal dose-reduction protocol for resmetirom GI intolerance — counsel patients to continue through early symptoms, which typically resolve within 2–3 weeks.' }
      }
    },

    // ── Q4 — Monitoring Interpretation [Single-Answer] ──
    {
      id: 'q4',
      title: 'Monitoring Interpretation',
      type: 'single-answer',
      stem: 'A patient on resmetirom 80 mg daily for 3 months has the following labs: ALT decreased from 72 to 38 U/L, free T4 decreased from 1.2 to 0.95 ng/dL, and TSH is 2.1 mIU/L (unchanged). The patient is concerned about the "low thyroid" result. What is the correct interpretation?',
      options: [
        { key: 'A', text: 'The free T4 decrease indicates subclinical hypothyroidism; start levothyroxine supplementation' },
        { key: 'B', text: 'The free T4 decrease is an expected pharmacologic effect of resmetirom; TSH is normal, confirming the patient is euthyroid — reassure and continue therapy' },
        { key: 'C', text: 'The free T4 decrease suggests resmetirom is suppressing thyroid function; reduce dose to 60 mg/day' },
        { key: 'D', text: 'The ALT improvement is encouraging, but the thyroid changes require discontinuation and endocrinology referral' },
        { key: 'E', text: 'Both the ALT and free T4 changes are unrelated to resmetirom and require separate workup' }
      ],
      correctAnswer: ['B'],
      feedback: {
        A: { correct: false, strong: 'Recognizing the free T4 decrease and considering its clinical significance shows attentiveness to lab monitoring.', missed: 'The free T4 decrease (~15–20%) is a known, expected pharmacologic effect of resmetirom. Resmetirom enhances hepatic conversion of T4 to T3 via THR-β activation, which reduces circulating T4 without affecting the hypothalamic-pituitary-thyroid axis. The key indicator is that TSH is normal and unchanged — this confirms the patient is euthyroid. Starting levothyroxine would be inappropriate and could cause iatrogenic hyperthyroidism.', pearl: 'Resmetirom reduces free T4 by ~15–20% but does NOT affect TSH or free T3 — this confirms liver-selective THR-β action and is NOT hypothyroidism. Always check TSH before reassuring.' },
        B: { correct: true, strong: 'Excellent interpretation. Correctly identifying the free T4 decrease as an expected pharmacologic effect, using the normal TSH to confirm euthyroid status, and recognizing the ALT improvement as a positive treatment response demonstrates strong integration of pharmacology and clinical monitoring.', missed: 'Nothing — this is the optimal answer. Continue monitoring per the AASLD schedule (next hepatic panel at 6 months). If the patient has known thyroid disease, continue standard thyroid monitoring per established guidelines.', pearl: 'Resmetirom reduces free T4 by ~15–20% but does NOT affect TSH or free T3 — this confirms liver-selective THR-β action and is NOT hypothyroidism. Always check TSH before reassuring.' },
        C: { correct: false, strong: 'Connecting the free T4 change to resmetirom shows understanding that the drug affects thyroid hormone levels.', missed: 'The free T4 decrease is expected and not dose-limiting. The ~15–20% reduction is consistent across all clinical trial doses and reflects enhanced hepatic T4→T3 conversion — a direct consequence of THR-β activation. There is no indication for dose reduction based on this expected pharmacologic effect. A dose reduction to 60 mg/day exists only for coadministration with moderate CYP2C8 inhibitors, not for thyroid parameter changes.', pearl: 'Resmetirom reduces free T4 by ~15–20% but does NOT affect TSH or free T3 — this confirms liver-selective THR-β action and is NOT hypothyroidism. Always check TSH before reassuring.' },
        D: { correct: false, strong: 'Correctly identifying the ALT improvement as encouraging shows recognition of treatment response markers.', missed: 'Neither finding warrants discontinuation or endocrinology referral. The free T4 decrease is an expected pharmacologic effect (enhanced hepatic T4→T3 conversion), and the normal TSH confirms the patient is euthyroid. The ALT improvement (72→38) is a positive treatment response. Discontinuing an effective therapy and referring for a normal physiologic response would be inappropriate and could delay needed treatment.', pearl: 'Resmetirom reduces free T4 by ~15–20% but does NOT affect TSH or free T3 — this confirms liver-selective THR-β action and is NOT hypothyroidism. Always check TSH before reassuring.' },
        E: { correct: false, strong: 'Considering alternative explanations for lab changes shows critical thinking about causality.', missed: "Both changes are directly attributable to resmetirom's mechanism of action. The ALT decrease reflects reduced hepatic inflammation (a positive treatment response), and the free T4 decrease reflects enhanced hepatic T4→T3 conversion via THR-β activation (an expected pharmacologic effect). Ordering a separate workup would be unnecessary, costly, and could alarm the patient.", pearl: 'Resmetirom reduces free T4 by ~15–20% but does NOT affect TSH or free T3 — this confirms liver-selective THR-β action and is NOT hypothyroidism. Always check TSH before reassuring.' }
      }
    },

    // ── Q5 — Surrogate Endpoint Interpretation [K-Type] ──
    {
      id: 'q5',
      title: 'Surrogate Endpoint Interpretation',
      type: 'k-type',
      stem: 'A colleague argues that resmetirom "doesn\'t really work" because ~70–75% of patients did not achieve either primary endpoint. Which of the following are valid counter-arguments?\n\nI. The NNT of ~5–6 for NASH resolution compares favorably to many accepted therapies in hepatology\nII. The 52-week histologic endpoints may underestimate long-term benefit in a disease that progresses over decades\nIII. Weight loss ≥5% enhanced resmetirom\'s MASH resolution rate to 56.6%, suggesting combination strategies may improve outcomes\nIV. The placebo response rate for fibrosis improvement (14.2%) was unusually high, likely inflated by biopsy sampling variability, which narrows the absolute treatment difference',
      options: [
        { key: 'A', text: 'I and II only' },
        { key: 'B', text: 'I, II, and III only' },
        { key: 'C', text: 'II, III, and IV only' },
        { key: 'D', text: 'I, II, III, and IV' }
      ],
      correctAnswer: ['D'],
      feedback: {
        A: { correct: false, strong: 'Correctly identifying the NNT contextualization (I) and the time-horizon limitation (II) as valid counter-arguments shows solid evidence interpretation skills.', missed: 'Statements III and IV are also valid. Statement III is supported by a secondary analysis showing MASH resolution of 56.6% in the 100 mg group with ≥5% weight loss vs. 33.8% without — this is direct evidence for combination potential. Statement IV is a legitimate methodologic critique: the 14.2% placebo fibrosis response rate is notably high and likely reflects biopsy sampling variability (~1/50,000th of the liver), which actually supports the argument that the true treatment effect may be larger than observed.', pearl: "When defending a drug's efficacy, always lead with the placebo-adjusted treatment effect (NNT), not the absolute response rate — and remember that binary histologic endpoints can undercount patients with meaningful but sub-threshold improvement." },
        B: { correct: false, strong: 'Correctly identifying three of four valid counter-arguments demonstrates strong critical appraisal skills and awareness of the combination therapy data.', missed: 'Statement IV is also valid. The 14.2% placebo fibrosis response rate is notably high compared to other MASH trials and is likely inflated by biopsy sampling variability — liver biopsy samples only ~1/50,000th of the liver. This is a methodologic critique that actually strengthens the case for resmetirom: the true treatment effect on fibrosis may be larger than the observed absolute difference suggests.', pearl: "When defending a drug's efficacy, always lead with the placebo-adjusted treatment effect (NNT), not the absolute response rate — and remember that binary histologic endpoints can undercount patients with meaningful but sub-threshold improvement." },
        C: { correct: false, strong: 'Correctly identifying the combination potential (III) and the placebo rate critique (IV) shows nuanced understanding of trial methodology and clinical application.', missed: 'Statement I is also valid. The NNT of ~5–6 for NASH resolution means that for every 5–6 patients treated, one additional patient achieves NASH resolution compared to placebo. This compares favorably to many accepted therapies in hepatology and medicine broadly, and is a standard way to contextualize absolute treatment effects.', pearl: "When defending a drug's efficacy, always lead with the placebo-adjusted treatment effect (NNT), not the absolute response rate — and remember that binary histologic endpoints can undercount patients with meaningful but sub-threshold improvement." },
        D: { correct: true, strong: "Excellent critical appraisal. Recognizing that all four statements are valid counter-arguments demonstrates the ability to construct a multi-layered, evidence-based defense of a therapy's clinical value — a skill essential for formulary presentations and peer discussions.", missed: 'Nothing — this is the optimal answer. As a refinement, note that the strongest single counter-argument is often the NNT, because it directly translates the statistical result into a clinically intuitive metric that colleagues can immediately grasp.', pearl: "When defending a drug's efficacy, always lead with the placebo-adjusted treatment effect (NNT), not the absolute response rate — and remember that binary histologic endpoints can undercount patients with meaningful but sub-threshold improvement." }
      }
    },

    // ── Q6 — Regulatory and Formulary Implications [Single-Answer] ──
    {
      id: 'q6',
      title: 'Regulatory and Formulary Implications',
      type: 'single-answer',
      stem: 'If the 54-month confirmatory data from MAESTRO-NASH fail to demonstrate a reduction in clinical outcomes, which of the following is the most accurate statement about the regulatory consequence?',
      options: [
        { key: 'A', text: 'The FDA cannot withdraw an approved drug; resmetirom would remain on the market indefinitely' },
        { key: 'B', text: 'The FDA can initiate proceedings to withdraw accelerated approval if clinical benefit is not verified, as occurred with obeticholic acid for NASH' },
        { key: 'C', text: 'The FDA would automatically convert the accelerated approval to full approval after 54 months regardless of outcomes' },
        { key: 'D', text: "Only Congress can withdraw a drug approval; the FDA's role is limited to issuing a safety warning" },
        { key: 'E', text: 'The drug would remain approved but would be reclassified as an over-the-counter product' }
      ],
      correctAnswer: ['B'],
      feedback: {
        A: { correct: false, strong: 'Engaging with the regulatory framework shows awareness that approval status has clinical implications.', missed: 'The FDA explicitly has the authority to withdraw accelerated approvals when confirmatory trials fail to verify clinical benefit. This is a defined regulatory pathway under the Accelerated Approval Program. A directly relevant precedent is obeticholic acid (Ocaliva), which was withdrawn from the NASH market after failing to confirm clinical benefit in its confirmatory trial.', pearl: 'Accelerated approval is a conditional pathway — always counsel patients that continued availability depends on confirmatory outcomes data. The obeticholic acid (Ocaliva) withdrawal for NASH is a directly relevant precedent.' },
        B: { correct: true, strong: "Excellent understanding of the accelerated approval regulatory framework and its real-world consequences. Connecting the obeticholic acid precedent to resmetirom's situation demonstrates the kind of regulatory awareness that strengthens formulary presentations and patient counseling.", missed: 'Nothing — this is the optimal answer. As a refinement, note that a P&T committee should proactively build a reassessment trigger into the formulary recommendation (e.g., "reassess upon release of 54-month outcomes data") rather than waiting for FDA action.', pearl: 'Accelerated approval is a conditional pathway — always counsel patients that continued availability depends on confirmatory outcomes data. The obeticholic acid (Ocaliva) withdrawal for NASH is a directly relevant precedent.' },
        C: { correct: false, strong: 'Awareness that accelerated approval has a defined timeline shows engagement with the regulatory process.', missed: 'Conversion from accelerated to full approval requires positive confirmatory data demonstrating clinical benefit — it does not occur automatically with the passage of time. If the 54-month data fail to show benefit, the FDA can initiate withdrawal proceedings, not conversion. This distinction is critical for formulary decision-making and patient counseling.', pearl: 'Accelerated approval is a conditional pathway — always counsel patients that continued availability depends on confirmatory outcomes data. The obeticholic acid (Ocaliva) withdrawal for NASH is a directly relevant precedent.' },
        D: { correct: false, strong: 'Considering the broader governance structure of drug regulation shows awareness that multiple entities play roles in healthcare policy.', missed: 'Drug approval and withdrawal are regulatory functions of the FDA, not congressional functions. The FDA has independent authority to withdraw accelerated approvals when confirmatory trials fail to verify clinical benefit. Congress sets the statutory framework (e.g., the FDA Modernization Act), but individual drug decisions are made by the FDA.', pearl: 'Accelerated approval is a conditional pathway — always counsel patients that continued availability depends on confirmatory outcomes data. The obeticholic acid (Ocaliva) withdrawal for NASH is a directly relevant precedent.' },
        E: { correct: false, strong: 'Considering alternative regulatory outcomes shows creative thinking about the drug lifecycle.', missed: 'Prescription-to-OTC reclassification is an entirely separate regulatory process unrelated to confirmatory trial outcomes. It requires demonstration that the drug can be used safely and effectively without physician supervision — which is not relevant to a failed confirmatory trial. The actual consequence of failed confirmatory data is potential withdrawal of accelerated approval.', pearl: 'Accelerated approval is a conditional pathway — always counsel patients that continued availability depends on confirmatory outcomes data. The obeticholic acid (Ocaliva) withdrawal for NASH is a directly relevant precedent.' }
      }
    },

    // ── Q7 — Trial Design Critique [Single-Answer] ──
    {
      id: 'q7',
      title: 'Trial Design Critique',
      type: 'single-answer',
      stem: 'MAESTRO-NASH excluded patients who initiated or dose-modified GLP-1 receptor agonists, pioglitazone, or vitamin E within 6 months of randomization, but allowed patients on stable doses of these medications. What is the primary reason for this design choice?',
      options: [
        { key: 'A', text: 'These medications are contraindicated with resmetirom due to drug-drug interactions' },
        { key: 'B', text: 'The investigators wanted to ensure that any histologic changes at 52 weeks were attributable to resmetirom rather than recently initiated concomitant therapies' },
        { key: 'C', text: "The FDA required exclusion of all patients on diabetes medications to isolate resmetirom's hepatic effects" },
        { key: 'D', text: 'These medications worsen liver fibrosis and would have confounded the fibrosis endpoint' },
        { key: 'E', text: 'The 6-month washout was required to eliminate residual drug levels of GLP-1 RAs from the body' }
      ],
      correctAnswer: ['B'],
      feedback: {
        A: { correct: false, strong: 'Recognizing that drug interactions exist between resmetirom and some concomitant therapies (e.g., pioglitazone AUC increases 1.5-fold) shows pharmacokinetic awareness.', missed: 'GLP-1 RAs, pioglitazone, and vitamin E are not contraindicated with resmetirom. The design choice was about internal validity, not safety. The 6-month stable-dose requirement ensures that any histologic changes at 52 weeks are attributable to resmetirom rather than the confounding effect of recently initiated therapies that themselves improve liver histology.', pearl: "In MASH trials, the biggest confounding risk is not drugs that worsen the disease — it's drugs that improve it. A stable-dose requirement isolates the investigational drug's effect without sacrificing generalizability." },
        B: { correct: true, strong: 'Excellent understanding of trial design methodology. Recognizing that the stable-dose requirement is an internal validity measure — not a safety restriction — demonstrates the ability to critically appraise why investigators make specific design choices.', missed: 'Nothing — this is the optimal answer. As a refinement, note that ~14% of MAESTRO-NASH participants were on stable GLP-1 RA therapy at baseline, and a secondary analysis confirmed that resmetirom efficacy was not diminished by background GLP-1 RA or SGLT2i use — suggesting independent and potentially additive mechanisms.', pearl: "In MASH trials, the biggest confounding risk is not drugs that worsen the disease — it's drugs that improve it. A stable-dose requirement isolates the investigational drug's effect without sacrificing generalizability." },
        C: { correct: false, strong: "Considering the FDA's role in trial design requirements shows awareness that regulatory agencies influence study protocols.", missed: 'The FDA did not require exclusion of all patients on diabetes medications. Metformin, SGLT2 inhibitors, and insulin were permitted without restriction. The 6-month stable-dose requirement applied only to therapies with known or suspected effects on liver histology (GLP-1 RAs, pioglitazone, vitamin E), and the purpose was to ensure internal validity — not to isolate resmetirom from all diabetes therapies.', pearl: "In MASH trials, the biggest confounding risk is not drugs that worsen the disease — it's drugs that improve it. A stable-dose requirement isolates the investigational drug's effect without sacrificing generalizability." },
        D: { correct: false, strong: 'Thinking about how concomitant medications could confound the fibrosis endpoint shows appropriate trial design reasoning.', missed: 'The direction of confounding is reversed. GLP-1 RAs and pioglitazone may actually improve liver histology, not worsen it. The concern was that recently initiated concomitant therapies could improve histology independent of resmetirom, making it impossible to attribute the observed benefit to the study drug. The stable-dose requirement neutralizes this confounding by ensuring any histologic improvement from concomitant therapies was already established at baseline.', pearl: "In MASH trials, the biggest confounding risk is not drugs that worsen the disease — it's drugs that improve it. A stable-dose requirement isolates the investigational drug's effect without sacrificing generalizability." },
        E: { correct: false, strong: 'Considering pharmacokinetic rationale for a washout period shows scientific reasoning.', missed: 'The 6-month period is not a pharmacokinetic washout. Patients continued these medications at stable doses throughout the trial — they were not discontinued. The purpose was to establish a stable histologic baseline so that any changes at 52 weeks could be attributed to resmetirom. A true pharmacokinetic washout would require stopping the medication entirely, which was not the design.', pearl: "In MASH trials, the biggest confounding risk is not drugs that worsen the disease — it's drugs that improve it. A stable-dose requirement isolates the investigational drug's effect without sacrificing generalizability." }
      }
    },

    // ── Q8 — Head-to-Head Comparison [Select-All-That-Apply] ──
    {
      id: 'q8',
      title: 'Head-to-Head Comparison',
      type: 'select-all',
      stem: 'A hepatologist asks: "Now that semaglutide is also FDA-approved for MASH with F2–F3 fibrosis, which drug should I use first?" Which of the following are appropriate considerations when advising this hepatologist? Select all that apply.',
      options: [
        { key: 'A', text: 'No head-to-head trial has compared resmetirom and semaglutide for MASH; cross-trial comparisons are limited by differences in patient populations and trial design' },
        { key: 'B', text: 'Semaglutide may be preferred in patients with obesity and/or type 2 diabetes given its weight loss, glycemic, and cardiovascular benefits' },
        { key: 'C', text: 'Resmetirom may be preferred in patients with significant dyslipidemia (elevated LDL-C, Lp(a)) who are not obese and prefer oral therapy' },
        { key: 'D', text: 'Resmetirom is clearly superior to semaglutide based on the MAESTRO-NASH fibrosis improvement data' },
        { key: 'E', text: 'Combination therapy with both agents has a mechanistic rationale, as resmetirom targets hepatic lipid metabolism while semaglutide addresses metabolic drivers, though prospective combination data are lacking' },
        { key: 'F', text: 'Semaglutide should always be used first because it achieved higher absolute MASH resolution rates in the ESSENCE trial' }
      ],
      correctAnswer: ['A', 'B', 'C', 'E'],
      feedback: {
        correct_all: { correct: true, strong: "Outstanding clinical reasoning. Correctly identifying all four appropriate considerations — and avoiding both absolutist traps (D and F) — demonstrates the nuanced, patient-centered approach that defines expert pharmacotherapy consultation.", missed: "Nothing — this is the optimal answer. The key takeaway is that without head-to-head data, the pharmacist's role is to frame the decision around patient-specific factors rather than declaring a categorical winner.", pearl: "When no head-to-head data exist, the pharmacist's role is to frame the decision around patient-specific factors — not to declare a winner. Comorbidity profile, route preference, and lipid phenotype should drive selection." },
        includes_D: { correct: false, strong: '', missed: 'Statement D is incorrect. No head-to-head comparison exists between resmetirom and semaglutide, and cross-trial comparisons of fibrosis improvement rates are methodologically inappropriate due to different patient populations, endpoint definitions, biopsy reading protocols, and placebo response rates. Claiming superiority without direct comparative data is a common but serious error in evidence-based medicine.', pearl: "When no head-to-head data exist, the pharmacist's role is to frame the decision around patient-specific factors — not to declare a winner. Comorbidity profile, route preference, and lipid phenotype should drive selection." },
        includes_F: { correct: false, strong: '', missed: 'Statement F is incorrect. While semaglutide achieved higher absolute MASH resolution rates in the ESSENCE trial (~63% vs. ~30% for resmetirom), cross-trial comparison of absolute response rates is methodologically inappropriate — the trials enrolled different patient populations with different baseline characteristics, fibrosis distributions, and placebo response rates. Additionally, "always first" ignores patient-specific factors such as BMI, diabetes status, lipid profile, and route preference that should drive individualized selection.', pearl: "When no head-to-head data exist, the pharmacist's role is to frame the decision around patient-specific factors — not to declare a winner. Comorbidity profile, route preference, and lipid phenotype should drive selection." },
        omits_correct: { correct: false, strong: '', missed: 'Review which correct options were missed: (A) head-to-head data gap is the foundational framing point; (B) semaglutide advantages for obese/diabetic patients; (C) resmetirom advantages for dyslipidemia/oral preference; (E) mechanistic complementarity for combination therapy.', pearl: "When no head-to-head data exist, the pharmacist's role is to frame the decision around patient-specific factors — not to declare a winner. Comorbidity profile, route preference, and lipid phenotype should drive selection." }
      }
    },

    // ── Q9 — Health Equity and Access [K-Type] ──
    {
      id: 'q9',
      title: 'Health Equity and Access',
      type: 'k-type',
      stem: 'Approximately 75% of MAESTRO-NASH participants were White, yet MASH disproportionately affects Hispanic/Latino populations. Which of the following are valid concerns or recommendations related to this disparity?\n\nI. The PNPLA3 I148M variant, which is more prevalent in Hispanic populations and associated with more aggressive MASH, was not stratified for in the trial\nII. CYP2C8 polymorphisms vary by ancestry and could affect resmetirom exposure and adverse event risk in underrepresented populations\nIII. Post-marketing registries should intentionally enroll diverse populations to generate real-world evidence\nIV. The trial results should not be applied to Hispanic/Latino patients until a separate race-specific trial is completed',
      options: [
        { key: 'A', text: 'I and III only' },
        { key: 'B', text: 'I, II, and III only' },
        { key: 'C', text: 'II and IV only' },
        { key: 'D', text: 'I, II, III, and IV' }
      ],
      correctAnswer: ['B'],
      feedback: {
        A: { correct: false, strong: 'Correctly identifying the PNPLA3 concern (I) and the post-marketing registry recommendation (III) shows awareness of both the genetic basis of MASH disparities and actionable solutions.', missed: 'Statement II is also valid. Resmetirom is metabolized primarily by CYP2C8, which has known polymorphisms that vary by ancestry (e.g., CYP2C8*2 is more common in individuals of African descent, CYP2C8*3 in European populations). If poor or rapid metabolizer phenotypes differ in prevalence across populations, drug exposure and adverse event risk could differ — and this has not been studied for resmetirom.', pearl: 'Limited trial diversity does not mean a drug should be withheld from underrepresented populations — it means clinicians should apply the evidence while advocating for inclusive post-marketing research and maintaining heightened pharmacovigilance.' },
        B: { correct: true, strong: 'Excellent integration of pharmacogenomics, health equity, and actionable recommendations. Correctly identifying statements I, II, and III while rejecting IV demonstrates the ability to balance scientific rigor with ethical clinical practice — recognizing that limited diversity warrants vigilance, not withholding of care.', missed: 'Nothing — this is the optimal answer. As a refinement, consider that in clinical practice, pharmacists can proactively screen high-risk populations (e.g., patients with type 2 diabetes in predominantly Hispanic/Latino clinics) using the FIB-4 pathway to ensure equitable access to diagnosis and treatment.', pearl: 'Limited trial diversity does not mean a drug should be withheld from underrepresented populations — it means clinicians should apply the evidence while advocating for inclusive post-marketing research and maintaining heightened pharmacovigilance.' },
        C: { correct: false, strong: 'Correctly identifying the CYP2C8 pharmacogenomic concern (II) shows strong pharmacokinetic reasoning applied to health equity.', missed: 'Statement IV is incorrect — withholding an FDA-approved therapy from an entire population pending a race-specific trial is neither ethically nor clinically appropriate. The correct approach is to apply the same treatment algorithms while maintaining heightened pharmacovigilance and advocating for inclusive post-marketing research. Additionally, statements I and III were missed: the PNPLA3 I148M variant concern (I) and the post-marketing registry recommendation (III) are both valid and important.', pearl: 'Limited trial diversity does not mean a drug should be withheld from underrepresented populations — it means clinicians should apply the evidence while advocating for inclusive post-marketing research and maintaining heightened pharmacovigilance.' },
        D: { correct: false, strong: 'Correctly identifying statements I, II, and III shows comprehensive understanding of the diversity gap and its implications.', missed: 'Statement IV is incorrect. Withholding an FDA-approved therapy from Hispanic/Latino patients until a separate race-specific trial is completed would be ethically problematic and clinically harmful — it would deny treatment to the population with the highest MASH prevalence and greatest unmet need. The appropriate response is to apply the same evidence-based treatment algorithms to all eligible patients while advocating for inclusive post-marketing studies and maintaining heightened pharmacovigilance in underrepresented populations.', pearl: 'Limited trial diversity does not mean a drug should be withheld from underrepresented populations — it means clinicians should apply the evidence while advocating for inclusive post-marketing research and maintaining heightened pharmacovigilance.' }
      }
    },

    // ── Q10 — Pharmacist Professional Identity [Single-Answer] ──
    {
      id: 'q10',
      title: 'Pharmacist Professional Identity',
      type: 'single-answer',
      stem: 'You are an ambulatory care pharmacist in a multidisciplinary metabolic liver clinic. The hepatologist manages treatment decisions, the dietitian handles nutrition, and the endocrinologist manages diabetes. A new patient is starting resmetirom and is also taking atorvastatin 80 mg, clopidogrel 75 mg, and levothyroxine 75 mcg. Which of the following best represents the pharmacist\'s unique contribution to this patient\'s care?',
      options: [
        { key: 'A', text: 'Recommending a specific diet plan to reduce hepatic steatosis' },
        { key: 'B', text: "Adjusting the patient's insulin regimen for glycemic optimization" },
        { key: 'C', text: 'Identifying that atorvastatin must be capped at 40 mg, resmetirom dose must be reduced for the CYP2C8 interaction with clopidogrel, and establishing the hepatic and thyroid monitoring schedule' },
        { key: 'D', text: 'Ordering a liver biopsy to confirm MASH diagnosis before treatment' },
        { key: 'E', text: 'Referring the patient to a hepatologist for treatment initiation' }
      ],
      correctAnswer: ['C'],
      feedback: {
        A: { correct: false, strong: 'Recognizing that lifestyle modification (including diet) is foundational to MASH management shows awareness of the comprehensive treatment approach.', missed: "Dietary counseling is the dietitian's primary role in a multidisciplinary clinic, not the pharmacist's unique contribution. The pharmacist's irreplaceable value lies in managing the complex drug interaction profile — this patient has two critical interactions (atorvastatin 80 mg must be capped at 40 mg due to OATP1B1/1B3 inhibition; resmetirom dose must be reduced due to clopidogrel's CYP2C8 inhibition) and requires a structured hepatic and thyroid monitoring schedule. No other team member has the training to simultaneously manage these issues.", pearl: "The pharmacist's irreplaceable value in MASH care is at the intersection of drug interactions, monitoring protocols, and patient education — no other team member has the training to simultaneously manage statin dose caps, CYP2C8 conflicts, and hepatic/thyroid monitoring schedules." },
        B: { correct: false, strong: 'Considering glycemic management in a MASH patient shows understanding that metabolic comorbidities are central to the disease.', missed: "The patient is not described as being on insulin, making this answer factually inapplicable. Additionally, insulin regimen management is the endocrinologist's domain in this multidisciplinary setting. The pharmacist's unique contribution is managing the drug interaction complexity — atorvastatin must be capped at 40 mg, resmetirom dose must be reduced for the CYP2C8 interaction with clopidogrel, and a structured monitoring schedule must be established for hepatic function and thyroid parameters.", pearl: "The pharmacist's irreplaceable value in MASH care is at the intersection of drug interactions, monitoring protocols, and patient education — no other team member has the training to simultaneously manage statin dose caps, CYP2C8 conflicts, and hepatic/thyroid monitoring schedules." },
        C: { correct: true, strong: "Excellent identification of the pharmacist's unique, irreplaceable contribution. This answer captures three distinct pharmacist competencies in one patient encounter: (1) drug interaction management (atorvastatin cap, CYP2C8 dose reduction), (2) monitoring protocol establishment (hepatic function panel schedule, thyroid function baseline), and (3) comprehensive medication reconciliation. No other team member — hepatologist, dietitian, or endocrinologist — has the training to simultaneously manage all three.", missed: "Nothing — this is the optimal answer. As a bonus consideration, the pharmacist could also note that the patient's levothyroxine dose may need monitoring given resmetirom's effect on free T4 (~15–20% reduction), and could coordinate prior authorization and specialty pharmacy access.", pearl: "The pharmacist's irreplaceable value in MASH care is at the intersection of drug interactions, monitoring protocols, and patient education — no other team member has the training to simultaneously manage statin dose caps, CYP2C8 conflicts, and hepatic/thyroid monitoring schedules." },
        D: { correct: false, strong: 'Considering the diagnostic workup before treatment shows appropriate clinical caution.', missed: "Liver biopsy is not required for resmetirom initiation per AASLD Practice Guidance — noninvasive testing can establish eligibility. Additionally, ordering biopsies is outside the pharmacist's scope of practice. The pharmacist's unique contribution is managing the medication complexity that this patient presents: atorvastatin must be capped at 40 mg, resmetirom dose must be reduced for the CYP2C8 interaction with clopidogrel, and a structured monitoring schedule must be established.", pearl: "The pharmacist's irreplaceable value in MASH care is at the intersection of drug interactions, monitoring protocols, and patient education — no other team member has the training to simultaneously manage statin dose caps, CYP2C8 conflicts, and hepatic/thyroid monitoring schedules." },
        E: { correct: false, strong: "Recognizing the hepatologist's role in treatment decisions shows understanding of the multidisciplinary team structure.", missed: "The patient is already in a multidisciplinary clinic with a hepatologist — referral is unnecessary. The pharmacist's unique value is not in making referrals but in managing the medication complexity that no other team member is trained to handle: atorvastatin must be capped at 40 mg (OATP1B1/1B3 interaction), resmetirom dose must be reduced (CYP2C8 interaction with clopidogrel), and a structured hepatic and thyroid monitoring schedule must be established and tracked.", pearl: "The pharmacist's irreplaceable value in MASH care is at the intersection of drug interactions, monitoring protocols, and patient education — no other team member has the training to simultaneously manage statin dose caps, CYP2C8 conflicts, and hepatic/thyroid monitoring schedules." }
      }
    }
  ]
};
