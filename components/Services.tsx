"use client";

import {
  Building2, Layers, Biohazard, ShoppingBag,
  Dumbbell, Users, Wrench, Leaf, Sparkles, School
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Building2,
    title: "Office Cleaning Services",
    desc: "Comprehensive daily or scheduled office cleaning. Workstations, conference rooms, reception areas, kitchens, restrooms, and common areas.",
    image: "https://images.pexels.com/photos/2606383/pexels-photo-2606383.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Biohazard,
    title: "Medical Office Cleaning",
    desc: "Specialized sanitation protocols for waiting rooms, exam rooms, high-touch surfaces, and administrative offices.",
    image: "https://images.pexels.com/photos/9198292/pexels-photo-9198292.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: ShoppingBag,
    title: "Retail Store Cleaning",
    desc: "Keep your storefront spotless and welcoming. We service retail floors, displays, fitting rooms, and customer-facing areas.",
    image: "https://images.pexels.com/photos/6223026/pexels-photo-6223026.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness Center Cleaning",
    desc: "Equipment cleaning, locker room sanitation, restroom disinfection, floor care, and high-touch surface treatment.",
    image: "https://images.pexels.com/photos/6196694/pexels-photo-6196694.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: School,
    title: "School & Office Building Cleaning",
    desc: "Safe, thorough cleaning for educational and multi-tenant office buildings — classrooms, lobbies, hallways, and restrooms.",
    image: "https://images.pexels.com/photos/16370914/pexels-photo-16370914.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Users,
    title: "Day Porter Services",
    desc: "On-site janitorial support throughout the business day — restroom checks, lobby upkeep, and immediate response to spills.",
    image: "https://images.pexels.com/photos/5230076/pexels-photo-5230076.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Layers,
    title: "Floor Care & Maintenance",
    desc: "Carpet deep-cleaning, strip & wax, buffing, polishing — we restore and extend the life of all floor types.",
    image: "https://images.pexels.com/photos/6196689/pexels-photo-6196689.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Sparkles,
    title: "Restroom Sanitization",
    desc: "Thorough disinfection of restrooms including fixtures, floors, mirrors, dispensers, and high-touch contact points.",
    image: "https://images.pexels.com/photos/6223025/pexels-photo-6223025.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Wrench,
    title: "Post-Construction Cleanup",
    desc: "Remove debris, dust, and construction residue to prepare your facility for occupancy after build-out or renovation.",
    image: "https://images.pexels.com/photos/962984/pexels-photo-962984.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Leaf,
    title: "Green Cleaning Solutions",
    desc: "Environmentally responsible cleaning using EPA-approved products that are effective and safe for people and the planet.",
    image: "https://images.pexels.com/photos/6197106/pexels-photo-6197106.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function ServiceCard({ icon: Icon, title, desc, image, index }: typeof services[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}
      className="bg-white rounded-lg overflow-hidden group flex flex-col transition-all duration-500"
      style={{
        border: "1px solid #DDDDDD",
        borderTop: "4px solid #1B3A6B",
        boxShadow: "0 2px 8px #00000008",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${(index % 3) * 80}ms`,
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "#4BAF47"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px #1B3A6B18"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderTopColor = "#1B3A6B"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px #00000008"; }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img src={image} alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1B3A6B88, transparent)" }} />
        <div className="absolute bottom-3 left-3 w-9 h-9 rounded flex items-center justify-center"
          style={{ background: "#1B3A6B" }}>
          <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
        </div>
      </div>
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-sm font-bold mb-2" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#666666", fontFamily: "Open Sans, sans-serif" }}>{desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const go = () => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" style={{ background: "#F5F5F5" }} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>What We Do</p>
          <h2 className="text-3xl font-extrabold mb-4"
            style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
            Comprehensive Commercial Cleaning Services
          </h2>
          <div className="w-16 h-1 mx-auto rounded mb-4" style={{ background: "#4BAF47" }} />
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#666666", fontFamily: "Open Sans, sans-serif" }}>
            Every facility has unique requirements, which is why we develop customized cleaning programs
            designed around your operations, schedule, and priorities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>

        <div className="mt-12 text-center">
          <button onClick={go}
            className="inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded text-sm text-white transition-colors duration-200"
            style={{ background: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#4BAF47")}
            onMouseLeave={e => (e.currentTarget.style.background = "#1B3A6B")}
          >Request a Custom Cleaning Plan</button>
        </div>
      </div>
    </section>
  );
}
