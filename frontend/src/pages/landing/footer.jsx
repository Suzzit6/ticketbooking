import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-black/80 text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-red-500">LOGO</h3>
              <p className="text-gray-400 mt-4">Your one-stop platform for hassle-free event ticketing with the lowest fees guaranteed.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'How It Works', 'Create Event', 'Re-sell Tickets', 'Browse Events', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy', 'Status', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-red-500" />
                <span className="text-gray-400">support@name.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-red-500" />
                <span className="text-gray-400">+91 (800) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-red-500" />
                <span className="text-gray-400">Mumbai, Maharashtra</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 LOGO. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <img src="/api/placeholder/60/32" alt="Payment Method" className="h-8" />
              <img src="/api/placeholder/60/32" alt="Payment Method" className="h-8" />
              <img src="/api/placeholder/60/32" alt="Payment Method" className="h-8" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;