import React, { useState } from 'react'
import { SectionTitle } from './ui'
import { generateSoapDraft } from '../lib/soapGenerator'
import { gradeSoap, gradeBand } from '../lib/grader'
import { GRADING_RUBRICS } from '../data/cases'
import {
  Wand2, Copy, Check, AlertTriangle, GraduationCap, CheckCircle2, Circle,
  TrendingUp, ShieldAlert, Lightbulb,
} from 'lucide-react'

const SECTIONS = [
  { key: 'subjective', label: 'Subjective', placeholder: 'Summarize HPI, adherence, symptoms, lifestyle, patient goals, and interview findings…' },
  { key: 'objective', label: 'Objective', placeholder: 'Include vitals, labs, medications, allergies, and objective monitoring…' },
  { key: 'assessment', label: 'Assessment', placeholder: 'Prioritize active clinical problems and explain guideline-based reasoning…' },
  { key: 'plan', label: 'Plan', placeholder: 'Include medication changes, monitoring, counseling, follow-up, and referrals…' },
]

const TONE = {
  teal: { ring: 'ring-teal/30', bg: 'bg-teal/5', text: 'text-teal', chip: 'bg-teal/10 text-teal ring-teal/20' },
  amber: { ring: 'ring-amber-300', bg: 'bg-amber-50', text: 'text-amber-700', chip: 'bg-amber-100 text-amber-800 ring-amber-200' },
  red: { ring: 'ring-red-300', bg: 'bg-red-50', text: 'text-red-700', chip: 'bg-red-100 text-red-700 ring-red-200' },
}

export function SOAPNoteTab({ c, state, soap, onChange, onGraded }) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)

  function generate() {
    const draft = generateSoapDraft(state, c)
    if (draft) {
      Object.entries(draft).forEach(([k, v]) => onChange(k, v))
    }
  }

  function copyAll() {
    const text = SECTIONS.map(s => `${s.label.toUpperCase()}\n${soap[s.key] || ''}`).join('\n\n')
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  async function grade() {
    setLoading(true)
    try {
      const res = await fetch('/api/ai/grade-soap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentSoap: soap,
          goldSoap: c.PRECEPTOR.plan, // using preceptor plan as gold standard
          transcript: state.chat || [],
          hiddenInfoLog: state.discovered || {},
          gradingCriteria: GRADING_RUBRICS[c.id],
          sourceHierarchy: 'Week 1', // Simplified for MVP
          patientName: c.PATIENT.name,
          visitDay: c.ENCOUNTER.day
        })
      })
      
      const gradeResult = await res.json()
      setResult(gradeResult)
      onGraded?.(gradeResult.total_score)
    } catch (err) {
      console.error('Failed to grade SOAP:', err)
      alert("Failed to reach the AI grader. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <SectionTitle sub="Draft the note, then grade it against the model SOAP for feedback">SOAP Note</SectionTitle>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <button onClick={generate}
          className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-[13px] font-semibold text-white hover:bg-navydark transition">
          <Wand2 size={15} /> Generate Draft from Inputs
        </button>
        <button onClick={grade} disabled={loading}
          className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2 text-[13px] font-semibold text-white hover:bg-teal/90 disabled:opacity-60 disabled:cursor-not-allowed transition">
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Grading…
            </span>
          ) : (
            <><GraduationCap size={15} /> Grade Against Model SOAP</>
          )}
        </button>
        <button onClick={copyAll}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition">
          {copied ? <><Check size={15} className="text-teal" /> Copied</> : <><Copy size={15} /> Copy note</>}
        </button>
      </div>

      {result && <Feedback result={result} />}

      <div className="mb-4 mt-4 flex items-start gap-2 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2">
        <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />
        <p className="text-[13px] text-amber-800">Review and edit before submission — generated drafts and automated feedback are a starting point, not a finished note.</p>
      </div>

      <div className="space-y-4">
        {SECTIONS.map(s => (
          <div key={s.key} className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-head text-[15px] text-navy">{s.label}</h3>
            </div>
            <div className="p-3">
              <textarea
                value={soap[s.key] || ''}
                onChange={e => onChange(s.key, e.target.value)}
                placeholder={s.placeholder}
                rows={s.key === 'subjective' || s.key === 'plan' ? 8 : 6}
                className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-[13px] leading-relaxed font-mono text-slate-800 outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Feedback({ result }) {
  if (!result || result.empty) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-5 text-center mt-4">
        <GraduationCap size={26} className="mx-auto mb-2 text-slate-300" />
        <p className="text-[13px] text-slate-500">There’s nothing to grade yet. Generate a draft or write your note, then grade it.</p>
      </div>
    )
  }

  // Handle errors from the API
  if (result.error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-5 mt-4">
        <p className="text-red-700 text-[13px] font-semibold">{result.error}</p>
      </div>
    )
  }

  const band = gradeBand(result.total_score || 0)
  const t = TONE[band.tone]

  return (
    <div className={`mt-4 rounded-xl border border-transparent shadow-sm overflow-hidden ring-1 ${t.ring}`}>
      <div className={`flex items-center gap-4 px-5 py-4 ${t.bg} border-b border-slate-100`}>
        <div className="grid place-items-center w-16 h-16 rounded-full bg-white shadow-sm shrink-0">
          <span className={`font-head text-2xl ${t.text}`}>{result.total_score || 0}%</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-head text-lg text-navy">AI Feedback</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ring-1 ${t.chip}`}>{band.label}</span>
          </div>
          <p className="text-[13px] text-slate-600 mt-0.5">{band.note}</p>
        </div>
      </div>

      {result.unsafe_flags && result.unsafe_flags.length > 0 && (
        <div className="px-5 py-3 border-b border-slate-100 bg-red-50/60">
          <p className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-red-700 mb-1.5">
            <ShieldAlert size={14} /> Watch-outs (Unsafe Recommendations)
          </p>
          <ul className="space-y-1.5">
            {result.unsafe_flags.map((f, i) => (
              <li key={i} className="text-[13px] text-red-800">
                <span className="font-semibold">{f.recommendation}:</span> <span className="text-red-700">{f.explanation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="px-5 py-4 divide-y divide-slate-100">
        <div className="pb-4">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-teal mb-2">
            <TrendingUp size={13} /> Strengths
          </p>
          <p className="text-[13px] text-slate-700 leading-relaxed">{result.strengths}</p>
        </div>

        <div className="py-4">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-amber-600 mb-2">
            <Lightbulb size={13} /> Opportunities to improve
          </p>
          <p className="text-[13px] text-slate-700 leading-relaxed mb-3">{result.improvement_guidance}</p>
          
          {result.missed_items && result.missed_items.length > 0 && (
            <ul className="space-y-1.5">
              {result.missed_items.map((m, i) => (
                <li key={i} className="flex gap-1.5 text-[13px] text-slate-600">
                  <Circle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                  <span><span className="font-semibold text-slate-700">{m.item}:</span> {m.clinical_importance}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-4">
          <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-navy mb-2">
            <GraduationCap size={13} /> Gold Standard Comparison
          </p>
          <p className="text-[13px] text-slate-700 leading-relaxed">{result.gold_standard_comparison}</p>
        </div>
      </div>

      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
        <p className="text-[11px] text-slate-400 leading-snug">
          This is AI-generated formative feedback. It’s a study aid — compare your reasoning with the full rationale in <strong>Preceptor View</strong>, and use your preceptor’s judgment as the final word.
        </p>
      </div>
    </div>
  )
}
