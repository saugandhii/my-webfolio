import React from 'react';

export default function FeaturedProjects({ onSelectProject, onSeeAllProjects }) {
  const featured = [
    {
      id: 'proj-1',
      title: 'Computer Vision & Deep Learning Pipeline',
      category: 'AI / Computer Vision',
      tags: ['PyTorch', 'OpenCV', 'Python', 'CNNs']
    },
    {
      id: 'proj-2',
      title: 'Scalable MLOps & Model Deployment',
      category: 'MLOps / Systems',
      tags: ['Docker', 'FastAPI', 'Python', 'CI/CD']
    },
    {
      id: 'proj-3',
      title: 'Generative AI & LLM Fine-Tuning',
      category: 'NLP / Generative AI',
      tags: ['Transformers', 'LangChain', 'VectorDB', 'PyTorch']
    }
  ];

  return (
    <section id="featured-projects" className="space-y-6">
      {/* Header Badge & Section Link */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold tracking-wider text-[#C23B58] uppercase px-2.5 py-1 rounded-md bg-[#C23B58]/10 border border-[#C23B58]/20">
            05 // FEATURED PROJECTS
          </span>
        </div>

        <button
          onClick={onSeeAllProjects}
          className="text-xs font-bold text-[#C23B58] hover:underline flex items-center space-x-1"
        >
          <span>All Projects Tab</span>
          <span>→</span>
        </button>
      </div>

      {/* Grid of 3 Minimal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {featured.map((proj) => (
          <div
            key={proj.id}
            onClick={() => onSelectProject(proj.id)}
            className="bg-[#F7C8D1]/10 border border-[#4A2E2B]/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#C23B58]/50 hover:bg-[#F7C8D1]/20 transition-all duration-300 shadow-xs cursor-pointer group"
          >
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#C23B58] uppercase px-2 py-0.5 rounded-full bg-[#C23B58]/10">
                {proj.category}
              </span>
              <h3 className="font-bold text-[#4A2E2B] text-base group-hover:text-[#C23B58] transition-colors leading-snug">
                {proj.title}
              </h3>
            </div>

            <div className="pt-6 space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-medium text-[#4A2E2B]/80 bg-[#FFFDF6] px-2 py-0.5 rounded-md border border-[#4A2E2B]/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-[#4A2E2B]/10 flex items-center justify-between text-xs font-bold text-[#C23B58] group-hover:translate-x-1 transition-transform">
                <span>View Project</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}