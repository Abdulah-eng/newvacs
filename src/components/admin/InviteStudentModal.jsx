'use client'
import React, { useState } from 'react'
import { Modal } from './Modal'
import { Mail, User, AlertCircle, CheckCircle2 } from 'lucide-react'

export function InviteStudentModal({ isOpen, onClose, onSuccess, cohorts = [] }) {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [selectedCohort, setSelectedCohort] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          full_name: fullName,
          role: 'student'
        })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send invite')
      }

      // Assign to cohort if selected
      if (selectedCohort && data.user_id) {
        const { createClient } = await import('../../lib/supabase/client')
        const supabase = createClient()
        await supabase.from('cohort_members').insert({
          user_id: data.user_id,
          cohort_id: selectedCohort
        })
      }

      setSuccess(true)
      setTimeout(() => {
        handleClose()
        if (onSuccess) onSuccess()
      }, 1500)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function handleClose() {
    setEmail('')
    setFullName('')
    setSelectedCohort('')
    setError('')
    setSuccess(false)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Invite Student"
      description="Send an email invitation to a new student to join the platform."
    >
      {success ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 size={32} className="text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-2">Invite Sent!</h3>
          <p className="text-slate-500 text-center">An invitation has been sent to {email}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3">
              <AlertCircle size={16} className="text-red-500 shrink-0" />
              <p className="text-[13px] text-red-700">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Full Name</label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Student Name"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-[14px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="student@institution.edu"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-[14px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
              />
            </div>
          </div>

          {cohorts.length > 0 && (
            <div>
              <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Assign to Cohort (Optional)</label>
              <select
                value={selectedCohort}
                onChange={e => setSelectedCohort(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-[14px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition appearance-none"
              >
                <option value="">Select a cohort...</option>
                {cohorts.map(c => (
                  <option key={c.id} value={c.id}>{c.cohort_name}</option>
                ))}
              </select>
            </div>
          )}

          <div className="flex gap-3 mt-8">
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-600 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 rounded-xl bg-teal font-semibold text-white shadow-lg shadow-teal/30 hover:bg-teal/90 transition disabled:opacity-60 flex items-center justify-center"
            >
              {loading ? (
                <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : (
                'Send Invite'
              )}
            </button>
          </div>
        </form>
      )}
    </Modal>
  )
}
