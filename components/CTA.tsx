"use client";

const platforms = ["FIVERR", "UPWORK", "ETSY", "GUMROAD", "FLOWSBYMAKY.LAT"];

export default function CTA() {
  return (
    <div style={{
      margin: "0 2.5rem 5rem",
      border: "1px solid var(--border)",
      padding: "4rem 3rem",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      background: "var(--bg2)",
    }}>
      <div style={{
        position: "absolute",
        top: "-60px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "300px",
        height: "120px",
        background: "radial-gradient(ellipse, rgba(0,245,212,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <h2 style={{
        fontSize: "2rem",
        fontWeight: 300,
        marginBottom: "1rem",
        color: "var(--text)",
      }}>
        Ready to{" "}
        <strong style={{ color: "var(--cyan)", fontWeight: 600 }}>automate</strong>{" "}
        your business?
      </h2>

      <p style={{
        color: "var(--muted)",
        marginBottom: "2rem",
        fontSize: "1rem",
      }}>
        Tell me your problem and I&apos;ll tell you if I can solve it. First call is free.
      </p>

      <a
        href="mailto:hello@flowsbymaky.lat"
        style={{
          display: "inline-block",
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
          transition: "background 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "var(--cyan-dim)")}
        onMouseLeave={e => (e.currentTarget.style.background = "var(--cyan)")}
      >
        book a free call →
      </a>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
        marginTop: "2.5rem",
      }}>
        {platforms.map((p) => (
          <div key={p} style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            padding: "6px 16px",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "var(--muted)",
            letterSpacing: "1px",
          }}>{p}</div>
        ))}
      </div>
    </div>
  );
}
