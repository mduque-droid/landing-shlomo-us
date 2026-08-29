/**
 * Content for the /marco-duque résumé page. Kept separate from the view so the
 * page component is pure composition (SRP) and copy can change without touching
 * markup.
 */
const resumeData = Object.freeze({
  tech: Object.freeze([
    'Node.js', 'TypeScript', 'Java / Spring Boot', 'Spring WebFlux',
    'Event-Driven Architecture', 'Distributed Systems', 'RabbitMQ', 'BullMQ',
    'Redis', 'Socket.io', 'Idempotency', 'Transactional Integrity',
    'Fault Tolerance', 'AWS S3', 'AWS Rekognition', 'AWS Comprehend',
    'AWS MediaConvert', 'AWS SES / SNS', 'Stripe', 'Sequelize-TypeScript',
    'MariaDB', 'PostgreSQL', 'Salesforce Pipelines', 'Docker', 'Kubernetes',
    'Jenkins CI/CD', 'Angular', 'React',
  ]),

  stats: Object.freeze([
    { value: '9+', label: 'Years shipping' },
    { value: '11', label: 'Microservices in prod' },
    { value: '6', label: 'AWS services integrated' },
    { value: '4+', label: 'Industries shipped' },
  ]),

  experience: Object.freeze([
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
  ]),

  platformCards: Object.freeze([
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
  ]),

  education: Object.freeze([
    { title: 'Python Certificate', org: 'BrainStation', year: '2024', location: 'New York, NY' },
    { title: 'Computer Systems, Coding Specialization', org: 'Politécnico Colombiano Jaime Isaza Cadavid', year: '2012–2014', location: 'Medellín, Colombia' },
  ]),

  contactEmail: 'mduque@shlomo.us',
  linkedin: 'https://www.linkedin.com/in/marco-duque-860b45179/',
});

export default resumeData;
