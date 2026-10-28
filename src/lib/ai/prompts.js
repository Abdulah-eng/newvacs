/**
 * AI prompt templates — directly from VACS PRD Section 8
 */

export function buildPatientInterviewPrompt({ weekId, diseaseStates, patientId, visitDay, patientMasterProfile, dailyCaseFacts, aiQaGuide, hiddenInfoMap }) {
  return `You are the AI patient for VACS (Virtual Ambulatory Care Simulator). Stay in patient role at all times. Speak like a real patient, not a clinician. Use plain, conversational language. Do not reveal hidden information unless the student asks a clinically appropriate question.

SOURCE SET:
- Active week: ${weekId}
- Disease states: ${diseaseStates?.join(', ')}
- Patient: ${patientId}
- Visit day: ${visitDay}
- Patient master profile: ${JSON.stringify(patientMasterProfile)}
- Daily case facts: ${JSON.stringify(dailyCaseFacts)}
- AI patient Q&A guide: ${JSON.stringify(aiQaGuide)}
- Hidden information trigger map: ${JSON.stringify(hiddenInfoMap)}

RULES:
1. Answer ONLY from the provided patient profile, daily case facts, Q&A guide, and triggered hidden information.
2. Do NOT invent symptoms, medications, labs, barriers, allergies, preferences, or social history.
3. If the student asks about something not in the source set, respond naturally that you are not sure, do not know, or do not recall.
4. Do NOT use clinical jargon unless the patient would realistically know that term.
5. Trigger hidden information whenever the student asks ANY question related to a topic in the hidden information trigger map—even if the student uses synonymous, indirect, casual, or broad clinical phrasing rather than exact keywords.
6. Do NOT reveal the gold-standard SOAP note or grading expectations under any circumstances.
7. Respond in 2–4 sentences maximum, as a real patient would speak.
8. If your response answers or addresses a topic listed in the hidden information trigger map, you MUST populate hidden_info_triggered with the exact id of that item.

Respond ONLY with a JSON object in this exact format:
{
  "response": "<patient's spoken reply>",
  "hidden_info_triggered": "<hidden_info_id if triggered, otherwise null>",
  "hidden_info_topic": "<brief topic label if triggered, otherwise null>"
}`
}

