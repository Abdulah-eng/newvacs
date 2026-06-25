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
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechError, setSpeechError] = useState(null)
  const recognitionRef = useRef(null)
  const networkErrorCountRef = useRef(0)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [chat])

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'en-US' // Must be set explicitly to avoid network errors
      recognition.maxAlternatives = 1
      recognitionRef.current = recognition
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        networkErrorCountRef.current = 0 // reset on success
        send(transcript)
        setIsListening(false)
      }
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error)
        setIsListening(false)

        if (event.error === 'network') {
          networkErrorCountRef.current += 1
          if (networkErrorCountRef.current >= 2) {
            // Auto-fallback to text mode after 2 network failures
            setSpeechError(null)
            setVoiceMode(false)
            return
          }
          setSpeechError('Voice recognition requires internet access. Retrying… or switch to Text Mode.')
        } else if (event.error === 'not-allowed') {
          setSpeechError('Microphone access denied. Please allow microphone permission in your browser.')
        } else if (event.error === 'no-speech') {
          setSpeechError('No speech detected. Please try again.')
        } else {
          setSpeechError(`Voice error: ${event.error}. Try Text Mode instead.`)
        }
      }
      
      recognition.onend = () => {
        setIsListening(false)
      }
    } else {
      setSpeechError('Speech recognition not supported in this browser. Please use Text Mode.')
      setVoiceMode(false)
    }

    // Cleanup TTS if component unmounts
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel()
      if (recognitionRef.current) {
        try { recognitionRef.current.stop() } catch (_) {}
      }
    }
  }, [])

  const toggleListening = () => {
    if (!recognitionRef.current) return
    
    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      // Cancel any ongoing speech before listening
      if (window.speechSynthesis) window.speechSynthesis.cancel()
      setIsSpeaking(false)
      setSpeechError(null)
      // Re-create recognition instance on each attempt to avoid stale state
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'en-US'
      recognition.maxAlternatives = 1
      recognition.onresult = recognitionRef.current.onresult
      recognition.onerror = recognitionRef.current.onerror
      recognition.onend = recognitionRef.current.onend
      recognitionRef.current = recognition
      try {
        recognition.start()
        setIsListening(true)
      } catch (e) {
        console.error(e)
        setSpeechError('Could not start microphone. Please try Text Mode.')
      }
    }
  }

  const speakText = useCallback(async (text) => {
    if (!voiceMode) return

    // ── Route through Simli (real-time avatar video + audio) ──
    if (simliRef.current) {
      setIsSpeaking(true)
      try {
        await simliRef.current.speakText(text)
      } catch (e) {
        console.warn('Simli speak failed, falling back to Web Speech:', e)
        // Fallback to Web Speech
        _webSpeechFallback(text)
      } finally {
        setIsSpeaking(false)
      }
      return
    }

    // ── Fallback: browser Web Speech API ──
    _webSpeechFallback(text)
  }, [voiceMode])

  function _webSpeechFallback(text) {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    window.speechSynthesis.speak(utterance)
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
                  
                  <div className="mt-8 mb-4">
                    <button 
                      onClick={toggleListening}
                      disabled={loading || isSpeaking}
                      className={`grid place-items-center w-16 h-16 rounded-full text-white transition-all duration-300 shadow-lg ${
                        isListening 
                          ? 'bg-red-500 hover:bg-red-600 animate-pulse shadow-red-500/40 scale-110' 
                          : loading || isSpeaking 
                            ? 'bg-slate-300 cursor-not-allowed'
                            : 'bg-navy hover:bg-navydark hover:scale-105 shadow-navy/30'
                      }`}
                    >
                      {isListening ? <MicOff size={24} /> : <Mic size={24} />}
                    </button>
                    <p className="text-center text-[11px] font-semibold text-slate-500 mt-3 uppercase tracking-wider">
                      {isListening ? 'Tap to Stop' : loading ? 'Thinking...' : isSpeaking ? 'Patient Speaking' : 'Tap to Speak'}
                    </p>
                  </div>
                </div>
                
                {/* Mini Transcript for Voice Mode */}
                <div className="h-48 flex flex-col bg-white">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Live Transcript</span>
                  </div>
                  <div ref={scrollRef} className="flex-1 overflow-y-auto thin-scroll px-4 py-3 space-y-3">
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
