import Link from 'next/link'
import { Search } from 'lucide-react'

export default function HeroSection() {
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
          <div className="flex items-center bg-white rounded-lg shadow-md p-2">
            <Search className="h-5 w-5 text-gray-400 ml-2" />
            <input
              type="text"
              placeholder="Search for subjects, chapters, or topics..."
              className="flex-1 px-4 py-2 focus:outline-none"
            />
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              Search
            </button>
          </div>
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