// src/components/layout/dynamic-cursor.tsx
"use client";

import { motion } from 'framer-motion';
import { useDynamicCursor } from '@/hooks/use-dynamic-cursor';
import { cn } from '@/lib/utils';

const DynamicCursor = () => {
  const { position, isVisible } = useDynamicCursor();

  // Variants for smooth animation and scaling
  const cursorVariants = {
    default: {
      x: position.x - 4, // Offset to center the 8x8 dot
      y: position.y - 4,
      scale: 1,
      opacity: isVisible ? 1 : 0,
      transition: { type: 'spring', stiffness: 500, damping: 30, duration: 0 },
    },
     outline: {
      x: position.x - 15, // Offset to center the 30x30 outline
      y: position.y - 15,
      scale: 1,
      opacity: isVisible ? 1 : 0,
      transition: { type: 'spring', stiffness: 300, damping: 25, duration: 0.1 },
    },
    // Add more variants for hover effects if needed
    // hoverLink: { scale: 1.5, backgroundColor: 'rgba(0, 0, 255, 0.1)' },
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
