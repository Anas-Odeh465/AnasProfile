import Card from '../ui/Card';
import Section from '../ui/Section';
import Button from '../ui/Button';

function ProjectsSection({ projects }) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Work shaped by real use cases, not just visual polish."
      description="These projects reflect the kind of work I enjoy most: practical products, thoughtful interfaces, and backend systems that support a smooth user experience."
    >
      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="group animate-fade-up overflow-hidden p-0 hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="overflow-hidden border-b border-neutral-200/70 dark:border-white/10">
              <div className="h-56 w-full overflow-hidden relative group">
              <iframe
                src={project.liveUrl}
                title={`${project.title} project preview`}
                className="absolute top-0 left-0 pointer-events-none transition-transform duration-500 group-hover:scale-[0.27]"
                style={{
                  width: '1280px',     
                  height: '800px',      
                  transform: 'scale(0.25)',
                  transformOrigin: 'top left',
                  border: 'none',
                }}
                loading="lazy"
              />
              <div onClick={() => window.open(project.liveUrl, "_blank")} className="absolute inset-0 z-10 cursor-pointer"></div>
            </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-neutral-950 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={project.liveUrl} target="_blank" rel="noreferrer" variant="primary" icon>
                  Live Demo
                </Button>
                <Button href={project.repoUrl} target="_blank" rel="noreferrer" variant="secondary">
                  Source Code
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default ProjectsSection;
