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
  { bg: 'rgba(220,202,135,0.12)',  border: 'rgba(220,202,135,0.25)',  text: '#dcca87', glow: 'rgba(220,202,135,0.15)'  },
  { bg: 'rgba(232,220,174,0.10)',  border: 'rgba(232,220,174,0.22)',  text: '#e8dcae', glow: 'rgba(232,220,174,0.12)'  },
  { bg: 'rgba(184,164,106,0.12)', border: 'rgba(184,164,106,0.25)', text: '#b8a46a', glow: 'rgba(184,164,106,0.15)' },
  { bg: 'rgba(241,95,42,0.10)',  border: 'rgba(241,95,42,0.22)',  text: '#f15f2a', glow: 'rgba(241,95,42,0.12)'  },
]

export default function SubjectCard({ subject, index = 0 }: SubjectCardProps) {
  const accent = accents[index % accents.length]

  return (
    <Link href={`/subjects/${subject.slug}`} className="group block">
      <div
        className="relative flex rounded-2xl border border-gold/8 bg-parchment/[0.03] overflow-hidden hover:bg-parchment/[0.06] hover:border-gold/15 transition-all duration-300 min-h-[130px]"
        style={{ boxShadow: '0 0 0 0 transparent' }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 32px ${accent.glow}`)}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 0 transparent')}
      >
        {/* Book cover — wider, but never more than a third of a phone screen */}
        <div className="relative w-28 shrink-0 overflow-hidden sm:w-36 lg:w-40">
          {subject.coverImage ? (
            <Image
              src={subject.coverImage}
              alt={`${subject.name} cover`}
              fill
              sizes="(min-width: 1024px) 10rem, (min-width: 640px) 9rem, 7rem"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-2"
              style={{ background: accent.bg, borderRight: `1px solid ${accent.border}` }}
            >
              <BookOpen className="h-9 w-9" style={{ color: accent.text, opacity: 0.7 }} />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: accent.text, opacity: 0.45 }}>
                SSC
              </span>
            </div>
          )}
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-[#202320]" />
        </div>

        {/* Card body */}
        <div className="flex flex-col justify-between flex-1 px-4 py-4 min-w-0 sm:px-5">
          <div>
            <h3 className="text-base font-medium text-parchment leading-snug mb-1.5 group-hover:text-gold-soft transition-colors duration-200 truncate">
              {subject.name}
            </h3>
            <p className="text-muted text-xs leading-relaxed line-clamp-2">
              {subject.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 mt-4">
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
            <span className="flex items-center gap-1 text-xs text-faint group-hover:text-muted transition-colors duration-200">
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