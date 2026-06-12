interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const mark  = variant === "light" ? "#FFFFFF" : "#0B1F33";
  const accent = "#1FA3A3";
  const text  = variant === "light" ? "#FFFFFF" : "#0B1F33";
  const sub   = "#1FA3A3";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6"  y="4"  width="24" height="6" rx="1.5" fill={mark} />
        <rect x="3"  y="14" width="20" height="6" rx="1.5" fill={mark} />
        <rect x="6"  y="24" width="24" height="6" rx="1.5" fill={accent} />
        <rect x="27" y="4"  width="3"  height="26" rx="1.5" fill={accent} opacity="0.35" />
      </svg>
      <div className="leading-none">
        <span className="block text-[16px] font-black tracking-tight" style={{ fontFamily: "Montserrat, sans-serif", color: text, letterSpacing: "-0.02em" }}>
          STEIN
        </span>
        <span className="block text-[9px] font-semibold tracking-[0.18em] uppercase mt-0.5" style={{ fontFamily: "Open Sans, sans-serif", color: sub }}>
          Janitorial
        </span>
      </div>
    </div>
  );
}
