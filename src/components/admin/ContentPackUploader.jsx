'use client'

import React, { useState } from 'react'
import { UploadCloud, CheckCircle2, AlertCircle, Circle, Eye, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function ContentPackUploader({ weekId, latestPack }) {
  const router = useRouter()
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError(null)

    try {
      const text = await file.text()
      const payload = JSON.parse(text)

      const res = await fetch('/api/admin/content-packs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weekId, payload })
      })

      const data = await res.json()
      if (data.error) throw new Error(data.error)
      
      // Refresh the page to show the newly uploaded pack
      router.refresh()
    } catch (err) {
      console.error(err)
      setError(err.message || 'Failed to parse JSON or upload.')
    } finally {
      setUploading(false)
      // Reset input so it can be selected again if needed
      e.target.value = ''
    }
  }

  return (
    <div className="p-6 md:w-2/3 flex flex-col justify-center">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-800">Content Pack</h3>
        {latestPack && (
          <span className="text-[12px] text-slate-500">v{latestPack.version} · Uploaded {new Date(latestPack.created_at).toLocaleDateString()}</span>
        )}
      </div>

      {latestPack ? (
        <div className="bg-slate-50 rounded-xl border border-slate-100 p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              {latestPack.validation_status === 'passed' ? (
                <CheckCircle2 size={24} className="text-emerald-500" />
              ) : latestPack.validation_status === 'failed' ? (
                <AlertCircle size={24} className="text-red-500" />
              ) : (
                <Circle size={24} className="text-amber-500 animate-pulse" />
              )}
              <div>
                <p className="font-semibold text-sm text-slate-800">
                  {latestPack.validation_status === 'passed' ? 'Validation Passed' : 
                   latestPack.validation_status === 'failed' ? 'Validation Failed' : 'Validation Pending'}
                </p>
                <p className="text-[12px] text-slate-500 mt-0.5">
                  {latestPack.validation_status === 'passed' ? 'Content is ready for students' : 
                   latestPack.validation_status === 'failed' ? 'Errors found in uploaded manifest' : 'System is checking content constraints'}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="p-2 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-200 transition" title="View details">
                <Eye size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-6 px-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
          <p className="text-[13px] text-slate-500 mb-3">No content pack uploaded for this week yet.</p>
          <label className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition shadow-sm cursor-pointer disabled:opacity-50">
            {uploading ? <Loader2 size={16} className="animate-spin" /> : <UploadCloud size={16} />}
            {uploading ? 'Uploading...' : 'Upload Content Manifest'}
            <input type="file" accept=".json" className="hidden" onChange={handleFileUpload} disabled={uploading} />
          </label>
          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        </div>
      )}
    </div>
  )
}
