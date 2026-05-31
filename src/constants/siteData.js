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
    title: "Your technology infrastructure,",
    titleHighlight: "without interruptions",
    subtitle: "Cloud migration, federal compliance, and enterprise-grade software engineering. Zero downtime, maximum impact.",
    cta: {
      primary: "Start Transformation",
      secondary: "View Portfolio",
    },
    badge: "🚀 Zero-Downtime Migration Specialists",
  }),

  services: Object.freeze([
    {
      id: "custom-engineering",
      title: "Custom Software Engineering",
      description: "Scalable, modular development with clean architecture using agile methodologies.",
      longDescription: "We create bespoke software solutions that evolve with your business. Our architectures are designed to be maintainable, scalable, and resilient.",
      icon: "code-brackets",
      color: "cyan",
    },
    {
      id: "compliance",
      title: "Federal & State Regulatory Compliance",
      description: "Software audit and adaptation for federal and state guidelines. Access to GovTech contracts.",
      longDescription: "We open doors to government contracts. We audit, certify, and adapt your tech stack to NIST, FedRAMP, HIPAA, and state compliance standards.",
      icon: "shield-check",
      color: "amber",
    },
    {
      id: "zero-downtime",
      title: "Zero-Downtime Cloud Migration",
      description: "Invisible migration of databases and legacy systems. Your clients continue operating seamlessly.",
      longDescription: "We move your entire infrastructure to the cloud while your users work unaware. Dual-write strategy, automatic failover, and guaranteed rollback.",
      icon: "arrow-right-circle",
      color: "teal",
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
      id: "reliability",
      title: "No Downtime",
      description: "Our code is optimized for continuity. Zero downtime, invisible transitions.",
      icon: "zap",
    },
    {
      id: "federal-ready",
      title: "Government-Ready",
      description: "Federal, state, and regulatory compliance. Your ticket to GovTech contracts.",
      icon: "shield",
    },
    {
      id: "clean-code",
      title: "Clean Architecture",
      description: "Maintainable, scalable, resilient software. Code that lasts.",
      icon: "layers",
    },
    {
      id: "enterprise-grade",
      title: "Enterprise-Grade",
      description: "Robust infrastructure, 24/7 monitoring, guaranteed SLAs.",
      icon: "server-stack",
    },
  ]),

  cta: Object.freeze({
    title: "Ready to scale without interruptions?",
    description: "Discover how companies like yours have migrated to the cloud without stopping work.",
    button: "Schedule Consultation",
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
