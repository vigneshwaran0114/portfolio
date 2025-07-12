import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';

const SkillsGrid = ({ activeCategory }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = [
    {
      id: 1,
      category: 'frontend',
      name: 'React & Next.js',
      level: 90,
      experience: '3 years',
      icon: 'Code2',
      color: 'from-blue-500 to-cyan-500',
      description: 'Advanced React patterns, hooks, context, and Next.js SSR/SSG implementation',
      projects: ['E-commerce Platform', 'SaaS Dashboard', 'Portfolio Sites'],
      // certifications: ['React Developer Certification', 'Next.js Expert'],
      codeExample: `const useOptimizedState = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const deferredState = useDeferredValue(state);
  
  return [deferredState, setState];
};`
    },
    {
      id: 2,
      category: 'animation',
      name: 'GSAP & Framer Motion',
      level: 60,
      experience: '1.5 years',
      icon: 'Zap',
      color: 'from-purple-500 to-pink-500',
      description: 'Complex timeline animations, scroll-triggered effects, and performance optimization',
      projects: ['Interactive Landing Pages', 'Product Showcases', 'Brand Experiences'],
      // certifications: ['GSAP Professional', 'Motion Design Fundamentals'],
      codeExample: `gsap.timeline({ scrollTrigger: {
  trigger: ".hero",
  start: "top center",
  end: "bottom center",
  scrub: 1
}})
.to(".hero-bg", { scale: 1.2, duration: 1 })
.to(".hero-text", { y: -50, opacity: 0.8 }, 0);`
    },
    {
      id: 3,
      category: 'performance',
      name: 'Web Performance',
      level: 88,
      experience: '3 years',
      icon: 'Gauge',
      color: 'from-green-500 to-emerald-500',
      description: 'Core Web Vitals optimization, bundle analysis, and loading strategies',
      projects: ['Performance Audits', 'Speed Optimizations', 'PWA Development'],
      // certifications: ['Web Performance Expert', 'Lighthouse Optimization'],
      codeExample: `// Lazy loading with Intersection Observer
const useLazyLoad = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Load content
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
};`
    },
    {
      id: 4,
      category: 'design',
      name: 'Design Systems',
      level: 85,
      experience: '3 years',
      icon: 'Palette',
      color: 'from-orange-500 to-red-500',
      description: 'Component libraries, design tokens, and scalable UI architectures',
      projects: ['Corporate Design System', 'Component Library', 'Style Guides'],
      // certifications: ['Design Systems Specialist', 'Figma to Code Expert'],
      codeExample: `// Design token system
const tokens = {
  colors: {
    primary: {
      50: '#f0f9ff',
      500: '#3b82f6',
      900: '#1e3a8a'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem'
  }
};`
    },
    {
      id: 5,
      category: 'frontend',
      name: 'TypeScript',
      level: 94,
      experience: '3 years',
      icon: 'FileCode',
      color: 'from-blue-600 to-indigo-600',
      description: 'Advanced type systems, generics, and enterprise-grade TypeScript applications',
      projects: ['Type-safe APIs', 'Complex Forms', 'State Management'],
      // certifications: ['TypeScript Advanced', 'Type Safety Expert'],
      codeExample: `interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}

const fetchData = async <T>(
  url: string
): Promise<ApiResponse<T>> => {
  // Implementation
};`
    },
    {
      id: 6,
      category: 'performance',
      name: 'Bundle Optimization',
      level: 77,
      experience: '2 years',
      icon: 'Package',
      color: 'from-teal-500 to-cyan-500',
      description: 'Webpack configuration, code splitting, and build optimization strategies',
      projects: ['Build Pipeline Setup', 'Bundle Analysis', 'Performance Monitoring'],
      // certifications: ['Webpack Expert', 'Build Optimization Specialist'],
      codeExample: `// Dynamic imports for code splitting
const LazyComponent = lazy(() => 
  import('./HeavyComponent').then(module => ({
    default: module.HeavyComponent
  }))
);

// Preload critical resources
const preloadRoute = (routeComponent) => {
  import(routeComponent);
};`
    },
    {
      id: 7,
      category: 'animation',
      name: 'CSS Animations',
      level: 90,
      experience: '2 years',
      icon: 'Sparkles',
      color: 'from-pink-500 to-rose-500',
      description: 'Advanced CSS animations, transforms, and GPU-accelerated effects',
      projects: ['Micro-interactions', 'Loading States', 'Hover Effects'],
      // certifications: ['CSS Animation Master', 'Advanced CSS Techniques'],
      codeExample: `@keyframes slideInUp {
  from {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}`
    },
    {
      id: 8,
      category: 'design',
      name: 'Responsive Design',
      level: 86,
      experience: '3 years',
      icon: 'Smartphone',
      color: 'from-violet-500 to-purple-500',
      description: 'Mobile-first design, flexible layouts, and cross-device optimization',
      projects: ['Mobile Apps', 'Responsive Websites', 'PWA Development'],
      // certifications: ['Responsive Design Expert', 'Mobile UX Specialist'],
      codeExample: `// Container queries for component-level responsiveness
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
}

// Fluid typography
.heading {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 lg:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                layout
                className="group relative bg-surface rounded-xl p-6 card-hover cursor-pointer"
                onClick={() => setSelectedSkill(skill)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <Icon name={skill.icon} size={20} color="white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary">{skill.experience}</div>
                    <div className="text-xs text-text-muted">experience</div>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-primary-900 mb-2 group-hover:text-accent transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {skill.description}
                </p>

                {/* Proficiency Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-text-secondary">Proficiency</span>
                    <span className="text-xs font-bold text-primary-900">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-primary-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                {/* Projects Count */}
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>View Details</span>
                  <Icon name="ChevronRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-trust/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-background rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedSkill.color} flex items-center justify-center`}>
                      <Icon name={selectedSkill.icon} size={24} color="white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-primary-900">{selectedSkill.name}</h2>
                      <p className="text-text-secondary">{selectedSkill.experience} of experience</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-2 hover:bg-surface rounded-lg transition-colors duration-300"
                  >
                    <Icon name="X" size={20} />
                  </button>
                </div>

                {/* Proficiency */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-primary-900">Proficiency Level</span>
                    <span className="text-2xl font-bold text-accent">{selectedSkill.level}%</span>
                  </div>
                  <div className="w-full bg-primary-200 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${selectedSkill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-primary-900 mb-2">About This Skill</h3>
                  <p className="text-text-secondary">{selectedSkill.description}</p>
                </div>

                {/* Projects */}
                <div className="mb-6">
                  <h3 className="font-semibold text-primary-900 mb-3">Recent Projects</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.projects.map((project) => (
                      <span
                        key={project}
                        className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                {/* <div className="mb-6">
                  <h3 className="font-semibold text-primary-900 mb-3">Certifications</h3>
                  <div className="space-y-2">
                    {selectedSkill?.certifications?.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Award" size={16} className="text-success" />
                        <span className="text-text-secondary">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Code Example */}
                <div className="mb-6">
                  <h3 className="font-semibold text-primary-900 mb-3">Code Example</h3>
                  <div className="bg-primary-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-primary-100 font-mono">
                      <code>{selectedSkill.codeExample}</code>
                    </pre>
                  </div>
                </div>

                {/* Action Buttons */}
                {/* <div className="flex space-x-4">
                  <button className="flex-1 bg-accent hover:bg-accent-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                    View Projects
                  </button>
                  <button className="flex-1 bg-surface hover:bg-surface-hover text-primary-900 font-semibold py-3 rounded-lg transition-colors duration-300">
                    Discuss Project
                  </button>
                </div> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsGrid;