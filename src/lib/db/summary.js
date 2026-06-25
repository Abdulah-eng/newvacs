/**
 * weekly_summaries + cumulative_summaries DB service
 */
import { createClient } from '../supabase/client'

/** Save a weekly summary */
export async function saveWeeklySummary(weekId, summaryData) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data } = await supabase
    .from('weekly_summaries')
    .upsert({ user_id: user.id, week_id: weekId, ...summaryData }, { onConflict: 'user_id,week_id' })
    .select()
    .single()

  return data
}

/** Get a weekly summary */
export async function getWeeklySummary(weekId) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data } = await supabase
    .from('weekly_summaries')
    .select('*')
    .eq('user_id', user.id)
    .eq('week_id', weekId)
    .single()

  return data
}

/** Save the cumulative 5-week summary */
export async function saveCumulativeSummary(summaryData) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data } = await supabase
    .from('cumulative_summaries')
    .upsert({ user_id: user.id, ...summaryData }, { onConflict: 'user_id' })
    .select()
    .single()

  return data
}

/** Get the cumulative summary */
export async function getCumulativeSummary() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data } = await supabase
    .from('cumulative_summaries')
    .select('*')
    .eq('user_id', user.id)
    .single()

  return data
}

/** Get all weekly summaries for a user (for cumulative rollup) */
export async function getAllWeeklySummaries() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return []

  const { data } = await supabase
    .from('weekly_summaries')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: true })

  return data ?? []
}
