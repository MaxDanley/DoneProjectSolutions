import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#2e2c2a",
        color: "rgba(230,226,216,0.5)",
        padding: "64px 60px 40px",
        position: "relative",
      }}
    >
      {/* Accent gradient top border */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "linear-gradient(90deg, #4e7d8c 0%, transparent 70%)",
      }} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 60, marginBottom: 60 }} className="footer-grid">
        {/* Brand */}
        <div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 20, color: "#e6e2d8", letterSpacing: "-0.5px" }}>
            done<span style={{ color: "#4e7d8c" }}>.</span>
          </p>
          <p style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: "#4e7d8c", marginTop: 4, marginBottom: 20 }}>
            Project Solutions
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.7 }}>
            Bringing clarity and momentum to complex construction projects. Boutique owner's representation and project advisory.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: "#4e7d8c", marginBottom: 20 }}>Pages</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Home", to: "/" },
              { label: "Our Approach & Capabilities", to: "/#approach" },
              { label: "Project Experience", to: "/#experience" },
              { label: "About Us", to: "/#about" },
              { label: "Stewardship", to: "/#stewardship" },
              { label: "Invest With Our Partners", to: "/#invest" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} style={{ fontSize: 13, color: "rgba(230,226,216,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e6e2d8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(230,226,216,0.5)")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="mailto:info@doneprojectsolutions.com?subject=Client%20Portal%20Access" style={{ fontSize: 13, color: "rgba(230,226,216,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e6e2d8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(230,226,216,0.5)")}
              >
                Client Portal
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: "#4e7d8c", marginBottom: 20 }}>Contact</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            <li>
              <a href="mailto:info@doneprojectsolutions.com" style={{ fontSize: 13, color: "rgba(230,226,216,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e6e2d8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(230,226,216,0.5)")}
              >
                info@doneprojectsolutions.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "rgba(230,226,216,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e6e2d8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(230,226,216,0.5)")}
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <div style={{ marginTop: 36 }}>
            <h4 style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: "#4e7d8c", marginBottom: 12 }}>Client Access</h4>
            <ul style={{ listStyle: "none" }}>
              <li>
                <a href="mailto:info@doneprojectsolutions.com?subject=Project%20Dashboard%20Login%20Request" style={{ fontSize: 13, color: "rgba(230,226,216,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e6e2d8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(230,226,216,0.5)")}
                >
                  Project Dashboard Login →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(78,125,140,0.12)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }} className="footer-bottom-row">
        <p>© 2026 Done Project Solutions. All rights reserved.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", fontSize: 11, color: "rgba(230,226,216,0.28)" }} className="footer-services-tags">
          <span>Project Development</span>
          <span>Owner's Representation</span>
          <span>Construction Management</span>
          <span>Pre-Construction</span>
          <span>Due Diligence</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom-row { flex-direction: column !important; gap: 16px !important; text-align: center !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
