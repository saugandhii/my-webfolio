import React from 'react';
import { motion } from 'framer-motion';
import pixelAvatar from '../assets/Pixelart.jpg';

export default function HeroPlaceholder() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center space-y-10 animate-fade-in relative pt-8 px-4 text-center sm:text-left select-none"
    >
      {/* Hero Content Container */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12 sm:gap-16 max-w-3xl">
        
        {/* 1. SINGLE-TAPED PHOTO FRAME WITH PIXEL AVATAR */}
        <motion.div
          className="relative group flex-shrink-0"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Single Centered Top Masking Tape Strip */}
          <span
            aria-hidden="true"
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#C23B59]/25 border border-[#C23B59]/25 rounded-xs transform -rotate-20 z-20 pointer-events-none group-hover:bg-[#C23B59]/35 transition-colors shadow-2xs"
          />

          {/* Main Square Photo Container */}
          <div className="w-56 h-56 p-1.5 bg-[#FFFDF6] border-2 border-[#4A2E2B]/15 rounded-2xl shadow-lg relative z-10 overflow-hidden transform group-hover:scale-[1.03] transition-transform flex items-center justify-center">
            <img
              src={pixelAvatar}
              alt="Saugandhi Pixel Avatar"
              className="w-full h-full object-contain rounded-xl [image-rendering:pixelated]"
            />
          </div>
        </motion.div>

        {/* 2. HIGHLIGHTED INTRO TEXT */}
        <div className="space-y-6 pt-2">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4A2E2B] tracking-tight leading-none font-sans">
              Hi, I&apos;m{" "}
            </h1>

            {/* STATIC HIGHLIGHTER NAME EFFECT */}
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
            <p className="text-sm text-[#4A2E2B]/85 leading-relaxed">
              M.Sc. AI student at FAU Erlangen-Nürnberg with a background in Applied Statistics. Focused on AI safety, model evaluations, and auditing hidden failure modes in machine learning systems.
            </p>
          </div>

          {/* Direct Resume Action */}
          <div className="flex justify-center sm:justify-start pt-2">
            <a
              href="#resume"
              className="text-xs font-bold font-mono text-[#FFFDF6] bg-[#C23B58] hover:bg-[#4A2E2B] px-5 py-2.5 rounded-xl transition-all shadow-md group flex items-center space-x-2"
            >
              <span>Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}