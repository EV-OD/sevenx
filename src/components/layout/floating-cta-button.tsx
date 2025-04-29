// src/components/layout/floating-cta-button.tsx
"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

const FloatingCTAButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
    >
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 ease-in-out hover:scale-110 pl-5 pr-6 py-3 group" // Adjusted padding
      >
        <Link href="#contact" className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 group-hover:animate-pulse" />
          <span className="hidden sm:inline">Let's Talk</span> {/* Hide text on very small screens */}
          <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default FloatingCTAButton;
