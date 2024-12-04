export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  caseStudies: {
    client: string;
    description: string;
    results: string[];
  }[];
}

export const services: Service[] = [
  {
    id: 'voice-recording',
    title: 'Voice Recording',
    description: 'Professional multilingual voice recording services for diverse needs.',
    icon: 'Mic',
    features: [
      'High-quality audio recording',
      'Multiple language support',
      'Professional voice talents',
      'Custom script adaptation'
    ],
    benefits: [
      'Enhanced user engagement',
      'Cultural authenticity',
      'Consistent brand voice',
      'Global reach'
    ],
    technologies: [
      'Professional recording equipment',
      'Audio editing software',
      'Quality assurance tools'
    ],
    caseStudies: [
      {
        client: 'EduLearn Co.',
        description: 'Enhanced e-learning platform with multilingual voiceovers',
        results: ['40% increase in user engagement', 'Coverage of 12 languages']
      }
    ]
  },
  {
    id: 'translation',
    title: 'Translation & Localization',
    description: 'Accurate translation services ensuring cultural relevance.',
    icon: 'Languages',
    features: [
      'Native language experts',
      'Cultural adaptation',
      'Technical translation',
      'Content localization'
    ],
    benefits: [
      'Global market reach',
      'Cultural accuracy',
      'Brand consistency',
      'Local market penetration'
    ],
    technologies: [
      'Translation management systems',
      'Quality control tools',
      'Terminology databases'
    ],
    caseStudies: [
      {
        client: 'GlobalCorp Inc.',
        description: 'Localized training materials for global offices',
        results: ['25% improvement in training effectiveness', 'Support for 8 regional offices']
      }
    ]
  }
];