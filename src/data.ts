// Edit this file to make the site yours. Everything on the page comes from here.

export interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  repo?: string
}

export interface Job {
  role: string
  company: string
  period: string
  summary: string
}

export interface SocialLink {
  label: string
  href: string
}

export const profile = {
  name: 'Your Name',
  initials: 'YN',
  title: 'Software Engineer',
  location: 'City, Country',
  tagline: 'I build fast, accessible web experiences and the systems behind them.',
  bio: [
    'Write two or three sentences here about who you are, what you do, and what you care about in your work.',
    'Add a second paragraph about what you are focused on right now, or what kind of opportunities you are looking for.',
  ],
  email: 'you@example.com',
  resumeUrl: '', // e.g. '/resume.pdf' after placing the file in /public
}

export const skills: string[] = [
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'SQL',
  'Azure',
  'Git',
  'CI/CD',
]

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'One or two lines on what this project does, the problem it solves, and your role in it.',
    tags: ['React', 'TypeScript'],
    link: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Project Two',
    description: 'Describe the outcome: users served, performance gained, or what you learned building it.',
    tags: ['Node.js', 'PostgreSQL'],
    repo: 'https://github.com/',
  },
  {
    title: 'Project Three',
    description: 'A side project, open-source contribution, or school project you are proud of.',
    tags: ['Python', 'Azure'],
    link: 'https://example.com',
  },
]

export const experience: Job[] = [
  {
    role: 'Job Title',
    company: 'Company Name',
    period: '2024 — Present',
    summary: 'What you own, what you shipped, and the impact it had.',
  },
  {
    role: 'Previous Role',
    company: 'Previous Company',
    period: '2021 — 2024',
    summary: 'Key responsibilities and one notable accomplishment.',
  },
]

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]
