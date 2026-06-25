import React from 'react'
import { createClient } from '../../../lib/supabase/server'
import { BookOpen, AlertCircle, CheckCircle2, Circle, Eye, UploadCloud } from 'lucide-react'
import { AdminCurriculumClient } from '../../../components/admin/AdminCurriculumClient'
import { ContentPackUploader } from '../../../components/admin/ContentPackUploader'

export const metadata = {
  title: 'Manage Curriculum | VACS Admin',
}

export default async function AdminCurriculumPage() {
  const supabase = await createClient()

  // Fetch all weeks with their associated content packs
  const { data: weeks, error } = await supabase
    .from('weeks')
    .select(`
      *,
      content_packs(
        version,
        validation_status,
        created_at
      )
    `)
    .order('week_number', { ascending: true })

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-head text-3xl text-navy">Curriculum</h1>
          <p className="text-slate-500 mt-1">Manage weekly disease states and content packs</p>
        </div>
        <AdminCurriculumClient />
      </div>

      <div className="space-y-6">
        {error ? (
          <div className="p-8 text-center text-red-500 bg-red-50 rounded-2xl border border-red-200">
            Failed to load curriculum: {error.message}
          </div>
        ) : weeks?.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid place-items-center w-16 h-16 rounded-full bg-slate-50 mx-auto mb-4 text-slate-300">
              <BookOpen size={32} />
            </div>
            <h3 className="text-lg font-semibold text-slate-700">No weeks configured</h3>
            <p className="text-slate-500 text-sm mt-1">Please seed the database with the initial weeks.</p>
          </div>
        ) : (
          weeks.map(week => {
            const latestPack = week.content_packs?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0]

            return (
              <div key={week.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                {/* Info Column */}
                <div className="p-6 md:w-1/3 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-center">
                  <div className="text-[12px] font-bold text-teal tracking-widest uppercase mb-1">Week {week.week_number}</div>
                  <h2 className="font-head text-xl text-navy leading-tight mb-3">{week.title}</h2>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {week.disease_states.map(ds => (
                      <span key={ds} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] text-slate-600 font-medium">
                        {ds}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-2">
                    <span className="text-[12px] font-medium text-slate-500">Status:</span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider
                      ${week.publish_status === 'published' ? 'bg-emerald-100 text-emerald-800' : 
                        week.publish_status === 'validated' ? 'bg-blue-100 text-blue-800' : 
                        'bg-slate-200 text-slate-700'}`}>
                      {week.publish_status}
                    </span>
                  </div>
                </div>

                {/* Content Pack Column */}
                <ContentPackUploader weekId={week.id} latestPack={latestPack} />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
