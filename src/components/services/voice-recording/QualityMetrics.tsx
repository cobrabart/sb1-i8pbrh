import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { VoiceRecordingService } from '../../../types/services/voiceRecording';

interface QualityMetricsProps {
  metrics: VoiceRecordingService['qualityMetrics'];
}

export const QualityMetrics: React.FC<QualityMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="font-semibold">{metric.name}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {metric.description}
          </p>
          <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Target: {metric.target}
          </div>
        </motion.div>
      ))}
    </div>
  );
};