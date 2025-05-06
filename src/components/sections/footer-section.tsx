import Link from 'next/link';
import { Twitter, Linkedin, Github, BriefcaseBusiness, Instagram, Facebook, Mail } from 'lucide-react'; // Added BriefcaseBusiness icon

export default function FooterSection() {
  return (
    <footer className="w-full py-10 bg-primary text-primary-foreground border-t-4 border-primary/30"> {/* Increased padding, added top border */}
      {/* Increased horizontal padding px-8 -> px-10, md:px-12 -> md:px-14, lg:px-16 -> lg:px-20 */}
      <div className="container px-10 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start space-y-3">
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary transition-transform duration-300 ease-in-out hover:scale-105 mr-auto">
                    <img src="/favicon-dark.png" alt="SevenX Logo" className="h-[50px] w-auto" /> 
                    <p className="text-xl font-bold text-white">SevenX Innovations Pvt. Ltd.</p>       
        </Link>
                <p className="text-sm text-primary-foreground/80">&copy; {new Date().getFullYear()} SevenX Innovations Pvt. Ltd. All rights reserved.</p>
            </div>

             {/* Navigation Links */}
             <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-sm"> 
               {/* <Link href="#services" className="hover:underline underline-offset-4 transition-opacity hover:opacity-90">
                 Services
               </Link>
               <Link href="#projects" className="hover:underline underline-offset-4 transition-opacity hover:opacity-90">
                 Projects
               </Link>
                <Link href="#about" className="hover:underline underline-offset-4 transition-opacity hover:opacity-90">
                 About
               </Link>
               <Link href="#contact" className="hover:underline underline-offset-4 transition-opacity hover:opacity-90">
                 Contact
               </Link>
                 <Link href="#privacy" className="hover:underline underline-offset-4 transition-opacity hover:opacity-90">
                   Privacy Policy
                 </Link>
                 <Link href="#terms" className="hover:underline underline-offset-4 transition-opacity hover:opacity-90">
                   Terms of Service
                 </Link> */}
             </nav>

             {/* Social Media Links */}
             <div className="flex justify-center md:justify-end space-x-5"> {/* Increased spacing */}
                 <Link href="https://www.instagram.com/sevenx.innovations/" passHref legacyBehavior>
                 <a target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-transform transform hover:scale-110"> {/* Added transform */}
                   <Instagram className="h-6 w-6" /> {/* Increased icon size */}
                   <span className="sr-only">Instagram</span>
                 </a>
                 </Link>
                 <Link href="https://www.facebook.com/share/16SZ6wo6dq/" passHref legacyBehavior>
                 <a target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-transform transform hover:scale-110"> {/* Added transform */}
                   <Facebook className="h-6 w-6" /> {/* Increased icon size */}
                   <span className="sr-only">Facebook</span>
                 </a>
                 </Link>
                 <Link href="mailto:contact@sevenx.com.np" passHref legacyBehavior>
                 <a target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-transform transform hover:scale-110"> {/* Added transform */}
                   <Mail className="h-6 w-6" /> {/* Increased icon size */}
                   <span className="sr-only">Mail</span>
                 </a>
                 </Link>
             </div>
        </div>
      </div>
    </footer>
  );
}
