'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Plus, MoreVertical, Pencil, Trash2 } from 'lucide-react'
import { CreateCohortModal } from './CreateCohortModal'
import { useRouter } from 'next/navigation'
import { createClient } from '../../lib/supabase/client'

// ── Dropdown for each cohort row ──────────────────────────────────────────
function CohortMenu({ cohort }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)
  const router = useRouter()

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  async function deleteCohort() {
    if (!window.confirm(`Delete cohort "${cohort.cohort_name}"? This will remove all student enrollments.`)) return
    setOpen(false)
    setLoading(true)
    const supabase = createClient()
    // Remove members first (FK constraint), then the cohort
    await supabase.from('cohort_members').delete().eq('cohort_id', cohort.id)
    await supabase.from('cohorts').delete().eq('id', cohort.id)
    setLoading(false)
    router.refresh()
  }

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(p => !p)}
        disabled={loading}
        className="p-2 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition disabled:opacity-50"
        title="Cohort actions"
      >
        {loading
          ? <span className="w-4 h-4 rounded-full border-2 border-slate-300 border-t-navy animate-spin inline-block" />
          : <MoreVertical size={18} />
        }
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-1 w-44 rounded-xl bg-white border border-slate-200 shadow-lg shadow-slate-200/60 overflow-hidden">
          <button
            onClick={deleteCohort}
            className="w-full text-left px-4 py-2.5 text-[13px] text-red-600 hover:bg-red-50 transition flex items-center gap-2"
          >
            <Trash2 size={14} /> Delete Cohort
          </button>
        </div>
      )}
    </div>
  )
}

// ── Main cohorts client (New Cohort button + row menus) ───────────────────
export function AdminCohortsClient({ cohorts = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  function handleSuccess() {
    router.refresh()
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 font-semibold text-white shadow-lg shadow-teal/30 hover:bg-teal/90 transition"
      >
        <Plus size={18} /> New Cohort
      </button>

      <CreateCohortModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccess}
      />
    </>
  )
}

// ── Exported per-row component (used from server page) ────────────────────
export function CohortRowActions({ cohort }) {
  return <CohortMenu cohort={cohort} />
}
