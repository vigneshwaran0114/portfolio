import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValuesApproach = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const values = [
    {
      id: 1,
      icon: "Users",
      title: "User-Centered Design",
      subtitle: "People First, Technology Second",
      description: "Every decision starts with understanding user needs and creating experiences that feel intuitive and accessible.",
      details: `I believe that the best technology is invisible—it simply works. My approach begins with deep user research and empathy mapping to understand not just what users need to accomplish, but how they think and feel throughout their journey.

This means designing interfaces that reduce cognitive load, providing clear feedback for every interaction, and ensuring that complex functionality feels simple and natural. I regularly conduct usability testing and gather feedback to validate design decisions and continuously improve the user experience.

Accessibility isn't an afterthought—it's built into every component from the ground up, ensuring that everyone can use and enjoy the experiences I create.`,
      principles: [
        "Conduct user research before writing code",
        "Design for accessibility from day one",
        "Test with real users regularly",
        "Prioritize clarity over cleverness"
      ]
    },
    {
      id: 2,
      icon: "Zap",
      title: "Performance Excellence",
      subtitle: "Speed as a Feature",
      description: "Beautiful animations and rich interactions mean nothing if they compromise performance or user experience.",
      details: `Performance isn't just about fast loading times—it's about creating experiences that feel instant and responsive. I optimize every aspect of the frontend stack, from bundle sizes and image compression to animation performance and memory usage.

My approach includes implementing lazy loading, code splitting, and progressive enhancement to ensure that core functionality is available immediately while enhanced features load in the background. I use performance budgets and monitoring tools to maintain high standards throughout development.

Every animation is crafted with 60fps in mind, using hardware acceleration and efficient rendering techniques to ensure smooth interactions across all devices, from high-end desktops to budget mobile phones.`,
      principles: [
        "Optimize for Core Web Vitals",
        "Implement progressive enhancement",
        "Monitor real user metrics",
        "Design with performance budgets"
      ]
    },
    {
      id: 3,
      icon: "Layers",
      title: "Scalable Architecture",
      subtitle: "Building for Growth",
      description: "Creating component systems and code patterns that enable teams to move faster and build more consistently.",
      details: `Scalable architecture isn't just about handling more users—it's about creating systems that enable teams to work efficiently and maintain quality as projects grow. I design component libraries and design systems that provide consistency while allowing for flexibility and customization.

My approach emphasizes modular, reusable components with clear APIs and comprehensive documentation. I implement automated testing, linting, and deployment processes that catch issues early and maintain code quality across team members and project phases.

Every project becomes an opportunity to create patterns and tools that benefit future development, whether through shared component libraries, utility functions, or development workflows that reduce friction and increase productivity.`,
      principles: [
        "Create reusable component systems",
        "Document everything thoroughly",
        "Implement automated quality checks",
        "Design for team collaboration"
      ]
    },
    {
      id: 4,
      icon: "Heart",
      title: "Continuous Learning",
      subtitle: "Growth Through Curiosity",
      description: "Staying curious and embracing new technologies while maintaining focus on fundamental principles.",
      details: `The frontend landscape evolves rapidly, and I embrace this change as an opportunity to discover new ways to solve problems and create better experiences. I dedicate time each week to learning new technologies, exploring emerging patterns, and contributing to the developer community.

My learning approach balances staying current with new tools and frameworks while deepening my understanding of fundamental concepts like performance optimization, accessibility, and user experience design. I share knowledge through blog posts, open source contributions, and mentoring other developers.

I believe that the best developers are those who remain students throughout their careers, always questioning assumptions and looking for better ways to solve problems.`,
      principles: [
        "Dedicate time for continuous learning",
        "Share knowledge with the community",
        "Question assumptions regularly",
        "Balance new tech with fundamentals"
      ]
    },
    {
      id: 5,
      icon: "Target",
      title: "Quality Craftsmanship",
      subtitle: "Excellence in Every Detail",
      description: "Treating code as craft, with attention to detail, clean architecture, and maintainable solutions.",
      details: `Quality craftsmanship means caring about the details that users might never see but that make all the difference in maintainability, performance, and team productivity. I write code that is not just functional but readable, testable, and elegant.

This includes following consistent coding standards, writing comprehensive tests, and creating clear documentation. I believe that good code tells a story—it should be easy to understand, modify, and extend by other developers, including my future self.

Every project is an opportunity to practice and refine my craft, whether through exploring new animation techniques, optimizing performance, or finding more elegant solutions to complex problems.`,
      principles: [
        "Write self-documenting code",
        "Implement comprehensive testing",
        "Follow consistent standards",
        "Refactor regularly for clarity"
      ]
    },
    {
      id: 6,
      icon: "Globe",
      title: "Collaborative Spirit",
      subtitle: "Better Together",
      description: "Building bridges between design, development, and business teams to create cohesive, successful products.",
      details: `Great products are never created in isolation—they emerge from effective collaboration between diverse perspectives and skill sets. I work closely with designers to understand the vision and intent behind every interaction, with product managers to align on business goals, and with backend developers to ensure seamless integration.

My approach emphasizes clear communication, shared understanding, and mutual respect. I translate between technical and non-technical stakeholders, helping everyone understand constraints and possibilities while finding solutions that satisfy both user needs and business objectives.

I believe that the best solutions emerge when everyone feels heard and valued, and when technical decisions are made with full context of user needs and business goals.`,
      principles: [
        "Communicate clearly across disciplines",
        "Seek to understand before being understood",
        "Build consensus around decisions",
        "Share knowledge and context freely"
      ]
    }
  ];

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Values & Approach
            <span className="block text-accent">Principles That Guide My Work</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The core beliefs and methodologies that shape every project and interaction
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface rounded-2xl shadow-card hover:shadow-lg transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={value.icon} size={24} color="white" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{value.subtitle}</p>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </div>

              {/* Expand Button */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => toggleCard(value.id)}
                  className="flex items-center space-x-2 text-accent hover:text-accent-600 font-semibold text-sm transition-colors duration-300"
                >
                  <span>{expandedCard === value.id ? 'Show Less' : 'Learn More'}</span>
                  <motion.div
                    animate={{ rotate: expandedCard === value.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon name="ChevronDown" size={16} />
                  </motion.div>
                </button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedCard === value.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-primary-200"
                  >
                    <div className="p-6">
                      {/* Detailed Description */}
                      <div className="prose prose-sm max-w-none text-text-secondary mb-6">
                        <p className="leading-relaxed">{value.details}</p>
                      </div>

                      {/* Principles */}
                      <div>
                        <h4 className="font-semibold text-primary mb-4">Key Principles:</h4>
                        <ul className="space-y-2">
                          {value.principles.map((principle, principleIndex) => (
                            <li key={principleIndex} className="flex items-start space-x-3">
                              <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">{principle}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Working Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-surface rounded-2xl p-8 lg:p-12 shadow-card"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              My Working Philosophy
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              How these values translate into daily practice and project outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" size={24} color="white" />
              </div>
              <h4 className="font-bold text-primary mb-3">Think First, Code Second</h4>
              <p className="text-text-secondary text-sm">
                Every project begins with understanding the problem deeply before jumping into solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Repeat" size={24} color="white" />
              </div>
              <h4 className="font-bold text-primary mb-3">Iterate and Improve</h4>
              <p className="text-text-secondary text-sm">
                Continuous refinement based on feedback, testing, and new insights leads to better outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} color="white" />
              </div>
              <h4 className="font-bold text-primary mb-3">Collaborate and Share</h4>
              <p className="text-text-secondary text-sm">
                The best solutions emerge from diverse perspectives and open knowledge sharing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesApproach;