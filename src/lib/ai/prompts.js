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
  * Symptoms & unconfirmed/negative findings (1B.2, 1B.4, 1B.5, 1B.9, 1B.10, 1B.11, 1B.12, 1F.1, 1F.2): Award FULL CREDIT for documenting Sarah's reported symptoms (cough, shortness of breath, activity limitation, nighttime awakenings 2–3 nights/week, albuterol 1–2x daily on 5–6 days/week, and recent flare 6 weeks ago). Do NOT penalize for omitting unconfirmed symptoms (e.g., intermittent wheezing, chest tightness) or unconfirmed activities (hiking, keeping up with children). Documenting seasonal allergies, allergy triggers, or loratadine PRN (1B.5) satisfies trigger documentation. Documenting the urgent care visit and 5-day prednisone burst 6 weeks ago satisfies acute care history; do NOT penalize for omitting explicit negative denials of ED visits or hospitalizations.
  * Albuterol frequency (1B.6) & awakenings (1B.8): Award FULL CREDIT for reporting albuterol use 1–2 times daily on 5–6 days/week (~7–10 times/week) or 4–5 times/week, and nocturnal awakenings 2–3 nights/week (or 1–3 nights/week).
  * Exacerbation & steroid history (1B.13, 1F.3, 3B.5): Sarah had a viral-triggered asthma exacerbation 6 weeks ago treated with urgent care and a 5-day course of prednisone. Award FULL CREDIT for accurately documenting this prednisone burst; do NOT require a blanket denial of recent oral corticosteroids. Award FULL CREDIT for denying hospitalizations or ED visits.
  * Diagnosis onset (1C.2): Award FULL CREDIT for documenting asthma onset at age 8 (childhood onset) or lifelong.
  * Controller history & SABA monotherapy gap (1B.16, 1E.10, 1G.4, 3A.12, 3A.13, 3A.17, 3A.18, 3B.1, 3B.2, 3B.4, 3B.6–3B.10): Sarah's sole prescribed maintenance medication was albuterol PRN; budesonide was only used intermittently PRN with colds without a daily controller prescription. Award FULL CREDIT for identifying that Sarah is on SABA monotherapy / albuterol PRN, lacking a daily ICS-containing controller (treatment gap), and needs initiation of / daily adherence to an ICS controller. Distinguishing undertreatment (absence of prescribed controller) from treatment failure, recognizing SABA-only reliance is guideline-discordant per GINA, and framing controller initiation as first-line therapy receives FULL CREDIT. Do NOT require academic dissertations on airway remodeling or exact wording of 'undertreatment vs treatment failure'.
  * Steroid beliefs & knowledge deficit (1C.10, 1C.11, 1E.18, 1G.1, 1G.7, 1G.8, 3B.3, 3D.1, 3D.2–3D.9, 4C.1–4C.7): Award FULL CREDIT for recognizing that Sarah misunderstood the daily preventive role of steroids (believing steroids are only for emergencies/colds) rather than having a specific safety fear, and addressing asthma education needs: airway inflammation, daily controller fire prevention vs rescue fire extinguisher, correct inhaler technique demonstration, written action plan, trigger management, and treatment goals.
  * Social, functional & family context (1D.2, 1D.6–1D.10, 1G.5, 1G.8, 3D.4): Award FULL CREDIT for documenting occupation as 'Teacher', non-smoker, living with husband and two kids, and functional/exertional limitation (difficulty with exercise, avoiding hiking). Award FULL CREDIT for documenting patient goals of improved exercise tolerance, returning to activities/hiking, keeping up with children, improving symptom control, or reducing rescue inhaler reliance. Do not penalize for omitting 'elementary school', recreational drug denial, or specific environmental trigger links.
  * Allergic rhinitis comorbidity (1B.5, 1B.14, 1B.15, 1C.3, 1E.16, 1E.19, 1F.5, 3C.1–3C.12, 4B.1–4B.8): Award FULL CREDIT if the student documents allergic rhinitis (or seasonal allergies / loratadine use) under PMH, problem list, or subjective history, notes cetirizine 10 mg and fluticasone nasal spray, documents that nasal spray has been used inconsistently/intermittently (or notes general controller/inhaler nonadherence), links upper and lower airway inflammation/control (one airway concept), and plans continuation of cetirizine and fluticasone with daily adherence and administration technique education. Do NOT penalize if specific symptoms (sneezing, congestion, postnasal drip) are summarized under allergic rhinitis or seasonal allergies, and do NOT require a dedicated assessment problem header.
  * Objective vitals & spirometric interpretation (2A.2, 2A.4, 2A.9, 2B.2, 2B.6, 2C.2, 2C.3, 2C.4, 2C.5, 3A.10, 3A.19): Award FULL CREDIT for HR 82 bpm (or 88), Temp 98.2°F (or 98.6°F), and Overweight classification (BMI 27.5 kg/m², whether or not the range 25.0–29.9 is stated). Award FULL CREDIT for documenting FEV1 2.5 L (78% pred), FEV1/FVC 0.69 (or 0.76), reversibility +14% / +280 mL, and concluding that reversible airflow obstruction confirms or supports the asthma diagnosis per GINA criteria. Award FULL CREDIT for SpO2 98% on room air (normal) without requiring an explicit redundant phrase 'no supplemental oxygen needed'. Award FULL CREDIT for evaluating spirometry as the new diagnostic baseline and ACT 16 as the baseline for serial monitoring; do not penalize for unavailable Type 2 biomarkers (FeNO, eosinophils) or absence of prior spirometry.
  * Asthma control assessment (3A.2, 3A.3, 3A.16): Stating that asthma is uncontrolled based on albuterol frequency (1–2x daily on 5–6 days/wk), daytime symptoms, or nighttime awakenings (2–3 nights/wk) receives FULL CREDIT; do not penalize if framed as answering the assessment question.
  * Therapy initiation & GINA guidance (3A.11, 3A.14, 3A.15, 3B.5, 3B.7, 3B.8, 4A.1–4A.14, 5C.2): Award FULL CREDIT for initiating Track 1 SMART/MART therapy: specifically budesonide/formoterol (Symbicort) 160/4.5 mcg (or 80/4.5 or 180 mcg) 1 puff BID maintenance + 1 puff PRN reliever (maximum 8–12 inhalations/day) OR initiating a daily ICS controller before considering future escalation (or ensuring daily adherence to newly prescribed ICS controller), discontinuing albuterol as primary monotherapy, providing written asthma action plan, reviewing inhaler technique demonstration, and counseling on daily vs PRN dosing and max daily puffs.
  * Immunization status & gaps (1E.17, 3E.1–3E.11, 4E.1–4E.4): Award FULL CREDIT for identifying immunization gaps (pneumococcal vaccine PCV20, Tdap booster overdue >10 years, and confirming annual influenza vaccine status to prevent viral triggers of exacerbations) per GINA recommendations, and recommending pharmacy administration or registry review.
  * Monitoring, follow-up & plan specifics (4D.1–4D.10, 4F.1–4F.5, 5A.3, 5B.3, 5B.4): Award FULL CREDIT for monitoring ACT score (target >=20), daytime symptoms, nighttime awakenings, reliever frequency, exacerbations, inhaler technique, adherence, rhinitis symptoms, and lung function. Award FULL CREDIT for a follow-up timeframe of 2–6 weeks or 1–3 months, structured problem format, and concrete actionable details.
