import React, { useState, useMemo, useCallback } from 'react'
import { loadCaseState, saveCaseState, resetCaseState } from '../lib/storage'
import { PROGRESS_AREAS } from '../data/cases'
import {
  LayoutDashboard, FileText, Activity, Pill, ShieldAlert, HeartPulse, FlaskConical,
  ListChecks, MessageSquare, Stethoscope, ClipboardList, HelpCircle, MessageCircle,
  FileSignature, Lock, RotateCcw, LogOut, ChevronLeft,
} from 'lucide-react'

import { SnapshotTab, ObjectiveTab, MedicationsTab, AllergiesTab, VitalsTab, LabsTab, ProblemListTab } from './ChartTabs'
import { SubjectiveTab } from './SubjectiveTab'
import { PatientInterviewTab } from './PatientInterviewTab'
import { AssessmentTab } from './AssessmentTab'
import { PlanTab } from './PlanTab'
import { GuidingQuestionsTab, CounselingTab } from './ExtraTabs'
import { SOAPNoteTab } from './SOAPNoteTab'
import { PreceptorView } from './PreceptorView'

const TABS = [
  { id: 'snapshot', label: 'Snapshot', icon: LayoutDashboard, group: 'Chart' },
  { id: 'subjective', label: 'Subjective', icon: FileText, group: 'Chart' },
  { id: 'objective', label: 'Objective', icon: Activity, group: 'Chart' },
  { id: 'medications', label: 'Medications', icon: Pill, group: 'Chart' },
  { id: 'allergies', label: 'Allergies', icon: ShieldAlert, group: 'Chart' },
  { id: 'vitals', label: 'Vitals', icon: HeartPulse, group: 'Chart' },
  { id: 'labs', label: 'Labs', icon: FlaskConical, group: 'Chart' },
  { id: 'problems', label: 'Problem List', icon: ListChecks, group: 'Chart' },
  { id: 'interview', label: 'Patient Interview', icon: MessageSquare, group: 'Workspace' },
  { id: 'assessment', label: 'Assessment', icon: Stethoscope, group: 'Workspace' },
  { id: 'plan', label: 'Plan', icon: ClipboardList, group: 'Workspace' },
  { id: 'guiding', label: 'Guiding Questions', icon: HelpCircle, group: 'Workspace' },
  { id: 'counseling', label: 'Counseling', icon: MessageCircle, group: 'Workspace' },
  { id: 'soap', label: 'SOAP Note', icon: FileSignature, group: 'Workspace' },
  { id: 'preceptor', label: 'Preceptor View', icon: Lock, group: 'Teaching' },
]

const EMPTY = {
  __progress: {}, interview: {}, discovered: {}, chat: [], assessment: {},
  confidence: {}, planSelections: {}, planFreetext: {}, soap: {}, preceptorUnlocked: false,
}

