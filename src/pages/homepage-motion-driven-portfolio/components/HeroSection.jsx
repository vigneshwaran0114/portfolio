import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ isVisible }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const heroRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Initialize particles
    const initialParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(initialParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Calculate new position
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Apply boundary checks
          newX = newX > window.innerWidth ? 0 : newX < 0 ? window.innerWidth : newX;
          newY = newY > window.innerHeight ? 0 : newY < 0 ? window.innerHeight : newY;
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
      animationRef.current = requestAnimationFrame(animateParticles);
    };

    animationRef.current = requestAnimationFrame(animateParticles);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const titleWords = ["Frontend", "Developer"];

  return (
    <section 
      ref={heroRef}
      id="hero"
      data-animate
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 pt-20"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity,
              transform: `scale(${particle.size})`,
              transition: 'transform 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Headline */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-surface mb-6">
            {titleWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-4 transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  background: word === '&' ? 'linear-gradient(45deg, #e94560, #f56565)' : 'none',
                  WebkitBackgroundClip: word === '&' ? 'text' : 'none',
                  WebkitTextFillColor: word === '&' ? 'transparent' : 'inherit'
                }}
              >
                {word}
              </span>
            ))}
          </h1>
          
          <div className={`transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-primary-200 mb-8 max-w-3xl mx-auto">
              Crafting digital experiences where code becomes movement, interactions tell stories, 
              and technical skills transform into emotional connections.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Link
            to="/portfolio-project-universe"
            className="group relative px-8 py-4 bg-accent text-surface font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Icon name="Briefcase" size={20} />
              <span>View My Work</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <Link
            to="/contact-collaboration-hub"
            className="group px-8 py-4 border-2 border-surface text-surface font-semibold rounded-lg transition-all duration-300 hover:bg-surface hover:text-primary"
          >
            <span className="flex items-center space-x-2">
              <Icon name="MessageCircle" size={20} />
              <span>Let's Talk</span>
            </span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className={`transform transition-all duration-1000 delay-1400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col items-center space-y-2 text-primary-200">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary-200 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-accent/30 rounded-lg rotate-45 animate-pulse hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-accent/20 rounded-full animate-breathing hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-surface rounded-full animate-ping hidden lg:block" />
    </section>
  );
};

export default HeroSection;