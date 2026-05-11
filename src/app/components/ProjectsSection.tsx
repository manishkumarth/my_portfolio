'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tech: string[];
  github: string;
  demo: string;
  tag: string;
}

const PROJECTS: Project[] = [
{
  title: 'MERN Notes App',
  description:
  'Full-stack notes application with authentication, CRUD operations, rich text editing, and real-time sync using MongoDB, Express, React, and Node.js.',
  image: "https://images.unsplash.com/photo-1604874314660-cab807de4d86",
  imageAlt:
  'Clean minimalist note-taking app interface on a bright white screen with organized text entries and sidebar navigation',
  tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
  github: 'https://github.com/manishkumarth?tab=repositories',
  demo: '#',
  tag: 'Fullstack'
},
{
  title: 'YouTube Clone',
  description:
  'Feature-rich YouTube clone with video listing, search functionality, channel pages, and real-time data from the YouTube Data API v3.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17baca2f4-1772240979875.png",
  imageAlt:
  'Video streaming platform interface with thumbnail grid layout, dark sidebar, and search bar on a modern web app',
  tech: ['React', 'YouTube API', 'Tailwind CSS', 'Redux'],
  github: 'https://github.com/manishkumarth?tab=repositories',
  demo: '#',
  tag: 'Frontend'
},
{
  title: 'Expense Tracker',
  description:
  'Smart expense tracking app with category management, monthly charts, budget alerts, and CSV export. Built with React and local storage persistence.',
  image: "https://images.unsplash.com/photo-1724833256463-26b199dc1b69",
  imageAlt:
  'Financial dashboard with bar charts showing expense categories, clean white background with green and blue data visualizations',
  tech: ['React', 'Chart.js', 'Tailwind CSS', 'LocalStorage'],
  github: 'https://github.com/manishkumarth?tab=repositories',
  demo: '#',
  tag: 'Frontend'
},
{
  title: 'Movie Recommendation',
  description:
  'AI-powered movie recommendation system using TMDB API, genre-based filtering, personalized watchlists, and a cinematic card-based UI.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_128c6aa99-1772668398230.png",
  imageAlt:
  'Cinema-themed movie recommendation interface with dark background, movie poster cards arranged in a horizontal scroll grid',
  tech: ['React', 'TMDB API', 'Redux', 'CSS Modules'],
  github: 'https://github.com/manishkumarth?tab=repositories',
  demo: '#',
  tag: 'Frontend'
},
{
  title: 'Drag & Drop Form Builder',
  description:
  'No-code form builder with drag-and-drop field placement, live preview, form validation, JSON export, and 15+ field types supported.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19d2d0469-1778429703931.png",
  imageAlt:
  'Form builder interface with drag handles on left panel, canvas area in center with draggable form elements, bright airy workspace',
  tech: ['React', 'DnD Kit', 'TypeScript', 'Tailwind CSS'],
  github: 'https://github.com/manishkumarth?tab=repositories',
  demo: '#',
  tag: 'Frontend'
},
{
  title: 'E-commerce Website',
  description:
  'Complete e-commerce platform with product catalog, cart management, user authentication, order history, and Razorpay payment integration.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b827d5b-1772246363615.png",
  imageAlt:
  'Modern e-commerce storefront with product grid, clean white background, add to cart buttons, and professional product photography',
  tech: ['React', 'Node.js', 'MySQL', 'Express', 'Razorpay'],
  github: 'https://github.com/manishkumarth?tab=repositories',
  demo: '#',
  tag: 'Fullstack'
}];


function ProjectCard({ project, index }: {project: Project;index: number;}) {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card reveal-hidden"
      style={{ transitionDelay: `${index % 3 * 100}ms` }}>
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        
        {/* Scrim */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(10,10,15,0.8) 0%, rgba(10,10,15,0.2) 50%, transparent 100%)'
          }}
          aria-hidden="true" />
        
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background:
              project.tag === 'Fullstack' ? 'rgba(0, 229, 204, 0.15)' : 'rgba(124, 106, 255, 0.15)',
              color: project.tag === 'Fullstack' ? 'var(--accent)' : 'var(--primary)',
              border: `1px solid ${project.tag === 'Fullstack' ? 'rgba(0,229,204,0.3)' : 'rgba(124,106,255,0.3)'}`
            }}>
            
            {project.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) =>
          <span key={t} className="tech-badge">{t}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2 border-t border-border/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`View ${project.title} on GitHub`}>
            
            <Icon name="CodeBracketIcon" size={15} variant="outline" />
            GitHub
          </a>
          <span className="text-border" aria-hidden="true">·</span>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            aria-label={`View live demo of ${project.title}`}>
            
            <Icon name="ArrowTopRightOnSquareIcon" size={15} variant="outline" />
            Live Demo
          </a>
        </div>
      </div>
    </div>);

}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Fullstack'>('All');

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

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 relative z-10 border-t border-border/30"
      aria-labelledby="projects-heading">
      
      <div
        className="absolute blob-accent pointer-events-none"
        style={{ width: '500px', height: '500px', bottom: '10%', left: '-100px' }}
        aria-hidden="true" />
      

      <div className="container-portfolio relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-eyebrow section-header-reveal reveal-hidden">Portfolio</span>
            <h2
              id="projects-heading"
              className="section-header-reveal reveal-hidden font-display text-4xl md:text-5xl font-light text-foreground mt-3 leading-tight">
              
              Selected{' '}
              <span className="text-gradient-primary italic">projects</span>
            </h2>
            <p className="section-header-reveal reveal-hidden text-muted-foreground mt-4 max-w-xl leading-relaxed">
              Real-world applications built with modern technologies. Each project solves a
              specific problem with clean, maintainable code.
            </p>
          </div>

          {/* Filter */}
          <div className="section-header-reveal reveal-hidden flex items-center gap-2 p-1 rounded-xl bg-card border border-border">
            {(['All', 'Frontend', 'Fullstack'] as const).map((f) =>
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              filter === f ?
              'bg-primary text-primary-foreground' :
              'text-muted-foreground hover:text-foreground'}`
              }
              aria-pressed={filter === f}>
              
                {f}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) =>
          <ProjectCard key={project.title} project={project} index={i} />
          )}
        </div>

        {/* View all on GitHub */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/manishkumarth?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
            aria-label="View all projects on GitHub">
            
            <Icon name="CodeBracketIcon" size={16} variant="outline" />
            View All on GitHub
            <Icon name="ArrowTopRightOnSquareIcon" size={14} variant="outline" />
          </a>
        </div>
      </div>
    </section>);

}