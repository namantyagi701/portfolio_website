import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import Button from './Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      lastActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      // Auto focus close button after mounting
      const timer = setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
      if (lastActiveElement.current && typeof lastActiveElement.current.focus === 'function') {
        lastActiveElement.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalRef.current) return;
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
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
                <span className="text-xs font-mono px-2 py-0.5 bg-neutral-800 text-neutral-300">
                  {project.status}
                </span>
              </div>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-1 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-transparent hover:border-neutral-700 focus-visible:ring-2 focus-visible:ring-[#d90f1e]"
                aria-label="Close project modal"
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
                <h3 id="project-modal-title" className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
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
