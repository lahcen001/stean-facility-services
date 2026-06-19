"use client";

import {
  CheckCircle2, MapPin, Phone, Mail, ArrowRight,
  ShieldCheck, ClipboardCheck, Lock, Wallet, AlertTriangle, MessageSquare,
} from "lucide-react";
import CareersForm from "@/components/CareersForm";

const benefits = [
  { text: "Competitive Pay – We offer fair wages based on experience and performance." },
  { text: "Consistent Work – Enjoy a steady flow of jobs with flexible scheduling options." },
  { text: "On-the-Job Training – No prior experience? No problem! We provide comprehensive training to ensure you meet our professional cleaning standards." },
  { text: "Growth Opportunities – Many of our top employees advance into leadership roles within the company." },
  { text: "Supportive Team Culture – Work alongside a friendly and professional team that values hard work and reliability." },
  { text: "Eco-Friendly Products – Our cleaning methods prioritize safe, non-toxic solutions for both our employees and clients." },
];

const responsibilities = [
  "Dusting, sweeping, mopping, and vacuuming floors and surfaces.",
  "Sanitizing bathrooms and kitchens to maintain high hygiene standards.",
  "Window and surface cleaning to remove dirt and smudges.",
  "Following safety and quality cleaning protocols as per company standards.",
  "Handling cleaning supplies and equipment properly to ensure efficiency.",
  "Communicating with clients professionally and addressing their cleaning needs.",
];

const requirements = [
  "Be reliable, punctual, and detail-oriented.",
  "Have a strong work ethic and positive attitude.",
  "Be comfortable working independently or as part of a team.",
  "Be able to lift up to 25 lbs and perform physically demanding tasks.",
  "Have reliable transportation to job sites.",
  "Experience in professional cleaning is preferred but not required—we provide training!",
];

const policies = [
  {
    icon: ShieldCheck,
    title: "1. Honesty & Integrity",
    body: "All employees are expected to provide accurate and truthful information about their experience and qualifications during the hiring process. Any misrepresentation or falsification of credentials may result in immediate termination. Employees must act with integrity and professionalism at all times.",
  },
  {
    icon: ClipboardCheck,
    title: "2. Performance & Professional Conduct",
    body: "Employees are required to follow company cleaning protocols and standards to ensure quality service. A respectful and positive attitude toward clients, coworkers, and supervisors is expected at all times. Employees should be punctual and reliable, arriving at job sites on time and completing tasks efficiently. Supervisors will conduct performance evaluations, and employees who do not meet company standards may be given additional training or, if necessary, terminated.",
  },
  {
    icon: Lock,
    title: "3. Personal Belongings & Theft Allegations",
    body: "Employees are responsible for securing their own personal belongings while at work. The company is not liable for lost or stolen items, and workers should avoid bringing valuable possessions to job sites. Any claims of theft must be reported immediately with supporting evidence. False accusations will be taken seriously and may result in disciplinary action.",
  },
  {
    icon: Wallet,
    title: "4. Payroll & Payment Policy",
    body: "Employees are paid every other Monday, following the completion of their second week of work. Payments are processed via check, direct deposit, or digital payment methods (e.g., Venmo, Zelle, etc.). Any disputes regarding payment must be reported within 48 hours for investigation and resolution.",
  },
  {
    icon: AlertTriangle,
    title: "5. Disciplinary Actions & Termination",
    body: "We value professionalism and integrity. Employees may face termination for: providing false information about their work experience, repeated failure to meet cleaning performance standards, engaging in workplace drama such as making false accusations or causing disruptions, neglecting responsibilities or showing poor work ethic, or violating company policies or engaging in any form of misconduct.",
  },
  {
    icon: MessageSquare,
    title: "6. Communication & Reporting Issues",
    body: "If you have concerns regarding work conditions, scheduling, or payroll, you can contact us by phone or email below. We encourage open communication and will address all employee concerns professionally. By applying for a position, you acknowledge that you have read and agree to these policies.",
  },
];

const faqs = [
  {
    q: "Do I need previous cleaning experience to apply?",
    a: "No, we provide training for all new employees! However, prior experience in professional cleaning is a plus.",
  },
  {
    q: "What type of jobs will I be working on?",
    a: "You will be assigned to residential and commercial cleaning jobs based on your availability and skills.",
  },
  {
    q: "What should I bring to my first day of work?",
    a: "New employees should bring a valid ID, comfortable work clothes, and non-slip shoes for safety.",
  },
  {
    q: "Do you provide cleaning supplies?",
    a: "Yes, Stein Facility Services provides all necessary cleaning supplies and equipment.",
  },
  {
    q: "What happens if I have an emergency and can't come to work?",
    a: "We understand that emergencies happen. Please notify your supervisor as soon as possible if you are unable to make it to your scheduled job.",
  },
];

export default function CareersContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[133px] relative" style={{ minHeight: "380px" }}>
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Join the Stein Facility Services team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #1B3A6BEE 55%, #1B3A6B99)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>
            Careers
          </p>
          <h1 className="font-black leading-tight mb-4 text-white"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontFamily: "Montserrat, sans-serif" }}>
            Careers at Stein Facility Services
          </h1>
          <p className="text-base max-w-2xl" style={{ color: "#ffffffcc", fontFamily: "Open Sans, sans-serif" }}>
            Join Our Team &amp; Make a Difference!
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#ffffff" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <p className="text-base leading-relaxed" style={{ color: "#444444", fontFamily: "Open Sans, sans-serif" }}>
            At Stein Facility Services, we believe in delivering top-quality, eco-friendly cleaning services that create a healthier and more comfortable environment for our clients. Our success comes from a strong team of dedicated professionals who take pride in their work.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#444444", fontFamily: "Open Sans, sans-serif" }}>
            We are currently hiring enthusiastic, detail-oriented individuals who are looking to build a rewarding career in the cleaning industry. If you share our commitment to cleanliness, professionalism, and outstanding customer service, we invite you to join us. Whether you&apos;re starting fresh or seeking a new opportunity, Stein Facility Services offers competitive pay, flexible scheduling, and room for career growth in a supportive work environment.
          </p>
        </div>
      </section>

      {/* Why work with us */}
      <section style={{ background: "#F5F5F5" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
            Why Work with Stein Facility Services?
          </h2>
          <div className="w-12 h-1 rounded mb-4" style={{ background: "#4BAF47" }} />
          <p className="text-base leading-relaxed mb-6" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
            We understand that our employees are the backbone of our company. That&apos;s why we strive to create a supportive, respectful, and rewarding work environment. Here are a few benefits of joining our team:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-6">
            {benefits.map((b) => (
              <li key={b.text} className="flex items-start gap-2.5 text-sm bg-white rounded-lg p-3"
                style={{ color: "#444444", fontFamily: "Open Sans, sans-serif", border: "1px solid #DDDDDD" }}>
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#4BAF47" }} />
                {b.text}
              </li>
            ))}
          </ul>
          <p className="text-base leading-relaxed" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
            If you&apos;re dependable, motivated, and ready to work, apply today and become part of a company that values quality, integrity, and teamwork.
          </p>
        </div>
      </section>

      {/* Current Open Positions */}
      <section style={{ background: "#ffffff" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
            Current Open Positions
          </h2>
          <div className="w-12 h-1 rounded mb-6" style={{ background: "#4BAF47" }} />

          <div className="rounded-lg p-7 mb-8" style={{ background: "#F5F5F5", border: "1px solid #DDDDDD" }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
              Professional Cleaner
            </h3>
            <div className="flex flex-wrap gap-4 mb-5">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-full bg-white"
                style={{ color: "#1B3A6B", fontFamily: "Open Sans, sans-serif", border: "1px solid #DDDDDD" }}>
                <MapPin className="w-3.5 h-3.5" style={{ color: "#4BAF47" }} />
                Essex County
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-2 rounded-full bg-white"
                style={{ color: "#1B3A6B", fontFamily: "Open Sans, sans-serif", border: "1px solid #DDDDDD" }}>
                Salary: Competitive, based on experience
              </span>
            </div>

            <p className="text-base leading-relaxed mb-3" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
              <strong style={{ color: "#1B3A6B" }}>Job Responsibilities:</strong> As a Professional Cleaner, you will be responsible for performing a variety of cleaning tasks at residential and commercial properties, including:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm bg-white rounded-lg p-3"
                  style={{ color: "#444444", fontFamily: "Open Sans, sans-serif", border: "1px solid #DDDDDD" }}>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#4BAF47" }} />
                  {r}
                </li>
              ))}
            </ul>

            <p className="text-base leading-relaxed mb-3" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
              <strong style={{ color: "#1B3A6B" }}>Job Requirements:</strong> To be considered for this role, applicants must:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm bg-white rounded-lg p-3"
                  style={{ color: "#444444", fontFamily: "Open Sans, sans-serif", border: "1px solid #DDDDDD" }}>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#4BAF47" }} />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg p-6 flex flex-wrap items-center gap-3" style={{ background: "#1B3A6B" }}>
            <p className="text-sm font-semibold text-white" style={{ fontFamily: "Open Sans, sans-serif" }}>
              How to Apply: Send your resume and a short introduction to{" "}
              <a href="mailto:info@steinfacilityservices.com" className="underline" style={{ color: "#4BAF47" }}>
                info@steinfacilityservices.com
              </a>{" "}
              or call{" "}
              <a href="tel:+18622707055" className="underline" style={{ color: "#4BAF47" }}>
                (862) 270-7055
              </a>{" "}
              to schedule an interview.
            </p>
          </div>
        </div>
      </section>

      {/* Employment Policies */}
      <section style={{ background: "#F5F5F5" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
            Employment Policies &amp; Workplace Conduct
          </h2>
          <div className="w-12 h-1 rounded mb-5" style={{ background: "#4BAF47" }} />
          <p className="text-base leading-relaxed mb-8" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
            At Stein Facility Services, we believe in transparency, accountability, and maintaining a professional work environment. To ensure that our workplace operates smoothly and fairly for all employees, we have established the following policies:
          </p>

          <div className="space-y-6">
            {policies.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-lg p-6" style={{ border: "1px solid #DDDDDD" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0" style={{ background: "#1B3A6B10" }}>
                    <Icon className="w-4.5 h-4.5" style={{ color: "#1B3A6B" }} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>{title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section style={{ background: "#ffffff" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
            How to Apply
          </h2>
          <div className="w-12 h-1 rounded mb-5" style={{ background: "#4BAF47" }} />
          <p className="text-base leading-relaxed mb-6" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
            If you&apos;re interested in joining the Stein Facility Services team, follow these steps:
          </p>
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {[
              { step: "Step 1", text: "Fill out our online application form below, or send your resume and a brief introduction by email." },
              { step: "Step 2", text: "Call us to discuss available positions and schedule a time to talk." },
              { step: "Step 3", text: "If selected, we will contact you for an interview." },
            ].map(({ step, text }) => (
              <div key={step} className="rounded-lg p-5" style={{ background: "#F5F5F5", border: "1px solid #DDDDDD" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#4BAF47", fontFamily: "Open Sans, sans-serif" }}>{step}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#444444", fontFamily: "Open Sans, sans-serif" }}>{text}</p>
              </div>
            ))}
          </div>
          <p className="text-base leading-relaxed" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>
            We look forward to welcoming motivated, hardworking individuals to our team!
          </p>
        </div>
      </section>

      {/* Application Form */}
      <CareersForm />

      {/* Join Our Team Today CTA */}
      <section style={{ background: "#1B3A6B" }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Join Our Team Today!
          </h2>
          <p className="text-base mb-8" style={{ color: "#ffffffcc", fontFamily: "Open Sans, sans-serif" }}>
            If you&apos;re looking for a rewarding job in a professional, friendly, and growth-oriented environment, we encourage you to apply today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="#apply"
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded text-sm transition-all duration-200"
              style={{ background: "#4BAF47", color: "#ffffff", fontFamily: "Montserrat, sans-serif" }}>
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+18622707055"
              className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded text-sm transition-all duration-200 border-2"
              style={{ color: "#ffffff", borderColor: "#ffffff55", fontFamily: "Open Sans, sans-serif" }}>
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-sm" style={{ color: "#ffffffcc", fontFamily: "Open Sans, sans-serif" }}>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" style={{ color: "#4BAF47" }} />Newark, NJ &amp; Northern New Jersey</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4" style={{ color: "#4BAF47" }} />info@steinfacilityservices.com</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4" style={{ color: "#4BAF47" }} />(862) 270-7055</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#F5F5F5" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 rounded mb-6" style={{ background: "#4BAF47" }} />
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-lg p-6" style={{ border: "1px solid #DDDDDD" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: "#1B3A6B", fontFamily: "Montserrat, sans-serif" }}>{q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#555555", fontFamily: "Open Sans, sans-serif" }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
