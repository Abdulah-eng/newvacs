import React, { useState } from 'react'
import { Card, SectionTitle } from './ui'
import { Lock, KeyRound, Lightbulb, Stethoscope, ClipboardList, AlertCircle, MessageCircleQuestion, ListChecks, ShieldCheck } from 'lucide-react'

const UNLOCK_CODE = 'PRECEPTOR'

export function PreceptorView({ c, unlocked, onUnlock }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  function tryUnlock() {
    if (code.trim().toUpperCase() === UNLOCK_CODE) { setError(false); onUnlock() }
    else setError(true)
  }

  if (!unlocked) {
    return (
      <div className="max-w-md mx-auto mt-10">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
          <span className="grid place-items-center w-14 h-14 rounded-2xl bg-navy text-white mx-auto mb-4"><Lock size={24} /></span>
          <h2 className="font-head text-xl text-navy">Preceptor View is locked</h2>
          <p className="text-[13px] text-slate-500 mt-1.5 mb-5">This view contains gold-standard reasoning, the expected plan, and teaching notes. Enter the preceptor code to unlock.</p>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <KeyRound size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={code}
                onChange={e => { setCode(e.target.value); setError(false) }}
                onKeyDown={e => e.key === 'Enter' && tryUnlock()}
                placeholder="Enter code"
                className="w-full rounded-lg border border-slate-300 pl-9 pr-3 py-2.5 text-[13px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
              />
            </div>
            <button onClick={tryUnlock} className="rounded-lg bg-teal px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-teal/90 transition">Unlock</button>
          </div>
          {error && <p className="text-[12px] text-red-600 mt-2">Incorrect code. Try again.</p>}
          <p className="text-[11px] text-slate-300 mt-4">Demo code: PRECEPTOR</p>
        </div>
      </div>
    )
  }

  const p = c.PRECEPTOR
  return (
    <div>
      <SectionTitle sub="Gold-standard reasoning and teaching notes for this encounter">Preceptor View</SectionTitle>

      <div className="grid lg:grid-cols-2 gap-4">
        <ListCard title="Key clinical issues" icon={AlertCircle} color="dc2626" items={p.keyIssues} />
        <ListCard title="Expected assessment reasoning" icon={Stethoscope} color="13314f" items={p.assessment} />
        <ListCard title="Expected plan" icon={ClipboardList} color="0d9488" items={p.plan} />
        <ListCard title="Teaching pearls" icon={Lightbulb} color="ca8a04" items={p.pearls} />
        <ListCard title="Common student mistakes" icon={AlertCircle} color="7c3aed" items={p.mistakes} />
        <ListCard title="Follow-up Socratic questions" icon={MessageCircleQuestion} color="0891b2" items={p.followupQuestions} />
      </div>

      <Card title="Case checklist / rubric" icon={ListChecks} color="13314f" className="mt-4">
        <ul className="grid sm:grid-cols-2 gap-2">
          {p.checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-slate-700">
              <ShieldCheck size={15} className="text-teal mt-0.5 shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

function ListCard({ title, icon, color, items }) {
  return (
    <Card title={title} icon={icon} color={color}>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 text-[13px] text-slate-600 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: `#${color}` }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
