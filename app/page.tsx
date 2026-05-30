import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValuePillars from "@/components/ValuePillars";
import Services from "@/components/Services";
import GalleryStrip from "@/components/GalleryStrip";
import Frequency from "@/components/Frequency";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValuePillars />
        <Services />
        <GalleryStrip />
        <Frequency />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
