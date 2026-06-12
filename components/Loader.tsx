"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const pct = Math.min(100, Math.round(((Date.now() - start) / 2800) * 100));
      setProgress(pct);
    }, 30);

    const hideTimer = setTimeout(() => setHidden(true), 3000);
    const removeTimer = setTimeout(() => setRemoved(true), 3500);
    return () => { clearInterval(tick); clearTimeout(hideTimer); clearTimeout(removeTimer); };
  }, []);

  if (removed) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-500"
      style={{
        background: "radial-gradient(circle at 50% 50%, #234a85 0%, #1B3A6B 60%, #122a52 100%)",
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
      }}
    >
      {/* Floating ambient particles */}
      <div className="loader-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="loader-particle"
            style={{
              left: `${(i * 53.7) % 100}%`,
              top: `${(i * 31.3) % 100}%`,
              animationDelay: `${(i % 6) * 0.5}s`,
              animationDuration: `${4 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Expanding ring pulses behind the logo */}
      <span className="loader-ring loader-ring-1" />
      <span className="loader-ring loader-ring-2" />
      <span className="loader-ring loader-ring-3" />

      {/* Center content */}
      <div className="relative flex flex-col items-center">
        <div className="loader-logo-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/vanguard-janitorial-logo.png"
            alt="Stein Facility Services"
            className="loader-logo loader-pulse"
          />
        </div>

        <p className="loader-text mt-6">Stein Facility Services</p>
        <p className="loader-subtext mb-6">Preparing a spotless experience...</p>

        {/* Progress bar */}
        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="loader-percent">{progress}%</span>
      </div>
    </div>
  );
}
