"use client"

import { motion } from "motion/react"
import React, { ReactNode } from 'react';
import { useInView } from "motion/react";

// Define props interface with proper types
interface FadeUpProps {
  children: ReactNode;
  className?: string;
}

// Simple animation wrapper that works with any element
export default function FadeUp({ children, className = "" }: FadeUpProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 1.2, type: "spring", damping: 10, stiffness: 100 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}