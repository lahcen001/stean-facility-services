"use client";

import { CalendarDays, Repeat2, RotateCcw, Star } from "lucide-react";

const plans = [
  {
    icon: CalendarDays, label: "Daily Cleaning", freq: "Every Day",
    desc: "Best for high-traffic offices, lobbies, and facilities that need consistent upkeep throughout the week.",
    highlight: true,
  },
  {
    icon: Repeat2, label: "Weekly Cleaning", freq: "Once a Week",
    desc: "Ideal for small to mid-size offices that need regular maintenance without a daily commitment.",
    highlight: false,
  },
  {
    icon: RotateCcw, label: "Bi-Weekly Cleaning", freq: "Every 2 Weeks",
    desc: "A flexible option for businesses with lighter foot traffic that still want a consistently clean space.",
    highlight: false,
  },
  {
    icon: Star, label: "Monthly Deep Clean", freq: "Once a Month",
    desc: "Comprehensive top-to-bottom deep cleaning — perfect as a standalone or add-on to existing service.",
    highlight: false,
  },
];

export default function Frequency() {
  return (
    <section style={{ background: "#F5F5F5" }} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>Flexible Scheduling</p>
          <h2 className="text-3xl font-extrabold mb-4"
            style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>Plans That Fit Your Business</h2>
          <div className="w-16 h-1 mx-auto rounded mb-4" style={{ background: "#4BAF47" }} />
          <p className="text-base max-w-xl mx-auto"
            style={{ color: "#666666", fontFamily: "Open Sans, sans-serif" }}>
            Choose the cleaning frequency that works for your schedule and budget. Every plan is fully customizable.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map(({ icon: Icon, label, freq, desc, highlight }) => (
            <div key={label}
              className="rounded-lg p-7 flex flex-col gap-4 transition-all duration-300"
              style={{
                background: highlight ? "#1B3A6B" : "#ffffff",
                border: highlight ? "2px solid #4BAF47" : "1px solid #DDDDDD",
              }}
              onMouseEnter={e => {
                if (!highlight) {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#1B3A6B";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px #1B3A6B18";
                }
              }}
              onMouseLeave={e => {
                if (!highlight) {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#DDDDDD";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }
              }}
            >
              {highlight && (
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full w-fit uppercase tracking-wide"
                  style={{ background: "#4BAF47", color: "#ffffff", fontFamily: "Montserrat, sans-serif" }}>
                  Most Popular
                </span>
              )}
              <div className="w-11 h-11 rounded flex items-center justify-center"
                style={{ background: highlight ? "#ffffff15" : "#1B3A6B10" }}>
                <Icon className="w-5 h-5" style={{ color: highlight ? "#4BAF47" : "#1B3A6B" }} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-base font-bold" style={{ color: highlight ? "#ffffff" : "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>{label}</h3>
                <p className="text-xs font-semibold mt-0.5" style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>{freq}</p>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: highlight ? "#ffffffaa" : "#666666", fontFamily: "Open Sans, sans-serif" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
