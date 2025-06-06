"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, HomeIcon, BriefcaseBusiness, Info, FolderKanban, Users, Mail, WorkflowIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home", icon: HomeIcon },
  { label: "Services", href: "#services", icon: BriefcaseBusiness },
  { label: "Workflow", href: "#workflow", icon: WorkflowIcon },
  // { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Team", href: "#team", icon: Users },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/95 backdrop-blur shadow-md" : "bg-transparent border-transparent",
        "supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-6 md:px-8 lg:px-10">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary transition-transform duration-300 ease-in-out hover:scale-105 mr-auto">
                    <img src="/logos/icon.png" alt="SevenX Logo" className="h-[50px] w-auto" />          
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild className="group text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-200 ease-in-out px-3 py-2">
              <Link href={item.href} className="flex items-center gap-1.5">
                <item.icon className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:scale-110" />
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation Trigger - Moved to the right */}
        <div className="ml-4 md:hidden"> {/* Add margin for spacing on desktop if needed, hidden on md and up */}
         <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent transition-colors duration-200">
                <Menu className="h-6 w-6 text-foreground/80" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile Navigation Content */}
            <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
              {/* Added SheetHeader for Accessibility */}
              <div className="flex items-center justify-between p-4 border-b">
                <SheetTitle className="text-xl font-bold text-primary flex items-center gap-2">
                <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary transition-transform duration-300 ease-in-out hover:scale-105 mr-auto">
                    <img src="/logos/icon.png" alt="SevenX Logo" className="h-[50px] w-auto" />          
        </Link>
                </SheetTitle>
                 {/* Explicit Close Button */}
                <Button variant="ghost" size="icon" onClick={closeSheet} className="rounded-full hover:bg-accent transition-colors duration-200">
                  <X className="h-6 w-6 text-foreground/80" />
                  <span className="sr-only">Close Menu</span>
                </Button>
              </div>
              <SheetDescription className="sr-only">Mobile navigation menu for  SevenX Innovations</SheetDescription>

              <nav className="flex flex-col space-y-2 p-4 flex-grow mt-4">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      asChild
                      className="group justify-start text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-200 ease-in-out px-3 py-3"
                      onClick={closeSheet}
                    >
                      <Link href={item.href} className="flex items-center gap-3">
                         <item.icon className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:scale-110" />
                         <span>{item.label}</span>
                      </Link>
                    </Button>
                  ))}
                </nav>
                 <div className="border-t p-4">
                  <p className="text-sm text-muted-foreground text-center">&copy; {new Date().getFullYear()} SevenX</p>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
