import { Brain, Instagram, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-white font-bold text-xl">Seedite</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming video production with AI-powered creativity and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/ritik_raj2425" target="_blank" className="text-gray-400 hover:text-purple-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/ritik_raj2425/" target='_blank' className="text-gray-400 hover:text-purple-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/ritik-raj-0a098228a/" target='_blank' className="text-gray-400 hover:text-purple-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-400">Services</Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-400 hover:text-purple-400">Process</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-purple-400">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Commercial Production</li>
              <li className="text-gray-400">Content Creation</li>
              <li className="text-gray-400">Brand Storytelling</li>
              <li className="text-gray-400">Analytics & Optimization</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                Near Rishihood University, Sonepat
              </li>
              
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-purple-400" />
                rajritik2425@gmail.com 
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Seedite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}