- Sarah Thompson Wednesday:
  * Symbicort dosing reference (1E.2): In the US, Symbicort MDI is labeled as 160/4.5 mcg (metered dose 180/4.5 mcg per actuation). Award FULL CREDIT for stating either 160/4.5 mcg or 180 mcg; NEVER deduct points for stating 160/4.5 mcg.
  * Treatment stage, non-escalation rationale & interface choice (1A.7, 1E.1, 3A.1, 3A.2, 3A.4–3A.12, 3A.14–3A.16, 4A.1–4A.11, 5C.2, 5C.3): Sarah is currently on SMART therapy (Symbicort 160/4.5 mcg 1 puff BID + 1 puff PRN) with ACT score 21 (well controlled / near goal) and residual exertional symptoms solely due to inhaler technique deficiency (inhaling too rapidly, not holding breath 5–10 seconds). Award FULL CREDIT for identifying that inhaler technique deficiency is the root cause of residual exertional symptoms and prioritizing technique correction via teach-back before medication escalation per GINA. If a student selected the simulation interface option ('Change to ICS-LABA or SMART') OR discussed step-up in their plan, but documented technique errors or adherence improvement, award FULL CREDIT across all non-escalation and technique items (3A.11, 3A.12, 4A.1, 4A.4, 4A.5, 5C.3). NEVER penalize students for selecting the simulation interface option!
  * Interval history, activity & goals (1B.2–1B.6, 1B.8–1B.13, 1B.15, 1B.19, 1B.20, 1F.1–1F.7, 1F.9, 1G.2, 1G.3, 1G.4, 1G.6, 1G.7): Sarah reports symptoms 1–2 days/week primarily with exercise, ACT 21 (improved from 16), zero or minimal nighttime awakenings (0–1 monthly), taking Symbicort twice daily with very few missed doses (~once), no recent exacerbations or OCS, and improved exercise tolerance. Award FULL CREDIT for documenting these reported improvements, no new acute complaints, commitment to maintaining control, receptiveness to inhaler technique education, no cost barriers, and understanding controller vs reliever purpose; do NOT penalize for omitting specific unconfirmed hobbies (hiking) or redundant negative denials of ED visits, hospitalizations, oral steroids, or illicit drugs.
  * Medical & social history (1C.5, 1C.10, 1C.11, 1D.3, 1D.6, 1D.7, 1D.9): Documenting no major surgeries, teacher occupation, non-smoker, and maternal asthma receives FULL CREDIT.
  * Medication list & OTC reconciliation (1E.4, 1E.5, 1E.16): Award FULL CREDIT for listing Symbicort 160/4.5 mcg 1 puff BID + 1 PRN (SMART) with or without separate albuterol PRN, and reconciling cetirizine 10 mg and fluticasone nasal spray.
  * Objective vitals & spirometry (2A.2, 2A.3, 2A.11, 2B.1, 2B.2, 2B.3, 2B.4, 2B.5, 2B.10, 2C.3–2C.7): Award FULL CREDIT for recording BP 120/76 (normal), HR 76 bpm (or 82–88 bpm), SpO2 99% (normal / no hypoxemia), FEV1/FVC 0.76 (or 0.69), post-BD improvement +9% to +15% / 180–290 mL, ACT 21, and interpreting objective data as an improving clinical picture. Note that spirometry and ACT score served as primary lung function assessment tools in lieu of PEF. Do not penalize for unmeasured FeNO or eosinophils, or for not stating 'no additional labs needed'.
  * Inhaler technique problem & teach-back (3B.1, 3B.4–3B.10, 4B.1–4B.7): Award FULL CREDIT for identifying Sarah's reported/observed technique errors (not exhaling fully before inhalation, rapid inhalation, no 5–10 second breath hold), classifying technique deficiency as an implementation issue (not drug failure), explaining that technique errors reduce drug lung deposition, and planning direct teach-back demonstration and checklist review.
  * Allergic rhinitis assessment & plan (3C.1, 3C.2, 3C.4, 3C.5, 3C.6, 3C.7, 3C.8, 3C.9, 3C.10, 4C.1–4C.7): Award FULL CREDIT for noting allergic rhinitis is significantly improved on daily fluticasone nasal spray and cetirizine, linking upper airway control to asthma stability, and continuing current rhinitis therapy without change alongside allergen avoidance.
  * Self-management & SMART education (3D.1, 3D.3, 3D.6–3D.12, 4D.1–4D.9): Award FULL CREDIT for educating on the dual maintenance and reliever purpose of Symbicort, praising adherence, reviewing trigger avoidance, reviewing maximum daily inhalations (8–12 puffs/day), urgent warning signs, written action plan, and encouraging continued activity.
  * Preventive care & vaccines (3E.1, 3E.6–3E.8, 4E.1, 4E.2, 4E.5): Award FULL CREDIT for recommending pneumococcal vaccination (PCV20) and Tdap booster, and confirming influenza/COVID status per GINA recommendations.
  * Monitoring & follow-up (4F.1–4F.10, 4G.1–4G.6, 5A.3, 5A.4, 5B.1, 5B.2, 5B.3, 5B.4): Award FULL CREDIT for structured monitoring of ACT score, exercise symptoms, inhaler technique reassessment, and adherence at follow-up in 4–6 weeks or 1–3 months, with standard units (BMI 27.5 kg/m²), actionable details, and GINA 2025 rationale. Award FULL CREDIT for a focused assessment addressing asthma control and technique; do NOT deduct points for omitting separate numbered problem headers for rhinitis, self-management, or vaccines.
