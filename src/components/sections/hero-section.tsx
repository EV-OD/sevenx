"use client"; // Required for framer-motion

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'; // Import motion
import { Code, BarChart, Briefcase, Settings, Network, Layers, Target, TrendingUp, Activity, Puzzle } from 'lucide-react';

// Define floating BACKGROUND elements (icons, simple shapes, blobs, gradients)
const floatingHeroElements = [
  // Icons
  { icon: Code, style: 'top-1/4 left-1/5 w-12 h-12 text-primary/30 animate-float animation-delay-200' },
  { icon: BarChart, style: 'bottom-1/3 right-1/4 w-16 h-16 text-secondary-foreground/20 animate-float-reverse animation-delay-400' },
  { icon: Briefcase, style: 'top-1/2 right-1/5 w-10 h-10 text-primary/20 animate-float' },
  { icon: Settings, style: 'bottom-1/4 left-1/3 w-14 h-14 text-secondary-foreground/15 animate-float-reverse animation-delay-600' },
  { icon: Network, style: 'top-1/5 right-2/5 w-12 h-12 text-primary/25 animate-float animation-delay-300' },

  // Simple Shapes
  { div: true, style: 'bottom-1/5 left-1/6 w-24 h-16 bg-card/10 border border-border/20 rounded-lg animate-float animation-delay-500 shadow-sm' },

  // Blobs (soft, blurred shapes) - Updated opacity by removing alpha channel from bg color
  { div: true, style: 'top-10 left-10 w-48 h-48 bg-primary rounded-full blur-2xl animate-subtle-pulse' }, // Was bg-primary/5
  { div: true, style: 'bottom-10 right-10 w-64 h-64 bg-secondary-foreground rounded-full blur-3xl animate-subtle-pulse animation-delay-300' }, // Was bg-secondary-foreground/5
  { div: true, style: 'top-1/3 right-1/4 w-40 h-40 bg-accent rounded-full blur-2xl animate-subtle-pulse animation-delay-500' }, // Was bg-accent/10

  // Lines (decorative strokes)
  { div: true, style: 'top-1/5 left-[10%] w-1 h-24 bg-gradient-to-b from-primary/10 to-transparent animate-float-reverse animation-delay-100 transform -rotate-12' },
  { div: true, style: 'bottom-1/4 right-[15%] w-20 h-0.5 bg-gradient-to-r from-transparent via-secondary-foreground/10 to-transparent animate-float animation-delay-400 transform rotate-6' },

  // Gradients (subtle light effects)
  { div: true, style: 'absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(var(--primary)/0.05)_0%,transparent_60%)] opacity-50 animate-slow-spin' },
  { div: true, style: 'absolute bottom-0 left-0 w-1/2 h-1/3 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(var(--accent)/0.1)_0%,transparent_70%)] opacity-70' },
];

// Define floating FOREGROUND elements (more prominent UI elements)
const floatingForegroundElements = [
  { icon: Layers, style: 'absolute top-10 -right-5 lg:top-16 lg:-right-8 w-10 h-10 text-primary/50 animate-float z-20 opacity-70' },
  { icon: Target, style: 'absolute bottom-10 -left-4 lg:bottom-16 lg:-left-6 w-8 h-8 text-primary/60 animate-float-reverse z-20 opacity-60' },
  { div: true, style: 'absolute bottom-20 right-0 lg:bottom-24 lg:-right-4 w-20 h-8 bg-primary/10 border border-primary/20 rounded-md animate-float z-20 opacity-50 shadow-sm' }, // Mini progress bar/card
  { icon: TrendingUp, style: 'absolute top-5 left-5 lg:top-8 lg:left-8 w-9 h-9 text-primary/40 animate-float-reverse z-20 opacity-65 animation-delay-100' },
  { icon: Activity, style: 'absolute bottom-5 right-5 lg:bottom-8 lg:right-8 w-11 h-11 text-primary/55 animate-float z-20 opacity-75 animation-delay-300' },
  { div: true, style: 'absolute top-1/3 -left-5 lg:top-1/3 lg:-left-7 w-16 h-10 bg-accent/20 border border-border/30 rounded-lg animate-float-reverse z-20 opacity-60 shadow' }, // Another abstract UI element
  { icon: Puzzle, style: 'absolute top-3/4 right-1/4 w-7 h-7 text-secondary-foreground/30 animate-float z-20 opacity-50 animation-delay-500' },
   // Add more foreground elements:
  { div: true, style: 'absolute top-1/4 -right-2 lg:top-1/4 lg:-right-3 w-12 h-12 bg-secondary border border-border/40 rounded-full animate-float-reverse z-20 opacity-40 shadow-inner animation-delay-200' }, // Circle element
  { div: true, style: 'absolute bottom-1/3 left-1/4 w-24 h-1 bg-primary/20 animate-float z-20 opacity-50 animation-delay-700' }, // Line element
  { div: true, style: 'absolute top-2/3 right-1/3 w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-sm animate-slow-spin z-20 opacity-30 shadow animation-delay-400' }, // Spinning gradient square
];


export default function HeroSection() {
  return (
    <section
      id="home"
      className={cn(
        "relative w-full py-12 md:py-24 lg:py-32 bg-secondary overflow-hidden", // Ensure overflow is hidden for absolute elements
        "bg-pattern-light dark:bg-pattern-dark" // Keep the dot/grid pattern
      )}
    >
       {/* Floating BACKGROUND elements container */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        {floatingHeroElements.map((el, index) => (
          el.icon ? (
            <el.icon
              key={`bg-${index}`}
              className={cn(
                'absolute blur-[1px]', // Soften the icons slightly
                el.style
              )}
              strokeWidth={1.5} // Make icons slightly thinner
            />
          ) : (
            <div // Render the div element for shapes, blobs, lines, gradients
              key={`bg-${index}`}
               className={cn(
                'absolute', // Base style for all divs
                // Conditional blur for non-gradient/non-line elements
                !el.style?.includes('gradient') && !el.style?.includes('inset-0') && 'blur-[1px]',
                el.style // Apply specific styles
              )}
            />
          )
        ))}
      </div>

      {/* Main content container */}
      <div className="container px-8 md:px-12 lg:px-16 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center relative z-10">
        <div className="space-y-4 text-center lg:text-left">
           {/* Apply font, gradient, and animation */}
          <motion.h1
            className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ opacity: 0, scale: 0.95 }} // Initial animation state
            animate={{ opacity: 1, scale: 1 }} // Animate to this state
            transition={{ duration: 0.5, ease: "easeOut" }} // Animation timing
          >
            Crafting Responsive Web Experiences
          </motion.h1>
          <motion.p
            className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            We build modern, accessible, and high-performing websites that look great on any device. Let us bring your vision to life.
          </motion.p>
          <motion.div
             className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start pt-4"
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <Button asChild size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
           className="relative flex justify-center"
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        > {/* Make image container relative for foreground elements */}
          <Image
            src="https://picsum.photos/600/400?grayscale"
            width={600}
            height={400}
            alt="Hero Image - Responsive Design Showcase"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last transition-transform duration-500 ease-in-out hover:scale-105 shadow-lg" // Added shadow-lg
            priority
          />
          {/* Floating FOREGROUND elements positioned relative to the image container */}
           {floatingForegroundElements.map((el, index) => (
             el.icon ? (
               <el.icon
                 key={`fg-${index}`}
                 className={cn(
                   'absolute blur-[0.5px]', // Slightly less blur for foreground
                   el.style
                 )}
                 strokeWidth={1.8} // Slightly thicker lines
               />
             ) : (
               <div
                 key={`fg-${index}`}
                 className={cn('absolute blur-[0.5px]', el.style)} // Apply style to div as well
               />
             )
           ))}
        </motion.div>
      </div>
    </section>
  );
}
