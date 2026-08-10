import { useState, FormEvent } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { services, faqs, products } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        headers: { "Content-Type": "application/json" },
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
    } catch {
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

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] font-bold tracking-widest uppercase text-primary">
                  Available for new roles &amp; engagements · Dubai, UAE
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-foreground">
                Most AI projects inside companies die between the idea and the build.
              </h1>

              {/* Subheadline */}
              <p className="text-[17px] text-muted-foreground leading-relaxed max-w-lg">
                I work in that gap. Not as a developer — but as a diagnostician. I identify where AI can move the needle, design the solution architecture, and drive it from concept to deployed product by connecting the right people, tools, and data.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8" asChild>
                  <Link href="/work"><span className="cursor-pointer">View my work</span></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:border-primary hover:text-primary h-12 px-8" asChild>
                  <Link href="/services"><span className="cursor-pointer">Work with me</span></Link>
                </Button>
              </div>

              {/* Logos */}
              <div className="pt-6">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Worked with</p>
                <div className="flex flex-wrap gap-8 items-center opacity-40">
                  <span className="text-base font-serif font-bold tracking-widest text-foreground">WWF</span>
                  <span className="text-base font-sans font-black tracking-tighter text-foreground">TikTok</span>
                  <span className="text-base font-mono font-bold tracking-tight text-foreground">INFINITI</span>
                  <span className="text-base font-serif italic font-bold text-foreground">Motive</span>
                </div>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="relative hidden lg:block h-[580px]">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <div className="h-full w-full rounded-2xl overflow-hidden border border-border">
                <img
                  src="/images/hero-profile.png"
                  alt="Yousuf Mukhtar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 border-t border-border" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6 block">ABOUT</span>
            <h2 className="text-3xl md:text-4xl font-medium mb-10 leading-tight">
              Some people are built to execute. I was built to understand.
            </h2>
            <div className="space-y-6 text-[15px] text-muted-foreground leading-[1.8]">
              <p>At 16, while most kids were memorizing formulas, I was losing sleep over the idea that gravity isn't a force — it's a bend in the fabric of spacetime. Einstein didn't just change physics. He changed how I thought about everything. That there is always a deeper truth underneath the obvious one. That the surface explanation is rarely the real one.</p>
              <p>I never became a physicist. But I never stopped being that kid.</p>
              <p>I grew up in Pakistan — a country of extraordinary talent and extraordinary challenge. Middle class family, no silver spoon, but an ambition that always outpaced my environment. I did a BBA at FAST-NUCES, one of Pakistan's top tech universities, and discovered something unexpected: I could take complex, tangled systems and make them legible to people who needed to act on them. That turned out to be more valuable than I knew.</p>
              <p>The career that followed was really one long search for the right arena for that skill. Sales taught me how decisions actually get made. Consulting taught me how to frame problems. TikTok taught me how platforms think — and one day, they relocated me to Dubai.</p>
              <p>Dubai rewired something in me. For the first time, working at a place like Google or Anthropic didn't feel like a fantasy. It felt like a direction worth moving toward.</p>
              <p>Today I work at INFINITI as a Digital Product Strategy & AI Manager — sitting between engineering, data, and executive leadership across the Middle East and GCC. My job is to go into complex organizations, find where AI and data can create real commercial value, and drive solutions from idea to deployed product. Not as a developer. As a diagnostician. Someone who refuses to propose a solution before truly understanding the problem.</p>
              <p>That's not a methodology. That's just how I'm wired.</p>
              <p>I'm not the loudest person in the room. I don't do small talk well. But if you want to go deep on a real problem — on what's actually broken, what's actually possible, and what it would actually take to fix it — I'll be the most engaged person you've ever worked with.</p>
              <p className="text-foreground/60">Outside of work I'm hiking up mountains, playing football and padel, reading, and going deep on philosophy, political science, and the big questions that don't have clean answers. The same curiosity. Different arenas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO I WORK WITH ── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">WHO THIS IS FOR</span>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight max-w-xl">
              I work with companies that have a real problem and the will to fix it.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "The Enterprise with an AI Mandate",
                desc: "You've been told to 'do AI' but nobody in the organization can bridge the gap between what IT can build and what the business actually needs. Projects keep getting approved and shelved.",
                accent: "primary"
              },
              {
                title: "The Scale-up with Data Debt",
                desc: "You have data everywhere — CRM, analytics, ad platforms — but it's fragmented, untrustworthy, and nobody uses the dashboards. You know there's value in there. You need someone to find it.",
                accent: "accent"
              },
              {
                title: "The Leader Who's Been Burned",
                desc: "You've hired agencies and consultants who delivered decks, not outcomes. You want someone who stays in the room until it's actually deployed and working.",
                accent: "destructive"
              }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-7">
                <div className={cn(
                  "w-1.5 h-8 rounded-full mb-5",
                  i === 0 ? "bg-primary" : i === 1 ? "bg-accent" : "bg-destructive"
                )} />
                <h3 className="font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">SERVICES</span>
              <h2 className="text-3xl md:text-4xl font-medium">Three ways to work together.</h2>
              <p className="text-muted-foreground mt-2">No hourly billing. No ambiguous scope.</p>
            </div>
            <Link href="/services">
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                View all services <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service) => (
              <div key={service.id} className="bg-card border border-border rounded-lg p-7 flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-4 block">
                  {service.timeline}
                </span>
                <h3 className="text-lg font-medium text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.deliverables.slice(0, 3).map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={13} className="mt-1 text-primary shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-border hover:border-primary hover:text-primary" asChild>
                  <Link href="/contact"><span className="cursor-pointer">Get in touch</span></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK PREVIEW ── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">RECENT WORK</span>
              <h2 className="text-3xl md:text-4xl font-medium">Deployed. Measurable. Real.</h2>
            </div>
            <Link href="/work">
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                View all work <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { tag: "AI Architecture · INFINITI MENA", title: "Warehouse-Native AI Marketing Architecture", result: "Warehouse-first approach — AI runs on clean, verified data across all channels" },
              { tag: "Data Product · INFINITI MENA", title: "From Spreadsheet to Real-Time Decision Infrastructure", result: "Manual Excel eliminated. Real-time data. CRM activations on live signals." },
              { tag: "Product Launch · GCC", title: "Zero-Budget App Launch — 27% Activation in Week One", result: "27% user activation in week one across GCC markets with zero paid media." }
            ].map((item, i) => (
              <Link href="/work" key={i}>
                <span className="group flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all cursor-pointer block">
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-1 block">{item.tag}</span>
                    <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.result}</p>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">PRODUCTS — BUILT WITH AI</span>
            <h2 className="text-3xl md:text-4xl font-medium mb-3">Not just a strategist. A builder.</h2>
            <p className="text-muted-foreground max-w-xl">
              Real products built using Claude Code and AI-assisted development — proof that the gap between idea and prototype is closing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((product) => (
              <div key={product.id} className="bg-card border border-border rounded-lg p-6 flex flex-col">
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
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-4">Built with: {product.builtWith}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5 line-clamp-4">{product.description}</p>
                {product.ctaHref.startsWith('/') ? (
                  <Link href={product.ctaHref}>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer">
                      {product.cta} <ExternalLink size={14} />
                    </span>
                  </Link>
                ) : (
                  <a href={product.ctaHref} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    {product.cta} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6 block">FAQ</span>
          <h2 className="text-3xl font-medium mb-10">Common questions.</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-medium text-base py-5 hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed whitespace-pre-wrap text-[15px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card border border-border rounded-xl p-10 md:p-14">
            <div className="max-w-xl mb-10">
              <h2 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
                Have a real problem worth diagnosing?
              </h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                Start with a 30-minute call. No pitch. Just a real conversation about what you're trying to solve and whether I can help.
              </p>
            </div>

            <form onSubmit={handleHomeFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <Input id="name" name="fullName" required placeholder="Jane Doe" className="bg-secondary border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="jane@company.com" className="bg-secondary border-border" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-sm font-medium">Contact Number</Label>
                  <Input id="contact" name="phone" required placeholder="+971 50 000 0000" className="bg-secondary border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">Company Name</Label>
                  <Input id="company" name="companyName" required placeholder="Acme Inc." className="bg-secondary border-border" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Team Size</Label>
                  <Select name="teamSize" required>
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="1-10">1–10</SelectItem>
                      <SelectItem value="11-50">11–50</SelectItem>
                      <SelectItem value="51-200">51–200</SelectItem>
                      <SelectItem value="200+">200+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Annual Revenue</Label>
                  <Select name="revenue" required>
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue placeholder="Select revenue" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="<1M">&lt; $1M</SelectItem>
                      <SelectItem value="1M-5M">$1M – $5M</SelectItem>
                      <SelectItem value="5M-20M">$5M – $20M</SelectItem>
                      <SelectItem value="20M+">$20M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge" className="text-sm font-medium">What are you trying to solve?</Label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  required
                  placeholder="Describe the problem..."
                  className="bg-secondary border-border min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                {isSubmitting ? "Sending..." : "Start the conversation"}
              </Button>
            </form>

            <p className="text-xs text-center text-muted-foreground mt-4">I respond within 48 hours.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
