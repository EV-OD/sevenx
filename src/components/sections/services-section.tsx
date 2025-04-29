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
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Our Services</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a comprehensive range of services to build and enhance your online presence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg group">
              <CardHeader className="p-0 mb-4">
                 <div className="bg-primary text-primary-foreground rounded-full p-3 inline-flex mb-4 transition-colors duration-300 ease-in-out group-hover:bg-accent group-hover:text-accent-foreground">
                   <service.icon className="h-8 w-8" />
                 </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
