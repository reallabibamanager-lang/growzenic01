import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Search, PenTool, Video, Rocket } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Audit",
    description: "We dive deep into your brand, analyzing your current presence, competitors, and target audience to find the gaps and opportunities.",
    icon: Search,
    color: "#63459B"
  },
  {
    id: 2,
    title: "Strategy Formulation",
    description: "We craft a bespoke content roadmap, defining your content pillars, tone of voice, and visual identity to ensure consistency and impact.",
    icon: PenTool,
    color: "#845EC2"
  },
  {
    id: 3,
    title: "High-End Production",
    description: "Our team executes the vision with cinema-grade editing, engaging scripts, and psychological hooks that keep viewers watching.",
    icon: Video,
    color: "#4B3475"
  },
  {
    id: 4,
    title: "Launch & Optimization",
    description: "We publish strategically, monitor performance data in real-time, and iterate to maximize reach and engagement continuously.",
    icon: Rocket,
    color: "#D65DB1"
  }
];

const Card: React.FC<{ 
  step: ProcessStep; 
  i: number; 
  progress: MotionValue<number>; 
  range: [number, number]; 
  targetScale: number; 
}> = ({ step, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)`, willChange: 'transform' }} 
        className="flex flex-col relative w-full max-w-[1000px] h-auto min-h-[400px] md:h-[500px] rounded-[25px] p-6 md:p-12 origin-top border border-white/10 overflow-hidden bg-[#0F0F12]"
      >
        <div className="absolute inset-0 bg-[#0F0F12] z-0" />
        <div className="absolute inset-0 opacity-30 z-0" style={{ backgroundColor: step.color }} />
        
        <div className="relative z-10 flex flex-col md:flex-row h-full gap-6 md:gap-10">
          <div className="w-full md:w-[40%] flex flex-col justify-between shrink-0 relative">
             <div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 md:mb-6 backdrop-blur-md border border-white/20">
                   <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-4xl font-display font-bold mb-2 md:mb-4 leading-tight">{step.title}</h2>
             </div>
             <span className="text-7xl md:text-9xl font-bold opacity-10 font-display absolute top-0 right-0 md:static md:bottom-[-20px] md:left-[-20px]">0{step.id}</span>
          </div>

          <div className="w-full md:w-[60%] flex items-start md:items-center relative z-10">
             <p className="text-lg md:text-2xl leading-relaxed text-gray-200">
                {step.description}
             </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const Process: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="process" ref={container} className="relative mt-[10vh]">
      <div className="container mx-auto px-6 mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold mb-4"
        >
          How We <span className="text-primary">Win</span>
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-400">Our proven framework for explosive growth.</p>
      </div>
      
      <div className="pb-[20vh]">
        {steps.map((step, i) => {
          const targetScale = 1 - ((steps.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              i={i} 
              step={step} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};