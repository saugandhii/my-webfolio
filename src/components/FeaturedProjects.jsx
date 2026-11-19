import React from 'react';

export default function FeaturedProjects({ onSelectProject, onSeeAllProjects }) {
  const featured = [
    {
      id: 'proj-1',
      code: '01',
      title: 'Multimodal Vision-Language Search Engine',
      category: 'Vector Search & Embeddings',
      tags: ['PyTorch', 'FAISS', 'CLIP', 'FastAPI']
    },
    {
      id: 'proj-2',
      code: '02',
      title: 'Autonomous Mobile Robot (AMR) SLAM',
      category: 'LiDAR & Path Planning',
      tags: ['ROS2', 'C++', 'Python', 'EKF']
    },
    {
      id: 'proj-3',
      code: '03',
      title: 'LLM Fine-Tuning for Medical Summarization',
      category: 'Domain Adaptation & PEFT',
      tags: ['Hugging Face', 'LoRA', 'Unsloth', 'PyTorch']
    }
  ];

  const handleCardClick = (id) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    onSelectProject(id);
  };

  const handleSeeAllClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    onSeeAllProjects();
  };

  return (
    <section id="featured-projects" className="w-full space-y-6 animate-fade-in">
      {/* Header Badge & Section Link */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-base sm:text-lg font-mono font-bold tracking-wider text-[#C23B58] uppercase px-2.5 py-1 rounded-md bg-[#C23B58]/10 border border-[#C23B58]/20">
            FEATURED PROJECTS
          </span>
        </div>

        <button
          type="button"
          onClick={handleSeeAllClick}
          className="text-xs font-mono font-bold text-[#C23B58] hover:underline flex items-center space-x-1.5 cursor-pointer"
        >
          <span>All Projects Tab</span>
          <span>→</span>
        </button>
      </div>

      {/* Grid of 3 Two-Color Lab-Note Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {featured.map((proj) => (
          <div
            key={proj.id}
            onClick={() => handleCardClick(proj.id)}
            className="relative bg-[#4A2E2B]/[0.08] backdrop-blur-[2px] border border-[#C23B58]/30 hover:border-[#C23B58] rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer group"
          >
            {/* Left Crimson Notebook Margin Line */}
            <div className="absolute top-0 bottom-0 left-5 w-[1px] bg-[#C23B58]/35 pointer-events-none" />

            <div className="pl-3.5 space-y-3">
              {/* Index + Category Header */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#C23B58] uppercase">
                  {proj.category}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#C23B58]/70">
                  {proj.code}
                </span>
              </div>

              <h3 className="font-extrabold text-[#4A2E2B] text-base group-hover:text-[#C23B58] transition-colors leading-snug">
                {proj.title}
              </h3>
            </div>

            <div className="pl-3.5 pt-6 space-y-3.5">
              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono font-medium text-[#4A2E2B]/85 bg-[#4A2E2B]/[0.06] px-2 py-0.5 rounded-md border border-[#C23B58]/25"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer Action */}
              <div className="pt-2.5 border-t border-dashed border-[#C23B58]/30 flex items-center justify-between text-xs font-mono font-bold text-[#C23B58]">
                <span>View Case Study</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}