'use client'

import React from 'react'
import Image from 'next/image'
import { User } from 'lucide-react'

// Map patient names to their AI-generated avatar files in /public/avatars/
const AVATAR_MAP = {
  'maria gonzalez':  '/avatars/maria-gonzalez.png',
  'james wilson':    '/avatars/james-wilson.png',
  'linda martinez':  '/avatars/linda-martinez.png',
  'michael turner':  '/avatars/michael-turner.png',
  'angela rodriguez':'/avatars/angela-rodriguez.png',
  'david chen':      '/avatars/david-chen.png',
}

function getAvatarSrc(patientName) {
  if (!patientName) return null
  return AVATAR_MAP[patientName.toLowerCase()] ?? null
}

export function PatientAvatar({ isSpeaking, patientName }) {
  const avatarSrc = getAvatarSrc(patientName)

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        {/* Animated aura rings when speaking */}
        {isSpeaking && (
          <>
            <div className="absolute inset-0 rounded-full bg-teal/40 animate-ping" style={{ animationDuration: '1.4s' }} />
            <div className="absolute -inset-3 rounded-full bg-teal/20 animate-pulse" style={{ animationDuration: '2s' }} />
            <div className="absolute -inset-6 rounded-full bg-teal/10 animate-pulse" style={{ animationDuration: '3s' }} />
          </>
        )}

        {/* Avatar photo or fallback icon */}
        <div className={`relative z-10 w-36 h-36 rounded-full overflow-hidden shadow-xl border-4 transition-all duration-500 ${
          isSpeaking
            ? 'border-teal shadow-teal/40 scale-105'
            : 'border-white/80 shadow-slate-300'
        }`}>
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt={patientName}
              fill
              className="object-cover object-top"
              priority
            />
          ) : (
            <div className="w-full h-full grid place-items-center bg-slate-200 text-slate-400">
              <User size={64} />
            </div>
          )}
        </div>

        {/* Speaking indicator dot */}
        {isSpeaking && (
          <span className="absolute bottom-1 right-1 z-20 w-4 h-4 rounded-full bg-teal border-2 border-white animate-pulse" />
        )}
      </div>

      <h3 className="mt-6 font-head text-2xl text-navy">{patientName}</h3>
      <p className={`mt-1.5 text-sm font-medium transition-colors duration-300 ${
        isSpeaking ? 'text-teal animate-pulse' : 'text-slate-400'
      }`}>
        {isSpeaking ? '● Speaking…' : 'Listening…'}
      </p>
    </div>
  )
}

