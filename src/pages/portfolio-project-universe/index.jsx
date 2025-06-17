import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../components/AppIcon';

import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import CodePlayground from './components/CodePlayground';
import TechStackFilter from './components/TechStackFilter';

const PortfolioProjectUniverse = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const heroRef = useRef(null);

  const projectCategories = [
    { id: 'all', name: 'All Projects', icon: 'Grid3X3', count: 12 },
    { id: 'react', name: 'React Applications', icon: 'Code2', count: 5 },
    { id: 'animation', name: 'Animation Showcases', icon: 'Zap', count: 3 },
    { id: 'client', name: 'Client Work', icon: 'Users', count: 3 },
    { id: 'opensource', name: 'Open Source', icon: 'Github', count: 1 }
  ];

  const techStacks = [
    { name: 'React', color: '#61DAFB', icon: 'Code2' },
    { name: 'Next.js', color: '#000000', icon: 'ArrowRight' },
    { name: 'TypeScript', color: '#3178C6', icon: 'FileCode' },
    { name: 'GSAP', color: '#88CE02', icon: 'Zap' },
    { name: 'Tailwind', color: '#06B6D4', icon: 'Palette' },
    { name: 'Node.js', color: '#339933', icon: 'Server' },
    { name: 'MongoDB', color: '#47A248', icon: 'Database' },
    { name: 'Firebase', color: '#FFCA28', icon: 'Cloud' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      category: "react",
      description: `A comprehensive e-commerce solution built with React 18 and Next.js, featuring advanced product filtering, real-time inventory management, and seamless payment integration. The platform handles over 10,000 products with lightning-fast search capabilities and personalized recommendations.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/devmotion/ecommerce-platform",
      featured: true,
      metrics: {
        performance: 98,
        accessibility: 96,
        seo: 100,
        loadTime: "1.2s"
      },
      testimonial: {
        text: "DevMotion transformed our online presence completely. Sales increased by 340% within the first quarter.",
        author: "Sarah Johnson",
        role: "CEO, TechStyle Boutique"
      },
      caseStudy: {
        challenge: `The client needed a modern e-commerce platform that could handle high traffic volumes while providing an exceptional user experience. Their existing solution was slow, outdated, and couldn't scale with their growing business needs.`,
        solution: `I architected a headless e-commerce solution using React and Next.js with server-side rendering for optimal SEO. Implemented advanced caching strategies, lazy loading, and progressive image optimization to achieve sub-2-second load times.`,
        results: [
          "340% increase in online sales",
          "65% improvement in page load speed",
          "45% reduction in bounce rate",
          "98% Lighthouse performance score"
        ]
      }
    },
    {
      id: 2,
      title: "Interactive Data Visualization Dashboard",
      category: "animation",
      description: `A stunning data visualization platform that transforms complex datasets into engaging, interactive charts and graphs. Built with D3.js and GSAP for smooth animations, featuring real-time data updates and customizable dashboard layouts.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      techStack: ["React", "D3.js", "GSAP", "TypeScript", "Tailwind"],
      liveUrl: "https://dataviz-dashboard.vercel.app",
      githubUrl: "https://github.com/devmotion/data-visualization",
      featured: true,
      metrics: {
        performance: 95,
        accessibility: 94,
        seo: 92,
        loadTime: "0.9s"
      },
      caseStudy: {
        challenge: `Creating an intuitive way to visualize complex financial data for non-technical stakeholders while maintaining real-time accuracy and performance.`,
        solution: `Developed a modular dashboard system with drag-and-drop widgets, real-time WebSocket connections, and optimized rendering using React virtualization for large datasets.`,
        results: [
          "50% faster decision-making process",
          "90% user satisfaction rate",
          "Real-time data processing for 100k+ records",
          "Mobile-responsive design"
        ]
      }
    },
    {
      id: 3,
      title: "Creative Agency Portfolio",
      category: "client",
      description: `A visually stunning portfolio website for a creative agency, featuring parallax scrolling, custom animations, and an immersive storytelling experience. The site showcases their work through interactive case studies and smooth page transitions.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      techStack: ["React", "GSAP", "Tailwind", "Framer Motion"],
      liveUrl: "https://creative-agency-portfolio.vercel.app",
      githubUrl: "https://github.com/devmotion/agency-portfolio",
      featured: false,
      metrics: {
        performance: 96,
        accessibility: 95,
        seo: 98,
        loadTime: "1.1s"
      },
      testimonial: {
        text: "The portfolio perfectly captures our creative vision. Client inquiries increased by 200% since launch.",
        author: "Marcus Chen",
        role: "Creative Director, Pixel Studios"
      }
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      category: "react",
      description: `A modern chat application with real-time messaging, file sharing, and video calling capabilities. Features include message encryption, typing indicators, and seamless mobile experience.`,
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
      liveUrl: "https://chat-app-demo.vercel.app",
      githubUrl: "https://github.com/devmotion/chat-application",
      featured: false,
      metrics: {
        performance: 94,
        accessibility: 93,
        seo: 89,
        loadTime: "1.3s"
      }
    },
    {
      id: 5,
      title: "Animated Landing Page Collection",
      category: "animation",
      description: `A curated collection of animated landing pages showcasing various animation techniques and micro-interactions. Each page demonstrates different GSAP and CSS animation approaches.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      techStack: ["React", "GSAP", "CSS3", "Tailwind"],
      liveUrl: "https://animated-landings.vercel.app",
      githubUrl: "https://github.com/devmotion/animated-landings",
      featured: false,
      metrics: {
        performance: 97,
        accessibility: 96,
        seo: 94,
        loadTime: "0.8s"
      }
    },
    {
      id: 6,
      title: "Healthcare Management System",
      category: "client",
      description: `A comprehensive healthcare management platform for clinics and hospitals, featuring patient records, appointment scheduling, and billing integration. Built with security and HIPAA compliance in mind.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      liveUrl: "https://healthcare-demo.vercel.app",
      githubUrl: "https://github.com/devmotion/healthcare-system",
      featured: true,
      metrics: {
        performance: 93,
        accessibility: 98,
        seo: 95,
        loadTime: "1.4s"
      },
      testimonial: {
        text: "The system streamlined our operations significantly. Patient satisfaction scores improved by 35%.",
        author: "Dr. Emily Rodriguez",
        role: "Chief Medical Officer, HealthFirst Clinic"
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 bg-gradient-to-br from-primary-900 via-secondary-800 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/20 rounded-full text-accent-100 text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Project Universe</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-surface mb-6 font-headline">
              Crafting Digital
              <span className="block bg-gradient-to-r from-accent to-accent-600 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore a curated collection of projects that showcase the intersection of technical excellence and creative vision. Each project tells a story of problem-solving, innovation, and user-centered design.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-surface font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 flex items-center space-x-2"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Rocket" size={20} />
                <span>Explore Projects</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-200 text-primary-200 font-semibold rounded-lg hover:bg-primary-200 hover:text-primary-900 transition-all duration-300 flex items-center space-x-2"
                onClick={() => document.getElementById('playground').scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Code" size={20} />
                <span>Code Playground</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "50+", icon: "CheckCircle" },
              { label: "Happy Clients", value: "25+", icon: "Users" },
              { label: "Code Commits", value: "2.5k+", icon: "GitCommit" },
              { label: "Performance Score", value: "98%", icon: "Zap" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} color="var(--color-accent)" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section id="projects" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 space-y-6 lg:space-y-0">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-primary-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                    viewMode === 'grid' ? 'bg-surface text-primary shadow-sm' : 'text-text-secondary'
                  }`}
                >
                  <Icon name="Grid3X3" size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                    viewMode === 'list' ? 'bg-surface text-primary shadow-sm' : 'text-text-secondary'
                  }`}
                >
                  <Icon name="List" size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            {projectCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-accent text-surface shadow-lg'
                    : 'bg-surface text-text-primary hover:bg-primary-50 border border-primary-200'
                }`}
              >
                <Icon name={category.icon} size={18} />
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === category.id ? 'bg-accent-600' : 'bg-primary-100 text-text-secondary'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Tech Stack Filter */}
          <TechStackFilter techStacks={techStacks} />

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${searchTerm}-${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={
                viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'
              }
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  viewMode={viewMode}
                  onOpenModal={openProjectModal}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" size={32} color="var(--color-text-secondary)" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">No projects found</h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
                className="px-6 py-3 bg-accent text-surface font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Code Playground Section */}
      <CodePlayground />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
};

export default PortfolioProjectUniverse;