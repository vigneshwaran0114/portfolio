import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Icon from '../../../components/AppIcon';

const TechnicalEvolution = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      name: "Frontend Development",
      icon: "Monitor",
      color: "#e94560",
      skills: [
        { name: "React", level: 95, years: 6, icon: "Code" },
        { name: "JavaScript", level: 92, years: 8, icon: "FileCode" },
        { name: "TypeScript", level: 88, years: 4, icon: "FileCode2" },
        { name: "HTML/CSS", level: 96, years: 8, icon: "Layout" },
        { name: "SASS/SCSS", level: 90, years: 6, icon: "Palette" }
      ]
    },
    animation: {
      name: "Animation & Motion",
      icon: "Zap",
      color: "#16213e",
      skills: [
        { name: "GSAP", level: 94, years: 5, icon: "Sparkles" },
        { name: "Framer Motion", level: 89, years: 3, icon: "Move" },
        { name: "CSS Animations", level: 91, years: 6, icon: "RotateCcw" },
        { name: "Three.js", level: 75, years: 2, icon: "Box" },
        { name: "Lottie", level: 82, years: 3, icon: "Play" }
      ]
    },
    tools: {
      name: "Tools & Workflow",
      icon: "Settings",
      color: "#48bb78",
      skills: [
        { name: "Git", level: 93, years: 7, icon: "GitBranch" },
        { name: "Webpack", level: 85, years: 5, icon: "Package" },
        { name: "Vite", level: 88, years: 2, icon: "Zap" },
        { name: "Figma", level: 87, years: 4, icon: "Figma" },
        { name: "VS Code", level: 95, years: 8, icon: "Code2" }
      ]
    }
  };

  const learningProgress = [
    { year: '2016', skills: 5, projects: 2 },
    { year: '2017', skills: 12, projects: 8 },
    { year: '2018', skills: 18, projects: 15 },
    { year: '2019', skills: 25, projects: 22 },
    { year: '2020', skills: 32, projects: 28 },
    { year: '2021', skills: 38, projects: 35 },
    { year: '2022', skills: 42, projects: 41 },
    { year: '2023', skills: 45, projects: 48 }
  ];

  const currentSkills = skillCategories[activeCategory].skills;

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Technical Evolution
            <span className="block text-accent">Skills & Growth Over Time</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A visual journey through my technical growth, showcasing proficiency levels and learning timeline
          </p>
        </motion.div>

        {/* Learning Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Learning Journey</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={learningProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="year" 
                  stroke="#64748b"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#64748b"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="skills" 
                  stroke="#e94560" 
                  strokeWidth={3}
                  dot={{ fill: '#e94560', strokeWidth: 2, r: 6 }}
                  name="Skills Learned"
                />
                <Line 
                  type="monotone" 
                  dataKey="projects" 
                  stroke="#16213e" 
                  strokeWidth={3}
                  dot={{ fill: '#16213e', strokeWidth: 2, r: 6 }}
                  name="Projects Completed"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-accent text-surface shadow-lg'
                    : 'bg-primary-100 text-primary hover:bg-primary-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name={category.icon} size={20} />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Skills List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {skillCategories[activeCategory].name}
              </h3>
              
              {currentSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary-50 rounded-xl p-6 hover:bg-primary-100 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <Icon name={skill.icon} size={20} color="white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{skill.name}</h4>
                        <p className="text-sm text-text-secondary">{skill.years} years experience</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-accent">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-primary-200 rounded-full h-3">
                    <motion.div
                      className="h-3 bg-gradient-to-r from-accent to-accent-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Chart */}
            <div className="bg-gradient-to-br from-accent-50 to-secondary-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">Proficiency Levels</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={currentSkills} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      type="number" 
                      domain={[0, 100]}
                      stroke="#64748b"
                      fontSize={12}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="name"
                      stroke="#64748b"
                      fontSize={12}
                      width={80}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                      formatter={(value) => [`${value}%`, 'Proficiency']}
                    />
                    <Bar 
                      dataKey="level" 
                      fill={skillCategories[activeCategory].color}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Git', 'Figma', 'VS Code', 'Webpack'].map((tech, index) => (
              <motion.div
                key={tech}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-100 rounded-lg"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon name="Code" size={16} />
                <span className="font-medium text-primary">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalEvolution;