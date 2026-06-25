/**
 * journal_club_submissions + journal_club_grades DB service
 */
import { createClient } from '../supabase/client'

/** Save or update journal club responses (upsert) */
export async function saveJournalResponses(weekId, responses) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data } = await supabase
    .from('journal_club_submissions')
    .upsert({ user_id: user.id, week_id: weekId, responses }, { onConflict: 'user_id,week_id' })
    .select()
    .single()

  return data
}

/** Get a journal club submission for the current user */
export async function getJournalSubmission(weekId) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data } = await supabase
    .from('journal_club_submissions')
    .select('*, journal_club_grades(*)')
    .eq('user_id', user.id)
    .eq('week_id', weekId)
    .single()

  return data
}

/** Save AI-generated journal club grade */
export async function saveJournalGrade(submissionId, gradeData) {
  const supabase = createClient()

  const { data } = await supabase
    .from('journal_club_grades')
    .upsert({ submission_id: submissionId, ...gradeData }, { onConflict: 'submission_id' })
    .select()
    .single()

  return data
}

/** Check if journal club is complete for a week */
export async function isJournalComplete(weekId, totalQuestions) {
  const sub = await getJournalSubmission(weekId)
  if (!sub?.responses) return false
  const answered = Object.values(sub.responses).filter(r => String(r).trim().length > 0).length
  return answered >= totalQuestions
}
