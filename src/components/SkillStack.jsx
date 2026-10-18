import React, { useState } from 'react';

export default function SkillStack() {
  const [openIndex, setOpenIndex] = useState(0);

  const cakeLayers = [
    {
      id: 'ai',
      layerNumber: 'LAYER 01',
      title: 'AI & Machine Learning',
      subtitle: 'Core models, neural architectures & optimization',
      bgColor: 'bg-[#C23B58]',
      textColor: 'text-[#FFFDF6]',
      accentColor: 'bg-[#FFFDF6]/20 text-[#FFFDF6]',
      skills: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Transformers / LLMs', 'Scikit-Learn', 'OpenCV', 'Pandas / NumPy'],
      isLanguage: false
    },
    {
      id: 'eng',
      layerNumber: 'LAYER 02',
      title: 'Software & Web Engineering',
      subtitle: 'Languages, developer tools & system pipelines',
      bgColor: 'bg-[#A2DD97]',
      textColor: 'text-[#4A2E2B]',
      accentColor: 'bg-[#4A2E2B]/15 text-[#4A2E2B]',
      skills: ['Python', 'C++', 'React.js', 'JavaScript', 'Tailwind CSS', 'Docker', 'Git / GitHub', 'REST APIs', 'SQL'],
      isLanguage: false
    },
    {
      id: 'soft',
      layerNumber: 'LAYER 03',
      title: 'Soft Skills & Leadership',
      subtitle: 'Collaboration & analytical execution strengths',
      bgColor: 'bg-[#F7C8D1]',
      textColor: 'text-[#4A2E2B]',
      accentColor: 'bg-[#4A2E2B]/15 text-[#4A2E2B]',
      skills: ['Analytical Problem Solving', 'Technical Writing', 'Cross-Functional Teamwork', 'Research & Synthesis', 'Adaptability'],
      isLanguage: false
    },
    {
      id: 'lang',
      layerNumber: 'LAYER 04',
      title: 'Languages Spoken',
      subtitle: 'Linguistic competence for international environments',
      bgColor: 'bg-[#4A2E2B]',
      textColor: 'text-[#FFFDF6]',
      accentColor: 'bg-[#FFFDF6]/20 text-[#FFFDF6]',
      languages: [
        { name: 'English', level: 'Full Professional / Academic C1+' },
        { name: 'German', level: 'Intermediate / Daily Conversational' },
        { name: 'Nepali / Hindi', level: 'Native / Bilingual' }
      ],
      isLanguage: true
    }
  ];

  const toggleLayer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skills" className="space-y-6">
      <div className="flex items-center space-x-2">
        <span className="text-xs font-mono font-bold tracking-wider text-[#C23B58] uppercase px-2.5 py-1 rounded-md bg-[#C23B58]/10 border border-[#C23B58]/20">
          02 // SKILL STACK
        </span>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E2B] leading-tight tracking-tight">
          Skill Stack
        </h2>
        <p className="text-sm text-[#4A2E2B]/70 mt-1">
          Click on any layer of the stack to slice into specific frameworks and competencies.
        </p>
      </div>

      <div className="space-y-3 pt-2 max-w-3xl mx-auto">
        {cakeLayers.map((layer, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={layer.id}
              className={`rounded-2xl border border-[#4A2E2B]/15 shadow-sm transition-all duration-300 overflow-hidden ${layer.bgColor} ${layer.textColor}`}
            >
              <button
                onClick={() => toggleLayer(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer focus:outline-none"
              >
                <div className="flex items-center space-x-4">
                  <span className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full ${layer.accentColor}`}>
                    {layer.layerNumber}
                  </span>
                  <div>
                    <h3 className="font-bold text-base leading-snug">{layer.title}</h3>
                    <p className="text-xs opacity-80 font-medium">{layer.subtitle}</p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center font-bold text-lg leading-none">
                  {isOpen ? '−' : '+'}
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-black/10 transition-all duration-300">
                  {layer.isLanguage ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {layer.languages.map((lang, lIdx) => (
                        <div
                          key={lIdx}
                          className="p-3 rounded-xl bg-black/15 border border-white/10 text-center"
                        >
                          <p className="font-bold text-xs">{lang.name}</p>
                          <p className="text-[11px] opacity-80 mt-0.5">{lang.level}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {layer.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-black/15 border border-white/10 shadow-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}