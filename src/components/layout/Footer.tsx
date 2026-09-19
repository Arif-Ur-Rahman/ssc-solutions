import Link from 'next/link'
import { BookOpen, Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react'
import { contactInfo, whatsappLink } from '@/data/contactInfo'

interface FooterLink {
  label: string
  href: string
}

const quickLinks: FooterLink[] = [
  { label: 'Subjects', href: '/subjects' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
]

const subjectLinks: FooterLink[] = [
  { label: 'Mathematics', href: '/subjects/mathematics' },
  { label: 'Science', href: '/subjects/science' },
  { label: 'English', href: '/subjects/english' },
  { label: 'Bangla', href: '/subjects/bangla' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="textured relative bg-ink-deep overflow-hidden">

      {/* Background atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-gold-deep/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Top divider beam */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gold-deep/20 border border-gold/30 group-hover:bg-gold-deep/30 transition-colors duration-200">
                <BookOpen className="h-5 w-5 text-gold" />
              </div>
              <span className="text-lg font-bold text-parchment tracking-tight">
                SSC{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #dcca87, #b8a46a)' }}
                >
                  Solutions
                </span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Your complete study companion for SSC examination success — solutions, materials, and community, all in one place.
            </p>
            {/* CTA nudge */}
            <Link
              href="/subjects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-soft bg-gold/10 hover:bg-gold/15 border border-gold/25 hover:border-gold/40 px-4 py-2 rounded-lg transition-all duration-200"
            >
              Browse Subjects
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-faint mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-parchment transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-faint mb-5">
              Subjects
            </h4>
            <ul className="space-y-3">
              {subjectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-parchment transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-faint mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-sm text-muted hover:text-parchment transition-colors duration-200 group"
                >
                  <span className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors shrink-0">
                    <Mail className="h-3.5 w-3.5 text-gold" />
                  </span>
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phoneTel}`}
                  className="flex items-start gap-3 text-sm text-muted hover:text-parchment transition-colors duration-200 group"
                >
                  <span className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors shrink-0">
                    <Phone className="h-3.5 w-3.5 text-gold" />
                  </span>
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-muted hover:text-parchment transition-colors duration-200 group"
                >
                  <span className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors shrink-0">
                    <MessageCircle className="h-3.5 w-3.5 text-gold" />
                  </span>
                  WhatsApp us
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-gold/10 border border-gold/20 shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-gold" />
                  </span>
                  {contactInfo.location}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-faint">
            &copy; {currentYear} SSC Solutions. All rights reserved.
          </p>
          <p className="text-xs text-faint">
            Built for students, by educators.
          </p>
        </div>
      </div>
    </footer>
  )
}