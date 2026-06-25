// Deterministic, concept-based SOAP grader for the MVP (no API key required).
// Each case supplies a rubric (see GRADING_RUBRICS in data/cases.js):
//   { subjective:[item], objective:[item], assessment:[item], plan:[item], avoid:[item] }
//   item = { id, label, keywords:[...], tip }
// We normalize the student's text and credit an item if ANY of its keywords appear
// in that section OR anywhere in the note (forgiving cross-section credit).
//
// This is intentionally transparent and offline. To swap in richer LLM grading later,
// send the student SOAP + the case PRECEPTOR data to the same Anthropic proxy the
// production app already uses, and map the response into the same result shape.

const SECTIONS = ['subjective', 'objective', 'assessment', 'plan']
const SECTION_LABELS = {
  subjective: 'Subjective', objective: 'Objective', assessment: 'Assessment', plan: 'Plan',
}

function normalize(t) {
  return ' ' + String(t || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim() + ' '
}
function matched(text, keywords) {
  return keywords.some(k => text.includes(k.toLowerCase()))
}

export function gradeSoap(rubric, soap) {
  if (!rubric) return null
  const whole = normalize(SECTIONS.map(s => soap?.[s] || '').join('  '))
  const empty = SECTIONS.every(s => !String(soap?.[s] || '').trim())

  const sections = {}
  let earned = 0, possible = 0
  for (const sec of SECTIONS) {
    const items = rubric[sec] || []
    const secText = normalize(soap?.[sec])
    const hits = [], misses = []
    for (const it of items) {
      const found = matched(secText, it.keywords) || matched(whole, it.keywords)
      ;(found ? hits : misses).push(it)
    }
    sections[sec] = { key: sec, label: SECTION_LABELS[sec], earned: hits.length, possible: items.length, hits, misses }
    earned += hits.length
    possible += items.length
  }

  const flags = (rubric.avoid || []).filter(f => matched(whole, f.keywords))
  const pct = possible ? Math.round((earned / possible) * 100) : 0

  return { sections, sectionOrder: SECTIONS, earned, possible, pct, flags, empty }
}

export function gradeBand(pct) {
  if (pct >= 85) return { label: 'Strong', tone: 'teal', note: 'Comprehensive and guideline-concordant work.' }
  if (pct >= 65) return { label: 'Solid', tone: 'teal', note: 'Good coverage — a few elements left to close.' }
  if (pct >= 40) return { label: 'Developing', tone: 'amber', note: 'Several key elements are missing; review the opportunities below.' }
  return { label: 'Needs work', tone: 'red', note: 'Major elements are missing. Revisit the chart, interview, and plan, then regrade.' }
}
