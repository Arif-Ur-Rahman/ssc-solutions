'use client'

import Link from 'next/link'
import SearchBar from '@/components/ui/SearchBar'

export default function HeroSection() {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
    // Implement search functionality
  }

  return (
    <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Your Complete SSC Study Companion
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Access comprehensive solutions, study materials, and resources for all SSC subjects
        </p>

        <div className="max-w-2xl mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <Link
            href="/subjects"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            Browse Subjects
          </Link>
          <Link
            href="/about"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}