// src/components/sections/projects-section.tsx
"use client"; // Required for framer-motion and client-side interactivity

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowRight, ExternalLink, Zap, ShieldCheck, Search, Code, Smartphone, Palette, ShoppingCart, GraduationCap, Tractor, MessageSquare, CircuitBoard, Building, MapPin, Cuboid, MousePointer, Play, Users, BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define tech tooltips for simplified explanations
const techTooltips: Record<string, string> = {
  'E-commerce': 'Built with modern tools for secure online stores and fast checkouts.',
  'Payments': 'Integration with secure payment gateways like Stripe.',
  'Performance': 'Optimized for speed and fast loading times.',
  'Web Framework': 'Utilizes modern frameworks like Next.js/React for robust performance.',
  'Styling': 'Uses efficient styling methods like Tailwind CSS for rapid UI development.',
  'Exam Prep Platform': 'Platform designed for test preparation with progress tracking.',
  'CMS Integration': 'Includes a Content Management System for easy content updates by clients.',
  'SEO Optimized': 'Built with search engine best practices for better Google ranking.',
  'Accessible Design': 'Designed to be usable by people with disabilities (WCAG).',
  'Marketplace': 'Platform connecting multiple sellers (farmers) with buyers.',
  'Local Focus': 'Features specific to hyperlocal discovery and delivery.',
  'Blogging Platform': 'System designed for creating, publishing, and managing articles.',
  'Community Features': 'Includes features for user interaction like comments and likes.',
  'Desktop App': 'Application designed to run natively on Windows/macOS/Linux.',
  'Logic Simulation': 'Software for designing and testing digital logic circuits.',
  'Interactive UI': 'User interface focused on direct manipulation and visual feedback.',
  '3D Modeling': 'Application for creating and manipulating 3D objects.',
  'Modular Design': 'Built using reusable components or blocks for flexibility.',
};

// Updated projects array with shorter descriptions and simplified tags
const projects = [
  {
    id: 1,
    title: 'Sophisticated Sips - Coffee E-commerce',
    description: 'Modern e-commerce for artisan coffee. Features secure payments and detailed product pages.', // Shortened
    imageUrl: 'https://picsum.photos/400/300?random=1',
    tags: ['E-commerce', 'Payments', 'Performance'], // Simplified further
    typeBadge: 'Niche E-commerce',
    highlight: 'Streamlined checkout & secure payments',
    icons: [ShoppingCart, ShieldCheck, Zap]
  },
  {
    id: 2,
    title: 'Blueprint for Success - Medical Exam Prep',
    description: 'Adaptive learning platform for medical exam prep with personalized dashboards and progress tracking.', // Shortened
    imageUrl: 'https://picsum.photos/400/300?random=2',
    tags: ['Exam Prep Platform', 'Accessible Design', 'CMS Integration'], // Simplified further
    typeBadge: 'Education Platform',
    highlight: 'Personalized progress tracking',
    icons: [GraduationCap, Search, BarChart2]
  },
  {
    id: 3,
    title: 'Local Harvest - Farmer Marketplace',
    description: 'Marketplace connecting local farmers directly with consumers. Location-based search and farmer profiles.', // Shortened
    imageUrl: 'https://picsum.photos/400/300?random=3',
    tags: ['Marketplace', 'Local Focus', 'Performance'], // Simplified further
    typeBadge: 'Hyperlocal Marketplace',
    highlight: 'Direct farmer-to-kitchen connection',
    icons: [Tractor, MapPin, ShoppingCart]
  },
  {
    id: 4,
    title: 'Deep Dive Green - Sustainability Blog',
    description: 'Interactive blog focused on sustainable living, featuring community interaction and content discovery.', // Shortened
    imageUrl: 'https://picsum.photos/400/300?random=4',
    tags: ['Blogging Platform', 'Community Features', 'SEO Optimized'], // Simplified further
    typeBadge: 'Community Blog',
    highlight: 'Engaging content & community',
    icons: [MessageSquare, Search, Users]
  },
  {
    id: 5,
    title: 'Logic Lab - Circuit Simulator',
    description: 'Desktop app for designing and simulating digital logic circuits with a drag-and-drop interface.', // Shortened
    imageUrl: 'https://picsum.photos/400/300?random=5',
    tags: ['Desktop App', 'Logic Simulation', 'Interactive UI'],
    typeBadge: 'Simulation Tool',
    highlight: 'Visual circuit design & simulation',
    icons: [CircuitBoard, MousePointer, Play]
  },
  {
    id: 6,
    title: 'Blueprint 3D - Block Builder',
    description: 'Interactive 3D desktop app for building models with architectural blocks. Intuitive manipulation tools.', // Shortened
    imageUrl: 'https://picsum.photos/400/300?random=6',
    tags: ['Desktop App', '3D Modeling', 'Modular Design'], // Simplified further
    typeBadge: '3D Builder Tool',
    highlight: 'Intuitive 3D modeling',
    icons: [Building, Cuboid, MousePointer]
  },
];

