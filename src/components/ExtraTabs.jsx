import React from 'react'
import { Card, SectionTitle, Badge } from './ui'
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react'

export function GuidingQuestionsTab({ c }) {
  return (
    <div>
      <SectionTitle sub="Questions to scaffold your reasoning — they guide without giving away the answer">Guiding Questions</SectionTitle>
      <Card>
        <ol className="space-y-3">
          {c.GUIDING_QUESTIONS.map((q, i) => (
            <li key={i} className="flex gap-3">
              <span className="grid place-items-center w-6 h-6 rounded-full bg-navy/10 text-navy text-[12px] font-bold shrink-0">{i + 1}</span>
              <p className="text-[13px] text-slate-700 leading-relaxed pt-0.5">{q}</p>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  )
}

export function CounselingTab({ c, onView }) {
  // mark counseling reviewed on first render
  React.useEffect(() => { onView && onView() }, []) // eslint-disable-line
  return (
    <div>
      <SectionTitle sub="Plain-language scripts you can adapt when counseling the patient">Counseling</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {(c.COUNSELING || []).map((mod, idx) => {
          if (typeof mod === 'string') {
            return (
              <Card key={idx} title={`Counseling Point ${idx + 1}`} icon={MessageCircle} color="0d9488">
                <p className="text-[13px] text-slate-600 leading-relaxed flex gap-2">
                  <span className="text-teal mt-0.5">“</span><span>{mod}</span><span className="text-teal mt-0.5">”</span>
                </p>
              </Card>
            )
          }
          const bodyLines = Array.isArray(mod.body) ? mod.body : (mod.body ? [mod.body] : (mod.text ? [mod.text] : []))
          return (
            <Card key={mod.id || idx} title={mod.title || `Counseling Point ${idx + 1}`} icon={MessageCircle} color="0d9488">
              <ul className="space-y-2">
                {bodyLines.map((line, i) => (
                  <li key={i} className="flex gap-2 text-[13px] text-slate-600 leading-relaxed">
                    <span className="text-teal mt-0.5">“</span><span>{line}</span><span className="text-teal mt-0.5">”</span>
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