- Sarah Thompson Thursday:
  * Visit context & sustained control (1A.6, 1A.8, 1B.1, 1B.3, 1B.5–1B.7, 1F.1, 1F.4, 1F.6): Sarah reports asthma is well controlled on Symbicort (ACT 22), using 1–2 extra puffs weekly for relief with exercise, waking ~once a month, and denying activity limitation. Award FULL CREDIT for documenting sustained longitudinal control and unrestricted active lifestyle (hiking, outdoor activities, keeping up with children); do NOT penalize for not documenting complete zero breakthrough symptoms or for not confirming specific hiking.
  * Adherence, barriers & regimen (1B.15–1B.17, 1E.16, 1F.2, 1F.3, 1G.5, 3A.20, 3A.22, 3D.9): Award FULL CREDIT for documenting excellent adherence to daily Symbicort without cost or adverse effect barriers, prior technique review confirmation, and continuing fluticasone nasal spray + cetirizine for controlled rhinitis.
  * Medical & social history (1C.2, 1C.3, 1C.8, 1D.1, 1D.2, 1D.7–1D.10): Documenting asthma and allergic rhinitis, married status / lives with husband, teacher occupation (elementary teacher context), active physical lifestyle, and living with husband and two kids receives FULL CREDIT.
  * Goals & self-management mastery (1G.1–1G.4, 3D.1–3D.8): Documenting patient goal of maintaining disease control, understanding self-management plan, and unrestricted physical activity receives FULL CREDIT.
  * Objective interpretation (2B.6, 2C.3, 2C.4): Documenting FEV1 2.9 L (85% pred), FEV1/FVC 0.77 (above 0.70 threshold), and ACT 22 interpreted as consistent with well-controlled asthma receives FULL CREDIT. Do not penalize for single-visit spirometry context.
  * Assessment Structure, Question Format & Non-escalation (3A.1, 3A.3–3A.16, 3A.18, 3A.21, 4A.5, 4A.9, 5A.3): If the student frames their assessment as a clinical question or inquiry header (e.g., 'Is her asthma well controlled?', 'Should therapy be continued without escalation?'), award FULL CREDIT for the clinical reasoning evaluating asthma control, GINA criteria (symptoms <=2x/wk, no nighttime awakenings, reliever use <=2x/wk, no activity limitation), ACT 22, FEV1/FVC 0.77, and concluding that asthma is well controlled on SMART therapy. NEVER deny or limit credit simply because the assessment was framed as a question! Explicitly concluding that therapy should NOT be stepped up receives FULL CREDIT.
  * Oral steroid history (3B.5): Award FULL CREDIT for documenting the 5-day prednisone course 6 weeks ago and denying subsequent OCS or hospitalizations; do NOT deduct points for not stating denial of oral steroids.
  * Allergic rhinitis assessment & plan (3C.1–3C.9, 4C.2–4C.6): Award FULL CREDIT for assessing allergic rhinitis as well controlled on daily fluticasone nasal spray (50 mcg 1-2 sprays daily) and cetirizine 10 mg, recognizing its role as a comorbidity, continuing therapy without changes, and reviewing allergen avoidance. Do NOT require a separate numbered problem header.
  * Self-management & education (3D.1–3D.9, 4B.1–4B.7, 4D.1–4D.8): Award FULL CREDIT for reinforcing SMART therapy principles, written asthma action plan, prompt medical evaluation if symptoms worsen, viral illness management, and trigger avoidance.
  * Preventive care & vaccines (3E.5–3E.7, 4F.1, 4F.2, 4F.4): Award FULL CREDIT for identifying pneumococcal (PCV20) and Tdap vaccination gaps, recommending administration or registry review, and noting influenza/COVID coverage.
  * Plan specifics (4A.1–4A.9): Award FULL CREDIT for continuing Symbicort 160/4.5 mcg 1 puff BID + 1 puff PRN, explicitly not escalating therapy, and praising adherence.
  * Monitoring & follow-up (4E.1–4E.10, 4G.1–4G.7): Award FULL CREDIT for monitoring ACT, symptom frequency, reliever use, adherence, technique, rhinitis control, and periodic spirometry per GINA assess-adjust-review framework, with follow-up scheduled in 4–6 weeks (for technique/action plan check) or routine 3–6 months.
  * Formatting & guideline rationale (5A.3, 5B.2–5B.4, 5C.2): Award FULL CREDIT for structured problem identification, clear numerical targets (ACT >= 20, FEV1/FVC >= 0.70), actionable details, and GINA 2025 rationale. Award FULL CREDIT for a focused assessment evaluating asthma stability without requiring separate numbered headings for rhinitis, self-management, or vaccines.
