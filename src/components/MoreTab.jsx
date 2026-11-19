import React from 'react';

export default function MoreTab() {
  // Spotify & Medium Links
  const spotifyTrackUrl = "https://open.spotify.com/track/1q82k8tuu1t6t8H8zHMqWs";
  const spotifyEmbedUrl = "https://open.spotify.com/embed/track/1q82k8tuu1t6t8H8zHMqWs?utm_source=generator&theme=0";
  const mediumProfileUrl = "https://medium.com/@your-handle";

  // 01 // Technical Writing Data
  const articles = [
    {
      title: 'Attention Mechanisms & Transformers',
      desc: 'An intuitive dive into self-attention, matrix projections, and positional encodings in PyTorch.',
      link: 'https://medium.com'
    },
    {
      title: 'Optimizing Computer Vision Pipelines',
      desc: 'Practical strategies for GPU batching, data augmentations, and latency reduction in OpenCV.',
      link: 'https://medium.com'
    },
    {
      title: 'Understanding Backpropagation from Scratch',
      desc: 'Deriving computational graphs and gradient updates manually before writing autograd code.',
      link: 'https://medium.com'
    },
    {
      title: 'Understanding Backpropagation from Scratch',
      desc: 'Deriving computational graphs and gradient updates manually before writing autograd code.',
      link: 'https://medium.com'
    }
    
  ];

  // 02 // Community & Growth Data
  const communityHighlights = [
    {
      category: 'Mentorship & Events',
      text: 'Organized 12+ technical workshops and hackathons for 200+ students, and mentored 40+ peers in algorithms, PyTorch, and ML workflows.'
    },
    {
      category: 'AI Reading Groups',
      text: 'Actively dissecting seminal and recent research papers in multimodal learning and vision-language transformers.'
    },
    {
      category: 'Systems & Language Growth',
      text: 'Building custom C++ / CUDA operators for tensor pipeline optimization while advancing conversational German (A2/B1) at FAU Erlangen-Nürnberg.'
    }
  ];

  return (
    <section
      id="more"
      className="bg-dotted-page min-h-screen py-10 px-4 sm:px-8 space-y-8 sm:space-y-10 animate-fade-in relative rounded-3xl border border-[#4A2E2B]/10 my-4"
    >
      {/* Centered Headline */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E2B] leading-tight tracking-tight">
          Beyond the Code
        </h2>
        <p className="text-xs sm:text-sm text-[#4A2E2B]/75">
          Technical essays, student mentorship, research reading groups, and what is currently playing in the lab.
        </p>
      </div>

      {/* Main Container: 2-Column Lab Notes + Bottom Audio Strip */}
      <div className="max-w-5xl mx-auto space-y-8 pt-2">
        
        {/* TOP ROW: 2 Clean Lotus Green Notebook Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* CARD 01: Technical Writing */}
          <article className="relative bg-[#A2DD97]/20 backdrop-blur-[2px] border-2 border-[#6DBE5A]/35 rounded-3xl p-6 sm:p-7 shadow-sm hover:border-[#C23B58]/50 transition-colors flex flex-col justify-between">
            {/* Left Red Notebook Margin Line */}
            <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-[1px] bg-[#C23B58]/30 pointer-events-none" />

            <div className="pl-4 sm:pl-5 space-y-5 relative z-10">
              {/* Card Header with Medium Profile Link */}
              <div className="flex items-center justify-between border-b border-[#4A2E2B]/15 pb-2">
                <span className="text-[11px] font-mono font-bold text-[#C23B58] uppercase tracking-wider">
                  01 // TECHNICAL WRITING
                </span>
                <a
                  href={mediumProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-mono font-bold text-[#4A2E2B]/75 hover:text-[#C23B58] transition-colors"
                >
                  ALL ARTICLES ↗
                </a>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-extrabold text-[#4A2E2B] text-lg sm:text-xl leading-snug">
                  Essays & Engineering Notes
                </h3>
                <p className="text-xs font-semibold text-[#4A2E2B]/70 mt-0.5">
                  Featured Publications on Medium
                </p>
              </div>

              {/* Articles List */}
              <div className="space-y-4 pt-1">
                {articles.map((art, idx) => (
                  <div
                    key={idx}
                    className={idx > 0 ? 'pt-3.5 border-t border-dashed border-[#4A2E2B]/20' : ''}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-sm text-[#4A2E2B] leading-snug">
                        {art.title}
                      </h4>
                      <a
                        href={art.link}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 text-xs font-bold text-[#C23B58] hover:underline"
                      >
                        Read ↗
                      </a>
                    </div>
                    <p className="text-xs text-[#4A2E2B]/85 mt-1 leading-relaxed">
                      {art.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Pills */}
            <div className="pl-4 sm:pl-5 pt-6 flex flex-wrap gap-1.5 relative z-10">
              {['LLMs', 'Transformers', 'Computer Vision', 'PyTorch'].map((pill) => (
                <span
                  key={pill}
                  className="text-[10px] font-medium text-[#4A2E2B] bg-[#FFFDF6]/90 px-2.5 py-0.5 rounded-md border border-[#4A2E2B]/15"
                >
                  #{pill}
                </span>
              ))}
            </div>
          </article>

          {/* CARD 02: Community & Growth */}
          <article className="relative bg-[#A2DD97]/20 backdrop-blur-[2px] border-2 border-[#6DBE5A]/35 rounded-3xl p-6 sm:p-7 shadow-sm hover:border-[#C23B58]/50 transition-colors flex flex-col justify-between">
            {/* Left Red Notebook Margin Line */}
            <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-[1px] bg-[#C23B58]/30 pointer-events-none" />

            <div className="pl-4 sm:pl-5 space-y-5 relative z-10">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#4A2E2B]/15 pb-2">
                <span className="text-[11px] font-mono font-bold text-[#C23B58] uppercase tracking-wider">
                  02 // COMMUNITY & GROWTH
                </span>
                <span className="text-[11px] font-mono text-[#4A2E2B]/60">
                  FAU & BEYOND
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-extrabold text-[#4A2E2B] text-lg sm:text-xl leading-snug">
                  Leadership, Reading Groups & Deep Dives
                </h3>
                <p className="text-xs font-semibold text-[#4A2E2B]/70 mt-0.5">
                  AI Student Association & Research Circles
                </p>
              </div>

              {/* Structured Highlights */}
              <div className="space-y-4 pt-1">
                {communityHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className={idx > 0 ? 'pt-3.5 border-t border-dashed border-[#4A2E2B]/20' : ''}
                  >
                    <span className="text-[11px] font-mono font-bold text-[#C23B58] uppercase tracking-wide">
                      • {item.category}
                    </span>
                    <p className="text-xs text-[#4A2E2B]/90 mt-1 leading-relaxed pl-3">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Pills */}
            <div className="pl-4 sm:pl-5 pt-6 flex flex-wrap gap-1.5 relative z-10">
              {['Mentorship', 'Paper Reading', 'CUDA / C++', 'German A2/B1'].map((pill) => (
                <span
                  key={pill}
                  className="text-[10px] font-medium text-[#4A2E2B] bg-[#FFFDF6]/90 px-2.5 py-0.5 rounded-md border border-[#4A2E2B]/15"
                >
                  #{pill}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* BOTTOM ROW: Compact Spotify Lab Soundtrack Strip */}
        <div className="relative bg-[#A2DD97]/20 backdrop-blur-[2px] border-2 border-[#6DBE5A]/35 rounded-3xl p-5 sm:p-6 shadow-sm">
          {/* Left Red Notebook Margin Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-7 w-[1px] bg-[#C23B58]/30 pointer-events-none" />

          <div className="pl-4 sm:pl-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 md:max-w-xs">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono font-bold text-[#C23B58] uppercase tracking-wider">
                  03 // LAB SOUNDTRACK
                </span>
                <span className="text-[10px] font-mono text-[#4A2E2B]/60">• ON REPEAT</span>
              </div>
              <h3 className="font-extrabold text-[#4A2E2B] text-base">
                Currently Listening
              </h3>
              <p className="text-xs text-[#4A2E2B]/80 leading-relaxed">
                On heavy rotation while working through paper proofs and training runs.
              </p>
              <a
                href={spotifyTrackUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 text-[11px] font-bold text-[#1DB954] hover:underline pt-1"
              >
                <span>Open in Spotify</span>
                <span>↗</span>
              </a>
            </div>

            {/* Spotify Embed Player */}
            <div className="w-full md:flex-1 max-w-xl">
              <iframe
                src={spotifyEmbedUrl}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-2xl shadow-xs border border-[#1DB954]/25"
                title="Spotify Audio Player"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}