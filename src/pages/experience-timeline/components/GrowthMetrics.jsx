import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';

const GrowthMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    experience: 0
  });

  const finalValues = {
    projects: 52,
    clients: 28,
    satisfaction: 98,
    experience: 5.2
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedValues({
        projects: Math.round(finalValues.projects * easeOutQuart),
        clients: Math.round(finalValues.clients * easeOutQuart),
        satisfaction: Math.round(finalValues.satisfaction * easeOutQuart),
        experience: (finalValues.experience * easeOutQuart).toFixed(1)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const skillGrowthData = [
    { year: '2019', react: 30, javascript: 60, css: 70, performance: 20 },
    { year: '2020', react: 55, javascript: 75, css: 85, performance: 40 },
    { year: '2021', react: 75, javascript: 85, css: 90, performance: 65 },
    { year: '2022', react: 90, javascript: 92, css: 95, performance: 80 },
    { year: '2023', react: 95, javascript: 95, css: 98, performance: 90 }
  ];

  const projectTypeData = [
    { name: 'E-commerce', value: 35, color: '#e94560' },
    { name: 'SaaS Platforms', value: 25, color: '#16213e' },
    { name: 'Corporate Sites', value: 20, color: '#1a1a2e' },
    { name: 'Mobile Apps', value: 12, color: '#64748b' },
    { name: 'Other', value: 8, color: '#94a3b8' }
  ];

  const performanceData = [
    { metric: 'Page Speed', before: 45, after: 92 },
    { metric: 'Accessibility', before: 65, after: 98 },
    { metric: 'SEO Score', before: 70, after: 95 },
    { metric: 'User Satisfaction', before: 75, after: 96 }
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
            Growth Metrics
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Quantifiable progress and achievements that demonstrate continuous professional development.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'Projects Completed', value: animatedValues.projects, suffix: '+', icon: 'Folder' },
            { label: 'Happy Clients', value: animatedValues.clients, suffix: '+', icon: 'Users' },
            { label: 'Client Satisfaction', value: animatedValues.satisfaction, suffix: '%', icon: 'Heart' },
            { label: 'Years Experience', value: animatedValues.experience, suffix: '', icon: 'Clock' }
          ].map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-surface rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border border-primary-100 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-accent-50 rounded-xl flex items-center justify-center">
                <Icon name={metric.icon} size={24} className="text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {metric.value}{metric.suffix}
              </div>
              <div className="text-sm text-text-secondary">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-surface rounded-2xl p-8 shadow-card border border-primary-100 mb-16"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 font-headline flex items-center space-x-2">
            <Icon name="TrendingUp" size={24} className="text-accent" />
            <span>Skill Development Over Time</span>
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={skillGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#ffffff', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line type="monotone" dataKey="react" stroke="#e94560" strokeWidth={3} dot={{ fill: '#e94560', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="javascript" stroke="#16213e" strokeWidth={3} dot={{ fill: '#16213e', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="css" stroke="#1a1a2e" strokeWidth={3} dot={{ fill: '#1a1a2e', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="performance" stroke="#64748b" strokeWidth={3} dot={{ fill: '#64748b', strokeWidth: 2, r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              { name: 'React', color: '#e94560' },
              { name: 'JavaScript', color: '#16213e' },
              { name: 'CSS', color: '#1a1a2e' },
              { name: 'Performance', color: '#64748b' }
            ].map((skill) => (
              <div key={skill.name} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: skill.color }}></div>
                <span className="text-sm text-text-secondary">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Types Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 shadow-card border border-primary-100"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 font-headline flex items-center space-x-2">
              <Icon name="PieChart" size={24} className="text-accent" />
              <span>Project Types</span>
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {projectTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Performance Improvements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 shadow-card border border-primary-100"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 font-headline flex items-center space-x-2">
              <Icon name="BarChart3" size={24} className="text-accent" />
              <span>Performance Impact</span>
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="metric" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar dataKey="before" fill="#94a3b8" name="Before" />
                  <Bar dataKey="after" fill="#e94560" name="After" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrowthMetrics;