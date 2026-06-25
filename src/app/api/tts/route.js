import { NextResponse } from 'next/server'

/**
 * GET /api/tts?text=Hello+world&voice=Joanna
 * Free TTS proxy via StreamElements — no API key required.
 * Returns: audio/mpeg (MP3)
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get('text') || ''
  const voice = searchParams.get('voice') || 'Joanna' // Joanna sounds natural/female

  if (!text.trim()) {
    return NextResponse.json({ error: 'text is required' }, { status: 400 })
  }

  try {
    const ttsUrl = `https://api.streamelements.com/kappa/v2/speech?voice=${encodeURIComponent(voice)}&text=${encodeURIComponent(text)}`
    const response = await fetch(ttsUrl, {
      headers: { 'Accept': 'audio/mpeg' },
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'TTS service error' }, { status: 502 })
    }

    const audioBuffer = await response.arrayBuffer()

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('TTS proxy error:', err)
    return NextResponse.json({ error: 'Failed to fetch TTS audio' }, { status: 500 })
  }
}
