import React from 'react'
import { Card, AutoTextarea, SectionTitle, MissingCallout } from './ui'
import { FileText, MessageSquare, Sparkles } from 'lucide-react'

export function SubjectiveTab({ c, interview, discovered, onField }) {
  const fields = c.INTERVIEW_FIELDS || []
  
  // Helper to safely get field by key, or fallback if it's missing from c.INTERVIEW_FIELDS
  const getField = (k) => fields.find(f => f.key === k) || { key: k, label: k }

  const groups = [
    {
      id: 'hpi', label: 'HPI', title: 'History of Present Illness',
      fields: [
        { key: 'hpiNarrative', label: 'HPI narrative', placeholder: 'Brief narrative of the present illness...' }
      ]
    },
    {
      id: 'meds', label: 'MEDS', title: 'Medication History / Reconciliation',
      fields: ['currentMeds', 'adherence', 'otc', 'sideEffects'].map(k => getField(k))
    },
    {
      id: 'sh', label: 'SH', title: 'Social History',
      fields: [
        getField('diet'),
        getField('exercise'),
        { key: 'tobacco', label: 'Tobacco use', type: 'select', options: ['None', 'Occasional', 'Moderate', 'Heavy'] },
        { key: 'alcohol', label: 'Alcohol use', type: 'select', options: ['None', 'Occasional', 'Moderate', 'Heavy'] },
        { key: 'caffeine', label: 'Caffeine', placeholder: 'e.g., 2 cups coffee/day' }
      ]
    },
    {
      id: 'fh', label: 'FH', title: 'Family History',
      fields: [getField('familyHistory')]
    },
    {
      id: 'reported', label: '', title: 'Patient-Reported / Self-Management',
      fields: ['homeBp', 'bpTechnique', 'glucoseMonitoring', 'weightGoals', 'diseaseUnderstanding', 'concerns', 'cost'].map(k => getField(k))
    }
  ]

  return (
    <div className="space-y-4 pb-8">
      <SectionTitle sub="Documented history plus the findings you gather through the interview">Subjective</SectionTitle>

      <div className="flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
        <MessageSquare size={18} className="text-amber-600 mt-0.5 shrink-0" />
        <p className="text-[13px] text-amber-800 leading-snug">
          Some subjective information is intentionally missing. <strong>Interview the patient</strong> to complete this section, then document what you learn below.
        </p>
      </div>

      <Card title="Documented (from the chart)" icon={FileText} color="13314f">
        <div className="pb-3 mb-3 border-b border-slate-100">
          <p className="text-[10px] text-slate-400">
            Documented by: {c.DOCUMENTED_META?.by || 'Intake RN'} · {c.DOCUMENTED_META?.when || '06/23/2026 08:50'} · {c.DOCUMENTED_META?.encounter || 'Initial Ambulatory Care Pharmacist Visit'}
          </p>
        </div>
        
        <dl className="space-y-4">
          {c.SUBJECTIVE_DOCUMENTED.map(s => {
            if (s.label === 'PMH' || s.label.includes('PMH')) {
              return (
                <div key={s.label} className="text-[13px]">
                  <dt className="font-semibold text-slate-700 mb-1">PMH (Past Medical History)</dt>
                  <dd>
                    {c.DOCUMENTED_PMH && c.DOCUMENTED_PMH.length > 0 ? (
                      <ul className="space-y-1">
                        {c.DOCUMENTED_PMH.map((p, i) => (
                          <li key={i} className="flex justify-between text-slate-600">
                            <span>{p.condition} <span className="text-slate-400 text-[11px] ml-1">· onset {p.onset}</span></span>
                            <span className="font-mono text-[11px] text-slate-500">{p.icd10}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-slate-600">{s.value}</span>
                    )}
                  </dd>
                </div>
              )
            }
            
            return (
              <div key={s.label} className="text-[13px]">
                <dt className="font-semibold text-slate-700 mb-0.5">{s.label}</dt>
                <dd className="text-slate-600">{s.value}</dd>
              </div>
            )
          })}
        </dl>
      </Card>

      <Card title="Interview documentation" icon={MessageSquare} color="0d9488">
        <p className="text-[12px] text-slate-500 mb-6">
          Document findings obtained during the patient interview. Fields automatically save. Topics discussed are marked as <span className="inline-flex items-center gap-1 mx-0.5"><Sparkles size={10} className="text-slate-400"/></span> Discovered.
        </p>
        
        <div className="space-y-8">
          {groups.map(g => (
            <div key={g.title}>
              <div className="flex items-center gap-2 mb-3">
                {g.label && <span className="inline-block px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded tracking-wide">{g.label}</span>}
                <h3 className="text-[14px] font-head text-slate-700">{g.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
                {g.fields.map(f => {
                  if (!f || !f.label) return null
                  const isDiscovered = discovered[f.key]
                  
                  return (
                    <div key={f.key}>
                      <label className="flex items-center gap-2 text-[11px] font-bold text-slate-700 mb-1.5">
                        {f.label}
                        {isDiscovered && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-teal/10 text-teal text-[10px] font-semibold">
                            ✓ Discovered
                          </span>
                        )}
                      </label>
                      {f.type === 'select' ? (
                        <div className="relative">
                          <select
                            value={interview[f.key] || ''}
                            onChange={e => onField(f.key, e.target.value)}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[13px] leading-relaxed text-slate-800 outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 appearance-none"
                          >
                            <option value="">—</option>
                            {f.options.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                        </div>
                      ) : (
                        <AutoTextarea
                          value={interview[f.key]}
                          onChange={val => onField(f.key, val)}
                          placeholder={f.placeholder}
                          rows={2}
                          saved
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-4 border-t border-slate-100">
          <div className="flex items-start gap-2 rounded-lg border border-dashed border-violet-300 bg-violet-50 px-4 py-3 text-[13px] text-violet-800">
            <span className="font-bold">Missing →</span>
            <span>If a field is still blank, you probably haven't asked about it yet — return to the interview.</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
