import React from 'react'
import { BrainCircuit } from 'lucide-react'

export default function EvaluationLoading() {
  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center p-6 text-center">
      <div className="relative">
        <div className="absolute inset-0 bg-teal-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 relative z-10 mx-auto mb-6">
          <BrainCircuit size={40} className="text-teal-500 animate-bounce" />
        </div>
      </div>
      
      <h2 className="text-2xl font-head font-bold text-navy mb-2">AI Preceptor is reviewing...</h2>
      <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
        Reading manuscript, evaluating clinical reasoning, checking guidelines, and preparing feedback. This may take 30-60 seconds.
      </p>

      <div className="mt-8 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" style={{ animationDelay: '0ms' }}></span>
        <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" style={{ animationDelay: '150ms' }}></span>
        <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" style={{ animationDelay: '300ms' }}></span>
      </div>
    </div>
  )
}
