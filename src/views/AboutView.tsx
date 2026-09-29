import React from 'react';
import { User, Code2, CheckCircle2, Shield, Terminal, ArrowRight, Mail } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          About The Company
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Practical Software for Modern Businesses
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          SoftwareDeveloper077 is an independent software development practice founded by Parmeshwar Metkar. We build tailor-made, scalable software systems designed to solve concrete operational challenges for businesses and organizations.
        </p>
      </div>

      {/* Founder Profile Spotlight */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400">
              <User className="h-8 w-8" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-blue-400">Founder & Lead Engineer</div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Parmeshwar Metkar</h2>
            </div>
            <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <div>
                <span className="text-slate-400">Direct Contact: </span>
                <a
                  href="mailto:parmeshwarmetkar07@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  parmeshwarmetkar07@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-400">Practice Focus: </span>
                <span className="text-slate-200">Full-Stack Architecture & Business ERP Systems</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              "I founded <strong>SoftwareDeveloper077</strong> with a straightforward conviction: software should make business operations smoother, faster, and more reliable, not introduce unnecessary complexity."
            </p>
            <p>
              Too many businesses get trapped between two extremes: rigid off-the-shelf software packages that don't match their actual processes, or bloated enterprise agencies that charge massive retainers while delegating the work through layers of non-technical managers.
            </p>
            <p>
              At SoftwareDeveloper077, clients work directly with me. Every database model, user flow, and API endpoint is built with practical business needs in mind. We emphasize direct technical communication, realistic milestones, and pristine source code that you own completely.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Development Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Company Mission */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Shield className="h-4 w-4" />
            <span>Company Mission</span>
          </div>
          <h3 className="text-xl font-bold text-white">Pragmatic, Dependable Software</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our mission is to help organizations eliminate operational friction by building robust, business-focused digital systems. We focus on utility and durability over fleeting design gimmicks.
          </p>
          <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Replace manual paperwork and scattered spreadsheets with unified software.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Provide software that employees can learn and operate with minimal training.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Build long-term maintainability into every codebase from Day 1.</span>
            </li>
          </ul>
        </div>

        {/* Development Approach */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Terminal className="h-4 w-4" />
            <span>Development Approach</span>
          </div>
          <h3 className="text-xl font-bold text-white">Disciplined Engineering</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            We follow a structured engineering workflow grounded in clean architectural boundaries, declarative data flows, and strict type safety.
          </p>
          <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Declarative UI with React, Vite, and component-based design systems.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Normalized relational databases (PostgreSQL) with enforced foreign keys.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Predictable REST/JSON contracts with thorough edge-case handling.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Technology Focus & Quality/Testing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Technology Focus */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Code2 className="h-4 w-4" />
            <span>Technology Focus</span>
          </div>
          <h3 className="text-xl font-bold text-white">Modern, Battle-Tested Stack</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            We deliberately choose stable, widely-supported technologies rather than unproven experimental libraries that risk abandonware.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 space-y-1">
              <div className="font-semibold text-white">Frontend</div>
              <div className="text-slate-400">React, TypeScript, Tailwind CSS, Vite</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 space-y-1">
              <div className="font-semibold text-white">Backend</div>
              <div className="text-slate-400">Node.js, Express, Python, REST APIs</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 space-y-1">
              <div className="font-semibold text-white">Database</div>
              <div className="text-slate-400">PostgreSQL, Redis, MySQL</div>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 space-y-1">
              <div className="font-semibold text-white">Cloud & DevOps</div>
              <div className="text-slate-400">Vercel, Docker, Linux, CI/CD</div>
            </div>
          </div>
        </div>

        {/* Quality & Rigorous Testing */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Shield className="h-4 w-4" />
            <span>Quality & Testing</span>
          </div>
          <h3 className="text-xl font-bold text-white">Zero Compromise on Stability</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Before any system is handed over or deployed to production, it undergoes rigorous validation across real user scenarios and data limits.
          </p>
          <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Validation of database constraints, unique indexes, and cascade safety.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Multi-device responsive testing across desktop, tablet, and mobile viewports.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>User permission isolation checks to ensure confidential data stays protected.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Client-Focused Development Commitment */}
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Our Client Commitment
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Honest, Transparent Partnership
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            We don't overpromise impossible deadlines or pad proposals with buzzwords. When you entrust a software project to SoftwareDeveloper077, you receive clear technical roadmaps, transparent pricing, and proactive updates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs sm:text-sm text-slate-300">
          <div className="space-y-1 border-l-2 border-blue-500 pl-4">
            <div className="font-semibold text-white">Clear Scopes</div>
            <p className="text-slate-400">Detailed requirements documentation agreed upon prior to writing code.</p>
          </div>
          <div className="space-y-1 border-l-2 border-blue-500 pl-4">
            <div className="font-semibold text-white">Weekly Demos</div>
            <p className="text-slate-400">Live staging links where you can inspect progress every week.</p>
          </div>
          <div className="space-y-1 border-l-2 border-blue-500 pl-4">
            <div className="font-semibold text-white">Full Source Handover</div>
            <p className="text-slate-400">Complete Git repository, documentation, and credentials transferred upon completion.</p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Mail className="h-4 w-4 text-blue-400" />
            <span>Have questions for Parmeshwar?</span>
            <a href="mailto:parmeshwarmetkar07@gmail.com" className="text-white hover:underline">parmeshwarmetkar07@gmail.com</a>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
};
