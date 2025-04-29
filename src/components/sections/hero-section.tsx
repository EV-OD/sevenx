import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      {/* Increased horizontal padding px-6 -> px-8, md:px-10 -> md:px-12, lg:px-16 */}
      <div className="container px-8 md:px-12 lg:px-16 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
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
        <div className="flex justify-center animate-fade-in animation-delay-600">
          <Image
            src="https://picsum.photos/600/400?grayscale"
            width={600}
            height={400}
            alt="Hero Image - Responsive Design Showcase"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last transition-transform duration-500 ease-in-out hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
}

// Add animation keyframes to globals.css if not already present
/*
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
 animation: fadeIn 0.8s ease-out forwards;
}

.animation-delay-200 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
.animation-delay-400 { animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards; }
.animation-delay-600 { animation-delay: 0.6s; opacity: 0; animation-fill-mode: forwards; }
*/

// Ensure these styles are added to your globals.css or a relevant CSS file
// and tailwind.config.js is configured for animations.
