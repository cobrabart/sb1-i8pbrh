import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Service } from '../../types/services';

interface ServiceDetailCardProps {
  service: Service;
}

export const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {service.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {service.description}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Features
          </h3>
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Benefits
          </h3>
          <ul className="space-y-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center text-gray-600 dark:text-gray-300">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Case Studies
        </h3>
        {service.caseStudies.map((case_study) => (
          <div
            key={case_study.client}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4"
          >
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
              {case_study.client}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {case_study.description}
            </p>
            <ul className="space-y-1">
              {case_study.results.map((result) => (
                <li
                  key={result}
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  • {result}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};