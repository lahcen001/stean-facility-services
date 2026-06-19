"use client";

import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const values = [
  "Consistent service",
  "Professional communication",
  "Attention to detail",
  "Dependable scheduling",
  "Responsive support",
  "Measurable results",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" style={{ background: "#ffffff" }} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>
            About Stein Facility Services
          </p>
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
            Built on Professionalism. Driven by Results.
          </h2>
          <div className="w-16 h-1 mx-auto rounded" style={{ background: "#4BAF47" }} />
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - image with fade-in-left */}
          <div className="relative transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-40px)" }}>
            <img
              src="https://images.pexels.com/photos/6195118/pexels-photo-6195118.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional office cleaning team"
              className="w-full rounded-lg object-cover"
              style={{ height: "400px", border: "4px solid #1B3A6B" }}
            />
            {/* Overlay badge */}
            <div className="absolute -bottom-5 -right-5 rounded-lg px-6 py-4 shadow-xl"
              style={{ background: "#1B3A6B" }}>
              <p className="text-2xl font-black text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>10+</p>
              <p className="text-xs text-white opacity-80" style={{ fontFamily: "Open Sans, sans-serif" }}>Years of Excellence</p>
            </div>
            {/* Top badge */}
            <div className="absolute -top-4 -left-4 rounded-lg px-5 py-3 shadow-xl"
              style={{ background: "#4BAF47" }}>
              <p className="text-xs font-bold text-white uppercase tracking-wide" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Licensed &amp; Insured
              </p>
            </div>
          </div>

          {/* Right - text with fade-in-right */}
          <div className="transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(40px)" }}>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
              At Stein Facility Services, we believe a clean facility is more than just an appearance. It is a reflection
              of your organization, your standards, and your commitment to the people who walk through
              your doors every day.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
              Founded in <strong style={{ color: "#1B3A6B" }}>Newark, New Jersey</strong>, Stein Facility Services was created to provide businesses
              with a dependable commercial cleaning partner focused on consistency, accountability, and
              exceptional service. We understand that business owners, property managers, and facility
              directors need more than a cleaning company — they need a team they can trust.
            </p>
            <p className="text-base leading-relaxed mb-7" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
              The name <strong style={{ color: "#1B3A6B" }}>Stein Facility Services</strong> represents leadership, innovation, and setting the
              standard for others to follow. Our goal is to help organizations create healthier, safer,
              and more professional environments where employees can thrive.
            </p>

            <h3 className="text-lg font-bold mb-4" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
              Every Client Deserves:
            </h3>
            <ul className="grid grid-cols-2 gap-2.5">
              {values.map(v => (
                <li key={v} className="flex items-center gap-2 text-sm"
                  style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#4BAF47" }} />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
