import { BookOpen, Video, FileText, HelpCircle, Award, Users } from 'lucide-react'
import { Feature } from '@/types'

const features: Feature[] = [
  {
    icon: BookOpen,
    title: 'Comprehensive Solutions',
    description: 'Step-by-step solutions for every textbook problem, explained clearly so concepts stick.',
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Engaging video walkthroughs that break down the most complex topics visually.',
  },
  {
    icon: FileText,
    title: 'Practice Papers',
    description: "Previous years' question papers with full solutions to sharpen exam readiness.",
  },
  {
    icon: HelpCircle,
    title: 'Doubt Clearing',
    description: 'Get answers from expert teachers — no question is too small or too hard.',
  },
  {
    icon: Award,
    title: 'Study Tips',
    description: 'Proven study strategies and exam prep techniques curated by top educators.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with thousands of fellow students, share notes, and grow together.',
  },
]

// Each card gets a unique accent colour from the Hero palette
const accents = [
  { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.3)', icon: '#818cf8' },   // indigo
  { bg: 'rgba(56,189,248,0.10)', border: 'rgba(56,189,248,0.25)', icon: '#38bdf8' },   // sky
  { bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.3)', icon: '#a78bfa' },  // violet
  { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.3)', icon: '#818cf8' },
  { bg: 'rgba(56,189,248,0.10)', border: 'rgba(56,189,248,0.25)', icon: '#38bdf8' },
  { bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.3)', icon: '#a78bfa' },
]

export default function FeaturesSection() {
  return (
    <section className="relative bg-[#0a0f1e] py-28 overflow-hidden">

      {/* Background glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-indigo-700/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[90px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Section divider lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/25 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Everything you need
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Choose{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #38bdf8 100%)' }}
            >
              SSC Solutions?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A complete toolkit designed to help every SSC student study smarter and score higher.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const IconComponent = feature.icon
            const accent = accents[i % accents.length]
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 0 40px ${accent.icon}18` }}
                />

                {/* Icon - Fixed: Set color on parent and use currentColor */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-transform duration-300 group-hover:-translate-y-0.5"
                  style={{ 
                    background: accent.bg, 
                    border: `1px solid ${accent.border}`,
                    color: accent.icon // Set color on the parent div
                  }}
                >
                  <IconComponent className="h-5 w-5 text-current" /> {/* Uses parent's color */}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent.icon}60, transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}