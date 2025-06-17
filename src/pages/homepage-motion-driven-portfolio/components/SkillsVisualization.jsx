import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsVisualization = ({ isVisible }) => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skills = [
    {
      name: "React",
      level: 95,
      icon: "Code",
      color: "from-blue-500 to-blue-600",
      description: "Advanced component architecture & hooks"
    },
    {
      name: "CSS/Tailwind",
      level: 90,
      icon: "Palette",
      color: "from-purple-500 to-purple-600",
      description: "Responsive design & modern layouts"
    },
    {
      name: "JavaScript",
      level: 92,
      icon: "Zap",
      color: "from-yellow-500 to-yellow-600",
      description: "ES6+, async programming & performance"
    },
    {
      name: "Vue",
      level: 60,
      icon: "Play",
      color: "from-green-500 to-green-600",
      description: "Progressive JavaScript framework."
    },
    {
      name: "TypeScript",
      level: 85,
      icon: "Shield",
      color: "from-indigo-500 to-indigo-600",
      description: "Type-safe development & scalability"
    },
    {
      name: "Next",
      level: 90,
      icon: "Code",
      color: "from-emerald-500 to-emerald-600",
      description: "React-based server-side framework"
    }
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        skills.forEach((skill, index) => {
          setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [skill.name]: skill.level
            }));
          }, index * 200);
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section 
      id="skills"
      data-animate
      className="py-20 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences, 
            from interactive frontends to performant animations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative bg-primary-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Floating Icon */}
              <div className="absolute -top-6 left-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={skill.icon} size={24} color="white" />
                </div>
              </div>

              {/* Skill Content */}
              <div className="pt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">{skill.name}</h3>
                  <span className="text-2xl font-bold text-accent">
                    {animatedSkills[skill.name] || 0}%
                  </span>
                </div>

                <p className="text-text-secondary mb-6 text-sm">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full h-3 bg-primary-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${animatedSkills[skill.name] || 0}%`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                  
                  {/* Floating Progress Indicator */}
                  <div
                    className="absolute -top-8 bg-primary text-surface text-xs px-2 py-1 rounded transition-all duration-1000"
                    style={{ 
                      left: `${(animatedSkills[skill.name] || 0)}%`,
                      transform: 'translateX(-50%)',
                      opacity: animatedSkills[skill.name] ? 1 : 0
                    }}
                  >
                    {animatedSkills[skill.name] || 0}%
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Interactive Skills Demo */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-surface">
            <h3 className="text-2xl font-bold mb-4">See These Skills in Action</h3>
            <p className="text-primary-200 mb-6">
              Every animation, interaction, and component on this site demonstrates these capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["React Hooks", "GSAP Animations", "Responsive Design", "Performance Optimization"].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-surface/20 rounded-lg text-sm font-medium backdrop-blur-sm transform transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;