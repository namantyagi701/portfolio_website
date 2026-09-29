import React from 'react';
import { motion } from 'framer-motion';
import { User, FileText, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import SectionTab from '../common/SectionTab';
import { personalInfo } from '../../data/content';

export default function About() {
  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: custom * 0.15,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section id="about" className="relative bg-[#0a0a0a] pt-16 pb-0 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-12">
        {/* Section Monospace Header */}
        <div className="flex items-center gap-2 mb-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <span className="text-[#d90f1e] font-bold">02 //</span>
          <span>STATEMENT OF PURPOSE</span>
        </div>

        {/* Large Statement Headline with line reveals */}
        <div className="space-y-1 mb-12 sm:mb-16">
          <div className="overflow-hidden">
            <motion.h2
              custom={0}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="text-[8vw] sm:text-[6.5vw] md:text-[5.2vw] font-black uppercase tracking-tighter leading-[0.9] text-white"
            >
              ENGINEERING SOFTWARE
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              custom={1}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="text-[8vw] sm:text-[6.5vw] md:text-[5.2vw] font-black uppercase tracking-tighter leading-[0.9] text-[#d90f1e]"
            >
              THAT ENDURES HIGH SCALE
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              custom={2}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="text-[8vw] sm:text-[6.5vw] md:text-[5.2vw] font-black uppercase tracking-tighter leading-[0.9] text-neutral-400"
            >
              WITH CLEAN ARCHITECTURE.
            </motion.h2>
          </div>
        </div>

        {/* Bio Breakdown Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-neutral-800/80 items-start">
          <div className="md:col-span-8 space-y-4">
            <p className="text-xs sm:text-sm font-sans uppercase font-medium tracking-wider text-neutral-300 leading-relaxed max-w-2xl">
              I AM A COMPUTER SCIENCE UNDERGRADUATE AT KIET GROUP OF INSTITUTIONS (DELHI NCR),
              SPECIALIZING IN FULL-STACK WEB DEVELOPMENT, AST CODE ANALYSIS, AND SCALABLE BACKEND
              SYSTEMS. FROM ARCHITECTING RECURSIVE DEPENDENCY GRAPH TRAVERSALS IN POSTGRESQL TO
              BUILDING REAL-TIME COLLABORATIVE INTERVIEW PLATFORMS WITH WEBRTC AND SECURE RBAC, I
              FOCUS ON PRECISION, HIGH THROUGHPUT, AND RESILIENT CODE.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-400 pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#d90f1e]" />
                B.TECH CS (75.13%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#d90f1e]" />
                500+ ALGORITHMIC PROBLEMS
              </span>
              {/* <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#d90f1e]" />
                SIH WINNER (DEPT. 120+ TEAMS)
              </span> */}
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between h-full gap-4">
            <Button
              variant="primary"
              icon={FileText}
              href={personalInfo.resumePdf}
              download
            >
              MORE ABOUT ME
            </Button>
            <span className="text-[10px] font-mono text-neutral-500 uppercase">
              DOWNLOAD VERIFIED CV [PDF]
            </span>
          </div>
        </div>
      </div>

      {/* Timeline Section Tab Bar below About */}
      <SectionTab
        activeLabel="TECH FOUNDATION // 03"
        secondaryLabels={['LANGUAGES & FRAMEWORKS', 'DATABASES & QUEUES']}
        playheadPosition="35%"
        rightIndicator="CORE STACK"
      />
    </section>
  );
}
