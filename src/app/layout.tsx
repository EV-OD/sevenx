import type {Metadata, Viewport} from 'next';
import { Geist } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google'; // Import Space Grotesk
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import DynamicCursor from '@/components/layout/dynamic-cursor'; // Import DynamicCursor
import FaviconSwitcher from '@/components/faviconSwitcher';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Initialize Space Grotesk
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Include desired weights
});


export const metadata: Metadata = {
  title: 'SevenX Innovations Pvt. Ltd.',
  description: 'SevenX Innovations specializes in building modern, accessible, and high-performing digital solutions. We deliver cutting-edge web and app development services tailored to your needs.',
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
  openGraph: {
    title: 'SevenX Innovations Pvt. Ltd.',
    description: 'SevenX Innovations delivers user-centric design, innovative projects, and IT services. From concept to completion, we guide every phase to create modern, accessible, and high-performing solutions tailored to your needs.',
    url: 'https://sevenx.com.np',
    siteName: 'SevenX Innovations',
    images: [
      {
        url: '/og-image.png', // make sure this image exists in your public/ folder
        width: 1200,
        height: 630,
        alt: 'SevenX Innovations Pvt. Ltd.',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SevenX Innovations Pvt. Ltd.',
    description: 'We build modern, accessible, and high-performing digital solutions.',
    creator: '@SevenXInnovations',
    site: '@SevenXInnovations',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png', // Optional, use a 180x180 PNG
  },
  manifest: '/site.webmanifest'
};


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <>
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="canonical" href="https://www.sevenx.com.np/" />
    </>
      {/* Apply both font variables to the body */}
      <body className={`${geistSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
      {/*<DynamicCursor />  Add the dynamic cursor component */}
        {children}
        <FaviconSwitcher/>
        <Toaster />
      </body>
    </html>
  );
}
