"use client";

import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  "https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2606383/pexels-photo-2606383.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/6223012/pexels-photo-6223012.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const bullets = [
  "Licensed & Insured",
  "Locally Owned & Operated — Newark, NJ",
  "Consistent, Dependable Service",
  "Customized Cleaning Programs",
];

export default function Hero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="pt-[133px]">
      {/* Full-width hero banner */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: "560px" }}>
        {/* Slideshow BG */}
        {slides.map((src, i) => (
          <img key={src} src={src} alt="Professional cleaning"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #1B3A6BEE 50%, #1B3A6B88)" }} />

        <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-3 animate-fadeIn"
              style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>
              Newark, NJ &amp; Northern New Jersey
            </p>
            <h1 className="font-black leading-tight mb-6 text-white"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontFamily: "Montserrat, sans-serif" }}>
              Professional<br />
              Commercial Janitorial<br />
              <span style={{ color: "#4BAF47" }}>Services You Can Trust</span>
            </h1>
            <p className="text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: "#ffffffcc", fontFamily: "Open Sans, sans-serif" }}>
              At Stein Facility Services, we provide reliable commercial cleaning and janitorial services
              designed to help businesses maintain clean, healthy, and professional facilities
              throughout Newark and Northern New Jersey.
            </p>
            <ul className="space-y-2.5 mb-8">
              {bullets.map(b => (
                <li key={b} className="flex items-center gap-2.5 text-sm"
                  style={{ color: "#ffffffdd", fontFamily: "Open Sans, sans-serif" }}>
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#4BAF47" }} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => go("#quote")}
                className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded text-sm transition-all duration-200"
                style={{ background: "#4BAF47", color: "#ffffff", fontFamily: "Montserrat, sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#3D9039")}
                onMouseLeave={e => (e.currentTarget.style.background = "#4BAF47")}
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </button>
              <a href="tel:+18622707055"
                className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded text-sm transition-all duration-200 border-2"
                style={{ color: "#ffffff", borderColor: "#ffffff55", fontFamily: "Open Sans, sans-serif" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#4BAF47"; (e.currentTarget as HTMLAnchorElement).style.color = "#4BAF47"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff55"; (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
              >
                <Phone className="w-4 h-4" /> Call Us Now
              </a>
            </div>

            {/* Slide dots */}
            <div className="flex gap-2 mt-8">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === current ? "24px" : "8px", height: "8px", background: i === current ? "#4BAF47" : "#ffffff55" }}
                />
              ))}
            </div>
          </div>

          {/* Right stat box */}
          <div className="hidden md:block">
            <div className="rounded-lg p-8" style={{ background: "#ffffff12", border: "1px solid #ffffff1a", backdropFilter: "blur(10px)" }}>
              <p className="text-xs uppercase font-bold tracking-widest mb-6" style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>
                Your Facility. Our Reputation.
              </p>
              {[
                { num: "10+", label: "Years of Experience" },
                { num: "100+", label: "Facilities Serviced" },
                { num: "15+", label: "Cities Served in NJ" },
                { num: "100%", label: "Satisfaction Focused" },
              ].map(({ num, label }) => (
                <div key={label} className="flex items-center gap-4 py-3.5 border-b last:border-0" style={{ borderColor: "#ffffff15" }}>
                  <span className="text-3xl font-black" style={{ color: "#4BAF47", fontFamily: "Montserrat, sans-serif" }}>{num}</span>
                  <span className="text-sm" style={{ color: "#ffffffcc", fontFamily: "Open Sans, sans-serif" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Green banner strip */}
      <div style={{ background: "#4BAF47" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {["Office Cleaning", "Medical Facility Cleaning", "Retail Cleaning", "Restaurant Cleaning", "Supermarket Cleaning", "Government Buildings"].map(s => (
            <span key={s} className="text-sm font-semibold text-white flex items-center gap-2"
              style={{ fontFamily: "Open Sans, sans-serif" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-white opacity-70" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
