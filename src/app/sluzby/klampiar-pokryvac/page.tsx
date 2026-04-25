import type { Metadata } from "next";
import PhotoGallery from "@/components/PhotoGallery";
import ServiceDetailShell from "@/components/ServiceDetailShell";
import { getService, SITE_URL } from "@/lib/services";

const SLUG = "klampiar-pokryvac";
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

const photos = [
  { src: "/sources/klampiar/IMG-20241216-WA0037.jpg", alt: "Klampiarské práce - strešné krytiny" },
  { src: "/sources/klampiar/IMG-20241216-WA0040.jpg", alt: "Pokrývačské práce - inštalácia" },
  { src: "/sources/klampiar/IMG-20241216-WA0043.jpg", alt: "Strešné systémy a krytiny" },
  { src: "/sources/klampiar/IMG-20241216-WA0047.jpg", alt: "Odkvapové systémy" },
];

export default function KlampiarPokryvacPage() {
  return (
    <ServiceDetailShell
      service={service}
      intro="Pokrývačské, klampiarské práce. Predaj strešných krytín plechové, škridlové, PVC fólie, odkvapové systémy. Kompletná realizácia štítových, valbových, pultových a plochých striech."
    >
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <div className="service-contact-info">
          <h4>Kontakt pre klampiarské práce:</h4>
          <p>
            <strong>Konateľ spol. WOW-GROUP s. r. o.</strong>
            <br />
            Bartovič Marco
            <br />
            <strong>Mobil:</strong> <a href="tel:+421948474767">0948 474 767</a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:marcobartovic1995@gmail.com">marcobartovic1995@gmail.com</a>
          </p>
        </div>
        <div style={{ marginLeft: 20, flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sources/klampiar/klampiar-logo.jpg"
            alt="Klampiarstvo logo"
            style={{ maxHeight: 120, width: "auto" }}
          />
        </div>
      </div>

      <div className="service-photo-gallery">
        <PhotoGallery photos={photos} variant="grid-klampiar" />
      </div>
    </ServiceDetailShell>
  );
}
