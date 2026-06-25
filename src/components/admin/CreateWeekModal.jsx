'use client'
import React, { useState } from 'react'
import { Modal } from './Modal'
import { createClient } from '../../lib/supabase/client'
import { Calendar, Hash, AlertCircle, CheckCircle2, AlignLeft } from 'lucide-react'

export function CreateWeekModal({ isOpen, onClose, onSuccess }) {
  const [title, setTitle] = useState('')
  const [diseaseStates, setDiseaseStates] = useState('')
  const [weekNumber, setWeekNumber] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createClient()
      
      const statesArray = diseaseStates.split(',').map(s => s.trim()).filter(Boolean)

      const { error: insertError } = await supabase
        .from('weeks')
        .insert({
          title,
          disease_states: statesArray,
          week_number: weekNumber,
          publish_status: 'draft'
        })

      if (insertError) throw insertError

      setSuccess(true)
      setTimeout(() => {
        handleClose()
        if (onSuccess) onSuccess()
      }, 1500)

    } catch (err) {
      setError(err.message || 'Failed to create week')
    } finally {
      setLoading(false)
    }
  }

  function handleClose() {
    setTitle('')
    setDiseaseStates('')
    setWeekNumber(1)
    setError('')
    setSuccess(false)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Create Curriculum Week"
      description="Add a new week to the curriculum. You can add content packs to it later."
    >
      {success ? (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 size={32} className="text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-2">Week Created!</h3>
          <p className="text-slate-500 text-center">{title} has been added successfully.</p>
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
            <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Week Title</label>
            <div className="relative">
              <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="e.g. Introduction to T2DM"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-[14px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Week Number</label>
            <div className="relative">
              <Hash size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="number"
                required
                min="1"
                max="5"
                value={weekNumber}
                onChange={e => setWeekNumber(parseInt(e.target.value) || 1)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-[14px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Between 1 and 5.</p>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">Disease States</label>
            <div className="relative">
              <AlignLeft size={16} className="absolute left-3 top-3 text-slate-400" />
              <textarea
                value={diseaseStates}
                onChange={e => setDiseaseStates(e.target.value)}
                placeholder="e.g. Hypertension, Type 2 Diabetes (comma separated)"
                rows={2}
                required
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-[14px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition resize-none"
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
                'Create Week'
              )}
            </button>
          </div>
        </form>
      )}
    </Modal>
  )
}
