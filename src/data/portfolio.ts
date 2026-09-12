export interface Project {
  slug: string;
  title: string;
  category: 'Web development' | 'Tools & automation';
  description: string;
  technologies: string[];
  status: string;
  visual: 'portfolio' | 'analytics' | 'terminal';
  featured: boolean;
  sample?: boolean;
  repositoryUrl?: string;
  demoUrl?: string;
  overview: string;
  highlights: string[];
}

export const certificationLevels = ['Expert', 'Specialty', 'Associate', 'Fundamentals'] as const;

export interface Certification {
  level: typeof certificationLevels[number];
  name: string;
  issuer: string;
  date: string;
  expires?: string;
  credentialUrl?: string;
  sample?: boolean;
}

// Edit this file to personalize the site. Sample entries are explicitly labeled.
// Only add contact links you actually want to publish.
export const profile = {
  name: 'Ramon Peek',
  initials: 'RP',
  role: 'Azure Specialist & Software Engineer',
  location: 'Valkenswaard, North Brabant, Netherlands',
  headline: 'Curious by nature. A builder at heart.',
  introduction: 'Welcome to my corner of the internet. A collection of things I build, things I learn, and the experiences along the way.',
  about: 'I enjoy turning ideas into something tangible. This portfolio is a place to share that process — from the first experiment to the lessons learned along the way.',
  email: '',
  githubUrl: '',
  linkedinUrl: 'https://www.linkedin.com/in/ramonpeek/',
  siteUrl: '', // Set the public URL to enable canonical links and sitemap.xml.
  photoUrl: '/images/profile.jpeg', // Optional local photograph, e.g. /images/profile.webp.
};

export const projects: Project[] = [
  {
    slug: 'personal-portfolio', title: 'Personal portfolio', category: 'Web development',
    description: 'A home for my projects, experiences, and the things that make me, me.',
    technologies: ['Astro', 'TypeScript', 'CSS'], status: 'In progress', visual: 'portfolio', featured: true,
    overview: 'A fast, static portfolio built with Astro and TypeScript. All content lives in typed data files, making it easy to maintain and extend without a database.',
    highlights: ['Static HTML with small scripts for navigation, filtering, and theme selection.', 'A responsive layout inspired by the Microsoft Foundry portal.', 'Reusable components and a central, typed content model.'],
  },
  {
    slug: 'insights-dashboard', title: 'Insights dashboard', category: 'Web development',
    description: 'An example project card for a dashboard that makes complex data easier to explore.',
    technologies: ['TypeScript', 'Charts'], status: 'Example', visual: 'analytics', featured: true, sample: true,
    overview: 'This is a sample entry to demonstrate a project detail page. Replace it with a real project, its context, and the problem you solved.',
    highlights: ['Describe the problem and who the project helps.', 'Explain the implementation choices you made.', 'Share the result and what you learned.'],
  },
  {
    slug: 'workflow-toolkit', title: 'Workflow toolkit', category: 'Tools & automation',
    description: 'An example project card for small tools that take the repetition out of everyday tasks.',
    technologies: ['JavaScript', 'CLI'], status: 'Example', visual: 'terminal', featured: true, sample: true,
    overview: 'This sample shows how a tool or automation project can be presented. Replace it with your own project description and links.',
    highlights: ['Explain the task you automated.', 'Show how the tool fits into your workflow.', 'Add real outcomes or lessons learned.'],
  },
];

export interface ExperienceCompany {
  organization: string;
  logoUrl?: string; // Local asset, e.g. /images/companies/company.svg.
  websiteUrl?: string;
  period?: string;
  location?: string;
  sample?: boolean;
  roles: {
    role: string;
    period: string;
    employmentType?: string;
    location?: string;
    description: string;
  }[];
}

// Companies and their roles appear in the order entered, newest first.
export const experience: ExperienceCompany[] = [
  {
    organization: 'Fontys University of Applied Sciences', logoUrl: '/images/companies/fontys.jpeg',
    websiteUrl: 'https://www.fontys.nl/', location: 'Eindhoven',
    roles: [
      { role: 'Medior Azure Cloud Developer', employmentType: 'Full-time', period: 'August 2024 — Present', location: 'Eindhoven · Hybrid', description: '' },
    ],
  },
  {
    organization: 'FruitPunch AI', logoUrl: '/images/companies/fruitpunch.jpeg', websiteUrl: 'https://www.linkedin.com/company/18822537/',
    period: 'February 2022 — July 2024 · 2 years 6 months', location: 'Eindhoven, North Brabant, Netherlands',
    roles: [
      { role: 'Software Engineer', employmentType: 'Full-time', period: 'August 2022 — July 2024', description: '' },
      { role: 'Graduate Intern Software Engineering', employmentType: 'Internship', period: 'February 2022 — July 2022', description: '' },
    ],
  },
  {
    organization: 'Wolfpack', logoUrl: '/images/companies/wolfpack.png', websiteUrl: 'https://www.wolfpackit.nl/',
    period: 'August 2020 — February 2022 · 1 year 7 months', location: 'Eindhoven, North Brabant, Netherlands',
    roles: [
      { role: 'Software Engineer', employmentType: 'Part-time', period: 'January 2021 — February 2022', description: '' },
      { role: 'Intern Software Engineering', employmentType: 'Internship', period: 'August 2020 — January 2021', description: '' },
    ],
  },
];
export const education = [
  { qualification: 'Bachelor, ICT & Software Engineering', institution: 'Fontys Hogeschool', logoUrl: '/images/companies/fontys.jpeg', period: 'September 2018 — July 2022', description: 'Grade: 10', sample: false },
];
// Confirmed from the public LinkedIn profile; additional entries await the full profile.
export const certifications: Certification[] = [
  { name: 'AZ-900: Microsoft Azure Fundamentals', issuer: 'Microsoft', level: 'Fundamentals', date: 'February 2023' },
  { name: 'AI-901: Microsoft Azure AI Fundamentals', issuer: 'Microsoft', level: 'Fundamentals', date: 'April 2023' },
  { name: 'AZ-204: Microsoft Azure Developer Associate', issuer: 'Microsoft', level: 'Associate', date: 'May 2023' },
  { name: 'AI-102: Microsoft Azure AI Engineer Associate', issuer: 'Microsoft', level: 'Associate', date: 'June 2024' },
  { name: 'DP-420: Azure Cosmos DB Developer Specialty', issuer: 'Microsoft', level: 'Specialty', date: 'August 2026', expires: 'August 2027' },
  { name: 'AZ-400: Microsoft Azure DevOps Engineer Expert', issuer: 'Microsoft', level: 'Expert', date: 'February 2025' },
];
export const hobbies = [
  { name: 'Exploring outdoors', icon: 'compass', description: 'Use this space to share your favorite ways to spend time outside.', sample: true },
  { name: 'Side experiments', icon: 'code', description: 'Share the things you tinker with when curiosity takes the lead.', sample: true },
  { name: 'Beyond the screen', icon: 'headphones', description: 'Music, games, books, or something else entirely — make this your own.', sample: true },
];
