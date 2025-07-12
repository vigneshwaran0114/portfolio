import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern React-based e-commerce solution with advanced filtering, real-time inventory, and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Next.js', 'TypeScript', 'Stripe'],
      liveUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
      impact: '40% increase in conversion rate',
      category: 'Web Application'
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      technologies: ['React', 'Redux', 'Socket.io', 'Node.js'],
      liveUrl: 'https://taskflow-demo.com',
      githubUrl: 'https://github.com/alexjohnson/task-dashboard',
      impact: '60% improvement in team productivity',
      category: 'Dashboard'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio site with GSAP animations, optimized performance, and dynamic content management.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      technologies: ['React', 'GSAP', 'Tailwind', 'Vite'],
      liveUrl: 'https://creative-portfolio.com',
      githubUrl: 'https://github.com/alexjohnson/portfolio-site',
      impact: '95+ PageSpeed score',
      category: 'Portfolio'
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'Educational platform with video streaming, progress tracking, interactive quizzes, and certification system.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      technologies: ['React', 'Firebase', 'Video.js', 'Chart.js'],
      liveUrl: 'https://edulearn-platform.com',
      githubUrl: 'https://github.com/alexjohnson/lms-platform',
      impact: '10,000+ active learners',
      category: 'Education'
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeProject];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Showcasing recent work that demonstrates technical expertise, creative problem-solving, and measurable business impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Showcase */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {currentProject.category}
                </div>
                
                {/* Live Preview Button */}
                <div className="absolute top-4 right-4">
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-primary-900 p-2 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Icon name="ExternalLink" size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-900 mb-3">
                  {currentProject.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact Metric */}
                <div className="flex items-center space-x-2 mb-6">
                  <Icon name="TrendingUp" size={16} className="text-success" />
                  <span className="text-success font-semibold">{currentProject.impact}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-conversion hover:bg-conversion-hover text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Icon name="Eye" size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-transparent border-2 border-primary-300 text-primary-700 hover:bg-primary-700 hover:text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Icon name="Github" size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <button
                onClick={prevProject}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary-700 hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
              <button
                onClick={nextProject}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary-700 hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
            </div>
          </div>

          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  index === activeProject
                    ? 'bg-white shadow-lg border-l-4 border-accent'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold mb-1 ${
                      index === activeProject ? 'text-accent' : 'text-primary-900'
                    }`}>
                      {project.title}
                    </h4>
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Icon name="TrendingUp" size={12} className="text-success" />
                      <span className="text-xs text-success font-medium">{project.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Link
            to="/experience"
            className="inline-flex items-center space-x-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 ease-smooth"
          >
            <span>View All Projects</span>
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;