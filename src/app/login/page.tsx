'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Loader2, Lock, Mail } from 'lucide-react'
import AuthShell from '@/components/auth/AuthShell'
import AuthField from '@/components/auth/AuthField'

interface FormState {
  email: string
  password: string
}

type Errors = Partial<Record<keyof FormState | 'form', string>>

export default function LoginPage() {
  const [form, setForm] = useState<FormState>({ email: '', password: '' })
  const [remember, setRemember] = useState(true)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const update = (field: keyof FormState) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined, form: undefined }))
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (!form.email.trim()) next.email = 'Enter the email you signed up with.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'That email address looks incomplete.'
    if (!form.password) next.password = 'Enter your password.'
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate()
    if (Object.keys(found).length) {
      setErrors(found)
      return
    }

    setSubmitting(true)
    // TODO: replace with a real sign-in request once the auth API exists.
    await new Promise(resolve => setTimeout(resolve, 700))
    setSubmitting(false)
    setDone(true)
  }

  if (done) {
    return (
      <AuthShell
        badge="Welcome back"
        title="You're signed in"
        subtitle="Authentication isn't wired to a backend yet — this screen confirms the flow works end to end."
        footer={
          <>
            Not you?{' '}
            <button onClick={() => setDone(false)} className="text-indigo-400 hover:text-indigo-300 font-semibold">
              Use a different account
            </button>
          </>
        }
      >
        <div className="text-center py-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/12 border border-emerald-400/30 text-emerald-400 mb-5">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-7">
            Signed in as <span className="text-white font-medium break-all">{form.email}</span>
          </p>
          <Link
            href="/subjects"
            className="group inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-700/30"
          >
            Continue to subjects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell
      badge="Welcome back"
      title="Log in to your account"
      subtitle="Pick up your solutions and bookmarks right where you left them."
      footer={
        <>
          New here?{' '}
          <Link href="/signup" className="text-indigo-400 hover:text-indigo-300 font-semibold">
            Create a free account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <AuthField
          id="email"
          label="Email address"
          type="email"
          value={form.email}
          onChange={update('email')}
          placeholder="you@example.com"
          icon={<Mail />}
          error={errors.email}
          autoComplete="email"
        />

        <AuthField
          id="password"
          label="Password"
          value={form.password}
          onChange={update('password')}
          placeholder="••••••••"
          icon={<Lock />}
          error={errors.password}
          autoComplete="current-password"
          revealable
          hint={
            <Link href="/forgot-password" className="text-xs font-medium text-indigo-400 hover:text-indigo-300">
              Forgot password?
            </Link>
          }
        />

        <label className="flex items-center gap-2.5 cursor-pointer select-none w-fit">
          <input
            type="checkbox"
            checked={remember}
            onChange={e => setRemember(e.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-white/[0.06] accent-indigo-500 cursor-pointer"
          />
          <span className="text-sm text-slate-400">Keep me signed in</span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 active:scale-95 disabled:opacity-60 disabled:active:scale-100 text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-700/30"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing you in…
            </>
          ) : (
            <>
              Log in
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </>
          )}
        </button>
      </form>
    </AuthShell>
  )
}
