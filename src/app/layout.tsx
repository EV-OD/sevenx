import type {Metadata, Viewport} from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
// Removed import for FloatingElements as it's no longer global

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// No Geist Mono used directly, removing for brevity if not needed elsewhere
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

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
      {/* Removed relative positioning as global floating elements are now scoped to HeroSection */}
      <body className={`${geistSans.variable} antialiased`}>
        {/* Content remains directly inside the body */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
