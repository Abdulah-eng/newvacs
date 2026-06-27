import React from 'react'
import { WEEKS, WEEK1 } from '../data/weeks'
import { isDemoMode } from '../lib/moduleState'
import { Activity, LogOut, Unlock, Lock, ArrowRight, CheckCircle2, GraduationCap, Stethoscope, FlaskConical, Users } from 'lucide-react'

function WeekCard({ week, locked, onOpen }) {
  const snap = week.state.snapshot()
  const accent = week.index === 1 ? '#0d9488' : '#0891b2'
  const isCapstone = week.type === 'capstone'
  const stats = isCapstone ? [
    { icon: GraduationCap, label: 'Manuscript', value: snap.complete ? 'Graded' : 'Not submitted' },
    { icon: Stethoscope, label: 'Topic', value: 'MASH' },
    { icon: FlaskConical, label: 'Presentation', value: snap.complete ? 'Complete' : 'Pending' },
  ] : [
    { icon: GraduationCap, label: 'Monday quiz', value: snap.quizPassed ? `Passed · ${snap.quizBest}%` : (snap.quizBest ? `Best ${snap.quizBest}%` : 'Not started') },
    { icon: Stethoscope, label: 'Clinic cases graded', value: `${snap.casesGraded} / ${snap.totalCases}` },
    { icon: FlaskConical, label: 'Journal club', value: snap.journalDone ? 'Complete' : 'Pending' },
  ]
  return (
    <div className={`rounded-2xl border bg-white shadow-sm overflow-hidden transition ${locked ? 'border-slate-200 opacity-90' : 'border-slate-200 hover:shadow-md'}`}>
      <div className="px-6 py-5 text-white" style={{ background: locked ? 'linear-gradient(135deg,#64748b,#475569)' : 'linear-gradient(135deg,#13314f,#0d2138)' }}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: locked ? '#cbd5e1' : '#5eead4' }}>Week {week.index}</p>
            <h3 className="font-head text-lg leading-tight mt-0.5">{week.module.title.replace(/^Week \d+ — /, '')}</h3>
            <p className="text-[12px] text-slate-300 mt-0.5">{week.module.subtitle}</p>
          </div>
          {snap.complete
            ? <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold bg-teal/20 text-teal-100 ring-1 ring-teal-300/30 shrink-0"><CheckCircle2 size={12} /> Complete</span>
            : locked
              ? <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-slate-200 ring-1 ring-white/15 shrink-0"><Lock size={12} /> Locked</span>
              : <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-slate-100 ring-1 ring-white/15 shrink-0">{snap.pct}%</span>}
        </div>
        <div className="mt-3 h-2 rounded-full bg-white/15 overflow-hidden">
          <div className="h-full transition-all" style={{ width: `${snap.pct}%`, background: accent }} />
        </div>
      </div>

      <div className="px-6 py-5">
        <p className="text-[13px] text-slate-600 leading-relaxed">{week.blurb}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {week.patients?.map(p => (
            <span key={p.key} className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-600 ring-1 ring-slate-200">
              <Users size={11} /> {p.name.split(' ')[0]} · {p.tag}
            </span>
          ))}
          {isCapstone && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-600 ring-1 ring-slate-200">
              <Users size={11} /> Grand Rounds · Document Submission
            </span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {stats.map(s => (
            <div key={s.label} className="rounded-lg bg-slate-50 ring-1 ring-slate-100 p-2.5">
              <s.icon size={14} className="text-slate-400" />
              <p className="text-[10px] text-slate-400 mt-1 leading-tight">{s.label}</p>
              <p className="text-[12px] font-semibold text-navy leading-tight">{s.value}</p>
            </div>
          ))}
        </div>

        <button onClick={() => !locked && onOpen(week.id)} disabled={locked}
          className={`mt-5 w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-[13px] font-semibold transition ${
            locked ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-navy text-white hover:bg-navydark'}`}>
          {locked
            ? <><Lock size={14} /> Finish Week 1 to unlock</>
            : <>{snap.pct > 0 ? 'Continue' : 'Start'} Week {week.index} <ArrowRight size={15} /></>}
        </button>
      </div>
    </div>
  )
}

export default function CourseHome({ demo, onToggleDemo, onOpenWeek, onExit }) {
  const week1Done = WEEK1.state.weekComplete()
  const lockedFor = (week) => week.index > 1 && !week1Done && !isDemoMode()

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="text-white" style={{ background: 'linear-gradient(135deg,#13314f,#0d2138)' }}>
        <div className="max-w-5xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-teal shrink-0"><Activity size={20} /></span>
              <div>
                <h1 className="font-head text-xl tracking-tight">VACS — Course Home</h1>
                <p className="text-[12px] text-slate-300">Virtual Ambulatory Care Simulator · two-week ambulatory care course</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button onClick={onToggleDemo} title="Demo bypass: unlock all weeks, days, and patients without completing gates"
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[12px] font-semibold transition ring-1 ${
                  demo ? 'bg-teal text-white ring-teal/40' : 'bg-white/10 text-slate-200 ring-white/15 hover:bg-white/20'}`}>
                {demo ? <Unlock size={14} /> : <Lock size={14} />} Demo bypass: {demo ? 'On' : 'Off'}
              </button>
              <button onClick={onExit} className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-[12px] font-semibold hover:bg-red-500/80 transition">
                <LogOut size={14} /> Log out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h2 className="font-head text-2xl text-navy">Choose a week</h2>
          <p className="text-[13px] text-slate-500 mt-1">
            Each week is a self-contained module. Week 2 unlocks once Week 1 is complete —
            or flip on demo bypass to explore everything immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {WEEKS.map(week => (
            <WeekCard key={week.id} week={week} locked={lockedFor(week)} onOpen={onOpenWeek} />
          ))}
        </div>

        <p className="mt-10 text-center text-[12px] text-slate-400">
          Educational simulation for pharmacy training. Not for clinical use. Patients are fictional.
        </p>
      </div>
    </div>
  )
}
