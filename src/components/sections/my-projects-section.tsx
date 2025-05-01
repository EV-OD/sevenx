
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'; // Use Badge for category label
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const filters = ["All", "UI/UX", "Web Design", "App Design", "Graphic Design"];

const projects = [
  {
    id: 1,
    category: "Web Design",
    title: "AirCalling Landing Page Design",
    imageUrl: "https://picsum.photos/400/300?random=12",
    aiHint: "website landing page design"
  },
  {
    id: 2,
    category: "Web Design",
    title: "Business Landing Page Design",
    imageUrl: "https://picsum.photos/400/300?random=13",
    aiHint: "business website dashboard"
  },
  {
    id: 3,
    category: "Web Design",
    title: "Ecom Web Page Design",
    imageUrl: "https://picsum.photos/400/300?random=14",
    aiHint: "ecommerce product page"
  },
    // Add more projects if needed
];

export default function MyProjectsSection() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  // Filter projects based on activeFilter (implement if filtering logic is needed)
  const filteredProjects = projects.filter(project =>
    activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-8 md:px-12 lg:px-16">
        {/* Heading and Optional Intro Text */}
        <motion.div
          className="mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-heading mb-3">
            My Projects
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
            className="flex justify-center flex-wrap gap-3 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "secondary"}
              size="sm"
              className={cn(
                "rounded-full px-4 py-1.5 h-auto text-sm font-medium transition-colors duration-200",
                 activeFilter === filter ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.1 }}
             viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
                key={project.id}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                 initial="hidden"
                 animate="visible"
                 transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50 bg-card h-full flex flex-col">
                {/* Visual Preview Area */}
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.aiHint}
                  />
                </div>
                {/* Card Content */}
                <CardContent className="p-5 flex flex-col flex-grow">
                  <Badge variant="secondary" className="mb-2 w-fit text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  {/* Optional: Add a short description or link here */}
                   {/* <Button variant="link" size="sm" className="p-0 h-auto mt-auto self-start text-primary hover:underline">
                     View Details <ArrowRight className="ml-1 h-4 w-4" />
                   </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
