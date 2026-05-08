import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TechnologiesSection from './components/sections/TechnologiesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import ScrollProgress from './components/ui/ScrollProgress';
import { profile, projects, socialLinks, technologies } from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';

const sections = ['home', 'about', 'tech', 'projects', 'contact'];

function App() {
  const { theme, toggleTheme, mounted } = useTheme();
  const activeSection = useActiveSection(sections);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'tech', label: 'Tech' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-950 text-neutral-100 dark:bg-neutral-950 dark:text-neutral-100">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-400 animate-pulse-soft" />
          <span className="text-sm font-medium text-neutral-300">Loading portfolio...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_28%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_28%)]" />
        <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-[0.08] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <ScrollProgress />
      <Navbar
        activeSection={activeSection}
        navLinks={navLinks}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <HeroSection profile={profile} />
        <AboutSection bio={profile.bio} stats={profile.stats} story={profile.story} />
        <TechnologiesSection items={technologies} />
        <ProjectsSection projects={projects} />
        <ContactSection email={profile.email} />
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;
