"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home",          href: "#home" },
  { label: "Services",      href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Free Quote",    href: "#quote" },
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
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "#FFFFFF",
        borderBottom: scrolled ? "1px solid #D9E1E8" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 8px #0B1F3310" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => go("#home")}><Logo variant="dark" /></button>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 3).map((l) => (
            <button key={l.href} onClick={() => go(l.href)}
              className="text-sm font-semibold transition-colors"
              style={{ fontFamily: "Open Sans, sans-serif", color: "#0B1F33" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#1FA3A3")}
              onMouseLeave={e => (e.currentTarget.style.color = "#0B1F33")}
            >{l.label}</button>
          ))}
          {/* Lime CTA — used sparingly per brand guidelines */}
          <button onClick={() => go("#quote")}
            className="text-sm font-bold px-5 py-2 rounded-lg transition-all duration-200"
            style={{ background: "#A7D129", color: "#0B1F33", fontFamily: "Montserrat, sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#96BC22")}
            onMouseLeave={e => (e.currentTarget.style.background = "#A7D129")}
          >Free Quote</button>
        </nav>

        <button className="md:hidden p-2" style={{ color: "#0B1F33" }}
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-1"
          style={{ background: "#FFFFFF", borderTop: "1px solid #D9E1E8" }}>
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => go(l.href)}
              className="text-left py-2.5 text-sm font-semibold"
              style={{ color: l.label === "Free Quote" ? "#A7D129" : "#0B1F33", fontFamily: "Open Sans, sans-serif" }}
            >{l.label}</button>
          ))}
        </div>
      )}
    </header>
  );
}
