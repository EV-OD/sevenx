"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          ProResponsive
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" className="text-xl font-bold text-primary" onClick={closeSheet}>
                  ProResponsive
                </Link>
                <Button variant="ghost" size="icon" onClick={closeSheet}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close Menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-4 p-4 flex-grow">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    onClick={closeSheet}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
