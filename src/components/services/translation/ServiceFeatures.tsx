import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { TranslationService } from '../../../types/services/translation';

interface ServiceFeaturesProps {
  services: TranslationService['services'];
}

export const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ services }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {service.description}
          </p>
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-200">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};