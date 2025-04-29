// src/components/layout/dynamic-cursor.tsx
"use client";

import { motion } from 'framer-motion';
import { useDynamicCursor } from '@/hooks/use-dynamic-cursor';
import { cn } from '@/lib/utils';

const DynamicCursor = () => {
  const { position, isVisible } = useDynamicCursor();

  // Variants for smooth animation and scaling
  const cursorVariants = {
    // Dot should react quickly
    default: {
      x: position.x - 4, // Offset to center the 8x8 dot
      y: position.y - 4,
      scale: 1,
      opacity: isVisible ? 1 : 0,
      // Faster spring for the dot
      transition: { type: 'spring', stiffness: 700, damping: 30, duration: 0 },
    },
    // Outline should lag slightly behind the dot
     outline: {
      x: position.x - 15, // Offset to center the 30x30 outline
      y: position.y - 15,
      scale: 1,
      opacity: isVisible ? 1 : 0,
      // Slower/more damped spring for the outline for a smoother lag
      transition: { type: 'spring', stiffness: 300, damping: 25, duration: 0.1 },
    },
  };


  return (
    <>
      {/* Cursor Dot */}
      <motion.div
        className={cn("cursor-dot")}
        variants={cursorVariants}
        animate="default"
        aria-hidden="true"
      />
      {/* Cursor Outline */}
      <motion.div
        className={cn("cursor-outline")}
        variants={cursorVariants}
        animate="outline"
        aria-hidden="true"
      />
    </>
  );
};

export default DynamicCursor;
