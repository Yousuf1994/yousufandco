import { useLocation, Link } from "wouter";

export function FloatingCTA() {
  const [location] = useLocation();

  // Hide on the Ask Me page
  if (location === "/askme") return null;

  return (
    <Link href="/askme">
      <span
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 100,
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "#1d9e75",
          color: "#ffffff",
          padding: "12px 22px",
          borderRadius: "999px",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "0.01em",
          cursor: "pointer",
          boxShadow: "0 4px 24px rgba(29, 158, 117, 0.35), 0 2px 8px rgba(0,0,0,0.3)",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
        className="hover:scale-105 active:scale-95"
        onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 32px rgba(29, 158, 117, 0.5), 0 2px 8px rgba(0,0,0,0.3)")}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 24px rgba(29, 158, 117, 0.35), 0 2px 8px rgba(0,0,0,0.3)")}
      >
        Talk to Yousuf <span style={{ fontSize: "13px" }}>✦</span>
      </span>
    </Link>
  );
}
