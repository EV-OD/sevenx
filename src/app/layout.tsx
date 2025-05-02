import type {Metadata, Viewport} from 'next';
import { Geist } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google'; // Import Space Grotesk
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import DynamicCursor from '@/components/layout/dynamic-cursor'; // Import DynamicCursor

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
  title: 'ProResponsive',
  description: 'A professional and responsive website built with Next.js',
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
        <Toaster />
      </body>
    </html>
  );
}
