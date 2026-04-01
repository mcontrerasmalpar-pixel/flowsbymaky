export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2rem 2.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "12px",
        color: "var(--cyan)",
        letterSpacing: "2px",
      }}>
        FLOWSBYMAKY.LAT
      </div>
      <div style={{
        fontSize: "12px",
        color: "var(--muted)",
        letterSpacing: "1px",
      }}>
        computer vision · nlp · automation · worldwide
      </div>
    </footer>
  );
}
