export interface TranslationService {
  services: {
    name: string;
    description: string;
    features: string[];
  }[];
  languages: {
    name: string;
    code: string;
    specializations?: string[];
  }[];
  qualityAssurance: {
    name: string;
    description: string;
    methods: string[];
  }[];
}

export const translationService: TranslationService = {
  services: [
    {
      name: 'Document Translation',
      description: 'Professional translation of business and technical documents',
      features: [
        'Technical accuracy',
        'Industry-specific terminology',
        'Format preservation'
      ]
    },
    {
      name: 'Website Localization',
      description: 'Complete website translation and cultural adaptation',
      features: [
        'Cultural relevance',
        'SEO optimization',
        'Multimedia translation'
      ]
    },
    {
      name: 'Marketing Content',
      description: 'Creative translation of marketing materials',
      features: [
        'Brand voice preservation',
        'Cultural adaptation',
        'Marketing effectiveness'
      ]
    }
  ],
  languages: [
    {
      name: 'English',
      code: 'en',
      specializations: ['Technical', 'Legal', 'Medical', 'Marketing']
    },
    {
      name: 'Russian',
      code: 'ru',
      specializations: ['Technical', 'Legal', 'Marketing']
    },
    {
      name: 'Uzbek',
      code: 'uz',
      specializations: ['General', 'Marketing', 'Technical']
    }
  ],
  qualityAssurance: [
    {
      name: 'Translation Review',
      description: 'Multi-step review process by native speakers',
      methods: [
        'Peer review',
        'Expert validation',
        'Client feedback integration'
      ]
    },
    {
      name: 'Technical Accuracy',
      description: 'Verification of technical terms and industry-specific content',
      methods: [
        'Terminology database validation',
        'Industry expert review',
        'Glossary compliance check'
      ]
    }
  ]
};