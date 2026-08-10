import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { frameworkSteps } from "@/lib/data";

export default function Approach() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 container mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6 block">MY APPROACH</span>
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-foreground leading-tight">
            I diagnose before I prescribe. Always.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most consultants come in with a solution. I come in with questions. The methodology below is how I work — whether I'm embedded as a fractional PM or doing a standalone diagnostic.
          </p>
        </div>
      </section>

      {/* 5-Step Framework */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left sticky */}
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <h2 className="text-2xl font-medium text-foreground">The five-step methodology</h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                Every engagement — regardless of scope — follows this process. Steps may overlap or run in parallel, but they're never skipped.
              </p>
              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="text-sm font-medium mb-4 text-foreground">Typical inputs needed:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Analytics platforms (GA4, Mixpanel, Amplitude)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Ad accounts (Meta, Google, LinkedIn — read-only)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    CRM exports (HubSpot/Salesforce — anonymized)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Stakeholder interviews (1–3 people)
                  </li>
                </ul>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="https://calendly.com/yousuf-workspace/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                  Book a call
                </a>
              </Button>
            </div>

            {/* Right: steps */}
            <div className="relative border-l border-border pl-10 space-y-12 py-2">
              {frameworkSteps.map((step, i) => (
                <div key={i} className="relative group">
                  <span className="absolute -left-[43px] top-1 flex items-center justify-center w-7 h-7 rounded-full bg-background border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all text-xs font-mono font-medium text-muted-foreground group-hover:text-primary z-10">
                    {step.number}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-xl">
          <h2 className="text-2xl font-medium mb-4">Ready to start with a diagnostic?</h2>
          <p className="text-muted-foreground mb-8">
            A 2–3 week fixed-scope engagement to map your AI readiness and identify your highest-ROI opportunities.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" size="lg" asChild>
            <Link href="/contact"><span className="cursor-pointer">Get in touch</span></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
