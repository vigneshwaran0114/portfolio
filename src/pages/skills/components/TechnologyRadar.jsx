import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const TechnologyRadar = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  const radarData = {
    adopt: {
      title: 'Adopt',
      description: 'Technologies I actively use and recommend',
      color: 'text-success',
      bgColor: 'bg-success-100',
      borderColor: 'border-success-300',
      technologies: [
        { name: 'React 18', level: 'Expert', trend: 'stable', icon: 'Code2' },
        { name: 'TypeScript', level: 'Advanced', trend: 'growing', icon: 'FileCode' },
        { name: 'Next.js', level: 'Expert', trend: 'growing', icon: 'Globe' },
        { name: 'GSAP', level: 'Advanced', trend: 'stable', icon: 'Zap' },
        { name: 'Tailwind CSS', level: 'Expert', trend: 'stable', icon: 'Palette' }
      ]
    },
    trial: {
      title: 'Trial',
      description: 'Technologies I am experimenting with',
      color: 'text-accent',
      bgColor: 'bg-accent-100',
      borderColor: 'border-accent-300',
      technologies: [
        { name: 'Astro', level: 'Learning', trend: 'growing', icon: 'Rocket' },
        { name: 'Remix', level: 'Learning', trend: 'growing', icon: 'Music' },
        { name: 'Solid.js', level: 'Exploring', trend: 'emerging', icon: 'Layers' },
        { name: 'Qwik', level: 'Exploring', trend: 'emerging', icon: 'Zap' },
        { name: 'Bun', level: 'Testing', trend: 'emerging', icon: 'Package' }
      ]
    },
    assess: {
      title: 'Assess',
      description: 'Technologies on my radar for future evaluation',
      color: 'text-warning-600',
      bgColor: 'bg-warning-100',
      borderColor: 'border-warning-300',
      technologies: [
        { name: 'Deno', level: 'Watching', trend: 'emerging', icon: 'Eye' },
        { name: 'Svelte Kit', level: 'Interested', trend: 'growing', icon: 'Sparkles' },
        { name: 'Tauri', level: 'Curious', trend: 'emerging', icon: 'Monitor' },
        { name: 'Fresh', level: 'Monitoring', trend: 'emerging', icon: 'Leaf' },
        { name: 'Turbo', level: 'Evaluating', trend: 'growing', icon: 'Gauge' }
      ]
    },
    hold: {
      title: 'Hold',
      description: 'Technologies I am moving away from or avoiding',
      color: 'text-error',
      bgColor: 'bg-error-100',
      borderColor: 'border-error-300',
      technologies: [
        { name: 'jQuery', level: 'Legacy', trend: 'declining', icon: 'Archive' },
        { name: 'Angular.js', level: 'Deprecated', trend: 'declining', icon: 'AlertTriangle' },
        { name: 'Bootstrap', level: 'Replaced', trend: 'declining', icon: 'Package2' },
        { name: 'Gulp', level: 'Outdated', trend: 'declining', icon: 'Settings' },
        { name: 'Bower', level: 'Obsolete', trend: 'declining', icon: 'X' }
      ]
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'growing':
        return 'TrendingUp';
      case 'stable':
        return 'Minus';
      case 'declining':
        return 'TrendingDown';
      case 'emerging':
        return 'Sparkles';
      default:
        return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'growing':
        return 'text-success';
      case 'stable':
        return 'text-accent';
      case 'declining':
        return 'text-error';
      case 'emerging':
        return 'text-warning-600';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <section className="py-16 lg:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-trust-100 text-trust-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Radar" size={16} />
            <span>Technology Radar</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Current Focus Areas
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My technology adoption strategy and learning roadmap. 
            This radar shows what I'm using, exploring, and planning to learn.
          </p>
        </motion.div>

        {/* Radar Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {Object.entries(radarData).map(([key, quadrant], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-2xl border-2 ${quadrant.borderColor} ${quadrant.bgColor} cursor-pointer transition-all duration-300 hover:shadow-lg`}
              onClick={() => setSelectedQuadrant(selectedQuadrant === key ? null : key)}
            >
              {/* Quadrant Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${quadrant.color} mb-1`}>
                    {quadrant.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {quadrant.description}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-full ${quadrant.bgColor} border-2 ${quadrant.borderColor} flex items-center justify-center`}>
                  <span className={`text-lg font-bold ${quadrant.color}`}>
                    {quadrant.technologies.length}
                  </span>
                </div>
              </div>

              {/* Technology List */}
              <div className="space-y-3">
                {quadrant.technologies.slice(0, selectedQuadrant === key ? undefined : 3).map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover:bg-background transition-colors duration-300"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name={tech.icon} size={18} className={quadrant.color} />
                      <div>
                        <div className="font-medium text-primary-900">{tech.name}</div>
                        <div className="text-xs text-text-secondary">{tech.level}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={getTrendIcon(tech.trend)} 
                        size={16} 
                        className={getTrendColor(tech.trend)} 
                      />
                      {hoveredTech === tech.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-xs text-text-muted capitalize"
                        >
                          {tech.trend}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {selectedQuadrant !== key && quadrant.technologies.length > 3 && (
                  <div className="text-center pt-2">
                    <button className={`text-sm ${quadrant.color} hover:underline`}>
                      +{quadrant.technologies.length - 3} more
                    </button>
                  </div>
                )}
              </div>

              {/* Expand/Collapse Indicator */}
              <div className="absolute top-4 right-4">
                <Icon 
                  name={selectedQuadrant === key ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className={`${quadrant.color} transition-transform duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-surface rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-primary-900 mb-4">Technology Radar Legend</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Quadrant Meanings */}
            <div>
              <h4 className="font-medium text-success mb-2">Adopt</h4>
              <p className="text-sm text-text-secondary">
                Proven technologies I use in production and recommend to others.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-accent mb-2">Trial</h4>
              <p className="text-sm text-text-secondary">
                Technologies worth pursuing with low-risk projects to build experience.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-warning-600 mb-2">Assess</h4>
              <p className="text-sm text-text-secondary">
                Technologies to explore and understand their potential impact.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-error mb-2">Hold</h4>
              <p className="text-sm text-text-secondary">
                Technologies to avoid or phase out due to better alternatives.
              </p>
            </div>
          </div>

          {/* Trend Indicators */}
          <div className="mt-6 pt-6 border-t border-primary-200">
            <h4 className="font-medium text-primary-900 mb-3">Trend Indicators</h4>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} className="text-success" />
                <span className="text-text-secondary">Growing adoption</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Minus" size={16} className="text-accent" />
                <span className="text-text-secondary">Stable usage</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Sparkles" size={16} className="text-warning-600" />
                <span className="text-text-secondary">Emerging technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="TrendingDown" size={16} className="text-error" />
                <span className="text-text-secondary">Declining usage</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyRadar;