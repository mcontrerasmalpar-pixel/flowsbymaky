const stats = [
  { num: "3x", label: "faster delivery" },
  { num: "80%", label: "less manual work" },
  { num: "24/7", label: "active workflows" },
  { num: "∞", label: "scalability" },
];

export default function Stats() {
  return (
    <div style={{
      display: "flex",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      margin: "0 2.5rem",
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          flex: 1,
          padding: "2rem",
          borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "2rem",
            color: "var(--cyan)",
            fontWeight: 700,
            marginBottom: "0.3rem",
          }}>{s.num}</div>
          <div style={{
            fontSize: "12px",
            color: "var(--muted)",
            letterSpacing: "1px",
          }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
