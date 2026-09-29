import React from 'react';
import { ArrowUpRight, Mail, Phone, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../common/Icons';
import { personalInfo, footerLinks, socialLinks } from '../../data/content';

const socialIconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Code2: LeetCodeIcon,
  Mail: Mail,
  Phone: Phone,
};

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1f0306] via-[#120204] to-[#0a0a0a] text-white overflow-hidden border-t border-red-900/40">
      {/* Top Main Grid Layout */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-800/80">
        {/* Left Column: Bordered Navigation Link Rows with Arrow Icons */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-neutral-800/80 divide-y divide-neutral-800/80">
          <div className="p-6 bg-black/40 text-xs font-mono tracking-widest text-[#d90f1e] uppercase">
            DIRECTORY // NAVIGATION
          </div>
          {footerLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              download={link.isDownload}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 hover:bg-neutral-900/70 transition-all font-sans text-sm sm:text-base font-bold uppercase tracking-tight text-neutral-300 hover:text-white"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-neutral-400 group-hover:text-[#d90f1e] transition-colors">
                  0{idx + 1}
                </span>
                <span>{link.label}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#d90f1e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          ))}
        </div>

        {/* Right Column: Social Icons Grid + Contact Details */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          {/* Social Icons Bordered Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 border-b border-neutral-800/80 divide-x divide-neutral-800/80 bg-black/30">
            {socialLinks.map((social, idx) => {
              const Icon = socialIconMap[social.icon] || ExternalLink;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex flex-col items-center justify-center p-6 sm:p-8 hover:bg-neutral-900/80 text-neutral-400 hover:text-white transition-all group"
                  title={social.name}
                >
                  <Icon className="w-5 h-5 group-hover:text-[#d90f1e] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono mt-2 tracking-widest text-neutral-400 group-hover:text-white uppercase">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Contact Details Direct Row (From Resume) */}
          <div className="p-6 sm:p-8 space-y-4 bg-black/20">
            <div className="text-xs font-mono text-[#d90f1e] uppercase tracking-wider">
              OFFICIAL CORRESPONDENCE
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <span className="text-neutral-400 text-xs block">DIRECT INBOX</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white hover:text-[#d90f1e] transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              {personalInfo.phone && (
                <div>
                  <span className="text-neutral-400 text-xs block">VOICE / TELEGRAM</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-white hover:text-[#d90f1e] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              )}
            </div>

            <div className="pt-2 text-xs font-mono text-neutral-400">
              <span className="text-neutral-400 block">BASE COORDINATES</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Wordmark Across Bottom (Full width, zero clipping on any screen) */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none px-2 sm:px-6 pt-6 pb-1 bg-transparent flex justify-center">
        <h2 className="sr-only">{personalInfo.name}</h2>
        <svg
          viewBox="0 0 1000 125"
          className="w-full max-w-[1440px] h-auto block"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <text
            x="50%"
            y="112"
            textAnchor="middle"
            fill="rgba(245, 245, 245, 0.92)"
            fontSize="132"
            fontWeight="900"
            letterSpacing="-0.035em"
            fontFamily="'Inter Tight', -apple-system, sans-serif"
          >
            {personalInfo.name}
          </text>
        </svg>
      </div>

      {/* Very Bottom Metadata Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-400 uppercase tracking-widest">
        <div>©{CURRENT_YEAR} {personalInfo.name} • ALL RIGHTS RESERVED</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d90f1e]" />
          <span>REACT + VITE + TAILWIND + LENIS</span>
        </div>
      </div>
    </footer>
  );
}
