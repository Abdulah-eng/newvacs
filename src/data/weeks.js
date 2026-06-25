// Course registry — assembles each week's content with its own state machine.
// Components are week-agnostic: they receive a `week` object and read content from
// week.* and gating from week.state.*.
import { createModuleState } from '../lib/moduleState'
import { MODULE, PATIENTS, CLINIC_DAYS, caseIdFor, GUIDELINE_REVIEW, FLOW_JOURNAL } from './week1'
import { QUIZ_ITEMS as QUIZ1, PASS_THRESHOLD as PASS1 } from './quiz'
import { buildDebrief, CLOSING, replyTo } from './preceptorDebrief'
import { MODULE2, PATIENTS2, caseIdFor2, GUIDELINE_REVIEW2, CONFIDENCE_JOURNAL } from './week2'
import { QUIZ_ITEMS as QUIZ2, PASS_THRESHOLD as PASS2 } from './quiz2'
import { buildDebrief2, CLOSING2, replyTo2 } from './preceptorDebrief2'

// Shared day skeleton (keys/kinds identical across weeks); blurbs are week-specific.
const days = (journalName) => [
  { key: 'mon', label: 'Monday', kind: 'learn', title: 'Guideline Review + Quiz', blurb: 'Learn the rules of the game, then pass the quiz at ≥90% to unlock Tuesday.' },
  { key: 'tue', label: 'Tuesday', kind: 'clinic', title: 'Initial Visits', blurb: 'First contact — review the chart, interview, and write an initial SOAP for each patient.' },
  { key: 'wed', label: 'Wednesday', kind: 'clinic', title: '3-Month Follow-up', blurb: 'Did it work? Reassess response and intensify where needed.' },
  { key: 'thu', label: 'Thursday', kind: 'clinic', title: '2nd Follow-up', blurb: 'Advanced reasoning — manage evolving response and barriers.' },
  { key: 'fri', label: 'Friday', kind: 'journal', title: 'Journal Club', blurb: `Evidence to bedside — apply the ${journalName} trial, then debrief and generate your weekly summary.` },
]

export const WEEK1 = {
  id: 'week1', index: 1,
  module: MODULE,
  blurb: 'Hypertension and type 2 diabetes — uncover hidden nonadherence and OTC contributors, then drive cardiorenal therapy in a high-risk patient.',
  days: days('FLOW'),
  patients: PATIENTS,
  clinicDays: CLINIC_DAYS,
  caseId: caseIdFor,
  guideline: GUIDELINE_REVIEW,
  quizItems: QUIZ1,
  passThreshold: PASS1,
  journal: FLOW_JOURNAL,
  debrief: { build: buildDebrief, closing: CLOSING, replyTo },
  keys: { quiz: 'week1-quiz', debrief: 'week1-debrief' },
  state: createModuleState({
    quizKey: 'week1-quiz', passThreshold: PASS1,
    patients: PATIENTS, clinicDays: CLINIC_DAYS, caseId: caseIdFor,
    journalId: FLOW_JOURNAL.id, journalQuestions: FLOW_JOURNAL.questions,
  }),
}

export const WEEK2 = {
  id: 'week2', index: 2,
  module: MODULE2,
  blurb: 'Hyperlipidemia and chronic kidney disease — stage CKD on two axes, treat statins to intensity, and surface the drug that was never started or quietly declined.',
  days: days('CONFIDENCE'),
  patients: PATIENTS2,
  clinicDays: CLINIC_DAYS,
  caseId: caseIdFor2,
  guideline: GUIDELINE_REVIEW2,
  quizItems: QUIZ2,
  passThreshold: PASS2,
  journal: CONFIDENCE_JOURNAL,
  debrief: { build: buildDebrief2, closing: CLOSING2, replyTo: replyTo2 },
  keys: { quiz: 'week2-quiz', debrief: 'week2-debrief' },
  state: createModuleState({
    quizKey: 'week2-quiz', passThreshold: PASS2,
    patients: PATIENTS2, clinicDays: CLINIC_DAYS, caseId: caseIdFor2,
    journalId: CONFIDENCE_JOURNAL.id, journalQuestions: CONFIDENCE_JOURNAL.questions,
  }),
}

export const WEEKS = [WEEK1, WEEK2]
export const getWeek = (id) => WEEKS.find(w => w.id === id) || WEEK1
