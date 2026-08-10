import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 container mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6 block">SERVICES</span>
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-foreground leading-tight">
            Three ways to work together.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I work with companies that have a real AI or data problem — and the organizational will to fix it. I don't do generic workshops or slide decks without implementation.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-12 border-t border-border container mx-auto px-6 space-y-16">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary block">
                {service.timeline}
              </span>
              <h2 className="text-3xl font-medium text-foreground">{service.title}</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{service.description}</p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Deliverables</h3>
                <ul className="space-y-2">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                      <Check size={15} className="mt-0.5 text-primary shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <div className="bg-card border border-border p-4 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Best for:</span> {service.idealFor}
                  </p>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" size="lg" asChild>
                  <Link href="/contact"><span className="cursor-pointer">Get in touch</span></Link>
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="bg-card border border-border rounded-xl p-10 flex items-center justify-center min-h-[220px]">
              {service.id === "diagnostic" && (
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    {["Data", "Gaps", "ROI"].map((label, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-primary/50" />
                        </div>
                        <span className="text-xs text-muted-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-border" />
                  <div className="text-xs text-muted-foreground font-mono">→ Prioritized roadmap</div>
                </div>
              )}
              {service.id === "fractional" && (
                <div className="space-y-2 w-full max-w-xs">
                  {["Discovery", "Scoping", "Build", "Deploy", "Measure"].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-xs font-mono text-primary w-4">{String(i + 1).padStart(2, '0')}</div>
                      <div className={`flex-1 h-2 rounded-full ${i <= 2 ? 'bg-primary/40' : 'bg-border'}`} />
                      <div className="text-xs text-muted-foreground">{step}</div>
                    </div>
                  ))}
                </div>
              )}
              {service.id === "advisory" && (
                <div className="text-center space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold text-primary">YOU</div>
                    <div className="flex flex-col gap-1">
                      <div className="h-px w-16 bg-primary/30" />
                      <div className="h-px w-16 bg-primary/20" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">YM</div>
                  </div>
                  <div className="text-xs text-muted-foreground">Monthly strategy sessions</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Decision helper */}
      <section className="py-20 border-t border-border mt-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-medium mb-8 text-center">Not sure which is right?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { q: '"I don\'t know where to start with AI."', a: "AI Readiness Diagnostic" },
              { q: '"I have a use case but no one to drive it."', a: "Fractional AI PM" },
              { q: '"I need an outside perspective on decisions."', a: "Strategic Advisory" }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-4 italic">{item.q}</p>
                <p className="text-sm font-medium text-primary">→ {item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" size="lg" asChild>
              <a href="https://calendly.com/yousuf-workspace/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                Book a discovery call
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
