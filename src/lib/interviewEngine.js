// Rule-based standardized-patient engine (no LLM required for the MVP).
// Each case supplies an INTERVIEW_KNOWLEDGE array: { id, topic, field, keywords[], response }.
// We score the student's question against each topic's keywords and return the best match.
// The patient never volunteers hidden facts: only a matched topic reveals its response.

function normalize(text) {
  return ' ' + text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ') + ' '
}

function scoreTopic(q, topic) {
  let score = 0
  for (const kw of topic.keywords) {
    const k = kw.toLowerCase()
    if (q.includes(' ' + k + ' ') || q.includes(' ' + k) || q.includes(k + ' ')) {
      // longer keywords are more specific -> weight by length
      score += 1 + Math.min(k.split(' ').length - 1, 2)
    }
  }
  return score
}

const GREETING_KW = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'how are you', 'nice to meet']

const FALLBACKS = [
  "Hmm, I'm not totally sure what you mean — could you ask that a different way?",
  "I think so? I'm honestly not sure. Can you explain what you're asking?",
  "Sorry, I didn't quite follow that. What would you like to know?",
]

// Returns { text, topicId, field } — topicId/field are null when no hidden topic was hit.
export function getPatientReply(rawQuestion, knowledge) {
  const q = normalize(rawQuestion || '')

  if (q.trim().length === 0) {
    return { text: "I'm here whenever you're ready — what would you like to ask me?", topicId: null, field: null }
  }

  // Greeting handling (only if no clinical topic clearly matches)
  let best = null
  let bestScore = 0
  for (const topic of knowledge) {
    const s = scoreTopic(q, topic)
    if (s > bestScore) { bestScore = s; best = topic }
  }

  if (bestScore === 0) {
    const isGreeting = GREETING_KW.some(g => q.includes(' ' + g))
    if (isGreeting) {
      return { text: "Oh, hi! Thanks for seeing me. The doctor said I should come talk with the pharmacist about my blood pressure and sugar.", topicId: null, field: null }
    }
    const idx = Math.abs(hash(rawQuestion)) % FALLBACKS.length
    return { text: FALLBACKS[idx], topicId: null, field: null }
  }

  return { text: best.response, topicId: best.id, field: best.field || null }
}

function hash(str = '') {
  let h = 0
  for (let i = 0; i < str.length; i++) { h = (h << 5) - h + str.charCodeAt(i); h |= 0 }
  return h
}
