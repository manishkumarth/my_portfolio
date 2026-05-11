'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const SOCIAL_LINKS = [
  {
    label: 'Email',
    value: 'manish12099@gmail.com',
    href: 'mailto:manish12099@gmail.com',
    icon: 'EnvelopeIcon',
    color: 'rgba(124, 106, 255,',
  },
  {
    label: 'LinkedIn',
    value: 'manish-kumar-443b382aa',
    href: 'https://www.linkedin.com/in/manish-kumar-443b382aa/',
    icon: 'LinkIcon',
    color: 'rgba(0, 229, 204,',
  },
  {
    label: 'GitHub',
    value: 'manishkumarth',
    href: 'https://github.com/manishkumarth?tab=repositories',
    icon: 'CodeBracketIcon',
    color: 'rgba(124, 106, 255,',
  },
  {
    label: 'WhatsApp',
    value: '+91 9798293519',
    href: 'https://wa.me/919798293519',
    icon: 'ChatBubbleLeftRightIcon',
    color: 'rgba(0, 229, 204,',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Mock submit handler — connect backend/email service here
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1400);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 relative z-10 border-t border-border/30"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute blob-accent pointer-events-none"
        style={{ width: '500px', height: '500px', bottom: '-50px', right: '-80px' }}
        aria-hidden="true"
      />
      <div
        className="absolute blob-primary pointer-events-none"
        style={{ width: '400px', height: '400px', top: '10%', left: '-60px' }}
        aria-hidden="true"
      />

      <div className="container-portfolio relative z-10">
        <div className="mb-14 text-center">
          <span className="section-eyebrow reveal-hidden">Get In Touch</span>
          <h2
            id="contact-heading"
            className="reveal-hidden font-display text-4xl md:text-5xl font-light text-foreground mt-3 leading-tight"
          >
            Let&apos;s build something{' '}
            <span className="text-gradient-primary italic">together</span>
          </h2>
          <p className="reveal-hidden text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Whether you have a project in mind, a job opportunity, or just want to connect — I&apos;m
            always open to a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-between h-full">
            {/* Social links */}
            <div className="space-y-3">
              {SOCIAL_LINKS.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="reveal-hidden flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                  aria-label={`${s.label}: ${s.value}`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: `${s.color}0.1)` }}
                  >
                    <Icon
                      name={s.icon as 'EnvelopeIcon'}
                      size={18}
                      variant="outline"
                      style={{ color: `${s.color}0.9)` } as React.CSSProperties}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
                    <p className="text-sm text-foreground font-medium truncate group-hover:text-primary transition-colors">
                      {s.value}
                    </p>
                  </div>
                  <Icon
                    name="ArrowTopRightOnSquareIcon"
                    size={14}
                    variant="outline"
                    className="ml-auto text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0"
                  />
                </a>
              ))}
            </div>

            {/* Direct hire CTA */}
            <div className="reveal-hidden p-5 rounded-xl border border-accent/20 bg-accent/5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" style={{ animation: 'cursorBlink 2s step-end infinite' }} />
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">Available Now</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to frontend/fullstack roles, freelance contracts, and interesting collaborations.
                Response time: within 24 hours.
              </p>
              <a
                href="mailto:manish12099@gmail.com"
                className="btn-hire inline-flex w-full justify-center"
                aria-label="Hire Manish Kumar via email"
              >
                <Icon name="BriefcaseIcon" size={14} variant="solid" />
                Hire Me Directly
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal-hidden">
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 text-center border border-accent/20 space-y-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: 'rgba(0, 229, 204, 0.12)' }}
                >
                  <Icon name="CheckCircleIcon" size={32} variant="outline" className="text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 md:p-10 space-y-6 border border-border/50"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Manish kumar"
                      className="form-input"
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="manish12099@gmail.com"
                      className="form-input"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Frontend Developer Role / Freelance Project"
                    className="form-input"
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hi Manish, I'm looking for a frontend developer to..."
                    className="form-input resize-none"
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center"
                  aria-label="Send message to Manish Kumar"
                >
                  {submitting ? (
                    <>
                      <div
                        className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                        style={{ animation: 'spinSlow 0.8s linear infinite' }}
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={16} variant="outline" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}