- Bob Jenkins Tuesday:
  * Encounter context & referral (1A.4, 1A.8): Award FULL CREDIT for framing visit as COPD management, evaluation, clinical pharmacy consult, or collaborative practice management; do not penalize for omitting explicit mention of PCP referral.
  * Presenting symptoms & limitations (1B.1, 1B.2, 1B.3, 1B.4, 1B.5, 1B.6, 1D.9): Award FULL CREDIT for documenting shortness of breath on exertion, worsening dyspnea, 'ongoing symptoms' / chronicity (1B.2), and functional limitation (difficulty with stairs, groceries, lifting, walking to mailbox, household projects, or general exertional activity limitation) (1B.4, 1D.9). Award FULL CREDIT for noting cough is absent, mild, or intermittent (or denying significant productive cough, or omitting cough status when dyspnea/respiratory symptoms are documented) (1B.6).
  * Albuterol rescue use & relief (1B.7, 1B.8, 1E.20, 1F.4, 3A.10): Award FULL CREDIT for documenting albuterol rescue use multiple times daily / heavy daily reliance OR listing the prescribed albuterol PRN regimen / rescue reliance (1B.7), and noting it provides only temporary/short-lived relief, noting symptoms persist despite albuterol, or documenting reliance on albuterol without maintenance controller (1B.8, 1E.20).
  * Past medical history & durations (1C.2, 1C.3, 1C.4, 1C.5, 1C.6): Award FULL CREDIT for listing COPD, HTN, and HLD in PMH or problem list, with or without explicit duration numbers (accept durations ~4y, ~12y, ~10y, several years, or unspecified / chronic).
  * Acute care denials (1C.12, 1C.13, 1F.1, 1F.2): Award FULL CREDIT for denying recent ED visits and hospitalizations, or noting managed in outpatient clinic without acute visits.
  * Cost barrier, non-initiation & provider communication (1D.10, 1E.17, 1E.18, 1F.5, 3A.15, 3B.1, 3B.5, 3B.7, 3B.8, 3B.9, 3B.10, 3C.3, 3C.4, 3C.5, 3C.6, 3C.7, 4A.13, 4B.1, 4B.2, 4B.4, 4B.5, 4B.6, 4B.7, 4B.8): Bob never obtained the prescribed combination inhaler due to its $300 cost. Award FULL CREDIT for identifying this unobtained maintenance inhaler as a cost-related non-initiation barrier (rather than medication failure), whether phrased as a narrative statement or a clinical inquiry question (e.g., 'Why was the inhaler never filled?'). Award FULL CREDIT for noting Bob failed to communicate this cost barrier to the prescriber (or documenting the $300 cost barrier prevented filling), and confirming he adheres to affordable oral medications (lisinopril, atorvastatin) without stretching. Award FULL CREDIT for assessing insurance formulary coverage, copay assistance, and encouraging proactive communication.
  * Patient beliefs, knowledge deficit & goals (1D.11, 1G.1, 1G.2, 1G.4, 1G.5, 1G.6, 3B.4, 3D.1–3D.8, 4C.1–4C.8): Award FULL CREDIT for documenting fear of disease progression / future oxygen dependence, patient belief that albuterol alone was sufficient (or albuterol monotherapy without controller), and knowledge deficits regarding daily maintenance therapy vs rescue. Award FULL CREDIT for patient goals to improve activity tolerance, symptom control, and preserve independence, and providing comprehensive COPD education (chronic nature, daily preventive use, exacerbation reduction, and warning signs requiring escalation).
  * Objective spirometry & interpretation (2B.2, 2B.9, 2C.1, 2C.2, 2C.3, 2C.4, 2C.5, 3A.3, 3A.5, 3A.6, 3A.7, 3A.8, 3A.9): Award FULL CREDIT for documenting FEV1 1.86 L (62% pred), FEV1/FVC 0.58–0.62 (<0.70 confirming persistent airflow obstruction), and SpO2 95% on room air interpreted as adequate / above 88% O2 threshold (or normal SpO2). Award FULL CREDIT for classifying as GOLD Group B (or Group E) using CAT 18 (>=10) and low exacerbation count (<=1 moderate exacerbation), and referencing CAT 18, FEV1/FVC, or FEV1% predicted in assessment or objective. Do not penalize for post-BD only presentation or unmeasured mMRC.
  * Assessment Structure, Question Format & Guideline rationale (3A.4, 3A.15, 3A.16, 3B.1, 4A.11, 4A.12, 4A.13, 5A.1, 5A.3, 5B.3, 5B.4, 5C.2): If the student frames assessment problems or clinical reasoning as inquiry questions (e.g., 'Is cost the primary barrier to treatment?', 'Should we initiate an affordable LABA/LAMA?'), award FULL CREDIT for the clinical reasoning distinguishing non-initiation due to financial barrier from medication failure. Award FULL CREDIT for citing GOLD (GOLD 2026, GOLD report, or GOLD guidelines generally), noting barriers must be addressed before escalation.
  * Tobacco cessation reinforcement (3A.17, 3E.4–3E.7, 4D.1–4D.4): Award FULL CREDIT for acknowledging 45 pack-year smoking history, congratulating Bob on sustaining smoking cessation (quit 5 years ago), reinforcing lifelong abstinence to slow lung decline, and noting cessation pharmacotherapy is not indicated.
  * Immunization status & gaps (1E.16, 3F.1, 3F.4, 3F.7, 3F.8, 4F.1, 4F.2, 4F.3): Award FULL CREDIT for identifying preventive care gaps (PCV20 pneumococcal, RSV, and Tdap booster overdue >10 years) and recommending them for a 66-year-old with chronic lung disease.
  * Initial maintenance regimen (4A.1, 4A.2, 4A.3, 4A.4, 4A.6–4A.9): Award FULL CREDIT for initiating a once-daily LABA/LAMA combination inhaler (specifically naming Anoro Ellipta: umeclidinium/vilanterol 62.5/25 mcg 1 inhalation daily, or proposing to find an affordable formulary LABA/LAMA), continuing albuterol HFA 2 puffs q4-6h PRN for rescue, and emphasizing daily consistent maintenance use.
  * Monitoring, follow-up & formatting (4E.1–4E.10, 4G.1–4G.8, 5B.3, 5B.4): Award FULL CREDIT for monitoring CAT score (target <10), dyspnea, rescue use frequency, exacerbations, adherence, technique, and affordability, with follow-up scheduled in 4–8 weeks or 1–3 months, with concrete actionable details and numeric goals.
