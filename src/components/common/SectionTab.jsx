import React from 'react';

export default function SectionTab({
  activeLabel = 'OVERVIEW',
  secondaryLabels = [],
  playheadPosition = '25%',
  rightIndicator = 'NAMAN.DEV',
  className = '',
}) {
  return (
    <div className={`w-full border-t border-b border-neutral-800/80 bg-[#080808] select-none ${className}`}>
      {/* Upper Timeline Tick Ruler */}
      <div className="relative w-full h-2.5 border-b border-neutral-800/50 bg-[#0c0c0c] overflow-hidden">
        <div className="timeline-ruler opacity-40" />
        
        {/* Animated Red Playhead Needle */}
        <div
          className="absolute top-0 flex flex-col items-center -translate-x-1/2 pointer-events-none transition-all duration-700 ease-out z-10"
          style={{ left: playheadPosition }}
        >
          <div className="w-2 h-2 bg-[#d90f1e] shadow-[0_0_8px_#d90f1e]" />
          <div className="w-[1px] h-2 bg-[#d90f1e]/80" />
        </div>
      </div>

      {/* Segment Bar Cells */}
      <div className="grid grid-cols-2 sm:grid-cols-4 text-[10px] font-mono tracking-widest uppercase">
        {/* Active Section Label */}
        <div className="relative flex items-center gap-2 px-4 py-2 border-r border-neutral-800 bg-[#121212] text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d90f1e] animate-pulse" />
          <span className="font-semibold truncate">{activeLabel}</span>
        </div>

        {/* Secondary Category Labels */}
        {secondaryLabels.slice(0, 2).map((label, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-center px-4 py-2 border-r border-neutral-800/80 text-neutral-400 bg-[#090909] truncate ${
              idx > 0 ? 'hidden md:flex' : 'hidden sm:flex'
            }`}
          >
            <span>{label}</span>
          </div>
        ))}

        {/* Right Status Indicator */}
        <div className="flex items-center justify-end px-4 py-2 text-neutral-400 bg-[#070707] font-mono text-[9px] ml-auto col-start-2 sm:col-start-4">
          <span className="tracking-wider">{rightIndicator}</span>
        </div>
      </div>
    </div>
  );
}
