import React, { useState, useCallback } from 'react'
import { Card, AutoTextarea, Badge } from './ui'
import { JOURNAL_CLUB, SELF_RATINGS } from '../data/journalClub'
import { loadCaseState, saveCaseState } from '../lib/storage'
import {
  ChevronLeft, BookOpen, FlaskConical, Target, TrendingUp, ShieldCheck,
  CheckCircle2, Eye, EyeOff, Award, ListChecks,
} from 'lucide-react'

function progressOf(config, state) {
  const responses = state?.responses || {}
  const answered = config.questions.filter(q => (responses[q.id] || '').trim().length > 0).length
  return { answered, total: config.questions.length, complete: answered === config.questions.length }
}

export default function JournalClubPage({ onBack, config = JOURNAL_CLUB }) {
  const STATE_ID = config.id
  const [state, setState] = useState(() => {
    const s = loadCaseState(STATE_ID)
    return { responses: {}, revealed: {}, ratings: {}, ...s }
  })

  const update = useCallback((mutate) => {
    setState(prev => {
      const next = mutate({ ...prev })
      saveCaseState(STATE_ID, next)
      return next
    })
  }, [STATE_ID])

  const setResponse = (id, val) => update(s => ({ ...s, responses: { ...s.responses, [id]: val } }))
  const toggleAnswer = (id) => update(s => ({ ...s, revealed: { ...s.revealed, [id]: !s.revealed[id] } }))
  const setRating = (id, val) => update(s => ({ ...s, ratings: { ...s.ratings, [id]: val } }))

  const { answered, total, complete } = progressOf(config, state)
  const t = config.trial
  const JC = config

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="text-white" style={{ background: 'linear-gradient(135deg,#13314f,#0d2138)' }}>
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center gap-3">
          <button onClick={onBack} className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition shrink-0">
            <ChevronLeft size={18} />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-teal-200" />
              <h1 className="font-head text-2xl">{JC.title}</h1>
            </div>
            <p className="text-[13px] text-slate-300">{JC.subtitle}</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-[14px] text-slate-600 leading-relaxed mb-2">{JC.description}</p>
        <p className="text-[12px] text-slate-400 italic mb-6">{JC.citation}</p>

        {/* Progress / completion */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-white shadow-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-2 text-[13px] font-semibold text-slate-700">
              <ListChecks size={15} className="text-teal" /> Journal Club Progress: {answered} of {total} questions completed
            </span>
            {complete && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-teal/10 text-teal ring-1 ring-teal/20">
                <Award size={13} /> Weekly Journal Club Discussion Complete
              </span>
            )}
          </div>
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full bg-teal transition-all" style={{ width: `${(answered / total) * 100}%` }} />
          </div>
        </div>

        {/* Trial snapshot */}
        <Card title={`Trial Snapshot — ${t.name}`} icon={FlaskConical} color="0891b2" className="mb-6">
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
            {t.facts.map(f => (
              <div key={f.label} className="flex justify-between gap-3 text-[13px] border-b border-slate-50 py-1">
                <span className="text-slate-500">{f.label}</span>
                <span className="font-semibold text-slate-800 text-right">{f.value}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <SnapshotList icon={Target} color="13314f" title="Key inclusion criteria" items={t.inclusion} />
            <SnapshotList icon={Target} color="7c3aed" title="Primary endpoint (composite)" items={t.primaryEndpoint} />
          </div>

          <div className="mt-5">
            <p className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-slate-500 mb-2">
              <TrendingUp size={14} className="text-teal" /> Primary result
            </p>
            <div className="flex flex-wrap gap-2">
              {t.primaryResult.map(r => (
                <span key={r.label} className="inline-flex items-baseline gap-1.5 rounded-lg bg-slate-50 border border-slate-200 px-2.5 py-1.5 text-[12px]">
                  <span className="text-slate-500">{r.label}</span>
                  <span className="font-bold text-navy">{r.value}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-wide text-slate-500 mb-2">Key secondary outcomes</p>
              <ul className="space-y-1.5">
                {t.secondary.map(s => (
                  <li key={s.label} className="flex justify-between gap-3 text-[13px]">
                    <span className="text-slate-600">{s.label}</span>
                    <span className="font-semibold text-navy">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <SnapshotList icon={ShieldCheck} color="0d9488" title="Safety" items={t.safety} />
          </div>
        </Card>

        {/* Questions */}
        <h2 className="font-head text-xl text-navy mb-1">Clinical Application Questions</h2>
        <p className="text-[13px] text-slate-500 mb-4">Open-ended and applied — work through each before revealing the answer key. Responses autosave.</p>

        <div className="space-y-5">
          {JC.questions.map((q, i) => {
            const revealed = !!state.revealed[q.id]
            const answeredThis = (state.responses[q.id] || '').trim().length > 0
            return (
              <div key={q.id} className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-3">
                  <span className="grid place-items-center w-7 h-7 rounded-lg bg-navy text-white text-[13px] font-bold shrink-0">{i + 1}</span>
                  <h3 className="font-head text-[15px] text-navy flex-1">{q.title}</h3>
                  {answeredThis && <CheckCircle2 size={16} className="text-teal shrink-0" />}
                </div>
                <div className="p-5">
                  <p className="text-[13px] text-slate-700 leading-relaxed mb-3">{q.prompt}</p>

                  <label className="block text-[12px] font-semibold text-slate-600 mb-1">Your response</label>
                  <AutoTextarea value={state.responses[q.id]} onChange={v => setResponse(q.id, v)}
                                placeholder="Work through the trial data, patient-specific factors, and pharmacist judgment…" rows={6} saved />

                  <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                    <button onClick={() => toggleAnswer(q.id)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-[12px] font-semibold text-slate-700 hover:bg-slate-50 transition">
                      {revealed ? <><EyeOff size={14} /> Hide Answer Key</> : <><Eye size={14} /> Show Answer Key</>}
                    </button>
                  </div>

                  {revealed && (
                    <div className="mt-3 rounded-lg border border-teal/30 bg-teal/5 p-4 fade-up">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-teal mb-1.5">Answer key</p>
                      <p className="text-[13px] text-slate-700 leading-relaxed">{q.answer}</p>

                      <div className="mt-4 pt-3 border-t border-teal/20">
                        <p className="text-[12px] font-semibold text-slate-600 mb-2">Self-rating (optional): how does your response compare?</p>
                        <div className="flex flex-wrap gap-1.5">
                          {SELF_RATINGS.map(r => {
                            const on = state.ratings[q.id] === r.key
                            return (
                              <button key={r.key} onClick={() => setRating(q.id, r.key)}
                                className={`text-[12px] px-3 py-1.5 rounded-lg font-semibold transition ${
                                  on ? 'bg-teal text-white' : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'}`}>
                                {r.label}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {complete && !state.aiGrade && (
          <div className="mt-6 rounded-xl border border-teal/30 bg-teal/5 p-5 text-center">
            <Award size={26} className="mx-auto mb-2 text-teal" />
            <p className="font-head text-lg text-navy mb-3">Weekly Journal Club Discussion Complete</p>
            <p className="text-[13px] text-slate-600 mb-4">You’ve responded to all {total} questions. Ready to submit for comprehensive AI feedback?</p>
            
            <button onClick={async () => {
              update(s => ({ ...s, grading: true, gradeError: null }))
              try {
                const res = await fetch('/api/ai/grade-journal', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    studentResponses: Object.entries(state.responses).map(([id, text]) => ({ questionId: id, prompt: JC.questions.find(q=>q.id===id).prompt, answer: text })),
                    articleInterpretation: JC.questions.map(q => ({ questionId: q.id, expectedAnswer: q.answer })),
                    rubric: 'Assess understanding of trial data, patient-specific application, and monitoring/safety counseling.',
                    patientCases: 'Maria Gonzalez (T2DM, Hypertension, Obesity, Hyperlipidemia) - Case 1.',
                    weekTitle: JC.title
                  })
                })
                const result = await res.json()
                if (result.error) throw new Error(result.error)
                update(s => ({ ...s, aiGrade: result, grading: false }))
              } catch (e) {
                update(s => ({ ...s, grading: false, gradeError: e.message }))
              }
            }} disabled={state.grading}
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-teal/90 disabled:opacity-60 transition">
              {state.grading ? 'Analyzing Responses…' : 'Submit for AI Evaluation'}
            </button>
            {state.gradeError && <p className="text-red-600 mt-3 text-sm">{state.gradeError}</p>}
          </div>
        )}

        {state.aiGrade && (
          <div className="mt-8 rounded-xl border border-teal/30 bg-white shadow-sm overflow-hidden ring-1 ring-teal/30">
            <div className="flex items-center gap-4 px-5 py-4 bg-teal/5 border-b border-slate-100">
              <div className="grid place-items-center w-16 h-16 rounded-full bg-white shadow-sm shrink-0">
                <span className="font-head text-2xl text-teal">{state.aiGrade.total_score || 0}%</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-head text-lg text-navy">AI Feedback</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ring-1 bg-teal/10 text-teal ring-teal/20">Evaluation Complete</span>
                </div>
                <p className="text-[13px] text-slate-600 mt-0.5">Based on evidence understanding and patient application</p>
              </div>
            </div>
            
            <div className="px-5 py-4 divide-y divide-slate-100">
              <div className="pb-4">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-teal mb-2">
                  <TrendingUp size={13} /> Strengths
                </p>
                <p className="text-[13px] text-slate-700 leading-relaxed">{state.aiGrade.strengths}</p>
              </div>

              <div className="py-4">
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-amber-600 mb-2">
                  <CheckCircle2 size={13} /> Opportunities to Improve
                </p>
                <p className="text-[13px] text-slate-700 leading-relaxed mb-3">{state.aiGrade.improvement_guidance}</p>
                {state.aiGrade.gaps && (
                  <div className="text-[13px] text-slate-600 bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <span className="font-semibold text-slate-800">Missed Key Concepts: </span>{state.aiGrade.gaps}
                  </div>
                )}
              </div>
              
              <div className="pt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-[12px] font-bold text-slate-500 mb-1">Evidence Understanding</p>
                  <p className="text-lg font-head text-navy">{state.aiGrade.evidence_understanding_score}/20</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-[12px] font-bold text-slate-500 mb-1">Patient Application</p>
                  <p className="text-lg font-head text-navy">{state.aiGrade.patient_application_score}/25</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-[12px] font-bold text-slate-500 mb-1">Therapy Decisions</p>
                  <p className="text-lg font-head text-navy">{state.aiGrade.therapy_decision_score}/20</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <p className="text-[12px] font-bold text-slate-500 mb-1">Monitoring & Safety</p>
                  <p className="text-lg font-head text-navy">{state.aiGrade.monitoring_safety_score}/20</p>
                </div>
              </div>
            </div>
            
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
              <p className="text-[11px] text-slate-400 leading-snug">
                This is AI-generated formative feedback designed to help you synthesize literature with clinical practice.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function SnapshotList({ icon: Icon, color, title, items }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-slate-500 mb-2">
        <Icon size={14} style={{ color: `#${color}` }} /> {title}
      </p>
      <ul className="space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 text-[13px] text-slate-600 leading-snug">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: `#${color}` }} /> {it}
          </li>
        ))}
      </ul>
    </div>
  )
}
