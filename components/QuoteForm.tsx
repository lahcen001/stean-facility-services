"use client";

import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type FS = "idle" | "submitting" | "success" | "error";
interface FD { fullName:string; companyName:string; email:string; phone:string; facilityType:string; serviceFrequency:string; message:string; }
const init: FD = { fullName:"", companyName:"", email:"", phone:"", facilityType:"", serviceFrequency:"", message:"" };

const input: React.CSSProperties = {
  width:"100%", padding:"12px 16px", background:"#FFFFFF",
  border:"1px solid #D9E1E8", borderRadius:"12px",
  fontSize:"14px", color:"#0B1F33", outline:"none",
  fontFamily:"Open Sans, sans-serif",
};
const label: React.CSSProperties = {
  display:"block", fontSize:"11px", fontWeight:700, color:"#52606D",
  marginBottom:"6px", letterSpacing:"0.08em", textTransform:"uppercase",
  fontFamily:"Open Sans, sans-serif",
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
    <section id="quote" style={{ background: "#F4F7F9" }} className="py-16">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="bg-white rounded-3xl p-12 shadow-xl" style={{ border:"1px solid #D9E1E8" }}>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background:"#1FA3A315" }}>
            <CheckCircle2 className="w-8 h-8" style={{ color:"#1FA3A3" }} />
          </div>
          <h2 className="text-2xl font-extrabold mb-3" style={{ color:"#0B1F33", fontFamily:"Montserrat, sans-serif" }}>
            Quote Requested Successfully!
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color:"#52606D", fontFamily:"Open Sans, sans-serif" }}>
            Thank you, <strong style={{ color:"#0B1F33" }}>{form.fullName}</strong>! We&apos;ve received your request and
            will reach out to <strong style={{ color:"#0B1F33" }}>{form.email}</strong> within 1 business day.
          </p>
          <button onClick={() => { setForm(init); setStatus("idle"); }}
            className="text-sm font-semibold underline underline-offset-4"
            style={{ color:"#1FA3A3", fontFamily:"Open Sans, sans-serif" }}>Submit another request</button>
        </div>
      </div>
    </section>
  );

  return (
    <section id="quote" style={{ background: "#F4F7F9" }} className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color:"#1FA3A3", fontFamily:"Open Sans, sans-serif" }}>Free Estimate</p>
            <h2 className="text-4xl font-extrabold leading-tight mb-5" style={{ color:"#0B1F33", fontFamily:"Montserrat, sans-serif" }}>
              Get Your Free<br />Custom Quote
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color:"#52606D", fontFamily:"Open Sans, sans-serif" }}>
              Fill out the form and I&apos;ll personally put together a tailored cleaning proposal for your space — no obligation.
            </p>
            <ul className="space-y-4">
              {["No-commitment estimate","Response within 1 business day","Customized to your facility"].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color:"#52606D", fontFamily:"Open Sans, sans-serif" }}>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:"#1FA3A315" }}>
                    <span className="w-2 h-2 rounded-full" style={{ background:"#1FA3A3" }} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-xl" style={{ border:"1px solid #D9E1E8" }}>
            {status === "error" && (
              <div className="flex items-start gap-3 rounded-xl px-4 py-3 mb-5 text-sm"
                style={{ background:"#FEF2F2", border:"1px solid #FECACA", color:"#DC2626" }}>
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />{err}
              </div>
            )}
            <form ref={ref} onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label style={label}>Full Name</label><input name="fullName" type="text" required placeholder="Jane Smith" value={form.fullName} onChange={onChange} style={input} /></div>
                <div><label style={label}>Company Name</label><input name="companyName" type="text" required placeholder="Acme Corp" value={form.companyName} onChange={onChange} style={input} /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label style={label}>Email Address</label><input name="email" type="email" required placeholder="jane@company.com" value={form.email} onChange={onChange} style={input} /></div>
                <div><label style={label}>Phone Number</label><input name="phone" type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={onChange} style={input} /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label style={label}>Facility Type</label>
                  <select name="facilityType" required value={form.facilityType} onChange={onChange} style={input}>
                    <option value="" disabled>Select type...</option>
                    {["Office","Retail","Medical","Other"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label style={label}>Service Frequency</label>
                  <select name="serviceFrequency" required value={form.serviceFrequency} onChange={onChange} style={input}>
                    <option value="" disabled>Select frequency...</option>
                    {["Daily","Weekly","Bi-Weekly","Monthly","One-time","Other"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div><label style={label}>Notes / Special Requests</label>
                <textarea name="message" rows={4} placeholder="Tell us about your facility size, specific needs, or any questions..."
                  value={form.message} onChange={onChange} style={{ ...input, resize:"none" }} />
              </div>
              <button type="submit" disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2.5 font-bold py-3.5 rounded-xl text-sm transition-all duration-200"
                style={{ background: status === "submitting" ? "#C8E56A" : "#A7D129", color:"#0B1F33", fontFamily:"Montserrat, sans-serif" }}
              >
                {status === "submitting" ? (
                  <><span className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />Submitting...</>
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