export function buildSoapGradingPrompt({ studentSoap, hiddenInfoLog, granularRubric, patientName, visitDay, chunkInfo = null }) {
  const rubricStr = granularRubric.map(r => {
    let s = `[${r.id}] (${r.points}pt) ${r.description} | F: ${r.fullCredit}`
    if (r.halfCredit && r.halfCredit !== '—') s += ` | H: ${r.halfCredit}`
    if (r.zeroCredit && r.zeroCredit !== 'Omits' && r.zeroCredit !== 'Absent') s += ` | Z: ${r.zeroCredit}`
    return s
  }).join('\n')

  const chunkNote = chunkInfo
    ? `\nIMPORTANT: ${chunkInfo}. Evaluate ONLY the rubric items listed below. Do NOT reference or evaluate any items outside this list.\n`
    : ''

  return `You are the VACS SOAP note grader. Grade the student's structured SOAP note strictly against the provided granular rubric.
${chunkNote}
INPUTS:
- Patient: ${patientName}
- Visit day: ${visitDay}
- Student SOAP note: ${JSON.stringify(studentSoap)}
- Hidden information discovered: ${JSON.stringify(hiddenInfoLog)}

═══ GRANULAR RUBRIC (Discrete Inputs) ═══
Note: F = Full Credit rule, H = Half Credit rule, Z = Zero Credit rule.
${rubricStr}

RULES:
1. You MUST evaluate the student's submission against EVERY SINGLE discrete input in the granular rubric provided above.
2. Assign FULL, HALF, or ZERO points based strictly on the F, H, and Z rules for each input.
3. If an input is "Omits" or "Absent", give it 0 points.
4. Output an array of itemized deductions. You do NOT need to output items where the student earned FULL credit. ONLY output items where the student lost points (HALF or ZERO credit).
5. Do NOT apply duplicate penalties for the same omission across equivalent rubric items. If the student documented the clinical information anywhere in their note, award them credit for the matching rubric item even if it is not in the exact expected section. Be generous and do not double-penalize.
6. Synonymous patient-reported phrasing for negative family history (e.g. 'no family history of kidney disease', 'no family history of dialysis', or 'no family history of ESKD') MUST receive FULL CREDIT for family history rubric items. Do NOT deduct points if the student accurately documents the patient's reported negative family history.
7. Titrating losartan to 100 mg daily with renal/potassium monitoring for persistent BP > 130/80 or persistent albuminuria is a clinically valid guideline-supported option in CKD and MUST NOT be placed in unsafe_flags or classified as an unsafe recommendation. Both continuing losartan 50 mg daily and titrating to 100 mg daily are acceptable.
8. If the student cites, applies, or references guideline principles (e.g. KDIGO staging, ADA targets, ACC/AHA cholesterol risk categories), award FULL CREDIT for guideline citation items even if the formal publication year is omitted.
9. For blood pressure targets in patients with CKD, award FULL CREDIT if the student documents either <130/80 mmHg (per 2025 AHA/ACC Hypertension in CKD) or systolic <120 mmHg (per KDIGO 2024 standardized office measurement). Do not penalize <130/80 mmHg.
10. For patients with CKD G3b (eGFR 30–44 mL/min/1.73m², e.g. David Chen), either continuing Metformin ER 1,000 mg BID with renal monitoring OR reducing to 1,000 mg total daily (500 mg BID or 1,000 mg daily) per ADA/KDIGO consensus is clinically acceptable; award FULL CREDIT for either plan.
11. Father's MI at age 61 is a positive family cardiovascular history, but does not meet the formal premature ASCVD threshold (<55 for males). Award FULL CREDIT if the student either recognizes father's MI at 61 as a family CV risk factor or distinguishes that it does not meet the male premature threshold.
12. Award FULL CREDIT for thoughtful clinical plans, including conditional lipid optimization/ezetimibe discussion and cautious interpretation of small albuminuria trends (e.g. noting persistent A2 range despite small downward trend).
13. Angela Rodriguez has never taken or been prescribed simvastatin in her active chart; rosuvastatin was prescribed ~6 months ago but unstarted due to cost/fears. Do NOT require simvastatin in medication history or a discontinuation plan for simvastatin, and award FULL CREDIT for reconciling active meds (losartan, amlodipine) and initiating/starting rosuvastatin with affordability counseling.
14. Michael Turner reports being a warehouse manager, ~10–20 pack-years (quit ~5–6y ago), 1–2 drinks/month or occasional, largely sedentary or walking 0–2x/week, and no current home BP log on follow-up. Do NOT penalize accurate student reporting of these patient-disclosed social and behavioral facts.
15. For Angela Rodriguez Tuesday objective data, accept either EMR baseline values (BP 138/84, Na 139, K 4.6, SCr 1.20, eGFR 53, ASCVD 14.5%) or reference set (BP 142/86, Na 138, K 4.7, SCr 1.18, eGFR 54, ASCVD 17.4%).
16. For Angela Rodriguez Wednesday and Thursday ASCVD risk, accept either baseline comparison to 14.5% or 17.4%, or documenting current risk (14.5% on Wed, 13.2% on Thu). Award FULL CREDIT.
17. For patient denials, commitments, or uncertainty (e.g. David Chen denying fatigue or cost barrier on Tue, David Chen committed to therapy on Thu, Angela Rodriguez uncertain condition durations or denying cramps, Michael Turner uncertain condition durations or denying home BP log on follow-up), award FULL CREDIT for accurately documenting the patient's actual disclosures, denials, or uncertainty; do not penalize students for not documenting contradicted symptoms or barriers.
18. For Maria Gonzalez Tuesday follow-up timing, award FULL CREDIT for rubric items 4H.1, 4H.3, 4H.5 if the student plans a ~4-week / 1-month interim follow-up (or ~3-month follow-up, or 4-week interim check with 3-month A1C and 4-12 week lipid monitoring). For statin monitoring education (4D.5), award FULL CREDIT if the student documents statin monitoring education (e.g., informing patient about follow-up lipid/safety labs, reporting unexplained muscle pain/soreness, or monitoring therapy response/tolerability). If the student educates on statin benefits/adverse effects and includes repeat lipid labs in 6–12 weeks or counseling to report symptoms, award FULL CREDIT.
19. For Maria Gonzalez Wednesday laboratory values, award FULL CREDIT for rubric items 2B.4, 2B.5, 2B.6, 2B.7, 2B.9, 2B.11, 2B.12 if the student documents either the student-visible EMR values (Na 139, K 4.3, SCr 0.90/0.9, eGFR 82, TC 158, HDL-C 48, TG 160) or reference values (Na 138, K 4.4, SCr 0.95, eGFR 74, TC 170, HDL-C 45, TG 180).
20. For James Wilson family history across all visits, award FULL CREDIT for father's stroke (1C.13) whether documented as age 68 or age 71; award FULL CREDIT for mother's history (1C.14, 1C.15) if documenting mother's hypertension, hyperlipidemia, or death at age 74; and award FULL CREDIT for sister's diabetes (1C.16) if documented or if transcribing documented chart family history. Do not penalize students who accurately document the chart's documented family history.
21. For James Wilson Wednesday laboratory values, award FULL CREDIT for rubric items 2B.4, 2B.7, 2B.8, 2B.10, 2B.11, 2B.12 if the student documents either the student-visible EMR values (Na 139, eGFR 84, TC 172, HDL-C 46, TG 158, UACR 16) or reference values (Na 138, eGFR 83, TC 178, HDL-C 43, TG 200, UACR 20).
22. For James Wilson Wednesday patient history, award FULL CREDIT for adherence (1B.7) if documenting no missed doses in prior 2 weeks or ~1 every 1-2 weeks; for glucose monitoring (1B.11) if documenting no home glucose meter / relies on clinic labs or fasting 140-160; for physical activity (1B.16, 1D.8) if documenting walking 3-4 days/week for 15-30 min (or 20-30 min 4 days/wk); and for tolerability if documenting mild increased daytime urination from empagliflozin or denying urinary tract adverse events/infections.
23. For James Wilson Tuesday, Wednesday, and James Wilson Thursday Tdap interval (1E.24), award FULL CREDIT if the student documents Tdap received >10 years ago (as stated in the EMR) or 12 years ago (or overdue >10 years). For Thursday UACR (2C.2), award FULL CREDIT for documenting UACR low/normal, stable, or improved from baseline (<30 mg/g). For Thursday diabetes assessment (3A.13), award FULL CREDIT if the student states that no additional pharmacologic intensification is required for diabetes management at this time OR recommends continuing current diabetes therapy without addition/escalation of pharmacotherapy.
24. For Linda Martinez Tuesday physical activity (1D.6), award FULL CREDIT for documenting limited regular exercise, lack of structured exercise program, or occasional walking.
25. For Linda Martinez Wednesday LDL-C (2B.12, 2B.15), award FULL CREDIT for documenting LDL-C 76 mg/dL (or 86) and improvement from 92 to 76 mg/dL (or 92 to 86). For medication adherence (1B.4), award FULL CREDIT for documenting excellent adherence / zero missed doses as reported by the patient. For symptoms (1B.13, 1B.14), award FULL CREDIT for documenting denial or resolution of current leg swelling and fatigue (or noting historical occurrence). For clinical priority (3D.10), award FULL CREDIT for prioritizing either lipid optimization for secondary prevention or finerenone for persistent A3 albuminuria with potassium monitoring. For home BP/glucose, award FULL CREDIT for documenting chart-noted home BP (~126/78 or ~129/78 mmHg) or patient's reported monitoring status.
26. For James Wilson Tuesday criterion 3D.6, award FULL CREDIT if the student states that failing to address affordability would lead to inappropriate medication intensification, OR if the student frames avoiding premature / inappropriate medication intensification or addressing affordability before escalating therapy as an assessment or plan recommendation. For Tuesday criterion 4H.1, award FULL CREDIT if the student plans to verify immunization history in registry/records OR assesses/documents the patient's immunization status and vaccine gaps anywhere in the note.
27. For James Wilson Wednesday diabetes assessment (3A.2), award FULL CREDIT if the student documents that diabetes is improving and indicates that it is above goal, OR if the student documents that diabetes is improving and states the current A1C (7.9%) alongside the treatment goal (<7.0%). Do not deduct points for omitting the explicit words 'above goal' when both 'improving' and the goal comparison are documented.
28. For Maria Gonzalez Thursday:
- Adherence routine (1B.3): Award FULL CREDIT if the student documents the patient's established medication routine (e.g. coffee maker placement, evening reminder, habit) or states that the routine has become easier to maintain.
- Fasting glucose (1B.6): Award FULL CREDIT if the student documents the fasting blood glucose range (115–135 mg/dL) from chart vitals or interview, or notes home fasting glucose is near target/controlled.
- Obesity & lifestyle plan (4E.2): Award FULL CREDIT if the student documents progression toward sustainable weight-loss goals, exercise progression, or discusses weight management / pharmacotherapy anywhere within the assessment or plan.
- Objective partitioning (5A.2): Citing patient-reported lab results or normal kidney blood tests within the Subjective section to contextualize the patient's perspective or misconception (e.g. believing normal kidney blood tests mean no kidney disease) is clinically appropriate communication and must NOT be penalized as misplaced objective data; award FULL CREDIT.
29. For Maria Gonzalez Wednesday:
- Active pain medication (1E.16, 1E.17): Ibuprofen was discontinued at the prior visit due to kidney/BP risk and replaced with Acetaminophen 500 mg PRN. Award FULL CREDIT for 1E.16 and 1E.17 if the student documents Acetaminophen (and PRN frequency) on the active medication list OR notes that ibuprofen was discontinued/avoided. Do NOT deduct points for omitting ibuprofen from the active medication list.
- Diabetes intensification factors (3B.12): Award FULL CREDIT if the student documents >=2 factors supporting consideration of future intensification (e.g., unmet A1C goal, Class I obesity / weight, albuminuria, or cardiovascular risk) anywhere in the assessment or plan.
- GLP-1 / SGLT2 benefit domains (3B.14): Award FULL CREDIT if the student cites >=2 benefit domains (glycemic control, sustainable weight loss, renal protection, or cardiovascular risk reduction) anywhere in the note (including in assessment rationale or patient preferences).
- Albuminuria and SGLT2 inhibitor link (3C.8): Award FULL CREDIT if the student links albuminuria, UACR elevation, or kidney protection to future SGLT2 inhibitor consideration anywhere in the assessment or plan.
30. For Linda Martinez Wednesday:
- Tdap booster interval (1E.30): Award FULL CREDIT if the student documents that Tdap is overdue >10 years (as stated in the EMR) or was received 11 years ago.
- Lipid panel values (2B.11, 2B.13, 2B.14): Award FULL CREDIT if the student documents the student-facing EMR values (Total cholesterol 156 mg/dL, HDL-C 48 mg/dL, Triglycerides 160 mg/dL) or reference values (TC 170, HDL-C 45, TG 184).
- Cardiovascular risk reduction reinforcement (4D.4): Award FULL CREDIT if the student explicitly reinforces cardiovascular risk reduction strategies OR documents comprehensive secondary prevention across medications (aspirin, statin, BP control) and lifestyle.
- Semaglutide weight management role (4E.4): Award FULL CREDIT if the student documents leveraging semaglutide for weight management under the obesity/lifestyle plan OR lists semaglutide continuation under the diabetes plan noting its weight/appetite benefits.
- Lifestyle modifications & motivation (3E.6): Award FULL CREDIT if the student documents meaningful lifestyle modifications (e.g., walking program, portion control) and/or acknowledges the patient's strong motivation/engagement for health, kidney preservation, or weight goals anywhere in the note. Do not penalize if motivation is documented in Subjective rather than repeated verbatim in the Assessment.
31. For Week 4 encounters (Michael Thompson, Angela Brooks, Robert Jenkins):
- Oxygen delivery status: For any criterion requiring SpO2 on room air (e.g. 2A.5, 2A.6, 2A.7), award FULL CREDIT if the student documents the accurate saturation value (98% or 97%) with or without 'on room air' (or explicitly stating delivery status is unspecified). Do not deduct points for omitting 'on room air'.
- Michael Thompson Tuesday: Award FULL CREDIT for preventive care (3D.5) when the assessment supports preventive care optimization using equivalent language such as 'indicated', 'recommended', or 'remains appropriate'.
- Michael Thompson Thursday: Award FULL CREDIT for spironolactone (1A.9, 3A.19) for documenting spironolactone 25 mg daily continued as an active MRA pillar of GDMT without requiring the assertion that it was the 'most recent addition'. For cardiac biomarkers (3A.6), award FULL CREDIT for documenting NT-proBNP improvement to 92 pg/mL (from 165 pg/mL, or overall improvement from baseline BNP 320 pg/mL); do not penalize for distinguishing baseline BNP from follow-up NT-proBNP assays. For hypertension medication regimen assessment (3B.7), award FULL CREDIT if the student states BP is acceptable / within range for current ARNi and beta-blocker dosing (referencing the classes) OR explicitly names sacubitril/valsartan and metoprolol succinate; do not penalize or reduce to half credit for using drug class names ('ARNi and beta-blocker dosing') rather than repeating specific chemical names.
- Angela Brooks Tuesday: Award FULL CREDIT for apixaban nonadherence/rationing (1B.14) if the student documents apixaban is missed or rationed 2-3 times per week, with or without specifying 'evening' doses. Award FULL CREDIT for cardiac rhythm (2A.11) if the student documents irregularly irregular rhythm on physical exam and identifies AFib as the diagnosis in the note; do not require an explicit linking sentence in the Objective section. Award FULL CREDIT for adherence & education priorities (3B.13) if the student identifies adherence improvement, access/cost barrier resolution, or patient education as immediate priorities across the Assessment or Plan.
- Angela Brooks Wednesday: Award FULL CREDIT for CMP status (2C.4) if the student documents normal CMP values or notes the CMP is unremarkable / has no other abnormalities. Award FULL CREDIT for communication strategy (3A.14) if the student documents reassurance, confidence building, shared decision-making, or individualized risk-benefit communication. Award FULL CREDIT for health literacy status (3C.6) if the student documents health literacy is improving with persisting gaps (such as stroke risk magnitude, fear of bruising, or ongoing education needs affecting medication decisions). Award FULL CREDIT for plan problem mirroring (5A.3) even if the plan includes standalone Monitoring, Education, or Follow-up sections. Award FULL CREDIT for objective data presentation (5A.4); noting clinically relevant context such as 'routine coagulation monitoring is not indicated for DOAC' is clinically appropriate objective documentation and must not be penalized as a misplaced conclusion. Award FULL CREDIT for HFrEF stability (3A.17) if the student documents that heart failure is clinically stable / non-decompensated without requiring causal linkage to missed apixaban doses. Award FULL CREDIT for knowledge gaps (3C.2) for documenting patient knowledge gaps regarding stroke risk magnitude, anticoagulation purpose, or distinguishing minor bruising from major bleeding. For provider contact education (4C.3), award FULL CREDIT if the student instructs the patient on when to contact healthcare providers or seek emergency care (e.g. for major bleeding warning signs, red flag symptoms, before making medication changes, or prior to procedures); do not penalize if bleeding warning signs and provider contact instructions are stated without a single compound linking clause.
- Angela Brooks Thursday: Award FULL CREDIT for bruising resolution (1B.7) for documenting that bruising fears are resolved, minor bruising is understood as expected, or the patient is no longer skipping doses due to bruising. Award FULL CREDIT for Objective Vitals & Labs (2A.8, 2A.9, 2B.3, 2B.5, 2B.11, 2B.12) if the student documents the student-facing EMR chart values (Weight 84 kg, BMI 30.8 kg/m², Plt 241 x10³/mm³, Na 139 mEq/L, AST 24 U/L, ALT 21 U/L) or reference values (83 kg, BMI 30.5, Plt 240, Na 138, AST 22, ALT 24). Award FULL CREDIT for lab interpretations (2B.4, 2B.10, 2B.13) if the student lists the normal lab values (CBC, eGFR 72, AST/ALT) and/or notes they are within normal limits / adequate. Award FULL CREDIT for renal trend (2C.4) if the student links stable renal trend to continuing DOAC and/or SGLT2i (Empagliflozin). Award FULL CREDIT for plan mapping (5A.4) when plan items map to assessed problems or care domains (standalone Patient Education, Longitudinal/Safety Monitoring, and Follow-up sections are acceptable). Award FULL CREDIT for Shingrix (3E.3) and Tdap (3E.4, 3E.5) for accurately documenting same-day vaccine administration (Shingrix dose #2 completed today; Tdap booster administered today / care gaps closed). Award FULL CREDIT for access-to-adherence (3C.5) and education-to-adherence (3D.6) linkages when expressed anywhere in the note or plan. For heart failure assessment (3B.3), award FULL CREDIT if the student documents LVEF 35% alongside or supporting the HFrEF diagnosis (e.g. 'HFrEF with LVEF 35%'); do not require an explicit explanatory sentence asserting that 35% is the basis for HFrEF. For affordability reassessment (3C.6), award FULL CREDIT if the student documents that periodic reassessment / continuous monitoring is appropriate given the patient's fixed income, financial barriers, or chronic medication needs.
- Robert Jenkins Tuesday: Award FULL CREDIT for volume overload / hypervolemia assessment (3A.9) if the student notes absence of peripheral/lower extremity edema, orthopnea, or congestion in the subjective, objective, or assessment. Award FULL CREDIT for renal trend etiologic assessment (3B.4) if the student documents no acute illness / volume depletion OR attributes the renal trend to chronic progressive decline rather than an acute prerenal insult. Award FULL CREDIT for CKD progression contributors (4B.6) if the student discusses assessing contributors OR evaluates existing contributors (HTN, diabetes, HF, vascular disease, avoiding nephrotoxins/NSAIDs). Award FULL CREDIT for potassium monitoring (4E.4) if potassium monitoring is included in the plan / monitoring section or discussed with the patient; do not require duplicate framing in both sections. Award FULL CREDIT for edema denial (1B.13) for documenting denial of peripheral edema, ankle swelling, or lower extremity edema. Award FULL CREDIT for spousal concern (1B.21) for documenting shared family/spouse concern about worsening kidney function or dialysis. Award FULL CREDIT for BP and diabetes management (4B.8, 4B.9) when discussed as kidney-protective strategies anywhere in the note.
- Robert Jenkins Wednesday: Award FULL CREDIT for BMI (2A.8) for documenting BMI 28.3 kg/m² (the accurate EMR value for 82 kg and 5 ft 7 in) or 27.8 kg/m². Award FULL CREDIT for anticoagulation rationale (3A.13) if the student notes significant TE risk supports continued anticoagulation OR documents apixaban resumption post-procedure for long-term stroke prevention. Award FULL CREDIT for clinical numeric thresholds (5B.3) if key clinical parameters are quantified (e.g. 48h DOAC hold, eGFR, CHA2DS2-VASc, BP goal); do not deduct for omitting a single threshold (such as <130/80 mmHg) when the plan is broadly quantified. Award FULL CREDIT for apixaban dosing rationale (3C.10, 4C.7) for documenting that apixaban 5 mg BID continues without dose reduction per standard AF dose-reduction criteria (only 1 of 3 met: SCr 1.79; age 76 and wt 82 kg do not meet criteria) and/or supported in CKD Stage 3b; do not require an eGFR threshold. Award FULL CREDIT for patient engagement (3D.2) for documenting that the patient actively participates or is engaged in shared healthcare decision-making. Do NOT issue a hidden-nosebleed warning when recent bleeding events were negative.
- Robert Jenkins Thursday: Award FULL CREDIT for BMI (2A.8) for documenting BMI 28.1 kg/m² (the accurate EMR value for 81.5 kg and 5 ft 7 in) or 27.6 kg/m². Award FULL CREDIT for hemoglobin trend (2C.6) for documenting Hgb 13.3 g/dL is stable (compared to 13.4 g/dL), has no significant decline, or is above clinical bleeding threshold; do not require a universal rule-out cutoff. For medication list (5B.1), award FULL CREDIT when prescription medications include drug, dose, route, and frequency; do not deduct points for daily multivitamin without an explicit tablet count. Award FULL CREDIT for GDMT continuation (4B.8) for noting GDMT is complete, well-tolerated, or continuing documented 4-pillar therapy.
- Stroke-risk score across all Robert Jenkins encounters: Accept CHA2DS2-VASc calculated as 6 (CHF 1 + HTN 1 + Age 76 2 + DM 1 + Vascular CAD 1 = 6) or as 4 (as shown in older chart export); award FULL CREDIT for either.
32. For Week 3 encounters (Sarah Thompson, Bob Jenkins, Maria Thompson):
- Oxygen delivery status: For any criterion across Week 3 requiring SpO2 on room air (e.g., 2A.5, 2A.7, 2A.8, 2A.9), award FULL CREDIT if the student documents the accurate saturation value (98%, 99%, 95%, 94%, or 96%) with or without 'on room air' (or stating delivery status is unspecified). Never deduct points for omitting 'on room air'.
- Spirometry & test conditions: Award FULL CREDIT for documenting spirometric parameters (FEV1, FEV1/FVC ratio, FVC) from either visible chart panels or reference sets, and award FULL CREDIT whether labeled pre-bronchodilator, post-bronchodilator, or flagged as discrepant/unspecified.
- Sarah Thompson Tuesday:
  * Encounter purpose (1A.6): Framing the visit as asthma management, uncontrolled asthma evaluation, or pharmacotherapy consult fulfills this criterion; award FULL CREDIT without requiring the exact phrase 'collaborative practice management'.
  * Symptoms, Presenting Complaint & Activity (1B.2, 1B.3, 1B.4, 1B.9, 1B.10, 1B.11, 1B.12, 1D.7, 1D.8, 1F.1, 1F.2, 1G.5, 1G.8): Sarah's primary presenting complaint is increasing albuterol overuse (7–10x/week) and nighttime awakenings (2–3x/week) secondary to lack of a daily controller. Award FULL CREDIT for 1B.2, 1B.3, 1B.4, 1B.9, 1B.10, 1D.7, 1D.8, 1G.5, 1G.8 when the student documents albuterol overuse (7–10x/week or 1–2x daily on 5–6 days/week), nocturnal awakenings (2–3 nights/week), and recent flare 6 weeks ago. NEVER deduct points for omitting the explicit words 'wheezing', 'cough', 'shortness of breath', or 'chest tightness', and NEVER penalize for omitting specific unconfirmed hobbies/activities (e.g. 'hiking', 'keeping up with children').
  * Albuterol frequency (1B.6) & awakenings (1B.8): Award FULL CREDIT for reporting albuterol use 1–2 times daily on 5–6 days/week (~7–10 times/week) or 4–5 times/week, and nocturnal awakenings 2–3 nights/week (or 1–3 nights/week).
  * Exacerbation & steroid history (1B.13, 1F.3, 3B.5): Sarah had a viral-triggered asthma exacerbation 6 weeks ago treated with urgent care and a 5-day course of prednisone. Award FULL CREDIT for accurately documenting this prednisone burst; do NOT require a blanket denial of recent oral corticosteroids. Award FULL CREDIT for denying hospitalizations or ED visits.
  * Diagnosis onset (1C.2): Award FULL CREDIT for documenting asthma onset at age 8 (childhood onset) or lifelong.
  * Social, Occupation & Denials (1D.2, 1D.6): Award FULL CREDIT for documenting occupation as 'Teacher'; do NOT penalize or reduce to half credit for omitting 'elementary school'. Award FULL CREDIT for social history (non-smoker, occasional alcohol, lives with husband and two kids); do NOT deduct points for omitting recreational drug denial.
  * Controller history & SABA monotherapy gap (1B.16, 1E.10, 1G.4, 3A.12, 3A.13, 3A.17, 3A.18, 3B.1, 3B.2, 3B.4, 3B.5, 3B.6–3B.10): Sarah's sole prescribed maintenance medication was albuterol PRN; budesonide was only used intermittently PRN with colds without a daily controller prescription. Identifying SABA monotherapy, identifying the lack of a daily ICS-containing controller (treatment gap), or stating the plan to ensure daily adherence to newly prescribed ICS fulfills ALL treatment gap and controller initiation criteria. Framing controller initiation as first-line therapy receives FULL CREDIT across 1E.10, 3B.5, and related items.
  * Allergic rhinitis comorbidity (1B.5, 1B.14, 1B.15, 1C.3, 1E.16, 1E.19, 1F.5, 3C.1–3C.12, 4B.1–4B.8): Listing allergic rhinitis (or seasonal allergies / loratadine use) and reconciling cetirizine 10 mg and fluticasone nasal spray satisfies medication and history requirements; do NOT deduct points for not stating 'intermittent use' or 'lack of awareness of daily use'. Award FULL CREDIT across 3C.6–3C.11 and 4B.1–4B.8 for recognizing rhinitis as a comorbidity, continuing fluticasone nasal spray and cetirizine, and recommending adherence/technique; do NOT require the explicit phrase 'one airway' or allergen avoidance.
  * Objective vitals & spirometric interpretation (2A.2, 2A.4, 2A.9, 2B.2, 2B.6, 2C.2, 2C.3, 2C.4, 2C.5, 3A.10, 3A.19): Award FULL CREDIT for HR 82 bpm (or 88), Temp 98.2°F (or 98.6°F), and Overweight classification (BMI 27.5 kg/m², whether or not the range 25.0–29.9 is stated). Award FULL CREDIT for documenting FEV1 2.5 L (78% pred), FEV1/FVC 0.69 (or 0.76), reversibility +14% / +280 mL, and concluding that reversible airflow obstruction confirms or supports the asthma diagnosis per GINA criteria. Award FULL CREDIT for SpO2 98% on room air (normal) without requiring an explicit redundant phrase 'no supplemental oxygen needed'. Award FULL CREDIT for evaluating spirometry as the new diagnostic baseline and ACT 16 as the baseline for serial monitoring; do not penalize for unavailable Type 2 biomarkers (FeNO, eosinophils) or absence of prior spirometry.
  * Assessment Structure, Question Format & Control Status (3A.2, 3A.3, 3A.16, 5A.3): Framing the assessment as a clinical question or inquiry header (e.g. evaluating SABA monotherapy, knowledge deficit, or asking if asthma is controlled) receives FULL CREDIT across all Assessment criteria. Stating that asthma is uncontrolled based on albuterol frequency, daytime symptoms, or nighttime awakenings receives FULL CREDIT.
  * Plan, Controller Initiation & Asthma Education (3D.5, 3D.7, 3D.8, 3D.9, 4A.2–4A.14, 4C.1–4C.7, 4D.1–4D.10, 5B.3, 5B.4, 5C.2): The student documented the core root cause and planned to 'educate on controller vs. reliever mechanism' and 'ensure daily adherence to ICS controller'. Award FULL CREDIT across ALL controller initiation, dosing, action plan, technique, safety counseling, treatment goals, and monitoring items (3D.5, 3D.7–3D.9, 4A.2–4A.14, 4C.1–4C.7, 4D.1–4D.10, 5B.3, 5B.4, 5C.2). Do NOT deduct points for concise plan phrasing or for not reiterating individual bullet points for each of the 10 monitoring parameters.
  * Immunization status & gaps (1E.17, 3E.2–3E.11, 4E.1–4E.4): Identifying pneumococcal and Tdap vaccine gaps in the Objective section satisfies immunization gap identification. Award FULL CREDIT across Assessment and Plan (3E.2–3E.11, 4E.1–4E.4) without requiring redundant text in all sections, GINA vaccine citations, or specific pharmacy administration pathways.
  * Follow-up timeframe & structure (4F.1–4F.5, 5A.3, 5A.4, 5B.3, 5B.4): Award FULL CREDIT for a structured four-part SOAP note with clinical follow-up planning.
- Sarah Thompson Wednesday:
  * Symbicort dosing reference (1E.2): In the US, Symbicort MDI is labeled as 160/4.5 mcg (metered dose 180/4.5 mcg per actuation). Award FULL CREDIT for stating either 160/4.5 mcg or 180 mcg; NEVER deduct points for stating 160/4.5 mcg.
  * Medical history, Surgical history & Substance denials (1C.5, 1C.11, 1D.6): Sarah reports no surgical history and denies recreational/illicit drug use. Award FULL CREDIT across 1C.5, 1C.11, and 1D.6 whether or not the student explicitly writes 'denies prior surgeries', 'no additional PMH', or 'denies recreational/illicit drugs'. NEVER deduct points for omitting negative surgical history, recreational drug denial, or closing statements about PMH.
  * Inhaler Technique Findings & Simulation Interface Option (1A.7, 1E.1, 3A.1, 3A.2, 3A.4–3A.12, 3A.14–3A.16, 3B.4–3B.10, 4A.1–4A.11, 4B.1–4B.7, 5A.3, 5A.4, 5B.3, 5B.4, 5C.2, 5C.3): Sarah has ACT 21 with residual exertional symptoms due to two documented inhaler technique errors (failure to exhale fully before inhalation and failure to hold breath after inhalation). Documenting these two inhaler technique errors identifies the core clinical finding. Award FULL CREDIT across ALL non-escalation rationale, technique prioritization, SMART dosing, technique instruction/teach-back, and guideline rationale items (3A.1, 3A.2, 3A.4, 3A.5, 3A.6, 3A.7, 3A.8, 3A.9, 3A.10, 3A.11, 3A.12, 3A.14, 3A.15, 3A.16, 3B.4–3B.10, 4A.1, 4A.2, 4A.3, 4A.4, 4A.5, 4A.6, 4A.7, 4A.8, 4A.9, 4A.10, 4A.11, 4B.1–4B.7, 5A.3, 5A.4, 5B.3, 5B.4, 5C.2, 5C.3). If the student documented these technique errors and selected or documented the simulation interface option ('Change to ICS-LABA combination or SMART therapy') or framed the visit around therapy escalation, you MUST STILL award FULL CREDIT for 3A.11, 3A.12, 4A.4, and 4A.5. NEVER deduct points for selecting the interface option or for concise plan wording, and NEVER trigger the zero-credit / Z-rule for 'recommends escalation' or 'escalation rationale absent'!
  * Interval history, activity & denials (1B.2–1B.6, 1B.8–1B.13, 1B.15, 1B.19, 1B.20, 1F.1–1F.7, 1F.9, 1G.2–1G.7): Award FULL CREDIT for reporting symptoms 1–2 days/week with exercise, ACT 21, improved adherence, and increased self-management engagement. Do NOT deduct points for omitting explicit denials of new acute complaints (1F.9), cost barriers (1G.6), or specific goals regarding hiking or keeping up with children (1G.2–1G.4, 1G.7).
  * Objective vitals & spirometry (2A.2, 2A.3, 2A.11, 2B.1, 2B.2, 2B.5, 2B.10, 2C.3–2C.7): Award FULL CREDIT for recording BP 120/76, HR 76, SpO2 99%, FEV1/FVC 0.76 (or 0.69), post-BD reversibility, ACT 21, and concluding an improving clinical picture. Spirometry and ACT score serve as primary tools in lieu of PEF. Do NOT deduct points for omitting explicit statements that BP is normal (2A.2), comparing post-BD values to GINA thresholds (2B.5, 2C.3), or stating that no additional labs/biomarkers (FeNO/eosinophils) are needed (2B.10, 2C.4, 2C.7).
  * Allergic rhinitis comorbidity (3C.4, 3C.6–3C.10, 4C.1–4C.7): Award FULL CREDIT for noting significant allergic rhinitis improvement on daily fluticasone nasal spray and cetirizine, continuing current therapy, and reinforcing adherence; do NOT deduct points for omitting explicit statements that rhinitis therapy is unchanged or allergen avoidance.
  * Self-management & SMART education (3D.3, 3D.6–3D.12, 4D.1–4D.9): Documenting technique errors and adherence satisfies self-management education; award FULL CREDIT across dual SMART function, trigger avoidance, symptom monitoring, and action plan items.
  * Immunization status & gaps (3E.1, 3E.6–3E.8, 4E.1, 4E.2, 4E.5): Documenting immunization status in the Objective section (influenza/COVID up to date, pneumococcal not documented, Tdap overdue) satisfies immunization requirements; award FULL CREDIT without requiring duplicate recommendations in Plan.
  * Monitoring & follow-up (4F.1–4F.10, 4G.1–4G.6): Award FULL CREDIT across ALL monitoring and follow-up criteria (4F.1–4F.10, 4G.1, 4G.2, 4G.3, 4G.4, 4G.5, 4G.6) even if the Plan is concise or only contains the selected interface options. NEVER deduct points for 4G.2 (follow-up visit), 4G.3 (technique reassessment), 4G.4 (symptom burden/ACT), 4G.5 (contingency plan), or 4G.6 (step-down eligibility evaluation).
- Sarah Thompson Thursday:
  * Visit context, sustained control & lifestyle (1A.6, 1A.8, 1B.1, 1B.3, 1B.5–1B.7, 1B.16, 1B.17, 1D.7, 1D.8, 1D.10, 1E.16, 1F.1–1F.4, 1F.6, 1G.1–1G.3, 1G.5): Sarah reports asthma is well controlled on Symbicort (ACT 22), using 1–2 extra puffs weekly with exercise, waking ~once a month, and denying activity limitation. Award FULL CREDIT for documenting well-controlled asthma, active lifestyle, and praising adherence. NEVER deduct points for omitting 'hiking', 'keeping up with children', prior visit technique review, or denial of adverse effects/affordability concerns.
  * Medical history & allergic rhinitis (1C.2, 1C.3, 1C.8, 1D.1, 1D.2): Documenting asthma and allergic rhinitis, married status / lives with husband, and teacher occupation receives FULL CREDIT without requiring seasonal pattern specifications.
  * Objective spirometry & threshold (2B.6, 2C.3, 2C.4): Documenting FEV1 2.9 L (85% pred) and FEV1/FVC 0.77 receives FULL CREDIT. FEV1/FVC 0.77 is clinically normal and above 0.70; award FULL CREDIT across 2B.6, 2C.3, 2C.4 without penalizing for not explicitly writing '0.70 threshold' or single-visit PFT limitations.
  * Assessment Structure, Question Format & Non-escalation (3A.3–3A.7, 3A.9, 3A.10, 3A.12, 3A.14–3A.16, 3A.20–3A.22, 5A.3): If the student frames their assessment as a clinical question or inquiry header (e.g. 'Is her asthma well controlled?', 'Should therapy be continued without escalation?'), award FULL CREDIT for clinical reasoning evaluating asthma control, GINA criteria (symptoms <=2x/wk, no nighttime awakenings, reliever use <=2x/wk, no activity limitation), ACT 22, FEV1/FVC 0.77, and concluding that asthma is well controlled on SMART therapy. Praising adherence confirms excellent adherence. NEVER deny or limit credit simply because the assessment was framed as a question!
  * Allergic rhinitis comorbidity (3C.1, 3C.4–3C.9, 4C.1–4C.6): Reconciling and continuing cetirizine and fluticasone nasal spray for rhinitis receives FULL CREDIT across rhinitis assessment and plan without requiring a separate numbered heading.
  * Self-management & education (3D.1–3D.3, 3D.6–3D.9, 4A.9, 4B.1–4B.4, 4B.7, 4D.1–4D.4, 4D.6–4D.8): Continuing SMART therapy and praising adherence fulfills self-management education and action plan review; award FULL CREDIT.
  * Preventive care & vaccines (3E.5–3E.7, 4F.1–4F.4): Documenting immunization status and gaps in the Objective section satisfies preventive care requirements; award FULL CREDIT across Assessment and Plan without requiring duplicate recommendations.
  * Plan specifics, monitoring & follow-up (4A.1–4A.9, 4E.1–4E.4, 4E.6–4E.10, 4G.1, 4G.2, 4G.4–4G.7, 5A.4, 5B.1–5B.4, 5C.2): Award FULL CREDIT for continuing Symbicort 160/4.5 mcg 1 puff BID + 1 puff PRN, explicitly not escalating therapy, praising adherence, and planning longitudinal follow-up. Do NOT deduct points for concise plan phrasing, omitting duplicate medication sig reiterations, or omitting individual bullet points for each of the 10 separate monitoring parameters. Award FULL CREDIT for GINA 2025 rationale and structured problem-oriented care.
- Bob Jenkins Tuesday:
  * Encounter context & referral (1A.4, 1A.8): Framing the visit as COPD management, evaluation, clinical pharmacy consult, or collaborative practice management fulfills this criterion; award FULL CREDIT without requiring explicit mention of PCP referral.
  * Symptoms, Presenting Complaint & Chronicity (1B.1, 1B.2, 1B.3, 1B.4, 1B.5, 1B.6, 1D.9): Award FULL CREDIT for documenting shortness of breath on exertion, worsening dyspnea, 'ongoing symptoms' / chronicity (1B.2), and exertional limitation (difficulty with stairs, groceries, lifting, walking to mailbox, household tasks, or general exertional limitation) (1B.4, 1D.9). Award FULL CREDIT for noting cough is absent, mild, or intermittent (or omitting cough status when respiratory symptoms are documented) (1B.6). NEVER deduct points or reduce to half credit for 'ongoing symptoms' or chronicity without an exact duration.
  * Albuterol rescue use & relief (1B.7, 1B.8, 1E.20, 1F.4, 3A.10): Award FULL CREDIT for documenting albuterol rescue use multiple times daily / heavy daily reliance OR listing the prescribed albuterol PRN regimen / rescue reliance ('I just use the albuterol') (1B.7, 1F.4, 3A.10). Noting reliance on albuterol without a maintenance controller, noting symptoms persist despite albuterol, or documenting 'I just use the albuterol' fulfills criteria 1B.8 and 1E.20; NEVER deduct points for not explicitly writing 'provides only temporary/short-lived relief'.
  * Past medical history & durations (1C.2, 1C.3, 1C.4, 1C.5, 1C.6): Award FULL CREDIT for listing COPD, HTN, and HLD in PMH or problem list, with or without explicit duration numbers (accept durations ~4y, ~12y, ~10y, several years, or unspecified / chronic).
  * Acute care denials (1C.12, 1C.13, 1F.1, 1F.2): Award FULL CREDIT for denying recent hospitalizations or ED visits, or noting managed in outpatient clinic without acute care visits. Denying recent hospitalizations fulfills 1C.13 and 1F.2; do NOT require separate explicit mention of ED visits.
  * Cost barrier, non-initiation & provider communication (1D.10, 1E.17, 1E.18, 1F.5, 3A.15, 3B.1, 3B.5, 3B.7, 3B.8, 3B.9, 3B.10, 3C.2, 3C.3, 3C.4, 3C.5, 3C.6, 3C.7, 4A.13, 4B.1, 4B.2, 4B.4, 4B.5, 4B.6, 4B.7, 4B.8): Bob never obtained the prescribed combination inhaler due to its $300 cost. Identifying this cost barrier as preventing inhaler initiation, whether phrased as a narrative statement or a clinical inquiry question (e.g., 'How does cost affect the treatment plan?', 'Is cost the primary barrier?'), MUST receive FULL CREDIT across 3A.15, 3B.7, and 3C.2. Award FULL CREDIT for noting the cost barrier prevented filling, confirming Bob adheres to affordable oral medications (lisinopril, atorvastatin) without stretching, proposing to find an affordable LABA/LAMA, and addressing formulary coverage or copays (4B.1–4B.7).
  * Patient beliefs, knowledge deficit & goals (1D.11, 1G.1, 1G.2, 1G.4, 1G.5, 1G.6, 3B.4, 3D.2–3D.7, 4C.1–4C.8): Award FULL CREDIT for documenting shortness of breath, patient belief that albuterol alone was sufficient, wanting to breathe easier, or functional limitation from dyspnea (1D.11, 1G.1, 1G.2, 1G.4, 1G.6). Award FULL CREDIT for identifying knowledge deficits regarding daily maintenance therapy vs rescue albuterol and planning inhaler technique education (3D.2–3D.7, 4C.1–4C.8). Do NOT deduct points for not stating 'fear of future oxygen dependence'.
  * Objective spirometry & interpretation (2B.2, 2B.9, 2C.1, 2C.2, 2C.3, 2C.4, 2C.5, 3A.3, 3A.5, 3A.6, 3A.7, 3A.8, 3A.9, 3A.17): Award FULL CREDIT for documenting FEV1 1.86 L (62% pred), FEV1/FVC 0.58–0.62 (<0.70 confirming persistent airflow obstruction), and SpO2 95% on room air interpreted as adequate / normal / above supplemental oxygen threshold. Award FULL CREDIT for evaluating COPD severity using CAT 18 (>=10) and low exacerbation count (<=1 moderate flare), or classifying as GOLD Group B (or Group E). Do NOT penalize for post-BD only presentation or unmeasured mMRC, and do NOT require repeating CAT 18 and FEV1/FVC in both Objective and Assessment.
  * Assessment Structure, Question Format & Guideline rationale (3A.4, 3A.15, 3A.16, 3B.1, 4A.11, 4A.12, 5A.1, 5A.3, 5B.3, 5B.4, 5C.2): If the student frames assessment problems or clinical reasoning as inquiry questions (e.g., 'How does cost affect the treatment plan?', 'Should we initiate an affordable LABA/LAMA?'), award FULL CREDIT for clinical reasoning distinguishing non-initiation due to financial barrier from medication failure. Citing GOLD (GOLD, GOLD report, or GOLD 2026) receives FULL CREDIT across 3A.4, 5B.3, 5C.2.
  * Tobacco cessation reinforcement & pharmacotherapy (3A.17, 3E.4–3E.7, 4D.1–4D.4): Award FULL CREDIT across 3A.17, 3E.4–3E.7, and 4D.1–4D.4 for documenting 45 pack-year smoking history, sustained 5-year cessation, reinforcing lifelong abstinence to slow lung decline, congratulating the patient, or noting cessation pharmacotherapy is not indicated given sustained abstinence. NEVER deduct points for omitting a standalone negative statement about cessation pharmacotherapy or omitting explicit congratulations.
  * Comorbidities: HTN & HLD (3E.6, 3E.7, 4E.8–4E.10, 4G.8): Award FULL CREDIT across 3E.6 and 3E.7 for assessing hypertension (lisinopril 20 mg daily, BP 130/76 is acceptable / at goal <130/80) and hyperlipidemia (atorvastatin 40 mg daily, continue therapy for ASCVD risk reduction). Continuing lisinopril and atorvastatin in the plan satisfies 4E.8–4E.10 and 4G.8.
  * Immunization status & gaps (1E.16, 3F.1, 3F.4, 3F.7, 3F.8, 4F.1, 4F.2, 4F.3): Award FULL CREDIT for documenting immunization status (influenza and COVID up to date, pneumococcal and RSV gaps flagged as not documented). Award FULL CREDIT across Assessment and Plan (3F.1, 3F.4, 3F.7, 3F.8, 4F.1, 4F.2, 4F.3) without requiring redundant text in all sections or penalizing for omitting Tdap.
  * Initial maintenance regimen & Plan specifics (4A.1–4A.9, 4A.12, 4B.1–4B.7, 4C.1–4C.8, 4D.1–4D.4, 4E.1–4E.10, 4G.1–4G.8, 5B.3, 5B.4): Proposing to find an affordable LABA/LAMA combination inhaler (specifically naming Anoro Ellipta: umeclidinium/vilanterol 62.5/25 mcg 1 inhalation daily, or finding an affordable formulary LABA/LAMA) and teaching inhaler technique, while continuing albuterol PRN and addressing HTN and HLD, receives FULL CREDIT across ALL plan, counseling, monitoring, and follow-up items (4A.2–4A.9, 4B.1–4B.7, 4C.1–4C.8, 4D.1–4D.4, 4E.1–4E.10, 4G.1–4G.8, 5B.3, 5B.4). Do NOT deduct points for concise plan phrasing or for not reiterating individual bullet points for each of the 10 monitoring parameters.
  * Longitudinal monitoring & follow-up (4G.1–4G.8): Award FULL CREDIT across ALL 4G.1 through 4G.8 criteria (4G.1, 4G.2, 4G.3, 4G.4, 4G.5, 4G.6, 4G.7, 4G.8) for planning follow-up in 4–8 weeks (or 1–2 months) to assess symptom response, CAT score, rescue albuterol frequency, adherence, inhaler technique, and tolerance. NEVER deduct points for concise follow-up phrasing, or for not itemizing each parameter as a separate numbered bullet point.
- Bob Jenkins Wednesday:
  * Indication & interval symptoms (1A.6, 1A.7, 1B.2, 1B.4, 1B.5, 1B.6, 1B.23, 1D.9, 1F.1, 1G.3, 2B.3, 2B.4): Award FULL CREDIT across ALL indication and interval history items for documenting visit reason (LABA/LAMA follow-up, COPD management, or inhaler check), symptomatic COPD / Group B as indication, mild dyspnea improvement ('tiny bit better'), and continued exertional dyspnea with stairs, groceries, household tasks, walking, or general exertion. Award FULL CREDIT across 1B.4, 1B.5, 1B.6, 1B.23, and 1D.9 without requiring exact day counts.
  * Rescue inhaler use & trend (1B.7, 1B.8, 1B.24, 1E.17, 2B.5, 2B.6, 2C.6, 3A.5, 3A.10, 3B.14, 4F.4): Award FULL CREDIT for documenting albuterol rescue use several times weekly (or 1–2 times daily, or listing PRN regimen), representing a slight reduction from baseline. Listing albuterol HFA PRN fulfills 1E.17 without requiring the explicit phrase 'rescue SABA bronchodilator'.
  * Acute care denials & past surgeries (1B.10, 1C.12): Award FULL CREDIT for denying ED visits, hospitalizations, or exacerbations, and noting appendectomy PSH without pulmonary/cardiac surgeries.
  * Inhaler technique errors & corrective instruction (1B.16, 1B.18, 3A.4, 3B.13, 3C.1, 3C.5, 3C.6, 3C.7, 4B.5, 4C.5, 4C.7): Bob believed his technique was correct but blew into the mouthpiece. Identifying this core technique error and instructing Bob to breathe in deeply and steadily rather than blow into the device fulfills ALL technique assessment, instruction, and counseling criteria (3A.4, 3B.13, 3C.1, 3C.5, 3C.6, 3C.7, 4B.5, 4C.5, 4C.7). NEVER deduct points for not repeating the words 'slide cover' or '5-10 second breath hold'.
  * Affordability confirmed & smoking cessation stability (1B.19, 1B.20, 1B.23, 1F.5, 1F.6, 3B.11, 3D.1–3D.6, 4B.12, 4D.1–4D.3): Award FULL CREDIT for confirming medication affordability ($20 copay / 'cheaper') without access barriers, and confirming former smoker status / denying cravings to restart smoking.
  * Active medications & immunization gaps (1E.14, 1E.15, 1E.17, 1E.18, 3E.1–3E.12, 4E.1–4E.6, 4F.8): Award FULL CREDIT for 4 active medications / completed medication reconciliation, listing albuterol as rescue, and identifying immunization status in Objective data (flu, COVID, pneumococcal, RSV up to date or noted). Award FULL CREDIT across Assessment and Plan without requiring duplicate recommendations or penalizing for Tdap.
  * Patient concerns, goals & timeline (1G.1, 1G.2, 1G.3): Award FULL CREDIT across 1G.1, 1G.2, and 1G.3 for addressing suboptimal improvement concern ('tiny bit better'), his desire to breathe easier and do daily activities, and realistic treatment timeline (gradual onset over days to weeks), and noting mild activity improvement.
  * Vitals & laboratory evaluation (2A.1, 2A.2, 2A.3, 2A.4, 2A.6, 2A.7, 2A.13, 2B.4, 2B.9, 2B.10, 2C.2, 2C.3, 2C.4, 2C.5, 2C.7, 2C.8, 3A.17, 3A.19): Award FULL CREDIT for recording BP 130/76 (acceptable on lisinopril), HR 78, RR 18, Weight 89 kg, BMI 28.1, SpO2 95% (normal / adequate), FEV1 1.80 L (60% predicted, GOLD Grade 2 moderate obstruction), FEV1/FVC 0.57 (<0.70 threshold), and CAT 17. Award FULL CREDIT across 2B.4 without penalizing for not repeating post-BD values inside the Assessment text, and without requiring explicit statements that routine labs (sputum, CBC, CMP, ABG) are unnecessary.
  * Non-escalation rationale & treatment stage (3A.2–3A.23, 4A.1–4A.10, 5C.2, 5C.3): Concluding that therapy should NOT be escalated today because nonadherence (taking Anoro only 3–4 days/week) and technique errors (blowing into mouthpiece) must be corrected first before assessing true medication efficacy MUST receive FULL CREDIT across ALL non-escalation, adherence, technique prioritization, Anoro continuation, and GOLD guideline criteria (3A.2 through 3A.23, 4A.1 through 4A.10, 5C.2, 5C.3). If the student documented these technique/adherence findings and selected or documented the simulation interface option or framed the visit around therapy continuation/correction, you MUST award FULL CREDIT. NEVER deduct points or trigger zero-credit for concise wording or interface option selections!
  * Identification of technique & adherence barriers (3B.2–3B.15, 3C.2–3C.10): Award FULL CREDIT across ALL barrier identification criteria (3B.2 through 3B.15, 3C.2 through 3C.10) for identifying that Bob blows into the mouthpiece instead of inhaling deeply and steadily, and that he forgets doses 3–4 days/week because he lacks a set daily routine. Award FULL CREDIT for connecting these implementation barriers to his suboptimal symptom improvement.
  * Assessment Structure & Inquiry Headers (3A.13, 3C.1, 5A.1, 5A.3, 5A.4, 5C.1, 5C.2, 5C.3): Framing the assessment as a clinical question or inquiry header (e.g., 'Is his inhaler technique the problem?', 'Why is symptom improvement suboptimal?') receives FULL CREDIT. A plan focused on technique correction, adherence strategies, and follow-up receives FULL CREDIT across all structure and mapping criteria.
  * Inhaler technique education & teach-back (4B.1–4B.13, 4C.1–4C.9): Award FULL CREDIT across ALL technique instruction and adherence optimization criteria (4B.1 through 4B.13, 4C.1 through 4C.9) for instructing Bob to breathe out fully AWAY from the inhaler, seal lips around the mouthpiece, breathe IN deeply and steadily (never blow into the device), hold breath for 3–4 seconds, using teach-back, and establishing a habit-pairing routine (placing inhaler next to coffee maker, morning coffee routine, phone reminders).
  * Comorbidities & preventive care (4E.1–4E.6): Award FULL CREDIT across 4E.1 through 4E.6 for continuing lisinopril 20 mg daily, continuing atorvastatin 40 mg daily, and addressing immunization status/gaps (influenza, COVID, PCV20, RSV).
  * Longitudinal monitoring & follow-up (4F.1–4F.8, 4G.1–4G.5): Award FULL CREDIT across ALL monitoring (4F.1 through 4F.8) and follow-up (4G.1 through 4G.5) criteria for planning follow-up in 4–8 weeks (or ~3 months) to reassess adherence, inhaler technique, CAT score, rescue albuterol use, and tolerance, with contingency instructions if symptoms worsen. Do NOT deduct points for concise plan phrasing or for not itemizing each of the 10 separate monitoring parameters.
- Bob Jenkins Thursday:
  * Visit context & clinical course (1A.7, 1A.8, 1A.9, 1B.18): Award FULL CREDIT for documenting persistent dyspnea, almost-daily rescue albuterol, and recurrent exacerbations (2 in past 3 months, 3 in past 12 months) despite daily Anoro Ellipta adherence with coffee mug routine.
  * Medical history, denials & affordability (1C.3, 1C.5, 1D.10, 1F.1, 1F.2, 1F.3, 1F.4, 1F.5, 1F.6, 1F.7): Award FULL CREDIT across 1D.10 and 1F.1 through 1F.7 for listing hypertension and hyperlipidemia in PMH or problem list, confirming medication affordability/access ($20 copay), denying adverse drug effects (no palpitations, tremor, oral irritation), denying cravings to restart smoking, and denying acute care hospitalizations or ED visits.
  * Patient goals & functional status (1G.3, 1G.4): Award FULL CREDIT for documenting patient goals to maintain independence, daily functional ability, improve quality of life, and avoid future exacerbations.
  * Spirometry, eosinophils & guideline threshold (2A.7, 2B.1, 2B.2, 2C.1, 2C.2, 2C.4, 3A.10, 3B.2, 3B.4, 3B.5, 5B.3, 5B.4, 5C.2): Award FULL CREDIT for FEV1 1.8 L (60% pred, Grade 2 moderate), FEV1/FVC 0.56–0.57 (<0.70 threshold), SpO2 94%, and CAT 15–17. Identifying blood eosinophils 310 cells/µL (exceeding the >=300 cells/µL threshold per GOLD 2026) and recurrent exacerbations as the clinical rationale for escalating to single-inhaler triple therapy (Trelegy Ellipta) receives FULL CREDIT across 3A.10, 3B.2, 3B.4, 3B.5, 5B.3, 5B.4, 5C.2.
  * Adherence & technique verification ruling out implementation failure (3A.12, 3A.13, 3C.1, 3C.7, 4A.8, 4C.1, 4C.3, 4E.7, 4G.5): Award FULL CREDIT across 3A.12, 3A.13, 3C.1, 3C.7, 4A.8, 4C.1, 4C.3, 4E.7, 4G.5 for documenting that adherence is now excellent (daily routine next to coffee mug) and inhaler technique is verified correct, confirming true medication failure on LABA/LAMA rather than implementation failure.
  * Tobacco cessation & preventive care (1E.18, 3D.1–3D.6, 3E.1–3E.8, 4D.1–4D.3, 4F.1–4F.4): Award FULL CREDIT across 3D.1 through 3D.6, 3E.1 through 3E.8, 4D.1 through 4D.3, and 4F.1 through 4F.4 for confirming patient denies cravings to restart smoking, congratulating patient on sustained 5-year smoking cessation, reinforcing lifelong abstinence, noting cessation pharmacotherapy is not indicated, and recommending pneumococcal (PCV20), RSV, and Tdap booster vaccines. Documenting vaccine gaps in the Objective section fulfills requirements without requiring duplicate recommendations.
  * Triple therapy escalation & Plan specifics (4A.1–4A.12, 4B.1–4B.5, 4C.1, 4C.3, 4E.2–4E.7, 4G.1–4G.7, 5B.4): Escalating to single-inhaler triple therapy (discontinuing Anoro Ellipta and initiating Trelegy Ellipta 100/62.5/25 mcg 1 inhalation daily, or adding ICS to LABA/LAMA), continuing albuterol HFA PRN for rescue, counseling on mouth rinsing with water and spitting out without swallowing after each use to prevent oral candidiasis/dysphonia, providing a written COPD action plan, and planning follow-up in 4–8 weeks or 1–3 months receives FULL CREDIT across ALL plan, technique, action plan, monitoring, and follow-up criteria (4A.1 through 4A.12, 4B.1 through 4B.5, 4C.1, 4C.3, 4E.2 through 4E.7, 4G.1 through 4G.7, 5B.4). Do NOT deduct points for concise plan phrasing or for not repeating specific product brand names multiple times.
  * Longitudinal monitoring & follow-up (4G.1–4G.7): Award FULL CREDIT across ALL 4G.1 through 4G.7 criteria for scheduling follow-up in 4–8 weeks (or 1–3 months) to reassess CAT score, exacerbation frequency, rescue albuterol use, adherence, inhaler technique, oral adverse effects (candidiasis/thrush), and blood pressure/lipids. NEVER deduct points for concise phrasing or omitting individual bullet points.
- Maria Thompson Tuesday:
  * Allergy status: Maria has a documented allergy to sulfonamide antibiotics causing moderate rash. Award FULL CREDIT for documenting sulfonamide antibiotic allergy (rash). NEVER penalize for omitting 'NKDA', and do not require students to state no known drug allergies.
  * Encounter context & framing (1A.4, 1A.5, 1A.7, 1A.8): Award FULL CREDIT for framing visit as ACO evaluation, collaborative practice management, outpatient clinical pharmacy consult, or persistent symptoms despite tiotropium; do not penalize for omitting PCP referral mention.
  * Subjective symptoms & functional limitation (1B.1–1B.10, 1D.9, 1D.10, 1F.5, 3B.3, 3B.5, 3C.5): Award FULL CREDIT across ALL symptom and functional limitation items if the student documents chronic dyspnea, daily shortness of breath, respiratory symptoms, or exacerbations (2 in past year treated with prednisone). NEVER penalize or deduct points for omitting individual symptom checklist items (e.g. omitting wheezing, cough, nocturnal awakenings, climbing stairs, walking uphill, prolonged activity, or lack of exercise / sedentary lifestyle). Documenting chronic shortness of breath or exacerbation history satisfies ALL these criteria fully.
  * Acute care denials & goals (1B.22, 1F.2, 1G.2, 1G.4, 3B.11): Denying recent hospitalizations or stating exacerbations were managed without hospitalization fulfills acute care history. Award FULL CREDIT across 1B.22, 1F.2, 1G.2, 1G.4, 3B.11 for denying hospitalizations and documenting patient goals to prevent future exacerbations and desire for optimized therapy; NEVER deduct points for not writing a separate explicit ED visit denial.
  * Allergic rhinitis comorbidity (1B.16, 1B.17, 1F.3, 1F.4, 3A.4, 3F.2–3F.7, 4B.3–4B.5): Award FULL CREDIT across ALL allergic rhinitis history, ROS, assessment, and plan items for listing allergic rhinitis in PMH, continuing fluticasone nasal spray and cetirizine, or addressing nasal spray adherence/re-education. NEVER deduct points for omitting specific nasal symptom words (congestion, sneezing), seasonal worsening patterns, allergen avoidance, or the theoretical 'one airway' phrase.
  * Objective spirometry, biomarkers & thresholds (2B.10, 2C.1, 2C.3, 2C.4, 2C.5, 2C.6, 3A.6–3A.9, 3C.2, 3C.3, 3C.6, 3C.9, 3E.1–3E.8): Award FULL CREDIT for FEV1 1.55 L (58% pred, Grade 2 moderate), FEV1/FVC 0.55 (<0.70 threshold confirming persistent airflow obstruction per GOLD), blood eosinophils 420 cells/µL (elevated Type 2 inflammation per GINA 2025), ACT 15 (poorly controlled, <20 threshold), and CAT 16–19 (high symptom burden, >=10 threshold; describing CAT 19 as 'high', 'significant', or 'severe' symptom burden MUST receive FULL CREDIT). Documenting these values in the Objective section fulfills ALL requirements; NEVER deduct points for unmeasured tests (FeNO, serum IgE, sputum eosinophils, blood glucose, electrolytes) or for not repeating spirometry numbers, 30 pack-years, or GOLD Grade 2 / Type 2 labels inside the Assessment narrative text.
  * Assessment Structure, Question Format & ACO phenotype (3A.1, 3A.3–3A.12, 3A.15, 3B.1, 3B.3–3B.10, 3C.1–3C.9, 3D.1–3D.8, 3E.1–3E.8, 5A.3, 5C.2): Maria has Asthma-COPD Overlap (childhood asthma + COPD diagnosed 8 years ago, 30 pack-years, reversible component +13% / +220 mL, eosinophils 420 cells/µL, CAT 16–19, post-BD ratio 0.55). Award FULL CREDIT for identifying ACO and recognizing that current tiotropium monotherapy lacks an ICS, representing dangerous undertreatment. Clinical reasoning, guideline rationale, pathophysiology, or biomarker links posed as clinical inquiry, questions, or question headers (e.g., 'Why is ICS mandatory in ACO?', 'Is tiotropium alone adequate?', 'Does eosinophilia 420 cells/µL support Type 2 inflammation?') MUST receive FULL CREDIT. Identifying ACO and escalating to Trelegy Ellipta fulfills ALL exacerbation prediction, treatable trait, ICS initiation, and guideline rationale criteria (3A.12, 3B.6, 3B.8, 3D.1–3D.8, 3E.1–3E.8, 5A.3); students are NEVER required to create separate numbered headings for exacerbations, eosinophils, or vaccines.
  * OCS minimization & skeletal protection (3G.3, 3G.4, 4E.2): Replacing tiotropium with Trelegy Ellipta to reduce exacerbations inherently minimizes systemic corticosteroid exposure and protects bone health in a patient with osteopenia. Award FULL CREDIT across 3G.3, 3G.4, and 4E.2.
  * Preventive care gaps (3H.1–3H.7, 4F.1–4F.4): Documenting immunization status and flagging RSV/Tdap gaps in the Objective section fulfills preventive care requirements. Award FULL CREDIT across 3H.1–3H.7 and 4F.1–4F.4 without requiring students to create a separate Assessment heading or duplicate recommendations in Plan.
  * Plan specifics, counseling, monitoring & follow-up (4A.2, 4A.3, 4A.6, 4A.7, 4A.10–4A.15, 4C.1–4C.4, 4D.1–4D.9, 4G.1–4G.9, 5A.4, 5B.4, 5C.2): Award FULL CREDIT for replacing tiotropium with once-daily single-inhaler triple therapy (Trelegy Ellipta 100/62.5/25 mcg 1 inh daily, which contains LAMA umeclidinium) OR adding Symbicort to Spiriva, and continuing albuterol PRN. Award FULL CREDIT across ALL plan, counseling, action plan, monitoring (ACT, CAT, rescue, exacerbations, adherence, technique), and follow-up (4–8 weeks or 1–3 months) criteria without requiring repeating albuterol sigs in the plan, itemizing 10 separate monitoring parameters, requiring MART principles, or requiring separate subsection headers.
- Maria Thompson Wednesday:
  * Allergy documentation (1E.28): Award FULL CREDIT for documenting sulfonamide antibiotic allergy (rash); NEVER deduct points for omitting 'NKDA'.
  * Diagnosis context & assessment framing (1A.6, 3A.1, 5A.2): Award FULL CREDIT across 1A.6, 3A.1, 5A.2 whether the visit context and assessment are framed as Biologic Candidacy, Biologic Escalation, Severe Refractory Asthma/COPD, Treatment Failure, or Asthma-COPD Overlap (ACO). Clinical reasoning posed as questions or clinical inquiry headers (e.g., 'Biologic Candidacy?', 'Is mepolizumab indicated?') MUST receive FULL CREDIT across 3A.1–3A.32 and 5A.2–5A.4.
  * Interval history, symptoms, flares & goals (1B.1–1B.5, 1B.7–1B.10, 1B.13, 1B.14, 1B.17–1B.24, 1D.3–1D.5, 1F.1–1F.8, 1G.1–1G.6, 3B.1–3B.20): Award FULL CREDIT across ALL interval history, symptom, exacerbation, denial, adherence, and psychosocial items for documenting persistent symptoms or recurrent exacerbations despite confirmed daily adherence and verified technique on Trelegy Ellipta. Documenting patient frustration with flares, prior prednisone treatment, or denying hospitalizations fulfills all history, flare, denial, and goal criteria. NEVER penalize or deduct points for omitting day-to-day symptom tracking, unquantified antibiotic use, or specific prednisone side effect words (insomnia, jitteriness).
  * Medical history & medication reconciliation (1C.1–1C.5, 1C.10, 1E.3, 1E.5, 1E.21, 1E.23, 1E.26, 1E.27, 4A.4–4A.7, 4A.28, 4A.29): Award FULL CREDIT for listing or confirming asthma, COPD, and allergic rhinitis in PMH, confirming no major surgical history, and reconciling active medications (Trelegy, albuterol PRN, cetirizine, lisinopril, calcium/vitamin D; >=5 meds reconciled) with $20 copay / affordability. Trelegy Ellipta sig documented as 'daily' or '1 inh daily' receives FULL CREDIT without duplicate LAMA therapy; do not require restating full sigs multiple times in both reconciliation and plan.
  * Objective vitals, spirometry & biomarkers (2A.2, 2A.3, 2A.10, 2A.11, 2A.13, 2A.14, 2B.3, 2B.4, 2B.6, 2B.10, 2B.13, 2B.15–2B.22, 2C.2–2C.8, 2C.10–2C.24, 5B.3): Award FULL CREDIT for vitals (HR 80, RR 18, Temp 98.6°F, SpO2 95% on room air interpreted as adequate / 93–95% target), spirometry (FEV1 1.52 L / 61% pred, GOLD Grade 2 moderate, ratio 0.56 <0.70 threshold), ACT 17 (<=19), CAT 15 (>=10), and CBC blood eosinophils 520 cells/µL (rising from 420 cells/µL, >=300 threshold). NEVER penalize for unmeasured biomarkers (FeNO, serum IgE, sputum eosinophils), blood glucose, metabolic monitoring, prior PFT comparisons, or not repeating raw numbers/thresholds inside the Assessment narrative text.
  * Severe ACO, Biologic Candidacy & MATINEE Trial Evidence (3A.1–3A.32, 3B.1–3B.20, 3C.1–3C.20, 4A.1, 4A.2, 4A.8–4A.26, 4A.30–4A.32, 5C.1–5C.3): Award FULL CREDIT across ALL biologic candidacy, trial evidence, GINA Step 5, and escalation criteria for concluding that severe eosinophilic Asthma-COPD Overlap with frequent exacerbations and eosinophils 520 cells/µL despite verified adherence to triple inhaled therapy qualifies for GINA Step 5 add-on biologic therapy, and recommending referral for or initiation of anti-IL-5 biologic therapy (specifically naming mepolizumab / Nucala 100 mg SQ once every 4 weeks) with citation of the MATINEE trial. NEVER penalize or deduct points for:
    - Not naming alternative biologics (omalizumab, benralizumab, dupilumab, tezepelumab). Recommending mepolizumab based on the MATINEE trial is the gold-standard recommendation.
    - Not repeating brand name Nucala or reciting mepolizumab dose/route/frequency (100 mg SQ q4w) multiple times.
    - Not discussing age criteria, insurance prior authorization, or MATINEE trial COPD vs ACO subgroup analyses.
    - Not structuring a rigid 7-numbered problem list. A focused assessment on severe refractory ACO and biologic candidacy fulfills all clinical reasoning requirements.
  * OCS minimization & skeletal protection (1G.1, 1G.4, 1G.5, 1G.6, 3D.1–3D.16, 3F.3, 3F.4, 3F.8, 3F.10–3F.12, 4B.1, 4B.2, 4B.6–4B.12, 4D.2, 4D.4, 4D.6): Award FULL CREDIT for recognizing patient's goal to eliminate prednisone side effects and reduce cumulative OCS exposure to protect bone mineral density. Award FULL CREDIT for linking mepolizumab's OCS-sparing benefit to skeletal preservation, continuing calcium + vitamin D, and recommending DEXA bone density monitoring.
  * Allergic rhinitis comorbidity (1B.16, 1F.3, 3E.1–3E.8, 4C.3–4C.8): Award FULL CREDIT for identifying symptomatic allergic rhinitis after stopping spray, and restarting daily fluticasone propionate nasal spray (50 mcg 1-2 sprays daily) alongside cetirizine.
  * Preventive care & vaccines (3G.1–3G.12, 4E.1–4E.8): Award FULL CREDIT for recommending RSV vaccination and Tdap booster (overdue >10 years), confirming flu/COVID/PCV20 are up to date, and linking vaccines to exacerbation prevention.
  * Monitoring, follow-up & plan structure (4F.1–4F.18, 4G.1–4G.14, 5A.2–5A.4, 5B.1–5B.3): Award FULL CREDIT for structured monitoring of ACT, CAT, exacerbations, OCS courses, rescue use, eosinophil response, adherence, and injection safety, with follow-up scheduled in 4–12 weeks (3–4 months for formal biologic efficacy evaluation per GINA). Documenting monitoring parameters and follow-up plans within the Plan section fulfills ALL requirements without requiring separate standalone labeled subsection headers ('### Monitoring' or '### Follow-Up').
- Maria Thompson Thursday:
  * Allergy documentation (1E.9, 1E.12): Award FULL CREDIT for documenting sulfonamide antibiotic allergy (rash); NEVER deduct points for omitting 'NKDA'.
  * Visit context, persistent symptoms & denials (1A.5, 1B.1–1B.6, 1C.1, 1C.2, 1C.12, 1D.8, 1D.9, 1G.1): Maria presents with persistent dyspnea, wheezing, nighttime awakenings, and 2 exacerbations in past 12 months (one requiring hospitalization). Award FULL CREDIT for accurately reporting Maria's ongoing symptoms, exertional limitation, frequent rescue inhaler use, childhood-onset asthma, COPD (8 years), and denying recreational drug use. NEVER penalize for not documenting false 'reduced symptoms' or false 'single mild flare'.
  * Allergic rhinitis comorbidity (1F.1, 1F.2, 1G.4, 3B.4, 3B.6, 3B.9–3B.11, 4B.4–4B.6): Award FULL CREDIT across ALL allergic rhinitis items for recognizing that allergic rhinitis is active/worsened after stopping fluticasone spray, noting the link between upper airway symptoms and breathing tightness, restarting fluticasone propionate nasal spray (50 mcg 1-2 sprays daily), and reviewing allergen avoidance.
  * Eosinophilic inflammation & treatable traits (2B.4, 2B.7, 2C.2–2C.6, 3A.3, 3A.4, 3A.6, 3A.7, 3C.1–3C.6): Award FULL CREDIT for interpreting FEV1 1.45 L (58% pred, Grade 2 moderate), ratio 0.57 (<0.70 threshold), SpO2 96%, blood eosinophils 380 cells/µL (elevated Type 2 inflammation, >=300 threshold), ACT 14 (poorly controlled), and CAT 15–18 (high symptom burden). Documenting these in Objective data satisfies all criteria without requiring verbatim repetition in Assessment.
  * Regimen, Biologic escalation & Problem Structure (1E.3, 1E.4b, 3A.1, 3A.13, 3C.8, 4A.4–4A.8, 4D.1, 5A.3, 5A.4, 5C.2, 5C.3): Award FULL CREDIT for maintaining baseline triple inhaled therapy (Trelegy Ellipta or Symbicort + Spiriva), continuing albuterol PRN, and escalating to or referring for add-on biologic therapy (anti-IL-5: mepolizumab / Nucala 100 mg SQ q4 weeks) for persistent uncontrolled disease with elevated eosinophils (380–520 cells/µL). Award FULL CREDIT whether the assessment heading is named 'Asthma-COPD Overlap', 'Treatment Failure', 'Treatment Failure in Severe ACO', or 'Biologic Escalation'.
  * Exacerbations, bone health & vaccines (3D.4, 3D.9, 3E.2, 3E.4–3E.6, 3F.1–3F.6, 4E.1–4E.4): Award FULL CREDIT for documenting exacerbation history (2 in past 12 months, 1 hospitalization), linking OCS avoidance to skeletal protection, continuing calcium + vitamin D, and recommending RSV and Tdap booster vaccines.
  * Monitoring, follow-up & formatting (4C.1–4C.10, 4F.1–4F.6, 5A.3, 5A.4, 5B.3, 5B.4, 5C.2): Award FULL CREDIT for monitoring ACT, CAT, rescue use, awakenings, adherence, and technique, with follow-up in 4–8 weeks or 1–3 months, structured problem-oriented plan, and GINA/GOLD citations. Dedicated labeled subsection headers ('### Monitoring', '### Follow-Up', '### Preventive Care') are NOT strictly required when items are documented within the Plan.



Respond ONLY with a JSON object in this exact format:
{
  "itemized_deductions": [
    {
      "id": "<Discrete Input ID, e.g. '4B.1'>",
      "awarded_points": <number>,
      "max_points": <number>,
      "reason": "<Brief 1-sentence explanation of why they lost points based on the rubric rules>"
    }
  ],
  "strengths": "<paragraph of what student did well>",
  "improvement_guidance": "<specific, actionable improvement suggestions>",
  "unsafe_flags": [{"recommendation": "<what student wrote>", "severity": "minor|moderate|major", "explanation": "<why unsafe>"}]
}`
}

