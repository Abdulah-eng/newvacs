import React from 'react'
import { Card, AutoTextarea, SectionTitle, MissingCallout } from './ui'
import { FileText, MessageSquare, Sparkles } from 'lucide-react'

export function SubjectiveTab({ c, interview, discovered, onField }) {
  return (
    <div>
      <SectionTitle sub="Documented history plus the findings you gather through the interview">Subjective</SectionTitle>

      <div className="mb-4 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
        <MessageSquare size={18} className="text-amber-600 mt-0.5 shrink-0" />
        <p className="text-[13px] text-amber-800 leading-snug">
          Some subjective information is intentionally missing. <strong>Interview the patient</strong> to complete this section, then document what you learn below.
        </p>
      </div>

      <Card title="Documented (from the chart)" icon={FileText} color="13314f" className="mb-4">
        <dl className="space-y-2.5">
          {c.SUBJECTIVE_DOCUMENTED.map(s => (
            <div key={s.label} className="text-[13px]">
              <dt className="font-semibold text-slate-700">{s.label}</dt>
              <dd className="text-slate-600">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Card>

      <Card title="Interview documentation" icon={MessageSquare} color="0d9488">
        <p className="text-[12px] text-slate-500 mb-3">
          Type what you uncover in the Patient Interview. Fields are autosaved. A
          <span className="inline-flex items-center gap-1 mx-1 text-teal font-semibold"><Sparkles size={12} /> discovered</span>
          tag appears once the matching topic has come up in the interview.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {c.INTERVIEW_FIELDS.map(f => (
            <div key={f.key}>
              <label className="flex items-center gap-2 text-[12px] font-semibold text-slate-700 mb-1">
                {f.label}
                {discovered[f.key] && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-teal/10 text-teal text-[10px] font-semibold ring-1 ring-teal/20">
                    <Sparkles size={10} /> discovered
                  </span>
                )}
              </label>
              <AutoTextarea
                value={interview[f.key]}
                onChange={val => onField(f.key, val)}
                placeholder={f.placeholder}
                rows={2}
                saved
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <MissingCallout>If a field is still blank, you probably haven’t asked about it yet — return to the interview.</MissingCallout>
        </div>
      </Card>
    </div>
  )
}
