import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  PenTool, 
  Target, 
  TrendingUp, 
  Instagram, 
  Users, 
  Palette, 
  Megaphone, 
  FileText, 
  Crown
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const services = [
  {
    title: "High-end Video Editing",
    description: "Cinema-grade editing that keeps retention high and storytelling engaging.",
    icon: Video,
  },
  {
    title: "Content Strategy & Planning",
    description: "Data-backed content calendars designed to dominate your niche.",
    icon: Target,
  },
  {
    title: "Brand Positioning",
    description: "Define your unique voice and stand out in a saturated market.",
    icon: Crown,
  },
  {
    title: "Reels & Shorts Optimization",
    description: "Viral engineering for vertical video platforms to maximize reach.",
    icon: TrendingUp,
  },
  {
    title: "Thumbnail Designing",
    description: "Click-through rate optimized thumbnails that demand attention.",
    icon: Palette,
  },
  {
    title: "Personal Brand Building",
    description: "Transform yourself into a key opinion leader in your industry.",
    icon: Users,
  },
  {
    title: "Instagram Growth Management",
    description: "Organic engagement strategies to build a loyal community.",
    icon: Instagram,
  },
  {
    title: "Paid Ads Management",
    description: "ROI-focused ad campaigns to scale your revenue predictably.",
    icon: Megaphone,
  },
  {
    title: "Script Writing & Hooks",
    description: "Psychological hooks and compelling narratives that sell.",
    icon: FileText,
  },
  {
    title: "Audience Targeting & Scaling",
    description: "Precise demographic targeting to find your ideal customers.",
    icon: Target,
  },
];

const ServiceIcon: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
  <div className="relative flex items-center justify-center w-full h-full">
    <Icon className="w-7 h-7 text-white group-hover:text-primary transition-colors duration-300 z-10" />
    <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-display font-bold mb-6"
          >
            Our <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl"
          >
            Everything you need to dominate social media, all under one roof.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              style={{ willChange: 'opacity, transform' }}
              className="group p-8 rounded-2xl glass-card border border-white/5 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/50 overflow-hidden relative">
                  <ServiceIcon Icon={service.icon} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};