- Bob Jenkins Wednesday:
  * Indication & interval symptoms (1A.6, 1A.7, 1B.2, 1B.4, 1B.5, 1B.6, 1D.9, 1F.1, 1G.3, 2B.3, 2B.4): Award FULL CREDIT for documenting visit reason (LABA/LAMA follow-up, COPD management, or inhaler check), symptomatic COPD / Group B as indication, mild dyspnea improvement, and continued exertional dyspnea with stairs, groceries, household tasks, or general exertion.
  * Rescue inhaler use & trend (1B.7, 1B.8, 1B.24, 1E.17, 2B.5, 2B.6, 2C.6, 3A.5, 3A.10, 3B.14, 4F.4): Award FULL CREDIT for documenting albuterol rescue use several times weekly (or 1–2 times daily, or listing PRN regimen), representing a slight reduction from baseline.
  * Acute care denials & past surgeries (1B.10, 1C.12): Award FULL CREDIT for denying ED visits, hospitalizations, or exacerbations, and noting appendectomy PSH without pulmonary/cardiac surgeries.
  * Inhaler technique errors & patient beliefs (1B.16, 1B.18, 3A.4, 3B.13, 3C.1, 3C.5, 3C.6, 3C.7, 4B.5, 4C.5, 4C.7): Award FULL CREDIT for documenting that Bob believed his technique was correct but blew into the mouthpiece (thinking it forced medicine in) and did not hold his breath. Award FULL CREDIT for instructing on complete Ellipta steps: slide cover until click, exhale fully AWAY from device, inhale deeply and steadily, and hold breath for 5–10 seconds.
  * Affordability confirmed (1B.19, 1B.20, 1F.6, 3B.11, 4B.12): Award FULL CREDIT for confirming medication affordability ($20 copay / cheaper) without difficulty obtaining prescriptions.
  * Tobacco cessation stability (1B.23, 1F.5, 3D.1–3D.6, 4D.1–4D.3): Award FULL CREDIT for documenting Bob denies desire or cravings to restart smoking, praising sustained abstinence (quit 5 years ago), and confirming cessation pharmacotherapy is not needed.
  * Active medications & immunization gaps (1E.14, 1E.15, 1E.17, 1E.18, 3E.1–3E.12, 4E.1–4E.6, 4F.8): Award FULL CREDIT for 4 active medications / completed medication reconciliation, listing albuterol as rescue SABA, and identifying immunization gaps (PCV20, RSV, and Tdap booster overdue >10 years), confirming flu/COVID are up to date, and linking vaccines to COPD exacerbation prevention.
  * Patient concerns & timeline (1G.1, 1G.2, 1G.3): Award FULL CREDIT for addressing suboptimal improvement concern, realistic treatment timeline (gradual onset over days to weeks), and noting mild activity improvement.
  * Vitals & laboratory evaluation (2A.1, 2A.2, 2A.3, 2A.4, 2A.6, 2A.7, 2A.13, 2B.9, 2B.10, 2C.2, 2C.3, 2C.4, 2C.5, 2C.7, 2C.8, 3A.17, 3A.19): Award FULL CREDIT for recording BP 130/76 (or 128/78, 132/82), HR 78 (or 76), RR 18 (or 20), Weight 89 kg (or 80 kg), BMI 28.1 (or 26.0), SpO2 95% (or 97%), and FEV1 58–62% predicted (GOLD Grade 2 moderate obstruction, post-BD). Award FULL CREDIT for noting BP is acceptable on lisinopril, zero exacerbations support Group B, and unnecessary labs (sputum, CBC, CMP, ABG) are not indicated.
  * Non-escalation rationale & treatment stage (3A.2, 3A.8, 3A.9, 3A.10, 3A.11, 3A.12, 3A.13, 3A.14, 3A.15, 3A.21, 3A.22, 3A.23, 4A.4–4A.10): Award FULL CREDIT for concluding that therapy should NOT be escalated today because nonadherence (taking Anoro only 3–4 days/week) and technique errors (blowing into mouthpiece) must be corrected first before assessing true medication efficacy. Award FULL CREDIT for continuing Anoro Ellipta 62.5/25 mcg daily and albuterol HFA PRN, and withholding triple therapy / ICS.
  * Assessment Structure, Question Format & Inquiry Headers (3A.13, 3C.1, 5A.1, 5A.3, 5A.4, 5C.1, 5C.2, 5C.3): If the student frames their assessment as a clinical question or inquiry header (e.g., 'Is his inhaler technique the problem?', 'Why is symptom improvement suboptimal?'), award FULL CREDIT for the clinical reasoning evaluating technique error, nonadherence, and concluding that technique correction and adherence routine must precede escalation. NEVER penalize or deduct points simply because the assessment was phrased as a question! A plan focused on technique correction, adherence strategies, and follow-up receives FULL CREDIT across all structure and mapping criteria.
  * Adherence optimization & education (1G.2, 3B.2, 3B.6, 3B.7, 3B.8, 3B.9, 3B.12, 3B.15, 3C.1, 3C.2, 3C.3, 3C.7–3C.10, 4B.1–4B.4, 4B.6–4B.10, 4B.13, 4C.1–4C.4, 4C.6, 4C.8, 4C.9): Award FULL CREDIT for addressing unrealistic timeline expectations, explaining daily maintenance benefits, and establishing an adherence routine (pairing inhaler with morning coffee maker, visual cues).
  * Monitoring, follow-up & SOAP structure (4A.1, 4A.2, 4A.3, 4F.1–4F.8, 4G.1–4G.5, 5A.2, 5A.3, 5A.4, 5B.3, 5C.1, 5C.2, 5C.3): Award FULL CREDIT for continuing Anoro Ellipta and albuterol PRN, monitoring dyspnea, rescue use, exacerbations, adherence, and technique, with follow-up scheduled in 4–8 weeks or ~3 months to reassess response and determine if escalation is needed once adherence is optimized. Award FULL CREDIT for structured problem list and plan mapping even if focused on technique and adherence.
