'use client'
import React, { useState, useEffect, Suspense } from 'react'
import { createClient } from '../../../lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Activity, Lock, Eye, EyeOff, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react'

function SetPasswordForm() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [sessionReady, setSessionReady] = useState(false)

  useEffect(() => {
    const supabase = createClient()

    // Supabase puts the token in the URL hash for client-side flows
    // onAuthStateChange fires when the session is detected from the hash
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) setSessionReady(true)
    })

    // Also check existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setSessionReady(true)
    })

    return () => subscription.unsubscribe()
  }, [])

  async function handleSetPassword(e) {
    e.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    const supabase = createClient()
    const { error: updateError } = await supabase.auth.updateUser({ password })

    if (updateError) {
      setError(updateError.message)
      setLoading(false)
      return
    }

    setDone(true)

    // Route by role after password is set
    const { data: { user } } = await supabase.auth.getUser()
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    const adminRoles = ['internal_admin', 'developer', 'school_admin', 'content_reviewer']
    setTimeout(() => {
      router.push(profile && adminRoles.includes(profile.role) ? '/admin' : '/app')
    }, 1500)
  }

  const strength = password.length === 0 ? 0 : password.length < 8 ? 1 : password.length < 12 ? 2 : 3
  const strengthLabel = ['', 'Too short', 'Good', 'Strong']
  const strengthColor = ['', 'bg-red-500', 'bg-amber-400', 'bg-teal']

  return (
    <div className="w-full max-w-md fade-up">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2.5 mb-8">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-teal shadow-lg shadow-teal/30">
          <Activity size={22} className="text-white" />
        </span>
        <span className="font-head text-2xl text-white tracking-tight">VACS</span>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl">
        <h1 className="font-head text-2xl text-white text-center mb-1">Set your password</h1>
        <p className="text-center text-[13px] text-slate-300 mb-6">
          Welcome to VACS! Choose a strong password to secure your account.
        </p>

        {!sessionReady && (
          <div className="flex items-center gap-2 rounded-lg border border-amber-400/40 bg-amber-500/10 px-3 py-2.5 mb-4">
            <AlertCircle size={15} className="text-amber-400 shrink-0" />
            <p className="text-[13px] text-amber-300">Verifying your link… please wait.</p>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2.5 mb-4">
            <AlertCircle size={15} className="text-red-400 shrink-0" />
            <p className="text-[13px] text-red-300">{error}</p>
          </div>
        )}

        {done ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 size={48} className="text-teal" />
            <p className="text-white font-semibold">Password set successfully!</p>
            <p className="text-[13px] text-slate-400">Redirecting you to your dashboard…</p>
          </div>
        ) : (
          <form onSubmit={handleSetPassword} className="space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-slate-300 mb-1.5">New Password</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="set-password"
                  type={showPw ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full pl-9 pr-10 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-400 text-[13px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/30 transition"
                />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition">
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              {password.length > 0 && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${strengthColor[strength]}`}
                      style={{ width: `${(strength / 3) * 100}%` }} />
                  </div>
                  <span className={`text-[11px] font-semibold ${strength === 3 ? 'text-teal' : strength === 2 ? 'text-amber-400' : 'text-red-400'}`}>
                    {strengthLabel[strength]}
                  </span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-slate-300 mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="confirm-password"
                  type={showPw ? 'text' : 'password'}
                  required
                  value={confirm}
                  onChange={e => setConfirm(e.target.value)}
                  placeholder="Re-enter your password"
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-400 text-[13px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/30 transition"
                />
              </div>
              {confirm.length > 0 && password !== confirm && (
                <p className="text-[11px] text-red-400 mt-1">Passwords do not match</p>
              )}
            </div>

            <button
              id="set-password-submit"
              type="submit"
              disabled={loading || !sessionReady}
              className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3 font-semibold text-white shadow-lg shadow-teal/30 hover:bg-teal/90 disabled:opacity-60 disabled:cursor-not-allowed transition mt-2"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Setting password…
                </span>
              ) : (
                <>Set Password & Continue <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" /></>
              )}
            </button>
          </form>
        )}
      </div>

      <p className="mt-6 text-center text-[11px] text-slate-500">
        Educational simulation for pharmacy training. Not for clinical use.
      </p>
    </div>
  )
}

export default function SetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg,#0d2138 0%,#13314f 50%,#0d2138 100%)' }}>
      <Suspense fallback={<div className="text-white text-center">Loading…</div>}>
        <SetPasswordForm />
      </Suspense>
    </div>
  )
}
