"use client";

import { ShieldCheck, ClipboardList, UserCheck, ThumbsUp, Clock, Star } from "lucide-react";

const pillars = [
  { icon: ShieldCheck,    title: "100% Licensed & Insured",     desc: "Full liability coverage so your property and people are always protected. You can trust Stein Facility Services to meet compliance requirements." },
  { icon: ClipboardList,  title: "Tailored Cleaning Programs",  desc: "Customized schedules and checklists built around your facility's unique needs, industry, and operational requirements." },
  { icon: UserCheck,      title: "Dedicated, Accountable Team", desc: "A professional crew that treats every space with care. Quality control inspections and open communication on every job." },
  { icon: Clock,          title: "Dependable Scheduling",       desc: "We show up when we say we will. Consistent service you can build your operations around — no missed visits, no surprises." },
  { icon: ThumbsUp,       title: "No Subcontractors",           desc: "Every job is performed by our vetted, trained team — not outsourced. You know exactly who is in your facility." },
  { icon: Star,           title: "Long-Term Partnerships",      desc: "We build lasting relationships through professionalism, accountability, and measurable results your team will notice." },
];

export default function ValuePillars() {
  return (
    <section id="why-us" style={{ background: "#1B3A6B" }} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>Why Choose Us</p>
          <h2 className="text-3xl font-extrabold text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}>
            Why Businesses Choose Stein Facility Services
          </h2>
          <div className="w-16 h-1 mx-auto rounded" style={{ background: "#4BAF47" }} />
          <p className="mt-4 text-base max-w-2xl mx-auto" style={{ color: "#ffffffbb", fontFamily: "Open Sans, sans-serif" }}>
            Many commercial cleaning companies focus on completing tasks. Stein Facility Services focuses on delivering results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="rounded-lg p-7 transition-all duration-300"
              style={{ background: "#ffffff0d", border: "1px solid #ffffff1a" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#ffffff15"; (e.currentTarget as HTMLDivElement).style.borderColor = "#4BAF4755"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#ffffff0d"; (e.currentTarget as HTMLDivElement).style.borderColor = "#ffffff1a"; }}
            >
              <div className="w-12 h-12 rounded flex items-center justify-center mb-5"
                style={{ background: "#4BAF4720" }}>
                <Icon className="w-6 h-6" style={{ color: "#4BAF47" }} strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-white mb-2.5"
                style={{ fontFamily: "Montserrat, sans-serif" }}>{title}</h3>
              <p className="text-sm leading-relaxed"
                style={{ color: "#ffffffaa", fontFamily: "Open Sans, sans-serif" }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-14 text-center rounded-lg py-8 px-6" style={{ background: "#4BAF47" }}>
          <p className="text-lg font-bold text-white mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
            &ldquo;Your Facility. Our Reputation.&rdquo;
          </p>
          <p className="text-sm text-white opacity-90" style={{ fontFamily: "Open Sans, sans-serif" }}>
            We understand that your facility is more than a building — protecting your reputation is our responsibility.
          </p>
        </div>
      </div>
    </section>
  );
}
