import React, { useState } from 'react'
import { SectionTitle } from './ui'
import { generateSoapDraft } from '../lib/soapGenerator'
import { gradeSoap, gradeBand } from '../lib/grader'
import { GRADING_RUBRICS } from '../data/cases'
import granularRubrics from '../data/granular_rubrics.json'
import {
  Wand2, Copy, Check, AlertTriangle, GraduationCap, CheckCircle2, Circle,
  TrendingUp, ShieldAlert, Lightbulb, ListChecks, ChevronDown, ChevronRight, ShieldCheck, FileDown
} from 'lucide-react'

const SECTIONS = [
  { key: 'subjective', label: 'Subjective', placeholder: 'HPI, Medication History, Social History, Family History, Self-Management.' },
  { key: 'objective', label: 'Objective', placeholder: 'panel-grouped labs, H/L flags, and the Physical Exam section.' },
  { key: 'assessment', label: 'Assessment', placeholder: 'per-problem reasoning + clinical-impression.' },
  { key: 'plan', label: 'Plan', placeholder: 'Include medication changes, monitoring, counseling, follow-up, and referrals…' },
]

const TONE = {
  teal: { ring: 'ring-teal/30', bg: 'bg-teal/5', text: 'text-teal', chip: 'bg-teal/10 text-teal ring-teal/20' },
  amber: { ring: 'ring-amber-300', bg: 'bg-amber-50', text: 'text-amber-700', chip: 'bg-amber-100 text-amber-800 ring-amber-200' },
  red: { ring: 'ring-red-300', bg: 'bg-red-50', text: 'text-red-700', chip: 'bg-red-100 text-red-700 ring-red-200' },
}

const NAME_TO_LETTER = {
  'Maria Gonzalez': 'A', 'James Wilson': 'B', 'Linda Martinez': 'C',
  'Michael Turner': 'A', 'Angela Rodriguez': 'B', 'David Chen': 'C',
  'Sarah Thompson': 'A', 'Robert "Bob" Jenkins': 'B', 'Robert Jenkins': 'C', 'Maria Thompson': 'C',
  'Michael Thompson': 'A', 'Angela Brooks': 'B', 'Sarah Mitchell': 'A', 'Jessica Ramirez': 'B', 'David Carter': 'C',
}

export function SOAPNoteTab({ c, state, soap, onChange, onGraded }) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)
  const [showRubric, setShowRubric] = useState(false)

  function generate() {
    const draft = generateSoapDraft(c, state)
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
          weekId: c.ENCOUNTER.week.split(' ')[1], // e.g. "Week 1 — Tuesday" -> "1"
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
        <button onClick={grade} disabled={loading || state.graded}
          className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2 text-[13px] font-semibold text-white hover:bg-teal/90 disabled:opacity-60 disabled:cursor-not-allowed transition">
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Grading…
            </span>
          ) : (
            <><GraduationCap size={15} /> {state.graded ? 'Already Graded' : 'Grade Against Model SOAP'}</>
          )}
        </button>
        <button onClick={copyAll}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition">
          {copied ? <><Check size={15} className="text-teal" /> Copied</> : <><Copy size={15} /> Copy note</>}
        </button>
        <button onClick={() => setShowRubric(!showRubric)}
          className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-[13px] font-semibold transition ${showRubric ? 'bg-navy text-white border-navy hover:bg-navydark' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
          <ListChecks size={15} /> Reference Rubric {showRubric ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
        </button>
      </div>

      {showRubric && (
        <div className="mb-4 rounded-xl border border-navy/20 bg-slate-50 shadow-sm p-4 animate-in slide-in-from-top-2">
          <div className="flex items-center gap-2 mb-3">
            <ListChecks size={18} className="text-navy" />
            <h3 className="font-head text-[15px] text-navy">Grading Checklist (Reference)</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
            {(() => {
              const weekId = c.ENCOUNTER.week.split(' ')[1]
              const letter = NAME_TO_LETTER[c.PATIENT.name]
              const visitDay = c.ENCOUNTER.day
              const rubricKey = `Week${weekId}_Patient_${letter}_${visitDay}`
              
              let items = c.PRECEPTOR?.checklist || []
              if (items.length === 0 && granularRubrics[rubricKey]) {
                items = granularRubrics[rubricKey].map(r => r.description)
              }
              
              if (items.length === 0) {
                return <li className="text-[12px] text-slate-500 italic">No checklist items available for this case.</li>
              }

              return items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-slate-700">
                  <ShieldCheck size={14} className="text-teal mt-0.5 shrink-0" /> {item}
                </li>
              ))
            })()}
          </ul>
        </div>
      )}

      {result && <Feedback result={result} patientName={c.PATIENT?.name} visitDay={c.ENCOUNTER?.day} weekLabel={c.ENCOUNTER?.week} />}

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

