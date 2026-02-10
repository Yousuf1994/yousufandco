import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useRoute } from "wouter";
import { caseStudies } from "@/lib/data";
import { ArrowLeft, CheckCircle2, Lightbulb, Map, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CaseDetail() {
  const [, params] = useRoute("/case-library/:id");
  const study = caseStudies.find((c) => c.id === params?.id);

  if (!study) {
    return (
      <div className="min-h-screen bg-background font-sans flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
        <Button asChild><Link href="/case-library">Back to Library</Link></Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="pt-32 pb-12 container mx-auto px-6 max-w-4xl">
        <Link href="/case-library">
          <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Library
          </a>
        </Link>
        
        <div className="space-y-6">
          <div className="flex gap-2">
            <Badge variant="outline">{study.category}</Badge>
            {study.isSample && <Badge variant="secondary" className="font-mono">Sample Analysis</Badge>}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
            {study.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
            {study.description}
          </p>
        </div>
      </section>

      <section className="pb-24 container mx-auto px-6 max-w-4xl space-y-16">
        
        {/* Metrics Block */}
        <Card className="bg-foreground text-background border-none">
          <CardContent className="p-8 flex items-center justify-between gap-4">
             <div>
               <h3 className="text-background/60 text-sm font-bold uppercase tracking-wider mb-2">Outcome</h3>
               <p className="text-xl md:text-2xl font-medium">{study.metrics}</p>
             </div>
             <Activity className="text-primary w-12 h-12 opacity-80" />
          </CardContent>
        </Card>

        {/* 1. Context */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold border-b border-border pb-4">01. The Context</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{study.context}</p>
          
          <div className="bg-secondary/30 rounded-xl p-6 border border-border">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Activity size={20} className="text-primary" /> Key Signals
            </h3>
            <ul className="space-y-3">
              {study.signals.map((signal, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 2. Hypotheses */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold border-b border-border pb-4">02. The Hypotheses</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
             {study.hypotheses.map((hyp, i) => (
               <Card key={i} className="bg-background border-border">
                 <CardContent className="p-6 flex gap-4">
                   <div className="bg-primary/10 text-primary p-2 rounded h-fit shrink-0 font-mono font-bold">{i + 1}</div>
                   <p className="text-muted-foreground">{hyp}</p>
                 </CardContent>
               </Card>
             ))}
          </div>
        </div>

        {/* 3. Test Plan */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold border-b border-border pb-4">03. What I'd Test</h2>
          <ul className="grid grid-cols-1 gap-4">
            {study.testPlan.map((plan, i) => (
              <li key={i} className="flex items-start gap-4 p-4 bg-secondary/10 rounded-lg border border-border/50">
                <Lightbulb className="text-primary shrink-0 mt-1" />
                <span className="text-foreground font-medium">{plan}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Roadmap */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold border-b border-border pb-4">04. Execution Roadmap</h2>
          <div className="relative border-l border-dashed border-border ml-3 md:ml-0 space-y-8 pl-8 md:pl-0">
            {study.roadmap.map((item, i) => (
              <div key={i} className="relative md:flex items-center gap-6">
                <div className="absolute -left-[39px] md:relative md:left-auto w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold z-10 shrink-0">
                  {i + 1}
                </div>
                <div className="bg-card border border-border p-4 rounded-lg shadow-sm w-full">
                  <p className="font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-12 border-t border-border text-center">
           <h3 className="text-2xl font-serif font-bold mb-6">Facing a similar challenge?</h3>
           <Button size="lg" asChild>
             <Link href="/contact">Let's Discuss It</Link>
           </Button>
        </div>

      </section>

      <Footer />
    </div>
  );
}
