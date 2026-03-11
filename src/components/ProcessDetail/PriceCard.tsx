interface PriceCardProps {
  /** Main amount display (e.g. "$XX,000") */
  amount: string;
  /** Supporting note below the amount (single string) */
  note?: string;
  /** Or multiple lines for the note (each item on its own line) */
  noteLines?: string[];
  className?: string;
}

const PriceCard = ({ amount, note, noteLines, className = "" }: PriceCardProps) => {
  const lines = noteLines ?? (note ? [note] : []);
  return (
    <div
      className={className}
      style={{
        padding: "32px 36px",
        background: "#2a4d56",
        color: "#e6e2d8",
      }}
    >
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 4vw, 48px)",
          fontWeight: 600,
          lineHeight: 1,
          marginBottom: 14,
          color: "#e6e2d8",
        }}
      >
        {amount}
      </p>
      <div style={{ fontSize: 12, lineHeight: 1.7, color: "rgba(230,226,216,0.8)" }}>
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
