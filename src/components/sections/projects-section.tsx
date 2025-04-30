import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react'; // Added ExternalLink

const projects = [
  { id: 1, title: 'E-commerce Platform', description: 'Responsive online store for modern retail.', imageUrl: 'https://picsum.photos/400/300?random=1&grayscale', tags: ['Next.js', 'Stripe', 'Tailwind'] },
  { id: 2, title: 'Corporate Website Redesign', description: 'Modern & professional look for a B2B company.', imageUrl: 'https://picsum.photos/400/300?random=2&grayscale', tags: ['CMS', 'SEO', 'Accessibility'] },
  { id: 3, title: 'Portfolio Showcase', description: 'Creative portfolio display for artists.', imageUrl: 'https://picsum.photos/400/300?random=3&grayscale', tags: ['Framer Motion', 'React', 'Sanity'] },
  { id: 4, title: 'Booking System', description: 'User-friendly appointment booking SaaS.', imageUrl: 'https://picsum.photos/400/300?random=4&grayscale', tags: ['Fullstack', 'Calendar API', 'Auth'] },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      {/* Increased vertical padding */}
      {/* Increased horizontal padding px-6 -> px-8, md:px-10 -> md:px-12, lg:px-16 */}
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"> {/* Increased bottom margin */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary font-heading">Our Projects</h2> {/* Added font-heading */}
          <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl"> {/* Adjusted text size */}
            Take a look at some of the recent websites we've designed and developed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Changed to 2 columns for lg, increased gap */}
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl rounded-lg border-border/80 hover:border-primary/30 flex flex-col md:flex-row"> {/* Use flex for side-by-side layout on md+ */}
               {/* Image container - takes 40% width on medium screens and up */}
              <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                 <Image
                  src={project.imageUrl}
                  alt={`Project: ${project.title}`}
                  fill={true}
                  style={{objectFit: 'cover'}}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                 {/* Subtle overlay on image hover */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

               {/* Content container - takes 60% width on medium screens and up */}
              <CardContent className="p-6 flex flex-col justify-between w-full md:w-3/5"> {/* Adjusted padding */}
                 <div>
                   <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary/90 transition-colors">{project.title}</h3> {/* Increased font size, added margin */}
                   <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p> {/* Added leading-relaxed */}
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag, index) => (
                         <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                             {tag}
                         </span>
                        ))}
                    </div>
                 </div>

                 <Button variant="outline" size="sm" asChild className="w-fit mt-auto group-hover:bg-accent transition-colors duration-200"> {/* Use outline, align button bottom */}
                   <Link href={`#`} className="group/link"> {/* Replace # with actual project link */}
                     View Project <ExternalLink className="ml-1.5 h-4 w-4 transition-transform duration-300 ease-in-out group-hover/link:translate-x-0.5" /> {/* Changed icon */}
                   </Link>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>
         {/* Optional: Add a button to view more projects */}
         <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105">
                <Link href="#">
                    Explore More Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
         </div>
      </div>
    </section>
  );
}
