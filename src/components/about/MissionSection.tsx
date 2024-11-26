import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Lightbulb } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Mission',
      description: 'To empower businesses with innovative digital solutions that drive growth and success in the modern economy.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Vision',
      description: 'To be the leading force in digital transformation, setting new standards for innovation and excellence.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Values',
      description: 'Integrity, innovation, excellence, and customer success drive everything we do.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg text-center"
        >
          <div className="inline-block p-3 bg-indigo-100 rounded-lg text-indigo-600 mb-4">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MissionSection;