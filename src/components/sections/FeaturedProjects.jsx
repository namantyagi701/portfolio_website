import React, { useState } from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import ProjectThumbnail from '../common/ProjectThumbnail';
import ProjectModal from '../common/ProjectModal';
import SectionTab from '../common/SectionTab';
import { projects } from '../../data/content';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative bg-[#0a0a0a] pt-16 pb-0 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <span className="text-[#d90f1e] font-bold">04 //</span>
          <span>CURATED REPERTOIRE</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-sans">
            A FEW PROJECTS I'M PROUD OF
          </h2>
          <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            5 PRODUCTION-GRADE SYSTEMS // ORDERED STRONGEST FIRST
          </p>
        </div>
      </div>

      {/* Grid of Large Project Cards */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 border-t border-neutral-800/80">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={`group relative flex flex-col justify-between bg-[#0a0a0a] border-b border-neutral-800/80 ${
              idx % 2 === 0 ? 'md:border-r border-neutral-800/80' : ''
            }`}
          >
            {/* Project Card Media Frame */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              aria-label={`View details for project ${project.title}`}
              className="relative w-full overflow-hidden cursor-pointer bg-[#0e0e11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d90f1e]"
            >
              {/* Scale on hover */}
              <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                <ProjectThumbnail id={project.id} title={project.title} />
              </div>

              {/* Hover Overlay with Red "+ VIEW PROJECT" Pill */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d90f1e] text-white text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_25px_rgba(217,15,30,0.6)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  VIEW PROJECT
                </span>
              </div>
            </div>

            {/* Project Details Footer */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6 bg-[#0a0a0a]">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                  <span>©{project.year}</span>
                  <span className="text-[#d90f1e]">{project.tag}</span>
                </div>

                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white hover:text-[#d90f1e] transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
                  {project.category}
                </p>

                <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Tech Stack Pills & Direct Links */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-1.5 py-0.5 text-xs font-mono text-neutral-400">
                      +{project.stack.length - 4} MORE
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-neutral-900 hover:bg-[#d90f1e] text-neutral-300 hover:text-white border border-neutral-800 transition-colors focus-visible:ring-1 focus-visible:ring-red-500"
                      aria-label={`Open live demo of ${project.title}`}
                      title="Open Live App"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
                      title="View GitHub Repository"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      {/* Timeline Section Tab Bar below Projects */}
      <SectionTab
        activeLabel="SYSTEM METRICS // 05"
        secondaryLabels={['ALGORITHMIC RATINGS', 'CONTEST HISTORY']}
        playheadPosition="65%"
        rightIndicator="BENCHMARKS"
      />
    </section>
  );
}
