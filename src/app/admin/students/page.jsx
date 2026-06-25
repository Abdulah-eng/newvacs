import React from 'react'
import { createClient } from '../../../lib/supabase/server'
import { UserPlus, MoreVertical, Search, Filter } from 'lucide-react'
import { AdminStudentsClient } from '../../../components/admin/AdminStudentsClient'

export const metadata = {
  title: 'Manage Students | VACS Admin',
}

export default async function AdminStudentsPage() {
  const supabase = await createClient()

  const { data: students, error } = await supabase
    .from('profiles')
    .select(`
      *,
      cohort_members(
        cohort:cohorts(cohort_name)
      )
    `)
    .eq('role', 'student')
    .order('created_at', { ascending: false })

  const { data: cohorts } = await supabase
    .from('cohorts')
    .select('id, cohort_name')
    .order('created_at', { ascending: false })

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-head text-3xl text-navy">Students</h1>
          <p className="text-slate-500 mt-1">Manage user accounts and enrollment</p>
        </div>
        <AdminStudentsClient cohorts={cohorts || []} />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-[13px] outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
            />
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-50 transition">
            <Filter size={15} /> Filter
          </button>
        </div>

        {error ? (
          <div className="p-8 text-center text-red-500">Failed to load students: {error.message}</div>
        ) : students?.length === 0 ? (
          <div className="p-16 text-center">
            <div className="grid place-items-center w-16 h-16 rounded-full bg-slate-50 mx-auto mb-4 text-slate-300">
              <UserPlus size={32} />
            </div>
            <h3 className="text-lg font-semibold text-slate-700">No students yet</h3>
            <p className="text-slate-500 text-sm mt-1">Invite students to join the platform.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Enrolled Cohorts</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 text-[12px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {students.map((student) => {
                  const cohorts = student.cohort_members.map(m => m.cohort?.cohort_name).filter(Boolean)
                  return (
                    <tr key={student.id} className="hover:bg-slate-50/50 transition">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-800">{student.full_name || 'Pending Invite'}</div>
                        <div className="text-[13px] text-slate-500 mt-0.5">{student.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold
                          ${student.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 
                            student.status === 'invited' ? 'bg-amber-100 text-amber-800' : 
                            'bg-slate-100 text-slate-600'}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {cohorts.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {cohorts.map((c, i) => (
                              <span key={i} className="inline-block px-2 py-0.5 rounded border border-slate-200 bg-white text-[12px] text-slate-600">
                                {c}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-[12px] text-slate-400 italic">Unassigned</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-[13px] text-slate-600">
                        {new Date(student.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
