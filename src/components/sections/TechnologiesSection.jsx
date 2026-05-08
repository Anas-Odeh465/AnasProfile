import Card from '../ui/Card';
import Section from '../ui/Section';

function TechnologiesSection({ items }) {
  return (
    <Section
      id="tech"
      eyebrow="Technologies"
      title="A toolkit built for modern product teams."
      description="From UI systems to API design and deployment workflows, I use technologies that keep teams moving quickly without sacrificing quality."
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.name}
              className="group animate-fade-up hover:-translate-y-1 hover:border-accent-500/30 hover:shadow-glow"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-500/15 bg-accent-500/10 text-accent-700 transition-colors group-hover:bg-accent-500 group-hover:text-white dark:text-accent-300">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-500 dark:bg-white/5 dark:text-neutral-400">
                  {item.tool}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-neutral-950 dark:text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

export default TechnologiesSection;
