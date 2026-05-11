'use client';

import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: progress >= 100 ? 'none' : 'all',
      }}
      aria-label="Loading ManishFolio"
      role="status"
    >
      {/* Logo mark */}
      <div className="mb-8 relative">
        <div
          className="w-16 h-16 rounded-2xl border border-primary/30 flex items-center justify-center"
          style={{ background: 'rgba(124, 106, 255, 0.08)' }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M8 8 L16 16 L8 24"
              stroke="url(#grad1)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 8 L16 16 L24 24"
              stroke="url(#grad2)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="grad1" x1="8" y1="8" x2="16" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7C6AFF" />
                <stop offset="100%" stopColor="#00E5CC" />
              </linearGradient>
              <linearGradient id="grad2" x1="24" y1="8" x2="16" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7C6AFF" />
                <stop offset="100%" stopColor="#00E5CC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Spinning ring */}
        <div
          className="absolute inset-0 rounded-2xl border border-primary/20"
          style={{ animation: 'spinSlow 4s linear infinite' }}
        />
      </div>

      <p className="font-display text-2xl font-light tracking-widest text-foreground mb-8">
        ManishFolio
      </p>

      {/* Progress bar */}
      <div className="w-48 h-px bg-border overflow-hidden rounded-full">
        <div
          className="h-full loader-bar rounded-full"
          style={{ width: `${Math.min(progress, 100)}%`, transition: 'width 0.15s ease' }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-3 font-mono">
        {Math.min(Math.round(progress), 100)}%
      </p>
    </div>
  );
}