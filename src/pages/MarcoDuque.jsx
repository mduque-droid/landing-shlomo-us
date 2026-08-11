import { useReveal } from '../hooks/useReveal';
import Container from '../components/layout/Container';
import Button from '../components/atomic/Button';

const TECH = [
  { label: 'Node.js' }, { label: 'TypeScript' }, { label: 'Java / Spring Boot' },
  { label: 'Spring WebFlux' }, { label: 'Event-Driven Architecture' },
  { label: 'Distributed Systems' }, { label: 'RabbitMQ' }, { label: 'BullMQ' },
  { label: 'Redis' }, { label: 'Socket.io' }, { label: 'Idempotency' },
  { label: 'Transactional Integrity' }, { label: 'Fault Tolerance' },
  { label: 'AWS S3' }, { label: 'AWS Rekognition' }, { label: 'AWS Comprehend' },
  { label: 'AWS MediaConvert' }, { label: 'AWS SES / SNS' }, { label: 'Stripe' },
  { label: 'Sequelize-TypeScript' }, { label: 'MariaDB' }, { label: 'PostgreSQL' },
  { label: 'Salesforce Pipelines' }, { label: 'Docker' }, { label: 'Kubernetes' },
  { label: 'Jenkins CI/CD' }, { label: 'Angular' }, { label: 'React' },
];

