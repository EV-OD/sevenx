import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="w-full py-8 bg-primary text-primary-foreground">
      <div className="container px-6 md:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} ProResponsive. All rights reserved.</p>
        </div>
        <nav className="flex space-x-6">
          <Link href="#privacy" className="text-sm hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#terms" className="text-sm hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Link href="#" passHref legacyBehavior>
             <a target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
             </a>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Link>
          <Link href="#" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
