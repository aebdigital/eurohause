import type { Metadata } from "next";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";
import { SITE_URL } from "@/lib/services";

export const metadata: Metadata = {
  title:
    "Realizácie - Realizované drevené konštrukcie a drevostavby | Eurohause s.r.o.",
  description:
    "Galéria realizovaných projektov drevených konštrukcií, väzníkov MITEK, drevostavieb a klampiarskych prác. Prezrite si našu prácu v Piešťanoch a okolí.",
  alternates: { canonical: `${SITE_URL}/realizacie` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/realizacie`,
    title: "Galéria projektov - Realizované drevené konštrukcie | Eurohause s.r.o.",
    description:
      "Galéria realizovaných projektov drevených konštrukcií, väzníkov MITEK, drevostavieb a klampiarskych prác.",
    images: [`${SITE_URL}/sources/Navrh/navrh.png`],
  },
};

const breadcrumbsLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domov", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Realizácie", item: SITE_URL + "/realizacie" },
  ],
};

const galleryLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Galéria projektov Eurohause s.r.o.",
  url: `${SITE_URL}/realizacie`,
  description:
    "Galéria realizovaných projektov drevených konštrukcií, väzníkov MITEK, drevostavieb a klampiarskych prác.",
  creator: { "@type": "Organization", name: "Eurohause s.r.o." },
};

const portfolio = [
  "002118e6-1399-4f5d-a260-73c08823d02a.JPG",
  "14a8fc15-feed-4a9b-801b-005429ce901e.JPG",
  "1bfd3020-ddbc-44b6-9f92-44b737a6dbe0.JPG",
  "1e0bef74-af84-4640-8d4e-7a1851b64363.JPG",
  "2ff18abd-e19c-4837-9770-43fd13cfa115.JPG",
  "33cc9fd9-d8d0-4b98-ad3c-f8a02e40e871.JPG",
  "45c5b270-9160-47fd-9ddc-f0c6d4de132e.JPG",
  "4bccd518-8c98-460a-905d-1408bde2c844.JPG",
  "4c57d5bc-f136-4fac-b61e-4011952c33c1.JPG",
  "5445fbdd-fc89-4ed0-8da1-c1e6c0c5fd06.JPG",
  "646c4f42-c30a-4271-82f2-44a3b10d99c5.JPG",
  "64e195f8-fb62-432b-8735-a830b49e9fb4.JPG",
  "65fa5336-7941-4c15-820e-fb7c8d11fc3d.JPG",
  "6645e096-faeb-4e82-8393-2fb74c7f8086.JPG",
  "670999e7-d2ca-47d2-a61f-0c6a66bbaad5.JPG",
  "6cb02f29-9350-4b9e-ae0e-99aeb18bb6bb.JPG",
  "76ce9fa9-15e0-406c-9c87-733adae35721.JPG",
  "7a0bb5b0-8fff-4078-8265-9f296a036688.JPG",
  "81722462-95fe-4de6-8ff6-11769755e4a2.JPG",
  "8583da2b-bac7-408d-a850-e733e992d6fd.JPG",
  "9156d551-b0ef-4b5b-b249-83f96dd7aac0.JPG",
  "96887b96-98fb-4b95-bad3-e0a7132a1dee.JPG",
  "9d6f321d-fcb4-453b-b000-44c87f0a998d.JPG",
  "IMG-20250801-WA0003.jpg",
  "IMG-20250801-WA0004.jpg",
  "IMG-20250801-WA0006.jpg",
  "IMG-20250801-WA0011.jpg",
  "IMG-20250801-WA0012.jpg",
  "IMG-20250801-WA0013.jpg",
  "IMG-20250801-WA0015.jpg",
  "IMG-20250801-WA0018.jpg",
  "IMG-20250801-WA0019.jpg",
  "IMG-20250801-WA0020.jpg",
  "IMG-20250801-WA0027.jpg",
  "IMG-20250801-WA0028.jpg",
  "IMG-20250801-WA0030.jpg",
  "a56b9837-a4f7-4be0-9751-91e84b4ae16e.JPG",
  "bbb2051e-e9e9-4ce7-86f2-e0f6bdf9ee2b.JPG",
  "d3b50215-543c-49df-8e10-368546e9edb1.JPG",
].map((f) => ({ src: `/sources/new-photo/${f}`, alt: "Eurohause realizácie" }));

import FadeInUp from "@/components/FadeInUp";

export default function RealizaciePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryLd) }}
      />
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <Image
            src="/sources/new-photo/IMG-20250801-WA0005.jpg"
            alt="Galéria pozadie"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="contact-hero-content">
          <div className="container">
            <FadeInUp keyId="realizacie-title">
              <h1 className="contact-hero-title">Realizácie</h1>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="portfolio-filters">
        <div className="container">
          <FadeInUp keyId="realizacie-grid" delay={0.2}>
            <PhotoGallery photos={portfolio} variant="portfolio" />
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
