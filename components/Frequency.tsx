"use client";

import { CalendarDays, Repeat2, RotateCcw, Star } from "lucide-react";

const plans = [
  {
    icon: CalendarDays, label: "Daily Cleaning", freq: "Every day",
    desc: "Best for high-traffic offices, lobbies, and facilities that need consistent upkeep throughout the week.",
    badge: "Most Popular", badgeBg: "#1FA3A3",
  },
  {
    icon: Repeat2, label: "Weekly Cleaning", freq: "Once a week",
    desc: "Ideal for small to mid-size offices that need regular maintenance without a daily commitment.",
    badge: null, badgeBg: "",
  },
  {
    icon: RotateCcw, label: "Bi-Weekly Cleaning", freq: "Every 2 weeks",
    desc: "A flexible option for businesses with lighter foot traffic that still want a consistently clean space.",
    badge: null, badgeBg: "",
  },
  {
    icon: Star, label: "Monthly Deep Clean", freq: "Once a month",
    desc: "Comprehensive top-to-bottom deep cleaning — perfect as a standalone or add-on to existing service.",
    badge: "Deep Clean", badgeBg: "#0B1F33",
  },
];

export default function Frequency() {
  return (
    <section style={{ background: "#F4F7F9" }} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#1FA3A3", fontFamily: "Open Sans, sans-serif" }}>Flexible Scheduling</p>
          <h2 className="text-4xl font-extrabold leading-tight mb-4"
            style={{ color: "#0B1F33", fontFamily: "Montserrat, sans-serif" }}>Plans That Fit Your Business</h2>
          <p className="text-base leading-relaxed"
            style={{ color: "#52606D", fontFamily: "Open Sans, sans-serif" }}>
            Choose the cleaning frequency that works for your schedule and budget. Every plan is fully customizable.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map(({ icon: Icon, label, freq, desc, badge, badgeBg }) => (
            <div key={label} className="relative rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 bg-white"
              style={{ border: "1px solid #D9E1E8" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1FA3A355";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px #1FA3A318";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#D9E1E8";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {badge && (
                <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase text-white"
                  style={{ background: badgeBg, fontFamily: "Montserrat, sans-serif" }}>{badge}</span>
              )}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#F4F7F9" }}>
                <Icon className="w-5 h-5" style={{ color: "#1FA3A3" }} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-base font-bold" style={{ color: "#0B1F33", fontFamily: "Montserrat, sans-serif" }}>{label}</h3>
                <p className="text-xs font-semibold mt-0.5" style={{ color: "#1FA3A3", fontFamily: "Open Sans, sans-serif" }}>{freq}</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#52606D", fontFamily: "Open Sans, sans-serif" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
