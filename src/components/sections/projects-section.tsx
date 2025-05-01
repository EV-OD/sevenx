// src/components/sections/projects-section.tsx
"use client"; // Required for framer-motion and client-side interactivity

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowRight, ExternalLink, Zap, ShieldCheck, Search, Code, Smartphone, Palette, ShoppingCart, GraduationCap, Tractor, MessageSquare, CircuitBoard, Building, MapPin, Cuboid, MousePointer, Play, Users, BarChart2 } from 'lucide-react'; // Added relevant icons, changed BarChart to BarChart2
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

// Updated projects array with detailed descriptions and simplified tags
const projects = [
  {
    id: 1,
    title: 'Sophisticated Sips - Artisan Coffee E-commerce',
    description: 'A modern e-commerce platform for artisan coffee beans. Features a dark blue theme with crisp white text, high-contrast product grids, secure Stripe payments, and detailed product pages with tasting notes and origin info. Built for performance and easy navigation.',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    tags: ['E-commerce', 'Payments', 'Performance', 'Web Framework'], // Simplified tags
    typeBadge: 'Niche E-commerce',
    highlight: 'Streamlined checkout & secure payments',
    icons: [ShoppingCart, ShieldCheck, Zap] // Icons: Shopping, Security, Speed
  },
  {
    id: 2,
    title: 'Blueprint for Success - Medical Exam Prep Hub',
    description: 'An adaptive learning platform for medical entrance exam preparation. Uses a focused dark blue and white UI for clarity. Features personalized dashboards, timed practice tests, progress tracking with visual charts, and organized study materials. Built for accessibility and efficiency.',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    tags: ['Exam Prep Platform', 'Accessible Design', 'Performance', 'CMS Integration'], // Simplified tags
    typeBadge: 'Education Platform',
    highlight: 'Personalized progress tracking & study plans',
    icons: [GraduationCap, Search, BarChart2] // Icons: Education, SEO/Search, Analytics (Changed BarChart to BarChart2)
  },
  {
    id: 3,
    title: 'Local Harvest - Farmer-to-Kitchen Marketplace',
    description: 'A marketplace connecting local farmers directly with consumers. Features farmer profiles, location-based search, and product listings with availability. The UI uses high-quality imagery with dark blue accents to convey freshness and trust. Includes easy filtering by distance and produce type.',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    tags: ['Marketplace', 'Local Focus', 'Web Framework', 'Performance'], // Simplified tags
    typeBadge: 'Hyperlocal Marketplace',
    highlight: 'Direct connection between farmers & kitchens',
    icons: [Tractor, MapPin, ShoppingCart] // Icons: Farming, Location, Shopping
  },
  {
    id: 4,
    title: 'Deep Dive Green - Sustainable Living Blog',
    description: 'An interactive blogging platform focused on sustainable living. Features a clean, modern dark theme with bold typography for readability. Includes article publishing, category browsing, user profiles, and community features like comments and likes. Optimized for content discovery.',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    tags: ['Blogging Platform', 'Community Features', 'SEO Optimized', 'CMS Integration'], // Simplified tags
    typeBadge: 'Community Blog',
    highlight: 'Engaging content & community interaction',
    icons: [MessageSquare, Search, Users] // Icons: Community, SEO/Search, Users
  },
  {
    id: 5,
    title: 'Logic Lab - Digital Logic Simulator',
    description: 'A desktop application for designing and simulating digital logic circuits. Features a dark blue canvas with clear white wires and component labels. Includes a drag-and-drop interface, a library of standard logic gates, simulation controls (play, pause, step), and visual output indicators.',
    imageUrl: 'https://picsum.photos/400/300?random=5',
    tags: ['Desktop App', 'Logic Simulation', 'Interactive UI'], // Simplified tags
    typeBadge: 'Simulation Tool',
    highlight: 'Visual circuit design & real-time simulation',
    icons: [CircuitBoard, MousePointer, Play] // Icons: Circuitry, Interaction, Simulation Control
  },
  {
    id: 6,
    title: 'Blueprint 3D - Architectural Block Builder',
    description: 'An interactive 3D desktop application for constructing models using architectural blocks. Features a dark blue 3D viewport with grid lines, a library of modules with previews, intuitive tools for manipulation (move, rotate, scale), and a properties panel for editing selected blocks.',
    imageUrl: 'https://picsum.photos/400/300?random=6',
    tags: ['Desktop App', '3D Modeling', 'Interactive UI', 'Modular Design'], // Simplified tags
    typeBadge: '3D Builder Tool',
    highlight: 'Intuitive 3D modeling with modular blocks',
    icons: [Building, Cuboid, MousePointer] // Icons: Architecture, 3D, Interaction
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className={cn(
        "relative w-full py-16 md:py-24 lg:py-32 bg-secondary", // Use secondary background
        "bg-blueprint-pattern" // Apply blueprint pattern
      )}
    >
      {/* Add a subtle overlay to ensure text readability over the pattern */}
      <div className="absolute inset-0 bg-secondary/80 dark:bg-secondary/90 backdrop-blur-[1px]" aria-hidden="true"></div>

      {/* Content container with relative positioning for z-index */}
      <div className="container px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary font-heading">Our Work Showcase</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl">
            Explore recent projects demonstrating our commitment to quality and client success.
          </p>
        </motion.div>

        {/* Grid layout - Changed to 3 columns on large screens, reduced gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 lg:mb-0" // Add bottom margin for spacing when stacking
            >
              <Card className="overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl rounded-lg border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm flex flex-col h-full max-w-sm mx-auto"> {/* Added max-w-sm and mx-auto */}

                {/* Image Container with Slow Zoom */}
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
                      className="transition-opacity duration-500 ease-in-out group-hover:opacity-90" // Image is now in color
                      data-ai-hint="website design screenshot"
                    />
                     {/* Optional Gradient Overlay on Hover */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                   {/* Project Type Badge */}
                    <Badge variant="secondary" className="absolute top-3 right-3 text-xs bg-background/70 backdrop-blur-sm">
                      {project.typeBadge}
                    </Badge>
                </div>

                {/* Content container - Reduced padding from p-6 to p-5 */}
                <CardContent className="p-5 flex flex-col justify-between flex-grow">
                   {/* Wrap content in a div to manage flex-grow */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-primary mb-1 group-hover:text-primary/90 transition-colors"> {/* Reduced title size slightly */}
                      {project.title}
                    </h3>
                     {/* Key Feature/Result */}
                     <p className="text-sm font-semibold text-primary/80 mb-2">{project.highlight}</p> {/* Reduced margins */}
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p> {/* Reduced margins */}

                     {/* Tech Stack with Tooltips */}
                    <div className="flex flex-wrap gap-2 mb-4 items-center"> {/* Reduced gap and margin */}
                      <TooltipProvider delayDuration={100}>
                        {project.tags.map((tag, index) => (
                          <Tooltip key={index}>
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
                         <div className="flex gap-1 text-muted-foreground ml-auto"> {/* Reduced gap */}
                           {project.icons?.map((Icon, iconIndex) => (
                             <Icon key={iconIndex} className="h-4 w-4" strokeWidth={1.5}/>
                           ))}
                         </div>
                      </TooltipProvider>
                    </div>
                  </div>

                  {/* Button aligned to the bottom */}
                  <div className="mt-auto pt-3"> {/* Reduced padding top */}
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
        <div className="mt-12 text-center"> {/* Reduced margin top */}
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
