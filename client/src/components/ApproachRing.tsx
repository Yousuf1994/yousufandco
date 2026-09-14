import { useEffect, useState } from "react";

interface Step {
  number: string;
  label: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    label: "ABSORB",
    title: "Absorb the essentials",
    description:
      "I start by understanding the business, not the brief. What makes money here? What's the operating reality? Who makes decisions and how? Before I have an opinion, I want context.",
  },
  {
    number: "02",
    label: "ASK",
    title: "Ask the fundamental questions",
    description:
      "The ones nobody asked because everyone assumed. What's actually broken? What have you already tried? What does success look like in numbers, not adjectives? Often the problem people describe isn't the problem they have.",
  },
  {
    number: "03",
    label: "MAP",
    title: "Map what exists",
    description:
      "Your systems, your data, your team, your constraints. What you have determines what's possible. A solution that ignores reality isn't a solution — it's a slide.",
  },
  {
    number: "04",
    label: "DIAGNOSE",
    title: "Find the real problem",
    description:
      "Strip away the fancy words. Usually the root cause is simpler than the symptoms suggest — and once you see it clearly, the fix is faster, cheaper, and more obvious than anyone expected.",
  },
  {
    number: "05",
    label: "DESIGN",
    title: "Design the path",
    description:
      "Not a strategy deck. A sequence. What gets built first, what it depends on, who does what, and how we know it worked.",
  },
  {
    number: "06",
    label: "DEPLOY",
    title: "Stay until it's deployed",
    description:
      "I don't hand over a recommendation and disappear. I stay in the room — coordinating engineering, agencies, and leadership until the thing is live, adopted, and measurable.",
  },
];

function useIsMobile(breakpoint: number) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}

export function ApproachRing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile(900);

  const svgSize = isMobile ? 400 : 520;
  const center = svgSize / 2;
  const radius = isMobile ? 140 : 182;
  const hexWidth = isMobile ? 82 : 100;
  const hexHeight = isMobile ? 82 * 1.14 : 114;

  const active = STEPS[activeIndex];

  return (
    <>
      <style>{`
        .approach-ring-flex {
          display: flex;
          align-items: center;
          gap: 64px;
        }
        @media (max-width: 900px) {
          .approach-ring-flex {
            flex-direction: column;
            gap: 40px;
          }
        }

        .approach-ring-container {
          position: relative;
          flex-shrink: 0;
        }

        .approach-ring-svg text {
          user-select: none;
        }

        @keyframes approach-ring-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .approach-ring-circle {
          animation: approach-ring-rotate 26s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .approach-ring-circle {
            animation: none;
          }
        }

        .approach-hex {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
        }
        .approach-hex svg {
          display: block;
          overflow: visible;
        }
        .approach-hex polygon {
          fill: #141820;
          stroke: #1f2937;
          stroke-width: 1.5;
          transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .approach-hex .hex-number {
          font-size: 17px;
          font-weight: 700;
          fill: #4b5563;
          transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
        }
        .approach-hex .hex-label {
          font-size: 7.5px;
          font-weight: 600;
          fill: #374151;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
        }

        .approach-hex:hover polygon,
        .approach-hex.active polygon,
        .approach-hex:focus-visible polygon {
          fill: rgba(29, 158, 117, 0.1);
          stroke: #1d9e75;
          stroke-width: 2;
          filter: drop-shadow(0 6px 24px rgba(29, 158, 117, 0.28));
        }
        .approach-hex:hover .hex-number,
        .approach-hex.active .hex-number,
        .approach-hex:focus-visible .hex-number {
          fill: #5dcaa5;
        }
        .approach-hex:hover .hex-label,
        .approach-hex.active .hex-label,
        .approach-hex:focus-visible .hex-label {
          fill: #1d9e75;
        }
        .approach-hex:focus-visible {
          outline: none;
        }

        .approach-panel {
          max-width: 340px;
          padding-left: 44px;
          border-left: 1px solid #1f2937;
        }
        @media (max-width: 900px) {
          .approach-panel {
            padding-left: 0;
            border-left: none;
            text-align: center;
            margin: 0 auto;
          }
        }

        .approach-step-number {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #1d9e75;
          margin-bottom: 10px;
        }
        .approach-step-title {
          font-size: 20px;
          font-weight: 600;
          color: hsl(0 0% 94%);
          margin-bottom: 14px;
        }
        .approach-step-desc {
          color: #9ca3af;
          font-size: 13.5px;
          line-height: 1.75;
        }
      `}</style>

      <div className="approach-ring-flex">
        <div
          className="approach-ring-container"
          style={{ width: svgSize, height: svgSize }}
        >
          <svg
            className="approach-ring-svg"
            viewBox={`0 0 ${svgSize} ${svgSize}`}
            width="100%"
            height="100%"
          >
            <circle
              className="approach-ring-circle"
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="#24303f"
              strokeWidth={1}
              strokeDasharray="4 9"
              strokeLinecap="round"
              style={{ transformOrigin: `${center}px ${center}px` }}
            />
            <text
              x={center}
              y={center - 6}
              textAnchor="middle"
              style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, fill: "#2d3748" }}
            >
              MY
            </text>
            <text
              x={center}
              y={center + 10}
              textAnchor="middle"
              style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, fill: "#2d3748" }}
            >
              METHOD
            </text>
          </svg>

          {STEPS.map((step, i) => {
            const angle = ((-90 + i * 60) * Math.PI) / 180;
            const left = 50 + 35 * Math.cos(angle);
            const top = 50 + 35 * Math.sin(angle);

            return (
              <div
                key={step.number}
                role="button"
                tabIndex={0}
                aria-pressed={i === activeIndex}
                className={`approach-hex${i === activeIndex ? " active" : ""}`}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: hexWidth,
                  height: hexHeight,
                }}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(i);
                  }
                }}
              >
                <svg viewBox="0 0 100 114" width="100%" height="100%">
                  <polygon points="50,2 95,30 95,84 50,112 5,84 5,30" />
                  <text x="50" y="52" textAnchor="middle" className="hex-number">
                    {step.number}
                  </text>
                  <text x="50" y="70" textAnchor="middle" className="hex-label">
                    {step.label}
                  </text>
                </svg>
              </div>
            );
          })}
        </div>

        <div className="approach-panel">
          <div className="approach-step-number">{active.number}</div>
          <h3 className="approach-step-title">{active.title}</h3>
          <p className="approach-step-desc">{active.description}</p>
        </div>
      </div>
    </>
  );
}
