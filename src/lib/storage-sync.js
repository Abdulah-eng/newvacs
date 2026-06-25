import { createClient } from './supabase/client'
import { saveSoapSubmission, saveSoapGrade } from './db/soap'
import { getOrCreateInterview, appendTranscript, logHiddenInfo } from './db/interview'
import { startQuizAttempt, submitQuizAttempt } from './db/quiz'
import { saveJournalResponses, saveJournalGrade } from './db/journal'
import { saveWeeklySummary } from './db/summary'

// Fire and forget sync from localStorage to Supabase
export async function syncToSupabase(caseId, state) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return // Not logged in

    // 0. Weekly Summary
    if (caseId.startsWith('summary-')) {
      const weekId = caseId.split('-')[1] || 'week1'
      if (state.overall_weekly_score !== undefined) {
        await saveWeeklySummary(weekId, {
          quiz_first_score: state._meta?.quizFirstScore || 0,
          quiz_final_score: state._meta?.quizFinalScore || 0,
          journal_score: state._meta?.journalScore || 0,
          overall_score: state.overall_weekly_score,
          summary_json: state
        })
      }
      return
    }

    // 1. Check if this is a journal club
    if (caseId.startsWith('journal-')) {
      const weekId = caseId.split('-')[1] || 'week1'
      const submission = await saveJournalResponses(weekId, {
        responses: state.responses || {},
        revealed_keys: state.revealed || {},
        self_ratings: state.ratings || {}
      })
      if (state.aiGrade && submission) {
        await saveJournalGrade(submission.id, {
          total_score: state.aiGrade.total_score || 0,
          feedback_json: state.aiGrade
        })
      }
      return
    }

    // 2. Check if this is a quiz
    if (caseId.includes('-quiz')) {
      const attempts = state.attempts || []
      // Just save the most recent attempt
      if (attempts.length > 0) {
        const lastAttempt = attempts[attempts.length - 1]
        const attempt = await startQuizAttempt('week1')
        if (attempt) {
          await submitQuizAttempt(attempt.id, {
            score: lastAttempt.score,
            passed: lastAttempt.passed,
          })
        }
      }
      return
    }

    // 3. Otherwise, it is a patient encounter (e.g. maria-tue)
    const [patientId, day] = caseId.split('-')
    if (!patientId || !day) return
    const weekId = 'week1'

    // Interview
    if (state.chat && state.chat.length > 0) {
      const interview = await getOrCreateInterview(weekId, patientId, day)
      if (interview) {
        // We just append the latest message to avoid fetching the whole thing, but since localStorage stores the whole array, 
        // it's easier to just update the whole array
        await supabase
          .from('patient_interviews')
          .update({ transcript: state.chat })
          .eq('id', interview.id)
      }
    }

    // Hidden Info
    if (state.discovered) {
      const interview = await getOrCreateInterview(weekId, patientId, day)
      if (interview) {
        for (const [field, discovered] of Object.entries(state.discovered)) {
          if (discovered) {
            await logHiddenInfo(interview.id, {
              hiddenInfoId: field,
              discovered: true
            })
          }
        }
      }
    }

    // SOAP Submission
    if (state.soap) {
      const sub = await saveSoapSubmission(weekId, patientId, day, {
        subjective: state.soap.subjective || '',
        objective: state.soap.objective || '',
        assessment: state.soap.assessment || '',
        plan: state.soap.plan || '',
      })
      
      // SOAP Grade
      if (state.soapScore !== undefined && sub) {
        await saveSoapGrade(sub.id, {
          total_score: state.soapScore,
          is_passing: state.soapScore >= 65,
          feedback_json: state.soapFeedback || {}
        })
      }
    }

  } catch (err) {
    console.error('Failed to sync to Supabase in background:', err)
  }
}

// Fetch all DB state and hydrate localStorage so the SPA unlocks properly
export async function hydrateFromSupabase(weekId = 'week1') {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // 1. Quizzes
    const { data: quizzes } = await supabase
      .from('quiz_attempts')
      .select('*')
      .eq('user_id', user.id)
      .eq('week_id', weekId)

    if (quizzes && quizzes.length > 0) {
      const bestScore = Math.max(...quizzes.map(q => q.score))
      const passed = quizzes.some(q => q.passed)
      localStorage.setItem(`vacs::${weekId}-quiz`, JSON.stringify({
        attempts: quizzes.map(q => ({ score: q.score, passing: q.passed })),
        bestScore
      }))
    }

    // 2. Patient Interviews & Hidden Info
    const { data: interviews } = await supabase
      .from('patient_interviews')
      .select('*, hidden_info_logs(*)')
      .eq('user_id', user.id)
      .eq('week_id', weekId)

    // 3. SOAP Submissions
    const { data: soaps } = await supabase
      .from('soap_submissions')
      .select('*, soap_grades(*)')
      .eq('user_id', user.id)
      .eq('week_id', weekId)

    // We need to merge interview + SOAP by patient/day
    const cases = {}
    if (interviews) {
      for (const inv of interviews) {
        const key = `${inv.patient_id}-${inv.visit_day}`
        if (!cases[key]) cases[key] = {}
        cases[key].chat = inv.transcript || []
        
        const discovered = {}
        if (inv.hidden_info_logs) {
          inv.hidden_info_logs.forEach(log => {
            if (log.discovered) discovered[log.hidden_info_id] = true
          })
        }
        cases[key].discovered = discovered
      }
    }

    if (soaps) {
      for (const soap of soaps) {
        const key = `${soap.patient_id}-${soap.visit_day}`
        if (!cases[key]) cases[key] = {}
        cases[key].soap = {
          subjective: soap.subjective,
          objective: soap.objective,
          assessment: soap.assessment,
          plan: soap.plan
        }
        cases[key].graded = true
        cases[key].__progress = { subjective: true, objective: true, assessment: true, plan: true }
        
        if (soap.soap_grades && soap.soap_grades.length > 0) {
          const grade = soap.soap_grades[0]
          cases[key].soapScore = grade.total_score
          cases[key].soapFeedback = grade.feedback_json
        }
      }
    }

    // Save cases to localStorage
    for (const [key, state] of Object.entries(cases)) {
      localStorage.setItem(`vacs::${key}`, JSON.stringify(state))
    }

    // 4. Journal Club
    const { data: journals } = await supabase
      .from('journal_club_submissions')
      .select('*, journal_club_grades(*)')
      .eq('user_id', user.id)
      .eq('week_id', weekId)

    if (journals && journals.length > 0) {
      const journal = journals[0]
      const stateObj = {
        responses: journal.responses || {},
        revealed: journal.revealed_keys || {},
        ratings: journal.self_ratings || {}
      }
      if (journal.journal_club_grades && journal.journal_club_grades.length > 0) {
        stateObj.aiGrade = journal.journal_club_grades[0].feedback_json
      }
      localStorage.setItem(`vacs::journal-${weekId}`, JSON.stringify(stateObj))
    }

    // 5. Weekly Summary
    const { data: summaries } = await supabase
      .from('weekly_summaries')
      .select('*')
      .eq('user_id', user.id)
      .eq('week_id', weekId)

    if (summaries && summaries.length > 0) {
      localStorage.setItem(`vacs::summary-${weekId}`, JSON.stringify(summaries[0].summary_json))
    }

  } catch (err) {
    console.error('Failed to hydrate from Supabase:', err)
  }
}

