'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { Card, AutoTextarea, SectionTitle } from './ui'
import { Send, Sparkles, User, Stethoscope, MessageSquare, Volume2, Type, PhoneOff, Phone } from 'lucide-react'

const SimliAvatar = dynamic(
  () => import('./ui/SimliAvatar').then(mod => mod.SimliAvatar),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center p-8 gap-4">
        <div className="w-32 h-32 rounded-full bg-slate-200 animate-pulse" />
        <div className="w-24 h-3 bg-slate-200 rounded animate-pulse" />
      </div>
    ),
  }
)

const CHIPS = [
  'How are you taking your medications?',
  'Do you ever miss doses?',
  'Do you take anything over the counter?',
  'What are your health goals?',
]

const FIELD_LABELS = {
  currentMeds: 'Current Medications',
  adherence: 'Medication Adherence',
  otc: 'OTC / Supplements',
  sideEffects: 'Side Effects / ADRs',
  diet: 'Diet / Nutrition',
  exercise: 'Physical Activity',
  familyHistory: 'Family History',
  homeBp: 'Home BP Readings',
  bpTechnique: 'BP Measurement Technique',
  glucoseMonitoring: 'Glucose Monitoring (SMBG)',
  weightGoals: 'Weight / Goals',
  diseaseUnderstanding: 'Disease Understanding',
  concerns: 'Patient Concerns',
  cost: 'Cost / Affordability'
}

// Voice state machine
const VS = { IDLE: 'IDLE', LISTENING: 'LISTENING', SPEAKING: 'SPEAKING', PROCESSING: 'PROCESSING', PATIENT: 'PATIENT', DISABLED: 'DISABLED' }

