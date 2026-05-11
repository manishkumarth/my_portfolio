'use client';

import React, { useEffect, useState, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const ROLES = [
'Frontend Developer',
'React Developer',
'Next.js Engineer',
'Fullstack Developer',
'UI/UX Enthusiast'];


export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typing animation
  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && displayedRole === currentRole) {
      typingRef.current = setTimeout(() => setIsDeleting(true), 2200);
      return;
    }

    if (isDeleting && displayedRole === '') {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const speed = isDeleting ? 45 : 85;
    typingRef.current = setTimeout(() => {
      setDisplayedRole((prev) =>
      isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, speed);

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [displayedRole, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
      aria-label="Hero section">
      
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay-lines opacity-100 pointer-events-none" aria-hidden="true" />

      {/* Atmospheric blobs */}
      <div
        className="absolute blob-primary pointer-events-none"
        style={{ width: '600px', height: '600px', top: '-100px', left: '-150px' }}
        aria-hidden="true" />
      
      <div
        className="absolute blob-accent pointer-events-none"
        style={{ width: '500px', height: '500px', bottom: '-50px', right: '-100px' }}
        aria-hidden="true" />
      
      <div
        className="absolute blob-mid pointer-events-none"
        style={{ width: '400px', height: '400px', top: '40%', left: '40%' }}
        aria-hidden="true" />
      

      <div className="container-portfolio relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm"
              style={{ animation: 'fadeInUp 0.7s ease forwards', animationDelay: '0.2s', opacity: 0 }}>
              
              <span
                className="w-2 h-2 rounded-full bg-accent"
                style={{ animation: 'cursorBlink 2s step-end infinite' }} />
              
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                Available for freelance & full-time roles
              </span>
            </div>

            {/* Main heading */}
            <div style={{ animation: 'fadeInUp 0.8s ease forwards', animationDelay: '0.35s', opacity: 0 }}>
              <h1 className="hero-name font-display font-light text-foreground leading-none">
                <span className="block text-muted-foreground text-2xl md:text-3xl font-sans font-normal tracking-wide mb-3">
                  Hi, I&apos;m
                </span>
                <span className="block">Manish</span>
                <span className="block text-gradient-primary">Kumar</span>
              </h1>
            </div>

            {/* Typing role */}
            <div
              className="flex items-center gap-3"
              style={{ animation: 'fadeInUp 0.8s ease forwards', animationDelay: '0.5s', opacity: 0 }}>
              
              <div className="v-divider h-8" aria-hidden="true" />
              <p className="text-xl md:text-2xl font-medium text-foreground/80">
                {displayedRole}
                <span className="typing-cursor" aria-hidden="true" />
              </p>
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
              style={{ animation: 'fadeInUp 0.8s ease forwards', animationDelay: '0.65s', opacity: 0 }}>
              
              I build fast, accessible, and visually stunning web experiences using React, Next.js,
              and modern fullstack tools. Passionate about clean code and pixel-perfect UIs.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4"
              style={{ animation: 'fadeInUp 0.8s ease forwards', animationDelay: '0.8s', opacity: 0 }}>
              
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
                aria-label="View Manish Kumar's projects">
                
                <Icon name="FolderOpenIcon" size={16} variant="outline" />
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
                aria-label="Contact Manish Kumar">
                
                <Icon name="EnvelopeIcon" size={16} variant="outline" />
                Contact Me
              </button>
              <a
                href="https://drive.google.com/file/d/16STRhix-OZwEKwpbylHvP1dZjovJ8zGV/view?usp=drivesdk"
                download
                className="btn-secondary"
                aria-label="Download Manish Kumar's resume">
                
                <Icon name="ArrowDownTrayIcon" size={16} variant="outline" />
                Resume
              </a>
            </div>

            {/* Quick stats */}
            <div
              className="flex flex-wrap items-center gap-8 pt-4 border-t border-border/50"
              style={{ animation: 'fadeInUp 0.8s ease forwards', animationDelay: '0.95s', opacity: 0 }}>
              
              {[
              { value: '2+', label: 'Years Coding' },
              { value: '6+', label: 'Projects Built' },
              { value: '12+', label: 'Technologies' }].
              map((stat) =>
              <div key={stat.label}>
                  <p className="text-2xl font-display font-semibold text-gradient-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground tracking-wide mt-0.5">{stat.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Profile image */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            style={{ animation: 'fadeInScale 1s ease forwards', animationDelay: '0.4s', opacity: 0 }}>
            
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-3xl border border-primary/20"
                style={{ transform: 'scale(1.06)', animation: 'spinSlow 20s linear infinite' }}
                aria-hidden="true" />
              
              <div
                className="absolute inset-0 rounded-3xl border border-accent/10"
                style={{ transform: 'scale(1.12)', animation: 'spinSlow 30s linear infinite reverse' }}
                aria-hidden="true" />
              

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(124,106,255,0.2) 0%, transparent 70%)' }}
                aria-hidden="true" />
              

              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-border/50 glass-card">
                <AppImage
                  src="https://avatars.githubusercontent.com/u/134628189?v=4"
                  alt="Young Indian male developer with dark hair, casual professional attire, neutral studio background, well-lit warm environment"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px" />
                
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                    'linear-gradient(to top, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.1) 40%, transparent 70%)'
                  }} />
                
              </div>

              {/* Floating badge: Tech */}
              <div
                className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 border border-border/50 shadow-xl"
                style={{ animation: 'blobFloat 6s ease-in-out infinite' }}>
                
                <p className="text-xs text-muted-foreground">Stack</p>
                <p className="text-sm font-semibold text-foreground">React · Next.js</p>
              </div>

              {/* Floating badge: Open */}
              <div
                className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 border border-accent/20 shadow-xl"
                style={{ animation: 'blobFloat 8s ease-in-out infinite 1s' }}>
                
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" style={{ animation: 'cursorBlink 2s step-end infinite' }} />
                  <p className="text-sm font-semibold text-accent">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{ animation: 'fadeInUp 0.8s ease forwards', animationDelay: '1.2s', opacity: 0 }}
          aria-hidden="true">
          
          <span className="text-xs tracking-widest uppercase text-muted-foreground/50">Scroll</span>
          <div className="w-px h-10 bg-border/50 overflow-hidden relative">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-accent"
              style={{ height: '40%', animation: 'scrollLine 1.5s ease-in-out infinite' }} />
            
          </div>
        </div>
      </div>
    </section>);

}