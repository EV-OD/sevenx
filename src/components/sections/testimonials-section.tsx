import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alice Johnson',
    title: 'CEO, TechCorp',
    avatar: 'https://picsum.photos/100/100?random=5',
    fallback: 'AJ',
    rating: 5,
    quote: 'ProResponsive delivered an outstanding website that perfectly captures our brand. The responsive design works flawlessly!',
  },
  {
    name: 'Bob Smith',
    title: 'Marketing Director, Innovate Solutions',
    avatar: 'https://picsum.photos/100/100?random=6',
    fallback: 'BS',
    rating: 5,
    quote: 'The team was highly professional and collaborative. Our new site looks amazing and performs much better.',
  },
  {
    name: 'Clara Williams',
    title: 'Founder, Creative Hub',
    avatar: 'https://picsum.photos/100/100?random=7',
    fallback: 'CW',
    rating: 4,
    quote: 'They understood our vision and translated it into a beautiful, functional website. Highly recommended.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">What Clients Say About Us</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear directly from our satisfied clients about their experience working with ProResponsive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg">
              <CardHeader className="p-6 pb-4">
                 <div className="flex items-center gap-4">
                   <Avatar>
                     <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                     <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                   </Avatar>
                   <div>
                     <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                     <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                   </div>
                 </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex justify-start">
                 <div className="flex gap-1">
                   {Array.from({ length: 5 }).map((_, i) => (
                     <Star
                       key={i}
                       className={`h-5 w-5 ${
                         i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted-foreground/50'
                       }`}
                     />
                   ))}
                 </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
