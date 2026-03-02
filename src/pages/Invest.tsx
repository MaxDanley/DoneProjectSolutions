import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';

const Invest = () => {
  return (
    <div style={{ background: "#e6e2d8", color: "#2e2c2a", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.7 }}>
      <Navbar />    

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
      <section id="invest" className='h-screen flex justify-center items-center' style={{ padding: "100px 60px", background: "#faf8f5", borderTop: "1px solid rgba(78,125,140,0.14)", borderBottom: "1px solid rgba(78,125,140,0.10)" }}>
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
  )
}

export default Invest