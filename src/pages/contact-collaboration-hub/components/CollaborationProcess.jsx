import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CollaborationProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Initial Consultation',
      description: `We'll start with a detailed discussion about your project goals, target audience, technical requirements, and timeline. This helps me understand your vision and provide accurate estimates.`,icon: 'MessageSquare',duration: '30-60 minutes',
      deliverables: ['Project scope document', 'Technical recommendations', 'Timeline estimate', 'Detailed proposal']
    },
    {
      id: 2,
      title: 'Planning & Design',description: `I'll create wireframes, technical architecture, and project roadmap. We'll define the tech stack, component structure, and animation specifications before development begins.`,
      icon: 'Layout',duration: '3-7 days',
      deliverables: ['Wireframes & mockups', 'Technical architecture', 'Component breakdown', 'Animation specifications']
    },
    {
      id: 3,
      title: 'Development Sprint',description: `Iterative development with regular check-ins and demos. You'll see progress weekly with functional prototypes and can provide feedback throughout the development process.`,
      icon: 'Code',
      duration: 'Project dependent',
      deliverables: ['Weekly progress demos', 'Functional prototypes', 'Code reviews', 'Performance reports']
    },
    {
      id: 4,
      title: 'Testing & Refinement',
      description: `Comprehensive testing across devices and browsers, performance optimization, accessibility compliance, and final refinements based on your feedback and testing results.`,
      icon: 'TestTube',
      duration: '3-5 days',
      deliverables: ['Cross-browser testing', 'Performance optimization', 'Accessibility audit', 'Bug fixes & refinements']
    },
    {
      id: 5,
      title: 'Deployment & Handover',
      description: `Production deployment, documentation handover, and training session. I'll ensure smooth launch and provide ongoing support for any immediate issues or questions.`,
      icon: 'Rocket',duration: '1-2 days',
      deliverables: ['Production deployment', 'Documentation package', 'Training session', '30-day support period']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-surface rounded-2xl shadow-card p-8"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4 font-headline">
          Collaboration Process
        </h2>
        <p className="text-text-secondary">
          A transparent, iterative approach that keeps you involved every step of the way, 
          ensuring your vision becomes reality through clear communication and regular feedback.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            variants={itemVariants}
            className="relative"
          >
            {/* Connection Line */}
            {index < processSteps.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-accent to-accent-300 opacity-30" />
            )}

            <div className="flex items-start space-x-6">
              {/* Step Icon */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gradient-to-br from-accent to-accent-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Icon name={step.icon} size={24} color="white" />
                </motion.div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-surface">{step.id}</span>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
                  <div className="flex items-center space-x-1 text-text-secondary text-sm">
                    <Icon name="Clock" size={14} />
                    <span>{step.duration}</span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="bg-primary-50 rounded-lg p-4">
                  <h4 className="font-medium text-primary mb-3 flex items-center space-x-2">
                    <Icon name="Package" size={16} />
                    <span>Key Deliverables</span>
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {step.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={14} color="var(--color-success)" />
                        <span className="text-sm text-text-secondary">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Process Benefits */}
      <div className="mt-12 pt-8 border-t border-primary-200">
        <h3 className="text-lg font-semibold text-primary mb-6">Why This Process Works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: 'Eye',
              title: 'Full Transparency',
              description: 'Regular updates and demos keep you informed of progress at every stage.'
            },
            {
              icon: 'Users',
              title: 'Collaborative Approach',
              description: 'Your feedback shapes the development process, ensuring the final product meets your vision.'
            },
            {
              icon: 'Shield',
              title: 'Quality Assurance',
              description: 'Rigorous testing and optimization ensure a polished, professional result.'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-4"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit.icon} size={24} color="var(--color-accent)" />
              </div>
              <h4 className="font-semibold text-primary mb-2">{benefit.title}</h4>
              <p className="text-text-secondary text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CollaborationProcess;