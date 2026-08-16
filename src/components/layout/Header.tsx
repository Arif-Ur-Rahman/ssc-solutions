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
            ? 'bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        {/* Top accent beam — mirrors the Hero */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-400/30 group-hover:bg-indigo-600/30 transition-colors duration-200">
                <BookOpen className="h-5 w-5 text-indigo-400" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                SSC{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #818cf8, #38bdf8)',
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
                  className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-700/30"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
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
          className={`absolute top-16 left-0 right-0 bg-[#0d1324]/95 border-b border-white/10 backdrop-blur-xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/login"
                className="px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all duration-150 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 text-center shadow-lg shadow-indigo-700/30"
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