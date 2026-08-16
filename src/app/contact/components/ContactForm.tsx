'use client'

import { useState } from 'react'
import { Send, MessageCircle, CheckCircle2, AlertCircle, RotateCcw } from 'lucide-react'
import { contactInfo, whatsappLink } from '@/data/contactInfo'

const topics = [
  'Solution request',
  'Report a mistake',
  'Suggest a subject or chapter',
  'Partnership / contribution',
  'Something else',
] as const

interface FormState {
  name: string
  email: string
  topic: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const emptyForm: FormState = { name: '', email: '', topic: topics[0], message: '' }

const MAX_MESSAGE = 800

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update = (field: keyof FormState) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.email.trim()) next.email = 'We need an email to reply to.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'That email address looks incomplete.'
    if (form.message.trim().length < 10) next.message = 'A few more words will help us help you.'
    return next
  }

  const composedBody = () =>
    `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate()
    if (Object.keys(found).length) {
      setErrors(found)
      return
    }
    const subject = `[SSC Solutions] ${form.topic} — ${form.name}`
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composedBody())}`
    setSent(true)
  }

  const handleWhatsApp = () => {
    const found = validate()
    if (Object.keys(found).length) {
      setErrors(found)
      return
    }
    window.open(whatsappLink(composedBody()), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const reset = () => {
    setForm(emptyForm)
    setErrors({})
    setSent(false)
  }

  const fieldClass = (hasError?: string) =>
    `w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-all duration-200 focus:outline-none focus:bg-white/[0.06] ${
      hasError
        ? 'border-rose-500/50 focus:border-rose-400/70'
        : 'border-white/10 focus:border-indigo-500/60'
    }`

  if (sent) {
    return (
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center overflow-hidden" style={{ backdropFilter: 'blur(8px)' }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-emerald-500/10 blur-[80px]"
        />
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/12 border border-emerald-400/30 text-emerald-400 mb-5">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
            Your message is ready to send
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto mb-7">
            We opened your mail app (or WhatsApp) with everything filled in — just hit send. If nothing
            opened, reach us directly at{' '}
            <a href={`mailto:${contactInfo.email}`} className="text-indigo-400 hover:text-indigo-300 break-all">
              {contactInfo.email}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-xl transition-all duration-200"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Write another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-9 overflow-hidden"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      {/* Card glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 w-[300px] h-[300px] rounded-full bg-indigo-600/10 blur-[90px]"
      />

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-1.5">Send us a message</h2>
        <p className="text-sm text-slate-500 mb-8">
          Fill this in and we&apos;ll get back to you — usually within a few hours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
              Your name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={e => update('name')(e.target.value)}
              placeholder="Rahim Uddin"
              className={fieldClass(errors.name)}
            />
            {errors.name && <FieldError message={errors.name} />}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={e => update('email')(e.target.value)}
              placeholder="you@example.com"
              className={fieldClass(errors.email)}
            />
            {errors.email && <FieldError message={errors.email} />}
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="topic" className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            What is this about?
          </label>
          <div className="flex flex-wrap gap-2">
            {topics.map(topic => {
              const active = form.topic === topic
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => update('topic')(topic)}
                  className={`text-xs font-medium px-3.5 py-2 rounded-lg border transition-all duration-200 ${
                    active
                      ? 'bg-indigo-500/15 border-indigo-400/45 text-indigo-300'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.07] hover:border-white/20'
                  }`}
                >
                  {topic}
                </button>
              )
            })}
          </div>
          {/* Keeps the choice reachable for assistive tech and native form semantics */}
          <input id="topic" type="hidden" name="topic" value={form.topic} readOnly />
        </div>

        <div className="mb-7">
          <div className="flex items-baseline justify-between mb-2">
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
              Message
            </label>
            <span className={`text-[11px] tabular-nums ${form.message.length > MAX_MESSAGE * 0.9 ? 'text-amber-400' : 'text-slate-600'}`}>
              {form.message.length}/{MAX_MESSAGE}
            </span>
          </div>
          <textarea
            id="message"
            rows={6}
            maxLength={MAX_MESSAGE}
            value={form.message}
            onChange={e => update('message')(e.target.value)}
            placeholder="Tell us which subject, chapter, or exercise you need help with…"
            className={`${fieldClass(errors.message)} resize-y leading-relaxed`}
          />
          {errors.message && <FieldError message={errors.message} />}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-700/30"
          >
            Send via email
            <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-xl border transition-all duration-200 active:scale-95 bg-emerald-500/10 hover:bg-emerald-500/15 border-emerald-400/30 hover:border-emerald-400/50 text-emerald-300"
          >
            <MessageCircle className="h-4 w-4" />
            Send on WhatsApp
          </button>
        </div>

        <p className="text-[11px] text-slate-600 mt-5 leading-relaxed">
          Both options open your own email app or WhatsApp with the message pre-filled — nothing is stored on this site.
        </p>
      </div>
    </form>
  )
}

function FieldError({ message }: { message: string }) {
  return (
    <p className="flex items-center gap-1.5 text-xs text-rose-400 mt-2">
      <AlertCircle className="h-3 w-3 shrink-0" />
      {message}
    </p>
  )
}
