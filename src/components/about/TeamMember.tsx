import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import type { TeamMember as TeamMemberType } from '../../types';

interface Props {
  member: TeamMemberType;
  index: number;
}

const TeamMember: React.FC<Props> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="text-indigo-600 mb-4">{member.role}</p>
        <p className="text-gray-600 mb-4">{member.bio}</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;