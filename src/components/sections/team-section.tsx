
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Github, Twitter } from 'lucide-react'; // Added Twitter
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Rabin Lamichhane',
    role: 'Project Engineer',
    imageUrl: '/rabin.jpg',
    social: { linkedin: 'https://www.linkedin.com/in/rabinlc01/', github: 'https://github.com/EV-OD', twitter: 'https://x.com/RabinLc164' },
    bio: 'Passionate about building innovative solutions that make a difference. Loves tackling complex challenges with a smile.',
  },
  {
    name: 'Sankalpa Baral',
    role: 'UI/UX Designer',
    imageUrl: '/sankalpa.jpg',
    social: { linkedin: '#', github: '#', twitter: '#' },
    bio: 'Crafting intuitive and visually stunning user interfaces is my forte. Loves minimalist design.',
  },
  {
    name: 'Atul Tiwari',
    role: 'Lead Developer',
    imageUrl: '/atul.jpg',
    social: { linkedin: '#', github: '#', twitter: '#' },
    bio: 'Full-stack developer with a passion for creating scalable web applications. Enjoys mentoring junior developers.',
  },
  {
    name: "Gyaneshwar Sah",
    role: 'Software Engineer',
    imageUrl: '/gyaneswor.jpg',
    social: { linkedin: '#', github: '#', twitter: '#' },
    bio: 'Specializing in backend development and cloud solutions. Loves solving complex problems.',
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
       {/* Increased vertical padding */}
       {/* Increased horizontal padding px-6 -> px-8, md:px-10 -> md:px-12, lg:px-16 */}
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"> {/* Increased bottom margin */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary font-heading">Meet The Team</h2> {/* Added font-heading */}
          <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl"> {/* Adjusted text size */}
            The passionate individuals behind SevenX, dedicated to bringing your projects to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl rounded-lg border border-border/80 hover:border-primary/20 transform hover:-translate-y-1 bg-background"> {/* Added rounded-lg, border, translate-y, background */}
              <CardContent className="p-6 flex flex-col items-center">
                 <> {/* Wrap CardContent children in a Fragment */}
                   {/* Image with hover effect */}
                  <div className="relative h-36 w-36 mb-5 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300 shadow-lg group-hover:scale-105"> {/* Increased size, border, shadow */}
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill={true}
                      style={{objectFit: 'cover'}}
                      className="transition-transform duration-500 ease-in-out" // Removed group-hover scale from inner image
                    />
                  </div>
                   {/* Text content */}
                  <CardHeader className="p-0 mb-1">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">{member.name}</CardTitle>
                  </CardHeader>
                  <CardDescription className="text-primary mb-3 font-medium">{member.role}</CardDescription>
                  <p className="text-sm text-muted-foreground mb-4 px-2 leading-relaxed h-20 overflow-hidden">{member.bio}</p> {/* Added bio, limited height */}
                   {/* Social Links */}
                  <div className="flex space-x-4 text-muted-foreground mt-auto pt-4 border-t border-border/50 w-full justify-center"> {/* Added top border, full width */}
                    <Link href={member.social.linkedin} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all transform hover:scale-125"> {/* Added scale transform */}
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Link>
                    <Link href={member.social.github} passHref legacyBehavior>
                       <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all transform hover:scale-125"> {/* Added scale transform */}
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                       </a>
                    </Link>
                     <Link href={member.social.twitter} passHref legacyBehavior>
                       <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all transform hover:scale-125"> {/* Added Twitter, scale transform */}
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                       </a>
                    </Link>
                  </div>
                 </>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
