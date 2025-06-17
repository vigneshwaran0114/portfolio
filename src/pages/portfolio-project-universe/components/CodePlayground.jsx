import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CodePlayground = () => {
  const [activeDemo, setActiveDemo] = useState('animation');
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const demoCategories = [
    {
      id: 'animation',
      name: 'GSAP Animations',
      icon: 'Zap',
      description: 'Smooth animations and micro-interactions'
    },
    {
      id: 'react',
      name: 'React Patterns',
      icon: 'Code2',
      description: 'Advanced React hooks and patterns'
    },
    {
      id: 'css',
      name: 'CSS Techniques',
      icon: 'Palette',
      description: 'Modern CSS and layout solutions'
    },
    {
      id: 'performance',
      name: 'Performance',
      icon: 'Gauge',
      description: 'Optimization techniques and best practices'
    }
  ];

  const codeExamples = {
    animation: {
      title: 'Smooth Card Hover Animation',
      description: 'A buttery smooth card animation using GSAP with proper easing and transforms.',
      code: `// GSAP Card Hover Animation
import { gsap } from 'gsap';

const CardAnimation = () => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const card = cardRef.current;
    
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        duration: 0.3,
        ease: 'power2.out'
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        duration: 0.3,
        ease: 'power2.out'
      });
    };
    
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="bg-white p-6 rounded-lg cursor-pointer"
    >
      <h3>Animated Card</h3>
      <p>Hover me for smooth animation!</p>
    </div>
  );
};`,
      demo: 'animation-demo'
    },
    react: {
      title: 'Custom useIntersectionObserver Hook',
      description: 'A reusable hook for triggering animations when elements enter the viewport.',
      code: `// Custom Intersection Observer Hook
import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    );
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, [hasIntersected, options]);
  
  return { elementRef, isIntersecting, hasIntersected };
};

// Usage Example
const AnimatedSection = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  
  return (
    <div 
      ref={elementRef}
      className={\`transition-all duration-1000 \${
        hasIntersected 
          ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-10'
      }\`}
    >
      <h2>I animate when scrolled into view!</h2>
    </div>
  );
};`,
      demo: 'react-demo'
    },
    css: {
      title: 'Modern CSS Grid Layout',
      description: 'Responsive grid layout using CSS Grid with auto-fit and minmax for perfect responsiveness.',
      code: `/* Modern Responsive Grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.grid-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 2rem;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Advanced CSS Custom Properties */
.theme-card {
  --primary-color: #3b82f6;
  --secondary-color: #1e40af;
  --border-radius: 12px;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  background: var(--primary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-card:hover {
  --shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
  transform: scale(1.02);
}`,
      demo: 'css-demo'
    },
    performance: {
      title: 'React Performance Optimization',
      description: 'Advanced techniques for optimizing React applications including memoization and lazy loading.',
      code: `// Performance Optimization Techniques
import React, { memo, useMemo, useCallback, lazy, Suspense } from 'react';

// Lazy loading components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Memoized component to prevent unnecessary re-renders
const OptimizedCard = memo(({ data, onUpdate }) => {
  // Memoize expensive calculations
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: expensiveCalculation(item.value)
    }));
  }, [data]);
  
  // Memoize callback functions
  const handleClick = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);
  
  return (
    <div className="optimized-card">
      {processedData.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.computed}
        </div>
      ))}
    </div>
  );
});

// Virtual scrolling for large lists
const VirtualizedList = ({ items }) => {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 });
  
  const visibleItems = useMemo(() => {
    return items.slice(visibleRange.start, visibleRange.end);
  }, [items, visibleRange]);
  
  return (
    <div className="virtualized-container">
      {visibleItems.map(item => (
        <OptimizedCard key={item.id} data={item} />
      ))}
    </div>
  );
};

// Usage with Suspense
const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HeavyComponent />
  </Suspense>
);`,
      demo: 'performance-demo'
    }
  };

  const renderDemo = (demoType) => {
    switch (demoType) {
      case 'animation-demo':
        return (
          <div className="space-y-4">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-br from-accent to-accent-600 p-6 rounded-lg text-surface cursor-pointer shadow-lg"
            >
              <h4 className="text-lg font-semibold mb-2">Animated Card</h4>
              <p className="opacity-90">Hover me for smooth animation!</p>
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-br from-secondary to-secondary-700 p-6 rounded-lg text-surface"
            >
              <h4 className="text-lg font-semibold mb-2">Breathing Animation</h4>
              <p className="opacity-90">Continuous subtle movement</p>
            </motion.div>
          </div>
        );
      
      case 'react-demo':
        return (
          <div className="space-y-4">
            <div className="bg-success-50 border border-success-200 p-4 rounded-lg">
              <h4 className="text-success-800 font-semibold mb-2">✓ Component Rendered</h4>
              <p className="text-success-700 text-sm">This component uses the custom useIntersectionObserver hook</p>
            </div>
            
            <div className="bg-primary-50 border border-primary-200 p-4 rounded-lg">
              <h4 className="text-primary-800 font-semibold mb-2">Hook Benefits</h4>
              <ul className="text-primary-700 text-sm space-y-1">
                <li>• Reusable across components</li>
                <li>• Optimized performance</li>
                <li>• Clean up handled automatically</li>
              </ul>
            </div>
          </div>
        );
      
      case 'css-demo':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-lg text-white hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold mb-2">Grid Item 1</h4>
              <p className="text-sm opacity-90">Auto-responsive grid layout</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-lg text-white hover:scale-105 transition-transform duration-300">
              <h4 className="font-semibold mb-2">Grid Item 2</h4>
              <p className="text-sm opacity-90">CSS custom properties</p>
            </div>
          </div>
        );
      
      case 'performance-demo':
        return (
          <div className="space-y-4">
            <div className="bg-warning-50 border border-warning-200 p-4 rounded-lg">
              <h4 className="text-warning-800 font-semibold mb-2">⚡ Performance Optimized</h4>
              <p className="text-warning-700 text-sm">Using React.memo, useMemo, and useCallback</p>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item * 0.1 }}
                  className="bg-accent/10 p-3 rounded text-center text-sm"
                >
                  Item {item}
                </motion.div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="playground" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Code" size={16} />
            <span>Code Playground</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-headline">
            Interactive Code
            <span className="block text-accent">Demonstrations</span>
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore interactive examples of animation techniques, React patterns, and performance optimizations. 
            Each demo includes live code examples and explanations.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demoCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDemo(category.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                activeDemo === category.id
                  ? 'bg-accent text-surface shadow-lg'
                  : 'bg-surface text-text-primary hover:bg-primary-100 border border-primary-200'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <div className="text-left">
                <div className="font-semibold">{category.name}</div>
                <div className={`text-xs ${
                  activeDemo === category.id ? 'text-accent-100' : 'text-text-secondary'
                }`}>
                  {category.description}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Demo Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-surface rounded-2xl shadow-xl overflow-hidden border border-primary-200"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Demo Preview */}
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-primary">
                    {codeExamples[activeDemo].title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-error rounded-full"></div>
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-6">
                  {codeExamples[activeDemo].description}
                </p>
                
                <div className="bg-primary-50 p-6 rounded-xl">
                  {renderDemo(codeExamples[activeDemo].demo)}
                </div>
              </div>

              {/* Code Display */}
              <div className="lg:w-1/2 bg-primary-900 text-primary-100">
                <div className="flex items-center justify-between p-4 border-b border-primary-700">
                  <div className="flex items-center space-x-2">
                    <Icon name="Code2" size={18} />
                    <span className="font-medium">Source Code</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCodeVisible(!isCodeVisible)}
                    className="px-3 py-1 bg-primary-700 hover:bg-primary-600 rounded text-sm transition-colors duration-300 lg:hidden"
                  >
                    {isCodeVisible ? 'Hide Code' : 'Show Code'}
                  </motion.button>
                </div>
                
                <div className={`${isCodeVisible ? 'block' : 'hidden'} lg:block`}>
                  <pre className="p-6 text-sm overflow-x-auto font-mono leading-relaxed">
                    <code className="text-primary-100">
                      {codeExamples[activeDemo].code}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Want to Learn More?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="https://github.com/devmotion"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-primary text-surface font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              <Icon name="Github" size={20} />
              <span>View on GitHub</span>
            </motion.a>
            
            <motion.a
              href="/contact-collaboration-hub"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-surface transition-all duration-300"
            >
              <Icon name="MessageCircle" size={20} />
              <span>Let's Collaborate</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodePlayground;