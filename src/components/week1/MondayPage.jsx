import React, { useState, useEffect } from 'react'
import { createClient } from '../../lib/supabase/client'
import QuizEngine from './QuizEngine'
import { FileText, GraduationCap, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react'

export default function MondayPage({ week, onPassed }) {
  const { guideline, quizItems, passThreshold, state } = week
  const [quizOpen, setQuizOpen] = useState(false)
  const best = state.quizBest()
  const passed = state.quizPassed()
  const [dynamicGuidelines, setDynamicGuidelines] = useState([])

  useEffect(() => {
    async function loadGuidelines() {
      const supabase = createClient()
      const { data } = await supabase
        .from('weeks')
        .select('guideline_links')
        .eq('week_number', week.index)
        .single()
        
      if (data?.guideline_links) {
        setDynamicGuidelines(data.guideline_links)
      }
    }
    loadGuidelines()
  }, [week.index])

  if (quizOpen) {
    return (
      <QuizEngine
        items={quizItems}
        passThreshold={passThreshold}
        onRecord={(s) => state.recordQuizAttempt(s)}
        onExit={() => setQuizOpen(false)}
        onPassed={() => { onPassed?.() }}
      />
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-1">
        <BookOpen size={18} className="text-teal" />
        <h2 className="font-head text-xl text-navy">Guideline Review</h2>
      </div>
      <p className="text-[13px] text-slate-500 mb-5 leading-relaxed">{guideline.intro}</p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {guideline.sections.map(sec => (
          <div key={sec.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="px-5 py-3 text-white flex items-center justify-between" style={{ background: `#${sec.color}` }}>
              <h3 className="font-head text-[15px]">{sec.title}</h3>
            </div>
            <div className="p-5">
              <dl className="space-y-3">
                {sec.points.map(pt => (
                  <div key={pt.label}>
                    <dt className="text-[12px] font-bold uppercase tracking-wide text-slate-500">{pt.label}</dt>
                    <dd className="text-[13px] text-slate-700 leading-relaxed mt-0.5">{pt.text}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-400">
                  <FileText size={14} /> Full guideline: {sec.pdf}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {dynamicGuidelines.length > 0 && (
        <div className="mb-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-5">
          <h3 className="font-head text-[15px] text-navy mb-3">Supplementary Uploaded Guidelines</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {dynamicGuidelines.map(g => (
              <a key={g.id} href={g.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 p-3 rounded-lg border border-slate-100 bg-slate-50 hover:border-teal-300 hover:bg-teal-50 transition">
                <FileText size={18} className="text-teal-600 shrink-0" />
                <span className="text-[13px] font-medium text-slate-700 truncate">{g.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Quiz launcher */}
      <div className={`rounded-2xl border shadow-sm p-5 ${passed ? 'border-teal/30 bg-teal/5' : 'border-slate-200 bg-white'}`}>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className={`grid place-items-center w-14 h-14 rounded-2xl shrink-0 ${passed ? 'bg-teal text-white' : 'bg-navy text-white'}`}>
            {passed ? <CheckCircle2 size={24} /> : <GraduationCap size={24} />}
          </div>
          <div className="flex-1">
            <h3 className="font-head text-lg text-navy">Monday Quiz</h3>
            <p className="text-[13px] text-slate-600 leading-snug">
              NAPLEX-inspired clinical-reasoning items. Immediate rationale after each
              question; unlimited, reshuffled retries. Tuesday unlocks at <strong>≥{passThreshold}%</strong>.
            </p>
            {best > 0 && (
              <p className="text-[12px] mt-1.5 font-semibold text-slate-500">
                Best score: <span className={passed ? 'text-teal' : 'text-amber-600'}>{best}%</span>{passed ? ' — passed' : ` — need ${passThreshold}%`}
              </p>
            )}
          </div>
          <button onClick={() => setQuizOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-teal px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-teal/90 transition shrink-0">
            {best > 0 ? 'Retake quiz' : 'Start quiz'} <ChevronRight size={15} />
          </button>
        </div>
      </div>

      <p className="text-[11px] text-slate-400 mt-3">
        Demo note: this quiz shows a representative {quizItems.length}-item sample across both disease states, in all three formats. Additional items drop into the week’s quiz file in the same shape — order and options reshuffle every attempt.
      </p>
    </div>
  )
}
