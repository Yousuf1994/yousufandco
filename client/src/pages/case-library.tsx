import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Lightbulb } from "lucide-react";
import { caseStudies } from "@/lib/data";

export default function CaseLibrary() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="pt-32 pb-16 container mx-auto px-6">
        <Badge variant="outline" className="mb-6">Case Library</Badge>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
          Proven Impact.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A selection of challenges I've diagnosed and solved, focusing on metric-driven results and sustainable growth.
        </p>
      </section>

      <section className="pb-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="h-full hover:border-primary/50 transition-colors duration-300 flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                   <Badge variant="secondary">{study.category}</Badge>
                </div>
                <CardTitle className="font-serif text-2xl mb-2">{study.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col gap-6">
                 {/* Highlight Metric Result First */}
                 <div className="bg-primary/5 p-5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <TrendingUp size={18} />
                      <span className="font-bold uppercase tracking-wider text-sm">The Result</span>
                    </div>
                    <p className="font-medium text-foreground text-lg">{study.result}</p>
                 </div>

                 <div className="space-y-4">
                   <div>
                     <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                       <Target size={16} />
                       <span className="font-bold uppercase tracking-wider text-xs">The Challenge</span>
                     </div>
                     <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                   </div>
                   
                   <div>
                     <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                       <Lightbulb size={16} />
                       <span className="font-bold uppercase tracking-wider text-xs">The Solution</span>
                     </div>
                     <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                   </div>
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
