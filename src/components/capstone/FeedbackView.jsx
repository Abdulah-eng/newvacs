import React from 'react'
import { CheckCircle2, XCircle, ChevronRight, AlertCircle, ArrowRight } from 'lucide-react'

export default function FeedbackView({ evaluation, onContinue }) {
  if (!evaluation) return null
  
  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'exemplary': return 'text-teal-600 bg-teal-50 border-teal-200'
      case 'proficient': return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'developing': return 'text-amber-600 bg-amber-50 border-amber-200'
      case 'inadequate': return 'text-red-600 bg-red-50 border-red-200'
      default: return 'text-slate-600 bg-slate-50 border-slate-200'
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 py-10 space-y-8">
      {/* Top Banner */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row items-center p-8 gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-navy mb-2">Evaluation Complete</h2>
          <p className="text-slate-600 mb-6">The AI Preceptor has reviewed your manuscript against the grading calibration key.</p>
          
          {evaluation.numeric_score !== undefined && evaluation.letter_grade && (
            <div className="flex items-center gap-4 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="text-4xl font-black text-navy">{evaluation.numeric_score.toFixed(1)}</div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Final Score</span>
                <span className="text-lg font-bold text-teal-600">Grade: {evaluation.letter_grade}</span>
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(evaluation.overall_accuracy_level)}`}>
              Accuracy: {evaluation.overall_accuracy_level}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(evaluation.overall_critical_reasoning_level)}`}>
              Critical Reasoning: {evaluation.overall_critical_reasoning_level}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(evaluation.overall_clinical_application_level)}`}>
              Clinical App: {evaluation.overall_clinical_application_level}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(evaluation.overall_communication_level)}`}>
              Communication: {evaluation.overall_communication_level}
            </span>
          </div>
          <button onClick={onContinue} className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors shadow-md">
            Start Live Q&A <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* General Narrative Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-semibold text-teal-600 flex items-center gap-2 mb-3">
            <CheckCircle2 size={18} /> Strengths
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{evaluation.general_feedback.strengths}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-semibold text-amber-600 flex items-center gap-2 mb-3">
            <AlertCircle size={18} /> Weaknesses
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{evaluation.general_feedback.weaknesses}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:col-span-2 bg-slate-50">
          <h3 className="font-semibold text-indigo-600 flex items-center gap-2 mb-3">
            <ArrowRight size={18} /> Guidance for Improvement
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{evaluation.general_feedback.improvement_guidance}</p>
        </div>
      </div>

      {/* Section breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
          <h3 className="font-semibold text-navy">Section Breakdown</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {evaluation.sections.map(sec => (
            <div key={sec.sectionId} className="px-6 py-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h4 className="font-semibold text-navy">Section {sec.sectionId}: {sec.title}</h4>
                <div className="flex gap-2 text-[11px] uppercase tracking-wider font-bold">
                  <span className={`px-2 py-1 rounded border ${getLevelColor(sec.accuracy_level)}`}>Acc: {sec.accuracy_level}</span>
                  <span className={`px-2 py-1 rounded border ${getLevelColor(sec.critical_reasoning_level)}`}>Crit: {sec.critical_reasoning_level}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-xs font-semibold text-slate-500 uppercase mb-2">Subsection Completeness</h5>
                  <ul className="space-y-2">
                    {sec.subsections.map((sub, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        {sub.addressed ? <CheckCircle2 size={16} className="text-teal-500 mt-0.5 shrink-0" /> : <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />}
                        <span className={sub.addressed ? '' : 'text-slate-400 line-through'}>{sub.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-slate-500 uppercase mb-2">Section Feedback</h5>
                  <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed">
                    {sec.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
