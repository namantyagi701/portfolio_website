import React from 'react';
import { Trophy } from 'lucide-react';
import AnimatedCounter from '../common/AnimatedCounter';
import SectionTab from '../common/SectionTab';
import { stats } from '../../data/content';

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[#0a0a0a] pt-16 pb-0 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <span className="text-[#d90f1e] font-bold">05 //</span>
          <span>EMPIRICAL BENCHMARKS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-sans">
            VERIFIED NUMBERS
          </h2>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            AUTHENTIC METRICS DIRECT FROM COMPETITIVE PLATFORMS & ACADEMICS
          </p>
        </div>
      </div>

      {/* Main Grid: Left Red Highlight Card + Right Bordered Stats Rows */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-t border-neutral-800/80">
        {/* Left Featured Saturated Red Card (Video Match) */}
        <div className="lg:col-span-4 bg-[#d90f1e] text-white red-card-noise p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-red-700/60 shadow-[inset_0_0_80px_rgba(0,0,0,0.3)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/80 mb-6">
              <Trophy className="w-4 h-4 text-white" />
              <span>PEAK RATING & ACCURACY</span>
            </div>

            <div className="text-6xl sm:text-7xl font-black font-sans tracking-tighter leading-none text-white">
              1654
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/90 mt-2 font-bold">
              LEETCODE CONTEST MAX RATING
            </p>
          </div>

          <div className="mt-12 space-y-4 pt-6 border-t border-white/20 text-xs font-mono">
            <div className="flex items-center justify-between">
              <span className="text-white/80">DATA STRUCTURES & ALGORITHMS</span>
              <span className="font-bold">500+ SOLVED</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80">SMART INDIA HACKATHON</span>
              <span className="font-bold">DEPT. WINNER</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80">CORE STACK FOCUS</span>
              <span className="font-bold">C++ / JS / PGVECTOR</span>
            </div>
          </div>
        </div>

        {/* Right Stats Breakdown Grid */}
        <div className="lg:col-span-8 flex flex-col divide-y divide-neutral-800/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 md:p-10 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Big Animated Counter */}
              <div className="md:col-span-5 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl md:text-7xl font-black font-sans tracking-tighter text-white">
                  <AnimatedCounter
                    target={stat.rawNumber}
                    suffix={stat.suffix}
                    decimals={stat.rawNumber % 1 !== 0 ? 2 : 0}
                  />
                </span>
              </div>

              {/* Description & platform badge */}
              <div className="md:col-span-7 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-[#d90f1e] font-semibold uppercase">
                    {stat.indicator}
                  </span>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white font-sans">
                    {stat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section Tab Bar below Stats */}
      <SectionTab
        activeLabel="TRACK RECORD // 06"
        secondaryLabels={['ACADEMICS & DEGREES', 'AWARDS & HONORS']}
        playheadPosition="80%"
        rightIndicator="EXPERIENCE"
      />
    </section>
  );
}
