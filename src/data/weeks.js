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

import { MODULE3, PATIENTS3, caseIdFor3, GUIDELINE_REVIEW3, MATINEE_JOURNAL } from './week3'
import { QUIZ_ITEMS as QUIZ3, PASS_THRESHOLD as PASS3 } from './quiz3'
import { buildDebrief3, CLOSING3, replyTo3 } from './preceptorDebrief3'

import { MODULE4, PATIENTS4, caseIdFor4, GUIDELINE_REVIEW4, AZALEA_JOURNAL } from './week4'
import { QUIZ_ITEMS as QUIZ4, PASS_THRESHOLD as PASS4 } from './quiz4'
import { buildDebrief4, CLOSING4, replyTo4 } from './preceptorDebrief4'

import { MODULE5, PATIENTS5, caseIdFor5, GUIDELINE_REVIEW5, ESCAPE_TRD_JOURNAL } from './week5'
import { QUIZ_ITEMS as QUIZ5, PASS_THRESHOLD as PASS5 } from './quiz5'
import { buildDebrief5, CLOSING5, replyTo5 } from './preceptorDebrief5'
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

export const WEEK3 = {
  id: 'week3', index: 3,
  module: MODULE3,
  blurb: 'Asthma and COPD — optimize inhalers, navigate the overlap phenotype, and consider biologic therapy.',
  days: days('MATINEE'),
  patients: PATIENTS3,
  clinicDays: CLINIC_DAYS,
  caseId: caseIdFor3,
  guideline: GUIDELINE_REVIEW3,
  quizItems: QUIZ3,
  passThreshold: PASS3,
  journal: MATINEE_JOURNAL,
  debrief: { build: buildDebrief3, closing: CLOSING3, replyTo: replyTo3 },
  keys: { quiz: 'week3-quiz', debrief: 'week3-debrief' },
  state: createModuleState({
    quizKey: 'week3-quiz', passThreshold: PASS3,
    patients: PATIENTS3, clinicDays: CLINIC_DAYS, caseId: caseIdFor3,
    journalId: MATINEE_JOURNAL.id, journalQuestions: MATINEE_JOURNAL.questions,
  }),
}

export const WEEK4 = {
  id: 'week4', index: 4,
  module: MODULE4,
  blurb: 'Heart Failure and AFib — build the four pillars of GDMT and navigate bleeding fears to prevent stroke.',
  days: days('AZALEA-TIMI 71'),
  patients: PATIENTS4,
  clinicDays: CLINIC_DAYS,
  caseId: caseIdFor4,
  guideline: GUIDELINE_REVIEW4,
  quizItems: QUIZ4,
  passThreshold: PASS4,
  journal: AZALEA_JOURNAL,
  debrief: { build: buildDebrief4, closing: CLOSING4, replyTo: replyTo4 },
  keys: { quiz: 'week4-quiz', debrief: 'week4-debrief' },
  state: createModuleState({
    quizKey: 'week4-quiz', passThreshold: PASS4,
    patients: PATIENTS4, clinicDays: CLINIC_DAYS, caseId: caseIdFor4,
    journalId: AZALEA_JOURNAL.id, journalQuestions: AZALEA_JOURNAL.questions,
  }),
}

export const WEEK5 = {
  id: 'week5', index: 5,
  module: MODULE5,
  blurb: 'Depression and Anxiety — track symptoms, distinguish nonadherence from failure, and evaluate for TRD.',
  days: days('ESCAPE-TRD'),
  patients: PATIENTS5,
  clinicDays: CLINIC_DAYS,
  caseId: caseIdFor5,
  guideline: GUIDELINE_REVIEW5,
  quizItems: QUIZ5,
  passThreshold: PASS5,
  journal: ESCAPE_TRD_JOURNAL,
  debrief: { build: buildDebrief5, closing: CLOSING5, replyTo: replyTo5 },
  keys: { quiz: 'week5-quiz', debrief: 'week5-debrief' },
  state: createModuleState({
    quizKey: 'week5-quiz', passThreshold: PASS5,
    patients: PATIENTS5, clinicDays: CLINIC_DAYS, caseId: caseIdFor5,
    journalId: ESCAPE_TRD_JOURNAL.id, journalQuestions: ESCAPE_TRD_JOURNAL.questions,
  }),
}

export const WEEKS = [WEEK1, WEEK2, WEEK3, WEEK4, WEEK5]
export const getWeek = (id) => WEEKS.find(w => w.id === id) || WEEK1
