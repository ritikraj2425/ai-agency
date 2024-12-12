import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Videos Produced", value: "20+" },
  { label: "Happy Clients", value: "5+" },
  { label: "Hours Saved", value: "10+" },
  { label: "AI Models", value: "20+" }
];

export function Stats() {
  return (
    <div className="bg-purple-900/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}