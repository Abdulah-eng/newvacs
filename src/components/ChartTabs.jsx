import React, { useState } from 'react'
import { Card, FlagPill, Alert, MissingCallout, SectionTitle, Badge } from './ui'
import { FLAG_STYLES } from '../lib/iconMap'
import {
  Activity, HeartPulse, Droplet, FlaskConical, Pill, ShieldAlert, ListChecks,
  Syringe, ClipboardList, AlertTriangle, HelpCircle, Filter, ChevronRight, ChevronLeft,
} from 'lucide-react'

/* ------------------------------------------------------------------ Snapshot */
export function SnapshotTab({ c }) {
  const v = c.VITALS
  const keyLabs = c.LABS.filter(l =>
    ['A1C', 'eGFR', 'SCr', 'LDL-C', 'UACR'].includes(l.label))
  return (
    <div>
      <SectionTitle sub={`${c.ENCOUNTER.type} · ${c.ENCOUNTER.week}`}>Snapshot</SectionTitle>

      <Card title="Chief concern" icon={HelpCircle} color="13314f" className="mb-4">
        <p className="text-[14px] italic text-slate-700 leading-relaxed">“{c.ENCOUNTER.chiefConcern}”</p>
        <p className="mt-3 text-[13px] text-slate-600 leading-relaxed">{c.ENCOUNTER.snapshotSummary}</p>
      </Card>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <Card title="Clinical alerts" icon={ShieldAlert} color="dc2626">
          <div className="space-y-2">
            {c.ALERTS.map((a, i) => <Alert key={i} level={a.level}>{a.text}</Alert>)}
          </div>
        </Card>

        <Card title="Active problems" icon={ListChecks} color="0d9488">
          <ul className="space-y-2">
            {c.PROBLEMS.map(p => (
              <li key={p.name} className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[13px] font-semibold text-slate-800">{p.name}</p>
                  <p className="text-[12px] text-slate-500">{p.detail}</p>
                </div>
                <FlagPill flag={p.flag} />
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <Card title="Key vitals" icon={HeartPulse} color="13314f">
          <dl className="grid grid-cols-2 gap-y-2 text-[13px]">
            <Stat label="Office BP" value={v.bp} flag={v.flags?.bp} />
            <Stat label="Repeat BP" value={v.bpRepeat} flag={v.flags?.bpRepeat} />
            <Stat label="HR" value={v.hr} />
            <Stat label="BMI" value={v.bmi} flag={v.flags?.bmi} />
          </dl>
        </Card>
        <Card title="Key labs" icon={FlaskConical} color="0891b2">
          <dl className="grid grid-cols-2 gap-y-2 text-[13px]">
            {keyLabs.map(l => (
              <Stat key={l.label} label={l.label}
                    value={`${l.value}${l.unit ? ' ' + l.unit : ''}`} flag={l.flag} />
            ))}
          </dl>
        </Card>
      </div>

      <Card title="What should you clarify with the patient?" icon={AlertTriangle} color="7c3aed">
        <div className="space-y-2">
          <MissingCallout>Subjective history is sparse — adherence, OTC use, home monitoring, diet, activity, and goals are not yet documented.</MissingCallout>
          <p className="text-[13px] text-slate-600">Open the <strong>Patient Interview</strong> tab to uncover what the chart doesn’t show, then document findings in <strong>Subjective</strong>.</p>
        </div>
      </Card>
    </div>
  )
}

function Stat({ label, value, flag }) {
  return (
    <>
      <dt className="text-slate-500">{label}</dt>
      <dd className="text-right font-semibold text-slate-800 flex items-center justify-end gap-2">
        <span>{value}</span>{flag && flag !== 'normal' && <FlagPill flag={flag} />}
      </dd>
    </>
  )
}

/* ------------------------------------------------------------------ Vitals */
export function VitalsTab({ c }) {
  const v = c.VITALS
  const rows = [
    ['Office BP', v.bp, v.flags?.bp], ['Repeat BP', v.bpRepeat, v.flags?.bpRepeat],
    ['Heart rate', v.hr, v.flags?.hr], ['Respiratory rate', v.rr], ['Temperature', v.temp],
    ['Weight', v.weight], ['Height', v.height], ['BMI', v.bmi, v.flags?.bmi],
  ]
  return (
    <div>
      <SectionTitle sub="Vital signs recorded at this visit">Vitals</SectionTitle>
      <Card>
        <table className="w-full text-[13px]">
          <tbody>
            {rows.map(([label, val, flag]) => (
              <tr key={label} className="border-b border-slate-100 last:border-0">
                <td className="py-2 text-slate-500">{label}</td>
                <td className="py-2 text-right font-semibold text-slate-800">{val ?? '—'}</td>
                <td className="py-2 w-20 text-right">{flag && flag !== 'normal' && <FlagPill flag={flag} />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      {v.extras?.length > 0 && (
        <Card title="Documented monitoring" icon={Activity} color="0d9488" className="mt-4">
          <div className="space-y-2">
            {v.extras.map((e, i) => (
              <div key={i} className="flex items-center justify-between text-[13px]">
                <span className="text-slate-500">{e.label}</span>
                <span className="flex items-center gap-2 font-semibold text-slate-800">{e.value}{e.flag && e.flag !== 'normal' && <FlagPill flag={e.flag} />}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ Labs */
// Realistic EMR lab organization: results are grouped into panels the student
// must open, rather than one flat table. A lab can appear in more than one panel
// (e.g., SCr in both CMP and Renal), exactly as in a real chart.
const LAB_GROUPS = [
  { key: 'diabetes', label: 'Diabetes / Glycemic Control', members: ['A1C', 'Glucose'] },
  { key: 'cmp', label: 'Comprehensive Metabolic Panel (CMP)', members: ['Glucose', 'Na', 'K', 'Cl', 'CO2', 'BUN', 'SCr', 'eGFR', 'AST', 'ALT'] },
  { key: 'renal', label: 'Renal / Kidney Function', members: ['BUN', 'SCr', 'eGFR', 'K', 'UACR'] },
  { key: 'lipid', label: 'Lipid Panel', members: ['Total cholesterol', 'LDL-C', 'HDL-C', 'Triglycerides'] },
  { key: 'urine', label: 'Urine Studies', members: ['UACR'] },
]

function membersOf(c, members) {
  return c.LABS.filter(l => members.includes(l.label))
}
function panelStatus(labs) {
  if (labs.length === 0) return { text: 'Not ordered', flag: 'missing' }
  if (labs.some(l => l.flag === 'missing')) return { text: 'Missing / not obtained', flag: 'missing' }
  if (labs.some(l => l.flag === 'high')) return { text: 'Abnormal', flag: 'high' }
  if (labs.some(l => l.flag === 'warn')) return { text: 'Abnormal', flag: 'warn' }
  return { text: 'Within range', flag: 'normal' }
}

function StatusPill({ text, flag }) {
  const s = FLAG_STYLES[flag] || FLAG_STYLES.normal
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${s.bg} ${s.text} ring-1 ${s.ring}`}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: `#${s.hex}` }} />{text}
    </span>
  )
}

function LabTable({ labs }) {
  if (labs.length === 0) {
    return <p className="text-[13px] text-slate-400">No results in this panel for this visit.</p>
  }
  return (
    <table className="w-full text-[13px]">
      <thead>
        <tr className="text-left text-[11px] uppercase tracking-wide text-slate-400 border-b border-slate-200">
          <th className="py-2 font-semibold">Test</th>
          <th className="py-2 font-semibold">Result</th>
          <th className="py-2 font-semibold text-right">Flag</th>
        </tr>
      </thead>
      <tbody>
        {labs.map(l => (
          <tr key={l.label} className="border-b border-slate-100 last:border-0">
            <td className="py-2 text-slate-600">{l.label}</td>
            <td className="py-2">
              <span className="font-semibold text-slate-800">{l.value}</span>
              {l.unit && <span className="text-slate-400"> {l.unit}</span>}
              {l.note && <span className="block text-[11px] text-slate-400">{l.note}</span>}
            </td>
            <td className="py-2 text-right">{l.flag && l.flag !== 'normal' && <FlagPill flag={l.flag} />}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function LabsTab({ c }) {
  const [panel, setPanel] = useState('summary')
  const missing = c.LABS.filter(l => l.flag === 'missing')

  const OPTIONS = [
    { key: 'summary', label: 'Results summary' },
    { key: 'all', label: 'All Labs' },
    ...LAB_GROUPS.map(g => ({ key: g.key, label: g.label })),
    { key: 'missing', label: 'Missing / Needed Labs' },
  ]

  function renderBody() {
    if (panel === 'summary') {
      return (
        <div>
          <Card title="Result panels" icon={FlaskConical} color="0891b2">
            <p className="text-[12px] text-slate-500 mb-3">Select a panel to open its results. Watch for screening that hasn’t been done.</p>
            <ul className="divide-y divide-slate-100">
              {LAB_GROUPS.map(g => {
                const labs = membersOf(c, g.members)
                const st = panelStatus(labs)
                return (
                  <li key={g.key}>
                    <button onClick={() => setPanel(g.key)}
                      className="w-full flex items-center justify-between gap-3 py-2.5 text-left hover:bg-slate-50 -mx-2 px-2 rounded-lg transition">
                      <span className="text-[13px] font-medium text-slate-700">{g.label}</span>
                      <span className="flex items-center gap-2">
                        <StatusPill text={st.text} flag={st.flag} />
                        <ChevronRight size={15} className="text-slate-300" />
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Card>
          {missing.length > 0 && (
            <div className="mt-4">
              <MissingCallout>
                {missing.map(m => m.label).join(', ')} {missing.length === 1 ? 'has' : 'have'} no result on file. Recognize the screening gap — open the relevant panel and order it.
              </MissingCallout>
            </div>
          )}
        </div>
      )
    }

    if (panel === 'all') {
      return <Card title="All Labs" icon={FlaskConical} color="0891b2"><LabTable labs={c.LABS} /></Card>
    }

    if (panel === 'missing') {
      return (
        <Card title="Missing / Needed Labs" icon={AlertTriangle} color="7c3aed">
          {missing.length === 0
            ? <p className="text-[13px] text-slate-500">No outstanding labs — all expected results are on file for this visit.</p>
            : <LabTable labs={missing} />}
        </Card>
      )
    }

    const group = LAB_GROUPS.find(g => g.key === panel)
    const labs = membersOf(c, group.members)
    return (
      <Card title={group.label} icon={FlaskConical} color="0891b2">
        <LabTable labs={labs} />
        {labs.some(l => l.flag === 'missing') && (
          <div className="mt-3"><MissingCallout>This screening test has not been obtained — consider ordering it at this visit.</MissingCallout></div>
        )}
      </Card>
    )
  }

  return (
    <div>
      <SectionTitle sub="Results are organized into panels — open the one you need">Labs</SectionTitle>

      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-slate-500"><Filter size={14} /> Lab panel</span>
        <div className="relative">
          <select value={panel} onChange={e => setPanel(e.target.value)}
            className="appearance-none rounded-lg border border-slate-300 bg-white pl-3 pr-9 py-2 text-[13px] font-medium text-slate-700 outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 cursor-pointer">
            {OPTIONS.map(o => <option key={o.key} value={o.key}>{o.label}</option>)}
          </select>
          <ChevronRight size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none" />
        </div>
        {panel !== 'summary' && (
          <button onClick={() => setPanel('summary')}
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-teal hover:text-teal/80 transition">
            <ChevronLeft size={14} /> Back to summary
          </button>
        )}
      </div>

      {renderBody()}
    </div>
  )
}

/* ------------------------------------------------------------------ Medications */
export function MedicationsTab({ c }) {
  return (
    <div>
      <SectionTitle sub="Documented medication list (as recorded in the chart)">Medications</SectionTitle>
      <Card className="mb-4">
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] min-w-[640px]">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wide text-slate-400 border-b border-slate-200">
                <th className="py-2 font-semibold">Medication</th><th className="py-2 font-semibold">Dose</th>
                <th className="py-2 font-semibold">Route</th><th className="py-2 font-semibold">Frequency</th>
                <th className="py-2 font-semibold">Indication</th><th className="py-2 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {c.MEDICATIONS.map(m => (
                <tr key={m.name} className="border-b border-slate-100 last:border-0">
                  <td className="py-2 font-semibold text-slate-800 flex items-center gap-2"><Pill size={14} className="text-teal" />{m.name}</td>
                  <td className="py-2 text-slate-600">{m.dose}</td>
                  <td className="py-2 text-slate-600">{m.route}</td>
                  <td className="py-2 text-slate-600">{m.freq}</td>
                  <td className="py-2 text-slate-600">{m.indication}</td>
                  <td className="py-2 text-slate-400">{m.notes || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card title="Medication reconciliation prompts" icon={ClipboardList} color="7c3aed">
        <ul className="grid sm:grid-cols-2 gap-2 text-[13px] text-slate-600">
          {['Ask about OTC medications (e.g., pain relievers, supplements)',
            'Ask about missed doses and the reasons behind them',
            'Ask about any side effects or new symptoms',
            'Ask about cost or refill barriers'].map(t => (
            <li key={t} className="flex gap-2"><span className="text-violet-500 mt-0.5">•</span><span>{t}</span></li>
          ))}
        </ul>
        <MissingCallout>The visible list may be incomplete — patients often omit OTC products. Confirm in the interview.</MissingCallout>
      </Card>
    </div>
  )
}

/* ------------------------------------------------------------------ Allergies */
export function AllergiesTab({ c }) {
  return (
    <div>
      <SectionTitle sub="Documented allergies and reactions">Allergies</SectionTitle>
      <Card>
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-wide text-slate-400 border-b border-slate-200">
              <th className="py-2 font-semibold">Substance</th><th className="py-2 font-semibold">Reaction</th>
            </tr>
          </thead>
          <tbody>
            {c.ALLERGIES.map((a, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0">
                <td className="py-2 font-semibold text-slate-800">{a.substance}</td>
                <td className="py-2 text-slate-600">{a.reaction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

/* ------------------------------------------------------------------ Problem list */
export function ProblemListTab({ c }) {
  return (
    <div>
      <SectionTitle sub="Active problems on the chart">Problem List</SectionTitle>
      <Card>
        <ul className="divide-y divide-slate-100">
          {c.PROBLEMS.map(p => (
            <li key={p.name} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-[14px] font-semibold text-slate-800">{p.name}</p>
                <p className="text-[12px] text-slate-500">{p.detail}</p>
              </div>
              <FlagPill flag={p.flag} />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

/* ------------------------------------------------------------------ Objective */
export function ObjectiveTab({ c }) {
  const v = c.VITALS
  return (
    <div>
      <SectionTitle sub="Objective data: vitals, labs, medications, allergies, immunizations">Objective</SectionTitle>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <Card title="Vitals" icon={HeartPulse} color="13314f">
          <dl className="grid grid-cols-2 gap-y-1.5 text-[13px]">
            <Stat label="BP" value={v.bp} flag={v.flags?.bp} />
            <Stat label="Repeat" value={v.bpRepeat} flag={v.flags?.bpRepeat} />
            <Stat label="HR" value={v.hr} />
            <Stat label="BMI" value={v.bmi} flag={v.flags?.bmi} />
          </dl>
        </Card>
        <Card title="Key labs" icon={FlaskConical} color="0891b2">
          <dl className="grid grid-cols-2 gap-y-1.5 text-[13px]">
            {c.LABS.slice(0, 6).map(l => (
              <Stat key={l.label} label={l.label} value={`${l.value}${l.unit ? ' ' + l.unit : ''}`} flag={l.flag} />
            ))}
          </dl>
        </Card>
      </div>

      <Card title="Immunizations" icon={Syringe} color="0d9488" className="mb-4">
        <ul className="grid sm:grid-cols-2 gap-2">
          {c.IMMUNIZATIONS.map(im => (
            <li key={im.name} className="flex items-center justify-between gap-2 text-[13px]">
              <span className="text-slate-600">{im.name}</span>
              <span className="flex items-center gap-2 text-slate-800">{im.status}{im.flag && im.flag !== 'normal' && <FlagPill flag={im.flag} />}</span>
            </li>
          ))}
        </ul>
      </Card>

      {c.OBJECTIVE_EXTRA?.length > 0 && (
        <Card title="Additional / missing objective data" icon={AlertTriangle} color="7c3aed">
          <div className="space-y-2">
            {c.OBJECTIVE_EXTRA.map((o, i) => (
              o.flag === 'missing'
                ? <MissingCallout key={i}>{o.label}: {o.value}</MissingCallout>
                : <div key={i} className="flex items-center justify-between text-[13px]">
                    <span className="text-slate-500">{o.label}</span>
                    <span className="font-semibold text-slate-800">{o.value}</span>
                  </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
