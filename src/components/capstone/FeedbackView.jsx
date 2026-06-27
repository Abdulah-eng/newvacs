import React from 'react'
import { CheckCircle2, XCircle, ChevronRight, MessageSquare } from 'lucide-react'

export default function FeedbackView({ evaluation, onContinue }) {
  if (!evaluation) return null
  
  const getScoreColor = (score) => {
    if (score >= 90) return 'text-teal-500'
    if (score >= 70) return 'text-amber-500'
    return 'text-red-500'
  }

  return (
    <div className="max-w-4xl mx-auto p-6 py-10 space-y-8">
      {/* Top Banner: Score */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row items-center p-8 gap-8">
        <div className="relative w-32 h-32 shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="10" />
            <circle cx="50" cy="50" r="45" fill="none" stroke={evaluation.totalScore >= 90 ? '#14b8a6' : evaluation.totalScore >= 70 ? '#f59e0b' : '#ef4444'} strokeWidth="10" strokeDasharray={`${evaluation.totalScore * 2.827} 282.7`} strokeLinecap="round" className="transition-all duration-1000" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-4xl font-bold font-head ${getScoreColor(evaluation.totalScore)}`}>{evaluation.totalScore}</span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest">/ 100</span>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-navy mb-2">Evaluation Complete</h2>
          <p className="text-slate-600 mb-6">The AI Preceptor has reviewed your manuscript against the rubric.</p>
          <button onClick={onContinue} className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors shadow-md">
            Start Live Q&A <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Narrative Feedback (4 parts) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-semibold text-teal-600 flex items-center gap-2 mb-3">
            <CheckCircle2 size={18} /> What Was Done Well
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{evaluation.feedback.doneWell}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-semibold text-amber-600 flex items-center gap-2 mb-3">
            <AlertCircle size={18} /> Opportunities for Improvement
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{evaluation.feedback.improvements}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-semibold text-red-600 flex items-center gap-2 mb-3">
            <XCircle size={18} /> Critical Omissions
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{evaluation.feedback.criticalOmissions}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 bg-blue-50/50">
          <h3 className="font-semibold text-blue-600 flex items-center gap-2 mb-3">
            <MessageSquare size={18} /> Clinical Pearls
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{evaluation.feedback.clinicalPearls}</p>
        </div>
      </div>

      {/* Section breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="font-semibold text-navy">Section Scores</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {evaluation.sectionScores.map(sec => (
            <div key={sec.sectionId} className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-700 text-sm">Section {sec.sectionId}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500" style={{ width: `${(sec.earned / sec.possible) * 100}%` }}></div>
                </div>
                <span className="text-sm font-semibold text-slate-600 w-12 text-right">{sec.earned} / {sec.possible}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Needed to silence React warning about missing AlertCircle (I used it above but forgot to import, actually let's just use XCircle or define it)
import { AlertCircle } from 'lucide-react'
