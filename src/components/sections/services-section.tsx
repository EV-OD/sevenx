
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge'; // Import Badge
import { Laptop, Smartphone, Palette, Code, ArrowRight } from 'lucide-react'; // Added ArrowRight
import { cn } from '@/lib/utils'; // Import cn

const services = [
  {
    icon: Laptop, // Kept Laptop icon, represents design/desktop view
    title: 'Strategic Web Design',
    description: 'Crafting user-centric interfaces using Figma for wireframing and prototyping. Focused on brand alignment and intuitive navigation.',
    tags: ['UI Design', 'Figma', 'User Research'],
  },
  {
    icon: Smartphone, // Kept Smartphone icon
    title: 'Responsive Frontend Development',
    description: 'Building pixel-perfect, mobile-first websites with Next.js and Tailwind CSS for optimal performance and cross-device compatibility.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Mobile-First'],
  },
  {
    icon: Palette, // Kept Palette icon, represents aesthetics/optimization
    title: 'UI/UX Enhancement',
    description: 'Improving user engagement through usability testing, A/B testing insights, and data-driven design iterations for better conversions.',
    tags: ['UX Audit', 'A/B Testing', 'Analytics'],
  },
  {
    icon: Code, // Kept Code icon
    title: 'Fullstack Custom Solutions',
    description: 'Developing bespoke web applications with Node.js backends, integrating databases like PostgreSQL/MongoDB, and building custom APIs.',
    tags: ['Fullstack', 'Node.js', 'API Integration', 'Database'],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      // Apply the wavy background class
      className={cn(
        "w-full py-16 md:py-24 lg:py-32 bg-background",
        "bg-wavy" // Added wavy background
      )}
    >
      {/* Consistent padding with other sections */}
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          {/* Increased title size */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary font-heading">
            Our Services
          </h2>
          {/* Adjusted description size */}
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            We offer a comprehensive range of services to build and enhance your online presence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            // Added subtle background on hover, adjusted padding, flex-grow
            <Card key={index} className="flex flex-col p-6 transition-all duration-300 ease-in-out hover:shadow-lg group border border-border/50 hover:border-primary/20 bg-card flex-grow hover:bg-secondary/30">
              <CardHeader className="p-0 mb-5 flex flex-col items-start"> {/* Align items start */}
                 {/* Updated icon container */}
                 <div className="bg-primary/10 text-primary rounded-lg w-14 h-14 flex items-center justify-center mb-5 transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-sm">
                   <service.icon className="h-7 w-7" /> {/* Adjusted icon size */}
                 </div>
                {/* Increased title size and added margin */}
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 mb-2 text-left"> {/* Align left */}
                  {service.title}
                </CardTitle>
                 {/* Tech Tags */}
                 <div className="flex flex-wrap gap-1.5 mb-3">
                   {service.tags.map((tag, tagIndex) => (
                     <Badge key={tagIndex} variant="secondary" className="text-xs font-medium">
                       {tag}
                     </Badge>
                   ))}
                 </div>
              </CardHeader>
              {/* Adjusted description size, align left */}
              <CardDescription className="text-muted-foreground text-sm leading-relaxed text-left flex-grow">
                 {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>

         {/* Secondary CTA Button */}
        <div className="mt-16 text-center">
          <Button size="lg" variant="default" asChild className="transition-transform hover:scale-105 shadow-md group">
            <Link href="#contact">
              <span> {/* Wrap children */}
                Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
