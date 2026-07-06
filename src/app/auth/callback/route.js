import { createClient } from '../../../lib/supabase/server'
import { NextResponse } from 'next/server'

/**
 * GET /auth/callback
 *
 * Handles Supabase auth flows:
 *
 * 1. PKCE token_hash (Cross-device safe):
 *    URL has ?token_hash=xxx&type=invite|recovery
 *    Used for Invites and Password Resets where the user clicks the link
 *    on a completely different device or browser.
 *
 * 2. PKCE code:
 *    URL has ?code=xxx
 *    Used for OAuth or standard login flows happening in the same browser.
 *
 * 3. Implicit flow (older):
 *    URL has #access_token=xxx
 *    Redirects to client to parse hash.
 */
export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') // 'invite' | 'recovery' | 'magiclink'
  const next = searchParams.get('next') ?? null
  const errorParam = searchParams.get('error')
  const errorDesc = searchParams.get('error_description')

  // Supabase error in query string
  if (errorParam) {
    const msg = errorDesc ? encodeURIComponent(errorDesc) : 'link_expired'
    return NextResponse.redirect(`${origin}/login?error=${msg}`)
  }

  const supabase = await createClient()

  // ── 1. CROSS-DEVICE SAFE FLOW (verifyOtp) ──────────────────────────────
  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({ token_hash, type })

    if (!error) {
      if (type === 'invite' || type === 'recovery' || next === '/auth/set-password') {
        return NextResponse.redirect(`${origin}/auth/set-password`)
      }
      return NextResponse.redirect(`${origin}${next ?? '/app'}`)
    }
    
    console.error('[auth/callback] verifyOtp error:', error.message)
    return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(error.message)}`)
  }

  // ── 2. STANDARD PKCE FLOW (same-browser only) ──────────────────────────
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      if (type === 'invite' || type === 'recovery' || next === '/auth/set-password') {
        return NextResponse.redirect(`${origin}/auth/set-password`)
      }
      return NextResponse.redirect(`${origin}${next ?? '/app'}`)
    }

    console.error('[auth/callback] exchangeCodeForSession error:', error.message)
    return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(error.message)}`)
  }

  // ── 3. IMPLICIT FLOW (hash routing) ────────────────────────────────────
  if (type === 'invite' || type === 'recovery') {
    return NextResponse.redirect(`${origin}/auth/set-password`)
  }

  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`)
}
