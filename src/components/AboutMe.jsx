import React from 'react';

export default function AboutMe() {
  const quickFacts = [
    { label: 'Origin', value: 'Hyderabad, India (City of Pearls)' },
    { label: 'Current Base', value: 'Nuremberg, Germany' },
    { label: 'Focus Areas', value: 'AI Safety, Model Evals & Interpretability' },
    { label: 'Creative Side', value: 'Technical Essays, UI Aesthetics & Figma' },
  ];

  return (
    <section id="about" className="w-full space-y-5 animate-fade-in">
      {/* Section Header Badge (Flush Left with SKILL STACK) */}
      <div className="flex items-center space-x-2">
        <span className="text-base sm:text-lg font-mono font-bold tracking-wider text-[#C23B58] uppercase px-2.5 py-1 rounded-md bg-[#C23B58]/10 border border-[#C23B58]/20">
          ABOUT ME
        </span>
      </div>

      {/* 2-Column Equal-Height Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* LEFT COLUMN (7 cols): Narrative Bio with Full-Height Margin Line */}
        <div className="lg:col-span-7 border-l-2 border-[#C23B58]/30 pl-5 py-1 flex flex-col justify-between space-y-4 text-sm text-[#4A2E2B]/85 leading-relaxed font-sans">
          {/* Paragraph 1 */}
          <p>
            Originally from the{' '}
            <span className="bg-[#F7C8D1]/50 px-1.5 py-0.5 rounded-md font-medium text-[#4A2E2B]">
              City of Pearls
            </span>
            , I completed an M.S. in Applied Statistics and Data Analytics and worked as a{' '}
            <span className="underline decoration-[#C23B58]/40 underline-offset-4 decoration-2 font-medium">
              Junior Data Analyst
            </span>{' '}
            optimizing Python and SQL pipelines before moving to Germany for my M.S. in Artificial Intelligence at FAU. Auditing real-world production data—and later benchmarking medical generative models and interpretable architectures—taught me how easily clean surface metrics hide flawed underlying patterns.
          </p>

          {/* Paragraph 2 with Sharp Terminal Cursor */}
          <p>
            Outside of building and testing models, I enjoy{' '}
            <span className="font-semibold text-[#4A2E2B]">
              writing essays
            </span>{' '}
            on Medium exploring how AI behaves in the real world, alongside colors,{' '}
            <span className="underline decoration-[#C23B58]/40 underline-offset-4 decoration-2 font-medium">
              AI Safety, Web Design
            </span>
            , blending technical rigor with clean visual storytelling.
            
            {/* SHARP TERMINAL CURSOR */}
            <span
              className="inline-block w-[3px] h-[1.1em] ml-1 bg-[#C23B58] align-sub animate-hard-cursor"
              aria-hidden="true"
            />
          </p>
        </div>

        {/* RIGHT COLUMN (5 cols): Solid Opaque Espresso Brown "At a Glance" Card */}
        <aside className="lg:col-span-5 relative bg-[#4A2E2B] text-[#FFFDF6] border-2 border-[#4A2E2B] rounded-3xl p-5 shadow-md hover:border-[#C23B58] transition-colors flex flex-col justify-between">
          {/* Left Notebook Margin Line (Soft Blush/Crimson against dark brown) */}
          <div className="absolute top-0 bottom-0 left-5 w-[1px] bg-[#F7C8D1]/30 pointer-events-none" />

          <div className="pl-3.5 space-y-3 relative z-10">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-[#FFFDF6]/15 pb-1.5">
              <span className="text-[11px] font-mono font-bold text-[#F7C8D1] uppercase tracking-wider">
                AT A GLANCE
              </span>
            </div>

            {/* Key-Value Rows */}
            <dl className="space-y-2 text-xs">
              {quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className={idx > 0 ? 'pt-2 border-t border-dashed border-[#FFFDF6]/15' : ''}
                >
                  <dt className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FFFDF6]/60">
                    {fact.label}
                  </dt>
                  <dd className="font-semibold text-[#FFFDF6] mt-0.5 leading-snug">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

      </div>
    </section>
  );
}