export default function SimulationShell({ caseData, onExit }) {
  const [state, setState] = useState(() => ({ ...EMPTY, ...loadCaseState(caseData.id) }))
  const [active, setActive] = useState('snapshot')

  // Apply a mutation, persist to localStorage, and update React state.
  const update = useCallback((mutate) => {
    setState(prev => {
      const next = mutate({ ...prev })
      saveCaseState(caseData.id, next)
      return next
    })
  }, [caseData.id])

  const markProgress = useCallback((area) => {
    setState(prev => {
      if (prev.__progress?.[area]) return prev
      const next = { ...prev, __progress: { ...prev.__progress, [area]: true } }
      saveCaseState(caseData.id, next)
      return next
    })
  }, [caseData.id])

  function openTab(id) {
    setActive(id)
    if (['snapshot', 'objective', 'medications', 'allergies', 'vitals', 'labs', 'problems', 'subjective'].includes(id)) {
      markProgress('chart')
    }
  }

  // ---- field handlers ----
  const setInterview = (key, val) => update(s => {
    markProgress('interview')
    return { ...s, interview: { ...s.interview, [key]: val }, __progress: { ...s.__progress, interview: true } }
  })

  const ask = (q, reply) => update(s => {
    const chat = [...s.chat, { role: 'student', text: q }, { role: 'patient', text: reply.text, discovered: !!reply.field }]
    const discovered = { ...s.discovered }
    if (reply.field) discovered[reply.field] = true
    return { ...s, chat, discovered, __progress: { ...s.__progress, interview: true } }
  })

  const setAssessment = (key, val) => update(s => ({ ...s, assessment: { ...s.assessment, [key]: val }, __progress: { ...s.__progress, assessment: true } }))
  const setConfidence = (id, val) => update(s => ({ ...s, confidence: { ...s.confidence, [id]: val }, __progress: { ...s.__progress, assessment: true } }))
  const togglePlan = (key) => update(s => ({ ...s, planSelections: { ...s.planSelections, [key]: !s.planSelections[key] }, __progress: { ...s.__progress, plan: true } }))
  const setPlanText = (key, val) => update(s => ({ ...s, planFreetext: { ...s.planFreetext, [key]: val }, __progress: { ...s.__progress, plan: true } }))
  const setSoap = (key, val) => update(s => ({ ...s, soap: { ...s.soap, [key]: val }, __progress: { ...s.__progress, soap: true } }))
  const markGraded = (pct) => update(s => ({ ...s, graded: true, soapScore: typeof pct === 'number' ? pct : s.soapScore, __progress: { ...s.__progress, soap: true } }))
  const markCounseling = () => markProgress('counseling')
  const unlockPreceptor = () => update(s => ({ ...s, preceptorUnlocked: true }))

  function reset() {
    if (!window.confirm('Reset this case? All of your documentation for this encounter will be cleared.')) return
    resetCaseState(caseData.id)
    setState({ ...EMPTY })
    setActive('snapshot')
  }

  const progressPct = useMemo(() => {
    const done = PROGRESS_AREAS.filter(a => state.__progress?.[a.key]).length
    return Math.round((done / PROGRESS_AREAS.length) * 100)
  }, [state.__progress])

  const P = caseData.PATIENT
  const groups = ['Chart', 'Workspace', 'Teaching']

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Patient banner */}
      <header className="text-white" style={{ background: 'linear-gradient(135deg,#13314f,#0d2138)' }}>
        <div className="px-5 py-3 flex items-center gap-4 flex-wrap">
          <button onClick={onExit} className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition shrink-0">
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-white/15 font-head text-lg">MG</span>
            <div>
              <h1 className="font-head text-lg leading-tight">{P.name}</h1>
              <p className="text-[12px] text-slate-300">{P.age} yo {P.sex} · {P.ethnicity} · MRN {P.mrn}</p>
            </div>
          </div>
          <div className="hidden md:block h-9 w-px bg-white/15" />
          <div className="hidden md:block">
            <p className="text-[12px] text-teal-200 font-semibold">{caseData.ENCOUNTER.day} · {caseData.ENCOUNTER.type}</p>
            <p className="text-[11px] text-slate-300">{P.setting}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={reset} className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 px-3 py-2 text-[12px] font-semibold transition">
              <RotateCcw size={14} /> Reset
            </button>
            <button onClick={onExit} className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 px-3 py-2 text-[12px] font-semibold transition">
              <LogOut size={14} /> Exit
            </button>
          </div>
        </div>
        {/* Progress bar */}
        <div className="px-5 pb-3">
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-300 shrink-0">Case Progress: <strong className="text-white">{progressPct}%</strong></span>
            <div className="flex-1 h-1.5 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full bg-teal transition-all" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <nav className="w-56 shrink-0 bg-white border-r border-slate-200 overflow-y-auto thin-scroll hidden sm:block">
          {groups.map(g => (
            <div key={g} className="py-2">
              <p className="px-4 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">{g}</p>
              {TABS.filter(t => t.group === g).map(t => {
                const on = active === t.id
                const Icon = t.icon
                return (
                  <button key={t.id} onClick={() => openTab(t.id)}
                    className={`w-full flex items-center gap-2.5 px-4 py-2 text-[13px] transition border-l-2 ${
                      on ? 'border-teal bg-teal/5 text-navy font-semibold' : 'border-transparent text-slate-600 hover:bg-slate-50'}`}>
                    <Icon size={15} className={on ? 'text-teal' : 'text-slate-400'} /> {t.label}
                  </button>
                )
              })}
            </div>
          ))}
        </nav>

        {/* Mobile tab strip */}
        <div className="sm:hidden w-full">
          <div className="flex overflow-x-auto thin-scroll bg-white border-b border-slate-200">
            {TABS.map(t => (
              <button key={t.id} onClick={() => openTab(t.id)}
                className={`px-3 py-2.5 text-[12px] whitespace-nowrap ${active === t.id ? 'text-teal font-semibold border-b-2 border-teal' : 'text-slate-500'}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0 overflow-y-auto thin-scroll">
          <div className="max-w-5xl mx-auto px-5 py-6 fade-up" key={active}>
            {active === 'snapshot' && <SnapshotTab c={caseData} />}
            {active === 'subjective' && <SubjectiveTab c={caseData} interview={state.interview} discovered={state.discovered} onField={setInterview} />}
            {active === 'objective' && <ObjectiveTab c={caseData} />}
            {active === 'medications' && <MedicationsTab c={caseData} />}
            {active === 'allergies' && <AllergiesTab c={caseData} />}
            {active === 'vitals' && <VitalsTab c={caseData} />}
            {active === 'labs' && <LabsTab c={caseData} />}
            {active === 'problems' && <ProblemListTab c={caseData} />}
            {active === 'interview' && <PatientInterviewTab c={caseData} chat={state.chat} interview={state.interview} discovered={state.discovered} onAsk={ask} onField={setInterview} />}
            {active === 'assessment' && <AssessmentTab c={caseData} assessment={state.assessment} confidence={state.confidence} onAnswer={setAssessment} onConfidence={setConfidence} />}
            {active === 'plan' && <PlanTab c={caseData} selections={state.planSelections} freetext={state.planFreetext} onToggle={togglePlan} onText={setPlanText} />}
            {active === 'guiding' && <GuidingQuestionsTab c={caseData} />}
            {active === 'counseling' && <CounselingTab c={caseData} onView={markCounseling} />}
            {active === 'soap' && <SOAPNoteTab c={caseData} state={state} soap={state.soap} onChange={setSoap} onGraded={markGraded} />}
            {active === 'preceptor' && <PreceptorView c={caseData} unlocked={state.preceptorUnlocked} onUnlock={unlockPreceptor} />}
          </div>
        </main>
      </div>
    </div>
  )
}
