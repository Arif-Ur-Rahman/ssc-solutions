'use client'

import { useState } from 'react'
import { AlertCircle, Eye, EyeOff } from 'lucide-react'

interface AuthFieldProps {
  id: string
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  icon: React.ReactNode
  error?: string
  autoComplete?: string
  /** Renders a show/hide toggle and swaps the input type. */
  revealable?: boolean
  hint?: React.ReactNode
}

export default function AuthField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon,
  error,
  autoComplete,
  revealable = false,
  hint,
}: AuthFieldProps) {
  const [revealed, setRevealed] = useState(false)
  const inputType = revealable ? (revealed ? 'text' : 'password') : type

  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
          {label}
        </label>
        {hint}
      </div>

      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 [&>svg]:h-4 [&>svg]:w-4">
          {icon}
        </span>

        <input
          id={id}
          name={id}
          type={inputType}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full bg-white/[0.04] border rounded-xl pl-11 ${
            revealable ? 'pr-11' : 'pr-4'
          } py-3 text-sm text-white placeholder:text-slate-600 transition-all duration-200 focus:outline-none focus:bg-white/[0.06] ${
            error
              ? 'border-rose-500/50 focus:border-rose-400/70'
              : 'border-white/10 focus:border-indigo-500/60'
          }`}
        />

        {revealable && (
          <button
            type="button"
            onClick={() => setRevealed(r => !r)}
            aria-label={revealed ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1 rounded-md transition-colors duration-200"
          >
            {revealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
      </div>

      {error && (
        <p id={`${id}-error`} className="flex items-center gap-1.5 text-xs text-rose-400 mt-2">
          <AlertCircle className="h-3 w-3 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}
