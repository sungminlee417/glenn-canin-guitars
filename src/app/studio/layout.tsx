'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-screen">
      {/* Thin top bar with return button */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-10 bg-stone-900 z-[10000] flex items-center justify-between px-4 border-b border-stone-700"
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors group text-sm"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Return to Glenn Canin Guitars</span>
        </Link>
        
        <span className="text-stone-400 text-xs">
          CMS Studio
        </span>
      </motion.div>
      
      {/* Studio content with top padding to account for bar */}
      <div className="fixed inset-0 top-10 bg-white">
        {children}
      </div>
    </div>
  );
}