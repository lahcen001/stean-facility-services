"use client";

import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "#0B1F33" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Logo variant="light" className="mb-5" />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#D9E1E899", fontFamily: "Open Sans, sans-serif" }}>
              Locally owned, owner-operated commercial cleaning — licensed, insured,
              and personally committed to every job.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#1FA3A3", fontFamily: "Montserrat, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#home",     label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#why-us",  label: "Why Choose Us" },
                { href: "#quote",    label: "Free Quote" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() =>
                      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm transition-colors"
                    style={{ color: "#D9E1E899", fontFamily: "Open Sans, sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1FA3A3")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#D9E1E899")}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#1FA3A3", fontFamily: "Montserrat, sans-serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@vanguard-janitorial.com"
                  className="flex items-center gap-2.5 text-sm transition-colors"
                  style={{ color: "#D9E1E899", fontFamily: "Open Sans, sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1FA3A3")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D9E1E899")}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#1FA3A3" }} />
                  info@vanguard-janitorial.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18622707055"
                  className="flex items-center gap-2.5 text-sm transition-colors"
                  style={{ color: "#D9E1E899", fontFamily: "Open Sans, sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1FA3A3")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D9E1E899")}
                >
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#1FA3A3" }} />
                  +1 (862) 270-7055
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid #FFFFFF14" }}
        >
          <p className="text-xs" style={{ color: "#D9E1E866", fontFamily: "Open Sans, sans-serif" }}>
            &copy; {new Date().getFullYear()} Vanguard Janitorial. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="text-xs font-semibold transition-colors flex items-center gap-1.5"
            style={{ color: "#A7D129", fontFamily: "Montserrat, sans-serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C8E56A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#A7D129")}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
