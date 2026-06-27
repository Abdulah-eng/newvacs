import React, { useState } from 'react'
import AssignmentView from './AssignmentView'
import EvaluationLoading from './EvaluationLoading'
import FeedbackView from './FeedbackView'
import DiscussionChat from './DiscussionChat'
import { ArrowLeft, BookOpen, Upload, BrainCircuit, MessageSquare, CheckCircle } from 'lucide-react'

export default function CapstoneShell({ week, onExit }) {
  // Steps: 'assignment', 'evaluating', 'feedback', 'discussion', 'complete'
  const [step, setStep] = useState('assignment')
  const [evaluation, setEvaluation] = useState(null)
  
  const handleUploadComplete = async (text) => {
    setStep('evaluating')
    try {
      const res = await fetch('/api/ai/grade-manuscript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ manuscript: text, topicId: week.topic.id })
      })
      if (!res.ok) throw new Error('Failed to grade manuscript')
      const data = await res.json()
      setEvaluation(data)
      setStep('feedback')
    } catch (err) {
      console.error(err)
      alert('Error evaluating manuscript. Please try again.')
      setStep('assignment')
    }
  }

  const steps = [
    { id: 'assignment', label: 'Assignment', icon: BookOpen },
    { id: 'evaluating', label: 'Evaluation', icon: BrainCircuit },
    { id: 'feedback', label: 'Feedback', icon: CheckCircle },
    { id: 'discussion', label: 'Live Q&A', icon: MessageSquare }
  ]

  const currentIndex = steps.findIndex(s => s.id === step) >= 0 ? steps.findIndex(s => s.id === step) : 3

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans">
      <header className="bg-navy text-white px-4 py-3 shrink-0 flex items-center justify-between border-b border-navy-700">
        <div className="flex items-center gap-4">
          <button onClick={onExit} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="font-head text-lg font-semibold tracking-wide">Week 6: Grand Rounds Capstone</h1>
            <p className="text-xs text-slate-300">Topic: {week.topic.title}</p>
          </div>
        </div>
        
        {/* Progress Tracker */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {steps.map((s, i) => {
            const active = i === currentIndex
            const past = i < currentIndex
            return (
              <div key={s.id} className={`flex items-center gap-2 ${active ? 'text-teal-400' : past ? 'text-slate-300' : 'text-slate-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${active ? 'border-teal-400 bg-teal-400/10' : past ? 'border-slate-300 bg-slate-300/10' : 'border-slate-500'}`}>
                  {past ? <CheckCircle size={14} /> : i + 1}
                </span>
                {s.label}
              </div>
            )
          })}
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        {step === 'assignment' && <AssignmentView topic={week.topic} onUpload={handleUploadComplete} />}
        {step === 'evaluating' && <EvaluationLoading />}
        {step === 'feedback' && <FeedbackView evaluation={evaluation} onContinue={() => setStep('discussion')} />}
        {step === 'discussion' && <DiscussionChat topic={week.topic} evaluation={evaluation} onFinish={onExit} />}
      </main>
    </div>
  )
}
