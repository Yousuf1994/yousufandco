interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const nameColor = variant === "dark" ? "#f0f0f0" : "#0f1117";
  const subColor = variant === "dark" ? "#9ca3af" : "#6b7280";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Teal vertical bar */}
      <div style={{ width: "3px", height: "36px", backgroundColor: "#1d9e75", borderRadius: "1px", flexShrink: 0 }} />

      {/* Wordmark */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "15px",
            letterSpacing: "4px",
            color: nameColor,
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          YOUSUF
        </span>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "13px",
            letterSpacing: "8px",
            color: subColor,
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          MUKHTAR
        </span>
      </div>
    </div>
  );
}
