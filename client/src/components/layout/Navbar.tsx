import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/askme", label: "Ask Me" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Logo variant="dark" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            size="sm"
            className="ml-4 font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="https://calendly.com/yousuf-workspace/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="https://calendly.com/yousuf-workspace/30-minute-discovery-call" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  Book a call
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
