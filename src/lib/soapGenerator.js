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
    const eth = caseData.PATIENT.ethnicity ? `${caseData.PATIENT.ethnicity} ` : ''
    const setting = caseData.ENCOUNTER?.setting
      ? ` in ${caseData.ENCOUNTER.setting}`
      : ' in an ambulatory care pharmacy clinic'
    subLines.push(`${caseData.PATIENT.name}, ${caseData.PATIENT.age}yo ${eth}${caseData.PATIENT.sex}, presents for ${caseData.ENCOUNTER?.type || 'encounter'}${setting}.`)
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

  let heightDisplay = v.height || '—'
  if (v.height && v.height.includes("'")) {
    const m = v.height.match(/(\d+)'(\d+)/)
    if (m) {
      const totalInches = parseInt(m[1], 10) * 12 + parseInt(m[2], 10)
      if (!v.height.includes('inches')) {
        heightDisplay = `${v.height} (${totalInches} inches)`
      }
    }
  }
  let vitalsStr = `Vitals: BP ${v.bp || '—'}`
  if (v.bpRepeat) vitalsStr += ` (repeat ${v.bpRepeat})`
  vitalsStr += `, HR ${v.hr || '—'}, RR ${v.rr ?? '—'}, Temp ${v.temp ?? '—'}, SpO₂ ${spo2Display}, Wt ${v.weight || '—'}, Ht ${heightDisplay}, BMI ${v.bmi || '—'}`
  if (v.bmi) {
    const bmiNum = parseFloat(v.bmi)
    let bmiClass = ''
    if (bmiNum >= 40) bmiClass = 'Class III Obesity'
    else if (bmiNum >= 35) bmiClass = 'Class II Obesity'
    else if (bmiNum >= 30) bmiClass = 'Class I Obesity'
    else if (bmiNum >= 25) bmiClass = 'Overweight'
    else if (bmiNum >= 18.5) bmiClass = 'Normal weight'
    if (bmiClass) {
      vitalsStr += ` (BMI reconciled with height/weight: ${bmiClass})`
    }
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

  if (Array.isArray(caseData.ALLERGIES)) {
    const allergyStr = caseData.ALLERGIES.length > 0 
      ? caseData.ALLERGIES.map(a => `${a.substance || a.name || a}${a.reaction ? ' (' + a.reaction + ')' : ''}`).join(', ')
      : 'No known drug allergies (NKDA)'
    objLines.push('Allergies: ' + allergyStr + '.')
  }

  if (Array.isArray(caseData.IMMUNIZATIONS) && caseData.IMMUNIZATIONS.length > 0) {
    objLines.push('Immunizations: ' + caseData.IMMUNIZATIONS.map(i => `${i.name}: ${i.status}`).join('; ') + '.')
  }

  // ---------- Assessment ----------
  const aLines = []
  if (Array.isArray(caseData.ASSESSMENT_CARDS)) {
    caseData.ASSESSMENT_CARDS.forEach((card, idx) => {
      const titleClean = card.title.replace(/^\d+[\.\)]\s*/, '')
      aLines.push(`# ${idx + 1}. ${titleClean}`)
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
    caseData.PLAN_SECTIONS.forEach((sec, idx) => {
      const chosen = (sec.options || []).filter(o => planSel[o.key] || o.correct)
      if (chosen.length) {
        const titleClean = sec.title.replace(/^\d+[\.\)]\s*/, '')
        pLines.push(`# ${idx + 1}. ${titleClean}`)
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

