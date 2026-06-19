import { services, getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDesc,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.shortDesc,
      images: [{ url: service.image }],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ServiceDetail service={service} />
      </main>
      <Footer />
    </>
  );
}
