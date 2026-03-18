import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlueprintCanvas from "@/components/BlueprintCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import teamPlanningImg from "@/assets/team-planning.jpg";
import heroHomeImg from "@/assets/hero-home.png";
import completedBuildingImg from "@/assets/completed-building.jpg";
import blueprintsDeskImg from "@/assets/blueprints-desk.jpg";

const Index = () => {
  return (
    <div style={{ background: "#e6e2d8", color: "#2e2c2a", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.7 }}>
      <Navbar />

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "0 60px 80px",
        position: "relative",
        overflow: "hidden",
        background: "#e6e2d8",
      }} className="hero-section">
        <img src={heroHomeImg} alt="Construction site at golden hour" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: 0.18,
        }} />
        <BlueprintCanvas />
        {/* Vignette */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 85% at 30% 50%, rgba(230,226,216,0.88) 0%, transparent 100%), radial-gradient(ellipse 45% 70% at 78% 55%, rgba(230,226,216,0.60) 0%, transparent 100%)",
        }} />

        <div style={{ paddingTop: 140, alignSelf: "center", position: "relative", zIndex: 2 }}>
          <ScrollReveal immediate>
            <p style={{ fontSize: 14, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 36, display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ display: "block", width: 32, height: 1, background: "#4e7d8c" }} />
              Development &amp; Construction Management
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1} immediate>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(42px, 5.5vw, 72px)", lineHeight: 1.12, letterSpacing: "-0.5px", color: "#2e2c2a", marginBottom: 40, maxWidth: 560 }}>
              Bringing <em style={{ fontStyle: "italic", color: "#4e7d8c" }}>clarity</em> and momentum to your development and construction projects.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={2} immediate>
            <p style={{ fontSize: 18, color: "#7a7570", lineHeight: 1.75, maxWidth: 420, marginBottom: 52 }}>
              We partner with owners and developers to proactively manage risk, align teams, and move projects forward  from early evaluation through construction.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3} immediate>
            <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
              <a href="/#contact" className="btn-primary">Get in Touch</a>
              <a href="/services" className="btn-text">Our Services</a>
            </div>
          </ScrollReveal>
        </div>
{/* 
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingTop: 120, position: "relative", zIndex: 2 }} className="hero-right-col">
          <ScrollReveal delay={2} immediate>
            <div style={{
              width: 360, background: "rgba(250,248,245,0.93)", backdropFilter: "blur(8px)",
              padding: "48px 44px", borderLeft: "3px solid #4e7d8c", boxShadow: "0 12px 48px rgba(46,44,42,0.10)",
            }}>
              <p style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: "#4e7d8c", marginBottom: 20 }}>
                We support projects during
              </p>
              <ul style={{ listStyle: "none" }}>
                {[
                  "Early Project Evaluation & Feasibility",
                  "Project Definition & Due Diligence",
                  "Pre-Construction & Team Alignment",
                  "Construction-Phase Owner Representation",
                ].map((item, i, arr) => (
                  <li key={item} style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 17, fontWeight: 400, color: "#2e2c2a",
                    padding: "13px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(122,117,112,0.15)" : "none",
                    display: "flex", alignItems: "center", gap: 14,
                  }}>
                    <span style={{ color: "#4e7d8c", fontSize: 14, flexShrink: 0 }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div> */}
      </section>

      {/* DIVIDER */}
      {/* <div style={{
        padding: "70px 60px",
        borderTop: "1px solid rgba(78,125,140,0.18)",
        borderBottom: "1px solid rgba(78,125,140,0.10)",
        display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, alignItems: "center",
        background: "#f0ede6",
      }} className="divider-grid">
        <ScrollReveal>
          <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c" }}>The problem</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 300, lineHeight: 1.5 }}>
            Complex projects don't struggle from a lack of effort.<br />They struggle from a lack of alignment.
          </p>
        </ScrollReveal>
      </div> */}

      {/* TENSION */}
      {/* <section style={{
        padding: "100px 60px", background: "#2e2c2a", color: "#e6e2d8", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(78,125,140,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(78,125,140,0.13) 1px, transparent 1px), linear-gradient(rgba(78,125,140,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(78,125,140,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
        }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 48 }}>Why projects lose momentum</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.2, marginBottom: 32 }}>
              When budgets, schedules, teams, and decisions drift out of sync  even well-intentioned projects lose momentum.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 15, color: "rgba(230,226,216,0.58)", lineHeight: 1.85, maxWidth: 640, marginBottom: 64 }}>
              We step in to bring structure, accountability, and focus  helping ownership teams make informed decisions and keep projects moving. Our role adapts to the needs of each project, but our focus is consistent: clear decisions, disciplined execution, and fewer surprises.
            </p>
          </ScrollReveal>

          <div style={{ marginBottom: 64, maxWidth: 640 }}>
            <img src={teamPlanningImg} alt="Team reviewing construction plans" style={{ width: "100%", height: 240, objectFit: "cover", opacity: 0.7, filter: "grayscale(30%)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(78,125,140,0.18)" }} className="pillars-grid">
            {[
              { num: "01", title: "Decision-Driven", text: "We focus on the decisions that shape outcomes, not just the tasks that fill schedules." },
              { num: "02", title: "Aligned Early, Managed Continuously", text: "Cost, schedule, design intent, and incentives are aligned early and proactively managed as the project evolves." },
              { num: "03", title: "Senior Involvement Throughout", text: "Direct access to experienced leadership. No handoffs. No layers." },
            ].map((pillar, i) => (
              <ScrollReveal key={pillar.num} delay={i as 0 | 1 | 2}>
                <div style={{
                  background: "#2e2c2a", padding: "44px 36px", borderTop: "2px solid #4e7d8c", transition: "background 0.3s", cursor: "default",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(78,125,140,0.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#2e2c2a")}
                >
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, letterSpacing: 2, color: "#4e7d8c", marginBottom: 20 }}>{pillar.num}</p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: "#e6e2d8", marginBottom: 16, lineHeight: 1.25 }}>{pillar.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(230,226,216,0.48)", lineHeight: 1.75 }}>{pillar.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* SERVICES BAR */}
      {/* <div style={{
        padding: "36px 60px", borderTop: "1px solid rgba(78,125,140,0.14)", borderBottom: "1px solid rgba(78,125,140,0.10)",
        background: "#e6e2d8", display: "flex", alignItems: "center", overflowX: "auto",
      }}>
        <p style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: "#4e7d8c", whiteSpace: "nowrap", marginRight: 48, flexShrink: 0 }}>Services</p>
        {[
          { label: "Custom Dashboards", href: "/custom-dashboards" },
          { label: "Pre-Construction", href: "/pre-construction" },
          { label: "Scheduling & Resource Management", href: "/scheduling-resource-management" },
          { label: "Cost Management", href: "/cost-management" },
        ].map((s, i, arr) => (
          <Link key={s.label} to={s.href} style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: "#2e2c2a", whiteSpace: "nowrap",
            padding: "0 32px", borderLeft: "1px solid rgba(78,125,140,0.2)", textDecoration: "none",
            borderRight: i === arr.length - 1 ? "1px solid rgba(78,125,140,0.2)" : undefined,
            transition: "color 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#4e7d8c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2c2a")}
          >
            {s.label}
          </Link>
        ))}
      </div> */}

      {/* SERVICES OVERVIEW */}
      {/* <section id="experience" style={{ padding: "120px 60px", background: "#f0ede6", borderTop: "1px solid rgba(78,125,140,0.14)", borderBottom: "1px solid rgba(78,125,140,0.10)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 80, alignItems: "end" }} className="section-header-grid">
          <div>
            <ScrollReveal>
              <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 24 }}>Our Services</p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300, lineHeight: 1.2 }}>
                Four focused service lines built to keep projects moving.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 15, color: "#7a7570", lineHeight: 1.8, alignSelf: "end" }}>
              Each service has dedicated methods, reporting, and controls. Explore each one to see how Done Project Solutions helps owners avoid surprises and keep performance aligned.
            </p>
          </ScrollReveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }} className="service-grid-layout">
          {[
            {
              title: "Custom Dashboards", href: "/custom-dashboards",
              desc: "Real-time visibility across financial and execution metrics so leaders can make clear decisions fast.",
              items: ["Cash flow projections", "Construction schedule status", "Budget and procurement status"],
            },
            {
              title: "Pre-Construction", href: "/pre-construction",
              desc: "Set the project up for delivery success with early schedule logic, budget alignment, and scoped clarity.",
              items: ["Preliminary scheduling", "Design/VE and constructibility support", "Bidding and permitting support"],
            },
            {
              title: "Scheduling & Resource Management", href: "/scheduling-resource-management",
              desc: "Integrated project controls that connect time, workforce, cost, and procurement into one management strategy.",
              items: ["Cost-loaded schedules", "Workforce resource loading", "Material procurement sequencing"],
            },
            {
              title: "Cost Management", href: "/cost-management",
              desc: "Continuous budget stewardship from baseline through closeout, including contingency and change management.",
              items: ["Budget and contingency management", "Margin forecasting", "Change order review and control"],
            },
          ].map((service, i) => (
            <ScrollReveal key={service.title} delay={Math.min(i, 2) as 0 | 1 | 2}>
              <div style={{
                background: "#e6e2d8", padding: "46px 40px", borderLeft: "2px solid transparent", transition: "background 0.25s, border-color 0.25s", cursor: "default",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#faf8f5"; e.currentTarget.style.borderLeftColor = "#4e7d8c"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#e6e2d8"; e.currentTarget.style.borderLeftColor = "transparent"; }}
              >
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 400, lineHeight: 1.2, marginBottom: 16 }}>{service.title}</h3>
                <p style={{ color: "#7a7570", fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{service.desc}</p>
                <ul style={{ listStyle: "none", marginBottom: 26 }}>
                  {service.items.map((item) => (
                    <li key={item} style={{ fontSize: 13, color: "#2e2c2a", padding: "4px 0", display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "#4e7d8c" }}></span> {item}
                    </li>
                  ))}
                </ul>
                <Link to={service.href} className="btn-text">View Service</Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section> */}

      {/* APPROACH */}
      <section id="approach" style={{ padding: "120px 60px", background: "#f0ede6" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 80, alignItems: "end" }} className="section-header-grid">
          <div>
            <ScrollReveal>
              <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 24 }}>Our Capabilities</p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 300, lineHeight: 1.2 }}>
                Every project is different  but most break down in familiar ways.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 15, color: "#7a7570", lineHeight: 1.8 }}>
              Budgets drift. Schedules slip. Teams lose alignment. Decisions get deferred instead of made. We partner with owners and developers to bring structure, accountability, and momentum to complex projects.
            </p>
          </ScrollReveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }} className="approach-grid">
          {[
            { num: "01", title: "Early Project Evaluation", text: "Grounding projects in realistic cost, schedule, and risk expectations before commitments are made. We help you understand what you're getting into before you're in it." },
            { num: "02", title: "Project Definition & Due Diligence", text: "Defining scope, aligning stakeholders, and surfacing risks early  so that decision-making is informed and the project starts on solid footing." },
            { num: "03", title: "Pre-Construction & Team Alignment", text: "Coordinating design, procurement, and contractor selection with disciplined oversight  ensuring cost, schedule, and intent stay aligned before construction begins." },
            { num: "04", title: "Construction-Phase Owner Representation", text: "Serving as an experienced extension of the ownership team through delivery  protecting interests, resolving issues, and keeping the project on track." },
          ].map((item, i) => (
            <ScrollReveal key={item.num} delay={Math.min(i, 2) as 0 | 1 | 2} className="h-full">
              <Link to="/services" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                <div style={{
                  background: "#e6e2d8", padding: "52px 48px", display: "grid", gridTemplateColumns: "40px 1fr", gap: 28, alignItems: "start",
                  borderLeft: "2px solid transparent", transition: "background 0.25s, border-color 0.25s", height: "100%", boxSizing: "border-box",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#faf8f5"; e.currentTarget.style.borderLeftColor = "#4e7d8c"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#e6e2d8"; e.currentTarget.style.borderLeftColor = "transparent"; }}
                >
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, letterSpacing: 1, color: "#4e7d8c", paddingTop: 6 }}>{item.num}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, marginBottom: 14, lineHeight: 1.2 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: "#7a7570", lineHeight: 1.75 }}>{item.text}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section style={{ padding: "130px 60px", background: "#e6e2d8", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -60, right: -60, width: 380, height: 380, borderRadius: "50%", border: "1px solid rgba(78,125,140,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -10, right: -10, width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(78,125,140,0.07)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 820, position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 24 }}>Testimonial</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 300, lineHeight: 1.35, marginBottom: 48 }}>
              "If you want to feel the perfect combination of comfort, empowerment &amp; expertise, I highly recommend bringing Done. Project Solutions onto your project."
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p style={{ fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", color: "#7a7570" }}>
              — Principal / Co-Founder, Everwood Reserve
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "100px 60px", background: "#faf8f5", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center",
        borderTop: "2px solid #4e7d8c",
      }} className="contact-grid">
        <div>
          <ScrollReveal>
            <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 24 }}>Let's Talk</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 3vw, 42px)", fontWeight: 300, lineHeight: 1.25 }}>
              If you're exploring a development or construction project and want an experienced, owner-first partner at the table - we should talk.
            </h2>
          </ScrollReveal>
          {/* Photo accent in contact */}
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
              <textarea name="project_notes" placeholder="A brief overview  we'll take it from there." style={{
                background: "none", border: "none", borderBottom: "1px solid rgba(78,125,140,0.28)", padding: "10px 0",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 300, color: "#2e2c2a", outline: "none", resize: "none", height: 90, width: "100%",
              }} />
            </div>
            <div style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}>
              <button type="submit" className="btn-primary">Send Message →</button>
            </div>
          </form>
        </ScrollReveal>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; padding: 120px 28px 60px !important; min-height: auto !important; }
          .hero-right-col { display: none !important; }
          .divider-grid, .section-header-grid, .service-grid-layout, .approach-grid, .about-grid, .contact-grid, .pillars-grid { grid-template-columns: 1fr !important; }
          .form-row-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Index;
