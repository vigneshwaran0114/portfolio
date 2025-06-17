import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const LearningJourney = () => {
  const [activeCategory, setActiveCategory] = useState('certifications');

  const learningData = {
    certifications: [
      {
        id: 1,
        title: "React Developer Certification",
        provider: "Meta",
        date: "2023",
        status: "Completed",
        description: "Advanced React patterns, hooks, and performance optimization techniques",
        skills: ["React 18", "Hooks", "Context API", "Performance"],
        icon: "Award",
        color: "accent"
      },
      {
        id: 2,
        title: "Frontend Masters Complete",
        provider: "Frontend Masters",
        date: "2022",
        status: "Completed",
        description: "Comprehensive frontend development curriculum covering modern frameworks",
        skills: ["JavaScript", "TypeScript", "CSS", "Testing"],
        icon: "BookOpen",
        color: "secondary"
      },
      {
        id: 3,
        title: "AWS Cloud Practitioner",
        provider: "Amazon Web Services",
        date: "2023",
        status: "In Progress",
        description: "Cloud computing fundamentals and AWS services overview",
        skills: ["Cloud Computing", "AWS", "DevOps", "Deployment"],
        icon: "Cloud",
        color: "warning"
      }
    ],
    conferences: [
      {
        id: 1,
        title: "React Conf 2023",
        provider: "Meta",
        date: "2023",
        status: "Attended",
        description: "Latest React features, Server Components, and ecosystem updates",
        skills: ["React", "Server Components", "Concurrent Features"],
        icon: "Users",
        color: "accent"
      },
      {
        id: 2,
        title: "Frontend Nation",
        provider: "Frontend Nation",
        date: "2022",
        status: "Speaker",
        description: "Presented on \'Building Performant React Applications'",
        skills: ["Performance", "React", "Optimization"],
        icon: "Mic",
        color: "success"
      },
      {
        id: 3,
        title: "JSConf US",
        provider: "JSConf",
        date: "2022",
        status: "Attended",
        description: "JavaScript ecosystem trends and emerging technologies",
        skills: ["JavaScript", "Web APIs", "Future Tech"],
        icon: "Globe",
        color: "secondary"
      }
    ],
    courses: [
      {
        id: 1,
        title: "Advanced TypeScript",
        provider: "TypeScript Deep Dive",
        date: "2023",
        status: "Completed",
        description: "Type system mastery, generics, and advanced patterns",
        skills: ["TypeScript", "Type Safety", "Generics"],
        icon: "Code",
        color: "primary"
      },
      {
        id: 2,
        title: "Web Performance Optimization",
        provider: "Google Developers",
        date: "2022",
        status: "Completed",
        description: "Core Web Vitals, loading strategies, and performance monitoring",
        skills: ["Performance", "Core Web Vitals", "Optimization"],
        icon: "Zap",
        color: "warning"
      },
      {
        id: 3,
        title: "Design Systems",
        provider: "Design+Code",
        date: "2021",
        status: "Completed",
        description: "Building scalable design systems and component libraries",
        skills: ["Design Systems", "Components", "Scalability"],
        icon: "Layers",
        color: "accent"
      }
    ]
  };

  const categories = [
    { key: 'certifications', label: 'Certifications', icon: 'Award' },
    { key: 'conferences', label: 'Conferences', icon: 'Users' },
    { key: 'courses', label: 'Courses', icon: 'BookOpen' }
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'warning';
      case 'Speaker': return 'accent';
      case 'Attended': return 'secondary';
      default: return 'primary';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
            Learning Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Continuous education and professional development through certifications, conferences, and specialized courses.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-accent text-surface shadow-lg'
                  : 'bg-surface text-text-primary hover:bg-primary-50 border border-primary-200'
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Learning Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {learningData[activeCategory].map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-surface rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-primary-100"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-${item.color}-50 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon name={item.icon} size={24} className={`text-${item.color}`} />
                  </div>
                  <div className={`px-3 py-1 bg-${getStatusColor(item.status)}-50 text-${getStatusColor(item.status)} text-xs font-semibold rounded-full`}>
                    {item.status}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-primary mb-2 font-headline">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary mb-3">
                    <Icon name="Building" size={14} />
                    <span>{item.provider}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="text-text-primary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-50 text-primary text-xs font-medium rounded-md border border-primary-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-primary-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.status === 'Completed' || item.status === 'Speaker' || item.status === 'Attended' ? '100%' : '60%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className={`h-2 bg-gradient-to-r from-${item.color} to-${item.color}-600 rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Learning Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-surface rounded-2xl p-8 shadow-card border border-primary-100"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 text-center font-headline">
            Learning Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Certifications', value: '8+', icon: 'Award' },
              { label: 'Conferences', value: '12+', icon: 'Users' },
              { label: 'Courses', value: '25+', icon: 'BookOpen' },
              { label: 'Learning Hours', value: '500+', icon: 'Clock' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-50 rounded-2xl flex items-center justify-center">
                  <Icon name={stat.icon} size={28} className="text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 font-headline">
            2024 Learning Goals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                goal: "Master Next.js 14",
                description: "Deep dive into App Router and Server Components",
                progress: 40
              },
              {
                goal: "AI/ML Integration",
                description: "Learn to integrate AI capabilities into web apps",
                progress: 20
              },
              {
                goal: "Web3 Development",
                description: "Explore blockchain and decentralized applications",
                progress: 10
              }
            ].map((goal, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-surface rounded-xl p-6 shadow-card border border-primary-100"
              >
                <h4 className="font-bold text-primary mb-2">{goal.goal}</h4>
                <p className="text-sm text-text-secondary mb-4">{goal.description}</p>
                <div className="w-full bg-primary-100 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${goal.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-2 bg-gradient-to-r from-accent to-accent-600 rounded-full"
                  />
                </div>
                <div className="text-xs text-text-secondary text-right">{goal.progress}% Complete</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningJourney;