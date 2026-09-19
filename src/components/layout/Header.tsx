'use client'

import Link from 'next/link'
import { BookOpen, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NavItem {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Subjects', href: '/subjects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ink/80 backdrop-blur-xl border-b border-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-gold/5'
        }`}
      >
        {/* Top accent beam — mirrors the Hero */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gold-deep/20 border border-gold/30 group-hover:bg-gold-deep/30 transition-colors duration-200">
                <BookOpen className="h-5 w-5 text-gold" />
              </div>
              <span className="font-display text-2xl font-semibold text-parchment tracking-[0.01em]">
                SSC{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #dcca87, #b8a46a)',
                  }}
                >
                  Solutions
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-[0.8125rem] font-bold tracking-[0.06em] uppercase text-muted hover:text-gold rounded-lg hover:bg-parchment/5 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="text-[0.8125rem] font-bold tracking-[0.06em] uppercase text-muted hover:text-gold transition-colors duration-200"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-1.5 bg-gold-deep hover:bg-gold active:scale-95 text-ink text-[0.8125rem] font-bold tracking-[0.06em] uppercase px-5 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-gold-deep/30"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-parchment/5 border border-gold/10 text-muted hover:text-parchment hover:bg-parchment/10 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-surface/95 border-b border-gold/10 backdrop-blur-xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-muted hover:text-gold hover:bg-parchment/5 rounded-xl text-sm font-bold tracking-[0.06em] uppercase transition-all duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-3 pt-3 border-t border-gold/10 flex flex-col gap-2">
              <Link
                href="/login"
                className="px-4 py-3 text-muted hover:text-gold hover:bg-parchment/5 rounded-xl text-sm font-bold tracking-[0.06em] uppercase transition-all duration-150 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="px-4 py-3 bg-gold-deep hover:bg-gold text-ink font-semibold rounded-xl transition-all duration-200 text-center shadow-lg shadow-gold-deep/30"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        header { will-change: background, border-color; }
      `}</style>
    </>
  )
}