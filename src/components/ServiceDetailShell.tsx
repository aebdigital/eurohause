"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

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
        <motion.div className="contact-hero-bg" style={{ y }}>
          <Image
            src="/sources/new-photo/IMG-20250801-WA0004.jpg"
            alt={service.title}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <div className="contact-hero-content">
          <div className="container">
            <motion.h1
              key={service.slug + "-title"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-hero-title"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-layout">
            <ServicesSidebar />
            <div className="services-main">
              <div className="service-detail active">
                <motion.div
                  key={service.slug + "-header"}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="service-header"
                >
                  <span className="service-number">{service.num}</span>
                  <h2>{service.title}</h2>
                </motion.div>
                <motion.div
                  key={service.slug + "-content"}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="service-content"
                >
                  <p className="service-intro">{intro}</p>
                  {children}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
