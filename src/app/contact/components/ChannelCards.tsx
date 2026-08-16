'use client'

import { useState } from 'react'
import { MessageCircle, Phone, Mail, Copy, Check, ArrowUpRight } from 'lucide-react'
import { contactInfo, whatsappLink } from '@/data/contactInfo'

interface Channel {
  id: string
  icon: typeof Mail
  label: string
  title: string
  value: string
  /** Raw string put on the clipboard — may differ from the display value */
  copyValue: string
  href: string
  cta: string
  accent: string
  glow: string
}

const channels: Channel[] = [
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: 'Fastest reply',
    title: 'WhatsApp',
    value: contactInfo.phoneDisplay,
    copyValue: contactInfo.phoneTel,
    href: whatsappLink(),
    cta: 'Start a chat',
    accent: '#34d399',
    glow: 'rgba(52,211,153,0.15)',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Talk to us',
    title: 'Call directly',
    value: contactInfo.phoneDisplay,
    copyValue: contactInfo.phoneTel,
    href: `tel:${contactInfo.phoneTel}`,
    cta: 'Place a call',
    accent: '#38bdf8',
    glow: 'rgba(56,189,248,0.15)',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Detailed queries',
    title: 'Email',
    value: contactInfo.email,
    copyValue: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    cta: 'Write an email',
    accent: '#818cf8',
    glow: 'rgba(129,140,248,0.15)',
  },
]

export default function ChannelCards() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copy = async (channel: Channel) => {
    try {
      await navigator.clipboard.writeText(channel.copyValue)
      setCopiedId(channel.id)
      setTimeout(() => setCopiedId(null), 1800)
    } catch {
      // Clipboard blocked (insecure context or denied permission) — the link still works.
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {channels.map((channel, i) => {
        const Icon = channel.icon
        const copied = copiedId === channel.id

        return (
          <div
            key={channel.id}
            className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 animate-fade-in-up"
            style={{ backdropFilter: 'blur(8px)', animationDelay: `${120 + i * 90}ms` }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ boxShadow: `0 0 45px ${channel.glow}` }}
            />

            <div className="flex items-start justify-between mb-5">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{
                  background: `${channel.accent}1f`,
                  border: `1px solid ${channel.accent}4d`,
                  color: channel.accent,
                }}
              >
                <Icon className="h-5 w-5 text-current" />
              </div>
              <span
                className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{
                  background: `${channel.accent}14`,
                  border: `1px solid ${channel.accent}33`,
                  color: channel.accent,
                }}
              >
                {channel.label}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-white tracking-tight mb-1.5">
              {channel.title}
            </h3>
            <p className="text-sm text-slate-400 mb-6 break-all">{channel.value}</p>

            <div className="flex items-center gap-2">
              <a
                href={channel.href}
                target={channel.id === 'whatsapp' ? '_blank' : undefined}
                rel={channel.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                style={{
                  background: `${channel.accent}14`,
                  border: `1px solid ${channel.accent}33`,
                  color: channel.accent,
                }}
              >
                {channel.cta}
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <button
                type="button"
                onClick={() => copy(channel)}
                aria-label={`Copy ${channel.title} details`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 px-3 py-2 rounded-lg transition-all duration-200"
              >
                {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Bottom accent line on hover */}
            <div
              className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, transparent, ${channel.accent}66, transparent)` }}
            />
          </div>
        )
      })}
    </div>
  )
}
