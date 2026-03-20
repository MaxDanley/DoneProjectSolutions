import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ProcessDetailSection } from "@/components/ProcessDetail";
import type { DeliverableItem, DeliverableGroup } from "@/components/ProcessDetail";
import heroHomeImg from "@/assets/hero-home.png";

/** Reusable data shape for process detail sections (Due Diligence, Pre-Construction, etc.) */
const dueDiligenceData = {
  sectionTitle: "DUE DILIGENCE",
  engagementTitle: "Due Diligence Engagement",
  engagementContent: (
    <>
      <p style={{ marginBottom: 16 }}>
        Done Project Solutions provides comprehensive due
diligence consulting to help ownership make informed go/no
go decisions with full visibility into costs, schedule, and
feasibility before capital is committed.

      </p>
      <p style={{ marginBottom: 0 }}>
        Our team brings construction expertise directly into the underwriting and investor process.
      </p>
    </>
  ),
  priceAmount: "$XX,000",
  priceNoteLines: [
    "One-time fee, required to initiate services.",
    "Travel costs reimbursed at cost (if applicable).",
  ],
  deliverables: [
    { title: "Feasibility & Market Studies", description: "Scope development and review of local code requirements." },
    { title: "Property Reports & Studies", description: "Review and provide guidance on necessary property studies." },
    { title: "Zoning & City Planning", description: "Prepare for and participate in city meetings and hearings." },
    { title: "Budget Framework", description: "Establish hard and soft costs for project proforma." },
    { title: "Risk Identification & Mitigation", description: "Identify project risks early and develop strategies to protect schedule, budget,and ownership interests." },
    { title: "Capital Raising Deliverables", description: "Deck deliverables and investor call support for construction scope." },
    { title: "Preliminary Scheduling", description: "Develop preliminary project schedule." },
  ] as DeliverableItem[],
};

const preConstructionData = {
  sectionTitle: "PRE-CONSTRUCTION",
  engagementTitle: "Setting Your Project Up for Success",
  engagementContent: (
    <>
      <p style={{ marginBottom: 16 }}>
        Pre-construction is where projects are won or lost. We guide ownership through every critical decision — selecting the right delivery method, building the right team, and ensuring contracts protect the owner and the project.
      </p>
      <p style={{ marginBottom: 0 }}>
        We hold everyone accountable to the pre-construction schedule and drive to a construction start on time.
      </p>
    </>
  ),
  priceAmount: "$XX,000",
  priceNoteLines: [
    "One-time fee, required to initiate services.",
    "Travel costs reimbursed at cost (if applicable).",
  ],
  deliverables: [
    { title: "Pre-Construction Scheduling", description: "Build and manage the master pre-con schedule." },
    { title: "Preliminary Budgeting", description: "Establish and validate project budget before commitment." },
    { title: "Delivery Method Evaluation", description: "Guide ownership to the approach that best protects budget, schedule, and risk." },
    { title: "Design Team Selection", description: "Lead interviews and oversee selection of architects and engineers." },
    { title: "Contractor Selection", description: "Lead GC interviews and oversee bidding and selection process." },
    { title: "Contract Reviews + Recommendations", description: "Review all contracts with the owner's interests in mind." },
    { title: "Design Reviews + Value Engineering", description: "Identify savings opportunities without compromising scope." },
    { title: "Constructability Reviews", description: "Catch issues in design before they become field problems." },
    { title: "Risk Identification & Mitigation Planning", description: "Proactively surface and address risks before construction begins." },
  ] as DeliverableItem[],
};

const constructionPostConstructionData = {
  sectionTitle: "CONSTRUCTION & POST-CONSTRUCTION",
  engagementTitle: "Eyes on Your Project. Every Day.",
  engagementContent: (
    <>
      <p style={{ marginBottom: 16 }}>
        During construction, our job is to make sure your project gets the attention and rigor it deserves. We hold the GC and trades accountable, keep communication organized, and make sure nothing slips.
      </p>
      <p style={{ marginBottom: 0 }}>
        Every change order and pay application is reviewed with the owner's interests in mind — protecting your budget and keeping the team honest through to a clean closeout.
      </p>
    </>
  ),
  priceAmount: "$XX,000",
  priceNoteLines: [
    "One-time fee, required to initiate services.",
    "Travel costs reimbursed at cost (if applicable).",
  ],
  deliverableGroups: [
    {
      groupTitle: "CONSTRUCTION",
      items: [
        { title: "Schedule Reviews + Oversight", description: "" },
        { title: "Material/Equipment Procurement Supervision", description: "" },
        { title: "GC + Trades Accountability", description: "" },
        { title: "Cost Management + Contingency Tracking", description: "" },
        { title: "Change Order + Pay App Reviews", description: "" },
        { title: "Weekly Coordination + Contractor Oversight", description: "" },
        { title: "Owner Scope Procurement (FF&E, AV, Food Service, etc.)", description: "" },
        { title: "Project Closeout Planning + Documentation", description: "" },
      ],
    },
    {
      groupTitle: "POST-CONSTRUCTION / CLOSEOUT",
      items: [
        { title: "Punchlist Closeout Management", description: "" },
        { title: "AHJ + Final Inspection Assistance", description: "" },
        { title: "Building Turnover + Ops/Facility Planning", description: "" },
      ],
    },
  ] as DeliverableGroup[],
};

