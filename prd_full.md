VACS
Virtual Ambulatory Care Simulator
Complete PRD + Developer Handoff Packet
Version 1.0 | Prepared for developer build kickoff
Prepared for: Patrick Kurunwune
Packet Component
Purpose
PRD
Defines the product, weekly model, fixed workflow, unlock logic, MVP scope, and expected outcomes.
Functional Specs
Defines roles, permissions, workflows, screens, admin functions, and reporting expectations.
AI Workflow Specs
Defines AI patient behavior, hidden information disclosure, grading, feedback, and summary generation.
Content Pack Specs
Defines the upload package structure used to power each weekly module without hard-coding disease-state content.
Data and QA Specs
Defines data objects, success metrics, test cases, acceptance criteria, and launch readiness requirements.
Developer Meeting Decision Log
Separates decisions already made from decisions that require discussion before build lock.
How to Use This Packet
This packet expands the supplied VACS master PRD into a developer-ready product handoff. It is designed to reduce interpretation risk by giving developers the product logic, screen requirements, AI behavior rules, content-pack schema, data requirements, QA criteria, and unresolved decision questions in one place.
The original PRD already makes several foundational decisions: VACS is a reusable 5-week ambulatory care simulation engine; each week uses a fixed workflow; disease-specific content should live in weekly clinical content packs; Monday is the only score-gated day; Tuesday through Friday continue regardless of score; patient progression is standardized for the MVP; and Week 5 produces both a weekly summary and a cumulative 5-week summary.
Section
What the developer should use it for
1. Executive Build Brief
Align on what is being built and what is not being built in MVP.
2. Core Product Requirements
Use as the product source of truth.
3. Developer Meeting Decision Log
Discuss and resolve open questions before sprint planning.
4. Roles and Permissions
Build user access rules and admin capabilities.
5. Workflow and Unlock Logic
Build the student progression engine.
6. UI / UX Requirements
Design screens and states.
7. Weekly Content Pack Specification
Build upload, validation, and content mapping logic.
8. AI Workflow Specification
Build prompts, guardrails, source control, grading, and feedback logic.
9. Grading and Feedback Specification
Implement scoring, feedback, and unsafe recommendation handling.
10. Data Model and Reporting
Build database objects, event tracking, summaries, and dashboards.
11. QA and Acceptance Criteria
Test before launch.
12. MVP Build Plan and Roadmap
Phase implementation and prevent overbuilding.
1. Executive Build Brief
1.1 Product Definition
VACS, the Virtual Ambulatory Care Simulator, is a fully autonomous ambulatory care simulation platform for pharmacy students. The product teaches guideline-based therapeutic decision-making through weekly disease-state modules, clinical quizzes, AI patient interviews, structured SOAP note documentation, automated grading, feedback, and journal club reflection.
1.2 Core Build Thesis
The platform should be built as a reusable weekly simulation engine. The weekly workflow stays fixed, while disease-state content, patient cases, grading criteria, AI patient behavior, hidden information, and journal club materials are loaded through weekly clinical content packs. The developer should avoid hard-coding Week 1, Week 2, or any disease-specific content into the product workflow.
1.3 MVP Scope
Included in MVP
Not Included in MVP
5-week simulation shell
Adaptive patient progression based on prior student performance
Weekly clinical content pack loading and structural validation
Manual preceptor grading as the primary workflow
Monday guideline review module
Live video simulation or human standardized patient scheduling
40-question Monday quiz with immediate feedback
Complex LMS integrations unless explicitly prioritized
90% Monday quiz gate to unlock Tuesday
Remediation gates for Tuesday through Friday
Tuesday through Thursday AI patient interviews
Student-to-student collaboration features
Structured SOAP note submission and automated grading
School billing, marketplace, or multi-product commercial tools unless separately scoped
Friday journal club workflow and grading
Adaptive branching or custom outcome changes by student plan
Weekly performance summaries and final 5-week cumulative summary
Preceptor manual edits to every feedback response as a required step
Basic admin content management and student progress visibility
Full enterprise analytics platform beyond defined cohort summaries
DEVELOPER MEETING DECISION: Confirm whether the MVP includes school admin dashboards at launch or whether the initial launch is student-only with internal admin access.
DEVELOPER MEETING DECISION: Confirm whether students will be enrolled by schools, invited by an admin, or allowed to self-register.
2. Core Product Requirements
2.1 Five-Week Disease-State Model
Week
Disease States
Number of Disease States
Patient Rule
Week 1
Hypertension + Type 2 Diabetes
2
Three brand-new patients
Week 2
Hyperlipidemia + Chronic Kidney Disease
2
Three brand-new patients
Week 3
Asthma + COPD
2
Three brand-new patients
Week 4
Heart Failure + Atrial Fibrillation + Anticoagulation
3
Three brand-new patients
Week 5
Depression + Anxiety + Tobacco Cessation
3
Three brand-new patients
Patients do not carry over across weeks in the MVP.
Each patient appears on Tuesday, Wednesday, and Thursday within the same week.
Wednesday and Thursday follow standardized gold-standard progression regardless of student performance on prior days.
Week 5 remains structurally identical to Weeks 1 through 4 and does not become a capstone unless explicitly added later.
2.2 Fixed Weekly Workflow
Day
Student Activity
System Logic
Completion Requirement
Monday
Read guideline review module and complete 40-question quiz.
Questions randomize each attempt. Immediate rationale shown after each submitted question.
Score 90% or higher to unlock Tuesday. Unlimited retries.
Tuesday
Complete Patient A, B, and C initial visits. Each visit includes AI patient interview, SOAP submission, and feedback.
System scores SOAP notes and generates patient-specific feedback.
Complete all three patient cases to unlock Wednesday. Score does not block progression.
Wednesday
Complete Patient A, B, and C three-month follow-up visits.
System uses standardized case progression. Prior student plan does not alter patient facts.
Complete all three patient cases to unlock Thursday. Score does not block progression.
Thursday
Complete Patient A, B, and C second follow-up / six-month follow-up visits.
System uses standardized case progression and generates SOAP grading/feedback.
Complete all three patient cases to unlock Friday. Score does not block progression.
Friday
Complete structured journal club assignment.
System grades journal club response and creates weekly summary.
Week complete after Friday feedback and weekly summary are generated.
2.3 Core Functional Requirements
Requirement ID
Requirement
Priority
FR-001
The platform must support a 5-week module structure.
MVP
FR-002
The workflow engine must be reusable and not hard-code disease-state content.
MVP
FR-003
The platform must load each week from a structurally complete weekly clinical content pack.
MVP
FR-004
The system must validate required files before a week can be published or made available.
MVP
FR-005
Monday must include a written guideline review and 40-question quiz.
MVP
FR-006
Monday quiz question order must randomize on each attempt.
MVP
FR-007
Students must receive immediate answer feedback and rationales after each quiz question.
MVP
FR-008
Tuesday unlocks only after a Monday quiz score of 90% or higher.
MVP
FR-009
Tuesday through Thursday must support AI patient interviews, SOAP note submission, grading, and feedback.
MVP
FR-010
Friday must support structured journal club submission, grading, and feedback.
MVP
FR-011
The system must generate a weekly performance summary after Friday completion.
MVP
FR-012
The system must generate a final 5-week cumulative summary after Week 5 completion.
MVP
FR-013
The system must track hidden information discovered, missed, and triggered by student questions.
MVP
FR-014
The system must store interview transcripts, SOAP submissions, scores, feedback, and summaries.
MVP
FR-015
The system should support cohort-level reporting for school or admin users.
MVP or V1.1 - decision required
3. Developer Meeting Decision Log
The following questions should be discussed with the developer before build lock. These are the items most likely to affect database architecture, authentication, AI cost, user experience, admin tools, or launch timeline.
Decision Area
Question to Resolve
Recommended MVP Decision
Why It Matters
User enrollment
Will students self-register, be invited by school/admin, or be bulk-uploaded?
Use invite-based enrollment for MVP; add bulk upload if school pilots require it.
Determines authentication, tenant model, and onboarding workflow.
School tenancy
Will the product support multiple schools/cohorts at launch?
Build basic multi-tenant structure now even if only one cohort launches.
Retrofitting tenancy later is expensive.
User roles
Which roles are active in MVP?
Student, Internal Admin, School Admin optional behind feature flag.
Controls permissions and dashboard scope.
Content management
Will weekly content packs be uploaded through an admin portal or seeded manually by the developer?
Build a simple internal admin upload/validation tool if budget allows; otherwise seed content manually for pilot.
Admin upload adds time but prevents dependency on developer for every content update.
Content format
Will content packs use DOCX/PDF/XLSX uploads, structured JSON, or both?
Use structured JSON/Markdown for app ingestion; allow source PDFs/DOCX as reference files.
AI and app logic need structured content, not only documents.
AI vendor/LLM
Which LLM provider/model will run patient interviews and grading?
Developer to recommend based on quality, cost, HIPAA/FERPA posture, and logging requirements.
Affects cost, accuracy, latency, and compliance review.
AI processing
Should grading happen synchronously after submission or through a background job?
MVP can use synchronous for pilot; design queue-ready architecture for scale.
Prevents poor UX if AI responses take too long or fail.
Retry policy
Can students retry SOAP notes or only receive feedback and move on?
MVP: one scored SOAP submission per patient/day; optional unscored reflection after feedback.
Affects scoring integrity and longitudinal analytics.
Score overrides
Can admins override AI-generated scores?
MVP: allow internal admin override with audit trail; school admin override can be V1.1.
Important for trust and dispute handling.
Transcript visibility
Can students view interview transcripts after grading?
Yes, show transcript in feedback view.
Improves learning and supports hidden-information review.
Data retention
How long should student submissions and transcripts be stored?
Set a default retention policy after legal/compliance review.
Impacts privacy, storage, and school contracts.
Compliance
Will school customers require FERPA, institutional security review, BAA, or data-processing agreements?
Treat as legal/compliance review item before institutional launch.
Impacts contracts, data handling, and vendor selection.
Payments
Will MVP include student payment or school licensing?
Exclude payments from learning MVP unless this is a commercial public launch.
Payment adds scope and security burden.
LMS integration
Should VACS integrate with Canvas/Blackboard/Moodle in MVP?
Defer LMS integration to V1.1/V2 unless a pilot school requires it.
LMS integration can materially increase complexity.
Analytics depth
What dashboards are required at launch?
Student dashboard required; internal admin dashboard required; school cohort dashboard optional.
Reporting drives database and UI requirements.
Clinical content QA
Who approves a content pack before publish?
Internal Admin or Clinical Content Reviewer approves before publish.
Prevents unsafe or incomplete clinical content from going live.
Error handling
What happens if AI grading fails?
Show a friendly retry state and log the failed attempt for admin review.
Needed for reliability and student trust.
4. User Roles and Permissions Specification
4.1 Recommended MVP Roles
Role
Primary Purpose
MVP Status
Student
Completes weekly modules, patient interviews, SOAP notes, journal club assignments, and reviews feedback.
Required
Internal Admin
Creates cohorts, uploads or manages content packs, validates source sets, publishes weeks, monitors errors, and reviews analytics.
Required
Clinical Content Reviewer
Reviews and approves weekly content packs, guidelines, gold SOAP notes, grading logic, and AI guardrails.
Recommended
School Admin / Preceptor
Views cohort progress, student scores, weekly summaries, and cumulative performance reports.
Optional for MVP; likely needed for school pilots
Developer / System Admin
Maintains infrastructure, logs, background jobs, AI integrations, and deployment.
Internal only
4.2 Permission Matrix
Capability
Student
School Admin / Preceptor
Clinical Content Reviewer
Internal Admin
Access assigned week
Yes
View only
View only
Yes
Complete quizzes and cases
Yes
No
No
Test mode only
View own scores and feedback
Yes
No
No
Yes
View cohort scores
No
Yes
No
Yes
View individual student transcripts
Own only
Decision required
No
Yes
Upload content packs
No
No
Yes - if assigned
Yes
Approve content packs
No
No
Yes
Yes
Publish/unpublish weeks
No
No
No
Yes
Override scores
No
Decision required
No
Yes with audit trail
Export reports
Own summary only
Cohort reports
No
All reports
DEVELOPER MEETING DECISION: Confirm whether school admins/preceptors can view full AI patient interview transcripts or only scores, missed concepts, and summaries.
5. Workflow and Unlock Logic Specification
5.1 Student Progression States
State
Meaning
Allowed Student Action
Locked
Student cannot access this day or activity yet.
View locked message and requirement to unlock.
Available
Activity is unlocked but not started.
Start activity.
In Progress
Student has started but not completed activity.
Resume activity.
Submitted
Student has submitted required work and is waiting for grading/feedback.
Wait or refresh depending on AI processing.
Feedback Ready
Scoring and feedback are available.
Review feedback and continue if next activity is unlocked.
Complete
Activity has been completed and stored.
Review completed work; no resubmission unless configured.
Error / Needs Review
AI or system failed, or content validation issue occurred.
Student sees friendly message; admin receives error log.
5.2 Unlock Rules
Unlock Trigger
Rule
Week availability
Monday is available at the start of the assigned week or cohort schedule.
Tuesday unlock
Student must score 90% or higher on the Monday quiz.
Wednesday unlock
Student must complete all three Tuesday patient cases.
Thursday unlock
Student must complete all three Wednesday patient cases.
Friday unlock
Student must complete all three Thursday patient cases.
Weekly completion
Friday journal club feedback and weekly performance summary must be generated.
Cumulative completion
After Week 5 is complete, generate the Week 5 weekly summary and the final 5-week cumulative summary.
5.3 Monday Quiz Logic
Each weekly quiz contains 40 questions.
Questions randomize on each attempt.
Students receive immediate feedback after each submitted question.
Correct answer and rationale display after each question is submitted.
Score threshold to unlock Tuesday is 90%.
Students may retry the quiz an unlimited number of times.
The system stores first-attempt score, final passing score, number of attempts, question-level results, and missed concepts.
For Weeks 1 through 3, default distribution is 20 questions for Disease State 1 and 20 questions for Disease State 2.
For Weeks 4 and 5, quiz distribution must be explicitly defined in the weekly content pack before build/publish.
DEVELOPER MEETING DECISION: Confirm whether students can see the same questions when retrying Monday quizzes or whether the system should re-randomize from a larger bank in future versions.
6. UI / UX Requirements
6.1 Required Student Screens
Screen
Purpose
Required Elements
Login / Account Access
Allow student to access assigned cohort/module.
Email/password or SSO decision; forgot password; terms acknowledgement if needed.
Student Dashboard
Show current week, unlock status, progress, scores, and next action.
Week cards; locked/unlocked badges; next step CTA; score summary; cumulative progress.
Monday Guideline Review
Teach the week’s guideline content before quiz.
Disease-state sections; learning objectives; source references; continue-to-quiz CTA.
Monday Quiz
Assess guideline understanding.
Question stem; answer choices; progress indicator; submit answer; immediate feedback; retry if score <90%.
Patient Case Overview
Introduce Tuesday/Wednesday/Thursday cases.
Patient cards A/B/C; visit type; status; start/resume CTA.
AI Patient Interview
Simulate patient interview.
Chat interface; patient role; student question input; transcript; end interview CTA; hidden info captured in backend.
SOAP Note Submission
Capture structured clinical documentation.
Subjective, Objective, Assessment, Plan fields; plan subfields; submit button; autosave.
SOAP Feedback
Teach after each case.
Score by section; what was done well; missed items; clinical importance; gold-standard comparison; improvement guidance; transcript link.
Friday Journal Club
Apply evidence to the week’s patients.
Article prompt; five required questions; free-text responses; submit CTA.
Journal Club Feedback
Grade clinical application of evidence.
Score by category; strengths; gaps; patient-specific feedback; improvement guidance.
Weekly Summary
Summarize performance after Friday.
Quiz attempts; all SOAP scores; journal club score; strengths; gaps; missed monitoring/counseling/hidden info; recommendations.
Final Cumulative Summary
Summarize 5-week performance.
Trend charts/tables; strongest/weakest areas; recurring gaps; readiness assessment; final recommendations.
6.2 Required Admin Screens
Screen
Purpose
Required Elements
Admin Dashboard
Manage cohorts, weeks, content packs, students, and errors.
Cohort list; content status; active students; error alerts; export links.
Content Pack Upload
Upload week-specific source set.
Week selector; file upload zones; file naming validation; required file checklist.
Content Pack Validation
Prevent incomplete weeks from publishing.
Missing file report; duplicate file warnings; week status; validation pass/fail.
Content Preview
Review parsed module content before publishing.
Guideline review preview; quiz preview; patient case preview; hidden info preview; gold SOAP preview.
Publish Controls
Control access to weekly modules.
Draft/published/archived states; publish date; cohort assignment.
Student Progress
Monitor individual completion and scores.
Student list; week/day status; scores; missed concepts; summary links.
Cohort Report
Monitor aggregate performance.
Average quiz/SOAP/journal club scores; weakest concepts; hidden info trends; export.
AI Error Queue
Resolve failed AI responses or grading errors.
Failed job details; retry button; admin notes; status tracking.
DEVELOPER MEETING DECISION: Confirm whether wireframes should be created in Figma before development, or whether the developer will build from these screen-level requirements.
7. Weekly Clinical Content Pack Specification
The weekly content pack is the most important operational asset in VACS. It allows the platform to reuse one fixed workflow while changing disease states, patients, grading criteria, and source documents each week.
7.1 Required Folder Structure
Week_#_DiseaseStateShortNames/
  00_Manifest/
    week_manifest.json
    source_hierarchy.json
    quiz_blueprint.json
    publish_checklist.md
  01_Primary_Guidelines/
    DiseaseState1_Primary_Guideline.pdf
    DiseaseState2_Primary_Guideline.pdf
    DiseaseState3_Primary_Guideline.pdf  [if applicable]
  02_Teaching_Summaries/
    DiseaseState1_Teaching_Summary.md
    DiseaseState2_Teaching_Summary.md
    DiseaseState3_Teaching_Summary.md  [if applicable]
    Integration_Summary.md  [if applicable]
  03_Monday_Quiz/
    Monday_40_Question_Bank.json
    Monday_Quiz_Answer_Key.json
    Monday_Missed_Concept_Map.json
  04_Patient_A/
    Patient_A_Master_Profile.json
    Patient_A_Tuesday_Chart.json
    Patient_A_Tuesday_AI_QA_Guide.json
    Patient_A_Tuesday_Hidden_Info_Map.json
    Patient_A_Tuesday_Gold_SOAP.json
    Patient_A_Wednesday_Chart.json
    Patient_A_Wednesday_AI_QA_Guide.json
    Patient_A_Wednesday_Hidden_Info_Map.json
    Patient_A_Wednesday_Gold_SOAP.json
    Patient_A_Thursday_Chart.json
    Patient_A_Thursday_AI_QA_Guide.json
    Patient_A_Thursday_Hidden_Info_Map.json
    Patient_A_Thursday_Gold_SOAP.json
  05_Patient_B/
    Same structure as Patient A
  06_Patient_C/
    Same structure as Patient A
  07_Friday_Journal_Club/
    Journal_Club_Source.pdf
    Journal_Club_Expected_Interpretation.json
    Journal_Club_Rubric.json
  08_QA/
    Content_QA_Checklist.md
    Source_Contamination_Checklist.md
    Clinical_Reviewer_Signoff.md
7.2 Content Pack Validation Rules
Validation Rule
Pass Criteria
Failure Message
Required file completeness
Every required file exists for the selected week structure.
Missing Files / Cannot Build Yet
Week disease-state match
Manifest disease states match the week map.
Disease-state mismatch detected.
Three-disease quiz distribution
Weeks 4 and 5 include explicit 40-question distribution.
Quiz distribution missing for three-disease-state week.
Patient file completeness
Patient A/B/C each have master profile plus Tuesday/Wednesday/Thursday chart, Q&A guide, hidden info map, and gold SOAP.
Patient case file set incomplete.
Gold SOAP availability
Each patient/day has a gold-standard SOAP note.
Gold SOAP missing; grading cannot run.
Hidden info availability
Each patient/day has a hidden information map, even if no hidden information exists.
Hidden information map missing.
Journal club completeness
Source, expected interpretation, and rubric exist.
Journal club source set incomplete.
Source hierarchy
Manifest defines the source hierarchy for the week.
Source hierarchy missing.
7.3 Required Manifest Fields
Field
Description
Example
week_id
Unique identifier for the week.
week_1
week_number
Numeric week order.
1
week_title
Display title.
Hypertension + Type 2 Diabetes
disease_states
Array of disease states.
["Hypertension", "Type 2 Diabetes"]
number_of_patients
Must equal 3 for MVP.
3
quiz_distribution
Question allocation by disease state and integrated topics.
{"HTN":20,"T2D":20}
source_hierarchy
Ranked source order for clinical verification.
guidelines > summaries > patients > gold SOAP
publish_status
Draft, validated, published, archived.
validated
clinical_reviewer
Name or ID of reviewer who approved content.
Internal reviewer
version
Content pack version.
1.0
DEVELOPER MEETING DECISION: Confirm whether weekly content packs will be authored directly as structured JSON/Markdown or generated from DOCX/PDF source documents by an internal content conversion process.
8. AI Workflow Specification
8.1 AI Roles / Agents
AI Function
Purpose
Inputs
Outputs
Content Pack Validator
Checks whether a weekly content pack is structurally complete before build/publish.
Week manifest; required file list; uploaded files.
Pass/fail; missing files list; build block message.
AI Patient
Simulates a realistic patient interview while staying in role.
Master profile; daily case; Q&A guide; hidden information map.
Patient responses; transcript; hidden info disclosures.
Hidden Info Evaluator
Determines whether a student question triggers hidden information.
Student question; hidden info trigger map; prior disclosures.
Disclosure decision; hidden info discovered/missed log.
SOAP Grader
Grades structured SOAP notes against weekly source set and gold SOAP.
Student SOAP; gold SOAP; rubric; source hierarchy; transcript.
Score out of 100; section scores; missed items; unsafe flags.
SOAP Feedback Generator
Converts grading output into educational feedback.
SOAP grading result; gold SOAP; source set.
Student-facing feedback.
Journal Club Grader
Grades evidence interpretation and patient-specific application.
Student response; article expected interpretation; rubric; patient cases.
Score out of 100; feedback.
Weekly Summary Generator
Summarizes weekly performance after Friday.
Quiz attempts; SOAP scores; feedback; hidden info logs; journal club score.
Weekly performance summary.
Cumulative Summary Generator
Summarizes all 5 weeks after Week 5.
All weekly summaries and score data.
Final cumulative VACS summary.
8.2 Universal AI Guardrails
Use only the uploaded source set for the active week.
Do not use another week’s source documents or patient facts.
Do not invent patient symptoms, medications, labs, barriers, allergies, preferences, or social history.
Do not reveal hidden information unless the student asks a clinically appropriate question.
Do not reveal grading criteria or gold-standard SOAP note content to the student during the interview.
Stay in patient role during interviews and speak like a real patient, not a clinician.
Flag unsafe recommendations clearly during grading and feedback.
Label unverifiable clinical content as Needs verification.
Allow reasonable clinical judgment in grading when the student’s answer is clinically defensible and source-supported.
Preserve standardized case progression in MVP and do not alter future patient facts based on student performance.
8.3 Prompt Template: AI Patient Interview
SYSTEM ROLE:
You are the AI patient for VACS. Stay in patient role at all times. Speak like a real patient, not a clinician. Use plain language. Do not reveal hidden information unless the student asks a clinically appropriate question.
SOURCE SET:
- Active week: {{week_id}}
- Disease states: {{disease_states}}
- Patient: {{patient_id}}
- Visit day: {{visit_day}}
- Patient master profile: {{patient_master_profile}}
- Daily case facts: {{daily_case_file}}
- AI patient Q&A guide: {{ai_qa_guide}}
- Hidden information trigger map: {{hidden_info_map}}
RULES:
1. Answer only from the provided patient profile, daily case, Q&A guide, and triggered hidden information.
2. Do not invent facts.
3. If the student asks about something not present in the source set, respond naturally that you are not sure, do not know, or do not recall.
4. Do not use clinical jargon unless the patient would realistically know that term.
5. Do not volunteer hidden information.
6. Do not reveal the gold-standard SOAP note or grading expectations.
7. Track which hidden information was disclosed and the student question that triggered it.
OUTPUT:
Return the patient response and update the transcript/hidden-information log.
8.4 Prompt Template: SOAP Grading
SYSTEM ROLE:
You are the VACS SOAP note grader. Grade the student’s structured SOAP note using only the active week source set, gold-standard SOAP note, hidden-information log, interview transcript, and rubric.
INPUTS:
- Student SOAP note: {{student_soap}}
- Gold-standard SOAP note: {{gold_soap}}
- Interview transcript: {{transcript}}
- Hidden information discovered/missed: {{hidden_info_log}}
- Disease-specific grading criteria: {{grading_criteria}}
- Active week source hierarchy: {{source_hierarchy}}
SCORING:
- Subjective: 20 points
- Objective: 20 points
- Assessment: 25 points
- Plan: 30 points
- Documentation quality and clinical prioritization: 5 points
RULES:
1. Grade patient-specific and guideline-concordant reasoning.
2. Award partial credit when clinically appropriate.
3. Do not require exact wording if the clinical meaning is correct.
4. Penalize unsupported, unsafe, or internally contradictory recommendations.
5. If the student missed hidden information because they did not ask an appropriate question, account for that in the relevant section.
6. If the student recommends content not supported by the source set, mark it Needs verification or unsafe if clinically risky.
OUTPUT FORMAT:
- Total score out of 100
- Section scores
- Strengths
- Missed items
- Why missed items matter clinically
- Gold-standard comparison
- Unsafe recommendations, if any
- Improvement recommendations
8.5 Prompt Template: Journal Club Grading
SYSTEM ROLE:
You are the VACS journal club grader. Grade the student’s evidence interpretation and patient-specific application using the active week’s journal club source, expected interpretation, patient cases, and rubric.
SCORING:
- Evidence understanding: 20 points
- Patient-specific application: 25 points
- Therapy/intervention decision-making: 20 points
- Monitoring, safety, counseling, and access: 20 points
- Organization and clarity: 15 points
RULES:
1. Reward accurate interpretation of the evidence.
2. Reward application to a specific patient from the week.
3. Penalize overstating the evidence.
4. Penalize unsupported or unsafe patient-specific recommendations.
5. Include practical monitoring, counseling, safety, and access considerations.
OUTPUT:
- Total score out of 100
- Category scores
- What the student did well
- What the student missed
- How to improve clinical application of evidence
DEVELOPER MEETING DECISION: Confirm whether AI outputs should be stored as raw JSON plus rendered student-facing feedback, or only as final rendered feedback. Recommendation: store both for auditability.
9. Grading and Feedback Specification
9.1 SOAP Rubric
SOAP Section
Points
What to Evaluate
Subjective
20
Chief concern; symptoms; pertinent negatives; adherence; barriers; OTC use; side effects; lifestyle; patient goals/fears/preferences; hidden information discovered.
Objective
20
Vitals; labs; medication list; allergies; immunizations when relevant; trend data; disease-specific objective markers.
Assessment
25
Active problems; control/severity; risk markers; residual risk; appropriateness of therapy; adherence assessment; safety; prioritization; guideline reasoning.
Plan
30
Pharmacologic plan; non-pharmacologic plan; medication optimization; monitoring; follow-up; counseling; safety; adherence; cost/access; shared decision-making; referrals.
Documentation Quality and Clinical Prioritization
5
Organization; clarity; completeness; concise ambulatory care pharmacist style; no major contradictions.
9.2 Feedback Requirements
What the student did well.
What the student missed.
Why the missed item matters clinically.
What the gold-standard pharmacist would have done.
How the student can improve next time.
Unsafe or unsupported recommendations, if applicable.
Hidden information missed and how it affected care, if applicable.
9.3 Unsafe Recommendation Handling
Severity
Definition
System Behavior
Minor concern
Incomplete or suboptimal but unlikely to harm the patient.
Deduct points and explain better approach.
Moderate concern
Could lead to poor control, missed monitoring, or avoidable adverse effect.
Deduct meaningful points; flag in feedback.
Major safety concern
Could directly harm the patient, worsen disease, or create serious medication safety issue.
Deduct heavily; clearly flag as unsafe; explain safer gold-standard approach.
Unsupported recommendation
Not verifiable from source set.
Label Needs verification unless clearly unsafe.
DEVELOPER MEETING DECISION: Confirm whether any unsafe recommendation should trigger an automatic admin alert, or only be shown in the student feedback and stored in analytics.
10. Data Model and Reporting Specification
10.1 Core Data Objects
Object / Table
Purpose
Key Fields
users
Stores account information.
user_id, name, email, role, school_id, cohort_id, status, created_at
schools
Stores institutional customers.
school_id, name, admin_user_ids, status
cohorts
Groups students into assigned VACS runs.
cohort_id, school_id, cohort_name, start_date, end_date, status
weeks
Defines the 5 weekly modules.
week_id, week_number, title, disease_states, publish_status
content_packs
Stores metadata for each weekly content pack.
content_pack_id, week_id, version, validation_status, reviewer_id, source_manifest
student_week_progress
Tracks student progress by week.
user_id, week_id, day_statuses, weekly_completion_status
quiz_attempts
Stores Monday quiz attempts.
attempt_id, user_id, week_id, score, passed, attempt_number, started_at, submitted_at
quiz_question_results
Stores question-level quiz results.
attempt_id, question_id, selected_answer, correct, concept_tags
patient_interviews
Stores patient interview sessions.
interview_id, user_id, week_id, patient_id, visit_day, transcript, started_at, completed_at
hidden_info_logs
Tracks hidden information.
interview_id, hidden_info_id, discovered, trigger_question, missed, grading_impact
soap_submissions
Stores structured SOAP notes.
soap_id, user_id, week_id, patient_id, visit_day, subjective, objective, assessment, plan, submitted_at
soap_grades
Stores SOAP scores and grading output.
soap_id, total_score, section_scores, missed_items, unsafe_flags, feedback_json
journal_club_submissions
Stores Friday responses.
submission_id, user_id, week_id, responses, submitted_at
journal_club_grades
Stores Friday scoring and feedback.
submission_id, total_score, category_scores, feedback_json
weekly_summaries
Stores final weekly summaries.
summary_id, user_id, week_id, summary_text, score_rollup, recommendations
cumulative_summaries
Stores final 5-week summaries.
summary_id, user_id, all_week_scores, trend_data, final_recommendations
ai_jobs
Tracks AI requests and failures.
job_id, job_type, user_id, input_hash, status, error_message, retry_count, created_at
10.2 Student Dashboard Metrics
Current week and day unlock status.
Monday quiz first-attempt score and final passing score.
SOAP note scores by patient/day.
Journal club score.
Weekly overall performance.
Missed concepts and recommended review areas.
Hidden information discovery performance.
Cumulative progress across 5 weeks.
10.3 Admin / Cohort Metrics
Average Monday quiz first-attempt score by week.
Average Monday passing score and number of attempts.
Average SOAP note score by week, day, patient, and SOAP section.
Average journal club score by week.
Most commonly missed disease-state concepts.
Most common monitoring, counseling, and clinical reasoning gaps.
Hidden information discovery trend.
Students at risk or falling behind completion schedule.
Cohort readiness trend across the 5-week experience.
DEVELOPER MEETING DECISION: Confirm whether admin/cohort analytics should be included in launch MVP or built immediately after the student workflow is stable.
11. Admin Portal Requirements
Admin Capability
MVP Requirement
Notes
Create/manage cohorts
Required if school pilots are planned.
Can be simple: name, school, start date, assigned weeks, students.
Invite/manage students
Required.
At minimum, create student accounts and assign cohort.
Upload content packs
Recommended.
If not built, developer must manually seed content.
Validate content packs
Required.
Must prevent incomplete weeks from being published.
Preview content
Recommended.
Helps clinical reviewer catch errors before student access.
Publish/unpublish weeks
Required.
Only validated weeks should be publishable.
View student progress
Required.
Needed to monitor pilot completion.
Export reports
Recommended.
CSV/PDF exports can be V1.1 if timeline is tight.
Review AI failures
Required.
Needed for operational reliability.
Override scores
Decision required.
Recommended for Internal Admin only in MVP.
12. QA and Acceptance Criteria
12.1 Source-Set QA
Test Case
Expected Result
Upload content pack missing a primary guideline.
System blocks validation and displays Missing Files / Cannot Build Yet.
Upload Week 4 content pack without explicit quiz distribution.
System blocks validation and requests quiz distribution.
Upload Patient B Wednesday without a hidden information map.
System blocks validation and lists missing file.
Publish content pack with validation failure.
Publish button disabled or action blocked.
Attempt to use Week 1 source during Week 2 grading.
System blocks cross-week contamination or logs a source violation.
12.2 Student Workflow QA
Test Case
Expected Result
Student starts Week 1 Monday.
Guideline review is available. Tuesday is locked.
Student scores below 90% on Monday quiz.
Tuesday remains locked and quiz retry is available.
Student scores 90% or higher on Monday quiz.
Tuesday unlocks.
Student completes only Patient A and B Tuesday cases.
Wednesday remains locked.
Student completes Patient A/B/C Tuesday cases.
Wednesday unlocks.
Student receives low SOAP score on Tuesday.
Student can still proceed after completing all Tuesday cases.
Student completes Friday journal club.
Weekly summary is generated.
Student completes Week 5 Friday.
Week 5 summary and final cumulative summary are generated.
12.3 AI QA
Test Case
Expected Result
Student asks AI patient a clinically appropriate hidden-info question.
AI reveals the mapped hidden information and logs the trigger.
Student does not ask about hidden-info topic.
AI does not reveal hidden information and logs it as missed.
Student asks for a lab value not in the source set.
AI does not invent it and says it does not know or it is not available.
Student submits an unsafe plan.
SOAP grader flags unsafe recommendation and deducts appropriately.
Student submits a reasonable alternative plan supported by source set.
SOAP grader awards credit even if wording differs from gold SOAP.
AI grading job fails.
System shows retry/error state and logs the failure for admin review.
12.4 Launch Acceptance Criteria
All Week 1 content pack files pass structural validation.
Student can complete Monday through Friday without admin intervention.
All unlock rules work as expected.
AI patient does not reveal hidden information early during testing.
SOAP grading returns structured scores and feedback for all 9 weekly cases.
Journal club grading returns score and feedback.
Weekly summary generates after Friday completion.
Cumulative summary generates after Week 5 completion in test environment.
Admin can view progress and AI failure logs.
No cross-week source contamination appears in AI output during QA.
13. MVP Build Plan and Roadmap
13.1 Recommended Build Order
Multi-week module shell.
User authentication and student dashboard.
Weekly content pack schema and validation system.
Monday guideline review module.
Monday quiz engine with randomization, immediate feedback, retries, and 90% unlock gate.
Tuesday through Thursday patient workflow shell.
AI patient interview engine and transcript storage.
Hidden information trigger and logging system.
Structured SOAP note submission.
SOAP grading and feedback generation.
Friday journal club workflow.
Weekly performance summary.
Admin dashboard for content status, student progress, and errors.
Cross-week performance tracking and final cumulative summary.
QA, security review, and pilot readiness testing.
13.2 Phased Roadmap
Phase
Goal
Deliverables
Phase 0: Build Lock
Resolve decisions and finalize Week 1 content pack.
Decision log resolved; content-pack schema locked; Week 1 content complete.
Phase 1: Core Student MVP
Build student workflow from Monday through Friday for one week.
Login, dashboard, guideline review, quiz, unlocks, patient interview, SOAP submission, feedback, journal club.
Phase 2: Multi-Week Expansion
Enable all 5 weeks using same engine.
Week selector; content pack mapping; cumulative tracking.
Phase 3: Admin + QA Hardening
Operationalize pilot management.
Content validation, publish controls, progress dashboard, AI error queue.
Phase 4: School Pilot
Run controlled pilot with real students.
Cohort reporting, feedback collection, QA revisions, support process.
Phase 5: V1.1 / V2
Add scale features.
LMS integration, adaptive remediation, richer analytics, score overrides for schools, content authoring tools.
14. Output Templates
14.1 Weekly Performance Summary Template
Weekly Performance Summary
Student: {{student_name}}
Week: {{week_number}} - {{week_title}}
Disease States: {{disease_states}}
Performance Snapshot:
- Monday quiz first-attempt score: {{first_attempt_score}}
- Monday quiz final passing score: {{final_passing_score}}
- Number of Monday quiz attempts: {{attempt_count}}
- Tuesday SOAP scores: Patient A {{tue_a}}, Patient B {{tue_b}}, Patient C {{tue_c}}
- Wednesday SOAP scores: Patient A {{wed_a}}, Patient B {{wed_b}}, Patient C {{wed_c}}
- Thursday SOAP scores: Patient A {{thu_a}}, Patient B {{thu_b}}, Patient C {{thu_c}}
- Friday journal club score: {{journal_club_score}}
- Overall weekly performance: {{overall_weekly_score}}
Key Strengths:
{{key_strengths}}
Clinical Reasoning Gaps:
{{clinical_reasoning_gaps}}
Missed Monitoring Items:
{{missed_monitoring_items}}
Missed Counseling Points:
{{missed_counseling_points}}
Missed Hidden-Information Opportunities:
{{missed_hidden_info}}
Guideline Concepts to Review:
{{guideline_review_topics}}
Readiness for Next Week:
{{readiness_statement}}
Personalized Recommendations:
{{recommendations}}
14.2 Final 5-Week Cumulative Summary Template
Final VACS Cumulative Performance Summary
Student: {{student_name}}
Program: 5-Week Virtual Ambulatory Care Simulator
Overall 5-Week Performance:
{{overall_performance}}
Weekly Performance Trend:
{{weekly_trend}}
Quiz Performance Trend:
{{quiz_trend}}
SOAP Note Performance:
{{soap_average_and_trend}}
Journal Club Performance:
{{journal_club_average_and_trend}}
Strongest Disease-State Areas:
{{strongest_areas}}
Weakest Disease-State Areas:
{{weakest_areas}}
Most Common Clinical Reasoning Gaps:
{{reasoning_gaps}}
Most Common Monitoring Gaps:
{{monitoring_gaps}}
Most Common Counseling Gaps:
{{counseling_gaps}}
Patient Interview and Hidden Information Trend:
{{interview_hidden_info_trend}}
Improvement Over Time:
{{improvement_statement}}
Readiness for Ambulatory Care Practice:
{{readiness_assessment}}
Personalized Final Recommendations:
{{final_recommendations}}
15. Developer Handoff Checklist
Handoff Item
Status to Confirm Before Build
Final PRD reviewed
Product owner and developer agree on MVP scope.
Decision log reviewed
Open decisions assigned and resolved or deferred.
Week 1 content pack complete
All required files exist and pass internal QA.
Content-pack schema locked
Developer knows expected file structure and ingest format.
AI prompt templates reviewed
Developer confirms implementation approach and model/vendor.
Data model reviewed
Developer confirms database architecture and object relationships.
UX direction aligned
Wireframes either approved or assigned for creation.
QA checklist approved
Developer agrees to acceptance criteria and testing approach.
Pilot plan defined
Initial cohort, users, and timeline identified.
Compliance/security review assigned
Owner identified for data privacy and institutional review requirements.
End of packet.