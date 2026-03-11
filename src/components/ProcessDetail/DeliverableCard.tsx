interface DeliverableCardProps {
  /** Card title (e.g. "Feasibility & Market Studies") */
  title: string;
  /** Description or scope text */
  description: string;
  className?: string;
}

const BAR_WIDTH = 12;
const BAR_COLOR = "#2a4d56";

const DeliverableCard = ({ title, description, className = "" }: DeliverableCardProps) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        minHeight: 56,
        background: "#f0ede6",
        borderBottom: "1px solid rgba(46,44,42,0.12)",
        marginBottom: 14,
      }}
    >
      <div
        style={{
          width: BAR_WIDTH,
          minWidth: BAR_WIDTH,
          flexShrink: 0,
          background: BAR_COLOR,
        }}
      />
      <div
        style={{
          flex: 1,
          padding: "14px 20px",
          color: "#2e2c2a",
        }}
      >
        <h4
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 4,
            lineHeight: 1.25,
            color: "#2e2c2a",
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.5,
            color: "#7a7570",
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default DeliverableCard;
