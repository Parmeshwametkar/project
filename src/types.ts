export type ProjectCategory = 
  | 'All'
  | 'Business Software'
  | 'Management Systems'
  | 'FinTech & Commerce'
  | 'Web & Dashboards';

export type ProjectStatus = 'Production' | 'Active Development' | 'Testing' | 'Architecture';

export interface Project {
  id: string;
  name: string;
  category: 'Business Software' | 'Management Systems' | 'FinTech & Commerce' | 'Web & Dashboards';
  shortDescription: string;
  fullDescription: string;
  clientType: string;
  status: ProjectStatus;
  techStack: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  image?: string;
  timeline: string;
  metrics?: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  timeline: string;
}

export type ProjectType = 
  | 'Web Application'
  | 'Mobile Application'
  | 'Business Software'
  | 'E-commerce'
  | 'Dashboard'
  | 'API'
  | 'Other';

export type BudgetRange = 
  | 'Under ₹25,000'
  | '₹25,000–₹50,000'
  | '₹50,000–₹1,00,000'
  | '₹1,00,000+';

export type InquiryStatus = 'New' | 'Under Review' | 'Contacted' | 'Closed';

export interface ClientInquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectType: ProjectType;
  budgetRange: BudgetRange;
  projectDescription: string;
  submittedAt: string;
  status: InquiryStatus;
  notes?: string;
}

export interface DashboardMetric {
  title: string;
  value: number | string;
  change?: string;
  description: string;
}
