import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const GitHubContributions = () => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const contributionData = {
    '2023': [
      [0, 1, 0, 2, 1, 0, 0],
      [1, 3, 2, 1, 0, 1, 2],
      [2, 1, 4, 3, 2, 1, 0],
      [0, 2, 1, 2, 3, 4, 1],
      [1, 0, 3, 1, 2, 0, 2],
      [3, 2, 1, 4, 2, 3, 1],
      [1, 2, 0, 1, 3, 2, 4],
      [2, 1, 3, 0, 1, 2, 1],
      [0, 4, 2, 3, 1, 0, 2],
      [1, 2, 1, 2, 4, 3, 0],
      [2, 0, 3, 1, 2, 1, 3],
      [1, 3, 2, 4, 1, 2, 0],
      [0, 1, 2, 1, 3, 2, 1],
      [2, 4, 1, 0, 2, 3, 2],
      [1, 2, 3, 2, 1, 0, 4],
      [3, 1, 0, 2, 4, 1, 2],
      [0, 2, 1, 3, 2, 4, 1],
      [1, 3, 2, 1, 0, 2, 3],
      [2, 1, 4, 2, 3, 1, 0],
      [0, 2, 1, 4, 2, 3, 2],
      [1, 0, 3, 1, 2, 0, 4],
      [3, 2, 1, 2, 4, 3, 1],
      [1, 4, 0, 3, 1, 2, 2],
      [2, 1, 3, 0, 2, 1, 3],
      [0, 3, 2, 1, 4, 2, 1],
      [1, 2, 1, 3, 2, 4, 0],
      [2, 0, 4, 1, 3, 2, 1],
      [1, 3, 2, 2, 1, 0, 3],
      [0, 1, 3, 4, 2, 1, 2],
      [2, 4, 1, 0, 3, 2, 1],
      [1, 2, 0, 2, 1, 4, 3],
      [3, 1, 2, 1, 4, 2, 0],
      [0, 3, 1, 2, 0, 1, 2],
      [1, 2, 4, 3, 2, 0, 1],
      [2, 0, 1, 2, 3, 4, 2],
      [1, 3, 2, 1, 0, 2, 3],
      [0, 1, 3, 4, 2, 1, 0],
      [2, 4, 1, 2, 3, 0, 1],
      [1, 2, 0, 1, 4, 3, 2],
      [3, 1, 2, 0, 2, 1, 4],
      [0, 3, 1, 2, 1, 4, 2],
      [1, 2, 4, 3, 0, 2, 1],
      [2, 0, 1, 4, 3, 1, 0],
      [1, 3, 2, 1, 2, 0, 3],
      [0, 1, 4, 2, 1, 3, 2],
      [2, 4, 1, 0, 3, 2, 1],
      [1, 2, 0, 3, 1, 4, 0],
      [3, 1, 2, 1, 4, 2, 3],
      [0, 3, 1, 2, 0, 1, 2],
      [1, 2, 4, 3, 2, 0, 1],
      [2, 0, 1, 2, 3, 4, 2],
      [1, 3, 2, 1, 0, 2, 3]
    ],
    '2022': [
      [0, 1, 0, 1, 1, 0, 0],
      [1, 2, 1, 1, 0, 1, 1],
      [1, 1, 3, 2, 1, 1, 0],
      [0, 1, 1, 1, 2, 3, 1],
      [1, 0, 2, 1, 1, 0, 1],
      [2, 1, 1, 3, 1, 2, 1],
      [1, 1, 0, 1, 2, 1, 3],
      [1, 1, 2, 0, 1, 1, 1],
      [0, 3, 1, 2, 1, 0, 1],
      [1, 1, 1, 1, 3, 2, 0],
      [1, 0, 2, 1, 1, 1, 2],
      [1, 2, 1, 3, 1, 1, 0],
      [0, 1, 1, 1, 2, 1, 1],
      [1, 3, 1, 0, 1, 2, 1],
      [1, 1, 2, 1, 1, 0, 3],
      [2, 1, 0, 1, 3, 1, 1],
      [0, 1, 1, 2, 1, 3, 1],
      [1, 2, 1, 1, 0, 1, 2],
      [1, 1, 3, 1, 2, 1, 0],
      [0, 1, 1, 3, 1, 2, 1],
      [1, 0, 2, 1, 1, 0, 3],
      [2, 1, 1, 1, 3, 2, 1],
      [1, 3, 0, 2, 1, 1, 1],
      [1, 1, 2, 0, 1, 1, 2],
      [0, 2, 1, 1, 3, 1, 1],
      [1, 1, 1, 2, 1, 3, 0],
      [1, 0, 3, 1, 2, 1, 1],
      [1, 2, 1, 1, 1, 0, 2],
      [0, 1, 2, 3, 1, 1, 1],
      [1, 3, 1, 0, 2, 1, 1],
      [1, 1, 0, 1, 1, 3, 2],
      [2, 1, 1, 1, 3, 1, 0],
      [0, 2, 1, 1, 0, 1, 1],
      [1, 1, 3, 2, 1, 0, 1],
      [1, 0, 1, 1, 2, 3, 1],
      [1, 2, 1, 1, 0, 1, 2],
      [0, 1, 2, 3, 1, 1, 0],
      [1, 3, 1, 1, 2, 0, 1],
      [1, 1, 0, 1, 3, 2, 1],
      [2, 1, 1, 0, 1, 1, 3],
      [0, 2, 1, 1, 1, 3, 1],
      [1, 1, 3, 2, 0, 1, 1],
      [1, 0, 1, 3, 2, 1, 0],
      [1, 2, 1, 1, 1, 0, 2],
      [0, 1, 3, 1, 1, 2, 1],
      [1, 3, 1, 0, 2, 1, 1],
      [1, 1, 0, 2, 1, 3, 0],
      [2, 1, 1, 1, 3, 1, 2],
      [0, 2, 1, 1, 0, 1, 1],
      [1, 1, 3, 2, 1, 0, 1],
      [1, 0, 1, 1, 2, 3, 1],
      [1, 2, 1, 1, 0, 1, 2]
    ]
  };

  const stats = {
    totalContributions: 1247,
    longestStreak: 47,
    currentStreak: 12,
    repositories: 34,
    pullRequests: 156,
    issues: 89,
    codeReviews: 203
  };

  const recentActivity = [
    {
      type: 'commit',
      repo: 'motion-portfolio',
      message: 'Add smooth scroll animations to timeline component',
      time: '2 hours ago',
      icon: 'GitCommit'
    },
    {
      type: 'pr',
      repo: 'react-animation-lib',
      message: 'Implement new easing functions for micro-interactions',
      time: '1 day ago',
      icon: 'GitPullRequest'
    },
    {
      type: 'issue',
      repo: 'gsap-utils',
      message: 'Performance optimization for mobile devices',
      time: '2 days ago',
      icon: 'AlertCircle'
    },
    {
      type: 'review',
      repo: 'frontend-components',
      message: 'Code review: Accessibility improvements',
      time: '3 days ago',
      icon: 'Eye'
    }
  ];

  const getContributionColor = (level) => {
    switch (level) {
      case 0: return 'bg-primary-100';
      case 1: return 'bg-accent-200';
      case 2: return 'bg-accent-400';
      case 3: return 'bg-accent-600';
      case 4: return 'bg-accent';
      default: return 'bg-primary-100';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'commit': return 'GitCommit';
      case 'pr': return 'GitPullRequest';
      case 'issue': return 'AlertCircle';
      case 'review': return 'Eye';
      default: return 'Circle';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'commit': return 'bg-success-500';
      case 'pr': return 'bg-secondary';
      case 'issue': return 'bg-warning-500';
      case 'review': return 'bg-accent';
      default: return 'bg-primary';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            GitHub Contributions
            <span className="block text-accent">Code Activity & Open Source</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A visual representation of my coding activity and contributions to the developer community
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="GitCommit" size={24} color="white" />
            </div>
            <div className="text-2xl font-bold text-accent mb-1">{stats.totalContributions}</div>
            <div className="text-sm text-text-secondary">Total Contributions</div>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} color="white" />
            </div>
            <div className="text-2xl font-bold text-secondary mb-1">{stats.longestStreak}</div>
            <div className="text-sm text-text-secondary">Longest Streak</div>
          </div>

          <div className="bg-gradient-to-br from-success-50 to-success-100 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-success-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Folder" size={24} color="white" />
            </div>
            <div className="text-2xl font-bold text-success-500 mb-1">{stats.repositories}</div>
            <div className="text-sm text-text-secondary">Repositories</div>
          </div>

          <div className="bg-gradient-to-br from-warning-50 to-warning-100 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-warning-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="GitPullRequest" size={24} color="white" />
            </div>
            <div className="text-2xl font-bold text-warning-500 mb-1">{stats.pullRequests}</div>
            <div className="text-sm text-text-secondary">Pull Requests</div>
          </div>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4 md:mb-0">Contribution Activity</h3>
            <div className="flex space-x-2">
              {['2023', '2022'].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-accent text-surface' :'bg-primary-100 text-primary hover:bg-primary-200'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Contribution Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-xs text-text-secondary text-center py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {contributionData[selectedYear].flat().map((level, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.001 }}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(level)} hover:scale-125 transition-transform duration-200 cursor-pointer`}
                    title={`${level} contributions`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between mt-6 text-sm text-text-secondary">
            <span>Less</span>
            <div className="flex space-x-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Activity Feed */}
          <div className="bg-surface rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-300"
                >
                  <div className={`w-10 h-10 ${getActivityColor(activity.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={getActivityIcon(activity.type)} size={16} color="white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-primary text-sm">{activity.repo}</p>
                    <p className="text-text-secondary text-sm mb-1">{activity.message}</p>
                    <p className="text-xs text-text-secondary">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Stats */}
          <div className="bg-surface rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-6">Community Impact</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-accent-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Star" size={20} className="text-accent" />
                  <span className="font-semibold text-primary">Stars Earned</span>
                </div>
                <span className="text-2xl font-bold text-accent">342</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="GitFork" size={20} className="text-secondary" />
                  <span className="font-semibold text-primary">Forks Created</span>
                </div>
                <span className="text-2xl font-bold text-secondary">89</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-success-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-success-500" />
                  <span className="font-semibold text-primary">Followers</span>
                </div>
                <span className="text-2xl font-bold text-success-500">156</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-warning-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="MessageSquare" size={20} className="text-warning-500" />
                  <span className="font-semibold text-primary">Discussions</span>
                </div>
                <span className="text-2xl font-bold text-warning-500">67</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-primary-200">
              <a
                href="https://github.com/alexmorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-primary text-surface font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                <Icon name="Github" size={20} />
                <span>View GitHub Profile</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubContributions;