import { BookOpen, Video, FileText, HelpCircle, Award, Users } from 'lucide-react'
import { Feature } from '@/types'

const features: Feature[] = [
  {
    icon: BookOpen,
    title: 'Comprehensive Solutions',
    description: 'Step-by-step solutions for all textbook problems'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Engaging video explanations for complex topics'
  },
  {
    icon: FileText,
    title: 'Practice Papers',
    description: 'Previous years question papers with solutions'
  },
  {
    icon: HelpCircle,
    title: 'Doubt Clearing',
    description: 'Get your doubts answered by expert teachers'
  },
  {
    icon: Award,
    title: 'Study Tips',
    description: 'Effective study strategies and exam preparation tips'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with fellow students and share knowledge'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SSC Solutions?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-3 bg-primary-100 rounded-full mb-4">
                  <IconComponent className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}