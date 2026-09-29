import { Service } from '../types.ts';

export const servicesData: Service[] = [
  {
    id: 'custom-web-development',
    title: 'Custom Web Development',
    iconName: 'Globe',
    shortDescription: 'Tailored, responsive web applications engineered for speed, search visibility, and reliability.',
    fullDescription: 'We build modern web applications from the ground up using clean React, TypeScript, and modern component architectures. Every build focuses on fast load times, modular maintainability, cross-browser compatibility, and seamless desktop-to-mobile responsiveness.',
    features: [
      'Tailored business logic and clean component architecture',
      'High-performance rendering with responsive layouts',
      'SEO-friendly structure and semantic HTML markup',
      'Integration with modern backend services and third-party APIs',
      'Secure client-side state handling and form validation'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    timeline: '3 to 6 Weeks'
  },
  {
    id: 'business-software',
    title: 'Business Software Solutions',
    iconName: 'Building2',
    shortDescription: 'Purpose-built internal tools, ERP modules, and workflow automation tailored to company processes.',
    fullDescription: 'Replace fragile spreadsheets and disjointed tools with unified, dependable business software. We work directly with you to understand your day-to-day operations and build custom management tools that match your exact organizational workflow.',
    features: [
      'Custom ERP, CRM, and internal operations tools',
      'Role-based access control (Admin, Manager, Staff)',
      'Automated invoice generation, tax computation & PDF export',
      'Audit logging and accountability tracking across records',
      'Data import and migration from existing spreadsheets'
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'React'],
    timeline: '4 to 8 Weeks'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    iconName: 'Smartphone',
    shortDescription: 'Cross-platform mobile applications providing fast, native-grade experiences on iOS and Android.',
    fullDescription: 'Deliver your software into the hands of your staff, field workers, or customers. We develop clean, high-performance mobile and Progressive Web Applications (PWA) that provide smooth navigation, offline caching, and responsive touch controls.',
    features: [
      'Cross-platform responsive design for phones and tablets',
      'Offline-capable caching and local data storage',
      'Push notification hooks and biometric login integration',
      'Camera-based barcode and QR code scanner integration',
      'Unified codebase minimizing maintenance overhead'
    ],
    techStack: ['React Native', 'TypeScript', 'PWA / Vite', 'Tailwind CSS'],
    timeline: '4 to 8 Weeks'
  },
  {
    id: 'dashboard-development',
    title: 'Dashboard Development',
    iconName: 'BarChart3',
    shortDescription: 'Data visualization portals and administrative consoles with real-time analytics and controls.',
    fullDescription: 'Transform raw business data into actionable operational clarity. We craft fast, responsive admin dashboards that present key performance indicators, live status feeds, transactional metrics, and granular report filters without sluggish loading.',
    features: [
      'Real-time metric cards and interactive data visualizations',
      'Custom date range filtering, search, and CSV/Excel exports',
      'Multi-level permissions for executive vs departmental views',
      'Fast tabular views with column sorting and pagination',
      'Responsive design adapting cleanly to laptops, tablets, and phones'
    ],
    techStack: ['React', 'Chart.js / Recharts', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    timeline: '3 to 5 Weeks'
  },
  {
    id: 'database-systems',
    title: 'Database Systems & Architecture',
    iconName: 'Database',
    shortDescription: 'Reliable relational database modeling, indexing, schema migrations, and backup configurations.',
    fullDescription: 'The foundation of any serious software application is its database. We design clean relational schemas, enforce foreign key integrity, create performant indexes, and configure automated backup routines to ensure zero data loss and fast query response times.',
    features: [
      'Normalized relational schema design (PostgreSQL / MySQL)',
      'Query optimization, indexing strategies, and constraint rules',
      'Automated migration workflows with rollback safety',
      'Data backup schedules and disaster recovery protocols',
      'Strict ACID transaction handling for financial and inventory data'
    ],
    techStack: ['PostgreSQL', 'MySQL', 'Redis', 'Prisma / Drizzle', 'Docker'],
    timeline: '2 to 4 Weeks'
  },
  {
    id: 'api-development',
    title: 'API Development & Integrations',
    iconName: 'Cpu',
    shortDescription: 'Secure, documented REST and GraphQL endpoints connecting frontends, mobile apps, and third parties.',
    fullDescription: 'We engineer secure, well-structured backend APIs that deliver data reliably. From payment gateway hooks (Razorpay, Stripe) to SMS/Email triggers and third-party webhook receivers, our APIs are built for high availability and straightforward consumption.',
    features: [
      'RESTful & GraphQL API architecture with predictable endpoints',
      'Token-based authentication (JWT, OAuth2) and rate limiting',
      'Payment gateway integrations with automated webhook verification',
      'Third-party software synchronization (accounting, CRM, shipping)',
      'Clear documentation for seamless frontend and mobile integration'
    ],
    techStack: ['Node.js', 'Express', 'TypeScript', 'REST', 'JWT', 'Postman'],
    timeline: '2 to 5 Weeks'
  },
  {
    id: 'ui-ux-development',
    title: 'UI/UX Interface Engineering',
    iconName: 'Layout',
    shortDescription: 'Developer-focused, clean, and intuitive user interfaces built with exceptional attention to detail.',
    fullDescription: 'Great software feels effortless to use. We bridge the gap between design and engineering, translating business logic into thoughtful layouts, accessible color contrast, clear typography hierarchy, and snappy interactive feedback that users understand immediately.',
    features: [
      'Design system creation with consistent typography and color palettes',
      'Accessible WCAG-compliant UI components and keyboard navigation',
      'Micro-interactions and feedback states (loading, error, empty)',
      'Mobile-first layout adaptation across all viewport sizes',
      'Zero-fluff interfaces built for professional productivity'
    ],
    techStack: ['Tailwind CSS', 'Figma', 'React', 'Motion', 'Lucide Icons'],
    timeline: '2 to 4 Weeks'
  },
  {
    id: 'software-maintenance',
    title: 'Software Maintenance & Upgrades',
    iconName: 'Wrench',
    shortDescription: 'Ongoing maintenance, bug fixing, performance optimization, and dependency upgrades.',
    fullDescription: 'Software is an evolving asset. We provide dependable ongoing maintenance, security patch updates, performance audits, bug resolution, and feature enhancements to ensure your software remains fast, secure, and compatible with modern environments.',
    features: [
      'Routine dependency security audits and framework updates',
      'Bug triage, root-cause investigation, and fast turnaround fixes',
      'Database health monitoring and index optimization',
      'Feature iterations and user feedback implementation',
      'Direct developer communication and transparent monthly reports'
    ],
    techStack: ['Git', 'CI/CD', 'TypeScript', 'Node.js', 'Monitoring Tools'],
    timeline: 'Ongoing / Retainer'
  }
];
