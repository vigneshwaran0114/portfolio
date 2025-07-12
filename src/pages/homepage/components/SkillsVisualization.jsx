import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const SkillsVisualization = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: 'React',
      level: 95,
      icon: 'Code2',
      color: 'from-blue-500 to-blue-600',
      snippet: `const App = () => {
  return <div>Hello World!</div>;
};`
    },
    {
      name: 'TypeScript',
      level: 90,
      icon: 'FileCode',
      color: 'from-blue-600 to-blue-700',
      snippet: `interface User {
  name: string;
  email: string;
}`
    },
    {
      name: 'Next.js',
      level: 88,
      icon: 'Globe',
      color: 'from-gray-700 to-gray-800',
      snippet: `export default function Page() {
  return <h1>Next.js App</h1>;
}`
    },
    {
      name: 'GSAP',
      level: 85,
      icon: 'Zap',
      color: 'from-green-500 to-green-600',
      snippet: `gsap.to(".element", {
  duration: 1,
  x: 100
});`
    },
    {
      name: 'Tailwind CSS',
      level: 92,
      icon: 'Palette',
      color: 'from-cyan-500 to-cyan-600',
      snippet: `<div className="flex items-center 
  justify-center p-4">
</div>`
    },
    {
      name: 'Node.js',
      level: 80,
      icon: 'Server',
      color: 'from-green-600 to-green-700',
      snippet: `const express = require('express');
const app = express();
app.listen(3000);`
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Mastering modern web technologies to build scalable, performant applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills List */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}>
                      <Icon name={skill.icon} size={20} color="white" />
                    </div>
                    <span className="text-lg font-semibold text-primary-900 group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-text-secondary font-medium">{skill.level}%</span>
                </div>
                
                <div className="relative h-3 bg-primary-100 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Code Preview */}
          <div className="relative">
            <div className="bg-primary-900 rounded-lg shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-primary-800 border-b border-primary-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div className="text-primary-300 text-sm font-mono">
                  {hoveredSkill ? `${hoveredSkill.name.toLowerCase()}.js` : 'skills.js'}
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm min-h-[200px] flex items-center">
                {hoveredSkill ? (
                  <pre className="text-primary-100 leading-relaxed">
                    <code>{hoveredSkill.snippet}</code>
                  </pre>
                ) : (
                  <div className="text-center w-full text-primary-400">
                    <Icon name="MousePointer" size={32} className="mx-auto mb-4 opacity-50" />
                    <p>Hover over a skill to see code example</p>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Expert Level
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              Always Learning
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-primary-900 mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Redux', 'GraphQL', 'Jest', 'Cypress', 'Figma', 'Git'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;