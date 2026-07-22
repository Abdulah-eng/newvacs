import { createAdminClient } from '../../../../lib/supabase/server'
import { NextResponse } from 'next/server'

/**
 * POST /api/auth/invite
 * Body: { email, full_name, role, cohort_id?, skip_email? }
 *
 * - Normal flow:  sends a Supabase invite email (magic link).
 * - skip_email=true: creates the auth user with a random password (no email sent).
 *   The student can use "Forgot Password" on the login page to set their own password.
 *
 * Requires service-role key (createAdminClient). Protected by middleware for /admin.
 */
export async function POST(request) {
  const supabase = await createAdminClient()

  const {
    email,
    full_name = '',
    role = 'student',
    school_id = null,
    cohort_id = null,
    skip_email = false,
  } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  let userId = null

  if (skip_email) {
    // ── Create without sending email ──────────────────────────────────────
    // Generate a random strong password; the student resets via "Forgot Password"
    const tempPassword = crypto.randomUUID() + 'Aa1!'

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password: tempPassword,
      email_confirm: true,                   // mark email as confirmed
      user_metadata: { full_name, role },
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    userId = data?.user?.id

  } else {
    // ── Normal invite (sends email) ───────────────────────────────────────
    // Priority: NEXT_PUBLIC_APP_URL → VERCEL_URL (auto-set by Vercel, no protocol)
    // → hardcoded production URL as final fallback.
    // Always ensures the URL starts with https:// so Supabase never treats it
    // as a relative path and appends it to its own domain.
    let appUrl = process.env.NEXT_PUBLIC_APP_URL || ''

    // If NEXT_PUBLIC_APP_URL is not set or still points to localhost, 
    // use Vercel's auto-provided VERCEL_URL (format: "newvacs.vercel.app", no protocol)
    if (!appUrl || appUrl.startsWith('http://localhost')) {
      const vercelUrl = process.env.VERCEL_URL  // e.g. "newvacs.vercel.app"
      if (vercelUrl) {
        appUrl = `https://${vercelUrl}`
      }
    }

    // Final safety: ensure protocol is present
    if (appUrl && !appUrl.startsWith('http://') && !appUrl.startsWith('https://')) {
      appUrl = `https://${appUrl}`
    }

    console.log('[invite] redirectTo:', `${appUrl}/auth/callback`)

    const { data, error } = await supabase.auth.admin.inviteUserByEmail(email, {
      data: { full_name, role },
      redirectTo: `${appUrl}/auth/callback`,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    userId = data?.user?.id
  }

  // ── Update profile metadata ───────────────────────────────────────────
  if (userId) {
    const updates = { full_name }
    if (school_id) updates.school_id = school_id

    await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)

    // ── Assign cohort if provided ─────────────────────────────────────
    if (cohort_id) {
      await supabase
        .from('cohort_members')
        .upsert({ user_id: userId, cohort_id }, { onConflict: 'user_id,cohort_id' })
    }
  }

  return NextResponse.json({ success: true, user_id: userId })
}


export const maxDuration = 60;
