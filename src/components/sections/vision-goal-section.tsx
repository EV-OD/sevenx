import { Target, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Import Card components

export default function VisionGoalSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      {/* Increased vertical padding py-12 -> py-16 */}
      {/* Increased horizontal padding px-6 -> px-8, md:px-10 -> md:px-12, lg:px-16 */}
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start"> {/* Increased gap */}
          <Card className="border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow duration-300"> {/* Use Card component */}
            <CardHeader className="flex flex-row items-center gap-4 pb-4"> {/* Flex layout for icon and title */}
              <div className="inline-block rounded-lg bg-primary text-primary-foreground p-3 shadow-md"> {/* Added shadow */}
                <Eye className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary sm:text-3xl font-heading m-0">Our Vision</CardTitle> {/* Added font-heading, removed default margin */}
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground md:text-lg leading-relaxed"> {/* Added leading-relaxed */}
                To be a leading force in creating innovative and accessible web solutions that empower businesses and individuals to thrive in the digital landscape.
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow duration-300"> {/* Use Card component */}
             <CardHeader className="flex flex-row items-center gap-4 pb-4"> {/* Flex layout for icon and title */}
               <div className="inline-block rounded-lg bg-primary text-primary-foreground p-3 shadow-md"> {/* Added shadow */}
                 <Target className="h-7 w-7" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary sm:text-3xl font-heading m-0">Our Goal</CardTitle> {/* Added font-heading, removed default margin */}
            </CardHeader>
             <CardContent>
              <p className="text-muted-foreground md:text-lg leading-relaxed"> {/* Added leading-relaxed */}
                Our primary goal is to deliver exceptional, responsive websites that exceed client expectations through collaboration, technical expertise, and a commitment to quality and performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
