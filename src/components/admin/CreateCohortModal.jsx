'use client'
import React, { useState } from 'react'
import { Modal } from './Modal'
import { createClient } from '../../lib/supabase/client'
import { Users, Calendar, AlertCircle, CheckCircle2 } from 'lucide-react'

export function CreateCohortModal({ isOpen, onClose, onSuccess }) {
  const [cohortName, setCohortName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createClient()
      
      const { error: insertError } = await supabase
        .from('cohorts')
        .insert({
          cohort_name: cohortName,
          start_date: startDate || null
        })

      if (insertError) throw insertError

      setSuccess(true)
      setTimeout(() => {
        handleClose()
        if (onSuccess) onSuccess()
      }, 1500)

    } catch (err) {
      setError(err.message || 'Failed to create cohort')
    } finally {
      setLoading(false)
    }
  }

  function handleClose() {
    setCohortName('')
    setStartDate('')
    setError('')
    setSuccess(false)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Create New Cohort"
      description="Create a new cohort to group students together for reporting and access."
    >
      {success ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 size={32} className="text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-2">Cohort Created!</h3>
          <p className="text-slate-500 text-center">{cohortName} has been added successfully.</p>
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
            <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Cohort Name</label>
            <div className="relative">
              <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                value={cohortName}
                onChange={e => setCohortName(e.target.value)}
                placeholder="e.g. Fall 2026 P3 Class"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-[14px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Start Date</label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="date"
                required
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-[14px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
              />
            </div>
          </div>

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
                'Create Cohort'
              )}
            </button>
          </div>
        </form>
      )}
    </Modal>
  )
}
