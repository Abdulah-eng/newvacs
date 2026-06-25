import { createClient } from '../../lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function AppLayout({ children }) {
  const supabase = await createClient()

  // Middleware already checks this, but we also double check and fetch profile
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // We might want to pass user info via React Context later if needed
  return (
    <div className="min-h-screen bg-slate-100">
      {children}
    </div>
  )
}
