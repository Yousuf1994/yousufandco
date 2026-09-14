import type { IconType } from "react-icons";
import { SiClaudecode, SiSupabase, SiVercel, SiGithub, SiJira, SiReplit, SiGoogleanalytics } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaSalesforce, FaDatabase } from "react-icons/fa6";

interface Tool {
  name: string;
  Icon: IconType;
  color: string;
}

const TOOLS: Tool[] = [
  { name: "Claude Code", Icon: SiClaudecode, color: "#DA7756" },
  { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Salesforce", Icon: FaSalesforce, color: "#00A1E0" },
  { name: "Jira", Icon: SiJira, color: "#0052CC" },
  { name: "Replit", Icon: SiReplit, color: "#F26207" },
  { name: "SQL", Icon: FaDatabase, color: "#4479A1" },
  { name: "GA4", Icon: SiGoogleanalytics, color: "#E37400" },
];

function ToolRow() {
  return (
    <div className="flex items-center shrink-0">
      {TOOLS.map((tool, i) => (
        <span key={i} className="flex items-center gap-2.5 px-8">
          <tool.Icon size={22} color={tool.color} />
          <span className="text-base font-semibold text-foreground whitespace-nowrap">
            {tool.name}
          </span>
        </span>
      ))}
    </div>
  );
}

export function ToolsTicker() {
  return (
    <div className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <span className="block text-center text-xs font-bold uppercase tracking-widest text-muted-foreground/70 mb-6">
          I build using
        </span>
      </div>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-ticker-scroll group-hover:[animation-play-state:paused]">
          <ToolRow />
          <ToolRow />
        </div>
      </div>
    </div>
  );
}
