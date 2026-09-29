import { Project } from '../types.ts';
import hotelImg from '../assets/images/project_hotel_management_1790698363486.jpg';
import bankingImg from '../assets/images/project_banking_system_1790698375757.jpg';
import restaurantImg from '../assets/images/project_restaurant_pos_1790698388696.jpg';

export const projectsData: Project[] = [
  {
    id: 'hotel-management-system',
    name: 'Hotel Management System',
    category: 'Management Systems',
    shortDescription: 'Full-cycle hospitality operating system with room inventory, guest check-in/out, billing, and housekeeping schedules.',
    fullDescription: 'An enterprise-grade property management software designed for boutique hotels, resorts, and lodging businesses. Centralizes front-desk reservations, automated room status updates, restaurant room charges, and real-time occupancy reporting to eliminate double-booking errors and manual spreadsheets.',
    clientType: 'Hospitality & Boutique Resorts',
    status: 'Production',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis'],
    keyFeatures: [
      'Interactive room status & occupancy calendar grid',
      'Instant guest check-in/check-out with digital ID logs',
      'Automated folio billing, GST invoice calculation & receipts',
      'Housekeeping assignment & maintenance tracking portal',
      'Direct reservation engine with payment reconciliation'
    ],
    architectureHighlights: [
      'Row-level locking on reservations to strictly prevent double-booking',
      'Modular database schema partitioning rooms, bookings, and billing ledgers',
      'Sub-50ms query latency on room availability checks using indexed date ranges'
    ],
    image: hotelImg,
    timeline: '8 Weeks Delivery',
    metrics: [
      { label: 'Booking Sync', value: 'Instant' },
      { label: 'Data Accuracy', value: '100%' },
      { label: 'Reporting Speed', value: '< 200ms' }
    ]
  },
  {
    id: 'banking-management-system',
    name: 'Banking Management System',
    category: 'FinTech & Commerce',
    shortDescription: 'Secure core banking simulation with multi-currency account management, transaction ledgers, and audit trails.',
    fullDescription: 'A robust banking platform module engineered to handle double-entry accounting ledgers, client KYC records, fixed deposit calculations, internal transfers, and compliance verification. Built with strict atomicity to guarantee ledger balance integrity at every step.',
    clientType: 'Financial Institutions & Microfinance',
    status: 'Production',
    techStack: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'Docker', 'JWT / RBAC'],
    keyFeatures: [
      'Double-entry transaction ledger with immutable audit logs',
      'Customer account creation, tiered KYC verification & limits',
      'Instant fund transfer processing with validation safeguards',
      'Fixed deposit & recurring deposit maturity calculation engines',
      'Role-based security for cashiers, managers, and system auditors'
    ],
    architectureHighlights: [
      'ACID transactional guarantees on all balance mutations',
      'Cryptographically hashed audit log chain for tamper evidence',
      'Strict input sanitization and token expiry policies'
    ],
    image: bankingImg,
    timeline: '10 Weeks Delivery',
    metrics: [
      { label: 'Ledger Audit', value: '100% Immutable' },
      { label: 'Transaction Latency', value: '38ms' },
      { label: 'Role Security', value: 'Granular RBAC' }
    ]
  },
  {
    id: 'restaurant-management-system',
    name: 'Restaurant Management System',
    category: 'Management Systems',
    shortDescription: 'Fast Point-of-Sale (POS), table floorplan mapping, live Kitchen Display System (KDS), and inventory tracking.',
    fullDescription: 'Designed for high-paced dining establishments, cafes, and multi-counter eateries. Combines an intuitive touch-friendly POS terminal with real-time Kitchen Display System sync via WebSockets, automatic recipe-level ingredient deductions, and end-of-day sales reconciliation.',
    clientType: 'Restaurants, Cafes & Cloud Kitchens',
    status: 'Production',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'WebSockets'],
    keyFeatures: [
      'Touch-optimized POS with floor layout & table status colors',
      'Live Kitchen Display System (KDS) with audio order notifications',
      'Recipe-level inventory deduction on completed food items',
      'Split bill, discount codes, tips, and tax invoice generation',
      'End-of-day Z-Report summarizing cash, card, and UPI collections'
    ],
    architectureHighlights: [
      'Offline-tolerant cache allowing order capture during intermittent drops',
      'WebSocket broadcast for zero-delay order propagation to kitchen screens',
      'Optimized indexed queries for fast live inventory recalculation'
    ],
    image: restaurantImg,
    timeline: '6 Weeks Delivery',
    metrics: [
      { label: 'Kitchen Sync', value: '< 100ms' },
      { label: 'Order Processing', value: '< 5 sec' },
      { label: 'Inventory Drift', value: 'Zero' }
    ]
  },
  {
    id: 'inventory-management-system',
    name: 'Inventory Management System',
    category: 'Business Software',
    shortDescription: 'Multi-warehouse stock tracking, automated reorder thresholds, barcode scanning support, and supplier purchase orders.',
    fullDescription: 'Comprehensive inventory control application for wholesale distributors, retail chains, and manufacturing supply depots. Enables SKU tracking across multiple facilities, automated purchase order triggers when items hit reorder levels, and detailed valuation reports (FIFO / Weighted Average).',
    clientType: 'Wholesale Distributors & Retailers',
    status: 'Production',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
    keyFeatures: [
      'Multi-warehouse stock balancing and internal transfer tickets',
      'Low-stock threshold triggers with automated supplier PO generation',
      'Batch, expiry, and serial number tracking per item line',
      'Barcode and QR code scanning camera integration',
      'FIFO & Weighted Average inventory valuation analytics'
    ],
    architectureHighlights: [
      'Optimistic locking on stock adjustments to resolve concurrent picks',
      'Relational schema preventing orphan inventory records',
      'Exportable Excel & CSV financial summaries for tax audits'
    ],
    timeline: '7 Weeks Delivery',
    metrics: [
      { label: 'Stock Accuracy', value: '99.8%' },
      { label: 'SKU Capacity', value: '50,000+' },
      { label: 'Sync Delay', value: 'Real-time' }
    ]
  },
  {
    id: 'school-management-system',
    name: 'School Management System',
    category: 'Management Systems',
    shortDescription: 'Academic ERP managing student admissions, grading rubrics, attendance tracking, teacher timetables, and fee dues.',
    fullDescription: 'An all-in-one educational portal built for K-12 schools, coaching academies, and training institutes. Unifies student demographic records, parent notifications, examination marks calculation with grade reports, teacher class assignments, and automated fee receipt generation.',
    clientType: 'K-12 Schools & Educational Academies',
    status: 'Active Development',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL', 'PDF Engine'],
    keyFeatures: [
      'Student admissions workflow with document attachments',
      'Daily attendance tracking by class, section, and period',
      'Configurable grading scales, exam report card generation (PDF)',
      'Fee installments, late fine rules, and downloadable tax receipts',
      'Teacher schedule timetables and leave substitution manager'
    ],
    architectureHighlights: [
      'Dynamic GPA / grading calculation algorithm per institutional board',
      'Server-side vector PDF generation for report cards and invoices',
      'Strict multi-tenant role isolation (Principal, Teacher, Parent, Admin)'
    ],
    timeline: '8 Weeks Delivery',
    metrics: [
      { label: 'Role Types', value: '4 Tiers' },
      { label: 'PDF Generation', value: '< 1 sec' },
      { label: 'Attendance Audit', value: '100% Logged' }
    ]
  },
  {
    id: 'business-crm',
    name: 'Business CRM & Pipeline Manager',
    category: 'Business Software',
    shortDescription: 'Deal stage pipeline manager, lead attribution tracker, activity logger, and client communication history.',
    fullDescription: 'A streamlined Customer Relationship Management platform built specifically for small and mid-sized agencies. Replaces bloated legacy CRMs with a fast, zero-clutter Kanban deal pipeline, lead scoring, automatic follow-up reminders, and complete conversation history.',
    clientType: 'Consultancies & B2B Service Firms',
    status: 'Production',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST API'],
    keyFeatures: [
      'Drag-and-drop deal pipeline with custom stages & win probabilities',
      'Lead contact repository with company tagging & source attribution',
      'Call, email, and meeting interaction timeline logging',
      'Automated scheduled task reminders for team follow-ups',
      'Sales forecasting dashboard with monthly conversion velocity'
    ],
    architectureHighlights: [
      'Drag-and-drop state persistence with optimistic UI rollbacks',
      'Unified activity stream using polymorphic database relations',
      'REST endpoints structured for easy webhook integration'
    ],
    timeline: '6 Weeks Delivery',
    metrics: [
      { label: 'Pipeline Views', value: 'Kanban + List' },
      { label: 'Load Time', value: '120ms' },
      { label: 'Export Formats', value: 'CSV / JSON' }
    ]
  },
  {
    id: 'ecommerce-platform',
    name: 'E-commerce Platform & Storefront',
    category: 'FinTech & Commerce',
    shortDescription: 'High-conversion online storefront with product variant management, cart checkout, payment gateway, and order fulfillment.',
    fullDescription: 'Custom headless e-commerce system optimized for fast product loading, dynamic attribute variations (size, color, material), secure checkout integration, and merchant order fulfillment workflows. Engineered without sluggish third-party plugin bloat.',
    clientType: 'Direct-to-Consumer Brands & Merchants',
    status: 'Production',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Stripe / Razorpay'],
    keyFeatures: [
      'Responsive product catalog with instant search & multi-facet filters',
      'SKU-level variant management (sizes, colors, stock counts)',
      'Frictionless multi-step checkout with address validation',
      'Integrated payment gateway handling with automatic receipt emails',
      'Merchant admin dashboard for dispatch status and customer orders'
    ],
    architectureHighlights: [
      'Image optimization pipeline with responsive srcset delivery',
      'Webhook signature validation ensuring zero fraudulent payment records',
      'Cart state cached in local storage with server-side stock verification'
    ],
    timeline: '8 Weeks Delivery',
    metrics: [
      { label: 'Checkout Steps', value: '2 Steps' },
      { label: 'Search Speed', value: '< 40ms' },
      { label: 'Mobile Optimized', value: '100%' }
    ]
  },
  {
    id: 'employee-management-system',
    name: 'Employee Management System',
    category: 'Business Software',
    shortDescription: 'HR portal handling staff profiles, leave requests, attendance logs, department structures, and payroll breakdowns.',
    fullDescription: 'An intuitive internal HR and workforce operations system designed to simplify team management. Streamlines employee onboarding, digital leave approvals with manager workflows, attendance biometric logs import, and transparent monthly payslip generation.',
    clientType: 'Corporations & Growing Teams',
    status: 'Active Development',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'PostgreSQL', 'Bcrypt'],
    keyFeatures: [
      'Centralized employee directory with department & hierarchy trees',
      'Leave application portal with multi-level approval hierarchies',
      'Monthly payroll calculation with deductions, allowances & taxes',
      'Attendance logging with shift assignment and overtime hours',
      'Document vault for employee contracts, tax forms, and NDAs'
    ],
    architectureHighlights: [
      'Automated payroll rules engine calculating net take-home pay',
      'Secure encryption on sensitive personal salary records',
      'Audit log tracking all managerial salary and leave alterations'
    ],
    timeline: '7 Weeks Delivery',
    metrics: [
      { label: 'Approval Speed', value: 'Same Day' },
      { label: 'Payroll Generation', value: '1-Click' },
      { label: 'Access Control', value: '3-Tier' }
    ]
  }
];
