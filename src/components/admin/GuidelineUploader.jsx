'use client'

import React, { useState } from 'react'
import { UploadCloud, FileText, Trash2, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function GuidelineUploader({ weekId, existingGuidelines = [] }) {
  const router = useRouter()
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError(null)

    const formData = new FormData()
    formData.append('file', file)
    formData.append('weekId', weekId)
    // Optional: could prompt for title, but using filename as default for simplicity
    formData.append('title', file.name.replace(/\.[^/.]+$/, "")) 

    try {
      const res = await fetch('/api/admin/guidelines', {
        method: 'POST',
        body: formData
      })

      const data = await res.json()
      if (data.error) throw new Error(data.error)
      
      router.refresh()
    } catch (err) {
      console.error(err)
      setError(err.message || 'Failed to upload guideline.')
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  const handleDelete = async (guideline) => {
    if (!confirm(`Are you sure you want to delete ${guideline.title}?`)) return
    
    try {
      const res = await fetch('/api/admin/guidelines', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weekId, guidelineId: guideline.id, path: guideline.path })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      
      router.refresh()
    } catch (err) {
      console.error(err)
      alert(err.message || 'Failed to delete guideline')
    }
  }

  return (
    <div className="p-6 md:w-1/3 flex flex-col border-l border-slate-100 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-800">Guidelines</h3>
        <span className="text-[12px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
          {existingGuidelines.length} PDFs
        </span>
      </div>

      <div className="flex-1 space-y-3 mb-4 max-h-[160px] overflow-y-auto pr-2">
        {existingGuidelines.length === 0 ? (
          <p className="text-[12px] text-slate-400 italic">No guidelines uploaded.</p>
        ) : (
          existingGuidelines.map(g => (
            <div key={g.id} className="group flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50 hover:border-slate-200 transition">
              <div className="flex items-center gap-2 overflow-hidden">
                <FileText size={16} className="text-red-400 shrink-0" />
                <a href={g.url} target="_blank" rel="noreferrer" className="text-[13px] font-medium text-slate-700 truncate hover:text-teal-600 transition">
                  {g.title}
                </a>
              </div>
              <button 
                onClick={() => handleDelete(g)}
                className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-red-500 hover:bg-white rounded transition"
                title="Delete guideline"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-auto pt-4 border-t border-slate-100">
        <label className="flex items-center justify-center gap-2 w-full rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-2.5 text-[13px] font-medium text-slate-600 hover:bg-slate-100 hover:border-slate-400 transition cursor-pointer disabled:opacity-50">
          {uploading ? <Loader2 size={16} className="animate-spin text-teal-600" /> : <UploadCloud size={16} className="text-slate-400" />}
          {uploading ? 'Uploading...' : 'Upload PDF'}
          <input type="file" accept=".pdf" className="hidden" onChange={handleFileUpload} disabled={uploading} />
        </label>
        {error && <p className="text-red-500 text-xs mt-2 text-center">{error}</p>}
      </div>
    </div>
  )
}
