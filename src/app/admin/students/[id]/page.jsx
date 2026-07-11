import React from 'react'
import { createClient } from '../../../../lib/supabase/server'
import { ArrowLeft, User, Activity, CheckCircle, Clock, Lock, XCircle } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  return { title: 'Student Progress | VACS Admin' }
}

export default async function StudentProgressPage({ params }) {
  const { id: studentId } = await params
  const supabase = await createClient()

  // 1. Fetch Student Profile
  const { data: student, error: studentError } = await supabase
    .from('profiles')
    .select(`
      *,
      cohort_members(
        cohort:cohorts(cohort_name)
      )
    `)
    .eq('id', studentId)
    .single()

  if (studentError || !student) {
    return notFound()
  }

  // 2. Fetch Weeks (to loop through 1 to 5)
  const { data: weeks } = await supabase
    .from('weeks')
    .select('id, week_number, title')
    .order('week_number', { ascending: true })

  // 3. Fetch Progress and Submissions for this student
  const [
    { data: swpData },
    { data: quizAttempts },
    { data: soapData },
    { data: journalData }
  ] = await Promise.all([
    supabase.from('student_week_progress').select('*').eq('user_id', studentId),
    supabase.from('quiz_attempts').select('week_id, score, passed, attempt_number').eq('user_id', studentId),
    supabase.from('soap_submissions').select('id, week_id, visit_day, soap_grades(total_score)').eq('user_id', studentId),
    supabase.from('journal_club_submissions').select('id, week_id, journal_club_grades(total_score)').eq('user_id', studentId)
  ])

  // Helper to find data for a specific week
  const getWeekData = (weekId) => {
    const swp = swpData?.find(p => p.week_id === weekId) || null
    const quizzes = quizAttempts?.filter(q => q.week_id === weekId) || []
    
    // Highest quiz score
    const bestQuiz = quizzes.length > 0 
      ? quizzes.reduce((best, current) => (current.score > best.score ? current : best)) 
      : null

    const soaps = soapData?.filter(s => s.week_id === weekId) || []
    const getSoapScore = (day) => {
      const sub = soaps.find(s => s.visit_day === day)
      if (!sub) return null
      // soap_grades is an array or object depending on relation (one-to-one is object usually, but let's handle array too)
      const grades = Array.isArray(sub.soap_grades) ? sub.soap_grades[0] : sub.soap_grades
      return grades?.total_score ?? 'Pending Grade'
    }

    const journal = journalData?.find(j => j.week_id === weekId)
    const journalGrade = Array.isArray(journal?.journal_club_grades) 
      ? journal.journal_club_grades[0] 
      : journal?.journal_club_grades
    const journalScore = journalGrade?.total_score ?? (journal ? 'Pending Grade' : null)

    return { swp, bestQuiz, attempts: quizzes.length, soaps: { tue: getSoapScore('tue'), wed: getSoapScore('wed'), thu: getSoapScore('thu') }, journalScore }
  }

  const cohorts = student.cohort_members.map(m => m.cohort?.cohort_name).filter(Boolean)

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link href="/admin/students" className="inline-flex items-center gap-2 text-[13px] font-medium text-slate-500 hover:text-teal transition mb-4">
          <ArrowLeft size={14} /> Back to Students
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 flex items-center justify-center border border-teal/10">
            <User size={28} className="text-teal" />
          </div>
          <div>
            <h1 className="font-head text-3xl text-navy">{student.full_name || 'Pending Invite'}</h1>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-slate-500 text-sm">{student.email}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex gap-1.5">
                {cohorts.length > 0 ? cohorts.map((c, i) => (
                  <span key={i} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 rounded text-[12px] font-medium">
                    {c}
                  </span>
                )) : <span className="text-[12px] text-slate-400 italic">No cohort</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Breakdown */}
      <div className="space-y-6">
        {weeks?.map(week => {
          const { swp, bestQuiz, attempts, soaps, journalScore } = getWeekData(week.id)
          
          return (
            <div key={week.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <div>
                  <h3 className="font-head text-lg text-navy">Week {week.week_number}</h3>
                  <p className="text-sm text-slate-500">{week.title}</p>
                </div>
                <div>
                  <StatusBadge status={swp?.weekly_complete ? 'completed' : swp ? 'in_progress' : 'locked'} />
                </div>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                
                {/* Quiz */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Monday Quiz</h4>
                  {bestQuiz ? (
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-end gap-2 mb-1">
                        <span className={`text-2xl font-bold ${bestQuiz.passed ? 'text-teal' : 'text-red-500'}`}>
                          {bestQuiz.score}%
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-500 font-medium">Attempts: {attempts}</p>
                    </div>
                  ) : (
                    <EmptyState status={swp?.mon_status} />
                  )}
                </div>

                {/* Patient A */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tuesday SOAP</h4>
                  {soaps.tue !== null ? (
                    <ScoreCard score={soaps.tue} />
                  ) : (
                    <EmptyState status={swp?.tue_status} />
                  )}
                </div>

                {/* Patient B */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Wednesday SOAP</h4>
                  {soaps.wed !== null ? (
                    <ScoreCard score={soaps.wed} />
                  ) : (
                    <EmptyState status={swp?.wed_status} />
                  )}
                </div>

                {/* Patient C */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Thursday SOAP</h4>
                  {soaps.thu !== null ? (
                    <ScoreCard score={soaps.thu} />
                  ) : (
                    <EmptyState status={swp?.thu_status} />
                  )}
                </div>

                {/* Journal Club */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Friday Journal</h4>
                  {journalScore !== null ? (
                    <ScoreCard score={journalScore} />
                  ) : (
                    <EmptyState status={swp?.fri_status} />
                  )}
                </div>

              </div>
            </div>
          )
        })}

        {!weeks || weeks.length === 0 && (
          <div className="p-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
            No curriculum weeks found.
          </div>
        )}
      </div>
    </div>
  )
}

function ScoreCard({ score }) {
  if (score === 'Pending Grade') {
    return (
      <div className="bg-amber-50 rounded-xl p-3 border border-amber-100 flex items-center gap-2 text-amber-700">
        <Activity size={16} />
        <span className="text-[13px] font-semibold">Grading...</span>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
      <div className="flex items-end gap-1 mb-1">
        <span className="text-2xl font-bold text-navy">{score}</span>
        <span className="text-sm font-medium text-slate-400 mb-1">/ 100</span>
      </div>
    </div>
  )
}

function EmptyState({ status }) {
  if (status === 'unlocked' || status === 'in_progress') {
    return (
      <div className="h-[76px] bg-blue-50/50 rounded-xl border border-blue-100 flex flex-col items-center justify-center text-blue-400">
        <Clock size={18} className="mb-1" />
        <span className="text-[11px] font-semibold uppercase tracking-wider">In Progress</span>
      </div>
    )
  }
  
  return (
    <div className="h-[76px] bg-slate-50/50 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-slate-300">
      <Lock size={18} className="mb-1" />
      <span className="text-[11px] font-semibold uppercase tracking-wider">Locked</span>
    </div>
  )
}

function StatusBadge({ status }) {
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[12px] font-bold tracking-wide uppercase">
        <CheckCircle size={14} /> Completed
      </span>
    )
  }
  if (status === 'in_progress') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[12px] font-bold tracking-wide uppercase">
        <Activity size={14} /> In Progress
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[12px] font-bold tracking-wide uppercase">
      <Lock size={14} /> Not Started
    </span>
  )
}
