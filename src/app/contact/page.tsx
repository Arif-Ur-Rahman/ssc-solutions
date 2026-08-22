import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Sparkles,
  Clock,
  MapPin,
  MessageCircle,
  Mail,
  Phone,
  Zap,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react'
import { contactInfo, whatsappLink } from '@/data/contactInfo'
import ChannelCards from './components/ChannelCards'
import ContactForm from './components/ContactForm'
import FaqAccordion from './components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Contact — SSC Solutions',
  description:
    'Get in touch with SSC Solutions on WhatsApp, phone or email. Request solutions, report mistakes, or just say hello.',
  openGraph: {
    title: 'Contact SSC Solutions',
    description: 'Reach us on WhatsApp, phone or email — we reply fast.',
    type: 'website',
  },
}

const highlights = [
  { icon: Zap, title: 'Fast replies', text: 'Most WhatsApp messages get an answer within a couple of hours.' },
  { icon: HeartHandshake, title: 'Real people', text: 'No bots, no ticket queue — you talk to the person who builds the solutions.' },
  { icon: Sparkles, title: 'Free, always', text: 'Every solution stays free. Ask for anything you need help with.' },
]

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0f1e] overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-indigo-700/18 blur-[130px]" />
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-violet-600/12 blur-[110px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4">

        {/* ── Hero ── */}
        <section className="pt-20 pb-14 text-center">
          <span
            className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/25 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 animate-fade-in"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            We usually reply within hours
          </span>

          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 animate-fade-in-up"
            style={{ animationDelay: '80ms' }}
          >
            <span className="text-white">Let&apos;s Talk About</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)' }}
            >
              Your Next Exam
            </span>
          </h1>

          <p
            className="text-lg text-slate-400 max-w-xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: '160ms' }}
          >
            Stuck on a problem, spotted a mistake, or want a chapter added? Pick whichever way is
            easiest for you — we read every message.
          </p>

          <div
            className="flex flex-wrap justify-center gap-3 animate-fade-in-up"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#052e1c] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-emerald-600/25"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
            >
              <Mail className="h-4 w-4" />
              Email us
            </a>
          </div>
        </section>

        {/* ── Channels ── */}
        <section className="pb-16 md:pb-24">
          <ChannelCards />
        </section>

        {/* ── Behind the solutions ── */}
        <section className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Portrait */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-[420px]">
              {/* Glow behind the frame */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-indigo-600/20 blur-[70px]"
              />
              {/* Gradient frame */}
              <div
                className="relative rounded-[1.75rem] p-px"
                style={{
                  background:
                    'linear-gradient(150deg, rgba(129,140,248,0.55), rgba(167,139,250,0.18) 45%, rgba(56,189,248,0.45))',
                }}
              >
                <div className="relative rounded-[1.7rem] overflow-hidden bg-[#0d1324]">
                  <Image
                    src="/arif-ur-rahman.png"
                    alt="Arif Ur Rahman, who writes and replies to messages at SSC Solutions"
                    width={1086}
                    height={1448}
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="w-full h-auto object-cover"
                  />
                  {/* Bottom scrim so the badge stays readable */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
                    style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.92), transparent)' }}
                  />
                  {/* Floating status badge */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/12 bg-[#0a0f1e]/70 px-4 py-3 backdrop-blur-md">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 animate-ping" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white leading-tight">Arif Ur Rahman</p>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        Usually replies within hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/25 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Behind the solutions
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                You&apos;re messaging a person,{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)' }}
                >
                  not a helpdesk
                </span>
              </h2>

              <p className="text-slate-400 leading-relaxed mb-4">
                The solutions on this site are written, checked, and published by hand — so when you
                send a message, it goes straight to the person who can actually answer it or fix it.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Any subject, any chapter, any exercise. If something is unclear or wrong, say so —
                that feedback is what keeps the site accurate.
              </p>

              {/* Quick facts */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-9">
                {[
                  { icon: Clock, text: contactInfo.hours },
                  { icon: MapPin, text: contactInfo.location },
                  { icon: Sparkles, text: 'Always free' },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/10 px-3.5 py-2 rounded-lg"
                  >
                    <Icon className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                    {text}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-400/30 hover:border-emerald-400/50 text-emerald-300 font-semibold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message directly
                </a>
                <a
                  href={`tel:${contactInfo.phoneTel}`}
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Form + info ── */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 pb-16 md:pb-24">

          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="lg:col-span-2 flex flex-col gap-5">

            {/* Availability card */}
            <div
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-7"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
                Reach us
              </h3>
              <ul className="space-y-5">
                <InfoRow
                  icon={<Phone className="h-3.5 w-3.5" />}
                  accent="#38bdf8"
                  label="Phone & WhatsApp"
                >
                  <a href={`tel:${contactInfo.phoneTel}`} className="hover:text-white transition-colors duration-200">
                    {contactInfo.phoneDisplay}
                  </a>
                </InfoRow>
                <InfoRow
                  icon={<Mail className="h-3.5 w-3.5" />}
                  accent="#818cf8"
                  label="Email"
                >
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-white transition-colors duration-200 break-all"
                  >
                    {contactInfo.email}
                  </a>
                </InfoRow>
                <InfoRow
                  icon={<Clock className="h-3.5 w-3.5" />}
                  accent="#a78bfa"
                  label="Hours"
                >
                  {contactInfo.hours}
                </InfoRow>
                <InfoRow
                  icon={<MapPin className="h-3.5 w-3.5" />}
                  accent="#34d399"
                  label="Based in"
                >
                  {contactInfo.location}
                </InfoRow>
              </ul>
            </div>

            {/* Highlights card */}
            <div
              className="relative rounded-2xl border border-indigo-400/20 p-6 sm:p-7 overflow-hidden"
              style={{
                background:
                  'linear-gradient(140deg, rgba(99,102,241,0.14), rgba(167,139,250,0.06) 45%, rgba(56,189,248,0.08))',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -left-10 w-[240px] h-[240px] rounded-full bg-indigo-500/20 blur-[70px]"
              />
              <div className="relative z-10 space-y-6">
                {highlights.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-lg bg-white/8 border border-white/15 text-indigo-200 shrink-0">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{title}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* ── FAQ ── */}
        <section className="pb-16 md:pb-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/25 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Before you write
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
              Common{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)' }}
              >
                questions
              </span>
            </h2>
            <p className="text-slate-400">Chances are someone has already asked this one.</p>
          </div>
          <FaqAccordion />
        </section>

        {/* ── Closing CTA ── */}
        <section className="pb-16 md:pb-24">
          <div
            className="relative rounded-3xl border border-white/10 px-5 py-12 sm:px-8 sm:py-14 text-center overflow-hidden"
            style={{
              background:
                'linear-gradient(140deg, rgba(99,102,241,0.16), rgba(167,139,250,0.08) 50%, rgba(56,189,248,0.10))',
            }}
          >
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-indigo-500/20 blur-[90px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Don&apos;t wait until exam night
              </h2>
              <p className="text-slate-300/80 max-w-lg mx-auto mb-8">
                Browse the solutions already waiting for you — and message us the moment something
                doesn&apos;t click.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/subjects"
                  className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-indigo-700/40"
                >
                  Browse Subjects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in    { animation: fade-in    0.6s ease both; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease both; }
      `}</style>
    </div>
  )
}

function InfoRow({
  icon,
  accent,
  label,
  children,
}: {
  icon: React.ReactNode
  accent: string
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-3.5">
      <span
        className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
        style={{ background: `${accent}1a`, border: `1px solid ${accent}33`, color: accent }}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-1">{label}</p>
        <div className="text-sm text-slate-300">{children}</div>
      </div>
    </li>
  )
}
