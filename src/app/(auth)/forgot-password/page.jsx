'use client'
import React, { useState, Suspense } from 'react'
import { createClient } from '../../../lib/supabase/client'
import { useSearchParams } from 'next/navigation'
import { Activity, Mail, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

function ForgotPasswordForm() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState(searchParams.get('email') || '')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/auth/set-password`,
    })

    if (resetError) {
      setError(resetError.message)
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl">
      <h1 className="font-head text-2xl text-white text-center mb-1">Reset your password</h1>
      <p className="text-center text-[13px] text-slate-300 mb-6">
        Enter your email address and we'll send you a reset link.
      </p>

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2.5 mb-4">
          <AlertCircle size={15} className="text-red-400 shrink-0" />
          <p className="text-[13px] text-red-300">{error}</p>
        </div>
      )}

      {sent ? (
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <CheckCircle2 size={48} className="text-teal" />
          <p className="text-white font-semibold">Check your email!</p>
          <p className="text-[13px] text-slate-400">
            We sent a password reset link to <span className="text-white font-medium">{email}</span>.
            Click the link in that email to set a new password.
          </p>
          <Link href="/login"
            className="mt-4 inline-flex items-center gap-2 text-[13px] text-teal hover:text-teal/80 transition font-semibold">
            <ArrowLeft size={14} /> Back to sign in
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[12px] font-semibold text-slate-300 mb-1.5">Email address</label>
            <div className="relative">
              <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="reset-email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@institution.edu"
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-slate-400 text-[13px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/30 transition"
              />
            </div>
          </div>

          <button
            id="reset-submit"
            type="submit"
            disabled={loading}
            className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3 font-semibold text-white shadow-lg shadow-teal/30 hover:bg-teal/90 disabled:opacity-60 disabled:cursor-not-allowed transition mt-2"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Sending…
              </span>
            ) : 'Send reset link'}
          </button>

          <div className="text-center">
            <Link href="/login"
              className="inline-flex items-center gap-1.5 text-[12px] text-slate-400 hover:text-white transition">
              <ArrowLeft size={13} /> Back to sign in
            </Link>
          </div>
        </form>
      )}
    </div>
  )
}

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md fade-up">
      <div className="flex items-center justify-center gap-2.5 mb-8">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-teal shadow-lg shadow-teal/30">
          <Activity size={22} className="text-white" />
        </span>
        <span className="font-head text-2xl text-white tracking-tight">VACS</span>
      </div>
      <Suspense fallback={<div className="text-white text-center">Loading…</div>}>
        <ForgotPasswordForm />
      </Suspense>
    </div>
  )
}
