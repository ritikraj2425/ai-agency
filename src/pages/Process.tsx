import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code, Film, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Research",
    description: "Identify trending topics or themes to enhance content engagement.",
    details: ["Audience Analysis", "Industry Trends", "Content Strategy"]
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Script Generation",
    description: "Use AI tools or manual creativity to ensure clarity, relatability, and emotional impact.",
    details: ["Clear Messaging", "Engaging Hooks", "Call-to-Action"]
  },
  {
    icon: <Film className="h-8 w-8" />,
    title: "AI Avatar Video Creation",
    description: "Leverage AI technology to generate realistic and engaging avatar videos.",
    details: ["Realistic Avatars", "Seamless Animations", "Quality Output"]
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Editing",
    description: "Enhance video quality through professional editing tools.",
    details: ["Visual Enhancement", "Audio Synchronization", "Final Touches"]
  }
];

export function Process() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Process</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A seamless blend of AI technology and creative expertise to deliver exceptional results.
          </p>
        </motion.div>

        <div className="relative">
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600/20" /> */}
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-transparent p-8 rounded-lg border border-purple-500/20 ">
                {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center z-10">
                  {step.icon}
                </div> */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}