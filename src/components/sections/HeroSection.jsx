import Button from '../ui/Button';
import Card from '../ui/Card';
import MyPic from '../../assets/AnasOdeh2.png'

function HeroSection({ profile }) {
  return (
    <section id="home" className="scroll-mt-24 px-6 pb-16 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-accent-700 dark:text-accent-300">
            Full Stack Developer
          </span>
          <h1 className="mt-8 text-balance text-5xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="mt-3 block text-2xl font-medium text-neutral-500 dark:text-neutral-400 sm:text-3xl">
              {profile.title}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
              Based in {profile.location}
            </span>
            <span className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
              3+ Years Learning & Building
            </span>
            <span className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
              Open to meaningful projects
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {profile.ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant} icon>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:140ms]">
          <div className="absolute -left-8 top-8 h-44 w-44 rounded-full bg-accent-500/25 blur-3xl dark:bg-accent-500/30" />
          <div className="absolute -bottom-8 right-8 h-44 w-44 rounded-full bg-sky-500/20 blur-3xl dark:bg-sky-500/20" />
          <Card className="relative overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.12),transparent_45%,rgba(14,165,233,0.10))]" />
            <div className="relative grid gap-6">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available for freelance and full-time roles
                </div>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-neutral-600 dark:text-white/70">
                  In 2026
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-[1.05fr_0.95fr] sm:items-end">
                <div className="overflow-hidden rounded-[32px] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-3 shadow-glow">
                  <div className="relative overflow-hidden rounded-[26px] bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={MyPic}
                      alt={`${profile.name} portrait`}
                      className="h-[420px] w-full  object-cover object-center"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = '/anas-odeh-profile.svg';
                      }}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950/35 to-transparent" />
                  </div>
                </div>

                <div className="space-y-4">
                  {profile.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-neutral-200/70 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="text-2xl font-semibold text-neutral-950 dark:text-white">{stat.value}</div>
                      <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                    </div>
                  ))}
                  <div className="rounded-[24px] border border-neutral-200/70 bg-neutral-100/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                      Good software should make things simpler for people, not more complicated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
