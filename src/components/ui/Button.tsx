'use client'

import Link from 'next/link'
import SearchBar from '@/components/ui/SearchBar'

export default function HeroSection() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
    // Implement search functionality
  }

  return (
    <section className="bg-ink textured py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-medium text-gold mb-4">
          Your Complete SSC Study Companion
        </h1>
        <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
          Access comprehensive solutions, study materials, and resources for all SSC subjects
        </p>

        <div className="max-w-2xl mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <Link
            href="/subjects"
            className="bg-gold text-ink px-8 py-3 rounded-lg hover:bg-gold-soft transition"
          >
            Browse Subjects
          </Link>
          <Link
            href="/about"
            className="border border-gold/40 text-gold px-8 py-3 rounded-lg hover:bg-gold/10 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}