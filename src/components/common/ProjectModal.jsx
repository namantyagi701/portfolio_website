import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0d0d] border border-neutral-700 shadow-2xl z-10 flex flex-col"
          >
            {/* Modal Header Bar with Timecode & Close */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#121212]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#d90f1e]" />
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
                  {project.tag} // {project.year}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-800 text-neutral-400">
                  {project.status}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-transparent hover:border-neutral-700"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <p className="text-xs font-mono tracking-widest text-[#d90f1e] uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                {project.fullDescription || project.shortDescription}
              </p>

              {/* Highlights List */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#d90f1e]" />
                    KEY ARCHITECTURAL HIGHLIGHTS
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {project.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-[#141414] border border-neutral-800 text-xs sm:text-sm text-neutral-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#d90f1e] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack Tags */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-neutral-900 border border-neutral-700/80 text-xs font-mono text-neutral-300 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-800">
                {project.liveUrl && (
                  <Button
                    variant="primary"
                    icon={ExternalLink}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch Live App
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    variant="secondary"
                    icon={GithubIcon}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Source Code
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
