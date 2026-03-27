import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { services } from "@/lib/data";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 container mx-auto px-6 text-center">
        <Badge variant="outline" className="mb-6">Services</Badge>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
          Structured engagements for scaling teams.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Whether you need a one-time audit or ongoing leadership, my engagements are designed to deliver clarity and outcomes.
        </p>
      </section>

      {/* Service Blocks */}
      <section className="py-12 container mx-auto px-6 space-y-24">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className={cn(
            "flex flex-col gap-12 items-center",
            index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          )}>
            <div className="flex-1 space-y-6">
              <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-medium">
                {service.timeline}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">{service.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
              
              <div className="space-y-4 pt-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Deliverables</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="mt-0.5 text-primary shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <div className="bg-secondary/30 p-4 rounded-lg border border-border mb-6">
                  <p className="text-sm">
                    <span className="font-bold">Best for:</span> {service.idealFor}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                   <div className="text-lg font-bold">
                     {service.id === "diagnostic" && "From $5,000"}
                     {service.id === "setup" && "Custom Quote"}
                     {service.id === "advisory" && "From $3,000/mo"}
                   </div>
                   <Button asChild size="lg">
                     <Link href="/contact"><span className="cursor-pointer">Schedule a call</span></Link>
                   </Button>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="aspect-square md:aspect-video bg-gradient-to-br from-secondary to-muted rounded-2xl border border-border p-8 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                 {/* Abstract visual for each service */}
                 {service.id === "diagnostic" && (
                    <div className="w-3/4 h-3/4 border-2 border-dashed border-primary/30 rounded-full flex items-center justify-center animate-spin-slow">
                        <div className="w-1/2 h-1/2 bg-primary/10 rounded-full backdrop-blur-sm" />
                    </div>
                 )}
                 {service.id === "setup" && (
                    <div className="grid grid-cols-2 gap-4 w-2/3">
                        <div className="h-20 bg-primary/20 rounded-lg animate-pulse" />
                        <div className="h-20 bg-primary/10 rounded-lg" />
                        <div className="h-20 bg-primary/10 rounded-lg" />
                        <div className="h-20 bg-primary/30 rounded-lg animate-pulse delay-75" />
                    </div>
                 )}
                 {service.id === "advisory" && (
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/20" />
                        <div className="h-1 w-24 bg-border" />
                        <div className="w-16 h-16 rounded-full bg-primary/20" />
                    </div>
                 )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Decision Tree */}
      <section className="py-24 bg-secondary/30 border-t border-border mt-12">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">Not sure which is right?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="font-bold mb-2">"I don't know what's broken."</h3>
              <p className="text-sm text-muted-foreground mb-4">Traffic is fine but revenue is flat. We need an outside perspective.</p>
              <div className="text-primary font-medium text-sm flex items-center gap-1">
                 <ArrowRight size={14} /> Diagnostic
              </div>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="font-bold mb-2">"I don't trust my data."</h3>
              <p className="text-sm text-muted-foreground mb-4">We have tools but no insights. Everyone reports different numbers.</p>
              <div className="text-primary font-medium text-sm flex items-center gap-1">
                 <ArrowRight size={14} /> Intelligence Setup
              </div>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="font-bold mb-2">"I need ongoing guidance."</h3>
              <p className="text-sm text-muted-foreground mb-4">I need a partner to help me lead the growth function and hire the team.</p>
              <div className="text-primary font-medium text-sm flex items-center gap-1">
                 <ArrowRight size={14} /> Advisory
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
