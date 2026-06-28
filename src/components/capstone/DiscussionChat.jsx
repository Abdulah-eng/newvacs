import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Send, User, BrainCircuit, Video, VideoOff, Mic, MicOff } from 'lucide-react'
import dynamic from 'next/dynamic'

// SimliAvatar uses WebRTC (browser-only) — must NOT be server-side rendered
const SimliAvatar = dynamic(
  () => import('../ui/SimliAvatar').then(mod => mod.SimliAvatar),
  { ssr: false }
)

export default function DiscussionChat({ topic, evaluation, onFinish }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoMode, setVideoMode] = useState(false)
  const bottomRef = useRef(null)
  const simliRef = useRef(null)

  // ── Voice State ──
  const [isListening, setIsListening] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechError, setSpeechError] = useState(null)
  const [audioLevel, setAudioLevel] = useState(0)

  // ── VAD Refs ──
  const streamRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])
  const audioCtxRef = useRef(null)
  const analyserRef = useRef(null)
  const silenceTimerRef = useRef(null)
  const isProcessingRef = useRef(false)
  const isListeningRef = useRef(false)
  const mimeTypeRef = useRef('')

  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: "Excellent job on the manuscript! We are now in the live Q&A portion of your Grand Rounds. I will ask you a few follow-up questions to test your clinical reasoning. Are you ready?"
    }])
    return () => {
      _stopVadSession()
      if (window.speechSynthesis) window.speechSynthesis.cancel()
    }
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // ── VAD helpers ──
  function _stopVadSession() {
    clearInterval(silenceTimerRef.current)
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
      setSpeechError('Microphone access denied. Use text instead.')
      setIsListening(false)
      return
    }
    streamRef.current = stream
    isListeningRef.current = true

    const audioCtx = new AudioContext()
    audioCtxRef.current = audioCtx
    await audioCtx.resume()
    const source = audioCtx.createMediaStreamSource(stream)
    const analyser = audioCtx.createAnalyser()
    analyser.fftSize = 1024
    analyser.smoothingTimeConstant = 0.5
    source.connect(analyser)
    analyserRef.current = analyser
    const dataArray = new Uint8Array(analyser.frequencyBinCount)

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
      if (blob.size < 1000) return

      isProcessingRef.current = true
      setIsRecording(false)
      try {
        const ext = mimeType.includes('mp4') ? 'mp4' : 'webm'
        const fd = new FormData()
        fd.append('audio', blob, `rec.${ext}`)
        const res = await fetch('/api/stt', { method: 'POST', body: fd })
        const data = await res.json()
        if (data.text?.trim()) {
          await sendChatMessage(data.text.trim())
        }
      } catch (err) {
        console.error('STT error:', err)
        setSpeechError('Transcription failed.')
      } finally {
        isProcessingRef.current = false
        if (isListeningRef.current && analyserRef.current) {
          audioChunksRef.current = []
          makeRecorder()
        }
      }
    }

    makeRecorder()

    let baseline = 0
    await new Promise(resolve => setTimeout(resolve, 300))
    analyser.getByteFrequencyData(dataArray)
    let bSum = 0
    for (let i = 0; i < dataArray.length; i++) bSum += dataArray[i]
    baseline = (bSum / dataArray.length) + 12
    const SPEECH_THRESHOLD = Math.max(20, baseline)
    const SILENCE_MS = 600

    let lastSpeechAt = 0
    let speaking = false

    const intervalId = setInterval(() => {
      if (!isListeningRef.current) { clearInterval(intervalId); return }
      if (isProcessingRef.current) return

      analyser.getByteFrequencyData(dataArray)
      let sum = 0
      for (let i = 0; i < dataArray.length; i++) sum += dataArray[i]
      const avg = sum / dataArray.length
      setAudioLevel(Math.min(1, (avg - baseline) / 60))

      if (avg > SPEECH_THRESHOLD) {
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
        speaking = false
        if (mediaRecorderRef.current.state === 'recording') {
          mediaRecorderRef.current.stop()
        }
      }
    }, 100)

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

  // ── Send Logic ──
  const sendChatMessage = async (text) => {
    if (!text.trim() || loading) return

    const newMessages = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    // Pause mic while AI speaks
    clearInterval(silenceTimerRef.current)
    if (mediaRecorderRef.current?.state === 'recording') {
      try { mediaRecorderRef.current.stop() } catch (_) {}
    }

    try {
      const res = await fetch('/api/ai/capstone-discussion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: topic.id,
          chatHistory: newMessages,
          evaluationScore: evaluation?.totalScore || 100
        })
      })
      if (!res.ok) throw new Error('Failed to get response')
      const data = await res.json()
      
      setMessages([...newMessages, { role: 'assistant', content: data.reply }])
      
      if (videoMode && simliRef.current) {
        setIsSpeaking(true)
        await simliRef.current.speakText(data.reply)
        setIsSpeaking(false)
      } else {
        // Fallback or text mode
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    } catch (err) {
      console.error(err)
      setMessages([...newMessages, { role: 'assistant', content: 'Network error. Please try again.' }])
    } finally {
      setLoading(false)
      // Resume mic
      if (isListeningRef.current) {
        audioChunksRef.current = []
        isProcessingRef.current = false
        await _startVadSession()
      }
    }
  }

  const handleSendSubmit = (e) => {
    e.preventDefault()
    sendChatMessage(input)
  }

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-60px)] flex flex-col p-4 md:p-6">
      <div className="bg-white flex-1 rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-navy px-6 py-4 flex justify-between items-center text-white shrink-0">
          <div>
            <h2 className="text-lg font-head">Live Q&A</h2>
            <p className="text-xs text-slate-300">Defend your recommendations</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                setVideoMode(!videoMode)
                if (videoMode) {
                  _stopVadSession()
                }
              }} 
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${videoMode ? 'bg-teal/20 text-teal-200 hover:bg-teal/30' : 'bg-white/10 hover:bg-white/20'}`}
              title={videoMode ? "Turn off Video Avatar" : "Turn on Video Avatar"}
            >
              {videoMode ? <Video size={14} /> : <VideoOff size={14} />}
              {videoMode ? 'Video On' : 'Video Off'}
            </button>
            <button onClick={onFinish} className="text-xs font-semibold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
              Finish Simulation
            </button>
          </div>
        </div>

        {/* Layout */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-50">
          
          {videoMode && (
            <div className="md:w-[45%] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 bg-white shadow-inner relative">
              <div className="w-full max-w-[280px] aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 flex items-center justify-center">
                <SimliAvatar
                  patientName="AI Preceptor"
                  isSpeaking={isSpeaking || loading}
                  onMount={(api) => { simliRef.current = api }}
                  onError={(err) => setSpeechError('Simli error: ' + err)}
                />
              </div>
              
              {speechError && <p className="text-red-500 text-xs mt-3 text-center">{speechError}</p>}
              
              {/* Mic Controls */}
              <div className="mt-6 mb-2 flex flex-col items-center gap-3">
                {isListening && (
                  <div className="flex items-end gap-0.5 h-6 mb-2">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const h = isRecording
                        ? Math.max(4, Math.round(audioLevel * 24 * (0.4 + 0.6 * Math.abs(Math.sin(i * 0.7)))))
                        : 4
                      return (
                        <div
                          key={i}
                          className={`w-1.5 rounded-full transition-all duration-75 ${isRecording ? 'bg-teal' : 'bg-slate-300'}`}
                          style={{ height: h }}
                        />
                      )
                    })}
                  </div>
                )}
                <button
                  onClick={toggleListening}
                  disabled={loading}
                  className={`grid place-items-center w-14 h-14 rounded-full text-white transition-all duration-300 shadow-md ${
                    isListening && isRecording
                      ? 'bg-red-500 shadow-red-500/40 scale-110'
                      : isListening
                      ? 'bg-teal hover:bg-teal/90 shadow-teal/30 scale-105'
                      : loading || isSpeaking
                      ? 'bg-slate-300 cursor-not-allowed'
                      : 'bg-navy hover:bg-navy-800 hover:scale-105 shadow-navy/30'
                  }`}
                >
                  {isListening ? <MicOff size={22} /> : <Mic size={22} />}
                </button>
                <p className="text-center text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  {loading ? 'Thinking...' : isSpeaking ? 'Speaking...' : isListening && isRecording ? 'Listening...' : isListening ? 'Waiting for voice...' : 'Click to talk'}
                </p>
              </div>

            </div>
          )}

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-4 max-w-[90%] md:max-w-[85%] ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${m.role === 'user' ? 'bg-navy text-white' : 'bg-teal text-white'}`}>
                  {m.role === 'user' ? <User size={16} /> : <BrainCircuit size={16} />}
                </div>
                <div className={`p-4 rounded-2xl text-[13.5px] leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-navy text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-4 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center shrink-0 shadow-sm">
                  <BrainCircuit size={16} />
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-500 shadow-sm rounded-tl-none flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200 shrink-0">
          <form onSubmit={handleSendSubmit} className="relative flex items-center">
            <input
              type="text"
              className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-navy outline-none text-sm text-slate-700 placeholder-slate-400 shadow-sm transition-all hover:bg-white"
              placeholder={isListening ? "Listening... (Microphone active)" : "Type your response to the AI Preceptor..."}
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading || isListening}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading || isListening}
              className="absolute right-2 p-2 rounded-lg text-white bg-navy hover:bg-navy-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
