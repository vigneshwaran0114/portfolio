import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import ProjectTypeSelector from './components/ProjectTypeSelector';
import AvailabilityIndicator from './components/AvailabilityIndicator';
import CollaborationProcess from './components/CollaborationProcess';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
import ContactMethods from './components/ContactMethods';

const ContactCollaborationHub = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-50 text-accent rounded-full text-sm font-medium">
                <Icon name="MessageCircle" size={16} />
                <span>Let's Create Something Amazing Together</span>
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-headline"
            >
              Collaboration
              <span className="block text-accent">Hub</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Ready to bring your digital vision to life? Let's discuss your project and explore how we can create exceptional user experiences together through thoughtful design and cutting-edge development.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <div className="flex items-center space-x-2 text-success-500">
                <Icon name="CheckCircle" size={20} />
                <span className="text-sm font-medium">Available for New Projects</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Clock" size={20} />
                <span className="text-sm">Response within 24 hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-surface rounded-2xl shadow-card p-8 mb-12"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 font-headline">
                  Start Your Project
                </h2>
                <p className="text-text-secondary">
                  Tell me about your project and let's explore how we can bring your vision to life.
                </p>
              </div>

              <ProjectTypeSelector />
              <ContactForm />
            </motion.div>

            {/* Collaboration Process */}
            <CollaborationProcess />
          </div>

          {/* Right Column - Contact Methods & Info */}
          <div className="space-y-8">
            <AvailabilityIndicator />
            <ContactMethods />
            <FrequentlyAskedQuestions />
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-surface mb-6 font-headline">
              Ready to Get Started?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a detailed project brief or just an idea, I'm here to help you create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="mailto:hello@digitalmotion.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-3 bg-accent text-surface font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300"
              >
                <Icon name="Mail" size={20} />
                <span>Send Email</span>
              </motion.a>
              <motion.a
                href="https://calendly.com/digitalmotion"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-3 bg-surface text-primary font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-300"
              >
                <Icon name="Calendar" size={20} />
                <span>Schedule Call</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactCollaborationHub;