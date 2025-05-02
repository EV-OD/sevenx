// src/components/sections/hero-section.tsx
"use client"; // Required for framer-motion and hooks

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'; // Import motion
import { Code, BarChart, BriefcaseBusiness, Settings, Network, Layers, Target, TrendingUp, Activity, Puzzle, ArrowDown } from 'lucide-react'; // Replaced Briefcase with BriefcaseBusiness
import { Badge } from '@/components/ui/badge'; // Import Badge component
import { useDynamicCursor } from '@/hooks/use-dynamic-cursor'; // Import the cursor hook
import Globe from '../globe';


// Define floating BACKGROUND elements (icons, simple shapes, blobs, gradients)
const floatingHeroElements = [
  // Icons
  { icon: Code, style: 'top-1/4 left-1/5 w-12 h-12 text-primary/30 animate-float animation-delay-200' },
  { icon: BarChart, style: 'bottom-1/3 right-1/4 w-16 h-16 text-secondary-foreground/20 animate-float-reverse animation-delay-400' },
  { icon: BriefcaseBusiness, style: 'top-1/2 right-1/5 w-10 h-10 text-primary/20 animate-float' }, // Changed icon
  { icon: Settings, style: 'bottom-1/4 left-1/3 w-14 h-14 text-secondary-foreground/15 animate-float-reverse animation-delay-600' },
  { icon: Network, style: 'top-1/5 right-2/5 w-12 h-12 text-primary/25 animate-float animation-delay-300' },

  // Simple Shapes
  { div: true, style: 'bottom-1/5 left-1/6 w-24 h-16 bg-card/10 border border-border/20 rounded-lg animate-float animation-delay-500 shadow-sm' },

  // Blobs (soft, blurred shapes) - Updated opacity based on user request (removed specific opacity values here, handled below)
   { div: true, style: 'top-10 left-10 w-48 h-48 bg-primary rounded-full filter blur-3xl animate-subtle-pulse opacity-100' }, // Example blue blob
  { div: true, style: 'bottom-10 right-10 w-64 h-64 bg-secondary-foreground rounded-full filter blur-3xl animate-subtle-pulse animation-delay-300 opacity-100' }, // Example secondary blob
  { div: true, style: 'top-1/3 right-1/4 w-40 h-40 bg-accent rounded-full filter blur-2xl animate-subtle-pulse animation-delay-500 opacity-100' }, // Example accent blob

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

// Dummy trust logos (replace with actual SVGs or images)
const trustLogos = [
  { src: '/logos/logo-placeholder-1.svg', alt: 'Partner Logo 1' },
  { src: '/logos/logo-placeholder-2.svg', alt: 'Partner Logo 2' },
  { src: '/logos/logo-placeholder-3.svg', alt: 'Partner Logo 3' },
  { src: '/logos/logo-placeholder-4.svg', alt: 'Partner Logo 4' },
  { src: '/logos/logo-placeholder-5.svg', alt: 'Partner Logo 5' },
];

// Tech stack badges
const techBadges = ['Fast', 'Styled', 'Animated', 'Typed', 'Mobile-Ready'];

export default function HeroSection() {
  useDynamicCursor(); // Activate dynamic cursor for this section

  return (
    <section
      id="home"
      className={cn(
        "relative w-full py-16 pt-36 md:py-24 lg:py-32 bg-secondary overflow-hidden", // Reduced top padding (py-20 -> py-16, etc.)
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
                 // Make blobs fully opaque as requested
                (el.style?.includes('blur-2xl') || el.style?.includes('blur-3xl')) ? 'opacity-100' : '',
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
                 // Apply filter blur for blob elements explicitly and make opaque
                (el.style?.includes('blur-2xl') || el.style?.includes('blur-3xl')) ? 'filter opacity-100' : '',
                el.style // Apply specific styles
              )}
            />
          )
        ))}
      </div>

      {/* Main content container */}
      {/* Increased horizontal padding px-6 -> px-8, md:px-10 -> md:px-12, lg:px-16 */}
      {/* Grid layout ensures text is first on mobile, image is second */}
      <div className="container px-8 md:px-12 lg:px-16 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center relative z-10 -mt-16">
        {/* Text Content - Order 1 on all screens by default */}
        <div className="space-y-6 text-center lg:text-left lg:order-1"> {/* Increased space-y, ensure text is first on lg */}
           {/* Apply font, gradient, and animation */}
          <motion.h1
            className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-[#173446]" // Increased font size
            initial={{ opacity: 0, scale: 0.95, y: 10 }} // Initial animation state
            animate={{ opacity: 1, scale: 1, y: 0 }} // Animate to this state
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} // Animation timing
          >
            Innovation That 
            Reshapes Industries
          </motion.h1>
          {/* <motion.p
            className="max-w-[600px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl mx-auto lg:mx-0" // Adjusted text size for better hierarchy
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            We build modern, accessible, and high-performing websites that look great on any device. Let us bring your vision to life.
          </motion.p> */}

           {/* Tech Stack Badges */}
           <motion.div
             className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2"
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
           >
             {techBadges.map((tech, index) => (
               <Badge key={index} variant="secondary" className="transition-transform hover:scale-105 cursor-default">{tech}</Badge>
             ))}
           </motion.div>

          <motion.div
             className="flex flex-col gap-3 sm:flex-row justify-center lg:justify-start pt-4" // Increased gap
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            <Button asChild size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105 shadow-md">
              <Link href="#contact"><span>Get Started</span></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Link href="#projects"><span>View Projects</span></Link>
            </Button>
          </motion.div>

           {/* Metrics / Stats Section */}
           <motion.div
            className="flex gap-6 sm:gap-10 justify-center lg:justify-start pt-6 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          >
              <div><span className="text-2xl font-bold text-primary mr-1">120+</span> Projects Delivered</div>
              <div><span className="text-2xl font-bold text-primary mr-1">98%</span> Client Satisfaction</div>
              <div><span className="text-2xl font-bold text-primary mr-1">5+</span> Years Experience</div>
           </motion.div>
        </div>

        {/* Image Container - Order 2 on mobile, Order last (right) on large screens */}
        {/* Added 'hidden lg:flex' to hide on mobile and show on large screens */}
        <motion.div
           className="relative hidden lg:flex justify-center lg:order-last" // Hide on mobile, show on lg, ensure image is last on large screens
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{
             opacity: 1,
             scale: 1,
             // Add floating animation
             y: ["0%", "-3%", "0%"], // Moves up and down by 3%
           }}
           transition={{
             opacity: { duration: 0.7, delay: 0.4, ease: "easeOut" },
             scale: { duration: 0.7, delay: 0.4, ease: "easeOut" },
             y: { // Configure the y (floating) animation
               duration: 4, // Duration for one cycle (up and down)
               repeat: Infinity, // Repeat forever
               repeatType: "reverse", // Reverse direction after each cycle
               ease: "easeInOut", // Smooth easing
               delay: 0.6, // Start floating after initial fade/scale
             }
           }}
        > {/* Make image container relative for foreground elements */}
          {/* <Image
            src="/herotech.png"
            width={600}
            height={400}
            alt="Hero Image - Responsive Design Showcase"
            className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-contain sm:w-full transition-transform duration-500 ease-in-out hover:scale-105 border border-border/10" // Added subtle border
            priority
          /> */}
          <Globe/>
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

      {/* Trust Logos Section */}
        {/* <motion.div
          className="container px-8 md:px-12 lg:px-16 mt-16 md:mt-24" // Added more top margin
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          <p className="text-center text-sm font-medium text-muted-foreground mb-6">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {trustLogos.map((logo, index) => (
              <div key={index} className="h-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" height="24" className="fill-current">
                    <rect width="100" height="30" rx="3" fill="hsl(var(--muted))"/>
                    <text x="50" y="20" textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))">{logo.alt}</text>
                </svg>
                <span className="sr-only">{logo.alt}</span>
              </div>

            ))}
          </div>
        </motion.div> 
        */}


       {/* Scroll Down Indicator */}
       <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hidden md:block"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 1.5 }}
        >
         <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
       </motion.div>

    </section>
  );
}