// Function to generate random-ish grid placement classes
const getGridPlacement = (index: number): string => {
  // Simple staggering based on index - adjust logic for more complex layouts
  const rowStart = Math.floor(index / 2) * 2 + 1; // Each row starts 2 grid rows down from previous
  const colStart = (index % 2) + 1; // Alternate columns 1 and 2
  return `lg:row-start-${rowStart} lg:col-start-${colStart}`;
  // Example: index 0 -> row 1, col 1; index 1 -> row 1, col 2; index 2 -> row 3, col 1; index 3 -> row 3, col 2
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className={cn(
        "relative w-full py-16 md:py-24 lg:py-32 bg-secondary overflow-hidden", // Added overflow-hidden
        "bg-circuit-pattern" // Apply circuit pattern
      )}
    >
      {/* Flow Diagram-like Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Example Lines */}
        <div className="absolute top-[10%] left-[5%] w-0.5 h-[30%] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent -rotate-12 opacity-50 animate-subtle-pulse"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[25%] h-0.5 bg-gradient-to-r from-transparent via-primary/15 to-transparent rotate-6 opacity-60 animate-float"></div>
        <div className="absolute top-[40%] right-[15%] w-16 h-16 border-2 border-dashed border-primary/10 rounded-full animate-slow-spin opacity-30"></div>
        <div className="absolute bottom-[30%] left-[20%] w-1 h-20 bg-gradient-to-t from-primary/5 to-transparent rotate-[25deg] opacity-40 animate-float-reverse"></div>
         {/* Example Shape */}
         <svg className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
           <path fill="hsl(var(--primary))" d="M47.1,-54.9C60.1,-44.3,69.1,-29.5,73.4,-12.9C77.7,3.7,77.3,22.2,68.7,35.8C60.1,49.4,43.4,58.2,27.2,64.6C11,71,-4.7,75,-20.1,71.8C-35.5,68.6,-50.6,58.1,-59.9,44.4C-69.2,30.8,-72.8,13.9,-71.4,-2.4C-70.1,-18.7,-63.9,-34.4,-52.5,-45.2C-41.1,-55.9,-24.5,-61.7,-8.2,-60.8C8,-59.9,16.1,-52.3,24.1,-50.3C32.1,-48.2,40.1,-51.5,47.1,-54.9Z" transform="translate(100 100) scale(0.8) rotate(30)" />
         </svg>
         <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-xl filter blur-xl animate-subtle-pulse"></div>

      </div>

      {/* Content container with relative positioning for z-index */}
      <div className="container px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary font-heading">Our Work Showcase</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl">
            Explore recent projects demonstrating our commitment to quality and client success.
          </p>
        </motion.div>

        {/* Staggered Grid Layout - Adjusted grid columns and gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }} // Slightly increased delay
              viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
              // Apply staggered vertical translation for visual interest on larger screens
              className={cn(
                  "mb-8 lg:mb-0",
                  index % 2 !== 0 && "lg:mt-12" // Add top margin to odd-indexed items on large screens
              )}
            >
              {/* Removed max-w-sm mx-auto to allow cards to fill grid columns */}
              <Card className="overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl rounded-lg border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm flex flex-col h-full"> {/* Removed max-w-sm mx-auto */}

                {/* Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={`Project: ${project.title}`}
                      fill={true}
                      style={{ objectFit: 'cover' }}
                      className="transition-opacity duration-500 ease-in-out group-hover:opacity-90" // Image is in color
                      data-ai-hint="website design screenshot"
                    />
                     {/* Gradient Overlay on Hover */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                   {/* Project Type Badge */}
                    <Badge variant="secondary" className="absolute top-3 right-3 text-xs bg-background/70 backdrop-blur-sm">
                      {project.typeBadge}
                    </Badge>
                </div>

                {/* Content container */}
                <CardContent className="p-5 flex flex-col justify-between flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-primary mb-1 group-hover:text-primary/90 transition-colors">
                      {project.title}
                    </h3>
                     {/* Key Feature/Result */}
                     <p className="text-sm font-semibold text-primary/80 mb-2">{project.highlight}</p>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p> {/* Shortened descriptions */}

                     {/* Tech Stack with Tooltips & Icons */}
                    <div className="flex flex-wrap gap-2 mb-4 items-center">
                      <TooltipProvider delayDuration={100}>
                        {project.tags.map((tag, tagIndex) => (
                          <Tooltip key={tagIndex}>
                            <TooltipTrigger asChild>
                              <Badge variant="outline" className="cursor-help text-xs font-medium border-primary/20 text-primary/80 hover:bg-primary/5 transition-colors">
                                {tag}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" className="max-w-xs">
                              <p>{techTooltips[tag] || 'Technology used in this project.'}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                         {/* Icons representing benefits */}
                         <div className="flex gap-1 text-muted-foreground ml-auto">
                           {project.icons?.map((Icon, iconIndex) => (
                             <Icon key={iconIndex} className="h-4 w-4" strokeWidth={1.5}/>
                           ))}
                         </div>
                      </TooltipProvider>
                    </div>
                  </div>

                  {/* Button aligned to the bottom */}
                  <div className="mt-auto pt-3">
                    <Button variant="default" size="sm" asChild className="w-fit group-hover:bg-primary/90 transition-colors duration-200 shadow-sm hover:shadow-md">
                      <Link href={`#`} className="group/link flex items-center">
                        <span>View Case Study</span>
                        <ExternalLink className="ml-1.5 h-4 w-4 inline-block transition-transform duration-300 ease-in-out group-hover/link:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Button to view more projects */}
        <div className="mt-16 text-center"> {/* Increased margin top */}
          <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105 border-primary/50 text-primary hover:bg-primary/5">
            <Link href="#">
              <span className="flex items-center">
                Explore Full Portfolio <ArrowRight className="ml-2 h-5 w-5 inline-block" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
