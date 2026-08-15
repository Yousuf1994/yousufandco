import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Send, ExternalLink } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
  showBooking?: boolean;
}

const BOOKING_TOKEN = "[SHOW_BOOKING_CTA]";
const BOOKING_URL = "https://calendly.com/yousuf-workspace/30-minute-discovery-call";


export default function AskMe() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey — I'm Yousuf's digital clone. What brings you here today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isLoading]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    const nextMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      const rawText = data.content?.[0]?.text ?? "";
      const showBooking = rawText.includes(BOOKING_TOKEN);
      const content = rawText.replace(BOOKING_TOKEN, "").trim();

      setMessages(prev => [...prev, { role: "assistant", content, showBooking }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Something went wrong on my end. Please try again, or email me directly at yousufmukhtar05@gmail.com."
      }]);
    } finally {
      setIsLoading(false);
    }
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
          <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-[600px] min-h-[600px]">
            {/* Messages */}
            <div ref={chatContainerRef} className="flex-1 min-h-0 overflow-y-auto p-6 space-y-4">
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
                  <div className="max-w-[80%] flex flex-col items-start gap-2">
                    <div
                      className={`rounded-xl px-4 py-3 text-[14px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-sm"
                          : "bg-secondary text-foreground rounded-tl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.showBooking && (
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        asChild
                      >
                        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Book a 30-min call <ExternalLink size={14} />
                        </a>
                      </Button>
                    )}
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
            </div>

            {/* Input */}
            <div className="border-t border-border p-4 shrink-0">
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
