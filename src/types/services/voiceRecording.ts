export interface VoiceRecordingService {
  languages: {
    name: string;
    code: string;
    accents?: string[];
  }[];
  applications: {
    name: string;
    description: string;
    features: string[];
  }[];
  equipment: {
    name: string;
    requirements: string[];
  }[];
  qualityMetrics: {
    name: string;
    description: string;
    target: string;
  }[];
}

export const voiceRecordingService: VoiceRecordingService = {
  languages: [
    {
      name: 'English',
      code: 'en',
      accents: ['American', 'British', 'Australian', 'Canadian', 'Singaporean']
    },
    {
      name: 'Asian Languages',
      code: 'as',
      accents: ['Mandarin', 'Cantonese', 'Khmer', 'Mongolian', 'Nepali', 'Thai', 'Korean', 'Japanese', 'Uzbek']
    },
    {
      name: 'European Languages',
      code: 'eu',
      accents: ['German', 'Spanish', 'French', 'Italian', 'Portuguese']
    }
  ],
  applications: [
    {
      name: 'Advertising Campaigns',
      description: 'Professional voice-overs for commercial advertisements',
      features: ['Brand voice consistency', 'Multiple accent options', 'High-impact delivery']
    },
    {
      name: 'Corporate Training',
      description: 'Clear and engaging voice-overs for training materials',
      features: ['Professional tone', 'Technical terminology expertise', 'Multiple language options']
    },
    {
      name: 'Educational Content',
      description: 'Voice-overs for e-learning and educational materials',
      features: ['Clear pronunciation', 'Engaging delivery', 'Age-appropriate tone']
    },
    {
      name: 'AI Training Data',
      description: 'High-quality voice recordings for AI model training',
      features: ['Diverse accents', 'Controlled environment', 'Metadata tagging']
    }
  ],
  equipment: [
    {
      name: 'Recording Hardware',
      requirements: [
        'Professional microphone',
        'Audio interface',
        'Acoustic treatment',
        'Headphones'
      ]
    },
    {
      name: 'Software Requirements',
      requirements: [
        'Professional DAW',
        'Noise reduction software',
        'Audio editing tools',
        'File conversion utilities'
      ]
    }
  ],
  qualityMetrics: [
    {
      name: 'Audio Quality',
      description: 'Clear recording with no background noise',
      target: '≥ 44.1kHz/16-bit'
    },
    {
      name: 'Pronunciation Accuracy',
      description: 'Correct pronunciation of words and phrases',
      target: '≥ 98% accuracy'
    },
    {
      name: 'Background Noise',
      description: 'Minimal background noise in recordings',
      target: '≤ -60dB noise floor'
    }
  ]
};