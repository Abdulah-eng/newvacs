'use client'
import React from 'react'
import { RefreshCw } from 'lucide-react'

export function AdminRefreshButton() {
  return (
    <button 
      onClick={() => window.location.reload(true)} 
      title="Force the app to pull the latest updates from the server"
      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition"
    >
      <RefreshCw size={16} /> Hard Refresh
    </button>
  )
}
