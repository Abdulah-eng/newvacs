import { createAdminClient } from '../../../../lib/supabase/server'
import { NextResponse } from 'next/server'

/**
 * POST /api/auth/invite
 * Body: { email, full_name, role }
 * Creates a Supabase Auth user via invite email and inserts profile metadata.
 * Requires internal_admin session (enforced by middleware for /admin routes;
 * called from the admin portal).
 */
export async function POST(request) {
  const supabase = await createAdminClient()

  const { email, full_name = '', role = 'student', school_id = null } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  // Invite the user — Supabase sends a magic link / invite email
  const { data, error } = await supabase.auth.admin.inviteUserByEmail(email, {
    data: { full_name, role },
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  // Update profile with extra fields if needed (profile row is auto-created by trigger)
  if (data?.user?.id && school_id) {
    await supabase
      .from('profiles')
      .update({ school_id, full_name })
      .eq('id', data.user.id)
  }

  return NextResponse.json({ success: true, user_id: data?.user?.id })
}