- Bob Jenkins Thursday:
  * Visit context & clinical course (1A.7, 1A.8, 1A.9, 1B.18): Award FULL CREDIT for documenting persistent dyspnea, almost-daily rescue albuterol, and recurrent exacerbations (2 in past 3 months, 3 in past 12 months) despite daily Anoro Ellipta adherence with coffee mug routine.
  * Medical history & denials (1C.3, 1C.5, 1D.10, 1F.1, 1F.2, 1F.3, 1F.7): Award FULL CREDIT for listing hypertension and hyperlipidemia in PMH or problem list (or noting lisinopril and atorvastatin therapy), confirming medication affordability/access without issues ($20 copay), denying adverse drug effects, and confirming patient denies desire to restart smoking.
  * Patient goals & functional status (1G.3, 1G.4): Award FULL CREDIT for documenting patient goals to maintain independence, daily functional ability, improve quality of life, and avoid future exacerbations.
  * Spirometry, labs & eosinophil threshold (2A.7, 2B.1, 2B.2, 2C.1, 2C.2, 2C.4, 3A.10, 3B.2, 3B.4, 3B.5, 5B.3, 5C.2): Award FULL CREDIT for FEV1 1.8 L (60–61% pred, GOLD Grade 2 moderate obstruction), FEV1/FVC < 0.70 threshold (0.56–0.57), SpO2 94%, and CAT 15–17. Award FULL CREDIT for citing GOLD 2026 and identifying blood eosinophils 310 cells/µL (meeting or exceeding the >=300 cells/µL threshold) as the biomarker strongly favoring ICS escalation in patients with recurrent exacerbations. Do NOT penalize for omitting an ACT score or for question-framed assessments.
  * Adherence & technique verification (3A.13, 3C.1, 3C.7, 4A.8, 4C.1, 4C.3, 4E.7, 4G.5): Award FULL CREDIT for documenting that adherence is now excellent (daily routine next to coffee mug) and inhaler technique is verified as correct, ruling out implementation failure, and recommending continuing established coffee mug routine.
  * Tobacco cessation & preventive care (1E.18, 3D.1–3D.6, 3E.1, 3E.4, 3E.7, 3E.8, 4D.1–4D.3, 4F.1–4F.4): Award FULL CREDIT for confirming patient denies craving or desire to restart smoking, congratulating patient on continued smoking cessation (quit 5 years ago, 45 pack-years), reinforcing lifelong abstinence, and recommending PCV20, RSV, and Tdap booster vaccines.
  * Escalation to triple therapy (4A.1, 4A.4, 4A.5, 4A.6, 4A.8, 4A.11, 4A.12, 5B.4): Award FULL CREDIT for escalating to single-inhaler triple therapy: Trelegy Ellipta (fluticasone furoate/umeclidinium/vilanterol 100/62.5/25 mcg 1 inhalation daily) based on recurrent exacerbations and eosinophils >=300 cells/µL, continuing albuterol HFA 2 puffs q4-6h PRN for rescue, reviewing inhaler technique for Trelegy, and discussing expected benefits (symptom control, reduced rescue use, quality of life, fewer exacerbations).
  * Action plan & adverse effect counseling (4B.1, 4B.2, 4B.4, 4B.5, 4C.1, 4G.6): Award FULL CREDIT for providing written COPD action plan, early symptom worsening recognition, infection avoidance (vaccines, hand hygiene), and counseling on rinsing mouth after Trelegy to prevent oral candidiasis.
  * Monitoring & follow-up (4E.2, 4E.3, 4E.4, 4E.6, 4E.7, 4G.1, 4G.5, 4G.6, 4G.7): Award FULL CREDIT for monitoring dyspnea, activity tolerance, rescue use, adherence, technique/mouth rinsing, and ICS adverse effects, with follow-up scheduled in 4–8 weeks or 1–3 months.
