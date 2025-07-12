import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const About = () => {
  const [activeSection, setActiveSection] = useState('story');
  const [dayInLifeHover, setDayInLifeHover] = useState(null);

  // Mock data
  const personalInfo = {
    name: "Vigneshwaran S",
    title: "Frontend Developer",
    location: "Chennai, India",
    experience: "3+ Years",
    profileImage: "assets/images/vigneshwaran.png",
    philosophy: "Code that performs beautifully",
    biography: `I'm a passionate frontend developer with over 3 years of experience specializing in React, modern JavaScript, and creating exceptional user experiences. My journey in technology began with a fascination for building things that people interact with daily. This curiosity led me to pursue intensive learning in web development and eventually specialize in creating intuitive, efficient, and beautiful web applications.

What drives me is the intersection of technology and human experience – finding ways to make complex systems feel simple and intuitive for users while maintaining technical excellence behind the scenes. I believe that great code isn't just functional; it's elegant, maintainable, and serves a greater purpose in improving people's digital interactions.`,
    currentFocus: "Building scalable React applications with modern tooling and performance optimization techniques."
  };

  const timeline = [
    {
      year: "2025",
      title: "Frontend Developer",
      company: "Crayond Digital Private Limited",
      description: "Leading frontend architecture decisions and mentoring junior developers while building complex NextJs applications.",
      achievements: ["Improved app performance by 60%", "Led team of 4 developers", "Implemented design system"]
    },
    {
      year: "2024",
      title: "Frontend Developer",
      company: "Crayond Digital Private Limited",
      description: "Leading frontend architecture decisions and mentoring junior developers while building complex React applications.",
      achievements: ["Improved app performance by 40%",  "Implemented design system"]
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Crayond Digital Private Limited",
      description: "Developed responsive web applications using React, TypeScript, and modern CSS frameworks.",
      achievements: ["Built 12+ production applications", "Reduced bundle size by 35%", "Implemented CI/CD pipeline"]
    },
    {
      year: "2022",
      title: "Junior Developer",
      company: "Crayond Digital Private Limited",
      description: "Started my professional journey building user interfaces and learning industry best practices.",
      achievements: ["Completed 10+ projects", "Learned React ecosystem", "Contributed to open source"]
    },
    {
      year: "2021",
      title: "Self-Taught Journey",
      company: "Independent Learning",
      description: "Intensive self-study period focusing on modern web development technologies and frameworks.",
      achievements: ["Completed 5+ online courses", "Built personal projects", "Joined developer communities"]
    }
  ];

  const values = [
    {
      title: "Performance & Aesthetics Aren\'t Mutually Exclusive",
      description: "Interfaces should load fast & run smoothly. I optimize for both visual appeal & technical performance.",
      icon: "Zap",
      demo: "Interactive performance metrics"
    },
    {
      title: "Every Animation Serves a Purpose",
      description: "Motion design should guide users, provide feedback, and enhance understanding - never just for decoration.",
      icon: "Play",
      demo: "Purposeful micro-interactions"
    },
    {
      title: "Code Quality Reflects Professional Standards",
      description: "Clean, maintainable code isn\'t just about today\'s functionality - it\'s about tomorrow\'s scalability.",
      icon: "Code",
      demo: "Code architecture examples"
    },
    {
      title: "User Experience Drives Technical Decisions",
      description: "Every technical choice should ultimately serve the end user\'s needs and improve their experience.",
      icon: "Users",
      demo: "UX-driven development process"
    }
  ];

  const dayInLife = [
    {
      time: "9:00 AM",
      activity: "Code Review & Planning",
      description: "Start the day reviewing pull requests and planning development tasks with the team.",
      tools: ["GitHub", "Slack", "Notion"],
      icon: "Coffee"
    },
    {
      time: "10:30 AM",
      activity: "Deep Work Session",
      description: "Focus time for complex feature development and problem-solving without interruptions.",
      tools: ["VS Code", "React DevTools", "Chrome DevTools"],
      icon: "Code2"
    },
    {
      time: "1:00 PM",
      activity: "Collaboration & Meetings",
      description: "Team standups, design reviews, and cross-functional collaboration sessions.",
      tools: ["Zoom", "Figma", "Miro"],
      icon: "Users"
    },
    {
      time: "3:00 PM",
      activity: "Testing & Optimization",
      description: "Writing tests, performance optimization, and ensuring code quality standards.",
      tools: ["Jest", "Lighthouse", "Bundle Analyzer"],
      icon: "TestTube"
    },
    {
      time: "5:00 PM",
      activity: "Learning & Documentation",
      description: "Staying updated with latest technologies and documenting project decisions.",
      tools: ["MDN", "React Docs", "Tech Blogs"],
      icon: "BookOpen"
    }
  ];

  const methodology = [
    {
      phase: "Discovery",
      description: "Understanding requirements, user needs, and technical constraints",
      activities: ["Stakeholder interviews", "Technical analysis", "User research"],
      icon: "Search"
    },
    {
      phase: "Planning",
      description: "Architecture decisions, technology selection, and project roadmap",
      activities: ["Technical design", "Timeline estimation", "Risk assessment"],
      icon: "Map"
    },
    {
      phase: "Development",
      description: "Iterative development with continuous feedback and testing",
      activities: ["Agile development", "Code reviews", "Testing"],
      icon: "Code"
    },
    {
      phase: "Deployment",
      description: "Production deployment with monitoring and performance optimization",
      activities: ["CI/CD pipeline", "Performance monitoring", "User feedback"],
      icon: "Rocket"
    }
  ];

  const workspaceSetup = {
    hardware: ["HP Laptop", "34\" Ultrawide Monitor", "Mechanical Keyboard", "Ergonomic Mouse"],
    software: ["VS Code", "Chrome DevTools", "Figma", "Notion", "Slack"],
    environment: "Minimalist setup with plants, good lighting, and noise-canceling headphones"
  };

  const sections = [
    { id: 'story', label: 'My Story', icon: 'User' },
    { id: 'journey', label: 'Journey', icon: 'MapPin' },
    { id: 'values', label: 'Values', icon: 'Heart' },
    { id: 'methodology', label: 'Methodology', icon: 'Settings' },
    { id: 'lifestyle', label: 'Day in Life', icon: 'Clock' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['story', 'journey', 'values', 'methodology', 'lifestyle'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-surface to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-trust rounded-2xl transform rotate-6"></div>
                <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-success text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4"
                >
                  Hi, I'm {personalInfo.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl text-text-secondary mb-6"
                >
                  {personalInfo.title}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-2xl font-semibold text-gradient mb-8"
                >
                  "{personalInfo.philosophy}"
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-primary-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="MapPin" size={20} className="text-accent" />
                    <span className="font-semibold text-primary-900">Location</span>
                  </div>
                  <p className="text-text-secondary">{personalInfo.location}</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-primary-200">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="Calendar" size={20} className="text-accent" />
                    <span className="font-semibold text-primary-900">Experience</span>
                  </div>
                  <p className="text-text-secondary">{personalInfo.experience}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === section.id
                    ? 'text-accent bg-accent-50 shadow-sm'
                    : 'text-text-secondary hover:text-primary-900 hover:bg-surface'
                }`}
              >
                <Icon name={section.icon} size={16} />
                <span>{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Story Section */}
      <section id="story" className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">My Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-trust mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-text-secondary mb-12"
          >
            <p className="mb-6 text-lg leading-relaxed">{personalInfo.biography}</p>
            <div className="bg-accent-50 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-accent-700 font-medium mb-2">Currently Focused On:</p>
              <p className="text-accent-600">{personalInfo.currentFocus}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">My Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-trust mx-auto mb-8"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-trust"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-primary-200">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl font-bold text-accent">{item.year}</span>
                      <div className="h-px bg-primary-200 flex-1"></div>
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
                    <p className="text-accent font-semibold mb-3">{item.company}</p>
                    <p className="text-text-secondary mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success" />
                          <span className="text-sm text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Core Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-trust mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              These principles guide every decision I make in development, from architecture choices to user interface design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 border border-primary-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-trust rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={value.icon} size={24} color="white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">{value.title}</h3>
                    <p className="text-text-secondary mb-4">{value.description}</p>
                    <div className="flex items-center space-x-2 text-accent font-medium">
                      <Icon name="Play" size={16} />
                      <span className="text-sm">{value.demo}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">My Methodology</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-trust mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              A systematic approach to development that ensures quality, efficiency, and successful project outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 border border-primary-200 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-trust rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={phase.icon} size={24} color="white" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{phase.phase}</h3>
                <p className="text-text-secondary mb-4">{phase.description}</p>
                <div className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <Icon name="Dot" size={12} className="text-accent" />
                      <span className="text-sm text-text-secondary">{activity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Day in Life Section */}
      <section id="lifestyle" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">A Day in My Life</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-trust mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Hover over each time block to see my workflow, tools, and approach to daily development tasks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {dayInLife.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 border border-primary-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setDayInLifeHover(index)}
                onMouseLeave={() => setDayInLifeHover(null)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-trust rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={item.icon} size={20} color="white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900">{item.time}</h3>
                    <p className="text-sm text-accent font-semibold">{item.activity}</p>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4">{item.description}</p>
                
                {dayInLifeHover === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-primary-200 pt-4"
                  >
                    <p className="text-sm font-semibold text-primary-900 mb-2">Tools & Resources:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent-50 text-accent text-xs rounded-full border border-accent-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Workspace Setup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 border border-primary-200"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">My Workspace Setup</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-primary-900 mb-3 flex items-center space-x-2">
                  <Icon name="Monitor" size={20} className="text-accent" />
                  <span>Hardware</span>
                </h4>
                <ul className="space-y-2">
                  {workspaceSetup.hardware.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Icon name="Dot" size={12} className="text-accent" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-primary-900 mb-3 flex items-center space-x-2">
                  <Icon name="Code" size={20} className="text-accent" />
                  <span>Software</span>
                </h4>
                <ul className="space-y-2">
                  {workspaceSetup.software.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Icon name="Dot" size={12} className="text-accent" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-primary-900 mb-3 flex items-center space-x-2">
                  <Icon name="Home" size={20} className="text-accent" />
                  <span>Environment</span>
                </h4>
                <p className="text-text-secondary">{workspaceSetup.environment}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-16 bg-gradient-to-br from-accent-50 to-trust-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Let's Work Together</h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              I'm always excited to collaborate on projects that challenge me to grow and create meaningful user experiences. Whether you're a startup, agency, or established company, let's discuss how we can bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 px-4 py-2 bg-success-50 rounded-full border border-success-200">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                <span className="text-success-700 font-medium">Available for new projects</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-trust-50 rounded-full border border-trust-200">
                <Icon name="Clock" size={16} className="text-trust-600" />
                <span className="text-trust-700 font-medium">Response within 24 hours</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-conversion hover:bg-conversion-hover text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 ease-smooth transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span>Start a Project</span>
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="mailto:vigneshwaran.0114@gmail.com"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 ease-smooth"
              >
                <Icon name="Mail" size={16} />
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;