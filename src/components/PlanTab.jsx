import React from 'react'
import { Card, AutoTextarea, SectionTitle, Badge } from './ui'
import { CheckSquare, Square, ListChecks, FileText } from 'lucide-react'

export function PlanTab({ c, selections, freetext, onToggle, onText }) {
  const totalCorrect = c.PLAN_SECTIONS.reduce((n, s) => n + s.options.filter(o => o.correct).length, 0)
  const chosenCorrect = c.PLAN_SECTIONS.reduce(
    (n, s) => n + s.options.filter(o => o.correct && selections[o.key]).length, 0)
  const chosenWrong = c.PLAN_SECTIONS.reduce(
    (n, s) => n + s.options.filter(o => !o.correct && selections[o.key]).length, 0)
  const pct = totalCorrect ? Math.round((chosenCorrect / totalCorrect) * 100) : 0

  return (
    <div>
      <SectionTitle sub="Build the plan. Not every option is appropriate — choose with clinical judgment.">Plan</SectionTitle>

      <Card className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center gap-2 text-[13px] font-semibold text-slate-700"><ListChecks size={15} className="text-teal" /> Plan completeness</span>
          <span className="text-[13px] text-slate-500">{chosenCorrect}/{totalCorrect} key actions selected{chosenWrong > 0 && <span className="text-red-600"> · {chosenWrong} questionable</span>}</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full bg-teal transition-all" style={{ width: `${pct}%` }} />
        </div>
      </Card>

      <div className="space-y-4">
        {c.PLAN_SECTIONS.map(sec => (
          <Card key={sec.id} title={sec.title} icon={ListChecks} color="13314f">
            <div className="space-y-1.5">
              {sec.options.map(o => {
                const on = !!selections[o.key]
                return (
                  <button key={o.key} onClick={() => onToggle(o.key)}
                    className={`w-full flex items-start gap-2.5 text-left rounded-lg border px-3 py-2 transition ${
                      on ? 'border-teal bg-teal/5' : 'border-slate-200 hover:border-slate-300 bg-white'}`}>
                    {on ? <CheckSquare size={17} className="text-teal mt-0.5 shrink-0" /> : <Square size={17} className="text-slate-300 mt-0.5 shrink-0" />}
                    <span className={`text-[13px] ${on ? 'text-slate-800' : 'text-slate-600'}`}>{o.label}</span>
                  </button>
                )
              })}
            </div>
          </Card>
        ))}
      </div>

      <Card title="Free-text plan" icon={FileText} color="0d9488" className="mt-4">
        <div className="grid md:grid-cols-2 gap-4">
          {c.PLAN_FREETEXT.map(f => (
            <div key={f.key}>
              <label className="block text-[12px] font-semibold text-slate-700 mb-1">{f.label}</label>
              <AutoTextarea value={freetext[f.key]} onChange={v => onText(f.key, v)} placeholder={f.placeholder} rows={3} saved />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
