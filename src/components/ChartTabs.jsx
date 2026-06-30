import React, { useState } from 'react'
import { Card, FlagPill, Alert, MissingCallout, SectionTitle, Badge } from './ui'
import { FLAG_STYLES } from '../lib/iconMap'
import {
  Activity, HeartPulse, Droplet, FlaskConical, Pill, ShieldAlert, ListChecks,
  Syringe, ClipboardList, AlertTriangle, HelpCircle, Filter, ChevronRight, ChevronLeft, FileText
} from 'lucide-react'

/* ------------------------------------------------------------------ Snapshot */
export function SnapshotTab({ c }) {
  const v = c.VITALS
  const keyLabs = c.LABS.filter(l =>
    ['A1C', 'eGFR', 'SCr', 'LDL-C', 'UACR'].includes(l.label))
  
  const vitalsList = [
    { label: 'Office BP', value: v.bp, flag: v.flags?.bp, trend: 'down' },
    { label: 'Repeat BP', value: v.bpRepeat, flag: v.flags?.bpRepeat },
    { label: 'HR', value: `${v.hr} bpm`, flag: v.flags?.hr },
    { label: 'Temp', value: v.temp, flag: v.flags?.temp },
    { label: 'RR', value: v.rr, flag: v.flags?.rr },
    { label: 'SpO₂', value: v.spo2 || '97 %', flag: v.flags?.spo2 },
    { label: 'Weight', value: v.weight, flag: v.flags?.weight, trend: 'down' },
    { label: 'Height', value: v.height, flag: v.flags?.height },
    { label: 'Pain', value: v.pain || '0/10', flag: v.flags?.pain },
    { label: 'BMI', value: v.bmi, flag: v.flags?.bmi },
  ]

  const activeMeds = c.MEDICATIONS?.filter(m => !m.patientReported) || []
  const reportedMeds = c.MEDICATIONS?.filter(m => m.patientReported) || []

  return (
    <div className="space-y-4 pb-8">
      <div className="grid md:grid-cols-2 gap-4 mt-2">
        {/* Advisories */}
        <Card title="Best Practice Advisories" icon={ShieldAlert} color="dc2626">
          <div className="space-y-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">System-generated advisories — review and act</p>
            {c.ALERTS.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <AlertTriangle size={14} className="text-amber-500" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">{a.title || 'ALERT'}</span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${((a.flag || a.tag || a.status || (a.level === 'high' ? 'Overdue' : 'Due')).toLowerCase() === 'overdue') ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                    {a.flag || a.tag || a.status || (a.level === 'high' ? 'Overdue' : 'Due')}
                  </span>
                </div>
                <p className="text-[13px] text-slate-600 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Active problems */}
        <Card title="Active problems" icon={ListChecks} color="0d9488">
          <ul className="space-y-0 divide-y divide-slate-100">
            {c.PROBLEMS.map((p, i) => (
              <li key={i} className="py-3 first:pt-0 last:pb-0">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <p className="text-[14px] font-semibold text-slate-800">{p.name}</p>
                  <p className="text-[11px] text-slate-400 whitespace-nowrap mt-0.5">{(p.noted || p.onset) ? `Noted ${p.noted || p.onset}` : ''}</p>
                </div>
                <p className="text-[13px] text-slate-500">{p.detail}</p>
                {p.alert && (
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded border border-amber-200 bg-amber-50 text-amber-700 text-[11px] font-semibold">
                    <ShieldAlert size={12} /> {p.alert}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Key Vitals */}
        <Card title="Key vitals" icon={HeartPulse} color="13314f">
          <ul className="divide-y divide-slate-50">
            {vitalsList.map((vItem, i) => (
              <li key={i} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-[13px] text-slate-600">{vItem.label}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{v.vitalsTime || '06/23/2026 09:14'}</p>
                </div>
                <div className="flex items-center gap-4">
                  {vItem.trend === 'down' && (
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 2L12 10L24 10" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <polygon points="12,0 16,5 8,5" fill="#1e293b" transform="translate(4.5, 4.5) scale(0.6) rotate(180 12 2.5)" />
                    </svg>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-bold text-slate-800">{vItem.value ?? '—'}</span>
                    {vItem.flag && vItem.flag !== 'normal' && <FlagPill flag={vItem.flag} />}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Key Labs */}
        <Card title="Key labs" icon={FlaskConical} color="0891b2">
          <ul className="divide-y divide-slate-50">
            {keyLabs.map((l, i) => (
              <li key={i} className="flex items-start justify-between py-2.5">
                <div>
                  <p className="text-[13px] text-slate-600 flex items-center gap-1">
                    {l.label}
                    {l.flag === 'high' && <span className="text-red-600 text-[10px]">▲</span>}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Ref {l.ref || '—'} · {l.drawn || '06/09/2026 07:50'}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold text-slate-800">
                    {l.value} {l.unit && <span className="font-normal text-slate-600">{l.unit}</span>}
                  </span>
                  {l.flag && l.flag !== 'normal' && <FlagPill flag={l.flag} />}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Medications */}
      <Card 
        title="Current medications" 
        icon={Pill} 
        color="0d9488"
        right={
          <div className="text-right">
            <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-800 text-[11px] font-bold rounded">Med rec: Pending</span>
            <p className="text-[10px] text-slate-400 mt-1">Last reconciled 03/18/2026 · R. Patel, PharmD</p>
          </div>
        }
      >
        <div className="space-y-6">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Active / Prescribed (EHR)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead>
                  <tr className="text-[10px] text-slate-400 uppercase tracking-wider border-b border-slate-200">
                    <th className="pb-2 font-semibold">Medication</th>
                    <th className="pb-2 font-semibold">Dose</th>
                    <th className="pb-2 font-semibold">Route</th>
                    <th className="pb-2 font-semibold">Freq</th>
                    <th className="pb-2 font-semibold">Start</th>
                    <th className="pb-2 font-semibold">Prescriber</th>
                    <th className="pb-2 font-semibold">Last Filled</th>
                    <th className="pb-2 font-semibold">Refills</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {activeMeds.map((m, i) => (
                    <tr key={i}>
                      <td className="py-2.5 font-bold text-slate-800">{m.name}</td>
                      <td className="py-2.5 text-slate-600">{m.dose}</td>
                      <td className="py-2.5 text-slate-600">{m.route}</td>
                      <td className="py-2.5 text-slate-600">{m.freq}</td>
                      <td className="py-2.5 text-slate-600">{m.start}</td>
                      <td className="py-2.5 text-slate-600">{m.prescriber}</td>
                      <td className="py-2.5 text-slate-600">{m.lastFilled}</td>
                      <td className="py-2.5 text-slate-600">{m.refills}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {reportedMeds.length > 0 && (
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Reported by patient — not on active med list</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[12px]">
                  <thead>
                    <tr className="text-[10px] text-slate-400 uppercase tracking-wider border-b border-slate-200">
                      <th className="pb-2 font-semibold">Medication</th>
                      <th className="pb-2 font-semibold">Dose</th>
                      <th className="pb-2 font-semibold">Route</th>
                      <th className="pb-2 font-semibold">Freq</th>
                      <th className="pb-2 font-semibold">Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {reportedMeds.map((m, i) => (
                      <tr key={i}>
                        <td className="py-2.5 font-bold text-slate-800">{m.name}</td>
                        <td className="py-2.5 text-slate-600">{m.dose}</td>
                        <td className="py-2.5 text-slate-600">{m.route}</td>
                        <td className="py-2.5 text-slate-600">{m.freq}</td>
                        <td className="py-2.5 text-slate-500 italic">{m.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

/* ------------------------------------------------------------------ Vitals */
export function VitalsTab({ c }) {
  const v = c.VITALS
  const vitalsList = [
    { label: 'Office BP', time: '06/23/2026 09:14', value: v.bp, flag: v.flags?.bp, ref: '<130/80 mmHg', trend: 'down', icon: 'H' },
    { label: 'Repeat BP', time: '06/23/2026 09:14', value: v.bpRepeat, flag: v.flags?.bpRepeat, ref: '<130/80 mmHg', icon: 'H' },
    { label: 'Heart rate', time: '06/23/2026 09:14', value: `${v.hr}`, ref: '60–100 bpm' },
    { label: 'Respiratory rate', time: '06/23/2026 09:14', value: v.rr, ref: '12–20 /min' },
    { label: 'Temperature', time: '06/23/2026 09:14', value: v.temp, ref: '97.0–99.5 °F' },
    { label: 'SpO₂', time: '06/23/2026 09:14', value: v.spo2 || '97 %', ref: '95–100 %' },
    { label: 'Weight', time: '06/23/2026 09:14', value: v.weight, ref: '—', trend: 'down' },
    { label: 'Height', time: '06/23/2026 09:14', value: v.height, ref: '—' },
    { label: 'BMI', time: '06/23/2026 09:14', value: v.bmi, flag: v.flags?.bmi, ref: '18.5–24.9 kg/m²', sub: '34.8 — Obesity, Class I', icon: 'H' },
    { label: 'BSA (Mosteller)', time: '06/23/2026 09:14', value: '2.04 m²', ref: '—' },
  ]
  return (
    <div className="space-y-4 pb-8">
      <SectionTitle sub="Vital signs recorded at this visit">Vitals</SectionTitle>
      <Card className="bg-white">
        <table className="w-full text-[13px] min-w-[800px]">
          <thead>
            <tr className="text-left text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100">
              <th className="py-3 px-4 w-[28%]">Vital</th>
              <th className="py-3 px-4 w-[28%]">Value</th>
              <th className="py-3 px-4 w-[20%]">Reference</th>
              <th className="py-3 px-4 w-[12%]">Trend</th>
              <th className="py-3 px-4">Flag</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {vitalsList.map((vItem, i) => (
              <tr key={i}>
                <td className="py-3.5 px-4">
                  <p className="text-[13px] text-slate-600 mb-0.5">{vItem.label}</p>
                  <p className="text-[11px] text-slate-400">{vItem.time}</p>
                </td>
                <td className="py-3.5 px-4">
                  <p className="font-bold text-slate-800">{vItem.value ?? '—'}</p>
                  {vItem.sub && <p className="text-[11px] text-slate-400 mt-0.5">{vItem.sub}</p>}
                </td>
                <td className="py-3.5 px-4 text-slate-400 text-[13px]">
                  {vItem.ref}
                </td>
                <td className="py-3.5 px-4">
                  {vItem.trend === 'down' ? (
                    <div className="flex items-center gap-1.5 text-teal-700">
                      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2L12 10L24 10" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <polygon points="12,0 16,5 8,5" fill="#1e293b" transform="translate(4.5, 4.5) scale(0.6) rotate(180 12 2.5)" />
                      </svg>
                    </div>
                  ) : (
                    <span className="text-slate-300">—</span>
                  )}
                </td>
                <td className="py-3.5 px-4">
                  {vItem.icon ? (
                    <span className="inline-flex items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600 px-2 py-0.5 text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5" />{vItem.icon}
                    </span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
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
            <p className="text-[12px] text-slate-500 mb-6 mt-1">Select a panel to open its results. Watch for screening that hasn't been done.</p>
            <ul className="divide-y divide-slate-100">
              {LAB_GROUPS.map(g => {
                const labs = membersOf(c, g.members)
                const st = panelStatus(labs)
                return (
                  <li key={g.key}>
                    <button onClick={() => setPanel(g.key)}
                      className="w-full flex items-center justify-between gap-3 py-4 text-left hover:bg-slate-50 rounded-lg transition">
                      <span className="text-[13px] text-slate-600">{g.label}</span>
                      <span className="flex items-center gap-4">
                        {st.flag === 'missing' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-[11px] font-bold">
                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />{st.text}
                          </span>
                        ) : st.flag !== 'normal' ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-red-200 bg-red-50 text-red-600 text-[11px] font-bold">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{st.text}
                          </span>
                        ) : (
                          <StatusPill text={st.text} flag={st.flag} />
                        )}
                        <ChevronRight size={16} className="text-slate-300" />
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Card>
          {missing.length > 0 && (
            <div className="flex items-start gap-2 rounded-lg border border-dashed border-purple-200 bg-purple-50 px-3 py-2.5 text-[13px] text-purple-800 mt-6">
              <span className="font-bold shrink-0">Missing →</span>
              <span>{missing.map(m => m.label).join(', ')} {missing.length === 1 ? 'has' : 'have'} no result on file. Recognize the screening gap — open the relevant panel and order it.</span>
            </div>
          )}
        </div>
      )
    }

    const title = OPTIONS.find(o => o.key === panel)?.label || panel
    let activeLabs = []
    if (panel === 'all') activeLabs = c.LABS
    else if (panel === 'missing') activeLabs = missing
    else activeLabs = membersOf(c, LAB_GROUPS.find(g => g.key === panel)?.members || [])

    return (
      <Card title={title} icon={FlaskConical} color="0891b2">
        <LabTable labs={activeLabs} />
      </Card>
    )
  }

  return (
    <div className="space-y-4 pb-8">
      <SectionTitle sub="Results are organized into panels — open the one you need">Labs</SectionTitle>

      <div className="flex items-center gap-3 mb-4 mt-2">
        <Filter size={16} className="text-slate-500" />
        <label className="text-[12px] font-bold text-slate-500">Lab panel</label>
        <select value={panel} onChange={e => setPanel(e.target.value)}
          className="border border-slate-200 rounded-md text-[13px] py-1.5 pl-3 pr-8 shadow-sm text-slate-800 bg-white focus:ring-teal-500">
          {OPTIONS.map(o => (
            <option key={o.key} value={o.key}>{o.label}</option>
          ))}
        </select>
      </div>

      {renderBody()}
    </div>
  )
}

/* ------------------------------------------------------------------ Medications */
export function MedicationsTab({ c }) {
  const [tab, setTab] = useState('current')
  
  const allMeds = c.MEDICATIONS || []
  const currentMeds = allMeds.filter(m => m.status !== 'Discontinued')
  const discontinuedMeds = allMeds.filter(m => m.status === 'Discontinued')

  const activeMeds = currentMeds.filter(m => !m.patientReported)
  const reportedMeds = currentMeds.filter(m => m.patientReported)

  return (
    <div className="space-y-4 pb-8">
      <SectionTitle sub="Documented medication list (as recorded in the chart)">Medications</SectionTitle>

      <Card icon={Pill} title="Medications" color="0d9488">
        <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-3">
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setTab('current')}
              className={`px-4 py-1.5 text-[13px] font-semibold rounded-md transition-colors ${tab === 'current' ? 'bg-white text-slate-800 shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Current / Home meds ({currentMeds.length})
            </button>
            <button
              onClick={() => setTab('discontinued')}
              className={`px-4 py-1.5 text-[13px] font-semibold rounded-md transition-colors ${tab === 'discontinued' ? 'bg-white text-slate-800 shadow-sm ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Discontinued ({discontinuedMeds.length})
            </button>
          </div>
          <div className="text-[11px] text-slate-400 flex items-center gap-1">
            <span className="text-slate-300">✓</span> Allergy/interaction check active · NKDA — no conflicts
          </div>
        </div>

        <div className="overflow-x-auto">
          {tab === 'current' ? (
            <>
              {/* Prescribed */}
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Prescribed / Active Medications</h4>
              <table className="w-full text-[13px] min-w-[1000px] mb-8">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-wide text-slate-400 border-b border-slate-200">
                    <th className="py-2 px-2 font-semibold w-[28%]">Medication</th>
                    <th className="py-2 px-2 font-semibold">Status</th>
                    <th className="py-2 px-2 font-semibold">Dose</th>
                    <th className="py-2 px-2 font-semibold">Route</th>
                    <th className="py-2 px-2 font-semibold">Freq</th>
                    <th className="py-2 px-2 font-semibold">Indication</th>
                    <th className="py-2 px-2 font-semibold">Start</th>
                    <th className="py-2 px-2 font-semibold">Prescriber</th>
                    <th className="py-2 px-2 font-semibold">Last Filled</th>
                    <th className="py-2 px-2 font-semibold">Refills</th>
                    <th className="py-2 px-2 font-semibold">Pharmacy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {activeMeds.map(m => (
                    <tr key={m.name}>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Pill size={14} className="text-teal" />
                          <span className="font-semibold text-slate-800">{m.name}</span>
                          <span className="text-slate-400 text-[10px]">✓</span>
                        </div>
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-semibold">{m.class}</span>
                          <span className="text-[11px] text-slate-400">{m.brand}</span>
                        </div>
                        <p className="text-[12px] text-slate-500">Sig: {m.sig}</p>
                      </td>
                      <td className="py-4 px-2 align-top pt-5">
                        <span className="px-2 py-0.5 rounded-full border border-slate-200 text-slate-700 text-[11px] font-semibold bg-white">{m.status || 'Active'}</span>
                      </td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.dose}</td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.route}</td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600 whitespace-nowrap">{m.freq}</td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.indication}</td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.start}</td>
                      <td className="py-4 px-2 align-top pt-5">
                        <p className="text-slate-700">{m.prescriber}</p>
                        <p className="text-[10px] text-slate-400 whitespace-nowrap">{m.clinic}</p>
                      </td>
                      <td className="py-4 px-2 align-top pt-5">
                        <p className="text-slate-700">{m.lastFilled}</p>
                        <p className="text-[10px] text-slate-400 whitespace-nowrap">Qty {m.qty}</p>
                      </td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.refills}</td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.pharmacy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Patient Reported */}
              {reportedMeds.length > 0 && (
                <>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-2 mt-4">Patient-Reported (Not Verified)</h4>
                  <div className="bg-amber-50/50 rounded-xl border border-amber-100 mb-2 overflow-hidden">
                    <table className="w-full text-[13px] min-w-[800px]">
                      <thead>
                        <tr className="text-left text-[11px] uppercase tracking-wide text-slate-400 border-b border-amber-100">
                          <th className="py-3 px-4 font-semibold w-5/12">Medication</th>
                          <th className="py-3 px-4 font-semibold">Dose</th>
                          <th className="py-3 px-4 font-semibold">Route</th>
                          <th className="py-3 px-4 font-semibold">Freq</th>
                          <th className="py-3 px-4 font-semibold">Indication</th>
                          <th className="py-3 px-4 font-semibold">Source</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100">
                        {reportedMeds.map(m => (
                          <tr key={m.name}>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-1.5 mb-1.5">
                                <Pill size={14} className="text-amber-600" />
                                <span className="font-semibold text-slate-800">{m.name}</span>
                                <span className="text-slate-400 text-[10px]">✓</span>
                              </div>
                              <div className="flex items-center gap-1.5 mb-1.5">
                                <span className="px-1.5 py-0.5 bg-white border border-amber-200 text-slate-500 rounded text-[10px] font-semibold">{m.class}</span>
                                <span className="text-[11px] text-slate-400">{m.brand}</span>
                              </div>
                              <p className="text-[12px] text-slate-500">Sig: {m.sig}</p>
                            </td>
                            <td className="py-4 px-4 align-top pt-5 text-slate-600">{m.dose}</td>
                            <td className="py-4 px-4 align-top pt-5 text-slate-600">{m.route}</td>
                            <td className="py-4 px-4 align-top pt-5 text-slate-600">{m.freq}</td>
                            <td className="py-4 px-4 align-top pt-5 text-slate-600">{m.indication}</td>
                            <td className="py-4 px-4 align-top pt-5">
                              <span className="px-2 py-0.5 rounded-full border border-amber-200 text-amber-700 text-[11px] font-semibold bg-white">Reported</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {/* Discontinued */}
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">Discontinued Medications</h4>
              <table className="w-full text-[13px] min-w-[1000px] mb-8 opacity-75">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-wide text-slate-400 border-b border-slate-200">
                    <th className="py-2 px-2 font-semibold w-[28%]">Medication</th>
                    <th className="py-2 px-2 font-semibold">Status</th>
                    <th className="py-2 px-2 font-semibold">Dose</th>
                    <th className="py-2 px-2 font-semibold">Route</th>
                    <th className="py-2 px-2 font-semibold">Freq</th>
                    <th className="py-2 px-2 font-semibold">Indication</th>
                    <th className="py-2 px-2 font-semibold">Start</th>
                    <th className="py-2 px-2 font-semibold">Prescriber</th>
                    <th className="py-2 px-2 font-semibold">Last Filled</th>
                    <th className="py-2 px-2 font-semibold">Refills</th>
                    <th className="py-2 px-2 font-semibold">Pharmacy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {discontinuedMeds.map(m => (
                    <tr key={m.name}>
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Pill size={14} className="text-teal" />
                          <span className="font-semibold text-slate-800">{m.name}</span>
                          <span className="text-slate-400 text-[10px]">✓</span>
                        </div>
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-semibold">{m.class}</span>
                          <span className="text-[11px] text-slate-400">{m.brand}</span>
                        </div>
                        <p className="text-[12px] text-slate-500">Sig: {m.sig}</p>
                      </td>
                      <td className="py-4 px-2 align-top pt-5">
                        <span className="px-2 py-0.5 rounded-full border border-slate-200 text-slate-500 text-[11px] font-semibold bg-slate-50">Discontinued</span>
                      </td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.dose}</td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.route}</td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600 whitespace-nowrap">{m.freq}</td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.indication}</td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600 whitespace-nowrap">{m.start}</td>
                      <td className="py-4 px-2 align-top pt-5">
                        <p className="text-slate-700">{m.prescriber}</p>
                        <p className="text-[10px] text-slate-400 whitespace-nowrap">{m.clinic}</p>
                      </td>
                      <td className="py-4 px-2 align-top pt-5">
                        <p className="text-slate-700">{m.lastFilled}</p>
                        <p className="text-[10px] text-slate-400 whitespace-nowrap">Qty {m.qty}</p>
                      </td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.refills}</td>
                      <td className="py-4 px-2 align-top pt-5 text-slate-600">{m.pharmacy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </Card>

      <Card title="Medication reconciliation prompts" icon={ClipboardList} color="7c3aed">
        <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4 text-[13px] text-slate-600 mb-6 mt-2">
          {['Ask about OTC medications (e.g., pain relievers, supplements)',
            'Ask about any side effects or new symptoms',
            'Ask about missed doses and the reasons behind them',
            'Ask about cost or refill barriers'].map(t => (
            <li key={t} className="flex gap-2"><span className="text-violet-500 font-bold mt-0.5">•</span><span>{t}</span></li>
          ))}
        </ul>
        <div className="flex items-start gap-2 rounded-lg border border-dashed border-purple-200 bg-purple-50 px-3 py-2 text-[13px] text-purple-800">
          <span className="font-bold shrink-0">Missing →</span>
          <span>The visible list may be incomplete — patients often omit OTC products. Confirm in the interview.</span>
        </div>
      </Card>
    </div>
  )
}

/* ------------------------------------------------------------------ Allergies */
export function AllergiesTab({ c }) {
  const isNKDA = c.ALLERGIES?.some(a => a.substance.includes('NKDA'))

  return (
    <div className="space-y-4 pb-8">
      <SectionTitle sub="Documented allergies and reactions">Allergies</SectionTitle>
      
      {isNKDA && (
        <Card className="mb-4 bg-white">
          <div className="flex items-center gap-3 py-1 px-2">
            <span className="text-slate-800">✓</span>
            <span className="font-bold text-slate-800">No Known Drug Allergies (NKDA)</span>
          </div>
        </Card>
      )}

      <Card title="Drug allergies">
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] min-w-[800px] mb-2">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wide text-slate-400 border-b border-slate-100">
                <th className="py-3 px-2 font-semibold w-1/5">Substance</th>
                <th className="py-3 px-2 font-semibold w-1/5">Reaction</th>
                <th className="py-3 px-2 font-semibold w-1/6">Severity</th>
                <th className="py-3 px-2 font-semibold w-1/6">Reaction Type</th>
                <th className="py-3 px-2 font-semibold w-1/6">Date Noted</th>
                <th className="py-3 px-2 font-semibold">Source / Verified-by</th>
              </tr>
            </thead>
            <tbody>
              {isNKDA ? (
                <tr>
                  <td colSpan="6" className="py-4 px-2 text-[13px] text-slate-400">No known drug allergies (NKDA).</td>
                </tr>
              ) : (
                c.ALLERGIES.map((a, i) => (
                  <tr key={i} className="border-b border-slate-50 last:border-0">
                    <td className="py-3 px-2 font-semibold text-slate-800">{a.substance}</td>
                    <td className="py-3 px-2 text-slate-600">{a.reaction}</td>
                    <td className="py-3 px-2 text-slate-600">{a.severity || '—'}</td>
                    <td className="py-3 px-2 text-slate-600">{a.type || '—'}</td>
                    <td className="py-3 px-2 text-slate-600">{a.date || '—'}</td>
                    <td className="py-3 px-2 text-slate-600">{a.source || '—'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Non-drug allergies (food, environmental, latex)">
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] min-w-[800px] mb-2">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wide text-slate-400 border-b border-slate-100">
                <th className="py-3 px-2 font-semibold w-1/5">Substance</th>
                <th className="py-3 px-2 font-semibold w-1/5">Reaction</th>
                <th className="py-3 px-2 font-semibold w-1/6">Severity</th>
                <th className="py-3 px-2 font-semibold w-1/6">Reaction Type</th>
                <th className="py-3 px-2 font-semibold w-1/6">Date Noted</th>
                <th className="py-3 px-2 font-semibold">Source / Verified-by</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="py-4 px-2 text-[13px] text-slate-400">None documented.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

/* ------------------------------------------------------------------ Problem list */
export function ProblemListTab({ c }) {
  return (
    <div className="space-y-4 pb-8">
      <SectionTitle sub="Active problems on the chart">Problem List</SectionTitle>
      <Card>
        <div className="flex justify-end mb-4">
          <span className="text-[10px] font-bold text-slate-400">Problem list reviewed 06/23/2026</span>
        </div>
        <ul className="divide-y divide-slate-100">
          {c.PROBLEMS.map(p => (
            <li key={p.name} className="flex items-start justify-between py-5 first:pt-2 last:pb-2">
              <div>
                <p className="flex items-center gap-2 mb-1.5">
                  <span className="text-[14px] font-bold text-slate-800">{p.name}</span>
                  {p.icd10 && <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500">{p.icd10}</span>}
                </p>
                <p className="text-[13px] text-slate-500 mb-1">{p.detail}</p>
                <p className="text-[11px] text-slate-400">Noted {p.noted}Managed by Dr. Johnson</p>
              </div>
              <div className="mt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-200 bg-white text-slate-800 text-[11px] font-bold">
                  <span className="w-2 h-2 bg-teal-600 rounded-full" />Active
                </span>
              </div>
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
  const vitalsList = [
    { label: 'BP', value: v.bp, flag: v.flags?.bp, ref: '<130/80 mmHg', trend: 'down' },
    { label: 'Repeat BP', value: v.bpRepeat, flag: v.flags?.bpRepeat, ref: '<130/80 mmHg' },
    { label: 'HR', value: `${v.hr} bpm`, flag: v.flags?.hr, ref: '60–100 bpm' },
    { label: 'Temp', value: v.temp, flag: v.flags?.temp, ref: '97.0–99.5 °F' },
    { label: 'RR', value: v.rr, flag: v.flags?.rr, ref: '12–20 /min' },
    { label: 'SpO₂', value: v.spo2 || '97 %', flag: v.flags?.spo2, ref: '95–100 %' },
    { label: 'Weight', value: v.weight, flag: v.flags?.weight, trend: 'down', ref: '—' },
    { label: 'Height', value: v.height, flag: v.flags?.height, ref: '—' },
    { label: 'Pain', value: v.pain || '0/10', flag: v.flags?.pain, ref: '0/10' },
    { label: 'BMI', value: v.bmi, flag: v.flags?.bmi, ref: '18.5–24.9 kg/m²' },
  ]

  const labPanels = [
    { name: 'DIABETES', collected: '06/09/2026 07:50', members: ['A1C', 'Glucose'] },
    { name: 'BASIC METABOLIC PANEL', collected: '06/09/2026 07:50', members: ['Na', 'K', 'Cl', 'CO2', 'BUN', 'SCr', 'eGFR'] },
    { name: 'HEPATIC FUNCTION', collected: '06/09/2026 07:50', members: ['AST', 'ALT'] },
    { name: 'LIPID PANEL', collected: '06/09/2026 07:50', members: ['Total cholesterol', 'LDL-C', 'HDL-C', 'Triglycerides'] },
    { name: 'URINE STUDIES', collected: '06/09/2026 07:50', members: ['UACR'] },
  ]

  const getLab = (name) => c.LABS?.find(l => l.label === name)

  return (
    <div className="space-y-4 pb-8">
      <SectionTitle sub="Objective data: vitals, labs, medications, allergies, immunizations">Objective</SectionTitle>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Vitals */}
        <Card title="Vitals" icon={HeartPulse} color="13314f">
          <p className="text-[10px] text-slate-400 mb-2">Recorded {v.vitalsTime || '06/23/2026 09:14'}</p>
          <ul className="divide-y divide-slate-50">
            {vitalsList.map((vItem, i) => (
              <li key={i} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-[13px] text-slate-600">{vItem.label}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Ref {vItem.ref}</p>
                </div>
                <div className="flex items-center gap-4">
                  {vItem.trend === 'down' && (
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 2L12 10L24 10" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <polygon points="12,0 16,5 8,5" fill="#1e293b" transform="translate(4.5, 4.5) scale(0.6) rotate(180 12 2.5)" />
                    </svg>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-bold text-slate-800">{vItem.value ?? '—'}</span>
                    {vItem.flag && vItem.flag !== 'normal' && <FlagPill flag={vItem.flag} />}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Key Labs */}
        <Card title="Key labs" icon={FlaskConical} color="0891b2">
          <div className="space-y-6">
            {labPanels.map((panel, pIdx) => {
              const panelLabs = panel.members.map(getLab).filter(Boolean)
              if (panelLabs.length === 0) return null
              return (
                <div key={pIdx}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{panel.name}</h4>
                    <span className="text-[10px] text-slate-400">Collected {panel.collected}</span>
                  </div>
                  <ul className="divide-y divide-slate-50">
                    {panelLabs.map((l, i) => (
                      <li key={i} className="flex items-start justify-between py-2.5">
                        <div>
                          <p className="text-[13px] text-slate-600 flex items-center gap-1">
                            {l.label}
                            {l.flag === 'high' && <span className="text-red-600 text-[10px]">▲</span>}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Ref {l.ref || '—'}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-bold text-slate-800">
                            {l.value} {l.unit && <span className="font-normal text-slate-600">{l.unit}</span>}
                          </span>
                          {l.flag && l.flag !== 'normal' && <FlagPill flag={l.flag} />}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      {/* Physical Exam */}
      {c.PHYSICAL_EXAM && (
        <Card title="Physical exam" icon={FileText} color="13314f">
          <ul className="space-y-2">
            {Object.entries(c.PHYSICAL_EXAM).map(([sys, findings], i) => (
              <li key={i} className="flex items-start gap-4 text-[13px]">
                <span className="text-slate-400 w-16 shrink-0 capitalize">{sys}</span>
                <span className="text-slate-700">{findings}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Immunizations */}
      <Card title="Immunizations" icon={Syringe} color="0d9488">
        <ul className="space-y-0 divide-y divide-slate-100">
          {c.IMMUNIZATIONS.map(im => (
            <li key={im.name} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-[13px] text-slate-700">{im.name}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{im.status}</p>
                {im.detail && <p className="text-[10px] text-slate-300 mt-0.5">{im.detail}</p>}
              </div>
              <div className="flex items-center">
                {im.flag === 'normal' ? (
                  <span className="text-[11px] text-slate-500">✓ Up to date</span>
                ) : (
                  im.flag && <FlagPill flag={im.flag} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Missing Objective Data */}
      {c.OBJECTIVE_EXTRA?.length > 0 && (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
            <span className="grid place-items-center w-7 h-7 rounded-lg text-white bg-purple-600">
              <AlertTriangle size={16} />
            </span>
            <h3 className="font-head text-[15px] text-slate-800">Additional / missing objective data</h3>
          </div>
          <div className="p-4 space-y-2">
            {c.OBJECTIVE_EXTRA.map((o, i) => (
              <div key={i} className="flex items-start gap-2 rounded-lg border border-dashed border-purple-200 bg-purple-50 px-3 py-2 text-[13px] text-purple-800">
                <span className="font-bold shrink-0">Missing →</span>
                <span>{o.label}: {o.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
