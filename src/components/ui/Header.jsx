import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'User' },
    { name: 'Skills', path: '/skills', icon: 'Code' },
    { name: 'Experience', path: '/experience', icon: 'Briefcase' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-primary-200' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-trust rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon 
                  name="Code2" 
                  size={20} 
                  color="white" 
                  strokeWidth={2.5}
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse-slow"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary-900 group-hover:text-accent transition-colors duration-300">
                Vigneshwaran S
              </h1>
              <p className="text-xs text-text-secondary font-medium">
                Code that performs beautifully
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-smooth group ${
                  isActivePath(item.path)
                    ? 'text-accent bg-accent-50 shadow-sm'
                    : 'text-text-secondary hover:text-primary-900 hover:bg-surface'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Icon 
                    name={item.icon} 
                    size={16} 
                    className={`transition-colors duration-300 ${
                      isActivePath(item.path) ? 'text-accent' : 'text-text-muted group-hover:text-primary-700'
                    }`}
                  />
                  <span>{item.name}</span>
                </span>
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Availability Status */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-success-50 rounded-full border border-success-200">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
              <span className="text-sm font-medium text-success-700">Available</span>
            </div>

            {/* Primary CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center space-x-2 bg-conversion hover:bg-conversion-hover text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 ease-smooth transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Let's Collaborate</span>
              <Icon name="ArrowRight" size={16} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary-900 hover:bg-surface transition-all duration-300 ease-smooth"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={24} 
                className="transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-smooth overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 border-t border-primary-200' :'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md">
          <nav className="px-4 py-4 space-y-2">
            {navigationItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ease-smooth ${
                  isActivePath(item.path)
                    ? 'text-accent bg-accent-50 shadow-sm'
                    : 'text-text-secondary hover:text-primary-900 hover:bg-surface'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon 
                  name={item.icon} 
                  size={20} 
                  className={`transition-colors duration-300 ${
                    isActivePath(item.path) ? 'text-accent' : 'text-text-muted'
                  }`}
                />
                <span>{item.name}</span>
                {isActivePath(item.path) && (
                  <div className="ml-auto w-2 h-2 bg-accent rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-primary-200">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center space-x-2 w-full bg-conversion hover:bg-conversion-hover text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-smooth"
              >
                <span>Let's Collaborate</span>
                <Icon name="ArrowRight" size={16} />
              </Link>
              
              {/* Mobile Availability */}
              <div className="flex items-center justify-center space-x-2 mt-3 px-3 py-2 bg-success-50 rounded-lg border border-success-200">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                <span className="text-sm font-medium text-success-700">Available for new projects</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;