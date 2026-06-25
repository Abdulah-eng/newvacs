import React from 'react'
import { FLAG_STYLES, ALERT_STYLES } from '../lib/iconMap'

export function Card({ title, icon: Icon, color, children, right, className = '' }) {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}>
      {(title || right) && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            {Icon && (
              <span className="grid place-items-center w-7 h-7 rounded-lg text-white"
                    style={{ background: color ? `#${color}` : 'var(--navy)' }}>
                <Icon size={16} />
              </span>
            )}
            <h3 className="font-head text-[15px] text-slate-800">{title}</h3>
          </div>
          {right}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  )
}

export function FlagPill({ flag }) {
  const s = FLAG_STYLES[flag] || FLAG_STYLES.normal
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold ${s.bg} ${s.text} ring-1 ${s.ring}`}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: `#${s.hex}` }} />
      {s.label}
    </span>
  )
}

export function Alert({ level, children }) {
  const s = ALERT_STYLES[level] || ALERT_STYLES.info
  return (
    <div className={`flex gap-3 rounded-lg border ${s.border} ${s.bg} px-3 py-2.5`}>
      <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ background: `#${s.dot}` }} />
      <p className={`text-[13px] leading-snug ${s.text}`}>{children}</p>
    </div>
  )
}

export function Badge({ children, tone = 'navy' }) {
  const tones = {
    navy: 'bg-navy/10 text-navy ring-navy/20',
    teal: 'bg-teal/10 text-teal ring-teal/20',
    amber: 'bg-amber-100 text-amber-800 ring-amber-200',
    red: 'bg-red-100 text-red-700 ring-red-200',
    slate: 'bg-slate-100 text-slate-600 ring-slate-200',
  }
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ring-1 ${tones[tone] || tones.navy}`}>{children}</span>
}

export function MissingCallout({ children }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-dashed border-violet-300 bg-violet-50 px-3 py-2 text-[13px] text-violet-800">
      <span className="font-semibold">Missing →</span><span>{children}</span>
    </div>
  )
}

// Autosaving textarea with a subtle "Saved" hint.
export function AutoTextarea({ value, onChange, placeholder, rows = 3, saved }) {
  return (
    <div className="relative">
      <textarea
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-[13px] leading-relaxed text-slate-800 outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
      />
      {saved && value && <span className="absolute bottom-2 right-3 text-[10px] text-teal font-semibold">saved</span>}
    </div>
  )
}

export function SectionTitle({ children, sub }) {
  return (
    <div className="mb-4">
      <h2 className="font-head text-xl text-navy">{children}</h2>
      {sub && <p className="text-[13px] text-slate-500 mt-0.5">{sub}</p>}
    </div>
  )
}
