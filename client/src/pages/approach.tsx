import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, FileText, Map, ListTodo } from "lucide-react";
import { Link } from "wouter";

export default function Approach() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-6">The Methodology</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Diagnosis before prescription.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Most growth problems aren't traffic problems—they're system problems. 
            My 4-step framework identifies the bottleneck so we don't waste time optimizing the wrong thing.
          </p>
        </div>
      </section>

      {/* Week-by-Week Timeline */}
      <section className="py-20 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-12">The 30-Day Diagnostic Sprint</h2>
          
          <div className="space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-border before:-translate-x-1/2">
            {[
              { week: "Week 1", title: "Data Audit & Funnel Map", desc: "We gain access, audit tracking integrity, and build a source-of-truth funnel map." },
              { week: "Week 2", title: "Qualitative Deep Dive", desc: "Customer interviews, session replay analysis, and survey reviews to understand the 'why' behind the drop-offs." },
              { week: "Week 3", title: "Channel & Unit Economics", desc: "Analyzing CAC/LTV by channel to see where you're actually making money vs. just acquiring users." },
              { week: "Week 4", title: "Synthesis & Roadmap", desc: "Compiling findings into a prioritized execution plan with projected impact estimates." }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                <div className={`md:w-1/2 flex ${i % 2 !== 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div className="bg-background border border-border p-6 rounded-xl shadow-sm max-w-md w-full relative z-10">
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-2 block">{item.week}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-20" />
                
                <div className="md:w-1/2 hidden md:block" /> 
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">Deliverables You'll Actually Use</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-secondary/10 border-border">
            <CardContent className="p-8 space-y-4">
              <div className="p-3 bg-primary/10 w-fit rounded-lg text-primary"><FileText /></div>
              <h3 className="text-xl font-bold">Executive Brief</h3>
              <p className="text-muted-foreground">A 5-page narrative summary for leadership and board members, highlighting key risks and opportunities.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/10 border-border">
            <CardContent className="p-8 space-y-4">
              <div className="p-3 bg-primary/10 w-fit rounded-lg text-primary"><Map /></div>
              <h3 className="text-xl font-bold">Strategic Roadmap</h3>
              <p className="text-muted-foreground">A 90-day plan broken down by sprint, with clear owners and success metrics for each initiative.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/10 border-border">
            <CardContent className="p-8 space-y-4">
              <div className="p-3 bg-primary/10 w-fit rounded-lg text-primary"><ListTodo /></div>
              <h3 className="text-xl font-bold">Experiment Backlog</h3>
              <p className="text-muted-foreground">A prioritized list of 10-15 specific experiments to run, scored by ICE (Impact, Confidence, Ease).</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to stop guessing?</h2>
          <Button size="lg" variant="secondary" className="h-12 px-8" asChild>
            <Link href="/contact">Consult for Diagnostic</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
