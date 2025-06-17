import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PersonalIntroduction = () => {
  const personalInfo = {
    name: "Alex Morgan",
    title: "Motion-Driven Frontend Developer",
    location: "San Francisco, CA",
    experience: "8+ Years",
    biography: `I'm a passionate software engineer with over 8 years of experience specializing in frontend development. My journey in technology began with a fascination for building things that people interact with daily. This curiosity led me to pursue a degree in Computer Science and eventually specialize in creating intuitive, efficient, and beautiful web applications.

What drives me is the intersection of technology and human experience – finding ways to make complex systems feel simple and intuitive for users while maintaining technical excellence behind the scenes.`,
    highlights: [
      { icon: "Code", label: "8+ Years Experience", value: "Frontend Development" },
      { icon: "Users", label: "50+ Projects", value: "Delivered Successfully" },
      { icon: "Award", label: "15+ Certifications", value: "Technical Excellence" },
      { icon: "Globe", label: "Global Reach", value: "International Clients" }
    ]
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Personal Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-surface rounded-2xl p-6 shadow-card">
                <div className="aspect-square rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Alex Morgan - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Personal Details */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">{personalInfo.name}</h3>
                  <p className="text-accent font-semibold mb-4">{personalInfo.title}</p>
                  
                  <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={16} />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={16} />
                      <span>{personalInfo.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Icon name="Sparkles" size={24} color="white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon name="Zap" size={16} color="white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Biography & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Biography */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Crafting Digital Experiences
                <span className="block text-accent">Through Motion & Code</span>
              </h2>
              
              <div className="prose prose-lg max-w-none text-text-primary mb-8">
                <p className="mb-4 leading-relaxed">{personalInfo.biography}</p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-primary-50 rounded-xl p-4 text-center group hover:bg-accent-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-600 transition-colors duration-300">
                    <Icon name={highlight.icon} size={20} color="white" />
                  </div>
                  <h4 className="font-semibold text-primary text-sm mb-1">{highlight.label}</h4>
                  <p className="text-xs text-text-secondary">{highlight.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/portfolio-project-universe"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-surface font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="Eye" size={18} />
                <span>View Portfolio</span>
              </motion.a>
              
              <motion.a
                href="/skills-living-dashboard"
                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-surface transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="Code" size={18} />
                <span>Technical Skills</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalIntroduction;