"use client"


import SubjectCard from '@/components/ui/SubjectCard'
import { subjectsData } from '@/data/subjectsData'
import { BookOpen, Search } from 'lucide-react'

export default function SubjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">

      {/* ── Background atmosphere ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-indigo-700/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-14">

        {/* ── Page header ── */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/25 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <BookOpen className="h-3 w-3" />
            SSC Curriculum
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            All{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)' }}
            >
              Subjects
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Choose a subject to explore chapter-wise solutions and study materials.
          </p>
        </div>

        {/* ── Search bar ── */}
        <div className="max-w-lg mx-auto mb-12">
          <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 focus-within:border-indigo-500/50 focus-within:bg-white/[0.06] transition-all duration-200">
            <Search className="h-4 w-4 text-slate-500 shrink-0" />
            <input
              type="text"
              placeholder="Search subjects…"
              className="flex-1 min-w-0 bg-transparent text-white placeholder:text-slate-600 text-base sm:text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* ── Subject count ── */}
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-6 text-center">
          {subjectsData.length} subjects available
        </p>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {subjectsData.map((subject, i) => (
            <SubjectCard key={subject.id} subject={subject} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}