export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
] as const

export const resume = {
  href: '/resume.pdf',
  fileName: 'Justin_Tong_Resume.pdf',
  updated: 'Add the latest PDF to app/public/resume.pdf',
} as const

export const education = {
  school: 'University of Central Florida',
  degree: 'B.S. in Computer Science',
  expectedGraduation: 'December 2026',
  coursework: [
    'Data Structures and Algorithms',
    'Computer Science I and II',
    'Object-Oriented Programming',
    'Systems Software',
    'Database Systems',
    'Discrete Structures',
    'Operating Systems',
    'Software Engineering',
  ],
} as const

export const aboutHighlights = [
  { label: 'Location', value: 'Orlando, FL' },
  { label: 'School', value: 'University of Central Florida' },
  { label: 'Job', value: 'Command Post Technologies'},
  { label: 'Focus', value: 'AI / ML Integrated Solutions'},
  { label: 'Focus', value: 'Full-Stack Software Engineering'},
  { label: 'Focus', value: 'Video Game Developement'},
] as const

export const aboutSummary = [
  'My name is Justin Tong, and I am a passionate software engineer and Computer Science student at the University of Central Florida.',
  'I specialize in building AI-driven systems and exploring how stat-of-the-art technology can be leveraged to solve today\'s problems.',
  'I enjoy building practical tools across AI, full-stack software, and games, especially projects that combine technical depth with a clear user experience.',
] as const

export const aboutPhotoCards = [
  {
    caption: 'Hackathons, side projects, and collaborative builds.',
    accent: 'from-cyan-400/35 via-blue-500/20 to-slate-950',
  },
  {
    caption: 'Game development, pixel art, and interactive systems.',
    accent: 'from-amber-400/35 via-rose-500/20 to-slate-950',
  },
  {
    caption: 'Research, campus life, and UCF engineering community.',
    accent: 'from-emerald-400/35 via-cyan-500/20 to-slate-950',
  },
  {
    caption: 'Fitness, learning routines, and projects outside class.',
    accent: 'from-violet-400/35 via-fuchsia-500/20 to-slate-950',
  },
] as const

export const movementStops = [
  {
    city: 'Lowell',
    state: 'MA',
    title: 'Starting in Massachusetts',
    detail:
      'Lowell is the first point in the story: the early backdrop before moving through New England and eventually down to Florida.',
    coordinates: { x: 67, y: 18 },
    accent: 'from-cyan-300 to-emerald-300',
  },
  {
    city: 'Dover',
    state: 'NH',
    title: 'A New Hampshire chapter',
    detail:
      'Dover adds the next chapter, a move north and a reminder that home can be a sequence of places rather than one fixed point.',
    coordinates: { x: 74, y: 12 },
    accent: 'from-amber-300 to-rose-300',
  },
  {
    city: 'Bradenton',
    state: 'FL',
    title: 'Finding Florida rhythm',
    detail:
      'Bradenton marks the move into Florida, where school, community, and long-term direction started to feel more connected.',
    coordinates: { x: 44, y: 82 },
    accent: 'from-violet-300 to-cyan-300',
  },
  {
    city: 'Orlando',
    state: 'FL',
    title: 'Building at UCF',
    detail:
      'Orlando is where computer science became the main thread through coursework, projects, research, and practical software work.',
    coordinates: { x: 58, y: 73 },
    accent: 'from-violet-300 to-cyan-300',
  },
] as const

export const experienceItems = [
  {
    role: 'AI / ML Solutions Engineering Intern',
    company: 'Command Post Technologies',
    period: 'Jun 2026 - Present',
    description:
      '-',
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'Urban Networks, Mobility and Dynamics Lab @ University of Central Florida',
    period: 'Jan 2025 - Apr 2026',
    description:
      'Conducted traffic data research by engineering digital tools to enhance traffic management and safety. Processed raw, large-scale Florida traffic data into quality datasets for ML. Developed, trained, and tested deep-learning predictive models (PyTorch) with >89% accuracy for hurricane evacuation traffic speeds. Built an AI-powered Traffic Chatbot LLM with SQL-RAG, Graph-RAG, and tool-calling (LangChain, Ollama) to query data and models with natural language. Co-authored academic papers for research work.',
  },
  {
    role: 'AI Evaluator',
    company: 'Outlier AI',
    period: 'Nov 2024 - Dec 2024',
    description:
      'Supported generative AI development by creating and refining high-quality training data for LLMs. Evaluated model outputs for accuracy and safety with Reinforcement Learning from Human Feedback (RLHF). Engineered training prompts and solutions to fine tune models.',
  },
] as const

export const projects = [
    {
    title: 'PEGASUS Traffic Chatbot',
    description:
      '',
    tech: ['Ollama', 'Neo4j', 'PostgreSQL', 'LangChain'],
    github: 'https://github.com/justintong/course-planner',
    imageLabel: 'Scheduling dashboard',
    imageAccent: 'from-cyan-400/40 via-blue-500/20 to-slate-950',
    playable: false,
  },
  {
    title: 'Smart Plant Monitoring System',
    description:
      '',
    tech: ['React Native', 'NestJS', 'Supabase', 'Jira'],
    github: 'https://github.com/justintong/course-planner',
    imageLabel: 'Scheduling dashboard',
    imageAccent: 'from-cyan-400/40 via-blue-500/20 to-slate-950',
    playable: false,
  },
  {
    title: 'Gym Buddy Matcher for RWC',
    description:
      '',
    tech: ['React', 'Express', 'MongoDB', 'Flutter'],
    github: 'https://github.com/justintong/ds-visualizer',
    imageLabel: 'Algorithm playground',
    imageAccent: 'from-emerald-400/40 via-cyan-500/20 to-slate-950',
    playable: false,
  },
  {
    title: 'Hand Cannon Havoc',
    description:
      'A lightweight dashboard for tracking spending categories, monthly goals, and transaction trends.',
    tech: ['Unity', 'C#', 'Aseprite'],
    github: 'https://github.com/justintong/finance-tracker',
    imageLabel: 'Analytics snapshot',
    imageAccent: 'from-amber-400/40 via-orange-500/20 to-slate-950',
    playable: true,
  },
  {
    title: 'Portfolio Website',
    description:
      '-',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/justintong/portfolio',
    imageLabel: 'Portfolio system',
    imageAccent: 'from-rose-400/40 via-cyan-500/20 to-slate-950',
    playable: false,
  },
  // {
  //   title: 'CLI Productivity Toolkit',
  //   description:
  //     'Command-line utilities for organizing notes, formatting files, and automating repetitive development tasks.',
  //   tech: ['Python', 'CLI', 'Automation'],
  //   github: 'https://github.com/justintong/cli-toolkit',
  //   imageLabel: 'Terminal utilities',
  //   imageAccent: 'from-lime-400/40 via-emerald-500/20 to-slate-950',
  //   playable: false,
  // },
] as const

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C', 'C++', 'TypeScript', 'JavaScript', 'SQL',],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'PostgreSQL', 'Firebase'],
  },
] as const

export const contactLinks = {
  email: 'justintong0906@gmail.com',
  linkedin: 'https://www.linkedin.com/in/justintong0906',
  github: 'https://github.com/justintong0906',
} as const
