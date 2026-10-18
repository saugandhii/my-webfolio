import React, { useState } from 'react';

export default function ResumeDownload() {
  const [selectedPdf, setSelectedPdf] = useState(null); // 'en', 'de', or null

  const pdfMap = {
    en: {
      title: 'Curriculum Vitae (English)',
      file: '/resume-en.pdf',
      downloadName: 'MSc_AI_Resume_EN.pdf'
    },
    de: {
      title: 'Lebenslauf (Deutsch)',
      file: '/resume-de.pdf',
      downloadName: 'MSc_AI_Lebenslauf_DE.pdf'
    }
  };

  return (
    <section id="resume" className="space-y-6">
      {/* Header Badge */}
      <div className="flex items-center space-x-2">
        <span className="text-xs font-mono font-bold tracking-wider text-[#C23B58] uppercase px-2.5 py-1 rounded-md bg-[#C23B58]/10 border border-[#C23B58]/20">
          04 // RESUME
        </span>
      </div>

      {/* Main Card */}
      <div className="bg-[#F7C8D1]/10 border border-[#4A2E2B]/10 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#4A2E2B] tracking-tight">
            Resume
          </h2>
          <p className="text-xs sm:text-sm text-[#4A2E2B]/75 leading-relaxed">
            Preview my formal academic and professional resume in-browser or download a PDF copy in English or German.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* English CV Buttons */}
          <div className="flex items-center space-x-1 bg-[#C23B58] text-[#FFFDF6] p-1 rounded-full shadow-md shadow-[#C23B58]/20">
            <button
              onClick={() => setSelectedPdf('en')}
              className="px-4 py-1.5 font-semibold text-xs rounded-full hover:bg-white/10 transition-colors"
            >
              Resume EN
            </button>
            <a
              href="/resume-en.pdf"
              download="MSc_AI_Resume_EN.pdf"
              title="Download EN PDF"
              className="px-2.5 py-1.5 font-bold text-xs bg-black/20 rounded-full hover:bg-black/30 transition-colors"
            >
              ↓
            </a>
          </div>

          {/* German CV Buttons */}
          <div className="flex items-center space-x-1 bg-[#4A2E2B] text-[#FFFDF6] p-1 rounded-full shadow-md shadow-[#4A2E2B]/20">
            <button
              onClick={() => setSelectedPdf('de')}
              className="px-4 py-1.5 font-semibold text-xs rounded-full hover:bg-white/10 transition-colors"
            >
              Resume DE
            </button>
            <a
              href="/resume-de.pdf"
              download="MSc_AI_Lebenslauf_DE.pdf"
              title="Download DE PDF"
              className="px-2.5 py-1.5 font-bold text-xs bg-black/20 rounded-full hover:bg-black/30 transition-colors"
            >
              ↓
            </a>
          </div>
        </div>
      </div>

      {/* LIVE IN-BROWSER PREVIEW MODAL */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 bg-[#4A2E2B]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-[#FFFDF6] border border-[#4A2E2B]/20 rounded-3xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#4A2E2B]/10 flex items-center justify-between bg-[#F7C8D1]/20">
              <div className="flex items-center space-x-3">
                <span className="font-bold text-[#4A2E2B] text-sm sm:text-base">
                  {pdfMap[selectedPdf].title}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href={pdfMap[selectedPdf].file}
                  download={pdfMap[selectedPdf].downloadName}
                  className="px-3 py-1 rounded-full bg-[#C23B58] text-[#FFFDF6] text-xs font-semibold hover:bg-[#C23B58]/90 transition-all"
                >
                  Download PDF
                </a>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="w-8 h-8 rounded-full bg-[#4A2E2B]/10 hover:bg-[#4A2E2B]/20 text-[#4A2E2B] font-bold text-sm flex items-center justify-center transition-all"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Embedded Web Viewer */}
            <div className="flex-grow w-full bg-slate-100">
              <iframe
                src={`${pdfMap[selectedPdf].file}#toolbar=0`}
                title="Resume Preview"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}