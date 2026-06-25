import React from 'react'
import { CASES } from '../data/cases'
import { caseStatus, loadCaseState } from '../lib/storage'
import { JOURNAL_CLUB, journalProgress } from '../data/journalClub'
import { ChevronLeft, Calendar, Target, Stethoscope, Play, RotateCw, CheckCircle2, Clock, Lock, BookOpen, ChevronRight } from 'lucide-react'
import { Badge } from './ui'

const STATUS = {
  not_started: { label: 'Not started', tone: 'slate', icon: Clock },
  in_progress: { label: 'In progress', tone: 'amber', icon: Clock },
  completed: { label: 'Completed', tone: 'teal', icon: CheckCircle2 },
}

export default function CaseDashboard({ onBack, onOpenCase, onOpenJournalClub }) {
  return (
    <div className="min-h-full bg-slate-100">
      <div className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center gap-3">
          <button onClick={onBack} className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition">
            <ChevronLeft size={18} />
          </button>
          <div>
            <h1 className="font-head text-2xl">Case Selection</h1>
            <p className="text-[13px] text-slate-300">Week 1 — Maria Gonzalez collaborative practice encounters</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-5">
          {CASES.map((c, i) => {
            const status = caseStatus(c.id)
            const S = STATUS[status]
            const started = status !== 'not_started'
            return (
              <div key={c.id} className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col fade-up"
                   style={{ animationDelay: `${i * 70}ms` }}>
                <div className="px-5 py-4 text-white" style={{ background: 'linear-gradient(135deg,#13314f,#0d2138)' }}>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-teal-200">
                      <Calendar size={14} /> {c.ENCOUNTER.day}
                    </span>
                    <Badge tone={c.ENCOUNTER.difficultyTone}>{c.ENCOUNTER.difficulty}</Badge>
                  </div>
                  <h2 className="font-head text-xl mt-2">{c.PATIENT.name}</h2>
                  <p className="text-[13px] text-slate-200">{c.ENCOUNTER.type}</p>
                </div>

                <div className="p-5 flex flex-col gap-4 grow">
                  <div>
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-1.5">
                      <Stethoscope size={13} /> Disease states
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.ENCOUNTER.diseaseStates.map(d => <Badge key={d} tone="teal">{d}</Badge>)}
                    </div>
                  </div>

                  <div>
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-1.5">
                      <Target size={13} /> Learning objectives
                    </p>
                    <ul className="space-y-1">
                      {c.ENCOUNTER.learningObjectives.map(o => (
                        <li key={o} className="text-[13px] text-slate-600 flex gap-2">
                          <span className="text-teal mt-0.5">•</span><span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-2 flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 text-[12px] font-semibold ${
                      status === 'completed' ? 'text-teal' : status === 'in_progress' ? 'text-amber-600' : 'text-slate-400'}`}>
                      <S.icon size={14} /> {S.label}
                    </span>
                    <button onClick={() => onOpenCase(c.id)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-teal px-4 py-2 text-[13px] font-semibold text-white hover:bg-teal/90 transition">
                      {started ? <RotateCw size={15} /> : <Play size={15} />}
                      {started ? 'Resume Case' : 'Start Case'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <JournalClubCard onOpen={onOpenJournalClub} />
      </div>
    </div>
  )
}

function JournalClubCard({ onOpen }) {
  const unlocked = caseStatus(JOURNAL_CLUB.unlockCaseId) === 'completed'
  const { answered, total, complete } = journalProgress(loadCaseState(JOURNAL_CLUB.id))

  let btnLabel = 'Start Journal Club Discussion'
  if (!unlocked) btnLabel = 'Complete Thursday Case to Unlock'
  else if (complete) btnLabel = 'Review Journal Club Responses'
  else if (answered > 0) btnLabel = 'Resume Journal Club Discussion'

  return (
    <div className={`mt-6 rounded-2xl border shadow-sm overflow-hidden fade-up ${unlocked ? 'border-teal/30 bg-white' : 'border-slate-200 bg-slate-50'}`}>
      <div className="flex flex-col md:flex-row md:items-center gap-4 p-5">
        <div className={`grid place-items-center w-14 h-14 rounded-2xl shrink-0 ${unlocked ? 'bg-teal text-white' : 'bg-slate-200 text-slate-400'}`}>
          {unlocked ? <BookOpen size={24} /> : <Lock size={22} />}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="font-head text-lg text-navy">{JOURNAL_CLUB.title}</h2>
            <Badge tone={unlocked ? 'teal' : 'slate'}>Week 1</Badge>
            {unlocked && complete && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-teal/10 text-teal ring-1 ring-teal/20">
                <CheckCircle2 size={12} /> Complete
              </span>
            )}
          </div>
          <p className="text-[13px] font-semibold text-slate-600 mt-0.5">{JOURNAL_CLUB.subtitle}</p>
          <p className="text-[13px] text-slate-500 mt-1 leading-snug">
            {unlocked
              ? JOURNAL_CLUB.description
              : 'Complete the Thursday follow-up case to unlock the Weekly Journal Club Discussion.'}
          </p>
          {unlocked && answered > 0 && (
            <p className="text-[12px] text-slate-400 mt-1.5">Journal Club Progress: {answered} of {total} questions completed</p>
          )}
        </div>

        <button onClick={() => unlocked && onOpen()} disabled={!unlocked}
          className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-[13px] font-semibold transition shrink-0 ${
            unlocked ? 'bg-navy text-white hover:bg-navydark' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>
          {unlocked ? <BookOpen size={15} /> : <Lock size={14} />}
          {btnLabel}
          {unlocked && <ChevronRight size={15} />}
        </button>
      </div>
    </div>
  )
}
