import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Scene } from '../components/3d/Scene';
import { em } from 'framer-motion/client';
import { toast } from 'react-toastify';


export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState('');

  // const nodemailerurl = import.meta.env.VITE_API_BASE_URL;



const handleSendMessage = async () => {
  try {
    const response = await fetch('https://node-mailer-blush.vercel.app/sendEmail', {
      method: 'POST',
      body: JSON.stringify({
        to: 'rajritik2425@gmail.com',
        subject: subject || '',
        content: `${name} - ${email} - ${message || ''}`,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (!response.ok) {
      return toast.error(`Error: ${data.message || 'Something went wrong'}`);
    }
    console.log("message sent")
    toast.success('Message sent successfully!');
  } catch (error) {
    console.error('Error:', error);
    toast.error('An unexpected error occurred');
  }
};


  return (
    <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
      <Scene />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your video content? Let's discuss how our AI-powered solutions can help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-purple-900/30 to-transparent p-8 rounded-lg border md:mt-28 border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-white font-medium">Address</h3>
                    <p className="text-gray-400">Near Rishihood University, Sonepat</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-gray-400">rajritik2425@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form className="space-y-6" onSubmit={(event)=>{
                event.preventDefault()
                  handleSendMessage();
                }}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    className="w-full bg-purple-900/20 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                  required
                    type="email"
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    className="w-full bg-purple-900/20 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <input
                required
                  type="text"
                  id="subject"
                  onChange={(e) => {
                    setSubject(e.target.value)
                  }}
                  className="w-full bg-purple-900/20 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                required
                  id="message"
                  rows={6}
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                  className="w-full bg-purple-900/20 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}