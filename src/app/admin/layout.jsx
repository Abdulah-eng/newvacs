import React from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '../../lib/supabase/server'
import { Activity, LayoutDashboard, Users, UserPlus, BookOpen, LogOut } from 'lucide-react'

export const metadata = {
  title: 'VACS Admin Portal',
}

export default async function AdminLayout({ children }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (!profile || !['internal_admin', 'developer', 'school_admin'].includes(profile.role)) {
    redirect('/app')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-800">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-navy text-slate-300 flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2 text-white">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-teal shadow-lg shadow-teal/30">
              <Activity size={18} className="text-white" />
            </span>
            <span className="font-head text-lg tracking-tight">VACS Admin</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          <NavLink href="/admin" icon={LayoutDashboard} label="Dashboard" exact />
          <NavLink href="/admin/cohorts" icon={Users} label="Cohorts" />
          <NavLink href="/admin/students" icon={UserPlus} label="Students" />
          <NavLink href="/admin/curriculum" icon={BookOpen} label="Curriculum" />
        </nav>

        <div className="p-4 border-t border-white/10 text-sm">
          <p className="px-2 mb-3 text-slate-400">Logged in as {user.email}</p>
          <form action="/auth/signout" method="post">
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition">
              <LogOut size={16} /> Sign out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden relative">
        {children}
      </main>
    </div>
  )
}

function NavLink({ href, icon: Icon, label, exact = false }) {
  // We can't use usePathname in a server component easily, so we just rely on standard links for now
  // For production, we'd use a client component wrapper for active state.
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/10 hover:text-white transition">
      <Icon size={18} />
      <span className="text-[14px] font-medium">{label}</span>
    </Link>
  )
}
