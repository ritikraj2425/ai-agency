import React from 'react';
import { motion } from 'framer-motion';
import { VideoIcon, PenTool, Megaphone, BarChart } from 'lucide-react';

const services = [
  {
    icon: <VideoIcon className="h-8 w-8" />,
    title: "AI Video Creation",
    description: "Use AI avatars to create professional and engaging videos.",
    features: ["Personalized Videos", "Multilingual Content", "Quick Turnaround"]
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Script Writing",
    description: "Craft compelling scripts that communicate your message effectively.",
    features: ["Customized Scripts", "Engaging Content", "Brand Consistency"]
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: "Video Editing",
    description: "Enhance and refine videos for a polished, professional look.",
    features: ["Visual Optimization", "Audio Enhancements", "Platform Adaptation"]
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Research & Strategy",
    description: "Ensure every video resonates with the target audience.",
    features: ["Audience Insights", "Market Trends", "Content Strategy"]
  }
];

export function Services() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leverage the power of AI to create exceptional video content that drives results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-transparent p-8 rounded-lg border border-purple-500/20"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}