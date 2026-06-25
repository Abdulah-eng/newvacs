import React from 'react'
import { Lock, BookOpen, Stethoscope, FlaskConical, CheckCircle2, Clock } from 'lucide-react'

const KIND_ICON = { learn: BookOpen, clinic: Stethoscope, journal: FlaskConical }

const GATE_REASON = {
  tue: 'Pass Monday’s quiz at ≥90% to unlock',
  wed: 'Complete all three Tuesday patients to unlock',
  thu: 'Complete all three Wednesday patients to unlock',
  fri: 'Complete all three Thursday patients to unlock',
}

const STATE_CHIP = {
  LOCKED: { label: 'Locked', cls: 'bg-slate-100 text-slate-400 ring-slate-200' },
  UNLOCKED: { label: 'Available', cls: 'bg-teal/10 text-teal ring-teal/20' },
  IN_PROGRESS: { label: 'In progress', cls: 'bg-amber-50 text-amber-600 ring-amber-200' },
  COMPLETE: { label: 'Complete', cls: 'bg-teal/10 text-teal ring-teal/20' },
}

export default function DayRail({ week, activeDay, onSelectDay }) {
  const { days, state } = week
  return (
    <div className="flex flex-wrap gap-2">
      {days.map((d) => {
        const st = state.dayState(d.key)
        const unlocked = state.dayUnlocked(d.key)
        const active = d.key === activeDay
        const Icon = st === 'COMPLETE' ? CheckCircle2 : st === 'IN_PROGRESS' ? Clock : st === 'LOCKED' ? Lock : (KIND_ICON[d.kind] || BookOpen)
        const chip = STATE_CHIP[st]
        return (
          <button
            key={d.key}
            onClick={() => unlocked && onSelectDay(d.key)}
            disabled={!unlocked}
            title={!unlocked ? GATE_REASON[d.key] : d.title}
            className={`group relative flex-1 min-w-[150px] text-left rounded-xl border px-3.5 py-3 transition ${
              active ? 'border-teal bg-white shadow-sm ring-1 ring-teal/30'
                : unlocked ? 'border-slate-200 bg-white hover:border-teal/40 hover:shadow-sm'
                  : 'border-slate-200 bg-slate-50 cursor-not-allowed'}`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide ${unlocked ? 'text-navy' : 'text-slate-400'}`}>
                <Icon size={14} className={st === 'COMPLETE' || st === 'UNLOCKED' ? 'text-teal' : st === 'IN_PROGRESS' ? 'text-amber-500' : unlocked ? 'text-navy' : 'text-slate-400'} />
                {d.label}
              </span>
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ring-1 ${chip.cls}`}>{chip.label}</span>
            </div>
            <p className={`text-[13px] font-semibold leading-tight ${unlocked ? 'text-slate-700' : 'text-slate-400'}`}>{d.title}</p>
            {!unlocked && <p className="text-[11px] text-slate-400 mt-1 leading-snug">{GATE_REASON[d.key]}</p>}
            {active && <span className="absolute -bottom-px left-3 right-3 h-0.5 bg-teal rounded-full" />}
          </button>
        )
      })}
    </div>
  )
}
