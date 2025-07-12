import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Icon from "components/AppIcon";
import Image from "components/AppImage";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  // Mock experience data
  const experiences = [
    {
      id: 1,
      company: "Crayond Digital Private Limited",
      position: "Frontend Developer",
      duration: "Jul 2022 - Jul 2025",
      location: "Chennai, India",
      type: "Full-time",
      logo: "assets/images/crayond_1.webp",
      description: `Developed and maintained web applications for small to mid-sized clients. Collaborated with designers and backend developers to deliver user-friendly interfaces and improve site performance.`,
      achievements: [
        { metric: "20%", description: "Improved page load speed" },
        { metric: "5+", description: "Client projects delivered" },
        { metric: "3", description: "Reusable UI libraries built" },
        { metric: "100%", description: "On-time delivery rate" },
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
      projects: [
        {
          id: 1,
          name: "Revature – Edutech Platform",
          description:
            "Edutech platform to provide courses to the orgainzation employees. Its provides courses with It contains multiple module like consultant, admin and learner, we can design a course and shortlist that to specific batch.",
          image: "assets/images/revature.jpg",
          technologies: [
            "NextJs",
            "Tailwind CSS",
            "Vite",
            "Hero UI",
            "Zustand",
            "REST APIs",
            "Postman",
          ],
          impact:
            "Revature empowers aspiring tech professionals through immersive, hands-on training, bridging the gap between education and industry demand.",
          repository: "https://github.com/vigneshwaran0114/portfolio",
        },
        {
          id: 2,
          name: "Prop-Goto",
          description:
            "Contributed to a multi-tenant with modular architecture. Implemented reusable form components, interactive, & dynamic features. Built interfaces to manage listings, tenant applications, & transaction workflows.",
          image: "assets/images/propGoto.webp",
          technologies: [
            "React",
            "Redux",
            "Material UI",
            "Vite",
            "REST APIs",
            "Postman",
          ],
          impact:
            "Prop-Goto streamlines property management by offering an all-in-one digital platform that enhances efficiency, transparency, and tenant satisfaction.",
          repository: "https://github.com/vigneshwaran0114/ecommerce-ui",
        },
      ],
      testimonial: {
        text: "Consistently delivers clean, maintainable code and is a reliable team player.",
        author: "",
        role: "Project Manager",
      },
    },
    {
      id: 2,
      company: "Pondybiz Solutions Private Limited",
      position: "Frontend Developer",
      duration: "Feb 2021 - June 2022",
      location: "Puducherry, India",
      type: "Full-time",
      logo: "assets/images/pondybiz.jpg",
      description: `Worked with startups and small businesses to build landing pages, business websites, and simple dashboards. Focused on clean UI and responsive layouts.`,
      achievements: [
        { metric: "3+", description: "Websites launched" },
        { metric: "90%", description: "Client satisfaction rate" },
        { metric: "2", description: "Long-term client relationships" },
        { metric: "99%", description: "Mobile responsive designs" },
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "VueJs"],
      // projects: [
      //   {
      //     id: 3,
      //     name: "Business Landing Page",
      //     description:
      //       "Created a modern landing page for a local business to improve their online presence.",
      //     image:
      //       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      //     technologies: ["HTML", "CSS"],
      //     impact: "Increased inquiries and customer reach.",
      //     repository: "https://github.com/vigneshwaran0114/business-landing",
      //   },
      //   {
      //     id: 4,
      //     name: "Simple Dashboard",
      //     description:
      //       "Built a dashboard for tracking sales and inventory for a small retailer.",
      //     image:
      //       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      //     technologies: ["JavaScript", "Bootstrap"],
      //     impact: "Helped client monitor business metrics easily.",
      //     repository: "https://github.com/vigneshwaran0114/simple-dashboard",
      //   },
      // ],
      // testimonial: {
      //   text: "Great communication and always delivers on time. Highly recommended for web projects.",
      //   author: "Arun K.",
      //   role: "Startup Founder",
      // },
    },
  ];

  // Skills evolution data
  const skillsEvolution = [
    {
      year: "2020 - 2022",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "VueJs",
        "Git",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      year: "2022 - 2025",
      skills: [
        "ReactJs",
        "Redux",
        "Tailwind CSS",
        "Material UI",
        "Zustand",
        "API Integration",
        "NextJs",
        "Hero UI",
        "Component Libraries",
        "Performance Tuning",
      ],
    },
  ];

  // Career highlights
  // const careerHighlights = [
  //   {
  //     id: 1,
  //     title: "First Client Project Delivered",
  //     description:
  //       "Successfully launched a business website for a local client.",
  //     icon: "Zap",
  //     year: "2021",
  //   },
  //   {
  //     id: 2,
  //     title: "Built UI Component Library",
  //     description:
  //       "Created a reusable set of UI components for faster project delivery.",
  //     icon: "Layers",
  //     year: "2022",
  //   },
  //   {
  //     id: 3,
  //     title: "Mentored Junior Interns",
  //     description:
  //       "Guided new interns on best practices and project onboarding.",
  //     icon: "Award",
  //     year: "2023",
  //   },
  //   {
  //     id: 4,
  //     title: "Hackathon Winner",
  //     description:
  //       "Won 1st place in a company-wide hackathon for a web app prototype.",
  //     icon: "Rocket",
  //     year: "2020",
  //   },
  // ];

  const toggleExperience = (experienceId) => {
    setSelectedExperience(
      selectedExperience === experienceId ? null : experienceId
    );
    setActiveProject(null);
  };

  const openProject = (projectId) => {
    setActiveProject(projectId);
  };

  const closeProject = () => {
    setActiveProject(null);
  };

  useEffect(() => {
    document.title = "Experience - DevFolio Pro";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Three years of focused growth, building web applications and
              collaborating with clients and teams. Each role has contributed to
              my expertise in frontend development and problem-solving.
            </p>
          </motion.div>

          {/* Career Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-7"
          >
            {[
              { number: "3", label: "Years Experience" },
              { number: "10+", label: "Projects Delivered" },
              { number: "5+", label: "Clients Served" },
              { number: "100%", label: "On-Time Delivery" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" ref={timelineRef}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-16"
          >
            Career Timeline
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-0.5"></div>

            {experiences.map((experience, index) => {
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative mb-8 ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2"
                  } pl-12 md:pl-0`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-2 -translate-y-1 border-4 border-background shadow-lg"></div>

                  {/* Experience Card */}
                  <div className="card p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary-900 mb-1">
                          {experience.position}
                        </h3>
                        <p className="text-accent font-semibold mb-3">
                          {experience.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                          <span className="flex items-center space-x-1">
                            <Icon name="Calendar" size={14} />
                            <span>{experience.duration}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="MapPin" size={14} />
                            <span>{experience.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Briefcase" size={14} />
                            <span>{experience.type}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {experience.achievements.map((achievement) => (
                        <div
                          key={achievement.metric}
                          className="text-center p-3 bg-accent-50 rounded-lg"
                        >
                          <div className="text-2xl font-bold text-accent mb-1">
                            {achievement.metric}
                          </div>
                          <div className="text-xs text-text-secondary">
                            {achievement.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary-700 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expand Button */}
                    {Array.isArray(experience.projects) &&
                      experience.projects.length > 0 && (
                        <button
                          onClick={() => toggleExperience(experience.id)}
                          className="flex items-center space-x-2 text-accent hover:text-accent-600 font-semibold transition-colors duration-300"
                        >
                          <span>
                            {selectedExperience === experience.id
                              ? "Hide Details"
                              : "View Projects & Details"}
                          </span>
                          <Icon
                            name={
                              selectedExperience === experience.id
                                ? "ChevronUp"
                                : "ChevronDown"
                            }
                            size={16}
                          />
                        </button>
                      )}

                    {/* Expanded Content */}
                    {selectedExperience === experience.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-primary-200"
                      >
                        {/* Projects */}
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-primary-900 mb-4">
                            Key Projects
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {experience.projects.map((project) => (
                              <div
                                key={project.id}
                                className="card p-4 cursor-pointer hover:shadow-md transition-all duration-300"
                                onClick={() => openProject(project.id)}
                              >
                                <Image
                                  src={project.image}
                                  alt={project.name}
                                  className="w-full h-32 object-cover object-top rounded-lg mb-3"
                                />
                                <div className="w-full h-full">
                                  <div>
                                    <h5 className="font-semibold text-primary-900 mb-2">
                                      {project.name}
                                    </h5>
                                    <p className="text-sm text-text-secondary mb-3">
                                      {project.description}
                                    </p>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap gap-1">
                                      {project.technologies
                                        .slice(0, 2)
                                        .map((tech, idx) => (
                                          <span
                                            key={idx}
                                            className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      {project.technologies.length > 2 && (
                                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                                          +{project.technologies.length - 2}
                                        </span>
                                      )}
                                    </div>
                                    <Icon
                                      name="ExternalLink"
                                      size={16}
                                      className="text-accent"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-accent-50 p-6 rounded-lg">
                          <div className="flex items-start space-x-4">
                            <Icon
                              name="Quote"
                              size={24}
                              className="text-accent mt-1"
                            />
                            <div>
                              <p className="text-primary-700 italic mb-4">
                                "{experience.testimonial.text}"
                              </p>
                              <div className="text-sm">
                                <p className="font-semibold text-primary-900">
                                  {experience.testimonial.author}
                                </p>
                                <p className="text-text-secondary">
                                  {experience.testimonial.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Evolution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Skills Evolution
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Watch how my technical expertise has grown and evolved throughout
              my career journey.
            </p>
          </motion.div>

          {/* Skill Evolution */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillsEvolution.map((yearData, index) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-30 h-30 bg-accent rounded-full flex items-center justify-center px-3 py-1">
                    <span className="text-white font-bold text-lg">{yearData.year}</span>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {yearData.skills.map((skill) => (
                    <li key={skill} className="flex items-baseline justify-center space-x-2">
                      <span className="mt-1 text-accent">•</span>
                      <span className="text-primary-700 text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Career Highlights
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Standout moments that define my professional growth and impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {careerHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-trust rounded-lg flex items-center justify-center">
                    <Icon name={highlight.icon} size={20} color="white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-primary-900">
                        {highlight.title}
                      </h3>
                      <span className="text-sm text-accent font-medium">
                        {highlight.year}
                      </span>
                    </div>
                    <p className="text-text-secondary">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {(() => {
              const project = experiences
                .flatMap((exp) => exp.projects)
                .find((p) => p.id === activeProject);

              if (!project) return null;

              return (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-primary-900">
                      {project.name}
                    </h3>
                    <button
                      onClick={closeProject}
                      className="p-2 hover:bg-surface rounded-lg transition-colors duration-300"
                    >
                      <Icon name="X" size={20} />
                    </button>
                  </div>

                  <Image
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">
                        Description
                      </h4>
                      <p className="text-text-secondary">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">
                        Impact
                      </h4>
                      <p className="text-success-600 font-medium">
                        {project.impact}
                      </p>
                    </div>

                    {/* <div className="flex space-x-4">
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 btn-secondary"
                      >
                        <Icon name="Github" size={16} />
                        <span>View Code</span>
                      </a>
                      <button className="flex items-center space-x-2 btn-primary">
                        <Icon name="ExternalLink" size={16} />
                        <span>Live Demo</span>
                      </button>
                    </div> */}
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Experience;
