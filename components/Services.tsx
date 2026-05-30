"use client";

import { Building2, Layers, Biohazard } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Cleaning",
    subtitle: "Offices & Retail Spaces",
    desc: "Daily or scheduled maintenance cleaning for offices and retail spaces. I keep your environment spotless, professional, and ready for business.",
    highlights: ["Office spaces", "Retail stores", "Small businesses"],
    image: "https://images.pexels.com/photos/6197117/pexels-photo-6197117.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Layers,
    title: "Deep Carpet & Floor Care",
    subtitle: "Mopping, Waxing & Buffing",
    desc: "Comprehensive floor care that extends the life of your surfaces. From carpet extraction to high-gloss floor buffing — we restore and maintain.",
    highlights: ["Carpet deep-cleaning", "Strip & wax floors", "Buffing & polishing"],
    image: "https://images.pexels.com/photos/4107287/pexels-photo-4107287.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Biohazard,
    title: "Disinfection & Sanitization",
    subtitle: "Specialized Pathogen Control",
    desc: "Hospital-grade disinfection protocols for high-touch surfaces and sensitive environments. Reduce risk and protect your team and customers.",
    highlights: ["EPA-approved products", "High-touch surface focus", "Medical & facility-grade"],
    image: "https://images.pexels.com/photos/6195128/pexels-photo-6195128.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function Services() {
  const go = () => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" style={{ background: "#F4F7F9" }} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#1FA3A3", fontFamily: "Open Sans, sans-serif" }}>What We Do</p>
          <h2 className="text-4xl font-extrabold leading-tight mb-4"
            style={{ color: "#0B1F33", fontFamily: "Montserrat, sans-serif" }}>Core Services</h2>
          <p className="text-base leading-relaxed"
            style={{ color: "#52606D", fontFamily: "Open Sans, sans-serif" }}>
            Every job is done personally — no subcontractors, no shortcuts. Professional-grade equipment and a satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, subtitle, desc, highlights, image }) => (
            <div key={title}
              className="bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              style={{ border: "1px solid #D9E1E8", boxShadow: "0 1px 3px #0B1F3308" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 32px #0B1F3318")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 1px 3px #0B1F3308")}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={image} alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0B1F3355, transparent)" }} />
                <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.92)" }}>
                  <Icon className="w-5 h-5" style={{ color: "#1FA3A3" }} strokeWidth={1.75} />
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1" style={{ color: "#0B1F33", fontFamily: "Montserrat, sans-serif" }}>{title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide mb-4"
                  style={{ color: "#1FA3A3", fontFamily: "Open Sans, sans-serif" }}>{subtitle}</p>
                <p className="text-sm leading-relaxed mb-6 flex-1"
                  style={{ color: "#52606D", fontFamily: "Open Sans, sans-serif" }}>{desc}</p>
                <ul className="space-y-2">
                  {highlights.map(h => (
                    <li key={h} className="flex items-center gap-2.5 text-sm"
                      style={{ color: "#52606D", fontFamily: "Open Sans, sans-serif" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#1FA3A3" }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={go}
            className="inline-flex items-center gap-2 text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-colors duration-200"
            style={{ background: "#0B1F33", fontFamily: "Montserrat, sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1FA3A3")}
            onMouseLeave={e => (e.currentTarget.style.background = "#0B1F33")}
          >Request a Custom Cleaning Plan</button>
        </div>
      </div>
    </section>
  );
}
