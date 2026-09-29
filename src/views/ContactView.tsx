import React, { useState } from 'react';
import { Mail, Phone, Building2, User, Send, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { ProjectType, BudgetRange } from '../types.ts';
import { saveInquiry } from '../data/initialInquiries.ts';

interface ContactViewProps {
  initialProjectType?: ProjectType;
  initialServiceOrProject?: string;
  onNavigate: (tab: string, meta?: any) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  initialProjectType = 'Web Application',
  initialServiceOrProject,
  onNavigate,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectType, setProjectType] = useState<ProjectType>(initialProjectType);
  const [budgetRange, setBudgetRange] = useState<BudgetRange>('₹50,000–₹1,00,000');
  const [projectDescription, setProjectDescription] = useState(
    initialServiceOrProject
      ? `Hi Parmeshwar,\n\nI am interested in discussing a software project related to: ${initialServiceOrProject}.\n\nKey requirements and goals:\n- `
      : ''
  );

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (phone.trim().length < 8) {
      errs.phone = 'Please provide a valid contact number.';
    }
    if (!companyName.trim()) errs.companyName = 'Company / organization name is required.';
    if (!projectDescription.trim() || projectDescription.trim().length < 15) {
      errs.projectDescription = 'Please provide a brief description (at least 15 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const created = saveInquiry({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        companyName: companyName.trim(),
        projectType,
        budgetRange,
        projectDescription: projectDescription.trim(),
      });
      setIsSubmitting(false);
      setSubmittedInquiryId(created.id);
    }, 400);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setCompanyName('');
    setProjectDescription('');
    setSubmittedInquiryId(null);
    setErrors({});
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          Project Inquiries & Consultation
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Start a Project with SoftwareDeveloper077
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Tell us about your software requirement, operational challenges, and target timeline. We will review your specifications and reply with an architectural breakdown and scope estimate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Contact Form / Confirmation state */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
          
          {submittedInquiryId ? (
            <div className="space-y-6 py-6 text-center sm:text-left">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Project Request Recorded Successfully!</h2>
                <div className="text-xs font-mono text-blue-400">
                  Reference ID: {submittedInquiryId}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  Thank you for submitting your project requirement, <strong>{fullName}</strong>. 
                  Your inquiry has been stored locally in the application and synchronized with the demo operations dashboard.
                </p>
              </div>

              {/* Summary box */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 text-xs text-slate-300 space-y-2 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-400">Project Type:</span>{' '}
                    <span className="text-white font-medium">{projectType}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Budget Range:</span>{' '}
                    <span className="text-white font-medium">{budgetRange}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Company:</span>{' '}
                    <span className="text-white font-medium">{companyName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Direct Email:</span>{' '}
                    <span className="text-white font-medium">{email}</span>
                  </div>
                </div>
              </div>

              {/* Informative notice without pretending emails were dispatched */}
              <div className="rounded-lg border border-blue-500/20 bg-blue-950/20 p-4 text-xs text-slate-300 space-y-1 text-left">
                <div className="font-semibold text-blue-400">Next Steps:</div>
                <p className="text-slate-400">
                  Founder <strong>Parmeshwar Metkar</strong> reviews new client inquiries at{' '}
                  <span className="text-white">parmeshwarmetkar07@gmail.com</span>. You can also inspect this live entry on our internal demo dashboard.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  <span>View in Demo Dashboard</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={handleResetForm}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  Submit Another Requirement
                </button>
              </div>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white">Project Inquiry Form</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details below to request a quote or architectural consultation.
                </p>
              </div>

              {/* 2-column: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Rajesh Sharma"
                    className={`w-full rounded-lg border bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 ${
                      errors.fullName
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-400">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Work Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="name@company.com"
                    className={`w-full rounded-lg border bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* 2-column: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Phone / WhatsApp <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+91 98765 43210"
                    className={`w-full rounded-lg border bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 ${
                      errors.phone
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-400">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Company / Organization <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                      if (errors.companyName) setErrors({ ...errors, companyName: '' });
                    }}
                    placeholder="e.g. Metro Logistics Pvt Ltd"
                    className={`w-full rounded-lg border bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 ${
                      errors.companyName
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="text-xs text-rose-400">{errors.companyName}</p>
                  )}
                </div>
              </div>

              {/* 2-column: Project Type & Budget Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value as ProjectType)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile Application">Mobile Application</option>
                    <option value="Business Software">Business Software</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Dashboard">Dashboard</option>
                    <option value="API">API</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Target Budget Range
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value as BudgetRange)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
                    <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                    <option value="₹1,00,000+">₹1,00,000+</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Project Description & Requirements <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={5}
                  value={projectDescription}
                  onChange={(e) => {
                    setProjectDescription(e.target.value);
                    if (errors.projectDescription) setErrors({ ...errors, projectDescription: '' });
                  }}
                  placeholder="Describe what system you need built, your core workflows, key user roles, and any existing systems we must replace or integrate with..."
                  className={`w-full rounded-lg border bg-slate-950 p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 ${
                    errors.projectDescription
                      ? 'border-rose-500 focus:ring-rose-500'
                      : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                />
                {errors.projectDescription && (
                  <p className="text-xs text-rose-400">{errors.projectDescription}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 disabled:opacity-50 transition-all active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? 'Recording Inquiry...' : 'Submit Project Request'}</span>
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Right: Direct Contact & Process Expectations */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Direct Founder Contact Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <User className="h-4 w-4 text-blue-400 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Parmeshwar Metkar</div>
                  <div className="text-slate-400">Founder & Lead Software Engineer</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-blue-400 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Email Inquiries</div>
                  <a
                    href="mailto:parmeshwarmetkar07@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    parmeshwarmetkar07@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-blue-400 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Response Turnaround</div>
                  <div className="text-slate-400">Typically within 24 to 48 business hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              What Happens Next
            </h3>
            <ol className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-blue-400 font-bold">1.</span>
                <span>
                  <strong className="text-white">Requirements Review:</strong> Parmeshwar personally reviews your business workflow and tech needs.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-blue-400 font-bold">2.</span>
                <span>
                  <strong className="text-white">Scoping Discussion:</strong> A direct technical conversation to clarify edge-cases, roles, and database models.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-blue-400 font-bold">3.</span>
                <span>
                  <strong className="text-white">Fixed Milestone Proposal:</strong> Transparent pricing, delivery timeline, and feature deliverables checklist.
                </span>
              </li>
            </ol>
          </div>

          {/* Guarantee / Standards */}
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5 flex items-start gap-3 text-xs text-slate-400">
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              All project proposals come with 100% source code ownership, documentation, and a post-launch warranty period for bug fixes.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
