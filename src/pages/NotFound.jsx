import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent to-trust rounded-full flex items-center justify-center">
            <Icon name="AlertTriangle" size={40} color="white" />
          </div>
          <h1 className="text-6xl font-bold text-primary-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-primary-700 mb-4">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/homepage"
            className="inline-flex items-center space-x-2 bg-conversion hover:bg-conversion-hover text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 ease-smooth transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Icon name="Home" size={20} />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex justify-center space-x-4 pt-4">
            <Link
              to="/about"
              className="text-accent hover:text-accent-600 font-medium transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/skills"
              className="text-accent hover:text-accent-600 font-medium transition-colors duration-300"
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="text-accent hover:text-accent-600 font-medium transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;