import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersContent from "@/components/CareersContent";

export const metadata: Metadata = {
  title: "Careers — Join Our Team",
  description:
    "Start a career in the cleaning industry with Stein Facility Services. We're hiring detail-oriented, reliable individuals throughout Newark and Northern New Jersey. Competitive pay, flexible scheduling, and room for growth.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareersContent />
      </main>
      <Footer />
    </>
  );
}
