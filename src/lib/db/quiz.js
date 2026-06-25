/**
 * quiz_attempts + quiz_question_results DB service
 */
import { createClient } from '../supabase/client'

/** Create a new quiz attempt */
export async function startQuizAttempt(weekId) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  // Get attempt number
  const { count } = await supabase
    .from('quiz_attempts')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id)
    .eq('week_id', weekId)

  const { data } = await supabase
    .from('quiz_attempts')
    .insert({ user_id: user.id, week_id: weekId, attempt_number: (count ?? 0) + 1, score: 0 })
    .select()
    .single()

  return data
}

/** Submit a completed quiz attempt with score */
export async function submitQuizAttempt(attemptId, { score, passed, questionResults = [] }) {
  const supabase = createClient()

  await supabase
    .from('quiz_attempts')
    .update({ score, passed, submitted_at: new Date().toISOString() })
    .eq('id', attemptId)

  if (questionResults.length > 0) {
    await supabase.from('quiz_question_results').insert(
      questionResults.map(r => ({ attempt_id: attemptId, ...r }))
    )
  }
}

/** Get all attempts for a user+week */
export async function getQuizAttempts(weekId) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return []

  const { data } = await supabase
    .from('quiz_attempts')
    .select('*')
    .eq('user_id', user.id)
    .eq('week_id', weekId)
    .order('attempt_number', { ascending: true })

  return data ?? []
}

/** Check if student has passed the quiz (>=90) for a week */
export async function hasPassedQuiz(weekId) {
  const attempts = await getQuizAttempts(weekId)
  return attempts.some(a => a.passed)
}

/** Get best quiz score for a week */
export async function getBestScore(weekId) {
  const attempts = await getQuizAttempts(weekId)
  if (!attempts.length) return 0
  return Math.max(...attempts.map(a => Number(a.score)))
}
