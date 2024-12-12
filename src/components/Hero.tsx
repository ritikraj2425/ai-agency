import React from 'react';
import { Play, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-purple-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="text-purple-400 font-medium">AI-Powered Creativity</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Vision With AI-Driven Video Production
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Harness the power of artificial intelligence to create stunning videos that captivate your audience and elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href='https://youtu.be/ydnlt5S4Jp8?si=GfxY2d53U0ThBAkQ' target='_blank'>

              <button className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                <Play className="h-5 w-5" />
                <span>Watch Showreel</span>
              </button>
              </a>
            <a href='#features'>
              <button  className="flex items-center justify-center space-x-2 border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Get Started
              </button>
            </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-purple-500/30 backdrop-blur-sm bg-black/30">
                  <img src='public/a-bold-and-eye-catching-thumbnail-design-for-a-tec-w1Tgf7JrTTmV-70hE5nDow-g2KRmLg4S26GwyHJK832fw.jpeg'></img>
              <div className="absolute inset-0 flex items-center  justify-center">
                <div className="w-16 h-16 rounded-full cursor-pointer bg-purple-600 flex items-center justify-center animate-pulse">
                  <a href='https://youtu.be/ydnlt5S4Jp8?si=GfxY2d53U0ThBAkQ' target='_blank'>
                  <Play className="h-8 w-8 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}