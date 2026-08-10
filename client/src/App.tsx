import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Approach from "@/pages/approach";
import Services from "@/pages/services";
import Work from "@/pages/work";
import Contact from "@/pages/contact";
import AskMe from "@/pages/askme";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/approach" component={Approach} />
      <Route path="/services" component={Services} />
      <Route path="/work" component={Work} />
      <Route path="/case-library" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/askme" component={AskMe} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <FloatingCTA />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
