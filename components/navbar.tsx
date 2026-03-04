"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang", href: "#tentang" },
  { label: "Mengapa", href: "#mengapa" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mt-2">
          <Image
            src="/logo.svg"
            alt="SimpleBayar Logo"
            width={360}
            height={360}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground text-muted-foreground cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden border-t overflow-hidden transition-all",
          isOpen ? "max-h-80" : "max-h-0",
        )}
      >
        <div className="container px-4 sm:px-6 lg:px-8 py-4 space-y-4 mx-auto">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
