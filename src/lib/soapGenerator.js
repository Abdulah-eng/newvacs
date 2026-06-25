// Deterministic SOAP draft builder. Pulls from documented interview fields,
// assessment answers, selected plan options, and free-text plan blocks.
// Intentionally template-based for the MVP (no AI call).

export function generateSoapDraft(caseData, state) {
  const interview = state.interview || {}
  const assess = state.assessment || {}
  const planSel = state.planSelections || {}
  const planText = state.planFreetext || {}

  const v = caseData.VITALS
  const labs = caseData.LABS

  // ---------- Subjective ----------
  const subLines = []
  subLines.push(`${caseData.PATIENT.name}, ${caseData.PATIENT.age}yo ${caseData.PATIENT.sex}, presents for ${caseData.ENCOUNTER.type}.`)
  subLines.push(`Chief concern: "${caseData.ENCOUNTER.chiefConcern}"`)
  caseData.SUBJECTIVE_DOCUMENTED.forEach(s => subLines.push(`- ${s.label}: ${s.value}`))
  const interviewLines = caseData.INTERVIEW_FIELDS
    .filter(f => (interview[f.key] || '').trim().length > 0)
    .map(f => `- ${f.label}: ${interview[f.key].trim()}`)
  if (interviewLines.length) {
    subLines.push('Interview findings (student-documented):')
    interviewLines.forEach(l => subLines.push(l))
  } else {
    subLines.push('[Interview findings not yet documented — complete the Patient Interview and Subjective tabs.]')
  }

  // ---------- Objective ----------
  const objLines = []
  objLines.push(`Vitals: BP ${v.bp} (repeat ${v.bpRepeat}), HR ${v.hr}, RR ${v.rr ?? '—'}, Temp ${v.temp ?? '—'}, Wt ${v.weight}, Ht ${v.height}, BMI ${v.bmi}.`)
  objLines.push('Labs: ' + labs.map(l => `${l.label} ${l.value}${l.unit ? ' ' + l.unit : ''}`).join('; ') + '.')
  objLines.push('Medications: ' + caseData.MEDICATIONS.map(m => `${m.name} ${m.dose} ${m.freq}`).join('; ') + '.')
  objLines.push('Allergies: ' + (caseData.ALLERGIES.map(a => a.substance).join(', ') || 'NKDA') + '.')

  // ---------- Assessment ----------
  const aLines = []
  caseData.ASSESSMENT_CARDS.forEach(card => {
    const answered = (card.questions || []).filter(qq => (assess[qq.key] || '').trim().length > 0)
    if (answered.length) {
      aLines.push(`# ${card.title}`)
      answered.forEach(qq => aLines.push(`- ${assess[qq.key].trim()}`))
    } else {
      aLines.push(`# ${card.title}: [assessment pending]`)
    }
  })

  // ---------- Plan ----------
  const pLines = []
  caseData.PLAN_SECTIONS.forEach(sec => {
    const chosen = (sec.options || []).filter(o => planSel[o.key])
    if (chosen.length) {
      pLines.push(`# ${sec.title}`)
      chosen.forEach(o => pLines.push(`- ${o.label}`))
    }
  })
  Object.entries(planText).forEach(([k, val]) => {
    if ((val || '').trim()) pLines.push(`# ${prettyKey(k)}\n${val.trim()}`)
  })
  if (pLines.length === 0) pLines.push('[Plan not yet selected — use the Plan tab to build the plan.]')

  return {
    subjective: subLines.join('\n'),
    objective: objLines.join('\n'),
    assessment: aLines.join('\n'),
    plan: pLines.join('\n'),
  }
}

function prettyKey(k) {
  return k.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase())
}
