import Card from '../ui/Card';
import Section from '../ui/Section';
function AboutSection({ bio, stats, story }) {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A developer who cares about both the user experience and the backend behind it."
      description="I enjoy building products that are clean to use, straightforward to maintain, and practical for real teams and real users."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="animate-fade-up">
          <div className="space-y-6">
            <p className="text-lg leading-8 text-neutral-700 dark:text-neutral-300">{bio}</p>
            <p className="text-base leading-8 text-neutral-600 dark:text-neutral-400">{story}</p>
          </div>
        </Card>

        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                {stat.value}
              </div>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default AboutSection;
