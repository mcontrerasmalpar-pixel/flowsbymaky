"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem 2.5rem",
      borderBottom: "1px solid var(--border)",
      backdropFilter: "blur(8px)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(5, 12, 16, 0.85)",
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "15px",
        color: "var(--cyan)",
        letterSpacing: "2px",
      }}>
        FLOWS<span style={{ color: "var(--text)", opacity: 0.5 }}>bymaky</span>
      </div>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {["services", "process", "work"].map((item) => (
          <li key={item}>
            <a href={`#${item}`} style={{
              fontSize: "13px",
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "1px",
              fontFamily: "'Space Mono', monospace",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:hello@flowsbymaky.lat" style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "12px",
        padding: "8px 20px",
        border: "1px solid var(--cyan)",
        color: "var(--cyan)",
        background: "transparent",
        cursor: "pointer",
        letterSpacing: "1px",
        textDecoration: "none",
        transition: "all 0.2s",
        display: "inline-block",
      }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "var(--cyan)";
          e.currentTarget.style.color = "var(--bg)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--cyan)";
        }}
      >
        let&apos;s talk →
      </a>
    </nav>
  );
}