const phaseCards = [
  {
    num: "01",
    title: <>Due<br />Diligence</>,
    items: [
      "Feasibility & Market Studies",
      "Property Reports",
      "Zoning & City Planning",
      "Budget Framework",
      "Risk Identification",
      "Investor Deliverables",
      "Preliminary Scheduling",
    ],
    href: "#phase-due-diligence",
  },
  {
    num: "02",
    title: <>Pre-<br />Construction</>,
    items: [
      "Scheduling & Budgeting",
      "Design Team Selection",
      "Contractor Selection",
      "Contract Reviews",
      "Value Engineering",
      "Constructability Reviews",
    ],
    href: "#phase-pre-construction",
  },
  {
    num: "03",
    title: "Construction",
    items: [
      "Schedule Oversight",
      "Procurement Supervision",
      "Cost Management",
      "Change Order Reviews",
      "Pay App Reviews",
      "Weekly Coordination",
    ],
    href: "#phase-construction",
  },
  {
    num: "04",
    title: <>Post-<br />Construction</>,
    items: [
      "Punchlist Management",
      "AHJ Inspection Support",
      "Building Turnover",
      "Ops/Facility Planning",
    ],
    href: "#phase-construction",
  },
];

const Services = () => {
  return (
    <div style={{ background: "#e6e2d8", color: "#2e2c2a", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.7 }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", padding: "0 60px 80px", overflow: "hidden" }}>
        <img src={heroHomeImg} alt="Construction projects skyline" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0, opacity: 0.58,
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to top, rgba(46,44,42,0.72) 0%, rgba(46,44,42,0.30) 50%, rgba(46,44,42,0.10) 100%)",
        }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 800 }}>
          <ScrollReveal immediate>
            <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 20 }}>Our Services</p>
          </ScrollReveal>
          <ScrollReveal delay={1} immediate>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(38px, 5vw, 64px)", lineHeight: 1.15, color: "#e6e2d8", marginBottom: 16 }}>
              Four focused service lines built to keep projects moving.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={2} immediate>
            <p style={{ fontSize: 15, color: "rgba(230,226,216,0.7)", lineHeight: 1.8, maxWidth: 560 }}>
              Each service has dedicated methods, reporting, and controls — designed to help owners avoid surprises and keep performance aligned.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section style={{ padding: "100px 60px", background: "#2e2c2a", color: "#e6e2d8", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(78,125,140,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(78,125,140,0.10) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 80, alignItems: "end" }} className="section-header-grid">
            <div>
              <ScrollReveal>
                <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 24 }}>Our Process</p>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300, lineHeight: 1.2, color: "#e6e2d8" }}>
                  A seamless, owner-first approach — from concept to keys.
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={2}>
              <p style={{ fontSize: 15, color: "rgba(230,226,216,0.55)", lineHeight: 1.8 }}>
                Every engagement follows the same disciplined path. We stay close to the work at every phase so nothing drifts, nothing surprises, and ownership always has a clear picture.
              </p>
            </ScrollReveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(78,125,140,0.18)" }} className="process-phases-grid">
            {phaseCards.map((card, i) => (
              <ScrollReveal key={card.num} delay={Math.min(i, 2) as 0 | 1 | 2} className="h-full">
                <a href={card.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div
                    style={{
                      background: "#2e2c2a", padding: "44px 36px", borderTop: "2px solid #4e7d8c",
                      transition: "background 0.3s", cursor: "pointer", height: "100%",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(78,125,140,0.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#2e2c2a")}
                  >
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, letterSpacing: 2, color: "#4e7d8c", marginBottom: 20 }}>{card.num}</p>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: "#e6e2d8", marginBottom: 24, lineHeight: 1.25 }}>
                      {card.title}
                    </h3>
                    <ul style={{ listStyle: "none" }}>
                      {card.items.map((item) => (
                        <li key={item} className="phase-list-item" style={{ fontSize: 13, color: "rgba(230,226,216,0.48)", padding: "5px 0", display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.4 }}>
                          <span style={{ color: "#4e7d8c", flexShrink: 0 }}>—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(78,125,140,0.6)", marginTop: 24 }}>View Details →</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process detail: Due Diligence (reusable for other phases) */}
      <ProcessDetailSection
        id="phase-due-diligence"
        sectionTitle={dueDiligenceData.sectionTitle}
        engagementTitle={dueDiligenceData.engagementTitle}
        engagementContent={dueDiligenceData.engagementContent}
        deliverables={dueDiligenceData.deliverables}
      />

      {/* Process detail: Pre-Construction */}
      <ProcessDetailSection
        id="phase-pre-construction"
        sectionTitle={preConstructionData.sectionTitle}
        engagementTitle={preConstructionData.engagementTitle}
        engagementContent={preConstructionData.engagementContent}
        deliverables={preConstructionData.deliverables}
      />

      {/* Process detail: Construction & Post-Construction (one section, grouped right column) */}
      <ProcessDetailSection
        id="phase-construction"
        sectionTitle={constructionPostConstructionData.sectionTitle}
        engagementTitle={constructionPostConstructionData.engagementTitle}
        engagementContent={constructionPostConstructionData.engagementContent}
        deliverableGroups={constructionPostConstructionData.deliverableGroups}
      />

      {/* FEE STRUCTURE - commented out for now
      <section style={{ padding: "60px 60px 80px", background: "#f0ede6" }} className="fee-structure-section">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 3vw, 38px)",
              fontWeight: 600,
              color: "#2e2c2a",
              marginBottom: 40,
              letterSpacing: "1px",
            }}
          >
            FEE STRUCTURE
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
              marginBottom: 32,
            }}
            className="fee-structure-grid"
          >
            {[
              {
                title: "Due Diligence",
                amount: "$XX,000",
                feeType: "One-Time Fee",
                description: "Required to initiate services. Travel reimbursed at cost.",
                headerBg: "#4e7d8c",
              },
              {
                title: "Pre-Construction",
                amount: "$XX,000",
                feeType: "Per Month",
                description: "Month-to-month engagement. Travel reimbursed at cost.",
                headerBg: "#4e7d8c",
              },
              {
                title: "Construction & Post-Construction",
                amount: "$XX,000",
                feeType: "Per Month",
                description: "Month-to-month engagement. Travel reimbursed at cost.",
                headerBg: "#2a4d56",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#f5f0e8",
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 6px 24px rgba(46,44,42,0.08)",
                  border: "1px solid rgba(46,44,42,0.06)",
                }}
              >
                <div
                  style={{
                    background: card.headerBg,
                    color: "#fff",
                    padding: "18px 24px",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase" as const,
                    textAlign: "center",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {card.title}
                </div>
                <div style={{ padding: "32px 28px", textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "clamp(28px, 3vw, 38px)",
                      fontWeight: 700,
                      color: "#4e7d8c",
                      marginBottom: 10,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {card.amount}
                  </p>
                  <p style={{ fontSize: 13, color: "#808080", marginBottom: 20, fontWeight: 400 }}>{card.feeType}</p>
                  <div
                    style={{
                      height: 1,
                      background: "#ddcbba",
                      marginBottom: 20,
                      marginLeft: 24,
                      marginRight: 24,
                    }}
                  />
                  <p style={{ fontSize: 13, color: "#606060", lineHeight: 1.65, margin: 0 }}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 12,
              color: "#7a7570",
              fontStyle: "italic",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: 800,
            }}
          >
            All engagements are month-to-month unless otherwise agreed. Scope and fees may be adjusted by mutual agreement. Additional services outside the agreed scope will be discussed and documented prior to commencement.
          </p>
        </div>
      </section>
      */}

      {/* CTA */}
      <section style={{ padding: "80px 60px", background: "#e6e2d8", borderTop: "1px solid rgba(78,125,140,0.12)" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }} className="cta-band-inner">
          <a className="btn-primary" href="/#contact">Get in Touch</a>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .services-all-grid, .process-phases-grid, .section-header-grid {
            grid-template-columns: 1fr !important;
          }
          .process-phases-grid .phase-list-item {
            color: rgba(230,226,216,0.72) !important;
          }
          .process-phases-grid > * > a > div {
            background: #3a3835 !important;
          }
          .fee-structure-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-band-inner { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 600px) {
          .fee-structure-section {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
