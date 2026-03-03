import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import heroConstructionImg from "@/assets/hero-construction.jpg";
import { Link } from "react-router-dom";

const engagements = [
  {
    title: "Monarch Mountain Lodge",
    detail: "expedited due diligence through pre-construction",
  },
  {
    title: "Hospitality renovation & repositioning advisory",
    detail: "Los Angeles",
  },
  {
    title: "Heidi's House of Hope",
    detail: "mission-driven advisory",
  },
  {
    title: "32-unit assisted living facility",
    detail: "construction management owner's representation",
  },
  {
    title: "Multifamily ground-up advisory",
    detail: "early engagement (concluded due to misalignment)",
  },
];

const ProjectExperience = () => {
  return (
    <div
      style={{
        background: "#e6e2d8",
        color: "#2e2c2a",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: 16,
        lineHeight: 1.7,
      }}
    >
      <Navbar />

      <section
        style={{
          position: "relative",
          minHeight: 520,
          display: "flex",
          alignItems: "flex-end",
          padding: "0 60px 80px",
          overflow: "hidden",
        }}
      >
        <img
          src={heroConstructionImg}
          alt="Project team on active construction site"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(to top, rgba(46,44,42,0.88) 0%, rgba(46,44,42,0.42) 55%, rgba(46,44,42,0.14) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
          <ScrollReveal immediate>
            <p
              style={{
                fontSize: 9,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#4e7d8c",
                marginBottom: 20,
              }}
            >
              Project Experience
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1} immediate>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: "clamp(38px, 5vw, 64px)",
                lineHeight: 1.15,
                color: "#e6e2d8",
                marginBottom: 16,
              }}
            >
              Representative engagements where clarity and disciplined
              decision-making mattered most.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={2} immediate>
            <p
              style={{
                fontSize: 15,
                color: "rgba(230,226,216,0.72)",
                lineHeight: 1.8,
                maxWidth: 640,
              }}
            >
              We support projects at moments where clarity, structure, and
              disciplined decision-making matter most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ padding: "110px 60px", background: "#f0ede6" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollReveal>
            <p
              style={{
                fontSize: 9,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#4e7d8c",
                marginBottom: 24,
              }}
            >
              The Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: 18,
              }}
            >
              Representative engagements include:
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ color: "#7a7570", fontSize: 15, lineHeight: 1.8, maxWidth: 760, marginBottom: 42 }}>
              Each engagement reflects a point where ownership teams needed practical
              guidance, strategic alignment, and reliable execution support.
            </p>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 2,
            }}
            className="experience-grid"
          >
            {engagements.map((item, i) => (
              <ScrollReveal key={item.title} delay={Math.min(i, 2) as 0 | 1 | 2}>
                <article
                  style={{
                    background: "#e6e2d8",
                    padding: "44px 40px",
                    borderLeft: "2px solid transparent",
                    transition: "background 0.25s, border-color 0.25s",
                    minHeight: 220,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#faf8f5";
                    e.currentTarget.style.borderLeftColor = "#4e7d8c";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#e6e2d8";
                    e.currentTarget.style.borderLeftColor = "transparent";
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 30,
                      fontWeight: 400,
                      lineHeight: 1.2,
                      marginBottom: 14,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "#7a7570", fontSize: 14, lineHeight: 1.8 }}>
                    <span style={{ color: "#4e7d8c", marginRight: 8 }}>—</span>
                    {item.detail}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 60px",
          background: "#e6e2d8",
          borderTop: "1px solid rgba(78,125,140,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 30,
          }}
          className="experience-cta-row"
        >
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Looking for this level of project support?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <a className="btn-primary" href="tel:+18005550199">
                Call Us Now
              </a>
              <Link className="btn-text" to="/#contact">
                Send Message
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .experience-grid { grid-template-columns: 1fr !important; }
          .experience-cta-row { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </div>
  );
};

export default ProjectExperience;
