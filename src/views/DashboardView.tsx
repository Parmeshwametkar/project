import React, { useState, useEffect } from 'react';
import { 
  FolderKanban, 
  Activity, 
  CheckCircle2, 
  Inbox, 
  Search, 
  Filter, 
  ExternalLink, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  AlertCircle,
  Eye,
  RefreshCw
} from 'lucide-react';
import { Project, ClientInquiry, InquiryStatus } from '../types.ts';
import { projectsData } from '../data/projectsData.ts';
import { getStoredInquiries, updateInquiryStatus } from '../data/initialInquiries.ts';

interface DashboardViewProps {
  onOpenProjectModal: (project: Project) => void;
  onNavigate: (tab: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onOpenProjectModal,
  onNavigate,
}) => {
  const [inquiries, setInquiries] = useState<ClientInquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<ClientInquiry | null>(null);
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState<string>('All');
  const [projectSearch, setProjectSearch] = useState('');
  const [projectStatusFilter, setProjectStatusFilter] = useState('All');

  useEffect(() => {
    setInquiries(getStoredInquiries());
  }, []);

  const handleStatusChange = (id: string, newStatus: InquiryStatus) => {
    const updated = updateInquiryStatus(id, newStatus);
    setInquiries(updated);
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
  };

  // Sample stats
  const totalProjectsCount = projectsData.length;
  const activeProjectsCount = projectsData.filter(p => p.status === 'Active Development' || p.status === 'Testing').length;
  const completedProjectsCount = projectsData.filter(p => p.status === 'Production').length;
  const clientRequestsCount = inquiries.length;
  const newRequestsCount = inquiries.filter(i => i.status === 'New').length;

  const filteredInquiries = inquiries.filter(inq => {
    if (inquiryStatusFilter === 'All') return true;
    return inq.status === inquiryStatusFilter;
  });

  const filteredProjects = projectsData.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(projectSearch.toLowerCase()) ||
                          p.category.toLowerCase().includes(projectSearch.toLowerCase());
    const matchesStatus = projectStatusFilter === 'All' || p.status === projectStatusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Disclaimer Banner: Demo / Sample Data Notice */}
      <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 px-4 py-3 flex items-start sm:items-center gap-3 text-xs text-amber-300">
        <AlertCircle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5 sm:mt-0" />
        <div className="leading-relaxed">
          <strong className="font-semibold text-amber-200">Demo Operations Console:</strong> This internal-style dashboard illustrates project tracking, system metrics, and client inquiry workflows using sample company data. Submitting an inquiry on the Contact page dynamically synchronizes here.
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Internal Operations
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Software Operations & Inquiries Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time overview of active software builds, client pipeline, and repository deliverables.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setInquiries(getStoredInquiries())}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Refresh State</span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            + New Inquiry
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Projects */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Total Projects</span>
            <FolderKanban className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
            {totalProjectsCount}
          </div>
          <div className="text-xs text-slate-500">
            Across 4 core software domains
          </div>
        </div>

        {/* Active Projects */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Active In-Progress</span>
            <Activity className="h-4 w-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
            {activeProjectsCount}
          </div>
          <div className="text-xs text-slate-500">
            Development & validation phases
          </div>
        </div>

        {/* Completed Projects */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Completed Systems</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
            {completedProjectsCount}
          </div>
          <div className="text-xs text-slate-500">
            Production-ready deployments
          </div>
        </div>

        {/* Client Requests */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Client Inquiries</span>
            <Inbox className="h-4 w-4 text-purple-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              {clientRequestsCount}
            </span>
            {newRequestsCount > 0 && (
              <span className="text-xs font-mono text-emerald-400">({newRequestsCount} new)</span>
            )}
          </div>
          <div className="text-xs text-slate-500">
            Inbound requirements submitted
          </div>
        </div>

      </div>

      {/* Two Column Section: Project Table & Recent Client Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left (7 cols): Projects Registry Table */}
        <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">Software Repository</h2>
              <p className="text-xs text-slate-400">Current system architectures and active modules</p>
            </div>
            
            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800">
              {['All', 'Production', 'Active Development'].map((status) => (
                <button
                  key={status}
                  onClick={() => setProjectStatusFilter(status)}
                  className={`px-2.5 py-1 text-xs rounded transition-colors ${
                    projectStatusFilter === status
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 text-slate-400 uppercase tracking-wider font-mono">
                <tr>
                  <th className="py-2.5 pr-4">System Name</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 pl-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredProjects.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 pr-4">
                      <div className="font-semibold text-white">{p.name}</div>
                      <div className="text-slate-500 font-mono text-[11px] truncate max-w-xs">{p.techStack.join(', ')}</div>
                    </td>
                    <td className="py-3 px-3 text-slate-400 whitespace-nowrap">
                      {p.category}
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <span className={`inline-block font-mono text-[11px] ${
                        p.status === 'Production' ? 'text-emerald-400' : 'text-amber-400'
                      }`}>
                        ● {p.status}
                      </span>
                    </td>
                    <td className="py-3 pl-3 text-right whitespace-nowrap">
                      <button
                        onClick={() => onOpenProjectModal(p)}
                        className="rounded bg-slate-800 hover:bg-blue-600 hover:text-white px-2.5 py-1 text-slate-300 transition-colors inline-flex items-center gap-1"
                      >
                        <Eye className="h-3 w-3" />
                        <span>Specs</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right (5 cols): Inquiries Manager */}
        <div className="lg:col-span-5 rounded-xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-white">Client Requirements Queue</h2>
              <p className="text-xs text-slate-400">Inbound inquiries submitted by prospective clients</p>
            </div>
            
            <select
              value={inquiryStatusFilter}
              onChange={(e) => setInquiryStatusFilter(e.target.value)}
              className="rounded border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-blue-500"
            >
              <option value="All">All Inquiries</option>
              <option value="New">New</option>
              <option value="Under Review">Under Review</option>
              <option value="Contacted">Contacted</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          {/* Inquiries List */}
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {filteredInquiries.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-500">
                No inquiries matching filter.
              </div>
            ) : (
              filteredInquiries.map((inq) => (
                <div
                  key={inq.id}
                  onClick={() => setSelectedInquiry(inq)}
                  className={`cursor-pointer rounded-lg border p-3.5 space-y-2 transition-all ${
                    selectedInquiry?.id === inq.id
                      ? 'border-blue-500 bg-blue-950/20'
                      : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-semibold text-white text-xs sm:text-sm">{inq.fullName}</div>
                      <div className="text-slate-400 text-xs">{inq.companyName}</div>
                    </div>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                      inq.status === 'New' 
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' 
                        : inq.status === 'Under Review'
                        ? 'border-amber-500/40 bg-amber-500/10 text-amber-400'
                        : 'border-slate-700 bg-slate-800 text-slate-300'
                    }`}>
                      {inq.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {inq.projectDescription}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-800/80">
                    <span className="font-mono text-blue-400">{inq.budgetRange}</span>
                    <span>{new Date(inq.submittedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Selected Inquiry Detail Inspector */}
          {selectedInquiry && (
            <div className="rounded-lg border border-slate-800 bg-slate-950 p-4 space-y-3 mt-4 text-xs">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <span className="font-mono text-blue-400 font-semibold">INQUIRY DETAIL: {selectedInquiry.id}</span>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="text-slate-500 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-1.5 text-slate-300">
                <div><span className="text-slate-500">Contact:</span> {selectedInquiry.email} · {selectedInquiry.phone}</div>
                <div><span className="text-slate-500">Scope Type:</span> {selectedInquiry.projectType} ({selectedInquiry.budgetRange})</div>
                <div><span className="text-slate-500">Full Description:</span></div>
                <p className="bg-slate-900 p-2.5 rounded border border-slate-800/80 text-slate-200 leading-relaxed">
                  {selectedInquiry.projectDescription}
                </p>
                {selectedInquiry.notes && (
                  <div><span className="text-slate-500">Internal Note:</span> {selectedInquiry.notes}</div>
                )}
              </div>

              {/* Status Update Action */}
              <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-800/80">
                <span className="text-slate-400">Update Status:</span>
                <div className="flex items-center gap-1">
                  {(['New', 'Under Review', 'Contacted', 'Closed'] as InquiryStatus[]).map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(selectedInquiry.id, st)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        selectedInquiry.status === st
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
