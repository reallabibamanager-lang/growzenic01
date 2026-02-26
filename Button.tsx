import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SoundControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ambient background track (Abstract Future Bass / Chill)
    const audio = new Audio('https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3'); 
    audio.loop = true;
    audio.volume = 0.3; // Start lower volume
    audioRef.current = audio;

    // Attempt to autoplay immediately
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay prevented by browser policy. Interaction required.", err);
        setIsPlaying(false);
      }
    };

    attemptAutoplay();

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(error => {
            console.error("Audio playback failed:", error);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={toggleSound}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-md border transition-all duration-500 shadow-2xl cursor-pointer ${
        isPlaying 
          ? 'bg-primary/20 border-primary text-white shadow-[0_0_20px_rgba(99,69,155,0.4)]' 
          : 'bg-surface/50 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isPlaying ? 'playing' : 'muted'}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </motion.div>
      </AnimatePresence>

      {/* Visualizer Ring Effect */}
      {isPlaying && (
        <>
          <span className="absolute inset-0 rounded-full border border-primary/30 animate-[ping_2s_ease-out_infinite]" />
          <span className="absolute inset-0 rounded-full border border-primary/20 animate-[ping_2s_ease-out_infinite_1s]" />
        </>
      )}
    </motion.button>
  );
};