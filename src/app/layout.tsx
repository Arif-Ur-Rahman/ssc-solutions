import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}