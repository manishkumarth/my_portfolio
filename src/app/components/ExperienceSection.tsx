'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Experience {
  type: string;
  title: string;
  org: string;
  period: string;
  description: string;
  highlights: string[];
  color: 'primary' | 'accent';
  icon: string;
}

const EXPERIENCES: Experience[] = [
  {
    type: 'Freelance',
    title: 'Frontend Developer',
    org: 'Independent / Remote',
    period: 'Jan 2024 – Present',
    description:
      'Delivering custom React and Next.js web applications for small businesses and startups across India. Focused on performance, responsiveness, and pixel-perfect execution.',
    highlights: [
      'Built 4+ client websites with React and Tailwind CSS',
      'Reduced page load time by 40% through code splitting and lazy loading',
      'Implemented responsive designs achieving 100% mobile compatibility',
      'Integrated third-party APIs including payment gateways and CMS platforms',
    ],
    color: 'primary',
    icon: 'BriefcaseIcon',
  },
  {
    type: 'Projects',
    title: 'Fullstack Developer',
    org: 'Personal Projects',
    period: '2023 – Present',
    description:
      'Built 6+ production-quality projects spanning MERN stack apps, API-integrated frontends, and interactive UI tools — all deployed and publicly accessible.',
    highlights: [
      'Developed MERN Notes App with JWT auth and real-time updates',
      'Built YouTube Clone consuming YouTube Data API v3',
      'Created Drag & Drop Form Builder with 15+ field types',
      'Deployed all projects to Vercel and Render with CI/CD pipelines',
    ],
    color: 'primary',
    icon: 'RocketLaunchIcon',
  },
  {
    type: 'Open Source',
    title: 'Open Source Contributor',
    org: 'GitHub Community',
    period: '2023 – Present',
    description:
      'Active contributor to open-source React and JavaScript projects. Submitted bug fixes, documentation improvements, and feature enhancements to community repositories.',
    highlights: [
      'Contributed to UI component libraries and documentation',
      'Reviewed and merged pull requests in community projects',
      'Maintained personal open-source repositories with 50+ stars',
      'Engaged in code reviews and technical discussions on GitHub',
    ],
    color: 'accent',
    icon: 'CodeBracketSquareIcon',
  },
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const accentColor = exp.color === 'accent' ? 'var(--accent)' : 'var(--primary)';
  const accentBg =
    exp.color === 'accent' ? 'rgba(0, 229, 204, 0.1)' : 'rgba(124, 106, 255, 0.1)';
  const borderHover =
    exp.color === 'accent' ? 'rgba(0, 229, 204, 0.25)' : 'rgba(124, 106, 255, 0.25)';

  return (
    <div
      ref={cardRef}
      className="exp-card reveal-hidden p-6 md:p-8 relative overflow-hidden"
      style={{
        transitionDelay: `${index * 100}ms`,
        ['--hover-border' as string]: borderHover,
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
          style={{ background: accentBg }}
        >
          <Icon name={exp.icon as 'BriefcaseIcon'} size={22} variant="outline" style={{ color: accentColor } as React.CSSProperties} />
        </div>

        <div className="flex-1 space-y-4">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-md"
                  style={{ background: accentBg, color: accentColor }}
                >
                  {exp.type}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{exp.title}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{exp.org}</p>
            </div>
            <span className="text-xs font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-lg">
              {exp.period}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

          {/* Highlights */}
          <ul className="space-y-2">
            {exp.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: accentColor }}
                  aria-hidden="true"
                />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-header-reveal').forEach((el) => {
              el.classList.add('revealed');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 relative z-10 border-t border-border/30"
      aria-labelledby="experience-heading"
    >
      <div
        className="absolute blob-primary pointer-events-none"
        style={{ width: '400px', height: '400px', top: '20%', right: '-80px' }}
        aria-hidden="true"
      />

      <div className="container-portfolio relative z-10">
        <div className="mb-14">
          <span className="section-eyebrow section-header-reveal reveal-hidden">Experience</span>
          <h2
            id="experience-heading"
            className="section-header-reveal reveal-hidden font-display text-4xl md:text-5xl font-light text-foreground mt-3 leading-tight"
          >
            Work &{' '}
            <span className="text-gradient-primary italic">contributions</span>
          </h2>
          <p className="section-header-reveal reveal-hidden text-muted-foreground mt-4 max-w-xl leading-relaxed">
            Building real-world experience through freelance work, ambitious personal projects,
            and active open-source participation.
          </p>
        </div>

        <div className="space-y-4">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}