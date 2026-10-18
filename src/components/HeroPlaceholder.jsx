import React from 'react';
import { motion } from 'framer-motion';

export default function HeroPlaceholder() {
  // Replace with your actual square profile photo URL
  const profilePhotoUrl = "https://via.placeholder.com/200?text=Profile"; 

  return (
    <section id="hero" className="flex flex-col items-center justify-center space-y-10 animate-fade-in relative pt-8 px-4 text-center sm:text-left select-none">
      
      {/* Hero Content Container */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12 sm:gap-16 max-w-3xl">
        
        {/* 1. TAPED PHOTO FRAME */}
        <motion.div 
          className="relative group flex-shrink-0"
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Main Square Photo Container */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 p-1.5 bg-[#FFFDF6] border-2 border-[#4A2E2B]/10 rounded-xl shadow-lg relative z-10 overflow-hidden transform group-hover:scale-[1.03] transition-transform">
            <img 
              src={profilePhotoUrl} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Diagonal Masking Tape Strips */}
          <span className="absolute -top-3 -right-6 w-16 h-6 bg-[#C23B58]/30 border border-[#C23B58]/20 rounded-sm transform rotate-45 z-20 pointer-events-none group-hover:bg-[#C23B58]/40 transition-colors" />
          <span className="absolute -bottom-3 -left-6 w-16 h-6 bg-[#C23B58]/20 border border-[#C23B58]/10 rounded-sm transform -rotate-45 z-20 pointer-events-none group-hover:bg-[#C23B58]/30 transition-colors" />
        </motion.div>

        {/* 2. HIGHLIGHTED INTRO TEXT */}
        <div className="space-y-6 pt-2">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4A2E2B] tracking-tight leading-none font-sans">
              Hi, I'm{" "}
            </h1>

            {/* STATIC HIGHLIGHTER NAME EFFECT (No animation) */}
            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4A2E2B] tracking-tight leading-none font-sans relative z-10">
                Saugandhi
              </h1>
              {/* Static Tilted Highlight Mask */}
              <span 
                className="absolute inset-x-0 -bottom-1 h-6 bg-[#F7C8D1] rounded-lg -rotate-1 transform -skew-x-12 z-0 pointer-events-none opacity-90" 
                style={{ scaleY: 1.15 }}
              />
            </div>
          </div>

          {/* Minimal Description */}
          <div className="max-w-md space-y-3">
            <p className="text-sm font-semibold text-[#4A2E2B]/90 font-mono tracking-tight bg-[#4A2E2B]/5 px-3 py-1.5 rounded-xl border border-[#4A2E2B]/10 shadow-xs">
              MSc AI Candidate @ FAU Erlangen-Nürnberg
            </p>
            <p className="text-xs sm:text-sm text-[#4A2E2B]/85 leading-relaxed">
              Focused on high-performance Computer Vision, fine-tuning LLMs for domain adaptation, and rigorously analyzing failure modes.
            </p>
          </div>

          {/* Direct Resume Action */}
          <div className="flex justify-center sm:justify-start pt-2">
            <a 
              href="#resume"
              className="text-xs font-bold font-mono text-white bg-[#C23B58] hover:bg-[#4A2E2B] px-5 py-2.5 rounded-xl transition-all shadow-md group flex items-center space-x-2"
            >
              <span>Get CV / View Resume</span>
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}