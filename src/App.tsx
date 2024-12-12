import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { Services } from './pages/Services';
import { Process } from './pages/Process';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';


function HomePage() {
  return (
    <>

      <Hero />
      <Features />
      <Stats />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;