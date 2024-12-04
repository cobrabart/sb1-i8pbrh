import React from 'react';
import { motion } from 'framer-motion';
import type { VoiceRecordingService } from '../../../types/services/voiceRecording';

interface LanguageSelectorProps {
  languages: VoiceRecordingService['languages'];
  onLanguageSelect: (code: string) => void;
  selectedLanguage?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  onLanguageSelect,
  selectedLanguage
}) => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {languages.map((language, index) => (
        <motion.button
          key={language.code}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onLanguageSelect(language.code)}
          className={`p-4 rounded-lg border transition-colors ${
            selectedLanguage === language.code
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <h3 className="font-semibold mb-2">{language.name}</h3>
          {language.accents && (
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {language.accents.join(', ')}
            </div>
          )}
        </motion.button>
      ))}
    </div>
  );
};