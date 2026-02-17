import { notFound } from 'next/navigation'
import { subjectsData } from '@/data/subjectsData'
import { BookOpen } from 'lucide-react'

interface SubjectPageProps {
  params: {
    subject: string
  }
}

export default function SubjectPage({ params }: SubjectPageProps) {
  const subject = subjectsData.find(s => s.slug === params.subject)

  if (!subject) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-primary-100 rounded-lg">
          <BookOpen className="h-8 w-8 text-primary-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{subject.name}</h1>
          <p className="text-gray-600">{subject.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Chapters will be mapped here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Chapter 1: Introduction</h2>
          <p className="text-gray-600 mb-4">Basic concepts and fundamentals</p>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            View Solutions →
          </button>
        </div>
        {/* Add more chapters dynamically */}
      </div>
    </div>
  )
}