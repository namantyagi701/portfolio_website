import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Play, Sparkles, Terminal } from 'lucide-react';
import Button from '../common/Button';
import SectionTab from '../common/SectionTab';
import { personalInfo, heroCredibility } from '../../data/content';

export default function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[94vh] flex flex-col justify-between pt-24 pb-0 bg-[#0a0a0a] overflow-hidden">
      {/* Background Animated Gradient Mesh (No external video) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#d90f1e]/15 to-transparent blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-neutral-800/40 to-transparent blur-[100px]" />
      </div>

      {/* Main Hero Container */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-12 py-8 flex-1 flex flex-col justify-center">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6 text-xs font-mono uppercase tracking-widest text-neutral-400"
        >
          <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-[#d90f1e]" />
          <span>{personalInfo.shortRole}</span>
          <span className="text-neutral-500">// DELHI NCR</span>
        </motion.div>

        {/* Huge Bold Headline with Clean Negative Letter Spacing */}
        <div className="overflow-hidden relative z-10">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[6.8vw] font-black uppercase tracking-tight leading-[0.92] text-white max-w-6xl font-sans select-none"
          >
            <span className="block">I BUILD ROBUST WEB</span>
            <span className="block text-white">APPS & AI SYSTEMS</span>
          </motion.h1>
        </div>

        {/* Split Info & CTA Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-8 md:mt-12 pt-8 border-t border-neutral-800/80">
          {/* Left Credibility Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <div className="p-4 bg-[#111111] border border-neutral-800 relative group hover:border-neutral-700 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase text-neutral-400 mb-2">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <Code2 className="w-3.5 h-3.5 text-[#d90f1e]" />
                  LEETCODE & GFG
                </span>
                <span className="text-[#d90f1e] font-bold">1654 MAX</span>
              </div>
              <div className="text-3xl font-black font-sans text-white tracking-tight">
                {heroCredibility.metric}
              </div>
              <p className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 mt-1">
                {heroCredibility.label}
              </p>
              <div className="mt-3 pt-2 border-t border-neutral-800/80 flex items-center gap-1.5 text-[9px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{heroCredibility.badgeText}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Paragraph & Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <p className="text-xs sm:text-sm font-sans uppercase font-medium tracking-wider text-neutral-300 max-w-xl leading-relaxed">
              COMPUTER SCIENCE AT KIET GROUP OF INSTITUTIONS. ARCHITECTING FULL-STACK
              APPLICATIONS WITH REACT, NODE.JS, POSTGRESQL (PGVECTOR), AND AST-BASED CODE
              INTELLIGENCE DESIGNED FOR REAL-WORLD PERFORMANCE.
            </p>

            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="primary"
                icon={Play}
                href="#projects"
              >
                VIEW WORKS
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Small Metadata Row at the bottom of hero */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 mt-10 border-t border-neutral-800/80 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-neutral-600">[</span>
            <span className="text-neutral-300">{personalInfo.location}</span>
            <span className="text-neutral-600">]</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-600">[</span>
            <span className="text-neutral-300">{personalInfo.availability}</span>
            <span className="text-neutral-600">]</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-600">[</span>
            <span className="text-neutral-300">{personalInfo.estYear}</span>
            <span className="text-neutral-600">]</span>
          </div>

          <div className="flex items-center justify-end gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-[#d90f1e] animate-pulse" />
            <span className="tabular-nums font-semibold">{time || '05:58:01 PM'}</span>
          </div>
        </div>
      </div>

      {/* Timeline Section Tab Bar below Hero */}
      <SectionTab
        activeLabel="MEET NAMAN // 01"
        secondaryLabels={['FULL-STACK ARCHITECTURE', 'SYSTEM DESIGN']}
        playheadPosition="15%"
        rightIndicator="EST. 2024"
      />
    </section>
  );
}