const EXPERIENCE = [
  {
    role: 'Senior Software Engineer — Data & Systems',
    company: 'NICE — New Immigrant Community Empowerment',
    period: 'Jan 2026 – Present',
    location: 'Queens, NY',
    bullets: [
      'Architect and maintain Salesforce data pipelines consolidating student enrollment, course completion, and regulatory license renewal records across 5+ active NYC DOB compliance programs — reducing reporting latency by ~60%.',
      'Design automated compliance reporting workflows (Salesforce Flows + scheduled data jobs) with built-in data integrity validations against NYC DOB requirements, eliminating 8 hrs/week of manual reconciliation.',
      'Enforce referential data integrity and zero-gap compliance across all active licenses as sole technical owner of all systems and data tooling in a regulated environment.',
    ],
  },
  {
    role: 'Software Engineer — Cloud & Distributed Infrastructure',
    company: '7 Safety Training LLC',
    period: 'Apr 2023 – May 2025',
    location: 'Woodside, NY',
    bullets: [
      'Led migration of 6 monolithic services to a distributed AWS microservices architecture, improving average response time by 35% and raising uptime from 97% to 99.5%.',
      'Re-architected Jenkins CI/CD pipelines with parallel build stages and automated rollback gates, compressing deployment lead time from 3 days to under 4 hours.',
      'Built event-driven AWS data pipelines (Lambda + S3 + RDS) processing ~15,000 records/day for downstream compliance reporting and analytics.',
    ],
  },
  {
    role: 'Full Stack Developer — Backend Systems',
    company: 'IAS Software',
    period: '2020 – Feb 2023',
    location: 'Medellín, Colombia',
    bullets: [
      'Engineered reactive Java/Spring WebFlux backend services sustaining 2,000 concurrent sessions at sub-200ms p95 latency under peak load.',
      'Designed RabbitMQ event bus across 8 microservices achieving eventual consistency, cutting inter-service message processing time by 40%.',
      'Compressed release cycles from 2 weeks to 3 days via Jenkins + trunk-based Git workflows. Shipped Angular SPAs serving 10,000+ monthly active users.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Win Software',
    period: 'Mar 2017 – Oct 2020',
    location: 'Medellín, Colombia',
    bullets: [
      'Reduced p95 query time by 50% through schema normalization, composite indexing, and query plan analysis across 4 enterprise applications.',
      'Replaced manual reporting with parameterized SQL pipelines, cutting business reporting effort by 70% and enabling self-serve analytics.',
      'Shipped React Native mobile features integrated with REST backends to ~3,000 active users.',
    ],
  },
];

const PLATFORM_CARDS = [
  {
    title: 'Idempotent Event Processing',
    body: 'All Stripe webhook events processed inside ACID transactions using a ProcessedWebhookEvents deduplication table — exactly-once semantics across charge, refund, and dispute events.',
  },
  {
    title: 'Concurrency Control',
    body: 'Per-student Mutex locks on video progress updates prevent race conditions under simultaneous HLS segment requests. BullMQ TTL processors auto-grade timed-out evaluations without polling.',
  },
  {
    title: 'Fault Tolerance & Session Integrity',
    body: 'Heartbeat scheduler (30s) detects and evicts zombie WebSocket sessions. In-memory study session manager syncs state to DB on configurable intervals, surviving disconnects.',
  },
  {
    title: 'AI/ML Identity Pipeline',
    body: 'AWS Rekognition for real-time face detection and comparison. Comprehend + Translate for multilingual NLP. MediaConvert for HLS transcoding with presigned S3 delivery.',
  },
  {
    title: 'Immutable Audit Trail',
    body: 'Validation Snapshot persisted at certificate issuance — captures identity state, effective hours, license config, and document status for regulatory dispute resolution.',
  },
  {
    title: 'Event-Driven Microservices',
    body: '11 independently deployable services communicating over RabbitMQ pub/sub. BullMQ + Redis for distributed job queues with TTL, retries, and concurrency limits.',
  },
];

function RevealSection({ children, delay = 0 }) {
  const { ref, visible } = useReveal({ threshold: 0.05 });
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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
          <a href="mailto:mduque@shlomo.us" className="text-sm text-muted hover:text-ink transition-colors duration-300">
            mduque@shlomo.us
          </a>
        </Container>
      </header>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28 lg:py-36">
          <RevealSection delay={0}>
            <div className="flex items-center gap-2.5 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Senior Software Engineer · Available for new opportunities · New York, NY
            </div>
          </RevealSection>

          <RevealSection delay={90}>
            <h1 className="mt-6 text-[2.75rem] leading-[1.05] tracking-[-0.03em] font-semibold text-ink sm:text-6xl lg:text-7xl">
              Marco Duque<br />
              <span className="text-accent">Lugo</span>
            </h1>
          </RevealSection>

          <RevealSection delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Senior Software Engineer with 9+ years designing high-availability distributed systems
              and event-driven microservices. Currently building fault-tolerant data pipelines for
              a regulated NYC compliance environment, while independently architecting an
              enterprise-grade SaaS platform with idempotent event processing, mutex concurrency
              control, and an AWS AI/ML identity pipeline.
            </p>
          </RevealSection>

          <RevealSection delay={270}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button size="lg" onClick={() => window.location.href = 'mailto:mduque@shlomo.us'}>
                Get in touch
              </Button>
              <a
                href="https://www.linkedin.com/in/marco-duque-860b45179/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-base font-medium text-ink transition-colors duration-300 hover:text-accent"
              >
                LinkedIn profile
                <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">→</span>
              </a>
            </div>
          </RevealSection>

          <RevealSection delay={360}>
            <dl className="mt-20 grid grid-cols-2 border-t border-line sm:grid-cols-4">
              {[
                { value: '9+', label: 'Years shipping' },
                { value: '11', label: 'Microservices in prod' },
                { value: '6', label: 'AWS services integrated' },
                { value: '4+', label: 'Industries shipped' },
              ].map((stat) => (
                <div key={stat.label} className="border-b border-r border-line px-6 py-8 last:border-r-0">
                  <dt className="text-3xl font-semibold tracking-[-0.02em] text-ink">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </RevealSection>
        </Container>
      </section>

      {/* ── Stack ───────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <RevealSection>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">Core stack</h2>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
              Distributed systems, cloud infrastructure, and beyond.
            </p>
          </RevealSection>
          <RevealSection delay={120}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {TECH.map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center rounded-md border border-line px-3 py-1.5 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {t.label}
                </span>
              ))}
            </div>
          </RevealSection>
        </Container>
      </section>

      {/* ── Experience ──────────────────────────────────────────── */}
      <section className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <RevealSection>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">Experience</h2>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
              9 years. High-availability systems. Regulated environments.
            </p>
          </RevealSection>

          <div className="mt-10 space-y-12">
            {EXPERIENCE.map((job, i) => (
              <RevealSection key={job.company + job.role} delay={i * 80}>
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
                {i < EXPERIENCE.length - 1 && <div className="mt-12 border-t border-line" />}
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Platform deep-dive ──────────────────────────────────── */}
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <RevealSection>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">Engineering Project</h2>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
              RECS — Regulatory Education &amp; Certification System.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Enterprise-grade SaaS platform for NYC DOB training providers. 11 independently deployable microservices,
              event-driven architecture, transactional integrity, fault-tolerant session management,
              and a real-time AWS AI/ML identity pipeline — designed and built solo.
            </p>
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
                href="/recs/manual/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
              >
                Platform documentation →
              </a>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {PLATFORM_CARDS.map((card) => (
                <div key={card.title} className="bg-surface p-6">
                  <h3 className="text-sm font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </Container>
      </section>

      {/* ── Education ───────────────────────────────────────────── */}
      <section className="border-b border-line">
        <Container className="py-12 sm:py-16">
          <RevealSection>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">Education</h2>
            <div className="mt-6 space-y-4">
              {[
                { title: 'Python Certificate', org: 'BrainStation', year: '2024', location: 'New York, NY' },
                { title: 'Computer Systems, Coding Specialization', org: 'Politécnico Colombiano Jaime Isaza Cadavid', year: '2012–2014', location: 'Medellín, Colombia' },
              ].map((e) => (
                <div key={e.title} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">{e.title}</p>
                    <p className="text-sm text-muted">{e.org} · {e.location}</p>
                  </div>
                  <span className="flex-shrink-0 text-sm text-faint">{e.year}</span>
                </div>
              ))}
            </div>
          </RevealSection>
        </Container>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section>
        <Container className="py-20 sm:py-28">
          <RevealSection>
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                Let's build something together.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Open to senior and staff engineering roles in distributed systems, data engineering,
                or cloud infrastructure. Also available for consulting on AWS architecture and SaaS platform design.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" onClick={() => window.location.href = 'mailto:mduque@shlomo.us'}>
                  mduque@shlomo.us
                </Button>
                <a href="/" className="text-sm text-muted hover:text-ink transition-colors duration-300">
                  ← Back to shlomo.us
                </a>
              </div>
            </div>
          </RevealSection>
        </Container>
      </section>

    </div>
  );
}
