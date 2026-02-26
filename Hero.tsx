import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button'; // Ye line ab kaam karegi
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white">
            WE GROW <br />
            <span className="text-purple-500 italic">DIGITAL GIANTS</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Leading-edge digital solutions for brands that dare to redefine their industry.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple-600 text-white flex items-center gap-2 px-8 py-4 rounded-full">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
