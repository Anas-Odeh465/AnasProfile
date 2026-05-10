import {
  CodeBracketIcon,
  DatabaseIcon,
  GitBranchIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  GithubIcon,
  LinkedInIcon,
  XIcon,
} from '../components/icons/Icons';

export const profile = {
  name: 'Anas Odeh',
  title: 'Full Stack Developer',
  location: 'Jordan',
  tagline:
    'I build modern web products that feel clean on the surface and dependable under the hood, with a strong focus on usability, performance, and real business value.',
  bio: 'I am a full-stack developer with 3 years of hands-on experience building web applications from frontend interfaces to backend services. I enjoy turning product ideas into fast, practical, and human-centered experiences. My approach is simple: write maintainable code, keep the user journey clear, and ship features that solve real problems instead of adding noise.',
  story:
    'Over the last few years, I have worked on a mix of deployed products and in-progress platforms, which has helped me grow across the full development lifecycle. I am comfortable moving between React on the frontend, Node.js on the backend, and the day-to-day engineering decisions that make a product easier to scale and easier to trust.',
  email: 'anas.odeh.per@gmail.com',
  profileImage: '',
  ctas: [
    { label: 'View Projects', href: '#projects', variant: 'primary' },
    { label: 'Contact Me', href: '#contact', variant: 'secondary' },
  ],
  stats: [
    { value: '3+', label: 'Years Learning & Building' },
    { value: '2', label: 'Projects deployed' },
    { value: '4', label: 'Projects in progress' },
  ],
};

export const technologies = [
  { name: 'React', tool: 'Library', description: 'Building responsive and interactive user interfaces.', icon: ReactIcon },
  { name: 'Node.js', tool: 'Runtimes', description: 'Creating backend services and APIs with production thinking.', icon: NodeIcon },
  { name: 'TypeScript', tool: 'Programming Language', description: 'Keeping larger codebases safer and easier to maintain.', icon: TypeScriptIcon },
  { name: 'Tailwind CSS', tool: 'Styling Framework', description: 'Designing clean, modern interfaces with fast iteration.', icon: TailwindIcon },
  { name: 'PostgreSQL', tool: 'Data Management', description: 'Structuring reliable data for real product use cases.', icon: DatabaseIcon },
  { name: 'Git', tool: 'Version Control System', description: 'Managing collaborative workflows and version control cleanly.', icon: GitBranchIcon },
  { name: 'REST APIs', tool: 'Architectural Style', description: 'Connecting frontend and backend systems in a practical way.', icon: CodeBracketIcon },
  { name: 'Python', tool: 'Programming Language', description: 'Using automation and scripting to solve workflow-heavy tasks.', icon: PythonIcon },
];

export const projects = [
  {
    title: 'QuarkAi',
    description:
      'For quick use of Ai with API layer, and a smoother day-to-day workflow for decision making still under test and build.',
    techStack: ['React', 'Node.js', 'Express', 'Vercel', 'Tailwind CSS', 'Render', '4 Years ago'],
    image: '/QuarkAi.png',
    liveUrl: 'https://quark-ai-sage.vercel.app/QuarkAI',
    repoUrl: 'https://github.com/Anas-Odeh465/Quark-AI',
  },
  {
    title: 'Naqel Team Script',
    description:
      'A responsive system experience designed to manage Excel files for customer service department and it easier for agents ',
    techStack: ['React', 'REST API', 'Node.js', 'Vercel', 'Tailwind CSS', 'Render', 'Supabase', 'PostgerSQL', '3 Years ago'],
    image: '/NTS.png',
    liveUrl: 'https://nts-back.vercel.app/',
    repoUrl: 'https://github.com/Anas-Odeh465/NTS-BACK',
  },
  {
    title: 'Xamx.Ai',
    description:
      'An Ai platform focused on reducing manual work for teams through structured forms, role-based access, and better visibility into internal processes.',
    techStack: ['React', 'Tailwind CSS', 'Canvas', 'Vercel', 'I\'m currently working on it'],
    image: '/Xamxai.png',
    liveUrl: 'https://xamx-ai.vercel.app/',
    repoUrl: 'https://github.com/Anas-Odeh465/Xamx.Ai',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Anas-Odeh465', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anas-odeh-946b10288/', icon: LinkedInIcon },
  { label: 'X', href: 'https://x.com/AnasOdeh252', icon: XIcon },
];
