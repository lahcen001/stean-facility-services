"use client";

import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Phone, Mail } from "lucide-react";

type FS = "idle" | "submitting" | "success" | "error";
interface FD { fullName:string; companyName:string; email:string; phone:string; facilityType:string; serviceFrequency:string; message:string; }
const init: FD = { fullName:"", companyName:"", email:"", phone:"", facilityType:"", serviceFrequency:"", message:"" };

const inputStyle: React.CSSProperties = {
  width:"100%", padding:"11px 14px", background:"#ffffff",
  border:"1px solid #DDDDDD", borderRadius:"4px",
  fontSize:"14px", color:"#333333", outline:"none",
  fontFamily:"Open Sans, sans-serif",
};
const labelStyle: React.CSSProperties = {
  display:"block", fontSize:"12px", fontWeight:700, color:"#1B3A6B",
  marginBottom:"6px", fontFamily:"Open Sans, sans-serif",
};

export default function QuoteForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FD>(init);
  const [status, setStatus] = useState<FS>("idle");
  const [err, setErr] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault(); setStatus("submitting"); setErr("");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        ref.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
    } catch(e) {
      console.error(e);
      setErr("Something went wrong. Please try again or call us directly.");
      setStatus("error");
    }
  };

  if (status === "success") return (
    <section id="quote" style={{ background: "#F5F5F5" }} className="py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="bg-white rounded-lg p-12 shadow-lg" style={{ border: "1px solid #DDDDDD" }}>
          <div className="w-16 h-16 rounded flex items-center justify-center mx-auto mb-6"
            style={{ background: "#4BAF4715" }}>
            <CheckCircle2 className="w-8 h-8" style={{ color: "#4BAF47" }} />
          </div>
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
            Quote Requested Successfully!
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#666666", fontFamily: "Open Sans, sans-serif" }}>
            Thank you, <strong style={{ color: "#1B3A6B" }}>{form.fullName}</strong>! We&apos;ve received your request and
            will reach out to <strong style={{ color: "#1B3A6B" }}>{form.email}</strong> within 1 business day.
          </p>
          <button onClick={() => { setForm(init); setStatus("idle"); }}
            className="text-sm font-semibold underline underline-offset-4"
            style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>Submit another request</button>
        </div>
      </div>
    </section>
  );

  return (
    <section id="quote" style={{ background: "#F5F5F5" }} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest mb-2"
            style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>Free Estimate</p>
          <h2 className="text-3xl font-extrabold mb-4"
            style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
            Request a Commercial Cleaning Consultation
          </h2>
          <div className="w-16 h-1 mx-auto rounded mb-4" style={{ background: "#4BAF47" }} />
          <p className="text-base max-w-xl mx-auto" style={{ color: "#666666", fontFamily: "Open Sans, sans-serif" }}>
            Fill out the form and we&apos;ll put together a tailored cleaning proposal for your space — no obligation, no commitment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg p-7 mb-6" style={{ background: "#1B3A6B" }}>
              <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "No-commitment estimate",
                  "Response within 1 business day",
                  "Customized to your facility",
                  "Serving all of Northern NJ",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm"
                    style={{ color: "#ffffffcc", fontFamily: "Open Sans, sans-serif" }}>
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#4BAF47" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg p-7" style={{ background: "#ffffff", border: "1px solid #DDDDDD" }}>
              <h3 className="text-base font-bold mb-4" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
                Prefer to Call?
              </h3>
              <a href="tel:+18622707055" className="flex items-center gap-2.5 text-sm font-semibold mb-3 transition-colors"
                style={{ color: "#1B3A6B", fontFamily: "Open Sans, sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#4BAF47")}
                onMouseLeave={e => (e.currentTarget.style.color = "#1B3A6B")}
              >
                <Phone className="w-4 h-4" style={{ color: "#4BAF47" }} />
                +1 (862) 270-7055
              </a>
              <a href="mailto:info@steinfacilityservices.com" className="flex items-center gap-2.5 text-sm transition-colors"
                style={{ color: "#666666", fontFamily: "Open Sans, sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#4BAF47")}
                onMouseLeave={e => (e.currentTarget.style.color = "#666666")}
              >
                <Mail className="w-4 h-4" style={{ color: "#4BAF47" }} />
                info@steinfacilityservices.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-md" style={{ border: "1px solid #DDDDDD" }}>
            {status === "error" && (
              <div className="flex items-start gap-3 rounded px-4 py-3 mb-5 text-sm"
                style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#DC2626" }}>
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />{err}
              </div>
            )}
            <form ref={ref} onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label style={labelStyle}>Full Name *</label><input name="fullName" type="text" required placeholder="Jane Smith" value={form.fullName} onChange={onChange} style={inputStyle} /></div>
                <div><label style={labelStyle}>Company Name *</label><input name="companyName" type="text" required placeholder="Acme Corp" value={form.companyName} onChange={onChange} style={inputStyle} /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label style={labelStyle}>Email Address *</label><input name="email" type="email" required placeholder="jane@company.com" value={form.email} onChange={onChange} style={inputStyle} /></div>
                <div><label style={labelStyle}>Phone Number</label><input name="phone" type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={onChange} style={inputStyle} /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label style={labelStyle}>Facility Type *</label>
                  <select name="facilityType" required value={form.facilityType} onChange={onChange} style={inputStyle}>
                    <option value="" disabled>Select type...</option>
                    {["Office","Medical Office","Retail Store","Restaurant","Supermarket","Government Building","Floor Cleaning","Post-Construction","Other"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label style={labelStyle}>Service Frequency *</label>
                  <select name="serviceFrequency" required value={form.serviceFrequency} onChange={onChange} style={inputStyle}>
                    <option value="" disabled>Select frequency...</option>
                    {["Daily","Weekly","Bi-Weekly","Monthly","One-time","Other"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div><label style={labelStyle}>Notes / Special Requests</label>
                <textarea name="message" rows={4}
                  placeholder="Tell us about your facility size, specific needs, or any questions..."
                  value={form.message} onChange={onChange} style={{ ...inputStyle, resize:"none" }} />
              </div>
              <button type="submit" disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2.5 font-bold py-3.5 rounded text-sm transition-all duration-200"
                style={{
                  background: status === "submitting" ? "#7CC97A" : "#4BAF47",
                  color:"#ffffff",
                  fontFamily:"Montserrat, sans-serif"
                }}
                onMouseEnter={e => { if (status !== "submitting") (e.currentTarget.style.background = "#3D9039"); }}
                onMouseLeave={e => { if (status !== "submitting") (e.currentTarget.style.background = "#4BAF47"); }}
              >
                {status === "submitting" ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</>
                ) : (
                  <><Send className="w-4 h-4" />Request My Free Quote</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
