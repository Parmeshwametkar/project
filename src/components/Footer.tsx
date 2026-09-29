import React from 'react';
import { Mail, User, Code2, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (tabId: string) => {
    onNavigate(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600/10 border border-blue-500/30 text-blue-400">
                <Code2 className="h-4 w-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                SoftwareDeveloper<span className="text-blue-500">077</span>
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Building practical software solutions for modern businesses. Specializing in custom web applications, business management tools, and robust system architectures.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <User className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-slate-400">Founder:</span>
                <span className="text-slate-200 font-medium">Parmeshwar Metkar</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-slate-400">Direct Email:</span>
                <a 
                  href="mailto:parmeshwarmetkar07@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                >
                  parmeshwarmetkar07@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-white transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('projects')} 
                  className="hover:text-white transition-colors"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-white transition-colors"
                >
                  Engineering Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-white transition-colors"
                >
                  About & Founder
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('dashboard')} 
                  className="hover:text-white transition-colors"
                >
                  Demo Operations Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Core Software Capabilities */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Custom Development Focus
            </h3>
            <div className="text-sm text-slate-400 space-y-2">
              <p className="leading-relaxed">
                Management systems (Hotel, Restaurant, School, Inventory), bespoke business ERPs, secure client portals, and responsive SaaS web apps.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>Submit Project Requirement</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-10 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} SoftwareDeveloper077. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Built by Parmeshwar Metkar</span>
            <span>·</span>
            <span>Production Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
