import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, Filter } from "lucide-react";
import { Link } from "wouter";
import { caseStudies } from "@/lib/data";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CaseLibrary() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Ecommerce", "SaaS / Lead Gen", "Mobile App"];
  
  const filteredCases = filter === "All" 
    ? caseStudies 
    : caseStudies.filter(c => c.category === filter);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="pt-32 pb-16 container mx-auto px-6">
        <Badge variant="outline" className="mb-6">Case Library</Badge>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
          Sample Analyses
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Detailed breakdowns of how I diagnose and solve growth problems. 
          <span className="block mt-2 text-sm italic opacity-70">* Note: These are anonymized samples based on real engagements.</span>
        </p>
      </section>

      <section className="pb-24 container mx-auto px-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 items-center">
          <Filter size={16} className="mr-2 text-muted-foreground" />
          {categories.map(cat => (
            <Button 
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((study) => (
            <Link key={study.id} href={`/case-library`}>
              <a className="group block h-full">
                <Card className="h-full hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                       <Badge variant="secondary">{study.category}</Badge>
                       {study.isSample && <span className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-0.5 rounded">Sample</span>}
                    </div>
                    <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">{study.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className="bg-secondary/30 p-4 rounded border border-border">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Impact</span>
                        <p className="font-medium text-foreground">{study.metrics}</p>
                     </div>
                  </CardContent>
                  <CardFooter>
                    <span className="text-primary font-medium flex items-center gap-2 text-sm group-hover:translate-x-1 transition-transform">
                      Read full analysis <ArrowRight size={14} />
                    </span>
                  </CardFooter>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
