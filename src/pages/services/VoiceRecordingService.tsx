import React, { useState } from 'react';
import { ServiceLayout } from '../../components/services/ServiceLayout';
import { LanguageSelector } from '../../components/services/voice-recording/LanguageSelector';
import { QualityMetrics } from '../../components/services/voice-recording/QualityMetrics';
import { voiceRecordingService } from '../../types/services/voiceRecording';

export const VoiceRecordingService: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>();

  return (
    <ServiceLayout
      title="Voice Recording Services"
      description="Professional multilingual voice recording services for diverse needs"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Available Languages</h2>
          <LanguageSelector
            languages={voiceRecordingService.languages}
            onLanguageSelect={setSelectedLanguage}
            selectedLanguage={selectedLanguage}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Quality Standards</h2>
          <QualityMetrics metrics={voiceRecordingService.qualityMetrics} />
        </section>
      </div>
    </ServiceLayout>
  );
};