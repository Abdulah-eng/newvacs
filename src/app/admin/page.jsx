import React from 'react'
import { createClient } from '../../lib/supabase/server'
import { Users, BookOpen, GraduationCap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Fetch basic stats
  const [
    { count: studentsCount },
    { count: cohortsCount },
    { count: weeksCount }
  ] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'student'),
    supabase.from('cohorts').select('*', { count: 'exact', head: true }).eq('status', 'active'),
    supabase.from('weeks').select('*', { count: 'exact', head: true })
  ])

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="font-head text-3xl text-navy">Admin Dashboard</h1>
        <p className="text-slate-500 mt-1">Overview of the VACS platform</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        <StatCard title="Active Students" value={studentsCount || 0} icon={Users} color="bg-teal" href="/admin/students" />
        <StatCard title="Active Cohorts" value={cohortsCount || 0} icon={GraduationCap} color="bg-navy" href="/admin/cohorts" />
        <StatCard title="Total Weeks" value={weeksCount || 0} icon={BookOpen} color="bg-indigo-600" href="/admin/curriculum" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="font-head text-xl text-navy mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <ActionLink href="/admin/cohorts" title="Manage Cohorts" desc="Create and edit student groups" />
            <ActionLink href="/admin/students" title="Invite Students" desc="Send email invitations to new students" />
            <ActionLink href="/admin/curriculum" title="View Curriculum" desc="Manage disease states and weekly content" />
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="font-head text-xl text-navy mb-4">System Status</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-slate-700">Database Connection</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-slate-700">AI Grading Service</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Operational
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-slate-700">Content Validation</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-800">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Ready
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon: Icon, color, href }) {
  return (
    <Link href={href} className="group bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition block relative overflow-hidden">
      <div className={`absolute right-0 top-0 w-24 h-24 ${color} opacity-5 rounded-bl-full group-hover:scale-110 transition duration-500`}></div>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[13px] font-semibold text-slate-500 uppercase tracking-wider mb-2">{title}</p>
          <p className="font-head text-4xl text-navy">{value}</p>
        </div>
        <span className={`grid place-items-center w-12 h-12 rounded-xl text-white shadow-lg ${color}`}>
          <Icon size={24} />
        </span>
      </div>
    </Link>
  )
}

function ActionLink({ href, title, desc }) {
  return (
    <Link href={href} className="group flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-teal/30 hover:bg-teal/5 transition">
      <div>
        <h3 className="font-semibold text-sm text-slate-800 group-hover:text-teal transition">{title}</h3>
        <p className="text-[12px] text-slate-500">{desc}</p>
      </div>
      <ArrowRight size={16} className="text-slate-300 group-hover:text-teal transition group-hover:translate-x-1" />
    </Link>
  )
}
