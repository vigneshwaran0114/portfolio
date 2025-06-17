import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MotionPhilosophy = ({ isVisible }) => {
  const [activeTab, setActiveTab] = useState(0);

  const philosophyTabs = [
    {
      title: "Purposeful Motion",
      icon: "Target",
      content: `Every animation serves a purpose – guiding attention, providing feedback, or enhancing the narrative. Motion should feel natural and intuitive, never gratuitous or distracting from the core user experience.`,
      codeExample: `// Purposeful hover animation
const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};`
    },
    {
      title: "Performance First",
      icon: "Zap",
      content: `Beautiful animations mean nothing if they compromise performance. Every motion is optimized for 60fps, uses hardware acceleration, and respects user preferences for reduced motion.`,
      codeExample: `// GPU-accelerated transforms
.animate-element {
  transform: translateZ(0);
  will-change: transform;
  transition: transform 0.3s ease-out;
}`
    },
    {
      title: "Emotional Connection",
      icon: "Heart",
      content: `Motion creates emotional resonance. The right easing curve, timing, and choreography can make users feel delighted, confident, or inspired – transforming functional interactions into memorable moments.`,
      codeExample: `// Emotional timing curves
const spring = {
  type: "spring",
  damping: 25,
  stiffness: 120
};`
    }
  ];

  const principles = [
    {
      icon: "Clock",
      title: "Timing & Rhythm",
      description: "Consistent timing creates predictable, comfortable experiences"
    },
    {
      icon: "Layers",
      title: "Hierarchy & Flow",
      description: "Motion guides users through content with clear visual priorities"
    },
    {
      icon: "Smartphone",
      title: "Responsive Motion",
      description: "Animations adapt gracefully across all devices and contexts"
    },
    {
      icon: "Accessibility",
      title: "Inclusive Design",
      description: "Respects accessibility preferences and cognitive load considerations"
    }
  ];

  return (
    <section 
      id="philosophy"
      data-animate
      className="py-20 bg-gradient-to-br from-primary to-secondary text-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Motion Philosophy
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            Great animation isn't about flashy effects – it's about creating meaningful, 
            purposeful interactions that enhance the user experience.
          </p>
        </div>

        {/* Philosophy Tabs */}
        <div className={`mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="flex flex-col lg:flex-row bg-surface/10 backdrop-blur-sm rounded-2xl overflow-hidden">
            {/* Tab Navigation */}
            <div className="lg:w-1/3 bg-surface/5">
              {philosophyTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-6 text-left transition-all duration-300 border-b border-surface/10 lg:border-b-0 lg:border-r ${
                    activeTab === index 
                      ? 'bg-accent text-surface' :'hover:bg-surface/10 text-primary-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={tab.icon} size={24} />
                    <span className="font-semibold">{tab.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3 p-8">
              <div className={`transform transition-all duration-500 ${
                activeTab !== null ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}>
                <p className="text-primary-100 mb-6 leading-relaxed text-lg">
                  {philosophyTabs[activeTab]?.content}
                </p>
                
                {/* Code Example */}
                <div className="bg-primary-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-primary-300 ml-2">motion-example.js</span>
                  </div>
                  <pre className="text-primary-100 overflow-x-auto">
                    {philosophyTabs[activeTab]?.codeExample}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`group p-6 bg-surface/10 backdrop-blur-sm rounded-xl hover:bg-surface/20 transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={principle.icon} size={24} color="white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{principle.title}</h3>
              <p className="text-primary-200 text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Demo Teaser */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-surface/10 backdrop-blur-sm rounded-full">
            <Icon name="Play" size={24} />
            <span className="font-medium">See these principles in action throughout this site</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionPhilosophy;