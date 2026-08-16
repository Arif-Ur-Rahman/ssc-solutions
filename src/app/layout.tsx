import type { Metadata } from 'next'
import { Inter, Kalam } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} ${handwriting.variable}`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}