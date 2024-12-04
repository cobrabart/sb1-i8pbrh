import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { teamMembers } from '../../types/team';
import { NotFound } from '../NotFound';

export const TeamMemberDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return <NotFound />;
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {member.name}
              </h1>
              <p className="text-blue-600 dark:text-blue-400 text-xl mb-4">
                {member.role}
              </p>
              
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{member.location}</span>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  About
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.bio}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Contact
                </h2>
                <div className="space-y-2">
                  {member.socialLinks.telegram && (
                    <a
                      href={`https://t.me/${member.socialLinks.telegram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {member.socialLinks.telegram}
                    </a>
                  )}
                  <a
                    href={`mailto:${member.socialLinks.email}`}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {member.socialLinks.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};