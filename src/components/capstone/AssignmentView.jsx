import React, { useState, useRef } from 'react'
import { FileText, UploadCloud, AlertCircle } from 'lucide-react'
import mammoth from 'mammoth'

export default function AssignmentView({ topic, onUpload }) {
  const [file, setFile] = useState(null)
  const [extracting, setExtracting] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async () => {
    if (!file) return
    setExtracting(true)
    try {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const arrayBuffer = e.target.result
        try {
          const result = await mammoth.extractRawText({ arrayBuffer })
          if (result.value) {
            onUpload(result.value)
          } else {
            alert('Could not extract text from document. Ensure it is not empty.')
            setExtracting(false)
          }
        } catch (err) {
          console.error(err)
          alert('Error parsing .docx file. Please ensure it is a valid Word document.')
          setExtracting(false)
        }
      }
      reader.readAsArrayBuffer(file)
    } catch (err) {
      console.error(err)
      setExtracting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 py-10">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="bg-navy px-6 py-4 text-white">
          <h2 className="text-xl font-head tracking-wide">Assignment Guide</h2>
          <p className="text-sm text-slate-300 mt-1">{topic.title}</p>
        </div>
        <div className="p-6 space-y-6 text-sm text-slate-700">
          <div>
            <h3 className="font-semibold text-navy mb-2 uppercase tracking-wider text-xs">Overview</h3>
            <p className="leading-relaxed">{topic.assignmentGuide.overview}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-navy mb-2 uppercase tracking-wider text-xs">Deliverable & Formatting</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>{topic.assignmentGuide.deliverable}</li>
                <li>{topic.assignmentGuide.formatting}</li>
                <li><strong>Audience:</strong> {topic.assignmentGuide.audience}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-navy mb-2 uppercase tracking-wider text-xs">Required Articles</h3>
              <ul className="list-disc pl-5 space-y-1">
                {topic.assignmentGuide.requiredArticles.map((art, i) => (
                  <li key={i}><a href={art.link} className="text-teal hover:underline">{art.citation}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-navy mb-2 uppercase tracking-wider text-xs">Required Sections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {topic.assignmentGuide.requiredSections.map((sec) => (
                <div key={sec.number} className="bg-slate-50 border border-slate-100 rounded px-3 py-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-slate-200 text-slate-600 text-xs flex items-center justify-center font-bold shrink-0">{sec.number}</span>
                  <span className="font-medium text-slate-700">{sec.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
        <div className="max-w-md mx-auto">
          <FileText size={48} className="mx-auto text-slate-300 mb-4" />
          <h2 className="text-xl font-bold text-navy mb-2">Submit your Manuscript</h2>
          <p className="text-sm text-slate-500 mb-6">Upload your completed Grand Rounds manuscript as a .docx file. The AI Preceptor will evaluate it.</p>
          
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer" onClick={() => fileInputRef.current?.click()}>
            <input type="file" accept=".docx" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            <UploadCloud size={32} className="mx-auto text-teal mb-2" />
            <span className="text-teal font-semibold">{file ? file.name : 'Click to select .docx file'}</span>
          </div>

          <button 
            onClick={handleSubmit} 
            disabled={!file || extracting}
            className={`mt-6 w-full py-3 rounded-lg font-semibold text-white transition-all ${(!file || extracting) ? 'bg-slate-300 cursor-not-allowed' : 'bg-teal hover:bg-teal/90 shadow-md'}`}
          >
            {extracting ? 'Extracting text...' : 'Submit to AI Preceptor'}
          </button>
        </div>
      </div>
    </div>
  )
}
