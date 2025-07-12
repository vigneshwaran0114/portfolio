import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const GrowthTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const timelineData = [
    {
      year: '2021',
      title: 'Frontend Journey Begins',
      company: 'Self-Taught Developer',
      description: 'Started learning React and modern JavaScript. Built first portfolio website and completed 5 personal projects.',
      achievements: ['Mastered React fundamentals', 'Built 5 personal projects', 'Learned responsive design'],
      icon: 'Rocket',
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2022',
      title: 'Junior Frontend Developer',
      company: 'TechStart Solutions',
      description: 'Joined first development team. Contributed to 3 major client projects and improved page load speeds by 40%.',
      achievements: ['Reduced load times by 40%', 'Delivered 3 client projects', 'Learned team collaboration'],
      icon: 'Code2',
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2023',
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc',
      description: 'Led frontend development for e-commerce platform serving 10,000+ users. Implemented advanced animations and micro-interactions.',
      achievements: ['Led team of 3 developers', '10,000+ active users', 'Implemented GSAP animations'],
      icon: 'Users',
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2024',
      title: 'Senior Frontend Developer',
      company: 'Current Role',
      description: 'Architecting scalable React applications with TypeScript. Mentoring junior developers and establishing best practices.',
      achievements: ['Mentoring 2 junior devs', 'TypeScript architecture', 'Performance optimization'],
      icon: 'Award',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Three Years of Focused Growth
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A journey of continuous learning, meaningful contributions, and measurable impact in frontend development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-trust to-success"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                data-index={index}
                className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 ${
                    visibleItems.includes(index) ? 'scale-100 opacity-100' : 'scale-50 opacity-50'
                  }`}>
                    <Icon name={item.icon} size={24} color="white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-700 ${
                    visibleItems.includes(index) 
                      ? 'translate-y-0 opacity-100' :'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: `${index * 0.2}s` }}>
                    
                    {/* Year Badge */}
                    <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      <Icon name="Calendar" size={14} />
                      <span>{item.year}</span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-accent font-semibold mb-3">{item.company}</p>

                    {/* Description */}
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary-700 mb-2">Key Achievements:</h4>
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-gradient-to-r from-accent-50 to-trust-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-900 mb-2">50+</div>
              <div className="text-text-secondary">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900 mb-2">3</div>
              <div className="text-text-secondary">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900 mb-2">15+</div>
              <div className="text-text-secondary">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900 mb-2">98%</div>
              <div className="text-text-secondary">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthTimeline;