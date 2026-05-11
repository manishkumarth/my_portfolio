import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Loader />
      <ParticleBackground />

      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Header />

      <main id="main-content" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}