import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
// Yahan humne aapki banayi hui naya file ko sahi path se link kiya hai
import { fadeInUp } from './utils/animations';

const SoundControl = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted) {
        audioRef.current.play().catch(err => console.log("Playback blocked:", err));
      }
    }
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <button
        onClick={toggleMute}
        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all shadow-lg"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white/70" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>
      
      {/* Background music file - iska path apne hisaab se check kar lena */}
      <audio
        ref={audioRef}
        src="/bg-music.mp3"
        loop
        muted={isMuted}
      />
    </motion.div>
  );
};

export default SoundControl;
