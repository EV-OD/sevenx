import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Laptop, Smartphone, Palette, Code } from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: 'Web Design',
    description: 'Creating visually appealing and user-friendly website designs tailored to your brand.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Development',
    description: 'Building websites that adapt seamlessly to desktops, tablets, and mobile devices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Optimization',
    description: 'Enhancing user experience and interface design for maximum engagement and usability.',
  },
  {
    icon: Code,
    title: 'Custom Solutions',
    description: 'Developing bespoke web applications and features to meet unique business needs.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      {/* Increased horizontal padding px-6 -> px-8, md:px-10 -> md:px-12, lg:px-16 */}
      {/* Increased vertical padding py-12 -> py-16 */}
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"> {/* Increased bottom margin */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary font-heading">Our Services</h2> {/* Added font-heading */}
          <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl"> {/* Adjusted text size */}
            We offer a comprehensive range of services to build and enhance your online presence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Increased gap */}
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl group border-border/80 hover:border-primary/30"> {/* Added border styling, increased shadow */}
              <CardHeader className="p-0 mb-5 flex flex-col items-center"> {/* Ensure CardHeader content is centered */}
                 {/* Updated div: fixed size, centered content */}
                 <div className="bg-primary text-primary-foreground rounded-full w-20 h-20 inline-flex items-center justify-center mb-5 transition-all duration-300 ease-in-out group-hover:bg-primary/90 group-hover:scale-110 shadow-md">
                   <service.icon className="h-9 w-9" /> {/* Icon size remains */}
                 </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle> {/* Added hover color */}
              </CardHeader>
              <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription> {/* Added leading-relaxed */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
