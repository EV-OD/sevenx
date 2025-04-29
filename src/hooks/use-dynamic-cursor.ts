// src/hooks/use-dynamic-cursor.ts
"use client";

import { useState, useEffect } from 'react';

export function useDynamicCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false); // Initially hidden

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true); // Show cursor on first move
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.classList.add('dynamic-cursor-active');
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
       document.body.classList.remove('dynamic-cursor-active');
    };

    // Add listeners to the window or a specific container element if needed
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave); // Use body for general leave detection

    // Add class to body on mount (if needed immediately)
     // document.body.classList.add('dynamic-cursor-active');


    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('dynamic-cursor-active');
    };
  }, [isVisible]); // Re-run effect if isVisible changes (though likely not necessary here)

  return { position, isVisible };
}
