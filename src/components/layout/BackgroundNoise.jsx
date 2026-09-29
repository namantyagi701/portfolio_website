import React from 'react';

export default function BackgroundNoise() {
  return (
    <>
      {/* SVG Film Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Subtle Ambient Red Glows (Pure CSS, Behind Content) */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d90f1e]/[0.035] blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-0 right-0 w-[500px] h-[400px] bg-[#d90f1e]/[0.04] blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
    </>
  );
}
