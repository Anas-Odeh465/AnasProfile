import { useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { CloseIcon, MenuIcon } from '../icons/Icons';

function Navbar({ navLinks, activeSection, theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-neutral-200/70 bg-white/75 px-4 py-3 shadow-[0_16px_60px_-36px_rgba(15,23,42,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-950/65">
          <a
            href="#home"
            className="text-sm font-semibold tracking-[0.22em] text-neutral-950 transition-colors hover:text-accent-600 dark:text-white dark:hover:text-accent-300"
          >
            ANAS ODEH
          </a>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950'
                      : 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-800 transition-colors hover:bg-white md:hidden dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            className="mt-3 rounded-[28px] border border-neutral-200/70 bg-white/90 p-3 shadow-[0_16px_60px_-36px_rgba(15,23,42,0.45)] backdrop-blur-2xl md:hidden dark:border-white/10 dark:bg-neutral-950/85"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                  className={`block rounded-2xl px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950'
                      : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
