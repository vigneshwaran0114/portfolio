import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-primary-900/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-surface rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-surface/95 backdrop-blur-sm border-b border-primary-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                {project.featured && (
                  <span className="px-3 py-1 bg-accent text-surface text-sm font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-accent text-surface rounded-lg hover:bg-accent-600 transition-colors duration-300"
                >
                  <Icon name="ExternalLink" size={18} />
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-primary-100 text-primary rounded-lg hover:bg-primary-200 transition-colors duration-300"
                >
                  <Icon name="Github" size={18} />
                </motion.a>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-primary-100 text-primary rounded-lg hover:bg-primary-200 transition-colors duration-300"
                >
                  <Icon name="X" size={18} />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Project Image */}
              <div className="relative mb-8 rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Project Overview</h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-secondary-50 text-secondary-700 font-medium rounded-lg border border-secondary-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-success-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-success-600 mb-1">
                      {project.metrics.performance}%
                    </div>
                    <div className="text-sm text-success-700">Performance</div>
                  </div>
                  <div className="bg-secondary-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-secondary-600 mb-1">
                      {project.metrics.accessibility}%
                    </div>
                    <div className="text-sm text-secondary-700">Accessibility</div>
                  </div>
                  <div className="bg-accent-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-accent-600 mb-1">
                      {project.metrics.seo}%
                    </div>
                    <div className="text-sm text-accent-700">SEO</div>
                  </div>
                  <div className="bg-warning-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-warning-600 mb-1">
                      {project.metrics.loadTime}
                    </div>
                    <div className="text-sm text-warning-700">Load Time</div>
                  </div>
                </div>
              </div>

              {/* Case Study */}
              {project.caseStudy && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-6">Case Study</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Icon name="AlertCircle" size={20} className="mr-2 text-accent" />
                        Challenge
                      </h4>
                      <p className="text-text-secondary leading-relaxed pl-7">
                        {project.caseStudy.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Icon name="Lightbulb" size={20} className="mr-2 text-secondary" />
                        Solution
                      </h4>
                      <p className="text-text-secondary leading-relaxed pl-7">
                        {project.caseStudy.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Icon name="TrendingUp" size={20} className="mr-2 text-success" />
                        Results
                      </h4>
                      <ul className="space-y-2 pl-7">
                        {project.caseStudy.results.map((result, index) => (
                          <li key={index} className="flex items-center text-text-secondary">
                            <Icon name="CheckCircle" size={16} className="mr-2 text-success flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-primary-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-primary mb-4">Client Testimonial</h3>
                  <blockquote className="text-text-secondary italic mb-4 text-lg">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-surface font-semibold">
                        {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{project.testimonial.author}</div>
                      <div className="text-text-secondary text-sm">{project.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;