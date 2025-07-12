import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TestimonialCards = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // const testimonials = [
  //   {
  //     id: 1,
  //     name: 'Sarah Chen',
  //     role: 'Product Manager',
  //     company: 'TechStart Solutions',
  //     avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
  //     content: `Alex transformed our user experience completely. The attention to detail in animations and the performance optimizations resulted in a 40% increase in user engagement. His code is clean, well-documented, and maintainable.`,
  //     rating: 5,
  //     project: 'E-commerce Platform Redesign'
  //   },
  //   {
  //     id: 2,
  //     name: 'Michael Rodriguez',
  //     role: 'CTO',
  //     company: 'Digital Innovations Inc',
  //     avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  //     content: `Working with Alex was exceptional. He not only delivered pixel-perfect implementations but also suggested improvements that enhanced the overall user experience. His TypeScript skills and React expertise are top-notch.`,
  //     rating: 5,
  //     project: 'Task Management Dashboard'
  //   },
  //   {
  //     id: 3,
  //     name: 'Emily Watson',
  //     role: 'Design Director',
  //     company: 'Creative Studio Pro',
  //     avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
  //     content: `Alex bridges the gap between design and development beautifully. He understands design principles and translates them into smooth, interactive experiences. The GSAP animations he implemented exceeded our expectations.`,
  //     rating: 5,
  //     project: 'Portfolio Website Development'
  //   },
  //   {
  //     id: 4,
  //     name: 'David Kim',
  //     role: 'Startup Founder',
  //     company: 'EduLearn Platform',
  //     avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
  //     content: `Vigneshwaran helped us launch our learning platform with a focus on performance and accessibility. His expertise in React and modern web technologies was crucial in scaling our application to serve 10,000+ users.`,
  //     rating: 5,
  //     project: 'Learning Management System'
  //   }
  // ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Trusted by teams and leaders who value quality, reliability, and exceptional results.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-trust/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Quote" size={24} className="text-accent" />
            </div>

            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <Icon key={index} name="Star" size={20} className="text-warning fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl text-primary-900 leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Project Tag */}
              <div className="inline-flex items-center space-x-2 bg-success-50 text-success-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Icon name="Briefcase" size={14} />
                <span>{testimonials[currentTestimonial].project}</span>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-accent/20">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-text-secondary">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-accent font-semibold">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary-700 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary-700 hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-accent scale-125' :'bg-primary-300 hover:bg-primary-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Testimonial Cards */}
        <div className="hidden lg:block">
          {testimonials.map((testimonial, index) => {
            if (index === currentTestimonial) return null;
            
            const positions = [
              'top-20 left-10 rotate-12',
              'top-40 right-10 -rotate-12',
              'bottom-20 left-20 rotate-6'
            ];
            
            const positionIndex = (index - currentTestimonial - 1 + testimonials.length) % 3;
            
            return (
              <div
                key={testimonial.id}
                className={`absolute ${positions[positionIndex]} w-64 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 transform transition-all duration-500 hover:scale-105 cursor-pointer opacity-60 hover:opacity-100`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary-900 text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-text-secondary">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-sm text-primary-700 line-clamp-3">
                  "{testimonial.content.substring(0, 100)}..."
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">Trusted by companies of all sizes</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechStart Solutions', 'Digital Innovations Inc', 'Creative Studio Pro', 'EduLearn Platform'].map((company) => (
              <div key={company} className="text-primary-600 font-semibold text-sm">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCards;