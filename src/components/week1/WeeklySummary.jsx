import React from 'react'
import { loadCaseState } from '../../lib/storage'
import { ChevronLeft, Award, GraduationCap, ClipboardList, FlaskConical, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react'

const band = pct => pct >= 85 ? { t: 'text-teal', b: 'bg-teal/10' } : pct >= 65 ? { t: 'text-teal', b: 'bg-teal/5' } : pct >= 40 ? { t: 'text-amber-600', b: 'bg-amber-50' } : { t: 'text-red-500', b: 'bg-red-50' }

export default function WeeklySummary({ week, onBack }) {
  const { patients, clinicDays, days, caseId, journal, module, keys, state } = week
  const dayLabel = k => days.find(d => d.key === k)?.label || k
  const quiz = state.loadQuiz()
  const totalCases = clinicDays.length * patients.length

  const rows = patients.map(p => {
    const cells = clinicDays.map(d => {
      const st = loadCaseState(caseId(p.id, d))
      return { day: d, graded: st.graded === true, score: typeof st.soapScore === 'number' ? st.soapScore : null }
    })
    return { patient: p, cells }
  })

  const scores = rows.flatMap(r => r.cells).filter(c => c.score != null).map(c => c.score)
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null
  const gradedCount = rows.flatMap(r => r.cells).filter(c => c.graded).length
  const journalDone = state.journalComplete()

  const jc = loadCaseState(journal.id)
  const jcAnswered = journal.questions.filter(q => (jc.responses?.[q.id] || '').trim().length > 0).length
  const jcTotal = journal.questions.length

  // strengths / growth heuristics
  const strengths = []
  const growth = []
  if (quiz.bestScore >= 90) strengths.push('Demonstrated guideline mastery on the Monday gate (≥90%).')
  else growth.push('Revisit the Monday guideline concepts to lift the quiz above 90%.')
  if (avg != null && avg >= 85) strengths.push('Consistently strong, well-supported SOAP documentation across encounters.')
  else if (avg != null && avg >= 65) strengths.push('Solid SOAP documentation — refine assessment depth and plan specificity.')
  else if (avg != null) growth.push('Strengthen SOAP notes — anchor the assessment and plan to guideline targets and the discovered interview findings.')
  if (gradedCount < totalCases) growth.push(`Complete the remaining ${totalCases - gradedCount} patient case${totalCases - gradedCount === 1 ? '' : 's'} to finish the clinical week.`)
  if (journalDone) strengths.push(`Applied trial evidence (${journal.trial?.name || 'journal club'}) to the correct high-risk patient phenotype.`)
  else growth.push('Finish the journal club to connect evidence to bedside decisions.')

  const debriefDone = loadCaseState(keys.debrief).done === true
  if (debriefDone) strengths.push('Completed a reflective 1:1 preceptor debrief on the week.')
  else if (journalDone) growth.push('Sit down for your 1:1 preceptor debrief to close out the week.')

  const SUMMARY_KEY = `summary-${week.id}`
  const [aiSummary, setAiSummary] = React.useState(() => {
    const s = loadCaseState(SUMMARY_KEY)
    return s.overall_weekly_score ? s : null
  })
  const [loadingAi, setLoadingAi] = React.useState(false)

  async function generateAiSummary() {
    setLoadingAi(true)
    try {
      const res = await fetch('/api/ai/weekly-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: 'Demo Student', // In real app, fetch from Supabase auth
          weekNumber: week.index,
          weekTitle: module.title,
          diseaseStates: ['Hypertension', 'Type 2 Diabetes', 'Hyperlipidemia', 'Obesity', 'CKD Risk'],
          quizFirstScore: quiz.firstScore || quiz.attempts[0]?.score || 0,
          quizFinalScore: quiz.bestScore || 0,
          quizAttempts: quiz.attempts.length,
          soapScores: rows.flatMap(r => r.cells).filter(c => c.score != null).map(c => c.score),
          journalScore: journalDone ? (jc.aiGrade?.total_score || 100) : 0,
          hiddenInfoStats: { discovered: 10, total: 15 } // Simplified
        })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setAiSummary(data)
      saveCaseState(SUMMARY_KEY, data)
    } catch (err) {
      console.error(err)
      alert("Failed to generate AI summary.")
    } finally {
      setLoadingAi(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="text-white" style={{ background: 'linear-gradient(135deg,#13314f,#0d2138)' }}>
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center gap-3">
          <button onClick={onBack} className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition shrink-0">
            <ChevronLeft size={18} />
          </button>
          <div>
            <div className="flex items-center gap-2"><Award size={18} className="text-teal-200" /><h1 className="font-head text-2xl">Weekly Performance Summary</h1></div>
            <p className="text-[13px] text-slate-300">{module.title}</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        {/* top stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Stat icon={GraduationCap} label="Monday quiz (best)" value={quiz.bestScore ? `${quiz.bestScore}%` : '—'}
            sub={quiz.attempts.length ? `First ${quiz.firstScore ?? quiz.attempts[0]?.score}% · ${quiz.attempts.length} attempt${quiz.attempts.length === 1 ? '' : 's'}` : 'Not attempted'} good={quiz.bestScore >= 90} />
          <Stat icon={ClipboardList} label="Avg SOAP score" value={avg != null ? `${avg}%` : '—'} sub={`${gradedCount} of ${totalCases} cases graded`} good={avg != null && avg >= 65} />
          <Stat icon={FlaskConical} label={`${journal.trial?.name || 'Journal'} journal club`} value={journalDone ? 'Complete' : `${jcAnswered}/${jcTotal}`} sub={journalDone ? 'All prompts answered' : 'In progress'} good={journalDone} />
        </div>

        {/* SOAP matrix */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
          <h2 className="font-head text-lg text-navy mb-3">SOAP scores by patient & day</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="text-slate-400 text-[11px] uppercase tracking-wide">
                  <th className="text-left font-semibold py-2 pr-4">Patient</th>
                  {clinicDays.map(d => <th key={d} className="text-center font-semibold py-2 px-2">{dayLabel(d)}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.patient.id} className="border-t border-slate-100">
                    <td className="py-2.5 pr-4">
                      <span className="font-semibold text-navy">{r.patient.name}</span>
                      <span className="text-slate-400 ml-2 text-[12px]">{r.patient.tag}</span>
                    </td>
                    {r.cells.map(c => (
                      <td key={c.day} className="text-center py-2.5 px-2">
                        {c.score != null ? (
                          <span className={`inline-block min-w-[44px] px-2 py-1 rounded-lg font-bold ${band(c.score).b} ${band(c.score).t}`}>{c.score}%</span>
                        ) : c.graded ? (
                          <span className="text-slate-400">graded</span>
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Generator Button */}
        <div className="text-center py-4">
          <button onClick={generateAiSummary} disabled={loadingAi} className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-[14px] font-semibold text-white hover:bg-navydark transition disabled:opacity-50">
            {loadingAi ? 'Generating Comprehensive AI Summary...' : 'Generate Comprehensive AI Summary'}
          </button>
        </div>

        {/* AI Summary Display or Static Fallback */}
        {aiSummary ? (
          <div className="rounded-2xl border border-navy/20 bg-white shadow-sm overflow-hidden">
            <div className="bg-navy px-5 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-head text-xl text-white">AI Performance Evaluation</h3>
                <p className="text-[13px] text-teal-200">Overall Score: {aiSummary.overall_weekly_score}%</p>
              </div>
            </div>
            <div className="p-5 space-y-5">
              <div>
                <p className="text-[14px] text-slate-700 leading-relaxed italic border-l-2 border-teal pl-3">{aiSummary.summary_narrative}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <h4 className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-teal mb-2"><CheckCircle2 size={15}/> Key Strengths</h4>
                  <p className="text-[13px] text-slate-600 bg-teal/5 p-3 rounded-lg border border-teal/10">{aiSummary.key_strengths}</p>
                </div>
                <div>
                  <h4 className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-amber-600 mb-2"><AlertTriangle size={15}/> Reasoning Gaps</h4>
                  <p className="text-[13px] text-slate-600 bg-amber-50 p-3 rounded-lg border border-amber-100">{aiSummary.clinical_reasoning_gaps}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <p className="text-[11px] font-bold uppercase text-slate-500 mb-1">Missed Monitoring</p>
                  <p className="text-[12px] text-slate-700">{aiSummary.missed_monitoring_items}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <p className="text-[11px] font-bold uppercase text-slate-500 mb-1">Missed Counseling</p>
                  <p className="text-[12px] text-slate-700">{aiSummary.missed_counseling_points}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <p className="text-[11px] font-bold uppercase text-slate-500 mb-1">Missed Information</p>
                  <p className="text-[12px] text-slate-700">{aiSummary.missed_hidden_info}</p>
                </div>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <h4 className="text-[13px] font-bold text-navy mb-2">Recommendations for Next Week</h4>
                <p className="text-[13px] text-slate-600 mb-3">{aiSummary.recommendations}</p>
                <div className="flex items-center gap-2 text-[12px] text-blue-800 bg-blue-100/50 px-3 py-2 rounded">
                  <span className="font-semibold">Guideline Review:</span> {aiSummary.guideline_review_topics}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-teal/30 bg-teal/5 p-5">
              <p className="flex items-center gap-1.5 text-[13px] font-bold text-teal mb-2"><TrendingUp size={15} /> Key strengths</p>
              {strengths.length ? (
                <ul className="space-y-1.5">{strengths.map((s, i) => <li key={i} className="flex gap-2 text-[13px] text-slate-700"><CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />{s}</li>)}</ul>
              ) : <p className="text-[13px] text-slate-500">Complete more of the week to surface strengths.</p>}
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="flex items-center gap-1.5 text-[13px] font-bold text-amber-700 mb-2"><AlertTriangle size={15} /> Growth areas</p>
              {growth.length ? (
                <ul className="space-y-1.5">{growth.map((s, i) => <li key={i} className="flex gap-2 text-[13px] text-slate-700"><span className="text-amber-500 mt-0.5">•</span>{s}</li>)}</ul>
              ) : <p className="text-[13px] text-slate-600">No major gaps — strong week.</p>}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

function Stat({ icon: Icon, label, value, sub, good }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
      <div className="flex items-center gap-2 mb-1">
        <Icon size={15} className={good ? 'text-teal' : 'text-slate-400'} />
        <span className="text-[12px] font-semibold text-slate-500">{label}</span>
      </div>
      <p className={`font-head text-2xl ${good ? 'text-teal' : 'text-navy'}`}>{value}</p>
      <p className="text-[12px] text-slate-400">{sub}</p>
    </div>
  )
}
