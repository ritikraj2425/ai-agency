import React from 'react';
import { Brain, Cpu, Film, Wand2 } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Research",
    description: "Identify trending topics or themes to enhance content engagement."
  },
  {
    icon: <Wand2 className="h-6 w-6" />,
    title: "Script Generation",
    description: "Use AI tools or manual creativity to ensure clarity, relatability, and emotional impact."
  },
  {
    icon: <Film className="h-6 w-6" />,
    title: "AI Avatar Video Creation",
    description: "Leverage AI technology to generate realistic and engaging avatar videos."
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Editing",
    description: "Enhance video quality through professional editing tools."
  }
];

export function Features() {
  return (
    <div className="bg-black py-24" id='features'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Powered by Advanced AI</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our cutting-edge AI technology transforms the video production process,
            delivering exceptional results with unprecedented efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-900/50 to-transparent transform hover:scale-105 transition-transform duration-300 ease-in-out border border-purple-500/20 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}