import SubjectCard from '@/components/ui/SubjectCard'
import { subjectsData } from '@/data/subjectsData'

export default function PopularSubjects() {
  const popularSubjects = subjectsData.slice(0, 3)
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Popular Subjects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our most accessed subjects with complete solutions and study materials
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </section>
  )
}