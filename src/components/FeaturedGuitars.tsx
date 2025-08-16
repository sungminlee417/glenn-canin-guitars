'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import FadeIn from "@/components/animations/FadeIn";
import { SkeletonCard } from "@/components/ui/LoadingSpinner";

interface Guitar {
  slug: string;
  data: {
    title?: string;
    model?: string;
    year?: number;
    mainImage?: string;
    description?: string;
    featured?: boolean;
    [key: string]: unknown;
  };
  content: string;
}

interface FeaturedGuitarsProps {
  featuredGuitars: Guitar[];
  title?: string;
}

interface GuitarCardProps {
  guitar: Guitar;
  index: number;
}

function GuitarCard({ guitar, index }: GuitarCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <StaggerItem>
      <motion.div
        className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-64 bg-gradient-to-br from-stone-200 to-stone-300 overflow-hidden">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 animate-pulse bg-stone-300" />
          )}
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg 
                className="w-24 h-24 text-stone-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM21 16c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM7 9l12-3" />
              </motion.svg>
            </div>
          ) : (
            <motion.img
              src={guitar.data.mainImage}
              alt={guitar.data.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="absolute bottom-4 left-4 text-white">
              <motion.span
                className="text-sm font-medium"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Click to view details
              </motion.span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <h3 className="font-cinzel text-xl font-semibold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">
            {guitar.data.title}
          </h3>
          <p className="text-sm text-amber-600 mb-3 font-medium">{guitar.data.year}</p>
          <p className="text-stone-600 mb-4 leading-relaxed">{guitar.data.description}</p>
          <Link
            href={`/for-sale#guitar-${guitar.slug}`}
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors group"
          >
            View Details 
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </StaggerItem>
  );
}

export default function FeaturedGuitars({ featuredGuitars, title }: FeaturedGuitarsProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/wood-grain.png')] opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <motion.h2 
            className="font-cinzel text-3xl md:text-4xl font-bold text-stone-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            {title || "Featured Instruments"}
          </motion.h2>
          <motion.p 
            className="text-lg text-stone-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Each guitar is meticulously crafted using the finest tonewoods and traditional techniques combined with modern innovations
          </motion.p>
        </FadeIn>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : featuredGuitars.length > 0 ? (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuitars.map((guitar, index) => (
              <GuitarCard key={guitar.slug} guitar={guitar} index={index} />
            ))}
          </StaggerChildren>
        ) : (
          <div className="text-center py-12">
            <p className="text-stone-600 text-lg">No featured guitars available at the moment.</p>
          </div>
        )}
        
        <FadeIn className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/gallery"
              className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-md font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}