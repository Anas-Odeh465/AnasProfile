function Footer({ socialLinks }) {
  return (
    <footer className="px-6 pb-8 pt-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-[28px] border border-neutral-200/70 bg-white/80 px-6 py-8 text-sm text-neutral-600 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-neutral-400 sm:flex-row">
        <p>Built with React, Vite, and Tailwind CSS. © 2026 Anas Odeh</p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:text-white"
                aria-label={link.label}
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
