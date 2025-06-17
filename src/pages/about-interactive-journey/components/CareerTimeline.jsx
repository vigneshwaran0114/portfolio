import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CareerTimeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const milestones = [
    {
      id: 1,
      year: "2016",
      title: "First Steps in Code",
      company: "Self-Taught Journey",
      type: "education",
      icon: "BookOpen",
      description: "Started my programming journey with HTML, CSS, and JavaScript. Built my first website and fell in love with the power of code to create interactive experiences.",
      achievements: [
        "Completed 500+ hours of online courses",
        "Built 10+ personal projects",
        "Learned fundamental programming concepts"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
    },
    {
      id: 2,
      year: "2017",
      title: "Junior Frontend Developer",
      company: "TechStart Solutions",
      type: "work",
      icon: "Briefcase",
      description: "Joined my first development team and learned the importance of collaboration, code reviews, and professional development practices.",
      achievements: [
        "Contributed to 15+ client projects",
        "Improved page load speeds by 40%",
        "Mentored 2 intern developers"
      ],
      technologies: ["React", "SASS", "Git", "Webpack"]
    },
    {
      id: 3,
      year: "2019",
      title: "Frontend Developer",
      company: "Digital Innovations Inc",
      type: "work",
      icon: "Code",
      description: "Specialized in React development and began exploring animation libraries. Led the frontend architecture for several high-profile projects.",
      achievements: [
        "Led frontend team of 4 developers",
        "Implemented design system used across 20+ projects",
        "Reduced development time by 30% through reusable components"
      ],
      technologies: ["React", "TypeScript", "GSAP", "Styled Components"]
    },
    {
      id: 4,
      year: "2021",
      title: "Senior Frontend Developer",
      company: "Motion Labs",
      type: "work",
      icon: "Zap",
      description: "Focused on creating motion-rich web experiences and performance optimization. Became the go-to expert for complex animations and interactions.",
      achievements: [
        "Delivered 25+ animation-heavy projects",
        "Improved user engagement by 60%",
        "Spoke at 3 frontend conferences"
      ],
      technologies: ["React", "GSAP", "Framer Motion", "Three.js"]
    },
    {
      id: 5,
      year: "2023",
      title: "Lead Motion Developer",
      company: "Freelance & Consulting",
      type: "freelance",
      icon: "Sparkles",
      description: "Transitioned to freelance work, specializing in motion design and frontend architecture for premium brands and startups.",
      achievements: [
        "Worked with 15+ international clients",
        "Generated $200K+ in revenue",
        "Built motion design framework used by 100+ developers"
      ],
      technologies: ["React", "Next.js", "GSAP", "WebGL", "Node.js"]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'education': return 'bg-secondary';
      case 'work': return 'bg-accent';
      case 'freelance': return 'bg-success-500';
      default: return 'bg-primary';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education': return 'GraduationCap';
      case 'work': return 'Building';
      case 'freelance': return 'Users';
      default: return 'Circle';
    }
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
            Career Journey
            <span className="block text-accent">From Code to Motion</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Every milestone has shaped my approach to creating engaging digital experiences
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary-200"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-16 h-16 ${getTypeColor(milestone.type)} rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon name={milestone.icon} size={24} color="white" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="bg-surface rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedMilestone(milestone)}
                  >
                    {/* Year Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                      <div className={`w-8 h-8 ${getTypeColor(milestone.type)} rounded-full flex items-center justify-center`}>
                        <Icon name={getTypeIcon(milestone.type)} size={16} color="white" />
                      </div>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-accent font-semibold mb-4">{milestone.company}</p>

                    {/* Description */}
                    <p className="text-text-secondary mb-4 line-clamp-3">{milestone.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {milestone.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {milestone.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-accent-100 text-accent text-xs font-medium rounded-full">
                          +{milestone.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <button className="flex items-center space-x-2 text-accent hover:text-accent-600 font-semibold text-sm transition-colors duration-300">
                      <span>View Details</span>
                      <Icon name="ArrowRight" size={16} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestone Detail Modal */}
        <AnimatePresence>
          {selectedMilestone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMilestone(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-surface rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-accent">{selectedMilestone.year}</span>
                    <h3 className="text-2xl font-bold text-primary mt-2">{selectedMilestone.title}</h3>
                    <p className="text-accent font-semibold">{selectedMilestone.company}</p>
                  </div>
                  <button
                    onClick={() => setSelectedMilestone(null)}
                    className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon name="X" size={20} />
                  </button>
                </div>

                {/* Description */}
                <p className="text-text-primary mb-6 leading-relaxed">{selectedMilestone.description}</p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedMilestone.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success-500 mt-1 flex-shrink-0" />
                        <span className="text-text-secondary">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMilestone.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary-100 text-primary font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CareerTimeline;