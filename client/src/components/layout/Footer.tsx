import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link href="/">
              <a className="font-serif font-bold text-xl tracking-tight text-foreground">
                Strategic Growth<span className="text-primary">.</span>
              </a>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Decision intelligence and growth strategy for scaling companies.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex flex-col gap-3">
              <span className="font-medium text-sm text-foreground">Navigate</span>
              <Link href="/approach"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">Approach</a></Link>
              <Link href="/services"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a></Link>
              <Link href="/case-library"><a className="text-sm text-muted-foreground hover:text-primary transition-colors">Cases</a></Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="font-medium text-sm text-foreground">Connect</span>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="mailto:hello@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">Email</a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Strategic Growth Consulting. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
