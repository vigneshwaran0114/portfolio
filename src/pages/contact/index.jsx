// src/pages/contact/index.jsx
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "components/AppIcon";
import ChatbotWidget from "components/ChatbotWidget";
import emailjs from "emailjs-com";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    details: "",
    honeypot: "", // Spam protection
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Refs for animations
  const formRef = useRef(null);
  const submitButtonRef = useRef(null);
  const successRef = useRef(null);
  const fieldRefs = useRef([]);
  const headerRef = useRef(null);
  // Add a ref for the ripple element
  const rippleRef = useRef(null);

  // Contact information (right side - unchanged)
  const contactInfo = {
    availability: "Available for new projects",
    timezone: "IST (UTC+5:30)",
    responseTime: "Within 24 hours",
    preferredMethods: ["Email", "LinkedIn", "Video Call"],
    workingHours: "10:00 AM - 6:00 PM IST",
    email: "vigneshwaran.0114@gmail.com",
    phone: "+91 7871126170",
    location: "Chennai, Tamilnadu, India",
  };

  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "Sarah Chen",
  //     role: "Product Manager at TechFlow",
  //     company: "TechFlow Solutions",
  //     content: `Working with this developer was exceptional. The project was delivered on time, exceeded our expectations, and the communication throughout was outstanding. Highly recommend for any serious web development project.`,
  //     avatar:
  //       "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  //     rating: 5,
  //     project: "E-commerce Platform",
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Rodriguez",
  //     role: "Startup Founder",
  //     company: "InnovateLab",
  //     content: `The technical expertise and attention to detail were remarkable. Our web application performs flawlessly and the user experience is exactly what we envisioned. Great collaboration from start to finish.`,
  //     avatar:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  //     rating: 5,
  //     project: "SaaS Dashboard",
  //   },
  // ];

  const socialLinks = [
    {
      name: "EmailID",
      icon: "Mail",
      href: "mailto:vigneshwaran.0114@gmail.com",
      color: "text-red-600",
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      href: "http://www.linkedin.com/in/vigneshwaran-s-27a766185",
      color: "text-blue-600",
    },
    {
      name: "GitHub",
      icon: "Github",
      href: "https://github.com/vigneshwaran0114",
      color: "text-gray-800",
    },
  ];

  // Initialize animations
  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

    // Form container animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }

    // Form fields staggered animation on scroll
    if (fieldRefs.current.length > 0) {
      gsap.fromTo(
        fieldRefs.current,
        {
          opacity: 0,
          x: -50,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Submit button hover animation setup
    if (submitButtonRef.current) {
      const button = submitButtonRef.current;

      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.05,
          boxShadow: '0 8px 24px 0 rgba(16, 185, 129, 0.15)',
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          boxShadow: '0 4px 12px 0 rgba(16, 185, 129, 0.08)',
          duration: 0.3,
          ease: "power2.out",
        });
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  // Field focus animation
  const handleFieldFocus = (e) => {
    gsap.to(e.target, {
      borderColor: "#10b981", // Tailwind emerald-500
      boxShadow: "0 0 0 2px #6ee7b7",
      scale: 1.03,
      duration: 0.2,
      ease: "power2.out",
    });
  };
  const handleFieldBlur = (e) => {
    gsap.to(e.target, {
      borderColor: "#e5e7eb", // Tailwind gray-200
      boxShadow: "none",
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (
      !/^[\d\s\-\+\(\)]{10,}$/.test(formData.mobile.replace(/\s/g, ""))
    ) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    if (!formData.details.trim()) {
      newErrors.details = "Please provide some details about your inquiry";
    } else if (formData.details.trim().length < 10) {
      newErrors.details = "Please provide more details (minimum 10 characters)";
    }

    // Check honeypot field (spam protection)
    if (formData.honeypot) {
      newErrors.honeypot = "Spam detected";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Animate error fields
      Object.keys(errors).forEach((fieldName) => {
        const fieldElement = document.querySelector(`[name="${fieldName}"]`);
        if (fieldElement) {
          gsap.fromTo(
            fieldElement,
            { x: 0 },
            {
              x: -10,
              duration: 0.1,
              repeat: 5,
              yoyo: true,
              ease: "power2.inOut",
            }
          );
        }
      });
      return;
    }

    setIsSubmitting(true);

    // Animate submit button (pop, glow, pulse)
    if (submitButtonRef.current) {
      gsap.timeline()
        .to(submitButtonRef.current, {
          scale: 0.92,
          boxShadow: '0 0 0 8px rgba(16, 185, 129, 0.15)',
          duration: 0.13,
          ease: "power2.inOut",
        })
        .to(submitButtonRef.current, {
          scale: 1.08,
          boxShadow: '0 0 0 16px rgba(16, 185, 129, 0.10)',
          duration: 0.18,
          ease: "back.out(2)",
        })
        .to(submitButtonRef.current, {
          scale: 1,
          boxShadow: '0 4px 12px 0 rgba(16, 185, 129, 0.08)',
          duration: 0.18,
          ease: "power2.out",
        });
    }

    // Ripple effect
    if (rippleRef.current) {
      gsap.set(rippleRef.current, { scale: 0, opacity: 0.5 });
      gsap.to(rippleRef.current, {
        scale: 2.5,
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
        onComplete: () => {
          gsap.set(rippleRef.current, { scale: 0, opacity: 0 });
        }
      });
    }

    // EmailJS integration
    const templateParams = {
      subject: "New Contact Form Submission",
      name: `${formData.firstName} ${formData.lastName}`,
      mobile: formData.mobile,
      details: formData.details,
      time: new Date().toLocaleString(),
    };

    // TODO: Replace the following placeholders with your actual EmailJS credentials
    const SERVICE_ID = "service_lfkkq6i"; // e.g., 'service_xxx'
    const TEMPLATE_ID = "template_ieda6pp"; // e.g., 'template_xxx'
    const PUBLIC_KEY = "Os3dwIKOnsFE0479G"; // e.g., 'user_xxx' or 'public_xxx'

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          // Success animation
          if (successRef.current) {
            gsap?.fromTo(
              successRef.current,
              {
                opacity: 0,
                scale: 0.8,
                y: 20,
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                ease: "back.out(1.7)",
              }
            );
          }
        },
        (error) => {
          setIsSubmitting(false);
          alert("Failed to send message. Please try again later.", error.text);
        }
      );
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      details: "",
      honeypot: "",
    });
    setIsSubmitted(false);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div
          ref={successRef}
          className="bg-white rounded-xl shadow-2xl p-10 max-w-md w-full text-center animate-fade-in"
        >
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-8 animate-pop-in">
            <Icon name="Check" size={40} color="white" />
          </div>
          <h1 className="text-3xl font-bold text-primary-900 mb-4">
            Message Sent Successfully!
          </h1>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Thank you for reaching out. I'll review your inquiry and respond within 24 hours with next steps for our potential collaboration.
          </p>
          <button
            onClick={resetForm}
            className="btn-secondary mt-2 px-6 py-2 rounded-lg font-semibold"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 lg:pt-24">
      <ChatbotWidget />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Let's Build Something
            <span className="text-gradient block">Amazing Together</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Ready to transform your ideas into exceptional digital experiences?
            Let's discuss your project and explore how we can collaborate to
            achieve your goals.
          </p>

          {/* Availability Status */}
          <div className="inline-flex items-center space-x-3 bg-success-50 border border-success-200 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse-slow"></div>
            <span className="font-semibold text-success-700">
              {contactInfo.availability}
            </span>
            <span className="text-success-600">•</span>
            <span className="text-success-600">{contactInfo.timezone}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form - Left Side */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                Get in Touch
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden spam protection */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  style={{ width: "100%", display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div ref={(el) => (fieldRefs.current[0] = el)}>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-primary-900 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={handleFieldFocus}
                      onBlur={handleFieldBlur}
                      className={`form-input w-full rounded-xl shadow-sm bg-white/80 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 ${errors.firstName ? "border-error focus:border-error" : ""}`}
                      placeholder="Your first name"
                      required
                      aria-describedby={
                        errors.firstName ? "firstName-error" : undefined
                      }
                    />
                    {errors.firstName && (
                      <p
                        id="firstName-error"
                        className="text-error text-sm mt-1"
                        role="alert"
                      >
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div ref={(el) => (fieldRefs.current[1] = el)}>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-primary-900 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={handleFieldFocus}
                      onBlur={handleFieldBlur}
                      className={`form-input w-full rounded-xl shadow-sm bg-white/80 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 ${errors.lastName ? "border-error focus:border-error" : ""}`}
                      placeholder="Your last name"
                      required
                      aria-describedby={
                        errors.lastName ? "lastName-error" : undefined
                      }
                    />
                    {errors.lastName && (
                      <p
                        id="lastName-error"
                        className="text-error text-sm mt-1"
                        role="alert"
                      >
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div ref={(el) => (fieldRefs.current[2] = el)}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary-900 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={handleFieldFocus}
                    onBlur={handleFieldBlur}
                    className={`form-input w-full rounded-xl shadow-sm bg-white/80 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 ${errors.email ? "border-error focus:border-error" : ""}`}
                    placeholder="your@email.com"
                    required
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-error text-sm mt-1"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Mobile Field */}
                <div ref={(el) => (fieldRefs.current[3] = el)}>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-semibold text-primary-900 mb-2"
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onFocus={handleFieldFocus}
                    onBlur={handleFieldBlur}
                    className={`form-input w-full rounded-xl shadow-sm bg-white/80 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 ${errors.mobile ? "border-error focus:border-error" : ""}`}
                    placeholder="+91 00000 00000"
                    required
                    aria-describedby={
                      errors.mobile ? "mobile-error" : undefined
                    }
                  />
                  {errors.mobile && (
                    <p
                      id="mobile-error"
                      className="text-error text-sm mt-1"
                      role="alert"
                    >
                      {errors.mobile}
                    </p>
                  )}
                </div>

                {/* Details Field */}
                <div ref={(el) => (fieldRefs.current[4] = el)}>
                  <label
                    htmlFor="details"
                    className="block text-sm font-semibold text-primary-900 mb-2"
                  >
                    Details *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    onFocus={handleFieldFocus}
                    onBlur={handleFieldBlur}
                    rows={6}
                    className={`form-input w-full rounded-xl shadow-sm bg-white/80 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 resize-none ${errors.details ? "border-error focus:border-error" : ""}`}
                    placeholder="Tell me about your project, goals, specific requirements, and any technical preferences you have..."
                    required
                    aria-describedby={
                      errors.details ? "details-error" : undefined
                    }
                  />
                  {errors.details && (
                    <p
                      id="details-error"
                      className="text-error text-sm mt-1"
                      role="alert"
                    >
                      {errors.details}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div ref={(el) => (fieldRefs.current[5] = el)}>
                  <button
                    ref={submitButtonRef}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary flex items-center justify-center space-x-2 relative overflow-hidden ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Icon name="Send" size={16} />
                      </>
                    )}
                    <span ref={rippleRef} className="absolute left-1/2 top-1/2 pointer-events-none w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 opacity-0 z-0"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar - Right Side (Unchanged) */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-primary-900 mb-1">Email</p>
                    <p className="text-text-secondary">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-primary-900 mb-1">Phone</p>
                    <p className="text-text-secondary">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-primary-900 mb-1">
                      Response Time
                    </p>
                    <p className="text-text-secondary">
                      {contactInfo.responseTime}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-primary-900 mb-1">Location</p>
                    <p className="text-text-secondary">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-primary-900 mb-1">
                      Working Hours
                    </p>
                    <p className="text-text-secondary">
                      {contactInfo.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-primary-200">
                <p className="font-medium text-primary-900 mb-2">
                  Connect with me
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-surface hover:bg-surface-hover flex items-center justify-center transition-colors duration-300 ${social.color}`}
                      aria-label={`Connect on ${social.name}`}
                    >
                      <Icon name={social.icon} size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <a
                  href="/assets/resume.pdf"
                  download
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface transition-colors duration-300"
                >
                  <Icon name="Download" size={16} className="text-success" />
                  <span className="font-medium text-primary-900">
                    Download Resume
                  </span>
                </a>
              </div>
            </div>

            {/* Testimonials */}
            {/* <div className="card p-6">
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                Client Feedback
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="border-l-4 border-accent pl-4"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-primary-900 text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-text-secondary">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary mb-2">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={12}
                          className="text-warning fill-current"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
