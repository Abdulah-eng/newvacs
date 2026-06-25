'use client'
import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { CreateCohortModal } from './CreateCohortModal'
import { useRouter } from 'next/navigation'

export function AdminCohortsClient() {
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
