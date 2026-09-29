import React from 'react';
import { marqueeItems } from '../../data/content';

export default function MarqueeCTA() {
  // Repeating text items for seamless infinite scroll
  const marqueeList = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <aside aria-label="Work with me banner" className="relative w-full overflow-hidden bg-[#d90f1e] text-white red-card-noise select-none border-t border-b border-black group">
      {/* Top Film Sprocket Holes */}
      <div className="sprocket-border-top opacity-60" />

      {/* Scrolling Text Track */}
      <div className="py-4 sm:py-6 overflow-hidden flex">
        <div className="flex shrink-0 items-center gap-8 animate-[marquee_24s_linear_infinite] group-hover:[animation-play-state:paused] will-change-transform">
          {marqueeList.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-sans">
                {item}
              </span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black/60 shrink-0" />
            </div>
          ))}
        </div>

        {/* Duplicate Track for zero-gap loop */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-8 animate-[marquee_24s_linear_infinite] group-hover:[animation-play-state:paused] will-change-transform"
        >
          {marqueeList.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-8 shrink-0">
              <span className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-sans">
                {item}
              </span>
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black/60 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Film Sprocket Holes */}
      <div className="sprocket-border-top opacity-60 transform rotate-180" />
    </aside>
  );
}
