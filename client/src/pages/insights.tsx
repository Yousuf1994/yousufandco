import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { posts } from "@/lib/data";

export default function Insights() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="pt-32 pb-16 container mx-auto px-6">
        <Badge variant="outline" className="mb-6">Insights</Badge>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
          Notes on Growth Systems
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Thoughts on measurement, decision making, and the psychology of scaling.
        </p>
      </section>

      <section className="pb-24 container mx-auto px-6 max-w-3xl">
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.id} className="group border-b border-border pb-12 last:border-0">
               <div className="flex items-baseline gap-4 mb-3">
                 <span className="text-sm font-mono text-muted-foreground">{post.date}</span>
               </div>
               <Link href="/insights">
                 <a className="block">
                   <h2 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                   <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
                 </a>
               </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
