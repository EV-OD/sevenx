import { Target, Eye } from 'lucide-react';

export default function VisionGoalSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-6 md:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary text-primary-foreground p-3 mb-3">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Our Vision</h3>
            <p className="text-muted-foreground md:text-lg">
              To be a leading force in creating innovative and accessible web solutions that empower businesses and individuals to thrive in the digital landscape.
            </p>
          </div>
          <div className="space-y-4">
             <div className="inline-block rounded-lg bg-primary text-primary-foreground p-3 mb-3">
               <Target className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-primary sm:text-3xl">Our Goal</h3>
            <p className="text-muted-foreground md:text-lg">
              Our primary goal is to deliver exceptional, responsive websites that exceed client expectations through collaboration, technical expertise, and a commitment to quality and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
