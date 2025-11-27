"use client"

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, Globe } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';


const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id: string, duration = 1200) => {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    // Add offset for better visual positioning (accounts for fixed headers, adds breathing room)
    const offset = 80;
    const end = targetPosition - offset;
    const distance = end - start;

    // If already at destination, don't animate
    if (Math.abs(distance) < 1) return;

    const startTime = performance.now();

    // Ease-in-out-cubic: starts slow, accelerates, then decelerates
    // This feels more natural than pure ease-out
    const easeInOutCubic = (t: number) => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black">

      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      <Hero scrollToSection={scrollToSection} />

      <ProjectSection />
      <AboutSection />

      <ContactSection />

      <Footer />

    </div>
  );
};

export default Portfolio;