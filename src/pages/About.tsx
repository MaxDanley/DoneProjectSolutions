import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import React from 'react';
import { Linkedin } from 'lucide-react';
import blueprintsDeskImg from "@/assets/blueprints-desk.jpg";
import heroHomeImg from "@/assets/hero-home.jpg";
import BlueprintCanvas from '@/components/BlueprintCanvas';
import Navbar from '@/components/Navbar';
import completedBuildingImg from "@/assets/completed-building.jpg";

const About = () => {
  return (
    <div style={{ background: "#e6e2d8", color: "#2e2c2a", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.7 }}>
      <Navbar />
      {/* ABOUT */}
      <section id="about" style={{ padding: "120px 60px", background: "#f0ede6", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", minHeight: "auto" }} className="about-grid">
        <div>
          <ScrollReveal>
            <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 24 }}>About Done Project Solutions</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300, lineHeight: 1.2, marginBottom: 28 }}>
              Boutique. Selective. Senior-Led.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 15, color: "#7a7570", lineHeight: 1.8, marginBottom: 28 }}>
              Done Project Solutions was formed around a simple belief: projects perform better when experienced leaders stay close to the work.
            </p>
            <p style={{ fontSize: 15, color: "#7a7570", lineHeight: 1.8, marginBottom: 40 }}>
              Our standards were shaped on large, complex projects where accountability, clarity, and execution discipline were non-negotiable. We operate as a boutique firm by design — selective in our partnerships and focused on where our involvement creates meaningful value.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <a href="#about" className="btn-text">Learn More About Us</a>
          </ScrollReveal>

          {/* Photo under about text */}
          <ScrollReveal delay={2}>
            <img src={completedBuildingImg} alt="Completed luxury building at dusk" style={{ width: "100%", height: 220, objectFit: "cover", marginTop: 40, opacity: 0.85 }} />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2}>
          <div>
            {[
              { number: "$4B+", label: "Construction Value Supported", style: {} },
              { number: "Boutique by Design", label: "Selective Partnerships Only", style: { fontSize: 26, fontStyle: "italic" } },
              { number: "Hospitality · Multifamily\nTechnically Complex Development", label: "Primary Project Sectors", style: { fontSize: 20, fontStyle: "italic", lineHeight: 1.4 } },
            ].map((stat) => (
              <div key={stat.label} style={{
                padding: "36px 40px", borderLeft: "3px solid #4e7d8c", background: "#e6e2d8", marginBottom: 2, transition: "background 0.25s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#faf8f5")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#e6e2d8")}
              >
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, color: "#2e2c2a", fontWeight: 300, whiteSpace: "pre-line", ...stat.style }}>{stat.number}</p>
                <p style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#4e7d8c", marginTop: stat.label === "Primary Project Sectors" ? 12 : 6 }}>{stat.label}</p>
              </div>
            ))}
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(78,125,140,0.2)" }}>
              <p style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 14 }}>Connect with us</p>
              <a href="https://www.linkedin.com/in/bailey-fait-961496106/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#2e2c2a", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#4e7d8c")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2c2a")}>
                <Linkedin size={18} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                Bailey Fait 
              </a>
              <a href="https://www.linkedin.com/company/doneprojectsolutions" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#2e2c2a", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#4e7d8c")} onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2c2a")}>
                <Linkedin size={18} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                Done Project Solutions 
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* OUR CARRIER WORK */}
      <section id="carrier-work" style={{ padding: "120px 60px", background: "#e6e2d8", borderTop: "1px solid rgba(78,125,140,0.14)" }}>
        <div style={{ marginBottom: 64 }}>
          <ScrollReveal>
            <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 24 }}>Our Carrier Work</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300, lineHeight: 1.2, marginBottom: 28 }}>
              Trusted partnerships across hospitality and aviation.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 15, color: "#7a7570", lineHeight: 1.8, maxWidth: 640 }}>
              We have supported complex projects for leading carriers and hospitality brands — delivering owner representation, project advisory, and execution discipline at scale.
            </p>
          </ScrollReveal>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }} className="carrier-work-grid">
          {[
            {
              name: "Gaylord",
              desc: "Serving as owner’s representative across multi-phase hospitality and convention destinations, including complex renovation and ground-up expansion programs. Our work has focused on aligning design, construction, and operator requirements while protecting guest experience, revenue continuity, and long-term asset value.",
              img: "/gaylord.jfif",
              reverse: false,
            },
            {
              name: "Allegiant",
              desc: "Supporting aviation and travel-related infrastructure initiatives with a focus on schedule reliability, budget discipline, and stakeholder coordination. Our role has included bridging capital planning, facilities, and delivery teams so that commercial, operational, and guest experience objectives stay aligned through execution.",
              img: "/allegiant.jpg",
              reverse: true,
            },
          ].map((carrier, i) => (
            <ScrollReveal key={carrier.name} delay={Math.min(i, 2) as 0 | 1 | 2}>
              <div
                className={`flex flex-col md:flex-row gap-0 min-h-[280px] ${carrier.reverse ? "md:flex-row-reverse" : ""}`}
                style={{
                  background: "#f0ede6", borderLeft: "2px solid transparent", transition: "background 0.25s, border-color 0.25s", cursor: "default", overflow: "hidden",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#faf8f5"; e.currentTarget.style.borderLeftColor = "#4e7d8c"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#f0ede6"; e.currentTarget.style.borderLeftColor = "transparent"; }}
              >
                <div className="flex-1 min-w-0 shrink-0 md:min-w-[320px]">
                  <img src={carrier.img} alt={`${carrier.name} project`} className="w-full h-full min-h-[240px] md:min-h-[280px] object-cover opacity-90 block" />
                </div>
                <div className="flex-1 flex flex-col justify-center" style={{ padding: "48px 56px" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, lineHeight: 1.2, marginBottom: 14, color: "#2e2c2a" }}>{carrier.name}</h3>
                  <p style={{ fontSize: 14, color: "#7a7570", lineHeight: 1.75 }}>{carrier.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* STEWARDSHIP */}
      {/* <section id="stewardship" style={{ padding: "100px 60px", background: "#2e2c2a", color: "#e6e2d8", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(78,125,140,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(78,125,140,0.10) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 32 }}>Stewardship</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, lineHeight: 1.3, marginBottom: 28 }}>
              We believe our work, time, and resources are entrusted to us by God.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 15, color: "rgba(230,226,216,0.55)", lineHeight: 1.8, marginBottom: 48 }}>
              As part of that responsibility, we commit a portion of our revenue and time to serving organizations creating meaningful, long-term community impact — including faith-aligned organizations, community and mission-driven facilities, and groups needing planning or execution support.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <a href="#invest" className="btn-primary">Learn About Our Commitment</a>
          </ScrollReveal>
        </div>
      </section> */}

      {/* INVEST */}
      {/* <section id="invest" style={{ padding: "100px 60px", background: "#faf8f5", borderTop: "1px solid rgba(78,125,140,0.14)", borderBottom: "1px solid rgba(78,125,140,0.10)" }}>
        <ScrollReveal>
          <div style={{
            maxWidth: 920, margin: "0 auto", padding: 48, background: "#e6e2d8",
            borderLeft: "3px solid #4e7d8c", boxShadow: "0 8px 30px rgba(46,44,42,0.06)",
          }}>
            <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 24 }}>Invest With Our Partners</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300, lineHeight: 1.2, marginBottom: 16 }}>
              Strategic development opportunities for aligned partners.
            </h2>
            <p style={{ fontSize: 15, color: "#7a7570", marginBottom: 24 }}>
              We work with select investment and development partners to evaluate opportunities, mitigate execution risk, and protect long-term value in complex projects.
            </p>
            <a className="btn-primary" href="mailto:contactus@doneprojectsolutions.com?subject=Invest%20With%20Done%20Project%20Solutions">Request Investment Information</a>
          </div>
        </ScrollReveal>
      </section> */}

      {/* CONTACT */}
      {/* <section id="contact" style={{
        padding: "100px 60px", background: "#faf8f5", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center",
        borderTop: "2px solid #4e7d8c",
      }} className="contact-grid">
        <div>
          <ScrollReveal>
            <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 24 }}>Let's Talk</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 3vw, 42px)", fontWeight: 300, lineHeight: 1.25 }}>
              If you're navigating a complex project and want an experienced partner at the table — we should talk.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <img src={blueprintsDeskImg} alt="Architectural blueprints on desk" style={{ width: "100%", height: 200, objectFit: "cover", marginTop: 40, opacity: 0.8 }} />
          </ScrollReveal>
        </div>
        <ScrollReveal delay={2}>
          <form style={{ display: "flex", flexDirection: "column", gap: 16 }} action="mailto:contactus@doneprojectsolutions.com" method="post" encType="text/plain">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row-grid">
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#4e7d8c" }}>First Name</label>
                <input name="first_name" type="text" placeholder="Jane" required style={{
                  background: "none", border: "none", borderBottom: "1px solid rgba(78,125,140,0.28)", padding: "10px 0",
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 300, color: "#2e2c2a", outline: "none", width: "100%",
                }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#4e7d8c" }}>Last Name</label>
                <input name="last_name" type="text" placeholder="Smith" required style={{
                  background: "none", border: "none", borderBottom: "1px solid rgba(78,125,140,0.28)", padding: "10px 0",
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 300, color: "#2e2c2a", outline: "none", width: "100%",
                }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#4e7d8c" }}>Email</label>
              <input name="email" type="email" placeholder="jane@company.com" required style={{
                background: "none", border: "none", borderBottom: "1px solid rgba(78,125,140,0.28)", padding: "10px 0",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 300, color: "#2e2c2a", outline: "none", width: "100%",
              }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#4e7d8c" }}>Project Type</label>
              <input name="project_type" type="text" placeholder="Hospitality, Multifamily, Other…" style={{
                background: "none", border: "none", borderBottom: "1px solid rgba(78,125,140,0.28)", padding: "10px 0",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 300, color: "#2e2c2a", outline: "none", width: "100%",
              }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#4e7d8c" }}>Tell us about your project</label>
              <textarea name="project_notes" placeholder="A brief overview — we'll take it from there." style={{
                background: "none", border: "none", borderBottom: "1px solid rgba(78,125,140,0.28)", padding: "10px 0",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 300, color: "#2e2c2a", outline: "none", resize: "none", height: 90, width: "100%",
              }} />
            </div>
            <div style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}>
              <button type="submit" className="btn-primary">Send Message →</button>
            </div>
          </form>
        </ScrollReveal>
      </section> */}

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; padding: 120px 28px 60px !important; min-height: auto !important; }
          .hero-right-col { display: none !important; }
          .divider-grid, .section-header-grid, .service-grid-layout, .approach-grid, .about-grid, .contact-grid, .pillars-grid, .carrier-work-grid { grid-template-columns: 1fr !important; }
          .about-grid { padding: 80px 28px 60px !important; gap: 48px !important; }
          #carrier-work { padding: 80px 28px 60px !important; }
          .form-row-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default About