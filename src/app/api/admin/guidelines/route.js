import { NextResponse } from 'next/server'
import { createClient } from '../../../../lib/supabase/server'

export async function POST(req) {
  try {
    const supabase = await createClient()

    // 1. Verify admin role
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
    if (!profile || !['internal_admin', 'developer', 'school_admin'].includes(profile.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // 2. Parse form data
    const formData = await req.formData()
    const file = formData.get('file')
    const weekId = formData.get('weekId')
    const title = formData.get('title') || file.name

    if (!file || !weekId) {
      return NextResponse.json({ error: 'Missing file or weekId' }, { status: 400 })
    }

    // 3. Upload to Supabase Storage
    const cleanFilename = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')
    const path = `week_${weekId}/${Date.now()}_${cleanFilename}`
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('guidelines')
      .upload(path, file, { contentType: file.type || 'application/pdf' })

    if (uploadError) {
      console.error('Storage error:', uploadError)
      return NextResponse.json({ error: 'Failed to upload file to storage.' }, { status: 500 })
    }

    // 4. Get public URL
    const { data: urlData } = supabase.storage
      .from('guidelines')
      .getPublicUrl(path)

    const newGuideline = {
      id: crypto.randomUUID(),
      title,
      path,
      url: urlData.publicUrl,
      created_at: new Date().toISOString()
    }

    // 5. Append to weeks table
    // First, fetch existing guidelines
    const { data: weekData, error: fetchError } = await supabase
      .from('weeks')
      .select('guideline_links')
      .eq('id', weekId)
      .single()

    if (fetchError) {
      // Rollback upload
      await supabase.storage.from('guidelines').remove([path])
      return NextResponse.json({ error: 'Week not found' }, { status: 404 })
    }

    const currentLinks = weekData.guideline_links || []
    const updatedLinks = [...currentLinks, newGuideline]

    const { error: updateError } = await supabase
      .from('weeks')
      .update({ guideline_links: updatedLinks })
      .eq('id', weekId)

    if (updateError) {
       // Rollback upload
       await supabase.storage.from('guidelines').remove([path])
       return NextResponse.json({ error: 'Failed to update database' }, { status: 500 })
    }

    return NextResponse.json({ success: true, guideline: newGuideline })

  } catch (err) {
    console.error('Guideline upload error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(req) {
  try {
    const supabase = await createClient()

    // 1. Verify admin role
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
    if (!profile || !['internal_admin', 'developer', 'school_admin'].includes(profile.role)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await req.json()
    const { weekId, guidelineId, path } = body

    if (!weekId || !guidelineId || !path) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // 2. Remove from storage
    const { error: storageError } = await supabase.storage.from('guidelines').remove([path])
    if (storageError) {
      console.error('Failed to delete from storage:', storageError)
      // Continue anyway to clean up DB if it's orphaned
    }

    // 3. Remove from database
    const { data: weekData } = await supabase.from('weeks').select('guideline_links').eq('id', weekId).single()
    if (weekData) {
      const updatedLinks = (weekData.guideline_links || []).filter(g => g.id !== guidelineId)
      await supabase.from('weeks').update({ guideline_links: updatedLinks }).eq('id', weekId)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Guideline delete error:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
