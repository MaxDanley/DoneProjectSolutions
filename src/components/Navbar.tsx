import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Approach", href: "/#approach" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Stewardship", href: "/stewardship" },
  { label: "Invest", href: "/invest" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "18px 60px" : "28px 60px",
        background: scrolled ? "rgba(230,226,216,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background 0.4s ease, padding 0.4s ease",
        borderBottom: scrolled ? "1px solid rgba(78,125,140,0.14)" : "none",
      }}
    >
      <Link to="/" style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, textDecoration: "none", color: "#2e2c2a" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 22, letterSpacing: "-0.5px" }}>
          done<span style={{ color: "#4e7d8c" }}>.</span>
        </span>
        <span style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase" as const, color: "#7a7570", marginTop: 1 }}>
          Project Solutions
        </span>
      </Link>

      {/* Desktop nav */}
      <ul style={{ display: "flex", gap: 40, listStyle: "none" }} className="nav-links-desktop">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href.startsWith("/#") ? "/" : link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: 12,
                letterSpacing: "1.8px",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                color: "#7a7570",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4e7d8c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7a7570")}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href="mailto:contactus@doneprojectsolutions.com"
        className="nav-cta-desktop"
        style={{
          fontSize: 12,
          letterSpacing: "1.5px",
          textTransform: "uppercase" as const,
          textDecoration: "none",
          color: "#2e2c2a",
          borderBottom: "1px solid #4e7d8c",
          paddingBottom: 1,
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#4e7d8c")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#2e2c2a")}
      >
        Let's Talk
      </a>

      {/* Mobile toggle */}
      <button
        className="mobile-nav-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        style={{ display: "none", background: "none", border: "none", color: "#2e2c2a", cursor: "pointer" }}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(230,226,216,0.98)",
            backdropFilter: "blur(10px)",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href.startsWith("/#") ? "/" : link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: 13,
                letterSpacing: "1.5px",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                color: "#7a7570",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:contactus@doneprojectsolutions.com"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
            style={{ textAlign: "center", marginTop: 8 }}
          >
            Let's Talk
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop, .nav-cta-desktop { display: none !important; }
          .mobile-nav-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
