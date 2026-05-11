'use client';

import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  colSpan?: string;
  icon: string;
}

const SKILLS: Skill[] = [
  { name: 'HTML5', level: 95, category: 'frontend', icon: '🌐' },
  { name: 'CSS3', level: 90, category: 'frontend', icon: '🎨' },
  { name: 'JavaScript', level: 88, category: 'frontend', icon: '⚡' },
  { name: 'React.js', level: 90, category: 'frontend', icon: '⚛️', colSpan: 'lg:col-span-3' },
  { name: 'Next.js', level: 85, category: 'frontend', icon: '▲', colSpan: 'lg:col-span-3' },
  { name: 'Redux', level: 78, category: 'frontend', icon: '🔄' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: '💨' },
  { name: 'Bootstrap', level: 85, category: 'frontend', icon: '🅱️' },
  { name: 'Node.js', level: 75, category: 'backend', icon: '🟢' },
  { name: 'Express.js', level: 72, category: 'backend', icon: '🚂' },
  { name: 'MySQL', level: 68, category: 'backend', icon: '🗄️' },
  { name: 'Git & GitHub', level: 88, category: 'tools', icon: '🐙', colSpan: 'lg:col-span-6' },
];

const CATEGORY_COLORS: Record<string, string> = {
  frontend: 'rgba(124, 106, 255,',
  backend: 'rgba(0, 229, 204,',
  tools: 'rgba(248, 113, 113,',
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && progressRef.current) {
            progressRef.current.style.width = `${skill.level}%`;
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [skill.level]);

  const color = CATEGORY_COLORS[skill.category];
  const isWide = skill.colSpan?.includes('col-span-3') || skill.colSpan?.includes('col-span-6');

  return (
    <div
      ref={cardRef}
      className={`reveal-hidden skill-card-border rounded-xl p-5 ${skill.colSpan ?? 'lg:col-span-2'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label={skill.name}>{skill.icon}</span>
          <div>
            <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
            <span
              className="text-xs capitalize font-medium"
              style={{ color: `${color}0.8)` }}
            >
              {skill.category}
            </span>
          </div>
        </div>
        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-muted/50 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full rounded-full skill-progress-fill"
          style={{
            width: '0%',
            background: isWide
              ? `linear-gradient(90deg, ${color}0.9), ${color.replace('(', '(').replace(',', '')} 0.5) 100%)`
              : `${color}0.8)`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 relative z-10 border-t border-border/30"
      aria-labelledby="skills-heading"
    >
      {/* Background blob */}
      <div
        className="absolute blob-primary pointer-events-none"
        style={{ width: '500px', height: '500px', top: '10%', right: '-100px' }}
        aria-hidden="true"
      />

      <div className="container-portfolio relative z-10">
        <div className="mb-14">
          <span className="section-eyebrow section-header-reveal reveal-hidden">Technical Skills</span>
          <h2
            id="skills-heading"
            className="section-header-reveal reveal-hidden font-display text-4xl md:text-5xl font-light text-foreground mt-3 leading-tight"
          >
            Technologies I{' '}
            <span className="text-gradient-primary italic">work with</span>
          </h2>
          <p className="section-header-reveal reveal-hidden text-muted-foreground mt-4 max-w-xl leading-relaxed">
            A curated set of modern tools and frameworks I use to build fast, scalable, and
            beautiful web applications.
          </p>
        </div>

        {/*
          BENTO GRID AUDIT:
          12 cards total: HTML(cs-2), CSS(cs-2), JavaScript(cs-2),
          React.js(cs-3), Next.js(cs-3),
          Redux(cs-2), Tailwind(cs-2), Bootstrap(cs-2),
          Node.js(cs-2), Express.js(cs-2), MySQL(cs-2),
          Git & GitHub(cs-6)

          Row 1 (6 cols): [HTML cs-2][CSS cs-2][JavaScript cs-2] ✓
          Row 2 (6 cols): [React.js cs-3][Next.js cs-3] ✓
          Row 3 (6 cols): [Redux cs-2][Tailwind cs-2][Bootstrap cs-2] ✓
          Row 4 (6 cols): [Node.js cs-2][Express.js cs-2][MySQL cs-2] ✓
          Row 5 (6 cols): [Git & GitHub cs-6] ✓
          Placed 12/12 ✓
        */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}