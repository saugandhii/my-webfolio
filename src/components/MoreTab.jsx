import React, { useState, useRef, useEffect } from 'react';

export default function MoreTab() {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [pinnedCardIndex, setPinnedCardIndex] = useState(null);

  // Container & Folder Dragging Refs
  const containerRef = useRef(null);
  const folderRef = useRef(null);

  // Dragging State for Manila Folder
  const [folderPos, setFolderPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const initialFolderPos = useRef({ x: 0, y: 0 });

  // Spotify Track Links
  const spotifyTrackUrl = "https://open.spotify.com/track/1q82k8tuu1t6t8H8zHMqWs";
  const spotifyEmbedUrl = "https://open.spotify.com/embed/track/1q82k8tuu1t6t8H8zHMqWs?utm_source=generator&theme=0";

  // Document Cards Data
  const cards = [
    {
      id: 'articles',
      tag: '01 // MEDIUM ARTICLES',
      title: 'Technical Writing & Essays',
      subtitle: '3 Articles Published',
      pills: ['LLMs', 'Transformers', 'Computer Vision'],
      articles: [
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
        }
      ]
    },
    {
      id: 'leadership',
      tag: '02 // COMMUNITY',
      title: 'Student Leadership & Mentorship',
      subtitle: 'AI Student Association',
      pills: ['Leadership', 'Mentorship', 'Events'],
      points: [
        'Organized 12+ technical workshops and hackathons reaching over 200+ engineering students.',
        'Mentored 40+ junior peers in core data structures, algorithms, PyTorch, and ML workflows.',
        'Fostered industry partnerships to host guest speaker sessions on machine learning careers.'
      ]
    },
    {
      id: 'learning',
      tag: '03 // GROWTH',
      title: 'Active Pursuits & Technical Growth',
      subtitle: 'Bavaria & Beyond',
      pills: ['CUDA', 'C++', 'German A2/B1'],
      points: [
        'Writing custom C++ / CUDA operators to optimize memory transfers in PyTorch tensor pipelines.',
        'Practicing conversational and technical German (A2/B1 level) for integration at FAU Erlangen-Nürnberg.',
        'Reading recent academic papers in multimodal learning and vision-language transformers.'
      ]
    },
    {
      id: 'spotify',
      tag: '04 // AUDIO SOUNDTRACK',
      title: 'Currently On Repeat',
      subtitle: 'Spotify Audio Preview',
      pills: ['Acoustic', 'Focus Track'],
      points: ['On heavy rotation while analyzing paper proofs & writing ML pipelines.']
    }
  ];

  // Dragging Handlers (Mouse & Touch) with Bounds Clamping
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    dragStartPos.current = { x: clientX, y: clientY };
    initialFolderPos.current = { ...folderPos };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - dragStartPos.current.x;
      const deltaY = clientY - dragStartPos.current.y;

      let newX = initialFolderPos.current.x + deltaX;
      let newY = initialFolderPos.current.y + deltaY;

      // Bound clamping relative to parent container
      if (containerRef.current && folderRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const folderRect = folderRef.current.getBoundingClientRect();

        // Calculate max allowed movement in each direction
        const maxDeltaX = (containerRect.width - folderRect.width) / 2 - 10;
        const maxDeltaY = 180; // Vertically bound drag to avoid breaking section height

        newX = Math.max(-maxDeltaX, Math.min(maxDeltaX, newX));
        newY = Math.max(-maxDeltaY, Math.min(maxDeltaY, newY));
      }

      setFolderPos({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleFolderClick = () => {
    const movedX = Math.abs(folderPos.x - initialFolderPos.current.x);
    const movedY = Math.abs(folderPos.y - initialFolderPos.current.y);
    if (movedX > 5 || movedY > 5) return;

    if (isFolderOpen) {
      setIsFolderOpen(false);
      setPinnedCardIndex(null);
    } else {
      setIsFolderOpen(true);
    }
  };

  return (
    <section 
      id="more" 
      ref={containerRef}
      className="bg-dotted-page min-h-screen py-10 px-4 sm:px-8 space-y-8 sm:space-y-10 animate-fade-in relative overflow-visible rounded-3xl border border-[#4A2E2B]/10 my-4 select-none"
    >
      {/* CSS for Page-Wide Dotted Canvas Grid and Crease FX */}
      <style>{`
        .bg-dotted-page {
          background-color: #FFFDF6;
          background-image: radial-gradient(#4A2E2B20 1.5px, transparent 1.5px);
          background-size: 24px 24px;
        }
        .paper-crease {
          background: linear-gradient(180deg, rgba(74,46,43,0.06) 0%, rgba(255,255,255,0) 50%, rgba(74,46,43,0.08) 100%);
        }
      `}</style>

      {/* Headline */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E2B] leading-tight tracking-tight">
          Interactive Manila File Deck
        </h2>
        <p className="text-xs sm:text-sm text-[#4A2E2B]/75">
          {isFolderOpen
            ? 'Tap any document card to unfold, or click & drag the Manila folder across the desk.'
            : 'Click or drag the Manila folder to open your file deck.'}
        </p>
      </div>

      {/* 3D MANILA FOLDER CONTAINER */}
      <div className="relative max-w-4xl mx-auto min-h-[500px] sm:min-h-[580px] pt-4 sm:pt-8 flex flex-col items-center justify-end overflow-visible">
        
        {/* CARDS CONTAINER: Moves dynamically along with folder base */}
        <div 
          className={`relative w-full max-w-xl flex flex-col sm:flex-row items-center sm:items-end justify-center z-10 space-y-4 sm:space-y-0 transition-transform duration-75 ${
            isFolderOpen ? 'h-auto sm:h-[440px] mb-6 sm:mb-0' : 'h-0 sm:h-[440px]'
          }`}
          style={{
            transform: `translate(${folderPos.x}px, ${folderPos.y}px)`
          }}
        >
          {cards.map((card, idx) => {
            const isUnfolded = pinnedCardIndex === idx;
            const isSpotify = card.id === 'spotify';
            const totalCards = cards.length;
            const angle = (idx - (totalCards - 1) / 2) * 8;
            const xOffset = (idx - (totalCards - 1) / 2) * 110;

            return (
              <div
                key={card.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setPinnedCardIndex(isUnfolded ? null : idx);
                }}
                className={`bg-[#FFFDF6] border-2 rounded-3xl p-4 sm:p-5 shadow-xl transition-all duration-500 ease-out cursor-pointer hover:border-[#C23B58] overflow-hidden ${
                  isFolderOpen
                    ? isUnfolded
                      ? 'w-full sm:w-[400px] max-h-[520px] border-[#C23B58] z-50 scale-100 sm:scale-105 sm:-translate-y-16 shadow-2xl ring-4 ring-[#C23B58]/10 opacity-100 overflow-y-auto sm:absolute'
                      : 'w-full sm:w-[300px] h-auto sm:h-[320px] border-[#4A2E2B]/15 hover:-translate-y-2 sm:hover:-translate-y-4 opacity-100 sm:absolute'
                    : 'w-0 h-0 border-transparent opacity-0 pointer-events-none hidden sm:block sm:absolute'
                }`}
                style={{
                  transform: typeof window !== 'undefined' && window.innerWidth > 640
                    ? (!isFolderOpen
                        ? 'translateY(120px) scale(0.6)'
                        : isUnfolded
                        ? 'translateX(0px) rotate(0deg) translateY(-60px)'
                        : `translateX(${xOffset}px) rotate(${angle}deg) translateY(0px) scale(0.95)`)
                    : 'none',
                  zIndex: isUnfolded ? 50 : 10 + idx
                }}
              >
                {/* Paper Crease Effect for Folded State */}
                {!isUnfolded && !isSpotify && (
                  <div className="absolute inset-0 paper-crease pointer-events-none border-b border-[#4A2E2B]/10" />
                )}

                {/* Left Red Margin Line */}
                <div className="absolute top-0 bottom-0 left-5 sm:left-6 w-[1px] bg-[#C23B58]/30 pointer-events-none" />

                <div className="pl-3 sm:pl-4 space-y-2.5 sm:space-y-3 relative z-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-[#4A2E2B]/15 pb-1.5">
                    <span className="text-[10px] font-mono font-bold text-[#C23B58] uppercase tracking-wider">{card.tag}</span>
                    <span className="text-[10px] font-mono text-[#4A2E2B]/50">
                      {isUnfolded && !isSpotify ? 'UNFOLDED' : `PAGE_0${idx + 1}`}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-extrabold text-[#4A2E2B] text-sm sm:text-base leading-snug group-hover:text-[#C23B58] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#4A2E2B]/65 mt-0.5">{card.subtitle}</p>
                  </div>

                  {/* MULTIPLE ARTICLES LIST */}
                  {card.articles && (
                    <div className="space-y-2 text-xs text-[#4A2E2B]/90 leading-relaxed pt-1">
                      {(isUnfolded ? card.articles : card.articles.slice(0, 1)).map((art, aIdx) => (
                        <div key={aIdx} className={aIdx > 0 ? 'pt-2 border-t border-dashed border-[#4A2E2B]/20' : ''}>
                          <div className="font-bold text-[#4A2E2B] flex items-center justify-between">
                            <span>• {art.title}</span>
                            {isUnfolded && (
                              <a
                                href={art.link}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] font-bold text-[#C23B58] hover:underline ml-2"
                              >
                                Read ↗
                              </a>
                            )}
                          </div>
                          <p className="text-[11px] text-[#4A2E2B]/75 mt-0.5 pl-3">{art.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* BULLET POINTS */}
                  {card.points && !isSpotify && (
                    <div className="space-y-1.5 sm:space-y-2 text-xs text-[#4A2E2B]/90 leading-relaxed pt-1">
                      {(isUnfolded ? card.points : card.points.slice(0, 1)).map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start space-x-2">
                          <span className="text-[#C23B58] font-bold">•</span>
                          <p>{pt}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {card.pills.map((pill, pIdx) => (
                      <span key={pIdx} className="text-[9px] sm:text-[10px] font-medium text-[#4A2E2B] bg-[#FFFDF6] px-2 py-0.5 rounded-md border border-[#4A2E2B]/20 shadow-xs">
                        #{pill}
                      </span>
                    ))}
                  </div>

                  {/* Spotify Preview Player */}
                  {isSpotify && (
                    <div className="pt-2 border-t border-[#4A2E2B]/15 flex flex-col items-center space-y-2">
                      <div className="w-full" onClick={(e) => e.stopPropagation()}>
                        <iframe
                          src={spotifyEmbedUrl}
                          width="100%"
                          height="80"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="rounded-xl shadow-xs border border-[#1DB954]/20"
                          title="Spotify Audio Player"
                        />
                      </div>

                      <a
                        href={spotifyTrackUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[11px] font-bold text-[#1DB954] hover:underline flex items-center space-x-1"
                      >
                        <span>Open track in Spotify</span>
                        <span>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* DRAGGABLE AUTHENTIC MANILA FOLDER BASE */}
        <div
          ref={folderRef}
          className={`relative w-full max-w-[340px] sm:max-w-[450px] h-[140px] sm:h-[160px] cursor-grab active:cursor-grabbing z-30 transition-transform duration-75 ${
            isDragging ? 'scale-105 shadow-2xl' : ''
          }`}
          style={{
            transform: `translate(${folderPos.x}px, ${folderPos.y}px)`
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onClick={handleFolderClick}
        >
          <div className="w-full h-full bg-[#E8C89A] border-2 border-[#D4A972] rounded-3xl shadow-xl relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
            <div className="w-full h-full bg-[#D4A972]/30 border-b border-[#D4A972]/50 shadow-inner z-10" />
            <div className="absolute top-[-3px] left-6 sm:left-8 w-24 sm:w-28 h-5 sm:h-6 bg-[#E8C89A] border-t-2 border-x-2 border-[#D4A972] rounded-t-xl" />
            
            {/* Folder Toggle & Drag Hint Badge */}
            <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 text-center z-30 px-2">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#4A2E2B] uppercase tracking-wider sm:tracking-widest bg-[#FFFDF6] px-3 sm:px-4 py-1.5 rounded-full border border-[#D4A972] shadow-xs hover:border-[#C23B58] transition-colors inline-block">
                {isFolderOpen ? '📂 Open Deck // Drag or Click to Close' : '📁 Closed Folder // Drag or Click to Open'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}