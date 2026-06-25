/**
 * patient_interviews + hidden_info_logs DB service
 */
import { createClient } from '../supabase/client'

/** Get or create an interview session */
export async function getOrCreateInterview(weekId, patientId, visitDay) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  let { data, error } = await supabase
    .from('patient_interviews')
    .select('*')
    .eq('user_id', user.id)
    .eq('week_id', weekId)
    .eq('patient_id', patientId)
    .eq('visit_day', visitDay)
    .single()

  if (error?.code === 'PGRST116') {
    const { data: created } = await supabase
      .from('patient_interviews')
      .insert({ user_id: user.id, week_id: weekId, patient_id: patientId, visit_day: visitDay, transcript: [] })
      .select()
      .single()
    data = created
  }

  return data
}

/** Append a message to the interview transcript */
export async function appendTranscript(interviewId, message) {
  const supabase = createClient()

  // Fetch current transcript
  const { data: interview } = await supabase
    .from('patient_interviews')
    .select('transcript')
    .eq('id', interviewId)
    .single()

  const currentTranscript = interview?.transcript ?? []
  const updatedTranscript = [...currentTranscript, { ...message, timestamp: new Date().toISOString() }]

  await supabase
    .from('patient_interviews')
    .update({ transcript: updatedTranscript })
    .eq('id', interviewId)

  return updatedTranscript
}

/** Mark an interview as completed */
export async function completeInterview(interviewId) {
  const supabase = createClient()
  await supabase
    .from('patient_interviews')
    .update({ status: 'completed', completed_at: new Date().toISOString() })
    .eq('id', interviewId)
}

/** Log a hidden information disclosure */
export async function logHiddenInfo(interviewId, { hiddenInfoId, discovered, triggerQuestion, missed, gradingImpact }) {
  const supabase = createClient()

  // Upsert to handle re-discoveries
  await supabase
    .from('hidden_info_logs')
    .upsert({
      interview_id: interviewId,
      hidden_info_id: hiddenInfoId,
      discovered,
      trigger_question: triggerQuestion,
      missed,
      grading_impact: gradingImpact,
    }, { onConflict: 'interview_id,hidden_info_id' })
}

/** Get all hidden info logs for an interview */
export async function getHiddenInfoLogs(interviewId) {
  const supabase = createClient()
  const { data } = await supabase
    .from('hidden_info_logs')
    .select('*')
    .eq('interview_id', interviewId)

  return data ?? []
}
