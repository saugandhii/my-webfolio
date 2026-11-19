import React, { useState } from 'react';

export default function Timeline() {
  const [filter, setFilter] = useState('all');

  const timelineData = [
    {
      id: 1,
      type: 'education',
      title: 'MSc Artificial Intelligence',
      institution: 'FAU Erlangen-Nürnberg',
      location: 'Erlangen, Germany',
      period: 'Apr 2026 – Expected Mar 2028',
      status: 'In Progress',
      description: 'Focusing on Deep Learning, Computer Vision, and scalable AI systems. Engaging in advanced coursework and practical research.',
      tags: ['Deep Learning', 'Computer Vision', 'AI Systems']
    },
    {
      id: 2,
      type: 'education',
      title: 'MSc Artificial Intelligence in Industrial Applications',
      institution: 'OTH Amberg-Weiden',
      location: 'Amberg, Germany',
      period: 'Mar 2025 – Feb 2026',
      status: 'Completed',
      description: 'Focusing on Deep Learning, Computer Vision, and scalable AI systems. Engaging in advanced coursework and practical research.',
      tags: ['Deep Learning', 'Computer Vision', 'AI Systems']
    },
    {
      id: 3,
      type: 'experience',
      title: 'Junior Data Analyst', // Replace with your exact internship title
      institution: 'SBV Solutions Pvt. Ltd',
      location: 'Hyderabad, India',
      period: 'Jul 2024 – Mar 2025', // e.g., 'Jan 2023 – Jun 2023'
      status: 'Full Time Position', // e.g., 'Internship' or 'Full Time Position'
      description: 'Gained hands-on technical experience, contributed to core software modules, and assisted in debugging computational tasks.',
      tags: ['Data Analysis', 'Git', 'Testing']
    },
    {
      id: 4,
      type: 'education',
      title: 'MSc Applied Statistics and Data Analytics',
      institution: 'Amrita Vishwa Vidyapeetham',
      location: 'Coimbatore, India',
      period: 'Previous Graduate Studies',
      status: 'Graduate Work',
      description: 'Completed specialized foundational graduate coursework in advanced computing and mathematical modeling before transitioning to FAU.',
      tags: ['Advanced Math', 'Computer Science']
    }
  ];

  const filteredData = timelineData.filter(
    (item) => filter === 'all' || item.type === filter
  );

  return (
    <section id="timeline" className="space-y-6">
      {/* Header Badge */}
      <div className="flex items-center space-x-2">
        <span className="text-lg font-mono font-bold tracking-wider text-[#C23B58] uppercase px-2.5 py-1 rounded-md bg-[#C23B58]/10 border border-[#C23B58]/20">
         TIMELINE
        </span>
      </div>

      {/* Headline & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E2B] leading-tight tracking-tight">
            Education & Experience
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex bg-[#4A2E2B]/5 p-1 rounded-xl border border-[#4A2E2B]/10 self-start sm:self-auto">
          {[
            { id: 'all', label: 'All' },
            { id: 'education', label: 'Education' },
            { id: 'experience', label: 'Experience' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all duration-200 ${
                filter === btn.id
                  ? 'bg-[#C23B58] text-[#FFFDF6] shadow-xs'
                  : 'text-[#4A2E2B]/70 hover:text-[#4A2E2B]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* TIMELINE LADDER */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#4A2E2B]/15 space-y-8 pt-2">
        {filteredData.map((item) => (
          <div key={item.id} className="relative group">
            {/* LADDER NODE DOT */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[#FFFDF6] shadow-xs transition-transform duration-200 group-hover:scale-125 ${
                item.type === 'education' ? 'bg-[#C23B58]' : 'bg-[#A2DD97]'
              }`}
            />

            {/* CARD CONTAINER */}
            <div className="bg-[#F7C8D1]/10 border border-[#4A2E2B]/10 rounded-2xl p-5 hover:border-[#C23B58]/30 transition-all duration-200 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-md ${
                      item.type === 'education'
                        ? 'bg-[#C23B58]/15 text-[#C23B58]'
                        : 'bg-[#A2DD97]/40 text-[#4A2E2B]'
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs font-semibold text-[#4A2E2B]/60">
                    {item.period}
                  </span>
                </div>

                <span className="text-xs font-medium text-[#4A2E2B]/70 bg-[#FFFDF6] px-2.5 py-0.5 rounded-full border border-[#4A2E2B]/10">
                  {item.location}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-[#4A2E2B] text-base">{item.title}</h3>
                <p className="text-xs font-semibold text-[#C23B58]">{item.institution}</p>
              </div>

              <p className="text-xs text-[#4A2E2B]/80 leading-relaxed pt-1">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-medium text-[#4A2E2B]/70 bg-[#FFFDF6] px-2 py-0.5 rounded-md border border-[#4A2E2B]/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}