import { createClient } from '../../../lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const type = searchParams.get('type') // 'invite' | 'recovery' | null
  const next = searchParams.get('next') ?? null

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Invite links and password-reset links → go to set-password page
      if (type === 'invite' || type === 'recovery' || next === '/auth/set-password') {
        return NextResponse.redirect(`${origin}/auth/set-password`)
      }
      // Respect explicit next param, otherwise role-based routing handled by middleware
      return NextResponse.redirect(`${origin}${next ?? '/app'}`)
    }
  }

  // Return to login with error
  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`)
}
