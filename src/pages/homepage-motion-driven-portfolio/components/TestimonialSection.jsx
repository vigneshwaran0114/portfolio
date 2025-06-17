import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = ({ isVisible }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Solutions",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      content: `Working with this developer was transformative for our product. The animations and interactions they created didn't just look beautiful – they significantly improved our user engagement metrics. Our bounce rate dropped by 40% and time on site increased by 65%.`,
      project: "SaaS Dashboard Redesign",
      rating: 5,
      metrics: { engagement: "+65%", bounce: "-40%", conversion: "+28%" }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Creative Director",
      company: "Pixel & Motion Agency",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: `Exceptional technical skills combined with genuine creative vision. They took our static designs and brought them to life with purposeful animations that enhanced the storytelling. The attention to performance while maintaining visual excellence is remarkable.`,
      project: "Creative Agency Portfolio",
      rating: 5,
      metrics: { awards: "3", performance: "98%", satisfaction: "4.9/5" }
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Startup Founder",
      company: "GreenTech Innovations",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      content: `As a non-technical founder, I was amazed by how they translated complex ideas into intuitive, engaging interfaces. The motion design helped communicate our value proposition more effectively than any static presentation ever could.`,
      project: "Startup Landing Page",
      rating: 5,
      metrics: { leads: "+180%", demo: "+95%", funding: "Series A" }
    }
  ];

  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isVisible, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section 
      id="testimonials"
      data-animate
      className="py-20 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real results from real projects. See how motion-driven development 
            creates measurable business impact.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className={`bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-surface transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Quote */}
                <div className="mb-6">
                  <Icon name="Quote" size={48} className="text-accent mb-4" />
                  <blockquote className="text-xl md:text-2xl leading-relaxed font-medium">
                    {currentData.content}
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src={currentData.avatar}
                    alt={currentData.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{currentData.name}</h4>
                    <p className="text-primary-200">{currentData.role}</p>
                    <p className="text-accent font-medium">{currentData.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-primary-200">Project: {currentData.project}</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="lg:col-span-1">
                <div className="bg-surface/10 backdrop-blur-sm rounded-xl p-6">
                  <h5 className="text-lg font-bold mb-4 text-center">Project Impact</h5>
                  <div className="space-y-4">
                    {Object.entries(currentData.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-primary-200 capitalize">{key}:</span>
                        <span className="text-accent font-bold text-lg">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-primary text-surface rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-accent scale-125' : 'bg-primary-300 hover:bg-primary-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-primary text-surface rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm flex items-center space-x-2 mx-auto"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
              <span>{isAutoPlaying ? "Pause" : "Play"} Auto-rotation</span>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Join these satisfied clients and transform your digital presence with 
              motion-driven development that delivers real results.
            </p>
            <Link
              to="/contact-collaboration-hub"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-surface font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Icon name="MessageCircle" size={20} />
              <span>Start Your Project</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;