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
    <section
      id="contact"
      className="bg-dotted-page py-8 sm:py-10 px-4 sm:px-8 space-y-6 sm:space-y-8 animate-fade-in relative rounded-3xl border border-[#4A2E2B]/10 my-4"
    >
      {/* Centered Header */}
      <div className="max-w-2xl mx-auto text-center space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E2B] leading-tight tracking-tight">
          Let&apos;s Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-[#4A2E2B]/75">
          Open to Werkstudent / HiWi research roles &amp; AI collaborations.
        </p>
      </div>

      {/* Main Grid: Soft Rose Milk 2-Card Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2">

        {/* LEFT CARD: Direct Contact */}
        <article className="relative bg-[#F7C8D1]/20 backdrop-blur-[2px] border-2 border-[#C23B58]/20 rounded-3xl p-6 sm:p-7 shadow-sm hover:border-[#C23B58]/50 transition-colors flex flex-col justify-between">
          {/* Left Red Notebook Margin Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-[1px] bg-[#C23B58]/30 pointer-events-none" />

          <div className="pl-4 sm:pl-5 space-y-5 relative z-10">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-[#C23B58]/15 pb-2">
              <span className="text-[11px] font-mono font-bold text-[#C23B58] uppercase tracking-wider">
                01 // DIRECT REACH-OUT
              </span>
              {/* Live Availability Pill */}
              <div className="inline-flex items-center space-x-1.5 bg-[#FFFDF6]/90 border border-[#6DBE5A]/50 px-2.5 py-0.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A2DD97] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6DBE5A]" />
                </span>
                <span className="text-[10px] font-bold text-[#4A2E2B]">
                  Available
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="font-extrabold text-[#4A2E2B] text-lg sm:text-xl leading-snug">
                Start a Conversation
              </h3>
              <p className="text-sm text-[#4A2E2B]/85 leading-relaxed">
                Whether you have an opening for a <em>Werkstudent</em> / HiWi researcher, an ML engineering project, or simply want to exchange notes on AI systems, feel free to write directly.
              </p>
            </div>

            {/* Quick Metadata Block */}
            <div className="pt-2 border-t border-dashed border-[#C23B58]/20 space-y-1.5 text-xs text-[#4A2E2B]/85">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-[#4A2E2B]/65 uppercase shrink-0">Email</span>
                <span className="font-semibold text-[#4A2E2B] select-all truncate">{emailAddress}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-[#4A2E2B]/65 uppercase shrink-0">Response Time</span>
                <span className="font-medium text-[#4A2E2B]/90">Typically within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="pl-4 sm:pl-5 pt-6 flex flex-col sm:flex-row gap-2.5 relative z-10">
            <a
              href={`mailto:${emailAddress}`}
              className="flex-1 py-3 px-4 rounded-2xl bg-[#C23B58] text-[#FFFDF6] font-bold text-xs text-center hover:bg-[#C23B58]/90 transition-all shadow-md shadow-[#C23B58]/20 flex items-center justify-center space-x-1.5"
            >
              <span>Send Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="py-3 px-4 rounded-2xl bg-[#FFFDF6] border-2 border-[#4A2E2B]/15 text-[#4A2E2B] font-bold text-xs hover:border-[#C23B58] hover:text-[#C23B58] transition-all cursor-pointer flex items-center justify-center space-x-1.5"
            >
              <span>{copied ? '✓ Copied!' : 'Copy Address'}</span>
            </button>
          </div>
        </article>

        {/* RIGHT CARD: Work Authorization & Profiles */}
        <article className="relative bg-[#F7C8D1]/20 backdrop-blur-[2px] border-2 border-[#C23B58]/20 rounded-3xl p-6 sm:p-7 shadow-sm hover:border-[#C23B58]/50 transition-colors flex flex-col justify-between">
          {/* Left Red Notebook Margin Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-[1px] bg-[#C23B58]/30 pointer-events-none" />

          <div className="pl-4 sm:pl-5 space-y-5 relative z-10">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-[#C23B58]/15 pb-2">
              <span className="text-[11px] font-mono font-bold text-[#C23B58] uppercase tracking-wider">
                02 // HIRING & LOGISTICS
              </span>
              <span className="text-[10px] font-mono font-bold text-[#4A2E2B]/75 bg-[#FFFDF6]/90 px-2 py-0.5 rounded-md border border-[#4A2E2B]/15">
                GERMANY (EU)
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h3 className="font-extrabold text-[#4A2E2B] text-lg sm:text-xl leading-snug">
                Work Authorization &amp; Profiles
              </h3>
              <p className="text-sm font-semibold text-[#4A2E2B]/70 mt-0.5">
                FAU Erlangen-Nürnberg • MSc Artificial Intelligence
              </p>
            </div>

            {/* Structured Logistics List */}
            <div className="space-y-2.5 text-sm text-[#4A2E2B]/90 leading-relaxed pt-1">
              <div className="flex items-start space-x-2">
                <span className="text-[#C23B58] font-bold">•</span>
                <span>
                  <strong>Permit:</strong> Enrolled student visa allowing up to 20h/week during semesters (full-time during breaks).
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#C23B58] font-bold">•</span>
                <span>
                  <strong>Location &amp; Mode:</strong> Based in Erlangen / Nuremberg; open to on-site (Bavaria), hybrid, or remote roles.
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-[#C23B58] font-bold">•</span>
                <span>
                  <strong>Availability:</strong> Immediate / Winter Semester 2026.
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles Footer */}
          <div className="pl-4 sm:pl-5 pt-6 relative z-10">
            <div className="pt-4 border-t border-dashed border-[#C23B58]/20 space-y-2.5">
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4A2E2B]/65">
                Verified Profiles
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com/in/saugandhi"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3.5 rounded-2xl bg-[#FFFDF6] border-2 border-[#4A2E2B]/15 text-xs font-bold text-[#4A2E2B] hover:border-[#C23B58] hover:text-[#C23B58] transition-all flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <span className="text-[11px] font-mono">↗</span>
                </a>
                <a
                  href="https://github.com/saugandhii/"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3.5 rounded-2xl bg-[#FFFDF6] border-2 border-[#4A2E2B]/15 text-xs font-bold text-[#4A2E2B] hover:border-[#C23B58] hover:text-[#C23B58] transition-all flex items-center justify-between"
                >
                  <span>GitHub</span>
                  <span className="text-[11px] font-mono">↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}