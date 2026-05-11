'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/manishkumarth?tab=repositories',
    icon: 'CodeBracketIcon',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manish-kumar-443b382aa/',
    icon: 'LinkIcon',
  },
  {
    label: 'Email',
    href: 'mailto:manish12099@gmail.com',
    icon: 'EnvelopeIcon',
  },
];

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 py-10 relative z-10">
      <div className="container-portfolio flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Logo + Copyright */}
        <div className="flex items-center gap-3">
          <AppLogo size={28} onClick={scrollToTop} />
          <span className="text-sm text-muted-foreground">
            {year && `© ${year}`} Manish Kumar. All rights reserved.
          </span>
        </div>

        {/* Right: Socials + scroll top */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="social-btn"
            >
              <Icon name={s.icon as 'CodeBracketIcon'} size={16} variant="outline" />
            </a>
          ))}

          <div className="w-px h-6 bg-border/50 mx-1" />

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="scroll-top-btn"
          >
            <Icon name="ArrowUpIcon" size={16} variant="outline" />
          </button>
        </div>
      </div>
    </footer>
  );
}