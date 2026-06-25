import { redirect } from 'next/navigation'
import { createClient } from '../lib/supabase/server'
import { ClientLandingWrapper, ClientPreceptorWrapper } from '../components/ClientLanding'

export default async function RootPage({ searchParams }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (user) {
    redirect('/app')
  }

  // Next 15 searchParams is a promise
  const params = await searchParams
  const isPreceptor = params?.demo === 'preceptor'

  if (isPreceptor) {
    return <ClientPreceptorWrapper />
  }

  return <ClientLandingWrapper />
}
