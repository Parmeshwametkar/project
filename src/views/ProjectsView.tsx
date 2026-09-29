import React, { useState } from 'react';
import { Search, ArrowRight, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { Project, ProjectCategory } from '../types.ts';
import { projectsData } from '../data/projectsData.ts';

interface ProjectsViewProps {
  onOpenProjectModal: (project: Project) => void;
  onNavigate: (tab: string, meta?: any) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onOpenProjectModal,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = [
    'All',
    'Management Systems',
    'Business Software',
    'FinTech & Commerce',
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          Portfolio & Case Studies
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Software Projects Portfolio
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Explore production-grade software systems engineered by SoftwareDeveloper077. From multi-warehouse inventory systems to high-concurrency reservation platforms, explore our technical architectures and feature sets.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        
        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or tech..."
            className="w-full rounded-lg border border-slate-800 bg-slate-900/80 py-2 pl-9 pr-4 text-xs text-slate-200 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
            >
              Clear
            </button>
          )}
        </div>

      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-12 text-center space-y-3">
          <p className="text-slate-400 text-sm">No projects matched your search criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs font-medium text-blue-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-slate-700 transition-all group"
            >
              <div className="space-y-4">
                
                {/* Visual Image / Mockup */}
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
                  <div className="aspect-[16/10] rounded-lg bg-slate-950 p-4 border border-slate-800 flex flex-col justify-between text-slate-400">
                    <span className="text-xs font-mono text-slate-500">SYSTEM ARCHITECTURE</span>
                    <div className="text-sm font-semibold text-slate-300">{project.name}</div>
                    <div className="text-xs text-slate-500 font-mono">Status: {project.status}</div>
                  </div>
                )}

                {/* Metadata */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{project.category}</span>
                  <span className="text-blue-400 font-medium">{project.status}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Features Preview */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-xs font-medium text-slate-400">Key Features:</div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-slate-800/80 px-2 py-0.5 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">{project.timeline}</span>
                <button
                  onClick={() => onOpenProjectModal(project)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-600 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Inquiry prompt banner */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Need a custom business system tailored to your exact workflow?</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            We architect and build tailored solutions from scratch with clear milestones and direct developer accountability.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors whitespace-nowrap active:scale-[0.98]"
        >
          Submit Project Requirement
        </button>
      </div>

    </div>
  );
};
