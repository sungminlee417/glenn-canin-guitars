'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const itemReduced = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

export default function StaggerChildren({ children, className = '', staggerDelay = 0.1 }: StaggerChildrenProps) {
  const reduce = useReducedMotion();
  const dynamicContainer = {
    hidden: { opacity: reduce ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduce ? 0 : staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={dynamicContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div variants={reduce ? itemReduced : item} className={className}>
      {children}
    </motion.div>
  );
}