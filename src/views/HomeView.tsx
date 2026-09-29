import React from 'react';
import { ArrowRight, Code2, ShieldCheck, Zap, Layers, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { Project } from '../types.ts';
import { projectsData } from '../data/projectsData.ts';
import { servicesData } from '../data/servicesData.ts';
import heroWorkspaceImg from '../assets/images/hero_software_workspace_1790698348947.jpg';

interface HomeViewProps {
  onNavigate: (tab: string, meta?: any) => void;
  onOpenProjectModal: (project: Project) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProjectModal,
}) => {
  const featuredProjects = projectsData.slice(0, 3);
  const featuredServices = servicesData.slice(0, 4);

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 lg:pt-24 border-b border-slate-900 pb-16 lg:pb-24">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet brand kicker without pill box */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <Code2 className="h-4 w-4" />
                <span>Custom Software Engineering</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">Founder: Parmeshwar Metkar</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-2xl text-balance">
                Build Better Software. Launch Faster.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
                SoftwareDeveloper077 builds modern, scalable and business-focused software solutions. We turn manual workflows into automated, high-performance systems.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all active:scale-[0.98]"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all active:scale-[0.98]"
                >
                  <span>View Projects</span>
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-xs text-slate-400">
                <div>
                  <div className="font-semibold text-slate-200 text-sm">Direct Founder Access</div>
                  <div className="text-slate-400">Collaborate with Parmeshwar</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-200 text-sm">Full Production Code</div>
                  <div className="text-slate-400">TypeScript & Relational DBs</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-200 text-sm">Clear Fixed Milestones</div>
                  <div className="text-slate-400">Transparent delivery timeline</div>
                </div>
              </div>

            </div>

            {/* Visual Hero Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src={heroWorkspaceImg}
                  alt="SoftwareDeveloper077 engineering studio workstation"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover aspect-[16/10]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium text-white">Active Development Terminal</span>
                  </div>
                  <span className="font-mono text-slate-400">v2.4 Production</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-400">Company Overview</h2>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Software Built for Everyday Business Operations
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white">SoftwareDeveloper077</strong> is an independent software development company established to deliver dependable, tailored digital tools for growing businesses, educational institutions, and hospitality establishments.
              </p>
              <p>
                Instead of over-engineering generic abstractions or forcing rigid off-the-shelf software onto unique businesses, we analyze your exact operational workflow. We build purpose-specific software that your team actually enjoys using every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SHOWCASE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-400">Portfolio Showcase</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">Featured Software Projects</h3>
            <p className="text-sm text-slate-400 mt-1">Real-world systems engineered for stability and business efficiency.</p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors self-start sm:self-auto"
          >
            <span>Explore All 8 Projects</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all group"
            >
              <div className="space-y-4">
                {/* Visual Thumbnail */}
                {project.image ? (
                  <div className="overflow-hidden rounded-lg aspect-[16/10] bg-slate-950 border border-slate-800">
                    <img
                      src={project.image}
                      alt={project.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] rounded-lg bg-slate-950 p-4 border border-slate-800 flex items-center justify-center text-slate-500 font-mono text-xs">
                    SYSTEM_PREVIEW
                  </div>
                )}

                {/* Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{project.category}</span>
                  <span>·</span>
                  <span className="text-blue-400 font-medium">{project.status}</span>
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-800/80 px-2 py-0.5 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs text-slate-500 py-0.5">+{project.techStack.length - 3}</span>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">{project.timeline}</span>
                <button
                  onClick={() => onOpenProjectModal(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORE SERVICES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-400">Expertise & Services</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">What We Build</h3>
            <p className="text-sm text-slate-400 mt-1">End-to-end software solutions designed to solve real business bottlenecks.</p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors self-start sm:self-auto"
          >
            <span>View All 8 Services</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, idx) => (
            <div
              key={service.id}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="text-xs font-mono text-slate-500">
                0{idx + 1}. SERVICE
              </div>
              <h4 className="text-base font-bold text-white">{service.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {service.shortDescription}
              </p>
              <ul className="space-y-1.5 pt-2 text-xs text-slate-400">
                {service.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-500 font-mono">›</span>
                    <span className="truncate">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-400">Our Value Proposition</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why Work with SoftwareDeveloper077
            </h3>
            <p className="text-sm text-slate-400">
              Clear commitments, practical architectures, and no corporate bureaucracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400">
                <Code2 className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">Direct Founder Collaboration</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  You work directly with lead engineer Parmeshwar Metkar. Every technical decision, architecture diagram, and sprint update comes straight from the engineer writing your code.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">Robust Relational Integrity</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We don't build flimsy prototypes. We enforce strict database constraints, ACID transactions, and comprehensive validation so your business data stays accurate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400">
                <Zap className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">No Bloat, High Velocity</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We avoid sluggish templates and unnecessary third-party plugins. Your software is hand-crafted with clean modern React and TypeScript for maximum speed and simplicity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400">
                <Layers className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white">Milestone-Based Delivery</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Every project is divided into tangible milestones. You test working builds at each stage and only pay as pre-agreed deliverables are successfully validated.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT PROCESS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-400">Methodology</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How We Build Your Software
          </h3>
          <p className="text-sm text-slate-400">
            A disciplined, step-by-step approach from raw concept to reliable deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2">
            <span className="text-xs font-mono text-blue-400">01. STEP</span>
            <h4 className="text-sm font-bold text-white">Discovery & Scope</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We define your business requirements, user roles, data fields, and deliverables clearly.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2">
            <span className="text-xs font-mono text-blue-400">02. STEP</span>
            <h4 className="text-sm font-bold text-white">Architecture & Schema</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designing database tables, API contracts, security boundaries, and responsive wireframes.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2">
            <span className="text-xs font-mono text-blue-400">03. STEP</span>
            <h4 className="text-sm font-bold text-white">Sprint Engineering</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Writing clean, modular code with regular demonstration checkpoints to gather your feedback.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2">
            <span className="text-xs font-mono text-blue-400">04. STEP</span>
            <h4 className="text-sm font-bold text-white">Validation & Testing</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Edge-case testing, role permission checks, transaction stress testing, and bug remediation.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 space-y-2">
            <span className="text-xs font-mono text-blue-400">05. STEP</span>
            <h4 className="text-sm font-bold text-white">Launch & Handover</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Production deployment, database backup schedules, full documentation, and staff training.
            </p>
          </div>

        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Have a Project in Mind? Let's Discuss.
            </h3>
            <p className="text-sm text-slate-300">
              Submit your project scope and budget range. We will review your requirements and provide an honest estimate and architecture proposal.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all shrink-0 active:scale-[0.98]"
          >
            <span>Submit Project Requirement</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
