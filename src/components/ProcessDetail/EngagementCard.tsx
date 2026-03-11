import { ReactNode } from "react";

interface EngagementCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const EngagementCard = ({ title, children, className = "" }: EngagementCardProps) => {
  return (
    <div
      className={className}
      style={{
        padding: "36px 40px 32px",
        background: "transparent",
        color: "#2e2c2a",
      }}
    >
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(24px, 2.5vw, 30px)",
          fontWeight: 300,
          marginBottom: 20,
          lineHeight: 1.25,
          color: "#2e2c2a",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "#7a7570",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default EngagementCard;
