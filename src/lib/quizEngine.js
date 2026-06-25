// Generic quiz helpers — operate on any item array (shape: {id,type,stem,options,correct,...}).
export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function buildAttempt(items) {
  return shuffle(items).map(it => ({ ...it, options: shuffle(it.options) }))
}

export function isCorrect(item, selectedKeys) {
  const a = new Set(selectedKeys)
  const b = new Set(item.correct)
  if (a.size !== b.size) return false
  for (const k of a) if (!b.has(k)) return false
  return true
}

export function scoreAttempt(items, answers) {
  const correctCount = items.filter(it => isCorrect(it, answers[it.id] || [])).length
  return Math.round((correctCount / items.length) * 100)
}
