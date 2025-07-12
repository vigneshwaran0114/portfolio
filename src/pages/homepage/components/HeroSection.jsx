import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const HeroSection = ({ visitorType }) => {
  const [currentCode, setCurrentCode] = useState("");

  const codeSnippets = [
    `const developer = {
  name: 'Vigneshwaran S',
  passion: 'Beautiful Code',
  experience: '3+ years',
  specialty: 'Frontend Magic'
};`,
    `function createAmazingUX() {
  return performance + aesthetics + accessibility;
}`,
    `const skills = ['ReactJs', ''NextJs, 'TypeScript', 'GSAP', 'Next.js'];
skills.map(skill => masterLevel(skill));`,
  ];

  const getAdaptiveMessage = () => {
    switch (visitorType) {
      case "hiring":
        return {
          title: "Frontend Developer",
          subtitle:
            "Crafting exceptional user experiences with modern web technologies",
        };
      case "client":
        return {
          title: "Digital Craftsperson",
          subtitle:
            "Transforming your vision into performant, beautiful web applications",
        };
      default:
        return {
          title: "Code that performs beautifully",
          subtitle:
            "Frontend developer passionate about creating digital experiences that delight users and drive results",
        };
    }
  };

  useEffect(() => {
    let currentSnippet = 0;
    let currentChar = 0;
    let isDeleting = false;

    const typeCode = () => {
      const snippet = codeSnippets[currentSnippet];

      if (!isDeleting) {
        setCurrentCode(snippet.substring(0, currentChar + 1));
        currentChar++;

        if (currentChar === snippet.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        setCurrentCode(snippet.substring(0, currentChar - 1));
        currentChar--;

        if (currentChar === 0) {
          isDeleting = false;
          currentSnippet = (currentSnippet + 1) % codeSnippets.length;
        }
      }
    };

    const interval = setInterval(typeCode, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, []);

  const message = getAdaptiveMessage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary-50 to-accent-50 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-trust/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-success/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-success-50 text-success-700 px-4 py-2 rounded-full border border-success-200 mb-4">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                <span className="text-sm font-medium">
                  Available for new projects
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-900 mb-6 leading-tight">
                <span className="block animate-slide-up">{message.title}</span>
              </h1>

              <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl animate-slide-up animation-delay-200">
                {message.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up animation-delay-400">
              <Link
                to="/experience"
                className="inline-flex items-center space-x-2 bg-conversion hover:bg-conversion-hover text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 ease-smooth transform hover:-translate-y-0.5 hover:shadow-lg group"
              >
                <span>View My Work</span>
                <Icon
                  name="ArrowRight"
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 ease-smooth group"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Let's Collaborate</span>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 animate-slide-up animation-delay-600">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary-900">
                  3+
                </div>
                <div className="text-sm text-text-secondary">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary-900">
                  10+
                </div>
                <div className="text-sm text-text-secondary">
                  Projects Completed
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary-900">
                  94%
                </div>
                <div className="text-sm text-text-secondary">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Code Editor Side */}
          <div className="relative">
            <div className="bg-primary-900 rounded-lg shadow-2xl overflow-hidden animate-slide-up animation-delay-200">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-primary-800 border-b border-primary-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div className="text-primary-300 text-sm font-mono">
                  developer.js
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Code2"
                    size={16}
                    color="var(--color-primary-300)"
                  />
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-primary-300 mb-2">
                  <span className="text-accent">// </span>
                  <span>Building the future, one component at a time</span>
                </div>
                <pre className="text-primary-100 leading-relaxed">
                  <code>
                    {currentCode}
                    <span className="animate-pulse">|</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-white p-3 rounded-lg shadow-lg animate-float">
              <Icon name="Zap" size={20} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-success text-white p-3 rounded-lg shadow-lg animate-float animation-delay-600">
              <Icon name="Heart" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-text-muted">
          <span className="text-sm">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
