import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Philosophy: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  
  // Parallax Text Transforms
  const yText1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yText2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const statements = [
    "We don't just post content.",
    "We build authority.",
    "We build brands."
  ];

  return (
    <section id="philosophy" ref={containerRef} className="py-32 bg-surface relative overflow-hidden min-h-screen flex items-center">
      {/* Parallax Background Text */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center overflow-hidden opacity-5 pointer-events-none select-none">
         <motion.div style={{ x: yText1, willChange: 'transform' }} className="text-[20vw] font-display font-black whitespace-nowrap leading-none text-white">
            GROWTH SCALE
         </motion.div>
         <motion.div style={{ x: yText2, willChange: 'transform' }} className="text-[20vw] font-display font-black whitespace-nowrap leading-none text-white ml-[-50vw]">
            DOMINATE
         </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          {statements.map((text, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`text-4xl md:text-7xl font-display font-bold mb-4 tracking-tight ${
                i === 2 ? "text-primary" : "text-white"
              }`}
            >
              {text}
            </motion.h2>
          ))}

          <motion.div 
            style={{ opacity, scale, willChange: 'opacity, transform' }}
            className="mt-16 p-8 md:p-12 glass-card rounded-2xl max-w-4xl border border-primary/20 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed relative z-10">
              In an ocean of noise, <span className="text-white font-bold">Growzenic</span> is your lighthouse. 
              We combine psychological hooks with cinematic excellence to stop the scroll and convert viewers into loyal advocates. 
              Your story deserves to be heard—loud and clear.
            </p>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
};