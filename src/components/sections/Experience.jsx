import React from 'react';
import SectionTab from '../common/SectionTab';
import { experienceEducation } from '../../data/content';

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#0a0a0a] pt-16 pb-0 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <span className="text-[#d90f1e] font-bold">06 //</span>
          <span>TIMELINE & PEDIGREE</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-sans">
            EXPERIENCE & EDUCATION
          </h2>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            ACADEMIC BACKGROUND // COMPETITIONS // INDUSTRY CREDENTIALS
          </p>
        </div>
      </div>

      {/* Bordered Timeline Grid Rows */}
      <div className="max-w-[1440px] mx-auto border-t border-neutral-800/80 divide-y divide-neutral-800/80">
        {experienceEducation.map((item, idx) => (
          <div
            key={idx}
            className="group p-6 sm:p-8 md:p-10 bg-[#0a0a0a] hover:bg-[#0e0e0e] transition-colors grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
          >
            {/* Column 1: Time Period & Badge */}
            <div className="md:col-span-3 space-y-2">
              <span className="inline-block text-xs font-mono px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-300 font-semibold uppercase">
                {item.type}
              </span>
              <div className="text-xs font-mono tracking-wider text-[#d90f1e] font-bold uppercase">
                {item.period}
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase">
                {item.location}
              </div>
            </div>

            {/* Column 2: Role / Degree & Organization */}
            <div className="md:col-span-4 space-y-1">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-sans group-hover:text-neutral-100">
                {item.title}
              </h3>
              <p className="text-sm font-sans font-medium text-neutral-400">
                {item.organization}
              </p>
              {item.grade && (
                <div className="pt-2 text-xs font-mono text-emerald-400 font-semibold">
                  STATUS / SCORE: {item.grade}
                </div>
              )}
            </div>

            {/* Column 3: Bullet points */}
            <div className="md:col-span-5 space-y-2.5">
              {item.bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#d90f1e] shrink-0 mt-2" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Section Tab Bar below Experience */}
      <SectionTab
        activeLabel="CONNECT // 07"
        secondaryLabels={['OPEN TO ROLES', 'GET IN TOUCH']}
        playheadPosition="92%"
        rightIndicator="AVAILABLE"
      />
    </section>
  );
}
