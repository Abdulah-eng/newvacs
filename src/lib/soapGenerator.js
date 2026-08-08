const FIELD_LABELS = {
  currentMeds: 'Current Medications',
  adherence: 'Medication Adherence',
  otc: 'OTC / Supplements',
  sideEffects: 'Side Effects / ADRs',
  diet: 'Diet / Nutrition',
  exercise: 'Physical Activity',
  tobacco: 'Tobacco Use',
  alcohol: 'Alcohol Use',
  caffeine: 'Caffeine Intake',
  familyHistory: 'Family History',
  homeBp: 'Home BP Monitoring',
  bpTechnique: 'Home BP Technique',
  glucoseMonitoring: 'Home Glucose Monitoring',
  weightGoals: 'Weight / Lifestyle Goals',
  diseaseUnderstanding: 'Disease Understanding',
  concerns: 'Patient Concerns',
  cost: 'Cost / Financial Barriers'
}

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

  // Compile all non-empty interview fields from state
  const interviewLines = []
  const outputtedKeys = new Set()

  // First, check case-specific interview fields
  if (caseData.INTERVIEW_FIELDS) {
    caseData.INTERVIEW_FIELDS.forEach(f => {
      const val = interview[f.key]
      if (val && val.trim().length > 0) {
        interviewLines.push(`- ${f.label}: ${val.trim()}`)
        outputtedKeys.add(f.key)
      }
    })
  }

  // Next, check generic clinical subjective fields
  Object.entries(FIELD_LABELS).forEach(([key, label]) => {
    if (outputtedKeys.has(key)) return
    const val = interview[key]
    if (val && val.trim().length > 0) {
      interviewLines.push(`- ${label}: ${val.trim()}`)
      outputtedKeys.add(key)
    }
  })

  // Finally, catch-all for any other custom keys in state.interview
  Object.entries(interview).forEach(([key, val]) => {
    if (outputtedKeys.has(key)) return
    if (val && val.trim().length > 0) {
      interviewLines.push(`- ${prettyKey(key)}: ${val.trim()}`)
      outputtedKeys.add(key)
    }
  })

  if (interviewLines.length) {
    subLines.push('Interview findings (student-documented):')
    interviewLines.forEach(l => subLines.push(l))
  } else {
    subLines.push('[Interview findings not yet documented — complete the Patient Interview and Subjective tabs.]')
  }

  // ---------- Objective ----------
  const objLines = []
  const rawSpO2 = v.spo2 || '97%';
  const spo2Display = (rawSpO2.includes('room air') || rawSpO2.includes('O2') || rawSpO2.includes('L/min') || rawSpO2.includes('NC')) 
    ? rawSpO2 
    : `${rawSpO2} on room air`;

  objLines.push(`Vitals: BP ${v.bp} (repeat ${v.bpRepeat}), HR ${v.hr}, RR ${v.rr ?? '—'}, Temp ${v.temp ?? '—'}, SpO₂ ${spo2Display}, Wt ${v.weight}, Ht ${v.height}, BMI ${v.bmi}.`)
  objLines.push('Labs: ' + labs.map(l => `${l.label} ${l.value}${l.unit ? ' ' + l.unit : ''}`).join('; ') + '.')
  objLines.push('Medications: ' + caseData.MEDICATIONS.map(m => `${m.name} ${m.dose} ${m.route} ${m.freq}`).join('; ') + '.')
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
