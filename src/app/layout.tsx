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
  description: 'Building modern, accessible, and high-performing solutions.',
  keywords: ['SevenX', 'Innovations', 'Web Development', 'App Development', 'SaaS', 'Tech Company'],
  authors: [{ name: 'SevenX Innovations Pvt. Ltd.', url: 'https://sevenx.com.np' }],
  metadataBase: new URL('https://sevenx.com.np'),
  openGraph: {
    title: 'SevenX Innovations Pvt. Ltd.',
    description: 'We build modern, accessible, and high-performing digital solutions.',
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
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'SevenX Innovations Pvt. Ltd.',
  //   description: 'We build modern, accessible, and high-performing digital solutions.',
  //   creator: '@sevenx', // change this to your Twitter handle
  //   images: ['/og-image.png'],
  // },
  icons: {
    icon: '/512.ico',
    shortcut: '/512.ico',
    apple: '/512.png',
  },
  manifest: '/site.webmanifest',
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
