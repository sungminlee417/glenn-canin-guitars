'use client';

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HomeContent {
  data: {
    heroTitle?: string;
    heroSubtitle?: string;
    heroImage?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface HeroProps {
  homeContent: HomeContent | null;
}

export default function Hero({ homeContent }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        {homeContent?.data?.heroImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${homeContent.data.heroImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('/images/wood-texture.jpg')] opacity-10 mix-blend-overlay" />
      </motion.div>

      {/* Animated overlay pattern */}
      <motion.div 
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="guitar-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-amber-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#guitar-pattern)" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-cinzel font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {homeContent?.data?.heroTitle || "Glenn Canin Guitars"}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-amber-100 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {homeContent?.data?.heroSubtitle || "Master craftsmanship since 1985"}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            href="/gallery"
            className="group relative px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-amber-600/50"
          >
            <motion.span 
              className="absolute inset-0 bg-amber-700"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View Gallery</span>
          </Link>
          
          <Link 
            href="/ordering"
            className="group px-8 py-4 border-2 border-amber-300 text-amber-300 font-semibold rounded-lg transition-all hover:bg-amber-300 hover:text-stone-900"
          >
            <span className="relative z-10">Custom Orders</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-amber-300"
        >
          <svg width="30" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="28" height="48" rx="14" stroke="currentColor" strokeWidth="2"/>
            <motion.circle
              cx="15"
              cy="15"
              r="4"
              fill="currentColor"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}