function Feedback({ result, patientName, visitDay, weekLabel }) {
  function downloadPdf() {
    const deductionRows = (result.itemized_deductions || [])
      .map(d => `<tr>
        <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;color:#475569;font-size:12px;white-space:nowrap">${d.id}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;font-size:12px">${d.reason}</td>
        <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;font-size:12px;text-align:center;color:${d.awarded_points === 0 ? '#dc2626' : '#d97706'}">${d.awarded_points}/${d.max_points}</td>
      </tr>`)
      .join('')

    const unsafeRows = (result.unsafe_flags || [])
      .map(f => `<div style="margin-bottom:6px;font-size:12px"><strong>${f.recommendation}:</strong> ${f.explanation}</div>`)
      .join('')

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>AI Feedback — ${patientName || 'Patient'} ${visitDay || ''}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1e293b; background: #fff; padding: 32px; }
    h1 { font-size: 20px; font-weight: 700; color: #0d2137; margin-bottom: 2px; }
    .meta { font-size: 12px; color: #64748b; margin-bottom: 20px; }
    .score-badge { display: inline-block; font-size: 28px; font-weight: 800; color: #0d9488; border: 3px solid #0d9488; border-radius: 50%; width: 64px; height: 64px; line-height: 58px; text-align: center; margin-bottom: 16px; }
    .section { margin-bottom: 20px; }
    .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #0d9488; margin-bottom: 6px; }
    .section-title.amber { color: #b45309; }
    .section-title.navy { color: #0d2137; }
    .section-title.red { color: #dc2626; }
    p { font-size: 13px; line-height: 1.6; color: #374151; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; }
    th { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: #94a3b8; text-align: left; padding: 6px 8px; border-bottom: 2px solid #e2e8f0; }
    th:last-child { text-align: center; }
    hr { border: none; border-top: 1px solid #e2e8f0; margin: 16px 0; }
    .disclaimer { font-size: 11px; color: #94a3b8; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px; }
    @media print { body { padding: 16px; } }
  </style>
</head>
<body>
  <h1>AI Grading Feedback</h1>
  <p class="meta">${weekLabel || ''} &nbsp;·&nbsp; ${patientName || 'Patient'} &nbsp;·&nbsp; ${visitDay || ''} &nbsp;·&nbsp; Generated ${new Date().toLocaleString()}</p>
  <div class="score-badge">${result.total_score || 0}%</div>

  ${unsafeRows ? `<div class="section"><div class="section-title red">⚠ Watch-outs (Unsafe Recommendations)</div>${unsafeRows}</div><hr/>` : ''}

  <div class="section">
    <div class="section-title">✓ Strengths</div>
    <p>${result.strengths || '—'}</p>
  </div>
  <hr/>
  <div class="section">
    <div class="section-title amber">⬡ Opportunities to Improve</div>
    <p>${result.improvement_guidance || '—'}</p>
  </div>
  ${
    (result.itemized_deductions || []).length > 0 ? `
  <hr/>
  <div class="section">
    <div class="section-title amber">Itemised Deductions</div>
    <table>
      <thead><tr><th>ID</th><th>Reason</th><th>Score</th></tr></thead>
      <tbody>${deductionRows}</tbody>
    </table>
  </div>` : ''
  }
  <hr/>
  <div class="section">
    <div class="section-title navy">⚑ Gold Standard Comparison</div>
    <p>${result.gold_standard_comparison || '—'}</p>
  </div>

  <p class="disclaimer">This is AI-generated formative feedback — a study aid. Use your preceptor's judgment as the final word.</p>
</body>
</html>`

    const win = window.open('', '_blank', 'width=900,height=700')
    win.document.write(html)
    win.document.close()
    win.onload = () => { win.focus(); win.print() }
  }
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
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-head text-lg text-navy">AI Feedback</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ring-1 ${t.chip}`}>{band.label}</span>
          </div>
          <p className="text-[13px] text-slate-600 mt-0.5">{band.note}</p>
        </div>
        <button
          onClick={downloadPdf}
          title="Download feedback as PDF"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-[12px] font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition shrink-0"
        >
          <FileDown size={14} /> Download PDF
        </button>
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
