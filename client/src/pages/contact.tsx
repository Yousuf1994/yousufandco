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
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  service: z.string({
    required_error: "Please select an interest",
  }),
  budget: z.string().optional(),
  message: z.string().min(10, "Please tell me a bit about your situation"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      message: "",
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
                 <h3 className="font-bold mb-2">Not ready to apply?</h3>
                 <p className="text-muted-foreground mb-4 text-sm">You can email me directly or connect on LinkedIn.</p>
                 <div className="flex flex-col gap-3">
                   <a href="mailto:hello@example.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
                     <Mail size={18} /> hello@strategicgrowth.com
                   </a>
                   <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium">
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
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
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
                            <FormLabel>Work Email</FormLabel>
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
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website</FormLabel>
                            <FormControl>
                              <Input placeholder="https://..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What are you interested in?</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="diagnostic">Growth Diagnostic (30 Days)</SelectItem>
                              <SelectItem value="setup">Measurement Setup</SelectItem>
                              <SelectItem value="advisory">Monthly Advisory</SelectItem>
                              <SelectItem value="other">Other / Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                     <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range (Monthly)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                              <SelectItem value="10k-20k">$10k - $20k</SelectItem>
                              <SelectItem value="20k+">$20k+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What's the biggest challenge you're facing right now?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="e.g. We have traffic but conversion is dropping..." 
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
