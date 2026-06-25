/**
 * student_week_progress DB service
 * Tracks per-student, per-week day unlock states.
 */
import { createClient } from '../supabase/client'

/** Get or create a progress row for user+week */
export async function getProgress(weekId) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  let { data, error } = await supabase
    .from('student_week_progress')
    .select('*')
    .eq('user_id', user.id)
    .eq('week_id', weekId)
    .single()

  if (error?.code === 'PGRST116') {
    // Row doesn't exist yet — create it
    const { data: created } = await supabase
      .from('student_week_progress')
      .insert({ user_id: user.id, week_id: weekId })
      .select()
      .single()
    data = created
  }

  return data
}

/** Update specific day status fields */
export async function updateProgress(weekId, updates) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return

  await supabase
    .from('student_week_progress')
    .upsert({ user_id: user.id, week_id: weekId, ...updates }, { onConflict: 'user_id,week_id' })
}

/** Mark a day as complete and unlock the next day */
export async function unlockNextDay(weekId, completedDay) {
  const dayOrder = ['mon', 'tue', 'wed', 'thu', 'fri']
  const idx = dayOrder.indexOf(completedDay)
  const nextDay = dayOrder[idx + 1]

  const updates = { [`${completedDay}_status`]: 'complete' }
  if (nextDay) updates[`${nextDay}_status`] = 'unlocked'

  await updateProgress(weekId, updates)
}
