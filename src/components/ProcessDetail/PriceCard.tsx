interface PriceCardProps {
  amount: string;
  note?: string;
  noteLines?: string[];
  className?: string;
}

const PriceCard = ({ amount, note, noteLines, className = "" }: PriceCardProps) => {
  const lines = noteLines ?? (note ? [note] : []);
  return (
    <div
      className={className}
      style={{
        padding: "36px 40px",
        background: "#e6e2d8",
        borderLeft: "3px solid #4e7d8c",
        transition: "background 0.25s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#faf8f5")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#e6e2d8")}
    >
      <p
        style={{
          fontSize: 9,
          letterSpacing: 3,
          textTransform: "uppercase" as const,
          color: "#4e7d8c",
          marginBottom: 12,
        }}
      >
        Engagement Fee
      </p>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 4vw, 48px)",
          fontWeight: 300,
          lineHeight: 1,
          marginBottom: 14,
          color: "#2e2c2a",
        }}
      >
        {amount}
      </p>
      <div style={{ fontSize: 12, lineHeight: 1.7, color: "#7a7570" }}>
        {lines.map((line, i) => (
          <p key={i} style={{ margin: 0, marginBottom: i < lines.length - 1 ? 4 : 0 }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
