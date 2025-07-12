import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';

const LearningTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const timelineData = [
    {
      year: '2021',
      title: 'Foundation Year',
      description: 'Started my frontend development journey with core web technologies',
      achievements: [
        'Completed HTML, CSS, and JavaScript fundamentals',
        'Built first responsive websites',
        'Learned Git version control',
        'Created 10+ static websites'
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'Git', 'Responsive Design'],
      // certifications: [
      //   'freeCodeCamp Responsive Web Design',
      //   'JavaScript Algorithms and Data Structures'
      // ],
      projects: [
        'Personal Portfolio v1',
        'Local Business Website',
        'CSS Animation Showcase'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: 'BookOpen'
    },
    {
      year: '2022',
      title: 'Framework Mastery',
      description: 'Dove deep into React ecosystem and modern development tools',
      achievements: [
        'Mastered React hooks and component patterns',
        'Built complex single-page applications',
        'Learned state management with Redux',
        'Integrated APIs and handled async operations'
      ],
      skills: ['React', 'Redux', 'Next.js', 'TypeScript', 'REST APIs', 'Webpack'],
      // certifications: [
      //   'React Developer Certification',
      //   'Advanced JavaScript Concepts',
      //   'TypeScript Fundamentals'
      // ],
      projects: [
        'E-commerce Platform',
        'Task Management App',
        'Weather Dashboard'
      ],
      color: 'from-purple-500 to-pink-500',
      icon: 'Code2'
    },
    {
      year: '2023',
      title: 'Performance & Animation',
      description: 'Focused on performance optimization and advanced animations',
      achievements: [
        'Achieved 95+ Lighthouse scores consistently',
        'Mastered GSAP for complex animations',
        'Implemented advanced performance patterns',
        'Built accessible and inclusive interfaces'
      ],
      skills: ['GSAP', 'Framer Motion', 'Web Performance', 'Accessibility', 'PWA'],
      // certifications: [
      //   'Web Performance Optimization',
      //   'GSAP Professional',
      //   'Accessibility Specialist'
      // ],
      projects: [
        'Interactive Brand Experience',
        'Performance-Optimized SaaS',
        'Animated Portfolio Sites'
      ],
      color: 'from-green-500 to-emerald-500',
      icon: 'Zap'
    },
    {
      year: '2024+',
      title: 'Design Systems & Leadership',
      description: 'Advanced to design systems and mentoring other developers',
      achievements: [
        'Built comprehensive design systems',
        'Mentored junior developers',
        'Contributed to open-source projects',
        'Spoke at local developer meetups'
      ],
      skills: ['Design Systems', 'Component Libraries', 'Mentoring', 'Open Source'],
      // certifications: [
      //   'Design Systems Specialist',
      //   'Technical Leadership',
      //   'Open Source Contributor'
      // ],
      projects: [
        'Corporate Design System',
        'Open Source Component Library',
        'Developer Mentorship Program'
      ],
      color: 'from-orange-500 to-red-500',
      icon: 'Users'
    }
  ];

  // const currentYear = new Date().getFullYear();

  return (
    <section className="py-16 lg:py-4 bg-gradient-to-br from-background to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-trust-100 text-trust-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Clock" size={16} />
            <span>Learning Journey</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Three Years of Growth
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My continuous learning journey from web development fundamentals to 
            advanced frontend architecture and team leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-trust to-success transform md:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 transform md:-translate-x-1/2 z-10">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                    <Icon name={item.icon} size={16} color="white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="bg-surface rounded-xl p-6 shadow-sm border border-primary-200 card-hover cursor-pointer"
                    onClick={() => setSelectedYear(selectedYear === item.year ? null : item.year)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900">{item.title}</h3>
                      </div>
                      <Icon 
                        name={selectedYear === item.year ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        className="text-text-secondary" 
                      />
                    </div>

                    <p className="text-text-secondary mb-4">{item.description}</p>

                    {/* Skills Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-10 text-sm font-medium rounded-full`}
                        >
                          {skill}
                        </span>
                      ))}
                      {item.skills.length > 3 && (
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                          +{item.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Achievements Count */}
                    <div className="flex items-center justify-between text-sm text-text-secondary">
                      <span>{item.achievements.length} key achievements</span>
                      <span>{item.projects.length} major projects</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed View Modal */}
        <AnimatePresence>
          {selectedYear && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedYear(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-background rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const yearData = timelineData.find(item => item.year === selectedYear);
                  return (
                    <>
                      {/* Modal Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${yearData.color} flex items-center justify-center`}>
                            <Icon name={yearData.icon} size={24} color="white" />
                          </div>
                          <div>
                            <h2 className={`text-3xl font-bold bg-gradient-to-r ${yearData.color} bg-clip-text text-transparent`}>
                              {yearData.year}
                            </h2>
                            <h3 className="text-xl font-semibold text-primary-900">{yearData.title}</h3>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedYear(null)}
                          className="p-2 hover:bg-surface rounded-lg transition-colors duration-300"
                        >
                          <Icon name="X" size={20} />
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold text-primary-900 mb-3">Key Achievements</h4>
                            <ul className="space-y-2">
                              {yearData.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                                  <span className="text-text-secondary">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills */}
                          <div>
                            <h4 className="font-semibold text-primary-900 mb-3">Skills Acquired</h4>
                            <div className="flex flex-wrap gap-2">
                              {yearData.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className={`px-3 py-1 bg-gradient-to-r ${yearData.color} bg-opacity-10 text-sm font-medium rounded-full border border-opacity-20`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          {/* Certifications */}
                          {/* <div>
                            <h4 className="font-semibold text-primary-900 mb-3">Certifications</h4>
                            <div className="space-y-2">
                              {yearData?.certifications?.map((cert) => (
                                <div key={cert} className="flex items-center space-x-2">
                                  <Icon name="Award" size={16} className="text-warning-600" />
                                  <span className="text-text-secondary">{cert}</span>
                                </div>
                              ))}
                            </div>
                          </div> */}

                          {/* Projects */}
                          <div>
                            <h4 className="font-semibold text-primary-900 mb-3">Major Projects</h4>
                            <div className="space-y-2">
                              {yearData.projects.map((project, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <Icon name="Folder" size={16} className="text-accent" />
                                  <span className="text-text-secondary">{project}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-accent to-trust rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Learning Journey Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-1">20+</div>
              <div className="text-white/80">Skills Mastered</div>
            </div>
            {/* <div>
              <div className="text-3xl font-bold mb-1">12</div>
              <div className="text-white/80">Certifications</div>
            </div> */}
            <div>
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-white/80">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">3+</div>
              <div className="text-white/80">Years of Growth</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningTimeline;