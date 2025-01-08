import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const projects = [
  {
    title: "Tech Startup Brand Story",
    category: "Brand Story",
    thumbnail: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80",
    description: "AI-driven narrative showcasing innovation and growth"
  },
  {
    title: "E-commerce Product Launch",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    description: "Data-optimized product showcase with compelling storytelling"
  },
  {
    title: "Social Media Campaign",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80",
    description: "Platform-specific content optimized for engagement"
  },
  {
    title: "Corporate Training Series",
    category: "Educational",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    description: "AI-enhanced learning experience with interactive elements"
  }
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Work<br></br> (Demo for now)</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of AI-enhanced video productions that deliver results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-video">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-purple-400 text-sm font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    <Play className="h-4 w-4" />
                    <span>Watch Project</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}