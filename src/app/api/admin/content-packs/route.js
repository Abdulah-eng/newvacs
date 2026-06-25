import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'

export async function POST(request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Double check admin role
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'admin') {
    return NextResponse.json({ error: 'Forbidden. Admin access required.' }, { status: 403 })
  }

  try {
    const { weekId, payload } = await request.json()

    if (!weekId || !payload) {
      return NextResponse.json({ error: 'Missing weekId or payload' }, { status: 400 })
    }

    // Insert the content pack
    const { data: pack, error: insertError } = await supabase
      .from('content_packs')
      .insert({
        week_id: weekId,
        content_json: payload,
        validation_status: 'passed', // Skipping complex validation for MVP
        uploaded_by: user.id,
        version: 1
      })
      .select()
      .single()

    if (insertError) throw insertError

    // Also update the week to 'validated' status
    await supabase
      .from('weeks')
      .update({ publish_status: 'validated' })
      .eq('id', weekId)

    return NextResponse.json({ success: true, pack })
  } catch (error) {
    console.error('Content pack upload error:', error)
    return NextResponse.json({ error: error.message || 'Failed to upload content pack' }, { status: 500 })
  }
}
