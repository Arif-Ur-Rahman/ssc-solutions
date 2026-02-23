import SubjectCard from '@/components/ui/SubjectCard'
import { subjectsData } from '@/data/subjectsData'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function PopularSubjects() {
  const popularSubjects = subjectsData.slice(0, 3)

  return (
    <section className="relative bg-[#080c18] py-28 overflow-hidden">

      {/* Background atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sky-600/8 blur-[110px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-700/10 blur-[100px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/25 text-sky-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              <Sparkles className="h-3 w-3" />
              Most Accessed
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Popular{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)' }}
              >
                Subjects
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-lg">
              Explore our most accessed subjects with complete solutions and study materials.
            </p>
          </div>

          {/* Desktop "View all" link */}
          <Link
            href="/subjects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 border border-indigo-400/25 hover:border-indigo-400/50 bg-indigo-500/10 hover:bg-indigo-500/15 px-5 py-2.5 rounded-xl transition-all duration-200 shrink-0"
          >
            View all subjects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>

        {/* Mobile "View all" link */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 border border-indigo-400/25 hover:border-indigo-400/50 bg-indigo-500/10 hover:bg-indigo-500/15 px-6 py-3 rounded-xl transition-all duration-200"
          >
            View all subjects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}