- Maria Thompson Tuesday:
  * Allergy status: Maria has a documented allergy to sulfonamide antibiotics causing moderate rash. Award FULL CREDIT for documenting sulfonamide antibiotic allergy (rash). NEVER penalize for omitting 'NKDA', and do not require students to state no known drug allergies.
  * Encounter context & framing (1A.4, 1A.5, 1A.7, 1A.8): Award FULL CREDIT for framing visit as ACO evaluation, collaborative practice management, outpatient clinical pharmacy consult, or persistent symptoms despite tiotropium; do not penalize for omitting PCP referral mention.
  * Symptoms & activity limitation (1B.1–1B.10, 1D.9, 1D.10, 1F.5): Award FULL CREDIT for documenting chronic progressive dyspnea over years, daily shortness of breath, intermittent wheezing, chronic cough, frequent albuterol rescue use (several times daily / PRN reliance), nocturnal awakenings (2–3 nights/week), and symptom-driven exertional limitations (stairs, walking uphill, endurance, lack of structured exercise / sedentary lifestyle).
  * Allergic rhinitis & medication history (1B.16, 1B.17, 1B.18, 1B.19, 1F.3, 1F.4): Award FULL CREDIT for documenting allergic rhinitis (congestion, sneezing, postnasal drip) with seasonal worsening pattern, regular Spiriva and albuterol use, stopped/missed fluticasone nasal spray, and stating prior ICS use is unverified/unrecalled.
  * Acute care denials & goals (1B.22, 1F.2, 1G.2, 1G.4): Award FULL CREDIT for denying recent ED visits/hospitalizations (or managing in clinic without acute visits), and documenting patient goals to prevent future exacerbations and desire for optimized therapy / improved breathing.
  * Objective spirometry & biomarkers (2B.10, 2C.1, 2C.3, 2C.4, 2C.5, 2C.6): Award FULL CREDIT for FEV1 1.55 L (58% pred, Grade 2 moderate), FEV1/FVC 0.55 (<0.70 threshold confirming persistent airflow obstruction per GOLD), blood eosinophils 420 cells/µL (elevated Type 2 inflammation per GINA 2025), ACT 15 (poorly controlled, <20 threshold), and CAT 16–19 (high symptom burden, >=10 threshold). NEVER penalize or deduct points for unmeasured tests (FeNO, serum IgE, sputum eosinophils, blood glucose, electrolytes).
  * Assessment Structure, Question Format & ACO phenotype (3A.1, 3A.3–3A.12, 3A.15, 3B.1, 3B.3–3B.10, 3C.1–3C.9, 5A.3, 5C.2): Maria has Asthma-COPD Overlap (childhood asthma + COPD diagnosed 8 years ago, 30 pack-years, reversible component +13% / +220 mL, eosinophils 420 cells/µL, CAT 16–19, post-BD ratio 0.55). Award FULL CREDIT for identifying ACO and recognizing that current tiotropium monotherapy lacks an ICS, representing dangerous undertreatment. Clinical reasoning, guideline rationale, pathophysiology, or biomarker links posed as clinical inquiry, questions, or question headers (e.g., 'Why is ICS mandatory in ACO?', 'Is tiotropium alone adequate?', 'Does eosinophilia 420 cells/µL support Type 2 inflammation?') MUST receive FULL CREDIT. NEVER deny or limit credit simply because clinical reasoning is structured as questions or clinical inquiry headers!
  * Exacerbation burden & treatable trait (3D.1–3D.8, 3E.1–3E.8, 3G.3, 3G.4): Award FULL CREDIT for identifying recurrent exacerbations as the strongest predictor of future risk, framing eosinophils 420 cells/µL as a treatable trait indicating high ICS responsiveness and potential future biologic candidacy, and linking exacerbation reduction to minimizing systemic corticosteroid exposure to protect bone density. Do NOT require separate numbered headings for exacerbations or eosinophils if discussed within the ACO assessment narrative.
  * Allergic rhinitis comorbidity (3F.2–3F.7, 4B.3–4B.5): Award FULL CREDIT for noting upper airway disease coexists with and impacts lower airway control (one airway concept), restarting/re-educating on nasal spray, and allergen avoidance.
  * Preventive care gaps (3H.1–3H.7, 4F.1–4F.4): Award FULL CREDIT for identifying immunization gaps (RSV vaccine indicated for chronic lung disease, Tdap booster overdue >10 years), noting viral respiratory infections trigger exacerbations, and recommending vaccination.
  * Regimen initiation & counseling (4A.2, 4A.3, 4A.6, 4A.7, 4A.10–4A.15): Maria's initial regimen is Spiriva Respimat + albuterol PRN. Award FULL CREDIT for replacing tiotropium with once-daily single-inhaler triple therapy (Trelegy Ellipta 100/62.5/25 mcg 1 inh daily, which contains LAMA umeclidinium) OR adding Symbicort to Spiriva. Award FULL CREDIT for continuing albuterol HFA 2 puffs q4-6h PRN, counseling on ICS benefits (reduced flares, better symptom control, less rescue reliance), and demonstrating inhaler technique.
  * Action plan, monitoring & follow-up (4C.1–4C.4, 4D.1–4D.9, 4E.2, 4G.1–4G.9, 5A.3, 5B.4, 5C.2): Award FULL CREDIT for written action plan, early flare intervention, monitoring ACT, CAT, rescue use, exacerbations, adherence, and technique, with follow-up in 4–8 weeks or 1–3 months, minimizing systemic steroids. Dedicated labeled subsection headers are NOT required.
- Maria Thompson Wednesday:
  * Allergy documentation (1E.28): Award FULL CREDIT for documenting sulfonamide antibiotic allergy (rash); NEVER deduct points for omitting 'NKDA'.
  * Medication list & duplicate LAMA (1E.3, 1E.5, 1E.21, 1E.23, 1E.26, 1E.27, 4A.4–4A.7, 4A.28, 4A.29): Maria is on Trelegy Ellipta 100/62.5/25 mcg 1 inh daily and albuterol PRN. Umeclidinium in Trelegy is a LAMA; standalone tiotropium (Spiriva) is NOT prescribed and must NOT be added. Award FULL CREDIT for continuing Trelegy Ellipta without duplicate LAMA therapy, reconciling albuterol PRN, cetirizine, lisinopril, and calcium/vitamin D (>=5 meds reconciled), and confirming affordability ($20 copay / affordable). Do not require restating full sigs multiple times in both reconciliation and plan.
  * Symptom trajectory & exacerbation burden (1A.6, 1A.7, 1A.8, 1B.1–1B.5, 1B.7–1B.10, 1B.13, 1B.14, 1B.18–1B.24, 1D.4, 1D.5, 1F.1, 1F.2, 1F.4–1F.8, 3B.1–3B.20): Award FULL CREDIT for documenting persistent chest tightness, rougher breathing, and exertional limitation despite confirmed daily Trelegy adherence and verified technique. Award FULL CREDIT for documenting recurrent exacerbations treated with prednisone and antibiotics (1 flare 4 weeks ago, 3–5 in prior 12 months, 3 in past 3 months), denying ED visits and hospitalizations, and documenting patient frustration and adverse effects from prednisone (insomnia, jitteriness).
  * Medical & social history (1C.1–1C.5, 1C.10, 1D.3): Award FULL CREDIT for listing childhood-onset asthma, COPD (duration 8 years), allergic rhinitis, denying illicit drugs, and noting cholecystectomy PSH / no major pulmonary/cardiac surgeries.
  * Vitals, spirometry & biomarkers (2A.2, 2A.3, 2A.10, 2A.11, 2A.13, 2A.14, 2B.3, 2B.4, 2B.6, 2B.10, 2B.13, 2B.15–2B.22, 2C.2–2C.8, 2C.10–2C.24): Award FULL CREDIT for HR 80 bpm (normal), RR 18 breaths/min (normal), Temp 98.6°F, SpO2 95% on room air (adequate / 93–95% target), FEV1 1.52 L (61% pred, GOLD Grade 2 moderate), ratio 0.56 (<0.70 threshold), ACT 17 (partly controlled, <=19), CAT 15 (high symptom burden, >=10), and CBC blood eosinophils 520 cells/µL (rising from 420 cells/µL, >=300 threshold). NEVER penalize for unmeasured FeNO, serum IgE, sputum eosinophils, blood glucose, or electrolytes.
  * ACO severity, Biologic candidacy & Problem List Organization (3A.1–3A.32, 3B.1–3B.20, 3C.1–3C.20, 4A.1, 4A.2, 4A.8–4A.26, 4A.30–4A.32, 5A.2, 5C.1, 5C.3): Award FULL CREDIT for concluding that severe eosinophilic Asthma-COPD Overlap with frequent exacerbations and eosinophils 520 cells/µL despite verified adherence to triple inhaled therapy qualifies for GINA Step 5 add-on biologic therapy. Recommending referral for or initiation of anti-IL-5 biologic therapy (specifically naming mepolizumab / Nucala 100 mg SQ once every 4 weeks) and citing MATINEE trial evidence receives FULL CREDIT across all biologic items without requiring students to list 4 alternative biologic names (omalizumab, benralizumab, dupilumab, tezepelumab). Award FULL CREDIT for a focused assessment addressing severe refractory ACO and biologic candidacy; do NOT deduct points for not structuring exactly 7 numbered problem headings.
  * OCS minimization & skeletal protection (1G.1, 1G.4, 1G.5, 1G.6, 3D.1–3D.16, 3F.3, 3F.4, 3F.8, 3F.10–3F.12, 4B.1, 4B.2, 4B.6–4B.12, 4D.2, 4D.4, 4D.6): Award FULL CREDIT for recognizing patient's goal to eliminate prednisone side effects (insomnia, jitteriness) and reduce cumulative OCS exposure to protect bone mineral density. Award FULL CREDIT for linking mepolizumab's OCS-sparing benefit to skeletal preservation, continuing calcium + vitamin D, and recommending DEXA bone density monitoring.
  * Allergic rhinitis comorbidity (1B.16, 1F.3, 3E.1–3E.8, 4C.3–4C.8): Award FULL CREDIT for identifying symptomatic allergic rhinitis after stopping spray, and restarting daily fluticasone propionate nasal spray (50 mcg 1-2 sprays daily) alongside cetirizine.
  * Preventive care & vaccines (3G.1–3G.12, 4E.1–4E.8): Award FULL CREDIT for recommending RSV vaccination and Tdap booster (overdue >10 years), confirming flu/COVID/PCV20 are up to date, and linking vaccines to exacerbation prevention.
  * Monitoring, follow-up & plan structure (4F.1–4F.18, 4G.1–4G.14, 5A.2–5A.4, 5B.1–5B.3): Award FULL CREDIT for structured monitoring of ACT, CAT, exacerbations, OCS courses, rescue use, eosinophil response, adherence, and injection safety, with follow-up scheduled in 4–12 weeks (3–4 months for formal biologic efficacy evaluation per GINA). Documenting monitoring parameters and follow-up plans within the Plan section fulfills the requirement without requiring separate standalone labeled subsection headers ('### Monitoring' or '### Follow-Up').
