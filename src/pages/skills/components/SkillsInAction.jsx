import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SkillsInAction = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoProjects = [
    {
      id: 1,
      title: 'Interactive Component Builder',
      description: 'Live React component creation with real-time preview',
      technology: 'React + TypeScript',
      icon: 'Code2',
      color: 'from-blue-500 to-cyan-500',
      codeSnippet: `const Button = ({ variant, children, ...props }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };
  
  return (
    <button 
      className={\`\${baseClasses} \${variants[variant]}\`}
      {...props}
    >
      {children}
    </button>
  );
};`,
      preview: 'component'
    },
    {
      id: 2,
      title: 'GSAP Timeline Controller',
      description: 'Interactive animation timeline with playback controls',
      technology: 'GSAP + React',
      icon: 'Play',
      color: 'from-purple-500 to-pink-500',
      codeSnippet: `const timeline = gsap.timeline({ paused: true });

timeline
  .from(".box", { scale: 0, duration: 0.5 })
  .to(".box", { rotation: 360, duration: 1 })
  .to(".box", { x: 200, duration: 0.8 })
  .to(".box", { backgroundColor: "#ff6b6b", duration: 0.5 });

// Control functions
const play = () => timeline.play();
const pause = () => timeline.pause();
const reverse = () => timeline.reverse();`,
      preview: 'animation'
    },
    {
      id: 3,
      title: 'Performance Monitor',
      description: 'Real-time Core Web Vitals tracking and optimization',
      technology: 'Web APIs + React',
      icon: 'Activity',
      color: 'from-green-500 to-emerald-500',
      codeSnippet: `const useWebVitals = () => {
  const [vitals, setVitals] = useState({});
  
  useEffect(() => {
    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setVitals(prev => ({ ...prev, lcp: lastEntry.startTime }));
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // First Input Delay
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        setVitals(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    }).observe({ entryTypes: ['first-input'] });
  }, []);
  
  return vitals;
};`,
      preview: 'performance'
    }
  ];

  const ComponentPreview = () => (
    <div className="bg-surface rounded-lg p-6 space-y-4">
      <div className="flex space-x-3">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
          Primary Button
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors">
          Secondary Button
        </button>
      </div>
      <div className="text-sm text-text-secondary">
        ✨ Interactive buttons built with the code on the left
      </div>
    </div>
  );

  const AnimationPreview = () => {
    const [animationState, setAnimationState] = useState('initial');

    useEffect(() => {
      if (isPlaying) {
        const sequence = ['scale', 'rotate', 'move', 'color'];
        let currentStep = 0;
        
        const interval = setInterval(() => {
          if (currentStep < sequence.length) {
            setAnimationState(sequence[currentStep]);
            currentStep++;
          } else {
            setAnimationState('initial');
            currentStep = 0;
          }
        }, 800);

        return () => clearInterval(interval);
      }
    }, [isPlaying]);

    const getBoxStyle = () => {
      const baseStyle = "w-16 h-16 bg-blue-500 rounded-lg transition-all duration-500 ease-out";
      
      switch (animationState) {
        case 'scale':
          return `${baseStyle} scale-110`;
        case 'rotate':
          return `${baseStyle} scale-110 rotate-180`;
        case 'move':
          return `${baseStyle} scale-110 rotate-180 translate-x-24`;
        case 'color':
          return `${baseStyle} scale-110 rotate-180 translate-x-24 bg-red-500`;
        default:
          return baseStyle;
      }
    };

    return (
      <div className="bg-surface rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={getBoxStyle()}></div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-3 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-600 transition-colors"
            >
              <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>
          </div>
        </div>
        <div className="text-sm text-text-secondary">
          🎬 GSAP timeline animation with interactive controls
        </div>
      </div>
    );
  };

  const PerformancePreview = () => {
    const [metrics, setMetrics] = useState({
      lcp: 1.2,
      fid: 8,
      cls: 0.05
    });

    useEffect(() => {
      const interval = setInterval(() => {
        setMetrics({
          lcp: (Math.random() * 2 + 0.5).toFixed(1),
          fid: Math.floor(Math.random() * 20 + 5),
          cls: (Math.random() * 0.1).toFixed(3)
        });
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    const getScoreColor = (metric, value) => {
      const thresholds = {
        lcp: { good: 2.5, poor: 4.0 },
        fid: { good: 100, poor: 300 },
        cls: { good: 0.1, poor: 0.25 }
      };

      const threshold = thresholds[metric];
      if (value <= threshold.good) return 'text-success';
      if (value <= threshold.poor) return 'text-warning-600';
      return 'text-error';
    };

    return (
      <div className="bg-surface rounded-lg p-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className={`text-2xl font-bold ${getScoreColor('lcp', metrics.lcp)}`}>
              {metrics.lcp}s
            </div>
            <div className="text-xs text-text-secondary">LCP</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${getScoreColor('fid', metrics.fid)}`}>
              {metrics.fid}ms
            </div>
            <div className="text-xs text-text-secondary">FID</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${getScoreColor('cls', metrics.cls)}`}>
              {metrics.cls}
            </div>
            <div className="text-xs text-text-secondary">CLS</div>
          </div>
        </div>
        <div className="text-sm text-text-secondary">
          📊 Real-time Core Web Vitals monitoring
        </div>
      </div>
    );
  };

  const renderPreview = () => {
    switch (demoProjects[activeDemo].preview) {
      case 'component':
        return <ComponentPreview />;
      case 'animation':
        return <AnimationPreview />;
      case 'performance':
        return <PerformancePreview />;
      default:
        return <ComponentPreview />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-surface to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Code" size={16} />
            <span>Interactive Demonstrations</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Skills in Action
          </h2>
          
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience my coding style and problem-solving approach through interactive examples. 
            Modify the code and see immediate results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Demo Selector */}
            <div className="flex flex-wrap gap-2">
              {demoProjects.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeDemo === index
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-surface text-text-secondary hover:bg-surface-hover'
                  }`}
                >
                  <Icon name={demo.icon} size={16} />
                  <span className="hidden sm:inline">{demo.title}</span>
                </button>
              ))}
            </div>

            {/* Code Display */}
            <div className="bg-primary-900 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-primary-800">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${demoProjects[activeDemo].color} flex items-center justify-center`}>
                    <Icon name={demoProjects[activeDemo].icon} size={16} color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{demoProjects[activeDemo].title}</h3>
                    <p className="text-sm text-primary-300">{demoProjects[activeDemo].technology}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm text-primary-100 font-mono leading-relaxed">
                  <code>{demoProjects[activeDemo].codeSnippet}</code>
                </pre>
              </div>
            </div>

            <p className="text-text-secondary">
              {demoProjects[activeDemo].description}
            </p>
          </motion.div>

          {/* Live Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-primary-900">Live Preview</h3>
              <div className="flex items-center space-x-2 text-sm text-success">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                <span>Running</span>
              </div>
            </div>

            {renderPreview()}

            {/* Additional Info */}
            <div className="bg-accent-50 rounded-lg p-4 border border-accent-200">
              <div className="flex items-start space-x-3">
                <Icon name="Lightbulb" size={20} className="text-accent mt-0.5" />
                <div>
                  <h4 className="font-medium text-accent-800 mb-1">Pro Tip</h4>
                  <p className="text-sm text-accent-700">
                    This interactive demo showcases real-world implementation patterns I use in production applications. 
                    The code is optimized for performance and maintainability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsInAction;