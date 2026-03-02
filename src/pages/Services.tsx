import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import heroServicesImg from "@/assets/hero-services.jpg";

const services = [
  {
    title: "Cost Management",
    href: "/cost-management",
    desc: "Protecting budget performance with disciplined forecasting, contingency control, and proactive change management.",
    items: ["Budget Management", "Contingency Planning", "Margin Forecasting", "Change Order Management/Reviews"],
  },
  {
    title: "Pre-Construction",
    href: "/pre-construction",
    desc: "Aligning scope, schedule, design, and commercial expectations before execution risk compounds in the field.",
    items: ["Pre-Construction Scheduling", "Budgeting & Scoping", "Design/VE Assistance", "Bidding Process Support"],
  },
  {
    title: "Custom Dashboards",
    href: "/custom-dashboards",
    desc: "Visibility drives better project outcomes. Our dashboards turn key construction metrics into decision-ready reporting.",
    items: ["Cash Flow Projections", "Construction Schedule Status", "Budget Status", "Key Success Factors"],
  },
  {
    title: "Scheduling & Resource Management",
    href: "/scheduling-resource-management",
    desc: "Integrated scheduling and workforce planning that keeps project delivery aligned with cost and procurement realities.",
    items: ["Schedule Development & Management", "Cost Loaded Schedules", "Resource Loaded for Workforce", "Material Procurement Scheduling"],
  },
];

const Services = () => {
  return (
    <div style={{ background: "#e6e2d8", color: "#2e2c2a", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.7 }}>
      <Navbar />

      {/* Hero */}
      <section style={{ position: "relative", minHeight: 520, display: "flex", alignItems: "flex-end", padding: "0 60px 80px", overflow: "hidden" }}>
        <img src={heroServicesImg} alt="Construction projects skyline" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0,
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to top, rgba(46,44,42,0.85) 0%, rgba(46,44,42,0.4) 50%, rgba(46,44,42,0.15) 100%)",
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

      {/* Services Grid */}
      <section style={{ padding: "100px 60px", background: "#f0ede6" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, maxWidth: 1200, margin: "0 auto" }} className="services-all-grid">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={Math.min(i, 2) as 0 | 1 | 2}>
              <div style={{
                background: "#e6e2d8", padding: "52px 44px", borderLeft: "2px solid transparent", transition: "background 0.25s, border-color 0.25s", cursor: "default", minHeight: 320,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#faf8f5"; e.currentTarget.style.borderLeftColor = "#4e7d8c"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#e6e2d8"; e.currentTarget.style.borderLeftColor = "transparent"; }}
              >
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>{service.title}</h3>
                  <p style={{ color: "#7a7570", fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{service.desc}</p>
                  <ul style={{ listStyle: "none", marginBottom: 28 }}>
                    {service.items.map((item) => (
                      <li key={item} style={{ fontSize: 13, color: "#2e2c2a", padding: "5px 0", display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: "#4e7d8c" }}>—</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={service.href} className="btn-text">View Service →</Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 60px", background: "#e6e2d8", borderTop: "1px solid rgba(78,125,140,0.12)" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 30 }} className="cta-band-inner">
          <ScrollReveal>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, lineHeight: 1.2 }}>
              Ready to bring structure to your next project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <a className="btn-primary" href="tel:+18005550199">Call Us Now</a>
              <a href="mailto:contactus@doneprojectsolutions.com" className="btn-text">Send Message</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .services-all-grid { grid-template-columns: 1fr !important; }
          .cta-band-inner { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </div>
  );
};

export default Services;
