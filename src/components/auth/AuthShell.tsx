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
    <div className="textured relative min-h-screen bg-ink overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/3 w-[640px] h-[420px] rounded-full bg-gold-deep/12 blur-[130px]" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[460px] h-[460px] rounded-full bg-gold-deep/10 blur-[110px]" />
        <div className="absolute top-1/3 left-[-140px] w-[380px] h-[380px] rounded-full bg-gold/8 blur-[110px]" />
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
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold-deep/20 border border-gold/30 group-hover:bg-gold-deep/30 transition-colors duration-200">
                <BookOpen className="h-5 w-5 text-gold" />
              </div>
              <span className="text-xl font-bold text-parchment tracking-tight">
                SSC{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #dcca87, #b8a46a)' }}
                >
                  Solutions
                </span>
              </span>
            </Link>

            <h2 className="text-5xl xl:text-[3.4rem] font-medium text-parchment leading-[1.15] mb-5">
              Everything you need for{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #dcca87 0%, #f5efdb 50%, #b8a46a 100%)' }}
              >
                SSC exams
              </span>
              , in one place.
            </h2>

            <p className="text-muted text-lg leading-relaxed mb-9 max-w-md">
              Join thousands of students studying smarter with clear, curriculum-aligned solutions.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map(item => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
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
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gold-deep/20 border border-gold/30">
                <BookOpen className="h-5 w-5 text-gold" />
              </div>
              <span className="text-lg font-bold text-parchment tracking-tight">
                SSC{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #dcca87, #b8a46a)' }}
                >
                  Solutions
                </span>
              </span>
            </Link>

            <div
              className="relative rounded-2xl border border-gold/10 bg-parchment/[0.03] p-5 sm:p-7 md:p-9 overflow-hidden"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-16 w-[300px] h-[300px] rounded-full bg-gold-deep/10 blur-[90px]"
              />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold-soft text-[11px] font-semibold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-5">
                  <Sparkles className="h-3 w-3" />
                  {badge}
                </span>

                <h1 className="text-3xl md:text-4xl font-medium text-parchment mb-2">{title}</h1>
                <p className="text-sm text-faint mb-8 leading-relaxed">{subtitle}</p>

                {children}
              </div>
            </div>

            <p className="text-center text-sm text-faint mt-6">{footer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-gold mb-1">
        {icon}
        <span className="text-xl font-bold text-parchment tabular-nums">{value}</span>
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-faint">{label}</span>
    </div>
  )
}
