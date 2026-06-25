import React from 'react'
import { createClient } from '../../../lib/supabase/server'
import { Users, Calendar, Settings, MoreVertical } from 'lucide-react'
import { AdminCohortsClient } from '../../../components/admin/AdminCohortsClient'

export const metadata = {
  title: 'Manage Cohorts | VACS Admin',
}

export default async function AdminCohortsPage() {
  const supabase = await createClient()

  // Fetch cohorts with their member counts
  const { data: cohorts, error } = await supabase
    .from('cohorts')
    .select(`
      *,
      members:cohort_members(count)
    `)
    .order('created_at', { ascending: false })

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-head text-3xl text-navy">Cohorts</h1>
          <p className="text-slate-500 mt-1">Manage student groups and enrollment</p>
        </div>
        <AdminCohortsClient />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {error ? (
          <div className="p-8 text-center text-red-500">Failed to load cohorts: {error.message}</div>
        ) : cohorts?.length === 0 ? (
          <div className="p-16 text-center">
            <div className="grid place-items-center w-16 h-16 rounded-full bg-slate-50 mx-auto mb-4 text-slate-300">
              <Users size={32} />
            </div>
            <h3 className="text-lg font-semibold text-slate-700">No cohorts found</h3>
            <p className="text-slate-500 text-sm mt-1">Create your first cohort to start adding students.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Cohort Name</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Students</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Dates</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cohorts.map((cohort) => (
                  <tr key={cohort.id} className="hover:bg-slate-50/50 transition">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-800">{cohort.cohort_name}</div>
                      <div className="text-[12px] text-slate-400 mt-0.5 font-mono">{cohort.id.substring(0, 8)}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold
                        ${cohort.status === 'active' ? 'bg-teal/10 text-teal' : 
                          cohort.status === 'completed' ? 'bg-indigo-100 text-indigo-700' : 
                          'bg-slate-100 text-slate-600'}`}>
                        {cohort.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Users size={15} className="text-slate-400" />
                        <span className="text-[14px] font-medium text-slate-700">{cohort.members[0].count}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-[13px] text-slate-600">
                        <Calendar size={14} className="text-slate-400" />
                        {cohort.start_date ? new Date(cohort.start_date).toLocaleDateString() : 'TBD'} - 
                        {cohort.end_date ? new Date(cohort.end_date).toLocaleDateString() : 'TBD'}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
