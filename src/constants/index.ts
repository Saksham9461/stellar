import type { Service, Project, BlogPost, Testimonial, FAQItem, TimelineStep, TeamMember } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'ai-development',
    title: 'Artificial Intelligence',
    subtitle: 'Next-Generation Cognitive Engineering',
    icon: 'Brain',
    overview: 'Harness the power of generative AI, customized Large Language Models (LLMs), predictive analytics, and deep learning. We design and deploy intelligent, self-learning cognitive systems that transform complex data into actionable operations.',
    benefits: [
      'Automate decision-making pipelines by up to 85%',
      'Unlock predictive insights from structured and unstructured raw data',
      'Deliver hyper-personalized customer experiences at global scale'
    ],
    features: [
      'Custom Retrieval-Augmented Generation (RAG) Systems',
      'Predictive Analytics & Risk Modelling Algorithms',
      'Natural Language Processing (NLP) & Sentiment Systems',
      'Computer Vision & Automated Visual Inspection'
    ],
    process: [
      { step: '01', description: 'Data Audit & Feasibility Assessment' },
      { step: '02', description: 'Model Architecture Selection & Fine-Tuning' },
      { step: '03', description: 'API Integration & Security Guardrails Setup' },
      { step: '04', description: 'Continuous Learning Feedback Loop Implementation' }
    ],
    techUsed: ['Python', 'PyTorch', 'Hugging Face', 'OpenAI API', 'LangChain', 'Pinecone', 'TensorFlow']
  },
  {
    id: 'intelligent-automation',
    title: 'Automation Solutions',
    subtitle: 'End-to-End Workflow Optimization',
    icon: 'Cpu',
    overview: 'Eliminate repetitive operational overhead and human error. Our custom automation platforms bridge the gap between legacy systems and modern APIs, orchestrating enterprise-wide workflows seamlessly.',
    benefits: [
      'Reduce process cycle times by over 70%',
      'Eliminate manual data entry errors and compliance bottlenecks',
      'Integrate disparate software systems without rebuilding legacy infrastructure'
    ],
    features: [
      'Robotic Process Automation (RPA)',
      'Enterprise API Integration & Middleware Development',
      'CI/CD Pipeline Automation & Cloud Provisioning',
      'Event-Driven Workflow Orchestration'
    ],
    process: [
      { step: '01', description: 'Manual Process Bottleneck Analysis' },
      { step: '02', description: 'Integration Mapping & System Design' },
      { step: '03', description: 'Security and Exception Handling Rules Setup' },
      { step: '04', description: 'Automated Agent Deployment & System Monitoring' }
    ],
    techUsed: ['Node.js', 'Python', 'Apache Kafka', 'n8n', 'Docker', 'Kubernetes', 'AWS Lambda']
  },
  {
    id: 'web-development',
    title: 'Website Development',
    subtitle: 'High-Performance Web Architectures',
    icon: 'Globe',
    overview: 'We build fast, secure, and visually stunning web applications optimized for conversions and search engine performance. Adhering to Vercel and Stripe engineering standards, our apps are built to scale infinitely.',
    benefits: [
      'Sub-100ms load times using edge runtime architectures',
      'SEO-first coding standards for maximum organic visibility',
      'Fully responsive fluid grids designed for mobile-first user bases'
    ],
    features: [
      'Headless CMS & Decoupled Frontend Architectures',
      'Static Site Generation (SSG) & Server-Side Rendering (SSR)',
      'Interactive Custom Dashboards & Analytics Systems',
      'Secure E-Commerce Infrastructure Integrations'
    ],
    process: [
      { step: '01', description: 'Wireframing & Structural SEO Planning' },
      { step: '02', description: 'High-Fidelity Interface Development' },
      { step: '03', description: 'API Hookup & Serverless Functions Setup' },
      { step: '04', description: 'Global CDN Deployment & Speed Auditing' }
    ],
    techUsed: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Vercel']
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    subtitle: 'Fluid Native & Cross-Platform Experiences',
    icon: 'Smartphone',
    overview: 'Deploy feature-rich native iOS and Android apps utilizing a unified codebase. We build secure apps utilizing hardware acceleration, offline capabilities, and native device feature integrations.',
    benefits: [
      'Sleek 120Hz native animation rendering and layout logic',
      'Robust offline-first synchronisation and storage layers',
      'Consistent design system across iOS, Android, and Web platforms'
    ],
    features: [
      'Biometric Authentication & Native Hardware Integration',
      'Push Notifications Engines & Deep-linking Systems',
      'Offline Database Syncing & Local File Caching',
      'In-App Purchase & Stripe Mobile Payment Integrations'
    ],
    process: [
      { step: '01', description: 'UX Mapping & Native Gesture Prototyping' },
      { step: '02', description: 'Core Application Loop & API Synchronization' },
      { step: '03', description: 'Hardware Interface & Security Testing' },
      { step: '04', description: 'App Store (iOS) & Google Play Store Publishing' }
    ],
    techUsed: ['React Native', 'Flutter', 'TypeScript', 'Swift', 'Kotlin', 'SQLite', 'Firebase']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    subtitle: 'Premium Visual Design Systems',
    icon: 'Palette',
    overview: 'We establish modern design languages tailored to your audience. Grounded in micro-interactions, precise grid systems, and vibrant aesthetics, our UI/UX services craft memorable digital experiences.',
    benefits: [
      'Increase customer engagement metrics by up to 120%',
      'Reduce onboarding friction and user churn rates',
      'Accelerate future engineering cycles with cohesive Figma component systems'
    ],
    features: [
      'Interactive High-Fidelity Prototypes (Figma / Framer)',
      'Enterprise-Grade Reusable Custom Design Systems',
      'Comprehensive Accessibility Audits (WCAG AA Compliance)',
      'User Journey & Conversion Rate Optimization (CRO) Consulting'
    ],
    process: [
      { step: '01', description: 'User Personas & Wireframe Flow Mapping' },
      { step: '02', description: 'Visual Style Guide & Asset Creation' },
      { step: '03', description: 'High-Fidelity Component & Screen Layout Design' },
      { step: '04', description: 'Interactive Motion Prototypes & Developer Handoff' }
    ],
    techUsed: ['Figma', 'Framer', 'Adobe Creative Suite', 'Principle', 'Spline 3D']
  },
  {
    id: 'saas-development',
    title: 'SaaS Development',
    subtitle: 'Scalable Multi-Tenant Architectures',
    icon: 'Layers',
    overview: 'Turn your software vision into a recurring revenue engine. We build cloud-based SaaS applications from scratch, featuring secure multi-tenancy, granular RBAC permissions, and automated subscription setups.',
    benefits: [
      'Horizontally scaling server environments to support million+ tenants',
      'Fully automated billing pipelines with subscription fallback systems',
      'Granular operational audit logging for enterprise-tier clients'
    ],
    features: [
      'Multi-Tenant Database Isolation Schemes',
      'Advanced Subscription Lifecycle Engine (Stripe/Paddle)',
      'Role-Based Access Control (RBAC) & Single Sign-On (SSO)',
      'Developer API Platforms & Webhook Subscription Systems'
    ],
    process: [
      { step: '01', description: 'Tenant Architecture & Security Design' },
      { step: '02', description: 'Database Schema & Subscription Model Design' },
      { step: '03', description: 'Core Application Engine & Integrations Development' },
      { step: '04', description: 'High-Availability Testing & Zero-Downtime Deployment' }
    ],
    techUsed: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Stripe API', 'Auth0']
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    subtitle: 'Enterprise-Grade Bespoke Systems',
    icon: 'FileCode',
    overview: 'When generic platforms fall short, we build robust custom systems tailored to your unique internal operations. From custom supply chain dashboards to high-performance calculation engines, we engineer for longevity.',
    benefits: [
      'Software built strictly around your existing workflows',
      'Full data ownership and zero perpetual third-party licensing fees',
      'Highly extensible microservice bases designed to evolve with your scale'
    ],
    features: [
      'High-Performance Computation & Calculation Engines',
      'Bespoke Database Schema Architectures',
      'Legacy Data Migration & Safe System Cut-overs',
      'Real-Time Analytics Dashboards & Custom Exporters'
    ],
    process: [
      { step: '01', description: 'Requirements Specification & Business Discovery' },
      { step: '02', description: 'Microservices & Database Design' },
      { step: '03', description: 'Iterative Development & Safe Data Migration' },
      { step: '04', description: 'On-Premise or Private Cloud Deployment' }
    ],
    techUsed: ['Go', 'Rust', 'Java Spring Boot', 'PostgreSQL', 'Apache Kafka', 'Kubernetes']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'pulseflow-ehr',
    title: 'PulseFlow Medical SaaS',
    category: 'Healthcare SaaS',
    subtitle: 'Next-Generation Electronic Health Records',
    overview: 'PulseFlow is a HIPAA-compliant medical EHR and scheduling portal engineered to eliminate charting bottlenecks for multi-location clinic networks. The platform replaces clunky legacy systems with a lightning-fast web experience.',
    problem: 'Clinic operations were crippled by high latency, confusing patient portal layouts, and slow charting interfaces that added hours of administrative overhead to medical practitioners daily.',
    solution: 'We engineered a React and Next.js SPA with optimistic UI updates, integrated custom generative AI dictation for automated charting, and implemented a robust offline-first synchronization database.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind CSS', 'OpenAI Whisper API'],
    results: [
      'Reduced charting times for medical staff by 42%',
      'Maintained 99.99% system uptime during clinic operational hours',
      'HIPAA compliant storage and transfer protocols audited with zero flags'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'apex-erp',
    title: 'Apex Supply Chain ERP',
    category: 'ERP System',
    subtitle: 'Real-time Manufacturing Resource Planner',
    overview: 'ApexERP coordinates inventory tracking, production schedules, financial reports, and logistics fleets across four international factories in real-time.',
    problem: 'Siloed data systems across factory floors led to inventory tracking delays, frequent parts shortages, and inaccurate billing reports that cost the client millions in logistics adjustments.',
    solution: 'Designed and deployed an event-driven Go microservices architecture coupled with a real-time React analytics control center, using WebSockets for live status updates.',
    technologies: ['React', 'Go', 'gRPC', 'Apache Kafka', 'Redis', 'Docker', 'Kubernetes', 'PostgreSQL'],
    results: [
      'Lowered raw materials storage costs by 18% via just-in-time delivery logic',
      'Increased inter-departmental communications speed by 350ms',
      'Eliminated shipping reporting discrepancies within 30 days of launch'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gourmetgo-ecosystem',
    title: 'GourmetGo Order Hub',
    category: 'Restaurant App',
    subtitle: 'End-to-End Kitchen Management and App Delivery System',
    overview: 'GourmetGo is a multi-tenant order management suite coordinating consumer-facing iOS/Android apps, point-of-sale systems, and kitchen displays.',
    problem: 'Third-party delivery portals charged exorbitant commissions and failed to sync seamlessly with in-house POS units, creating order mismatches and chaotic kitchen counters.',
    solution: 'Built a unified backend server and React Native applications connected to dynamic kitchen display interfaces that update using persistent low-latency server connections.',
    technologies: ['React Native', 'Node.js', 'WebSockets', 'MongoDB', 'Stripe API', 'Google Maps API'],
    results: [
      'Boosted restaurant profit margins by 22% by bypassing aggregators',
      'Reduced average order-to-delivery times to just 28 minutes',
      'Achieved a 4.9 App Store rating across 15,000 active monthly users'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'aetherai-agent',
    title: 'AetherAI Corporate RAG',
    category: 'AI Chatbot',
    subtitle: 'Secure Knowledge Engine for Enterprise Operations',
    overview: 'AetherAI connects to internal document databases, wiki pages, and chat history to provide immediate, context-aware answers to corporate team members.',
    problem: 'Employees spent an average of 1.8 hours daily searching through disjointed Google Docs, Slack logs, and wikis to retrieve product and compliance specifications.',
    solution: 'We engineered a vector database ingestion system (Pinecone) with a React conversation interface, leveraging LLM fine-tuning to deliver citation-backed answers with sub-second response times.',
    technologies: ['React', 'Python', 'LangChain', 'Pinecone', 'FastAPI', 'AWS ECS', 'OpenAI GPT-4o'],
    results: [
      'Reduced internal support resolution times by 68%',
      'Successfully ingested and indexed 1.2M internal documents securely',
      'Saved an estimated 4,200 administrative hours in the first quarter'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'velocart-commerce',
    title: 'VeloCart Headless Storefront',
    category: 'Ecommerce Platform',
    subtitle: 'Lightning-Fast Headless Shopify Interface',
    overview: 'VeloCart is a headless ecommerce architecture utilizing a custom edge-cached React frontend to serve millions of global shoppers with instantaneous search and checkout.',
    problem: 'The client’s standard Shopify site suffered from slow loading speeds (4.2 seconds), high mobile cart abandonment rates, and limited customization options.',
    solution: 'Developed a headless site on Vite/React with dynamic routing, loading products directly from a GraphQL API, utilizing Stripe checkout APIs and CDN caching.',
    technologies: ['React', 'TypeScript', 'Shopify Storefront API', 'Tailwind CSS', 'Stripe Checkout', 'Cloudflare Pages'],
    results: [
      'Achieved a perfect 100 PageSpeed score for performance on mobile devices',
      'Reduced cart abandonment rate by 14%',
      'Increased year-on-year online sales conversions by 31%'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'fleetpulse-tracker',
    title: 'FleetPulse GPS Telematics',
    category: 'Fleet Management',
    subtitle: 'IoT-enabled Route Optimization & Diagnostics Dashboard',
    overview: 'FleetPulse aggregates real-time data from OBD-II vehicle hardware to monitor driver behavior, optimize delivery routes, and schedule predictive engine maintenance.',
    problem: 'A national delivery service struggled with rising fuel costs, unsafe driving records, and sudden, expensive vehicle engine failures on routes.',
    solution: 'Designed an IoT dashboard that consumes high-frequency diagnostic telemetry, processes it using Go stream managers, and visualizes mapping routes via a customized Leaflet dashboard.',
    technologies: ['React', 'Go', 'TimescaleDB', 'Docker', 'AWS IoT Core', 'Leaflet Maps', 'Tailwind CSS'],
    results: [
      'Reduced overall fleet fuel consumption by 14% via route planning',
      'Decreased vehicle breakdown incidents by 35% with diagnostic alarms',
      'Enabled dispatcher tracking of over 1,200 active vehicles concurrently'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PROCESS_STEPS: TimelineStep[] = [
  {
    phase: '01',
    title: 'Discovery & Consultation',
    description: 'We align with your key business stake-holders to identify core objectives, analyze target users, and determine technical boundaries.',
    details: ['Operational Bottleneck Analysis', 'User Persona Development', 'Competitive Technical Analysis']
  },
  {
    phase: '02',
    title: 'Deep Market Research',
    description: 'We audit existing market standards and reverse engineer design choices of sector leaders to build your platform’s strategic advantage.',
    details: ['Architecture Feasibility Audits', 'UX Flow Research Studies', 'Security & Compliance Reviews']
  },
  {
    phase: '03',
    title: 'Strategic Planning',
    description: 'We map out database structures, API routes, hosting setups, and project milestones to lay a rock-solid technical roadmap.',
    details: ['Microservices Topology Maps', 'Milestone Schedule Planning', 'Data Security Architecture Drafts']
  },
  {
    phase: '04',
    title: 'High-Fidelity UI/UX Design',
    description: 'We design complete, interactive layouts and functional Figma design systems that map your custom themes and user actions.',
    details: ['Framer Screen Transitions Mockups', 'Accessible Interface Palette Drafting', 'Component System Creation']
  },
  {
    phase: '05',
    title: 'High-Performance Development',
    description: 'Our engineering staff builds the product using optimized code stacks, strictly enforcing clean TypeScript types and semantic grids.',
    details: ['TypeScript Type Verification', 'Optimistic UI Updates Hookup', 'Serverless Functions Orchestrator']
  },
  {
    phase: '06',
    title: 'Rigorous Testing',
    description: 'We run end-to-end integration tests, mobile responsiveness audits, and load stress scripts to assure zero bugs at release.',
    details: ['Cypress Automated Testing Runs', 'Google Lighthouse Performance Auditing', 'Vulnerability Penetration Tests']
  },
  {
    phase: '07',
    title: 'Global Scale Deployment',
    description: 'We set up zero-downtime deployment runs to highly resilient edge servers and global CDN endpoints with automatic failover.',
    details: ['CI/CD Zero-Downtime Releases', 'DNS Configuration & Cache Setup', 'Production Database Migrations']
  },
  {
    phase: '08',
    title: 'Continuous Maintenance',
    description: 'We actively monitor crash rates, server request queues, and dependency update notices to keep the application running at peak efficiency.',
    details: ['Real-time Server Error Monitoring', 'Regular Framework & Library Patches', 'Feature Request Implementation Cycles']
  }
];

export const TECHNOLOGIES = {
  frontend: [
    { name: 'React 19', level: 98, icon: 'Flame' },
    { name: 'TypeScript', level: 95, icon: 'ShieldAlert' },
    { name: 'Tailwind CSS v4', level: 96, icon: 'Wind' },
    { name: 'Framer Motion', level: 92, icon: 'Sparkles' },
    { name: 'Next.js', level: 90, icon: 'Layers' }
  ],
  backend: [
    { name: 'Node.js', level: 92, icon: 'Server' },
    { name: 'Go', level: 85, icon: 'Zap' },
    { name: 'Python', level: 88, icon: 'Terminal' },
    { name: 'NestJS', level: 80, icon: 'Cpu' }
  ],
  databases: [
    { name: 'PostgreSQL', level: 94, icon: 'Database' },
    { name: 'MongoDB', level: 90, icon: 'FileCode2' },
    { name: 'Redis', level: 85, icon: 'Clock' },
    { name: 'Pinecone (Vector)', level: 80, icon: 'Binary' }
  ],
  cloud: [
    { name: 'AWS', level: 88, icon: 'Cloud' },
    { name: 'Vercel Edge', level: 95, icon: 'Activity' },
    { name: 'Docker', level: 90, icon: 'Box' },
    { name: 'Kubernetes', level: 80, icon: 'Compass' }
  ],
  ai: [
    { name: 'OpenAI GPT-4o', level: 92, icon: 'Brain' },
    { name: 'LangChain', level: 88, icon: 'Network' },
    { name: 'Whisper Speech API', level: 85, icon: 'Mic' },
    { name: 'Hugging Face models', level: 80, icon: 'Combine' }
  ],
  devops: [
    { name: 'GitHub Actions', level: 90, icon: 'RefreshCw' },
    { name: 'Terraform', level: 78, icon: 'Sliders' },
    { name: 'Sentry Analytics', level: 88, icon: 'Eye' }
  ]
};

export const INDUSTRIES = [
  { name: 'Healthcare', icon: 'HeartPulse', description: 'HIPAA-compliant software, doctor-patient communication tunnels, and secure charting systems.' },
  { name: 'Education', icon: 'GraduationCap', description: 'Scalable learning dashboards, student attendance databases, and interactive classroom feeds.' },
  { name: 'Finance', icon: 'TrendingUp', description: 'Secure transaction gateways, real-time portfolio tracking, and custom accounting ERPs.' },
  { name: 'Real Estate', icon: 'Home', description: 'Bespoke customer relationship dashboards, virtual listing interfaces, and lease contracts generators.' },
  { name: 'Manufacturing', icon: 'Factory', description: 'IoT sensor trackers, automated inventory warnings, and factory floor coordination schedules.' },
  { name: 'Retail & E-commerce', icon: 'ShoppingBag', description: 'Fast search index engines, integrated card portals, and multi-location shop inventory sync.' },
  { name: 'Hospitality', icon: 'Coffee', description: 'Dynamic booking engines, room scheduling matrices, and instant guest billing features.' },
  { name: 'Logistics', icon: 'Truck', description: 'GPS fleet routers, real-time delivery estimates, and driver behaviour analytics.' },
  { name: 'Government', icon: 'Landmark', description: 'High-compliance citizen interfaces, document storage nodes, and digital application managers.' },
  { name: 'Automotive', icon: 'Car', description: 'Connected vehicle telemetry engines, dealership management hubs, and auto servicing logs.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer',
    company: 'MedVitals Health',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    content: '[Placeholder Testimonial] Working with Antview Technologies transformed our clinics operations. The custom HIPAA-compliant dashboard they built resolved latency issues that had plagued us for years. Excellent front-end design and highly professional developers.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'VP of Engineering',
    company: 'Apex Supply Chain',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    content: '[Placeholder Testimonial] The Go microservices and React control desk Antview built handles raw event streams seamlessly. Our parts shipping discrepancies vanished within weeks. Highly recommend their engineering consultation.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Director of Product',
    company: 'GourmetGo Delivery',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    content: '[Placeholder Testimonial] Antview delivered our consumer mobile apps and real-time kitchen displays ahead of schedule. The UX feels incredibly premium, with fluid animations that our customers constantly compliment. They are true partners.',
    rating: 5
  },
  {
    id: 't4',
    name: 'David Vance',
    role: 'Founder & CEO',
    company: 'AetherAI Corp',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    content: '[Placeholder Testimonial] We were deeply impressed by Antviews understanding of vector databases and generative AI pipelines. They integrated AetherAI seamlessly into our security frameworks, saving us hundreds of hours daily.',
    rating: 5
  },
  {
    id: 't5',
    name: 'Rebecca Sterling',
    role: 'Director of Marketing',
    company: 'VeloCart Retail',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    content: '[Placeholder Testimonial] The speed of our new headless commerce site is staggering. Mobile page speed scores rose to a perfect 100, and our checkouts have never been smoother. Antview Technologies are frontend masters.',
    rating: 5
  },
  {
    id: 't6',
    name: 'Gregory Cole',
    role: 'VP of Logistics Operations',
    company: 'FleetPulse Diagnostics',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
    content: '[Placeholder Testimonial] Tracking 1,200 vehicles in real-time is no small task. Antview engineered a telemetry pipeline that functions flawlessly, preventing multiple breakdowns through smart preventative diagnostic alerts.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is your typical engagement process and timeline?',
    answer: 'Our typical development project lasts between 8 to 16 weeks, moving systematically from initial business discovery, structural wireframing, high-fidelity UI/UX design, to testing and final deployment. We work in two-week agile sprint cycles with regular reviews.'
  },
  {
    question: 'How do you ensure enterprise-grade security and compliance?',
    answer: 'We design apps with a security-first approach. For medical systems, we construct HIPAA-compliant secure databases with end-to-end data encryption. For standard corporate SaaS, we leverage advanced authentication protocols, including single sign-on (SSO) and role-based access control (RBAC).'
  },
  {
    question: 'Do we own the full intellectual property rights of the software?',
    answer: 'Yes, absolutely. Once the project phases are complete and final invoicing is settled, full ownership of the intellectual property (IP), source code repository, and deployment environment keys is transferred directly to your organization.'
  },
  {
    question: 'Which technology stacks do you recommend for SaaS and Web apps?',
    answer: 'We specialize in React 19, TypeScript, Tailwind CSS, Next.js, and Node.js for modern high-performance web systems. For backend microservices requiring raw computational performance, we typically engineer in Go or Rust.'
  },
  {
    question: 'Can you integrate your solutions with our legacy internal software?',
    answer: 'Yes, we frequently build custom API middleware and middleware databases that hook into older internal databases, legacy accounting systems, and ERP files, formatting the data streams for modern cloud applications.'
  },
  {
    question: 'What support frameworks do you offer post-deployment?',
    answer: 'We provide comprehensive post-launch SLA support packages ranging from basic dependency monitoring to dedicated engineering support with guaranteed response times to cover feature requests, security audits, and scale adjustments.'
  },
  {
    question: 'Are your designs compliant with accessibility standards?',
    answer: 'Yes, all interfaces designed by Antview Technologies aim for strict compliance with Web Content Accessibility Guidelines (WCAG) AA standards, ensuring keyboard-navigable pages, screen-reader friendliness, and proper text contrast ratios.'
  },
  {
    question: 'How do you optimize applications for fast loading performance?',
    answer: 'We enforce static rendering (SSG) where possible, employ image lazy-loading, use vector graphics, optimize asset bundles via code-splitting and dynamic route imports, and leverage global CDN cache routing.'
  },
  {
    question: 'Do you assist in app store optimization and publishing?',
    answer: 'Yes, we take care of the entire submission pipeline, building release bundles, preparing security questionnaires, and managing communications with both Apple App Store and Google Play console reviewers.'
  },
  {
    question: 'What vector databases and models do you use for AI applications?',
    answer: 'We regularly work with Pinecone, pgvector, and Milvus. For LLMs, we integrate with OpenAI models, Anthropic Claude, and fine-tune open-weights models (like Llama) deployed on secure private cloud infrastructures.'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Starter Suite',
    priceMonthly: 3499,
    priceYearly: 2999,
    description: 'Perfect for startups and expanding companies needing custom high-performance web landing points.',
    features: [
      'Bespoke React + Vite web architecture',
      'Fully responsive UI layout design',
      'Integration with headless CMS platform',
      'Zod validated contact forms',
      'Standard SEO metadata setups',
      '30 days post-launch support SLA'
    ],
    ctaText: 'Launch Starter Project',
    popular: false
  },
  {
    name: 'Professional Scale',
    priceMonthly: 7499,
    priceYearly: 6499,
    description: 'Ideal for medium enterprises looking for bespoke SaaS architectures, advanced integrations, or mobile apps.',
    features: [
      'Everything in Starter Suite',
      'Dedicated React Native mobile app (iOS/Android)',
      'Secure Stripe/Paddle payment gateways',
      'Role-based login permissions (RBAC)',
      'Vector database search indexing',
      '90 days high-priority support SLA'
    ],
    ctaText: 'Deploy Professional Tech',
    popular: true
  },
  {
    name: 'Enterprise Custom',
    priceMonthly: 14999,
    priceYearly: 12999,
    description: 'Tailored specifically for global corporations requiring custom calculations engines or microservices databases.',
    features: [
      'Bespoke Go/Rust backend microservices',
      'HIPAA / SOC2 security configurations',
      'Real-time IoT database synchronization',
      'Zero-downtime CI/CD container clusters',
      'Dedicated lead developer allocation',
      '1 year dedicated enterprise support SLA'
    ],
    ctaText: 'Inquire Enterprise Systems',
    popular: false
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'optimizing-edge-performance-modern-react',
    title: 'Optimizing Edge Performance in Modern React 19 Architectures',
    category: 'Engineering',
    publishedAt: 'July 28, 2026',
    readTime: '6 min read',
    excerpt: 'Deep dive into server actions, optimistic UI updates, and React 19 resource preloading methods to score perfect 100 ratings in audit logs.',
    content: 'Modern web development requires sub-second interaction times to prevent user abandonment. In this comprehensive guide, we dissect the new features in React 19 that allow builders to preload resources directly at the DNS handshake phase. We also detail our implementation of optimistic updates in custom forms using the new `useActionState` hook, illustrating how we eliminated loading spinners across our headless ecommerce projects...',
    imageUrl: '/blog_react_performance.png',
    author: {
      name: 'Julian Vance',
      role: 'Lead Architect',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
    }
  },
  {
    slug: 'integrating-rag-enterprise-databases-securely',
    title: 'Integrating Retrieval-Augmented Generation (RAG) Into Secure Corporate Databases',
    category: 'Artificial Intelligence',
    publishedAt: 'July 15, 2026',
    readTime: '8 min read',
    excerpt: 'How to build vector embeddings of sensitive internal documents while keeping raw data out of external LLM training pools.',
    content: 'Enterprise AI is only as useful as the internal contexts it has access to. However, feeding confidential PDF manuals, client invoice records, and proprietary research files to public LLMs introduces critical data leak liabilities. This article walks through setting up private vector pipelines using pgvector and Pinecone, ensuring all corporate queries are filtered through local role-based authorization layers before hitting external APIs...',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Sophia Sterling',
      role: 'AI Researcher',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
    }
  },
  {
    slug: 'death-of-slow-dashboards-websockets',
    title: 'The Death of Slow Dashboards: Transitioning to Real-Time WebSockets in Supply Chain Tech',
    category: 'Architecture',
    publishedAt: 'June 30, 2026',
    readTime: '5 min read',
    excerpt: 'Why standard REST polling is obsolete for fleet telemetry dashboards, and how we structured a Go-to-React stream manager to track 10,000+ coordinates.',
    content: 'When dispatchers track moving delivery vehicles, a 5-second delay in location updates can mean missed turns, late diagnostics, and lost revenue. In this case study, we outline the exact architecture we deployed for our logistics clients, bypassing traditional database polling cycles in favor of memory-locked Redis pub/sub streams broadcasted over secure WebSocket connections to React frontend instances...',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Marcus Chen',
      role: 'VP of Engineering',
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80'
    }
  },
  {
    slug: 'structuring-modular-design-systems-scaled-teams',
    title: 'Structuring Modular Design Systems for Scaled Enterprise Teams',
    category: 'Engineering',
    publishedAt: 'August 01, 2026',
    readTime: '7 min read',
    excerpt: 'How to coordinate Tailwind CSS v4 variables, custom theme extensions, and React 19 compiler compliance rules across multi-team monorepos.',
    content: 'Managing visual tokens across large engineering teams is a common bottleneck. In this publication, we outline the exact architecture we deploy at Antview, utilizing CSS variables mapped inside custom configuration files. We detail our automated lint checks that identify non-compliant style rules before merges, keeping frontends cohesive...',
    imageUrl: '/blog_design_system.png',
    author: {
      name: 'Julian Vance',
      role: 'Frontend Architect',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Aris Thorne',
    role: 'Founder & Chief Technology Officer',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Former Distributed Systems Researcher at MIT. Aris oversees the technical direction and cloud architecture specifications at Antview Technologies.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Julian Vance',
    role: 'Frontend Architect',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Obsessed with page rendering cycles and micro-animations. Julian maintains our internal design systems and React template configurations.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Sophia Sterling',
    role: 'Lead AI Engineer',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
    bio: 'Specialist in custom vector search architectures and cognitive middleware integrations, building secure data connectors for large language models.',
    linkedin: 'https://linkedin.com'
  }
];
