import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../components/AppIcon';

import TimelineItem from './components/TimelineItem';
import CareerHighlights from './components/CareerHighlights';
import GrowthMetrics from './components/GrowthMetrics';
import LearningJourney from './components/LearningJourney';

const ExperienceTimeline = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      id: 1,
      company: "TechFlow Solutions",
      position: "Senior Frontend Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      description: `Leading frontend development for enterprise-scale applications serving 100K+ users. Architected and implemented a comprehensive design system that reduced development time by 40% and improved consistency across 15+ products. Spearheaded the migration from legacy jQuery codebase to modern React 18 with TypeScript, resulting in 60% performance improvement and enhanced developer experience.

Collaborated with cross-functional teams including UX designers, backend engineers, and product managers to deliver pixel-perfect, accessible interfaces. Mentored junior developers and established best practices for code review, testing, and deployment processes.`,
      achievements: [
        "Reduced page load times by 60% through code splitting and optimization",
        "Led team of 5 developers in successful product redesign",
        "Implemented automated testing suite with 95% code coverage",
        "Delivered 12 major features ahead of schedule"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Jest", "Cypress"],
      projects: [
        {
          name: "Enterprise Dashboard Redesign",
          description: "Complete overhaul of admin dashboard with modern React architecture",
          impact: "40% increase in user engagement",
          link: "/portfolio-project-universe"
        },
        {
          name: "Component Library System",
          description: "Scalable design system used across multiple products",
          impact: "60% reduction in development time",
          link: "/portfolio-project-universe"
        }
      ],
      testimonial: {
        text: "Outstanding technical leadership and innovative problem-solving. Consistently delivers high-quality solutions that exceed expectations.",
        author: "Sarah Chen",
        role: "Engineering Manager",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      }
    },
    {
      id: 2,
      company: "Digital Innovations Inc",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      location: "Austin, TX",
      type: "Full-time",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop&crop=center",
      description: `Developed and maintained responsive web applications for diverse client portfolio including e-commerce, healthcare, and fintech sectors. Collaborated closely with design team to implement pixel-perfect interfaces with smooth animations and micro-interactions that enhanced user engagement by 35%.

Specialized in performance optimization and accessibility compliance, ensuring all projects met WCAG 2.1 AA standards. Introduced modern development practices including component-driven development and automated testing workflows.`,
      achievements: [
        "Improved website performance scores by average of 45%",
        "Successfully delivered 25+ client projects on time",
        "Reduced bug reports by 50% through comprehensive testing",
        "Mentored 3 junior developers in React best practices"
      ],
      technologies: ["React", "JavaScript", "SCSS", "Webpack", "Redux", "REST APIs", "Git"],
      projects: [
        {
          name: "E-commerce Platform Rebuild",
          description: "Modern React-based shopping experience with advanced filtering",
          impact: "25% increase in conversion rates",
          link: "/portfolio-project-universe"
        },
        {
          name: "Healthcare Portal Interface",
          description: "Patient management system with real-time data visualization",
          impact: "Improved patient satisfaction by 30%",
          link: "/portfolio-project-universe"
        }
      ],
      testimonial: {
        text: "Exceptional attention to detail and ability to translate complex requirements into elegant solutions. A true asset to any development team.",
        author: "Michael Rodriguez",
        role: "Technical Lead",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      }
    },
    {
      id: 3,
      company: "StartupLab",
      position: "Junior Frontend Developer",
      duration: "2019 - 2020",
      location: "Remote",
      type: "Full-time",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center",
      description: `Joined as the first frontend hire in a fast-paced startup environment, contributing to the development of a SaaS platform from MVP to production. Worked directly with founders and product team to rapidly prototype and iterate on user interface designs based on customer feedback.

