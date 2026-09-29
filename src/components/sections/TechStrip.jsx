import React from 'react';
import {
  Database,
  Server,
  Cpu,
  Layers,
  Zap,
  Boxes,
  Code2,
  Terminal,
  Workflow,
  Palette,
  Box,
  GitBranch,
} from 'lucide-react';
import SectionTab from '../common/SectionTab';
import { techSummaryCell, techStack } from '../../data/content';

const iconMap = {
  Database: Database,
  Server: Server,
  Cpu: Cpu,
  Layers: Layers,
  Zap: Zap,
  Boxes: Boxes,
  Code2: Code2,
  Terminal: Terminal,
  Workflow: Workflow,
  Palette: Palette,
  Container: Box,
  GitBranch: GitBranch,
};

export default function TechStrip() {
  return (
    <section id="tech" className="relative bg-[#0a0a0a] border-t border-neutral-800/80 overflow-hidden">
      {/* Horizontal Strip Container */}
      <div className="w-full overflow-x-auto scrollbar-thin">
        <div className="flex min-w-max border-b border-neutral-800/80">
          {/* First Cell: Saturated RED Card */}
          <div className="w-72 sm:w-80 md:w-96 shrink-0 p-6 sm:p-8 bg-[#d90f1e] text-white red-card-noise flex flex-col justify-between border-r border-red-700/60 select-none shadow-[inset_0_0_80px_rgba(0,0,0,0.25)]">
            <div>
              <div className="text-xs font-mono tracking-widest uppercase text-white/90 mb-2">
                CORE METRICS // PRODUCTION
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight text-white font-sans">
                {techSummaryCell.title}
                <br />
                {techSummaryCell.subtitle}
              </h3>
            </div>
            <p className="text-xs font-sans uppercase font-semibold tracking-wider text-white/90 mt-6 leading-relaxed">
              {techSummaryCell.description}
            </p>
          </div>

          {/* Tech Stack Cells */}
          <div className="flex items-stretch">
            {techStack.map((tech, idx) => {
              const Icon = iconMap[tech.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="w-48 sm:w-56 p-6 sm:p-7 flex flex-col justify-between border-r border-neutral-800/80 bg-[#0c0c0c] hover:bg-[#141414] transition-colors group select-none shrink-0"
                >
                  <div className="flex items-center justify-between text-neutral-400 group-hover:text-white transition-colors">
                    <span className="text-xs font-mono tracking-widest uppercase">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-[#d90f1e] transition-colors" />
                  </div>

                  <div className="mt-8">
                    <div className="text-xs font-mono tracking-wider text-neutral-400 uppercase truncate">
                      {tech.category}
                    </div>
                    <div className="text-base sm:text-lg font-black uppercase tracking-tight text-white mt-1 group-hover:text-neutral-100 font-sans">
                      {tech.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Section Tab Bar below Tech Strip */}
      <SectionTab
        activeLabel="FEATURED WORKS // 04"
        secondaryLabels={['GITRAG', 'PMSSS', 'ALGOARENA', 'THREADLY', 'AUTH SYSTEM']}
        playheadPosition="50%"
        rightIndicator="5 CORE PROJECTS"
      />
    </section>
  );
}
