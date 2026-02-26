import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Send, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks! We'll reach out to ${email} shortly.`);
    setEmail('');
  };

  return (
    <footer id="contact" className="relative pt-32 pb-10 bg-surface overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Ready to <span className="text-primary">Explode</span> Your Growth?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12"
          >
            Don't let your brand fade into the background. DM us to scale your presence and become the authority in your niche.
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-8 py-4 rounded-full bg-background border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-white placeholder-gray-500 text-base"
              required
            />
            <Button type="submit" className="w-full sm:w-auto px-10 whitespace-nowrap">
              Let's Talk <Send className="w-4 h-4" />
            </Button>
          </motion.form>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-display">Growzenic</div>
          
          <div className="flex gap-6">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            © 2024 Growzenic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
