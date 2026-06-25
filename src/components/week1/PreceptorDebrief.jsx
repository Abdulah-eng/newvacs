import React, { useState, useRef, useEffect } from 'react'
import { loadCaseState, saveCaseState } from '../../lib/storage'
import { PRECEPTOR, ackFor } from '../../data/preceptorCore'
import { ChevronLeft, Send, RotateCcw, CheckCircle2, MessageSquare } from 'lucide-react'

const FREE_CHIPS = ['Tell me about the high-risk patient', 'How do I spot a never-started drug?', 'Walk me through the monitoring', 'What did I do well?']

function computeCtx(week) {
  const { state, patients, clinicDays, caseId } = week
  const quizBest = state.loadQuiz().bestScore || 0
  const scores = []
  let graded = 0
  for (const p of patients) for (const d of clinicDays) {
    const st = loadCaseState(caseId(p.id, d))
    if (st.graded) graded++
    if (typeof st.soapScore === 'number') scores.push(st.soapScore)
  }
  const soapAvg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null
  return { quizBest, soapAvg, gradedCount: graded, journalDone: state.journalComplete() }
}

const beatMessages = (beat) => [
  ...beat.lines.map(text => ({ from: 'preceptor', text })),
  { from: 'preceptor', text: beat.prompt, prompt: true },
]

export default function PreceptorDebrief({ week, onBack }) {
  const STATE_ID = week.keys.debrief
  const { build, closing, replyTo } = week.debrief

  const [ctx] = useState(() => computeCtx(week))
  const [beats] = useState(() => build(ctx))

  const saved = loadCaseState(STATE_ID)
  const [messages, setMessages] = useState(() => (saved.transcript?.length ? saved.transcript : beatMessages(beats[0])))
  const [beatIndex, setBeatIndex] = useState(() => saved.beatIndex ?? 0)
  const [phase, setPhase] = useState(() => saved.phase ?? 'guided')
  const [done, setDone] = useState(() => saved.done ?? false)
  const [text, setText] = useState('')

  const endRef = useRef(null)
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages.length])

  function persist(next) { saveCaseState(STATE_ID, next) }

  function send(raw) {
    const t = (raw ?? text).trim()
    if (!t) return
    let msgs = [...messages, { from: 'student', text: t }]
    let nextBeat = beatIndex, nextPhase = phase, nextDone = done

    if (phase === 'guided') {
      msgs.push({ from: 'preceptor', text: ackFor(beatIndex) })
      const ni = beatIndex + 1
      if (ni < beats.length) {
        msgs = [...msgs, ...beatMessages(beats[ni])]
        nextBeat = ni
      } else {
        msgs = [...msgs, ...closing.map(text => ({ from: 'preceptor', text }))]
        nextPhase = 'free'; nextDone = true
      }
    } else {
      msgs.push({ from: 'preceptor', text: replyTo(t) })
    }

    setMessages(msgs); setBeatIndex(nextBeat); setPhase(nextPhase); setDone(nextDone); setText('')
    persist({ transcript: msgs, beatIndex: nextBeat, phase: nextPhase, done: nextDone })
  }

  function restart() {
    const msgs = beatMessages(beats[0])
    setMessages(msgs); setBeatIndex(0); setPhase('guided'); setDone(false); setText('')
    persist({ transcript: msgs, beatIndex: 0, phase: 'guided', done: false })
  }

  const chips = phase === 'guided' ? (beats[beatIndex]?.suggestions || []) : FREE_CHIPS

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <header className="text-white" style={{ background: 'linear-gradient(135deg,#13314f,#0d2138)' }}>
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
          <button onClick={onBack} className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition shrink-0">
            <ChevronLeft size={18} />
          </button>
          <div className="relative shrink-0">
            <div className="grid place-items-center w-11 h-11 rounded-full font-head text-[15px] text-white" style={{ background: 'linear-gradient(135deg,#0d9488,#0891b2)' }}>
              {PRECEPTOR.initials}
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#0d2138]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-head text-lg leading-tight">{PRECEPTOR.name}, {PRECEPTOR.credentials}</h1>
              {done && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-teal/20 text-teal-200 ring-1 ring-teal/30"><CheckCircle2 size={11} /> Debrief complete</span>}
            </div>
            <p className="text-[12px] text-slate-300">1:1 Weekly Debrief · {week.module.title}</p>
          </div>
          <button onClick={restart} title="Start the debrief over"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-[12px] font-semibold hover:bg-white/20 transition shrink-0">
            <RotateCcw size={13} /> Restart
          </button>
        </div>
      </header>

      {/* Transcript */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-6 space-y-3">
          {messages.map((m, i) => (
            m.from === 'preceptor' ? (
              <div key={i} className="flex items-start gap-2.5 fade-up">
                <div className="grid place-items-center w-8 h-8 rounded-full font-head text-[12px] text-white shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg,#0d9488,#0891b2)' }}>
                  {PRECEPTOR.initials}
                </div>
                <div className={`max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2.5 text-[14px] leading-relaxed shadow-sm ${m.prompt ? 'bg-white border border-teal/30 text-slate-800' : 'bg-white border border-slate-200 text-slate-700'}`}>
                  {m.text}
                </div>
              </div>
            ) : (
              <div key={i} className="flex justify-end fade-up">
                <div className="max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2.5 text-[14px] leading-relaxed bg-teal text-white shadow-sm">
                  {m.text}
                </div>
              </div>
            )
          ))}
          <div ref={endRef} />
        </div>
      </div>

      {/* Composer */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-3">
          {chips.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {chips.map(c => (
                <button key={c} onClick={() => send(c)}
                  className="text-[12px] px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:border-teal/40 hover:text-navy transition">
                  {c}
                </button>
              ))}
            </div>
          )}
          <div className="flex items-end gap-2">
            <input
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
              placeholder={phase === 'guided' ? 'Share your reflection…' : 'Ask your preceptor anything…'}
              className="flex-1 rounded-xl border border-slate-300 px-4 py-2.5 text-[14px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal"
            />
            <button onClick={() => send()} disabled={!text.trim()}
              className={`grid place-items-center w-11 h-11 rounded-xl shrink-0 transition ${text.trim() ? 'bg-teal text-white hover:bg-teal/90' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}>
              <Send size={17} />
            </button>
          </div>
          <p className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-2">
            <MessageSquare size={12} />
            {phase === 'guided'
              ? 'Guided debrief — respond in your own words; your preceptor will walk through the week.'
              : 'Open discussion — ask about any patient, decision, or guideline point.'}
          </p>
        </div>
      </div>
    </div>
  )
}
