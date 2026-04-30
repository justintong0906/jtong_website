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
  gpa: 3.79,
  coursework: [
    'Data Structures and Algorithms',
    'Object-Oriented Programming',
    'Systems Software',
    'Automata Theory',
    'Software Development',
    'AI for Game Programming',
    'Algorithms for Machine Learning',
  ],
} as const

export const aboutHighlights = [
  { label: 'Location', value: 'Orlando, FL' },
  { label: 'School', value: 'University of Central Florida', role: 'CS'},
  { label: 'Job', value: 'Command Post Technologies', role: 'Intern'},
  { label: 'Focus', value: 'AI-Integrated Solutions'},
  { label: 'Focus', value: 'ML Modeling'},
  { label: 'Focus', value: 'Data Science'},
  { label: 'Focus', value: 'Full-Stack Software Engineering'},
  { label: 'Focus', value: 'Video Game Developement'},
] as const

export const aboutSummary = [
  'My name is Justin, and I am a software engineer and Computer Science student at the University of Central Florida. Professionally, I am an incoming AI / ML Solutions Engineer at Command Post Technologies.',
  'I specialize in AI-driven systems and full-stack development. I\'ve built scalable agentic systems, a data-driven predictive model, full-stack applications, and an original 2-D platformer. I am passionate about leveraging state-of-the-art technology to solve real-world problems.',
  'In my personal life, I love exploring technologies, working on personal projects, traveling, playing/watching basketball, weightlifting, going to music concerts, and trying new foods!',
] as const

export const aboutPhotoCards = [
  {
    caption: ' ⚔️ Me and UCF mascot Knightro. Charge On!',
    accent: 'from-cyan-400/35 via-blue-500/20 to-slate-950',
  },
  {
    caption: '🇻🇳 Connecting with my roots in Vietnam.',
    accent: 'from-amber-400/35 via-rose-500/20 to-slate-950',
  },
  {
    caption: '🏀 Orlando Magic in the air!',
    accent: 'from-emerald-400/35 via-cyan-500/20 to-slate-950',
  },
  {
    caption: '🎵 A night under the lights with The Weeknd.',
    accent: 'from-violet-400/35 via-fuchsia-500/20 to-slate-950',
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
    tech: ['React Native', 'Supabase', 'Jira', 'Arduino',],
    github: 'https://github.com/justintong/course-planner',
    imageLabel: 'Scheduling dashboard',
    imageAccent: 'from-cyan-400/40 via-blue-500/20 to-slate-950',
    playable: false,
  },
  {
    title: 'Gym Buddy Matcher for RWC',
    description:
      '',
    tech: ['React', 'Express', 'Node', 'MongoDB', 'Flutter'],
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
    skills: [
      'Python', 
      'TypeScript', 
      'JavaScript', 
      'Java', 
      'C++', 
      'C', 
      'SQL', 
      'HTML/CSS', 
      'C#', 
      'PHP', 
      'Cypher'
    ],
  },
  {
    title: 'AI / ML / Data Science',
    skills: [
      'Agentic AI', 
      'LangChain', 
      'Ollama', 
      'Scikit-Learn', 
      'Pandas', 
      'GeoPandas', 
      'MatPlotLib'
    ],
  },
  {
    title: 'Software Development',
    skills: [
      // Frontend & Mobile
      'React', 
      'Tailwind CSS', 
      'React Native', 
      // Backend & Frameworks
      'Node.js', 
      'Express', 
      // Databases
      'PostgreSQL', 
      'MongoDB', 
      'Neo4j', 
      'Supabase'
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Git', 
      'GitHub', 
      'Linux', 
      'DigitalOcean', 
      'Jira', 
      'Visual Studio', 
      'Unity'
    ],
  },
] as const

export const contactLinks = {
  email: 'justintong0906@gmail.com',
  linkedin: 'https://www.linkedin.com/in/justintong0906',
  github: 'https://github.com/justintong0906',
} as const
