import React, { useState } from 'react';
import HeroPlaceholder from './components/HeroPlaceholder';
import AboutMe from './components/AboutMe';
import SkillStack from './components/SkillStack';
import Timeline from './components/Timeline';
import ResumeDownload from './components/ResumeDownload';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import MoreTab from './components/MoreTab';
import ProjectsTab from './components/ProjectsTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleOpenProject = (projectId) => {
    setSelectedProjectId(projectId);
    setActiveTab('projects');
  };

  return (
    <div className="relative min-h-screen text-[#4A2E2B] font-sans flex flex-col justify-between selection:bg-[#F7C8D1] selection:text-[#4A2E2B] bg-[#FFFDF6]">
      {/* 
        FIXED DOTTED BACKGROUND CANVAS 
        - Stays 100% stationary as the user scrolls
        - z-0 keeps it behind all interactive content
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(#4A2E2B22 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#FFFDF6]/85 backdrop-blur-md border-b border-[#4A2E2B]/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => {
              setActiveTab('home');
              setSelectedProjectId(null);
            }}
          >
            <h1 className="font-bold text-[#4A2E2B] tracking-tight leading-none text-base">Portfolio.</h1>
          </div>

          <nav className="flex items-center bg-[#FFFDF6]/90 p-1 rounded-full border border-[#4A2E2B]/10 shadow-2xs">
            {['home', 'projects', 'more', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab !== 'projects') setSelectedProjectId(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#C23B58] text-[#FFFDF6] shadow-md shadow-[#C23B58]/20'
                    : 'text-[#4A2E2B]/70 hover:text-[#C23B58] hover:bg-[#C23B58]/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* SCROLLABLE CONTENT CONTAINER (z-10 sits above fixed background) */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 flex-grow w-full">
        {activeTab === 'home' && (
          <div className="space-y-16">
            <HeroPlaceholder />
            <AboutMe />
            <SkillStack />
            <Timeline />
            <ResumeDownload />
            <FeaturedProjects 
              onSelectProject={handleOpenProject} 
              onSeeAllProjects={() => {
                setSelectedProjectId(null);
                setActiveTab('projects');
              }} 
            />
          </div>
        )}

        {activeTab === 'projects' && (
          <ProjectsTab 
            selectedProjectId={selectedProjectId} 
            onSelectProject={setSelectedProjectId} 
          />
        )}

        {activeTab === 'more' && <MoreTab />}

        {activeTab === 'contact' && <Contact />}
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#4A2E2B]/10 bg-[#FFFDF6]/90 backdrop-blur-xs py-8 px-6 text-center text-xs text-[#4A2E2B]/60">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© Built with React & Tailwind CSS</p>
          <div className="flex items-center space-x-6 text-[#4A2E2B]/80 font-medium">
            <a 
              href="https://github.com/your-username" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#C23B58] transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/your-username" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#C23B58] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}