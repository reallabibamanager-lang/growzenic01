import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Play } from 'lucide-react';
import { fadeInUp, staggerContainer } from './utils/animations';

const Counter = ({ value, suffix = '' }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!isInView) return;

    // Set initial value
    element.textContent = "0" + suffix;

    const controls = animate(0, value, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(latest) {
        if (element) {
          element.textContent = Math.round(latest) + suffix;
        }
      }
    });

    return () => controls.stop();
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

export const navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: y1, willChange: 'transform' }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob" 
        />
        <motion.div 
          style={{ y: y2, willChange: 'transform' }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-4 flex justify-center">
             <span className="px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-primary-light text-sm font-medium tracking-wider uppercase backdrop-blur-md">
                Premier Social Media Agency
             </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-display font-bold leading-tight mb-6"
          >
            We Build <br />
            <span className="text-gradient">Empires.</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            High-end strategy. Cinematic content. Explosive growth.
          </motion.p>

          {/* Animated Circle Stats Graphic */}
          <motion.div 
            variants={fadeInUp}
            className="mt-20 relative max-w-4xl mx-auto h-[350px] md:h-[450px] flex items-center justify-center select-none"
          >
            {/* Rotating Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Large orbital ring */}
              <motion.div 
                style={{ willChange: 'transform' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 border-dashed"
              />
              
              {/* Inner orbital ring counter-rotating */}
              <motion.div 
                style={{ willChange: 'transform' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full border border-white/10 border-t-primary/50"
              />
              
              {/* Central Glow */}
              <div className="absolute w-32 h-32 bg-primary/10 blur-[60px] rounded-full animate-pulse" />
            </div>

            {/* Stats Grid - Positioned absolutely around center */}
            <div className="relative w-full h-full max-w-[700px] mx-auto">
              
              {/* Top Left */}
              <div className="absolute top-[5%] left-[5%] md:top-[15%] md:left-[10%] text-center md:text-right w-[40%]">
                <motion.h3 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-2"
                >
                  <Counter value={50} suffix="M+" />
                </motion.h3>
                <p className="text-gray-500 text-xs md:text-sm tracking-[0.2em] uppercase">Views</p>
              </div>

              {/* Top Right */}
              <div className="absolute top-[5%] right-[5%] md:top-[15%] md:right-[10%] text-center md:text-left w-[40%]">
                <motion.h3 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-2"
                >
                  <Counter value={100} suffix="+" />
                </motion.h3>
                <p className="text-gray-500 text-xs md:text-sm tracking-[0.2em] uppercase">Happy Clients</p>
              </div>

              {/* Center Pill */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <div className="w-10 h-16 md:w-14 md:h-24 border border-white/10 rounded-full bg-surface/50 backdrop-blur-md flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"></div>
                    <motion.div 
                       animate={{ y: [-8, 8, -8] }}
                       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                       className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(99,69,155,0.8)]"
                    />
                 </div>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-[5%] left-[5%] md:bottom-[15%] md:left-[10%] text-center md:text-right w-[40%]">
                <motion.h3 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-2"
                >
                  <Counter value={600} suffix="k+" />
                </motion.h3>
                <p className="text-gray-500 text-xs md:text-sm tracking-[0.2em] uppercase">Followers</p>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-[5%] right-[5%] md:bottom-[15%] md:right-[10%] text-center md:text-left w-[40%]">
                <motion.h3 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-2"
                >
                  <Counter value={98} suffix="%" />
                </motion.h3>
                <p className="text-gray-500 text-xs md:text-sm tracking-[0.2em] uppercase">Retention</p>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Scroll indicator - kept subtle at bottom */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
