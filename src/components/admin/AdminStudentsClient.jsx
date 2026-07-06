'use client'
import React, { useState, useRef, useEffect } from 'react'
import { UserPlus, MoreVertical, UserCheck, Trash2, Users } from 'lucide-react'
import { InviteStudentModal } from './InviteStudentModal'
import { useRouter } from 'next/navigation'
import { createClient } from '../../lib/supabase/client'

// ── Dropdown for each student row ──────────────────────────────────────────
function StudentMenu({ student, cohorts, onRefresh }) {
  const [open, setOpen] = useState(false)
  const [assigning, setAssigning] = useState(false)
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  async function assignCohort(cohortId) {
    setAssigning(true)
    setOpen(false)
    const supabase = createClient()
    // Remove existing memberships first, then insert new
    await supabase.from('cohort_members').delete().eq('user_id', student.id)
    if (cohortId) {
      await supabase.from('cohort_members').insert({ user_id: student.id, cohort_id: cohortId })
    }
    setAssigning(false)
    onRefresh()
  }

  async function removeStudent() {
    if (!window.confirm(`Remove ${student.full_name || student.email} from the platform?`)) return
    setOpen(false)
    const supabase = createClient()
    await supabase.from('profiles').delete().eq('id', student.id)
    onRefresh()
  }

  const currentCohortIds = student.cohort_members?.map(m => m.cohort_id) ?? []

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(p => !p)}
        disabled={assigning}
        className="p-2 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition disabled:opacity-50"
        title="Actions"
      >
        {assigning
          ? <span className="w-4 h-4 rounded-full border-2 border-slate-300 border-t-navy animate-spin inline-block" />
          : <MoreVertical size={18} />
        }
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-1 w-56 rounded-xl bg-white border border-slate-200 shadow-lg shadow-slate-200/60 overflow-hidden">
          {/* Assign to Cohort */}
          <div className="px-3 py-2 border-b border-slate-100">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Users size={12} /> Assign to Cohort
            </p>
            <div className="space-y-0.5">
              <button
                onClick={() => assignCohort(null)}
                className="w-full text-left px-2 py-1.5 rounded-lg text-[13px] text-slate-600 hover:bg-slate-50 transition flex items-center gap-2"
              >
                <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center shrink-0">
                  {currentCohortIds.length === 0 && <span className="w-2 h-2 rounded-full bg-teal" />}
                </span>
                Unassigned
              </button>
              {cohorts.map(c => (
                <button
                  key={c.id}
                  onClick={() => assignCohort(c.id)}
                  className="w-full text-left px-2 py-1.5 rounded-lg text-[13px] text-slate-600 hover:bg-slate-50 transition flex items-center gap-2"
                >
                  <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center shrink-0">
                    {currentCohortIds.includes(c.id) && <span className="w-2 h-2 rounded-full bg-teal" />}
                  </span>
                  {c.cohort_name}
                </button>
              ))}
            </div>
          </div>

          {/* Remove */}
          <button
            onClick={removeStudent}
            className="w-full text-left px-4 py-2.5 text-[13px] text-red-600 hover:bg-red-50 transition flex items-center gap-2"
          >
            <Trash2 size={14} /> Remove Student
          </button>
        </div>
      )}
    </div>
  )
}

// ── Main client component ──────────────────────────────────────────────────
export function AdminStudentsClient({ cohorts, students: initialStudents }) {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
  const [students, setStudents] = useState(initialStudents ?? [])
  const router = useRouter()

  function handleRefresh() {
    router.refresh()
  }

  // Keep local state in sync when server re-renders pass new props
  useEffect(() => {
    if (initialStudents) setStudents(initialStudents)
  }, [initialStudents])

  return (
    <>
      <button
        onClick={() => setIsInviteModalOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 font-semibold text-white shadow-lg shadow-teal/30 hover:bg-teal/90 transition"
      >
        <UserPlus size={18} /> Invite Students
      </button>

      <InviteStudentModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        onSuccess={handleRefresh}
        cohorts={cohorts}
      />
    </>
  )
}

// ── Exported row action button (used from server page) ────────────────────
export function StudentRowActions({ student, cohorts, onRefresh }) {
  const router = useRouter()
  return (
    <StudentMenu
      student={student}
      cohorts={cohorts}
      onRefresh={() => router.refresh()}
    />
  )
}
