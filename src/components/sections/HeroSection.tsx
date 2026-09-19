'use client'

import Link from 'next/link'
import { Search, ArrowRight, BookOpen, Trophy, Users } from 'lucide-react'
import { useState } from 'react'

const stats = [
  { icon: BookOpen, label: 'Subjects', value: '15+' },
  { icon: Trophy, label: 'Questions Solved', value: '50K+' },
  { icon: Users, label: 'Students', value: '2L+' },
]

export default function HeroSection() {
  const [query, setQuery] = useState('')

  // `svh` rather than `vh`: on mobile browsers the collapsing URL bar makes
  // `vh` overshoot the visible area, so the hero spills past the fold.
  return (
    <section className="textured relative overflow-hidden bg-ink min-h-[92svh] flex items-center">

      {/* ── Decorative background ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Radial glow blobs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gold-deep/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-deep/15 blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full bg-gold/10 blur-[90px]" />

        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top border beam */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24 flex flex-col items-center text-center">

        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold-soft text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-8 animate-fade-in">
          <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse shrink-0" />
          SSC 2025 Resources Now Live
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.08] mb-6 animate-fade-in-up"
          style={{ animationDelay: '80ms' }}
        >
          <span className="text-parchment">Your Complete</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #dcca87 0%, #f5efdb 50%, #b8a46a 100%)',
            }}
          >
            SSC Study Companion
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-base sm:text-lg md:text-xl text-muted max-w-xl mb-10 sm:mb-12 animate-fade-in-up"
          style={{ animationDelay: '160ms' }}
        >
          Comprehensive solutions, study materials, and resources for every SSC subject — all in one place.
        </p>

        {/* Search bar */}
        <div
          className="w-full max-w-2xl mb-10 animate-fade-in-up"
          style={{ animationDelay: '240ms' }}
        >
          <div className="flex items-center bg-parchment/5 border border-gold/10 rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 gap-2 sm:gap-3 shadow-[0_0_40px_rgba(220,202,135,0.15)] focus-within:border-gold/60 focus-within:shadow-[0_0_50px_rgba(220,202,135,0.25)] transition-all duration-300">
            <Search className="h-5 w-5 text-muted shrink-0" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search subjects, chapters, or topics…"
              // `text-base` keeps iOS from zooming the page when the field takes focus.
              className="flex-1 min-w-0 bg-transparent text-parchment placeholder:text-faint focus:outline-none text-base"
            />
            {/* On a phone the label would crowd the field out, so the button
                carries only its icon there. */}
            <button
              aria-label="Search"
              className="shrink-0 inline-flex items-center justify-center bg-gold-deep hover:bg-gold active:scale-95 text-ink text-sm font-semibold px-3 sm:px-5 py-2 rounded-xl transition-all duration-200"
            >
              <Search className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 animate-fade-in-up"
          style={{ animationDelay: '320ms' }}
        >
          <Link
            href="/subjects"
            className="group inline-flex items-center gap-2 bg-gold-deep hover:bg-gold text-ink font-semibold px-6 sm:px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-gold-deep/40"
          >
            Browse Subjects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-parchment/5 hover:bg-parchment/10 border border-gold/10 hover:border-gold/20 text-parchment font-semibold px-6 sm:px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
          >
            Learn More
          </Link>
        </div>

        {/* Stats row — three columns even on the narrowest phone, so the
            dividers keep lining up instead of wrapping one stat onto its own row */}
        <div
          className="grid grid-cols-3 w-full max-w-lg animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          {stats.map(({ icon: Icon, label, value }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center px-2 sm:px-8 py-5 sm:py-6 ${
                i !== stats.length - 1
                  ? 'border-r border-gold/10'
                  : ''
              }`}
            >
              <Icon className="h-5 w-5 text-gold mb-2" />
              <span className="text-xl sm:text-2xl font-bold text-parchment">{value}</span>
              <span className="text-xs sm:text-sm text-faint mt-0.5 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade to page content */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(12,12,12,0.8))' }}
      />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in        { animation: fade-in     0.6s ease both; }
        .animate-fade-in-up     { animation: fade-in-up  0.7s ease both; }
      `}</style>
    </section>
  )
}