import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleContactClick = () => {
    window.open('https://www.instagram.com/growzenic.in?igsh=MTd1Y3d6dmN6aTlsOQ==', '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-card border-b-0' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Animated Growzenic Text Logo */}
          <div className="relative text-2xl md:text-3xl font-black font-display tracking-tight">
            <span className="text-white relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all duration-300">
              Growzenic
            </span>
            
            {/* Animated Underline/Glow */}
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Background Blob on Hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-12 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </motion.div>

        <div className="flex items-center gap-8">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Contact Us Button - Replaces Mobile Menu & Desktop Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Button 
              variant="white" 
              className="px-6 py-2 text-sm h-10"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};
