'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
// SimliClient will be dynamically imported inside useEffect to avoid SSR crash

// ─── Simli preset face IDs matched to patient demographics ──────────────────
// Get full list from: https://app.simli.com → Faces
// These are example IDs; replace with IDs from your Simli dashboard.
const FACE_MAP = {
  'maria gonzalez':   'tmp9i8bbq7', // Hispanic woman
  'linda martinez':   'tmp9i8bbq7', // Hispanic woman
  'angela rodriguez': 'tmp9i8bbq7', // Hispanic woman
  'james wilson':     'CXdAXLzlJX', // older white man
  'michael turner':   'CXdAXLzlJX', // white man
  'david chen':       'CXdAXLzlJX', // Asian man (closest preset)
}

const DEFAULT_FACE = 'tmp9i8bbq7'

function getFaceId(patientName) {
  if (!patientName) return DEFAULT_FACE
  return FACE_MAP[patientName.toLowerCase()] ?? DEFAULT_FACE
}

// ─── Decode MP3 → mono 16-bit PCM at 16 kHz ─────────────────────────────────
async function mp3ToPcm16(mp3ArrayBuffer) {
  const audioCtx = new AudioContext({ sampleRate: 16000 })
  const decoded = await audioCtx.decodeAudioData(mp3ArrayBuffer)

  // Mixdown to mono
  const monoData = decoded.numberOfChannels > 1
    ? (() => {
        const left = decoded.getChannelData(0)
        const right = decoded.getChannelData(1)
        return left.map((l, i) => (l + right[i]) / 2)
      })()
    : decoded.getChannelData(0)

  // Resample if needed (AudioContext with sampleRate=16000 should handle it)
  const pcm16 = new Int16Array(monoData.length)
  for (let i = 0; i < monoData.length; i++) {
    const clamped = Math.max(-1, Math.min(1, monoData[i]))
    pcm16[i] = Math.round(clamped * 32767)
  }

  await audioCtx.close()
  return new Uint8Array(pcm16.buffer)
}

// ─── SimliAvatar ─────────────────────────────────────────────────────────────
// onMount(api) is called with { speakText, stop } once the component mounts.
// This avoids forwardRef issues with next/dynamic.
export function SimliAvatar({ patientName, isSpeaking, onReady, onError, onMount }) {
  const videoRef = useRef(null)
  const audioRef = useRef(null)
  const clientRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | connecting | ready | error
  const [errorMsg, setErrorMsg] = useState('')
  const faceId = getFaceId(patientName)
  const apiKey = process.env.NEXT_PUBLIC_SIMLI_API_KEY

  // ── Expose speakText/stop to parent via onMount callback ──
  useEffect(() => {
    if (!onMount) return
    onMount({
      speakText: async (text) => {
        if (!clientRef.current || status !== 'ready') return
        try {
          const res = await fetch(`/api/tts?text=${encodeURIComponent(text)}&voice=Joanna`)
          if (!res.ok) throw new Error('TTS fetch failed')
          const mp3Buffer = await res.arrayBuffer()
          const pcmBytes = await mp3ToPcm16(mp3Buffer)
          const CHUNK = 4096
          for (let i = 0; i < pcmBytes.length; i += CHUNK) {
            clientRef.current.sendAudioData(pcmBytes.slice(i, i + CHUNK))
          }
        } catch (e) {
          console.error('Simli speakText error:', e)
          onError?.('Avatar speech error: ' + e.message)
        }
      },
      stop: () => { try { clientRef.current?.close() } catch (_) {} }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  // ── Initialize Simli once on mount ──
  useEffect(() => {
    let client = null

    async function initSimli() {
      if (!apiKey) {
        setStatus('error')
        setErrorMsg('NEXT_PUBLIC_SIMLI_API_KEY not set')
        return
      }
      if (!videoRef.current || !audioRef.current) return

      setStatus('connecting')

      try {
        // Dynamically import SimliClient to avoid SSR crash with WebRTC
        const { SimliClient } = await import('simli-client')
        
        client = new SimliClient()
        clientRef.current = client

        const config = {
          apiKey,
          faceId,
          videoRef,
          audioRef,
          handleSilence: true,
        }

        client.Initialize(config)

        client.on('connected', () => {
          setStatus('ready')
          onReady?.()
        })

        client.on('disconnected', () => {
          setStatus('idle')
        })

        client.on('failed', (e) => {
          console.error('Simli failed:', e)
          setStatus('error')
          setErrorMsg('Avatar connection failed')
          onError?.('Avatar connection failed')
        })

        client.start()
      } catch (err) {
        console.error('Failed to initialize SimliClient:', err)
        setStatus('error')
        setErrorMsg('Failed to load avatar client')
      }
    }

    initSimli()

    return () => {
      try { client?.close() } catch (_) {}
    }
  }, [faceId, apiKey]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Video call frame */}
      <div className="relative">
        {/* Animated aura when speaking */}
        {isSpeaking && (
          <>
            <div className="absolute inset-0 rounded-2xl bg-teal/30 animate-ping" style={{ animationDuration: '1.4s' }} />
            <div className="absolute -inset-2 rounded-2xl bg-teal/15 animate-pulse" style={{ animationDuration: '2s' }} />
          </>
        )}

        {/* Simli video element — 16:9 video call style */}
        <div className={`relative z-10 rounded-2xl overflow-hidden border-4 shadow-2xl transition-all duration-500 ${
          isSpeaking ? 'border-teal shadow-teal/40' : 'border-slate-200/60 shadow-slate-300'
        }`} style={{ width: 280, height: 280 }}>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover bg-slate-900"
          />
          <audio ref={audioRef} autoPlay playsInline className="hidden" />

          {/* Status overlay */}
          {status === 'connecting' && (
            <div className="absolute inset-0 bg-navy/80 flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full border-4 border-white/20 border-t-teal animate-spin" />
              <p className="text-white text-xs font-medium">Connecting avatar…</p>
            </div>
          )}
          {status === 'error' && (
            <div className="absolute inset-0 bg-red-900/80 flex flex-col items-center justify-center gap-2 p-4">
              <p className="text-white text-xs font-medium text-center">{errorMsg || 'Avatar unavailable'}</p>
            </div>
          )}

          {/* Live indicator */}
          {status === 'ready' && (
            <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/50 rounded-full px-2 py-0.5">
              <div className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-teal animate-pulse' : 'bg-green-400'}`} />
              <span className="text-white text-[10px] font-semibold">{isSpeaking ? 'Speaking' : 'Live'}</span>
            </div>
          )}
        </div>

        {/* Speaking indicator dot */}
        {isSpeaking && status === 'ready' && (
          <span className="absolute -bottom-1 -right-1 z-20 w-5 h-5 rounded-full bg-teal border-2 border-white animate-pulse" />
        )}
      </div>

      <h3 className="mt-5 font-head text-xl text-navy font-semibold">{patientName}</h3>
      <p className={`mt-1 text-sm font-medium transition-colors duration-300 ${
        status === 'connecting' ? 'text-amber-500' :
        status === 'error' ? 'text-red-500' :
        isSpeaking ? 'text-teal animate-pulse' : 'text-slate-400'
      }`}>
        {status === 'connecting' ? 'Connecting…' :
         status === 'error' ? 'Avatar offline — voice only' :
         isSpeaking ? '● Speaking…' : 'Listening…'}
      </p>
    </div>
  )
}
