import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu, Clock, Layers, ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectForInquiry: (projectName: string, projectType: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectForInquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-slate-800 bg-slate-900 shadow-2xl z-10 text-slate-100">
        
        {/* Sticky Header with Title and Close button */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-900/95 px-6 py-4 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-400 font-medium">{project.status}</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">{project.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">

          {/* Project Visual / Mockup Preview */}
          {project.image ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
              <img
                src={project.image}
                alt={project.name}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-300">
                Architecture Blueprint & Interface Mockup
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">PROJECT_SPEC // {project.id.toUpperCase()}</span>
                <span>{project.timeline}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                <p className="text-sm text-slate-300 mt-1 max-w-lg">{project.shortDescription}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded bg-slate-800/80 px-2 py-0.5 text-slate-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Metrics summary */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-xs text-slate-400">{m.label}</div>
                  <div className="text-base sm:text-lg font-bold text-white font-mono tabular-nums">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Project Overview</h3>
            <p className="text-sm leading-relaxed text-slate-300">{project.fullDescription}</p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Core Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950/40 p-2.5 rounded border border-slate-800/60">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Design & Invariants */}
          <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-950/80 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <Cpu className="h-4 w-4" />
              <span>Engineering & Architectural Decisions</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.architectureHighlights.map((arch, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 font-mono">›</span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Technologies Employed</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-700/60 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Target Audience & Delivery */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-4 text-xs text-slate-400">
            <div>
              <span className="text-slate-400">Engineered For: </span>
              <span className="text-slate-200 font-medium">{project.clientType}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-blue-400" />
              <span>Typical Build Scope: {project.timeline}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 bg-slate-900/90 px-6 py-4">
          <p className="text-xs text-slate-400">
            Need a similar system customized for your business workflow?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto rounded-lg border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectForInquiry(project.name, project.category === 'FinTech & Commerce' ? 'Business Software' : 'Web Application');
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              <span>Request Similar Project</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
