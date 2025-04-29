import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const projects = [
  { id: 1, title: 'E-commerce Platform', description: 'Responsive online store.', imageUrl: 'https://picsum.photos/400/300?random=1&grayscale' },
  { id: 2, title: 'Corporate Website Redesign', description: 'Modern & professional look.', imageUrl: 'https://picsum.photos/400/300?random=2&grayscale' },
  { id: 3, title: 'Portfolio Showcase', description: 'Creative portfolio display.', imageUrl: 'https://picsum.photos/400/300?random=3&grayscale' },
  { id: 4, title: 'Booking System', description: 'User-friendly appointment booking.', imageUrl: 'https://picsum.photos/400/300?random=4&grayscale' },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      {/* Increased horizontal padding px-6 -> px-8, md:px-10 -> md:px-12, lg:px-16 */}
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">My Projects</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Take a look at some of the recent websites we've designed and developed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                   <Image
                    src={project.imageUrl}
                    alt={`Project: ${project.title}`}
                    fill={true}
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
                     <h3 className="text-lg font-semibold text-primary-foreground mb-1">{project.title}</h3>
                     <p className="text-sm text-primary-foreground/80 mb-2">{project.description}</p>
                     <Button variant="secondary" size="sm" asChild className="w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out translate-y-2 group-hover:translate-y-0">
                       <Link href={`#`}> {/* Replace # with actual project link */}
                         View Project <ArrowRight className="ml-1 h-4 w-4" />
                       </Link>
                     </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
