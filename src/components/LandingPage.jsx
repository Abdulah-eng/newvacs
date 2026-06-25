import React from 'react'
import {
  Stethoscope, MessagesSquare, ClipboardList, FileText, GraduationCap,
  BookOpenCheck, ArrowRight, Activity,
} from 'lucide-react'

const FEATURES = [
  { icon: Stethoscope, title: 'Virtual EMR', text: 'A sparse, realistic chart — vitals, labs, meds, problems — just like clinic.' },
  { icon: MessagesSquare, title: 'AI Standardized Patient', text: 'Interview a simulated patient to uncover the history that isn’t in the chart.' },
  { icon: ClipboardList, title: 'Assessment + Plan Workspace', text: 'Reason through each problem and build a guideline-based plan.' },
  { icon: FileText, title: 'SOAP Note Builder', text: 'Draft and refine a structured note from your own documentation.' },
  { icon: GraduationCap, title: 'Preceptor Teaching Guide', text: 'Gold-standard reasoning, pearls, and common mistakes — unlocked by code.' },
  { icon: BookOpenCheck, title: 'Guideline-Based Cases', text: 'Built on current HTN (AHA/ACC) and diabetes (ADA) teaching logic.' },
]

export default function LandingPage({ onLaunch, onPreceptor }) {
  return (
    <div className="min-h-full bg-gradient-to-b from-navydark via-navy to-navy text-white">
      <header className="max-w-6xl mx-auto px-6 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-teal"><Activity size={20} /></span>
          <span className="font-head text-xl tracking-tight">VACS</span>
        </div>
        <button onClick={onPreceptor} className="text-[13px] text-teal-200 hover:text-white transition">Preceptor Demo →</button>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center fade-up">
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-teal-200 text-[12px] font-semibold ring-1 ring-white/15 mb-6">
          Virtual Ambulatory Care Simulator
        </span>
        <h1 className="font-head text-5xl sm:text-6xl leading-tight max-w-3xl mx-auto">
          Practice the clinic visit before you’re in the clinic.
        </h1>
        <p className="mt-6 text-[17px] text-slate-200 max-w-2xl mx-auto leading-relaxed">
          A two-week ambulatory care course — each week runs Monday guideline review and quiz, three patients
          across Tuesday–Thursday clinic visits, and a Friday journal club with a 1:1 preceptor debrief — building
          interviewing, clinical reasoning, SOAP documentation, and guideline-based care planning.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onLaunch}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-7 py-3.5 font-semibold text-white shadow-lg shadow-teal/30 hover:bg-teal/90 transition">
            Enter the Course <ArrowRight size={18} className="group-hover:translate-x-0.5 transition" />
          </button>
          <button onClick={onPreceptor}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition">
            View Preceptor Demo
          </button>
        </div>
      </section>

      <section className="bg-slate-50 text-slate-800 rounded-t-[2.5rem]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm fade-up"
                   style={{ animationDelay: `${i * 60}ms` }}>
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-navy text-white mb-4">
                  <f.icon size={22} />
                </span>
                <h3 className="font-head text-lg text-navy">{f.title}</h3>
                <p className="mt-1.5 text-[14px] text-slate-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[12px] text-slate-400">
            Educational simulation for pharmacy training. Not for clinical use. Patient is fictional.
          </p>
        </div>
      </section>
    </div>
  )
}
