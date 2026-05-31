const siteData = Object.freeze({
  company: Object.freeze({
    name: "Shlomo Software Solutions LLC",
    tagline: "Enterprise-Grade Infrastructure. No Downtime.",
    mission: "We elevate the technological infrastructure of companies and startups across the United States through premium software engineering, cloud transition, and regulatory adaptability.",
    description: "We guarantee absolute business continuity: executing complex transitions and migrations WITHOUT INTERRUPTIONS.",
    email: "hello@shlomo.us",
    phone: "+1 (862) 403-7724",
    linkedin: "https://linkedin.com/company/shlomo-solutions",
    github: "https://github.com/shlomo-solutions",
  }),

  navigation: Object.freeze([
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Why Shlomo", href: "#features" },
    { label: "Contact", href: "#cta" },
  ]),

  hero: Object.freeze({
    title: "Your Software Doesn't Scale.",
    titleHighlight: "Your Infrastructure is at Risk. We Fix That.",
    subtitle: "We build software that sells, websites that convert, infrastructure that never fails, and strategy that keeps you ahead. Your internal tech team without the payroll.",
    cta: {
      primary: "Audit My Infrastructure",
      secondary: "Schedule a Call",
    },
    badge: "⚡ Scale. Protect. Win.",
  }),

  services: Object.freeze([
    {
      id: "custom-engineering",
      title: "Your App. Your Edge.",
      description: "Custom SaaS and enterprise software that scales. Maintainable code + a team that speaks your language + real support.",
      longDescription: "Tired of outsourcing that doesn't understand your business? Freelancers who disappear? We get your process, not just your tech stack.",
      pain: "Outsourcing that misses the mark. Freelancers who vanish.",
      benefit: "+300% dev velocity",
      icon: "code-brackets",
      color: "cyan",
    },
    {
      id: "web-design",
      title: "Your Website Works 24/7",
      description: "Strategic websites optimized for conversion, speed, and SEO. Every line of code points to revenue.",
      longDescription: "Beautiful websites nobody visits. Fast websites that don't sell. We build websites that convert.",
      pain: "Pretty designs that don't sell. Slow sites that lose customers.",
      benefit: "+45% conversion rate",
      icon: "globe",
      color: "emerald",
    },
    {
      id: "zero-downtime",
      title: "Move Without Losing a Dollar",
      description: "Dual-write strategy, automatic failover, guaranteed rollback. Zero interruptions = zero lost revenue.",
      longDescription: "Migrations that cost millions and take your system down for 8 hours. We move everything while your business stays live.",
      pain: "Migrations that cost millions and kill uptime.",
      benefit: "0 transactions lost",
      icon: "arrow-right-circle",
      color: "teal",
      hasModal: true,
    },
    {
      id: "compliance",
      title: "Tech That Actually Works for You",
      description: "Tech strategy, architecture audits, federal/state compliance. Informed decisions + managed risk.",
      longDescription: "What stack should we use? Are we NIST/FedRAMP ready? How do we secure data? We know.",
      pain: "Wrong tech choices. Compliance risks you don't see.",
      benefit: "Access to government contracts",
      icon: "shield-check",
      color: "amber",
    },
  ]),

  portfolio: Object.freeze([
    {
      id: "project-legacy-migration",
      title: "Legacy System Migration to Kubernetes",
      description: "Monolith to microservices transition on K8s. Operational impact: 0 minutes.",
      tags: ["Kubernetes", "Docker", "PostgreSQL", "Zero-Downtime"],
      icon: "server",
      category: "migration",
    },
    {
      id: "project-govtech-saas",
      title: "GovTech-Compliant SaaS Platform",
      description: "Multi-tenant platform certified for NIST 800-53 compliance. GovTech market access.",
      tags: ["React", "Node.js", "NIST 800-53", "AuditLog"],
      icon: "building-2",
      category: "compliance",
    },
    {
      id: "project-fintech-arch",
      title: "Scalable Fintech Architecture",
      description: "High-performance backend for fintech with asynchronous settlement and immutable audit.",
      tags: ["Go", "Event Sourcing", "gRPC", "Cloud Native"],
      icon: "trending-up",
      category: "engineering",
    },
  ]),

  features: Object.freeze([
    {
      id: "results-aligned",
      title: "We're Paid for Results, Not Hours",
      description: "You care about one thing: Does it work? Our model aligns with your success, not our billing.",
      icon: "zap",
    },
    {
      id: "business-minded",
      title: "We Speak Revenue, Not Jargon",
      description: "We understand your margins, your customers, your pain. Engineers who think like entrepreneurs.",
      icon: "trending-up",
    },
    {
      id: "reliability",
      title: "Your Infrastructure Doesn't Go Down. Period.",
      description: "99.99% isn't a goal—it's standard. While others promise uptime, we guarantee it.",
      icon: "shield",
    },
    {
      id: "scaling",
      title: "We Scale With You",
      description: "Year 2, your architecture is solid. Year 5, it's still solid. We build for the future.",
      icon: "layers",
    },
  ]),

  cta: Object.freeze({
    title: "Your Next Move Should Be a Conversation",
    description: "30 minutes is free. You tell us your challenge. We tell you if we can help and how. No BS. No empty promises.",
    button: "Schedule a Call",
    email: "hello@shlomo.us",
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
