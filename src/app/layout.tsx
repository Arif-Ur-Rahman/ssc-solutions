import type { Metadata } from 'next'
import {
  Cormorant_Upright,
  Open_Sans,
  Rancho,
  Kalam,
  Noto_Serif_Bengali,
  Noto_Sans_Bengali,
} from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

/**
 * Display serif for headings. Applied to h1-h4 in globals.css, so most
 * headings pick it up without a utility class.
 */
const displaySerif = Cormorant_Upright({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display-serif',
  display: 'swap',
})

/** Body and UI face: everything that isn't a heading or a flourish. */
const bodySans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body-sans',
  display: 'swap',
})

/*
 * Bengali companions. Neither Cormorant Upright nor Open Sans carries Bengali
 * glyphs, so without these the subject pages fall back to whatever serif the
 * browser happens to have. They sit after the Latin faces in the stacks in
 * globals.css, and the browser picks per glyph: Latin from Cormorant/Open Sans,
 * Bengali from these.
 */
const bengaliSerif = Noto_Serif_Bengali({
  subsets: ['bengali'],
  variable: '--font-bengali-serif',
  display: 'swap',
})

const bengaliSans = Noto_Sans_Bengali({
  subsets: ['bengali'],
  variable: '--font-bengali-sans',
  display: 'swap',
})

/** Cursive flourish, reserved for small decorative labels. */
const scriptCursive = Rancho({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script-cursive',
  display: 'swap',
})

/**
 * Handwriting face for model-answer bodies, so a written piece reads as
 * something a student wrote rather than as UI text.
 * To try a different hand, swap `Kalam` for another Google font here and
 * update the import above — nothing else needs to change.
 */
const handwriting = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-handwriting',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SSC Solutions - Complete Study Resource for SSC Students',
  description: 'Access comprehensive solutions, study materials, and resources for all SSC subjects',
  keywords: 'SSC, solutions, study materials, education, Bangladesh, students',
  authors: [{ name: 'SSC Solutions Team' }],
  openGraph: {
    title: 'SSC Solutions',
    description: 'Complete study companion for SSC students',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${displaySerif.variable} ${bodySans.variable} ${scriptCursive.variable} ${handwriting.variable} ${bengaliSerif.variable} ${bengaliSans.variable} font-sans`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}