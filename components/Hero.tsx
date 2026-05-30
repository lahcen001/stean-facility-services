"use client";

import { ArrowRight, BadgeCheck, Star } from "lucide-react";

export default function Hero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{ background: "#FFFFFF" }} className="flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase"
            style={{ color: "#1FA3A3", background: "#1FA3A308", border: "1px solid #1FA3A330", fontFamily: "Open Sans, sans-serif" }}>
            <BadgeCheck className="w-3.5 h-3.5" />
            Locally Owned &amp; Operated
          </div>

          <h1 className="font-black leading-[1.04] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem,4.5vw,3.5rem)", color: "#0B1F33", fontFamily: "Montserrat, sans-serif" }}>
            Professional<br />
            <span style={{ color: "#1FA3A3" }}>Janitorial</span><br />
            Services Made<br />
            Simple.
          </h1>

          <p className="text-lg leading-relaxed mb-8 max-w-md"
            style={{ color: "#52606D", fontFamily: "Open Sans, sans-serif" }}>
            Professional cleaning for offices, retail spaces, and small
            facilities. Licensed, insured, and committed to spotless results
            every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Primary CTA — lime accent per brand guidelines */}
            <button onClick={() => go("#quote")}
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200"
              style={{ background: "#A7D129", color: "#0B1F33", fontFamily: "Montserrat, sans-serif", boxShadow: "0 4px 14px #A7D12940" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#96BC22")}
              onMouseLeave={e => (e.currentTarget.style.background = "#A7D129")}
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => go("#services")}
              className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-xl text-sm transition-colors duration-200"
              style={{ color: "#0B1F33", background: "#F4F7F9", border: "1px solid #D9E1E8", fontFamily: "Open Sans, sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#D9E1E8")}
              onMouseLeave={e => (e.currentTarget.style.background = "#F4F7F9")}
            >
              See Our Services
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["#0B1F33","#1FA3A3","#52606D"].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: c, fontFamily: "Montserrat, sans-serif" }}>
                  {["J","M","R"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: "#52606D", fontFamily: "Open Sans, sans-serif" }}>
              <strong style={{ color: "#0B1F33" }}>Trusted by local businesses</strong> in the area
            </p>
          </div>
        </div>

        {/* Right — photo */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ border: "1px solid #D9E1E8" }}>
              <img src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional janitorial cleaning" className="w-full h-80 object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-24 rounded-b-3xl"
                style={{ background: "linear-gradient(to top, #0B1F33BB, transparent)" }} />
            </div>
            {/* Badge bottom-left */}
            <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3"
              style={{ border: "1px solid #D9E1E8" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#1FA3A315" }}>
                <BadgeCheck className="w-5 h-5" style={{ color: "#1FA3A3" }} />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: "#52606D", fontFamily: "Open Sans, sans-serif" }}>Status</p>
                <p className="text-sm font-bold" style={{ color: "#0B1F33", fontFamily: "Montserrat, sans-serif" }}>Licensed &amp; Insured</p>
              </div>
            </div>
            {/* Badge top-right */}
            <div className="absolute -top-4 -right-4 text-white rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2"
              style={{ background: "#0B1F33" }}>
              <Star className="w-4 h-4" style={{ color: "#A7D129" }} fill="#A7D129" />
              <div>
                <p className="text-[10px] font-semibold opacity-70" style={{ fontFamily: "Open Sans, sans-serif" }}>Rated</p>
                <p className="text-xs font-bold leading-none" style={{ fontFamily: "Montserrat, sans-serif" }}>Top Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
