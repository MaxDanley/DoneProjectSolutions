interface DeliverableCardProps {
  title: string;
  description: string;
  className?: string;
}

const DeliverableCard = ({ title, description, className = "" }: DeliverableCardProps) => {
  return (
    <div
      className={className}
      style={{
        padding: "18px 0",
        borderBottom: "1px solid rgba(78,125,140,0.14)",
        marginBottom: 0,
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
        transition: "background 0.2s",
      }}
    >
      <span
        style={{
          color: "#4e7d8c",
          fontSize: 14,
          flexShrink: 0,
          paddingTop: 2,
          lineHeight: 1.25,
        }}
      >
        —
      </span>
      <div style={{ flex: 1 }}>
        <h4
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 18,
            fontWeight: 400,
            marginBottom: description ? 4 : 0,
            lineHeight: 1.25,
            color: "#2e2c2a",
          }}
        >
          {title}
        </h4>
        {description && (
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.6,
              color: "#7a7570",
              margin: 0,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default DeliverableCard;
