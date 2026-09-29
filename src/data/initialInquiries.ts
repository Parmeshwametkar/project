import { ClientInquiry } from '../types.ts';

export const initialInquiries: ClientInquiry[] = [
  {
    id: 'inq-101',
    fullName: 'Aarav Sharma',
    email: 'aarav.sharma@alpineridge.example.com',
    phone: '+91 98201 44520',
    companyName: 'Alpine Ridge Boutique Resort',
    projectType: 'Business Software',
    budgetRange: '₹50,000–₹1,00,000',
    projectDescription: 'We operate an 18-room resort and need a custom software to manage reservations, check-ins, room cleaning status, and generate GST billing receipts for guests.',
    submittedAt: '2026-09-27T10:30:00Z',
    status: 'Contacted',
    notes: 'Initial scope discussed with founder Parmeshwar Metkar. Drafting architecture milestone outline.'
  },
  {
    id: 'inq-102',
    fullName: 'Meera Patil',
    email: 'meera@saffronbistro.example.com',
    phone: '+91 97654 32189',
    companyName: 'Spiced Saffron Bistro & Cafe',
    projectType: 'Web Application',
    budgetRange: '₹25,000–₹50,000',
    projectDescription: 'Looking for a clean POS system that can run on a counter tablet, generate print receipts, and send order tickets to our kitchen display screen in real time.',
    submittedAt: '2026-09-28T14:15:00Z',
    status: 'Under Review',
    notes: 'Reviewing hardware specs and kitchen tablet display requirements.'
  },
  {
    id: 'inq-103',
    fullName: 'Rajesh Kulkarni',
    email: 'rajesh@kulkarni-supplies.example.com',
    phone: '+91 94220 89123',
    companyName: 'Kulkarni Industrial Spares',
    projectType: 'Business Software',
    budgetRange: '₹1,00,000+',
    projectDescription: 'We distribute machine parts across two regional warehouses. Need a centralized inventory management system with barcode scanner integration and low-stock reorder alerts.',
    submittedAt: '2026-09-28T18:40:00Z',
    status: 'New',
    notes: 'High-priority inquiry. Requires multi-warehouse database schema review.'
  },
  {
    id: 'inq-104',
    fullName: 'Pooja Deshmukh',
    email: 'pooja.d@brighthorizon.example.edu',
    phone: '+91 98810 56780',
    companyName: 'Bright Horizon Academy',
    projectType: 'Web Application',
    budgetRange: '₹50,000–₹1,00,000',
    projectDescription: 'Need a school management portal to record student attendance by class, publish semester exam report cards into PDF format, and track pending tuition fees.',
    submittedAt: '2026-09-29T08:20:00Z',
    status: 'New',
    notes: 'Evaluating grading scales and parent notification system requirements.'
  }
];

const STORAGE_KEY = 'softwaredeveloper077_inquiries_v1';

export function getStoredInquiries(): ClientInquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialInquiries));
      return initialInquiries;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : initialInquiries;
  } catch {
    return initialInquiries;
  }
}

export function saveInquiry(inquiry: Omit<ClientInquiry, 'id' | 'submittedAt' | 'status'>): ClientInquiry {
  const existing = getStoredInquiries();
  const newEntry: ClientInquiry = {
    ...inquiry,
    id: `inq-${Date.now().toString().slice(-4)}`,
    submittedAt: new Date().toISOString(),
    status: 'New',
    notes: 'Inquiry received via website form. Ready for preliminary requirements analysis.'
  };
  const updated = [newEntry, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save inquiry to localStorage', e);
  }
  return newEntry;
}

export function updateInquiryStatus(id: string, newStatus: ClientInquiry['status'], notes?: string): ClientInquiry[] {
  const existing = getStoredInquiries();
  const updated = existing.map(item => {
    if (item.id === id) {
      return {
        ...item,
        status: newStatus,
        notes: notes !== undefined ? notes : item.notes
      };
    }
    return item;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update inquiry status', e);
  }
  return updated;
}
