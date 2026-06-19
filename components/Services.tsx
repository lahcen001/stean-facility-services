"use client";

import {
  Building2, Biohazard, ShoppingBag, UtensilsCrossed,
  ShoppingCart, Landmark, Layers, Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { services as allServices, type Service } from "@/lib/services";

const icons = { Building2, Biohazard, ShoppingBag, UtensilsCrossed, ShoppingCart, Landmark, Layers, Wrench };

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = icons[service.icon];

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <a ref={ref} href={`/services/${service.slug}`}
      className="bg-white rounded-lg overflow-hidden group flex flex-col transition-all duration-500"
      style={{
        border: "1px solid #DDDDDD",
        borderTop: "4px solid #1B3A6B",
        boxShadow: "0 2px 8px #00000008",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${(index % 3) * 80}ms`,
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderTopColor = "#4BAF47"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px #1B3A6B18"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderTopColor = "#1B3A6B"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 8px #00000008"; }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img src={service.image} alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1B3A6B88, transparent)" }} />
        <div className="absolute bottom-3 left-3 w-9 h-9 rounded flex items-center justify-center"
          style={{ background: "#1B3A6B" }}>
          <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
        </div>
      </div>
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-sm font-bold mb-2" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>{service.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "#666666", fontFamily: "Open Sans, sans-serif" }}>{service.shortDesc}</p>
      </div>
    </a>
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
          {allServices.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
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
