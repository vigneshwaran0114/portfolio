import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AvailabilityIndicator = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const availability = {
    status: 'available',
    nextAvailable: 'Immediate',
    responseTime: '< 24 hours',
    currentProjects: 2,
    maxProjects: 4,
    timezone: 'EST (UTC-5)'
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-success-500';
      case 'busy':
        return 'text-warning-500';
      case 'unavailable':
        return 'text-error-500';
      default:
        return 'text-text-secondary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'available':
        return 'CheckCircle';
      case 'busy':
        return 'Clock';
      case 'unavailable':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-surface rounded-2xl shadow-card p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2 font-headline">
          Current Availability
        </h3>
        <p className="text-text-secondary text-sm">
          Real-time project capacity and response times
        </p>
      </div>

      {/* Status Indicator */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-4 h-4 rounded-full ${
              availability.status === 'available' ? 'bg-success-500' :
              availability.status === 'busy' ? 'bg-warning-500' : 'bg-error-500'
            }`}
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 w-4 h-4 rounded-full ${
              availability.status === 'available' ? 'bg-success-500' :
              availability.status === 'busy' ? 'bg-warning-500' : 'bg-error-500'
            }`}
          />
        </div>
        <div>
          <div className={`font-semibold capitalize ${getStatusColor(availability.status)}`}>
            {availability.status === 'available' ? 'Available for New Projects' :
             availability.status === 'busy' ? 'Limited Availability' : 'Currently Unavailable'}
          </div>
          <div className="text-text-secondary text-sm">
            {formatTime(currentTime)}
          </div>
        </div>
      </div>

      {/* Availability Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-primary-100">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} color="var(--color-text-secondary)" />
            <span className="text-sm text-text-secondary">Next Available</span>
          </div>
          <span className="text-sm font-medium text-primary">{availability.nextAvailable}</span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-primary-100">
          <div className="flex items-center space-x-2">
            <Icon name="MessageCircle" size={16} color="var(--color-text-secondary)" />
            <span className="text-sm text-text-secondary">Response Time</span>
          </div>
          <span className="text-sm font-medium text-primary">{availability.responseTime}</span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-primary-100">
          <div className="flex items-center space-x-2">
            <Icon name="Briefcase" size={16} color="var(--color-text-secondary)" />
            <span className="text-sm text-text-secondary">Current Load</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-primary">
              {availability.currentProjects}/{availability.maxProjects} projects
            </span>
            <div className="w-16 h-2 bg-primary-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(availability.currentProjects / availability.maxProjects) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-2">
            <Icon name="Globe" size={16} color="var(--color-text-secondary)" />
            <span className="text-sm text-text-secondary">Timezone</span>
          </div>
          <span className="text-sm font-medium text-primary">{availability.timezone}</span>
        </div>
      </div>

      {/* Quick Action */}
      {availability.status === 'available' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 p-4 bg-success-50 rounded-lg border border-success-200"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-success-500 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={16} color="white" />
            </div>
            <div>
              <div className="font-medium text-success-700 text-sm">Perfect Timing!</div>
              <div className="text-success-600 text-xs">
                I have capacity for new projects starting immediately.
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Working Hours */}
      <div className="mt-6 pt-6 border-t border-primary-200">
        <h4 className="font-medium text-primary mb-3">Typical Working Hours</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">Monday - Friday</span>
            <span className="text-primary">9:00 AM - 6:00 PM EST</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Weekend</span>
            <span className="text-primary">Limited availability</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AvailabilityIndicator;