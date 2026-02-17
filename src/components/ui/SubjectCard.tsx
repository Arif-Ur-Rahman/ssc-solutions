import Link from 'next/link'
import { Book, ChevronRight } from 'lucide-react'
import { Subject } from '@/types'

interface SubjectCardProps {
  subject: Subject;
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <Link href={`/subjects/${subject.slug}`}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-primary-100 rounded-lg">
            <Book className="h-6 w-6 text-primary-600" />
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
        <p className="text-gray-600 mb-4">{subject.description}</p>
        <div className="text-sm text-primary-600">
          {subject.chapters} Chapters
        </div>
      </div>
    </Link>
  )
}