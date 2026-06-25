import { NextResponse } from 'next/server'

/**
 * GET /api/tts?text=Hello+world
 * TTS proxy — tries multiple providers in order until one succeeds.
 * All requests are made server-side so CORS is not an issue.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const text = (searchParams.get('text') || '').slice(0, 500).trim()

  if (!text) {
    return NextResponse.json({ error: 'text is required' }, { status: 400 })
  }

  // ── Provider 1: Google Translate TTS (free, no key, very reliable) ──────────
  try {
    const encoded = encodeURIComponent(text)
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=en-US&client=tw-ob&ttsspeed=0.9`
    const r = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; VoiceBot/1.0)',
        'Referer': 'https://translate.google.com/',
        'Accept': 'audio/mpeg,audio/*;q=0.9,*/*;q=0.8',
      },
      signal: AbortSignal.timeout(5000),
    })
    if (r.ok) {
      const buf = await r.arrayBuffer()
      if (buf.byteLength > 500) {
        return new NextResponse(buf, {
          status: 200,
          headers: {
            'Content-Type': 'audio/mpeg',
            'Cache-Control': 'no-store',
          },
        })
      }
    }
  } catch (_) { /* fall through */ }

  // ── Provider 2: StreamElements ─────────────────────────────────────────────
  try {
    const url = `https://api.streamelements.com/kappa/v2/speech?voice=Joanna&text=${encodeURIComponent(text)}`
    const r = await fetch(url, {
      headers: { Accept: 'audio/mpeg' },
      signal: AbortSignal.timeout(4000),
    })
    if (r.ok) {
      const buf = await r.arrayBuffer()
      if (buf.byteLength > 500) {
        return new NextResponse(buf, {
          status: 200,
          headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'no-store' },
        })
      }
    }
  } catch (_) { /* fall through */ }

  // ── Provider 3: VoiceRSS free tier ────────────────────────────────────────
  try {
    const url = `https://api.voicerss.org/?key=9c36cffdb04a4d21a2a06d95e1e8ea79&hl=en-us&src=${encodeURIComponent(text)}&c=MP3&f=16khz_16bit_mono`
    const r = await fetch(url, { signal: AbortSignal.timeout(5000) })
    if (r.ok) {
      const buf = await r.arrayBuffer()
      if (buf.byteLength > 500) {
        return new NextResponse(buf, {
          status: 200,
          headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'no-store' },
        })
      }
    }
  } catch (_) { /* fall through */ }

  // ── All providers failed: return 503 so client falls back to Web Speech ─────
  return NextResponse.json({ error: 'All TTS providers unavailable' }, { status: 503 })
}
