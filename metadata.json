import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { SoundControl } from './components/SoundControl';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Navbar />
      <SoundControl />
      <main>
        <Hero />
        <Philosophy />
        <Process />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;