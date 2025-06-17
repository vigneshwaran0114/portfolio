import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedProjects = ({ isVisible }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern React-based shopping experience with advanced animations and micro-interactions.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "GSAP", "Stripe", "Node.js"],
      metrics: { performance: "98%", conversion: "+45%", loading: "1.2s" },
      liveUrl: "#",
      caseStudyUrl: "/portfolio-project-universe",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Data visualization platform with real-time updates and interactive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "D3.js", "WebSocket", "TypeScript"],
      metrics: { users: "10K+", uptime: "99.9%", satisfaction: "4.8/5" },
      liveUrl: "#",
      caseStudyUrl: "/portfolio-project-universe",
      category: "SaaS"
    },
    {
      id: 3,
      title: "Creative Agency Site",
      description: "Award-winning portfolio site with immersive scroll experiences and 3D elements.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tech: ["React", "Three.js", "GSAP", "WebGL"],
      metrics: { awards: "3", bounce: "-60%", engagement: "+120%" },
      liveUrl: "#",
      caseStudyUrl: "/portfolio-project-universe",
      category: "Creative"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure financial application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["React Native", "Redux", "Biometrics", "Encryption"],
      metrics: { security: "Bank-grade", downloads: "50K+", rating: "4.9/5" },
      liveUrl: "#",
      caseStudyUrl: "/portfolio-project-universe",
      category: "FinTech"
    }
  ];

  return (
    <section 
      id="projects"
      data-animate
      className="py-20 bg-primary-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A showcase of recent work demonstrating technical excellence, 
            creative problem-solving, and measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with Actions */}
                <div className={`absolute inset-0 bg-primary/80 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.liveUrl}
                    className="px-6 py-3 bg-accent text-surface font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Icon name="ExternalLink" size={18} />
                    <span>Live Demo</span>
                  </a>
                  <Link
                    to={project.caseStudyUrl}
                    className="px-6 py-3 bg-surface text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Icon name="FileText" size={18} />
                    <span>Case Study</span>
                  </Link>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-surface text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-primary-100 text-primary text-sm font-medium rounded-lg transform transition-all duration-300 ${
                        hoveredProject === project.id ? 'scale-105' : ''
                      }`}
                      style={{ transitionDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div
                      key={key}
                      className={`text-center p-3 bg-primary-50 rounded-lg transform transition-all duration-300 ${
                        hoveredProject === project.id ? 'scale-105 bg-accent-50' : ''
                      }`}
                      style={{ transitionDelay: `${metricIndex * 100}ms` }}
                    >
                      <div className="text-lg font-bold text-accent">{value}</div>
                      <div className="text-xs text-text-secondary capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Border */}
              <div className={`absolute inset-0 border-2 border-accent rounded-2xl transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <Link
            to="/portfolio-project-universe"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-primary text-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <span>Explore All Projects</span>
            <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;