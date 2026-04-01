import { useState, useEffect, FormEvent } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Check, BarChart2, TrendingUp, Target, Layers, ArrowUpRight, Play } from "lucide-react";
import { Link } from "wouter";
import { services, frameworkSteps, caseStudies, faqs } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleHomeFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const values = {
      fullName: formData.get("fullName") as string || "",
      email: formData.get("email") as string || "",
      phone: formData.get("phone") as string || "",
      companyName: formData.get("companyName") as string || "",
      teamSize: formData.get("teamSize") as string || "",
      revenue: formData.get("revenue") as string || "",
      challenge: formData.get("challenge") as string || ""
    };

    try {
      const portalId = "148109148";
      const formId = "0979f7c7-197c-4fd2-a45b-bc4e00bbf88e";
      const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

      const nameParts = values.fullName.trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ");

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            { name: "email", value: values.email },
            { name: "firstname", value: firstName },
            { name: "lastname", value: lastName },
            { name: "phone", value: values.phone },
            { name: "company", value: values.companyName },
            { name: "numemployees", value: values.teamSize },
            { name: "annualrevenue", value: values.revenue },
            { name: "message", value: values.challenge },
          ],
          context: {
            pageUri: window.location.href,
            pageName: "Home Page",
          },
        }),
      });

      if (response.ok) {
        toast({
          title: "Request Received",
          description: "Thanks for reaching out. I'll review your details and get back to you within 48 hours.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem sending your request. Please email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* 
        NEW HERO: Dan Lok inspired "Consultant Authority" style.
        - Dark/Bold background
        - Focus on the Person (Placeholder)
        - Strong Promise
      */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#0f172a] text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/95 to-[#0f172a]/80 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Authority Copy */}
            <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-700 fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-medium tracking-wide uppercase text-white/80">Accepting New Clients</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight">
                  <span className={`transition-colors duration-700 ease-in-out ${isScrolled ? 'text-white/20' : 'text-white'}`}>Stop the Waste in</span> <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Your Budget.</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg border-l-2 border-red-500 pl-6">
                  I help growth-stage brands identify 'Invisible Leaks' in their data, optimize tech stacks, and automate revenue growth through AI-driven orchestration. Stop paying for 'Ghost Leads' and start scaling with precision.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="h-14 px-8 text-base bg-white text-[#0f172a] hover:bg-white/90 font-bold tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105" asChild>
                  <Link href="/contact"><span className="cursor-pointer">Consult for Diagnostic</span></Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10 hover:text-white transition-all flex items-center gap-2 group" asChild>
                  <Link href="/case-library">
                    <span className="flex items-center gap-2 cursor-pointer">
                      <Play size={16} className="fill-current" /> See Results
                    </span>
                  </Link>
                </Button>
              </div>

              <div className="pt-8 flex items-center gap-4 text-sm text-white/40 font-medium">
                <span>Worked with,</span>
                <div className="h-px bg-white/10 flex-1" />
              </div>
              <div className="flex flex-wrap gap-8 opacity-50 grayscale mix-blend-screen items-center">
                 <div className="text-xl font-serif font-bold tracking-widest">WWF</div>
                 <div className="text-xl font-sans font-black tracking-tighter">TikTok</div>
                 <div className="text-xl font-mono font-bold tracking-tight">INFINITI</div>
                 <div className="text-xl font-serif italic font-bold">Motive</div>
              </div>
            </div>
            
            {/* Right: The "Guru" Shot */}
            <div className="relative hidden lg:block h-[600px] animate-in slide-in-from-right-5 duration-1000 fade-in delay-200">
               {/* This represents the "Consultant Photo" typical of Dan Lok style sites */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-20" />
               <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  {/* The Consultant Photo */}
                  <img 
                    src="/images/hero-profile.png" 
                    alt="Consultant Portrait" 
                    className="w-full h-full object-cover object-top"
                  />
                  
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* B) "Who I Help" - Refined for "Consultant" Vibe */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">The Ideal Client</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">I don't work with everyone.</h3>
            <p className="text-muted-foreground mt-4 text-lg">My systems are designed for companies at a specific inflection point.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "The Scaling Founder", 
                desc: "You've hit / crossed $1M ARR, but 'what got you here won't get you there.' You need systems, not hustle.",
                icon: "🚀"
              },
              { 
                title: "The Frustrated CMO", 
                desc: "You have budget, but no confidence in where to deploy it. Your CAC is rising and you don't know why.",
                icon: "📉"
              },
              { 
                title: "The Product Leader", 
                desc: "Great product, sticky users, but you can't figure out how to feed the top of the funnel predictably.",
                icon: "⚡"
              },
            ].map((item, i) => (
              <div key={i} className="bg-secondary/20 p-8 rounded-xl border border-border hover:border-primary/50 transition-colors group">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                <h3 className="font-serif font-bold text-xl mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C) The Problem Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">Is Your Data Costing You More <br/><span className="italic text-muted-foreground">Than It's Making You?</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most companies suffer from a 'Translation Gap.' Marketing, Tech, and Sales are speaking different languages, leaving your ROI in a black box. I bridge that gap.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                { title: "Attribution Blindness:", desc: "Your dashboard says it's working, but your sales aren't moving." },
                { title: "Tech Stack Bloat:", desc: "You're paying for enterprise tools (CDPs/CRMs) that aren't talking to each other." },
                { title: "Inefficient Spend:", desc: "You are likely paying for leads you would have captured organically." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="font-medium text-foreground"><strong className="font-bold">{item.title}</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Button variant="link" className="text-primary p-0 h-auto font-bold text-lg" asChild>
                <Link href="/case-library"><span className="flex items-center cursor-pointer">Read my case studies <ArrowRight size={18} className="ml-2" /></span></Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {[
              { from: "Siloed data", to: "Unified revenue truth" },
              { from: "Bloated tech stack", to: "Lean, integrated systems" },
              { from: "Guesswork ROI", to: "Predictable scale" }
            ].map((item, i) => (
              <Card key={i} className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex justify-between items-center">
                  <div className="text-muted-foreground line-through text-sm">{item.from}</div>
                  <div className="flex items-center gap-4">
                    <ArrowRight className="text-primary/50 h-4 w-4" />
                    <div className="text-lg font-bold text-foreground">{item.to}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* D) Services */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">How we work together</h2>
               <p className="text-white/60">Three ways to engage. No hourly billing. No ambiguous scope.</p>
            </div>
            <Link href="/services"><span className="text-white font-medium hover:underline decoration-1 underline-offset-4 hidden md:block cursor-pointer">View detailed services</span></Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.id} className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded text-xs font-mono mb-4 text-white/80">{service.timeline}</span>
                  <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-red-400 transition-colors">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.deliverables.slice(0, 3).map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <Check size={14} className="mt-1 text-red-500 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-white text-[#0f172a] hover:bg-white/90" asChild>
                  <Link href="/contact"><span className="cursor-pointer">Schedule a call</span></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E) 5-Step Framework */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8 sticky top-32 self-start">
            <Badge variant="outline" className="border-primary text-primary">The Proprietary Process</Badge>
            <h2 className="text-4xl font-serif font-bold leading-tight">The Growth Systems <br/>Leak Audit</h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to identifying where you're losing value. We don't guess; we deconstruct your entire engine.
            </p>
            
            <div className="bg-secondary/30 p-6 rounded-lg border border-border">
              <h4 className="font-semibold mb-4">What I need from you:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Analytics access (GA4, Mixpanel, etc.)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Ad accounts (Read-only)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> CRM exports (Anonymized)</li>
              </ul>
            </div>
            
             <Button variant="outline" asChild>
                <Link href="/approach"><span className="cursor-pointer">View detailed approach</span></Link>
             </Button>
          </div>
          
          <div className="relative border-l-2 border-primary/20 pl-8 md:pl-12 space-y-12 py-4">
            {frameworkSteps.map((step, i) => (
              <div key={i} className="relative group">
                <span className="absolute -left-[43px] md:-left-[59px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all text-xs font-mono font-bold text-muted-foreground z-10">
                  {step.number}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F) Case Library Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold">Proven Impact at Scale.</h2>
            <Link href="/case-library"><span className="text-primary font-medium hover:underline decoration-1 underline-offset-4 cursor-pointer">View all cases</span></Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Link key={study.id} href={`/case-library`}>
                <span className="group block bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant="outline">{study.category}</Badge>
                    <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-serif group-hover:text-primary transition-colors">{study.title}</h3>
                  <div className="p-4 bg-secondary/50 rounded-lg border border-border/50">
                    <p className="text-sm font-medium text-foreground">{study.result}</p>
                  </div>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* G) FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-medium text-lg py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed whitespace-pre-wrap">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* H) Final CTA - Dan Lok Style (Bold) */}
      <section className="py-32 bg-[#0f172a] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full scale-150 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">Ready to find your 'Invisible Leaks'?</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Stop paying for 'Ghost Leads' and start scaling with precision. Let's find your invisible leaks.
          </p>
          
          <div className="max-w-3xl mx-auto bg-[#1e293b] border border-white/20 p-8 rounded-2xl shadow-2xl">
             <form onSubmit={handleHomeFormSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <Label htmlFor="name" className="text-white font-medium">Full Name</Label>
                      <Input id="name" name="fullName" required placeholder="John Doe" className="bg-[#0f172a] border-white/20 text-white placeholder:text-white/40 focus:border-red-500 focus:ring-red-500" />
                   </div>
                   <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@company.com" className="bg-[#0f172a] border-white/20 text-white placeholder:text-white/40 focus:border-red-500 focus:ring-red-500" />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <Label htmlFor="contact" className="text-white font-medium">Contact Number</Label>
                      <Input id="contact" name="phone" required placeholder="+1 (555) 000-0000" className="bg-[#0f172a] border-white/20 text-white placeholder:text-white/40 focus:border-red-500 focus:ring-red-500" />
                   </div>
                   <div className="space-y-2">
                      <Label htmlFor="company" className="text-white font-medium">Company Name</Label>
                      <Input id="company" name="companyName" required placeholder="Acme Inc." className="bg-[#0f172a] border-white/20 text-white placeholder:text-white/40 focus:border-red-500 focus:ring-red-500" />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <Label htmlFor="size" className="text-white font-medium">Team Size</Label>
                      <Select name="teamSize" required>
                        <SelectTrigger className="bg-[#0f172a] border-white/20 text-white focus:ring-red-500">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1e293b] border-white/20 text-white">
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                          <SelectItem value="200+">200+</SelectItem>
                        </SelectContent>
                      </Select>
                   </div>
                   <div className="space-y-2">
                      <Label htmlFor="revenue" className="text-white font-medium">Annual Revenue</Label>
                      <Select name="revenue" required>
                        <SelectTrigger className="bg-[#0f172a] border-white/20 text-white focus:ring-red-500">
                          <SelectValue placeholder="Select revenue" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1e293b] border-white/20 text-white">
                          <SelectItem value="<1M">&lt; $1M</SelectItem>
                          <SelectItem value="1M-5M">$1M - $5M</SelectItem>
                          <SelectItem value="5M-20M">$5M - $20M</SelectItem>
                          <SelectItem value="20M+">$20M+</SelectItem>
                        </SelectContent>
                      </Select>
                   </div>
                </div>

                <div className="space-y-2">
                   <Label htmlFor="challenge" className="text-white font-medium">What is your biggest challenge?</Label>
                   <Textarea id="challenge" name="challenge" required placeholder="Tell me about your bottlenecks..." className="bg-[#0f172a] border-white/20 text-white placeholder:text-white/40 min-h-[100px] focus:border-red-500 focus:ring-red-500" />
                </div>

                <Button type="submit" disabled={isSubmitting} size="lg" className="w-full h-12 text-lg font-bold bg-red-600 hover:bg-red-700 shadow-xl shadow-red-900/20 text-white">
                    {isSubmitting ? "Sending..." : "Book a 15-Minute Diagnostic Call"}
                </Button>
             </form>
             <p className="text-xs text-center text-white/60 mt-4">No spam. Unsubscribe anytime.</p>
          </div>

          <p className="text-sm text-white/40 mt-12 italic">Limited spots available for this quarter.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
