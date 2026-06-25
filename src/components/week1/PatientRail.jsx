import React from 'react'
import { loadCaseState } from '../../lib/storage'
import { CASE_BY_ID } from '../../data/cases'
import { Badge } from '../ui'
import { Lock, Play, RotateCw, CheckCircle2, Stethoscope, Target, ChevronRight } from 'lucide-react'

export default function PatientRail({ week, dayKey, onOpenCase }) {
  const { patients, caseId, days, state } = week
  const day = days.find(d => d.key === dayKey)
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-1">
        <Stethoscope size={18} className="text-teal" />
        <h2 className="font-head text-xl text-navy">{day?.title}</h2>
      </div>
      <p className="text-[13px] text-slate-500 mb-5">{day?.blurb} Patients unlock in order — finish one to open the next.</p>

      <div className="space-y-3">
        {patients.map((p, i) => {
          const cid = caseId(p.id, dayKey)
          const c = CASE_BY_ID[cid]
          const unlocked = state.patientUnlocked(dayKey, i)
          const complete = state.patientComplete(p.id, dayKey)
          const st = loadCaseState(cid)
          const started = !complete && st.__progress && Object.keys(st.__progress).length > 0
          const prev = i > 0 ? patients[i - 1].name : null

          return (
            <div key={p.id} className={`rounded-2xl border shadow-sm overflow-hidden ${unlocked ? 'bg-white border-slate-200' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 p-5">
                <div className={`grid place-items-center w-12 h-12 rounded-xl shrink-0 font-head text-lg ${
                  complete ? 'bg-teal text-white' : unlocked ? 'bg-navy text-white' : 'bg-slate-200 text-slate-400'}`}>
                  {unlocked ? p.key : <Lock size={18} />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`font-head text-lg ${unlocked ? 'text-navy' : 'text-slate-400'}`}>{p.name}</h3>
                    <Badge tone={unlocked ? 'teal' : 'slate'}>{p.tag}</Badge>
                    {complete && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-teal/10 text-teal ring-1 ring-teal/20"><CheckCircle2 size={12} /> Complete</span>}
                    {started && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-600 ring-1 ring-amber-200">In progress</span>}
                  </div>
                  <p className={`text-[12px] mt-0.5 ${unlocked ? 'text-slate-500' : 'text-slate-400'}`}>
                    {c?.ENCOUNTER?.type}{c?.ENCOUNTER?.difficulty ? ` · ${c.ENCOUNTER.difficulty}` : ''}
                  </p>
                  <p className={`flex items-center gap-1.5 text-[12px] mt-1 ${unlocked ? 'text-slate-500' : 'text-slate-400'}`}>
                    <Target size={12} /> {p.focus}
                  </p>
                  {!unlocked && prev && <p className="text-[11px] text-slate-400 mt-1">Complete {prev}’s case to unlock.</p>}
                </div>

                <button onClick={() => unlocked && onOpenCase(cid)} disabled={!unlocked}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-[13px] font-semibold transition shrink-0 ${
                    unlocked ? 'bg-teal text-white hover:bg-teal/90' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}>
                  {!unlocked ? <><Lock size={14} /> Locked</>
                    : complete ? <><RotateCw size={15} /> Review case</>
                      : started ? <><RotateCw size={15} /> Resume case</>
                        : <><Play size={15} /> Start case</>}
                  {unlocked && <ChevronRight size={15} />}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
