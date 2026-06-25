import React, { useState } from 'react'
import { buildAttempt, isCorrect, scoreAttempt } from '../../lib/quizEngine'
import { Badge } from '../ui'
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft, RotateCw, Award, AlertTriangle, Unlock } from 'lucide-react'

const TYPE_LABEL = { sba: 'Single best answer', sata: 'Select all that apply', ktype: 'Combination (K-type)' }

export default function QuizEngine({ items, passThreshold, onRecord, onExit, onPassed }) {
  const [attempt, setAttempt] = useState(() => buildAttempt(items))
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [checked, setChecked] = useState({})
  const [finished, setFinished] = useState(false)
  const [score, setScore] = useState(0)

  const item = attempt[idx]
  const multi = item?.type === 'sata'
  const selected = answers[item?.id] || []
  const isChecked = !!checked[item?.id]
  const last = idx === attempt.length - 1

  function toggle(key) {
    if (isChecked) return
    setAnswers(a => {
      const cur = a[item.id] || []
      if (multi) return { ...a, [item.id]: cur.includes(key) ? cur.filter(k => k !== key) : [...cur, key] }
      return { ...a, [item.id]: [key] }
    })
  }

  function check() {
    if (selected.length === 0) return
    setChecked(c => ({ ...c, [item.id]: true }))
  }

  function finish() {
    const s = scoreAttempt(attempt, answers)
    setScore(s)
    onRecord?.(s)
    setFinished(true)
    if (s >= passThreshold) onPassed?.()
  }

  function retry() {
    setAttempt(buildAttempt(items)); setIdx(0); setAnswers({}); setChecked({}); setFinished(false); setScore(0)
  }

  // ---------------- Result screen ----------------
  if (finished) {
    const passed = score >= passThreshold
    const missed = attempt.filter(it => !isCorrect(it, answers[it.id] || []))
    return (
      <div className="max-w-2xl mx-auto">
        <div className={`rounded-2xl border p-6 text-center ${passed ? 'border-teal/30 bg-teal/5' : 'border-amber-200 bg-amber-50'}`}>
          {passed ? <Award size={32} className="mx-auto text-teal mb-2" /> : <AlertTriangle size={32} className="mx-auto text-amber-500 mb-2" />}
          <p className="font-head text-3xl text-navy">{score}%</p>
          <p className={`text-[14px] font-semibold mt-1 ${passed ? 'text-teal' : 'text-amber-600'}`}>
            {passed ? 'Passed — Tuesday is now unlocked' : `Below the ${passThreshold}% threshold — reshuffle and try again`}
          </p>
          <p className="text-[12px] text-slate-500 mt-1">{attempt.length - missed.length} of {attempt.length} correct</p>
          {passed && (
            <div className="inline-flex items-center gap-1.5 mt-3 text-[12px] font-semibold text-teal bg-white px-3 py-1.5 rounded-lg ring-1 ring-teal/20">
              <Unlock size={14} /> Tuesday initial visits unlocked
            </div>
          )}
        </div>

        {missed.length > 0 && (
          <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-[12px] font-bold uppercase tracking-wide text-slate-500 mb-2">Concepts to review</p>
            <div className="flex flex-wrap gap-1.5">
              {missed.map(m => (
                <span key={m.id} className="inline-flex items-center gap-1.5 text-[12px] px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-600">
                  <Badge tone="teal">{m.disease}</Badge>
                  {m.concept_tag.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between">
          <button onClick={onExit} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 hover:text-navy">
            <ChevronLeft size={16} /> Back to Monday
          </button>
          <button onClick={retry} className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-[13px] font-semibold text-white hover:bg-navydark transition">
            <RotateCw size={15} /> Retake (reshuffled)
          </button>
        </div>
      </div>
    )
  }

  // ---------------- Question screen ----------------
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <button onClick={onExit} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-500 hover:text-navy">
          <ChevronLeft size={16} /> Exit quiz
        </button>
        <span className="text-[12px] font-semibold text-slate-400">Question {idx + 1} of {attempt.length}</span>
      </div>

      <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden mb-5">
        <div className="h-full bg-teal transition-all" style={{ width: `${((idx + (isChecked ? 1 : 0)) / attempt.length) * 100}%` }} />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge tone="teal">{item.disease}</Badge>
          <span className="text-[11px] font-semibold text-slate-400">{TYPE_LABEL[item.type]}</span>
        </div>
        <p className="text-[15px] text-slate-800 leading-relaxed whitespace-pre-line mb-4">{item.stem}</p>

        <div className="space-y-2">
          {item.options.map(o => {
            const on = selected.includes(o.key)
            const correct = item.correct.includes(o.key)
            let cls = 'border-slate-200 hover:border-teal/40'
            if (isChecked) {
              if (correct) cls = 'border-teal bg-teal/5'
              else if (on) cls = 'border-red-300 bg-red-50'
              else cls = 'border-slate-200 opacity-70'
            } else if (on) cls = 'border-teal bg-teal/5'
            return (
              <button key={o.key} onClick={() => toggle(o.key)} disabled={isChecked}
                className={`w-full text-left flex items-start gap-3 rounded-lg border px-3.5 py-2.5 transition ${cls}`}>
                <span className={`mt-0.5 grid place-items-center w-5 h-5 shrink-0 ${multi ? 'rounded' : 'rounded-full'} border-2 ${on ? 'border-teal bg-teal text-white' : 'border-slate-300'}`}>
                  {on && <CheckCircle2 size={12} />}
                </span>
                <span className="text-[14px] text-slate-700 flex-1">{o.text}</span>
                {isChecked && correct && <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />}
                {isChecked && on && !correct && <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />}
              </button>
            )
          })}
        </div>

        {isChecked && (
          <div className={`mt-4 rounded-lg border p-3.5 fade-up ${isCorrect(item, selected) ? 'border-teal/30 bg-teal/5' : 'border-amber-200 bg-amber-50'}`}>
            <p className={`text-[12px] font-bold mb-1 ${isCorrect(item, selected) ? 'text-teal' : 'text-amber-600'}`}>
              {isCorrect(item, selected) ? 'Correct' : 'Not quite'}
            </p>
            <p className="text-[13px] text-slate-700 leading-relaxed">{item.rationale}</p>
          </div>
        )}

        <div className="mt-5 flex items-center justify-end gap-2">
          {!isChecked ? (
            <button onClick={check} disabled={selected.length === 0}
              className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-[13px] font-semibold transition ${
                selected.length === 0 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-teal text-white hover:bg-teal/90'}`}>
              Check answer
            </button>
          ) : last ? (
            <button onClick={finish} className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-[13px] font-semibold text-white hover:bg-navydark transition">
              Finish & score <ChevronRight size={15} />
            </button>
          ) : (
            <button onClick={() => setIdx(i => i + 1)} className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-[13px] font-semibold text-white hover:bg-navydark transition">
              Next question <ChevronRight size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
