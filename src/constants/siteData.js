const siteData = Object.freeze({
  company: Object.freeze({
    name: "Shlomo Software Solutions LLC",
    tagline: "Cloud, Licensing & Security Consulting for New York businesses.",
    mission: "We help Tri-State companies cut cloud waste, secure their systems, and connect the tools they already pay for — without the overhead of a big consultancy.",
    description: "We audit your infrastructure, eliminate wasted SaaS licenses, and secure your cloud integrations. Serving New York, New Jersey, and Connecticut.",
    region: "Serving New York, New Jersey & Connecticut",
    email: "hello@shlomo.us",
    phone: "+1 (862) 403-7724",
    linkedin: "https://www.linkedin.com/in/marco-duque-860b45179/",
    github: "https://github.com/mduque-droid/landing-shlomo-us",
    pgpUrl: "/shlomo-public-key.txt",
    whatsappNumber: "18624037724",
    whatsappMessage: "Hi Shlomo, I'd like to book a free 30-min tech audit. My main challenge is:",
  }),

  navigation: Object.freeze([
    { label: "Services", href: "#services" },
    { label: "How we help", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#cta" },
  ]),

  hero: Object.freeze({
    badge: "Cloud & Security Consulting · New York Tri-State Area",
    title: "Cloud Security, Licensing & System Integration",
    titleHighlight: "Consulting in New York.",
    subtitle: "We audit your infrastructure, eliminate wasted SaaS licenses, and secure your cloud integrations — so you stop overpaying and start scaling safely.",
    cta: {
      primary: "Book a Free 30-Min Tech Audit",
      secondary: "See our services",
    },
    stats: [
      { value: "NY · NJ · CT", label: "On-site and remote across the Tri-State area." },
      { value: "AWS · Azure · GCP", label: "Vendor-neutral audits — we work with what you have." },
      { value: "SHIELD · NYDFS", label: "Security reviews aligned with NY regulations." },
    ],
  }),

  services: Object.freeze([
    {
      id: "cloud-finops",
      title: "Cloud & SaaS Cost Optimization (FinOps)",
      description: "Audits that reduce your AWS/Azure bills and reclaim unused software licenses — often paying for themselves in the first month.",
      icon: "trending-up",
      color: "cyan",
      pain: "Cloud bills grow every quarter and nobody knows exactly why. Idle resources, oversized instances, and 'ghost' SaaS licenses quietly drain thousands every month.",
      benefit: "A clear savings roadmap: right-sized cloud spend, reclaimed licenses, and a documented plan to keep costs down — with measurable dollar savings.",
    },
    {
      id: "cloud-integration",
      title: "Secure Cloud & API Integration",
      description: "We connect your SaaS tools and automate manual processes securely, so data flows between systems without spreadsheets or copy-paste.",
      icon: "layers",
      color: "amber",
      pain: "Your tools don't talk to each other. Teams re-enter the same data across systems, errors pile up, and manual work slows everyone down.",
      benefit: "Reliable, secure integrations and automations between your cloud apps and APIs — fewer errors, less manual work, and data you can trust.",
    },
    {
      id: "security-compliance",
      title: "Cybersecurity & Compliance Audit",
      description: "Cloud security assessments aligned with New York regulations (NY SHIELD Act, NYDFS) to protect your data and keep you compliant.",
      icon: "shield-check",
      color: "teal",
      pain: "A single misconfigured cloud bucket or unpatched system can trigger a breach — and NY regulations like the SHIELD Act carry real penalties for exposed customer data.",
      benefit: "A prioritized security assessment with clear remediation steps, aligned to NY SHIELD and NYDFS — so you protect customers and avoid fines.",
    },
  ]),

  problemSolution: Object.freeze([
    {
      problem: "Cloud bills out of control",
      solution: "We audit AWS/Azure usage, cut idle and oversized resources, and give you a documented savings roadmap.",
    },
    {
      problem: "Ghost & unused software licenses",
      solution: "We inventory every SaaS subscription, flag what's unused or duplicated, and reclaim the wasted spend.",
    },
    {
      problem: "Disconnected systems & manual work",
      solution: "We integrate your tools through secure APIs and automations, so data moves between systems on its own.",
    },
    {
      problem: "Security & compliance gaps",
      solution: "We assess your cloud against NY SHIELD and NYDFS requirements and hand you a prioritized fix list.",
    },
  ]),

  process: Object.freeze([
    {
      step: "01",
      title: "Free Audit",
      description: "A no-cost 30-minute session where we review your cloud, licenses, and integrations to find quick wins.",
    },
    {
      step: "02",
      title: "Diagnostic & Savings Roadmap",
      description: "A clear report of what's wasting money or exposing risk, with prioritized actions and estimated savings.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the roadmap — cost cuts, secure integrations, and remediation — with zero disruption to your business.",
    },
    {
      step: "04",
      title: "Continuous Optimization",
      description: "Ongoing monitoring and quarterly reviews so cloud spend stays lean and your systems stay secure.",
    },
  ]),

  features: Object.freeze([
    {
      id: "local",
      title: "Local to the Tri-State",
      description: "Based in the New York metro area. We understand NY regulations and work on-site across NY, NJ, and CT.",
      icon: "building-2",
    },
    {
      id: "vendor-neutral",
      title: "Vendor-Neutral",
      description: "We don't resell software. Our only incentive is cutting your costs and closing your security gaps.",
      icon: "shield",
    },
    {
      id: "senior",
      title: "Senior Engineers Only",
      description: "You work directly with the engineers doing the audit — no junior handoffs, no account managers.",
      icon: "zap",
    },
    {
      id: "measurable",
      title: "Measurable Results",
      description: "Every engagement ends with documented savings and a security posture you can show your board.",
      icon: "server-stack",
    },
  ]),

  cta: Object.freeze({
    title: "Stop overpaying for cloud and software. Start with a free audit.",
    description: "Book a free 30-minute tech audit. We'll review your cloud spend, licenses, and security — and show you exactly where you're losing money or exposed to risk.",
    button: "Book Your Free 30-Min Tech Audit",
    email: "hello@shlomo.us",
    whatsappNumber: "18624037724",
    whatsappMessage: "Hi Shlomo, I'd like to book a free 30-min tech audit. My main challenge is:",
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
      content: "At Shlomo Software Solutions LLC, we value your privacy. This Privacy Policy governs our data collection practices. We only collect basic contact information (such as name and email) voluntarily provided by users through our contact forms. We do not sell, rent, or lease our customer lists to third parties. All data is processed securely to fulfill service requests and comply with applicable U.S. state and federal regulations, including the New York SHIELD Act. For questions about our privacy practices, please contact us at hello@shlomo.us.",
    }),
    terms: Object.freeze({
      title: "Terms of Service",
      content: "Welcome to Shlomo Software Solutions LLC. By accessing this website, you agree to comply with these Terms of Service. All content, code, architectures, and intellectual property displayed on this site are the exclusive property of Shlomo Software Solutions LLC and are protected by applicable copyright and trademark laws. Our services are provided 'as is' without warranties of any kind. Any legal disputes arising from the use of this site will be governed by the laws of the State of New York. Users agree not to reverse-engineer, decompile, or attempt to extract source code from our proprietary solutions.",
    }),
  }),

  contactChallenges: Object.freeze([
    "Cloud cost reduction (FinOps)",
    "Unused / duplicate SaaS licenses",
    "System & API integration",
    "Cybersecurity assessment",
    "NY SHIELD / NYDFS compliance",
    "Something else",
  ]),
});

export default siteData;
