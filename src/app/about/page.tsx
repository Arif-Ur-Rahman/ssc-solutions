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
    text: 'text-gold',
    hoverText: 'group-hover:text-gold',
    dot: 'bg-gold',
    ring: 'shadow-[0_0_0_4px_rgba(220,202,135,0.15)]',
    chip: 'bg-gold/10 border-gold/25 text-gold-soft',
    softBorder: 'hover:border-gold/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(220,202,135,0.45)]',
  },
  violet: {
    text: 'text-gold',
    hoverText: 'group-hover:text-gold',
    dot: 'bg-gold',
    ring: 'shadow-[0_0_0_4px_rgba(184,164,106,0.15)]',
    chip: 'bg-gold/10 border-gold/25 text-gold-soft',
    softBorder: 'hover:border-gold/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(184,164,106,0.45)]',
  },
  sky: {
    text: 'text-gold',
    hoverText: 'group-hover:text-gold',
    dot: 'bg-gold',
    ring: 'shadow-[0_0_0_4px_rgba(232,220,174,0.15)]',
    chip: 'bg-gold/10 border-gold/25 text-gold-soft',
    softBorder: 'hover:border-gold/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(232,220,174,0.45)]',
  },
  emerald: {
    text: 'text-gold',
    hoverText: 'group-hover:text-gold',
    dot: 'bg-gold',
    ring: 'shadow-[0_0_0_4px_rgba(220,202,135,0.15)]',
    chip: 'bg-gold/10 border-gold/25 text-gold-soft',
    softBorder: 'hover:border-gold/40',
    glow: 'group-hover:shadow-[0_0_40px_-8px_rgba(220,202,135,0.45)]',
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
    <div className="textured relative bg-ink">

      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section className="relative overflow-hidden">

        {/* Decorative background — mirrors the home hero */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full bg-gold-deep/20 blur-[130px]" />
          <div className="absolute top-24 right-0 w-[460px] h-[460px] rounded-full bg-gold-deep/15 blur-[110px]" />
          <div className="absolute top-1/2 -left-20 w-[380px] h-[380px] rounded-full bg-gold/10 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
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
                      'conic-gradient(from 0deg, #dcca87, #f5efdb, #b8a46a, #dcca87)',
                  }}
                />
                {/* A photo gets a portrait frame so a full-length shot isn't
                    cropped through the face; the monogram stays square. */}
                <div
                  className={`relative rounded-[2rem] p-[2px] bg-gradient-to-br from-gold/80 via-gold/60 to-gold/80 ${
                    profile.photo
                      ? 'w-60 md:w-72 aspect-[3/4]'
                      : 'w-44 h-44 md:w-52 md:h-52'
                  }`}
                >
                  <div className="w-full h-full rounded-[1.9rem] bg-surface flex items-center justify-center overflow-hidden">
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
                            'linear-gradient(135deg, #dcca87 0%, #f5efdb 50%, #b8a46a 100%)',
                        }}
                      >
                        {profile.initials}
                      </span>
                    )}
                  </div>
                </div>

                {/* Availability badge */}
                {profile.available && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-2 bg-surface border border-gold/30 text-gold-soft text-xs font-medium px-3.5 py-1.5 rounded-full shadow-lg shadow-black/40">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="absolute inline-flex w-full h-full rounded-full bg-gold opacity-75 animate-ping" />
                      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-gold" />
                    </span>
                    {profile.availableText}
                  </div>
                )}
              </div>
            </div>

            {/* Intro copy */}
            <div className="flex-1 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold-soft text-sm font-medium px-4 py-1.5 rounded-full mb-7 animate-fade-in"
              >
                <Sparkles className="h-3.5 w-3.5" />
                About the person behind {profile.tagline}
              </div>

              <h1
                className="text-5xl sm:text-6xl md:text-6xl font-medium leading-[1.08] mb-4 animate-fade-in-up"
                style={{ animationDelay: '80ms' }}
              >
                <span className="text-parchment">Hi, I&rsquo;m </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #dcca87 0%, #f5efdb 50%, #b8a46a 100%)',
                  }}
                >
                  {profile.name}
                </span>
              </h1>

              <div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mb-7 animate-fade-in-up"
                style={{ animationDelay: '140ms' }}
              >
                <span className="font-script text-2xl text-gold">{profile.role}</span>
                <span aria-hidden className="hidden sm:inline-block w-1 h-1 rounded-full bg-faint" />
                <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-faint" />
                  {profile.location}
                </span>
              </div>

              <p
                className="text-lg text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in-up"
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
                  className="group inline-flex items-center gap-2 bg-gold-deep hover:bg-gold text-ink font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-gold-deep/40"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <Link
                  href="/subjects"
                  className="inline-flex items-center gap-2 bg-parchment/5 hover:bg-parchment/10 border border-gold/10 hover:border-gold/20 text-parchment font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
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
                      i !== profile.stats.length - 1 ? 'border-r border-gold/10' : ''
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl font-bold text-parchment">{stat.value}</span>
                    <span className="text-xs sm:text-sm text-faint mt-1 text-center lg:text-left">
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
      <section className="textured relative overflow-hidden bg-ink-deep py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full bg-gold-deep/10 blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading eyebrow="My Story" title="Why this site exists" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">

            {/* Narrative */}
            <div className="lg:col-span-2 relative">
              <Quote
                aria-hidden
                className="absolute -top-10 -left-3 h-14 w-14 text-gold/15"
                strokeWidth={1.5}
              />
              <div className="relative space-y-6">
                {profile.story.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      i === 0
                        ? 'text-lg md:text-xl text-parchment'
                        : 'text-base text-muted'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Signature line */}
              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-gold/60 to-transparent" />
                <span
                  className="text-xl font-semibold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #dcca87, #b8a46a)',
                    fontFamily: 'ui-serif, Georgia, serif',
                    fontStyle: 'italic',
                  }}
                >
                  {profile.name}
                </span>
              </div>
            </div>

            {/* At a glance */}
            <aside className="relative rounded-2xl bg-parchment/[0.03] border border-gold/10 p-6 sm:p-7 backdrop-blur-sm">
              <div
                aria-hidden
                className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
              />
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-faint mb-6">
                At a Glance
              </h3>
              <dl className="space-y-5">
                {profile.facts.map((fact) => (
                  <div key={fact.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-faint shrink-0">{fact.label}</dt>
                    <dd className="text-sm font-medium text-parchment text-right">
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
      <section className="textured relative overflow-hidden bg-ink py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-gold-deep/10 blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading eyebrow="Journey" title="How I got here" />

          <div className="relative max-w-3xl mx-auto">
            {/* Rail */}
            <div
              aria-hidden
              className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent"
            />

            <ol className="space-y-10">
              {timeline.map((entry) => {
                const a = accents[entry.accent]
                return (
                  <li key={entry.title} className="relative pl-12 group">
                    {/* Node */}
                    <span
                      className={`absolute left-0 top-1.5 flex items-center justify-center w-[23px] h-[23px] rounded-full bg-ink border border-gold/10 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <span className={`w-2 h-2 rounded-full ${a.dot} ${a.ring}`} />
                    </span>

                    <div
                      className={`rounded-2xl bg-parchment/[0.03] border border-gold/10 ${a.softBorder} p-6 transition-all duration-300 group-hover:bg-parchment/[0.055] group-hover:-translate-y-0.5`}
                    >
                      <span
                        className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] ${a.text} mb-2`}
                      >
                        {entry.period}
                      </span>
                      <h3 className="text-lg font-medium text-parchment">{entry.title}</h3>
                      <p className="text-sm text-muted mb-3">{entry.org}</p>
                      <p className="text-sm text-muted leading-relaxed">
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
      <section className="textured relative overflow-hidden bg-ink-deep py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <div className="absolute top-1/4 right-0 w-[380px] h-[380px] rounded-full bg-gold-deep/10 blur-[110px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <SectionHeading eyebrow="Toolkit" title="What I work with" />

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((group) => {
              const a = accents[group.accent]
              return (
                <div
                  key={group.category}
                  className={`group rounded-2xl bg-parchment/[0.03] border border-gold/10 ${a.softBorder} p-6 sm:p-7 transition-all duration-300 hover:bg-parchment/[0.055] hover:-translate-y-1 ${a.glow}`}
                >
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className={`w-1.5 h-1.5 rounded-full ${a.dot} ${a.ring}`} />
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-muted">
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
      <section className="textured relative overflow-hidden bg-ink py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[640px] h-[340px] rounded-full bg-gold-deep/15 blur-[120px]" />
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
                  className={`group relative rounded-2xl bg-parchment/[0.03] border border-gold/10 ${a.softBorder} p-6 transition-all duration-300 hover:bg-parchment/[0.055] hover:-translate-y-1 ${a.glow}`}
                >
                  <span
                    className={`flex items-center justify-center w-11 h-11 rounded-xl border ${a.chip} mb-5`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-sans text-sm font-semibold text-parchment mb-1">{social.label}</h3>
                  <p className="text-sm text-muted break-all">{social.handle}</p>
                  <ArrowUpRight
                    className={`absolute top-6 right-6 h-4 w-4 text-faint ${a.hoverText} group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200`}
                  />
                </a>
              )
            })}
          </div>

          {/* Closing CTA band */}
          <div className="relative overflow-hidden rounded-3xl border border-gold/10 bg-gradient-to-br from-gold-deep/15 via-gold-deep/10 to-gold/10 p-6 sm:p-10 md:p-14 text-center">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-medium text-parchment mb-4">
                Start with a subject
              </h2>
              <p className="text-muted max-w-xl mx-auto mb-8">
                Every chapter is worked through step by step — free, and always will be.
              </p>
              <Link
                href="/subjects"
                className="group inline-flex items-center gap-2 bg-gold-deep hover:bg-gold text-ink font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-gold-deep/40"
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
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
        <span className="h-px w-6 bg-gold/50" />
        {eyebrow}
        <span className="h-px w-6 bg-gold/50" />
      </span>
      <h2 className="text-4xl md:text-5xl font-medium text-parchment">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
