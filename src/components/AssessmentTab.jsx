import React from 'react'
import { Card, AutoTextarea, SectionTitle } from './ui'
import { getIcon } from '../lib/iconMap'

const LEVELS = [
  { key: 'low', label: 'Low' },
  { key: 'med', label: 'Medium' },
  { key: 'high', label: 'High' },
]

export function AssessmentTab({ c, assessment, confidence, onAnswer, onConfidence }) {
  return (
    <div>
      <SectionTitle sub="Work through the clinical reasoning for each problem. Answers autosave.">Assessment</SectionTitle>

      <div className="space-y-4">
        {c.ASSESSMENT_CARDS.map(card => {
          const Icon = getIcon(card.icon)
          const conf = confidence[card.id]
          return (
            <Card key={card.id} title={card.title} icon={Icon} color={card.color}
              right={
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-slate-400 mr-1">Confidence</span>
                  {LEVELS.map(l => (
                    <button key={l.key} onClick={() => onConfidence(card.id, l.key)}
                      className={`text-[11px] px-2 py-1 rounded-md font-semibold transition ${
                        conf === l.key ? 'bg-teal text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                      {l.label}
                    </button>
                  ))}
                </div>
              }>
              <div className="space-y-3">
                {card.questions.map(qq => (
                  <div key={qq.key}>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-1">{qq.q}</label>
                    <AutoTextarea value={assessment[qq.key]} onChange={v => onAnswer(qq.key, v)}
                                  placeholder="Your clinical reasoning…" rows={2} saved />
                  </div>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
