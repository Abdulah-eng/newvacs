'use client'
import React, { useState } from 'react'
import { UserPlus } from 'lucide-react'
import { InviteStudentModal } from './InviteStudentModal'
import { useRouter } from 'next/navigation'

export function AdminStudentsClient({ cohorts }) {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
  const router = useRouter()

  function handleInviteSuccess() {
    // Refresh the server component to get the new student in the list
    router.refresh()
  }

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
        onSuccess={handleInviteSuccess}
        cohorts={cohorts}
      />
    </>
  )
}
