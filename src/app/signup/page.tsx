'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { AlertCircle, ArrowRight, CheckCircle2, GraduationCap, Loader2, Lock, Mail, User } from 'lucide-react'
import AuthShell from '@/components/auth/AuthShell'
import AuthField from '@/components/auth/AuthField'

const classOptions = ['Class 9', 'Class 10', 'SSC candidate', 'Teacher / guardian'] as const

interface FormState {
  name: string
  email: string
  password: string
  confirm: string
  level: string
}

type Errors = Partial<Record<keyof FormState | 'terms', string>>

const emptyForm: FormState = { name: '', email: '', password: '', confirm: '', level: classOptions[1] }

/** 0–4: how many strength criteria the password satisfies. */
function scorePassword(password: string) {
  if (!password) return 0
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
  if (/\d/.test(password) || /[^A-Za-z0-9]/.test(password)) score++
  return Math.min(score, 4)
}

const strengthMeta = [
  { label: 'Too short', color: 'bg-slate-600', text: 'text-slate-500' },
  { label: 'Weak', color: 'bg-rose-500', text: 'text-rose-400' },
  { label: 'Fair', color: 'bg-amber-500', text: 'text-amber-400' },
  { label: 'Good', color: 'bg-sky-500', text: 'text-sky-400' },
  { label: 'Strong', color: 'bg-emerald-500', text: 'text-emerald-400' },
]

export default function SignupPage() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [accepted, setAccepted] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const strength = useMemo(() => scorePassword(form.password), [form.password])

  const update = (field: keyof FormState) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const validate = (): Errors => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    else if (form.name.trim().length < 2) next.name = 'That name looks a little short.'

    if (!form.email.trim()) next.email = 'We need an email to create your account.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'That email address looks incomplete.'

    if (form.password.length < 8) next.password = 'Use at least 8 characters.'
    if (!form.confirm) next.confirm = 'Type your password once more.'
    else if (form.confirm !== form.password) next.confirm = 'The two passwords do not match.'

    if (!accepted) next.terms = 'Please accept the terms to continue.'
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
    // TODO: replace with a real account-creation request once the auth API exists.
    await new Promise(resolve => setTimeout(resolve, 800))
    setSubmitting(false)
    setDone(true)
  }

  if (done) {
    return (
      <AuthShell
        badge="Account created"
        title={`Welcome aboard, ${form.name.trim().split(' ')[0]}!`}
        subtitle="Accounts aren't stored yet — this screen confirms the sign-up flow works end to end."
        footer={
          <>
            Wrong details?{' '}
            <button
              onClick={() => {
                setForm(emptyForm)
                setAccepted(false)
                setDone(false)
              }}
              className="text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Start over
            </button>
          </>
        }
      >
        <div className="text-center py-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/12 border border-emerald-400/30 text-emerald-400 mb-5">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-7">
            We&apos;ll send a confirmation to{' '}
            <span className="text-white font-medium break-all">{form.email}</span>. Meanwhile, your solutions are
            ready to browse.
          </p>
          <Link
            href="/subjects"
            className="group inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-700/30"
          >
            Start studying
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell
      badge="Free forever"
      title="Create your account"
      subtitle="One account for every subject, chapter and saved solution."
      footer={
        <>
          Already have an account?{' '}
          <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-semibold">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <AuthField
          id="name"
          label="Full name"
          value={form.name}
          onChange={update('name')}
          placeholder="Rahim Uddin"
          icon={<User />}
          error={errors.name}
          autoComplete="name"
        />

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

        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            <GraduationCap className="h-3.5 w-3.5" />
            I am studying in
          </label>
          <div className="flex flex-wrap gap-2">
            {classOptions.map(option => {
              const active = form.level === option
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => update('level')(option)}
                  aria-pressed={active}
                  className={`text-xs font-medium px-3.5 py-2 rounded-lg border transition-all duration-200 ${
                    active
                      ? 'bg-indigo-500/15 border-indigo-400/45 text-indigo-300'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.07] hover:border-white/20'
                  }`}
                >
                  {option}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <AuthField
            id="password"
            label="Password"
            value={form.password}
            onChange={update('password')}
            placeholder="At least 8 characters"
            icon={<Lock />}
            error={errors.password}
            autoComplete="new-password"
            revealable
          />

          {form.password && !errors.password && (
            <div className="mt-3">
              <div className="flex gap-1.5 mb-1.5">
                {[1, 2, 3, 4].map(step => (
                  <span
                    key={step}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      step <= strength ? strengthMeta[strength].color : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
              <p className={`text-[11px] font-medium ${strengthMeta[strength].text}`}>
                {strengthMeta[strength].label} password
                {strength < 3 && ' — mix upper and lower case, numbers or symbols'}
              </p>
            </div>
          )}
        </div>

        <AuthField
          id="confirm"
          label="Confirm password"
          value={form.confirm}
          onChange={update('confirm')}
          placeholder="Repeat your password"
          icon={<Lock />}
          error={errors.confirm}
          autoComplete="new-password"
          revealable
        />

        <div>
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={accepted}
              onChange={e => {
                setAccepted(e.target.checked)
                setErrors(prev => ({ ...prev, terms: undefined }))
              }}
              className="h-4 w-4 mt-0.5 shrink-0 rounded border-white/20 bg-white/[0.06] accent-indigo-500 cursor-pointer"
            />
            <span className="text-sm text-slate-400 leading-relaxed">
              I agree to the{' '}
              <Link href="/terms" className="text-indigo-400 hover:text-indigo-300">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.terms && (
            <p className="flex items-center gap-1.5 text-xs text-rose-400 mt-2">
              <AlertCircle className="h-3 w-3 shrink-0" />
              {errors.terms}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 active:scale-95 disabled:opacity-60 disabled:active:scale-100 text-white text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-700/30"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating your account…
            </>
          ) : (
            <>
              Create free account
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </>
          )}
        </button>
      </form>
    </AuthShell>
  )
}
