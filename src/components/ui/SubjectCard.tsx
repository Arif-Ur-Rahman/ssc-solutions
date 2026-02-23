"use client"

import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, ChevronRight, Layers } from 'lucide-react'
import { Subject } from '@/types'

interface SubjectCardProps {
  subject: Subject
  index?: number
}

const accents = [
  { bg: 'rgba(99,102,241,0.12)',  border: 'rgba(99,102,241,0.25)',  text: '#818cf8', glow: 'rgba(99,102,241,0.15)'  },
  { bg: 'rgba(56,189,248,0.10)',  border: 'rgba(56,189,248,0.22)',  text: '#38bdf8', glow: 'rgba(56,189,248,0.12)'  },
  { bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.25)', text: '#a78bfa', glow: 'rgba(167,139,250,0.15)' },
  { bg: 'rgba(34,211,238,0.10)',  border: 'rgba(34,211,238,0.22)',  text: '#22d3ee', glow: 'rgba(34,211,238,0.12)'  },
]

export default function SubjectCard({ subject, index = 0 }: SubjectCardProps) {
  const accent = accents[index % accents.length]

  return (
    <Link href={`/subjects/${subject.slug}`} className="group block">
      <div
        className="relative flex rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 min-h-[130px]"
        style={{ boxShadow: '0 0 0 0 transparent' }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 32px ${accent.glow}`)}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 0 transparent')}
      >
        {/* Book cover — wider */}
        <div className="relative w-40 shrink-0 overflow-hidden">
          {subject.coverImage ? (
            <Image
              src={subject.coverImage}
              alt={`${subject.name} cover`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2"
              style={{ background: accent.bg, borderRight: `1px solid ${accent.border}` }}
            >
              <BookOpen className="h-9 w-9" style={{ color: accent.text, opacity: 0.7 }} />
              <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: accent.text, opacity: 0.45 }}>
                SSC
              </span>
            </div>
          )}
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-[#0d1120]" />
        </div>

        {/* Card body */}
        <div className="flex flex-col justify-between flex-1 px-5 py-4 min-w-0">
          <div>
            <h3 className="text-base font-bold text-white leading-snug mb-1.5 group-hover:text-indigo-200 transition-colors duration-200 truncate">
              {subject.name}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
              {subject.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1.5">
              <span
                className="inline-flex items-center justify-center w-5 h-5 rounded-md"
                style={{ background: accent.bg, border: `1px solid ${accent.border}` }}
              >
                <Layers className="h-2.5 w-2.5" style={{ color: accent.text }} />
              </span>
              <span className="text-xs font-medium" style={{ color: accent.text }}>
                {subject.chapters} Chapters
              </span>
            </div>
            <span className="flex items-center gap-1 text-xs text-slate-600 group-hover:text-slate-300 transition-colors duration-200">
              View
              <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </span>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${accent.text}50, transparent)` }}
        />
      </div>
    </Link>
  )
}