- Maria Thompson Thursday:
  * Allergy documentation (1E.9, 1E.12): Award FULL CREDIT for documenting sulfonamide antibiotic allergy (rash); NEVER deduct points for omitting 'NKDA'.
  * Visit context & persistent symptoms (1A.5, 1B.1–1B.6, 1D.8, 1D.9): Maria presents with persistent dyspnea, wheezing, nighttime awakenings, and 2 exacerbations in past 12 months (one requiring hospitalization). Award FULL CREDIT for accurately reporting Maria's ongoing symptoms, exertional limitation, and frequent rescue inhaler use; do NOT deduct points for not documenting false 'reduced symptoms' or false 'single mild flare'.
  * Medical history & denials (1C.1, 1C.2, 1C.12, 1D.8): Award FULL CREDIT for childhood-onset asthma, COPD (8 years), and denying recreational drug use.
  * Regimen, Biologic escalation & Problem Structure (1E.3, 1E.4b, 3A.1, 3A.13, 3C.8, 4A.4–4A.8, 5A.3, 5C.3): Award FULL CREDIT for maintaining baseline triple inhaled therapy (Trelegy Ellipta or Symbicort + Spiriva) and escalating to or continuing add-on biologic therapy (anti-IL-5: mepolizumab / Nucala 100 mg SQ q4 weeks) for persistent uncontrolled disease with elevated eosinophils (380–520 cells/µL). Award FULL CREDIT whether the assessment heading is named 'Asthma-COPD Overlap', 'Treatment Failure', 'Treatment Failure in Severe ACO', or 'Biologic Escalation'.
  * Allergic rhinitis comorbidity (1F.1, 1F.2, 1G.4, 3B.4, 3B.6, 3B.9–3B.11, 4B.4–4B.6): Award FULL CREDIT for recognizing that allergic rhinitis is active/worsened after stopping fluticasone spray, noting the link between upper airway symptoms and breathing tightness, restarting fluticasone propionate nasal spray (50 mcg 1-2 sprays daily), and reviewing allergen avoidance.
  * Eosinophilic inflammation & treatable traits (2B.4, 2B.7, 2C.2–2C.6, 3C.1–3C.6): Award FULL CREDIT for interpreting FEV1 1.45 L (58% pred, Grade 2 moderate), ratio 0.57 (<0.70 threshold), SpO2 96%, blood eosinophils 380 cells/µL (elevated Type 2 inflammation, >=300 threshold), ACT 14 (poorly controlled), and CAT 15–18 (high symptom burden).
  * Exacerbations, bone health & vaccines (3D.4, 3D.9, 3E.2, 3E.4–3E.6, 3F.1–3F.6, 4E.1–4E.4): Award FULL CREDIT for documenting exacerbation history (2 in past 12 months, 1 hospitalization), linking OCS avoidance to skeletal protection, continuing calcium + vitamin D, and recommending RSV and Tdap booster vaccines.
  * Monitoring, follow-up & formatting (4C.1–4C.10, 4D.1, 4F.1–4F.6, 5A.3, 5A.4, 5B.3, 5B.4, 5C.2): Award FULL CREDIT for monitoring ACT, CAT, rescue use, awakenings, adherence, and technique, with follow-up in 4–8 weeks or 1–3 months, structured problem-oriented plan, and GINA/GOLD citations. Dedicated labeled subsection headers ('### Monitoring', '### Follow-Up', '### Preventive Care') are NOT strictly required when items are documented within the Plan.



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
