import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineItem = ({ experience, index, isActive, onActivate }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: true });
  const isEven = index % 2 === 0;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}
    >
      {/* Timeline Node */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-6 h-6 bg-accent rounded-full border-4 border-surface shadow-lg cursor-pointer"
          onClick={onActivate}
        />
      </div>

      {/* Content Card */}
      <motion.div
        variants={itemVariants}
        className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'} mb-8 lg:mb-0`}
      >
        <div className="bg-surface rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-primary-100">
          {/* Company Header */}
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-primary-50 flex-shrink-0">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-1 font-headline">
                {experience.position}
              </h3>
              <p className="text-accent font-semibold mb-1">{experience.company}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                <span className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{experience.duration}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="MapPin" size={14} />
                  <span>{experience.location}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Briefcase" size={14} />
                  <span>{experience.type}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-text-primary leading-relaxed whitespace-pre-line">
              {experience.description}
            </p>
          </div>

          {/* Key Achievements */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-primary mb-3 flex items-center space-x-2">
              <Icon name="Trophy" size={18} className="text-accent" />
              <span>Key Achievements</span>
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start space-x-2 text-text-primary"
                >
                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-primary mb-3 flex items-center space-x-2">
              <Icon name="Code" size={18} className="text-accent" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-primary-50 text-primary text-sm font-medium rounded-full border border-primary-200 hover:bg-primary-100 transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-primary mb-3 flex items-center space-x-2">
              <Icon name="Folder" size={18} className="text-accent" />
              <span>Featured Projects</span>
            </h4>
            <div className="space-y-3">
              {experience.projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-4 bg-primary-50 rounded-lg border border-primary-200 hover:border-accent transition-colors duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-semibold text-primary">{project.name}</h5>
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      className="text-accent hover:text-accent-600 transition-colors duration-200"
                    >
                      <Icon name="ExternalLink" size={16} />
                    </motion.a>
                  </div>
                  <p className="text-sm text-text-secondary mb-2">{project.description}</p>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={14} className="text-success" />
                    <span className="text-sm font-medium text-success">{project.impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <motion.div
            variants={itemVariants}
            className="p-4 bg-gradient-to-r from-accent-50 to-secondary-50 rounded-lg border border-accent-200"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={experience.testimonial.avatar}
                  alt={experience.testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-primary italic mb-2">
                  "{experience.testimonial.text}"
                </p>
                <div className="text-xs text-text-secondary">
                  <span className="font-semibold">{experience.testimonial.author}</span>
                  <span className="mx-1">•</span>
                  <span>{experience.testimonial.role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Timeline Indicator */}
      <div className="lg:hidden w-full flex justify-center mb-8">
        <div className="w-4 h-4 bg-accent rounded-full border-4 border-surface shadow-lg" />
      </div>
    </motion.div>
  );
};

export default TimelineItem;