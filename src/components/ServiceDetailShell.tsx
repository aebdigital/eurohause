import Image from "next/image";
import ServicesSidebar from "./ServicesSidebar";
import { SITE_URL, type ServiceSummary } from "@/lib/services";

export default function ServiceDetailShell({
  service,
  intro,
  children,
}: {
  service: ServiceSummary;
  intro: string;
  children: React.ReactNode;
}) {
  const url = `${SITE_URL}/sluzby/${service.slug}`;

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domov", item: SITE_URL + "/" },
      { "@type": "ListItem", position: 2, name: "Služby", item: SITE_URL + "/sluzby" },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url,
    image: SITE_URL + service.ogImage,
    provider: {
      "@type": "LocalBusiness",
      name: "Eurohause s.r.o.",
      telephone: "+421902940600",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Orviská cesta 7137",
        addressLocality: "Piešťany",
        postalCode: "92101",
        addressCountry: "SK",
      },
    },
    areaServed: { "@type": "Place", name: "Piešťany a okolie, Trnavský kraj" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />

      <section className="contact-hero">
        <div className="contact-hero-bg">
          <Image
            src="/sources/new-photo/IMG-20250801-WA0004.jpg"
            alt={service.title}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="contact-hero-content">
          <div className="container">
            <h1 className="contact-hero-title">{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-layout">
            <ServicesSidebar />
            <div className="services-main">
              <div className="service-detail active">
                <div className="service-header">
                  <span className="service-number">{service.num}</span>
                  <h2>{service.title}</h2>
                </div>
                <div className="service-content">
                  <p className="service-intro">{intro}</p>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