export function PatientInterviewTab({ c, chat, interview, discovered, onAsk, onField, isActive }) {
  const [draft, setDraft] = useState('')
  const scrollRef = useRef(null)
  const voiceScrollRef = useRef(null)
  const simliRef = useRef(null)
  const [voiceMode, setVoiceMode] = useState(true)

  const [voiceState, setVoiceState] = useState(VS.IDLE)
  const vsRef = useRef(VS.IDLE)
  const setVS = useCallback((s) => { vsRef.current = s; setVoiceState(s) }, [])

  const [speechError, setSpeechError] = useState(null)
  const [audioLevel, setAudioLevel] = useState(0)

  const streamRef = useRef(null)
  const audioCtxRef = useRef(null)
  const analyserRef = useRef(null)
  const recorderRef = useRef(null)
  const chunksRef = useRef([])
  const mimeRef = useRef('')
  const vadRafRef = useRef(null)
  const baselineRef = useRef(20)
  const lastSpeechRef = useRef(0)
  const speechStartRef = useRef(0)   // when did current utterance start (ms)
  const vadReadyRef = useRef(false)  // true only after startup guard delay

  const isWeek1 = c?.ENCOUNTER?.week?.includes('1') || c?.id?.startsWith('w1') || c?.id?.startsWith('james') || c?.id?.startsWith('linda') || c?.id?.startsWith('maria')
  const baseTime = isWeek1 ? 30 * 60 : 20 * 60
  const [timeLeft, setTimeLeft] = useState(baseTime)
  const [sessionStarted, setSessionStarted] = useState(false)
  const timerRef = useRef(null)
  const [loading, setLoading] = useState(false)

  // --- Auto-start/resume timer on Interview tab, auto-pause when leaving tab ---
  useEffect(() => {
    if (isActive) {
      const endStr = localStorage.getItem('vacs::timer_end::' + c.id)
      const remStr = localStorage.getItem('vacs::timer_rem::' + c.id)
      if (endStr) {
        const rem = Math.max(0, Math.floor((parseInt(endStr) - Date.now()) / 1000))
        setTimeLeft(rem)
        setSessionStarted(true)
        if (rem === 0) setVS(VS.DISABLED)
      } else if (remStr) {
        const rem = Math.max(0, parseInt(remStr))
        setTimeLeft(rem)
        setSessionStarted(true)
        if (rem > 0) {
          localStorage.setItem('vacs::timer_end::' + c.id, String(Date.now() + rem * 1000))
          localStorage.removeItem('vacs::timer_rem::' + c.id)
        } else {
          setVS(VS.DISABLED)
        }
      } else {
        localStorage.setItem('vacs::timer_end::' + c.id, String(Date.now() + baseTime * 1000))
        setTimeLeft(baseTime)
        setSessionStarted(true)
      }
    } else {
      if (sessionStarted) {
        _endSession() // freeze timer and release mic when switching tabs
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, c.id])

  // Tick continuously while on active interview tab
  useEffect(() => {
    if (!sessionStarted || !isActive) return
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      let endStr = localStorage.getItem('vacs::timer_end::' + c.id)
      if (!endStr) return
      const rem = Math.max(0, Math.floor((parseInt(endStr) - Date.now()) / 1000))
      setTimeLeft(rem)
      if (rem <= 0) {
        clearInterval(timerRef.current)
        _endSession()
        setVS(VS.DISABLED)
        localStorage.removeItem('vacs::timer_end::' + c.id)
        localStorage.setItem('vacs::timer_rem::' + c.id, '0')
      }
    }, 500)
    return () => clearInterval(timerRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStarted, isActive, c.id])

  function _resumeTimer() {
    const remStr = localStorage.getItem('vacs::timer_rem::' + c.id)
    const rem = remStr ? Math.max(0, parseInt(remStr)) : baseTime
    localStorage.removeItem('vacs::timer_rem::' + c.id)
    localStorage.setItem('vacs::timer_end::' + c.id, String(Date.now() + rem * 1000))
    setSessionStarted(true)
  }

  function _pauseTimer() {
    const endStr = localStorage.getItem('vacs::timer_end::' + c.id)
    const rem = endStr ? Math.max(0, Math.floor((parseInt(endStr) - Date.now()) / 1000)) : timeLeft
    localStorage.removeItem('vacs::timer_end::' + c.id)
    localStorage.setItem('vacs::timer_rem::' + c.id, String(rem))
    setTimeLeft(rem)
  }

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    voiceScrollRef.current?.scrollTo({ top: voiceScrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [chat])

  useEffect(() => {
    return () => { _endSession(); window.speechSynthesis?.cancel(); clearInterval(timerRef.current) }
  }, [])

  // --- Persistent voice session ---
  async function _startSession() {
    setSpeechError(null)
    let stream
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } })
    } catch (e) {
      setSpeechError(e.name === 'NotAllowedError' ? 'Microphone access denied. Please allow it in browser settings.' : 'Cannot access microphone.')
      setVS(VS.IDLE); return
    }
    streamRef.current = stream

    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    await ctx.resume()
    audioCtxRef.current = ctx

    const src = ctx.createMediaStreamSource(stream)
    const analyser = ctx.createAnalyser()
    analyser.fftSize = 512
    analyser.smoothingTimeConstant = 0.6
    src.connect(analyser)
    analyserRef.current = analyser

    const mime = ['audio/webm;codecs=opus','audio/webm','audio/mp4'].find(t => MediaRecorder.isTypeSupported(t)) || ''
    mimeRef.current = mime

    // Calibrate ambient noise for 800ms (longer = more accurate baseline)
    const buf = new Uint8Array(analyser.frequencyBinCount)
    await new Promise(r => setTimeout(r, 800))
    analyser.getByteFrequencyData(buf)
    let s = 0; for (const v of buf) s += v
    // Add +15 buffer above ambient so speech needs to be clearly louder
    baselineRef.current = Math.max(18, (s / buf.length) + 15)

    _makeRecorder()
    setVS(VS.LISTENING)

    // Startup guard: don't activate VAD for 500ms after session starts
    // This prevents the button-click sound from triggering a recording
    vadReadyRef.current = false
    setTimeout(() => { vadReadyRef.current = true }, 500)
    _runVad()
  }

  function _makeRecorder() {
    const opts = mimeRef.current ? { mimeType: mimeRef.current } : {}
    const rec = new MediaRecorder(streamRef.current, opts)
    chunksRef.current = []
    rec.ondataavailable = e => { if (e.data?.size > 0) chunksRef.current.push(e.data) }
    rec.onstop = _onUtteranceEnd
    recorderRef.current = rec
  }

  function _runVad() {
    // Cancel any existing loop before starting a new one — prevents parallel loops
    cancelAnimationFrame(vadRafRef.current)

    const analyser = analyserRef.current
    if (!analyser) return
    const buf = new Uint8Array(analyser.frequencyBinCount)
    const SILENCE_MS = 1500      // 1.5s of silence to end an utterance (allows natural pauses when speaking)
    const MIN_SPEECH_MS = 300    // minimum speaking time (300ms allows short answers like 'Yes' or 'No')
    const DELTA = 18             // how far above baseline = speech (higher = less sensitive to bg noise)

    const tick = () => {
      const vs = vsRef.current

      // Hard stop — don't reschedule during these states
      if (vs === VS.IDLE || vs === VS.DISABLED || vs === VS.PROCESSING || vs === VS.PATIENT) {
        return  // loop exits — restarted explicitly when needed
      }

      // Startup guard: don't process audio until VAD is ready
      if (!vadReadyRef.current) {
        vadRafRef.current = requestAnimationFrame(tick)
        return
      }

      analyser.getByteFrequencyData(buf)
      let s = 0; for (const v of buf) s += v
      const avg = s / buf.length
      setAudioLevel(Math.max(0, Math.min(1, (avg - baselineRef.current) / 50)))

      if (vs === VS.LISTENING || vs === VS.SPEAKING) {
        const isSpeech = avg > baselineRef.current + DELTA

        if (isSpeech) {
          lastSpeechRef.current = Date.now()
          if (vs === VS.LISTENING) {
            // Speech just started — begin recording
            speechStartRef.current = Date.now()
            if (recorderRef.current?.state === 'inactive') {
              chunksRef.current = []
              recorderRef.current.start()
            }
            setVS(VS.SPEAKING)
          }
        } else if (vs === VS.SPEAKING && Date.now() - lastSpeechRef.current > SILENCE_MS) {
          // Silence after speech — check minimum duration before submitting
          const spokenMs = lastSpeechRef.current - speechStartRef.current
          if (recorderRef.current?.state === 'recording') recorderRef.current.stop()

          if (spokenMs < MIN_SPEECH_MS) {
            // Too short — likely noise or accidental sound. Discard and resume listening.
            setVS(VS.PROCESSING)  // onstop will fire but _onUtteranceEnd will see tiny blob
          } else {
            setVS(VS.PROCESSING)  // normal utterance end
          }
          speechStartRef.current = 0
          return  // loop exits — restarted in _backToListening
        }
      }

      vadRafRef.current = requestAnimationFrame(tick)
    }
    vadRafRef.current = requestAnimationFrame(tick)
  }

  async function _onUtteranceEnd() {
    const chunks = [...chunksRef.current]; chunksRef.current = []
    if (!chunks.length || !streamRef.current?.active) { _backToListening(); return }
    const blob = new Blob(chunks, { type: mimeRef.current || 'audio/webm' })
    // Threshold: 3KB minimum. Anything smaller is silence/noise — Whisper hallucinates on these.
    if (blob.size < 3000) { _backToListening(); return }
    try {
      const ext = mimeRef.current?.includes('mp4') ? 'mp4' : 'webm'
      const fd = new FormData(); fd.append('audio', blob, 'rec.' + ext)
      const res = await fetch('/api/stt', { method: 'POST', body: fd })
      const { text } = await res.json()
      if (text?.trim()) { await _sendMessage(text.trim()) }
      else { _backToListening() }
    } catch (e) {
      console.error('STT error', e)
      setSpeechError('Could not transcribe. Please try again.')
      _backToListening()
    }
  }

  function _backToListening() {
    if (vsRef.current === VS.IDLE || vsRef.current === VS.DISABLED) return
    if (!streamRef.current?.active) return
    speechStartRef.current = 0   // reset speech start tracker
    vadReadyRef.current = true   // immediately ready (only delayed on full session start)
    _makeRecorder()
    setVS(VS.LISTENING)
    _runVad()  // restart the rAF loop (it stopped during PROCESSING)
  }

  function _endVoiceSession() {
    cancelAnimationFrame(vadRafRef.current)
    try { recorderRef.current?.state !== 'inactive' && recorderRef.current?.stop() } catch (_) {}
    streamRef.current?.getTracks().forEach(t => t.stop())
    streamRef.current = null
    try { audioCtxRef.current?.close() } catch (_) {}
    audioCtxRef.current = null; analyserRef.current = null
    setAudioLevel(0)
    if (vsRef.current !== VS.DISABLED) setVS(VS.IDLE)
  }

  function _endSession() {
    _endVoiceSession()
    _pauseTimer()
  }

  async function toggleSession() {
    if (vsRef.current === VS.DISABLED) return
    if (vsRef.current === VS.IDLE) {
      await _startSession()
    } else {
      _endVoiceSession()
    }
  }

  // --- Patient speaking via avatar ---
  const speakText = useCallback(async (text) => {
    if (!voiceMode) return
    // Halt VAD and recording while patient speaks
    cancelAnimationFrame(vadRafRef.current)
    try { recorderRef.current?.state === 'recording' && recorderRef.current?.stop() } catch (_) {}
    // Pre-create a fresh recorder so it's ready the moment patient finishes
    if (streamRef.current?.active) _makeRecorder()
    setVS(VS.PATIENT)
    try {
      if (simliRef.current) await simliRef.current.speakText(text)
      else await _webSpeechFallback(text)
    } catch (_) { try { await _webSpeechFallback(text) } catch (__) {} }
    finally {
      if (vsRef.current !== VS.IDLE && vsRef.current !== VS.DISABLED && streamRef.current?.active) {
        chunksRef.current = []
        setVS(VS.LISTENING)
        _runVad()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceMode])

  function _webSpeechFallback(text) {
    return new Promise(res => {
      if (!window.speechSynthesis) { res(); return }
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(text)
      u.lang = 'en-US'; u.rate = 0.9; u.onend = res; u.onerror = res
      window.speechSynthesis.speak(u)
    })
  }

  // --- AI request ---
  async function _sendMessage(text) {
    if (timeLeft === 0 || !text || loading) return
    setDraft(''); setLoading(true)
    try {
      const res = await fetch('/api/ai/interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: text, chatHistory: chat, weekId: c.ENCOUNTER.week,
          diseaseStates: c.ENCOUNTER.diseaseStates, patientId: c.id, visitDay: c.ENCOUNTER.day,
          patientMasterProfile: c.PATIENT,
          dailyCaseFacts: { vitals: c.VITALS, labs: c.LABS, problems: c.PROBLEMS, meds: c.MEDICATIONS, subjective: c.SUBJECTIVE_DOCUMENTED },
          aiQaGuide: c.INTERVIEW_KNOWLEDGE, hiddenInfoMap: c.INTERVIEW_KNOWLEDGE.filter(k => k.field)
        })
      })
      const reply = await res.json()
      if (reply.error) {
        console.error('--- ANTHROPIC LIVE ERROR ---', reply)
        const errText = "I'm sorry, I didn't catch that. Could you repeat?"
        onAsk(text, { text: errText }); await speakText(errText)
      } else {
        let field = reply.hidden_info_triggered ? c.INTERVIEW_KNOWLEDGE.find(k => k.id === reply.hidden_info_triggered)?.field : null
        
        // Enhanced client-side fallback discovery logic
        if (!field && c.INTERVIEW_KNOWLEDGE) {
          const q = text.toLowerCase()
          const combined = (text + ' ' + (reply.response || '')).toLowerCase()
          
          if (q.includes('otc') || q.includes('over the counter') || q.includes('over-the-counter') || q.includes('supplement') || q.includes('herbal') || q.includes('vitamin') || q.includes('melatonin') || q.includes('calcium') || q.includes('fish oil') || q.includes('coq10') || q.includes('multivitamin')) {
            field = 'otc'
          } else if (q.includes('alcohol') || q.includes('drink') || q.includes('beer') || q.includes('wine') || q.includes('liquor')) {
            field = 'alcohol'
          } else if (q.includes('family history') || q.includes('parents') || q.includes('father') || q.includes('mother') || q.includes('brother') || q.includes('sister') || q.includes('sibling') || q.includes('grandparents') || q.includes('grandmother') || q.includes('grandfather') || q.includes('dad') || q.includes('mom')) {
            field = 'familyHistory'
          } else if (q.includes('allergy') || q.includes('allergic') || q.includes('allergies') || q.includes('reaction') || q.includes('rash') || q.includes('hives') || q.includes('nkda')) {
            field = 'allergies'
          } else if (q.includes('tobacco') || q.includes('smoke') || q.includes('smoking') || q.includes('cigarette') || q.includes('cigar') || q.includes('vape') || q.includes('vaping') || q.includes('nicotine') || q.includes('pack-year') || q.includes('packs')) {
            field = 'tobacco'
          }
          
          if (!field) {
            const matched = c.INTERVIEW_KNOWLEDGE.find(k => k.field && k.keywords?.some(kw => combined.includes(kw.toLowerCase())))
            if (matched) field = matched.field
          }
        }

        onAsk(text, { text: reply.response, field }); await speakText(reply.response)
      }
    } catch (_) {
      const errText = "I'm having a little trouble. Could you ask again?"
      onAsk(text, { text: errText }); await speakText(errText)
    } finally {
      setLoading(false)
      if (vsRef.current === VS.PROCESSING) _backToListening()
    }
  }

  async function send(text) { 
    if (loading || timeLeft === 0) return;
    const q = (text ?? draft).trim(); 
    if (q) { 
      // _sendMessage will handle clearing the draft
      await _sendMessage(q) 
    } 
  }

  const discoveredTopics = c.INTERVIEW_KNOWLEDGE.filter(k => k.field && discovered[k.field])
  const timerColor = timeLeft === 0 ? 'bg-red-100 text-red-700' : timeLeft < 300 ? 'bg-amber-100 text-amber-700 animate-pulse' : 'bg-slate-100 text-slate-600'
  const statusMap = { [VS.IDLE]: 'Tap phone to start session', [VS.LISTENING]: '?? Listening… speak freely', [VS.SPEAKING]: '?? Recording…', [VS.PROCESSING]: '? Processing…', [VS.PATIENT]: '?? Patient speaking…', [VS.DISABLED]: 'Session expired' }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <SectionTitle sub="Interview the standardized patient — she won't volunteer hidden facts unless you ask">Patient Interview</SectionTitle>
        <div className="flex items-center gap-4">
          <div className={'px-3 py-1.5 rounded-md text-[12px] font-bold ' + timerColor}>
            ? {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2,'0')}
          </div>
          <div className="flex bg-slate-200 rounded-lg p-1">
            <button onClick={() => { setVoiceMode(true); window.speechSynthesis?.cancel() }}
              className={'flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold rounded-md transition ' + (voiceMode ? 'bg-white shadow-sm text-navy' : 'text-slate-500 hover:text-slate-700')}>
              <Volume2 size={14} /> Voice
            </button>
            <button onClick={() => { setVoiceMode(false); window.speechSynthesis?.cancel(); _endVoiceSession() }}
              className={'flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold rounded-md transition ' + (!voiceMode ? 'bg-white shadow-sm text-navy' : 'text-slate-500 hover:text-slate-700')}>
              <Type size={14} /> Text
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col" style={{ height: '44rem' }}>
            {voiceMode ? (
              <div className="flex-1 flex flex-col h-full overflow-hidden">
                <div className="flex-1 min-h-0 flex flex-col items-center justify-center border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white pb-4 pt-4">
                  <SimliAvatar
                    onMount={api => { simliRef.current = api }}
                    isSpeaking={voiceState === VS.PATIENT}
                    patientName={c.PATIENT.name}
                    onReady={() => {}}
                    onError={msg => setSpeechError(msg)}
                  />
                  {speechError && <p className="text-red-500 text-xs mt-2 text-center max-w-xs">{speechError}</p>}
                  <div className="mt-4 mb-2 flex flex-col items-center gap-2">
                    <div className="flex items-end gap-[2px] h-8">
                      {Array.from({ length: 20 }).map((_, i) => {
                        const active = voiceState === VS.SPEAKING || voiceState === VS.LISTENING
                        const h = active ? Math.max(3, Math.round(audioLevel * 28 * (0.3 + 0.7 * Math.abs(Math.sin(i * 0.65))))) : 3
                        return <div key={i} style={{ height: h }} className={'w-1 rounded-full transition-all duration-75 ' + (voiceState === VS.SPEAKING ? 'bg-red-400' : voiceState === VS.LISTENING ? 'bg-teal' : 'bg-slate-200')} />
                      })}
                    </div>
                    <button onClick={toggleSession} disabled={voiceState === VS.DISABLED || loading}
                      className={'grid place-items-center w-16 h-16 rounded-full text-white transition-all duration-300 shadow-lg ' + (
                        voiceState === VS.DISABLED ? 'bg-slate-300 cursor-not-allowed' :
                        voiceState === VS.IDLE ? 'bg-navy hover:bg-navydark hover:scale-105 shadow-navy/30' :
                        voiceState === VS.SPEAKING ? 'bg-red-500 shadow-red-500/40 scale-110' :
                        'bg-teal shadow-teal/30 scale-105'
                      )}>
                      {voiceState === VS.IDLE || voiceState === VS.DISABLED ? <Phone size={24} /> : <PhoneOff size={24} />}
                    </button>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider text-center">{statusMap[voiceState]}</p>
                  </div>
                </div>
                <div className="h-52 shrink-0 flex flex-col bg-white border-t border-slate-100">
                  <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Live Transcript</span>
                    {voiceState !== VS.IDLE && voiceState !== VS.DISABLED && (
                      <span className="flex items-center gap-1.5 text-[10px] text-teal font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" /> Session active
                      </span>
                    )}
                  </div>
                  <div ref={voiceScrollRef} className="flex-1 overflow-y-auto thin-scroll px-4 py-3 space-y-3">
                    {chat.length === 0 ? <p className="text-[12px] text-slate-400 text-center mt-6">Start talking — your conversation will appear here.</p>
                      : chat.map((m, i) => <Bubble key={i} role={m.role} text={m.text} discovered={m.discovered} compact />)}
                    {timeLeft === 0 && <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-[12px] text-red-700 font-semibold text-center">30-minute session expired. Document your findings.</div>}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100">
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-navy text-white"><User size={16} /></span>
                  <div><p className="text-[13px] font-semibold text-slate-800">{c.PATIENT.name}</p><p className="text-[11px] text-slate-400">Standardized patient · {c.ENCOUNTER.type}</p></div>
                </div>
                <div ref={scrollRef} className="flex-1 overflow-y-auto thin-scroll px-4 py-4 space-y-3 bg-slate-50/60">
                  {chat.length === 0 && timeLeft > 0 && <div className="text-center text-[13px] text-slate-400 mt-10"><MessageSquare size={28} className="mx-auto mb-2 opacity-40" />Start the conversation. Try a suggested question below.</div>}
                  {timeLeft === 0 && <div className="text-center text-[13px] text-red-500 font-bold mt-4 p-3 bg-red-50 rounded-lg">Your 30-minute interview session has expired. Please document your findings.</div>}
                  {chat.map((m, i) => <Bubble key={i} role={m.role} text={m.text} discovered={m.discovered} />)}
                </div>
                <div className="px-3 py-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {CHIPS.map(ch => <button key={ch} onClick={() => send(ch)} disabled={loading || timeLeft === 0} className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-teal/10 hover:text-teal transition disabled:opacity-50">{ch}</button>)}
                  </div>
                  <div className="flex items-end gap-2">
                    <textarea value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
                      placeholder={timeLeft === 0 ? 'Session expired' : 'Ask the patient a question…'} disabled={timeLeft === 0 || loading} rows={1}
                      className="flex-1 resize-none rounded-lg border border-slate-300 px-3 py-2 text-[13px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 disabled:bg-slate-100 disabled:text-slate-400" />
                    <button onClick={() => send()} disabled={timeLeft === 0 || loading} className="grid place-items-center w-10 h-10 rounded-lg bg-teal text-white hover:bg-teal/90 transition shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"><Send size={16} /></button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Card title="Discovered topics" icon={Sparkles} color="0d9488">
            {discoveredTopics.length === 0 ? <p className="text-[13px] text-slate-400">Nothing uncovered yet. Hidden history will appear here as you ask about it.</p>
              : <ul className="space-y-1.5">{discoveredTopics.map(t => <li key={t.id} className="flex items-center gap-2 text-[13px] text-slate-700"><Sparkles size={13} className="text-teal" /> {t.topic}</li>)}</ul>}
          </Card>
          <Card title="Quick documentation" icon={Stethoscope} color="13314f">
            <p className="text-[12px] text-slate-500 mb-3">Document findings obtained during the patient interview. Fields automatically save.</p>
            <div className="space-y-6 max-h-[36rem] overflow-y-auto thin-scroll pr-1 pb-16">
              {[
                { id: 'hpi', label: 'HPI', title: 'History of Present Illness', fields: [{ key: 'hpiNarrative', label: 'HPI narrative', placeholder: 'Brief narrative of the present illness...' }] },
                { id: 'meds', label: 'MEDS', title: 'Medication History / Reconciliation', fields: ['currentMeds','adherence','otc','sideEffects'].map(k => c.INTERVIEW_FIELDS?.find(f => f.key === k) || { key: k, label: FIELD_LABELS[k] || k }) },
                { id: 'sh', label: 'SH', title: 'Social History', fields: [c.INTERVIEW_FIELDS?.find(f => f.key === 'diet') || { key: 'diet', label: FIELD_LABELS.diet }, c.INTERVIEW_FIELDS?.find(f => f.key === 'exercise') || { key: 'exercise', label: FIELD_LABELS.exercise }, { key: 'tobacco', label: 'Tobacco use', type: 'select', options: ['None','Occasional','Moderate','Heavy','Former'] }, { key: 'alcohol', label: 'Alcohol use', type: 'select', options: ['None','Occasional','Moderate','Heavy','Former'] }, { key: 'caffeine', label: 'Caffeine', placeholder: 'e.g., 2 cups coffee/day' }] },
                { id: 'fh', label: 'FH', title: 'Family History', fields: [c.INTERVIEW_FIELDS?.find(f => f.key === 'familyHistory') || { key: 'familyHistory', label: FIELD_LABELS.familyHistory }] },
                { id: 'reported', label: '', title: 'Patient-Reported / Self-Management', fields: ['homeBp','bpTechnique','glucoseMonitoring','weightGoals','diseaseUnderstanding','concerns','cost'].map(k => c.INTERVIEW_FIELDS?.find(f => f.key === k) || { key: k, label: FIELD_LABELS[k] || k }) }
              ].map(g => (
                <div key={g.title}>
                  <div className="flex items-center gap-2 mb-2">
                    {g.label && <span className="inline-block px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-bold rounded tracking-wide">{g.label}</span>}
                    <h3 className="text-[12px] font-bold text-slate-700">{g.title}</h3>
                  </div>
                  <div className="space-y-3 pl-1 border-l-2 border-slate-100 ml-1">
                    {g.fields.map(f => {
                      if (!f?.label) return null
                      const isDiscovered = discovered[f.key]
                      return (
                        <div key={f.key} className="pl-2">
                          <label className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 mb-1">
                            {f.label}
                            {isDiscovered && <span className="inline-flex items-center gap-1 px-1 py-0.5 rounded bg-teal/10 text-teal text-[9px] font-semibold">? Discovered</span>}
                          </label>
                          {f.type === 'select'
                            ? <select value={interview[f.key] || ''} onChange={e => onField(f.key, e.target.value)} className="w-full rounded-md border border-slate-300 bg-white px-2 py-1.5 text-[12px] text-slate-800 outline-none focus:border-teal"><option value="">—</option>{f.options.map(o => <option key={o} value={o}>{o}</option>)}</select>
                            : <AutoTextarea value={interview[f.key]} onChange={v => onField(f.key, v)} placeholder={f.placeholder} rows={1} />}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function Bubble({ role, text, discovered, compact }) {
  const isPatient = role === 'patient'
  return (
    <div className={'flex ' + (isPatient ? 'justify-start' : 'justify-end')}>
      <div className={'max-w-[85%] rounded-2xl ' + (compact ? 'px-3 py-1.5 text-[12px]' : 'px-3.5 py-2 text-[13px]') + ' leading-relaxed ' + (isPatient ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm' : 'bg-navy text-white rounded-tr-sm')}>
        {text}
        {isPatient && discovered && <span className="mt-1 flex items-center gap-1 text-[10px] text-teal font-semibold"><Sparkles size={10} /> new info uncovered</span>}
      </div>
    </div>
  )
}
