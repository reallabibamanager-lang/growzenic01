import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
            WE GROW <br />
            <span className="text-primary italic">DIGITAL GIANTS</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Leading-edge digital solutions for brands that dare to redefine their industry. 
            We combine strategy, design, and technology to build your future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-white flex items-center gap-2 group">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="border border-white/10 hover:bg-white/5">
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
