import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Icon from '../../../components/AppIcon';


const BehindTheCode = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const philosophyPoints = [
    {
      icon: "Heart",
      title: "User-Centric Design",
      description: `Every line of code I write starts with the user in mind. I believe that great frontend development isn't just about making things work—it's about making them feel intuitive, accessible, and delightful to use.

The best interfaces are invisible; they guide users naturally toward their goals without friction or confusion.`
    },
    {
      icon: "Zap",
      title: "Performance First",
      description: `Beautiful animations mean nothing if they slow down the experience. I'm obsessed with performance optimization, ensuring that every interaction feels instant and smooth.

From code splitting to lazy loading, I implement best practices that keep applications fast while delivering rich, engaging experiences.`
    },
    {
      icon: "Layers",
      title: "Scalable Architecture",
      description: `I design component systems and code architectures that grow with the project. Clean, modular code isn't just easier to maintain—it enables teams to move faster and build more consistently.

Every project is an opportunity to create reusable patterns that benefit future development.`
    },
    {
      icon: "Sparkles",
      title: "Motion with Purpose",
      description: `Animation isn't decoration—it's communication. Every transition, hover state, and micro-interaction serves a purpose: guiding attention, providing feedback, or creating emotional connection.

I craft motion that enhances usability while adding personality to digital experiences.`
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Understanding user needs, business goals, and technical constraints",
      icon: "Search"
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Creating interactive prototypes to validate concepts and interactions",
      icon: "Figma"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building with clean code, performance optimization, and cross-browser testing",
      icon: "Code"
    },
    {
      step: "04",
      title: "Launch & Iteration",
      description: "Deploying with monitoring and continuous improvement based on user feedback",
      icon: "Rocket"
    }
  ];

  const personalInsights = {
    motivation: `What drives me every day is the intersection of art and technology. There's something magical about transforming static designs into living, breathing experiences that users can interact with and enjoy.

I'm constantly inspired by the potential of the web platform and the creative possibilities that emerge when you push the boundaries of what's possible with code.`,approach: `I believe in continuous learning and staying curious. The frontend landscape evolves rapidly, and I embrace that change as an opportunity to discover new ways to solve problems and create better experiences.Collaboration is at the heart of my process. The best solutions emerge when designers, developers, and stakeholders work together with shared understanding and mutual respect.`,future: `Looking ahead, I'm excited about the convergence of web technologies with emerging platforms. From WebGL and WebXR to AI-powered interfaces, there are incredible opportunities to create experiences that were impossible just a few years ago.

My goal is to continue pushing the boundaries of what's possible on the web while maintaining the core principles of accessibility, performance, and user-centered design.`
  };

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/5 rounded-full blur-lg"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Behind the Code
            <span className="block text-accent">Philosophy & Process</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The principles, passion, and process that drive every project I create
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={point.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">{point.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Work Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-primary text-center mb-12">
            My Development Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 z-0"></div>
                )}
                
                <div className="bg-surface rounded-xl p-6 text-center relative z-10 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={process.icon} size={24} color="white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-accent mb-2">{process.step}</div>
                  <h4 className="font-bold text-primary mb-3">{process.title}</h4>
                  <p className="text-sm text-text-secondary">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Insights */}
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 shadow-card"
          >
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Icon name="Target" size={24} color="white" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">What Motivates Me</h3>
            <p className="text-text-secondary leading-relaxed">{personalInsights.motivation}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 shadow-card"
          >
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <Icon name="Users" size={24} color="white" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">My Approach</h3>
            <p className="text-text-secondary leading-relaxed">{personalInsights.approach}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-surface rounded-2xl p-8 shadow-card"
          >
            <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center mb-6">
              <Icon name="TrendingUp" size={24} color="white" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Looking Forward</h3>
            <p className="text-text-secondary leading-relaxed">{personalInsights.future}</p>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-accent to-secondary rounded-2xl p-12 text-surface"
        >
          <Icon name="Quote" size={48} className="mx-auto mb-6 opacity-80" />
          <blockquote className="text-2xl lg:text-3xl font-bold mb-6 leading-relaxed">
            "Great frontend development is digital choreography—where code becomes movement, interactions tell stories, and technical skills transform into emotional experiences."
          </blockquote>
          <cite className="text-lg opacity-90">— Alex Morgan, Motion-Driven Developer</cite>
        </motion.div>
      </div>
    </section>
  );
};

export default BehindTheCode;