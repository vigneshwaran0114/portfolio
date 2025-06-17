import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectCard = ({ project, index, viewMode, onOpenModal }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="bg-surface rounded-xl shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary-200"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative overflow-hidden">
            <div className="aspect-video md:aspect-square relative">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              {project.featured && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-surface text-xs font-semibold rounded-full">
                  Featured
                </div>
              )}
            </div>
          </div>
          
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-primary hover:text-accent transition-colors duration-300 cursor-pointer">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary text-xs font-medium rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <p className="text-text-secondary mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary-50 text-secondary-700 text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-2 py-1 bg-primary-100 text-text-secondary text-xs font-medium rounded">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Zap" size={14} />
                  <span>{project.metrics.performance}%</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{project.metrics.loadTime}</span>
                </div>
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
                  <Icon name="ExternalLink" size={16} />
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-primary-100 text-primary rounded-lg hover:bg-primary-200 transition-colors duration-300"
                >
                  <Icon name="Github" size={16} />
                </motion.a>
                <motion.button
                  onClick={() => onOpenModal(project)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-secondary text-surface rounded-lg hover:bg-secondary-700 transition-colors duration-300 text-sm font-medium"
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={hoverVariants}
      className="group bg-surface rounded-xl shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary-200 cursor-pointer"
      onClick={() => onOpenModal(project)}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video relative">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-surface text-xs font-semibold rounded-full">
              Featured
            </div>
          )}
          
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-surface/90 text-primary rounded-lg hover:bg-surface transition-colors duration-300"
            >
              <Icon name="ExternalLink" size={16} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-surface/90 text-primary rounded-lg hover:bg-surface transition-colors duration-300"
            >
              <Icon name="Github" size={16} />
            </motion.a>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between text-surface">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Icon name="Zap" size={14} />
                  <span>{project.metrics.performance}%</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{project.metrics.loadTime}</span>
                </div>
              </div>
              <span className="px-2 py-1 bg-surface/20 backdrop-blur-sm text-xs font-medium rounded capitalize">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-text-secondary mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary-50 text-secondary-700 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 bg-primary-100 text-text-secondary text-xs font-medium rounded">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Star" size={14} />
            <span>Performance: {project.metrics.performance}%</span>
          </div>
          
          <motion.div
            className="flex items-center space-x-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ x: 4 }}
          >
            <span>View Details</span>
            <Icon name="ArrowRight" size={14} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;