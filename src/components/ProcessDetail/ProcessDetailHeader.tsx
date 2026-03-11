interface ProcessDetailHeaderProps {
  /** Section title (e.g. "DUE DILIGENCE") */
  title: string;
  /** Optional class name for the root element */
  className?: string;
}

const ProcessDetailHeader = ({ title, className = "" }: ProcessDetailHeaderProps) => {
  return (
    <header
      className={className}
      style={{
        padding: "12px 0 16px",
        background: "transparent",
        color: "#2e2c2a",
      }}
    >
      <div
        className="process-detail-header-inner"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingLeft: 60,
          paddingRight: 60,
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase" as const,
          }}
        >
          {title}
        </span>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .process-detail-header-inner {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default ProcessDetailHeader;
