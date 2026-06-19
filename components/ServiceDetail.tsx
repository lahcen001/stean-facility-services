import type { Service } from "@/lib/services";
import { Building2, Biohazard, ShoppingBag, UtensilsCrossed, ShoppingCart, Landmark, Layers, Wrench, CheckCircle2, MapPin, ArrowRight, Phone } from "lucide-react";

const icons = { Building2, Biohazard, ShoppingBag, UtensilsCrossed, ShoppingCart, Landmark, Layers, Wrench };

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  return (
    <>
      {/* Hero */}
      <section className="pt-[133px] relative" style={{ minHeight: "380px" }}>
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #1B3A6BEE 55%, #1B3A6B99)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <a href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold mb-6"
            style={{ color: "#ffffffaa", fontFamily: "Open Sans, sans-serif" }}>
            ← Back to All Services
          </a>
          <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5" style={{ background: "#4BAF47" }}>
            <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
          </div>
          <h1 className="font-black leading-tight mb-4 text-white"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontFamily: "Montserrat, sans-serif" }}>
            {service.title}
          </h1>
          <p className="text-base max-w-2xl" style={{ color: "#ffffffcc", fontFamily: "Open Sans, sans-serif" }}>
            {service.heroTagline}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#ffffff" }} className="py-14">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <p className="text-base leading-relaxed" style={{ color: "#444444", fontFamily: "Open Sans, sans-serif" }}>
            {service.intro}
          </p>
          <div className="rounded-lg overflow-hidden" style={{ boxShadow: "0 8px 28px #1B3A6B18" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.secondaryImage} alt={`${service.title} in progress`} className="w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* Sections */}
      <section style={{ background: "#F5F5F5" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {service.sections.map((sec) => (
            <div key={sec.heading}>
              <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
                {sec.heading}
              </h2>
              <div className="w-12 h-1 rounded mb-4" style={{ background: "#4BAF47" }} />
              {sec.body && (
                <p className="text-base leading-relaxed mb-5" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
                  {sec.body}
                </p>
              )}
              {sec.bullets && (
                <ul className="grid sm:grid-cols-2 gap-3">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm bg-white rounded-lg p-3"
                      style={{ color: "#444444", fontFamily: "Open Sans, sans-serif", border: "1px solid #DDDDDD" }}>
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#4BAF47" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section style={{ background: "#ffffff" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
            Serving Newark and Northern New Jersey
          </h2>
          <div className="w-12 h-1 rounded mb-5" style={{ background: "#4BAF47" }} />
          <p className="text-base leading-relaxed mb-6" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
            Stein Facility Services proudly provides {service.title.toLowerCase()} throughout:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {service.serviceAreas.map((area) => (
              <span key={area} className="inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-full"
                style={{ background: "#F5F5F5", color: "#1B3A6B", fontFamily: "Open Sans, sans-serif", border: "1px solid #DDDDDD" }}>
                <MapPin className="w-3.5 h-3.5" style={{ color: "#4BAF47" }} />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1B3A6B" }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Request a {service.title} Consultation
          </h2>
          <p className="text-base mb-8" style={{ color: "#ffffffcc", fontFamily: "Open Sans, sans-serif" }}>
            Stein Facility Services is ready to help. We provide customized cleaning programs designed to keep your facility clean, safe, and professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#quote"
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded text-sm transition-all duration-200"
              style={{ background: "#4BAF47", color: "#ffffff", fontFamily: "Montserrat, sans-serif" }}>
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+18622707055"
              className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded text-sm transition-all duration-200 border-2"
              style={{ color: "#ffffff", borderColor: "#ffffff55", fontFamily: "Open Sans, sans-serif" }}>
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
