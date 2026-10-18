import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" className="space-y-6">
      {/* Section Header Badge */}
      <div className="flex items-center space-x-2">
        <span className="text-xs font-mono font-bold tracking-wider text-[#C23B58] uppercase px-2.5 py-1 rounded-md bg-[#C23B58]/10 border border-[#C23B58]/20">
          01 // ABOUT ME
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E2B] leading-tight tracking-tight max-w-3xl">
        Call me Sandy.
      </h2>

      {/* 2-Column Asymmetric Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
        {/* Left Column: Narrative */}
        <div className="md:col-span-7 space-y-4 text-sm text-[#4A2E2B]/80 leading-relaxed font-normal">
          <p>
            Currently pursuing my Master's in Artificial Intelligence at FAU Erlangen-Nürnberg. My work focuses on constructing robust machine learning models, optimizing neural architectures, and developing end-to-end data pipelines.
          </p>
          <p>
            I enjoy tackling complex computational problems—whether that means debugging deep learning loss curves, designing scalable full-stack web architectures, or exploring cutting-edge generative AI models.
          </p>
        </div>

        {/* Right Column: Quick Stats & Pillars */}
        <div className="md:col-span-5 flex flex-col gap-3">
          {/* Status Card */}
          <div className="bg-[#F7C8D1]/10 border border-[#4A2E2B]/10 rounded-2xl p-4 flex items-center space-x-3 shadow-xs">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A2DD97] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A2DD97]"></span>
            </span>
            <span className="text-xs font-semibold text-[#4A2E2B]">
              Currently studying at FAU
            </span>
          </div>

          {/* Highlights Grid */}
          <div className="bg-[#F7C8D1]/10 border border-[#4A2E2B]/10 rounded-2xl p-5 space-y-3 shadow-xs text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#4A2E2B]/10">
              <span className="text-[#4A2E2B]/60 font-medium">Degree</span>
              <span className="font-semibold text-[#4A2E2B]">MSc Artificial Intelligence</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b border-[#4A2E2B]/10">
              <span className="text-[#4A2E2B]/60 font-medium">University</span>
              <span className="font-semibold text-[#4A2E2B]">FAU Erlangen-Nürnberg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}