import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', path: '/homepage-motion-driven-portfolio' },
    { name: 'About', path: '/about-interactive-journey' },
    { name: 'Portfolio', path: '/portfolio-project-universe' },
    { name: 'Skills', path: '/skills-living-dashboard' },
    { name: 'Experience', path: '/experience-timeline' },
    { name: 'Contact', path: '/contact-collaboration-hub' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com', color: 'hover:text-gray-600' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com', color: 'hover:text-blue-400' },
    { name: 'Dribbble', icon: 'Dribbble', url: 'https://dribbble.com', color: 'hover:text-pink-500' }
  ];

  const quickLinks = [
    { name: 'Resume/CV', icon: 'FileText' },
    { name: 'Case Studies', icon: 'BookOpen' },
    { name: 'Blog Posts', icon: 'PenTool' },
    { name: 'Resources', icon: 'Download' }
  ];

  return (
    <footer className="bg-primary text-surface">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-600 rounded-lg flex items-center justify-center">
                <span className="text-surface font-bold text-lg font-mono">DM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Digital Motion</h3>
                <p className="text-primary-300 text-sm">Frontend Developer</p>
              </div>
            </div>
            <p className="text-primary-200 mb-6 leading-relaxed">
              Crafting digital experiences where code becomes movement and interactions tell stories.
            </p>
            
            {/* CTA Button */}
            <Link
              to="/contact-collaboration-hub"
              className="group inline-flex items-center space-x-2 px-6 py-3 bg-accent text-surface font-semibold rounded-lg hover:bg-accent-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Icon name="Sparkles" size={18} />
              <span>Let's Create Something Amazing</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-accent transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    className="text-primary-200 hover:text-accent transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <Icon name={link.icon} size={14} />
                    <span>{link.name}</span>
                    <Icon name="ExternalLink" size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-primary-200">
                <Icon name="Mail" size={16} />
                <span className="text-sm">hello@digitalmotion.dev</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-200">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-200">
                <Icon name="Clock" size={16} />
                <span className="text-sm">Available for projects</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center text-primary-200 hover:bg-primary-600 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-primary-300">
              <span>© {currentYear} Digital Motion. All rights reserved.</span>
              <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-primary-300">
              <span>Built with</span>
              <div className="flex items-center space-x-2">
                <Icon name="Heart" size={14} className="text-accent" />
                <span>React & GSAP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-surface rounded-full flex items-center justify-center shadow-lg hover:bg-accent-600 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <Icon name="ArrowUp" size={20} />
      </button>
    </footer>
  );
};

export default Footer;