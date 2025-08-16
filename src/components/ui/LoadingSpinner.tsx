'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-amber-600 border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`animate-pulse ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-stone-300 rounded-lg h-48 mb-4"></div>
      <div className="space-y-2">
        <div className="bg-stone-300 h-4 rounded w-3/4"></div>
        <div className="bg-stone-300 h-4 rounded w-1/2"></div>
      </div>
    </motion.div>
  );
}

export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <motion.div
      className={`animate-pulse space-y-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="bg-stone-300 h-4 rounded"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </motion.div>
  );
}