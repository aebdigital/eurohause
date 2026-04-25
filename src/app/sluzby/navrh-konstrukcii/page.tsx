import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import ServiceDetailShell from "@/components/ServiceDetailShell";
import { getService, SITE_URL } from "@/lib/services";

const SLUG = "navrh-konstrukcii";
const service = getService(SLUG)!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `${SITE_URL}/sluzby/${SLUG}` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/sluzby/${SLUG}`,
    title: service.metaTitle,
    description: service.metaDescription,
    images: [`${SITE_URL}${service.ogImage}`],
  },
};

const main = [
  { src: "/sources/Navrh/navrh.png", alt: "Návrh drevených konštrukcií - projekt 1" },
  { src: "/sources/Navrh/navrh2.png", alt: "Návrh drevených konštrukcií - projekt 2" },
  { src: "/sources/Navrh/navrh3.png", alt: "Návrh drevených konštrukcií - projekt 3" },
  { src: "/sources/Navrh/navrh4.png", alt: "Návrh drevených konštrukcií - projekt 4" },
  { src: "/sources/Navrh/navrh5.png", alt: "Návrh drevených konštrukcií - projekt 5" },
  { src: "/sources/Navrh/navrh6.jpg", alt: "Návrh drevených konštrukcií - projekt 6" },
];
const rakoluby = [1, 2, 3].map((n) => ({
  src: `/sources/Navrh/Rakoluby${n}.jpg`,
  alt: `Projekt Rakoluby - drevená konštrukcia ${n}`,
}));
const samorin = [1, 2, 3].map((n) => ({
  src: `/sources/Navrh/Samorin${n}.jpg`,
  alt: `Projekt Šamorín - drevená konštrukcia ${n}`,
}));
const tovarniky = [1, 2, 3].map((n) => ({
  src: `/sources/Navrh/Tovarniky${n}.jpg`,
  alt: `Projekt Tovarníky - drevená konštrukcia ${n}`,
}));
const zvoncin = [1, 2, 3].map((n) => ({
  src: `/sources/Navrh/Zvoncin${n}.jpg`,
  alt: `Projekt Zvončín - drevená konštrukcia ${n}`,
}));

export default function NavrhKonstrukciiPage() {
  return (
    <ServiceDetailShell
      service={service}
      intro="Ako jediná firma na Slovensku sme začali v roku 2011 výrobu z KVH profilu od firmy Storaenso hrúbky 6 cm. KVH profil je smrekové drevo vysušené na 12-13 % vlhkosti a následne frézované na presný rozmer."
    >
      <div className="service-description">
        <p>
          Na návrh drevených konštrukcií so styčníkovými doskami MITEK je určený licenčným
          softvérom, adaptovaný na slovenské podmienky a vyplýva z platných noriem STN a EN.
          Softvérom je spoľahlivo navrhnutá optimálna spotreba reziva a styčníkových dosiek,
          statický prepočet všetkých spojov konštrukcie vrátane ukotvenia.
        </p>
      </div>

      <div className="service-photo-gallery">
        <PhotoGallery photos={main} />
      </div>

      <div className="service-description plain-description">
        <h4>Realizované projekty:</h4>

        <h5>Rakoluby</h5>
        <div className="service-photo-gallery">
          <PhotoGallery photos={rakoluby} variant="grid-3x1" />
        </div>

        <h5>Šamorín</h5>
        <div className="service-photo-gallery">
          <PhotoGallery photos={samorin} variant="grid-3x1" />
        </div>

        <h5>Tovarníky</h5>
        <div className="service-photo-gallery">
          <PhotoGallery photos={tovarniky} variant="grid-3x1" />
        </div>

        <h5>Zvončín</h5>
        <div className="service-photo-gallery">
          <PhotoGallery photos={zvoncin} variant="grid-3x1" />
        </div>
      </div>
    </ServiceDetailShell>
  );
}
