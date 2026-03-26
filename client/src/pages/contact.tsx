import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import { HubSpotForm } from "@/components/HubSpotForm";

export default function Contact() {
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
              <CardContent className="p-8" id="contact-form-container">
                <HubSpotForm 
                  region="eu1" 
                  portalId="148109148" 
                  formId="0979f7c7-197c-4fd2-a45b-bc4e00bbf88e" 
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
