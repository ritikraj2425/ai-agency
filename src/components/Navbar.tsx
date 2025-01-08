import { motion } from 'framer-motion';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-black/50 backdrop-blur-sm z-50 border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
          <img src='/logo.png' alt='logo' className='h-8 w-8'/>
            {/* <Brain className="h-8 w-8 text-purple-500" /> */}
            <span className="ml-2 text-white font-bold text-xl">z1media</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/services"
                className={`${isActive('/services') ? 'text-purple-400' : 'text-gray-300'} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                Services
              </Link>
              <Link
                to="/process"
                className={`${isActive('/process') ? 'text-purple-400' : 'text-gray-300'} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                Process
              </Link>
              <Link
                to="/portfolio"
                className={`${isActive('/portfolio') ? 'text-purple-400' : 'text-gray-300'} hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors`}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/services"
              className={`${isActive('/services') ? 'text-purple-400' : 'text-gray-300'} hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors`}
            >
              Services
            </Link>
            <Link
              to="/process"
              className={`${isActive('/process') ? 'text-purple-400' : 'text-gray-300'} hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors`}
            >
              Process
            </Link>
            <Link
              to="/portfolio"
              className={`${isActive('/portfolio') ? 'text-purple-400' : 'text-gray-300'} hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="bg-purple-600 text-white block w-full px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}