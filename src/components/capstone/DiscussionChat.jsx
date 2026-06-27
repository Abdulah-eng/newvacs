import React, { useState, useEffect, useRef } from 'react'
import { Send, User, BrainCircuit } from 'lucide-react'

export default function DiscussionChat({ topic, evaluation, onFinish }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    // Initial welcome message from AI
    setMessages([{
      role: 'assistant',
      content: "Excellent job on the manuscript! We are now in the live Q&A portion of your Grand Rounds. I will ask you a few follow-up questions to test your clinical reasoning. Are you ready?"
    }])
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userText = input.trim()
    const newMessages = [...messages, { role: 'user', content: userText }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ai/capstone-discussion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: topic.id,
          chatHistory: newMessages,
          evaluationScore: evaluation?.totalScore || 100
        })
      })
      if (!res.ok) throw new Error('Failed to get response')
      const data = await res.json()
      setMessages([...newMessages, { role: 'assistant', content: data.reply }])
    } catch (err) {
      console.error(err)
      setMessages([...newMessages, { role: 'assistant', content: 'Network error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-60px)] flex flex-col p-4 md:p-6">
      <div className="bg-white flex-1 rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-navy px-6 py-4 flex justify-between items-center text-white shrink-0">
          <div>
            <h2 className="text-lg font-head">Live Q&A</h2>
            <p className="text-xs text-slate-300">Defend your recommendations</p>
          </div>
          <button onClick={onFinish} className="text-xs font-semibold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
            Finish Simulation
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-4 max-w-[85%] ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-navy text-white' : 'bg-teal-500 text-white'}`}>
                {m.role === 'user' ? <User size={16} /> : <BrainCircuit size={16} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-navy text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 shadow-sm rounded-tl-none'}`}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-4 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center shrink-0">
                <BrainCircuit size={16} />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-500 shadow-sm rounded-tl-none flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200 shrink-0">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input
              type="text"
              className="w-full pl-4 pr-12 py-3 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-navy outline-none text-sm text-slate-700 placeholder-slate-400"
              placeholder="Type your response..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="absolute right-2 p-2 rounded-lg text-white bg-navy hover:bg-navy-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
