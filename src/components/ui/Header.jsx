import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/homepage-motion-driven-portfolio", icon: "Home" },
    { name: "About", path: "/about-interactive-journey", icon: "User" },
    {
      name: "Portfolio",
      path: "/portfolio-project-universe",
      icon: "Briefcase",
    },
    { name: "Skills", path: "/skills-living-dashboard", icon: "Code" },
    { name: "Experience", path: "/experience-timeline", icon: "Clock" },
    { name: "Contact", path: "/contact-collaboration-hub", icon: "Mail" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const getLinkClass = (isActive, isScrolled) => {
    if (isActive) return "text-accent bg-accent-50";
    if (isScrolled) return "text-primary";
    return "text-primary-50 hover:text-accent hover:bg-primary-50";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-90 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/95 backdrop-blur-md shadow-card border-b border-primary-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/homepage-motion-driven-portfolio"
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-600 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-surface font-bold text-lg font-mono">
                  VS
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-xl font-bold font-headline ${
                  isScrolled ? "text-primary" : "text-primary-50"
                }`}
              >
                Vigneshwaran S
              </h1>
              <p className="text-xs text-text-secondary font-medium">
                Frontend Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${getLinkClass(
                  isActivePath(item.path),
                  isScrolled
                )}`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </span>
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact-collaboration-hub"
              className="relative px-6 py-2.5 bg-accent text-surface font-semibold rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Icon name="MessageCircle" size={16} />
                <span>Let's Talk</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block w-6 h-0.5 bg-primary transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              ></span>
              <span
                className={`absolute block w-6 h-0.5 bg-primary transform transition-all duration-300 top-3 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute block w-6 h-0.5 bg-primary transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2 border-t border-primary-200 bg-surface/95 backdrop-blur-md rounded-b-lg">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActivePath(item.path)
                    ? "text-accent bg-accent-50 border-l-4 border-accent"
                    : "text-text-primary hover:text-accent hover:bg-primary-50"
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
                {isActivePath(item.path) && (
                  <div className="ml-auto w-2 h-2 bg-accent rounded-full"></div>
                )}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 px-4">
              <Link
                to="/contact-collaboration-hub"
                onClick={closeMenu}
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-accent text-surface font-semibold rounded-lg transition-all duration-300 hover:bg-accent-600"
              >
                <Icon name="MessageCircle" size={18} />
                <span>Let's Talk</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
