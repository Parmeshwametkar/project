import React from 'react';
import { 
  Globe, 
  Building2, 
  Smartphone, 
  BarChart3, 
  Database, 
  Cpu, 
  Layout, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { servicesData } from '../data/servicesData.ts';
import { Service } from '../types.ts';

interface ServicesViewProps {
  onNavigate: (tab: string, meta?: any) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="h-5 w-5 text-blue-400" />;
      case 'Building2': return <Building2 className="h-5 w-5 text-blue-400" />;
      case 'Smartphone': return <Smartphone className="h-5 w-5 text-blue-400" />;
      case 'BarChart3': return <BarChart3 className="h-5 w-5 text-blue-400" />;
      case 'Database': return <Database className="h-5 w-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="h-5 w-5 text-blue-400" />;
      case 'Layout': return <Layout className="h-5 w-5 text-blue-400" />;
      case 'Wrench': return <Wrench className="h-5 w-5 text-blue-400" />;
      default: return <Globe className="h-5 w-5 text-blue-400" />;
    }
  };

  const handleServiceInquiry = (service: Service) => {
    let projectType = 'Web Application';
    if (service.id.includes('mobile')) projectType = 'Mobile Application';
    else if (service.id.includes('business')) projectType = 'Business Software';
    else if (service.id.includes('dashboard')) projectType = 'Dashboard';
    else if (service.id.includes('api')) projectType = 'API';

    onNavigate('contact', { projectType, serviceName: service.title });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          Core Capabilities
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Software Development Services
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          SoftwareDeveloper077 delivers focused engineering services for businesses seeking dependable software without agency overhead. Each service is executed with production-grade code, clean documentation, and direct founder accountability.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, idx) => (
          <div
            key={service.id}
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 hover:border-slate-700 transition-all space-y-6"
          >
            <div className="space-y-4">
              
              {/* Header with Icon & Index */}
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/30">
                  {getIcon(service.iconName)}
                </div>
                <span className="font-mono text-xs text-slate-500">
                  0{idx + 1}. SERVICE
                </span>
              </div>

              {/* Title & Short Description */}
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{service.title}</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Key Deliverables / Features */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  What We Deliver:
                </div>
                <ul className="space-y-2">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-1.5 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Typical Technologies:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-800/80 px-2.5 py-0.5 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Service Footer / Action */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="h-3.5 w-3.5 text-blue-400" />
                <span>Timeline: {service.timeline}</span>
              </div>
              <button
                onClick={() => handleServiceInquiry(service)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Request Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Engineering Standards Callout */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-8 space-y-4">
        <h3 className="text-lg font-bold text-white">Our Engineering Standards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
          <div className="space-y-1">
            <div className="font-semibold text-white">Type-Safe From End to End</div>
            <p className="text-slate-400 leading-relaxed">
              We leverage strict TypeScript across both frontend state and backend APIs, catching potential type errors during compile time rather than in production.
            </p>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-white">Clean Relational Schemas</div>
            <p className="text-slate-400 leading-relaxed">
              We design normalized PostgreSQL schemas with strict foreign keys and index strategies to preserve data integrity and maintain sub-millisecond lookups.
            </p>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-white">Complete Source Ownership</div>
            <p className="text-slate-400 leading-relaxed">
              Clients receive full, unencumbered ownership of the source code repository, documentation, deployment scripts, and database migration routines.
            </p>
          </div>
        </div>
      </div>

      {/* Action Banner */}
      <div className="rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">Have a unique business requirement?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            We provide free initial scoping calls to help define your system architecture and technical requirements.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="rounded-lg bg-blue-600 px-6 py-3 text-xs font-semibold text-white hover:bg-blue-500 transition-colors whitespace-nowrap active:scale-[0.98]"
        >
          Start a Project Inquiry
        </button>
      </div>

    </div>
  );
};
