import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { HomeView } from './views/HomeView.tsx';
import { ProjectsView } from './views/ProjectsView.tsx';
import { ServicesView } from './views/ServicesView.tsx';
import { AboutView } from './views/AboutView.tsx';
import { ContactView } from './views/ContactView.tsx';
import { DashboardView } from './views/DashboardView.tsx';
import { Project, ProjectType } from './types.ts';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);
  const [contactInitialState, setContactInitialState] = useState<{
    projectType?: ProjectType;
    serviceOrProject?: string;
  }>({});

  const handleNavigate = (tab: string, meta?: { projectType?: ProjectType; serviceName?: string; projectName?: string }) => {
    if (meta) {
      setContactInitialState({
        projectType: meta.projectType,
        serviceOrProject: meta.serviceName || meta.projectName,
      });
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProjectForInquiry = (projectName: string, projectType: string) => {
    handleNavigate('contact', {
      projectName,
      projectType: (projectType as ProjectType) || 'Web Application',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Top Bar Navigation */}
      <Navbar currentTab={currentTab} onNavigate={handleNavigate} />

      {/* Main View Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenProjectModal={(p) => setSelectedProjectModal(p)}
          />
        )}

        {currentTab === 'projects' && (
          <ProjectsView
            onNavigate={handleNavigate}
            onOpenProjectModal={(p) => setSelectedProjectModal(p)}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView onNavigate={handleNavigate} />
        )}

        {currentTab === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentTab === 'contact' && (
          <ContactView
            initialProjectType={contactInitialState.projectType}
            initialServiceOrProject={contactInitialState.serviceOrProject}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'dashboard' && (
          <DashboardView
            onOpenProjectModal={(p) => setSelectedProjectModal(p)}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Project Specification Modal */}
      <ProjectModal
        project={selectedProjectModal}
        onClose={() => setSelectedProjectModal(null)}
        onSelectForInquiry={handleSelectProjectForInquiry}
      />

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
