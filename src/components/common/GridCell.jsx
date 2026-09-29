import React from 'react';

export default function GridCell({
  children,
  className = '',
  borderTop = false,
  borderBottom = false,
  borderLeft = false,
  borderRight = false,
  accentRed = false,
  label = null,
  subLabel = null,
}) {
  const borders = [
    borderTop ? 'border-t border-neutral-800/80' : '',
    borderBottom ? 'border-b border-neutral-800/80' : '',
    borderLeft ? 'border-l border-neutral-800/80' : '',
    borderRight ? 'border-r border-neutral-800/80' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={`relative ${borders} ${
        accentRed
          ? 'bg-[#d90f1e] text-white red-card-noise shadow-[inset_0_0_80px_rgba(0,0,0,0.3)]'
          : 'bg-[#0a0a0a]'
      } ${className}`}
    >
      {(label || subLabel) && (
        <div className="absolute top-2 right-2 text-xs font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-2 pointer-events-none z-10">
          {label && <span>{label}</span>}
          {subLabel && <span className="text-neutral-400">[{subLabel}]</span>}
        </div>
      )}
      {children}
    </div>
  );
}
