import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion, Variants } from "framer-motion";
import Hero from './Hero';
import Navbar from './Navbar';
import Services from './Services';
import Process from './Process';
import Philosophy from './Philosophy';
import SoundControl from './SoundControl';

// --- Ye raha aapka wahi bada wala "Purana Code" ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
// --- Purana code ends ---

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <SoundControl />
      
      {/* Aapka main layout jahan animations chalenge */}
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Hero />
        </motion.div>
        
        <motion.div variants={scaleIn}>
          <Services />
        </motion.div>
        
        <Philosophy />
        <Process />
      </motion.main>
      
      <footer className="py-10 text-center text-gray-500 border-t border-white/10">
        <p>© 2026 Growzenic. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Vercel aur Browser ke liye Root setup
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
