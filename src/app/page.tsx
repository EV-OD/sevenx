
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ValuePropositionSection from '@/components/sections/value-proposition-section';
// import VisionGoalSection from '@/components/sections/vision-goal-section'; // Removed import
import MyProjectsSection from '@/components/sections/my-projects-section'; // Import the new MyProjectsSection
import TestimonialsSection from '@/components/sections/testimonials-section';
import TeamSection from '@/components/sections/team-section';
import NewsletterSection from '@/components/sections/newsletter-section';
import FooterSection from '@/components/sections/footer-section';
import Header from '@/components/layout/header';
import BlurryCursor from '@/components/cursor';
// import FloatingCTAButton from '@/components/layout/floating-cta-button'; // Import the new component // Commented out Floating CTA

export const metadata: Metadata = {
  title: 'ProResponsive - Professional & Responsive Web Design',
  description: 'Building modern, accessible, and high-performing websites.',
};

export default function Home() {
  return (
    // Removed relative z-10 as floating elements are now scoped to HeroSection
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Removed pt-4 and md:pt-8 for less top padding */}
      <main className="flex-grow pb-8 md:pb-16 flex flex-col items-center justify-center">
        <HeroSection/>
        <ServicesSection />
        <ValuePropositionSection />
        {/* <VisionGoalSection /> Removed component usage */}
        <MyProjectsSection /> {/* Use the new MyProjectsSection */}
        <TestimonialsSection />
        <TeamSection />
        <NewsletterSection />
      </main>
      <FooterSection />
      {/* <BlurryCursor isActive={false}/> */}


      {/*<FloatingCTAButton />  Add the floating CTA button */}
    </div>
  );
}
