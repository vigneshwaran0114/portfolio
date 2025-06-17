import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../components/AppIcon';

import PersonalIntroduction from './components/PersonalIntroduction';
import CareerTimeline from './components/CareerTimeline';
import TechnicalEvolution from './components/TechnicalEvolution';
import BehindTheCode from './components/BehindTheCode';
import GitHubContributions from './components/GitHubContributions';
import ValuesApproach from './components/ValuesApproach';

const AboutInteractiveJourney = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 0.6]);

  useEffect(() => {
    document.title = "About - Interactive Journey | DevMotion Portfolio";
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Animated Background Elements */}
      <motion.div 
        className="fixed inset-0 z-0 opacity-30"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full blur-2xl"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                The Journey Behind
                <span className="block text-accent">The Motion</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Discover the story, passion, and philosophy that drives every line of code and every animated interaction
              </p>
            </motion.div>
          </div>
        </section>

        {/* Personal Introduction */}
        <PersonalIntroduction />

        {/* Career Timeline */}
        <CareerTimeline />

        {/* Technical Evolution */}
        <TechnicalEvolution />

        {/* Behind the Code */}
        <BehindTheCode />

        {/* GitHub Contributions */}
        <GitHubContributions />

        {/* Values & Approach */}
        <ValuesApproach />

        {/* Call to Action */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with motion-driven experiences that captivate and engage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/portfolio-project-universe"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-surface font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon name="Briefcase" size={20} />
                  <span>View My Work</span>
                </motion.a>
                <motion.a
                  href="/contact-collaboration-hub"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-surface transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon name="MessageCircle" size={20} />
                  <span>Let's Connect</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutInteractiveJourney;