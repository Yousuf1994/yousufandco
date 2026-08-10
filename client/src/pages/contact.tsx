import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Contact number is required"),
  companyName: z.string().min(1, "Company name is required"),
  teamSize: z.string({ required_error: "Please select team size" }),
  revenue: z.string({ required_error: "Please select annual revenue" }),
  challenge: z.string().min(10, "Please tell me a bit about your challenge"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      teamSize: "",
      revenue: "",
      challenge: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
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
            pageName: "Contact Page",
          },
        }),
      });

      if (response.ok) {
        toast({
          title: "Request Received",
          description: "Thanks for reaching out. I'll review your details and get back to you within 48 hours.",
        });
        form.reset();
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

      <section className="pt-32 pb-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6 block">CONTACT</span>
            <h1 className="text-4xl md:text-5xl font-medium mb-6 text-foreground leading-tight">
              Let's go deep on a real problem.
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-10">
              Whether you're hiring, exploring a fractional engagement, or want to pressure-test an AI idea — start with a 30-minute call. No pitch. Just a real conversation.
            </p>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mb-10 flex items-center gap-2" size="lg" asChild>
              <a href="https://calendly.com/yousuf-workspace/30-minute-discovery-call" target="_blank" rel="noopener noreferrer">
                Book a discovery call <ExternalLink size={16} />
              </a>
            </Button>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-medium mb-2 text-foreground">Direct contact</h3>
              <p className="text-sm text-muted-foreground mb-5">Or reach out directly — I respond within 48 hours.</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:yousufmukhtar05@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} /> yousufmukhtar05@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/yousuf-mukhtar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={16} /> linkedin.com/in/yousuf-mukhtar
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="bg-secondary border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@company.com" className="bg-secondary border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-foreground">Contact Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+971 50 000 0000" className="bg-secondary border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-foreground">Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." className="bg-secondary border-border" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-foreground">Team Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-secondary border-border">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="1-10">1–10</SelectItem>
                            <SelectItem value="11-50">11–50</SelectItem>
                            <SelectItem value="51-200">51–200</SelectItem>
                            <SelectItem value="200+">200+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="revenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-foreground">Annual Revenue</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-secondary border-border">
                              <SelectValue placeholder="Select revenue" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="<1M">&lt; $1M</SelectItem>
                            <SelectItem value="1M-5M">$1M – $5M</SelectItem>
                            <SelectItem value="5M-20M">$5M – $20M</SelectItem>
                            <SelectItem value="20M+">$20M+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="challenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-foreground">What are you trying to solve?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the problem you're working on..."
                          className="min-h-[110px] bg-secondary border-border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  {isSubmitting ? "Sending..." : "Start the conversation"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
