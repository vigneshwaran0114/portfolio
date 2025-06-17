import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      description: 'Best for detailed project discussions',
      value: 'hello@digitalmotion.dev',
      icon: 'Mail',
      action: 'mailto:hello@digitalmotion.dev',
      responseTime: '< 24 hours',
      preferred: true
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Professional networking and quick questions',
      value: '/in/digital-motion-dev',
      icon: 'Linkedin',
      action: 'https://linkedin.com/in/digital-motion-dev',
      responseTime: '< 48 hours',
      preferred: false
    },
    {
      id: 'calendar',
      title: 'Schedule a Call',
      description: 'Free 30-minute consultation',
      value: 'Book a time slot',
      icon: 'Calendar',
      action: 'https://calendly.com/digitalmotion',
      responseTime: 'Immediate',
      preferred: false
    },
    {
      id: 'github',
      title: 'GitHub',
      description: 'View my code and open source work',
      value: '@digital-motion-dev',
      icon: 'Github',
      action: 'https://github.com/digital-motion-dev',
      responseTime: 'N/A',
      preferred: false
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-surface rounded-2xl shadow-card p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2 font-headline">
          Get in Touch
        </h3>
        <p className="text-text-secondary text-sm">
          Multiple ways to connect based on your preference
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {contactMethods.map((method) => (
          <motion.a
            key={method.id}
            href={method.action}
            target={method.id !== 'email' ? '_blank' : undefined}
            rel={method.id !== 'email' ? 'noopener noreferrer' : undefined}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`block p-4 rounded-lg border-2 transition-all duration-300 group ${
              method.preferred
                ? 'border-accent bg-accent-50 hover:border-accent-600 hover:bg-accent-100' :'border-primary-200 bg-surface hover:border-accent hover:bg-primary-50'
            }`}
          >
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                method.preferred
                  ? 'bg-accent text-surface group-hover:bg-accent-600' :'bg-primary-100 text-primary group-hover:bg-accent group-hover:text-surface'
              }`}>
                <Icon name={method.icon} size={20} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {method.title}
                  </h4>
                  {method.preferred && (
                    <span className="px-2 py-0.5 bg-accent text-surface text-xs rounded-full font-medium">
                      Preferred
                    </span>
                  )}
                </div>
                <p className="text-text-secondary text-sm mb-1 group-hover:text-text-primary transition-colors duration-300">
                  {method.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary font-mono truncate">
                    {method.value}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {method.responseTime}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                className="text-text-secondary group-hover:text-accent transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Icon name="ExternalLink" size={16} />
              </motion.div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Quick Contact Info */}
      <div className="mt-6 pt-6 border-t border-primary-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-accent mb-1">24h</div>
            <div className="text-xs text-text-secondary">Response Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">EST</div>
            <div className="text-xs text-text-secondary">Timezone</div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 pt-6 border-t border-primary-200">
        <h4 className="font-medium text-primary mb-4 text-sm">Follow My Work</h4>
        <div className="flex items-center space-x-3">
          {[
            { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/digitalmotion' },
            { name: 'Dribbble', icon: 'Dribbble', url: 'https://dribbble.com/digitalmotion' },
            { name: 'CodePen', icon: 'Code', url: 'https://codepen.io/digitalmotion' }
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary hover:bg-accent hover:text-surface transition-all duration-300"
              aria-label={social.name}
            >
              <Icon name={social.icon} size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMethods;