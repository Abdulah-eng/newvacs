/**
 * soap_submissions + soap_grades DB service
 */
import { createClient } from '../supabase/client'

/** Save or update a SOAP submission (upsert) */
export async function saveSoapSubmission(weekId, patientId, visitDay, { subjective, objective, assessment, plan, planPharmacologic, planNonPharmacologic, planMonitoring, planFollowup, planCounseling, planReferrals, interviewId }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data } = await supabase
    .from('soap_submissions')
    .upsert({
      user_id: user.id,
      week_id: weekId,
      patient_id: patientId,
      visit_day: visitDay,
      interview_id: interviewId ?? null,
      subjective,
      objective,
      assessment,
      plan,
      plan_pharmacologic: planPharmacologic,
      plan_non_pharmacologic: planNonPharmacologic,
      plan_monitoring: planMonitoring,
      plan_followup: planFollowup,
      plan_counseling: planCounseling,
      plan_referrals: planReferrals,
    }, { onConflict: 'user_id,week_id,patient_id,visit_day' })
    .select()
    .single()

  return data
}

/** Get a SOAP submission */
export async function getSoapSubmission(weekId, patientId, visitDay) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data } = await supabase
    .from('soap_submissions')
    .select('*, soap_grades(*)')
    .eq('user_id', user.id)
    .eq('week_id', weekId)
    .eq('patient_id', patientId)
    .eq('visit_day', visitDay)
    .single()

  return data
}

/** Save AI-generated SOAP grade */
export async function saveSoapGrade(soapId, gradeData) {
  const supabase = createClient()

  const { data } = await supabase
    .from('soap_grades')
    .upsert({ soap_id: soapId, ...gradeData }, { onConflict: 'soap_id' })
    .select()
    .single()

  return data
}

/** Check if a patient/day SOAP is graded */
export async function isSoapGraded(weekId, patientId, visitDay) {
  const sub = await getSoapSubmission(weekId, patientId, visitDay)
  return !!(sub?.soap_grades)
}
