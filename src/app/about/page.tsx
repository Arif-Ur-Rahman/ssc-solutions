import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Quote,
  Sparkles,
} from 'lucide-react'
import { profile, timeline, skills, socials } from './profileData'

export const metadata: Metadata = {
  title: `About ${profile.name} — SSC Solutions`,
  description: profile.lead,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.lead,
    type: 'profile',
  },
}

/* Tailwind needs literal class names, so accents are mapped rather than interpolated. */
const accents = {
  indigo: {
    text: 'text-indigo-400',
    hoverText: 'group-hover:text-indigo-400',
    dot: 'bg-indigo-400',
    ring: 'shadow-[0_0_0_4px_rgba(99,102,241,0.15)]',
    chip: 'bg-indigo-500/10 border-indigo-400/25 text-indigo-300',
    softBorder: 'hover:border-indigo-400/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(99,102,241,0.45)]',
  },
  violet: {
    text: 'text-violet-400',
    hoverText: 'group-hover:text-violet-400',
    dot: 'bg-violet-400',
    ring: 'shadow-[0_0_0_4px_rgba(167,139,250,0.15)]',
    chip: 'bg-violet-500/10 border-violet-400/25 text-violet-300',
    softBorder: 'hover:border-violet-400/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(167,139,250,0.45)]',
  },
  sky: {
    text: 'text-sky-400',
    hoverText: 'group-hover:text-sky-400',
    dot: 'bg-sky-400',
    ring: 'shadow-[0_0_0_4px_rgba(56,189,248,0.15)]',
    chip: 'bg-sky-500/10 border-sky-400/25 text-sky-300',
    softBorder: 'hover:border-sky-400/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.45)]',
  },
  emerald: {
    text: 'text-emerald-400',
    hoverText: 'group-hover:text-emerald-400',
    dot: 'bg-emerald-400',
    ring: 'shadow-[0_0_0_4px_rgba(52,211,153,0.15)]',
    chip: 'bg-emerald-500/10 border-emerald-400/25 text-emerald-300',
    softBorder: 'hover:border-emerald-400/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(52,211,153,0.45)]',
  },
} as const

const socialIcons = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
} as const

/** The hero CTA points at the first email link, falling back to the first social. */
const primaryContactHref =
  socials.find((s) => s.icon === 'mail')?.href ?? socials[0]?.href ?? '/contact'

