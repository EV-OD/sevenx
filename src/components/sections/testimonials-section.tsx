
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Star, Quote } from 'lucide-react'; // Added Quote icon

// const testimonials = [
//   {
//     name: 'Alice Johnson',
//     title: 'CEO, TechCorp',
//     avatar: 'https://picsum.photos/100/100?random=5',
//     fallback: 'AJ',
//     rating: 5,
//     quote: 'SevenX delivered an outstanding website that perfectly captures our brand. The responsive design works flawlessly across all devices!',
//   },
//   {
//     name: 'Bob Smith',
//     title: 'Marketing Director, Innovate Solutions',
//     avatar: 'https://picsum.photos/100/100?random=6',
//     fallback: 'BS',
//     rating: 5,
//     quote: 'The team was highly professional, responsive, and collaborative throughout the entire project. Our new site looks amazing and performs significantly better.',
//   },
//   {
//     name: 'Clara Williams',
//     title: 'Founder, Creative Hub',
//     avatar: 'https://picsum.photos/100/100?random=7',
//     fallback: 'CW',
//     rating: 4,
//     quote: 'They truly understood our unique vision and translated it into a beautiful, highly functional website. We couldn\'t be happier with the results. Highly recommended.',
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
//       {/* Increased vertical padding */}
//       {/* Increased horizontal padding px-6 -> px-8, md:px-10 -> md:px-12, lg:px-16 */}
//       <div className="container px-8 md:px-12 lg:px-16">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16"> {/* Increased bottom margin */}
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary font-heading">What Clients Say About Us</h2> {/* Added font-heading */}
//           <p className="max-w-[700px] text-muted-foreground md:text-lg lg:text-xl"> {/* Adjusted text size */}
//             Hear directly from our satisfied clients about their experience working with SevenX.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
//           {testimonials.map((testimonial, index) => (
//             <Card key={index} className="flex flex-col justify-between shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl rounded-lg border border-border/80 hover:border-primary/20 transform hover:-translate-y-1"> {/* Added rounded-lg, border, translate-y */}
//               <CardHeader className="p-6 pb-4">
//                  <div className="flex items-center gap-4">
//                    <Avatar className="h-12 w-12 border-2 border-primary/20"> {/* Increased size, added border */}
//                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
//                      <AvatarFallback>{testimonial.fallback}</AvatarFallback>
//                    </Avatar>
//                    <div>
//                      <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
//                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
//                    </div>
//                  </div>
//               </CardHeader>
//               <CardContent className="p-6 pt-2 flex-grow relative"> {/* Added relative positioning */}
//                  <> {/* Wrap CardContent children in a Fragment */}
//                    <Quote className="absolute top-4 left-2 h-8 w-8 text-primary/10 transform -translate-x-1/2 -translate-y-1/2" strokeWidth={1.5} /> {/* Added Quote icon */}
//                   <p className="text-muted-foreground italic leading-relaxed pl-4"> {/* Added leading-relaxed, padding left */}
//                     {testimonial.quote}
//                   </p>
//                  </>
//               </CardContent>
//               <CardFooter className="p-6 pt-4 flex justify-start border-t border-border/50 mt-auto"> {/* Added border-top, margin-top auto */}
//                  <div className="flex gap-1">
//                    {Array.from({ length: 5 }).map((_, i) => (
//                      <Star
//                        key={i}
//                        className={`h-5 w-5 ${
//                          i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted-foreground/30' // Dimmed inactive stars
//                        }`}
//                      />
//                    ))}
//                  </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { TestimonialsSection } from "@/components/simple-animated-testimonials";

export function TestimonialsSectionBasic() {
  return (
    <TestimonialsSection
      testimonials={[
      {
        id: 1,
        name: "Suman Shrestha",
        role: "Project Manager",
        company: "Himalayan Logistics",
        content:
        "Working with SevenX was a fantastic experience. Their team delivered our project on time and exceeded our expectations with their technical expertise and dedication.",
        rating: 5,
        avatar: "/man.jpg",
      },
      {
        id: 2,
        name: "Pratima Karki",
        role: "Founder",
        company: "Nepal Eco Tours",
        content:
        "SevenX truly understood our vision and built a beautiful, user-friendly website for our travel business. Communication was smooth and the results speak for themselves.",
        rating: 5,
        avatar: "/women1.jpg",
      },
      {
        id: 3,
        name: "Rabin Gurung",
        role: "CTO",
        company: "Everest Fintech",
        content:
        "We are impressed by SevenX’s professionalism and technical skills. Their solutions helped us scale our platform securely and efficiently. Highly recommended for any IT needs in Nepal.",
        rating: 5,
        avatar: "/man2.jpg",
      },
      ]}
      // trustedCompanies={["Ncell", "Kumari Bank", "Daraz", "NIC Asia", "IME Pay"]}
      // trustedCompaniesTitle="Trusted by leading Nepali brands"
    />
    );
}
