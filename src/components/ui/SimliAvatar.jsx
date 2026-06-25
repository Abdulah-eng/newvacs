'use client'

import React, { useEffect, useRef, useState } from 'react'

// ─── Face IDs from https://app.simli.com → Faces ─────────────────────────────
// User's face ID from Simli dashboard
const VALID_FACE_ID = 'cace3ef7-a4c4-425d-a8cf-a5358eb0c427'

const FACE_MAP = {
  'maria gonzalez':   VALID_FACE_ID,
  'linda martinez':   VALID_FACE_ID,
  'angela rodriguez': VALID_FACE_ID,
  'james wilson':     VALID_FACE_ID,
  'michael turner':   VALID_FACE_ID,
  'david chen':       VALID_FACE_ID,
}
const DEFAULT_FACE = VALID_FACE_ID

function getFaceId(patientName) {
  if (!patientName) return DEFAULT_FACE
  return FACE_MAP[patientName.toLowerCase()] ?? DEFAULT_FACE
}

// ─── Decode MP3 ArrayBuffer → mono Uint8Array of Int16 PCM at 16 kHz ─────────
async function mp3ToPcm16(mp3ArrayBuffer) {
  const audioCtx = new AudioContext({ sampleRate: 16000 })
  const decoded = await audioCtx.decodeAudioData(mp3ArrayBuffer)
  const raw = decoded.numberOfChannels > 1
    ? decoded.getChannelData(0).map((l, i) => (l + decoded.getChannelData(1)[i]) / 2)
    : decoded.getChannelData(0)
  const pcm16 = new Int16Array(raw.length)
  for (let i = 0; i < raw.length; i++) {
    pcm16[i] = Math.round(Math.max(-1, Math.min(1, raw[i])) * 32767)
  }
  await audioCtx.close()
  return new Uint8Array(pcm16.buffer)
}

