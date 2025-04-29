import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Lead Developer',
    imageUrl: 'https://picsum.photos/200/200?random=8&grayscale',
    social: { linkedin: '#', github: '#' },
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    imageUrl: 'https://picsum.photos/200/200?random=9&grayscale',
    social: { linkedin: '#', github: '#' },
  },
  {
    name: 'Mike Johnson',
    role: 'Project Manager',
    imageUrl: 'https://picsum.photos/200/200?random=10&grayscale',
    social: { linkedin: '#', github: '#' },
  },
    {
    name: 'Sarah Lee',
    role: 'Frontend Developer',
    imageUrl: 'https://picsum.photos/200/200?random=11&grayscale',
    social: { linkedin: '#', github: '#' },
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Meet The Team</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The passionate individuals behind ProResponsive, dedicated to bringing your projects to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="relative h-32 w-32 mb-4 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-300">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill={true}
                    style={{objectFit: 'cover'}}
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <CardHeader className="p-0 mb-1">
                  <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                </CardHeader>
                <CardDescription className="text-primary mb-3">{member.role}</CardDescription>
                <div className="flex space-x-3 text-muted-foreground">
                  <Link href={member.social.linkedin} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Link>
                  <Link href={member.social.github} passHref legacyBehavior>
                     <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                     </a>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
