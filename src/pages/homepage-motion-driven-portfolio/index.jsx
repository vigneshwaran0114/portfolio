import React, { useState, useEffect, useRef } from 'react';



import HeroSection from './components/HeroSection';
import SkillsVisualization from './components/SkillsVisualization';
import FeaturedProjects from './components/FeaturedProjects';
import MotionPhilosophy from './components/MotionPhilosophy';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

const Homepage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-accent to-accent-600 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Hero Section */}
      <HeroSection isVisible={isVisible.hero} />

      {/* Skills Visualization */}
      <SkillsVisualization isVisible={isVisible.skills} />

      {/* Featured Projects */}
      <FeaturedProjects isVisible={isVisible.projects} />

      {/* Motion Philosophy */}
      <MotionPhilosophy isVisible={isVisible.philosophy} />

      {/* Testimonials */}
      <TestimonialSection isVisible={isVisible.testimonials} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;