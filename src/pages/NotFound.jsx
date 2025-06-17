import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center">
            <Icon name="AlertTriangle" size={48} color="white" />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/homepage-motion-driven-portfolio"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-surface font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300"
          >
            <Icon name="Home" size={20} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex justify-center space-x-4 text-sm">
            <Link
              to="/portfolio-project-universe"
              className="text-accent hover:text-accent-600 transition-colors duration-300"
            >
              View Portfolio
            </Link>
            <span className="text-text-secondary">•</span>
            <Link
              to="/contact-collaboration-hub"
              className="text-accent hover:text-accent-600 transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;