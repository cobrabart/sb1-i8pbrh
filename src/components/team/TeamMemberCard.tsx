import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { TeamMember } from '../../types/team';

interface TeamMemberCardProps {
  member: TeamMember;
  delay?: number;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {member.name}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 mb-4">{member.role}</p>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{member.location}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {member.bio}
        </p>

        <Link 
          to={`/team/${member.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Profile →
        </Link>
      </div>
    </motion.div>
  );
};