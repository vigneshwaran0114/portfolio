import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProjectTypeSelector = () => {
  const [selectedType, setSelectedType] = useState(null);

  const projectTypes = [
    {
      id: 'react-development',
      title: 'React Development',
      description: 'Custom React applications with modern hooks, state management, and performance optimization.',
      icon: 'Code',
      features: ['Component Architecture', 'State Management', 'Performance Optimization', 'Testing'],
      timeline: '2-8 weeks',
      startingPrice: '$5,000'
    },
    {
      id: 'animation-implementation',
      title: 'Animation Implementation',
      description: 'Engaging micro-interactions and smooth animations using GSAP and Framer Motion.',
      icon: 'Zap',
      features: ['Micro-interactions', 'Page Transitions', 'Loading Animations', 'Scroll Effects'],
      timeline: '1-4 weeks',
      startingPrice: '$2,500'
    },
    {
      id: 'full-website-build',
      title: 'Full Website Build',
      description: 'Complete website development from design to deployment with responsive design.',
      icon: 'Globe',
      features: ['Responsive Design', 'SEO Optimization', 'CMS Integration', 'Deployment'],
      timeline: '4-12 weeks',
      startingPrice: '$8,000'
    },
    {
      id: 'consultation',
      title: 'Technical Consultation',
      description: 'Expert advice on architecture, performance, best practices, and code reviews.',
      icon: 'MessageSquare',
      features: ['Code Review', 'Architecture Planning', 'Performance Audit', 'Best Practices'],
      timeline: '1-2 weeks',
      startingPrice: '$150/hour'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-primary mb-3 font-headline">
          What type of project are you looking for?
        </h3>
        <p className="text-text-secondary">
          Select the service that best matches your needs. This helps me understand your requirements better.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-6"
      >
        {projectTypes.map((type) => (
          <motion.div
            key={type.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
            className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              selectedType === type.id
                ? 'border-accent bg-accent-50 shadow-lg'
                : 'border-primary-200 bg-surface hover:border-accent hover:shadow-md'
            }`}
          >
            {/* Selection Indicator */}
            <div className="absolute top-4 right-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                selectedType === type.id
                  ? 'border-accent bg-accent' :'border-primary-300'
              }`}>
                {selectedType === type.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon name="Check" size={14} color="white" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Icon */}
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
              selectedType === type.id
                ? 'bg-accent text-surface' :'bg-primary-100 text-primary'
            }`}>
              <Icon name={type.icon} size={24} />
            </div>

            {/* Content */}
            <h4 className="text-lg font-semibold text-primary mb-2">
              {type.title}
            </h4>
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              {type.description}
            </p>

            {/* Features */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {type.features.map((feature, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${
                      selectedType === type.id
                        ? 'bg-accent-100 text-accent-700' :'bg-primary-100 text-primary-600'
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing & Timeline */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1 text-text-secondary">
                <Icon name="Clock" size={14} />
                <span>{type.timeline}</span>
              </div>
              <div className="font-semibold text-primary">
                Starting at {type.startingPrice}
              </div>
            </div>

            {/* Expanded Details */}
            <motion.div
              initial={false}
              animate={{
                height: selectedType === type.id ? 'auto' : 0,
                opacity: selectedType === type.id ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {selectedType === type.id && (
                <div className="mt-4 pt-4 border-t border-accent-200">
                  <div className="flex items-center space-x-2 text-accent">
                    <Icon name="CheckCircle" size={16} />
                    <span className="text-sm font-medium">Perfect choice! This matches your needs.</span>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {selectedType && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gradient-to-r from-accent-50 to-secondary-50 rounded-xl border border-accent-200"
        >
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Lightbulb" size={20} color="white" />
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Great Choice!</h4>
              <p className="text-text-secondary text-sm">
                You've selected <strong>{projectTypes.find(t => t.id === selectedType)?.title}</strong>. 
                This information will help me provide you with a more accurate proposal and timeline. 
                Continue with the form below to share more details about your specific requirements.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectTypeSelector;