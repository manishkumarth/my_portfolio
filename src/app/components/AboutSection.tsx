'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const HIGHLIGHTS = [
  {
    icon: 'CodeBracketIcon',
    title: 'Frontend Focused',
    desc: 'Building pixel-perfect, accessible UIs with React and Next.js',
  },
  {
    icon: 'ServerIcon',
    title: 'Fullstack Capable',
    desc: 'Node.js, Express, and MySQL for end-to-end development',
  },
  {
    icon: 'DevicePhoneMobileIcon',
    title: 'Mobile First',
    desc: 'Responsive design that works beautifully across all screen sizes',
  },
  {
    icon: 'BoltIcon',
    title: 'Performance Driven',
    desc: 'Optimized builds with Core Web Vitals and Lighthouse scores in mind',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-hidden').forEach((el) => {
              el.classList.add('revealed');
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 relative z-10"
      aria-labelledby="about-heading"
    >
      <div className="container-portfolio">
        {/* Section label */}
        <div className="reveal-hidden mb-4">
          <span className="section-eyebrow">About Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <h2
              id="about-heading"
              className="reveal-hidden font-display text-4xl md:text-5xl font-light text-foreground leading-tight"
            >
              Crafting digital{' '}
              <span className="text-gradient-primary italic">experiences</span>{' '}
              that matter
            </h2>

            <div className="space-y-4 reveal-hidden">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m Manish Kumar, a frontend and fullstack developer based in India, with a
                strong passion for building modern, performant web applications. I specialize in the
                React ecosystem and love turning complex problems into clean, elegant solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey started with vanilla HTML/CSS/JS and evolved into mastering React, Next.js,
                and Node.js. I&apos;ve built everything from MERN stack apps to interactive UI components,
                always with a focus on user experience and code quality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, I contribute to open-source projects, explore new frontend
                patterns, and continuously level up my skills. My goal is to land a role where I can
                build products that genuinely help people.
              </p>
            </div>

            {/* Career objective */}
            <div className="reveal-hidden p-5 rounded-xl border border-primary/20 bg-primary/5 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-xl"
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-foreground/90 leading-relaxed pl-4">
                <span className="text-accent font-semibold">Career Objective: </span>
                Seeking a challenging frontend or fullstack developer role where I can apply my
                React/Next.js expertise to build scalable, user-centric products — and grow alongside
                a talented engineering team.
              </p>
            </div>

            {/* Contact quick links */}
            <div className="reveal-hidden flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:manish12099@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email Manish Kumar"
              >
                <Icon name="EnvelopeIcon" size={15} variant="outline" className="text-primary" />
                manish12099@gmail.com
              </a>
              <span className="text-border" aria-hidden="true">·</span>
              <a
                href="https://github.com/manishkumarth?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Manish Kumar's GitHub"
              >
                <Icon name="CodeBracketIcon" size={15} variant="outline" className="text-primary" />
                GitHub
              </a>
              <span className="text-border" aria-hidden="true">·</span>
              <a
                href="https://www.linkedin.com/in/manish-kumar-443b382aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Manish Kumar's LinkedIn"
              >
                <Icon name="LinkIcon" size={15} variant="outline" className="text-primary" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="reveal-hidden glass-card glass-card-hover rounded-xl p-6 space-y-3"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(124, 106, 255, 0.12)' }}
                >
                  <Icon name={item.icon as 'CodeBracketIcon'} size={20} variant="outline" className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}