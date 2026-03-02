import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

interface ServicePageData {
  title: string;
  subtitle: string;
  deliverDesc: string;
  deliverItems: string[];
  factTitle: string;
  factText: string;
  ctaText: string;
  image?: string;
  heroImage?: string;
}

const ServicePageTemplate = ({ title, subtitle, deliverDesc, deliverItems, factTitle, factText, ctaText, image, heroImage }: ServicePageData) => {
  return (
    <div style={{ background: "#e6e2d8", color: "#2e2c2a", fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: 1.7 }}>
      <Navbar />

      {/* Page Hero with Image */}
      <section style={{ position: "relative", minHeight: 480, display: "flex", alignItems: "flex-end", padding: "0 60px 70px", overflow: "hidden" }}>
        {heroImage && (
          <img src={heroImage} alt={title} style={{
            position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0,
          }} />
        )}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: heroImage
            ? "linear-gradient(to top, rgba(46,44,42,0.88) 0%, rgba(46,44,42,0.45) 50%, rgba(46,44,42,0.15) 100%)"
            : "#f0ede6",
        }} />
        <div style={{ maxWidth: 920, position: "relative", zIndex: 2 }}>
          <ScrollReveal immediate>
            <p style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#4e7d8c", marginBottom: 24 }}>Service</p>
          </ScrollReveal>
          <ScrollReveal delay={1} immediate>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 300, lineHeight: 1.15, marginBottom: 20,
              color: heroImage ? "#e6e2d8" : "#2e2c2a",
            }}>
              {title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={2} immediate>
            <p style={{ maxWidth: 680, color: heroImage ? "rgba(230,226,216,0.75)" : "#7a7570", fontSize: 16, lineHeight: 1.8, marginBottom: 34 }}>
              {subtitle}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3} immediate>
            <a className="btn-primary" href="tel:+18005550199">Call Us Now</a>
          </ScrollReveal>
        </div>
      </section>

      {/* Detail Section */}
      <section style={{ padding: "100px 60px", background: "#e6e2d8" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 40 }} className="detail-grid">
          <ScrollReveal>
            <article style={{ background: "#faf8f5", borderLeft: "3px solid #4e7d8c", padding: 40 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 400, marginBottom: 14 }}>What We Deliver</h2>
              <p style={{ color: "#7a7570", fontSize: 15, marginBottom: 24 }}>{deliverDesc}</p>
              {image && (
                <img src={image} alt={title} style={{ width: "100%", height: 200, objectFit: "cover", marginBottom: 24, opacity: 0.85 }} />
              )}
              <ul style={{ listStyle: "none", display: "grid", gap: 10 }}>
                {deliverItems.map((item) => (
                  <li key={item} style={{ padding: "10px 0", borderBottom: "1px solid rgba(78,125,140,0.15)", fontSize: 15, color: "#2e2c2a", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#4e7d8c" }}>—</span> {item}
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <aside style={{ background: "#2e2c2a", color: "#e6e2d8", padding: 34, borderTop: "2px solid #4e7d8c" }}>
              <h3 style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14, color: "#4e7d8c" }}>{factTitle}</h3>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, lineHeight: 1.35 }}>{factText}</p>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Band */}
      <section style={{ padding: "80px 60px", background: "#f0ede6", borderTop: "1px solid rgba(78,125,140,0.12)" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 30 }} className="cta-band-inner">
          <ScrollReveal>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 300, lineHeight: 1.2 }}>{ctaText}</h2>
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
          .detail-grid { grid-template-columns: 1fr !important; }
          .cta-band-inner { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </div>
  );
};

export default ServicePageTemplate;
