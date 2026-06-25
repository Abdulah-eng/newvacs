// Fills every key the encounter-loop components expect, so new cases can be
// authored compactly. Pass only the fields you want to override.
export function makeCase(spec) {
  return {
    id: spec.id,
    PATIENT: { name: '', age: 0, sex: '', ethnicity: '', mrn: '', setting: 'Ambulatory care clinic', ...spec.PATIENT },
    ENCOUNTER: {
      day: '', week: 'Week 1', type: '', chiefConcern: '', snapshotSummary: '',
      difficulty: 'Core', difficultyTone: 'teal', diseaseStates: [], learningObjectives: [],
      ...spec.ENCOUNTER,
    },
    VITALS: { bp: '—', bpRepeat: '—', hr: '—', rr: '—', temp: '—', weight: '—', height: '—', bmi: '—', flags: {}, extras: [], ...spec.VITALS },
    LABS: spec.LABS || [],
    ALERTS: spec.ALERTS || [],
    PROBLEMS: spec.PROBLEMS || [],
    ALLERGIES: spec.ALLERGIES || [{ substance: 'No known drug allergies', reaction: '—' }],
    MEDICATIONS: spec.MEDICATIONS || [],
    IMMUNIZATIONS: spec.IMMUNIZATIONS || [],
    SUBJECTIVE_DOCUMENTED: spec.SUBJECTIVE_DOCUMENTED || [],
    OBJECTIVE_EXTRA: spec.OBJECTIVE_EXTRA || [],
    INTERVIEW_FIELDS: spec.INTERVIEW_FIELDS || [],
    INTERVIEW_KNOWLEDGE: spec.INTERVIEW_KNOWLEDGE || [],
    ASSESSMENT_CARDS: spec.ASSESSMENT_CARDS || [],
    PLAN_SECTIONS: spec.PLAN_SECTIONS || [],
    PLAN_FREETEXT: spec.PLAN_FREETEXT || [
      { key: 'monitoring', label: 'Monitoring plan', placeholder: 'Labs, vitals, and follow-up intervals…' },
      { key: 'followUp', label: 'Follow-up', placeholder: 'When should the patient return and why?' },
    ],
    GUIDING_QUESTIONS: spec.GUIDING_QUESTIONS || [],
    COUNSELING: spec.COUNSELING || [],
    PRECEPTOR: {
      keyIssues: [], assessment: [], plan: [], pearls: [], mistakes: [], followupQuestions: [], checklist: [],
      ...spec.PRECEPTOR,
    },
    INTERVIEW_SYSTEM_PROMPT: spec.INTERVIEW_SYSTEM_PROMPT || '',
  }
}
