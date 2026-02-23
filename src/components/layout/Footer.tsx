import Link from 'next/link'
import { BookOpen, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

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
    <footer className="relative bg-[#060912] overflow-hidden">

      {/* Background atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-indigo-700/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Top divider beam */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-400/30 group-hover:bg-indigo-600/30 transition-colors duration-200">
                <BookOpen className="h-5 w-5 text-indigo-400" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                SSC{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #818cf8, #38bdf8)' }}
                >
                  Solutions
                </span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your complete study companion for SSC examination success — solutions, materials, and community, all in one place.
            </p>
            {/* CTA nudge */}
            <Link
              href="/subjects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/15 border border-indigo-400/25 hover:border-indigo-400/40 px-4 py-2 rounded-lg transition-all duration-200"
            >
              Browse Subjects
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              Subjects
            </h4>
            <ul className="space-y-3">
              {subjectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@sscsolutions.com"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <span className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-400/20 group-hover:bg-indigo-500/20 transition-colors shrink-0">
                    <Mail className="h-3.5 w-3.5 text-indigo-400" />
                  </span>
                  support@sscsolutions.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801234567890"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <span className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-400/20 group-hover:bg-sky-500/20 transition-colors shrink-0">
                    <Phone className="h-3.5 w-3.5 text-sky-400" />
                  </span>
                  +880 1234-567890
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-400/20 shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-violet-400" />
                  </span>
                  Dhaka, Bangladesh
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} SSC Solutions. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            Built for students, by educators.
          </p>
        </div>
      </div>
    </footer>
  )
}