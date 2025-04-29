import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import ServicesSection from '@/components/sections/services-section';
import ValuePropositionSection from '@/components/sections/value-proposition-section';
import VisionGoalSection from '@/components/sections/vision-goal-section';
import ProjectsSection from '@/components/sections/projects-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import TeamSection from '@/components/sections/team-section';
import NewsletterSection from '@/components/sections/newsletter-section';
import FooterSection from '@/components/sections/footer-section';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'ProResponsive - Professional & Responsive Web Design',
  description: 'Building modern, accessible, and high-performing websites.',
};

export default function Home() {
  return (
    // The relative z-10 is now handled in layout.tsx for better structure
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-4 pb-8 md:pt-8 md:pb-16"> {/* Add padding top/bottom to main */}
        <HeroSection />
        <ServicesSection />
        <ValuePropositionSection />
        <VisionGoalSection />
        <ProjectsSection />
        <TestimonialsSection />
        <TeamSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  );
}
```