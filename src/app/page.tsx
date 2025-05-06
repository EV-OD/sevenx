
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ValuePropositionSection from '@/components/sections/value-proposition-section';
// import VisionGoalSection from '@/components/sections/vision-goal-section'; // Removed import
import MyProjectsSection from '@/components/sections/my-projects-section'; // Import the new MyProjectsSection
import { TestimonialsSectionBasic } from '@/components/sections/testimonials-section';
import TeamSection from '@/components/sections/team-section';
import NewsletterSection from '@/components/sections/newsletter-section';
import FooterSection from '@/components/sections/footer-section';
import Header from '@/components/layout/header';
import BlurryCursor from '@/components/cursor';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
// import FloatingCTAButton from '@/components/layout/floating-cta-button'; // Import the new component // Commented out Floating CTA

export const metadata: Metadata = {
  title: 'SevenX Innovations Pvt. Ltd.',
  description: 'Building modern, accessible, and high-performing solutions.',
  keywords: [
    'SevenX Innovations',
    'IT Company in Nepal',
    'Tech Company Nepal',
    'Web Development Nepal',
    'App Development Nepal',
    'Software Development Nepal',
    'Custom Software Nepal',
    'Mobile App Development Nepal',
    'Best IT Company in Nepal',
    'Digital Solutions Nepal',
    'Nepal Tech Startup',
    'Top Tech Companies Nepal',
    'Outsourcing IT Nepal',
    'Enterprise Software Nepal',
    'SaaS Company Nepal',
    'UI UX Design Nepal',
    'Cloud Solutions Nepal',
    'Tech Innovation Nepal',
    'SevenX Pvt Ltd',
    'SevenX Software Company'
  ],
  authors: [{ name: 'SevenX Innovations Pvt. Ltd.', url: 'https://sevenx.com.np' }],
  metadataBase: new URL('https://sevenx.com.np'),  
};

export default function Home() {
  return (
    // Removed relative z-10 as floating elements are now scoped to HeroSection
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Removed pt-4 and md:pt-8 for less top padding */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <HeroSection/>
        <ServicesSection />
        <ValuePropositionSection />
        {/* <VisionGoalSection /> Removed component usage */}
        <HeroGeometric badge="SevenX"
            title1 = "Elevate Your"
            title2 = "Business" />
        {/* <MyProjectsSection />  */}
        {/* <TestimonialsSection /> */}
        <TestimonialsSectionBasic />
        <TeamSection />
        <NewsletterSection />
      </main>
      <FooterSection />
      {/* <BlurryCursor isActive={false}/> */}


      {/*<FloatingCTAButton />  Add the floating CTA button */}
    </div>
  );
}
