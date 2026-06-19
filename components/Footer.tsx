"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { services } from "@/lib/services";

const serviceAreas = [
  "Newark, NJ", "Harrison, NJ", "Jersey City, NJ",
  "Hoboken, NJ", "Secaucus, NJ", "Lyndhurst, NJ",
  "North Arlington, NJ", "Belleville, NJ", "Nutley, NJ",
  "Hudson County", "Essex County", "Bergen County",
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const go = (href: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#1B3A6B" }}>
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/vanguard-janitorial-logo.png"
              alt="Stein Facility Services"
              className="logo-img mb-5"
            />
            <p className="text-sm leading-relaxed mb-5"
              style={{ color: "#ffffffaa", fontFamily: "Open Sans, sans-serif" }}>
              Locally owned commercial cleaning company serving Newark and Northern New Jersey.
              Licensed, insured, and committed to consistent results.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+18622707055" className="flex items-center gap-2.5 text-sm transition-colors"
                style={{ color: "#ffffffaa", fontFamily: "Open Sans, sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#4BAF47")}
                onMouseLeave={e => (e.currentTarget.style.color = "#ffffffaa")}
              >
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#4BAF47" }} />
                +1 (862) 270-7055
              </a>
              <a href="mailto:info@steinfacilityservices.com" className="flex items-center gap-2.5 text-sm transition-colors"
                style={{ color: "#ffffffaa", fontFamily: "Open Sans, sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#4BAF47")}
                onMouseLeave={e => (e.currentTarget.style.color = "#ffffffaa")}
              >
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#4BAF47" }} />
                info@steinfacilityservices.com
              </a>
              <div className="flex items-start gap-2.5 text-sm"
                style={{ color: "#ffffffaa", fontFamily: "Open Sans, sans-serif" }}>
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#4BAF47" }} />
                Newark, NJ &amp; Northern New Jersey
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "#4BAF47", fontFamily: "Montserrat, sans-serif" }}>Our Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`}
                    className="text-sm text-left transition-colors flex items-center gap-1.5"
                    style={{ color: "#ffffffaa", fontFamily: "Open Sans, sans-serif" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#4BAF47")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#ffffffaa")}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#4BAF47" }} />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "#4BAF47", fontFamily: "Montserrat, sans-serif" }}>Service Areas</h4>
            <ul className="space-y-2.5">
              {serviceAreas.map(a => (
                <li key={a} className="text-sm flex items-center gap-1.5"
                  style={{ color: "#ffffffaa", fontFamily: "Open Sans, sans-serif" }}>
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#4BAF47" }} />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links + CTA */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5"
              style={{ color: "#4BAF47", fontFamily: "Montserrat, sans-serif" }}>Quick Links</h4>
            <ul className="space-y-2.5 mb-8">
              {[
                { href: "#home",     label: "Home" },
                { href: "#about",    label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#why-us",   label: "Why Choose Us" },
                { href: "#quote",    label: "Free Quote" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <button onClick={() => go(href)}
                    className="text-sm transition-colors"
                    style={{ color: "#ffffffaa", fontFamily: "Open Sans, sans-serif" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#4BAF47")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#ffffffaa")}
                  >{label}</button>
                </li>
              ))}
              <li>
                <a href="/careers"
                  className="text-sm transition-colors"
                  style={{ color: "#ffffffaa", fontFamily: "Open Sans, sans-serif" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#4BAF47")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#ffffffaa")}
                >Careers</a>
              </li>
            </ul>
            <button onClick={() => go("#quote")}
              className="w-full py-3 text-sm font-bold rounded transition-colors duration-200"
              style={{ background: "#4BAF47", color: "#ffffff", fontFamily: "Montserrat, sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#3D9039")}
              onMouseLeave={e => (e.currentTarget.style.background = "#4BAF47")}
            >Get a Free Quote</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ background: "#152f57", borderTop: "1px solid #ffffff14" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-center" style={{ color: "#ffffff66", fontFamily: "Open Sans, sans-serif" }}>
            &copy; {new Date().getFullYear()} Stein Facility Services. All rights reserved. | Newark, NJ
          </p>
          <p className="text-xs text-center" style={{ color: "#ffffff44", fontFamily: "Open Sans, sans-serif" }}>
            Serving Newark · Jersey City · Hoboken · Harrison · Bergen County · Hudson County · Essex County
          </p>
          <button onClick={scrollTop}
            className="text-xs font-semibold transition-colors"
            style={{ color: "#4BAF47", fontFamily: "Montserrat, sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#4BAF47")}
          >Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
