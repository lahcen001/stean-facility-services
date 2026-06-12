"use client";

import { useEffect, useRef, useState } from "react";

const photos = [
  { src: "https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&w=600",   label: "Office Buildings" },
  { src: "https://images.pexels.com/photos/6195118/pexels-photo-6195118.jpeg?auto=compress&cs=tinysrgb&w=600",   label: "Office Cleaning" },
  { src: "https://images.pexels.com/photos/2606383/pexels-photo-2606383.jpeg?auto=compress&cs=tinysrgb&w=600",   label: "Business Centers" },
  { src: "https://images.pexels.com/photos/6223026/pexels-photo-6223026.jpeg?auto=compress&cs=tinysrgb&w=600",   label: "Window Cleaning" },
  { src: "https://images.pexels.com/photos/16370914/pexels-photo-16370914.jpeg?auto=compress&cs=tinysrgb&w=600", label: "Modern Facilities" },
];

export default function GalleryStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#ffffff" }} className="py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>Our Work</p>
          <h2 className="text-3xl font-extrabold mb-4"
            style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>See the Stein Difference</h2>
          <div className="w-16 h-1 mx-auto rounded" style={{ background: "#4BAF47" }} />
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {photos.map(({ src, label }, i) => (
            <div key={label}
              className="relative group rounded-lg overflow-hidden aspect-square transition-all duration-600"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.92)",
                transitionDelay: `${i * 100}ms`,
                transitionDuration: "500ms",
              }}
              onMouseEnter={e => (e.currentTarget.style.outline = "3px solid #4BAF47")}
              onMouseLeave={e => (e.currentTarget.style.outline = "none")}
            >
              <img src={src} alt={label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, #1B3A6BCC, transparent)" }} />
              <p className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2"
                style={{ fontFamily: "Open Sans, sans-serif" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
