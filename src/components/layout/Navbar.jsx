import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, X, ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../common/Icons';
import { personalInfo, footerLinks } from '../../data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Center Navbar */}
      <header className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 bg-[#0e0e0e]/90 backdrop-blur-md border border-neutral-800 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 ${
            scrolled ? 'border-neutral-700/80 bg-[#0a0a0a]/95 py-2' : ''
          }`}
          style={{ width: 'min(760px, 92vw)' }}
        >
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-white tracking-tighter font-extrabold uppercase text-sm select-none"
          >
            <span className="w-2.5 h-2.5 bg-[#d90f1e] group-hover:scale-110 transition-transform" />
            <span className="font-sans tracking-tight">{personalInfo.name}</span>
            <span className="text-xs text-neutral-400 font-mono tracking-widest hidden sm:inline">
              ® DEV
            </span>
          </a>

          {/* Right Menu Trigger */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE
            </span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#171717] hover:bg-neutral-800 border border-neutral-700/80 text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer active:scale-95"
              aria-label="Toggle navigation menu"
            >
              <span>{isOpen ? 'Close' : 'Menu'}</span>
              {isOpen ? (
                <X className="w-3.5 h-3.5 text-[#d90f1e]" />
              ) : (
                <LayoutGrid className="w-3.5 h-3.5 text-[#d90f1e]" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 md:p-16 border-b border-neutral-800"
          >
            {/* Top Bar Spacer */}
            <div className="h-16" />

            {/* Menu Links Grid */}
            <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 my-auto">
              <div className="md:col-span-8 space-y-3">
                <p className="text-xs font-mono tracking-widest text-[#d90f1e] uppercase">
                  NAVIGATION INDEX // TIMELINE
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {footerLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between p-4 bg-[#121212] border border-neutral-800 hover:border-[#d90f1e] hover:bg-neutral-900 transition-all text-sm font-sans uppercase font-bold tracking-tight text-neutral-200 hover:text-white"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-neutral-400 group-hover:text-[#d90f1e]">
                          0{idx + 1}
                        </span>
                        <span>{link.label.split(' // ')[0]}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#d90f1e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact info column */}
              <div className="md:col-span-4 flex flex-col justify-between p-6 bg-[#121212] border border-neutral-800 space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-[#d90f1e] uppercase tracking-wider mb-2">
                    DIRECT CONTACT
                  </h4>
                  <p className="text-sm font-mono text-neutral-300 break-all">
                    {personalInfo.email}
                  </p>
                  <p className="text-sm font-mono text-neutral-400 mt-1">
                    {personalInfo.phone}
                  </p>
                  <p className="text-xs font-mono text-neutral-400 mt-2">
                    {personalInfo.location}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-neutral-800">
                  <a
                    href={personalInfo.resumePdf}
                    download
                    className="flex items-center justify-between p-3 bg-[#d90f1e] text-white text-xs font-mono uppercase font-bold tracking-wider hover:bg-[#b50b17] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5" />
                      DOWNLOAD RESUME
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <div className="flex gap-2 pt-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 flex-1 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 flex items-center justify-center text-neutral-300 hover:text-white"
                      title="GitHub"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 flex-1 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 flex items-center justify-center text-neutral-300 hover:text-white"
                      title="LinkedIn"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={personalInfo.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 flex-1 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 flex items-center justify-center text-neutral-300 hover:text-white"
                      title="LeetCode"
                      aria-label="LeetCode Profile"
                    >
                      <LeetCodeIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-neutral-800/80 pt-4 max-w-5xl mx-auto w-full">
              <span>EST. 2024 // DELHI NCR</span>
              <span className="text-[#d90f1e]">NAMAN TYAGI // PORTFOLIO</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
