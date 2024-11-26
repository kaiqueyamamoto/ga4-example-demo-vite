import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Smartphone, Cloud, BarChart, Shield } from 'lucide-react';
import type { Service } from '../../types';

interface Props {
  service: Service;
  index: number;
}

const iconMap = {
  Lightbulb,
  Code2,
  Smartphone,
  Cloud,
  BarChart,
  Shield,
};

const ServiceCard: React.FC<Props> = ({ service, index }) => {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            {Icon && <Icon className="h-6 w-6" />}
          </div>
          <h3 className="ml-3 text-xl font-semibold text-gray-900">
            {service.title}
          </h3>
        </div>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;