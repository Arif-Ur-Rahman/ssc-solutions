'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'How quickly will I get a reply?',
    a: 'WhatsApp messages are usually answered within a couple of hours during working hours. Emails may take up to one working day.',
  },
  {
    q: 'Can I request a solution that is not on the site yet?',
    a: 'Absolutely. Send the subject, chapter and exercise number — requested solutions are prioritised when several students ask for the same one.',
  },
  {
    q: 'I found a mistake in a solution. What should I do?',
    a: 'Please tell us the exact page and problem number. Corrections are verified and published quickly, and we credit the student who reported it.',
  },
  {
    q: 'Do you charge for any of this?',
    a: 'No. Every solution and study material on SSC Solutions is free for students.',
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div
            key={faq.q}
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? 'border-indigo-400/25 bg-white/[0.05]'
                : 'border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
            >
              <span className={`text-sm font-semibold tracking-tight transition-colors duration-200 ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                {faq.q}
              </span>
              <span
                className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-lg border transition-all duration-300 ${
                  isOpen
                    ? 'bg-indigo-500/15 border-indigo-400/40 text-indigo-300 rotate-45'
                    : 'bg-white/[0.04] border-white/10 text-slate-500'
                }`}
              >
                <Plus className="h-3.5 w-3.5" />
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-5 sm:px-6 pb-5 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
