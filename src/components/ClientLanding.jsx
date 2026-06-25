'use client'
import { useRouter } from 'next/navigation'
import LandingPage from './LandingPage'
import SimulationShell from './SimulationShell'
import { CASE_BY_ID } from '../data/cases'

export function ClientLandingWrapper() {
  const router = useRouter()

  return (
    <LandingPage 
      onLaunch={() => router.push('/login')} 
      onPreceptor={() => router.push('/?demo=preceptor')} 
    />
  )
}

export function ClientPreceptorWrapper() {
  const router = useRouter()
  return (
    <SimulationShell 
      caseData={CASE_BY_ID['maria-tue']} 
      onExit={() => router.push('/')} 
    />
  )
}