Gained extensive experience in agile development methodologies and learned to balance speed of delivery with code quality. Developed strong problem-solving skills while working with limited resources and tight deadlines.`,
      achievements: [
        "Built MVP frontend in 6 weeks from concept to launch",
        "Implemented responsive design supporting 5+ device types",
        "Achieved 98% uptime for production applications",
        "Contributed to successful Series A funding round"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Bootstrap", "Node.js", "MongoDB"],
      projects: [
        {
          name: "SaaS Platform MVP",
          description: "Complete frontend for project management tool",
          impact: "Enabled successful product launch",
          link: "/portfolio-project-universe"
        },
        {
          name: "Customer Onboarding Flow",
          description: "Multi-step user registration and setup process",
          impact: "90% completion rate achieved",
          link: "/portfolio-project-universe"
        }
      ],
      testimonial: {
        text: "Incredible learning ability and adaptability. Quickly became an integral part of our product development process.",
        author: "Jennifer Park",
        role: "Co-founder & CTO",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      }
    },
    {
      id: 4,
      company: "WebCraft Agency",
      position: "Frontend Developer Intern",
      duration: "2018 - 2019",
      location: "New York, NY",
      type: "Internship",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
      description: `Completed comprehensive internship program focusing on modern web development practices and client project delivery. Worked on diverse projects ranging from small business websites to complex web applications, gaining exposure to various industries and technical requirements.

Learned fundamental skills in responsive design, cross-browser compatibility, and performance optimization while working alongside senior developers. Participated in client meetings and learned to translate business requirements into technical solutions.`,
      achievements: [
        "Successfully completed 15+ client projects",
        "Received outstanding performance review",
        "Contributed to agency's first React-based project",
        "Earned full-time offer upon graduation"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "WordPress"],
      projects: [
        {
          name: "Restaurant Chain Website",
          description: "Multi-location restaurant website with online ordering",
          impact: "20% increase in online orders",
          link: "/portfolio-project-universe"
        },
        {
          name: "Corporate Rebrand Implementation",
          description: "Complete website redesign for financial services company",
          impact: "Improved brand consistency across all touchpoints",
          link: "/portfolio-project-universe"
        }
      ],
      testimonial: {
        text: "Demonstrated exceptional potential and work ethic. Quickly progressed from basic tasks to contributing meaningfully to complex projects.",
        author: "David Thompson",
        role: "Senior Developer",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      }
    }
  ];

  const careerStats = {
    totalExperience: "5+ Years",
    projectsCompleted: "50+",
    clientSatisfaction: "98%",
    teamSize: "15+ Developers"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <motion.div 
          ref={containerRef}
          style={{ y, opacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-accent-50 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Icon name="Clock" size={16} />
              <span>Professional Journey</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-primary mb-6 font-headline"
            >
              Experience
              <span className="block text-accent">Timeline</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              A journey through professional growth, technical mastery, and meaningful contributions to innovative projects that shape the digital landscape.
            </motion.p>
          </div>

          {/* Career Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {Object.entries(careerStats).map(([key, value], index) => (
              <div key={key} className="text-center">
                <div className="bg-surface rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-accent mb-2">{value}</div>
                  <div className="text-sm text-text-secondary capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline">
              Professional Journey
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Each role has contributed to my growth as a developer and shaped my approach to creating exceptional digital experiences.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent via-secondary to-primary h-full rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={experience.id}
                  experience={experience}
                  index={index}
                  isActive={activeExperience === index}
                  onActivate={() => setActiveExperience(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <CareerHighlights />

      {/* Growth Metrics */}
      <GrowthMetrics />

      {/* Learning Journey */}
      <LearningJourney />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-surface mb-6 font-headline">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how my experience and passion for frontend development can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact-collaboration-hub"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-surface font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300 shadow-lg"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Start a Conversation</span>
              </motion.a>
              <motion.a
                href="/portfolio-project-universe"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-surface text-primary font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 shadow-lg"
              >
                <Icon name="Briefcase" size={20} />
                <span>View My Work</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceTimeline;