"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

const homeNavItems = [
  { label: "Home", href: "/" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang", href: "#tentang" },
  { label: "Mengapa", href: "#mengapa" },
];

const legalNavItems = [
  { label: "Home", href: "/" },
  { label: "Syarat dan Ketentuan", href: "/syarat-dan-ketentuan" },
  { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeHash, setActiveHash] = React.useState<string | null>(null);
  const pathname = usePathname();

  const isLegalPage =
    pathname === "/syarat-dan-ketentuan" || pathname === "/kebijakan-privasi";

  const navItems = isLegalPage ? legalNavItems : homeNavItems;

  const isActive = (href: string) => {
    if (href.startsWith("#")) return activeHash === href;
    if (href === "/") return pathname === "/" && activeHash === null;
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center -ml-10">
          <Image
            src="/logo.svg"
            alt="SimpleBayar Logo"
            width={360}
            height={360}
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() =>
                setActiveHash(item.href.startsWith("#") ? item.href : null)
              }
              className={cn(
                "transition-colors hover:text-foreground cursor-pointer",
                isActive(item.href)
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

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
                onClick={() => {
                  setActiveHash(item.href.startsWith("#") ? item.href : null);
                  setIsOpen(false);
                }}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground cursor-pointer",
                  isActive(item.href)
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground",
                )}
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
