import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CareerHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Technical Leadership",
      description: "Led cross-functional teams in delivering complex frontend solutions",
      icon: "Users",
      color: "accent",
      achievements: [
        "Mentored 8+ junior developers",
        "Established coding standards across teams",
        "Reduced onboarding time by 50%"
      ]
    },
    {
      id: 2,
      title: "Performance Optimization",
      description: "Consistently improved application performance and user experience",
      icon: "Zap",
      color: "warning",
      achievements: [
        "Average 60% performance improvement",
        "Reduced bundle sizes by 40%",
        "Achieved 95+ Lighthouse scores"
      ]
    },
    {
      id: 3,
      title: "Innovation & Research",
      description: "Pioneered new technologies and development approaches",
      icon: "Lightbulb",
      color: "success",
      achievements: [
        "Introduced 5+ new technologies",
        "Published 3 technical articles",
        "Spoke at 2 developer conferences"
      ]
    },
    {
      id: 4,
      title: "Client Success",
      description: "Delivered exceptional results that exceeded client expectations",
      icon: "Award",
      color: "secondary",
      achievements: [
        "98% client satisfaction rate",
        "Zero missed deadlines in 2 years",
        "Generated $2M+ in client value"
      ]
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
            Career Highlights
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Key achievements and milestones that define my professional journey and impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-surface rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-primary-100"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 bg-${highlight.color}-50 rounded-2xl flex items-center justify-center`}>
                  <Icon 
                    name={highlight.icon} 
                    size={32} 
                    className={`text-${highlight.color}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 font-headline">
                  {highlight.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {highlight.description}
                </p>
              </div>

              <div className="space-y-3">
                {highlight.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0" />
                    <span className="text-sm text-text-primary">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`mt-6 w-full h-1 bg-gradient-to-r from-${highlight.color} to-${highlight.color}-600 rounded-full`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 font-headline">
            Recognition & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                award: "Developer of the Year",
                organization: "TechFlow Solutions",
                year: "2023",
                icon: "Trophy"
              },
              {
                award: "Innovation Excellence",
                organization: "Digital Innovations Inc",
                year: "2022",
                icon: "Star"
              },
              {
                award: "Outstanding Performance",
                organization: "StartupLab",
                year: "2020",
                icon: "Medal"
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-surface rounded-xl p-6 shadow-card border border-primary-100"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-accent-50 rounded-xl flex items-center justify-center">
                  <Icon name={award.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-bold text-primary mb-1">{award.award}</h4>
                <p className="text-sm text-text-secondary mb-1">{award.organization}</p>
                <p className="text-xs text-accent font-semibold">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerHighlights;