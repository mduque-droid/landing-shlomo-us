import Container from '../components/layout/Container';
import Button from '../components/atomic/Button';
import Reveal from '../components/shared/Reveal';
import SectionHeading from '../components/shared/SectionHeading';
import resumeData from '../constants/resumeData';

const { tech, stats, experience, platformCards, education, contactEmail, linkedin } = resumeData;
const REVEAL_OPTS = { threshold: 0.05 };

export default function MarcoDuquePage() {
  return (
    <div className="min-h-screen bg-paper">

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors duration-300">
            <span>←</span>
            <span>shlomo.us</span>
          </a>
          <a href={`mailto:${contactEmail}`} className="text-sm text-muted hover:text-ink transition-colors duration-300">
            {contactEmail}
          </a>
        </Container>
      </header>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28 lg:py-36">
          <Reveal options={REVEAL_OPTS}>
            <div className="flex items-center gap-2.5 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Senior Software Engineer · Available for new opportunities · New York, NY
            </div>
          </Reveal>

          <Reveal options={REVEAL_OPTS} delay={90}>
            <h1 className="mt-6 text-[2.75rem] leading-[1.05] tracking-[-0.03em] font-semibold text-ink sm:text-6xl lg:text-7xl">
              Marco Duque<br />
              <span className="text-accent">Lugo</span>
            </h1>
          </Reveal>

          <Reveal options={REVEAL_OPTS} delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Senior Software Engineer with 9+ years designing high-availability distributed systems
              and event-driven microservices. Currently building fault-tolerant data pipelines for
              a regulated NYC compliance environment, while independently architecting an
              enterprise-grade SaaS platform with idempotent event processing, mutex concurrency
              control, and an AWS AI/ML identity pipeline.
            </p>
          </Reveal>

          <Reveal options={REVEAL_OPTS} delay={270}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button size="lg" href={`mailto:${contactEmail}`}>
                Get in touch
              </Button>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-base font-medium text-ink transition-colors duration-300 hover:text-accent"
              >
                LinkedIn profile
                <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>

          <Reveal options={REVEAL_OPTS} delay={360}>
            <dl className="mt-20 grid grid-cols-2 border-t border-line sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-b border-r border-line px-6 py-8 last:border-r-0">
                  <dt className="text-3xl font-semibold tracking-[-0.02em] text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* ── Stack ───────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <Reveal options={REVEAL_OPTS}>
            <SectionHeading
              variant="minimal"
              eyebrow="Core stack"
              title="Distributed systems, cloud infrastructure, and beyond."
            />
          </Reveal>
          <Reveal options={REVEAL_OPTS} delay={120}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {tech.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-md border border-line px-3 py-1.5 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Experience ──────────────────────────────────────────── */}
      <section className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <Reveal options={REVEAL_OPTS}>
            <SectionHeading
              variant="minimal"
              eyebrow="Experience"
              title="9 years. High-availability systems. Regulated environments."
            />
          </Reveal>

          <div className="mt-10 space-y-12">
            {experience.map((job, i) => (
              <Reveal options={REVEAL_OPTS} key={job.company + job.role} delay={i * 80}>
                <div className="grid gap-6 sm:grid-cols-[220px_1fr]">
                  <div>
                    <p className="text-sm font-semibold text-ink">{job.company}</p>
                    <p className="mt-0.5 text-xs text-muted">{job.period}</p>
                    <p className="mt-0.5 text-xs text-faint">{job.location}</p>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-ink">{job.role}</p>
                    <ul className="mt-3 space-y-2">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < experience.length - 1 && <div className="mt-12 border-t border-line" />}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Platform deep-dive ──────────────────────────────────── */}
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <Reveal options={REVEAL_OPTS}>
            <SectionHeading
              variant="minimal"
              eyebrow="Engineering Project"
              title="RECS — Regulatory Education & Certification System."
              description="Enterprise-grade SaaS platform for NYC DOB training providers. 11 independently deployable microservices, event-driven architecture, transactional integrity, fault-tolerant session management, and a real-time AWS AI/ML identity pipeline — designed and built solo."
            />
            <div className="mt-4 flex flex-wrap gap-5">
              <a
                href="https://www.shlomo.us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200"
              >
                shlomo.us →
              </a>
              <a
                href="/recs/overview/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
              >
                Platform documentation →
              </a>
            </div>
          </Reveal>

          <Reveal options={REVEAL_OPTS} delay={100}>
            <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {platformCards.map((card) => (
                <div key={card.title} className="bg-surface p-6">
                  <h3 className="text-sm font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Education ───────────────────────────────────────────── */}
      <section className="border-b border-line">
        <Container className="py-12 sm:py-16">
          <Reveal options={REVEAL_OPTS}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">Education</h2>
            <div className="mt-6 space-y-4">
              {education.map((e) => (
                <div key={e.title} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">{e.title}</p>
                    <p className="text-sm text-muted">{e.org} · {e.location}</p>
                  </div>
                  <span className="flex-shrink-0 text-sm text-faint">{e.year}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section>
        <Container className="py-20 sm:py-28">
          <Reveal options={REVEAL_OPTS}>
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                Let's build something together.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Open to senior and staff engineering roles in distributed systems, data engineering,
                or cloud infrastructure. Also available for consulting on AWS architecture and SaaS platform design.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </Button>
                <a href="/" className="text-sm text-muted hover:text-ink transition-colors duration-300">
                  ← Back to shlomo.us
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

    </div>
  );
}
