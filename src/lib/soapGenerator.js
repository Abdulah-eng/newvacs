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

export function generateSoapDraft(caseData, state = {}) {
  const interview = state.interview || {}
  const assess = state.assessment || {}
  const planSel = state.planSelections || {}
  const planText = state.planFreetext || {}

  const v = caseData.VITALS || {}
  const labs = caseData.LABS || []

  // ---------- Subjective ----------
  const subLines = []
  if (caseData.PATIENT) {
    subLines.push(`${caseData.PATIENT.name}, ${caseData.PATIENT.age}yo ${caseData.PATIENT.sex}, presents for ${caseData.ENCOUNTER?.type || 'encounter'}.`)
  }
  if (caseData.ENCOUNTER?.chiefConcern) {
    subLines.push(`Chief concern: "${caseData.ENCOUNTER.chiefConcern}"`)
  }
  
  if (Array.isArray(caseData.SUBJECTIVE_DOCUMENTED)) {
    caseData.SUBJECTIVE_DOCUMENTED.forEach(s => subLines.push(`- ${s.label}: ${s.value}`))
  }

  // Compile all interview fields (student documented or from INTERVIEW_KNOWLEDGE)
  const interviewLines = []
  const outputtedKeys = new Set()

  // First, check case-specific interview fields from state
  if (caseData.INTERVIEW_FIELDS) {
    caseData.INTERVIEW_FIELDS.forEach(f => {
      const val = interview[f.key]
      if (val && val.trim().length > 0) {
        interviewLines.push(`- ${f.label}: ${val.trim()}`)
        outputtedKeys.add(f.key)
      }
    })
  }

  // Next, check generic clinical subjective fields from state
  Object.entries(FIELD_LABELS).forEach(([key, label]) => {
    if (outputtedKeys.has(key)) return
    const val = interview[key]
    if (val && val.trim().length > 0) {
      interviewLines.push(`- ${label}: ${val.trim()}`)
      outputtedKeys.add(key)
    }
  })

  // Catch-all for any other custom keys in state.interview
  Object.entries(interview).forEach(([key, val]) => {
    if (outputtedKeys.has(key)) return
    if (val && val.trim().length > 0) {
      interviewLines.push(`- ${prettyKey(key)}: ${val.trim()}`)
      outputtedKeys.add(key)
    }
  })

  // Automatically include INTERVIEW_KNOWLEDGE items if not already present
  if (Array.isArray(caseData.INTERVIEW_KNOWLEDGE)) {
    caseData.INTERVIEW_KNOWLEDGE.forEach(ik => {
      if (ik.topic && ik.response) {
        const topicLower = ik.topic.toLowerCase()
        const existingStr = (subLines.join(' ') + ' ' + interviewLines.join(' ')).toLowerCase()
        if (!existingStr.includes(topicLower) && !existingStr.includes(ik.response.toLowerCase().slice(0, 20))) {
          interviewLines.push(`- ${ik.topic}: ${ik.response}`)
        }
      }
    })
  }

  if (interviewLines.length) {
    subLines.push('Interview findings:')
    interviewLines.forEach(l => subLines.push(l))
  }

  // ---------- Objective ----------
  const objLines = []
  const rawSpO2 = v.spo2 || '97%'
  const spo2Display = (rawSpO2.includes('room air') || rawSpO2.includes('O2') || rawSpO2.includes('L/min') || rawSpO2.includes('NC')) 
    ? rawSpO2 
    : `${rawSpO2} on room air`

  let vitalsStr = `Vitals: BP ${v.bp || '—'}`
  if (v.bpRepeat) vitalsStr += ` (repeat ${v.bpRepeat})`
  vitalsStr += `, HR ${v.hr || '—'}, RR ${v.rr ?? '—'}, Temp ${v.temp ?? '—'}, SpO₂ ${spo2Display}, Wt ${v.weight || '—'}, Ht ${v.height || '—'}, BMI ${v.bmi || '—'}`
  if (v.bmi) {
    const bmiNum = parseFloat(v.bmi)
    if (bmiNum >= 30) vitalsStr += ` (Class I Obesity)`
  }
  vitalsStr += `.`
  objLines.push(vitalsStr)

  if (labs.length) {
    objLines.push('Labs: ' + labs.map(l => `${l.label} ${l.value}${l.unit ? ' ' + l.unit : ''}`).join('; ') + '.')
  }

  if (Array.isArray(caseData.OBJECTIVE_EXTRA) && caseData.OBJECTIVE_EXTRA.length > 0) {
    caseData.OBJECTIVE_EXTRA.forEach(o => objLines.push(`- ${o.label}: ${o.value}`))
  }

  if (Array.isArray(caseData.MEDICATIONS) && caseData.MEDICATIONS.length > 0) {
    objLines.push('Current Medications: ' + caseData.MEDICATIONS.map(m => `${m.name} ${m.dose} ${m.route} ${m.freq}`).join('; ') + '.')
  }

  if (Array.isArray(caseData.ALLERGIES) && caseData.ALLERGIES.length > 0) {
    objLines.push('Allergies: ' + (caseData.ALLERGIES.map(a => a.substance).join(', ') || 'NKDA') + '.')
  }

  if (Array.isArray(caseData.IMMUNIZATIONS) && caseData.IMMUNIZATIONS.length > 0) {
    objLines.push('Immunizations: ' + caseData.IMMUNIZATIONS.map(i => `${i.name}: ${i.status}`).join('; ') + '.')
  }

  // ---------- Assessment ----------
  const aLines = []
  if (Array.isArray(caseData.ASSESSMENT_CARDS)) {
    caseData.ASSESSMENT_CARDS.forEach(card => {
      aLines.push(`# ${card.title}`)
      const questions = card.questions || []
      questions.forEach(qq => {
        const studentVal = (assess[qq.key] || '').trim()
        if (studentVal) {
          aLines.push(`- ${studentVal}`)
        } else if (qq.defaultAnswer) {
          aLines.push(`- ${qq.defaultAnswer}`)
        } else {
          aLines.push(`- ${qq.q}`)
        }
      })
    })
  }

  // ---------- Plan ----------
  const pLines = []
  if (Array.isArray(caseData.PLAN_SECTIONS)) {
    caseData.PLAN_SECTIONS.forEach(sec => {
      const chosen = (sec.options || []).filter(o => planSel[o.key] || o.correct)
      if (chosen.length) {
        pLines.push(`# ${sec.title}`)
        chosen.forEach(o => pLines.push(`- ${o.label}`))
      }
    })
  }
  Object.entries(planText).forEach(([k, val]) => {
    if ((val || '').trim()) pLines.push(`# ${prettyKey(k)}\n${val.trim()}`)
  })

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

