import { loadCaseState, saveCaseState } from './storage'

// Shared across all modules — one demo toggle unlocks gates everywhere.
let DEMO = false
export function setDemoMode(v) { DEMO = !!v }
export function isDemoMode() { return DEMO }

const ORDER = ['mon', 'tue', 'wed', 'thu', 'fri']

// Build a state machine bound to one module config. config must provide:
//   quizKey, passThreshold, patients[{id}], clinicDays[], caseId(pid,day),
//   journalId, journalQuestions[{id}]
export function createModuleState(config) {
  const QUIZ_KEY = config.quizKey

  function loadQuiz() {
    return { attempts: [], bestScore: 0, ...loadCaseState(QUIZ_KEY) }
  }
  function recordQuizAttempt(score) {
    const q = loadQuiz()
    const attempts = [...q.attempts, { no: q.attempts.length + 1, score, passing: score >= config.passThreshold }]
    const bestScore = Math.max(q.bestScore || 0, score)
    const next = { attempts, bestScore, firstScore: q.attempts.length === 0 ? score : q.firstScore }
    saveCaseState(QUIZ_KEY, next)
    return next
  }
  const quizBest = () => loadQuiz().bestScore || 0
  const quizPassed = () => quizBest() >= config.passThreshold

  const patientComplete = (pid, day) => loadCaseState(config.caseId(pid, day)).graded === true
  const dayAllComplete = (day) => config.patients.every(p => patientComplete(p.id, day))

  function journalComplete() {
    const s = loadCaseState(config.journalId)
    const r = s.responses || {}
    return config.journalQuestions.every(q => (r[q.id] || '').trim().length > 0)
  }

  function dayUnlocked(day) {
    if (DEMO) return true
    switch (day) {
      case 'mon': return true
      case 'tue': return quizPassed()
      case 'wed': return dayAllComplete('tue')
      case 'thu': return dayAllComplete('wed')
      case 'fri': return dayAllComplete('thu')
      default: return false
    }
  }

  function dayState(day) {
    if (!dayUnlocked(day)) return 'LOCKED'
    if (day === 'mon') return quizPassed() ? 'COMPLETE' : 'UNLOCKED'
    if (day === 'fri') return journalComplete() ? 'COMPLETE' : 'UNLOCKED'
    if (dayAllComplete(day)) return 'COMPLETE'
    const anyStarted = config.patients.some(p => {
      const st = loadCaseState(config.caseId(p.id, day))
      return st.graded || (st.__progress && Object.keys(st.__progress).length > 0)
    })
    return anyStarted ? 'IN_PROGRESS' : 'UNLOCKED'
  }

  function patientUnlocked(day, index) {
    if (DEMO) return true
    if (!dayUnlocked(day)) return false
    if (index === 0) return true
    return patientComplete(config.patients[index - 1].id, day)
  }

  const summaryAvailable = () => DEMO || journalComplete()

  function weekProgress() {
    let done = 0
    const total = 1 + (config.clinicDays.length * config.patients.length) + 1
    if (quizPassed()) done++
    for (const d of config.clinicDays) for (const p of config.patients) if (patientComplete(p.id, d)) done++
    if (journalComplete()) done++
    return done / total
  }

  // True completion ignores the demo bypass — it reflects real graded work.
  function weekComplete() {
    return quizPassed() && config.clinicDays.every(d => dayAllComplete(d)) && journalComplete()
  }

  // Lightweight snapshot for the course landing cards.
  function snapshot() {
    const totalCases = config.clinicDays.length * config.patients.length
    let casesGraded = 0
    for (const d of config.clinicDays) for (const p of config.patients) if (patientComplete(p.id, d)) casesGraded++
    return {
      pct: Math.round(weekProgress() * 100),
      quizPassed: quizPassed(),
      quizBest: quizBest(),
      casesGraded, totalCases,
      journalDone: journalComplete(),
      complete: weekComplete(),
    }
  }

  return {
    config, ORDER,
    loadQuiz, recordQuizAttempt, quizBest, quizPassed,
    patientComplete, dayAllComplete, journalComplete,
    dayUnlocked, dayState, patientUnlocked, summaryAvailable, weekProgress,
    weekComplete, snapshot,
  }
}
