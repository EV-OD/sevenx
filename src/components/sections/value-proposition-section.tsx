// src/components/sections/value-proposition-section.tsx
"use client"; // Required for framer-motion

import { ShieldCheck, Zap, Lightbulb } from 'lucide-react'; // Updated Icons
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge'; // Import Badge
import { cn } from '@/lib/utils';

const propositions = [
  {
    icon: ShieldCheck, // Changed Icon
    title: 'Quality Focused',
    description: 'Prioritizing high-quality code and design standards for robust, maintainable, and scalable websites.',
    badge: 'Core Value',
    delay: 0.1,
    yOffset: 0, // Removed vertical offset for the first card
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Building for speed and performance, ensuring fast load times and smooth, engaging user interactions.',
    badge: 'Our Ethos',
    delay: 0.2,
    yOffset: 0, // Removed vertical offset for the middle card
  },
  {
    icon: Lightbulb, // Changed Icon
    title: 'Client Collaboration',
    description: 'Working closely with you throughout the process, ensuring the final product perfectly meets your vision.',
    badge: 'Commitment',
    delay: 0.3,
    yOffset: 0, // Removed vertical offset for the last card
  },
];

export default function ValuePropositionSection() {
  return (
    <section
      id="about"
      // Apply grid/dot pattern instead of circuit pattern
      className={cn(
        "relative w-full py-20 md:py-28 lg:py-36 bg-secondary overflow-hidden", // Increased vertical padding
        "bg-pattern-light dark:bg-pattern-dark" // Apply grid/dot pattern
      )}
    >
      {/* Optional: Decorative accent lines/shapes - Keeping these for depth */}
      <div className="absolute inset-0 -z-10 opacity-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-subtle-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-subtle-pulse animation-delay-400"></div>
      </div>

      <div className="container px-8 md:px-12 lg:px-16 relative z-10">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-20" // Increased bottom margin
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary font-heading">
            Why Choose Us?
          </h2>
          <p className="max-w-[750px] text-muted-foreground md:text-lg lg:text-xl">
            Discover the advantages of partnering with ProResponsive for your web development needs.
          </p>
        </motion.div>

        {/* Cards Section - Using Grid with items-stretch for equal height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch"> {/* Changed items-start to items-stretch */}
          {propositions.map((prop, index) => (
            <motion.div
              key={index}
              // Apply flex flex-col h-full to make cards fill grid cell height
              className={cn(
                "relative group flex flex-col h-full items-center text-center p-8 rounded-t-2xl rounded-b-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl border border-border/20 hover:border-sky-300/50 dark:hover:border-sky-700/50", // Unique border radius, updated hover border
                // Sky Blue Wave Gradient
                "bg-gradient-to-br from-sky-400/70 via-sky-100/60 to-sky-200/50 dark:from-sky-700/60 dark:via-sky-950/80 dark:to-sky-800/40",
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prop.delay }}
              whileHover={{ y: -8 }} // Lift card on hover
            >
              {/* Corner Badge */}
              <Badge
                variant="secondary" // Using secondary might work okay with the new background, or customize
                className="absolute top-3 right-3 -rotate-12 text-xs px-2 py-0.5 opacity-70 group-hover:opacity-100 transition-opacity bg-white/40 text-sky-900 dark:bg-sky-950/40 dark:text-sky-200" // Adjusted badge style for sky blue
              >
                {prop.badge}
              </Badge>

              {/* Animated Icon */}
              <motion.div
                className={cn(
                  "rounded-full p-4 inline-flex mb-5 shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110",
                  "bg-sky-100/80 dark:bg-sky-900/50 group-hover:bg-sky-200/90 dark:group-hover:bg-sky-800/60" // Sky blue background for icon circle
                )}
                whileHover={{ rotate: [0, 10, -10, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
              >
                <prop.icon className="h-8 w-8 text-sky-600 dark:text-sky-300" /> {/* Adjusted icon color */}
              </motion.div>

              {/* Contrasting Typography */}
              <h3 className="text-2xl font-bold font-heading mb-3 text-sky-950 dark:text-sky-50 group-hover:text-sky-950/90 dark:group-hover:text-sky-100/90 transition-colors"> {/* Sky blue heading */}
                {prop.title}
              </h3>
              {/* Added flex-grow to make description push content below it down */}
              <p className="text-sky-800 dark:text-sky-300 leading-relaxed font-light text-base flex-grow"> {/* Sky blue description */}
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
