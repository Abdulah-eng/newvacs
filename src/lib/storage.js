// Tiny namespaced localStorage wrapper, keyed by case id.
// All student-entered work persists here. Swap this module for an API later.
import { syncToSupabase } from './storage-sync'

const PREFIX = 'vacs::'

function key(caseId) { return `${PREFIX}${caseId}` }

export function loadCaseState(caseId) {
  try {
    if (typeof window === 'undefined') return {}
    const raw = localStorage.getItem(key(caseId))
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveCaseState(caseId, state) {
  try {
    if (typeof window === 'undefined') return
    localStorage.setItem(key(caseId), JSON.stringify(state))
    // Fire and forget sync to Supabase
    if (caseId !== 'vacs-demo') {
      syncToSupabase(caseId, state)
    }
  } catch {
    /* storage may be unavailable (private mode); fail silently */
  }
}

export function resetCaseState(caseId) {
  try { localStorage.removeItem(key(caseId)) } catch { /* ignore */ }
}

// Global status index so the dashboard can show Not started / In progress / Completed.
export function caseStatus(caseId) {
  const s = loadCaseState(caseId)
  const p = s.__progress || {}
  const done = Object.values(p).filter(Boolean).length
  if (done === 0) return 'not_started'
  if (done >= 6) return 'completed'
  return 'in_progress'
}
