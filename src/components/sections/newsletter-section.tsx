"use client";

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
       toast({
         variant: "destructive",
         title: "Invalid Email",
         description: "Please enter a valid email address.",
       });
      return;
    }

    // Here you would typically send the email to your backend/newsletter service
    console.log('Subscribing email:', email);

    toast({
      title: "Subscribed!",
      description: `Thank you for subscribing with ${email}.`,
    });
    setEmail(''); // Clear input after submission
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-xl space-y-6 text-center">
           <div className="inline-block rounded-lg bg-primary text-primary-foreground p-3 mb-3">
             <Mail className="h-7 w-7" />
           </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground md:text-lg">
            Stay updated with the latest trends in web design, development tips, and company news.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email for newsletter"
              required
            />
            <Button type="submit" className="transition-transform duration-300 ease-in-out hover:scale-105">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