export default function AboutPage() {
  return (
    <div className="relative bg-[#0a0f1e]">

      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section className="relative overflow-hidden">

        {/* Decorative background — mirrors the home hero */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full bg-indigo-700/20 blur-[130px]" />
          <div className="absolute top-24 right-0 w-[460px] h-[460px] rounded-full bg-violet-600/15 blur-[110px]" />
          <div className="absolute top-1/2 -left-20 w-[380px] h-[380px] rounded-full bg-sky-500/10 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

            {/* Avatar */}
            <div className="shrink-0 animate-fade-in-up">
              <div className="relative">
                {/* Rotating conic halo */}
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-full opacity-45 blur-2xl animate-spin-slow"
                  style={{
                    background:
                      'conic-gradient(from 0deg, #818cf8, #a78bfa, #38bdf8, #818cf8)',
                  }}
                />
                {/* A photo gets a portrait frame so a full-length shot isn't
                    cropped through the face; the monogram stays square. */}
                <div
                  className={`relative rounded-[2rem] p-[2px] bg-gradient-to-br from-indigo-400/80 via-violet-400/60 to-sky-400/80 ${
                    profile.photo
                      ? 'w-60 md:w-72 aspect-[3/4]'
                      : 'w-44 h-44 md:w-52 md:h-52'
                  }`}
                >
                  <div className="w-full h-full rounded-[1.9rem] bg-[#0d1324] flex items-center justify-center overflow-hidden">
                    {profile.photo ? (
                      <Image
                        src={profile.photo}
                        alt={`Portrait of ${profile.name}`}
                        width={576}
                        height={768}
                        sizes="(min-width: 768px) 18rem, 15rem"
                        className="w-full h-full object-cover object-top"
                        priority
                      />
                    ) : (
                      <span
                        className="text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent select-none"
                        style={{
                          backgroundImage:
                            'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)',
                        }}
                      >
                        {profile.initials}
                      </span>
                    )}
                  </div>
                </div>

                {/* Availability badge */}
                {profile.available && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-2 bg-[#0d1324] border border-emerald-400/30 text-emerald-300 text-xs font-medium px-3.5 py-1.5 rounded-full shadow-lg shadow-black/40">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </span>
                    {profile.availableText}
                  </div>
                )}
              </div>
            </div>

            {/* Intro copy */}
            <div className="flex-1 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/25 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-7 animate-fade-in"
              >
                <Sparkles className="h-3.5 w-3.5" />
                About the person behind {profile.tagline}
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-4 animate-fade-in-up"
                style={{ animationDelay: '80ms' }}
              >
                <span className="text-white">Hi, I&rsquo;m </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)',
                  }}
                >
                  {profile.name}
                </span>
              </h1>

              <div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mb-7 animate-fade-in-up"
                style={{ animationDelay: '140ms' }}
              >
                <span className="text-lg font-semibold text-slate-200">{profile.role}</span>
                <span aria-hidden className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600" />
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  {profile.location}
                </span>
              </div>

              <p
                className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in-up"
                style={{ animationDelay: '200ms' }}
              >
                {profile.lead}
              </p>

              <div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-14 animate-fade-in-up"
                style={{ animationDelay: '260ms' }}
              >
                <a
                  href={primaryContactHref}
                  className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-indigo-700/40"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <Link
                  href="/subjects"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                >
                  Browse Subjects
                </Link>
              </div>

              {/* Stat strip */}
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-px animate-fade-in-up"
                style={{ animationDelay: '320ms' }}
              >
                {profile.stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center lg:items-start px-4 sm:px-8 first:lg:pl-0 py-4 ${
                      i !== profile.stats.length - 1 ? 'border-r border-white/10' : ''
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
                    <span className="text-xs sm:text-sm text-slate-500 mt-1 text-center lg:text-left">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── STORY ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080c18] py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full bg-violet-700/10 blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading eyebrow="My Story" title="Why this site exists" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">

            {/* Narrative */}
            <div className="lg:col-span-2 relative">
              <Quote
                aria-hidden
                className="absolute -top-10 -left-3 h-14 w-14 text-indigo-500/15"
                strokeWidth={1.5}
              />
              <div className="relative space-y-6">
                {profile.story.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      i === 0
                        ? 'text-lg md:text-xl text-slate-200'
                        : 'text-base text-slate-400'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature line */}
              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-indigo-400/60 to-transparent" />
                <span
                  className="text-xl font-semibold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #818cf8, #38bdf8)',
                    fontFamily: 'ui-serif, Georgia, serif',
                    fontStyle: 'italic',
                  }}
                >
                  {profile.name}
                </span>
              </div>
            </div>

            {/* At a glance */}
            <aside className="relative rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-7 backdrop-blur-sm">
              <div
                aria-hidden
                className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"
              />
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
                At a Glance
              </h3>
              <dl className="space-y-5">
                {profile.facts.map((fact) => (
                  <div key={fact.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-slate-500 shrink-0">{fact.label}</dt>
                    <dd className="text-sm font-medium text-slate-200 text-right">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── TIMELINE ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0f1e] py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-indigo-700/10 blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading eyebrow="Journey" title="How I got here" />

          <div className="relative max-w-3xl mx-auto">
            {/* Rail */}
            <div
              aria-hidden
              className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400/60 via-violet-400/30 to-transparent"
            />

            <ol className="space-y-10">
              {timeline.map((entry) => {
                const a = accents[entry.accent]
                return (
                  <li key={entry.title} className="relative pl-12 group">
                    {/* Node */}
                    <span
                      className={`absolute left-0 top-1.5 flex items-center justify-center w-[23px] h-[23px] rounded-full bg-[#0a0f1e] border border-white/10 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <span className={`w-2 h-2 rounded-full ${a.dot} ${a.ring}`} />
                    </span>

                    <div
                      className={`rounded-2xl bg-white/[0.03] border border-white/10 ${a.softBorder} p-6 transition-all duration-300 group-hover:bg-white/[0.055] group-hover:-translate-y-0.5`}
                    >
                      <span
                        className={`inline-block text-xs font-semibold uppercase tracking-widest ${a.text} mb-2`}
                      >
                        {entry.period}
                      </span>
                      <h3 className="text-lg font-bold text-white">{entry.title}</h3>
                      <p className="text-sm text-slate-400 mb-3">{entry.org}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ──────────────────────────── SKILLS ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080c18] py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute top-1/4 right-0 w-[380px] h-[380px] rounded-full bg-sky-600/10 blur-[110px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading eyebrow="Toolkit" title="What I work with" />

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((group) => {
              const a = accents[group.accent]
              return (
                <div
                  key={group.category}
                  className={`group rounded-2xl bg-white/[0.03] border border-white/10 ${a.softBorder} p-6 sm:p-7 transition-all duration-300 hover:bg-white/[0.055] hover:-translate-y-1 ${a.glow}`}
                >
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className={`w-1.5 h-1.5 rounded-full ${a.dot} ${a.ring}`} />
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`text-sm font-medium px-3.5 py-1.5 rounded-lg border ${a.chip} transition-colors duration-200`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────── CONTACT ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0f1e] py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] h-[340px] rounded-full bg-indigo-700/15 blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading
            eyebrow="Say Hello"
            title="Let's talk"
            subtitle="Questions about a solution, a correction to submit, or something to build together — any of these are welcome."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {socials.map((social) => {
              const a = accents[social.accent]
              const Icon = socialIcons[social.icon]
              const external = !social.href.startsWith('mailto:')
              return (
                <a
                  key={social.label}
                  href={social.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`group relative rounded-2xl bg-white/[0.03] border border-white/10 ${a.softBorder} p-6 transition-all duration-300 hover:bg-white/[0.055] hover:-translate-y-1 ${a.glow}`}
                >
                  <span
                    className={`flex items-center justify-center w-11 h-11 rounded-xl border ${a.chip} mb-5`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-1">{social.label}</h3>
                  <p className="text-sm text-slate-400 break-all">{social.handle}</p>
                  <ArrowUpRight
                    className={`absolute top-6 right-6 h-4 w-4 text-slate-600 ${a.hoverText} group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200`}
                  />
                </a>
              )
            })}
          </div>

          {/* Closing CTA band */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-sky-500/10 p-6 sm:p-10 md:p-14 text-center">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Start with a subject
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8">
                Every chapter is worked through step by step — free, and always will be.
              </p>
              <Link
                href="/subjects"
                className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-indigo-700/40"
              >
                Explore Subjects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-fade-in    { animation: fade-in    0.6s ease both; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease both; }
        .animate-spin-slow  { animation: spin-slow  8s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-fade-in-up,
          .animate-spin-slow { animation: none; }
        }
      `}</style>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-14 text-center">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
        <span className="h-px w-6 bg-indigo-400/50" />
        {eyebrow}
        <span className="h-px w-6 bg-indigo-400/50" />
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
