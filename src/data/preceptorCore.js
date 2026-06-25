// Shared preceptor persona + conversation helpers. Each week supplies its own
// guided beats, closing, and knowledge base (KB); the persona and engine are shared.

export const PRECEPTOR = {
  name: 'Dr. Alyssa Reyes',
  credentials: 'PharmD, BCACP',
  role: 'Ambulatory Care Preceptor',
  initials: 'AR',
  blurb: 'Your preceptor for the week — here to debrief, not to lecture.',
}

const ACKS = [
  "Good — I like that you're naming it.",
  "That's honest, and it's the right instinct.",
  "Exactly the kind of reflection I was hoping for.",
  "Right — and notice how that connects to the patient in front of you.",
  "That tracks with what I saw this week.",
  "Well put. Hold onto that.",
  "Agreed — that's the move.",
]
export const ackFor = (i) => ACKS[i % ACKS.length]

const GREETING = ['hi', 'hello', 'hey', 'thanks for', 'good morning', 'good afternoon']
const normalize = (t) => ' ' + (t || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ') + ' '

// Build a reply function bound to a week-specific knowledge base.
export function makeReplyTo(kb) {
  return function replyTo(raw) {
    const q = normalize(raw)
    if (q.trim().length === 0) return "What's on your mind? Ask me about any patient or any decision from the week."
    let best = null, bestScore = 0
    for (const entry of kb) {
      let s = 0
      for (const kw of entry.keywords) {
        const k = kw.toLowerCase()
        if (q.includes(' ' + k + ' ') || q.includes(' ' + k) || q.includes(k + ' ')) s += 1 + Math.min(k.split(' ').length - 1, 2)
      }
      if (s > bestScore) { bestScore = s; best = entry }
    }
    if (bestScore > 0) return best.response
    if (GREETING.some(g => q.includes(' ' + g))) return "Hey — glad you stuck around. Ask me anything about the week: a patient, a drug choice, a guideline point."
    return "Good question. Walk me through your thinking first — what does the guideline say, and what does this specific patient in front of you actually need? Start there and you'll usually find the answer."
  }
}
