"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home",          href: "#home" },
  { label: "About Us",      href: "#about" },
  { label: "Services",      href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact",       href: "#quote" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "#1B3A6B" }}>
      {/* Top bar */}
      <div style={{ background: "#152f57", borderBottom: "1px solid #ffffff1a" }}>
        <div className="max-w-6xl mx-auto px-6 h-9 flex items-center justify-end gap-6">
          <a href="tel:+18622707055" className="flex items-center gap-1.5 text-xs transition-colors"
            style={{ color: "#ffffffcc", fontFamily: "Open Sans, sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#4BAF47")}
            onMouseLeave={e => (e.currentTarget.style.color = "#ffffffcc")}
          >
            <Phone className="w-3 h-3" />
            +1 (862) 270-7055
          </a>
          <span className="text-xs" style={{ color: "#ffffff66" }}>|</span>
          <span className="text-xs" style={{ color: "#ffffffcc", fontFamily: "Open Sans, sans-serif" }}>
            Kearny, NJ &amp; Northern New Jersey
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className={`transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16 lg:h-24" : "h-24"}`}>
          {/* Logo — transparent PNG with 3D depth + bump-up hover effect; shrinks on scroll (mobile) */}
          <button onClick={() => go("#home")} className="flex items-center relative z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/vanguard-janitorial-logo.png"
              alt="Stein Facility Services"
              className={`logo-img-lg logo-3d transition-all duration-300 ${scrolled ? "logo-shrink" : ""}`}
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                className="px-4 py-2 text-sm font-semibold transition-colors rounded"
                style={{ fontFamily: "Open Sans, sans-serif", color: "#ffffffcc" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.background = "#ffffff15"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#ffffffcc"; e.currentTarget.style.background = "transparent"; }}
              >{l.label}</button>
            ))}
            <button onClick={() => go("#quote")}
              className="ml-3 px-5 py-2 text-sm font-bold rounded transition-all duration-200"
              style={{ background: "#4BAF47", color: "#ffffff", fontFamily: "Montserrat, sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#3D9039")}
              onMouseLeave={e => (e.currentTarget.style.background = "#4BAF47")}
            >Free Quote</button>
          </nav>

          <button className="lg:hidden p-2" style={{ color: "#ffffff" }}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden flex flex-col" style={{ background: "#152f57", borderTop: "1px solid #ffffff1a" }}>
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => go(l.href)}
              className="text-left px-6 py-3.5 text-sm font-semibold border-b transition-colors"
              style={{ color: "#ffffffcc", borderColor: "#ffffff0f", fontFamily: "Open Sans, sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#4BAF47")}
              onMouseLeave={e => (e.currentTarget.style.color = "#ffffffcc")}
            >{l.label}</button>
          ))}
          <div className="px-6 py-4">
            <button onClick={() => go("#quote")}
              className="w-full py-3 text-sm font-bold rounded"
              style={{ background: "#4BAF47", color: "#ffffff", fontFamily: "Montserrat, sans-serif" }}
            >Get a Free Quote</button>
          </div>
        </div>
      )}
    </header>
  );
}
