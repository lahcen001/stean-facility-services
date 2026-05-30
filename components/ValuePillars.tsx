import { ShieldCheck, ClipboardList, UserCheck } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "100% Licensed & Insured",   desc: "Full liability coverage so your property and people are always protected." },
  { icon: ClipboardList, title: "Tailored Cleaning Plans",  desc: "Custom schedules and checklists built around your facility's unique needs." },
  { icon: UserCheck,  title: "Small Team, Big Standards",   desc: "A dedicated crew that treats every space like it's our own — quality you can count on every visit." },
];

export default function ValuePillars() {
  return (
    <section id="why-us" style={{ background: "#0B1F33" }} className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "#FFFFFF14" }}>
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="px-8 py-8 flex items-start gap-5">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#1FA3A315" }}>
                <Icon className="w-5 h-5" style={{ color: "#1FA3A3" }} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#D9E1E899", fontFamily: "Open Sans, sans-serif" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
