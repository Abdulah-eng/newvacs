import React, { useState, useEffect, useRef } from 'react'
import { BrainCircuit, ChevronRight, CheckCircle2, XCircle, AlertCircle, Lightbulb, ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const SimliAvatar = dynamic(
  () => import('../ui/SimliAvatar').then(mod => mod.SimliAvatar),
  { ssr: false }
)

/**
 * PostQuestionsQuiz — renders the 10 structured MCQ questions from postQuestions.
 * Replaces the old free-form DiscussionChat for the Capstone Q&A.
 */
export default function DiscussionChat({ topic, evaluation, onFinish }) {
  const questions = topic?.postQuestions ?? []
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedKeys, setSelectedKeys] = useState([])       // current selections
  const [submitted, setSubmitted] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState({}) // idx → { selectedKeys, feedback }
  const [videoMode, setVideoMode] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const simliRef = useRef(null)
  const feedbackRef = useRef(null)

  const q = questions[currentIdx]
  const isMultiSelect = q?.type === 'select-all'
  const isFinished = currentIdx >= questions.length

  // Scroll to feedback when it appears
  useEffect(() => {
    if (submitted && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [submitted])

  // ── Handlers ──
  const toggleOption = (key) => {
    if (submitted) return
    if (isMultiSelect) {
      setSelectedKeys(prev =>
        prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
      )
    } else {
      setSelectedKeys([key])
    }
  }

  const handleSubmit = async () => {
    if (!selectedKeys.length || submitted) return
    const fb = resolveFeedback(q, selectedKeys)
    setSubmitted(true)
    setAnsweredQuestions(prev => ({ ...prev, [currentIdx]: { selectedKeys: [...selectedKeys], feedback: fb } }))

    // If avatar mode, speak the feedback
    if (videoMode && simliRef.current && fb) {
      const spokenText = buildSpokenFeedback(fb)
      setIsSpeaking(true)
      try {
        await simliRef.current.speakText(spokenText)
      } catch (_) { /* Simli error handled gracefully */ }
      setIsSpeaking(false)
    }
  }

  const handleNext = () => {
    setCurrentIdx(prev => prev + 1)
    setSelectedKeys([])
    setSubmitted(false)
  }

  // ── Feedback Resolution ──
  function resolveFeedback(question, keys) {
    if (!question) return null

    if (question.type === 'select-all') {
      const correctSet = new Set(question.correctAnswer)
      const selectedSet = new Set(keys)
      const hasIncorrect = keys.some(k => !correctSet.has(k))
      const missedCorrect = question.correctAnswer.some(k => !selectedSet.has(k))

      if (!hasIncorrect && !missedCorrect) {
        return question.feedback.correct_all
      }
      if (keys.includes('D')) return question.feedback.includes_D
      if (keys.includes('F')) return question.feedback.includes_F
      return question.feedback.omits_correct
    }

    // single-answer or k-type
    const key = keys[0]
    return question.feedback[key] ?? null
  }

  function buildSpokenFeedback(fb) {
    const parts = []
    if (fb.correct) parts.push('Correct.')
    else parts.push('Incorrect.')
    if (fb.strong) parts.push(`What was strong: ${fb.strong}`)
    if (fb.missed) parts.push(`What was missed: ${fb.missed}`)
    if (fb.pearl) parts.push(`Clinical pearl: ${fb.pearl}`)
    return parts.join(' ')
  }

  // ── Completion screen ──
  if (isFinished) {
    return (
      <div className="max-w-3xl mx-auto p-6 py-16 flex flex-col items-center text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center">
          <CheckCircle2 size={40} className="text-teal" />
        </div>
        <h2 className="text-2xl font-head text-navy">Post-Presentation Q&A Complete</h2>
        <p className="text-slate-600 max-w-lg">
          You have completed all 10 formative questions. These are unscored — the purpose is to reinforce clinical reasoning and pharmacist competencies covered in your Capstone manuscript.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {questions.map((_, i) => {
            const ans = answeredQuestions[i]
            const wasCorrect = ans?.feedback?.correct
            return (
              <div
                key={i}
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold border transition-colors ${
                  wasCorrect
                    ? 'bg-teal/10 border-teal/30 text-teal'
                    : 'bg-red-50 border-red-200 text-red-500'
                }`}
              >
                {i + 1}
              </div>
            )
          })}
        </div>
        <button
          onClick={onFinish}
          className="mt-4 inline-flex items-center gap-2 bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors shadow-md"
        >
          Finish Simulation <ArrowRight size={18} />
        </button>
      </div>
    )
  }

  const feedback = submitted ? answeredQuestions[currentIdx]?.feedback : null
  const correctSet = new Set(q.correctAnswer)

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-60px)] flex flex-col p-4 md:p-6">
      <div className="bg-white flex-1 rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-navy px-6 py-4 flex justify-between items-center text-white shrink-0">
          <div>
            <h2 className="text-lg font-head">Post-Presentation Q&A</h2>
            <p className="text-xs text-slate-300">
              Question {currentIdx + 1} of {questions.length} — {q.title}
              <span className="ml-2 opacity-60">({q.type === 'select-all' ? 'Select all that apply' : q.type === 'k-type' ? 'K-type' : 'Single answer'})</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setVideoMode(!videoMode)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${videoMode ? 'bg-teal/20 text-teal-200 hover:bg-teal/30' : 'bg-white/10 hover:bg-white/20'}`}
            >
              {videoMode ? '🎥 Avatar On' : '🎥 Avatar Off'}
            </button>
            <button onClick={onFinish} className="text-xs font-semibold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
              Finish Simulation
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-50">

          {/* Avatar Panel (optional) */}
          {videoMode && (
            <div className="md:w-[40%] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 bg-white shadow-inner">
              <div className="w-full max-w-[240px] aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 flex items-center justify-center">
                <SimliAvatar
                  patientName="AI Preceptor"
                  isSpeaking={isSpeaking}
                  onMount={(api) => { simliRef.current = api }}
                  onError={() => {}}
                />
              </div>
              <p className="text-center text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-4">
                {isSpeaking ? 'Speaking feedback...' : 'Waiting...'}
              </p>
            </div>
          )}

          {/* Question & Options */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Progress dots */}
            <div className="flex gap-1.5 mb-2">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentIdx ? 'w-6 bg-navy' :
                    i < currentIdx ? 'w-3 bg-teal' :
                    'w-3 bg-slate-200'
                  }`}
                />
              ))}
            </div>

            {/* Stem */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center shrink-0 mt-0.5">
                  <BrainCircuit size={16} />
                </div>
                <p className="text-[14px] leading-relaxed text-slate-800 whitespace-pre-wrap">{q.stem}</p>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {isMultiSelect && !submitted && (
                <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Select all that apply</p>
              )}
              {q.options.map(opt => {
                const isSelected = selectedKeys.includes(opt.key)
                const isCorrectOption = correctSet.has(opt.key)
                let ringClass = 'border-slate-200 hover:border-navy/40'
                let bgClass = 'bg-white'
                let keyBg = 'bg-slate-100 text-slate-600'

                if (submitted) {
                  if (isCorrectOption && isSelected) {
                    ringClass = 'border-teal ring-2 ring-teal/20'
                    bgClass = 'bg-teal/5'
                    keyBg = 'bg-teal text-white'
                  } else if (isCorrectOption && !isSelected) {
                    ringClass = 'border-teal/40'
                    bgClass = 'bg-teal/5'
                    keyBg = 'bg-teal/20 text-teal'
                  } else if (!isCorrectOption && isSelected) {
                    ringClass = 'border-red-300 ring-2 ring-red-200/40'
                    bgClass = 'bg-red-50'
                    keyBg = 'bg-red-500 text-white'
                  } else {
                    ringClass = 'border-slate-100'
                    bgClass = 'bg-slate-50/50 opacity-60'
                  }
                } else if (isSelected) {
                  ringClass = 'border-navy ring-2 ring-navy/20'
                  bgClass = 'bg-navy/5'
                  keyBg = 'bg-navy text-white'
                }

                return (
                  <button
                    key={opt.key}
                    onClick={() => toggleOption(opt.key)}
                    disabled={submitted}
                    className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all ${ringClass} ${bgClass} ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${keyBg}`}>
                      {opt.key}
                    </span>
                    <span className="text-[13.5px] leading-relaxed text-slate-700 pt-0.5">{opt.text}</span>
                    {submitted && isCorrectOption && (
                      <CheckCircle2 size={18} className="text-teal ml-auto shrink-0 mt-1" />
                    )}
                    {submitted && !isCorrectOption && isSelected && (
                      <XCircle size={18} className="text-red-400 ml-auto shrink-0 mt-1" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Submit / Next buttons */}
            <div className="flex justify-end gap-3 pt-2">
              {!submitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedKeys.length}
                  className="inline-flex items-center gap-2 bg-navy text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-navy-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  Submit Answer <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={isSpeaking}
                  className="inline-flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-teal/90 disabled:opacity-50 transition-colors shadow-sm"
                >
                  {currentIdx + 1 < questions.length ? 'Next Question' : 'View Results'} <ChevronRight size={16} />
                </button>
              )}
            </div>

            {/* Scripted Feedback Panel */}
            {submitted && feedback && (
              <div ref={feedbackRef} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4 mt-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Correct / Incorrect banner */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${
                  feedback.correct ? 'bg-teal/10 text-teal border border-teal/20' : 'bg-red-50 text-red-600 border border-red-200'
                }`}>
                  {feedback.correct ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                  {feedback.correct ? 'Correct' : 'Incorrect'}
                </div>

                {/* What was strong */}
                {feedback.strong && (
                  <div>
                    <h4 className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 size={13} /> What was strong
                    </h4>
                    <p className="text-[13px] leading-relaxed text-slate-700">{feedback.strong}</p>
                  </div>
                )}

                {/* What was missed */}
                {feedback.missed && (
                  <div>
                    <h4 className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <AlertCircle size={13} /> What was missed
                    </h4>
                    <p className="text-[13px] leading-relaxed text-slate-700">{feedback.missed}</p>
                  </div>
                )}

                {/* Clinical Pearl */}
                {feedback.pearl && (
                  <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3.5">
                    <h4 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Lightbulb size={13} /> Clinical Pearl
                    </h4>
                    <p className="text-[13px] leading-relaxed text-indigo-900">{feedback.pearl}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
