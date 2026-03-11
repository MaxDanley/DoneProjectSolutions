import { ReactNode } from "react";

interface EngagementCardProps {
  /** Card heading (e.g. "Due Diligence Engagement") */
  title: string;
  /** Body content - can be string or React node */
  children: ReactNode;
  className?: string;
}

const EngagementCard = ({ title, children, className = "" }: EngagementCardProps) => {
  return (
    <div
      className={className}
      style={{
        padding: "40px 40px 36px",
        background: "transparent",
        color: "#2e2c2a",
      }}
    >
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(24px, 2.5vw, 30px)",
          fontWeight: 700,
          marginBottom: 24,
          lineHeight: 1.25,
          color: "#2e2c2a",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: "#2e2c2a",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default EngagementCard;
