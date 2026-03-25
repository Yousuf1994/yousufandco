import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin } from "lucide-react";

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Received",
      description: "Thanks for reaching out. I'll review your details and get back to you within 48 hours.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="pt-32 pb-12 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
              Let's diagnose your growth engine.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              I take on a limited number of engagements per quarter to ensure deep focus. 
              Fill out the form to see if we're a fit.
            </p>
            
            <div className="space-y-8">
               <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                 <h3 className="font-bold mb-2">Want to reach out?</h3>
                 <p className="text-muted-foreground mb-4 text-sm">You can email me directly or connect on LinkedIn.</p>
                 <div className="flex flex-col gap-3">
                   <a href="mailto:yousuf.workspace@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
                     <Mail size={18} /> yousuf.workspace@gmail.com
                   </a>
                   <a href="https://www.linkedin.com/in/yousuf-mukhtar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
                     <Linkedin size={18} /> LinkedIn Profile
                   </a>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Right: Form */}
          <div>
            <Card className="shadow-lg border-border">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="jane@company.com" {...field} />
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
                            <FormLabel>Contact Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 000-0000" {...field} />
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
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Inc." {...field} />
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
                            <FormLabel>Team Size</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-10">1-10</SelectItem>
                                <SelectItem value="11-50">11-50</SelectItem>
                                <SelectItem value="51-200">51-200</SelectItem>
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
                            <FormLabel>Annual Revenue</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select revenue" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="<1M">&lt; $1M</SelectItem>
                                <SelectItem value="1M-5M">$1M - $5M</SelectItem>
                                <SelectItem value="5M-20M">$5M - $20M</SelectItem>
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
                          <FormLabel>What is your biggest challenge?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your current bottleneck..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full h-12">Schedule a call</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
