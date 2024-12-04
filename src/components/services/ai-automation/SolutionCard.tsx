import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import type { AIAutomationService } from '../../../types/services/aiAutomation';

interface SolutionCardProps {
  solution: AIAutomationService['solutions'][0];
  index: number;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Zap className="w-6 h-6 text-blue-500 mr-2" />
          <h3 className="text-xl font-semibold">{solution.name}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {solution.description}
        </p>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Features</h4>
          <ul className="space-y-2">
            {solution.features.map((feature) => (
              <li key={feature} className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {solution.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};