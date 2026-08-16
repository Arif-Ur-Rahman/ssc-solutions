/**
 * Everything on the About page reads from here.
 * Edit these values — the page layout adapts automatically.
 * Contact details come from the shared source of truth in src/data/contactInfo.
 */
import { contactInfo, whatsappLink } from '@/data/contactInfo'

export interface TimelineEntry {
  period: string
  title: string
  org: string
  description: string
  accent: 'indigo' | 'violet' | 'sky' | 'emerald'
}

export interface SkillGroup {
  category: string
  accent: 'indigo' | 'violet' | 'sky' | 'emerald'
  items: string[]
}

export interface SocialLink {
  label: string
  handle: string
  href: string
  icon: 'mail' | 'github' | 'linkedin' | 'whatsapp'
  accent: 'indigo' | 'violet' | 'sky' | 'emerald'
}

export const profile = {
  name: 'Arif Ur Rahman',
  initials: 'AR',
  /** Drop a file in /public and set e.g. '/arif.jpg' to replace the monogram. */
  photo: '/arif-ur-rahman.png' as string,
  role: 'Founder & Educator',
  tagline: 'SSC Solutions',
  location: contactInfo.location,
  available: true,
  availableText: 'Open to collaboration',

  /** One-line hook under the name. */
  lead:
    'I build free, carefully-worked study resources so that every SSC student — regardless of coaching centre or budget — gets the same quality of explanation.',

  /** The “My Story” body. Each string is a paragraph. */
  story: [
    'I started SSC Solutions after watching too many capable students stall on the same handful of problems — not because the material was beyond them, but because nobody had shown them the middle steps. Textbook answers give you the destination; what students actually need is the road.',
    'So I began writing out full solutions the way I would explain them at a desk: every substitution shown, every assumption named, every shortcut justified rather than asserted. Higher Math, General Math, General Science, English — one chapter at a time, one exercise at a time.',
    'The site is still growing, and it is deliberately free. If a single student stops believing they are “bad at math” because a worked solution finally clicked, the whole thing has paid for itself.',
  ],

  /** Small facts shown in the “At a glance” card. */
  facts: [
    { label: 'Based in', value: contactInfo.location },
    { label: 'Focus', value: 'SSC Curriculum' },
    { label: 'Subjects', value: 'Math, Science, English' },
    { label: 'Available', value: contactInfo.hours },
    { label: 'Cost to students', value: 'Always free' },
  ],

  /** Hero stat strip. */
  stats: [
    { value: '4', label: 'Subjects Covered' },
    { value: '150+', label: 'Solutions Written' },
    { value: '100%', label: 'Free Forever' },
  ],
}

export const timeline: TimelineEntry[] = [
  {
    period: '2026 — Present',
    title: 'Founder & Author',
    org: 'SSC Solutions',
    description:
      'Building and writing the full solution library — Higher Math, General Math, General Science and English — alongside the platform that serves it.',
    accent: 'indigo',
  },
  {
    period: '2024 — 2026',
    title: 'Software Engineer',
    org: 'Crulon',
    description:
      'Designing and shipping production web applications, with a focus on interfaces that stay fast and readable as they grow.',
    accent: 'violet',
  },
  {
    period: '2022 — 2024',
    title: 'Private Tutor, Math & Science',
    org: 'Independent',
    description:
      'Taught SSC-level Mathematics and Science one-on-one. This is where the gap between “the answer” and “the explanation” became impossible to ignore.',
    accent: 'sky',
  },
  {
    period: '2021',
    title: 'Secondary School Certificate',
    org: 'Bangladesh Education Board',
    description:
      'Sat the exams that this entire site is built around — which is a large part of why I know exactly where students get stuck.',
    accent: 'emerald',
  },
]

export const skills: SkillGroup[] = [
  {
    category: 'Engineering',
    accent: 'indigo',
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    category: 'Content & Curriculum',
    accent: 'violet',
    items: ['Higher Mathematics', 'General Mathematics', 'General Science', 'English'],
  },
  {
    category: 'Tooling',
    accent: 'sky',
    items: ['Git', 'KaTeX', 'Figma', 'Vercel'],
  },
]

export const socials: SocialLink[] = [
  {
    label: 'Email',
    handle: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: 'mail',
    accent: 'indigo',
  },
  {
    label: 'WhatsApp',
    handle: contactInfo.phoneDisplay,
    href: whatsappLink(),
    icon: 'whatsapp',
    accent: 'emerald',
  },
  {
    label: 'GitHub',
    handle: '@Arif-Ur-Rahman',
    href: 'https://github.com/Arif-Ur-Rahman',
    icon: 'github',
    accent: 'violet',
  },
  {
    // TODO: replace with your real LinkedIn profile URL.
    label: 'LinkedIn',
    handle: 'Arif Ur Rahman',
    href: 'https://www.linkedin.com/in/',
    icon: 'linkedin',
    accent: 'sky',
  },
]
