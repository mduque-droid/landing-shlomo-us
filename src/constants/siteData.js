const siteData = Object.freeze({
  company: Object.freeze({
    name: "Shlomo Software Solutions LLC",
    tagline: "Distributed Systems Engineering. Zero Operational Risk.",
    mission: "We are the engineering team CTOs and VPEs call when the architecture is at its breaking point. Three senior engineers — deep in distributed systems, data infrastructure, and federal compliance — embedded directly in your team without the overhead of a large consultancy.",
    description: "We execute complex infrastructure migrations and system redesigns without interrupting your business. No downtime. No data loss. No surprises.",
    email: "hello@shlomo.us",
    phone: "+1 (862) 403-7724",
    linkedin: "https://linkedin.com/company/shlomo-solutions",
    github: "https://github.com/shlomo-solutions",
    pgpUrl: "/.well-known/pgp-public-key.asc",
    whatsappNumber: "18624037724",
    whatsappMessage: "Hi, I'd like to discuss an infrastructure engineering challenge with Shlomo. Our main bottleneck is:",
  }),

  navigation: Object.freeze([
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Why Shlomo?", href: "#features" },
    { label: "Contact", href: "#cta" },
  ]),

  hero: Object.freeze({
    badge: "3 Senior Engineers. Zero Bureaucracy.",
    title: "The infrastructure",
    titleHighlight: "you cannot afford to get wrong.",
    subtitle: "40TB migrated to cloud-native without downtime. 2,500 TPS fintech backends under 45ms P99. $200K in production losses prevented in 72 hours. This is what Staff-level engineering looks like.",
    cta: {
      primary: "Start the Engineering Conversation",
      secondary: "View Portfolio",
    },
  }),

  services: Object.freeze([
    {
      id: "custom-engineering",
      title: "Distributed Systems & Data Engineering",
      description: "Event-driven architectures, CQRS/Event Sourcing, and idempotent Kafka pipelines built for horizontal scale and strong consistency — on AWS and GCP.",
      longDescription: "We architect under real CAP theorem constraints, not textbook scenarios. Bounded contexts with saga orchestration, schema-first gRPC contracts, and connection-layer management (PgBouncer, read replicas) that survives traffic spikes without rewrites. A single connection-pool exhaustion can halt your entire system — we've seen it cost $200K in 72 hours. We eliminate those single points of failure before they reach production.",
      icon: "code-brackets",
      color: "cyan",
      hasModal: true,
      pain: "Synchronous monolithic coupling creates cascading failures under load. Technical debt compounds every sprint until a single connection-pool exhaustion can halt your entire system and cost six figures in an afternoon.",
      benefit: "Fault-tolerant, fully observable systems with documented SLOs, guaranteed data integrity, and zero single points of failure.",
    },
    {
      id: "compliance",
      title: "Federal & State Regulatory Compliance",
      description: "Zero-Trust network segmentation, NIST 800-53 control implementation, SOC2 Type II readiness, and STIG-hardened compute. Infrastructure cleared for GovTech market entry.",
      longDescription: "We've prepared infrastructure for successful SOC2 Type II and HIPAA audits. Our NIST 800-53 implementations start at the network layer: Zero-Trust segmentation, least-privilege IAM, encryption in transit and at rest, immutable audit logs with cryptographic chaining, and continuous compliance monitoring via automated control validation. Auditors review implemented controls — not roadmaps.",
      icon: "shield-check",
      color: "amber",
      hasModal: true,
      pain: "Undocumented control implementations and missing authorization packages block access to federal contract vehicles worth millions in ARR. Auditors don't accept 'we plan to implement this.'",
      benefit: "Audit-ready systems with implemented, tested, and documented controls — SOC2, HIPAA, and NIST 800-53 aligned. Not compliance theater.",
    },
    {
      id: "zero-downtime",
      title: "Zero-Downtime Cloud Migration",
      description: "Live production migration using dual-write consistency, canary deployments with automated error-rate gates, and chaos-validated rollback. 40TB across 15,000 concurrent users. Zero interruptions.",
      longDescription: "We've executed this at scale: AWS EKS with ArgoCD GitOps pipelines, TimescaleDB for time-series workloads, Terraform-managed infrastructure that is reproducible, auditable, and recoverable. Canary deployments with automated promotion gates — no humans approving rollouts at 3AM. Legacy on-premise infrastructure accumulates operational risk exponentially. The longer you wait, the more a 'routine migration' resembles a controlled demolition.",
      icon: "arrow-right-circle",
      color: "teal",
      hasModal: true,
      pain: "Legacy on-premise infrastructure accumulates operational risk exponentially. Every month of delay is another month of compounding downtime exposure, vendor lock-in, and ops cycles spent on maintenance instead of product.",
      benefit: "IaC-managed cloud infrastructure on AWS/GCP with sub-5min RTO, validated rollback procedures, and chaos-tested failover — executed while your users work unaware.",
    },
  ]),

  portfolio: Object.freeze([
    {
      id: "project-legacy-migration",
      title: "Legacy System Migration to Kubernetes",
      description: "40TB production database migrated using real-time PostgreSQL/TimescaleDB replication and canary deployments on AWS EKS. 15,000 concurrent peak users. Terraform + ArgoCD GitOps pipeline. Duration: 3 months. Production downtime: 0 minutes.",
      tags: ["AWS EKS", "TimescaleDB", "Terraform", "ArgoCD", "Zero-Downtime"],
      icon: "server",
      category: "migration",
    },
    {
      id: "project-govtech-saas",
      title: "GovTech-Ready SaaS Platform",
      description: "Multi-tenant SaaS with row-level security, append-only cryptographically chained audit logs, and NIST 800-53 Moderate control implementation. SOC2 Type II control framework applied from day one. Aligned for FedRAMP authorization path.",
      tags: ["NIST 800-53", "SOC2 Type II", "Zero-Trust", "FedRAMP-Ready"],
      icon: "building-2",
      category: "compliance",
    },
    {
      id: "project-fintech-arch",
      title: "High-Throughput Fintech Backend",
      description: "Event-sourced financial ledger in Go processing 2,500 TPS with exactly-once Kafka delivery semantics and CockroachDB for distributed ACID transactions. P99 latency: sub-45ms on gRPC. Instrumented with OpenTelemetry, Prometheus/Grafana, and Datadog APM.",
      tags: ["Go", "Apache Kafka", "CockroachDB", "gRPC", "Event Sourcing"],
      icon: "trending-up",
      category: "engineering",
    },
  ]),

  features: Object.freeze([
    {
      id: "reliability",
      title: "Zero-Downtime Engineering",
      description: "Proven, not promised. Dual-write consistency, canary deployments with automated error-rate gates, and chaos-validated rollback. 40TB migrated in production. Zero interruptions.",
      icon: "zap",
    },
    {
      id: "federal-ready",
      title: "Federal Authorization",
      description: "SOC2 Type II and HIPAA audits cleared. NIST 800-53 controls implemented, tested, and documented — not listed on a spreadsheet.",
      icon: "shield",
    },
    {
      id: "clean-code",
      title: "Event-Driven Architecture",
      description: "CQRS, Event Sourcing, and saga orchestration on Kafka. Systems that decompose cleanly under operational pressure and scale horizontally without rewrites.",
      icon: "layers",
    },
    {
      id: "enterprise-grade",
      title: "Full Observability Stack",
      description: "OpenTelemetry instrumentation, Prometheus/Grafana for infrastructure metrics, Datadog APM for distributed tracing. SLOs defined before the first line of code.",
      icon: "server-stack",
    },
  ]),

  cta: Object.freeze({
    title: "Your architecture is either an asset or a liability.",
    description: "Three senior engineers — no project managers, no account executives, no junior handoffs. Direct access to the team that designs, builds, and operates your infrastructure.",
    button: "Start the Engineering Conversation",
    email: "hello@shlomo.us",
    whatsappNumber: "18624037724",
    whatsappMessage: "Hi, I'd like to discuss an infrastructure engineering challenge with Shlomo. Our main bottleneck is:",
  }),

  footer: Object.freeze({
    copyright: "Shlomo Software Solutions LLC",
    year: new Date().getFullYear(),
    links: [
      { label: "Privacy", href: "privacy" },
      { label: "Terms", href: "terms" },
    ],
  }),

  legal: Object.freeze({
    privacy: Object.freeze({
      title: "Privacy Policy",
      content: "At Shlomo Software Solutions LLC, we value your privacy. This Privacy Policy governs our data collection practices. We only collect basic contact information (such as name and email) voluntarily provided by users through our contact forms. We do not sell, rent, or lease our customer lists to third parties. All data is processed securely to fulfill service requests and comply with applicable U.S. state and federal regulations. For questions about our privacy practices, please contact us at hello@shlomo.us.",
    }),
    terms: Object.freeze({
      title: "Terms of Service",
      content: "Welcome to Shlomo Software Solutions LLC. By accessing this website, you agree to comply with these Terms of Service. All content, code, architectures, and intellectual property displayed on this site are the exclusive property of Shlomo Software Solutions LLC and are protected by applicable copyright and trademark laws. Our services are provided 'as is' without warranties of any kind. Any legal disputes arising from the use of this site will be governed by the laws of the United States. Users agree not to reverse-engineer, decompile, or attempt to extract source code from our proprietary solutions.",
    }),
  }),
});

export default siteData;
