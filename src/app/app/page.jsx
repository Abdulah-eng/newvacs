'use client'
import React, { useState, useEffect } from 'react'
import CourseHome from '../../components/CourseHome'
import ModuleShell from '../../components/week1/ModuleShell'
import CapstoneShell from '../../components/capstone/CapstoneShell'
import { getWeek } from '../../data/weeks'
import { saveCaseState } from '../../lib/storage'
import { hydrateFromSupabase } from '../../lib/storage-sync'
import { useRouter } from 'next/navigation'
import { createClient } from '../../lib/supabase/client'

export default function AppShell() {
  const router = useRouter()
  const [view, setView] = useState('course') // 'course' | 'module'
  const [weekId, setWeekId] = useState('week1')
  const [demo, setDemo] = useState(false)
  const [hydrating, setHydrating] = useState(true)

  useEffect(() => {
    async function init() {
      await hydrateFromSupabase('week1')
      setHydrating(false)
    }
    init()
  }, [])

  const toggleDemo = () => {
    const next = !demo
    setDemo(next)
    // we'll remove localStorage entirely soon, but keeping it for now while porting
    saveCaseState('vacs-demo', { on: next })
  }

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (hydrating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-500 font-semibold">Loading your simulator state...</p>
        </div>
      </div>
    )
  }

  if (view === 'module') {
    const currentWeek = getWeek(weekId)
    if (currentWeek.type === 'capstone') {
      return (
        <CapstoneShell
          week={currentWeek}
          onExit={() => setView('course')}
        />
      )
    }

    return (
      <ModuleShell
        week={currentWeek}
        demo={demo}
        onToggleDemo={toggleDemo}
        onExit={() => setView('course')}
      />
    )
  }

  return (
    <CourseHome
      demo={demo}
      onToggleDemo={toggleDemo}
      onOpenWeek={(id) => { setWeekId(id); setView('module') }}
      onExit={handleSignOut}
    />
  )
}
