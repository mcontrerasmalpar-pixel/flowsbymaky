const steps = [
  {
    num: "01",
    title: "Discovery call",
    desc: "We map your current workflow, identify bottlenecks and define the scope together.",
  },
  {
    num: "02",
    title: "System design",
    desc: "Full automation blueprint: tools, triggers, logic and integrations — all documented.",
  },
  {
    num: "03",
    title: "Build & test",
    desc: "Iterative development with real-world testing. You stay informed at every step.",
  },
  {
    num: "04",
    title: "Deploy + support",
    desc: "We go live. Full documentation delivered + post-launch support included.",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "0 2.5rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "10px",
        letterSpacing: "3px",
        color: "var(--cyan)",
        opacity: 0.7,
        marginBottom: "0.75rem",
      }}>// PROCESS</div>

      <h2 style={{
        fontSize: "1.8rem",
        fontWeight: 300,
        marginBottom: "3rem",
        color: "var(--text)",
      }}>From idea to production in days</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
      }}>
        {steps.map((s) => (
          <div key={s.num}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "2.5rem",
              color: "var(--border)",
              fontWeight: 700,
              lineHeight: 1,
              marginBottom: "1rem",
            }}>{s.num}</div>
            <h4 style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: "0.5rem",
            }}>{s.title}</h4>
            <p style={{
              fontSize: "13px",
              color: "var(--muted)",
              lineHeight: 1.6,
            }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
