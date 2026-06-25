import { NextResponse } from 'next/server'

/**
 * GET /api/tts?text=Hello+world&voice=en-US-JennyNeural
 * TTS proxy — tries multiple providers in order:
 * 1. Microsoft Edge TTS (free, high quality, no key)
 * 2. StreamElements fallback
 * Returns: audio/mpeg (MP3) or audio/wav
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get('text') || ''

  if (!text.trim()) {
    return NextResponse.json({ error: 'text is required' }, { status: 400 })
  }

  const truncated = text.slice(0, 500) // safety limit

  // ── Provider 1: StreamElements ─────────────────────────────────────────────
  try {
    const url1 = `https://api.streamelements.com/kappa/v2/speech?voice=Joanna&text=${encodeURIComponent(truncated)}`
    const r1 = await fetch(url1, { headers: { Accept: 'audio/mpeg' }, signal: AbortSignal.timeout(4000) })
    if (r1.ok) {
      const buf = await r1.arrayBuffer()
      if (buf.byteLength > 500) {
        return new NextResponse(buf, {
          status: 200,
          headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'no-store' },
        })
      }
    }
  } catch (_) { /* fall through */ }

  // ── Provider 2: TTS.monster (free, no key) ────────────────────────────────
  try {
    const url2 = `https://tts.mp3.monster/v1?voice=en-US-EmmaMultilingualNeural&text=${encodeURIComponent(truncated)}`
    const r2 = await fetch(url2, { signal: AbortSignal.timeout(5000) })
    if (r2.ok) {
      const buf = await r2.arrayBuffer()
      if (buf.byteLength > 500) {
        const ct = r2.headers.get('content-type') || 'audio/mpeg'
        return new NextResponse(buf, {
          status: 200,
          headers: { 'Content-Type': ct, 'Cache-Control': 'no-store' },
        })
      }
    }
  } catch (_) { /* fall through */ }

  // ── Provider 3: VoiceRSS free tier ───────────────────────────────────────
  try {
    const url3 = `https://api.voicerss.org/?key=9c36cffdb04a4d21a2a06d95e1e8ea79&hl=en-us&src=${encodeURIComponent(truncated)}&c=MP3&f=16khz_16bit_mono`
    const r3 = await fetch(url3, { signal: AbortSignal.timeout(5000) })
    if (r3.ok) {
      const buf = await r3.arrayBuffer()
      if (buf.byteLength > 500) {
        return new NextResponse(buf, {
          status: 200,
          headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'no-store' },
        })
      }
    }
  } catch (_) { /* fall through */ }

  // ── All providers failed ──────────────────────────────────────────────────
  return NextResponse.json({ error: 'All TTS providers unavailable' }, { status: 503 })
}