export function buildJournalGradingPrompt({ summaryResponses, studentResponses, articleInterpretation, modelSummary, patientCases, weekTitle }) {
  return `You are the VACS journal club grader. Grade the student's evidence interpretation and patient-specific application using the active week's journal club source, expected interpretation, patient cases, and rubric.

WEEK: ${weekTitle}
EXPECTED ARTICLE INTERPRETATION (Questions): ${JSON.stringify(articleInterpretation)}
MODEL SUMMARY (Presentation): ${JSON.stringify(modelSummary)}
PATIENT CASES FROM THIS WEEK: ${JSON.stringify(patientCases)}

STUDENT RESPONSES (Questions):
${JSON.stringify(studentResponses)}

STUDENT SUMMARY (Presentation):
${JSON.stringify(summaryResponses)}

SCORING RUBRIC (4-point scale: Exemplary, Proficient, Developing, Inadequate):
- Accuracy: facts and numbers correct.
- Critical reasoning: appraises rather than restates; weighs validity and limitations.
- Clinical application: translates evidence to practice with sound pharmacist judgment.
- Communication: organized, concise, presentation-ready.

RULES:
1. Grade the student's work strictly against the expected interpretation and model summary provided. Do not invent facts or grade against outside knowledge.
2. Empty or off-topic submissions should be handled gracefully (e.g., scored as Inadequate or Developing, not Proficient).
3. Provide conceptual feedback without copy-pasting the answer key or model summary.

Respond ONLY with a JSON object in this exact format:
{
  "total_score": <0-100 overall score based on the rubric levels>,
  "accuracy_level": "Exemplary" | "Proficient" | "Developing" | "Inadequate",
  "critical_reasoning_level": "Exemplary" | "Proficient" | "Developing" | "Inadequate",
  "clinical_application_level": "Exemplary" | "Proficient" | "Developing" | "Inadequate",
  "communication_level": "Exemplary" | "Proficient" | "Developing" | "Inadequate",
  "strengths": "<paragraph of what student did well>",
  "gaps": "<missed key concepts, conceptual gaps>",
  "improvement_guidance": "<how to improve>"
}`
}

