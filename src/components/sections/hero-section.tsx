import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Import Link from 'next/link' instead of react-router-dom
import { cn } from '@/lib/utils';
import { Code, BarChart, Briefcase, Settings, Network } from 'lucide-react'; // Import relevant icons

// Define floating BACKGROUND elements
const floatingHeroElements = [
  { icon: Code, style: 'top-1/4 left-1/5 w-12 h-12 text-primary/30 animate-float animation-delay-200' },
  { icon: BarChart, style: 'bottom-1/3 right-1/4 w-16 h-16 text-secondary-foreground/20 animate-float-reverse animation-delay-400' },
  { icon: Briefcase, style: 'top-1/2 right-1/5 w-10 h-10 text-primary/20 animate-float' },
  { icon: Settings, style: 'bottom-1/4 left-1/3 w-14 h-14 text-secondary-foreground/15 animate-float-reverse animation-delay-600' },
  { icon: Network, style: 'top-1/5 right-2/5 w-12 h-12 text-primary/25 animate-float animation-delay-300' }, // Fixed syntax error here, added comma
  // Add a simple div styled like a UI card
  { div: true, style: 'bottom-1/5 left-1/6 w-24 h-16 bg-card/10 border border-border/20 rounded-lg animate-float animation-delay-500 shadow-sm' },
];

// Define floating FOREGROUND elements
import { Layers, Target, TrendingUp, Activity, Puzzle } from 'lucide-react';
const floatingForegroundElements = [
  { icon: Layers, style: 'absolute top-10 -right-5 lg:top-16 lg:-right-8 w-10 h-10 text-primary/50 animate-float z-20 opacity-70' },
  { icon: Target, style: 'absolute bottom-10 -left-4 lg:bottom-16 lg:-left-6 w-8 h-8 text-primary/60 animate-float-reverse z-20 opacity-60' },
  { div: true, style: 'absolute bottom-20 right-0 lg:bottom-24 lg:-right-4 w-20 h-8 bg-primary/10 border border-primary/20 rounded-md animate-float z-20 opacity-50 shadow-sm' }, // Mini progress bar/card
  { icon: TrendingUp, style: 'absolute top-5 left-5 lg:top-8 lg:left-8 w-9 h-9 text-primary/40 animate-float-reverse z-20 opacity-65 animation-delay-100' },
  { icon: Activity, style: 'absolute bottom-5 right-5 lg:bottom-8 lg:right-8 w-11 h-11 text-primary/55 animate-float z-20 opacity-75 animation-delay-300' },
  { div: true, style: 'absolute top-1/3 -left-5 lg:top-1/3 lg:-left-7 w-16 h-10 bg-accent/20 border border-border/30 rounded-lg animate-float-reverse z-20 opacity-60 shadow' }, // Another abstract UI element
  { icon: Puzzle, style: 'absolute top-3/4 right-1/4 w-7 h-7 text-secondary-foreground/30 animate-float z-20 opacity-50 animation-delay-500' },
];


export default function HeroSection() {
  return (
    <section
      id="home"
      className={cn(
        "relative w-full py-12 md:py-24 lg:py-32 bg-secondary overflow-hidden", // Ensure overflow is hidden for absolute elements
        "bg-pattern-light dark:bg-pattern-dark"
      )}
    >
       {/* Floating BACKGROUND elements container */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        {floatingHeroElements.map((el, index) => (
          el.icon ? (
            <el.icon
              key={index}
              className={cn(
                'absolute blur-[1px]', // Soften the icons slightly
                el.style
              )}
              strokeWidth={1.5} // Make icons slightly thinner
            />
          ) : (
            <div // Render the div element
              key={index}
               className={cn(
                'absolute blur-[1px]',
                el.style
              )}
            />
          )
        ))}
      </div>

      {/* Increased horizontal padding px-6 -> px-8, md:px-10 -> md:px-12, lg:px-16 */}
      <div className="container px-8 md:px-12 lg:px-16 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center relative z-10"> {/* Main content container */}
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary animate-fade-in-up">
            Crafting Responsive Web Experiences
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
            We build modern, accessible, and high-performing websites that look great on any device. Let us bring your vision to life.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start animate-fade-in-up animation-delay-400 pt-4"> {/* Added padding top */}
            <Button asChild size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Link href="#contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center animate-fade-in animation-delay-600"> {/* Make image container relative for foreground elements */}
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
        </div>
      </div>
    </section>
  );
}
