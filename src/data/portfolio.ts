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

export interface Certification {
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
  headline: 'Curious by nature. A builder at heart.',
  introduction: 'Welcome to my corner of the internet. A collection of things I build, things I learn, and the experiences along the way.',
  about: 'I enjoy turning ideas into something tangible. This portfolio is a place to share that process — from the first experiment to the lessons learned along the way.',
  email: '',
  githubUrl: '',
  linkedinUrl: '',
  siteUrl: '', // Set the public URL to enable canonical links and sitemap.xml.
  photoUrl: '', // Optional local photograph, e.g. /images/profile.webp.
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

export const experience = [
  { role: 'Your role', organization: 'Company name', period: 'Start date — End date', description: 'Add your responsibilities, the challenges you worked on, and the impact of your work.', sample: true },
];
export const education = [
  { qualification: 'Your degree or qualification', institution: 'School or university', period: 'Start date — End date', description: 'Add your field of study, relevant coursework, and any highlights you want to share.', sample: true },
];
export const certifications: Certification[] = [
  { name: 'Your certification', issuer: 'Issuing organization', date: 'Issue date', credentialUrl: '', sample: true },
];
export const hobbies = [
  { name: 'Exploring outdoors', icon: 'compass', description: 'Use this space to share your favorite ways to spend time outside.', sample: true },
  { name: 'Side experiments', icon: 'code', description: 'Share the things you tinker with when curiosity takes the lead.', sample: true },
  { name: 'Beyond the screen', icon: 'headphones', description: 'Music, games, books, or something else entirely — make this your own.', sample: true },
];
