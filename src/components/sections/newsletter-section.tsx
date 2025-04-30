
"use client";

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send } from 'lucide-react'; // Added Send icon
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Import Card components

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
       toast({
         variant: "destructive",
         title: "Invalid Email",
         description: "Please enter a valid email address.",
       });
       setIsLoading(false); // Stop loading on error
      return;
    }

    // Simulate API call
    try {
        // Replace with your actual API call logic
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
        console.log('Subscribing email:', email);

        toast({
        title: "Subscribed Successfully!",
        description: `Thank you for joining our newsletter with ${email}.`,
        });
        setEmail(''); // Clear input after successful submission
    } catch (error) {
         toast({
         variant: "destructive",
         title: "Subscription Failed",
         description: "Something went wrong. Please try again later.",
       });
       console.error('Subscription error:', error);
    } finally {
        setIsLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      {/* Increased vertical padding */}
      {/* Increased horizontal padding px-6 -> px-8, md:px-10 -> md:px-12, lg:px-16 */}
      <div className="container px-8 md:px-12 lg:px-16">
         {/* Use Card for better structure */}
        <Card className="max-w-2xl mx-auto shadow-lg border border-border/80 overflow-hidden">
           <CardHeader className="bg-primary/5 p-6 text-center"> {/* Added background tint */}
             <div className="inline-block rounded-full bg-primary text-primary-foreground p-3 mb-4 shadow-md"> {/* Added shadow */}
               <Mail className="h-7 w-7" />
             </div>
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl text-primary font-heading">Stay Connected</CardTitle> {/* Updated title */}
             <CardDescription className="text-muted-foreground md:text-lg mt-1"> {/* Adjusted size, added margin */}
               Get the latest web design insights, tips, and company news delivered to your inbox.
             </CardDescription>
           </CardHeader>
           <CardContent className="p-6 md:p-8"> {/* Increased padding */}
             <> {/* Wrap children in a Fragment */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center"> {/* Added items-center */}
                  <div className="relative flex-grow w-full">
                     <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" /> {/* Added icon inside input */}
                      <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="pl-10 pr-4 py-2 h-11 text-base" // Adjusted padding, height, text size
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          aria-label="Email for newsletter"
                          required
                          disabled={isLoading} // Disable input while loading
                      />
                  </div>
                  <Button
                      type="submit"
                      size="lg" // Made button large
                      className="w-full sm:w-auto transition-all duration-300 ease-in-out hover:scale-105 shadow-md group" // Added shadow, group class
                      disabled={isLoading} // Disable button while loading
                  >
                     {isLoading ? (
                         <span className="animate-spin mr-2 h-5 w-5 border-t-2 border-r-2 border-primary-foreground rounded-full"></span>
                     ) : (
                        <Send className="mr-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> // Added Send icon
                     )}
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center sm:text-left">
                    We respect your privacy. Unsubscribe at any time.
                </p>
             </>
           </CardContent>
        </Card>
      </div>
    </section>
  );
}