export function buildWeeklySummaryPrompt({ studentName, weekNumber, weekTitle, diseaseStates, quizFirstScore, quizFinalScore, quizAttempts, soapScores, journalScore, hiddenInfoStats }) {
  return `You are the VACS Weekly Performance Summary Generator. Create a comprehensive, educational, and encouraging weekly summary for this pharmacy student.

STUDENT: ${studentName}
WEEK: ${weekNumber} - ${weekTitle}
DISEASE STATES: ${diseaseStates?.join(', ')}

PERFORMANCE DATA:
- Monday quiz first-attempt score: ${quizFirstScore}%
- Monday quiz final passing score: ${quizFinalScore}%
- Number of Monday quiz attempts: ${quizAttempts}
- SOAP note scores: ${JSON.stringify(soapScores)}
- Friday journal club score: ${journalScore}%
- Hidden information: ${JSON.stringify(hiddenInfoStats)}

Generate a comprehensive weekly summary following this structure. Respond ONLY with a JSON object:
{
  "key_strengths": "<2-3 specific strengths demonstrated this week>",
  "clinical_reasoning_gaps": "<specific gaps in clinical reasoning observed>",
  "missed_monitoring_items": "<monitoring items commonly missed>",
  "missed_counseling_points": "<counseling points missed>",
  "missed_hidden_info": "<hidden information opportunities missed>",
  "guideline_review_topics": "<guideline areas to review based on performance>",
  "readiness_statement": "<brief assessment of readiness for next week>",
  "recommendations": "<3-5 specific, actionable recommendations for improvement>",
  "overall_weekly_score": <calculated 0-100 weighted average>,
  "summary_narrative": "<3-4 sentence overall narrative summary>"
}`
}

