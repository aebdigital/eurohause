import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RollText from "@/components/RollText";
import { services, SITE_URL } from "@/lib/services";

export const metadata: Metadata = {
  title: "Služby - Drevené konštrukcie, väzníky MITEK, drevostavby | Eurohause s.r.o.",
  description:
    "Kompletné služby pre drevené konštrukcie: návrh, výroba väzníkov MITEK, montáž, klampiarstvo, drevostavby a predaj stavebného reziva. Profesionálne riešenia v Piešťanoch.",
  keywords:
    "návrh konštrukcií, výroba väzníkov, MITEK systém, montáž striech, klampiarstvo, drevostavby, KVH profily, stavebné rezivo, Piešťany",
  alternates: { canonical: `${SITE_URL}/sluzby` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/sluzby`,
    title: "Služby - Drevené konštrukcie a väzníky MITEK | Eurohause s.r.o.",
    description:
      "Kompletné služby pre drevené konštrukcie: návrh, výroba väzníkov MITEK, montáž, klampiarstvo, drevostavby a predaj stavebného reziva.",
    images: [`${SITE_URL}/sources/Vyroba/KVH1.jpg`],
  },
};

const breadcrumbsLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domov", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Služby", item: SITE_URL + "/sluzby" },
  ],
};

const collectionLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `${SITE_URL}/sluzby/${s.slug}`,
  })),
};

export default function SluzbyOverview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />

      <section className="contact-hero">
        <div className="contact-hero-bg">
          <Image
            src="/sources/new-photo/IMG-20250801-WA0004.jpg"
            alt="Eurohause služby"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="contact-hero-content">
          <div className="container">
            <h1 className="contact-hero-title">Naše služby</h1>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="services-carousel-container">
            <div
              className="services-carousel"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "30px",
                transform: "none",
              }}
            >
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/sluzby/${s.slug}`}
                  className="service-card"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="service-arrow">↗</div>
                  <div className="service-number">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.shortDescription}</p>
                  <span className="service-btn">
                    <RollText text="Zobraziť viac" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
