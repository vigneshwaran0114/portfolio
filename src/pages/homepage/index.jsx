import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

import HeroSection from './components/HeroSection';
import SkillsVisualization from './components/SkillsVisualization';
import FeaturedProjects from './components/FeaturedProjects';
import GrowthTimeline from './components/GrowthTimeline';
import TestimonialCards from './components/TestimonialCards';

const Homepage = () => {
  const [visitorType, setVisitorType] = useState('default');

  useEffect(() => {
    // Simulate visitor type detection based on referrer or URL params
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = document.referrer;
    
    if (urlParams.get('source') === 'linkedin' || referrer.includes('linkedin')) {
      setVisitorType('hiring');
    } else if (urlParams.get('source') === 'client' || referrer.includes('upwork')) {
      setVisitorType('client');
    } else {
      setVisitorType('default');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection visitorType={visitorType} />
      
      {/* Skills Visualization */}
      <SkillsVisualization />
      
      {/* Featured Projects */}
      {/* <FeaturedProjects /> */}
      
      {/* Growth Timeline */}
      {/* <GrowthTimeline /> */}
      
      {/* Testimonials */}
      {/* <TestimonialCards /> */}
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's collaborate on your next project and create digital experiences that perform beautifully.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-conversion hover:bg-conversion-hover text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 ease-smooth transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span>Start a Project</span>
                <Icon name="ArrowRight" size={20} />
              </Link>
              
              <Link
                to="/experience"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 ease-smooth"
              >
                <Icon name="Briefcase" size={20} />
                <span>View Experience</span>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-text-muted">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span className="text-sm">Usually responds within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;