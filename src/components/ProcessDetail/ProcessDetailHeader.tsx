interface ProcessDetailHeaderProps {
  title: string;
  className?: string;
}

const ProcessDetailHeader = ({ title, className = "" }: ProcessDetailHeaderProps) => {
  return (
    <header
      className={className}
      style={{
        padding: "64px 0 0",
        background: "transparent",
      }}
    >
      <div
        className="process-detail-header-inner"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingLeft: 60,
          paddingRight: 60,
          paddingBottom: 40,
          borderBottom: "1px solid rgba(78,125,140,0.14)",
        }}
      >
        <p
          style={{
            fontSize: 9,
            letterSpacing: 3,
            textTransform: "uppercase" as const,
            color: "#4e7d8c",
            marginBottom: 20,
          }}
        >
          Phase
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 3.5vw, 48px)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "#2e2c2a",
          }}
        >
          {title}
        </h2>
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
