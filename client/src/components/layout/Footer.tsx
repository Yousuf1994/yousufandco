import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left */}
          <div>
            <Logo variant="dark" className="mb-1" />
            <p className="text-sm text-muted-foreground mt-2">Forward Deployed AI Product Manager · Dubai, UAE</p>
          </div>

          {/* Center nav */}
          <div className="flex flex-wrap gap-6">
            {[
              { href: "/", label: "About" },
              { href: "/work", label: "Work" },
              { href: "/services", label: "Services" },
              { href: "/askme", label: "Ask Me" },
              { href: "/contact", label: "Contact" },
            ].map(link => (
              <Link key={link.href} href={link.href}>
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right */}
          <a
            href="https://www.linkedin.com/in/yousuf-mukhtar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2026 Yousuf Mukhtar. Built with Claude.
          </p>
        </div>
      </div>
    </footer>
  );
}