// ─── SimliAvatar ──────────────────────────────────────────────────────────────
// Uses onMount(api) callback to expose { speakText, stop } to the parent.
// This avoids forwardRef issues with next/dynamic.
export function SimliAvatar({ patientName, isSpeaking, onReady, onError, onMount }) {
  const videoRef = useRef(null)
  const audioRef = useRef(null)
  const clientRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | connecting | ready | error
  const [errorMsg, setErrorMsg] = useState('')

  const faceId = getFaceId(patientName)
  const apiKey = process.env.NEXT_PUBLIC_SIMLI_API_KEY

  // ── Expose api to parent ──
  useEffect(() => {
    if (!onMount) return
    onMount({
      speakText: async (text) => {
        if (!clientRef.current || status !== 'ready') {
          // Fallback: just return, parent will use Web Speech
          return
        }
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
          throw e // Let parent fall back to Web Speech
        }
      },
      stop: () => { try { clientRef.current?.stop() } catch (_) {} }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  // ── Initialize Simli ──
  useEffect(() => {
    if (!videoRef.current || !audioRef.current) return
    if (!apiKey) {
      setStatus('error')
      setErrorMsg('Simli API key not set')
      return
    }

    let client = null
    let stopped = false

    async function init() {
      setStatus('connecting')
      try {
        // Dynamic import to avoid SSR crash
        const { SimliClient, generateSimliSessionToken, generateIceServers } = await import('simli-client')
        if (stopped) return

        // 1. Get a session token from Simli
        const tokenResponse = await generateSimliSessionToken({
          apiKey,
          config: {
            faceId,
            handleSilence: true,
            maxSessionLength: 600,
            maxIdleTime: 120,
            model: 'fasttalk',
          },
        })
        if (stopped) return

        // 2. Get ICE servers (required for P2P mode)
        const iceServers = await generateIceServers(apiKey)
        if (stopped) return

        // 3. Create client — pass actual DOM elements (not refs)
        client = new SimliClient(
          tokenResponse.session_token,
          videoRef.current,
          audioRef.current,
          iceServers
        )
        clientRef.current = client

        // 4. Register events (Simli v3 event names)
        client.on('start', () => {
          if (stopped) return
          setStatus('ready')
          onReady?.()
        })
        client.on('stop', () => {
          if (stopped) return
          setStatus('idle')
        })
        client.on('startup_error', (reason) => {
          if (stopped) return
          console.error('Simli startup_error:', reason)
          setStatus('error')
          setErrorMsg('Avatar startup failed')
          onError?.('Avatar startup failed')
        })
        client.on('error', (reason) => {
          if (stopped) return
          console.error('Simli error:', reason)
          setStatus('error')
          setErrorMsg('Avatar connection error')
          onError?.('Avatar connection error')
        })

        // 5. Start — also set ready here as fallback since 'start' event
        //    may fire before we register the listener
        await client.start()
        if (!stopped && status !== 'ready') {
          setStatus('ready')
          onReady?.()
        }

        // Extra fallback: watch for the video element to start playing
        if (videoRef.current) {
          videoRef.current.addEventListener('playing', () => {
            if (!stopped) { setStatus('ready'); onReady?.() }
          }, { once: true })
        }
      } catch (err) {
        if (stopped) return
        console.error('Failed to initialize SimliClient:', err)
        setStatus('error')
        setErrorMsg('Failed to connect avatar')
      }
    }

    init()

    return () => {
      stopped = true
      try { client?.stop() } catch (_) {}
      clientRef.current = null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faceId, apiKey])

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="relative">
        {/* Speaking aura */}
        {isSpeaking && status === 'ready' && (
          <>
            <div className="absolute inset-0 rounded-2xl bg-teal/30 animate-ping" style={{ animationDuration: '1.4s' }} />
            <div className="absolute -inset-2 rounded-2xl bg-teal/15 animate-pulse" style={{ animationDuration: '2s' }} />
          </>
        )}

        {/* Video call frame */}
        <div
          className={`relative z-10 rounded-2xl overflow-hidden border-4 shadow-2xl transition-all duration-500 ${
            isSpeaking && status === 'ready'
              ? 'border-teal shadow-teal/40'
              : 'border-slate-200/60 shadow-slate-300'
          }`}
          style={{ width: 280, height: 280 }}
        >
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover bg-slate-900"
          />
          <audio ref={audioRef} autoPlay playsInline className="hidden" />

          {/* Connecting overlay */}
          {status === 'connecting' && (
            <div className="absolute inset-0 bg-navy/80 flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full border-4 border-white/20 border-t-teal animate-spin" />
              <p className="text-white text-xs font-medium">Connecting avatar…</p>
            </div>
          )}

          {/* Error overlay — shows static photo fallback */}
          {status === 'error' && (
            <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center gap-2 p-4">
              <div className="w-20 h-20 rounded-full bg-slate-600 flex items-center justify-center text-4xl">
                👩‍⚕️
              </div>
              <p className="text-white/70 text-xs text-center">{errorMsg}</p>
            </div>
          )}

          {/* Live badge */}
          {status === 'ready' && (
            <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/50 rounded-full px-2 py-0.5">
              <div className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-teal animate-pulse' : 'bg-green-400'}`} />
              <span className="text-white text-[10px] font-semibold">{isSpeaking ? 'Speaking' : 'Live'}</span>
            </div>
          )}
        </div>

        {/* Speaking dot */}
        {isSpeaking && status === 'ready' && (
          <span className="absolute -bottom-1 -right-1 z-20 w-5 h-5 rounded-full bg-teal border-2 border-white animate-pulse" />
        )}
      </div>

      <h3 className="mt-5 font-head text-xl text-navy font-semibold">{patientName}</h3>
      <p className={`mt-1 text-sm font-medium transition-colors duration-300 ${
        status === 'connecting' ? 'text-amber-500' :
        status === 'error'     ? 'text-red-500'    :
        isSpeaking             ? 'text-teal animate-pulse' : 'text-slate-400'
      }`}>
        {status === 'connecting' ? 'Connecting…'             :
         status === 'error'      ? 'Avatar offline — voice only' :
         isSpeaking              ? '● Speaking…'             : 'Listening…'}
      </p>
    </div>
  )
}
