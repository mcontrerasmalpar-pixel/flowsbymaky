export default function Hero() {
  return (
    <section style={{ padding: "6rem 2.5rem 5rem", maxWidth: "900px", margin: "0 auto" }}>
      <div className="animate-fade-up-1" style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "11px",
        letterSpacing: "3px",
        color: "var(--cyan)",
        opacity: 0.8,
        marginBottom: "1.5rem",
      }}>
        // AI AUTOMATION AGENCY
      </div>

      <h1 className="animate-fade-up-1" style={{
        fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
        fontWeight: 300,
        lineHeight: 1.15,
        marginBottom: "1.5rem",
        color: "var(--text)",
      }}>
        Smart automations for<br />
        businesses ready to<br />
        <em style={{ fontStyle: "normal", color: "var(--cyan)", fontWeight: 600 }}>
          scale without limits
        </em>
      </h1>

      <p className="animate-fade-up-2" style={{
        fontSize: "1.1rem",
        color: "var(--muted)",
        maxWidth: "560px",
        lineHeight: 1.7,
        marginBottom: "2.5rem",
      }}>
        I build AI-powered workflows, data pipelines and intelligent agents that eliminate
        repetitive work, connect your tools and give you real time back.
        Built from anywhere. Delivered worldwide.
      </p>

      <div className="animate-fade-up-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a href="#services" style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "13px",
          padding: "14px 32px",
          background: "var(--cyan)",
          color: "var(--bg)",
          border: "none",
          cursor: "pointer",
          letterSpacing: "1px",
          fontWeight: 700,
          textDecoration: "none",
          display: "inline-block",
          transition: "background 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--cyan-dim)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--cyan)")}
        >
          explore services
        </a>
        <a href="#process" style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "13px",
          padding: "14px 32px",
          background: "transparent",
          color: "var(--muted)",
          border: "1px solid rgba(255,255,255,0.15)",
          cursor: "pointer",
          letterSpacing: "1px",
          textDecoration: "none",
          display: "inline-block",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "var(--cyan)";
            e.currentTarget.style.color = "var(--cyan)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.color = "var(--muted)";
          }}
        >
          how it works
        </a>
      </div>
    </section>
  );
}
