import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import SkillsGrid from './components/SkillsGrid';
import SkillsInAction from './components/SkillsInAction';
import TechnologyRadar from './components/TechnologyRadar';
import LearningTimeline from './components/LearningTimeline';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: 'Grid3X3' },
    { id: 'frontend', name: 'Frontend', icon: 'Monitor' },
    { id: 'animation', name: 'Animation', icon: 'Zap' },
    { id: 'performance', name: 'Performance', icon: 'Gauge' },
    { id: 'design', name: 'Design Systems', icon: 'Palette' }
  ];

  const heroStats = [
    { label: 'Technologies Mastered', value: '20+', icon: 'Code2' },
    { label: 'Years of Experience', value: '3+', icon: 'Calendar' },
    { label: 'Projects Completed', value: '10+', icon: 'CheckCircle' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-background to-trust-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Interactive Skills Showcase</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
              Skills That
              <span className="block text-gradient">Perform Beautifully</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
              Explore my technical capabilities through interactive demonstrations. 
              Each skill is proven through real-world applications and measurable results.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-surface rounded-xl p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-trust rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name={stat.icon} size={20} color="white" />
                  </div>
                  <div className="text-2xl font-bold text-primary-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-surface text-text-secondary hover:bg-surface-hover hover:text-primary-900'
                }`}
              >
                <Icon name={category.icon} size={18} />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <SkillsGrid activeCategory={activeCategory} />

      {/* Skills in Action */}
      <SkillsInAction />

      {/* Technology Radar */}
      {/* <TechnologyRadar /> */}

      {/* Learning Timeline */}
      <LearningTimeline />

      {/* Call to Action */}
      <section className="py-16 lg:py-14 bg-gradient-to-r from-accent to-trust">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how these skills can bring your next project to life with 
              performance, beauty, and user-centered design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-accent font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl"
              >
                <span>Start a Project</span>
                <Icon name="ArrowRight" size={20} />
              </motion.a>
              <motion.a
                href="/experience"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-accent"
              >
                <span>View Experience</span>
                <Icon name="ExternalLink" size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;