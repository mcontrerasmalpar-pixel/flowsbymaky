"use client";
import { useState } from "react";

const services = [
  {
    title: "AI-powered workflows",
    description: "End-to-end automations with n8n, Make and AI agents. Connect any tool — no code required on your end.",
    tags: ["n8n", "make", "claude api"],
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#00f5d4" fill="none" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "Data pipelines",
    description: "Automated ETL, web scraping, Python processing and real-time dashboards that actually make sense.",
    tags: ["python", "pandas", "sql"],
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#00f5d4" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: "AI agents & chatbots",
    description: "Custom LLM-powered assistants for customer support, internal ops or sales — trained on your business.",
    tags: ["llm", "rag", "api"],
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#00f5d4" fill="none" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: "E-commerce automation",
    description: "Inventory, orders, email flows and reporting — automated. Shopify, WooCommerce and Amazon ready.",
    tags: ["shopify", "zapier", "email"],
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="#00f5d4" fill="none" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" style={{ padding: "5rem 2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "10px",
        letterSpacing: "3px",
        color: "var(--cyan)",
        opacity: 0.7,
        marginBottom: "0.75rem",
      }}>// SERVICES</div>

      <h2 style={{
        fontSize: "1.8rem",
        fontWeight: 300,
        marginBottom: "3rem",
        color: "var(--text)",
      }}>What I build for you</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1px",
        background: "var(--border)",
        border: "1px solid var(--border)",
      }}>
        {services.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? "var(--bg3)" : "var(--bg2)",
              padding: "2rem",
              transition: "background 0.2s",
              cursor: "default",
            }}
          >
            <div style={{
              width: "36px",
              height: "36px",
              border: "1px solid var(--cyan-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.25rem",
            }}>
              {s.icon}
            </div>

            <h3 style={{
              fontSize: "1rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
              color: "var(--text)",
            }}>{s.title}</h3>

            <p style={{
              fontSize: "13px",
              color: "var(--muted)",
              lineHeight: 1.6,
              marginBottom: "1rem",
            }}>{s.description}</p>

            <div>
              {s.tags.map((tag) => (
                <span key={tag} style={{
                  display: "inline-block",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "10px",
                  padding: "3px 10px",
                  border: "1px solid var(--cyan-dark)",
                  color: "var(--cyan-dim)",
                  letterSpacing: "1px",
                  margin: "2px",
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
