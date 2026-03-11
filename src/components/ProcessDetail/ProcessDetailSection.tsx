import { ReactNode } from "react";
import ProcessDetailHeader from "./ProcessDetailHeader";
import EngagementCard from "./EngagementCard";
import PriceCard from "./PriceCard";
import DeliverableCard from "./DeliverableCard";

export interface DeliverableItem {
  title: string;
  description: string;
}

export interface DeliverableGroup {
  groupTitle: string;
  items: DeliverableItem[];
}

export interface ProcessDetailSectionProps {
  /** Title for the dark header bar (e.g. "DUE DILIGENCE") */
  sectionTitle: string;
  /** Engagement card title (e.g. "Due Diligence Engagement") */
  engagementTitle: string;
  /** Engagement card body content */
  engagementContent: ReactNode;
  /** Price amount (e.g. "$XX,000") */
  priceAmount: string;
  /** Price card note (single string) */
  priceNote?: string;
  /** Price card note as multiple lines (each item on its own line) */
  priceNoteLines?: string[];
  /** List of deliverable cards for the right column (use when no groups) */
  deliverables?: DeliverableItem[];
  /** Grouped deliverables for the right column with subsection headings (e.g. CONSTRUCTION, POST-CONSTRUCTION) */
  deliverableGroups?: DeliverableGroup[];
  className?: string;
}

const ProcessDetailSection = ({
  sectionTitle,
  engagementTitle,
  engagementContent,
  priceAmount,
  priceNote,
  priceNoteLines,
  deliverables = [],
  deliverableGroups,
  className = "",
}: ProcessDetailSectionProps) => {
  const useGroups = deliverableGroups && deliverableGroups.length > 0;
  const rightContent = useGroups ? (
    <>
      {deliverableGroups!.map((group) => (
        <div key={group.groupTitle} style={{ marginBottom: 24 }}>
          <h4
            style={{
              fontSize: 9,
              fontWeight: 400,
              letterSpacing: 3,
              textTransform: "uppercase" as const,
              color: "#4e7d8c",
              marginBottom: 16,
            }}
          >
            {group.groupTitle}
          </h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {group.items.map((item) => (
              <DeliverableCard key={item.title} title={item.title} description={item.description} className="process-detail-deliverable" />
            ))}
          </div>
        </div>
      ))}
    </>
  ) : (
    deliverables.map((item) => (
      <DeliverableCard key={item.title} title={item.title} description={item.description} className="process-detail-deliverable" />
    ))
  );
  return (
    <section className={className} style={{ marginTop: 0, marginBottom: 0, background: "#f0ede6", borderTop: "1px solid rgba(78,125,140,0.14)" }}>
      <ProcessDetailHeader title={sectionTitle} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
          maxWidth: 1200,
          margin: "0 auto",
          paddingLeft: 60,
          paddingRight: 60,
          paddingBottom: 60,
          background: "#f0ede6",
          alignItems: "start",
        }}
        className="process-detail-grid"
      >
        {/* Left column: engagement + price */}
        <div
          className="process-detail-left-box"
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#faf8f5",
          }}
        >
          <EngagementCard title={engagementTitle}>{engagementContent}</EngagementCard>
          <div className="process-detail-price-wrap">
            <PriceCard amount={priceAmount} note={priceNote} noteLines={priceNoteLines} />
          </div>
        </div>
        {/* Right column: deliverable cards or grouped cards */}
        <div className="process-detail-right-col" style={{ display: "flex", flexDirection: "column", paddingTop: 32, paddingBottom: 32 }}>
          {rightContent}
        </div>
      </div>
      <style>{`
        .process-detail-grid .process-detail-deliverable:last-child {
          border-bottom: none !important;
          margin-bottom: 0 !important;
        }
        @media (max-width: 900px) {
          .process-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
        @media (max-width: 600px) {
          .process-detail-left-box {
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessDetailSection;
