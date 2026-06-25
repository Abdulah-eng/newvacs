import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'

// POST /api/stt
// Body: FormData with field "audio" (audio file blob, e.g. webm/mp4/wav)
// Returns: { text: string }
export async function POST(request) {
  try {
    const formData = await request.formData()
    const audioFile = formData.get('audio')

    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 })
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

    // Groq Whisper expects a File-like object
    const transcription = await groq.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-large-v3-turbo', // fast & accurate
      language: 'en',
      response_format: 'json',
    })

    return NextResponse.json({ text: transcription.text?.trim() || '' })
  } catch (err) {
    console.error('STT error:', err)
    return NextResponse.json({ error: err.message || 'Transcription failed' }, { status: 500 })
  }
}
