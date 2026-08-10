import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Send, ExternalLink } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}


export default function AskMe() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey — I'm Yousuf's digital clone. What brings you here today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate a brief thinking delay, then show a holding response
    setTimeout(() => {
      setIsLoading(false);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Great question — the full AI version of me is being set up and will be live shortly. In the meantime, the best way to get a real answer is to book a 30-minute call or email me directly at yousufmukhtar05@gmail.com. I respond within 48 hours."
      }]);
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <section className="pt-32 pb-16 container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">ASK ME</span>
            <h1 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
              I'm not always available. This version of me is.
            </h1>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xl mx-auto">
              This is my AI clone — trained on my background, experience, working style, and honest limitations. Ask it about my work, my approach, or whether I might be the right fit for what you're building. When the conversation goes deep, it'll point you to a real call.
            </p>
          </div>

          {/* Chat window */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {/* Messages */}
            <div className="h-[480px] overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary shrink-0 mr-3 mt-1">
                      Y
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-xl px-4 py-3 text-[14px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-secondary text-foreground rounded-tl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary shrink-0 mr-3 mt-1">
                    Y
                  </div>
                  <div className="bg-secondary rounded-xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1 items-center h-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-4">
              <form onSubmit={sendMessage} className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask anything about my work, background, or services..."
                  className="flex-1 bg-secondary border border-border rounded-lg px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={isLoading || !input.trim()}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4"
                >
                  <Send size={16} />
                </Button>
              </form>
            </div>
          </div>

          {/* CTA below chat */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground text-sm mb-4">Prefer to skip straight to a conversation?</p>
            <Button variant="outline" className="border-border hover:border-primary hover:text-primary" asChild>
              <a href="https://calendly.com/yousuf-workspace/30-minute-discovery-call" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Book a 30-min call <ExternalLink size={14} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
