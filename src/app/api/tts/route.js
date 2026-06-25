import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  // Google Translate TTS strictly limits to ~200 characters.
  // We only use this audio for lip-sync animation (the browser uses Web Speech API for the actual voice).
  // So we just truncate safely to ensure we get an audio waveform for the lips.
  const rawText = searchParams.get('text') || ''
  const text = rawText.slice(0, 190).trim()

  if (!text) {
    return NextResponse.json({ error: 'text is required' }, { status: 400 })
  }

  const errors = []

  // ── Provider: Google Translate (Free, Reliable) ───────────────────────────
  try {
    const encoded = encodeURIComponent(text)
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=en-US&client=tw-ob&ttsspeed=0.9`
    console.log('[TTS] Fetching Google Translate TTS:', text.slice(0, 50) + '...')
    
    // No AbortSignal timeout here to avoid Node.js/Next.js fetch polyfill bugs on Windows
    const r = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      }
    })

    if (r.ok) {
      const buf = await r.arrayBuffer()
      if (buf.byteLength > 1000) {
        console.log('[TTS] Google success, byteLength:', buf.byteLength)
        return new NextResponse(buf, {
          status: 200,
          headers: {
            'Content-Type': 'audio/mpeg',
            'Cache-Control': 'no-store'
          }
        })
      } else {
        errors.push(`Google response too small: ${buf.byteLength} bytes`)
      }
    } else {
      errors.push(`Google returned ${r.status}: ${r.statusText}`)
    }
  } catch (err) {
    errors.push(`Google error: ${err.message}`)
  }

  console.error('[TTS] Provider failed:', errors)
  return NextResponse.json({ error: 'TTS provider failed', details: errors }, { status: 503 })
}
