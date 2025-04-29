import { CheckCircle, Zap, Users } from 'lucide-react';

const propositions = [
  {
    icon: CheckCircle,
    title: 'Quality Focused',
    description: 'We prioritize high-quality code and design standards for robust and maintainable websites.',
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Our websites are built for speed and performance, ensuring fast load times and smooth interactions.',
  },
  {
    icon: Users,
    title: 'Client Collaboration',
    description: 'We work closely with you throughout the process to ensure the final product meets your vision.',
  },
];

export default function ValuePropositionSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Why Choose Us?</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover the advantages of partnering with ProResponsive for your web development needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-background shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md">
               <div className="bg-primary text-primary-foreground rounded-full p-3 inline-flex mb-3">
                 <prop.icon className="h-7 w-7" />
               </div>
              <h3 className="text-xl font-semibold">{prop.title}</h3>
              <p className="text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