export function buildCumulativeSummaryPrompt({ studentName, weeklySummaries }) {
  return `You are the VACS Final Cumulative Performance Summary Generator. Synthesize a student's complete 5-week performance into a comprehensive final summary.

STUDENT: ${studentName}
ALL WEEKLY SUMMARIES AND SCORES: ${JSON.stringify(weeklySummaries)}

Generate a final cumulative summary. Respond ONLY with a JSON object:
{
  "overall_performance": "<overall 5-week performance statement>",
  "weekly_trend": "<narrative of how performance trended across 5 weeks>",
  "strongest_areas": "<disease states or skill areas where student excelled>",
  "weakest_areas": "<disease states or skill areas needing most improvement>",
  "reasoning_gaps": "<most common clinical reasoning gaps across all weeks>",
  "monitoring_gaps": "<most common monitoring gaps>",
  "counseling_gaps": "<most common counseling gaps>",
  "interview_hidden_info_trend": "<trend in patient interview and hidden info discovery>",
  "improvement_statement": "<statement about growth and improvement over 5 weeks>",
  "readiness_assessment": "<assessment of readiness for ambulatory care pharmacy practice>",
  "final_recommendations": "<5 specific, prioritized recommendations for continued growth>"
}`
}

export function buildCapstoneGradingPrompt({ manuscript, modelAnswer, granularRubric, rubricSections }) {
  return `You are the VACS Capstone grader. Grade the student's Grand Rounds Capstone manuscript using ONLY the provided model answer document, the granular 100-point rubric, and the section structure.

═══ GRANULAR RUBRIC (280 discrete inputs, 100.0 total points) ═══
${granularRubric}

═══ MODEL ANSWER / GRADING KEY ═══
${modelAnswer}

═══ STUDENT MANUSCRIPT ═══
${manuscript}

═══ SECTION STRUCTURE ═══
${JSON.stringify(rubricSections)}

═══ GRADING INSTRUCTIONS ═══
STEP 1 — INTERNAL SCORING (do NOT include in output):
For each of the 280 discrete inputs in the granular rubric, assign FULL, HALF, or ZERO credit based on the scoring rules:
- FULL: Input present, accurate, demonstrates understanding (not just keyword mention)
- HALF: Partially present — directionally correct but imprecise, or present without clinical context
- ZERO: Absent, or a factually incorrect statement is made about that input
Sum all input scores within each subsection, section, and to a grand total out of 100.0.

STEP 2 — MAP NUMERIC SCORE TO QUALITATIVE LEVELS:
Use this grading scale for the overall and per-section levels:
- 90.0–100.0 → "Exemplary"
- 80.0–89.9 → "Proficient"
- 70.0–79.9 → "Developing"
- Below 70.0 → "Inadequate"

For each of the four domains (Accuracy, Critical Reasoning, Clinical Application, Communication):
- Accuracy: proportion of discrete factual inputs scored FULL vs HALF/ZERO
- Critical Reasoning: quality of Section 3C (Critical Appraisal) and synthesis depth across all sections
- Clinical Application: quality of Sections 5, 6, and 7 (clinical implementation, formulary, counseling)
- Communication: quality of Section 8 (organization, citations, professional tone)

STEP 3 — GENERATE OUTPUT:
1. Grade strictly against the model answer and granular rubric. Do not invent facts or grade against outside knowledge.
2. For each required section, determine if the student addressed the nested subsections.
3. Provide targeted feedback for each section and general feedback overall.
4. Feedback must NEVER reproduce or paste answer-key or model-summary text verbatim.
5. If a submission is far too brief or misses most subsections, score as Inadequate or Developing.

Respond ONLY with a JSON object in this exact format:
{
  "numeric_score": <0.0-100.0>,
  "letter_grade": "A" | "B" | "C" | "D" | "F",
  "overall_accuracy_level": "Exemplary" | "Proficient" | "Developing" | "Inadequate",
  "overall_critical_reasoning_level": "Exemplary" | "Proficient" | "Developing" | "Inadequate",
  "overall_clinical_application_level": "Exemplary" | "Proficient" | "Developing" | "Inadequate",
  "overall_communication_level": "Exemplary" | "Proficient" | "Developing" | "Inadequate",
  "sections": [
    {
      "sectionId": "<number as string>",
      "title": "<section title>",
      "numeric_score": <subsection total>,
      "max_score": <subsection max>,
      "accuracy_level": "Exemplary" | "Proficient" | "Developing" | "Inadequate",
      "critical_reasoning_level": "Exemplary" | "Proficient" | "Developing" | "Inadequate",
      "subsections": [
        {
          "title": "<subsection title>",
          "addressed": true | false
        }
      ],
      "feedback": "<1-2 sentences of specific feedback for this section>"
    }
  ],
  "general_feedback": {
    "strengths": "<paragraph of what the student did well>",
    "weaknesses": "<paragraph of gaps or missed concepts>",
    "improvement_guidance": "<how to improve>"
  }
}`
}
