'use client'

import Link from 'next/link'
import { BookOpen, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react'

const highlights = [
  'Chapter-wise solutions for every SSC subject',
  'Step-by-step math worked out, not just answers',
  'Bookmark exercises and pick up where you left off',
]

interface AuthShellProps {
  badge: string
  title: React.ReactNode
  subtitle: string
  children: React.ReactNode
  footer: React.ReactNode
}

export default function AuthShell({ badge, title, subtitle, children, footer }: AuthShellProps) {
  return (
    <div className="relative min-h-screen bg-[#0a0f1e] overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/3 w-[640px] h-[420px] rounded-full bg-indigo-700/12 blur-[130px]" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[460px] h-[460px] rounded-full bg-violet-600/10 blur-[110px]" />
        <div className="absolute top-1/3 left-[-140px] w-[380px] h-[380px] rounded-full bg-sky-500/8 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center max-w-6xl mx-auto">

          {/* ── Brand panel (desktop only) ── */}
          <aside className="hidden lg:block">
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-10">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-400/30 group-hover:bg-indigo-600/30 transition-colors duration-200">
                <BookOpen className="h-5 w-5 text-indigo-400" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SSC{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #38bdf8)' }}
                >
                  Solutions
                </span>
              </span>
            </Link>

            <h2 className="text-4xl xl:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Everything you need for{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)' }}
              >
                SSC exams
              </span>
              , in one place.
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-9 max-w-md">
              Join thousands of students studying smarter with clear, curriculum-aligned solutions.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map(item => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-8">
              <Stat icon={<GraduationCap className="h-4 w-4" />} value="12k+" label="Students" />
              <Stat icon={<BookOpen className="h-4 w-4" />} value="2.5k+" label="Solutions" />
              <Stat icon={<Sparkles className="h-4 w-4" />} value="Free" label="Always" />
            </div>
          </aside>

          {/* ── Form card ── */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:justify-self-end">
            {/* Mobile logo */}
            <Link href="/" className="lg:hidden flex items-center justify-center gap-2.5 mb-8">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-400/30">
                <BookOpen className="h-5 w-5 text-indigo-400" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                SSC{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #38bdf8)' }}
                >
                  Solutions
                </span>
              </span>
            </Link>

            <div
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 md:p-9 overflow-hidden"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-16 w-[300px] h-[300px] rounded-full bg-indigo-600/10 blur-[90px]"
              />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/25 text-indigo-300 text-[11px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-5">
                  <Sparkles className="h-3 w-3" />
                  {badge}
                </span>

                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">{title}</h1>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed">{subtitle}</p>

                {children}
              </div>
            </div>

            <p className="text-center text-sm text-slate-500 mt-6">{footer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
        {icon}
        <span className="text-xl font-bold text-white tabular-nums">{value}</span>
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-600">{label}</span>
    </div>
  )
}
