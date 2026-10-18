import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "saugandhi@nyshadham.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="space-y-8 animate-fade-in">

      {/* Headline & Subtitle */}
      <div className="max-w-2xl space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E2B] leading-tight tracking-tight">
          Let's Get in Touch !!
        </h2>
        <p className="text-sm text-[#4A2E2B]/75 leading-relaxed">
          I am always open to discussing academic research, AI engineering opportunities, and working student roles (*Werkstudent*) in Germany.
        </p>
      </div>

      {/* Main Grid: Direct Connect & Work Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT CARD: Direct Actions */}
        <div className="bg-[#F7C8D1]/10 border border-[#4A2E2B]/10 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#A2DD97]/20 border border-[#A2DD97]/50 px-3 py-1 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A2DD97] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6DBE5A]"></span>
              </span>
              <span className="text-xs font-semibold text-[#4A2E2B]">
                Active & Open for Opportunities
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#4A2E2B]">Direct Contact</h3>
            <p className="text-xs text-[#4A2E2B]/75 leading-relaxed">
              Feel free to reach out directly via email or connect on social platforms.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {/* Direct Mailto Button */}
            <a
              href={`mailto:${emailAddress}`}
              className="w-full py-3 rounded-2xl bg-[#C23B58] text-[#FFFDF6] font-semibold text-xs text-center hover:bg-[#C23B58]/90 transition-all shadow-md shadow-[#C23B58]/20 flex items-center justify-center space-x-2"
            >
              <span>Email</span>
              <span>({emailAddress})</span>
            </a>

            {/* Copy Button */}
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 rounded-2xl bg-[#FFFDF6] border border-[#4A2E2B]/15 text-xs font-bold text-[#4A2E2B] hover:bg-[#4A2E2B]/5 transition-all shadow-xs flex items-center justify-center space-x-2"
            >
              <span>{copied ? '✓ Copied to Clipboard!' : '📋 Copy Email Address'}</span>
            </button>
          </div>
        </div>

        {/* RIGHT CARD: Work Authorization & Profiles */}
        <div className="bg-[#F7C8D1]/10 border border-[#4A2E2B]/10 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          {/* Work Authorization Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#C23B58]">
                Work Authorization
              </h3>
              <span className="text-[10px] font-bold text-[#4A2E2B]/70 bg-[#FFFDF6] px-2 py-0.5 rounded-md border border-[#4A2E2B]/10">
                Germany (EU)
              </span>
            </div>

            <div className="space-y-2 text-xs text-[#4A2E2B]/80 leading-relaxed">
              <div className="flex items-start space-x-2">
                <span className="text-[#C23B58] font-bold">•</span>
                <span><strong>Status:</strong> Enrolled MSc Student at FAU Erlangen-Nürnberg.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#C23B58] font-bold">•</span>
                <span><strong>Allowance:</strong> EU Student Visa permit (up to 20h/week during semesters).</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#C23B58] font-bold">•</span>
                <span><strong>Location:</strong> Erlangen / Nuremberg area (Bavaria, Germany).</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-[#4A2E2B]/10 space-y-2">
            <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4A2E2B]/60">
              Profiles
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#FFFDF6] border border-[#4A2E2B]/10 text-xs font-bold text-[#4A2E2B] hover:border-[#C23B58]/40 hover:text-[#C23B58] transition-all flex items-center justify-between"
              >
                <span>LinkedIn</span>
                <span className="text-[10px] font-mono">↗</span>
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#FFFDF6] border border-[#4A2E2B]/10 text-xs font-bold text-[#4A2E2B] hover:border-[#C23B58]/40 hover:text-[#C23B58] transition-all flex items-center justify-between"
              >
                <span>GitHub</span>
                <span className="text-[10px] font-mono">↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}