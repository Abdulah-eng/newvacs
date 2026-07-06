import { createClient } from '../../../lib/supabase/server'
import { NextResponse } from 'next/server'

/**
 * GET /auth/callback
 *
 * Handles two Supabase auth flows:
 *
 * 1. PKCE flow (modern, recommended):
 *    URL has ?code=xxx  — exchanged server-side for a session.
 *
 * 2. Implicit flow (older Resend SMTP emails / magic-links):
 *    URL has #access_token=xxx&type=invite|recovery in the HASH.
 *    The browser never sends the hash to the server, so we redirect
 *    to a client-side page (/auth/set-password) that reads window.location.hash
 *    and calls supabase.auth.setSession() there.
 *
 * The ?type= query param is set by our redirectTo URL and tells us
 * where to send the user after a successful exchange.
 */
export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const type = searchParams.get('type') // 'invite' | 'recovery' | null
  const next = searchParams.get('next') ?? null
  const errorParam = searchParams.get('error')
  const errorDesc = searchParams.get('error_description')

  // Supabase sometimes returns an error in the query string (e.g. expired link)
  if (errorParam) {
    const msg = errorDesc ? encodeURIComponent(errorDesc) : 'link_expired'
    return NextResponse.redirect(`${origin}/login?error=${msg}`)
  }

  if (code) {
    // ── PKCE flow ─────────────────────────────────────────────────────────
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // Invite & password-reset → set-password page
      if (type === 'invite' || type === 'recovery' || next === '/auth/set-password') {
        return NextResponse.redirect(`${origin}/auth/set-password`)
      }
      return NextResponse.redirect(`${origin}${next ?? '/app'}`)
    }

    console.error('[auth/callback] exchangeCodeForSession error:', error.message)
    return NextResponse.redirect(`${origin}/login?error=${encodeURIComponent(error.message)}`)
  }

  // ── No code in URL ────────────────────────────────────────────────────────
  // Could be implicit flow (token is in the hash, invisible to server).
  // Redirect to set-password page for invite/recovery; the client-side
  // onAuthStateChange listener there will pick up the hash token automatically.
  if (type === 'invite' || type === 'recovery') {
    return NextResponse.redirect(`${origin}/auth/set-password`)
  }

  // Unknown state — send to login with a descriptive error
  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`)
}
