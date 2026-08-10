import { useReveal } from '../hooks/useReveal';
import Container from '../components/layout/Container';
import Button from '../components/atomic/Button';

const TECH = [
  { label: 'Node.js' }, { label: 'TypeScript' }, { label: 'Java / Spring Boot' },
  { label: 'Spring WebFlux' }, { label: 'RabbitMQ' }, { label: 'BullMQ' },
  { label: 'Redis' }, { label: 'Socket.io' }, { label: 'AWS S3' },
  { label: 'AWS Rekognition' }, { label: 'AWS Comprehend' }, { label: 'AWS Translate' },
  { label: 'AWS MediaConvert' }, { label: 'AWS SES / SNS' }, { label: 'Stripe' },
  { label: 'MariaDB' }, { label: 'PostgreSQL' }, { label: 'Sequelize-TypeScript' },
  { label: 'Salesforce' }, { label: 'Docker' }, { label: 'Kubernetes' },
  { label: 'Jenkins / CI-CD' }, { label: 'Angular' }, { label: 'React' },
  { label: 'Tailwind CSS' },
];

const EXPERIENCE = [
  {
    role: 'Compliance Systems Coordinator',
    company: 'NICE — New Immigrant Community Empowerment',
    period: 'Jan 2026 – Present',
    location: 'Queens, NY',
    bullets: [
      'Manage end-to-end compliance processes to ensure the organization retains active NYC DOB training provider licenses across all active programs.',
      'Implement and configure Salesforce CRM flows and automation to track enrollment, course completion, and license renewal deadlines — reducing manual tracking overhead.',
      'Coordinate between instructors, students, and DOB requirements to maintain full regulatory compliance and zero license lapses.',
    ],
  },
  {
    role: 'Software Engineer — Cloud & Infrastructure',
    company: '7 Safety Training LLC',
    period: 'Apr 2023 – May 2025',
    location: 'Woodside, NY',
    bullets: [
      'Migrated core services to a scalable AWS microservices architecture, boosting system availability and processing speed.',
      'Optimized Jenkins CI/CD pipelines and Git workflows, cutting deployment lead times across engineering teams.',
      'Engineered automated AWS data pipelines feeding downstream reporting systems, achieving 99.9% data accuracy.',
      'Delivered Power BI dashboards giving leadership real-time visibility into e-commerce KPIs.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'IAS Software',
    period: '2020 – Feb 2023',
    location: 'Medellín, Colombia',
    bullets: [
      'Engineered non-blocking backend services with Java, Spring Boot, and Spring WebFlux handling high-concurrency workloads at scale.',
      'Implemented RabbitMQ messaging for asynchronous microservices communication across distributed systems.',
      'Streamlined CI/CD pipelines with Jenkins and Git, accelerating release cycles.',
      'Built responsive Angular interfaces for microservices-backed applications.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Win Software',
    period: 'Mar 2017 – Oct 2020',
    location: 'Medellín, Colombia',
    bullets: [
      'Translated business requirements into data models and technical specs, shaping scalable application architecture.',
      'Queried complex databases via advanced SQL to support reporting and product decisions.',
      'Built React Native mobile features integrated with backend APIs.',
    ],
  },
];

const SHLOMO_CARDS = [
  {
    title: '11 microservices',
    body: 'API Gateway, Billing, Student, Marketplace, Reports, Utilities, Domain, Packages, Main — each independently deployable via Docker + Webpack.',
  },
  {
    title: 'Async message bus',
    body: 'RabbitMQ pub/sub across all services. BullMQ + Redis for job queues with async-mutex and p-limit for concurrency control.',
  },
  {
    title: 'AWS AI/ML pipeline',
    body: 'Rekognition for student identity verification. Comprehend + Translate for multilingual NLP. MediaConvert for HLS video transcoding.',
  },
  {
    title: 'Real-time layer',
    body: 'Socket.io bidirectional channels for live training sessions, progress sync, and operator notifications.',
  },
  {
    title: 'Full Stripe payments',
    body: 'Isolated billing microservice with webhook idempotency, payment annulments, and transaction management.',
  },
  {
    title: 'Angular SPA',
    body: 'ngx-translate i18n, Chart.js dashboards, QR code generation, Socket.io client, and video.js player.',
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
              Open to senior / staff engineering roles · New York, NY
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
              Backend engineer with 9+ years shipping distributed systems. Currently managing
              NYC DOB compliance operations at NICE while independently building Shlomo —
              a full SaaS platform for the same training provider market, built on 11
              Node.js/TypeScript microservices, AWS AI/ML, and real-time Socket.io.
            </p>
          </RevealSection>

          <RevealSection delay={270}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button size="lg" onClick={() => window.location.href = 'mailto:mduque@shlomo.us'}>
                Get in touch
              </Button>
              <a
                href="https://linkedin.com/in/marcoduquelugo"
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
                { value: '11', label: 'Microservices built' },
                { value: '6', label: 'AWS services integrated' },
                { value: 'NYC', label: 'DOB compliance domain' },
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
              From runtime to cloud — the full picture.
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
              9 years. 4 companies. Two industries.
            </p>
          </RevealSection>

          <div className="mt-10 space-y-12">
            {EXPERIENCE.map((job, i) => (
              <RevealSection key={job.company + job.role} delay={i * 80}>
                <div className="grid gap-6 sm:grid-cols-[200px_1fr]">
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

      {/* ── Project: Shlomo ─────────────────────────────────────── */}
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-20">
          <RevealSection>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-faint">Independent Project</h2>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
              Shlomo — SaaS for NYC DOB Training Providers.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Built from scratch to solve a problem I know firsthand: managing courses, students,
              compliance, and payments for NYC DOB training providers. Every layer — architecture,
              backend, frontend, infrastructure, AI pipeline — designed and shipped solo.
            </p>
            <div className="mt-4 flex flex-wrap gap-5">
              <a
                href="https://shlomo.us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200"
              >
                shlomo.us →
              </a>
              <a
                href="/recs/manual/en/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
              >
                View platform documentation →
              </a>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {SHLOMO_CARDS.map((card) => (
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
                Open to senior backend, staff, or founding engineer roles. Also available
                for consulting on distributed systems, AWS architecture, and SaaS platform design.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button size="lg" onClick={() => window.location.href = 'mailto:mduque@shlomo.us'}>
                  mduque@shlomo.us
                </Button>
                <a href="/" className="text-sm text-muted hover:text-ink transition-colors duration-300">
                  ← Back to Shlomo
                </a>
              </div>
            </div>
          </RevealSection>
        </Container>
      </section>

    </div>
  );
}
