import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechStackFilter = ({ techStacks }) => {
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTech = (techName) => {
    setSelectedTechs(prev => 
      prev.includes(techName)
        ? prev.filter(tech => tech !== techName)
        : [...prev, techName]
    );
  };

  const clearFilters = () => {
    setSelectedTechs([]);
  };

  const visibleTechs = isExpanded ? techStacks : techStacks.slice(0, 6);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-primary">Filter by Technology</h3>
        {selectedTechs.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearFilters}
            className="flex items-center space-x-1 px-3 py-1 text-sm text-accent hover:text-accent-600 transition-colors duration-300"
          >
            <Icon name="X" size={14} />
            <span>Clear ({selectedTechs.length})</span>
          </motion.button>
        )}
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <AnimatePresence>
          {visibleTechs.map((tech) => {
            const isSelected = selectedTechs.includes(tech.name);
            return (
              <motion.button
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleTech(tech.name)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${
                  isSelected
                    ? 'bg-accent text-surface border-accent shadow-lg'
                    : 'bg-surface text-text-primary border-primary-200 hover:border-accent hover:text-accent'
                }`}
                style={{
                  borderColor: isSelected ? tech.color : undefined,
                  backgroundColor: isSelected ? tech.color : undefined
                }}
              >
                <Icon name={tech.icon} size={16} />
                <span>{tech.name}</span>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-4 h-4 bg-surface/20 rounded-full flex items-center justify-center"
                  >
                    <Icon name="Check" size={10} />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {techStacks.length > 6 && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 px-4 py-2 text-sm text-accent hover:text-accent-600 transition-colors duration-300"
        >
          <span>{isExpanded ? 'Show Less' : `Show ${techStacks.length - 6} More`}</span>
          <Icon 
            name={isExpanded ? "ChevronUp" : "ChevronDown"} 
            size={16} 
            className="transition-transform duration-300"
          />
        </motion.button>
      )}

      {selectedTechs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 p-4 bg-accent-50 rounded-lg border border-accent-200"
        >
          <div className="flex items-center space-x-2 text-accent-700">
            <Icon name="Filter" size={16} />
            <span className="text-sm font-medium">
              Filtering by: {selectedTechs.join(', ')}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TechStackFilter;