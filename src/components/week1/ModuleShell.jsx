import React, { useState } from 'react'
import { setDemoMode, isDemoMode } from '../../lib/moduleState'
import { loadCaseState } from '../../lib/storage'
import { CASE_BY_ID } from '../../data/cases'
import DayRail from './DayRail'
import MondayPage from './MondayPage'
import PatientRail from './PatientRail'
import WeeklySummary from './WeeklySummary'
import PreceptorDebrief from './PreceptorDebrief'
import SimulationShell from '../SimulationShell'
import JournalClubPage from '../JournalClubPage'
import { PRECEPTOR } from '../../data/preceptorCore'
import { Home, FlaskConical, Award, ChevronRight, ArrowRight, BookOpen, Unlock, Lock, MessageSquare, CheckCircle2 } from 'lucide-react'

function initialDay(week) {
  const unlocked = week.days.filter(d => week.state.dayUnlocked(d.key))
  return (unlocked[unlocked.length - 1] || week.days[0]).key
}

export default function ModuleShell({ week, demo, onToggleDemo, onExit }) {
  setDemoMode(demo) // reflect course-level demo into this week's gate logic before any gate reads
  const { module, state } = week
  const [day, setDay] = useState(() => initialDay(week))
  const [caseId, setCaseId] = useState(null)
  const [journalOpen, setJournalOpen] = useState(false)
  const [debriefOpen, setDebriefOpen] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [, setNonce] = useState(0)
  const bump = () => setNonce(n => n + 1)

  // ---- takeovers ----
  if (caseId) {
    return <SimulationShell caseData={CASE_BY_ID[caseId]} onExit={() => { setCaseId(null); bump() }} />
  }
  if (showSummary) {
    return <WeeklySummary week={week} onBack={() => { setShowSummary(false); bump() }} />
  }
  if (journalOpen) {
    return <JournalClubPage config={week.journal} onBack={() => { setJournalOpen(false); bump() }} />
  }
  if (debriefOpen) {
    return <PreceptorDebrief week={week} onBack={() => { setDebriefOpen(false); bump() }} />
  }

  const pct = Math.round(state.weekProgress() * 100)

  // next-day advance CTA after a clinic day completes
  const order = ['mon', 'tue', 'wed', 'thu', 'fri']
  const nextKey = order[order.indexOf(day) + 1]
  const showAdvance = ['tue', 'wed', 'thu'].includes(day) && state.dayAllComplete(day) && nextKey && state.dayUnlocked(nextKey)
  const dayLabel = k => week.days.find(d => d.key === k)?.label || k

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="text-white" style={{ background: 'linear-gradient(135deg,#13314f,#0d2138)' }}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-teal-300 uppercase">Week {week.index}</p>
              <h1 className="font-head text-xl">{module.title}</h1>
              <p className="text-[12px] text-slate-300">{module.subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={onToggleDemo} title="Demo bypass: unlock all days and patients without completing gates"
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[12px] font-semibold transition ring-1 ${
                  demo ? 'bg-teal text-white ring-teal/40' : 'bg-white/10 text-slate-200 ring-white/15 hover:bg-white/20'}`}>
                {demo ? <Unlock size={14} /> : <Lock size={14} />} Demo bypass: {demo ? 'On' : 'Off'}
              </button>
              {state.summaryAvailable() && (
                <button onClick={() => setShowSummary(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-teal px-3 py-2 text-[12px] font-semibold text-white hover:bg-teal/90 transition">
                  <Award size={14} /> Weekly Summary
                </button>
              )}
              <button onClick={onExit} className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-[12px] font-semibold hover:bg-white/20 transition">
                <Home size={14} /> Course
              </button>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full bg-teal transition-all" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-[12px] font-semibold text-slate-200 shrink-0">
              {pct}% week complete{demo && <span className="text-teal-200"> · demo bypass on</span>}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-5">
        <DayRail week={week} activeDay={day} onSelectDay={setDay} />
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-12">
        {day === 'mon' && <MondayPage week={week} onPassed={bump} />}
        {['tue', 'wed', 'thu'].includes(day) && <PatientRail week={week} dayKey={day} onOpenCase={setCaseId} />}
        {day === 'fri' && <FridayPanel week={week} onOpenJournal={() => setJournalOpen(true)} onOpenDebrief={() => setDebriefOpen(true)} onOpenSummary={() => setShowSummary(true)} />}

        {showAdvance && (
          <div className="max-w-4xl mx-auto mt-6 rounded-xl border border-teal/30 bg-teal/5 p-4 flex items-center justify-between gap-3">
            <p className="text-[13px] font-semibold text-navy">All {dayLabel(day)} patients complete — {dayLabel(nextKey)} is unlocked.</p>
            <button onClick={() => setDay(nextKey)} className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-[13px] font-semibold text-white hover:bg-navydark transition shrink-0">
              Go to {dayLabel(nextKey)} <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function FridayPanel({ week, onOpenJournal, onOpenDebrief, onOpenSummary }) {
  const journal = week.journal
  const jc = loadCaseState(journal.id)
  const answered = journal.questions.filter(q => (jc.responses?.[q.id] || '').trim().length > 0).length
  const total = journal.questions.length
  const done = week.state.journalComplete()

  const debriefUnlocked = done || isDemoMode()
  const db = loadCaseState(week.keys.debrief)
  const debriefStarted = !!db.transcript?.length
  const debriefDone = db.done === true

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-1"><FlaskConical size={18} className="text-teal" /><h2 className="font-head text-xl text-navy">{journal.title}</h2></div>
      <p className="text-[13px] text-slate-500 mb-5">{journal.subtitle}</p>

      {/* Step 1 — Journal club */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="grid place-items-center w-6 h-6 rounded-full bg-navy text-white text-[11px] font-bold">1</span>
          <h3 className="font-head text-[15px] text-navy">Journal Club</h3>
          {done && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-teal/10 text-teal ring-1 ring-teal/20"><CheckCircle2 size={12} /> Complete</span>}
        </div>
        <p className="text-[13px] text-slate-600 leading-relaxed">{journal.description}</p>
        <p className="text-[12px] text-slate-400 italic mt-2">{journal.citation}</p>
        <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex-1 min-w-[200px]">
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-full bg-teal transition-all" style={{ width: `${(answered / total) * 100}%` }} /></div>
            <p className="text-[12px] text-slate-400 mt-1.5">Journal Club Progress: {answered} of {total} questions completed</p>
          </div>
          <button onClick={onOpenJournal} className="inline-flex items-center gap-1.5 rounded-lg bg-teal px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-teal/90 transition shrink-0">
            <BookOpen size={15} /> {answered === 0 ? 'Start journal club' : done ? 'Review responses' : 'Resume journal club'} <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Step 2 — 1:1 Preceptor debrief */}
      <div className={`mt-4 rounded-2xl border shadow-sm p-5 ${debriefUnlocked ? 'border-teal/30 bg-white' : 'border-slate-200 bg-slate-50'}`}>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative shrink-0">
            <div className={`grid place-items-center w-14 h-14 rounded-2xl font-head text-lg text-white ${debriefUnlocked ? '' : 'opacity-60'}`}
                 style={{ background: debriefUnlocked ? 'linear-gradient(135deg,#0d9488,#0891b2)' : '#94a3b8' }}>
              {debriefUnlocked ? PRECEPTOR.initials : <Lock size={20} />}
            </div>
            {debriefUnlocked && <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-white" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="grid place-items-center w-6 h-6 rounded-full bg-navy text-white text-[11px] font-bold">2</span>
              <h3 className="font-head text-[15px] text-navy">1:1 Preceptor Debrief</h3>
              {debriefDone && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-teal/10 text-teal ring-1 ring-teal/20"><CheckCircle2 size={12} /> Complete</span>}
            </div>
            <p className="text-[13px] text-slate-600 leading-snug mt-1">
              {debriefUnlocked
                ? <>Sit down with <strong>{PRECEPTOR.name}, {PRECEPTOR.credentials}</strong> for a one-on-one debrief — a guided reflection on your week, then open discussion about any patient or decision.</>
                : 'Finish the journal club to unlock your 1:1 debrief with your preceptor.'}
            </p>
          </div>
          <button onClick={() => debriefUnlocked && onOpenDebrief()} disabled={!debriefUnlocked}
            className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-[13px] font-semibold transition shrink-0 ${
              debriefUnlocked ? 'bg-navy text-white hover:bg-navydark' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>
            {!debriefUnlocked ? <><Lock size={14} /> Locked</>
              : <><MessageSquare size={15} /> {debriefDone ? 'Review debrief' : debriefStarted ? 'Resume debrief' : 'Start debrief'}</>}
            {debriefUnlocked && <ChevronRight size={15} />}
          </button>
        </div>
      </div>

      {/* Step 3 — Weekly summary */}
      {done && (
        <div className="mt-4 rounded-2xl border border-teal/30 bg-teal/5 p-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-6 h-6 rounded-full bg-teal text-white text-[11px] font-bold">3</span>
            <Award size={20} className="text-teal" />
            <p className="font-head text-lg text-navy">Generate your weekly performance summary</p>
          </div>
          <button onClick={onOpenSummary} className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-navydark transition shrink-0">
            <Award size={15} /> Weekly Summary <ChevronRight size={15} />
          </button>
        </div>
      )}
    </div>
  )
}
