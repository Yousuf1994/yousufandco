import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { caseStudies, products } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Work() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded(prev => prev === id ? null : id);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 container mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">WORK</span>
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-foreground leading-tight">
            Case studies and products.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real problems diagnosed and solved. Real products built. No deck-only engagements.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8 block">CASE STUDIES</span>

          <div className="space-y-3">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="border border-border rounded-lg overflow-hidden bg-card transition-all duration-200"
              >
                {/* Collapsed header */}
                <button
                  onClick={() => toggle(study.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-6 hover:bg-secondary/30 transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                      {study.tag}
                    </span>
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{study.oneLiner}</p>
                  </div>
                  <div className="text-muted-foreground shrink-0 mt-1">
                    {expanded === study.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Expanded content */}
                {expanded === study.id && (
                  <div className="px-6 pb-8 border-t border-border">
                    <div className="pt-6 prose prose-invert max-w-none">
                      {study.expanded.split('\n\n').map((para, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">PRODUCTS — BUILT WITH AI</span>
          <p className="text-muted-foreground mb-10 max-w-2xl text-[15px] leading-relaxed">
            I'm not just a strategist who talks about AI. I'm building with it. These are real products built using Claude Code and AI-assisted development — proof that the gap between idea and prototype is closing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card border border-border rounded-lg p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border",
                    product.status === "LIVE"
                      ? "text-primary border-primary/30 bg-primary/10"
                      : "text-amber-400 border-amber-400/30 bg-amber-400/10"
                  )}>
                    {product.status}
                  </span>
                </div>

                <h3 className="text-base font-medium text-foreground mb-1">{product.title}</h3>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-4">
                  Built with: {product.builtWith}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  {product.description}
                </p>

                {product.ctaHref.startsWith('/') ? (
                  <Link href={product.ctaHref}>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer">
                      {product.cta} <ExternalLink size={14} />
                    </span>
                  </Link>
                ) : (
                  <a
                    href={product.ctaHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {product.cta} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-medium mb-4">Have a problem worth diagnosing?</h2>
          <p className="text-muted-foreground mb-8">
            Start with a 30-minute call. No pitch. Just a real conversation.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="https://calendly.com/yousuf-workspace/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
              Book a 30-min call
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
