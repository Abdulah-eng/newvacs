import React, { useState, useRef, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { Card, AutoTextarea, SectionTitle } from './ui'
import { Send, Sparkles, User, Stethoscope, MessageSquare, Mic, MicOff, Volume2, Type } from 'lucide-react'

// SimliAvatar uses WebRTC (browser-only) — must NOT be server-side rendered
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

export function PatientInterviewTab({ c, chat, interview, discovered, onAsk, onField }) {
  const [draft, setDraft] = useState('')
  const scrollRef = useRef(null)
  const simliRef = useRef(null) // controls SimliAvatar

  // Voice state
  const [voiceMode, setVoiceMode] = useState(true)
  const [isListening, setIsListening] = useState(false)  // session active
  const [isRecording, setIsRecording] = useState(false)  // actively capturing speech
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechError, setSpeechError] = useState(null)
  const [audioLevel, setAudioLevel] = useState(0)        // 0–1 for waveform
  // VAD refs
  const streamRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])
  const audioCtxRef = useRef(null)
  const analyserRef = useRef(null)
  const silenceTimerRef = useRef(null)
  const vadRafRef = useRef(null)
  const isProcessingRef = useRef(false)
  const isListeningRef = useRef(false)   // mirror of isListening for closures
  const mimeTypeRef = useRef('')         // keep mimeType across recorder restarts
  const voiceScrollRef = useRef(null)   // separate scroll for voice transcript

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    if (voiceScrollRef.current) voiceScrollRef.current.scrollTop = voiceScrollRef.current.scrollHeight
  }, [chat])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      _stopVadSession()
      if (window.speechSynthesis) window.speechSynthesis.cancel()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── VAD helpers ──────────────────────────────────────────────────────────
  function _stopVadSession() {
    clearInterval(silenceTimerRef.current)   // interval-based VAD
    cancelAnimationFrame(vadRafRef.current)  // legacy safety
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try { mediaRecorderRef.current.stop() } catch (_) {}
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
    if (audioCtxRef.current) {
      try { audioCtxRef.current.close() } catch (_) {}
      audioCtxRef.current = null
    }
    analyserRef.current = null
    audioChunksRef.current = []
    isProcessingRef.current = false
    isListeningRef.current = false
    setAudioLevel(0)
    setIsRecording(false)
    setIsListening(false)
  }

  async function _startVadSession() {
    setSpeechError(null)
    audioChunksRef.current = []
    isProcessingRef.current = false

    let stream
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch (err) {
      if (err.name === 'NotAllowedError') {
        setSpeechError('Microphone access denied. Allow microphone in browser settings.')
      } else {
        setSpeechError('Could not access microphone. Use Text Mode instead.')
      }
      setIsListening(false)
      return
    }
    streamRef.current = stream
    isListeningRef.current = true

    // ── AudioContext (must resume — Chrome suspends by default) ───────────────
    const audioCtx = new AudioContext()
    audioCtxRef.current = audioCtx
    await audioCtx.resume()                        // ← critical fix
    const source = audioCtx.createMediaStreamSource(stream)
    const analyser = audioCtx.createAnalyser()
    analyser.fftSize = 1024
    analyser.smoothingTimeConstant = 0.5
    source.connect(analyser)
    analyserRef.current = analyser
    const dataArray = new Uint8Array(analyser.frequencyBinCount)

    // ── MediaRecorder ─────────────────────────────────────────────────────────
    const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
      ? 'audio/webm;codecs=opus'
      : MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4'
    mimeTypeRef.current = mimeType

    function makeRecorder() {
      const rec = new MediaRecorder(stream, { mimeType })
      rec.ondataavailable = (e) => { if (e.data.size > 0) audioChunksRef.current.push(e.data) }
      rec.onstop = handleRecorderStop
      mediaRecorderRef.current = rec
      return rec
    }

    async function handleRecorderStop() {
      if (isProcessingRef.current) return
      const chunks = [...audioChunksRef.current]
      audioChunksRef.current = []
      if (!chunks.length) return

      const blob = new Blob(chunks, { type: mimeType })
      if (blob.size < 1000) return  // truly empty

      isProcessingRef.current = true
      setIsRecording(false)
      try {
        const ext = mimeType.includes('mp4') ? 'mp4' : 'webm'
        const fd = new FormData()
        fd.append('audio', blob, `rec.${ext}`)
        const res = await fetch('/api/stt', { method: 'POST', body: fd })
        const data = await res.json()
        if (data.text?.trim()) await send(data.text.trim())
      } catch (err) {
        console.error('STT error:', err)
        setSpeechError('Transcription failed — please try again.')
      } finally {
        isProcessingRef.current = false
        // Resume VAD after processing — make fresh recorder
        if (isListeningRef.current && analyserRef.current) {
          audioChunksRef.current = []
          makeRecorder()
        }
      }
    }

    makeRecorder()

    // ── VAD loop via setInterval (rAF throttles in inactive tabs) ─────────────
    // Calibrate: measure ambient noise for 300ms first
    let baseline = 0
    await new Promise(resolve => setTimeout(resolve, 300))
    analyser.getByteFrequencyData(dataArray)
    let bSum = 0
    for (let i = 0; i < dataArray.length; i++) bSum += dataArray[i]
    baseline = (bSum / dataArray.length) + 12  // 12-unit buffer above ambient
    const SPEECH_THRESHOLD = Math.max(20, baseline)  // at least 20
    const SILENCE_MS = 2500

    let lastSpeechAt = 0
    let speaking = false

    const intervalId = setInterval(() => {
      if (!isListeningRef.current) { clearInterval(intervalId); return }
      if (isProcessingRef.current) return  // don't record while processing

      analyser.getByteFrequencyData(dataArray)
      let sum = 0
      for (let i = 0; i < dataArray.length; i++) sum += dataArray[i]
      const avg = sum / dataArray.length
      setAudioLevel(Math.min(1, (avg - baseline) / 60))

      if (avg > SPEECH_THRESHOLD) {
        // ── Speech detected ──
        lastSpeechAt = Date.now()
        if (!speaking) {
          speaking = true
          setIsRecording(true)
          if (mediaRecorderRef.current.state === 'inactive') {
            audioChunksRef.current = []
            mediaRecorderRef.current.start()
          }
        }
      } else if (speaking && lastSpeechAt && Date.now() - lastSpeechAt > SILENCE_MS) {
        // ── 2.5s of silence after speech → submit ──
        speaking = false
        if (mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop()  // triggers handleRecorderStop
        }
      }
    }, 100)

    // Store cleanup handle
    silenceTimerRef.current = intervalId
  }


  const toggleListening = async () => {
    if (isListening) {
      _stopVadSession()
    } else {
      setIsListening(true)
      await _startVadSession()
    }
  }

  const speakText = useCallback(async (text) => {
    if (!voiceMode) return
    setIsSpeaking(true)

    // Pause the VAD interval while patient speaks (prevent picking up avatar audio)
    clearInterval(silenceTimerRef.current)
    if (mediaRecorderRef.current?.state === 'recording') {
      try { mediaRecorderRef.current.stop() } catch (_) {}
    }

    try {
      if (simliRef.current) {
        await simliRef.current.speakText(text)
      } else {
        await _webSpeechFallback(text)
      }
    } catch (e) {
      console.warn('Avatar TTS failed, falling back:', e)
      await _webSpeechFallback(text)
    } finally {
      setIsSpeaking(false)
      // Resume listening — start a fresh VAD session after patient finishes
      if (isListeningRef.current) {
        audioChunksRef.current = []
        isProcessingRef.current = false
        // Re-create the interval on existing stream (don't re-ask for mic)
        await _startVadSession()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceMode])

  function _webSpeechFallback(text) {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window)) { resolve(); return }
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.onend = resolve
      utterance.onerror = resolve
      window.speechSynthesis.speak(utterance)
    })
  }

  const [loading, setLoading] = useState(false)

  async function send(text) {
    const q = (text ?? draft).trim()
    if (!q || loading) return
    
    setDraft('')
    setLoading(true)
    
    try {
      const res = await fetch('/api/ai/interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          chatHistory: chat,
          weekId: c.ENCOUNTER.week,
          diseaseStates: c.ENCOUNTER.diseaseStates,
          patientId: c.id,
          visitDay: c.ENCOUNTER.day,
          patientMasterProfile: c.PATIENT,
          dailyCaseFacts: {
            vitals: c.VITALS,
            labs: c.LABS,
            problems: c.PROBLEMS,
            meds: c.MEDICATIONS,
            subjective: c.SUBJECTIVE_DOCUMENTED
          },
          aiQaGuide: c.INTERVIEW_KNOWLEDGE,
          hiddenInfoMap: c.INTERVIEW_KNOWLEDGE.filter(k => k.field)
        })
      })
      
      const reply = await res.json()
      
      if (reply.error) {
        console.error('AI Error:', reply.error)
        const errText = "I'm sorry, I'm having trouble hearing you. Could you repeat that?"
        onAsk(q, { text: errText })
        speakText(errText)
      } else {
        onAsk(q, { text: reply.response, field: reply.hidden_info_triggered ? c.INTERVIEW_KNOWLEDGE.find(k => k.id === reply.hidden_info_triggered)?.field : null })
        speakText(reply.response)
      }
    } catch (err) {
      console.error('Failed to contact AI:', err)
      const errText = "I'm having some connection issues. Can we try again?"
      onAsk(q, { text: errText })
      speakText(errText)
    } finally {
      setLoading(false)
    }
  }

  const discoveredTopics = c.INTERVIEW_KNOWLEDGE.filter(k => k.field && discovered[k.field])

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <SectionTitle sub="Interview the standardized patient — she won’t volunteer hidden facts unless you ask">Patient Interview</SectionTitle>
        <div className="flex bg-slate-200 rounded-lg p-1">
          <button onClick={() => { setVoiceMode(true); window.speechSynthesis?.cancel(); setIsSpeaking(false) }} 
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold rounded-md transition ${voiceMode ? 'bg-white shadow-sm text-navy' : 'text-slate-500 hover:text-slate-700'}`}>
            <Volume2 size={14} /> Voice
          </button>
          <button onClick={() => { setVoiceMode(false); window.speechSynthesis?.cancel(); setIsSpeaking(false) }} 
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold rounded-md transition ${!voiceMode ? 'bg-white shadow-sm text-navy' : 'text-slate-500 hover:text-slate-700'}`}>
            <Type size={14} /> Text
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Interaction column */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col" style={{ height: '36rem' }}>
            
            {voiceMode ? (
              // Voice Mode UI
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 flex flex-col items-center justify-center border-b border-slate-100 bg-slate-50/50">
                  <SimliAvatar
                    onMount={(api) => { simliRef.current = api }}
                    isSpeaking={isSpeaking}
                    patientName={c.PATIENT.name}
                    onReady={() => console.log('Simli avatar ready')}
                    onError={(msg) => setSpeechError(msg)}
                  />
                  
                  {speechError && <p className="text-red-500 text-xs mt-2">{speechError}</p>}
                  
                  <div className="mt-6 mb-4 flex flex-col items-center gap-3">
                    {/* Waveform bars — only shown while actively capturing voice */}
                    {isListening && (
                      <div className="flex items-end gap-0.5 h-8">
                        {Array.from({ length: 16 }).map((_, i) => {
                          const h = isRecording
                            ? Math.max(4, Math.round(audioLevel * 32 * (0.4 + 0.6 * Math.abs(Math.sin(i * 0.7)))))
                            : 4
                          return (
                            <div
                              key={i}
                              className={`w-1.5 rounded-full transition-all duration-75 ${
                                isRecording ? 'bg-teal' : 'bg-slate-300'
                              }`}
                              style={{ height: h }}
                            />
                          )
                        })}
                      </div>
                    )}

                    <button
                      onClick={toggleListening}
                      disabled={loading}
                      title={isListening ? 'Stop voice session' : 'Start voice session'}
                      className={`grid place-items-center w-16 h-16 rounded-full text-white transition-all duration-300 shadow-lg ${
                        isListening && isRecording
                          ? 'bg-red-500 shadow-red-500/40 scale-110'
                          : isListening
                          ? 'bg-teal hover:bg-teal/90 shadow-teal/30 scale-105'
                          : loading || isSpeaking
                          ? 'bg-slate-300 cursor-not-allowed'
                          : 'bg-navy hover:bg-navydark hover:scale-105 shadow-navy/30'
                      }`}
                    >
                      {isListening ? <MicOff size={24} /> : <Mic size={24} />}
                    </button>

                    <p className="text-center text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {isSpeaking
                        ? '🔊 Patient Speaking…'
                        : isListening && isRecording
                        ? '🔴 Speaking — pause to send'
                        : isListening
                        ? '🎙 Listening… speak now'
                        : loading
                        ? '⏳ Processing…'
                        : 'Tap to Start Voice'}
                    </p>
                  </div>
                </div>
                
                {/* Mini Transcript for Voice Mode */}
                <div className="h-56 flex flex-col bg-white border-t border-slate-100">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Live Transcript</span>
                  </div>
                  <div ref={voiceScrollRef} className="flex-1 overflow-y-auto thin-scroll px-4 py-3 space-y-3">
                    {chat.length === 0 ? (
                      <p className="text-[12px] text-slate-400 text-center mt-6">Transcript will appear here.</p>
                    ) : (
                      chat.map((m, i) => <Bubble key={i} role={m.role} text={m.text} discovered={m.discovered} compact />)
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // Text Mode UI (Classic)
              <>
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100">
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-navy text-white"><User size={16} /></span>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-800">{c.PATIENT.name}</p>
                    <p className="text-[11px] text-slate-400">Standardized patient · {c.ENCOUNTER.type}</p>
                  </div>
                </div>

                <div ref={scrollRef} className="flex-1 overflow-y-auto thin-scroll px-4 py-4 space-y-3 bg-slate-50/60">
                  {chat.length === 0 && (
                    <div className="text-center text-[13px] text-slate-400 mt-10">
                      <MessageSquare size={28} className="mx-auto mb-2 opacity-40" />
                      Start the conversation. Try a suggested question below.
                    </div>
                  )}
                  {chat.map((m, i) => (
                    <Bubble key={i} role={m.role} text={m.text} discovered={m.discovered} />
                  ))}
                </div>

                <div className="px-3 py-3 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {CHIPS.map(ch => (
                      <button key={ch} onClick={() => send(ch)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-teal/10 hover:text-teal transition">
                        {ch}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-end gap-2">
                    <textarea
                      value={draft}
                      onChange={e => setDraft(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
                      placeholder="Ask the patient a question…"
                      rows={1}
                      className="flex-1 resize-none rounded-lg border border-slate-300 px-3 py-2 text-[13px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                    <button onClick={() => send()}
                      className="grid place-items-center w-10 h-10 rounded-lg bg-teal text-white hover:bg-teal/90 transition shrink-0">
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </>
            )}
            
          </div>
        </div>

        {/* Side column: discovered + quick documentation */}
        <div className="space-y-4">
          <Card title="Discovered topics" icon={Sparkles} color="0d9488">
            {discoveredTopics.length === 0 ? (
              <p className="text-[13px] text-slate-400">Nothing uncovered yet. Hidden history will appear here as you ask about it.</p>
            ) : (
              <ul className="space-y-1.5">
                {discoveredTopics.map(t => (
                  <li key={t.id} className="flex items-center gap-2 text-[13px] text-slate-700">
                    <Sparkles size={13} className="text-teal" /> {t.topic}
                  </li>
                ))}
              </ul>
            )}
          </Card>

          <Card title="Quick documentation" icon={Stethoscope} color="13314f">
            <p className="text-[12px] text-slate-500 mb-3">Jot findings here or in the Subjective tab — both autosave to the same record.</p>
            <div className="space-y-3 max-h-[19rem] overflow-y-auto thin-scroll pr-1">
              {c.INTERVIEW_FIELDS.map(f => (
                <div key={f.key}>
                  <label className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 mb-1">
                    {f.label}
                    {discovered[f.key] && <Sparkles size={11} className="text-teal" />}
                  </label>
                  <AutoTextarea value={interview[f.key]} onChange={v => onField(f.key, v)} placeholder={f.placeholder} rows={2} />
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
    <div className={`flex ${isPatient ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[85%] rounded-2xl ${compact ? 'px-3 py-1.5 text-[12px]' : 'px-3.5 py-2 text-[13px]'} leading-relaxed ${
        isPatient ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-sm'
                  : 'bg-navy text-white rounded-tr-sm'}`}>
        {text}
        {isPatient && discovered && (
          <span className={`mt-1 flex items-center gap-1 text-[10px] text-teal font-semibold`}>
            <Sparkles size={10} /> new info uncovered
          </span>
        )}
      </div>
    </div>
  )
}
