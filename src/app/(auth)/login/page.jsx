'use client'
import React, { useState, Suspense } from 'react'
import { createClient } from '../../../lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import { Activity, Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  // Only use the redirect param if it's a safe internal path (not /login itself)
  const redirectParam = searchParams.get('redirect')
  const safeRedirect = redirectParam && !redirectParam.startsWith('/login') ? redirectParam : null

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    // If a specific redirect was requested (e.g. deep-link), honour it
    if (safeRedirect) {
      router.push(safeRedirect)
      router.refresh()
      return
    }

    // Otherwise route by role
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', authData.user.id)
      .single()

    const adminRoles = ['internal_admin', 'developer', 'school_admin', 'content_reviewer']
    const destination = profile && adminRoles.includes(profile.role) ? '/admin' : '/app'

    router.push(destination)
    router.refresh()
  }

  return (
    <>
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl">
        <h1 className="font-head text-2xl text-white text-center mb-1">Welcome back</h1>
        <p className="text-center text-[13px] text-slate-300 mb-6">Sign in to your VACS account</p>

        {error && (
          <div className="flex items-center gap-2 rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2.5 mb-4">
            <AlertCircle size={15} className="text-red-400 shrink-0" />
            <p className="text-[13px] text-red-300">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[12px] font-semibold text-slate-300 mb-1.5">Email address</label>
            <div className="relative">
              <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="login-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@institution.edu"
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-400 text-[13px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/30 transition"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[12px] font-semibold text-slate-300">Password</label>
              <a href="/forgot-password" className="text-[11px] text-teal hover:text-teal/80 transition font-medium">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="login-password"
                type={showPw ? 'text' : 'password'}
                required
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-10 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-400 text-[13px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/30 transition"
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
              >
                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <button
            id="login-submit"
            type="submit"
            disabled={loading}
            className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3 font-semibold text-white shadow-lg shadow-teal/30 hover:bg-teal/90 disabled:opacity-60 disabled:cursor-not-allowed transition mt-2"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Signing in…
              </span>
            ) : (
              <>Sign in <ArrowRight size={16} className="group-hover:translate-x-0.5 transition" /></>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-[12px] text-slate-400">
          Don't have an account? Contact your program administrator to receive an invite.
        </p>
      </div>

      <p className="mt-6 text-center text-[11px] text-slate-500">
        Educational simulation for pharmacy training. Not for clinical use.
      </p>
    </>
  )
}

export default function LoginPage() {
  return (
    <div className="w-full max-w-md fade-up">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2.5 mb-8">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-teal shadow-lg shadow-teal/30">
          <Activity size={22} className="text-white" />
        </span>
        <span className="font-head text-2xl text-white tracking-tight">VACS</span>
      </div>

      <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  )
}
