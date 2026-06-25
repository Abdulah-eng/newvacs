'use client'
import React, { useEffect } from 'react'
import { X } from 'lucide-react'

export function Modal({ isOpen, onClose, title, description, children }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal panel */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl fade-up overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-head font-bold text-navy">{title}</h2>
            {description && <p className="text-[13px] text-slate-500 mt-1">{description}</p>}
          </div>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 -mt-2 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-50 transition"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
