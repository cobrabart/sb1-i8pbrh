export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  image: string;
  socialLinks: {
    telegram?: string;
    linkedin?: string;
    email: string;
  };
  expertise: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'bart',
    name: 'Shakhzod "Bart" Tursunov',
    role: 'Founder & CEO',
    location: 'Phnom Penh, Cambodia',
    bio: 'Founded ApexBart Solutions in August 2023 with a vision to revolutionize digital communication through innovative AI applications.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    socialLinks: {
      telegram: '@apexbart',
      email: 'bart@apexbart.xyz'
    },
    expertise: ['AI Solutions', 'Business Strategy', 'Voice Technology', 'Project Management']
  },
  {
    id: 'obid',
    name: 'Makhamatov Obid',
    role: 'Manager',
    location: 'Uzbekistan',
    bio: 'Experienced manager overseeing operations and project delivery in the Uzbekistan region.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    socialLinks: {
      telegram: '@obid_manager',
      email: 'obid@apexbart.xyz'
    },
    expertise: ['Project Management', 'Team Leadership', 'Client Relations', 'Operations']
  },
  {
    id: 'navruz',
    name: 'Navruz',
    role: 'Project Manager',
    location: 'Uzbekistan',
    bio: 'Dedicated project manager specializing in voice recording and localization projects.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    socialLinks: {
      telegram: '@navruz_pm',
      email: 'navruz@apexbart.xyz'
    },
    expertise: ['Voice Recording', 'Project Coordination', 'Quality Assurance', 'Team Management']
  }
];